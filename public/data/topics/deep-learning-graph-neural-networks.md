# Deep Learning / Graph Neural Networks

深度学习 / 图神经网络

123 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Contractive Monoids: The Algebra Behind Stable Residual Propagation in Deep Graph Neural Networks

**Authors:** Rohit Sinha; Saroj Kumar

**ID:** 150369 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iaW7jdgiUn>) | [PDF](<https://openreview.net/pdf?id=iaW7jdgiUn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150369>)

Graph neural networks exhibit a fragile relationship with depth, as adding layers leads to rapid homogenization of node representations \(over\-smoothing\)\. Recent manifold\-constrained approaches using doubly stochastic matrices address this issue, but the fundamental principle underlying their success remains unclear\. This study investigates whether doubly stochasticity is essential or exemplifies a broader geometric principle for stable residual propagation in deep GNNs\.We formalize three axioms to define residual mixing matrices as contractive monoids\. We instantiate this framework through three manifolds \(Orthogonal Group, Diagonal Contraction Monoid, Spectral Norm Ball\) and evaluate them across nine node\-classification benchmarks using four GNN backbones\. Results demonstrate that contractive\-monoid constraints maintain stable accuracy and low representational collapse at extreme depths, while standard GNNs degrade sharply beyond moderate depth\. This work establishes that stable residual propagation arises from contractive, compositional structure anchored at identity, revealing a significantly larger design space for deep GNN architectures while maintaining theoretical guarantees\.

## Multilateral Resistance\-Guided Graph Message Passing for Trade Flow Prediction

**Authors:** Quansi Li; Haijing Yu

**ID:** 154787 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B0I2V823xJ>) | [PDF](<https://openreview.net/pdf?id=B0I2V823xJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154787>)

Trade flows are a central variable for studying international trade networks\. Traditional economic models, grounded in economic theory and mathematical derivation, provide structured representations of bilateral trade flows\. However, these representations often rely on fixed functional forms, have limited ability to incorporate high\-dimensional features, do not directly capture trade inertia, and scale poorly to large and dynamic trade networks\. In recent years, graph neural networks have been increasingly used to address some of these limitations because they are naturally compatible with networked trade data and offer strong scalability\. However, the feature aggregation process in existing graph neural models remains weakly interpretable from an economic perspective\. To address this limitation, we propose MRTGNN, a graph neural network model built on a theory\-guided MRTGNN layer derived from the fixed\-point equations of multilateral resistance in structural gravity\. Theoretically, we prove that an $L$\-layer MRTGNN can approximate $L$ iterations of a multilateral\-resistance fixed\-point operator on a compact domain, with an explicit bound on the iteration error\. Empirically, we extensively evaluate MRTGNN on panel data covering 176 countries from 2002 to 2019 against various representative baselines\. The full model achieves the best RMSE, $R^2$, and Spearman rank correlation across the reported baselines\. Under counterfactual tariff shocks involving China, it produces a Network Spillover Ratio one order of magnitude higher than a generic graph\-attention baseline\. These results show that theory\-guided message passing improves trade flow prediction while enabling more interpretable counterfactual reasoning in global trade networks\.

## Invariant Hyperbolic Unfolding: Radial Canonicalization for Label\-Free Cross\-Graph Link Prediction

**Authors:** Taehee Lee

**ID:** 152389 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TTSdpjkgcF>) | [PDF](<https://openreview.net/pdf?id=TTSdpjkgcF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152389>)

We study label\-free, topology\-conditioned zero\-shot cross\-graph link prediction: at test time the observed target topology is the input graph, but the model receives no target labels, no positive/negative context links, no target fine\-tuning, no text attributes, and no post\-hoc alignment\. This setting is zero\-shot with respect to target supervision and adaptation, but it is not topology\-free inference\.  We identify a critical geometric barrier for hyperbolic transfer: radial non\-identifiability\. Hyperbolic graph learning is motivated by the intuition that radius encodes hierarchy or popularity and angle encodes similarity, yet standard HGNN objectives do not make radii semantically calibrated across disjoint graphs\. The same structural role can therefore occupy incompatible radial scales on different target graphs\.  We propose Invariant Hyperbolic Unfolding \(IHU\), which restores the intended radial hierarchy channel through selective invariance: radii are fixed by graph\-internal structural percentiles while angular representations remain learnable\. Its core module, Invariant Structural Anchoring \(ISA\), rank\-canonicalizes structural scores such as coreness into shared hyperbolic radii, producing a comparable radial skeleton without target supervision\.  In a controlled comparison among matched frozen learned encoders, IHU improves average HR@50 by 2\.7 percentage points over the strongest learned hyperbolic baseline and by 7\.6 percentage points over the mean of the learned hyperbolic baseline family\. The gain amplifies under missing\-edge and low\-degree regimes, while hierarchy\-gap analysis reveals a boundary condition for fixed radial shells: 50% edge sparsification causes 52\.5% less degradation, and low\-degree nodes show a 4\.2× larger advantage\. We further position IHU against recent universal link prediction and graph foundation methods through an access\-aware taxonomy, showing that the closest recent LP methods use labeled target context links, whereas IHU isolates the geometric effect of fixed versus learned radii in frozen structural hyperbolic encoders\.

## FedCAG: Federated Causality\-Aware Graph Learning for Multi\-Cloud Workload Forecasting

**Authors:** Yongcan Luo; Zhengjie Yang; Jiahao Zheng; Hao Wang; Wei Bao; Dapeng Wu

**ID:** 153757 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IvCj0BCLBL>) | [PDF](<https://openreview.net/pdf?id=IvCj0BCLBL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153757>)

Recent large\-scale outages at major cloud providers such as AWS and GCP have exposed the fragility of relying on a single cloud\. To improve resilience, fault tolerance, and business continuity, many enterprises are moving their services to multi\-cloud environments\.  However, multi\-cloud deployment also makes workload forecasting substantially harder\. Existing multi\-cloud workload forecasting methods are typically designed for either centralized or isolated environments, leading to risks of private data leakage or limited generalization\. To address these challenges, we propose \\textbf\{FedCAG\}, a \\textbf\{Fed\}erated \\textbf\{C\}ausality\-\\textbf\{A\}ware \\textbf\{G\}raph learning paradigm for multi\-cloud workload forecasting\.  Instead of treating federated learning as parameter averaging over local predictors, FedCAG jointly federates predictive models and graph\-structured dependency priors\. Each client constructs causality\-aware, spatial, and temporal graphs from its private telemetry to model directed inter\-metric influence, metric\-level interactions, and intra\-window temporal dynamics\. To address strong cross\-cloud heterogeneity, FedCAG further combines causality\-aware representation fusion, adaptive graph refinement, and client\-specific personalization, enabling the global model to benefit from shared workload structures while preserving local specificity\. Experiments on real\-world datasets show that FedCAG consistently outperforms mainstream federated baselines and even several centralized methods trained on the full dataset, delivering stable and accurate forecasting across heterogeneous and privacy\-constrained deployments\. The source code is available at: \\url\{https://anonymous\.4open\.science/r/FedCAG\-FB9C\}\.

## Graph Mamba Operator: A Latent Simulator for Interacting Particle Systems

**Authors:** Karn Tiwari; Niladri Dutta; Prathosh AP; N M Anoop Krishnan

**ID:** 153220 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MtkmHOVENg>) | [PDF](<https://openreview.net/pdf?id=MtkmHOVENg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153220>)

Modeling interacting dynamical systems requires capturing spatial interactions alongside long\-range temporal dependencies\. Graph neural networks \(GNNs\) provide a natural representation but typically rely on autoregressive rollouts and treat spatial and temporal dynamics separately, leading to error accumulation over long horizons\. Existing approaches also focus on local interactions and short temporal contexts, limiting their ability to capture multi\-hop dependencies and global structure\. We introduce the Graph Mamba Operator \(GraMO\), a latent\-space simulator that integrates state\-space models with graph\-based interaction learning\. In contrast to prior work that sequences nodes or applies spatial and temporal updates in separate stages, GraMO couples graph\-based interactions and temporal state updates within a single recurrence\. The update is linear in the latent state, with input\-dependent coefficients that adapt across regimes\. We evaluate GraMO on N\-body systems, motion capture, and robotics datasets, achieving the lowest error across benchmarks and the largest gains in long\-horizon prediction\.

## REGATE: Confidence\-Calibrated Integration of Temporally\-Aligned Exogenous Texts for Dynamic Graphs

**Authors:** Liangzu Liu; Mengzhe Ruan; Yinjun Wu; Yang Liu; Guanjun Wang

**ID:** 150490 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hi0wCR0EYw>) | [PDF](<https://openreview.net/pdf?id=hi0wCR0EYw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150490>)

Risk assessment and anomaly detection in financial interaction networks often fail under regime shifts triggered by external events such as policy changes or enforcement actions—models may retain high AUC yet suffer sharp drops in average precision and calibration\. Although news and regulatory filings contain actionable signals, naïvely injecting raw text or off\-the\-shelf LLM embeddings into temporal GNNs can introduce temporal leakage, misalignment, and unstable out\-of\-time ranking\. We propose REGATE, a time\-causal framework that integrates exogenous documents into dynamic graphs through three coupled components: \(1\) a schema\-guided extractor that converts unstructured documents into auditable, time\- and entity\-aligned policy tokens with explicit confidence scores; \(2\) a bounded gating mechanism that fuses these tokens into temporal GNN states as a residual update, downweighting uncertain or stale evidence with a stability guarantee under direction consistency; and \(3\) a closed\-loop retrieval adaptation module that distills the model's own routing attention into a lightweight document scorer without manual relevance labels\. On established dynamic\-graph benchmarks with documented regime shifts and six backbone architectures \(TGN, TGAT, DyGFormer, GraphMixer, CTAN, GeneralDyG\), REGATE yields up to \+0\.16 AP and up to 90% ECE reduction in post\-shift windows on Elliptic; cross\-domain pilots on credit and equity networks confirm consistent gains\. Ablations show improvements stem from time\-aligned semantic content rather than timestamps alone, and we report quality–cost trade\-offs across open\-source and commercial extractors\.

## Graph Learning from Label Proportions using Topology\-Aware Pseudo Labeling and Aggregation

**Authors:** Yufei Jin; Jiajun Shen; Yi He; Xingquan Zhu

**ID:** 156071 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0f6mA6p98z>) | [PDF](<https://openreview.net/pdf?id=0f6mA6p98z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156071>)

Learning from Label Proportion \(LLP\) is a weakly supervised learning paradigm in which only aggregated label proportions over collections of instances \(i\.e\., bags\) are provided, rather than individual labels\. This allows classification while preserving privacy or reducing annotation costs\. Existing LLP methods, however, have been largely restricted to i\.i\.d\. tabular or image data\. To the best of our knowledge, no solution currently addresses graphs, where instances are inherently interdependent through network structure\. In this paper, we generalize LLP to the graph domain and study the problem of node classification with label proportions, where only distributional supervision is available for node bags, and the goal is to infer labels for all nodes in the graph\. We argue that the lack of node\-level supervision is the main challenge for LLP on graphs, and that existing methods based on i\.i\.d\. assumptions fail to exploit topological correlations\. To overcome this, we propose GLLP\~\(Graph Learning from Label Proportions\), a framework that leverages Optimal Transport \(OT\) with a homophily\-aware cost to generate soft pseudo\-labels for individual nodes\. These pseudo\-labels provide stronger supervision signals for training Graph Neural Networks\. We further establish theoretical guarantees showing the alignment of our cost function with the node classification objective\. Extensive experiments on six homophilic graph benchmarks and the Covid real\-world dataset demonstrate that GLLP consistently outperforms existing LLP baselines and variants\.

## HoTS: Homophily\-Aware Temperature Scaling for Graph Neural Network Calibration

**Authors:** Inwoo Tae; Yoontae Hwang; Yongjae Lee

**ID:** 148576 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=woxrGUwgJ3>) | [PDF](<https://openreview.net/pdf?id=woxrGUwgJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148576>)

For graph node classification, calibrated class probabilities are need when confidence scores, usually the maximum predicted class probability, are used to rank prediction, defer uncertain nodes to human review or control risk\. Existing post\-hoc calibrators either apply one global temperature or use graph\-awared modules without a derived strctural form\. We study node\-level calibration for graph node\-classification problem under structural heterogeneity\. Our first results show that a logit\-only temperature rule is insufficient when nodes with identical logits but different local homophily require different optimal temperatures\. We then analyze a population\-concentration contextual stochastic block model with Gaussian features and a one\-layer linear GCN\. Under equidistant class means, the Bayes posterior over class\-template scores is a temperature\-scaled softmax whose inverse temperature is governed by homophily\-dependent signal strength\. In the positive\-signal homophilic regime, the resulting temperature decreases approximately with normalized local homophily\. This law motivates Homophily\-aware Temperature Scaling \(HoTS\), a simple post\-hoc calibrator that assigns each node a positive scalar temperature from entropy\-based logit concentration and estimated local homophily\. HoTS has three parameters, preserving class, and learn the strength of the structural correction from calibraion data\. Across 18 node\-classification benchmarks, two GNN backbones, and eight calibration baselines, HoTS achieves the best mean Expected Calibration Error \(ECE\) of $4\.66\\%$, the best average rank, and the strongest confidence ranking in selective classification\.

## Not Just Oversmoothing: Detecting Echo Chamber Effect in Graph Neural Networks

**Authors:** Asela Hevapathige; Ahad N\. Zehmakan; Asiri Wijesinghe; Saman Halgamuge

**ID:** 153822 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IT1grxElZr>) | [PDF](<https://openreview.net/pdf?id=IT1grxElZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153822>)

Oversmoothing is a well\-known failure mode of Graph Neural Networks \(GNNs\)\. However, most existing diagnostics rely on global aggregation measures that fail to capture the heterogeneous dynamics of message passing\. Real\-world graphs exhibit pronounced community structure, and message passing operates on two timescales, where representations collapse rapidly within and slowly across communities\. This creates a critical gap where intra\-community representations can already be indistinguishable while inter\-community separation persists, which is a failure mode we refer to as Echo Chamber Effect\. To quantify this, we propose to use the Echo Chamber Index \(ECI\), which stratifies pairwise distances by community membership and formally establishes that global energy diminishes while inter\-community separation remains less impacted\. The estimated ECI for a graph reveals a surprising failure of common oversmoothing remedies, where rather than escaping the echo chamber, these architectures become permanently trapped in it\. The consequences depend on label structure, as when communities align with classes, the echo chamber sharpens node classification, and when they do not, the same collapse makes it provably harder\. To address this, we propose Community\-Aware Split Propagation \(CASP\), a lightweight model\-agnostic plugin that decouples intra and inter\-community aggregation and learns their balance from label structure\. CASP consistently improves over diverse backbone GNNs across multiple benchmarks spanning homophilic and heterophilic settings\. Our source code is available at: https://anonymous\.4open\.science/r/CASP\-3059/\.

## SSDGExplainer: Structure\-Semantic Dual\-Guided Explainer for Graph Neural Networks

**Authors:** Zhiqiang Wang; Chenchao Zhang; Jianqing Liang; Xingwang Zhao; Jiye Liang; Chuangyin Dang

**ID:** 152672 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RGQy0JzzUL>) | [PDF](<https://openreview.net/pdf?id=RGQy0JzzUL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152672>)

Post\-hoc Graph Neural Networks \(GNN\) explainers typically extract a compact subgraph to preserve the model’s decision rationale\. However, this extraction breaks topological integrity and induces a distribution shift, making predictions on subgraphs unreliable and consequently misleading explainer optimization under OOD settings\. Existing attempts to build in\-distribution proxy graphs often assume independence between explanation and background subgraphs and rely on hard splicing, which causes semantic mismatch and boundary discontinuities that degrade explanation reliability\. We propose SSDGExplainer, a Structure–Semantic Dual\-Guided explainer that formulates proxy\-graph generation as conditional modeling under semantic consistency constraints to achieve deep semantic alignment between the explanation subgraph and the generated background, introduces a topology boundary optimization network to smooth structural fractures at the explanation–background interface, and enforces contrastive semantic constraints to prevent semantic drift\. Extensive experiments on synthetic and real\-world benchmarks demonstrate consistent improvements over state\-of\-the\-art methods in both explanation quality and fidelity\.

## Graph Cascades: Contagion\-Based Mesoscopic Rewiring for Structure\-Aware Graph Machine Learning

**Authors:** Meher Chaitanya Pindiprolu; My Le; Luana Ruiz

**ID:** 155097 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8R0BMd5zmJ>) | [PDF](<https://openreview.net/pdf?id=8R0BMd5zmJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155097>)

We introduce \*\*Graph Cascades\*\*, a mesoscopic rewiring strategy for Graph Neural Networks \(GNNs\) and Graph Transformers \(GTs\) that captures intermediate\-scale graph structure beyond purely local edges or fully global attention\. Using contagion\-based diffusion processes, Graph Cascades constructs, in $\\mathcal\{O\}\(\|V\|\+\|E\|\)$ time, an auxiliary graph where node pairs supported by repeated multi\-hop reinforcement are promoted to direct neighbors\. We theoretically characterize when reinforcement\-based rewiring helps: sufficient conditions under which a reinforcement\-based edge\-selection rule has higher label agreement than direct adjacency, an SBM witness in which two\-hop reinforcement is perfectly homophilic, and formalizing mesoscopic connectivity via graph effective resistance\. Empirically, across node\-classification benchmarks, Graph Cascades improves multiple GNN and sparse\-GT backbones, with the most reliable gains observed on heterophilic and moderate\- to high\-degree homophilic graphs\. The theoretical conditions also identify regimes where mesoscopic rewiring is unlikely to be beneficial \-\- low\-degree regular graphs and graphs with structural bottlenecks \-\- and these predictions match the observed failures\. We additionally observe tight correlations between performance and structural properties in the rewired graphs\.

## Get a GRIP, this will be a long TRIP: A Quantifiable Long\-Range Framework for Verifying Over\-squashing

**Authors:** Ferran Hernandez Caralt; Simon Heilig; Adrián Bazaga; Asja Fischer; Moshe Eliasof; Pietro Lió

**ID:** 139012 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qTEOyobP0r>) | [PDF](<https://openreview.net/pdf?id=qTEOyobP0r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139012>)

Empirical claims about the connection between over\-squashing and long\-range interactions in GNNs, can only be trusted if the benchmarks used to validate them genuinely require long\-range interactions\. The de\-facto standard, the Long Range Graph Benchmark, has been repeatedly shown to be saturated by tuned short\-range models, with existing synthetic alternatives being tied to specific topologies\. As such, there is a lack of principled certificate of long\-rangedness on \*arbitrary\* graphs\. This state reflects the absence of a precise characterization of long\-ranged benchmarks\. We address this fundamental gap by introducing four verifiable \*axioms\*: \*Predictability\*, \*Tightness\*, \*Strictly $k$\-Range\*, and \*Topology\-Invariance\*, that any task claiming to test $k$\-hop interactions must satisfy\. We formally prove that violating any one of them admits failure modes that undermine conclusions drawn from the task\. Based on these axioms, we introduce TRIP \(\*Truly Ranged Interactions Problem\*\) and its generalisation GRIP \(\*Generally Ranged Interactions Problem\*\), constructive procedures that turn \*any\* graph into a provably long\-ranged task by drawing features from \*stable\* distributions\. Moreover, by construction, GRIP admits a closed\-form, per\-range Maximum\-Likelihood oracle that yields the first \*a priori per\-range\* lower bound on test error available on any benchmark\. Using our framework, we: \(i\) audit 4 common long\-range benchmarks and identify their failures modes with respect to our axioms; \(ii\) on TRIP\-instantiated topologies, we find a popular notion of curvature is uncorrelated with GNN performance, supporting topological\-vs\-computational bottleneck distinction; and \(iii\) we show that a novel benchmark's over\-squashing measures factors beyond pure long\-rangedness\. Code to use the framework and reproduce experiments is released anonymously https://github\.com/ferranhernandezc/graph\-grip\.

## Beyond Node Sequences: Relational Diffusion for Unified Graph Learning

**Authors:** Xianan Wang; Wenji Hu; Chunyu Wei; Yueguo Chen

**ID:** 148255 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zFlCybOmEO>) | [PDF](<https://openreview.net/pdf?id=zFlCybOmEO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148255>)

Graph foundation models have emerged as a promising paradigm for generalizing across diverse structural tasks\. Current approaches serialize graphs into node token sequences and apply autoregressive or masked prediction, yet this node sequential modeling disrupts the relation\-centric nature of graphs and violates permutation equivariance\. We propose relational diffusion , a framework that reconceptualizes graph modeling through edge co\-occurrence modeling\. By treating edges as fundamental modeling units and learning their joint distribution via discrete diffusion processes, our approach naturally respects the relational semantics of graphs while maintaining permutation equivariance\. We introduce topological edge tokenization to enrich edge representations with multi\-hop structural context, and relational prompt completion to unify node classification, link prediction, and graph classification as sequence completion problems over edge representations\. Through extensive experiments, we demonstrate that relational diffusion achieves strong performance while providing a principled foundation aligned with the relational nature of graphs\.

## Malicious Node Injection: A Transferable Adversarial Attack on GNN Fairness

**Authors:** Haotian Zhang; He Huang; Shuang Cui; Yu\-e Sun

**ID:** 149991 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=le01Y0W1ec>) | [PDF](<https://openreview.net/pdf?id=le01Y0W1ec>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149991>)

Graph Neural Networks \(GNNs\) have shown remarkable effectiveness across diverse graph\-related tasks\. However, existing studies reveal that their fairness is highly vulnerable to adversarial manipulation, which can substantially exacerbate inherent biases toward sensitive attributes, such as gender in demographic prediction\. Although prior work has shown that fairness poisoning attacks can be launched via malicious node injection, whether this strategy can support the more challenging fairness evasion attacks remains open\. Moreover, existing methods have not directly addressed fairness attacks on multi\-class datasets with multi\-valued sensitive attributes\. To bridge this gap, we propose a universal fairness attack framework \(UFA\) that injects malicious nodes to perform both poisoning and evasion attacks against GNNs while minimally affecting model utility\. UFA first identifies nodes most susceptible to being pushed across the decision boundary\. It then targets core mechanisms shared by diverse GNN architectures to manipulate node representations, thereby maximizing outcome disparities across sensitive groups\. Comprehensive experiments on five real\-world datasets demonstrate the effectiveness of UFA\. By injecting fewer than 0\.2\\% malicious nodes, UFA severely degrades the fairness of both mainstream and fairness\-aware GNNs, proving effective in both poisoning and evasion settings\. Our findings expose the fragility of fairness in GNNs and underscore the urgent need for robust fairness\-aware models\.

## Adaptive Gated Simplicial Propagation for Node Classification in Multimodal Graphs

**Authors:** Linlin Ye; FangFang Li; Huihui Zhang; Lincheng Jiang; Wei Wu

**ID:** 150627 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ggQrbEi624>) | [PDF](<https://openreview.net/pdf?id=ggQrbEi624>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150627>)

Node classification in multimodal graphs plays an important role in many real\-world applications, where nodes are described by multiple modalities such as text and images, and the graph structure captures relations among entities\. However, most existing Graph Neural Networks \(GNNs\) still focus on pairwise connections, overlooking higher\-order relational patterns\. Recent studies have explored simplicial complexes to capture higher\-order interactions and integrated them into GNN frameworks\. Motivated by this line of work, we propose Adaptive Gated Simplicial Propagation \(AGSP\), an end\-to\-end framework for node classification in multimodal graphs\. Specifically, AGSP first introduces a simplicial propagation layer to capture higher\-order relations beyond pairwise connections; then it applies an adaptive gating mechanism to balance multi\-order topological relations, enhancing the discriminative ability of node classification\. Extensive experiments validate that AGSP generally outperforms the state\-of\-the\-art baselines, highlighting the effectiveness of combining multimodal information with higher\-order graph topology through adaptive gated fusion\.

## GADMVP: Adaptive Few\-Shot Graph\-Level Anomaly Detection with Multi\-View Structured Prompting

**Authors:** Xiaolin Han; Xiurui Hu; Lingyun Song; Yudai Pan; Xuequn Shang

**ID:** 152843 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PxiWypLBRI>) | [PDF](<https://openreview.net/pdf?id=PxiWypLBRI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152843>)

Graph\-level anomaly detection plays a critical role in a wide range of applications, such as fraud detection in financial networks and malicious program detection, yet it remains challenging in real\-world scenarios where labeled anomalous graphs are extremely scarce and graph structures are highly diverse\. Existing few\-shot methods often suffer from severe performance degradation due to the effects of class imbalance and structural imbalance, and they struggle to generalize to structurally deviant or rare anomalies\. In this paper, we propose an adaptive few\-shot graph\-level anomaly detection model with multi\-view structure\-aware prompting \(GADMVP\)\. To mitigate structural imbalance, we construct a graph\-of\-graphs representation that facilitates cross\-graph message passing, capturing both intra\-graph semantics and inter\-graph dependencies\. Building upon these priors, we introduce a structure\-aware graph prompting mechanism that extracts and adaptively refines anomaly\-relevant prompts from a small set of labeled graphs\. Extensive experiments on multiple benchmark datasets demonstrate that the proposed method consistently outperforms state\-of\-the\-art few\-shot graph anomaly detection baselines, while exhibiting strong robustness under extremely limited labeled data\. The code and implementation details are available at https://anonymous\.4open\.science/r/GLAD\-3456543/\.

## A New Perspective on Target\-Conditioned Structural Dynamics for Link Prediction in Dynamic Graphs

**Authors:** YUANYUAN XU; Yin Chen; Yingxuan Li; Wenjie Zhang; Xuemin Lin; Ying Zhang

**ID:** 151703 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfsyoH7YFs>) | [PDF](<https://openreview.net/pdf?id=YfsyoH7YFs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151703>)

Dynamic link prediction requires determining whether the historical interactions of a source node provide reliable structural support for a specific target\. Existing target\-conditioned methods capture such support through structural heuristics such as repeated interactions or co\-neighbor overlap, but typically instantiate them as identity\-based encodings and inject them as passive token\-level features before aggregation\. This design is brittle when exact structural encodings are sparse, and the resulting structural signals can be diluted after being concatenated with high\-dimensional time and edge features, while their dynamics remain unmodeled\. In this paper, we revisit target\-conditioned dynamic link prediction from a structural dynamics modeling perspective and propose TCSD, which formulates structural signals as target\-conditioned states, evolves them over recent histories, and uses them to guide aggregation\. Concretely, we construct hybrid structural states from exact indicators that preserve time\-aware repeat and co\-neighbor matches, and relaxed indicators that recover latent support beyond exact identity matching\. TCSD further models the dynamics of these states to capture temporal consistency within indicators and complementarity across indicators\. Instead of treating structural states as passive features, TCSD uses the learned dynamics as aggregation controllers to amplify target\-relevant interactions and suppress irrelevant ones\. Experiments on sixteen dynamic graphs show that TCSD outperforms ten baselines, achieving up to a 14\.27% relative improvement in MRR\.

## Fast and Consistent Structure Learning in Graphical Models via Approximate Cross\-Validation

**Authors:** Zhao Lyu; Mladen Kolar; Bryon Aragam

**ID:** 154587 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CTPhY8k8EQ>) | [PDF](<https://openreview.net/pdf?id=CTPhY8k8EQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154587>)

Structure learning for sparse graphical models in high dimensions requires both computational scalability and selection consistency\. Classical criteria such as \(Extended\) Bayesian Information Criterion can provide consistency, but rely on model\-specific likelihood and complexity calibration\. In comparison, cross\-validation avoids such analytic calibration and is therefore attractive for graph learning\. However, cross\-validation is computationally infeasible and theoretically inconsistent in structure learning\. In this work, we resolve the tension by developing a scalable graph\-recovery procedure built on approximate cross\-validation\. We demonstrate its effectiveness in learning large graphical models both theoretically and empirically, and establish selection consistency under mild signal strength assumptions\.

## Spectrally Decomposed Equivariant Graph Neural Networks for Interatomic Potentials

**Authors:** Junfu Tan; Mengfan Wu; Yu Zhu; Yu Shi; Yifang Qin; Chang Liu; Bonan Zhu; Ziheng Lu

**ID:** 149161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sP37ySEbfu>) | [PDF](<https://openreview.net/pdf?id=sP37ySEbfu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149161>)

Machine Learning Interatomic Potentials \(MLIPs\) based on Equivariant Graph Neural Networks \(EGNNs\) have greatly advanced the quantitative simulation of atomic systems\. However, accurately resolving fine\-grained structural geometry remains a critical challenge\. In this work, we demonstrate through spectral analysis that the reliance of modern EGNNs on a single macroscopic cutoff radius inherently acts as a spatial low\-pass filter\. This structural bottleneck induces radial spectral confusion, suppressing the network's capability for fine\-grained geometric modeling\. To overcome this limitation, we propose the Multi\-Cutoff Spectral Decomposition \(MCSD\) mechanism\. As a universal, plug\-and\-play module, MCSD explicitly decomposes atomic interactions across multiple spatial scales\. By leveraging envelope associativity to unify the neighborhood graph, this method decouples scale parameters from tensor product complexity, enabling multi\-resolution representations with minimal overhead\. Extensive evaluations across representative EGNN backbones demonstrate that MCSD not only consistently reduces prediction errors for energy, forces, and macroscopic stress tensors, but also significantly enhances the prediction fidelity of higher\-order properties \(such as lattice thermal conductivity\), all while maintaining the smoothness of the potential energy surface and the energy conservation of long\-term molecular dynamics simulations\. The code is available at the anonymous repository:  https://anonymous\.4open\.science/r/MCSD\-C854\.

## Efficient Lookahead Encoding and Abstracted Width for Learning General Policies in Classical Planning

**Authors:** Michael Aichmüller; Simon Ståhlberg; Martin Funkquist; Hector Geffner

**ID:** 150136 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kR1PKyczWe>) | [PDF](<https://openreview.net/pdf?id=kR1PKyczWe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150136>)

Generalized planning aims to learn policies that generalize across large collections of instances within a classical planning domain\. Recent approaches using Graph Neural Networks \(GNNs\) have shown the ability to learn nearly perfect policies for several domains\. This work improves on the recently published idea of Iterated Width \(IW\) policies\. Therein, the policy broadens its successor scope through an IW\-lookahead search that offers to "jump" over multiple transitions, simplifying the problem structure\. Yet, each transition is evaluated individually leading to unscalable compute and expressivity limitations\. Furthermore, while an IW\(1\) search is attractive due to scaling linearly with the number of atoms in a problem, it still becomes inefficient once thousands of objects are considered like in the International Planning Competition \(IPC\) 2023 benchmark\. In this work, we address both limitations\. Firstly, we introduce a vastly more efficient holistic encoding of the entire search tree\. It jointly represents IW\(1\)\-reachable states only by their relational differences to the current state, which enables Relational GNNs \(R\-GNNs\) to score all transitions in a single forward pass\.   Secondly, we define Abstracted IW\(1\) to improve scaling through relational abstraction during novelty checks\. Rather than testing fully instantiated atoms, it abstracts each atom by replacing all but one of its arguments with their types\. The original atom is then novel if any of its abstracted forms is\. This structural compression shifts the scaling of the novelty search to be linear in the number of objects, rather than atoms, still capturing meaningful subgoal structure\.  Our contributions are evaluated on the hyperscaling IPC 2023 benchmark and across a broad range of domains, including those that require features beyond the $C\_2$ logic fragment\. The results show that our policies achieve a new state\-of\-the\-art performance, significantly surpassing prior work, including classical planners like LAMA\.

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

## QUEST: Q\-Learning for Uncertainty\-Guided Efficient Search Teams

**Authors:** Arsh Verma; Tejus Gupta; Jeff Schneider

**ID:** 148917 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDlqXaFTVK>) | [PDF](<https://openreview.net/pdf?id=uDlqXaFTVK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148917>)

Robots deployed for active search must decide where to sense while uncertainty, teammates, and remaining mobility change online\. In active search, each waypoint decision also commits the robot to a route through the map, making efficient localization a long\-horizon problem over belief, topology, robot state, and traversal budget rather than a sequence of independent next\-best sensing decisions\.  We present QUEST, a shared\-belief graph neural framework for multi\-agent active search with noisy sensors, a shared posterior, and finite decision and path budgets\. Rather than learning a myopic policy that values only the next route, QUEST trains Q\-functions whose targets include both reward collected along the executed path and the downstream value of the resulting belief, robot positions, team coverage, and remaining budget\. The same formulation supports single robots, homogeneous robot teams, and heterogeneous UAV\-\-UGV teams with different sensors and motion budgets\. During execution, each robot acts independently using the shared posterior and knowledge of teammates' positions and search plans\.  Across simulated search environments, QUEST reaches $0\.913$ F\-score with four UGVs, versus $0\.853$ for the strongest learned baseline, and keeps above $0\.90$ F\-score under communication outage and two mid\-mission robot failures without retraining\. On out\-of\-distribution UAV\-\-UGV teams, it improves early F\-score \($0\.759$ vs\.\\ $0\.728$\) while using $10\\%$ less path length and $12\\%$ less duplicate coverage than the same baseline\. The same policies transfer across map shape, variable team size, communication outage, and mid\-mission robot failure, and show sensing\-mode adaptation after UGV failure\.

## UFO: A Unified Flow\-Oriented Framework for Robust Continual Graph Learning

**Authors:** Danhui Zhang; Zhe Wang; Qing Qing; Jiarui Liu; Wentao Gao; Ziqi Xu; Mingliang Hou; Xikun Zhang; Renqiang Luo

**ID:** 155759 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=38kpqzHh0B>) | [PDF](<https://openreview.net/pdf?id=38kpqzHh0B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155759>)

Graph learning research has increasingly shifted toward continual graph learning \(CGL\), which better reflects real\-world scenarios where graphs evolve over time\. However, existing CGL methods largely assume clean supervision and overlook a critical challenge: the newly arriving portions of the graph are often noisy, due to annotation errors or adversarial corruption\. This mismatch limits their applicability in practice\. In this work, we study robust continual graph learning, where models must simultaneously handle catastrophic forgetting and noisy supervision in evolving graph data\. We show that label noise introduces a new failure mode—catastrophic remembering, where models persistently reinforce corrupted knowledge across tasks\. To address these challenges, we propose a Unified Flow\-Oriented framework \(UFO\)\. First, UFO models conditional feature distributions via flow\-based generative modeling and produces replay representations, mitigating forgetting without storing historical data\. Second, UFO estimates instance\-level reliability scores to distinguish clean from noisy nodes, reducing the impact of corrupted supervision and alleviating catastrophic remembering\. Extensive experiments on four benchmark graph datasets under varying noise ratios demonstrate that UFO consistently outperforms existing methods in both accuracy and forgetting metrics\. Code is available at: https://anonymous\.4open\.science/r/UFO\.

## Beyond Coordinates: Encoding Graph Structure via Contextual Distribution and Relational Similarity

**Authors:** Feifei Qian; Lu Bai; Lixin Cui; Ming Li; Hangyuan Du; Bo Jiang; Lixiang Xu; Edwin Hancock

**ID:** 148246 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zJiRNIyndn>) | [PDF](<https://openreview.net/pdf?id=zJiRNIyndn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148246>)

The Message Passing Neural Networks \(MPNNs\) and Graph Transformers \(GTs\) have emerged as two dominant paradigms for graph representation learning\. However, the expressive power of standard MPNNs is fundamentally bounded by the 1\-dimensional Weisfeiler\-Lehman \(1\-WL\) test, while GTs lack the inductive bias for graph structure\. To enhance structural representation, existing methods typically resort to subgraph\-based aggregation or coordinate\-based positional encodings\. However, the former suffers from prohibitive computational memory overheads, while the latter is limited by rigid reference frames that fail to distinguish fine\-grained local topology\. To address these limitations, we introduce a novel structural encoding framework based on contextual distributions\. Specifically, we move beyond fixed coordinate systems to capture intrinsic local topology by encoding structural information through a compact distributional statistic, i\.e\., the entropy of the node context\. Furthermore, instead of relying on relative positioning, we introduce a kernelized mechanism to encode relational similarity by quantifying the structural affinity between node contexts\. Extensive experiments on both synthetic and real\-world datasets demonstrate that the proposed framework achieves superior performance, striking a favorable balance between effectiveness and efficiency\.

## BeamWitness: Rooted Subgraph Beam Search for Selective Graph Representation Learning

**Authors:** Lin Du; Lu Bai; Lixin Cui; Ming Li; Hangyuan Du; Bo Jiang

**ID:** 149610 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ooitypoSMX>) | [PDF](<https://openreview.net/pdf?id=ooitypoSMX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149610>)

Standard graph neural networks \(GNNs\) are built on message passing and neighborhood aggregation, following the Weisfeiler\-\-Lehman refinement paradigm\. Despite their wide adoption, these models tend to compress and mix neighbor information from the very first layer\. This early mixing obscures the critical subgraphs that drive the prediction\. Attention\-based and subgraph\-based methods partially address this by reweighting nodes or enriching local representations, but both families remain passive as they usually rely on soft weighting or predefined subgraph templates\. We propose BeamWitness, a selective graph representation learning framework that treats subgraph identification as an active search problem\. Starting from a root node, a policy trained with task rewards expands a connected subgraph one node at a time or terminates early, and beam search retains a small set of candidate subgraphs as witnesses for prediction\. For node\-level tasks, the target node serves as the root, while for graph\-level tasks, BeamWitness launches searches from multiple root nodes and aggregates the selected witnesses into a graph\-level representation\. On controlled motif benchmarks with known ground\-truth subgraphs, BeamWitness achieves near\-perfect accuracy and selects witnesses that align with the true motifs\. On real\-world node and graph classification benchmarks, BeamWitness is competitive with standard GNNs and related methods while providing an explicit, interpretable subgraph\-based account of each prediction\.

## A Structure\-Aware Higher\-Order Message Passing Framework on Walk States for Graph Classification

**Authors:** Lin Du; Lu Bai; Lixin Cui; Ming Li; Bo Jiang; Hangyuan Du; Ziyu Lyu; Xin Jin

**ID:** 150813 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fBUu2GWlHf>) | [PDF](<https://openreview.net/pdf?id=fBUu2GWlHf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150813>)

Standard Message Passing Neural Networks \(MPNNs\) are at most 1\-WL expressive, which has spurred the development of higher\-order models\. In particular, many higher\-order designs rely on extra global structural features \(e\.g\., positional encodings or pairwise distances\), whereas the $k$\-WL hierarchy offers a principled and quantifiable path to increased expressiveness\. However, directly simulating $k$\-WL is computationally prohibitive, and existing $k$\-WL variants often sacrifice expressiveness to gain efficiency, failing to capture critical structural distinctions\. To overcome these shortcomings, we propose a higher\-order graph learning framework based on walk\-induced lifted states with structure\-aware state encoding\. We further design a controllably sparsified and localized $k$\-FWL\-style aggregation scheme, enabling graph\-level higher\-order representations via simple message passing\. On the recent and challenging BREC expressiveness benchmark, our model achieves state\-of\-the\-art total distinguishing accuracy among compared higher\-order GNN baselines, outperforming strong 3\-WL baselines, and remains competitive on real\-world graph classification tasks\.

## Trapping Attacker in Dilemma: Examining Internal Correlations and External Influences of Trigger for Defending GNN Backdoors

**Authors:** Fan Yang; Binyan Xu; Di Tang; Kehuan Zhang

**ID:** 155149 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7xWSWpsU5J>) | [PDF](<https://openreview.net/pdf?id=7xWSWpsU5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155149>)

GNNs have become a standard tool for learning on relational data, yet they remain highly vulnerable to backdoor attacks\. Prior defenses often depend on inspecting specific subgraph patterns or node features, and thus can be circumvented by adaptive attackers\. We propose PRAETORIAN, a new defense that targets intrinsic requirements of effective GNN backdoors rather than surface\-level cues\. Our key observation is that flipping a victim node's prediction requires substantial influence on the victim: attackers must either inject many trigger nodes or rely on a small set of highly influential ones\. Building on this observation, PRAETORIAN \(i\) analyzes internal correlations within potential trigger subgraphs to detect abnormally large injected structures, and \(ii\) quantifies external node influence to identify triggers with disproportionate impact\. Across our evaluations, PRAETORIAN reduces the average attack success rate \(ASR\) to 0\.55\\% with only a 0\.68\\% drop in clean accuracy \(CA\), whereas state\-of\-the\-art defenses still yield an average ASR of $\\geq$20\\% and a CA drop of $\\geq$3\\% under the same conditions\. Moreover, PRAETORIAN remains effective against a range of adaptive attacks, forcing adversaries to either inject many trigger nodes to achieve high ASR \($\\geq 80\\%$\), which incurs a $&gt;$10\\% CA drop, or preserve CA at the cost of limiting ASR to 18\.1\\%\. Overall, PRAETORIAN constrains attackers to an unfavorable trade\-off between efficacy and detectability\.

## Towards Universal Black\-box Attacks on Graph Neural Networks

**Authors:** Runze Li; Di Jin; Xiaobao Wang; Bingdao Feng; Dongxiao He

**ID:** 154202 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FQl3bhUOHb>) | [PDF](<https://openreview.net/pdf?id=FQl3bhUOHb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154202>)

Graph neural networks are widely deployed in real\-world applications, where attackers often operate under strict black\-box constraints, making effective graph black\-box attacks particularly important\. However, existing methods are fundamentally limited by poor universality, as attack strategies learned on specific graphs or model configurations fail to generalize across different graph datasets\. Inspired by the unified representation principle of graph foundation models, we propose a universal black\-box attack framework that learns transferable attack paradigms from multiple source graphs and generalizes directly to unseen target graphs\. The framework incorporates a representation selection mechanism and a graph variational autoencoder based modeling strategy to ensure consistency and mappability between the unified semantic space and the original representation space, together with a structure–representation joint anchor node selection mechanism for effective attack construction\. Extensive experiments on benchmark datasets show that our method achieves strong universality and consistently superior attack performance\.

## Caterpillar GNN: Replacing Message Passing with Graph\-Level Aggregation

**Authors:** Marek Černý

**ID:** 148837 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umcbm0Ss0b>) | [PDF](<https://openreview.net/pdf?id=umcbm0Ss0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148837>)

Message\-passing graph neural networks \(MPGNNs\) dominate modern graph learning\. Typical efforts enhance MPGNN's expressive power by enriching the adjacency\-based aggregation\. In contrast, we introduce a graph\-level aggregation over walk incidence\-based matrices that are constructed to deliberately trade off some expressivity for stronger and more structured inductive bias\. This approach allows for gradual scaling between classical message\-passing and simpler methods based on walks\. Our second result characterizes the expressive power at each scale using homomorphism counts over a hierarchy of generalized caterpillar graphs\. Based on these foundations, we propose Caterpillar GNNs that substantially reduce the number of nodes in the hidden layers of the computational graphs on real\-world datasets\. This gradual reduction does not obstruct learning, enabling a systematic study of lower\-order expressivity\. We further describe benchmark settings where a task\-aligned expressivity supports learning\.

## Weisfeiler\-Leman Is Incomplete on Simple Spectrum Graphs, so Canonicalize Them

**Authors:** Snir Hordan; Nadav Dym; Tim Seppelt

**ID:** 150655 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gQCHWXz2Fu>) | [PDF](<https://openreview.net/pdf?id=gQCHWXz2Fu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150655>)

Graphs with a simple spectrum admit cubic\-time isomorphism testing, yet we prove that for every natural number $k$, the $k$\-Weisfeiler\-Leman \($k$\-WL\) test cannot distinguish all non\-isomorphic graphs with a simple spectrum\. As the WL hierarchy upper\-bounds the distinguishing power of widely\-used Graph Neural Networks \(GNNs\), this incompleteness applies to all such GNNs, ruling out completeness for every $k$\-WL\-aligned GNN family\. To close this gap, we introduce PRiSM \(Partition, Refine, Solve, Match\), the first provably complete canonicalization of simple\-spectrum eigendecompositions\. PRiSM obtains the completeness guarantee that prior canonicalizations provably lack, and resolves the open problem of achieving complete expressivity on simple\-spectrum graphs\. When composed with DeepSets or a Transformer, PRiSM achieves universal approximation on simple\-spectrum graphs, justifying the use of canonicalized Laplacian positional encodings\. Empirically, PRiSM performs comparably to or outperforms existing spectral canonicalizations on graph regression, classification, and expressivity benchmarks\.

## PANDA: Prior\-guided Attentional Dual\-path Architecture

**Authors:** Rishabh Jain; Federico Belotti; Stefano Coniglio; Pietro Lió; Stefano Fiorini

**ID:** 153505 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kq4o9psxtB>) | [PDF](<https://openreview.net/pdf?id=Kq4o9psxtB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153505>)

Hypergraph Neural Networks \(HNNs\), designed to model higher\-order relations beyond pairwise interactions, typically rely either on fixed structural weights or on normalized attention\. Fixed weights can propagate misleading information in heterophilic settings, while normalization makes attention coefficients competitive, in the sense that, in a message\-passing framework, increasing the weight of one sender must reduce the weight of others in the same aggregation set\. Our main contribution is the introduction of PANDA \(Prior\-guided AttentioNal Dual\-path Architecture\), a plugin for two\-stage message passing HNNs applicable to both undirected and directed settings\. The \*main path\* interpolates between learned receiver\-normalized attention and structural incidence priors, while a non\-competitive \(not normalized\) \*auxiliary path\* lets each sender contribute its own transformed information\. We also show that, with fixed structural coefficients, PANDA recovers a certain complex\-valued, convolution operator adopted in previous works\. Across four HNNs spanning spatial and spectral methods in both directed and undirected settings, plugging PANDA in yields an average improvement of $5\.18$ percentage points across eight real\-world benchmark datasets\.

## GraphUAT: Uncertainty Attribution in Graph Neural Networks

**Authors:** Burouj Armgaan; Karan R Singh; Abhirup Mondal; Sayan Ranu

**ID:** 149147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sV9yc7CpY9>) | [PDF](<https://openreview.net/pdf?id=sV9yc7CpY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149147>)

Models that recognize when their predictions are unreliable inspire greater trust than those that make confident but incorrect decisions\. While recent advances enable uncertainty quantification in GNNs, understanding \*why\* a model is uncertain, whether due to noisy features, conflicting neighborhoods, or sparse training coverage, remains unsolved\. We address this gap with GraphUAT, the first \*uncertainty attribution\* framework for GNNs, which identifies the sources of uncertainty rather than aiming to improve its quantification\. GraphUAT employs a teacher\-student paradigm, where the trained GNN's behavior is distilled into an uncertainty\-aware student that disentangles aleatoric and epistemic uncertainties\. We then use targeted probes to trace the student's uncertainty back to the responsible features and structural components\. Experiments across benchmarks show that removing the identified elements consistently reduces the teacher's uncertainty, validating the faithfulness of our attributions\.

## Beyond MSE: Differentiable Complexity Priors for Structure\-Preserving Neural Denoising

**Authors:** Xiangyu Jiang; Jie Huang

**ID:** 153782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

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

**ID:** 150947 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6asnq38T9>) | [PDF](<https://openreview.net/pdf?id=e6asnq38T9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150947>)

Many complex networks exhibit hierarchical, tree\-like structures, making hyperbolic space a natural candidate wherein to learn representations of them\. Based on this observation, Hyperbolic Graph Neural Networks \(HGNNs\) have been widely adopted as a principled choice for representation learning on tree\-like graphs\. In this work, we question this paradigm by proposing the additional condition of geometry–task alignment, i\.e\., whether the metric structure of the target follows that of the input graph\. We theoretically and empirically demonstrate the capability of HGNNs to recover low\-distortion representations on regression problems, and show that their geometric inductive bias becomes helpful when the problem requires preserving metric structure\. By jointly analyzing predictive performance and embedding distortion, we further show that HGNNs gain an advantage on link prediction, a naturally geometry\-aligned task, whereas this advantage largely disappears on standard node classification benchmarks, which are typically not geometry\-aligned\. Overall, our findings shift the focus from only asking \*Is the graph hyperbolic?\* to also questioning \*Is the task aligned with hyperbolic geometry?\*, showing that HGNNs consistently outperform Euclidean models under such alignment, while their advantage vanishes otherwise\.

## HeterSEED: Semantics–Structure Decoupling for Heterogeneous Graph Learning under Heterophily

**Authors:** Xinyi Li; Ming Li; Lu Bai; Lixin Cui; Feilong Cao; Ke Lv; Yunliang Jiang; Pietro Lió

**ID:** 156084 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Y7JZRL4xc>) | [PDF](<https://openreview.net/pdf?id=0Y7JZRL4xc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156084>)

Many real\-world heterogeneous graphs exhibit pronounced heterophily, where connected nodes often have dissimilar labels or play different semantic roles\. In such settings, standard heterogeneous graph neural networks that aggregate messages along metapaths or meta\-relations primarily based on feature similarity can propagate misleading information, since feature similarity may be misaligned with underlying relational semantics\. In this paper, we propose \*\*HeterSEED\*\*, a semantics–structure decoupling framework for heterogeneous graph learning under heterophily\. HeterSEED decouples representation learning into a heterogeneous semantic channel that captures type\- and relation\-aware local semantics and a structure\-aware heterophily channel that separates homophilic and heterophilic neighborhoods via pseudo\-label\-guided partitioning and aggregates them using metapath\-based structural weights\. A node\-level adaptive fusion mechanism then combines the two channels to produce context\-dependent node representations\. Theoretically, we establish that, on heterogeneous graphs under heterophily, HeterSEED is strictly more expressive than standard heterogeneous graph neural networks that rely primarily on feature similarity and provably reduces the prediction bias introduced by heterophilic neighbors\. Experiments on five real\-world heterogeneous graphs, including two large\-scale networks at the million\-node and hundred\-million\-edge scale, demonstrate that HeterSEED consistently outperforms representative heterogeneous graph neural networks and recent heterophily\-aware baselines, especially in strongly heterophilic regimes\.

## Transductive Generalization for GNNs via Optimal Transport

**Authors:** MoonJeong Park; Seungbeom Lee; Kyungmin Kim; Jaeseung Heo; Seunghyuk Cho; Shouheng Li; Sangdon Park; Dongwoo Kim

**ID:** 149773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nPn4mFZwlJ>) | [PDF](<https://openreview.net/pdf?id=nPn4mFZwlJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149773>)

Analyzing the generalization of graph neural networks \(GNNs\) on node classification is challenging: message passing induces dependencies that break the i\.i\.d\. assumption underlying standard inductive generalization theory\. While distribution\-free transductive theory resolves this dependency issue, existing classical bounds are either intractable or correlate poorly with empirical generalization\. To fill this gap, we propose a transductive generalization bound based on optimal transport, connecting generalization to intra\-class concentration and inter\-class separation in the feature space\. Empirically, our bound aligns strongly with the generalization gap\. Building on this representation\-based approach, we analyze how feature geometry evolves under repeated message passing\. This explains the non\-monotonic relationship between GNN depth and generalization, providing new insights into oversmoothing research\. Practically, our bound serves as a geometry\-aware regularizer that corrects the harmful behavior of message passing, yielding consistent performance improvements\.

## Learning Pseudo\-Riemannian Manifolds for Heterophilic Graphs via Graph Signature

**Authors:** Yun Young Choi; Asung Kil; Sun Woo Park; Minho Lee; Seokhwan Kim

**ID:** 149305 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rAJTKw8IvJ>) | [PDF](<https://openreview.net/pdf?id=rAJTKw8IvJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149305>)

Graph Neural Networks \(GNNs\) operate under the implicit assumption that the underlying data manifold is Riemannian, where the metric tensor is strictly positive\-definite\. While effective for homophilic graphs, this inductive bias creates a fundamental geometric mismatch for heterophilic graphs, where edges often signify dissimilarity or structural repulsion\. In this work, we propose a paradigm shift from learning on fixed manifolds to learning the manifold itself\. We postulate that heterophilic graphs are naturally embedded in pseudo Riemannian manifolds endowed with an indefinite metric, allowing for negative squared distances to model repulsive interactions\. To formalize this, we introduce the Graph Signature Index, a spectral invariant that diagnoses the geometric nature of a graph\. This index enables our proposed Pseudo\-Riemannian Attention Network \(PRAT\) to dynamically learn an indefinite metric tensor, effectively capturing both attractive and repulsive interactions\. By unifying these opposing forces within a single framework, PRAT demonstrates how a subtle shift in the metric signature yields substantial performance gains on heterophilic benchmarks\. Our analysis reveals that PRAT’s learned geometry emergently aligns with the spectral signature of the graph, validating our geometric hypothesis\.

## AnalogToBi: Device\-Level Analog Circuit Topology Generation via Bipartite Graph and Grammar Guided Decoding

**Authors:** Seungmin Kim; Mingun Kim; Yuna Lee; Yulhwa Kim

**ID:** 150608 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gsxHqdgGnD>) | [PDF](<https://openreview.net/pdf?id=gsxHqdgGnD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150608>)

Analog circuit design remains highly dependent on expert knowledge due to the complexity of device\-level interactions and topology design\. Recent transformer\-based approaches for device\-level topology generation have shown promise, yet they suffer from low electrical validity without human\-in\-the\-loop \(HITL\) training and severe memorization caused by sequence\-based circuit representations\. In this work, we propose \*\*AnalogToBi\*\*, a framework for device\-level analog circuit topology generation\. AnalogToBi introduces \*circuit\-type conditioning\* for categorizing heterogeneous multi\-type topology datasets, \*device renaming augmentation\* to mitigate memorization, \*a bipartite graph representation\* for improved structural generalization, and \*grammar\-guided decoding\* to enforce structural validity during bipartite graph generation\. Experimental results demonstrate that AnalogToBi achieves high validity and novelty without HITL training while effectively avoiding memorization of training topologies\.

## Uncovering Semantic Hierarchies in Text\-Attributed Graphs via Variational EM\-based LLM–GNN Synergy

**Authors:** Yunhui Liu; Xudong Jin; Qizhuo Xie; Chunhui Zhao; Xiao Luo; Tao Zheng; Bin Chong; Tieke He

**ID:** 152617 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rm5u5TMKcq>) | [PDF](<https://openreview.net/pdf?id=Rm5u5TMKcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152617>)

While hierarchical structures are intrinsic to organizing human knowledge, current representation learning on text\-attributed graphs predominantly operates on flat semantic spaces, overlooking the rich coarse\-to\-fine granularity inherent in real\-world data\.  To bridge this gap, we propose SHiFT, which synergizes the reasoning power of LLMs with the structural representation capability of GNNs within an Expectation\-Maximization \(EM\) paradigm\.  In the E\-step, we harness LLMs as expert taxonomists to induce an explicit semantic tree, introducing a lightweight Mapping \\&amp; Diagnosis strategy that reduces inference costs by surgically updating the hierarchy only when anomalies are detected\.  In the M\-step, we align the GNN encoder with this induced hierarchy from complementary perspectives, including clustering partition, topological skeleton, and semantic concepts\.  Theoretical analysis interprets SHiFT as a generalized Variational EM algorithm\.  Extensive experiments demonstrate that SHiFT not only achieves state\-of\-the\-art performance but also uncovers high\-quality, human\-readable taxonomies\.

## Aggregation Dispersion: An Information\-Geometric Diagnostic of Oversmoothing in Graph Neural Networks

**Authors:** Abdessalam Ed\-dib; Amine Aboussalah

**ID:** 154195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

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

## One\-Shot Federated Graph Learning via High\-Fidelity Proxies and Transferability\-Guided Collaboration

**Authors:** Jia Jiang; Zihan Tan; Wenke Huang; Bin Yang; Mang Ye

**ID:** 153448 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LEYRzmVnb3>) | [PDF](<https://openreview.net/pdf?id=LEYRzmVnb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153448>)

One\-shot Federated Graph Learning \(OFGL\) has emerged as a communication\-efficient paradigm for Federated Graph Learning \(FGL\) under strict bandwidth constraints, compressing collaboration into a single transmission round\. Nevertheless, this extreme setting suffers from a fundamental \*\*Single\-Transmission Bottleneck\*\*, which limits both the quality and utility of exchanged knowledge\. First, while existing methods attempt to distill private graphs into shareable proxies, their aggressive one\-shot compression inherently triggers a fidelity crisis\. This compression distorts local graph topology and semantics across clients, leading to \*\*externalized knowledge underexpression\*\*\. Second, although the server aggregates these proxies to update global models, current integration schemes suffer from transferability agnosticism\. The server cannot reliably identify cross\-client collaboration potential, resulting in \*\*integrated knowledge underutilization\*\*\. To tackle these dual challenges, we propose FedHFT, an effective One\-shot Personalized Federated Graph Learning  \(OPFGL\) framework that addresses this bottleneck from two perspectives, namely High\-Fidelity Knowledge Externalization and Transferability\-Ware Knowledge Integration\. We use Fidelity\-Driven Proxy Refinement to preserve client\-side knowledge fidelity, and Transferability\-Steered Personalized Collaboration to enable adaptive server\-side collaboration\. The superiority of FedHFT is validated through extensive experiments on both homophilic and heterophilic graphs\. The code is available at https://anonymous\.4open\.science/r/FedHFT\-DC7F/\.

## Binary Regression: Universal Ising Model, Binary Expansion and Beyond

**Authors:** Jerry Yao\-Chieh Hu; YI\-CHEN LEE; Mingcheng Lu; En\-Jui Kuo; Han Liu

**ID:** 155424 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5lrkkd9Y7p>) | [PDF](<https://openreview.net/pdf?id=5lrkkd9Y7p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155424>)

We introduce a constructive universality principle for structural interpretability in binary regression\. Let $A\\in \\\\\{\-1,1\\\\\}^\{p\}$ be binary covariates and $B\\in\\\\\{\-1,1\\\\\}$ be a binary response\. We represent the binary\-regression target  $\\mathbb\{E\}\[B\|A\]$ by Ising Hamiltonians over observed and auxiliary binary variables\. This construction encodes covariate configurations as Boolean states and maps input\-output relationships through faithful reductions from Boolean satisfiability \(SAT\) to ground\-state\-energy Ising problems\. This gives a interpretable graph representation of high\-order binary dependence\. We showcase this principle with the \*Two\-body, Linear, Universal, Binary Effect\* \(T\-LUBE\) framework\. Unlike full power\-vector expansion, T\-LUBE does not enumerate high\-order product features\. It recasts these effects through interpretable auxiliary variables and pairwise interactions on an augmented binary graph\. Proof\-of\-concept experiments corroborate our theory\.

## Federated Graph Learning with Local Message Compensation

**Authors:** Ye Zhou; Bangqi Li; Haodi Wang; Yu Guo; Libin Jiao; Rongfang Bie

**ID:** 152765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QXvATxXC7l>) | [PDF](<https://openreview.net/pdf?id=QXvATxXC7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152765>)

Federated Graph Learning \(FGL\) aims to collaboratively train Graph Neural Networks \(GNNs\) across distributed subgraphs with a primary challenge of missing cross\-client connections\. Existing approaches predominantly rely on a retrieval\-based paradigm, which reconstructs missing context by accessing external information across clients\. However, such cross\-client transmissions inevitably expand the attack surface for privacy inference and incur significant communication overhead\. In this work, we propose \\textbf\{FedLMC\}, a novel framework that eliminates the necessity of any node information sharing and prior global adjacency knowledge\. FedLMC exploits a dual\-stage message compensation mechanism to generate informative and expressive node representations\. For the semantic information loss of external neighbors, we propose Local Semantic Compensation, which exploits semantic expansion via semantic surrogates to compensate for missing semantic context\. For the structural information loss induced by semantic expansion, we propose Community Structural Compensation, which exploits structural anchoring via community anchors to compensate for underlying structural context\. Extensive experiments on twelve datasets \(both homophilic and heterophilic\) demonstrate that FedLMC establishes a new state\-of\-the\-art performance with superior generalization and robustness to highly fragmented graph data\.

## Relation\-Aware Graph Foundation Model

**Authors:** Jianxiang Yu; Jiapeng Zhu; Yibo Zhao; HAO QIAN; Ziqi Liu; Zhiqiang Zhang; Xiang Li

**ID:** 151952 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WZUABeWpGW>) | [PDF](<https://openreview.net/pdf?id=WZUABeWpGW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151952>)

In recent years, large language models \(LLMs\) have demonstrated remarkable capability to generalize across diverse natural language processing tasks, inspiring the development of graph foundation models \(GFMs\) for large\-scale pre\-training\. However, unlike language models with explicit token units, graphs lack a well\-defined unit for generalization, making it challenging to design effective pre\-training strategies\. In this work, we propose REEF, a novel GFM framework that leverages relation tokens as the fundamental units\. We construct a vocabulary of relation tokens to encode relational information within graphs\. To accommodate diverse relations, we introduce two hypernetworks that adaptively generate the parameters of aggregators and classifiers in graph neural networks based on relation tokens\. In addition, we design another hypernetwork to construct dataset\-specific projectors and incorporate a dataset\-level feature bias into the initial node representations, enhancing flexibility across different datasets with the same relation\. Extensive experiments demonstrate that REEF consistently outperforms existing methods in both pre\-training and transfer learning, highlighting its potential as a general\-purpose graph foundation model\. Our code is publicly available at https://anonymous\.4open\.science/r/REEF\-16CF/\.

## A2I: Adjacency\-to\-Image Structural Encodings for Graph Learning

**Authors:** Heesoo Jung; Hogun Park

**ID:** 149615 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=omQbj7k7El>) | [PDF](<https://openreview.net/pdf?id=omQbj7k7El>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149615>)

Graph representation learning often relies on message passing or spectral/positional encodings to summarize graph structure, but these indirect summaries can collapse structurally distinct graphs, including non\-isomorphic cospectral pairs\.   We propose A2I, a structural encoding framework that renders BFS\-\-degree\-ordered local adjacency patterns as fixed\-resolution images and embeds them with a frozen pre\-trained vision encoder\.   The resulting structural tokens are mapped to learnable prototypes and aggregated with node embeddings via a lightweight Transformer\. We provide a conditional analysis with two related findings: a stability result, showing that two orderings of the same graph yield embeddings that converge under bounded\-degree assumptions, and a separability result, showing that two distinct graphs yield embeddings whose gap grows at least linearly with the difference in their BFS profiles\.   Empirically, A2I is competitive with recent GNN, Graph Transformer, and structural\-encoding baselines on six node\-classification benchmarks, with pronounced gains for GCN\-based models on heterophilous graphs and under partial feature masking\.

## Gradient\-Free Editing for Attribute Invariance in Graph Neural Networks

**Authors:** Aastha A K Verma; Vishakha Agarwal; Sahil Manchanda; Sayan Ranu

**ID:** 153685 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JYwUlKcoxQ>) | [PDF](<https://openreview.net/pdf?id=JYwUlKcoxQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153685>)

Deployed Graph Neural Networks are increasingly subject to post\-deployment interventions: a sensitive attribute is flagged for removal, or a spurious correlation is discovered after the model is already in production\. In such scenarios, retraining is often infeasible due to a variety of reasons including scale of modern graphs, inaccessible training data, or strict privacy mandates\. The challenge is further compounded in graph\-structured data, where attribute dependencies propagate through message\-passing, spreading unwanted correlations across the entire network\. We propose a framework for surgical, post\-hoc attribute invariance in GNNs via gradient\-free model editing\. Rather than retraining or fine\-tuning, our method formulates the edit as a subspace\-constrained, closed\-form optimization: we identify structurally influential nodes that exhibit high attribute sensitivity, isolate the low\-rank manifold in activation space where sensitive variation is concentrated, and solve directly for a weight update that decouples the model's decision logic from the target attribute\. The update requires no access to original training labels, introduces no additional parameters, and is computed in a single pass\. Empirical results demonstrate that our method enforces attribute invariance while preserving predictive utility, while offering 3 orders of magnitude speed\-up over existing GNN editing approaches\.

## Interpretable Relational Inference with LLM\-Guided Symbolic Dynamics Modeling

**Authors:** Xiaoxiao Liang; Juyuan Zhang; Liming Pan; Linyuan Lü

**ID:** 154449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DTEngzO4Ry>) | [PDF](<https://openreview.net/pdf?id=DTEngzO4Ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154449>)

Inferring latent interaction structures from observed dynamics is a fundamental inverse problem in many\-body interacting systems\. Most neural approaches rely on black\-box surrogates over trainable graphs, achieving accuracy at the expense of mechanistic interpretability\. Symbolic regression offers explicit dynamical equations and stronger inductive biases, but typically assumes known topology and a fixed function library\. We propose $\\textbf\{COSINE\}$ \($\\textbf\{C\}$o\-$\\textbf\{O\}$ptimization of $\\textbf\{S\}$ymbolic $\\textbf\{I\}$nteractions and $\\textbf\{N\}$etwork $\\textbf\{E\}$dges\), a differentiable framework that jointly discovers interaction graphs and sparse symbolic dynamics\. To overcome the limitations of fixed symbolic libraries, COSINE further incorporates an outer\-loop large language model that adaptively prunes and expands the hypothesis space using feedback from the inner optimization loop\. Experiments on synthetic systems and large\-scale real\-world epidemic data demonstrate robust structural recovery and compact, mechanism\-aligned dynamical expressions\. Code: https://anonymous\.4open\.science/r/COSINE\-6D43\.

## NORMA: Norm\-Guided Explanation Subgraph Discovery

**Authors:** Xiangyu Fu; Wei Liu; Jun Wang; Yang Qiu; Yuhua Li; Ruixuan Li

**ID:** 151056 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dKixXaecA3>) | [PDF](<https://openreview.net/pdf?id=dKixXaecA3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151056>)

Discovering explanatory subgraphs is essential for interpreting Graph Neural Networks \(GNNs\)\. Many existing and popular explainers optimize by maximizing mutual information \(MMI\) between selected subgraphs and predicted labels; however, the resulting optimization landscape is often non\-smooth and poorly conditioned, leading to suboptimal local optima\. To address this issue, we develop a norm\-theoretic framework for subgraph analysis\. We show that subgraphs containing model\-utilized features tend to induce graph embeddings with larger $\\ell\_2$ norms, as they align more strongly with the supportive subspace shaped by the GNN’s weight matrices, a phenomenon consistently observed across multiple datasets\. Based on this insight, we propose NORMA, a parameterized explainer that uses subgraph\-embedding $\\ell\_2$ norms as a stable optimization signal to guide subgraph selection\. Experiments on fsix benchmark datasets demonstrate that NORMA effectively alleviates the optimization difficulties of MMI\-based methods and achieves superior explanation quality\.

## Dynamic Regulatory Graph Learning for Histology\-to\-Spatial Transcriptomics

**Authors:** Yikai Luo; Peng Zhang; Heyang Zhao; Hongming Shan; Wenjian Wang

**ID:** 150677 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gJdp2KTAFJ>) | [PDF](<https://openreview.net/pdf?id=gJdp2KTAFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150677>)

Virtual spatial transcriptomics aims to predict spatial gene expression from histopathology images\. However, gene expression is not governed by morphology alone; regulatory relationships are structured, context\-dependent, and shaped by the local tissue microenvironment\. Existing visual\-to\-expression models and fixed\-prior graph methods struggle to align molecular dependencies with spatially varying histological contexts\. We propose DragH2ST, a dual\-stage retrieval\-augmented dynamic regulatory graph learning framework that constructs task\-specific regulatory manifolds and rewires them at the spot level according to local histology\. During training, DragH2ST retrieves and integrates heterogeneous biomedical knowledge to build a task\-specific regulatory prior, guiding gene representations toward biologically plausible and context\-adaptive regulatory structures\. To capture microenvironment\-dependent regulation, context\-gated graph rewiring performs spot\-level soft rewiring of gene\-regulatory edges conditioned on histology\-derived context, enabling adaptive graph reasoning without dense graph reconstruction\. At inference, DragH2ST retrieves morphologically similar historical spot prototypes as case\-level references, providing evidence\-based support for interpretation and biological plausibility assessment\. Experiments on multiple benchmarks show that DragH2ST improves prediction accuracy, preserves gene\-gene regulatory topology, and captures spatially heterogeneous expression patterns\.

## Just Ramp\-Up: Debiasing Regression\-based Estimator for A/B Tests under Network Interference

**Authors:** Qianyi Chen; Bo Li

**ID:** 151245 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bpGgrtMNct>) | [PDF](<https://openreview.net/pdf?id=bpGgrtMNct>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151245>)

Network interference complicates A/B testing on online platforms, such as social networks and marketplaces, where causal methods based on single experiments often suffer from significant bias due to complex interference patterns\. This paper demonstrates the statistical benefits of merging data from multiple experiments with varying treatment proportions\. Sequential experimentation with increasing traffic, or ramp\-up, is widely used in tech companies for risk management and cost control\. Beyond operational benefits, we show that regression\-based estimators trained on merged data achieve substantial bias reduction, even under simple randomization schemes and regression models\. We focus on the global average treatment effect \(GATE\), a key estimand in the tech industry, and consider a general interference pattern that extends beyond the 1\-hop setting\. We present an exact bias–variance analysis of the linear regression estimator and show that, in practical settings, the bias term typically dominates\. In addition, we characterize the substantial bias reduction achieved by our proposed approach, which merges experimental data collected at different ramp\-up stages to improve the training of the regression function\. We also offer an intuitive explanation for this reduction and highlight the synergy between cluster\-level randomization and our approach\. Furthermore, we consider a refined estimator based on graph neural networks \(GNN\)\. Extensive simulations across novel and challenging scenarios confirm that our methodology significantly improves the accuracy of regression\-based estimators\.

## Cross\-Layer Evolution Graph Learning for Fine\-grained VLM Hallucination Detection

**Authors:** Shaoxuan Li; Shiliang Zhang

**ID:** 150184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k5PB3UmZfp>) | [PDF](<https://openreview.net/pdf?id=k5PB3UmZfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150184>)

Although Vision\-Language Models \(VLMs\) demonstrate impressive capabilities, their deployment in high\-stakes domains is severely hindered by hallucinations\. Existing detection methods mostly focus on static internal feature probing with coarse\-grained annotations, failing to achieve fine\-grained token\-level localization without expensive dense labels\. In this paper, we reconceptualize VLM hallucination detection as a dynamic graph learning task, identifying hallucinations as distinct \*trajectory drifts\* across network layers\. Consequently, we propose \*\*TRACE\*\* \(Token Representation Analysis with Cross\-layer Evolution\), a non\-intrusive probing framework that models internal states as heterogeneous spatio\-temporal graphs\. By employing Graph Neural Networks \(GNNs\) to capture computational dynamics, TRACE effectively isolates hallucinatory signals\. Furthermore, a token\-first Multiple Instance Learning \(MIL\) readout elegantly bridges the granularity gap, distilling macroscopic sentence\-level supervision into precise zero\-shot token\-level localization\. Extensive evaluations on M\-HalDetect, ViGoR, and HalLoc demonstrate that TRACE achieves state\-of\-the\-art detection performance while being competitive in localization accuracy, offering an efficient and interpretable solution for trustworthy VLMs\.

## The Cost of Symmetry: Universality and Hardness for Permutation\-Invariant Neural Networks

**Authors:** Dashiell Bhattacharyya

**ID:** 155591 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4RkWTjPp9P>) | [PDF](<https://openreview.net/pdf?id=4RkWTjPp9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155591>)

Permutation\-invariant machine learning architectures, such as DeepSets, Set Transformers, Graph Neural Networks, and $k$\-GNNs, are each highly used and studied individually\. We unify them into a single complexity\-theoretic framework: noisy symmetric circuits\. Each architecture falls into our hierarchy at a level $k$, parameterized by the order of interactions it captures\. Within this framework, we tightly characterize the cost of symmetry\. At level $1$, where DeepSets operate, every symmetric function on boolean input computable by a neural network has an equivalent DeepSet, at the cost of an additive blowup nearly linear in the input size, and we exhibit an explicit function that requires this blowup\. At level $2$, where Set Transformers and GNNs operate, the same near\-linear blowup suffices for WL\-invariant functions, while non\-WL\-invariant functions are known to be uncomputable at level $2$\. These results show that, in the regimes we cover, WL is the \\textit\{only\} barrier to using a symmetric architecture; everywhere else, symmetry is \\textit\{low\-cost\}\. Experiments illustrate the near\-linear threshold predicted by the theory\.

## Chasing Label Shifters: A Change\-Aware Framework for Dynamic Graph Node Classification

**Authors:** Junghoon Kim; Seungyoon Choi; Hyunsung Kim; Chanyoung Park

**ID:** 150479 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkeWDm9UGm>) | [PDF](<https://openreview.net/pdf?id=hkeWDm9UGm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150479>)

Entities in real\-world systems often evolve over time: users shift between information consumption patterns, researchers migrate between fields, and firms transition between financial risk states\. When such systems are modeled as dynamic graphs, these transitions correspond to nodes whose class labels change between consecutive snapshots, which we call shifters\. Correctly classifying shifters is often more consequential than classifying stable nodes with persistent labels, as detecting such transitions enables timely intervention in high\-stakes settings\. Yet, we identify a systematic failure mode across all major dynamic graph neural network architectures: shifter performance consistently lags behind stable nodes, with errors concentrated on the old label\. Our structural analysis traces this failure to embedding inertia: neighborhood aggregation keeps shifter representations anchored to the old\-class centroid, and this effect is strongest precisely where it is hardest to correct, namely for shifters whose neighborhoods remain aligned with the old class\. Guided by this finding, we propose CHASE, a model\-agnostic CHange\-Aware framework for Shifting nodEs that wraps any dynamic GNN with targeted components for detecting label shifts and overriding stale neighborhood signals\. CHASE consistently improves shifter performance across all tested models and datasets \(up to 114\.9% and 202\.5% improvement on accuracy and F1 score, respectively\) while preserving stable\-node performance\. We additionally contribute three dynamic graph benchmarks with naturally shifting labels, filling a gap in existing resources\. The source code is available at https://anonymous\.4open\.science/r/CHASE\-40CF/\.

## Learning Minimal Sufficient Evidence Graphs for GraphRAG via Nash\-Guided Optimization

**Authors:** Jack YANG; Xinguo Yu; Wanqing Li; Hongru Sun; Xiao Luo; Wenbin Zhang; Sasha Nikolic; Shirui Pan; Yi Guo; Jie Yang

**ID:** 154710 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BbWyQe2E6T>) | [PDF](<https://openreview.net/pdf?id=BbWyQe2E6T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154710>)

GraphRAG enhances Large Language Model reasoning by organizing retrieved knowledge into structured evidence graphs, enabling inference over connected evidence rather than isolated text fragments\. Yet, existing GraphRAG methods often either miss query\-critical links or introduce noisy or conflicting evidence that distracts reasoning\. We propose CONSIST, a Conflict\-aware Nash\-optimized Minimal Sufficient graph learning algorithm that regulates evidence graphs to resolve conflicts during reasoning\. Specifically, we cast graph learning as an exploration–editing process, where a candidate graph is expanded via structural and semantic connections and then refined by pruning unreliable edges\. We further introduce Gumbel\-based edge editing, framing it as a Nash\-guided bargaining process, where current and future players negotiate over a customized utility to determine reliable edits that improve both immediate answer support and long\-term graph quality\. Experiments on multi\-hop question answering and conflict\-aware benchmarks demonstrate that CONSIST consistently outperforms recent state\-of\-the\-art baselines, achieving average performance gains up to 7\.0% EM and 6\.3% F1\. Moreover, CONSIST also produces substantially more compact evidence graphs, reducing retained nodes by 42\.9% and edges by 54\.7% on average\.

## S&amp;P: Towards Scalable and Powerful Graph Learning with Hierarchical Structural Acquisition

**Authors:** Mingqi Yang; Zhaoyu Liu; Wenjie Feng

**ID:** 152481 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SlDtKO7Xq7>) | [PDF](<https://openreview.net/pdf?id=SlDtKO7Xq7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152481>)

Graph Neural Networks \(GNNs\) face a fundamental dichotomy between expressiveness and scalability\. Recent spectral and transformer\-based models approach universal approximation capabilities but rely on computationally intensive global operators that scale poorly to large graphs\. Conversely, scalable approaches often compromise structural fidelity through sampling or decoupling, resulting in incomplete structural acquisition\. We identify that this trade\-off stems from a homogeneous treatment of graph topology, where uniform computational complexity is applied to heterogeneous structures\. We propose a paradigm shift towards Hierarchical Structural Acquisition and introduce S\\&amp;P \(Scalable \\&amp; Powerful\), a framework grounded in Fusion Frame Theory that aligns the operator with the intrinsic hierarchy of the data\. S\\&amp;P decomposes the global operator into intra\-component and inter\-component, and we prove that this design preserves universal spectral filtering capacity for non\-degenerate inputs while remaining numerically stable and linear in complexity\. Experiments on 14 datasets show that S\\&amp;P achieves state\-of\-the\-art accuracy, bridging the gap between scalability and expressiveness\. Our code is available at https://anonymous\.4open\.science/r/HierarchicalSP\.

## Distilling Graph Geometry: Knowledge Gap from GNNs to MLPs

**Authors:** Zhewei Chen; Hao Zhu; Jiaojiao Jiang; Ahad N\. Zehmakan

**ID:** 150714 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g12F7YzATu>) | [PDF](<https://openreview.net/pdf?id=g12F7YzATu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150714>)

GNN\-to\-MLP distillation aims to retain the predictive accuracy of a message\-passing teacher while deploying a graph\-free MLP at inference\. Existing methods mainly transfer node\-wise predictions or use confidence\-based reweighting, but they do not specify where the student should preserve the teacher's graph\-induced geometry\. We show that this omission leads to two spectral failure modes in the student's representation space\. On sparse graphs, the student suffers from \*spectral underfit\*, missing high\-energy teacher directions concentrated near boundary regions\. On dense graphs, it suffers from \*spectral overfit\*, retaining spurious directions that the teacher has collapsed through aggregation\. Motivated by an energy\-weighted teacher\-\-student alignment objective, we propose \*\*Graph Geometry\-aware MLP \(G$^2$MLP\)\*\*, a training\-time distillation framework guided by Ollivier\-\-Ricci curvature\. Curvature identifies where the two spectral errors concentrate and is used to allocate supervision between prediction\-level and representation\-level alignment\. The deployed model remains a standard MLP and requires no graph access at inference\. Across node\-classification benchmarks, G$^2$MLP consistently improves over graph\-free distillation baselines, reduces the teacher\-\-student rank gap in both regimes, and transfers without architectural changes to Graph Transformer teachers and link prediction\.

## Efficient Memory Crystallization for Graph Learning under Non\-Stationary Distribution Shifts

**Authors:** Yue Hou; Ruomei Liu; Yingke Su; Wu Junran; Ke Xu

**ID:** 149800 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nG6LsRFiOk>) | [PDF](<https://openreview.net/pdf?id=nG6LsRFiOk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149800>)

Deep graph learning models deployed in real\-world systems often need to cope with non\-stationary environments, where the underlying graph distribution drifts continually over time\. Prevailing solutions rely on training auxiliary generative modules to synthesize memory graphs for cross\-domain adaptation, which incurs substantial computational overhead and scales poorly under prolonged distribution shifts\. We argue that a more economical path exists: rather than generating memory, one can crystallize it\. To this end, we propose Efficient Memory Crystallization \(EMC\), a training\-free test\-time framework that distills each incoming graph domain into a compact, semantically faithful memory through a closed\-form solution to a memory\-oriented distribution\-matching objective, thereby eliminating redundant domain information under continual covariate shifts\. To preserve both generalizability and adaptability as the model traverses a long sequence of target domains, EMC further models inter\-domain dependencies through state\-evolving memories and admits a theoretically grounded, tighter generalization error bound than direct adaptation\. Extensive experiments demonstrate the superior performance of EMC over state\-of\-the\-art baselines on graphs under non\-stationary distribution shifts, while reducing average runtime by 87\.4% and GPU memory consumption by 92\.4% relative to the recent competitor, making continual graph adaptation practical at scale\.

## From Link Prediction to Linear Community Detection: A Finite\-Sample Guarantee for Graph Pretraining

**Authors:** Ying Chen; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Yixuan He

**ID:** 154680 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BoHltLOSMR>) | [PDF](<https://openreview.net/pdf?id=BoHltLOSMR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154680>)

Link prediction is a standard pretraining objective for graph neural networks: hide edges, train an encoder\-\-decoder to predict them, and reuse the node embeddings for downstream node tasks\. Despite its empirical success, there is little quantitative theory explaining why an edge\-level objective should produce embeddings that are linearly useful for node classification\.We study this question in the finite\-sample stochastic block model \(SBM\)\. For any bounded GNN encoder paired with a symmetric bilinear decoder, we prove a conditional reduction: small population held\-out LP excess risk implies small community\-classification error for a transductive linear classifier on the learned embeddings\.The bound decomposes into an optimization residual, an architectural approximation residual, and explicit statistical terms of order $\\widetilde\{O\}\(\\sqrt\{d/n\}\)$ in bounded dense regimes\. We further give a constructive few\-label classifier: nearest\-centroid classification under the PSD quadratic form $G = W Z^\\top Z W$, whose label error is coupled to LP quality\.The framework is architecture\-agnostic through the approximation residual, and we instantiate this residual as $O\(\\log n / n\)$ for a spectral\-positional\-encoding GIN with a bilinear decoder\. Synthetic SBM experiments validate the theorem chain from LP risk to score error to classification error, and show when the worst\-case constants become conservative\.

## PhySPRING: Structure\-Preserving Reduction of Physics\-Informed Digital Twins via Graph Neural Networks

**Authors:** Yixiong Jing; Xingyuan Chen; Guangming Wang; Olaf Wysocki; Haibing Wu; Brian Sheil

**ID:** 150133 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRm7mfbn8W>) | [PDF](<https://openreview.net/pdf?id=kRm7mfbn8W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150133>)

Physics\-based digital twins aim to predict the dynamics of real\-world objects under interaction, enabling real\-to\-sim\-to\-real applications in robotics\. Current approaches reconstruct such twins as explicit physical models \(such as spring\-mass systems\) to predict the dynamics, but the resulting models often inherit the resolution of the visual reconstruction rather than being reduced to the physical complexity required to reproduce task\-relevant dynamics\. This mismatch introduces redundant topology, making repeated forward\-dynamics rollouts unnecessarily expensive\. To address this challenge, we present PhySPRING, an fully differentiable GNN\-based method to reduce complexity in spring\-\-mass digital twins\. PhySPRING jointly learns a hierarchy of coarsened graph topologies and their mechanical parameters from observations\. At each reduction level, PhySPRING merges nodes with similar learned dynamic responses to optimize the topology, while maintaining every reduced layer as an explicit spring\-\-mass system\.  On the PhysTwin benchmark, PhySPRING improves dense reconstruction and prediction accuracy over PhysTwin, while reduced models retain stable physical and visual fidelity with up to a 2\.30$\\times$ speed\-up\.  We further demonstrate the effectiveness of PhySPRING in a Real2Sim robot policy\-evaluation pipeline, where the reduced models are substituted zero\-shot into ACT and $\\pi\_0$ evaluations, maintaining comparable manipulation success rates across downsampling levels while improving action\-sampling effectiveness\. Together, PhySPRING  enables efficient and structure\-preserving spring\-\-mass reduction without sacrificing fidelity or robotic utility\.

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

## DTA\-GT: Direction\- and Topology\-Aware Graph Transformer for Neural Network Representation Learning

**Authors:** Yuxiang Zeng; Kun Xie; Yang Wang; Jigang Wen; Xiaocan Li; Guangxing Zhang; Gaogang Xie; Jiannong Cao

**ID:** 153021 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZrwF0V3Sp>) | [PDF](<https://openreview.net/pdf?id=OZrwF0V3Sp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153021>)

Architecture attribute predictors reduce the cost of neural architecture search by estimating accuracy or latency from a small set of evaluated candidates\. The key difficulty is that neural architectures are operation\-labeled DAGs: edge direction defines computational flow, but existing predictors often treat direction as a local structural cue\. We propose DTA\-GT, a Direction\- and Topology\-Aware Graph Transformer based on encoder\-wide directional consistency, which preserves directed computational semantics across node initialization, global spectral encoding, pairwise interaction, and feature update\. DTA\-GT realizes this principle with direction\- and topology\-aware node initialization, Magnetic Laplacian spectral encoding, direction\-dual structural attention, and a Direction\-Sensitive MoE\-FFN\. Across accuracy and latency prediction on NAS\-Bench\-101 and NAS\-Bench\-201, DTA\-GT consistently outperforms representative sequence\-, GNN\-, Transformer\-, and hybrid predictors under limited\-budget settings\. Ablations and Magnetic spectral controls show that the improvements come from coordinated direction\-aware stages and edge\-orientation\-sensitive spectral information, while mechanistic diagnostics confirm that the modules exhibit the intended directional behavior\. These results support encoder\-wide directional consistency as an effective design principle for architecture DAG representation\.

## Oversmoothing as Representation Degeneracy in Neural Sheaf Diffusion

**Authors:** Arif Dönmez; Ellen Fritsche; Axel Mosig; Katharina Koch

**ID:** 152216 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UhbffncO5W>) | [PDF](<https://openreview.net/pdf?id=UhbffncO5W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152216>)

Neural Sheaf Diffusion \(NSD\) generalizes diffusion\-based Graph Neural Networks by replacing scalar graph Laplacians with sheaf Laplacians whose learned restriction maps define a task\-adapted geometry\. While the diffusion limit of NSD is known to be the space of global sections, the representation\-theoretic structure of this harmonic space remains largely implicit\. In this paper, we develop a quiver\-theoretic interpretation of NSD by identifying cellular sheaves on graphs with representations of the associated incidence quiver\. Under this correspondence, learned sheaf geometries become points in a finite\-dimensional representation space\. We prove that direct\-sum decompositions of the underlying incidence\-quiver representation induce corresponding decompositions of the harmonic space reached in the diffusion limit\. This provides an algebraic interpretation of oversmoothing as representation degeneration: a conceptual framing where learned sheaves collapse toward trivial or low\-complexity summands whose global sections fail to preserve discriminative information\. Building on this viewpoint, we connect sheaf diffusion to stability, moduli, and moment\-map principles from Geometric Invariant Theory\. We introduce moment\-map\-inspired regularizers that bias learned restriction maps toward more balanced representation geometries, and we identify a structural obstruction in standard equal\-stalk architectures: when $d\_v=d\_e$, the admissibility condition for learnable stability parameters forces the trivial all\-object summand onto a stability wall\. We show that non\-uniform stalk dimensions remove this obstruction, making adaptive stability meaningful in principle\. Empirical evaluations on heterophilic benchmarks are consistent with this mechanism: breaking stalk symmetry can reduce variance or improve validation behavior on some datasets, and adaptive stability regularization becomes more effective in selected rectangular settings\. These results support the view that moment\-map regularization is a structured but dataset\-dependent geometric bias rather than a universal performance booster\. Overall, our framework interprets oversmoothing not only as a spectral pathology, but as a degeneration phenomenon in the underlying representation geometry\.

## AtlasULP: Domain\-aware Universal Link Prediction via Relation Atlas

**Authors:** Yujing Liu; Yixin Liu; Yu Zheng; Lianhua Chi; Alan Wee\-Chung Liew; Hengtao Shen; Shirui Pan

**ID:** 150816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f8yctrr8CX>) | [PDF](<https://openreview.net/pdf?id=f8yctrr8CX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150816>)

Link prediction \(LP\) is a widely applied task in graph learning\. Conventional LP approaches typically follow a dataset\-specific paradigm, requiring independent training for each graph and incurring high computational and maintenance costs in large\-scale applications\. Motivated by these limitations, recent work explores Universal Link Prediction \(ULP\), aiming to enable training\-free inference on arbitrary unseen graphs\. However, existing methods primarily rely on subgraph sampling strategies to construct universal representations, which are unable to capture higher\-order information due to the exponential growth of higher\-order neighborhoods\. As a result, they often under\-perform on graphs where long\-range signals are essential, such as biological networks\. Moreover, their prediction models are typically domain\-agnostic and lack the ability to adapt to different graph domains, leading to limited generalization\. To address these challenges, we propose an Atlas\-based Universal Link Prediction framework \(AtlasULP\), which introduces the relation atlas to capture structural associations between node pairs from both global and local perspectives, enabling a comprehensive characterization of connectivity signals across diverse graph domains\. Building upon this representation, we develop a domain\-guided prompting ULP model, which generates domain\-aware prompt tokens from contextual structures and performs prompt\-guided in\-context prediction for adaptive link inference\. Extensive experiments demonstrate that AtlasULP consistently outperforms state\-of\-the\-art methods across diverse graph domains\.

## Hierarchical Regime\-Conditioned Dynamics for Spatiotemporal Graphs

**Authors:** Jeremy Baffou; Pascal Frossard; Dorina Thanou

**ID:** 150192 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k39QrQmBiI>) | [PDF](<https://openreview.net/pdf?id=k39QrQmBiI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150192>)

Forecasting the behavior of spatio\-temporal systems often requires more than accurate predictions: models should uncover the dynamical modes governing future evolution\. Existing temporal graph and latent dynamical models achieve strong forecasting performance, but their latent representations often entangle multiple dynamical patterns, limiting interpretability\. Conversely, regime\-inference methods explicitly model such modes but typically do not support generative forecasting over graph\-structured systems\. We introduce HERON, a self\-supervised regime\-aware generative framework that unifies graph\-structured trajectory generation with regime identification\. HERON factorizes the latent state into discrete system\-level regimes, capturing global dynamical modes, and continuous entity\-level dynamics, yielding a modular regime interface compatible with existing spatio\-temporal backbones\. Crucially, the inferred regime actively conditions system dynamics, enabling regime tracking and controlled simulations under alternative dynamical modes\. Without regime annotations, HERON jointly learns forecasts and regime dynamics in a self\-supervised manner, recovering meaningful modes across controlled synthetic and real\-world datasets while maintaining competitive forecasting performance\. These results open a path toward interpretable, controllable generative modeling of spatio\-temporal dynamics\.

## GIST: Gauge\-Invariant Spectral Transformers for Scalable Graph Neural Operators

**Authors:** Mattia Rigotti; Nicholas Thumiger; Thomas Frick

**ID:** 152787 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QL5IahmmDj>) | [PDF](<https://openreview.net/pdf?id=QL5IahmmDj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152787>)

Neural operators on irregular meshes face a fundamental tension\. Spectral positional encodings, the natural choice for capturing geometry, require cubic\-complexity eigendecomposition and inadvertently break gauge invariance through numerical solver artifacts; existing efficient approximations sacrifice gauge symmetry by design\. Both failure modes break discretization invariance: models fail to transfer across mesh resolutions of the same domain, and similarly across different graphs of related structure in inductive settings\. We propose GIST \(Gauge\-Invariant Spectral Transformer\), a scalable neural operator that resolves this tension by restricting attention to pairwise inner products of efficient approximate spectral embeddings\. We prove these inner products estimate an exactly gauge\-invariant graph kernel at end\-to\-end $\\mathcal\{O\}\(N\)$ complexity, and establish a formal connection between gauge invariance and discretization\-invariant learning with bounded mismatch error\. To our knowledge, GIST is the first scalable graph neural operator with a provable discretization\-mismatch bound\. Empirically, GIST sets state\-of\-the\-art on the AirfRANS, ShapeNet\-Car, DrivAerNet, and DrivAerNet\+\+ mesh benchmarks \(up to 750K nodes\), and additionally matches strong baselines on standard graph benchmarks \(e\.g\., 99\.50\\% micro\-F1 on PPI\)\.

## Random\-Set Graph Neural Networks

**Authors:** Tommy Woodley; Matteo Tolloso; Davide Bacciu; Shireen Kudukkil Manchingal; Fabio Cuzzolin

**ID:** 148272 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z55e3q7BpN>) | [PDF](<https://openreview.net/pdf?id=z55e3q7BpN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148272>)

Graph Neural Networks deployed in safety\-critical settings must recognise when a node's neighborhood is structurally novel, conflicting, or underrepresented in the training graph; standard softmax classifiers collapse this epistemic ambiguity into a point estimate over known classes, producing confident errors on unseen structure\. We propose Random\-Set Graph Neural Networks \(RS\-GNN\), a framework that replaces the softmax head of any message\-passing backbone with a belief function over a budgeted family of focal sets\. Each node is mapped to a mass function whose pignistic projection yields the point prediction and whose induced credal\-set width quantifies epistemic uncertainty\. Focal sets are selected from class\-overlap statistics in the learned node\-embedding space, making the budget graph\-aware rather than uniform over the power set\. Across nine node\-classification benchmarks spanning homophilic and heterophilic regimes \(Cora, Coauthor, Reddit2, ArXiv, Patents, Chameleon, Squirrel, Roman Empire, Amazon\-Ratings\), RS\-GNN matches or outperforms strong probabilistic, ensemble, and credal baselines \(including Classical Ensemble, GEBM, and CaGCN\) on leave\-out\-class OOD detection, reaching AUROC of 88\.84 on Cora and 84\.18 on Chameleon\. On temporal road\-scene graphs constructed from ROAD and nuScenes, RS\-GNN improves nuScenes node\-classification accuracy from 0\.418 to 0\.593 and avoids the overconfidence collapse that softmax heads exhibit under cross\-dataset shift\. These results indicate that credal\-set width recovers an epistemic signal that scalar softmax\-derived scores cannot, particularly when graph evidence is incomplete or out of distribution\.

## FedProG: Federated Graph Learning via Server\-Side LLM Semantic Bridging and Uncertainty\-Aware Distillation

**Authors:** Haitao Wang; Haozhao Wang; Wenchao Xu; Yichen Li; Xiaoquan Yi; Tianzhe Xiao; Jingcai Guo; Ruixuan Li

**ID:** 155040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8tUxcQWc2X>) | [PDF](<https://openreview.net/pdf?id=8tUxcQWc2X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155040>)

Federated Graph Learning \(FGL\) on Text\-Attributed Graphs often encounters the missing neighbor issue\. This problem arises from structural fragmentation across dispersed clients, which restricts the effective message passing of Graph Neural Networks\. Current completion methods frequently struggle in cross\-domain, non\-IID scenarios because they lack access to external knowledge\. To address these limitations, we propose FedProG, an asymmetric framework that utilizes a frozen server\-side LLM to reconstruct missing structural contexts\. Furthermore, deploying Large Language Models locally to augment these graphs incurs prohibitive computational costs for edge devices\. We introduce a split architecture where a lightweight client\-side generator maps graph features into the LLM’s embedding space\. This allows the server to produce virtual neighbors via uploaded soft prompts\. To ensure system reliability and privacy, we implement a dual\-guard mechanism: a server\-side uncertainty filter rejects low\-confidence generations through multi\-path sampling, while a client\-side semantic consistency projector maintains utility under differential privacy\. Experiments show that FedProG improves robustness and generalization over baselines while drastically reducing client computational overhead\.

## k\-th Order Deep Homomorphism Networks

**Authors:** Takanori Maehara

**ID:** 152796 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHyHF56a42>) | [PDF](<https://openreview.net/pdf?id=QHyHF56a42>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152796>)

We develop a pattern\-algebraic framework for higher\-order graph neural networks by extending Deep Homomorphism Networks \(DHN\) from rooted patterns to $k$\-labelled patterns\. The framework captures GNN expressivity along two independent axes \-\-\- skeleton complexity $k$, controlling global structures, and pattern vocabulary $\\mathcal\{P\}$, capturing local structures\. We then introduce \\emph\{auxiliary gluing\} \($\\circledast$\), the pattern\-algebraic counterpart of the $k$\-FWL sift, and prove that this single additional operation lifts $k$\-label expressive power to $\(k\{\+\}1\)$ labels, yielding an algebraic proof of $\(k\{\+\}1\)$\-WL $\\equiv$ $k$\-FWL\. Neuralising these operations gives $k$\-DHN and $k$\-FDHN, which recover $k$\-GNN, PPGN, $\\delta$\-$k$\-LWL, $r$\-$\\ell$WL, spectral invariant GNNs, and node\-marking subgraph GNNs as special cases, with expressivity exactly characterised by the pattern closure of $\(k, \\mathcal\{P\}\)$\. The framework also resolves open expressivity separation problems in the $\\delta$\-$k$\-LWL and $r$\-$\\ell$WL hierarchies\.

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

## Unlocking Volition: Proactive Intention Decoding via Interpretable Graph Learning of Multi\-Region ECoG

**Authors:** Kaizhong Zheng; JiaJunMA; Hongru Liu; Xinjian LI; Wei Xi; Liangjun Chen; Badong Chen

**ID:** 153824 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IRTohTNxhM>) | [PDF](<https://openreview.net/pdf?id=IRTohTNxhM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153824>)

Current brain–machine interfaces \(BMI\) face fundamental limitations due to inherent latency from reliance on delayed motor cortical signals, and computational overhead, restricting their effectiveness in real\-time applications such as rehabilitation therapy\. Recent neuroscience indicates that prefrontal and sensory cortical activities precede motor execution, offering an opportunity for proactive intent prediction\. However, challenges remain in acquiring multi\-region neural data, efficiently decoding high\-dimensional signals, and ensuring model interpretability\. To address these, we developed a high\-density electrocorticography \(ECoG\)\-based paradigm based on marmosets and introduced an information\-bottleneck\-driven graph transformer \(ECoG\-IBGT\), reframing neural decoding as graph classification\. Our method achieves 99\.29% accuracy up to 400 ms before action onset with inherent interpretability, laying the foundation for reliable, low\-latency BMIs\. The source code is available at https://anonymous\.4open\.science/r/ecog\-ibgt\-code\-F2D2\.

## No Triangulation Without Representation: Generalization in Topological Deep Learning

**Authors:** Johannes S\. Schmidt; Martin Carrasco; Ernst Röell; Guy Wolf; Nello Blaser; Bastian Rieck

**ID:** 139061 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nVgjwC8P84>) | [PDF](<https://openreview.net/pdf?id=nVgjwC8P84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139061>)

Despite an ever\-increasing interest in topological deep learning models that target higher\-order datasets, there is no consensus on how to evaluate such models\. This is exacerbated by the fact that topological objects permit operations, such as structural refinements, that are not appropriate for graph data\. In this work, we extend MANTRA, a benchmark dataset containing manifold triangulations, to a larger class of manifolds with more diverse homeomorphism types\. We show that, unlike prior claims, both graph neural networks \(GNNs\) and higher\-order message passing \(HOMP\) methods can saturate the benchmark\. However, we find that this is contingent on the right representation and feature assignment, emphasizing their importance in baseline models\. We thus provide a novel evaluation protocol based on representational diversity and triangulation refinement\. Surprisingly, we find no indication that existing models are capable of generalizing beyond the combinatorial structure of the data\. This points towards a research gap in developing models that understand topological structure independent of scale\. Our work thus provides the necessary scaffolding to evaluate future models and enable the development of topology\-aware inductive biases\.

## MatchEx: Model\-Level GNN Explanations with Multi\-Granular Insights

**Authors:** Sayan Saha; Sanghamitra Bandyopadhyay

**ID:** 156763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156763>)

Graph Neural Networks \(GNNs\) are increasingly deployed in high\-stakes domains  where interpretability is crucial\. Existing model\-level explanation methods largely rely on generative models, which often produce motifs that fail to resemble real instances,  cannot account for the diversity of discriminative motifs recognized by the classifier for a target class and lack mechanisms for translating global explanations to instance\-level insights\. We present MatchEx, a framework that discovers discriminative motifs directly from real instances by optimizing a novel matching objective\. Unlike isomorphism, which can only recover identical motifs that rarely occur in real\-world graphs, this objective extends beyond exact matches to provably recover semantically similar motifs, allowing generalizable explanations\. The matching mechanism also enables projection of class level rationales onto individual graphs for faithful instance\-level insights\. When a single motif fails to explain all instances, MatchEx adaptively partitions the instances in a class into coherent subgroups with distinct rationales\. Extensive experiments across six real and synthetic datasets show that MatchEx consistently outperforms state\-of\-the\-art baselines, delivering coherent, generalizable, and multi\-granular explanations\.

## Weisfeiler and Leman Follow the Arrow of Time: Expressive Power of Message Passing in Temporal Event Graphs

**Authors:** Franziska Heeg; Jonas Sauer; Petra Mutzel; Ingo Scholtes

**ID:** 152026 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W5jWeq8Ty5>) | [PDF](<https://openreview.net/pdf?id=W5jWeq8Ty5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152026>)

An important characteristic of temporal graphs is how the directed arrow of time influences their causal topology, i\.e\., which nodes can possibly influence each other causally via time\-respecting paths\. The resulting patterns are often neglected by temporal graph neural networks \(TGNNs\)\. To formally analyze the expressive power of TGNNs, we lack a generalization of graph isomorphism to temporal graphs that captures their causal topology\. Addressing this gap, we introduce consistent event graph isomorphism, which utilizes a time\-unfolded representation of time\-respecting paths in temporal graphs\. We compare this definition with existing notions of temporal graph isomorphisms\. We highlight the advantages of our approach and develop a temporal generalization of the Weisfeiler\-Leman algorithm to heuristically distinguish non\-isomorphic temporal graphs\. Building on this theoretical foundation, we derive a novel message passing scheme for temporal graph neural networks that operates on the event graph representation of temporal graphs and experimentally evaluate it in a temporal graph classification setting\.

## GEM: A Dual\-Scale Architecture for Graph\-Level Hierarchical Representation Learning

**Authors:** Zhaowei Wu; Kaizhong Zheng; Guangmingzi Yang; Shuai Jiang; Liangjun Chen; Badong Chen

**ID:** 149511 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pad2MT4H9X>) | [PDF](<https://openreview.net/pdf?id=pad2MT4H9X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149511>)

Real\-world networks typically exhibit small\-world properties: dense local clustering yet efficient global propagation\. However, current methods struggle to reconcile this hierarchy: Graph Neural Networks \(GNNs\) suffer from over\-smoothing in long\-range modeling, while sequence/state\-space models often lack the inductive bias to preserve complex graph topology\. To bridge this gap, we propose Graph Encoding Mamba \(GEM\), a dual\-scale architecture for graph\-level hierarchical representation learning\. First, GEM employs a dual\-branch encoder that synergizes the local sensitivity of GNNs with the selective scanning of Mamba, effectively capturing both local topology and global shortcuts\. Second, a modularity\-aware hierarchical pooling mechanism is designed to retain salient community structures during graph coarsening\. Crucially, to mitigate structural redundancy from multi\-scale fusion, we incorporate an Information Bottleneck objective to distill task\-relevant structural patterns from redundant features, encouraging compact, task\-relevant representations and supporting intrinsic interpretability\. Extensive experiments on graph\-level benchmarks demonstrate that GEM improves performance across biological, social, and brain network datasets\. We further provide a lightweight node\-level adaptation on long\-range benchmarks as a boundary analysis of GEM's transferability\. Code is available at \\url\{https://anonymous\.4open\.science/r/GEM\-C34D\}\.

## GNNs Meet Sequence Models Along the Shortest\-Path: an Expressive Method for Link Prediction

**Authors:** Francesco Ferrini; Veronica Lachi; Antonio Longa; Bruno Lepri; Andrea Passerini

**ID:** 151409 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=asqTlVBye5>) | [PDF](<https://openreview.net/pdf?id=asqTlVBye5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151409>)

Graph Neural Networks \(GNNs\) often fail to capture the link\-specific structural patterns essential for accurate link prediction, since their node\-centric message passing might overlook the subgraph structures connecting two nodes\. Prior attempts to inject such structural context either suffer from high computational cost or rely on oversimplified heuristics \(e\.g\., common neighbor counts\) that cannot capture multi\-hop dependencies\. We propose SP4LP \(Shortest Path for Link Prediction\), a new framework that integrates GNN\-based node encodings with sequence modeling over shortest paths\. Specifically, SP4LP first computes node representations with a GNN, then extracts the shortest path between each candidate node pair and processes the sequence of node embeddings with a sequence model\. This design allows SP4LP to efficiently capture expressive multi\-hop relational patterns\. Theoretically, we show that SP4LP is strictly more expressive than both standard message\-passing GNNs and several leading structural feature methods, positioning it as a general and principled framework for link prediction in graphs\. Empirically, SP4LP sets a new state of the art on many standard link prediction benchmarks\.

## Noisy isomorphism: Robust expressivity of GNNs under structural perturbation

**Authors:** Ning Zhang; Mihai Cucuringu; Xiaowen Dong

**ID:** 148301 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ysNuUmj7OA>) | [PDF](<https://openreview.net/pdf?id=ysNuUmj7OA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148301>)

The expressivity of graph neural networks is predominantly characterized in a noiseless setting via binary graph isomorphism tests\. This perspective certifies whether two graphs can be distinguished, but does not quantify how robust such distinctions are under structural perturbations\. In practice, however, real\-world graphs are often corrupted by noise, where even small structural changes might lead to disproportionate distortions in learned representations\.  In this study, we generalize graph isomorphism to a noisy alignment criterion, requiring that graphs that remain identifiable under noise are embedded closer to their source than to any alternative\. This yields a margin\-based formulation of expressivity that bridges the gap between combinatorial isomorphism\-based theory and the continuous learned representations\. Notably, our framework is architecture\-agnostic and strictly generalizes classical isomorphism\-based expressivity\. We further derive certified robustness guarantees for node\-level tasks and an explicit robustness radius for graph\-level representations\.  Experiments confirm that our criteria predict and improve robustness under structural perturbations\.

## Adaptive Multi\-view Graph Contrastive Learning via Fractional Continuous Dynamics

**Authors:** Yanan Zhao; Feng Ji; Jingyang Dai; Jiaze Ma; Keyue Jiang; Kai Zhao; Wee Peng Tay

**ID:** 151789 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xzigfjpz3Z>) | [PDF](<https://openreview.net/pdf?id=Xzigfjpz3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151789>)

Graph contrastive learning \(GCL\) learns node and graph representations by contrasting multiple views of the same graph\. Existing methods predominantly rely on a small set of fixed, handcrafted views\-\-\-typically a local and a global perspective\-\-\-which fundamentally constrains their capacity to capture multi\-scale structural patterns\. We present an augmentation\-free, multi\-view GCL framework grounded in fractional\-order continuous dynamics\. By systematically varying the fractional derivative order $\\alpha\\in\(0,1\]$, our encoders produce a continuous spectrum of semantically distinct views: small values of $\\alpha$ induce localized, memory\-attenuated feature propagation, whereas values approaching $1$ recover broader, global aggregation\. Crucially, we treat $\\alpha$ as a learnable parameter, enabling the model to automatically identify informative views in a data\-driven manner, without resorting to manual view engineering\. Extensive experiments on standard node\- and graph\-level benchmarks demonstrate that the resulting representations are more robust and expressive, consistently outperforming state\-of\-the\-art GCL baselines\.

## RAMA: Resistance\-Aware Multi\-Hop Aggregation Graph Representation Learning for Robust Ethereum Account Classification

**Authors:** Zhaowei Liu; zengyang zhang; HaitaoYang; Yao Shan; Xiangfu Zhao; Yongchao Song

**ID:** 154374 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E2j4hTCc0W>) | [PDF](<https://openreview.net/pdf?id=E2j4hTCc0W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154374>)

Fraudulent behaviors in Ethereum, such as Ponzi schemes and phishing attacks, pose persistent threats to blockchain security\. Classifying high\-risk accounts is crucial for mitigating these threats\. Given the graph\-structured nature of Ethereum transactions, Graph Neural Networks \(GNNs\) are widely adopted for this task\. However, conventional GNNs rely on local aggregation and treat all edges equally, which amplifies structural noise and limits the ability to capture weak but semantically meaningful connections\. This limitation arises from the inability to distinguish informative links from spurious ones during message passing, especially in noisy and long\-range transaction graphs\. To address this, we propose RAMA, a Resistance\-Aware Multi\-hop Aggregation framework that reweights edges using resistance distance to reduce the influence of noisy links while preserving important topological information\. It also employs attention\-based multi\-hop aggregation to effectively integrate both local and global transaction patterns\. Experiments on real\-world Ethereum datasets show that RAMA consistently outperforms strong baselines in Macro\-F1 and remains robust under edge perturbations, demonstrating its effectiveness for practical account classification in blockchain environments\.

## Mitigating Over\-squashing without Rewiring: A Sheaf Effective Resistance Perspective

**Authors:** André Ribeiro Guimarães; Germano Barcelos; Amauri Souza; Diego Mesquita; Ana Luiza Tenorio

**ID:** 150297 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jCWFiEFBxj>) | [PDF](<https://openreview.net/pdf?id=jCWFiEFBxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150297>)

Graph Neural Networks \(GNNs\) often struggle to capture long\-range dependencies due to over\-squashing — a phenomenon in which the repeated compression of node embeddings into finite\-size messages causes representations to collapse\. Oversquashing is most often diagnosed as a property of the graph topology, with effective resistance serving as a principled measure of the bottleneck\. We provide a complementary view on the matter: building on cellular sheaves, we introduce sheaf effective resistance, a generalization of effective resistance that depends on the sheaf attached to the graph, and we prove that for flat vector bundles it is inversely proportional to over\-squashing sensitivity in the Jacobian sense\. The bottleneck thus need not lie in the graph itself: it can be relocated, and reduced, by adjusting the sheaf\. We instantiate this idea in FlatNSD, a simple message\-passing variant of Neural Sheaf Diffusion, and show that it implicitly learns to modulate total sheaf effective resistance, performing well on benchmarks designed to stress over\-squashing without altering the original graph topology\.

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

## Learning Subspace\-Preserving Sparse Attention Graphs from Heterogeneous Multiview Data

**Authors:** Jie Chen; Yuanbiao Gou; Chuanbin Liu; Zhu Wang; Xi Peng

**ID:** 150143 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kLvsBY3nhn>) | [PDF](<https://openreview.net/pdf?id=kLvsBY3nhn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150143>)

The high\-dimensional features extracted from large\-scale unlabeled data via various pretrained models with diverse architectures are referred to as heterogeneous multiview data\. Most existing unsupervised transfer learning methods fail to faithfully recover intrinsic subspace structures when exploiting complementary information across multiple views\. Therefore, a fundamental challenge involves constructing sparse similarity graphs that preserve these underlying subspace structures for achieving semantic alignment across heterogeneous views\. In this paper, we propose a sparse attention graph learning \(SAGL\) method that learns subspace\-preserving sparse attention graphs from heterogeneous multiview data\. Specifically, we introduce a bilinear attention factorization scheme to capture asymmetric similarities among the high\-dimensional features, which breaks the symmetry bottleneck that is inherent in the traditional representation learning techniques\. A dynamic sparsity gating mechanism then predicts a feature\-specific compression factor for adaptively controlling the topological contributions of neighbors\. Furthermore, we employ a structured sparse projection via $\\alpha$\-entmax to generate subspace\-preserving sparse attention graphs for individual views\. SAGL leverages these view\-specific graphs to conduct sparse information aggregation, yielding discriminative representations for multiview learning tasks\. In addition, we provide a rigorous theoretical analysis that bridges differentiable sparse attention and probability simplex constraints\. Extensive experiments conducted on multiple benchmark datasets demonstrate that SAGL consistently outperforms the state\-of\-the\-art unsupervised transfer learning approaches\.

## Neutral\-atom quantum features as complementary structural encodings for graph learning

**Authors:** Igor Sokolov; Mathieu Garrigues; Matthias Hecker; Lorenzo Moro; Shaheen Acheche

**ID:** 154642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5kQ4ynxal>) | [PDF](<https://openreview.net/pdf?id=C5kQ4ynxal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154642>)

Structural descriptors provide graph neural networks \(GNNs\) with positional and topological inductive biases\. However, widely used classical encodings based on random walks or Laplacian spectra emphasize specific structural statistics of a graph, leaving room for alternative descriptors\. Neutral\-atom quantum processing units \(QPUs\) can realize graph\-dependent Rydberg Hamiltonians, allowing graph topology to be probed through dynamical correlation measurements\. In this work, we use these measurements as quantum graph features \(QGFs\), providing a complementary, hardware\-derived family of structural encoding that \-\-\- as we demonstrate empirically \-\-\- is not accurately described by classical features derived from Laplacian or adjacency matrix\. By appropriately selecting the quench parameters of the Hamiltonian, we access two characteristic correlation regimes with distinct structural signatures: antiferromagnetic\-like and ferromagnetic\-like\. On an intrinsic information benchmark of 15 topological and spectral probing tasks, quantum and hybrid quantum\-classical features match or surpass classical descriptors on local topological properties\. When supplied to message\-passing, attention, and graph\-transformer backbones, hybrid quantum\-classical features yield small improvements that are within cross\-fold noise on most cells but sign\-consistent across architectures\. When comparing noiseless emulation\-derived quantum features with an end\-to\-end neutral\-atom QPU implementation, the downstream hybrid gain over the classical baseline persists on five out of six backbones\.

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

## Beyond Oversquashing: Understanding Signal Propagation in GNNs Via Observables

**Authors:** Eden Nagar; Ya\-Wei Eileen Lin; Ron Levie

**ID:** 154868 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AItejpYJ0K>) | [PDF](<https://openreview.net/pdf?id=AItejpYJ0K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154868>)

Graph Neural Networks \(GNNs\) perform computations on graphs by routing the  signal between graph regions using a graph shift operator or a message passing scheme\. Often, the propagation of the signal leads to a loss of information, where the signal tends to diffuse across the graph instead of being deliberately routed between regions of interest\. Two notions that depict this phenomenon are oversmoothing and oversquashing\. In this paper, we propose an alternative approach for modeling signal propagation, inspired by quantum mechanics, using the notion of observables\. Specifically, we model the place in the graph where the signal lies,  how much the signal is concentrated there, and how much of the signal is propagated towards a location of interest when applying a GNN\. Using these new concepts, we prove that standard spectral GNNs have poor signal propagation capabilities\. We then propose a new type of spectral GNN, termed Schrödinger GNN, which we show has a superior capacity to route the signal across the graph\.

## A Generalized Tikhonov Layer for Interpretable\-by\-design Graph Neural Networks

**Authors:** Nicolas Tremblay; Filippo Maria Bianchi; Benjamin Ricaud

**ID:** 148963 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tr3vYV6oRS>) | [PDF](<https://openreview.net/pdf?id=tr3vYV6oRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148963>)

We propose the Tikhonov layer, a graph neural network layer that is interpretable by design: once trained, its learned parameters directly reveal which node features and which aspects of the graph topology were leveraged for prediction\. In practice, the layer's propagation matrix takes the closed\-form $R = \(p\(L\)\+Q\)^\{\-1\}Q$, where $L$ is the normalized graph Laplacian, $Q = \\mathrm\{diag\}\(q\_1,\\ldots,q\_n\)$ a learnable diagonal matrix of positive node\-importance scores, and $p\(\\cdot\)$ a learnable polynomial\. For any input feature $x$, the layer output $Rx$ is the exact minimizer of a generalized graph Tikhonov problem that trades off node\-level data fidelity against a topology\-driven regularization penalty\. The learned pair $\(\\\{q\_i\\\},p\)$ constitutes a built\-in explanation: large $q\_i$ indicates that node $i$'s own features drive the prediction, while small $q\_i$ signals reliance on the local graph topology; the shape of $p$ reveals whether homophily, heterophily, or a band\-pass response is exploited\. Expressivity is preserved by routing complexity through a dedicated, arbitrarily deep $Q$\-network that produces the importance scores, while the Tikhonov layer itself remains transparent\. We prove that distinct explanations necessarily yield distinct propagation operators, preventing degenerate explanations by design\. Additionally, the Tikhonov layer provides, in a single layer, a global receptive field under mild support\-connectivity conditions, mitigating both oversmoothing and oversquashing\. Experiments on standard graph classification benchmarks confirm that the model matches \(and sometimes outperforms\) opaque baselines while producing interpretable and faithful explanations\.

## Avoiding Feature Collapse in Graph ODEs via Hysteretic Topology Evolution

**Authors:** Qinhan Hou; Jing Tang

**ID:** 150833 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=exnh1WJ5TA>) | [PDF](<https://openreview.net/pdf?id=exnh1WJ5TA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150833>)

Graph neural ordinary differential equations provide continuous\-time propagation on graphs, but their long\-time behavior is largely determined by the asymptotic structure of the mixing operator\. We show that diffusion\-style Graph ODEs with positive irreducible mixing face a \*monostability trap\*, where node features converge to a rank\-one consensus subspace\. This reveals a structural limitation of positive diffusion\-style continuous graph propagation: within this consensus class, exact long\-time avoidance requires changing the effective support; otherwise, smooth suppression should be interpreted as finite\-horizon or metastable mitigation\. We address this by introducing a \*hysteretic mechanism\* for topology evolution, where candidate edges carry latent bistable potentials in a double\-well landscape\. A node\-feature\-conditioned force field evolves these potentials, and a smooth sigmoid gate converts them into differentiable propagation weights\. We prove the consensus trap theoretically, show that idealized support separation yields block\-wise rather than global consensus, and evaluate the framework on real\-world benchmarks\.

## Neural Networks With Dense Weights Are Not Universal Approximators

**Authors:** Levi Rauchwerger; Stefanie Jegelka; Ron Levie

**ID:** 148632 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wIy5W0BG7A>) | [PDF](<https://openreview.net/pdf?id=wIy5W0BG7A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148632>)

We investigate the approximation capabilities of dense neural networks\. While universal approximation theorems establish that sufficiently large  architectures can approximate arbitrary continuous functions when there are no restrictions on the weights, we show that dense neural networks do not possess this universality\. Our argument is based on a model compression approach, combining the weak regularity lemma with an interpretation of feedforward networks as message passing graph neural networks\. We consider ReLU neural networks subject to natural constraints on weights and input and output dimensions, which model a notion of dense connectivity\. Within this setting, we demonstrate the existence of Lipschitz continuous functions that cannot be approximated by such networks\. This highlights intrinsic limitations of neural networks with dense layers and motivates the use of sparse connectivity as a necessary ingredient for achieving true universality\.

## Toward a Unified Statistical Theory of Unsupervised Pretraining and Supervised Neural Knowledge Graph Learning

**Authors:** Suqi Liu; Miklos Z\. Racz; Jifan Zhang

**ID:** 151698 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yh143DG7uc>) | [PDF](<https://openreview.net/pdf?id=Yh143DG7uc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151698>)

Knowledge graph learning provides a powerful framework for representing and inferring structured knowledge, with broad practical applications\. However, the scarcity of relation\-specific labeled triples per entity hinders the training of expressive models, and the ad hoc design of scoring functions limits generalizability and lacks theoretical grounding\. We address both issues with a theoretically grounded, end\-to\-end training framework that extends and subsumes existing methods\. Our framework is a two\-stage procedure: unsupervised pretraining over heterogeneous corpora followed by supervised learning with diverse relationship types\. We establish a nonasymptotic risk bound that disentangles pretraining approximation error from labeled\-sample complexity, formally quantifying the benefit of large\-scale unlabeled data for downstream knowledge prediction\. Synthetic experiments validate each theoretical component, and real\-world experiments confirm the effectiveness of our approach on large\-scale knowledge graph benchmarks\.

## PLATO: Pointer Learner for Agent and Task Openness

**Authors:** Alireza Saleh Abadi; Leen\-Kiat Soh; Daniel A Redder; Adam Eck; Prashant Doshi

**ID:** 150534 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hQ5UdY6Jie>) | [PDF](<https://openreview.net/pdf?id=hQ5UdY6Jie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150534>)

Open agent systems \(OASYS\) are increasingly prevalent in real\-world domains where the sets of agents and tasks change unpredictably over time\. Such openness, including agent openness \(AO\) and task openness \(TO\), poses a fundamental challenge to multi\-agent reinforcement learning \(MARL\), which typically assumes fixed state and action spaces\. Existing methods address openness only partially: padding and masking approaches introduce artificial bounds, while recent graph\-based or hypergraph methods handle one dimension of openness but still depend on restrictive assumptions\. In this paper, we introduce Pointer Learner for Agent and Task Openness \(PLATO\), a pointer\-network\-based actor combined with a centralized graph neural network \(GNN\) critic, trained with multi\-agent proximal policy optimization under a centralized training and decentralized execution paradigm\. Our pointer\-based actor outputs distributions directly over the current task set\. This directly supports changing action spaces without masking or retraining\. Our GNN critic encodes agent–task interactions as a graph that changes shape with task and agent composition\. Together, these components consider AO and TO without the boundedness of existing approaches\. We formalize PLATO in a Task\-and\-Agent\-Open Markov Game \(TaAgO\-MG\), extending prior task\-open formulations, and prove it is well\-defined over the resulting unbounded state and action spaces\. We evaluate PLATO with the Methods for Open Agent Systems Evaluation Initiative \(MOASEI\) wildfire suppression domain, an environment designed for open multi\-agent system evaluation, and we demonstrate strong performance and more consistent zero\-shot generalization than state\-of\-the\-art baselines in OASYS\.

## Self\-Tuning Graph Filters via State\-Dependent Operator Composition

**Authors:** Amir Ghazizadeh; Mahyar Alinejad; George Atia; Rickard Ewetz; Hao Zheng

**ID:** 153395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LfgU9MTrxj>) | [PDF](<https://openreview.net/pdf?id=LfgU9MTrxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153395>)

Most graph neural networks propagate information through a fixed\-coefficient polynomial filter applied uniformly across every node and every layer\. However, the appropriate filter varies along two distinct axes that such a parameterization cannot accommodate\. Within a single graph, different nodes benefit from different mixtures of low\-pass smoothing, high\-pass contrast, and pass\-through behavior\. Across graphs, signal propagation dynamics themselves differ, with some graphs benefiting from long\-range propagation across many hops while others require damping to prevent over\-smoothing\. The appropriate filter is therefore not a single fixed object at all, but a state\-dependent composition whose behavior changes according to a node's current representation and its propagation history\.  We propose Castor, a self\-tuning graph filter that realizes this composition through state\-dependent decisions made at every step of propagation\. A router reads each node's current state together with its initial state, and emits per\-node mixing weights over three primitives, namely low\-pass smoothing, high\-pass contrast, and identity\. A learnable per\-hop coefficient then determines how much of the most recent change in the propagation is carried forward, accelerating the iteration when positive and damping it when negative\. Setting the coefficient to zero recovers standard first\-order propagation\. Across fourteen standard node\-classification benchmarks spanning the full homophily spectrum, a single Castor instance ranks top\-three on every dataset and achieves an average rank of $2\.07$, more than $3\.5$ ranks ahead of the next\-best of fourteen baselines\.

## Cardinality\-Decomposed Loss for Heterogeneous GNNs

**Authors:** Parul Maheshwari; Amulya Paruchuri; Alireza Sahami Shirazi

**ID:** 150315 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j0w8m1D6QO>) | [PDF](<https://openreview.net/pdf?id=j0w8m1D6QO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150315>)

Graph Neural Networks trained on heterogenous bipartite graphs form a common basis in recommendation systems\. These graphs often express relations that vary in cardinality, for example, user\-item preferences are one\-to\-many and user\-attribute features are one\-to\-one\. Traditionally, a unique loss function is applied for all of the network components which is often Bayesian Personalized Ranking \(BPR\)\. While BPR works well for the recommendation task, we find that it causes attribute embeddings to collapse to near\-random geometry — a silent failure that leaves standard ranking metrics largely unaffected and therefore invisible to conventional evaluation\. This in turn pollutes user node embeddings, which are shaped by both edge types simultaneously, hurting downstream tasks like personalization, segmentation, etc\. Here we propose a Cardinality\-Decomposed Loss \(CDL\) that combines both Cross Entropy \(CE\) and BPR to enable the model to collectively optimize for relations across cardinalities\. As we implement this loss, we also confirm the conflict between CE and BPR by showing that the two losses compete against each other in the shared encoder's parameter space\. We evaluate CDL on five datasets spanning two structural configurations — one\-to\-one attributes on user nodes \(MovieLens\-1M, Last\.fm\-360K, PayPal Audience Factory, BookCrossing\) and on item nodes \(Yelp\) — and find that CDL consistently improves discriminability in attribute embeddings\. We also show that whenever these attributes contain meaningful preference signal, we also see improvement in the ranking task \(measured by NDCG\)\. On the other hand, when attributes are weakly correlated with preferences, there is an inherent tension between the two objectives\. We use a lambda parameter to navigate this trade\-off, and a lambda\-sweep reveals that dataset behavior is governed by two graph properties — semantic alignment and topology leakage\. Semantic alignment captures whether the one\-to\-one attribute is predictive of user preferences, while topology leakage captures whether message passing already encodes attribute structure implicitly through the graph's connectivity\.

## IncAgg: Efficient Memory\-Enhanced Graph Learning via Incremental Aggregation

**Authors:** Xingyue Shi; Zhichao Hou; Jiahao Zhang; Suhang Wang; Tong Zhao; Neil Shah; Xiaorui Liu

**ID:** 150515 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hX0lLa5bcj>) | [PDF](<https://openreview.net/pdf?id=hX0lLa5bcj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150515>)

Scaling Graph Neural Network \(GNN\) training to large graphs commonly relies on mini\-batch sampling, but incomplete neighborhoods can degrade approximation quality and training stability\. Memory\-enhanced methods mitigate this issue by reusing historical node embeddings to approximate full\-neighborhood aggregation; however, they reconstruct pseudo full\-neighborhood messages inside every training iteration, repeatedly fetching out\-of\-batch memories and aggregating over large neighborhoods\. In this work, we identify this under\-examined inner\-loop bottleneck and propose IncAgg, an efficient memory\-enhanced GNN training framework based on incremental aggregation\. IncAgg periodically pre\-aggregates historical embeddings into a global memory baseline, and during mini\-batch training propagates only the current in\-batch residual before fusing it with the stored global context\. This design preserves historical full\-neighborhood information at a configurable refresh frequency while avoiding per\-iteration out\-of\-batch memory fetching and aggregation, without modifying the underlying GNN architecture\. We provide theoretical analyses showing that IncAgg reduces gradient\-carrying aggregation and memory\-access costs while retaining the residual\-based stability principle of memory\-enhanced estimators\. Extensive experiments on four large\-scale benchmarks and four representative GNN backbones show that IncAgg matches or improves the accuracy of strong memory\-enhanced baselines while achieving substantial training acceleration, with up to $18\.6\\times$ speedup in individual settings and up to $13\.8\\times$ geometric\-mean speedup on large graphs\.

## Robust Surrogate Modeling for Explainable Graph Neural Networks

**Authors:** Zhuomin Chen; Jingchao Ni; Hojat Allah Salehi; Xu Zheng; Dongsheng Luo

**ID:** 155571 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4cPBjztcLN>) | [PDF](<https://openreview.net/pdf?id=4cPBjztcLN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155571>)

Graph Neural Networks \(GNNs\) have achieved remarkable performance in a wide range of graph\-related learning tasks\. However, explaining their predictions remains a challenging problem, especially due to the mismatch between the graphs used during training and those encountered during explanation\. Most existing methods optimize soft edge masks on weighted graphs to highlight important substructures, but these graphs differ from the unweighted graphs on which GNNs are trained\. This distributional shift leads to unreliable gradients and degraded explanation quality, especially when generating small, sparse subgraphs\. To address this issue, we propose explaining a robust surrogate whose explanations provide a faithful proxy for those of the original model\. Specifically, we train this surrogate model through an iterative re\-weighting strategy that alternates between identifying explanation subgraphs and adapting the model to the resulting weighted graph distribution, supporting stable explanation refinement while preserving the validity of the soft\-mask relaxation\. We evaluate our method on multiple benchmark datasets using different GNN backbones and explanation methods\. Experimental results show that our method consistently improves explanation quality and can be flexibly integrated with different architectures\.

## Do Graph Neural Networks Learn Generalizable Algorithms for Clustering Graphs?

**Authors:** Mitchell Black; Sanjoy Dasgupta; Yusu Wang

**ID:** 151157 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=car3LKiN8G>) | [PDF](<https://openreview.net/pdf?id=car3LKiN8G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151157>)

We study the ability of graph neural networks \(GNNs\) to learn generalizable algorithms for graph clustering\. While previous work has shown that GNNs can learn to cluster graphs in\-distribution, it is unclear exactly what algorithms these networks are learning, or whether they generalize to unseen graphs that differ significantly from their training data\.   In this paper, we pick a standard cut\-based clustering cost function and train GNNs of various types to minimize this function on a suite of training examples\. We then test whether the resulting networks are able to generalize to much larger graphs, or other families of graphs\. We complement our empirical findings with a host of theoretical results that illustrate the range of possible heuristics that these different GNNs could be implementing\. Finally, we use probes on trained networks to narrow down the heuristics actually being learned\.   Our findings show that there is generalization across the board but that GNNs of different expressivity\-\-\-MPNNs versus PPGNs, for instance\-\-\-learn markedly different algorithms\.

## When, Where, What: Structural Guarantees for Travel Time Prediction on Temporal Graphs

**Authors:** Gabriel Buginga; Gabriel D Vilela; Jincheng Zhou; Mohit Tawarmalani; Bruno Ribeiro

**ID:** 155204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7W9m004XiM>) | [PDF](<https://openreview.net/pdf?id=7W9m004XiM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155204>)

Accurate traversal \(travel\) time distribution estimation on temporal graphs benefits from satisfying six structural properties: \*\*when\*\* \(ordering, flexibility\), \*\*where\*\* \(composition with prefix equivariance\), and \*\*what\*\* \(non\-Markov, snapshot\)\. No existing temporal graph learning method jointly satisfies these properties\. We propose PATH\-HAZ, a discrete\-time hazard model that provides guarantees of all six requirements\. It composes per\-step PMFs via dynamic programming for spatially consistent predictions across shared paths, while cross\-attention over historical graph snapshots encodes confounder\-induced dependencies between non\-adjacent steps on the path\. Evaluated on simulated logistics and real\-world high\-speed rail data, PATH\-HAZ surpasses both point\-estimate \(19\.3% RMSE improvement\) and probabilistic baselines \(56% CRPS reduction\), while also allowing for detailed structural explainability of delays\.

## Rank Is Not Capacity: Spectral Occupancy for Latent Graph Models

**Authors:** Nikolaos Nakis; Panagiotis Promponas; Konstantinos Tsirkas; Katerina Mamali; Eftychia Makri; Leandros Tassiulas; Nicholas A Christakis

**ID:** 153250 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MdpohqZVhG>) | [PDF](<https://openreview.net/pdf?id=MdpohqZVhG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153250>)

Graph representation learning has become a standard approach for analyzing networked data, with latent embeddings widely used for link prediction, community detection, and related tasks\. Yet a basic design choice, the latent dimension, is still treated as a brittle hyperparameter, fixed before training and tuned by held\-out performance\. Learned factors are also identifiable only up to rotation and rescaling, so the nominal rank rarely coincides with the quantity that governs model behavior\. We propose Spectral Prefix Extraction and Capacity\-Targeted Representation Analysis \(Spectra\), which replaces rank as the unit of analysis with the spectrum of a learned positive semidefinite kernel, trace\-normalized so that spectra are comparable across fits\. The normalized eigenvalues form a distribution on the simplex, and their Shannon effective rank acts both as a summary of learned capacity and as a controllable training\-time coordinate: a single scalar shapes this realized dimension during training, and bisection targets any desired value within the rank cap\. To theoretically support that, we show local regularity and monotonicity of the realized\-dimension profile\. Across collaboration, social, biological, and infrastructure networks, Spectra traces performance\-\-capacity frontiers that make the trade\-off between predictive accuracy and realized dimension visible\. It performs competitively with strong link\-prediction baselines, yields aligned lower\-capacity views of the same fitted model through spectral prefixes, and provides a principled handle on capacity in the overparameterized regime\. Capacity thus becomes a property of the fitted model rather than a hyperparameter of the training\.

## GraphIP–Bench: How Hard Is It to Steal a Graph Neural Network, and Can We Stop It?

**Authors:** Kaixiang Zhao; Bolin Shen; Yuyang Dai; Shayok Chakraborty; Yushun Dong

**ID:** 139174 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gVarjIBpLT>) | [PDF](<https://openreview.net/pdf?id=gVarjIBpLT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139174>)

Graph neural networks \(GNNs\) deployed as cloud services can be \\emph\{stolen\} through \\emph\{model\-extraction attacks\}, which train a surrogate from query responses to reproduce the target's behaviour, and a growing line of ownership defenses tries to prevent or trace such theft\. The title of this paper asks two questions: \\emph\{how hard is it to steal a GNN?\}, and \\emph\{can we stop it?\} Prior work cannot answer either, because experiments use inconsistent datasets, threat models, and metrics\. We introduce \\emph\{GraphIP\-Bench\}, a unified benchmark which evaluates both sides under a single black\-box protocol\. It integrates twelve extraction attacks, twelve defenses spanning watermarking, output\-perturbation, and query\-pattern\-detection families, ten public graphs covering homophilic, heterophilic, and large\-scale regimes, three GNN backbones, and three graph\-learning tasks, and it reports fidelity, task utility, ownership verification, and computational cost on shared splits, queries, and budgets\. We further add a joint attack\-and\-defense track which runs every attack on every defended target and measures watermark verification on the resulting surrogate, which exposes the protection that a defense retains after extraction\. The empirical picture is short: stealing a GNN is easy at medium query budgets and most defenses do not change this; several watermarks verify reliably on the protected model but lose most of their verification signal on the extracted surrogate, which exposes a gap that single\-model evaluations miss; and heterophilic graphs are systematically harder to steal, while a cross\-architecture mismatch between target and surrogate reduces but does not prevent extraction\. Code: \\href\{https://anonymous\.4open\.science/r/GraphIPBench\-C641\}\{anonymous\.4open\.science/r/GraphIPBench\-C641\}\.

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

## From Nodes to Pixels: Topological and Structural Two\-View Graph Imaging

**Authors:** Md Joshem Uddin; Soham Changani; Sai K Navuluru; Cuneyt Akcora; Baris Coskunuzer

**ID:** 148590 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wd6T1tqNIh>) | [PDF](<https://openreview.net/pdf?id=wd6T1tqNIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148590>)

Graph learning still lacks a broadly reusable input interface comparable to patches in vision or tokens in language\. Unlike images or text, graphs are irregular, vary in size and density, and are invariant under many equivalent node labelings, making it difficult to standardize inputs across tasks and architectures\. We introduce \*\*G2Image\*\*, a fixed\-budget graph imaging framework that converts each graph into two complementary image\-like views\. \*\*TopoGrid\*\* provides a stable topological view by encoding an intrinsic bifiltration as a compact multipersistence surface grid, while \*\*GraphGrid\*\* provides a higher\-bandwidth structural view by aggregating edge densities between groups defined by intrinsic node scores\. Both views are permutation\-invariant and come with resolution\-controlled stability guarantees\. Because the resulting representations are fixed\-size tensors, they can be processed by lightweight 2D encoders and aligned through a supervised cross\-view contrastive objective\. Across graph classification and molecular prediction benchmarks, \*\*G2Image\*\* achieves strong average performance among the compared methods, improves over single\-view and standard fusion variants, and extends to attribute\-rich molecular graphs without changing the overall architecture\. These results suggest that fixed\-budget graph images offer a practical and reusable interface for graph representation learning\.

## Matrix\-Free Stochastic Training of Low\-Rank Spectral Graph Learning via Randomized Adaptive Spectral Estimation

**Authors:** Mingqi Yang; Yanming Shen

**ID:** 156123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0F08MV66N8>) | [PDF](<https://openreview.net/pdf?id=0F08MV66N8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156123>)

Large\-graph spectral learning promises global, trainable propagation beyond local neighborhoods, but explicit spectral layers remain difficult to use in stochastic large\-graph training: their bases are commonly obtained by a full\-graph spectralization step and their graph\-wide contexts are naturally full\-batch\. Matrix\-free polynomial filters avoid eigensolvers and train stochastically, but tie the response to finite propagation bases; explicit spectral\-subspace models offer more flexible global responses, but usually pay for full\-graph basis construction and context evaluation\. We introduce Randomized Adaptive Spectral Estimation \(RASE\), a matrix\-free stochastic training framework for explicit low\-rank spectral\-context layers\. RASE constructs a refreshable randomized block\-Krylov/Ritz basis from probe vectors and sparse matrix\-\-vector products, reuses probe\-derived summaries as control variates for mini\-batch estimates of the spectral context, and keeps the response module replaceable across polynomial, Chebyshev, and transformer\-style instantiations\. We analyze Krylov/Ritz polynomial\-action exactness for the probe\-generated subspace and a control\-variate variance identity that isolates when the mini\-batch context estimator reduces variance\. Across 14 node\-classification benchmarks, RASE matches its eigenbasis\-trained reference within seed noise where the eigensolver is feasible \($\{\\sim\}67\{\\times\}$ faster basis on PubMed\), and trains the same backbone on the largest graphs where eigensolver preprocessing exceeds a 30\-minute budget\. The contribution is therefore not a new spectral filter family, but a training route that makes explicit low\-rank spectral\-context layers matrix\-free and mini\-batch trainable\.

## A Unified Uncertainty Representation for Graph Neural Networks via Doubly\-Spectral Stochastic Expansion

**Authors:** Fred Xu; Thomas Markovich; florence regol; Yizhou Sun

**ID:** 151405 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aviTmQybX5>) | [PDF](<https://openreview.net/pdf?id=aviTmQybX5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151405>)

Reliable deployment of graph neural networks requires calibration, out\-of\-distribution \(OOD\) detection, and robustness to distribution shift, yet existing methods typically address these requirements with separate models and objectives\. A key obstacle is the lack of a single learned representation whose structure can serve all three tasks through different readouts\. Inspired by spectral approaches in graph signal processing and polynomial chaos theory, we model uncertainty\-bearing node embeddings as random graph signals: graph Fourier filters capture structural variation, while a scalar orthogonal\-polynomial chaos coordinate captures latent stochastic variation\. This yields a \\emph\{doubly\-spectral stochastic\} \(DSS\) expansion in which the mean coefficient carries evidence for classification and energy\-based OOD scoring, higher\-order coefficients encode structured logit variation, and quadrature averaging turns that variation into a calibration\-sensitive predictive distribution\. Calibration thus uses the quadrature\-averaged predictive distribution, OOD detection uses the mean\-logit energy score, and distribution\-shift robustness uses the corresponding DSS branch as a regularized spectral residual when paired with a deterministic encoder\. Under mild conditions this representation universally approximates Gaussian\-latent random graph signals with exponentially decaying truncation error\. The resulting model, \\emph\{DSS\-GNN\} \(Doubly\-Spectral Stochastic GNN\), can be used standalone or as a residual branch alongside a deterministic encoder \(\\emph\{DSS\-Hybrid\}\)\. In standalone form, DSS\-GNN achieves the lowest Brier score among the compared uncertainty\-aware baselines on all 14 node classification benchmarks without post\-hoc correction; in hybrid form, DSS\-Hybrid achieves the best AUROC on most node\-OOD settings, competitive cross\-graph OOD performance, and the strongest shifted accuracy among compared baselines on all 7 GOOD concept\-shift benchmarks under standard ERM training\.

## Efficient Dynamic Algorithms for Graph Neural Networks with Non\-Linearity

**Authors:** Kiarash Banihashem; MohammadTaghi Hajiaghayi; Mahdi JafariRaviz; Silvio Lattanzi; Danny Mittal

**ID:** 154492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DC1kP2puyf>) | [PDF](<https://openreview.net/pdf?id=DC1kP2puyf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154492>)

Graph Neural Networks \(GNNs\) are widely used for representation learning on graphs, but most methods assume static topologies, making them inefficient on evolving networks where edges change over time\. Existing dynamic approaches either model graph evolution through temporal GNN architectures without focusing on efficient dynamic maintenance, or are restricted to linear propagation models based on Personalized PageRank\.  In this work, we study how to efficiently maintain node representations for non\-linear GNN dynamics under edge insertions and deletions\. For a broad class of standard activation functions, we develop a residual\-based dynamic algorithm that selectively propagates local errors via push operations, maintaining an approximation to the evolving fixed point without full recomputation\. We prove that our method achieves amortized $O\(1/\\epsilon\)$ update time per graph change under a degree\-normalized error guarantee\. Our approach uses a potential\-based analysis in a degree\-scaled norm and, in contrast to prior work on the linear case, requires no randomness assumptions on either the update sequence or the input vector\. For the linear special case, we additionally provide an exact dynamic algorithm via low\-rank matrix inverse updates\. Experiments on benchmark datasets show that incorporating non\-linearity improves accuracy while preserving efficient update performance, yielding a scalable and theoretically grounded framework for dynamic GNNs\.

## gHAWK: Structural Encoding for Scalable Training of Graph Neural Networks on Knowledge Graphs

**Authors:** Humera Sabir; Fatima Farooq; Ashraf Aboulnaga

**ID:** 148812 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uw0STVeH8D>) | [PDF](<https://openreview.net/pdf?id=uw0STVeH8D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148812>)

Knowledge Graphs \(KGs\) are a rich source of structured data, and graph neural networks \(GNNs\) are the dominant tool for learning over them\. However, existing message\-passing GNNs struggle to scale to large KGs because they rely on the iterative message passing process to learn graph structure\. This process is inefficient, especially under mini\-batch training, where a node sees only a partial view of its neighborhood\. In this paper, we address this problem and present gHAWK, a novel and scalable GNN training framework for large KGs\. The key idea is to precompute structural features for each node that capture its local and global structure before GNN training even begins\. Specifically, gHAWK introduces a preprocessing step that computes: \(a\) Bloom filters to compactly encode local neighborhood structure, and \(b\) TransE embeddings to represent each node's global position in the graph\. These features are then fused with any domain\-specific features \(e\.g\., text embeddings\), producing a node feature vector that can be used with any GNN backbone\. Equipped with these structural priors, the GNN no longer needs to rediscover graph structure, significantly improving memory usage, convergence, and model accuracy\. Extensive experiments on large datasets from the Open Graph Benchmark demonstrate that gHAWK improves accuracy on both node property prediction and link prediction tasks\. Remarkably, gHAWK enables simple GNNs to outperform more complex relation\-aware ones, suggesting that careful preprocessing can substitute for architectural complexity in KG learning\.

## A Topological Encoder Decoder Framework for Temporal Graph Learning

**Authors:** Ronan Buck; Kiarash Shamsi; Tran Gia Bao Ngo; Astrit Tola; Baris Coskunuzer; Cuneyt Akcora

**ID:** 151161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZEj9pgOP7>) | [PDF](<https://openreview.net/pdf?id=cZEj9pgOP7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151161>)

Most temporal graph learning methods reduce future prediction to discriminative inference over past interactions, focusing on edges or node labels for a largely persistent set of nodes\. This view breaks down when new nodes and edges appear, since the future graph becomes a new object with changing size, composition, and structure\. We address this gap by framing temporal graph prediction as an inverse topology problem\. Instead of predicting edges directly, we first predict a multiscale topological descriptor of the future graph and then reconstruct a plausible future snapshot that realizes this descriptor under inductive constraints\. This approach makes global structure and node churn explicit prediction targets and produces forecasted graphs on which downstream tasks can be evaluated without retraining\. Across 14 temporal graph datasets, we evaluate TopoGED on node, link and graph property prediction and compare it against state\-of\-the\-art temporal graph models\. TopoGED achieves a significant improvement in node\-level forecasting accuracy over the strongest baseline, with a macro average of 0\.49 versus 0\.05\. It also outperforms baselines in 60% of graph\-structure metric evaluations and yields a substantial increase in macro\-average edge prediction metrics, from near\-zero to 0\.12\. Our results show that topology\-guided graph forecasting can predict inductive future snapshots whose structure supports multiple downstream evaluations\.

## Bias, Measurement Error, and Double\-Dipping: When Can GNN Convolutions Help Brain Connectome Prediction?

**Authors:** Tommaso Castellani; Jiaqi Li; Muriah D Wheelock; Rezwana R Razzaque; Helmut Laufs; Hong Chen; Claire Donnat

**ID:** 153204 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N3upYxYotA>) | [PDF](<https://openreview.net/pdf?id=N3upYxYotA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153204>)

Graph Neural Networks \(GNNs\) are an important tool for fMRI\-based prediction, where empirical functional connectivity matrices serve both as node features and as the basis for graph construction\. However, recent studies \(and our own experiments\) show that these methods often fail to outperform simpler graph\-agnostic baselines\. We propose a statistical explanation for this failure by formulating connectome prediction as an errors\-in\-variables \(EIV\) problem: the true connectome is latent, while the observed covariance or correlation matrix is a noisy finite\-time\-series estimate\. In a linear asymptotic setting, we decompose the effect of graph convolution into three mechanisms: smoothing\-induced bias and variance reduction, graph estimation error, and a double\-dipping effect arising when the same noisy matrix determines both topology and features\. Under a latent community model adapted to this neuroscience problem, we identify a narrow favorable regime in which message passing can improve prediction: the regression target must be community\-smooth, and the time\-series length must lie in a window between the graph\-estimation and raw\-noise limits\. Simulations validate this decomposition by isolating oracle, independently estimated, and same\-sample graphs, while real\-data experiments illustrate that standard connectome GNN pipelines often fall outside this regime\. Our results clarify when graph convolutions can help brain connectome prediction, and why they often do not\.

## Spectral Graph Sparsification Preserves Representation Geometry in Graph Neural Networks

**Authors:** Sanjukta Krishnagopal

**ID:** 149066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t7wLUvSJVu>) | [PDF](<https://openreview.net/pdf?id=t7wLUvSJVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149066>)

Spectral graph sparsification is a classical tool for reducing graph complexity while preserving Laplacian quadratic forms\. In graph neural networks \(GNNs\), sparsification is often used to accelerate computation while maintaining predictive performance\. In this work, we study a complementary representation\-level question: does sparsification preserve the geometry of learned embeddings?  For polynomial\-filter GNNs, we prove that any $\\epsilon$\-spectral sparsifier induces $O\(\\epsilon\)$ perturbations in polynomial graph filters, multilayer hidden representations, and their Gram matrices\. These guarantees imply stability of squared pairwise distances, class means, and covariance structure in embedding space\. We further establish finite\-time training stability: under smoothness and boundedness assumptions, gradient descent on dense and sparsified graphs produces weight trajectories whose separation grows at most proportionally to the sparsification distortion\.  Empirically, effective\-resistance sparsification validates the predicted perturbation chain on synthetic graphs and preserves hidden representation geometry on real datasets\. In our experiments, the gram matrix and training dynamics show low divergence even under substantial sparsification, consistent with the predicted stability under spectral sparsification\. Hidden Gram preservation strongly predicts neighborhood preservation and class\-centroid stability across FashionMNIST, Cora, and Paul15\. Together, these results show that spectral sparsification preserves not only graph operators, but also the representation geometry that supports downstream use of GNN embeddings for interpretability\.

