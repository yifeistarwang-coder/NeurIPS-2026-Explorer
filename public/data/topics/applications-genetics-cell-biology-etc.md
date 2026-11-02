# Applications / Genetics, Cell Biology, etc

应用 / 遗传学与细胞生物学

79 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

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

## Multiscale Microenvironment Vector Space Projection for Uncovering Diverse Pathological Biomarker

**Authors:** Zixiu Ding; Wenxuan Hao; Liya Ding; Yuan Dai; Jiazhen Yang; Shuwen Han; Lingxiang Jia; Zunlei Feng

**ID:** 156107 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0LsjELSCY9>) | [PDF](<https://openreview.net/pdf?id=0LsjELSCY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156107>)

_Abstract unavailable from the accessible public sources._

## Causally Structured Differential Network Modeling for Single\-Cell Perturbation Prediction

**Authors:** Jiayi Dong; Xinyue Gu; Fei Wang

**ID:** 148792 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v30gAQvUAX>) | [PDF](<https://openreview.net/pdf?id=v30gAQvUAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148792>)

_Abstract unavailable from the accessible public sources._

## Open\-Ended Scientific Discovery and the Social Dynamics of Evolving Agent Networks

**Authors:** Tennison Liu; Silas Ruhrberg Estévez; Rob Davis; Ryan M Sheridan; David Bentley; Mihaela van der Schaar

**ID:** 150676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLFhs8AKyU>) | [PDF](<https://openreview.net/pdf?id=gLFhs8AKyU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150676>)

Scientific discovery is fundamentally open\-ended, characterized by epistemic uncertainty, and requiring endogenous goal\-setting and recursive knowledge accumulation\. While current agentic systems have demonstrated success in addressing goal\-based discovery tasks, they struggle to sustain discovery in open\-ended settings\. In this work, we posit that open\-ended discovery is an emergent network\-level property of a socially driven system\. We introduce $\\texttt\{ASCollab\}$, which translates four key algorithmic conditions: \(1\) population heterogeneity in research behaviors, \(2\) endogenous interaction networks where collaborations and attention routing emerge organically, and \(3\) socially driven peer evaluations, which are enabled by \(4\) a global, shared memory that reflects evolving research states\. Specifically, social memory is implemented to capture time\-varying expertise and reputational signals, and shifting attention paid to historical artifacts produced by the system\. Through experiments on large\-scale discovery problems in genomics, cell biology, and epidemiology, we demonstrate that $\\texttt\{ASCollab\}$ produces discoveries judged by domain experts to be both sound and significant\. Crucially, the system independently recovers real\-world scientific findings\. Furthermore, systematic investigations show that social dynamics fostered by each of the four conditions are vital, where heterogeneous agents operating within self\-organizing networks significantly outperform both fixed\-workflow baselines and homogeneous networks\.

## Scaling Genomic Language Modeling with Unified Corpus and Evaluation in Bacteria

**Authors:** Maciej Wiatrak; Samuel T Horsfield; Aaron Weimann; Ramon Viñas Torné; Maria Ntemourtsidou; David Abelson; Adam Dinan; John Lees; Maria Brbic; Andres Floto

**ID:** 139114 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kH4SzHwprq>) | [PDF](<https://openreview.net/pdf?id=kH4SzHwprq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139114>)

_Abstract unavailable from the accessible public sources._

## Bigger Isn’t Better: Why the Indiscriminate Scaling of Foundation Models Can’t Solve Biology

**Authors:** Kathryne Metcalf; Lorin Crawford; Mary L Gray; Kevin K Yang; Alex X Lu

**ID:** 140123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1SNf7AVj6d>) | [PDF](<https://openreview.net/pdf?id=1SNf7AVj6d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140123>)

In the wake of AlphaFold’s spectacular achievements, a new generation of biological foundation models have promised to bring about similarly transformative advances in other life science domains\. However, we argue that the availability of prefabricated datasets, architectures, and benchmarking metrics—coupled with the pressure to publish novel results—has led computational biology to prioritize scale, visibility, and convenience over progress\. Without confronting the inbuilt limitations of our existing data and components, and without realigning the institutional and professional incentives that drive research decision\-making at the programmatic level, we risk misallocating effort at great cost to our ability to achieve meaningful biological insight\. This paper focuses on foundation modelling in proteomics, genomics, and single\-cell biology, offering a critical synthesis of common failure modes\. We highlight empirical challenges that have been brought against a number of high\-profile models as case studies, and—using AlphaFold as a countercase—explore what it would take to build a research ecosystem that would facilitate the development of theory\-driven, fit\-for\-purpose models\.

## Chem\-PerturBridge: a harmonized compendium of small molecule perturbation transcriptomic effects

**Authors:** Artur Szałata; Olga Novitskaia; Maiia Shulman; Matthew Mella; Altynbek Zhubanchaliyev; Fabian Theis

**ID:** 139372 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UFv9oyIlVq>) | [PDF](<https://openreview.net/pdf?id=UFv9oyIlVq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139372>)

Large perturbation models require training data encompassing chemical, cellular, and assay diversity\. Current transcriptomic resources for small\-molecule modeling, however, are fragmented across technologies, metadata conventions, controls, doses, and preprocessing pipelines\. We introduce Chem\-PerturBridge, a harmonized multi\-dataset resource comprising over 37k compounds, 136 cellular contexts, and 1\.25M transcriptomic samples across eight assay types, with standardized identifiers, metadata, and replicate\-aware condition\-level effects\. We use the resource to evaluate matched\-condition agreement across datasets and replicate agreement within datasets\. Matched same\-compound conditions generally show weak agreement in fine\-grained logFC rankings and magnitudes across most dataset pairs, often falling below same\-context different\-compound baselines\. In contrast, logFC direction agreement is substantially more stable and usually exceeds these baselines\. We further evaluate Chem\-PerturBridge as a pretraining resource for compound representation learning\. Under a compound\-held\-out OP3 evaluation split, embeddings pretrained on Chem\-PerturBridge improve over L1000\-only embeddings, Morgan fingerprints, and the descriptor\-free OP3 baseline across metrics\. Chem\-PerturBridge therefore supports both diagnostic evaluation of cross\-dataset signature agreement and model\-oriented reuse of heterogeneous perturbation transcriptomic data\.

## Decomposed Representations Mitigate the Alignment–Specificity Trade\-off in Multi\-Omics

**Authors:** Mai Thao Dang; Feng Jiang; Hehuan Ma; Yuzhi Guo; Jingquan Yan; Haiqing Li; Saiyang Na; Zheng Zheng; Thuc A Tran; Jean Gao; Junzhou Huang

**ID:** 149003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tY6lfTLggZ>) | [PDF](<https://openreview.net/pdf?id=tY6lfTLggZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149003>)

Single\-cell multi\-omics technologies jointly measure multiple modalities from the same cell, such as gene expression, chromatin accessibility, and surface protein abundance, providing a richer view of cellular state than any single modality alone\. A central challenge is how to learn a multimodal cell representation that preserves the different types of information contained in these co\-profiled measurements\. Existing integration methods often emphasize either cross\-modal correspondence, which benefits retrieval and imputation, or fused discriminative structure, which benefits classification, but these objectives can favor different aspects of the data\. As a result, a representation optimized for one setting may fail to preserve information needed for another\. We introduce scDecomp, a decomposed representation learning framework for co\-profiled single\-cell multi\-omics data\. Motivated by the concepts of redundancy, uniqueness, and synergy, scDecomp separates multimodal information into three role\-specific components: a redundancy component \($R$\) for information shared across modalities, a uniqueness component \($U$\) for modality\-specific information, and a synergy component \($S$\) for interaction\-dependent multi\-omic signals\. This design allows the learned representation to retain shared cell\-state structure while also preserving modality\-specific and cross\-modal regulatory information\. On single\-cell multi\-omics benchmarks, the $R$ component achieves a 5\.0\\% reduction in FOSCTTM compared with the strongest baseline, while $U\+S$ improves cell type classification accuracy by 1\.38\\%\. Branch\-level analyses further show that the decomposed components support complementary aspects of representation quality, suggesting that structured decomposition provides a practical strategy for learning more informative multimodal cell representations\.

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

## Curriculum Multiple Shooting for Robust Training of Neural and Universal Differential Equations

**Authors:** Sebastian Persson; Giacomo Fabrini; Branwen Snelling; Fabian Fröhlich

**ID:** 153849 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IHtSSNfqdx>) | [PDF](<https://openreview.net/pdf?id=IHtSSNfqdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153849>)

Neural ordinary differential equations \(NODEs\) and universal differential equations \(UDEs\) provide flexible and popular frameworks for learning interpretable dynamical systems from noisy time\-series data\. However, training these models remains challenging, and versatile methods that robustly handle sparse and noisy data as well as partially observed models are lacking\. To address this, we introduce curriculum multiple shooting \(CMS\), a general\-purpose training strategy for fitting ordinary differential equation \(ODE\) models to time\-series data by integrating curriculum learning with multiple shooting\. Across twelve benchmarks spanning simulated and real data, and covering NODEs, UDEs, and mechanistic ODEs, CMS accelerates and stabilises training convergence, outperforms state\-of\-the\-art training strategies, and ranks among the best methods in generalisation\. Finally, we discuss possible explanations for the strong performance of CMS in light of contemporary theories of what makes training on time\-series challenging\.

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

## What DNA Foundation Models Learn Beyond Sequence Composition

**Authors:** Vincenzo Y\. Civale; Andrew Bagdanov; Alberto Magi

**ID:** 139816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2xsiapjtot>) | [PDF](<https://openreview.net/pdf?id=2xsiapjtot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139816>)

A central question in genomic representation learning is whether DNA foundation models\~\(FMs\) encode information beyond simple sequence composition, or whether their apparent representational power largely reflects signals already captured by classical compositional statistics\. We address this by establishing $k$\-mer frequency vectors as a rigorous biologically grounded baseline and introducing a geometric decomposition that partitions FM embeddings into a component linearly predictable from $k$\-mer frequencies and an orthogonal residual representing genuinely non\-compositional information\. By evaluating each component separately as a downstream feature space, we directly measure what FMs encode beyond composition and whether that content is beneficial, neutral, or detrimental\.  Across 57 genomic classification datasets and 2 gene expression regression tasks, we compare five FMs \(NTv3\-650M, HyenaDNA, DNABERT\-2, Caduceus\-Ph, Evo2\-1B\) against $k$\-mer features \($k \\in \\\{4,5,6\\\}$\) under a controlled frozen\-embedding protocol with a fixed Random Forest classifier\. NTv3 is the only model to consistently outperform $k$\-mers \(63\.2\\% of datasets, mean MCC $= 0\.562$\), with gains concentrated in splice\-site and promoter tasks; HyenaDNA, DNABERT\-2, and Evo2 are outperformed on 86\\%, 95\\%, and 93\\% of datasets\. Wilcoxon signed\-rank tests with FDR correction confirm these patterns are systematic and robust to dataset heterogeneity\.  Our decomposition reveals that FM advantage originates exclusively from the non\-compositional residual, and only in tasks with inherently positional regulatory signals\. For HyenaDNA and DNABERT\-2, the residual actively degrades classification\. The fraction of embedding variance explained by $k$\-mers \($R^2$\) is uncorrelated with downstream quality, demonstrating that the quantity of non\-compositional information is not a proxy for its utility\. These results show that, in the frozen\-embedding regime, current DNA FM representations largely recapitulate sequence composition, and provide a principled diagnostic for predicting which task conditions are likely to benefit from non\-compositional structure\.

## What DNA Foundation Models Learn Beyond Sequence Composition

**Authors:** Vincenzo Y\. Civale; Andrew Bagdanov; Alberto Magi

**ID:** 139816\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139816

[Paper](<https://openreview.net/forum?id=2xsiapjtot>) | [PDF](<https://openreview.net/pdf?id=2xsiapjtot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139816>)

A central question in genomic representation learning is whether DNA foundation models\~\(FMs\) encode information beyond simple sequence composition, or whether their apparent representational power largely reflects signals already captured by classical compositional statistics\. We address this by establishing $k$\-mer frequency vectors as a rigorous biologically grounded baseline and introducing a geometric decomposition that partitions FM embeddings into a component linearly predictable from $k$\-mer frequencies and an orthogonal residual representing genuinely non\-compositional information\. By evaluating each component separately as a downstream feature space, we directly measure what FMs encode beyond composition and whether that content is beneficial, neutral, or detrimental\.  Across 57 genomic classification datasets and 2 gene expression regression tasks, we compare five FMs \(NTv3\-650M, HyenaDNA, DNABERT\-2, Caduceus\-Ph, Evo2\-1B\) against $k$\-mer features \($k \\in \\\{4,5,6\\\}$\) under a controlled frozen\-embedding protocol with a fixed Random Forest classifier\. NTv3 is the only model to consistently outperform $k$\-mers \(63\.2\\% of datasets, mean MCC $= 0\.562$\), with gains concentrated in splice\-site and promoter tasks; HyenaDNA, DNABERT\-2, and Evo2 are outperformed on 86\\%, 95\\%, and 93\\% of datasets\. Wilcoxon signed\-rank tests with FDR correction confirm these patterns are systematic and robust to dataset heterogeneity\.  Our decomposition reveals that FM advantage originates exclusively from the non\-compositional residual, and only in tasks with inherently positional regulatory signals\. For HyenaDNA and DNABERT\-2, the residual actively degrades classification\. The fraction of embedding variance explained by $k$\-mers \($R^2$\) is uncorrelated with downstream quality, demonstrating that the quantity of non\-compositional information is not a proxy for its utility\. These results show that, in the frozen\-embedding regime, current DNA FM representations largely recapitulate sequence composition, and provide a principled diagnostic for predicting which task conditions are likely to benefit from non\-compositional structure\.

## PerturbReason: A Knowledge\-Grounded Benchmark and Framework for Cell\-State–Conditioned Mechanistic Reasoning of Perturbation Effects

**Authors:** Dongkwan Kim; Yiming Gao; Yining Yang; Yang Shen

**ID:** 139067\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139067

[Paper](<https://openreview.net/forum?id=nDBq0FPB7Y>) | [PDF](<https://openreview.net/pdf?id=nDBq0FPB7Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139067>)

Evaluating machine learning in scientific domains requires separating correct predictions from correct reasons under realistic distribution shifts\. We introduce PerturbReason, a knowledge‑grounded benchmark for cell‑state\-\-conditioned reasoning about perturbation effects\. It tests the models to generate mechanistically faithful explanations and assesses their robustness against complex shifts, such as new cells, unseen perturbations, and cross\-modal or combinatorial extrapolations\. PerturbReason combines single‑cell genetic and chemical perturbation data across multiple cell lines with knowledge graphs, and dynamically conditions pathways on cell‑specific basal states to avoid generic memorization\. Evaluations on state\-of\-the\-art models reveal systematic gaps between predictive accuracy and mechanistic reasoning\. Specifically, these models exhibit failure modes largely invisible to standard benchmarks, such as deriving correct answers through flawed logic, ignoring cellular context, and generating directionally inconsistent mechanisms\. As a reference probe of the benchmark, we present PerturbRM, a large language model trained to align outcome predictions with context\-specific regulatory reasoning\. PerturbReason thus provides a rigorous diagnostic benchmark for studying and improving faithful, generalizable reasoning in data\-rich scientific systems\.

## Cross\-Cell\-Line Perturbation Prediction Needs Controls

**Authors:** Xingyu Fan; Jinghao Wang; kim hsieh; Chunbin Gu; Pheng\-Ann Heng

**ID:** 139089\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139089

[Paper](<https://openreview.net/forum?id=lnpzb1HvwX>) | [PDF](<https://openreview.net/pdf?id=lnpzb1HvwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139089>)

Predicting genetic perturbation responses across cell lines is challenging not only for models, but also for the metrics used to evaluate them\. We introduce a strict cross\-cell\-line CRISPRi stress test on Replogle Perturb\-seq, training on K562 and RPE1 \(or additionally HepG2\) and evaluating on held\-out Jurkat\. We pair this setting with two necessary controls: target\-control\-copy, which predicts no perturbation effect, and shifted\-control baselines, which translate target\-line controls by a source\-derived mean shift\. Across classical baselines, recent deep models, CellFlow, and context\-conditioned flow\-matching variants with five frozen single\-cell foundation\-model encoders plus a PCA/null context, we find that aggregate distributional metrics can be strongly driven by target\-line cell\-state variability rather than perturbation\-specific response\. Target\-control\-copy is competitive on aggregate distributional metrics, while shifted\-control approaches CellFlow on Energy and substantially outperforms it on perturbation\-specific Pearson\. Used as fixed per\-cell context for a shared downstream flow head, none of five frozen scFM encoders matches a PCA/null encoder in this strict cross\-line setting\. Finally, anchored mean\-preserving residual\-flow probes reveal a metric\-specific trade\-off: full\-space residual flows improve $W\_2$ but degrade per\-gene moment matching, whereas low\-rank constrained flows preserve moments but lose most $W\_2$ gain\. No tested method simultaneously dominates perturbation\-specific response and biologically relevant distributional fidelity\. These results argue for perturbation\-aware cell\-level evaluation in cross\-cell\-line virtual\-cell benchmarks\.

## sMMC\-22M: A Context\-Aware Dataset and Benchmark for Single\-Cell Spatial Transcriptomics

**Authors:** Xi LI; Yaqi Hu; Ziheng Duan; Xinyi Wang; Simon D Sun; Diptanshu Sikdar; Yang Liu; Jing Zhang

**ID:** 153914 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hk85ZGSGbQ>) | [PDF](<https://openreview.net/pdf?id=Hk85ZGSGbQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153914>)

Spatial transcriptomics has created a compelling opportunity to test whether tissue morphology can predict molecular state, but existing benchmarks are constrained by limited scale, spot\-level supervision, and incomplete biological context\. We present sMMC\-22M, a cell\-aligned multimodal resource comprising over 20 mil\- lion cells across 25 organ categories, 66 studies, and multiple spatial\-transcriptomic assays\. We organize the benchmark around three data\-centric axes that determine whether histology\-to\-molecular modeling can move beyond local interpolation\. First, sMMC\-22M provides scale: broad organ and study coverage enables con\- trolled encoder benchmarking and reveals a scaling trend in which larger pathology foundation models improve morphology–gene correspondence under matched evaluation\. Second, sMMC\-22M provides resolution: by decomposing assays into aligned cell\-level records, our framework converts spot\-level histology–omics pipelines into single\-cell predictors and evaluates them under strict in\-domain and cross\-patient splits\. Third, sMMC\-22M provides rich context: each cell is paired with spatial, molecular, and sample\-level metadata, allowing analyses such as age\-band shift in ovarian samples, where age\-mismatched transfer sharply reduces prediction quality despite misleading global\-distance summaries\. Together, sMMC\- 22M and STBoost establish a practical framework for single\-cell histology\-to\-gene prediction while showing that robust generalization still depends on scale, cellular resolution, and explicit biological context\.

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

## Why Cancer cfDNA Models Fail on Chronic Disease: A Geometric Information\-Theoretic Bound and Its Architectural Implications

**Authors:** Fereshteh Abedini; Soheil Damangir

**ID:** 155191 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7aV3mkNAEJ>) | [PDF](<https://openreview.net/pdf?id=7aV3mkNAEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155191>)

Cell\-free DNA \(cfDNA\) liquid biopsy has been clinically routine for cancer detection and monitoring for years but has yet to produce applications in chronic diseases of parenchymal organs such as fibrotic liver, kidney, and lung disease, despite diseased organs shedding orders of magnitude more cfDNA into the bloodstream than tumors do\. This gap is structural: methods developed for cancer have been adapted for chronic disease without a theoretical framework establishing when this should work or where it should break down\.  We formalize cfDNA classification as recovering a disease\-induced shift on a low\-dimensional submanifold of the simplex over molecular configurations, observed through sparse genomic windows\. The formalization reveals that cancer and chronic disease occupy structurally distinct regimes parameterized by one dimensionless quantity: the inverse participation ratio $c\(v\)$ of the disease perturbation across windows\. Cancer is small\-$c\(v\)$: signal on a few genomic hotspots\. Chronic disease is large\-$c\(v\)$: signal spread across many co\-regulated regulatory programs\.  We prove an information\-theoretic lower bound: any classifier observing $k$ windows recovers at most a $\\sqrt\{k/c\(v\)\}$ fraction of the available information in the local\-asymptotic\-normality regime, regardless of per\-cfDNA model complexity\. The bound applies architecture\-agnostically to classifiers that focus deep computation on a small number of pre\-selected genomic regions, i\.e\. the architectural shape that has succeeded in cancer detection\. Such classifiers degrade sharply rather than gradually as $c\(v\)$ grows, with the transition provable from the geometry of the problem\.  Chronic\-disease classification requires an architecture matched to its regime: compute allocated across a very large set of windows rather than into deeper per\-cfDNA models, with $k \\gtrsim c\(v\)$\. We propose a concrete architecture and verify on synthetic experiments that the regime transition predicted by the theorem is observed, and the architecture outperforms cancer\-style baselines on chronic\-like signal\. We then validate on real patient data, where the architecture exceeds both cancer\-tuned methods and standard\-of\-care clinical tests\.

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

## Differentiable Retrieval\-Augmented Generation for Predicting Cellular Responses to Gene Perturbation

**Authors:** Andrea Giuseppe Di Francesco; Andrea Rubbi; Rishabh Jain; Pietro Lió

**ID:** 152229 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UbCFFQ9TmZ>) | [PDF](<https://openreview.net/pdf?id=UbCFFQ9TmZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152229>)

_Abstract unavailable from the accessible public sources._

## Pathway\-Aligned Regulator Tokens for Interpretable Spatial Gene Expression Prediction from Histologyatial Transcriptomics Prediction from Histology

**Authors:** Hyun Namgung; Sanghyun Park

**ID:** 154953 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9gb3vNBdFP>) | [PDF](<https://openreview.net/pdf?id=9gb3vNBdFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154953>)

_Abstract unavailable from the accessible public sources._

## Locality\-Controlled OOD Guidance for Robust Regulatory DNA Sequence Design

**Authors:** Dabin Jeong; Marwane Bourdim; Mohammad Lotfollahi

**ID:** 150510 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hYwOhbmMej>) | [PDF](<https://openreview.net/pdf?id=hYwOhbmMej>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150510>)

_Abstract unavailable from the accessible public sources._

## Chem\-PerturBridge: a harmonized compendium of small molecule perturbation transcriptomic effects

**Authors:** Artur Szałata; Olga Novitskaia; Maiia Shulman; Matthew Mella; Altynbek Zhubanchaliyev; Fabian Theis

**ID:** 139372\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139372

[Paper](<https://openreview.net/forum?id=UFv9oyIlVq>) | [PDF](<https://openreview.net/pdf?id=UFv9oyIlVq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139372>)

Large perturbation models require training data encompassing chemical, cellular, and assay diversity\. Current transcriptomic resources for small\-molecule modeling, however, are fragmented across technologies, metadata conventions, controls, doses, and preprocessing pipelines\. We introduce Chem\-PerturBridge, a harmonized multi\-dataset resource comprising over 37k compounds, 136 cellular contexts, and 1\.25M transcriptomic samples across eight assay types, with standardized identifiers, metadata, and replicate\-aware condition\-level effects\. We use the resource to evaluate matched\-condition agreement across datasets and replicate agreement within datasets\. Matched same\-compound conditions generally show weak agreement in fine\-grained logFC rankings and magnitudes across most dataset pairs, often falling below same\-context different\-compound baselines\. In contrast, logFC direction agreement is substantially more stable and usually exceeds these baselines\. We further evaluate Chem\-PerturBridge as a pretraining resource for compound representation learning\. Under a compound\-held\-out OP3 evaluation split, embeddings pretrained on Chem\-PerturBridge improve over L1000\-only embeddings, Morgan fingerprints, and the descriptor\-free OP3 baseline across metrics\. Chem\-PerturBridge therefore supports both diagnostic evaluation of cross\-dataset signature agreement and model\-oriented reuse of heterogeneous perturbation transcriptomic data\.

## Multi\-Scale Representation Learning for Single\-Cell Multi\-Omics

**Authors:** Zhijie Zheng; Meng Lan; Fei Gu

**ID:** 150703 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g8gHNmVwmS>) | [PDF](<https://openreview.net/pdf?id=g8gHNmVwmS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150703>)

Learning unified representations from single\-cell multi\-omics data is a fundamental challenge, yet existing deep learning models often overlook the inherent hierarchical structure of biological regulation\.   In this work, we introduce scWavelet, a novel deep learning framework that leverages a multi\-scale inductive bias by learning representations in the cellular spatial\-frequency domain\.   Our approach is grounded in a heuristic approximation\-misspecification decomposition, which theoretically motivates the design of a scale\-factorized architecture\.   scWavelet employs a learnable wavelet transform to decompose omics signals into distinct scales, which are then processed by scale\-specific Omics Mixers to generate integrated latent representations\.   Extensive experiments demonstrate that scWavelet achieves state\-of\-the\-art performance on challenging multi\-omics integration and cross\-omics translation benchmarks\.   Furthermore, interpretability analyses confirm that the learned multi\-scale features effectively correspond to the biological hierarchy of cellular identity\.   Our project will be publicly available\.

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

## MutQA: A Cross\-Validated Q&amp;A Dataset for Genetic Mutations

**Authors:** Robert McCourt; Oladimeji Macaulay; David Arredondo; Luis E Tafoya; Oluoma Edeh; Kushal Virupakshappa; Yue Hu; My Nguyen Bach; Enrique A Ruiz; Shrey Poshiya; Debjani P Hudgens; Deepali Kundnani; Avinash Sahu

**ID:** 139212 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eKLNopOeto>) | [PDF](<https://openreview.net/pdf?id=eKLNopOeto>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139212>)

_Abstract unavailable from the accessible public sources._

## Encoding RNA Topology into Synthetic Alignments for 3D Structure Prediction

**Authors:** Jörg Franke; Iris K Tennie; Michael Uhl; Ryan Koksal; Dominika Matus; Dominik Scheuer; Frank Hutter; Rolf Backofen; Frederic Runge

**ID:** 153449 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LCvUtLKdYo>) | [PDF](<https://openreview.net/pdf?id=LCvUtLKdYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153449>)

_Abstract unavailable from the accessible public sources._

## Brute\-Force Jailbreaks and Codon\-Aware Watermarking for DNA Foundation Models

**Authors:** Munish B Persaud; Amrit Singh Bedi; Souradip Chakraborty

**ID:** 155344 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6JUgH59aJ1>) | [PDF](<https://openreview.net/pdf?id=6JUgH59aJ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155344>)

_Abstract unavailable from the accessible public sources._

## Darwin\-7B: A Multi\-Omic Foundation Model for the Human Gut Microbiome via Sparsified Quality\-Aware Tokenization

**Authors:** Arvid Ernst Gollwitzer; David de Gruijl

**ID:** 154713 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BYzy56EOoz>) | [PDF](<https://openreview.net/pdf?id=BYzy56EOoz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154713>)

_Abstract unavailable from the accessible public sources._

## Querying Counterfactuals on Tissue Graphs with Supervised Disentanglement

**Authors:** Abdul Moeed; Stefan Schrod; Martin Rohbeck; Marc J Bonder; Pavlo Lutsik; Oliver Stegle; Daniel Dimitrov

**ID:** 151727 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YYY27OR76u>) | [PDF](<https://openreview.net/pdf?id=YYY27OR76u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151727>)

_Abstract unavailable from the accessible public sources._

## TargetSage: Identifying Therapeutic Target Genes with Interpretable and Robust LLM Reasoning

**Authors:** Ziheng Duan; Tong Wu; Xi LI; Simon D Sun; Chaoyang Wang; Junhao Liu; Martin Min; Jing Zhang

**ID:** 152330 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TtHAAMGp59>) | [PDF](<https://openreview.net/pdf?id=TtHAAMGp59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152330>)

_Abstract unavailable from the accessible public sources._

## Preserving DEG Rankings for Gene Discovery in Histology\-Based Spatial Gene Expression Prediction

**Authors:** Kaito Shiku; Kazuya Nishimura; Yasuhiro Kojima; Ryoma Bise

**ID:** 151825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xfv1PJvBIG>) | [PDF](<https://openreview.net/pdf?id=Xfv1PJvBIG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151825>)

Predicting spatial gene expression from histology images could scale spatial transcriptomics \(ST\) to image\-only cohorts, but conventional histology\-based ST prediction is trained and evaluated mainly by per\-gene spatial\-profile reconstruction\. This objective is misaligned with a key downstream use of ST: differentially expressed gene \(DEG\) discovery, where genes are ranked for a biological or morphology\-defined contrast by evidence of between\-group expression differences\. We formulate image\-based differential expression ranking \(IDER\), which asks whether predicted expression profiles preserve the contrast\-specific ranked gene list obtained from measured profiles\. IDER compares gene rankings induced by differential\-expression statistics, rather than raw expression magnitudes or per\-gene spatial correlations\. We further introduce a differentiable IDER objective that aligns these statistics across genes and can be trained with morphology\-derived proxy contrasts without predefined biological group labels\. Experiments on public ST datasets show improved DEG\-ranking agreement and pathway\-enrichment overlap over conventional reconstruction objectives, including morphology\-derived and pathologist\-annotated tissue\-region evaluations\.

## Layout Before Pixels: Topology\-Anchored Transcriptome\-to\-Histology Generation

**Authors:** Jianwei Zhao; Xin Li; Fan Yang; Qiang Zhai; Ao Luo; Hong Cheng

**ID:** 152155\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152155

[Paper](<https://openreview.net/forum?id=V7ybz9CSNM>) | [PDF](<https://openreview.net/pdf?id=V7ybz9CSNM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152155>)

Transcriptome\-conditioned whole\-slide image \(WSI\) synthesis aims to decode the complex mapping from molecular states to histologic phenotypes\. Existing generative paradigms predominantly rely on a direct black\-box transcriptome\-to\-image mapping, tasking a single generator with the simultaneous interpretation of transcriptome signals, inference of multicellular spatial organization, and rendering of fine\-grained textures\. This formulation, however, is structurally under\-constrained; the underlying tissue architecture, the critical substrate linking gene expression to morphology, remains latent and only weakly supervised by pixel\-level objectives\. We present \\textsc\{TopoScape\}, a topology\-anchored framework for transcriptome\-to\-histology generation under a \\emph\{Layout\-Before\-Pixels\} principle\. Instead of synthesizing pixels directly from transcriptomic embeddings, \\textsc\{TopoScape\} first resolves molecular states into explicit, multi\-class cellular topologies via an RNA\-guided Topological Prior Generator, reinforced by persistence\-based topological regularization\. These resolved topologies are further reparameterized into a suite of topology\-derived controls, including structure\-aware initialization, continuous density fields, and distance representations, which guide a hierarchical, frequency\-decoupled flow\-matching trajectory\. By introducing multicellular organization as an explicit structural mediator, \\textsc\{TopoScape\} allows molecular states to deterministically shape both the macroscopic tissue architecture and the microscopic generative process\. Across five TCGA benchmarks, \\textsc\{TopoScape\} consistently outperforms state\-of\-the\-art methods in generative fidelity, biological realism, and downstream predictive utility\. Code and pretrained models will be released\.

## PACE: Geometry\-Aware Bridge Transport for Single\-Cell Trajectory Inference

**Authors:** Chenglei Yu; Chuanrui Wang; Bangyan Liao; Tailin Wu

**ID:** 155854\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155854

[Paper](<https://openreview.net/forum?id=2PQtt7QLHJ>) | [PDF](<https://openreview.net/pdf?id=2PQtt7QLHJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155854>)

Single\-cell trajectory inference from destructive time\-course snapshots is fundamentally ill\-posed: neither cross\-time cell correspondences nor the continuous paths between snapshots are observed, so the observed snapshot distributions alone do not uniquely determine the underlying dynamics\.  Existing optimal transport and flow\-based methods typically couple cells by Euclidean proximity at observed clock times, which can misalign trajectories when development is asynchronous and cells sampled at the same experimental time occupy different latent pseudotime stages\.  We propose PACE, a trajectory inference framework that selects geometry\-consistent continuous transport dynamics from destructive time\-course snapshots through three coupled components\. First, PACE constructs a state\- and time\-dependent anisotropic Riemannian metric that preserves low cost along locally supported tangent directions while penalizing normal velocity components\. Second, it alternates between refining cross\-time couplings under the induced path\-action cost and fitting endpoint\-preserving neural bridges between adjacent snapshots\. Third, it distills the learned bridge dynamics into a global continuous\-time velocity field over cellular states\. Across seven controlled and biological datasets covering nine held\-out reconstruction experiments, PACE achieves the strongest overall reconstruction performance, reducing MMD, $\\mathcal\{W\}\_1$, and $\\mathcal\{W\}\_2$ by 23\.7\\% on average relative to the strongest competing baseline\. PACE also improves RNA\-velocity alignment by 15\.4\\% on an embryoid body differentiation benchmark, without requiring explicit cell pairing, lineage tracing, or RNA velocity supervision during training\. Code is available at \\url\{https://anonymous\.4open\.science/r/PACE\-F444/\}\.

## Spectral Adaptive Repositioning for Flow\-Based Single\-Cell Perturbation Modeling

**Authors:** Shourya Verma; Mengbo Wang; Simran Kadadi; Shahin Mohammadi; Nadia Lanman; Ananth Grama

**ID:** 152050 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VsHXKYG0Sq>) | [PDF](<https://openreview.net/pdf?id=VsHXKYG0Sq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152050>)

Predicting transcriptome\-wide cellular responses to genetic and biomolecular perturbations is central to functional genomics and therapeutic target discovery\. Existing methods assign gene positional encodings derived from arbitrary orderings or static co\-expression masks built from unperturbed cells, and cannot capture the functional rewiring induced by perturbations\. We present SPEAR, a generative framework built on two complementary positional mechanisms\. Spectral positional encoding grounds each gene's position in the geometry of the co\-expression network via continuous coordinates derived from the graph Laplacian\. Adaptive repositioning then derives each gene's position from its perturbation\-conditioned hidden state at every layer, allowing the attention genes exert on one another to reorganize without explicit supervision\. Evaluated on genetic, pharmacological, and cytokine perturbation benchmarks, SPEAR demonstrates excellent recovery of differential gene\-expression, distributional structure, and perturbation\-specific identifiability\. SPEAR also captures latent positional relationships that closely map to known transcription factor\-target interactions\.

## sMMC\-22M: A Context\-Aware Dataset and Benchmark for Single\-Cell Spatial Transcriptomics

**Authors:** Xi LI; Yaqi Hu; Ziheng Duan; Xinyi Wang; Simon D Sun; Diptanshu Sikdar; Yang Liu; Jing Zhang

**ID:** 153914\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153914

[Paper](<https://openreview.net/forum?id=Hk85ZGSGbQ>) | [PDF](<https://openreview.net/pdf?id=Hk85ZGSGbQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153914>)

Spatial transcriptomics has created a compelling opportunity to test whether tissue morphology can predict molecular state, but existing benchmarks are constrained by limited scale, spot\-level supervision, and incomplete biological context\. We present sMMC\-22M, a cell\-aligned multimodal resource comprising over 20 mil\- lion cells across 25 organ categories, 66 studies, and multiple spatial\-transcriptomic assays\. We organize the benchmark around three data\-centric axes that determine whether histology\-to\-molecular modeling can move beyond local interpolation\. First, sMMC\-22M provides scale: broad organ and study coverage enables con\- trolled encoder benchmarking and reveals a scaling trend in which larger pathology foundation models improve morphology–gene correspondence under matched evaluation\. Second, sMMC\-22M provides resolution: by decomposing assays into aligned cell\-level records, our framework converts spot\-level histology–omics pipelines into single\-cell predictors and evaluates them under strict in\-domain and cross\-patient splits\. Third, sMMC\-22M provides rich context: each cell is paired with spatial, molecular, and sample\-level metadata, allowing analyses such as age\-band shift in ovarian samples, where age\-mismatched transfer sharply reduces prediction quality despite misleading global\-distance summaries\. Together, sMMC\- 22M and STBoost establish a practical framework for single\-cell histology\-to\-gene prediction while showing that robust generalization still depends on scale, cellular resolution, and explicit biological context\.

## GeneZip: Region\-Aware Compression for Long Context DNA Modeling

**Authors:** Jianan Zhao; Xixian Liu; Zhihao Zhan; XINYU YUAN; Hongyu Guo; Jian Tang

**ID:** 154372\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154372

[Paper](<https://openreview.net/forum?id=E37ysCRa5d>) | [PDF](<https://openreview.net/pdf?id=E37ysCRa5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154372>)

Long\-context DNA models are limited by token\-mixing cost and by how compression allocates representational budget across the genome\. Existing approaches operate close to base\-pair resolution, apply fixed downsampling, or learn content\-dependent chunks without an explicit genomic budget, making long\-context pretraining expensive and difficult to control\. We introduce GeneZip, a region\-aware DNA compression framework that combines H\-Net\-style dynamic routing with a Region\-Aware Ratio \(RAR\) objective and bounded routing\. GeneZip uses static gene\-structure annotations during compression training to specify region\-wise base\-pairs\-per\-token \(BPT\) targets; at inference time, it compresses raw unseen DNA without annotations\. GeneZip provides three main benefits\. First, it is effective: GeneZip variants achieve the best validation PPL among encoder\-based compressors, with GeneZip\-70M already operating at 137\.6 BPT, and across four reproducible DNALongBench tasks\-\-\-contact map prediction, eQTL prediction, enhancer\-\-target gene prediction, and transcription\-initiation signal prediction\-\-\-GeneZip obtains the best average rank among compared sequence models\. Second, it is redundancy\-aware: a post\-hoc RepeatMasker/TRF analysis shows that, without repeat supervision, GeneZip assigns higher local BPT to TE\-derived interspersed repeats and tandem repeats, two major classes of repetitive DNA sequence redundancy\. Third, it is efficient: by reducing the effective token\-mixing length, GeneZip enables longer\-context and larger\-capacity pretraining, including 128K\-context and 636M\-parameter variants on a single A100 80GB GPU, and fine\-tunes the eQTL task 50\.4$\\times$ faster than JanusDNA \(50 vs\. 2520 minutes\)\. These results establish GeneZip as an effective, redundancy\-aware, and efficient compression interface for long\-context DNA modeling\.

## Plausibility Is Not Prediction: Contrastive Evidence for LLM\-Based Cellular Perturbation Reasoning

**Authors:** XINYU YUAN; Xixian Liu; Jianan Zhao; Ya Shi Zhang; Hongyu Guo; Jian Tang

**ID:** 152410\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152410

[Paper](<https://openreview.net/forum?id=TK0wNbf8IH>) | [PDF](<https://openreview.net/pdf?id=TK0wNbf8IH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152410>)

Perturbation experiments are central to understanding cellular mechanisms, but remain costly and sparse, motivating prediction of gene expression responses for unobserved conditions\.  A promising recent direction leverages large language models \(LLMs\) as “virtual cell” simulators—using stepwise, knowledge\-grounded mechanistic reasoning to infer differential expression—pointing toward an interpretable, knowledge\-driven paradigm that transcends purely data\-driven approaches\.  However, we find that plausibility is not prediction: despite producing biologically plausible explanations, these methods fail to capture perturbation\-specific effects —  systematically overestimating differential expression, often underperforming  a simple gene‑frequency baseline in aggregate evaluations, and collapsing to chance\-level performance at the per\-gene level\. This reveals a reliance  on intrinsic gene response tendencies rather than true perturbation reasoning\. We trace this failure to how evidence is presented: existing methods evaluate perturbation–gene pairs in isolation, without exposing how related perturbations differ in their effects on the same gene\.  To address this limitation,  we introduce \*\*CORE\*\* \(\*\*C\*\*ontrastive \*\*O\*\*rganization of \*\*R\*\*elational \*\*E\*\*vidence\), which reframes prediction as a comparison task by organizing evidence into positive and negative outcomes from related perturbations\. Using a biomedical knowledge graph for evidence retrieval, CORE improves calibration and substantially boosts  perturbation\-specific prediction in both LLM\-based and non\-LLM settings: for example, on drug\-perturbation data, CORE\-Reasoning improves Qwen3\.5\-9B aggregate metrics by up to 28\.6\\%, while on generic perturbation data, CORE\-Voting raises macro\-per\-gene AUROC from chance to 0\.711\. This highlights contrastive evidence organization as essential  to reliable LLM\-based perturbation reasoning\.

## UGM: Unified Multi\-scale Genomic Event Modeling with Site\-level Joint Prediction

**Authors:** Jiayang Wu; Chenchen Qin; Xu YANG; Yu Zhao; Bing He; Jiale Zhou; Zhenchao Tang; Minghao Yang; Shou Z Chen; Yefeng Zheng; Jianhua Yao

**ID:** 149432 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q6nsrhSGij>) | [PDF](<https://openreview.net/pdf?id=q6nsrhSGij>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149432>)

Genomic events span multiple spatial scales, from single\-nucleotide substitutions to large structural variants, yet existing foundation models process only reference DNA sequences, leaving methylation, short variants, and structural\-variant boundaries as downstream labels or auxiliary inputs\. We propose the Unified Genomic Model \(UGM\), an encoder\-only genomic foundation model that learns multi\-scale genomic events as native tokens within a unified 43\-token vocabulary\. UGM introduces three algorithmic components: \(i\) a unified event tokenizer that maps reference bases, SNPs, CpG methylation, short INDELs, and structural\-variant boundaries into a single event\-state space; \(ii\) event\-balanced pretraining, which promotes adequate gradient coverage for rare but biologically important events; and \(iii\) Site\-Level Joint Prediction \(SJP\), a masked\-language\-modeling objective that recovers the complete genomic state at a masked position as a single token rather than predicting base, methylation, and variant labels independently\. We evaluate UGM against specialized and generalist baselines across functional variant classification, regulatory benchmarks \(NT and GUE\), structural\-variant detection, and cross\-event attention analysis\. UGM achieves competitive performance, particularly on tasks where explicit event\-state information is central\. It obtains the highest score on all seven functional variant tasks, reaches competitive splicing prediction on NT, and notably outperforms DNA\-only baselines on SV breakpoint detection\. These results suggest that native multi\-scale event pretraining is a promising direction for genomic representation learning\.

## Breaking the Synthesis Barrier for AI\-Designed DNA Libraries

**Authors:** Scott Sussex; Ema Borevković; Frederieke Lohmann; Ningning Chen; Elena Luethi; Sai Reddy; Andreas Krause

**ID:** 150360 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=if6zG3AZ0k>) | [PDF](<https://openreview.net/pdf?id=if6zG3AZ0k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150360>)

_Abstract unavailable from the accessible public sources._

## Guarding the Life Code: Preserving Membership Privacy in Genomic Foundation Models

**Authors:** Xinyu Zhao; Jinhao Duan; Zhen Tan; Tianlong Chen

**ID:** 155025 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=96HcSezVOS>) | [PDF](<https://openreview.net/pdf?id=96HcSezVOS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155025>)

_Abstract unavailable from the accessible public sources._

## Where Tabular Foundation Models Falter on Genetic Data: Datasets That Expose and Provide a Path to Address the Gap

**Authors:** ANIRBAN DAS; Yan Cui

**ID:** 139799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3qspmxVnC1>) | [PDF](<https://openreview.net/pdf?id=3qspmxVnC1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139799>)

Tabular foundation models are used as off\-the\-shelf predictors for heterogeneous tabular tasks, but it remains unclear how they will perform on real genotype\-to\-phenotype tabular datasets, which carry unique challenges\. One such challenge is ancestry\-dependent non\-stationarity in allele effect sizes \(the effects of genetic variation on disease risk\): the predictive contribution of a given genetic variant may change significantly across the ancestry spectrum\. This is especially consequential for patients from ancestry groups that are underrepresented in existing datasets, because models that are unaware of this non\-stationarity are more likely to perform poorly for them\. The battery of synthetic tasks used to pretrain tabular foundation models does not capture this structure, and we show that it leads to systematic performance degradation\. Using controlled hierarchical Gaussian\-process stress tests, we demonstrate that both off\-the\-shelf TabICL and TabPFN are robust when ancestry dispersion in the data is low, but as dispersion grows, the latent ancestry\-dependent non\-stationarity of effect sizes becomes a first\-order problem, and the predictive performance of both models deteriorates\. We confirm the same pattern on All of Us \(AoU\) \(a large biobank containing whole\-genome sequencing and electronic health record \(EHR\) data spanning the ancestry spectrum\) across an extensive panel of cancer phenotypes evaluated with the two leading tabular foundation models: TabICL and TabPFN\. Holding the in\-context training\-set size, phenotype, and feature set fixed, ancestry\-specific in\-context tables, which are less dispersed in ancestry space, consistently outperform size\-matched meta\-ancestry tables, isolating ancestry dispersion as the driver of degradation\. To address the failure without changing the base architecture, we construct two synthetic task families that explicitly encode ancestry\-dependent effect drift and instruction\-tune an off\-the\-shelf TabICL model on tasks sampled across both families\. On held\-out AoU evaluations covering cancer and respiratory disease phenotypes, the tuned model yields more stable performance across ancestry\-distance bins and is especially strong in the bins farthest from the center of the in\-context exemplars in ancestry space, that is, on subjects whose ancestry is most underrepresented among the provided exemplars\. The paper contributes an evaluation protocol, a failure analysis, and two synthetic task families targeted at ancestry\-dependent non\-stationarity in precision\-medicine tabular modeling\.

## TANGO: RNA Topology and Geometry Co\-Design

**Authors:** Tianmeng Hu; Biao Luo; Ke Li

**ID:** 148551 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x2wRR40pPx>) | [PDF](<https://openreview.net/pdf?id=x2wRR40pPx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148551>)

_Abstract unavailable from the accessible public sources._

## REFLEX: RNA Ensemble Generation via Flexibility\-Calibrated Stochastic Bridge

**Authors:** Wanli Ma; Tianmeng Hu; Ke Li

**ID:** 148483 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xU2H2ucSmF>) | [PDF](<https://openreview.net/pdf?id=xU2H2ucSmF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148483>)

_Abstract unavailable from the accessible public sources._

## scMAF: Single\-Cell Multi\-Omics Clustering via Adaptive Modality Fusion

**Authors:** Jun Fu; Yiding Lu; Ruohong Yang; Xi Peng; Yunfan Li

**ID:** 153965 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HAcmGGgXow>) | [PDF](<https://openreview.net/pdf?id=HAcmGGgXow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153965>)

_Abstract unavailable from the accessible public sources._

## Layout Before Pixels: Topology\-Anchored Transcriptome\-to\-Histology Generation

**Authors:** Jianwei Zhao; Xin Li; Fan Yang; Qiang Zhai; Ao Luo; Hong Cheng

**ID:** 152155\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152155

[Paper](<https://openreview.net/forum?id=V7ybz9CSNM>) | [PDF](<https://openreview.net/pdf?id=V7ybz9CSNM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152155>)

Transcriptome\-conditioned whole\-slide image \(WSI\) synthesis aims to decode the complex mapping from molecular states to histologic phenotypes\. Existing generative paradigms predominantly rely on a direct black\-box transcriptome\-to\-image mapping, tasking a single generator with the simultaneous interpretation of transcriptome signals, inference of multicellular spatial organization, and rendering of fine\-grained textures\. This formulation, however, is structurally under\-constrained; the underlying tissue architecture, the critical substrate linking gene expression to morphology, remains latent and only weakly supervised by pixel\-level objectives\. We present \\textsc\{TopoScape\}, a topology\-anchored framework for transcriptome\-to\-histology generation under a \\emph\{Layout\-Before\-Pixels\} principle\. Instead of synthesizing pixels directly from transcriptomic embeddings, \\textsc\{TopoScape\} first resolves molecular states into explicit, multi\-class cellular topologies via an RNA\-guided Topological Prior Generator, reinforced by persistence\-based topological regularization\. These resolved topologies are further reparameterized into a suite of topology\-derived controls, including structure\-aware initialization, continuous density fields, and distance representations, which guide a hierarchical, frequency\-decoupled flow\-matching trajectory\. By introducing multicellular organization as an explicit structural mediator, \\textsc\{TopoScape\} allows molecular states to deterministically shape both the macroscopic tissue architecture and the microscopic generative process\. Across five TCGA benchmarks, \\textsc\{TopoScape\} consistently outperforms state\-of\-the\-art methods in generative fidelity, biological realism, and downstream predictive utility\. Code and pretrained models will be released\.

## PACE: Geometry\-Aware Bridge Transport for Single\-Cell Trajectory Inference

**Authors:** Chenglei Yu; Chuanrui Wang; Bangyan Liao; Tailin Wu

**ID:** 155854\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155854

[Paper](<https://openreview.net/forum?id=2PQtt7QLHJ>) | [PDF](<https://openreview.net/pdf?id=2PQtt7QLHJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155854>)

Single\-cell trajectory inference from destructive time\-course snapshots is fundamentally ill\-posed: neither cross\-time cell correspondences nor the continuous paths between snapshots are observed, so the observed snapshot distributions alone do not uniquely determine the underlying dynamics\.  Existing optimal transport and flow\-based methods typically couple cells by Euclidean proximity at observed clock times, which can misalign trajectories when development is asynchronous and cells sampled at the same experimental time occupy different latent pseudotime stages\.  We propose PACE, a trajectory inference framework that selects geometry\-consistent continuous transport dynamics from destructive time\-course snapshots through three coupled components\. First, PACE constructs a state\- and time\-dependent anisotropic Riemannian metric that preserves low cost along locally supported tangent directions while penalizing normal velocity components\. Second, it alternates between refining cross\-time couplings under the induced path\-action cost and fitting endpoint\-preserving neural bridges between adjacent snapshots\. Third, it distills the learned bridge dynamics into a global continuous\-time velocity field over cellular states\. Across seven controlled and biological datasets covering nine held\-out reconstruction experiments, PACE achieves the strongest overall reconstruction performance, reducing MMD, $\\mathcal\{W\}\_1$, and $\\mathcal\{W\}\_2$ by 23\.7\\% on average relative to the strongest competing baseline\. PACE also improves RNA\-velocity alignment by 15\.4\\% on an embryoid body differentiation benchmark, without requiring explicit cell pairing, lineage tracing, or RNA velocity supervision during training\. Code is available at \\url\{https://anonymous\.4open\.science/r/PACE\-F444/\}\.

## Spectral Adaptive Repositioning for Flow\-Based Single\-Cell Perturbation Modeling

**Authors:** Shourya Verma; Mengbo Wang; Simran Kadadi; Shahin Mohammadi; Nadia Lanman; Ananth Grama

**ID:** 152050\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152050

[Paper](<https://openreview.net/forum?id=VsHXKYG0Sq>) | [PDF](<https://openreview.net/pdf?id=VsHXKYG0Sq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152050>)

Predicting transcriptome\-wide cellular responses to genetic and biomolecular perturbations is central to functional genomics and therapeutic target discovery\. Existing methods assign gene positional encodings derived from arbitrary orderings or static co\-expression masks built from unperturbed cells, and cannot capture the functional rewiring induced by perturbations\. We present SPEAR, a generative framework built on two complementary positional mechanisms\. Spectral positional encoding grounds each gene's position in the geometry of the co\-expression network via continuous coordinates derived from the graph Laplacian\. Adaptive repositioning then derives each gene's position from its perturbation\-conditioned hidden state at every layer, allowing the attention genes exert on one another to reorganize without explicit supervision\. Evaluated on genetic, pharmacological, and cytokine perturbation benchmarks, SPEAR demonstrates excellent recovery of differential gene\-expression, distributional structure, and perturbation\-specific identifiability\. SPEAR also captures latent positional relationships that closely map to known transcription factor\-target interactions\.

## Chem\-PerturBridge: a harmonized compendium of small molecule perturbation transcriptomic effects

**Authors:** Artur Szałata; Olga Novitskaia; Maiia Shulman; Matthew Mella; Altynbek Zhubanchaliyev; Fabian Theis

**ID:** 139372\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139372

[Paper](<https://openreview.net/forum?id=UFv9oyIlVq>) | [PDF](<https://openreview.net/pdf?id=UFv9oyIlVq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139372>)

Large perturbation models require training data encompassing chemical, cellular, and assay diversity\. Current transcriptomic resources for small\-molecule modeling, however, are fragmented across technologies, metadata conventions, controls, doses, and preprocessing pipelines\. We introduce Chem\-PerturBridge, a harmonized multi\-dataset resource comprising over 37k compounds, 136 cellular contexts, and 1\.25M transcriptomic samples across eight assay types, with standardized identifiers, metadata, and replicate\-aware condition\-level effects\. We use the resource to evaluate matched\-condition agreement across datasets and replicate agreement within datasets\. Matched same\-compound conditions generally show weak agreement in fine\-grained logFC rankings and magnitudes across most dataset pairs, often falling below same\-context different\-compound baselines\. In contrast, logFC direction agreement is substantially more stable and usually exceeds these baselines\. We further evaluate Chem\-PerturBridge as a pretraining resource for compound representation learning\. Under a compound\-held\-out OP3 evaluation split, embeddings pretrained on Chem\-PerturBridge improve over L1000\-only embeddings, Morgan fingerprints, and the descriptor\-free OP3 baseline across metrics\. Chem\-PerturBridge therefore supports both diagnostic evaluation of cross\-dataset signature agreement and model\-oriented reuse of heterogeneous perturbation transcriptomic data\.

## GeneZip: Region\-Aware Compression for Long Context DNA Modeling

**Authors:** Jianan Zhao; Xixian Liu; Zhihao Zhan; XINYU YUAN; Hongyu Guo; Jian Tang

**ID:** 154372\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154372

[Paper](<https://openreview.net/forum?id=E37ysCRa5d>) | [PDF](<https://openreview.net/pdf?id=E37ysCRa5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154372>)

Long\-context DNA models are limited by token\-mixing cost and by how compression allocates representational budget across the genome\. Existing approaches operate close to base\-pair resolution, apply fixed downsampling, or learn content\-dependent chunks without an explicit genomic budget, making long\-context pretraining expensive and difficult to control\. We introduce GeneZip, a region\-aware DNA compression framework that combines H\-Net\-style dynamic routing with a Region\-Aware Ratio \(RAR\) objective and bounded routing\. GeneZip uses static gene\-structure annotations during compression training to specify region\-wise base\-pairs\-per\-token \(BPT\) targets; at inference time, it compresses raw unseen DNA without annotations\. GeneZip provides three main benefits\. First, it is effective: GeneZip variants achieve the best validation PPL among encoder\-based compressors, with GeneZip\-70M already operating at 137\.6 BPT, and across four reproducible DNALongBench tasks\-\-\-contact map prediction, eQTL prediction, enhancer\-\-target gene prediction, and transcription\-initiation signal prediction\-\-\-GeneZip obtains the best average rank among compared sequence models\. Second, it is redundancy\-aware: a post\-hoc RepeatMasker/TRF analysis shows that, without repeat supervision, GeneZip assigns higher local BPT to TE\-derived interspersed repeats and tandem repeats, two major classes of repetitive DNA sequence redundancy\. Third, it is efficient: by reducing the effective token\-mixing length, GeneZip enables longer\-context and larger\-capacity pretraining, including 128K\-context and 636M\-parameter variants on a single A100 80GB GPU, and fine\-tunes the eQTL task 50\.4$\\times$ faster than JanusDNA \(50 vs\. 2520 minutes\)\. These results establish GeneZip as an effective, redundancy\-aware, and efficient compression interface for long\-context DNA modeling\.

## Plausibility Is Not Prediction: Contrastive Evidence for LLM\-Based Cellular Perturbation Reasoning

**Authors:** XINYU YUAN; Xixian Liu; Jianan Zhao; Ya Shi Zhang; Hongyu Guo; Jian Tang

**ID:** 152410\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152410

[Paper](<https://openreview.net/forum?id=TK0wNbf8IH>) | [PDF](<https://openreview.net/pdf?id=TK0wNbf8IH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152410>)

Perturbation experiments are central to understanding cellular mechanisms, but remain costly and sparse, motivating prediction of gene expression responses for unobserved conditions\.  A promising recent direction leverages large language models \(LLMs\) as “virtual cell” simulators—using stepwise, knowledge\-grounded mechanistic reasoning to infer differential expression—pointing toward an interpretable, knowledge\-driven paradigm that transcends purely data\-driven approaches\.  However, we find that plausibility is not prediction: despite producing biologically plausible explanations, these methods fail to capture perturbation\-specific effects —  systematically overestimating differential expression, often underperforming  a simple gene‑frequency baseline in aggregate evaluations, and collapsing to chance\-level performance at the per\-gene level\. This reveals a reliance  on intrinsic gene response tendencies rather than true perturbation reasoning\. We trace this failure to how evidence is presented: existing methods evaluate perturbation–gene pairs in isolation, without exposing how related perturbations differ in their effects on the same gene\.  To address this limitation,  we introduce \*\*CORE\*\* \(\*\*C\*\*ontrastive \*\*O\*\*rganization of \*\*R\*\*elational \*\*E\*\*vidence\), which reframes prediction as a comparison task by organizing evidence into positive and negative outcomes from related perturbations\. Using a biomedical knowledge graph for evidence retrieval, CORE improves calibration and substantially boosts  perturbation\-specific prediction in both LLM\-based and non\-LLM settings: for example, on drug\-perturbation data, CORE\-Reasoning improves Qwen3\.5\-9B aggregate metrics by up to 28\.6\\%, while on generic perturbation data, CORE\-Voting raises macro\-per\-gene AUROC from chance to 0\.711\. This highlights contrastive evidence organization as essential  to reliable LLM\-based perturbation reasoning\.

## Search, Edit, and Fold: LLM\-Guided MSA Optimization for Protein Conformation Prediction

**Authors:** Yu Pei; Jiangtao Feng; Hao Wang; Dongyu Xue; Keyue Qiu; Hao Zhou; Wei\-Ying Ma

**ID:** 151506\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151506

[Paper](<https://openreview.net/forum?id=a9KmZH0v3a>) | [PDF](<https://openreview.net/pdf?id=a9KmZH0v3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151506>)

Accurately identifying alternative protein conformations remains a fundamental challenge, particularly when functionally relevant states are encoded by sparse evolutionary signals within large multiple sequence alignments \(MSAs\)\.  In this work, we reformulate protein conformation prediction as a combinatorial search problem in MSA space, shifting the focus from structure divergence to evolutionary information discovery\.  We introduce \*\*MSA\-Evolver\*\*, a optimization framework that  enabling LLM with direct manipulation and iterative exploration of MSAs\. Specifically, MSA\-Evolver introduces a unified action space for MSA editing together with a feedback\-guided multi\-step reasoning strategy that allows the language model to progressively explore, evaluate, and refine candidate MSAs based on historical search trajectories\. Our framework efficiently identifies informative sub\-MSAs under limited folding budgets and substantially improves the prediction accuracy of alternative conformations, including open\-closed, inward\-outward, apo\-holo, fold\-switching, and intrinsically disordered proteins\.

## scTrilemma: Balancing Identity, Invariance, and Reconstruction in Single\-Cell Representation Learning

**Authors:** Yunhak Oh; Yoonho Lee; Junseok Lee; Namkyeong Lee; Sang\-Yeon Hwang; Yinhua Piao; Hyomin Kim; SEONGHWAN KIM; Jaechang Lim; Woo Youn Kim; Sungsoo Ahn; Chanyoung Park

**ID:** 152153\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152153

[Paper](<https://openreview.net/forum?id=V8h1VhYtud>) | [PDF](<https://openreview.net/pdf?id=V8h1VhYtud>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152153>)

Single\-cell RNA\-seq representation learning is inherently label\-free: cell identities, states, and tissue contexts are typically discovered through analysis rather than provided as target labels during training\. As a result, the evaluated cell embedding must balance competing demands, which we refer to as the \*representation trilemma\*: it should preserve biological identity, avoid encoding collection effects as cell identity, and retain expression information needed for reconstruction\. We introduce \*\*scTrilemma\*\*, a latent\-bottleneck VAE that tests whether simple expression\-derived routing can manage this trilemma without cell\-level annotations, metadata\-derived supervision, auxiliary representation losses, or specialized disentanglement modules\. \*\*scTrilemma\*\* combines expression\-gated gene encoding, cell\-representation routing through the decoder, and pseudo\-bulk prior conditioning under a single reconstruction objective\. In release\-based zero\-shot evaluation on successive CZ CELLxGENE Census releases, \*\*scTrilemma\*\* improves batch\-effect removal while preserving biological identity, retains marker\-program and biologically meaningful tissue\-context structure in the evaluated embedding, and better preserves differential\-expression and pathway structure through reconstruction; ablations support burden allocation as the source of these gains\.

## Multi\-Scale Representation Learning for Single\-Cell Multi\-Omics

**Authors:** Zhijie Zheng; Meng Lan; Fei Gu

**ID:** 150703\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150703

[Paper](<https://openreview.net/forum?id=g8gHNmVwmS>) | [PDF](<https://openreview.net/pdf?id=g8gHNmVwmS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150703>)

Learning unified representations from single\-cell multi\-omics data is a fundamental challenge, yet existing deep learning models often overlook the inherent hierarchical structure of biological regulation\.   In this work, we introduce scWavelet, a novel deep learning framework that leverages a multi\-scale inductive bias by learning representations in the cellular spatial\-frequency domain\.   Our approach is grounded in a heuristic approximation\-misspecification decomposition, which theoretically motivates the design of a scale\-factorized architecture\.   scWavelet employs a learnable wavelet transform to decompose omics signals into distinct scales, which are then processed by scale\-specific Omics Mixers to generate integrated latent representations\.   Extensive experiments demonstrate that scWavelet achieves state\-of\-the\-art performance on challenging multi\-omics integration and cross\-omics translation benchmarks\.   Furthermore, interpretability analyses confirm that the learned multi\-scale features effectively correspond to the biological hierarchy of cellular identity\.   Our project will be publicly available\.

## Deep Generative Models for Phylogenetic Inference with Complex Evolutionary Processes

**Authors:** Ethan Baron; Alan Amin; Andrew Wilson

**ID:** 151547\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151547

[Paper](<https://openreview.net/forum?id=ZpGlbpubQi>) | [PDF](<https://openreview.net/pdf?id=ZpGlbpubQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151547>)

Phylogenetic inference plays a central role in understanding evolutionary relationships, with applications ranging from tracking pathogen spread to reconstructing the history of life\. Conventionally, practitioners obtain posteriors over the phylogenetic tree of species using MCMC methods\.  However, such likelihood\-based methods are only tractable for simple evolutionary models with restrictive assumptions\.  For more complex and realistic evolutionary models, conventional methods are prohibitively expensive, inaccurate, or even impossible\. We instead advocate for a simulation\-based inference approach, by using simulated data from an evolutionary model to train a neural network that predicts tree topologies conditioned on sequences\. To accurately represent the complex posterior distributions over tree topologies that can arise, we present flexible models that iteratively generate trees using three natural paradigms: top\-down, middle\-out, and bottom\-up\. We use a discrete diffusion framework to train these models efficiently on large\-scale simulated datasets of phylogenetic trees\. For all three generative paradigms, our models fit the data substantially better than the previous state\-of\-the\-art simulation\-based method, Phyloformer 2, and obtain more accurate posteriors on real datasets\. Finally, our models outperform misspecified conventional methods on data following complex evolutionary processes\.

## Curriculum Multiple Shooting for Robust Training of Neural and Universal Differential Equations

**Authors:** Sebastian Persson; Giacomo Fabrini; Branwen Snelling; Fabian Fröhlich

**ID:** 153849\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153849

[Paper](<https://openreview.net/forum?id=IHtSSNfqdx>) | [PDF](<https://openreview.net/pdf?id=IHtSSNfqdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153849>)

Neural ordinary differential equations \(NODEs\) and universal differential equations \(UDEs\) provide flexible and popular frameworks for learning interpretable dynamical systems from noisy time\-series data\. However, training these models remains challenging, and versatile methods that robustly handle sparse and noisy data as well as partially observed models are lacking\. To address this, we introduce curriculum multiple shooting \(CMS\), a general\-purpose training strategy for fitting ordinary differential equation \(ODE\) models to time\-series data by integrating curriculum learning with multiple shooting\. Across twelve benchmarks spanning simulated and real data, and covering NODEs, UDEs, and mechanistic ODEs, CMS accelerates and stabilises training convergence, outperforms state\-of\-the\-art training strategies, and ranks among the best methods in generalisation\. Finally, we discuss possible explanations for the strong performance of CMS in light of contemporary theories of what makes training on time\-series challenging\.

## Measure\-to\-measure Regression with Transformers

**Authors:** Matthew Vandergrift; Martha White; Yury Polyanskiy; Philippe Rigollet; Lazar Atanackovic

**ID:** 153179\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153179

[Paper](<https://openreview.net/forum?id=NDf3Nc1J2Y>) | [PDF](<https://openreview.net/pdf?id=NDf3Nc1J2Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153179>)

Many learning problems require predicting how populations evolve under an unknown transformation\. A natural representation for such populations is a probability measure, with point clouds as a key example\. In this work, we study the \*\*measure\-to\-measure regression \(M2M\)\*\* problem, in which one seeks to learn a map between probability measures from a finite collection of observed input\-\-output pairs\. In contrast to classical regression, where individual samples are transformed independently, M2M regression treats entire distributions as the data points\. This perspective is vital in certain scientific applications, for example, cellular and molecular biology, where cells are known to evolve not as independent data points but as a distribution\. However, few existing approaches address the problem of M2M regression with sufficient expressivity and scalability\. We present a formalization of \_nonlinear\_ M2M regression and introduce two simple, expressive, and scalable approaches to learn such operators: transformers as \*\*static\*\* M2M maps and transformers as \*\*dynamic\*\* M2M velocity fields\. Our approach leverages the natural measure\-dependent and mean\-field structure of transformers to learn nonlinear M2M maps on the space of probability distributions\. We illustrate the effectiveness of our proposed method to generalize to \*unseen\* measures on synthetic experiments, canonical interacting particle systems, and a large\-scale patient\-derived organoid dataset for predicting treatment response in colorectal cancer\.

## On the Recoverability of Causal Relations from Bulk Gene Expression Data

**Authors:** Gongxu Luo; Boyang Sun; Kun Zhang

**ID:** 149548\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149548

[Paper](<https://openreview.net/forum?id=pKBv1h4LAZ>) | [PDF](<https://openreview.net/pdf?id=pKBv1h4LAZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149548>)

Bulk gene expression profiling, which aggregates pooled RNA across cells within a biological sample, remains important in the single\-cell era because it is typically less noisy, more sensitive, and more cost\-effective than single\-cell assays\. Accordingly, a growing body of computational methods seeks to recover causal relations among genes from bulk expression data\. However, aggregation is a lossy, non\-invertible coarsening of the underlying cellular system, and it remains unclear whether and under what conditions causal relations are recoverable from aggregated bulk gene expression data\. To answer this, we formalize recoverability under aggregation through two notions of consistency: functional\-form consistency and conditional\-independence consistency\. We then derive necessary and sufficient conditions for recoverability, showing that these properties are preserved only under linear aggregations \(e\.g\., sum/mean\) coupled with affine structural equations\. To assess the practical plausibility of these conditions, analyses of four bulk and four single\-cell gene expression datasets further reveal that the estimated pairwise regulatory functions among genes deviate from linearity in both data types, providing limited empirical support for the linearity assumptions required for recoverability\. Together, these results caution against recovering causal relations from aggregated bulk expression data without strong additional assumptions\.

## Designing Cell\-Type\-Specific Regulatory DNA with Guided Discrete Diffusion

**Authors:** Animesh Awasthi; Martin Stoll; Raphael Bednarsky; Moritz Schaefer; Christoph Bock

**ID:** 155302\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155302

[Paper](<https://openreview.net/forum?id=6b9Jl5EC4r>) | [PDF](<https://openreview.net/pdf?id=6b9Jl5EC4r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155302>)

Designing regulatory DNA with cell\-type\-specific activity is broadly relevant for cell engineering and gene therapy\. The regulatory activity of DNA elements such as promoters and enhancers emerges from the combinatorial organization of transcription factor binding sites and sequence context, which collectively constitute the genome's regulatory grammar\. Deep learning models can effectively predict DNA regulatory activity across cell types, but current generative approaches often produce DNA sequences that strongly deviate from this natural regulatory grammar, increasing the risk of unexpected behavior and off\-target effects in real\-world applications\. Here, we introduce DNA\-CRAFT, a method for designing regulatory DNA with high predicted cell\-type\-specific activity while preserving naturalness\. DNA\-CRAFT formulates regulatory sequence design as a guided search over a generative model pre\-trained on millions of naturally occurring regulatory elements from the human and mouse genomes\. Our method enables targeted exploration of DNA sequence space, efficient evaluation of candidate designs, and explicit suppression of unwanted activity\. Across benchmarks spanning human cell lines and primary immune cells, DNA\-CRAFT outperforms existing generative and optimization\-based methods, consistently achieving the best trade\-off between cell\-type specificity and naturalness in the designed regulatory DNA sequences\.

## Breaking the Synthesis Barrier for AI\-Designed DNA Libraries

**Authors:** Scott Sussex; Ema Borevković; Frederieke Lohmann; Ningning Chen; Elena Luethi; Sai Reddy; Andreas Krause

**ID:** 150360\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150360

[Paper](<https://openreview.net/forum?id=if6zG3AZ0k>) | [PDF](<https://openreview.net/pdf?id=if6zG3AZ0k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150360>)

_Abstract unavailable from the accessible public sources._

## Guarding the Life Code: Preserving Membership Privacy in Genomic Foundation Models

**Authors:** Xinyu Zhao; Jinhao Duan; Zhen Tan; Tianlong Chen

**ID:** 155025\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155025

[Paper](<https://openreview.net/forum?id=96HcSezVOS>) | [PDF](<https://openreview.net/pdf?id=96HcSezVOS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155025>)

_Abstract unavailable from the accessible public sources._

## Identifiable Feedback\-Controlled Latent Flow for Unpaired Single\-cell Spatio\-Temporal Dynamics

**Authors:** Jianle Sun; Kun Zhang

**ID:** 156140 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=06mL3T4arr>) | [PDF](<https://openreview.net/pdf?id=06mL3T4arr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156140>)

Reconstructing the gene regulatory dynamics underlying tissue development from unpaired, cross\-sectional spatial transcriptomic snapshots poses a significant challenge in single\-cell biology\. While recent optimal transport and flow\-based methods have advanced trajectory interpolation, their unconstrained latent dynamics lack identifiability, hindering reliable discovery of the underlying regulatory mechanisms\. To address this, we propose single\-cell Identifiable Feedback\-controlled Latent Flow \(scIFLF\), a generative framework that introduces a physics\-inspired structural prior that decomposes the latent flow into a macroscopic developmental drift and a restorative feedback toward functional attractors\. Crucially, the gene\-regulatory Jacobian is shown to be uniquely identifiable, invariant to the latent ambiguity, enabling principled discovery of gene regulations directly from the learned flow\. Implemented with a multimodal Neural ODE, scIFLF aligns latent trajectories using entropy\-regularized optimal transport\. Benchmark experiments demonstrate that scIFLF outperforms state\-of\-the\-art methods in trajectory interpolation and spatial coherence, while successfully recovering key driver genes of tissue development and organogenesis, bridging the gap between deep generative flexibility and biological interpretability\.

## Identifiable Feedback\-Controlled Latent Flow for Unpaired Single\-cell Spatio\-Temporal Dynamics

**Authors:** Jianle Sun; Kun Zhang

**ID:** 156140\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156140

[Paper](<https://openreview.net/forum?id=06mL3T4arr>) | [PDF](<https://openreview.net/pdf?id=06mL3T4arr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156140>)

Reconstructing the gene regulatory dynamics underlying tissue development from unpaired, cross\-sectional spatial transcriptomic snapshots poses a significant challenge in single\-cell biology\. While recent optimal transport and flow\-based methods have advanced trajectory interpolation, their unconstrained latent dynamics lack identifiability, hindering reliable discovery of the underlying regulatory mechanisms\. To address this, we propose single\-cell Identifiable Feedback\-controlled Latent Flow \(scIFLF\), a generative framework that introduces a physics\-inspired structural prior that decomposes the latent flow into a macroscopic developmental drift and a restorative feedback toward functional attractors\. Crucially, the gene\-regulatory Jacobian is shown to be uniquely identifiable, invariant to the latent ambiguity, enabling principled discovery of gene regulations directly from the learned flow\. Implemented with a multimodal Neural ODE, scIFLF aligns latent trajectories using entropy\-regularized optimal transport\. Benchmark experiments demonstrate that scIFLF outperforms state\-of\-the\-art methods in trajectory interpolation and spatial coherence, while successfully recovering key driver genes of tissue development and organogenesis, bridging the gap between deep generative flexibility and biological interpretability\.

## Differentiable Retrieval\-Augmented Generation for Predicting Cellular Responses to Gene Perturbation

**Authors:** Andrea Giuseppe Di Francesco; Andrea Rubbi; Rishabh Jain; Pietro Lió

**ID:** 152229\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152229

[Paper](<https://openreview.net/forum?id=UbCFFQ9TmZ>) | [PDF](<https://openreview.net/pdf?id=UbCFFQ9TmZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152229>)

_Abstract unavailable from the accessible public sources._

## Pathway\-Aligned Regulator Tokens for Interpretable Spatial Gene Expression Prediction from Histologyatial Transcriptomics Prediction from Histology

**Authors:** Hyun Namgung; Sanghyun Park

**ID:** 154953\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154953

[Paper](<https://openreview.net/forum?id=9gb3vNBdFP>) | [PDF](<https://openreview.net/pdf?id=9gb3vNBdFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154953>)

_Abstract unavailable from the accessible public sources._

## spora: A Unified Multimodal Dataset for Spatial Proteomics

**Authors:** Benedikt von Querfurth; Johann Wenckstern; Eeshaan Jain; Lukas Klein; Phil F Cheng; Yexiang Cheng; Cédric Vincent\-Cuaz; Martina Haberecker; Pascal Frossard; Andreas Wicki; Olivier Michielin; Charlotte Bunne

**ID:** 139800 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3pB5d76pyz>) | [PDF](<https://openreview.net/pdf?id=3pB5d76pyz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139800>)

_Abstract unavailable from the accessible public sources._

## STRAND: Sequence\-Conditioned Transport for Single\-Cell Perturbations

**Authors:** Boyang Fu; Sameer Gabbita; George Dasoulas; xiang lin; Shanghua Gao; Xiaorui Su; Soumya Ghosh; Marinka Zitnik

**ID:** 152460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sxea2QV2oZ>) | [PDF](<https://openreview.net/pdf?id=Sxea2QV2oZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152460>)

Predicting how genetic perturbations change cellular state is a core problem for building controllable models of gene regulation\. Perturbations at the same gene can produce different transcriptional responses depending on their genomic locus, including different transcription start sites and regulatory elements; gene\-level perturbation models collapse these distinct interventions into a single representation\. We introduce STRAND, a generative model that predicts single\-cell transcriptional responses by encoding regulatory DNA sequence at the perturbation locus and using it to parameterize a conditional transport process from control to perturbed cell states\. Sequence conditioning supports zero\-shot inference at perturbation targets unseen during training and locus\-resolved inputs across a 524\\,kb window at 128\\,bp model resolution\. On CRISPRi datasets in K562, Jurkat, and RPE1 cells, STRAND improves few\-shot perturbation discrimination by up to 33\\%, achieves the best average rank on unseen\-gene benchmarks, and improves held\-out\-cell\-line transfer by up to 0\.12 in $\\Delta$Pearson; ablations attribute these gains to both sequence conditioning and conditional transport\. At the locus level, STRAND distinguishes alternative transcription start sites and validated regulatory elements that gene\-identifier models treat as identical perturbations

