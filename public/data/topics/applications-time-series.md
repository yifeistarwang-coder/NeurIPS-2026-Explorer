# Applications / Time Series

应用 / 时间序列

176 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Geometric Inductive Biases for Semi\-Supervised Equalization: The Constellation\-Aware Transformer

**Authors:** Avi Caciularu

**ID:** 155196 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ZUdIwD0Pz>) | [PDF](<https://openreview.net/pdf?id=7ZUdIwD0Pz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155196>)

_Abstract unavailable from the accessible public sources._

## Discretizing Continuous Time Series for Imputation with Masked Diffusion Training

**Authors:** Dongbin Kim; Seungyun Lee; Geonwoo Shin; Jaewook Lee

**ID:** 149547 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pKTszDf7fn>) | [PDF](<https://openreview.net/pdf?id=pKTszDf7fn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149547>)

_Abstract unavailable from the accessible public sources._

## A Set\-Sequence Model for Time Series

**Authors:** Elliot Epstein; Apaar Sadhwani; Kay Giesecke

**ID:** 148413 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y1ZoyGsVuL>) | [PDF](<https://openreview.net/pdf?id=y1ZoyGsVuL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148413>)

Sequence models have advanced Multivariate Time Series \(MTS\) modeling by learning complex, long\-range temporal dependencies\. Many practical settings, however, involve predicting the evolution of a set of MTSs \-\- an unordered collection of units \(e\.g\., a basket of stocks, a pool of loans, a fleet of sensors\)\. This cross\-sectional structure offers an opportunity to leverage signals shared across units \(e\.g\., market volatility, correlated defaults\) that are missed when each MTS is processed independently\. Crucially, treating the entire cross\-section as a single high\-dimensional MTS is infeasible because the number of units varies dynamically at inference\. We propose Set\-Sequence, a backbone\-agnostic architecture for set\-of\-MTS prediction that leverages this cross\-sectional structure\. A permutation\-invariant Set module extracts a summary of the population, while a Sequence module \(e\.g\., Transformer/SSM/RNN\) then models each unit’s temporal dynamics conditioned on both its own history and the learned cross\-sectional context\. This architecture naturally accommodates varying set cardinalities, supports unaligned series, integrates with standard sequence backbones, and scales linearly in cross\-sectional size\. Across a synthetic contagion task and two large\-scale real\-world applications \-\- equity portfolio optimization and loan risk prediction \-\- Set\-Sequence consistently improves sequence backbones and outperforms domain\-specific baselines, delivering higher Sharpe ratios, improved AUCs, and interpretable cross\-sectional summaries\.

## Nuwa: Evaluation\-Grounded Agentic Construction of Time Series Forecasting Systems

**Authors:** Fanda Fan; Yuxuan Yang; Xiaorui Wang; Luqi Gong; Xiang Wentao; Xiang Ao; LimingSong; Yinuo Zhu; Yutong Chen; Chunjie Luo; Jianfeng Zhan

**ID:** 153330 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M7a9vo8Nj6>) | [PDF](<https://openreview.net/pdf?id=M7a9vo8Nj6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153330>)

Time series forecasting has recently moved beyond static, single\-pass prediction toward agentic methods that reason, use tools, execute workflows, and accumulate memory\. However, most existing forecasting agents still optimize predictions or pipelines under largely implicit configurations, leaving the construction of the forecasting system itself underexplored\. This limits their ability to attribute performance changes to specific decisions, such as which module, exogenous variable, or hyperparameter caused an improvement\. We propose \*Nuwa\*, an evaluation\-grounded agentic framework for constructing time series forecasting systems\. Nuwa defines a structured design space over modules, exogenous variables, and hyperparameters, and performs Evaluation\-Budgeted Construction that uses data meta\-information, performance diagnostics, and memory to propose candidate sets, select budgeted subsets for controlled evaluation, attribute local effects, and decide whether to stop, accept, retry, switch subspace, or continue construction\. The resulting design\-level evidence is stored in a Design Memory, enabling reusable knowledge about which configurations work under which data conditions\. Across approximately 15,000 experimental runs, Nuwa achieves consistent performance gains across module, exogenous\-variable, and hyperparameter construction, with an overall average MSE reduction of 8\.0\\% over the corresponding reference settings\. By turning forecast\-level feedback into attributable and transferable design evidence, Nuwa makes forecasting system construction an explicit objective for agentic time series forecasting\. The anonymous repository is available at https://anonymous\.4open\.science/r/NUWA/\.

## OTformer: Non\-Stationarity\-Aware Adaptive Optimal Transport Attention for Time Series Forecasting

**Authors:** Zhaowei Liu; Kaixiang Wang; Sheng Liu; zengyang zhang; HaitaoYang; Rufei Gao; Zongxing Zhao; Yao Shan; Yongchao Song; Yanwei Yu; Anzuo Jiang

**ID:** 148743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vNR0rYjfuq>) | [PDF](<https://openreview.net/pdf?id=vNR0rYjfuq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148743>)

Time series forecasting is important in applications such as energy management, climate modeling, traffic control, and industrial monitoring\. Recent variate\-tokenization Transformers model cross\-variate dependencies effectively, but Softmax attention still suffers from uneven cross\-variate routing and fixed attention sharpness under varying non\-stationarity\. To address these limitations, OTformer is introduced as a non\-stationarity\-aware Optimal Transport framework for time series forecasting\. A lightweight scorer estimates sample\-wise non\-stationarity from raw pre\-normalization statistics and uses this signal to adapt the Sinkhorn entropy regularization coefficient ε, yielding smoother transport plans for more non\-stationary inputs and sharper routing for more stationary ones\. A shared phase embedding further injects cycle\-aware context into variate tokens\. Experiments on eight standard benchmarks and 32 forecasting settings show that OTformer consistently improves upon the iTransformer backbone, with average MSE reductions of 4\.4% on ECL and 12\.5% on Solar across four forecasting horizons\.

## Parallel Fixed\-Point Spiking Neurons for Efficient Training of Spiking Neural Networks

**Authors:** Qirong Yang; Guowei Peng; Xiurui Xie; Yuning Yang; Qiugang Zhan; Guisong Liu

**ID:** 151458 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aUNVuXFPLe>) | [PDF](<https://openreview.net/pdf?id=aUNVuXFPLe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151458>)

Spiking Neural Networks \(SNNs\) are inherently sequential due to temporal state dependencies, limiting the efficiency of parallel hardware such as GPUs and resulting in high training cost\. In this work, we propose the Parallel Fixed\-Point Spiking Neurons \(PFSN\), which reformulates the dynamics of leaky integrate\-and\-fire neurons into a unified fixed\-point mapping, enabling parallel computation across all time steps\. Unlike conventional sequential unrolling, the proposed formulation decouples temporal dependencies through iterative fixed\-point updates, significantly improving computational efficiency\. Furthermore, we introduce a learnable temporal propagation operator that generalizes predefined dynamics and allows adaptive modeling of task\-specific temporal interactions without relying on explicit temporal recursion\. Extensive experiments across diverse domains, including event\-based recognition, sequential image classification, speech processing, and time\-series forecasting, demonstrate that PFSN consistently achieves superior efficiency while maintaining or improving predictive performance compared to existing parallel SNN approaches\. These results highlight the effectiveness of combining fixed\-point formulations with learnable temporal structures for scalable and efficient SNN training\. Code is available at https://anonymous\.4open\.science/r/PFSN\.

## HARMONY: Hierarchical Anchor Retrieval on Manifold for Oblivious\-source Acoustic Anomaly Detection

**Authors:** Yuhang Zhang; Yang Li; Mingyuan Li; Qiang Wu

**ID:** 155727 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3OMsg8le1w>) | [PDF](<https://openreview.net/pdf?id=3OMsg8le1w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155727>)

In standard acoustic anomaly detection \(ASD\), models are usually trained separately for each machine or domain using explicit metadata\. However, in realistic deployments, machine identifiers are incomplete, unreliable, or simply unavailable\. Thus, metadata\-free universal ASD asks a single model to monitor mixed machine populations without machine IDs\. In this paper, we argue that the main failure mode is not a weak detector family, but representation entanglement\. The heterogeneous normal modes overlap in frozen pre\-trained feature spaces, making anomaly scoring and approximate retrieval unreliable\. We study this problem directly and propose HARMONY \(Hierarchical Anchor Retrieval on Manifold for Oblivious\-source acoustic aNomaly detection\), an anchor\-guided geometric repartitioning framework that reorganizes mixed\-source features into compact Voronoi regions and reuses this structure for hierarchical retrieval\. On dataset DCASE 2020 and MIMII, HARMONY improves mean AUC from 75\.40% to 90\.00% \(\+14\.60% absolute improvement\) over the strongest unified baseline and from 83\.90% to 90\.00% over a strong foundation\-feature baseline\. On a single CPU, its hierarchical retrieval achieves a 7\.8× speedup over exhaustive search with only a 0\.20% AUC drop\. These results suggest that incorporating explicit geometric partitioning can improve both detection accuracy and retrieval efficiency for ASD\. Code and data are available at the anonymous URL: https://anonymous\.4open\.science/r/HARMONY\-26CC\.

## TS\-ICL: A Flexible Time\-Indexed Foundation Model for Time Series via In\-Context Learning

**Authors:** Etienne Le Naour; Tahar Nabil; Adrien Petralia

**ID:** 148825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=urL7kBfWB5>) | [PDF](<https://openreview.net/pdf?id=urL7kBfWB5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148825>)

Foundation models mark a profound paradigm shift in time series modeling, with task\-specific models being superseded by general\-purpose zero\-shot models\.  Yet, current approaches primarily focus on forecasting, while real\-world time series are often irregularly and partially observed, requiring models that can jointly forecast, impute missing values, and handle degraded sampling conditions\.  To address these challenges, we introduce TS\-ICL, a novel probabilistic In\-Context Learning encoder\-regressor Transformer that unifies forecasting and imputation\. TS\-ICL formulates time series tasks as timestamp\-aligned regression and naturally incorporates covariates by training on synthetic dependency structures generated from a novel causal data prior\. Empirically, TS\-ICL achieves a new state\-of\-the\-art in imputation, while remaining competitive with leading forecasting foundation models across both univariate and covariate\-aware benchmarks\. It shows particularly strong performance in forecasting with partially observed look\-back windows\. \*Code page\*: https://anonymous\.4open\.science/r/tsicl\-D3F1/\.

## TempoPFN: Synthetic Pre\-training of Linear RNNs for Zero\-shot Time Series Forecasting

**Authors:** Vladyslav Moroshan; Julien Siems; Arber Zela; Timur Carstensen; Frank Hutter

**ID:** 155999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1GbECQvpNs>) | [PDF](<https://openreview.net/pdf?id=1GbECQvpNs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155999>)

Foundation models for zero\-shot time series forecasting face challenges in efficient long\-horizon prediction and reproducibility, with existing synthetic\-only approaches underperforming on challenging benchmarks\. This paper presents TempoPFN, a univariate time series foundation model based on linear Recurrent Neural Networks \(RNNs\) pre\-trained exclusively on synthetic data\. The model uses a GatedDeltaProduct architecture with state\-weaving for fully parallelizable training across sequence lengths, eliminating the need for windowing or summarization techniques while maintaining robust temporal state\-tracking\. Our comprehensive synthetic data pipeline unifies diverse generators, including stochastic differential equations, Gaussian processes, and audio synthesis, with novel augmentations\. In zero\-shot evaluations on the Gift\-Eval, fev\-bench and Chronos\-ZS benchmarks, TempoPFN achieves top\-tier competitive performance,  surpassing the majority of models trained on real\-world data, while being more efficient than existing baselines by leveraging fully parallelizable training and inference\. We open\-source our complete data generation pipeline and training code, providing a reproducible foundation for future research\.

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

## BACE: Behavior\-Adaptive Connectivity Estimation from Multi\-Region Neural Recordings

**Authors:** Mehrnaz Asadi; Sina Javadzadeh; Rahil Soroushmojdehi; Ali Mousavi; Terence Sanger

**ID:** 151970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WSGT96IPb3>) | [PDF](<https://openreview.net/pdf?id=WSGT96IPb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151970>)

Understanding how distributed brain regions coordinate during behavior requires models that are both predictive and interpretable\. We introduce Behavior\-Adaptive Connectivity Estimation \(BACE\), an end\-to\-end framework for learning behavior\-conditioned directed effective connectivity from multi\-region intracranial local field potentials \(LFPs\)\. BACE first encodes within\-region dynamics with region\-specific temporal encoders, then applies a learned adjacency matrix selected for each behavioral context, and finally forecasts future neural activity through a graph\-conditioned autoregressive decoder\. This design yields explicit region\-level connectivity matrices whose edges are tied to predictive dynamics rather than post\-hoc explanation\. On controlled synthetic time series with known directed graphs, BACE recovers the ground\-truth edge structure from forecasting alone\. We then evaluate BACE on human deep\-brain LFP recordings from three participants performing structured motor tasks\. Across participants, BACE achieves strong neural forecasting while producing compact, behavior\-specific directed graphs that can be inspected across task segments\. Reliability analyses further support the stability of the inferred connectivity patterns\. Together, these results position BACE as a practical framework for estimating behavior\-adaptive effective connectivity from high\-dimensional intracranial recordings, enabling interpretable hypotheses about how deep\-brain networks reorganize during behavior\.

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

## Robust Residual Correction via Selective Deployment for Time Series Forecasting

**Authors:** Jianxiang Xie; YUNCHENG HUA; Mingyue Cheng; Flora Salim; Hao Xue

**ID:** 154644 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5U25I5APG>) | [PDF](<https://openreview.net/pdf?id=C5U25I5APG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154644>)

_Abstract unavailable from the accessible public sources._

## Temporal\-Scale Sensitivity in Time\-Series Tokenization and Scale\-Robust Token Estimation by Gated Sum

**Authors:** Berken Utku Demirel; Christian Holz

**ID:** 150389 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQ0TBYaLes>) | [PDF](<https://openreview.net/pdf?id=iQ0TBYaLes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150389>)

_Abstract unavailable from the accessible public sources._

## STEP: Learning STructured Embeddings for Progressive Time Series

**Authors:** Lucas Thil; Jesse Read; Rim Kaddah; Guillaume Doquet

**ID:** 155052 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8oUdUwcYqg>) | [PDF](<https://openreview.net/pdf?id=8oUdUwcYqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155052>)

_Abstract unavailable from the accessible public sources._

## Tikhonov\-Stabilized Bezier Representation Forecasting for Training\-free Diffusion Acceleration

**Authors:** Lei Zhu; Mujie Lin; Ruochong Zheng; Guangyi Wang; Li Hao; Peng Jin; Chang Liu; Jie Chen

**ID:** 155298 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cYL3DrquA>) | [PDF](<https://openreview.net/pdf?id=6cYL3DrquA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155298>)

_Abstract unavailable from the accessible public sources._

## SDHilb: Schrödinger Dynamics\-Guided Neural Network with Adaptive Multi\-Scale Hilbert Transform for Time Series Forecasting

**Authors:** Caihua He; Weiyang Ding

**ID:** 152741 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QhvWgfIvTX>) | [PDF](<https://openreview.net/pdf?id=QhvWgfIvTX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152741>)

_Abstract unavailable from the accessible public sources._

## MMTA: Benchmarking Multimodal Temporal Analysis with Time Series, Text, and Vision

**Authors:** Ziyang Zhang; Shenyi Li; Yilin wang; Ziyun Cui; Bowen Zhou; Wen Wu; Chao Zhang

**ID:** 139823 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2dYNGCZQj9>) | [PDF](<https://openreview.net/pdf?id=2dYNGCZQj9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139823>)

_Abstract unavailable from the accessible public sources._

## Does Synthetic Data Help? Empirical Evidence from Deep Learning Time Series Forecasters

**Authors:** Hugo Cazaux; Eyjolfur Asgeirsson; Hlynur Stefansson

**ID:** 154722\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154722

[Paper](<https://openreview.net/forum?id=BUZncgztnb>) | [PDF](<https://openreview.net/pdf?id=BUZncgztnb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154722>)

Synthetic data has transformed language model training, yet its role in time series forecasting remains poorly understood\. We present a large\-scale empirical study: nine experiment groups, 4,218 runs systematically evaluating synthetic time series augmentation across five architectures, four synthetic signals and seven datasets\. The effect is sharply architecture\-conditional: channel\-mixing models \(TimesNet, iTransformer\) benefit in the majority of trials, while channel\-independent models \(DLinear, PatchTST\) are consistently degraded\. In selected low\-resource settings the gains are striking: TimesNet trained on only 10\\% of Weather data with synthetic augmentation surpasses the full\-data baseline \(4 of 16 sparsity\-dataset combinations\)\. Averaged across all architectures, augmentation hurts in 67\\% of trials\. We further find that only the Seasonal\-Trend generator reliably helps across the tested benchmarks, and that hard curriculum switching is actively harmful \(\+24\\% MSE degradation\)\. These results provide concrete, actionable guidelines on how to use synthetic data: use synthetic augmentation with channel\-mixing architectures, use gradual annealing schedules, and treat low\-resource augmentation as architecture\- and dataset\-dependent\. Code is available at an \\href\{https://github\.com/anonmirror/synthetic\-timeseries\}\{anonymized repository\}\.

## AdaST: Adaptive Coupling for Spatial\-Temporal Forecasting

**Authors:** Zhenyu Lei; Chenghao Liu; Yushun Dong; Ryan Qi Wang; Jundong Li

**ID:** 155866 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2IWnVy1qoe>) | [PDF](<https://openreview.net/pdf?id=2IWnVy1qoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155866>)

Spatial\-temporal \(ST\) forecasting underpins many real\-world systems such as traffic, climate, and energy networks\. While existing methods implicitly assume strong spatiotemporal coupling, we observe that real\-world ST data exhibits distinct coupling regimes, ranging from temporal\-dominated and spatial\-dominated to strongly coupled patterns\. This mismatch causes current models to suffer from spurious dependencies and degraded performance when one correlation dominates\. To overcome this limitation, we aim to dynamically modulate spatial and temporal modeling based on the data's inherent coupling structure\. However, three key challenges exist: unknown coupling structure, heterogeneous coupling dynamics, and suboptimal spatial modeling\. We propose AdaST, an adaptive ST forecasting framework that tackles these challenges through a decompose\-recompose paradigm\. AdaST factorizes inputs into components capturing different coupling patterns using heterogeneity\-aware experts\. Each component is processed by role\-aligned modules, and a correlation\-informed adaptive recomposer integrates them for final prediction\. Extensive experiments confirm that AdaST significantly outperforms state\-of\-the\-art baselines, validating the necessity of an adaptive approach\.

## Generating Financial Time Series by Matching Random Convolutional Features

**Authors:** Konrad Mueller; Nikita Zozoulenko; Ben Wood; Thomas Cass; Lukas Gonon

**ID:** 149033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLVW1Y9hBz>) | [PDF](<https://openreview.net/pdf?id=tLVW1Y9hBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149033>)

Generating realistic financial time series is challenging as training data is often limited to a single historical path\. With such scarce data, overfitting is hard to avoid, especially under adversarial training where a trained discriminator can memorize the training samples\. To mitigate this, recent approaches train generators to minimize the discrepancy between untrained feature representations of real and generated time series\. In these works, the feature maps are based on path signatures, which can fail to capture relevant time series properties at tractable truncation depths\. In this work, we instead train generators by matching random convolutional features of real and generated time series\. Existing random convolutional feature maps, such as Rocket and Hydra, have been shown to provide informative representations of real\-world time series, but cannot supervise generative models because they are non\-differentiable\. We introduce \*\*SOCK\*\* \(\*\*\*SO\*\*ft \*\*C\*\*ompeting \*\*K\*\*ernels\*\), a fully differentiable random convolutional feature map, suited to train generative time series models\. We show that generators trained by matching random SOCK features consistently outperform signature and diffusion baselines across a wide range of small\-sample financial datasets\. We further demonstrate SOCK's expressiveness on two\-sample hypothesis testing and time series classification tasks, where SOCK matches or outperforms existing unsupervised feature maps\.

## BucpTSF: Breaking the Uniform Computation Paradigm in Time\-Series Forecasting

**Authors:** Hua Wang; Jinghao Lu; Fan Zhang

**ID:** 148238 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zMcy2fY2hW>) | [PDF](<https://openreview.net/pdf?id=zMcy2fY2hW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148238>)

Real\-world time series typically exhibit non\-uniform information density across temporal positions, frequency structures, and forecasting horizons: critical dynamics are concentrated in local segments, different frequency components carry different structural information, and different horizons require different modeling complexity\. However, most existing methods still allocate computation approximately uniformly across these dimensions, leading to redundant computation in low\-information regions and insufficient modeling of key patterns\. To address this, we propose BucpTSF, an information\-density\-driven structured framework for time series forecasting\. Specifically, BucpTSF reorganizes raw sequences into hierarchically heterogeneous multi\-level token representations through information\-density\-aware temporal representation reorganization, captures key cross\-token dependencies with low overhead via frequency\-selective structured token interaction, and further introduces horizon\-conditioned structured extrapolation to adaptively balance dynamic modeling and structural extrapolation bias for different horizons, thereby improving the accuracy and stability of long\-term forecasting\. Extensive experiments on real\-world datasets show that BucpTSF consistently outperforms strong baselines under various forecasting settings, validating the effectiveness of information\-density\-driven non\-uniform computation allocation for time series forecasting\.

## ClinStab: Stability\-Oriented Learning for Medical Time Series via Dual\-Stream Alignment

**Authors:** Songning Lai; Haoxuan Xu; Yi Liu; Wenshuo Chen; Ninghui Feng; Jiayu Yang; Haoang Li; Yutao Yue

**ID:** 149545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pLj36IwQSC>) | [PDF](<https://openreview.net/pdf?id=pLj36IwQSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149545>)

Deep models for medical time series can achieve strong benchmark accuracy yet remain brittle under acquisition artifacts, physiological variability, and low\-resource training conditions\. We present \\textbf\{ClinStab\}, a Medformer\-based framework for EEG and ECG classification that studies whether channel\-aware dual\-stream interaction and perturbation\-aware optimization can improve the clean/robustness tradeoff\. The proposed \\textbf\{S\}alience\-\\textbf\{C\}ontext \\textbf\{D\}ual \\textbf\{M\}odulation \(SCDM\) module uses energy as a routing prior: high\-energy channel\-aligned components receive attentive modeling, while residual components remain trainable through a lightweight context pathway\. ClinStab then combines clean supervision, perturbed supervision, prediction consistency, and teacher\-guided stabilization under adversarial perturbations\. Across four public datasets and 11 baselines, ClinStab improves accuracy over Medformer on all datasets and improves selected robustness metrics under the perturbation settings studied here, while exposing tradeoffs on PTB ranking metrics and soft\-routing alternatives\. These results support ClinStab as a practical same\-backbone stability intervention, not as evidence of universal clinical robustness\.

## MOVEBENCH: A Benchmark for Global\-Scale Wildlife Movement Forecasting

**Authors:** Justin Kay; Shir Bar; Ellen O Aikens; Martin Becker; Francesca Cagnacci; Juliet Cohen; Scott W Forrest; Jessica Kendall\-Bar; Madeleine Lucas; Macon Overcast; Meredith S Palmer; Will Rogers; Nicholas J Russo; Christian Rutz; Larissa T Beumer; Michael B Brown; Ying\-Chi Chan; Sarah C Davidson; Diego E Soto; Anne G Hertel; Roland Kays; Benjamin Koger; Guram Mikaberidze; Thomas Mueller; Ruth Oliver; Thorsten Papenbrock; Robert Patchett; Jared A Stabach; Dane Taylor; Scott W Yanco; Sara Beery

**ID:** 139749 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ss3Wyzv27>) | [PDF](<https://openreview.net/pdf?id=6ss3Wyzv27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139749>)

_Abstract unavailable from the accessible public sources._

## FENet: Functional Embedding Neural Network for Change\-Point Detection in Functional Time Series

**Authors:** Caixia Xu; Jinhong You; Wen Li; shouguo du; Yiming Tang; Jiguo Cao

**ID:** 155313 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WmRBxSI5l>) | [PDF](<https://openreview.net/pdf?id=6WmRBxSI5l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155313>)

_Abstract unavailable from the accessible public sources._

## AtmoZero: Self\-Play Post\-Training for Caption\-Free Weather Time\-Series Captioning

**Authors:** Qirui Zheng; Shengchao Chen

**ID:** 152217 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ugpq0GTKKc>) | [PDF](<https://openreview.net/pdf?id=Ugpq0GTKKc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152217>)

_Abstract unavailable from the accessible public sources._

## RnR: a meta\-solver for causal discovery in undersampled time series data

**Authors:** Mohammadsajad Abavisani; Kseniya Solovyeva; David Danks; Vince D\. Calhoun; Sergey Plis

**ID:** 150826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1Ye3BzygN>) | [PDF](<https://openreview.net/pdf?id=f1Ye3BzygN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150826>)

Learning directed causal graphs from time\-series data poses significant challenges, especially in fMRI where slow sampling rate obscures fast neural interactions\. This temporal mismatch leads to undersampling, which can make multiple graphs equally plausible\. We address this problem by explicitly modeling undersampling effects when recovering causal graphs\. Our approach employs answer set programming \(ASP\) to enforce domain\-specific constraints and optimize soft observational constraints, thereby identifying a Markov equivalence class for the resulting graph solutions\. By customizing an ASP solver to collect multiple near\-optimal solutions, we obtain not only the single best\-fitting graph but an equivalence class of high\-scoring graphs for expert consideration\. This method, called Real\-world noisy RASL \(RnR\), can also act as a meta\-solver: it refines the output of other causal discovery algorithms by accounting for undersampling biases\. In synthetic data and empirical brain network data, RnR produces more accurate causal graphs than state\-of\-the\-art methods\. When applied as a meta\-solver \(refining outputs of existing algorithms\), it improves F1 scores by an average of 46\\% over baseline methods; on standalone synthetic data benchmarks, it achieves a 64\\% improvement\. We demonstrate that RnR is robust to varying undersampling rates, maintaining high precision and recall even as sampling becomes more sparse, whereas baseline methods degrade significantly\. Finally, we test RnR on real\-world settings where ground truth connectivity is unknown such as human brain fMRI data, showing that incorporating undersampling\-aware constraints via ASP yields more reliable and interpretable brain connectivity estimates from fMRI time series, bridging the gap between neural dynamics and observational data\.

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

## Frequency Domain Reservoir Computing

**Authors:** Klaus Schertler; Xiomara Runge; Andrea Ceni; David Kappel; Claudio Gallicchio

**ID:** 151162 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZ5lAACl8V>) | [PDF](<https://openreview.net/pdf?id=cZ5lAACl8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151162>)

While the quadratic sequence\-length bottleneck of transformers has fueled a resurgence in recurrent models, effectively capturing complex dynamics requires architectures that balance efficient training with highly expressive latent states\. Echo State Networks \(ESNs\) offer a compelling approach by utilizing fixed recurrent weights to circumvent backpropagation through time, enabling a closed\-form training solution\. However, achieving the expressivity needed for complex tasks demands large reservoirs, exposing an $\\mathcal\{O\}\(N^2\)$ state\-update bottleneck that prevents ESNs from matching the scale of contemporary recurrent models\. To address this limitation, we introduce Frequency Domain Reservoir Computing \(FRESCO\), an ESN architecture operating entirely in the frequency domain while avoiding domain\-shift overheads to achieve $\\mathcal\{O\}\(N\)$ complexity for dense, non\-linear recurrent updates\. By employing a novel dimensional zero\-padding input embedding, a packed frequency\-domain readout, and a natively applied frequency\-domain non\-linearity, FRESCO drastically reduces computational costs and energy consumption of training and inference\. Furthermore, FRESCO matches the state\-of\-the\-art predictive performance on memory benchmarks, sequential classification, and multivariate long\-horizon forecasting, offering a scalable path forward for dense recurrent architectures\.

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

**ID:** 153039 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUSDMTfzLA>) | [PDF](<https://openreview.net/pdf?id=OUSDMTfzLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153039>)

_Abstract unavailable from the accessible public sources._

## MESSENGER: Memory\-Enhanced Sequential Scene Flow Estimation via Autoregressive Next\-Frame Forecasting

**Authors:** Jiuming Liu; Jianing Li; Mengmeng Liu; Hongyang He; Hesheng Wang; Per O Kristensson

**ID:** 151929 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wo3mKBsHLA>) | [PDF](<https://openreview.net/pdf?id=Wo3mKBsHLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151929>)

_Abstract unavailable from the accessible public sources._

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

## Entropy Guided Dynamic Patch Segmentation for Time Series Transformers

**Authors:** Sachith Abeywickrama; Emadeldeen Eldele; Min Wu; Xiaoli Li; Chau Yuen

**ID:** 152779 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QPKvNhibb1>) | [PDF](<https://openreview.net/pdf?id=QPKvNhibb1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152779>)

_Abstract unavailable from the accessible public sources._

## Detect, Explain, Interpret: An End\-to\-End Benchmark for Time Series Anomaly Detection, Explainability and Interpretability\.

**Authors:** Roberto Stanzione; Jules Barbe; Magali Parrino; Jérémie Fourmann; Paul Boniol

**ID:** 139119 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jxfd3833me>) | [PDF](<https://openreview.net/pdf?id=jxfd3833me>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139119>)

Time Series Anomaly Detection \(TSAD\) has received increasing attention, driven by the growing availability of complex time series data\. This surge has led to the development of numerous detection methods, as well as a variety of benchmarks aimed at thoroughly evaluating their performance\. However, most existing detectors remain largely agnostic to domain context, overlooking explainability and interpretability\. One of the main reasons for this gap is that current benchmarks primarily focus on detection accuracy, and only few of them evaluate spatial explainability\. Moreover, no benchmark currently provides sufficiently rich semantic annotations to support the generation of human\-understandable interpretations of anomalies\. To address these limitations, we introduce SHAD \(Scality High\-dimensional Anomaly Detection benchmark\), a fully annotated benchmark composed of 144 multivariate, high\-dimensional time series collected from real\-world distributed cloud storage systems operated by Scality\. The proposed dataset includes rich contextual information, covering three families of anomalies with varying degrees of severity\. As further contribution, we provide an end\-to\-end benchmark that covers all stages of a TSAD pipeline\.  For Detection, we benchmark a wide range of existing anomaly detectors, testing their effectiveness on the proposed real\-world dataset\. Then, we evaluate explainability by measuring the contribution of each dimension in the generated anomaly score\. Finally, for interpretability, we investigate the effectiveness of frozen LLM baselines in localizing and interpreting anomalies, paving the way for future research towards interpretable and explainable TSAD\.

## Robust Residual Correction via Selective Deployment for Time Series Forecasting

**Authors:** Jianxiang Xie; YUNCHENG HUA; Mingyue Cheng; Flora Salim; Hao Xue

**ID:** 154644\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154644

[Paper](<https://openreview.net/forum?id=C5U25I5APG>) | [PDF](<https://openreview.net/pdf?id=C5U25I5APG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154644>)

_Abstract unavailable from the accessible public sources._

## Temporal\-Scale Sensitivity in Time\-Series Tokenization and Scale\-Robust Token Estimation by Gated Sum

**Authors:** Berken Utku Demirel; Christian Holz

**ID:** 150389\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150389

[Paper](<https://openreview.net/forum?id=iQ0TBYaLes>) | [PDF](<https://openreview.net/pdf?id=iQ0TBYaLes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150389>)

_Abstract unavailable from the accessible public sources._

## STEP: Learning STructured Embeddings for Progressive Time Series

**Authors:** Lucas Thil; Jesse Read; Rim Kaddah; Guillaume Doquet

**ID:** 155052\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155052

[Paper](<https://openreview.net/forum?id=8oUdUwcYqg>) | [PDF](<https://openreview.net/pdf?id=8oUdUwcYqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155052>)

_Abstract unavailable from the accessible public sources._

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

## Flow\+Diff: Unifying Flow and Diffusion Representations for Multivariate Time Series Anomaly Detection

**Authors:** Van Kwan Zhi Koh; Songnan Lin; Zhiping Lin; Bihan Wen

**ID:** 152468 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SsSjmffHDW>) | [PDF](<https://openreview.net/pdf?id=SsSjmffHDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152468>)

Many existing multivariate time series anomaly detection methods formulate anomaly detection as a reconstruction problem, where detections are derived from reconstruction errors in the time domain\. While effective for large deviations, reconstruction\-based scoring struggles with subtle anomalies where only a small subset of features deviates slightly\. In such cases, most features are well reconstructed, causing the overall reconstruction error to remain low and indistinguishable from normal data\. To address these challenges, we propose Flow\+Diff, a novel framework that detects anomalies via discrepancies in a latent space, where two complementary representations, induced by distinct modeling paradigms, diverge under anomalous inputs\. One representation is obtained via a normalizing flow, which provides an invertible mapping that preserves temporal dependencies and captures inter\-feature dependencies\. The other is produced by a diffusion model that learns the distribution of normal samples in the latent space via a stochastic denoising process\. When given anomalous inputs, the normalizing flow maps the inputs to latent representations that lie in low\-probability regions of the learned latent distribution, while the diffusion model generates representations aligned with normal data distributions, resulting in a pronounced discrepancy between the two\. We compute the anomaly score based on this latent\-space discrepancy, thereby shifting anomaly detection from the time domain to the latent space\. Finally, the invertibility of the normalizing flow enables reconstruction in the time domain, facilitating interpretation of anomalous features\. Extensive experiments across six benchmark datasets show that Flow\+Diff achieves state\-of\-the\-art performance on four datasets against competitive baselines\.

## Spikes as Detectors: Phase\-Conditioned Spiking Dynamics for Time\-Series Anomaly Detection

**Authors:** Miao Wang; Gangyi Ding; Yunlin Lei; Yu Zhang; chenjingfeng; Xu Yang

**ID:** 152294 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U8hMwVUl0r>) | [PDF](<https://openreview.net/pdf?id=U8hMwVUl0r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152294>)

Most time\-series anomaly detectors ask whether an observation can be predicted or reconstructed\. We ask a different question: can a detector’s own spiking dynamics become anomaly evidence? We study this question for periodic and quasi\-periodic time series and propose SPIRE, a phase\-conditioned spiking anomaly detector\. SPIRE uses period\-aware current formation to expose phase\-aligned cross\-period residuals to leaky integrate\-and\-fire neurons\. We refer to this conversion as eventification: after residual injection, recurrence violations induce abnormal bursts, silences, or phase\-shifted spike trains\. SPIRE then constructs phase\-conditioned normal templates of spike states and scores deviations in residual energy, firing\-rate patterns, and burst/silence statistics, instead of relying solely on output\-space prediction or reconstruction errors\. This separates the operational protocol, including causal current\-step detection, one\-step prediction, and non\-causal reconstruction, from the source of anomaly evidence, namely output errors, spike dynamics, or both\. On TSB\-AD\-U and TSB\-AD\-M, SPIRE establishes new best VUS\-PR among neural time\-series anomaly detectors\. Spike\-native scores remain competitive without reconstruction error, hybrid scoring consistently improves error\-only scoring, and replacing LIF neurons with continuous activations in matched ANN counterparts reduces detection performance under the same period\-aware architecture\. Periodicity\-stratified analyses and spike\-state visualizations further show that the gains are strongest when phase recurrence is reliable, supporting the proposed spike\-as\-detector mechanism\. These results suggest that phase\-conditioned spiking dynamics can serve as a first\-class anomaly detection signal for periodic time series, rather than merely an efficient computational substrate\.

## XTraj: A Coarse\-to\-Fine Autoregressive Framework for Transferable Trajectory Generation

**Authors:** wang chao; ZHIQUAN LAI; Xinwei Fang; Yuanshao Zhu; Xun Zhou; James Yu

**ID:** 153554 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXGb143xQb>) | [PDF](<https://openreview.net/pdf?id=KXGb143xQb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153554>)

Generating realistic human trajectories is essential for mobility simulation but remains challenging when they must generalize across cities and respect road network constraints\. In practice, existing methods often suffer from three key limitations: geographic overfitting, length\-rigid generation, and off\-road drift when generating GPS coordinates directly\. To address these issues, we propose \\textbf\{XTraj\}, a transferable coarse\-to\-fine autoregressive framework for road\-consistent trajectory generation\. Specifically, XTraj first learns transferable road\-segment representations by integrating road geometry, POI context, historical traffic intensity, and graph topology\.  Based on these representations, it then autoregressively generates variable\-length road\-segment routes under road\-connectivity constraints\.  Finally, instead of directly regressing latitude\-longitude coordinates, XTraj further refines each generated route in a route\-progress space by predicting monotonic progress increments along valid road geometry, from which GPS points are recovered by interpolation\. This route\-aligned design naturally supports variable\-length GPS generation and guarantees road\-geometry consistency by construction\.  Experiments on two real\-world vehicle trajectory datasets show that XTraj improves spatial fidelity over competitive baselines, transfers effectively to unseen cities in a zero\-shot setting, and ensures road\-geometry consistency by construction without any post\-hoc map matching\. The implementation is provided in \\textbf\{https://anonymous\.4open\.science/r/XTraj\-EBE7/\}\.

## BESS\-Bench: Benchmarking Spectral Representations for Be\-Star Variability

**Authors:** Matthieu Le Lain; Sébastien Lefèvre

**ID:** 139851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0X9DNTPDH6>) | [PDF](<https://openreview.net/pdf?id=0X9DNTPDH6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139851>)

Time\-resolved stellar spectroscopy is a primary observational window onto mass\-loss, disc formation and rotational physics, phenomena that single\-epoch surveys cannot capture\. Be stars are rapidly rotating B\-type stars that episodically grow and lose a circumstellar gas disc, which imprints a variable emission profile on the hydrogen H\-alpha Balmer line \(6562\.8 Angstrom\) on timescales from days to decades\. Decoding these spectral variations is both a key step in understanding stellar evolution and an open challenge for machine learning on irregularly sampled scientific time series\. Yet no benchmark exists for these spectra: professional surveys deliver a single epoch per star, and the amateur\-driven BeSS database, although it hosts hundreds of thousands of multi\-epoch spectra, has never been curated for machine learning\. We close this gap with BESS\-Bench: 339,115 optical spectra of 1,468 Be stars over 35 years, all expert\-reviewed, from amateurs \(81\.7%\) and professionals \(17\.7%\), with a scored H\-alpha benchmark slice of 26,937 spectra and three tasks under a unified evaluation protocol\. SpecProbe measures how well frozen embeddings recover six scalar line features \(width, peak separation, line\-core depth, asymmetry, equivalent width, peak intensity\)\. LineTransfer tests cross\-line generalisation \(H\-beta to H\-alpha\)\. EWForecast predicts the next\-epoch equivalent width of H\-alpha \(a disc\-mass proxy\) from a star's recent spectroscopic history\. We release a compact masked auto\-encoder baseline \(BeMAE\) and benchmark it against PCA and two zero\-shot time\-series foundation models \(Chronos\-Bolt and TimesFM\-2\.0\)\. The ranking is sharply task\-dependent: BeMAE recovers shape features with an R2 that is 4\.24x that of PCA\(10\) \(bootstrap CI95 \[4\.12, 4\.33\]\), yet a PCA\+ridge pipeline lowers EW forecasting MAE by 5\.8% over persistence, beating both foundation models, and calling as such for further development of AI models in this context\. Dataset, weights, frozen splits and evaluation pipeline are released under CC\-BY\-4\.0, so the scientific community can adopt BESS\-Bench as a shared testbed and contribute new representations and models to advance our understanding of stellar variability\.

## Evaluating Uncertainty Calibration in Probabilistic Time Series Foundation Models

**Authors:** Thomas Decker; Volker Tresp

**ID:** 138974 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3VdYykgSV>) | [PDF](<https://openreview.net/pdf?id=t3VdYykgSV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138974>)

Time series foundation models \(TSFMs\) are increasingly used for probabilistic forecasting across diverse domains, yet the reliability of their uncertainty estimates remains poorly understood\. In this work, we study uncertainty calibration in probabilistic TSFMs from a broader methodological and empirical perspective\. We introduce a taxonomy of how TSFMs represent predictive uncertainty and develop a fine\-grained evaluation framework for calibration in multi\-horizon forecasting that distinguishes pooled, horizon\-wise, and stronger conditional notions of calibration\. Using this framework, we conduct a comprehensive empirical evaluation of popular TSFMs across diverse datasets and show that current models exhibit distinct and systematic patterns of miscalibration that standard metrics often obscure\. We further analyze common post\-hoc recalibration methods and characterize which forms of calibration they can improve and which tend to persist\. Our results provide practical guidance for evaluating and improving uncertainty calibration in TSFMs and highlight important limitations of current practice\.

## Energy\-Based Operator Learning in Function Space

**Authors:** Hong Chul Nam; Jeonghwan Cheon; Jae Mo Shin; Hyun Kwon

**ID:** 153867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I9qAqBoxNx>) | [PDF](<https://openreview.net/pdf?id=I9qAqBoxNx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153867>)

We propose Energy\-Based Operators \(EBOs\), an architecture\-agnostic framework for learning conditional distributions over functions on continuous domains\. An EBO defines a scalar energy over target functions given an input function and induces a probability model through a Gaussian reference\. The resulting score field is obtained as the gradient of the parametrized energy to perform function\-space iterative energy minimization \(EM\)\.  Our model shows strong performance in function generation, such as super\-resolution and forecasting, over various 1D function classes \(oscillations, damping, and Izhikevich\) in comparison with prediction operators and denoising operators over various architecture backbones\. Moreover, it achieves strong performance over PDEs, namely Navier\-Stokes, Darcy flow and Burgers\. Notably, our model successfully detects anomalous functions by automatically assigning high energy without any supervision\.  It enables seizure detection and volatility prediction after learning neural dynamics and market microstructure dynamics without pre\-defined labels during training, highlighting its effectiveness for both learning dynamical systems and detecting functional anomalies arising in scientific simulations\.

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

## Stable Resolution\-Invariant Emulation in Entropically Controlled Kinetic Methods

**Authors:** Kareem Hegazy; Jose Antonio Lara Benitez; Anastasis Kratsios; Ivan Dokmanić; Maarten V\. de Hoop; Michael Mahoney

**ID:** 152770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QVYzAlckz5>) | [PDF](<https://openreview.net/pdf?id=QVYzAlckz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152770>)

Resolution invariance is a critical capability for scientific machine learning methods \(SciML\), however, the ability to sample at any resolution does not guarantee stable emulation at all resolutions\. This important distinction underpins one of scientific machine learning's greatest potential: the ability to efficiently emulate complicated and computationally expensive systems on inexpensive coarse grids\. Stable numerical solvers are computationally expensive as they attempt to resolve small scales that receive and dissipate spectral energy\. Learned coarse\-grid forecasters remove the dissipative channel, allowing unresolved frequencies to re\-emerge as grid\-scale noise \(aliasing\)\. We explore stable resolution invariant emulation through physically principled control over entropy dynamics to reinforce the dissipative mechanism within the Neural Discrete Equilibrium \(NeurDE\) method\. Entropically\-stabilized NeurDE produces stable long\-time rollouts for thousands of forecasting steps on large Reynolds number turbulent flows \(Re=50,000\) with very coarse grids \($\\mathbb\{R\}^\{16\\times16\}$\)\. Entropically\-stabilized NeurDE demonstrates extreme stability at coarse resolutions, outperforming the data\-generating stabilized numerical method: a much more challenging baseline than SciML surrogates\.

## Stable Resolution\-Invariant Emulation in Entropically Controlled Kinetic Methods

**Authors:** Kareem Hegazy; Jose Antonio Lara Benitez; Anastasis Kratsios; Ivan Dokmanić; Maarten V\. de Hoop; Michael Mahoney

**ID:** 152770\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152770

[Paper](<https://openreview.net/forum?id=QVYzAlckz5>) | [PDF](<https://openreview.net/pdf?id=QVYzAlckz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152770>)

Resolution invariance is a critical capability for scientific machine learning methods \(SciML\), however, the ability to sample at any resolution does not guarantee stable emulation at all resolutions\. This important distinction underpins one of scientific machine learning's greatest potential: the ability to efficiently emulate complicated and computationally expensive systems on inexpensive coarse grids\. Stable numerical solvers are computationally expensive as they attempt to resolve small scales that receive and dissipate spectral energy\. Learned coarse\-grid forecasters remove the dissipative channel, allowing unresolved frequencies to re\-emerge as grid\-scale noise \(aliasing\)\. We explore stable resolution invariant emulation through physically principled control over entropy dynamics to reinforce the dissipative mechanism within the Neural Discrete Equilibrium \(NeurDE\) method\. Entropically\-stabilized NeurDE produces stable long\-time rollouts for thousands of forecasting steps on large Reynolds number turbulent flows \(Re=50,000\) with very coarse grids \($\\mathbb\{R\}^\{16\\times16\}$\)\. Entropically\-stabilized NeurDE demonstrates extreme stability at coarse resolutions, outperforming the data\-generating stabilized numerical method: a much more challenging baseline than SciML surrogates\.

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

## TraXion: Rethinking Pre\-training Frameworks for Mobility and Beyond

**Authors:** Shang\-Ling Hsu; Mark Tenzer; Cyrus Shahabi; Khurram Shafique

**ID:** 152716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QtFyIbY3oe>) | [PDF](<https://openreview.net/pdf?id=QtFyIbY3oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152716>)

Human mobility differs from text and from generic time series in three structural ways: visits are tuple\-valued events whose meaning depends on the joint distribution over location, time, and activity; users carry persistent signatures across trajectories; and visits are not independent across users, since co\-location at shared places is a primary signal\. Existing pre\-training recipes for mobility import objectives from language modeling, treating trajectories as sentences and visits as tokens, an analogy that fails against each of the three properties above\. These properties define a broader class, multi\-entity spatiotemporal event streams \(MESES\), spanning enterprise authentication logs, electronic health records, and other event\-stream domains where entities share infrastructure, schedules, or contexts\. We make the properties precise as three axioms that any pre\-training framework for MESES should satisfy, and introduce TraXion, whose objectives and architecture are jointly designed to meet them\. A single TraXion checkpoint per dataset beats task\-specific baselines on every task across six public mobility datasets covering anomaly detection, next\-POI recommendation, next\-visit prediction, and social\-link prediction\. The same recipe, applied unchanged to enterprise authentication logs and ICU mortality prediction, matches or exceeds prior work on both, showing that event streams from domains as different as mobility, security, and healthcare can be modeled under a single framework\.

## Efficient, Accurate and Stable Gradients for Neural ODEs

**Authors:** Sam McCallum; James Foster

**ID:** 155995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1IMnLHfJyl>) | [PDF](<https://openreview.net/pdf?id=1IMnLHfJyl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155995>)

Training Neural ODEs requires backpropagating through an ODE solve\. The state\-of\-the\-art backpropagation method is recursive checkpointing that balances recomputation with memory cost\. Here, we introduce a class of algebraically reversible ODE solvers that significantly improve upon both the time and memory cost of recursive checkpointing\. The reversible solvers presented calculate exact gradients, are high\-order and numerically stable \-\- strictly improving on previous reversible architectures\. On scientific modeling and time series classification experiments, reversible solvers reduce the training time by more than $2\\times$ while using at least $10\\times$ less memory on average than recursive checkpointing\.

## A Hierarchy of Entropy\-Shapley Games for Multivariate Predictive Uncertainty

**Authors:** Niklas Koenen; Claudia Battistin; Jeriek Van den Abeele; Martin Jullum

**ID:** 153980 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H5mUgkvpmE>) | [PDF](<https://openreview.net/pdf?id=H5mUgkvpmE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153980>)

Modern probabilistic machine learning models increasingly produce multivariate outputs with complex dependence structure, from multi\-step time\-series forecasts to sample path predictions\. Understanding which input features drive the predictive uncertainty is important for risk\-aware decisions, model diagnostics, and deciding whether the uncertainty should be mitigated or hedged against\. This attribution problem requires a choice of how dependencies between output components are treated\. Existing approaches reduce the output to a scalar through aggregation or projection before attribution, thereby obscuring whether features affect marginal uncertainty, dependence structure, or both, while component\-wise analyses can miss dependence effects entirely\. We close this gap by introducing a hierarchy of three entropy\-based Shapley games that make this output\-side choice explicit for any ordered multivariate outcome, ranging from per\-component marginal entropy to fully joint entropy\. The hierarchy isolates a cross\-component attribution term that captures how each feature shifts the dependence between output components, a quantity invisible to component\-wise methods\. We establish a chain\-rule decomposition of the joint attribution and characterize the cross\-component term through conditional total correlation, providing both closed\-form and sample\-based estimators\. Finally, we demonstrate how the framework captures differences in learned joint structure across probabilistic models from distributional regression to a zero\-shot time series foundation model\.

## Differencing the Diffusion Trajectory toward Uncertain Components for Time Series Forecasting

**Authors:** Chen Su; Yuanhe Tian; Yan Song

**ID:** 154330 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EQ3rr1gzcl>) | [PDF](<https://openreview.net/pdf?id=EQ3rr1gzcl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154330>)

_Abstract unavailable from the accessible public sources._

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

## FracTS: Hierarchical and Autoregressive Time Series Generation

**Authors:** Jiayu Li; Umair Afzal; Zilong Zhao; Milad Abdollahzadeh; Uzair Javaid; Biplab Sikdar

**ID:** 149467 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ptzy0mmiMh>) | [PDF](<https://openreview.net/pdf?id=ptzy0mmiMh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149467>)

_Abstract unavailable from the accessible public sources._

## AQBENCH: Benchmarking Neural Surrogates for Air Quality Forecasting

**Authors:** Siddharthan Dileep; Sanchit Bedi; Pareshbhai D Parmar; Ayush Maheshwari; Sri H Kota; N M Anoop Krishnan

**ID:** 139706 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9VdHenNk02>) | [PDF](<https://openreview.net/pdf?id=9VdHenNk02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139706>)

_Abstract unavailable from the accessible public sources._

## TSB\-SEG: A Systematic Time\-Series Segmentation Benchmark

**Authors:** Félix Chavelli; Arik Ermshaus; Patrick Schäfer; Fan Yang; John Paparrizos; Paul Boniol

**ID:** 139716 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8o41Tc7xo4>) | [PDF](<https://openreview.net/pdf?id=8o41Tc7xo4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139716>)

_Abstract unavailable from the accessible public sources._

## DSSNet: Deep Spectral Structure Profiling Network for Traffic Flow Prediction

**Authors:** Tao Wang; Zhenye Yang; Hua Lu; Huan Li; Senzhang Wang; Jinpeng Chen

**ID:** 154082 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLEaq95PAw>) | [PDF](<https://openreview.net/pdf?id=GLEaq95PAw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154082>)

_Abstract unavailable from the accessible public sources._

## Learning Continuously Evolving Spatio\-Temporal Explanations for Traffic Flow Forecasting

**Authors:** Cuiying Huo; Baoxu Wang; Lin Wu; Yu Mei; Dongxiao He; Yawen Li; Di Jin

**ID:** 154199 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FTEcriFiDS>) | [PDF](<https://openreview.net/pdf?id=FTEcriFiDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154199>)

_Abstract unavailable from the accessible public sources._

## Why Do Time Series Models Need Long Context Windows?

**Authors:** Luca Butera; Giovanni De Felice; Andrea Cini; Cesare Alippi

**ID:** 149819 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n51PuFNKYi>) | [PDF](<https://openreview.net/pdf?id=n51PuFNKYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149819>)

_Abstract unavailable from the accessible public sources._

## FracTS: Hierarchical and Autoregressive Time Series Generation

**Authors:** Jiayu Li; Umair Afzal; Zilong Zhao; Milad Abdollahzadeh; Uzair Javaid; Biplab Sikdar

**ID:** 149467\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149467

[Paper](<https://openreview.net/forum?id=ptzy0mmiMh>) | [PDF](<https://openreview.net/pdf?id=ptzy0mmiMh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149467>)

_Abstract unavailable from the accessible public sources._

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

**ID:** 150202\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150202

[Paper](<https://openreview.net/forum?id=jyIfuVt2UU>) | [PDF](<https://openreview.net/pdf?id=jyIfuVt2UU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150202>)

Time\-series carry structure simultaneously at multiple scales \(fine\-grained variation, mid\-range motifs, and global properties\) and downstream tasks operate at correspondingly different scales\. Most existing self\-supervised learning approaches supervise representations globally via instance\-level contrastive losses and limited temporal neighborhood supervision, but do not explicitly exploit the structural hierarchy\. We propose a learning framework that explicitly enforces a structural hierarchy across three scales independently: a local objective for token continuity, a mid\-range objective for window\-level motifs, and a global objective for sequence\-level agreement\. Realizing this framework requires the backbone to expose a representation at each scale; we introduce \\textbf\{Progressive Memory Transformer\} \(PMT\), which augments a transformer with writable, window\-aligned memory that exposes the mid\-range scale alongside the token and sequence\-level representations conventional transformers already provide\. Across seven UCR/UEA/UCI classification benchmarks, a cue\-retention probe, and two forecasting benchmarks, PMT learns representations that probe well at the global, mid\-range, and local scales\-\-\-strong low\-label classification \(1\-\-5\\% labels\), competitive forecasting performance across multiple horizons, and quantitative and qualitative evidence that memory states capture mid\-range motifs\.

## Universal Time Series Generation with Neural Controlled Differential Equations

**Authors:** Torben Berndt; Elyes Farjallah; Leif Seute; RAEID SAQUR; Benjamin Walker; Jan Stühmer

**ID:** 150341\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150341

[Paper](<https://openreview.net/forum?id=iqICKB71X4>) | [PDF](<https://openreview.net/pdf?id=iqICKB71X4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150341>)

Recent work on the sequence universality of State Space Models \(SSMs\) has introduced efficient, maximally expressive continuous\-time approaches for time\-series modelling\. While these works focus on discriminative settings, we extend this perspective to generative time\-series modelling by proving    that maximally expressive Structured Linear Controlled Differential Equations \(SLiCEs\) are universal time\-series generators, in the sense that they can approximate the induced path laws of continuous causal pushforwards on compact latent sets in $W\_\\infty$\. Building on these theoretical results, we propose Generative SLiCEs \(G\-SLiCEs\), a maximally expressive continuous\-time model for flow matching on path\-space\. Empirically, we show that expressivity improves performance in probabilistic forecasting and downstream tasks, while retaining the advantages of continuous\-time models such as generalising to arbitrary observation grids\. This is particularly beneficial for irregular grids, where fixed\-grid models often struggle\.

## Flow\+Diff: Unifying Flow and Diffusion Representations for Multivariate Time Series Anomaly Detection

**Authors:** Van Kwan Zhi Koh; Songnan Lin; Zhiping Lin; Bihan Wen

**ID:** 152468\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152468

[Paper](<https://openreview.net/forum?id=SsSjmffHDW>) | [PDF](<https://openreview.net/pdf?id=SsSjmffHDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152468>)

Many existing multivariate time series anomaly detection methods formulate anomaly detection as a reconstruction problem, where detections are derived from reconstruction errors in the time domain\. While effective for large deviations, reconstruction\-based scoring struggles with subtle anomalies where only a small subset of features deviates slightly\. In such cases, most features are well reconstructed, causing the overall reconstruction error to remain low and indistinguishable from normal data\. To address these challenges, we propose Flow\+Diff, a novel framework that detects anomalies via discrepancies in a latent space, where two complementary representations, induced by distinct modeling paradigms, diverge under anomalous inputs\. One representation is obtained via a normalizing flow, which provides an invertible mapping that preserves temporal dependencies and captures inter\-feature dependencies\. The other is produced by a diffusion model that learns the distribution of normal samples in the latent space via a stochastic denoising process\. When given anomalous inputs, the normalizing flow maps the inputs to latent representations that lie in low\-probability regions of the learned latent distribution, while the diffusion model generates representations aligned with normal data distributions, resulting in a pronounced discrepancy between the two\. We compute the anomaly score based on this latent\-space discrepancy, thereby shifting anomaly detection from the time domain to the latent space\. Finally, the invertibility of the normalizing flow enables reconstruction in the time domain, facilitating interpretation of anomalous features\. Extensive experiments across six benchmark datasets show that Flow\+Diff achieves state\-of\-the\-art performance on four datasets against competitive baselines\.

## Metropolis\-Scale Road Network Datasets for Fine\-Grained Urban Traffic Modeling

**Authors:** Fedor Velikonivtsev; Oleg Platonov; Ekaterina Alimaskina; Gleb Bazhenov; Liudmila Prokhorenkova

**ID:** 139581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H85G0Hev13>) | [PDF](<https://openreview.net/pdf?id=H85G0Hev13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139581>)

Modeling traffic dynamics is a critical challenge for urban computing, with applications from real\-time traffic management to infrastructure planning\. However, progress in this area is fundamentally constrained by a lack of large\-scale public datasets that capture the subtle properties of real city road networks\. Existing benchmarks are often limited by their small scale, reliance on sparse highway traffic sensors, absence of true road connectivity information, and lack of information about road properties\. To address this issue, we introduce datasets representing fine\-grained road networks of two major cities, which are unique in their scale \(up to 100,000 road segments\), use of real road connectivity, presence of time series measurements for both traffic speed and volume at a 5\-minute resolution, and inclusion of rich static road attributes\. These datasets enable in\-depth analysis of spatiotemporal traffic patterns and can serve as benchmarks for various ML applications\. As a practical demonstration of the utility of our datasets and the challenges they present, we use them for the task of traffic forecasting\. The size of the real\-world road networks in our datasets reveals significant scalability issues in current traffic forecasting models\. To address them, we propose a simple and efficient baseline that not only scales to large road graphs but also achieves forecasting performance competitive with other established spatiotemporal models\. We hope that the proposed datasets will serve as a foundational resource for a broad range of research in traffic modeling, urban computing, and smart city development\.

## High\-dimensional Gaussian Graphical Model Testing for Long\-Memory Time Series

**Authors:** Percy S\. Zhai; Ping\-Shou Zhong; Wei Biao Wu

**ID:** 151184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKrvJWrlKV>) | [PDF](<https://openreview.net/pdf?id=cKrvJWrlKV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151184>)

Many real\-world high\-dimensional time series exhibit long\-memory, but Gaussian graphical model testing in this regime remains understudied\. We develop a direct, data\-adaptive test statistic for assessing conditional independence in the graph structure of stationary Gaussian time series\. We establish a finite\-sample, Berry\-\-Esseen type Gaussian approximation bound for the statistic, which applies to both short\-memory and long\-memory time series\. The testing procedure is fully data\-adaptive using block bootstrap method, on which we provide a finite\-sample validity result including in the ultra\-high\-dimensional scenario, and can be extended to comparing graphical structures in two\-sample tests\. We also develop a consistency\-empowered correction to the statistic and show that such tests attain asymptotic consistency in both size and power\. Our proposed method is applied to a real\-world fMRI data to understand functional connectivities within brain in different periods\.

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

## Volatility\-Whitened Probabilistic Residual Modeling for Long\-Term Time Series Forecasting

**Authors:** Fan Zhang; Shiming Fan; Zexuan Ma; Shijun Chen; Meijia Wang; Hua Wang

**ID:** 155322 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6UKbpYP6hi>) | [PDF](<https://openreview.net/pdf?id=6UKbpYP6hi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155322>)

_Abstract unavailable from the accessible public sources._

## FISC: Time\-Series Forecasting via First\-Layer Statistical Calibration Constraints

**Authors:** Hua Wang; Xiyuan Zhang; Fan Zhang

**ID:** 149568 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pAAOZakP4Y>) | [PDF](<https://openreview.net/pdf?id=pAAOZakP4Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149568>)

_Abstract unavailable from the accessible public sources._

## TailFix: Mitigating Error Accumulation and Correcting Tail Deterioration in Long\-Horizon Forecasting

**Authors:** Hua Wang; Haijing Gao; Fan Zhang

**ID:** 154800 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=As8bch5HUh>) | [PDF](<https://openreview.net/pdf?id=As8bch5HUh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154800>)

_Abstract unavailable from the accessible public sources._

## DSR\-TSF: Spectrum\-Driven Dynamic Routing for Efficient Long\-Horizon Time Series Forecasting

**Authors:** Hua Wang; Bing Li; Fan Zhang

**ID:** 152845 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PwJVOO6ibd>) | [PDF](<https://openreview.net/pdf?id=PwJVOO6ibd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152845>)

_Abstract unavailable from the accessible public sources._

## Neural Fourier Transform for Multiple Time Series Prediction

**Authors:** Noam Koren; Daniel Freedman; Kira Radinsky

**ID:** 156764 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0GBjIwRuVp&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DTMLR%2FAuthors%23your-submissions)>) | [PDF](<https://openreview.net/pdf?id=0GBjIwRuVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156764>)

_Abstract unavailable from the accessible public sources._

## VACE: Learning Geometrically Structured Representations for Time Series Anomaly Detection

**Authors:** Alberto D Cencillo; Leonardo Concepción; Isaac Triguero; Julián Luengo

**ID:** 149386 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qQU99P2wBC>) | [PDF](<https://openreview.net/pdf?id=qQU99P2wBC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149386>)

_Abstract unavailable from the accessible public sources._

## GlucoFM: A Dual\-Stream Foundation Model for Continuous Glucose Monitoring

**Authors:** Zechen Li; Keerthana Natarajan; Weizhi Zhang; Simon Lee; Yuwei Zhang; Max Xu; Menglian Zhou; Zeinab Esmaeilpour; Flora Salim; Mark Malhotra; Lindsey Sunden; Shwetak Patel; Yuzhe Yang; Ahmed Metwally

**ID:** 152461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SxWZ7KJ3KP>) | [PDF](<https://openreview.net/pdf?id=SxWZ7KJ3KP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152461>)

Continuous glucose monitoring \(CGM\) provides a dense window into metabolic physiology, yet existing generic time\-series and CGM\-specific foundation models typically learn from entangled glucose sequences without explicitly capturing the temporal structure of glycemic dynamics\. We present GlucoFM, a lightweight CGM foundation model that aligns irregular recordings to a 24\-hour chronological grid, preserves observation masks, and decomposes glucose dynamics into slow physiological state and transient event streams, capturing low\-frequency glycemic baselines and short\-term deviations that may reflect acute physiological responses or sensor artifacts\. GlucoFM is pretrained on 109,066 hours of unlabeled CGM recordings from 477 subjects with two complementary objectives: masked contextual latent prediction over fused daily representations and temporal dynamics prediction over state and event streams\. Across four diverse cohorts and seven clinical prediction tasks, GlucoFM achieves the strongest frozen linear\-probing performance among evaluated baselines, improving average PR\-AUC by 4\.1 points over the best CGM\-specific foundation model\. Its gains are most pronounced on core metabolic outcomes, leading PR\-AUC on all diabetes\-risk and $\\beta$\-cell dysfunction tasks and on 3 of 4 insulin\-resistance tasks\. GlucoFM also achieves the best overall cross\-dataset transfer performance among evaluated methods and strong few\-shot adaptation, highlighting physiology\-aware decomposition as an effective inductive bias for transferable CGM representation learning\.

## Stable Alpha: Adversarial Invariant Representation Learning for Nonlinear Asset Pricing  under Temporal Distribution Shifts

**Authors:** Xiaokang Wang; Zihe Liu; Xinghan Qin; Zihao Yin; Jidong Yuan; Qinxuan Zhang; Xiushuo Hu

**ID:** 153143 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NZHuWIlAUx>) | [PDF](<https://openreview.net/pdf?id=NZHuWIlAUx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153143>)

Deep learning has emerged as a powerful paradigm for constructing nonlinear asset pricing factor models\. However, temporal distribution shifts such as bull\-bear transitions and industry rotations undermine the generalization of models trained under the i\.i\.d\. assumption\. As a result, existing models tend to exploit environment\-specific correlations that are highly predictive in\-sample but unstable across market regimes\. To address this challenge, we propose $\\textit\{\\textbf\{CASH\}\}$, a causality\-inspired asset pricing factor framework designed to learn invariant and minimally sufficient representations under temporal distribution shifts\. CASH formulates an information\-theoretic adversarial learning objective that systematically discards transient market noise by optimizing against an adversary designed to exploit spurious correlations, thereby distilling invariant factor\-return relationships\. The resulting invariant representation is then integrated into a conditional factor pricing model via a dynamic factor exposure network\. Experiments on real\-world stock datasets across multiple markets demonstrate that CASH consistently outperforms state\-of\-the\-art baselines in out\-of\-sample return prediction and exhibits superior robustness under pronounced temporal regime shifts\.

## Learning the Context of Errors: Black\-Box Online Adaptation of Time Series Foundation Models

**Authors:** Xilin Dai; Yiding Liu; Hongjie Xia; Yifan Hu; Zewei Dong; Jiang\-Ming Yang; Qiang Xu

**ID:** 150616 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gofrLViPFH>) | [PDF](<https://openreview.net/pdf?id=gofrLViPFH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150616>)

The rapid evolution of Time Series Foundation Models \(TSFMs\) has advanced zero\-shot forecasting across diverse domains\. Inspired by the current form of Large Language Models, future TSFMs may be offered as commercialized, closed\-source API services\. However, many existing online adaptation methods still rely on white\-box access for parameter fine\-tuning or gradient backpropagation\. This paradigm mismatch raises a question: \*In black\-box online adaptation for TSFMs, what should we learn?\* We answer this with an insight: the predictive errors of the base model are conditioned on both the input and output of the base model \(i\.e\., the context of errors\)\. To validate this insight, we propose \*\*ORCA\*\* \(Online Residual Contextual Adaptation\)\. We conduct extensive experiments across 5 state\-of\-the\-art TSFMs and 8 datasets to demonstrate the effectiveness of our approach\. Furthermore, through ablation studies, we quantitatively analyze the impact of different adapter learning hypotheses on the final adaptation performance in black\-box online adaptation\. Code available at https://anonymous\.4open\.science/r/ORCA1/\.

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

## Time\-Frequency Decoupled Cross\-Scale Partial Optimal Transport for Time Series Domain Adaptation

**Authors:** Shubin Liu; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 155904\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155904

[Paper](<https://openreview.net/forum?id=1xu08VeESv>) | [PDF](<https://openreview.net/pdf?id=1xu08VeESv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155904>)

Unsupervised domain adaptation has become an important paradigm for mitigating distribution shift in time series classification\. However, existing time series domain adaptation methods typically align source and target data at a fixed time scale and simply fuse time\-frequency features before uniform alignment\. Furthermore, they do not consider the impact of noisy samples on distribution alignment\. To address these limitations, we propose CSPAN \(Time\-Frequency Decoupled \\textbf\{C\}ross\-\\textbf\{S\}cale \\textbf\{P\}artial Optimal Transport \\textbf\{A\}lignment \\textbf\{N\}etwork\) for time series domain adaptation\. CSPAN first constructs segment\-scale time\-frequency candidates, and then uses Segment\-Scale Aware Top\-k Fusion to select the most suitable segment\-scale feature representation\. It then performs cross\-domain alignment after decoupling time and frequency through Temporal Partial Optimal Transport and Frequency Partial Optimal Transport, where temporal domain alignment is guided by the transferability estimated from a probing transport plan, and frequency domain alignment is guided by the discriminability estimated by an auxiliary frequency classifier\. By combining segment\-scale representation selection, time\-frequency decoupling, and partial distribution alignment, CSPAN enables more flexible cross\-domain matching\.  Extensive experiments on six datasets demonstrate CSPAN’s consistent superiority, achieving an average accuracy improvement of 3\.16\\% in cross\-domain scenarios\. Code is available at the anonymous link: \\url\{https://anonymous\.4open\.science/r/CSPAN\-35FB/\}\.

## PAMod: Modeling Cyclical Shifts via Phase\-Amplitude Modulation for Non\-stationary Time Series Forecasting

**Authors:** Yingbo Zhou; Yutong Ye; Shuhao Li; Rui Qian; Qiang Huang; Lemao Liu; Li Sun; Dejing Dou

**ID:** 155815\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155815

[Paper](<https://openreview.net/forum?id=2h1BtfsPus>) | [PDF](<https://openreview.net/pdf?id=2h1BtfsPus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155815>)

Real\-world time series forecasting faces the fundamental challenge of non\-stationary statistical properties, including shifts in mean and variance over time\.  While reversible instance normalization \(RevIN\) has shown promise by stationarizing inputs and denormalizing outputs, it relies on the strong assumption that historical and future distributions remain identical\.  We observe that in many practical applications, distribution shifts follow cyclical patterns that correlate with periodic positions \(e\.g\., seasonal and holiday volatility\)\.  To this end, we propose $\\textbf\{PAMod\}$, a lightweight yet powerful framework that models cyclical distribution shifts via $\\textbf\{P\}$hase\-$\\textbf\{A\}$mplitude $\\textbf\{Mod\}$ulation in the normalized feature space\.  PAMod learns periodic embeddings to modulate representations: phase modulation captures mean shifts, while amplitude modulation adapts to variance changes\.  Crucially, we prove mathematically that modulating in normalized space is equivalent to applying dynamic denormalization, offering an elegant unification of distribution adaptation and representation learning\.  Extensive experiments on twelve real\-world benchmarks demonstrate that PAMod achieves state\-of\-the\-art performance with fewer computational resources\. Furthermore, our modulation mechanism, as a novel plug\-and\-play technique, can improve existing time\-series forecasting methods with simple integration\.

## Problem\-Dependent Dynamic Regret over a Predictor Class with One\-Gradient Feedback

**Authors:** Wentao Zhang

**ID:** 148180\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148180

[Paper](<https://openreview.net/forum?id=zhLmhEjDZ0>) | [PDF](<https://openreview.net/pdf?id=zhLmhEjDZ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148180>)

Many online learning systems now have access to several gradient predictors at once, such as simulators, replay buffers, neural surrogates, or time\-series forecasters, and the quality of these predictors varies from round to round\. We study online convex optimization under one\-gradient feedback against an arbitrary moving comparator, with a user\-supplied finite class $\\Pi$ of gradient\-field predictors, and ask whether a single algorithm can compete with the best predictor in $\\Pi$ at a logarithmic cost, fall back to a small\-loss bound when none of the predictors is useful, and still retain a path\-length\-adaptive worst\-case guarantee when the predictors are adversarial\. We give a positive answer through PH\-Sword \(Predictable\-Hybrid Sword\.optimism\), which combines an exp\-concave Hedge over $\\Pi$, optimistic projected\-gradient base learners on a geometric learning\-rate grid, and a correction\-term optimistic\-entropy meta learner with prediction\-error doubling\. For any comparator sequence $\\boldsymbol u$, PH\-Sword attains dynamic regret $\\widetilde O\\bigl\(R\\\_0\\sqrt\{\(1\+P\\\_T/D\)\(1\+P\\\_T/D\+\\min\\\{\\mathcal E\\\_\\\*/G^2,\\,2LF\\\_T\(\\boldsymbol u\)/G^2\\\}\+\\log\|\\Pi\|\)\}\\bigr\)$ up to logarithmic factors, where $R\\\_0=DG\+LD^2$, $P\\\_T$ is the path length, $F\\\_T\(\\boldsymbol u\)$ the cumulative comparator loss, and $\\mathcal E\\\_\\\*$ the best\-in\-class field error\. The bound merges the field\-controlled, small\-loss, and worst\-case regimes into one deterministic guarantee that improves over prior one\-gradient dynamic\-regret algorithms\. On six controlled benchmarks the five predicted scaling laws hold simultaneously: PH\-Sword reaches 17% of OGD's final dynamic regret and 54% of Ader's on a slow\-drift benchmark, and we observe that a single noisy predictor without model selection can actually do worse than using no predictor at all\.

## QWaveNet: Quantum\-Enhanced Wavelet Network for Time Series Forecasting

**Authors:** Fan Zhang; Shijun Chen; Meijia Wang; Shiming Fan; Zexuan Ma; Hua Wang

**ID:** 152829\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152829

[Paper](<https://openreview.net/forum?id=Q75FP4Lcsi>) | [PDF](<https://openreview.net/pdf?id=Q75FP4Lcsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152829>)

Series decomposition aims to separate long\-term trajectories and periodic patterns in time series, thereby improving the specificity and interpretability of forecasting models\. However, mainstream approaches usually equate this functional separation with an operational split between a smoothed baseline and fluctuating residuals\. One line of methods approximates the trend via low\-pass smoothing, which assumes long\-term trajectories to be purely smooth and may misassign nonlinear evolution, stage\-wise transitions, and structural fluctuations to the residual\. The other relies on heuristic nonlinear decompositions to capture complex dynamics, but is sensitive to noise and hyperparameters, leading to unstable and mixed component boundaries\. To address this issue, we propose a forecasting framework, QWaveNet\. It employs a quantum convolutional neural network to learn Dynamic Evolution, a long\-term structural representation beyond low\-pass smoothing priors, which preserves nonlinear evolution, stage\-wise transitions, and structural fluctuations more coherently, while its complementary Evolutionary Residual captures localized variations and periodic dynamics\. Guided by these complementary components, QWaveNet further performs adaptive multi\-scale decomposition and reconstruction to support forecasting\. Experiments on multiple benchmark datasets demonstrate the effectiveness of QWaveNet\.

## TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning

**Authors:** Shunyu Wu; Dan Li; Haozheng Ye; Weibin Feng; Jian Lou; Bo Zhang; Wenjie Feng; Chenjuan Guo; See\-Kiong Ng

**ID:** 150288 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jI3LzITbpM>) | [PDF](<https://openreview.net/pdf?id=jI3LzITbpM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150288>)

Assessing the quality of time series \(TS\) data is fundamental yet inherently challenging due to the multifaceted nature of quality dimensions\. Recently, large language models \(LLMs\) have emerged as a promising paradigm for TS quality assessment via pairwise comparison and per\-dimension evaluation\. However, existing approaches rely on manually predefined quality dimensions and purely text\-based reasoning, leaving it unknown whether LLMs can identify truly relevant quality dimensions or perform grounded and quantitative quality comparisons\. To investigate this, we construct TSQBench, a dedicated benchmark for evaluating LLMs’ capabilities in TS quality assessment, which measures two progressive capabilities: \(i\) understanding and identifying relevant quality dimensions, and \(ii\) performing quality comparison under specific dimensions\. Our analysis reveals that both open\-source and proprietary LLMs consistently struggle with identifying critical quality dimensions and conducting precise, evidence\-grounded reasoning over quality characteristics\. To address these limitations, we propose TSQAgent, a novel agentic reasoning framework for dedicated TS data quality rating, comprising three collaborative roles: Perceiver for focused dimension selection, Inspector for dimension\-wise quantitative analysis, and Adjudicator that aggregates and refines the final judgment\. In particular, we introduce an agentic reasoning strategy that instills the ability to identify and prioritize the most relevant quality dimensions, and further propose an agent workflow equipped with external analytical tools to enable precise quantitative comparisons over selected dimensions\. Experiments on both the proposed benchmark and eleven real\-world datasets demonstrate that our framework not only substantially improves LLMs’ capabilities in quality understanding and quantitative comparison but also effectively translates these improvements into better quality\-aware data selection, leading to enhanced downstream performance and data efficiency\.

## Neural Optimal Transport in Hilbert Spaces

**Authors:** Jae\-Hwan Choi; Jiwoo Yoon; Dohyun Kwon; Jaewoong Choi

**ID:** 150584\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150584

[Paper](<https://openreview.net/forum?id=h673LAeDNM>) | [PDF](<https://openreview.net/pdf?id=h673LAeDNM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150584>)

Functional data such as time series, trajectories, and fields are increasingly central in machine learning and are naturally modeled in infinite\-dimensional Hilbert spaces\. We study Semi\-dual Neural Optimal Transport \(SNOT\) for learning transport maps between probability measures on separable Hilbert spaces\. A critical challenge in this setting is the spurious solution problem: a neural map can globally optimize the SNOT objective while failing to recover an optimal transport map\. We show that this failure arises from non\-regular source measures, which make the inner minimization in the semi\-dual objective non\-identifiable\. We prove that regular source measures, defined via Gaussian null sets, restore inner\-minimizer uniqueness and recover the Monge map\. For singular sources, we introduce Gaussian smoothing and establish a necessary and sufficient kernel condition for smoothing to restore regularity\. We further prove plan\-level consistency: as smoothing vanishes, every Wasserstein accumulation point of the induced optimal plans solves the original Kantorovich problem\. Experiments on synthetic singular transports and real\-world unpaired time\-series imputation benchmarks validate the theory, achieving the best performance on several benchmarks and competitive performance on the remaining ones\.

## Signature\-Kernel Evaluation Metrics for Robust Probabilistic and Tail\-Event Forecasting

**Authors:** Benjamin R Redhead; Thomas L Lee; Peng Gu; Víctor Elvira; Amos Storkey

**ID:** 139252\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139252

[Paper](<https://openreview.net/forum?id=c4U3xzPCvL>) | [PDF](<https://openreview.net/pdf?id=c4U3xzPCvL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139252>)

Standard sample\-based metrics like Continuous Ranked Probability Score \(CRPS\) and Quantile Loss \(QL\) are frequently used in the evaluation of probabilistic time\-series forecasting\. However, these metrics fail to capture multivariate correlations or assess the ability to capture distribution tails\. These global metrics are insensitive to errors on high\-utility events in distributional tails due to over\-representation of the distribution's body\. To accurately measure distributional fidelity on tail\-regions and regions of high utility while still having a proper scoring rule, we introduce a family of censored signature kernel metrics\. Our proposed metrics concentrate evaluation of forecasts to a focus region, representing high\-utility or distributional tails, by collapsing the body of the distribution to a single pivot\. Our benchmarks on time\-series foundation models \(TSFMs\) reveal that while a clear ranking can be formed for distribution capture, there is no clear winner for tasks like systemic load prediction\. This indicates that models with a strong ability to capture an overall distribution do not produce forecasts with high downstream utility\. To encourage the use of the proposed metrics we open\-source the efficient signature kernel \(ESK\) library\. This library facilitates batch computation, with custom triton kernels, achieving a speed\-up of up to 3\.58$\\times$ compared to implementations via the popular SigKernel library\. Code for our metrics are available on GitHub\.

## TraXion: Rethinking Pre\-training Frameworks for Mobility and Beyond

**Authors:** Shang\-Ling Hsu; Mark Tenzer; Cyrus Shahabi; Khurram Shafique

**ID:** 152716\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152716

[Paper](<https://openreview.net/forum?id=QtFyIbY3oe>) | [PDF](<https://openreview.net/pdf?id=QtFyIbY3oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152716>)

Human mobility differs from text and from generic time series in three structural ways: visits are tuple\-valued events whose meaning depends on the joint distribution over location, time, and activity; users carry persistent signatures across trajectories; and visits are not independent across users, since co\-location at shared places is a primary signal\. Existing pre\-training recipes for mobility import objectives from language modeling, treating trajectories as sentences and visits as tokens, an analogy that fails against each of the three properties above\. These properties define a broader class, multi\-entity spatiotemporal event streams \(MESES\), spanning enterprise authentication logs, electronic health records, and other event\-stream domains where entities share infrastructure, schedules, or contexts\. We make the properties precise as three axioms that any pre\-training framework for MESES should satisfy, and introduce TraXion, whose objectives and architecture are jointly designed to meet them\. A single TraXion checkpoint per dataset beats task\-specific baselines on every task across six public mobility datasets covering anomaly detection, next\-POI recommendation, next\-visit prediction, and social\-link prediction\. The same recipe, applied unchanged to enterprise authentication logs and ICU mortality prediction, matches or exceeds prior work on both, showing that event streams from domains as different as mobility, security, and healthcare can be modeled under a single framework\.

## From Heartbeat to Cardiochoreography: A Mechanics Foundation Model for Individualized 4D Cardiac Motion Generation Conditioned on Electrophysiology

**Authors:** Ziquan Wei; Tingting Dan; Guorong Wu

**ID:** 151117 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=crTTYgpAhR>) | [PDF](<https://openreview.net/pdf?id=crTTYgpAhR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151117>)

_Abstract unavailable from the accessible public sources._

## Differencing the Diffusion Trajectory toward Uncertain Components for Time Series Forecasting

**Authors:** Chen Su; Yuanhe Tian; Yan Song

**ID:** 154330\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154330

[Paper](<https://openreview.net/forum?id=EQ3rr1gzcl>) | [PDF](<https://openreview.net/pdf?id=EQ3rr1gzcl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154330>)

_Abstract unavailable from the accessible public sources._

## Time\-Frequency Decoupled Cross\-Scale Partial Optimal Transport for Time Series Domain Adaptation

**Authors:** Shubin Liu; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 155904\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155904

[Paper](<https://openreview.net/forum?id=1xu08VeESv>) | [PDF](<https://openreview.net/pdf?id=1xu08VeESv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155904>)

Unsupervised domain adaptation has become an important paradigm for mitigating distribution shift in time series classification\. However, existing time series domain adaptation methods typically align source and target data at a fixed time scale and simply fuse time\-frequency features before uniform alignment\. Furthermore, they do not consider the impact of noisy samples on distribution alignment\. To address these limitations, we propose CSPAN \(Time\-Frequency Decoupled \\textbf\{C\}ross\-\\textbf\{S\}cale \\textbf\{P\}artial Optimal Transport \\textbf\{A\}lignment \\textbf\{N\}etwork\) for time series domain adaptation\. CSPAN first constructs segment\-scale time\-frequency candidates, and then uses Segment\-Scale Aware Top\-k Fusion to select the most suitable segment\-scale feature representation\. It then performs cross\-domain alignment after decoupling time and frequency through Temporal Partial Optimal Transport and Frequency Partial Optimal Transport, where temporal domain alignment is guided by the transferability estimated from a probing transport plan, and frequency domain alignment is guided by the discriminability estimated by an auxiliary frequency classifier\. By combining segment\-scale representation selection, time\-frequency decoupling, and partial distribution alignment, CSPAN enables more flexible cross\-domain matching\.  Extensive experiments on six datasets demonstrate CSPAN’s consistent superiority, achieving an average accuracy improvement of 3\.16\\% in cross\-domain scenarios\. Code is available at the anonymous link: \\url\{https://anonymous\.4open\.science/r/CSPAN\-35FB/\}\.

## dStructAD: Domain\-Level Structured Normality Representation with Variation Calibration for Time Series Anomaly Detection

**Authors:** Shiwang Xing; Jianwei Niu; Tao Ren

**ID:** 150983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dn47AFeAiu>) | [PDF](<https://openreview.net/pdf?id=dn47AFeAiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150983>)

Time Series Anomaly Detection \(TSAD\) is critical for ensuring reliability in real\-world systems such as industrial monitoring, healthcare, and online services\. However, learning\-based TSAD methods trained on a single normal\-only TargetSet, namely the target dataset, often suffer from incomplete and biased knowledge of normality, causing domain\-level false alarms when unseen but valid normal patterns appear at test time\. A natural extension is to leverage DomainSet, composed of datasets from one domain, to enrich domain\-level normality\. Yet, our analysis shows that simply incorporating DomainSet could make domain\-admissible normal variations and TargetSet\-specific anomalies highly entangled in the learned representations, weakening anomaly separability\. Motivated by human experts who establish normal patterns, calibrate admissible variations, and identify true anomalies, we propose dStructAD, a domain\-level structured representation framework for time series anomaly detection, to address this challenge\. Specifically, dStructAD first builds structured domain\-level normality based on the Kolmogorov\-Arnold network, and then calibrates admissible variations via two phases\. Phase 1 learns shared domain\-level semi\-structural normality knowledge from DomainSet, while Phase 2 performs structure\-preserving TargetSet calibration to absorb admissible variations without collapsing anomaly separability\. Across six benchmarks, dStructAD delivers consistent improvements over SOTAs, with 3% average gain in overall performance\. Code could be available at \[https://anonymous\.4open\.science/r/dStructAD\-8F03\]\(https://anonymous\.4open\.science/r/dStructAD\-8F03\)\.

## TimeTok: Granularity\-Controllable Time\-Series Generation via Hierarchical Tokenization

**Authors:** Seokhyun Lee; Jaeho Kim; Changjun Oh; Mihaela van der Schaar; Changhee Lee

**ID:** 152955 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P8dX5r550k>) | [PDF](<https://openreview.net/pdf?id=P8dX5r550k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152955>)

_Abstract unavailable from the accessible public sources._

## Paloma: Phase\-Conditioned Residual Modulation for Time Series Forecasting

**Authors:** Jingru Fei; Kun Yi; Wei Fan; Qi Zhang; Zhendong Niu

**ID:** 154087 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJqifj1exB>) | [PDF](<https://openreview.net/pdf?id=GJqifj1exB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154087>)

_Abstract unavailable from the accessible public sources._

## PrismFlow: Residual Dynamics for Flow Matching in Time\-Series Generation

**Authors:** JUNRU ZHANG; Lang Feng; Jinbo Wang; Xu Guo; Yucheng Wang; Han Yu; Min Wu; Yabo Dong; Duanqing Xu

**ID:** 152192 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UrxwEBaiit>) | [PDF](<https://openreview.net/pdf?id=UrxwEBaiit>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152192>)

_Abstract unavailable from the accessible public sources._

## CAST: Causal Anchored Simplex Transport for Distribution\-Valued Time Series

**Authors:** Jiecheng Lu; Jieqi Di; Runhua Wu; Yuwei Zhou

**ID:** 155150 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7wHSu87prc>) | [PDF](<https://openreview.net/pdf?id=7wHSu87prc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155150>)

_Abstract unavailable from the accessible public sources._

## ToLD: Efficient Time Series Forecasting via Tokenized Truncated Latent Diffusion

**Authors:** Jiayi Tian; Jiaze Wang; Wenzhe zhao; Tian Xia; Pengju Ren

**ID:** 156116 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Gm2nx7nXH>) | [PDF](<https://openreview.net/pdf?id=0Gm2nx7nXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156116>)

_Abstract unavailable from the accessible public sources._

## DynaPFN: Zero\-Shot Dynamical System Forecasting with Tabular Prior\-Fitted Networks

**Authors:** Chiara Roverato; Joseph Cotnareanu; Pablo Piantanida; Boris Oreshkin; Mark Coates

**ID:** 149937 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m581slK2rD>) | [PDF](<https://openreview.net/pdf?id=m581slK2rD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149937>)

Long\-horizon forecasting of dynamical time series remains a fundamental challenge in machine learning, as accurate predictions require learning the underlying dynamics\. While recent time\-series foundation models leveraging in\-context learning \(ICL\) have shown promise, we show that they fail to genuinely capture the governing dynamics\. By rewriting the context of a time series as a collection of lagged input\-output pairs, we frame dynamical time\-series forecasting as a posterior inference problem over the space of structural causal models \(SCMs\), arguing that the underlying dynamic structure is a natural inductive bias\. We propose DynaPFN, which uses pretrained tabular Prior\-Fitted Networks \(PFNs\) to approximate this posterior through ICL, augmented with a library of dynamical features that permit simpler representations of complex systems\. Even though the pretrained models have never seen time series data, DynaPFN outperforms existing zero\-shot forecasting baselines on established benchmarks of chaotic time series and real\-world datasets, demonstrating that incorporating structural priors over system dynamics is a valid approach for robust long\-horizon forecasting\.

## SLiDE: Structured Linear Dynamics for Forecasting with Exogenous Inputs

**Authors:** Sebastian Pütz; Theodore Glavas; Benjamin Schäfer; Boris Oreshkin; Mark Coates

**ID:** 155791 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2rJCMiMakf>) | [PDF](<https://openreview.net/pdf?id=2rJCMiMakf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155791>)

Accurate time series forecasting with exogenous inputs is critical across domains, including energy and retail, yet modern deep learning models often overfit to correlations that do not generalize under shifts in these inputs\.    We propose SLiDE, a Koopman\-inspired architecture for forecasting with exogenous inputs that imposes structure on latent temporal dynamics\.    SLiDE approximates nonlinear system evolution using a learned linear operator in a latent space, combining \(i\) a history encoder that reconstructs the current latent state from past targets and inputs with \(ii\) a shared linear rollout driven by future exogenous variables\. By enforcing a common linear recurrence across encoding and prediction, SLiDE aligns how past information is encoded with how future states evolve, reducing parameterization and preventing reliance on spurious correlations in the input history\.    Empirically, SLiDE achieves state\-of\-the\-art accuracy on real\-world benchmarks, including electricity price forecasting and retail demand, while maintaining a computational footprint comparable to lightweight MLP architectures\. SLiDE is especially effective at generalizing to shifted exogenous inputs, reducing MSE by 20% on electricity price samples with out\-of\-range exogenous values and MAE by 30% in a synthetic transfer setting where the same dynamical system is driven by an unseen exogenous process\. Ablations confirm the importance of both the structured history encoder and the linear latent rollout, suggesting that structured latent linear dynamics provide a useful inductive bias for forecasting with exogenous inputs\.

## GAPS: Gradient\-Aware Adaptation\-Gap Scoring for Time\-Series Anomaly Detection with Foundation Models

**Authors:** Jongwon Kim; Byunghun Song; Young Myoung Ko

**ID:** 150837 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ewNIO4p75i>) | [PDF](<https://openreview.net/pdf?id=ewNIO4p75i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150837>)

_Abstract unavailable from the accessible public sources._

## TStruct: Learning Shared Temporal Structures for Long\-Term Time\-Series Forecasting

**Authors:** Yangze Li; Zhengyang Zhou; Qihe Huang; Pengkun Wang; Binwu Wang; Yang Wang

**ID:** 149443 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q3fXT85cph>) | [PDF](<https://openreview.net/pdf?id=q3fXT85cph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149443>)

_Abstract unavailable from the accessible public sources._

## TimeClaw: A Time\-Series AI Agent with Exploratory Execution Learning

**Authors:** Hangchen Liu; Dongyuan Li; Renhe Jiang; Jiewen Deng; Weiwei Ye; Yoshihide Sekimoto

**ID:** 153295 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MK0e2fxdTl>) | [PDF](<https://openreview.net/pdf?id=MK0e2fxdTl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153295>)

_Abstract unavailable from the accessible public sources._

## DiffPTS: Rethinking Diffusion ELBO for Probabilistic Time Series Forecasting

**Authors:** Weiwei Ye; Dongyuan Li; Hangchen Liu; Haotong Jiang; Yoshihide Sekimoto; Renhe Jiang

**ID:** 148542 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x7OutBc7Vk>) | [PDF](<https://openreview.net/pdf?id=x7OutBc7Vk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148542>)

_Abstract unavailable from the accessible public sources._

## TimeES: Probabilistic and Deterministic Time Series Forecasting via Evolutionary Spectra

**Authors:** Weiwei Ye; Renhe Jiang; Hangchen Liu; Dongyuan Li; Yoshihide Sekimoto

**ID:** 154967 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ZitslGbaZ>) | [PDF](<https://openreview.net/pdf?id=9ZitslGbaZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154967>)

_Abstract unavailable from the accessible public sources._

## Blind\-Window Forecasting: Real\-Time Benchmarking and Multimodal Reconstruction for Tropical Cyclones

**Authors:** Zhaoran Feng; Xuanhong Chen; Zengbing Chen; Shengjun Wu; Bin He; Kairui Feng

**ID:** 150222 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jrRFzggOc0>) | [PDF](<https://openreview.net/pdf?id=jrRFzggOc0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150222>)

_Abstract unavailable from the accessible public sources._

## Seahorse: A Unified Benchmarking Framework for Spatiotemporal Event Modeling

**Authors:** Yahya Aalaila; Sebastian Vollmer; Gerrit Großmann

**ID:** 139192 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fR5jdQLFiq>) | [PDF](<https://openreview.net/pdf?id=fR5jdQLFiq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139192>)

Spatiotemporal point processes \(STPPs\) model event data in continuous time and space, with applications in mobility, epidemiology, and public safety\. Recent neural STPPs span expressive intensities, density models, continuous\-time latent dynamics, normalizing\-flow spatial decoders, and score\-based generative mechanisms\. Yet comparison remains fragile because implementations differ in preprocessing, coordinate normalization, splits, likelihood conventions, and evaluation protocols\. We present \\textsc\{Seahorse\}, a unified framework for reproducible STPP experimentation\. \\textsc\{Seahorse\} provides an encode\-\-evolve\-\-decode interface and an executable benchmarking contract that standardizes dataset handling, configuration resolution, training, tuning, checkpointing, raw\-coordinate likelihood reporting, and run artifacts across heterogeneous STPP families\. It supports classical baselines, neural likelihood models, continuous\-time Neural STPP variants, and sample\-based generative models under one external protocol\. Using HawkesNest as a controlled synthetic stress\-test suite, we show how diagnostic benchmarking can probe neural STPP behavior under increasing spatiotemporal entanglement and other structural changes\. Together, \\textsc\{Seahorse\} and these controlled evaluations provide reusable infrastructure for comparing, diagnosing, and extending STPP models beyond implementation\-specific leaderboards\.

## WILD: Widely Linear Conditioning for Time Series Forecasting

**Authors:** Binli Luo; Wanrong Ma; Ning Gui; Xianhan Tan

**ID:** 148890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uQqn3Dq2Xm>) | [PDF](<https://openreview.net/pdf?id=uQqn3Dq2Xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148890>)

Transformer\-based time series forecasting models often suffer from block\-wise attention collapse, where temporal smoothness and cross\-variable correlations concentrate attention locally and restrict global modeling capacity\. We argue that this collapse is partly a pre\-attention representation\-conditioning problem: attention logits inherit the spectral concentration and low effective rank of the input representation\. We propose Widely Linear Frequency\-Domain \(WILD\) conditioning, a lightweight, model\-agnostic module inserted before self\-attention\. WILD maps inputs to the frequency domain, applies data\-dependent spectral preconditioning to redistribute over\-dominant frequency energy, and then uses asymmetric real/imaginary projections to realize a widely linear transform beyond fixed time\-domain channel mixing\. The preconditioning step is essential: it constructs the usable normalized frequency basis on which the widely linear branch can operate\. Thus, WILD uses frequency\-domain modeling to condition an existing attention layer, not to replace it with a new forecasting architecture\. Extensive experiments on eight benchmark datasets show positive gains on 105 of 112 model\-dataset\-metric configurations across seven backbones\. Attention diagnostics show that WILD substantially increases effective rank over the baseline, and a W\_r=W\_i ablation identifies spectral preconditioning as the primary mechanism, with widely linear mixing providing a secondary, dataset\-dependent gain\.

## Time\-Frequency Decoupled Cross\-Scale Partial Optimal Transport for Time Series Domain Adaptation

**Authors:** Shubin Liu; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 155904\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155904

[Paper](<https://openreview.net/forum?id=1xu08VeESv>) | [PDF](<https://openreview.net/pdf?id=1xu08VeESv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155904>)

Unsupervised domain adaptation has become an important paradigm for mitigating distribution shift in time series classification\. However, existing time series domain adaptation methods typically align source and target data at a fixed time scale and simply fuse time\-frequency features before uniform alignment\. Furthermore, they do not consider the impact of noisy samples on distribution alignment\. To address these limitations, we propose CSPAN \(Time\-Frequency Decoupled \\textbf\{C\}ross\-\\textbf\{S\}cale \\textbf\{P\}artial Optimal Transport \\textbf\{A\}lignment \\textbf\{N\}etwork\) for time series domain adaptation\. CSPAN first constructs segment\-scale time\-frequency candidates, and then uses Segment\-Scale Aware Top\-k Fusion to select the most suitable segment\-scale feature representation\. It then performs cross\-domain alignment after decoupling time and frequency through Temporal Partial Optimal Transport and Frequency Partial Optimal Transport, where temporal domain alignment is guided by the transferability estimated from a probing transport plan, and frequency domain alignment is guided by the discriminability estimated by an auxiliary frequency classifier\. By combining segment\-scale representation selection, time\-frequency decoupling, and partial distribution alignment, CSPAN enables more flexible cross\-domain matching\.  Extensive experiments on six datasets demonstrate CSPAN’s consistent superiority, achieving an average accuracy improvement of 3\.16\\% in cross\-domain scenarios\. Code is available at the anonymous link: \\url\{https://anonymous\.4open\.science/r/CSPAN\-35FB/\}\.

## PAMod: Modeling Cyclical Shifts via Phase\-Amplitude Modulation for Non\-stationary Time Series Forecasting

**Authors:** Yingbo Zhou; Yutong Ye; Shuhao Li; Rui Qian; Qiang Huang; Lemao Liu; Li Sun; Dejing Dou

**ID:** 155815\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155815

[Paper](<https://openreview.net/forum?id=2h1BtfsPus>) | [PDF](<https://openreview.net/pdf?id=2h1BtfsPus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155815>)

Real\-world time series forecasting faces the fundamental challenge of non\-stationary statistical properties, including shifts in mean and variance over time\.  While reversible instance normalization \(RevIN\) has shown promise by stationarizing inputs and denormalizing outputs, it relies on the strong assumption that historical and future distributions remain identical\.  We observe that in many practical applications, distribution shifts follow cyclical patterns that correlate with periodic positions \(e\.g\., seasonal and holiday volatility\)\.  To this end, we propose $\\textbf\{PAMod\}$, a lightweight yet powerful framework that models cyclical distribution shifts via $\\textbf\{P\}$hase\-$\\textbf\{A\}$mplitude $\\textbf\{Mod\}$ulation in the normalized feature space\.  PAMod learns periodic embeddings to modulate representations: phase modulation captures mean shifts, while amplitude modulation adapts to variance changes\.  Crucially, we prove mathematically that modulating in normalized space is equivalent to applying dynamic denormalization, offering an elegant unification of distribution adaptation and representation learning\.  Extensive experiments on twelve real\-world benchmarks demonstrate that PAMod achieves state\-of\-the\-art performance with fewer computational resources\. Furthermore, our modulation mechanism, as a novel plug\-and\-play technique, can improve existing time\-series forecasting methods with simple integration\.

## Problem\-Dependent Dynamic Regret over a Predictor Class with One\-Gradient Feedback

**Authors:** Wentao Zhang

**ID:** 148180\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148180

[Paper](<https://openreview.net/forum?id=zhLmhEjDZ0>) | [PDF](<https://openreview.net/pdf?id=zhLmhEjDZ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148180>)

Many online learning systems now have access to several gradient predictors at once, such as simulators, replay buffers, neural surrogates, or time\-series forecasters, and the quality of these predictors varies from round to round\. We study online convex optimization under one\-gradient feedback against an arbitrary moving comparator, with a user\-supplied finite class $\\Pi$ of gradient\-field predictors, and ask whether a single algorithm can compete with the best predictor in $\\Pi$ at a logarithmic cost, fall back to a small\-loss bound when none of the predictors is useful, and still retain a path\-length\-adaptive worst\-case guarantee when the predictors are adversarial\. We give a positive answer through PH\-Sword \(Predictable\-Hybrid Sword\.optimism\), which combines an exp\-concave Hedge over $\\Pi$, optimistic projected\-gradient base learners on a geometric learning\-rate grid, and a correction\-term optimistic\-entropy meta learner with prediction\-error doubling\. For any comparator sequence $\\boldsymbol u$, PH\-Sword attains dynamic regret $\\widetilde O\\bigl\(R\\\_0\\sqrt\{\(1\+P\\\_T/D\)\(1\+P\\\_T/D\+\\min\\\{\\mathcal E\\\_\\\*/G^2,\\,2LF\\\_T\(\\boldsymbol u\)/G^2\\\}\+\\log\|\\Pi\|\)\}\\bigr\)$ up to logarithmic factors, where $R\\\_0=DG\+LD^2$, $P\\\_T$ is the path length, $F\\\_T\(\\boldsymbol u\)$ the cumulative comparator loss, and $\\mathcal E\\\_\\\*$ the best\-in\-class field error\. The bound merges the field\-controlled, small\-loss, and worst\-case regimes into one deterministic guarantee that improves over prior one\-gradient dynamic\-regret algorithms\. On six controlled benchmarks the five predicted scaling laws hold simultaneously: PH\-Sword reaches 17% of OGD's final dynamic regret and 54% of Ader's on a slow\-drift benchmark, and we observe that a single noisy predictor without model selection can actually do worse than using no predictor at all\.

## QWaveNet: Quantum\-Enhanced Wavelet Network for Time Series Forecasting

**Authors:** Fan Zhang; Shijun Chen; Meijia Wang; Shiming Fan; Zexuan Ma; Hua Wang

**ID:** 152829\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152829

[Paper](<https://openreview.net/forum?id=Q75FP4Lcsi>) | [PDF](<https://openreview.net/pdf?id=Q75FP4Lcsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152829>)

Series decomposition aims to separate long\-term trajectories and periodic patterns in time series, thereby improving the specificity and interpretability of forecasting models\. However, mainstream approaches usually equate this functional separation with an operational split between a smoothed baseline and fluctuating residuals\. One line of methods approximates the trend via low\-pass smoothing, which assumes long\-term trajectories to be purely smooth and may misassign nonlinear evolution, stage\-wise transitions, and structural fluctuations to the residual\. The other relies on heuristic nonlinear decompositions to capture complex dynamics, but is sensitive to noise and hyperparameters, leading to unstable and mixed component boundaries\. To address this issue, we propose a forecasting framework, QWaveNet\. It employs a quantum convolutional neural network to learn Dynamic Evolution, a long\-term structural representation beyond low\-pass smoothing priors, which preserves nonlinear evolution, stage\-wise transitions, and structural fluctuations more coherently, while its complementary Evolutionary Residual captures localized variations and periodic dynamics\. Guided by these complementary components, QWaveNet further performs adaptive multi\-scale decomposition and reconstruction to support forecasting\. Experiments on multiple benchmark datasets demonstrate the effectiveness of QWaveNet\.

## TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning

**Authors:** Shunyu Wu; Dan Li; Haozheng Ye; Weibin Feng; Jian Lou; Bo Zhang; Wenjie Feng; Chenjuan Guo; See\-Kiong Ng

**ID:** 150288\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150288

[Paper](<https://openreview.net/forum?id=jI3LzITbpM>) | [PDF](<https://openreview.net/pdf?id=jI3LzITbpM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150288>)

Assessing the quality of time series \(TS\) data is fundamental yet inherently challenging due to the multifaceted nature of quality dimensions\. Recently, large language models \(LLMs\) have emerged as a promising paradigm for TS quality assessment via pairwise comparison and per\-dimension evaluation\. However, existing approaches rely on manually predefined quality dimensions and purely text\-based reasoning, leaving it unknown whether LLMs can identify truly relevant quality dimensions or perform grounded and quantitative quality comparisons\. To investigate this, we construct TSQBench, a dedicated benchmark for evaluating LLMs’ capabilities in TS quality assessment, which measures two progressive capabilities: \(i\) understanding and identifying relevant quality dimensions, and \(ii\) performing quality comparison under specific dimensions\. Our analysis reveals that both open\-source and proprietary LLMs consistently struggle with identifying critical quality dimensions and conducting precise, evidence\-grounded reasoning over quality characteristics\. To address these limitations, we propose TSQAgent, a novel agentic reasoning framework for dedicated TS data quality rating, comprising three collaborative roles: Perceiver for focused dimension selection, Inspector for dimension\-wise quantitative analysis, and Adjudicator that aggregates and refines the final judgment\. In particular, we introduce an agentic reasoning strategy that instills the ability to identify and prioritize the most relevant quality dimensions, and further propose an agent workflow equipped with external analytical tools to enable precise quantitative comparisons over selected dimensions\. Experiments on both the proposed benchmark and eleven real\-world datasets demonstrate that our framework not only substantially improves LLMs’ capabilities in quality understanding and quantitative comparison but also effectively translates these improvements into better quality\-aware data selection, leading to enhanced downstream performance and data efficiency\.

## Progressive Memory Transformer: Memory\-Aware Attention for Time\-Series

**Authors:** Tord Sture Stangeland; Andreas Köhler; Steffen Maeland; Adín Ramírez Rivera

**ID:** 150202\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150202

[Paper](<https://openreview.net/forum?id=jyIfuVt2UU>) | [PDF](<https://openreview.net/pdf?id=jyIfuVt2UU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150202>)

Time\-series carry structure simultaneously at multiple scales \(fine\-grained variation, mid\-range motifs, and global properties\) and downstream tasks operate at correspondingly different scales\. Most existing self\-supervised learning approaches supervise representations globally via instance\-level contrastive losses and limited temporal neighborhood supervision, but do not explicitly exploit the structural hierarchy\. We propose a learning framework that explicitly enforces a structural hierarchy across three scales independently: a local objective for token continuity, a mid\-range objective for window\-level motifs, and a global objective for sequence\-level agreement\. Realizing this framework requires the backbone to expose a representation at each scale; we introduce \\textbf\{Progressive Memory Transformer\} \(PMT\), which augments a transformer with writable, window\-aligned memory that exposes the mid\-range scale alongside the token and sequence\-level representations conventional transformers already provide\. Across seven UCR/UEA/UCI classification benchmarks, a cue\-retention probe, and two forecasting benchmarks, PMT learns representations that probe well at the global, mid\-range, and local scales\-\-\-strong low\-label classification \(1\-\-5\\% labels\), competitive forecasting performance across multiple horizons, and quantitative and qualitative evidence that memory states capture mid\-range motifs\.

## Universal Time Series Generation with Neural Controlled Differential Equations

**Authors:** Torben Berndt; Elyes Farjallah; Leif Seute; RAEID SAQUR; Benjamin Walker; Jan Stühmer

**ID:** 150341\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150341

[Paper](<https://openreview.net/forum?id=iqICKB71X4>) | [PDF](<https://openreview.net/pdf?id=iqICKB71X4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150341>)

Recent work on the sequence universality of State Space Models \(SSMs\) has introduced efficient, maximally expressive continuous\-time approaches for time\-series modelling\. While these works focus on discriminative settings, we extend this perspective to generative time\-series modelling by proving    that maximally expressive Structured Linear Controlled Differential Equations \(SLiCEs\) are universal time\-series generators, in the sense that they can approximate the induced path laws of continuous causal pushforwards on compact latent sets in $W\_\\infty$\. Building on these theoretical results, we propose Generative SLiCEs \(G\-SLiCEs\), a maximally expressive continuous\-time model for flow matching on path\-space\. Empirically, we show that expressivity improves performance in probabilistic forecasting and downstream tasks, while retaining the advantages of continuous\-time models such as generalising to arbitrary observation grids\. This is particularly beneficial for irregular grids, where fixed\-grid models often struggle\.

## Flow\+Diff: Unifying Flow and Diffusion Representations for Multivariate Time Series Anomaly Detection

**Authors:** Van Kwan Zhi Koh; Songnan Lin; Zhiping Lin; Bihan Wen

**ID:** 152468\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152468

[Paper](<https://openreview.net/forum?id=SsSjmffHDW>) | [PDF](<https://openreview.net/pdf?id=SsSjmffHDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152468>)

Many existing multivariate time series anomaly detection methods formulate anomaly detection as a reconstruction problem, where detections are derived from reconstruction errors in the time domain\. While effective for large deviations, reconstruction\-based scoring struggles with subtle anomalies where only a small subset of features deviates slightly\. In such cases, most features are well reconstructed, causing the overall reconstruction error to remain low and indistinguishable from normal data\. To address these challenges, we propose Flow\+Diff, a novel framework that detects anomalies via discrepancies in a latent space, where two complementary representations, induced by distinct modeling paradigms, diverge under anomalous inputs\. One representation is obtained via a normalizing flow, which provides an invertible mapping that preserves temporal dependencies and captures inter\-feature dependencies\. The other is produced by a diffusion model that learns the distribution of normal samples in the latent space via a stochastic denoising process\. When given anomalous inputs, the normalizing flow maps the inputs to latent representations that lie in low\-probability regions of the learned latent distribution, while the diffusion model generates representations aligned with normal data distributions, resulting in a pronounced discrepancy between the two\. We compute the anomaly score based on this latent\-space discrepancy, thereby shifting anomaly detection from the time domain to the latent space\. Finally, the invertibility of the normalizing flow enables reconstruction in the time domain, facilitating interpretation of anomalous features\. Extensive experiments across six benchmark datasets show that Flow\+Diff achieves state\-of\-the\-art performance on four datasets against competitive baselines\.

## Signature\-Kernel Evaluation Metrics for Robust Probabilistic and Tail\-Event Forecasting

**Authors:** Benjamin R Redhead; Thomas L Lee; Peng Gu; Víctor Elvira; Amos Storkey

**ID:** 139252\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139252

[Paper](<https://openreview.net/forum?id=c4U3xzPCvL>) | [PDF](<https://openreview.net/pdf?id=c4U3xzPCvL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139252>)

Standard sample\-based metrics like Continuous Ranked Probability Score \(CRPS\) and Quantile Loss \(QL\) are frequently used in the evaluation of probabilistic time\-series forecasting\. However, these metrics fail to capture multivariate correlations or assess the ability to capture distribution tails\. These global metrics are insensitive to errors on high\-utility events in distributional tails due to over\-representation of the distribution's body\. To accurately measure distributional fidelity on tail\-regions and regions of high utility while still having a proper scoring rule, we introduce a family of censored signature kernel metrics\. Our proposed metrics concentrate evaluation of forecasts to a focus region, representing high\-utility or distributional tails, by collapsing the body of the distribution to a single pivot\. Our benchmarks on time\-series foundation models \(TSFMs\) reveal that while a clear ranking can be formed for distribution capture, there is no clear winner for tasks like systemic load prediction\. This indicates that models with a strong ability to capture an overall distribution do not produce forecasts with high downstream utility\. To encourage the use of the proposed metrics we open\-source the efficient signature kernel \(ESK\) library\. This library facilitates batch computation, with custom triton kernels, achieving a speed\-up of up to 3\.58$\\times$ compared to implementations via the popular SigKernel library\. Code for our metrics are available on GitHub\.

## TraXion: Rethinking Pre\-training Frameworks for Mobility and Beyond

**Authors:** Shang\-Ling Hsu; Mark Tenzer; Cyrus Shahabi; Khurram Shafique

**ID:** 152716\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152716

[Paper](<https://openreview.net/forum?id=QtFyIbY3oe>) | [PDF](<https://openreview.net/pdf?id=QtFyIbY3oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152716>)

Human mobility differs from text and from generic time series in three structural ways: visits are tuple\-valued events whose meaning depends on the joint distribution over location, time, and activity; users carry persistent signatures across trajectories; and visits are not independent across users, since co\-location at shared places is a primary signal\. Existing pre\-training recipes for mobility import objectives from language modeling, treating trajectories as sentences and visits as tokens, an analogy that fails against each of the three properties above\. These properties define a broader class, multi\-entity spatiotemporal event streams \(MESES\), spanning enterprise authentication logs, electronic health records, and other event\-stream domains where entities share infrastructure, schedules, or contexts\. We make the properties precise as three axioms that any pre\-training framework for MESES should satisfy, and introduce TraXion, whose objectives and architecture are jointly designed to meet them\. A single TraXion checkpoint per dataset beats task\-specific baselines on every task across six public mobility datasets covering anomaly detection, next\-POI recommendation, next\-visit prediction, and social\-link prediction\. The same recipe, applied unchanged to enterprise authentication logs and ICU mortality prediction, matches or exceeds prior work on both, showing that event streams from domains as different as mobility, security, and healthcare can be modeled under a single framework\.

## Empowering Time Series Analysis with Large\-Scale Multimodal Pretraining

**Authors:** Peng Chen; Siyuan Wang; hu; Xingjian Wu; Yang Shu; Zhongwen Rao; Meng Wang; Yijie Li; Bin Yang; Chenjuan Guo

**ID:** 152727 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QoM8XcqNiY>) | [PDF](<https://openreview.net/pdf?id=QoM8XcqNiY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152727>)

_Abstract unavailable from the accessible public sources._

## From Heartbeat to Cardiochoreography: A Mechanics Foundation Model for Individualized 4D Cardiac Motion Generation Conditioned on Electrophysiology

**Authors:** Ziquan Wei; Tingting Dan; Guorong Wu

**ID:** 151117\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151117

[Paper](<https://openreview.net/forum?id=crTTYgpAhR>) | [PDF](<https://openreview.net/pdf?id=crTTYgpAhR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151117>)

_Abstract unavailable from the accessible public sources._

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

## Geometric Inductive Biases for Semi\-Supervised Equalization: The Constellation\-Aware Transformer

**Authors:** Avi Caciularu

**ID:** 155196\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155196

[Paper](<https://openreview.net/forum?id=7ZUdIwD0Pz>) | [PDF](<https://openreview.net/pdf?id=7ZUdIwD0Pz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155196>)

_Abstract unavailable from the accessible public sources._

## Discretizing Continuous Time Series for Imputation with Masked Diffusion Training

**Authors:** Dongbin Kim; Seungyun Lee; Geonwoo Shin; Jaewook Lee

**ID:** 149547\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149547

[Paper](<https://openreview.net/forum?id=pKTszDf7fn>) | [PDF](<https://openreview.net/pdf?id=pKTszDf7fn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149547>)

_Abstract unavailable from the accessible public sources._

## Energy\-Based Operator Learning in Function Space

**Authors:** Hong Chul Nam; Jeonghwan Cheon; Jae Mo Shin; Hyun Kwon

**ID:** 153867\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153867

[Paper](<https://openreview.net/forum?id=I9qAqBoxNx>) | [PDF](<https://openreview.net/pdf?id=I9qAqBoxNx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153867>)

We propose Energy\-Based Operators \(EBOs\), an architecture\-agnostic framework for learning conditional distributions over functions on continuous domains\. An EBO defines a scalar energy over target functions given an input function and induces a probability model through a Gaussian reference\. The resulting score field is obtained as the gradient of the parametrized energy to perform function\-space iterative energy minimization \(EM\)\.  Our model shows strong performance in function generation, such as super\-resolution and forecasting, over various 1D function classes \(oscillations, damping, and Izhikevich\) in comparison with prediction operators and denoising operators over various architecture backbones\. Moreover, it achieves strong performance over PDEs, namely Navier\-Stokes, Darcy flow and Burgers\. Notably, our model successfully detects anomalous functions by automatically assigning high energy without any supervision\.  It enables seizure detection and volatility prediction after learning neural dynamics and market microstructure dynamics without pre\-defined labels during training, highlighting its effectiveness for both learning dynamical systems and detecting functional anomalies arising in scientific simulations\.

## Composable Causality: A Toolkit for Systematic Time\-Series Causal Discovery and Treatment\-Effect Benchmarking

**Authors:** Muhammad Hasan Ferdous; Md Osman Gani

**ID:** 139605\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139605

[Paper](<https://openreview.net/forum?id=FtoixLI4AT>) | [PDF](<https://openreview.net/pdf?id=FtoixLI4AT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139605>)

Real\-world multivariate time series datasets rarely come with verified ground\-truth causal structure, since the underlying mechanisms are typically unknown and randomized intervention is infeasible in most domains\. Empirical research on time\-series causal discovery and treatment\-effect estimation therefore depends on synthetic data, where the data\-generating process is specified by construction\. Existing data generation tools fall into two categories\. Some are fixed datasets that provide pre\-generated time series, which cannot be modified after release\. Others are script\-based generators, where each script fixes one combination of mechanism, confounding, and missingness, so any new combination requires writing new code\. Neither supports the controlled experiments that method development demands, where a single property such as sparsity, noise distribution, or missingness mechanism is varied while others are held fixed\. A further gap concerns counterfactual data\. Prior work in time\-varying treatment\-effect estimation has relied on per\-paper simulators with hardcoded mechanisms, while general\-purpose time\-series generators produce observational data only, leaving evaluation of conditional average treatment effect estimators reliant on conditional expectations rather than ground\-truth individual effects\. We introduce DTCD \(Datasets and Toolkit for Causal Discovery\), a data generation library that produces multivariate time series together with their ground\-truth contemporaneous and lagged adjacency matrices\. Topology, mechanism, noise, observational mask, and intervention policy are independent components that compose freely, enabling single\-axis sensitivity studies through configuration alone\. Paired counterfactual twins are produced by caching the stochastic realization during the factual rollout and re\-injecting it during the interventional rollout, recovering individual treatment effects to numerical precision\. To demonstrate the library, we present a reference benchmark of eight discovery algorithms across eighty\-one discovery configurations and four treatment\-effect estimators across eighteen CATE configurations, exposing failure modes not visible in aggregate metrics, including the inability of standard discovery methods to handle missing values regardless of whether the missingness mechanism is informative\.

## On the Invariance and Generality of Neural Scaling Laws

**Authors:** Xing Han; Liu Ziyin; Suchi Saria; Paul Liang

**ID:** 152053\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152053

[Paper](<https://openreview.net/forum?id=VqUBACubep>) | [PDF](<https://openreview.net/pdf?id=VqUBACubep>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152053>)

Neural scaling laws establish a predictable relationship between model performance and data or compute, offering crucial guidance for resource allocation in new domains and tasks\. Yet such laws are most needed precisely where they are hardest to obtain: fitting one for a new model–task pair demands expensive sweeps that typically exhaust the very compute budget the law is meant to economize\. This paper poses the research question of how to develop generalizable scaling laws: laws fit once on a well\-resourced source domain and reliably transported to new domains where running a full sweep is infeasible, which requires a fundamental understanding of when and why scaling properties change\. We address this by identifying the right invariants: scaling laws are preserved under bijective \(information\-preserving\) transformations of the data and modified in predictable, information\-theoretically grounded ways under non\-bijective transformations that lower its information resolution $\\rho$: a single axis along which a law fit in one domain can be transported to another\. We validate this across language, vision, and speech, and demonstrate two cross\-domain applications: predicting scaling for language models trained on electronic health records from laws fit on general text, and predicting time\-series classification scaling under varying levels of noise injection, recovering the data\-scaling exponents to within 3\-percent error\.

## E4GEN: Event\-level Explainable Extreme\-Enhanced Time\-series Generation

**Authors:** Lin Jiang; Dahai Yu; Ximiao Li; Guang Wang

**ID:** 153750\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153750

[Paper](<https://openreview.net/forum?id=Iz17kYYauN>) | [PDF](<https://openreview.net/pdf?id=Iz17kYYauN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153750>)

Generating realistic time series is essential for scientific research and real\-world applications\. However, existing methods often emphasize overall distributional fidelity while failing to faithfully capture extreme events\. To address this limitation, we propose E4GEN, an explainable diffusion framework for extreme event\-aware time\-series generation\. E4GEN provides systematic insights into when, what, and how to control extreme\-event generation through three key components\. First, E\-Activator learns a dataset\-adaptive extreme\-control signal activation step during the denoising process, enabling control without interfering with regular temporal components such as trend and seasonality\. Second, E\-Predictor determines what control signal to enforce through Self\-Driven Semantic Prediction, where each sample derives its own control signal by inferring latent extreme\-event information during generation\. It also introduces a Data\-Conditioned Training, Noise\-Initiated Sampling mechanism to address the issue of unavailable training labels\. Third, E\-Control specifies how to guide extreme\-event generation through a trainable Extreme Control Network, which transforms semantic control signals into layer\-wise guidance signals and injects them into the denoising process\. We evaluate E4GEN on six datasets using 17 metrics, and extensive experiments show that E4GEN outperforms state\-of\-the\-art models across multiple dimensions, including overall fidelity, extreme\-event fidelity, and downstream utility\.

## CoLaX: Context\-Aware Local Explanations for Time Series Classification

**Authors:** Kexuan Zhang; Paolo Frazzetto; Xiaobei Zou; Gustau Camps\-Valls; Yang Tang

**ID:** 155599 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Mn24WBKDZ>) | [PDF](<https://openreview.net/pdf?id=4Mn24WBKDZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155599>)

Reliable deployment of time series classifiers in high\-stakes domains requires explanations that capture the interplay between localized patterns and global temporal context\. However, existing post\-hoc methods often treat local features in isolation, failing to account for long\-range dependencies\. We propose CoLaX, a context\-aware explanation framework that explicitly embeds local dynamics within a global temporal structure\. By employing a principled context\-conditioning mechanism, CoLaX models how global context modulates the importance of local patterns, revealing not only what is important but also when and why it matters\. Extensive benchmarks demonstrate that CoLaX yields significantly more faithful and stable explanations than state\-of\-the\-art baselines, demonstrating that joint local\-global modeling is essential for reliable time\-series interpretability\.

## Visual Anchoring for Scenario\-Guided Forecasting

**Authors:** Patara Trirat; Jay Heo; Heejun Lee; Sung Ju Hwang

**ID:** 151190 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cINiv4G0rX>) | [PDF](<https://openreview.net/pdf?id=cINiv4G0rX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151190>)

A multimodal large language model \(MLLM\) forecaster takes a forward\-looking scenario as a soft constraint that decays with horizon\. The decay is expected, but its rate is uncharacterized and untunable at inference time\. A practitioner running a twelve\-month stress test cannot tell whether the scenario binds for twelve months or twelve days\. Existing accounts of autoregressive error, such as exposure bias and hallucination snowballing, bound a single rollout against ground truth and offer no inference\-time lever\. Under three assumptions, we prove a closed\-form Lipschitz upper envelope on the per\-step scenario drift between two paired\-seed forecasts differing only in scenario text\. Two identifiable parameters partition behavior into bounded, linear, and exponential regimes\. A sister within\-chunk bound holds under any chunk partition\. It motivates a stabilization heuristic that we test and falsify: periodic re\-injection of the scenario enlarges drift relative to a single injection, and length\-matched random text shrinks it\. The envelope is respected; the heuristic is not\. A pre\-registered attention diagnostic across the open\-weight panel returns architecturally heterogeneous verdicts that the recurrence framing covers uniformly while no single attention\-dilution mechanism does\. In place of text re\-injection, we propose \*\*\*Visan\*\*\* \(\*\*\*Vis\*\*\*ual \*\*\*An\*\*\*choring\), a chart\-anchored multimodal prompt that renders the lookback, the scenario, and the historical context as a single image\. Across a panel of MLLMs and two long\-horizon scenario\-conditioned forecasting benchmarks, \*Visan\* reduces forecast error on the majority of MLLMs\.

## TimeTok: Granularity\-Controllable Time\-Series Generation via Hierarchical Tokenization

**Authors:** Seokhyun Lee; Jaeho Kim; Changjun Oh; Mihaela van der Schaar; Changhee Lee

**ID:** 152955\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152955

[Paper](<https://openreview.net/forum?id=P8dX5r550k>) | [PDF](<https://openreview.net/pdf?id=P8dX5r550k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152955>)

_Abstract unavailable from the accessible public sources._

## Paloma: Phase\-Conditioned Residual Modulation for Time Series Forecasting

**Authors:** Jingru Fei; Kun Yi; Wei Fan; Qi Zhang; Zhendong Niu

**ID:** 154087\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154087

[Paper](<https://openreview.net/forum?id=GJqifj1exB>) | [PDF](<https://openreview.net/pdf?id=GJqifj1exB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154087>)

_Abstract unavailable from the accessible public sources._

## PrismFlow: Residual Dynamics for Flow Matching in Time\-Series Generation

**Authors:** JUNRU ZHANG; Lang Feng; Jinbo Wang; Xu Guo; Yucheng Wang; Han Yu; Min Wu; Yabo Dong; Duanqing Xu

**ID:** 152192\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152192

[Paper](<https://openreview.net/forum?id=UrxwEBaiit>) | [PDF](<https://openreview.net/pdf?id=UrxwEBaiit>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152192>)

_Abstract unavailable from the accessible public sources._

## CAST: Causal Anchored Simplex Transport for Distribution\-Valued Time Series

**Authors:** Jiecheng Lu; Jieqi Di; Runhua Wu; Yuwei Zhou

**ID:** 155150\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155150

[Paper](<https://openreview.net/forum?id=7wHSu87prc>) | [PDF](<https://openreview.net/pdf?id=7wHSu87prc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155150>)

_Abstract unavailable from the accessible public sources._

## ToLD: Efficient Time Series Forecasting via Tokenized Truncated Latent Diffusion

**Authors:** Jiayi Tian; Jiaze Wang; Wenzhe zhao; Tian Xia; Pengju Ren

**ID:** 156116\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156116

[Paper](<https://openreview.net/forum?id=0Gm2nx7nXH>) | [PDF](<https://openreview.net/pdf?id=0Gm2nx7nXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156116>)

_Abstract unavailable from the accessible public sources._

## AdaST: Adaptive Coupling for Spatial\-Temporal Forecasting

**Authors:** Zhenyu Lei; Chenghao Liu; Yushun Dong; Ryan Qi Wang; Jundong Li

**ID:** 155866\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155866

[Paper](<https://openreview.net/forum?id=2IWnVy1qoe>) | [PDF](<https://openreview.net/pdf?id=2IWnVy1qoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155866>)

Spatial\-temporal \(ST\) forecasting underpins many real\-world systems such as traffic, climate, and energy networks\. While existing methods implicitly assume strong spatiotemporal coupling, we observe that real\-world ST data exhibits distinct coupling regimes, ranging from temporal\-dominated and spatial\-dominated to strongly coupled patterns\. This mismatch causes current models to suffer from spurious dependencies and degraded performance when one correlation dominates\. To overcome this limitation, we aim to dynamically modulate spatial and temporal modeling based on the data's inherent coupling structure\. However, three key challenges exist: unknown coupling structure, heterogeneous coupling dynamics, and suboptimal spatial modeling\. We propose AdaST, an adaptive ST forecasting framework that tackles these challenges through a decompose\-recompose paradigm\. AdaST factorizes inputs into components capturing different coupling patterns using heterogeneity\-aware experts\. Each component is processed by role\-aligned modules, and a correlation\-informed adaptive recomposer integrates them for final prediction\. Extensive experiments confirm that AdaST significantly outperforms state\-of\-the\-art baselines, validating the necessity of an adaptive approach\.

## Generating Financial Time Series by Matching Random Convolutional Features

**Authors:** Konrad Mueller; Nikita Zozoulenko; Ben Wood; Thomas Cass; Lukas Gonon

**ID:** 149033\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149033

[Paper](<https://openreview.net/forum?id=tLVW1Y9hBz>) | [PDF](<https://openreview.net/pdf?id=tLVW1Y9hBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149033>)

Generating realistic financial time series is challenging as training data is often limited to a single historical path\. With such scarce data, overfitting is hard to avoid, especially under adversarial training where a trained discriminator can memorize the training samples\. To mitigate this, recent approaches train generators to minimize the discrepancy between untrained feature representations of real and generated time series\. In these works, the feature maps are based on path signatures, which can fail to capture relevant time series properties at tractable truncation depths\. In this work, we instead train generators by matching random convolutional features of real and generated time series\. Existing random convolutional feature maps, such as Rocket and Hydra, have been shown to provide informative representations of real\-world time series, but cannot supervise generative models because they are non\-differentiable\. We introduce \*\*SOCK\*\* \(\*\*\*SO\*\*ft \*\*C\*\*ompeting \*\*K\*\*ernels\*\), a fully differentiable random convolutional feature map, suited to train generative time series models\. We show that generators trained by matching random SOCK features consistently outperform signature and diffusion baselines across a wide range of small\-sample financial datasets\. We further demonstrate SOCK's expressiveness on two\-sample hypothesis testing and time series classification tasks, where SOCK matches or outperforms existing unsupervised feature maps\.

## BucpTSF: Breaking the Uniform Computation Paradigm in Time\-Series Forecasting

**Authors:** Hua Wang; Jinghao Lu; Fan Zhang

**ID:** 148238\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148238

[Paper](<https://openreview.net/forum?id=zMcy2fY2hW>) | [PDF](<https://openreview.net/pdf?id=zMcy2fY2hW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148238>)

Real\-world time series typically exhibit non\-uniform information density across temporal positions, frequency structures, and forecasting horizons: critical dynamics are concentrated in local segments, different frequency components carry different structural information, and different horizons require different modeling complexity\. However, most existing methods still allocate computation approximately uniformly across these dimensions, leading to redundant computation in low\-information regions and insufficient modeling of key patterns\. To address this, we propose BucpTSF, an information\-density\-driven structured framework for time series forecasting\. Specifically, BucpTSF reorganizes raw sequences into hierarchically heterogeneous multi\-level token representations through information\-density\-aware temporal representation reorganization, captures key cross\-token dependencies with low overhead via frequency\-selective structured token interaction, and further introduces horizon\-conditioned structured extrapolation to adaptively balance dynamic modeling and structural extrapolation bias for different horizons, thereby improving the accuracy and stability of long\-term forecasting\. Extensive experiments on real\-world datasets show that BucpTSF consistently outperforms strong baselines under various forecasting settings, validating the effectiveness of information\-density\-driven non\-uniform computation allocation for time series forecasting\.

## ClinStab: Stability\-Oriented Learning for Medical Time Series via Dual\-Stream Alignment

**Authors:** Songning Lai; Haoxuan Xu; Yi Liu; Wenshuo Chen; Ninghui Feng; Jiayu Yang; Haoang Li; Yutao Yue

**ID:** 149545\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149545

[Paper](<https://openreview.net/forum?id=pLj36IwQSC>) | [PDF](<https://openreview.net/pdf?id=pLj36IwQSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149545>)

Deep models for medical time series can achieve strong benchmark accuracy yet remain brittle under acquisition artifacts, physiological variability, and low\-resource training conditions\. We present \\textbf\{ClinStab\}, a Medformer\-based framework for EEG and ECG classification that studies whether channel\-aware dual\-stream interaction and perturbation\-aware optimization can improve the clean/robustness tradeoff\. The proposed \\textbf\{S\}alience\-\\textbf\{C\}ontext \\textbf\{D\}ual \\textbf\{M\}odulation \(SCDM\) module uses energy as a routing prior: high\-energy channel\-aligned components receive attentive modeling, while residual components remain trainable through a lightweight context pathway\. ClinStab then combines clean supervision, perturbed supervision, prediction consistency, and teacher\-guided stabilization under adversarial perturbations\. Across four public datasets and 11 baselines, ClinStab improves accuracy over Medformer on all datasets and improves selected robustness metrics under the perturbation settings studied here, while exposing tradeoffs on PTB ranking metrics and soft\-routing alternatives\. These results support ClinStab as a practical same\-backbone stability intervention, not as evidence of universal clinical robustness\.

## TailDiff: Elicitable Tail\-Guided Diffusion for Risk\-Sensitive Generation

**Authors:** Shuning Zhao; Patrick Wong; Rongshang Li; Leran Zhang; Xiaolin Hu

**ID:** 151735 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YTXAbIxk6x>) | [PDF](<https://openreview.net/pdf?id=YTXAbIxk6x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151735>)

Generative models are increasingly used to simulate risk\-sensitive systems, from financial markets and energy demand to healthcare, where downstream decisions depend on rare but consequential events\. In this setting, matching average behavior is not enough: rare tail events drive stress testing, capital allocation, and policy analysis\. Yet tail objectives such as Value\-at\-Risk and Expected Shortfall are difficult to optimize directly because empirical estimators rely on sorting, thresholding, and subset selection\. We introduce TailDiff, a training\-free inference\-time guidance method for pretrained diffusion models that uses jointly elicitable Fissler\-Ziegel scoring rules to construct differentiable tail\-aware objectives\. We analyze the induced guidance field locally in the low\-noise regime, characterizing tail\-shaping and boundary\-coupling behavior together with controlled perturbations under small realized effective drift\. On synthetic data, TailDiff approaches the oracle finite\-sample floor, on a challenging financial tail\-risk simulation benchmark, it outperforms the state\-of\-the\-art on tail metrics while preserving bulk structure\.

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

## MOSAIC: Module Discovery via Sparse Additive Identifiable Causal Learning for Scientific Time Series

**Authors:** Shicheng Fan; Nour Elhendawy; Jianle Sun; Ke Fang; Kun Zhang; Yihang Wang; Lu Cheng

**ID:** 153679 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JbHELfIvUK>) | [PDF](<https://openreview.net/pdf?id=JbHELfIvUK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153679>)

Causal representation learning \(CRL\) seeks to recover latent variables with identifiability guarantees, typically up to permutation and component\-wise reparameterization under appropriate assumptions\. However, identifiability does not imply interpretability: latent semantics are typically assigned post hoc by alignment with known ground\-truth factors\. This limitation is particularly acute in scientific time series, where underlying mechanisms are unknown and discovering interpretable structure is a primary goal\. In contrast, scientific observations \(such as residue\-pair distances, climate indices, or process sensors\) are inherently semantic, as they correspond to named physical quantities\. This raises a key question: can the interpretability of observations be transferred to the identifiable latent space? We propose MOSAIC \(Module discovery via Sparse Additive Identifiable Causal learning\), a sparse temporal VAE that integrates temporal CRL identifiability with support recovery over observed variables\. MOSAIC identifies latent variables via regime\-conditioned temporal variation, and recovers for each latent a sparse set of associated observations through an additive decoder, yielding module\-level interpretability\. We show that ANOVA main\-effect supports are identifiable under general smooth mixing functions, and provide finite\-sample recovery guarantees for a tractable sparse\-additive variant\. Empirically, MOSAIC recovers domain\-consistent variable groups across RNA molecular dynamics, solar wind, ENSO climate, the Tennessee Eastman process, and a synthetic tokamak benchmark, enabling interpretable discovery of latent mechanisms in scientific time series\.

## MSAR: Next\-Scale Autoregressive Forecasting for Time Series via Modular Multi\-Scale Decoupling

**Authors:** Fanda Fan; Kuiye Ding; Liming Mao; Wang Bingsong; Yao Wang; Xiaorui Wang; Ruijie Jian; Zhipeng Liu; Luqi Gong; Zhenghua Lu; Chunjie Luo; Jianfeng Zhan

**ID:** 149231\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149231

[Paper](<https://openreview.net/forum?id=ryJy1ZX3II>) | [PDF](<https://openreview.net/pdf?id=ryJy1ZX3II>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149231>)

Time series forecasting underpins critical applications in finance, energy, healthcare, and transportation\. Although deep models have achieved strong results, most adopt single\-scale modeling or restrict multiscale processing to the input side, causing a misalignment between multiscale inputs and single\-scale outputs and limiting predictive power\. We introduce the Modular Scale\-wise Autoregressive Framework \(MSAR\), a model\-agnostic design that forecasts progressively across multiple temporal resolutions\. MSAR offers three advantages: \(1\) scale\-wise aligned modeling, which disentangles heterogeneous temporal patterns by aligning inputs and outputs at each scale; \(2\) scale\-wise autoregression, where coarse\-scale predictions guide finer\-scale forecasting through hierarchical information flow; and \(3\) a modular architecture, enabling seamless integration with diverse backbones such as CNNs, MLPs, and Transformers\. Extensive experiments across a broad set of datasets and forecasting models demonstrate that MSAR achieves consistent improvements in both accuracy and inference efficiency, validating the effectiveness of scale\-aligned autoregression for multiscale time series forecasting\.

## HyFAD: Hybrid Time\-Frequency Diffusion with Frequency\-Aware Embedding for Time Series Imputation

**Authors:** Hongfan Gao; Wangmeng Shen; Bin Yang; Jilin Hu

**ID:** 150001\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150001

[Paper](<https://openreview.net/forum?id=lWM3u6LGyO>) | [PDF](<https://openreview.net/pdf?id=lWM3u6LGyO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150001>)

Diffusion models have demonstrated strong performance in time series modeling due to their ability to progressively capture complex data distributions through iterative denoising\. However, existing approaches struggle with frequency\-sensitive denoising, high\-frequency reconstruction and balancing global trends with local dynamics\. To address these limitations, we propose \\textbf\{HyFAD\}, a \\textbf\{Hy\}brid time\-frequency \\textbf\{D\}iffusion model with \\textbf\{F\}requency\-\\textbf\{A\}ware embedding for time series imputation\. Built upon the DDPM paradigm, HyFAD adopts a coupled time\-frequency diffusion framework, in which the reverse denoising proceeds sequentially from the time domain to the frequency domain, enabling coarse\-to\-fine generation\. Specifically, the time\-domain diffusion process captures low\-frequency global trends, while the frequency\-domain diffusion process refines high\-frequency spectral components\. We further introduce a frequency\-aware step embedding that exploits the relationship between diffusion steps and spectral components, providing step\-dependent spectral guidance and facilitates more accurate band\-wise reconstruction\. Extensive experiments on multiple benchmark datasets demonstrate that HyFAD achieves state\-of\-the\-art performance\. Our source code is available at \\url\{https://anonymous\.4open\.science/r/HyFAD\-0C21/\}\.

## EO\-WM: A Physically Informed World Model for Probabilistic Earth Observation Forecasting

**Authors:** Junwei Luo; Shuai Yuan; Zhenya YANG; Yansheng Li; Zhe Liu; Hengshuang Zhao

**ID:** 153039\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153039

[Paper](<https://openreview.net/forum?id=OUSDMTfzLA>) | [PDF](<https://openreview.net/pdf?id=OUSDMTfzLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153039>)

_Abstract unavailable from the accessible public sources._

## MESSENGER: Memory\-Enhanced Sequential Scene Flow Estimation via Autoregressive Next\-Frame Forecasting

**Authors:** Jiuming Liu; Jianing Li; Mengmeng Liu; Hongyang He; Hesheng Wang; Per O Kristensson

**ID:** 151929\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151929

[Paper](<https://openreview.net/forum?id=Wo3mKBsHLA>) | [PDF](<https://openreview.net/pdf?id=Wo3mKBsHLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151929>)

_Abstract unavailable from the accessible public sources._

## A Minimal Interpretable Architecture for Zero\-Shot Reconstruction of Dynamical Systems

**Authors:** Christoph Jürgen Hemmer; Florian Plaswig; Daniel Durstewitz

**ID:** 153946\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153946

[Paper](<https://openreview.net/forum?id=HNtohc9Bxl>) | [PDF](<https://openreview.net/pdf?id=HNtohc9Bxl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153946>)

Recent foundation models \(FMs\) for zero\-shot reconstruction of dynamical systems \(DS\) achieve strong out\-of\-domain generalization but provide little insight into the \*mechanisms\* that underlie their forecasts\. Such an understanding could help to strip down overladen FM architectures to their bare essence and expose the minimal requirements for in\-context learning in the DS domain\. Toward this goal, here we iteratively reduce a recent powerful SOTA model for DS reconstruction, DynaMix \(Hemmer &amp; Durstewitz, 2025\), to a minimal interpretable two\-parameter form, which we call \*DynaBase\*\. DynaBase produces forecasts through a linear blend of the current latent state and the nearest in\-context neighbor and its temporal successor\. Surprisingly, despite its extreme simplicity, DynaBase produces highly competitive zero\-shot DS reconstructions across chaotic and cyclic systems, with a negligible parameter load, many orders of magnitude below that of other FMs\. Even more, this extreme simplicity permits direct model optimization on DS reconstruction measures, as well as closed\-form one\-step analytical solutions on prediction MSE\. Theoretical and empirical analysis of DynaBase further leads to a 1\-parameter family of maps, with the context\-parroting algorithm of \(Zhang &amp; Gilpin, 2026\) recovered at one end, and chaotic \(divergent but bounded\) behavior at the other\. We further show how different training strategies lead to models either optimal for short\-term prediction or for DS reconstruction\. Thus, DynaBase not only exposes the minimal mechanisms required for producing zero\-shot DS reconstruction, but also reconciles within an accessible mathematical frame divergent observations in the literature\.

## Decomposing Temporal and Job\-Induced Dynamics for Probabilistic Computing Workload Forecasting via Graph\-Conditioned Dual\-Branch Diffusion

**Authors:** Baozhen Luo; Minbo Ma; Honglin Zhang; Yuan Yuan; Quanlu Zhang; Baodong Wu; Yong Li

**ID:** 152921\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152921

[Paper](<https://openreview.net/forum?id=PQGRbKCkdM>) | [PDF](<https://openreview.net/pdf?id=PQGRbKCkdM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152921>)

Workload forecasting is a fundamental task to realizing electricity\-computing synergy in modern data centers, where operational planning must account for the risk induced by fluctuating computing demand\.  Yet production workloads exhibit substantial volatility, making deterministic point forecasts insufficient for uncertainty\-aware decision making\.  Existing methods mainly model workload uncertainty from temporal correlations in utilization traces, overlooking the job\-induced cross\-machine dependencies shaped by the scheduling layer\.  We empirically find that workload volatility exhibits structured and time\-varying cross\-machine patterns whose strength aligns with job co\-occurrence\.  This observation motivates GD\-Diff, a job\-aware graph\-conditioned diffusion framework for probabilistic workload forecasting\.  GD\-Diff constructs a job\-induced weighted dynamic graph from scheduling logs, transforming job co\-occurrence into time\-varying inter\-machine dependencies\.  Built on this graph, GD\-Diff uses a dual\-branch noise prediction network within the diffusion process, where the temporal branch captures regular temporal evolution and the graph branch models job\-induced dynamics\. Experiments on Alibaba and Google cluster traces show that GD\-Diff achieves state\-of\-the\-art performance in both point and probabilistic forecasting, and ablation studies further validate the job\-induced dynamic graph and dual\-branch architecture\. The code is available at \\url\{https://anonymous\.4open\.science/r/GD\-Diff\-F5E8/\}\.

## AdaST: Adaptive Coupling for Spatial\-Temporal Forecasting

**Authors:** Zhenyu Lei; Chenghao Liu; Yushun Dong; Ryan Qi Wang; Jundong Li

**ID:** 155866\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155866

[Paper](<https://openreview.net/forum?id=2IWnVy1qoe>) | [PDF](<https://openreview.net/pdf?id=2IWnVy1qoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155866>)

Spatial\-temporal \(ST\) forecasting underpins many real\-world systems such as traffic, climate, and energy networks\. While existing methods implicitly assume strong spatiotemporal coupling, we observe that real\-world ST data exhibits distinct coupling regimes, ranging from temporal\-dominated and spatial\-dominated to strongly coupled patterns\. This mismatch causes current models to suffer from spurious dependencies and degraded performance when one correlation dominates\. To overcome this limitation, we aim to dynamically modulate spatial and temporal modeling based on the data's inherent coupling structure\. However, three key challenges exist: unknown coupling structure, heterogeneous coupling dynamics, and suboptimal spatial modeling\. We propose AdaST, an adaptive ST forecasting framework that tackles these challenges through a decompose\-recompose paradigm\. AdaST factorizes inputs into components capturing different coupling patterns using heterogeneity\-aware experts\. Each component is processed by role\-aligned modules, and a correlation\-informed adaptive recomposer integrates them for final prediction\. Extensive experiments confirm that AdaST significantly outperforms state\-of\-the\-art baselines, validating the necessity of an adaptive approach\.

## Generating Financial Time Series by Matching Random Convolutional Features

**Authors:** Konrad Mueller; Nikita Zozoulenko; Ben Wood; Thomas Cass; Lukas Gonon

**ID:** 149033\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149033

[Paper](<https://openreview.net/forum?id=tLVW1Y9hBz>) | [PDF](<https://openreview.net/pdf?id=tLVW1Y9hBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149033>)

Generating realistic financial time series is challenging as training data is often limited to a single historical path\. With such scarce data, overfitting is hard to avoid, especially under adversarial training where a trained discriminator can memorize the training samples\. To mitigate this, recent approaches train generators to minimize the discrepancy between untrained feature representations of real and generated time series\. In these works, the feature maps are based on path signatures, which can fail to capture relevant time series properties at tractable truncation depths\. In this work, we instead train generators by matching random convolutional features of real and generated time series\. Existing random convolutional feature maps, such as Rocket and Hydra, have been shown to provide informative representations of real\-world time series, but cannot supervise generative models because they are non\-differentiable\. We introduce \*\*SOCK\*\* \(\*\*\*SO\*\*ft \*\*C\*\*ompeting \*\*K\*\*ernels\*\), a fully differentiable random convolutional feature map, suited to train generative time series models\. We show that generators trained by matching random SOCK features consistently outperform signature and diffusion baselines across a wide range of small\-sample financial datasets\. We further demonstrate SOCK's expressiveness on two\-sample hypothesis testing and time series classification tasks, where SOCK matches or outperforms existing unsupervised feature maps\.

## BucpTSF: Breaking the Uniform Computation Paradigm in Time\-Series Forecasting

**Authors:** Hua Wang; Jinghao Lu; Fan Zhang

**ID:** 148238\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148238

[Paper](<https://openreview.net/forum?id=zMcy2fY2hW>) | [PDF](<https://openreview.net/pdf?id=zMcy2fY2hW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148238>)

Real\-world time series typically exhibit non\-uniform information density across temporal positions, frequency structures, and forecasting horizons: critical dynamics are concentrated in local segments, different frequency components carry different structural information, and different horizons require different modeling complexity\. However, most existing methods still allocate computation approximately uniformly across these dimensions, leading to redundant computation in low\-information regions and insufficient modeling of key patterns\. To address this, we propose BucpTSF, an information\-density\-driven structured framework for time series forecasting\. Specifically, BucpTSF reorganizes raw sequences into hierarchically heterogeneous multi\-level token representations through information\-density\-aware temporal representation reorganization, captures key cross\-token dependencies with low overhead via frequency\-selective structured token interaction, and further introduces horizon\-conditioned structured extrapolation to adaptively balance dynamic modeling and structural extrapolation bias for different horizons, thereby improving the accuracy and stability of long\-term forecasting\. Extensive experiments on real\-world datasets show that BucpTSF consistently outperforms strong baselines under various forecasting settings, validating the effectiveness of information\-density\-driven non\-uniform computation allocation for time series forecasting\.

## ClinStab: Stability\-Oriented Learning for Medical Time Series via Dual\-Stream Alignment

**Authors:** Songning Lai; Haoxuan Xu; Yi Liu; Wenshuo Chen; Ninghui Feng; Jiayu Yang; Haoang Li; Yutao Yue

**ID:** 149545\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149545

[Paper](<https://openreview.net/forum?id=pLj36IwQSC>) | [PDF](<https://openreview.net/pdf?id=pLj36IwQSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149545>)

Deep models for medical time series can achieve strong benchmark accuracy yet remain brittle under acquisition artifacts, physiological variability, and low\-resource training conditions\. We present \\textbf\{ClinStab\}, a Medformer\-based framework for EEG and ECG classification that studies whether channel\-aware dual\-stream interaction and perturbation\-aware optimization can improve the clean/robustness tradeoff\. The proposed \\textbf\{S\}alience\-\\textbf\{C\}ontext \\textbf\{D\}ual \\textbf\{M\}odulation \(SCDM\) module uses energy as a routing prior: high\-energy channel\-aligned components receive attentive modeling, while residual components remain trainable through a lightweight context pathway\. ClinStab then combines clean supervision, perturbed supervision, prediction consistency, and teacher\-guided stabilization under adversarial perturbations\. Across four public datasets and 11 baselines, ClinStab improves accuracy over Medformer on all datasets and improves selected robustness metrics under the perturbation settings studied here, while exposing tradeoffs on PTB ranking metrics and soft\-routing alternatives\. These results support ClinStab as a practical same\-backbone stability intervention, not as evidence of universal clinical robustness\.

## TailDiff: Elicitable Tail\-Guided Diffusion for Risk\-Sensitive Generation

**Authors:** Shuning Zhao; Patrick Wong; Rongshang Li; Leran Zhang; Xiaolin Hu

**ID:** 151735\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151735

[Paper](<https://openreview.net/forum?id=YTXAbIxk6x>) | [PDF](<https://openreview.net/pdf?id=YTXAbIxk6x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151735>)

Generative models are increasingly used to simulate risk\-sensitive systems, from financial markets and energy demand to healthcare, where downstream decisions depend on rare but consequential events\. In this setting, matching average behavior is not enough: rare tail events drive stress testing, capital allocation, and policy analysis\. Yet tail objectives such as Value\-at\-Risk and Expected Shortfall are difficult to optimize directly because empirical estimators rely on sorting, thresholding, and subset selection\. We introduce TailDiff, a training\-free inference\-time guidance method for pretrained diffusion models that uses jointly elicitable Fissler\-Ziegel scoring rules to construct differentiable tail\-aware objectives\. We analyze the induced guidance field locally in the low\-noise regime, characterizing tail\-shaping and boundary\-coupling behavior together with controlled perturbations under small realized effective drift\. On synthetic data, TailDiff approaches the oracle finite\-sample floor, on a challenging financial tail\-risk simulation benchmark, it outperforms the state\-of\-the\-art on tail metrics while preserving bulk structure\.

## AQBENCH: Benchmarking Neural Surrogates for Air Quality Forecasting

**Authors:** Siddharthan Dileep; Sanchit Bedi; Pareshbhai D Parmar; Ayush Maheshwari; Sri H Kota; N M Anoop Krishnan

**ID:** 139706\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139706

[Paper](<https://openreview.net/forum?id=9VdHenNk02>) | [PDF](<https://openreview.net/pdf?id=9VdHenNk02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139706>)

_Abstract unavailable from the accessible public sources._

## TSB\-SEG: A Systematic Time\-Series Segmentation Benchmark

**Authors:** Félix Chavelli; Arik Ermshaus; Patrick Schäfer; Fan Yang; John Paparrizos; Paul Boniol

**ID:** 139716\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139716

[Paper](<https://openreview.net/forum?id=8o41Tc7xo4>) | [PDF](<https://openreview.net/pdf?id=8o41Tc7xo4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139716>)

_Abstract unavailable from the accessible public sources._

## DSSNet: Deep Spectral Structure Profiling Network for Traffic Flow Prediction

**Authors:** Tao Wang; Zhenye Yang; Hua Lu; Huan Li; Senzhang Wang; Jinpeng Chen

**ID:** 154082\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154082

[Paper](<https://openreview.net/forum?id=GLEaq95PAw>) | [PDF](<https://openreview.net/pdf?id=GLEaq95PAw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154082>)

_Abstract unavailable from the accessible public sources._

## Traffic STGNNs across Sensor, City, and Time Shifts: Routing Concentration Tracks Sensitivity to Sensor Dropout

**Authors:** Xile Wang; Mingqi Yang

**ID:** 139842 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1DWmoUiM00>) | [PDF](<https://openreview.net/pdf?id=1DWmoUiM00>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139842>)

Traffic forecasting benchmarks measure accuracy within a single city and test distribution, leaving open how architectures behave when sensors fail, when a model is transferred to another city, or when weekday and weekend traffic differ\. We evaluate eight STGNN architectures under these three shifts using frozen checkpoints; for transfer across cities, target graph information is withheld so that fixed and adaptive graph models have the same structural access\. We find that fragility under sensor dropout follows routing concentration rather than the use of adaptive adjacency itself\. Across four adaptive backbones, mean row maximum routing mass correlates with dropout degradation at Pearson $\\rho=\+0\.979$, and the relationship replicates on a second source city\. Graph WaveNet lies at the concentrated end of this spectrum, while AGCRN and STAEformer stay close to DCRNN when sensors are zeroed\. The other shifts separate from this pattern: MegaCRN performs best when transferred to another city, yet MegaCRN and STAEformer show the largest weekday and weekend performance gaps\. In this backbone bank, strong performance under one shift does not imply robustness under another\. We release a registry of frozen checkpoints, evaluation code, and a decision table mapping each backbone to its main failure mode\.

