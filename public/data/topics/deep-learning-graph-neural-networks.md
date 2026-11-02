# Deep Learning / Graph Neural Networks

深度学习 / 图神经网络

117 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## The Cost of Symmetry: Universality and Hardness for Permutation\-Invariant Neural Networks

**Authors:** Dashiell Bhattacharyya

**ID:** 155591 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4RkWTjPp9P>) | [PDF](<https://openreview.net/pdf?id=4RkWTjPp9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155591>)

Permutation\-invariant machine learning architectures, such as DeepSets, Set Transformers, Graph Neural Networks, and $k$\-GNNs, are each highly used and studied individually\. We unify them into a single complexity\-theoretic framework: noisy symmetric circuits\. Each architecture falls into our hierarchy at a level $k$, parameterized by the order of interactions it captures\. Within this framework, we tightly characterize the cost of symmetry\. At level $1$, where DeepSets operate, every symmetric function on boolean input computable by a neural network has an equivalent DeepSet, at the cost of an additive blowup nearly linear in the input size, and we exhibit an explicit function that requires this blowup\. At level $2$, where Set Transformers and GNNs operate, the same near\-linear blowup suffices for WL\-invariant functions, while non\-WL\-invariant functions are known to be uncomputable at level $2$\. These results show that, in the regimes we cover, WL is the \\textit\{only\} barrier to using a symmetric architecture; everywhere else, symmetry is \\textit\{low\-cost\}\. Experiments illustrate the near\-linear threshold predicted by the theory\.

## Chasing Label Shifters: A Change\-Aware Framework for Dynamic Graph Node Classification

**Authors:** Junghoon Kim; Seungyoon Choi; Hyunsung Kim; Chanyoung Park

**ID:** 150479 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkeWDm9UGm>) | [PDF](<https://openreview.net/pdf?id=hkeWDm9UGm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150479>)

_Abstract unavailable from the accessible public sources._

## Efficient Dynamic Algorithms for Graph Neural Networks with Non\-Linearity

**Authors:** Kiarash Banihashem; MohammadTaghi Hajiaghayi; Mahdi JafariRaviz; Silvio Lattanzi; Danny Mittal

**ID:** 154492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DC1kP2puyf>) | [PDF](<https://openreview.net/pdf?id=DC1kP2puyf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154492>)

Graph Neural Networks \(GNNs\) are widely used for representation learning on graphs, but most methods assume static topologies, making them inefficient on evolving networks where edges change over time\. Existing dynamic approaches either model graph evolution through temporal GNN architectures without focusing on efficient dynamic maintenance, or are restricted to linear propagation models based on Personalized PageRank\.  In this work, we study how to efficiently maintain node representations for non\-linear GNN dynamics under edge insertions and deletions\. For a broad class of standard activation functions, we develop a residual\-based dynamic algorithm that selectively propagates local errors via push operations, maintaining an approximation to the evolving fixed point without full recomputation\. We prove that our method achieves amortized $O\(1/\\epsilon\)$ update time per graph change under a degree\-normalized error guarantee\. Our approach uses a potential\-based analysis in a degree\-scaled norm and, in contrast to prior work on the linear case, requires no randomness assumptions on either the update sequence or the input vector\. For the linear special case, we additionally provide an exact dynamic algorithm via low\-rank matrix inverse updates\. Experiments on benchmark datasets show that incorporating non\-linearity improves accuracy while preserving efficient update performance, yielding a scalable and theoretically grounded framework for dynamic GNNs\.

## No Triangulation Without Representation: Generalization in Topological Deep Learning

**Authors:** Johannes S\. Schmidt; Martin Carrasco; Ernst Röell; Guy Wolf; Nello Blaser; Bastian Rieck

**ID:** 139061 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nVgjwC8P84>) | [PDF](<https://openreview.net/pdf?id=nVgjwC8P84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139061>)

Despite an ever\-increasing interest in topological deep learning models that target higher\-order datasets, there is no consensus on how to evaluate such models\. This is exacerbated by the fact that topological objects permit operations, such as structural refinements, that are not appropriate for graph data\. In this work, we extend MANTRA, a benchmark dataset containing manifold triangulations, to a larger class of manifolds with more diverse homeomorphism types\. We show that, unlike prior claims, both graph neural networks \(GNNs\) and higher\-order message passing \(HOMP\) methods can saturate the benchmark\. However, we find that this is contingent on the right representation and feature assignment, emphasizing their importance in baseline models\. We thus provide a novel evaluation protocol based on representational diversity and triangulation refinement\. Surprisingly, we find no indication that existing models are capable of generalizing beyond the combinatorial structure of the data\. This points towards a research gap in developing models that understand topological structure independent of scale\. Our work thus provides the necessary scaffolding to evaluate future models and enable the development of topology\-aware inductive biases\.

## Neutral\-atom quantum features as complementary structural encodings for graph learning

**Authors:** Igor Sokolov; Mathieu Garrigues; Matthias Hecker; Lorenzo Moro; Shaheen Acheche

**ID:** 154642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5kQ4ynxal>) | [PDF](<https://openreview.net/pdf?id=C5kQ4ynxal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154642>)

Structural descriptors provide graph neural networks \(GNNs\) with positional and topological inductive biases\. However, widely used classical encodings based on random walks or Laplacian spectra emphasize specific structural statistics of a graph, leaving room for alternative descriptors\. Neutral\-atom quantum processing units \(QPUs\) can realize graph\-dependent Rydberg Hamiltonians, allowing graph topology to be probed through dynamical correlation measurements\. In this work, we use these measurements as quantum graph features \(QGFs\), providing a complementary, hardware\-derived family of structural encoding that \-\-\- as we demonstrate empirically \-\-\- is not accurately described by classical features derived from Laplacian or adjacency matrix\. By appropriately selecting the quench parameters of the Hamiltonian, we access two characteristic correlation regimes with distinct structural signatures: antiferromagnetic\-like and ferromagnetic\-like\. On an intrinsic information benchmark of 15 topological and spectral probing tasks, quantum and hybrid quantum\-classical features match or surpass classical descriptors on local topological properties\. When supplied to message\-passing, attention, and graph\-transformer backbones, hybrid quantum\-classical features yield small improvements that are within cross\-fold noise on most cells but sign\-consistent across architectures\. When comparing noiseless emulation\-derived quantum features with an end\-to\-end neutral\-atom QPU implementation, the downstream hybrid gain over the classical baseline persists on five out of six backbones\.

## Bias, Measurement Error, and Double\-Dipping: When Can GNN Convolutions Help Brain Connectome Prediction?

**Authors:** Tommaso Castellani; Jiaqi Li; Muriah D Wheelock; Rezwana R Razzaque; Helmut Laufs; Hong Chen; Claire Donnat

**ID:** 153204 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N3upYxYotA>) | [PDF](<https://openreview.net/pdf?id=N3upYxYotA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153204>)

Graph Neural Networks \(GNNs\) are an important tool for fMRI\-based prediction, where empirical functional connectivity matrices serve both as node features and as the basis for graph construction\. However, recent studies \(and our own experiments\) show that these methods often fail to outperform simpler graph\-agnostic baselines\. We propose a statistical explanation for this failure by formulating connectome prediction as an errors\-in\-variables \(EIV\) problem: the true connectome is latent, while the observed covariance or correlation matrix is a noisy finite\-time\-series estimate\. In a linear asymptotic setting, we decompose the effect of graph convolution into three mechanisms: smoothing\-induced bias and variance reduction, graph estimation error, and a double\-dipping effect arising when the same noisy matrix determines both topology and features\. Under a latent community model adapted to this neuroscience problem, we identify a narrow favorable regime in which message passing can improve prediction: the regression target must be community\-smooth, and the time\-series length must lie in a window between the graph\-estimation and raw\-noise limits\. Simulations validate this decomposition by isolating oracle, independently estimated, and same\-sample graphs, while real\-data experiments illustrate that standard connectome GNN pipelines often fall outside this regime\. Our results clarify when graph convolutions can help brain connectome prediction, and why they often do not\.

## Expressive Power of Deep Homomorphism Networks over Relational Databases

**Authors:** Balder ten Cate; Maurice Funk; Benny Kimelfeld; Carsten Lutz; Moritz Schönherr; Arie Soeteman

**ID:** 152909 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PUkMW1q30n>) | [PDF](<https://openreview.net/pdf?id=PUkMW1q30n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152909>)

The expressive limitations of message\-passing Graph Neural Networks \(GNNs\) have motivated a wide range of more powerful graph learning architectures\. We advocate Deep Homomorphism Networks \(DHNs\) as a model  particularly well\-suited for learning over relational databases,  due to their close connection to important fragments of SQL such as conjunctive queries\. We study the precise expressive power of DHNs  by relating them to various natural fragments and extensions of first\-order logic \(FO\)\. For DHNs with max, sum, and mean aggregations, we establish connections to the unary negation fragment \(UNFO\) and to the extensions of UNFO with counting quantifiers and with ratio quantifiers\. We further relate sum\-aggregation DHNs to the unary quantifier alternation fragment of FO and to an extension of FO with expressive counting\.   Through the classical correspondence between FO and SQL, these results also illuminate the relation between DHNs and SQL\. They also enable us to study the decidability of two fundamental static analysis problems for DHNs,  the emptiness problem and the subsumption problem\. Finally, we confirm  through experiments that the established differences in expressive power are reflected in the performance on suitable prediction tasks\.

## Long\-Range Spatio\-Temporal Graph Propagation Through Oscillations

**Authors:** Alessio Gravina; Alessandro Trenta; Tai Hoang; Andrea Ceni; Gerhard Neumann; Davide Bacciu

**ID:** 154088 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJdAM7ZHwu>) | [PDF](<https://openreview.net/pdf?id=GJdAM7ZHwu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154088>)

Graph Neural Networks \(GNNs\) are powerful tools for learning from spatio\-temporal data, as interactions in space can be naturally described by a graph structure\. However, capturing long\-range dependencies becomes substantially harder when information must flow through space and time simultaneously\. Most existing approaches extend GNNs from static graphs to temporal settings by alternating propagation between time and space\. In this work, we introduce STORM, a differential\-equation\-inspired GNN that exploits oscillatory dynamics to propagate information effectively in the joint spatio\-temporal domain\. By combining a wave\-equation update with dissipative and external forcing terms, STORM balances conservative and non\-conservative dynamics\. We provide a bottom\-up analysis of the model, highlighting its propagation behavior and stability, and show that STORM is universal\. We empirically validate our method on diverse benchmarks, including tasks designed for analyzing long\-range spatio\-temporal dependencies, real\-world forecasting, and a new long\-range task inspired by physical simulations\. Across these settings, STORM consistently matches or outperforms strong baselines, establishing a new state of the art for long\-range spatio\-temporal graph learning\.

## Spectral Reversal: Counteracting Singular Value Bias for Graph Prompting

**Authors:** Hanxu Yang; Yuhuan Zhao; Xiaodong He; Zhao Kang

**ID:** 152228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UboyGh5Iah>) | [PDF](<https://openreview.net/pdf?id=UboyGh5Iah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152228>)

Pre\-training Graph Neural Networks \(GNNs\) via self\-supervised learning has become a dominant paradigm, yet efficiently adapting frozen encoders remains a challenge\. Graph prompting offers a parameter\-efficient alternative to fine\-tuning, but existing methods largely treat pre\-trained models as opaque feature extractors, ignoring their internal spectral structure\. In this work, we identify a systematic phenomenon in pre\-trained GNNs, which we term spectral bias: optimization during pre\-training disproportionately aligns representations with directions associated with large singular values, leaving low\-energy directions under\-explored\. We show that these underutilized directions can encode complementary information that is beneficial for downstream adaptation, especially under distribution shift\. To leverage this insight, we propose Spectral Reverse Prompt \(SRP\), a prompting framework that rebalances the spectral contributions of frozen GNN encoders\. SRP applies a learnable soft\-thresholding mask in the spectral domain to down\-weight dominant directions while amplifying weaker ones\. In addition, SRP incorporates a null\-space augmentation module that captures variation in directions with minimal activation under the frozen encoder\. Extensive experiments across multiple benchmarks demonstrate that SRP achieves state\-of\-the\-art performance with minimal additional parameters, highlighting that reweighting spectral components is a principled and effective strategy for parameter\-efficient graph adaptation\.

## CSCN: The Crossed Subtree Convolutional Network

**Authors:** Zongjun Han; Lu Bai; Lixin Cui; Ming Li; Hangyuan Du

**ID:** 149718 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nwrZPCZZ92>) | [PDF](<https://openreview.net/pdf?id=nwrZPCZZ92>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149718>)

Message Passing Neural Networks \(MPNNs\) commonly suffer from over\-squashing and over\-smoothing issues, which limit their performance on graph\-level tasks\. To this end, we propose a novel Crossed Subtree Convolutional Network \(CSCN\) for graph classification\. Specifically, CSCN first introduces an ordered subtree alignment strategy to decompose the original graph into an ordered sequence of structured subtrees\. This sequence preserves rich local connectivity patterns and maintains the permutation invariance of the graph representation\. Based on this, we design a crossed subtree convolution\. It utilizes a sliding window to enable information interactions across different subtrees while simultaneously aggregating node features within each subtree\. This design captures local information effectively while also modeling long\-range dependencies\. In this way, CSCN avoids deep message passing over the global graph topology and thus alleviates both over\-squashing and over\-smoothing\. Experimental results on multiple graph classification benchmarks show that CSCN achieves competitive performance\.

## GADMVP: Adaptive Few\-Shot Graph\-Level Anomaly Detection with Multi\-View Structured Prompting

**Authors:** Xiaolin Han; Xiurui Hu; Lingyun Song; Yudai Pan; Xuequn Shang

**ID:** 152843 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PxiWypLBRI>) | [PDF](<https://openreview.net/pdf?id=PxiWypLBRI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152843>)

_Abstract unavailable from the accessible public sources._

## A New Perspective on Target\-Conditioned Structural Dynamics for Link Prediction in Dynamic Graphs

**Authors:** YUANYUAN XU; Yin Chen; Yingxuan Li; Wenjie Zhang; Xuemin Lin; Ying Zhang

**ID:** 151703 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfsyoH7YFs>) | [PDF](<https://openreview.net/pdf?id=YfsyoH7YFs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151703>)

_Abstract unavailable from the accessible public sources._

## Spectral Reversal: Counteracting Singular Value Bias for Graph Prompting

**Authors:** Hanxu Yang; Yuhuan Zhao; Xiaodong He; Zhao Kang

**ID:** 152228\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152228

[Paper](<https://openreview.net/forum?id=UboyGh5Iah>) | [PDF](<https://openreview.net/pdf?id=UboyGh5Iah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152228>)

Pre\-training Graph Neural Networks \(GNNs\) via self\-supervised learning has become a dominant paradigm, yet efficiently adapting frozen encoders remains a challenge\. Graph prompting offers a parameter\-efficient alternative to fine\-tuning, but existing methods largely treat pre\-trained models as opaque feature extractors, ignoring their internal spectral structure\. In this work, we identify a systematic phenomenon in pre\-trained GNNs, which we term spectral bias: optimization during pre\-training disproportionately aligns representations with directions associated with large singular values, leaving low\-energy directions under\-explored\. We show that these underutilized directions can encode complementary information that is beneficial for downstream adaptation, especially under distribution shift\. To leverage this insight, we propose Spectral Reverse Prompt \(SRP\), a prompting framework that rebalances the spectral contributions of frozen GNN encoders\. SRP applies a learnable soft\-thresholding mask in the spectral domain to down\-weight dominant directions while amplifying weaker ones\. In addition, SRP incorporates a null\-space augmentation module that captures variation in directions with minimal activation under the frozen encoder\. Extensive experiments across multiple benchmarks demonstrate that SRP achieves state\-of\-the\-art performance with minimal additional parameters, highlighting that reweighting spectral components is a principled and effective strategy for parameter\-efficient graph adaptation\.

## CSCN: The Crossed Subtree Convolutional Network

**Authors:** Zongjun Han; Lu Bai; Lixin Cui; Ming Li; Hangyuan Du

**ID:** 149718\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149718

[Paper](<https://openreview.net/forum?id=nwrZPCZZ92>) | [PDF](<https://openreview.net/pdf?id=nwrZPCZZ92>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149718>)

Message Passing Neural Networks \(MPNNs\) commonly suffer from over\-squashing and over\-smoothing issues, which limit their performance on graph\-level tasks\. To this end, we propose a novel Crossed Subtree Convolutional Network \(CSCN\) for graph classification\. Specifically, CSCN first introduces an ordered subtree alignment strategy to decompose the original graph into an ordered sequence of structured subtrees\. This sequence preserves rich local connectivity patterns and maintains the permutation invariance of the graph representation\. Based on this, we design a crossed subtree convolution\. It utilizes a sliding window to enable information interactions across different subtrees while simultaneously aggregating node features within each subtree\. This design captures local information effectively while also modeling long\-range dependencies\. In this way, CSCN avoids deep message passing over the global graph topology and thus alleviates both over\-squashing and over\-smoothing\. Experimental results on multiple graph classification benchmarks show that CSCN achieves competitive performance\.

## Beyond Oversquashing: Understanding Signal Propagation in GNNs Via Observables

**Authors:** Eden Nagar; Ya\-Wei Eileen Lin; Ron Levie

**ID:** 154868 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AItejpYJ0K>) | [PDF](<https://openreview.net/pdf?id=AItejpYJ0K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154868>)

Graph Neural Networks \(GNNs\) perform computations on graphs by routing the  signal between graph regions using a graph shift operator or a message passing scheme\. Often, the propagation of the signal leads to a loss of information, where the signal tends to diffuse across the graph instead of being deliberately routed between regions of interest\. Two notions that depict this phenomenon are oversmoothing and oversquashing\. In this paper, we propose an alternative approach for modeling signal propagation, inspired by quantum mechanics, using the notion of observables\. Specifically, we model the place in the graph where the signal lies,  how much the signal is concentrated there, and how much of the signal is propagated towards a location of interest when applying a GNN\. Using these new concepts, we prove that standard spectral GNNs have poor signal propagation capabilities\. We then propose a new type of spectral GNN, termed Schrödinger GNN, which we show has a superior capacity to route the signal across the graph\.

## DTA\-GT: Direction\- and Topology\-Aware Graph Transformer for Neural Network Representation Learning

**Authors:** Yuxiang Zeng; Kun Xie; Yang Wang; Jigang Wen; Xiaocan Li; Guangxing Zhang; Gaogang Xie; Jiannong Cao

**ID:** 153021 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZrwF0V3Sp>) | [PDF](<https://openreview.net/pdf?id=OZrwF0V3Sp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153021>)

Architecture attribute predictors reduce the cost of neural architecture search by estimating accuracy or latency from a small set of evaluated candidates\. The key difficulty is that neural architectures are operation\-labeled DAGs: edge direction defines computational flow, but existing predictors often treat direction as a local structural cue\. We propose DTA\-GT, a Direction\- and Topology\-Aware Graph Transformer based on encoder\-wide directional consistency, which preserves directed computational semantics across node initialization, global spectral encoding, pairwise interaction, and feature update\. DTA\-GT realizes this principle with direction\- and topology\-aware node initialization, Magnetic Laplacian spectral encoding, direction\-dual structural attention, and a Direction\-Sensitive MoE\-FFN\. Across accuracy and latency prediction on NAS\-Bench\-101 and NAS\-Bench\-201, DTA\-GT consistently outperforms representative sequence\-, GNN\-, Transformer\-, and hybrid predictors under limited\-budget settings\. Ablations and Magnetic spectral controls show that the improvements come from coordinated direction\-aware stages and edge\-orientation\-sensitive spectral information, while mechanistic diagnostics confirm that the modules exhibit the intended directional behavior\. These results support encoder\-wide directional consistency as an effective design principle for architecture DAG representation\.

## Not Just Oversmoothing: Detecting Echo Chamber Effect in Graph Neural Networks

**Authors:** Asela Hevapathige; Ahad N\. Zehmakan; Asiri Wijesinghe; Saman Halgamuge

**ID:** 153822 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IT1grxElZr>) | [PDF](<https://openreview.net/pdf?id=IT1grxElZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153822>)

Oversmoothing is a well\-known failure mode of Graph Neural Networks \(GNNs\)\. However, most existing diagnostics rely on global aggregation measures that fail to capture the heterogeneous dynamics of message passing\. Real\-world graphs exhibit pronounced community structure, and message passing operates on two timescales, where representations collapse rapidly within and slowly across communities\. This creates a critical gap where intra\-community representations can already be indistinguishable while inter\-community separation persists, which is a failure mode we refer to as Echo Chamber Effect\. To quantify this, we propose to use the Echo Chamber Index \(ECI\), which stratifies pairwise distances by community membership and formally establishes that global energy diminishes while inter\-community separation remains less impacted\. The estimated ECI for a graph reveals a surprising failure of common oversmoothing remedies, where rather than escaping the echo chamber, these architectures become permanently trapped in it\. The consequences depend on label structure, as when communities align with classes, the echo chamber sharpens node classification, and when they do not, the same collapse makes it provably harder\. To address this, we propose Community\-Aware Split Propagation \(CASP\), a lightweight model\-agnostic plugin that decouples intra and inter\-community aggregation and learns their balance from label structure\. CASP consistently improves over diverse backbone GNNs across multiple benchmarks spanning homophilic and heterophilic settings\. Our source code is available at: https://anonymous\.4open\.science/r/CASP\-3059/\.

## Avoiding Feature Collapse in Graph ODEs via Hysteretic Topology Evolution

**Authors:** Qinhan Hou; Jing Tang

**ID:** 150833 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=exnh1WJ5TA>) | [PDF](<https://openreview.net/pdf?id=exnh1WJ5TA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150833>)

_Abstract unavailable from the accessible public sources._

## Neural Networks With Dense Weights Are Not Universal Approximators

**Authors:** Levi Rauchwerger; Stefanie Jegelka; Ron Levie

**ID:** 148632 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wIy5W0BG7A>) | [PDF](<https://openreview.net/pdf?id=wIy5W0BG7A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148632>)

We investigate the approximation capabilities of dense neural networks\. While universal approximation theorems establish that sufficiently large  architectures can approximate arbitrary continuous functions when there are no restrictions on the weights, we show that dense neural networks do not possess this universality\. Our argument is based on a model compression approach, combining the weak regularity lemma with an interpretation of feedforward networks as message passing graph neural networks\. We consider ReLU neural networks subject to natural constraints on weights and input and output dimensions, which model a notion of dense connectivity\. Within this setting, we demonstrate the existence of Lipschitz continuous functions that cannot be approximated by such networks\. This highlights intrinsic limitations of neural networks with dense layers and motivates the use of sparse connectivity as a necessary ingredient for achieving true universality\.

## FedCAG: Federated Causality\-Aware Graph Learning for Multi\-Cloud Workload Forecasting

**Authors:** Yongcan Luo; Zhengjie Yang; Jiahao Zheng; Hao Wang; Wei Bao; Dapeng Wu

**ID:** 153757 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IvCj0BCLBL>) | [PDF](<https://openreview.net/pdf?id=IvCj0BCLBL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153757>)

_Abstract unavailable from the accessible public sources._

## GADMVP: Adaptive Few\-Shot Graph\-Level Anomaly Detection with Multi\-View Structured Prompting

**Authors:** Xiaolin Han; Xiurui Hu; Lingyun Song; Yudai Pan; Xuequn Shang

**ID:** 152843\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152843

[Paper](<https://openreview.net/forum?id=PxiWypLBRI>) | [PDF](<https://openreview.net/pdf?id=PxiWypLBRI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152843>)

_Abstract unavailable from the accessible public sources._

## A New Perspective on Target\-Conditioned Structural Dynamics for Link Prediction in Dynamic Graphs

**Authors:** YUANYUAN XU; Yin Chen; Yingxuan Li; Wenjie Zhang; Xuemin Lin; Ying Zhang

**ID:** 151703\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151703

[Paper](<https://openreview.net/forum?id=YfsyoH7YFs>) | [PDF](<https://openreview.net/pdf?id=YfsyoH7YFs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151703>)

_Abstract unavailable from the accessible public sources._

## GraphUAT: Uncertainty Attribution in Graph Neural Networks

**Authors:** Burouj Armgaan; Karan R Singh; Abhirup Mondal; Sayan Ranu

**ID:** 149147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sV9yc7CpY9>) | [PDF](<https://openreview.net/pdf?id=sV9yc7CpY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149147>)

Models that recognize when their predictions are unreliable inspire greater trust than those that make confident but incorrect decisions\. While recent advances enable uncertainty quantification in GNNs, understanding \*why\* a model is uncertain, whether due to noisy features, conflicting neighborhoods, or sparse training coverage, remains unsolved\. We address this gap with GraphUAT, the first \*uncertainty attribution\* framework for GNNs, which identifies the sources of uncertainty rather than aiming to improve its quantification\. GraphUAT employs a teacher\-student paradigm, where the trained GNN's behavior is distilled into an uncertainty\-aware student that disentangles aleatoric and epistemic uncertainties\. We then use targeted probes to trace the student's uncertainty back to the responsible features and structural components\. Experiments across benchmarks show that removing the identified elements consistently reduces the teacher's uncertainty, validating the faithfulness of our attributions\.

## GEM: A Dual\-Scale Architecture for Graph\-Level Hierarchical Representation Learning

**Authors:** Zhaowei Wu; Kaizhong Zheng; Guangmingzi Yang; Shuai Jiang; Liangjun Chen; Badong Chen

**ID:** 149511 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pad2MT4H9X>) | [PDF](<https://openreview.net/pdf?id=pad2MT4H9X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149511>)

Real\-world networks typically exhibit small\-world properties: dense local clustering yet efficient global propagation\. However, current methods struggle to reconcile this hierarchy: Graph Neural Networks \(GNNs\) suffer from over\-smoothing in long\-range modeling, while sequence/state\-space models often lack the inductive bias to preserve complex graph topology\. To bridge this gap, we propose Graph Encoding Mamba \(GEM\), a dual\-scale architecture for graph\-level hierarchical representation learning\. First, GEM employs a dual\-branch encoder that synergizes the local sensitivity of GNNs with the selective scanning of Mamba, effectively capturing both local topology and global shortcuts\. Second, a modularity\-aware hierarchical pooling mechanism is designed to retain salient community structures during graph coarsening\. Crucially, to mitigate structural redundancy from multi\-scale fusion, we incorporate an Information Bottleneck objective to distill task\-relevant structural patterns from redundant features, encouraging compact, task\-relevant representations and supporting intrinsic interpretability\. Extensive experiments on graph\-level benchmarks demonstrate that GEM improves performance across biological, social, and brain network datasets\. We further provide a lightweight node\-level adaptation on long\-range benchmarks as a boundary analysis of GEM's transferability\. Code is available at \\url\{https://anonymous\.4open\.science/r/GEM\-C34D\}\.

## Beyond MSE: Differentiable Complexity Priors for Structure\-Preserving Neural Denoising

**Authors:** Xiangyu Jiang; Jie Huang

**ID:** 153782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IhHlpUB6rt>) | [PDF](<https://openreview.net/pdf?id=IhHlpUB6rt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153782>)

Neural denoisers trained with pointwise distortion losses such as MSE often suppress the temporal regularities that downstream tasks depend on\-\-\-a failure that becomes acute under non\-Gaussian, impulsive, or non\-stationary disturbances\. We propose a training framework that lifts a family of classical complexity descriptors\-\-\-permutation entropy, sample entropy, Lempel\-Ziv complexity, and Higuchi fractal dimension\-\-\-into end\-to\-end differentiable objectives via calibrated soft surrogates with straight\-through gradients\. Three complementary mechanisms emerge from this lifting: \(i\) early fusion injects local structural priors as auxiliary inputs, \(ii\) a complexity\-consistency regularizer matches the multi\-scale complexity of denoiser outputs to clean references, and \(iii\) a curriculum sampler prioritizes examples whose noise\-induced complexity inflation is largest\. We prove that additive noise strictly inflates ordinal uncertainty for bounded piecewise\-smooth signals, and that, under bounded surrogate calibration, complexity consistency yields a strictly larger expected decision margin than MSE\-only training\. On OFDM/QAM communication signals under AWGN, $1/f$ colored, and $\\alpha$\-stable impulsive noise, our framework reduces post\-detection bit error rate by 29\-\-47% over Transformer \(PatchTST, iTransformer\), GNN, and CNN baselines, with statistically significant gains across five seeds and 95% bootstrap confidence intervals\. The improvements transfer to over\-the\-air conditions on the public RadioML 2018\.01A benchmark \(single\-carrier QAM portion\) and a new 50\-session in\-house SDR testbed, yielding 22\-\-26% relative BER reduction without fine\-tuning\. The framework is architecture\-agnostic and adds $\\leq 3\.5\\%$ FLOPs over the underlying backbone\.

## FedProG: Federated Graph Learning via Server\-Side LLM Semantic Bridging and Uncertainty\-Aware Distillation

**Authors:** Haitao Wang; Haozhao Wang; Wenchao Xu; Yichen Li; Xiaoquan Yi; Tianzhe Xiao; Jingcai Guo; Ruixuan Li

**ID:** 155040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8tUxcQWc2X>) | [PDF](<https://openreview.net/pdf?id=8tUxcQWc2X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155040>)

Federated Graph Learning \(FGL\) on Text\-Attributed Graphs often encounters the missing neighbor issue\. This problem arises from structural fragmentation across dispersed clients, which restricts the effective message passing of Graph Neural Networks\. Current completion methods frequently struggle in cross\-domain, non\-IID scenarios because they lack access to external knowledge\. To address these limitations, we propose FedProG, an asymmetric framework that utilizes a frozen server\-side LLM to reconstruct missing structural contexts\. Furthermore, deploying Large Language Models locally to augment these graphs incurs prohibitive computational costs for edge devices\. We introduce a split architecture where a lightweight client\-side generator maps graph features into the LLM’s embedding space\. This allows the server to produce virtual neighbors via uploaded soft prompts\. To ensure system reliability and privacy, we implement a dual\-guard mechanism: a server\-side uncertainty filter rejects low\-confidence generations through multi\-path sampling, while a client\-side semantic consistency projector maintains utility under differential privacy\. Experiments show that FedProG improves robustness and generalization over baselines while drastically reducing client computational overhead\.

## Fast and Consistent Structure Learning in Graphical Models via Approximate Cross\-Validation

**Authors:** Zhao Lyu; Mladen Kolar; Bryon Aragam

**ID:** 154587 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CTPhY8k8EQ>) | [PDF](<https://openreview.net/pdf?id=CTPhY8k8EQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154587>)

Structure learning for sparse graphical models in high dimensions requires both computational scalability and selection consistency\. Classical criteria such as \(Extended\) Bayesian Information Criterion can provide consistency, but rely on model\-specific likelihood and complexity calibration\. In comparison, cross\-validation avoids such analytic calibration and is therefore attractive for graph learning\. However, cross\-validation is computationally infeasible and theoretically inconsistent in structure learning\. In this work, we resolve the tension by developing a scalable graph\-recovery procedure built on approximate cross\-validation\. We demonstrate its effectiveness in learning large graphical models both theoretically and empirically, and establish selection consistency under mild signal strength assumptions\.

## k\-th Order Deep Homomorphism Networks

**Authors:** Takanori Maehara

**ID:** 152796 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHyHF56a42>) | [PDF](<https://openreview.net/pdf?id=QHyHF56a42>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152796>)

We develop a pattern\-algebraic framework for higher\-order graph neural networks by extending Deep Homomorphism Networks \(DHN\) from rooted patterns to $k$\-labelled patterns\. The framework captures GNN expressivity along two independent axes \-\-\- skeleton complexity $k$, controlling global structures, and pattern vocabulary $\\mathcal\{P\}$, capturing local structures\. We then introduce \\emph\{auxiliary gluing\} \($\\circledast$\), the pattern\-algebraic counterpart of the $k$\-FWL sift, and prove that this single additional operation lifts $k$\-label expressive power to $\(k\{\+\}1\)$ labels, yielding an algebraic proof of $\(k\{\+\}1\)$\-WL $\\equiv$ $k$\-FWL\. Neuralising these operations gives $k$\-DHN and $k$\-FDHN, which recover $k$\-GNN, PPGN, $\\delta$\-$k$\-LWL, $r$\-$\\ell$WL, spectral invariant GNNs, and node\-marking subgraph GNNs as special cases, with expressivity exactly characterised by the pattern closure of $\(k, \\mathcal\{P\}\)$\. The framework also resolves open expressivity separation problems in the $\\delta$\-$k$\-LWL and $r$\-$\\ell$WL hierarchies\.

## Spectrally Decomposed Equivariant Graph Neural Networks for Interatomic Potentials

**Authors:** Junfu Tan; Mengfan Wu; Yu Zhu; Yu Shi; Yifang Qin; Chang Liu; Bonan Zhu; Ziheng Lu

**ID:** 149161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sP37ySEbfu>) | [PDF](<https://openreview.net/pdf?id=sP37ySEbfu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149161>)

Machine Learning Interatomic Potentials \(MLIPs\) based on Equivariant Graph Neural Networks \(EGNNs\) have greatly advanced the quantitative simulation of atomic systems\. However, accurately resolving fine\-grained structural geometry remains a critical challenge\. In this work, we demonstrate through spectral analysis that the reliance of modern EGNNs on a single macroscopic cutoff radius inherently acts as a spatial low\-pass filter\. This structural bottleneck induces radial spectral confusion, suppressing the network's capability for fine\-grained geometric modeling\. To overcome this limitation, we propose the Multi\-Cutoff Spectral Decomposition \(MCSD\) mechanism\. As a universal, plug\-and\-play module, MCSD explicitly decomposes atomic interactions across multiple spatial scales\. By leveraging envelope associativity to unify the neighborhood graph, this method decouples scale parameters from tensor product complexity, enabling multi\-resolution representations with minimal overhead\. Extensive evaluations across representative EGNN backbones demonstrate that MCSD not only consistently reduces prediction errors for energy, forces, and macroscopic stress tensors, but also significantly enhances the prediction fidelity of higher\-order properties \(such as lattice thermal conductivity\), all while maintaining the smoothness of the potential energy surface and the energy conservation of long\-term molecular dynamics simulations\. The code is available at the anonymous repository:  https://anonymous\.4open\.science/r/MCSD\-C854\.

## When, Where, What: Structural Guarantees for Travel Time Prediction on Temporal Graphs

**Authors:** Gabriel Buginga; Gabriel D Vilela; Jincheng Zhou; Mohit Tawarmalani; Bruno Ribeiro

**ID:** 155204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7W9m004XiM>) | [PDF](<https://openreview.net/pdf?id=7W9m004XiM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155204>)

Accurate traversal \(travel\) time distribution estimation on temporal graphs benefits from satisfying six structural properties: \*\*when\*\* \(ordering, flexibility\), \*\*where\*\* \(composition with prefix equivariance\), and \*\*what\*\* \(non\-Markov, snapshot\)\. No existing temporal graph learning method jointly satisfies these properties\. We propose PATH\-HAZ, a discrete\-time hazard model that provides guarantees of all six requirements\. It composes per\-step PMFs via dynamic programming for spatially consistent predictions across shared paths, while cross\-attention over historical graph snapshots encodes confounder\-induced dependencies between non\-adjacent steps on the path\. Evaluated on simulated logistics and real\-world high\-speed rail data, PATH\-HAZ surpasses both point\-estimate \(19\.3% RMSE improvement\) and probabilistic baselines \(56% CRPS reduction\), while also allowing for detailed structural explainability of delays\.

## E²Gen: Evidential Energy\-Based Generation for Fair Federated Graph Learning

**Authors:** Jingbo Wang; Zitong Shi; Yuxin Wu; Zihan Tan; Qiqi Lin; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 154095 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GHWnfQjNIO>) | [PDF](<https://openreview.net/pdf?id=GHWnfQjNIO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154095>)

Federated Graph Learning is rapidly evolving as a privacy\-preserving collaborative approach for decentralized graph data\. However, severe fairness challenges are increasingly undermining federated systems by systematically degrading predictions for structurally disadvantaged minority nodes\. The inherent vulnerabilities and missing topological contexts in Federated Graph Learning are deeply entangled, making traditional federated fairness methods and simple oversampling less effective\. In our work, we propose an effective Evidential Energy\-based Generation framework for Fair Federated Graph Learning \($E^2Gen$\)\. At the client level, it explicitly identifies structurally deficient nodes using a multi\-axis metric, synthesizing targeted representations via conditional energy\-based models, and selects reliable samples through an evidential quality gate\. At the server level, the local performance disparities uploaded by each client are evaluated to construct a fairness gap assessment, making the global model absorb equitable improvements by further adjusting the aggregation weights\. Our method can handle high topological heterogeneity, does not require strict generative normalization, and is effective under both homophilic and heterophilic graph structures\. Extensive results on various settings of federated graph scenarios under severe fairness challenges validate the effectiveness of this approach\. The code is anonymously available at https://anonymous\.4open\.science/r/E\-Gen\-A2C6\.

## Beyond the Golden Teacher: Enhancing Graph Learning through LLM\-GNN Co\-teaching

**Authors:** Zhuoyi Peng; Hanlin Gu; Lixin Fan; Yi Yang

**ID:** 150344 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iq83tsXsBG>) | [PDF](<https://openreview.net/pdf?id=iq83tsXsBG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150344>)

Text\-attributed graphs \(TAGs\) underlie real\-world applications such as citation networks, social media, and e\-commerce\. Few\-shot graph learning on TAGs is hard: with only a handful of labels per class and the rest of the graph unannotated, neither GNNs nor LLMs can learn well on their own\. GNNs read topology and fail on cold nodes; LLMs read text and fail on text\-ambiguous nodes\. Existing LLM\-GNN methods all follow the same recipe: designate one model as the golden teacher and use its outputs \(e\.g\., features or pseudo\-labels\) to supervise the other\. We argue this golden\-teacher assumption breaks under sparse supervision: neither model is golden, and treating either as such transfers its blind spots into the student\. We therefore ask: can we avoid designating either model as the golden teacher, and still perform effective graph learning? We answer with LLM\-GNN Co\-Teaching, a bidirectional co\-teaching framework in which neither model is fixed as teacher\. The GNN and LLM exchange their most confident pseudo\-labels under an architecture\-specific small\-loss criterion, and both update every round\. Supervision is then mined from the trajectory: whenever a node moves from cross\-model contradiction at round t to cross\-model agreement at round t \+ 1, the LLM's two answers on the same input form a preference pair \(old contradicting self ≺ new peer\-endorsed self\) for DPO training\. We call this Round\-based Pseudo\-Label Preference Optimization \(RPL\-PO\)\. On six benchmarks, LLM\-GNN Co\-Teaching consistently outperforms GNN\-as\-Judge and all prior methods, with absolute 3\-shot gains of 7\.86% on Cora and 7\.73% on ogbn\-arxiv; improvements carry over to 5\-shot and to zero\-shot cross\-dataset transfer\. Error\-structure analysis further shows that abandoning the golden\-teacher assumption substantially improves the LLM's graph learning capability on challenging samples\.

## Efficient Lookahead Encoding and Abstracted Width for Learning General Policies in Classical Planning

**Authors:** Michael Aichmüller; Simon Ståhlberg; Martin Funkquist; Hector Geffner

**ID:** 150136 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kR1PKyczWe>) | [PDF](<https://openreview.net/pdf?id=kR1PKyczWe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150136>)

Generalized planning aims to learn policies that generalize across large collections of instances within a classical planning domain\. Recent approaches using Graph Neural Networks \(GNNs\) have shown the ability to learn nearly perfect policies for several domains\. This work improves on the recently published idea of Iterated Width \(IW\) policies\. Therein, the policy broadens its successor scope through an IW\-lookahead search that offers to "jump" over multiple transitions, simplifying the problem structure\. Yet, each transition is evaluated individually leading to unscalable compute and expressivity limitations\. Furthermore, while an IW\(1\) search is attractive due to scaling linearly with the number of atoms in a problem, it still becomes inefficient once thousands of objects are considered like in the International Planning Competition \(IPC\) 2023 benchmark\. In this work, we address both limitations\. Firstly, we introduce a vastly more efficient holistic encoding of the entire search tree\. It jointly represents IW\(1\)\-reachable states only by their relational differences to the current state, which enables Relational GNNs \(R\-GNNs\) to score all transitions in a single forward pass\.   Secondly, we define Abstracted IW\(1\) to improve scaling through relational abstraction during novelty checks\. Rather than testing fully instantiated atoms, it abstracts each atom by replacing all but one of its arguments with their types\. The original atom is then novel if any of its abstracted forms is\. This structural compression shifts the scaling of the novelty search to be linear in the number of objects, rather than atoms, still capturing meaningful subgoal structure\.  Our contributions are evaluated on the hyperscaling IPC 2023 benchmark and across a broad range of domains, including those that require features beyond the $C\_2$ logic fragment\. The results show that our policies achieve a new state\-of\-the\-art performance, significantly surpassing prior work, including classical planners like LAMA\.

## Unlocking Volition: Proactive Intention Decoding via Interpretable Graph Learning of Multi\-Region ECoG

**Authors:** Kaizhong Zheng; JiaJunMA; Hongru Liu; Xinjian LI; Wei Xi; Liangjun Chen; Badong Chen

**ID:** 153824 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IRTohTNxhM>) | [PDF](<https://openreview.net/pdf?id=IRTohTNxhM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153824>)

Current brain–machine interfaces \(BMI\) face fundamental limitations due to inherent latency from reliance on delayed motor cortical signals, and computational overhead, restricting their effectiveness in real\-time applications such as rehabilitation therapy\. Recent neuroscience indicates that prefrontal and sensory cortical activities precede motor execution, offering an opportunity for proactive intent prediction\. However, challenges remain in acquiring multi\-region neural data, efficiently decoding high\-dimensional signals, and ensuring model interpretability\. To address these, we developed a high\-density electrocorticography \(ECoG\)\-based paradigm based on marmosets and introduced an information\-bottleneck\-driven graph transformer \(ECoG\-IBGT\), reframing neural decoding as graph classification\. Our method achieves 99\.29% accuracy up to 400 ms before action onset with inherent interpretability, laying the foundation for reliable, low\-latency BMIs\. The source code is available at https://anonymous\.4open\.science/r/ecog\-ibgt\-code\-F2D2\.

## AtlasULP: Domain\-aware Universal Link Prediction via Relation Atlas

**Authors:** Yujing Liu; Yixin Liu; Yu Zheng; Lianhua Chi; Alan Wee\-Chung Liew; Hengtao Shen; Shirui Pan

**ID:** 150816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f8yctrr8CX>) | [PDF](<https://openreview.net/pdf?id=f8yctrr8CX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150816>)

Link prediction \(LP\) is a widely applied task in graph learning\. Conventional LP approaches typically follow a dataset\-specific paradigm, requiring independent training for each graph and incurring high computational and maintenance costs in large\-scale applications\. Motivated by these limitations, recent work explores Universal Link Prediction \(ULP\), aiming to enable training\-free inference on arbitrary unseen graphs\. However, existing methods primarily rely on subgraph sampling strategies to construct universal representations, which are unable to capture higher\-order information due to the exponential growth of higher\-order neighborhoods\. As a result, they often under\-perform on graphs where long\-range signals are essential, such as biological networks\. Moreover, their prediction models are typically domain\-agnostic and lack the ability to adapt to different graph domains, leading to limited generalization\. To address these challenges, we propose an Atlas\-based Universal Link Prediction framework \(AtlasULP\), which introduces the relation atlas to capture structural associations between node pairs from both global and local perspectives, enabling a comprehensive characterization of connectivity signals across diverse graph domains\. Building upon this representation, we develop a domain\-guided prompting ULP model, which generates domain\-aware prompt tokens from contextual structures and performs prompt\-guided in\-context prediction for adaptive link inference\. Extensive experiments demonstrate that AtlasULP consistently outperforms state\-of\-the\-art methods across diverse graph domains\.

## AtlasULP: Domain\-aware Universal Link Prediction via Relation Atlas

**Authors:** Yujing Liu; Yixin Liu; Yu Zheng; Lianhua Chi; Alan Wee\-Chung Liew; Hengtao Shen; Shirui Pan

**ID:** 150816\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150816

[Paper](<https://openreview.net/forum?id=f8yctrr8CX>) | [PDF](<https://openreview.net/pdf?id=f8yctrr8CX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150816>)

Link prediction \(LP\) is a widely applied task in graph learning\. Conventional LP approaches typically follow a dataset\-specific paradigm, requiring independent training for each graph and incurring high computational and maintenance costs in large\-scale applications\. Motivated by these limitations, recent work explores Universal Link Prediction \(ULP\), aiming to enable training\-free inference on arbitrary unseen graphs\. However, existing methods primarily rely on subgraph sampling strategies to construct universal representations, which are unable to capture higher\-order information due to the exponential growth of higher\-order neighborhoods\. As a result, they often under\-perform on graphs where long\-range signals are essential, such as biological networks\. Moreover, their prediction models are typically domain\-agnostic and lack the ability to adapt to different graph domains, leading to limited generalization\. To address these challenges, we propose an Atlas\-based Universal Link Prediction framework \(AtlasULP\), which introduces the relation atlas to capture structural associations between node pairs from both global and local perspectives, enabling a comprehensive characterization of connectivity signals across diverse graph domains\. Building upon this representation, we develop a domain\-guided prompting ULP model, which generates domain\-aware prompt tokens from contextual structures and performs prompt\-guided in\-context prediction for adaptive link inference\. Extensive experiments demonstrate that AtlasULP consistently outperforms state\-of\-the\-art methods across diverse graph domains\.

## No Triangulation Without Representation: Generalization in Topological Deep Learning

**Authors:** Johannes S\. Schmidt; Martin Carrasco; Ernst Röell; Guy Wolf; Nello Blaser; Bastian Rieck

**ID:** 139061\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139061

[Paper](<https://openreview.net/forum?id=nVgjwC8P84>) | [PDF](<https://openreview.net/pdf?id=nVgjwC8P84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139061>)

Despite an ever\-increasing interest in topological deep learning models that target higher\-order datasets, there is no consensus on how to evaluate such models\. This is exacerbated by the fact that topological objects permit operations, such as structural refinements, that are not appropriate for graph data\. In this work, we extend MANTRA, a benchmark dataset containing manifold triangulations, to a larger class of manifolds with more diverse homeomorphism types\. We show that, unlike prior claims, both graph neural networks \(GNNs\) and higher\-order message passing \(HOMP\) methods can saturate the benchmark\. However, we find that this is contingent on the right representation and feature assignment, emphasizing their importance in baseline models\. We thus provide a novel evaluation protocol based on representational diversity and triangulation refinement\. Surprisingly, we find no indication that existing models are capable of generalizing beyond the combinatorial structure of the data\. This points towards a research gap in developing models that understand topological structure independent of scale\. Our work thus provides the necessary scaffolding to evaluate future models and enable the development of topology\-aware inductive biases\.

## From Nodes to Pixels: Topological and Structural Two\-View Graph Imaging

**Authors:** Md Joshem Uddin; Soham Changani; Sai K Navuluru; Cuneyt Akcora; Baris Coskunuzer

**ID:** 148590 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wd6T1tqNIh>) | [PDF](<https://openreview.net/pdf?id=wd6T1tqNIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148590>)

Graph learning still lacks a broadly reusable input interface comparable to patches in vision or tokens in language\. Unlike images or text, graphs are irregular, vary in size and density, and are invariant under many equivalent node labelings, making it difficult to standardize inputs across tasks and architectures\. We introduce \*\*G2Image\*\*, a fixed\-budget graph imaging framework that converts each graph into two complementary image\-like views\. \*\*TopoGrid\*\* provides a stable topological view by encoding an intrinsic bifiltration as a compact multipersistence surface grid, while \*\*GraphGrid\*\* provides a higher\-bandwidth structural view by aggregating edge densities between groups defined by intrinsic node scores\. Both views are permutation\-invariant and come with resolution\-controlled stability guarantees\. Because the resulting representations are fixed\-size tensors, they can be processed by lightweight 2D encoders and aligned through a supervised cross\-view contrastive objective\. Across graph classification and molecular prediction benchmarks, \*\*G2Image\*\* achieves strong average performance among the compared methods, improves over single\-view and standard fusion variants, and extends to attribute\-rich molecular graphs without changing the overall architecture\. These results suggest that fixed\-budget graph images offer a practical and reusable interface for graph representation learning\.

## S&amp;P: Towards Scalable and Powerful Graph Learning with Hierarchical Structural Acquisition

**Authors:** Mingqi Yang; Zhaoyu Liu; Wenjie Feng

**ID:** 152481 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SlDtKO7Xq7>) | [PDF](<https://openreview.net/pdf?id=SlDtKO7Xq7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152481>)

Graph Neural Networks \(GNNs\) face a fundamental dichotomy between expressiveness and scalability\. Recent spectral and transformer\-based models approach universal approximation capabilities but rely on computationally intensive global operators that scale poorly to large graphs\. Conversely, scalable approaches often compromise structural fidelity through sampling or decoupling, resulting in incomplete structural acquisition\. We identify that this trade\-off stems from a homogeneous treatment of graph topology, where uniform computational complexity is applied to heterogeneous structures\. We propose a paradigm shift towards Hierarchical Structural Acquisition and introduce S\\&amp;P \(Scalable \\&amp; Powerful\), a framework grounded in Fusion Frame Theory that aligns the operator with the intrinsic hierarchy of the data\. S\\&amp;P decomposes the global operator into intra\-component and inter\-component, and we prove that this design preserves universal spectral filtering capacity for non\-degenerate inputs while remaining numerically stable and linear in complexity\. Experiments on 14 datasets show that S\\&amp;P achieves state\-of\-the\-art accuracy, bridging the gap between scalability and expressiveness\. Our code is available at https://anonymous\.4open\.science/r/HierarchicalSP\.

## Uncovering Semantic Hierarchies in Text\-Attributed Graphs via Variational EM\-based LLM–GNN Synergy

**Authors:** Yunhui Liu; Xudong Jin; Qizhuo Xie; Chunhui Zhao; Xiao Luo; Tao Zheng; Bin Chong; Tieke He

**ID:** 152617 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rm5u5TMKcq>) | [PDF](<https://openreview.net/pdf?id=Rm5u5TMKcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152617>)

_Abstract unavailable from the accessible public sources._

## Aggregation Dispersion: An Information\-Geometric Diagnostic of Oversmoothing in Graph Neural Networks

**Authors:** Abdessalam Ed\-dib; Amine Aboussalah

**ID:** 154195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FUpw0l0XS6>) | [PDF](<https://openreview.net/pdf?id=FUpw0l0XS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154195>)

Message\-passing neural networks \(MPNNs\) learn node representations by iteratively aggregating information from neighbors, but stacking too many layers causes all representations to converge, a phenomenon known as oversmoothing\. We propose a geometric perspective on this phenomenon\. At each depth $k$, the propagation operator assigns to every node $v$ a walk distribution $p\_v^\{\(k\)\}$, a probability distribution over all nodes describing how $v$ distributes its attention across the graph\. These walk distributions form a point cloud on the probability simplex, and oversmoothing is the contraction of this cloud to a single point\. To measure this contraction, we exploit the intrinsic geometry of the simplex: the Fisher\-\-Rao metric, the unique Riemannian metric invariant under sufficient statistics, whose chordal distance under the square\-root embedding $p \\mapsto \\sqrt\{p\}$ is the Hellinger distance\. The resulting diagnostic, the \\emph\{aggregation dispersion\} $\\mathcal\{D\}\_k$, is the variance of the embedded point cloud on the unit sphere\. We prove that: \(i\) $\\mathcal\{D\}\_k = 0$ if and only if the $k$\-th step propagation matrix has rank one, providing a necessary and sufficient condition for representational collapse; \(ii\) $\\mathcal\{D\}\_k$ is monotonically non\-increasing with depth, so each layer irreversibly spends a finite diversity budget; \(iii\) the spectral gap of the propagation matrix controls the rate of this decay; and \(iv\) for contractive MPNNs, the aggregation dispersion upper\-bounds the representation dispersion up to architecture\-dependent constants, connecting the geometry of the simplex to the geometry of the feature space\. In experiments across 14 model configurations and 11 datasets, $\\mathcal\{D\}\_k$ achieves the highest average Pearson correlation with accuracy degradation among all training\-free diagnostics \($\|r\| = 0\.721$\), outperforming the post\-training effective rank \($\|r\| = 0\.688$\)\.

## Caterpillar GNN: Replacing Message Passing with Graph\-Level Aggregation

**Authors:** Marek Černý

**ID:** 148837 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umcbm0Ss0b>) | [PDF](<https://openreview.net/pdf?id=umcbm0Ss0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148837>)

_Abstract unavailable from the accessible public sources._

## Weisfeiler\-Leman Is Incomplete on Simple Spectrum Graphs, so Canonicalize Them

**Authors:** Snir Hordan; Nadav Dym; Tim Seppelt

**ID:** 150655 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gQCHWXz2Fu>) | [PDF](<https://openreview.net/pdf?id=gQCHWXz2Fu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150655>)

_Abstract unavailable from the accessible public sources._

## Trapping Attacker in Dilemma: Examining Internal Correlations and External Influences of Trigger for Defending GNN Backdoors

**Authors:** Fan Yang; Binyan Xu; Di Tang; Kehuan Zhang

**ID:** 155149 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7xWSWpsU5J>) | [PDF](<https://openreview.net/pdf?id=7xWSWpsU5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155149>)

_Abstract unavailable from the accessible public sources._

## Towards Universal Black\-box Attacks on Graph Neural Networks

**Authors:** Runze Li; Di Jin; Xiaobao Wang; Bingdao Feng; Dongxiao He

**ID:** 154202 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FQl3bhUOHb>) | [PDF](<https://openreview.net/pdf?id=FQl3bhUOHb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154202>)

_Abstract unavailable from the accessible public sources._

## Caterpillar GNN: Replacing Message Passing with Graph\-Level Aggregation

**Authors:** Marek Černý

**ID:** 148837\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148837

[Paper](<https://openreview.net/forum?id=umcbm0Ss0b>) | [PDF](<https://openreview.net/pdf?id=umcbm0Ss0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148837>)

_Abstract unavailable from the accessible public sources._

## PANDA: Prior\-guided Attentional Dual\-path Architecture

**Authors:** Rishabh Jain; Federico Belotti; Stefano Coniglio; Pietro Lió; Stefano Fiorini

**ID:** 153505 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kq4o9psxtB>) | [PDF](<https://openreview.net/pdf?id=Kq4o9psxtB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153505>)

Hypergraph Neural Networks \(HNNs\), designed to model higher\-order relations beyond pairwise interactions, typically rely either on fixed structural weights or on normalized attention\. Fixed weights can propagate misleading information in heterophilic settings, while normalization makes attention coefficients competitive, in the sense that, in a message\-passing framework, increasing the weight of one sender must reduce the weight of others in the same aggregation set\. Our main contribution is the introduction of PANDA \(Prior\-guided AttentioNal Dual\-path Architecture\), a plugin for two\-stage message passing HNNs applicable to both undirected and directed settings\. The \*main path\* interpolates between learned receiver\-normalized attention and structural incidence priors, while a non\-competitive \(not normalized\) \*auxiliary path\* lets each sender contribute its own transformed information\. We also show that, with fixed structural coefficients, PANDA recovers a certain complex\-valued, convolution operator adopted in previous works\. Across four HNNs spanning spatial and spectral methods in both directed and undirected settings, plugging PANDA in yields an average improvement of $5\.18$ percentage points across eight real\-world benchmark datasets\.

## GraphUAT: Uncertainty Attribution in Graph Neural Networks

**Authors:** Burouj Armgaan; Karan R Singh; Abhirup Mondal; Sayan Ranu

**ID:** 149147\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149147

[Paper](<https://openreview.net/forum?id=sV9yc7CpY9>) | [PDF](<https://openreview.net/pdf?id=sV9yc7CpY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149147>)

Models that recognize when their predictions are unreliable inspire greater trust than those that make confident but incorrect decisions\. While recent advances enable uncertainty quantification in GNNs, understanding \*why\* a model is uncertain, whether due to noisy features, conflicting neighborhoods, or sparse training coverage, remains unsolved\. We address this gap with GraphUAT, the first \*uncertainty attribution\* framework for GNNs, which identifies the sources of uncertainty rather than aiming to improve its quantification\. GraphUAT employs a teacher\-student paradigm, where the trained GNN's behavior is distilled into an uncertainty\-aware student that disentangles aleatoric and epistemic uncertainties\. We then use targeted probes to trace the student's uncertainty back to the responsible features and structural components\. Experiments across benchmarks show that removing the identified elements consistently reduces the teacher's uncertainty, validating the faithfulness of our attributions\.

## GEM: A Dual\-Scale Architecture for Graph\-Level Hierarchical Representation Learning

**Authors:** Zhaowei Wu; Kaizhong Zheng; Guangmingzi Yang; Shuai Jiang; Liangjun Chen; Badong Chen

**ID:** 149511\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149511

[Paper](<https://openreview.net/forum?id=pad2MT4H9X>) | [PDF](<https://openreview.net/pdf?id=pad2MT4H9X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149511>)

Real\-world networks typically exhibit small\-world properties: dense local clustering yet efficient global propagation\. However, current methods struggle to reconcile this hierarchy: Graph Neural Networks \(GNNs\) suffer from over\-smoothing in long\-range modeling, while sequence/state\-space models often lack the inductive bias to preserve complex graph topology\. To bridge this gap, we propose Graph Encoding Mamba \(GEM\), a dual\-scale architecture for graph\-level hierarchical representation learning\. First, GEM employs a dual\-branch encoder that synergizes the local sensitivity of GNNs with the selective scanning of Mamba, effectively capturing both local topology and global shortcuts\. Second, a modularity\-aware hierarchical pooling mechanism is designed to retain salient community structures during graph coarsening\. Crucially, to mitigate structural redundancy from multi\-scale fusion, we incorporate an Information Bottleneck objective to distill task\-relevant structural patterns from redundant features, encouraging compact, task\-relevant representations and supporting intrinsic interpretability\. Extensive experiments on graph\-level benchmarks demonstrate that GEM improves performance across biological, social, and brain network datasets\. We further provide a lightweight node\-level adaptation on long\-range benchmarks as a boundary analysis of GEM's transferability\. Code is available at \\url\{https://anonymous\.4open\.science/r/GEM\-C34D\}\.

## Beyond MSE: Differentiable Complexity Priors for Structure\-Preserving Neural Denoising

**Authors:** Xiangyu Jiang; Jie Huang

**ID:** 153782\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153782

[Paper](<https://openreview.net/forum?id=IhHlpUB6rt>) | [PDF](<https://openreview.net/pdf?id=IhHlpUB6rt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153782>)

Neural denoisers trained with pointwise distortion losses such as MSE often suppress the temporal regularities that downstream tasks depend on\-\-\-a failure that becomes acute under non\-Gaussian, impulsive, or non\-stationary disturbances\. We propose a training framework that lifts a family of classical complexity descriptors\-\-\-permutation entropy, sample entropy, Lempel\-Ziv complexity, and Higuchi fractal dimension\-\-\-into end\-to\-end differentiable objectives via calibrated soft surrogates with straight\-through gradients\. Three complementary mechanisms emerge from this lifting: \(i\) early fusion injects local structural priors as auxiliary inputs, \(ii\) a complexity\-consistency regularizer matches the multi\-scale complexity of denoiser outputs to clean references, and \(iii\) a curriculum sampler prioritizes examples whose noise\-induced complexity inflation is largest\. We prove that additive noise strictly inflates ordinal uncertainty for bounded piecewise\-smooth signals, and that, under bounded surrogate calibration, complexity consistency yields a strictly larger expected decision margin than MSE\-only training\. On OFDM/QAM communication signals under AWGN, $1/f$ colored, and $\\alpha$\-stable impulsive noise, our framework reduces post\-detection bit error rate by 29\-\-47% over Transformer \(PatchTST, iTransformer\), GNN, and CNN baselines, with statistically significant gains across five seeds and 95% bootstrap confidence intervals\. The improvements transfer to over\-the\-air conditions on the public RadioML 2018\.01A benchmark \(single\-carrier QAM portion\) and a new 50\-session in\-house SDR testbed, yielding 22\-\-26% relative BER reduction without fine\-tuning\. The framework is architecture\-agnostic and adds $\\leq 3\.5\\%$ FLOPs over the underlying backbone\.

## Boosting Graph Contrastive Learning via Manifold\-Guided Representation Disentanglement

**Authors:** Zhiqiang Li; Jianqing Liang; Jie Wang; Junbiao Cui; Zhiqiang Wang; Jiye Liang

**ID:** 151362 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8H5INq4J6>) | [PDF](<https://openreview.net/pdf?id=b8H5INq4J6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151362>)

Graph contrastive learning constructs augmented views and aligns corresponding instances across views to learn view\-invariant representations\. However, existing methods usually enforce cross\-view consistency within a single representation space, lacking an explicit characterization of view\-specific information\. This may suppress task\-relevant complementary information, reduce embedding diversity, and induce dimensional collapse\. To this end, we propose Manifold\-Guided Representation Disentanglement \(MGRD\), a plug\-and\-play framework for boosting graph contrastive learning\. MGRD decomposes graph representations into shared and complementary subspaces\. The shared subspace captures view\-invariant semantics while preserving local graph structure through a graph\-anchored manifold prior, whereas the complementary subspace captures residual view\-specific information beyond the shared representation and is regularized by asymmetric consistency and subspace decorrelation\. By jointly exploiting shared and complementary representations, MGRD balances cross\-view invariance and representation diversity\. Experiments on node\-level and graph\-level benchmarks show that MGRD consistently improves multiple GCL backbones, while theoretical and empirical analyses demonstrate its effectiveness in mitigating dimensional collapse\.

## Combating Camouflage and Forgetting: Spatio\-Temporal Dual Denoising for Money Laundering Detection

**Authors:** Xueting Yang; Zhong Li; changjun jiang; Wenbin Zhang; Meikang Qiu

**ID:** 152926 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PL6k93ECq7>) | [PDF](<https://openreview.net/pdf?id=PL6k93ECq7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152926>)

Money laundering detection on financial transaction graphs is critical but challenging\. Laundering activities often conceal illicit fund flows within dense legitimate transaction neighborhoods and disperse suspicious behaviors over extended time spans\. These patterns cause weak illicit signals to be spatially diluted and temporally forgotten, limiting the effectiveness of standard graph learning methods in AML scenarios\. In this paper, we propose a spatio\-temporal dual denoising framework for money laundering detection on evolving graphs, named EvoDen\. For spatial denoising, instead of relying on passive neighborhood aggregation, we design a risk\-potential guided walk mechanism to extract denoised and suspicion\-biased transaction sequences, enabling the model to isolate anomalous fund flows from noisy local neighborhoods\. For temporal denoising, we propose a continual Transformer\-based sequence learning method driven by a reconstruction objective, which learns denoised sequence representations while enabling latent\-space replay of historical knowledge to mitigate representation drift\. We conduct experiments on three transaction datasets, and the results show that EvoDen outperforms state\-of\-the\-art baselines in accurately identifying concealed money laundering entities\.

## Graph Label Alignment: A Diagnostic Atlas for Graph Classification

**Authors:** Neelam Akula; Varun Shiralkar; Murat Kantarcioglu; Baris Coskunuzer

**ID:** 150743 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fiy00bWoJN>) | [PDF](<https://openreview.net/pdf?id=fiy00bWoJN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150743>)

Graph classification benchmarks vary widely in difficulty: some are solved by simple pooled baselines, while others remain challenging for GNNs and graph transformers\. We take a data\-centric view and ask whether benchmark success is driven by genuine structure\-feature reasoning or by label signal already accessible from restricted marginal views\. We introduce \*\*graph label alignment\*\*, a lightweight diagnostic that measures label accessibility through two supervised probes computed without training a graph encoder: \*structural label alignment\* \(SLA\), based on permutation\-invariant topological and spectral summaries, and \*feature label alignment\* \(FLA\), based on pooled node features with edges removed\. Across real graph classification benchmarks and multiple pooled backbones, the resulting SLA\-FLA plane strongly organizes test accuracy, with low\-alignment datasets forming a consistent regime where standard pooled pipelines struggle\. To probe what lies beyond marginal accessibility, we introduce controlled interaction\-dominated stress tests, including heterophilic ego\-graphs and synthetic \*Twins\* tasks whose structural and feature marginals are matched across classes but whose role\-feature couplings differ\. These results show that high alignment explains much of easy benchmark performance, while low alignment reveals regimes where success requires preserving structure\-feature correspondence beyond standard pooled representations\.

## Robust and Hard\-to\-Remove GNN Watermarking via Topological Invariant Perception

**Authors:** JIPENG LI; Yanning Shen

**ID:** 152517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SXZrjQXtkB>) | [PDF](<https://openreview.net/pdf?id=SXZrjQXtkB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152517>)

Graph Neural Networks \(GNNs\) represent valuable intellectual property, yet existing watermarking schemes primarily rely on OOD backdoor triggers that are susceptible to model pruning, fine\-tuning, and distillation\. To tackle this challenge, we present InvGNN\-WM, which ties ownership to a model's implicit perception of a graph invariant, enabling trigger\-free, black\-box verification with negligible task impact\. By training a scalar head to predict normalized algebraic connectivity on owner\-private carrier graphs, ownership is embedded into the model's core reasoning logic rather than exogenous patterns\. We provide guarantees for imperceptibility and robustness, and prove that exact removal is NP\-complete under monotone decoders\. Empirical evaluations across diverse node and graph classification datasets show that InvGNN\-WM maintains clean task accuracy while outperforming trigger\- and explanation\-based baselines in watermark fidelity\. Our method remains robust under unstructured pruning, fine\-tuning, and post\-training quantization, with clear recovery pathways under knowledge distillation\.

## MOOD: Benchmarking Post\-Hoc OOD Detection for Materials Property Prediction

**Authors:** Shirley X Yu; Amey Pasarkar; Adji Bousso Dieng

**ID:** 139325 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XD8uZJ05Fn>) | [PDF](<https://openreview.net/pdf?id=XD8uZJ05Fn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139325>)

Out\-of\-distribution \(OOD\) detection is essential for deploying machine learning models in high\-stakes scientific applications, yet methods that flag OOD inputs without retraining the model have been validated almost exclusively on image classification\. We introduce MOOD \(Materials Out\-of\-Distribution Detection\), a benchmark for evaluating whether these post\-hoc OOD detectors transfer to graph neural networks \(GNNs\) on materials property prediction\. MOOD evaluates 15 post\-hoc detectors and 2 supervised diagnostic probes across 4 GNN architectures, 5 MatBench tasks, and 15 physically motivated compositional and structural shifts, yielding over 200 evaluation settings and 4,000 AUROC measurements\. Our evaluation reveals three key findings\. First, current post\-hoc detectors perform near chance; all 15 detectors achieve an AUROC around 0\.5\. Second, detector failures decompose into two regimes: method bottlenecks and encoder bottlenecks\. Method bottlenecks arise when supervised probes can separate in\-distribution \(ID\) from OOD samples but unsupervised detectors fail, meaning that the embeddings contain OOD signal that current detectors do not extract\. Encoder bottlenecks arise when even supervised probes fail to separate ID from OOD samples, indicating that the relevant shift is not accessible in the frozen GNN representation\. Third, when OOD prediction error exceeds ID error, the AUROC of distance\-based and density\-based detectors correlates with the size of that gap\. Collectively, these findings indicate that reliable OOD detection in scientific domains requires representation learning strategies that explicitly preserve OOD relevant signal, particularly for tasks where current GNN architectures encode no extractable signal at all\.

## Benchmarking Graph Self\-Supervised Learning for Node\-Level Tasks: Insights and Strong Baseline

**Authors:** Dmitry Eremeev; Gleb Bazhenov; Oleg Platonov; Artem Babenko; Liudmila Prokhorenkova

**ID:** 138872 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zrKbSaWEfZ>) | [PDF](<https://openreview.net/pdf?id=zrKbSaWEfZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138872>)

Self\-supervised learning \(SSL\) has received notable attention in the graph machine learning community, enabling the efficient use of unlabeled data\. However, evaluation setups vary significantly across studies, and baseline tuning often receives limited attention, making it difficult to draw reliable conclusions about model performance\. In this paper, we reevaluate four representative graph SSL methods within a unified setup across a diverse set of datasets\. We focus on rigorously tuning both SSL and supervised methods by employing enhanced GNN architectures and comprehensive hyperparameter optimization\. We observe that, contrary to prior literature, two popular generative methods, MaskGAE and GraphMAE, regularly fail to outperform well\-tuned supervised baselines\. In contrast, the contrastive methods BGRL and GRACE consistently perform better than both the generative methods and supervised baselines\. We hypothesize that this discrepancy arises because BGRL and GRACE capture information from both graph structure and node features, whereas MaskGAE and GraphMAE focus on a single source of information\. We support this hypothesis through an analysis on carefully designed synthetic data\. Motivated by our observations, we advocate for designing SSL objectives that capture both feature and structural information\. To verify the effectiveness of this approach, we propose a simple generative method, GrASP, which reconstructs both graph structure and node features\. Despite its simplicity, GrASP outperforms all other evaluated approaches and can be considered as a strong baseline in future studies\.

## Neighbor\-Aware Snapshot\-Based Temporal Graph Learning

**Authors:** Jinxi Yang; He Li; Wei Yu; Xingyu Gao; Mang Ye

**ID:** 150299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jAt84Y6AVj>) | [PDF](<https://openreview.net/pdf?id=jAt84Y6AVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150299>)

Dynamic graph learning models the temporal evolution of structural interactions\. Existing methods present a stark trade\-off between performance and efficiency\. Event\-based models achieve strong accuracy because processing graphs edge\-by\-edge allows them to continuously update and leverage fine\-grained joint neighborhood information\. Conversely, snapshot\-based methods offer high computational efficiency by processing entire snapshots simultaneously\. However, updating neighborhood states for all nodes concurrently is computationally prohibitive\. Consequently, current snapshot methods fail to utilize joint neighborhood information, leading to significantly weaker performance\. To bridge this gap, we propose the Neighbor\-Aware Graph Neural Network \(NAGNN\), a novel snapshot\-based architecture that seamlessly integrates joint neighborhood information to achieve both strong performance and high efficiency\. Specifically, NAGNN introduces a Locality\-Sensitive Hashing \(LSH\)\-based topology distiller to construct compact reservoirs that store neighborhood information efficiently\. These reservoirs are further augmented with degree\-scaled statistical moments to encode structural characteristics of local neighborhoods\. A Gated Recurrent Unit \(GRU\) subsequently processes the distilled structural representations to model and capture their temporal dynamics\. Extensive experiments demonstrate that NAGNN matches the predictive accuracy of computationally expensive event\-based models with minimal overhead, establishing a highly scalable and effective paradigm for dynamic graph learning\.

## PATH: A Dual Perspective for High\-quality Text\-attributed Graph Learning

**Authors:** Yuhang Pei; Fanchun Meng; Changhu Wang; Tao Ren; Yifan Wang; Wei Ju; Chong Chen; Xian\-Sheng Hua; Xiao Luo

**ID:** 153063 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OGiQONmx2t>) | [PDF](<https://openreview.net/pdf?id=OGiQONmx2t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153063>)

This paper studies the problem of zero\-shot text\-attributed graph learning, which aims to generate high\-quality node representations in unseen text\-attributed graphs\. Recent approaches usually utilize large language models \(LLMs\) instead of graph neural networks \(GNNs\) to extract semantics due to their strong generalization ability, which could neglect the intrinsic geometric structure\. Towards this end, in this paper, we propose a novel approach named Prototypical Mutual Prompting Enhancement \(PATH\) for zero\-shot text\-attributed graph learning\. The core of our PATH is to generate high\-quality prompts using dual prototypical learning to combine the advantages of both language models and graph models\. In particular, we first utilize dual graph pre\-training from both instance and informativeness perspectives to generate a generalizable GNN\. Then, we incorporate the frozen language and graph models into a mutual prompt learning framework\. On the one hand, we extract node tokens with geometric relationships using the graph model, which will be sent to multiple prototypical projections to enhance the understanding of the language model\. On the other hand, we extract graph information and task descriptions using the language model, which serves as instruction for the graph models\. Extensive experiments on node classification and link prediction validate the effectiveness of the proposed PATH against strong baselines\. Our code is available at \[https://anonymous\.4open\.science/r/PATH\]\(https://anonymous\.4open\.science/r/PATH\)\.

## Hyperbolic Graph Neural Networks Under the Microscope: The Role of Geometry–Task Alignment

**Authors:** Dionisia Naddeo; Jonas Linkerhägner; Nicola Toschi; Geri Skenderi; Veronica Lachi

**ID:** 150947 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6asnq38T9>) | [PDF](<https://openreview.net/pdf?id=e6asnq38T9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150947>)

_Abstract unavailable from the accessible public sources._

## HeterSEED: Semantics–Structure Decoupling for Heterogeneous Graph Learning under Heterophily

**Authors:** Xinyi Li; Ming Li; Lu Bai; Lixin Cui; Feilong Cao; Ke Lv; Yunliang Jiang; Pietro Lió

**ID:** 156084 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Y7JZRL4xc>) | [PDF](<https://openreview.net/pdf?id=0Y7JZRL4xc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156084>)

_Abstract unavailable from the accessible public sources._

## Transductive Generalization for GNNs via Optimal Transport

**Authors:** MoonJeong Park; Seungbeom Lee; Kyungmin Kim; Jaeseung Heo; Seunghyuk Cho; Shouheng Li; Sangdon Park; Dongwoo Kim

**ID:** 149773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nPn4mFZwlJ>) | [PDF](<https://openreview.net/pdf?id=nPn4mFZwlJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149773>)

Analyzing the generalization of graph neural networks \(GNNs\) on node classification is challenging: message passing induces dependencies that break the i\.i\.d\. assumption underlying standard inductive generalization theory\. While distribution\-free transductive theory resolves this dependency issue, existing classical bounds are either intractable or correlate poorly with empirical generalization\. To fill this gap, we propose a transductive generalization bound based on optimal transport, connecting generalization to intra\-class concentration and inter\-class separation in the feature space\. Empirically, our bound aligns strongly with the generalization gap\. Building on this representation\-based approach, we analyze how feature geometry evolves under repeated message passing\. This explains the non\-monotonic relationship between GNN depth and generalization, providing new insights into oversmoothing research\. Practically, our bound serves as a geometry\-aware regularizer that corrects the harmful behavior of message passing, yielding consistent performance improvements\.

## Noisy isomorphism: Robust expressivity of GNNs under structural perturbation

**Authors:** Ning Zhang; Mihai Cucuringu; Xiaowen Dong

**ID:** 148301 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ysNuUmj7OA>) | [PDF](<https://openreview.net/pdf?id=ysNuUmj7OA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148301>)

The expressivity of graph neural networks is predominantly characterized in a noiseless setting via binary graph isomorphism tests\. This perspective certifies whether two graphs can be distinguished, but does not quantify how robust such distinctions are under structural perturbations\. In practice, however, real\-world graphs are often corrupted by noise, where even small structural changes might lead to disproportionate distortions in learned representations\.  In this study, we generalize graph isomorphism to a noisy alignment criterion, requiring that graphs that remain identifiable under noise are embedded closer to their source than to any alternative\. This yields a margin\-based formulation of expressivity that bridges the gap between combinatorial isomorphism\-based theory and the continuous learned representations\. Notably, our framework is architecture\-agnostic and strictly generalizes classical isomorphism\-based expressivity\. We further derive certified robustness guarantees for node\-level tasks and an explicit robustness radius for graph\-level representations\.  Experiments confirm that our criteria predict and improve robustness under structural perturbations\.

## Aggregation Dispersion: An Information\-Geometric Diagnostic of Oversmoothing in Graph Neural Networks

**Authors:** Abdessalam Ed\-dib; Amine Aboussalah

**ID:** 154195\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154195

[Paper](<https://openreview.net/forum?id=FUpw0l0XS6>) | [PDF](<https://openreview.net/pdf?id=FUpw0l0XS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154195>)

Message\-passing neural networks \(MPNNs\) learn node representations by iteratively aggregating information from neighbors, but stacking too many layers causes all representations to converge, a phenomenon known as oversmoothing\. We propose a geometric perspective on this phenomenon\. At each depth $k$, the propagation operator assigns to every node $v$ a walk distribution $p\_v^\{\(k\)\}$, a probability distribution over all nodes describing how $v$ distributes its attention across the graph\. These walk distributions form a point cloud on the probability simplex, and oversmoothing is the contraction of this cloud to a single point\. To measure this contraction, we exploit the intrinsic geometry of the simplex: the Fisher\-\-Rao metric, the unique Riemannian metric invariant under sufficient statistics, whose chordal distance under the square\-root embedding $p \\mapsto \\sqrt\{p\}$ is the Hellinger distance\. The resulting diagnostic, the \\emph\{aggregation dispersion\} $\\mathcal\{D\}\_k$, is the variance of the embedded point cloud on the unit sphere\. We prove that: \(i\) $\\mathcal\{D\}\_k = 0$ if and only if the $k$\-th step propagation matrix has rank one, providing a necessary and sufficient condition for representational collapse; \(ii\) $\\mathcal\{D\}\_k$ is monotonically non\-increasing with depth, so each layer irreversibly spends a finite diversity budget; \(iii\) the spectral gap of the propagation matrix controls the rate of this decay; and \(iv\) for contractive MPNNs, the aggregation dispersion upper\-bounds the representation dispersion up to architecture\-dependent constants, connecting the geometry of the simplex to the geometry of the feature space\. In experiments across 14 model configurations and 11 datasets, $\\mathcal\{D\}\_k$ achieves the highest average Pearson correlation with accuracy degradation among all training\-free diagnostics \($\|r\| = 0\.721$\), outperforming the post\-training effective rank \($\|r\| = 0\.688$\)\.

## Contrastive Adversarial Training for Robust Graph Neural Networks under Label Poisoning

**Authors:** Manshika C Bissessur; Melis Ilayda Bal; Michael Muehlebach

**ID:** 150131 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kS90WnGV9B>) | [PDF](<https://openreview.net/pdf?id=kS90WnGV9B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150131>)

Graph Neural Networks \(GNNs\) are effective for modeling relational data but are vulnerable to label poisoning, where a small number of corrupted training labels can propagate errors across the graph via message\-passing\. Despite this risk, defenses against label poisoning remain underexplored: existing methods are primarily designed for label noise and often rely on robust losses or heuristic data cleaning that fail to distinguish adversarial poisoning from naturally hard examples\. In this paper, we propose CoLAT \(Contrastive Label\-flipping for Adversarial Training\), a novel contrastive adversarial training framework tailored for robust node classification on graphs\. The core of our approach is a structure\-aware detection model that uses contrastive learning to identify label–structure inconsistencies\. Unlike prior contrastive methods that focus on representation learning, CoLAT leverages contrastive embeddings to select high\-risk nodes that guide adversarial label\-flipping during training\. This alternating optimization not only performs structure\-aware adversarial training but also implicitly sanitizes corrupted labels, improving robustness against diverse attacks from the literature\. Extensive experiments on multiple benchmarks show that CoLAT consistently outperforms existing defenses under various poisoning intensities while scaling efficiently to large graphs\.

## Graph Learning Should Move Beyond Restrictive Views of Spectral and Message\-Passing GNNs

**Authors:** Antonis Vasileiou; Juan Cervino; Pascal Frossard; Charilaos Kanatsoulis; Christopher Morris; Michael T Schaub; Pierre Vandergheynst; Zhiyang Wang; Guy Wolf; Ron Levie

**ID:** 140107 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=82awBSyQDS>) | [PDF](<https://openreview.net/pdf?id=82awBSyQDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140107>)

Graph neural networks \(GNNs\) are commonly divided into message\-passing neural networks \(MPNNs\) and spectral GNNs, reflecting two largely separate research traditions in machine learning and signal processing\. While MPNNs have a precise definition, there is no widely accepted criterion for what makes a mapping a spectral GNN\. Most existing work restricts spectral GNNs to layered architectures based on linear spectral filters\. Under this restriction, we show that spectral and spatial GNNs have largely equivalent expressive power\. To promote progress in the field, we propose a precise definition of spectral GNNs based on eigenbasis symmetries, contrasting the definition of MPNNs via neighborhood permutation symmetries\. We further argue that the two perspectives offer complementary strengths\. MPNNs provide a natural language for discrete structure and expressivity analysis through tools from logic and graph isomorphism, while the spectral perspective offers principled tools for understanding smoothing, bottlenecks, stability, and community structure\. Overall, we argue that progress in graph learning will be accelerated by clarifying the similarities and differences between these perspectives and by moving toward a unified theoretical framework\.

## From Nodes to Pixels: Topological and Structural Two\-View Graph Imaging

**Authors:** Md Joshem Uddin; Soham Changani; Sai K Navuluru; Cuneyt Akcora; Baris Coskunuzer

**ID:** 148590\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148590

[Paper](<https://openreview.net/forum?id=wd6T1tqNIh>) | [PDF](<https://openreview.net/pdf?id=wd6T1tqNIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148590>)

Graph learning still lacks a broadly reusable input interface comparable to patches in vision or tokens in language\. Unlike images or text, graphs are irregular, vary in size and density, and are invariant under many equivalent node labelings, making it difficult to standardize inputs across tasks and architectures\. We introduce \*\*G2Image\*\*, a fixed\-budget graph imaging framework that converts each graph into two complementary image\-like views\. \*\*TopoGrid\*\* provides a stable topological view by encoding an intrinsic bifiltration as a compact multipersistence surface grid, while \*\*GraphGrid\*\* provides a higher\-bandwidth structural view by aggregating edge densities between groups defined by intrinsic node scores\. Both views are permutation\-invariant and come with resolution\-controlled stability guarantees\. Because the resulting representations are fixed\-size tensors, they can be processed by lightweight 2D encoders and aligned through a supervised cross\-view contrastive objective\. Across graph classification and molecular prediction benchmarks, \*\*G2Image\*\* achieves strong average performance among the compared methods, improves over single\-view and standard fusion variants, and extends to attribute\-rich molecular graphs without changing the overall architecture\. These results suggest that fixed\-budget graph images offer a practical and reusable interface for graph representation learning\.

## Uncovering Semantic Hierarchies in Text\-Attributed Graphs via Variational EM\-based LLM–GNN Synergy

**Authors:** Yunhui Liu; Xudong Jin; Qizhuo Xie; Chunhui Zhao; Xiao Luo; Tao Zheng; Bin Chong; Tieke He

**ID:** 152617\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152617

[Paper](<https://openreview.net/forum?id=Rm5u5TMKcq>) | [PDF](<https://openreview.net/pdf?id=Rm5u5TMKcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152617>)

_Abstract unavailable from the accessible public sources._

## Distilling Graph Geometry: Knowledge Gap from GNNs to MLPs

**Authors:** Zhewei Chen; Hao Zhu; Jiaojiao Jiang; Ahad N\. Zehmakan

**ID:** 150714 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g12F7YzATu>) | [PDF](<https://openreview.net/pdf?id=g12F7YzATu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150714>)

_Abstract unavailable from the accessible public sources._

## Efficient Memory Crystallization for Graph Learning under Non\-Stationary Distribution Shifts

**Authors:** Yue Hou; Ruomei Liu; Yingke Su; Wu Junran; Ke Xu

**ID:** 149800 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nG6LsRFiOk>) | [PDF](<https://openreview.net/pdf?id=nG6LsRFiOk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149800>)

_Abstract unavailable from the accessible public sources._

## Graph Learning Should Move Beyond Restrictive Views of Spectral and Message\-Passing GNNs

**Authors:** Antonis Vasileiou; Juan Cervino; Pascal Frossard; Charilaos Kanatsoulis; Christopher Morris; Michael T Schaub; Pierre Vandergheynst; Zhiyang Wang; Guy Wolf; Ron Levie

**ID:** 140107\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140107

[Paper](<https://openreview.net/forum?id=82awBSyQDS>) | [PDF](<https://openreview.net/pdf?id=82awBSyQDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140107>)

Graph neural networks \(GNNs\) are commonly divided into message\-passing neural networks \(MPNNs\) and spectral GNNs, reflecting two largely separate research traditions in machine learning and signal processing\. While MPNNs have a precise definition, there is no widely accepted criterion for what makes a mapping a spectral GNN\. Most existing work restricts spectral GNNs to layered architectures based on linear spectral filters\. Under this restriction, we show that spectral and spatial GNNs have largely equivalent expressive power\. To promote progress in the field, we propose a precise definition of spectral GNNs based on eigenbasis symmetries, contrasting the definition of MPNNs via neighborhood permutation symmetries\. We further argue that the two perspectives offer complementary strengths\. MPNNs provide a natural language for discrete structure and expressivity analysis through tools from logic and graph isomorphism, while the spectral perspective offers principled tools for understanding smoothing, bottlenecks, stability, and community structure\. Overall, we argue that progress in graph learning will be accelerated by clarifying the similarities and differences between these perspectives and by moving toward a unified theoretical framework\.

## Higher\-Order Cell Tracking Transformer

**Authors:** Jordão Bragantini; Ilan Theodoro; Loic A Royer

**ID:** 150453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hvvdcmMum3>) | [PDF](<https://openreview.net/pdf?id=hvvdcmMum3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150453>)

Reconstructing lineages from live\-imaging microscopy requires linking cell detections across time, including through cell divisions\. A common approach is to construct a candidate graph and associate cell segmentations \(nodes\) across frames\. However, these and other existing methods overlook two structural obstacles in candidate tracking graphs: \(i\) cell divisions entangle distinct lineage paths in the node embedding space, and \(ii\) edges sharing a node have near\-random label agreement, so the candidate\-graph topology carries no useful information for graph neural networks to aggregate\. We propose the \*Higher\-Order Cell Tracking Transformer\* \(HOCT\), an edge\-centric architecture in which candidate cell links attend to one another under a 3D geometric prior, resolving both issues\. Evaluated on the Cell Tracking Challenge and a bacteria division benchmark, HOCT achieves state\-of\-the\-art results without deep pre\-trained image encoders\. Moreover, the proposed approach is easier to fine\-tune, quickly reducing tracking errors by 59% with 400 annotations in a human\-in\-the\-loop setting, outperforming LoRA fine\-tuning of competing transformer baselines \(6\.75% improvement\)\.

## Heterogeneous Graph Federated Learning with Structure\-Aware Data\-Free Distillation

**Authors:** Lili Guo; Qi Li; Ruoyu Wang; Chao Li; Shifei Ding

**ID:** 148359 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yTrxnbFQo7>) | [PDF](<https://openreview.net/pdf?id=yTrxnbFQo7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148359>)

Subgraph heterogeneity is a critical challenge in federated learning, significantly impacting model performance\. Data\-free knowledge distillation overcomes the limitation of sharing private label distributions in federated learning, yet existing research lacks in\-depth exploration of subgraph heterogeneity\. Our work builds upon the fact that node and structural variations in heterogeneous graphs cause significant disparities in the reliability of knowledge from local graph neural networks\. We propose a structure\-aware bidirectional data\-free federated distillation technique, where the generator and global model engage in an adversarial training process to ensure reliable bidirectional knowledge transfer between local and global models\. Extensive experiments across multiple public datasets demonstrate the model's effectiveness\.

## Return to Basics: Very Simple Graph Contrastive Learning via Noise Cancellation Principle

**Authors:** Yanan Zhao; Feng Ji; Jingyang Dai; Jiaze Ma; Wee Peng Tay

**ID:** 151575 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZZZah2bobp>) | [PDF](<https://openreview.net/pdf?id=ZZZah2bobp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151575>)

Graph Contrastive Learning \(GCL\) has shown strong promise for unsupervised graph representation learning, yet its effectiveness remains limited on heterophilic graphs, where connected nodes often belong to different classes\. Existing methods rely on complex augmentation schemes, intricate encoders, or negative sampling, which raises the question of whether such complexity is truly necessary in this challenging setting\. In this work, we revisit the foundations of supervised and unsupervised learning on graphs and uncover a simple yet effective principle for GCL: mitigating node feature noise by aggregating it with structural features derived from the graph topology\. This phenomenological study suggests that the original node features and the graph structure naturally provide two complementary views for contrastive learning\. Building on this insight, we propose an embarrassingly simple GCL model that uses a GCN encoder to capture structural features and an MLP encoder to isolate node feature noise\. Our design requires neither data augmentation nor negative sampling, yet achieves state\-of\-the\-art results on heterophilic benchmarks with minimal computational and memory overhead, while offering advantages in homophilic graphs in terms of complexity, scalability, and robustness\. Moreover, a variant of GCN\-MLP based on the same principle also achieves SOTA performance on homophilic datasets\. We provide theoretical justification for our approach and validate its effectiveness through extensive experiments\.

## Adaptive Multi\-view Graph Contrastive Learning via Fractional Continuous Dynamics

**Authors:** Yanan Zhao; Feng Ji; Jingyang Dai; Jiaze Ma; Keyue Jiang; Kai Zhao; Wee Peng Tay

**ID:** 151789 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xzigfjpz3Z>) | [PDF](<https://openreview.net/pdf?id=Xzigfjpz3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151789>)

Graph contrastive learning \(GCL\) learns node and graph representations by contrasting multiple views of the same graph\. Existing methods predominantly rely on a small set of fixed, handcrafted views\-\-\-typically a local and a global perspective\-\-\-which fundamentally constrains their capacity to capture multi\-scale structural patterns\. We present an augmentation\-free, multi\-view GCL framework grounded in fractional\-order continuous dynamics\. By systematically varying the fractional derivative order $\\alpha\\in\(0,1\]$, our encoders produce a continuous spectrum of semantically distinct views: small values of $\\alpha$ induce localized, memory\-attenuated feature propagation, whereas values approaching $1$ recover broader, global aggregation\. Crucially, we treat $\\alpha$ as a learnable parameter, enabling the model to automatically identify informative views in a data\-driven manner, without resorting to manual view engineering\. Extensive experiments on standard node\- and graph\-level benchmarks demonstrate that the resulting representations are more robust and expressive, consistently outperforming state\-of\-the\-art GCL baselines\.

## One\-Shot Federated Graph Learning via High\-Fidelity Proxies and Transferability\-Guided Collaboration

**Authors:** Jia Jiang; Zihan Tan; Wenke Huang; Bin Yang; Mang Ye

**ID:** 153448 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LEYRzmVnb3>) | [PDF](<https://openreview.net/pdf?id=LEYRzmVnb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153448>)

_Abstract unavailable from the accessible public sources._

## SGNNBench: A Holistic Evaluation of Spiking Graph Neural Networks on Large\-scale Graphs

**Authors:** Huizhe Zhang; Jintang Li; Yuchang Zhu; Huazhen Zhong; Liang Chen

**ID:** 139238 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cvTtwanpui>) | [PDF](<https://openreview.net/pdf?id=cvTtwanpui>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139238>)

Graph Neural Networks \(GNNs\), as representative deep models designed for graph data, effectively learn graph topological information and push the performance boundaries across various graph tasks\. However, the computational and memory burden of GNNs poses significant challenges for scaling to large real\-world graphs\. Spiking Graph Neural Networks \(SGNNs\), which integrate biologically plausible learning via unique spike\-based neurons, have emerged as a promising energy\-efficient alternative\. Different layers communicate with sparse and binary spikes, which facilitates computation and storage of intermediate graph representations\. Despite the proliferation of SGNNs proposed in recent years, there is no systematic benchmark to explore the basic design principles of these brain\-inspired networks on the graph data\. To bridge this gap, we present \*\*SGNNBench\*\* to quantify progress in the field of SGNNs\. Specifically, we elaborately investigate the design space of SGNNs to facilitate the development of a general SGNN paradigm\. Regarding efficiency, we empirically compare these baselines w\.r\.t\. model size, memory usage and theoretical energy consumption to reveal previously overlooked energy bottlenecks\. Furthermore, SGNNBench establishes a unified and reliable benchmark to comprehensively evaluate 9 state\-of\-the\-art SGNNs across 20 datasets covering diverse graph settings and tasks\.

## OgBench: A Framework for Evaluating Graph Neural Networks on Omics Data

**Authors:** Louisa Cornelis; Johan Mathe; Louis Van Langendonck; Guillermo Bernárdez; Nina Miolane

**ID:** 139271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aYToyBSC7D>) | [PDF](<https://openreview.net/pdf?id=aYToyBSC7D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139271>)

Graph Neural Networks \(GNNs\) have become the dominant framework for inductive graph\-level learning\. Yet most benchmarks focus on the regime $n \\gg p$, where the number of graphs $n$ greatly exceeds the number of nodes per graph $p$\. This overlooks biological domains such as omics, which operate in the opposite $n \\ll p$ regime, characterized by large graphs of genes, transcripts, or proteins across few patient samples\. This raises the question: \\textit\{how do GNNs perform in this low\-sample, high\-node omics setting?\} We introduce \\texttt\{OgBench\} \(Omics\-Graph Bench\), the first benchmarking platform for graph\-level prediction in the $n \\ll p$ regime characteristic of omics data\. We provide a standardized, end\-to\-end modular infrastructure from raw omics data to families of featured graphs with varied structural properties\. We benchmark classical GNNs, as well as GNNs designed for large graphs and omics applications, alongside MLPs and machine learning baselines to establish reference performances\. Our results show that widely used GNNs often do not outperform simple MLPs and classical baselines\. These findings challenge the prevailing assumption that graph structure inherently adds value in this domain, fostering a critical reassessment of current learning paradigms\. Ultimately, by exposing these limitations, OgBench provides the open\-source ecosystem necessary for the community to develop and validate novel architectures explicitly tailored for biological graphs\. The code is available at \\url\{https://anonymous\.4open\.science/r/ogbench\-C1A9/README\.md\}\.

## MatchEx: Model\-Level GNN Explanations with Multi\-Granular Insights

**Authors:** Sayan Saha; Sanghamitra Bandyopadhyay

**ID:** 156763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=YMETLG2WvM>) | [PDF](<https://openreview.net/pdf?id=YMETLG2WvM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156763>)

Graph Neural Networks \(GNNs\) are increasingly deployed in high\-stakes domains  where interpretability is crucial\. Existing model\-level explanation methods largely rely on generative models, which often produce motifs that fail to resemble real instances,  cannot account for the diversity of discriminative motifs recognized by the classifier for a target class and lack mechanisms for translating global explanations to instance\-level insights\. We present MatchEx, a framework that discovers discriminative motifs directly from real instances by optimizing a novel matching objective\. Unlike isomorphism, which can only recover identical motifs that rarely occur in real\-world graphs, this objective extends beyond exact matches to provably recover semantically similar motifs, allowing generalizable explanations\. The matching mechanism also enables projection of class level rationales onto individual graphs for faithful instance\-level insights\. When a single motif fails to explain all instances, MatchEx adaptively partitions the instances in a class into coherent subgroups with distinct rationales\. Extensive experiments across six real and synthetic datasets show that MatchEx consistently outperforms state\-of\-the\-art baselines, delivering coherent, generalizable, and multi\-granular explanations\.

## Aggregation Dispersion: An Information\-Geometric Diagnostic of Oversmoothing in Graph Neural Networks

**Authors:** Abdessalam Ed\-dib; Amine Aboussalah

**ID:** 154195\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154195

[Paper](<https://openreview.net/forum?id=FUpw0l0XS6>) | [PDF](<https://openreview.net/pdf?id=FUpw0l0XS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154195>)

Message\-passing neural networks \(MPNNs\) learn node representations by iteratively aggregating information from neighbors, but stacking too many layers causes all representations to converge, a phenomenon known as oversmoothing\. We propose a geometric perspective on this phenomenon\. At each depth $k$, the propagation operator assigns to every node $v$ a walk distribution $p\_v^\{\(k\)\}$, a probability distribution over all nodes describing how $v$ distributes its attention across the graph\. These walk distributions form a point cloud on the probability simplex, and oversmoothing is the contraction of this cloud to a single point\. To measure this contraction, we exploit the intrinsic geometry of the simplex: the Fisher\-\-Rao metric, the unique Riemannian metric invariant under sufficient statistics, whose chordal distance under the square\-root embedding $p \\mapsto \\sqrt\{p\}$ is the Hellinger distance\. The resulting diagnostic, the \\emph\{aggregation dispersion\} $\\mathcal\{D\}\_k$, is the variance of the embedded point cloud on the unit sphere\. We prove that: \(i\) $\\mathcal\{D\}\_k = 0$ if and only if the $k$\-th step propagation matrix has rank one, providing a necessary and sufficient condition for representational collapse; \(ii\) $\\mathcal\{D\}\_k$ is monotonically non\-increasing with depth, so each layer irreversibly spends a finite diversity budget; \(iii\) the spectral gap of the propagation matrix controls the rate of this decay; and \(iv\) for contractive MPNNs, the aggregation dispersion upper\-bounds the representation dispersion up to architecture\-dependent constants, connecting the geometry of the simplex to the geometry of the feature space\. In experiments across 14 model configurations and 11 datasets, $\\mathcal\{D\}\_k$ achieves the highest average Pearson correlation with accuracy degradation among all training\-free diagnostics \($\|r\| = 0\.721$\), outperforming the post\-training effective rank \($\|r\| = 0\.688$\)\.

## Contrastive Adversarial Training for Robust Graph Neural Networks under Label Poisoning

**Authors:** Manshika C Bissessur; Melis Ilayda Bal; Michael Muehlebach

**ID:** 150131\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150131

[Paper](<https://openreview.net/forum?id=kS90WnGV9B>) | [PDF](<https://openreview.net/pdf?id=kS90WnGV9B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150131>)

Graph Neural Networks \(GNNs\) are effective for modeling relational data but are vulnerable to label poisoning, where a small number of corrupted training labels can propagate errors across the graph via message\-passing\. Despite this risk, defenses against label poisoning remain underexplored: existing methods are primarily designed for label noise and often rely on robust losses or heuristic data cleaning that fail to distinguish adversarial poisoning from naturally hard examples\. In this paper, we propose CoLAT \(Contrastive Label\-flipping for Adversarial Training\), a novel contrastive adversarial training framework tailored for robust node classification on graphs\. The core of our approach is a structure\-aware detection model that uses contrastive learning to identify label–structure inconsistencies\. Unlike prior contrastive methods that focus on representation learning, CoLAT leverages contrastive embeddings to select high\-risk nodes that guide adversarial label\-flipping during training\. This alternating optimization not only performs structure\-aware adversarial training but also implicitly sanitizes corrupted labels, improving robustness against diverse attacks from the literature\. Extensive experiments on multiple benchmarks show that CoLAT consistently outperforms existing defenses under various poisoning intensities while scaling efficiently to large graphs\.

## GraphUAT: Uncertainty Attribution in Graph Neural Networks

**Authors:** Burouj Armgaan; Karan R Singh; Abhirup Mondal; Sayan Ranu

**ID:** 149147\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149147

[Paper](<https://openreview.net/forum?id=sV9yc7CpY9>) | [PDF](<https://openreview.net/pdf?id=sV9yc7CpY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149147>)

Models that recognize when their predictions are unreliable inspire greater trust than those that make confident but incorrect decisions\. While recent advances enable uncertainty quantification in GNNs, understanding \*why\* a model is uncertain, whether due to noisy features, conflicting neighborhoods, or sparse training coverage, remains unsolved\. We address this gap with GraphUAT, the first \*uncertainty attribution\* framework for GNNs, which identifies the sources of uncertainty rather than aiming to improve its quantification\. GraphUAT employs a teacher\-student paradigm, where the trained GNN's behavior is distilled into an uncertainty\-aware student that disentangles aleatoric and epistemic uncertainties\. We then use targeted probes to trace the student's uncertainty back to the responsible features and structural components\. Experiments across benchmarks show that removing the identified elements consistently reduces the teacher's uncertainty, validating the faithfulness of our attributions\.

## GEM: A Dual\-Scale Architecture for Graph\-Level Hierarchical Representation Learning

**Authors:** Zhaowei Wu; Kaizhong Zheng; Guangmingzi Yang; Shuai Jiang; Liangjun Chen; Badong Chen

**ID:** 149511\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149511

[Paper](<https://openreview.net/forum?id=pad2MT4H9X>) | [PDF](<https://openreview.net/pdf?id=pad2MT4H9X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149511>)

Real\-world networks typically exhibit small\-world properties: dense local clustering yet efficient global propagation\. However, current methods struggle to reconcile this hierarchy: Graph Neural Networks \(GNNs\) suffer from over\-smoothing in long\-range modeling, while sequence/state\-space models often lack the inductive bias to preserve complex graph topology\. To bridge this gap, we propose Graph Encoding Mamba \(GEM\), a dual\-scale architecture for graph\-level hierarchical representation learning\. First, GEM employs a dual\-branch encoder that synergizes the local sensitivity of GNNs with the selective scanning of Mamba, effectively capturing both local topology and global shortcuts\. Second, a modularity\-aware hierarchical pooling mechanism is designed to retain salient community structures during graph coarsening\. Crucially, to mitigate structural redundancy from multi\-scale fusion, we incorporate an Information Bottleneck objective to distill task\-relevant structural patterns from redundant features, encouraging compact, task\-relevant representations and supporting intrinsic interpretability\. Extensive experiments on graph\-level benchmarks demonstrate that GEM improves performance across biological, social, and brain network datasets\. We further provide a lightweight node\-level adaptation on long\-range benchmarks as a boundary analysis of GEM's transferability\. Code is available at \\url\{https://anonymous\.4open\.science/r/GEM\-C34D\}\.

## Beyond MSE: Differentiable Complexity Priors for Structure\-Preserving Neural Denoising

**Authors:** Xiangyu Jiang; Jie Huang

**ID:** 153782\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153782

[Paper](<https://openreview.net/forum?id=IhHlpUB6rt>) | [PDF](<https://openreview.net/pdf?id=IhHlpUB6rt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153782>)

Neural denoisers trained with pointwise distortion losses such as MSE often suppress the temporal regularities that downstream tasks depend on\-\-\-a failure that becomes acute under non\-Gaussian, impulsive, or non\-stationary disturbances\. We propose a training framework that lifts a family of classical complexity descriptors\-\-\-permutation entropy, sample entropy, Lempel\-Ziv complexity, and Higuchi fractal dimension\-\-\-into end\-to\-end differentiable objectives via calibrated soft surrogates with straight\-through gradients\. Three complementary mechanisms emerge from this lifting: \(i\) early fusion injects local structural priors as auxiliary inputs, \(ii\) a complexity\-consistency regularizer matches the multi\-scale complexity of denoiser outputs to clean references, and \(iii\) a curriculum sampler prioritizes examples whose noise\-induced complexity inflation is largest\. We prove that additive noise strictly inflates ordinal uncertainty for bounded piecewise\-smooth signals, and that, under bounded surrogate calibration, complexity consistency yields a strictly larger expected decision margin than MSE\-only training\. On OFDM/QAM communication signals under AWGN, $1/f$ colored, and $\\alpha$\-stable impulsive noise, our framework reduces post\-detection bit error rate by 29\-\-47% over Transformer \(PatchTST, iTransformer\), GNN, and CNN baselines, with statistically significant gains across five seeds and 95% bootstrap confidence intervals\. The improvements transfer to over\-the\-air conditions on the public RadioML 2018\.01A benchmark \(single\-carrier QAM portion\) and a new 50\-session in\-house SDR testbed, yielding 22\-\-26% relative BER reduction without fine\-tuning\. The framework is architecture\-agnostic and adds $\\leq 3\.5\\%$ FLOPs over the underlying backbone\.

## Cross\-Layer Evolution Graph Learning for Fine\-grained VLM Hallucination Detection

**Authors:** Shaoxuan Li; Shiliang Zhang

**ID:** 150184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k5PB3UmZfp>) | [PDF](<https://openreview.net/pdf?id=k5PB3UmZfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150184>)

Although Vision\-Language Models \(VLMs\) demonstrate impressive capabilities, their deployment in high\-stakes domains is severely hindered by hallucinations\. Existing detection methods mostly focus on static internal feature probing with coarse\-grained annotations, failing to achieve fine\-grained token\-level localization without expensive dense labels\. In this paper, we reconceptualize VLM hallucination detection as a dynamic graph learning task, identifying hallucinations as distinct \*trajectory drifts\* across network layers\. Consequently, we propose \*\*TRACE\*\* \(Token Representation Analysis with Cross\-layer Evolution\), a non\-intrusive probing framework that models internal states as heterogeneous spatio\-temporal graphs\. By employing Graph Neural Networks \(GNNs\) to capture computational dynamics, TRACE effectively isolates hallucinatory signals\. Furthermore, a token\-first Multiple Instance Learning \(MIL\) readout elegantly bridges the granularity gap, distilling macroscopic sentence\-level supervision into precise zero\-shot token\-level localization\. Extensive evaluations on M\-HalDetect, ViGoR, and HalLoc demonstrate that TRACE achieves state\-of\-the\-art detection performance while being competitive in localization accuracy, offering an efficient and interpretable solution for trustworthy VLMs\.

## Hierarchical Graph Representation Learning with Pooling\-Induced Substructures

**Authors:** Luca Sbicego; Xiaowen Dong; Dorina Thanou

**ID:** 154034 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gj1n6ynavZ>) | [PDF](<https://openreview.net/pdf?id=Gj1n6ynavZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154034>)

Hierarchical graph\-level tasks that require reasoning over substructures that extend beyond local neighborhoods are posing challenges for standard Graph Neural Networks \(GNNs\)\. While graph pooling aims to address this by coarsening graphs into hierarchical representations, existing methods often fail to explicitly preserve the substructures they induce, leading to inconsistent empirical performance\. Moreover, the evaluation of such approaches has proved difficult due to the lack of benchmarks with explicit hierarchical structure\. We propose Pooled\-Substructure\-Aware GNNs, an approach to graph pooling that explicitly preserves and processes substructures uncovered by structure\-based pooling schemes\. We show that this design strengthens pooling in terms of Weisfeiler\-Lehman \(WL\) expressivity\. To enable principled evaluation of pooling\-based models, we introduce two new synthetic datasets with controllable hierarchical structure and propose a metric to characterize the extent of hierarchical patterns in real\-world graph\-level benchmarks\. On tasks with relevant hierarchical structure, our approach outperforms matched pooling baselines, while remaining competitive on structurally simpler benchmarks\.

## Module\-Aware Optimization for Graph Neural Networks

**Authors:** Guy Hadad; Haggai Roitman; Moshe Eliasof; Bracha Shapira

**ID:** 149961 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ltLXrB366R>) | [PDF](<https://openreview.net/pdf?id=ltLXrB366R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149961>)

Different optimizers impose different geometries on parameter updates\. Adaptive methods such as Adam and AdamW use coordinate\-wise updates, while matrix\-aware optimizers such as Muon utilize weight\-matrix structure through orthogonalized updates\. For Graph Neural Networks \(GNNs\), however, the effective geometry of its weight matrices is shaped not only by its learned channel\-mixing weights, but also by the graph\-propagated representations it acts on\. Thus, even if an update is well normalized as a matrix, its effect on the layer output can be amplified when applied to graph\-propagated features\. To address this gap, we introduce GraphMuon, a graph\-aware optimizer that adapts Muon's matrix updates to the covariance structure of graph\-propagated layer inputs\. GraphMuon performs orthogonalization in a metric defined by these propagated representations and normalizes step sizes according to the update's induced effect on the layer representation\. We show that  theoretically, vanilla Muon can suffer from graph\-induced update amplification, while our GraphMuon can mitigate this effect\. As such, our GraphMuon yields a graph\-metric analogue of Muon's polar update step\. Empirically, we show that GraphMuon achieves $2\.13\\times$\-$7\.38\\times$ speedups in time\-to\-target wall\-clock runtime over AdamW across diverse graph\-learning regimes, while maintaining competitive or superior predictive performance\.

## The Cost of Symmetry: Universality and Hardness for Permutation\-Invariant Neural Networks

**Authors:** Dashiell Bhattacharyya

**ID:** 155591\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155591

[Paper](<https://openreview.net/forum?id=4RkWTjPp9P>) | [PDF](<https://openreview.net/pdf?id=4RkWTjPp9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155591>)

Permutation\-invariant machine learning architectures, such as DeepSets, Set Transformers, Graph Neural Networks, and $k$\-GNNs, are each highly used and studied individually\. We unify them into a single complexity\-theoretic framework: noisy symmetric circuits\. Each architecture falls into our hierarchy at a level $k$, parameterized by the order of interactions it captures\. Within this framework, we tightly characterize the cost of symmetry\. At level $1$, where DeepSets operate, every symmetric function on boolean input computable by a neural network has an equivalent DeepSet, at the cost of an additive blowup nearly linear in the input size, and we exhibit an explicit function that requires this blowup\. At level $2$, where Set Transformers and GNNs operate, the same near\-linear blowup suffices for WL\-invariant functions, while non\-WL\-invariant functions are known to be uncomputable at level $2$\. These results show that, in the regimes we cover, WL is the \\textit\{only\} barrier to using a symmetric architecture; everywhere else, symmetry is \\textit\{low\-cost\}\. Experiments illustrate the near\-linear threshold predicted by the theory\.

## Chasing Label Shifters: A Change\-Aware Framework for Dynamic Graph Node Classification

**Authors:** Junghoon Kim; Seungyoon Choi; Hyunsung Kim; Chanyoung Park

**ID:** 150479\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150479

[Paper](<https://openreview.net/forum?id=hkeWDm9UGm>) | [PDF](<https://openreview.net/pdf?id=hkeWDm9UGm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150479>)

_Abstract unavailable from the accessible public sources._

## Boosting Graph Contrastive Learning via Manifold\-Guided Representation Disentanglement

**Authors:** Zhiqiang Li; Jianqing Liang; Jie Wang; Junbiao Cui; Zhiqiang Wang; Jiye Liang

**ID:** 151362\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151362

[Paper](<https://openreview.net/forum?id=b8H5INq4J6>) | [PDF](<https://openreview.net/pdf?id=b8H5INq4J6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151362>)

Graph contrastive learning constructs augmented views and aligns corresponding instances across views to learn view\-invariant representations\. However, existing methods usually enforce cross\-view consistency within a single representation space, lacking an explicit characterization of view\-specific information\. This may suppress task\-relevant complementary information, reduce embedding diversity, and induce dimensional collapse\. To this end, we propose Manifold\-Guided Representation Disentanglement \(MGRD\), a plug\-and\-play framework for boosting graph contrastive learning\. MGRD decomposes graph representations into shared and complementary subspaces\. The shared subspace captures view\-invariant semantics while preserving local graph structure through a graph\-anchored manifold prior, whereas the complementary subspace captures residual view\-specific information beyond the shared representation and is regularized by asymmetric consistency and subspace decorrelation\. By jointly exploiting shared and complementary representations, MGRD balances cross\-view invariance and representation diversity\. Experiments on node\-level and graph\-level benchmarks show that MGRD consistently improves multiple GCL backbones, while theoretical and empirical analyses demonstrate its effectiveness in mitigating dimensional collapse\.

## Combating Camouflage and Forgetting: Spatio\-Temporal Dual Denoising for Money Laundering Detection

**Authors:** Xueting Yang; Zhong Li; changjun jiang; Wenbin Zhang; Meikang Qiu

**ID:** 152926\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152926

[Paper](<https://openreview.net/forum?id=PL6k93ECq7>) | [PDF](<https://openreview.net/pdf?id=PL6k93ECq7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152926>)

Money laundering detection on financial transaction graphs is critical but challenging\. Laundering activities often conceal illicit fund flows within dense legitimate transaction neighborhoods and disperse suspicious behaviors over extended time spans\. These patterns cause weak illicit signals to be spatially diluted and temporally forgotten, limiting the effectiveness of standard graph learning methods in AML scenarios\. In this paper, we propose a spatio\-temporal dual denoising framework for money laundering detection on evolving graphs, named EvoDen\. For spatial denoising, instead of relying on passive neighborhood aggregation, we design a risk\-potential guided walk mechanism to extract denoised and suspicion\-biased transaction sequences, enabling the model to isolate anomalous fund flows from noisy local neighborhoods\. For temporal denoising, we propose a continual Transformer\-based sequence learning method driven by a reconstruction objective, which learns denoised sequence representations while enabling latent\-space replay of historical knowledge to mitigate representation drift\. We conduct experiments on three transaction datasets, and the results show that EvoDen outperforms state\-of\-the\-art baselines in accurately identifying concealed money laundering entities\.

## Graph Label Alignment: A Diagnostic Atlas for Graph Classification

**Authors:** Neelam Akula; Varun Shiralkar; Murat Kantarcioglu; Baris Coskunuzer

**ID:** 150743\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150743

[Paper](<https://openreview.net/forum?id=fiy00bWoJN>) | [PDF](<https://openreview.net/pdf?id=fiy00bWoJN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150743>)

Graph classification benchmarks vary widely in difficulty: some are solved by simple pooled baselines, while others remain challenging for GNNs and graph transformers\. We take a data\-centric view and ask whether benchmark success is driven by genuine structure\-feature reasoning or by label signal already accessible from restricted marginal views\. We introduce \*\*graph label alignment\*\*, a lightweight diagnostic that measures label accessibility through two supervised probes computed without training a graph encoder: \*structural label alignment\* \(SLA\), based on permutation\-invariant topological and spectral summaries, and \*feature label alignment\* \(FLA\), based on pooled node features with edges removed\. Across real graph classification benchmarks and multiple pooled backbones, the resulting SLA\-FLA plane strongly organizes test accuracy, with low\-alignment datasets forming a consistent regime where standard pooled pipelines struggle\. To probe what lies beyond marginal accessibility, we introduce controlled interaction\-dominated stress tests, including heterophilic ego\-graphs and synthetic \*Twins\* tasks whose structural and feature marginals are matched across classes but whose role\-feature couplings differ\. These results show that high alignment explains much of easy benchmark performance, while low alignment reveals regimes where success requires preserving structure\-feature correspondence beyond standard pooled representations\.

## Robust and Hard\-to\-Remove GNN Watermarking via Topological Invariant Perception

**Authors:** JIPENG LI; Yanning Shen

**ID:** 152517\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152517

[Paper](<https://openreview.net/forum?id=SXZrjQXtkB>) | [PDF](<https://openreview.net/pdf?id=SXZrjQXtkB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152517>)

Graph Neural Networks \(GNNs\) represent valuable intellectual property, yet existing watermarking schemes primarily rely on OOD backdoor triggers that are susceptible to model pruning, fine\-tuning, and distillation\. To tackle this challenge, we present InvGNN\-WM, which ties ownership to a model's implicit perception of a graph invariant, enabling trigger\-free, black\-box verification with negligible task impact\. By training a scalar head to predict normalized algebraic connectivity on owner\-private carrier graphs, ownership is embedded into the model's core reasoning logic rather than exogenous patterns\. We provide guarantees for imperceptibility and robustness, and prove that exact removal is NP\-complete under monotone decoders\. Empirical evaluations across diverse node and graph classification datasets show that InvGNN\-WM maintains clean task accuracy while outperforming trigger\- and explanation\-based baselines in watermark fidelity\. Our method remains robust under unstructured pruning, fine\-tuning, and post\-training quantization, with clear recovery pathways under knowledge distillation\.

## k\-th Order Deep Homomorphism Networks

**Authors:** Takanori Maehara

**ID:** 152796\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152796

[Paper](<https://openreview.net/forum?id=QHyHF56a42>) | [PDF](<https://openreview.net/pdf?id=QHyHF56a42>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152796>)

We develop a pattern\-algebraic framework for higher\-order graph neural networks by extending Deep Homomorphism Networks \(DHN\) from rooted patterns to $k$\-labelled patterns\. The framework captures GNN expressivity along two independent axes \-\-\- skeleton complexity $k$, controlling global structures, and pattern vocabulary $\\mathcal\{P\}$, capturing local structures\. We then introduce \\emph\{auxiliary gluing\} \($\\circledast$\), the pattern\-algebraic counterpart of the $k$\-FWL sift, and prove that this single additional operation lifts $k$\-label expressive power to $\(k\{\+\}1\)$ labels, yielding an algebraic proof of $\(k\{\+\}1\)$\-WL $\\equiv$ $k$\-FWL\. Neuralising these operations gives $k$\-DHN and $k$\-FDHN, which recover $k$\-GNN, PPGN, $\\delta$\-$k$\-LWL, $r$\-$\\ell$WL, spectral invariant GNNs, and node\-marking subgraph GNNs as special cases, with expressivity exactly characterised by the pattern closure of $\(k, \\mathcal\{P\}\)$\. The framework also resolves open expressivity separation problems in the $\\delta$\-$k$\-LWL and $r$\-$\\ell$WL hierarchies\.

## Spectrally Decomposed Equivariant Graph Neural Networks for Interatomic Potentials

**Authors:** Junfu Tan; Mengfan Wu; Yu Zhu; Yu Shi; Yifang Qin; Chang Liu; Bonan Zhu; Ziheng Lu

**ID:** 149161\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149161

[Paper](<https://openreview.net/forum?id=sP37ySEbfu>) | [PDF](<https://openreview.net/pdf?id=sP37ySEbfu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149161>)

Machine Learning Interatomic Potentials \(MLIPs\) based on Equivariant Graph Neural Networks \(EGNNs\) have greatly advanced the quantitative simulation of atomic systems\. However, accurately resolving fine\-grained structural geometry remains a critical challenge\. In this work, we demonstrate through spectral analysis that the reliance of modern EGNNs on a single macroscopic cutoff radius inherently acts as a spatial low\-pass filter\. This structural bottleneck induces radial spectral confusion, suppressing the network's capability for fine\-grained geometric modeling\. To overcome this limitation, we propose the Multi\-Cutoff Spectral Decomposition \(MCSD\) mechanism\. As a universal, plug\-and\-play module, MCSD explicitly decomposes atomic interactions across multiple spatial scales\. By leveraging envelope associativity to unify the neighborhood graph, this method decouples scale parameters from tensor product complexity, enabling multi\-resolution representations with minimal overhead\. Extensive evaluations across representative EGNN backbones demonstrate that MCSD not only consistently reduces prediction errors for energy, forces, and macroscopic stress tensors, but also significantly enhances the prediction fidelity of higher\-order properties \(such as lattice thermal conductivity\), all while maintaining the smoothness of the potential energy surface and the energy conservation of long\-term molecular dynamics simulations\. The code is available at the anonymous repository:  https://anonymous\.4open\.science/r/MCSD\-C854\.

## When, Where, What: Structural Guarantees for Travel Time Prediction on Temporal Graphs

**Authors:** Gabriel Buginga; Gabriel D Vilela; Jincheng Zhou; Mohit Tawarmalani; Bruno Ribeiro

**ID:** 155204\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155204

[Paper](<https://openreview.net/forum?id=7W9m004XiM>) | [PDF](<https://openreview.net/pdf?id=7W9m004XiM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155204>)

Accurate traversal \(travel\) time distribution estimation on temporal graphs benefits from satisfying six structural properties: \*\*when\*\* \(ordering, flexibility\), \*\*where\*\* \(composition with prefix equivariance\), and \*\*what\*\* \(non\-Markov, snapshot\)\. No existing temporal graph learning method jointly satisfies these properties\. We propose PATH\-HAZ, a discrete\-time hazard model that provides guarantees of all six requirements\. It composes per\-step PMFs via dynamic programming for spatially consistent predictions across shared paths, while cross\-attention over historical graph snapshots encodes confounder\-induced dependencies between non\-adjacent steps on the path\. Evaluated on simulated logistics and real\-world high\-speed rail data, PATH\-HAZ surpasses both point\-estimate \(19\.3% RMSE improvement\) and probabilistic baselines \(56% CRPS reduction\), while also allowing for detailed structural explainability of delays\.

## E²Gen: Evidential Energy\-Based Generation for Fair Federated Graph Learning

**Authors:** Jingbo Wang; Zitong Shi; Yuxin Wu; Zihan Tan; Qiqi Lin; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 154095\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154095

[Paper](<https://openreview.net/forum?id=GHWnfQjNIO>) | [PDF](<https://openreview.net/pdf?id=GHWnfQjNIO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154095>)

Federated Graph Learning is rapidly evolving as a privacy\-preserving collaborative approach for decentralized graph data\. However, severe fairness challenges are increasingly undermining federated systems by systematically degrading predictions for structurally disadvantaged minority nodes\. The inherent vulnerabilities and missing topological contexts in Federated Graph Learning are deeply entangled, making traditional federated fairness methods and simple oversampling less effective\. In our work, we propose an effective Evidential Energy\-based Generation framework for Fair Federated Graph Learning \($E^2Gen$\)\. At the client level, it explicitly identifies structurally deficient nodes using a multi\-axis metric, synthesizing targeted representations via conditional energy\-based models, and selects reliable samples through an evidential quality gate\. At the server level, the local performance disparities uploaded by each client are evaluated to construct a fairness gap assessment, making the global model absorb equitable improvements by further adjusting the aggregation weights\. Our method can handle high topological heterogeneity, does not require strict generative normalization, and is effective under both homophilic and heterophilic graph structures\. Extensive results on various settings of federated graph scenarios under severe fairness challenges validate the effectiveness of this approach\. The code is anonymously available at https://anonymous\.4open\.science/r/E\-Gen\-A2C6\.

## Beyond the Golden Teacher: Enhancing Graph Learning through LLM\-GNN Co\-teaching

**Authors:** Zhuoyi Peng; Hanlin Gu; Lixin Fan; Yi Yang

**ID:** 150344\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150344

[Paper](<https://openreview.net/forum?id=iq83tsXsBG>) | [PDF](<https://openreview.net/pdf?id=iq83tsXsBG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150344>)

Text\-attributed graphs \(TAGs\) underlie real\-world applications such as citation networks, social media, and e\-commerce\. Few\-shot graph learning on TAGs is hard: with only a handful of labels per class and the rest of the graph unannotated, neither GNNs nor LLMs can learn well on their own\. GNNs read topology and fail on cold nodes; LLMs read text and fail on text\-ambiguous nodes\. Existing LLM\-GNN methods all follow the same recipe: designate one model as the golden teacher and use its outputs \(e\.g\., features or pseudo\-labels\) to supervise the other\. We argue this golden\-teacher assumption breaks under sparse supervision: neither model is golden, and treating either as such transfers its blind spots into the student\. We therefore ask: can we avoid designating either model as the golden teacher, and still perform effective graph learning? We answer with LLM\-GNN Co\-Teaching, a bidirectional co\-teaching framework in which neither model is fixed as teacher\. The GNN and LLM exchange their most confident pseudo\-labels under an architecture\-specific small\-loss criterion, and both update every round\. Supervision is then mined from the trajectory: whenever a node moves from cross\-model contradiction at round t to cross\-model agreement at round t \+ 1, the LLM's two answers on the same input form a preference pair \(old contradicting self ≺ new peer\-endorsed self\) for DPO training\. We call this Round\-based Pseudo\-Label Preference Optimization \(RPL\-PO\)\. On six benchmarks, LLM\-GNN Co\-Teaching consistently outperforms GNN\-as\-Judge and all prior methods, with absolute 3\-shot gains of 7\.86% on Cora and 7\.73% on ogbn\-arxiv; improvements carry over to 5\-shot and to zero\-shot cross\-dataset transfer\. Error\-structure analysis further shows that abandoning the golden\-teacher assumption substantially improves the LLM's graph learning capability on challenging samples\.

## Efficient Lookahead Encoding and Abstracted Width for Learning General Policies in Classical Planning

**Authors:** Michael Aichmüller; Simon Ståhlberg; Martin Funkquist; Hector Geffner

**ID:** 150136\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150136

[Paper](<https://openreview.net/forum?id=kR1PKyczWe>) | [PDF](<https://openreview.net/pdf?id=kR1PKyczWe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150136>)

Generalized planning aims to learn policies that generalize across large collections of instances within a classical planning domain\. Recent approaches using Graph Neural Networks \(GNNs\) have shown the ability to learn nearly perfect policies for several domains\. This work improves on the recently published idea of Iterated Width \(IW\) policies\. Therein, the policy broadens its successor scope through an IW\-lookahead search that offers to "jump" over multiple transitions, simplifying the problem structure\. Yet, each transition is evaluated individually leading to unscalable compute and expressivity limitations\. Furthermore, while an IW\(1\) search is attractive due to scaling linearly with the number of atoms in a problem, it still becomes inefficient once thousands of objects are considered like in the International Planning Competition \(IPC\) 2023 benchmark\. In this work, we address both limitations\. Firstly, we introduce a vastly more efficient holistic encoding of the entire search tree\. It jointly represents IW\(1\)\-reachable states only by their relational differences to the current state, which enables Relational GNNs \(R\-GNNs\) to score all transitions in a single forward pass\.   Secondly, we define Abstracted IW\(1\) to improve scaling through relational abstraction during novelty checks\. Rather than testing fully instantiated atoms, it abstracts each atom by replacing all but one of its arguments with their types\. The original atom is then novel if any of its abstracted forms is\. This structural compression shifts the scaling of the novelty search to be linear in the number of objects, rather than atoms, still capturing meaningful subgoal structure\.  Our contributions are evaluated on the hyperscaling IPC 2023 benchmark and across a broad range of domains, including those that require features beyond the $C\_2$ logic fragment\. The results show that our policies achieve a new state\-of\-the\-art performance, significantly surpassing prior work, including classical planners like LAMA\.

## From Link Prediction to Linear Community Detection: A Finite\-Sample Guarantee for Graph Pretraining

**Authors:** Ying Chen; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Yixuan He

**ID:** 154680 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BoHltLOSMR>) | [PDF](<https://openreview.net/pdf?id=BoHltLOSMR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154680>)

Link prediction is a standard pretraining objective for graph neural networks: hide edges, train an encoder\-\-decoder to predict them, and reuse the node embeddings for downstream node tasks\. Despite its empirical success, there is little quantitative theory explaining why an edge\-level objective should produce embeddings that are linearly useful for node classification\.We study this question in the finite\-sample stochastic block model \(SBM\)\. For any bounded GNN encoder paired with a symmetric bilinear decoder, we prove a conditional reduction: small population held\-out LP excess risk implies small community\-classification error for a transductive linear classifier on the learned embeddings\.The bound decomposes into an optimization residual, an architectural approximation residual, and explicit statistical terms of order $\\widetilde\{O\}\(\\sqrt\{d/n\}\)$ in bounded dense regimes\. We further give a constructive few\-label classifier: nearest\-centroid classification under the PSD quadratic form $G = W Z^\\top Z W$, whose label error is coupled to LP quality\.The framework is architecture\-agnostic through the approximation residual, and we instantiate this residual as $O\(\\log n / n\)$ for a spectral\-positional\-encoding GIN with a bilinear decoder\. Synthetic SBM experiments validate the theorem chain from LP risk to score error to classification error, and show when the worst\-case constants become conservative\.

## PhySPRING: Structure\-Preserving Reduction of Physics\-Informed  Digital Twins via Graph Neural Networks

**Authors:** Yixiong Jing; Xingyuan Chen; Guangming Wang; Olaf Wysocki; Haibing Wu; Brian Sheil

**ID:** 150133 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRm7mfbn8W>) | [PDF](<https://openreview.net/pdf?id=kRm7mfbn8W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150133>)

Physics\-based digital twins aim to predict the dynamics of real\-world objects under interaction, enabling real\-to\-sim\-to\-real applications in robotics\. Current approaches reconstruct such twins as explicit physical models \(such as spring\-mass systems\) to predict the dynamics, but the resulting models often inherit the resolution of the visual reconstruction rather than being reduced to the physical complexity required to reproduce task\-relevant dynamics\. This mismatch introduces redundant topology, making repeated forward\-dynamics rollouts unnecessarily expensive\. To address this challenge, we present PhySPRING, an fully differentiable GNN\-based method to reduce complexity in spring\-\-mass digital twins\. PhySPRING jointly learns a hierarchy of coarsened graph topologies and their mechanical parameters from observations\. At each reduction level, PhySPRING merges nodes with similar learned dynamic responses to optimize the topology, while maintaining every reduced layer as an explicit spring\-\-mass system\.  On the PhysTwin benchmark, PhySPRING improves dense reconstruction and prediction accuracy over PhysTwin, while reduced models retain stable physical and visual fidelity with up to a 2\.30$\\times$ speed\-up\.  We further demonstrate the effectiveness of PhySPRING in a Real2Sim robot policy\-evaluation pipeline, where the reduced models are substituted zero\-shot into ACT and $\\pi\_0$ evaluations, maintaining comparable manipulation success rates across downsampling levels while improving action\-sampling effectiveness\. Together, PhySPRING  enables efficient and structure\-preserving spring\-\-mass reduction without sacrificing fidelity or robotic utility\.

## Distilling Graph Geometry: Knowledge Gap from GNNs to MLPs

**Authors:** Zhewei Chen; Hao Zhu; Jiaojiao Jiang; Ahad N\. Zehmakan

**ID:** 150714\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150714

[Paper](<https://openreview.net/forum?id=g12F7YzATu>) | [PDF](<https://openreview.net/pdf?id=g12F7YzATu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150714>)

_Abstract unavailable from the accessible public sources._

## Efficient Memory Crystallization for Graph Learning under Non\-Stationary Distribution Shifts

**Authors:** Yue Hou; Ruomei Liu; Yingke Su; Wu Junran; Ke Xu

**ID:** 149800\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149800

[Paper](<https://openreview.net/forum?id=nG6LsRFiOk>) | [PDF](<https://openreview.net/pdf?id=nG6LsRFiOk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149800>)

_Abstract unavailable from the accessible public sources._

## A Topological Encoder Decoder Framework for Temporal Graph Learning

**Authors:** Ronan Buck; Kiarash Shamsi; Tran Gia Bao Ngo; Astrit Tola; Baris Coskunuzer; Cuneyt Akcora

**ID:** 151161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZEj9pgOP7>) | [PDF](<https://openreview.net/pdf?id=cZEj9pgOP7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151161>)

Most temporal graph learning methods reduce future prediction to discriminative inference over past interactions, focusing on edges or node labels for a largely persistent set of nodes\. This view breaks down when new nodes and edges appear, since the future graph becomes a new object with changing size, composition, and structure\. We address this gap by framing temporal graph prediction as an inverse topology problem\. Instead of predicting edges directly, we first predict a multiscale topological descriptor of the future graph and then reconstruct a plausible future snapshot that realizes this descriptor under inductive constraints\. This approach makes global structure and node churn explicit prediction targets and produces forecasted graphs on which downstream tasks can be evaluated without retraining\. Across 14 temporal graph datasets, we evaluate TopoGED on node, link and graph property prediction and compare it against state\-of\-the\-art temporal graph models\. TopoGED achieves a significant improvement in node\-level forecasting accuracy over the strongest baseline, with a macro average of 0\.49 versus 0\.05\. It also outperforms baselines in 60% of graph\-structure metric evaluations and yields a substantial increase in macro\-average edge prediction metrics, from near\-zero to 0\.12\. Our results show that topology\-guided graph forecasting can predict inductive future snapshots whose structure supports multiple downstream evaluations\.

## SGNNBench: A Holistic Evaluation of Spiking Graph Neural Networks on Large\-scale Graphs

**Authors:** Huizhe Zhang; Jintang Li; Yuchang Zhu; Huazhen Zhong; Liang Chen

**ID:** 139238\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139238

[Paper](<https://openreview.net/forum?id=cvTtwanpui>) | [PDF](<https://openreview.net/pdf?id=cvTtwanpui>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139238>)

Graph Neural Networks \(GNNs\), as representative deep models designed for graph data, effectively learn graph topological information and push the performance boundaries across various graph tasks\. However, the computational and memory burden of GNNs poses significant challenges for scaling to large real\-world graphs\. Spiking Graph Neural Networks \(SGNNs\), which integrate biologically plausible learning via unique spike\-based neurons, have emerged as a promising energy\-efficient alternative\. Different layers communicate with sparse and binary spikes, which facilitates computation and storage of intermediate graph representations\. Despite the proliferation of SGNNs proposed in recent years, there is no systematic benchmark to explore the basic design principles of these brain\-inspired networks on the graph data\. To bridge this gap, we present \*\*SGNNBench\*\* to quantify progress in the field of SGNNs\. Specifically, we elaborately investigate the design space of SGNNs to facilitate the development of a general SGNN paradigm\. Regarding efficiency, we empirically compare these baselines w\.r\.t\. model size, memory usage and theoretical energy consumption to reveal previously overlooked energy bottlenecks\. Furthermore, SGNNBench establishes a unified and reliable benchmark to comprehensively evaluate 9 state\-of\-the\-art SGNNs across 20 datasets covering diverse graph settings and tasks\.

## OgBench: A Framework for Evaluating Graph Neural Networks on Omics Data

**Authors:** Louisa Cornelis; Johan Mathe; Louis Van Langendonck; Guillermo Bernárdez; Nina Miolane

**ID:** 139271\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139271

[Paper](<https://openreview.net/forum?id=aYToyBSC7D>) | [PDF](<https://openreview.net/pdf?id=aYToyBSC7D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139271>)

Graph Neural Networks \(GNNs\) have become the dominant framework for inductive graph\-level learning\. Yet most benchmarks focus on the regime $n \\gg p$, where the number of graphs $n$ greatly exceeds the number of nodes per graph $p$\. This overlooks biological domains such as omics, which operate in the opposite $n \\ll p$ regime, characterized by large graphs of genes, transcripts, or proteins across few patient samples\. This raises the question: \\textit\{how do GNNs perform in this low\-sample, high\-node omics setting?\} We introduce \\texttt\{OgBench\} \(Omics\-Graph Bench\), the first benchmarking platform for graph\-level prediction in the $n \\ll p$ regime characteristic of omics data\. We provide a standardized, end\-to\-end modular infrastructure from raw omics data to families of featured graphs with varied structural properties\. We benchmark classical GNNs, as well as GNNs designed for large graphs and omics applications, alongside MLPs and machine learning baselines to establish reference performances\. Our results show that widely used GNNs often do not outperform simple MLPs and classical baselines\. These findings challenge the prevailing assumption that graph structure inherently adds value in this domain, fostering a critical reassessment of current learning paradigms\. Ultimately, by exposing these limitations, OgBench provides the open\-source ecosystem necessary for the community to develop and validate novel architectures explicitly tailored for biological graphs\. The code is available at \\url\{https://anonymous\.4open\.science/r/ogbench\-C1A9/README\.md\}\.

## MatchEx: Model\-Level GNN Explanations with Multi\-Granular Insights

**Authors:** Sayan Saha; Sanghamitra Bandyopadhyay

**ID:** 156763\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156763

[Paper](<https://openreview.net/pdf?id=YMETLG2WvM>) | [PDF](<https://openreview.net/pdf?id=YMETLG2WvM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156763>)

Graph Neural Networks \(GNNs\) are increasingly deployed in high\-stakes domains  where interpretability is crucial\. Existing model\-level explanation methods largely rely on generative models, which often produce motifs that fail to resemble real instances,  cannot account for the diversity of discriminative motifs recognized by the classifier for a target class and lack mechanisms for translating global explanations to instance\-level insights\. We present MatchEx, a framework that discovers discriminative motifs directly from real instances by optimizing a novel matching objective\. Unlike isomorphism, which can only recover identical motifs that rarely occur in real\-world graphs, this objective extends beyond exact matches to provably recover semantically similar motifs, allowing generalizable explanations\. The matching mechanism also enables projection of class level rationales onto individual graphs for faithful instance\-level insights\. When a single motif fails to explain all instances, MatchEx adaptively partitions the instances in a class into coherent subgroups with distinct rationales\. Extensive experiments across six real and synthetic datasets show that MatchEx consistently outperforms state\-of\-the\-art baselines, delivering coherent, generalizable, and multi\-granular explanations\.

## Beyond Oversquashing: Understanding Signal Propagation in GNNs Via Observables

**Authors:** Eden Nagar; Ya\-Wei Eileen Lin; Ron Levie

**ID:** 154868\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154868

[Paper](<https://openreview.net/forum?id=AItejpYJ0K>) | [PDF](<https://openreview.net/pdf?id=AItejpYJ0K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154868>)

Graph Neural Networks \(GNNs\) perform computations on graphs by routing the  signal between graph regions using a graph shift operator or a message passing scheme\. Often, the propagation of the signal leads to a loss of information, where the signal tends to diffuse across the graph instead of being deliberately routed between regions of interest\. Two notions that depict this phenomenon are oversmoothing and oversquashing\. In this paper, we propose an alternative approach for modeling signal propagation, inspired by quantum mechanics, using the notion of observables\. Specifically, we model the place in the graph where the signal lies,  how much the signal is concentrated there, and how much of the signal is propagated towards a location of interest when applying a GNN\. Using these new concepts, we prove that standard spectral GNNs have poor signal propagation capabilities\. We then propose a new type of spectral GNN, termed Schrödinger GNN, which we show has a superior capacity to route the signal across the graph\.

## DTA\-GT: Direction\- and Topology\-Aware Graph Transformer for Neural Network Representation Learning

**Authors:** Yuxiang Zeng; Kun Xie; Yang Wang; Jigang Wen; Xiaocan Li; Guangxing Zhang; Gaogang Xie; Jiannong Cao

**ID:** 153021\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153021

[Paper](<https://openreview.net/forum?id=OZrwF0V3Sp>) | [PDF](<https://openreview.net/pdf?id=OZrwF0V3Sp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153021>)

Architecture attribute predictors reduce the cost of neural architecture search by estimating accuracy or latency from a small set of evaluated candidates\. The key difficulty is that neural architectures are operation\-labeled DAGs: edge direction defines computational flow, but existing predictors often treat direction as a local structural cue\. We propose DTA\-GT, a Direction\- and Topology\-Aware Graph Transformer based on encoder\-wide directional consistency, which preserves directed computational semantics across node initialization, global spectral encoding, pairwise interaction, and feature update\. DTA\-GT realizes this principle with direction\- and topology\-aware node initialization, Magnetic Laplacian spectral encoding, direction\-dual structural attention, and a Direction\-Sensitive MoE\-FFN\. Across accuracy and latency prediction on NAS\-Bench\-101 and NAS\-Bench\-201, DTA\-GT consistently outperforms representative sequence\-, GNN\-, Transformer\-, and hybrid predictors under limited\-budget settings\. Ablations and Magnetic spectral controls show that the improvements come from coordinated direction\-aware stages and edge\-orientation\-sensitive spectral information, while mechanistic diagnostics confirm that the modules exhibit the intended directional behavior\. These results support encoder\-wide directional consistency as an effective design principle for architecture DAG representation\.

## A Generalized Tikhonov Layer for Interpretable\-by\-design Graph Neural Networks

**Authors:** Nicolas Tremblay; Filippo Maria Bianchi; Benjamin Ricaud

**ID:** 148963 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tr3vYV6oRS>) | [PDF](<https://openreview.net/pdf?id=tr3vYV6oRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148963>)

We propose the Tikhonov layer, a graph neural network layer that is interpretable by design: once trained, its learned parameters directly reveal which node features and which aspects of the graph topology were leveraged for prediction\. In practice, the layer's propagation matrix takes the closed\-form $R = \(p\(L\)\+Q\)^\{\-1\}Q$, where $L$ is the normalized graph Laplacian, $Q = \\mathrm\{diag\}\(q\_1,\\ldots,q\_n\)$ a learnable diagonal matrix of positive node\-importance scores, and $p\(\\cdot\)$ a learnable polynomial\. For any input feature $x$, the layer output $Rx$ is the exact minimizer of a generalized graph Tikhonov problem that trades off node\-level data fidelity against a topology\-driven regularization penalty\. The learned pair $\(\\\{q\_i\\\},p\)$ constitutes a built\-in explanation: large $q\_i$ indicates that node $i$'s own features drive the prediction, while small $q\_i$ signals reliance on the local graph topology; the shape of $p$ reveals whether homophily, heterophily, or a band\-pass response is exploited\. Expressivity is preserved by routing complexity through a dedicated, arbitrarily deep $Q$\-network that produces the importance scores, while the Tikhonov layer itself remains transparent\. We prove that distinct explanations necessarily yield distinct propagation operators, preventing degenerate explanations by design\. Additionally, the Tikhonov layer provides, in a single layer, a global receptive field under mild support\-connectivity conditions, mitigating both oversmoothing and oversquashing\. Experiments on standard graph classification benchmarks confirm that the model matches \(and sometimes outperforms\) opaque baselines while producing interpretable and faithful explanations\.

## Avoiding Feature Collapse in Graph ODEs via Hysteretic Topology Evolution

**Authors:** Qinhan Hou; Jing Tang

**ID:** 150833\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150833

[Paper](<https://openreview.net/forum?id=exnh1WJ5TA>) | [PDF](<https://openreview.net/pdf?id=exnh1WJ5TA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150833>)

_Abstract unavailable from the accessible public sources._

## Neural Networks With Dense Weights Are Not Universal Approximators

**Authors:** Levi Rauchwerger; Stefanie Jegelka; Ron Levie

**ID:** 148632\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148632

[Paper](<https://openreview.net/forum?id=wIy5W0BG7A>) | [PDF](<https://openreview.net/pdf?id=wIy5W0BG7A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148632>)

We investigate the approximation capabilities of dense neural networks\. While universal approximation theorems establish that sufficiently large  architectures can approximate arbitrary continuous functions when there are no restrictions on the weights, we show that dense neural networks do not possess this universality\. Our argument is based on a model compression approach, combining the weak regularity lemma with an interpretation of feedforward networks as message passing graph neural networks\. We consider ReLU neural networks subject to natural constraints on weights and input and output dimensions, which model a notion of dense connectivity\. Within this setting, we demonstrate the existence of Lipschitz continuous functions that cannot be approximated by such networks\. This highlights intrinsic limitations of neural networks with dense layers and motivates the use of sparse connectivity as a necessary ingredient for achieving true universality\.

## Oversmoothing as Representation Degeneracy in Neural Sheaf Diffusion

**Authors:** Arif Dönmez; Ellen Fritsche; Axel Mosig; Katharina Koch

**ID:** 152216 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UhbffncO5W>) | [PDF](<https://openreview.net/pdf?id=UhbffncO5W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152216>)

Neural Sheaf Diffusion \(NSD\) generalizes diffusion\-based Graph Neural Networks by replacing scalar graph Laplacians with sheaf Laplacians whose learned restriction maps define a task\-adapted geometry\. While the diffusion limit of NSD is known to be the space of global sections, the representation\-theoretic structure of this harmonic space remains largely implicit\. In this paper, we develop a quiver\-theoretic interpretation of NSD by identifying cellular sheaves on graphs with representations of the associated incidence quiver\. Under this correspondence, learned sheaf geometries become points in a finite\-dimensional representation space\. We prove that direct\-sum decompositions of the underlying incidence\-quiver representation induce corresponding decompositions of the harmonic space reached in the diffusion limit\. This provides an algebraic interpretation of oversmoothing as representation degeneration: a conceptual framing where learned sheaves collapse toward trivial or low\-complexity summands whose global sections fail to preserve discriminative information\. Building on this viewpoint, we connect sheaf diffusion to stability, moduli, and moment\-map principles from Geometric Invariant Theory\. We introduce moment\-map\-inspired regularizers that bias learned restriction maps toward more balanced representation geometries, and we identify a structural obstruction in standard equal\-stalk architectures: when $d\_v=d\_e$, the admissibility condition for learnable stability parameters forces the trivial all\-object summand onto a stability wall\. We show that non\-uniform stalk dimensions remove this obstruction, making adaptive stability meaningful in principle\. Empirical evaluations on heterophilic benchmarks are consistent with this mechanism: breaking stalk symmetry can reduce variance or improve validation behavior on some datasets, and adaptive stability regularization becomes more effective in selected rectangular settings\. These results support the view that moment\-map regularization is a structured but dataset\-dependent geometric bias rather than a universal performance booster\. Overall, our framework interprets oversmoothing not only as a spectral pathology, but as a degeneration phenomenon in the underlying representation geometry\.

## Beyond Oversquashing: Understanding Signal Propagation in GNNs Via Observables

**Authors:** Eden Nagar; Ya\-Wei Eileen Lin; Ron Levie

**ID:** 154868\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154868

[Paper](<https://openreview.net/forum?id=AItejpYJ0K>) | [PDF](<https://openreview.net/pdf?id=AItejpYJ0K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154868>)

Graph Neural Networks \(GNNs\) perform computations on graphs by routing the  signal between graph regions using a graph shift operator or a message passing scheme\. Often, the propagation of the signal leads to a loss of information, where the signal tends to diffuse across the graph instead of being deliberately routed between regions of interest\. Two notions that depict this phenomenon are oversmoothing and oversquashing\. In this paper, we propose an alternative approach for modeling signal propagation, inspired by quantum mechanics, using the notion of observables\. Specifically, we model the place in the graph where the signal lies,  how much the signal is concentrated there, and how much of the signal is propagated towards a location of interest when applying a GNN\. Using these new concepts, we prove that standard spectral GNNs have poor signal propagation capabilities\. We then propose a new type of spectral GNN, termed Schrödinger GNN, which we show has a superior capacity to route the signal across the graph\.

## DTA\-GT: Direction\- and Topology\-Aware Graph Transformer for Neural Network Representation Learning

**Authors:** Yuxiang Zeng; Kun Xie; Yang Wang; Jigang Wen; Xiaocan Li; Guangxing Zhang; Gaogang Xie; Jiannong Cao

**ID:** 153021\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153021

[Paper](<https://openreview.net/forum?id=OZrwF0V3Sp>) | [PDF](<https://openreview.net/pdf?id=OZrwF0V3Sp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153021>)

Architecture attribute predictors reduce the cost of neural architecture search by estimating accuracy or latency from a small set of evaluated candidates\. The key difficulty is that neural architectures are operation\-labeled DAGs: edge direction defines computational flow, but existing predictors often treat direction as a local structural cue\. We propose DTA\-GT, a Direction\- and Topology\-Aware Graph Transformer based on encoder\-wide directional consistency, which preserves directed computational semantics across node initialization, global spectral encoding, pairwise interaction, and feature update\. DTA\-GT realizes this principle with direction\- and topology\-aware node initialization, Magnetic Laplacian spectral encoding, direction\-dual structural attention, and a Direction\-Sensitive MoE\-FFN\. Across accuracy and latency prediction on NAS\-Bench\-101 and NAS\-Bench\-201, DTA\-GT consistently outperforms representative sequence\-, GNN\-, Transformer\-, and hybrid predictors under limited\-budget settings\. Ablations and Magnetic spectral controls show that the improvements come from coordinated direction\-aware stages and edge\-orientation\-sensitive spectral information, while mechanistic diagnostics confirm that the modules exhibit the intended directional behavior\. These results support encoder\-wide directional consistency as an effective design principle for architecture DAG representation\.

## A Generalized Tikhonov Layer for Interpretable\-by\-design Graph Neural Networks

**Authors:** Nicolas Tremblay; Filippo Maria Bianchi; Benjamin Ricaud

**ID:** 148963\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148963

[Paper](<https://openreview.net/forum?id=tr3vYV6oRS>) | [PDF](<https://openreview.net/pdf?id=tr3vYV6oRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148963>)

We propose the Tikhonov layer, a graph neural network layer that is interpretable by design: once trained, its learned parameters directly reveal which node features and which aspects of the graph topology were leveraged for prediction\. In practice, the layer's propagation matrix takes the closed\-form $R = \(p\(L\)\+Q\)^\{\-1\}Q$, where $L$ is the normalized graph Laplacian, $Q = \\mathrm\{diag\}\(q\_1,\\ldots,q\_n\)$ a learnable diagonal matrix of positive node\-importance scores, and $p\(\\cdot\)$ a learnable polynomial\. For any input feature $x$, the layer output $Rx$ is the exact minimizer of a generalized graph Tikhonov problem that trades off node\-level data fidelity against a topology\-driven regularization penalty\. The learned pair $\(\\\{q\_i\\\},p\)$ constitutes a built\-in explanation: large $q\_i$ indicates that node $i$'s own features drive the prediction, while small $q\_i$ signals reliance on the local graph topology; the shape of $p$ reveals whether homophily, heterophily, or a band\-pass response is exploited\. Expressivity is preserved by routing complexity through a dedicated, arbitrarily deep $Q$\-network that produces the importance scores, while the Tikhonov layer itself remains transparent\. We prove that distinct explanations necessarily yield distinct propagation operators, preventing degenerate explanations by design\. Additionally, the Tikhonov layer provides, in a single layer, a global receptive field under mild support\-connectivity conditions, mitigating both oversmoothing and oversquashing\. Experiments on standard graph classification benchmarks confirm that the model matches \(and sometimes outperforms\) opaque baselines while producing interpretable and faithful explanations\.

## Weisfeiler\-Leman Is Incomplete on Simple Spectrum Graphs, so Canonicalize Them

**Authors:** Snir Hordan; Nadav Dym; Tim Seppelt

**ID:** 150655\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150655

[Paper](<https://openreview.net/forum?id=gQCHWXz2Fu>) | [PDF](<https://openreview.net/pdf?id=gQCHWXz2Fu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150655>)

_Abstract unavailable from the accessible public sources._

## Spectral Graph Sparsification Preserves Representation Geometry in Graph Neural Networks

**Authors:** Sanjukta Krishnagopal

**ID:** 149066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t7wLUvSJVu>) | [PDF](<https://openreview.net/pdf?id=t7wLUvSJVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149066>)

Spectral graph sparsification is a classical tool for reducing graph complexity while preserving Laplacian quadratic forms\. In graph neural networks \(GNNs\), sparsification is often used to accelerate computation while maintaining predictive performance\. In this work, we study a complementary representation\-level question: does sparsification preserve the geometry of learned embeddings?  For polynomial\-filter GNNs, we prove that any $\\epsilon$\-spectral sparsifier induces $O\(\\epsilon\)$ perturbations in polynomial graph filters, multilayer hidden representations, and their Gram matrices\. These guarantees imply stability of squared pairwise distances, class means, and covariance structure in embedding space\. We further establish finite\-time training stability: under smoothness and boundedness assumptions, gradient descent on dense and sparsified graphs produces weight trajectories whose separation grows at most proportionally to the sparsification distortion\.  Empirically, effective\-resistance sparsification validates the predicted perturbation chain on synthetic graphs and preserves hidden representation geometry on real datasets\. In our experiments, the gram matrix and training dynamics show low divergence even under substantial sparsification, consistent with the predicted stability under spectral sparsification\. Hidden Gram preservation strongly predicts neighborhood preservation and class\-centroid stability across FashionMNIST, Cora, and Paul15\. Together, these results show that spectral sparsification preserves not only graph operators, but also the representation geometry that supports downstream use of GNN embeddings for interpretability\.

