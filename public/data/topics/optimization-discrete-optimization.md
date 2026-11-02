# Optimization / Discrete Optimization

优化 / 离散优化

26 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

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

## Unifying Sparsity and Discreteness: One\-Shot Pruning for Quantized LLMs via Discrete Optimization

**Authors:** Haozhen Zhang; Hanyuan Zheng; Teng Hou; Zhaogeng Liu; Yi Chang; Bin Gu

**ID:** 151050 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dMShldodM4>) | [PDF](<https://openreview.net/pdf?id=dMShldodM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151050>)

_Abstract unavailable from the accessible public sources._

## Meta$^n$: Recursive Self\-Improvement through Emergent Depth

**Authors:** Zae Myung Kim; Young\-Jun Lee; Seungyeon Jwa; Dongyeop Kang

**ID:** 151012 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dbmUO9RPNq>) | [PDF](<https://openreview.net/pdf?id=dbmUO9RPNq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151012>)

Self\-improving LLM agents typically improve answers, not the $\\textit\{process\}$ by which answers are improved: their search loops and mutation rules are held fixed by design\. We introduce $meta^n$, a framework for $\\textit\{recursive\}$ self\-improvement in which a single universal meta\-operation $\\Omega$ is applied repeatedly to build a hierarchy of meta\-layers whose depth is sized by convergence rather than prescribed\. Each layer observes execution traces from below, diagnoses failure patterns, and emits executable code \(strategic guidance via pre\-processing and reusable functions via a code library\) whose effects cascade downward\. Inter\-layer conditioning permits up to $\\prod\_\{d=2\}^\{n\} k\_d$ effective strategy\-tactic combinations across $n$ layers rather than $\\sum\_d k\_d$\. An evolutionary orchestration mode maintains a growing archive of candidate chains with fitness\-weighted parent selection and cross\-candidate inspiration\. Across seven benchmarks \(combinatorial optimization, two text classification tasks, terminal agent tasks, mathematical discovery, symbolic regression, algorithm speedup\), $meta^n$ beats prior self\-improving agents on all five \(of seven\) benchmarks where they apply, with the largest gap on CO\-Bench \(0\.849 test vs\. Gödel Agent's 0\.000 and OpenEvolve's 0\.816\)\. Layers specialize without prescription and their roles emerge at depth: generic primitives at depth 2 propagate as cross\-task callables, task\-aware routing emerges at depth 3, and deeper layers refine via specialization\. Code and data will be released publicly\.

## PISG: Constraint\-Aligned Signal Amplification for Diffusion\-Based Combinatorial Optimization

**Authors:** Yuming Zhang; Xianchen Zhou; Hongxia Wang

**ID:** 155482 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5G4RbpOCB8>) | [PDF](<https://openreview.net/pdf?id=5G4RbpOCB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155482>)

Diffusion\-based solvers have become a prominent approach to neural combinatorial optimization\. At inference time, they assign each decision variable a prediction score\. A greedy decoder ranks candidates by these scores and checks hard constraints to ensure feasibility\. Top\-ranked candidates should be both promising and jointly feasible, making prediction\-\-constraint alignment critical\. When this alignment is weak, greedy decoding skips constraint\-violating candidates and falls back to lower\-ranked alternatives, degrading solution quality\. Existing test\-time methods improve search, sampling, or decoding, but do not directly strengthen this alignment before decoding\. We observe that trained denoisers already carry constraint\-aligned structural signals\. Building on this observation, we propose Perturbed Instance\-Structure Guidance \(PISG\), a training\-free method that amplifies these signals at test time\. At each denoising step, PISG constructs a structure\-degraded prediction and extrapolates the unperturbed prediction away from it\. The resulting guided prediction improves candidate rankings before constrained decoding\. Signal analysis shows that this guidance concentrates on constraint\-critical variables rather than uniformly rescaling scores\. Under greedy decoding and without downstream refinement, PISG improves all 16 TSP solver\-scale pairs across DIFUSCO, T2T, FastT2T, and StruDiCO, and all four MIS\-ER solvers, with gains up to \+8\.4\\%\. These results identify prediction\-constraint alignment as an effective test\-time enhancement direction for diffusion\-based combinatorial optimization\.

## Learning\-Augmented Approximation for Unrelated\-Machines Makespan Scheduling

**Authors:** Kaito Baba; Evripidis Bampis; Giorgos Mitropoulos

**ID:** 153033 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OVhc0m9SE8>) | [PDF](<https://openreview.net/pdf?id=OVhc0m9SE8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153033>)

_Abstract unavailable from the accessible public sources._

## From Walls to Synergy: A Joint LLM\-Evolution Framework for MILP Solvers

**Authors:** Ziao Guo; Yuan Feng; Chenhao Ying; Junchi Yan

**ID:** 153103 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NvJ3gFAFu1>) | [PDF](<https://openreview.net/pdf?id=NvJ3gFAFu1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153103>)

_Abstract unavailable from the accessible public sources._

## Unifying Sparsity and Discreteness: One\-Shot Pruning for Quantized LLMs via Discrete Optimization

**Authors:** Haozhen Zhang; Hanyuan Zheng; Teng Hou; Zhaogeng Liu; Yi Chang; Bin Gu

**ID:** 151050\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151050

[Paper](<https://openreview.net/forum?id=dMShldodM4>) | [PDF](<https://openreview.net/pdf?id=dMShldodM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151050>)

_Abstract unavailable from the accessible public sources._

## RGF: Recursive Generative Framework for the Edge\-Cut Separable Problems

**Authors:** Bo Peng; Rongzhen Ye; Yaohua Li; Weilin Luo; Hai Wan; Jiahao Xu; Zexian Liang

**ID:** 152119 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VOCORbL6JY>) | [PDF](<https://openreview.net/pdf?id=VOCORbL6JY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152119>)

The Maximal Independent Set \(MIS\), Dominating Set \(DS\), and Vertex Cover \(VC\) problems are fundamental combinatorial optimization problems with wide\-ranging applications\. We identify a key property of these problems: by finding a cut in the graph and determining the states of vertices associated with the cut, the graph can be decomposed into multiple subgraphs whose solutions are independent of each other\. Therefore, we classify MIS, DS, and VC as Edge\-Cut Separable Problems \(ECSPs\)\. This property enables a natural divide\-and\-conquer strategy, which significantly reduces the computational complexity and allows neural networks to scale to large\-scale graphs that were previously intractable\. Based on this property, we propose a recursive framework that leverages this property to approximately solve ECSPs, namely \\ours\. Our framework consists of two major components: a partitioner that identifies a cut in the graph, and a predictor that solves the cut\-determination sub\-problem \(CDSP\) to determine the states of vertices associated with the cut\. By recursively applying these components, RGF generates a complete solution for the original ECSP instance\. Additionally, through partial prediction, the memory consumption is significantly reduced, enabling RGF to handle real\-world large graphs\. Experimental results validate the advantages of RGF: the performance of our method is up to 2\.13\\% better than the state\-of\-the\-art machine learning \(ML\)\-based approach, and our approach can handle real\-world large graphs with up to 11M vertices\.

## EDISCO: Equivariant Discrete Diffusion for Euclidean Combinatorial Optimization

**Authors:** Ruogu Chen; Jie Han

**ID:** 148560\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148560

[Paper](<https://openreview.net/forum?id=wzGLCsImQ1>) | [PDF](<https://openreview.net/pdf?id=wzGLCsImQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148560>)

Euclidean combinatorial optimization problems \(ECOPs\), such as the Traveling Salesman Problem \(TSP\) and Capacitated Vehicle Routing Problem \(CVRP\), possess inherent symmetries under the two\-dimensional Euclidean group E\(2\), including rotations, reflections, and translations\. Existing learning\-based methods, including recent diffusion\-based methods, rely on data augmentation or regularization to approximate E\(2\)\-equivariance\. This paper presents EDISCO, the first discrete diffusion model for ECOPs with exact E\(2\)\-invariant generative distributions over node\-index solutions\. EDISCO introduces an E\(2\)\-equivariant edge\-score network coupled with a categorical continuous\-time Markov chain over discrete edge variables, and exact posterior sampling provides efficient multi\-step inference\. This design gives EDISCO a local geometric inductive bias: edge neighborhoods with the same relative geometry and combinatorial context are represented consistently regardless of absolute position or orientation, making learning more efficient and inference more robust than non\-equivariant methods\. EDISCO outperforms previous learning\-based state\-of\-the\-art solvers on synthetic TSP from 100 to 10000 nodes and CVRP from 50 to 2000 customers, while using only 33\-\-50\\% of the training instances\. Trained only on uniform synthetic data, EDISCO also outperforms competing learning\-based baselines under spatial distribution shift and CVRP constraint\-tightness shift\. Code is available at https://anonymous\.4open\.science/r/EDISCO\-7F54\.

## SeqDiCO: Sequence\-oriented Diffusion for Scale\-Generalizable Neural Combinatorial Optimization

**Authors:** Yu Wang; Qiaolin Lu; Yang Wu; Bohao Qu; Shirui Pan; Yi Chang; Chengqi Zhang

**ID:** 149604 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=osLraeFVlW>) | [PDF](<https://openreview.net/pdf?id=osLraeFVlW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149604>)

Diffusion\-based neural combinatorial optimization \(NCO\) has recently shown promise for routing problems by generating solutions through denoising or reconstruction\. Most existing diffusion solvers, however, define the generative process over full\-instance solution structures, such as adjacency matrices or heatmaps\. This instance\-level formulation ties the learned reconstruction distribution to the problem size observed during training, making it difficult to transfer models trained on small instances to substantially larger ones\. In this paper, we propose SeqDiCO, a sequence\-oriented diffusion framework for scale\-generalizable neural combinatorial optimization\. The key idea is to move diffusion from full\-instance solutions to fixed\-endpoint sequence subproblems\. Given two endpoints and a set of intermediate nodes, SeqDiCO learns a local denoising operator that reconstructs the open path connecting the endpoints from corrupted structural observations\. Since such local sequence patterns are reusable across instance sizes, the same operator trained on small instances can be repeatedly composed to solve larger routing problems\. During inference, SeqDiCO uses this operator for both construction, by growing a solution through receding\-horizon local reconstruction, and refinement, by replacing selected subpaths in an existing solution\. Experiments on TSP and CVRP show that SeqDiCO consistently outperforms representative diffusion\-based and autoregressive neural solvers under cross\-scale evaluation\. Trained only on 100\-node instances, SeqDiCO generalizes to 10K\-node problems, reducing the optimality gap by up to 51\\% over SOTA neural solvers, while achieving up to $10\\times$ faster inference on representative large\-scale benchmarks\.

## Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks

**Authors:** Haocheng Duan; Yuxin Guo; Jieyi Bi; Anqi Xie; Sirui Li; Yining Ma; Cathy Wu

**ID:** 155074 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8fI7m5Dxno>) | [PDF](<https://openreview.net/pdf?id=8fI7m5Dxno>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155074>)

_Abstract unavailable from the accessible public sources._

## Learning to Search, Searching to Learn: A Closed\-Loop Framework for Large\-Scale Vehicle Routing

**Authors:** Yongji Fu; Yi Zhou; Gaojie Jin; Guanqun Cao

**ID:** 150054 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l72ITmuuVm>) | [PDF](<https://openreview.net/pdf?id=l72ITmuuVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150054>)

_Abstract unavailable from the accessible public sources._

## Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks

**Authors:** Haocheng Duan; Yuxin Guo; Jieyi Bi; Anqi Xie; Sirui Li; Yining Ma; Cathy Wu

**ID:** 155074\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155074

[Paper](<https://openreview.net/forum?id=8fI7m5Dxno>) | [PDF](<https://openreview.net/pdf?id=8fI7m5Dxno>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155074>)

_Abstract unavailable from the accessible public sources._

## Learning to Search, Searching to Learn: A Closed\-Loop Framework for Large\-Scale Vehicle Routing

**Authors:** Yongji Fu; Yi Zhou; Gaojie Jin; Guanqun Cao

**ID:** 150054\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150054

[Paper](<https://openreview.net/forum?id=l72ITmuuVm>) | [PDF](<https://openreview.net/pdf?id=l72ITmuuVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150054>)

_Abstract unavailable from the accessible public sources._

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

**ID:** 150637 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gcWZNhOoOE>) | [PDF](<https://openreview.net/pdf?id=gcWZNhOoOE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150637>)

_Abstract unavailable from the accessible public sources._

## SAG\-Sep: Sparse Augmented Graphs and Onion\-Guided Search for Rounded Capacity Cut Separation

**Authors:** Haoran Liu; Guanyi Wang; Yu Yang

**ID:** 148394 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yAJk2oHY8u>) | [PDF](<https://openreview.net/pdf?id=yAJk2oHY8u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148394>)

_Abstract unavailable from the accessible public sources._

## Learning to Solve Compositional Geometry Routing Problems

**Authors:** Mingfeng Fan; Jianan Zhou; Jiaqi Cheng; Yifeng Zhang; Jie Zhang; Guillaume Sartoretti

**ID:** 150073 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kvdydED2s3>) | [PDF](<https://openreview.net/pdf?id=kvdydED2s3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150073>)

_Abstract unavailable from the accessible public sources._

## MIRAGE: Duality\-Inspired MILP Augmentation for Representation Learning

**Authors:** Ziao Guo; Shiyue Wang; Jiayuan Yang; Junchi Yan

**ID:** 150478 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hl7ySZqDvt>) | [PDF](<https://openreview.net/pdf?id=hl7ySZqDvt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150478>)

Learning high\-quality representations of mixed\-integer linear programming \(MILP\) is crucial for advancing machine learning \(ML\)\-based methods, yet remains challenging due to the discrete nature of MILPs and their extreme sensitivity to small perturbations\. Although contrastive learning has proven highly effective for representation learning in domains such as computer vision, designing effective data augmentations for MILPs is particularly difficult\. To address this challenge, we propose MIRAGE, a principled data augmentation framework grounded in the invariance of the piecewise\-affine dual price function induced by the branch\-and\-bound \(B&amp;B\) algorithm\. Viewing this dual function as a recorded, solver\-level surrogate of the MILP's lower\-bound structure, we derive two complementary augmentation certificates that act as its right\-hand and objective\-side projections\. Both certificates are provably invariant under the same dual price function on the recorded B&amp;B tree, and therefore preserve either the structural similarity of the search tree or the optimality of the original optimal solution\. Empirically, we integrate MIRAGE with ML models for two significant downstream tasks—learning to branch and predict\-and\-search—and observe consistent performance improvements across multiple benchmarks\. By grounding MILP data augmentation in a single, solver\-induced duality quantity, our work provides a principled and effective approach to MILP representation learning\.

## NLD4CO: Neural Langevin Dynamics  for Combinatorial Optimization

**Authors:** Jiale Ma; Wenzheng Pan; Binghao Cai; Xihe Zhang; Junchi Yan

**ID:** 149843 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mshiN8rReo>) | [PDF](<https://openreview.net/pdf?id=mshiN8rReo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149843>)

Langevin Dynamics \(LD\) provides a principled framework for solving combinatorial optimization problems \(COPs\) via gradient\-guided stochastic search\. However, classical LD faces two bottlenecks: 1\) the utilization of uniform initialization may affect its convergence speed; 2\) when applied to COPs such as routing problems that cannot be naturally formulated as Quadratic Unconstrained Binary Optimization \(QUBO\), classical LD suffers from slow convergence and inferior performance compared to existing learning\-to\-construct \(L2C\) methods, as it requires manually designed discrete proposals for updates\. These proposals are typically local and induce abrupt transitions in the solution space, hindering escape from local optima and degrading performance\. To address these issues, we propose NLD4CO, a unified framework that synergizes data\-driven learning with LD\. It introduces two instantiations: explicit\-gradient \(EG\) and implicit\-gradient \(IG\)\. NLD\-EG accelerates sampling efficiency for energy\-based problems via neural warm\-start initialization\. NLD\-IG utilizes the corrective direction predicted by a consistency model as an implicit score function to guide the search, making structured, globally coordinated transitions for general COPs\. Extensive evaluations on MIS, MWIS, TSP, and CVRP demonstrate that NLD4CO achieves SOTA performance, delivering superior solution quality with competitive or lower runtime\.

## SeqDiCO: Sequence\-oriented Diffusion for Scale\-Generalizable Neural Combinatorial Optimization

**Authors:** Yu Wang; Qiaolin Lu; Yang Wu; Bohao Qu; Shirui Pan; Yi Chang; Chengqi Zhang

**ID:** 149604\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149604

[Paper](<https://openreview.net/forum?id=osLraeFVlW>) | [PDF](<https://openreview.net/pdf?id=osLraeFVlW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149604>)

Diffusion\-based neural combinatorial optimization \(NCO\) has recently shown promise for routing problems by generating solutions through denoising or reconstruction\. Most existing diffusion solvers, however, define the generative process over full\-instance solution structures, such as adjacency matrices or heatmaps\. This instance\-level formulation ties the learned reconstruction distribution to the problem size observed during training, making it difficult to transfer models trained on small instances to substantially larger ones\. In this paper, we propose SeqDiCO, a sequence\-oriented diffusion framework for scale\-generalizable neural combinatorial optimization\. The key idea is to move diffusion from full\-instance solutions to fixed\-endpoint sequence subproblems\. Given two endpoints and a set of intermediate nodes, SeqDiCO learns a local denoising operator that reconstructs the open path connecting the endpoints from corrupted structural observations\. Since such local sequence patterns are reusable across instance sizes, the same operator trained on small instances can be repeatedly composed to solve larger routing problems\. During inference, SeqDiCO uses this operator for both construction, by growing a solution through receding\-horizon local reconstruction, and refinement, by replacing selected subpaths in an existing solution\. Experiments on TSP and CVRP show that SeqDiCO consistently outperforms representative diffusion\-based and autoregressive neural solvers under cross\-scale evaluation\. Trained only on 100\-node instances, SeqDiCO generalizes to 10K\-node problems, reducing the optimality gap by up to 51\\% over SOTA neural solvers, while achieving up to $10\\times$ faster inference on representative large\-scale benchmarks\.

## PISG: Constraint\-Aligned Signal Amplification for Diffusion\-Based Combinatorial Optimization

**Authors:** Yuming Zhang; Xianchen Zhou; Hongxia Wang

**ID:** 155482\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155482

[Paper](<https://openreview.net/forum?id=5G4RbpOCB8>) | [PDF](<https://openreview.net/pdf?id=5G4RbpOCB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155482>)

Diffusion\-based solvers have become a prominent approach to neural combinatorial optimization\. At inference time, they assign each decision variable a prediction score\. A greedy decoder ranks candidates by these scores and checks hard constraints to ensure feasibility\. Top\-ranked candidates should be both promising and jointly feasible, making prediction\-\-constraint alignment critical\. When this alignment is weak, greedy decoding skips constraint\-violating candidates and falls back to lower\-ranked alternatives, degrading solution quality\. Existing test\-time methods improve search, sampling, or decoding, but do not directly strengthen this alignment before decoding\. We observe that trained denoisers already carry constraint\-aligned structural signals\. Building on this observation, we propose Perturbed Instance\-Structure Guidance \(PISG\), a training\-free method that amplifies these signals at test time\. At each denoising step, PISG constructs a structure\-degraded prediction and extrapolates the unperturbed prediction away from it\. The resulting guided prediction improves candidate rankings before constrained decoding\. Signal analysis shows that this guidance concentrates on constraint\-critical variables rather than uniformly rescaling scores\. Under greedy decoding and without downstream refinement, PISG improves all 16 TSP solver\-scale pairs across DIFUSCO, T2T, FastT2T, and StruDiCO, and all four MIS\-ER solvers, with gains up to \+8\.4\\%\. These results identify prediction\-constraint alignment as an effective test\-time enhancement direction for diffusion\-based combinatorial optimization\.

## PISG: Constraint\-Aligned Signal Amplification for Diffusion\-Based Combinatorial Optimization

**Authors:** Yuming Zhang; Xianchen Zhou; Hongxia Wang

**ID:** 155482\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155482

[Paper](<https://openreview.net/forum?id=5G4RbpOCB8>) | [PDF](<https://openreview.net/pdf?id=5G4RbpOCB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155482>)

Diffusion\-based solvers have become a prominent approach to neural combinatorial optimization\. At inference time, they assign each decision variable a prediction score\. A greedy decoder ranks candidates by these scores and checks hard constraints to ensure feasibility\. Top\-ranked candidates should be both promising and jointly feasible, making prediction\-\-constraint alignment critical\. When this alignment is weak, greedy decoding skips constraint\-violating candidates and falls back to lower\-ranked alternatives, degrading solution quality\. Existing test\-time methods improve search, sampling, or decoding, but do not directly strengthen this alignment before decoding\. We observe that trained denoisers already carry constraint\-aligned structural signals\. Building on this observation, we propose Perturbed Instance\-Structure Guidance \(PISG\), a training\-free method that amplifies these signals at test time\. At each denoising step, PISG constructs a structure\-degraded prediction and extrapolates the unperturbed prediction away from it\. The resulting guided prediction improves candidate rankings before constrained decoding\. Signal analysis shows that this guidance concentrates on constraint\-critical variables rather than uniformly rescaling scores\. Under greedy decoding and without downstream refinement, PISG improves all 16 TSP solver\-scale pairs across DIFUSCO, T2T, FastT2T, and StruDiCO, and all four MIS\-ER solvers, with gains up to \+8\.4\\%\. These results identify prediction\-constraint alignment as an effective test\-time enhancement direction for diffusion\-based combinatorial optimization\.

## HyCO: A Hybrid Neural Solver for Combinatorial Optimization

**Authors:** Yuheng Li; Di Yang; Haipeng Chen; Yanhai Xiong

**ID:** 149753 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ncwBmlZFlv>) | [PDF](<https://openreview.net/pdf?id=ncwBmlZFlv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149753>)

_Abstract unavailable from the accessible public sources._

