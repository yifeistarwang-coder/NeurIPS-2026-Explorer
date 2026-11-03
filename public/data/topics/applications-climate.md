# Applications / Climate

应用 / 气候

24 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Scaling Storm\-Resolving Atmospheric AI Simulation to the Entire Planet

**Authors:** Zeyuan Hu; Noah Brenowitz; Akshay Subramaniam; Jaideep Pathak; Tao Ge; Mohammad S Abbas; Suman Ravuri; Karthik Kashinath; Noel Keen; Naser Mahfouz; Peter Caldwell; Mike Pritchard

**ID:** 155879 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2A1MOSjJ6y>) | [PDF](<https://openreview.net/pdf?id=2A1MOSjJ6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155879>)

Kilometer\-scale convection shapes precipitation extremes, tropical organization, and cloud feedbacks, but most global atmospheric models approximate these processes at 25\-\-100\\,km resolution\. Global storm\-resolving physics models resolve convective systems explicitly, but at a cost\-\-\-roughly one MWh per simulated day on exascale supercomputers\-\-\-that limits their use for long\-duration atmospheric simulation\. We introduce STRATA \(Storm\-resolving Tile\-based autoRegressive Atmosphere Transformer Architecture\), the first autoregressive AI emulator for global storm\-resolving atmospheric dynamics\. STRATA is trained on the highest\-resolution atmospheric dataset yet used for global AI emulation: 17 days of output from the SCREAM physics model at 4\.9\-km resolution \($\{\\sim\}25$ million grid cells\) sampled every 10 minutes\. Our central premise is that since on 10\-minute timescales atmospheric dynamics are predominantly local, training on small spatial tiles trades scarce global temporal samples for abundant local spatial samples and enables global rollout via overlapping\-tile blending\. STRATA combines 3D patch embedding and local 3D neighborhood attention for tractable modeling of high\-resolution atmospheric tiles, a novel Stereographic Rotary Position Embedding \(StereoRoPE\) for grid\-invariant positional encoding, and a pixel\-space de\-aliasing decoder that suppresses patch\-scale rollout artifacts\. An iso\-FLOP scaling study reveals that km\-scale emulation requires $\{\\sim\}10\\times$ more FLOPs per horizontal grid point than coarse\-resolution AI weather models, consistent with the higher information density of convective\-scale dynamics\. Despite training on only 17 days of SCREAM output, STRATA produces stable 24\-hour global rollouts with realistic km\-scale dynamics across diverse weather regimes, though large\-scale biases develop with lead time\. STRATA achieves 48 simulation days per megawatt\-hour\-\-\-about 50 times better energy efficiency than the underlying SCREAM physics model\-\-\-and 741 simulated days per wall\-clock day at 512 H100 GPUs\. Code and dataset will be publicly released\.

## INVITA\-WheatFieldState: A Real\-World Benchmark for Crop\-State Estimation in Wheat Field Trials

**Authors:** Heming Du; Ruihan Lu; Javier Fernandez; Zijian Wang; Yan Zhao; Scott C Chapman; Zi Huang; Xin Yu

**ID:** 138959 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=txMdBW2sk9>) | [PDF](<https://openreview.net/pdf?id=txMdBW2sk9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138959>)

Field trials use plot\-level crop\-state measurements to interpret how crops grow under real field conditions, but repeated measurements of canopy greenness, canopy amount, canopy closure, and growth stage require field visits, sensing campaigns, and post\-processing\. Modern wheat trials also collect weather records, trial metadata, field\-camera images, UAV and satellite observations, proximal sensors, canopy products, and phenological surveys\. Turning these records into a machine\-learning benchmark is nontrivial because observations are sparse, asynchronous, unevenly collected, missing for structured reasons, and tied to measurement pipelines\. We introduce INVITA\-WheatFieldState, a benchmark derived from the INVITA wheat field\-trial archive for estimating the crop state of a plot on a target date from observations available for that plot and date\. Each plot\-date example specifies a plot, date, and crop\-state target, and is paired with available observations after temporal and source\-provenance filtering\. The derived dataset contains over 220k examples across NDVI, LAI, FCover, and Zadoks growth stage, covering canopy greenness, canopy amount, canopy closure, and phenological timing\. LAI and FCover are released with provenance labels that distinguish product and proxy targets rather than pooled manual ground truth\. The benchmark suite provides a plot\-disjoint split matched to the plot\-level experimental unit, validators, prediction schemas, regression representations, and prediction\-level diagnostics\. Results show that source, timing, metadata, and observation\-availability structure are strong signals\. Observation\-set representations improve some all\-example targets, while sensor\-sequence, field\-camera, and fusion representations remain target\-dependent and coverage\-bound\. INVITA\-WheatFieldState offers a concrete test case for ML methods that must learn from incomplete, asynchronous, and provenance\-sensitive measurements used to study crop development in real fields\.

## Weather\-Robust Cross\-View Geo\-Localization via Prototype\-Based Semantic Part Discovery

**Authors:** Chi Nguyen Tran; Dao S Minh; Trung\-Kiet Huynh; Phu\-Hoa Pham; Phu\-Quy Nguyen\-Lam; Long Tran\-Thanh

**ID:** 148562 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wxPKGRCVh8>) | [PDF](<https://openreview.net/pdf?id=wxPKGRCVh8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148562>)

Low\-altitude economy has been experiencing rapid growth in recent years, with significant contributions to the global economy\. While common drone tasks such as delivery, inspection, and search\-and\-rescue typically use Global Navigation Satellite Systems \(GNSS\) to navigate, there is an increasing need for developing alternative solutions as GNSS signals can be easily jammed, spoofed, or unavailable over a prolonged operational time\. As such, cross\-view geo\-localization \(CVGL\), which matches an oblique drone view to a geo\-referenced satellite tile, has emerged as a potent alternative that lets an autonomous drone localize itself when GNSS fails\. Despite strong recent progress, three limitations persist in current CVGL methods: 1\) global\-descriptor designs compress the patch grid into a single vector without separating what is shared across the view gap \(layout\) from what is not \(texture\); 2\) altitude\-related scale variation is implicitly retained in the learned embedding rather than treated as a nuisance to be marginalized out; and 3\) multi\-objective training relies on hand\-tuned scalars over losses that live on incompatible gradient scales\. To address these limitations, we propose SkyPart, a lightweight swappable head for patch\-based vision transformers \(ViTs\) that institutes explicit part grouping over the patch grid\. SkyPart has four components grounded in established theory: \(i\) learnable prototypes that compete for patch tokens via a single\-pass cosine assignment; \(ii\) altitude\-conditioned linear modulation applied only during training so that the retrieval embedding is altitude\-free at inference; \(iii\) a graph\-attention readout over active prototypes; and \(iv\) a Kendall uncertainty\-weighted multi\-objective loss whose stationary points are Pareto\-stationary\. At 26\.95M parameters and 22\.14 GFLOPs, SkyPart is the smallest among the top\-performing methods in our comparison and sets a new state of the art on SUES\-200, University\-1652, and DenseUAV datasets under a single\-pass, no\-re\-ranking, no test\-time augmentation \(TTA\) protocol\. Furthermore, its accuracy gap to the strongest baseline widens under the ten\-condition WeatherPrompt corruption benchmark

