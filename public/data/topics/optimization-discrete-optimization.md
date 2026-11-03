# Optimization / Discrete Optimization

优化 / 离散优化

29 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Federated Distributionally Robust Neural Combinatorial Optimization with Convergence Guarantees

**Authors:** Ryunosuke Hamada; Daisuke Hatano; Yuichi Takano

**ID:** 155993 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1JoBgRVNAk>) | [PDF](<https://openreview.net/pdf?id=1JoBgRVNAk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155993>)

Neural combinatorial optimization \(NCO\) solvers generalize poorly under distribution shift, yet robustness across heterogeneous problem distributions is essential for real\-world deployment where no single client should be left behind\. Group distributionally robust optimization \(Group DRO\) offers a principled remedy, but requires pooling data that often cannot be shared due to confidentiality or regulatory constraints\. Federated learning removes data\-sharing requirements; however, existing federated DRO methods cannot accommodate the policy\-gradient estimators used in modern NCO\. Specifically, prior analyses rely on Lipschitz losses with bounded variance\. In contrast, the REINFORCE policy\-gradient estimator multiplies stochastic costs by score functions, causing variance to scale with cost magnitude and violating these standard assumptions\. We close this gap by replacing Lipschitz\-loss conditions with a bounded\-cost assumption\. This allows us to control cost\-dependent variance and establish the first federated Group DRO framework with $O\(1/\\sqrt\{T\}\)$ convergence guarantees\. Our analysis applies to any REINFORCE\-trained model under bounded costs, including NCO solvers as a special case\. Experiments on capacitated vehicle routing\-\-\-one of many applicable domains including scheduling and packing\-\-\-demonstrate the necessity of federated training for minority\-distribution clients\. We show that while na\\"ive Group DRO suffers from catastrophic weight collapse, our KL\-regularized formulation avoids this collapse\. Furthermore, it provides a formal worst\-group robustness certificate with no empirical performance penalty compared to standard federated averaging\.

## From Walls to Synergy: A Joint LLM\-Evolution Framework for MILP Solvers

**Authors:** Ziao Guo; Yuan Feng; Chenhao Ying; Junchi Yan

**ID:** 153103 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NvJ3gFAFu1>) | [PDF](<https://openreview.net/pdf?id=NvJ3gFAFu1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153103>)

Machine learning \(ML\) methods have achieved notable success in enhancing individual components of mixed\-integer linear programming \(MILP\) solvers\. However, most existing approaches focus on single\-component enhancement, neglecting critical interactions among components and often yielding diminishing returns when multiple approaches are integrated\. The emergence of large language models \(LLMs\) provides a promising paradigm for jointly optimizing multiple solver components within a unified framework\. In this paper, we propose Jolly\-MILP, an LLM\-guided framework to jointly optimize presolving, cut selection, and branching variable selection in exact MILP solvers\. Our approach introduces a synergistic Coordinator to align component\-level generators and a hierarchical Controller to produce adaptive, multi\-stage strategies\. Extensive experiments on nine MILP datasets demonstrate that Jolly\-MILP consistently outperforms both ML\-based approaches and existing LLM\-based methods\. These results show that explicit joint optimization, rather than isolated component\-wise enhancement, is crucial for acquiring further gains in exact MILP solving, offering a new pathway for more advanced solver design\.

## Learning\-Augmented Approximation for Unrelated\-Machines Makespan Scheduling

**Authors:** Kaito Baba; Evripidis Bampis; Giorgos Mitropoulos

**ID:** 153033 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OVhc0m9SE8>) | [PDF](<https://openreview.net/pdf?id=OVhc0m9SE8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153033>)

Recently, Antoniadis et al\. \(ICLR 2025\) proposed a framework for incorporating predictions to approximate NP\-hard selection problems\. Despite its simplicity, this approach tightly matches theoretical lower bounds, making its generalization highly compelling\. We address an open question raised in the work of Antoniadis et al\., concerning the extension of this approach to other important problems outside the class of selection problems, such as scheduling\. We develop a learning\-augmented algorithm for the makespan minimization problem on unrelated machines, denoted by $R\|\|C\_\{\\max\}$\. By using predictions of heavy job assignments, we achieve a polynomial\-time $\(1\+\\varepsilon\)$\-approximation for accurate predictions that smoothly degrades to a worst\-case 2\-approximation as the error increases\. We conclude our work with an empirical analysis of our method\.

## DualSAT: A Dual\-Branch GNN\-Transformer Framework for SAT Solving

**Authors:** Wenzhu Yang; Zhanshan Li; Jingyao Li

**ID:** 150240 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ji9sYRZ4X8>) | [PDF](<https://openreview.net/pdf?id=ji9sYRZ4X8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150240>)

Existing graph neural network\-based methods for Boolean satisfiability \(SAT\) solving are generally constrained by limited local receptive fields, making it difficult to adequately capture the long\-range dependencies between variables and clauses in SAT instances\. Moreover, these methods overlook the multi\-solution nature of SAT instances\. Consequently, their expressive power and generalization performance remain limited\. To address these issues, we propose DualSAT, a novel neural framework for the SAT problem, designed to enhance the phase selection heuristic of SAT solvers\. Specifically, DualSAT adopts a novel dual\-branch graph neural network that separately encodes local structural information and global structural information in the graph, and then fuses them through an attention\-based cross\-branch feature fusion module\. An assignment decision head is further introduced to generate the initial assignment prediction of variables\. This prediction process requires only a single forward pass, achieving a favorable balance between expressive power and inference efficiency\. Furthermore, to account for the multiple solutions nature of SAT instances, we design a two\-stage training strategy that combines supervised and unsupervised learning to improve the generalization performance of the model\. Experimental results on multiple datasets show that, as an end\-to\-end assignment prediction model, DualSAT significantly outperforms NeuroSAT and NeuroBack\. In addition, we integrate DualSAT into the classical SAT solver CaDiCaL, where it increases the number of solved instances by up to 11\.6% and reduces the number of conflicts by up to 9\.21% on SAT competition problem sets\.

## RGF: Recursive Generative Framework for the Edge\-Cut Separable Problems

**Authors:** Bo Peng; Rongzhen Ye; Yaohua Li; Weilin Luo; Hai Wan; Jiahao Xu; Zexian Liang

**ID:** 152119 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VOCORbL6JY>) | [PDF](<https://openreview.net/pdf?id=VOCORbL6JY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152119>)

The Maximal Independent Set \(MIS\), Dominating Set \(DS\), and Vertex Cover \(VC\) problems are fundamental combinatorial optimization problems with wide\-ranging applications\. We identify a key property of these problems: by finding a cut in the graph and determining the states of vertices associated with the cut, the graph can be decomposed into multiple subgraphs whose solutions are independent of each other\. Therefore, we classify MIS, DS, and VC as Edge\-Cut Separable Problems \(ECSPs\)\. This property enables a natural divide\-and\-conquer strategy, which significantly reduces the computational complexity and allows neural networks to scale to large\-scale graphs that were previously intractable\. Based on this property, we propose a recursive framework that leverages this property to approximately solve ECSPs, namely \\ours\. Our framework consists of two major components: a partitioner that identifies a cut in the graph, and a predictor that solves the cut\-determination sub\-problem \(CDSP\) to determine the states of vertices associated with the cut\. By recursively applying these components, RGF generates a complete solution for the original ECSP instance\. Additionally, through partial prediction, the memory consumption is significantly reduced, enabling RGF to handle real\-world large graphs\. Experimental results validate the advantages of RGF: the performance of our method is up to 2\.13\\% better than the state\-of\-the\-art machine learning \(ML\)\-based approach, and our approach can handle real\-world large graphs with up to 11M vertices\.

## EDISCO: Equivariant Discrete Diffusion for Euclidean Combinatorial Optimization

**Authors:** Ruogu Chen; Jie Han

**ID:** 148560 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wzGLCsImQ1>) | [PDF](<https://openreview.net/pdf?id=wzGLCsImQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148560>)

Euclidean combinatorial optimization problems \(ECOPs\), such as the Traveling Salesman Problem \(TSP\) and Capacitated Vehicle Routing Problem \(CVRP\), possess inherent symmetries under the two\-dimensional Euclidean group E\(2\), including rotations, reflections, and translations\. Existing learning\-based methods, including recent diffusion\-based methods, rely on data augmentation or regularization to approximate E\(2\)\-equivariance\. This paper presents EDISCO, the first discrete diffusion model for ECOPs with exact E\(2\)\-invariant generative distributions over node\-index solutions\. EDISCO introduces an E\(2\)\-equivariant edge\-score network coupled with a categorical continuous\-time Markov chain over discrete edge variables, and exact posterior sampling provides efficient multi\-step inference\. This design gives EDISCO a local geometric inductive bias: edge neighborhoods with the same relative geometry and combinatorial context are represented consistently regardless of absolute position or orientation, making learning more efficient and inference more robust than non\-equivariant methods\. EDISCO outperforms previous learning\-based state\-of\-the\-art solvers on synthetic TSP from 100 to 10000 nodes and CVRP from 50 to 2000 customers, while using only 33\-\-50\\% of the training instances\. Trained only on uniform synthetic data, EDISCO also outperforms competing learning\-based baselines under spatial distribution shift and CVRP constraint\-tightness shift\. Code is available at https://anonymous\.4open\.science/r/EDISCO\-7F54\.

## Constructive Neural Policies for the Quadratic Assignment Problem via Multi\-Expert Imitation

**Authors:** Julien Canitrot\-Paradis; H\. Murat AFSAR; Jean\-Yves Pierron; Chokri Mraidha

**ID:** 152789 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QK9X8K6gkZ>) | [PDF](<https://openreview.net/pdf?id=QK9X8K6gkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152789>)

The quadratic assignment problem \(QAP\) is widely considered one of the most difficult NP\-hard combinatorial optimization problems, and one that   remains challenging for neural constructive methods\. We introduce CIMP, a Constructive policy trained by Imitation from Multi\-expert teachers and   built around an explicit Pairwise pre\-conditioning block\. CIMP reaches a 11\.02% mean optimality gap on the 133 QAPLIB instances with published   reference values, across 5 fixed same\-config seeds, in a single constructive pass — without local search or per\-instance refinement — with   inference times between 0\.1 and 3\.1 seconds per instance\. The model is trained on 400 synthetic instances with n ≤ 25\. The most recent published   neural reference reporting full QAPLIB results is SAWT \[Tan and Mu, ICML 2024\], a learn\-to\-improve \(L2I\) method that iteratively refines an   assignment per instance after training on 5,120 synthetic instances, and reports a 26\.8% mean gap\. CIMP operates in a strictly more constrained   learn\-to\-construct \(L2C\) regime and from a much smaller training budget, yet attains a substantially lower mean gap\. The pre\-block builds a   state\-dependent facility–location representation before scoring, a hybrid context\-biased decoder mixes learned content similarity with   QAP\-specific algorithmic bias terms, and a sequence\-distribution distillation objective is derived from a diversity\-filtered pool of heuristic   teachers\. Family\-wise and size\-conditioned analyses, supported by a secondary normalized score, indicate that the gain is broadly consistent   across QAPLIB families and across instance sizes beyond the training range\.

## SeqDiCO: Sequence\-oriented Diffusion for Scale\-Generalizable Neural Combinatorial Optimization

**Authors:** Yu Wang; Qiaolin Lu; Yang Wu; Bohao Qu; Shirui Pan; Yi Chang; Chengqi Zhang

**ID:** 149604 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=osLraeFVlW>) | [PDF](<https://openreview.net/pdf?id=osLraeFVlW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149604>)

Diffusion\-based neural combinatorial optimization \(NCO\) has recently shown promise for routing problems by generating solutions through denoising or reconstruction\. Most existing diffusion solvers, however, define the generative process over full\-instance solution structures, such as adjacency matrices or heatmaps\. This instance\-level formulation ties the learned reconstruction distribution to the problem size observed during training, making it difficult to transfer models trained on small instances to substantially larger ones\. In this paper, we propose SeqDiCO, a sequence\-oriented diffusion framework for scale\-generalizable neural combinatorial optimization\. The key idea is to move diffusion from full\-instance solutions to fixed\-endpoint sequence subproblems\. Given two endpoints and a set of intermediate nodes, SeqDiCO learns a local denoising operator that reconstructs the open path connecting the endpoints from corrupted structural observations\. Since such local sequence patterns are reusable across instance sizes, the same operator trained on small instances can be repeatedly composed to solve larger routing problems\. During inference, SeqDiCO uses this operator for both construction, by growing a solution through receding\-horizon local reconstruction, and refinement, by replacing selected subpaths in an existing solution\. Experiments on TSP and CVRP show that SeqDiCO consistently outperforms representative diffusion\-based and autoregressive neural solvers under cross\-scale evaluation\. Trained only on 100\-node instances, SeqDiCO generalizes to 10K\-node problems, reducing the optimality gap by up to 51\\% over SOTA neural solvers, while achieving up to $10\\times$ faster inference on representative large\-scale benchmarks\.

## UECO: A Unified Encoder with Structure\-Aware Attention Mixture via Iterative Edge Evolving for Neural Combinatorial Optimization

**Authors:** Wenzheng Pan; Shuyi Yan; Nuoyan Chen; Yiyang Qu; Jiale Ma; Junchi Yan

**ID:** 153347 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M2lqt23VO7>) | [PDF](<https://openreview.net/pdf?id=M2lqt23VO7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153347>)

Despite the promise of Neural Combinatorial Optimization \(NCO\), recent literature has increasingly coupled \*decision paradigms\*, \*training objectives\*, and \*problem classes\* with specific backbone architectures, limiting generic model design and fair cross\-paradigm evaluation\. We propose UECO, a simple yet effective \*\*U\*\*nified \*\*E\*\*ncoder for \*\*C\*\*ombinatorial \*\*O\*\*ptimization with a structure\-aware attention mixture scheme, where a lightweight module defined upon graph\-based locality is interleaved with conventional \(global\) node\-focused attention blocks to dynamically evolve edge representations and inject local topological information into attention scores\. Instead of fusing static edge features in a single step, UECO thereby integrates local and global messages in a progressive and problem\-agnostic manner\. UECO is orthogonal to task\-specific decoders, and works seamlessly with \*Local Construction\* \(LC\), \*Global Prediction\* \(GP\), and \*Adaptive Expansion\* \(AE\) paradigms, across node\- or edge\-oriented problems, symmetric or asymmetric tasks, and sparse or dense graphs, for supervised, reinforcement, or generative learning\. Extensive experiments show that, via plug\-in substitution of encoders, UECO consistently improves solution and generalization quality over diverse backbones and task scales on TSP, ATSP, CVRP, ACVRP, MIS, MaxClique, and MaxCut\.

## Rectified Policy Rollouts with Hierarchical Expert Guidance for Neural Combinatorial Optimization

**Authors:** Wenzheng Pan; Nuoyan Chen; Jiaxi Liu; Jiale Ma; Junchi Yan

**ID:** 151243 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bpt10w03zk>) | [PDF](<https://openreview.net/pdf?id=bpt10w03zk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151243>)

In the field of Neural Combinatorial Optimization \(NCO\), Reinforcement Learning \(RL\) stands out for its ability to naturally enforce complex constraints via its auto\-regressive decision pattern\. To mitigate the longstanding challenges, e\.g\., reward sparsity and sample inefficiency in the vast combinatorial action space which causes ineffective training, subpar performance, and poor scalability, we propose CORectifier, a novel NCO solver learned under the hierarchical gated rectification mechanism to regularize the arbitrary exploration: partial policy\-predicted actions in a trajectory are probabilistically replaced with high\-quality segments from reference solutions\. CORectifier prompts the model with tri\-level optimal signals, operating at the batch, instance, and sub\-instance levels with fragments of diverse lengths injected at random decision steps\. This Rectified RL \(RRL\) paradigm helps develop optimality\-aware and sample\-efficient RL learners while maintaining their sequential\-decision manner for constraint satisfaction, delivering a new perspective to hybridize RL and SL/IL for NCO with improved utility rate of limited supervision\. Sufficiently extensive experiments on Traveling Salesman Problem \(TSP\), Asymmetric TSP \(ATSP\), Prize\-Collecting TSP \(PCTSP\), Capacitated Vehicle Routing Problem \(CVRP\), Knapsack Problem \(KP\), Job\-Shop Scheduling Problem \(JSSP\), and Single Machine Total Weighted Tardiness Problem \(SMTWTP\), across synthetic and real\-world benchmarks, show superior quality than RL baselines by up to 59\.7%\.

## SimpleEvol: Efficient Intelligence Conversion via Less Human Prior in Automated Heuristic Design

**Authors:** Jianghan Zhu; Cong Zhang; Rongjie Zhu; CHI ZHANG; Zhiguang Cao

**ID:** 150637 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gcWZNhOoOE>) | [PDF](<https://openreview.net/pdf?id=gcWZNhOoOE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150637>)

Large language models \(LLMs\) have emerged as powerful tools for automated heuristic design \(AHD\), enabling iterative generation and refinement of heuristics\. However, the dominant paradigm embeds LLMs as narrow, fixed components, such as crossover or mutation, within heavily hand‑engineered evolutionary frameworks\. We argue this misapprehends LLMs\. It treats them as specialized tools rather than general reasoners, constrains them to low‑level operations, and underutilizes their autonomy\. Moreover, the extensive human priors in these frameworks violate the bitter lesson principle that general methods scaling with computation surpass hand‑crafted solutions\. This raises a key question: \*which AHD framework designs best convert stronger LLM capabilities into better heuristics?\* To address this, we propose metrics for AHD framework handcraftedness \(AHI\) and intelligence conversion efficiency \(ICE\)\. Evaluating ten LLMs across three challenging optimization problems, we obtain a notable finding that frameworks with fewer human priors consistently yield higher ICE\. Based on this finding, we propose SimpleEvol, which removes nearly all structural constraints and allows the LLM to operate autonomously\. SimpleEvol consistently achieves the highest ICE, often by a large margin\. Our results challenge the trend toward complex AHD pipelines and point to a simpler and more model‑centric alternative, suggesting that reducing human priors is a more effective strategy to scale up with model intelligence\.

## SAG\-Sep: Sparse Augmented Graphs and Onion\-Guided Search for Rounded Capacity Cut Separation

**Authors:** Haoran Liu; Guanyi Wang; Yu Yang

**ID:** 148394 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yAJk2oHY8u>) | [PDF](<https://openreview.net/pdf?id=yAJk2oHY8u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148394>)

Rounded capacity cuts \(RCCs\) are among the most effective cuts for capacitated vehicle\-routing relaxations, but exact separation is computationally prohibitive at scale\. Existing heuristic and neural separators can be fast, but often fail to produce sufficiently many effective cuts within practical separation budgets\. We introduce SAG\-Sep, a separator that scores node membership in RCC\-inducing subsets across vehicle\-count levels from a fractional LP solution in a single encoder forward pass, avoiding the iterative predict\-and\-coarsen inference used by NeuralSEP\-style separators\. SAG\-Sep encodes the LP solution as a Sparse Augmented Graph \(SAG\), adding flow\-informed multi\-hop edges that expose long\-range routing structure without densifying attention\. Beyond LP\-aware sparse encoding, we observe that high\-value exact RCCs are typically nested, organizing into onion\-like subset families, and SAG\-Sep's node scores track subset nesting depth\. This motivates Onion\-MBP \(Margin\-Band Probing\), a training\-free subset\-level search that explores nodes near the score margin while generating nested proposals, converting independent node scores into structurally coordinated RCC candidates\. On the NeuralSEP benchmark with $N=1000$ customer instances, SAG\-Sep with Onion\-MBP reduces the average root gap by 17\.7% relative to the strongest NeuralSEP baseline, while the single\-pass SAG\-Sep separator achieves a roughly 30\-fold per\-iteration neural separation speedup\. Our findings suggest that LP\-aware sparse encoding and the nested structure of high\-value cuts are structural patterns worth leveraging in neural separation more broadly\.

## MIRAGE: Duality\-Inspired MILP Augmentation for Representation Learning

**Authors:** Ziao Guo; Shiyue Wang; Jiayuan Yang; Junchi Yan

**ID:** 150478 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hl7ySZqDvt>) | [PDF](<https://openreview.net/pdf?id=hl7ySZqDvt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150478>)

Learning high\-quality representations of mixed\-integer linear programming \(MILP\) is crucial for advancing machine learning \(ML\)\-based methods, yet remains challenging due to the discrete nature of MILPs and their extreme sensitivity to small perturbations\. Although contrastive learning has proven highly effective for representation learning in domains such as computer vision, designing effective data augmentations for MILPs is particularly difficult\. To address this challenge, we propose MIRAGE, a principled data augmentation framework grounded in the invariance of the piecewise\-affine dual price function induced by the branch\-and\-bound \(B&amp;B\) algorithm\. Viewing this dual function as a recorded, solver\-level surrogate of the MILP's lower\-bound structure, we derive two complementary augmentation certificates that act as its right\-hand and objective\-side projections\. Both certificates are provably invariant under the same dual price function on the recorded B&amp;B tree, and therefore preserve either the structural similarity of the search tree or the optimality of the original optimal solution\. Empirically, we integrate MIRAGE with ML models for two significant downstream tasks—learning to branch and predict\-and\-search—and observe consistent performance improvements across multiple benchmarks\. By grounding MILP data augmentation in a single, solver\-induced duality quantity, our work provides a principled and effective approach to MILP representation learning\.

## NLD4CO: Neural Langevin Dynamics for Combinatorial Optimization

**Authors:** Jiale Ma; Wenzheng Pan; Binghao Cai; Xihe Zhang; Junchi Yan

**ID:** 149843 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mshiN8rReo>) | [PDF](<https://openreview.net/pdf?id=mshiN8rReo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149843>)

Langevin Dynamics \(LD\) provides a principled framework for solving combinatorial optimization problems \(COPs\) via gradient\-guided stochastic search\. However, classical LD faces two bottlenecks: 1\) the utilization of uniform initialization may affect its convergence speed; 2\) when applied to COPs such as routing problems that cannot be naturally formulated as Quadratic Unconstrained Binary Optimization \(QUBO\), classical LD suffers from slow convergence and inferior performance compared to existing learning\-to\-construct \(L2C\) methods, as it requires manually designed discrete proposals for updates\. These proposals are typically local and induce abrupt transitions in the solution space, hindering escape from local optima and degrading performance\. To address these issues, we propose NLD4CO, a unified framework that synergizes data\-driven learning with LD\. It introduces two instantiations: explicit\-gradient \(EG\) and implicit\-gradient \(IG\)\. NLD\-EG accelerates sampling efficiency for energy\-based problems via neural warm\-start initialization\. NLD\-IG utilizes the corrective direction predicted by a consistency model as an implicit score function to guide the search, making structured, globally coordinated transitions for general COPs\. Extensive evaluations on MIS, MWIS, TSP, and CVRP demonstrate that NLD4CO achieves SOTA performance, delivering superior solution quality with competitive or lower runtime\.

