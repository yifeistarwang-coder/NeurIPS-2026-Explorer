# Applications / Chemistry and Drug Discovery

应用 / 化学与药物发现

124 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Generative Molecular Morphing for Flexible\-Size Design via Unbalanced Optimal Transport

**Authors:** Malte Franke; Stefan P\. Schmid; Žarko Ivković; Kjell Jorner; Andreas Krause

**ID:** 149233 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rwMvFzZS3v>) | [PDF](<https://openreview.net/pdf?id=rwMvFzZS3v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149233>)

The success of generative molecular design hinges on a model's steerability toward high\-reward samples\. Because many molecular properties are intrinsically linked to molecular size, accurately capturing the joint distribution of properties and the number of atoms is essential\. However, current diffusion and flow\-based models fix the number of atoms, which ultimately limits their ability to navigate this complex relationship\. To address this, we introduce Morph, a flexible\-size generative model for conditional and unconditional 3D molecular design based on geometric graphs\. By dynamically adapting size, Morph can seamlessly integrate existing structural priors, like scaffolds, and significantly enhances property steering\. We show that Morph matches current fixed\-size state\-of\-the\-art models while offering the benefit of unparalleled sampling flexibility\. We demonstrate out\-of\-distribution generation in regimes where previous models fail, paving the way for enhanced generative modeling for molecular design\.

## Beyond Flat Walks: Compositional Abstraction for Autoregressive Graph Generation

**Authors:** Kaiwen Bian; Andrew H Yang; Ali Parviz; Gal Mishne; Yusu Wang

**ID:** 152657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RNdvnXs8x6>) | [PDF](<https://openreview.net/pdf?id=RNdvnXs8x6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152657>)

Autoregressive graph generation is commonly formulated by linearizing a graph into a sequence via a flat walk over its nodes and edges\. While effective for small molecular graphs, such representations do not scale gracefully to large, structurally complex biological graphs, where higher\-order organization is both dense and functionally important\. To address this limitation, we introduce a hierarchical graph abstraction together with a coarse\-to\-fine autoregressive pipeline that separates coarsening, tokenization, and decoding, and we study sequence constructions that expose hierarchy in the tokenization\. Concretely, we compare a flat representation with two hierarchical alternatives: one that explicitly factorizes communities and their interactions, and another that induces hierarchy through a depth\-first traversal\. Across eight benchmarks, differences are modest on simpler domains but become pronounced on larger, more structurally complex settings such as cyclic peptides, proteins, and hard conditional\-generation tasks\. In these regimes, flat representations degrade in validity or distributional fidelity, while the traversal\-based hierarchical representation is consistently more reliable; the explicitly factorized variant is generally weaker, suggesting that how hierarchy is exposed in the sequence matters\. Finally, the same coarse\-to\-fine representation naturally enables motif\-conditioned generation without architectural changes: on larger and more structurally complex graphs, conditioning on higher\-level prefixes yields strong motif retention together with high validity, uniqueness, and novelty, whereas flat representations can exhibit severe mode collapse under comparable constraints\.

## Adaptive Multi\-Frame Learning for Expressive and Stable Atomic Representations

**Authors:** Jun Wang; Yifan Zeng; Bo Han; Fengwang Li; Aoni Xu; Tongliang Liu

**ID:** 152306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U3iPm0WWuK>) | [PDF](<https://openreview.net/pdf?id=U3iPm0WWuK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152306>)

Reliable prediction of material properties from atomistic structures requires machine learning models that respect SE\(3\) symmetry\. Frame\-based methods address this challenge by constructing equivariant coordinate systems that align SE\(3\)\-equivalent structures into unified representations\. While attractive for their flexibility and efficiency, existing frame\-based methods face two major limitations: a single frame type is often insufficient for heterogeneous atomic environments, and frame constructions can become unstable near highly symmetric or degenerate configurations\. To address these issues, we propose the Multi\-Frame Adaptive Network \(MFAN\), which leverages multiple frame types and introduces a local adaptive mechanism to combine them according to atomic environments, enabling different geometric references across atoms and complementary local\-global information for each atom\. Building on this multi\-frame architecture, we further incorporate a frame\-quality\-aware weighting scheme that downweights unreliable frames before degeneration, thereby improving the continuity of the resulting representation\. Experiments on crystal property prediction benchmarks demonstrate the leading performance of MFAN, with consistent gains from adaptive multi\-frame learning\. Additional force prediction experiments show improved robustness in continuity\-sensitive settings\.

## AptaBench: A Benchmark for Aptamer\-Small Molecule Binding

**Authors:** Mariia Eremeyeva; Nikita Serov

**ID:** 139036 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oki2P3XNXN>) | [PDF](<https://openreview.net/pdf?id=oki2P3XNXN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139036>)

Aptamers are programmable DNA and RNA receptors with broad potential in diagnostics, therapeutics, biosensing, and molecular monitoring\. Although they offer chemically synthesizable alternatives to protein\-based binders in several applications, computational aptamer discovery remains much less mature, especially for small\-molecule targets\. This gap reflects three persistent evaluation failures: fragmented and inconsistent affinity annotations, unreliable negatives derived from untested rather than experimentally validated pairs, and random splits that leak related aptamers or recurring ligand identities across train and test sets\. As a result, current benchmarks make it difficult to distinguish transferable aptamer\-ligand recognition from dataset\-specific shortcuts\. We present AptaBench, the first curated, standardized, and leakage\-aware benchmark for aptamer\-small\-molecule binding prediction with experimentally reported active and inactive measurements and paired classification and affinity\-regression tasks\. AptaBench integrates eight curated sources into 6,289 interaction pairs covering 1,610 DNA/RNA aptamers and 942 ligands\. We standardize sequences, resolve ligands to canonical molecular representations, harmonize duplicate and conflicting records, and convert dissociation constants to p$K\_d$\. More than 30% of entries contain quantitative affinity values, while inactive labels are taken only from explicitly reported non\-binding or low\-affinity measurements rather than synthetic cross\-pairing\. AptaBench provides fixed in\-distribution, molecule\-disjoint, and aptamer\-disjoint protocols reflecting practical discovery scenarios: prediction for unseen targets and evaluation of new candidate sequences\. Across descriptor\-based models, pretrained sequence and molecular encoders, and sequence\-ligand fusion architectures, in\-distribution evaluation substantially overestimates generalization\. The best classifier reaches ROC\-AUC 0\.95 in\-distribution, but drops to 0\.87 for unseen molecules and 0\.86 for unseen aptamers\. Affinity prediction is more sensitive, with $R^2$ decreasing from 0\.65 to approximately 0\.30 under disjoint protocols\. These results show that reliable progress in computational aptamer discovery requires broader chemical coverage, experimentally grounded inactive labels, and standardized quantitative annotations\. By releasing curated data, fixed leakage\-aware splits, reproducible baselines, and preprocessing code, AptaBench is poised to expose the generalization limits of existing models, challenge future sequence\-molecule recognition methods, and provide a rigorous foundation for practice\-oriented aptamer evaluation\.

## Colour me shocked: Exact Molecular Hessians from MLIPs in O\(N\) time using sparse differentiation\!

**Authors:** Luca Thiede; Andreas Burger; Alan Aspuru\-Guzik

**ID:** 151062 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dIA3cMk8m7>) | [PDF](<https://openreview.net/pdf?id=dIA3cMk8m7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151062>)

The Hessian of the energy with respect to the nuclear positions is indispensable in atomistic modelling\. However, constructing this matrix requires $O\(N\)$ Hessian vector products, traditionally limiting high\-accuracy Hessians to small systems\. Machine learning interatomic potentials \(MLIPs\) have accelerated atomistic modelling by providing highly accurate energies and forces at $O\(N\)$ cost, yet the resulting $O\(N^2\)$ cost of Hessians remains a practical bottleneck for large systems\. Based on the insight that we can derive the sparsity pattern for an MLIP's Hessians in closed form, we show in this paper how to use techniques from sparse automatic differentiation to reduce the cost of a local MLIP's Hessians to a system\-size\-independent number of Hessian\-vector products, yielding overall $O\(N\)$ total cost without any approximations\. We benchmark our approach on a variety of systems ranging from alkane chains to water clusters to A$\\beta$40 conformers\. Depending on the MLIP configuration, we achieve the linear scaling regime already on relatively small systems, resulting in large runtime reductions between $2\\times\-15\\times$ for these systems\. This opens up the possibility of scaling high\-accuracy MLIP Hessians to very large systems, such as proteins that were previously inaccessible\.

## Variable\-Length Generative Protein Design via Generalized Poisson Flow

**Authors:** Chaoran Cheng; Zhanghan Ni; Yanru Qu; Yuxin Chen; Ruihan Guo; Jiajun Fan; Ge Liu

**ID:** 148169 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=znfwhqtvhg>) | [PDF](<https://openreview.net/pdf?id=znfwhqtvhg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148169>)

The ability to generate variable\-length proteins is crucial in protein design, where the optimal length is often unknown and tightly coupled to structural designability\. Current state\-of\-the\-art diffusion and flow\-based generative models require the protein length to be predetermined before sampling, limiting their flexibility in exploring the feasible protein design space\. To bridge this gap, we introduce Generalized Poisson Flow \(GPFlow\), a novel generative framework that enables variable\-length generative modeling by learning the rate function that minimizes the negative log\-likelihood of an inhomogeneous generalized Poisson process\. We establish theoretical guarantees for recovering the joint multimodal distribution \(both continuous and discrete\) and for an upper bound on the KL divergence to the generated distribution\. We evaluate GPFlow extensively across various protein design tasks, including unconditional structure and sequence generation and conditional motif scaffolding, to validate GPFlow’s effectiveness on both continuous and discrete modalities\. Our results demonstrate GPFlow’s superior generative performance and quality, achieving the top designability and distributional fitness on unconditional generation, and ranking first on 10 out of 16 motif scaffolding tasks, with up to a 10\-fold improvement in success rates on the most challenging targets\.

## Learning Neuronal Wiring Rules from Morphological Token Sequences

**Authors:** Sidharth Goel; Erdem Varol

**ID:** 153800 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ic7mZ8IFTo>) | [PDF](<https://openreview.net/pdf?id=Ic7mZ8IFTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153800>)

Does a neuron’s shape predict whom it connects to? Peters’ rule, a canonical geo\- metric principle in connectomics, predicts connectivity from spatial arbor overlap, but true wiring also depends on molecular and morphological specificity\. We ask how far neuron skeletons, with identity and graph features withheld, predict directed connections in the FlyWire Drosophila connectome\. Because most non\- connected pairs are far apart, headline metrics are dominated by easy negatives that geometry can reject\. We therefore evaluate controlled contrasts: plausible non\-connections whose arbors are nearby, overlapping, or cell\-type matched, but that still do not synapse\. Across a controlled model ladder, from arbor overlap and hand\-crafted morphology baselines to Connectoformer \(a bidirectional Trans\- former with pooled and pairwise cross\-attention scoring\), performance improves when the model gains the corresponding signal: global shape, local branch com\- patibility, and tree context\. Morphology and arbor co\-occupancy are complemen\- tary: morphology discriminates similar\-looking unconnected pairs but can score pairs whose arbors never touch; arbor co\-occupancy does the inverse\. By suppress\- ing essentially\-zero\-overlap pairs without boosting high\-overlap pairs, a fixed one\- sided arbor prior performs well in both regimes\. The encoder also transfers across Drosophila individuals: zero\-shot evaluation on the male CNS connectome beats arbor overlap on hard\-negative discrimination\. Stratified evaluation reveals a clean division of labor: geometry rules out pairs that cannot physically connect, and morphology picks the actual partners from what remains\.

## Spectral Feedback for Test\-Time Alignment of Protein Diffusion Models

**Authors:** Shai Dickman; Mert Cemri; Landon Butler; Kannan Ramchandran

**ID:** 152878 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PhVaSdnP4b>) | [PDF](<https://openreview.net/pdf?id=PhVaSdnP4b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152878>)

Alignment methods for discrete diffusion models have primarily focused on steering the denoising process, either by influencing token logits or by selecting favorable sequences at intermediate steps\. However, these approaches largely treat inference as a unidirectional process, lacking effective mechanisms for revisiting undesirable token selections\. We introduce Spectral Feedback, an algorithm that uses a feedback loop that selects sets of positions to edit, allowing the model to iteratively correct its own generations\. This approach leverages the masking structure of discrete diffusion models where tokens can be re\-masked and re\-sampled, analogous to image editing methods that reintroduce noise and re\-run a reverse diffusion process\. While prior methods focus on what token values to assign, we instead treat which tokens to revisit as the central alignment problem\. Selecting edit positions is challenging because edit effects are interdependent: the impact of modifying one token depends on which others are edited simultaneously\. Motivated by prior work on sparse interactions in biological systems, we show empirically that, for protein inverse folding, the expected reward over edit\-position sets admits a sparse Fourier representation\. This structure enables efficient learning and optimization of a value function over edit\-position sets, which Spectral Feedback uses to select promising edits\. The algorithm is model\-agnostic and can be applied to pretrained, test\-time aligned, or fine\-tuned protein diffusion models, improving alignment performance without modifying the underlying generative process\. Applied to inverse folding with a protein stability oracle, it achieves a 30\.6% increase in stable proteins for a pretrained model, 24\.8% for Best\-of\-10, and 8\.5% for the SOTA RL\-tuned diffusion models\.

## Rotation\-Invariant Vector Normalization for Molecular Force Learning

**Authors:** Bum Jun Kim; Hyeyun Jeong

**ID:** 149936 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5GgaGufcw>) | [PDF](<https://openreview.net/pdf?id=m5GgaGufcw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149936>)

Rotating a molecule should leave its energy unchanged while rotating each force vector by the same rotation, as required in $SO\(3\)$\-equivariant molecular learning\. However, conventional normalization layers in neural networks are designed for scalar activations; when applied to vector channels through component\-wise centering or scaling, they can break this symmetry\. We study normalization modules for equivariant molecular networks under force supervision, where invariant scalar channels and covariant vector channels require different geometric treatment\. We formalize an $SO\(3\)$\-equivariance\-preserving recipe that computes vector scale statistics from rotation\-invariant squared norms and applies the resulting rescaling identically across Cartesian coordinates, which preserves $SO\(3\)$\-equivariance without vector shifts\. Building on this recipe, we introduce grouped vector RMS \(GroupRMS\), which shares vector RMS estimates across channel groups to reduce estimator variance and stabilize vector scaling in small\-batch training\. The proposed variant is lightweight and compatible with standard scalar normalization branches\. We instantiate these ideas in practical scalar\-vector normalization blocks for PaiNN\-style backbones and evaluate them across several molecular benchmarks\. On the paired three\-trajectory subset, the strongest GroupRMS\-family variant, GroupNorm\-GroupRMS, improves average force MAE from 0\.1190 to 0\.0383 and average energy MAE from 0\.0675 to 0\.0424 relative to BatchNorm\. These results support the proposed rotation\-compatible vector scaling and grouped scale estimation as effective tools for robust molecular force learning\.

## Learning Implicit Bias in Generative Spaces for Accelerating Protein Dynamics Emulation

**Authors:** Kaihui Cheng; Zhiqiang Cai; Wenkai Xiang; Zhihang Hu; Siyu Zhu; Tzuhsiung Yang; Yuan Qi

**ID:** 150675 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLP63Vtgh1>) | [PDF](<https://openreview.net/pdf?id=gLP63Vtgh1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150675>)

Generative emulators of protein dynamics produce plausible trajectories at a fraction of the cost of molecular dynamics, but they inherit their training distribution and tend to revisit known states rather than reach rare ones under long\-horizon extrapolation\. Inspired by classical enhanced sampling, we introduce an implicit, history\-dependent bias in the generative space of a pretrained emulator\. Specifically, a history\-aware score estimator augments the frozen emulator with a distance\-weighted bias that steers reverse\-time sampling away from previously generated structures, regularized by an environment\-support term\. To preserve structural validity at long horizons, a score\-based refinement step re\-projects drifted samples onto the data manifold using the frozen emulator\. Our experiments demonstrate that the method \(i\) raises diversity by $35\\%$ on DynamicPDB\-80; \(ii\) on $12$ zero\-shot Fast\-Folding proteins, the learned bias alone reaches the unbiased emulator's coverage up to $\{\\sim\}15\\times$ faster, and pairing it with refinement reaches the coverage up to $\{\\sim\}37\\times$ faster while covering $\{\\sim\}3\\times$ as many low\-energy states\.

## Foundation Model Informed Acquisition Functions for Molecular Discovery

**Authors:** Qi CHEN; Fabio Ramos; Alan Aspuru\-Guzik; Florian Shkurti

**ID:** 150383 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iRUZhF8EXj>) | [PDF](<https://openreview.net/pdf?id=iRUZhF8EXj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150383>)

Bayesian optimization \(BO\) is widely used to accelerate molecular discovery by reducing costly oracle evaluations\. Foundation models provide a promising source of prior knowledge for BO, but simply using their representations in standard surrogate\-based pipelines is often unreliable in low\-data regimes with high\-dimensional features and vast discrete candidate spaces\. Rather than asking whether LLMs are universally useful for molecular BO, we ask how Acquisition Functions \(AFs\) should be designed to exploit weak, high\-dimensional, and partially informative foundation\-model priors\. We propose \\emph\{LLM\-guided Acquisition Tree\} \(LLMAT\), a surrogate\-free BO framework that reformulates likelihood\-free acquisition estimation as recursive local acquisition learning\. LLMAT trains binary classifiers on LLM representations, where each classifier jointly induces a promising/non\-promising partition and defines a local AF within the corresponding region\. This produces a hierarchy of localized AFs and enables efficient candidate selection via Monte Carlo Tree Search\. To stabilize learning with few observations, LLMAT meta\-learns shared classifier parameters and initializations across tree nodes\. An optional LLM\-guided clustering module further reduces AF evaluation cost by restricting search to statistically promising coarse property clusters\. Extensive experiments and ablations demonstrate substantial improvements in scalability, robustness, and sample efficiency for LLM\-guided BO in molecular discovery\.

## Coarse\-to\-Fine Autoregression over Hierarchical Discrete Codes for Molecular Graph Generation

**Authors:** Haozhuo Zheng; Cheng Wang; Pengyu Chen; YajunTian; Yang Liu

**ID:** 153473 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L66jzxk7cl>) | [PDF](<https://openreview.net/pdf?id=L66jzxk7cl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153473>)

Molecular graph generation typically involves a trade\-off between two paradigms: diffusion models capture global structure well but require hundreds of denoising steps, while autoregressive \(AR\) models sample in a single pass yet generate atoms in a flat canonical order with no semantic hierarchy, leaving long\-range topology to chance\. We introduce the \*\*Hierarchical Graph VQ\-Transformer \(H\-GVT\)\*\*, which removes this dichotomy by performing coarse\-to\-fine AR generation over hierarchical discrete codes\. A \*\*Spectrally\-Regularized Multi\-Scale VQ\-VAE\*\* first compresses each molecule into a sequence of discrete tokens at multiple scales, where coarse tokens provide regularized low\-resolution structural context and fine tokens encode atom\-level details\. The compression combines Adaptive Min\-Cut Pooling with a novel \*\*Spectral Topology Consistency Loss\*\* that aligns low\-frequency normalized Laplacian spectra across scales, adding only 2\.8% training overhead\. A standard decoder\-only Transformer with level embeddings then generates these tokens from coarse to fine, allowing fine\-grained atom tokens to condition on coarser structural context\. This requires no specialized tree, motif, or scale\-causal masking\. On QM9 and ZINC250k, H\-GVT achieves the best NSPDK among compared baselines \($2\\times10^\{\-4\}$ on QM9 and $1\\times10^\{\-4\}$ on ZINC250k\), while sampling 10K molecules $68\\times$ faster than DiGress\. On MOSES, H\-GVT achieves $4\.8\\times$ better FCD than a Novelty\-thresholded GVT baseline under the same thresholded protocol \(0\.19 vs\. 0\.92; 86\.4% vs\. 80\.5% Novelty\)\. Crucially, ablations reveal that the coarse\-to\-fine ordering itself, not merely multi\-scale tokenization, is what enables global structural planning: randomizing the order while keeping the same tokens, codebook, and level embeddings degrades NSPDK by $29\\times$\.

## Natural\-Language\-Guided Protein Generation for Ligand\-Binding Design

**Authors:** Shumeng Li; Xunkai Li; Sirui Zhang; Henan Sun; Xiong Yongfu; YI LIU; Rong\-Hua Li; Guoren Wang

**ID:** 151508 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a89bxz5dN0>) | [PDF](<https://openreview.net/pdf?id=a89bxz5dN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151508>)

Docking ultimately determines effective ligand binding, yet bridging global functional semantics and local physical constraints remains a central challenge for protein generation for ligand\-binding design\. We therefore use docking\-oriented language describing docking processes, binding patterns, and local interaction constraints as generation conditions, rather than relying only on coarse\-grained functional text\. However, existing methods still insufficiently model docking constraints and show limited coordination among heterogeneous modalities\. To address these limitations, we propose DockWizard, an encoder\-router\-decoder framework for multimodal protein generation\. Concretely, \(1\) a multimodal encoder aligns function text, docking text, ligand descriptions, ligand SMILES, and ligand 3D information into shared conditional representations, improving semantic consistency across heterogeneous inputs; \(2\) a router module organizes heterogeneous conditions into role\-specific memories by their scopes of action, preserving global functional guidance while strengthening local binding constraints; and \(3\) a protein decoder combines prefix guidance with full\-memory injection to let different conditions act at different levels, improving controllability while preserving docking constraints during generation\. We further curate a docking\-language multimodal dataset with over 100,000 samples\. Extensive experiments under a four\-stage evaluation pipeline show that DockWizard outperforms strong baselines for this task, with average gains of 13% in docking confidence and 19% in complex stability\.

## CPSea2: Composing Terminal Geometries for Structurally Diverse Cyclic Peptide Binder Design

**Authors:** Ziyi Yang; Yinjun Jia; Guiyu Deng; Jiqing Zheng; Tianyi Zhang; Ziting Zhang; Kai Liu; Lei Liu; Yanyan Lan

**ID:** 139000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rlHkg8kvPd>) | [PDF](<https://openreview.net/pdf?id=rlHkg8kvPd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139000>)

Cyclic peptides are attractive next\-generation therapeutics\. In drug discovery, diverse ring\-closing chemistries are applied to tune synthetic accessibility and conformational constraints\. Current machine learning methods represent cyclization through modified positional encodings, covalent\-bond prompts in all\-atom models, residue\-level distance guidance, or direct terminal closure by molecular mechanics \(MM\)\. These approximations provide limited control over the raw geometry, especially for non\-natural linkers, and often yield unreliable structures\. Here, we introduce \*\*CPSea2\*\*, a composable framework that abstracts cyclization as terminal\-amide geometry constraints\. We construct \*\*CPSea2\-Cap\*\* \(\*\*CPcap\*\*\), a conformer library covering eight cyclization types, and \*\*CPSea2\-Base\*\* \(\*\*CPbase\*\*\), a large\-scale dataset of nearly 900 million mined linear peptide\-\-protein complexes\. Matching terminal\-amides between CPcap and CPbase directly derives cyclic peptide\-\-protein complexes with diverse terminal topologies\. Built on CPbase, \*\*PepAny\*\* generates target\-conditioned peptide binders with controllable terminal\-amide geometry, expanding the accessible space beyond mined structures\. Multi\-target evaluations show improved raw\-output plausibility over bond\-prompted and distance\-guided baselines\. CPSea2 provides a novel framework and data foundation for flexible and diverse cyclic peptide binder design\. Datasets and codes are available at https://anonymous\.4open\.science/r/CPSea2\-6CF5/\.

## TALK: One\-Shot Batch Design for Protein Variant Effect Prediction

**Authors:** qiao huang; Ao Shen; Jie Du; Manning Wang

**ID:** 155750 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3DiNfT64V7>) | [PDF](<https://openreview.net/pdf?id=3DiNfT64V7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155750>)

Protein variant effect prediction is central to understanding protein function and guiding protein engineering, yet experimental labels remain costly\. In many protein experiments, the variants that can be assayed are dictated by protocol constraints, while the variants that need accurate prediction may lie in a different or broader region of the landscape\. This assay\-prediction mismatch makes candidate\-local criteria such as predicted function, uncertainty, or exploration value insufficient for measurement design\. Given a protocol\-defined accessible space and a limited budget, we ask which variants should be assayed so that the resulting data best improves landscape prediction\. We propose TALK, which estimates each candidate’s contribution through posterior coupling between accessible and target variants and reduces redundant information within the batch\. Across ProteinGym and GB1 settings spanning mutation\-order transfer and different accessible\-target relationships, TALK uses limited budgets more efficiently, yielding labels that better support subsequent prediction than baselines\. These results point to a practical two\-stage workflow: first, spend a limited assay budget on variants selected to be informative for the target landscape and train a predictive model from the measured labels; then use this model to score and prioritize high\-potential variants\.

## SymDrift: One\-Shot Generative Modeling under Symmetries

**Authors:** Samir Darouich; Vinh Tong; Lluis Pastor Perez; Tanja Bien; Loay Mualem; Mathias Niepert

**ID:** 151782 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y3ywi65g1k>) | [PDF](<https://openreview.net/pdf?id=Y3ywi65g1k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151782>)

Generative modeling of physical systems, such as molecules, requires learning distributions that are invariant under global symmetries, such as rotations in three\-dimensional space\. Equivariant diffusion and flow matching models can incorporate such invariances effectively, even when trained on a non\-invariant empirical distribution, but they typically rely on costly multi\-step sampling\. Recently, drifting models have emerged as an efficient alternative, enabling single\-step generation and achieving state\-of\-the\-art performance in generative modeling tasks\. However, we show that drifting models face a symmetry\-specific challenge, since an equivariant generator does not generally produce the same drifting field as the one obtained from the symmetrized target distribution\. Addressing this issue would require expensive symmetrization of the empirical distribution\. To avoid this cost, we propose SymDrift, a framework that makes the drifting field itself symmetry\-aware\. We introduce two complementary strategies: \(i\) a symmetrized drift in coordinate space based on optimal alignment, and \(ii\) a $G$\-invariant embedding that removes symmetry ambiguity by construction\. Empirically, SymDrift outperforms existing one\-shot methods on standard benchmarks for conformer and transition state generation, while remaining competitive with significantly more expensive multi\-step approaches\. By enabling one\-shot inference, SymDrift reduces computational overhead by up to 40$\\times$ compared to existing baselines, making it promising for high\-throughput applications such as virtual drug screening and large\-scale reaction network exploration\.

## PRISM: Prior Relational Information for Self\-supervised Modeling to Enhance Solubility OOD Generalization

**Authors:** Xinyi Chen; Jiahuan Pang; Titus Chima; Paul Weng; Wendong Wang

**ID:** 154692 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bi1ETf801E>) | [PDF](<https://openreview.net/pdf?id=Bi1ETf801E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154692>)

Solubility depends on intermolecular interactions between solutes and solvents and is central to drug discovery, chemical and materials process engineering\.  Its prediction requires out\-of\-distribution \(OOD\) generalization to unseen solutes, solvents, and solvent mixtures, where supervised methods suffer from data scarcity, and existing self\-supervised pretraining methods do not explicitly learn chemically meaningful relations\.  Learning chemically meaningful relational information without labels can alleviate data scarcity and improve OOD generalizations, but remains challenging\.  We introduce Prior Relational Information for Self\-supervised Modeling \(PRISM\) and apply it to solubility OOD generalizations\.  PRISM is a label\-free pretraining framework that converts expert\-defined chemical priors into relational teachers\. For solubility prediction, it trains four encoders to preserve the population\-level relational information from priors capturing hydrophobic, electrostatic, polarizability, and substructural effects, using Kullback\-Leibler \(KL\) divergence to match pairwise distance\-based distributions during pretraining\. For scaffold, solute, and solvent OOD generalizations, PRISM matches or surpasses supervised and self\-supervised baselines\. For mixed\-solvent OOD generalizations, freezing the four PRISM encoders and training a light fusion\-and\-composition head outperforms the strongest supervised baselines and greatly reduces prediction variations\. Ablations and control studies confirm that gains stem from chemically meaningful relational structures baked into the encoders by PRISM\.  We expect this strategy of turning relational priors into self\-supervision signals to extend beyond solubility prediction to domains where chemically or biologically meaningful relational priors are available\.

## Graph Energy Matching: Transport\-Aligned Energy\-Based Modeling for Graph Generation

**Authors:** Michal Balcerak; Suprosanna Shit; Chinmay Prabhakar; Sebastian Kaltenbach; Michael Albergo; Yilun Du; Bjoern Menze

**ID:** 152480 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sm423QKBUU>) | [PDF](<https://openreview.net/pdf?id=Sm423QKBUU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152480>)

Generative modeling of discrete data, such as graphs, underpins many scientific and industrial applications, including molecular discovery and materials design\. In these domains, probabilistic inference is particularly valuable, as it enables composable generation and principled incorporation of desired constraints, such as structural or functional properties\. Energy\-based models naturally support this goal by capturing relative likelihoods and enabling composable inference by directly enforcing constraints during inference\. However, discrete energy\-based models typically struggle with efficient and high\-quality sampling, as off\-support regions often contain spurious local minima, trapping samplers and causing training instabilities, resulting in a fidelity gap compared to discrete diffusion models\. To address this gap, we introduce Graph Energy Matching \(GEM\), a discrete generative framework inspired by the Jordan\-\-Kinderlehrer\-\-Otto \(JKO\) transport\-map optimization perspective\. GEM learns a permutation\-invariant potential energy that simultaneously guides discrete transport from noise toward high\-likelihood graph regions and refines samples within these regions\. We further introduce a sampling protocol leveraging an energy\-based switching strategy, seamlessly bridging rapid, gradient\-guided transport and a local mixing regime for effective exploration\. On molecular graph benchmarks, GEM matches or surpasses strong discrete diffusion baselines on most reported metrics\. Beyond improving generation quality, GEM's relative likelihood modeling enables targeted exploration, facilitating compositional generation, property\-constrained sampling, and interpolation between graphs\.

## Energy\-Adaptive Equivariant State Space Models for Noise\-Robust Protein Structure Representation

**Authors:** Zhongyue Zhang; Runze Ma; Yanjie Huang; Shuangjia Zheng

**ID:** 150913 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eTYGRodQ9x>) | [PDF](<https://openreview.net/pdf?id=eTYGRodQ9x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150913>)

Structure\-informed protein representation learning is essential for effective protein function annotation and $\\textit\{de novo\}$ design\. With the rapid progress of protein structure prediction and experimental structure determination, a central challenge in the field is shifting from merely obtaining structural models to reliably leveraging predicted or measured structures for downstream learning\. However, both crystal and AlphaFold\-like predicted structures can contain structural uncertainty, which can bias local neighborhood construction and make robust protein representation learning challenging\. To address these issues, we propose a novel equivariant Transformer\-State Space Model \(SSM\) hybrid framework, termed $E^3$former, designed for efficient and robust protein representation\. Our approach uses energy function\-based receptive fields to construct proximity graphs that adaptively stabilize neighborhood selection under structural deviations, and incorporates an equivariant high\-tensor\-elastic selective SSM within the transformer architecture\. These components allow the model to adapt to complex geometric interactions and extract structural features with a higher signal\-to\-noise ratio\. Empirical results demonstrate that our model outperforms existing methods in structure\-intensive tasks, such as inverse folding and binding site prediction, particularly when using predicted structures, owing to its enhanced tolerance to data deviation and structural uncertainty\. Our approach offers a novel perspective for conducting biological function research and drug discovery using imperfect but increasingly available protein structure data\. Our code is available on \\url\{https://anonymous\.4open\.science/r/E3former\-207E\}\.

## 3D Molecule Generation from Rigid Motifs via $\\mathrm\{SE\}\(3\)$ Flows

**Authors:** Roman Poletukhin; Marcel Kollovieh; Eike S\. Eberhard; Stephan Günnemann

**ID:** 156034 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=10JJ9uxd6J>) | [PDF](<https://openreview.net/pdf?id=10JJ9uxd6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156034>)

Three\-dimensional molecular structure generation is typically performed at the level of individual atoms, yet molecular graph generation techniques often consider \*fragments\* as their structural units\. Building on the advances in \*frame\-based\* protein structure generation, we extend these fragmentation ideas to 3D, treating general molecules as sets of \*rigid\-body motifs\*\. Utilising this representation, we employ $\\mathrm\{SE\}\(3\)$\-equivariant generative modelling for \*de novo\* 3D molecule generation from rigid motifs\. In our evaluations, we observe comparable or superior results to state\-of\-the\-art across benchmarks, surpassing it in atom stability on GEOM\-Drugs, while yielding a $2\\times$ to $10\\times$ reduction in generation steps and offering $3\.5\\times$ compression in molecular representations compared to the standard atom\-based methods\.

## Plausible Biomolecular Structure Prediction via Physics\-informed Reinforcement Learning

**Authors:** Tai Dang; Hieu Tran; Long\-Hung Pham; Sang Truong; Edward A Pham; Jeffrey S Glenn; Thang Luong

**ID:** 152661 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RM7NMWgQlH>) | [PDF](<https://openreview.net/pdf?id=RM7NMWgQlH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152661>)

The latest advances of diffusion models in biomolecular structure prediction are still based on distance\-based supervised training without adequately accounting for physically plausible interactions needed for real\-world drug discovery\. We introduce $\\mathit\{\\boldsymbol\{\\pi\}\\text\{\-Fold\}\}$, a novel physics\-informed policy\-based folding approach that augments reinforcement learning with physics\-aware scoring functions for training biomolecular diffusion models\. Specifically, we fine\-tune AlphaFold3\-based models using Group Relative Policy Optimization and explicit physics\-based rewards such as Rosetta all\-atom energy, AutoDock Vina binding affinity, and ligand strain energy\. Crucially, we demonstrate that these physics\-based priors translate to enhanced performance on critical downstream prediction tasks\. $\\mathit\{\\boldsymbol\{\\pi\}\\text\{\-Fold\}\}$ achieves state\-of\-the\-art results on SKEMPI for protein\-\-protein mutation effects, CASP16 and OpenFE for protein\-\-ligand binding affinities, Run\-N\-Poses for ligand geometric validity and interface quality across diverse structural fidelity metrics\. On FoldBench, $\\mathit\{\\boldsymbol\{\\pi\}\\text\{\-Fold\}\}$ achieves the best overall MolProbity score of 1\.30, halving steric clashes and nearly eliminating rotamer outliers\. Human evaluation further confirms that $\\mathit\{\\boldsymbol\{\\pi\}\\text\{\-Fold\}\}$ generates structures that are meaningful for downstream drug discovery applications\. Our code is available at \\href\{https://anonymous\.4open\.science/r/pifold\-45B8/README\.md\}\{github\.com/anonymous/pifold\}\.

## Generating Physically Consistent Molecules with Energy\-Based Models

**Authors:** Christoph Griesbacher; Lea Bogensperger; Andreas Habring; Thomas Pock

**ID:** 152559 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SEBAsCmCg3>) | [PDF](<https://openreview.net/pdf?id=SEBAsCmCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152559>)

Molecules in equilibrium follow a Boltzmann distribution, making the underlying energy landscape a physically grounded modeling objective\. However, such landscapes are difficult to learn from data and, once learned, hard to sample from\. Diffusion and flow\-matching models sidestep these difficulties by learning a time\-conditional score or transport field between noise and data, losing the energy inductive bias in exchange for a more tractable training objective\. We introduce EBMol, an energy\-based model \(EBM\) that restores this inductive bias by learning an atom\-additive scalar potential without explicit simulation during training\. Our method employs a flow\-inspired Restoring Field Matching objective to approximate the energy landscape\. We adopt the Mirror\-Langevin algorithm for sampling, enabling unified updates of atomic positions and types, and incorporate parallel tempering for inference\-time compute scaling\. EBMol is the first EBM for 3D molecular generation to achieve state\-of\-the\-art performance on QM9 and GEOM\-Drugs\. Moreover, we show that the learned energy landscape serves as a principled quality metric for ranking and filtering configurations, and demonstrate controllable generation without retraining through shape\-steered sampling via potential composition and zero\-shot linker design\.

## Temporal Selective Exploration for Reinforcement Learning\-Guided Continuous\-Discrete Flow Matching in 3D Molecular Design

**Authors:** Lianghong Chen; Yan Yi Li; Gen Zhou; Yuxi Long; Ganlin Feng; Mike Domaratzki; Pingzhao Hu

**ID:** 150305 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j7lOiPUk8m>) | [PDF](<https://openreview.net/pdf?id=j7lOiPUk8m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150305>)

Flow matching has shown strong potential in generative tasks, while its optimization via Reinforcement Learning \(RL\) remains underexplored, especially in continuous\-discrete mixed settings\. Moreover, flow matching is formulated as an Ordinary Differential Equation \(ODE\), whose deterministic trajectories do not naturally support RL optimization\. Introducing stochasticity by converting the entire trajectory into a Stochastic Differential Equation \(SDE\) is a common practice\. Nevertheless, not all timesteps contribute to the final outcomes, and redundant exploration introduces additional noise\. Furthermore, in multi\-objective settings, some objectives may dominate the optimization while others receive insufficient updates\. In this study, we propose an RL\-guided continuous\-discrete flow matching framework with temporal selective exploration for 3D de novo molecular design\. Specifically, our method jointly optimizes continuous and discrete flow matching for atomic coordinates and molecular identities, respectively, while restricting exploration to timesteps that primarily contribute to target properties, reducing ineffective exploration\. We also introduce a reward\-based advantage calibration mechanism to mitigate objective dominance in multi\-objective optimization\. The framework is applied to design inhibitors for both the well\-studied target protein EGFR and the challenging Pin1 protein\. We identify some novel candidate inhibitors, supported by in silico validation\.

## Efficient and Accurate Zero Shot Generation of Symmetric Protein Complexes

**Authors:** Rory Gao; Yuanzhou Chen; Prajit Rajkumar; Wei Wang

**ID:** 153113 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=No1xT9B5Qs>) | [PDF](<https://openreview.net/pdf?id=No1xT9B5Qs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153113>)

Symmetric organization is a fundamental principle of biomolecular complex assembly\. The same principle underlies engineered applications, from vaccine platforms to nanomaterials, making symmetric \\textit\{de novo\} generation a core capability for computational protein design\. We establish a theoretical foundation equating generation of an assembly with underlying symmetry group $G$ to generation within a quotient space over $G$\. This directly allows $\\mathrm\{SE\}\(3\)$\-equivariant models to generate symmetric structures with minimal distribution shift\.  With this insight we introduce \\textbf\{\\ours\{\}\} \(\\textbf\{Ze\}ro\-shot \\textbf\{U\}nified \\textbf\{S\}ymmetrization\), a framework that converts any pretrained $\\mathrm\{SE\}\(3\)$\-equivariant backbone generative model into an efficient generator of symmetric assemblies with no retraining\.  \\ours\{\} operates on a single \\emph\{canonical subunit\} and utilize \\emph\{phantom subunits\} to preserve internal model operations, reducing memory and runtime cost by $\\mathcal\{O\}\(\|G\|\)$ for finite groups $G$, compared to a full\-complex forward pass\. We implement \\ours\{\} for IPA\-based models \(FrameDiff, FoldFlow\) and axial\-attention\-based RFdiffusion, showing high generation efficiency with minimal degradation to generation quality\.  We then apply \\ours\{\} to generate symmetric complexes of over $10\{,\}000$ residues with exact, untruncated attention, a scale previously intractable with any model\.

## NanoFold: Designing Reproducible Protein Structure Benchmarks through Principled Sampling

**Authors:** Chris Hayduk; Krithik Ramesh

**ID:** 138970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tMd55qVCYD>) | [PDF](<https://openreview.net/pdf?id=tMd55qVCYD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138970>)

Protein structure prediction has progressed rapidly, with a flourishing ecosystem of open\-source AlphaFold \(AF\)\-style systems delivering real progress\. But isolating which architectural and training choices actually drive that progress is difficult\. Production\-scale training is both computationally prohibitive and not accessibly reproducible; moreover, the public corpora are complex, with structural biases that compound in parameter\- and compute\-constrained regimes\. To address these gaps, we introduce NanoFold, a compact, fixed\-data benchmark for AF\-style training studies\. Its sealed\-hidden tracks address three fundamental questions, with a $\\textit\{limited\}$ track for sample efficiency, a $\\textit\{research large\}$ track for whether early gains persist under more optimization, and an $\\textit\{unlimited\}$ track for best fixed\-data final performance\. NanoFold's split is designed rather than naively sampled, with chains grouped into biological units under MMseqs2 cluster and PDB\-entry disjointness, stratified across structural metadata, and allocated to $10\{,\}000$ training, $1\{,\}000$ public\-validation, and $1\{,\}000$ sealed hidden chains\. We verify the construction through statistically principled diagnostics, including a randomization study over $1\{,\}000$ alternative valid splits, confirming the dataset is diverse, well\-distributed, and statistically typical of its constraint class\. We use NanoFold to run comprehensive experiments on model behavior across scales and training regimes, demonstrating that the benchmark is learnable but unsaturated, scales predictably with budget, cleanly separates training primitives, and that the underlying codebase flexibly supports head\-to\-head comparison\. NanoFold makes architectural and training progress in protein structure prediction more transparent, comparable, and reproducible at a compute\-accessible scale\.

## Multi\-Oracle Agreement Reveals the Limits of Self\-Consistency Evaluation in RNA Design

**Authors:** Minghao Sun; Hanqun Cao; Fang Wu; Zhou Zhang; ZHIYUAN LIU; Tianfan Fu; Pheng\-Ann Heng; Yang Zhang

**ID:** 139186 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fkSfgYJc4x>) | [PDF](<https://openreview.net/pdf?id=fkSfgYJc4x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139186>)

Computational RNA design methods routinely evaluate designed sequences by refolding them with the same structure\-prediction model used during optimization, measuring agreement with the design target\. While scalable, this practice carries a fundamental risk: when optimization and evaluation share the same underlying model, high scores can reflect model\-specific idiosyncrasies rather than genuine structural quality\. To characterize the severity and mechanism of this problem, we audited nine RNA design methods spanning four algorithmic paradigms, evaluating approximately 11,000 sequences against predictors from two independent model families: physics\-based thermodynamic models and machine\-learning models, alongside five tertiary\-structure predictors and large\-scale SHAPE chemical\-mapping data\. We find that 78\.1% of designs produced by single\-objective optimization pass one predictor yet fail another, while ensemble\-based methods reduce this disagreement 30\-fold\. A controlled experiment identifies optimization objective breadth, not search strategy, as the primary driver of this fragility\. Cross\-predictor disagreement carries a calibrated experimental signal: lower disagreement predicts higher SHAPE accuracy across 40,000 sequences, yet remains null\-to\-anti\-predictive for biological function, establishing a clear scope boundary\. We release \*\*ACCORD\*\* \(\*\*A\*\*cross\-oracle \*\*C\*\*alibration for \*\*CO\*\*mputational \*\*R\*\*NA \*\*D\*\*esign\), a benchmarking workflow that reports per\-predictor scores, experimentally calibrated uncertainty tiers, and explicit warnings for invalid use cases, providing the community with a principled foundation for RNA design evaluation\.

## Learning Generative Dynamics for 3D Molecule Generation via Sequential Neuro\-Symbolic Constraints

**Authors:** Zhuoran Li; Xu Sun; Chang Chen; Wanyu Lin

**ID:** 151880 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XDAW0khIR2>) | [PDF](<https://openreview.net/pdf?id=XDAW0khIR2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151880>)

Diffusion models have recently emerged as a powerful paradigm for generating 3D molecules\. Despite showing remarkable promise, they learn atomic distributions implicitly from data, without explicitly encoding physicochemical rules into their generative dynamics\. Consequently, generated samples can be statistically plausible yet chemically invalid\. To address this problem, we propose Sequential Neuro\-Symbolic Constrained Diffusion \(SensDiff\), a framework that integrates symbolic rules into generative modeling, enabling the model to internalize scientific priors during training\. Central to SensDiff is the observation that the diffusion trajectory of 3D molecule generation exhibits a coarse\-to\-fine evolution: valid molecules arise by first mitigating macroscopic geometric conflicts and then refining structures toward microscopic chemical consistency through iterative denoising\. Accordingly, SensDiff mirrors this dynamic by sequentially enforcing constraints with adaptive weighting during training, progressively steering generation toward valid molecular geometries\. Moreover, SensDiff translates domain knowledge into interpretable generative controls, grounding opaque neural denoising in scientific principles\. Experiments on molecular benchmarks and real\-world constrained generation tasks confirm that SensDiff consistently improves chemical validity while adhering to physicochemical rules and user\-specified targets\.

## PepSpecBench: A Unified Evaluation Benchmark for Peptide Tandem Mass Spectrometry Prediction

**Authors:** Zhiwen Yang; Pan Liu; yifan Li; Yunhua Zhong; Jun Xia

**ID:** 139229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dePVHdM1Gw>) | [PDF](<https://openreview.net/pdf?id=dePVHdM1Gw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139229>)

Tandem mass spectrometry provides a high\-throughput framework for identifying and quantifying proteins in complex biological samples\. In computational proteomics, predicting peptide MS/MS spectra is a critical task, enabling downstream applications such as large\-scale peptide identification and quantification\. While deep learning architectures have substantially improved prediction accuracy, three evaluation challenges obscure the true progress of the field\. First, inconsistent data preprocessing and incompatible model output spaces hinder fair model comparison\. Second, flawed data splitting strategies can permit hidden sequence leakage and inflate reported performance\. Third, existing evaluations typically lack comprehensive cross\-species benchmarking and systematic assessment of model robustness to influential experimental conditions\. To address these challenges, we propose PepSpecBench, a unified benchmark for peptide MS/MS spectrum prediction\. PepSpecBench standardizes data preprocessing across complementary public datasets, enforces a strict backbone\-disjoint splitting strategy to eliminate sequence leakage, and evaluates diverse architectures within a shared fragment\-ion representation space\. It further introduces a comprehensive multi\-species evaluation suite and physically grounded metadata perturbation probes to assess model robustness and instrument awareness\. We uncover previously unrecognized performance discrepancies and robustness limitations across six representative models, providing actionable insights for future model design, evaluation and practical deployment\. Code and data are available at https://anonymous\.4open\.science/r/PepSpecBench\-NeurIPS2026/\.

## PaxBench: A Multimodal Sequence Benchmark for Protein Abundance Prediction

**Authors:** Ke Zhai; Oscar J Charles; Helena A Saunders; Conrad Bessant

**ID:** 139322 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XKvWzTE4DP>) | [PDF](<https://openreview.net/pdf?id=XKvWzTE4DP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139322>)

Protein abundance links genotype to cellular state and is useful for comparing genes, organisms, and engineered systems\. PaxDb contains broad abundance mea\- surements, but its heterogeneous records have not yet been organized into a shared benchmark for testing protein, CDS, codon, and mRNA representations under the same target\. The difficulty is that abundance labels must be recovered from diverse PaxDb sources, matched to species\-specific sequences at several molecular levels, and evaluated despite incomplete modality coverage, limited metadata, and variable annotation quality\. To address this, we introduce PaxBench, a carefully cleaned and aligned seven\-species PaxDb\-derived benchmark with matched protein, CDS, codon, and mRNA inputs, and use it to test whether biological foundation models benefit from multimodal fusion\. On the cluster\-aware split, the full multimodal representation reaches Spearman 0\.789, compared with 0\.740 for the best single representation, while random evaluation reaches 0\.834\. Cross\-species settings also remain predictive\. These results suggest that protein, coding\-sequence, codon, and transcript representations provide complementary predictive information under this benchmark\. PaxBench provides a compact setting for comparing foundation models, feature baselines, adaptation methods, and interpretability analyses for sequence\-based abundance prediction\.

## Beyond Drug Discovery: The Nanotechnology Molecular Optimization \(NMO\) Benchmark

**Authors:** Matthias Blaschke; Daniel Kienzle; Zsuzsanna Koczor\-Benda; Julian Lorenz; Rainer Lienhart; Fabian Pauly

**ID:** 139426 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RSzcctnFXO>) | [PDF](<https://openreview.net/pdf?id=RSzcctnFXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139426>)

Generative molecular design is shaped by simple proxy benchmarks for drug\-like properties and models pretrained on large pharmaceutical datasets\. This combination drives strong benchmark metrics but limits transferability to domains structurally distinct from drug discovery\. To overcome this limitation and drive discovery toward real, scientifically grounded targets, we introduce the Nanotechnology Molecular Optimization \(NMO\) Benchmark, which bridges machine learning \(ML\) and quantum materials science\. NMO acts simultaneously as a rigorous testbed for the ML community and a discovery engine for nanotechnology research\. The suite replaces proxy oracles with quantum simulations and introduces strict protocols that prioritize scientific utility over leaderboard\-oriented overfitting\. The physics\-based NMO tasks impose hard structural constraints and rugged fitness landscapes, posing fundamentally new requirements on generative models\. Notably, advanced molecular optimization methods underperform much simpler approaches on the NMO tasks\. We develop a new baseline method identifying the critical components to solve the NMO tasks, including a novel representation for modeling structural constraints and a domain\-agnostic pretraining strategy to eliminate pharmaceutical dataset bias\. Our results surpass state\-of\-the\-art physical properties and reveal previously unknown structural motifs, offering new insights for the nanotechnology community and demonstrating that ML can drive genuine scientific discovery\.

## A Systematic Evaluation of Co\-folding Model Representations for Small\-Molecule Learning

**Authors:** Hyosoon Jang; Hyunjin Seo; Honghui Kim; Taewon Kim; Yunhui Jang; Seonghyun Park; Sungsoo Ahn

**ID:** 154961 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9cpiiqZlW0>) | [PDF](<https://openreview.net/pdf?id=9cpiiqZlW0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154961>)

Small\-molecule foundation models are typically pretrained on standalone molecular data, unlike vision and language models that often benefit from cross\-modal or relational supervision\. Protein\-ligand co\-folding provides a molecular analogue of such supervision by exposing models to atom\-level ligand\-protein interactions, raising the question of whether co\-folding models can yield strong small\-molecule representations\. We study this question using Boltz2, a modern co\-folding model, by transferring its atom\-level ligand representations to standalone small\-molecule tasks\. Through systematic probing and distillation, we show that Boltz2 representations match or outperform existing models on the ADMET benchmark, accelerate molecular generative modeling, and improve sample efficiency in structure\-guided ligand optimization\. We further find that Boltz2 representations are complementary to those learned from conventional standalone molecular supervision, including 3D conformers, bioassay labels, and quantum\-chemical properties\. Finally, we extend representation alignment to reinforcement learning, showing that dense representation\-level supervision can complement scalar rewards in molecular discovery\. These results identify protein\-ligand co\-folding as a promising pretraining paradigm for small\-molecule representation learning and position Boltz2 as a strong, off\-the\-shelf molecular foundation model\.

## gfnx: Fast and Scalable Library for Generative Flow Networks in JAX

**Authors:** Daniil Tiapkin; Artem Agarkov; Nikita Morozov; Ian Maksimov; Askar Tsyganov; Timofei Gritsaev; Sergey Samsonov

**ID:** 139507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LlfhY2TtbB>) | [PDF](<https://openreview.net/pdf?id=LlfhY2TtbB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139507>)

In this paper, we present gfnx, a fast and scalable package for training and evaluating Generative Flow Networks \(GFlowNets\) written in JAX\. gfnx provides an extensive set of environments and metrics for benchmarking, accompanied with single\-file implementations of core objectives for training GFlowNets\. We include synthetic hypergrids, multiple sequence generation environments with various editing regimes and particular reward designs for molecular generation, phylogenetic tree construction, Bayesian structure learning, and sampling from the Ising model energy\. Across different tasks, gfnx achieves significant wall\-clock speedups compared to Pytorch\-based benchmarks \(such as torchgfn library\) and author implementations\. For example, gfnx achieves up to 55 times speedup on CPU\-based sequence generation environments, and up to 80 times speedup with the GPU\-based Bayesian network structure learning setup\. Our package provides a diverse set of benchmarks and aims to standardize empirical evaluation and accelerate research and applications of GFlowNets\.

## CausalBind: Causal Modeling and Learning for Protein\-Molecule Virtual Screening

**Authors:** Loka Li; Jin Tian; Kun Zhang

**ID:** 151296 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bURAYAEF84>) | [PDF](<https://openreview.net/pdf?id=bURAYAEF84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151296>)

Protein\-molecule virtual screening is increasingly cast as a problem of representation learning in a shared embedding space\. Existing methods rely on dense holistic alignment, entangling invariant binding determinants with nuisance correlations and limiting transfer to new targets\. It has been noted that binding in protein–molecule systems involves sparse cross\-modality interactions: binding is governed by a small contact interface and a few decisive local interactions \(e\.g\., hydrogen bonds, hydrophobic contacts, and salt bridges\) rather than the global structures of the protein and molecule\. We hypothesize that uncovering and leveraging sparse interaction patterns is critical for generalization beyond the training data, as these patterns are reusable and expected to improve performance across different scenarios\. In this paper, we aim to identify and leverage sparse interaction patterns, and verify our hypothesis\. Since the training data contain only observed binding pairs, we formalize this prior via a V\-structure causal model under Heckman\-style selection, and establish three theoretical results: \(i\) the latent concepts of interacting proteins and molecules are not identifiable without appropriate sparsity constraints;\(ii\) these concepts and their sparse interactions are component\-wise identifiable under structural sparsity conditions; and \(iii\) a low\-rank relaxation of these conditions yields subspace identifiability of the concepts and interactions\. Inspired by these principles, we propose CausalBind with three implementation variants\. Extensive experiments on DUD\-E and LIT\-PCBA benchmarks show that all variants consistently outperform strong baselines across all metrics, respectively\.

## Two Stages of Folding: Convergent Mechanisms in AI Protein Folding Trunks

**Authors:** Kevin Lu; Jannik Brinkmann; Stefan T Huber; Aaron Mueller; Yonatan Belinkov; David Bau; Chris Wendler

**ID:** 152760 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QZjsViDneS>) | [PDF](<https://openreview.net/pdf?id=QZjsViDneS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152760>)

How do protein structure prediction models fold proteins? We investigate this question through causal interventions on the folding trunks of ESMFold, OpenFold, and Boltz\-1\. Across all three models, we find a shared two\-stage computational structure\. In the first stage, early blocks initialize pairwise biochemical signals : features like charge propagate from sequence into pairwise representations through architecture\-specific pathways\. In the second stage, late blocks develop pairwise spatial features : distance and contact information accumulate in the pairwise representation\. We verify these mechanisms causally by showing that steering charge and distance features induces predictable structural changes\. Furthermore, these representations are functionally interchangeable: pairwise states can be linearly aligned and substituted across models\. Together, these results suggest that folding trunks with different architectures, inputs, and training procedures converge on a shared representational organization for mapping sequence chemistry into spatial geometry\.

## AlloGen: Conformation\-Selective Binder Design with Differential State Scoring

**Authors:** Hanqun Cao; Aastha Pal; Sumi Kimura; Yesol Kim; Jingjie Zhang; Pheng\-Ann Heng; Pranam Chatterjee

**ID:** 151299 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bTUx4Fn7Ul>) | [PDF](<https://openreview.net/pdf?id=bTUx4Fn7Ul>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151299>)

Protein binder design has largely optimized for affinity alone, leaving conformational selectivity unaddressed: for allosteric targets such as kinases, nuclear receptors, and GPCRs, a binder that engages both active and inactive states provides no functional specificity regardless of how tightly it binds\. We introduce \*\*AlloGen\*\*, a modular framework that decouples backbone generation from a learned state\-selectivity scorer $Q\_\\theta$, an SE\(3\)\-invariant interface graph transformer trained via a two\-phase curriculum that first grounds interface geometry before imposing conformational discrimination\. Because $Q\_\\theta$ is fully differentiable and generator\-agnostic, it integrates with any backbone generator as a passive reranker or an active gradient\-based guide without retraining\. Trained on 65 targets spanning 15 protein families, $Q\_\\theta$ generalizes to held\-out out\-of\-distribution targets where energy\-based baselines fail entirely, and all 15 evaluated generator\-\-guidance combinations achieve positive conformational selectivity averaged over the held\-out targets, with the best reaching $\\bar\{S\}=\+0\.677$\. Our anonymous code repository can be found at https://anonymous\.4open\.science/r/AlloGen\_NeurIPS\-04CB\.

## ProtGlycanDock: Towards Accurate Protein\-Glycan Docking with Tailored Dataset, Benchmark and Model

**Authors:** Minghao Xu; Jiaze Song; Jinyu Wang; Wentao Zhang

**ID:** 139712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=90gsNmRJos>) | [PDF](<https://openreview.net/pdf?id=90gsNmRJos>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139712>)

Performing accurate protein\-glycan docking is critical to understanding protein\-glycan interactions which govern many biological processes\. However, this important task is hampered by the lack of tailored datasets, benchmarks and models for protein\-glycan docking\. To fill this blank, we first curate a standard benchmark \*\*ProtGlycanDock\*\* for training and evaluating protein\-glycan docking models under both protein and glycan generalization settings\. On this benchmark, we evaluate ten models in three categories, physics\-based docking methods, machine\-learning\-based docking models and molecular structure prediction models\. To obtain more precise binding poses, we further propose two finetuning techniques to inject the knowledge of glycan conformations into a general\-purpose molecular structure prediction model\. These two techniques respectively augment model inputs with glycan topological features and refine glycan binding pose with a glycan energy loss\. Benchmark results show the superiority of AlphaFold\~3 among existing methods, and the two proposed finetuning techniques can be well combined to achieve a state\-of\-the\-art model for protein\-glycan docking\. Also, we perform stratified benchmark analysis and case studies to better understand the strengths and weaknesses of current models, providing insights for future model improvements\. We maintain datasets at https://huggingface\.co/datasets/ProtGlycanDock/ProtGlycanDock and source codes at https://github\.com/kasawa1234/ProtGlycanDock\.

## Equivariant Spherical Transformer for Efficient Molecular Modeling

**Authors:** Junyi An; Xinyu Lu; Yun\-Fei Shi; Peijia Lin; Qianwei Tang; Li\-Cheng Xu; Chao Qu; Fenglei Cao; Yuan Qi

**ID:** 155430 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5i7KqZASE3>) | [PDF](<https://openreview.net/pdf?id=5i7KqZASE3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155430>)

Equivariant Graph Neural Networks \(GNNs\) have significantly advanced the modeling of 3D molecular structure by leveraging group representations\. However, their message passing, heavily relying on strictly equivariant operations, suffers from restricted expressiveness due to the limited non\-linearity and low degree of group representations\. To overcome this, we introduce the Equivariant Spherical Transformer \(EST\), a novel plug\-and\-play module that applies a Transformer\-based architecture to the Fourier spatial domain of group representations\. The integration of EST enhances the model's expressiveness while preserving the crucial equivariant inductive bias through a uniform sampling strategy of spherical Fourier transforms\. As demonstrated by our experiments on challenging benchmarks like OC20, MPtrj and QM9, EST\-based models achieve state\-of\-the\-art performance\. For the complex molecular systems within OC20, small models empowered by EST can outperform some larger models and those using additional data\. In addition, we provide both theoretical and experimental validation of EST's equivariance as well, paving the way for new research in this area\.

## MechParser: A Vision\-Language Framework for Parsing Chemical Reaction Mechanism Diagrams

**Authors:** Yufan Chen; LU S Hin; Yujian Yuan; Ching Ting Leung; Hanyu Gao

**ID:** 151799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xv450nsgRJ>) | [PDF](<https://openreview.net/pdf?id=Xv450nsgRJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151799>)

Reaction mechanisms are central to understanding chemical reactivity, guiding reaction prediction, synthesis design, and selectivity rationalization\. In chemistry literature, they are universally depicted as curved electron\-pushing arrows that capture stepwise electron flow and bond changes\. Yet, this vast knowledge remains trapped in unstructured diagrams, forcing data\-driven modeling to rely on small or template\-expanded datasets\. We introduce MechParser, a vision\-language framework that converts mechanism diagrams into SM\-SMARTS \(Sequential Mechanism\-Aware SMARTS\), a representation encoding electron flow and atom state changes as a cumulative string sequence\. At its core, MechParser\-VL applies a left\-right visual prompt design \(arrow diagram alongside an atom\-indexed reference\) to separate dynamic arrow reasoning from static atom identification, and is trained via a four\-stage curriculum on over 300K samples from a geometry\-aware synthetic data pipeline and an expert\-annotated real\-world dataset\. On both synthetic and real\-world benchmarks, MechParser\-VL substantially outperforms much larger proprietary and open\-source VLMs despite using only a 4B backbone\. By standardizing visual mechanisms into machine\-readable data, MechParser lays the groundwork for constructing large\-scale mechanism databases from the chemical literature, which in turn can support the training of advanced mechanism\-centric models on authentic mechanistic data\.

## PMO\-Dock: Benchmarking Docking, Specificity, and Generalization in Molecular Optimization

**Authors:** Gor Simonyan; Tatevik Abrahamyan; Narek Abelyan; Tigran Fahradyan; Hrant Khachatryan

**ID:** 139779 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5KYsEfUjrp>) | [PDF](<https://openreview.net/pdf?id=5KYsEfUjrp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139779>)

The Practical Molecular Optimization \(PMO\) benchmark standardized evaluation in molecular optimization, but it is built on simple property\-based oracles that do not capture structure\-based drug design\. As the field has moved to docking\-based objectives, evaluation practice has become unstandardized, and different methods report results on different docking tasks, often without a shared protocol for fair comparison or sample\-efficiency constraints\. To address this, we introduce Practical Molecular Optimization for Docking \(PMO\-Dock\), a benchmark and protocol for docking\-based optimization consisting of 25 tasks covering hit generation, lead optimization, and a new specificity task requiring strong on\-target binding while penalizing off\-target interactions\. The protocol separates model development from final evaluation by assigning validation tasks for hyperparameter tuning and strictly held\-out test tasks for reporting, with no test\-task use during development\. It also enforces strict oracle budgets to reflect realistic drug\-discovery settings\. We benchmark four diverse high\-performing methods spanning different optimization paradigms, Saturn \(reinforcement learning\), GenMol \(discrete diffusion\), Genetic\-guided GFlowNet, and Chemlactica \(LLM\-based\)\. Our analysis shows no universally best method across tasks, substantial differences in hyperparameter sensitivity, and method\-dependent transferability, where some methods benefit from global hyperparameter selection while others require task\-local tuning on sufficiently similar validation tasks\. This benchmark provides a concrete evaluation standard for measuring progress on generalizable, sample\-efficient molecular optimization\.

## Sample Efficient Generative Molecular Optimization with Joint Self\-Improvement

**Authors:** Serra Korkmaz; Adam Izdebski; Jonathan Pirnay; Rasmus Møller\-Larsen; Michal Kmicikiewicz; Pankhil Gawade; Maksim Pavlov; Dominik G Grimm; Ewa Szczurek

**ID:** 148401 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y7uiomPrHK>) | [PDF](<https://openreview.net/pdf?id=y7uiomPrHK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148401>)

Generative molecular optimization aims to design molecules with properties surpassing those of existing compounds\. However, evaluating candidate molecules is expensive, so sample efficiency, i\.e\., generating optimized molecules within a fixed evaluation budget, is essential\. Moreover, in the offline setting, where a surrogate model approximates candidate evaluation, sample inefficiency compounds with surrogate error, further limiting performance\. To address these challenges, we introduce Joint Self\-Improvement \(JSI\), a framework for sample\-efficient online and offline molecular optimization\. JSI combines \*\*\(i\) a joint generative\-predictive model\*\* trained via a joint likelihood\-based loss, which aligns molecule generation and surrogate modeling, and \*\*\(ii\) inference\-time self\-improvement\*\*, which iteratively biases the generative component of the joint model toward higher\-scoring molecules using direct objective evaluations in the online setting and the predictive component in the offline setting\. Experiments across docking score optimization, in both online and offline settings, as well as antimicrobial peptide optimization, demonstrate that JSI outperforms state\-of\-the\-art methods under limited evaluation budgets\.

## Screening Lipid Nanoparticles through Structure\-Ratio Alignment

**Authors:** Yoonho Lee; Yunhak Oh; Hoyoung Choi; Chanyoung Park

**ID:** 150653 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gQsgSLZBj4>) | [PDF](<https://openreview.net/pdf?id=gQsgSLZBj4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150653>)

Lipid Nanoparticles \(LNPs\) are widely used as delivery systems for nucleic acid therapeutics, where transfection efficiency is determined by both the identities of constituent lipid components and their composition ratios\. While prior studies have focused on learning molecular representations for ionizable lipids, modeling how multiple components and their ratios jointly influence LNP performance remains underexplored\. In this work, we propose STRATA, a framework that models molecule interaction between LNP components, which is known to contribute to LNP transfection efficiency\. Our approach is built on two complementary views: \(1\) a ratio\-centric view that captures interaction patterns induced by composition ratios through a transformer with a Ratio\-induced Positional Embedding, and \(2\) a molecule\-centric view that incorporates interaction\-induced effects into structure\-based molecule embeddings\. By jointly training and aligning these views, our model integrates molecular structure and composition ratio within a unified framework that captures interaction\-driven effects\.  Experiments demonstrate that our method improves prediction accuracy and generalization to unseen molecules and ratios, highlighting the effectiveness of our approach\.

## Periodic Complex Stochastic Processes for Retrieving Atomic Structures of Unknown Matters

**Authors:** Gyoung S\. Na; Chanyoung Park

**ID:** 148373 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yMLPNBz9ZT>) | [PDF](<https://openreview.net/pdf?id=yMLPNBz9ZT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148373>)

Retrieving unknown atomic structures from observable analytical spectra or images remains a long\-standing challenge across natural sciences\. However, retrieval accuracy of existing retrieval methods on analytical data remains suboptimal because they have overlooked the underlying periodic quantum mechanical perturbations of non\-equilibrium atomic structures behind analytical data\. This paper proposes a periodic complex stochastic process \(PCSP\) that models such periodic perturbations and establishes theoretical backgrounds of periodic stochastic process in the complex\-valued domain, including its sample diversity, process length, and periodicity\. Finally, we develop a complex\-valued cross\-modal retrieval \(CVCR\) by integrating PCSP with cross\-modal retrieval frameworks\. CVCR outperformed existing cross\-modal retrieval methods in cross\-modal retrieval tasks of real\-world analytical chemistry\. Moreover, CVCR achieved state\-of\-the\-art retrieval accuracy in zero\-shot settings on 40 million of molecules\.

## Bridging the Modality Bottleneck in Pathology MIL through Virtual Molecular Staining

**Authors:** Yucheng Xing; Pei Liu; Jingying Ma; Ruping Hong; Jiangdong Qiu; Tianyu Liu; Kai He; Ling Huang; Mengling Feng

**ID:** 150709 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g5hLIE5clP>) | [PDF](<https://openreview.net/pdf?id=g5hLIE5clP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150709>)

Multiple instance learning \(MIL\) is the dominant framework for whole\-slide image analysis in computational pathology, typically combining a frozen patch encoder, a projection layer, and a slide\-level aggregator\. While encoders and aggregators have been extensively studied, the projection layer remains a largely morphology\-only bottleneck\. This limits endpoints such as biomarker status and survival, which are governed by a molecular state that is not fully captured by H\\&amp;E morphology\. We introduce Molecularly Informed Staining Transform \(MIST\), a plug\-in replacement for the MIL projection layer that uses paired spatial transcriptomics only during training to construct virtual molecular stains\. MIST clusters gene expression profiles into cross\-modal prototypes, anchors them in the frozen foundation model feature space, and uses them to reorganize H\\&amp;E patch features along molecularly guided axes\. It requires no transcriptomics at inference and can be inserted before standard MIL aggregators\. We evaluate MIST across 23 downstream tasks and 8 MIL aggregators\. MIST improves 240 of 256 configurations over the standard projection layer, with an average gain of \+3\.5\\%, observed consistently across endpoint types: \+5\.2\\% on survival prediction, \+3\.3\\% on tissue subtyping, and \+2\.6\\% on biomarker prediction\. Ablations confirm that gene\-derived prototypes are the primary source of the gains, while spatial, biological, and pathological analyses show that cross\-modal prototype affinities capture spatially coherent molecular programs from H\\&amp;E alone\.

## Emergent Biological Capabilities in a Foundation Model for Molecular Interactions

**Authors:** Adi Mashiach

**ID:** 149424 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q9dbc5lOWi>) | [PDF](<https://openreview.net/pdf?id=q9dbc5lOWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149424>)

Foundation models trained on large unlabeled corpora develop emergent capabilities — tasks that go beyond the training objective\. We extend this paradigm to multimodal biology with Bonbon, a foundation model for molecular interactions trained on approximately 3\.2 trillion tokens of paired protein\-ligand sequences\. From a single self\-supervised objective, Bonbon exhibits four zero\-shot emergent capabilities at hierarchical levels of resolution — functional \(mechanism of action\), residue \(binding site localization, including orthosteric/allosteric discrimination\), bond \(covalent versus non\-covalent engagement\), and atom \(active moiety identification at single\-bond resolution\)\. All four capabilities generalize to out\-of\-distribution proteins\. Bonbon was trained on protein\-ligand sequences alone, without any task\-specific supervision and without structural coordinates\. We conducted controlled scaling experiments across four model scales from 42M to 1\.6B parameters; every capability evaluated shows a sharp jump at the largest scale on continuous metrics, even as pretraining loss decreases smoothly\. This demonstrates that loss\-based scaling laws alone are insufficient to predict when zero\-shot emergent capabilities become available\. The capabilities reported here emerge after training at a 1:2,000 parameter\-to\-token ratio to accommodate the sparsity of paired biological interaction data\. The same frozen representations achieve state\-of\-the\-art binding and affinity predictions at five orders of magnitude greater speed than structure\-based methods\. In prospective wet\-lab validation, Bonbon achieves a 70% hit rate on de novo compounds, discovering novel chemotypes not previously documented as inhibitors for those targets\. All of the tested compounds had less than 60% structural similarity to molecules in the training corpus\.

## Symplectic Parallel Scan: A Neural Hamiltonian Framework for Accelerated Scientific Simulation

**Authors:** Sungwoo Park

**ID:** 148524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xFfEoYpedJ>) | [PDF](<https://openreview.net/pdf?id=xFfEoYpedJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148524>)

Neural Hamiltonian models provide a principled approach to learning dynamical systems by embedding the symplectic structure of physical evolution into the model class\. However, this geometric prior alone has not made Hamiltonian neural networks efficient long\-horizon simulators: an M\-step trajectory is still typically generated by M sequential updates, and common training objectives based on force matching or one\-step prediction provide only local supervision\. We introduce Symplectic Parallel Scan \(SPS\), a neural Hamiltonian framework that algebraizes the learned dynamics through a finite\-dimensional Poisson algebra of Hamiltonian generators\. SPS constructs a Neural\-\-Poisson Composition DAG closed under projected products and Poisson brackets, whose elements induce symplectic Hamiltonian drivers organized as a Lie\-group walk\. The associativity of this flow composition enables a parallel prefix\-scan over Hamiltonian drivers, reducing the sequential depth of trajectory propagation from $\\mathcal O\(M\)$ to $\\mathcal O\(\\log M\)$ while keeping each prefix inside the symplectic flow family\. The resulting model is trained through a global trajectory\-matching objective rather than only local force labels\. Across quantum spin and molecular dynamics benchmarks, SPS achieves substantial wall\-clock acceleration over sequential HNN baselines, improves long\-horizon prediction accuracy, and reduces energy drift and symplectic violation under extrapolation\.

## Gauge\-Symmetric Dual Lagrangian Frameworks for Born\-Oppenheimer Molecular Dynamics

**Authors:** Sungwoo Park; Jongwon Lee; Jiwoong Kim; Hyung\-sik Yoon

**ID:** 152638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RYM51FF2fx>) | [PDF](<https://openreview.net/pdf?id=RYM51FF2fx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152638>)

Born\-Oppenheimer molecular dynamics delivers quantum accurate trajectories by evolving nuclei on the electronic ground\-state surface while retaining electronic observables such as dipoles and polarizabilities\. In Kohn\-Sham density functional theory, this typically relies on an iterative self consistent field solver at each time step\. Machine learning can predict electronic quantities or improve SCF initialization, yet dynamics remain sensitive to residual self consistency error, which can yield non conservative forces and energy drift, and repeated diagonalization limits differentiable and accelerator efficient implementations\. We propose a gauge\-symmetric dual Lagrangian framework that avoids SCF loops by propagating the physically meaningful electronic state as the occupied subspace and its density projector on a Grassmann manifold\. A residual driven update stabilized by Rayleigh type dissipation with time decaying inertia yields a closed evolution of the subspace, its conjugate momentum, and the projector\. Coupled with a neural gauge\-symmetric Hamiltonian with analytic coordinate derivatives, the method provides closed form forces with Pulay corrections and enables stable quantum BOMD on molecular simulation benchmarks\.

## Monroe: A Molecular Foundation Model for In\-context Probabilistic Inference

**Authors:** Błażej Banaszewski; Andrew Fitzgibbon

**ID:** 154556 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ChiaszwjMu>) | [PDF](<https://openreview.net/pdf?id=ChiaszwjMu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154556>)

Bioassay activity prediction is often data\-limited because drug\-discovery datasets rely on time\-consuming and expensive wet\-lab experiments for data generation and evaluation\. This challenge has inspired recent research into molecular foundation models \(MFMs\), which aim to encode general\-purpose chemical knowledge into molecular representations that generalize well in data\-constrained scenarios\. This paper presents Monroe, a new MFM with several innovations over the existing state of the art: increased scale allowing pre\-training on over 80 million molecules from the PM6 quantum chemistry dataset; improved graph representation of stereochemistry; improved training losses including conformer denoising and embedding decorrelation; improved multi\-task learning; and the use of a prior\-data\-fitted model \(TabPFN\) for downstream in\-context prediction\. Our evaluations use a principled pairwise comparison framework that measures statistically significant performance differences\. Across established Polaris benchmarks, Monroe matches or exceeds existing MFMs, while on activity cliff benchmarks, designed to assess utility for molecular discovery, it achieves significant improvements over prior methods\. Finally, ablation and transfer experiments show that PFN\-based downstream predictors also substantially improve two leading existing models, MiniMol and CheMeleon, yielding new state\-of\-the\-art variants we call MiniMol\_PFN and Chemeleon\_PFN, suggesting that our downstream adaptation strategy generalizes beyond Monroe\.  Full source code is at https://anonymous\.4open\.science/r/monroe\-0E0D, and will be openly released\.

## Joint protein, mRNA, DNA sequence design and optimization with nucleotide\-level Potts models

**Authors:** Błażej Banaszewski; Lars J Dornfeld; Dexiong Chen; Karsten Borgwardt; Lukas F Milles

**ID:** 155038 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8tntvR1it9>) | [PDF](<https://openreview.net/pdf?id=8tntvR1it9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155038>)

Protein design generates amino acid sequences first and then translates them into DNA post\-hoc\. Control over the nucleotide sequence via codon choice at design time is thus limited\.  We introduce NuCaliby, a structure\-conditioned model that jointly designs a protein's amino acid, mRNA, and DNA sequences at nucleotide resolution\. It predicts a Potts model over a nucleotide graph, trained using amino acid supervision by marginalizing over synonymous codons\. Its energy\-based formulation supports composable inference\-time guidance from both differentiable and non\-differentiable objectives\.  NuCaliby preserves residue\-level designability on par with Caliby while learning codon\-aware nucleotide couplings directly from structure\.  Under organism\-specific tRNA adaptation guidance, NuCaliby improves adaptation to host tRNA pools beyond synonymous sequence space while preserving protein designability\. NuCaliby also embeds functional RNA motifs, directly into coding sequences, a problem that is combinatorially infeasible with extensive sampling alone\. In wet lab experiments NuCaliby produces expressible and soluble proteins on par with state of the art methods, although it enables more complex nucleotide\-level control and optimization\. Together, these results extend protein design beyond the residue level, enabling joint optimization across the central dogma of molecular biology\.

## PepDDG: Peptide–Protein Binding ΔΔ𝐺 Prediction via Information Channel Decomposition

**Authors:** Ruochi Zhang; Yusi Fan; Qiong Zhou; Li Jiao; Tian Wang; Qian Yang; Silong Zhai; Lan Wang; Fengfeng Zhou; Yajuan Huang; Liming Guo; Chang Liu; Xin Gao

**ID:** 153733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JB3B5DScsZ>) | [PDF](<https://openreview.net/pdf?id=JB3B5DScsZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153733>)

Predicting mutation\-induced changes in peptide\-\-protein binding affinity \($\\Delta\\Delta G$\) is central to therapeutic peptide optimization, but peptide\-specific predictors remain limited by scarce labels, target overlap in supervised benchmarks, and costly molecular simulations\. We introduce PepDDG, a zero\-shot, training\-free predictor that ranks peptide mutations by decomposing binding perturbations into three complementary information channels: energetic perturbation, geometric environment, and evolutionary compatibility\. Each channel is computed from a wild\-type complex structure, transformed into rank space, and combined by non\-parametric Borda aggregation, without fitting fusion weights or fine\-tuning neural predictors\. PepDDG is motivated by rank\-covariance analysis showing cross\-channel fusion can improve rank correlation when channels retain complementary signal, whereas increasingly expensive refinement of a single energetic channel has diminishing returns\. Empirically, the channels are individually moderate but capture distinct mutation regimes, and rank fusion consistently outperforms single\-channel variants and training\-free baselines\. On our curated benchmark of 332 peptide\-chain mutations across 33 targets, PepDDG reaches Spearman $\\rho = 0\.619$; the calibrated PepDDG\-Cal variant reaches $\\rho = 0\.691$\. Performance remains strong on short and cyclic peptide subsets, with $\\rho = 0\.813$ and $0\.872$, respectively\. These results support complementary evidence fusion on PDB\-derived complex structures as a practical alternative to costly same\-channel physical refinement for peptide $\\Delta\\Delta G$ ranking; a separate diagnostic shows that predicted structures can be used when no crystal structure is provided at inference time\.

## Pushing Biomolecular Utility\-Diversity Frontiers with Supergroup Relative Policy Optimization

**Authors:** Xinwu Ye; He CAO; Li Hao; Bin Feng; Zijing Liu; Robert Tang; Yu Li; Shenghua Gao

**ID:** 152440 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T7f7FXqdfT>) | [PDF](<https://openreview.net/pdf?id=T7f7FXqdfT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152440>)

Biomolecular generators are often adapted with reward feedback to improve task\-specific utility, but pushing utility alone can concentrate generation on a narrow family of candidates\. Maintaining diversity is difficult because sample diversity is a set\-level property\. We introduce Supergroup Relative Policy Optimization \(SGRPO\), a flexible GRPO\-style framework that directly constructs rewards from set\-level diversity\. For each condition, SGRPO samples a supergroup of candidate sets, compares their diversity under the same condition, and redistributes the group diversity reward to individual rollouts through leave\-one\-out diversity contributions before combining it with rollout\-level utility\. This design decouples SGRPO from a particular generator, utility reward, or diversity metric, and allows instantiation with different GRPO\-style approaches\. We evaluate SGRPO on de novo small\-molecule design, pocket\-based small\-molecule design, and de novo protein design, instantiating it with both GRPO and Coupled\-GRPO across autoregressive and discrete diffusion generators\. Across decoding sweeps, SGRPO expands the utility\-diversity Pareto frontier and achieves the best frontier\-level metrics relative to pretrained generators, GRPO, and memory\-assisted GRPO when applicable\. Our analyses further show that direct set\-level diversity rewards remain effective with small groups and help preserve broader generation\-distribution coverage during post\-training\. The code is available at https://anonymous\.4open\.science/r/SGRPO/README\.md\.

## Neural Proposals, Symbolic Guarantees: Neuro\-Symbolic Graph Generative Modeling

**Authors:** Chuqin Geng; Li Zhang; Mark Zhang; Zhaoyue\(Rebecca\) Wang; Haolin Ye; Xujie Si

**ID:** 155596 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Q6ThyZHec>) | [PDF](<https://openreview.net/pdf?id=4Q6ThyZHec>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155596>)

While deep generative models excel at capturing graph data distributions, they struggle to satisfy complex, hard constraints\. In unconstrained settings, these models typically produce valid topologies; yet imposing strict compositional rules, like those in drug discovery, creates an out\-of\-distribution \(OOD\) setting where purely neural methods frequently fail\. Because these neural approaches rely on soft conditioning and post\-hoc filtering on such tasks, they cannot provide the formal guarantees needed for high\-stakes domains\. To address this, we introduce Neuro\-Symbolic Graph Generative Modeling \(NSGGM\), a framework built on the principle of Neural Proposals, Symbolic Guarantees\. NSGGM decouples generation: an autoregressive model proposes structural scaffolds, and a Satisfiability Modulo Theories \(SMT\) solver handles the final discrete assembly of the proposed substructures\. Empirically, NSGGM is competitive with state\-of\-the\-art methods on unconstrained tasks\. To evaluate logical\-constraint satisfaction inspired by real drug discovery workflows, we introduce MolSAT, a benchmark for hard compositional rules\. On MolSAT, purely neural baselines completely fail OOD \(0% satisfaction with zero training support\), while NSGGM achieves &gt;95% satisfaction in\-distribution and 64–86% with zero training support\.

## Pareto Preference Optimization for Structure\- and Stability\-Aware RNA Inverse Folding

**Authors:** Minghao Sun; Hanqun Cao; Zhou Zhang; Chen Wei; Liang Wang; Tianrui Jia; ZHIYUAN LIU; Tianfan Fu; Robert Tang; Yejin Choi; Pheng\-Ann Heng; Fang Wu; Yang Zhang

**ID:** 151612 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZEneX95jqf>) | [PDF](<https://openreview.net/pdf?id=ZEneX95jqf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151612>)

RNA inverse folding seeks sequences that reliably fold to a target 3D backbone under physiological conditions\. Multi\-objective preference optimization on RNA is unstable for two domain\-specific reasons: \*heterogeneous noise\* across physical proxies \(deterministic 2D folding, stochastic 3D prediction, minimum free energy\), and \*sequence–structure degeneracy\* that admits compositional reward hacking via GC enrichment\.We introduce \*\*RiboPO\*\*, a preference\-optimization framework that builds preference pairs as $\\varepsilon$\-Pareto\-dominance relations on standardized per\-metric features, gates winners with a structural quality threshold against GC\-driven shortcuts, and trains a frozen\-reference DPO policy under a decreasing\-margin curriculum\. A heuristic anchored\-KL drift characterization and a pair\-level Rényi\-2 off\-policy bias bound motivate the experimental design; a clipped importance\-corrected variant extends usable rounds beyond the static\-pair regime\. On DAS benchmark, specialized \*\*RiboPO\*\* variants improve the gRNAde base on SSTT axes: scMCC reaches $0\.71$ at $R=4$ \($\+17\\%$ over $0\.61$\) and $0\.643$ at the thermodynamic\-surplus point \($\+6\.1\\%$, paired Wilcoxon $p&lt;10^\{\-3\}$\); MFE improves $\-7\.3\\%$; target\-structure probability $P\(S\_0\)$ rises $0\.00128 \\to 0\.0155$ \($\\sim$12$\\times$\) with ensemble\-defect $\-6\.9$ to $\-7\.9\\%$ \($p=6\.1\\times10^\{\-5\}$ at $R=4$\), consistent with mass concentration toward target rather than redistribution to an off\-target basin; designability rises $\+6\.9$ pp %pLDDT$\\geq$0\.7 and $\+6\.4$ pp %RMSD$\\leq$8 Å\. Under matched\-utility same\-pool reranking, \*\*RiboPO\*\* best\-of\-8 matches gRNAde best\-of\-64 \(pass@1 $0\.408$\) at $1/8$ the per\-backbone budget\. On the leakage\-corrected subset, \*\*RiboPO\*\* dominates every structural and thermodynamic axis\. Codes are available at: \[https://anonymous\.4open\.science/r/ribopo\-8D48/\]\(https://anonymous\.4open\.science/r/ribopo\-8D48/\)\.

## ManifoldCache: Training\-Free Diffusion Acceleration via Constraint Manifold Caching

**Authors:** Prashant Pandey; Sri Venkatraya Chowdary Devineni; Brejesh Lall

**ID:** 153786 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IfSl3ULbla>) | [PDF](<https://openreview.net/pdf?id=IfSl3ULbla>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153786>)

Diffusion models for structured scientific generation must produce samples satisfying hard geometric constraints imposed by physics, chemistry, or biology, yet inference in these settings is prohibitively slow, demanding hundreds to thousands of neural\-function evaluations per sample\. We unify eight state\-of\-the\-art models spanning medical volumetrics, molecular conformations, protein backbone design, crystal structure prediction, and multi\-view 3D scenes under a single abstraction, Constraint\-Manifold Diffusion Models \(CMDMs\), in which the target distribution is supported on a manifold defined by an externally specified constraint map\. All existing acceleration families fail on this class: quantization exhausts memory on high\-dimensional volumetric operators; pruning breaks constraint fidelity; fast ODE solvers allow trajectories to drift off the constraint manifold; and feature\-caching heuristics are blind to constraint geometry, inducing mode confusion in the high\-noise regime\. We introduce ManifoldCache, the first training\-free, data\-free accelerator designed from first principles for CMDMs\. The key insight is that the conditional score decomposes orthogonally into a normal component, which enforces constraint satisfaction, and a tangential component, which navigates within the manifold\. Exploiting this structure, we prove that the noise\-schedule midpoint is a sharp safe\-caching boundary: caching before it incurs provably bounded error, while caching after it guarantees a strictly positive fraction of trajectories suffer mode confusion, a gap that persists up to the boundary\. We further prove that deeper network blocks admit provably larger certified cache strides within the safe phase, as a consequence of the score decomposition propagating through block Jacobians\. The resulting schedule requires one integer comparison per block per step, zero calibration data, and zero training overhead\. Across all eight CMDMs, ManifoldCache delivers consistent wall\-clock speedups while preserving or improving generation quality on structural, perceptual, and distributional metrics, consistently outperforming several strong baselines spanning quantization, pruning, fast solvers, and feature caching\.

## Anchored Protein Engineering

**Authors:** Chi Zhang; Maria Rosaria Briglia; Litu Rout; Jeffrey Ouyang\-Zhang; Iacopo Masi; Sanjay Shakkottai; Adam Klivans; Daniel Diaz

**ID:** 153901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HrcMl3Whuk>) | [PDF](<https://openreview.net/pdf?id=HrcMl3Whuk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153901>)

Inspired by recent work on discrete diffusion for anchored unmasking, we introduce a new training\-free framework for protein engineering that can generate higher\-order variants that improve one or more phenotypes while exhibiting favorable epistatic interactions\. Prior approaches require mutation sites to be specified in advance and can drive sequences away from the natural protein manifold\. We address these limitations with \*\*A\*\*nchored \*\*P\*\*rotein \*\*E\*\*ngineering via quantized e\*\*X\*\*pectation \(\*\*APEX\*\*\), a decoding\-time method consisting of anchor selection, tilted decoding, and iterative refinement\. APEX selects anchor residues using a reward\-gradient score with an explicit correction for pairwise epistasis, decodes substitutions for anchors by tilting the base model's per\-site predictive distributions along reward gradients, and revisits low\-scoring anchors iteratively for optional test\-time scaling\. All phases query the base model only through masked\-conditional logits, a primitive shared by masked language models, discrete\-diffusion models, and inverse\-folding networks; as a result, APEX works out of the box across commonly\-used model families\. Across various protein\-engineering benchmarks, including thermostability and solubility, APEX achieves state\-of\-the\-art results and avoids the predictor\-gaming artifacts that reward\-search\-only baselines tend to produce\.

## Atomic Trajectory Modeling with State Space Models for Biomolecular Dynamics

**Authors:** Liang Shi; Jiarui Lu; Junqi Liu; Chence Shi; Zhi Yang; Jian Tang

**ID:** 153486 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L0wTe8olZP>) | [PDF](<https://openreview.net/pdf?id=L0wTe8olZP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153486>)

Understanding the dynamic behavior of biomolecules is fundamental to elucidating biological function and facilitating drug discovery\. While Molecular Dynamics \(MD\) simulations provide a rigorous physical basis for studying these dynamics, they remain computationally expensive for long timescales\. Recent deep generative models accelerate conformation generation but often either discard temporal correlations entirely or struggle to condition on the extended history required for faithful kinetics, a consequence of the effectively non\-Markovian nature of partially observed subsystem coordinates\. To bridge this gap, we introduce ATMOS, a novel generative framework based on State Space Models \(SSM\) designed to generate atom\-level MD trajectories for biomolecular systems\. ATMOS integrates a Pairformer\-based state transition mechanism to capture temporal dependencies, with a diffusion\-based module to decode trajectory frames autoregressively\. We demonstrate that ATMOS achieves state\-of\-the\-art performance in generating conformation trajectories for both protein monomers and protein\-ligand systems\. This work provides a unified and computationally efficient framework for biomolecular trajectory generation, taking a step toward dynamics foundation models\.

## Few\-Step Cofolding with All\-Atom Flow Maps

**Authors:** Gianluca Scarpellini; Ron Shprints; Peter Holderrieth; Juno Nam; Pranav Murugan; Rafael Gomez\-Bombarelli; Tommi Jaakkola; Maruan Al\-Shedivat; Nicholas Boffi; Joey Bose

**ID:** 151026 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dWyJcgVqqQ>) | [PDF](<https://openreview.net/pdf?id=dWyJcgVqqQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151026>)

All\-atom generative modeling of $3\\mathrm\{D\}$ biomolecular complexes has emerged as the dominant paradigm for predicting the structure of proteins and protein\-ligand systems\. Generating structures at the atomic level of fidelity, however, typically requires expensive iterative diffusion rollouts, making both conventional deployment and inference\-time search techniques computationally costly\. In this paper, we introduce the $\\textbf\{De\}$noiser $\\textbf\{C\}$ofolding $\\textbf\{A\}$ll\-atom $\\textbf\{F\}$lowmap \(DeCAF\) framework for distilling state\-of\-the\-art all\-atom cofolding models into all\-atom flow maps that produce high\-quality samples in only a few inference steps\. We build DeCAF on a denoiser\-based formulation of flow maps with endpoint losses that naturally support $\\mathrm\{SE\(3\)\}$ rigid alignment, which we show is critical for training accurate models\. We further derive a simple change of variables that lets DeCAF operate in the $\\sigma$\-space noise schedule of EDM\-style architectures, enabling direct distillation from pretrained cofolding diffusion models\. Equipped with DeCAF's flowmap lookahead, we introduce a purpose\-built inference\-time framework that improves sampling through reward\-guided search\. Empirically, DeCAF statistically improves over Boltz\-1\(x\) in both accuracy \(RMSD\) and physical validity scores of protein\-ligand poses at strict NFE budgets on the challenging Runs N’ Poses, while also showing a more optimal Pareto frontier across all inference compute budgets on PoseBusters\.

## ConforFlux: Particle\-Guided Trunk Repulsion for Diverse Protein Conformations

**Authors:** Shosuke Suzuki; Toshiyuki Amagasa

**ID:** 151557 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zi8ymRxqfG>) | [PDF](<https://openreview.net/pdf?id=Zi8ymRxqfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151557>)

Deep\-learning protein structure predictors achieve near\-experimental accuracy on individual folds, yet their default inference samples concentrate around a single dominant conformation\. We introduce ConforFlux, an inference\-time procedure for Boltz\-2 that couples $M$ structure\-prediction trajectories through a pairwise C$\\alpha$\-RMSD repulsion gradient on the trunk's single and pair embeddings\. Because the trunk conditions every block of the diffusion module, this update propagates to every subsequent denoising step\. On four conformational\-change categories, ConforFlux improves the per\-state success rate over Default Boltz\-2 by 3–17 percentage points while preserving Default\-comparable physical quality\. On twelve transporter pairs with at least one alternate\-state reference released after the Boltz\-2 cutoff, the $2$ Å success rate rises from $4/12$ to $9/12$\. On the human dopamine transporter, ConforFlux additionally reaches the post\-cutoff inward state, which $500$ Default samples never attain\.

## Few\-Step Boltzmann Generators via Scalable Likelihood Flow Maps

**Authors:** RuiKang OuYang; Hanlin Yu; Xinyue Ai; Yutong He; Nicholas Boffi; Pradeep Ravikumar; José Miguel Hernández\-Lobato; Max Simchowitz; Benjamin K Miller; Omar Chehab

**ID:** 154720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BW8H7viD5K>) | [PDF](<https://openreview.net/pdf?id=BW8H7viD5K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154720>)

Recent progress in flow\-based generative modeling has led to models that output high\-quality samples while using only a small number of function evaluations\. However, at present, there is a lack of similar advances in estimating the density of the generated samples\. In particular, most existing methods  either rely on restrictive architectures that enable exact calculations, or use stochastic approximations such as Hutchinson’s trace estimator that introduce substantial variance\. In this work, we introduce SCAlable LikeLihood distillation of flOw maPs \(SCALLOP\)\. SCALLOP builds on the  recently proposed  F2D2, a likelihood flow map model that can generate samples and their densities in a small number of function evaluations\. While \{F2D2\} uses Hutchinson's estimator during training, we introduce an alternative and more scalable likelihood distillation objective that is Hutchinson\-free and admits a vectorized formulation\.  Empirically, we demonstrate the effectiveness of SCALLOP as a Boltzmann generator in molecular science, and further validate its benefit on image datasets\. SCALLOP significantly reduces both training variance and training time while consistently improving performance compared to F2D2, and is competitive with the state\-of\-the\-art while achieving up to $10\\times$ inference speedup over the fastest baseline\.

## Toward Better Geometric Representations for Molecule Generative Models

**Authors:** Shaoheng Yan; Zian Li; Cai Zhou; Qiaojing Huang; Kai Liu; Muhan Zhang

**ID:** 155400 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5vRYljseiu>) | [PDF](<https://openreview.net/pdf?id=5vRYljseiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155400>)

Geometric representation\-conditioned molecule generation provides an effective paradigm that decouples molecule representation modeling from structure generation\. By decoupling molecule generation into two stages—first generating a meaningful molecule representation, and then generating a 3D molecule conditioned on this representation—the efficiency and quality of the generation process can be significantly enhanced\. However, its effectiveness is fundamentally limited by the quality of the representation space: pretrained molecular encoders, such as UniMol, produce representations that are non\-smooth and not fully exploited during the generative training process\. In this work, we propose LENSEs, a framework that better exploits the potential of molecule representations in representation\-conditioned generation methods\. In particular, LENSEs introduces three complementary mechanisms: \(1\) a representation head, simultaneously trained during generative tasks, that extracts multi\-level representations from the pretrained encoder; \(2\) a molecule perceptual loss that optimizes the generator in a semantic\-informative representation space; and \(3\) a node\-level representation alignment \(REPA\) loss that explicitly aligns the generator’s hidden states with encoder representations, reducing the semantic gap between pretraining and generation\. We demonstrate the effectiveness of these improvements through extensive molecule generation tasks\. Specifically, on the challenging molecule generation dataset GEOM\-DRUG, LENSEs achieves 97\.28% validity and 98\.51% molecule stability, surpassing existing advanced methods\. Further analyses through Lipschitz constant reduction \(4\.6×\) and QM9 probing tasks also demonstrate the smoother, more informative refined representations, establishing generative training with alignment objectives as a potential pretraining paradigm for molecular encoders\.

## FlashMol: High\-Quality Molecule Generation in as Few as Four Steps

**Authors:** Xinyuan Wei; Zian Li; Shaoheng Yan; Cai Zhou; Muhan Zhang

**ID:** 153479 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L4dgBi7KaX>) | [PDF](<https://openreview.net/pdf?id=L4dgBi7KaX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153479>)

Generating chemically valid 3D molecular conformations is critical for computational drug discovery\. Classical diffusion\-based models like GeoLDM perform well but require hundreds of steps, making large\-scale in silico screening impractical\. Recent efforts on few\-step molecular generation have accelerated this process to 12\-50 steps, but they often largely sacrifice sample stability\. In this work, we present FlashMol, an ultra\-fast molecule generative model producing high\-quality molecular conformations in as few as 4 steps\. To achieve this, we adapt distribution matching distillation \(DMD\) — a reverse KL\-divergence minimization objective — to the molecular domain for effective distillation\. Considering the local minimization behavior of DMD, we respace the molecule generation timesteps, providing the generator with much better initialization and enables effective distillation\. Additionally, to mitigate the mode\-seeking behavior of DMD and improve diversity, we further regularize it with a Jensen\-Shannon divergence term, which incorporates the mean\-seeking behavior of the forward KL divergence\. Extensive experiments on QM9 and GEOM\-DRUG datasets demonstrate that FlashMol matches and even surpasses the original 1000\-step teacher, achieving up to 250× acceleration in sampling speed while maintaining high molecular quality\.

## Preserving Geometric Symmetry in Uncertainty Estimation for Molecular Forces

**Authors:** Xinyu Li; Zhen Zhang; Jiayu Huang; Daniel M Steinberg; Lina Yao; Prof Javen Qinfeng Shi

**ID:** 150831 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ey4IT8N8rl>) | [PDF](<https://openreview.net/pdf?id=ey4IT8N8rl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150831>)

Accurate and reliable uncertainty estimation \(UE\) for vector\-valued physical properties is crucial for scientific discovery in fields like drug  and materials discovery\. For example, atomic forces are central for finding optimal structures and identifying equilibrium systems, and a fundamental requirement of these vectors is that they must be equivariant to 3D rotations\. However, existing UQ methods often fail to respect these geometric constraints, leading to poorly calibrated uncertainty and degraded predictive performance\. To address the problem, we introduce a novel framework for equivariant multivariate evidential regression\. Our primary contribution is a theoretically grounded parameterization of the evidential prior's scale matrix, constructed via a decomposition into an invariant scalar component and an equivariant low\-rank term\. Furthermore, we address the lack of suitable evaluation standards for vector fields by introducing a rigorous calibration metric based on the Euclidean distance\. Extensive experiments on molecular property prediction benchmarks, including MD17, QM7\-X and OC20, show that our framework consistently outperforms established baselines, achieving state\-of\-the\-art predictive accuracy with well\-calibrated uncertainty\. This work provides a principled and practical approach to uncertainty estimation for equivariant vector\-valued properties, paving the way for more trustworthy machine learning applications in scientific discovery\.

## URSA: Chemistry\-Aware Benchmark for Utilitarian Retrosynthesis Assessment

**Authors:** Bogdan Zagribelnyy; Ivan Ilin; Nikita Bondarev; Anton Morgunov; Arkadii Lin; Maksim Kuznetsov; Rim Shayakhmetov; Vlad Aladinskiy; Alex Aliper; Alex Zhavoronkov

**ID:** 139807 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3WEHvL562O>) | [PDF](<https://openreview.net/pdf?id=3WEHvL562O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139807>)

Synthesis planning aiming to find pathways of reactions for a target molecule is one of the most important and challenging tasks in drug discovery\. Recent progress has produced both specialized deep\-learning retrosynthesis systems and general\-purpose large language models, but objective comparison remains difficult due to the lack of flexible, chemically interpretable benchmarking protocols\. In the current study, we are introducing the URSA \(Utilitarian RetroSynthesis Assessment\) evaluation framework that provides the opportunity to benchmark the synthetic routes not only from a formal perspective, such as convergence to commercially available starting materials, but also from a chemical plausibility perspective, mimicking the way expert chemists evaluate the reactions and routes\. The study covers a comprehensive evaluation of both conventional end\-to\-end retrosynthesis solutions and LLMs for the synthesis planning task on a set of novel, diverse target molecules with undisclosed synthetic routes, which represent realistic tasks in the daily drug design routine\. We find that while LLMs can support high\-level strategic planning, they currently underperform specialized retrosynthesis models in reliably solving synthesis planning tasks\.

## UniFlowDock: Flexible Docking with Complete Equivariant Velocity Fields

**Authors:** Kangxin Chen; Jieyu Zhao; Xulun Ye; Kun Zhou; Jinli Hu; Yuanyuan Deng; Min Xie

**ID:** 148336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ybJgoCc3bI>) | [PDF](<https://openreview.net/pdf?id=ybJgoCc3bI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148336>)

Flexible molecular docking is crucial for drug discovery; however, existing flow\-matching generative models often produce physically invalid conformations \(e\.g\., steric clashes, distorted bond geometry\)\. Our analysis suggests that a primary contributor to this challenge lies at the modeling level: when the flow is parameterized by standard equivariant networks, an intrinsic approximation floor can emerge, potentially hindering the learned velocity field from reaching its optimal convergence bound, particularly for highly flexible molecules\. We present UniFlowDock, which addresses this by introducing strictly Complete Equivariant Velocity Fields, thereby eliminating the dimensional incompleteness of standard architectures\. This theoretical completeness is further bolstered by Fragment\-Adaptive Optimal Coupling, a method that structurally linearizes transport trajectories and decomposes the generation process into physics\-aware subproblems\. Experiments on PDBBind and PoseBusters demonstrate UniFlowDock achieves state\-of\-the\-art accuracy and physical validity, showing consistent gains in highly flexible docking scenarios where target distributions exhibit higher transport complexity\.

## Compact SO\(3\) Equivariant Atomistic Foundation Models via Structural Pruning

**Authors:** Chen Wang; Siyu Hu; Guangming Tan; Weile Jia

**ID:** 154865 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJ8IWO0noE>) | [PDF](<https://openreview.net/pdf?id=AJ8IWO0noE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154865>)

SO\(3\) equivariant graph neural networks have become the dominant paradigm for atomistic foundation models, achieving high accuracy and data efficiency by building rotational symmetry directly into the architecture\. Yet the computational cost of their higher\-order tensor operations creates a tough trade\-off between model accuracy and inference efficiency\. In this paper, we propose a structural pruning method for SO\(3\) equivariant atomistic foundation models to bridge this accuracy\-efficiency gap\. The pruning is applied along the channel and order dimensions, with each irreducible representation kept or removed as a complete block, thereby retaining SO\(3\) equivariance\. Starting from a large checkpoint, the pruned model substantially reduces the inference cost while retaining higher accuracy than an independently trained small model\. The pruned MACE\-MP model outperforms the official from\-scratch trained small model on 7 of 9 metrics on the Matbench Discovery leaderboard\. In terms of efficiency, compressed MACE\-MP and MACE\-OFF models contain 1\.5$\\times$ to 4$\\times$ fewer parameters and require 2\.5$\\times$ to 4$\\times$ less pre\-training compute than training a small model from scratch\. For downstream applications, fine\-tuning the pruned model reduces energy and force errors by 70\.1\\% and 34\.4\\% compared to training task\-specific models from scratch across eight representative downstream datasets\. We demonstrate that the method generalizes to other SO\(3\) equivariant architectures \(SevenNet, eSCN\) and can be combined with quantization and knowledge distillation for further gains\.

## Entangled Schrödinger Bridge Matching

**Authors:** Sophia Tang; Yinuo Zhang; Pranam Chatterjee

**ID:** 150910 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eVo3hEvMmt>) | [PDF](<https://openreview.net/pdf?id=eVo3hEvMmt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150910>)

Simulating trajectories of multi\-particle systems on complex energy landscapes is a central task in molecular dynamics \(MD\) and drug discovery, but remains challenging at scale due to computationally expensive and long simulations\. Previous approaches leverage techniques such as flow or Schrödinger bridge matching to implicitly learn joint trajectories through data snapshots\. However, many systems, including biomolecular systems and heterogeneous cell populations, undergo dynamic interactions that evolve over their trajectory and cannot be captured through static snapshots\. To close this gap, we introduce Entangled Schrödinger Bridge Matching \(EntangledSBM\) , a framework that learns the first\- and second\-order stochastic dynamics of interacting, multi\-particle systems where the direction and magnitude of each particle's path depend dynamically on the paths of the other particles\. We define the Entangled Schrödinger Bridge \(EntangledSB\) problem as solving a coupled system of bias forces that entangle particle velocities\. We show that our framework accurately simulates heterogeneous cell populations under perturbations and rare transitions in high\-dimensional biomolecular systems\. Anonymous code is provided at https://anonymous\.4open\.science/r/EntangledSBManon\.

## Temperature\-Regulated Stochastic Sampling for Diffusion\-Based High\-Quality Molecular Generation

**Authors:** Yuyan Ni; Haoming Kong; Bo Qiang; Yanjing Li; Xin Hong; Shikun Feng; Wen Yan; Yanyan Lan

**ID:** 151174 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cRfW6yk3ke>) | [PDF](<https://openreview.net/pdf?id=cRfW6yk3ke>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151174>)

Despite the strong performance of diffusion models in molecular generation, the sampling process itself remains largely understudied, with most existing methods adopt off\-the\-shelf sampling strategies developed for natural images\. Yet unlike natural images, molecular distributions are governed by physical laws and are sharply concentrated, making them particularly challenging for standard samplers, which frequently produce invalid or unphysical structures\. In this work, we revisit diffusion sampling from a unified stochastic differential equation \(SDE\) perspective and introduce a general framework parameterized by two interpretable controls: \\emph\{stochasticity\} and \\emph\{temperature\}\. Our theoretical analysis reveals that stochasticity accelerates the decay of sampling error, while temperature directly controls distribution sharpness, enabling concentration on physically plausible configurations\. Building on these insights, we develop \\textsc\{TReaSSure\} \(Temperature\-Regulated Stochastic Sampling\), a lightweight, training\-free strategy that combines stochasticity scheduling with temperature annealing to better capture the sharply concentrated distributions of molecular data\. Extensive experiments on small molecule generation, protein structure prediction, and protein design demonstrate that \\textsc\{TReaSSure\} consistently improves generation quality and produces more physically valid structures\. Empirical analyses further corroborate our theoretical findings\. The method harnesses pretrained models without retraining, underscoring its generality and practical value across diverse molecular domains\.

## MolSpecFlow: Modality\-Incomplete Molecular\-\-Spectral Learning for MS/MS

**Authors:** Yu Wang; Fan Yang; Kaikun Xu; Li Hao; Li Yuan; Jun Zhu; Jingjie Zhang; Zhenchao Tang; Yatao Bian; Cheng Chang; Jianhua Yao

**ID:** 149866 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=me61FbJpyy>) | [PDF](<https://openreview.net/pdf?id=me61FbJpyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149866>)

Untargeted metabolomics produces massive numbers of tandem mass spectra, yet most spectra remain difficult to assign to molecular structures because each spectrum is only a partial, instrument\-dependent observation of the underlying molecule\. We study MS/MS annotation as modality\-incomplete molecular\-\-spectral inference: molecules, spectra, and fingerprints provide complementary views of the same chemical entity, but fully paired molecule\-\-spectrum data are limited and many training examples contain only molecular or only spectral information\. We introduce MolSpecFlow, a mask\-conditioned heterogeneous flow framework that represents these modalities as coupled components of a shared molecular\-\-spectral state\. Availability masks encode which components exist in each example, and observation masks specify which components are conditioned on or generated, instantiating de novo annotation, molecular retrieval, and spectrum simulation within one backbone\. MolSpecFlow uses a shared Mol\-Spec Transformer, hybrid discrete\-\-continuous flow dynamics, and expected mass/formula regularization over soft molecular token distributions\. Experiments show consistent gains from modality\-incomplete pretraining, multi\-interface reuse, and external de novo transfer\.

## Traversal\-Invariant Positional Encoding for Serialized Graphs

**Authors:** Krish Mody; Sridhar Radhakrishnan; Chandra N Sekharan

**ID:** 150855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=erlgJjFpeV>) | [PDF](<https://openreview.net/pdf?id=erlgJjFpeV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150855>)

Many systems represent graphs as sequences by visiting nodes one at a time, for example, a molecule written as a SMILES string or a program written as a token stream from an AST traversal\.  The same graph can be traversed in many ways, producing different sequences for the same underlying object\.  Sequence Transformers treat these as distinct inputs and produce distinct embeddings, even though the graph remains unchanged\.  Existing graph\-native Transformers address this by operating directly on the graph, but many practical pipelines receive serialized inputs and cannot be redesigned\. We provide a theoretical characterization in three parts\.   Tree\-positional encoding achieves structural invariance for acyclic graphs under canonical\-root serialization but is insufficient for cyclic graphs due to spanning\-tree non\-uniqueness\.  Augmenting with cycle\-membership encoding derived from the canonical cycle basis introduces a traversal\-invariant anchor on cycle vertices\.  The resulting Tree\+Cycle Positional Encoding is a drop\-in replacement for sinusoidal PE within graph\-aware serialization pipelines \(those preserving token\-to\-atom alignment for structural tokens\), requiring no architectural changes to the sequence model\. It applies to any domain where labeled graphs are given as sequences with this alignment property\. We validate the approach on two testbeds\. On synthetic cycle counting and ring membership tasks, it outperforms the GIN baseline by $2\\times$ on cycle counting and matches it on ring membership, demonstrating that pre\-computed cycle structure encoded as PE matches message\-passing GNNs at end\-task performance\. On molecular property prediction, it achieves $0\.977 \\pm 0\.029$ mean cosine similarity across re\-rootings \($n = 24\{,\}960$\), outperforms a parameter\-matched graph\-native Transformer \(Graphormer\) on BACE and BBBP, and enables fragment\-level interpretability with $\+5$ points on alert alignment over a methodologically matched sinusoidal baseline\.

## Confidence\-Based Diffusion Sampling with Geometric Readiness Awareness for Accelerated Structure\-based Drug Design

**Authors:** PINZHEN CHI; William K\. Cheung; Kejing Yin

**ID:** 153379 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LnTEqJ8cmG>) | [PDF](<https://openreview.net/pdf?id=LnTEqJ8cmG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153379>)

Structure\-based drug design with diffusion models seeks to generate 3D molecules that bind tightly to target protein pockets, but full\-step sampling is too slow for high\-throughput use\. Extending the recent development of training\-free fast sampling methods for diffusion models \(e\.g\., DDIM and DNDM\) to high\-quality 3D molecule generation is non\-trivial, given that both discrete variables \(atom types\) and continuous variables \(atom coordinates\) are involved\. In this paper, we propose a unified fast sampling framework that allows a shared time schedule across discrete and continuous variables for strategically accelerating the 3D ligand generation\. Guided by an error\-equalization principle, we combine the continuous and discrete error rates of hybrid sampling into a single step\-importance density and derive a training\-free coupling\-aware schedule\. We further propose a confidence\-guided sampling strategy that integrates constraints of model prediction confidence, motion stability, and steric clash to control the acceleration based on geometric readiness\. Extensive experiments demonstrate that our method achieves $18$\-$20\\times$ speedup compared to full\-step diffusion models while preserving state\-of\-the\-art generation quality across chemical properties, binding affinity, and chemical validity\.

## Structure\-aware Reinforcement Learning for Protein Directed Evolution

**Authors:** Zikun Nie; Suyuan Zhao; Yizhen Luo; Siqi Fan; Zaiqing Nie

**ID:** 151509 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a7WnvcOBTT>) | [PDF](<https://openreview.net/pdf?id=a7WnvcOBTT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151509>)

Protein optimization remains a longstanding goal in life sciences\. Existing machine learning–assisted directed evolution \(MLDE\) methods primarily rely on sequence\-only features, overlooking the critical spatial constraints and co\-evolutionary interactions encoded in protein structures\. However, directly integrating structural information remains challenging due to the scarcity of reliable mutant structures\. To address these issues, we propose \*\*StructEvo\*\*, a novel structure\-aware reinforcement learning framework for protein directed evolution\. StructEvo employs a delta\-structure fusion encoder to approximate mutant structure features via feature differences, enabling dynamic incorporation of spatial knowledge\. The vast mutation space is then decomposed into manageable subspaces through a structure\-aligned hierarchical action network, while a geometric constraint further stabilizes delta feature learning\. Our approach outperforms prior state\-of\-the\-art methods by 9\.2% and 16\.3% on two challenging optimization benchmarks, and further identifies an experimentally validated epistasis pattern in GFP, highlighting the importance of structural guidance for effective protein directed evolution\.

## Learning the Committor Function using Weighted Ensemble Simulations

**Authors:** Jacky Chen; Rishal Aggarwal; David Koes

**ID:** 152881 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PgXWIFAiIh>) | [PDF](<https://openreview.net/pdf?id=PgXWIFAiIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152881>)

Understanding how complex molecular systems transition between metastable states is a central challenge in computational chemistry and biophysics\. A key tool for characterizing these transitions is the committor function, defined as the probability that a trajectory initiated from a given configuration reaches one state before another, which encodes detailed mechanistic information about transition pathways\. First, we curate a public benchmark of empirically determined committor values for alanine dipeptide\. Second, we develop a "committor\-in\-the\-loop" framework that combines a self consistent loss function with weighted ensemble \(WE\) simulation: WE adaptive bins are biased by the learned committor, which is in turn trained on WE samples\. Across a two\-channel 2D system and alanine dipeptide settings, our WE\-based framework consistently outperforms greedy baselines, demonstrating the importance of principled exploration\. Together, the benchmark and framework provide both a standard for evaluating committor learning methods and a new method for studying rare transitions in high\-dimensional molecular systems\.

## Probe Before You Edit: Probing\-Guided Molecular Optimization for LLM Agents in Structure\-Based Drug Design

**Authors:** Zaifei Yang; Weiyu Chen; Yaqing Wang; James Kwok

**ID:** 148216 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zUqjjMWOkk>) | [PDF](<https://openreview.net/pdf?id=zUqjjMWOkk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148216>)

Structure\-based drug design increasingly employs LLM agents to iteratively refine ligands against a target pocket, yet a viable ligand must satisfy two often\-conflicting objectives\-\-\-binding affinity and druggability\-\-\-which single optimization steps rarely improve together\. To quantify this difficulty, we introduce two diagnostic metrics: the first measures how often a single edit improves both objectives, and the second measures how often a gain on one objective comes with a loss on the other\. Applying these diagnostics to current LLM\-agent pipelines exposes a consistent failure mode: the agent performs molecular editing without knowing how the pocket\-ligand complex responds to local modifications, thus rarely achieving joint improvement\. Inspired by medicinal chemists, who probe the pocket\-ligand complex with controlled analog edits before choosing an optimization direction, we propose PROBE, an optimization framework built around edit\-\-response probing\. PROBE first decomposes the ligand into editable sites and builds a pocket\-specific site map that flags where joint gains are plausible, where the two objectives are likely in tension, and where liability substructures should be changed; it then performs controlled probe edits whose responses are distilled into an EditManual\. Guided by the site map and EditManual, PROBE runs an iterative multi\-agent loop in which an affinity agent, a druggability agent, and a co\-optimization agent jointly produce edits\. On the CrossDocked2020 benchmark, PROBE achieves state\-of\-the\-art performance and substantially mitigates the failure modes exposed by our diagnostics metrics\.

## MolHIT: Advancing Molecular\-Graph Generation with Hierarchical Discrete Diffusion Models

**Authors:** Hojung Jung; Rodrigo Hormazabal; Jaehyeong Jo; Youngrok Park; Kyunggeun Roh; Se\-Young Yun; Sehui Han; Dae\-Woong Jeong

**ID:** 152737 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QkdUSTr5Md>) | [PDF](<https://openreview.net/pdf?id=QkdUSTr5Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152737>)

Molecular generation with diffusion models has emerged as a promising direction for AI\-driven drug discovery and materials science\. While graph diffusion models have been widely adopted due to the discrete nature of 2D molecular graphs, existing models suffer from low chemical validity and struggle to meet the desired properties compared to 1D modeling\. In this work, we introduce MolHIT, a powerful molecular graph generation framework that overcomes long\-standing performance limitations in existing methods\. MolHIT is based on the Hierarchical Discrete Diffusion Model, which generalizes discrete diffusion to additional categories that encode chemical priors, and decoupled atom encoding that splits the atom types according to their chemical roles\. Overall, MolHIT achieves new state\-of\-the\-art performance on the MOSES dataset with near\-perfect validity for the first time in graph diffusion, surpassing strong 1D baselines across multiple metrics\. We further demonstrate strong performance in downstream tasks, including multi\-property guided generation and scaffold extension\.

## Taming Generative Co\-Folding Prior for Molecular Docking with Diffusion Bridge

**Authors:** Shikun Feng; Zipeng Yang; Qiuyi Li; Mingze Yin; Xiaoyuan Zhang; Tingjun Hou; Yiheng Zhu

**ID:** 153583 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLDHugsUhb>) | [PDF](<https://openreview.net/pdf?id=KLDHugsUhb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153583>)

Molecular docking aims to predict the three\-dimensional structure of a protein–ligand complex; in the conventional structure\-based setting, it is conditioned on an input protein structure and ligand, often starting from an apo receptor in flexible docking or a holo receptor in rigid docking\. Recent co\-folding models exemplified by AlphaFold 3 achieve strong accuracy in protein–ligand complex prediction, but they typically generate complexes from sequence\-derived inputs and therefore do not directly use apo structures as structural priors in docking, leading to a larger conformational search space and weaker robustness in difficult or few\-step settings\. We present BridgeDock, a framework that adapts pretrained co\-folding backbones to flexible docking by modeling the apo\-to\-holo transition as a diffusion bridge, allowing generation from the initial protein–ligand state rather than from Gaussian noise\. To make this bridge formulation compatible with pretrained denoisers, we introduce an alignment mechanism that maps bridge states to the original denoising schedule of the pretrained model\. Experiments on standard flexible docking benchmarks show that BridgeDock consistently outperforms strong co\-folding baselines\. Moreover, BridgeDock is computationally efficient at inference time and remains effective even with very few denoising steps\.

## Binding Mode Matters: Hotspot\-Aware Drug Discovery via Explorative Preferences

**Authors:** Dingshuo Chen; Hao Yang; Kuangqi Zhou; Zhixun Li; Qiang Liu; xiangxiang Zeng; Shu Wu; Yaosen Min

**ID:** 153924 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hd6Qc6G8J4>) | [PDF](<https://openreview.net/pdf?id=Hd6Qc6G8J4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153924>)

Discovering hit molecules requires not just high binding affinity, but also the identification of diverse binding modes, which are critical for experimental assays\. Existing generative approaches have predominantly relied on optimizing a scalar docking score, obscuring the distinct contributions of key binding determinants\. To this end, we introduce a paradigm shift by formulating target\-based drug design as a multi\-objective exploration task, where each objective explicitly corresponds to enhancing interactions with a specific hotspot\. Here, we introduce \*\*BindMol\*\*, a novel generative framework driven by a customized multi\-objective reinforcement learning algorithm\. By incorporating explorative preferences during training, our approach efficiently uncovers molecules with diverse and desirable binding profiles\. Empirical results demonstrate that \*\*BindMol\*\* facilitates the discovery of high\-affinity compounds characterized by both structural novelty and diverse binding modes\. Validated across target\-based drug discovery and multi\-property optimization tasks, our approach provides a versatile paradigm for goal\-oriented drug discovery\.

## Rethinking Molecular Graph Backdoors under Chemistry\-aware Admission

**Authors:** Thinh Nguyen; Sze Jue Yang; Khoa D Doan; Chee Seng Chan; Kok\-Seng Wong

**ID:** 152990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oo98xlurzU>) | [PDF](<https://openreview.net/pdf?id=Oo98xlurzU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152990>)

Backdoor attacks on molecular graph neural networks \(GNNs\) are typically evaluated as abstract graph edits, but real molecular learning pipelines do not train on arbitrary graphs\. Molecular records must first survive parsing, sanitization, canonicalization, and graph\-string consistency checks\. We formalize this overlooked admission stage as ChemGuard, an operational protocol for testing whether a submitted molecular record can enter a realistic learning pipeline, while complementing existing defenses\.ChemGuard admits a record only when its molecular string is sanitizable and the graph reconstructed from that string matches the submitted molecular graph\. Under this operational view, many existing graph\-based backdoors lose much of their apparent efficacy because their poisons are chemically invalid or representation\-inconsistent\. We then show that admission checks alone are insufficient to rule out molecular backdoors\. We propose ChemBack, an admission\-aware molecular backdoor attack that constructs chemically feasible motif\-anchor attachments and ranks admitted candidates by fingerprint\-based Tanimoto similarity to clean target\-class molecules\. ChemBack is model\-free during trigger selection, using molecular structures, target labels, fingerprints, and public validity checks, but no victim model, surrogate GNN, learned embedding, gradient, logit, or training\-code access\. Across molecular benchmarks, validators, architectures, and defenses, ChemBack achieves high attack success with fully admitted poisons while preserving clean accuracy\. Our results reveal a two\-sided lesson, chemistry\-aware admission suppresses many graph\-only backdoors, yet chemically valid and target\-aligned molecular backdoors remain a practical threat\.

## RipplePLM: Structural and Property Decoupling for Protein Mutation Effect Generation

**Authors:** Liuzhenghao Lyu; Yuyang Liu; Yuyang Gao; Li Yuan; Yonghong Tian

**ID:** 150390 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iPpUVJtIqD>) | [PDF](<https://openreview.net/pdf?id=iPpUVJtIqD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150390>)

Protein mutation effect generation asks a model to describe the functional consequence of a point mutation in natural language\. Existing protein\-to\-text systems typically encode mutation information into undifferentiated representations, overlooking the organization of mutation\-induced evidence across structural and biochemical factors\. We propose RipplePLM, a mutation\-aware generation framework centered on Direct\-Distal Cross\-Attention \(DDCA\)\. By constructing a residue\-level Mutation Perturbation Field from pre\-trained protein language models, DDCA leverages predicted contact maps to explicitly decouple structural perturbations into two pathways: the mutation site's immediate contact neighborhood and its multi\-hop distal context\. To complement this structural decomposition, we further introduce the Property Latent Chain \(PLChain\), which injects expert\-guided biochemical supervision \(e\.g\., thermostability and optimal pH\) into the LLM hidden\-state pathway through latent property tokens\. On MutaDescribe, RipplePLM improves over mutation\-specific baselines on temporal and structural splits; under a matched\-backbone comparison, average structural\-split ROUGE\-L increases from $\\textit\{22\.23\}$ to $\\textit\{35\.65\}$\. Additional ablations, representation diagnostics, and low\-$N$ fitness regression experiments further support the effectiveness of the learned mutation\-aware representations\.

## How to make the most of your masked language model for protein engineering

**Authors:** Calvin McCarter; Nick Bhattacharya; Sebastian Ober; Hunter Elliott

**ID:** 151388 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b0V2pP79ls>) | [PDF](<https://openreview.net/pdf?id=b0V2pP79ls>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151388>)

A plethora of protein language models have been released in recent years\. Yet comparatively little work has addressed how to best sample from them to optimize desired biological properties\. We fill this gap by proposing a flexible, effective sampling method for masked language models \(MLMs\), and by systematically evaluating models and methods both in silico and in vitro on actual antibody therapeutics campaigns\. Firstly, we propose sampling with stochastic beam search, exploiting the fact that MLMs are surprisingly efficient at evaluating the pseudo\-perplexity of the entire 1\-edit neighborhood of a sequence\. Reframing generation in terms of entire\-sequence evaluation enables flexible guidance with multiple optimization objectives\. Secondly, we report results from our extensive in vitro head\-to\-head evaluation for the antibody engineering setting\. This reveals that choice of sampling method is at least as impactful as the model used, motivating future research into this under\-explored area\.

## SC$^3$: A Multi\-Solvent Solubility Challenge and Benchmark

**Authors:** Vansh Ramani; Tarak Karmakar; Sayan Ranu; Dhairya Kuchhal; Har Ashish Arora; Sergei V Tatarin; Lev Krasnov

**ID:** 139522 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kbp9kmDIDc>) | [PDF](<https://openreview.net/pdf?id=Kbp9kmDIDc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139522>)

Solubility prediction is a standard benchmark in computational chemistry, yet multi\-solvent models which reportedly approach the experimental\-noise ceiling \(i\.e\. the aleatoric limit\) are not yet reliable enough to be deployed\. We argue that this gap is partly artefactual: published benchmarks differ in curation policies, evaluate on count\-weighted RMSE that hides failure on tail\-heavy solvent distributions, and treat the widely cited 0\.6–0\.8 log S inter\-laboratory figure as the aleatoric ceiling even though it reflects worst\-case, not expected, disagreement\. We introduce SC3, a multi\-solvent solubility benchmark built on BIGSOLDB v2\.1 with three contributions: \(i\) a reproducible curation pipeline yielding 101,535 measurements over 1,327 solutes and 206 solvents, with a recalibrated aleatoric floor of 0\.106 log S—roughly 6× tighter than the conventional figure; \(ii\) nested Gold/Silver/Bronze consensus tiers with per\-point σ\\sigma σ, three leakage\-checked splits, and a multi\-solvent metric suite \(PS\-RMSE, Z\-RMSE\); and \(iii\) a 31\-model benchmark across six families, whose best Bronze PS\-RMSE sits at ≈5×εaleatoric\\approx 5 \\times \\varepsilon\_\{\\text\{aleatoric\}\} ≈5×εaleatoric, and we observe this is a gap unclosed by any deep alternative tested\. We perform three follow\-on analyses: data scaling, transfer from quantum\-chemistry solvation energies, and feature\-level attribution, which demonstrates that calibrated per\-point uncertainty is a reusable infrastructure for diagnosis beyond point prediction\.

## Static Recovery Is Not Dynamic Stability: Dynamics\-Aware Benchmarking of Protein Motif Scaffolding

**Authors:** Emile de Bruyn; Moritz Schäffler; Jannik Schneider; Sebastian R Schmidt; Chanwoong Hwang; Aleena Siji; Utkarsh Upadhyay; Alexander Schug; Stefan Bauer; Artur Yakimovich; Stefan Kesselheim; Alina Bazarova

**ID:** 139733 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7YrTWO03Xe>) | [PDF](<https://openreview.net/pdf?id=7YrTWO03Xe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139733>)

Protein motif scaffolding benchmarks aim to measure whether generative models can build scaffolds around functionally important residue sets\. Their conclusions depend on two coupled choices: which motifs are tested and which criteria define success\. Existing benchmarks typically use small hand\-curated motif sets and static refolding\-based criteria such as motif recovery, self\-consistency, and structural novelty\. However, protein function often depends on conformational ensembles and transitions, raising the question of whether static refolding success translates to dynamic fidelity of motifs and scaffolds\. Here, we address both benchmark scope and success criteria\. We construct the largest systematically derived benchmark of structurally conserved functional motifs from PROSITE\-linked experimental structures, yielding 220 cases from 174 PROSITE motif\-pattern entries of varying conformations\. We evaluate six recent scaffold\-generation models and find that performance separates into target coverage and unique\-solution yield: RFdiffusion and Proteina solve more targets, whereas ESM3 produces more unique successful scaffolds on the targets they solve\. We then perform all\-atom molecular dynamics simulations for a set of statically solved designs, comparing motif drift, scaffold drift, motif\-contact preservation, and motif\-dihedral free\-energy landscapes against reference simulations\. Of 55 statically solved model–problem pairs, 31 satisfy our MD\-supported criterion and only 8 pass all checks\. Refolding success is therefore useful evidence for local motif recovery, but not sufficient evidence for dynamical fidelity of the full scaffold, exposing misalignment between static benchmark success and downstream dynamical behavior\. The mismatch is motif\-dependent: compact, self\-contained motifs are often MD\-supported, whereas interface\-like or context\-dependent motifs fail more often\. We show that motif\-scaffolding models have varying performance on three complementary axes: target coverage, unique\-solution yield, and MD\-supported dynamical fidelity\.

## Collective Supervision for Unified Biomolecular Conformation and Dynamics Modeling with CoDyna

**Authors:** Kaiwen Cheng; FANDI WU; Dawei Huang; Jun Wu; Jianhua Yao

**ID:** 154861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AKUxJVl87N>) | [PDF](<https://openreview.net/pdf?id=AKUxJVl87N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154861>)

Modeling biomolecular conformation and dynamics is critical for elucidating biological functions, motivating generative surrogates for molecular dynamics \(MD\) simulations to address two complementary tasks: time\-independent conformational sampling and time\-dependent trajectory generation\. Fundamentally, both tasks require matching the distribution of the generated collections to the MD reference, rather than reproducing individual configurations\. Yet existing deep\-learning approaches predominantly optimize a per\-sample regression loss \(score\- or flow\-matching\), whose gradient is computed in isolation per sample and therefore carries no direct signal about the cross\-sample distributional properties that define both tasks, leading to biased ensembles and long\-horizon temporal drift\. We address this with Collective Supervision, a training paradigm that aligns the empirical measures of the generated and reference collections via a maximum mean discrepancy on SE\(3\)\-invariant physical observables; a single loss handles both tasks within a unified formulation\. To mitigate the exposure bias inherent in autoregressive trajectory rollout, we further introduce Collective Rolling Forcing, which couples Collective Supervision with autoregressive self\-rollout during training\. Our framework, CoDyna, generalizes across proteins, protein\-\-ligand and protein\-\-protein complexes; on four all\-atom MD benchmarks \(ATLAS, MISATO, DynaRepo, and DynaBench\), a unified model surpasses task\-specialized baselines on most thermodynamic and kinetic fidelity metrics and remains structurally stable over 2k\-frame rollouts\.

## FoldAbS: Repurposing the Protein Folding Model as a Foundation Encoder for Antibody Screening

**Authors:** Jun Wu; FANDI WU; Xinyuan Zhu; Dawei Huang; Kaiwen Cheng; Jianzhu Ma; Fuli Feng; Jianhua Yao

**ID:** 149721 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nuKJ3hRX5i>) | [PDF](<https://openreview.net/pdf?id=nuKJ3hRX5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149721>)

Therapeutic antibody screening requires prioritizing antibody candidates across specificity, affinity, and developability\. Current pipelines typically silo these objectives and underuse structural information that governs antibody\-antigen recognition\. To address these inefficacies, we introduce FoldAbS, a unified supervised screening framework that reconceptualizes protein folding models as frozen foundation encoders, exploiting their internal representations to capture rich sequence, geometric, and interaction dynamics well beyond basic structure prediction\. By coupling the folding model with lightweight, task\-specific heads, FoldAbS seamlessly evaluates all three therapeutic criteria within a single architecture\. Instantiating this framework with the open\-source Protenix model \(FoldAbS\-Px\) yields consistent improvements over baseline approaches, achieving significant performance gains of up to 13\.1%, 9\.2%, and 6\.2% in specificity, affinity, and developability, respectively\. Collectively, these results reposition protein folding models from structure predictors and confidence scorers into reusable foundation encoders for comprehensive and supervised antibody screening\.

## AI for Drug Discovery Models Often Do Not Learn as Expected and How to Diagnose These Failure Modes

**Authors:** Nikhil Branson; Aaron Wenteler; Guy Durant; Charlotte Deane

**ID:** 140017 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwdkgwxCZU>) | [PDF](<https://openreview.net/pdf?id=pwdkgwxCZU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140017>)

We argue that in multiple areas of AI for drug discovery \(AIDD\), deep learning models are not learning the meaningful biological or chemical features they were hypothesised to capture, but instead learn non\-generalisable features, for example, from dataset biases\. To address this, we propose the systematic use of misaligned baselines\. We define misaligned baselines as models that rely on signals purposely misaligned with the intended learning objective\. Rather than modelling the underlying biology or chemistry directly, these baselines draw on reductionist sources of information, heavily perturbed input features, or heuristic models\. Competitive performance of such baselines reveals when models are not learning the biologically meaningful representations they were designed to learn\. By examining case studies across multiple branches of AIDD, we demonstrate that misaligned baselines have consistently exposed such failure modes and crucially informed the evaluation and improvement of these models\. We argue that adopting them as standard practice will help to ensure that progress in AIDD reflects genuine advances rather than artefacts of data\-generating processes or evaluation design\.

## Drift\-React: One\-step Generation of Reaction Pathways via SE\(3\) Drifting Fields

**Authors:** Rémi Schlama; Philippe Schwaller

**ID:** 154432 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DdMTM4whIk>) | [PDF](<https://openreview.net/pdf?id=DdMTM4whIk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154432>)

Mapping reaction pathways and transition states \(TS\) is fundamental to chemistry but computationally expensive at scale\. The minimum energy pathway \(MEP\) dictates reaction rates and mechanisms, yet recovering it via electronic\-structure methods requires thousands of costly force evaluations\. Recent generative models accelerate TS identification but require slow iterative inference and only predict isolated saddle\-point snapshots, missing the continuous reaction trajectory\. We introduce Drift\-React, an $\\mathrm\{SE\}\(3\)$\-equivariant generative framework that predicts complete reaction pathways in a single forward pass from only reactant and product geometries\. By shifting distribution evolution to training via a Sinkhorn\-weighted drifting field, Drift\-React eliminates both the iterative force evaluations of NEB\-style methods and the sequential ODE/SDE integration of diffusion and flow matching models\. Evaluated on the Transition1x and Halo8 datasets, our one\-step model generates physically consistent MEPs that accurately capture energetic bottlenecks and enable arbitrary\-resolution sampling along the reaction coordinate\. For isolated TS prediction, Drift\-React matches the sub\-Ångström accuracy of state\-of\-the\-art iterative models while delivering orders\-of\-magnitude acceleration, clearing a major computational bottleneck for large\-scale reaction network exploration\.

## MIND\-DDI: Multi\-Omics Interpretable Drug\-Drug Interaction Prediction with Joint Optimization of Graph Structure, Neural Architecture, and Symbolic Rules

**Authors:** Linxin Xiao; Xin Wang; Yang Yao; Wenwu Zhu

**ID:** 155628 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4AkKfIsmZu>) | [PDF](<https://openreview.net/pdf?id=4AkKfIsmZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155628>)

Multi\-omics drug\-drug interaction \(DDI\) prediction forecasts DDI outcomes from heterogeneous multi\-omics data and complex structured rules, where multi\-omics interpretability of hierarchical biological factor interactions is extremely crucial, which remains unexplored in literature\. In this paper, we are the first to study the problem of Multi\-Omics Interpretable DDI Prediction, which is highly non\-trivial with three challenges: i\) how to identify interaction\-relevant biological entities from large\-scale knowledge sources, which lay the foundation for interpretability; ii\) how to capture multi\-omics cross\-modal connections that elucidate underlying mechanisms under diverse interaction contexts; and iii\) how to explicitly enable mechanism\-aware reasoning over structured biological rules\. To tackle the challenges, we propose a Multi\-omics Interpretable prediction framework with joint optimization of graph structure, Neural architecture, and symbolic rules to hanDle DDI prediction \(MIND\-DDI\), which follows a novel interpretable learning paradigm that tightly couples biomedical graph sampling, hierarchical neural representation learning, and symbolic rule modeling under a unified optimization scheme\. Specifically, we propose a curriculum\-guided biological subgraph sampler for progressively constructing informative subgraphs, then introduce a hierarchical multi\-omics neural architecture search module to capture multi\-omics alignment as well as cross\-modal interactions, and finally present a mechanism\-aware pathway\-based symbolic reasoner for multi\-hop reasoning over a unified neural\-symbolic space\. Extensive experiments show the superiority of MIND\-DDI in both predictive accuracy and interpretability\.

## MICE: Multi\-animal Interaction Context Encoder — A Hierarchical Foundation Model for Mouse Behavior

**Authors:** Yen\-Shuo Su; Weihan Li; Anqi Wu

**ID:** 150591 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h2uqXBSIOu>) | [PDF](<https://openreview.net/pdf?id=h2uqXBSIOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150591>)

Quantifying mouse behavior from pose is a foundational tool in neuroscience, ethology, drug discovery, and animal welfare\. Self\-supervised foundation models are a natural fit, but a foundation model for mouse behavior must handle social behavior \- many behaviors that matter \(aggression, courtship, mounting, allogrooming\) are inherently multi\-animal\. Existing self\-supervised pose models fall short: they encode each animal independently and discard interaction signal, hard\-code the animal count, and pretrain one dataset at a time\. We introduce MICE \(Multi\-animal Interaction Context Encoder\), a hierarchical foundation model for mouse behavior that pretrains jointly on six mouse\-pose corpora spanning one to four mice and 7 to 27 keypoints\. MICE combines a hierarchical individual encoder capturing per\-mouse kinematics at multiple temporal scales with a Perceiver\-style social encoder whose learned latent codebook decouples parameter count from animal count, so a single checkpoint serves any group size without retraining\. Across four evaluation protocols on all six datasets, MICE matches or exceeds prior keypoint\-based baselines, and layer\-wise probing shows the social stage incrementally improves discriminability beyond the individual encoder\. Code and weights will be released\.

## Position: Machine Learning Models for Reaction Transition States Deserve Better

**Authors:** Atharva Tambat; Ankit Ghosh; Swastik Kumar; Raghavan B Sunoj; Abir De

**ID:** 140045 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqmaBhk8KB>) | [PDF](<https://openreview.net/pdf?id=bqmaBhk8KB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140045>)

Understanding reaction mechanisms is central to advances in chemistry, materials science, and drug discovery, where transition states govern reactivity and kinetics\. This position paper argues that current ML approaches for transition state \(TS\) prediction are fundamentally limited by inadequate datasets, weakly grounded methods, and flawed evaluation protocols, leading to overstated progress and questionable chemical reliability\. While recent advances have improved performance, these gains are largely superficial when assessed against the core requirements of a valid TS\. First, widely used datasets suffer from issues of chemical implausibility, lack of diversity, and insufficient validation, introducing noise and bias into model training\. Second, existing methods often neglect essential physical constraints and rely on assumptions like fixed atom mappings, resulting in brittle, non\-generalizable models\. Third, standard evaluation metrics fail to capture chemical validity, often rewarding plausible but physically incorrect predictions\. Empirical analyses, including quantum chemical validation and robustness studies, demonstrate that many reported transition states do not correspond to intended reactions and that models exhibit poor generalization and strong bias toward equilibrium configurations\. We contend that meaningful progress in TS prediction requires a principled rethinking of dataset construction, incorporation of physical constraints into model design, and the development of chemically faithful evaluation frameworks\.

## ProteinOPD: Towards Effective and Efficient Preference Alignment for Protein Design

**Authors:** Yulin Zhang; He CAO; Zihao Jiang; Chenyi Zi; Zhipeng Zhou; Zijing Liu; Yu Li; Jia Li; Ziqi Gao

**ID:** 153649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JlG9kMWxYa>) | [PDF](<https://openreview.net/pdf?id=JlG9kMWxYa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153649>)

Designing proteins with desired functions or properties represents a core goal in synthetic biology, therapeutic development, and drug discovery\.  Recent advances in protein language models \(PLMs\) have enabled the generation of highly designable protein sequences, while preference alignment provides a promising way to steer designs toward desired functions and properties\. Nevertheless, they often trigger catastrophic forgetting of pretrained knowledge, degrading basic designability and failing to balance multiple competing objectives\.  To address these issues, we draw inspiration from On\-Policy Distillation \(OPD\), an advanced post\-training method renowned for mitigating catastrophic forgetting through its mode\-seeking nature\. In this work, we propose ProteinOPD, a multi\-objective preference alignment framework that can effectively balance multiple preference objectives while maintaining the inherent designability of PLMs\. ProteinOPD adapts a pretrained PLM into preference\-specific teachers and distills their knowledge into a shared student via token\-level OPD on the student’s own trajectories\.  During this process, the student is aligned to a unique normalized geometric consensus of weighted teachers while ensuring bounded optimization under conflicts\. This bridges the gap for OPD in multi\-objective/teacher alignment\. Extensive experiments show that ProteinOPD achieves substantial gains on target preference objectives without compromising the designability, with a 8× training speedup over RL\-based alignment competitors\.

## B\-XAIC Dataset: Benchmarking Explainable AI for Graph Neural Networks Using Chemical Data

**Authors:** Magdalena Proszewska; Tomasz Danel; Antoni Antoszek; Dawid Damian Rymarczyk

**ID:** 139598 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GHoBerj4sM>) | [PDF](<https://openreview.net/pdf?id=GHoBerj4sM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139598>)

Understanding the reasoning behind deep learning model predictions is crucial in cheminformatics and drug discovery, where molecular design determines their properties\. However, current evaluation frameworks for Explainable AI \(XAI\) in this domain often rely on artificial datasets or simplified tasks, employing data\-derived metrics that fail to capture the complexity of real\-world scenarios and lack a direct link to explanation faithfulness\. To address this, we introduce B\-XAIC, a novel benchmark constructed from real\-world molecular data and diverse tasks with known ground\-truth rationales for assigned labels\. Through a comprehensive evaluation using B\-XAIC, we reveal limitations of existing XAI methods for Graph Neural Networks \(GNNs\) in the molecular domain\. This benchmark provides a valuable resource for gaining deeper insights into the faithfulness of XAI, facilitating the development of more reliable and interpretable models\.

## PI\-EDG: Physics\-Informed Full\-Space Electron Density Generation from Molecular Geometry

**Authors:** Jiahang Shen; Hongxin Xiang; Zhixiang Cheng; Keke Chen; Yingzhuo Tu; Wenjie Du; xiangxiang Zeng

**ID:** 148293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ywBY60es93>) | [PDF](<https://openreview.net/pdf?id=ywBY60es93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148293>)

Full\-space electron density generation is fundamental to modeling molecular quantum states, ground\-state properties, and chemical interactions\. DFT provides a principled route to electron density, but high\-fidelity calculations require costly self\-consistent iterations, limiting large\-scale quantum\-chemical modeling\. Deep learning offers a promising surrogate, yet existing methods often rely on indirect density\-related prior, including coordinate queries, predefined basis functions, orbital coefficients, or spherical atomic density grids\. These prior introduce reconstruction overhead and can hinder continuous full\-space modeling across sharp nuclear cores and sparse vacuum regions\. Here, we introduce PI\-EDG, a physics\-informed voxel\-space framework that maps molecular geometries directly to full\-space electron\-density fields by combining quantum\-mechanical prior injection, hybrid FNO\-CNN modeling of local and non\-local interactions and magnitude\-aware DS\-LMoE routing for extreme density ranges\. On EDBench, PI\-EDG achieves an MAE of 3\.405$\\times$10$^\{\-3\}$, a total electron\-number MAE of 0\.472, and an average inference time of 133\.4 ms for one molecule\. Compared with graph\-based, basis\-based, and voxel\-based baselines, PI\-EDG demonstrates better predictive accuracy, improved robustness across extreme density regimes, and better physical consistency while maintaining efficient full\-space generation\. These results suggest that PI\-EDG offers a new, direct, and efficient route for accelerating DFT\-based electron density calculations\.

## QT\-Net: Rethinking Evaluation of AI Models in Atomic Chemical Space

**Authors:** Pablo Martínez Crespo; Stefano Ribes; Martin Rahm; Richard Johannes Maximilian Beckmann; Robert Jordan; Marisa Gliege; Santiago Miret; Vijay K Narasimhan; Rocío Mercado

**ID:** 148714 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=valKr48pWt>) | [PDF](<https://openreview.net/pdf?id=valKr48pWt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148714>)

Atomic properties such as partial charges or multipoles encode chemically meaningful information that can inform downstream molecular property prediction, but their evaluation as machine learning targets has been complicated by the absence of a principled out\-of\-distribution evaluation protocol at the atomic level\. In this work, we propose a held\-out evaluation protocol that clusters atomic environments by SOAP descriptors and computes metrics accounting only for cluster labels unseen during training\. Following this procedure, we use 5×5 cross\-validation and Tukey's HSD to run a statistically rigorous comparison of E\(3\)\-equivariant against non\-equivariant, rotationally augmented models for predicting electron populations and multipoles of H, C, N, and O atoms\. Building on our results, we introduce the Quantum Topological Neural Network \(QT\-Net\), a rotationally augmented, non\-equivariant graph neural network\. We show that QT\-Net can be used to infer properties of atoms in molecules from QM9 outside our training set, and that these inferred properties can yield improvement when used as input features for downstream molecular property prediction\. To further validate the framework, molecular dipole moments computed from QT\-Net's per\-atom outputs recover the ground\-truth values reported in QM9\. We release all code and data, including a JAX implementation of QT\-Net, to support the broader use of learned QTA properties as inductive biases for atomic\-scale molecular machine learning\.

## DrugSAGE: Self\-evolving Agent Experience for Efficient State\-of\-the\-Art Drug Discovery

**Authors:** Yikun Zhang; Xiwei Cheng; Tianyu Liu; Yuanqi Du; Wengong Jin

**ID:** 149474 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pqdpYPY0mI>) | [PDF](<https://openreview.net/pdf?id=pqdpYPY0mI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149474>)

Building state\-of\-the\-art \(SOTA\) predictive models for drug discovery requires expensive search over tools, architectures, and training strategies\. Current LLM\-based agents can find SOTA solutions through extensive trial and error, but they do not retain the experience accumulated along the way and therefore pay the full search cost on every new task\. We propose DrugSAGE \(Self\-evolving Agent Experience\), a framework that accumulates and reuses experience across tasks to build SOTA drug discovery models efficiently\. DrugSAGE maintains a cross\-task memory of verified skills, statistical evidence about effective strategies, and a record of recurring errors and their fixes\. In some cases, DrugSAGE transfers a working solution directly without test\-time search\. In 33 molecular property prediction tasks, DrugSAGE ranks first among nine SOTA agents in a single\-task setting\. With memory accumulated from 16 smaller tasks, DrugSAGE achieves a averaged normalized score of 0\.935 on 17 held\-out tasks in a cross\-task evaluation setting and outperforms all baseline agents by 10\-30\\% in a zero\-test\-time search regime\. In summary, our work shows the advantage of cross\-task memory for efficient SOTA model development in drug discovery\.

## On the Selectivity of Generative Models in Structure\-Based Drug Design

**Authors:** Ella Miray Rajaonson; Jungyoon Lee; William Chau; Alan Aspuru\-Guzik; Benjamin Sanchez\-Lengeling; Dominique Beaini; Kirill Neklyudov; Marta Skreta

**ID:** 138964 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tjnm6pEJ3a>) | [PDF](<https://openreview.net/pdf?id=tjnm6pEJ3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138964>)

Designing small\-molecule drugs that selectively bind to a target protein while avoiding unintended interactions with other proteins is essential for reducing side effects that contribute substantially to clinical attrition\. Although structure\-based drug design \(SBDD\) has advanced rapidly with deep learning, most generative models still optimize binding to a single target and disregard selectivity due to limited training data and unknown off\-target interactions\. Motivated by this gap, we introduce SelectBench, a comprehensive benchmark assessing the selectivity of generative SBDD models\. SelectBench provides three curated evaluation tasks reflecting different real\-world drug discovery scenarios: literature\-based case studies, safety screening panels used in pharmaceutical development, and large\-scale structure\-based evaluation sets\. We further introduce a suite of metrics to quantify selectivity and conduct a systematic evaluation of nine representative SBDD models, including methods explicitly trained for selectivity and widely\-used inference\-time guidance techniques\. Our results show that even selectivity\-trained models achieve only modest off\-target discrimination and inference\-time guidance provides limited improvements, underscoring the need for method improvement\. SelectBench provides both a characterization of where current generative SBDD stands on selectivity and an open, extensible platform to accelerate progress\.

## Calibrating Generative Models to Feature Distributions with MMD Finetuning

**Authors:** Nathaniel L\. Diamant; Brian L Trippe

**ID:** 148368 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yNxOZb4Mxr>) | [PDF](<https://openreview.net/pdf?id=yNxOZb4Mxr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148368>)

Generative models can produce individually plausible samples while deviating substantially from a reference set in the distribution of key features\. For example, a model pretrained on broad drug\-like chemical space may generate molecules whose molecular features differ from those of a therapeutic class of interest, such as known antibiotics\. Correcting such distributional \_miscalibration\_ is challenging: direct finetuning on the reference set can overfit and does not control which features are matched\. To fill this gap, we introduce kernel Calibrating Generative Models \(kCGM\)\. kCGM minimizes a maximum mean discrepancy \(MMD\) between generated and reference feature distributions using an unbiased score\-function estimator, with KL regularization to remain close to the pretrained model\. On a reference set of 174 antibiotics, direct finetuning sacrifices chemical validity for feature\-distribution matching, whereas kCGM improves target feature matching while increasing validity\. We further demonstrate kCGM in protein and DNA generation tasks, showing it can adapt autoregressive, continuous\-space diffusion, and discrete diffusion models using only feature\-level supervision\.

## Transferable SCF\-Acceleration through Solver\-Aligned Initialization Learning

**Authors:** Eike S\. Eberhard; Viktor Kotsev; Timm Güthle; Stephan Günnemann

**ID:** 151820 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xjaap3pzlS>) | [PDF](<https://openreview.net/pdf?id=Xjaap3pzlS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151820>)

The cost of Kohn\-Sham density functional theory \(KS\-DFT\) calculations scales with the number of solver iterations, which depends on the quality of the initial guess\. Machine learning methods that predict initial guesses from molecular geometry can reduce this cost, but matrix\-prediction models fail when extrapolating to larger molecules, degrading rather than accelerating convergence \[Liu et al\., 2025\]\.     We show that this failure is a supervision problem, not an extrapolation problem: models trained on ground\-state targets fit those targets well out of distribution, yet produce initial guesses that slow convergence\.     Solver\-Aligned Initialization Learning \(SAIL\) resolves this for both Hamiltonian and density matrix models by differentiating through the self\-consistent field \(SCF\) solver end\-to\-end\.      We introduce the Effective Relative Iteration Count \(ERIC\), a correction to the commonly used RIC that accounts for hidden Fock\-build overhead\.     On QM40, which contains molecules up to 4$\\times$ larger than the training distribution, SAIL reduces ERIC by 37\\% \(PBE\), 33\\% \(SCAN\), and 28\\% \(B3LYP\), more than doubling the previous state\-of\-the\-art reduction on B3LYP\.     On QMugs molecules 10$\\times$ larger than the training set, SAIL delivers a 1\.35$\\times$ wall\-time speedup at the hybrid level of theory, extending ML SCF acceleration to large drug\-like molecules\.

## Mechanism\-Level Chemical Reaction Simulation with Electron Bookkeeping Transformer

**Authors:** Sarah Cao; Shitong Luo; Connor Coley

**ID:** 151985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WLvqyXxKmc>) | [PDF](<https://openreview.net/pdf?id=WLvqyXxKmc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151985>)

Modeling the mechanisms of chemical reactions is central to the prediction and design of chemical reactivity\. We present Electron Bookkeeping Transformer \(Bookkeeper\), a model that simulates chemical reactions at mechanistic resolution by generating electron movement trajectories\. Bookkeeper explicitly models each electron as a token and predicts its movement sequentially, following the arrow pushing formalism in chemistry\. This ensures mass and charge conservation during both elementary step and reaction pathway predictions by construction\. Bookkeeper achieves higher accuracy in predicting both individual mechanistic steps and full reaction pathways, shows strong generalization to out\-of\-distribution reaction types, and runs significantly faster than previous flow matching\-based and large language model\-based methods\. The accuracy and efficiency make Bookkeeper a powerful framework for virtual screening of chemical reactions across diverse reagents, for validating computer\-assisted synthesis planning predictions, and for providing mechanistic interpretability of reactivity; the utility of Bookkeeper as a tool will most likely grow as does its training corpus\.

## Self\-Improvement Imitation with Biologically Guided Search for Protein Design Under Oracle Budgets

**Authors:** Ashima Khanna\-Reiter; Dominik G Grimm

**ID:** 150386 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQpv99SOhF>) | [PDF](<https://openreview.net/pdf?id=iQpv99SOhF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150386>)

Protein sequence optimization under tight oracle budgets requires methods that explore vast combinatorial spaces while making each evaluation informative\. Existing reinforcement learning and off\-policy generative approaches often degrade under surrogate noise, and position\-agnostic mutation proposals risk disrupting functionally critical residues\. We introduce SILO, a trajectory\-level self\-improvement imitation framework for oracle\-budgeted protein design\. SILO uses a hierarchical edit policy that decomposes each mutation into a position choice followed by a residue choice\. In each active\-learning round, the policy samples candidate trajectories via incremental stochastic beam search without replacement \(SBS\), and a UCB\-based proxy ensemble, combined with an alanine\-scan fitness score \(AFS\), selects candidates with functionally relevant edits for in silico oracle evaluation\. The policy is then updated by next\-action cross\-entropy imitation on the round’s best oracle\-labeled trajectories, avoiding value\-function estimation\. Across eight reproduced protein fitness landscapes and five strong baselines from prior work, SILO achieves the highest maximum and top\-100 mean fitness on 8 of 8 landscapes within our evaluations, often exhibiting faster early\-stage improvement\. In low\-data and noisy\-proxy stress tests on two landscapes per setting, SILO remains competitive or best when several baselines degrade\. Ablations show that SBS with AFS account for much of the gains, with iterative imitation providing additional improvement\.

## Benchmarking sequence\-to\-ensemble predictors on UNICORNEdb, a UniProt\-grouped database of PDB\-derived conformational ensembles

**Authors:** William F Vanderbilt\-Fried; Luka Butskhrikidze; Benjamin P Brown; Hassane Mchaourab; Carlos Oliver

**ID:** 138904 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xwvwwQZbXy>) | [PDF](<https://openreview.net/pdf?id=xwvwwQZbXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138904>)

Following the striking success of ML\-driven static protein structure prediction, the challenge of protein conformational flexibility and thermodynamic ensemble prediction is rapidly coming to the foreground, and with it the need for rigorous benchmarks\. Yet, obtaining ground\-truth conformational states at scale remains highly challenging\. Past approaches are either small and hand\-curated or built by clustering PDB chains, which conflates genuine conformational variation with sequence\-induced differences across near\-homologs\. Here we introduce UNICORNE, a database of 50,000\+ protein conformational ensembles centered on UniProt and PDB chain/entity annotations to assemble per\-protein ensembles of experimentally resolved conformations without relying on clustering\. From our database, we derive UNICORNE\-BENCH, a set of 839 multi\-conformation proteins on which we extensively benchmark seven recent sequence\-conditioned predictors spanning generative ensemble models and MSA\-perturbation methods\. We find that the ensemble\-generation problem is far from solved and identify several shared failure modes: even the strongest tool fully recovers only 8\.2\\% of ensembles, performance degrades with conformational diversity, and tools fail on overlapping rather than complementary subsets of targets\. Across the benchmark, we find that MSA\-perturbation methods modestly outperform direct generative approaches\. UNICORNE provides a biologically grounded reference needed to guide the next generation protein structure prediction\.      The full database and leaderboard are available at https://unicornedb\.org \(anonymized\), and source code is available at https://anonymous\.4open\.science/r/unicorne\_bench\_neurips\_source\-2327/\.

## NEAT: Neighborhood\-Guided, Efficient, Autoregressive Set Transformer for 3D Molecular Generation

**Authors:** Daniel Rose; Roxane Axel Jacob; Johannes Kirchmair; Thierry Langer

**ID:** 155357 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6DNN9s5hLZ>) | [PDF](<https://openreview.net/pdf?id=6DNN9s5hLZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155357>)

Transformer\-based autoregressive models offer an efficient alternative to diffusion\- and flow\-matching\-based approaches for generating 3D molecules\.  One challenge remains: standard transformer architectures require a sequential ordering of tokens, which is not inherently defined for the atoms in a molecule\.  Prior works have addressed this by using canonical atom orderings\.  However, these approaches are not permutation invariant w\.r\.t\. atoms and bias next\-token prediction towards ordering conventions\.  We overcome this limitation by introducing a novel neighborhood\-guided training strategy\.  Our model, NEAT \(Neighborhood\-Guided, Efficient, Autoregressive Set Transformer\) treats molecular graphs as sets of atoms and learns an order\-agnostic distribution over admissible tokens at the graph boundary, thereby ensuring atom\-level permutation invariance\.  NEAT achieves state\-of\-the\-art generation quality on the QM9 and GEOM\-Drugs datasets while offering a significant speed advantage over existing baselines\.

## On objective mismatch in molecular retrieval from tandem mass spectrometry

**Authors:** Gaetan De Waele; Marek Wydmuch; Krzysztof Dembczynski; Wojciech Kotlowski; Willem Waegeman

**ID:** 151639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z655zMeBt6>) | [PDF](<https://openreview.net/pdf?id=Z655zMeBt6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151639>)

Identifying molecular structures from LC\-MS/MS spectra is a central problem in computational metabolomics, often approached by predicting molecular fingerprints and retrieving candidates via similarity search\. Despite widespread use, the relationship between training objectives for fingerprint prediction and downstream retrieval performance remains poorly understood\. In this work, we show that these objectives are fundamentally misaligned\. Adopting a decision\-theoretic perspective, we derive novel regret bounds that characterize when Bayes\-optimal predictors for fingerprint similarity diverge from those for molecular retrieval\. Our analysis reveals that optimizing standard similarity\-based losses can provably degrade retrieval performance, and that the extent of this mismatch depends on the similarity structure of candidate sets\. Empirically, we validate our theory on the MassSpecGym benchmark, demonstrating a Pareto frontier between fingerprint accuracy and retrieval metrics across commonly used loss functions\. These results expose an inherent trade\-off in fingerprint\-based molecular identification and provide principled guidance for the design of learning objectives in computational mass spectrometry\.

## Amortized Molecular Optimization via Group Relative Policy Optimization

**Authors:** Muhammad Bin Javaid; Hasham Hussain; Ashima Khanna\-Reiter; Berke Kisin; Jonathan Pirnay; Alexander Mitsos; Dominik G Grimm; Martin Grohe

**ID:** 154667 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BueyrCFsnx>) | [PDF](<https://openreview.net/pdf?id=BueyrCFsnx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154667>)

In structurally constrained molecular optimization, state\-of\-the\-art methods restart an expensive oracle\-driven search from scratch for every new input structure, scaling poorly to settings with many starting structures or expensive oracles\. While amortized approaches that learn a transferable policy could in principle remove this bottleneck, existing methods struggle to generalize to diverse structural constraints at inference time\. We present AMORTIX, an amortized Graph Transformer model that natively supports such constraints, optimizing molecular structures in a single forward pass with zero inference\-time oracle calls\. A central challenge for amortized training in this domain is that optimization difficulty varies drastically across starting structures\. We show that, under this heterogeneity, standard reinforcement learning methods fail to stabilize training, and address this by normalizing rewards within groups of completions sharing the same starting structure\. We evaluate on structurally constrained single\- and multi\-target kinase inhibitor design, and on a few\-shot prodrug case study\. AMORTIX outperforms both amortized and instance\-optimization baselines on goal\-directed scaffold decoration and ranks first among amortized methods on the PMO benchmark; the prodrug case study further demonstrates transfer of a learned modification rule to unseen drug structures\.

## Looking Under the Streetlight: Evaluation in Generative Molecular Dynamics

**Authors:** Simon Olsson; Frank Noe; Grant Rotskoff; Kresten Lindorff\-Larsen

**ID:** 140112 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6iB0w2UeaM>) | [PDF](<https://openreview.net/pdf?id=6iB0w2UeaM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140112>)

This position paper argues that evaluation in generative molecular dynamics \(GenMD\) exhibits a recurring pattern of comparison against insufficient or misleading benchmarks, which risks over\-claiming advantage over classical baselines\. The pattern reflects a structural misalignment between common evaluation practices and the scientific tasks the field sets for itself\. The reason is structural: the natural ground truth, exhaustive molecular dynamics on the systems of interest, is computationally costly, the very gap that motivates the field\. With ground truth inaccessible, evaluation drifts toward convenient proxies, and the resulting norms entrench easily\. We identify misaligned evaluation patterns that persist as a community\-level equilibrium rather than failures of individual papers, and propose concrete observables, reporting standards, and benchmark designs, both computational and experimental, that better reflect what GenMD aspires to deliver\. Our aim is constructive: to give the field shared language and tools for evaluation that match its scientific ambitions before today's conventions calcify into norms\.

## Harmonic Torsional Diffusion for Flexible Protein\-Ligand Docking

**Authors:** Maksim Zhdanov; Pavel Strashnov; Vladislav Kurenkov

**ID:** 153661 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JgekVKyVaW>) | [PDF](<https://openreview.net/pdf?id=JgekVKyVaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153661>)

Molecular docking requires reasoning jointly about ligand pose and protein flexibility\. Most diffusion\-based docking models predict torsional updates with generic Euclidean heads that ignore the periodic geometry of angular variables\. This mismatch is especially limiting in flexible docking, where ligand conformations and pocket side chains co\-adapt to form the bound complex\. Here, we introduce Harmony, a harmonic torsional diffusion framework for flexible protein\-ligand docking\. Harmony parameterizes ligand and side\-chain torsional score fields as derivatives of learned harmonic potentials on the circle, whose noise\-level dependence is supplied analytically by the heat semigroup of variance\-exploding diffusion on the torus\. This construction makes periodicity explicit, removes the need to learn noise conditioning for torsional updates, and gives the model a frequency\-aware inductive bias over rotameric motion\. On the PDBBind benchmark, Harmony improves ligand pose accuracy and pocket all\-atom reconstruction over recent flexible docking methods\. On PoseBusters, it improves the physical validity of generated complexes\. Case studies on EBNA1 and KRAS G12D illustrate the method's behavior on a polar and a shallow binding site, respectively\. Together, these results indicate that aligning the score parameterization with the geometry of the diffusion process is a simple and effective lever for improving flexible docking\.

## Lifting Biomolecular Data Acquisition

**Authors:** Eli N\. Weinstein; Andrei Slabodkin; Mattia G Gollub; Kerry Dobbs; Xiao\-Bing Cui; Fang zhang; Kristina Gurung; Elizabeth B Wood

**ID:** 154237 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FD6jyMD6pj>) | [PDF](<https://openreview.net/pdf?id=FD6jyMD6pj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154237>)

One strategy to scale up ML\-driven science is to increase wet lab experiments' information density\. We present a method based on a neural extension of compressed sensing to function space\. We measure the activity of multiple different molecules simultaneously, rather than individually\. Then, we deconvolute the molecule\-activity map during model training\. Co\-design of wet lab experiments and learning algorithms provably leads to orders\-of\-magnitude gains in information density\. We demonstrate on antibodies and cell therapies\.

## MSAlign: Aligning Molecular and Mass Spectra Foundation Models for Metabolite Identification

**Authors:** Paul Krzakala; Gabriel Melo; Camille Lançon; Charlotte Laclau; Rémi Flamary; Etienne A Thévenot; Florence d&amp;amp;\#x27;Alché\-Buc

**ID:** 155366 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=69xCNxFiTJ>) | [PDF](<https://openreview.net/pdf?id=69xCNxFiTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155366>)

Accurately identifying metabolites \(small molecules\) from mass spectrometry data remains a core challenge in metabolomics, with broad applications in drug discovery, environmental analysis, and clinical research\. We address the Molecule Retrieval task, which consists in recovering the chemical structure of a metabolite from its MS/MS spectrum given a set of candidate molecules\. While the recent release of benchmark datasets such as MassSpecGym and Spectraverse has considerably accelerated the development of novel machine learning approaches, the complexity of data preprocessing pipelines and the lack of unified implementations make methods and results difficult to reproduce and compare\. We make three contributions\. First, we propose a unified framework encompassing recent approaches based on representation alignment and contrastive learning\. Second, we introduce MSAlign, inspired by multimodal alignment in vision\-language models, which learns a shared representation space by aligning two frozen foundation models \(DreaMS for mass spectra and ChemBERTa for molecules\) through lightweight MLP projections trained with a candidate\-based contrastive objective\. MSAlign is simple to implement, fast to train and consistently outperforms existing approaches across all benchmarks\. Third, we investigate a long\-standing evaluation problem: data splitting strategies in molecule retrieval implicitly trade off data leakage against domain shift\. We formalize this tension by introducing a quantitative measure of distribution shift, and use it to evaluate splitting strategies in existing benchmarks\. All datasets, splits, candidate sets, and a unified implementation of MSAlign and baselines are publicly released to support reproducible research\.

## Trustworthy Retrosynthesis: Eliminating Hallucinations with a Diverse Ensemble of Reaction Scorers

**Authors:** Michał Sadowski; Tadija Radusinović; Maria Wyrzykowska; Lukasz Sztukiewicz; Jan Rzymkowski; Piotr Kozakowski; Mikolaj Sacha; Ruard van Workum; Stanislaw Jastrzebski

**ID:** 152729 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QnViF2joi3>) | [PDF](<https://openreview.net/pdf?id=QnViF2joi3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152729>)

Retrosynthesis is one of the domains transformed by the rise of generative models, and it is one where the problem of nonsensical or erroneous outputs \(hallucinations\) is particularly insidious: reliable assessment of synthetic plans is time\-consuming, with automatic methods lacking\. In this work, we present RetroTrim, a retrosynthesis system that successfully avoids nonsensical plans on a set of challenging drug\-like targets\. Compared to common baselines in the field, our system is not only the sole method that succeeds in filtering out hallucinated reactions, but it also results in the highest number of high\-quality paths overall\. The key insight behind RetroTrim is the combination of diverse reaction scoring strategies, based on machine learning models and existing chemical databases\. We show that our scoring strategies capture different classes of hallucinations by analyzing them on a dataset of labeled retrosynthetic intermediates\. To measure the performance of retrosynthesis systems, we propose a novel evaluation protocol for reactions and synthetic paths based on a structured review by expert chemists\. Using this protocol, we compare systems on a set of 32 novel targets, curated to reflect recent trends in drug structures\. While the insights behind our methodology are broadly applicable to retrosynthesis, our focus is on targets in the drug\-like domain\. By releasing our benchmark targets and the details of our evaluation protocol, we hope to inspire further research into reliable retrosynthesis\.

## ACER: Towards Generalizable Protein\-ligand Co\-folding

**Authors:** Nopsinth Vithayapalert; Francesca Grisoni

**ID:** 151500 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aBFHLIs9dX>) | [PDF](<https://openreview.net/pdf?id=aBFHLIs9dX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151500>)

Predicting protein–ligand complex structures is a central challenge in drug discovery\. While recent co\-folding models such as AlphaFold\-3 achieve accurate structure prediction, they fail to generalize to underexplored binding interfaces \-\-  systematically misplacing ligands, particularly for allosteric or structurally novel targets\. To address this gap, we present \\textbf\{ACER\} \(\\textbf\{A\}daptive \\textbf\{C\}o\-folding via pocket \\textbf\{E\}xploration and pose \\textbf\{R\}anking\), a training\-free framework that \(a\) enables co\-folding models to systematically explore alternative binding pockets, and \(b\) leverages the discovered pockets to increase pose accuracy\. Our method enables the efficient discovery of non\-prevalent pockets without prior expert knowledge\. ACER improves pocket discovery and pose accuracy on allosteric targets and structurally novel complexes, successfully modeling binding interfaces that are under\-represented or absent from the training set\. Our results demonstrate how improved sampling dynamics enhance the generalisability of co\-folding models without retraining\.

## ColdDDI: Evaluating Knowledge Utilization in Cold\-Start Drug\-Drug Interaction Prediction

**Authors:** Jiheng Liang; Chen Zhao; Di Wu; Chenyang Bu; Yunpeng Hong; Xingquan Zhu; Yi He

**ID:** 138874 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zbG2HOGCGH>) | [PDF](<https://openreview.net/pdf?id=zbG2HOGCGH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138874>)

Cold\-start drug\-drug interaction \(DDI\) prediction tests whether models can identify clinically significant interactions for drugs without training\-time interaction history\. Existing benchmarks mostly report aggregate edge\-prediction scores, leaving a key evaluation question unanswered: when models receive molecular, textual, or knowledge\-graph \(KG\) evidence, do they actually use the evidence that pharmacologically supports the interaction? We introduce ColdDDI, a reconstructible evaluation benchmark built from the latest DrugBank 5\.1\.13, with 1,900 approved small\-molecule drugs and 565,731 positive DDI pairs\. ColdDDI evaluates three levels of drug novelty, namely test pairs whose two drugs were both seen during training, pairs with one unseen drug, and pairs with two unseen drugs\. It also annotates each interaction by whether it changes drug exposure or drug effect, and by whether the biomedical knowledge graph contains shared enzymes, transporters, or targets that can plausibly mediate the interaction\. These annotations allow ColdDDI to separate two factors that aggregate metrics conflate, namely whether mechanistic evidence is available, and whether a model prediction depends on that evidence\. We evaluate eight conventional DDI methods and 13 LLMs; for open\-weight LLMs, we test five prompt patterns and use masking, drug replacement, and channel\-sensitivity metrics to probe knowledge utilization\. ColdDDI exposes that, in the hardest split where both drugs are unseen, the main performance divide is mediator availability\. A fine\-tuned 1B LLM recovers 89\-93% of interactions with a shared enzyme, transporter, or target, but only 40\-62% without such a mediator\. More importantly, KG\-provided evidence is not always used; several KG\-augmented baselines change little when the shared mediator is masked or disrupted, whereas fine\-tuned LLMs respond strongly to this intervention\. Thus, ColdDDI evaluates knowledge utilization rather than knowledge access alone, showing where cold\-start DDI models rely on mechanistic evidence and where they fail despite receiving it\. We release derivative annotations, splits, prompts, diagnostics, evaluation code, and a DrugBank reconstruction pipeline\.

## Ensembits: an alphabet of protein conformational ensembles

**Authors:** Kaiwen Shi; Carlos Oliver

**ID:** 151956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYPcrKsaiH>) | [PDF](<https://openreview.net/pdf?id=WYPcrKsaiH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151956>)

Protein structure tokenizers \(PSTs\) are workhorses in protein language modeling, function prediction, and evolutionary analysis\. However, existing PSTs only capture local geometry of static structures, and miss the correlated motions and alternative conformational states revealed by protein ensembles\. Here we introduce Ensembits, the first tokenizer of protein conformational ensembles\. Ensembits address challenges inherent to tokenizing dynamics: deriving informative geometric descriptors across conformations, permutation\-invariance encoding of variable\-size ensembles, and conquering sparsity in dynamics data\. Trained with a Residual VQ\-VAE using a frame distillation objective on a large molecular dynamics corpus, Ensembits outperforms all related methods on RMSF prediction, and is the strongest standalone structural tokenizer on an token\-conditioned ANOVA test on per\-residue motion amplitude\. Ensembits further matches or exceeds static tokenizers on EC, GO, binding site/affinity prediction, and zero\-shot mutation\-effect prediction despite using far less pretraining data\. Notably, the distillation objective enables Ensembits to predict dynamics token from one single predicted structure, which alleviates dynamics data sparsity\. As the field moves from static structure prediction toward ensemble generation, Ensembits offer the discrete vocabulary needed to bring dynamics into protein language modeling and design\. Our codes can be found at: https://anonymous\.4open\.science/r/Ensembits\.

## LEMON\-ZEST: Evolution\-Informed Tokenization for Efficient Protein Language Modeling

**Authors:** Biswajit Banerjee; Claudia Alvarez Carreno; Anton S Petrov

**ID:** 153755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IxAaZ6h5Cc>) | [PDF](<https://openreview.net/pdf?id=IxAaZ6h5Cc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153755>)

Protein Language Models \(PLMs\) have made remarkable progress following scaling laws established in natural language processing across sequence\- and structure\-based tasks, yet the potential of tokenization remains underexploited\. Unlike human language, proteins preserve structure despite extensive sequence variation — a property standard tokenization strategies fundamentally fail to capture\. We introduce ZEST \(Zoned Encoding of Sequence Traits\), an evolution\-informed vocabulary derived from conserved regions of multiple sequence alignments\. ZEST allows embedding domain\-level biological priors directly at the tokenization stage rather than learning them implicitly through scale\. ZEST natively compresses sequences to an average token length of 4 residues, enabling our model to process 4,000 residues within a standard 1024\-token context window\. Building on this, we present LEMON \(Layered Extraction of Molecular Ordering from Nature\), a compact 200M\-parameter sequence\-based model for detection of remote homology between protein sequences trained on a single H100 GPU for one week\. Despite its modest size, LEMON outperforms state\-of\-the\-art models ranging from 600M to 3B parameters\. Our results demonstrate that evolution\-informed tokenization can substitute for massive parameter scaling, opening a new direction for efficient, biologically\-grounded protein representation learning\. All code, model weights, and results are publicly available under the MIT license\.

## pCoMole: Pareto\-Constrained Molecule Editing with Discrete Flows

**Authors:** Tong Chen; Maximilian Holsman; Lin Zhao; Yinuo Zhang; Pranam Chatterjee

**ID:** 153818 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IUuHJ0x69N>) | [PDF](<https://openreview.net/pdf?id=IUuHJ0x69N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153818>)

Biomolecular therapeutics often start from known sequences and require targeted editing to improve multiple properties while satisfying hard biochemical and manufacturability constraints\. Existing generative methods do not jointly support multi\-objective optimization, hard feasibility, and sequence editing in discrete, variable\-length biological spaces\. We introduce \*\*P\*\*areto\-\*\*Co\*\*nstrained \*\*Mol\*\*ecule \*\*e\*\*diting \(\*\*pCoMole\*\*\), a framework built on discrete flow matching that steers a pre\-trained Edit Flow toward user\-specified preferences while enforcing terminal feasibility\. pCoMole defines a feasibility\-gated terminal distribution using an augmented Tchebycheff utility and realizes the resulting preference tilt through a Doob\-h transform of the underlying edit process\. To make this construction practical, we approximate the required harmonic function using short Monte Carlo rollouts over candidate edits, yielding an efficient guided editor with provable preference consistency\. We validate pCoMole by shrinking GFP while retaining fluorescence\-related properties, shortening diverse Cas9 orthologs while preserving PAM specificity, and compressing peptide binders into short peptidomimetics that optimize seven drug\-related properties under hard constraints\. Overall, pCoMole enables constraint\-aware, Pareto\-aligned editing of biomolecular sequences in discrete, variable\-length spaces\.

## Stein Kernelized Molecular Dynamics for Active Learning of Interatomic Potentials

**Authors:** Joanna Zou; Fraser Birks; Dallas Foster; Youssef Marzouk

**ID:** 152842 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PyNQqAofSM>) | [PDF](<https://openreview.net/pdf?id=PyNQqAofSM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152842>)

Machine learning interatomic potentials \(MLIPs\) enable efficient and accurate atomistic simulations but depend critically on the quality and diversity of the training data\. We introduce Stein kernelized molecular dynamics \(SKMD\), an enhanced sampling method that uses interacting particle dynamics to acquire informative training configurations for the active learning and fine\-tuning of MLIPs\. SKMD corresponds to a stochastic variant of Stein variational gradient descent that is adapted for molecular dynamics by incorporating asynchronous particle updates and a kernel of global atomic descriptors, which provides a symmetry\-aware measure of configurational similarity\. Unlike other enhanced samplers used in molecular dynamics, SKMD preserves the Boltzmann distribution as the asymptotic distribution of the dynamics\. This property enforces a balance between the exploration of diverse configurations and attraction toward high\-probability regions of the energy landscape\. We further propose an approach to efficient online data acquisition using an adaptive stopping criterion that selects non\-redundant training data over the course of simulation\. We demonstrate SKMD for the active learning of a neural network model of the Muller\-Brown potential and the fine\-tuning of a MACE interatomic potential for alanine dipeptide\. Compared to active learning baselines, our method achieves higher model accuracy in fewer training iterations, with the same number of acquired training samples\.

## On the Design Space of Discrete Diffusion Online Adaptation for Molecular Optimization

**Authors:** Trevor Chen; Ariel Dai; Jason Yang; Riccardo De Santi; Daniel Khalil; Wenda Chu; Nate Gruver; Pranav Murugan; Alexander Goldberg; Maruan Al\-Shedivat; Yisong Yue

**ID:** 155527 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4utR9RrMnf>) | [PDF](<https://openreview.net/pdf?id=4utR9RrMnf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155527>)

We study how to design online optimization loops for molecular optimization via adaptation of pre\-trained generative models\. At test time, we aim to utilize limited oracle feedback to steer generation toward top\-molecules achieving high rewards\. This creates a design problem coupled across several dimensions, including which candidates receive oracle evaluations, how observed rewards are utilized for model update, and how to overcome pre\-trained model biases–to effectively explore over complex design spaces\. Despite recent algorithmic progress on each individual component, it remains unclear how they interact in practice, within real\-world online adaptation loops\. For instance, top\-$K$ optimization objectives may make adaptation overly greedy and thereby reduce exploration, while model\-debiasing techniques may be unnecessary when exploration is already induced by exploratory acquisition functions, e\.g\., Thompson sampling\. To address this, we conduct a controlled study on discrete\-diffusion molecular optimization, finding that well\-designed components remain beneficial when combined, indicating that they tackle complementary issues\. Together, these components yield an online fine\-tuning recipe that outperforms offline fine\-tuning and search\-augmented baselines across several small\-molecule binding affinity and protein fitness optimization tasks, under equal oracle\-call budgets and GPU\-hour accounting\.

## Self Driving Datasets: From 20 Million Papers to Nuanced Biomedical Knowledge at Scale

**Authors:** Haydn Jones; Yimeng Zeng; Alden Rose; Yifei Li; Yining Huang; Kaiwen Wu; Jiaming Liang; Maggie Huan; Yoseph Barash; Cesar de la Fuente\-Nunez; Osbert Bastani; Zachary Ives; Mark Yatskar; Jacob Gardner

**ID:** 139739 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7HQtc15Sfm>) | [PDF](<https://openreview.net/pdf?id=7HQtc15Sfm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139739>)

Manually curated biomedical repositories\-\-\-spanning bioactivity, genomics, and chemistry\-\-\-are expensive to maintain, lag behind primary literature, and often discard experimental context\. The absence of contextual information obscures critical nuances, thereby complicating the assessment of data correctness and coverage, necessary criteria for building high\-quality models\. We show that PubMed itself can be turned into structured datasets\-\-\-autonomously and cost\-effectively\-\-\-that are larger, more nuanced, and more accurate than the curated databases they would replace\. We present three coupled contributions: \(1\) an LLM\-based entity\-tagging pipeline, grounded in nine biomedical ontologies, that tags 4\.5 billion entities across 19 categories in a 22\.5M\-paper, 2\.5\-trillion\-token PubMed corpus; \(2\) hybrid sparse–dense retrieval infrastructure supporting surgical entity\-filtered semantic queries over the tagged corpus; and \(3\) Starling, a multi\-agent deep research system that, given only a natural\-language task description, autonomously designs precision\- and recall\-targeted retrieval filters, induces an extraction schema, and emits structured records with nuance\-rich fields and supporting passages\. Applied to six tasks\-\-\-blood\-brain barrier permeability, oral bioavailability, acute toxicity \(LD50\), gene\-disease associations, protein subcellular localization, and chemical reactions\-\-\-Starling produces \~7\.7M records \(per\-task scale ranges from 131K to 3M\); several of these are, to our knowledge, the largest public datasets for their respective properties\. Frontier\-model rejection of our kept extractions is 0\.6–7\.7% across tasks, surprisingly far below the error rates we measure on the widely used, manually curated counterparts \(e\.g\., 16\.5% on BBB\_Martins, 7\.3% on Bioavailability\_Ma\)\. Beyond scale and accuracy, the attached supporting passages carry nuance that tabular databases discard: for example, oral bioavailability of a molecule might depend on whether the patient is fed or fasted\. Together, the corpus, retrieval layer, and agent establish a foundation for multimodal predictive and generative models in AI\-driven therapeutic design\. We release code and links to our datasets at https://anonymous\.4open\.science/r/starling\-B026/\.

## Budgeted Quotient\-Residual Guidance for Frozen Pocket\-Conditioned Molecular Diffusion

**Authors:** Xinyu Wang; Jinbo Bi; minghu song

**ID:** 152994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OlWbCLrL1d>) | [PDF](<https://openreview.net/pdf?id=OlWbCLrL1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152994>)

Pocket\-conditioned molecular diffusion updates ambient atom coordinates, but many lead\-optimization objectives are expressed on quotient features such as distances, contacts, and anchored substructures\. We introduce budgeted quotient\-residual guidance \(QRG\), an inference\-time correction that makes these quotient objectives active without retraining the molecular generator\. QRG lifts quotient covectors to metric\-horizontal ambient directions and delivers them through a trust budget set by the frozen sampler's own step norm: quotient geometry chooses the direction, while sampler motion sets the scale\. We derive the horizontal lift, closed\-form sampler\-scaled update, KL/kinetic interpretation around a frozen reverse step, equivariance conditions, and a product\-budget split for separately normalized section and residual controls\. Controlled quotient tasks confirm that sampler\-relative delivery activates signals that raw local quotient gradients leave dormant\. On frozen TargetDiff backbones, official seed\-0 CBGBench ligand\-generation/editing sweeps show practical quality\-\-runtime gains: CheapMain improves validity from 0\.815 to 0\.864 on fragment growing, 0\.664 to 0\.707 on scaffold hopping, and 0\.681 to 0\.712 on linker design, while PCMain improves fragment/scaffold and remains near\-neutral on linker\. Novelty remains 1\.000 and diversity is preserved in the matched multi\-seed molecular slice, giving task\-dependent improvements without sampler retraining or backbone modification\. Overall, QRG provides a lightweight route to quotient\-aware inference for frozen molecular samplers with explicit runtime accounting\.

## BioBlobs: Unsupervised Discovery of Functional Substructures for Protein Function Prediction

**Authors:** Xin\(Allen\) Wang; Kaiwen Shi; Carlos Oliver

**ID:** 150599 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gxLUIHJfi0>) | [PDF](<https://openreview.net/pdf?id=gxLUIHJfi0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150599>)

Protein function is driven by cohesive substructures, such as catalytic triads, binding pockets, and structural motifs, that occupy only a small fraction of a protein's residues\. Yet existing pipelines built on protein encoders do not model proteins at the substructure level, leaving the central biological question unanswered: \*which substructure of a protein is responsible for its function?\* We introduce BioBlobs, an encoder\-agnostic, end\-to\-end differentiable framework that compresses a protein into a small set of cohesive substructures \(\*blobs\*\) and predicts function from these blobs alone, so that each blob corresponds to a candidate functional region\. Across diverse protein function prediction tasks and multiple sequence\- and structure\-based encoders, BioBlobs matches or exceeds strong baselines while operating on only a small fraction of residues\. The discovered \*blobs\* adapt their spatial scale to the task, ranging from local catalytic sites to entire structural domains\. Trained only on protein\-level labels, BioBlobs recovers experimentally annotated catalytic sites in the M\-CSA database, demonstrating unsupervised functional substructure discovery and opening a path to large\-scale functional site discovery across the unannotated proteome\.

## MixUni: Joint Multi\-Property Prediction for Chemical Mixtures with Physics\-Informed Heads

**Authors:** Qinan Huang; Weizhi Xue; Weizhou Wang; Mingxuan Cao; Ian Su

**ID:** 150954 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e3HTIyxtsJ>) | [PDF](<https://openreview.net/pdf?id=e3HTIyxtsJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150954>)

Accurate prediction of physico\-chemical properties in multi\-component liquid mixtures is critical for designing next\-generation electrolyte battery materials\. Despite recent progress in mixture modeling, existing methods often treat each target property independently, and they struggle to capture the shared molecular mechanisms that couple transport, thermodynamic, and structural properties across heterogeneous mixture systems\. To address these limitations, we propose \\method, a unified geometry\-aware framework for joint multi\-property prediction in chemical mixtures\. \\method combines an E\(3\)\-equivariant molecular encoder with property\-conditioned prediction heads, enabling a shared representation across diverse mixture tasks while preserving property\-specific inductive biases\. In particular, \\method incorporates a stretched\-Arrhenius conductivity head to model temperature\-dependent transport behavior and a sparse Mixture\-of\-Experts readout to adapt to heterogeneous property regimes\. Comprehensive experiments on five CheMixHub mixture\-property tasks show that \\method consistently improves over single\-property geometric baselines, with strong gains in low\-data and chemically out\-of\-distribution settings\. These results demonstrate that combining joint representation learning with physically informed readouts provides an effective and general framework for reliable property prediction in complex liquid mixtures\.

## MaterialsSaddles: 34 Million Transition States and a Flow\-Matching Saddle\-Point Predictor for Materials

**Authors:** Ilgar Baghishov; Sung Hoon Jung; Graeme Henkelman

**ID:** 139769 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5lFUOghgb2>) | [PDF](<https://openreview.net/pdf?id=5lFUOghgb2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139769>)

Transition state \(TS\) search is the rate\-limiting step in high\-throughput kinetics screening\. Generative models have been used to accelerate TS prediction for molecules, but extending them to periodic materials has been blocked by the absence of a large\-scale materials TS dataset\. We release MaterialsSaddles, the first such dataset: 34\.14 M \(reactant, saddle, product\) triplets generated with the state\-of\-the\-art UMA\-S\-1\.2 universal interatomic potential across four subsets, comprising 31\.35 M triplets over LeMat\-Bulk's 5\.34 M\-structure deduplication of Materials Project, OQMD, and Alexandria; 2\.59 M triplets over OC20 surfaces; 167 k triplets over OC22 oxide electrocatalysts; and 35 k climbing\-image nudged elastic band \(CI\-NEB\) paths over Materials Project battery cells\. The release totals 102\.4 M structures \(687 GB\) in ASE\-LMDB shards with stratified 90/5/5 splits, generated on a 500,000 GPU\-hour HPC pipeline\. Every triplet is connected by construction via double\-minimization from the converged saddle, and every frame carries per\-frame metadata including eigenmodes, curvatures, bond\-change diffs, and source identifiers\. As a working demonstration of the dataset's intended use, we release SaddleFlow, a flow\-matching reactant\-and\-product\-conditional saddle\-point generator built on a UMA\-S\-1\.2 backbone with FiLM\-based time conditioning and an SO\(3\)\-equivariant velocity head, trained on the mp20bat subset of MaterialsSaddles\. In a pilot DFT study, we show that dimer searches initialized from a sample of mp20bat test triplets converge substantially faster and more reliably than those initialized from the standard reactant\-product midpoint guess, indicating that MaterialsSaddles and SaddleFlow together offer a practical path to scaling DFT\-level transition\-state searches\. MaterialsSaddles \(CC\-BY 4\.0\), SaddleFlow \(MIT\), and the data\-generation engine SaddleMill \(MIT\) are publicly released\.

## Controllable Molecular Generative Foundation Models

**Authors:** Yihan Zhu; Yuhan Liu; Weijiang Li; Tengfei Luo; Meng Jiang

**ID:** 149529 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pTD7f0lpDA>) | [PDF](<https://openreview.net/pdf?id=pTD7f0lpDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149529>)

Despite the success of foundation models in language and vision, molecular graph generation still lacks a unified framework for heterogeneous design tasks with reliable controllability\.  While reinforcement learning \(RL\) offers a natural post\-training mechanism for task\-specific optimization, applying it to graph generative models is hindered by the vast atom\-wise action spaces and chemically invalid intermediate states\. We propose \\textbf\{Co\}ntrollable \\textbf\{Mole\}cular Generative Foundation Models \(CoMole\), built with a unified motif\-aware graph diffusion pipeline\.  By learning a motif\-aware graph space, CoMole transfers pretrained structural priors into controllable generation, where RL optimizes conditional reverse policies over chemically meaningful decisions\. We theoretically characterize the bottleneck of atom\-level RL and justify motif\-aware policy optimization\. Across three heterogeneous benchmarks spanning materials and drug discovery, CoMole ranks first in controllability on all nine targets, reduces MAE by up to 48\.2\\% relative to the strongest baselines, and maintains validity above 0\.94 without rule\-based correction or post\-hoc filtering\.  We further show that CoMole transfers controllability to unseen properties by optimizing only task embeddings with the generator frozen, achieving performance competitive with strong task\-specific baselines\.

## CupOFMoCA: Coupled Objective\-Guided Discrete Flows for Molecular Conjugate Assembly

**Authors:** Ruoxi Zhang; Ziang Li; Jiatao Gu; Pranam Chatterjee

**ID:** 155389 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=629AZsasM7>) | [PDF](<https://openreview.net/pdf?id=629AZsasM7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155389>)

Molecular conjugates, including PROTACs and peptide\-drug conjugates \(PDCs\), derive their function from the joint behavior of multiple coupled components, yet most generative approaches design these components independently and combine them only after generation\. Such staged pipelines ignore cross\-component dependencies and often produce conjugates that are chemically invalid, fall outside empirical conjugate distributions, or lose function upon assembly\. We introduce $\\textbf\{C\}$o$\\textbf\{up\}$led $\\textbf\{O\}$bjective\-Guided Discrete $\\textbf\{F\}$lows for $\\textbf\{Mo\}$lecular $\\textbf\{C\}$onjugate $\\textbf\{A\}$ssembly $\(\\textbf\{CupOFMoCA\}\)$, a discrete generative framework that formulates conjugate design as a constrained, coupled generation problem\. CupOFMoCA restricts generative trajectories to a chemically feasible conjugate manifold and biases local transitions using target\-specific activity predictors, ensuring all components remain mutually compatible throughout generation\. We show that coupling constraints and objective guidance enable anticipatory design that preserves post\-assembly predicted activity and produces structurally realistic conjugates across both PDC and PROTAC settings, outperforming staged baselines, including LinkerNet, DiffLinker, and DiffPROTACs for PROTACs, across assembly validity, predicted activity, and physicochemical property ranges\. These results demonstrate that explicit coupling and constraint enforcement are sufficient to recover functional conjugates across conjugate classes, and provide a principled foundation for generative modeling where function emerges only at the level of the assembled system\. Our anonymous code repository can be found at https://anonymous\.4open\.science/r/Cupofmoca\-Neurips\.

## StereoPep: Do Molecular Models Understand Stereochemistry? A Benchmark on Synthetic Diastereomeric Peptides

**Authors:** Michael Desgagné; Amirabbas Kazeminia; Kübra Kaygisiz; Bradley Pentelute; Marinka Zitnik

**ID:** 138943 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=upDTyHCLSr>) | [PDF](<https://openreview.net/pdf?id=upDTyHCLSr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138943>)

Existing peptide models saturate natural\-sequence proteomics benchmarks, but whether they capture the underlying physicochemical dynamics or merely pattern\-match on sequence statistics remains unclear\. Public peptide datasets offer no axis along which to test this: non\-canonical residues and stereochemical variation are essentially absent\. We introduce StereoPep, a benchmark of 48,788 chemically synthesized peptides spanning 11 libraries, produced in the laboratory via high\-throughput flow synthesis and characterized experimentally by reverse\-phase liquid chromatography retention time\. Unlike model\-generated synthetic data, every peptide in StereoPep is a real molecule with a real chromatographic measurement\. The dataset is constructed around matched diastereomeric pairs \(sequences identical in primary structure but differing at a single stereocenter\), providing a direct test of whether models capture three\-dimensional stereochemical information\. StereoPep enables progress across multiple fields: it serves as a benchmark for stereochemistry\-aware molecular representations and geometric deep learning, supports adapting protein language models to non\-canonical residues, and underpins emerging proteomics multiplexing strategies that encode samples through retention\-time shifts\. Across specialized retention\-time models, graph\-based architectures, and protein language models, all approaches predict overall retention reasonably well \(Pearson $r \\approx 0\.80$\) but collapse on diastereomer pair discrimination \(AUC $\\approx 0\.55$\), revealing that current representations encode atomic composition far better than 3D structure\.

## Equivariant Force Field Calibration for Flow\-based Protein Design

**Authors:** Fang Wu

**ID:** 154193 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FVSOcen7JO>) | [PDF](<https://openreview.net/pdf?id=FVSOcen7JO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154193>)

Flow models show promise for molecular design due to their fast, expressive sampling capabilities\. However, their applicability to complex biological systems remains limited by a lack of physical grounding, which leads to unrealistic or unstable molecular structures\.  This work presents a framework that integrates force field guidance with consistency\-based training to improve the physical fidelity of flow\-based generative models\. We calibrate pretrained flow models using differentiable physical energy functions to steer generation toward low\-energy and sterically valid conformations\. A consistency\-based training strategy enables accurate, robust generation with very few sampling steps, improving inference efficiency\. We evaluate it on multiple protein design tasks, including full\-atom structure generation and peptide binder modeling\. Experiments show that our approach consistently improves physical plausibility and geometric stability, while enabling favorable trade\-offs between structural diversity and computational cost\. By unifying physical calibration and efficient sampling, we advance the scalability and reliability of flow\-based molecular generation\.

## SLOT\-IR: Learning Disentangled Slot Representations for Infrared Spectral Unmixing

**Authors:** Jingru Gan; Yannah J\.U\. Melle; Yanqiao Zhu; Daniel Schwalbe\-Koda; Wei Wang

**ID:** 153515 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kme4ONeaCZ>) | [PDF](<https://openreview.net/pdf?id=Kme4ONeaCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153515>)

Infrared \(IR\) spectral unmixing recovers individual component spectra from a measured mixture, enabling chemical identification\. Existing methods either assume linear superposition of components, which fails for liquid\-phase mixtures where molecular interactions alter spectral shapes, or use deep networks that entangle all components in a shared representation\. We introduce SLOT\-IR, a slot\-based architecture that decomposes mixture spectra into separate per\-component embeddings and decodes each independently into a predicted spectrum\. A two\-stage training procedure first learns to map a single molecule from gas\-phase spectra to liquid\-phase, then trains the full unmixing model on mixtures\. On the benchmark of annotated infrared spectra, SLOT\-IR outperforms all baselines on both binary and ternary mixture identification\. To verify that the model captures genuine chemical structure rather than statistical shortcuts, we apply a post\-hoc BatchTopK Sparse Autoencoder \(SAE\) to frozen slot embeddings and test whether recovered features correspond to known functional groups\. Statistical and causal analyses confirm model alignment with established chemistry\.

## Chain\-of\-Generation: Progressive Latent Diffusion for Text\-Guided Molecular Design

**Authors:** Lingxiao Li; Haobo Zhang; Bin Chen; Jiayu Zhou

**ID:** 149593 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ovonL3CMA1>) | [PDF](<https://openreview.net/pdf?id=ovonL3CMA1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149593>)

Compositional prompts in text\-to\-molecule generation often specify several structural constraints at once, such as scaffolds, functional groups, substituents, and finer modifiers\. Existing molecular latent diffusion models typically inject the full prompt once and apply it uniformly throughout denoising, which can cause later constraints to overwrite or distort earlier structural commitments\. We propose \*\*Chain\-of\-Generation \(COG\)\*\*, a training\-free progressive latent diffusion strategy for text\-guided molecular design\. Technically, CoG realizes progressive generation as multi\-stage latent denoising over cumulative molecular sub\-prompts: it factorizes a prompt into chemistry\-informed coarse\-to\-fine segments, conditions each stage on the cumulative sub\-prompt, and continues denoising from the previous\-stage latent using a fixed partial\-denoising schedule\. This turns one\-shot conditional generation into a sequence of stage\-wise denoising steps that help retain earlier structure while introducing later constraints\. Across benchmark, out\-of\-distribution, and ablation settings, CoG improves structural prompt fidelity over one\-shot conditioning on the tested latent graph\-diffusion backbones\.

