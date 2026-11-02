# Applications / Chemistry and Drug Discovery

应用 / 化学与药物发现

122 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Binding Mode Matters: Hotspot\-Aware Drug Discovery via Explorative Preferences

**Authors:** Dingshuo Chen; Hao Yang; Kuangqi Zhou; Zhixun Li; Qiang Liu; xiangxiang Zeng; Shu Wu; Yaosen Min

**ID:** 153924 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hd6Qc6G8J4>) | [PDF](<https://openreview.net/pdf?id=Hd6Qc6G8J4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153924>)

_Abstract unavailable from the accessible public sources._

## Rethinking Molecular Graph Backdoors under Chemistry\-aware Admission

**Authors:** Thinh Nguyen; Sze Jue Yang; Khoa D Doan; Chee Seng Chan; Kok\-Seng Wong

**ID:** 152990 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oo98xlurzU>) | [PDF](<https://openreview.net/pdf?id=Oo98xlurzU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152990>)

_Abstract unavailable from the accessible public sources._

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

## PI\-EDG: Physics\-Informed Full\-Space Electron Density Generation from Molecular Geometry

**Authors:** Jiahang Shen; Hongxin Xiang; Zhixiang Cheng; Keke Chen; Yingzhuo Tu; Wenjie Du; xiangxiang Zeng

**ID:** 148293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ywBY60es93>) | [PDF](<https://openreview.net/pdf?id=ywBY60es93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148293>)

Full\-space electron density generation is fundamental to modeling molecular quantum states, ground\-state properties, and chemical interactions\. DFT provides a principled route to electron density, but high\-fidelity calculations require costly self\-consistent iterations, limiting large\-scale quantum\-chemical modeling\. Deep learning offers a promising surrogate, yet existing methods often rely on indirect density\-related prior, including coordinate queries, predefined basis functions, orbital coefficients, or spherical atomic density grids\. These prior introduce reconstruction overhead and can hinder continuous full\-space modeling across sharp nuclear cores and sparse vacuum regions\. Here, we introduce PI\-EDG, a physics\-informed voxel\-space framework that maps molecular geometries directly to full\-space electron\-density fields by combining quantum\-mechanical prior injection, hybrid FNO\-CNN modeling of local and non\-local interactions and magnitude\-aware DS\-LMoE routing for extreme density ranges\. On EDBench, PI\-EDG achieves an MAE of 3\.405$\\times$10$^\{\-3\}$, a total electron\-number MAE of 0\.472, and an average inference time of 133\.4 ms for one molecule\. Compared with graph\-based, basis\-based, and voxel\-based baselines, PI\-EDG demonstrates better predictive accuracy, improved robustness across extreme density regimes, and better physical consistency while maintaining efficient full\-space generation\. These results suggest that PI\-EDG offers a new, direct, and efficient route for accelerating DFT\-based electron density calculations\.

## Self\-Improvement Imitation with Biologically Guided Search for Protein Design Under Oracle Budgets

**Authors:** Ashima Khanna\-Reiter; Dominik G Grimm

**ID:** 150386 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQpv99SOhF>) | [PDF](<https://openreview.net/pdf?id=iQpv99SOhF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150386>)

_Abstract unavailable from the accessible public sources._

## Plausible Biomolecular Structure Prediction via Physics\-informed Reinforcement Learning

**Authors:** Tai Dang; Hieu Tran; Long\-Hung Pham; Sang Truong; Edward A Pham; Jeffrey S Glenn; Thang Luong

**ID:** 152661 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RM7NMWgQlH>) | [PDF](<https://openreview.net/pdf?id=RM7NMWgQlH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152661>)

_Abstract unavailable from the accessible public sources._

## Generating Physically Consistent Molecules with Energy\-Based Models

**Authors:** Christoph Griesbacher; Lea Bogensperger; Andreas Habring; Thomas Pock

**ID:** 152559 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SEBAsCmCg3>) | [PDF](<https://openreview.net/pdf?id=SEBAsCmCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152559>)

_Abstract unavailable from the accessible public sources._

## Chain\-of\-Generation: Progressive Latent Diffusion for Text\-Guided Molecular Design

**Authors:** Lingxiao Li; Haobo Zhang; Bin Chen; Jiayu Zhou

**ID:** 149593 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ovonL3CMA1>) | [PDF](<https://openreview.net/pdf?id=ovonL3CMA1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149593>)

Compositional prompts in text\-to\-molecule generation often specify several structural constraints at once, such as scaffolds, functional groups, substituents, and finer modifiers\. Existing molecular latent diffusion models typically inject the full prompt once and apply it uniformly throughout denoising, which can cause later constraints to overwrite or distort earlier structural commitments\. We propose \*\*Chain\-of\-Generation \(COG\)\*\*, a training\-free progressive latent diffusion strategy for text\-guided molecular design\. Technically, CoG realizes progressive generation as multi\-stage latent denoising over cumulative molecular sub\-prompts: it factorizes a prompt into chemistry\-informed coarse\-to\-fine segments, conditions each stage on the cumulative sub\-prompt, and continues denoising from the previous\-stage latent using a fixed partial\-denoising schedule\. This turns one\-shot conditional generation into a sequence of stage\-wise denoising steps that help retain earlier structure while introducing later constraints\. Across benchmark, out\-of\-distribution, and ablation settings, CoG improves structural prompt fidelity over one\-shot conditioning on the tested latent graph\-diffusion backbones\.

## LEMON\-ZEST: Evolution\-Informed Tokenization for Efficient Protein Language Modeling

**Authors:** Biswajit Banerjee; Claudia Alvarez Carreno; Anton S Petrov

**ID:** 153755 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IxAaZ6h5Cc>) | [PDF](<https://openreview.net/pdf?id=IxAaZ6h5Cc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153755>)

_Abstract unavailable from the accessible public sources._

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

## Trustworthy Retrosynthesis: Eliminating Hallucinations with a Diverse Ensemble of Reaction Scorers

**Authors:** Michał Sadowski; Tadija Radusinović; Maria Wyrzykowska; Lukasz Sztukiewicz; Jan Rzymkowski; Piotr Kozakowski; Mikolaj Sacha; Ruard van Workum; Stanislaw Jastrzebski

**ID:** 152729 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QnViF2joi3>) | [PDF](<https://openreview.net/pdf?id=QnViF2joi3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152729>)

_Abstract unavailable from the accessible public sources._

## On the Selectivity of Generative Models in Structure\-Based Drug Design

**Authors:** Ella Miray Rajaonson; Jungyoon Lee; William Chau; Alan Aspuru\-Guzik; Benjamin Sanchez\-Lengeling; Dominique Beaini; Kirill Neklyudov; Marta Skreta

**ID:** 138964 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tjnm6pEJ3a>) | [PDF](<https://openreview.net/pdf?id=tjnm6pEJ3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138964>)

Designing small\-molecule drugs that selectively bind to a target protein while avoiding unintended interactions with other proteins is essential for reducing side effects that contribute substantially to clinical attrition\. Although structure\-based drug design \(SBDD\) has advanced rapidly with deep learning, most generative models still optimize binding to a single target and disregard selectivity due to limited training data and unknown off\-target interactions\. Motivated by this gap, we introduce SelectBench, a comprehensive benchmark assessing the selectivity of generative SBDD models\. SelectBench provides three curated evaluation tasks reflecting different real\-world drug discovery scenarios: literature\-based case studies, safety screening panels used in pharmaceutical development, and large\-scale structure\-based evaluation sets\. We further introduce a suite of metrics to quantify selectivity and conduct a systematic evaluation of nine representative SBDD models, including methods explicitly trained for selectivity and widely\-used inference\-time guidance techniques\. Our results show that even selectivity\-trained models achieve only modest off\-target discrimination and inference\-time guidance provides limited improvements, underscoring the need for method improvement\. SelectBench provides both a characterization of where current generative SBDD stands on selectivity and an open, extensible platform to accelerate progress\.

## Colour me shocked: Exact Molecular Hessians from MLIPs in O\(N\) time using sparse differentiation\!

**Authors:** Luca Thiede; Andreas Burger; Alan Aspuru\-Guzik

**ID:** 151062 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dIA3cMk8m7>) | [PDF](<https://openreview.net/pdf?id=dIA3cMk8m7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151062>)

_Abstract unavailable from the accessible public sources._

## Ensembits: an alphabet of protein conformational ensembles

**Authors:** Kaiwen Shi; Carlos Oliver

**ID:** 151956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYPcrKsaiH>) | [PDF](<https://openreview.net/pdf?id=WYPcrKsaiH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151956>)

Protein structure tokenizers \(PSTs\) are workhorses in protein language modeling, function prediction, and evolutionary analysis\. However, existing PSTs only capture local geometry of static structures, and miss the correlated motions and alternative conformational states revealed by protein ensembles\. Here we introduce Ensembits, the first tokenizer of protein conformational ensembles\. Ensembits address challenges inherent to tokenizing dynamics: deriving informative geometric descriptors across conformations, permutation\-invariance encoding of variable\-size ensembles, and conquering sparsity in dynamics data\. Trained with a Residual VQ\-VAE using a frame distillation objective on a large molecular dynamics corpus, Ensembits outperforms all related methods on RMSF prediction, and is the strongest standalone structural tokenizer on an token\-conditioned ANOVA test on per\-residue motion amplitude\. Ensembits further matches or exceeds static tokenizers on EC, GO, binding site/affinity prediction, and zero\-shot mutation\-effect prediction despite using far less pretraining data\. Notably, the distillation objective enables Ensembits to predict dynamics token from one single predicted structure, which alleviates dynamics data sparsity\. As the field moves from static structure prediction toward ensemble generation, Ensembits offer the discrete vocabulary needed to bring dynamics into protein language modeling and design\. Our codes can be found at: https://anonymous\.4open\.science/r/Ensembits\.

## 3D Molecule Generation from Rigid Motifs via $\\mathrm\{SE\}\(3\)$ Flows

**Authors:** Roman Poletukhin; Marcel Kollovieh; Eike S\. Eberhard; Stephan Günnemann

**ID:** 156034 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=10JJ9uxd6J>) | [PDF](<https://openreview.net/pdf?id=10JJ9uxd6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156034>)

Three\-dimensional molecular structure generation is typically performed at the level of individual atoms, yet molecular graph generation techniques often consider \*fragments\* as their structural units\. Building on the advances in \*frame\-based\* protein structure generation, we extend these fragmentation ideas to 3D, treating general molecules as sets of \*rigid\-body motifs\*\. Utilising this representation, we employ $\\mathrm\{SE\}\(3\)$\-equivariant generative modelling for \*de novo\* 3D molecule generation from rigid motifs\. In our evaluations, we observe comparable or superior results to state\-of\-the\-art across benchmarks, surpassing it in atom stability on GEOM\-Drugs, while yielding a $2\\times$ to $10\\times$ reduction in generation steps and offering $3\.5\\times$ compression in molecular representations compared to the standard atom\-based methods\.

## Self\-Improvement Imitation with Biologically Guided Search for Protein Design Under Oracle Budgets

**Authors:** Ashima Khanna\-Reiter; Dominik G Grimm

**ID:** 150386\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150386

[Paper](<https://openreview.net/forum?id=iQpv99SOhF>) | [PDF](<https://openreview.net/pdf?id=iQpv99SOhF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150386>)

_Abstract unavailable from the accessible public sources._

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

## NanoFold: Designing Reproducible Protein Structure Benchmarks through Principled Sampling

**Authors:** Chris Hayduk; Krithik Ramesh

**ID:** 138970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tMd55qVCYD>) | [PDF](<https://openreview.net/pdf?id=tMd55qVCYD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138970>)

Protein structure prediction has progressed rapidly, with a flourishing ecosystem of open\-source AlphaFold \(AF\)\-style systems delivering real progress\. But isolating which architectural and training choices actually drive that progress is difficult\. Production\-scale training is both computationally prohibitive and not accessibly reproducible; moreover, the public corpora are complex, with structural biases that compound in parameter\- and compute\-constrained regimes\. To address these gaps, we introduce NanoFold, a compact, fixed\-data benchmark for AF\-style training studies\. Its sealed\-hidden tracks address three fundamental questions, with a $\\textit\{limited\}$ track for sample efficiency, a $\\textit\{research large\}$ track for whether early gains persist under more optimization, and an $\\textit\{unlimited\}$ track for best fixed\-data final performance\. NanoFold's split is designed rather than naively sampled, with chains grouped into biological units under MMseqs2 cluster and PDB\-entry disjointness, stratified across structural metadata, and allocated to $10\{,\}000$ training, $1\{,\}000$ public\-validation, and $1\{,\}000$ sealed hidden chains\. We verify the construction through statistically principled diagnostics, including a randomization study over $1\{,\}000$ alternative valid splits, confirming the dataset is diverse, well\-distributed, and statistically typical of its constraint class\. We use NanoFold to run comprehensive experiments on model behavior across scales and training regimes, demonstrating that the benchmark is learnable but unsaturated, scales predictably with budget, cleanly separates training primitives, and that the underlying codebase flexibly supports head\-to\-head comparison\. NanoFold makes architectural and training progress in protein structure prediction more transparent, comparable, and reproducible at a compute\-accessible scale\.

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

## Beyond Drug Discovery: The Nanotechnology Molecular Optimization \(NMO\) Benchmark

**Authors:** Matthias Blaschke; Daniel Kienzle; Zsuzsanna Koczor\-Benda; Julian Lorenz; Rainer Lienhart; Fabian Pauly

**ID:** 139426 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RSzcctnFXO>) | [PDF](<https://openreview.net/pdf?id=RSzcctnFXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139426>)

_Abstract unavailable from the accessible public sources._

## A Systematic Evaluation of Co\-folding Model Representations for Small\-Molecule Learning

**Authors:** Hyosoon Jang; Hyunjin Seo; Honghui Kim; Taewon Kim; Yunhui Jang; Seonghyun Park; Sungsoo Ahn

**ID:** 154961 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9cpiiqZlW0>) | [PDF](<https://openreview.net/pdf?id=9cpiiqZlW0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154961>)

Small\-molecule foundation models are typically pretrained on standalone molecular data, unlike vision and language models that often benefit from cross\-modal or relational supervision\. Protein\-ligand co\-folding provides a molecular analogue of such supervision by exposing models to atom\-level ligand\-protein interactions, raising the question of whether co\-folding models can yield strong small\-molecule representations\. We study this question using Boltz2, a modern co\-folding model, by transferring its atom\-level ligand representations to standalone small\-molecule tasks\. Through systematic probing and distillation, we show that Boltz2 representations match or outperform existing models on the ADMET benchmark, accelerate molecular generative modeling, and improve sample efficiency in structure\-guided ligand optimization\. We further find that Boltz2 representations are complementary to those learned from conventional standalone molecular supervision, including 3D conformers, bioassay labels, and quantum\-chemical properties\. Finally, we extend representation alignment to reinforcement learning, showing that dense representation\-level supervision can complement scalar rewards in molecular discovery\. These results identify protein\-ligand co\-folding as a promising pretraining paradigm for small\-molecule representation learning and position Boltz2 as a strong, off\-the\-shelf molecular foundation model\.

## Controllable Molecular Generative Foundation Models

**Authors:** Yihan Zhu; Yuhan Liu; Weijiang Li; Tengfei Luo; Meng Jiang

**ID:** 149529 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pTD7f0lpDA>) | [PDF](<https://openreview.net/pdf?id=pTD7f0lpDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149529>)

_Abstract unavailable from the accessible public sources._

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

## Taming Generative Co\-Folding Prior for Molecular Docking with Diffusion Bridge

**Authors:** Shikun Feng; Zipeng Yang; Qiuyi Li; Mingze Yin; Xiaoyuan Zhang; Tingjun Hou; Yiheng Zhu

**ID:** 153583 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLDHugsUhb>) | [PDF](<https://openreview.net/pdf?id=KLDHugsUhb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153583>)

_Abstract unavailable from the accessible public sources._

## Two Stages of Folding: Convergent Mechanisms in AI Protein Folding Trunks

**Authors:** Kevin Lu; Jannik Brinkmann; Stefan T Huber; Aaron Mueller; Yonatan Belinkov; David Bau; Chris Wendler

**ID:** 152760 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QZjsViDneS>) | [PDF](<https://openreview.net/pdf?id=QZjsViDneS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152760>)

_Abstract unavailable from the accessible public sources._

## AlloGen: Conformation\-Selective Binder Design with Differential State Scoring

**Authors:** Hanqun Cao; Aastha Pal; Sumi Kimura; Yesol Kim; Jingjie Zhang; Pheng\-Ann Heng; Pranam Chatterjee

**ID:** 151299 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bTUx4Fn7Ul>) | [PDF](<https://openreview.net/pdf?id=bTUx4Fn7Ul>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151299>)

_Abstract unavailable from the accessible public sources._

## ProtGlycanDock: Towards Accurate Protein\-Glycan Docking with Tailored Dataset, Benchmark and Model

**Authors:** Minghao Xu; Jiaze Song; Jinyu Wang; Wentao Zhang

**ID:** 139712 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=90gsNmRJos>) | [PDF](<https://openreview.net/pdf?id=90gsNmRJos>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139712>)

_Abstract unavailable from the accessible public sources._

## CausalBind: Causal Modeling and Learning for Protein\-Molecule Virtual Screening

**Authors:** Loka Li; Jin Tian; Kun Zhang

**ID:** 151296 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bURAYAEF84>) | [PDF](<https://openreview.net/pdf?id=bURAYAEF84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151296>)

_Abstract unavailable from the accessible public sources._

## Taming Generative Co\-Folding Prior for Molecular Docking with Diffusion Bridge

**Authors:** Shikun Feng; Zipeng Yang; Qiuyi Li; Mingze Yin; Xiaoyuan Zhang; Tingjun Hou; Yiheng Zhu

**ID:** 153583\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153583

[Paper](<https://openreview.net/forum?id=KLDHugsUhb>) | [PDF](<https://openreview.net/pdf?id=KLDHugsUhb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153583>)

_Abstract unavailable from the accessible public sources._

## Two Stages of Folding: Convergent Mechanisms in AI Protein Folding Trunks

**Authors:** Kevin Lu; Jannik Brinkmann; Stefan T Huber; Aaron Mueller; Yonatan Belinkov; David Bau; Chris Wendler

**ID:** 152760\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152760

[Paper](<https://openreview.net/forum?id=QZjsViDneS>) | [PDF](<https://openreview.net/pdf?id=QZjsViDneS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152760>)

_Abstract unavailable from the accessible public sources._

## AlloGen: Conformation\-Selective Binder Design with Differential State Scoring

**Authors:** Hanqun Cao; Aastha Pal; Sumi Kimura; Yesol Kim; Jingjie Zhang; Pheng\-Ann Heng; Pranam Chatterjee

**ID:** 151299\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151299

[Paper](<https://openreview.net/forum?id=bTUx4Fn7Ul>) | [PDF](<https://openreview.net/pdf?id=bTUx4Fn7Ul>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151299>)

_Abstract unavailable from the accessible public sources._

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

## AI for Drug Discovery Models Often Do Not Learn as Expected and How to Diagnose These Failure Modes

**Authors:** Nikhil Branson; Aaron Wenteler; Guy Durant; Charlotte Deane

**ID:** 140017 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwdkgwxCZU>) | [PDF](<https://openreview.net/pdf?id=pwdkgwxCZU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140017>)

_Abstract unavailable from the accessible public sources._

## Bridging the Modality Bottleneck in Pathology MIL through Virtual Molecular Staining

**Authors:** Yucheng Xing; Pei Liu; Jingying Ma; Ruping Hong; Jiangdong Qiu; Tianyu Liu; Kai He; Ling Huang; Mengling Feng

**ID:** 150709\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150709

[Paper](<https://openreview.net/forum?id=g5hLIE5clP>) | [PDF](<https://openreview.net/pdf?id=g5hLIE5clP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150709>)

Multiple instance learning \(MIL\) is the dominant framework for whole\-slide image analysis in computational pathology, typically combining a frozen patch encoder, a projection layer, and a slide\-level aggregator\. While encoders and aggregators have been extensively studied, the projection layer remains a largely morphology\-only bottleneck\. This limits endpoints such as biomarker status and survival, which are governed by a molecular state that is not fully captured by H\\&amp;E morphology\. We introduce Molecularly Informed Staining Transform \(MIST\), a plug\-in replacement for the MIL projection layer that uses paired spatial transcriptomics only during training to construct virtual molecular stains\. MIST clusters gene expression profiles into cross\-modal prototypes, anchors them in the frozen foundation model feature space, and uses them to reorganize H\\&amp;E patch features along molecularly guided axes\. It requires no transcriptomics at inference and can be inserted before standard MIL aggregators\. We evaluate MIST across 23 downstream tasks and 8 MIL aggregators\. MIST improves 240 of 256 configurations over the standard projection layer, with an average gain of \+3\.5\\%, observed consistently across endpoint types: \+5\.2\\% on survival prediction, \+3\.3\\% on tissue subtyping, and \+2\.6\\% on biomarker prediction\. Ablations confirm that gene\-derived prototypes are the primary source of the gains, while spatial, biological, and pathological analyses show that cross\-modal prototype affinities capture spatially coherent molecular programs from H\\&amp;E alone\.

## Emergent Biological Capabilities in a Foundation Model for Molecular Interactions

**Authors:** Adi Mashiach

**ID:** 149424\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149424

[Paper](<https://openreview.net/forum?id=q9dbc5lOWi>) | [PDF](<https://openreview.net/pdf?id=q9dbc5lOWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149424>)

Foundation models trained on large unlabeled corpora develop emergent capabilities — tasks that go beyond the training objective\. We extend this paradigm to multimodal biology with Bonbon, a foundation model for molecular interactions trained on approximately 3\.2 trillion tokens of paired protein\-ligand sequences\. From a single self\-supervised objective, Bonbon exhibits four zero\-shot emergent capabilities at hierarchical levels of resolution — functional \(mechanism of action\), residue \(binding site localization, including orthosteric/allosteric discrimination\), bond \(covalent versus non\-covalent engagement\), and atom \(active moiety identification at single\-bond resolution\)\. All four capabilities generalize to out\-of\-distribution proteins\. Bonbon was trained on protein\-ligand sequences alone, without any task\-specific supervision and without structural coordinates\. We conducted controlled scaling experiments across four model scales from 42M to 1\.6B parameters; every capability evaluated shows a sharp jump at the largest scale on continuous metrics, even as pretraining loss decreases smoothly\. This demonstrates that loss\-based scaling laws alone are insufficient to predict when zero\-shot emergent capabilities become available\. The capabilities reported here emerge after training at a 1:2,000 parameter\-to\-token ratio to accommodate the sparsity of paired biological interaction data\. The same frozen representations achieve state\-of\-the\-art binding and affinity predictions at five orders of magnitude greater speed than structure\-based methods\. In prospective wet\-lab validation, Bonbon achieves a 70% hit rate on de novo compounds, discovering novel chemotypes not previously documented as inhibitors for those targets\. All of the tested compounds had less than 60% structural similarity to molecules in the training corpus\.

## Benchmarking sequence\-to\-ensemble predictors on UNICORNEdb, a UniProt\-grouped database of PDB\-derived conformational ensembles

**Authors:** William F Vanderbilt\-Fried; Luka Butskhrikidze; Benjamin P Brown; Hassane Mchaourab; Carlos Oliver

**ID:** 138904 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xwvwwQZbXy>) | [PDF](<https://openreview.net/pdf?id=xwvwwQZbXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138904>)

Following the striking success of ML\-driven static protein structure prediction, the challenge of protein conformational flexibility and thermodynamic ensemble prediction is rapidly coming to the foreground, and with it the need for rigorous benchmarks\. Yet, obtaining ground\-truth conformational states at scale remains highly challenging\. Past approaches are either small and hand\-curated or built by clustering PDB chains, which conflates genuine conformational variation with sequence\-induced differences across near\-homologs\. Here we introduce UNICORNE, a database of 50,000\+ protein conformational ensembles centered on UniProt and PDB chain/entity annotations to assemble per\-protein ensembles of experimentally resolved conformations without relying on clustering\. From our database, we derive UNICORNE\-BENCH, a set of 839 multi\-conformation proteins on which we extensively benchmark seven recent sequence\-conditioned predictors spanning generative ensemble models and MSA\-perturbation methods\. We find that the ensemble\-generation problem is far from solved and identify several shared failure modes: even the strongest tool fully recovers only 8\.2\\% of ensembles, performance degrades with conformational diversity, and tools fail on overlapping rather than complementary subsets of targets\. Across the benchmark, we find that MSA\-perturbation methods modestly outperform direct generative approaches\. UNICORNE provides a biologically grounded reference needed to guide the next generation protein structure prediction\.      The full database and leaderboard are available at https://unicornedb\.org \(anonymized\), and source code is available at https://anonymous\.4open\.science/r/unicorne\_bench\_neurips\_source\-2327/\.

## MaterialsSaddles: 34 Million Transition States and a Flow\-Matching Saddle\-Point Predictor for Materials

**Authors:** Ilgar Baghishov; Sung Hoon Jung; Graeme Henkelman

**ID:** 139769 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5lFUOghgb2>) | [PDF](<https://openreview.net/pdf?id=5lFUOghgb2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139769>)

Transition state \(TS\) search is the rate\-limiting step in high\-throughput kinetics screening\. Generative models have been used to accelerate TS prediction for molecules, but extending them to periodic materials has been blocked by the absence of a large\-scale materials TS dataset\. We release MaterialsSaddles, the first such dataset: 34\.14 M \(reactant, saddle, product\) triplets generated with the state\-of\-the\-art UMA\-S\-1\.2 universal interatomic potential across four subsets, comprising 31\.35 M triplets over LeMat\-Bulk's 5\.34 M\-structure deduplication of Materials Project, OQMD, and Alexandria; 2\.59 M triplets over OC20 surfaces; 167 k triplets over OC22 oxide electrocatalysts; and 35 k climbing\-image nudged elastic band \(CI\-NEB\) paths over Materials Project battery cells\. The release totals 102\.4 M structures \(687 GB\) in ASE\-LMDB shards with stratified 90/5/5 splits, generated on a 500,000 GPU\-hour HPC pipeline\. Every triplet is connected by construction via double\-minimization from the converged saddle, and every frame carries per\-frame metadata including eigenmodes, curvatures, bond\-change diffs, and source identifiers\. As a working demonstration of the dataset's intended use, we release SaddleFlow, a flow\-matching reactant\-and\-product\-conditional saddle\-point generator built on a UMA\-S\-1\.2 backbone with FiLM\-based time conditioning and an SO\(3\)\-equivariant velocity head, trained on the mp20bat subset of MaterialsSaddles\. In a pilot DFT study, we show that dimer searches initialized from a sample of mp20bat test triplets converge substantially faster and more reliably than those initialized from the standard reactant\-product midpoint guess, indicating that MaterialsSaddles and SaddleFlow together offer a practical path to scaling DFT\-level transition\-state searches\. MaterialsSaddles \(CC\-BY 4\.0\), SaddleFlow \(MIT\), and the data\-generation engine SaddleMill \(MIT\) are publicly released\.

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

## NEAT: Neighborhood\-Guided, Efficient, Autoregressive Set Transformer for 3D Molecular Generation

**Authors:** Daniel Rose; Roxane Axel Jacob; Johannes Kirchmair; Thierry Langer

**ID:** 155357 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6DNN9s5hLZ>) | [PDF](<https://openreview.net/pdf?id=6DNN9s5hLZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155357>)

Transformer\-based autoregressive models offer an efficient alternative to diffusion\- and flow\-matching\-based approaches for generating 3D molecules\.  One challenge remains: standard transformer architectures require a sequential ordering of tokens, which is not inherently defined for the atoms in a molecule\.  Prior works have addressed this by using canonical atom orderings\.  However, these approaches are not permutation invariant w\.r\.t\. atoms and bias next\-token prediction towards ordering conventions\.  We overcome this limitation by introducing a novel neighborhood\-guided training strategy\.  Our model, NEAT \(Neighborhood\-Guided, Efficient, Autoregressive Set Transformer\) treats molecular graphs as sets of atoms and learns an order\-agnostic distribution over admissible tokens at the graph boundary, thereby ensuring atom\-level permutation invariance\.  NEAT achieves state\-of\-the\-art generation quality on the QM9 and GEOM\-Drugs datasets while offering a significant speed advantage over existing baselines\.

## PepDDG: Peptide–Protein Binding ΔΔ𝐺 Prediction via Information Channel Decomposition

**Authors:** Ruochi Zhang; Yusi Fan; Qiong Zhou; Li Jiao; Tian Wang; Qian Yang; Silong Zhai; Lan Wang; Fengfeng Zhou; Yajuan Huang; Liming Guo; Chang Liu; Xin Gao

**ID:** 153733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JB3B5DScsZ>) | [PDF](<https://openreview.net/pdf?id=JB3B5DScsZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153733>)

Predicting mutation\-induced changes in peptide\-\-protein binding affinity \($\\Delta\\Delta G$\) is central to therapeutic peptide optimization, but peptide\-specific predictors remain limited by scarce labels, target overlap in supervised benchmarks, and costly molecular simulations\. We introduce PepDDG, a zero\-shot, training\-free predictor that ranks peptide mutations by decomposing binding perturbations into three complementary information channels: energetic perturbation, geometric environment, and evolutionary compatibility\. Each channel is computed from a wild\-type complex structure, transformed into rank space, and combined by non\-parametric Borda aggregation, without fitting fusion weights or fine\-tuning neural predictors\. PepDDG is motivated by rank\-covariance analysis showing cross\-channel fusion can improve rank correlation when channels retain complementary signal, whereas increasingly expensive refinement of a single energetic channel has diminishing returns\. Empirically, the channels are individually moderate but capture distinct mutation regimes, and rank fusion consistently outperforms single\-channel variants and training\-free baselines\. On our curated benchmark of 332 peptide\-chain mutations across 33 targets, PepDDG reaches Spearman $\\rho = 0\.619$; the calibrated PepDDG\-Cal variant reaches $\\rho = 0\.691$\. Performance remains strong on short and cyclic peptide subsets, with $\\rho = 0\.813$ and $0\.872$, respectively\. These results support complementary evidence fusion on PDB\-derived complex structures as a practical alternative to costly same\-channel physical refinement for peptide $\\Delta\\Delta G$ ranking; a separate diagnostic shows that predicted structures can be used when no crystal structure is provided at inference time\.

## On objective mismatch in molecular retrieval from tandem mass spectrometry

**Authors:** Gaetan De Waele; Marek Wydmuch; Krzysztof Dembczynski; Wojciech Kotlowski; Willem Waegeman

**ID:** 151639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z655zMeBt6>) | [PDF](<https://openreview.net/pdf?id=Z655zMeBt6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151639>)

Identifying molecular structures from LC\-MS/MS spectra is a central problem in computational metabolomics, often approached by predicting molecular fingerprints and retrieving candidates via similarity search\. Despite widespread use, the relationship between training objectives for fingerprint prediction and downstream retrieval performance remains poorly understood\. In this work, we show that these objectives are fundamentally misaligned\. Adopting a decision\-theoretic perspective, we derive novel regret bounds that characterize when Bayes\-optimal predictors for fingerprint similarity diverge from those for molecular retrieval\. Our analysis reveals that optimizing standard similarity\-based losses can provably degrade retrieval performance, and that the extent of this mismatch depends on the similarity structure of candidate sets\. Empirically, we validate our theory on the MassSpecGym benchmark, demonstrating a Pareto frontier between fingerprint accuracy and retrieval metrics across commonly used loss functions\. These results expose an inherent trade\-off in fingerprint\-based molecular identification and provide principled guidance for the design of learning objectives in computational mass spectrometry\.

## Pushing Biomolecular Utility\-Diversity Frontiers with Supergroup Relative Policy Optimization

**Authors:** Xinwu Ye; He CAO; Li Hao; Bin Feng; Zijing Liu; Robert Tang; Yu Li; Shenghua Gao

**ID:** 152440 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T7f7FXqdfT>) | [PDF](<https://openreview.net/pdf?id=T7f7FXqdfT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152440>)

Biomolecular generators are often adapted with reward feedback to improve task\-specific utility, but pushing utility alone can concentrate generation on a narrow family of candidates\. Maintaining diversity is difficult because sample diversity is a set\-level property\. We introduce Supergroup Relative Policy Optimization \(SGRPO\), a flexible GRPO\-style framework that directly constructs rewards from set\-level diversity\. For each condition, SGRPO samples a supergroup of candidate sets, compares their diversity under the same condition, and redistributes the group diversity reward to individual rollouts through leave\-one\-out diversity contributions before combining it with rollout\-level utility\. This design decouples SGRPO from a particular generator, utility reward, or diversity metric, and allows instantiation with different GRPO\-style approaches\. We evaluate SGRPO on de novo small\-molecule design, pocket\-based small\-molecule design, and de novo protein design, instantiating it with both GRPO and Coupled\-GRPO across autoregressive and discrete diffusion generators\. Across decoding sweeps, SGRPO expands the utility\-diversity Pareto frontier and achieves the best frontier\-level metrics relative to pretrained generators, GRPO, and memory\-assisted GRPO when applicable\. Our analyses further show that direct set\-level diversity rewards remain effective with small groups and help preserve broader generation\-distribution coverage during post\-training\. The code is available at https://anonymous\.4open\.science/r/SGRPO/README\.md\.

## Pareto Preference Optimization for Structure\- and Stability\-Aware RNA Inverse Folding

**Authors:** Minghao Sun; Hanqun Cao; Zhou Zhang; Chen Wei; Liang Wang; Tianrui Jia; ZHIYUAN LIU; Tianfan Fu; Robert Tang; Yejin Choi; Pheng\-Ann Heng; Fang Wu; Yang Zhang

**ID:** 151612 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZEneX95jqf>) | [PDF](<https://openreview.net/pdf?id=ZEneX95jqf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151612>)

_Abstract unavailable from the accessible public sources._

## ManifoldCache: Training\-Free Diffusion Acceleration via Constraint Manifold Caching

**Authors:** Prashant Pandey; Sri Venkatraya Chowdary Devineni; Brejesh Lall

**ID:** 153786 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IfSl3ULbla>) | [PDF](<https://openreview.net/pdf?id=IfSl3ULbla>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153786>)

_Abstract unavailable from the accessible public sources._

## Anchored Protein Engineering

**Authors:** Chi Zhang; Maria Rosaria Briglia; Litu Rout; Jeffrey Ouyang\-Zhang; Iacopo Masi; Sanjay Shakkottai; Adam Klivans; Daniel Diaz

**ID:** 153901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HrcMl3Whuk>) | [PDF](<https://openreview.net/pdf?id=HrcMl3Whuk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153901>)

Inspired by recent work on discrete diffusion for anchored unmasking, we introduce a new training\-free framework for protein engineering that can generate higher\-order variants that improve one or more phenotypes while exhibiting favorable epistatic interactions\. Prior approaches require mutation sites to be specified in advance and can drive sequences away from the natural protein manifold\. We address these limitations with \*\*A\*\*nchored \*\*P\*\*rotein \*\*E\*\*ngineering via quantized e\*\*X\*\*pectation \(\*\*APEX\*\*\), a decoding\-time method consisting of anchor selection, tilted decoding, and iterative refinement\. APEX selects anchor residues using a reward\-gradient score with an explicit correction for pairwise epistasis, decodes substitutions for anchors by tilting the base model's per\-site predictive distributions along reward gradients, and revisits low\-scoring anchors iteratively for optional test\-time scaling\. All phases query the base model only through masked\-conditional logits, a primitive shared by masked language models, discrete\-diffusion models, and inverse\-folding networks; as a result, APEX works out of the box across commonly\-used model families\. Across various protein\-engineering benchmarks, including thermostability and solubility, APEX achieves state\-of\-the\-art results and avoids the predictor\-gaming artifacts that reward\-search\-only baselines tend to produce\.

## URSA: Chemistry\-Aware Benchmark for Utilitarian Retrosynthesis Assessment

**Authors:** Bogdan Zagribelnyy; Ivan Ilin; Nikita Bondarev; Anton Morgunov; Arkadii Lin; Maksim Kuznetsov; Rim Shayakhmetov; Vlad Aladinskiy; Alex Aliper; Alex Zhavoronkov

**ID:** 139807\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139807

[Paper](<https://openreview.net/forum?id=3WEHvL562O>) | [PDF](<https://openreview.net/pdf?id=3WEHvL562O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139807>)

Synthesis planning aiming to find pathways of reactions for a target molecule is one of the most important and challenging tasks in drug discovery\. Recent progress has produced both specialized deep\-learning retrosynthesis systems and general\-purpose large language models, but objective comparison remains difficult due to the lack of flexible, chemically interpretable benchmarking protocols\. In the current study, we are introducing the URSA \(Utilitarian RetroSynthesis Assessment\) evaluation framework that provides the opportunity to benchmark the synthetic routes not only from a formal perspective, such as convergence to commercially available starting materials, but also from a chemical plausibility perspective, mimicking the way expert chemists evaluate the reactions and routes\. The study covers a comprehensive evaluation of both conventional end\-to\-end retrosynthesis solutions and LLMs for the synthesis planning task on a set of novel, diverse target molecules with undisclosed synthetic routes, which represent realistic tasks in the daily drug design routine\. We find that while LLMs can support high\-level strategic planning, they currently underperform specialized retrosynthesis models in reliably solving synthesis planning tasks\.

## Few\-Step Boltzmann Generators via Scalable Likelihood Flow Maps

**Authors:** RuiKang OuYang; Hanlin Yu; Xinyue Ai; Yutong He; Nicholas Boffi; Pradeep Ravikumar; José Miguel Hernández\-Lobato; Max Simchowitz; Benjamin K Miller; Omar Chehab

**ID:** 154720\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154720

[Paper](<https://openreview.net/forum?id=BW8H7viD5K>) | [PDF](<https://openreview.net/pdf?id=BW8H7viD5K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154720>)

Recent progress in flow\-based generative modeling has led to models that output high\-quality samples while using only a small number of function evaluations\. However, at present, there is a lack of similar advances in estimating the density of the generated samples\. In particular, most existing methods  either rely on restrictive architectures that enable exact calculations, or use stochastic approximations such as Hutchinson’s trace estimator that introduce substantial variance\. In this work, we introduce SCAlable LikeLihood distillation of flOw maPs \(SCALLOP\)\. SCALLOP builds on the  recently proposed  F2D2, a likelihood flow map model that can generate samples and their densities in a small number of function evaluations\. While \{F2D2\} uses Hutchinson's estimator during training, we introduce an alternative and more scalable likelihood distillation objective that is Hutchinson\-free and admits a vectorized formulation\.  Empirically, we demonstrate the effectiveness of SCALLOP as a Boltzmann generator in molecular science, and further validate its benefit on image datasets\. SCALLOP significantly reduces both training variance and training time while consistently improving performance compared to F2D2, and is competitive with the state\-of\-the\-art while achieving up to $10\\times$ inference speedup over the fastest baseline\.

## Toward Better Geometric Representations for Molecule Generative Models

**Authors:** Shaoheng Yan; Zian Li; Cai Zhou; Qiaojing Huang; Kai Liu; Muhan Zhang

**ID:** 155400\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155400

[Paper](<https://openreview.net/forum?id=5vRYljseiu>) | [PDF](<https://openreview.net/pdf?id=5vRYljseiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155400>)

Geometric representation\-conditioned molecule generation provides an effective paradigm that decouples molecule representation modeling from structure generation\. By decoupling molecule generation into two stages—first generating a meaningful molecule representation, and then generating a 3D molecule conditioned on this representation—the efficiency and quality of the generation process can be significantly enhanced\. However, its effectiveness is fundamentally limited by the quality of the representation space: pretrained molecular encoders, such as UniMol, produce representations that are non\-smooth and not fully exploited during the generative training process\. In this work, we propose LENSEs, a framework that better exploits the potential of molecule representations in representation\-conditioned generation methods\. In particular, LENSEs introduces three complementary mechanisms: \(1\) a representation head, simultaneously trained during generative tasks, that extracts multi\-level representations from the pretrained encoder; \(2\) a molecule perceptual loss that optimizes the generator in a semantic\-informative representation space; and \(3\) a node\-level representation alignment \(REPA\) loss that explicitly aligns the generator’s hidden states with encoder representations, reducing the semantic gap between pretraining and generation\. We demonstrate the effectiveness of these improvements through extensive molecule generation tasks\. Specifically, on the challenging molecule generation dataset GEOM\-DRUG, LENSEs achieves 97\.28% validity and 98\.51% molecule stability, surpassing existing advanced methods\. Further analyses through Lipschitz constant reduction \(4\.6×\) and QM9 probing tasks also demonstrate the smoother, more informative refined representations, establishing generative training with alignment objectives as a potential pretraining paradigm for molecular encoders\.

## FlashMol: High\-Quality Molecule Generation in as Few as Four Steps

**Authors:** Xinyuan Wei; Zian Li; Shaoheng Yan; Cai Zhou; Muhan Zhang

**ID:** 153479 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L4dgBi7KaX>) | [PDF](<https://openreview.net/pdf?id=L4dgBi7KaX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153479>)

_Abstract unavailable from the accessible public sources._

## Controllable Molecular Generative Foundation Models

**Authors:** Yihan Zhu; Yuhan Liu; Weijiang Li; Tengfei Luo; Meng Jiang

**ID:** 149529\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149529

[Paper](<https://openreview.net/forum?id=pTD7f0lpDA>) | [PDF](<https://openreview.net/pdf?id=pTD7f0lpDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149529>)

_Abstract unavailable from the accessible public sources._

## Preserving Geometric Symmetry in Uncertainty Estimation for Molecular Forces

**Authors:** Xinyu Li; Zhen Zhang; Jiayu Huang; Daniel M Steinberg; Lina Yao; Prof Javen Qinfeng Shi

**ID:** 150831\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150831

[Paper](<https://openreview.net/forum?id=ey4IT8N8rl>) | [PDF](<https://openreview.net/pdf?id=ey4IT8N8rl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150831>)

Accurate and reliable uncertainty estimation \(UE\) for vector\-valued physical properties is crucial for scientific discovery in fields like drug  and materials discovery\. For example, atomic forces are central for finding optimal structures and identifying equilibrium systems, and a fundamental requirement of these vectors is that they must be equivariant to 3D rotations\. However, existing UQ methods often fail to respect these geometric constraints, leading to poorly calibrated uncertainty and degraded predictive performance\. To address the problem, we introduce a novel framework for equivariant multivariate evidential regression\. Our primary contribution is a theoretically grounded parameterization of the evidential prior's scale matrix, constructed via a decomposition into an invariant scalar component and an equivariant low\-rank term\. Furthermore, we address the lack of suitable evaluation standards for vector fields by introducing a rigorous calibration metric based on the Euclidean distance\. Extensive experiments on molecular property prediction benchmarks, including MD17, QM7\-X and OC20, show that our framework consistently outperforms established baselines, achieving state\-of\-the\-art predictive accuracy with well\-calibrated uncertainty\. This work provides a principled and practical approach to uncertainty estimation for equivariant vector\-valued properties, paving the way for more trustworthy machine learning applications in scientific discovery\.

## Equivariant Force Field Calibration for Flow\-based Protein Design

**Authors:** Fang Wu

**ID:** 154193 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FVSOcen7JO>) | [PDF](<https://openreview.net/pdf?id=FVSOcen7JO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154193>)

Flow models show promise for molecular design due to their fast, expressive sampling capabilities\. However, their applicability to complex biological systems remains limited by a lack of physical grounding, which leads to unrealistic or unstable molecular structures\.  This work presents a framework that integrates force field guidance with consistency\-based training to improve the physical fidelity of flow\-based generative models\. We calibrate pretrained flow models using differentiable physical energy functions to steer generation toward low\-energy and sterically valid conformations\. A consistency\-based training strategy enables accurate, robust generation with very few sampling steps, improving inference efficiency\. We evaluate it on multiple protein design tasks, including full\-atom structure generation and peptide binder modeling\. Experiments show that our approach consistently improves physical plausibility and geometric stability, while enabling favorable trade\-offs between structural diversity and computational cost\. By unifying physical calibration and efficient sampling, we advance the scalability and reliability of flow\-based molecular generation\.

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

## Harmonic Torsional Diffusion for Flexible Protein\-Ligand Docking

**Authors:** Maksim Zhdanov; Pavel Strashnov; Vladislav Kurenkov

**ID:** 153661 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JgekVKyVaW>) | [PDF](<https://openreview.net/pdf?id=JgekVKyVaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153661>)

_Abstract unavailable from the accessible public sources._

## Drift\-React: One\-step Generation of Reaction Pathways via SE\(3\) Drifting Fields

**Authors:** Rémi Schlama; Philippe Schwaller

**ID:** 154432 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DdMTM4whIk>) | [PDF](<https://openreview.net/pdf?id=DdMTM4whIk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154432>)

_Abstract unavailable from the accessible public sources._

## MIND\-DDI: Multi\-Omics Interpretable Drug\-Drug Interaction Prediction with Joint Optimization of Graph Structure, Neural Architecture, and Symbolic Rules

**Authors:** Linxin Xiao; Xin Wang; Yang Yao; Wenwu Zhu

**ID:** 155628 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4AkKfIsmZu>) | [PDF](<https://openreview.net/pdf?id=4AkKfIsmZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155628>)

_Abstract unavailable from the accessible public sources._

## UniFlowDock: Flexible Docking with Complete Equivariant Velocity Fields

**Authors:** Kangxin Chen; Jieyu Zhao; Xulun Ye; Kun Zhou; Jinli Hu; Yuanyuan Deng; Min Xie

**ID:** 148336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ybJgoCc3bI>) | [PDF](<https://openreview.net/pdf?id=ybJgoCc3bI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148336>)

Flexible molecular docking is crucial for drug discovery; however, existing flow\-matching generative models often produce physically invalid conformations \(e\.g\., steric clashes, distorted bond geometry\)\. Our analysis suggests that a primary contributor to this challenge lies at the modeling level: when the flow is parameterized by standard equivariant networks, an intrinsic approximation floor can emerge, potentially hindering the learned velocity field from reaching its optimal convergence bound, particularly for highly flexible molecules\. We present UniFlowDock, which addresses this by introducing strictly Complete Equivariant Velocity Fields, thereby eliminating the dimensional incompleteness of standard architectures\. This theoretical completeness is further bolstered by Fragment\-Adaptive Optimal Coupling, a method that structurally linearizes transport trajectories and decomposes the generation process into physics\-aware subproblems\. Experiments on PDBBind and PoseBusters demonstrate UniFlowDock achieves state\-of\-the\-art accuracy and physical validity, showing consistent gains in highly flexible docking scenarios where target distributions exhibit higher transport complexity\.

## CupOFMoCA: Coupled Objective\-Guided Discrete Flows for Molecular Conjugate Assembly

**Authors:** Ruoxi Zhang; Ziang Li; Jiatao Gu; Pranam Chatterjee

**ID:** 155389 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=629AZsasM7>) | [PDF](<https://openreview.net/pdf?id=629AZsasM7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155389>)

Molecular conjugates, including PROTACs and peptide\-drug conjugates \(PDCs\), derive their function from the joint behavior of multiple coupled components, yet most generative approaches design these components independently and combine them only after generation\. Such staged pipelines ignore cross\-component dependencies and often produce conjugates that are chemically invalid, fall outside empirical conjugate distributions, or lose function upon assembly\. We introduce $\\textbf\{C\}$o$\\textbf\{up\}$led $\\textbf\{O\}$bjective\-Guided Discrete $\\textbf\{F\}$lows for $\\textbf\{Mo\}$lecular $\\textbf\{C\}$onjugate $\\textbf\{A\}$ssembly $\(\\textbf\{CupOFMoCA\}\)$, a discrete generative framework that formulates conjugate design as a constrained, coupled generation problem\. CupOFMoCA restricts generative trajectories to a chemically feasible conjugate manifold and biases local transitions using target\-specific activity predictors, ensuring all components remain mutually compatible throughout generation\. We show that coupling constraints and objective guidance enable anticipatory design that preserves post\-assembly predicted activity and produces structurally realistic conjugates across both PDC and PROTAC settings, outperforming staged baselines, including LinkerNet, DiffLinker, and DiffPROTACs for PROTACs, across assembly validity, predicted activity, and physicochemical property ranges\. These results demonstrate that explicit coupling and constraint enforcement are sufficient to recover functional conjugates across conjugate classes, and provide a principled foundation for generative modeling where function emerges only at the level of the assembled system\. Our anonymous code repository can be found at https://anonymous\.4open\.science/r/Cupofmoca\-Neurips\.

## Compact SO\(3\) Equivariant Atomistic Foundation Models via Structural Pruning

**Authors:** Chen Wang; Siyu Hu; Guangming Tan; Weile Jia

**ID:** 154865 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJ8IWO0noE>) | [PDF](<https://openreview.net/pdf?id=AJ8IWO0noE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154865>)

SO\(3\) equivariant graph neural networks have become the dominant paradigm for atomistic foundation models, achieving high accuracy and data efficiency by building rotational symmetry directly into the architecture\. Yet the computational cost of their higher\-order tensor operations creates a tough trade\-off between model accuracy and inference efficiency\. In this paper, we propose a structural pruning method for SO\(3\) equivariant atomistic foundation models to bridge this accuracy\-efficiency gap\. The pruning is applied along the channel and order dimensions, with each irreducible representation kept or removed as a complete block, thereby retaining SO\(3\) equivariance\. Starting from a large checkpoint, the pruned model substantially reduces the inference cost while retaining higher accuracy than an independently trained small model\. The pruned MACE\-MP model outperforms the official from\-scratch trained small model on 7 of 9 metrics on the Matbench Discovery leaderboard\. In terms of efficiency, compressed MACE\-MP and MACE\-OFF models contain 1\.5$\\times$ to 4$\\times$ fewer parameters and require 2\.5$\\times$ to 4$\\times$ less pre\-training compute than training a small model from scratch\. For downstream applications, fine\-tuning the pruned model reduces energy and force errors by 70\.1\\% and 34\.4\\% compared to training task\-specific models from scratch across eight representative downstream datasets\. We demonstrate that the method generalizes to other SO\(3\) equivariant architectures \(SevenNet, eSCN\) and can be combined with quantization and knowledge distillation for further gains\.

## Temperature\-Regulated Stochastic Sampling for Diffusion\-Based High\-Quality Molecular Generation

**Authors:** Yuyan Ni; Haoming Kong; Bo Qiang; Yanjing Li; Xin Hong; Shikun Feng; Wen Yan; Yanyan Lan

**ID:** 151174 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cRfW6yk3ke>) | [PDF](<https://openreview.net/pdf?id=cRfW6yk3ke>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151174>)

_Abstract unavailable from the accessible public sources._

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

## Preserving Geometric Symmetry in Uncertainty Estimation for Molecular Forces

**Authors:** Xinyu Li; Zhen Zhang; Jiayu Huang; Daniel M Steinberg; Lina Yao; Prof Javen Qinfeng Shi

**ID:** 150831\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150831

[Paper](<https://openreview.net/forum?id=ey4IT8N8rl>) | [PDF](<https://openreview.net/pdf?id=ey4IT8N8rl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150831>)

Accurate and reliable uncertainty estimation \(UE\) for vector\-valued physical properties is crucial for scientific discovery in fields like drug  and materials discovery\. For example, atomic forces are central for finding optimal structures and identifying equilibrium systems, and a fundamental requirement of these vectors is that they must be equivariant to 3D rotations\. However, existing UQ methods often fail to respect these geometric constraints, leading to poorly calibrated uncertainty and degraded predictive performance\. To address the problem, we introduce a novel framework for equivariant multivariate evidential regression\. Our primary contribution is a theoretically grounded parameterization of the evidential prior's scale matrix, constructed via a decomposition into an invariant scalar component and an equivariant low\-rank term\. Furthermore, we address the lack of suitable evaluation standards for vector fields by introducing a rigorous calibration metric based on the Euclidean distance\. Extensive experiments on molecular property prediction benchmarks, including MD17, QM7\-X and OC20, show that our framework consistently outperforms established baselines, achieving state\-of\-the\-art predictive accuracy with well\-calibrated uncertainty\. This work provides a principled and practical approach to uncertainty estimation for equivariant vector\-valued properties, paving the way for more trustworthy machine learning applications in scientific discovery\.

## URSA: Chemistry\-Aware Benchmark for Utilitarian Retrosynthesis Assessment

**Authors:** Bogdan Zagribelnyy; Ivan Ilin; Nikita Bondarev; Anton Morgunov; Arkadii Lin; Maksim Kuznetsov; Rim Shayakhmetov; Vlad Aladinskiy; Alex Aliper; Alex Zhavoronkov

**ID:** 139807\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139807

[Paper](<https://openreview.net/forum?id=3WEHvL562O>) | [PDF](<https://openreview.net/pdf?id=3WEHvL562O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139807>)

Synthesis planning aiming to find pathways of reactions for a target molecule is one of the most important and challenging tasks in drug discovery\. Recent progress has produced both specialized deep\-learning retrosynthesis systems and general\-purpose large language models, but objective comparison remains difficult due to the lack of flexible, chemically interpretable benchmarking protocols\. In the current study, we are introducing the URSA \(Utilitarian RetroSynthesis Assessment\) evaluation framework that provides the opportunity to benchmark the synthetic routes not only from a formal perspective, such as convergence to commercially available starting materials, but also from a chemical plausibility perspective, mimicking the way expert chemists evaluate the reactions and routes\. The study covers a comprehensive evaluation of both conventional end\-to\-end retrosynthesis solutions and LLMs for the synthesis planning task on a set of novel, diverse target molecules with undisclosed synthetic routes, which represent realistic tasks in the daily drug design routine\. We find that while LLMs can support high\-level strategic planning, they currently underperform specialized retrosynthesis models in reliably solving synthesis planning tasks\.

## Bridging the Modality Bottleneck in Pathology MIL through Virtual Molecular Staining

**Authors:** Yucheng Xing; Pei Liu; Jingying Ma; Ruping Hong; Jiangdong Qiu; Tianyu Liu; Kai He; Ling Huang; Mengling Feng

**ID:** 150709\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150709

[Paper](<https://openreview.net/forum?id=g5hLIE5clP>) | [PDF](<https://openreview.net/pdf?id=g5hLIE5clP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150709>)

Multiple instance learning \(MIL\) is the dominant framework for whole\-slide image analysis in computational pathology, typically combining a frozen patch encoder, a projection layer, and a slide\-level aggregator\. While encoders and aggregators have been extensively studied, the projection layer remains a largely morphology\-only bottleneck\. This limits endpoints such as biomarker status and survival, which are governed by a molecular state that is not fully captured by H\\&amp;E morphology\. We introduce Molecularly Informed Staining Transform \(MIST\), a plug\-in replacement for the MIL projection layer that uses paired spatial transcriptomics only during training to construct virtual molecular stains\. MIST clusters gene expression profiles into cross\-modal prototypes, anchors them in the frozen foundation model feature space, and uses them to reorganize H\\&amp;E patch features along molecularly guided axes\. It requires no transcriptomics at inference and can be inserted before standard MIL aggregators\. We evaluate MIST across 23 downstream tasks and 8 MIL aggregators\. MIST improves 240 of 256 configurations over the standard projection layer, with an average gain of \+3\.5\\%, observed consistently across endpoint types: \+5\.2\\% on survival prediction, \+3\.3\\% on tissue subtyping, and \+2\.6\\% on biomarker prediction\. Ablations confirm that gene\-derived prototypes are the primary source of the gains, while spatial, biological, and pathological analyses show that cross\-modal prototype affinities capture spatially coherent molecular programs from H\\&amp;E alone\.

## Emergent Biological Capabilities in a Foundation Model for Molecular Interactions

**Authors:** Adi Mashiach

**ID:** 149424\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149424

[Paper](<https://openreview.net/forum?id=q9dbc5lOWi>) | [PDF](<https://openreview.net/pdf?id=q9dbc5lOWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149424>)

Foundation models trained on large unlabeled corpora develop emergent capabilities — tasks that go beyond the training objective\. We extend this paradigm to multimodal biology with Bonbon, a foundation model for molecular interactions trained on approximately 3\.2 trillion tokens of paired protein\-ligand sequences\. From a single self\-supervised objective, Bonbon exhibits four zero\-shot emergent capabilities at hierarchical levels of resolution — functional \(mechanism of action\), residue \(binding site localization, including orthosteric/allosteric discrimination\), bond \(covalent versus non\-covalent engagement\), and atom \(active moiety identification at single\-bond resolution\)\. All four capabilities generalize to out\-of\-distribution proteins\. Bonbon was trained on protein\-ligand sequences alone, without any task\-specific supervision and without structural coordinates\. We conducted controlled scaling experiments across four model scales from 42M to 1\.6B parameters; every capability evaluated shows a sharp jump at the largest scale on continuous metrics, even as pretraining loss decreases smoothly\. This demonstrates that loss\-based scaling laws alone are insufficient to predict when zero\-shot emergent capabilities become available\. The capabilities reported here emerge after training at a 1:2,000 parameter\-to\-token ratio to accommodate the sparsity of paired biological interaction data\. The same frozen representations achieve state\-of\-the\-art binding and affinity predictions at five orders of magnitude greater speed than structure\-based methods\. In prospective wet\-lab validation, Bonbon achieves a 70% hit rate on de novo compounds, discovering novel chemotypes not previously documented as inhibitors for those targets\. All of the tested compounds had less than 60% structural similarity to molecules in the training corpus\.

## Toward Better Geometric Representations for Molecule Generative Models

**Authors:** Shaoheng Yan; Zian Li; Cai Zhou; Qiaojing Huang; Kai Liu; Muhan Zhang

**ID:** 155400\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155400

[Paper](<https://openreview.net/forum?id=5vRYljseiu>) | [PDF](<https://openreview.net/pdf?id=5vRYljseiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155400>)

Geometric representation\-conditioned molecule generation provides an effective paradigm that decouples molecule representation modeling from structure generation\. By decoupling molecule generation into two stages—first generating a meaningful molecule representation, and then generating a 3D molecule conditioned on this representation—the efficiency and quality of the generation process can be significantly enhanced\. However, its effectiveness is fundamentally limited by the quality of the representation space: pretrained molecular encoders, such as UniMol, produce representations that are non\-smooth and not fully exploited during the generative training process\. In this work, we propose LENSEs, a framework that better exploits the potential of molecule representations in representation\-conditioned generation methods\. In particular, LENSEs introduces three complementary mechanisms: \(1\) a representation head, simultaneously trained during generative tasks, that extracts multi\-level representations from the pretrained encoder; \(2\) a molecule perceptual loss that optimizes the generator in a semantic\-informative representation space; and \(3\) a node\-level representation alignment \(REPA\) loss that explicitly aligns the generator’s hidden states with encoder representations, reducing the semantic gap between pretraining and generation\. We demonstrate the effectiveness of these improvements through extensive molecule generation tasks\. Specifically, on the challenging molecule generation dataset GEOM\-DRUG, LENSEs achieves 97\.28% validity and 98\.51% molecule stability, surpassing existing advanced methods\. Further analyses through Lipschitz constant reduction \(4\.6×\) and QM9 probing tasks also demonstrate the smoother, more informative refined representations, establishing generative training with alignment objectives as a potential pretraining paradigm for molecular encoders\.

## FlashMol: High\-Quality Molecule Generation in as Few as Four Steps

**Authors:** Xinyuan Wei; Zian Li; Shaoheng Yan; Cai Zhou; Muhan Zhang

**ID:** 153479\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153479

[Paper](<https://openreview.net/forum?id=L4dgBi7KaX>) | [PDF](<https://openreview.net/pdf?id=L4dgBi7KaX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153479>)

_Abstract unavailable from the accessible public sources._

## Binding Mode Matters: Hotspot\-Aware Drug Discovery via Explorative Preferences

**Authors:** Dingshuo Chen; Hao Yang; Kuangqi Zhou; Zhixun Li; Qiang Liu; xiangxiang Zeng; Shu Wu; Yaosen Min

**ID:** 153924\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153924

[Paper](<https://openreview.net/forum?id=Hd6Qc6G8J4>) | [PDF](<https://openreview.net/pdf?id=Hd6Qc6G8J4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153924>)

_Abstract unavailable from the accessible public sources._

## Rethinking Molecular Graph Backdoors under Chemistry\-aware Admission

**Authors:** Thinh Nguyen; Sze Jue Yang; Khoa D Doan; Chee Seng Chan; Kok\-Seng Wong

**ID:** 152990\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152990

[Paper](<https://openreview.net/forum?id=Oo98xlurzU>) | [PDF](<https://openreview.net/pdf?id=Oo98xlurzU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152990>)

_Abstract unavailable from the accessible public sources._

## Benchmarking sequence\-to\-ensemble predictors on UNICORNEdb, a UniProt\-grouped database of PDB\-derived conformational ensembles

**Authors:** William F Vanderbilt\-Fried; Luka Butskhrikidze; Benjamin P Brown; Hassane Mchaourab; Carlos Oliver

**ID:** 138904\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138904

[Paper](<https://openreview.net/forum?id=xwvwwQZbXy>) | [PDF](<https://openreview.net/pdf?id=xwvwwQZbXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138904>)

Following the striking success of ML\-driven static protein structure prediction, the challenge of protein conformational flexibility and thermodynamic ensemble prediction is rapidly coming to the foreground, and with it the need for rigorous benchmarks\. Yet, obtaining ground\-truth conformational states at scale remains highly challenging\. Past approaches are either small and hand\-curated or built by clustering PDB chains, which conflates genuine conformational variation with sequence\-induced differences across near\-homologs\. Here we introduce UNICORNE, a database of 50,000\+ protein conformational ensembles centered on UniProt and PDB chain/entity annotations to assemble per\-protein ensembles of experimentally resolved conformations without relying on clustering\. From our database, we derive UNICORNE\-BENCH, a set of 839 multi\-conformation proteins on which we extensively benchmark seven recent sequence\-conditioned predictors spanning generative ensemble models and MSA\-perturbation methods\. We find that the ensemble\-generation problem is far from solved and identify several shared failure modes: even the strongest tool fully recovers only 8\.2\\% of ensembles, performance degrades with conformational diversity, and tools fail on overlapping rather than complementary subsets of targets\. Across the benchmark, we find that MSA\-perturbation methods modestly outperform direct generative approaches\. UNICORNE provides a biologically grounded reference needed to guide the next generation protein structure prediction\.      The full database and leaderboard are available at https://unicornedb\.org \(anonymized\), and source code is available at https://anonymous\.4open\.science/r/unicorne\_bench\_neurips\_source\-2327/\.

## MaterialsSaddles: 34 Million Transition States and a Flow\-Matching Saddle\-Point Predictor for Materials

**Authors:** Ilgar Baghishov; Sung Hoon Jung; Graeme Henkelman

**ID:** 139769\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139769

[Paper](<https://openreview.net/forum?id=5lFUOghgb2>) | [PDF](<https://openreview.net/pdf?id=5lFUOghgb2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139769>)

Transition state \(TS\) search is the rate\-limiting step in high\-throughput kinetics screening\. Generative models have been used to accelerate TS prediction for molecules, but extending them to periodic materials has been blocked by the absence of a large\-scale materials TS dataset\. We release MaterialsSaddles, the first such dataset: 34\.14 M \(reactant, saddle, product\) triplets generated with the state\-of\-the\-art UMA\-S\-1\.2 universal interatomic potential across four subsets, comprising 31\.35 M triplets over LeMat\-Bulk's 5\.34 M\-structure deduplication of Materials Project, OQMD, and Alexandria; 2\.59 M triplets over OC20 surfaces; 167 k triplets over OC22 oxide electrocatalysts; and 35 k climbing\-image nudged elastic band \(CI\-NEB\) paths over Materials Project battery cells\. The release totals 102\.4 M structures \(687 GB\) in ASE\-LMDB shards with stratified 90/5/5 splits, generated on a 500,000 GPU\-hour HPC pipeline\. Every triplet is connected by construction via double\-minimization from the converged saddle, and every frame carries per\-frame metadata including eigenmodes, curvatures, bond\-change diffs, and source identifiers\. As a working demonstration of the dataset's intended use, we release SaddleFlow, a flow\-matching reactant\-and\-product\-conditional saddle\-point generator built on a UMA\-S\-1\.2 backbone with FiLM\-based time conditioning and an SO\(3\)\-equivariant velocity head, trained on the mp20bat subset of MaterialsSaddles\. In a pilot DFT study, we show that dimer searches initialized from a sample of mp20bat test triplets converge substantially faster and more reliably than those initialized from the standard reactant\-product midpoint guess, indicating that MaterialsSaddles and SaddleFlow together offer a practical path to scaling DFT\-level transition\-state searches\. MaterialsSaddles \(CC\-BY 4\.0\), SaddleFlow \(MIT\), and the data\-generation engine SaddleMill \(MIT\) are publicly released\.

## Symplectic Parallel Scan: A Neural Hamiltonian Framework for Accelerated Scientific Simulation

**Authors:** Sungwoo Park

**ID:** 148524\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148524

[Paper](<https://openreview.net/forum?id=xFfEoYpedJ>) | [PDF](<https://openreview.net/pdf?id=xFfEoYpedJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148524>)

Neural Hamiltonian models provide a principled approach to learning dynamical systems by embedding the symplectic structure of physical evolution into the model class\. However, this geometric prior alone has not made Hamiltonian neural networks efficient long\-horizon simulators: an M\-step trajectory is still typically generated by M sequential updates, and common training objectives based on force matching or one\-step prediction provide only local supervision\. We introduce Symplectic Parallel Scan \(SPS\), a neural Hamiltonian framework that algebraizes the learned dynamics through a finite\-dimensional Poisson algebra of Hamiltonian generators\. SPS constructs a Neural\-\-Poisson Composition DAG closed under projected products and Poisson brackets, whose elements induce symplectic Hamiltonian drivers organized as a Lie\-group walk\. The associativity of this flow composition enables a parallel prefix\-scan over Hamiltonian drivers, reducing the sequential depth of trajectory propagation from $\\mathcal O\(M\)$ to $\\mathcal O\(\\log M\)$ while keeping each prefix inside the symplectic flow family\. The resulting model is trained through a global trajectory\-matching objective rather than only local force labels\. Across quantum spin and molecular dynamics benchmarks, SPS achieves substantial wall\-clock acceleration over sequential HNN baselines, improves long\-horizon prediction accuracy, and reduces energy drift and symplectic violation under extrapolation\.

## Gauge\-Symmetric Dual Lagrangian Frameworks for Born\-Oppenheimer Molecular Dynamics

**Authors:** Sungwoo Park; Jongwon Lee; Jiwoong Kim; Hyung\-sik Yoon

**ID:** 152638\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152638

[Paper](<https://openreview.net/forum?id=RYM51FF2fx>) | [PDF](<https://openreview.net/pdf?id=RYM51FF2fx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152638>)

Born\-Oppenheimer molecular dynamics delivers quantum accurate trajectories by evolving nuclei on the electronic ground\-state surface while retaining electronic observables such as dipoles and polarizabilities\. In Kohn\-Sham density functional theory, this typically relies on an iterative self consistent field solver at each time step\. Machine learning can predict electronic quantities or improve SCF initialization, yet dynamics remain sensitive to residual self consistency error, which can yield non conservative forces and energy drift, and repeated diagonalization limits differentiable and accelerator efficient implementations\. We propose a gauge\-symmetric dual Lagrangian framework that avoids SCF loops by propagating the physically meaningful electronic state as the occupied subspace and its density projector on a Grassmann manifold\. A residual driven update stabilized by Rayleigh type dissipation with time decaying inertia yields a closed evolution of the subspace, its conjugate momentum, and the projector\. Coupled with a neural gauge\-symmetric Hamiltonian with analytic coordinate derivatives, the method provides closed form forces with Pulay corrections and enables stable quantum BOMD on molecular simulation benchmarks\.

## Efficient and Accurate Zero Shot Generation of Symmetric Protein Complexes

**Authors:** Rory Gao; Yuanzhou Chen; Prajit Rajkumar; Wei Wang

**ID:** 153113\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153113

[Paper](<https://openreview.net/forum?id=No1xT9B5Qs>) | [PDF](<https://openreview.net/pdf?id=No1xT9B5Qs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153113>)

Symmetric organization is a fundamental principle of biomolecular complex assembly\. The same principle underlies engineered applications, from vaccine platforms to nanomaterials, making symmetric \\textit\{de novo\} generation a core capability for computational protein design\. We establish a theoretical foundation equating generation of an assembly with underlying symmetry group $G$ to generation within a quotient space over $G$\. This directly allows $\\mathrm\{SE\}\(3\)$\-equivariant models to generate symmetric structures with minimal distribution shift\.  With this insight we introduce \\textbf\{\\ours\{\}\} \(\\textbf\{Ze\}ro\-shot \\textbf\{U\}nified \\textbf\{S\}ymmetrization\), a framework that converts any pretrained $\\mathrm\{SE\}\(3\)$\-equivariant backbone generative model into an efficient generator of symmetric assemblies with no retraining\.  \\ours\{\} operates on a single \\emph\{canonical subunit\} and utilize \\emph\{phantom subunits\} to preserve internal model operations, reducing memory and runtime cost by $\\mathcal\{O\}\(\|G\|\)$ for finite groups $G$, compared to a full\-complex forward pass\. We implement \\ours\{\} for IPA\-based models \(FrameDiff, FoldFlow\) and axial\-attention\-based RFdiffusion, showing high generation efficiency with minimal degradation to generation quality\.  We then apply \\ours\{\} to generate symmetric complexes of over $10\{,\}000$ residues with exact, untruncated attention, a scale previously intractable with any model\.

## Self Driving Datasets: From 20 Million Papers to Nuanced Biomedical Knowledge at Scale

**Authors:** Haydn Jones; Yimeng Zeng; Alden Rose; Yifei Li; Yining Huang; Kaiwen Wu; Jiaming Liang; Maggie Huan; Yoseph Barash; Cesar de la Fuente\-Nunez; Osbert Bastani; Zachary Ives; Mark Yatskar; Jacob Gardner

**ID:** 139739\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139739

[Paper](<https://openreview.net/forum?id=7HQtc15Sfm>) | [PDF](<https://openreview.net/pdf?id=7HQtc15Sfm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139739>)

Manually curated biomedical repositories\-\-\-spanning bioactivity, genomics, and chemistry\-\-\-are expensive to maintain, lag behind primary literature, and often discard experimental context\. The absence of contextual information obscures critical nuances, thereby complicating the assessment of data correctness and coverage, necessary criteria for building high\-quality models\. We show that PubMed itself can be turned into structured datasets\-\-\-autonomously and cost\-effectively\-\-\-that are larger, more nuanced, and more accurate than the curated databases they would replace\. We present three coupled contributions: \(1\) an LLM\-based entity\-tagging pipeline, grounded in nine biomedical ontologies, that tags 4\.5 billion entities across 19 categories in a 22\.5M\-paper, 2\.5\-trillion\-token PubMed corpus; \(2\) hybrid sparse–dense retrieval infrastructure supporting surgical entity\-filtered semantic queries over the tagged corpus; and \(3\) Starling, a multi\-agent deep research system that, given only a natural\-language task description, autonomously designs precision\- and recall\-targeted retrieval filters, induces an extraction schema, and emits structured records with nuance\-rich fields and supporting passages\. Applied to six tasks\-\-\-blood\-brain barrier permeability, oral bioavailability, acute toxicity \(LD50\), gene\-disease associations, protein subcellular localization, and chemical reactions\-\-\-Starling produces \~7\.7M records \(per\-task scale ranges from 131K to 3M\); several of these are, to our knowledge, the largest public datasets for their respective properties\. Frontier\-model rejection of our kept extractions is 0\.6–7\.7% across tasks, surprisingly far below the error rates we measure on the widely used, manually curated counterparts \(e\.g\., 16\.5% on BBB\_Martins, 7\.3% on Bioavailability\_Ma\)\. Beyond scale and accuracy, the attached supporting passages carry nuance that tabular databases discard: for example, oral bioavailability of a molecule might depend on whether the patient is fed or fasted\. Together, the corpus, retrieval layer, and agent establish a foundation for multimodal predictive and generative models in AI\-driven therapeutic design\. We release code and links to our datasets at https://anonymous\.4open\.science/r/starling\-B026/\.

## Budgeted Quotient\-Residual Guidance for Frozen Pocket\-Conditioned Molecular Diffusion

**Authors:** Xinyu Wang; Jinbo Bi; minghu song

**ID:** 152994\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152994

[Paper](<https://openreview.net/forum?id=OlWbCLrL1d>) | [PDF](<https://openreview.net/pdf?id=OlWbCLrL1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152994>)

Pocket\-conditioned molecular diffusion updates ambient atom coordinates, but many lead\-optimization objectives are expressed on quotient features such as distances, contacts, and anchored substructures\. We introduce budgeted quotient\-residual guidance \(QRG\), an inference\-time correction that makes these quotient objectives active without retraining the molecular generator\. QRG lifts quotient covectors to metric\-horizontal ambient directions and delivers them through a trust budget set by the frozen sampler's own step norm: quotient geometry chooses the direction, while sampler motion sets the scale\. We derive the horizontal lift, closed\-form sampler\-scaled update, KL/kinetic interpretation around a frozen reverse step, equivariance conditions, and a product\-budget split for separately normalized section and residual controls\. Controlled quotient tasks confirm that sampler\-relative delivery activates signals that raw local quotient gradients leave dormant\. On frozen TargetDiff backbones, official seed\-0 CBGBench ligand\-generation/editing sweeps show practical quality\-\-runtime gains: CheapMain improves validity from 0\.815 to 0\.864 on fragment growing, 0\.664 to 0\.707 on scaffold hopping, and 0\.681 to 0\.712 on linker design, while PCMain improves fragment/scaffold and remains near\-neutral on linker\. Novelty remains 1\.000 and diversity is preserved in the matched multi\-seed molecular slice, giving task\-dependent improvements without sampler retraining or backbone modification\. Overall, QRG provides a lightweight route to quotient\-aware inference for frozen molecular samplers with explicit runtime accounting\.

## MICE: Multi\-animal Interaction Context Encoder — A Hierarchical Foundation Model for Mouse Behavior

**Authors:** Yen\-Shuo Su; Weihan Li; Anqi Wu

**ID:** 150591 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h2uqXBSIOu>) | [PDF](<https://openreview.net/pdf?id=h2uqXBSIOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150591>)

Quantifying mouse behavior from pose is a foundational tool in neuroscience, ethology, drug discovery, and animal welfare\. Self\-supervised foundation models are a natural fit, but a foundation model for mouse behavior must handle social behavior \- many behaviors that matter \(aggression, courtship, mounting, allogrooming\) are inherently multi\-animal\. Existing self\-supervised pose models fall short: they encode each animal independently and discard interaction signal, hard\-code the animal count, and pretrain one dataset at a time\. We introduce MICE \(Multi\-animal Interaction Context Encoder\), a hierarchical foundation model for mouse behavior that pretrains jointly on six mouse\-pose corpora spanning one to four mice and 7 to 27 keypoints\. MICE combines a hierarchical individual encoder capturing per\-mouse kinematics at multiple temporal scales with a Perceiver\-style social encoder whose learned latent codebook decouples parameter count from animal count, so a single checkpoint serves any group size without retraining\. Across four evaluation protocols on all six datasets, MICE matches or exceeds prior keypoint\-based baselines, and layer\-wise probing shows the social stage incrementally improves discriminability beyond the individual encoder\. Code and weights will be released\.

## Lifting Biomolecular Data Acquisition

**Authors:** Eli N\. Weinstein; Andrei Slabodkin; Mattia G Gollub; Kerry Dobbs; Xiao\-Bing Cui; Fang zhang; Kristina Gurung; Elizabeth B Wood

**ID:** 154237 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FD6jyMD6pj>) | [PDF](<https://openreview.net/pdf?id=FD6jyMD6pj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154237>)

One strategy to scale up ML\-driven science is to increase wet lab experiments' information density\. We present a method based on a neural extension of compressed sensing to function space\. We measure the activity of multiple different molecules simultaneously, rather than individually\. Then, we deconvolute the molecule\-activity map during model training\. Co\-design of wet lab experiments and learning algorithms provably leads to orders\-of\-magnitude gains in information density\. We demonstrate on antibodies and cell therapies\.

## Position: Machine Learning Models for Reaction Transition States Deserve Better

**Authors:** Atharva Tambat; Ankit Ghosh; Swastik Kumar; Raghavan B Sunoj; Abir De

**ID:** 140045 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqmaBhk8KB>) | [PDF](<https://openreview.net/pdf?id=bqmaBhk8KB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140045>)

Understanding reaction mechanisms is central to advances in chemistry, materials science, and drug discovery, where transition states govern reactivity and kinetics\. This position paper argues that current ML approaches for transition state \(TS\) prediction are fundamentally limited by inadequate datasets, weakly grounded methods, and flawed evaluation protocols, leading to overstated progress and questionable chemical reliability\. While recent advances have improved performance, these gains are largely superficial when assessed against the core requirements of a valid TS\. First, widely used datasets suffer from issues of chemical implausibility, lack of diversity, and insufficient validation, introducing noise and bias into model training\. Second, existing methods often neglect essential physical constraints and rely on assumptions like fixed atom mappings, resulting in brittle, non\-generalizable models\. Third, standard evaluation metrics fail to capture chemical validity, often rewarding plausible but physically incorrect predictions\. Empirical analyses, including quantum chemical validation and robustness studies, demonstrate that many reported transition states do not correspond to intended reactions and that models exhibit poor generalization and strong bias toward equilibrium configurations\. We contend that meaningful progress in TS prediction requires a principled rethinking of dataset construction, incorporation of physical constraints into model design, and the development of chemically faithful evaluation frameworks\.

## SLOT\-IR: Learning Disentangled Slot Representations for Infrared Spectral Unmixing

**Authors:** Jingru Gan; Yannah J\.U\. Melle; Yanqiao Zhu; Daniel Schwalbe\-Koda; Wei Wang

**ID:** 153515 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kme4ONeaCZ>) | [PDF](<https://openreview.net/pdf?id=Kme4ONeaCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153515>)

Infrared \(IR\) spectral unmixing recovers individual component spectra from a measured mixture, enabling chemical identification\. Existing methods either assume linear superposition of components, which fails for liquid\-phase mixtures where molecular interactions alter spectral shapes, or use deep networks that entangle all components in a shared representation\. We introduce SLOT\-IR, a slot\-based architecture that decomposes mixture spectra into separate per\-component embeddings and decodes each independently into a predicted spectrum\. A two\-stage training procedure first learns to map a single molecule from gas\-phase spectra to liquid\-phase, then trains the full unmixing model on mixtures\. On the benchmark of annotated infrared spectra, SLOT\-IR outperforms all baselines on both binary and ternary mixture identification\. To verify that the model captures genuine chemical structure rather than statistical shortcuts, we apply a post\-hoc BatchTopK Sparse Autoencoder \(SAE\) to frozen slot embeddings and test whether recovered features correspond to known functional groups\. Statistical and causal analyses confirm model alignment with established chemistry\.

## ProteinOPD: Towards Effective and Efficient Preference Alignment for Protein Design

**Authors:** Yulin Zhang; He CAO; Zihao Jiang; Chenyi Zi; Zhipeng Zhou; Zijing Liu; Yu Li; Jia Li; Ziqi Gao

**ID:** 153649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JlG9kMWxYa>) | [PDF](<https://openreview.net/pdf?id=JlG9kMWxYa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153649>)

Designing proteins with desired functions or properties represents a core goal in synthetic biology, therapeutic development, and drug discovery\.  Recent advances in protein language models \(PLMs\) have enabled the generation of highly designable protein sequences, while preference alignment provides a promising way to steer designs toward desired functions and properties\. Nevertheless, they often trigger catastrophic forgetting of pretrained knowledge, degrading basic designability and failing to balance multiple competing objectives\.  To address these issues, we draw inspiration from On\-Policy Distillation \(OPD\), an advanced post\-training method renowned for mitigating catastrophic forgetting through its mode\-seeking nature\. In this work, we propose ProteinOPD, a multi\-objective preference alignment framework that can effectively balance multiple preference objectives while maintaining the inherent designability of PLMs\. ProteinOPD adapts a pretrained PLM into preference\-specific teachers and distills their knowledge into a shared student via token\-level OPD on the student’s own trajectories\.  During this process, the student is aligned to a unique normalized geometric consensus of weighted teachers while ensuring bounded optimization under conflicts\. This bridges the gap for OPD in multi\-objective/teacher alignment\. Extensive experiments show that ProteinOPD achieves substantial gains on target preference objectives without compromising the designability, with a 8× training speedup over RL\-based alignment competitors\.

## Harmonic Torsional Diffusion for Flexible Protein\-Ligand Docking

**Authors:** Maksim Zhdanov; Pavel Strashnov; Vladislav Kurenkov

**ID:** 153661\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153661

[Paper](<https://openreview.net/forum?id=JgekVKyVaW>) | [PDF](<https://openreview.net/pdf?id=JgekVKyVaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153661>)

_Abstract unavailable from the accessible public sources._

## Drift\-React: One\-step Generation of Reaction Pathways via SE\(3\) Drifting Fields

**Authors:** Rémi Schlama; Philippe Schwaller

**ID:** 154432\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154432

[Paper](<https://openreview.net/forum?id=DdMTM4whIk>) | [PDF](<https://openreview.net/pdf?id=DdMTM4whIk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154432>)

_Abstract unavailable from the accessible public sources._

## MIND\-DDI: Multi\-Omics Interpretable Drug\-Drug Interaction Prediction with Joint Optimization of Graph Structure, Neural Architecture, and Symbolic Rules

**Authors:** Linxin Xiao; Xin Wang; Yang Yao; Wenwu Zhu

**ID:** 155628\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155628

[Paper](<https://openreview.net/forum?id=4AkKfIsmZu>) | [PDF](<https://openreview.net/pdf?id=4AkKfIsmZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155628>)

_Abstract unavailable from the accessible public sources._

## MICE: Multi\-animal Interaction Context Encoder — A Hierarchical Foundation Model for Mouse Behavior

**Authors:** Yen\-Shuo Su; Weihan Li; Anqi Wu

**ID:** 150591\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150591

[Paper](<https://openreview.net/forum?id=h2uqXBSIOu>) | [PDF](<https://openreview.net/pdf?id=h2uqXBSIOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150591>)

Quantifying mouse behavior from pose is a foundational tool in neuroscience, ethology, drug discovery, and animal welfare\. Self\-supervised foundation models are a natural fit, but a foundation model for mouse behavior must handle social behavior \- many behaviors that matter \(aggression, courtship, mounting, allogrooming\) are inherently multi\-animal\. Existing self\-supervised pose models fall short: they encode each animal independently and discard interaction signal, hard\-code the animal count, and pretrain one dataset at a time\. We introduce MICE \(Multi\-animal Interaction Context Encoder\), a hierarchical foundation model for mouse behavior that pretrains jointly on six mouse\-pose corpora spanning one to four mice and 7 to 27 keypoints\. MICE combines a hierarchical individual encoder capturing per\-mouse kinematics at multiple temporal scales with a Perceiver\-style social encoder whose learned latent codebook decouples parameter count from animal count, so a single checkpoint serves any group size without retraining\. Across four evaluation protocols on all six datasets, MICE matches or exceeds prior keypoint\-based baselines, and layer\-wise probing shows the social stage incrementally improves discriminability beyond the individual encoder\. Code and weights will be released\.

## PepSpecBench: A Unified Evaluation Benchmark for Peptide Tandem Mass Spectrometry Prediction

**Authors:** Zhiwen Yang; Pan Liu; yifan Li; Yunhua Zhong; Jun Xia

**ID:** 139229\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139229

[Paper](<https://openreview.net/forum?id=dePVHdM1Gw>) | [PDF](<https://openreview.net/pdf?id=dePVHdM1Gw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139229>)

Tandem mass spectrometry provides a high\-throughput framework for identifying and quantifying proteins in complex biological samples\. In computational proteomics, predicting peptide MS/MS spectra is a critical task, enabling downstream applications such as large\-scale peptide identification and quantification\. While deep learning architectures have substantially improved prediction accuracy, three evaluation challenges obscure the true progress of the field\. First, inconsistent data preprocessing and incompatible model output spaces hinder fair model comparison\. Second, flawed data splitting strategies can permit hidden sequence leakage and inflate reported performance\. Third, existing evaluations typically lack comprehensive cross\-species benchmarking and systematic assessment of model robustness to influential experimental conditions\. To address these challenges, we propose PepSpecBench, a unified benchmark for peptide MS/MS spectrum prediction\. PepSpecBench standardizes data preprocessing across complementary public datasets, enforces a strict backbone\-disjoint splitting strategy to eliminate sequence leakage, and evaluates diverse architectures within a shared fragment\-ion representation space\. It further introduces a comprehensive multi\-species evaluation suite and physically grounded metadata perturbation probes to assess model robustness and instrument awareness\. We uncover previously unrecognized performance discrepancies and robustness limitations across six representative models, providing actionable insights for future model design, evaluation and practical deployment\. Code and data are available at https://anonymous\.4open\.science/r/PepSpecBench\-NeurIPS2026/\.

## PaxBench: A Multimodal Sequence Benchmark for Protein Abundance Prediction

**Authors:** Ke Zhai; Oscar J Charles; Helena A Saunders; Conrad Bessant

**ID:** 139322\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139322

[Paper](<https://openreview.net/forum?id=XKvWzTE4DP>) | [PDF](<https://openreview.net/pdf?id=XKvWzTE4DP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139322>)

Protein abundance links genotype to cellular state and is useful for comparing genes, organisms, and engineered systems\. PaxDb contains broad abundance mea\- surements, but its heterogeneous records have not yet been organized into a shared benchmark for testing protein, CDS, codon, and mRNA representations under the same target\. The difficulty is that abundance labels must be recovered from diverse PaxDb sources, matched to species\-specific sequences at several molecular levels, and evaluated despite incomplete modality coverage, limited metadata, and variable annotation quality\. To address this, we introduce PaxBench, a carefully cleaned and aligned seven\-species PaxDb\-derived benchmark with matched protein, CDS, codon, and mRNA inputs, and use it to test whether biological foundation models benefit from multimodal fusion\. On the cluster\-aware split, the full multimodal representation reaches Spearman 0\.789, compared with 0\.740 for the best single representation, while random evaluation reaches 0\.834\. Cross\-species settings also remain predictive\. These results suggest that protein, coding\-sequence, codon, and transcript representations provide complementary predictive information under this benchmark\. PaxBench provides a compact setting for comparing foundation models, feature baselines, adaptation methods, and interpretability analyses for sequence\-based abundance prediction\.

## Chain\-of\-Generation: Progressive Latent Diffusion for Text\-Guided Molecular Design

**Authors:** Lingxiao Li; Haobo Zhang; Bin Chen; Jiayu Zhou

**ID:** 149593\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149593

[Paper](<https://openreview.net/forum?id=ovonL3CMA1>) | [PDF](<https://openreview.net/pdf?id=ovonL3CMA1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149593>)

Compositional prompts in text\-to\-molecule generation often specify several structural constraints at once, such as scaffolds, functional groups, substituents, and finer modifiers\. Existing molecular latent diffusion models typically inject the full prompt once and apply it uniformly throughout denoising, which can cause later constraints to overwrite or distort earlier structural commitments\. We propose \*\*Chain\-of\-Generation \(COG\)\*\*, a training\-free progressive latent diffusion strategy for text\-guided molecular design\. Technically, CoG realizes progressive generation as multi\-stage latent denoising over cumulative molecular sub\-prompts: it factorizes a prompt into chemistry\-informed coarse\-to\-fine segments, conditions each stage on the cumulative sub\-prompt, and continues denoising from the previous\-stage latent using a fixed partial\-denoising schedule\. This turns one\-shot conditional generation into a sequence of stage\-wise denoising steps that help retain earlier structure while introducing later constraints\. Across benchmark, out\-of\-distribution, and ablation settings, CoG improves structural prompt fidelity over one\-shot conditioning on the tested latent graph\-diffusion backbones\.

## MSAlign: Aligning Molecular and Mass Spectra Foundation Models for Metabolite Identification

**Authors:** Paul Krzakala; Gabriel Melo; Camille Lançon; Charlotte Laclau; Rémi Flamary; Etienne A Thévenot; Florence d&amp;amp;\#x27;Alché\-Buc

**ID:** 155366 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=69xCNxFiTJ>) | [PDF](<https://openreview.net/pdf?id=69xCNxFiTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155366>)

Accurately identifying metabolites \(small molecules\) from mass spectrometry data remains a core challenge in metabolomics, with broad applications in drug discovery, environmental analysis, and clinical research\. We address the Molecule Retrieval task, which consists in recovering the chemical structure of a metabolite from its MS/MS spectrum given a set of candidate molecules\. While the recent release of benchmark datasets such as MassSpecGym and Spectraverse has considerably accelerated the development of novel machine learning approaches, the complexity of data preprocessing pipelines and the lack of unified implementations make methods and results difficult to reproduce and compare\. We make three contributions\. First, we propose a unified framework encompassing recent approaches based on representation alignment and contrastive learning\. Second, we introduce MSAlign, inspired by multimodal alignment in vision\-language models, which learns a shared representation space by aligning two frozen foundation models \(DreaMS for mass spectra and ChemBERTa for molecules\) through lightweight MLP projections trained with a candidate\-based contrastive objective\. MSAlign is simple to implement, fast to train and consistently outperforms existing approaches across all benchmarks\. Third, we investigate a long\-standing evaluation problem: data splitting strategies in molecule retrieval implicitly trade off data leakage against domain shift\. We formalize this tension by introducing a quantitative measure of distribution shift, and use it to evaluate splitting strategies in existing benchmarks\. All datasets, splits, candidate sets, and a unified implementation of MSAlign and baselines are publicly released to support reproducible research\.

## QT\-Net: Rethinking Evaluation of AI Models in Atomic Chemical Space

**Authors:** Pablo Martínez Crespo; Stefano Ribes; Martin Rahm; Richard Johannes Maximilian Beckmann; Robert Jordan; Marisa Gliege; Santiago Miret; Vijay K Narasimhan; Rocío Mercado

**ID:** 148714\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148714

[Paper](<https://openreview.net/forum?id=valKr48pWt>) | [PDF](<https://openreview.net/pdf?id=valKr48pWt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148714>)

Atomic properties such as partial charges or multipoles encode chemically meaningful information that can inform downstream molecular property prediction, but their evaluation as machine learning targets has been complicated by the absence of a principled out\-of\-distribution evaluation protocol at the atomic level\. In this work, we propose a held\-out evaluation protocol that clusters atomic environments by SOAP descriptors and computes metrics accounting only for cluster labels unseen during training\. Following this procedure, we use 5×5 cross\-validation and Tukey's HSD to run a statistically rigorous comparison of E\(3\)\-equivariant against non\-equivariant, rotationally augmented models for predicting electron populations and multipoles of H, C, N, and O atoms\. Building on our results, we introduce the Quantum Topological Neural Network \(QT\-Net\), a rotationally augmented, non\-equivariant graph neural network\. We show that QT\-Net can be used to infer properties of atoms in molecules from QM9 outside our training set, and that these inferred properties can yield improvement when used as input features for downstream molecular property prediction\. To further validate the framework, molecular dipole moments computed from QT\-Net's per\-atom outputs recover the ground\-truth values reported in QM9\. We release all code and data, including a JAX implementation of QT\-Net, to support the broader use of learned QTA properties as inductive biases for atomic\-scale molecular machine learning\.

## DrugSAGE: Self\-evolving Agent Experience for Efficient State\-of\-the\-Art Drug Discovery

**Authors:** Yikun Zhang; Xiwei Cheng; Tianyu Liu; Yuanqi Du; Wengong Jin

**ID:** 149474\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149474

[Paper](<https://openreview.net/forum?id=pqdpYPY0mI>) | [PDF](<https://openreview.net/pdf?id=pqdpYPY0mI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149474>)

Building state\-of\-the\-art \(SOTA\) predictive models for drug discovery requires expensive search over tools, architectures, and training strategies\. Current LLM\-based agents can find SOTA solutions through extensive trial and error, but they do not retain the experience accumulated along the way and therefore pay the full search cost on every new task\. We propose DrugSAGE \(Self\-evolving Agent Experience\), a framework that accumulates and reuses experience across tasks to build SOTA drug discovery models efficiently\. DrugSAGE maintains a cross\-task memory of verified skills, statistical evidence about effective strategies, and a record of recurring errors and their fixes\. In some cases, DrugSAGE transfers a working solution directly without test\-time search\. In 33 molecular property prediction tasks, DrugSAGE ranks first among nine SOTA agents in a single\-task setting\. With memory accumulated from 16 smaller tasks, DrugSAGE achieves a averaged normalized score of 0\.935 on 17 held\-out tasks in a cross\-task evaluation setting and outperforms all baseline agents by 10\-30\\% in a zero\-test\-time search regime\. In summary, our work shows the advantage of cross\-task memory for efficient SOTA model development in drug discovery\.

## Trustworthy Retrosynthesis: Eliminating Hallucinations with a Diverse Ensemble of Reaction Scorers

**Authors:** Michał Sadowski; Tadija Radusinović; Maria Wyrzykowska; Lukasz Sztukiewicz; Jan Rzymkowski; Piotr Kozakowski; Mikolaj Sacha; Ruard van Workum; Stanislaw Jastrzebski

**ID:** 152729\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152729

[Paper](<https://openreview.net/forum?id=QnViF2joi3>) | [PDF](<https://openreview.net/pdf?id=QnViF2joi3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152729>)

_Abstract unavailable from the accessible public sources._

## On the Selectivity of Generative Models in Structure\-Based Drug Design

**Authors:** Ella Miray Rajaonson; Jungyoon Lee; William Chau; Alan Aspuru\-Guzik; Benjamin Sanchez\-Lengeling; Dominique Beaini; Kirill Neklyudov; Marta Skreta

**ID:** 138964\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138964

[Paper](<https://openreview.net/forum?id=tjnm6pEJ3a>) | [PDF](<https://openreview.net/pdf?id=tjnm6pEJ3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138964>)

Designing small\-molecule drugs that selectively bind to a target protein while avoiding unintended interactions with other proteins is essential for reducing side effects that contribute substantially to clinical attrition\. Although structure\-based drug design \(SBDD\) has advanced rapidly with deep learning, most generative models still optimize binding to a single target and disregard selectivity due to limited training data and unknown off\-target interactions\. Motivated by this gap, we introduce SelectBench, a comprehensive benchmark assessing the selectivity of generative SBDD models\. SelectBench provides three curated evaluation tasks reflecting different real\-world drug discovery scenarios: literature\-based case studies, safety screening panels used in pharmaceutical development, and large\-scale structure\-based evaluation sets\. We further introduce a suite of metrics to quantify selectivity and conduct a systematic evaluation of nine representative SBDD models, including methods explicitly trained for selectivity and widely\-used inference\-time guidance techniques\. Our results show that even selectivity\-trained models achieve only modest off\-target discrimination and inference\-time guidance provides limited improvements, underscoring the need for method improvement\. SelectBench provides both a characterization of where current generative SBDD stands on selectivity and an open, extensible platform to accelerate progress\.

## Chain\-of\-Generation: Progressive Latent Diffusion for Text\-Guided Molecular Design

**Authors:** Lingxiao Li; Haobo Zhang; Bin Chen; Jiayu Zhou

**ID:** 149593\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149593

[Paper](<https://openreview.net/forum?id=ovonL3CMA1>) | [PDF](<https://openreview.net/pdf?id=ovonL3CMA1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149593>)

Compositional prompts in text\-to\-molecule generation often specify several structural constraints at once, such as scaffolds, functional groups, substituents, and finer modifiers\. Existing molecular latent diffusion models typically inject the full prompt once and apply it uniformly throughout denoising, which can cause later constraints to overwrite or distort earlier structural commitments\. We propose \*\*Chain\-of\-Generation \(COG\)\*\*, a training\-free progressive latent diffusion strategy for text\-guided molecular design\. Technically, CoG realizes progressive generation as multi\-stage latent denoising over cumulative molecular sub\-prompts: it factorizes a prompt into chemistry\-informed coarse\-to\-fine segments, conditions each stage on the cumulative sub\-prompt, and continues denoising from the previous\-stage latent using a fixed partial\-denoising schedule\. This turns one\-shot conditional generation into a sequence of stage\-wise denoising steps that help retain earlier structure while introducing later constraints\. Across benchmark, out\-of\-distribution, and ablation settings, CoG improves structural prompt fidelity over one\-shot conditioning on the tested latent graph\-diffusion backbones\.

## MSAlign: Aligning Molecular and Mass Spectra Foundation Models for Metabolite Identification

**Authors:** Paul Krzakala; Gabriel Melo; Camille Lançon; Charlotte Laclau; Rémi Flamary; Etienne A Thévenot; Florence d&amp;amp;\#x27;Alché\-Buc

**ID:** 155366\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155366

[Paper](<https://openreview.net/forum?id=69xCNxFiTJ>) | [PDF](<https://openreview.net/pdf?id=69xCNxFiTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155366>)

Accurately identifying metabolites \(small molecules\) from mass spectrometry data remains a core challenge in metabolomics, with broad applications in drug discovery, environmental analysis, and clinical research\. We address the Molecule Retrieval task, which consists in recovering the chemical structure of a metabolite from its MS/MS spectrum given a set of candidate molecules\. While the recent release of benchmark datasets such as MassSpecGym and Spectraverse has considerably accelerated the development of novel machine learning approaches, the complexity of data preprocessing pipelines and the lack of unified implementations make methods and results difficult to reproduce and compare\. We make three contributions\. First, we propose a unified framework encompassing recent approaches based on representation alignment and contrastive learning\. Second, we introduce MSAlign, inspired by multimodal alignment in vision\-language models, which learns a shared representation space by aligning two frozen foundation models \(DreaMS for mass spectra and ChemBERTa for molecules\) through lightweight MLP projections trained with a candidate\-based contrastive objective\. MSAlign is simple to implement, fast to train and consistently outperforms existing approaches across all benchmarks\. Third, we investigate a long\-standing evaluation problem: data splitting strategies in molecule retrieval implicitly trade off data leakage against domain shift\. We formalize this tension by introducing a quantitative measure of distribution shift, and use it to evaluate splitting strategies in existing benchmarks\. All datasets, splits, candidate sets, and a unified implementation of MSAlign and baselines are publicly released to support reproducible research\.

## ProtGlycanDock: Towards Accurate Protein\-Glycan Docking with Tailored Dataset, Benchmark and Model

**Authors:** Minghao Xu; Jiaze Song; Jinyu Wang; Wentao Zhang

**ID:** 139712\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139712

[Paper](<https://openreview.net/forum?id=90gsNmRJos>) | [PDF](<https://openreview.net/pdf?id=90gsNmRJos>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139712>)

_Abstract unavailable from the accessible public sources._

## Equivariant Spherical Transformer for Efficient Molecular Modeling

**Authors:** Junyi An; Xinyu Lu; Yun\-Fei Shi; Peijia Lin; Qianwei Tang; Li\-Cheng Xu; Chao Qu; Fenglei Cao; Yuan Qi

**ID:** 155430 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5i7KqZASE3>) | [PDF](<https://openreview.net/pdf?id=5i7KqZASE3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155430>)

_Abstract unavailable from the accessible public sources._