## Learning to Solve Compositional Geometry Routing Problems

**Authors:** Mingfeng Fan; Jianan Zhou; Jiaqi Cheng; Yifeng Zhang; Jie Zhang; Guillaume Sartoretti

**ID:** 150073 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kvdydED2s3>) | [PDF](<https://openreview.net/pdf?id=kvdydED2s3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150073>)

We study the Compositional Geometry Routing Problem \(CGRP\), a unified superclass of traditional routing problems that covers point\-only, line\-only, area\-only, and arbitrary hybrid task geometries, providing a broad abstraction for real\-world routing scenarios\. Beyond standard point\-based routing, CGRP with non\-point tasks can be inherently asymmetric, tightly coupled travel routes with the intrinsic path, and enlarges the action space with numerous feasible yet often irrelevant options, thereby posing significant challenges for both representation learning and decision\-making\. To address these challenges, we propose DiCon, a differential attention–assisted solver with contrastive learning, as a plug\-and\-play framework that tackles the problem from two complementary angles\. First, we introduce a differential attention mechanism that actively suppresses the probability mass on less competitive candidate actions\. Second, we design a double\-level contrastive learning objective to promote robust global instance representations and regularize geometry\-aware task representations\. Extensive experiments demonstrate that DiCon achieves strong performance, broad versatility, and superior generalization across diverse CGRP instances with different compositions\.

## PISG: Constraint\-Aligned Signal Amplification for Diffusion\-Based Combinatorial Optimization

**Authors:** Yuming Zhang; Xianchen Zhou; Hongxia Wang

**ID:** 155482 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5G4RbpOCB8>) | [PDF](<https://openreview.net/pdf?id=5G4RbpOCB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155482>)

Diffusion\-based solvers have become a prominent approach to neural combinatorial optimization\. At inference time, they assign each decision variable a prediction score\. A greedy decoder ranks candidates by these scores and checks hard constraints to ensure feasibility\. Top\-ranked candidates should be both promising and jointly feasible, making prediction\-\-constraint alignment critical\. When this alignment is weak, greedy decoding skips constraint\-violating candidates and falls back to lower\-ranked alternatives, degrading solution quality\. Existing test\-time methods improve search, sampling, or decoding, but do not directly strengthen this alignment before decoding\. We observe that trained denoisers already carry constraint\-aligned structural signals\. Building on this observation, we propose Perturbed Instance\-Structure Guidance \(PISG\), a training\-free method that amplifies these signals at test time\. At each denoising step, PISG constructs a structure\-degraded prediction and extrapolates the unperturbed prediction away from it\. The resulting guided prediction improves candidate rankings before constrained decoding\. Signal analysis shows that this guidance concentrates on constraint\-critical variables rather than uniformly rescaling scores\. Under greedy decoding and without downstream refinement, PISG improves all 16 TSP solver\-scale pairs across DIFUSCO, T2T, FastT2T, and StruDiCO, and all four MIS\-ER solvers, with gains up to \+8\.4\\%\. These results identify prediction\-constraint alignment as an effective test\-time enhancement direction for diffusion\-based combinatorial optimization\.

## PACE: Partial\-state Amortized Constraint Editing for Neural Combinatorial Optimization

**Authors:** Bohao Li; Chenhao Yuan; Ying Li; Pei He; Yangming Guo

**ID:** 149179 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sJ8pDLLENR>) | [PDF](<https://openreview.net/pdf?id=sJ8pDLLENR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149179>)

We propose PACE, Partial\-state Amortized Constraint Editing, which treats task\-native feasible partial states as the common semantic object for neural combinatorial optimization, unifying edit learning, constraint\-preserving editing, anytime closure, and test\-time scaling across routing and graph combinatorial optimization\. Existing neural combinatorial optimization methods expose complementary strengths: constructive and adaptive expansion solvers keep meaningful partial solutions but couple them to serial or method\-specific growth, while global prediction, diffusion, masked reconstruction, and complete\-solution refinement provide scalable guidance yet often refine heatmaps, noisy solutions, reconstruction targets, or perturbed full outputs\. These semantics make learning, search, and test\-time scaling act on the same state object\. PACE learns amortized constraint editing by ranking candidate edits conditioned on the current feasible partial state; a constraint\-preserving transition $\\Gamma\_I$ commits only edits that preserve legal continuation and extendability; and task\-native closure $\\mathrm\{Comp\}\_I$ maps any extendable intermediate feasible partial state to a task\-terminal feasible output\. Budgeted refinement then spends extra inference\-time compute through deeper edit steps, additional refinement rounds, or broader candidate sets along the same trajectory\. We instantiate these semantics across TSP, ATSP, CVRP, MIS, MVC, MCL, and MCut, covering edge\-oriented routing and node\-oriented graph combinatorial optimization\. Theoretical guarantees are structural rather than optimality claims, covering task\-wise soundness, constructive completion, state\-space closure in the extendable subset, terminal feasible completion at any editing depth, and elite\-pool nondegradation\. Empirically, PACE is competitive and budget\-controllable, including ATSP\-500 at 0\.247\\% Drop, MIS RB\-\[800\-1200\] at 2\.00\\%, and MVC at 0\.07\\%\.

## Relaxation\-Aligned State Control for Test\-Time Scaling in Generative Combinatorial Optimization

**Authors:** Bohao Li; Ying Li; Pei He; Yangming Guo

**ID:** 150993 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dkHKGHN1xC>) | [PDF](<https://openreview.net/pdf?id=dkHKGHN1xC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150993>)

Generative solvers for combinatorial optimization benefit from additional test\-time compute when their refinement states remain aligned with task relaxations\. We introduce RAGenCO, a relaxation\-aligned test\-time scaling framework for generative combinatorial optimization\. The central idea is to treat projection onto a task relaxation as a state control primitive: refinement first maintains a projected control state, and only then forms the task\-dependent decoder input or expands candidates\. For TSP and ATSP, Sinkhorn projection aligns matrix states with the cycle\-cover relaxation during refinement and decoding\. For MIS and MVC, Bernoulli projection controls refinement on the independent\-set side, while raw logits are retained for terminal greedy decoding because their ordering carries the decoder signal\. Best\-of\-$B$ branching then reallocates compute by expanding candidates around aligned control states rather than sampling from unconstrained logits\. Because these operations are used only at inference, the diffusion training objective remains unchanged\. Under equal runtime budgets, this alignment of control state, decoder input, and branching yields a strong quality\-runtime trade\-off on TSP and ATSP and competitive results on MIS and MVC\.

## Don't Waste Population: Post\-Anneal Refinement for Combinatorial Optimization

**Authors:** Yuma Ichikawa

**ID:** 155562 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ewSWxLXWS>) | [PDF](<https://openreview.net/pdf?id=4ewSWxLXWS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155562>)

Modern GPU\-native solvers for combinatorial optimization exploit parallelism by evolving large populations of relaxed candidates; yet, their post\-processing collapses this computational effort into a single, rounded solution\. We show that the discarded replicas of Parallel Quasi\-Quantum Annealing \(PQQA\) form an implicit elite archive that contains basin\-level information recoverable after annealing\. We introduce Iterative Path\-Relinking Polish \(I\-PRP\), a deterministic, training\-free post\-anneal operator that leaves the PQQA inner loop unchanged\. I\-PRP polishes the top rounded elites, traverses cost\-guided relinking paths from the current best elite toward the others, re\-polishes intermediate states to cross basin boundaries, and iterates only under strict improvement\. The operator never degrades the paired upstream polish, terminates after a finite number of updates, and reduces to the original polish when the population collapses to a single basin\. Across QUBO and graph\-coloring benchmarks, I\-PRP preserves saturated cases while improving PQQA on rugged multi\-basin instances, revealing that parallel annealing populations contain reusable search structures beyond their best replicas\.

## Unifying Sparsity and Discreteness: One\-Shot Pruning for Quantized LLMs via Discrete Optimization

**Authors:** Haozhen Zhang; Hanyuan Zheng; Teng Hou; Zhaogeng Liu; Yi Chang; Bin Gu

**ID:** 151050 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dMShldodM4>) | [PDF](<https://openreview.net/pdf?id=dMShldodM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151050>)

Pruning and quantization are two dominant techniques that effectively address the computational and storage burdens of large language model \(LLM\) inference on edge devices\.  Recently, one\-shot pruning has gained particular attention for its ability to identify weight supports via optimization without retraining\.  However, integrating such methods seamlessly with quantization for further model lightweighting is non\-trivial\.  The discreteness of quantization shatters their required variable continuity, inevitably collapsing this integration into a decoupled pruning\-quantization pipeline with inherently suboptimal outcomes\. To tackle this problem, we propose Quantization\-aware One\-shot Pruning \(QOP\), which directly optimizes the quantized weights under sparsity and discreteness constraints, thereby explicitly capturing the impact of quantization on pruning within its objective\.  Specifically, QOP generalizes the alternating direction method of multipliers to sparse\-constrained discrete optimization, enabling the identification of the high\-quality support and the update of quantized weights\. Theoretically, via the well\-conditioned approximation obtained by a slight perturbation, we establish convergence to a stationary feasible point and provide the convergence rate\.  Extensive experiments across various LLMs, sparsity levels, and quantization settings demonstrate that QOP consistently outperforms existing baselines in terms of both average accuracy and perplexity under weight quantization\.

## Learning to Search, Searching to Learn: A Closed\-Loop Framework for Large\-Scale Vehicle Routing

**Authors:** Yongji Fu; Yi Zhou; Gaojie Jin; Guanqun Cao

**ID:** 150054 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l72ITmuuVm>) | [PDF](<https://openreview.net/pdf?id=l72ITmuuVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150054>)

Scaling neural solvers to large Vehicle Routing Problems \(VRPs\) runs into two recurring difficulties\. To stay within compute budgets, scalable solvers tend to rely on partitioning, local candidate restriction, or staged decisions, which limit the global structure that ultimately drives solution quality\. To improve the final solution, many neural pipelines fall back on a classical search, but use it as a one\-shot post\-processor\. The model predicts, search repairs, and no sustained feedback is formed between them\. We propose $\\textit\{LSSL\}$ \(Learning to Search, Searching to Learn\), a closed\-loop learning\-search framework for large\-scale VRP that addresses both difficulties in one framework\. LSSL predicts a search\-friendly guidance heatmap on a sparse candidate graph\. A classical heuristic backend then uses this heatmap to refine the incumbent solution, and the structural state returned by the backend is fed back to recondition the model\. As a result, learning and search interact within a closed loop, rather than operating as two detached stages\. Built on a sparse diffusion transformer over an O\($\\textit\{NK\}$\) candidate graph, the loop scales to ultra\-large instances on a single consumer\-grade GPU without hard decomposition\. Experiments on large\-scale TSP and CVRP benchmarks demonstrate that LSSL achieves superior scalability, efficiency, and solution quality\. Ablation studies further reveal that the closed learning–search loop accounts for a substantial portion of the observed performance gains\.

## Euclidean Score\-Based Generative Modeling with Permutation Semantics

**Authors:** Gaël Heck; Nassim Bourarach; Sylvie Le Hégarat\-Mascle; Nicolas Lermé

**ID:** 154221 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FJgavPHMxU>) | [PDF](<https://openreview.net/pdf?id=FJgavPHMxU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154221>)

Generative modeling over permutations is challenging because permutations are discrete structured objects, whereas many powerful generative samplers, including score\-based diffusion models, are formulated in continuous spaces\. Existing diffusion\-based approaches typically bridge this mismatch either by relaxing permutations into continuous permutation surrogates or by designing discrete diffusion processes with specialized transition kernels\. We propose a geometric alternative based on the coordinate ordering of centered vectors\. Sorting a centered vector maps it to a permutation, and the sorting operation partitions the space into permutation\-indexed regions whose facet adjacencies correspond to adjacent swaps between permutations\. In this view, the learned score controls how probability mass is transported across sorting regions, thereby inducing transitions between neighboring permutations through their shared boundaries\. The resulting sampler remains close to standard score\-based diffusion: train in the centered Euclidean space, run the reverse diffusion, and sort once at the end\. Experiments across a variety of standard benchmark tasks such as jigsaw puzzle reconstruction \(structured prediction\), sorting 4\-digit MNIST numbers \(ordering\), the traveling salesman problem \(combinatorial optimization\), and preference\-based ranking show state\-of\-the\-art performance while remaining computationally efficient, especially compared with discrete generative methods\.

## Differentiable Knapsack and Top\-k Operators via Dynamic Programming

**Authors:** Germain Vivier\-Ardisson; Michael E Sander; Axel Parmentier; Mathieu Blondel

**ID:** 153641 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Joe3lARuyi>) | [PDF](<https://openreview.net/pdf?id=Joe3lARuyi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153641>)

Knapsack and Top\-$k$ operators are useful for selecting discrete subsets of variables\. However, their integration into neural networks is challenging as they are piecewise constant, yielding gradients that are zero almost everywhere\.  In this paper, we propose a unified framework casting these operators as dynamic programs, and derive differentiable relaxations by smoothing the underlying recursions\.  On the algorithmic side, we develop efficient parallel algorithms supporting both deterministic and stochastic forward passes, and vector\-Jacobian products for the backward pass\. On the theoretical side, we prove that Shannon entropy is the unique separable binary regularization choice for the local DP smoothing that yields permutation\-equivariant operators, and characterize regularizers inducing sparse selections\.  On the experimental side, we demonstrate our framework on a benchmark on learning to predict Knapsack solutions, an extension of discrete VAEs, and a constrained dynamic assortment RL problem\.

## Regularized Large Neighborhood Search

**Authors:** Germain Vivier\-Ardisson; Laurent Demonet; Axel Parmentier; Mathieu Blondel

**ID:** 148920 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDP4mHrRYM>) | [PDF](<https://openreview.net/pdf?id=uDP4mHrRYM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148920>)

Operations research practitioners typically tackle NP\-hard combinatorial problems using large neighborhood search \(LNS\), a scalable heuristic that iteratively refines a current solution by locally re\-optimizing subsets of its variables\. In contrast, most existing approaches for integrating combinatorial optimization layers into neural networks still assume access to an exact global solution, which is computationally intractable\. We bridge this gap by introducing regularized LNS \(RLNS\)\. By regularizing or perturbing local subproblems, we turn the LNS heuristic into an efficient MCMC sampler over the combinatorial set of feasible solutions, with associated Fenchel\-Young losses\. Under entropic regularization, we prove that RLNS performs exact block Gibbs sampling\.  Furthermore, adjusting the number of RLNS iterations allows us to interpolate between pseudolikelihood and exact maximum likelihood estimation, for end\-to\-end learning without global solvers\. We demonstrate our approach on $k$\-subset selection, generalized assignment, and stochastic vehicle scheduling problems\.

## Meta$^n$: Recursive Self\-Improvement through Emergent Depth

**Authors:** Zae Myung Kim; Young\-Jun Lee; Seungyeon Jwa; Dongyeop Kang

**ID:** 151012 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dbmUO9RPNq>) | [PDF](<https://openreview.net/pdf?id=dbmUO9RPNq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151012>)

Self\-improving LLM agents typically improve answers, not the $\\textit\{process\}$ by which answers are improved: their search loops and mutation rules are held fixed by design\. We introduce $meta^n$, a framework for $\\textit\{recursive\}$ self\-improvement in which a single universal meta\-operation $\\Omega$ is applied repeatedly to build a hierarchy of meta\-layers whose depth is sized by convergence rather than prescribed\. Each layer observes execution traces from below, diagnoses failure patterns, and emits executable code \(strategic guidance via pre\-processing and reusable functions via a code library\) whose effects cascade downward\. Inter\-layer conditioning permits up to $\\prod\_\{d=2\}^\{n\} k\_d$ effective strategy\-tactic combinations across $n$ layers rather than $\\sum\_d k\_d$\. An evolutionary orchestration mode maintains a growing archive of candidate chains with fitness\-weighted parent selection and cross\-candidate inspiration\. Across seven benchmarks \(combinatorial optimization, two text classification tasks, terminal agent tasks, mathematical discovery, symbolic regression, algorithm speedup\), $meta^n$ beats prior self\-improving agents on all five \(of seven\) benchmarks where they apply, with the largest gap on CO\-Bench \(0\.849 test vs\. Gödel Agent's 0\.000 and OpenEvolve's 0\.816\)\. Layers specialize without prescription and their roles emerge at depth: generic primitives at depth 2 propagate as cross\-task callables, task\-aware routing emerges at depth 3, and deeper layers refine via specialization\. Code and data will be released publicly\.

## HyCO: A Hybrid Neural Solver for Combinatorial Optimization

**Authors:** Yuheng Li; Di Yang; Haipeng Chen; Yanhai Xiong

**ID:** 149753 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ncwBmlZFlv>) | [PDF](<https://openreview.net/pdf?id=ncwBmlZFlv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149753>)

Sequential reinforcement learning \(RL\) solvers and global diffusion model \(DM\) solvers for neural combinatorial optimization exhibit complementary failure modes under an optimization\-regret view\. The former enjoys small marginal regret in the early construction stage, but suffers from horizon\-wise compounding errors with super\-linear regret growth; the latter avoids horizon compounding but incurs linear or sublinear regret w\.r\.t\. the dimension of the remaining unsolved subspace\. We propose $\\underline\{Hy\}$brid Neural Solver for $\\underline\{C\}$ombinatorial $\\underline\{O\}$ptimization \(\*\*HyCO\*\*\), a hybrid inference algorithm that constructs a solution prefix with an RL solver and adaptively switches to a conditional DM to complete the remaining decisions\. To characterize why such hybridization helps, when to trigger the handover, and how to realize it in practice, we first develop a unified error\-scaling theoretical framework and prove that, under explicit error\-scaling assumptions, i\) the hybrid structure achieves strictly lower expected regret than either backbone alone, and ii\) there exists a unique optimal trigger step that minimizes the hybrid regret\. We then design a lightweight adaptive trigger that combines policy entropy and RL–DM disagreement to detect trajectory\-level signals of the regime shift as a practical proxy, since the optimal trigger step is defined at the expected\-regret level and is not directly computable on individual trajectories\. Experimental results on diverse benchmarks demonstrate that HyCO achieves consistent improvements over both backbones and support the empirical effectiveness of adaptive triggering\.

