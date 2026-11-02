# Applications / Climate

应用 / 气候

20 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## GeoRad\-3D: Factorized Geometry Transport and Residual Radiometry for 3D Radar Nowcasting

**Authors:** YITING LI; Zihan Zhou; Shengkai Chen; Jing Zhang; Jianyu Liang; Ka W CHUI; Chen Chen; Fayao Liu; Yifang Yin; Shili Xiang

**ID:** 152938 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PGN6GYPOlq>) | [PDF](<https://openreview.net/pdf?id=PGN6GYPOlq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152938>)

Volumetric radar nowcasting asks a model to forecast where storm structures move and how reflectivity evolves through height\. The recent \\stcgs\{\} method makes this setting practical by tracking 3D radar volumes with spatiotemporally coherent Gaussian parcels, but its forecasting head is designed to evolve all future Gaussian attributes with a unified deterministic regressor\. This is a poor match to convective evolution: geometry is dominated by coherent transport, while strong\-echo radiometry is local, intermittent, and uncertain\. We present GeoRad\-3D, a factorized forecasting head for coherent Gaussian radar states\. The key idea is simple: move geometry first, predict the stable radiometric continuation next, model only the residual uncertainty, and form the final nowcast after rendering\. For geometry, a height\-conditioned shared field captures volume\-level advection and mild coherent deformation, while a parcel\-wise correction restores local parcel drift, shape change, and cross\-height motion\. For radiometry, a deterministic base predictor outputs the stable continuation, and conditional flow matching samples residuals around this base to model the local uncertainty concentrated around strong echoes\. At inference, multiple aligned futures are rendered and aggregated through a base\-anchored quantile summary in radar\-product space, where threshold skill is measured\. Under the published NEXRAD protocol, GeoRad\-3D improves Pool4 CSI over the strongest published baseline by about 45\\%, 82\\%, and 124\\% at 20, 30, and 40 dBZ\. It further reduces LPIPS\-Radar by 31\.0\\%, indicating better perceptual fidelity of rendered storm structures\.

## Njord: A Probabilistic Graph Neural Network for Ensemble Ocean Forecasting

**Authors:** Daniel Holmberg; Joel Oskarsson; Erik Wikingsson; Fredrik Lindsten; Teemu Roos

**ID:** 151699 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YgZlTScsDW>) | [PDF](<https://openreview.net/pdf?id=YgZlTScsDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151699>)

Ocean dynamics are inherently chaotic, yet existing machine learning ocean models produce only deterministic forecasts\. We introduce Njord, a probabilistic data\-driven model for ocean forecasting, applicable to both global and regional domains\. Njord combines a deep latent variable framework with a graph neural network architecture, enabling sampling each forecast step in a single forward pass\. We apply Njord globally at 0\.25° resolution and regionally to the Baltic Sea at 2 km resolution\. To scale to these large ocean grids we introduce K\-means cluster meshes that adapt to irregular sea surface geometry\. Experiments demonstrate strong performance on both domains compared to deterministic machine learning baselines, while also providing uncertainty estimates from the sampled ensemble forecasts\. On the global OceanBench benchmark, Njord achieves the lowest errors on average across upper\-ocean variables when evaluated against real\-world observations, with the largest improvements in surface temperature prediction\.

## Weather\-Robust Cross\-View Geo\-Localization via Prototype\-Based Semantic Part Discovery

**Authors:** Chi Nguyen Tran; Dao S Minh; Trung\-Kiet Huynh; Phu\-Hoa Pham; Phu\-Quy Nguyen\-Lam; Long Tran\-Thanh

**ID:** 148562 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wxPKGRCVh8>) | [PDF](<https://openreview.net/pdf?id=wxPKGRCVh8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148562>)

_Abstract unavailable from the accessible public sources._

## GCD: GCM\-consistent Diffusion for Zero\-shot Downscaling across Heterogeneous GCMs

**Authors:** Ruian Tie; Wenbo Xiong; Zhengyu Shi; Xinyu Su; 江晨雨; Libo Wu; Hao Li

**ID:** 152070 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VhUKsPYt7l>) | [PDF](<https://openreview.net/pdf?id=VhUKsPYt7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152070>)

_Abstract unavailable from the accessible public sources._

## On Neural Scaling Laws for Weather Emulation through Continual Training

**Authors:** Shashank Subramanian; Alexander Kiefer; Arnur Nigmetov; Amir Gholami; Dmitriy Morozov; Michael Mahoney

**ID:** 148933 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u9jpPYohUA>) | [PDF](<https://openreview.net/pdf?id=u9jpPYohUA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148933>)

Neural scaling laws, which in some domains can predict the performance of large neural networks as a function of model, data, and compute scale, are the cornerstone of building foundation models in Natural Language Processing and Computer Vision\. We study neural scaling in Scientific Machine Learning, focusing on models for weather forecasting\.  To analyze scaling behavior in as simple a setting as possible, we adopt a minimal, scalable, general\-purpose Swin Transformer architecture, and we use continual training with constant learning rates and periodic cooldowns as an efficient training strategy\. We show that models trained in this minimalist way follow predictable scaling trends and outperform standard cosine learning rate schedules\. Cooldown phases can be re\-purposed to improve downstream performance, e\.g\., enabling accurate multi\-step rollouts over longer forecast horizons or sharper predictions through spectral loss adjustments\. We also systematically explore a wide range of model and dataset sizes under various compute budgets to construct IsoFLOP curves, and we identify compute\-optimal training regimes\.  Extrapolating these trends to larger scales highlights potential performance limits, demonstrating that neural scaling can serve as an important diagnostic for efficient resource allocation\. We open\-source our code for reproducibility\.

## OroPrecipBench: a km\-scale benchmark for spatial precipitation downscaling over complex terrain

**Authors:** Hongyi Chen; Xiaokai Yan; Jiadong Zhang; Jingtao Ding; Xiaojun Liang; Yong Li; Xiao\-Ping \(Steven\) Zhang

**ID:** 139041 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIt8ejKQlL>) | [PDF](<https://openreview.net/pdf?id=oIt8ejKQlL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139041>)

Precipitation downscaling over complex terrain is essential for resolving water availability, flood risk, and extremes, but current evaluations rarely test whether models learn orographic structure rather than only pixel\-wise accuracy\. We introduce OroPrecipBench, a km\-scale benchmark for orographic precipitation downscaling across five U\.S\.\\ terrain regimes\. The benchmark provides a shared\-domain dual\-track protocol: a perfect\-model track that coarsens 3\\,km HRRR analyses to isolate controlled super\-resolution skill, and an observation\-grounded track that downscales 25\\,km ERA5 to 4\\,km PRISM to test practical robustness under source\-target shift\. We also introduce PEP\-D, a terrain\-conditioned diagnostic that measures errors in elevation\-\-precipitation profiles, complementing pointwise, spatial, and extreme\-precipitation metrics\. Evaluating ten statistical, deterministic deep\-learning, and generative baselines shows that strong controlled super\-resolution does not reliably translate to real\-case or cross\-regime downscaling\. Models that reduce pixel\-wise error can still distort terrain\-dependent precipitation and upper\-tail rainfall, and terrain\-conditioned structure is especially fragile under transfer\. OroPrecipBench exposes these failure modes and motivates source\-shift\-robust, terrain\-constrained, and tail\-aware downscaling methods\. Benchmark is available \\href\{https://anonymous\.4open\.science/r/OroPrecipBench\-612D\}\{here\}\.

## PROLA: Principal\-Orthogonal Low\-rank Adaptation for Predictive Spatiotemporal Weather Downscaling

**Authors:** Minseo Yoon; Minseong Bae; Sojin Lee; Hyunwoo J\. Kim

**ID:** 155892 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=23nejdcCJ9>) | [PDF](<https://openreview.net/pdf?id=23nejdcCJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155892>)

High\-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts\. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high\-resolution fields from recent coarse states remains challenging and costly\. We formulate this setting as Predictive Spatiotemporal Weather Downscaling \(\\textbf\{PSWD\}\), where the target is a future high\-resolution trajectory rather than a same\-time refined field\. To make this structure explicit, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads\. For backbone adaptation, we introduce \\textbf\{PROLA\} \(PRincipal\-Orthogonal Low\-rank Adaptation\), which splits a fixed low\-rank budget between pretrained principal directions and their orthogonal complement\. PROLA further rescales rank\-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank\. Experiments in the PSWD setting show that PROLA outperforms representative low\-rank adaptation baselines under matched trainable\-parameter budgets\. These results support PSWD as a challenging setting for weather backbone adaptation and PROLA as an effective method for this setting\.

## FireMPC: A Multi\-Source Pan\-Canadian Wildfire Benchmark Revealing Spatiotemporal Generalization Gaps

**Authors:** Zhengsen Xu; Sibo Cheng; Lanying Wang; Aryan Sharma; Linlin Xu

**ID:** 139341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ve5eJFl94U>) | [PDF](<https://openreview.net/pdf?id=Ve5eJFl94U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139341>)

Under Climate Change, wildfire activity is intensifying worldwide, with Canada experiencing increasingly severe events that now affect every province and territory\. However, existing machine\-learning \(ML\) datasets remain constrained by geographic bias, narrow driver sets, opaque sample selection, and limited exploration of model failure modes\. We introduce \\textbf\{FireMPC\} dataset, the first pan\-Canadian multisource wildfire risk benchmark, covering approximately one billion hectares, or $9\{,\}840 \\times 4\{,\}639$ km$^2$, across the entire Canada at $1$ km daily resolution from $2000$ to $2025$, and integrating $55$ drivers across fuel, topography, meteorology, and human activity\. FireMPC is also the first large\-scale machine\-learning benchmark to embed the six knowledge\-driven indicators of the Canadian Forest Fire Danger Rating System \(CFFDRS\), bridging knowledge\-based and data\-driven modeling\. Building on this dataset, we propose \\textbf\{FWI\-guided hard negative mining \(FWI\-HNM\)\} strategy\. We score each non\-fire candidate using a calibrated CFFDRS composite, and then incorporate these hard negatives during model training\. FWI\-HNM mitigates the trivial\-negative failure mode of random sampling, yielding F1/PR\-AUC gains of $1\\%$\-$2\\%$ and ECE reductions of up to $82\\%$ across thirteen benchmark ML models\. Stress tests under horizon\-extension and spatial\-generalization protocols expose substantial generalization gaps\. Mean F1 falls from $70\.2\\%$ at the next\-day horizon \($\\Delta t = 1$\) to $54\.2\\%$ at the 30\-day horizon \($\\Delta t = 30$\)\. All six ecological, land\-cover, and regional spatial\-shift scenarios yield a $25\\%$\-$29\\%$ relative F1 drop\. These results motivate the development of large\-scale, driver\-diverse, spatially comprehensive datasets\. The dataset, code, and sampling artifacts are available at \\url\{https://anonymous\.4open\.science/r/FireMPC\}\.

## Long\-Rollout Stability in AI Weather Models: A Quantitative Benchmark and Analysis

**Authors:** Fanny Lehmann; Firat Ozdemir; Yun Cheng; Torsten Hoefler; Sebastian Schemm; Benedikt Soja; Siddhartha Mishra

**ID:** 139600 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GDBChfsv9N>) | [PDF](<https://openreview.net/pdf?id=GDBChfsv9N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139600>)

_Abstract unavailable from the accessible public sources._

## Long\-Rollout Stability in AI Weather Models: A Quantitative Benchmark and Analysis

**Authors:** Fanny Lehmann; Firat Ozdemir; Yun Cheng; Torsten Hoefler; Sebastian Schemm; Benedikt Soja; Siddhartha Mishra

**ID:** 139600\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139600

[Paper](<https://openreview.net/forum?id=GDBChfsv9N>) | [PDF](<https://openreview.net/pdf?id=GDBChfsv9N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139600>)

_Abstract unavailable from the accessible public sources._

## PROLA: Principal\-Orthogonal Low\-rank Adaptation for Predictive Spatiotemporal Weather Downscaling

**Authors:** Minseo Yoon; Minseong Bae; Sojin Lee; Hyunwoo J\. Kim

**ID:** 155892\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155892

[Paper](<https://openreview.net/forum?id=23nejdcCJ9>) | [PDF](<https://openreview.net/pdf?id=23nejdcCJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155892>)

High\-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts\. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high\-resolution fields from recent coarse states remains challenging and costly\. We formulate this setting as Predictive Spatiotemporal Weather Downscaling \(\\textbf\{PSWD\}\), where the target is a future high\-resolution trajectory rather than a same\-time refined field\. To make this structure explicit, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads\. For backbone adaptation, we introduce \\textbf\{PROLA\} \(PRincipal\-Orthogonal Low\-rank Adaptation\), which splits a fixed low\-rank budget between pretrained principal directions and their orthogonal complement\. PROLA further rescales rank\-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank\. Experiments in the PSWD setting show that PROLA outperforms representative low\-rank adaptation baselines under matched trainable\-parameter budgets\. These results support PSWD as a challenging setting for weather backbone adaptation and PROLA as an effective method for this setting\.

## ObsConDA: Observability\-Constrained Data Assimilation with Control\-Space Inference

**Authors:** He Fang; Jiaqi FAN; Dan Wang

**ID:** 152077 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vdp2Hgele9>) | [PDF](<https://openreview.net/pdf?id=Vdp2Hgele9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152077>)

Irregular data assimilation is difficult because sparse, off\-grid observations do not constrain the same state corrections from one cycle to the next\. As the observation geometry changes, the set of supported correction directions changes as well\. Many learning\-based DA methods infer updates in a fixed latent or control space, even when the current observation layout supports a different set of correction directions\. To address this mismatch, we introduce Observability\-Constrained DataAssimilation with Control\-Space Inference \(ObsConDA\), which determines those supported correction directions from the current background and observation geometry and infers only their control coefficients\. On real surface\-station assimilation, ObsConDA gives the best held\-out station accuracy and the best full\-field reconstruction among the tested classical and learned baselines\. The same advantage carries to matched synthetic observations, explicit geometry shifts, and synthetic dynamical systems, supporting the view that the usable correction directions must change from cycle to cycle\. Ablations show that the gain comes from adapting those directions themselves rather than from adding a latent corrector alone\.

## Fluxtrapolation: A benchmark on extrapolating ecosystem fluxes

**Authors:** Anya Fries; Jacob A Nelson; Martin Jung; Markus Reichstein; Jonas Peters

**ID:** 139401 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SyETrnFXYh>) | [PDF](<https://openreview.net/pdf?id=SyETrnFXYh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139401>)

_Abstract unavailable from the accessible public sources._

## FireMPC: A Multi\-Source Pan\-Canadian Wildfire Benchmark Revealing Spatiotemporal Generalization Gaps

**Authors:** Zhengsen Xu; Sibo Cheng; Lanying Wang; Aryan Sharma; Linlin Xu

**ID:** 139341\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139341

[Paper](<https://openreview.net/forum?id=Ve5eJFl94U>) | [PDF](<https://openreview.net/pdf?id=Ve5eJFl94U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139341>)

Under Climate Change, wildfire activity is intensifying worldwide, with Canada experiencing increasingly severe events that now affect every province and territory\. However, existing machine\-learning \(ML\) datasets remain constrained by geographic bias, narrow driver sets, opaque sample selection, and limited exploration of model failure modes\. We introduce \\textbf\{FireMPC\} dataset, the first pan\-Canadian multisource wildfire risk benchmark, covering approximately one billion hectares, or $9\{,\}840 \\times 4\{,\}639$ km$^2$, across the entire Canada at $1$ km daily resolution from $2000$ to $2025$, and integrating $55$ drivers across fuel, topography, meteorology, and human activity\. FireMPC is also the first large\-scale machine\-learning benchmark to embed the six knowledge\-driven indicators of the Canadian Forest Fire Danger Rating System \(CFFDRS\), bridging knowledge\-based and data\-driven modeling\. Building on this dataset, we propose \\textbf\{FWI\-guided hard negative mining \(FWI\-HNM\)\} strategy\. We score each non\-fire candidate using a calibrated CFFDRS composite, and then incorporate these hard negatives during model training\. FWI\-HNM mitigates the trivial\-negative failure mode of random sampling, yielding F1/PR\-AUC gains of $1\\%$\-$2\\%$ and ECE reductions of up to $82\\%$ across thirteen benchmark ML models\. Stress tests under horizon\-extension and spatial\-generalization protocols expose substantial generalization gaps\. Mean F1 falls from $70\.2\\%$ at the next\-day horizon \($\\Delta t = 1$\) to $54\.2\\%$ at the 30\-day horizon \($\\Delta t = 30$\)\. All six ecological, land\-cover, and regional spatial\-shift scenarios yield a $25\\%$\-$29\\%$ relative F1 drop\. These results motivate the development of large\-scale, driver\-diverse, spatially comprehensive datasets\. The dataset, code, and sampling artifacts are available at \\url\{https://anonymous\.4open\.science/r/FireMPC\}\.

## PROLA: Principal\-Orthogonal Low\-rank Adaptation for Predictive Spatiotemporal Weather Downscaling

**Authors:** Minseo Yoon; Minseong Bae; Sojin Lee; Hyunwoo J\. Kim

**ID:** 155892\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155892

[Paper](<https://openreview.net/forum?id=23nejdcCJ9>) | [PDF](<https://openreview.net/pdf?id=23nejdcCJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155892>)

High\-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts\. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high\-resolution fields from recent coarse states remains challenging and costly\. We formulate this setting as Predictive Spatiotemporal Weather Downscaling \(\\textbf\{PSWD\}\), where the target is a future high\-resolution trajectory rather than a same\-time refined field\. To make this structure explicit, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads\. For backbone adaptation, we introduce \\textbf\{PROLA\} \(PRincipal\-Orthogonal Low\-rank Adaptation\), which splits a fixed low\-rank budget between pretrained principal directions and their orthogonal complement\. PROLA further rescales rank\-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank\. Experiments in the PSWD setting show that PROLA outperforms representative low\-rank adaptation baselines under matched trainable\-parameter budgets\. These results support PSWD as a challenging setting for weather backbone adaptation and PROLA as an effective method for this setting\.

## Tyche: One Step Flow for Efficient Probabilistic Weather Forecasting

**Authors:** Fan Xu; Yuan Gao; Kun Wang; Rui Su; Fenghua Ling; Hao Wu; Wanli Ouyang

**ID:** 153693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JTuJz4sg7i>) | [PDF](<https://openreview.net/pdf?id=JTuJz4sg7i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153693>)

Probabilistic weather forecasting requires not only accurate trajectories, but calibrated distributions over plausible atmospheric futures\. Recent data\-driven systems have achieved remarkable deterministic skill, and diffusion\-based ensemble forecasters have substantially improved sample realism and uncertainty quantification\. However, their inference cost scales with forecast horizon, ensemble size, and the number of denoising steps required for each transition, making large operational ensembles expensive\. To address this, we present Tyche, a one\-step conditional flow model for efficient probabilistic weather forecasting\. Tyche models the conditional forecast distribution with a destination\-aware average\-velocity flow that maps Gaussian noise directly to future weather states in a single function evaluation \(1\-NFE\)\. To make this one\-step transport learnable in high\-dimensional geophysical fields, we derive a JVP\-regularized rectification objective that enforces temporal self\-consistency across source and destination flow timesteps without explicitly forming Jacobians\. The transport field is parameterized by an isotropic Swin\-style transformer that preserves fine\-scale spatial structure while remaining scalable on global grids\. To improve ensemble reliability under autoregressive forecasting, we further introduce a rollout\-based finetuning stage with curriculum CRPS calibration supervision\. Experiments on ERA5 at 1\.5$^\\circ$ and 6\-hour resolution show that our Tyche, using merely a single NFE, matches or exceeds the forecast skill and calibration of state\-of\-the\-art multi\-step generative baselines and the operational ECMWF IFS ensemble\. Codes are available\.

## FireMPC: A Multi\-Source Pan\-Canadian Wildfire Benchmark Revealing Spatiotemporal Generalization Gaps

**Authors:** Zhengsen Xu; Sibo Cheng; Lanying Wang; Aryan Sharma; Linlin Xu

**ID:** 139341\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139341

[Paper](<https://openreview.net/forum?id=Ve5eJFl94U>) | [PDF](<https://openreview.net/pdf?id=Ve5eJFl94U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139341>)

Under Climate Change, wildfire activity is intensifying worldwide, with Canada experiencing increasingly severe events that now affect every province and territory\. However, existing machine\-learning \(ML\) datasets remain constrained by geographic bias, narrow driver sets, opaque sample selection, and limited exploration of model failure modes\. We introduce \\textbf\{FireMPC\} dataset, the first pan\-Canadian multisource wildfire risk benchmark, covering approximately one billion hectares, or $9\{,\}840 \\times 4\{,\}639$ km$^2$, across the entire Canada at $1$ km daily resolution from $2000$ to $2025$, and integrating $55$ drivers across fuel, topography, meteorology, and human activity\. FireMPC is also the first large\-scale machine\-learning benchmark to embed the six knowledge\-driven indicators of the Canadian Forest Fire Danger Rating System \(CFFDRS\), bridging knowledge\-based and data\-driven modeling\. Building on this dataset, we propose \\textbf\{FWI\-guided hard negative mining \(FWI\-HNM\)\} strategy\. We score each non\-fire candidate using a calibrated CFFDRS composite, and then incorporate these hard negatives during model training\. FWI\-HNM mitigates the trivial\-negative failure mode of random sampling, yielding F1/PR\-AUC gains of $1\\%$\-$2\\%$ and ECE reductions of up to $82\\%$ across thirteen benchmark ML models\. Stress tests under horizon\-extension and spatial\-generalization protocols expose substantial generalization gaps\. Mean F1 falls from $70\.2\\%$ at the next\-day horizon \($\\Delta t = 1$\) to $54\.2\\%$ at the 30\-day horizon \($\\Delta t = 30$\)\. All six ecological, land\-cover, and regional spatial\-shift scenarios yield a $25\\%$\-$29\\%$ relative F1 drop\. These results motivate the development of large\-scale, driver\-diverse, spatially comprehensive datasets\. The dataset, code, and sampling artifacts are available at \\url\{https://anonymous\.4open\.science/r/FireMPC\}\.

## GCD: GCM\-consistent Diffusion for Zero\-shot Downscaling across Heterogeneous GCMs

**Authors:** Ruian Tie; Wenbo Xiong; Zhengyu Shi; Xinyu Su; 江晨雨; Libo Wu; Hao Li

**ID:** 152070\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152070

[Paper](<https://openreview.net/forum?id=VhUKsPYt7l>) | [PDF](<https://openreview.net/pdf?id=VhUKsPYt7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152070>)

_Abstract unavailable from the accessible public sources._

## PhysEval\.Weather: An Evaluation Framework for Physical Consistency in ML Weather Models

**Authors:** Emma Kasteleyn; Timo Maier; Axel Lauer; Veronika Eyring; Pierre Gentine; Ana Lucic

**ID:** 139795 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=43RBVCfkqe>) | [PDF](<https://openreview.net/pdf?id=43RBVCfkqe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139795>)

_Abstract unavailable from the accessible public sources._

## Otter Weather: Skillful and computationally\-efficient medium\-range weather forecasting

**Authors:** Cristiana Diaconu; Jonas Scholz; Aliaksandra Shysheya; Stratis Markou; Payel Mukhopadhyay; Miles Cranmer; Richard Turner

**ID:** 148663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w4fZFKKSwS>) | [PDF](<https://openreview.net/pdf?id=w4fZFKKSwS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148663>)

State\-of\-the\-art medium\-range AI weather models rival traditional Numerical Weather Prediction \(NWP\) but require massive training budgets\. This restricts access for under\-resourced groups and severely limits fast model iteration\. We introduce Otter, a highly efficient spatiotemporal forecasting model designed to democratise high\-performance weather prediction with AI\. Otter is evaluated on ERA5 reanalysis data using the standard WeatherBench protocols where it significantly advances the skill\-compute Pareto frontier\. The deterministic version outperforms the best NWP baseline by 9\.6\\% at a 24\-hour lead time while requiring fewer than 3\.5 A100\-days for training\. It provides a 2x efficiency gain over lightweight AI models and a 100\-fold reduction in compute compared to resource\-intensive frontier architectures\.