## ExtrapAir: Air Quality Inference at Unmonitored Locations via Weather\-Bridged Spatial Attention

**Authors:** Gaoyun Lin; Binwu Wang; Zhengyang Zhou; Yang Wang

**ID:** 154246 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBdLg0pxh3>) | [PDF](<https://openreview.net/pdf?id=FBdLg0pxh3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154246>)

Air quality prediction at unmonitored locations is challenging because historical AQI observations are unavailable, while conventional spatiotemporal models largely rely on target histories to learn spatial dependencies\. Meanwhile, widely available weather covariates provide useful station\-specific evidence for target\-absent inference\. In this paper, we propose \\textbf\{ExtrapAir\}, a lightweight weather\-bridged framework for air quality inference at unmonitored locations\. ExtrapAir preserves variable\-specific weather patterns through per\-variable weather encoding and learns adaptive weather and AQI correlations for spatial transfer\. To support robust inference, we introduce \\textbf\{Activation Attention with Prior Inductive Biases\}, which enables non\-competitive spatial aggregation, incorporates geographic and semantic priors for station\-pair guidance, and avoids full station\-to\-station attention computation for scalability\. Extensive experiments on five real\-world air\-quality datasets against \\textbf\{32\} baselines show that ExtrapAir reduces MAE by up to \\textbf\{15\.24\\%\} overall and \\textbf\{16\.01\\%\} on unmonitored stations, while cutting training time by \\textbf\{84\.9\\%\} and memory usage by \\textbf\{76\.23\\%\}, achieving a strong accuracy\-\-efficiency trade\-off\.

## OroPrecipBench: a km\-scale benchmark for spatial precipitation downscaling over complex terrain

**Authors:** Hongyi Chen; Xiaokai Yan; Jiadong Zhang; Jingtao Ding; Xiaojun Liang; Yong Li; Xiao\-Ping \(Steven\) Zhang

**ID:** 139041 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIt8ejKQlL>) | [PDF](<https://openreview.net/pdf?id=oIt8ejKQlL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139041>)

Precipitation downscaling over complex terrain is essential for resolving water availability, flood risk, and extremes, but current evaluations rarely test whether models learn orographic structure rather than only pixel\-wise accuracy\. We introduce OroPrecipBench, a km\-scale benchmark for orographic precipitation downscaling across five U\.S\.\\ terrain regimes\. The benchmark provides a shared\-domain dual\-track protocol: a perfect\-model track that coarsens 3\\,km HRRR analyses to isolate controlled super\-resolution skill, and an observation\-grounded track that downscales 25\\,km ERA5 to 4\\,km PRISM to test practical robustness under source\-target shift\. We also introduce PEP\-D, a terrain\-conditioned diagnostic that measures errors in elevation\-\-precipitation profiles, complementing pointwise, spatial, and extreme\-precipitation metrics\. Evaluating ten statistical, deterministic deep\-learning, and generative baselines shows that strong controlled super\-resolution does not reliably translate to real\-case or cross\-regime downscaling\. Models that reduce pixel\-wise error can still distort terrain\-dependent precipitation and upper\-tail rainfall, and terrain\-conditioned structure is especially fragile under transfer\. OroPrecipBench exposes these failure modes and motivates source\-shift\-robust, terrain\-constrained, and tail\-aware downscaling methods\. Benchmark is available \\href\{https://anonymous\.4open\.science/r/OroPrecipBench\-612D\}\{here\}\.

## Njord: A Probabilistic Graph Neural Network for Ensemble Ocean Forecasting

**Authors:** Daniel Holmberg; Joel Oskarsson; Erik Wikingsson; Fredrik Lindsten; Teemu Roos

**ID:** 151699 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YgZlTScsDW>) | [PDF](<https://openreview.net/pdf?id=YgZlTScsDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151699>)

Ocean dynamics are inherently chaotic, yet existing machine learning ocean models produce only deterministic forecasts\. We introduce Njord, a probabilistic data\-driven model for ocean forecasting, applicable to both global and regional domains\. Njord combines a deep latent variable framework with a graph neural network architecture, enabling sampling each forecast step in a single forward pass\. We apply Njord globally at 0\.25° resolution and regionally to the Baltic Sea at 2 km resolution\. To scale to these large ocean grids we introduce K\-means cluster meshes that adapt to irregular sea surface geometry\. Experiments demonstrate strong performance on both domains compared to deterministic machine learning baselines, while also providing uncertainty estimates from the sampled ensemble forecasts\. On the global OceanBench benchmark, Njord achieves the lowest errors on average across upper\-ocean variables when evaluated against real\-world observations, with the largest improvements in surface temperature prediction\.

## Learning Event\-to\-Field Operators Without Interpolation

**Authors:** xingyu sha

**ID:** 155189 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7b41APqLRi>) | [PDF](<https://openreview.net/pdf?id=7b41APqLRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155189>)

A point source in a PDE does not occupy an entire grid\. A weather station reports one value at one site; it does not observe the temperature between stations\. A pickup event in a city occurs at a coordinate and a time; it is not born as an image\. Yet many neural\-operator pipelines begin by turning such sparse observations into dense surrogate fields before learning\. This interpolation step is often treated as harmless preprocessing, but in sparse regimes it changes the object on which the operator is asked to act\.  We introduce the Dirac Neural Operator \(DIRAC\-NO\), a measure\-native neural operator for sparse event\-to\-field learning without interpolation\. DIRAC\-NO keeps observations as atomic event measures until query time and constructs the output field through adaptive Dirac\-kernel aggregation\. Because this aggregation is implemented by direct summation, the front end preserves source additivity at the aggregation stage and admits a learned Green\-kernel view of source\-to\-field response\.  Across controlled point\-source PDE benchmarks and real sparse reconstruction tasks, DIRAC\-NO exposes the cost of interpolation\-first learning\. On MeasureBench\-1D, it achieves relative $L^2$ error 0\.015 at $n=128$, compared with 0\.49 for FNO, and it better preserves superposition structure in trained models\. In 2D, it is strongest under parameter and density shift, while ERA5 reconstruction shows that the representation advantage persists beyond analytic PDEs at high observation budgets\. Boundary cases and negative\-control event streams further show that the benefit appears where the representation argument predicts: sparse, event\-native tasks with source\-response structure\. These results suggest that sparse operator learning should be organized not only by the neural backbone, but by the native space in which the input is represented\.

## PhysEval\.Weather: An Evaluation Framework for Physical Consistency in ML Weather Models

**Authors:** Emma Kasteleyn; Timo Maier; Axel Lauer; Veronika Eyring; Pierre Gentine; Ana Lucic

**ID:** 139795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=43RBVCfkqe>) | [PDF](<https://openreview.net/pdf?id=43RBVCfkqe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139795>)

Machine learning weather prediction \(MLWP\) models have achieved impressive forecasting performance at a small fraction of the computational costs required for traditional physics\-based methods\.      However, they are primarily \(1\) data\-driven and \(2\) evaluated using pixel\-wide error metrics \(e\.g\., RMSE\), so there are no guarantees that their forecasts are physically consistent\.      We introduce \\textbf\{PhysEval\.Weather\}, an evaluation framework that assesses the physical realism of MLWP models across three types of metrics: conservation, spectral, and dynamical\. By quantifying physical realism, this tool guides the development of physics\-informed architectures and helps evaluate whether MLWP models are reliable for operational use\.

## Otter Weather: Skillful and computationally\-efficient medium\-range weather forecasting

**Authors:** Cristiana Diaconu; Jonas Scholz; Aliaksandra Shysheya; Stratis Markou; Payel Mukhopadhyay; Miles Cranmer; Richard Turner

**ID:** 148663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w4fZFKKSwS>) | [PDF](<https://openreview.net/pdf?id=w4fZFKKSwS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148663>)

State\-of\-the\-art medium\-range AI weather models rival traditional Numerical Weather Prediction \(NWP\) but require massive training budgets\. This restricts access for under\-resourced groups and severely limits fast model iteration\. We introduce Otter, a highly efficient spatiotemporal forecasting model designed to democratise high\-performance weather prediction with AI\. Otter is evaluated on ERA5 reanalysis data using the standard WeatherBench protocols where it significantly advances the skill\-compute Pareto frontier\. The deterministic version outperforms the best NWP baseline by 9\.6\\% at a 24\-hour lead time while requiring fewer than 3\.5 A100\-days for training\. It provides a 2x efficiency gain over lightweight AI models and a 100\-fold reduction in compute compared to resource\-intensive frontier architectures\.

## PROLA: Principal\-Orthogonal Low\-rank Adaptation for Predictive Spatiotemporal Weather Downscaling

**Authors:** Minseo Yoon; Minseong Bae; Sojin Lee; Hyunwoo J\. Kim

**ID:** 155892 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=23nejdcCJ9>) | [PDF](<https://openreview.net/pdf?id=23nejdcCJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155892>)

High\-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts\. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high\-resolution fields from recent coarse states remains challenging and costly\. We formulate this setting as Predictive Spatiotemporal Weather Downscaling \(\\textbf\{PSWD\}\), where the target is a future high\-resolution trajectory rather than a same\-time refined field\. To make this structure explicit, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads\. For backbone adaptation, we introduce \\textbf\{PROLA\} \(PRincipal\-Orthogonal Low\-rank Adaptation\), which splits a fixed low\-rank budget between pretrained principal directions and their orthogonal complement\. PROLA further rescales rank\-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank\. Experiments in the PSWD setting show that PROLA outperforms representative low\-rank adaptation baselines under matched trainable\-parameter budgets\. These results support PSWD as a challenging setting for weather backbone adaptation and PROLA as an effective method for this setting\.

## ObsConDA: Observability\-Constrained Data Assimilation with Control\-Space Inference

**Authors:** He Fang; Jiaqi FAN; Dan Wang

**ID:** 152077 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vdp2Hgele9>) | [PDF](<https://openreview.net/pdf?id=Vdp2Hgele9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152077>)

Irregular data assimilation is difficult because sparse, off\-grid observations do not constrain the same state corrections from one cycle to the next\. As the observation geometry changes, the set of supported correction directions changes as well\. Many learning\-based DA methods infer updates in a fixed latent or control space, even when the current observation layout supports a different set of correction directions\. To address this mismatch, we introduce Observability\-Constrained DataAssimilation with Control\-Space Inference \(ObsConDA\), which determines those supported correction directions from the current background and observation geometry and infers only their control coefficients\. On real surface\-station assimilation, ObsConDA gives the best held\-out station accuracy and the best full\-field reconstruction among the tested classical and learned baselines\. The same advantage carries to matched synthetic observations, explicit geometry shifts, and synthetic dynamical systems, supporting the view that the usable correction directions must change from cycle to cycle\. Ablations show that the gain comes from adapting those directions themselves rather than from adding a latent corrector alone\.

## A Statistical Framework for Algorithmic Collective Action with Multiple Collectives

**Authors:** Claudio Battiloro; Pietro Greiner; Dario Rancati; Bret Nestor; Oumaima Amezgar; Francesca Dominici

**ID:** 148932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u9on1t9ugh>) | [PDF](<https://openreview.net/pdf?id=u9on1t9ugh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148932>)

As learning systems increasingly shape everyday decisions, Algorithmic Collective Action \(ACA\), i\.e\., users coordinating changes to shared data to steer model behavior, offers a complement to regulator\-side policy and corporate model design\. Real\-world collective actions have traditionally been decentralized and fragmented into multiple collectives, despite sharing overarching objectives, with each collective differing in size, strategy, and actionable goals\. However, most of the ACA literature focuses on single collective settings\. To address this, we propose the first comprehensive statistical framework for ACA with multiple collectives acting on the same system\. In particular, we focus on collective action in classification, studying how multiple collectives can influence a classifier's behavior\. We provide quantitative statistical bounds on the success of the collectives, considering the role and the interplay of the collectives' sizes and the alignment of their goals\. We make such bounds computable by each collective with only partial knowledge of other collectives' sizes and strategies\. Finally, we numerically illustrate our framework on simulations inspired by interventions for climate adaptation in smart cities, demonstrating the usefulness of our bounds\.

## GeoRad\-3D: Factorized Geometry Transport and Residual Radiometry for 3D Radar Nowcasting

**Authors:** YITING LI; Zihan Zhou; Shengkai Chen; Jing Zhang; Jianyu Liang; Ka W CHUI; Chen Chen; Fayao Liu; Yifang Yin; Shili Xiang

**ID:** 152938 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PGN6GYPOlq>) | [PDF](<https://openreview.net/pdf?id=PGN6GYPOlq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152938>)

Volumetric radar nowcasting asks a model to forecast where storm structures move and how reflectivity evolves through height\. The recent \\stcgs\{\} method makes this setting practical by tracking 3D radar volumes with spatiotemporally coherent Gaussian parcels, but its forecasting head is designed to evolve all future Gaussian attributes with a unified deterministic regressor\. This is a poor match to convective evolution: geometry is dominated by coherent transport, while strong\-echo radiometry is local, intermittent, and uncertain\. We present GeoRad\-3D, a factorized forecasting head for coherent Gaussian radar states\. The key idea is simple: move geometry first, predict the stable radiometric continuation next, model only the residual uncertainty, and form the final nowcast after rendering\. For geometry, a height\-conditioned shared field captures volume\-level advection and mild coherent deformation, while a parcel\-wise correction restores local parcel drift, shape change, and cross\-height motion\. For radiometry, a deterministic base predictor outputs the stable continuation, and conditional flow matching samples residuals around this base to model the local uncertainty concentrated around strong echoes\. At inference, multiple aligned futures are rendered and aggregated through a base\-anchored quantile summary in radar\-product space, where threshold skill is measured\. Under the published NEXRAD protocol, GeoRad\-3D improves Pool4 CSI over the strongest published baseline by about 45\\%, 82\\%, and 124\\% at 20, 30, and 40 dBZ\. It further reduces LPIPS\-Radar by 31\.0\\%, indicating better perceptual fidelity of rendered storm structures\.

## Tyche: One Step Flow for Efficient Probabilistic Weather Forecasting

**Authors:** Fan Xu; Yuan Gao; Kun Wang; Rui Su; Fenghua Ling; Hao Wu; Wanli Ouyang

**ID:** 153693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JTuJz4sg7i>) | [PDF](<https://openreview.net/pdf?id=JTuJz4sg7i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153693>)

Probabilistic weather forecasting requires not only accurate trajectories, but calibrated distributions over plausible atmospheric futures\. Recent data\-driven systems have achieved remarkable deterministic skill, and diffusion\-based ensemble forecasters have substantially improved sample realism and uncertainty quantification\. However, their inference cost scales with forecast horizon, ensemble size, and the number of denoising steps required for each transition, making large operational ensembles expensive\. To address this, we present Tyche, a one\-step conditional flow model for efficient probabilistic weather forecasting\. Tyche models the conditional forecast distribution with a destination\-aware average\-velocity flow that maps Gaussian noise directly to future weather states in a single function evaluation \(1\-NFE\)\. To make this one\-step transport learnable in high\-dimensional geophysical fields, we derive a JVP\-regularized rectification objective that enforces temporal self\-consistency across source and destination flow timesteps without explicitly forming Jacobians\. The transport field is parameterized by an isotropic Swin\-style transformer that preserves fine\-scale spatial structure while remaining scalable on global grids\. To improve ensemble reliability under autoregressive forecasting, we further introduce a rollout\-based finetuning stage with curriculum CRPS calibration supervision\. Experiments on ERA5 at 1\.5$^\\circ$ and 6\-hour resolution show that our Tyche, using merely a single NFE, matches or exceeds the forecast skill and calibration of state\-of\-the\-art multi\-step generative baselines and the operational ECMWF IFS ensemble\. Codes are available\.

## FireMPC: A Multi\-Source Pan\-Canadian Wildfire Benchmark Revealing Spatiotemporal Generalization Gaps

**Authors:** Zhengsen Xu; Sibo Cheng; Lanying Wang; Aryan Sharma; Linlin Xu

**ID:** 139341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ve5eJFl94U>) | [PDF](<https://openreview.net/pdf?id=Ve5eJFl94U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139341>)

Under Climate Change, wildfire activity is intensifying worldwide, with Canada experiencing increasingly severe events that now affect every province and territory\. However, existing machine\-learning \(ML\) datasets remain constrained by geographic bias, narrow driver sets, opaque sample selection, and limited exploration of model failure modes\. We introduce \\textbf\{FireMPC\} dataset, the first pan\-Canadian multisource wildfire risk benchmark, covering approximately one billion hectares, or $9\{,\}840 \\times 4\{,\}639$ km$^2$, across the entire Canada at $1$ km daily resolution from $2000$ to $2025$, and integrating $55$ drivers across fuel, topography, meteorology, and human activity\. FireMPC is also the first large\-scale machine\-learning benchmark to embed the six knowledge\-driven indicators of the Canadian Forest Fire Danger Rating System \(CFFDRS\), bridging knowledge\-based and data\-driven modeling\. Building on this dataset, we propose \\textbf\{FWI\-guided hard negative mining \(FWI\-HNM\)\} strategy\. We score each non\-fire candidate using a calibrated CFFDRS composite, and then incorporate these hard negatives during model training\. FWI\-HNM mitigates the trivial\-negative failure mode of random sampling, yielding F1/PR\-AUC gains of $1\\%$\-$2\\%$ and ECE reductions of up to $82\\%$ across thirteen benchmark ML models\. Stress tests under horizon\-extension and spatial\-generalization protocols expose substantial generalization gaps\. Mean F1 falls from $70\.2\\%$ at the next\-day horizon \($\\Delta t = 1$\) to $54\.2\\%$ at the 30\-day horizon \($\\Delta t = 30$\)\. All six ecological, land\-cover, and regional spatial\-shift scenarios yield a $25\\%$\-$29\\%$ relative F1 drop\. These results motivate the development of large\-scale, driver\-diverse, spatially comprehensive datasets\. The dataset, code, and sampling artifacts are available at \\url\{https://anonymous\.4open\.science/r/FireMPC\}\.

## GCD: GCM\-consistent Diffusion for Zero\-shot Downscaling across Heterogeneous GCMs

**Authors:** Ruian Tie; Wenbo Xiong; Zhengyu Shi; Xinyu Su; 江晨雨; Libo Wu; Hao Li

**ID:** 152070 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VhUKsPYt7l>) | [PDF](<https://openreview.net/pdf?id=VhUKsPYt7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152070>)

Climate downscaling of global General Circulation Models \(GCMs\) is a challenging ill\-posed inverse problem\. In practice, the lack of paired data makes end\-to\-end supervised training infeasible, while downstream assessments require processing large, heterogeneous GCM ensembles under strict computational limits\. Consequently, developing an efficient, zero\-shot downscaling approach is crucial\. While vanilla Diffusion Posterior Sampling has recently shown immense potential by bypassing paired training, it remains bottlenecked by geographic misalignments, spectral biases, and prohibitive inference costs\. To address these limitations, we propose the GCM\-consistent Diffusion for Zero\-shot Downscaling \(GCD\) framework\. First, GCD conditions the diffusion prior on static geographic boundaries to ensure physical fidelity\. Second, we introduce a filter measurement operator, effectively mitigating spectral discrepancies between GCMs and the prior to provide stable inference\-time guidance\. Third, to overcome the inference bottleneck, we design a joint acceleration scheme: by combining progressive distillation with Conjugate Gradient guidance to correct large\-step deviations, GCD compresses the generation process to just 6 steps\. Extensive experiments demonstrate that GCD achieves highly competitive 99th percentile accuracy across five heterogeneous GCMs and successfully recovers the high\-frequency details of tropical cyclones, entirely without model\-specific retraining\.

## Learning Spectral Compositional Koopman Operators for Global\-to\-Regional Weather Forecasting

**Authors:** khalid OUBLAL; Malo Guichard; François Bertholom; Simon Albergel; David Benhaiem; Emmanuel LE BORGNE; Vladimir Kostic; Karim Lounici

**ID:** 153842 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IJz5165JdB>) | [PDF](<https://openreview.net/pdf?id=IJz5165JdB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153842>)

State\-of\-the\-art machine learning weather prediction systems achieve strong upper\-air forecast skill but degrade at longer lead times, with mesoscale structures progressively vanishing and ensemble forecasts becoming under\-dispersive\. While these limitations are often attributed to the training objective, we find that message\-passing processors significantly contribute to this degradation\. Repeated neighborhood aggregation at each autoregressive step acts as a smoothing operator that, over rollout steps, suppresses high\-frequency information in latent space\. This effect is particularly limiting in regional weather prediction, where fine\-scale structures are already partially unresolved, further eroding mesoscale variability and hindering long\-horizon forecasting\. We propose GraphMet, a graph\-based weather model motivated by Koopman theory that replaces stacked message\-passing layers with a single linear Koopman operator step\. GraphMet learns linear evolution in a spectral latent basis while preserving the encoder, decoder, and multi\-scale icosahedral mesh structure\. A two\-term spectral objective jointly learns a stable Koopman basis and preserves latent geometry, enabling efficient long\-range propagation without repeated nonlinear aggregation\. Empirically, GraphMet reduces the 15\-day activity and improves regional RMSE by 11\-14% at 5km resolution, and enables efficient probabilistic forecasting with lower inference cost than state\-of\-the\-art methods\. Our code available at : https://anonymous\.4open\.science/w/GraphMet\-54ED/\.

## ThousandWorlds: A benchmark for emulating the climates of potentially habitable exoplanets

**Authors:** Edward Stevenson; Mei T Mak; Eric Wolf; Denis E Sergeev; Tobi Hammond; Nathan Mayne; Miles Cranmer

**ID:** 139538 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KAFamWBzoo>) | [PDF](<https://openreview.net/pdf?id=KAFamWBzoo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139538>)

The search for life beyond Earth will depend on detecting faint signatures in the atmospheres of potentially habitable exoplanets\. Interpreting those signatures requires understanding the host planet's climate: the same molecule may signal life on one planet and abiotic chemistry on another\. Global climate models \(GCMs\) provide this understanding, but individual runs can require up to millions of core\-hours and substantial domain expert time\. Machine\-learning emulators could remove this bottleneck, but progress has been limited by the absence of a curated, multi\-model exoclimate dataset\. We introduce ThousandWorlds, an ML\-ready benchmark for exoclimate emulation and for the broader regime of low\-data, multi\-simulator, parameter\-to\-field regression\. The dataset contains approximately 1,700 simulations from five GCMs, mapping eight planet parameters to 3D atmospheric fields including temperature, humidity, winds, clouds, and radiation\. Three nested subsets define progressively harder challenges: single\-simulator regression, multi\-simulator regression with complete observations, and multi\-simulator regression with structured missingness\. We propose two evaluation protocols: one for ranking methods, and one that measures performance relative to the disagreement between GCMs themselves\. We evaluate ten baselines spanning simple methods, trees, deep learning, and Gaussian processes\. GP\-based methods perform best, suggesting that ThousandWorlds exposes a regime where off\-the\-shelf deep learning does not yet succeed\.   Data: https://doi\.org/10\.57967/hf/8695\.   Code: https://github\.com/astroautomata/ThousandWorlds\.

## Long\-Rollout Stability in AI Weather Models: A Quantitative Benchmark and Analysis

**Authors:** Fanny Lehmann; Firat Ozdemir; Yun Cheng; Torsten Hoefler; Sebastian Schemm; Benedikt Soja; Siddhartha Mishra

**ID:** 139600 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GDBChfsv9N>) | [PDF](<https://openreview.net/pdf?id=GDBChfsv9N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139600>)

While AI weather models excel at short\-to\-medium range forecasts \(up to 15 days\), they frequently suffer from ill\-defined "instabilities" when rolled out over longer horizons\. This work addresses the lack of a formal taxonomy by categorizing these failures into three distinct regimes — blow\-up, drift, and loss of seasonality — through year\-long rollouts of nine state\-of\-the\-art AI weather models\. Our analysis reveals that stability hinges on the treatment of small spatio\-temporal scales: unstable models amplify high\-frequency energy, while stable models act as denoisers when noise is added to their inputs\. Far from reducing these models to mere stochastic parrots, our findings highlight that stable models generate unique weather trajectories, conditioned on the initial state\. We verify our findings through ablation studies on architectural design choices, conducted using state\-of\-the\-art Vision Transformer \(ViT\) AI weather model architectures\.

## Position: AI Efficiency Gains Must Be Quantitatively Evaluated Against Rebound Effects

**Authors:** Kim Thang Nguyen; Denis Trystram

**ID:** 140025 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kAJlZoSWLO>) | [PDF](<https://openreview.net/pdf?id=kAJlZoSWLO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140025>)

Efficiency gains in artificial intelligence are often interpreted as environmental progress, but this view is incomplete because AI usage may exhibit rebound effects: lower unit costs can induce larger models, more training runs, stricter latency requirements, wider deployment, and higher inference volume\. Although rebound effects in AI have begun to receive attention, they are still studied mostly through qualitative or scenario\-based analyses\. This paper takes the position that AI efficiency gains must be quantitatively and mathematically analyzed against rebound effects\. We support this position with a simple game\-theoretic model showing that an efficiency improvement can inadvertently increase the total energy consumption\. The model further shows that rebound can appear even in a simple setting and in forms not captured by demand\-reduction arguments alone: the amount of requested work may decrease while stricter deadlines make the computation more energy intensive\.

## Fluxtrapolation: A benchmark on extrapolating ecosystem fluxes

**Authors:** Anya Fries; Jacob A Nelson; Martin Jung; Markus Reichstein; Jonas Peters

**ID:** 139401 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SyETrnFXYh>) | [PDF](<https://openreview.net/pdf?id=SyETrnFXYh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139401>)

We introduce FLUXtrapolation, a benchmark for extrapolating ecosystem fluxes under progressively harder distribution shifts\. Ecosystem fluxes are central to understanding the carbon, water, and energy cycles, yet they can only be measured directly at sparsely located measurement towers\. Producing global flux estimates therefore requires training models on observed sites using globally available covariates and predicting in unobserved regions, that is, upscaling\. Flux upscaling is a challenging domain generalization problem that is affected by a shift in covariate distribution across climates, ecosystem types, and environmental conditions, as well as by conditional shift: important drivers remain unobserved at global scale\. We provide a quantitative analysis of both these shifts in $P\_X$ and $P\_\{Y\\mid X\}$\. FLUXtrapolation is designed based on domain expertise on flux upscaling: it defines temporal, spatial, and temperature\-based extrapolation scenarios and evaluates performance across held\-out domains, temporal aggregations, and tail errors\. In a pilot study, we find that baselines perform similarly under median hourly RMSE, but separate under the proposed tail\-focused and multi\-scale evaluation\. FLUXtrapolation therefore poses a realistic and thus relevant challenge for machine learning methods under distribution shift; at the same time, progress on this benchmark would directly support the scientific goal of improving flux upscaling\.

## All\-in\-one Adverse Weather Removal via Prior\-modulated and Velocity\-constrained Rectified Flow

**Authors:** Wei Dong; Han Zhou; Terry Ji; Guanhua Zhao; Shahab Asoodeh; Yulun Zhang; Guangtao Zhai; Jun Chen; Xiaohong Liu

**ID:** 149069 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t5syQ7vPjU>) | [PDF](<https://openreview.net/pdf?id=t5syQ7vPjU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149069>)

Adverse weather removal \(AWR\) in real\-world images remains challenging due to heterogeneous and unseen degradations, while distortion\-driven training often yields overly smooth results\. We propose PVRF , a unified framework that integrates zero\-shot soft weather P erceptions with V elocity\-constrained R ectified\- F low refinement\. PVRF introduces an AWR\-specific question answering module \(AWR\-QA\) that uses frozen vision\-\-language models \(VLMs\) to estimate soft probabilities of weather types and low\-level attribute scores\. These perceptions condition restoration networks via attribute\-modulated normalization \(AMN\) and weather\-weighted adapters \(WWA\), producing an anchor estimate for refinement\. We then learn a terminal\-consistent residual rectified flow with perception\-adaptive source perturbation and a terminal\-consistent velocity parameterization to stabilize learning near the terminal regime\. Extensive experiments show that PVRF improves both fidelity and perceptual quality over state\-of\-the\-art baselines, with strong cross\-dataset generalization on single and combined degradations\.

## On Neural Scaling Laws for Weather Emulation through Continual Training

**Authors:** Shashank Subramanian; Alexander Kiefer; Arnur Nigmetov; Amir Gholami; Dmitriy Morozov; Michael Mahoney

**ID:** 148933 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u9jpPYohUA>) | [PDF](<https://openreview.net/pdf?id=u9jpPYohUA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148933>)

Neural scaling laws, which in some domains can predict the performance of large neural networks as a function of model, data, and compute scale, are the cornerstone of building foundation models in Natural Language Processing and Computer Vision\. We study neural scaling in Scientific Machine Learning, focusing on models for weather forecasting\.  To analyze scaling behavior in as simple a setting as possible, we adopt a minimal, scalable, general\-purpose Swin Transformer architecture, and we use continual training with constant learning rates and periodic cooldowns as an efficient training strategy\. We show that models trained in this minimalist way follow predictable scaling trends and outperform standard cosine learning rate schedules\. Cooldown phases can be re\-purposed to improve downstream performance, e\.g\., enabling accurate multi\-step rollouts over longer forecast horizons or sharper predictions through spectral loss adjustments\. We also systematically explore a wide range of model and dataset sizes under various compute budgets to construct IsoFLOP curves, and we identify compute\-optimal training regimes\.  Extrapolating these trends to larger scales highlights potential performance limits, demonstrating that neural scaling can serve as an important diagnostic for efficient resource allocation\. We open\-source our code for reproducibility\.

## UtoMe: Observation\-Uncertainty\-Guided Token Merging for Weather Foundation Models

**Authors:** Yunbei Zhang; Janet Wang; Xi Xiao; Jihun Hamm; Xiao Wang

**ID:** 153247 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MepgP6Rx39>) | [PDF](<https://openreview.net/pdf?id=MepgP6Rx39>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153247>)

Weather foundation models are trained on dense reanalysis fields, but these inputs are not noiseless measurements of the atmosphere\. Observation and representativeness errors vary across variables, locations, and weather regimes, so a transformer can spend substantial compute fitting token\-level fluctuations that are less reliable than the surrounding signal\. We present UtoMe, an observation\-uncertainty\-guided token merging framework for training\-efficient weather transformers\. Motivated by a three\-way variance view that separates observation uncertainty from aleatoric and epistemic uncertainty, UtoMe builds a patch\-level importance score from dynamics saliency and ensemble\-derived spread, protects forecast\-sensitive low\-uncertainty tokens as anchors, and merges low\-importance feature\-similar tokens with an uncertainty\-aware matching cost\. Three variants cover different deployment settings: external uncertainty at both training and inference, external uncertainty only during training, and no external uncertainty\. On ERA5 forecasting at two spatial resolutions, UtoMe preserves forecast skill under moderate token reduction and degrades much more gracefully than train\-time ToMe under aggressive merging\. The method reduces FLOPs by up to $45\\%$, showing that observation uncertainty can be used as a direct compute\-allocation signal for weather foundation models\.

