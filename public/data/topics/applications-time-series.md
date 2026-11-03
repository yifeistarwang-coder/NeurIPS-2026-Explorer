# Applications / Time Series

应用 / 时间序列

195 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Kairos: Toward Adaptive and Parameter\-Efficient Time Series Foundation Models

**Authors:** Kun Feng; Shaocheng Lan; Yuchen Fang; Wenchao He; Sihan Lu; Shuqi Gu; Lintao Ma; Xingyu Lu; Kan Ren

**ID:** 153129 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NhA2qIjt4u>) | [PDF](<https://openreview.net/pdf?id=NhA2qIjt4u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153129>)

Inherent temporal heterogeneity, such as varying sampling densities and periodic structures, has posed substantial challenges in zero\-shot generalization for Time Series Foundation Models \(TSFMs\)\. Existing TSFMs predominantly rely on massive parameterization to absorb such heterogeneity, as their static tokenization and positional encoding schemes entangle diverse temporal patterns into a fixed representation space, encouraging memorization rather than adaptation\. To address this limitation, we propose Kairos, a flexible and parameter\-efficient TSFM dedicated to forecasting tasks, which decouples temporal heterogeneity from model capacity through a novel tokenization perspective\. Kairos introduces a dynamic patching tokenizer and a mixture\-of\-size encoding that adapt observational granularity to local information density, enabling fine\-grained temporal abstraction without increasing model width or depth\. In addition, we design a multi\-granularity positional embedding based on dynamic rotary encodings, which conditions on instance\-level spectral features and temporal structure induced by dynamic patching tokenization, allowing robust modeling of diverse temporal dependencies\. Trained on a novel Predictability\-Stratified Time\-Series \(PreSTS\) corpus, Kairos achieves superior zero\-shot performance with substantially fewer parameters on two mainstream benchmarks, GIFT\-Eval and Time\-Series\-Library\.

## BucpTSF: Breaking the Uniform Computation Paradigm in Time\-Series Forecasting

**Authors:** Hua Wang; Jinghao Lu; Fan Zhang

**ID:** 148238 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zMcy2fY2hW>) | [PDF](<https://openreview.net/pdf?id=zMcy2fY2hW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148238>)

Real\-world time series typically exhibit non\-uniform information density across temporal positions, frequency structures, and forecasting horizons: critical dynamics are concentrated in local segments, different frequency components carry different structural information, and different horizons require different modeling complexity\. However, most existing methods still allocate computation approximately uniformly across these dimensions, leading to redundant computation in low\-information regions and insufficient modeling of key patterns\. To address this, we propose BucpTSF, an information\-density\-driven structured framework for time series forecasting\. Specifically, BucpTSF reorganizes raw sequences into hierarchically heterogeneous multi\-level token representations through information\-density\-aware temporal representation reorganization, captures key cross\-token dependencies with low overhead via frequency\-selective structured token interaction, and further introduces horizon\-conditioned structured extrapolation to adaptively balance dynamic modeling and structural extrapolation bias for different horizons, thereby improving the accuracy and stability of long\-term forecasting\. Extensive experiments on real\-world datasets show that BucpTSF consistently outperforms strong baselines under various forecasting settings, validating the effectiveness of information\-density\-driven non\-uniform computation allocation for time series forecasting\.

## Supervision Recovery for Time Series Anomaly Detection via Counterfactual Pairing

**Authors:** Yifei Gao; Tian Lan; Yimeng Lu; Xuming An; Meng Wang; Wenjun He; Yijie Li; Chen Zhang

**ID:** 151678 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YqBYI9KKtm>) | [PDF](<https://openreview.net/pdf?id=YqBYI9KKtm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151678>)

Time series anomaly detection \(TSAD\) remains challenging not only because anomaly labels are scarce, but also because temporal anomalies are highly context\-dependent\. Existing methods often rely on unsupervised or surrogate objectives, producing anomaly scores indirectly rather than learning explicit normal\-\-anomalous distinctions\. We propose Counterfactual Pairing with Anomaly Semantics \(CAPS\), a supervision\-recovery framework for TSAD\. CAPS formulates temporal anomalies as mechanism\-induced effects on normal temporal evolution and recovers matched supervision without target\-domain anomaly labels\. It learns transferable anomaly semantics from simulated normal\-\-anomalous pairs, disentangles them from normal temporal structure, and organizes them into family\-wise modes\. Instead of directly using simulated anomalies as target positives, CAPS instantiates the learned semantics as residual\-form anomaly effects on target\-domain reference trajectories via residual MoE generation\. The resulting matched counterparts provide supervision\-aligned signals for boundary\-oriented detector learning\. Experiments on nine benchmark datasets show that CAPS outperforms unsupervised and injection\-based baselines, is competitive with supervised\-reference baselines, and provides interpretable evidence through anomaly\-effect generation and expert association\.

## COMET: Codebook\-based Online\-adaptive Multi\-scale Embedding for Time\-series Anomaly Detection

**Authors:** JINWOO PARK; Hyeongwon Kang; Seung H Han; Pilsung Kang

**ID:** 150690 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gEg9NAe7OM>) | [PDF](<https://openreview.net/pdf?id=gEg9NAe7OM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150690>)

Multivariate time\-series anomaly detection aims to identify abnormal temporal patterns in complex real\-world systems\. However, robust unsupervised time\-series anomaly detection remains challenging because anomalies can manifest over different temporal ranges and emerge from interactions among variables, while distribution shifts can cause normal patterns to drift over time\. To address these challenges, we propose Codebook\-based Online\-adaptive Multi\-scale Embedding for Time\-series anomaly detection \(COMET\), a unified framework with three tightly coupled components\. First, Multi\-scale Patch Encoder learns correlation\-aware patch embeddings by combining variable\-specific temporal dynamics with shared inter\-variable structure across multiple patch scales\. Second, Vector\-Quantized Coreset quantizes these embeddings into representative normal prototypes, which are used to detect anomalies through a dual score combining quantization error and density\-aware memory distance\. Third, Online Codebook Adaptation leverages the same codebook structure to identify reliable normal samples from training\-activated codebook entries, and then updates the prototypes through contrastive learning at inference time\. Experiments on five benchmark datasets demonstrate that COMET achieves the best performance on 39 out of 45 evaluation metrics compared to seven baselines, showing robust performance across diverse evaluation protocols\.

## TailDiff: Elicitable Tail\-Guided Diffusion for Risk\-Sensitive Generation

**Authors:** Shuning Zhao; Patrick Wong; Rongshang Li; Leran Zhang; Xiaolin Hu

**ID:** 151735 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YTXAbIxk6x>) | [PDF](<https://openreview.net/pdf?id=YTXAbIxk6x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151735>)

Generative models are increasingly used to simulate risk\-sensitive systems, from financial markets and energy demand to healthcare, where downstream decisions depend on rare but consequential events\. In this setting, matching average behavior is not enough: rare tail events drive stress testing, capital allocation, and policy analysis\. Yet tail objectives such as Value\-at\-Risk and Expected Shortfall are difficult to optimize directly because empirical estimators rely on sorting, thresholding, and subset selection\. We introduce TailDiff, a training\-free inference\-time guidance method for pretrained diffusion models that uses jointly elicitable Fissler\-Ziegel scoring rules to construct differentiable tail\-aware objectives\. We analyze the induced guidance field locally in the low\-noise regime, characterizing tail\-shaping and boundary\-coupling behavior together with controlled perturbations under small realized effective drift\. On synthetic data, TailDiff approaches the oracle finite\-sample floor, on a challenging financial tail\-risk simulation benchmark, it outperforms the state\-of\-the\-art on tail metrics while preserving bulk structure\.

## Entropy Guided Dynamic Patch Segmentation for Time Series Transformers

**Authors:** Sachith Abeywickrama; Emadeldeen Eldele; Min Wu; Xiaoli Li; Chau Yuen

**ID:** 152779 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QPKvNhibb1>) | [PDF](<https://openreview.net/pdf?id=QPKvNhibb1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152779>)

Patch\-based transformers have emerged as efficient and improved long\-horizon modeling architectures for time series modeling\. Yet, existing approaches rely on temporally\-agnostic patch construction, where arbitrary starting positions and fixed lengths fracture temporal coherence by splitting natural transitions across boundaries\. This naive segmentation often disrupts short\-term dependencies and weakens representation learning\. We propose a novel Entropy\-Guided Dynamic Patch Encoder \(EntroPE\), as a temporally informed framework that dynamically detects transition points via conditional entropy and dynamically places patch boundaries\. This preserves temporal structure while retaining the computational benefits of patching\. EntroPE consists of two key modules, namely an Entropy\-based Dynamic Patcher \(EDP\) that applies information\-theoretic criteria to locate natural temporal shifts and determine patch boundaries, and an Adaptive Patch Encoder \(APE\) that employs pooling and cross\-attention to capture intra\-patch dependencies and produce fixed\-size latent representations\. Extensive experiments on long\-term forecasting, classification, and anomaly detection demonstrate that the proposed method improves both accuracy and efficiency, establishing entropy\-guided dynamic patching as a promising new paradigm for time series modeling\.

## OccStress: Stress\-Testing the 4D Occupancy Forecasting Chain

**Authors:** Yu Zheng; Jie Hu; Jiaqi Xiong; Ruiping Liu; Junwei Zheng; Kailun Yang; Jiaming Zhang

**ID:** 139118 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k1vpGWtKyd>) | [PDF](<https://openreview.net/pdf?id=k1vpGWtKyd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139118>)

Occupancy world models use historical occupancy states to forecast future 3D scenes, but their robustness under corrupted temporal inputs remains poorly understood\. Existing evaluations primarily emphasize clean forecasting accuracy and provide limited evidence about how errors enter, persist, and propagate through the occupancy perception\-forecasting chain\. This paper introduces OccStress, a robustness stress\-testing benchmark for the occupancy forecasting chain\. OccStress contains 61 corruption categories and 80k\+ anchors\. OccStress covers both 3D occupancy perception and 4D occupancy forecasting through two complementary tracks\. This design separates realistic pipeline errors from the intrinsic sensitivity of 4D forecasting models to corrupted occupancy states\. OccStress further defines temporal injection protocols to test whether errors in the current state, recent history, or earlier history affect future forecasts differently\. OccStress provides aggregate metrics to evaluating robustness along occupancy forecasting chain\. Experiments on OccStress reveal that current occupancy models are substantially affected by both upstream prediction errors and direct state corruptions, and that clean performance alone is an insufficient indicator of temporal robustness\. Dataset: https://hf\.co/datasets/OccStress/OccStress\. Code: https://anonymous\.4open\.science/r/OccStress\.

## VETime: Vision Enhanced Zero\-Shot Time Series Anomaly Detection

**Authors:** Yingyuan Yang; Tian Lan; Yifei Gao; Yimeng Lu; Xuming An; Wenjun He; Meng Wang; Chenghao Liu; Chen Zhang

**ID:** 149823 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n1oSBaAtl6>) | [PDF](<https://openreview.net/pdf?id=n1oSBaAtl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149823>)

Time\-series anomaly detection \(TSAD\) requires identifying both immediate Point Anomalies and long\-range Context Anomalies\. However, existing zero\-shot foundation models face a fundamental trade\-off: 1D temporal models provide fine\-grained pointwise localization but lack a global contextual perspective, while 2D vision\-based models capture global patterns but suffer from information bottlenecks due to a lack of temporal alignment and coarse\-grained pointwise detection\. To resolve this dilemma, we propose VETime, the first TSAD framework that unifies temporal and visual modalities through fine\-grained visual\-temporal alignment and dynamic fusion\. VETime introduces a Reversible Image Conversion and a Patch\-Level Temporal Alignment module to establish a shared visual\-temporal timeline, preserving discriminative details while maintaining temporal sensitivity\. Furthermore, we design an Anomaly Window Contrastive Learning mechanism and a Task\-Adaptive Multi\-Modal Fusion to adaptively integrate the complementary perceptual strengths of both modalities\. Extensive experiments demonstrate that VETime significantly outperforms state\-of\-the\-art models in zero\-shot scenarios, achieving superior localization precision with lower computational overhead than current vision\-based approaches\.

## OpenMHC: Accelerating the Science of Wearable Foundation Models

**Authors:** Narayan Schuetz; Yuze Bai; Lianggang Pan; Edgar Eggert; Favour Nerrise; Juan Delgado\-SanMartin; Max Rosenblattl; Milana Gurbanova; Mohammad Asadi; Anders Johnson; Paul Schmiedmayer; Dennis Wang; Allan Lawrie; Daniel S Kim; Xin Liu; Akshay Paruchuri; Ehsan Adeli; Euan Ashley; Kelly W Zhang

**ID:** 139369 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOTXGszV0L>) | [PDF](<https://openreview.net/pdf?id=UOTXGszV0L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139369>)

Mobile and wearable devices offer an unprecedented opportunity for continuous, passive health monitoring and active health coaching\. However, the largest wearable datasets are not publicly available for research, and leading wearable foundation models trained on such datasets are rarely open\-weight or come with reproducible training code\. To accelerate open science in wearable health, we release OpenMyHeartCounts \(OpenMHC\) , the largest and most comprehensive open\-access wearable health dataset to\-date, alongside open\-source implementations of recent wearable foundation models\. \\openmhc\{\}, derived from over a decade of data collected through the My Heart Counts study app, includes &gt;60 million hours of wearable data across 19 sensor channels \(e\.g\., step count, heart rate, sleep, workouts\) and up to 169 linked variables, including health, lifestyle, mood, and behavior from 11,894 consenting participants\. Furthermore, we introduce a unified, open benchmark that enables standardized comparison of wearable health models across three tracks: health and behavior downstream prediction, multivariate data imputation, and time\-series forecasting\. We benchmark classical methods alongside recent wearable and multivariate time series foundation models\. By open\-sourcing data, code, and model weights at this unprecedented scale, we aim to democratize wearable health AI research and enable the community to drive open progress in this domain\.

## ProCTI: Prototype\-Refined Global Conditioning for Diffusion\-Based Time Series Imputation

**Authors:** Fariza Rashid; Duc Van Le; Rahat Masood; Gustavo E Batista; Aruna Seneviratne; Suranga Seneviratne

**ID:** 149404 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qJv71MIpc5>) | [PDF](<https://openreview.net/pdf?id=qJv71MIpc5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149404>)

Time series imputation has progressed from statistical and deep learning approaches to diffusion\-based models, which have shown strong recent performance\. Existing diffusion\-based methods typically condition the reverse process using local contextual information from the current or neighbouring windows\. Meanwhile, global dataset\-level structure often remains implicit, limiting performance when local observations are sparse, noisy, or unrepresentative\. To address this issue, we propose ProCTI, a diffusion\-imputation framework that augments local conditioning with retrieved global dataset\-level priors through learned prototypes\. A hybrid conditioning mechanism integrates this global context with local signals during reverse diffusion, enabling more accurate reconstruction under varying missingness scenarios\. Experiments across multiple benchmark datasets show that ProCTI outperforms strong baselines overall under random missingness, while remaining competitive under attribute\-wise missingness\. We further introduce a theoretical framework that distinguishes between local and global conditioning in diffusion\-based imputation, showing that combining both can reduce conditional uncertainty and improve imputation quality\.

## Dirichlet\-Guided Group Forecasting for Alleviating Over\-smoothing in Time Series Forecasting

**Authors:** Xingyu Zhang; Jingyao Wang; Xin Yu; Zeen Song; Jianqi Zhang; Changwen Zheng; Wenwen Qiang

**ID:** 154424 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DgOd19LuBJ>) | [PDF](<https://openreview.net/pdf?id=DgOd19LuBJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154424>)

Time series forecasting often suffers from over\-smoothing, especially when future dynamics are multi\-modal\. Forecasts may follow the coarse trend of the observed future, but fail to preserve sharp changes, oscillations, turning points, and regime transitions that define plausible dynamic evolution\. In this work, we revisit over\-smoothing from the perspective of latent dynamical mode compression: under partial observation and single\-realization supervision, multiple plausible future modes can be weakened, merged, or averaged during forecasting\. Based on this view, we propose Dirichlet\-Guided Group Forecasting \(DGF\), a mode\-preserving forecasting framework that explicitly models multiple mode\-conditioned predictive distributions and uncertainty over their selection probabilities\. DGF uses a Dirichlet\-guided hierarchical sampling mechanism and reward\-based optimization to encourage forecasts that are accurate, dynamically consistent, and mode\-distinct\. Extensive experiments on real\-world forecasting benchmarks show that DGF reduces over\-smoothing while improving forecasting accuracy, diversity, and dynamical consistency\.

## TiRex\-2: Generalizing TiRex to Multivariate Data and Streaming

**Authors:** Patrick Podest; Marco Pichler; Elias Bürger; Levente Zólyomi; Bernhard Voggenberger; Wilhelm F Berghammer; Daniel Klotz; Sebastian Böck; Günter Klambauer; Sepp Hochreiter

**ID:** 151700 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YgN3LimhOJ>) | [PDF](<https://openreview.net/pdf?id=YgN3LimhOJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151700>)

We introduce TiRex\-2, a recurrent xLSTM\-based time series foundation model that generalizes the univariate TiRex to multivariate forecasting with both past and future covariates\. Real\-world forecasting is inherently sequential: observations arrive continuously, variables evolve jointly, and a subset of covariates is known ahead of time\. Existing Transformer\-based time series foundation models capture cross\-variate dependencies but incur quadratic complexity in context length and require full\-history recomputation as new observations arrive\. TiRex\-2 addresses these limitations through a memory\-centric recurrent design that operates at constant per\-patch cost under streaming\. The model combines a bidirectional time mixer with an asymmetric grouped\-attention variate mixer, enabling the integration of future\-known covariates while preserving strict causality over target variables\. To our knowledge, this is the first time series foundation model that achieves this combination of properties\. To support scalable multivariate pretraining, we propose a synthetic coupling pipeline that composes diverse multivariate samples on the fly from large univariate corpora\. Empirically, TiRex\-2 achieves state\-of\-the\-art zero\-shot performance on GIFT\-Eval and fev\-bench, remains stable when streamed to arbitrary context lengths, and maintains constant inference cost per patch\. The model uses 38\.4M active parameters in univariate mode, with an additional 44\.1M parameters activated for multivariate forecasting\.

## Topological Out\-of\-Domain Generalization in Dynamical Systems Reconstruction

**Authors:** Georg Trede; Charlotte Doll; Elias Daniel Weber; Daniel Durstewitz

**ID:** 151629 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z8RyfGuta0>) | [PDF](<https://openreview.net/pdf?id=Z8RyfGuta0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151629>)

Predicting the behavior of dynamical systems \(DS\) beyond the dynamical and parameter regimes observed in training is a pivotal and essentially unresolved problem in scientific ML\. It is central to any good scientific theory, which we expect to be able to make predictions which are not covered by currently available data\. Recent hierarchical and hyper\-network guided approaches for DS reconstruction \(DSR\) enable training on many DS simultaneously, and revealed that extracted latent features are often related to crucial control parameters of the underlying DS that varied across the training corpus\. However, true out\-of\-domain forecasting abilities of these models, e\.g\. across tipping points, remain limited, and fine\-tuning, or even full model retraining, on time series from the new dynamical regime is usually required\. Here we mathematically analyze the root of these limitations in previous model formulations and identify three core shortcomings rooted in a mismatch between structural assumptions of the reconstruction model and typical properties of physical systems\. We propose a combination of remedies for these shortcomings, most importantly feature splitting , and furthermore derive a closed\-form bound on the reliable extrapolation range\. We demonstrate empirically that our techniques allow for accurate zero\-shot prediction into new dynamical regimes, outside the observed training regime, as, e\.g\., encountered across tipping points\.

## Neural Neural Scaling Laws

**Authors:** Michael Hu; Jane Pan; Ayush Rajesh Jhaveri; Nicholas Lourie; Kyunghyun Cho

**ID:** 154166 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FmoL6zqWpY>) | [PDF](<https://openreview.net/pdf?id=FmoL6zqWpY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154166>)

Neural scaling laws predict how language model performance improves with increased training inputs\. While aggregate metrics like validation loss can follow smooth power\-law curves, individual downstream tasks exhibit diverse scaling behaviors: some improve monotonically, others plateau, and some even degrade with scale\. We argue that predicting downstream performance from validation loss suffers from two limitations: averaging token\-level losses obscures signal, and no simple parametric family can capture the full spectrum of scaling behaviors\. To address this, we propose Neural Neural Scaling Laws \(NeuNeu\), a neural network that frames scaling law prediction as time\-series extrapolation\. NeuNeu combines temporal context from observed accuracy trajectories with token\-level validation losses, learning to predict future performance without the limitations inherent in assuming a specific functional form\. Trained entirely on open\-source model checkpoints from HuggingFace, NeuNeu achieves 1\.99\\% mean absolute error in predicting model accuracy on 66 downstream tasks\-\-\-a 44\\% reduction compared to logistic scaling laws \(3\.56\\% MAE\)\. Furthermore, NeuNeu generalizes zero\-shot to unseen model families, architectures, parameter counts, and downstream tasks\. Our work suggests that predicting downstream scaling directly from data outperforms parametric alternatives\.

## FENet: Functional Embedding Neural Network for Change\-Point Detection in Functional Time Series

**Authors:** Caixia Xu; Jinhong You; Wen Li; shouguo du; Yiming Tang; Jiguo Cao

**ID:** 155313 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WmRBxSI5l>) | [PDF](<https://openreview.net/pdf?id=6WmRBxSI5l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155313>)

Detecting abnormal changes in server operational data is an important task in modern computing systems, as unexpected shifts in traffic, workload, or performance metrics may indicate service degradation, abnormal access patterns, system failures, or potential security risks\. However, server monitoring data are often naturally observed as functional time series, with complex temporal patterns, high dimensionality, and heterogeneous structures, making traditional change\-point detection methods difficult to apply reliably in practice\. To address this problem, we propose a general change\-point detection framework based on a Functional Embedding Neural Network \(FENet\), designed to provide robust detection across different data types and structural conditions without relying on strong prior assumptions\. The proposed method is motivated by the connection between the classical functional CUSUM \(FCUSUM\) statistic and neural network representations, which allows FENet to learn effective detection rules directly from data while retaining useful statistical intuition\. We provide theoretical analysis to formalize this connection and study key properties of the proposed approach\. Extensive simulation studies show that FENet achieves competitive performance compared with existing methods and remains robust under limited training data and distributional mismatch between training and test settings\. We further apply FENet to real\-world server operational metrics, demonstrating its practical value in detecting and localizing abnormal changes in complex server monitoring systems\.

## AtmoZero: Self\-Play Post\-Training for Caption\-Free Weather Time\-Series Captioning

**Authors:** Qirui Zheng; Shengchao Chen

**ID:** 152217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ugpq0GTKKc>) | [PDF](<https://openreview.net/pdf?id=Ugpq0GTKKc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152217>)

Multivariate weather time series are a central modality for forecasting and decision support, and the surrounding language increasingly mediates how numerical weather is consumed by users and downstream models\. However, existing pipelines depend on closed\-source language model ensembles with expert quality control or on retrieving human\-curated text, while prior caption\-RL rewards optimize cycle similarity or downstream\-task utility, neither of which can tell a captioner that a confidently asserted phenomenon is contradicted by the data, so the absence of an executable, station\-observable, and refutation\-aware reward signal has blocked the application of self\-play RL to this scientific modality\. To address this, we propose AtmoZero, a post\-training framework that trains a weather\-time\-series captioner without a single human\-written caption, by aligning a language model with a library of seven station\-observable scientific verifiers, pairing them with an explicit refutation channel that penalizes caption claims the data contradicts, and combining them with auxiliary reconstruction and forecaster\-utility rewards under group\-relative policy optimization\. Extensive empirical results on a twelve\-year ERA5 reanalysis corpus and real\-world surface observations show that AtmoZero attains the lowest unsupported\-claim rate and forecasting error at every horizon, outperforming closed\-source captioners, dense\-reward RL, and far\-larger foundation models, with extensive analyses confirming that these gains arise from multiple complementary signals and are robust under distribution shift\.

## Interactive 4D Volumetric Liquid Forecasting under Moving\-Solid Interaction

**Authors:** Jongwon Ryu; Sunjae Yoon; Junyeong Kim

**ID:** 155706 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Xq2VKLpwE>) | [PDF](<https://openreview.net/pdf?id=3Xq2VKLpwE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155706>)

We propose the task of Interactive 4D Volumetric Liquid Forecasting: predicting the spatiotemporal evolution of a future dense 3D liquid velocity field conditioned on how a solid object moves through it\. This task provides an upstream physical forecasting primitive for systems that need to reason about motion\-conditioned liquid response, including robotic liquid manipulation, digital twins, and rigid\-fluid video generation\. Existing works have made efforts in predicting flow around static or prescribed solid geometries and synthesizing visually plausible fluid motion\. Yet these approaches provide limited coverage for interactive liquid dynamics, as they are not capable of forecasting how a moving solid induces a future full\-domain liquid response\. In this forecasting scenario, the hydrodynamic effect is condensed near an evolving liquid\-solid interface, but the prediction target is a global spatiotemporal rollout\. To address this challenge, we propose a two\-level recurrent forecasting framework, TIDE/TIDES: TIDE isolates localized interface\-driven forecasting, while TIDES adds transport\-aware coupling and explicit stabilization to reduce accumulated rollout error\. Across adapted neighboring baselines, controlled component ablations, motion/size OOD tests, and long\-horizon evaluation, TIDES achieves the best forecasting performance and the ablations identify localized interaction, transport coupling, and stabilization as the key contributors\. Together, our task formulation, benchmark, and TIDE/TIDES study establish a controlled foundation for moving\-solid\-conditioned dense liquid forecasting\.  Code and benchmark will be made publicly available\.

## DC\-Ocean: Deep Latent Compression for Global High\-Resolution Ocean Forecasting

**Authors:** Yuxiang Li; Qiusheng Huang; Hao Li

**ID:** 152997 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ok9b0N26E1>) | [PDF](<https://openreview.net/pdf?id=Ok9b0N26E1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152997>)

High\-resolution global ocean states expose a bottleneck in data\-driven forecasting: effective long\-horizon rollouts require a compact, decodable latent state that reduces I/O and stabilizes error growth\. While learned compression has matured for natural RGB images, its assumptions do not transfer to ocean modeling: ocean states are multi\-variable and multi\-depth, their grids are orders of magnitude larger, and fixed land\-\-sea boundaries create sharp discontinuities that make aggressive downsampling error\-prone\. We present DC\-Ocean, the first deep latent compression architecture for multi\-variable, multi\-depth global $1/12^\\circ$ ocean states, built on an autoencoder that couples convolutional feature extraction with transformer\-based global context modeling to retain both coastal sharpness and basin\-scale structure\. To explicitly address coastline\-induced artifacts, DC\-Ocean integrates boundary\-aware gated convolutions together with a spherical geodesic front propagation interpolation scheme for stable behavior near land masks\. Across key ocean variables, DC\-Ocean achieves higher reconstruction fidelity than strong autoencoder baselines adapted from the natural\-image domain at matched downsampling factors\. Beyond reconstruction, we perform autoregressive forecasting directly in latent space and decode predictions back to the physical domain\. DC\-Ocean matches short\-term accuracy of full\-resolution forecasting while achieving lower RMSE and slower error growth at medium and long lead times\. Together, these results demonstrate that DC\-Ocean provides a practical framework for stable and extended high\-resolution sub\-daily ocean forecasting\.

## Probabilistic Circuits for Irregular Multivariate Time Series Forecasting

**Authors:** Christian Klötergens; Lars Schmidt\-Thieme; Vijaya Krishna Yalavarthi

**ID:** 152394 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TQ8ll4XKOY>) | [PDF](<https://openreview.net/pdf?id=TQ8ll4XKOY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152394>)

Joint probabilistic modeling is essential for forecasting irregular multivariate time series \(IMTS\) to accurately quantify uncertainty\. Existing approaches often struggle to balance model expressivity with consistent marginalization, frequently leading to unreliable or contradictory forecasts\.  To address this, we propose CircuITS, a novel architecture for probabilistic IMTS forecasting based on probabilistic circuits\. Our model is flexible in capturing intricate dependencies between time series channels while structurally guaranteeing valid joint distributions\. Experiments on four real\-world datasets demonstrate that CircuITS achieves superior joint and marginal density estimation compared to state\-of\-the\-art baselines\.

## Filtered Conformal Ellipsoids for Graph\-Native Time Series

**Authors:** Yannick Limmer

**ID:** 155800 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2mdgP5ws1o>) | [PDF](<https://openreview.net/pdf?id=2mdgP5ws1o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155800>)

Joint prediction sets for multivariate time series should control a single event while adapting to cross\-coordinate dependence\. We study filtered conformal ellipsoids: a frozen state\-space filter emits a one\-step predictive mean and covariance, and split\-conformal calibration is applied to the resulting Mahalanobis scores\. The filter is used to choose the ellipsoid shape; conformal calibration chooses the scalar radius, so the construction benefits from a learned predictive covariance without relying on Gaussian tail probabilities for coverage\. The main difficulty is that filtered scores are dependent and learned recurrent filters need not contract in their raw hidden state; we therefore analyse contraction in an observable predictive\-law quotient that identifies hidden states producing the same future sequence of emitted Gaussian laws\. Under a stable Bayes Gaussian\-projection filter, covariance bounds, and a finite\-horizon observability/Fisher condition, small excess Gaussian negative log\-likelihood implies contraction of the learned emitted laws\. Combined with a threshold\-autocovariance envelope this yields a Chebyshev\-type approximate coverage bound for filtered split\-conformal prediction under dependence; a sharper Bernstein\-type bound requires an additional geometric\-mixing concentration assumption\. Under Gaussian oracle realisability we also obtain a near\-oracle log\-volume comparison within the class of conditionally valid Gaussian ellipsoid rules\. We instantiate the framework with a GCN\-GRU filter with diagonal\-plus\-low\-rank covariance\. On moderate\-size graph\-native traffic benchmarks \(METR\-LA\-20 and PEMS\-BAY\-50\), the learned filter gives sharper at\-target ellipsoids than static\-covariance and non\-filter baselines; at full\-graph scale and on non\-graph\-native datasets, factor and copula baselines can be stronger\.

## Forecasting Microbial Dynamics: Evaluation Protocol and Prior\-Spectrum Benchmark

**Authors:** Fedor Sergeev; Anna Győrffy\-Kerekes; Tristan Gollmart; Vincent Fortuin; Andre Kahles; Gunnar Rätsch

**ID:** 139668 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BxpHKQSVDH>) | [PDF](<https://openreview.net/pdf?id=BxpHKQSVDH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139668>)

Modern forecasting methods are often designed and evaluated on datasets that do not reflect the realities of real\-world clinical time\-series: inter\-patient variability, feature constraints, irregularity, and sparse sampling\. Microbiome dynamics modeling represents these challenges, has seen little attention from the machine learning community, and has practical significance in medicine\. Moreover, it offers both deep domain knowledge and sufficient data to train deep models, making it a strong testbed for a wide variety of forecasting methods\. We propose a unified evaluation protocol for forecasting microbial dynamics and conduct \*MicroCastBench\*: a benchmark for models covering a wide range of priors \(from mechanistic to foundation models\) and assumptions \(from per\-patient to meta\-learning models\)\. We find that meta\-learning models lead across most scaling regimes and at longer horizons, with mechanistic priors winning at small cohort sizes, short trajectories, and high feature counts\. These results suggest that when the target data is far from pretraining distributions, domain\-informed and meta\-learning approaches can outperform generalist foundation models, highlighting the value of evaluating on under\-represented domains\.

## Filter Banks: from Low\-Rank Representations to Deep Models for Efficient Time Series Forecasting

**Authors:** Ashutosh Vaishnav; Mohsen Amidzadeh; Teemu Kämäräinen; Matti Siekkinen; Mario Di Francesco

**ID:** 152048 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VuOChaTi6n>) | [PDF](<https://openreview.net/pdf?id=VuOChaTi6n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152048>)

Time series forecasting is an actively researched problem with diverse applications\. Recent work has shown that simple linear models can compete with complex deep learning architectures in terms of forecasting accuracy\. This has led to the design of several small models, yet the reasons behind their effectiveness remain insufficiently understood\.  We address this gap through a theoretical framework grounded in reduced\-rank regression and kernel analysis\. We show both analytically and empirically that the intrinsic complexity of many TSF tasks is lower than commonly assumed and that the performance of linear models is linked to their alignment with low\-rank data structures\.  Building on these insights, we propose a new design for low\-rank neural networks that incur lower computational cost than linear models\. Specifically, we introduce a simple filter bank architecture that provides a principled way to control model complexity through tunable and interpretable hyperparameters that directly correspond to the rank of the forecasting model\.  The proposed architecture also serves as a versatile building block for constructing deeper networks\.  Our  evaluation shows that filter bank architectures achieve state\-of\-the\-art results on most long\-term TSF benchmarks, with lower computational cost than recently proposed solutions\.

## Koopman Generative Operators for Efficient Probabilistic Time\-Series Forecasting

**Authors:** Raz Marshanski; Liran Nochumsohn; Mayank Jauhari Iitr; Boris Oreshkin; Omri Azencot

**ID:** 153665 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JfDahUWjah>) | [PDF](<https://openreview.net/pdf?id=JfDahUWjah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153665>)

Probabilistic time\-series forecasting requires models that simultaneously capture structured temporal dynamics, expressive uncertainty, and efficient inference, yet existing approaches fall short of this goal: latent dynamical models impose structure but rely on restrictive generation mechanisms, while modern generative methods such as diffusion and flow matching achieve flexibility at the cost of iterative and computationally expensive sampling\. We introduce the Koopman Generative Operator \(KGO\), a probabilistic forecasting method that conceptualizes prediction as the evolution of structured uncertainty\. KGO integrates three core components: \(1\) Koopman Patch Embedding \(KoPE\) for temporally consistent latent trajectory extrapolation; \(2\) Koopman Flow Matching \(KoFM\), which enables fast, single\-step generation through a closed\-form matrix exponential in a Koopman latent space, bypassing iterative sampling; and \(3\) an Adaptive Uncertainty Gate \(AUG\), which provides calibrated predictions by adapting uncertainty per\-variable and per\-horizon, corresponding to a learned decomposition of aleatoric uncertainty without manual tuning\. By unifying these components, KGO achieves state\-of\-the\-art accuracy across the majority of ProbTS datasets, outperforming existing methods on 12/17 benchmarks in CRPS and 11/17 in NMAE\. Further, by eliminating iterative sampling, KGO delivers at least a 25$\\times$ reduction in inference time compared to iterative generative models\. These results establish KGO as a practical, principled, and highly scalable framework for next\-generation probabilistic forecasting\.

## Bridging Diffusion and Autoregression for Flexible Time Series Synthesis

**Authors:** Xin Wang; Xuan Zhang; Haipeng Zhang; Chunyu Wei; Yueguo Chen

**ID:** 155931 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1jBDu9GqnS>) | [PDF](<https://openreview.net/pdf?id=1jBDu9GqnS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155931>)

Synthetic time series generation is critical for data augmentation, privacy\-preserving sharing, and simulation\. Autoregressive models extend to arbitrary horizons but suffer compounding errors, while diffusion models achieve high fidelity through bidirectional refinement only at fixed lengths\. We propose \*\*Horizon Diffusion\*\*, a unified framework that resolves this tension by decomposing generation into variable\-length \*horizon blocks\* produced autoregressively across blocks yet jointly denoised within each block\. Two innovations make this hybrid practical: \*Horizon\-Causal Attention\*, a structured mask that simultaneously preserves cross\-block causality and within\-block bidirectional refinement, and the \*Block Size Curriculum\*, a deterministic Warmup\-\-Stable\-\-Decay schedule that fluidly transitions training from full\-sequence diffusion to block\-wise autoregressive generation\. Our method consistently outperforms strong baselines on fidelity, diversity, and downstream utility, and remains stable when sequence length scales by $4\\times$ beyond training from a single trained model\. Code is available at Supplementary Material\.

## Detect, Explain, Interpret: An End\-to\-End Benchmark for Time Series Anomaly Detection, Explainability and Interpretability\.

**Authors:** Roberto Stanzione; Jules Barbe; Magali Parrino; Jérémie Fourmann; Paul Boniol

**ID:** 139119 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jxfd3833me>) | [PDF](<https://openreview.net/pdf?id=jxfd3833me>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139119>)

Time Series Anomaly Detection \(TSAD\) has received increasing attention, driven by the growing availability of complex time series data\. This surge has led to the development of numerous detection methods, as well as a variety of benchmarks aimed at thoroughly evaluating their performance\. However, most existing detectors remain largely agnostic to domain context, overlooking explainability and interpretability\. One of the main reasons for this gap is that current benchmarks primarily focus on detection accuracy, and only few of them evaluate spatial explainability\. Moreover, no benchmark currently provides sufficiently rich semantic annotations to support the generation of human\-understandable interpretations of anomalies\. To address these limitations, we introduce SHAD \(Scality High\-dimensional Anomaly Detection benchmark\), a fully annotated benchmark composed of 144 multivariate, high\-dimensional time series collected from real\-world distributed cloud storage systems operated by Scality\. The proposed dataset includes rich contextual information, covering three families of anomalies with varying degrees of severity\. As further contribution, we provide an end\-to\-end benchmark that covers all stages of a TSAD pipeline\.  For Detection, we benchmark a wide range of existing anomaly detectors, testing their effectiveness on the proposed real\-world dataset\. Then, we evaluate explainability by measuring the contribution of each dimension in the generated anomaly score\. Finally, for interpretability, we investigate the effectiveness of frozen LLM baselines in localizing and interpreting anomalies, paving the way for future research towards interpretable and explainable TSAD\.

## Robust Residual Correction via Selective Deployment for Time Series Forecasting

**Authors:** Jianxiang Xie; YUNCHENG HUA; Mingyue Cheng; Flora Salim; Hao Xue

**ID:** 154644 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5U25I5APG>) | [PDF](<https://openreview.net/pdf?id=C5U25I5APG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154644>)

Post\-hoc residual correction can reduce forecasting error, but always\-on updates often fail to generalize: when residual signals are weak or noisy, expressive correctors can overfit and even increase the overall forecasting errors\. We introduce CRC, a robust residual correction framework that couples a hybrid corrector with a validation\-calibrated selective deployment rule\. CRC proposes corrections via a conservative ridge "floor" plus conditional nonlinear refinement, but deploys them only when held\-out evidence indicates net error reduction over a frozen baseline forecaster\. This reframes correction as a decision problem: when to revise a forecast, not only how to fit residuals\. Across standard long\-sequence benchmarks and multiple backbones, CRC improves horizon\-averaged MSE and MAE in most dataset\-backbone pairs, with particularly large gains on complex datasets \(e\.g\., over 20% relative MSE reduction on Traffic\)\. We additionally report the non\-degradation rate \(NDR\) as a stability diagnostic of harmful updates and ablate the validation\-calibrated "firewall" that stabilizes MSE gains\. Formal analysis motivating the design appears in Appendix A under idealized assumptions\.

## STEP: Learning STructured Embeddings for Progressive Time Series

**Authors:** Lucas Thil; Jesse Read; Rim Kaddah; Guillaume Doquet

**ID:** 155052 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8oUdUwcYqg>) | [PDF](<https://openreview.net/pdf?id=8oUdUwcYqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155052>)

We present a novel method for learning interpretable representations of progressive time series, that is, data capturing irreversible state transitions such as degradation or task completion\. Our approach uses a self\-supervised contrastive objective to learn a low\-dimensional latent space where progression manifests along manifolds anchored by fixed prototype vectors\. This structure yields latent\-space indicators that quantify progression in a human\-meaningful way without proxy labels\. We evaluate the approach against the state of the art on diverse domains, including industrial degradation, robotic tasks, and neural activity, validating three key capabilities: \(1\) end\-state prediction, \(2\) multi\-step forecasting, and \(3\) interpretable phase separation\. Our method matches or improves over black\-box counterparts on all of these while providing transparency about the underlying mechanisms\. A simple linear regressor on top of the learned indicators is competitive with deep architectures, providing direct quantitative evidence that the underlying state is encoded in a geometrically accessible form\. Code is available at https://anonymous\.4open\.science/r/LRPTS\-9300/README\.md\.

## Tikhonov\-Stabilized Bezier Representation Forecasting for Training\-free Diffusion Acceleration

**Authors:** Lei Zhu; Mujie Lin; Ruochong Zheng; Guangyi Wang; Li Hao; Peng Jin; Chang Liu; Jie Chen

**ID:** 155298 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cYL3DrquA>) | [PDF](<https://openreview.net/pdf?id=6cYL3DrquA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155298>)

Diffusion models, particularly Diffusion Transformers, achieve strong image and video generation quality but remain expensive at inference time due to repeated denoiser evaluations\. Feature caching offers a deployment\-friendly acceleration strategy by reusing or predicting intermediate representations without retraining the generator or modifying the sampler\. However, existing cache\-then\-forecast methods often rely on Taylor\-style finite\-difference extrapolation, which can become unstable over longer cache intervals, and typically predict local module outputs whose errors may accumulate through subsequent denoiser blocks\. We propose \\textbf\{BeziCast\}, a training\-free diffusion acceleration framework that forecasts output\-proximal denoising representations using low\-order B\\'ezier trajectories\. BeziCast estimates B\\'ezier control points via Tikhonov\-stabilized fitting, providing a smooth, capacity\-controlled temporal parameterization that avoids explicit high\-order derivative estimation and decouples trajectory capacity from cache\-query density\. To moderate aggressive extrapolation, we further derive equivalent forecasting weights and introduce a convex\-hull\-inspired guardrail that detects high\-risk predictions and softly pulls them toward a conservative simplex\-projected estimate\. Extensive evaluations across advanced image and video diffusion models demonstrate the effectiveness of BeziCast\. In particular, BeziCast accelerates FLUX\.1 by up to \(4\.79\\times\) and HunyuanVideo by up to \(4\.11\\times\), while preserving substantially better generation quality than competing acceleration baselines\.

## SDHilb: Schrödinger Dynamics\-Guided Neural Network with Adaptive Multi\-Scale Hilbert Transform for Time Series Forecasting

**Authors:** Caihua He; Weiyang Ding

**ID:** 152741 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QhvWgfIvTX>) | [PDF](<https://openreview.net/pdf?id=QhvWgfIvTX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152741>)

Conventional real\-valued neural networks struggle to explicitly capture phase\-frequency coupling, while long\-horizon time series forecasting requires models to characterize non\-stationary amplitude variations, phase shifts, and frequency\-dependent temporal evolution\. This mismatch limits the stability and expressiveness of neural models on complex forecasting tasks\. To address this challenge, we propose SDHilb, a structure\-preserving forecasting framework that lifts real\-valued observations into an adaptive complex state space and models temporal evolution as a process jointly governed by amplitude and phase information\. Through the Hilbert transform, phase\-related structures are explicitly encoded, leading to a coupled evolution of real and quadrature components that motivates Schrödinger\-Hamiltonian structured dynamics in the lifted complex space\. Based on this formulation, SDHilb integrates Schrödinger\-guided linear dynamics with an adaptive multi\-scale Hilbert transform and introduces three key components: \(1\) a structure\-preserving linear dynamic module with symplectic discretization, \(2\) an adaptive multi\-scale Hilbert module for constructing data\-dependent quadrature components and refined time\-frequency decomposition, and \(3\) a theoretically grounded parameter reuse mechanism derived from the closed\-form recurrence structure\. Extensive experiments demonstrate that SDHilb achieves competitive or superior performance on both short\- and long\-term forecasting tasks while reducing horizon\-specific parameterization through recurrence\-guided parameter reuse\.

## MMTA: Benchmarking Multimodal Temporal Analysis with Time Series, Text, and Vision

**Authors:** Ziyang Zhang; Shenyi Li; Yilin wang; Ziyun Cui; Bowen Zhou; Wen Wu; Chao Zhang

**ID:** 139823 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2dYNGCZQj9>) | [PDF](<https://openreview.net/pdf?id=2dYNGCZQj9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139823>)

Time\-series analysis is increasingly studied in multimodal settings, yet most benchmarks pair temporal signals with text or with visualizations derived from the same signal\. This leaves open whether multimodal large language models \(MLLMs\) can integrate time series with real\-world visual evidence\. We introduce \*\*MMTA\*\* \(\*\*m\*\*ulti\*\*m\*\*odal \*\*t\*\*emporal \*\*a\*\*nalysis\), a benchmark of tri\-modal tasks with diverse cross\-modal complementarity patterns among time series, text, and vision\. MMTA spans nine domains — robotics, autonomous driving, human action, manufacturing, AR assistance, healthcare, recommendation, finance, and climate — under \*video\+TS\* and \*image\+TS\* layouts, with a 3,524\-sample test split covering classification and forecasting\. The benchmark standardizes heterogeneous real\-world sources into a shared schema with domain\-specific prompts, provenance documentation, and success\-weighted metrics that penalize both wrong answers and failed generations\. Evaluating eight open\-source and proprietary MLLMs reveals a shared bottleneck: representing time series as text creates very long token sequences and weakens fine\-grained alignment with visual evidence, especially in long\-video settings\. We then introduce \*\*TimeOmni\-v\*\*, a multimodal LLM extension with a dedicated time\-series encoder, temporal positional alignment, modality\-aware token layout, and a forecasting head\. TimeOmni\-v improves long\-video classification and time\-series inference efficiency, showing that MMTA not only exposes representation and grounding failures but also motivates targeted model design\.

## Rubato: Signature Attention for Irregular Multivariate Time Series Forecasting

**Authors:** Jintao Yang; Meng Wang; Chenjuan Guo; Bin Yang

**ID:** 153092 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O1QyK9MzL5>) | [PDF](<https://openreview.net/pdf?id=O1QyK9MzL5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153092>)

Irregular multivariate time series \(IMTS\) are sampled at non\-uniform timestamps and asynchronous across channels, their dependencies are shaped by time gaps, local ordering, and channel\-specific sampling patterns\. Building a faithful attention mechanism for IMTS exposes two limitations of existing work\. First, current irregular\-time attention methods typically regularize raw inputs into interpolated, aligned, or continuous\-time\-embedded forms before applying attention, which blurs exactly these irregular cues that determine how two observations relate\. Second, beyond representation, standard dot\-product attention scores pairs through learned token projections with no intrinsic tie to the shape of the underlying series, and an attention that does reflect this shape becomes costly to compute in high\-channel IMTS\. We propose Rubato, which reads two views directly from the raw irregular input: per\-channel local dynamics, and a path signature that summarizes the joint multi\-channel series\. Attention in Rubato then scores pairs by a signature\-kernel measure of series similarity rather than by a generic dot product, and a structured random projection \(SORF\) keeps this comparison affordable when the channel count is large\. We prove that the structured projection introduces only a controlled bias that vanishes as the number of channels grows, and experiments on multiple IMTS benchmarks show that Rubato consistently outperforms strong baselines\.

## Evaluating Uncertainty Calibration in Probabilistic Time Series Foundation Models

**Authors:** Thomas Decker; Volker Tresp

**ID:** 138974 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3VdYykgSV>) | [PDF](<https://openreview.net/pdf?id=t3VdYykgSV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138974>)

Time series foundation models \(TSFMs\) are increasingly used for probabilistic forecasting across diverse domains, yet the reliability of their uncertainty estimates remains poorly understood\. In this work, we study uncertainty calibration in probabilistic TSFMs from a broader methodological and empirical perspective\. We introduce a taxonomy of how TSFMs represent predictive uncertainty and develop a fine\-grained evaluation framework for calibration in multi\-horizon forecasting that distinguishes pooled, horizon\-wise, and stronger conditional notions of calibration\. Using this framework, we conduct a comprehensive empirical evaluation of popular TSFMs across diverse datasets and show that current models exhibit distinct and systematic patterns of miscalibration that standard metrics often obscure\. We further analyze common post\-hoc recalibration methods and characterize which forms of calibration they can improve and which tend to persist\. Our results provide practical guidance for evaluating and improving uncertainty calibration in TSFMs and highlight important limitations of current practice\.

## Stable Resolution\-Invariant Emulation in Entropically Controlled Kinetic Methods

**Authors:** Kareem Hegazy; Jose Antonio Lara Benitez; Anastasis Kratsios; Ivan Dokmanić; Maarten V\. de Hoop; Michael Mahoney

**ID:** 152770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QVYzAlckz5>) | [PDF](<https://openreview.net/pdf?id=QVYzAlckz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152770>)

Resolution invariance is a critical capability for scientific machine learning methods \(SciML\), however, the ability to sample at any resolution does not guarantee stable emulation at all resolutions\. This important distinction underpins one of scientific machine learning's greatest potential: the ability to efficiently emulate complicated and computationally expensive systems on inexpensive coarse grids\. Stable numerical solvers are computationally expensive as they attempt to resolve small scales that receive and dissipate spectral energy\. Learned coarse\-grid forecasters remove the dissipative channel, allowing unresolved frequencies to re\-emerge as grid\-scale noise \(aliasing\)\. We explore stable resolution invariant emulation through physically principled control over entropy dynamics to reinforce the dissipative mechanism within the Neural Discrete Equilibrium \(NeurDE\) method\. Entropically\-stabilized NeurDE produces stable long\-time rollouts for thousands of forecasting steps on large Reynolds number turbulent flows \(Re=50,000\) with very coarse grids \($\\mathbb\{R\}^\{16\\times16\}$\)\. Entropically\-stabilized NeurDE demonstrates extreme stability at coarse resolutions, outperforming the data\-generating stabilized numerical method: a much more challenging baseline than SciML surrogates\.

## HARMONY: Hierarchical Anchor Retrieval on Manifold for Oblivious\-source Acoustic Anomaly Detection

**Authors:** Yuhang Zhang; Yang Li; Mingyuan Li; Qiang Wu

**ID:** 155727 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3OMsg8le1w>) | [PDF](<https://openreview.net/pdf?id=3OMsg8le1w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155727>)

In standard acoustic anomaly detection \(ASD\), models are usually trained separately for each machine or domain using explicit metadata\. However, in realistic deployments, machine identifiers are incomplete, unreliable, or simply unavailable\. Thus, metadata\-free universal ASD asks a single model to monitor mixed machine populations without machine IDs\. In this paper, we argue that the main failure mode is not a weak detector family, but representation entanglement\. The heterogeneous normal modes overlap in frozen pre\-trained feature spaces, making anomaly scoring and approximate retrieval unreliable\. We study this problem directly and propose HARMONY \(Hierarchical Anchor Retrieval on Manifold for Oblivious\-source acoustic aNomaly detection\), an anchor\-guided geometric repartitioning framework that reorganizes mixed\-source features into compact Voronoi regions and reuses this structure for hierarchical retrieval\. On dataset DCASE 2020 and MIMII, HARMONY improves mean AUC from 75\.40% to 90\.00% \(\+14\.60% absolute improvement\) over the strongest unified baseline and from 83\.90% to 90\.00% over a strong foundation\-feature baseline\. On a single CPU, its hierarchical retrieval achieves a 7\.8× speedup over exhaustive search with only a 0\.20% AUC drop\. These results suggest that incorporating explicit geometric partitioning can improve both detection accuracy and retrieval efficiency for ASD\. Code and data are available at the anonymous URL: https://anonymous\.4open\.science/r/HARMONY\-26CC\.

## WILD: Widely Linear Conditioning for Time Series Forecasting

**Authors:** Binli Luo; Wanrong Ma; Ning Gui; Xianhan Tan

**ID:** 148890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uQqn3Dq2Xm>) | [PDF](<https://openreview.net/pdf?id=uQqn3Dq2Xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148890>)

Transformer\-based time series forecasting models often suffer from block\-wise attention collapse, where temporal smoothness and cross\-variable correlations concentrate attention locally and restrict global modeling capacity\. We argue that this collapse is partly a pre\-attention representation\-conditioning problem: attention logits inherit the spectral concentration and low effective rank of the input representation\. We propose Widely Linear Frequency\-Domain \(WILD\) conditioning, a lightweight, model\-agnostic module inserted before self\-attention\. WILD maps inputs to the frequency domain, applies data\-dependent spectral preconditioning to redistribute over\-dominant frequency energy, and then uses asymmetric real/imaginary projections to realize a widely linear transform beyond fixed time\-domain channel mixing\. The preconditioning step is essential: it constructs the usable normalized frequency basis on which the widely linear branch can operate\. Thus, WILD uses frequency\-domain modeling to condition an existing attention layer, not to replace it with a new forecasting architecture\. Extensive experiments on eight benchmark datasets show positive gains on 105 of 112 model\-dataset\-metric configurations across seven backbones\. Attention diagnostics show that WILD substantially increases effective rank over the baseline, and a W\_r=W\_i ablation identifies spectral preconditioning as the primary mechanism, with widely linear mixing providing a secondary, dataset\-dependent gain\.

## Efficient, Accurate and Stable Gradients for Neural ODEs

**Authors:** Sam McCallum; James Foster

**ID:** 155995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1IMnLHfJyl>) | [PDF](<https://openreview.net/pdf?id=1IMnLHfJyl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155995>)

Training Neural ODEs requires backpropagating through an ODE solve\. The state\-of\-the\-art backpropagation method is recursive checkpointing that balances recomputation with memory cost\. Here, we introduce a class of algebraically reversible ODE solvers that significantly improve upon both the time and memory cost of recursive checkpointing\. The reversible solvers presented calculate exact gradients, are high\-order and numerically stable \-\- strictly improving on previous reversible architectures\. On scientific modeling and time series classification experiments, reversible solvers reduce the training time by more than $2\\times$ while using at least $10\\times$ less memory on average than recursive checkpointing\.

## CausalCompass: Evaluating the Robustness of Time\-Series Causal Discovery in Misspecified Scenarios

**Authors:** Huiyang Yi; Xiaojian Shen; Yonggang Wu; Duxin Chen; He Wang; Wenwu Yu

**ID:** 139526 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KYrd3OXJlO>) | [PDF](<https://openreview.net/pdf?id=KYrd3OXJlO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139526>)

Causal discovery from time series is a fundamental task in machine learning\. However, its widespread adoption is hindered by a reliance on untestable causal assumptions and by the lack of robustness\-oriented evaluation in existing benchmarks\. To address these challenges, we propose CausalCompass, a flexible and extensible benchmark framework designed to assess the robustness of time\-series causal discovery \(TSCD\) methods under violations of modeling assumptions\. To demonstrate the practical utility of CausalCompass, we conduct extensive benchmarking of representative TSCD algorithms across eight assumption\-violation scenarios\. Our experimental results indicate that no single method consistently attains optimal performance across all settings\. Nevertheless, the methods exhibiting superior overall performance across diverse scenarios are almost invariably deep learning\-based approaches\. We further provide hyperparameter sensitivity analyses to deepen the understanding of these findings\. We additionally conduct ablation experiments to explain the strong performance of deep learning\-based methods under assumption violations\. We also find, somewhat surprisingly, that NTS\-NOTEARS relies heavily on standardized preprocessing in practice, performing poorly in the vanilla setting but exhibiting strong performance after standardization\. Finally, our work aims to provide a comprehensive and systematic evaluation of TSCD methods under assumption violations, thereby facilitating their broader adoption in real\-world applications\. The user\-friendly implementation, documentation and datasets are available at https://anonymous\.4open\.science/r/CausalCompass\-anonymous\-5B4F/\.

## Learning Continuously Evolving Spatio\-Temporal Explanations for Traffic Flow Forecasting

**Authors:** Cuiying Huo; Baoxu Wang; Lin Wu; Yu Mei; Dongxiao He; Yawen Li; Di Jin

**ID:** 154199 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FTEcriFiDS>) | [PDF](<https://openreview.net/pdf?id=FTEcriFiDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154199>)

Traffic flow forecasting plays a pivotal role in intelligent transportation systems\. However, most existing methods adopt a black\-box learning paradigm, resulting in a lack of interpretability in their decision\-making processes\. Existing explainable methods mostly follow the feature attribution paradigm, leaving explanations at the level of static or discrete feature evidence and making it difficult to reveal the continuous evolution mechanism of spatio\-temporal dependencies during dynamic traffic propagation\. Meanwhile, prior methods often decouple spatial and temporal explanations, treating spatial structures and temporal dynamics independently and thus failing to capture the intrinsic coupling between spatial dependencies and temporal contexts in model decision\-making\. To this end, we propose STGIB, a new spatio\-temporal graph information bottleneck theory for characterizing continuously evolving explanations in traffic forecasting\. STGIB redefines traffic explanation as a time\-indexed spatio\-temporal explanation trajectory, and jointly learns dynamic key structures and their temporal representations under predictive sufficiency and information compression constraints\. Furthermore, we derive tractable recursive variational bounds to make the theoretical objective optimizable, and instantiate a new explainable traffic flow forecasting model via spatio\-temporal explanation trajectory generation\. Experiments on real\-world traffic datasets demonstrate that STGIB maintains competitive predictive performance while generating more faithful and spatio\-temporally consistent explanations\.

## FracTS: Hierarchical and Autoregressive Time Series Generation

**Authors:** Jiayu Li; Umair Afzal; Zilong Zhao; Milad Abdollahzadeh; Uzair Javaid; Biplab Sikdar

**ID:** 149467 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ptzy0mmiMh>) | [PDF](<https://openreview.net/pdf?id=ptzy0mmiMh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149467>)

Time series are ubiquitous across different domains, and the growing use of synthetic data for privacy\-preserving sharing, data augmentation, and stress testing makes time series generation increasingly important\. Early generative approaches are predominantly autoregressive, which can suffer from low sample diversity, error accumulation, and difficulty modeling long\-range dependencies\. In this paper, we introduce FracTS, a hierarchical, coarse\-to\-fine autoregressive model for multi\-variate time series generation\. Inspired by fractal generative modeling developed for images, FracTS adapts the paradigm from 2D to 1D sequences by learning a multi\-scale representation that captures global trajectory structure at coarse scales and local dynamics at fine scales while following the autoregressive nature of time series\. In contrast to unstructured images, time series are structured, allowing easy automated or designated temporal feature processing optimized for the model, and global \(static\) features extraction describing the instances that generate the corresponding time series in the collection\. We incorporate them in the generation process to further improve the generation quality\. The design naturally handles multivariate dependencies and improves long\-horizon temporal coherence without requiring fixed\-length inputs\. Experiments on five datasets \(two conditional, three unconditional\) conducted against seven baselines show that FracTS consistently outperforms baselines across marginal distribution, correlation preservation, and ML utility\. In particular, the ML utility is improved up to 98\.1% comparing to the second\-best baseline\. Code is available at: https://anonymous\.4open\.science/r/fracts\-91D621

## TSB\-SEG: A Systematic Time\-Series Segmentation Benchmark

**Authors:** Félix Chavelli; Arik Ermshaus; Patrick Schäfer; Fan Yang; John Paparrizos; Paul Boniol

**ID:** 139716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8o41Tc7xo4>) | [PDF](<https://openreview.net/pdf?id=8o41Tc7xo4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139716>)

Time\-series segmentation, studied as either \\emph\{Change Point Detection\} \(CPD\) or \\emph\{State Detection\} \(SD\), underpins a broad range of monitoring and diagnostic applications\. However, the field suffers from a persistent divide between the statistical community \(focusing on CPD\) and the machine learning and data mining communities \(focusing on SD\)\. Consequently, the literature remains fragmented: evaluations typically cover narrow methodological families, datasets are often small or homogeneous, and CPD and SD are rarely evaluated together\. We address these gaps with \\texttt\{TSB\-SEG\}, a unified benchmark comprising $592$ univariate and multivariate time series across $8$ heterogeneous domains and surveying $27$ algorithms spanning five decades of progress\. To ensure a fair comparison, we introduce a two\-pool design: a scalable \\emph\{main pool\} of sub\-quadratic detectors used for the aggregate ranking, and an \\emph\{extended\-scope pool\} for computationally intensive specialized methods\. All methods are unified under tsseg, an open\-source library to ensure full reproducibility\. Our systematic evaluation yields three insights: \(a\) no single detector dominates across domains, and per\-dataset hyperparameter tuning remains decisive for performance, \(b\) CPD accuracy is a strong proxy for SD accuracy, and \(c\) data characteristics should guide method selection\. We provide actionable guidance based on data properties, error tolerances, and tuning budgets, identify impactful hyperparameters, and characterize algorithm robustness to these choices\.

## DSSNet: Deep Spectral Structure Profiling Network for Traffic Flow Prediction

**Authors:** Tao Wang; Zhenye Yang; Hua Lu; Huan Li; Senzhang Wang; Jinpeng Chen

**ID:** 154082 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLEaq95PAw>) | [PDF](<https://openreview.net/pdf?id=GLEaq95PAw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154082>)

Traffic flow prediction is a fundamental task in intelligent transportation systems\.  Existing methods primarily rely on temporal dependency modeling and thus face two critical limitations: struggling to effectively capture diverse periodicity; overlooking the relationship between spectral structures in the traffic flow and spatiotemporal traffic behaviors\. To address these limitations, we propose DSSNet \(Deep Spectral Structure Profiling Network\), an adaptive spectral profiling framework\.  DSSNet follows the paradigm of "spectral structure profiling" and then "dual\-domain modeling"\. Initially, a Spectral Structure Learning module captures the dominant frequency bands of the spectrum to enhance regional representations while simultaneously serving as discriminative spatiotemporal identity between regions\. Based on these identities, we construct a global Resonance Graph to uncover cross\-region dependencies and introduce a Dual\-Domain Knowledge Integration module to aggregate structural knowledge across both time and frequency domains\.  Extensive experiments on multiple benchmark datasets demonstrate that DSSNet achieves state\-of\-the\-art performance, while highlighting the potential of frequency domain modeling for understanding spatiotemporal traffic behaviors\.

## Traffic STGNNs across Sensor, City, and Time Shifts: Routing Concentration Tracks Sensitivity to Sensor Dropout

**Authors:** Xile Wang; Mingqi Yang

**ID:** 139842 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1DWmoUiM00>) | [PDF](<https://openreview.net/pdf?id=1DWmoUiM00>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139842>)

Traffic forecasting benchmarks measure accuracy within a single city and test distribution, leaving open how architectures behave when sensors fail, when a model is transferred to another city, or when weekday and weekend traffic differ\. We evaluate eight STGNN architectures under these three shifts using frozen checkpoints; for transfer across cities, target graph information is withheld so that fixed and adaptive graph models have the same structural access\. We find that fragility under sensor dropout follows routing concentration rather than the use of adaptive adjacency itself\. Across four adaptive backbones, mean row maximum routing mass correlates with dropout degradation at Pearson $\\rho=\+0\.979$, and the relationship replicates on a second source city\. Graph WaveNet lies at the concentrated end of this spectrum, while AGCRN and STAEformer stay close to DCRNN when sensors are zeroed\. The other shifts separate from this pattern: MegaCRN performs best when transferred to another city, yet MegaCRN and STAEformer show the largest weekday and weekend performance gaps\. In this backbone bank, strong performance under one shift does not imply robustness under another\. We release a registry of frozen checkpoints, evaluation code, and a decision table mapping each backbone to its main failure mode\.

## Understanding and Mitigating Structural Forgetting in Fine\-Tuned Time Series Foundation Models

**Authors:** ZEYU SHI; Yirong Xue; Xin Xue; Ziming Wang; Jintao Wu; Shiqi Gao; Haoyi Zhou

**ID:** 148494 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xOIgmApw6e>) | [PDF](<https://openreview.net/pdf?id=xOIgmApw6e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148494>)

While fine\-tuning is the standard recipe for adapting Time Series Foundation Models \(TSFMs\) to downstream tasks, we reveal that it triggers a critical yet overlooked problem: structural forgetting\. Distinct from widely studied point\-wise error degradation, structural forgetting represents a fundamentally more destructive phenomenon: the erasure of universal structural patterns acquired during pre\-training\. Unlike point\-wise errors, this structural collapse renders models incapable of supporting basic structure\-dependent decisions \(e\.g\., trend\-based trading\), a critical vulnerability that existing forgetting mitigation strategies fail to address\. To bridge this gap, we first introduce a diagnostic framework equipped with a novel Temporal\-Frequency Attribution analysis, mechanistically revealing that fine\-tuning unnecessarily overwrites a sparse set of pattern\-critical parameters\. We then propose NeST, a post\-hoc framework that precisely restores these components while compensating surrounding weights to preserve task adaptation\. Extensive experiments across 3 TSFMs and 9 datasets demonstrate that NeST recovers an average of 85\\% of structural awareness without sacrificing task performance, offering a new paradigm for structurally\-preserved TSFM adaptation\.

## When to Trust Memory: Retrieval\-Guided Probabilistic Spatiotemporal Forecasting under Distribution Shift

**Authors:** Haochen Lv; Jianhao Zhang; Zhichen Lei; Yang Jiang; Xiaowei Mao; Shengnan Guo; Youfang Lin; Huaiyu Wan

**ID:** 151106 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cw7vh4EHhq>) | [PDF](<https://openreview.net/pdf?id=cw7vh4EHhq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151106>)

Spatiotemporal forecasting plays an important role in real\-world applications, where probabilistic approaches provide uncertainty estimates for decision\-making\. Real\-world systems are inherently non\-stationary, leading to distribution shifts between training and test data\. However, existing probabilistic methods mainly focus on modeling data distributions under standard settings, while distribution shift methods often handle such shifts in a coarse manner, failing to characterize shift degree and adapt prediction strategy accordingly\. As a result, they often produce miscalibrated and unreliable forecasts\. To address this issue, we propose REMIND, a retrieval\-guided probabilistic framework for spatiotemporal forecasting under distribution shift\. REMIND leverages retrieval to estimate how well current observation are supported by historical patterns, enabling adaptive prediction under different shift regimes\. It employs spatiotemporal retrieval to construct a memory bank and introduces a dual branch architecture, combining a memory\-calibrated probabilistic branch for mild shifts with a deviation\-aware probabilistic branch for severe shifts\. A shift\-adaptive gate, guided by retrieval similarity and memory dispersion, balances the two branches according to shift degree\. We further design a hierarchical Gaussian mixture to capture heterogeneous uncertainty over the dual branch predictions, and introduce a memory perturbation training scheme to improve generalization\. Experiments on real\-world datasets with distribution shifts demonstrate that REMIND consistently outperforms state\-of\-the\-art methods in both forecasting accuracy and probabilistic prediction quality\. Code is available at https://anonymous\.4open\.science/r/REMIND\-A46E/\.

## AirMPA: A Meteorology\-to\-Pollution Adapter for Global Air Quality Forecasting

**Authors:** Yiheng Wang; kai zheng; Yuetan Lin; Fanglu Fan; Chenliang Tao; Guochao Chen; Hongliang Zhang; Hao Li

**ID:** 154614 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CHMrEIBEZR>) | [PDF](<https://openreview.net/pdf?id=CHMrEIBEZR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154614>)

Accurate real\-time forecasting of atmospheric pollutants is essential for reducing exposure risks and improving public health\. Traditional numerical forecasting systems suffer from incomplete parameterizations, uncertain inputs, and high computational cost\. Existing deep learning approaches improve efficiency, but often entangle meteorological and pollutant variables within unified forecasting frameworks, limiting flexibility and pollutant\-specific representation learning\. To address these challenges, we propose AirMPA, a decoupled autoregressive framework for meteorology\-to\-pollution forecasting\. AirMPA predicts 13 atmospheric pollutants at 0\.4$^\\circ$ spatial resolution and 12\-h temporal resolution using meteorological fields, emission priors, and historical pollutant concentrations\. The model is built on an improved Swin\-Transformer architecture with zonal release attention and dual\-branch fusion, enabling more effective modeling of global transport continuity and heterogeneous pollutant dynamics\. During training, AirMPA uses ERA5 reanalysis as meteorological forcing, while during inference it directly ingests forecast fields from external meteorological models, enabling stable autoregressive prediction up to 5 days ahead\. Experiments show that AirMPA consistently outperforms Aurora and surpasses CAMS in approximately 90\\% of pollutant\-\-lead\-time evaluation cases over the 5\-day forecast horizon, while outperforming CAMS on all variables beyond 48 h\. These results demonstrate the potential of decoupled meteorology\-to\-pollution forecasting for global air quality prediction\.

## Multivariate Time Series Forecasting needs Cross Variable Loss

**Authors:** Kuiye Ding; Yifan Hu; Hanchen Wang; Hao Xue

**ID:** 150730 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fqMFvZ68kr>) | [PDF](<https://openreview.net/pdf?id=fqMFvZ68kr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150730>)

Multivariate time series forecasting presents unique challenges because future variables often co\-evolve under shared system dynamics\. While existing studies mainly focus on cross\-variable dependencies in historical observations, dependencies among future values are much less explored\. Specifically, modern forecasting models largely follow the Direct Forecasting \(DF\) paradigm, generating multi\-step forecasts with point\-wise objectives that do not explicitly constrain cross\-variable structure\. In this work, we show that the DF objective is mismatched in the presence of cross\-variable and lagged dependencies, revealing an objective gap\. To address this issue, we propose \*\*C\*\*ross\-\*\*V\*\*ariable \*\*Loss\*\* \(CvLoss\), a plug\-in structural regularizer that constrains forecast residuals on a cross\-variable graph\. CvLoss penalizes inconsistent edge\-wise residual differences over forecast patches, encouraging consistency across both synchronous and asynchronous interactions\. Our experiments show that CvLoss consistently improves competitive forecasting models, outperforms representative learning objectives, and is compatible with a variety of forecasting backbones\. Code is available at: https://anonymous\.4open\.science/r/CvLoss\.

## Progressive Memory Transformer: Memory\-Aware Attention for Time\-Series

**Authors:** Tord Sture Stangeland; Andreas Köhler; Steffen Maeland; Adín Ramírez Rivera

**ID:** 150202 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jyIfuVt2UU>) | [PDF](<https://openreview.net/pdf?id=jyIfuVt2UU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150202>)

Time\-series carry structure simultaneously at multiple scales \(fine\-grained variation, mid\-range motifs, and global properties\) and downstream tasks operate at correspondingly different scales\. Most existing self\-supervised learning approaches supervise representations globally via instance\-level contrastive losses and limited temporal neighborhood supervision, but do not explicitly exploit the structural hierarchy\. We propose a learning framework that explicitly enforces a structural hierarchy across three scales independently: a local objective for token continuity, a mid\-range objective for window\-level motifs, and a global objective for sequence\-level agreement\. Realizing this framework requires the backbone to expose a representation at each scale; we introduce \\textbf\{Progressive Memory Transformer\} \(PMT\), which augments a transformer with writable, window\-aligned memory that exposes the mid\-range scale alongside the token and sequence\-level representations conventional transformers already provide\. Across seven UCR/UEA/UCI classification benchmarks, a cue\-retention probe, and two forecasting benchmarks, PMT learns representations that probe well at the global, mid\-range, and local scales\-\-\-strong low\-label classification \(1\-\-5\\% labels\), competitive forecasting performance across multiple horizons, and quantitative and qualitative evidence that memory states capture mid\-range motifs\.

## Universal Time Series Generation with Neural Controlled Differential Equations

**Authors:** Torben Berndt; Elyes Farjallah; Leif Seute; RAEID SAQUR; Benjamin Walker; Jan Stühmer

**ID:** 150341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iqICKB71X4>) | [PDF](<https://openreview.net/pdf?id=iqICKB71X4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150341>)

Recent work on the sequence universality of State Space Models \(SSMs\) has introduced efficient, maximally expressive continuous\-time approaches for time\-series modelling\. While these works focus on discriminative settings, we extend this perspective to generative time\-series modelling by proving    that maximally expressive Structured Linear Controlled Differential Equations \(SLiCEs\) are universal time\-series generators, in the sense that they can approximate the induced path laws of continuous causal pushforwards on compact latent sets in $W\_\\infty$\. Building on these theoretical results, we propose Generative SLiCEs \(G\-SLiCEs\), a maximally expressive continuous\-time model for flow matching on path\-space\. Empirically, we show that expressivity improves performance in probabilistic forecasting and downstream tasks, while retaining the advantages of continuous\-time models such as generalising to arbitrary observation grids\. This is particularly beneficial for irregular grids, where fixed\-grid models often struggle\.

## Spikes as Detectors: Phase\-Conditioned Spiking Dynamics for Time\-Series Anomaly Detection

**Authors:** Miao Wang; Gangyi Ding; Yunlin Lei; Yu Zhang; chenjingfeng; Xu Yang

**ID:** 152294 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U8hMwVUl0r>) | [PDF](<https://openreview.net/pdf?id=U8hMwVUl0r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152294>)

Most time\-series anomaly detectors ask whether an observation can be predicted or reconstructed\. We ask a different question: can a detector’s own spiking dynamics become anomaly evidence? We study this question for periodic and quasi\-periodic time series and propose SPIRE, a phase\-conditioned spiking anomaly detector\. SPIRE uses period\-aware current formation to expose phase\-aligned cross\-period residuals to leaky integrate\-and\-fire neurons\. We refer to this conversion as eventification: after residual injection, recurrence violations induce abnormal bursts, silences, or phase\-shifted spike trains\. SPIRE then constructs phase\-conditioned normal templates of spike states and scores deviations in residual energy, firing\-rate patterns, and burst/silence statistics, instead of relying solely on output\-space prediction or reconstruction errors\. This separates the operational protocol, including causal current\-step detection, one\-step prediction, and non\-causal reconstruction, from the source of anomaly evidence, namely output errors, spike dynamics, or both\. On TSB\-AD\-U and TSB\-AD\-M, SPIRE establishes new best VUS\-PR among neural time\-series anomaly detectors\. Spike\-native scores remain competitive without reconstruction error, hybrid scoring consistently improves error\-only scoring, and replacing LIF neurons with continuous activations in matched ANN counterparts reduces detection performance under the same period\-aware architecture\. Periodicity\-stratified analyses and spike\-state visualizations further show that the gains are strongest when phase recurrence is reliable, supporting the proposed spike\-as\-detector mechanism\. These results suggest that phase\-conditioned spiking dynamics can serve as a first\-class anomaly detection signal for periodic time series, rather than merely an efficient computational substrate\.

## Metropolis\-Scale Road Network Datasets for Fine\-Grained Urban Traffic Modeling

**Authors:** Fedor Velikonivtsev; Oleg Platonov; Ekaterina Alimaskina; Gleb Bazhenov; Liudmila Prokhorenkova

**ID:** 139581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H85G0Hev13>) | [PDF](<https://openreview.net/pdf?id=H85G0Hev13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139581>)

Modeling traffic dynamics is a critical challenge for urban computing, with applications from real\-time traffic management to infrastructure planning\. However, progress in this area is fundamentally constrained by a lack of large\-scale public datasets that capture the subtle properties of real city road networks\. Existing benchmarks are often limited by their small scale, reliance on sparse highway traffic sensors, absence of true road connectivity information, and lack of information about road properties\. To address this issue, we introduce datasets representing fine\-grained road networks of two major cities, which are unique in their scale \(up to 100,000 road segments\), use of real road connectivity, presence of time series measurements for both traffic speed and volume at a 5\-minute resolution, and inclusion of rich static road attributes\. These datasets enable in\-depth analysis of spatiotemporal traffic patterns and can serve as benchmarks for various ML applications\. As a practical demonstration of the utility of our datasets and the challenges they present, we use them for the task of traffic forecasting\. The size of the real\-world road networks in our datasets reveals significant scalability issues in current traffic forecasting models\. To address them, we propose a simple and efficient baseline that not only scales to large road graphs but also achieves forecasting performance competitive with other established spatiotemporal models\. We hope that the proposed datasets will serve as a foundational resource for a broad range of research in traffic modeling, urban computing, and smart city development\.

## Raw\-Routed Mixture of Adapters: A Causal Intervention for Routing Collapse in Time Series Foundation Models

**Authors:** Hung Phan; Thuy T Nguyen; Minh N Dinh; Nhat\-Quang Tran

**ID:** 151748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YOHVtj0IBk>) | [PDF](<https://openreview.net/pdf?id=YOHVtj0IBk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151748>)

Time series foundation models \(TSFMs\) commonly adapt to new data by attaching a single trainable head to a frozen backbone, a one\-size\-fits\-all setup that underfits heterogeneous regimes\. Replacing the head with a mixture of experts is the standard upgrade, but on instance\-normalized backbones \(the dominant TSFM design class\) it fails: routing entropy collapses to zero and one expert absorbs every input, a failure we call \*normalization\-induced routing collapse\*\. Standard MoE rescue mechanisms do not repair it, because the cause is in the router's input, not its optimization\. Pre\-encoder normalization strips the statistics a router would need to tell regimes apart\. A mutual\-information decomposition makes this precise and yields a signal\-ratio that, computed before training, predicts dataset vulnerability \(Spearman $\\rho = \-0\.88$\)\. Eight causal controls, including a vision\-modality replication, isolate instance normalization as the cause\. The prescription is a minimal causal intervention: \*Raw\-Routed Mixture of Adapters\* \(RR\-MoA\), which routes on the raw, pre\-normalization input\. Under a strictly frozen backbone, RR\-MoA wins 54/54 comparisons against the strongest fixed adapter and significantly outperforms LoRA, TRACE, AdaMix, and full fine\-tuning\. The effect generalizes across six backbones and an imputation task\. Frozen RR\-MoA also beats full fine\-tuning by 12–79% \(the \*Frozen Paradox\*\); two architecturally distinct variants confirm the principle generalizes beyond this specific router\. Code is provided in the supplementary material\.

## LogSig\-SSM: Time\-Series Modelling with Multi\-Scale Log\-Signature Compression for State\-Space Models

**Authors:** Felix Oury; Nicolas Calvo Peiro; Reiko J Tanaka

**ID:** 149042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIKjiGlxPz>) | [PDF](<https://openreview.net/pdf?id=tIKjiGlxPz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149042>)

Time\-series data are often sampled irregularly at high frequency and exhibit long\-range dependencies, which makes long\-horizon modelling difficult\. Continuous\-time models such as neural controlled differential equations \(NCDEs\) and neural rough differential equations \(NRDEs\) can handle irregular sampling, but they scale poorly to long sequences\. Selective state\-space models \(SSMs\) such as Mamba scale linearly with sequence length, but within a single block they provide limited recurrent mixing across hidden dimensions\. We propose LogSig\-SSM \(Log\-Signature Compression for State\-Space Models\), which first compresses long multivariate time series into a shorter sequence of tokens using multi\-scale windowed log\-signatures, and then processes these tokens with a selective SSM backbone\. LogSig\-SSM is scalable and robust to irregular sampling, combining log\-signature tokens that capture higher\-order cross\-channel interactions with a selective SSM that models long\-range dependencies\. The model also admits a continuous\-time interpretation as an NCDE/NRDE\-style system driven by a log\-signature\-based input, in which selectivity induces an input\-dependent rescaling of the latent dynamics\. Across four benchmarks, namely long\-sequence classification on UEA, high\-frequency physiological regression on PPG\-DaLiA, multivariate weather forecasting, and irregularly sampled clinical prediction on PhysioNet Sepsis, LogSig\-SSM overall outperforms existing SSM and continuous\-time baselines while significantly reducing training time and GPU memory usage\.

## WavCIL: Wavelet Coefficient\-Domain Invariant Learning for Dynamic Graph OOD Generalization

**Authors:** Yantong Zhu; Weining Shi; Keyi Li; Xiaoyan Xie; Yi Chang; Qinggang Zhang; Tianjiao Pu; Ji Qiao; Zhihong Zhang

**ID:** 154806 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ApCgQxevLQ>) | [PDF](<https://openreview.net/pdf?id=ApCgQxevLQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154806>)

Dynamic Graph Neural Networks \(DyGNNs\) demonstrate powerful representation capabilities in crucial time\-series systems by leveraging graph structure and temporal dynamics\. However, existing dynamic graph models often suffer from unpredictable distribution shifts induced by complex time\-varying factors such as emergency incidents, leading to severe performance degradation due to their low out\-of\-distribution \(OOD\) generalization\. Graph invariant learning has been extensively studied to solve this problem through feature disentanglement in the time or spectral domain\. Despite recent advances, existing methods suffer from critical limitations in practice: Temporal\-based methods struggle to disentangle transient perturbations and stable patterns that are highly overlapping and entangled within the same period\. While spectral\-based methods attempt spectral\-domain disentanglement via the global Fourier transform, these methods inherently lose temporal localization and fail to effectively characterize distribution shifts driven by time\-varying factors\. To this end, in this paper, we propose \*\*Wav\*\*elet \*\*C\*\*oefficient\-Domain \*\*I\*\*nvariant \*\*L\*\*earning \*\*\(WavCIL\)\*\*, a novel framework for resolving distribution shifts by conducting disentanglement within a wavelet coefficient domain endowed with time\-frequency localization capabilities\. Specifically, WavCIL consists of two key components: \(i\) a wavelet transform module, which leverages a set of wavelet bases to map the input temporal signals into wavelet coefficient domain, simultaneously capturing frequency components and localizing their temporal occurrences; and \(ii\) a coefficient domain invariant learning module, which utilizes an adaptive mask mechanism to disentangle stable causal patterns invariant to time\-varying factors from spurious patterns driven by time\-varying factors in the coefficient domain, guiding the prediction process to rely more on the causal patterns\. Extensive experiments on several benchmark datasets demonstrate that WavCIL achieves state\-of\-the\-art generalization performance when handling distribution shifts\. Our code is released at https://anonymous\.4open\.science/r/WavCIL\-4B8C\.

## Volatility\-Whitened Probabilistic Residual Modeling for Long\-Term Time Series Forecasting

**Authors:** Fan Zhang; Shiming Fan; Zexuan Ma; Shijun Chen; Meijia Wang; Hua Wang

**ID:** 155322 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6UKbpYP6hi>) | [PDF](<https://openreview.net/pdf?id=6UKbpYP6hi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155322>)

Compared with deterministic methods that output only point estimates, probabilistic forecasting can characterize both future trends and their uncertainty simultaneously, making it more suitable for decision\-making in complex real\-world scenarios\. In recent years, diffusion models, owing to their powerful generative modeling capability, have been introduced into the field of time series forecasting\. However, we find that most existing diffusion\-based forecasting methods directly construct the diffusion process in the original future space, which is easily affected by heteroscedastic scale imbalance, causing highly volatile dimensions to dominate the denoising learning and leading to unstable corrections near observation boundaries\. Motivated by these issues, we propose VolaRM, a volatility\-whitened probabilistic residual modeling framework for long\-term time series forecasting\. By constructing a conditional probabilistic base distribution, it represents future targets as whitened residuals relative to this base distribution and performs conditional modeling in the normalized residual space, thereby alleviating scale imbalance across variables and forecasting horizons\. Meanwhile, a specific gating mechanism is introduced to enhance boundary continuity and the stability of long\-term forecasting\. Extensive experiments on eight real\-world datasets from different application domains demonstrate the effectiveness of VolaRM\.

## FISC: Time\-Series Forecasting via First\-Layer Statistical Calibration Constraints

**Authors:** Hua Wang; Xiyuan Zhang; Fan Zhang

**ID:** 149568 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pAAOZakP4Y>) | [PDF](<https://openreview.net/pdf?id=pAAOZakP4Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149568>)

Multivariate time\-series forecasting requires reliable cross\-series interaction, yet many attention\- and mixing\-based models couple heterogeneous variables without explicit entry\-stage alignment\. Such uncalibrated early interaction can lead to poorly conditioned optimization and degraded generalization when cross\-series statistics drift\. We propose First\-layer Statistical Calibration \(FISC\), a simple framework that imposes statistical calibration constraints only on the first cross\-series coupling layer while leaving deeper coupling layers learnable without repeated calibration\. FISC estimates training\-set cross\-series statistics, converts them into a statistical affinity matrix, and convexly fuses this matrix with learnable coupling parameters\. A row\-wise simplex projection then yields a nonnegative row\-stochastic mixing operator, providing bounded and interpretable entry\-layer interaction\. By restricting calibration to the first layer, FISC calibrates the entrance interaction without repeatedly constraining deeper feature transformations\. To reduce temporal redundancy, FISC further combines a time\-domain branch with a data\-adaptive orthogonal\-domain branch derived from training\-time temporal statistics\. Experiments on standard long\- and short\-term forecasting benchmarks show that FISC improves forecasting accuracy while maintaining favorable efficiency\. Ablations and non\-stationarity analyses further show that first\-layer\-only calibration consistently outperforms no calibration, last\-layer calibration, and all\-layer calibration, supporting a simple principle for robust cross\-series learning: constrain the entrance interaction with training\-set statistics, while letting deeper representations remain data\-adaptive\.

## TailFix: Mitigating Error Accumulation and Correcting Tail Deterioration in Long\-Horizon Forecasting

**Authors:** Hua Wang; Haijing Gao; Fan Zhang

**ID:** 154800 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=As8bch5HUh>) | [PDF](<https://openreview.net/pdf?id=As8bch5HUh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154800>)

Long\-term time\-series forecasting \(LTSF\) underpins applications such as energy\-load prediction and traffic\-flow forecasting, yet model performance often deteriorates as the horizon extends\. In particular, errors accumulate with lead time and systematically amplify toward the end of the predicted sequence, a phenomenon known as tail deterioration\. We posit that this instability is driven by weakly constrained fusion of cross\-temporal and cross\-scale context: aggressive mixing can propagate noise and early\-stage bias into distant horizons, ultimately degrading tail accuracy\. To address this issue, we propose TailFix, a controllable cross\-scale mixing framework for long\-horizon forecasting\. TailFix selectively gates interactions among multi\-scale representations, derives scale\-level correction terms from contextual summaries, and injects them via gated residual connections to suppress error diffusion and improve long\-horizon stability\. We further incorporate adaptive channel enhancement and a lightweight tail\-correction module to explicitly refine the error\-prone tail region\. Finally, we introduce the Tail Amplification Factor \(TAF\) to quantify tail error amplification relative to the early portion of the sequence\. Across diverse benchmarks, TailFix consistently mitigates tail error amplification and improves performance on multiple long\-horizon forecasting tasks\.

## DSR\-TSF: Spectrum\-Driven Dynamic Routing for Efficient Long\-Horizon Time Series Forecasting

**Authors:** Hua Wang; Bing Li; Fan Zhang

**ID:** 152845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PwJVOO6ibd>) | [PDF](<https://openreview.net/pdf?id=PwJVOO6ibd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152845>)

Long\-horizon time series forecasting requires a careful balance between predictive accuracy and computational cost\. Segmented temporal modeling has therefore become a practical strategy for reducing the burden of long\-range prediction\. However, real\-world time series often contain superposed multi\-periodic components, whose spectral structures vary across time, variables, and samples\. Such variability limits fixed aggregation or frequency\-modeling mechanisms, making them less adaptive to non\-stationary periodic patterns and potentially causing informative components to be attenuated over long forecasting horizons\. To address this limitation, we propose DSR\-TSF, a spectrum\-driven dynamic routing framework for long\-horizon forecasting\. DSR\-TSF adaptively selects and combines multiple period\-specific branches conditioned on the spectral characteristics of the input sequence, thereby improving the model's ability to capture non\-stationary periodic structures\. It further learns period\-aware dynamic weights to modulate the contributions of multi\-periodic patterns while retaining the segmented prediction structure\. Without complex resampling or explicit period alignment, DSR\-TSF provides a compact mechanism for modeling spectral heterogeneity and achieves competitive performance across seven datasets with diverse dimensionalities and temporal characteristics\.

## Stable Alpha: Adversarial Invariant Representation Learning for Nonlinear Asset Pricing under Temporal Distribution Shifts

**Authors:** Xiaokang Wang; Zihe Liu; Xinghan Qin; Zihao Yin; Jidong Yuan; Qinxuan Zhang; Xiushuo Hu

**ID:** 153143 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NZHuWIlAUx>) | [PDF](<https://openreview.net/pdf?id=NZHuWIlAUx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153143>)

Deep learning has emerged as a powerful paradigm for constructing nonlinear asset pricing factor models\. However, temporal distribution shifts such as bull\-bear transitions and industry rotations undermine the generalization of models trained under the i\.i\.d\. assumption\. As a result, existing models tend to exploit environment\-specific correlations that are highly predictive in\-sample but unstable across market regimes\. To address this challenge, we propose $\\textit\{\\textbf\{CASH\}\}$, a causality\-inspired asset pricing factor framework designed to learn invariant and minimally sufficient representations under temporal distribution shifts\. CASH formulates an information\-theoretic adversarial learning objective that systematically discards transient market noise by optimizing against an adversary designed to exploit spurious correlations, thereby distilling invariant factor\-return relationships\. The resulting invariant representation is then integrated into a conditional factor pricing model via a dynamic factor exposure network\. Experiments on real\-world stock datasets across multiple markets demonstrate that CASH consistently outperforms state\-of\-the\-art baselines in out\-of\-sample return prediction and exhibits superior robustness under pronounced temporal regime shifts\.

## STAR: Boosting Time Series Foundation Models for Anomaly Detection Through State\-Aware Adapter

**Authors:** Hanyin Cheng; Ruitong Zhang; Yuning Lu; Yang Shu; Peng Chen; Yuan Jun; Meng Wang; Bin Yang; Chenjuan Guo

**ID:** 153598 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KCWC9dFVBr>) | [PDF](<https://openreview.net/pdf?id=KCWC9dFVBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153598>)

Existing Time Series Foundation Models \(TSFMs\) for Multivariate Time Series Anomaly Detection often overlook discrete \*state variables\* that describe system status and treat them uniformly with \*numerical variables\*\. This inappropriate modeling approach prevents the model from fully leveraging state information and even leads to significant performance degradation when state variables are integrated\. To address this limitation, this paper proposes a novel \*\*ST\*\*ate\-aware \*\*A\*\*dapte\*\*R\*\* \(STAR\)\. Specifically, STAR comprises three core innovative components: \(1\) an \*Identity\-guided State Encoder\* that effectively captures the complex semantics of state variables; \(2\) a \*Conditional Bottleneck Adapter\* that dynamically injects state influence into TSFMs; and \(3\) a \*Numeral\-State Matching\* module that effectively detects anomalies inherent to the state variables themselves\. Extensive experiments on real\-world datasets demonstrate that STAR significantly improves the performance of existing TSFMs\.

## FLAME: Flow Enhanced Legendre Memory Models for General Time Series Forecasting

**Authors:** Xingjian Wu; Hanyin Cheng; Xiangfei Qiu; Zhengyu Li; Jilin Hu; Chenjuan Guo; Bin Yang

**ID:** 151862 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XKdNelCe2Q>) | [PDF](<https://openreview.net/pdf?id=XKdNelCe2Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151862>)

In this work, we introduce FLAME, a family of extremely lightweight and capable Time Series Foundation Models, which support versatile forecasting tasks via generative probabilistic modeling, while ensuring both efficiency and robustness\. FLAME utilizes the Legendre Memory for strong generalization capabilities\. Through adapting variants of Legendre Memory, i\.e\., translated Legendre \(LegT\) and scaled Legendre \(LegS\), in the Encoding and Decoding phases, FLAME can effectively capture the inherent inductive bias within data and make efficient long\-range inferences\. To enhance the accuracy of probabilistic forecasting while keeping efficient, FLAME adopts a Normalizing Flow based forecasting head, which can model the arbitrarily intricate distributions over the forecasting horizon in a generative manner\. Comprehensive experiments on four well\-recognized benchmarks, including TSFM\-Bench, ProbTS, TFB, and GIFT\-EVAL, demonstrate that FLAME is a strong out\-of\-the\-box tool of decision intelligence\.

## Hermes: A Multi\-Scale Spatial\-Temporal Hypergraph Network for Stock Time Series Forecasting

**Authors:** Xiangfei Qiu; Liu Yang; Xiangyu Xu; Hanyin Cheng; Xingjian Wu; Rongjia Wu; Zhang Zhigang; Tu ding; Chenjuan Guo; Bin Yang; Christian S\. Jensen; Jilin Hu

**ID:** 149780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nMUDgtUWOF>) | [PDF](<https://openreview.net/pdf?id=nMUDgtUWOF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149780>)

Time series forecasting occurs in a range of financial applications providing essential decision\-making support to investors, regulatory institutions, and analysts\. Unlike multivariate time series from other domains, stock time series exhibit industry correlation\. Exploiting this kind of correlation can improve forecasting accuracy\. However, existing methods based on hypergraphs can only capture industry correlation relatively superficially\. These methods face two key limitations: they do not fully consider inter\-industry lead\-lag interactions, and they do not model multi\-scale information within and among industries\. This study proposes the \\textbf\{Hermes\} framework for stock time series forecasting that aims to improve the exploitation of industry correlation by addressing these limitations\. The framework integrates moving aggregation and  multi\-scale fusion modules in a hypergraph network\. Specifically, to more flexibly capture the lead\-lag relationships among industries, Hermes proposes a hyperedge\-based moving aggregation module\. This module incorporates a sliding window and utilizes dynamic temporal aggregation operations to consider lead\-lag dependencies among industries\. Additionally, to effectively model multi\-scale information, Hermes employs cross\-scale, edge\-to\-edge message passing to integrate information from different scales while maintaining the consistency of each scale\. Experimental results on multiple real\-world stock datasets show that Hermes outperforms existing state\-of\-the\-art methods\.

## PhyTS: A Benchmark for Scientific Time Series

**Authors:** Benedict Armstrong; Jeroen Audenaert; Hannah P Binney; Alice Cheng; Maarten De Vos; Luis F Domingues; Allison Eto; Mary Feliz; Joseph Formaggio; Jessica Fry; Philip Harris; Ilay Kamai; Erik Katsavounidis; Mykyta Kliapets; Konstantinos Kontras; Aobo Li; Paul Liang; Daniel Muthukrishna; Christina Reissel; Daniela Rus; T\. Konstantin Rusch; Avi Shporer; Penny L Slocum; Talia E Weiss; Lindley Winslow; Kyungseop Yoon

**ID:** 139305 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YMy682mdKp>) | [PDF](<https://openreview.net/pdf?id=YMy682mdKp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139305>)

We introduce PhyTS, a benchmark suite of precision scientific time series datasets for machine learning, spanning experiments in gravitational\-wave detection, dark matter searches, neutrino mass determination, and exoplanet discovery\. Despite their diverse scientific goals, these domains share a common challenge: recovering weak, structured signals and estimating underlying physical parameters from noise\-dominated measurements\. Unlike standard sequence modeling benchmarks such as audio and speech, these data exhibit non\-Gaussian and nonstationary noise, long\-range temporal correlations, detector\-specific systematics, irregular sampling, and signals that are sparse, weak, or only partially modeled\. As a result, they provide a challenging testbed for evaluating whether modern AI methods can support downstream scientific inference\. We provide standardized tasks, data splits, and evaluation protocols for denoising, signal recovery, and parameter inference across physics domains, along with baseline results\. By unifying diverse weak\-signal inference problems under a common framework, this benchmark aims to enable reproducible evaluation and accelerate the development of more robust, interpretable, and physically grounded methods for scientific time series analysis\.

## Counterfactual Explanations for Time\-Series Classification via Constrained Flow Matching

**Authors:** Akihiro Yamaguchi; Shizuo Kaji; Kaname Matsue; Ryusei Shingaki

**ID:** 155627 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4BQToRUDBl>) | [PDF](<https://openreview.net/pdf?id=4BQToRUDBl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155627>)

Counterfactual explanations for time\-series classification generate synthetic instances that flip a prediction to a desired class while remaining plausible and making small, local changes\. Existing methods often rely on classifier gradients, and many do not naturally extend to one\-class settings\. To bridge this gap, we propose CTCF, a model\-agnostic method for hard\-decision classifiers in supervised and one\-class settings\. CTCF decouples generation from classifier\-specific control by reusing an unconditional Flow Matching generator and learning a flow\-time\-dependent desired\-class region from interpolation states labeled by endpoint hard decisions, without classifier gradients or class probabilities\. At inference time, CTCF uses a dual\-control mechanism: fused\-lasso endpoint\-objective steering encourages small, segment\-local changes, while linearized projection correction reduces violations of a conservative desired\-class region\. Theoretically, under ideal marginal matching, we show that the surrogate risk on interpolation states equals the corresponding ODE\-trajectory risk\. Experiments on UCR datasets demonstrate CTCF's effectiveness across quantitative metrics and qualitative case studies\.

## Faithful Embeddings of Irregular and Asynchronous Data for Online Log\-NCDEs

**Authors:** Benjamin Walker; Alexandre Bloch; Lingyi Yang; Sam Morley; Terry Lyons

**ID:** 150604 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gtk5eOWBxM>) | [PDF](<https://openreview.net/pdf?id=gtk5eOWBxM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150604>)

Continuous\-time models are a natural choice for irregular and asynchronous data\. A central design choice is how to embed discrete observations into continuous time\. Interpolation\- and imputation\-based embeddings reconstruct a continuous observation path, making the model sensitive to the choice of reconstruction\. We show that this reconstruction step is unnecessary\. On compact sets, universality for continuous functionals of paths transfers to universality for continuous functionals of discrete observation streams under any continuous and injective embedding\. Guided by this result, and building on the rectilinear control path for Neural Controlled Differential Equations \(NCDEs\), we introduce a continuous and injective embedding for Log\-NCDEs, a universal class of continuous\-time models\. This embedding records observations as increments and composes them over arbitrary query intervals to form log\-signatures, giving interval\-level summaries of a faithful embedding of the observed data\. This avoids interpolation of observed variables, supports online computation, and allows prediction on output grids independent of the input sampling times\. Experiments on synthetic controlled dynamics and real\-world time\-series datasets show that the representation is accurate, efficient, and robust to irregular, asynchronous, and sparse observations\.

## Safe Active Learning with Future Viability Guarantees in Time\-Series Models

**Authors:** Hyeonjun Park; Whiyoung Jung; Deunsol Yoon; Sunghoon Hong; Kanghoon Lee; Kyungjae Lee

**ID:** 155479 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5HOe7v27vl>) | [PDF](<https://openreview.net/pdf?id=5HOe7v27vl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155479>)

In time\-series systems, safe active learning seeks to collect informative data while maintaining safety during data collection\. A key challenge is that one\-step safety does not guarantee future viability: an input can be immediately safe yet lead the system into a state from which no safe continuation exists\. For example, in pressure regulation, an input may keep the current pressure below its limit but still drive the system toward an unsafe pressure spike over the next few steps\. We study this problem in nonlinear time\-series systems with unknown dynamics and safety constraints\. We introduce the notion of $m$\-step dead\-end inputs and propose a future\-aware safe active learning framework \(FA\-SAL\) that enforces finite\-horizon safety via margin\-certified rollout constraints\. Our approach constructs a conservative approximation of the true future\-safe set by combining Gaussian process uncertainty with a recursive error bound over predicted trajectories\. We show that FA\-SAL provides high\-probability safety guarantees, recovers interior future\-safe inputs as uncertainty decreases, and provably excludes separated dead\-end inputs\. Experiments on synthetic and real\-world benchmarks demonstrate that FA\-SAL reduces safety violations and dead\-end selections while maintaining competitive model learning performance\.

## SIMBAD: Spatio\-Temporal Traffic Forecasting Robust to Aperiodicity

**Authors:** Daniel Yoonhwan Lee; Seungwon Shin; Seunghoon Han; Sungsu Lim; Susik Yoon

**ID:** 150645 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gVxkBrfcxg>) | [PDF](<https://openreview.net/pdf?id=gVxkBrfcxg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150645>)

Accurate traffic prediction is essential for urban planning but remains challenging due to the irregular patterns caused by unexpected events\. While Spatio\-Temporal Graph Neural Networks \(STGNNs\) effectively model periodic data, they often struggle with these aperiodic fluctuations\. To address this, we propose SIMBAD, which improves generalization on irregular patterns via two key mechanisms: 1\) adaptive regulation of periodic signals to prioritize recent signals, and 2\) dynamic spatial modeling that adjusts influence between connected nodes based on contextual relations\. Built upon simple similarity metrics to adapt to aperiodic patterns, SIMBAD outperforms existing methods on real\-world benchmark datasets, demonstrating superior performance in predicting unseen and irregular traffic events\.

