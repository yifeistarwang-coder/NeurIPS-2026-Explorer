# Data\-centric AI / Everything Else

以数据为中心的人工智能 / 其他数据研究

124 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Nereus: A Large\-Scale Underwater Dataset for Fine\-Grained Attribute Understanding and Grounded Counting Perception

**Authors:** Jingtao Deng; Zihao Jin; Yuehe Chen; Feixiang He; Shuiwang Li; Dan Zeng

**ID:** 139205 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=egBeNgdC7E>) | [PDF](<https://openreview.net/pdf?id=egBeNgdC7E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139205>)

_Abstract unavailable from the accessible public sources._

## CroissantMiner: Automated Extraction and Validation of Croissant Metadata for ML Datasets

**Authors:** Berke Arda; Mubashara Akhtar; Ahmetcan Yavuz; Paul Gerry; Sebastian Lobentanzer; Nobin Sarwar; Joan Giner\-Miguelez; Kongtao Chen; Luyao Zhang; Mrinmaya Sachan

**ID:** 139073 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrHeRim4QM>) | [PDF](<https://openreview.net/pdf?id=mrHeRim4QM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139073>)

Croissant has emerged as a standard for machine\-readable dataset metadata, yet populating its fields remains labor\-intensive and requires careful reading of accompanying dataset documentation\. The benchmark comprises 602 papers, including 102 with human\-validated gold annotations \(9,595 ratings\) and 500 with LLM\-validated silver annotations, covering the full Croissant schema with both core and Responsible AI \(RAI\) fields\. To our knowledge, this is the first benchmark enabling end\-to\-end evaluation of metadata extraction aligned with a community\-standard schema\. We evaluate 20 extraction systems, including frontier and open\-weight models as well as four agentic architectures, using a two\-tier evaluation framework that combines rule\-based scoring with an LLM judge selected via human audit\. Our results show that single\-pass extraction with Claude Sonnet 4\.6 and a canonical prompt is the strongest configuration \(composite 0\.704\)\. Across all backbones, agentic architectures consistently underperform their single\-pass counterparts, indicating that task decomposition degrades performance for schema\-complete metadata extraction\. This effect is most prevalent on long\-form RAI fields, where accurate extraction requires integrating information across multiple sections\. Claude Sonnet 4\.5, used to seed the gold pre\-fills, is excluded from the headline ranking to avoid circularity\. We release the benchmark, evaluation code, and judge audit anonymously for review at https://anonymous\.4open\.science/r/croissantminer\-F87C, with a live Hugging Face Space demo to be provided at camera\-ready\.

## Croissant Baker: Metadata Generation for Discoverable, Governable, and Reusable ML Datasets

**Authors:** Rafi Al Attrach; Rajna Fani; Sebastian Lobentanzer; Joan Giner\-Miguelez; DEBANSHU DAS; Varuni H K; Nobin Sarwar; Rajat Ghosh; Anwai Archit; Surbhi Motghare; Christina C Parry; Luis Oala; Lara Grosso; Joaquin Vanschoren; Steffen Vogler; Sujata Goswami; Eric Rosenthal; Marzyeh Ghassemi; Matthew McDermott; Tom Pollard

**ID:** 139027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pVO3A5soQi>) | [PDF](<https://openreview.net/pdf?id=pVO3A5soQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139027>)

Croissant has emerged as the metadata standard for machine learning datasets, providing a structured, JSON\-LD\-based format that makes dataset discovery, automated ingestion, and reproducible analysis machine\-checkable across ML platforms\. Adoption has accelerated, and NeurIPS now requires Croissant metadata in every submission to its dataset tracks\. Yet in practice Croissant generation usually starts with uploading data to a public platform, a path infeasible for governed and large local repositories that hold much of the high\-value data ML increasingly relies on\. We release Croissant Baker, a local\-first, open\-source command\-line tool that generates validated Croissant metadata directly from a dataset directory through a modular handler registry\. We evaluate Croissant Baker on over 140 datasets, scaling to MIMIC\-IV at 886 million rows and 374 Parquet files\. On held\-out comparisons against producer\-authored or standards\-derived ground truth, Croissant Baker reaches 97–100% agreement across multiple domains\.

## SLS\-Bench: A Benchmark for Incident Log Summarization with Synthetic Observability Data

**Authors:** Valerii Iakovlev; Markus Spanring; Martin Flechl

**ID:** 139743 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=764jkex4Xd>) | [PDF](<https://openreview.net/pdf?id=764jkex4Xd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139743>)

_Abstract unavailable from the accessible public sources._

## REDACTED\-Tunes: An Open 1\.4M\-Track Dataset and Perceptual Benchmark for AI\-Generated Music

**Authors:** Robert Kaczmarczyk; TAWSIF AHMED; Felix Friedrich; Aidan C Erickson; Orian Sharoni; Dorien Herremans; Christoph Schuhmann

**ID:** 138942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uq5nVvf2sX>) | [PDF](<https://openreview.net/pdf?id=uq5nVvf2sX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138942>)

Generative music platforms have reached commercial scale, with outputs approaching human\-made quality\. Yet music machine learning lags image\-text research because no open music dataset matches the scale that catalyzed image\-text foundation models: commercial recordings cannot be legally redistributed, and existing corpora are small, single\-platform, or both\. AI\-generated music is the natural substrate to close this gap:  We introduce $\\textbf\{REDACTED\-Tunes\}$, an open dataset of URLs and metadata for $\\textbf\{1\{,\}429\{,\}734 AI\-generated music tracks\}$ from Suno, Udio, and Mureka\. The release ships public CDN URLs, 768\-d audio and text embeddings, captions, ASR transcription embeddings \(not raw transcripts\), five\-dimensional aesthetics scores, real and predicted engagement counts, and three\-axis NSFW safety labels under Apache 2\.0\. We also release the models used to annotate the corpus: a 242M\-parameter $\\texttt\{music\-captioner\}$ and fingerprint extractor, a $\\texttt\{SongEval\}$\-calibrated quality scorer, and an engagement predictor trained on platform play and upvote counts\.  To demonstrate downstream utility, we construct a perceptual benchmark from $\\textbf\{REDACTED\-Tunes\}$ and genre\-matched human controls\. In this study, $\\textbf\{61 participants annotated 591 song excerpts\}$, and $\\textbf\{12 LLM\-judge configurations\}$ evaluated the same songs\. Human listeners detect AI music above chance \($d' = 0\.83$\) but modestly \(62\.5\\% accuracy\), outperforming every LLM configuration on balanced accuracy\. We further identify a quality\-\-authenticity halo effect: songs receiving higher aesthetic ratings are more likely to be judged human\-made; equivalently, songs judged real receive nearly two more aesthetic\-quality points than songs judged AI\-generated, independent of true provenance \($p &lt; 10^\{\-26\}$\)\. All dataset artifacts, models, and code are available at https://anonymous\.4open\.science/r/anonymized\-for\-double\-blind\-review, alongside a live $\\textbf\{Tunes\-Search demo\}$ at https://anonymous\.4open\.science/w/anonymized\-for\-double\-blind\-review/search\-tunes\.

## Bernoulli Flow Models: Self\-Consistent Generative Modeling for Binary Data

**Authors:** Hao Mo; Liying Yang; Shumin Yao; Xinxing Yu; Ajian Liu; Xudong Mao; Yanyan Liang

**ID:** 155986 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1MMIaLs9nW>) | [PDF](<https://openreview.net/pdf?id=1MMIaLs9nW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155986>)

Binary diffusion models typically require a massive number of function evaluations \(NFEs\) to generate high\-quality samples, making practical inference computationally expensive\. Reducing NFEs while preserving sample quality without relying on distillation or additional training remains a significant challenge\. However, existing binary diffusion models sequentially define a discrete one\-step forward path and subsequently derive the reverse posterior\. In low\-NFE scenarios that require cross\-step sampling, these models incorrectly approximate the true multi\-step likelihood using a single\-step likelihood formulation, which severely degrades sample quality\. To address this fundamental limitation and completely decouple the generative dynamics from fixed discrete time steps, we propose Bernoulli Flow Models \(BFM\)\. Rather than building upon sequential one\-step Markov diffusion chains, we predefine a unified continuous global Bernoulli probability flow path between data distributions and pure noise, from which we derive analytical closed\-form posterior transitions over arbitrary time intervals\. Consequently, reducing the inference NFE in BFM is no longer an approximation of skipped discrete steps; it simply requires re\-evaluating the analytical posterior on the new time intervals\. This eliminates the structural training\-inference mismatch inherent to discrete chains, yielding strictly self\-consistent low\-NFE sampling\. Experimental results show that BFM is highly robust to aggressive NFE reduction\. On the LSUN Churches 256x256 dataset, a 256\-step\-trained BFM achieves an FID of 9\.31 when sampled with only 16 steps, whereas the state\-of\-the\-art discrete baseline severely degrades to 204\.10\. BFM also remains competitive with both continuous and discrete generative baselines under standard full\-step inference\. Ultimately, these results establish BFM as a theoretically rigorous, self\-consistent, and practically effective framework for fast binary data generation\.

## TransitLM: A Large\-Scale Dataset and Benchmark for Map\-Free Transit Route Generation

**Authors:** Hanyu Guo; JieDong Yang; Chao Chen; Longfei Xu; Kaikui Liu; Xiangxiang Chu

**ID:** 139623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EqcTBAHNnJ>) | [PDF](<https://openreview.net/pdf?id=EqcTBAHNnJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139623>)

Public transit route planning traditionally depends on structured map infrastructure and complex routing engines, and no existing dataset supports training models to bypass this dependency\. We present TransitLM, a large\-scale dataset of over 13 million transit route planning records from four Chinese cities covering 120,845 stations and 13,666 lines, released as a continual pre\-training corpus and benchmark data for three evaluation tasks with complementary metrics\. Experiments show that an LLM trained on TransitLM produces structurally valid routes at high accuracy and implicitly grounds arbitrary GPS coordinates to appropriate stations without any explicit mapping\. These results demonstrate that transit route planning can be learned entirely from data, enabling end\-to\-end, map\-free route generation directly from origin\-destination information\. The dataset and benchmark are available at https://huggingface\.co/datasets/GD\-ML/TransitLM, with evaluation code at https://github\.com/HotTricker/TransitLM\.

## Isharah\-Selfie: Continuous Sign Language Recognition Dataset for One\-handed Signing

**Authors:** Ahmed A Hasanaath; Murtadha Aljubran; Sarah Alyami; Muhammad Haris Khan; Hamzah Luqman

**ID:** 139100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l3pvG8AHwe>) | [PDF](<https://openreview.net/pdf?id=l3pvG8AHwe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139100>)

Current sign language recognition and translation benchmarks are commonly collected in controlled settings using fixed or studio\-style cameras, particularly limiting their ability to reflect how signers communicate in everyday mobile scenarios\. As such, this gap becomes increasingly evident when considering the Arabic Sign Language \(ArSL\), which is a primary sign language used across Arab countries\.  In this work, we introduce Isharah\-Selfie, a large\-scale ArSL dataset collected entirely using front\-facing smartphone cameras under unconstrained selfie conditions\. The dataset comprises 8,997 video clips performed by 16 signers across 1,493 unique sentences, covering several domains such as healthcare, education, and transportation\. Unlike conventional datasets dominated by fixed\-camera, two\-handed signing, Isharah\-Selfie captures realistic mobile communication characterized by one\-handed signing, close\-range viewpoints, partial body visibility, camera motion, unconstrained environments, and heterogeneous device resolutions\. Each video is annotated with both gloss sequences for continuous sign language recognition \(CSLR\) and Arabic sentence translations for sign language translation \(SLT\)\. Moreover, we define signer\-independent and unseen\-sentences evaluation protocols to assess generalization across unseen signers and novel sentence compositions\. Extensive benchmarks using RGB\-based and pose\-based data show that current CSLR and SLT methods remain challenged by selfie\-style signing conditions, particularly under unseen\-sentence evaluation, where compositional generalization remains weak\. By releasing Isharah\-Selfie, we aim to support research toward robust, user\-centered sign language technologies that operate reliably in realistic smartphone\-based communication settings\. The Isharah\-Selfie dataset is available on https://www\.github\.com/\.

## MITO: A Millimeter\-Wave Dataset and Simulator for Non\-Line\-of\-Sight Perception

**Authors:** Tara Boroushaki; Laura Dodds; Cusuh Ham; Fadel Adib

**ID:** 139166 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hJlnaYhXuZ>) | [PDF](<https://openreview.net/pdf?id=hJlnaYhXuZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139166>)

The ability to observe the world is fundamental to reasoning and making informed decisions on how to interact with the environment\. However, optical perception can often be disrupted due to common occurrences like occlusions, which can pose challenges to existing vision systems\. We present MITO, the first millimeter\-wave \(mmWave\) dataset of diverse, everyday objects, collected using a UR5 robotic arm with two mmWave radars operating at different frequencies and an RGB\-D camera\. Unlike visible light, mmWave signals can penetrate common occlusions \(e\.g\., cardboard boxes, fabric, plastic\)\. MITO captures over 24 million mmWave frames and uses them to generate 550 high\-resolution mmWave images in line\-of\-sight and non\-light\-of\-sight \(NLOS\), as well as RGB\-D images, segmentation masks, and raw mmWave signals, taken from 76 different objects\. We develop an open\-source simulation tool that can be used to generate synthetic mmWave images for any 3D triangle mesh\. Finally, we establish benchmarks for NLOS segmentation and classification to demonstrate the utility of our dataset and simulator for enabling broader NLOS perception\.

## Cracks in the Foundation: A Civil Infrastructure Dataset to Challenge Vision Foundation Models

**Authors:** Nicola Farronato; Niccolò Avogaro; Thomas Frick; Mattia Rigotti; Rizwan U Khan; Michele Magno; Konrad Schindler; A\. Cristiano I\. Malossi; Florian Scheidegger

**ID:** 139052 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nxteZPGIxC>) | [PDF](<https://openreview.net/pdf?id=nxteZPGIxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139052>)

Automated structural health monitoring is essential to prevent catastrophic infrastructure failures\. Precise, pixel\-level defect segmentation is needed to accurately assess structural integrity, but progress in defect segmentation for civil infrastructures has been held back by an extreme scarcity of data, which requires costly expert annotation\. The need for data is accentuated by algorithmic hurdles intrinsic to the problem, including center\-bias and the need to rely more on shape when inspecting nearly textureless building materials\. To remove the bottleneck, we introduce \*\*Cracks in the Foundation \(CiF\)\*\*, the largest and most detailed civil infrastructure \(instance\) segmentation dataset to date, comprising $\\approx$150,000 high\-resolution images meticulously curated over five years in collaboration with civil engineering experts\. With the help of this unprecedented data source, we expose a blind spot of current visual AI: despite the advent of promptable Foundation Models \(FMs\) and Vision Language Models \(VLMs\), and despite the impressive abilities of today's specialised segmentation models, it turns out that dense image understanding in the built environment is nowhere near solved\. Our evaluations indicate that even the most recent zero\-shot FMs face significant challenges when deployed on real\-world infrastructure and even the performance of specialised models with domain\-specific supervision plateaus at  $\\approx$25\\% mAP\. CiF establishes inspection of civil infrastructure, an elementary and seemingly easy perceptual task, as an open challenge that reveals fundamental weaknesses of present\-day models trained predominantly on internet images, literally and figuratively highlighting \*cracks in the current foundation model paradigm\*\.

## DopplerWild: A Doppler Dataset and Benchmark for Human Kinematic Understanding in the Wild

**Authors:** Shubo Yang; Aaron Wang; Narayan Schuetz; Jida Zhang; Edison R Altamirano; Kaitlyn Leitherer; Ehsan Adeli; Amin Arbabian

**ID:** 139019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qB0eixkokM>) | [PDF](<https://openreview.net/pdf?id=qB0eixkokM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139019>)

Understanding human kinematics in outdoor, real\-world environments is critical for assistive robots and intelligent infrastructure\.  Many perception systems rely on cameras and LiDAR, which infer motion indirectly from spatial observations, making estimates sensitive to discontinuities and ambiguity under low lighting or at distance\. In contrast, mmWave radar is robust to lighting and weather, operates at long range, and directly measures motion through Doppler signatures\.  However, Doppler\-based kinematic understanding remains largely unexplored in the wild because existing datasets are primarily controlled and scripted\. We introduce DopplerWild, a dataset and benchmark for evaluating Doppler\-based kinematic understanding in the wild\.  DopplerWild comprises 447k radar frames across four outdoor locations, including an unlabeled subset for self\-supervised representation learning and a labeled subset of 539 subjects with nearby\-person interference \(56\\%\) and occlusion \(16\\%\)\.  The benchmark spans coarse and fine\-grained motion classification, as well as velocity estimation\. Beyond aggregate metrics on controlled datasets, DopplerWild evaluation isolates real\-world factors: subject variation, location shift, multi\-person interference, occlusion, sensing geometry, and low\-label regimes\.  DopplerWild reveals three findings\. First, self\-supervised pretraining matches supervised performance with less than half the labeled data and improves performance under interference, occlusion, and lateral motion\.  Second, we identify key challenges for single\-view Doppler sensing, including physical limits in lateral motion, subtle asymmetric limb motion, and location distribution shifts\. Third, we observe bidirectional transfer asymmetry between DopplerWild and an external controlled Doppler dataset, suggesting that real\-world coverage is important for transferable Doppler representations\. DopplerWild provides an evaluation framework for characterizing the generalization, limits, and transferability of Doppler\-based kinematic representations in the wild\.

## Monoculture Robust Learning

**Authors:** Lee Cohen; Jon Kleinberg; Omer Reingold

**ID:** 154495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DBFZrcg8Hf>) | [PDF](<https://openreview.net/pdf?id=DBFZrcg8Hf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154495>)

We introduce a notion of monoculture robustness in Probably Approximately Correct \(PAC\) learning, as a way to mitigate the problem of  \*algorithmic monoculture\* \(Kleinberg &amp; Raghavan, 2021\): the tendency of models sharing the same components \(e\.g\., training data\) to fail on the same inputs\. Specifically, we ask whether a learner with access to a single dataset can output $k$ individually accurate hypotheses whose joint failure probability is comparable to training on $k$ independent datasets\. We say that such a learning procedure achieves \*monoculture robustness\*, and we quantify this by bounding the \*conjunctive error\* that all $k$ hypotheses misclassify points in an individual sense\.  We design methods for achieving this type of guarantee by drawing a surprising connection between replicability \(Impagliazzo et al\., 2022\) and monoculture robustness\. Specifically, we show that if the base learner is $\\rho$\-replicable, then running it independently $k$ times on the same sample yields individual monoculture error that shrinks exponentially with $k$, controlled by the single\-run error of the base learner at the point and $\\rho$\. We complement these positive results with a lower bound: for individual monoculture robustness,  we prove a worst\-case lower bound showing that, for learners, driving the individual conjunctive error down to $\\gamma$ can require a sample\-size multiplier of $t = \\Omega\(\\log\(1/\\gamma\)\)$\.

## Towards Unified Dynamic Face Landmark Detection

**Authors:** Sebastian Regalado Lozano; Varshanth R Rao; Ruowei Jiang; Parham Aarabi; Igor Gilitschenski

**ID:** 151381 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b1iNnvFc6A>) | [PDF](<https://openreview.net/pdf?id=b1iNnvFc6A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151381>)

Although advancements in face landmark detection \(FLD\) methods continue to push performance boundaries, they overlook two major functional limitations: \(1\) different network parameters need to be trained independently for each "N\-point" benchmark dataset, and \(2\) a model trained on an "N\-point" dataset reliably outputs only the N landmarks\. In our work, we first conceptualize Face Part\-Anchored Landmark Positions \(FPALPs\), wherein each landmark is treated as a progression value between zero \(start\) and one \(end\) along a face part's contour\. Every landmark can be expressed in the FPALP format, irrespective of its source dataset, hence unlocking the ability to unify all "N\-point" datasets into a single dataset\. Secondly, we represent each landmark with an FPALP\-based query, refine it progressively with a cross\-modality decoder, and predict its coordinates based on the final representation\. Our approach, called Unified Dynamic FLD, embodies these two design choices and streamlines the landmark detection pipeline by enabling \(1\) a single model to learn on any number of "N\-point" datasets, and \(2\) yield any number of specific landmark predictions by loading the designated landmark queries at runtime\. Extensive experiments on multiple benchmark datasets show that our method delivers these benefits while remaining competitive with, and in several cases outperforming existing state\-of\-the\-art methods\.

## Ad\-Hoc Teamwork from Human Demonstrations

**Authors:** Darius Muglich; Niklas Lauffer; Tin Dizdarević; Jakob Foerster

**ID:** 148597 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wYE8NC5FXe>) | [PDF](<https://openreview.net/pdf?id=wYE8NC5FXe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148597>)

Human players in cooperative games often rely on conventions: reusable patterns of play that coordinate well when used by the whole team, but can fail otherwise\. Evaluating agents in this setting is difficult because human demonstration datasets are usually unlabeled: trajectories do not identify which player, group, or convention produced them\. As a result, standard proxy\-based evaluations can miss important population diversity\. In particular, proxy bots produced by regularised self\-play around a pooled behavioural cloning policy can remain concentrated around a single dominant mode of play\. We introduce a pipeline for recovering and evaluating this hidden convention diversity from unlabeled demonstrations\. Our method first learns latent convention structure from the dataset, then selects a compact set of distinct but plausible conventions, and finally reconstructs each selected convention into a high\-performing playable proxy using KL\-regularised PPO\. A key practical challenge is that KL\-regularised PPO is sensitive to the KL penalty, which is often tuned using online interaction\. We provide an empirical offline calibration procedure for choosing this KL penalty in the PPO\+KL reconstruction settings studied here\. On Hanabi, we find that the BC\-derived proxy suite is highly concentrated, and that the relative ordering of agents changes when evaluation uses the latent proxy suite instead\.

## CSI\-TextBench: A Dataset and Benchmark for Language\-Grounded Ambient Sensing Perception

**Authors:** Guozhen Zhu; Yuqian Hu; Sakila S Jayaweera; Wei\-Hsiang Wang; Beibei Wang; K\. Liu

**ID:** 139630 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EO00lY9oOt>) | [PDF](<https://openreview.net/pdf?id=EO00lY9oOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139630>)

_Abstract unavailable from the accessible public sources._

## PRISM: Polarimetric Road\-surface Intelligent Sensing and Measurement Dataset

**Authors:** Minseo Jung; Chanwoo Kim; Donggue Kim; Hyunjun Kim; Jeongwoo Park; Kichun Jo

**ID:** 138944 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=up7uSAvqnp>) | [PDF](<https://openreview.net/pdf?id=up7uSAvqnp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138944>)

_Abstract unavailable from the accessible public sources._

## SLAyiNG: A Diverse and Community\-validated Dataset of Queer Slang

**Authors:** Leonor Veloso; Lea Hirlimann; Lucija M Zidar; Philipp Wicke; Valentin Hofmann; Hinrich Schuetze

**ID:** 138946 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ub2Ru5hNGA>) | [PDF](<https://openreview.net/pdf?id=ub2Ru5hNGA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138946>)

_Abstract unavailable from the accessible public sources._

## Beyond Score: A Dataset for Joint Action and Score Predictions in 2v2 Sports

**Authors:** Yuting Wang; Peng Wen; Fengshun Wang; Jiayong Zuo; Xinyu Peng; Qiurui Wang

**ID:** 138978 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sv4gnW1mM1>) | [PDF](<https://openreview.net/pdf?id=sv4gnW1mM1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138978>)

_Abstract unavailable from the accessible public sources._

## Theory\-Scale Auto\-Formalization of Logics for Computer Science

**Authors:** Yuming Feng; Frederick Pu; One An; Osbert Bastani; Li Zhang; Jiani Huang; Xujie Si; Ziyang Li

**ID:** 139146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iKP2FDkWuw>) | [PDF](<https://openreview.net/pdf?id=iKP2FDkWuw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139146>)

Auto\-formalization is critical for scalable formal verification, but existing progress largely focuses on isolated statements, while theory\-scale auto\-formalization, which coherently translates hundreds of interdependent definitions, lemmas, and theorems, remains open due to challenges in consistency, faithfulness, scalability, and correctness\. In this paper, we introduce LCS\-Bench, a stand\-alone, theory\-scale benchmark based on Logics for Computer Science\. LCS\-Bench is built through a novel semi\-automated agentic pipeline that leverages dependency graphs, concept tagging, issue tracking, and iterative refinement, complemented by significant faithfulness review from human experts\. The resulting artifact covers 327 textbook items, over 4,076 Lean declarations, and more than 85K lines of Lean code\. The dataset supports broad evaluation through a data engine that automatically derives five tracks of evaluation benchmarks, measuring different aspects of auto\-formalization and theorem\-proving capabilities\. We also introduce a novel evaluation protocol featuring definitional equivalence checkers, enabling more fine\-grained and faithful assessment\. Through extensive evaluation on 14 models, we demonstrate that \(1\) LCS\-Bench is of high quality, consistent, and faithful; \(2\) the benchmark is challenging, with state\-of\-the\-art models achieving only 20\.1% on auto\-formalization tasks; and \(3\) our analysis reveals key findings regarding theory\-scale auto\-formalization and suggests promising directions for future work\.

## State\-of\-art minibatches via novel DPP kernels: discretization, wavelets, and rough objectives

**Authors:** Hoang Son Tran; Pranav Gupta; Rémi Bardenet; Subhroshekhar Ghosh

**ID:** 154500 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8tqZupi52>) | [PDF](<https://openreview.net/pdf?id=D8tqZupi52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154500>)

Determinant point processes \(DPPs\) have recently emerged as a kernelized alternative to vanilla independent sampling for generating efficient minibatches, coresets and other parsimonious representations of large\-scale datasets\. While basic theoretical foundations and promising empirical performance have been demonstrated, there are two main challenges for current proposals for DPP\-based coresets or minibatches\. The first is the need for families of DPPs with certain key variance reduction properties, usually constructed in a continuous setting, of which there are few known examples\. The second is the need for an ad\-hoc construction of a discrete DPP defined on a given dataset, that inherits such variance reduction\. In this work, we contribute to the programme of establishing DPPs as a subsampling toolbox for ML by advancing on these two fronts\. First, we propose new DPPs on the Euclidean space based on wavelets, with provably better accuracy guarantees than the best known rates\. Second, we introduce a general method to convert such continuous DPPs, which are more amenable to proving analytical statements, into discrete kernels, which are pertinent for subsampling tasks such as minibatch and coreset constructions\. This conversion mechanism simultaneously preserves the desired variance decay and reveals a low\-rank decomposition of the discrete kernel, which makes sampling the corresponding DPP computationally inexpensive\. En route, we enlarge the class of ML tasks amenable to improvements via DPP\-based minibatches and coresets to include highly non\-smooth objective functions, with arbitrarily low regularity, and rate guarantees that adapt explicitly to this regularity\.

## LSC\-Parlament: An Automatically Aligned Catalan Sign Language Dataset from Parliament Videos\.

**Authors:** Carlos Escolano; Gerard Sant; Marc J Garcia; Joan G Cortés; Marcel Granero Moya; Francesca De Luca Fornaciari; Maite Melero

**ID:** 139029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pPt0iqECnh>) | [PDF](<https://openreview.net/pdf?id=pPt0iqECnh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139029>)

Progress in Sign Language Translation \(SLT\) is frequently hampered by the "data bottleneck," a challenge particularly acute for regional languages such as Catalan Sign Language \(LSC\)\. In this paper, we present LSC\-Parlament, a large\-scale, multimodal dataset for LSC derived from Catalan Parliament sessions spanning 2021 to 2024\. The dataset comprises over 87 hours of LSC video, synchronized with speech and text translations in either Catalan or Spanish\. To curate this resource, we developed a fully automated pipeline that enables alignment between sign language, speech, and text without requiring prior human\-annotated data\. We provide a systematic evaluation of the dataset across multiple dimensions, including video tracking quality, audio transcription accuracy, and translation benchmarks\. Our experiments compare transfer learning, zero\-shot, and supervised translation settings, demonstrating significant knowledge transfer between spoken languages in the LSC\-Spanish modality\. By releasing LSC\-Parlament, we provide a challenging open\-domain benchmark to foster research in inclusive and scalable translation technologies\.

## New Coresets for Fair Clustering

**Authors:** Xuan Wu; Chansophea Wathanak In; Yi Li

**ID:** 152649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RQT8lzmK8J>) | [PDF](<https://openreview.net/pdf?id=RQT8lzmK8J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152649>)

We construct the first coreset of size near\-linear in $k$ for fair \\kMedian in general metric spaces\. Combined with the standard merge\-and\-reduce framework, our construction also gives the first streaming algorithm for fair \\kMedian with space complexity near\-linear in $k$\.  The main technical innovation is a distributional reinterpretation of capacitated clustering that the cost of assigning a dataset to a capacitated center set can be expressed as the earth mover's distance between two discrete distributions\. This viewpoint enables us to use tools from optimal transport to analyse uniform sampling\. A key ingredient in this analysis is a new family of problem\-specific $\\eps$\-nets for the earth mover's distance\.

## ECG Dataset with Multi\-Expert Annotations and Delineations

**Authors:** Aram Avetisyan; Shahane Tigranyan; Sergey Skorik; Ariana Asatryan; Aleksandr Beznosikov; Yury Markin

**ID:** 138906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xkNSMx4swk>) | [PDF](<https://openreview.net/pdf?id=xkNSMx4swk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138906>)

The availability of open 12\-lead electrocardiogram \(ECG\) datasets has significantly increased the number of studies focusing on automated ECG analysis\. However, existing datasets often have limitations due to unverified annotations, overly processed data, or the absence of features such as fiducial points of the ECG\.    In this paper, we present a comprehensive collection of ECGs, with each record meticulously annotated by a team of seven cardiologists\. Over 2,500 ECG records were annotated, with most records reviewed by at least four physicians\. 1,527 ECG records of the dataset contain detailed annotations of PQRST segments, verified by two cardiologists\. The dataset constitutes the largest collection of manually delineated ECG records to date, offering a valuable resource for researchers and practitioners in cardiology\.      This dataset, the first of its kind available for open use with multi\-expert annotations, is suited for a variety of research tasks\. It can be used for ECG abnormality classification, for analyzing patterns and annotation complexities across different heart abnormalities, and for tasks related to ECG delineation\.

## A Theoretical Bridge Between Long\-Tailed Recognition and Continual Learning

**Authors:** Mahdiyar Molahasani; Michael Greenspan; Ali Etemad

**ID:** 148638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wERJT1NgQB>) | [PDF](<https://openreview.net/pdf?id=wERJT1NgQB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148638>)

We theoretically and empirically establish a previously unexplored connection between Long\-Tailed Recognition \(LTR\) and Continual Learning \(CL\)\. Specifically, we show that training on a long\-tailed dataset drives model parameters into an $\\mathcal\{O\}\(1/\\sqrt\{\\mathrm\{IF\}\}\)$ neighborhood of the dominant\-class solution, under both uniform and exponentially decaying cardinality distributions\. Building on this result, we prove that the CL objective upper\-bounds the balanced LTR loss, revealing that LTR can be reformulated as a sequential learning problem\. Motivated by this connection, we introduce Continual Learning for Long\-Tailed Recognition \(CLTR\), a principled framework that leverages standard off\-the\-shelf CL methods to sequentially learn Head and Tail classes while mitigating catastrophic forgetting\. Extensive experiments on CIFAR100\-LT, CIFAR10\-LT, ImageNet\-LT, and Caltech256 validate our theoretical predictions and demonstrate strong performance across diverse LTR benchmarks\. In the foundation\-model regime, CLTR with DualPrompt on a CLIP backbone outperforms standard adaptation baselines and is competitive with specialized methods using external semantic supervision\. Our work bridges LTR and CL both theoretically and empirically, providing a principled approach for addressing long\-tailed learning using standard CL strategies\.

## OfficeInstruct: A Dataset for Tool\-Augmented Office Agents on Long\-Trajectory Generative Tasks

**Authors:** Weikai Xu; Zhizheng Jiang; Lushuo Jiang; Kun Huang; Yuxuan Liu; Pengzhi Gao; Wei Liu; Jian Luan; Xiaolin Hu; Bo An

**ID:** 139086 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lynIy135Mu>) | [PDF](<https://openreview.net/pdf?id=lynIy135Mu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139086>)

The recent trend of integrating autonomous agents into operating systems, supported by the Model Context Protocol \(MCP\) tools and Deep Searching, has driven research on efficient assistants for daily office tasks like document writing, spreadsheet analysis, and presentation generation\. However, training these agents still faces several challenges: the overemphasis on question\-answering tasks at the expense of multi\-turn generative tasks; the absence of a training paradigm that jointly enhances coding and tool\-calling capabilities; the difficulty of evaluating tool efficiency and artifact quality in the presence of drifting user intents\. To address these problems, we deploy a unified multi\-turn agent framework to collect real\-world user interactions, creating \\textit\{OfficeInstruct\}: a comprehensive dataset of 199k high\-quality trajectories across Doc, Spreadsheet, and PPT, with an average of 56\.2 steps\. To ensure data quality, we propose a graph\-based evidence evaluation method that models interaction histories as directed graphs, filtering out redundant tool cycles, execution errors, and hallucinations\. Experiments demonstrate that our \\textit\{OfficeAgent\} 8B and 14B models surpass open\-source baselines on in\-domain and out\-of\-distribution benchmarks, with the 32B variant attaining a 96\.19\\% success rate on the newly proposed \\textit\{OfficeAgentBench\}, surpassing proprietary models like Claude\-4\.5\-Sonnet and Gemini\-3\-Pro\.

## Fast Diverse Nearest Neighbor Search

**Authors:** Justin Chen; Soham Nagawanshi; Shenghao Xie; Haike Xu; Alan Zhou; Samson Zhou

**ID:** 156099 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0NrAOwOmiN>) | [PDF](<https://openreview.net/pdf?id=0NrAOwOmiN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156099>)

In the $k$\-diverse nearest neighbor search problem, the input is a dataset in which each point is assigned a color, and given a query $q$, the goal is to retrieve $k$ approximate nearest neighbors with distinct colors\. This color diversity metric is highly essential for information retrieval tasks where results are required to have different categories, e\.g\., recommending products from different sellers\. Previous state\-of\-the\-art solution by Anand et al\. \[ICML 2025\] constructs a diversity\-aware graph to meet this requirement\. However, they suffer from an $\\mathcal\{O\}\(k^2\)$  multiplicative query time overhead, creating a computational bottleneck when $k$ is large\.  To break this barrier, we propose a novel color bucketing framework that selects a subset of colors in each bucket and instantiates an independent approximate nearest neighbor search algorithm on the corresponding points\. Inspired by group testing, we provide a randomized color sampling scheme that achieves an $\\mathcal\{O\}\\left\(k^\{1\-\\frac\{1\}\{c^2\}\-o\(1\)\}\\log k\\right\)$ overhead in Euclidean spaces and an $\\mathcal\{O\}\\left\(k \\log k\\right\)$ overhead in general metric spaces, where $c$ is the approximation factor, reducing a factor of $k$\. In addition, the space usage to store the data structure matches or improves upon prior methods\. Empirical results on semi\-synthetic and real\-world datasets demonstrate that our approach achieves significantly faster search times and higher recall compared to state\-of\-the\-art diversity search baselines\.  Furthermore, we introduce a dataset\-oblivious deterministic bucketing scheme using expander graphs for a relaxed diverse search problem that only requires $k\(1\-\\varepsilon\)$ colors\. Here, dataset\-oblivious means that the color bucket construction does not depend on the spatial configuration of the dataset\. We then establish an $\\Omega\(k^2\)$ lower bound on the number of buckets for any dataset\-oblivious deterministic bucketing scheme that gives an \\emph\{exact\} $k$\-diverse solution\. We subsequently circumvent this by a dataset\-aware adaptive segment tree bucketing scheme with an overhead of only $\\mathcal\{O\}\(k \\log N\)$, where $N$ is the number of colors\. As an extension of our results, we solve the problem with general diversity metric, where the goal is to maximize the minimum pair\-wise distance of the $k$ solutions, and improve the query time\.

## Space\-Optimal Streaming Algorithms via Efficient Encodings

**Authors:** Liudeng Wang; David Woodruff; Shenghao Xie; Samson Zhou

**ID:** 155183 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7fVfD6Nmw4>) | [PDF](<https://openreview.net/pdf?id=7fVfD6Nmw4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155183>)

We study the problem of constructing coresets on data streams: Given a dataset of $n$ points in $\\mathbb\{R\}^d$ arriving sequentially, the goal is to maintain a small weighted subset that accurately approximates the objective values of the entire dataset for a given class of query functions\. Previous methods like merge\-and\-reduce and online sensitivity sampling required more space than the size of an optimal such subset in the offline setting\. In this work, we show that such overheads are not necessary by presenting space\-optimal streaming algorithms for central high\-dimensional optimization problems such as Euclidean $\(k,z\)$\-clustering and $L\_p$ subspace embeddings, as well as applications to projection\-cost preserving sketches\.   For $\(k,z\)$\-clustering, our streaming algorithm uses memory independent of the number $n$ of input points \(in words of memory\) and the aspect ratio $\\Delta$, yielding a coreset with an optimal $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{dk\}\{\\min\(\\varepsilon^4,\\varepsilon^\{z\+2\}\)\}\\right\)$ words of memory for accuracy parameter $\\varepsilon\\in\(0,1\)$\. For $L\_p$ subspace embeddings, where the rows of matrix $\\mathbf\{A\} \\in \\mathbb\{R\}^\{n \\times d\}$ arrive in an insertion\-only stream, we achieve an efficient algorithm that uses optimal space for different ranges of $p$: $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{d^2\}\{\\varepsilon^2\}\\right\)$ words for $p\\le 2$ and $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{d^\{p/2\+1\}\}\{\\varepsilon^2\}\\right\)$ words for $p&gt;2$, both independent of the number of rows $n$\. Thus, our work shows that streaming algorithms can match offline algorithms in space complexity\.