## Speed Predictions for Online Energy\-Efficient Scheduling

**Authors:** Eric Balkanski; Jingwei Li; Clifford Stein; Cherlin Zhu

**ID:** 148614 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wSAlwori4a>) | [PDF](<https://openreview.net/pdf?id=wSAlwori4a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148614>)

We consider the scheduling problem of online speed scaling where the goal is to minimize the energy consumption of a machine that controls the speed at which jobs are processed\. Recent work has leveraged the learning\-augmented framework, where the algorithm is provided with predictions about jobs that will arrive in the future, to manage power usage more efficiently\. This paper proposes a novel prediction model for speed scaling where the predictions are about the machine speed \(the output\), instead of the jobs \(the input\)\. Machine speed predictions have multiple advantages: they are succinct, admit strong PAC\-learnability guarantees, can be provided dynamically, and lead to a natural definition of smoothness\. We give an algorithm for dynamic machine speed predictions that is $\(1\+\\epsilon\)$\-consistent and $O\(1\)$\-robust\. For offline machine speed predictions and job speed predictions, we provide an algorithm that achieves the stronger guarantee of $\(1\+\\epsilon\)$\-smoothness, while maintaining $O\(1\)$\-robustness\. These guarantees are comparable to previous work, but do not require predicting the entire input\.

## Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks

**Authors:** Haocheng Duan; Yuxin Guo; Jieyi Bi; Anqi Xie; Sirui Li; Yining Ma; Cathy Wu

**ID:** 155074 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8fI7m5Dxno>) | [PDF](<https://openreview.net/pdf?id=8fI7m5Dxno>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155074>)

While Neural Combinatorial Optimization \(NCO\) achieves strong performance, its black\-box nature remains a key roadblock\. Standard interpretability tools, such as Concept Bottleneck Models \(CBMs\), are ill\-equipped for NCO, whose decisions are dynamic, state\-dependent, and lack proper concept definition\. To close this gap, we introduce Evolving Programmatic Bottlenecks \(EPB\), the first framework that distills black\-box NCO models into human\-readable program portfolios\. EPB extends CBMs for sequential decision problems: it employs an LLM to autonomously evolve a bank of programs, where each program's per\-step action distribution serves as the bottleneck\. We realize this through an iterative framework: Block I fixes program bank capacity and introduces a hybrid textual\-numerical gradient descent scheme to backpropagate gradients across the student router model and the LLM in\-context learning; Block II dynamically adapts bank capacity via fault\-targeted boosting and redundancy pruning\. Extensive experiments demonstrate EPB's effectiveness and broad applicability, where the interpreted program portfolios largely match original performance\. EPB also reveals that NCO behavior shifts across optimization stages and can be approximated as a composition of classic heuristic variants\. Our work advances interpretable NCO and establishes EPB as a promising tool for interpreting complex sequential decision\-making models\.

## Diversity Maximization: Algorithms for Distant $k$\-Subsets

**Authors:** Shayan C Jahan; Hamed Abdi; Ali Ahmadi; Javier Marinković; MohammadTaghi Hajiaghayi

**ID:** 150500 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hdftVSwe13>) | [PDF](<https://openreview.net/pdf?id=hdftVSwe13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150500>)

Diversity maximization is a fundamental problem in combinatorial optimization with applications in fairness\-aware machine learning, clustering, and data summarization, and has attracted significant attention in theoretical computer science\. We study the Distant $k$\-Subsets Problem \(DKSP\): given a metric space $\(X,d\)$ with $\|X\|=n$ and an integer $k$, find two disjoint subsets $S,T\\subseteq X$, each of size $k$, maximizing $\\min\_\{s\\in S,\\; t\\in T\} d\(s,t\)$\. This problem arises as a key subroutine in composable coresets for diversity maximization, and improvements can yield better approximations for related objectives such as remote\-matching and pseudoforest\. It also appears in practice: a variation was featured in the ICPC World Finals 2024\. Mahabadi and Narayanan gave a $\(4/\\epsilon\)$\-approximation for this subproblem when $n \\ge 2k^\{1\+\\epsilon\}\+k$\. For any $\\epsilon&gt;0$, we present a deterministic combinatorial algorithm achieving a $\\left\(1\+\\left\\lceil 1/\\epsilon\\right\\rceil\\right\)$\-approximation under the same condition\. In particular, for $\\epsilon=1$, this yields a $2$\-approximation when $n \\ge 2k^2\+k$; the factor $2$ is optimal for general metrics unless $P=NP$\. More generally, any polynomial\-time $\(2\-\\eta\)$\-approximation for constant $\\eta&gt;0$ would imply an algorithm for the $k$\-Biclique problem, even though DKSP is polynomial\-time solvable when $n=2k$\. For $d$\-dimensional Euclidean metrics, we obtain improved guarantees: a $\(2\+\\sqrt\{2\}\)$\-approximation when $n \\ge 3\\cdot 2^\{d\-1\}k$, and a $\(2\+\\sqrt\{d\}/c\)$\-approximation when $n \\ge \(2d\+c^d\)k$\. In particular, for $d=2$ and $c=1$, this gives a $\(2\+\\sqrt\{2\}\)$\-approximation when $n\\ge 5k$, yielding near\-$2$ guarantees under linear constraints on $n$ for constant $d$\.

