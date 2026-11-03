# Applications / Genetics, Cell Biology, etc

应用 / 遗传学与细胞生物学

74 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Generating from Discrete Distributions Using Diffusions: Insights from Random Constraint Satisfaction Problems

**Authors:** Alankrita Bhatt; Mukur Gupta; Germain Kolossov; Andrea Montanari

**ID:** 150409 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iGHKaEN77P>) | [PDF](<https://openreview.net/pdf?id=iGHKaEN77P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150409>)

Generating data from discrete distributions is important for a number of application domains including text, tabular data, and genomic data\. Several groups have recently used random $k$\-satisfiability \($k$\-SAT\) as a synthetic benchmark for new generative techniques\. In this paper, we show that fundamental insights from the theory of random constraint satisfaction problems have observable implications \(sometime contradicting intuition\) on the behavior of generative techniques on such benchmarks\. More precisely, we study the problem of generating a uniformly random solution of a given \(random\) $k$\-SAT or $k$\-XORSAT formula\. Among other findings, we observe that: $\(i\)$ Continuous diffusions outperform masked discrete diffusions; $\(ii\)$ Learned diffusions can match the theoretical \`ideal' accuracy; $\(iii\)$ Smart ordering of the variables can significantly improve accuracy, although not following popular heuristics\.

## PRISM: Phenotype\-Resolved Inference in Single\-Cell Mixed Models via Latent Disease States and Contextualized Differential Expression

**Authors:** Andrea Rubbi; Lama Salem; Caleb Ellington; Pietro Lió; Mohammad Lotfollahi; Manolis Kellis; Ben Lengerich

**ID:** 152648 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RRB4zaB0gn>) | [PDF](<https://openreview.net/pdf?id=RRB4zaB0gn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152648>)

Standard single\-cell differential expression \(DE\) analysis identifies genes that change across conditions, but it usually overlooks two key sources of heterogeneity that single\-cell data are uniquely positioned to reveal: which cells within a donor are truly disease\-affected, and how disease effects depend on cell state or subject\-level context\. Assigning every cell the diagnosis of its donor can contaminate DE signal when disease penetrance is partial, while modeling each gene with a single disease effect cannot capture heterogeneous responses across cell populations\. We present PRISM \(Phenotype\-Resolved Inference in Single\-cell Mixed models\), a negative\-binomial mixed\-effects framework that augments standard DE analysis with three outputs: a context\-DE vector $\\theta\_g$ that tests whether disease effects vary along a biological axis $z\_\{ij\}$ \(such as cell state, sex, or age\); a cell\-level disease posterior $q\_\{ij\}$ that provides unsupervised disease annotation; and a subject\-level disease burden $\\rho\_i$\. Naive likelihood\-only inference of $q\_\{ij\}$ is not identified onto the disease axis when nuisance variation \(batch, cell\-cycle, dominant subtypes\) competes with disease; we resolve this with a closed\-form 1\-D Wasserstein\-2 projection of the disease\-arm posterior onto a bimodal reference marginal that enforces the  \\\{healthy, affected\\\} structure implied by the disease label\.

## CellMSA: Context Modeling for Single\-Cell Representation Learning

**Authors:** Suyuan Zhao; Minghao Liu; Yizhen Luo; Zaiqing Nie

**ID:** 151414 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aqtv1iusCF>) | [PDF](<https://openreview.net/pdf?id=aqtv1iusCF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151414>)

Single\-cell transcriptomics enables profiling of cellular states at unprecedented resolution, but its high dimensionality, sparsity, and technical batch effects pose significant challenges for representation learning\. Existing single\-cell foundation models typically encode each cell independently or only model cells from the same batch for denoising, thereby underutilizing the rich relational information across batches and cell types to model gene expression patterns\. We argue that single\-cell models can benefit from more informative cell\-context modeling\. By comparing consistency and variation across cells, models can capture fine\-grained gene\-gene dependencies associated with cell states, which are essential for learning high\-quality representations\. Inspired by the use of multiple sequence alignment \(MSA\) context in protein modeling, we propose \\textbf\{CellMSA\}, a single\-cell representation learning framework that introduces an MSA\-inspired inductive bias into transcriptomic modeling\. For each target cell, CellMSA retrieves relevant cells from different batches and biologically related cell types as context, and summarizes cross\-cell patterns into a context\-dependent gene\-pair representation\. This representation is then injected into a pair\-aware target\-cell encoder for fine\-grained representation learning\. We pretrain CellMSA on a large\-scale human single\-cell corpus of approximately 109 million cells\. Experiments show that our framework consistently outperforms existing methods across multiple benchmarks\.

## Bigger Isn’t Better: Why the Indiscriminate Scaling of Foundation Models Can’t Solve Biology

**Authors:** Kathryne Metcalf; Lorin Crawford; Mary L Gray; Kevin K Yang; Alex X Lu

**ID:** 140123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1SNf7AVj6d>) | [PDF](<https://openreview.net/pdf?id=1SNf7AVj6d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140123>)

In the wake of AlphaFold’s spectacular achievements, a new generation of biological foundation models have promised to bring about similarly transformative advances in other life science domains\. However, we argue that the availability of prefabricated datasets, architectures, and benchmarking metrics—coupled with the pressure to publish novel results—has led computational biology to prioritize scale, visibility, and convenience over progress\. Without confronting the inbuilt limitations of our existing data and components, and without realigning the institutional and professional incentives that drive research decision\-making at the programmatic level, we risk misallocating effort at great cost to our ability to achieve meaningful biological insight\. This paper focuses on foundation modelling in proteomics, genomics, and single\-cell biology, offering a critical synthesis of common failure modes\. We highlight empirical challenges that have been brought against a number of high\-profile models as case studies, and—using AlphaFold as a countercase—explore what it would take to build a research ecosystem that would facilitate the development of theory\-driven, fit\-for\-purpose models\.

## MUSS: A Multi\-scale and Sequence\-based Model for Single\-cell Gene Regulation

**Authors:** Kangjie Zheng; Amirhossein Vahidi; Liying Jin; Joseph Clarke; Vijaya Baskar; Connor Rogerson; mj zhang; Muzlifah Haniffa; Anshul Kundaje; Mohammad Lotfollahi

**ID:** 150251 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jamWXjBXkt>) | [PDF](<https://openreview.net/pdf?id=jamWXjBXkt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150251>)

Modeling gene regulation in single cells requires jointly representing DNA sequence, chromatin accessibility, and gene expression across regulatory scales\. Sequence\-based models capture DNA\-level regulatory grammar but typically lack cell\-level resolution, whereas single\-cell omics models capture cell\-state semantics but treat genes and peaks as fixed vocabulary tokens, and thus lack a unified sequence\-based view of regulation\. Here, we present MUSS, a sequence\-based multi\-scale model for single\-cell gene regulation that preserves both DNA\-level and cell\-level resolution\. MUSS derives peak\- and gene\-level representations from DNA using a frozen pre\-trained sequence encoder, integrates them with a multi\-scale encoder combining peak\-peak self\-attention and distance\-biased peak\-gene interaction, and trains on paired scATAC\-seq and scRNA\-seq to align sequence\-derived representations with cell\-specific regulatory states\. Across gene expression prediction, enhancer\-gene linking, TF\-target gene recovery, and zero\-shot cell clustering, MUSS outperforms both sequence\-based and single\-cell omics baselines, and further generalizes to genes and peaks unseen during training\. Together, these results demonstrate that MUSS learns biologically meaningful and broadly generalizable regulatory representations for decoding cell\-type\-specific regulatory programs from DNA sequence\.

## Causally Structured Differential Network Modeling for Single\-Cell Perturbation Prediction

**Authors:** Jiayi Dong; Xinyue Gu; Fei Wang

**ID:** 148792 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v30gAQvUAX>) | [PDF](<https://openreview.net/pdf?id=v30gAQvUAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148792>)

Cellular perturbation experiments are essential for probing biological mechanisms and guiding therapeutic discovery\. While existing methods often treat perturbations as monolithic distributional shifts, they leave the underlying structural variations implicit\. Rather than attempting to infer independent global networks for every condition, we propose scPertCRL, a causally structured generative framework for single\-cell perturbation prediction\. scPertCRL decomposes perturbation effects into a shared latent structural backbone, condition\-specific structural modulations, and exogenous shifts\. By leveraging biologically informed embeddings and mechanism\-aware supervision, Differential Network Learner parameterizes these localized structural changes, enabling robust generalization to unseen interventions\. Extensive experiments on genetic and pharmacological benchmarks demonstrate that scPertCRL significantly improves predictive accuracy and out\-of\-distribution generalization, while yielding model\-based insights into perturbation mechanisms\.

## Open\-Ended Scientific Discovery and the Social Dynamics of Evolving Agent Networks

**Authors:** Tennison Liu; Silas Ruhrberg Estévez; Rob Davis; Ryan M Sheridan; David Bentley; Mihaela van der Schaar

**ID:** 150676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLFhs8AKyU>) | [PDF](<https://openreview.net/pdf?id=gLFhs8AKyU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150676>)

Scientific discovery is fundamentally open\-ended, characterized by epistemic uncertainty, and requiring endogenous goal\-setting and recursive knowledge accumulation\. While current agentic systems have demonstrated success in addressing goal\-based discovery tasks, they struggle to sustain discovery in open\-ended settings\. In this work, we posit that open\-ended discovery is an emergent network\-level property of a socially driven system\. We introduce $\\texttt\{ASCollab\}$, which translates four key algorithmic conditions: \(1\) population heterogeneity in research behaviors, \(2\) endogenous interaction networks where collaborations and attention routing emerge organically, and \(3\) socially driven peer evaluations, which are enabled by \(4\) a global, shared memory that reflects evolving research states\. Specifically, social memory is implemented to capture time\-varying expertise and reputational signals, and shifting attention paid to historical artifacts produced by the system\. Through experiments on large\-scale discovery problems in genomics, cell biology, and epidemiology, we demonstrate that $\\texttt\{ASCollab\}$ produces discoveries judged by domain experts to be both sound and significant\. Crucially, the system independently recovers real\-world scientific findings\. Furthermore, systematic investigations show that social dynamics fostered by each of the four conditions are vital, where heterogeneous agents operating within self\-organizing networks significantly outperform both fixed\-workflow baselines and homogeneous networks\.

## ATLAS: Adaptive Temporal Learning for Single\-Cell Multi\-Omics Alignment and Dynamics

**Authors:** Ye Zhang; Zijie Fang; Zhixiang Lin

**ID:** 152422 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TEIXzoW2jj>) | [PDF](<https://openreview.net/pdf?id=TEIXzoW2jj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152422>)

Single\-cell multi\-omics technologies provide a powerful basis for characterizing cell\-state transitions and dynamic regulatory processes\. However, existing methods for multi\-omics dynamic modeling still face two major limitations\. From the data perspective, many methods require high\-quality paired multi\-omics measurements; from the modeling perspective, dynamic inference often relies on predefined regulatory structures or kinetic assumptions\. These limitations restrict their applicability to partially paired, unpaired, and broader cross\-omics settings\. To address these challenges, we propose ATLAS, a unified framework for single\-cell multi\-omics alignment and dynamic modeling that jointly learns cross\-omics consistency and temporal dynamics from partially paired or unpaired data\. ATLAS adaptively models temporal lag effects between omics layers to characterize asynchronous cross\-omics regulation, and further introduces a reliability\-guided temporal distillation strategy to improve model\-based temporal ordering\. We systematically evaluate ATLAS on five datasets across four tasks, showing strong overall performance in multi\-omics alignment, cross\-omics prediction, trajectory inference, and future\-state prediction\. Our code is available at https://github\.com/anomity/ATLAS\.

## A Biconvex Formulation for Stable Transport of Mixture Models with a Unique Solution

**Authors:** Yeganeh Mohammadali Marghi; Kelly Jin; Uygar Sümbül

**ID:** 151803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XuKcEuYQSB>) | [PDF](<https://openreview.net/pdf?id=XuKcEuYQSB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151803>)

Optimal transport \(OT\) provides a principled framework for mapping between probability distributions\. Despite extensive progress, applying OT to large\-scale data remains computationally demanding, and the resulting pointwise transport plans are often difficult to interpret\. We introduce Optimal Mixture Transport \(OMT\), a scalable framework that shifts the transport paradigm from individual samples to mixtures of subpopulations, reformulating the transport problem as a strictly biconvex optimization with a unique global minimizer\. We further establish theoretical guarantees on the stability of the OMT map, showing that bounded perturbations of the underlying distributions lead to bounded changes in the transport plan\. By formulating subpopulations as exponential\-family distributions, OMT decouples computational complexity from the sample size, scaling solely with the number of mixture components\. We demonstrate the effectiveness and practicality of OMT on a wide range of synthetic benchmarks and real\-world datasets, including image data and large\-scale single\-cell RNA sequencing measurements\.

## Multiscale Microenvironment Vector Space Projection for Uncovering Diverse Pathological Biomarker

**Authors:** Zixiu Ding; Wenxuan Hao; Liya Ding; Yuan Dai; Jiazhen Yang; Shuwen Han; Lingxiang Jia; Zunlei Feng

**ID:** 156107 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0LsjELSCY9>) | [PDF](<https://openreview.net/pdf?id=0LsjELSCY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156107>)

Due to the challenge of uncovering biologically meaningful spatial tissue patterns from standard H\\&amp;E\-stained whole\-slide images \(WSIs\) without relying on multiplexed staining or fixed\-scale modeling, a unified framework is proposed for spatial biomarker discovery that integrates cell classification, adaptive multi\-scale microenvironment construction, and colocalization pattern analysis\. Cell\-level predictions assign discrete, semantically meaningful types that serve as the basis for microenvironment modeling, where physical adjacency initializes local ecological features and a combination of spatial competition\-based seed selection with homogeneity\-constrained recursive region growing allows microenvironments to expand from locally pure regions in a data\-driven manner, capturing heterogeneity across scales without predefined spatial ranges\. Microenvironment\-level cell composition features are then used to construct a colocalization feature space, explicitly modeling spatial relationships among cell types, and differential biomarkers are identified via a distributional comparison framework that systematically detects group\-specific colocalization patterns\. Experiments demonstrate that this framework reliably discovers discriminative and biologically interpretable spatial biomarkers from H\\&amp;E images alone, exhibiting robustness in tissues with complex structures and heterogeneous scales, and offering a flexible, extensible paradigm for spatial phenotypic biomarker discovery in standard histopathology\.

## Modeling Whole\-Slide Images as Dynamic Tumor Microenvironment Fields

**Authors:** Lei Wu; Jiashuai Liu; Di Zhang; Zhangpeng Gong; Yingkang Zhan; Yi Niu; Jiusong Ge; Chunze Yang; Kai Yi; Mireia Crispin\-Ortuzar; Chen Li; Zeyu Gao

**ID:** 149764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nVZ10zYT13>) | [PDF](<https://openreview.net/pdf?id=nVZ10zYT13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149764>)

Due to the gigapixel\-scale nature of whole\-slide images \(WSIs\), weakly supervised WSI analysis is commonly formulated as a multiple instance learning \(MIL\) problem, where patch\-level features are aggregated into slide\-level representations\. However, diagnostic and prognostic evidence often arises from spatially coherent tumor microenvironment regions and their interactions, rather than isolated patches alone\. Existing patch\-level or static region\-based methods usually overlook how tissue regions should be adaptively formed and subsequently evolved through microenvironment interactions across heterogeneous boundaries\.  In this paper, we propose Concept\-Guided Tumor Microenvironment Evolution \(TMEvolve\), a reaction\-diffusion\-inspired framework that models WSIs as latent tumor microenvironment fields over discrete patch graphs\. TMEvolve instantiates this view as a learnable graph\-discretized evolution process over patch neighborhoods\. It first forms adaptive soft tissue regions as coherent microenvironment units, then performs pseudo\-time evolution through two complementary local dynamics: intra\-region diffusion, which stabilizes latent states within coherent tissue compartments, and concept\-guided boundary flux, which propagates visual feature signals and language\-derived concept signals across heterogeneous region interfaces\. The evolved microenvironment regions are finally aggregated for slide\-level prediction\.  We evaluate TMEvolve on six datasets across three weakly supervised WSI tasks: survival prediction, gene expression prediction, and histological subtype classification\. TMEvolve consistently improves over representative MIL methods, pathology foundation models, and concept\-guided baselines\. Ablation studies and visualizations further support the effectiveness and interpretability of TMEvolve, highlighting the value of dynamic region modeling and boundary interaction\.

## CryoAtlas: A Large Curated Dataset and Unified Benchmark for Cryo\-EM Atomic Model Building

**Authors:** Mingrui Li; Minzhang Li; Weichen Qin; Yufan Xie; Zhangzhi Xiong; Sixian Shen; Jiakai Zhang; Yuan Pei; Jingyi Yu

**ID:** 139015 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qHJrv65ncA>) | [PDF](<https://openreview.net/pdf?id=qHJrv65ncA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139015>)

Deep learning has accelerated automated atomic model building from cryo\-EM maps, yet progress remains limited by the lack of large, high\-quality datasets and standardized evaluation benchmarks\. We address this gap by introducing CryoAtlas, a rigorously curated dataset and unified benchmark for density\-guided atomic model building\. By integrating and filtering EMDB and PDB entries \(up to March 2026\), CryoAtlas provides 17,809 map\-\-model\-\-sequence entries, including a curated 16,657\-entry training split\. From this resource, we construct a 618\-target benchmark with a shared evaluation protocol that jointly assesses structural accuracy, model\-to\-map fit, and stereochemical validity\. Using this framework, we benchmark state\-of\-the\-art learning\-based methods against Phenix and AlphaFold\~3, comprehensively analyzing the impact of map resolution, sequence length, protein category and sequence identity on modeling accuracy\. As a case study, retraining the ModelAngelo CNN component on CryoAtlas improves performance on the benchmark\. CryoAtlas provides an open, reproducible foundation for future cryo\-EM atomic model building research\.

## Measure\-to\-measure Regression with Transformers

**Authors:** Matthew Vandergrift; Martha White; Yury Polyanskiy; Philippe Rigollet; Lazar Atanackovic

**ID:** 153179 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NDf3Nc1J2Y>) | [PDF](<https://openreview.net/pdf?id=NDf3Nc1J2Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153179>)

Many learning problems require predicting how populations evolve under an unknown transformation\. A natural representation for such populations is a probability measure, with point clouds as a key example\. In this work, we study the \*\*measure\-to\-measure regression \(M2M\)\*\* problem, in which one seeks to learn a map between probability measures from a finite collection of observed input\-\-output pairs\. In contrast to classical regression, where individual samples are transformed independently, M2M regression treats entire distributions as the data points\. This perspective is vital in certain scientific applications, for example, cellular and molecular biology, where cells are known to evolve not as independent data points but as a distribution\. However, few existing approaches address the problem of M2M regression with sufficient expressivity and scalability\. We present a formalization of \_nonlinear\_ M2M regression and introduce two simple, expressive, and scalable approaches to learn such operators: transformers as \*\*static\*\* M2M maps and transformers as \*\*dynamic\*\* M2M velocity fields\. Our approach leverages the natural measure\-dependent and mean\-field structure of transformers to learn nonlinear M2M maps on the space of probability distributions\. We illustrate the effectiveness of our proposed method to generalize to \*unseen\* measures on synthetic experiments, canonical interacting particle systems, and a large\-scale patient\-derived organoid dataset for predicting treatment response in colorectal cancer\.

## On the Recoverability of Causal Relations from Bulk Gene Expression Data

**Authors:** Gongxu Luo; Boyang Sun; Kun Zhang

**ID:** 149548 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pKBv1h4LAZ>) | [PDF](<https://openreview.net/pdf?id=pKBv1h4LAZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149548>)

Bulk gene expression profiling, which aggregates pooled RNA across cells within a biological sample, remains important in the single\-cell era because it is typically less noisy, more sensitive, and more cost\-effective than single\-cell assays\. Accordingly, a growing body of computational methods seeks to recover causal relations among genes from bulk expression data\. However, aggregation is a lossy, non\-invertible coarsening of the underlying cellular system, and it remains unclear whether and under what conditions causal relations are recoverable from aggregated bulk gene expression data\. To answer this, we formalize recoverability under aggregation through two notions of consistency: functional\-form consistency and conditional\-independence consistency\. We then derive necessary and sufficient conditions for recoverability, showing that these properties are preserved only under linear aggregations \(e\.g\., sum/mean\) coupled with affine structural equations\. To assess the practical plausibility of these conditions, analyses of four bulk and four single\-cell gene expression datasets further reveal that the estimated pairwise regulatory functions among genes deviate from linearity in both data types, providing limited empirical support for the linearity assumptions required for recoverability\. Together, these results caution against recovering causal relations from aggregated bulk expression data without strong additional assumptions\.

## Designing Cell\-Type\-Specific Regulatory DNA with Guided Discrete Diffusion

**Authors:** Animesh Awasthi; Martin Stoll; Raphael Bednarsky; Moritz Schaefer; Christoph Bock

**ID:** 155302 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6b9Jl5EC4r>) | [PDF](<https://openreview.net/pdf?id=6b9Jl5EC4r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155302>)

Designing regulatory DNA with cell\-type\-specific activity is broadly relevant for cell engineering and gene therapy\. The regulatory activity of DNA elements such as promoters and enhancers emerges from the combinatorial organization of transcription factor binding sites and sequence context, which collectively constitute the genome's regulatory grammar\. Deep learning models can effectively predict DNA regulatory activity across cell types, but current generative approaches often produce DNA sequences that strongly deviate from this natural regulatory grammar, increasing the risk of unexpected behavior and off\-target effects in real\-world applications\. Here, we introduce DNA\-CRAFT, a method for designing regulatory DNA with high predicted cell\-type\-specific activity while preserving naturalness\. DNA\-CRAFT formulates regulatory sequence design as a guided search over a generative model pre\-trained on millions of naturally occurring regulatory elements from the human and mouse genomes\. Our method enables targeted exploration of DNA sequence space, efficient evaluation of candidate designs, and explicit suppression of unwanted activity\. Across benchmarks spanning human cell lines and primary immune cells, DNA\-CRAFT outperforms existing generative and optimization\-based methods, consistently achieving the best trade\-off between cell\-type specificity and naturalness in the designed regulatory DNA sequences\.

## Towards Scalable Context\-Aware Single\-Cell Spatial Transcriptomics Prediction from Histology Images

**Authors:** Zijun Gao; Chunbin Gu; Xiangde Luo; Jinxi Xiang; Pheng\-Ann Heng

**ID:** 151537 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZvH7ZrvJgK>) | [PDF](<https://openreview.net/pdf?id=ZvH7ZrvJgK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151537>)

Predicting gene expression from H\\&amp;E\-stained histology images offers a scalable alternative to costly spatial transcriptomics, yet most existing methods operate at the spot level, where signals from multiple cells are aggregated and critical cellular heterogeneity is obscured\. Extending this paradigm to single\-cell resolution is non\-trivial\. Naively applying pathology foundation models faces a scale mismatch: their patch\-level representations mix multiple cells, whereas per\-cell cropping or resizing distorts morphology and removes local context\. Conversely, segmentation\-based models without strong pretrained visual encoders often lack the morphological representation capacity needed for accurate molecular prediction and inherit errors from imperfect cell boundary masks\. Here, we present CELLO, an efficient end\-to\-end framework that performs a single pathology foundation model forward pass per image and uses grid sampling to extract location\-specific features for all cells simultaneously\. We further introduce a distance\-decay cross\-attention module that refines each cell representation using spatially biased local morphological context\. Using 52 paired Xenium\-\-WSI samples spanning 12 organs and approximately 10M cells, CELLO achieves state\-of\-the\-art performance in both in\-distribution and out\-of\-distribution settings while delivering at least a 7$\\times$ inference speedup over DeepSpot2Cell\. Our work establishes a scalable foundation for single\-cell gene expression prediction from H\\&amp;E images\.

## C3P: Contrastive promoter\-protein pretraining yields representations capturing bacterial gene regulation

**Authors:** Cameron Dufault; Scott Xu; Alan Moses

**ID:** 156046 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0pWBLS7Kzj>) | [PDF](<https://openreview.net/pdf?id=0pWBLS7Kzj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156046>)

Despite the increasing scale of genome language models \(gLMs\), their ability to decode the function of regulatory sequences remains unclear\. gLM pretraining relies on sequence reconstruction, which may struggle due to the noisy, rapidly evolving nature of regulatory DNA\. Self\-supervised contrastive approaches provide a promising alternative\. Inspired by language\-image architectures like CLIP, we demonstrate contrastive promoter\-protein pretraining \(C3P\)\. By learning to align promoters to their corresponding proteins, we leverage the rich representations of proteins learned by protein language models as supervisory signal for the learning of promoter representations\. After training on 88 million bacterial promoter\-protein pairs, we evaluate the predictive power of C3P\-learned promoter representations for inference of curated regulatory annotations, finding multi\-fold improvement over leading gLMs\. We also introduce zero\-shot co\-regulated gene retrieval, the ability to find co\-regulated genes in a genome using no experimental data\. We find that compared to a randomly initialized baseline, C3P training consistently provides significant zero\-shot performance gains, unlike gLMs\. Scaling analysis reveals the potential for further improvement as well as the efficiency of C3P, which achieved strong performance at a fraction of the training cost of leading gLMs\. In addition to demonstrating that C3P training is effective for learning representations of bacterial regulatory sequences, our strong zero\-shot co\-regulated gene retrieval performance suggests the possibility of decoding gene regulation for millions of bacteria from their genomes alone\.

## When Riemann flows with Wasserstein: Generative Modeling of Probability Distributions on Manifolds

**Authors:** Doron Haviv; Edward De Brouwer; Rishabh Anand; Rex Ying; Gabriele Scalia; Hector Corrada Bravo

**ID:** 152080 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VcYi3zSNpE>) | [PDF](<https://openreview.net/pdf?id=VcYi3zSNpE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152080>)

Many scientific datasets, such as molecular conformational ensembles or single\-cell tissue measurements, are naturally modeled as meta\-distributions: distributions over probability measures on non\-Euclidean domains\. Existing generative methods largely assume Euclidean geometry and fail to capture this structure\. We introduce Riemannian Wasserstein Entropic Flow Matching \(RWEFM\), a generative framework on the Wasserstein space $\\mathcal\{P\}\_2\(\\mathcal\{M\}\)$ of a Riemannian manifold $\(\\mathcal\{M\},g\)$\. RWEFM is trained by regressing a neural vector field onto Riemannian optimal transport velocities, using McCann displacement interpolations as conditional paths\. We confirm theoretically that this construction leads to a valid flow matching approach on $\\mathcal\{P\}\_2\(\\mathcal\{M\}\)$ and introduce the Riemannian Entropic Map, a GPU\-efficient approximation of the optimal transport map on manifolds\. Our experiments show that by respecting the intrinsic geometry of the data, RWEFM can generate whole single\-cell samples in hyperspherical latent spaces and protein conformational ensembles on the torus\. Code and tutorials are available at \\href\{https://github\.com/AnonRWEFM/RWEFM\}\{RWEFM\}\.

## TraceSim: A Generative Simulator and Benchmark for Joint scRNA\-seq and Lineage Tracing

**Authors:** Mehrshad Sadria; Katsuki Fujisawa; Xun Shen

**ID:** 139529 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQzlJvrFVl>) | [PDF](<https://openreview.net/pdf?id=KQzlJvrFVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139529>)

Single\-cell lineage tracing paired with transcriptomics is fundamentally transforming our understanding of cellular differentiation\. However, due to immense technical difficulties and experimental complexity, paired barcoding–scRNA\-seq datasets remain scarce, fragmented across only a handful of studies, and frequently corrupted by stochastic barcode silencing and site\-level dropout\. Because transcriptomic sequencing is destructive, the continuous trajectories of differentiating cells cannot be observed directly, leaving accurate generative simulators as the only practical path to the standardized ground\- truth benchmarks needed for rigorous method validation\. Yet the few existing simulators generate gene expression as a strictly Markovian process, failing to capture the fate bias seen in real biological systems, where early progenitor cells already carry coordinated transcriptomic signatures of their distant terminal fates\. Consequently, modern machine learning methods designed to predict cell fate cannot be rigorously benchmarked: the synthetic data systematically lacks the predictive signals these models are meant to learn\. We introduce TraceSim, a highly controllable, continuous multi\-fate simulation framework\. By modeling cellular differentiation as an overdamped Langevin process on a Waddington landscape, TraceSim generates non\-Markovian transcriptomic trajectories whose fate bias is tunable by construction, together with tunable parameters for asynchronous apoptosis, CRISPR barcoding errors, and transcriptomic signal\-to\-noise sparsity\. Through a comprehensive weakness\-targeted evaluation, we demonstrate that TraceSim successfully maps the predictive limits of modern architectures and shows the structural limitations of current simulators\. TraceSim establishes a new standard for validating lineage reconstruction and early cell fate prediction methods\.

## mRNABench: A curated benchmark for mature mRNA property and function prediction

**Authors:** Ruian \(Ian\) Shi; Taykhoom Dalal; Philip Fradkin; Divya Koyyalagunta; Simran Chhabria; Andrew Jung; Cyrus L Tam; Defne Ceyhan; Jessica Lin; Kaitlin U Laverty; Ilyes Baali; Bo Wang; Quaid Morris

**ID:** 139560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IY4QbYfFe4>) | [PDF](<https://openreview.net/pdf?id=IY4QbYfFe4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139560>)

Messenger RNA \(mRNA\) is central to gene expression, and its half\-life, localization, and translation efficiency drive phenotypic diversity in eukaryotic cells\. While supervised learning has been used to study the mRNA regulatory code, self\-supervised foundation models support a wider range of transfer learning tasks\. However, the dearth of standardized benchmarks limits efforts to pinpoint the strengths of various models\. Here, we present mRNABench, a benchmarking suite for mature mRNA biology, focused on human transcripts, that evaluates the representational quality of mature mRNA embeddings from self\-supervised nucleotide foundation models\. We curate 11 datasets and 79 prediction tasks that broadly capture salient properties of mature mRNA, and assess the performance of 29 families of nucleotide foundation models for a total of 460k experiments\. Using these experiments, we study parameter scaling, correlations between sequence compressibility and performance, data\-splitting strategies, and the effects of self\-supervised training objective on mRNA property prediction\.

## Differentiable Retrieval\-Augmented Generation for Predicting Cellular Responses to Gene Perturbation

**Authors:** Andrea Giuseppe Di Francesco; Andrea Rubbi; Rishabh Jain; Pietro Lió

**ID:** 152229 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UbCFFQ9TmZ>) | [PDF](<https://openreview.net/pdf?id=UbCFFQ9TmZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152229>)

Predicting transcriptional responses to genetic perturbations is fundamental to functional genomics and therapeutic discovery\. Recent deep learning models have shown promise in single\-cell perturbation response prediction, but they typically generate each response in isolation, without explicitly leveraging experimentally characterised responses to related perturbations\. We introduce PT\-RAG \(Perturbation\-aware Two\-stage Retrieval\-Augmented Generation\), a plug\-in retrieval\-and\-conditioning module for generative cellular perturbation response\. PT\-RAG augments an existing perturbation\-response backbone with learned access to related perturbation contexts\. The key challenge is that relevance is not fixed in this setting: functionally related genes may elicit different effects across cell types\. PT\-RAG addresses this with a two\-stage retrieval mechanism: GenePT\-based semantic retrieval first identifies $K$ candidate perturbations, after which a differentiable Gumbel\-Softmax selector adaptively selects retrieved contexts conditioned on the control cell state, the query perturbation, and each candidate perturbation\. Through cross\-cell\-type and cross\-perturbation generalization tasks, PT\-RAG consistently improves distributional similarity and often overall predictive quality; for example, on scGPT cross\-cell\-type results, Wasserstein distance drops by 10\.7%\. The code to reproduce our experiments is available at https://anonymous\.4open\.science/r/PT\-RAG\_NIPS\-13D8/\.

## Pathway\-Aligned Regulator Tokens for Interpretable Spatial Gene Expression Prediction from Histologyatial Transcriptomics Prediction from Histology

**Authors:** Hyun Namgung; Sanghyun Park

**ID:** 154953 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9gb3vNBdFP>) | [PDF](<https://openreview.net/pdf?id=9gb3vNBdFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154953>)

Predicting spatial gene expression from histopathology images enables transcriptomic analysis on archival H\\&amp;E samples where matched spatial transcriptomics data is unavailable\. Gene expression is organized through cyclic regulatory circuits: transcription factor complexes are themselves products of regulated genes, aggregating upstream gene activity and modulating co\-expressed downstream programs \(e\.g\., the ISGF3 complex coordinating hundreds of interferon\-stimulated genes through shared cis\-regulatory elements\)\. Existing approaches to histology\-to\-expression prediction, both deterministic and generative, employ generic architectures that ignore this structure\. We introduce regulator attention, a mechanism that encodes this cycle by pooling gene representations into a small set of content\-dependent tokens via a learned selector and routing them back through cross\-attention to modulate gene\-level features, in contrast to learnable token arrays whose identity is independent of the input\. Within a flow matching framework conditioned on pathology foundation model embeddings, regulator attention consistently outperforms deterministic and generative baselines on correlation\-based metrics across four tissue types spanning human cancer, normal tissue, and cross\-species samples, with substantial gains on highly variable genes\. Beyond predictive accuracy, 87\.5\\% of regulator tokens align with known biological pathways without supervision\. Replacing them with content\-independent learned queries eliminates this specialization and degrades predictive performance, isolating content\-dependent token generation as the causal mechanism\.

## Decomposed Representations Mitigate the Alignment–Specificity Trade\-off in Multi\-Omics

**Authors:** Mai Thao Dang; Feng Jiang; Hehuan Ma; Yuzhi Guo; Jingquan Yan; Haiqing Li; Saiyang Na; Zheng Zheng; Thuc A Tran; Jean Gao; Junzhou Huang

**ID:** 149003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tY6lfTLggZ>) | [PDF](<https://openreview.net/pdf?id=tY6lfTLggZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149003>)

Single\-cell multi\-omics technologies jointly measure multiple modalities from the same cell, such as gene expression, chromatin accessibility, and surface protein abundance, providing a richer view of cellular state than any single modality alone\. A central challenge is how to learn a multimodal cell representation that preserves the different types of information contained in these co\-profiled measurements\. Existing integration methods often emphasize either cross\-modal correspondence, which benefits retrieval and imputation, or fused discriminative structure, which benefits classification, but these objectives can favor different aspects of the data\. As a result, a representation optimized for one setting may fail to preserve information needed for another\. We introduce scDecomp, a decomposed representation learning framework for co\-profiled single\-cell multi\-omics data\. Motivated by the concepts of redundancy, uniqueness, and synergy, scDecomp separates multimodal information into three role\-specific components: a redundancy component \($R$\) for information shared across modalities, a uniqueness component \($U$\) for modality\-specific information, and a synergy component \($S$\) for interaction\-dependent multi\-omic signals\. This design allows the learned representation to retain shared cell\-state structure while also preserving modality\-specific and cross\-modal regulatory information\. On single\-cell multi\-omics benchmarks, the $R$ component achieves a 5\.0\\% reduction in FOSCTTM compared with the strongest baseline, while $U\+S$ improves cell type classification accuracy by 1\.38\\%\. Branch\-level analyses further show that the decomposed components support complementary aspects of representation quality, suggesting that structured decomposition provides a practical strategy for learning more informative multimodal cell representations\.

## Deep Generative Models for Phylogenetic Inference with Complex Evolutionary Processes

**Authors:** Ethan Baron; Alan Amin; Andrew Wilson

**ID:** 151547 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZpGlbpubQi>) | [PDF](<https://openreview.net/pdf?id=ZpGlbpubQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151547>)

Phylogenetic inference plays a central role in understanding evolutionary relationships, with applications ranging from tracking pathogen spread to reconstructing the history of life\. Conventionally, practitioners obtain posteriors over the phylogenetic tree of species using MCMC methods\.  However, such likelihood\-based methods are only tractable for simple evolutionary models with restrictive assumptions\.  For more complex and realistic evolutionary models, conventional methods are prohibitively expensive, inaccurate, or even impossible\. We instead advocate for a simulation\-based inference approach, by using simulated data from an evolutionary model to train a neural network that predicts tree topologies conditioned on sequences\. To accurately represent the complex posterior distributions over tree topologies that can arise, we present flexible models that iteratively generate trees using three natural paradigms: top\-down, middle\-out, and bottom\-up\. We use a discrete diffusion framework to train these models efficiently on large\-scale simulated datasets of phylogenetic trees\. For all three generative paradigms, our models fit the data substantially better than the previous state\-of\-the\-art simulation\-based method, Phyloformer 2, and obtain more accurate posteriors on real datasets\. Finally, our models outperform misspecified conventional methods on data following complex evolutionary processes\.

## Simulation\-free Unbalanced Dynamic Optimal Transport with General Growth Penalty

**Authors:** Junda Ying; Yuxuan Wang; Bowen Yang; Peijie Zhou; Lei Zhang

**ID:** 153960 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HFNINKPSt6>) | [PDF](<https://openreview.net/pdf?id=HFNINKPSt6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153960>)

Inferring cellular dynamics from unpaired single\-cell snapshots requires modeling both state transitions and population growth or death\. Unbalanced dynamic optimal transport \(UDOT\) addresses this by penalizing growth along transport paths, making the choice of growth penalty a key way to encode biological priors on proliferation and apoptosis\.  However, existing UDOT solvers either rely on computationally expensive NeuralODE simulations or depend on analytical solutions of conditional paths, restricting their efficiency solely to quadratic penalties, i\.e\. Wasserstein\-Fisher\-Rao \(WFR\) geodesics\. To enable an efficient UDOT solver for general growth penalties, we first show that concave growth penalties lead to degenerate solutions where growth and transport are separated\.  We then introduce \*\*S\*\*imulation\-free \*\*U\*\*nbalanced \*\*D\*\*ynamic \*\*O\*\*ptimal transport \(SUDO\), a simulation\-free framework for UDOT with general non\-quadratic convex growth penalties\. SUDO learns the conditional paths and transport costs, solves the induced semi\-coupling problem, and subsequently leverages unbalanced flow matching to achieve a simulation\-free solution\. On WFR benchmarks, SUDO matches the accuracy of efficient, analytical solution\-driven algorithms while outperforming simulation\-based methods in computational speed\. Beyond WFR, SUDO supports asymmetric penalties that encode proliferation\-dominant priors and produce more plausible trajectories and growth estimates on synthetic and single\-cell datasets\.

## Encoding RNA Topology into Synthetic Alignments for 3D Structure Prediction

**Authors:** Jörg Franke; Iris K Tennie; Michael Uhl; Ryan Koksal; Dominika Matus; Dominik Scheuer; Frank Hutter; Rolf Backofen; Frederic Runge

**ID:** 153449 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LCvUtLKdYo>) | [PDF](<https://openreview.net/pdf?id=LCvUtLKdYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153449>)

Modern 3D structure predictors rely on multiple sequence alignments \(MSA\) to expose evolutionary covariation, but for RNA those alignments are often missing, shallow, or unreliable\. To overcome this limitation, we invert the co\-evolutionary structure inference pipeline and encode a predicted 2D topology into synthetic alignment\-form covariation, without requiring database search nor alignment steps\. We introduce RNAformer, a transformer\-based RNA secondary\-structure predictor that supplies the topology, and a Synthetic Co\-evolution Engine \(SCE\) that encodes it into synthetic homologous sequences \(SHS\) by co\-mutating paired positions\. Comprehensive experiments and systematic interventions across multiple structure predictors show that the MSA input acts as a topology channel that allows predictable steering of 3D structure prediction\. Across single\-chain RNAs and single\-chain RNA\-protein complexes, RNAformer\-seeded SHS approach the performance of natural MSAs, with regime\-dependent gains\. Topology, not alignment depth, drives the response\. SHS are interpretable, fast, and scalable, and represent a first step toward an alignment\-free alternative to natural MSA\.

## Darwin\-7B: A Multi\-Omic Foundation Model for the Human Gut Microbiome via Sparsified Quality\-Aware Tokenization

**Authors:** Arvid Ernst Gollwitzer; David de Gruijl

**ID:** 154713 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BYzy56EOoz>) | [PDF](<https://openreview.net/pdf?id=BYzy56EOoz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154713>)

Microbial ecosystems govern human health, agricultural productivity, and biogeochemical cycling\. Two coupled modalities determine their function: \*which organisms are present\* \(metagenomic content\) and \*which small molecules they produce and consume\* \(metabolomic content\)\. Existing biological foundation models cannot represent this joint state: they operate on a single modality, on assembled single\-organism genomes, and on the within\-DNA axis of generalization, leaving the multi\-omic, mixed\-organism, mixed\-quality regime that governs clinical and surveillance use unaddressed\.  We present \*\*Darwin\-7B\*\*, a 7\-billion\-parameter multi\-omic foundation model whose primary axis of generalization spans both modalities \(metagenome \+ metabolome\) and organizational scales \(read → community → host phenotype\)\. We combine a Mamba–Transformer hybrid backbone \(24 of 32 layers Mamba\) with a hypergraph neural network over KEGG metabolic\-reaction hyperedges and bidirectional cross\-modal attention modules that align genomic and metabolomic representations in a shared 40,192\-token embedding; an Aitchison\-space compositional consistency loss respects the simplex geometry of microbial\-abundance data at the output\. We pretrain on 8 T base pairs of metagenomics, 250K LC\-MS/MS metabolite profiles, and 2M KEGG/GO functional annotations, preparing the metagenomic corpus with a published quality\-aware tokenization framework\. Against the matched 7B genomic baseline METAGENE\-1, we report 94\.5 MCC on Pathogen Detection \(vs\. 93\.0\) and 0\.98 F1 on CAMI species\-level metagenomic profiling; on a December 2025 SRA outbreak benchmark post\-dating the pretraining cutoff, we report 91\.0 MCC vs\. 81\.2\. We unlock four clinical tasks single\-modality genomic models cannot reach: IBD AUC 0\.947, T2D AUC 0\.883, antibiotic\-resistance AUC 0\.910, and metabolic\-pathway prediction wF1 0\.91, beating the strongest multi\-omic baseline \(MOGONet\) by \+3\.0–\+3\.7 AUC\. Token\-matched scaling from 100M to 70B yields monotone gains with no saturation on the multi\-omic clinical AUCs\. We further validate predictions in a prospective wet\-lab pilot \(n = 87\) at predicted\-vs\-observed Pearson r = 0\.72\. Sparse\-autoencoder probing recovers 14 high\-coherence biological features tracking KEGG pathways, NCBI taxa, and CARD AMR genes \(r = 0\.68–0\.74\); zeroing the butyrate\-producer feature drops IBD AUC from 0\.947 to 0\.928\. We conclude that multi\-omic, multi\-scale modeling is tractable at 7B parameters, and we release the model card, training\-data manifest, evaluation pipelines, and a 100\-trajectory MetaOmics\-10T causal\-pilot dataset\.

## Querying Counterfactuals on Tissue Graphs with Supervised Disentanglement

**Authors:** Abdul Moeed; Stefan Schrod; Martin Rohbeck; Marc J Bonder; Pavlo Lutsik; Oliver Stegle; Daniel Dimitrov

**ID:** 151727 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YYY27OR76u>) | [PDF](<https://openreview.net/pdf?id=YYY27OR76u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151727>)

Tissue graph counterfactuals ask how a cell's expression would change under altered spatial contexts\. Such queries are central to predicting cell behavior in tissues, but lack a unified definition, with existing methods targeting specific intervention types or treating cells as i\.i\.d\. In this work, we first formalize tissue graph counterfactuals as a class of spatial interventions that either rewire connections between cells \(edge perturbation\) or modify the expression of their neighbors \(node perturbation\)\. We then introduce Cellina, a modeling framework that uses supervised disentanglement to decompose a cell's intrinsic state from its spatial context, using the latter as a conditioning input for counterfactual predictions\. Across benchmarks spanning 2\.5 million spatially\-resolved cells in colorectal cancer and mouse brain, Cellina outperforms spatially\-informed and non\-spatial competitors in counterfactual predictions, disentanglement, and scalability\. Additionally, we show that Cellina reveals biologically distinct cancer subdomains in an unsupervised manner and enables targeted neighbor perturbation simulations\.

## Preserving DEG Rankings for Gene Discovery in Histology\-Based Spatial Gene Expression Prediction

**Authors:** Kaito Shiku; Kazuya Nishimura; Yasuhiro Kojima; Ryoma Bise

**ID:** 151825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xfv1PJvBIG>) | [PDF](<https://openreview.net/pdf?id=Xfv1PJvBIG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151825>)

Predicting spatial gene expression from histology images could scale spatial transcriptomics \(ST\) to image\-only cohorts, but conventional histology\-based ST prediction is trained and evaluated mainly by per\-gene spatial\-profile reconstruction\. This objective is misaligned with a key downstream use of ST: differentially expressed gene \(DEG\) discovery, where genes are ranked for a biological or morphology\-defined contrast by evidence of between\-group expression differences\. We formulate image\-based differential expression ranking \(IDER\), which asks whether predicted expression profiles preserve the contrast\-specific ranked gene list obtained from measured profiles\. IDER compares gene rankings induced by differential\-expression statistics, rather than raw expression magnitudes or per\-gene spatial correlations\. We further introduce a differentiable IDER objective that aligns these statistics across genes and can be trained with morphology\-derived proxy contrasts without predefined biological group labels\. Experiments on public ST datasets show improved DEG\-ranking agreement and pathway\-enrichment overlap over conventional reconstruction objectives, including morphology\-derived and pathologist\-annotated tissue\-region evaluations\.

## GeneZip: Region\-Aware Compression for Long Context DNA Modeling

**Authors:** Jianan Zhao; Xixian Liu; Zhihao Zhan; XINYU YUAN; Hongyu Guo; Jian Tang

**ID:** 154372 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E37ysCRa5d>) | [PDF](<https://openreview.net/pdf?id=E37ysCRa5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154372>)

Long\-context DNA models are limited by token\-mixing cost and by how compression allocates representational budget across the genome\. Existing approaches operate close to base\-pair resolution, apply fixed downsampling, or learn content\-dependent chunks without an explicit genomic budget, making long\-context pretraining expensive and difficult to control\. We introduce GeneZip, a region\-aware DNA compression framework that combines H\-Net\-style dynamic routing with a Region\-Aware Ratio \(RAR\) objective and bounded routing\. GeneZip uses static gene\-structure annotations during compression training to specify region\-wise base\-pairs\-per\-token \(BPT\) targets; at inference time, it compresses raw unseen DNA without annotations\. GeneZip provides three main benefits\. First, it is effective: GeneZip variants achieve the best validation PPL among encoder\-based compressors, with GeneZip\-70M already operating at 137\.6 BPT, and across four reproducible DNALongBench tasks\-\-\-contact map prediction, eQTL prediction, enhancer\-\-target gene prediction, and transcription\-initiation signal prediction\-\-\-GeneZip obtains the best average rank among compared sequence models\. Second, it is redundancy\-aware: a post\-hoc RepeatMasker/TRF analysis shows that, without repeat supervision, GeneZip assigns higher local BPT to TE\-derived interspersed repeats and tandem repeats, two major classes of repetitive DNA sequence redundancy\. Third, it is efficient: by reducing the effective token\-mixing length, GeneZip enables longer\-context and larger\-capacity pretraining, including 128K\-context and 636M\-parameter variants on a single A100 80GB GPU, and fine\-tunes the eQTL task 50\.4$\\times$ faster than JanusDNA \(50 vs\. 2520 minutes\)\. These results establish GeneZip as an effective, redundancy\-aware, and efficient compression interface for long\-context DNA modeling\.

## Plausibility Is Not Prediction: Contrastive Evidence for LLM\-Based Cellular Perturbation Reasoning

**Authors:** XINYU YUAN; Xixian Liu; Jianan Zhao; Ya Shi Zhang; Hongyu Guo; Jian Tang

**ID:** 152410 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TK0wNbf8IH>) | [PDF](<https://openreview.net/pdf?id=TK0wNbf8IH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152410>)

Perturbation experiments are central to understanding cellular mechanisms, but remain costly and sparse, motivating prediction of gene expression responses for unobserved conditions\.  A promising recent direction leverages large language models \(LLMs\) as “virtual cell” simulators—using stepwise, knowledge\-grounded mechanistic reasoning to infer differential expression—pointing toward an interpretable, knowledge\-driven paradigm that transcends purely data\-driven approaches\.  However, we find that plausibility is not prediction: despite producing biologically plausible explanations, these methods fail to capture perturbation\-specific effects —  systematically overestimating differential expression, often underperforming  a simple gene‑frequency baseline in aggregate evaluations, and collapsing to chance\-level performance at the per\-gene level\. This reveals a reliance  on intrinsic gene response tendencies rather than true perturbation reasoning\. We trace this failure to how evidence is presented: existing methods evaluate perturbation–gene pairs in isolation, without exposing how related perturbations differ in their effects on the same gene\.  To address this limitation,  we introduce \*\*CORE\*\* \(\*\*C\*\*ontrastive \*\*O\*\*rganization of \*\*R\*\*elational \*\*E\*\*vidence\), which reframes prediction as a comparison task by organizing evidence into positive and negative outcomes from related perturbations\. Using a biomedical knowledge graph for evidence retrieval, CORE improves calibration and substantially boosts  perturbation\-specific prediction in both LLM\-based and non\-LLM settings: for example, on drug\-perturbation data, CORE\-Reasoning improves Qwen3\.5\-9B aggregate metrics by up to 28\.6\\%, while on generic perturbation data, CORE\-Voting raises macro\-per\-gene AUROC from chance to 0\.711\. This highlights contrastive evidence organization as essential  to reliable LLM\-based perturbation reasoning\.

## Layout Before Pixels: Topology\-Anchored Transcriptome\-to\-Histology Generation

**Authors:** Jianwei Zhao; Xin Li; Fan Yang; Qiang Zhai; Ao Luo; Hong Cheng

**ID:** 152155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V7ybz9CSNM>) | [PDF](<https://openreview.net/pdf?id=V7ybz9CSNM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152155>)

Transcriptome\-conditioned whole\-slide image \(WSI\) synthesis aims to decode the complex mapping from molecular states to histologic phenotypes\. Existing generative paradigms predominantly rely on a direct black\-box transcriptome\-to\-image mapping, tasking a single generator with the simultaneous interpretation of transcriptome signals, inference of multicellular spatial organization, and rendering of fine\-grained textures\. This formulation, however, is structurally under\-constrained; the underlying tissue architecture, the critical substrate linking gene expression to morphology, remains latent and only weakly supervised by pixel\-level objectives\. We present \\textsc\{TopoScape\}, a topology\-anchored framework for transcriptome\-to\-histology generation under a \\emph\{Layout\-Before\-Pixels\} principle\. Instead of synthesizing pixels directly from transcriptomic embeddings, \\textsc\{TopoScape\} first resolves molecular states into explicit, multi\-class cellular topologies via an RNA\-guided Topological Prior Generator, reinforced by persistence\-based topological regularization\. These resolved topologies are further reparameterized into a suite of topology\-derived controls, including structure\-aware initialization, continuous density fields, and distance representations, which guide a hierarchical, frequency\-decoupled flow\-matching trajectory\. By introducing multicellular organization as an explicit structural mediator, \\textsc\{TopoScape\} allows molecular states to deterministically shape both the macroscopic tissue architecture and the microscopic generative process\. Across five TCGA benchmarks, \\textsc\{TopoScape\} consistently outperforms state\-of\-the\-art methods in generative fidelity, biological realism, and downstream predictive utility\. Code and pretrained models will be released\.

## PACE: Geometry\-Aware Bridge Transport for Single\-Cell Trajectory Inference

**Authors:** Chenglei Yu; Chuanrui Wang; Bangyan Liao; Tailin Wu

**ID:** 155854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2PQtt7QLHJ>) | [PDF](<https://openreview.net/pdf?id=2PQtt7QLHJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155854>)

Single\-cell trajectory inference from destructive time\-course snapshots is fundamentally ill\-posed: neither cross\-time cell correspondences nor the continuous paths between snapshots are observed, so the observed snapshot distributions alone do not uniquely determine the underlying dynamics\.  Existing optimal transport and flow\-based methods typically couple cells by Euclidean proximity at observed clock times, which can misalign trajectories when development is asynchronous and cells sampled at the same experimental time occupy different latent pseudotime stages\.  We propose PACE, a trajectory inference framework that selects geometry\-consistent continuous transport dynamics from destructive time\-course snapshots through three coupled components\. First, PACE constructs a state\- and time\-dependent anisotropic Riemannian metric that preserves low cost along locally supported tangent directions while penalizing normal velocity components\. Second, it alternates between refining cross\-time couplings under the induced path\-action cost and fitting endpoint\-preserving neural bridges between adjacent snapshots\. Third, it distills the learned bridge dynamics into a global continuous\-time velocity field over cellular states\. Across seven controlled and biological datasets covering nine held\-out reconstruction experiments, PACE achieves the strongest overall reconstruction performance, reducing MMD, $\\mathcal\{W\}\_1$, and $\\mathcal\{W\}\_2$ by 23\.7\\% on average relative to the strongest competing baseline\. PACE also improves RNA\-velocity alignment by 15\.4\\% on an embryoid body differentiation benchmark, without requiring explicit cell pairing, lineage tracing, or RNA velocity supervision during training\. Code is available at \\url\{https://anonymous\.4open\.science/r/PACE\-F444/\}\.

## Deep Barycentric Regression for Optimal Transport Map Estimation and its Statistical Optimality

**Authors:** Kunwoong Kim; Insung Kong; Yongdai Kim

**ID:** 151777 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y6gjRpnLxO>) | [PDF](<https://openreview.net/pdf?id=Y6gjRpnLxO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151777>)

The optimal transport \(OT\) map provides a geometric transformation for aligning probability distributions and has become a useful tool in machine learning\. However, existing estimators of the OT map still exhibit a gap between sharp statistical guarantees and practical parametric estimation based on stable training objectives\. Theoretical estimators achieve minimax optimal convergence rates, but they are typically nonparametric and can incur demanding implementation design or inference costs\. Practical estimators are parametric and scalable, but their statistical guarantees remain underexplored, and their min\-max, adversarial\-like training objectives can be sensitive to optimization algorithms\. We propose BROT \(Barycentric Regression for OT\), a simple two\-step method that first computes the unregularized OT plan and then fits a deep neural network \(DNN\) to the induced barycentric targets by least\-squares regression\. Under standard regularity conditions, we prove that the DNN estimator of BROT attains the minimax convergence rate, when the ground\-truth OT map is Lipschitz\. Numerical studies on synthetic datasets and an image dataset show that BROT provides accurate map estimates, strong target distribution matching, and competitive transport costs, compared to existing estimation methods\. Experiments on two downstream tasks, single\-cell perturbation prediction and unsupervised domain adaptation, further suggest that the accurate estimation of BROT can translate into stronger task performance\.

## scMAF: Single\-Cell Multi\-Omics Clustering via Adaptive Modality Fusion

**Authors:** Jun Fu; Yiding Lu; Ruohong Yang; Xi Peng; Yunfan Li

**ID:** 153965 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HAcmGGgXow>) | [PDF](<https://openreview.net/pdf?id=HAcmGGgXow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153965>)

Single\-cell multi\-omics sequencing has greatly advanced the characterization of cellular heterogeneity by jointly profiling multiple molecular modalities\. However, since different modalities exhibit varying discriminative signals across cell types, existing integration strategies may dilute or even obscure the signals carried by more informative modalities when fused with less informative ones, thereby hindering accurate multi\-omics clustering\. To address this limitation, this work presents a novel adaptive fusion framework for unsupervised clustering of single\-cell multi\-omics data\. The core of our approach is an attention\-based fusion module that dynamically assigns modality\-specific weights within a shared latent space, allowing the model to naturally focus on the most informative signals from each modality\. Extensive experiments on eight real\-world multi\-omics datasets encompassing gene expression, chromatin accessibility, and protein modalities demonstrate that our method achieves the state\-of\-the\-art single\-cell clustering performance over fourteen competitive baselines\. The code will be released publicly upon acceptance\.

## WaveSem: Frequency\-Adaptive Tokenization for Disentangling Semantics and Noise in Genomics

**Authors:** Shou Z Chen; Bing He; Zhenchao Tang; Jun Zhu; Minghao Yang; Tianxu Lv; Yu Wang; Jiayang Wu; Fang Wang; Yu Zhao; Chenchen Qin; Jianhua Yao

**ID:** 153446 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LEzwFjJstg>) | [PDF](<https://openreview.net/pdf?id=LEzwFjJstg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153446>)

High\-throughput scientific sensing, exemplified by genomics, faces a critical representation bottleneck: discrete biological events are often obscured by continuous, high\-entropy stochastic noise\. Standard neural codecs fail to distinguish deterministic semantics from stochastic sensor noise, inefficiently allocating their information budget to high\-entropy fluctuations rather than to low\-entropy structural motifs\. We introduce \\textsc\{WaveSem\}, a frequency\-adaptive framework that imposes a physically motivated inductive bias on discrete representation learning\. Through integrated wavelet decomposition, \\textsc\{WaveSem\} explicitly disentangles each signal into a structured semantic core and a residual texture component\. We validate this approach on large\-scale nanopore sequencing data, a domain characterized by extreme sequence lengths and low signal\-to\-noise ratios \(SNRs\)\. \\textsc\{WaveSem\} achieves a $14\\times$ storage reduction while maintaining competitive downstream basecalling accuracy\. Moreover, linear probing of the frozen encoder reaches $\\mathrm\{AUROC\}=0\.928$ for 5mC methylation detection, demonstrating that the learned tokens preserve semantic information beyond nucleotide identity\. These results establish disentangled vector\-quantized representations as a scalable foundation for efficient genomic analysis and long\-term archival\.

## Vermeer: Autoregressive generative modeling of microscopy predicts protein localization

**Authors:** Sandeep Kambhampati; Eric Zimmermann; Emre Hayir; Kevin K Yang; Fei Chen; Alex X Lu

**ID:** 156143 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=02iC73NJ6H>) | [PDF](<https://openreview.net/pdf?id=02iC73NJ6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156143>)

Fluorescent microscopy provides a rich view into how proteins localize within cells, but it remains experimentally infeasible to image human proteins across all of the different factors that can impact localization\. We introduce Vermeer, a channel\-adaptive autoregressive generative model for in silico generation of microscopy images of protein localization\. Vermeer conditions generations on protein sequences and landmark stains showing the morphology of cells, which enables it to generalize to unseen proteins and cell lines\. We show that Vermeer, trained on the Human Protein Atlas, can generate images with substantially improved perceptual quality and biological fidelity over previous proposals\. Additionally, Vermeer's autoregressive framework enables flexible generation using varying channel subsets and orderings, enabling zero\-shot transfer to data collected under different imaging conditions and channel configurations than those used for training\. These results position Vermeer to enable scalable modeling of protein localization and is a step towards generative foundation models that can operate over distinct microscopy datasets\.

## LeCellModel: Interpretable Density Estimation over the Gene Expression Manifold

**Authors:** Gil Karin; Artemy Bakulin; Nir Yosef

**ID:** 153391 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LiIO6ykiB6>) | [PDF](<https://openreview.net/pdf?id=LiIO6ykiB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153391>)

Representation learning for single\-cell RNA\-seq has been evaluated by the identities representations capture — cell types, lineages, perturbations — rather than how faithfully they model the distribution of cell states on the gene expression manifold\. As a result, density estimation, rare\-state detection, perturbation scoring, and gene\-level attribution are bolted onto frozen embeddings as separate models, disconnected from the geometry of the data\. We argue that the density model should be the primary object and that representation quality follows from it\. Building on LeJEPA, whose SIGReg objective enforces a provably optimal isotropic Gaussian latent, we introduce LeCellModel, which exploits this Gaussian latent to recover data density on the gene expression manifold via the encoder's Jacobian log\-volume \(JEPA\-SCORE\)\. Across several datasets, LeCellModel outperforms established methods on scIB benchmark for representation quality\. Furthermore, we show that LeCellModel enables estimation of rare expression states using JEPA\-SCORE as a typicality measure – applying it to a controlled cytokine panel, where it identifies stimulated cells across minority fractions and tracks pathway\-response magnitude\. We introduce gene\-level interpretability of density estimates — to our knowledge, the first method for analyzing JEPA\-SCORE in feature space\. Leveraging this framework, LeCellModel recapitulates the known association of a profibrotic macrophage program with idiopathic pulmonary fibrosis, and discovers a novel  CD177$^\{\+\}$  activated regulatory T cell subpopulation previously described only in tumor contexts\. Both findings emerge directly from the geometry of the learned embedding, without relying on supervised annotations\.

## Nüwa\.RNA: An RNA Foundation Model for Unified Representation with Deep Structure Infusion

**Authors:** Kun Huang; Jiyang Li; Xin Guo; LIMEI HAN; Yuan Cheng

**ID:** 155495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5AdQQ6L0rR>) | [PDF](<https://openreview.net/pdf?id=5AdQQ6L0rR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155495>)

RNA function arises from a hierarchical folding process in which primary sequences form secondary structures that govern biological activity\. While foundation models have proven effective for learning transferable RNA representations, most existing approaches rely on primary sequence alone or incorporate structural information only superficially during pre\-training\. Three problems limit current approaches: experimentally determined secondary structures are scarce, computational pseudo\-labels are noisy, and no existing model integrates structure at multiple levels across masking, architecture, and supervision\. Here, we present \\textbf\{N\\"uwa\.RNA\}, a pre\-trained foundation model built on a \\emph\{structure\-driven multi\-level pre\-training framework\} that integrates secondary structure at all three stages of pre\-training simultaneously\. N\\"uwa\.RNA introduces dual\-granularity masking that combines single\-token masking with structure motif masking, treating entire structural elements as indivisible units; a noisy structural attention bias that injects curriculum\-corrupted contact maps into every Transformer layer to model pseudo\-label uncertainty; and a structure denoising objective that recovers clean base\-pairing states from corrupted input, completing a closed denoising loop\. Pre\-trained on a large\-scale non\-coding RNA corpus, N\\"uwa\.RNA achieves state\-of\-the\-art performance on 10 of 13 BEACON benchmark tasks, with up to $\+$7\.83 F1 improvement on structure prediction, and attains the highest zero\-shot secondary structure prediction accuracy among single\-sequence RNA foundation models\.

## Search, Edit, and Fold: LLM\-Guided MSA Optimization for Protein Conformation Prediction

**Authors:** Yu Pei; Jiangtao Feng; Hao Wang; Dongyu Xue; Keyue Qiu; Hao Zhou; Wei\-Ying Ma

**ID:** 151506 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a9KmZH0v3a>) | [PDF](<https://openreview.net/pdf?id=a9KmZH0v3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151506>)

Accurately identifying alternative protein conformations remains a fundamental challenge, particularly when functionally relevant states are encoded by sparse evolutionary signals within large multiple sequence alignments \(MSAs\)\.  In this work, we reformulate protein conformation prediction as a combinatorial search problem in MSA space, shifting the focus from structure divergence to evolutionary information discovery\.  We introduce \*\*MSA\-Evolver\*\*, a optimization framework that  enabling LLM with direct manipulation and iterative exploration of MSAs\. Specifically, MSA\-Evolver introduces a unified action space for MSA editing together with a feedback\-guided multi\-step reasoning strategy that allows the language model to progressively explore, evaluate, and refine candidate MSAs based on historical search trajectories\. Our framework efficiently identifies informative sub\-MSAs under limited folding budgets and substantially improves the prediction accuracy of alternative conformations, including open\-closed, inward\-outward, apo\-holo, fold\-switching, and intrinsically disordered proteins\.

## scTrilemma: Balancing Identity, Invariance, and Reconstruction in Single\-Cell Representation Learning

**Authors:** Yunhak Oh; Yoonho Lee; Junseok Lee; Namkyeong Lee; Sang\-Yeon Hwang; Yinhua Piao; Hyomin Kim; SEONGHWAN KIM; Jaechang Lim; Woo Youn Kim; Sungsoo Ahn; Chanyoung Park

**ID:** 152153 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V8h1VhYtud>) | [PDF](<https://openreview.net/pdf?id=V8h1VhYtud>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152153>)

Single\-cell RNA\-seq representation learning is inherently label\-free: cell identities, states, and tissue contexts are typically discovered through analysis rather than provided as target labels during training\. As a result, the evaluated cell embedding must balance competing demands, which we refer to as the \*representation trilemma\*: it should preserve biological identity, avoid encoding collection effects as cell identity, and retain expression information needed for reconstruction\. We introduce \*\*scTrilemma\*\*, a latent\-bottleneck VAE that tests whether simple expression\-derived routing can manage this trilemma without cell\-level annotations, metadata\-derived supervision, auxiliary representation losses, or specialized disentanglement modules\. \*\*scTrilemma\*\* combines expression\-gated gene encoding, cell\-representation routing through the decoder, and pseudo\-bulk prior conditioning under a single reconstruction objective\. In release\-based zero\-shot evaluation on successive CZ CELLxGENE Census releases, \*\*scTrilemma\*\* improves batch\-effect removal while preserving biological identity, retains marker\-program and biologically meaningful tissue\-context structure in the evaluated embedding, and better preserves differential\-expression and pathway structure through reconstruction; ablations support burden allocation as the source of these gains\.

## TracingFlow: A Simulation\-Free Trajectory Inference Framework Based on Second\-Order Dynamics

**Authors:** Yuhao Sun; Zekun Wu; Zixun Huang; Peijie Zhou

**ID:** 152002 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WETDhvImnp>) | [PDF](<https://openreview.net/pdf?id=WETDhvImnp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152002>)

Inferring continuous system evolution from sparse temporal snapshots is a key challenge in generative modeling and single\-cell omics\. While Optimal Transport \(OT\) is popular, existing frameworks are largely restricted to first\-order dynamics, assuming memoryless velocity fields\. This limits expressiveness, as first\-order systems fail to account for regulatory momentum and time\-delayed responses inherent in processes like cell differentiation\. Here, we introduce TracingFlow, a simulation\-free Flow Matching framework generalizing to second\-order dynamics\. By using neural networks to regress the acceleration field, TracingFlow provides an exact, efficient solution to the Dynamical Optimal Acceleration Transport \(DOAT\) problem\. Unlike first\-order methods yielding over\-smoothed trajectories, our second\-order formulation captures high\-curvature transitions and nonlinear evolutions by learning the underlying force fields\. Evaluated on complex synthetic and large\-scale scRNA\-seq datasets, TracingFlow achieves superior accuracy in distributional reconstruction and trajectory faithfulness\. Moreover, by integrating lineage tracing priors, it recovers dynamical structures that are both mathematically optimal and biologically plausible\.

## UGM: Unified Multi\-scale Genomic Event Modeling with Site\-level Joint Prediction

**Authors:** Jiayang Wu; Chenchen Qin; Xu YANG; Yu Zhao; Bing He; Jiale Zhou; Zhenchao Tang; Minghao Yang; Shou Z Chen; Yefeng Zheng; Jianhua Yao

**ID:** 149432 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q6nsrhSGij>) | [PDF](<https://openreview.net/pdf?id=q6nsrhSGij>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149432>)

Genomic events span multiple spatial scales, from single\-nucleotide substitutions to large structural variants, yet existing foundation models process only reference DNA sequences, leaving methylation, short variants, and structural\-variant boundaries as downstream labels or auxiliary inputs\. We propose the Unified Genomic Model \(UGM\), an encoder\-only genomic foundation model that learns multi\-scale genomic events as native tokens within a unified 43\-token vocabulary\. UGM introduces three algorithmic components: \(i\) a unified event tokenizer that maps reference bases, SNPs, CpG methylation, short INDELs, and structural\-variant boundaries into a single event\-state space; \(ii\) event\-balanced pretraining, which promotes adequate gradient coverage for rare but biologically important events; and \(iii\) Site\-Level Joint Prediction \(SJP\), a masked\-language\-modeling objective that recovers the complete genomic state at a masked position as a single token rather than predicting base, methylation, and variant labels independently\. We evaluate UGM against specialized and generalist baselines across functional variant classification, regulatory benchmarks \(NT and GUE\), structural\-variant detection, and cross\-event attention analysis\. UGM achieves competitive performance, particularly on tasks where explicit event\-state information is central\. It obtains the highest score on all seven functional variant tasks, reaches competitive splicing prediction on NT, and notably outperforms DNA\-only baselines on SV breakpoint detection\. These results suggest that native multi\-scale event pretraining is a promising direction for genomic representation learning\.

## Breaking the Synthesis Barrier for AI\-Designed DNA Libraries

**Authors:** Scott Sussex; Ema Borevković; Frederieke Lohmann; Ningning Chen; Elena Luethi; Sai Reddy; Andreas Krause

**ID:** 150360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=if6zG3AZ0k>) | [PDF](<https://openreview.net/pdf?id=if6zG3AZ0k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150360>)

Designing DNA libraries is a key challenge from drug design to protein engineering and synthetic biology\.  Modern generative models offer opportunities to navigate the design space and propose specific sequences predicted to be effective in\-silico\. Designing deterministic libraries of specific sequences is however limited by the cost of DNA synthesis \-\- the synthesis barrier\.  In contrast, high\-throughput multiplexed screening can measure the function of billions of biological sequences in parallel\.  Harnessing this technology requires the design of randomized libraries with specific design constraints to achieve low synthesis costs\. In practice, such stochastic libraries are often chosen heuristically, sacrificing control for scale\.  Is there a way to bridge AI\-based in\-silico sequence design with high\-throughput experimentation? In this work, we introduce Policy Gradients for Library Design \(PGLD\)\. PGLD uses a synthesis\-aware parametrization of stochastic DNA libraries and optimizes them against a specified objective function\. This allows for designing massive, controlled libraries without being limited by synthesis costs\. We show how PGLD enables lab\-in\-the\-loop design of multi\-round high\-throughput experiments, and large\-scale in\-vitro DNA sampling from generative models\. Finally, we use PGLD to design a library of $\\sim 10^6$ unique sequences at a cost of $\\sim 700$ USD to explore the mutation space of a broadly neutralizing influenza antibody\.

## TANGO: RNA Topology and Geometry Co\-Design

**Authors:** Tianmeng Hu; Biao Luo; Ke Li

**ID:** 148551 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x2wRR40pPx>) | [PDF](<https://openreview.net/pdf?id=x2wRR40pPx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148551>)

Designing RNA sequences that satisfy target tertiary\-structure objectives is an important problem in RNA engineering, with broad applications in synthetic biology and therapeutics\. Existing $\\mathrm\{3D\}$ RNA design methods have made substantial progress, but they largely treat the target fold as a geometry\-only objective\. This is incomplete for RNA, whose functional folds are specified not only by tertiary geometry but also by secondary base\-pairing topology\. We therefore formulate RNA inverse design as a topology\-and\-geometry co\-design problem and propose $\\texttt\{TANGO\}$, a cooperative multi\-agent reinforcement learning framework for this task\. $\\texttt\{TANGO\}$ adopts a staged curriculum: it first learns a topology\-aware policy from secondary\-structure targets, then transfers this policy to tertiary\-structure targets to train a general co\-design model, and finally applies frontier\-guided fine\-tuning to refine target\-specific trade\-offs among secondary\-structure fidelity, tertiary\-structure fidelity, and sequence diversity\. Experiments show that $\\texttt\{TANGO\}$ generates diverse and novel designs, improving tertiary\- and secondary\-structure performance by $18\.3\\\\%$ and $52\.7\\\\%$, respectively, over the strongest baseline\.

## REFLEX: RNA Ensemble Generation via Flexibility\-Calibrated Stochastic Bridge

**Authors:** Wanli Ma; Tianmeng Hu; Ke Li

**ID:** 148483 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xU2H2ucSmF>) | [PDF](<https://openreview.net/pdf?id=xU2H2ucSmF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148483>)

RNA molecules often function through multiple experimentally observed conformational states\. A central challenge is to capture ensemble diversity without sacrificing structural fidelity: samples may collapse toward averaged representative structures or drift into unsupported conformational regions\. We introduce $\\texttt\{REFLEX\}$ \(\\underline\{R\}NA \\underline\{E\}nsemble generation calibrated by \\underline\{FLEX\}ibility\), a sequence\-conditioned generator for RNA backbone\-frame ensembles based on a heteroscedastic stochastic bridge on $\\mathrm\{SE\}\(3\)$\. During training, experimental $\\mathrm\{B\}$\-factors calibrate residue\-wise bridge widths, exposing each observed conformer through local perturbation neighborhoods with residue\-specific scales while keeping constrained regions sharper\. A learned flexibility condition guides the bridge\-field network to recover target conformer\-specific frames from these calibrated noisy states\. At inference, $\\texttt\{REFLEX\}$ uses only the input sequence, requiring no MSA\-subsampling heuristics\. On held\-out multi\-conformer RNA clusters, $\\texttt\{REFLEX\}$ achieves the best precision\-\-recall trade\-off for ensemble coverage across evaluation thresholds, while ablations indicate that the learned bridge field recovers conformer\-specific basins more reliably\.

## Multiscale Supervised Unbalanced Optimal Transport Flow Matching

**Authors:** Qiangwei Peng; Lezhi Chen; Peijie Zhou

**ID:** 156023 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15nSsWpSmo>) | [PDF](<https://openreview.net/pdf?id=15nSsWpSmo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156023>)

Unbalanced optimal transport \(UOT\) provides a principled framework for modeling single\-cell transitions and birth\-death dynamics, but its high computational cost limits scalability to large\-scale datasets\. Although single\-cell data often contain hierarchical annotations and known transition priors, existing UOT approximations rarely exploit this multiscale structure or prior knowledge\. We introduce Multiscale Supervised Unbalanced Optimal Transport Flow Matching \(MUST\-FM\), a simulation\-free framework that scales UOT by leveraging hierarchical data structure\. MUST\-FM further supports an optional supervised formulation that incorporates transition priors, such as cell lineages, to guide the learning of displacement fields and mass variations\. Experiments show that MUST\-FM reduces computational overhead while achieving robust and biologically meaningful trajectory inference, enabling dynamic modeling of atlas\-scale single\-cell datasets\.

## Spectral Adaptive Repositioning for Flow\-Based Single\-Cell Perturbation Modeling

**Authors:** Shourya Verma; Mengbo Wang; Simran Kadadi; Shahin Mohammadi; Nadia Lanman; Ananth Grama

**ID:** 152050 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VsHXKYG0Sq>) | [PDF](<https://openreview.net/pdf?id=VsHXKYG0Sq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152050>)

Predicting transcriptome\-wide cellular responses to genetic and biomolecular perturbations is central to functional genomics and therapeutic target discovery\. Existing methods assign gene positional encodings derived from arbitrary orderings or static co\-expression masks built from unperturbed cells, and cannot capture the functional rewiring induced by perturbations\. We present SPEAR, a generative framework built on two complementary positional mechanisms\. Spectral positional encoding grounds each gene's position in the geometry of the co\-expression network via continuous coordinates derived from the graph Laplacian\. Adaptive repositioning then derives each gene's position from its perturbation\-conditioned hidden state at every layer, allowing the attention genes exert on one another to reorganize without explicit supervision\. Evaluated on genetic, pharmacological, and cytokine perturbation benchmarks, SPEAR demonstrates excellent recovery of differential gene\-expression, distributional structure, and perturbation\-specific identifiability\. SPEAR also captures latent positional relationships that closely map to known transcription factor\-target interactions\.

## Identifiable Feedback\-Controlled Latent Flow for Unpaired Single\-cell Spatio\-Temporal Dynamics

**Authors:** Jianle Sun; Kun Zhang

**ID:** 156140 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=06mL3T4arr>) | [PDF](<https://openreview.net/pdf?id=06mL3T4arr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156140>)

Reconstructing the gene regulatory dynamics underlying tissue development from unpaired, cross\-sectional spatial transcriptomic snapshots poses a significant challenge in single\-cell biology\. While recent optimal transport and flow\-based methods have advanced trajectory interpolation, their unconstrained latent dynamics lack identifiability, hindering reliable discovery of the underlying regulatory mechanisms\. To address this, we propose single\-cell Identifiable Feedback\-controlled Latent Flow \(scIFLF\), a generative framework that introduces a physics\-inspired structural prior that decomposes the latent flow into a macroscopic developmental drift and a restorative feedback toward functional attractors\. Crucially, the gene\-regulatory Jacobian is shown to be uniquely identifiable, invariant to the latent ambiguity, enabling principled discovery of gene regulations directly from the learned flow\. Implemented with a multimodal Neural ODE, scIFLF aligns latent trajectories using entropy\-regularized optimal transport\. Benchmark experiments demonstrate that scIFLF outperforms state\-of\-the\-art methods in trajectory interpolation and spatial coherence, while successfully recovering key driver genes of tissue development and organogenesis, bridging the gap between deep generative flexibility and biological interpretability\.

## Multi\-Scale Representation Learning for Single\-Cell Multi\-Omics

**Authors:** Zhijie Zheng; Meng Lan; Fei Gu

**ID:** 150703 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g8gHNmVwmS>) | [PDF](<https://openreview.net/pdf?id=g8gHNmVwmS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150703>)

Learning unified representations from single\-cell multi\-omics data is a fundamental challenge, yet existing deep learning models often overlook the inherent hierarchical structure of biological regulation\.   In this work, we introduce scWavelet, a novel deep learning framework that leverages a multi\-scale inductive bias by learning representations in the cellular spatial\-frequency domain\.   Our approach is grounded in a heuristic approximation\-misspecification decomposition, which theoretically motivates the design of a scale\-factorized architecture\.   scWavelet employs a learnable wavelet transform to decompose omics signals into distinct scales, which are then processed by scale\-specific Omics Mixers to generate integrated latent representations\.   Extensive experiments demonstrate that scWavelet achieves state\-of\-the\-art performance on challenging multi\-omics integration and cross\-omics translation benchmarks\.   Furthermore, interpretability analyses confirm that the learned multi\-scale features effectively correspond to the biological hierarchy of cellular identity\.   Our project will be publicly available\.

## When Transcriptomic Foundation Models Scale: Domain\-Focused Pretraining for Drug Development in Immunology and Inflammation

**Authors:** Karim El Kanbi; Yannis Cattan; Aziz Fouché; Charlotte Claye; Pierre Marschall; Julien Duquesne

**ID:** 149652 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oTXdmO0QFD>) | [PDF](<https://openreview.net/pdf?id=oTXdmO0QFD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149652>)

Recent work has reported two failure modes of transcriptomic foundation models: validation loss plateaus beyond 100M parameters, and consistent underperformance against simple linear baselines on clinically relevant tasks\. We show that both findings invert under a specific pretraining recipe\. We introduce EVA\-RNA, a transformer pretrained on 545k human and mouse samples spanning bulk RNA\-seq, microarray, and pseudobulked single\-cell data, scoped to immunology and inflammation, one of the largest therapeutic areas in clinical development\. EVA\-RNA exhibits clean power\-law scaling from 7M to 300M parameters, with no plateau emerging within our scale range\. On a benchmark co\-designed with immunologists and drug development experts, EVA\-RNA outperforms existing foundation models on every task category, spanning drug discovery, preclinical\-to\-clinical translation and patient stratification\. Mechanistically, EVA\-RNA learns species\-invariant representations in which orthologous genes progressively align across layers without supervision\. We interpret these results as evidence that scope and data composition are sufficient, with conventional architecture and knowledge\-informed gene embeddings, to achieve clinical utility and scaling in I&amp;I\. We also release EVA\-RNA 60M model weights to support continued investigation\.

## Scaling Genomic Language Modeling with Unified Corpus and Evaluation in Bacteria

**Authors:** Maciej Wiatrak; Samuel T Horsfield; Aaron Weimann; Ramon Viñas Torné; Maria Ntemourtsidou; David Abelson; Adam Dinan; John Lees; Maria Brbic; Andres Floto

**ID:** 139114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kH4SzHwprq>) | [PDF](<https://openreview.net/pdf?id=kH4SzHwprq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139114>)

Progress in genomic language modeling depends on pretraining resources that are both diverse and comprehensive, as well as benchmarks that evaluate models across biological scales from genes to whole genomes\. This need is especially acute in bacteria, which are extremely abundant, diverse, and central to human health, ecology, and biotechnology\. Yet resources for large\-scale pretraining and evaluation in bacterial genomics remain limited, with existing frameworks focusing largely on eukaryotic settings\. Here, we introduce BacCorpus, a genome\-level resource for training genomic LMs comprising 20B proteins, including 4\.6B unique sequences, from 7M genomes spanning more than 150,000 species, and BacBench, a comprehensive benchmark spanning 10 datasets and 5 tasks across gene\-, system\-, and genome\-level tasks\. We evaluate a diverse suite of genomic LMs on BacBench and additionally develop BacLM, a 350M\-parameter model trained jointly on protein sequences and intergenic DNA to further investigate how bacterial genomes are best represented\. Across tasks, we find that performance depends strongly on biological scale: methods leveraging protein sequence are competitive on gene\-level prediction, whereas models that incorporate wider genomic context excel at problems which involve complex multi\-gene interactions\. Together, BacCorpus and BacBench provide a practical foundation for training and evaluating robust, genome\-aware genomic language models in bacteria at an unprecedented scale\.

## TabBioMed: A Large\-Scale Benchmark for Biomedical Tabular Learning

**Authors:** Pau Mateo Bernadó; Saivenkata Nagavyjayanthi Polapragada; Pol Arbiol Rakuljic; Laia M Pladevall; David Bonet; Marçal Comajoan Cara; Jesus Gonzalez Ferrer; Jordi Abante; Daniel Mas Montserrat; David Haussler; Alexander Ioannidis

**ID:** 139791 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4WpEeaOeGW>) | [PDF](<https://openreview.net/pdf?id=4WpEeaOeGW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139791>)

Recent advances in machine learning have accelerated biomedical prediction, yet evaluation on structured biomedical data remains fragmented, especially for datasets with high dimensionality, missingness, class imbalance, and small\-sample, many\-feature regimes\. We introduce TabBioMed, a large\-scale benchmark of 95 curated public biomedical tabular datasets spanning electronic health records \\cite\{data2016secondary\}, drug response \\cite\{wu2018moleculenet\}, genomics, transcriptomics, proteomics, metabolomics \\cite\{yang2025mlomics\}, single\-cell omics \\cite\{heumos2023best\}, and systems biology\. TabBioMed unifies these datasets through a standardized, dataset\-aware preprocessing and evaluation framework, enabling reproducible comparison across classification, regression, and multi\-target tasks\. We benchmark 23 models across classical baselines, gradient\-boosted trees, neural tabular architectures, and emerging tabular foundation models\. Foundation models deliver the strongest family\-level predictive performance\. However, their gains are regime\-dependent: tree\-based models and tuned MLPs remain highly competitive, often dominating under inference\-time or training\-cost constraints\. We further show that foundation\-model advantages are most meaningful in low\-noise biomedical tasks, where small absolute gains translate into large reductions in residual error\. Overall, TabBioMed reveals that biomedical tabular learning is strongly context\-dependent, with optimal model choice shaped by data regime, task type, and computational budget\. By releasing curated datasets, preprocessing code, baselines, and results, TabBioMed provides a reproducible foundation for practical model selection and future methods development in biomedical machine learning, available at https://anonymous\.4open\.science/r/tabbiomed\.

## Curriculum Multiple Shooting for Robust Training of Neural and Universal Differential Equations

**Authors:** Sebastian Persson; Giacomo Fabrini; Branwen Snelling; Fabian Fröhlich

**ID:** 153849 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IHtSSNfqdx>) | [PDF](<https://openreview.net/pdf?id=IHtSSNfqdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153849>)

Neural ordinary differential equations \(NODEs\) and universal differential equations \(UDEs\) provide flexible and popular frameworks for learning interpretable dynamical systems from noisy time\-series data\. However, training these models remains challenging, and versatile methods that robustly handle sparse and noisy data as well as partially observed models are lacking\. To address this, we introduce curriculum multiple shooting \(CMS\), a general\-purpose training strategy for fitting ordinary differential equation \(ODE\) models to time\-series data by integrating curriculum learning with multiple shooting\. Across twelve benchmarks spanning simulated and real data, and covering NODEs, UDEs, and mechanistic ODEs, CMS accelerates and stabilises training convergence, outperforms state\-of\-the\-art training strategies, and ranks among the best methods in generalisation\. Finally, we discuss possible explanations for the strong performance of CMS in light of contemporary theories of what makes training on time\-series challenging\.

## What DNA Foundation Models Learn Beyond Sequence Composition

**Authors:** Vincenzo Y\. Civale; Andrew Bagdanov; Alberto Magi

**ID:** 139816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2xsiapjtot>) | [PDF](<https://openreview.net/pdf?id=2xsiapjtot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139816>)

A central question in genomic representation learning is whether DNA foundation models\~\(FMs\) encode information beyond simple sequence composition, or whether their apparent representational power largely reflects signals already captured by classical compositional statistics\. We address this by establishing $k$\-mer frequency vectors as a rigorous biologically grounded baseline and introducing a geometric decomposition that partitions FM embeddings into a component linearly predictable from $k$\-mer frequencies and an orthogonal residual representing genuinely non\-compositional information\. By evaluating each component separately as a downstream feature space, we directly measure what FMs encode beyond composition and whether that content is beneficial, neutral, or detrimental\.  Across 57 genomic classification datasets and 2 gene expression regression tasks, we compare five FMs \(NTv3\-650M, HyenaDNA, DNABERT\-2, Caduceus\-Ph, Evo2\-1B\) against $k$\-mer features \($k \\in \\\{4,5,6\\\}$\) under a controlled frozen\-embedding protocol with a fixed Random Forest classifier\. NTv3 is the only model to consistently outperform $k$\-mers \(63\.2\\% of datasets, mean MCC $= 0\.562$\), with gains concentrated in splice\-site and promoter tasks; HyenaDNA, DNABERT\-2, and Evo2 are outperformed on 86\\%, 95\\%, and 93\\% of datasets\. Wilcoxon signed\-rank tests with FDR correction confirm these patterns are systematic and robust to dataset heterogeneity\.  Our decomposition reveals that FM advantage originates exclusively from the non\-compositional residual, and only in tasks with inherently positional regulatory signals\. For HyenaDNA and DNABERT\-2, the residual actively degrades classification\. The fraction of embedding variance explained by $k$\-mers \($R^2$\) is uncorrelated with downstream quality, demonstrating that the quantity of non\-compositional information is not a proxy for its utility\. These results show that, in the frozen\-embedding regime, current DNA FM representations largely recapitulate sequence composition, and provide a principled diagnostic for predicting which task conditions are likely to benefit from non\-compositional structure\.

## Locality\-Controlled OOD Guidance for Robust Regulatory DNA Sequence Design

**Authors:** Dabin Jeong; Marwane Bourdim; Mohammad Lotfollahi

**ID:** 150510 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hYwOhbmMej>) | [PDF](<https://openreview.net/pdf?id=hYwOhbmMej>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150510>)

Designing regulatory DNA sequences for targeted gene\-expression control is an important challenge\. Recent approaches frame this task as property\-conditioned generation, where diffusion models trained on natural sequences are guided toward high predicted activity through reward\-based fine\-tuning or sampling\-time guidance\. We show that single\-reward evaluation can obscure reward\-hacking behavior\. By decomposing evaluation into property, novelty, and plausibility, we identify an empirically underexplored region of the evaluation space in which all three objectives are satisfied, but no existing baseline succeeds\. \{We postulate that this gap arises because prior methods treat guidance primarily as a matter of magnitude\.\} In regulatory DNA, however, sequence grammar is spatially nonuniform: motif positions are sensitive to perturbation, while background regions allow more exploration\. We therefore propose \\textsc\{LocoGen\} by reformulate guidance as a problem of \\textbf\{locality\}\. \\textsc\{LocoGen\} learns an invariant motif mask through sequence\-level invariance learning to protect motif positions, while applying OOD damping only to background positions\. It operates at sampling time on a frozen diffusion backbone, with no retraining\. Across HepG2, K562, and SK\-N\-SH, \\textsc\{LocoGen\} reaches this previously underexplored region of the property\-\-novelty\-\-plausibility space\. Code is available at \\url\{https://huggingface\.co/AnonymousAuthor42/LocoGen\}\.

## spora: A Unified Multimodal Dataset for Spatial Proteomics

**Authors:** Benedikt von Querfurth; Johann Wenckstern; Eeshaan Jain; Lukas Klein; Phil F Cheng; Yexiang Cheng; Cédric Vincent\-Cuaz; Martina Haberecker; Pascal Frossard; Andreas Wicki; Olivier Michielin; Charlotte Bunne

**ID:** 139800 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3pB5d76pyz>) | [PDF](<https://openreview.net/pdf?id=3pB5d76pyz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139800>)

Spatial proteomics \(SP\) captures the molecular composition and spatial organization of tissues at single\-cell resolution, opening a direct view of the cellular ecosystems that drive disease\. Protein panels, acquisition platforms, and tissue contexts differ from one cohort to the next, and a coherent picture of tissue biology can only emerge from models trained to bridge this heterogeneity\. Foundation models offer the natural path forward, but their training depends on large, harmonized corpora that span platforms, panels, and cohorts\. No public resource currently approaches that scale; available data sit in small, narrowly scoped releases with incompatible formats and conventions\. We present spora, a large\-scale multimodal SP dataset of 13,546 standardized multiplex images from 5,477 patients across 35 cohorts and five major SP technologies\.  Curated with biomedical experts, spora provides model\-training\-ready formats together with cell and tissue segmentations, structured clinical metadata, and, where available, paired H&amp;E enabling the training of virtual staining models\. It is complemented by spora \[io\], a unified interface for tiling, sampling, and standardization across all cohorts and modalities, and spora \[bench\], a benchmark suite spanning cell phenotyping, diagnostic and therapeutic prediction as well as virtual staining tasks across twelve cohorts that places current SP foundation models on common ground against task\-specific baselines\.

## Chem\-PerturBridge: a harmonized compendium of small molecule perturbation transcriptomic effects

**Authors:** Artur Szałata; Olga Novitskaia; Maiia Shulman; Matthew Mella; Altynbek Zhubanchaliyev; Fabian Theis

**ID:** 139372 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UFv9oyIlVq>) | [PDF](<https://openreview.net/pdf?id=UFv9oyIlVq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139372>)

Large perturbation models require training data encompassing chemical, cellular, and assay diversity\. Current transcriptomic resources for small\-molecule modeling, however, are fragmented across technologies, metadata conventions, controls, doses, and preprocessing pipelines\. We introduce Chem\-PerturBridge, a harmonized multi\-dataset resource comprising over 37k compounds, 136 cellular contexts, and 1\.25M transcriptomic samples across eight assay types, with standardized identifiers, metadata, and replicate\-aware condition\-level effects\. We use the resource to evaluate matched\-condition agreement across datasets and replicate agreement within datasets\. Matched same\-compound conditions generally show weak agreement in fine\-grained logFC rankings and magnitudes across most dataset pairs, often falling below same\-context different\-compound baselines\. In contrast, logFC direction agreement is substantially more stable and usually exceeds these baselines\. We further evaluate Chem\-PerturBridge as a pretraining resource for compound representation learning\. Under a compound\-held\-out OP3 evaluation split, embeddings pretrained on Chem\-PerturBridge improve over L1000\-only embeddings, Morgan fingerprints, and the descriptor\-free OP3 baseline across metrics\. Chem\-PerturBridge therefore supports both diagnostic evaluation of cross\-dataset signature agreement and model\-oriented reuse of heterogeneous perturbation transcriptomic data\.

## MutQA: A Cross\-Validated Q&amp;A Dataset for Genetic Mutations

**Authors:** Robert McCourt; Oladimeji Macaulay; David Arredondo; Luis E Tafoya; Oluoma Edeh; Kushal Virupakshappa; Yue Hu; My Nguyen Bach; Enrique A Ruiz; Shrey Poshiya; Debjani P Hudgens; Deepali Kundnani; Avinash Sahu

**ID:** 139212 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eKLNopOeto>) | [PDF](<https://openreview.net/pdf?id=eKLNopOeto>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139212>)

We introduce \\textsc\{MutQA\}, a large\-scale dataset of 330,387 citation\-grounded question\-\-answer pairs linking genetic mutations to their functional consequences as described in the biomedical literature\. Each record pairs a protein\-coding mutation with a natural\-language question and an evidence\-backed answer anchored to one of 27,442 PubMed articles, spanning 6,620 genes and 88,587 unique variants\. The dataset is constructed using \\textsc\{CrossValQA\}, a framework that enforces \\emph\{information isolation\} between independent LLMs: one model generates QA pairs from an article, a second model answers the same question without access to the first model's response, and a third model judges agreement\-\-\-ensuring that retained pairs are reproducible from the source text rather than hallucinated\. This bidirectional cross\-validation retains 82\.7\\% of generated pairs as \\emph\{cross\-validated\}\. Human evaluation on 1\{,\}000 samples with two annotators \($\\kappa\{=\}0\.61$\) confirms high factual fidelity\. Fine\-tuning \\textsc\{MutaPLM\} on MutQA yields large gains across all three sequence\-conditioned tasks: ROUGE\-L on free\-form mutation\-effect description rises from $12\.79$ to $22\.99$, judge\-mean correctness on question\-aware answering nearly doubles \($1\.45 \\to 2\.82$ on a 0\-\-5 scale\), and exact\-match accuracy on inverse mutation recovery improves from $19\.4\\%$ to $32\.1\\%$\. \\textsc\{CrossValQA\} is domain\-agnostic; alongside the genetic \\textsc\{MutQA\} release we apply the same framework to proteomics as a proof of concept \(Appendix\~\\ref\{app:proteomics\}\)\. We release the dataset, construction framework, and evaluation code to support reproducible research in biomedical NLP and protein language modeling\.

## Membership Inference on Synthetic Single\-Cell Genomic Data

**Authors:** Steven Golob; Patrick McKeever; Sikha Pentyala; Martine De Cock; Jonathan Peck

**ID:** 152585 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RzrYEYn0Uz>) | [PDF](<https://openreview.net/pdf?id=RzrYEYn0Uz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152585>)

Single‑cell RNA sequencing \(scRNA‑seq\) data is subject to strict access control due to its sensitive nature, motivating the use of synthetic data generation \(SDG\) for privacy‑preserving data sharing\. We present the first adversarial privacy attack that performs meaningfully above random guessing against state‑of‑the‑art scRNA‑seq SDG methods\. Our attack enables donor‑level membership inference, demonstrating that leading SDG techniques fail to adequately mask which individuals were used to train the generator\. We show that privacy leakage increases as the number of training donors decreases\. Although the attack is designed to exploit vulnerabilities in scDesign2, we find that it also succeeds against synthetic data generated by other leading methods, including scDesign3 and scVI\. This transferability indicates that an adversary can infer sensitive information from synthetic data without access to the training procedure, model parameters, or even the underlying generation algorithm\. Finally, we investigate the use of perturbation with noise during the SDG process as a first‑line defense, empirically evaluating its effectiveness in neutralizing the attack and its impact on utility\.

## Learning Biological Hierarchies in Single\-Cell Foundation Models

**Authors:** Xiangyu Guo; Ricardo Henao

**ID:** 151274 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bbkLH5srxD>) | [PDF](<https://openreview.net/pdf?id=bbkLH5srxD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151274>)

Cell types are organized by taxonomic relationships that define lineages in the so called cell ontology\. However, most existing foundation models typically ignore cell\-type lineages encoded in this cell ontology\. We introduce a biologically informed foundation model called \\textbf\{scOntoFM\}, which embeds hierarchical cell ontology into representation learning\. Using Lowest Common Ancestor \(LCA\) distances from the ontology graph, our framework pairs efficient offline triplet sampling with hierarchical cell\-ontology learning\. This approach jointly preserves local neighborhoods and shapes the global embedding geometry to reflect the ontology structure\. Across diverse cell\- and gene\-level benchmarks, the model consistently improves performance, with especially strong gains in zero\-shot settings\. Our model also balances batch integration with biological structure preservation, providing complementary perspectives to existing embedding evaluation frameworks and supporting scalable biological discovery\.

## PerturbReason: A Knowledge\-Grounded Benchmark and Framework for Cell\-State–Conditioned Mechanistic Reasoning of Perturbation Effects

**Authors:** Dongkwan Kim; Yiming Gao; Yining Yang; Yang Shen

**ID:** 139067 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nDBq0FPB7Y>) | [PDF](<https://openreview.net/pdf?id=nDBq0FPB7Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139067>)

Evaluating machine learning in scientific domains requires separating correct predictions from correct reasons under realistic distribution shifts\. We introduce PerturbReason, a knowledge‑grounded benchmark for cell‑state\-\-conditioned reasoning about perturbation effects\. It tests the models to generate mechanistically faithful explanations and assesses their robustness against complex shifts, such as new cells, unseen perturbations, and cross\-modal or combinatorial extrapolations\. PerturbReason combines single‑cell genetic and chemical perturbation data across multiple cell lines with knowledge graphs, and dynamically conditions pathways on cell‑specific basal states to avoid generic memorization\. Evaluations on state\-of\-the\-art models reveal systematic gaps between predictive accuracy and mechanistic reasoning\. Specifically, these models exhibit failure modes largely invisible to standard benchmarks, such as deriving correct answers through flawed logic, ignoring cellular context, and generating directionally inconsistent mechanisms\. As a reference probe of the benchmark, we present PerturbRM, a large language model trained to align outcome predictions with context\-specific regulatory reasoning\. PerturbReason thus provides a rigorous diagnostic benchmark for studying and improving faithful, generalizable reasoning in data\-rich scientific systems\.

## Cross\-Cell\-Line Perturbation Prediction Needs Controls

**Authors:** Xingyu Fan; Jinghao Wang; kim hsieh; Chunbin Gu; Pheng\-Ann Heng

**ID:** 139089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lnpzb1HvwX>) | [PDF](<https://openreview.net/pdf?id=lnpzb1HvwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139089>)

Predicting genetic perturbation responses across cell lines is challenging not only for models, but also for the metrics used to evaluate them\. We introduce a strict cross\-cell\-line CRISPRi stress test on Replogle Perturb\-seq, training on K562 and RPE1 \(or additionally HepG2\) and evaluating on held\-out Jurkat\. We pair this setting with two necessary controls: target\-control\-copy, which predicts no perturbation effect, and shifted\-control baselines, which translate target\-line controls by a source\-derived mean shift\. Across classical baselines, recent deep models, CellFlow, and context\-conditioned flow\-matching variants with five frozen single\-cell foundation\-model encoders plus a PCA/null context, we find that aggregate distributional metrics can be strongly driven by target\-line cell\-state variability rather than perturbation\-specific response\. Target\-control\-copy is competitive on aggregate distributional metrics, while shifted\-control approaches CellFlow on Energy and substantially outperforms it on perturbation\-specific Pearson\. Used as fixed per\-cell context for a shared downstream flow head, none of five frozen scFM encoders matches a PCA/null encoder in this strict cross\-line setting\. Finally, anchored mean\-preserving residual\-flow probes reveal a metric\-specific trade\-off: full\-space residual flows improve $W\_2$ but degrade per\-gene moment matching, whereas low\-rank constrained flows preserve moments but lose most $W\_2$ gain\. No tested method simultaneously dominates perturbation\-specific response and biologically relevant distributional fidelity\. These results argue for perturbation\-aware cell\-level evaluation in cross\-cell\-line virtual\-cell benchmarks\.

## Why Cancer cfDNA Models Fail on Chronic Disease: A Geometric Information\-Theoretic Bound and Its Architectural Implications

**Authors:** Fereshteh Abedini; Soheil Damangir

**ID:** 155191 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7aV3mkNAEJ>) | [PDF](<https://openreview.net/pdf?id=7aV3mkNAEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155191>)

Cell\-free DNA \(cfDNA\) liquid biopsy has been clinically routine for cancer detection and monitoring for years but has yet to produce applications in chronic diseases of parenchymal organs such as fibrotic liver, kidney, and lung disease, despite diseased organs shedding orders of magnitude more cfDNA into the bloodstream than tumors do\. This gap is structural: methods developed for cancer have been adapted for chronic disease without a theoretical framework establishing when this should work or where it should break down\.  We formalize cfDNA classification as recovering a disease\-induced shift on a low\-dimensional submanifold of the simplex over molecular configurations, observed through sparse genomic windows\. The formalization reveals that cancer and chronic disease occupy structurally distinct regimes parameterized by one dimensionless quantity: the inverse participation ratio $c\(v\)$ of the disease perturbation across windows\. Cancer is small\-$c\(v\)$: signal on a few genomic hotspots\. Chronic disease is large\-$c\(v\)$: signal spread across many co\-regulated regulatory programs\.  We prove an information\-theoretic lower bound: any classifier observing $k$ windows recovers at most a $\\sqrt\{k/c\(v\)\}$ fraction of the available information in the local\-asymptotic\-normality regime, regardless of per\-cfDNA model complexity\. The bound applies architecture\-agnostically to classifiers that focus deep computation on a small number of pre\-selected genomic regions, i\.e\. the architectural shape that has succeeded in cancer detection\. Such classifiers degrade sharply rather than gradually as $c\(v\)$ grows, with the transition provable from the geometry of the problem\.  Chronic\-disease classification requires an architecture matched to its regime: compute allocated across a very large set of windows rather than into deeper per\-cfDNA models, with $k \\gtrsim c\(v\)$\. We propose a concrete architecture and verify on synthetic experiments that the regime transition predicted by the theorem is observed, and the architecture outperforms cancer\-style baselines on chronic\-like signal\. We then validate on real patient data, where the architecture exceeds both cancer\-tuned methods and standard\-of\-care clinical tests\.

## STRAND: Sequence\-Conditioned Transport for Single\-Cell Perturbations

**Authors:** Boyang Fu; Sameer Gabbita; George Dasoulas; xiang lin; Shanghua Gao; Xiaorui Su; Soumya Ghosh; Marinka Zitnik

**ID:** 152460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sxea2QV2oZ>) | [PDF](<https://openreview.net/pdf?id=Sxea2QV2oZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152460>)

Predicting how genetic perturbations change cellular state is a core problem for building controllable models of gene regulation\. Perturbations at the same gene can produce different transcriptional responses depending on their genomic locus, including different transcription start sites and regulatory elements; gene\-level perturbation models collapse these distinct interventions into a single representation\. We introduce STRAND, a generative model that predicts single\-cell transcriptional responses by encoding regulatory DNA sequence at the perturbation locus and using it to parameterize a conditional transport process from control to perturbed cell states\. Sequence conditioning supports zero\-shot inference at perturbation targets unseen during training and locus\-resolved inputs across a 524\\,kb window at 128\\,bp model resolution\. On CRISPRi datasets in K562, Jurkat, and RPE1 cells, STRAND improves few\-shot perturbation discrimination by up to 33\\%, achieves the best average rank on unseen\-gene benchmarks, and improves held\-out\-cell\-line transfer by up to 0\.12 in $\\Delta$Pearson; ablations attribute these gains to both sequence conditioning and conditional transport\. At the locus level, STRAND distinguishes alternative transcription start sites and validated regulatory elements that gene\-identifier models treat as identical perturbations

## CytoWave: Perturbation\-Centric Pretraining for Single\-Cell Response Prediction

**Authors:** Yuwei Miao; Jingquan Yan; Hehuan Ma; Mai Thao Dang; Lin Xu; Siyuan Zhang; Junzhou Huang

**ID:** 149093 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sx5qHeS9ux>) | [PDF](<https://openreview.net/pdf?id=sx5qHeS9ux>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149093>)

Predicting gene expression under perturbations from single\-cell data is a fundamental task for modeling cellular responses, with applications in discovering gene function and designing therapeutics\. However, existing methods often struggle to generalize across datasets due to differences in experimental protocols, biological contexts, and species\. We present \\textbf\{CytoWave\}, a perturbation\-centric pretraining framework for single\-cell genetic perturbation response prediction\. We leverage large\-scale cross\-species perturbation datasets unified via orthology and train CytoWave in a two\-stage manner\. In the first stage, we learn reference control cell states via masked gene expression recovery on unperturbed cells\. In the second stage, we pretrain the model to predict perturbed gene expression given control states and perturbation signals, together with a contrastive objective that aligns latent representations of perturbation responses with perturbation signals\. We perform strict dataset\-held\-out evaluation across multiple condition combinations and case studies of pathway activity changes, demonstrating consistent and effective performance of CytoWave in predicting single\-cell genetic perturbation responses\.

## Brute\-Force Jailbreaks and Codon\-Aware Watermarking for DNA Foundation Models

**Authors:** Munish B Persaud; Amrit Singh Bedi; Souradip Chakraborty

**ID:** 155344 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6JUgH59aJ1>) | [PDF](<https://openreview.net/pdf?id=6JUgH59aJ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155344>)

Open\-source DNA foundation models such as Evo2 generate sequences with $\\geq 90\\%$ local nucleotide identity to known human\-pathogenic viruses under brute\-force sampling alone, with no domain expertise, prompt engineering, or access to model internals\. The bottleneck for biological misuse is therefore the model's prior, not the attacker's sophistication, and a deployable defense must operate where the attack does: at the codon layer\.  First, we characterize the attack\. On JailbreakDNABench's $23$ pathogenic viruses, brute\-force Best\-of\-N sampling against Evo2 succeeds for a mean of $9\.5/23$ viruses at 7B across two independent trials \($41\\%$, range $39\.1\\%\\\!\-\\\!43\.5\\%$, matching GeneBreaker's three\-component engineered jailbreak pipeline at $36\\%$\) and $12/23$ at 1B \($52\\%$, single curated trial, $\\sim\\\!6\\times$ GeneBreaker's reported $9\\%$\), without any guided search or learned attack model\. Probing Evo2's outputs, we find generations are not memorized: $0/11$ appear verbatim in NCBI nt, $0/11$ recall a single strain cleanly, and codon\-position mismatches are biologically structured rather than random \($\\chi^2\(2\) = 50\.37$, $p &lt; 10^\{\-4\}$; wobble\-position synonymous rate $63\.6\\%$, near the per\-virus codon\-usage baseline and well above the $25\\%$ uniform\-mutation null\)\. Verbatim or near\-verbatim training\-data filtering would therefore not have prevented these generations\.  Second, we present a deployment\-time defense\. Because the attack exploits codon\-level wobble structure, the defense must too\. WobbleGuard is a zero\-training provenance scheme whose contribution at the detection layer folds the genetic code's known synonym structure into the scoring rule\. At an in\-sample\-calibrated threshold \($1\.00\\%$ FPR by construction on $22\{,\}982$ natural NCBI pathogen fragments, $\\alpha = 0\.01$; cross\-key range $0\.30\\%\\\!\-\\\!1\.24\\%$ over $8$ independently sampled keys\), the composite detector $\\max\(z\_v, z\_w\)$ retains $95\.5\\%$ TPR under full synonymous codon substitution, the regime in which a nucleotide\-level KGW port collapses to $\{\\sim\}0\\%$ TPR, and detects $100\\%$ of unperturbed watermarked Evo2 generations at both 1B and 7B scales\. The attack works because brute force suffices; the defense works because it speaks codons\.

## TargetSage: Identifying Therapeutic Target Genes with Interpretable and Robust LLM Reasoning

**Authors:** Ziheng Duan; Tong Wu; Xi LI; Simon D Sun; Chaoyang Wang; Junhao Liu; Martin Min; Jing Zhang

**ID:** 152330 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TtHAAMGp59>) | [PDF](<https://openreview.net/pdf?id=TtHAAMGp59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152330>)

Therapeutic target identification\-\-\-determining which genes or proteins to modulate for a desired clinical effect\-\-\-is a foundational step in drug discovery\. However, existing computational methods that rank candidates at genome scale face three persistent challenges: \(i\) static feature design, which discards mechanistic knowledge locked in biomedical literature; \(ii\) lack of interpretability, offering no auditable gene\-level rationale for individual predictions; and \(iii\) the false\-negative problem, where unlabeled but potentially druggable genes are treated as definitive negatives\. We propose TargetSage, an LLM reasoning agent for therapeutic target identification built on positive\-unlabeled \(PU\) learning, with three modules\. First, Agentic Profiling enriches each gene with LLM\-gathered biomedical evidence, distilling 2,261 attributes into a 23\-dimensional reasoning vocabulary\. Second, Guided Reasoning produces gene\-specific rationales and explicit reasoning attributes through a GRPO\-trained policy rewarded by downstream Adjusted $F\_1$\. Third, PU\-Aware Scoring integrates structured biological features, explicit reasoning attributes, and implicit reasoning embeddings via gated fusion under an LLM\-informed class\-prior to produce genome\-wide druggability scores\. Evaluated on 15 benchmark tasks spanning 19,032 human protein\-coding genes, TargetSage consistently outperforms ten baselines, surpassing the strongest by 37% in macro\-average Adjusted $F\_1$ and generalizing to independent held\-out benchmarks\. Using only 2021 training data, TargetSage outperforms all ten baselines at ranking genes that gain clinical approval by 2025\. On an independent validation set of Phase 2/3 clinical candidates, it further achieves a 51% higher enrichment odds ratio at the top\-25 shortlist than the runner\-up baseline\. TargetSage provides an evidence\-grounded, continuously updatable foundation for interpretable target prioritization at genome scale\.

## Quantifying Centrality for Complex Data

**Authors:** Hang Zhou; Yidong Zhou; Hans\-Georg Müller

**ID:** 150293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jEjnEqI3Wg>) | [PDF](<https://openreview.net/pdf?id=jEjnEqI3Wg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150293>)

Analyzing complex data across a wide range of scientific fields often requires identifying central or typical elements, distinguishing them from atypical ones, and constructing central or "normal" regions at prespecified levels of centrality\. We introduce centrality scores \(C\-scores\) based on distance profiles for random objects taking values in general metric spaces\. The proposed C\-scores are defined through weighted optimal transport of distance profiles and provide a unified framework for constructing central or "normal" regions for complex data\. We show that, for Euclidean data, the limiting behavior of the proposed C\-scores is asymptotically equivalent to the underlying probability density function\. The practical merits of the proposed method are illustrated using gene expression data, distributions of recorded temperatures, handwritten digit recognition, and taxi trip records\. These examples demonstrate the effectiveness of C\-scores in identifying central and peripheral elements and in yielding meaningful insights for non\-Euclidean and high\-dimensional data\.

## sMMC\-22M: A Context\-Aware Dataset and Benchmark for Single\-Cell Spatial Transcriptomics

**Authors:** Xi LI; Yaqi Hu; Ziheng Duan; Xinyi Wang; Simon D Sun; Diptanshu Sikdar; Yang Liu; Jing Zhang

**ID:** 153914 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hk85ZGSGbQ>) | [PDF](<https://openreview.net/pdf?id=Hk85ZGSGbQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153914>)

Spatial transcriptomics has created a compelling opportunity to test whether tissue morphology can predict molecular state, but existing benchmarks are constrained by limited scale, spot\-level supervision, and incomplete biological context\. We present sMMC\-22M, a cell\-aligned multimodal resource comprising over 20 mil\- lion cells across 25 organ categories, 66 studies, and multiple spatial\-transcriptomic assays\. We organize the benchmark around three data\-centric axes that determine whether histology\-to\-molecular modeling can move beyond local interpolation\. First, sMMC\-22M provides scale: broad organ and study coverage enables con\- trolled encoder benchmarking and reveals a scaling trend in which larger pathology foundation models improve morphology–gene correspondence under matched evaluation\. Second, sMMC\-22M provides resolution: by decomposing assays into aligned cell\-level records, our framework converts spot\-level histology–omics pipelines into single\-cell predictors and evaluates them under strict in\-domain and cross\-patient splits\. Third, sMMC\-22M provides rich context: each cell is paired with spatial, molecular, and sample\-level metadata, allowing analyses such as age\-band shift in ovarian samples, where age\-mismatched transfer sharply reduces prediction quality despite misleading global\-distance summaries\. Together, sMMC\- 22M and STBoost establish a practical framework for single\-cell histology\-to\-gene prediction while showing that robust generalization still depends on scale, cellular resolution, and explicit biological context\.

## Where Tabular Foundation Models Falter on Genetic Data: Datasets That Expose and Provide a Path to Address the Gap

**Authors:** ANIRBAN DAS; Yan Cui

**ID:** 139799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3qspmxVnC1>) | [PDF](<https://openreview.net/pdf?id=3qspmxVnC1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139799>)

Tabular foundation models are used as off\-the\-shelf predictors for heterogeneous tabular tasks, but it remains unclear how they will perform on real genotype\-to\-phenotype tabular datasets, which carry unique challenges\. One such challenge is ancestry\-dependent non\-stationarity in allele effect sizes \(the effects of genetic variation on disease risk\): the predictive contribution of a given genetic variant may change significantly across the ancestry spectrum\. This is especially consequential for patients from ancestry groups that are underrepresented in existing datasets, because models that are unaware of this non\-stationarity are more likely to perform poorly for them\. The battery of synthetic tasks used to pretrain tabular foundation models does not capture this structure, and we show that it leads to systematic performance degradation\. Using controlled hierarchical Gaussian\-process stress tests, we demonstrate that both off\-the\-shelf TabICL and TabPFN are robust when ancestry dispersion in the data is low, but as dispersion grows, the latent ancestry\-dependent non\-stationarity of effect sizes becomes a first\-order problem, and the predictive performance of both models deteriorates\. We confirm the same pattern on All of Us \(AoU\) \(a large biobank containing whole\-genome sequencing and electronic health record \(EHR\) data spanning the ancestry spectrum\) across an extensive panel of cancer phenotypes evaluated with the two leading tabular foundation models: TabICL and TabPFN\. Holding the in\-context training\-set size, phenotype, and feature set fixed, ancestry\-specific in\-context tables, which are less dispersed in ancestry space, consistently outperform size\-matched meta\-ancestry tables, isolating ancestry dispersion as the driver of degradation\. To address the failure without changing the base architecture, we construct two synthetic task families that explicitly encode ancestry\-dependent effect drift and instruction\-tune an off\-the\-shelf TabICL model on tasks sampled across both families\. On held\-out AoU evaluations covering cancer and respiratory disease phenotypes, the tuned model yields more stable performance across ancestry\-distance bins and is especially strong in the bins farthest from the center of the in\-context exemplars in ancestry space, that is, on subjects whose ancestry is most underrepresented among the provided exemplars\. The paper contributes an evaluation protocol, a failure analysis, and two synthetic task families targeted at ancestry\-dependent non\-stationarity in precision\-medicine tabular modeling\.

## GRNAgent: A Multimodal Graph Reasoning Agent for Gene Regulatory Network Inference

**Authors:** Akshata Hegde; Kyler Zook; Yanli Wang; Jianlin Cheng

**ID:** 149734 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nlaQh30azU>) | [PDF](<https://openreview.net/pdf?id=nlaQh30azU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149734>)

Inferring gene regulatory networks \(GRNs\) from multimodal biological data requires integrating regulatory evidence beyond transcript abundance alone\. Regulatory evidence can come from RNA\-seq, chromatin accessibility, and transcription factor \(TF\) motif priors, but these sources are difficult to discover, harmonize, and integrate, and are often incomplete across biological contexts\. We propose GRNAgent, an automated multi\-agent framework for multi\-omic GRN inference that coordinates evidence acquisition, quality control, modality integration, model inference, benchmarking, and post hoc validation\. At the core of GRNAgent is Transcription Factor–centered Evidence Adaptive Graph Reasoning \(TF\-EAGER\), a transformer\-based graph reasoning model built on TF\-centered evidence graphs\. For each TF, GRNAgent constructs a local candidate graph whose nodes are candidate target genes and whose edges are annotated with available regulatory evidence, including expression association, motif support, and chromatin accessibility\. TF\-EAGER converts this local evidence graph into typed evidence tokens and scores each TF–target gene edge by staged cross\-attention: first over motif and chromatin accessibility signals, then over expression\-derived evidence, and finally over all available signals\. This TF\-centered evidence\-graph formulation couples the automated multi\-omic evidence construction with structured graph reasoning over heterogeneous evidence, enabling regulatory edge prediction from partially available biological signals\. Across 24 datasets and 10 baselines, GRNAgent achieves the best full\-matrix benchmark performance among the evaluated methods, yielding 5–20× improvements in area under the precision\-recall curve \(AUPRC\) and early precision \(EP\) over the best\-performing baselines\. Under sampled evaluation, it reaches AUPRC 0\.801 in leave\-one\-TF\-out validation and AUPRC 0\.705 in unseen cell\-type inference, with average EP@10 around 0\.81 in the blind setting\. Finally, GRNAgent includes a grounded literature verification module, which uses a large language model \(LLM\) to structure retrieved biological evidence for predicted edges without influencing model training\.

## Guarding the Life Code: Preserving Membership Privacy in Genomic Foundation Models

**Authors:** Xinyu Zhao; Jinhao Duan; Zhen Tan; Tianlong Chen

**ID:** 155025 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=96HcSezVOS>) | [PDF](<https://openreview.net/pdf?id=96HcSezVOS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155025>)

Genomic Foundation Models \(GFMs\) have become a promising paradigm for decoding DNA sequences, yet their privacy risks are critically underexplored\.Trained on human cohorts, GFMs can unintentionally memorize sensitive genomic signatures, that enable membership inference attacks \(MIAs\) and expose individuals to long\-lasting privacy harms\.However, existing defenses often fall short in genomics: globally applied mechanisms can substantially degrade motif\-sensitive utility, and model\-agnostic post\-processing provides limited insight into which genomic regions drive leakage\. Through a systematic privacy audit, we find that membership leakage in GFMs is highly non\-uniform, concentrating on a small subset of high\-risk samples and sparse token spans corresponding to biologically meaningful patterns\. Motivated by this finding, we propose GenoGuard, a model\- and sample\-adaptive defense that shifts from blanket protection to targeted, region\-aware mitigation\. GenoGuard \(i\) localizes privacy\-leaking subsequences via gradient\-based token attribution and performs token\-level risk reduction through selective gradient routing, \(ii\) applies sample\-level risk reduction with risk\-adaptive label smoothing guided by a reference\-calibrated loss gap score, and \(iii\) provides region\-level attribution maps for privacy auditing and biological interpretation\. Experiments across representative GFMs \(Mistral\-DNA, Nucleotide Transformer\) demonstrate that GenoGuard consistently improves privacy against multiple MIA families while preserving strong fine\-tuning performance and interpretability\.

## Hyper Input Convex Neural Networks for Shape Constrained Learning and Optimal Transport

**Authors:** Shayan Hundrieser; Insung Kong; Johannes Schmidt\-Hieber

**ID:** 154124 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G69BisYSHp>) | [PDF](<https://openreview.net/pdf?id=G69BisYSHp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154124>)

We introduce Hyper Input Convex Neural Networks \(HyCNNs\), a novel neural network architecture designed for learning convex functions\. HyCNNs combine the principles of Maxout networks with input convex neural networks \(ICNNs\) to create a neural network   that is always convex in the input, theoretically capable of leveraging depth, and performs reliable when trained at scale compared to ICNNs\. Concretely, we prove that HyCNNs require exponentially fewer parameters than ICNNs to approximate quadratic functions up to a given precision\. Throughout a series of synthetic experiments, we demonstrate that HyCNNs outperform existing ICNNs and MLPs in terms of predictive performance for convex regression and interpolation tasks\. We further apply HyCNNs to learn high\-dimensional optimal transport maps for synthetic examples and for single\-cell RNA sequencing data, where they oftentimes outperform ICNN\-based neural optimal transport methods and other baselines across a wide range of settings\.