## ALETHEIA: A Multi\-Frequency Eddy Current Pulsed Thermography Dataset for Neural Operator Learning in Nondestructive Testing

**Authors:** Changbin Sun; jie Xiao; Xiaotian Chen; Yuankai Wu

**ID:** 139797 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3x55aqNQ9m>) | [PDF](<https://openreview.net/pdf?id=3x55aqNQ9m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139797>)

Learning neural solvers for spatiotemporal partial differential equations \(PDEs\) under real\-world constraints remains a key challenge in scientific machine learning, especially for inverse tasks with sparse and noisy boundary observations\. We present the Aletheia dataset, the first 3D benchmark for learning data\-driven solvers in the context of nondestructive testing \(NDT\)\. The dataset simulates eddy\-current\-induced heating in conductive solids and models the resulting transient heat propagation governed by the heat equation\. Aletheia contains over 4,700 high\-resolution samples across 10 excitation frequencies \(1\-100\\,kHz\), each providing volumetric heat source and temperature fields over time\. It supports both forward prediction of temperature evolution and inverse reconstruction of internal heat sources or defects from surface infrared measurements\. Real infrared thermography data from cracked rail specimens are included for calibration and generalization studies\. We define three canonical tasks on both regular and irregular grids and benchmark them using various neural operators\. Aletheia establishes a unified platform for evaluating neural PDE solvers under realistic NDT conditions, enabling progress in reliable, data\-driven inverse modeling\.

## Knowledge Transfer Scaling Laws for 3D Medical Imaging

**Authors:** Ho Hin Lee; Dongna Du; Chu Wang; Yuankai Huo; Shi Gu; James Gee; Yifan Wu

**ID:** 149904 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mLgd1pC49X>) | [PDF](<https://openreview.net/pdf?id=mLgd1pC49X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149904>)

Vision foundation models are increasingly moving beyond 2D to volumetric domains such as 3D medical imaging, where unified pretraining across different imaging modalities \(i\.e\. CT, MRI, and PET\) could provide foundational models for diverse clinical tasks\. However, training such models requires mixing heterogeneous imaging domains, and current mixture strategies remain largely heuristic\. In this work, we observe that different medical imaging domains scale at variable rates during pretraining, and knowledge transfer between domains is strongly asymmetric: training on one domain can substantially improve another, but the reverse may be much weaker\. Interestingly, both MAE reconstruction loss and cross\-domain transfer follow predictable power\-law trends with domain\-specific behaviors\. Motivated by these findings, we formulate data allocation as a scaling\-law optimization problem\. The derived allocations reveal an interpretable hub\-and\-island structure: highly transferable domains emerge as hubs that benefit many others and deserve strategic allocation, while isolated domains act as islands requiring direct investment\. Empirically, transfer\-aware allocation outperforms data\-proportional sampling by up to 58\\% and generalizes well to unseen budgets with r=0\.989\. Downstream validation on disease classification and organ/lesion segmentation further confirms that the derived transfer\-aware mixtures provide stronger pretrained representations for clinical 3D medical imaging tasks\.

## PULSE: Identifying Demonstration\-Utility Features with Sparse Autoencoders

**Authors:** Chenduo Hao; Chuanbao Gao; Pinjun Zeng; Jingze Zhu; Liu Chonghan; Zidong Liu; Xu Yang

**ID:** 150843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evJ1mvKFLe>) | [PDF](<https://openreview.net/pdf?id=evJ1mvKFLe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150843>)

In\-context learning is highly sensitive to demonstration choice, yet most methods select demonstrations using external query\-\-demonstration similarity\. Such criteria can miss model\-specific signals: Similar demonstrations may activate different internal features and downstream behaviors\. We introduce \*\*PULSE\*\* \(\*\*P\*\*aired \*\*U\*\*tility \*\*L\*\*ocalization over \*\*S\*\*parse \*\*E\*\*ncodings\), an SAE\-based framework for identifying model\-internal features associated with demonstration utility and using them for demonstration selection\. Using a small labeled discovery set, PULSE samples candidate demonstration sets, measures their zero\-shot\-relative utility under the target model, and scores SAE features by how their activation differences align with utility differences\. The top positive and negative coordinates form a sparse utility\-localization vector\. We use this vector in two complementary ways: as a signed score for controlled complete\-set ranking, and as \*\*PULSE\-Retriever\*\*, which converts its magnitude into a feature\-relevance mask for scalable pool\-scale retrieval\. Across classification, generation, and reasoning benchmarks, PULSE\-Retriever improves over the strongest baseline by 2\-\-3 accuracy points, 0\.6\-\-0\.9 BLEU\-4, and 3\.2 exact\-match points, respectively, while controlled ranking validates the identified features encode a predictive set\-level utility signal\. Feature inspection and cross\-dataset experiments suggest that the identified features capture task\-relevant, dataset\-conditioned patterns, yet retain utility signals that partially transfer across datasets\. Our code is available at the \[anonymous repository\]\(https://anonymous\.4open\.science/r/PULSE\-6FBB/\)\.

## MPDocBench\-Parse: Benchmarking Practical Multi\-page Document Parsing

**Authors:** Bangbang Zhou; Hangdi Xing; Yifan Chen; Jianjun Xu; Qi Zheng; Feiyu Gao; Zhibo Yang; Shuai Bai; Ming Yan; Jieping Ye; Hongtao Xie

**ID:** 139502 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LwAbYfBo6t>) | [PDF](<https://openreview.net/pdf?id=LwAbYfBo6t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139502>)

Document parsing converts visually rich documents into machine\-readable structured representations, forming a crucial foundation for information systems\. Although many benchmarks have been proposed for document parsing, they remain inadequate for realistic scenarios\. Existing benchmarks either focus on specific tasks or assess only single\-page, text\-centric settings, making them insufficient for practical multi\-page parsing\. Moreover, they lack fine\-grained evaluation of semantic continuity, hierarchical structure recovery, and visual content preservation\. To address these gaps, we propose MPDocBench\-Parse, a benchmark for multi\-page document parsing in real\-world applications\. It contains 433 manually annotated documents with 3,246 pages, covering 15 document types in English and Chinese, with diverse layout styles, and supports document\-level end\-to\-end evaluation\. We further design a comprehensive protocol for content fidelity and logical structure, covering text, table, and formula recognition, truncated text and table merging, figure extraction, reading order, and heading hierarchy recovery\. Experiments show that, while existing models perform well on basic text extraction, they still suffer clear limitations in semantic continuity integration, visual content parsing, and hierarchical structure recovery\. MPDocBench\-Parse provides a unified foundation for advancing document parsing toward more realistic scenarios\.

## SLS\-Bench: A Benchmark for Incident Log Summarization with Synthetic Observability Data

**Authors:** Valerii Iakovlev; Markus Spanring; Martin Flechl

**ID:** 139743\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139743

[Paper](<https://openreview.net/forum?id=764jkex4Xd>) | [PDF](<https://openreview.net/pdf?id=764jkex4Xd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139743>)

_Abstract unavailable from the accessible public sources._

## REDACTED\-Tunes: An Open 1\.4M\-Track Dataset and Perceptual Benchmark for AI\-Generated Music

**Authors:** Robert Kaczmarczyk; TAWSIF AHMED; Felix Friedrich; Aidan C Erickson; Orian Sharoni; Dorien Herremans; Christoph Schuhmann

**ID:** 138942\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138942

[Paper](<https://openreview.net/forum?id=uq5nVvf2sX>) | [PDF](<https://openreview.net/pdf?id=uq5nVvf2sX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138942>)

Generative music platforms have reached commercial scale, with outputs approaching human\-made quality\. Yet music machine learning lags image\-text research because no open music dataset matches the scale that catalyzed image\-text foundation models: commercial recordings cannot be legally redistributed, and existing corpora are small, single\-platform, or both\. AI\-generated music is the natural substrate to close this gap:  We introduce $\\textbf\{REDACTED\-Tunes\}$, an open dataset of URLs and metadata for $\\textbf\{1\{,\}429\{,\}734 AI\-generated music tracks\}$ from Suno, Udio, and Mureka\. The release ships public CDN URLs, 768\-d audio and text embeddings, captions, ASR transcription embeddings \(not raw transcripts\), five\-dimensional aesthetics scores, real and predicted engagement counts, and three\-axis NSFW safety labels under Apache 2\.0\. We also release the models used to annotate the corpus: a 242M\-parameter $\\texttt\{music\-captioner\}$ and fingerprint extractor, a $\\texttt\{SongEval\}$\-calibrated quality scorer, and an engagement predictor trained on platform play and upvote counts\.  To demonstrate downstream utility, we construct a perceptual benchmark from $\\textbf\{REDACTED\-Tunes\}$ and genre\-matched human controls\. In this study, $\\textbf\{61 participants annotated 591 song excerpts\}$, and $\\textbf\{12 LLM\-judge configurations\}$ evaluated the same songs\. Human listeners detect AI music above chance \($d' = 0\.83$\) but modestly \(62\.5\\% accuracy\), outperforming every LLM configuration on balanced accuracy\. We further identify a quality\-\-authenticity halo effect: songs receiving higher aesthetic ratings are more likely to be judged human\-made; equivalently, songs judged real receive nearly two more aesthetic\-quality points than songs judged AI\-generated, independent of true provenance \($p &lt; 10^\{\-26\}$\)\. All dataset artifacts, models, and code are available at https://anonymous\.4open\.science/r/anonymized\-for\-double\-blind\-review, alongside a live $\\textbf\{Tunes\-Search demo\}$ at https://anonymous\.4open\.science/w/anonymized\-for\-double\-blind\-review/search\-tunes\.

## Bernoulli Flow Models: Self\-Consistent Generative Modeling for Binary Data

**Authors:** Hao Mo; Liying Yang; Shumin Yao; Xinxing Yu; Ajian Liu; Xudong Mao; Yanyan Liang

**ID:** 155986\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155986

[Paper](<https://openreview.net/forum?id=1MMIaLs9nW>) | [PDF](<https://openreview.net/pdf?id=1MMIaLs9nW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155986>)

Binary diffusion models typically require a massive number of function evaluations \(NFEs\) to generate high\-quality samples, making practical inference computationally expensive\. Reducing NFEs while preserving sample quality without relying on distillation or additional training remains a significant challenge\. However, existing binary diffusion models sequentially define a discrete one\-step forward path and subsequently derive the reverse posterior\. In low\-NFE scenarios that require cross\-step sampling, these models incorrectly approximate the true multi\-step likelihood using a single\-step likelihood formulation, which severely degrades sample quality\. To address this fundamental limitation and completely decouple the generative dynamics from fixed discrete time steps, we propose Bernoulli Flow Models \(BFM\)\. Rather than building upon sequential one\-step Markov diffusion chains, we predefine a unified continuous global Bernoulli probability flow path between data distributions and pure noise, from which we derive analytical closed\-form posterior transitions over arbitrary time intervals\. Consequently, reducing the inference NFE in BFM is no longer an approximation of skipped discrete steps; it simply requires re\-evaluating the analytical posterior on the new time intervals\. This eliminates the structural training\-inference mismatch inherent to discrete chains, yielding strictly self\-consistent low\-NFE sampling\. Experimental results show that BFM is highly robust to aggressive NFE reduction\. On the LSUN Churches 256x256 dataset, a 256\-step\-trained BFM achieves an FID of 9\.31 when sampled with only 16 steps, whereas the state\-of\-the\-art discrete baseline severely degrades to 204\.10\. BFM also remains competitive with both continuous and discrete generative baselines under standard full\-step inference\. Ultimately, these results establish BFM as a theoretically rigorous, self\-consistent, and practically effective framework for fast binary data generation\.

## TransitLM: A Large\-Scale Dataset and Benchmark for Map\-Free Transit Route Generation

**Authors:** Hanyu Guo; JieDong Yang; Chao Chen; Longfei Xu; Kaikui Liu; Xiangxiang Chu

**ID:** 139623\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139623

[Paper](<https://openreview.net/forum?id=EqcTBAHNnJ>) | [PDF](<https://openreview.net/pdf?id=EqcTBAHNnJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139623>)

Public transit route planning traditionally depends on structured map infrastructure and complex routing engines, and no existing dataset supports training models to bypass this dependency\. We present TransitLM, a large\-scale dataset of over 13 million transit route planning records from four Chinese cities covering 120,845 stations and 13,666 lines, released as a continual pre\-training corpus and benchmark data for three evaluation tasks with complementary metrics\. Experiments show that an LLM trained on TransitLM produces structurally valid routes at high accuracy and implicitly grounds arbitrary GPS coordinates to appropriate stations without any explicit mapping\. These results demonstrate that transit route planning can be learned entirely from data, enabling end\-to\-end, map\-free route generation directly from origin\-destination information\. The dataset and benchmark are available at https://huggingface\.co/datasets/GD\-ML/TransitLM, with evaluation code at https://github\.com/HotTricker/TransitLM\.

## Isharah\-Selfie: Continuous Sign Language Recognition Dataset for One\-handed Signing

**Authors:** Ahmed A Hasanaath; Murtadha Aljubran; Sarah Alyami; Muhammad Haris Khan; Hamzah Luqman

**ID:** 139100\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139100

[Paper](<https://openreview.net/forum?id=l3pvG8AHwe>) | [PDF](<https://openreview.net/pdf?id=l3pvG8AHwe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139100>)

Current sign language recognition and translation benchmarks are commonly collected in controlled settings using fixed or studio\-style cameras, particularly limiting their ability to reflect how signers communicate in everyday mobile scenarios\. As such, this gap becomes increasingly evident when considering the Arabic Sign Language \(ArSL\), which is a primary sign language used across Arab countries\.  In this work, we introduce Isharah\-Selfie, a large\-scale ArSL dataset collected entirely using front\-facing smartphone cameras under unconstrained selfie conditions\. The dataset comprises 8,997 video clips performed by 16 signers across 1,493 unique sentences, covering several domains such as healthcare, education, and transportation\. Unlike conventional datasets dominated by fixed\-camera, two\-handed signing, Isharah\-Selfie captures realistic mobile communication characterized by one\-handed signing, close\-range viewpoints, partial body visibility, camera motion, unconstrained environments, and heterogeneous device resolutions\. Each video is annotated with both gloss sequences for continuous sign language recognition \(CSLR\) and Arabic sentence translations for sign language translation \(SLT\)\. Moreover, we define signer\-independent and unseen\-sentences evaluation protocols to assess generalization across unseen signers and novel sentence compositions\. Extensive benchmarks using RGB\-based and pose\-based data show that current CSLR and SLT methods remain challenged by selfie\-style signing conditions, particularly under unseen\-sentence evaluation, where compositional generalization remains weak\. By releasing Isharah\-Selfie, we aim to support research toward robust, user\-centered sign language technologies that operate reliably in realistic smartphone\-based communication settings\. The Isharah\-Selfie dataset is available on https://www\.github\.com/\.

## ACDP: Architecture\-aware Cross\-Dataset Performance Predictor for NAS

**Authors:** Jiawen Deng; Yuqi Feng; Han Ji; Yanan Sun

**ID:** 154537 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cr87H0HSqL>) | [PDF](<https://openreview.net/pdf?id=Cr87H0HSqL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154537>)

Performance predictors are pivotal in accelerating evaluation in NAS\. Cross\-dataset predictors are trained on \(dataset, architecture, performance\) triplets to efficiently estimate architectural performance for unseen datasets\. However, existing cross\-dataset predictors rely on a naive concatenation of dataset and architecture features\. This fusion ignores the architecture\-aware nature, where the same dataset manifests as distinct representations under different architectures, thereby limiting generalization\. To tackle this issue, we propose ACDP, an Architecture\-aware Cross\-Dataset Performance Predictor that dynamically adjusts dataset feature extraction based on specific architecture\. Initially, ACDP develops an elastic mechanism to extract raw dataset traits, providing a configurable lever for the trade\-off between efficiency and accuracy\. Furthermore, ACDP leverages a hypernetwork to determine dataset feature extractor parameters conditioned on architectural features, transforming raw dataset traits into tailored representations\. ACDP excels in both specialization and generalization on six unseen datasets\. Notably, in NAS\-Bench\-201, ACDP achieves 0\.758/0\.741 Kendall's Tau on CIFAR\-10/100, surpassing single\-dataset SOTAs trained with over 100 target samples\. In MobileNetV3, ACDP discovers architectures outperforming cross\-dataset SOTAs, notably gaining \+2\.04% accuracy on Aircraft\. Code: https://anonymous\.4open\.science/r/ACDP/

## Optimal Representation Size: High\-Dimensional Analysis of Pretraining and Linear Probing

**Authors:** Valentina Njaradi; Clémentine Dominé; Rachel A Swanson; Marco Mondelli; Andrew Saxe

**ID:** 152669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RHhBaG1Vop>) | [PDF](<https://openreview.net/pdf?id=RHhBaG1Vop>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152669>)

Learning to generalise from limited data is a fundamental challenge for both artificial and biological systems\. A common strategy is to extract reusable structure from abundant unlabelled data, enabling efficient adaptation to new tasks from limited labelled data\. This two\-stage paradigm is now standard in modern training pipelines, where pretraining is followed by fine\-tuning or linear probing\.  We provide an analytical model of this process: structure extraction is formalized as principal component analysis on unlabelled data, and downstream learning as linear regression on a separate labelled dataset\. In the high\-dimensional regime, we derive exact expressions for training and generalisation error showcasing their dependence on representation dimensionality, unlabelled and labelled sample sizes, and task alignment\. Our results show that pretrained representations strongly influence downstream generalisation, and we characterize the optimal representation size as a function of task parameters: with abundant pretraining data but scarce downstream data, maximally compressed representations are optimal, whereas with limited pretraining data, higher\-dimensional representations generalise better\. Furthermore, we establish an exact trade\-off between pretraining and supervision, quantifying how much unlabelled data is required to replace a single labelled sample\. Beyond our idealised model, we observe similar phenomenology in autoencoders and pretrained LLMs\. Altogether, we highlight that optimising representation size is critical, giving conditions for when compression during pretraining improves generalisation\.

## ELMA: Benchmarking Anaphoric Compositions for Long\-Term Text\-to\-Motion Generation

**Authors:** Shun Kato; Dixin Yang; Kotaro Amaya; Yuiga Wada; Kazumi Fukuda; Takashi Shibuya; Yuki Mitsufuji; Mariko Isogawa

**ID:** 139367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UWLadjotaK>) | [PDF](<https://openreview.net/pdf?id=UWLadjotaK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139367>)

Text\-guided long\-term human motion generation is essential for applications such as continuously operating digital avatars\. Despite recent progress on short clips, existing models struggle with multi\-segment instructions that involve anaphora, where constraints established in earlier segments must be preserved over time\. In this paper, we introduce a novel task of long\-term motion generation from such anaphoric compositions\. To mitigate this, we present ELMA, an episodic long\-term motion dataset with dense segment\-level annotations that preserve cross\-segment dependencies\. Built via a fully automated collection and filtering pipeline, ELMA extracts high\-quality, continuous 30\-second clips from in\-the\-wild videos, capturing the episodic narratives necessary for long\-range state modeling\. Leveraging this dataset, we fine\-tune state\-of\-the\-art motion generation models to incorporate long\-range context\. Extensive experiments reveal fundamental shortcomings in current models when handling context\-dependent instructions\. We demonstrate that ELMA enables significant improvements in both global physical realism and semantic alignment, setting a robust new baseline for long\-term motion synthesis\.

## ReefNet: A Large\-Scale Dataset and Benchmark for Fine\-Grained Coral Reef Recognition

**Authors:** Abdulwahab Felemban; Yahia Battach; Faizan F Khan; Yuqian Fu; Xuhui Liu; Yesmeen Khattab; Yousef A Radwan; Xiang Li; Natalie Dunn; Susanne Bähr; Tullia I Terraneo; Fabio Marchese; Sara Beery; Burton H Jones; Francesca Benzoni; Mohamed Elhoseiny

**ID:** 139436 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QFiKGFMr8u>) | [PDF](<https://openreview.net/pdf?id=QFiKGFMr8u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139436>)

Coral reefs are rapidly declining under anthropogenic pressures \(e\.g\., climate change\), creating an urgent need for scalable and automated monitoring\. Progress in data\-driven coral analysis, however, is constrained by the scarcity of large\-scale datasets with fine\-grained labels that are taxonomically consistent across sites and studies\. To address this gap, we introduce ReefNet, a large\-scale public coral reef image dataset with point\-level annotations mapped to the World Register of Marine Species \(WoRMS\) taxonomy\. ReefNet aggregates imagery from 76 curated CoralNet sources and an additional reef site from Al\-Wajh \(Red Sea\), totaling approximately 925K genus\-level hard coral annotations\. Through expert\-driven verification and targeted filtering, we derive a high\-confidence benchmark subset with 92% expert agreement over 39 hard\-coral label classes, enabling reliable evaluation under realistic label noise and strong class imbalance\. Beyond dataset construction, we establish a comprehensive benchmark spanning zero\-shot, cross\-domain few\-shot adaptation, within\-source evaluation, and cross\-source transfer to the Al\-Wajh dataset\. Experiments with state\-of\-the\-art vision–language models \(VLMs\), multimodal large language models \(MLLMs\), and vision\-only backbones reveal substantial degradation in zero\-shot and extremely few\-shot regimes, while adaptation with in\-domain supervision yields large gains yet still leaves a persistent gap under cross\-source shift and on long\-tail genera\. These results highlight fundamental challenges in applying general\-purpose multimodal models to biodiversity monitoring and underscore the importance of large\-scale, taxonomically grounded, high\-quality datasets\. ReefNet serves as both a benchmark and a training resource for advancing fine\-grained coral reef understanding\. ReefNet data and trained models are provided on Hugging Face, and code for accessing and benchmarking the data is provided on GitHub\.

## When Scores Conflict with Preferences: Calibrated Drift Control for Heterogeneous DPO

**Authors:** Ping Liu; Yan Yan

**ID:** 151343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bFc8A2Irjf>) | [PDF](<https://openreview.net/pdf?id=bFc8A2Irjf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151343>)

Direct Preference Optimization \(DPO\) is increasingly used in settings where pairwise preference signals coexist with pointwise criteria such as response length, answer correctness, or safety scores\. When the two disagree, standard DPO does not explicitly distinguish pairs that improve the pointwise criterion from those that worsen it\. We show that this mismatch induces a systematic failure mode, which we call \*\*constraint drift\*\*: updates on disagreement pairs tend to increase pointwise violation, while updates on aligned pairs tend to repair it, with the overall drift governed by their balance\. Under a first\-order approximation, this balance yields a closed\-form pre\-alignment diagnostic, $\\rho^\{\*\}\_\\mathrm\{eq\}$, computable from dataset statistics alone, that predicts whether the data is self\-correcting or requires intervention before alignment begins\. Building on this diagnostic, we propose \*\*Conflict\-aware DPO \(CoDPO\)\*\*, a calibrated modification to the DPO loss with two complementary components: a coarse per\-sample control for primary drift regulation and a fine adaptive margin tilting for residual correction during training\. Across six domains, drift grows monotonically with conflict exposure, and $\\rho^\{\*\}\_\\mathrm\{eq\}$ tracks the empirical drift transition, including self\-correcting settings where intervention is unnecessary\. Across four base\-model architectures and multiple preference losses, CoDPO reduces drift while preserving preference learning\. Compared with hard filtering and recent constrained\-alignment and multi\-objective baselines, CoDPO achieves a more favorable trade\-off between drift control and preference performance\.

## CounterStrike\-1K: A Multi\-Perspective Dataset of Professional Gameplay for World Modeling

**Authors:** Anirudhh Ramesh

**ID:** 139606 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FsEoZwUHsR>) | [PDF](<https://openreview.net/pdf?id=FsEoZwUHsR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139606>)

_Abstract unavailable from the accessible public sources._

## PULSE: A Synchronized Five\-Modality Dataset for Sensorimotor Coordination in Long\-Horizon Daily Activities

**Authors:** Wolin Liang; Yang Gao; Peiyu Yan; YueXiang Hu; Yingjing Xiao; Xiongfeng Ying; YingNian Guo; Cheng Zhang; Zhanpeng Jin

**ID:** 139681 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AoU576r9O2>) | [PDF](<https://openreview.net/pdf?id=AoU576r9O2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139681>)

_Abstract unavailable from the accessible public sources._

## OpenSanctions Pairs: A Large\-Scale Dataset for Pairwise Entity Matching

**Authors:** Chandler Smith; Magnus Sesodia; Friedrich Lindenberg; Christian Schroeder de Witt

**ID:** 139718 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8gjD9mKs1q>) | [PDF](<https://openreview.net/pdf?id=8gjD9mKs1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139718>)

_Abstract unavailable from the accessible public sources._

## HierSVA: A Synthesis Pipeline, Dataset, and Benchmark for LLM\-Driven Hierarchical Hardware Formal Verification

**Authors:** Maohua Nie; Jiang Zhu; Jingqun Zhang; Zhichen Zeng; Jiayi Wang; Sibo Zhang; Jialin Wang; C\-J R Shi

**ID:** 139579 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H9UpVBr5RW>) | [PDF](<https://openreview.net/pdf?id=H9UpVBr5RW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139579>)

_Abstract unavailable from the accessible public sources._

## InSpect: A Curated Natural History Collection Dataset for Insect Specimen Understanding

**Authors:** Junhao Zhang; Feng Xu; Ahalya Ravendran; Nicole Fisher; Brendan Tidd; Lars Petersson; Dadong Wang; Xun Li

**ID:** 139783 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=51J0UrBZZy>) | [PDF](<https://openreview.net/pdf?id=51J0UrBZZy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139783>)

_Abstract unavailable from the accessible public sources._

## CounterStrike\-1K: A Multi\-Perspective Dataset of Professional Gameplay for World Modeling

**Authors:** Anirudhh Ramesh

**ID:** 139606\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139606

[Paper](<https://openreview.net/forum?id=FsEoZwUHsR>) | [PDF](<https://openreview.net/pdf?id=FsEoZwUHsR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139606>)

_Abstract unavailable from the accessible public sources._

## PULSE: A Synchronized Five\-Modality Dataset for Sensorimotor Coordination in Long\-Horizon Daily Activities

**Authors:** Wolin Liang; Yang Gao; Peiyu Yan; YueXiang Hu; Yingjing Xiao; Xiongfeng Ying; YingNian Guo; Cheng Zhang; Zhanpeng Jin

**ID:** 139681\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139681

[Paper](<https://openreview.net/forum?id=AoU576r9O2>) | [PDF](<https://openreview.net/pdf?id=AoU576r9O2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139681>)

_Abstract unavailable from the accessible public sources._

## The Dormant Spiking Neuron: A State\-Driven Mechanism for Efficient Spiking Neural Networks

**Authors:** Ruichen Ma; Yicai Chen; Pujun Zhou; Yue Zuo; Chongyang Li; Shuang Liu; Shaogang Hu; Guanchao Qiao

**ID:** 150735 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fmUnrAKlSL>) | [PDF](<https://openreview.net/pdf?id=fmUnrAKlSL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150735>)

Spiking neural networks \(SNNs\) offer a compelling pathway toward energy\-efficient artificial intelligence, fundamentally anchored in presynaptic input\-driven sparsity\. However, a substantial yet chronically overlooked source of computational overhead persists: the continuous subthreshold dynamics of postsynaptic neurons\. Quantitative analysis reveals that up to 44\\% of neurons in an ImageNet\-trained ResNet\-18 model reside in a deeply inhibited state, imposing a persistent computational burden despite possessing a negligible probability of firing\. To eradicate this inefficiency, the Dormant Spiking Neuron \(DSN\) model is introduced\. By incorporating a state\-driven dynamic gate, the DSN allows a neuron to enter a dormant state when its membrane potential falls below a predefined negative threshold, dynamically pruning redundant computations at the instance level\. Crucially, this dormancy mechanism is directly integrated into the neuronal dynamics and trained end\-to\-end via backpropagation through time using surrogate gradients, enabling the network to actively learn a robust dormancy policy that adaptively preserves critical information flow\. Extensive experiments across static and neuromorphic datasets demonstrate that the DSN framework consistently reduces computational energy by 40\\% to over 70\\%\. Notably, on the large\-scale ImageNet dataset, the DSN outperforms state\-of\-the\-art static pruning techniques by achieving equivalent energy savings while simultaneously improving upon the baseline accuracy by 1\.34\\%\. By establishing a trainable, state\-driven sparsity paradigm orthogonal to conventional input\-driven methods, the DSN unlocks synergistic efficiency gains, presenting a highly potent approach for advancing neuromorphic computing\. Source code will be made publicly available\.

## Bricker to BRACE: A Bracket Exposure RAW Dataset and Restoration Model for Flicker\-Banding

**Authors:** Zihan Zhou; Libo Zhu; Jue Gong; Zhiyi Zhou; Jiezhang Cao; Yong Guo; Yulun Zhang

**ID:** 149112 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smrclDT0Hn>) | [PDF](<https://openreview.net/pdf?id=smrclDT0Hn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149112>)

Flicker\-banding \(FB\),  arises from temporal aliasing between a camera's rolling shutter and a display's brightness modulation, degrading screen\-captured image readability with color shifts and jagged patterns\. Existing single\-frame methods with simplified parametric stripe models cannot reliably distinguish these artifacts from genuine texture\. To address this, we conduct a systematic analysis of complex FB morphologies and reveal their significant variation across exposure settings, motivating a multi\-frame bracketed RAW restoration paradigm\. We construct Bricker, a synthetic–real bracketed RAW dataset built via ray\-tracing\-based physical simulation and automated multi\-exposure capture tool\. We further propose BRACE: Bracketed RAW Flicker\-Banding Removal, a multi\-frame restoration model that utilizes frequency\-aware banding prior and a multi\-scale spatial cross\-attention modulator \(MSCAM\) for cross\-exposure spatial fusion\. We also introduce the Stripe Frequency Consistency \(SFC\) metric to evaluate banding removal\. Extensive experiments demonstrate state\-of\-the\-art performance on both synthetic and real benchmarks\. Our dataset and code will be publicly released\.

## State\-of\-art minibatches via novel DPP kernels: discretization, wavelets, and rough objectives

**Authors:** Hoang Son Tran; Pranav Gupta; Rémi Bardenet; Subhroshekhar Ghosh

**ID:** 154500\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154500

[Paper](<https://openreview.net/forum?id=D8tqZupi52>) | [PDF](<https://openreview.net/pdf?id=D8tqZupi52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154500>)

Determinant point processes \(DPPs\) have recently emerged as a kernelized alternative to vanilla independent sampling for generating efficient minibatches, coresets and other parsimonious representations of large\-scale datasets\. While basic theoretical foundations and promising empirical performance have been demonstrated, there are two main challenges for current proposals for DPP\-based coresets or minibatches\. The first is the need for families of DPPs with certain key variance reduction properties, usually constructed in a continuous setting, of which there are few known examples\. The second is the need for an ad\-hoc construction of a discrete DPP defined on a given dataset, that inherits such variance reduction\. In this work, we contribute to the programme of establishing DPPs as a subsampling toolbox for ML by advancing on these two fronts\. First, we propose new DPPs on the Euclidean space based on wavelets, with provably better accuracy guarantees than the best known rates\. Second, we introduce a general method to convert such continuous DPPs, which are more amenable to proving analytical statements, into discrete kernels, which are pertinent for subsampling tasks such as minibatch and coreset constructions\. This conversion mechanism simultaneously preserves the desired variance decay and reveals a low\-rank decomposition of the discrete kernel, which makes sampling the corresponding DPP computationally inexpensive\. En route, we enlarge the class of ML tasks amenable to improvements via DPP\-based minibatches and coresets to include highly non\-smooth objective functions, with arbitrarily low regularity, and rate guarantees that adapt explicitly to this regularity\.

## LSC\-Parlament: An Automatically Aligned Catalan Sign Language Dataset from Parliament Videos\.

**Authors:** Carlos Escolano; Gerard Sant; Marc J Garcia; Joan G Cortés; Marcel Granero Moya; Francesca De Luca Fornaciari; Maite Melero

**ID:** 139029\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139029

[Paper](<https://openreview.net/forum?id=pPt0iqECnh>) | [PDF](<https://openreview.net/pdf?id=pPt0iqECnh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139029>)

Progress in Sign Language Translation \(SLT\) is frequently hampered by the "data bottleneck," a challenge particularly acute for regional languages such as Catalan Sign Language \(LSC\)\. In this paper, we present LSC\-Parlament, a large\-scale, multimodal dataset for LSC derived from Catalan Parliament sessions spanning 2021 to 2024\. The dataset comprises over 87 hours of LSC video, synchronized with speech and text translations in either Catalan or Spanish\. To curate this resource, we developed a fully automated pipeline that enables alignment between sign language, speech, and text without requiring prior human\-annotated data\. We provide a systematic evaluation of the dataset across multiple dimensions, including video tracking quality, audio transcription accuracy, and translation benchmarks\. Our experiments compare transfer learning, zero\-shot, and supervised translation settings, demonstrating significant knowledge transfer between spoken languages in the LSC\-Spanish modality\. By releasing LSC\-Parlament, we provide a challenging open\-domain benchmark to foster research in inclusive and scalable translation technologies\.

## New Coresets for Fair Clustering

**Authors:** Xuan Wu; Chansophea Wathanak In; Yi Li

**ID:** 152649\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152649

[Paper](<https://openreview.net/forum?id=RQT8lzmK8J>) | [PDF](<https://openreview.net/pdf?id=RQT8lzmK8J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152649>)

We construct the first coreset of size near\-linear in $k$ for fair \\kMedian in general metric spaces\. Combined with the standard merge\-and\-reduce framework, our construction also gives the first streaming algorithm for fair \\kMedian with space complexity near\-linear in $k$\.  The main technical innovation is a distributional reinterpretation of capacitated clustering that the cost of assigning a dataset to a capacitated center set can be expressed as the earth mover's distance between two discrete distributions\. This viewpoint enables us to use tools from optimal transport to analyse uniform sampling\. A key ingredient in this analysis is a new family of problem\-specific $\\eps$\-nets for the earth mover's distance\.

## AgentCollabBench: Diagnosing When Good Agents Make Bad Collaborators

**Authors:** Aritra Mazumder; Shubhashis Roy Dipta; Nusrat Jahan Lia; Tanzila Khan; Kainat R Hossain; Nehaa Shri; Humayra Tasnim; Gour G Shawon; Shubhrangshu Debsarkar; Sumaiya A Rani; Al Jami Islam Anik; Debjoty Mitra; Al Nafeu Khan

**ID:** 139450 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P9qqypDzuC>) | [PDF](<https://openreview.net/pdf?id=P9qqypDzuC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139450>)

Multi\-agent systems achieve state\-of\-the\-art outcomes through peer     collaboration\. However, when an agent in the pipeline silently drops a     constraint, the system's final output may look correct even though the     reasoning chain was quietly corrupted, and existing outcome\-based     evaluations are blind to such multi\-hop process failures\. To make these     vulnerabilities measurable before deployment, we introduce     AgentCollabBench, a diagnostic benchmark of 900 human\-validated tasks     spanning software engineering, DevOps, and data engineering\. Each task     isolates one of four behavioral risks: instruction decay \(does a     constraint survive peer pressure?\), false\-belief contagion \(does a     falsehood spread through consensus?\), context leakage \(does information     bleed between tasks?\), and tracer durability \(does marked data reach the     final agent?\)\. Evaluating four modern LLMs \(GPT 4\.1 mini,     Gemini 2\.5 Flash Lite, Qwen\-3\.5\-35B\-A3B, and Llama 3\.1 8B Instruct\),     we expose model\-specific vulnerability profiles invisible to     outcome\-only evaluation; Qwen\-3\.5\-35B\-A3B, for example, leads on     tracer durability and instruction stability, while GPT 4\.1 mini leads     on leakage containment and false\-belief resistance\.     Beyond per\-model differences, communication topology emerges as a     primary risk factor that explains 7\-40% of the variance in multi\-hop     information survival\. The effect traces to a synthesis bottleneck     specific to converging\-DAG nodes: an agent weighing competing parent     inputs discards constraints carried by a minority branch, a bottleneck structurally absent from linear chains\. AgentCollabBench demonstrates that suboptimal     topology can silently erase the safeguards of highly capable models,     arguing that multi\-agent reliability is fundamentally a structural     problem and that scaling model intelligence alone is no substitute for     architecture\.

## SCTI: Self\-Calibrated Trident Identification of Black\-Box LLM Watermarks

**Authors:** Zhixiong Nan; Haoyu Lu; Tao Xiang; Yiwei Wang

**ID:** 149151 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sSXd2zEa4O>) | [PDF](<https://openreview.net/pdf?id=sSXd2zEa4O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149151>)

_Abstract unavailable from the accessible public sources._

## Label\-Efficient Dataset Pruning via Semi\-Supervised Pseudo\-Labeling

**Authors:** Yeseul Cho; Baekrok Shin; Changmin Kang; Chulhee Yun

**ID:** 150749 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fgWh6OZ6W8>) | [PDF](<https://openreview.net/pdf?id=fgWh6OZ6W8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150749>)

_Abstract unavailable from the accessible public sources._

## AdaM\-Rec: Adaptive Modality Routing for Multimodal Recommendation

**Authors:** Honghao Fu; Jiacheng Chen; Manxi Lin; Junjun Zheng; Xiangheng Kong; Yiwei Wang; Xin Yu; Miao Xu; Yuning Jiang; Yujun Cai

**ID:** 148211 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zXa9cVWJdT>) | [PDF](<https://openreview.net/pdf?id=zXa9cVWJdT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148211>)

While recent multimodal recommender systems have demonstrated the effectiveness of incorporating visual and textual information to improve downstream performance, most existing methods rely on static modality fusion, assuming that the relative importance of textual and visual signals remains stable across recommendation scenarios\. This design may not fully account for an important variation across recommendation requests: some queries require fine\-grained visual cues, whereas others are better served by textual or functional semantics, in which case indiscriminate modality fusion brings in uninformative cues and impairs recommendation quality\. To address this, we propose AdaM\-Rec, an LLM\-based framework for adaptive modality routing in multimodal recommendation, which enables dynamic calibration of reliance on textual and multimodal evidence for user\-specific queries\. Built on structured natural\-language representations of items and user preferences, it estimates modality reliability using proxy recall tasks\. Specifically, it generates pseudo\-queries that match the granularity of the actual query while pointing to the user's positively interacted items as verifiable proxy targets, evaluating which modality yields better recall performance in analogous scenarios and optimizing the routing strategy in an agentic manner\. It then performs routed recall with optimized strategy, enriches results with collaborative items, and ranks candidates by their relevance to both the query and user preferences\. Experiments demonstrate that AdaM\-Rec delivers strong performance against state\-of\-the\-art baselines, highlighting the effectiveness and broader potential of adaptive control over modality reliance in multimodal recommendation\. Code will be publicly available\.

## Vendi Anomaly Scores for Efficient and Accurate Anomaly Detection

**Authors:** Amey Pasarkar; Adji Bousso Dieng

**ID:** 148885 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uT5yKtgYS0>) | [PDF](<https://openreview.net/pdf?id=uT5yKtgYS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148885>)

Anomaly detection \(AD\) is a critical task in machine learning and scientific discovery\. Existing methods that operate on learned embeddings typically define anomalies through local density, isolation heuristics, or distance from a fitted distribution, making them sensitive to neighborhood scale, partitioning choices, or restrictive distributional assumptions\. In this work, we introduce a new paradigm by formulating anomaly detection in terms of dataset diversity\. We propose the Vendi Anomaly Score \(VAS\), which detects anomalies by quantifying how much a sample changes the diversity of the dataset, as measured by the Vendi Score, when removed\. VAS captures both local redundancy and global data structure without relying on density estimation or partitioning heuristics\. Moreover, VAS requires no hyperparameter tuning, instead adapting automatically to the spectral structure of the data\. VAS is non\-parametric and scales linearly with dataset size\. Across 148 benchmark embedding datasets derived from 10 source datasets and 4 embedding architectures, VAS achieves state\-of\-the\-art AD performance\. We further validate VAS on large\-scale ImageNet experiments, where it remains robust as both contamination rate and dataset scale increase\.

## The Missing Corpus: Infinite Ground Truth for File\-Grounded LLM Evaluation

**Authors:** Anush Sankaran; Arijit Banerjee; Pamela Bhattacharya; Tanujay Saha

**ID:** 139327 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X8UDpzYS5G>) | [PDF](<https://openreview.net/pdf?id=X8UDpzYS5G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139327>)

Evaluating enterprise LLMs on file\-grounded Question Answering \(QA\) requires large, labeled corpora of realistic enterprise PDFs, yet real documents are sensitive, scarce, and impossible to annotate at scale\. Existing synthetic approaches produce visually crude renders, annotate ground truth post\-hoc \(introducing hallucination risk\), or are non\-reproducible one\-off scripts with no diversity control\. We present SynthDocQA, an Intermediate Representation\(IR\)\-driven pipeline that co\-generates photorealistic multi\-page enterprise PDFs and provenance\-grounded evaluation pairs in a single pass\. A compact Document Generation IR encodes topic, content schedule, and perturbation profile before rendering begins\. Templates are retrieved per page via Contrastive Language\-Image Pretraining \(CLIP\) embedding\-based cross\-modal search over a 10,000\-layout library; a 15\-stage physical degradation pipeline models five scan quality tiers from pristine to poor\. Every QA assertion is derived analytically from the same structured artifact that populated the page, making hallucination structurally impossible, and a hierarchical fork\-based Random Number Generator \(RNG\) guarantees exact reproducibility from a single integer seed\. A reference 100\-document corpus spans 50 enterprise domains, 4,374 pages, 16,589 QA pairs, and 21,402 assertions at zero annotation cost\.

## Robust Approximate Nearest Neighbor Search for Any Dataset

**Authors:** Alexandr Andoni; Themistoklis Haris; Esty Kelman; Krzysztof Onak

**ID:** 150072 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kxeeWaxYv9>) | [PDF](<https://openreview.net/pdf?id=kxeeWaxYv9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150072>)

_Abstract unavailable from the accessible public sources._

## FLARE: Full\-Modality Long\-Video Audiovisual Retrieval Benchmark with User\-Simulated Queries

**Authors:** Qijie You; Hao Liang; Mingrui Chen; Bohan Zeng; Meiyi Qiang; Zhen H Wong; Wentao Zhang

**ID:** 139338 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VwiAEEv0xh>) | [PDF](<https://openreview.net/pdf?id=VwiAEEv0xh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139338>)

_Abstract unavailable from the accessible public sources._

## NavOCR: A Dataset Generator for Navigation\-Relevant Text Detection in Mobile Robots

**Authors:** Chaehyeuk Lee; Sooyong Shin; Sehyeon Yoon; Youngsun Je; Jinmyoung Lee; Seula Lee; Tu Vo; Sheir A\. Zaheer; Chan Youn Park

**ID:** 139357 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UqyPL0tSI3>) | [PDF](<https://openreview.net/pdf?id=UqyPL0tSI3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139357>)

_Abstract unavailable from the accessible public sources._

## Intent2CAD: How Semantic\-Parametric Supervision Shapes Text\-to\-CAD Generation

**Authors:** Jinbo Yang; Shikai Jing; Mingyue Yuan

**ID:** 155244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7BejwX1V86>) | [PDF](<https://openreview.net/pdf?id=7BejwX1V86>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155244>)

Text\-to\-CAD generation aims to make CAD modeling more accessible by generating executable CAD programs from natural\-language descriptions\.  However, practical CAD workflows require more than executable geometry: generated programs should also expose reusable structure that supports later modification\.  We introduce intent\-oriented text\-to\-CAD generation, where design intent is expressed as recoverable code\-level signals: semantic features, reusable parameters, and lightweight parametric relations\.  Rather than changing the model architecture or decoding procedure, we investigate how supervision representation granularity affects both CAD generation and zero\-shot intent\-preserving editing\.  To enable this study, we construct IntentCAD\-100K, a 100K paired text\-\-code dataset built by converting low\-level CAD construction traces into executable CadQuery programs\.  We further construct IntentCAD\-Edit\-1K to evaluate zero\-shot intent\-preserving editing from the same representation perspective\.  Intent2CAD uses a two\-stage conservative lifting pipeline: semantic lifting rewrites reliable primitive groups into feature\-level operations, while parametric lifting exposes lightweight parametric relations\.  Under controlled fine\-tuning, semantic lifting mainly improves generation reliability and feature recovery, reducing IR from 2\.39% to 0\.22% and achieving 99\.96% API Recovery, while parametric lifting makes reusable relation structure explicit and further improves relation\-aware zero\-shot editing\.

## Dynamic k\-center clustering with lifetimes

**Authors:** Simone Moretti; Paolo Pellizzoni; Andrea Pietracaprina; Geppino Pucci

**ID:** 153912 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HlPYOXghrm>) | [PDF](<https://openreview.net/pdf?id=HlPYOXghrm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153912>)

The $k$\-center problem is a fundamental clustering variant with applications in learning systems and data summarization\. In several real\-world scenarios, the dataset to be clustered is not static, but evolves over time, as new data points arrive and old ones become stale\. To account for dynamicity, the $k$\-center problem has been mainly studied under the sliding window setting, where only the $N$ most recent points are considered non\-stale, or the fully dynamic setting, where arbitrary sequences of point arrivals and deletions without prior notice may occur\. In this paper, we introduce the dynamic setting with lifetimes, which bridges the two aforementioned classical settings by still allowing arbitrary arrivals and deletions, but making the deletion time of each point known upon its arrival\. Under this new setting, we devise a deterministic $\(2\+\\varepsilon\)$\-approximation algorithm with $\\widetilde\{O\}\(k/\\varepsilon\)$ amortized update time and memory usage linear in the number of currently active points\. Moreover, we develop a deterministic $\(6\+\\varepsilon\)$\-approximation algorithm that, under ‘‘tame” update sequences, has $\\widetilde\{O\}\(k/\\varepsilon\)$ worst\-case update time and heavily sublinear working memory\.

## ACDP: Architecture\-aware Cross\-Dataset Performance Predictor for NAS

**Authors:** Jiawen Deng; Yuqi Feng; Han Ji; Yanan Sun

**ID:** 154537\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154537

[Paper](<https://openreview.net/forum?id=Cr87H0HSqL>) | [PDF](<https://openreview.net/pdf?id=Cr87H0HSqL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154537>)

Performance predictors are pivotal in accelerating evaluation in NAS\. Cross\-dataset predictors are trained on \(dataset, architecture, performance\) triplets to efficiently estimate architectural performance for unseen datasets\. However, existing cross\-dataset predictors rely on a naive concatenation of dataset and architecture features\. This fusion ignores the architecture\-aware nature, where the same dataset manifests as distinct representations under different architectures, thereby limiting generalization\. To tackle this issue, we propose ACDP, an Architecture\-aware Cross\-Dataset Performance Predictor that dynamically adjusts dataset feature extraction based on specific architecture\. Initially, ACDP develops an elastic mechanism to extract raw dataset traits, providing a configurable lever for the trade\-off between efficiency and accuracy\. Furthermore, ACDP leverages a hypernetwork to determine dataset feature extractor parameters conditioned on architectural features, transforming raw dataset traits into tailored representations\. ACDP excels in both specialization and generalization on six unseen datasets\. Notably, in NAS\-Bench\-201, ACDP achieves 0\.758/0\.741 Kendall's Tau on CIFAR\-10/100, surpassing single\-dataset SOTAs trained with over 100 target samples\. In MobileNetV3, ACDP discovers architectures outperforming cross\-dataset SOTAs, notably gaining \+2\.04% accuracy on Aircraft\. Code: https://anonymous\.4open\.science/r/ACDP/

## MCPHallu: Benchmarking Reasoning, Execution, and Memory Hallucinations in MCP Agents

**Authors:** Yizhen Jiang; 浩伟 郭; Tianyi Bai; Zengjie Hu; Lu Ma; Zhengyang Zhao; Haoze Sun; Peng Pei; Wentao Zhang

**ID:** 139758 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XKGOgVQft>) | [PDF](<https://openreview.net/pdf?id=6XKGOgVQft>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139758>)

_Abstract unavailable from the accessible public sources._

## When Scores Conflict with Preferences: Calibrated Drift Control for Heterogeneous DPO

**Authors:** Ping Liu; Yan Yan

**ID:** 151343\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151343

[Paper](<https://openreview.net/forum?id=bFc8A2Irjf>) | [PDF](<https://openreview.net/pdf?id=bFc8A2Irjf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151343>)

Direct Preference Optimization \(DPO\) is increasingly used in settings where pairwise preference signals coexist with pointwise criteria such as response length, answer correctness, or safety scores\. When the two disagree, standard DPO does not explicitly distinguish pairs that improve the pointwise criterion from those that worsen it\. We show that this mismatch induces a systematic failure mode, which we call \*\*constraint drift\*\*: updates on disagreement pairs tend to increase pointwise violation, while updates on aligned pairs tend to repair it, with the overall drift governed by their balance\. Under a first\-order approximation, this balance yields a closed\-form pre\-alignment diagnostic, $\\rho^\{\*\}\_\\mathrm\{eq\}$, computable from dataset statistics alone, that predicts whether the data is self\-correcting or requires intervention before alignment begins\. Building on this diagnostic, we propose \*\*Conflict\-aware DPO \(CoDPO\)\*\*, a calibrated modification to the DPO loss with two complementary components: a coarse per\-sample control for primary drift regulation and a fine adaptive margin tilting for residual correction during training\. Across six domains, drift grows monotonically with conflict exposure, and $\\rho^\{\*\}\_\\mathrm\{eq\}$ tracks the empirical drift transition, including self\-correcting settings where intervention is unnecessary\. Across four base\-model architectures and multiple preference losses, CoDPO reduces drift while preserving preference learning\. Compared with hard filtering and recent constrained\-alignment and multi\-objective baselines, CoDPO achieves a more favorable trade\-off between drift control and preference performance\.

## Phantom Transfer: Data Poisoning can Survive Data\-Level Defences

**Authors:** Andrew Draganov; Tolga Hasan Dur; Anandmayi \(Andi\) Bhongade; Mary Phuong

**ID:** 148827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uqYXmNMqRZ>) | [PDF](<https://openreview.net/pdf?id=uqYXmNMqRZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148827>)

We present a data poisoning attack\-\-\-Phantom Transfer\-\-\-with the property that, even if you know precisely how the poison was placed into an otherwise benign dataset, you cannot filter it out\.  We achieve this by modifying subliminal learning to work in real\-world contexts and demonstrate that the attack works regardless of which model produces the data, which model is trained on the data or what the attack target is\. The attack survives 11 tested data\-level defences, including one where every sample is paraphrased by a different model\. We characterise when this attack works best and show that it can be used to plant password\-triggered behaviours into models while still beating defences\.   In short, we provide an existence proof that maximum\-affordance defences can fail to stop sophisticated data poisoning attacks\. We suggest that future defences should supplement by include white\-box methods and post\-training model audits\.

## Which Pairs Should We Compare for DPO?

**Authors:** Vineet Goyal; Jiangze \(Jay\) Han; Will Ma

**ID:** 150544 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hL3RIcTy5X>) | [PDF](<https://openreview.net/pdf?id=hL3RIcTy5X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150544>)

Direct Preference Optimization \(DPO\) has become a standard method for preference\-based fine\-tuning in RLHF pipelines\. A practical but largely heuristic step in DPO is dataset curation: given a fixed budget of preference labels, which candidate pairs should be compared to produce the most informative training set and the best downstream policy? This paper studies DPO dataset curation as a sampling\-design problem\. We model the curated dataset by a sampling design over candidate pairs and analyze how this design propagates through DPO training to the KL\-regularized RLHF objective\.  Our main results provide matching upper and lower bounds on the RLHF optimality gap of the policy learned from a curated DPO dataset\. The bounds reveal a simple structural message: the effect of pair selection enters only through a single design\-dependent matrix that summarizes how informative the collected comparisons are for learning the policy parameters\. This leads to a trace\-form criterion that characterizes both an achievable performance guarantee for the DPO estimator and an information\-theoretic lower bound for any induced policy estimator, thereby identifying a canonical objective for comparison curation under budget constraints\.

## Early Prediction of Future Behavioral Strategy from Process Traces

**Authors:** Robert Kasumba; Dennis Barbour; Chien\-Ju Ho

**ID:** 149638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ob4yUUSPk3>) | [PDF](<https://openreview.net/pdf?id=ob4yUUSPk3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149638>)

Adaptive systems often need to make task\-specific decisions about a person from limited prior evidence: a tutor may need to anticipate how a learner will approach a new problem, a game may need to adapt when a player enters a new level, and a human\-AI system may need to infer whether a partner will persist with a plan or switch goals\. These decisions depend on person\-level behavioral tendencies that shape how people solve related tasks, but such tendencies are difficult to infer from standard behavioral evidence\. One approach is to use aggregate outcome summaries, such as scores, completion rates, or productivity measures; these summaries are compact and available across tasks, but can collapse distinct behavioral processes into similar outcomes\. Another approach is to use process\-level traces, which record how behavior unfolds over time; however, process modeling within a single task can entangle stable person\-level tendencies with task\-specific layout, timing, and affordances\. In this work, we study early cross\-task behavioral inference: whether partial process traces from multiple source tasks can reveal transferable person\-level behavioral structure that predicts strategy in a held\-out target task\. We introduce Process\-Level Latent Variable Models \(PLVM\), which encode task\-specific traces and fuse them into a shared person\-level latent representation for cross\-task prediction\. In PowerWash Simulator, a naturalistic telemetry dataset of real human gameplay, PLVM uses partial traces from two earlier cleaning tasks to predict whether a player will exhibit locally persistent Zone Planner behavior or frequent Zone Hopper behavior in the held\-out Fire Station level\. Controlled simulations with known latent behavioral types show that cross\-task fusion helps when different source tasks reveal complementary dimensions of a shared latent behavioral process\. These results suggest that process\-level cross\-task modeling can support early prediction of target\-task behavioral strategy when waiting to observe sufficient target\-task behavior is impractical\.

## KNN Implementation Details Can Dramatically Change Performance: An Example from Cover Trees

**Authors:** Amol Khanna; Edward Raff

**ID:** 139272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aTFEoAwK2Q>) | [PDF](<https://openreview.net/pdf?id=aTFEoAwK2Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139272>)

Nearest neighbor search algorithms are widely used and have a long history, but we find that key implementation details are seldom reviewed in articles about them\. These details can materially impact performance, and thus change the conclusions one makes about a given algorithm's superiority\. In this article, we highlight these impacts by reviewing the Cover Tree as an example, producing RustKNN, a unified Rust implementation of three construction variants of the Cover Tree with three query modes\. Our analysis reveals: \(1\) the optimal query strategy depends on $k$ and on the dataset — single\-tree search is fastest at $k\{=\}1$ on three of our four largest datasets, while dual\-tree search is fastest at $k\{\\ge\}5$ on the three largest — and choosing the wrong query mode can cost up to a $7\.5\\times$ factor in runtime; \(2\) the cover tree base parameter, set to 2 in theory and 1\.3 in practice, is not a safe default for dual\-tree search: 1\.3 is optimal on only one of seven datasets, and on covtype it is $1\.6\\times$ slower than the optimum; \(3\) among five micro\-optimizations, only early\-exit distance computation has a consistent effect, and that effect grows with dimension \(none at $d\{=\}32$, $1\.31\\times$ at $d\{=\}54$, and $1\.49\\times$ at $d\{=\}784$\); and \(4\) all\-nearest\-neighbor and held\-out benchmarks yield different implementation rankings\. All main timing tables report medians over 20 independent allocations with bootstrap 95\\% confidence intervals\. RustKNN is open source at https://github\.com/CrowdStrike/RustKNN\.

## Auditing Evidence Framing at NeurIPS: A Decade\-Scale Study of Accepted Papers

**Authors:** Jason Godfrey

**ID:** 139236 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d3J7bxCLHH>) | [PDF](<https://openreview.net/pdf?id=d3J7bxCLHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139236>)

NeurIPS now publishes a broad mix of algorithmic, theoretical, empirical, dataset, benchmark, systems, and evaluation\-infrastructure work\. Yet we lack systematic evidence on how the composition of this mix has changed over time\. We audit titles, abstracts, and metadata for 19,361 accepted NeurIPS papers from 2015\-\-2024\. We define semantic axes for formal\-theoretical evidence, benchmark/resource evidence, empirical\-performance evidence, artifact\-release orientation, scale/capability framing, claim strength, and hedging; score papers with contrastive embedding measures; and validate the constructs with blinded LLM\-agent ratings, lexical probes, encoder triangulation, length checks, and topic controls\. In raw decade trends, accepted papers shift toward benchmark/resource evidence \(\+0\.842 SD\), empirical\-performance evidence \(\+0\.750 SD\), and scale/capability framing \(\+0\.606 SD\), and away from formal\-theoretical framing \(\-0\.872 SD\)\. Topic composition explains much of this movement, but embedding\-cluster residuals remain \+0\.246, \+0\.264, \+0\.247, and \-0\.300 SD, respectively\. Independent lexical LDA controls preserve the same signs at smaller magnitudes\. Artifact\-release framing is a useful negative result: it rises modestly in the raw corpus \(\+0\.226 SD\) but is near zero or negative after topic adjustment\. We release a reusable audit package that includes metadata, semantic and lexical features, validation artifacts, robustness scripts, and an interactive Evidence Norms Atlas for inspecting aggregate evidence\-framing patterns by year, topic neighborhood, and track\.

## D\-GAP: Improving Out\-of\-Domain Robustness via Dataset\-Agnostic and Gradient\-Guided Augmentation in Amplitude and Pixel Spaces

**Authors:** Ruoqi Wang; Haitao Wang; Shaojie Guo; Qiong Luo

**ID:** 153375 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lqa5ffpkXU>) | [PDF](<https://openreview.net/pdf?id=Lqa5ffpkXU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153375>)

_Abstract unavailable from the accessible public sources._

## EchoXFlow: A Beamspace Echocardiography Dataset for Cardiac Motion, Flow, and Function

**Authors:** Elias Stenhede; Joanna Sulkowska; Eivind B Orstad; Henrik Schirmer; Arian Ranjbar

**ID:** 139612 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FRLt06JRGu>) | [PDF](<https://openreview.net/pdf?id=FRLt06JRGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139612>)

_Abstract unavailable from the accessible public sources._

## MSConsensus: A Hundred\-Million\-Scale, Batch\-Effect–Suppressed Dataset and Benchmark for Proteomics Machine Learning

**Authors:** Christopher Grams; Chang Liu; Michael Papka; Yu Gao

**ID:** 139206 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=egB7UnD256>) | [PDF](<https://openreview.net/pdf?id=egB7UnD256>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139206>)

MSConsensus: A Hundred\-Million\-Scale, Batch\-Effect–Suppressed Dataset and Benchmark for Proteomics Machine Learning Machine learning for proteomics is bottlenecked by three coupled and under\-explored challenges: \(i\) noisy mass\-spectrometry \(MS\) data dominated by instrument\- and protocol\-specific batch effects, \(ii\) slow data loading from legacy XML\- and text\-based file formats, and \(iii\) a fragmented evaluation landscape that prevents meaningful cross\-study comparison\. Each silently constrains what proteomics models learn, how efficiently they train, and how reliably they are compared\. We address all three with MSConsensus, a multi\-task dataset and benchmark built natively for proteomics ML\. MSConsensus contains 110,209,043 consensus spectra distilled from 1\.01 PB of public PRIDE data spanning 1,500 repositories and all major Orbitrap and timsTOF platforms, with per\-peak ion annotations and stratified ML splits across instruments, species, and post\-translational modifications\. Unlike single\-representative spectral libraries \(MassIVE\-KB v2, NIST, ProteomeTools\), MSConsensus uses a new Weighted\-Score Binning \(WSBIN\) algorithm that emits multiple consensus spectra per \(peptide, charge\) cluster, preserving intra\-cluster variance required by contrastive and representation\-learning objectives while suppressing context\-specific artifacts\. Across five held\-out PRIDE repositories and four search engines \(Comet, MetaMorpheus, MSFragger, Sage\), WSBIN improves signal\-to\-noise ratio by an average of \+3\.86 dB \(range \+0\.57 to \+10\.47 dB\) without sacrificing protein, peptide, or PSM identification counts\. To eliminate the I/O bottleneck during model training, we pair MSConsensus with MSCompress and a new msz binary container\. msz compresses to 45% of mzML size losslessly and supports 25,378 random\-access spectra/sec — 3\.2× HDF5 — through a drop\-in PyTorch / JAX dataloader\. A unified public leaderboard standardizes evaluation across three core tasks—spectrum embedding, intensity prediction, and de novo peptide identification—and we report results for ten widely used systems \(Casanovo, InstaNovo, Prosit, MS²PIP, GLEAMS, Spec2Vec, Comet, MetaMorpheus, MSFragger, Sage\)\. Replacing raw training data with MSConsensus stabilizes Prosit's spectral angle on a never\-before\-seen 2025 instrument \(PXD053296\) from 0\.6964 to 0\.8137 and improves Spec2Vec top\-1 retrieval from 39\.2% to 46\.7% \(\+19\.0% relative\)\. By jointly addressing scale, batch\-effect suppression, I/O efficiency, and standardized evaluation, MSConsensus provides foundational infrastructure for training, evaluating, and comparing future proteomics models\. The dataset is released on Harvard Dataverse \(doi:10\.7910/DVN/NUCT4N\) under CC BY 4\.0; MSCompress, MSDatasets, preprocessing pipelines, and baseline scripts are released on GitHub under Apache 2\.0, with Docker containers for reproducibility\.

## AgentLens: Revealing The Lucky Pass Problem in SWE\-Agent Evaluation

**Authors:** Priyam Sahoo; Gaurav Mittal; Xiaomin Li; Shengjie Ma; Benjamin Steenhoek; Pingping Lin; Yu Hu

**ID:** 138951 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uHjkDW1QfY>) | [PDF](<https://openreview.net/pdf?id=uHjkDW1QfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138951>)

Evaluation of software engineering \(SWE\) agents is dominated by a binary signal: whether the final patch passes the tests\. This outcome\-only view treats a principled solution and a chaotic trial\-and\-error process as equivalent\. We show that this equivalence is empirically false\. We evaluate 2,614 OpenHands trajectories from eight model backends on SWE\-bench Verified\. Of the 60 tasks in this corpus, 47 have enough passing trajectories to construct task\-level process references, yielding a 1,815\-trajectory evaluation subset\. Among passing trajectories in this subset, 10\.7% exhibit behavior we call a Lucky Pass: regression cycles, blind retries, missing verification, or temporally disordered exploration, implementation, and verification\.  We introduce AgentLens, a framework for process\-level assessment of SWE\-agent trajectories, and release AgentLens\-Bench, a dataset of 1,815 trajectories annotated with quality scores, waste signals, divergence points, and 47 task\-level Prefix Tree Acceptor \(PTA\) references\. AgentLens combines two components\. First, it merges multiple passing solutions for the same task into a PTA reference space of correct behaviors\. Second, it uses a context\-sensitive intent\-stage labeler that assigns actions to Exploration, Implementation, Verification, or Orchestration using trajectory history rather than tool identity alone\.  On AgentLens\-Bench, the composite score separates passing trajectories into Lucky, Solid, and Ideal tiers; decomposes Lucky Passes into five recurring mechanisms; and changes how the eight evaluated model backends are ranked compared with pass rate alone\. Across these models, AgentLens classifies between 0\.5% and 23\.2% of successful trajectories as Lucky, and some models move by as many as five rank positions when ranked by quality score instead of pass rate\. We release the anonymized project repository, including the AgentLens\-Bench dataset and AgentLens SDK, at https://anonymous\.4open\.science/r/agentlens\-app\-6810/\.

## CoilStellaration: A Dataset and Benchmark for Engineering\-Aware Stellarator Coilset Generation

**Authors:** Jan\-Hendrik Ewers; Santiago Cadena; Nicolò Foppiani; Andrea Merlo

**ID:** 139216 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eD6yGqTL8u>) | [PDF](<https://openreview.net/pdf?id=eD6yGqTL8u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139216>)

Stellarators are fusion energy devices that confine hot plasma using a carefully shaped magnetic field, and they are one of the most promising candidates in the race towards commercial fusion\. Among the many systems that make up a stellarator, the electromagnetic coils generate the confining magnetic field\. Their design is the key factor in deciding whether a stellarator can be practically engineered and cost‑effectively realized\. Coilset design is an intrinsically complex problem: it does not admit either a closed or a unique solution, making it suitable for optimization\. Coilset optimization is therefore at the heart of stellarator design: a coilset must accurately reproduce a target magnetic field while satisfying stringent engineering constraints on coil spacing, curvature, and length\. Although recent datasets have accelerated progress on stellarator equilibria optimization, data\-driven coilset design is limited by the lack of standardized datasets that pair target plasma configurations with engineering\-aware coilsets\. Here, we release a dataset \(https://huggingface\.co/datasets/proxima\-fusion/coilstellaration\) of 177,000 optimized stellarator coilsets targeting plasma configurations sampled from the publicly available ConStellaration dataset\. For each configuration, we optimized coilsets to reproduce the magnetic field while satisfying a diverse set of engineering constraints\. Alongside the dataset, we introduce a benchmark for conditional coilset generation: given a target plasma boundary and a set of engineering requirements, a model should produce a coilset that satisfies the engineering constraints while reproducing the target field\. We provide reference code, evaluation scripts and baselines models trained on a subset of the provided data \(https://github\.com/proximafusion/coilstellaration\)\. Beyond enabling better optimization initializations and one\-shot coil design, our dataset provides a testbed for data\-driven constrained optimization and for studying which plasma geometry features predict simpler, more engineerable coils\. By releasing data, and code for benchmarks and baselines, we aim to lower the barrier for machine learning and optimization researchers to engage with stellarator coilset design and accelerate progress toward engineerable and cost\-effective stellarators power plants\.

## AnyHand: A Large\-Scale Synthetic Dataset for RGB\(\-D\) Hand Pose Estimation

**Authors:** Chen Si; Yulin Liu; Bo Ai; Jianwen Xie; Rolandos Alexandros Potamias; Chuanxia Zheng; Hao Su

**ID:** 139245 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cUZmslkWyQ>) | [PDF](<https://openreview.net/pdf?id=cUZmslkWyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139245>)

We present AnyHand, a large\-scale synthetic dataset designed to advance the state of the art in 3D hand pose estimation\. While recent works with foundation approaches have shown that scaling training data markedly improves hand pose estimation, existing real\-world datasets are limited in coverage, and prior synthetic datasets rarely provide occlusions, arm details, and aligned depth together at scale\. To address this bottleneck, our proposed AnyHand contains 2\.5M single\-hand and 4\.1M hand\-object interaction RGB\-D images, with rich geometric annotations\. We show that extending the original training data recipes of existing RGB baselines with AnyHand yields significant gains on multiple benchmarks \(FreiHAND and HO\-3D\), even when keeping the architectures and training schemes fixed\. Together with extensive ablations on the scale and composition of the training data setups, these results suggest that training data diversity and quality are as critical as scale for advancing hand pose estimation\. We further examine the utility of AnyHand's aligned depth maps in the appendix, showing that scaling RGB\-D supervision with AnyHand allows a lightweight depth\-fusion variant of existing RGB baselines to outperform prior RGB\-D methods\.

## HiGraph: A Large\-Scale Hierarchical Graph Dataset for Malware Analysis

**Authors:** Han Chen; Hanchen Wang; Hongmei Chen; Ying Zhang; Lu Qin; Wenjie Zhang

**ID:** 139227 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=djQ8j3qxbm>) | [PDF](<https://openreview.net/pdf?id=djQ8j3qxbm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139227>)

The advancement of graph\-based malware analysis is critically limited by the absence of large\-scale datasets that capture the inherent hierarchical structure of software\. Existing methods often oversimplify programs into single\-level graphs, failing to model the crucial semantic relationship between high\-level functional interactions and low\-level instruction logic\. To bridge this gap, we introduce HiGraph, the largest public hierarchical graph dataset for malware analysis, comprising over 200M Control Flow Graphs \(CFGs\) nested within 499K Function Call Graphs \(FCGs\)\. This two\-level representation preserves structural semantics essential for building robust detectors resilient to code obfuscation and malware evolution\. We demonstrate HiGraph’s utility through a large\-scale analysis that reveals distinct structural properties of benign and malicious software, establishing it as a foundational benchmark for the community\. The dataset and tools are publicly available at https://higraph\.org\.

## OpenWhistle: A Large\-Scale Longitudinal Dataset and Benchmark of Bottlenose Dolphin Vocalizations

**Authors:** Faadil Mustun; Chiara Semenzin; Roberto Dessi; Pablo Robin Guerrero; pierre orhan; Alexis Emanuelli; Emanuele Rossi; Yair Lakretz; Gonzalo de Polavieja; Germán Sumbre

**ID:** 139275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a5IbpMVeS0>) | [PDF](<https://openreview.net/pdf?id=a5IbpMVeS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139275>)

Recent advances in bioacoustics have been driven by large\-scale corpora and standardized benchmarks, yet existing resources are overwhelmingly bird\-centric and shallow per species, limiting their use for studying the structure of a single species' communication system\. This gap is particularly acute for cetaceans: despite bottlenose dolphins \(\\textit\{Tursiops truncatus\}\) being a compelling case of complex vocal communication among non\-human mammals, existing dolphin datasets are small, fragmented, and largely closed\. We introduce OpenWhistle, the largest publicly available dataset of dolphin vocalizations\. It  comprises approximately 180,000 whistles \(114 hours\) recorded over five years from a stable pod of five individuals in a semi\-natural environment, paired with a curated subset of 8,354 expert\-annotated whistles and reproducible evaluation protocols for whistle\-type detection and classification\. We further release the full processing pipeline for whistle detection, segmentation, and categorization\. To demonstrate its utility, we pretrain a Wav2Vec2\.0 model adapted to dolphin acoustics on the OpenWhistle corpus and show that it learns effective representations, outperforming general\-purpose bioacoustic models such as AVES and BioLingual on both tasks while leaving meaningful headroom for future work\. By releasing the dataset, pipeline, and evaluation protocol, we provide the first open dolphin whistle dataset tailored for training self\-supervised models, laying the groundwork for advancing dolphin communication research and developing models that capture fine\-grained acoustic structure within species\.

## Leveraging Data Symmetries to Select an Optimal Subset of Training Data under Label Noise

**Authors:** Kumar Shubham; Pavan Karjol; Kiran M K; Prathosh AP

**ID:** 151105 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cwzwMwsjQA>) | [PDF](<https://openreview.net/pdf?id=cwzwMwsjQA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151105>)

The performance of machine learning models often relies on large labeled datasets; however, data collected from diverse sources can contain label noise\. Recent work has shown that, in noisy settings, there may exist a subset of the training data on which models can achieve performance comparable to training on a noise\-free dataset\. A widely used method for identifying such subsets is \\textit\{cutstats\}, which employs $k$\-nearest neighbors \($k$\-NN\) to detect low\-noise samples\. However, its performance on high\-dimensional data remains largely unexplored\. In this work, we formally establish that the performance of a classifier trained on a subset of a noisy dataset selected via \\textit\{cutstats\} is influenced by the accuracy of $k$\-NN\. We further demonstrate that, in noisy environments, exploiting data invariance and knowledge of underlying symmetries can significantly enhance the performance of $k$\-NN, bringing it closer to the Bayes optimal classifier even in high\-dimensional regimes\. Finally, we show that for real\-world scenarios, where information about the underlying invariance is only partially known, learnt invariant representations can still facilitate the identification of near\-optimal subsets\.

## M$^2$E\-UAV: A Benchmark and Analysis for Onboard Motion\-on\-Motion Event\-Based Tiny UAV Detection

**Authors:** Weiqi Yan; Lixin Chen; Xiangrui Hou; zhipeng cai; Youbiao Wang; Yangyang Shi; Yu Zang; Cheng Wang

**ID:** 153776 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IkIsmHmudK>) | [PDF](<https://openreview.net/pdf?id=IkIsmHmudK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153776>)

Tiny UAV detection from an onboard event camera is difficult when the observer and target move at the same time\. In this motion\-on\-motion regime, ego\-motion activates background edges across buildings, vegetation, and horizon structures, while the UAV may appear as a sparse event cluster\. To explore this practical problem, we present M$^2$E\-UAV, a benchmark and analysis setup for onboard motion\-on\-motion event\-based tiny UAV detection\. The processed M$^2$E\-UAV benchmark contains 87,223 training samples and 21,395 validation samples across four scene families: sunny building\-forest, sunny farm\-village, sunset building\-forest, and sunset farm\-village\. We provide M$^2$E\-Point, a point\-based event baseline, and M$^2$E\-Point \+ IMU, an IMU\-conditioned variant, to analyze the role of inertial cues under onboard motion\-on\-motion detection\. M$^2$E\-Point encodes events as $\[x,y,t,p\]$ point sets, extracts local event structure with EdgeConv, and predicts event\-level UAV foreground scores, from which bounding boxes are derived via DBSCAN\. Our validation\-stage analysis shows that point\-based event modeling is a strong baseline, while simple IMU conditioning provides only marginal aggregate gains\. Under the train/validation split, M$^2$E\-Point achieves 0\.9673 F1 and 0\.5501 mAP50\-95, while the IMU\-conditioned variant reaches 0\.5561 mAP50\-95 with only marginal aggregate changes, serving as an initial baseline for future exploration in this domain\. The dataset will be publicly released upon acceptance\.

## Formal Conjectures: An Open and Evolving Benchmark for Verified Discovery in Mathematics

**Authors:** Moritz Firsching; Paul Lezeau; Salvatore Mercuri; Miklós Z\. Horváth; Yaël Dillies; Calle Sönne; Eric Wieser; Fred Zhang; Thomas Hubert; Blaise Aguera y Arcas; Pushmeet Kohli

**ID:** 139299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YcOzhUo7z3>) | [PDF](<https://openreview.net/pdf?id=YcOzhUo7z3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139299>)

As automated reasoning systems advance rapidly, there is a growing need for research\-level formal mathematical problems to accurately evaluate their capabilities\. To address this, we present Formal Conjectures, an evolving benchmark of currently 2615 mathematical problem statements formalized in Lean 4\. Sourced from areas of active mathematical research, the dataset features 1029 open research conjectures providing a zero\-contamination benchmark for mathematical proof discovery, and 836 solved problems for proof autoformalization\. Notably, the repository provides a structured interface connecting mathematicians who formalize and clarify problems with the AI systems and humans attempting to solve them\. Demonstrating its immediate utility, the benchmark has already been leveraged to make new mathematical discoveries, including the resolution of open research conjectures\. We describe our approach to ensuring the correctness of these formalizations in a collaborative open\-source project where contributions stem from an active community\. In this framework, AI\-generated proofs and disproofs serve as a valuable auditing mechanism to iteratively improve the fidelity of the benchmark\. Finally, we provide a standardized evaluation setup and report baseline results on frozen evaluation subsets, demonstrating a climbable signal that measures the current frontier of automated reasoning on research\-level mathematics\.

## GameVerse: A Minute\-Scale Gameplay Dataset for Long\-Horizon Interactive World Modeling

**Authors:** Kang He; Wenshuo Peng; Chuanhao Li; Zihui Gao; Xiaojie Xu; Zhengyuan Lin; Yuzhe Ding; Donghong Ji; Kaipeng Zhang; Yongtao Ge

**ID:** 139301 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbEXKsFhkZ>) | [PDF](<https://openreview.net/pdf?id=YbEXKsFhkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139301>)

Recent advances in world models have emphasized the need for learning temporally consistent and interactive representations of dynamic environments\. However, existing video datasets fail to simultaneously support long\-horizon dynamics, precise camera control, and structured semantic representations\. To address this, we introduce GameVerse, a large\-scale game video dataset for interactive world modeling\. GameVerse provides minute\-level continuous video sequences, covering diverse interaction behaviors, across both first\- and third\-person perspectives\. The dataset is constructed through a unified data processing pipeline, including scene\-consistent segmentation, quality filtering, camera pose estimation, and multi\-granular semantic annotation\. GameVerse consists of 11,092 videos, with a total duration of 4,692 hours \(195\.5 days\) and approximately 986\.6 million frames\. Each video segment is augmented with temporally stable camera trajectories and structured semantic annotations\. Comprehensive data analysis and experiments demonstrate that GameVerse exhibits strong advantages in terms of scale, diversity, and annotation quality, and shows promising performance for long\-horizon modeling and interactive world understanding\. We expect GameVerse to provide a unified data foundation for long\-horizon modeling and interactive world modeling, and to facilitate future research in this area\.

## What Survival Benchmarks Don’t Tell You: Impact of Model Selection and Dataset Regimes

**Authors:** Sandra Dening; Emre Kavak; Christian Wachinger; George H Chen

**ID:** 139306 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YMMtTSpEEk>) | [PDF](<https://openreview.net/pdf?id=YMMtTSpEEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139306>)

Despite the proliferation of survival analysis methods, current benchmarks often operate under narrow conditions: they heavily rely on the concordance index \(C\-index\) for evaluation and model selection, and frequently exclude deep learning \(DL\) or underrepresent challenging dataset regimes\. To address this, we conduct a large\-scale, neutral benchmark comparing 10 classical, tree\-based, and DL methods across 49 diverse datasets\. Crucially, we treat the model selection criterion \-\- optimizing for C\-index, Integrated Brier Score \(IBS\), or Mean Absolute Error \(MAE\-PO\) \-\- as an independent experimental variable\.  Using Bayesian mixed\-effects modeling, we demonstrate that evaluation design heavily dictates conclusions\. For complex DL and tree\-based architectures, shifting hyperparameter selection from the C\-index to IBS unlocks massive gains in probabilistic accuracy and calibration at a negligible cost to discriminative ranking\. Furthermore, method success is fundamentally governed by dataset characteristics\. While DL models scale exceptionally well with larger sample sizes, they suffer notable performance drops in high\-dimensional feature spaces\. Additionally, we expose a structural vulnerability where heavy censoring artificially inflates absolute calibration metrics, creating overly conservative tests\.  Ultimately, our findings challenge the utility of global single\-number performance summaries and advocate for regime\-conditioned reporting\. We further demonstrate that aligning the model selection strategy with the target application is not merely an implementation detail, but a critical requirement for realizing the true probabilistic and temporal accuracy of complex survival architectures\. We make our benchmark publicly available upon publication\.

## DINOv3

**Authors:** Oriane Siméoni; Huy Vo; Maximilian Seitzer; Federico Baldassarre; Maxime Oquab; Cijo Jose; Vasil Khalidov; Marc Szafraniec; Seung Eun Yi; Michaël Ramamonjisoa; Francisco Massa; Daniel Haziza; Luca Wehrstedt; Jianyuan Wang; Timothée Darcet; Théo Moutakanni; Leonel Sentana; Claire Roberts; Andrea Vedaldi; Jamie Tolan; John Brandt; Camille Couprie; Julien Mairal; Herve Jegou; Patrick Labatut; Piotr Bojanowski

**ID:** 156661 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=2NlGyqNjns>) | [PDF](<https://openreview.net/pdf?id=2NlGyqNjns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156661>)

Self\-supervised learning holds the promise of eliminating the need for manual data annotation, enabling models to scale effortlessly to massive datasets and larger architectures\. By not being tailored to specific tasks or domains, this training paradigm has the potential to learn visual representations from diverse sources, ranging from natural to aerial images \-\- using a single algorithm\. This technical report introduces DINOv3, a major milestone toward realizing this vision by leveraging simple yet effective strategies\. First, we leverage the benefit of scaling both dataset and model size by careful data preparation, design, and optimization\. Second, we introduce a new method called Gram anchoring, which effectively addresses the known yet unsolved issue of dense feature maps degrading during long training schedules\. Finally, we apply post\-hoc strategies that further enhance our models' flexibility with respect to resolution, model size, and alignment with text\. As a result, we present a versatile vision foundation model that outperforms the specialized state of the art across a broad range of settings, without fine\-tuning\. DINOv3 produces high\-quality dense features that achieve outstanding performance on various vision tasks, significantly surpassing previous self\- and weakly\-supervised foundation models\. We also share the DINOv3 suite of vision models, designed to advance the state of the art on a wide spectrum of tasks and data by providing scalable solutions for diverse resource constraints and deployment scenarios\.

## When Scores Conflict with Preferences: Calibrated Drift Control for Heterogeneous DPO

**Authors:** Ping Liu; Yan Yan

**ID:** 151343\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151343

[Paper](<https://openreview.net/forum?id=bFc8A2Irjf>) | [PDF](<https://openreview.net/pdf?id=bFc8A2Irjf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151343>)

Direct Preference Optimization \(DPO\) is increasingly used in settings where pairwise preference signals coexist with pointwise criteria such as response length, answer correctness, or safety scores\. When the two disagree, standard DPO does not explicitly distinguish pairs that improve the pointwise criterion from those that worsen it\. We show that this mismatch induces a systematic failure mode, which we call \*\*constraint drift\*\*: updates on disagreement pairs tend to increase pointwise violation, while updates on aligned pairs tend to repair it, with the overall drift governed by their balance\. Under a first\-order approximation, this balance yields a closed\-form pre\-alignment diagnostic, $\\rho^\{\*\}\_\\mathrm\{eq\}$, computable from dataset statistics alone, that predicts whether the data is self\-correcting or requires intervention before alignment begins\. Building on this diagnostic, we propose \*\*Conflict\-aware DPO \(CoDPO\)\*\*, a calibrated modification to the DPO loss with two complementary components: a coarse per\-sample control for primary drift regulation and a fine adaptive margin tilting for residual correction during training\. Across six domains, drift grows monotonically with conflict exposure, and $\\rho^\{\*\}\_\\mathrm\{eq\}$ tracks the empirical drift transition, including self\-correcting settings where intervention is unnecessary\. Across four base\-model architectures and multiple preference losses, CoDPO reduces drift while preserving preference learning\. Compared with hard filtering and recent constrained\-alignment and multi\-objective baselines, CoDPO achieves a more favorable trade\-off between drift control and preference performance\.

## State\-of\-art minibatches via novel DPP kernels: discretization, wavelets, and rough objectives

**Authors:** Hoang Son Tran; Pranav Gupta; Rémi Bardenet; Subhroshekhar Ghosh

**ID:** 154500\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154500

[Paper](<https://openreview.net/forum?id=D8tqZupi52>) | [PDF](<https://openreview.net/pdf?id=D8tqZupi52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154500>)

Determinant point processes \(DPPs\) have recently emerged as a kernelized alternative to vanilla independent sampling for generating efficient minibatches, coresets and other parsimonious representations of large\-scale datasets\. While basic theoretical foundations and promising empirical performance have been demonstrated, there are two main challenges for current proposals for DPP\-based coresets or minibatches\. The first is the need for families of DPPs with certain key variance reduction properties, usually constructed in a continuous setting, of which there are few known examples\. The second is the need for an ad\-hoc construction of a discrete DPP defined on a given dataset, that inherits such variance reduction\. In this work, we contribute to the programme of establishing DPPs as a subsampling toolbox for ML by advancing on these two fronts\. First, we propose new DPPs on the Euclidean space based on wavelets, with provably better accuracy guarantees than the best known rates\. Second, we introduce a general method to convert such continuous DPPs, which are more amenable to proving analytical statements, into discrete kernels, which are pertinent for subsampling tasks such as minibatch and coreset constructions\. This conversion mechanism simultaneously preserves the desired variance decay and reveals a low\-rank decomposition of the discrete kernel, which makes sampling the corresponding DPP computationally inexpensive\. En route, we enlarge the class of ML tasks amenable to improvements via DPP\-based minibatches and coresets to include highly non\-smooth objective functions, with arbitrarily low regularity, and rate guarantees that adapt explicitly to this regularity\.

## LSC\-Parlament: An Automatically Aligned Catalan Sign Language Dataset from Parliament Videos\.

**Authors:** Carlos Escolano; Gerard Sant; Marc J Garcia; Joan G Cortés; Marcel Granero Moya; Francesca De Luca Fornaciari; Maite Melero

**ID:** 139029\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139029

[Paper](<https://openreview.net/forum?id=pPt0iqECnh>) | [PDF](<https://openreview.net/pdf?id=pPt0iqECnh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139029>)

Progress in Sign Language Translation \(SLT\) is frequently hampered by the "data bottleneck," a challenge particularly acute for regional languages such as Catalan Sign Language \(LSC\)\. In this paper, we present LSC\-Parlament, a large\-scale, multimodal dataset for LSC derived from Catalan Parliament sessions spanning 2021 to 2024\. The dataset comprises over 87 hours of LSC video, synchronized with speech and text translations in either Catalan or Spanish\. To curate this resource, we developed a fully automated pipeline that enables alignment between sign language, speech, and text without requiring prior human\-annotated data\. We provide a systematic evaluation of the dataset across multiple dimensions, including video tracking quality, audio transcription accuracy, and translation benchmarks\. Our experiments compare transfer learning, zero\-shot, and supervised translation settings, demonstrating significant knowledge transfer between spoken languages in the LSC\-Spanish modality\. By releasing LSC\-Parlament, we provide a challenging open\-domain benchmark to foster research in inclusive and scalable translation technologies\.

## New Coresets for Fair Clustering

**Authors:** Xuan Wu; Chansophea Wathanak In; Yi Li

**ID:** 152649\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152649

[Paper](<https://openreview.net/forum?id=RQT8lzmK8J>) | [PDF](<https://openreview.net/pdf?id=RQT8lzmK8J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152649>)

We construct the first coreset of size near\-linear in $k$ for fair \\kMedian in general metric spaces\. Combined with the standard merge\-and\-reduce framework, our construction also gives the first streaming algorithm for fair \\kMedian with space complexity near\-linear in $k$\.  The main technical innovation is a distributional reinterpretation of capacitated clustering that the cost of assigning a dataset to a capacitated center set can be expressed as the earth mover's distance between two discrete distributions\. This viewpoint enables us to use tools from optimal transport to analyse uniform sampling\. A key ingredient in this analysis is a new family of problem\-specific $\\eps$\-nets for the earth mover's distance\.

## Optimal Representation Size: High\-Dimensional Analysis of Pretraining and Linear Probing

**Authors:** Valentina Njaradi; Clémentine Dominé; Rachel A Swanson; Marco Mondelli; Andrew Saxe

**ID:** 152669\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152669

[Paper](<https://openreview.net/forum?id=RHhBaG1Vop>) | [PDF](<https://openreview.net/pdf?id=RHhBaG1Vop>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152669>)

Learning to generalise from limited data is a fundamental challenge for both artificial and biological systems\. A common strategy is to extract reusable structure from abundant unlabelled data, enabling efficient adaptation to new tasks from limited labelled data\. This two\-stage paradigm is now standard in modern training pipelines, where pretraining is followed by fine\-tuning or linear probing\.  We provide an analytical model of this process: structure extraction is formalized as principal component analysis on unlabelled data, and downstream learning as linear regression on a separate labelled dataset\. In the high\-dimensional regime, we derive exact expressions for training and generalisation error showcasing their dependence on representation dimensionality, unlabelled and labelled sample sizes, and task alignment\. Our results show that pretrained representations strongly influence downstream generalisation, and we characterize the optimal representation size as a function of task parameters: with abundant pretraining data but scarce downstream data, maximally compressed representations are optimal, whereas with limited pretraining data, higher\-dimensional representations generalise better\. Furthermore, we establish an exact trade\-off between pretraining and supervision, quantifying how much unlabelled data is required to replace a single labelled sample\. Beyond our idealised model, we observe similar phenomenology in autoencoders and pretrained LLMs\. Altogether, we highlight that optimising representation size is critical, giving conditions for when compression during pretraining improves generalisation\.

## MCPHallu: Benchmarking Reasoning, Execution, and Memory Hallucinations in MCP Agents

**Authors:** Yizhen Jiang; 浩伟 郭; Tianyi Bai; Zengjie Hu; Lu Ma; Zhengyang Zhao; Haoze Sun; Peng Pei; Wentao Zhang

**ID:** 139758\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139758

[Paper](<https://openreview.net/forum?id=6XKGOgVQft>) | [PDF](<https://openreview.net/pdf?id=6XKGOgVQft>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139758>)

_Abstract unavailable from the accessible public sources._

## Nereus: A Large\-Scale Underwater Dataset for Fine\-Grained Attribute Understanding and Grounded Counting Perception

**Authors:** Jingtao Deng; Zihao Jin; Yuehe Chen; Feixiang He; Shuiwang Li; Dan Zeng

**ID:** 139205\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139205

[Paper](<https://openreview.net/forum?id=egBeNgdC7E>) | [PDF](<https://openreview.net/pdf?id=egBeNgdC7E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139205>)

_Abstract unavailable from the accessible public sources._

## AgentCollabBench: Diagnosing When Good Agents Make Bad Collaborators

**Authors:** Aritra Mazumder; Shubhashis Roy Dipta; Nusrat Jahan Lia; Tanzila Khan; Kainat R Hossain; Nehaa Shri; Humayra Tasnim; Gour G Shawon; Shubhrangshu Debsarkar; Sumaiya A Rani; Al Jami Islam Anik; Debjoty Mitra; Al Nafeu Khan

**ID:** 139450\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139450

[Paper](<https://openreview.net/forum?id=P9qqypDzuC>) | [PDF](<https://openreview.net/pdf?id=P9qqypDzuC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139450>)

Multi\-agent systems achieve state\-of\-the\-art outcomes through peer     collaboration\. However, when an agent in the pipeline silently drops a     constraint, the system's final output may look correct even though the     reasoning chain was quietly corrupted, and existing outcome\-based     evaluations are blind to such multi\-hop process failures\. To make these     vulnerabilities measurable before deployment, we introduce     AgentCollabBench, a diagnostic benchmark of 900 human\-validated tasks     spanning software engineering, DevOps, and data engineering\. Each task     isolates one of four behavioral risks: instruction decay \(does a     constraint survive peer pressure?\), false\-belief contagion \(does a     falsehood spread through consensus?\), context leakage \(does information     bleed between tasks?\), and tracer durability \(does marked data reach the     final agent?\)\. Evaluating four modern LLMs \(GPT 4\.1 mini,     Gemini 2\.5 Flash Lite, Qwen\-3\.5\-35B\-A3B, and Llama 3\.1 8B Instruct\),     we expose model\-specific vulnerability profiles invisible to     outcome\-only evaluation; Qwen\-3\.5\-35B\-A3B, for example, leads on     tracer durability and instruction stability, while GPT 4\.1 mini leads     on leakage containment and false\-belief resistance\.     Beyond per\-model differences, communication topology emerges as a     primary risk factor that explains 7\-40% of the variance in multi\-hop     information survival\. The effect traces to a synthesis bottleneck     specific to converging\-DAG nodes: an agent weighing competing parent     inputs discards constraints carried by a minority branch, a bottleneck structurally absent from linear chains\. AgentCollabBench demonstrates that suboptimal     topology can silently erase the safeguards of highly capable models,     arguing that multi\-agent reliability is fundamentally a structural     problem and that scaling model intelligence alone is no substitute for     architecture\.

## SCTI: Self\-Calibrated Trident Identification of Black\-Box LLM Watermarks

**Authors:** Zhixiong Nan; Haoyu Lu; Tao Xiang; Yiwei Wang

**ID:** 149151\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149151

[Paper](<https://openreview.net/forum?id=sSXd2zEa4O>) | [PDF](<https://openreview.net/pdf?id=sSXd2zEa4O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149151>)

_Abstract unavailable from the accessible public sources._

## Label\-Efficient Dataset Pruning via Semi\-Supervised Pseudo\-Labeling

**Authors:** Yeseul Cho; Baekrok Shin; Changmin Kang; Chulhee Yun

**ID:** 150749\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150749

[Paper](<https://openreview.net/forum?id=fgWh6OZ6W8>) | [PDF](<https://openreview.net/pdf?id=fgWh6OZ6W8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150749>)

_Abstract unavailable from the accessible public sources._

## Fast Diverse Nearest Neighbor Search

**Authors:** Justin Chen; Soham Nagawanshi; Shenghao Xie; Haike Xu; Alan Zhou; Samson Zhou

**ID:** 156099\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156099

[Paper](<https://openreview.net/forum?id=0NrAOwOmiN>) | [PDF](<https://openreview.net/pdf?id=0NrAOwOmiN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156099>)

In the $k$\-diverse nearest neighbor search problem, the input is a dataset in which each point is assigned a color, and given a query $q$, the goal is to retrieve $k$ approximate nearest neighbors with distinct colors\. This color diversity metric is highly essential for information retrieval tasks where results are required to have different categories, e\.g\., recommending products from different sellers\. Previous state\-of\-the\-art solution by Anand et al\. \[ICML 2025\] constructs a diversity\-aware graph to meet this requirement\. However, they suffer from an $\\mathcal\{O\}\(k^2\)$  multiplicative query time overhead, creating a computational bottleneck when $k$ is large\.  To break this barrier, we propose a novel color bucketing framework that selects a subset of colors in each bucket and instantiates an independent approximate nearest neighbor search algorithm on the corresponding points\. Inspired by group testing, we provide a randomized color sampling scheme that achieves an $\\mathcal\{O\}\\left\(k^\{1\-\\frac\{1\}\{c^2\}\-o\(1\)\}\\log k\\right\)$ overhead in Euclidean spaces and an $\\mathcal\{O\}\\left\(k \\log k\\right\)$ overhead in general metric spaces, where $c$ is the approximation factor, reducing a factor of $k$\. In addition, the space usage to store the data structure matches or improves upon prior methods\. Empirical results on semi\-synthetic and real\-world datasets demonstrate that our approach achieves significantly faster search times and higher recall compared to state\-of\-the\-art diversity search baselines\.  Furthermore, we introduce a dataset\-oblivious deterministic bucketing scheme using expander graphs for a relaxed diverse search problem that only requires $k\(1\-\\varepsilon\)$ colors\. Here, dataset\-oblivious means that the color bucket construction does not depend on the spatial configuration of the dataset\. We then establish an $\\Omega\(k^2\)$ lower bound on the number of buckets for any dataset\-oblivious deterministic bucketing scheme that gives an \\emph\{exact\} $k$\-diverse solution\. We subsequently circumvent this by a dataset\-aware adaptive segment tree bucketing scheme with an overhead of only $\\mathcal\{O\}\(k \\log N\)$, where $N$ is the number of colors\. As an extension of our results, we solve the problem with general diversity metric, where the goal is to maximize the minimum pair\-wise distance of the $k$ solutions, and improve the query time\.

## Space\-Optimal Streaming Algorithms via Efficient Encodings

**Authors:** Liudeng Wang; David Woodruff; Shenghao Xie; Samson Zhou

**ID:** 155183\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155183

[Paper](<https://openreview.net/forum?id=7fVfD6Nmw4>) | [PDF](<https://openreview.net/pdf?id=7fVfD6Nmw4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155183>)

We study the problem of constructing coresets on data streams: Given a dataset of $n$ points in $\\mathbb\{R\}^d$ arriving sequentially, the goal is to maintain a small weighted subset that accurately approximates the objective values of the entire dataset for a given class of query functions\. Previous methods like merge\-and\-reduce and online sensitivity sampling required more space than the size of an optimal such subset in the offline setting\. In this work, we show that such overheads are not necessary by presenting space\-optimal streaming algorithms for central high\-dimensional optimization problems such as Euclidean $\(k,z\)$\-clustering and $L\_p$ subspace embeddings, as well as applications to projection\-cost preserving sketches\.   For $\(k,z\)$\-clustering, our streaming algorithm uses memory independent of the number $n$ of input points \(in words of memory\) and the aspect ratio $\\Delta$, yielding a coreset with an optimal $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{dk\}\{\\min\(\\varepsilon^4,\\varepsilon^\{z\+2\}\)\}\\right\)$ words of memory for accuracy parameter $\\varepsilon\\in\(0,1\)$\. For $L\_p$ subspace embeddings, where the rows of matrix $\\mathbf\{A\} \\in \\mathbb\{R\}^\{n \\times d\}$ arrive in an insertion\-only stream, we achieve an efficient algorithm that uses optimal space for different ranges of $p$: $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{d^2\}\{\\varepsilon^2\}\\right\)$ words for $p\\le 2$ and $\\tilde\{\\mathcal\{O\}\}\\left\(\\frac\{d^\{p/2\+1\}\}\{\\varepsilon^2\}\\right\)$ words for $p&gt;2$, both independent of the number of rows $n$\. Thus, our work shows that streaming algorithms can match offline algorithms in space complexity\.

## ALETHEIA: A Multi\-Frequency Eddy Current Pulsed Thermography Dataset for Neural Operator Learning in Nondestructive Testing

**Authors:** Changbin Sun; jie Xiao; Xiaotian Chen; Yuankai Wu

**ID:** 139797\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139797

[Paper](<https://openreview.net/forum?id=3x55aqNQ9m>) | [PDF](<https://openreview.net/pdf?id=3x55aqNQ9m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139797>)

Learning neural solvers for spatiotemporal partial differential equations \(PDEs\) under real\-world constraints remains a key challenge in scientific machine learning, especially for inverse tasks with sparse and noisy boundary observations\. We present the Aletheia dataset, the first 3D benchmark for learning data\-driven solvers in the context of nondestructive testing \(NDT\)\. The dataset simulates eddy\-current\-induced heating in conductive solids and models the resulting transient heat propagation governed by the heat equation\. Aletheia contains over 4,700 high\-resolution samples across 10 excitation frequencies \(1\-100\\,kHz\), each providing volumetric heat source and temperature fields over time\. It supports both forward prediction of temperature evolution and inverse reconstruction of internal heat sources or defects from surface infrared measurements\. Real infrared thermography data from cracked rail specimens are included for calibration and generalization studies\. We define three canonical tasks on both regular and irregular grids and benchmark them using various neural operators\. Aletheia establishes a unified platform for evaluating neural PDE solvers under realistic NDT conditions, enabling progress in reliable, data\-driven inverse modeling\.

## Knowledge Transfer Scaling Laws for 3D Medical Imaging

**Authors:** Ho Hin Lee; Dongna Du; Chu Wang; Yuankai Huo; Shi Gu; James Gee; Yifan Wu

**ID:** 149904\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149904

[Paper](<https://openreview.net/forum?id=mLgd1pC49X>) | [PDF](<https://openreview.net/pdf?id=mLgd1pC49X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149904>)

Vision foundation models are increasingly moving beyond 2D to volumetric domains such as 3D medical imaging, where unified pretraining across different imaging modalities \(i\.e\. CT, MRI, and PET\) could provide foundational models for diverse clinical tasks\. However, training such models requires mixing heterogeneous imaging domains, and current mixture strategies remain largely heuristic\. In this work, we observe that different medical imaging domains scale at variable rates during pretraining, and knowledge transfer between domains is strongly asymmetric: training on one domain can substantially improve another, but the reverse may be much weaker\. Interestingly, both MAE reconstruction loss and cross\-domain transfer follow predictable power\-law trends with domain\-specific behaviors\. Motivated by these findings, we formulate data allocation as a scaling\-law optimization problem\. The derived allocations reveal an interpretable hub\-and\-island structure: highly transferable domains emerge as hubs that benefit many others and deserve strategic allocation, while isolated domains act as islands requiring direct investment\. Empirically, transfer\-aware allocation outperforms data\-proportional sampling by up to 58\\% and generalizes well to unseen budgets with r=0\.989\. Downstream validation on disease classification and organ/lesion segmentation further confirms that the derived transfer\-aware mixtures provide stronger pretrained representations for clinical 3D medical imaging tasks\.

## Phantom Transfer: Data Poisoning can Survive Data\-Level Defences

**Authors:** Andrew Draganov; Tolga Hasan Dur; Anandmayi \(Andi\) Bhongade; Mary Phuong

**ID:** 148827\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148827

[Paper](<https://openreview.net/forum?id=uqYXmNMqRZ>) | [PDF](<https://openreview.net/pdf?id=uqYXmNMqRZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148827>)

We present a data poisoning attack\-\-\-Phantom Transfer\-\-\-with the property that, even if you know precisely how the poison was placed into an otherwise benign dataset, you cannot filter it out\.  We achieve this by modifying subliminal learning to work in real\-world contexts and demonstrate that the attack works regardless of which model produces the data, which model is trained on the data or what the attack target is\. The attack survives 11 tested data\-level defences, including one where every sample is paraphrased by a different model\. We characterise when this attack works best and show that it can be used to plant password\-triggered behaviours into models while still beating defences\.   In short, we provide an existence proof that maximum\-affordance defences can fail to stop sophisticated data poisoning attacks\. We suggest that future defences should supplement by include white\-box methods and post\-training model audits\.

## Which Pairs Should We Compare for DPO?

**Authors:** Vineet Goyal; Jiangze \(Jay\) Han; Will Ma

**ID:** 150544\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150544

[Paper](<https://openreview.net/forum?id=hL3RIcTy5X>) | [PDF](<https://openreview.net/pdf?id=hL3RIcTy5X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150544>)

Direct Preference Optimization \(DPO\) has become a standard method for preference\-based fine\-tuning in RLHF pipelines\. A practical but largely heuristic step in DPO is dataset curation: given a fixed budget of preference labels, which candidate pairs should be compared to produce the most informative training set and the best downstream policy? This paper studies DPO dataset curation as a sampling\-design problem\. We model the curated dataset by a sampling design over candidate pairs and analyze how this design propagates through DPO training to the KL\-regularized RLHF objective\.  Our main results provide matching upper and lower bounds on the RLHF optimality gap of the policy learned from a curated DPO dataset\. The bounds reveal a simple structural message: the effect of pair selection enters only through a single design\-dependent matrix that summarizes how informative the collected comparisons are for learning the policy parameters\. This leads to a trace\-form criterion that characterizes both an achievable performance guarantee for the DPO estimator and an information\-theoretic lower bound for any induced policy estimator, thereby identifying a canonical objective for comparison curation under budget constraints\.

## Early Prediction of Future Behavioral Strategy from Process Traces

**Authors:** Robert Kasumba; Dennis Barbour; Chien\-Ju Ho

**ID:** 149638\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149638

[Paper](<https://openreview.net/forum?id=ob4yUUSPk3>) | [PDF](<https://openreview.net/pdf?id=ob4yUUSPk3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149638>)

Adaptive systems often need to make task\-specific decisions about a person from limited prior evidence: a tutor may need to anticipate how a learner will approach a new problem, a game may need to adapt when a player enters a new level, and a human\-AI system may need to infer whether a partner will persist with a plan or switch goals\. These decisions depend on person\-level behavioral tendencies that shape how people solve related tasks, but such tendencies are difficult to infer from standard behavioral evidence\. One approach is to use aggregate outcome summaries, such as scores, completion rates, or productivity measures; these summaries are compact and available across tasks, but can collapse distinct behavioral processes into similar outcomes\. Another approach is to use process\-level traces, which record how behavior unfolds over time; however, process modeling within a single task can entangle stable person\-level tendencies with task\-specific layout, timing, and affordances\. In this work, we study early cross\-task behavioral inference: whether partial process traces from multiple source tasks can reveal transferable person\-level behavioral structure that predicts strategy in a held\-out target task\. We introduce Process\-Level Latent Variable Models \(PLVM\), which encode task\-specific traces and fuse them into a shared person\-level latent representation for cross\-task prediction\. In PowerWash Simulator, a naturalistic telemetry dataset of real human gameplay, PLVM uses partial traces from two earlier cleaning tasks to predict whether a player will exhibit locally persistent Zone Planner behavior or frequent Zone Hopper behavior in the held\-out Fire Station level\. Controlled simulations with known latent behavioral types show that cross\-task fusion helps when different source tasks reveal complementary dimensions of a shared latent behavioral process\. These results suggest that process\-level cross\-task modeling can support early prediction of target\-task behavioral strategy when waiting to observe sufficient target\-task behavior is impractical\.

## AgentLens: Revealing The Lucky Pass Problem in SWE\-Agent Evaluation

**Authors:** Priyam Sahoo; Gaurav Mittal; Xiaomin Li; Shengjie Ma; Benjamin Steenhoek; Pingping Lin; Yu Hu

**ID:** 138951\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138951

[Paper](<https://openreview.net/forum?id=uHjkDW1QfY>) | [PDF](<https://openreview.net/pdf?id=uHjkDW1QfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138951>)

Evaluation of software engineering \(SWE\) agents is dominated by a binary signal: whether the final patch passes the tests\. This outcome\-only view treats a principled solution and a chaotic trial\-and\-error process as equivalent\. We show that this equivalence is empirically false\. We evaluate 2,614 OpenHands trajectories from eight model backends on SWE\-bench Verified\. Of the 60 tasks in this corpus, 47 have enough passing trajectories to construct task\-level process references, yielding a 1,815\-trajectory evaluation subset\. Among passing trajectories in this subset, 10\.7% exhibit behavior we call a Lucky Pass: regression cycles, blind retries, missing verification, or temporally disordered exploration, implementation, and verification\.  We introduce AgentLens, a framework for process\-level assessment of SWE\-agent trajectories, and release AgentLens\-Bench, a dataset of 1,815 trajectories annotated with quality scores, waste signals, divergence points, and 47 task\-level Prefix Tree Acceptor \(PTA\) references\. AgentLens combines two components\. First, it merges multiple passing solutions for the same task into a PTA reference space of correct behaviors\. Second, it uses a context\-sensitive intent\-stage labeler that assigns actions to Exploration, Implementation, Verification, or Orchestration using trajectory history rather than tool identity alone\.  On AgentLens\-Bench, the composite score separates passing trajectories into Lucky, Solid, and Ideal tiers; decomposes Lucky Passes into five recurring mechanisms; and changes how the eight evaluated model backends are ranked compared with pass rate alone\. Across these models, AgentLens classifies between 0\.5% and 23\.2% of successful trajectories as Lucky, and some models move by as many as five rank positions when ranked by quality score instead of pass rate\. We release the anonymized project repository, including the AgentLens\-Bench dataset and AgentLens SDK, at https://anonymous\.4open\.science/r/agentlens\-app\-6810/\.

## CoilStellaration: A Dataset and Benchmark for Engineering\-Aware Stellarator Coilset Generation

**Authors:** Jan\-Hendrik Ewers; Santiago Cadena; Nicolò Foppiani; Andrea Merlo

**ID:** 139216\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139216

[Paper](<https://openreview.net/forum?id=eD6yGqTL8u>) | [PDF](<https://openreview.net/pdf?id=eD6yGqTL8u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139216>)

Stellarators are fusion energy devices that confine hot plasma using a carefully shaped magnetic field, and they are one of the most promising candidates in the race towards commercial fusion\. Among the many systems that make up a stellarator, the electromagnetic coils generate the confining magnetic field\. Their design is the key factor in deciding whether a stellarator can be practically engineered and cost‑effectively realized\. Coilset design is an intrinsically complex problem: it does not admit either a closed or a unique solution, making it suitable for optimization\. Coilset optimization is therefore at the heart of stellarator design: a coilset must accurately reproduce a target magnetic field while satisfying stringent engineering constraints on coil spacing, curvature, and length\. Although recent datasets have accelerated progress on stellarator equilibria optimization, data\-driven coilset design is limited by the lack of standardized datasets that pair target plasma configurations with engineering\-aware coilsets\. Here, we release a dataset \(https://huggingface\.co/datasets/proxima\-fusion/coilstellaration\) of 177,000 optimized stellarator coilsets targeting plasma configurations sampled from the publicly available ConStellaration dataset\. For each configuration, we optimized coilsets to reproduce the magnetic field while satisfying a diverse set of engineering constraints\. Alongside the dataset, we introduce a benchmark for conditional coilset generation: given a target plasma boundary and a set of engineering requirements, a model should produce a coilset that satisfies the engineering constraints while reproducing the target field\. We provide reference code, evaluation scripts and baselines models trained on a subset of the provided data \(https://github\.com/proximafusion/coilstellaration\)\. Beyond enabling better optimization initializations and one\-shot coil design, our dataset provides a testbed for data\-driven constrained optimization and for studying which plasma geometry features predict simpler, more engineerable coils\. By releasing data, and code for benchmarks and baselines, we aim to lower the barrier for machine learning and optimization researchers to engage with stellarator coilset design and accelerate progress toward engineerable and cost\-effective stellarators power plants\.

## AnyHand: A Large\-Scale Synthetic Dataset for RGB\(\-D\) Hand Pose Estimation

**Authors:** Chen Si; Yulin Liu; Bo Ai; Jianwen Xie; Rolandos Alexandros Potamias; Chuanxia Zheng; Hao Su

**ID:** 139245\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139245

[Paper](<https://openreview.net/forum?id=cUZmslkWyQ>) | [PDF](<https://openreview.net/pdf?id=cUZmslkWyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139245>)

We present AnyHand, a large\-scale synthetic dataset designed to advance the state of the art in 3D hand pose estimation\. While recent works with foundation approaches have shown that scaling training data markedly improves hand pose estimation, existing real\-world datasets are limited in coverage, and prior synthetic datasets rarely provide occlusions, arm details, and aligned depth together at scale\. To address this bottleneck, our proposed AnyHand contains 2\.5M single\-hand and 4\.1M hand\-object interaction RGB\-D images, with rich geometric annotations\. We show that extending the original training data recipes of existing RGB baselines with AnyHand yields significant gains on multiple benchmarks \(FreiHAND and HO\-3D\), even when keeping the architectures and training schemes fixed\. Together with extensive ablations on the scale and composition of the training data setups, these results suggest that training data diversity and quality are as critical as scale for advancing hand pose estimation\. We further examine the utility of AnyHand's aligned depth maps in the appendix, showing that scaling RGB\-D supervision with AnyHand allows a lightweight depth\-fusion variant of existing RGB baselines to outperform prior RGB\-D methods\.

## HiGraph: A Large\-Scale Hierarchical Graph Dataset for Malware Analysis

**Authors:** Han Chen; Hanchen Wang; Hongmei Chen; Ying Zhang; Lu Qin; Wenjie Zhang

**ID:** 139227\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139227

[Paper](<https://openreview.net/forum?id=djQ8j3qxbm>) | [PDF](<https://openreview.net/pdf?id=djQ8j3qxbm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139227>)

The advancement of graph\-based malware analysis is critically limited by the absence of large\-scale datasets that capture the inherent hierarchical structure of software\. Existing methods often oversimplify programs into single\-level graphs, failing to model the crucial semantic relationship between high\-level functional interactions and low\-level instruction logic\. To bridge this gap, we introduce HiGraph, the largest public hierarchical graph dataset for malware analysis, comprising over 200M Control Flow Graphs \(CFGs\) nested within 499K Function Call Graphs \(FCGs\)\. This two\-level representation preserves structural semantics essential for building robust detectors resilient to code obfuscation and malware evolution\. We demonstrate HiGraph’s utility through a large\-scale analysis that reveals distinct structural properties of benign and malicious software, establishing it as a foundational benchmark for the community\. The dataset and tools are publicly available at https://higraph\.org\.

## OpenWhistle: A Large\-Scale Longitudinal Dataset and Benchmark of Bottlenose Dolphin Vocalizations

**Authors:** Faadil Mustun; Chiara Semenzin; Roberto Dessi; Pablo Robin Guerrero; pierre orhan; Alexis Emanuelli; Emanuele Rossi; Yair Lakretz; Gonzalo de Polavieja; Germán Sumbre

**ID:** 139275\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139275

[Paper](<https://openreview.net/forum?id=a5IbpMVeS0>) | [PDF](<https://openreview.net/pdf?id=a5IbpMVeS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139275>)

Recent advances in bioacoustics have been driven by large\-scale corpora and standardized benchmarks, yet existing resources are overwhelmingly bird\-centric and shallow per species, limiting their use for studying the structure of a single species' communication system\. This gap is particularly acute for cetaceans: despite bottlenose dolphins \(\\textit\{Tursiops truncatus\}\) being a compelling case of complex vocal communication among non\-human mammals, existing dolphin datasets are small, fragmented, and largely closed\. We introduce OpenWhistle, the largest publicly available dataset of dolphin vocalizations\. It  comprises approximately 180,000 whistles \(114 hours\) recorded over five years from a stable pod of five individuals in a semi\-natural environment, paired with a curated subset of 8,354 expert\-annotated whistles and reproducible evaluation protocols for whistle\-type detection and classification\. We further release the full processing pipeline for whistle detection, segmentation, and categorization\. To demonstrate its utility, we pretrain a Wav2Vec2\.0 model adapted to dolphin acoustics on the OpenWhistle corpus and show that it learns effective representations, outperforming general\-purpose bioacoustic models such as AVES and BioLingual on both tasks while leaving meaningful headroom for future work\. By releasing the dataset, pipeline, and evaluation protocol, we provide the first open dolphin whistle dataset tailored for training self\-supervised models, laying the groundwork for advancing dolphin communication research and developing models that capture fine\-grained acoustic structure within species\.

## Leveraging Data Symmetries to Select an Optimal Subset of Training Data under Label Noise

**Authors:** Kumar Shubham; Pavan Karjol; Kiran M K; Prathosh AP

**ID:** 151105\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151105

[Paper](<https://openreview.net/forum?id=cwzwMwsjQA>) | [PDF](<https://openreview.net/pdf?id=cwzwMwsjQA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151105>)

The performance of machine learning models often relies on large labeled datasets; however, data collected from diverse sources can contain label noise\. Recent work has shown that, in noisy settings, there may exist a subset of the training data on which models can achieve performance comparable to training on a noise\-free dataset\. A widely used method for identifying such subsets is \\textit\{cutstats\}, which employs $k$\-nearest neighbors \($k$\-NN\) to detect low\-noise samples\. However, its performance on high\-dimensional data remains largely unexplored\. In this work, we formally establish that the performance of a classifier trained on a subset of a noisy dataset selected via \\textit\{cutstats\} is influenced by the accuracy of $k$\-NN\. We further demonstrate that, in noisy environments, exploiting data invariance and knowledge of underlying symmetries can significantly enhance the performance of $k$\-NN, bringing it closer to the Bayes optimal classifier even in high\-dimensional regimes\. Finally, we show that for real\-world scenarios, where information about the underlying invariance is only partially known, learnt invariant representations can still facilitate the identification of near\-optimal subsets\.

## M$^2$E\-UAV: A Benchmark and Analysis for Onboard Motion\-on\-Motion Event\-Based Tiny UAV Detection

**Authors:** Weiqi Yan; Lixin Chen; Xiangrui Hou; zhipeng cai; Youbiao Wang; Yangyang Shi; Yu Zang; Cheng Wang

**ID:** 153776\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153776

[Paper](<https://openreview.net/forum?id=IkIsmHmudK>) | [PDF](<https://openreview.net/pdf?id=IkIsmHmudK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153776>)

Tiny UAV detection from an onboard event camera is difficult when the observer and target move at the same time\. In this motion\-on\-motion regime, ego\-motion activates background edges across buildings, vegetation, and horizon structures, while the UAV may appear as a sparse event cluster\. To explore this practical problem, we present M$^2$E\-UAV, a benchmark and analysis setup for onboard motion\-on\-motion event\-based tiny UAV detection\. The processed M$^2$E\-UAV benchmark contains 87,223 training samples and 21,395 validation samples across four scene families: sunny building\-forest, sunny farm\-village, sunset building\-forest, and sunset farm\-village\. We provide M$^2$E\-Point, a point\-based event baseline, and M$^2$E\-Point \+ IMU, an IMU\-conditioned variant, to analyze the role of inertial cues under onboard motion\-on\-motion detection\. M$^2$E\-Point encodes events as $\[x,y,t,p\]$ point sets, extracts local event structure with EdgeConv, and predicts event\-level UAV foreground scores, from which bounding boxes are derived via DBSCAN\. Our validation\-stage analysis shows that point\-based event modeling is a strong baseline, while simple IMU conditioning provides only marginal aggregate gains\. Under the train/validation split, M$^2$E\-Point achieves 0\.9673 F1 and 0\.5501 mAP50\-95, while the IMU\-conditioned variant reaches 0\.5561 mAP50\-95 with only marginal aggregate changes, serving as an initial baseline for future exploration in this domain\. The dataset will be publicly released upon acceptance\.

## Formal Conjectures: An Open and Evolving Benchmark for Verified Discovery in Mathematics

**Authors:** Moritz Firsching; Paul Lezeau; Salvatore Mercuri; Miklós Z\. Horváth; Yaël Dillies; Calle Sönne; Eric Wieser; Fred Zhang; Thomas Hubert; Blaise Aguera y Arcas; Pushmeet Kohli

**ID:** 139299\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139299

[Paper](<https://openreview.net/forum?id=YcOzhUo7z3>) | [PDF](<https://openreview.net/pdf?id=YcOzhUo7z3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139299>)

As automated reasoning systems advance rapidly, there is a growing need for research\-level formal mathematical problems to accurately evaluate their capabilities\. To address this, we present Formal Conjectures, an evolving benchmark of currently 2615 mathematical problem statements formalized in Lean 4\. Sourced from areas of active mathematical research, the dataset features 1029 open research conjectures providing a zero\-contamination benchmark for mathematical proof discovery, and 836 solved problems for proof autoformalization\. Notably, the repository provides a structured interface connecting mathematicians who formalize and clarify problems with the AI systems and humans attempting to solve them\. Demonstrating its immediate utility, the benchmark has already been leveraged to make new mathematical discoveries, including the resolution of open research conjectures\. We describe our approach to ensuring the correctness of these formalizations in a collaborative open\-source project where contributions stem from an active community\. In this framework, AI\-generated proofs and disproofs serve as a valuable auditing mechanism to iteratively improve the fidelity of the benchmark\. Finally, we provide a standardized evaluation setup and report baseline results on frozen evaluation subsets, demonstrating a climbable signal that measures the current frontier of automated reasoning on research\-level mathematics\.

## GameVerse: A Minute\-Scale Gameplay Dataset for Long\-Horizon Interactive World Modeling

**Authors:** Kang He; Wenshuo Peng; Chuanhao Li; Zihui Gao; Xiaojie Xu; Zhengyuan Lin; Yuzhe Ding; Donghong Ji; Kaipeng Zhang; Yongtao Ge

**ID:** 139301\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139301

[Paper](<https://openreview.net/forum?id=YbEXKsFhkZ>) | [PDF](<https://openreview.net/pdf?id=YbEXKsFhkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139301>)

Recent advances in world models have emphasized the need for learning temporally consistent and interactive representations of dynamic environments\. However, existing video datasets fail to simultaneously support long\-horizon dynamics, precise camera control, and structured semantic representations\. To address this, we introduce GameVerse, a large\-scale game video dataset for interactive world modeling\. GameVerse provides minute\-level continuous video sequences, covering diverse interaction behaviors, across both first\- and third\-person perspectives\. The dataset is constructed through a unified data processing pipeline, including scene\-consistent segmentation, quality filtering, camera pose estimation, and multi\-granular semantic annotation\. GameVerse consists of 11,092 videos, with a total duration of 4,692 hours \(195\.5 days\) and approximately 986\.6 million frames\. Each video segment is augmented with temporally stable camera trajectories and structured semantic annotations\. Comprehensive data analysis and experiments demonstrate that GameVerse exhibits strong advantages in terms of scale, diversity, and annotation quality, and shows promising performance for long\-horizon modeling and interactive world understanding\. We expect GameVerse to provide a unified data foundation for long\-horizon modeling and interactive world modeling, and to facilitate future research in this area\.

## What Survival Benchmarks Don’t Tell You: Impact of Model Selection and Dataset Regimes

**Authors:** Sandra Dening; Emre Kavak; Christian Wachinger; George H Chen

**ID:** 139306\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139306

[Paper](<https://openreview.net/forum?id=YMMtTSpEEk>) | [PDF](<https://openreview.net/pdf?id=YMMtTSpEEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139306>)

Despite the proliferation of survival analysis methods, current benchmarks often operate under narrow conditions: they heavily rely on the concordance index \(C\-index\) for evaluation and model selection, and frequently exclude deep learning \(DL\) or underrepresent challenging dataset regimes\. To address this, we conduct a large\-scale, neutral benchmark comparing 10 classical, tree\-based, and DL methods across 49 diverse datasets\. Crucially, we treat the model selection criterion \-\- optimizing for C\-index, Integrated Brier Score \(IBS\), or Mean Absolute Error \(MAE\-PO\) \-\- as an independent experimental variable\.  Using Bayesian mixed\-effects modeling, we demonstrate that evaluation design heavily dictates conclusions\. For complex DL and tree\-based architectures, shifting hyperparameter selection from the C\-index to IBS unlocks massive gains in probabilistic accuracy and calibration at a negligible cost to discriminative ranking\. Furthermore, method success is fundamentally governed by dataset characteristics\. While DL models scale exceptionally well with larger sample sizes, they suffer notable performance drops in high\-dimensional feature spaces\. Additionally, we expose a structural vulnerability where heavy censoring artificially inflates absolute calibration metrics, creating overly conservative tests\.  Ultimately, our findings challenge the utility of global single\-number performance summaries and advocate for regime\-conditioned reporting\. We further demonstrate that aligning the model selection strategy with the target application is not merely an implementation detail, but a critical requirement for realizing the true probabilistic and temporal accuracy of complex survival architectures\. We make our benchmark publicly available upon publication\.

## DINOv3

**Authors:** Oriane Siméoni; Huy Vo; Maximilian Seitzer; Federico Baldassarre; Maxime Oquab; Cijo Jose; Vasil Khalidov; Marc Szafraniec; Seung Eun Yi; Michaël Ramamonjisoa; Francisco Massa; Daniel Haziza; Luca Wehrstedt; Jianyuan Wang; Timothée Darcet; Théo Moutakanni; Leonel Sentana; Claire Roberts; Andrea Vedaldi; Jamie Tolan; John Brandt; Camille Couprie; Julien Mairal; Herve Jegou; Patrick Labatut; Piotr Bojanowski

**ID:** 156661\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156661

[Paper](<https://openreview.net/pdf?id=2NlGyqNjns>) | [PDF](<https://openreview.net/pdf?id=2NlGyqNjns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156661>)

Self\-supervised learning holds the promise of eliminating the need for manual data annotation, enabling models to scale effortlessly to massive datasets and larger architectures\. By not being tailored to specific tasks or domains, this training paradigm has the potential to learn visual representations from diverse sources, ranging from natural to aerial images \-\- using a single algorithm\. This technical report introduces DINOv3, a major milestone toward realizing this vision by leveraging simple yet effective strategies\. First, we leverage the benefit of scaling both dataset and model size by careful data preparation, design, and optimization\. Second, we introduce a new method called Gram anchoring, which effectively addresses the known yet unsolved issue of dense feature maps degrading during long training schedules\. Finally, we apply post\-hoc strategies that further enhance our models' flexibility with respect to resolution, model size, and alignment with text\. As a result, we present a versatile vision foundation model that outperforms the specialized state of the art across a broad range of settings, without fine\-tuning\. DINOv3 produces high\-quality dense features that achieve outstanding performance on various vision tasks, significantly surpassing previous self\- and weakly\-supervised foundation models\. We also share the DINOv3 suite of vision models, designed to advance the state of the art on a wide spectrum of tasks and data by providing scalable solutions for diverse resource constraints and deployment scenarios\.

## ELMA: Benchmarking Anaphoric Compositions for Long\-Term Text\-to\-Motion Generation

**Authors:** Shun Kato; Dixin Yang; Kotaro Amaya; Yuiga Wada; Kazumi Fukuda; Takashi Shibuya; Yuki Mitsufuji; Mariko Isogawa

**ID:** 139367\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139367

[Paper](<https://openreview.net/forum?id=UWLadjotaK>) | [PDF](<https://openreview.net/pdf?id=UWLadjotaK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139367>)

Text\-guided long\-term human motion generation is essential for applications such as continuously operating digital avatars\. Despite recent progress on short clips, existing models struggle with multi\-segment instructions that involve anaphora, where constraints established in earlier segments must be preserved over time\. In this paper, we introduce a novel task of long\-term motion generation from such anaphoric compositions\. To mitigate this, we present ELMA, an episodic long\-term motion dataset with dense segment\-level annotations that preserve cross\-segment dependencies\. Built via a fully automated collection and filtering pipeline, ELMA extracts high\-quality, continuous 30\-second clips from in\-the\-wild videos, capturing the episodic narratives necessary for long\-range state modeling\. Leveraging this dataset, we fine\-tune state\-of\-the\-art motion generation models to incorporate long\-range context\. Extensive experiments reveal fundamental shortcomings in current models when handling context\-dependent instructions\. We demonstrate that ELMA enables significant improvements in both global physical realism and semantic alignment, setting a robust new baseline for long\-term motion synthesis\.

## Clean\-Label Poisoning for Gradient\-Boosted Decision Trees

**Authors:** Sinuo Fan; Jun Woo Chung; Weijie Zhao; Yingjie Lao

**ID:** 153815 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWD04rKizN>) | [PDF](<https://openreview.net/pdf?id=IWD04rKizN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153815>)

Clean\-label poisoning attacks have been well studied for differentiable models, yet their practical behavior in gradient\-boosted decision trees \(GBDTs\) remains less understood\. In this paper, we investigate clean\-label poisoning under realistic constraints: class labels are preserved, and features after perturbation must remain plausible\. Our framework selects poisoning candidates using a tree\-specific influence score and perturbs input features that prioritize dimensions based on split\-gain signals\. A key finding is a non\-monotonic dependence on the perturbation budget $\\varepsilon$, arising from discrete threshold crossings in tree splits and feasibility constraints on the perturbation\. We introduce an ellipsoidal region and project both update iterates and finite\-difference probes onto this region to obtain meaningful and feasible perturbations\. Experimental results show that our attack is highly effective, e\.g\., F1 score on Adult dataset is 0\.71 to 0\.43, and F1 score 0\.54 to 0\.33 on Credit\-g\.

## Monoculture Robust Learning

**Authors:** Lee Cohen; Jon Kleinberg; Omer Reingold

**ID:** 154495\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154495

[Paper](<https://openreview.net/forum?id=DBFZrcg8Hf>) | [PDF](<https://openreview.net/pdf?id=DBFZrcg8Hf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154495>)

We introduce a notion of monoculture robustness in Probably Approximately Correct \(PAC\) learning, as a way to mitigate the problem of  \*algorithmic monoculture\* \(Kleinberg &amp; Raghavan, 2021\): the tendency of models sharing the same components \(e\.g\., training data\) to fail on the same inputs\. Specifically, we ask whether a learner with access to a single dataset can output $k$ individually accurate hypotheses whose joint failure probability is comparable to training on $k$ independent datasets\. We say that such a learning procedure achieves \*monoculture robustness\*, and we quantify this by bounding the \*conjunctive error\* that all $k$ hypotheses misclassify points in an individual sense\.  We design methods for achieving this type of guarantee by drawing a surprising connection between replicability \(Impagliazzo et al\., 2022\) and monoculture robustness\. Specifically, we show that if the base learner is $\\rho$\-replicable, then running it independently $k$ times on the same sample yields individual monoculture error that shrinks exponentially with $k$, controlled by the single\-run error of the base learner at the point and $\\rho$\. We complement these positive results with a lower bound: for individual monoculture robustness,  we prove a worst\-case lower bound showing that, for learners, driving the individual conjunctive error down to $\\gamma$ can require a sample\-size multiplier of $t = \\Omega\(\\log\(1/\\gamma\)\)$\.

## Towards Unified Dynamic Face Landmark Detection

**Authors:** Sebastian Regalado Lozano; Varshanth R Rao; Ruowei Jiang; Parham Aarabi; Igor Gilitschenski

**ID:** 151381\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151381

[Paper](<https://openreview.net/forum?id=b1iNnvFc6A>) | [PDF](<https://openreview.net/pdf?id=b1iNnvFc6A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151381>)

Although advancements in face landmark detection \(FLD\) methods continue to push performance boundaries, they overlook two major functional limitations: \(1\) different network parameters need to be trained independently for each "N\-point" benchmark dataset, and \(2\) a model trained on an "N\-point" dataset reliably outputs only the N landmarks\. In our work, we first conceptualize Face Part\-Anchored Landmark Positions \(FPALPs\), wherein each landmark is treated as a progression value between zero \(start\) and one \(end\) along a face part's contour\. Every landmark can be expressed in the FPALP format, irrespective of its source dataset, hence unlocking the ability to unify all "N\-point" datasets into a single dataset\. Secondly, we represent each landmark with an FPALP\-based query, refine it progressively with a cross\-modality decoder, and predict its coordinates based on the final representation\. Our approach, called Unified Dynamic FLD, embodies these two design choices and streamlines the landmark detection pipeline by enabling \(1\) a single model to learn on any number of "N\-point" datasets, and \(2\) yield any number of specific landmark predictions by loading the designated landmark queries at runtime\. Extensive experiments on multiple benchmark datasets show that our method delivers these benefits while remaining competitive with, and in several cases outperforming existing state\-of\-the\-art methods\.

## Ad\-Hoc Teamwork from Human Demonstrations

**Authors:** Darius Muglich; Niklas Lauffer; Tin Dizdarević; Jakob Foerster

**ID:** 148597\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148597

[Paper](<https://openreview.net/forum?id=wYE8NC5FXe>) | [PDF](<https://openreview.net/pdf?id=wYE8NC5FXe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148597>)

Human players in cooperative games often rely on conventions: reusable patterns of play that coordinate well when used by the whole team, but can fail otherwise\. Evaluating agents in this setting is difficult because human demonstration datasets are usually unlabeled: trajectories do not identify which player, group, or convention produced them\. As a result, standard proxy\-based evaluations can miss important population diversity\. In particular, proxy bots produced by regularised self\-play around a pooled behavioural cloning policy can remain concentrated around a single dominant mode of play\. We introduce a pipeline for recovering and evaluating this hidden convention diversity from unlabeled demonstrations\. Our method first learns latent convention structure from the dataset, then selects a compact set of distinct but plausible conventions, and finally reconstructs each selected convention into a high\-performing playable proxy using KL\-regularised PPO\. A key practical challenge is that KL\-regularised PPO is sensitive to the KL penalty, which is often tuned using online interaction\. We provide an empirical offline calibration procedure for choosing this KL penalty in the PPO\+KL reconstruction settings studied here\. On Hanabi, we find that the BC\-derived proxy suite is highly concentrated, and that the relative ordering of agents changes when evaluation uses the latent proxy suite instead\.

## OpenSanctions Pairs: A Large\-Scale Dataset for Pairwise Entity Matching

**Authors:** Chandler Smith; Magnus Sesodia; Friedrich Lindenberg; Christian Schroeder de Witt

**ID:** 139718\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139718

[Paper](<https://openreview.net/forum?id=8gjD9mKs1q>) | [PDF](<https://openreview.net/pdf?id=8gjD9mKs1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139718>)

_Abstract unavailable from the accessible public sources._

## EmoPhone: A Multi\-Wave Dataset for In\-the\-Wild Mobile and Wearable Affect Sensing

**Authors:** Panyu Zhang; minseo Park; Soowon Kang; Ismatzoda Tomiris; Azizbek Mustafakulov; Otabek Najimov; Woohyeok Choi; JUMABEK Alikhanov; Surjya Ghosh; Uichin Lee

**ID:** 139785 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4xXw8qgOwz>) | [PDF](<https://openreview.net/pdf?id=4xXw8qgOwz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139785>)

_Abstract unavailable from the accessible public sources._

## SynthHair: Leveraging MetaHumans for a High\-Quality 4K Hair Matting Dataset

**Authors:** Markus Karmann; Shile Li; Philip Torr; Puneet Dokania; Qi Zhang; Peng\-Tao Jiang; Bo Li; Onay Urfalioglu

**ID:** 139817 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2xR9SbLJIE>) | [PDF](<https://openreview.net/pdf?id=2xR9SbLJIE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139817>)

_Abstract unavailable from the accessible public sources._

## MosaicMRI: A Diverse Dataset and Benchmark for Raw Musculoskeletal MRI

**Authors:** Paula Arguello; Berk Tinaz; Mohammad Shahab Sepehri; Maryam Soltanolkotabi; Mahdi Soltanolkotabi

**ID:** 139818 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2w0L3gwZS7>) | [PDF](<https://openreview.net/pdf?id=2w0L3gwZS7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139818>)

_Abstract unavailable from the accessible public sources._

## Model Capacity Determines Grokking through Competing Memorisation and Generalisation Speeds

**Authors:** Yiding Song; Hanming Ye

**ID:** 155807 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2kLkhhcpNe>) | [PDF](<https://openreview.net/pdf?id=2kLkhhcpNe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155807>)

Existing accounts of grokking explain the phenomena in terms of mechanistic frameworks such as circuit efficiency or lazy\-to\-rich transitions\. However, despite a known dependence between grokking and model size, how model capacity shapes grokking remains an open question\. We give an information\-theoretic account of this relationship on the task of modular arithmetic, showing that grokking does not immediately occur when a model becomes large enough to memorise the training set, but rather emerges as the outcome of a competition between two measurable timescales: a memorisation speed $T\_\{\\text\{mem\}\}\(P\)$ and a generalisation speed $T\_\{\\text\{gen\}\}\(P\)$, both of which are functions of model parameter count $P$\. Adapting the information capacity framework of Morris et al\. \(2025\), we estimate $T\_\{\\text\{mem\}\}\(P\)$ on random\-label data of equivalent complexity and $T\_\{\\text\{gen\}\}\(P\)$ on the modular task itself, and show that grokking emerges close to the parameter scale where these timescales intersect\. The framework also suggests an empirical model for predicting memorisation speed given model capacity and dataset complexity, recovering the previously reported empirical observation that larger models memorise faster\. Overall, we motivate the formalisation of different learning timescales as important abstractions to study when explaining how model capacity shapes grokking on algorithmic tasks\.