## Neural Optimal Transport in Hilbert Spaces

**Authors:** Jae\-Hwan Choi; Jiwoo Yoon; Dohyun Kwon; Jaewoong Choi

**ID:** 150584 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h673LAeDNM>) | [PDF](<https://openreview.net/pdf?id=h673LAeDNM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150584>)

Functional data such as time series, trajectories, and fields are increasingly central in machine learning and are naturally modeled in infinite\-dimensional Hilbert spaces\. We study Semi\-dual Neural Optimal Transport \(SNOT\) for learning transport maps between probability measures on separable Hilbert spaces\. A critical challenge in this setting is the spurious solution problem: a neural map can globally optimize the SNOT objective while failing to recover an optimal transport map\. We show that this failure arises from non\-regular source measures, which make the inner minimization in the semi\-dual objective non\-identifiable\. We prove that regular source measures, defined via Gaussian null sets, restore inner\-minimizer uniqueness and recover the Monge map\. For singular sources, we introduce Gaussian smoothing and establish a necessary and sufficient kernel condition for smoothing to restore regularity\. We further prove plan\-level consistency: as smoothing vanishes, every Wasserstein accumulation point of the induced optimal plans solves the original Kantorovich problem\. Experiments on synthetic singular transports and real\-world unpaired time\-series imputation benchmarks validate the theory, achieving the best performance on several benchmarks and competitive performance on the remaining ones\.

## Signature\-Kernel Evaluation Metrics for Robust Probabilistic and Tail\-Event Forecasting

**Authors:** Benjamin R Redhead; Thomas L Lee; Peng Gu; Víctor Elvira; Amos Storkey

**ID:** 139252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c4U3xzPCvL>) | [PDF](<https://openreview.net/pdf?id=c4U3xzPCvL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139252>)

Standard sample\-based metrics like Continuous Ranked Probability Score \(CRPS\) and Quantile Loss \(QL\) are frequently used in the evaluation of probabilistic time\-series forecasting\. However, these metrics fail to capture multivariate correlations or assess the ability to capture distribution tails\. These global metrics are insensitive to errors on high\-utility events in distributional tails due to over\-representation of the distribution's body\. To accurately measure distributional fidelity on tail\-regions and regions of high utility while still having a proper scoring rule, we introduce a family of censored signature kernel metrics\. Our proposed metrics concentrate evaluation of forecasts to a focus region, representing high\-utility or distributional tails, by collapsing the body of the distribution to a single pivot\. Our benchmarks on time\-series foundation models \(TSFMs\) reveal that while a clear ranking can be formed for distribution capture, there is no clear winner for tasks like systemic load prediction\. This indicates that models with a strong ability to capture an overall distribution do not produce forecasts with high downstream utility\. To encourage the use of the proposed metrics we open\-source the efficient signature kernel \(ESK\) library\. This library facilitates batch computation, with custom triton kernels, achieving a speed\-up of up to 3\.58$\\times$ compared to implementations via the popular SigKernel library\. Code for our metrics are available on GitHub\.

## Empowering Time Series Analysis with Large\-Scale Multimodal Pretraining

**Authors:** Peng Chen; Siyuan Wang; hu; Xingjian Wu; Yang Shu; Zhongwen Rao; Meng Wang; Yijie Li; Bin Yang; Chenjuan Guo

**ID:** 152727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QoM8XcqNiY>) | [PDF](<https://openreview.net/pdf?id=QoM8XcqNiY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152727>)

While existing time series foundation models primarily rely on large\-scale unimodal pretraining, they lack complementary modalities to enhance time series understanding\. Building multimodal foundation models is a natural next step, but it faces key challenges: 1\) lack of a unified multimodal pretraining paradigm and large\-scale multimodal corpora for time series analysis; 2\) how to effectively integrate heterogeneous modalities and enhance model generalization\. To address these challenges, we take an early step toward multimodal foundation models for time series analysis\. We first propose a multimodal pretraining paradigm that leverages time series with endogenous modalities \(derived images and text\) and exogenous knowledge \(news\), providing a comprehensive multi\-view perspective for time series analysis\. To support this, we develop an automated data construction pipeline to curate MM\-TS, the first large\-scale multimodal time series dataset spanning six domains, with up to one billion points\. Then we propose HORAI, a frequency\-enhanced multimodal foundation model\. It integrates two core components: the Frequency\-enhanced Cross\-Modality Encoder and the Time\-Frequency Decoder, designed to effectively fuse multimodal features and enhance model generalization across modalities and domains\. After pretraining on MM\-TS, HORAI achieves state\-of\-the\-art zero\-shot performance on time series forecasting and anomaly detection tasks, demonstrating strong generalization\.

## Differencing the Diffusion Trajectory toward Uncertain Components for Time Series Forecasting

**Authors:** Chen Su; Yuanhe Tian; Yan Song

**ID:** 154330 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EQ3rr1gzcl>) | [PDF](<https://openreview.net/pdf?id=EQ3rr1gzcl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154330>)

Diffusion models have become a widely used framework for probabilistic time series forecasting, modeling the distribution of future values given an observed history\. In time series forecasting, however, the future continues the observed history, creating an asymmetry the standard diffusion process leaves unaddressed, with slowly\-varying content largely determined by the observed continuity while higher\-frequency dynamics carry most of the residual uncertainty\. Existing diffusion\-based forecasters decouple this asymmetry through an external rule before generation, leaving the corruption trajectory blind to which parts of the target the history can already anchor\. We propose \\textsc\{DiffDiff\}, a diffusion framework that embeds this predictability asymmetry into the diffusion trajectory itself, so that a single end\-to\-end diffusion process becomes aware of which parts of the target the history can already anchor\. \\textsc\{DiffDiff\} makes the forward operator step\-dependent so that the noisy intermediate state progressively shifts from the target itself toward its second\-order differenced structure, while a conditioning pathway supplies the denoiser with both value\-domain and differential history information balanced by a stage\-adaptive gate at each diffusion step\. The terminal distribution approaches a standard Gaussian, preserving compatibility with existing samplers\. On seven benchmarks across four prediction horizons, \\textsc\{DiffDiff\} outperforms six diffusion baselines, and our analysis confirms that \\textsc\{DiffDiff\} concentrates the diffusion's generative effort on the most uncertain components of the target while relieving it from rebuilding the history\-anchored content\.

## Time\-Frequency Decoupled Cross\-Scale Partial Optimal Transport for Time Series Domain Adaptation

**Authors:** Shubin Liu; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 155904 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1xu08VeESv>) | [PDF](<https://openreview.net/pdf?id=1xu08VeESv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155904>)

Unsupervised domain adaptation has become an important paradigm for mitigating distribution shift in time series classification\. However, existing time series domain adaptation methods typically align source and target data at a fixed time scale and simply fuse time\-frequency features before uniform alignment\. Furthermore, they do not consider the impact of noisy samples on distribution alignment\. To address these limitations, we propose CSPAN \(Time\-Frequency Decoupled \\textbf\{C\}ross\-\\textbf\{S\}cale \\textbf\{P\}artial Optimal Transport \\textbf\{A\}lignment \\textbf\{N\}etwork\) for time series domain adaptation\. CSPAN first constructs segment\-scale time\-frequency candidates, and then uses Segment\-Scale Aware Top\-k Fusion to select the most suitable segment\-scale feature representation\. It then performs cross\-domain alignment after decoupling time and frequency through Temporal Partial Optimal Transport and Frequency Partial Optimal Transport, where temporal domain alignment is guided by the transferability estimated from a probing transport plan, and frequency domain alignment is guided by the discriminability estimated by an auxiliary frequency classifier\. By combining segment\-scale representation selection, time\-frequency decoupling, and partial distribution alignment, CSPAN enables more flexible cross\-domain matching\.  Extensive experiments on six datasets demonstrate CSPAN’s consistent superiority, achieving an average accuracy improvement of 3\.16\\% in cross\-domain scenarios\. Code is available at the anonymous link: \\url\{https://anonymous\.4open\.science/r/CSPAN\-35FB/\}\.

## PAMod: Modeling Cyclical Shifts via Phase\-Amplitude Modulation for Non\-stationary Time Series Forecasting

**Authors:** Yingbo Zhou; Yutong Ye; Shuhao Li; Rui Qian; Qiang Huang; Lemao Liu; Li Sun; Dejing Dou

**ID:** 155815 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2h1BtfsPus>) | [PDF](<https://openreview.net/pdf?id=2h1BtfsPus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155815>)

Real\-world time series forecasting faces the fundamental challenge of non\-stationary statistical properties, including shifts in mean and variance over time\.  While reversible instance normalization \(RevIN\) has shown promise by stationarizing inputs and denormalizing outputs, it relies on the strong assumption that historical and future distributions remain identical\.  We observe that in many practical applications, distribution shifts follow cyclical patterns that correlate with periodic positions \(e\.g\., seasonal and holiday volatility\)\.  To this end, we propose $\\textbf\{PAMod\}$, a lightweight yet powerful framework that models cyclical distribution shifts via $\\textbf\{P\}$hase\-$\\textbf\{A\}$mplitude $\\textbf\{Mod\}$ulation in the normalized feature space\.  PAMod learns periodic embeddings to modulate representations: phase modulation captures mean shifts, while amplitude modulation adapts to variance changes\.  Crucially, we prove mathematically that modulating in normalized space is equivalent to applying dynamic denormalization, offering an elegant unification of distribution adaptation and representation learning\.  Extensive experiments on twelve real\-world benchmarks demonstrate that PAMod achieves state\-of\-the\-art performance with fewer computational resources\. Furthermore, our modulation mechanism, as a novel plug\-and\-play technique, can improve existing time\-series forecasting methods with simple integration\.

## Problem\-Dependent Dynamic Regret over a Predictor Class with One\-Gradient Feedback

**Authors:** Wentao Zhang

**ID:** 148180 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zhLmhEjDZ0>) | [PDF](<https://openreview.net/pdf?id=zhLmhEjDZ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148180>)

Many online learning systems now have access to several gradient predictors at once, such as simulators, replay buffers, neural surrogates, or time\-series forecasters, and the quality of these predictors varies from round to round\. We study online convex optimization under one\-gradient feedback against an arbitrary moving comparator, with a user\-supplied finite class $\\Pi$ of gradient\-field predictors, and ask whether a single algorithm can compete with the best predictor in $\\Pi$ at a logarithmic cost, fall back to a small\-loss bound when none of the predictors is useful, and still retain a path\-length\-adaptive worst\-case guarantee when the predictors are adversarial\. We give a positive answer through PH\-Sword \(Predictable\-Hybrid Sword\.optimism\), which combines an exp\-concave Hedge over $\\Pi$, optimistic projected\-gradient base learners on a geometric learning\-rate grid, and a correction\-term optimistic\-entropy meta learner with prediction\-error doubling\. For any comparator sequence $\\boldsymbol u$, PH\-Sword attains dynamic regret $\\widetilde O\\bigl\(R\\\_0\\sqrt\{\(1\+P\\\_T/D\)\(1\+P\\\_T/D\+\\min\\\{\\mathcal E\\\_\\\*/G^2,\\,2LF\\\_T\(\\boldsymbol u\)/G^2\\\}\+\\log\|\\Pi\|\)\}\\bigr\)$ up to logarithmic factors, where $R\\\_0=DG\+LD^2$, $P\\\_T$ is the path length, $F\\\_T\(\\boldsymbol u\)$ the cumulative comparator loss, and $\\mathcal E\\\_\\\*$ the best\-in\-class field error\. The bound merges the field\-controlled, small\-loss, and worst\-case regimes into one deterministic guarantee that improves over prior one\-gradient dynamic\-regret algorithms\. On six controlled benchmarks the five predicted scaling laws hold simultaneously: PH\-Sword reaches 17% of OGD's final dynamic regret and 54% of Ader's on a slow\-drift benchmark, and we observe that a single noisy predictor without model selection can actually do worse than using no predictor at all\.

## QWaveNet: Quantum\-Enhanced Wavelet Network for Time Series Forecasting

**Authors:** Fan Zhang; Shijun Chen; Meijia Wang; Shiming Fan; Zexuan Ma; Hua Wang

**ID:** 152829 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q75FP4Lcsi>) | [PDF](<https://openreview.net/pdf?id=Q75FP4Lcsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152829>)

Series decomposition aims to separate long\-term trajectories and periodic patterns in time series, thereby improving the specificity and interpretability of forecasting models\. However, mainstream approaches usually equate this functional separation with an operational split between a smoothed baseline and fluctuating residuals\. One line of methods approximates the trend via low\-pass smoothing, which assumes long\-term trajectories to be purely smooth and may misassign nonlinear evolution, stage\-wise transitions, and structural fluctuations to the residual\. The other relies on heuristic nonlinear decompositions to capture complex dynamics, but is sensitive to noise and hyperparameters, leading to unstable and mixed component boundaries\. To address this issue, we propose a forecasting framework, QWaveNet\. It employs a quantum convolutional neural network to learn Dynamic Evolution, a long\-term structural representation beyond low\-pass smoothing priors, which preserves nonlinear evolution, stage\-wise transitions, and structural fluctuations more coherently, while its complementary Evolutionary Residual captures localized variations and periodic dynamics\. Guided by these complementary components, QWaveNet further performs adaptive multi\-scale decomposition and reconstruction to support forecasting\. Experiments on multiple benchmark datasets demonstrate the effectiveness of QWaveNet\.

## SLiDE: Structured Linear Dynamics for Forecasting with Exogenous Inputs

**Authors:** Sebastian Pütz; Theodore Glavas; Benjamin Schäfer; Boris Oreshkin; Mark Coates

**ID:** 155791 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2rJCMiMakf>) | [PDF](<https://openreview.net/pdf?id=2rJCMiMakf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155791>)

Accurate time series forecasting with exogenous inputs is critical across domains, including energy and retail, yet modern deep learning models often overfit to correlations that do not generalize under shifts in these inputs\.    We propose SLiDE, a Koopman\-inspired architecture for forecasting with exogenous inputs that imposes structure on latent temporal dynamics\.    SLiDE approximates nonlinear system evolution using a learned linear operator in a latent space, combining \(i\) a history encoder that reconstructs the current latent state from past targets and inputs with \(ii\) a shared linear rollout driven by future exogenous variables\. By enforcing a common linear recurrence across encoding and prediction, SLiDE aligns how past information is encoded with how future states evolve, reducing parameterization and preventing reliance on spurious correlations in the input history\.    Empirically, SLiDE achieves state\-of\-the\-art accuracy on real\-world benchmarks, including electricity price forecasting and retail demand, while maintaining a computational footprint comparable to lightweight MLP architectures\. SLiDE is especially effective at generalizing to shifted exogenous inputs, reducing MSE by 20% on electricity price samples with out\-of\-range exogenous values and MAE by 30% in a synthetic transfer setting where the same dynamical system is driven by an unseen exogenous process\. Ablations confirm the importance of both the structured history encoder and the linear latent rollout, suggesting that structured latent linear dynamics provide a useful inductive bias for forecasting with exogenous inputs\.

## GAPS: Gradient\-Aware Adaptation\-Gap Scoring for Time\-Series Anomaly Detection with Foundation Models

**Authors:** Jongwon Kim; Byunghun Song; Young Myoung Ko

**ID:** 150837 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ewNIO4p75i>) | [PDF](<https://openreview.net/pdf?id=ewNIO4p75i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150837>)

Reconstruction error is the standard signal for unsupervised time\-series anomaly detection and has been widely adopted by time\-series foundation models \(TFMs\)\. It is, however, vulnerable to input noise: the resulting score tracks the noise level itself rather than whether a sample is truly anomalous, and this failure is especially pronounced in domains where the noise envelope itself carries information about the underlying process state\. We propose the \*adaptation gap\* $\\text\{Diff\} = L\_\{FT\} \- L\_\{ZS\}$, the difference between fine\-tuned and zero\-shot reconstruction losses, as a noise\-robust complement\. We prove that its conditional expectation cancels the input\-noise variance and yields a calibration\-anchored, population\-level mean\-separation guarantee\. Building on these results we introduce \*\*GAPS\*\* \(Gradient\-Aware Adaptation\-Gap Scoring\), which selectively augments $L\_\{FT\}$ with $\\text\{Diff\}$ under a calibration\-only routing layer with no label\-tuned hyperparameters\. Across a synthetic suite, an HRV benchmark whose normal class is intrinsically noisier than its anomaly class, and TSB\-AD\-U with a pre\-registered noise\-stress condition, GAPS preserves performance under standard conditions and yields substantial gains under noise stress\.

## TStruct: Learning Shared Temporal Structures for Long\-Term Time\-Series Forecasting

**Authors:** Yangze Li; Zhengyang Zhou; Qihe Huang; Pengkun Wang; Binwu Wang; Yang Wang

**ID:** 149443 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q3fXT85cph>) | [PDF](<https://openreview.net/pdf?id=q3fXT85cph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149443>)

Long\-term time\-series forecasting requires temporal dependency modeling that remains stable and generalizable under temporal distribution shifts\.  However, real\-world time series are often noisy and non\-stationary, making deep learning models prone to fitting incidental temporal interactions in the training data\. A key question is whether there exist temporal relationship structures that recur across different temporal positions and variables\. We analyze temporal relationship matrices on commonly used time\-series datasets and find that samples from different temporal positions and different variables exhibit shared dominant temporal relationship structures\. This indicates that temporal relationship structures contain patterns that recur stably across samples and variables\. To learn such shared structures, we propose Temporal Structure Network \(TStruct\), a simple yet effective network for directly learning shared and generalizable temporal dependencies\. Specifically, TStruct directly parameterizes a set of shared temporal dependency matrices and generates normalized combination weights using dynamic sample information and static variable priors\. These weights represent a soft allocation of each sample\-variable pair over shared temporal dependency structures, enabling the model to generate adaptive temporal dependency matrices under shared structural constraints, rather than fitting incidental interactions in a fully unconstrained manner\. Notably, this simple structure\-aware design consistently outperforms several strong baselines across all datasets, achieving superior accuracy while maintaining high computational efficiency\. Our code is available at \\url\{https://anonymous\.4open\.science/r/TStruct\-NeurIPS2026\-1173\}\.

## TimeClaw: A Time\-Series AI Agent with Exploratory Execution Learning

**Authors:** Hangchen Liu; Dongyuan Li; Renhe Jiang; Jiewen Deng; Weiwei Ye; Yoshihide Sekimoto

**ID:** 153295 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MK0e2fxdTl>) | [PDF](<https://openreview.net/pdf?id=MK0e2fxdTl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153295>)

Time series analysis underpins forecasting, monitoring, and decision making in domains such as finance and weather, where solving a task often requires both numerical accuracy and contextual reasoning\. Recent progress has moved from specialized neural predictors to approaches built on LLMs and foundation models that can reason over time series inputs and use external tools\. However, most such systems remain execution\-centric: they focus on solving the current instance but learn little from exploratory execution\. This is especially limiting in verifiable numeric settings, where multiple candidate executions and tool\-use procedures may all be task\-valid yet differ sharply in quantitative quality, and where early success can trigger tool\-prior collapse that suppresses further exploration\. To address this limitation, we present TimeClaw, an exploratory execution learning framework that turns exploratory execution into reusable hierarchical distilled experience through a four\-stage loop: Explore, Compare, Distill, and Reinject\. TimeClaw combines metric\-supervised exploratory execution learning, task\-aware tool dropout, and hierarchical distilled experience for inference\-time reinjection, while keeping the base model frozen and avoiding online test\-time adaptation\. In an MTBench\-aligned evaluation with 17 tasks that span finance and weather prediction and reasoning tasks, TimeClaw delivers consistent gains over the baselines\. These results suggest that, for scientific systems, the bottleneck is not only execution\-time capability, but how exploratory experience is compared, distilled, and reused\.

## DiffPTS: Rethinking Diffusion ELBO for Probabilistic Time Series Forecasting

**Authors:** Weiwei Ye; Dongyuan Li; Hangchen Liu; Haotong Jiang; Yoshihide Sekimoto; Renhe Jiang

**ID:** 148542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x7OutBc7Vk>) | [PDF](<https://openreview.net/pdf?id=x7OutBc7Vk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148542>)

Probabilistic time series forecasting requires modeling and predicting complex and time\-varying distributions\. Recently, Denoising Diffusion Probabilistic Model\~\(DDPM\)\-based approaches have shown promise by equipping the diffusion process with pretrained mean and variance estimators to accommodate distributional shift\. However, these methods typically follow the standard DDPM framework and consider only partial components of the evidence lower bound \(ELBO\), treating the training of estimators as designed regression tasks separate from the variational inference framework\.  To address this, we rethink the ELBO under the Location\-Scale Noise Model \(LSNM\) and find that it naturally induces a Gaussian negative log likelihood objective for the estimators and inherently defines a joint training objective that unifies recent the diffusion paradigms for probabilistic forecasting\. Building on this principled ELBO reformulation, we propose DiffPTS, a general framework that enables end\-to\-end optimization of all components within the ELBO\. Across multiple benchmarks, DiffPTS consistently outperforms recent models, achieving state\-of\-the\-art performance with an average CRPS/MSE reduction of over 14\.53\\%/16\.55\\% compared to existing diffusion\-based methods\. The code is provided at \\url\{https://anonymous\.4open\.science/r/DiffPTS\}\.

## TimeES: Probabilistic and Deterministic Time Series Forecasting via Evolutionary Spectra

**Authors:** Weiwei Ye; Renhe Jiang; Hangchen Liu; Dongyuan Li; Yoshihide Sekimoto

**ID:** 154967 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ZitslGbaZ>) | [PDF](<https://openreview.net/pdf?id=9ZitslGbaZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154967>)

Real\-world time series are inherently non\-stationary, with trends, periodic patterns, and uncertainty evolving over time\. While the Fourier domain offers a natural lens to model time series, current deep learning approaches do not explicitly model evolution and randomness in the Fourier spectra, which limits their ability to accurately predict both the expected trajectory and its uncertainty in non\-stationary time series\.  Motivated by Evolutionary Spectra \(ES\) theory, we propose \\textbf\{TimeES\}, a general framework that enables probabilistic and deterministic forecasting via the evolutionary spectra theory\.  Specifically, we derive a parameterizable evolutionary spectra formulation, recasting non\-stationary random process modeling as learning an evolving representation modulated by random variables\. Furthermore, we reduce the complexity of the estimated spectra from $\\mathcal\{O\}\(NM\)$ to $\\mathcal\{O\}\(NK\)$, where $K \\ll M/2$, by exploiting Hermitian symmetry and energy\-guided frequency selection\. Based on a simple linear backbone, our proposed TimeES achieves consistent state\-of\-the\-art performance across both deterministic and probabilistic forecasting tasks, with high efficiency and interpretability\. Code is available at: \\url\{https://anonymous\.4open\.science/r/TimeES\}\.

## Blind\-Window Forecasting: Real\-Time Benchmarking and Multimodal Reconstruction for Tropical Cyclones

**Authors:** Zhaoran Feng; Xuanhong Chen; Zengbing Chen; Shengjun Wu; Bin He; Kairui Feng

**ID:** 150222 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jrRFzggOc0>) | [PDF](<https://openreview.net/pdf?id=jrRFzggOc0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150222>)

Tropical cyclone forecasting models are often trained and evaluated with reanalysis inputs\.  Reanalysis provides physically rich environmental context, but its most recent fields may be unavailable at forecast issuance\.  This can introduce a hindsight\-style advantage and lead to optimistic estimates of real\-time forecast skill\.  Satellite observations, in contrast, are available closer to real time but provide incomplete and noisy views of the storm system\.  We formulate this data\-availability mismatch as forecasting through a reanalysis blind window\.  To study this setting, we introduce a real\-time\-faithful benchmark spanning 1980\-\-2023 that combines lagged reanalysis with visible, infrared, water\-vapor, and passive microwave satellite imagery\.  We then develop RECAST\-TC, a multimodal reconstruction framework that fuses time\-lagged environmental histories with real\-time satellite observations to estimate a forecast\-sufficient latent storm state from delayed, partial, and noisy inputs\.  We use idealized analysis\-available forecasting and delayed\-reanalysis\-only forecasting as reference regimes\.  RECAST\-TC consistently improves track and intensity forecasts over delayed\-reanalysis baselines and moves noticeably closer to the idealized reference\.  These results highlight data availability and observation timing as central design variables for realistic evaluation and deployment\-oriented AI forecasting of tropical cyclones\.

## Falcon\-X: A Time Series Foundation Model for Heterogeneous Multivariate Modeling

**Authors:** Yiding Liu; Yifan Hu; Hongjie Xia; Peiyuan Liu; Hongzhou Chen; Xilin Dai; Zewei Dong; Jiang\-Ming Yang

**ID:** 150872 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ekOExPyuZS>) | [PDF](<https://openreview.net/pdf?id=ekOExPyuZS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150872>)

Time series foundation models \(TSFMs\) are transforming the forecasting paradigm through large\-scale cross\-domain pretraining\. However, most existing TSFMs remain univariate, and recent efforts to enable cross\-variate modeling still operate directly within the raw variate space\. This design introduces fundamental limitations in semantic alignment and relational expressivity\. Specifically, raw\-space group mixing lacks a dedicated mechanism to align heterogeneous physical quantities, while standard non\-negative attention fails to capture the complex synergistic and antagonistic interactions ubiquitous in real\-world systems\. To address these challenges, we propose Falcon\-X, decouples variates from the raw space and maps them into a unified latent prototype space\. Falcon\-X employs a Unified Prototype Diff\-Attention mechanism that explicitly evaluates both positive and negative semantic affinities to explicitly align heterogeneous variates\. Cross\-variate interactions are then efficiently performed within this shared space via Latent Entity Attention, naturally facilitating zero\-shot structural transfer\. Finally, a Variate Reassembly Router robustly reconstructs variate\-specific trajectories via a request\-and\-dispatch mechanism\. Extensive evaluations on the GIFT\-Eval and fev\-bench benchmarks demonstrate that Falcon\-X achieves state\-of\-the\-art forecasting performance, offering a principled and scalable paradigm for complex multivariate environments\. Code is available in the supplementary material\.

## Existence Precedes Value: Joint Modeling of Observational Existence and Evolving States in Time Series Forecasting

**Authors:** Yifan Hu; Hongzhou Chen; Peiyuan Liu; Yiding Liu; Zewei Dong; Jiang\-Ming Yang

**ID:** 148905 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uIvgvH7DE2>) | [PDF](<https://openreview.net/pdf?id=uIvgvH7DE2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148905>)

Real\-world time series are often highly incomplete and irregular due to sensor dormancy, transmission delays, and event\-driven sampling, making reliable forecasting fundamentally challenging\. Existing methods have evolved from impute\-then\-forecast pipelines to continuous\-time models such as Neural ODEs and continuous\-time graph networks\. While these approaches improve the modeling of historical irregularity, they still rely on an implicit oracle assumption at inference time: the timestamps of future valid observations are presumed to be known in advance\. This assumption limits practical relevance, since in many real systems the more fundamental question is not only what the future value will be, but also whether a valid observation will occur at all\. In this paper, we propose Timeflies, a unified framework that reformulates forecasting as a joint problem of future observability inference and value estimation\. To explicitly model the interaction between observation dynamics and state evolution, Timeflies adopts an observation stream and a value stream, coupled through three dedicated modules for reliability\-aware embedding, observation\-guided dependency modeling, and joint prediction\. We further construct Glimpse, a benchmark that combines natural missingness from public datasets with real\-world industrial data\. Extensive experiments show that Timeflies consistently outperforms existing methods, highlighting the importance of explicitly modeling future observability in time series forecasting with missing values\. Code and dataset are available in the supplementary material\.

## OliO: ODE\-based Linear Transition Operator for Self\-Supervised Time Series Forecasting

**Authors:** Kwangryeol Park; Seulki Lee

**ID:** 150464 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hpwkIMU05L>) | [PDF](<https://openreview.net/pdf?id=hpwkIMU05L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150464>)

Self\-supervised representation learning has advanced time series forecasting by capturing robust features from unlabeled data\. However, existing contrastive and masking\-based methods often struggle to explicitly model the underlying temporal flow, either by treating time lag as noise or by disrupting the inherent temporal dynamics essential for forecasting\. To address these limitations, we propose OliO \(ODE\-based Linear Transition Operator\), a plug\-and\-play self\-supervised learning method that learns bidirectional temporal flows as a continuous and structurally consistent dynamical system\. OliO introduces a transition operator derived from linear Ordinary Differential Equations \(ODEs\) to align latent representations across arbitrary time shifts\. By imposing a strictly upper triangular constraint on the transition matrix, we mathematically ensure numerical stability and enforce a robust polynomial boundary that effectively captures long\-term dependencies while preventing the exponential divergence typically found in unconstrained ODE\-based models\. This structural constraint induces a temporally coherent representation space that preserves the underlying flow essential for accurate forecasting\. Extensive experiments across various backbone architectures and benchmarks demonstrate that OliO achieves significant performance gains, providing Mean Squared Error \(MSE\) reductions of up to 5\.75\\% over the most competitive grid\-searched SOTA baselines\. The code is available at https://anonymous\.4open\.science/r/OliO\-46EF\.

## Revitalizing Medical Time Series with Vision\-Informed Retrieval: A Vision\-Language Perspective

**Authors:** Guoqi Yu; Juncheng Wang; Emma, Shujun Wang

**ID:** 153559 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KUlrtLsdT8>) | [PDF](<https://openreview.net/pdf?id=KUlrtLsdT8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153559>)

Medical time series \(MedTS\) analysis plays a critical role in supporting clinical decision\-making and patient care\. However, existing methods treat MedTS signals purely as numerical sequences, ignoring the rich information embedded in their visual waveform, which is essential for clinicians to diagnose physiological conditions\. To bridge this gap, we introduce a novel V ision\- I nformed Re trieval \(ViRe\) framework that injects visual waveform prior knowledge into representations of raw MedTS sequences, thereby emphasizing morphology\-relevant patterns and improving clinician\-aligned reasoning\. Specifically, a Vision Query is extracted using pre\-trained vision\-language models \(VLMs\) to obtain morphology\-aware priors from waveform plots\. To enrich the numerical representation with such morphology\-aware information, we design a tailored attention\-based cross\-modal retrieval mechanism that aligns raw numerical features with these high\-level vision priors through the Vision Query\. ViRe demonstrates strong effectiveness, outperforming the state\-of\-the\-art method by an average of 6\.42% gain across six public MedTS benchmarks\. Code is available at this Anonymous Repo \.

## Echoes of Error: Residual\-Directional Local Rollout Consistency for Timeseries Forecasting

**Authors:** Zheng Wang; Kaixuan Zhang; Xiaonan Lu; Wanfang Chen

**ID:** 152212 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UjSZdUySXj>) | [PDF](<https://openreview.net/pdf?id=UjSZdUySXj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152212>)

In time\-series forecasting, rollout errors are not merely one\-step fitting discrepancies: once fed back into the evolving state, they can perturb future predictions\. We formalize this effect through local rollout consistency, which compares the next prediction produced under teacher forcing with that produced under free running\. In principle, this consistency can be enforced directly by tracking the residual\-induced perturbation of the next state\. In practice, however, the residual\-to\-state alignment operator is often difficult to design when the input state and output block have different dimensions, heterogeneous components, or architecture\-dependent layouts\. We therefore use a first\-order local surrogate that penalizes the Jacobian\-vector product of the predictor along the actual feedback perturbation, suppressing precisely the directions through which self\-generated errors remain visible to future predictions\. We further give the same loss a geometric interpretation near a predictive manifold: by controlling residual\-induced directions that probe the normal bundle, the objective yields theoretical conditions under which free\-running trajectories remain inside a stability tube around the manifold\. Experiments on time series forecasting tasks support this view, showing that the proposed regularization improves predictive accuracy\. More broadly, our results suggest a training principle for time\-series forecasters and sequential predictors: a model should not only make small one\-step errors, but also learn not to let its own errors echo into the future\.

## Time–Frequency Non\-Stationary Modeling for Multivariate Time Series Forecasting

**Authors:** Haoyi Zhao; Yishan Jiang; Jiqian Yang; Ji Chang; Dawei Ma; Wenjun Lv

**ID:** 152338 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ToQ5pSsGvK>) | [PDF](<https://openreview.net/pdf?id=ToQ5pSsGvK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152338>)

Multivariate time series forecasting is important in real\-world applications, but practical data often show both temporal and spectral non\-stationarity\. Existing methods may treat severe spectral drift as informative evolution, allow unreliable spectral components to contaminate temporal representations through credibility\-agnostic time\-\-frequency interaction, and infer cross\-variable dependencies from noisy local correlations, which may lead to spurious long\-term dependencies\. To address these issues, we propose TFNS, a dual\-stream time\-\-frequency framework for suppressing unreliable spectral evidence under non\-stationarity\. Specifically, we introduce a Spectral Credibility Estimator to quantify patch\-level spectral stability and softly suppress low\-credibility frequency components for more reliable frequency modeling; a Credibility\-Gated Cross\-Interaction module to enable bidirectional time\-\-frequency enhancement while adaptively constraining cross\-domain information injection according to spectral reliability; and a Spectral Cointegration Graph to capture stable long\-term cross\-variable structure in the spectral domain while mitigating spurious dependencies under non\-stationary drift\. Together, these modules form a progressive pipeline from local spectral purification to reliability\-aware cross\-domain interaction and robust long\-term structure modeling\. Experiments on 11 benchmarks show that TFNS achieves state\-of\-the\-art performance, ranking first in 44/55 MSE and 43/55 MAE comparisons\.

## Rethinking Time Series Tokenization from a Frequency Perspective

**Authors:** Zelong Tian; Ming Jin; Bo Du; Shirui Pan

**ID:** 149503 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pexLx2W7yd>) | [PDF](<https://openreview.net/pdf?id=pexLx2W7yd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149503>)

Tokenization that partitions time series into subsequences has become a foundational paradigm in modern time series modeling\. However, we find that current tokenization strategies inherently introduce spectral distortions, forcing the learned representations to diverge from the true underlying patterns such as trend, periodicity, and seasonality, thereby impairing model performance\. Through theoretical analysis from a frequency perspective, we derive the boundary conditions under which such distortions occur\. To overcome this distortion, we propose \*\*TimeFT\*\*, a nearly distortion\-free frequency\-based tokenizer for time series data\. TimeFT obtains tokens through frequency\-domain partitioning, frequency shifting, and Nyquist sampling\. The method is parameter\-free, incurs negligible computational complexity, and can serve as a drop\-in replacement for existing tokenizers\. Our extensive experiments on diverse tasks such as forecasting, classification, and anomaly detection demonstrate that TimeFT consistently and significantly improves performance\.

## A Scalable Multi\-Task Model for Virtual Sensors

**Authors:** Leon Götz; Lars Frederik Peiss; Erik Sauer; Andreas U Sass; Thorsten Bagdonat; Stephan Günnemann; Leo Schwinn

**ID:** 149834 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mxCxGqU9Yz>) | [PDF](<https://openreview.net/pdf?id=mxCxGqU9Yz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149834>)

Virtual sensors replace expensive physical sensors in critical applications through machine learning by predicting target signals from available measurements\. Existing virtual sensor approaches require application\-specific models with hand\-selected inputs for each sensor, cannot leverage task synergies, and lack consistent benchmarks\. While emerging time series foundation models offer general\-purpose, pretrained solutions in other domains, they are computationally expensive and limited to predicting their input signals, making them incompatible with virtual sensors\. We introduce the first multi\-task model for virtual sensors addressing both limitations\. Our unified model can simultaneously predict diverse virtual sensors exploiting synergies while maintaining computational efficiency\. It learns relevant input signals for each virtual sensor, eliminating expert knowledge requirements while adding explainability\. In our large\-scale evaluation on three standard benchmarks and an application\-specific dataset with over 18 billion samples, our architecture reduces computation time by up to 415x and memory requirements by 951x, while maintaining or even improving predictive quality compared to unified baselines\. Compared to existing isolated models for a single virtual sensor, our unified approach generates superior predictions at similar inference speed while scaling gracefully to hundreds of virtual sensors with nearly constant parameter count, enabling practical deployment in large\-scale sensor networks\.

## A Locally Tokenized Generative Model for Robust Time\-Series Watermarking

**Authors:** Dongbin Kim; Geonwoo Shin; Yujin Choi; Soyeon Park; Jaewook Lee

**ID:** 150316 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j0GmuP3V69>) | [PDF](<https://openreview.net/pdf?id=j0GmuP3V69>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150316>)

Watermarking is a central tool for provenance in generative models, yet its application to multivariate time series remains hindered by reliability failures under post\-editing attacks\. We show that existing detectors, which rely on globally coupled re\-encoding, suffer from bidirectional drift of the null distribution: post\-editing attacks can shift the detection z\-score of non\-watermarked samples in either direction, invalidating clean\-calibrated thresholds\. We argue that this instability is a property of the re\-encoding, and that reliable detection requires each recovered unit to depend only on a bounded temporal neighborhood\. Guided by this principle, we propose L\-VQVAE, a generative model in which each discrete token is produced from a short contiguous window, and LVQMark, a watermarking method over this token space that combines logit\-bias injection with robust re\-encoding for attack\-time detection\. Experiments on four benchmarks spanning finance, energy, and neuroimaging show that our approach preserves generation quality while stabilizing both detection power and false\-positive behavior under post\-editing attacks\.

## "What is Different Between These Datasets?" A Framework for Explaining Data Distribution Shifts

**Authors:** Varun Babbar; Zhicheng Guo; Cynthia Rudin

**ID:** 156666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156666>)

The performance of machine learning models relies heavily on the quality of input data, yet real\-world applications often face significant data\-related challenges\. A common issue arises when curating training data or deploying models: two datasets from the same domain may exhibit differing distributions\. While many techniques exist for detecting such distribution shifts, there is a lack of comprehensive methods to explain these differences in a human\-understandable way beyond opaque quantitative metrics\. To bridge this gap, we propose a versatile framework of interpretable methods for comparing datasets\. Using a variety of case studies, we demonstrate the effectiveness of our approach across diverse data modalities—including tabular data, text data, images, time\-series signals – in both low and high\-dimensional settings\. These methods complement existing techniques by providing actionable and interpretable insights to better understand and address distribution shifts\.

## CREF: Forecasting Benchmarks for the Age of Agents

**Authors:** Andreas Auer; Abdul Fatir Ansari; Oleksandr Shchur; Xiyuan Zhang; Boran Han; Pedro Mercado; Prateek Desai; Yuyang \(Bernie\) Wang; Michael Bohlke\-Schneider

**ID:** 139433 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QrrgR9gtNJ>) | [PDF](<https://openreview.net/pdf?id=QrrgR9gtNJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139433>)

Traditional forecasting evaluations relying on static historical data are fundamentally incompatible with modern AI advances\. Even for standard time series foundation models, temporal overlap between training and test periods can lead to implicit leakage through correlated signals\. This problem is intensified by LLMs, which can bridge semantic gaps between forecasted and related data while memorizing extensive world knowledge\. At the extreme, agentic models with tool access can retrieve the ground truth directly\. Such information leakage inflates performance relative to real forecasting scenarios and is impossible to rule out in historical evaluations\. We introduce CREF, a real\-time benchmark that evaluates forecasting models on data that does not yet exist, eliminating all forms of leakage by design\. CREF balances three competing objectives for real\-time benchmarks: diversity, robustness, and throughput\. It draws data from 32 public APIs and features 50 forecasting tasks with diverse data frequencies, multivariate targets, and covariates, making it the first real\-time benchmark reaching the breadth of leading static benchmarks\. Retrospective evaluation validates that CREF produces rankings consistent with established static benchmarks, while real\-time evaluation reveals qualitative and quantitative performance gaps for agentic and LLM\-based models, confirming leakage on historical data\. CREF runs continuously and is open for new models to join, offering a public leaderboard for contamination\-free model comparison\.

## fev\-bench: A Realistic Benchmark for Time Series Forecasting

**Authors:** Oleksandr Shchur; Abdul Fatir Ansari; Ali Caner Turkmen; Lorenzo Stella; Nick Erickson; Pablo A Guerron; Michael Bohlke\-Schneider; Yuyang \(Bernie\) Wang

**ID:** 139547 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JaKyxCJpoV>) | [PDF](<https://openreview.net/pdf?id=JaKyxCJpoV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139547>)

Benchmark quality is critical for meaningful evaluation and sustained progress in time series forecasting, particularly with the rise of time series foundation models \(TSFMs\)\. Existing benchmarks often have limited domain coverage or overlook real\-world settings such as tasks with covariates\. Their aggregation procedures frequently lack statistical rigor, making it unclear whether performance differences reflect true improvements or random variation\. Many benchmarks lack consistent evaluation infrastructure or are too rigid for integration into existing pipelines\. To address these gaps, we propose fev\-bench, a benchmark of 100 forecasting tasks across seven domains, including 46 with covariates\. Supporting the benchmark, we introduce fev, a lightweight Python library for forecasting evaluation emphasizing reproducibility and integration with existing workflows\. Using fev, fev\-bench employs principled aggregation with bootstrapped confidence intervals to report performance along two dimensions: win rates and skill scores\. We evaluate various models on fev\-bench and find that existing TSFMs often miss accuracy by ignoring covariates, pointing to a clear direction for future work\.

## Beyond Linear Decoders: Dynamic Expert\-Coupled Optimal Decoding for Time Series Forecasting

**Authors:** Binwu Wang; Zhipeng Liu; Zhengyang Zhou; Pengkun Wang; Yang Wang

**ID:** 153816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IVoznSuKtE>) | [PDF](<https://openreview.net/pdf?id=IVoznSuKtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153816>)

Current multivariate time series forecasting methods mainly rely on static linear decoders, but these often suffer from severe representational bottlenecks\. In this paper, we propose a novel architecture called DecodeTS \(\\textbf\{\\underline\{D\}\}ynamic \\textbf\{\\underline\{E\}\}xpert\-\\textbf\{\\underline\{C\}\}oupled \\textbf\{\\underline\{O\}\}ptimal \\textbf\{\\underline\{DE\}\}coder for Time Series Forecasting\), which replaces the conventional static prediction head with a heterogeneous expert library\. DecoderTS adopts a divide\-and\-conquer strategy to disentangle complex temporal dynamics, such as long\-term trends and abrupt changes\. Crucially, we introduce an optimal transport \(OT\)\-based dynamic routing mechanism that can adaptively assign customized combinations of experts to different variables\. By imposing OT marginal constraints, DecoderTS is theoretically proven to achieve collaborative load balancing among experts and effectively eliminate representation collapse\. Extensive experiments on more than \\textbf\{15\} datasets and about \\textbf\{30\} baselines demonstrate that DecoderTS achieves state\-of\-the\-art forecasting accuracy, which delivers a \\textbf\{17\.06\\%\} performance gain while attaining up to about \\textbf\{41×\} inference time speedup and up to \\textbf\{3\.61×\} reduction in memory footprint\.

## Dynamic Dual\-Feedback Conformal Inference for Time Series Forecasting

**Authors:** Songlin Du; Ling Luo; Uwe Aickelin

**ID:** 155680 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3lps4PsA4p>) | [PDF](<https://openreview.net/pdf?id=3lps4PsA4p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155680>)

Quantifying uncertainty in time series forecasting is particularly demanding because sequential data exhibit temporal dependence and are prone to distributional changes\. Conformal inference has emerged as a powerful uncertainty quantification approach through the construction of prediction sets\. Recent advances have introduced online conformal methods that adaptively adjust prediction thresholds through feedback mechanisms\. However, the existing feedback mechanism typically relies solely on miscoverage indicators \(actual feedback\)—whether the true label falls within the interval at each time step—while overlooking the empirical prediction threshold \(estimated feedback\) that is derived from the oracle conformal method\. In this paper, we propose $\\textit\{Dynamic Dual\-feedback Conformal Inference\}$ \(DDCI\), which incorporates a dual\-feedback mechanism consisting of $\\textit\{actual feedback\}$ and $\\textit\{estimated feedback\}$\. The former drives the primary adjustment of the intervals based on true observations, while the latter dampens excessive expansions or contractions by leveraging empirical thresholds from conformal inference during updates\. By balancing these two signals, DDCI achieves more stable and narrower prediction intervals in sequential settings while adhering to the target coverage rate in practice\.

## First\-Token Attraction in Mamba Dynamics

**Authors:** Trinh Nguyen; Duy\-Tung Pham; Minh\-Khoi Nguyen\-Nhat; Hoang\-Son Do; Tan Nguyen; Thieu Vo

**ID:** 149171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sLpGI7l64r>) | [PDF](<https://openreview.net/pdf?id=sLpGI7l64r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149171>)

We study token dynamics in deep Mamba models, with a particular focus on the attracting role of the first token\. Unlike attention mechanisms, where token interactions are governed by positive scalar coefficients, Mamba dynamics involve full matrix\-valued interaction coefficients with no positivity or definiteness guarantees\. This structural difference makes Mamba dynamics substantially harder to analyze and prevents the direct application of existing techniques for attention\-based models\. To overcome this challenge, we introduce a new analytical framework based on a high\-dimensional invariant box and a sharp exit\-time argument, which together recover an effective form of sign\-definiteness\. Using this framework, we characterize the possible limit points of token trajectories and prove explicit exponential convergence rates\. Our analysis reveals that the first token has privileged dynamics: its limiting direction attracts subsequent tokens, inducing token clustering and attention\-sink phenomena in deep Mamba models\. We further show that this attraction mechanism extends to broader sequence dynamics, including state\-space models, causal attention, and classical time\-series models\. Experiments on Falcon\-Mamba\-7B validate our predictions, showing that concentration on the first token increases with depth and dominates in later layers\.

## TimeOperator: A Function\-to\-Function Approach to Time Series Modeling

**Authors:** SheoYon Jhin; B\. Aditya Prakash; Noseong Park

**ID:** 155398 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5xJlZgQDqJ>) | [PDF](<https://openreview.net/pdf?id=5xJlZgQDqJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155398>)

Most time\-series foundation models operate on fixed temporal grids, representing signals as vectors, tokens, or patches and learning maps between discretized observations\.  This grid\-to\-grid view is convenient for standard forecasting, but it is not the natural object for reusable time\-series modeling, where temporal resolution, forecast horizon, and query locations may change across tasks and deployments\. We argue that time\-series foundation models should instead learn sample\-conditioned function\-to\-function operators\. Given finite observations of an underlying signal, such an operator maps the observed context to an output function that can be evaluated at user\-specified times\. We propose \\textbf\{TimeOperator\}, a compact branch\-trunk backbone that realizes this view with a shared context encoder, spectrally informed query features, context\-adaptive trunk parameters, and multi\-basis temporal responses\. Forecasting and imputation are handled by evaluating the same operator on different query sets, while classification reuses the shared context representation\. Across deterministic and probabilistic forecasting, imputation, and classification benchmarks, TimeOperator is competitive with existing time\-series foundation models\. Further analyses show that cross\-frequency and cross\-horizon prediction can be handled by changing only the query set, rather than changing the decoder or relying on post\-hoc resampling\.

## Rethinking Post\-Training Recipes for Multimodal Time\-Series Forecasting

**Authors:** Haoxin Liu; Yichen Zhou; Rajat Sen; B\. Aditya Prakash; Abhimanyu Das

**ID:** 153768 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IoZ46hsiwb>) | [PDF](<https://openreview.net/pdf?id=IoZ46hsiwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153768>)

Time\-Series Foundation Models \(TSFMs\) excel at zero\-shot unimodal forecasting using numerical data, but unlike LLMs they cannot consume multimodal, non\-numerical context that often shape real\-world trajectories\. In this work, we bridge this gap and argue for a multimodal time\-series forecasting approach that post\-trains LLMs to act as context\-guided revisors over strong numerical TSFM priors\. We introduce PostTime, a post\-training recipe combining Supervised Fine\-Tuning \(SFT\) and Reinforcement Learning with Verifiable Rewards \(RLVR\), along with a methodology to generate automated reasoning traces for forecast revisions\. PostTime teaches an LLM  to generate context\-conditioned forecast interventions—decisions to revise, preserve, or ignore the TSFM prior based on the multimodal context\. We evaluate this approach on the TimesX multimodal forecasting benchmark using a Gemma\-3\-4B LLM and TimesFM\-2\.5 TSFM, and show that it significantly outperforms standalone TSFMs, LLM\-only baselines, and existing multimodal forecasting approaches\. Our post\-training recipe including code and dataset, can currently be accessed for review purposes at \\url\{https://anonymous\.4open\.science/status/posttime\-21BF/\}\.

## From Retrieval to Recognition: Knowledge\-Enhanced Foundation Models for Time Series Classification

**Authors:** Zhen Liu; Yucheng Wang; Yingpeng Du; Tianjun Wei; Qianli Ma; Min Wu; Jie Zhang; Zhu Sun

**ID:** 148303 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yqUEv3yP3e>) | [PDF](<https://openreview.net/pdf?id=yqUEv3yP3e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148303>)

Time series foundation models \(TSFMs\) have achieved notable progress in classification tasks through large\-scale pretraining\. However, existing methods rely on implicit parameter fine\-tuning, where task\-relevant information is entangled with abundant irrelevant knowledge in vast parameter spaces\. This may hinder TSFMs from precisely activating useful knowledge for downstream classification\. To this end, we propose REKIN, a plug\-and\-play knowledge\-enhanced framework for time series classification built upon pretrained TSFMs within a retrieval\-to\-recognition paradigm\. Unlike traditional parameter\-only approaches, REKIN introduces a decoupled query encoder to extract discriminative patterns and retrieve instance\-level numerical knowledge from a constructed knowledge base\. The retrieved explicit knowledge is then fused with the TSFM’s implicit parametric embeddings, enabling joint knowledge transfer at both the parameter and feature levels\. In this way, REKIN allows TSFMs to recall task\-relevant patterns learned during pretraining, improving the efficiency of knowledge utilization in downstream transfer\. Experiments on 158 time series datasets show that REKIN consistently improves the classification performance of state\-of\-the\-art TSFMs\. Ablation and knowledge\-enhanced studies further validate the effectiveness of the proposed framework\.

## IMTS\-Tokenizer: Time\-Aware Tokenization for Irregular Multivariate Time Series Forecasting

**Authors:** Bin Xu; Yinghua Li; Linqi Han; Xiaoyu Li; Xinghao Yang; Wei Liu; Yongshun Gong

**ID:** 154661 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ByB7qk2CMI>) | [PDF](<https://openreview.net/pdf?id=ByB7qk2CMI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154661>)

Modeling Irregular Multivariate Time Series \(IMTS\) poses significant challenges due to asynchronous sampling and data sparsity\. While existing methods focus on handling temporal irregularity after encoding, the tokenization stage itself remains underexplored\. We propose IMTS\-Tokenizer, a time aware tokenization framework built on the Irregular\-time\-aware Module \(IRAM\), which employs learnable temporal anchors and Gaussian\-kernel attention to aggregate observations while preserving temporal information\. To improve robustness under sparse and asynchronous sampling, the framework further incorporates Relative Time Feature \(RTF\) for pre\-aggregation temporal encoding, Variable\-Specific Anchor Initialization \(VSA\) for data\-aligned anchor placement, anchor regularization for stable training, and multi\-scale modeling\. Experiments on four benchmarks demonstrate state\-of\-the\-art \(SOTA\) performance, with the best results on seven out of eight metrics and statistically significant aggregate gains\.

## MDK\-MoE: Multi\-view Decomposed Kalman Mixture of Experts Framework for Non\-stationary Time Series Forecasting

**Authors:** Rui Hou; Yao Liu; Ruilin Jiang; Mengyao Lu; Jingbo Wang; Lanyi Zhang; Qiao Liu

**ID:** 151139 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cj2uMjP8zE>) | [PDF](<https://openreview.net/pdf?id=cj2uMjP8zE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151139>)

Non\-stationary time series forecasting \(NTSF\) requires modeling evolving trends and seasonal patterns\. Although linear decomposition operators \(e\.g\., FFT\) help isolate these patterns, they often introduce operator\-dependent biases and idiosyncratic noise\. To address this issue, we propose a novel Multi\-view Decomposed Kalman Mixture of Experts \(MDK\-MoE\) framework, which \\textit\{improves forecasting by strategically integrating multiple complementary, yet biased, linear decompositions\}\. Specifically, a Multi\-view Decomposition \(MVD\) extracts frequency components from three complementary views\. To mitigate view\-specific noise, a Maximizing Mutual Information  \(MMI\) enhances cross\-view consistency, maximizes task\-relevant information across diverse views, and suppresses view\-dependent task\-irrelevant information\. To address the conflicts inherent in multi\-source observations, the efficient Kalman MoE adaptively fuses distinct multi\-view features\. Instead of adopting traditional $O\(d^3\)$ covariance inversion, our learnable Kalman gain design enhances numerical stability and enables reliable state estimation under non\-stationary scenarios\. Extensive experiments on 13 real\-world datasets demonstrate that MDK\-MoE consistently achieves state\-of\-the\-art performance\.

## Spectral Energy Allocation Enables Source\-Free Domain Adaptation in Time Series Forecasting

**Authors:** Zhimin Mei; Gezheng Xu; Mohammad Hossein Moslemi; Ruiyi Fang; Nima Hosseini Dashtbayaz; Ziyan Wang; Jincheng Zhou; Haolin Jiang; Song Tang; Charles Ling; Boyu Wang

**ID:** 154914 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zd8FaFWpx>) | [PDF](<https://openreview.net/pdf?id=9zd8FaFWpx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154914>)

Source\-free domain adaptation \(SFDA\) adapts a pre\-trained source model to an unlabeled target domain without access to source data\. However, existing SFDA studies have predominantly focused on classification tasks, leaving time series forecasting \(TSF\), a fundamentally different problem with continuous outputs and complex temporal dependencies, largely unexplored\. In this work, we identify unique characteristics and key challenges of SFDA in TSF: 1\) forecasting labels correspond to future temporal segments of the same underlying signal, enabling us to split target input and construct a self\-supervised learning task, thereby training an accurate short\-term forecasting model to provide high\-quality pseudo\-labels; 2\) however, such supervision remains inherently \*local\* rather than \*global\* for long\-horizon source model adaptation\. To fill this gap, we propose the notion of Spectral Energy Allocation \(SEA\) pattern, defined over a short\-long signal pair\. The SEA pattern provides a structured correspondence that bridges signals across different temporal horizons, enabling reliable short\-horizon pseudo\-labels to guide long\-horizon adaptation\. Extensive experiments demonstrate that our method substantially outperforms baselines across different forecasting backbones\.

## Discretizing Continuous Time Series for Imputation with Masked Diffusion Training

**Authors:** Dongbin Kim; Seungyun Lee; Geonwoo Shin; Jaewook Lee

**ID:** 149547 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pKTszDf7fn>) | [PDF](<https://openreview.net/pdf?id=pKTszDf7fn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149547>)

Time series imputation is a crucial area for reliable time series analysis, yet it remains challenging due to the complex temporal dynamics and noise of real\-world data\. Existing approaches, however, exhibit two limitations: missing and observed values are embedded within the same representation space without explicit structural separation, and continuous diffusion\-based methods are trained to predict added noise rather than the original signal\. To address these, we propose the Masked Diffusion Time\-series Imputation Model \(MDTIM\), which leverages the training paradigm of masked diffusion model for imputation tasks\. The \\texttt\{\[MASK\]\} token is structurally orthogonal to valid observations, and the model directly predicts the original values, naturally aligning both the representation and the learning objective with the imputation task\. To bridge the gap between discrete masked diffusion and the continuous, ordinal nature of time series, we further introduce Stochastic Discretization, which maps continuous values to ordinal\-aware tokens while preserving continuous dynamics\. Our experiments on diverse benchmarks confirm that MDTIM achieves superior robustness and scalability, consistently outperforming state\-of\-the\-art deterministic and generative baselines across various missing scenarios\.

## ExoC2T: An exogenous\-driven spatio\-temporal learning framework for cross\-city transfer

**Authors:** Hailong Yu; Zhengyang Zhou; Liwen Zhang; Qihe Huang; Kuo Yang; Yudong Zhang; Yang Wang

**ID:** 153717 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JHbypQ7cMg>) | [PDF](<https://openreview.net/pdf?id=JHbypQ7cMg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153717>)

Forecasting spatio\-temporal human mobility is essential for urban infrastructure optimization, yet dense traffic sensing remains prohibitively expensive for many cities\. Existing cross\-city transfer methods and recent spatio\-temporal foundation models usually rely on historical target\-side traffic sequences as the prediction context, which limits their applicability to under\-instrumented, graph\-missing, or newly monitored cities\. We study exogenous\-driven cross\-city transfer, where target traffic must be predicted from static and dynamic exogenous urban context without historical flow input\. This exogenous\-only observability removes the direct endogenous state observation used by flow\-driven predictors and turns cross\-city forecasting into latent traffic\-generating mechanism recovery under city shift\. The key challenge is to recover traffic\-state information from indirect external evidence while organizing cross\-city response patterns into a mechanism space that can adapt to target variation without destabilizing transferable structure\. To address this challenge, we propose \\textbf\{ExoC2T\}, a plasticity\-inspired spatio\-temporal learning framework\. ExoC2T uses an Exogenous\-Infused Spatio\-Temporal Network \(\\textbf\{EXIST\}\) to build an exogenous mechanism substrate, where semantic relations, temporal regimes, and environment\-conditioned responses are organized into a shared prototype geometry\. On this substrate, Stability\-Plasticity Adaptation separates a stable exogenous\-to\-flow core from an adaptive city\-conditioned deviation, infers a support\-conditioned latent posterior from limited target evidence, and controls target risk through invariant discrepancy reduction and posterior correction\. The resulting model preserves transferable exogenous\-to\-flow structure while regulating target\-specific modulation through posterior\-dependent plasticity\. Extensive experiments on a multi\-city benchmark show consistent improvements over strong forecasting and transfer baselines, demonstrating the value of exogenous\-driven transfer for low\-cost and scalable urban computing\.

## Nuwa: Evaluation\-Grounded Agentic Construction of Time Series Forecasting Systems

**Authors:** Fanda Fan; Yuxuan Yang; Xiaorui Wang; Luqi Gong; Xiang Wentao; Xiang Ao; LimingSong; Yinuo Zhu; Yutong Chen; Chunjie Luo; Jianfeng Zhan

**ID:** 153330 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M7a9vo8Nj6>) | [PDF](<https://openreview.net/pdf?id=M7a9vo8Nj6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153330>)

Time series forecasting has recently moved beyond static, single\-pass prediction toward agentic methods that reason, use tools, execute workflows, and accumulate memory\. However, most existing forecasting agents still optimize predictions or pipelines under largely implicit configurations, leaving the construction of the forecasting system itself underexplored\. This limits their ability to attribute performance changes to specific decisions, such as which module, exogenous variable, or hyperparameter caused an improvement\. We propose \*Nuwa\*, an evaluation\-grounded agentic framework for constructing time series forecasting systems\. Nuwa defines a structured design space over modules, exogenous variables, and hyperparameters, and performs Evaluation\-Budgeted Construction that uses data meta\-information, performance diagnostics, and memory to propose candidate sets, select budgeted subsets for controlled evaluation, attribute local effects, and decide whether to stop, accept, retry, switch subspace, or continue construction\. The resulting design\-level evidence is stored in a Design Memory, enabling reusable knowledge about which configurations work under which data conditions\. Across approximately 15,000 experimental runs, Nuwa achieves consistent performance gains across module, exogenous\-variable, and hyperparameter construction, with an overall average MSE reduction of 8\.0\\% over the corresponding reference settings\. By turning forecast\-level feedback into attributable and transferable design evidence, Nuwa makes forecasting system construction an explicit objective for agentic time series forecasting\. The anonymous repository is available at https://anonymous\.4open\.science/r/NUWA/\.

## Parallel Fixed\-Point Spiking Neurons for Efficient Training of Spiking Neural Networks

**Authors:** Qirong Yang; Guowei Peng; Xiurui Xie; Yuning Yang; Qiugang Zhan; Guisong Liu

**ID:** 151458 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aUNVuXFPLe>) | [PDF](<https://openreview.net/pdf?id=aUNVuXFPLe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151458>)

Spiking Neural Networks \(SNNs\) are inherently sequential due to temporal state dependencies, limiting the efficiency of parallel hardware such as GPUs and resulting in high training cost\. In this work, we propose the Parallel Fixed\-Point Spiking Neurons \(PFSN\), which reformulates the dynamics of leaky integrate\-and\-fire neurons into a unified fixed\-point mapping, enabling parallel computation across all time steps\. Unlike conventional sequential unrolling, the proposed formulation decouples temporal dependencies through iterative fixed\-point updates, significantly improving computational efficiency\. Furthermore, we introduce a learnable temporal propagation operator that generalizes predefined dynamics and allows adaptive modeling of task\-specific temporal interactions without relying on explicit temporal recursion\. Extensive experiments across diverse domains, including event\-based recognition, sequential image classification, speech processing, and time\-series forecasting, demonstrate that PFSN consistently achieves superior efficiency while maintaining or improving predictive performance compared to existing parallel SNN approaches\. These results highlight the effectiveness of combining fixed\-point formulations with learnable temporal structures for scalable and efficient SNN training\. Code is available at https://anonymous\.4open\.science/r/PFSN\.

## HAMSTAR: Hamiltonian Structured Inter\-Period Refinement for Long\-Term Time Series Forecasting

**Authors:** Seohyun Kim; Jaeyo Chang; Dong\-Joon Lim

**ID:** 150931 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eEsQ0do6ZT>) | [PDF](<https://openreview.net/pdf?id=eEsQ0do6ZT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150931>)

Periodic structure is a fundamental basis for long\-term time series forecasting \(LTSF\), but real\-world periodic patterns are not simple repetitions\. Variations in level, amplitude, and phase within one period can accumulate across subsequent periods and reshape future periodic structures\. We therefore argue that explicitly modeling inter\-period relations is a core challenge in LTSF\. Existing methods often handle these relations implicitly or rely on unconstrained mixing, where meaningful dependencies can be entangled with noisy interactions\. Simply increasing mixing expressiveness does not resolve this issue\. Motivated by this, we address LTSF through gradual state refinement driven by interactions among periods\. The key challenge is to reinforce meaningful inter\-period dependencies while suppressing noise and maintaining stable representations during repeated refinement\. To this end, we draw inspiration from Hamiltonian dynamics and use its split\-state formulation and symplectic\-style updates as an architectural bias for stable iterative refinement\. We propose HAMSTAR \(HAMiltonian STructured period\-Aligned Representation for time series\), a Hamiltonian\-inspired framework for structured period\-aligned time series forecasting\. HAMSTAR represents time series as period\-aligned latent states, decomposes them into split\-state components, and uses structured inter\-period coupling to transform period relations into refinement signals\. Symplectic\-style updates then progressively refine these states, enabling stable representation dynamics\. Experiments on standard LTSF benchmarks show that HAMSTAR achieves state\-of\-the\-art performance across diverse datasets, and further analyses demonstrate meaningful inter\-period modeling and stable latent dynamics\.

## Active Memory Feedback Loop for Fast–Slow Dynamics in Liquid Neural Networks

**Authors:** Bishal Swain; Joonhyeon Bae; Jaepil Ko

**ID:** 148250 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGqWYYr0Vc>) | [PDF](<https://openreview.net/pdf?id=zGqWYYr0Vc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148250>)

Continuous\-time recurrent models update hidden states as observations arrive, making them suitable for irregular and non\-stationary temporal data\. Liquid Neural Networks \(LNNs\) extend this formulation through input\-dependent state dynamics, but they still rely on a single evolving state to integrate new observations and retain earlier context\. Under long temporal gaps or missing inputs, earlier evidence can weaken as the hidden state continues to evolve\.  We propose Active Memory Feedback Loop \(AMFL\), a memory\-augmented LNN architecture that feeds associative retrieval back into the recurrent computation\. AMFL combines a learned Short\-Term Memory \(STM\) that stores global sequence prototypes with a sequence\-local Iconic Memory \(IM\) that adapts through novelty\-gated, gradient\-free updates\. After each liquid refinement step, IM retrieves an associative representation, forms a residual correction, and writes the correction into a feedback buffer that conditions the following recurrent update\. Memory therefore influences the evolving liquid representation rather than only augmenting the final prediction head\. We evaluate AMFL on seven time\-series benchmarks covering classification, regression, continual learning, and robustness to missing inputs\. AMFL obtains the best result on six of seven benchmarks and remains competitive on the remaining task\. Ablations show that the gains arise from looped memory feedback, controlled IM adaptation, and residual correction\. Additional missing\-input and long\-sequence forecasting experiments further support the role of associative feedback in preserving task\-relevant context under partial observability\.

## Direct Estimation of Schrödinger Bridge Time\-Series Drifts: Finite\-Sample, Asymptotic, and Adaptive Guarantees

**Authors:** Othmane Mazhar; Huyen PHAM

**ID:** 155581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Z2NRZV5nH>) | [PDF](<https://openreview.net/pdf?id=4Z2NRZV5nH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155581>)

We study nonparametric estimation of Schrödinger bridge \(SB\) drifts from i\.i\.d data observed on a single time interval\. Starting from the conditional\-ratio form of the Schrödinger bridge time\-series \(SBTS\) drift formula, we analyze a direct Nadaraya\-\-Watson plug\-in estimator built from kernelized numerator and denominator terms\. Unlike recent SB analyses based on entropic\-OT potentials, Sinkhorn iterations, or iterative bridge solvers, our approach works directly at the drift level and isolates \\emph\{statistical error\} from optimization, approximation, and discretization error\.  Under Hölder regularity, a marginal\-density floor, and bounded support, we prove a uniform non\-asymptotic bound for admissible bandwidth pairs, a pointwise CLT under genuine undersmoothing, and an adaptive bandwidth selector satisfying an oracle inequality\. We also prove a pivot\-local minimax lower bound which, through an explicit uniform pivot, yields a global minimax lower bound under transparent compatibility conditions; hence the adaptive selector is minimax\-rate optimal up to logarithmic factors\. Synthetic experiments provide theorem\-targeted diagnostics for finite\-sample scaling, Gaussian approximation, and adaptive behavior\.

## TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning

**Authors:** Shunyu Wu; Dan Li; Haozheng Ye; Weibin Feng; Jian Lou; Bo Zhang; Wenjie Feng; Chenjuan Guo; See\-Kiong Ng

**ID:** 150288 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jI3LzITbpM>) | [PDF](<https://openreview.net/pdf?id=jI3LzITbpM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150288>)

Assessing the quality of time series \(TS\) data is fundamental yet inherently challenging due to the multifaceted nature of quality dimensions\. Recently, large language models \(LLMs\) have emerged as a promising paradigm for TS quality assessment via pairwise comparison and per\-dimension evaluation\. However, existing approaches rely on manually predefined quality dimensions and purely text\-based reasoning, leaving it unknown whether LLMs can identify truly relevant quality dimensions or perform grounded and quantitative quality comparisons\. To investigate this, we construct TSQBench, a dedicated benchmark for evaluating LLMs’ capabilities in TS quality assessment, which measures two progressive capabilities: \(i\) understanding and identifying relevant quality dimensions, and \(ii\) performing quality comparison under specific dimensions\. Our analysis reveals that both open\-source and proprietary LLMs consistently struggle with identifying critical quality dimensions and conducting precise, evidence\-grounded reasoning over quality characteristics\. To address these limitations, we propose TSQAgent, a novel agentic reasoning framework for dedicated TS data quality rating, comprising three collaborative roles: Perceiver for focused dimension selection, Inspector for dimension\-wise quantitative analysis, and Adjudicator that aggregates and refines the final judgment\. In particular, we introduce an agentic reasoning strategy that instills the ability to identify and prioritize the most relevant quality dimensions, and further propose an agent workflow equipped with external analytical tools to enable precise quantitative comparisons over selected dimensions\. Experiments on both the proposed benchmark and eleven real\-world datasets demonstrate that our framework not only substantially improves LLMs’ capabilities in quality understanding and quantitative comparison but also effectively translates these improvements into better quality\-aware data selection, leading to enhanced downstream performance and data efficiency\.

## Efficient Forecasting of Task Failures in LLM Agents through Adaptive Fault Injection

**Authors:** Vartika Sengar; Parth Thakkar; Pranoy Panda; Shrey Satapara; Emmy Liu; Vijay Viswanathan; Sho Takemori; Graham Neubig; Chaitanya Devaguptapu

**ID:** 149975 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=loCv3Kc6e6>) | [PDF](<https://openreview.net/pdf?id=loCv3Kc6e6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149975>)

LLM agents often execute long\-horizon tasks where sequential tool calls and reasoning steps compound into a final outcome\. When an agent errs mid\-execution, the critical question is not whether an error occurred, but whether recovery under the current policy is still possible\. Existing failure analysis answers this retrospectively, making it too late for runtime intervention\. We introduce Task Failure Forecasting: predicting from a partial execution trace whether continued execution under the current agent policy is likely to fail\. This is hard: human experts achieve only 54\\% accuracy at distinguishing recoverable from failure\-inducing errors, and frontier models such as Claude\-4\.5 Sonnet reach 59\.87\\% weighted F1\. The core obstacle is that failed traces mix recoverable mistakes with fatal ones, obscuring which steps drive downstream failure\. We address this with adaptive fault injection: injects targeted perturbations into successful traces, uses bandit\-based prioritization of high failure yield error types and rollout\-based verification providing policy\-conditioned step\-level supervision\. A lightweight Qwen\-3\-8B model trained on this synthetic data achieves 78\.01\\% weighted F1 on human\-annotated benchmarks, outperforming Claude\-4\.5 Sonnet by 14 weighted\-F1 points at 100$\\times$ lower forecasting cost\. When deployed as a runtime monitor for selective inference\-time intervention, the forecaster improves agent success rates across HotpotQA, MuSiQue, GAIA, AssistantBench, SWE\-Bench, MBPP and EnterpriseBench, yielding absolute gains in the range of 2–16 \\% points across held\-out and unseen tasks\.

## OrangeTree: A Linear and Tree\-based Time Series Forecasting Model Supporting Multiple Input and Output Lengths

**Authors:** Yiqi Tang; Zhichen Lai; Yuxuan Yang; Dalin Zhang; Jinpeng Chen; Gang Chen; Huan Li

**ID:** 151255 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bkKbLYspXv>) | [PDF](<https://openreview.net/pdf?id=bkKbLYspXv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151255>)

Time series forecasting \(TSF\) models suffer from a critical rigidity: the inability to handle Multiple Input and Output Lengths \(MIOL\) within a single architecture\. Current workarounds, such as padding or autoregression, invariably incur computational redundancy or error accumulation\. We propose OrangeTree, a linear and tree\-based architecture that decouples model parameters from sequence lengths\. It employs a Segment Tree Encoder and an Inverse Tree Decoder to translate multi\-length input history into multi\-length output predictions within a unified framework\. Crucially, a Range Weighter and Feature Fuser bridge these components, dynamically selecting and fusing relevant ranges into optimal contexts for forecasting\. Experiments on six benchmarks confirm OrangeTree achieves SOTA performance, reducing MSE by 3\.4\\% compared to the previous SOTA\. In MIOL settings, it matches the accuracy of length\-fixed models without the accuracy degradation and latency increase typical of heuristic methods\. Code is available at https://anonymous\.4open\.science/r/OrangeTreeTSF/\.

## TENET: Time\-point Encoding Network for Multivariate Time Series Anomaly Detection

**Authors:** Dongchan Cho; Juwon Hwang; Keumyeong Kang; Jiho Han; Namsoon Jung

**ID:** 153006 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OfstlhHWVn>) | [PDF](<https://openreview.net/pdf?id=OfstlhHWVn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153006>)

In unsupervised multivariate time series anomaly detection \(MTSAD\), local variation can inflate reconstruction and forecasting errors, making observation\-space discrepancy an unreliable indicator of abnormal system behavior\. Since latent\-space scoring can mitigate this limitation, we reframe one\-class MTSAD as current\-point system\-state compatibility estimation and propose TENET , the T ime\-point E ncoding Net work for Multivariate Time Series Anomaly Detection\. We define the current\-point system state as a latent representation of the target time point, constructed from variable\-level temporal context in the input window\. TENET constructs this state through a temporal layer that retrieves window context relative to the current point, encodes time with current\-point\-centered embeddings, and adaptively mixes the retrieved context with the current representation\. With this design, TENET treats the input window not as the object to reconstruct, forecast, summarize, or score, but as context for constructing a latent representation evaluated with a fixed standard\-normal negative log\-likelihood score\. Across benchmark datasets, TENET achieves state\-of\-the\-art performance\. Additional experiments further show that TENET remains effective under alternative one\-class objectives and outperforms substitutions based on generic sequence encoders, suggesting that its advantage comes from decision\-aligned representation construction rather than from a specialized scoring rule\. These results indicate that one\-class MTSAD can be strong when the latent representation is designed around the current time point\.

## Distilling Multi\-Teacher Scoring Principles for Unsupervised Time Series Anomaly Detection

**Authors:** Dongchan Cho; Jiho Han; Juwon Hwang; Changhee Min; Minsang Kim; Namsoon Jung

**ID:** 151289 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bWTT2NfbCw>) | [PDF](<https://openreview.net/pdf?id=bWTT2NfbCw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151289>)

Time series anomalies take diverse forms, and individual detectors encode different anomaly scoring principles that rarely cover all anomaly types\. Recent unsupervised time\-series anomaly detectors provide complementary scoring signals, yet deploying them as an ensemble preserves the inference and maintenance cost of every individual detector\. We study whether heterogeneous teacher detectors can be distilled into a single lightweight detector in the unsupervised setting, where no anomaly labels are available to define a shared target\. AnoMix addresses this by extracting weak pairwise supervision from the training\-set anomaly scores of frozen teachers\. It normalizes each teacher score sequence independently and trains the student with CoRank, a multi\-teacher ranking\-distillation objective that converts teacher score gaps into pairwise supervision through teacher consensus\. Across seven benchmark datasets, AnoMix successfully integrates complementary teacher scoring principles into a single deployable model, improving over individual detectors and static score ensembles while using a compact student with under 80k parameters on the benchmark settings\. A zero\-shot variant further shows that the distilled ranking signal transfers to unseen datasets and can outperform large pretrained time\-series foundation models for anomaly detection\.

## dStructAD: Domain\-Level Structured Normality Representation with Variation Calibration for Time Series Anomaly Detection

**Authors:** Shiwang Xing; Jianwei Niu; Tao Ren

**ID:** 150983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dn47AFeAiu>) | [PDF](<https://openreview.net/pdf?id=dn47AFeAiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150983>)

Time Series Anomaly Detection \(TSAD\) is critical for ensuring reliability in real\-world systems such as industrial monitoring, healthcare, and online services\. However, learning\-based TSAD methods trained on a single normal\-only TargetSet, namely the target dataset, often suffer from incomplete and biased knowledge of normality, causing domain\-level false alarms when unseen but valid normal patterns appear at test time\. A natural extension is to leverage DomainSet, composed of datasets from one domain, to enrich domain\-level normality\. Yet, our analysis shows that simply incorporating DomainSet could make domain\-admissible normal variations and TargetSet\-specific anomalies highly entangled in the learned representations, weakening anomaly separability\. Motivated by human experts who establish normal patterns, calibrate admissible variations, and identify true anomalies, we propose dStructAD, a domain\-level structured representation framework for time series anomaly detection, to address this challenge\. Specifically, dStructAD first builds structured domain\-level normality based on the Kolmogorov\-Arnold network, and then calibrates admissible variations via two phases\. Phase 1 learns shared domain\-level semi\-structural normality knowledge from DomainSet, while Phase 2 performs structure\-preserving TargetSet calibration to absorb admissible variations without collapsing anomaly separability\. Across six benchmarks, dStructAD delivers consistent improvements over SOTAs, with 3% average gain in overall performance\. Code could be available at \[https://anonymous\.4open\.science/r/dStructAD\-8F03\]\(https://anonymous\.4open\.science/r/dStructAD\-8F03\)\.

## Paloma: Phase\-Conditioned Residual Modulation for Time Series Forecasting

**Authors:** Jingru Fei; Kun Yi; Wei Fan; Qi Zhang; Zhendong Niu

**ID:** 154087 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJqifj1exB>) | [PDF](<https://openreview.net/pdf?id=GJqifj1exB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154087>)

Explicitly modeling periodicity has proven to be an efficient approach for time series forecasting, where the residual, obtained after removing the periodic component from the time series, is typically treated as unstructured noise\. However, in this work, we show that such residuals still exhibit structured, \\textit\{phase\-dependent\} deviations, as supported by both empirical observations and theoretical analysis\. This suggests that residuals should not be treated merely as unstructured noise, but instead as \\textit\{phase\-conditioned signals\} whose variations arise in both direction and magnitude\. Motivated by this perspective and inspired by phase and amplitude modulation in classical signal processing, we propose \\textit\{Paloma\}, a simple yet effective framework for modeling residual deviations\. Specifically, Paloma comprises two complementary modules: \\textit\{a Phase Rotation module\}, which performs phase\-conditioned rotations to capture directional changes in the feature space, and \\textit\{an Amplitude Scaling module\}, which applies phase\-conditioned affine transformations to model magnitude variations\. We further abstract the two modules into a general\-purpose plugin, termed the \\textit\{Paloma technique\}, which can be readily integrated into existing forecasting architectures to modulate input sequences in a phase\-aware manner, enabling backbone models to capture phase\-dependent variations in both direction and magnitude\. Extensive experiments on twelve datasets demonstrate that Paloma achieves state\-of\-the\-art and robust forecasting performance\. Additional results show that the Paloma technique consistently improves a wide range of baseline models, validating its effectiveness as a general\-purpose component\.

## PrismFlow: Residual Dynamics for Flow Matching in Time\-Series Generation

**Authors:** JUNRU ZHANG; Lang Feng; Jinbo Wang; Xu Guo; Yucheng Wang; Han Yu; Min Wu; Yabo Dong; Duanqing Xu

**ID:** 152192 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UrxwEBaiit>) | [PDF](<https://openreview.net/pdf?id=UrxwEBaiit>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152192>)

Generating high\-quality time\-series data is challenging because real\-world signals often exhibit multimodal patterns and multiscale dynamics, including oscillations and high\-frequency variations\. Flow Matching \(FM\) offers an efficient alternative to diffusion models, but practical implementations typically rely on a single finite\-capacity global vector\-field estimator\. In such heterogeneous temporal distributions, distinct regimes may pass through nearby flow states while requiring incompatible conditional velocities\. A monolithic estimator trained with the standard $\\ell\_2$ velocity\-matching objective may therefore learn an overly smoothed approximation of the local transport field\. This estimator\-level smoothing can attenuate branch\-specific dynamics, leading to spectral distortion and poor mode coverage\. To address this, we propose PrismFlow, a new FM method with Koopman\-inspired dynamical experts\. Each expert learns residual corrections in a latent space where local nonlinear temporal evolution can be approximated by linear transitions\. We further propose a confidence\-aware Winner\-Take\-All \(WTA\) objective that updates only the expert best aligned with each sample while masking gradients to the others, encouraging mode\-specific specialization\. During sampling, the selected expert adds a residual dynamical correction to the global transport field, preserving FM stability while recovering fine\-grained and high\-frequency temporal structures\. Across various benchmarks, PrismFlow effectively mitigates the spectral contraction in standard FM and achieves state\-of\-the\-art performance, with a 15\.6\\% gain in Context\-FID and a 38\.6\\% improvement in Discriminative Score, while remaining robust in low\-data settings and effective for forecasting and imputation\.

## ToLD: Efficient Time Series Forecasting via Tokenized Truncated Latent Diffusion

**Authors:** Jiayi Tian; Jiaze Wang; Wenzhe zhao; Tian Xia; Pengju Ren

**ID:** 156116 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Gm2nx7nXH>) | [PDF](<https://openreview.net/pdf?id=0Gm2nx7nXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156116>)

Probabilistic long\-term time series forecasting requires estimating a distribution over future trajectories under practical deployment constraints, where inference latency and stability can be as critical as forecast quality\. Existing diffusion\-based forecasters provide expressive uncertainty modeling, yet their iterative denoising incurs substantial horizon insensitive runtime overhead, which limits real time long\-term use\. In contrast, one\-shot generative models such as VAEs and flows are computationally efficient but often struggle to capture complex multi\-modal structure and heavy tailed uncertainty\. We propose \\textbf\{ToLD\}, an efficient time‑series forecasting framework built upon \\textbf\{to\}kenized truncated \\textbf\{l\}atent \\textbf\{d\}iffusion to enable fast and reliable long term generation\. ToLD adopts a tokenized conditional latent modeling and performs compact token\-wise refinement via a few\-step truncated latent diffusion process, where the diffusion noise is injected in a context\-dependent manner to model non\-stationary uncertainty\. To reduce train test mismatch in multi\-sample forecasting, we further introduce a score distillation scheme that learns a target\-free scoring function for test\-time candidate ranking\. Experiments on eight real\-world datasets show that ToLD improves both point accuracy and probabilistic quality over state\-of\-the\-art, achieving up to \\textbf\{4\.3\\%\} MSE improvement and \\textbf\{19\.3\\%\} CRPS reduction on long\-term tasks with minimal additional inference overhead\.

## TimeTok: Granularity\-Controllable Time\-Series Generation via Hierarchical Tokenization

**Authors:** Seokhyun Lee; Jaeho Kim; Changjun Oh; Mihaela van der Schaar; Changhee Lee

**ID:** 152955 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P8dX5r550k>) | [PDF](<https://openreview.net/pdf?id=P8dX5r550k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152955>)

Time\-series data are inherently multiscale, spanning diverse temporal granularities from coarse trends to fine\-scale dynamics\. However, existing time\-series generative models provide limited control over the temporal granularity of both inputs and outputs, restricting their ability to condition on user\-provided coarse sketches and generate samples at a desired target granularity\. To address this, we introduce TimeTok, a unified framework for Granularity\-Controllable Time\-Series Generation \(GC\-TSG\), which generates time series at $any$ target granularity from $any$ coarser input \(e\.g\., rough sketches\) or without conditioning\. At the core of TimeTok is a hierarchical tokenization strategy that maps time series into an ordered sequence of tokens, from coarse to fine temporal granularity\. Our autoregressive generation process operates across these granularity levels, producing token blocks that are decoded back into continuous time series\. This design naturally enables GC\-TSG within a single framework, where controlling the number of token blocks provides explicit control over output detail\. Experiments show that TimeTok excels at GC\-TSG tasks while achieving state\-of\-the\-art performance in standard generation\. Furthermore, we showcase TimeTok's potential as a foundational tokenizer by training on multiple datasets with heterogeneous temporal granularities, verifying strong transferability that consistently outperforms models trained on individual datasets\. To our knowledge, this is the first unified framework that covers the full generative spectrum for time series, offering a valuable foundation for models that benefit from diverse temporal granularities\.

## Energy\-Based Operator Learning in Function Space

**Authors:** Hong Chul Nam; Jeonghwan Cheon; Jae Mo Shin; Hyun Kwon

**ID:** 153867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I9qAqBoxNx>) | [PDF](<https://openreview.net/pdf?id=I9qAqBoxNx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153867>)

We propose Energy\-Based Operators \(EBOs\), an architecture\-agnostic framework for learning conditional distributions over functions on continuous domains\. An EBO defines a scalar energy over target functions given an input function and induces a probability model through a Gaussian reference\. The resulting score field is obtained as the gradient of the parametrized energy to perform function\-space iterative energy minimization \(EM\)\.  Our model shows strong performance in function generation, such as super\-resolution and forecasting, over various 1D function classes \(oscillations, damping, and Izhikevich\) in comparison with prediction operators and denoising operators over various architecture backbones\. Moreover, it achieves strong performance over PDEs, namely Navier\-Stokes, Darcy flow and Burgers\. Notably, our model successfully detects anomalous functions by automatically assigning high energy without any supervision\.  It enables seizure detection and volatility prediction after learning neural dynamics and market microstructure dynamics without pre\-defined labels during training, highlighting its effectiveness for both learning dynamical systems and detecting functional anomalies arising in scientific simulations\.

## SteerCast: Retrieval\-Based Latent Steering for Decoder\-Only Time Series Forecasting

**Authors:** Van Dai Do; Huu H Nguyen; Minh Hoang Nguyen; Hung Le

**ID:** 154457 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DRNgEw9MBD>) | [PDF](<https://openreview.net/pdf?id=DRNgEw9MBD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154457>)

Time series forecasting aims to predict future values from historical observations and auxiliary features\. We propose \\textbf\{SteerCast\}, a retrieval\-based latent steering method that improves decoder\-only forecaster at inference time, without updating its parameters\. SteerCast constructs a database from the training set by storing a representation of each history window together with a \\emph\{steering vector\} computed in the forecaster's latent space, defined as the difference between representations induced by the ground\-truth continuation and by the model's own prediction\. At test time, SteerCast retrieves nearest neighbors for a query history, aggregates their steering vectors, and injects the resulting signal into the forecaster's hidden states at every step of autoregressive generation, guiding predictions toward trajectories consistent with similar training cases\. Experiments across diverse multivariate benchmarks and multiple horizons show that SteerCast consistently improves forecasting accuracy over the fine\-tuned backbone and retrieval\-based baselines, while requiring no additional training beyond the original fine\-tuning and using only the training set as a retrieval corpus\.

## MESSENGER: Memory\-Enhanced Sequential Scene Flow Estimation via Autoregressive Next\-Frame Forecasting

**Authors:** Jiuming Liu; Jianing Li; Mengmeng Liu; Hongyang He; Hesheng Wang; Per O Kristensson

**ID:** 151929 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wo3mKBsHLA>) | [PDF](<https://openreview.net/pdf?id=Wo3mKBsHLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151929>)

Scene flow can capture low\-level 3D motion displacements in dynamic scenarios\. Early pairwise estimators relying on instantaneous two\-frame motion lack long\-term temporal correlation and also struggle with poor extrapolation ability in future prediction\. Although some recent methods attempt to explore multi\-frame scene flow estimation in a sequence\-to\-sequence manner, they typically suffer from heavy computational overhead with increasing input frames and long\-horizon prediction degradation due to ineffective motion propagation\. To address these problems, we propose a novel memory\-enhanced sequential scene flow pipeline, called MESSENGER\. To sufficiently mine long\-term temporal dependencies naturally within consecutive sequences, a memory buffer is designed by explicitly storing multiple history flow estimates and latent states\. For each input frame, the temporally stored flows and states are correlated and retrieved to predict the current initialized flow in a next\-frame forecasting manner\. Furthermore, we develop an uncertainty\-aware reweighting module to filter unreliable retrievals and mitigate accumulated errors\. Extensive experiments on nuscenes and Argoverse 2 demonstrate state\-of\-the\-art performance of our MESSENGER, reducing EPE3D by 71\.6% on nuScenes and 67\.7% on Argoverse 2 in long\-horizon future extrapolation\. This superiority can be attributed to our designed autoregressive forecasting paradigm, which naturally forces the network to progressively learn the next\-frame distribution based on history observations\. Code will be released upon publication\.

## Visual Anchoring for Scenario\-Guided Forecasting

**Authors:** Patara Trirat; Jay Heo; Heejun Lee; Sung Ju Hwang

**ID:** 151190 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cINiv4G0rX>) | [PDF](<https://openreview.net/pdf?id=cINiv4G0rX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151190>)

A multimodal large language model \(MLLM\) forecaster takes a forward\-looking scenario as a soft constraint that decays with horizon\. The decay is expected, but its rate is uncharacterized and untunable at inference time\. A practitioner running a twelve\-month stress test cannot tell whether the scenario binds for twelve months or twelve days\. Existing accounts of autoregressive error, such as exposure bias and hallucination snowballing, bound a single rollout against ground truth and offer no inference\-time lever\. Under three assumptions, we prove a closed\-form Lipschitz upper envelope on the per\-step scenario drift between two paired\-seed forecasts differing only in scenario text\. Two identifiable parameters partition behavior into bounded, linear, and exponential regimes\. A sister within\-chunk bound holds under any chunk partition\. It motivates a stabilization heuristic that we test and falsify: periodic re\-injection of the scenario enlarges drift relative to a single injection, and length\-matched random text shrinks it\. The envelope is respected; the heuristic is not\. A pre\-registered attention diagnostic across the open\-weight panel returns architecturally heterogeneous verdicts that the recurrence framing covers uniformly while no single attention\-dilution mechanism does\. In place of text re\-injection, we propose \*\*\*Visan\*\*\* \(\*\*\*Vis\*\*\*ual \*\*\*An\*\*\*choring\), a chart\-anchored multimodal prompt that renders the lookback, the scenario, and the historical context as a single image\. Across a panel of MLLMs and two long\-horizon scenario\-conditioned forecasting benchmarks, \*Visan\* reduces forecast error on the majority of MLLMs\.

## Closing the Loop: Co\-Evolving EM for Irregular Time Series Generation in Lifted Representations

**Authors:** Idan Arbiv; Gal Fadlon; Omri Azencot

**ID:** 155475 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5KWVTlOIK4>) | [PDF](<https://openreview.net/pdf?id=5KWVTlOIK4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155475>)

Regular time\-series generation from irregular time series is typically reduced to one\-shot imputation: complete each partial sequence once, freeze the completions, and train a generator on the resulting surrogate dataset\. We show that this open\-loop strategy is structurally flawed\. Point imputers collapse ambiguous missing regions to conditional averages, while stochastic imputers become stale as the generator evolves; the binding constraint is therefore iteration, not imputer design\. We introduce a co\-evolving Monte Carlo EM framework that closes the imputer\-\-generator loop\. Each E\-step samples missing values from the posterior of the current generator, and each M\-step retrains the generator on these completions, preserving unconditional generator training\. Since our diffusion prior operates in a lifted 2D representation while observations live in time\-series space, we further introduce Posterior Sampling for Lifted Representations \(PSLR\), which enforces operator\-consistent conditioning, uncertainty preservation, and manifold consistency during the E\-step\. Across nine datasets and four corruption regimes, our method achieves state\-of\-the\-art performance, improving over the strongest baselines by 59\\% in discriminative score, 15\\% in predictive score, 73\\% in Context\-FID, and 71\\% in feature\-correlation error\. Ablations show that our approach reduces average discriminative score by 73\\% over single\-step baselines, closing most of the remaining gap to the clean\-data oracle\.

## Retrieval Over Training: Similarity search\-based Model Selection for Time Series Anomaly Detection

**Authors:** Christos Panourgias; Roberto Stanzione; Adrien Petralia; Themis Palpanas; Paul Boniol

**ID:** 151927 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WpZao8pAB7>) | [PDF](<https://openreview.net/pdf?id=WpZao8pAB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151927>)

Anomaly detection is a fundamental task for time\-series analytics, with important implications for the downstream performance of many applications\. Despite the large number of anomaly detection methods proposed in the literature, recent benchmark studies have shown that no single detector performs best across highly heterogeneous time series\. Therefore, a practical and scalable solution is to develop a model\-selection method that, for a given time series, selects the anomaly detector most likely to perform well\. Nevertheless, the model selection approach proposed in the literature suffers from a significant drop in accuracy when applied in Out\-of\-Distribution \(OOD\) settings\. In this paper, we tackle the aforementioned limitation and propose \\textbf\{\\textsc\{RAMSAD\}\}, a train\-free, retrieval\-based framework for model selection in time\-series anomaly detection\. Given a new time series, our method queries a knowledge base of previously observed instances, retrieves the top\-$\{k\}$ most similar series, and transfers detector recommendations from their performance profiles\. The framework can operate with standard similarity measures as well as embedding\-based representations\. Overall, we demonstrate that similarity\-based retrieval constitutes a strong and efficient foundation for model selection in time\-series anomaly detection\.

## Predictive Surprise as Self\-Grounding Concept Bottleneck for Interpretable Time Series

**Authors:** Sachith Abeywickrama; Emadeldeen Eldele; Min Wu; Xiaoli Li; Chau Yuen

**ID:** 153183 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NCEfKQNRfK>) | [PDF](<https://openreview.net/pdf?id=NCEfKQNRfK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153183>)

Time\-series classifiers deployed in risk\-sensitive domains such as healthcare, wearable sensing, and industrial monitoring must be accurate, interpretable, and capable of abstaining when evidence is weak\. No existing method delivers all three, and the obstacle is structural, rather than logistical\. Meaningful temporal patterns cannot be defined without knowing segment boundaries, yet meaningful boundaries cannot be placed without knowing which patterns to expect\. Existing approaches break this circularity through fixed windows or expert\-annotated vocabularies, sacrificing at least one of the three properties\. We introduce ConceptTime, which closes the loop through a single self\-supervised signal\. A frozen probabilistic forecaster predicts a distribution over the next observation at every timestep of the sequence\. We call the mismatch between its prediction and the realized signal, the predictive surprise\. This signal both locates segment boundaries and characterizes each resulting segment through the forecaster's own predictive statistics\. Segments are thus grounded by \\emph\{how\} they behaved relative to expectation, not by what they look like\. These summaries cluster into a vocabulary of dynamical regimes that we call concepts\. The vocabulary distinguishes calm\-after\-spike from calm\-after\-calm, and unifies visually distinct segments that violate expectation in the same way\. A lightweight head classifies from the concept sequence, and the distance to the nearest concept yields per\-input reliability for free\. Across seventeen UEA, human\-activity, biomedical, and fault\-diagnosis benchmarks, ConceptTime matches state\-of\-the\-art black\-box accuracy, beats every interpretable baseline, and retains near 98% accuracy on Epilepsy with 1% of labels\. It equals or exceeds softmax, prototype\-distance, and SHAP/TimeX/TimeX\+\+ on OOD detection and deletion\-faithfulness, without a single annotation, language\-model call, or domain expert\.

## SDFlow: Similarity\-Driven Flow Matching for Time Series Generation

**Authors:** Wei Li; FENG SHIBO; Pengcheng Wu; Xingyu Gao; Min Wu; Peilin Zhao

**ID:** 150124 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kVQQScjr8o>) | [PDF](<https://openreview.net/pdf?id=kVQQScjr8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150124>)

Vector quantization \(VQ\) with autoregressive \(AR\) token modeling is a widely adopted and highly competitive paradigm for time\-series generation\. However, such models are fundamentally limited by exposure bias: during inference, errors can accumulate across sequential predictions, leading to pronounced quality degradation in long\-horizon generation\. To address this, we propose \*\*SDFlow\*\* \(\*\*S\*\*imilarity\-\*\*D\*\*riven \*\*Flow\*\* Matching\), a non\-autoregressive framework that operates entirely in the frozen VQ latent space and enables parallel sequence generation via flow matching\. We tackle three key challenges in making this transition: \(1\) eliminating exposure bias by replacing step\-wise token prediction with a global transport map; \(2\) mitigating the high\-dimensionality of VQ token spaces via a low\-rank manifold decomposition with a learned anchor prior over the latent manifold; and \(3\) incorporating discrete supervision into continuous transport dynamics by introducing a categorical posterior over codebook indices within a variational flow\-matching formulation\. Extensive experiments show that SDFlow achieves state\-of\-the\-art performance, improving Discriminative Score and substantially reducing Context\-FID, particularly for challenging long\-sequence generation\. Moreover, SDFlow provides significant inference speedups over autoregressive baselines, offering both high fidelity and computational efficiency\.  Code is available at \*https://anonymous\.4open\.science/r/SDFlow\-D6F3/\*

## Calibrating Scientific Foundation Models with Inference\-Time Stochastic Attention

**Authors:** Akash Yadav; Taiwo Adebiyi; Ruda Zhang

**ID:** 153839 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ILRMadoCwR>) | [PDF](<https://openreview.net/pdf?id=ILRMadoCwR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153839>)

Transformer\-based scientific foundation models are increasingly deployed in high\-stakes settings, but current architectures give deterministic outputs and provide limited support for calibrated predictive uncertainty\. We propose Stochastic Attention, a sample average lightweight inference\-time modification that randomizes attention by replacing softmax weights with normalized multinomial samples controlled by a single concentration parameter, and produces predictive ensembles without retraining\. To set this parameter, we introduce a calibration objective that matches the stochastic attention output with the target, yielding an efficient univariate post\-hoc tuning problem\. We evaluate this mechanism on scientific foundation models for weather and time\-series forecasting, as well as several regression tasks\. Across benchmarks against uncertainty\-aware baselines, we find that Sample Average Stochastic Attention achieves the strongest native calibration and the sharpest prediction intervals at comparable calibration, with adaptation costs nearly three orders of magnitude lower than the next\-best baseline\.

## Imagine, Don't Narrate: The Generative Bottleneck in World Models of Interaction Dynamics

**Authors:** Daniel Platnick; Marjan Alirezaie; Hossein Rahnama

**ID:** 150345 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ipFW6QeUtY>) | [PDF](<https://openreview.net/pdf?id=ipFW6QeUtY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150345>)

Modern AI agents can plan, reflect, reason, and act over long\-horizon digital tasks\. Even so, they cannot plan to steer a social interaction in real time\. Doing so requires anticipating how latent factors like trust and resistance will evolve under the agent's actions, fast enough to plan within a conversational turn\. Generative world models approach this by narrating possible futures, but autoregressive text generation is both too slow for real\-time planning and fundamentally lossy\. Representation\-predictive methods can be superior, but are underexplored for interaction\. We build LID\-Bench, the first controlled testbed with oracle latent states for interaction dynamics, enabling systematic comparison of generative and representation\-predictive world models against known dynamics\. A bottleneck decomposition on three generative models spanning 117M\-\-350M parameters reveals that all learn interaction dynamics internally, with text\-rendering signal losses of 89\-\-100\\% observed by horizon $k\{=\}5$\. Our representation\-predictive model \(Social\-JEPA, 125M params, 500K trainable\) bypasses text entirely, forecasting latent dynamics $2\.8$\-\-$3\.9\\times$ more accurately while performing rollouts $1\{,\}059$\-\-$2\{,\}314\\times$ faster\-\-\-making real\-time planning within conversational turn\-taking latencies feasible\.

## Does Synthetic Data Help? Empirical Evidence from Deep Learning Time Series Forecasters

**Authors:** Hugo Cazaux; Eyjolfur Asgeirsson; Hlynur Stefansson

**ID:** 154722 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BUZncgztnb>) | [PDF](<https://openreview.net/pdf?id=BUZncgztnb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154722>)

Synthetic data has transformed language model training, yet its role in time series forecasting remains poorly understood\. We present a large\-scale empirical study: nine experiment groups, 4,218 runs systematically evaluating synthetic time series augmentation across five architectures, four synthetic signals and seven datasets\. The effect is sharply architecture\-conditional: channel\-mixing models \(TimesNet, iTransformer\) benefit in the majority of trials, while channel\-independent models \(DLinear, PatchTST\) are consistently degraded\. In selected low\-resource settings the gains are striking: TimesNet trained on only 10\\% of Weather data with synthetic augmentation surpasses the full\-data baseline \(4 of 16 sparsity\-dataset combinations\)\. Averaged across all architectures, augmentation hurts in 67\\% of trials\. We further find that only the Seasonal\-Trend generator reliably helps across the tested benchmarks, and that hard curriculum switching is actively harmful \(\+24\\% MSE degradation\)\. These results provide concrete, actionable guidelines on how to use synthetic data: use synthetic augmentation with channel\-mixing architectures, use gradual annealing schedules, and treat low\-resource augmentation as architecture\- and dataset\-dependent\. Code is available at an \\href\{https://github\.com/anonmirror/synthetic\-timeseries\}\{anonymized repository\}\.

## Time series analysis with Gumbel dynamics

**Authors:** Yiliu Wang; Timothy Kim; Eric Todd SheaBrown; Uygar Sümbül

**ID:** 155395 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5yhfHMgZZG>) | [PDF](<https://openreview.net/pdf?id=5yhfHMgZZG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155395>)

Switching dynamical systems can model complicated time series data while maintaining interpretability by inferring a finite set of dynamics primitives and explaining different portions of the observed time series with one of these primitives\. However, due to the discrete nature of this set, such models struggle to capture smooth, variable\-speed transitions, as well as stochastic mixtures of overlapping states \(e\.g\., non\-instantaneous state transitions\), and the inferred dynamics often display spurious rapid switching on real\-world datasets\. Here, we propose the Gumbel Dynamical Model \(GDM\)\. First, by introducing a continuous relaxation of discrete states and a different noise model defined on the relaxed\-discrete state space via the Gumbel distribution, GDM expands the set of available state dynamics, allowing the model to approximate smoother and non\-stationary ground\-truth dynamics more faithfully\. Breaking from established literature, this new class directly links states to observations and does not blur latent dynamics with Gaussian noise\. Second, the relaxation makes the model fully differentiable, enabling fast and scalable training with standard gradient descent methods\. We validate our approach on standard simulation datasets and highlight its ability to model soft, sticky states and transitions in a stochastic setting\. Furthermore, we apply our model to two real\-world datasets, demonstrating its ability to infer interpretable states in stochastic time series with multiple dynamics, a setting where traditional methods often fail\.

## ClinStab: Stability\-Oriented Learning for Medical Time Series via Dual\-Stream Alignment

**Authors:** Songning Lai; Haoxuan Xu; Yi Liu; Wenshuo Chen; Ninghui Feng; Jiayu Yang; Haoang Li; Yutao Yue

**ID:** 149545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pLj36IwQSC>) | [PDF](<https://openreview.net/pdf?id=pLj36IwQSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149545>)

Deep models for medical time series can achieve strong benchmark accuracy yet remain brittle under acquisition artifacts, physiological variability, and low\-resource training conditions\. We present \\textbf\{ClinStab\}, a Medformer\-based framework for EEG and ECG classification that studies whether channel\-aware dual\-stream interaction and perturbation\-aware optimization can improve the clean/robustness tradeoff\. The proposed \\textbf\{S\}alience\-\\textbf\{C\}ontext \\textbf\{D\}ual \\textbf\{M\}odulation \(SCDM\) module uses energy as a routing prior: high\-energy channel\-aligned components receive attentive modeling, while residual components remain trainable through a lightweight context pathway\. ClinStab then combines clean supervision, perturbed supervision, prediction consistency, and teacher\-guided stabilization under adversarial perturbations\. Across four public datasets and 11 baselines, ClinStab improves accuracy over Medformer on all datasets and improves selected robustness metrics under the perturbation settings studied here, while exposing tradeoffs on PTB ranking metrics and soft\-routing alternatives\. These results support ClinStab as a practical same\-backbone stability intervention, not as evidence of universal clinical robustness\.

## Tokenization and Architecture Jointly Allocate Component Roles in Time Series Transformers

**Authors:** Mingyu Kim; Doguk Kim

**ID:** 154486 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DF6i5h0EXW>) | [PDF](<https://openreview.net/pdf?id=DF6i5h0EXW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154486>)

Time series transformers have achieved strong forecasting performance, yet fundamental questions about their internal mechanisms remain unanswered: among self\-attention and feed\-forward networks \(FFN\), which component constructs temporal features? Why does a simple linear model outperform transformers? Why does patching help? We propose a temporal probing framework consisting of 15 token\-level diagnostic tasks to trace information flow across transformer components\. Applied to 5 architectures across 8 benchmarks, we find that temporal feature construction is not inherently tied to any single component—it emerges from the interaction between tokenization strategy and architectural design\. In PatchTST, FFN dominates feature construction across all 8 datasets, with a $3\.2\\times$ mean ratio over attention\. Even when attention is completely removed, FFN's feature construction capability is preserved or enhanced, indicating that attention is not essential for temporal feature construction\. Conversely, iTransformer's variate\-level attention dominates over FFN, and CATS's cross\-attention is responsible for nearly all feature transfer\. Point\-wise tokenization \($P=1$\) structurally deactivates FFN, explaining why early transformers lagged behind linear models\. These findings unify contradictory results across DLinear, PatchTST, attention\-free models \(TSMixer, PatchMLP\), and CATS within a single framework\.

## SpikeSTAG: A Dendritic Compartmental Spiking Graph Network for Multivariate Time\-Series Forecasting

**Authors:** Bang Hu; Changze Lv; Junyi Wang; mingjieli; Xiaoqing Zheng; Fan Zhang; wei cao

**ID:** 153490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L0HRufAy5B>) | [PDF](<https://openreview.net/pdf?id=L0HRufAy5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153490>)

Spiking Neural Networks \(SNNs\) offer a distinctive paradigm for temporal modeling through their intrinsic membrane potential dynamics\. However, existing SNN\-based forecasting methods focus exclusively on temporal processing, lacking mechanisms to capture spatial dependencies among variables\.  To bridge this gap, we propose SpikeSTAG, a neuromorphic spatiotemporal architecture that integrates graph\-based spatial reasoning into spike\-driven temporal computation\. Central to our approach is the Dendritic Graph Module, which reinterprets spectral graph convolutions as biological dendritic integration \-\- coupling multi\-scale spatial aggregation with the temporal dynamics of spiking neurons within a single computational unit\. To adaptively fuse the resulting spatial and temporal representations, we further  introduce a Dual\-Stream Integration Module that employs competitive gating and  coincidence\-based amplification,  selectively enhancing consistent spatiotemporal patterns while suppressing conflicting noise\.  Extensive experiments demonstrate that SpikeSTAG establishes a new state\-of\-the\-art among SNN\-based models and surpasses representative ANN baselines, while reducing theoretical energy consumption by approximately 33\.3\\% compared to Transformer architectures\.

## XTraj: A Coarse\-to\-Fine Autoregressive Framework for Transferable Trajectory Generation

**Authors:** wang chao; ZHIQUAN LAI; Xinwei Fang; Yuanshao Zhu; Xun Zhou; James Yu

**ID:** 153554 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXGb143xQb>) | [PDF](<https://openreview.net/pdf?id=KXGb143xQb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153554>)

Generating realistic human trajectories is essential for mobility simulation but remains challenging when they must generalize across cities and respect road network constraints\. In practice, existing methods often suffer from three key limitations: geographic overfitting, length\-rigid generation, and off\-road drift when generating GPS coordinates directly\. To address these issues, we propose \\textbf\{XTraj\}, a transferable coarse\-to\-fine autoregressive framework for road\-consistent trajectory generation\. Specifically, XTraj first learns transferable road\-segment representations by integrating road geometry, POI context, historical traffic intensity, and graph topology\.  Based on these representations, it then autoregressively generates variable\-length road\-segment routes under road\-connectivity constraints\.  Finally, instead of directly regressing latitude\-longitude coordinates, XTraj further refines each generated route in a route\-progress space by predicting monotonic progress increments along valid road geometry, from which GPS points are recovered by interpolation\. This route\-aligned design naturally supports variable\-length GPS generation and guarantees road\-geometry consistency by construction\.  Experiments on two real\-world vehicle trajectory datasets show that XTraj improves spatial fidelity over competitive baselines, transfers effectively to unseen cities in a zero\-shot setting, and ensures road\-geometry consistency by construction without any post\-hoc map matching\. The implementation is provided in \\textbf\{https://anonymous\.4open\.science/r/XTraj\-EBE7/\}\.

## MSAR: Next\-Scale Autoregressive Forecasting for Time Series via Modular Multi\-Scale Decoupling

**Authors:** Fanda Fan; Kuiye Ding; Liming Mao; Wang Bingsong; Yao Wang; Xiaorui Wang; Ruijie Jian; Zhipeng Liu; Luqi Gong; Zhenghua Lu; Chunjie Luo; Jianfeng Zhan

**ID:** 149231 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ryJy1ZX3II>) | [PDF](<https://openreview.net/pdf?id=ryJy1ZX3II>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149231>)

Time series forecasting underpins critical applications in finance, energy, healthcare, and transportation\. Although deep models have achieved strong results, most adopt single\-scale modeling or restrict multiscale processing to the input side, causing a misalignment between multiscale inputs and single\-scale outputs and limiting predictive power\. We introduce the Modular Scale\-wise Autoregressive Framework \(MSAR\), a model\-agnostic design that forecasts progressively across multiple temporal resolutions\. MSAR offers three advantages: \(1\) scale\-wise aligned modeling, which disentangles heterogeneous temporal patterns by aligning inputs and outputs at each scale; \(2\) scale\-wise autoregression, where coarse\-scale predictions guide finer\-scale forecasting through hierarchical information flow; and \(3\) a modular architecture, enabling seamless integration with diverse backbones such as CNNs, MLPs, and Transformers\. Extensive experiments across a broad set of datasets and forecasting models demonstrate that MSAR achieves consistent improvements in both accuracy and inference efficiency, validating the effectiveness of scale\-aligned autoregression for multiscale time series forecasting\.

## HyFAD: Hybrid Time\-Frequency Diffusion with Frequency\-Aware Embedding for Time Series Imputation

**Authors:** Hongfan Gao; Wangmeng Shen; Bin Yang; Jilin Hu

**ID:** 150001 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lWM3u6LGyO>) | [PDF](<https://openreview.net/pdf?id=lWM3u6LGyO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150001>)

Diffusion models have demonstrated strong performance in time series modeling due to their ability to progressively capture complex data distributions through iterative denoising\. However, existing approaches struggle with frequency\-sensitive denoising, high\-frequency reconstruction and balancing global trends with local dynamics\. To address these limitations, we propose \\textbf\{HyFAD\}, a \\textbf\{Hy\}brid time\-frequency \\textbf\{D\}iffusion model with \\textbf\{F\}requency\-\\textbf\{A\}ware embedding for time series imputation\. Built upon the DDPM paradigm, HyFAD adopts a coupled time\-frequency diffusion framework, in which the reverse denoising proceeds sequentially from the time domain to the frequency domain, enabling coarse\-to\-fine generation\. Specifically, the time\-domain diffusion process captures low\-frequency global trends, while the frequency\-domain diffusion process refines high\-frequency spectral components\. We further introduce a frequency\-aware step embedding that exploits the relationship between diffusion steps and spectral components, providing step\-dependent spectral guidance and facilitates more accurate band\-wise reconstruction\. Extensive experiments on multiple benchmark datasets demonstrate that HyFAD achieves state\-of\-the\-art performance\. Our source code is available at \\url\{https://anonymous\.4open\.science/r/HyFAD\-0C21/\}\.

## EO\-WM: A Physically Informed World Model for Probabilistic Earth Observation Forecasting

**Authors:** Junwei Luo; Shuai Yuan; Zhenya YANG; Yansheng Li; Zhe Liu; Hengshuang Zhao

**ID:** 153039 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUSDMTfzLA>) | [PDF](<https://openreview.net/pdf?id=OUSDMTfzLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153039>)

Earth Observation \(EO\) forecasting aims to predict future Earth surface dynamics from satellite observations under changing meteorological conditions\. In this paper, we view this task as a partially observed, weather\-driven world modeling problem, in which weather acts as a conditioning signal, while forecasting remains uncertain due to sparse observations and unobserved land\-surface states\. However, existing methods do not fully capture this setting: deterministic models collapse uncertainty into a single future prediction, while diffusion\-based methods typically treat weather variables as undifferentiated conditioning signals, and existing benchmarks focus mainly on reconstruction accuracy rather than whether forecasts respond correctly to changed weather forcing\.  We introduce EO\-WM, a video diffusion transformer for multispectral EO forecasting\. EO\-WM incorporates a physically informed conditioning framework that represents meteorological forcing through a climatological baseline, weather anomalies, and cumulative physical stress signals\. Specifically, it separates baseline and anomaly through distinct conditioning pathways, and accumulates anomalous forcing over time to capture sustained heat and drought stress\. To evaluate weather\-response behavior beyond standard metrics, we introduce two diagnostic benchmarks: an Extreme Summer Benchmark for severity\-aware prediction of vegetation degradation under extreme weather, and a Seasonal Matched\-Pair Benchmark for testing response fidelity under changed weather forcing\. Experiments show that EO\-WM reduces the error in predicted Normalized Difference Vegetation Index \(NDVI\) decline amplitude by a relative 5\.63\\% and improves directional hit rate by a relative 7\.80\\%, while remaining competitive on standard pixel\-level metrics\.

## Learning the Context of Errors: Black\-Box Online Adaptation of Time Series Foundation Models

**Authors:** Xilin Dai; Yiding Liu; Hongjie Xia; Yifan Hu; Zewei Dong; Jiang\-Ming Yang; Qiang Xu

**ID:** 150616 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gofrLViPFH>) | [PDF](<https://openreview.net/pdf?id=gofrLViPFH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150616>)

The rapid evolution of Time Series Foundation Models \(TSFMs\) has advanced zero\-shot forecasting across diverse domains\. Inspired by the current form of Large Language Models, future TSFMs may be offered as commercialized, closed\-source API services\. However, many existing online adaptation methods still rely on white\-box access for parameter fine\-tuning or gradient backpropagation\. This paradigm mismatch raises a question: \*In black\-box online adaptation for TSFMs, what should we learn?\* We answer this with an insight: the predictive errors of the base model are conditioned on both the input and output of the base model \(i\.e\., the context of errors\)\. To validate this insight, we propose \*\*ORCA\*\* \(Online Residual Contextual Adaptation\)\. We conduct extensive experiments across 5 state\-of\-the\-art TSFMs and 8 datasets to demonstrate the effectiveness of our approach\. Furthermore, through ablation studies, we quantitatively analyze the impact of different adapter learning hypotheses on the final adaptation performance in black\-box online adaptation\. Code available at https://anonymous\.4open\.science/r/ORCA1/\.

## A Minimal Interpretable Architecture for Zero\-Shot Reconstruction of Dynamical Systems

**Authors:** Christoph Jürgen Hemmer; Florian Plaswig; Daniel Durstewitz

**ID:** 153946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HNtohc9Bxl>) | [PDF](<https://openreview.net/pdf?id=HNtohc9Bxl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153946>)

Recent foundation models \(FMs\) for zero\-shot reconstruction of dynamical systems \(DS\) achieve strong out\-of\-domain generalization but provide little insight into the \*mechanisms\* that underlie their forecasts\. Such an understanding could help to strip down overladen FM architectures to their bare essence and expose the minimal requirements for in\-context learning in the DS domain\. Toward this goal, here we iteratively reduce a recent powerful SOTA model for DS reconstruction, DynaMix \(Hemmer &amp; Durstewitz, 2025\), to a minimal interpretable two\-parameter form, which we call \*DynaBase\*\. DynaBase produces forecasts through a linear blend of the current latent state and the nearest in\-context neighbor and its temporal successor\. Surprisingly, despite its extreme simplicity, DynaBase produces highly competitive zero\-shot DS reconstructions across chaotic and cyclic systems, with a negligible parameter load, many orders of magnitude below that of other FMs\. Even more, this extreme simplicity permits direct model optimization on DS reconstruction measures, as well as closed\-form one\-step analytical solutions on prediction MSE\. Theoretical and empirical analysis of DynaBase further leads to a 1\-parameter family of maps, with the context\-parroting algorithm of \(Zhang &amp; Gilpin, 2026\) recovered at one end, and chaotic \(divergent but bounded\) behavior at the other\. We further show how different training strategies lead to models either optimal for short\-term prediction or for DS reconstruction\. Thus, DynaBase not only exposes the minimal mechanisms required for producing zero\-shot DS reconstruction, but also reconciles within an accessible mathematical frame divergent observations in the literature\.

## Decomposing Temporal and Job\-Induced Dynamics for Probabilistic Computing Workload Forecasting via Graph\-Conditioned Dual\-Branch Diffusion

**Authors:** Baozhen Luo; Minbo Ma; Honglin Zhang; Yuan Yuan; Quanlu Zhang; Baodong Wu; Yong Li

**ID:** 152921 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PQGRbKCkdM>) | [PDF](<https://openreview.net/pdf?id=PQGRbKCkdM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152921>)

Workload forecasting is a fundamental task to realizing electricity\-computing synergy in modern data centers, where operational planning must account for the risk induced by fluctuating computing demand\.  Yet production workloads exhibit substantial volatility, making deterministic point forecasts insufficient for uncertainty\-aware decision making\.  Existing methods mainly model workload uncertainty from temporal correlations in utilization traces, overlooking the job\-induced cross\-machine dependencies shaped by the scheduling layer\.  We empirically find that workload volatility exhibits structured and time\-varying cross\-machine patterns whose strength aligns with job co\-occurrence\.  This observation motivates GD\-Diff, a job\-aware graph\-conditioned diffusion framework for probabilistic workload forecasting\.  GD\-Diff constructs a job\-induced weighted dynamic graph from scheduling logs, transforming job co\-occurrence into time\-varying inter\-machine dependencies\.  Built on this graph, GD\-Diff uses a dual\-branch noise prediction network within the diffusion process, where the temporal branch captures regular temporal evolution and the graph branch models job\-induced dynamics\. Experiments on Alibaba and Google cluster traces show that GD\-Diff achieves state\-of\-the\-art performance in both point and probabilistic forecasting, and ablation studies further validate the job\-induced dynamic graph and dual\-branch architecture\. The code is available at \\url\{https://anonymous\.4open\.science/r/GD\-Diff\-F5E8/\}\.

## AQBENCH: Benchmarking Neural Surrogates for Air Quality Forecasting

**Authors:** Siddharthan Dileep; Sanchit Bedi; Pareshbhai D Parmar; Ayush Maheshwari; Sri H Kota; N M Anoop Krishnan

**ID:** 139706 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9VdHenNk02>) | [PDF](<https://openreview.net/pdf?id=9VdHenNk02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139706>)

Neural surrogate benchmarks for spatiotemporal PDEs are dominated by idealized test beds with periodic boundaries and synthetic dynamics\. Architecture rankings established on these benchmarks do not transfer to real atmospheric chemistry, and standard regression metrics conceal the failure modes that determine operational utility\. AQBench evaluates ten architectures across five model families on high\-resolution WRF\-Chem simulations of $PM\_2\.5$, $NO\_2$, and $CO$ over the Indian subcontinent, against five operationally\-grounded objectives: long\-horizon stability, exceedance detection, extreme\-episode bias, advection\-diffusion residuals, and multi\-pollutant forecasting\. Three findings emerge\. Spectral neural operators, the strongest family on canonical PDE benchmarks, rank in the bottom four on 168 hour RMSE here\. Models that lead on aggregate regression underestimate during extreme pollution episodes and miss the majority of true exceedance events\. Joint training on  $PM\_2\.5$, $NO\_2$, and $CO$ improves $PM\_2\.5$ accuracy across most architectures with no parameter increase, with Transolver gaining 21\\% at 168th hour\. The dataset, evaluation framework, and trained baselines are released\.

## Flow\+Diff: Unifying Flow and Diffusion Representations for Multivariate Time Series Anomaly Detection

**Authors:** Van Kwan Zhi Koh; Songnan Lin; Zhiping Lin; Bihan Wen

**ID:** 152468 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SsSjmffHDW>) | [PDF](<https://openreview.net/pdf?id=SsSjmffHDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152468>)

Many existing multivariate time series anomaly detection methods formulate anomaly detection as a reconstruction problem, where detections are derived from reconstruction errors in the time domain\. While effective for large deviations, reconstruction\-based scoring struggles with subtle anomalies where only a small subset of features deviates slightly\. In such cases, most features are well reconstructed, causing the overall reconstruction error to remain low and indistinguishable from normal data\. To address these challenges, we propose Flow\+Diff, a novel framework that detects anomalies via discrepancies in a latent space, where two complementary representations, induced by distinct modeling paradigms, diverge under anomalous inputs\. One representation is obtained via a normalizing flow, which provides an invertible mapping that preserves temporal dependencies and captures inter\-feature dependencies\. The other is produced by a diffusion model that learns the distribution of normal samples in the latent space via a stochastic denoising process\. When given anomalous inputs, the normalizing flow maps the inputs to latent representations that lie in low\-probability regions of the learned latent distribution, while the diffusion model generates representations aligned with normal data distributions, resulting in a pronounced discrepancy between the two\. We compute the anomaly score based on this latent\-space discrepancy, thereby shifting anomaly detection from the time domain to the latent space\. Finally, the invertibility of the normalizing flow enables reconstruction in the time domain, facilitating interpretation of anomalous features\. Extensive experiments across six benchmark datasets show that Flow\+Diff achieves state\-of\-the\-art performance on four datasets against competitive baselines\.

## Spectral Transformer Neural Processes

**Authors:** XIANHE CHEN; Hao Chen; Yingzhen Li

**ID:** 154075 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GNyLIJGdwZ>) | [PDF](<https://openreview.net/pdf?id=GNyLIJGdwZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154075>)

Time series, spatial data, and images are natural applications of Neural Processes\. However, when such data exhibit strong periodicity and quasi\-periodicity, existing methods often suffer from underfitting and generalise poorly beyond the training distribution\. In this work, we propose Spectral Transformer Neural Processes \(STNPs\), a frequency\-aware extension of Transformer Neural Processes \(TNPs\)\. STNPs introduce a Spectral Aggregator that estimates an empirical context spectrum, compresses it into a spectral mixture, samples task\-adaptive spectral features, and concatenates them with time\-domain embeddings, thereby injecting a spectral\-mixture\-kernel bias into TNPs\. This design reshapes the similarity geometry, allowing inputs that are distant in Euclidean space to remain close in an induced periodic manifold while enhancing time\-\-frequency interactions\. Extensive experiments on synthetic regression tasks, real\-world time\-series datasets, and an image dataset demonstrate that STNPs consistently improve predictive performance over existing baselines, extending Neural Processes beyond translation equivariance toward effective modelling of periodicity and quasi\-periodicity\.

## End\-to\-End Identifiable and Consistent Recurrent Switching Dynamical Systems

**Authors:** Carles Balsells Rodas; Zhengrui Xiang; Francisco Sumba Toral; Yingzhen Li

**ID:** 148468 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xbOBrgiqzA>) | [PDF](<https://openreview.net/pdf?id=xbOBrgiqzA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148468>)

Learning identifiable representations in deep generative models remains a fundamental challenge, particularly for sequential data with regime\-switching dynamics\. Existing approaches establish identifiability under restrictive assumptions, such as stationarity or limited emission models, and typically rely on variational autoencoder \(VAE\) estimators, which introduce approximation gaps that limit the recovery of the latent structure\. In this work, we address both the theoretical and practical limitations of this setting\. First, we establish identifiability of a broad class of recurrent nonlinear switching dynamical systems under flexible assumptions, significantly extending prior results\. Second, we introduce $\\Omega$SDS, a flow\-based estimator that enables exact likelihood optimization using expectation\-maximisation\. Through empirical validation on both synthetic and real\-world data, our results demonstrate that $\\Omega$SDS achieves improved disentanglement compared to VAE\-based estimators and more accurate forecasting of underlying dynamics\.

## Ensemble Modeling for Time Series Forecasting: an Adaptive Robust Optimization Approach

**Authors:** Leonard Boussioux; Henry Mao; Dimitris Bertsimas

**ID:** 149487 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pnLT9fn4nN>) | [PDF](<https://openreview.net/pdf?id=pnLT9fn4nN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149487>)

Accurate time\-series forecasting is critical for a wide range of problems involving temporal data\. Ensemble modeling is a well\-established technique for leveraging multiple predictive models to increase accuracy and robustness, as the performance of a single predictor can be highly variable due to shifts in the underlying data distribution\. This paper proposes a new methodology for building robust ensembles of time series forecasting models\. Our approach uses Adaptive Robust Optimization \(ARO\) to construct a linear regression ensemble whose model weights adapt over time\. We demonstrate the effectiveness of our method through a series of synthetic experiments and real\-world applications, including air pollution management, energy consumption forecasting, and tropical cyclone intensity forecasting\. Our results show that our adaptive ensembles outperform the best ensemble member in hindsight by 16\-26\\% in root mean square error and 14\-28\\% in conditional value at risk and improve over competitive ensemble techniques\.

## Beyond Isolation: Neighbor\-Consistent Data Pruning for Multivariate Time Series Forecasting

**Authors:** Zi Yang; Jona Otholt; Weixing Wang; Haojin Yang; Guillermo Gallego

**ID:** 154771 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B5ACjqvQ2x>) | [PDF](<https://openreview.net/pdf?id=B5ACjqvQ2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154771>)

Data pruning for multivariate time\-series forecasting \(MTSF\) is an emerging topic that poses unique challenges due to the intricate temporal dependencies and high\-dimensional correlations between variables\. The dominant data pruning scores have been designed for i\.i\.d\. image classification tasks and rate each data sample using its own training trajectory in isolation\. However, this misses a structural property of MTSF training: samples \(obtained by windowing time series\) can easily overlap, especially if strides down to 1 timestep are used, thus breaking the standard training i\.i\.d\. assumption\. Indeed, our key observation is that this overlap drives neighbors' loss trajectories into lockstep across training; the few samples whose trajectories deviate from this lockstep carry gradient information their neighbors do not share—exactly the samples that are worth pruning away\. Hence, we propose TWIN \(Trajectory\-Wise Inconsistency with Neighbors\), a multi\-scale Wasserstein\-2 score and pruning algorithm that, for the first time, compares each sample's sorted training\-loss trajectory against those of its sliding\-window neighbors\. Specifically, our design is motivated by two complementary bounds: the pairwise discrepancy between neighboring loss trajectories is at most $\\mathcal\{O\}\(\\delta\)$ when both samples are clean \(Theorem 1\), but at least $\\Omega\(\\Delta^2\)$ once one carries a $\\Delta$\-spike contamination \(Theorem 2\)\. Whenever $\\Delta \\gg \\delta$, these scaling orders separate, exposing an asymptotic scaling\-order gap that TWIN's rank\-based rule reads without estimating any bound constant\. A 16,000\-cell synthetic audit empirically confirms this gap, with a median 44\.23× separation between clean and contaminated populations\. We further evaluate TWIN's effectiveness on six MTSF benchmarks, four horizons, and five seeds against five baseline methods, showing that it shortens the average retraining time to approximately 48% of the unpruned baseline and reduces the average Relative MSE by up to 1\.56% under IQR self\-calibration, thus setting a new state of the art\.

## Benchmarking Sensor\-Fault Robustness in Forecasting

**Authors:** Alexander Windmann; Philipp Wittenberg; Gianluca Manca; Marcel Dix; Jens U\. Brandt; Oliver Niggemann

**ID:** 138912 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xIRiNVRCRg>) | [PDF](<https://openreview.net/pdf?id=xIRiNVRCRg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138912>)

Cyber\-physical system \(CPS\) forecasting models depend on sensor streams with noisy, biased, missing, or temporally misaligned readings, yet standard forecasting evaluation often selects models by nominal error without showing whether they remain robust under such faults\. We introduce SensorFault\-Bench, a shared CPS\-grounded sensor\-fault stress\-test protocol for evaluating forecasting architectures and robustness\-improvement methods, together with an operational taxonomy that organizes the method comparison\. Across four real\-world datasets and eight scored scenarios governed by a standardized severity model, it reports worst\-scenario degradation, clean mean squared error \(MSE\), and worst\-scenario fault\-time MSE, separating relative robustness from absolute error\. A disjoint fault\-transfer split lets explicit fault\-training methods train on adjacent fault families while reported scores use separate benchmark scenarios\. Empirically, forecasting architectures favored by clean MSE can degrade sharply under faults, and clean\-MSE rankings can disagree with worst\-scenario fault\-time error rankings\. Chronos\-2, the evaluated zero\-shot foundation\-model representative, matches or trails the last\-value naive forecaster in clean MSE on the two single\-target datasets and has the largest worst\-scenario degradation on ETTh1 and Traffic, where all channels are forecast targets\. For the evaluated robustness\-improvement method set, paired deltas show selective degradation reductions: projected gradient descent adversarial training and randomized training lead where value faults dominate observed degradation, while fault augmentation leads where availability faults dominate\. SensorFault\-Bench provides open\-source code, documented data access, and reproduction and extension guides, so new datasets, architectures, and robustness\-improvement methods can be evaluated under the same CPS sensor\-fault robustness protocol\.

## CENDRe: Concept Extraction with Natural Domain Representations

**Authors:** Antonia Holzapfel; Andres Posada Moreno; Sebastian Trimpe

**ID:** 150459 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ht3dAp9x7G>) | [PDF](<https://openreview.net/pdf?id=ht3dAp9x7G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150459>)

Convolutional neural networks \(CNNs\) are widely used for time\-series classification, but their deployment in critical domains requires understanding the temporal and spectral patterns that drive their predictions\. Concept extraction \(CE\) methods identify such patterns by analyzing representations within the models' latent space\. However, existing time\-series CE methods have three limitations: they operate only in the time domain and overlook frequency features, predefine the number of concepts, and produce localizations misaligned with the regions the model uses\. We address these limitations by proposing CENDRe, a concept extraction method for CNNs\. It first discovers concepts by clustering per\-timestep latent representations in two stages, where silhouette\-guided aggregation selects the number of concepts automatically\. Then, it localizes each concept through gradients of a presence score that contrasts the latent representations with their prototypes, producing masks that concentrate on the regions driving the concept\. These gradients, propagated through a differentiable invertible mapping of the input such as a Fourier transform, yield localizations for the same concepts in the frequency domain\. Finally, each concept receives a relevance score that quantifies its contribution to each class\. On synthetic benchmarks, CENDRe achieves representation correctness comparable to state\-of\-the\-art CE methods and substantially higher importance correctness\. On real bearing\-fault data, CENDRe extracts the frequency bands driving the model's predictions, located in regions commonly inspected for fault diagnosis, producing evidence to assess the model that time\-domain CE methods cannot\.

## TIDES: Implicit Time\-Awareness in Selective State Space Models

**Authors:** Taylan Soydan; Miguel Bessa; Dirk Mohr; Rui Barreira

**ID:** 150579 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8MZDdLCLA>) | [PDF](<https://openreview.net/pdf?id=h8MZDdLCLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150579>)

Selective state space models \(SSMs\), such as Mamba, achieve strong per\-token expressivity by making the time discretization step $\\Delta$ a learned function of the input\. However, in doing so, $\\Delta$ ceases to represent a physical sampling interval, limiting its irregular time series modeling capability\. Continuous\-time SSMs, such as S5, preserve the physical meaning of $\\Delta$ and handle irregular timestamps natively, but their dynamics remain linear time\-invariant \(LTI\), limiting per\-token expressivity\. We propose \\textbf\{TIDES\}, a selective SSM variant that reconciles selective and continuous architectures by moving input\-dependence off the step size and onto the diagonal state matrix\. As a result, $\\Delta$ retains its physical meaning, tied to the state discretization, allowing the model to handle irregular timestamps natively without sacrificing the per\-token expressivity that makes selective SSMs effective\. We show this on a novel \\emph\{Fading Flash\} experimental benchmark, a compact controlled diagnostic for sequence models that jointly tests input\-dependence and extrapolation to out\-of\-distribution $\\Delta$ values, and isolates the distinct failure modes of current state\-of\-the\-art architectures that TIDES avoids by construction\. On large\-scale benchmarks, TIDES sets the new state\-of\-the\-art average rank on UEA time\-series classification and the Physiome\-ODE regression benchmark\.

## Frequency Domain Reservoir Computing

**Authors:** Klaus Schertler; Xiomara Runge; Andrea Ceni; David Kappel; Claudio Gallicchio

**ID:** 151162 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZ5lAACl8V>) | [PDF](<https://openreview.net/pdf?id=cZ5lAACl8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151162>)

While the quadratic sequence\-length bottleneck of transformers has fueled a resurgence in recurrent models, effectively capturing complex dynamics requires architectures that balance efficient training with highly expressive latent states\. Echo State Networks \(ESNs\) offer a compelling approach by utilizing fixed recurrent weights to circumvent backpropagation through time, enabling a closed\-form training solution\. However, achieving the expressivity needed for complex tasks demands large reservoirs, exposing an $\\mathcal\{O\}\(N^2\)$ state\-update bottleneck that prevents ESNs from matching the scale of contemporary recurrent models\. To address this limitation, we introduce Frequency Domain Reservoir Computing \(FRESCO\), an ESN architecture operating entirely in the frequency domain while avoiding domain\-shift overheads to achieve $\\mathcal\{O\}\(N\)$ complexity for dense, non\-linear recurrent updates\. By employing a novel dimensional zero\-padding input embedding, a packed frequency\-domain readout, and a natively applied frequency\-domain non\-linearity, FRESCO drastically reduces computational costs and energy consumption of training and inference\. Furthermore, FRESCO matches the state\-of\-the\-art predictive performance on memory benchmarks, sequential classification, and multivariate long\-horizon forecasting, offering a scalable path forward for dense recurrent architectures\.

## Temporal\-Scale Sensitivity in Time\-Series Tokenization and Scale\-Robust Token Estimation by Gated Sum

**Authors:** Berken Utku Demirel; Christian Holz

**ID:** 150389 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQ0TBYaLes>) | [PDF](<https://openreview.net/pdf?id=iQ0TBYaLes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150389>)

Transformers for temporal sequences require mapping sampled signals into sequences of vectors, called tokens\. This is done by partitioning the sequence into local temporal windows \(patches\)\. We show that the tokenization step induces an approximation\-\-estimation tradeoff\. Smaller windows yield higher\-variance statistical estimates because each token is supported by fewer samples, while larger windows stabilize estimation but increase the amount of information that must be summarized\. Motivated by this tradeoff, we propose a lightweight tokenizer that constructs multiple estimates for each token and sums them, without changing the Transformer backbone\. Across 12 datasets spanning four modalities, our method improves performance and reduces sensitivity to temporal scale across tasks\.

## BESS\-Bench: Benchmarking Spectral Representations for Be\-Star Variability

**Authors:** Matthieu Le Lain; Sébastien Lefèvre

**ID:** 139851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0X9DNTPDH6>) | [PDF](<https://openreview.net/pdf?id=0X9DNTPDH6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139851>)

Time\-resolved stellar spectroscopy is a primary observational window onto mass\-loss, disc formation and rotational physics, phenomena that single\-epoch surveys cannot capture\. Be stars are rapidly rotating B\-type stars that episodically grow and lose a circumstellar gas disc, which imprints a variable emission profile on the hydrogen H\-alpha Balmer line \(6562\.8 Angstrom\) on timescales from days to decades\. Decoding these spectral variations is both a key step in understanding stellar evolution and an open challenge for machine learning on irregularly sampled scientific time series\. Yet no benchmark exists for these spectra: professional surveys deliver a single epoch per star, and the amateur\-driven BeSS database, although it hosts hundreds of thousands of multi\-epoch spectra, has never been curated for machine learning\. We close this gap with BESS\-Bench: 339,115 optical spectra of 1,468 Be stars over 35 years, all expert\-reviewed, from amateurs \(81\.7%\) and professionals \(17\.7%\), with a scored H\-alpha benchmark slice of 26,937 spectra and three tasks under a unified evaluation protocol\. SpecProbe measures how well frozen embeddings recover six scalar line features \(width, peak separation, line\-core depth, asymmetry, equivalent width, peak intensity\)\. LineTransfer tests cross\-line generalisation \(H\-beta to H\-alpha\)\. EWForecast predicts the next\-epoch equivalent width of H\-alpha \(a disc\-mass proxy\) from a star's recent spectroscopic history\. We release a compact masked auto\-encoder baseline \(BeMAE\) and benchmark it against PCA and two zero\-shot time\-series foundation models \(Chronos\-Bolt and TimesFM\-2\.0\)\. The ranking is sharply task\-dependent: BeMAE recovers shape features with an R2 that is 4\.24x that of PCA\(10\) \(bootstrap CI95 \[4\.12, 4\.33\]\), yet a PCA\+ridge pipeline lowers EW forecasting MAE by 5\.8% over persistence, beating both foundation models, and calling as such for further development of AI models in this context\. Dataset, weights, frozen splits and evaluation pipeline are released under CC\-BY\-4\.0, so the scientific community can adopt BESS\-Bench as a shared testbed and contribute new representations and models to advance our understanding of stellar variability\.

## TS\-ICL: A Flexible Time\-Indexed Foundation Model for Time Series via In\-Context Learning

**Authors:** Etienne Le Naour; Tahar Nabil; Adrien Petralia

**ID:** 148825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=urL7kBfWB5>) | [PDF](<https://openreview.net/pdf?id=urL7kBfWB5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148825>)

Foundation models mark a profound paradigm shift in time series modeling, with task\-specific models being superseded by general\-purpose zero\-shot models\.  Yet, current approaches primarily focus on forecasting, while real\-world time series are often irregularly and partially observed, requiring models that can jointly forecast, impute missing values, and handle degraded sampling conditions\.  To address these challenges, we introduce TS\-ICL, a novel probabilistic In\-Context Learning encoder\-regressor Transformer that unifies forecasting and imputation\. TS\-ICL formulates time series tasks as timestamp\-aligned regression and naturally incorporates covariates by training on synthetic dependency structures generated from a novel causal data prior\. Empirically, TS\-ICL achieves a new state\-of\-the\-art in imputation, while remaining competitive with leading forecasting foundation models across both univariate and covariate\-aware benchmarks\. It shows particularly strong performance in forecasting with partially observed look\-back windows\. \*Code page\*: https://anonymous\.4open\.science/r/tsicl\-D3F1/\.

## Seahorse: A Unified Benchmarking Framework for Spatiotemporal Event Modeling

**Authors:** Yahya Aalaila; Sebastian Vollmer; Gerrit Großmann

**ID:** 139192 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fR5jdQLFiq>) | [PDF](<https://openreview.net/pdf?id=fR5jdQLFiq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139192>)

Spatiotemporal point processes \(STPPs\) model event data in continuous time and space, with applications in mobility, epidemiology, and public safety\. Recent neural STPPs span expressive intensities, density models, continuous\-time latent dynamics, normalizing\-flow spatial decoders, and score\-based generative mechanisms\. Yet comparison remains fragile because implementations differ in preprocessing, coordinate normalization, splits, likelihood conventions, and evaluation protocols\. We present \\textsc\{Seahorse\}, a unified framework for reproducible STPP experimentation\. \\textsc\{Seahorse\} provides an encode\-\-evolve\-\-decode interface and an executable benchmarking contract that standardizes dataset handling, configuration resolution, training, tuning, checkpointing, raw\-coordinate likelihood reporting, and run artifacts across heterogeneous STPP families\. It supports classical baselines, neural likelihood models, continuous\-time Neural STPP variants, and sample\-based generative models under one external protocol\. Using HawkesNest as a controlled synthetic stress\-test suite, we show how diagnostic benchmarking can probe neural STPP behavior under increasing spatiotemporal entanglement and other structural changes\. Together, \\textsc\{Seahorse\} and these controlled evaluations provide reusable infrastructure for comparing, diagnosing, and extending STPP models beyond implementation\-specific leaderboards\.

## A Hierarchy of Entropy\-Shapley Games for Multivariate Predictive Uncertainty

**Authors:** Niklas Koenen; Claudia Battistin; Jeriek Van den Abeele; Martin Jullum

**ID:** 153980 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H5mUgkvpmE>) | [PDF](<https://openreview.net/pdf?id=H5mUgkvpmE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153980>)

Modern probabilistic machine learning models increasingly produce multivariate outputs with complex dependence structure, from multi\-step time\-series forecasts to sample path predictions\. Understanding which input features drive the predictive uncertainty is important for risk\-aware decisions, model diagnostics, and deciding whether the uncertainty should be mitigated or hedged against\. This attribution problem requires a choice of how dependencies between output components are treated\. Existing approaches reduce the output to a scalar through aggregation or projection before attribution, thereby obscuring whether features affect marginal uncertainty, dependence structure, or both, while component\-wise analyses can miss dependence effects entirely\. We close this gap by introducing a hierarchy of three entropy\-based Shapley games that make this output\-side choice explicit for any ordered multivariate outcome, ranging from per\-component marginal entropy to fully joint entropy\. The hierarchy isolates a cross\-component attribution term that captures how each feature shifts the dependence between output components, a quantity invisible to component\-wise methods\. We establish a chain\-rule decomposition of the joint attribution and characterize the cross\-component term through conditional total correlation, providing both closed\-form and sample\-based estimators\. Finally, we demonstrate how the framework captures differences in learned joint structure across probabilistic models from distributional regression to a zero\-shot time series foundation model\.

## Realism VS Accuracy: Event Sequence Forecasting from a Generative Modeling Perspective

**Authors:** Dmitry Osin; Egor Surkov; Petr Mokrov; Igor Udovichenko; Ivan Karpukhin; Evgeny Burnaev; Egor Shvetsov; Aleksandr Korotin

**ID:** 139504 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LuWYNMlMDq>) | [PDF](<https://openreview.net/pdf?id=LuWYNMlMDq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139504>)

Event sequences are chains of random events, each described by heterogeneous \(numerical and categorical\) features\. The problem of event sequence forecasting occurs in finance, healthcare, business process intelligence, and other fields\. In this work, we study long\-horizon forecasting of event sequences as a conditional generative modeling problem\. We evaluate forecast quality from two perspectives: prediction accuracy and distributional realism\. To support this, we present a benchmark that contributes metrics for both aspects, strong statistical baselines, recent generative models adapted from adjacent fields, and curated real\-world datasets\. Careful evaluation reveals that no method excels at both accuracy and realism, highlighting a fundamental trade\-off between the two\. Finally, we introduce a procedure that aggregates samples from a realism\-strong generative model into a state\-of\-the\-art predictor, demonstrating that distributional realism can be converted into prediction accuracy\.

## Why Do Time Series Models Need Long Context Windows?

**Authors:** Luca Butera; Giovanni De Felice; Andrea Cini; Cesare Alippi

**ID:** 149819 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n51PuFNKYi>) | [PDF](<https://openreview.net/pdf?id=n51PuFNKYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149819>)

The effectiveness of modern deep learning models in forecasting \*groups of time series\* is often attributed to their ability to capture \(long\-range\) dependencies across long observation windows\. In this paper, we show that this forecasting task involves two objectives: \(i\) \*generative process identification\* \(GPI\), i\.e\., inferring the specific process generating the input sequence, and \(ii\) \*conditional forecasting\* \(CF\), i\.e\., predicting future values given input observations\. From this perspective, optimal predictions can be interpreted as an average over plausible data\-generating processes, weighted by their likelihood given the input window\. This suggests a different explanation for the benefits of long context windows: they reduce the uncertainty about which specific process is generating the input time series during operation\. We prove that even for processes with memory length $P$, an input window size strictly larger than $P$ is \*necessary\* to achieve the minimum attainable error\. Finally, we show how decoupling GPI and CF can improve computational scalability without compromising accuracy\. Experiments on synthetic and real\-world data validate our insights and their relevance for designing forecasting architectures\.

## RamanBench: A Large\-Scale Benchmark for Machine Learning on Raman Spectroscopy

**Authors:** Mario Koddenbrock; Christoph Lange; Robin Legner; Martin Jaeger; Martin Kögler; Mariano N Bournazou; Peter Neubauer; Felix Bießmann; Erik Rodner

**ID:** 139729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7sQ3RroZKg>) | [PDF](<https://openreview.net/pdf?id=7sQ3RroZKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139729>)

Machine learning \(ML\) has transformed many scientific fields, yet key applications still lack standardized benchmarks\. Raman spectroscopy, a widely used technique for non\-invasive molecular analysis, is one such field where progress is limited by fragmented datasets, inconsistent evaluation, and models that fail to capture the structure of spectral data\. We introduce RamanBench, the first large\-scale, fully reproducible benchmark for ML on Raman spectroscopy, consisting of streamlined data access \(https://pypi\.org/project/raman\-data/\), evaluation protocols and code \(https://pypi\.org/project/raman\-bench/\), as well as a live leaderboard \(https://huggingface\.co/spaces/HTW\-KI\-Werkstatt/RamanBench\)\. It unifies 77 datasets \(including 17 first released with this benchmark\) across four domains, comprising 325,862 spectra and spanning classification and regression tasks under diverse experimental conditions\. We benchmark 28 models under a standardized protocol, including classical methods \(e\.g\., PLS\), Raman\-specific \(e\.g\., RamanNet\), tabular foundation models \(TFMs; e\.g\., TabPFN\), and time\-series approaches \(e\.g\., ROCKET\)\. TFMs consistently outperform domain\-specific and gradient boosting baselines, while time\-series models remain competitive\. However, no single method dominates across these heterogeneous datasets, revealing that Raman spectroscopy remains an open challenge for machine learning\. Therefore, we invite the community to contribute new approaches to our living benchmark, with the potential to accelerate advances in critical applications such as medical diagnostics, biological research, and materials science\.

## Neural Fourier Transform for Multiple Time Series Prediction

**Authors:** Noam Koren; Daniel Freedman; Kira Radinsky

**ID:** 156764 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0GBjIwRuVp&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DTMLR%2FAuthors%23your-submissions)>) | [PDF](<https://openreview.net/pdf?id=0GBjIwRuVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156764>)

Multivariate time series forecasting is an important task in various fields such as economic planning, healthcare management, and environmental monitoring\. In this work, we present a novel methodology for improving multivariate forecasting, particularly, in data sets with strong seasonality\. We frame the forecasting task as a Multi\-Dimensional Fourier Transform \(MFT\) problem and propose the Neural Fourier Transform \(NFT\) that leverages a deep learning model to predict future time series values by learning the MFT coefficients\. The efficacy of NFT is empirically validated on 7 diverse datasets, demonstrating improvements over multiple forecasting horizons and lookbacks, thereby establishing new state\-of\-the\-art results\. Our contributions advance the field of multivariate time series forecasting by providing a model that excels in predictive accuracy\.

## VACE: Learning Geometrically Structured Representations for Time Series Anomaly Detection

**Authors:** Alberto D Cencillo; Leonardo Concepción; Isaac Triguero; Julián Luengo

**ID:** 149386 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qQU99P2wBC>) | [PDF](<https://openreview.net/pdf?id=qQU99P2wBC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149386>)

Anomaly detection in multivariate time series is a critical task across a wide range of real\-world applications, where abnormal behaviour is rare, labels are unavailable, and the cost of a miss is high\. The central challenge is learning a characterisation of normality precise enough to flag deviations\. Representation self\-supervised learning, typically through contrastive approaches, addresses this by embedding temporal patches into a latent space where normality occupies a well\-defined region, with anomalies detected by geometric deviation\. However, contrastive approaches shape this space indirectly through pair\-sampling heuristics, providing no explicit control over the geometric structure that distance\-based scoring requires\. This means how tightly normal representations are grouped, and whether distances are directionally meaningful\. We present VACE \($\\textbf\{V\}$elocity\-$\\textbf\{A\}$ligned $\\textbf\{C\}$hannel $\\textbf\{E\}$mbeddings\), a self\-supervised anomaly detection method that represents normality as a compact, directionally coherent region in the embedding space\. To this end, VACE trains a channel\-aware encoder through a velocity\-consistency objective, with no negatives and no synthetic anomalies, so that normal trajectories are locally smooth and aligned\. At test time, a Mahalanobis positional score and a velocity\-bank directional score are combined multiplicatively, flagging points that are simultaneously off\-distribution and dynamically atypical\. Despite its simplicity, VACE achieves state\-of\-the\-art performance on TSB\-AD\-M under rigorous evaluation, significantly outperforming more complex methods trained on substantially larger budgets\.

## Topological Periodicity Test \(TopPT\) via Confidence Bound of Time\-Delay Embeddings

**Authors:** Donghyun Park; Junhyun An; Taehyoung Kim; Jisu Kim

**ID:** 149943 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m2C92vyCO3>) | [PDF](<https://openreview.net/pdf?id=m2C92vyCO3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149943>)

Time\-delay embedding is a fundamental technique in Topological Data Analysis \(TDA\) for reconstructing phase\-space dynamics of time\-series data, where persistent homology can reveal loops associated with periodicity\. However, rigorous statistical uncertainty quantification for these features remains underdeveloped\. First, we analyze the topology of time\-delay embeddings, showing that the embedded trajectory is homotopy equivalent to a circle \($S^1$\) for periodic signals and contractible for non\-periodic ones\. We also prove a positive lower bound on the embedding reach, ensuring stable topological features\. Second, we develop a subsampling approach to construct confidence bounds for persistence diagrams\. Under standard manifold regularity conditions, we derive data\-dependent bounds with asymptotic guarantees\. Finally, we propose Topological Periodicity Test \(TopPT\), a hypothesis testing framework for periodicity with asymptotically controlled type I and type II error rates\. Experiments on bounded\-error synthetic data show that raw TDA detects periodic alternatives while avoiding false rejections on structured non\-periodic signals, and that the robust rule is conservative after interpolation\-error correction\. On PhysioNet Fantasia and BIDMC respiratory waveforms, TDA detects most records but only a subset of local windows, unlike scalar periodogram baselines\.

## DynaPFN: Zero\-Shot Dynamical System Forecasting with Tabular Prior\-Fitted Networks

**Authors:** Chiara Roverato; Joseph Cotnareanu; Pablo Piantanida; Boris Oreshkin; Mark Coates

**ID:** 149937 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m581slK2rD>) | [PDF](<https://openreview.net/pdf?id=m581slK2rD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149937>)

Long\-horizon forecasting of dynamical time series remains a fundamental challenge in machine learning, as accurate predictions require learning the underlying dynamics\. While recent time\-series foundation models leveraging in\-context learning \(ICL\) have shown promise, we show that they fail to genuinely capture the governing dynamics\. By rewriting the context of a time series as a collection of lagged input\-output pairs, we frame dynamical time\-series forecasting as a posterior inference problem over the space of structural causal models \(SCMs\), arguing that the underlying dynamic structure is a natural inductive bias\. We propose DynaPFN, which uses pretrained tabular Prior\-Fitted Networks \(PFNs\) to approximate this posterior through ICL, augmented with a library of dynamical features that permit simpler representations of complex systems\. Even though the pretrained models have never seen time series data, DynaPFN outperforms existing zero\-shot forecasting baselines on established benchmarks of chaotic time series and real\-world datasets, demonstrating that incorporating structural priors over system dynamics is a valid approach for robust long\-horizon forecasting\.

## NOCE\-Net: Representation Learning for Battery Operational Context via Nested Sequence Modelling

**Authors:** Arnab Bhattacharjee; Wayes Tushar; Tapan K Saha

**ID:** 154156 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FpnVbelG5q>) | [PDF](<https://openreview.net/pdf?id=FpnVbelG5q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154156>)

Learning effective representations from battery operational history is essential for predictive health management and control\-oriented applications\. Existing approaches rely on response\-dependent engineered features or short early\-life windows, limiting generalisability and precluding use in prospective settings where future responses are unavailable\. We propose $\\texttt\{NOCE\-Net\}$, a deep nested sequence model that learns control\-enabling representations directly from raw cyclic operational data\. Our data pipeline, $\\texttt\{re\-BatteryData\}$, standardises heterogeneous aging datasets into semantically equivalent Full Equivalent Cycles \(FECs\) defined by absolute charge throughput, enabling end\-to\-end learning across diverse operational regimes\. $\\texttt\{NOCE\-Net\}$ combines multi\-patch transformer encoders for intra\-cycle dynamics with a GRU backbone for inter\-cycle state evolution, operating on approximately $700$ batteries across ten public datasets spanning over $300$ operational profiles\. In zero\-shot evaluation on unseen battery chemistries and usage patterns, $\\texttt\{NOCE\-Net\}$ achieves $13\.7$% MAPE in voltage response prediction, outperforming strong long\-sequence baselines by over $43$% while using $40 \\times$ fewer parameters\. Shape and component diagnostics of the learned hidden states reveal that the GRU's principal direction of evolution achieves Spearman $\|\\rho\| \\geq 0\.95$ with the capacity fade trajectory on average across all datasets with monotone degradation profiles, including zero\-shot test batteries, providing evidence that the representations encode degradation dynamics transferable to downstream tasks beyond battery response modelling\.

## Neural Fractional Stochastic Differential Equations

**Authors:** Yongxin Yang; Timothy Hospedales

**ID:** 150228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqQXTnJOCO>) | [PDF](<https://openreview.net/pdf?id=jqQXTnJOCO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150228>)

Fractional differential equations \(FDEs\) excel at modelling systems with long\-range memory, while stochastic differential equations \(SDEs\) capture inherent randomness\. Existing neural differential equation models address either memory \(Neural FDEs\) or stochasticity \(Neural SDEs\), but a unified framework combining both with a learnable scalar memory exponent and an efficient adjoint remains absent\. We introduce the Neural Fractional Stochastic Differential Equation \(Neural FSDE\), which learns continuous\-time dynamics with both memory and randomness from data via a Caputo FSDE with neural drift, neural diffusion, and a learnable fractional order\. To enable scalable training, we derive a discrete adjoint method that computes gradients with respect to the initial state, the drift and diffusion network parameters, and the fractional order, with memory cost independent of the autograd graph depth\. We validate the framework on two real\-world domains\. On the stochastic\-fractional COVID\-19 model of Bonyah et al\., the NeuralFSDE provides the first end\-to\-end real\-data calibration under a rolling\-origin forecasting protocol, recovering a fractional order less than 1\. On S&amp;P\~500 index option pricing, we recast rough Bergomi, rough Heston, Neural SDE, and NeuralFSDE as Caputo\-FSDE special cases under a single calibration pipeline; the NeuralFSDE achieves the lowest implied\-volatility error across schedules and instruments, with a matched\-architecture comparison against the memoryless Neural SDE, isolating the contribution of fractional memory\. Code is available at https://anonymous\.4open\.science/r/NeuralFSDE\.

## Geometric Inductive Biases for Semi\-Supervised Equalization: The Constellation\-Aware Transformer

**Authors:** Avi Caciularu

**ID:** 155196 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ZUdIwD0Pz>) | [PDF](<https://openreview.net/pdf?id=7ZUdIwD0Pz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155196>)

Decoding signals over unknown channels with minimal pilot overhead is a critical challenge in next\-generation communications\. Existing deep learning approaches typically rely on generic encoders that struggle to model long\-range temporal dependencies or efficiently capture the channel's physical properties from scarce data\. We argue that standard architectures suffer from fundamental \*agnostic estimation gaps\*, as they must implicitly learn the constellation geometry that is already known\. We introduce the \*Constellation\-Aware Transformer\* \(CAT\), a novel architecture that explicitly injects geometric inductive biases into the equalization process\. CAT is composed of a stack of custom \*TransFIRmer\* blocks, which utilize an \`\`early interaction'' paradigm to co\-process received signals and ideal constellation symbols\. Each block features a split Feed\-Forward Network that applies a Finite Impulse Response \(FIR\)\-inspired filter for robust deconvolution and a parallel MLP for geometric refinement\. We theoretically prove that this design creates a structural isomorphism to the optimal MIMO Wiener Receiver and eliminates the ambiguity floor inherent to blind estimators\. In the challenging semi\-supervised setting, CAT achieves state\-of\-the\-art performance, significantly reducing pilot overhead compared to VAE and standard Transformer baselines\.

## OTformer: Non\-Stationarity\-Aware Adaptive Optimal Transport Attention for Time Series Forecasting

**Authors:** Zhaowei Liu; Kaixiang Wang; Sheng Liu; zengyang zhang; HaitaoYang; Rufei Gao; Zongxing Zhao; Yao Shan; Yongchao Song; Yanwei Yu; Anzuo Jiang

**ID:** 148743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vNR0rYjfuq>) | [PDF](<https://openreview.net/pdf?id=vNR0rYjfuq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148743>)

Time series forecasting is important in applications such as energy management, climate modeling, traffic control, and industrial monitoring\. Recent variate\-tokenization Transformers model cross\-variate dependencies effectively, but Softmax attention still suffers from uneven cross\-variate routing and fixed attention sharpness under varying non\-stationarity\. To address these limitations, OTformer is introduced as a non\-stationarity\-aware Optimal Transport framework for time series forecasting\. A lightweight scorer estimates sample\-wise non\-stationarity from raw pre\-normalization statistics and uses this signal to adapt the Sinkhorn entropy regularization coefficient ε, yielding smoother transport plans for more non\-stationary inputs and sharper routing for more stationary ones\. A shared phase embedding further injects cycle\-aware context into variate tokens\. Experiments on eight standard benchmarks and 32 forecasting settings show that OTformer consistently improves upon the iTransformer backbone, with average MSE reductions of 4\.4% on ECL and 12\.5% on Solar across four forecasting horizons\.

## Kernel Granger Component Analysis for Nonlinear Directed Component Discovery

**Authors:** Deena Francis

**ID:** 153634 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jx528jtKFC>) | [PDF](<https://openreview.net/pdf?id=Jx528jtKFC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153634>)

Granger Component Analysis \(GCA\) discovers latent components of multivariate time series that exhibit directed temporal dependence, but is limited to linear representations\. We introduce Kernel Granger Component Analysis \(KGCA\), a nonlinear extension that learns directed latent components in a reproducing kernel Hilbert space\. KGCA optimizes a ridge\-regularized Granger predictive objective using explicit envelope\-theorem gradients, and incorporates a time\-reversal criterion to resolve directional identifiability\. We also describe a scalable random Fourier feature \(RFF\) variant that approximates the kernel map explicitly and avoids forming the full Gram matrix\. To avoid spurious directionality from post hoc component selection, we use a restricted evaluation protocol that measures directed structure intrinsic to the learned representation\. Empirically, KGCA and RFF\-KGCA recover reliable nonlinear directed components, exhibit positive directionality gaps, and avoid spurious directionality under independent\-process controls\. These results show that kernelizing GCA enables nonlinear directed component discovery while preserving the interpretability and explicit optimization structure of the original framework\.

## Generating Financial Time Series by Matching Random Convolutional Features

**Authors:** Konrad Mueller; Nikita Zozoulenko; Ben Wood; Thomas Cass; Lukas Gonon

**ID:** 149033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLVW1Y9hBz>) | [PDF](<https://openreview.net/pdf?id=tLVW1Y9hBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149033>)

Generating realistic financial time series is challenging as training data is often limited to a single historical path\. With such scarce data, overfitting is hard to avoid, especially under adversarial training where a trained discriminator can memorize the training samples\. To mitigate this, recent approaches train generators to minimize the discrepancy between untrained feature representations of real and generated time series\. In these works, the feature maps are based on path signatures, which can fail to capture relevant time series properties at tractable truncation depths\. In this work, we instead train generators by matching random convolutional features of real and generated time series\. Existing random convolutional feature maps, such as Rocket and Hydra, have been shown to provide informative representations of real\-world time series, but cannot supervise generative models because they are non\-differentiable\. We introduce \*\*SOCK\*\* \(\*\*\*SO\*\*ft \*\*C\*\*ompeting \*\*K\*\*ernels\*\), a fully differentiable random convolutional feature map, suited to train generative time series models\. We show that generators trained by matching random SOCK features consistently outperform signature and diffusion baselines across a wide range of small\-sample financial datasets\. We further demonstrate SOCK's expressiveness on two\-sample hypothesis testing and time series classification tasks, where SOCK matches or outperforms existing unsupervised feature maps\.

## CoLaX: Context\-Aware Local Explanations for Time Series Classification

**Authors:** Kexuan Zhang; Paolo Frazzetto; Xiaobei Zou; Gustau Camps\-Valls; Yang Tang

**ID:** 155599 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Mn24WBKDZ>) | [PDF](<https://openreview.net/pdf?id=4Mn24WBKDZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155599>)

Reliable deployment of time series classifiers in high\-stakes domains requires explanations that capture the interplay between localized patterns and global temporal context\. However, existing post\-hoc methods often treat local features in isolation, failing to account for long\-range dependencies\. We propose CoLaX, a context\-aware explanation framework that explicitly embeds local dynamics within a global temporal structure\. By employing a principled context\-conditioning mechanism, CoLaX models how global context modulates the importance of local patterns, revealing not only what is important but also when and why it matters\. Extensive benchmarks demonstrate that CoLaX yields significantly more faithful and stable explanations than state\-of\-the\-art baselines, demonstrating that joint local\-global modeling is essential for reliable time\-series interpretability\.

## TempoPFN: Synthetic Pre\-training of Linear RNNs for Zero\-shot Time Series Forecasting

**Authors:** Vladyslav Moroshan; Julien Siems; Arber Zela; Timur Carstensen; Frank Hutter

**ID:** 155999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1GbECQvpNs>) | [PDF](<https://openreview.net/pdf?id=1GbECQvpNs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155999>)

Foundation models for zero\-shot time series forecasting face challenges in efficient long\-horizon prediction and reproducibility, with existing synthetic\-only approaches underperforming on challenging benchmarks\. This paper presents TempoPFN, a univariate time series foundation model based on linear Recurrent Neural Networks \(RNNs\) pre\-trained exclusively on synthetic data\. The model uses a GatedDeltaProduct architecture with state\-weaving for fully parallelizable training across sequence lengths, eliminating the need for windowing or summarization techniques while maintaining robust temporal state\-tracking\. Our comprehensive synthetic data pipeline unifies diverse generators, including stochastic differential equations, Gaussian processes, and audio synthesis, with novel augmentations\. In zero\-shot evaluations on the Gift\-Eval, fev\-bench and Chronos\-ZS benchmarks, TempoPFN achieves top\-tier competitive performance,  surpassing the majority of models trained on real\-world data, while being more efficient than existing baselines by leveraging fully parallelizable training and inference\. We open\-source our complete data generation pipeline and training code, providing a reproducible foundation for future research\.

## AME\-TS: Anchored Mixture\-of\-Experts for Time Series Forecasting

**Authors:** Rui Wang; Renhao Xue; Ray Razi; Huan Song; Hannah Marlowe

**ID:** 153106 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NtOUejNcpe>) | [PDF](<https://openreview.net/pdf?id=NtOUejNcpe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153106>)

Time series forecasting models are increasingly scaled through large Transformer backbones, yet most existing approaches process all series through a shared dense computation path despite substantial heterogeneity in temporal structure\. Mixture\-of\-Experts \(MoE\) offers a natural alternative by enabling conditional computation, but standard MoE routing leaves expert specialization weakly identified and often unstable during downstream adaptation\. We propose AME\-TS, a structure\-guided sparse time series foundation model that aligns expert routing with interpretable temporal structure\. AME\-TS first uses a lightweight regime predictor to estimate series\-level descriptors, including forecastability, seasonality, trend, and sparsity, and maps them to a soft structural prior over experts\. This series\-level prior guides token\-level routing during training, encouraging structure\-aligned specialization\. On the GIFT\-Eval benchmark, AME\-TS delivers a strong accuracy\-efficiency tradeoff across model scales: it substantially outperforms existing time series foundation models at small model scales and remains competitive with the strongest models at larger scales, while activating substantially fewer parameters through sparse routing\. We further show that AME\-TS learns more interpretable routing geometry and substantially more stable expert specialization than standard MoE during fine\-tuning on the M5 dataset\. These results suggest that structure\-aware routing is an effective and reliable way to realize the benefits of sparse expert models for time series forecasting\.

## What Does an Observability Forecasting Foundation Model Know?

**Authors:** Dhyey Mavani; Tairan Ji; Rian Atri

**ID:** 150120 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kWi9pOSFy1>) | [PDF](<https://openreview.net/pdf?id=kWi9pOSFy1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150120>)

Time\-series foundation models \(TSFMs\) are increasingly deployed as zero\-shot forecasters in observability platforms, yet the operational concepts encoded within their internal representations remain largely un\-audited\. To address this gap, we introduce $\\texttt\{toto\-interp\}$, a control\-first interpretability protocol that pairs linear probes with four rigorous baselines: raw\-feature, shuffled\-label, randomized\-backbone, and supervised raw\-window Fourier Neural Operator \(FNO\) controls\. Applying this harness to TOTO on BOOM, we demonstrate that three structural telemetry concepts, such as cadence bucket \("frequency"\), metric type, and domain, are linearly decodable, layer\-localized, and specifically tied to pretraining\. A budget\-matched replication on MOMENT\-base successfully recovers these same axes, confirming these representations are not isolated artifacts of the TOTO architecture\. Furthermore, our matched\-null and on\-manifold interventions reveal a critical two\-way dissociation between linear decodability and forecast\-sensitivity\. For instance, concepts like future burstiness are highly decodable yet completely inert under intervention, whereas other weakly decodable directions can severely disrupt forecasts off\-manifold\. By releasing the audit harness and detailing negative control cases \(such as cardinality and shift risk\), we demonstrate that linear decodability alone is insufficient for reliable post\-training steering or deployment auditing in TSFMs\.

## MOVEBENCH: A Benchmark for Global\-Scale Wildlife Movement Forecasting

**Authors:** Justin Kay; Shir Bar; Ellen O Aikens; Martin Becker; Francesca Cagnacci; Juliet Cohen; Scott W Forrest; Jessica Kendall\-Bar; Madeleine Lucas; Macon Overcast; Meredith S Palmer; Will Rogers; Nicholas J Russo; Christian Rutz; Larissa T Beumer; Michael B Brown; Ying\-Chi Chan; Sarah C Davidson; Diego E Soto; Anne G Hertel; Roland Kays; Benjamin Koger; Guram Mikaberidze; Thomas Mueller; Ruth Oliver; Thorsten Papenbrock; Robert Patchett; Jared A Stabach; Dane Taylor; Scott W Yanco; Sara Beery

**ID:** 139749 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ss3Wyzv27>) | [PDF](<https://openreview.net/pdf?id=6ss3Wyzv27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139749>)

Understanding and predicting wildlife movement is critical for ecology and conservation\. While trajectory forecasting has advanced for human and vehicle movement, wildlife trajectories present distinct challenges: they are unconstrained in space, highly stochastic, and influenced by environmental conditions\. We introduce MOVEBENCH, the first large\-scale benchmark for probabilistic wildlife movement forecasting, containing 2\.6M GPS locations from 800\+ individuals across 110 species in 127 countries, paired with 1\.6B environmental raster tiles capturing 160 covariates known or hypothesized to influence movement\. We propose a probabilistic evaluation protocol for movement trajectory forecasts, addressing limitations of point\-prediction metrics for inherently stochastic phenomena\. Through comprehensive empirical evaluation of four method families across multiple temporal and spatial scales, we reveal that: \(1\) existing predictive methods generalize better to future timepoints than to unseen individuals, \(2\) deep learning approaches do not consistently outperform simpler baselines, and \(3\) environmental covariate selection significantly impacts performance\. MOVEBENCH enables standardized evaluation of movement forecasting methods and provides a foundation for methodological advances on this ecologically important task\.

## RnR: a meta\-solver for causal discovery in undersampled time series data

**Authors:** Mohammadsajad Abavisani; Kseniya Solovyeva; David Danks; Vince D\. Calhoun; Sergey Plis

**ID:** 150826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1Ye3BzygN>) | [PDF](<https://openreview.net/pdf?id=f1Ye3BzygN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150826>)

Learning directed causal graphs from time\-series data poses significant challenges, especially in fMRI where slow sampling rate obscures fast neural interactions\. This temporal mismatch leads to undersampling, which can make multiple graphs equally plausible\. We address this problem by explicitly modeling undersampling effects when recovering causal graphs\. Our approach employs answer set programming \(ASP\) to enforce domain\-specific constraints and optimize soft observational constraints, thereby identifying a Markov equivalence class for the resulting graph solutions\. By customizing an ASP solver to collect multiple near\-optimal solutions, we obtain not only the single best\-fitting graph but an equivalence class of high\-scoring graphs for expert consideration\. This method, called Real\-world noisy RASL \(RnR\), can also act as a meta\-solver: it refines the output of other causal discovery algorithms by accounting for undersampling biases\. In synthetic data and empirical brain network data, RnR produces more accurate causal graphs than state\-of\-the\-art methods\. When applied as a meta\-solver \(refining outputs of existing algorithms\), it improves F1 scores by an average of 46\\% over baseline methods; on standalone synthetic data benchmarks, it achieves a 64\\% improvement\. We demonstrate that RnR is robust to varying undersampling rates, maintaining high precision and recall even as sampling becomes more sparse, whereas baseline methods degrade significantly\. Finally, we test RnR on real\-world settings where ground truth connectivity is unknown such as human brain fMRI data, showing that incorporating undersampling\-aware constraints via ASP yields more reliable and interpretable brain connectivity estimates from fMRI time series, bridging the gap between neural dynamics and observational data\.

## To See Far, Look Close: Evolutionary Forecasting for Long\-term Time Series

**Authors:** Jiaming Ma; Siyuan Mu; Ruilin Tang; Haofeng Ma; Qihe Huang; Zhengyang Zhou; Pengkun Wang; Binwu Wang; Yang Wang

**ID:** 152940 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PFfOPbcZCE>) | [PDF](<https://openreview.net/pdf?id=PFfOPbcZCE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152940>)

The prevailing Direct Forecasting \(DF\) paradigm dominates Long\-term Time Series Forecasting \(LTSF\) by forcing models to predict the entire future horizon in a single forward pass\. While efficient, this rigid coupling of output and evaluation horizons necessitates computationally prohibitive re\-training for every target horizon\. In this work, we uncover a counter\-intuitive optimization anomaly: models trained on short horizons—when coupled with our proposed Evolutionary Forecasting \(EF\) paradigm—significantly outperform those trained directly on long horizons\. We attribute this success to the mitigation of a fundamental optimization pathology inherent in DF, where conflicting gradients from distant futures cripple the learning of local dynamics\. We establish EF as a unified generative framework, proving that DF is merely a degenerate special case of EF\. Extensive experiments demonstrate that a singular EF model surpasses task\-specific DF ensembles across standard benchmarks and exhibits robust asymptotic stability in extreme extrapolation\. This work propels a paradigm shift in LTSF: moving from passive Static Mapping' to autonomous Evolutionary Reasoning\.

## Dynamic Tokenization via Reinforcement Patching: End\-to\-end Training and Zero\-shot Transfer

**Authors:** Yulun Wu; Sravan Kumar Ankireddy; Samuel Sharpe; Nikita Seleznev; Dehao Yuan; Hyeji Kim; Nam Nguyen

**ID:** 148692 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vlSaF75Gmd>) | [PDF](<https://openreview.net/pdf?id=vlSaF75Gmd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148692>)

Efficiently aggregating spatial or temporal horizons to acquire compact representations has become a unifying principle in modern deep learning models, yet learning data\-adaptive representations for long\-horizon sequence data, especially continuous sequences like time series, remains an open challenge\. While fixed\-size patching has improved scalability and performance, discovering variable\-sized, data\-driven patches end\-to\-end often forces models to rely on soft discretization, specific backbones, or heuristic rules\. In this work, we propose Reinforcement Patching \(ReinPatch\), a novel framework that jointly optimizes a sequence patching policy and its downstream sequence backbone model with reinforcement learning\. By formulating patch boundary placement as a discrete decision process optimized via Group Relative Policy Gradient \(GRPG\), ReinPatch bypasses the need for continuous relaxations and performs dynamic patching policy optimization in a natural manner\. Moreover, our method allows strict enforcement of a desired compression rate, freeing the downstream backbone to scale efficiently, and natively supports multi\-level hierarchical modeling\. We evaluate ReinPatch on time\-series forecasting datasets, where it demonstrates compelling performance compared to state\-of\-the\-art data\-driven patching strategies\. Furthermore, our detached design allows the patching module to be extracted as a standalone foundation patcher, providing the community with visual and empirical insights into the segmentation behaviors preferred by a purely performance\-driven neural patching strategy\.

## Composable Causality: A Toolkit for Systematic Time\-Series Causal Discovery and Treatment\-Effect Benchmarking

**Authors:** Muhammad Hasan Ferdous; Md Osman Gani

**ID:** 139605 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FtoixLI4AT>) | [PDF](<https://openreview.net/pdf?id=FtoixLI4AT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139605>)

Real\-world multivariate time series datasets rarely come with verified ground\-truth causal structure, since the underlying mechanisms are typically unknown and randomized intervention is infeasible in most domains\. Empirical research on time\-series causal discovery and treatment\-effect estimation therefore depends on synthetic data, where the data\-generating process is specified by construction\. Existing data generation tools fall into two categories\. Some are fixed datasets that provide pre\-generated time series, which cannot be modified after release\. Others are script\-based generators, where each script fixes one combination of mechanism, confounding, and missingness, so any new combination requires writing new code\. Neither supports the controlled experiments that method development demands, where a single property such as sparsity, noise distribution, or missingness mechanism is varied while others are held fixed\. A further gap concerns counterfactual data\. Prior work in time\-varying treatment\-effect estimation has relied on per\-paper simulators with hardcoded mechanisms, while general\-purpose time\-series generators produce observational data only, leaving evaluation of conditional average treatment effect estimators reliant on conditional expectations rather than ground\-truth individual effects\. We introduce DTCD \(Datasets and Toolkit for Causal Discovery\), a data generation library that produces multivariate time series together with their ground\-truth contemporaneous and lagged adjacency matrices\. Topology, mechanism, noise, observational mask, and intervention policy are independent components that compose freely, enabling single\-axis sensitivity studies through configuration alone\. Paired counterfactual twins are produced by caching the stochastic realization during the factual rollout and re\-injecting it during the interventional rollout, recovering individual treatment effects to numerical precision\. To demonstrate the library, we present a reference benchmark of eight discovery algorithms across eighty\-one discovery configurations and four treatment\-effect estimators across eighteen CATE configurations, exposing failure modes not visible in aggregate metrics, including the inability of standard discovery methods to handle missing values regardless of whether the missingness mechanism is informative\.

## On the Invariance and Generality of Neural Scaling Laws

**Authors:** Xing Han; Liu Ziyin; Suchi Saria; Paul Liang

**ID:** 152053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VqUBACubep>) | [PDF](<https://openreview.net/pdf?id=VqUBACubep>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152053>)

Neural scaling laws establish a predictable relationship between model performance and data or compute, offering crucial guidance for resource allocation in new domains and tasks\. Yet such laws are most needed precisely where they are hardest to obtain: fitting one for a new model–task pair demands expensive sweeps that typically exhaust the very compute budget the law is meant to economize\. This paper poses the research question of how to develop generalizable scaling laws: laws fit once on a well\-resourced source domain and reliably transported to new domains where running a full sweep is infeasible, which requires a fundamental understanding of when and why scaling properties change\. We address this by identifying the right invariants: scaling laws are preserved under bijective \(information\-preserving\) transformations of the data and modified in predictable, information\-theoretically grounded ways under non\-bijective transformations that lower its information resolution $\\rho$: a single axis along which a law fit in one domain can be transported to another\. We validate this across language, vision, and speech, and demonstrate two cross\-domain applications: predicting scaling for language models trained on electronic health records from laws fit on general text, and predicting time\-series classification scaling under varying levels of noise injection, recovering the data\-scaling exponents to within 3\-percent error\.

## E4GEN: Event\-level Explainable Extreme\-Enhanced Time\-series Generation

**Authors:** Lin Jiang; Dahai Yu; Ximiao Li; Guang Wang

**ID:** 153750 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Iz17kYYauN>) | [PDF](<https://openreview.net/pdf?id=Iz17kYYauN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153750>)

Generating realistic time series is essential for scientific research and real\-world applications\. However, existing methods often emphasize overall distributional fidelity while failing to faithfully capture extreme events\. To address this limitation, we propose E4GEN, an explainable diffusion framework for extreme event\-aware time\-series generation\. E4GEN provides systematic insights into when, what, and how to control extreme\-event generation through three key components\. First, E\-Activator learns a dataset\-adaptive extreme\-control signal activation step during the denoising process, enabling control without interfering with regular temporal components such as trend and seasonality\. Second, E\-Predictor determines what control signal to enforce through Self\-Driven Semantic Prediction, where each sample derives its own control signal by inferring latent extreme\-event information during generation\. It also introduces a Data\-Conditioned Training, Noise\-Initiated Sampling mechanism to address the issue of unavailable training labels\. Third, E\-Control specifies how to guide extreme\-event generation through a trainable Extreme Control Network, which transforms semantic control signals into layer\-wise guidance signals and injects them into the denoising process\. We evaluate E4GEN on six datasets using 17 metrics, and extensive experiments show that E4GEN outperforms state\-of\-the\-art models across multiple dimensions, including overall fidelity, extreme\-event fidelity, and downstream utility\.

## SPATIALEPIBENCH: Benchmarking Spatial Information and Epidemic Priors in Forecasting

**Authors:** Ruiqi Lyu; Alistair Turcan; Bryan Wilder

**ID:** 139727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=857OhlxF9J>) | [PDF](<https://openreview.net/pdf?id=857OhlxF9J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139727>)

Accurate epidemic forecasting is crucial for public health response, resource allocation, and outbreak intervention, but remains difficult with sparse, noisy, and highly non\-stationary data\. Because epidemics unfold across interacting regions, spatiotemporal methods are natural candidates for improving forecasts\. Despite growing interest in spatial information, no standardized benchmark exists, and current evaluations often use simple chronological train\-test splits that do not reflect real\-time forecasting practice\. We address this gap with SpatialEpiBench, a challenging benchmark for spatiotemporal epidemic forecasting in realistic public\-health settings\. SpatialEpiBench includes 11 epidemic datasets with standardized rolling evaluations and outbreak\-specific metrics\. We evaluate adjacency\-informed forecasting models with widely used epidemic priors that adapt general models to epidemiology, but find that most methods underperform a simple last\-value baseline from 1 day to 1 month ahead, even during outbreaks and with these priors\. We identify three major failure modes: \(1\) poor outbreak anticipation, \(2\) difficulty handling sparsity and noise, and \(3\) limited utility of common geographic adjacency for epidemiological spatial information\. We release benchmark data, code, and instructions at https://github\.com/Rachel\-Lyu/SpatialEpiBench to support development of operationally useful epidemic forecasting models\.

## High\-dimensional Gaussian Graphical Model Testing for Long\-Memory Time Series

**Authors:** Percy S\. Zhai; Ping\-Shou Zhong; Wei Biao Wu

**ID:** 151184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKrvJWrlKV>) | [PDF](<https://openreview.net/pdf?id=cKrvJWrlKV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151184>)

Many real\-world high\-dimensional time series exhibit long\-memory, but Gaussian graphical model testing in this regime remains understudied\. We develop a direct, data\-adaptive test statistic for assessing conditional independence in the graph structure of stationary Gaussian time series\. We establish a finite\-sample, Berry\-\-Esseen type Gaussian approximation bound for the statistic, which applies to both short\-memory and long\-memory time series\. The testing procedure is fully data\-adaptive using block bootstrap method, on which we provide a finite\-sample validity result including in the ultra\-high\-dimensional scenario, and can be extended to comparing graphical structures in two\-sample tests\. We also develop a consistency\-empowered correction to the statistic and show that such tests attain asymptotic consistency in both size and power\. Our proposed method is applied to a real\-world fMRI data to understand functional connectivities within brain in different periods\.

## GlucoFM: A Dual\-Stream Foundation Model for Continuous Glucose Monitoring

**Authors:** Zechen Li; Keerthana Natarajan; Weizhi Zhang; Simon Lee; Yuwei Zhang; Max Xu; Menglian Zhou; Zeinab Esmaeilpour; Flora Salim; Mark Malhotra; Lindsey Sunden; Shwetak Patel; Yuzhe Yang; Ahmed Metwally

**ID:** 152461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SxWZ7KJ3KP>) | [PDF](<https://openreview.net/pdf?id=SxWZ7KJ3KP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152461>)

Continuous glucose monitoring \(CGM\) provides a dense window into metabolic physiology, yet existing generic time\-series and CGM\-specific foundation models typically learn from entangled glucose sequences without explicitly capturing the temporal structure of glycemic dynamics\. We present GlucoFM, a lightweight CGM foundation model that aligns irregular recordings to a 24\-hour chronological grid, preserves observation masks, and decomposes glucose dynamics into slow physiological state and transient event streams, capturing low\-frequency glycemic baselines and short\-term deviations that may reflect acute physiological responses or sensor artifacts\. GlucoFM is pretrained on 109,066 hours of unlabeled CGM recordings from 477 subjects with two complementary objectives: masked contextual latent prediction over fused daily representations and temporal dynamics prediction over state and event streams\. Across four diverse cohorts and seven clinical prediction tasks, GlucoFM achieves the strongest frozen linear\-probing performance among evaluated baselines, improving average PR\-AUC by 4\.1 points over the best CGM\-specific foundation model\. Its gains are most pronounced on core metabolic outcomes, leading PR\-AUC on all diabetes\-risk and $\\beta$\-cell dysfunction tasks and on 3 of 4 insulin\-resistance tasks\. GlucoFM also achieves the best overall cross\-dataset transfer performance among evaluated methods and strong few\-shot adaptation, highlighting physiology\-aware decomposition as an effective inductive bias for transferable CGM representation learning\.

## Beyond Empirical Support: Structured Outlier Generation via Sinkhorn Optimal Transport

**Authors:** Haixiang Sun; Andrew Liu

**ID:** 151741 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YS9yqX3KCa>) | [PDF](<https://openreview.net/pdf?id=YS9yqX3KCa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151741>)

Outliers are essential for evaluating and improving the robustness of machine learning systems, especially when future distributions may differ significantly from historical training data\. In high\-stakes applications, robustness often depends on rare cases that finite datasets fail to capture, making simple resampling or perturbation insufficient for stress scenario generation\. Existing outlier synthesis methods typically rely on sparse neighborhoods, low support latent regions, or classifier boundary crossings, which can be heuristic, unstable, and tied to specific modalities or architectures\. We therefore propose Sinkhorn Boundary Outlier Generation \(SBOG\), a structured framework for latent\-space outlier generation that couples Sinkhorn optimal transport geometry with distributionally robust boundary modeling\. The resulting Sinkhorn\-induced support cost guides the sampler toward weakly supported boundary regions, while semantic constraints prevent uncontrolled drift from the intended context, yielding controlled deviations from the in\-distribution reference measure rather than arbitrary sparse\-region samples\. Experiments on time series anomaly generation and image outlier synthesis show that our framework produces informative, semantically controlled outliers and improves downstream robustness evaluation across modalities, providing a foundation for stress scenario generation beyond empirical support\.

## TraXion: Rethinking Pre\-training Frameworks for Mobility and Beyond

**Authors:** Shang\-Ling Hsu; Mark Tenzer; Cyrus Shahabi; Khurram Shafique

**ID:** 152716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QtFyIbY3oe>) | [PDF](<https://openreview.net/pdf?id=QtFyIbY3oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152716>)

Human mobility differs from text and from generic time series in three structural ways: visits are tuple\-valued events whose meaning depends on the joint distribution over location, time, and activity; users carry persistent signatures across trajectories; and visits are not independent across users, since co\-location at shared places is a primary signal\. Existing pre\-training recipes for mobility import objectives from language modeling, treating trajectories as sentences and visits as tokens, an analogy that fails against each of the three properties above\. These properties define a broader class, multi\-entity spatiotemporal event streams \(MESES\), spanning enterprise authentication logs, electronic health records, and other event\-stream domains where entities share infrastructure, schedules, or contexts\. We make the properties precise as three axioms that any pre\-training framework for MESES should satisfy, and introduce TraXion, whose objectives and architecture are jointly designed to meet them\. A single TraXion checkpoint per dataset beats task\-specific baselines on every task across six public mobility datasets covering anomaly detection, next\-POI recommendation, next\-visit prediction, and social\-link prediction\. The same recipe, applied unchanged to enterprise authentication logs and ICU mortality prediction, matches or exceeds prior work on both, showing that event streams from domains as different as mobility, security, and healthcare can be modeled under a single framework\.

## From Heartbeat to Cardiochoreography: A Mechanics Foundation Model for Individualized 4D Cardiac Motion Generation Conditioned on Electrophysiology

**Authors:** Ziquan Wei; Tingting Dan; Guorong Wu

**ID:** 151117 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=crTTYgpAhR>) | [PDF](<https://openreview.net/pdf?id=crTTYgpAhR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151117>)

The electrocardiogram \(ECG\) is a time series that records the electrical activity driving cardiac motion through electromechanical coupling \(EMC\), where the depolarization captured by ECG triggers each heartbeat\. The temporal delay and low spatial resolution of such multichannel dynamic data often cause temporal and spatial misalignments along the physical motion, limiting the application of ECG data to event/segment\-based downstream clinic practice\.  Although many efforts have been made to recover spatiotemporal trajectories conditioned on ECG waveforms, the intrinsic principle of EMC that results in various temporal delays remains underexplored in current generative models\. To address this limitation, we propose Time2Track, a mechanics foundation model that generates individualized 4D heart motion from same\-day ECG recordings by encoding electrophysiology as delay\-aware token embeddings\. Specifically, a learnable wavelet decomposition extracts the electromechanical delay, which is then formulated as a physics\-based conditioning signal for motion diffusion\. Time2Track generates 4D motion with individual\-specific kinematics, avoiding the collapse to a population average, i\.e\., a common failure scenario when diffusing motions whose inter\-subject differences are subtle\.  On $n=40,577$ subjects from the UK Biobank, our Time2Track accurately synthesizes 4D cardiac trajectories from ECG and preserves inter\-subject diversity, a regime in which generic motion diffusion baselines collapse to a population average\.

## Revisiting the Generic Transformer: Deconstructing a Strong Baseline for Time Series Foundation Models

**Authors:** Yunshi Wen; Wesley M Gifford; Chandra Reddy; Lam Nguyen; Jayant Kalagnanam; Agung Julius

**ID:** 155883 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=27si2ieI4S>) | [PDF](<https://openreview.net/pdf?id=27si2ieI4S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155883>)

The recent surge of interest in Time Series Foundation Models has rapidly advanced the field\. Yet, heterogeneous training setups across studies make it difficult to determine whether performance improvements came from architectural innovations or effective data engineering\. In this work, we investigate whether a standard patch Transformer architecture can achieve state\-of\-the\-art zero\-shot forecasting performance when paired with a straightforward training protocol\. We conduct a comprehensive ablation study covering model scaling, data composition, and training techniques to isolate the essential ingredients for high performance\. Our findings identify the key drivers of forecasting accuracy, confirming that the generic architecture itself can deliver high performance with good scalability\. By strictly controlling these experimental variables, we provide comprehensive empirical results on model scaling across multiple dimensions\. Furthermore, we establish that the effectiveness of this training protocol generalizes robustly across benchmarks and alternative architectures\. We release our open\-source model and detailed findings to establish a transparent, reproducible baseline for future research\.

## A Set\-Sequence Model for Time Series

**Authors:** Elliot Epstein; Apaar Sadhwani; Kay Giesecke

**ID:** 148413 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y1ZoyGsVuL>) | [PDF](<https://openreview.net/pdf?id=y1ZoyGsVuL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148413>)

Sequence models have advanced Multivariate Time Series \(MTS\) modeling by learning complex, long\-range temporal dependencies\. Many practical settings, however, involve predicting the evolution of a set of MTSs \-\- an unordered collection of units \(e\.g\., a basket of stocks, a pool of loans, a fleet of sensors\)\. This cross\-sectional structure offers an opportunity to leverage signals shared across units \(e\.g\., market volatility, correlated defaults\) that are missed when each MTS is processed independently\. Crucially, treating the entire cross\-section as a single high\-dimensional MTS is infeasible because the number of units varies dynamically at inference\. We propose Set\-Sequence, a backbone\-agnostic architecture for set\-of\-MTS prediction that leverages this cross\-sectional structure\. A permutation\-invariant Set module extracts a summary of the population, while a Sequence module \(e\.g\., Transformer/SSM/RNN\) then models each unit’s temporal dynamics conditioned on both its own history and the learned cross\-sectional context\. This architecture naturally accommodates varying set cardinalities, supports unaligned series, integrates with standard sequence backbones, and scales linearly in cross\-sectional size\. Across a synthetic contagion task and two large\-scale real\-world applications \-\- equity portfolio optimization and loan risk prediction \-\- Set\-Sequence consistently improves sequence backbones and outperforms domain\-specific baselines, delivering higher Sharpe ratios, improved AUCs, and interpretable cross\-sectional summaries\.

## CAST: Causal Anchored Simplex Transport for Distribution\-Valued Time Series

**Authors:** Jiecheng Lu; Jieqi Di; Runhua Wu; Yuwei Zhou

**ID:** 155150 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7wHSu87prc>) | [PDF](<https://openreview.net/pdf?id=7wHSu87prc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155150>)

Many decision\-facing stochastic systems are observed through aggregate distributions rather than scalar trajectories: queue occupancies, mobility shares, public\-health mixtures, generation\-source shares, ecological compositions, and air\-quality severity profiles all live on the probability simplex and evolve over time\. We study causal \(time\-respecting online\) forecasting for these distribution\-valued time series and argue that the transition operator itself should be structured around the simplex\. We introduce CAST \(Causal Anchored Simplex Transport\), a successor\-local operator that \(i\) retrieves empirical successors from causal context, \(ii\) stabilizes them with a persistence anchor, and \(iii\) applies a bounded local stochastic transport on ordered supports; every stage preserves the simplex by construction\. We identify a structural failure mode, latent transition\-kernel aliasing, where similar observed distributions evolve differently under different contextual regimes, and prove that any forecaster depending only on an aliased summary incurs an irreducible weighted Jensen\-\-Shannon excess\-risk lower bound, while the CAST hypothesis class contains the regime\-aware Bayes successor; for ordered supports an additional Pinsker separation holds whenever the transported successor lies outside the no\-transport anchor hull\. On a suite of eleven public and simulated benchmarks spanning ecology, energy, diet, mortality, employment, air quality, severe weather, mobility, and $G/G/1$, $G\_t/G/1$ queue occupancy, CAST achieves the best average rank on both one\-step KL \(1\.27\) and autoregressive rollout JSD \(1\.91\), winning 8/11 sections on each metric against a broad statistical, compositional, recurrent, convolutional, Transformer, and modern time\-series baseline set, and top\-2 on all 11 sections for offline KL\. Component ablations and a controlled synthetic aliasing experiment corroborate the theory\.

## Nearest\-Neighbor Radii under Dependent Sampling

**Authors:** Yuanyuan Gao; Yilong Hou; Zhexiao Lin

**ID:** 150949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6OkacBDBI>) | [PDF](<https://openreview.net/pdf?id=e6OkacBDBI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150949>)

Nearest\-neighbor methods are fundamental to classical and modern machine learning, yet their geometric properties are typically analyzed under independent sampling\. In this paper, we study the nearest\-neighbor radii under dependent sampling\. We consider strong mixing dependent observations and ask whether dependence changes the scale of nearest\-neighbor neighborhoods\. We establish distribution\-free almost sure convergence under polynomial mixing and sharp non\-asymptotic moment bounds under geometric mixing\. The moment bounds depend on the local intrinsic dimension rather than the ambient dimension, making the results applicable to high\-dimensional data concentrated near lower\-dimensional manifolds\. Synthetic experiments and real\-world time\-series benchmarks support the theory, showing that nearest\-neighbor geometry remains informative under dependence sampling\.

## BACE: Behavior\-Adaptive Connectivity Estimation from Multi\-Region Neural Recordings

**Authors:** Mehrnaz Asadi; Sina Javadzadeh; Rahil Soroushmojdehi; Ali Mousavi; Terence Sanger

**ID:** 151970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WSGT96IPb3>) | [PDF](<https://openreview.net/pdf?id=WSGT96IPb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151970>)

Understanding how distributed brain regions coordinate during behavior requires models that are both predictive and interpretable\. We introduce Behavior\-Adaptive Connectivity Estimation \(BACE\), an end\-to\-end framework for learning behavior\-conditioned directed effective connectivity from multi\-region intracranial local field potentials \(LFPs\)\. BACE first encodes within\-region dynamics with region\-specific temporal encoders, then applies a learned adjacency matrix selected for each behavioral context, and finally forecasts future neural activity through a graph\-conditioned autoregressive decoder\. This design yields explicit region\-level connectivity matrices whose edges are tied to predictive dynamics rather than post\-hoc explanation\. On controlled synthetic time series with known directed graphs, BACE recovers the ground\-truth edge structure from forecasting alone\. We then evaluate BACE on human deep\-brain LFP recordings from three participants performing structured motor tasks\. Across participants, BACE achieves strong neural forecasting while producing compact, behavior\-specific directed graphs that can be inspected across task segments\. Reliability analyses further support the stability of the inferred connectivity patterns\. Together, these results position BACE as a practical framework for estimating behavior\-adaptive effective connectivity from high\-dimensional intracranial recordings, enabling interpretable hypotheses about how deep\-brain networks reorganize during behavior\.

## AdaST: Adaptive Coupling for Spatial\-Temporal Forecasting

**Authors:** Zhenyu Lei; Chenghao Liu; Yushun Dong; Ryan Qi Wang; Jundong Li

**ID:** 155866 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2IWnVy1qoe>) | [PDF](<https://openreview.net/pdf?id=2IWnVy1qoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155866>)

Spatial\-temporal \(ST\) forecasting underpins many real\-world systems such as traffic, climate, and energy networks\. While existing methods implicitly assume strong spatiotemporal coupling, we observe that real\-world ST data exhibits distinct coupling regimes, ranging from temporal\-dominated and spatial\-dominated to strongly coupled patterns\. This mismatch causes current models to suffer from spurious dependencies and degraded performance when one correlation dominates\. To overcome this limitation, we aim to dynamically modulate spatial and temporal modeling based on the data's inherent coupling structure\. However, three key challenges exist: unknown coupling structure, heterogeneous coupling dynamics, and suboptimal spatial modeling\. We propose AdaST, an adaptive ST forecasting framework that tackles these challenges through a decompose\-recompose paradigm\. AdaST factorizes inputs into components capturing different coupling patterns using heterogeneity\-aware experts\. Each component is processed by role\-aligned modules, and a correlation\-informed adaptive recomposer integrates them for final prediction\. Extensive experiments confirm that AdaST significantly outperforms state\-of\-the\-art baselines, validating the necessity of an adaptive approach\.

## MOSAIC: Module Discovery via Sparse Additive Identifiable Causal Learning for Scientific Time Series

**Authors:** Shicheng Fan; Nour Elhendawy; Jianle Sun; Ke Fang; Kun Zhang; Yihang Wang; Lu Cheng

**ID:** 153679 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JbHELfIvUK>) | [PDF](<https://openreview.net/pdf?id=JbHELfIvUK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153679>)

Causal representation learning \(CRL\) seeks to recover latent variables with identifiability guarantees, typically up to permutation and component\-wise reparameterization under appropriate assumptions\. However, identifiability does not imply interpretability: latent semantics are typically assigned post hoc by alignment with known ground\-truth factors\. This limitation is particularly acute in scientific time series, where underlying mechanisms are unknown and discovering interpretable structure is a primary goal\. In contrast, scientific observations \(such as residue\-pair distances, climate indices, or process sensors\) are inherently semantic, as they correspond to named physical quantities\. This raises a key question: can the interpretability of observations be transferred to the identifiable latent space? We propose MOSAIC \(Module discovery via Sparse Additive Identifiable Causal learning\), a sparse temporal VAE that integrates temporal CRL identifiability with support recovery over observed variables\. MOSAIC identifies latent variables via regime\-conditioned temporal variation, and recovers for each latent a sparse set of associated observations through an additive decoder, yielding module\-level interpretability\. We show that ANOVA main\-effect supports are identifiable under general smooth mixing functions, and provide finite\-sample recovery guarantees for a tractable sparse\-additive variant\. Empirically, MOSAIC recovers domain\-consistent variable groups across RNA molecular dynamics, solar wind, ENSO climate, the Tennessee Eastman process, and a synthetic tokamak benchmark, enabling interpretable discovery of latent mechanisms in scientific time series\.

## CVTA: Cross\-Variable Temporal Attention for Multivariate Irregular Time Series Prediction

**Authors:** Ankitkumar Joshi; Milos Hauskrecht

**ID:** 152025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W5zQOIkTwd>) | [PDF](<https://openreview.net/pdf?id=W5zQOIkTwd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152025>)

Irregularly sampled multivariate time series arise in many real\-world domains such as healthcare, climate science, and large\-scale monitoring systems\. Characterized by asynchronous observations and heterogeneity across variables, such time series pose significant challenges for forecasting\. In this work, we introduce Cross\-Variable Temporal Attention \(CVTA\), a short\-term, continuous\-time forecasting framework that learns prediction functions from a compact, interpretable Markov state summarizing recent temporal dynamics across variables\. CVTA uses Variable\-Conditioned Embeddings to project heterogeneous variables into variable\-specific latent spaces, and applies temporal attention to capture cross\-variable dependencies from this state\. Furthermore, we demonstrate that CVTA can be integrated as an auxiliary module into existing state\-of\-the\-art prediction models through a dynamic meta\-decision model\. Extensive experiments on multiple real\-world benchmarks show that CVTA achieves strong short\-term predictive accuracy, supports efficient online inference, improves existing prediction models when used as an auxiliary module, and learns attention patterns that align well with domain knowledge\.

## Online Change\-point Detection using Foundation Probabilistic Forecasting Models

**Authors:** Alan Moore; Zhengyuan Zhu; Lynna Chu

**ID:** 148517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xIyD2dHHEW>) | [PDF](<https://openreview.net/pdf?id=xIyD2dHHEW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148517>)

Online change\-point detection is a fundamental problem in sequential monitoring, where the goal is to detect distributional changes in a time series as quickly as possible while controlling false alarms\.  We propose a general framework for online change\-point detection that leverages foundation probabilistic forecasters, such as Chronos\-2, which can capture complex temporal structure including trend, seasonality, heteroskedasticity, and nonlinear dependence\. Our approach transforms each incoming observation relative to its predictive quantile forecast into an approximately standard Gaussian monitoring statistic, which can then be used in classical sequential detection procedures such as CUSUM and MOSUM\. To reduce adaptation of the forecaster to post\-change observations, we introduce a buffer between the forecasting context window and the forecast target\. Because this design can induce serial dependence in the monitoring statistics, we develop a parametric bootstrap procedure to calibrate critical thresholds and control false alarms in practice\. Extensive simulations across data\-generating processes involving non\-normality, trend, seasonality, heteroskedasticity, and autoregressive dependence show that the proposed method achieves competitive detection performance relative to benchmark procedures, while requiring no explicit specification of a parametric pre\-change model\.

