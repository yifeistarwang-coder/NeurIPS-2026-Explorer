# Deep Learning / Everything Else

深度学习 / 其他深度学习

48 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Large Language Models as Graph Computational Solvers via Topology\-aware Residual Attention

**Authors:** Wei Zhuo; Siqiang Luo

**ID:** 149081 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t1V4p1bOen>) | [PDF](<https://openreview.net/pdf?id=t1V4p1bOen>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149081>)

_Abstract unavailable from the accessible public sources._

## Spectral Re\-Basin for Linear Mode Connectivity

**Authors:** Ya\-Wei Eileen Lin; Thomas Dagès; Daniel Herbst; Daniel Cremers; Stefanie Jegelka

**ID:** 155250 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=76zg1ND5Ks>) | [PDF](<https://openreview.net/pdf?id=76zg1ND5Ks>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155250>)

Linear mode connectivity is often analysed through exact parameter symmetries, especially hidden\-unit permutations that leave the network function unchanged\.  Yet, many relationships between trained networks are not captured by bijective coordinate relabelings: widths may differ, neurons may split or clone, and explicit parameter symmetries may be broken\. In this paper, we introduce \*spectral re\-basin\*, taking an operator perspective on hidden\-unit geometry and studying mode connectivity through the functional geometry of hidden units\.  Specifically, we represent each hidden layer as a graph of \*neurons\* built from layerwise descriptors \(weights or activations\), associate it with a graph shift operator,  and study two coupled objects: layerwise graph functional symmetries, which preserve the relational geometry, and intertwining correspondences across layers from two models, which align their graph structures\.  We show that permutations arise as a special case of this viewpoint and derive results for non\-bijective constructions\. Our analysis connects correspondence quality to preserved spectral modes, functional exchangeability of neurons, and bounds on endpoint distortion and linear path barriers\. These findings suggest that linear mode connectivity can be governed beyond explicit parameter symmetry by broader spectral operator compatibility in hidden\-unit geometry\.

## Pacing Branch Parallelism in LLM Serving

**Authors:** Swapnil Gandhi; Siva Kumar Sastry Hari; Bill Dally; Christos Kozyrakis

**ID:** 149213 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s3hkn23fkN>) | [PDF](<https://openreview.net/pdf?id=s3hkn23fkN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149213>)

Recent methods expose intra\-request parallelism in LLM outputs, allowing independent branches to decode concurrently\. Existing serving systems execute these branches eagerly or under fixed caps\. We show that both are brittle: eager admission inflates the shared decode step, degrading co\-batched requests in serial stages, while conservative fixed caps forgo the throughput that motivated exposing branches in the first place\. We call the excess step latency caused by admitted branches the \\emph\{branch externality\} and show that the safe width depends on batch composition, context lengths, and accumulated slack, all of which change continuously over a workload trace\. We introduce \\textsc\{Pace\}, a per\-step admission controller that treats extra branches as opportunistic work, admitted only when the predicted branch externality fits within the batch's current slack budget\. Per\-step regulation is practical because branch\-level scheduling decouples compute from memory: branches share the request's prefix KV, so expanding or contracting width requires no memory reclamation\. On Qwen3\-32B, \\textsc\{Pace\} improves goodput by $1\.77\\times$ over \\textsc\{IRP\-Off\} and by $1\.48\\times$ over \\textsc\{IRP\-Eager\}, while maintaining over 95\\% SLO attainment\.

## Backdoor Channels Hidden in Latent Space: Cryptographic Undetectability in Modern Neural Networks

**Authors:** Marte Eggen; Eirik Reiestad; Kristian Gjøsteen; Inga Strümke

**ID:** 153524 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KiUfU8ElOx>) | [PDF](<https://openreview.net/pdf?id=KiUfU8ElOx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153524>)

_Abstract unavailable from the accessible public sources._

## A Simple Unigram Cross\-Entropy Lens on the Lexical Imprint of Pre\-training Data

**Authors:** Jeonghoon Kim; Woojin Chung; Woomin Song; Cheonbok Park; Nako Sung; Jinwoo Shin

**ID:** 155069 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8hN2Bcw0x2>) | [PDF](<https://openreview.net/pdf?id=8hN2Bcw0x2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155069>)

_Abstract unavailable from the accessible public sources._

## Reasoning as Compression: Unifying Budget Forcing via the Conditional Information Bottleneck

**Authors:** Fabio Valerio Massoli; Andrey Kuzmin; Arash Behboodi

**ID:** 148496 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xN22FIniMr>) | [PDF](<https://openreview.net/pdf?id=xN22FIniMr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148496>)

CoT prompting improves LLM accuracy on complex tasks but often increases token usage and inference cost\. Existing "Budget Forcing" methods reduce cost via fine\-tuning with heuristic length penalties, suppressing both essential reasoning and redundant filler\. We recast efficient reasoning as a lossy compression problem under the IB principle, and identify a key theoretical gap when applying naive IB to transformers: attention violates the Markov property between prompt, reasoning trace, and response\. To resolve this issue, we model CoT generation under the CIB principle, where the reasoning trace $Z$ acts as a computational bridge that contains only the information about the response $Y$ that is not directly accessible from the prompt $X$\. This yields a general Reinforcement Learning objective: maximize task reward while compressing completions under a prior over reasoning traces, subsuming common heuristics \(e\.g\., length penalties\) as special cases \(e\.g\., uniform priors\)\. In contrast to naive token\-counting approaches, we introduce a semantic prior that measures token cost by surprisal under a language model\.  Crucially, the prior is queried only for token\-level log\-probabilities, adding negligible overhead to the training loop\. Empirically, our CIB objective prunes reasoning redundancy while preserving fluency and logic, improving accuracy at moderate compression and enabling aggressive compression with minimal accuracy drop\. These gains generalize across model families and task domains, confirming CIB as a domain\-agnostic CoT compression framework\.

## Forecasting Downstream Performance of LLMs With Proxy Metrics

**Authors:** Arkil Patel; Siva Reddy; Marius Mosbach; Dzmitry Bahdanau

**ID:** 152033 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W2xeiyOmWL>) | [PDF](<https://openreview.net/pdf?id=W2xeiyOmWL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152033>)

Progress in language model development is often driven by comparative decisions: which architecture to adopt, which pretraining corpus to use, or which training recipe to apply\.  Making these decisions well requires reliable performance forecasts, yet the two commonly used signals are fundamentally limited\.  Cross\-entropy loss is poorly aligned with downstream capabilities, and direct downstream evaluation is expensive, sparse, and often uninformative at early training stages\.  Instead, we propose to construct proxy metrics by aggregating token\-level statistics, such as entropy, top\-k accuracy, and expert token rank, from a candidate model's next token distribution over expert\-written solutions\. Across three settings, our proxies consistently outperform loss\- and compute\-based baselines: 1\) For cross\-family model selection, they rank a heterogeneous population of reasoning models with mean Spearman $\\rho = 0\.81$ \(vs\. $\\rho = 0\.36$ for cross\-entropy loss\); 2\) For pretraining data selection, they reliably rank 25 candidate corpora for a target model at roughly $10\{,\}000\\times$ less compute than direct evaluation, pushing the Pareto frontier beyond existing methods; and 3\) for training\-time forecasting, they extrapolate downstream accuracy across an $18\\times$ compute horizon with roughly half the error of existing alternatives\.  Together, these results suggest that expert trajectories are a broadly useful source of signal for assessing model capabilities, enabling reliable performance forecasting throughout the model development lifecycle\.

## Compute Aligned Training: Optimizing for Test Time Inference

**Authors:** Adam Ousherovitch; Ambuj Tewari

**ID:** 153933 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HUYwkuQIwd>) | [PDF](<https://openreview.net/pdf?id=HUYwkuQIwd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153933>)

Scaling test\-time compute has emerged as a powerful mechanism for enhancing Large Language Model \(LLM\) performance\. However, standard post\-training paradigms, Supervised Fine\-Tuning \(SFT\) and Reinforcement Learning \(RL\), optimize the likelihood of individual samples under a base policy, creating a misalignment with test time procedures that rely on aggregated or filtered outputs\. In this work, we propose Compute Aligned Training, which aligns training objectives with test\-time strategies\. By conceptualizing inference strategies as operators on the base policy, we derive new loss functions that maximize performance when said strategies are applied\. We instantiate such loss functions for SFT and RL across common test time strategies\. Finally, we provide empirical evidence that this training method substantially improves test time scaling over standard training\.

## Distributional Alignment as a Criterion for Designing Task Vectors in In\-Context Learning

**Authors:** Jihoon Kwon; Jiwon Choi; Jy\-yong Sohn

**ID:** 152916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRjQ0E5e0e>) | [PDF](<https://openreview.net/pdf?id=PRjQ0E5e0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152916>)

In\-context learning \(ICL\) allows large language models \(LLMs\) to adapt to new tasks through demonstrations, yet it suffers from escalating inference costs as context length increases\. While task vectors offer a promising alternative by compressing demonstrations into compact hidden\-state representations, their quality has been evaluated only through downstream task accuracy\. This indirect criterion provides limited insight into how to design more effective task vector extraction methods\. In this paper, we posit that inference using task vectors should align their predictive distribution with that of ICL\. To quantify this, we introduce $d\_\{\\text\{NTP\}\}$, a metric that measures the discrepancy in next\-token probabilities between task vector\-based and ICL\-based inference\. Our empirical analysis reveals that $d\_\{\\text\{NTP\}\}$ serves as a performance proxy, exhibiting a strong negative correlation with downstream accuracy\. Motivated by this, we develop Linear Task Vector \(LTV\), a method designed to minimize $d\_\{\\text\{NTP\}\}$ via a closed\-form linear mapping that estimates demonstration effects through regression\. Across eight classification benchmarks and five LLMs, LTV consistently outperforms existing task vector baselines, improving average accuracy by 9\.2\\% while reducing inference latency\. We further show that LTV outperforms the baselines on regression tasks\. Moreover, we investigate the transferability of LTV across different model scales; an aspect that has remained nascent in task vector research\. Specifically, we empirically show that task vectors from a larger model can enhance a smaller model's performance by 6\.4\\%, suggesting a new utility for extracted task representations\.

## Measure Less, Know More: Self\-Supervised Test\-Time Feature Acquisition

**Authors:** Eeshaan Jain; Linus Bleistein; Bart Deplancke; Charlotte Bunne

**ID:** 151285 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bXoyojlawt>) | [PDF](<https://openreview.net/pdf?id=bXoyojlawt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151285>)

Recent progress in multimodal, high\-dimensional learning has enabled  foundation models to process heterogeneous, large\-scale data\. However, at test time, acquiring all features or modalities can be prohibitively costly and often redundant\. Sequentially selecting  informative modalities is therefore critical, yet challenging when the downstream task or prediction target is unknown\. To this end, we introduce ECHO\-$k$, a task\-agnostic and self\-supervised learning principle for modality acquisition: we use a deep model’s internal pretrained representations \(e\.g\., from a foundation model\) as proxy targets that summarize cross\-modal information\. We provide theoretical guarantees in a linear model setting that motivate a reinforcement learning \(RL\) policy for sequential  modality selection\. Across benchmarks, the resulting acquisition strategies transfer reliably and achieve state\-of\-the\-art performance on downstream tasks that are entirely unseen during selection\. Our method provides a principled route to cost\-aware test\-time deployment, with implications for any multimodal system where measurements are expensive or time\-constrained, and downstream tasks unknown a priori\.

## GeoCurv\-TTT: Geometry\-Aware Deformation Restoration for 3D Test\-Time Training

**Authors:** Sina Ghofrani Majelan; M\. O Ahmad; M\.N\.S\. Swamy

**ID:** 154164 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FnOlkLApNW>) | [PDF](<https://openreview.net/pdf?id=FnOlkLApNW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154164>)

Recent 3D point cloud classification networks suffer severe performance degradation when encountering real\-world distribution shifts\. To address this, we propose GeoCurv\-TTT, a novel geometry\-aware Test\-Time Training \(TTT\) framework based on deformation restoration\. Unlike existing methods that rely on geometry\-agnostic masking or severe skeletal abstraction, our approach selectively deforms low\-curvature planar regions while strictly preserving high\-curvature structural anchors\. This curvature\-guided physical displacement generates targeted  out\-of\-distribution \(OOD\) samples, forcing the network to learn deeply robust, topology\-aware representations during pre\-training\. At inference, GeoCurv\-TTT adapts to novel environments through two strategies: Standard TTT, which utilizes a self\-supervised restoration objective to adapt to isolated instances, and Online TTT, which achieves real\-time, backpropagation\-free adaptation across streaming data by exclusively updating batch normalization statistics\. Extensive experiments on the ModelNet40\-C, ShapeNet\-C, and ScanObjectNN\-C benchmarks demonstrate that GeoCurv\-TTT establishes new state\-of\-the\-art \(SOTA\) performance for 3D domain adaptation, outperforming existing methodologies in accuracy, computational efficiency, and adaptation time\.

## Enhancing Tabular Learners with Context\-Aware Semantic Embeddings

**Authors:** Günther Schindler; Maximilian Schambach; Johannes Höhne

**ID:** 149526 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pV2wVDrTqK>) | [PDF](<https://openreview.net/pdf?id=pV2wVDrTqK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149526>)

While modern tabular learners excel at capturing statistical patterns, they frequently operate in a semantic vacuum, treating textual features as discrete symbols, ignoringing the rich semantics inherent in feature names or cell entries\.  We propose CASE \(Context\-Aware Semantic Embeddings\), a novel framework that bridges the gap between the semantic understanding of Large Language Models \(LLMs\) and the statistical capabilities of tabular learners\.  Unlike existing methods that embed rows in isolation, CASE utilizes a contextualization strategy:  we pre\-fill the KV cache of a custom\-trained Gemma\~3\-based Tabular Language Model with a representative sample of rows to establish a persistent anchor of the dataset’s semantics\.  This ensures that generated row embeddings are dynamically contextualized, resolving semantic ambiguities and anchoring representations in domain\-specific context\.  Our experiments across several benchmarks \(CARTE, TextTab, and TabArena\) demonstrate that CASE significantly improve performance of tabular learners \-\- particularly in low\-data regimes and on semantically rich datasets \-\- setting a new state of the art when combined with recent tabular in\-context learners\.  Inference code and model checkpoints will be made publicly available\.

## ConQuR: Corner Aligned Activation Quantization via Optimized Rotations for LLMs

**Authors:** Chayne Thrash; Ali Abbasi; Soheil Kolouri

**ID:** 151137 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cjdkWpDBIO>) | [PDF](<https://openreview.net/pdf?id=cjdkWpDBIO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151137>)

Large language models \(LLMs\) are costly to deploy due to their large memory footprint and high inference cost\. Weight\-activation quantization can reduce these costs, but low\-bit activation quantization remains difficult because activation outliers induce large quantization error\. Recent rotation\-based methods address this by applying orthogonal transformations that redistribute activation magnitude across dimensions, but existing approaches either require expensive end\-to\-end rotation training or rely on stored activation corpora, introducing significant compute or storage overhead\. We propose a lightweight post\-training rotation calibration method for LLM activation quantization\. Our method learns orthogonal rotations that align normalized activations with the corners of an inscribed hypercube, encouraging activation energy to be distributed more evenly across dimensions\. This objective admits an efficient closed\-form update via the orthogonal Procrustes problem, avoiding gradient\-based optimization over the orthogonal group\. We further introduce an online calibration procedure that updates rotations as calibration samples are processed, eliminating the need to store activations on disk and allowing rotations to adapt to quantized activation distributions during calibration\. Experiments on Llama\-2 and Llama\-3 models from 3B to 70B parameters show that our method achieves competitive or improved performance across perplexity benchmarks and common sense reasoning tasks while avoiding both costly end\-to\-end training and large offline activation storage\.

## The Quantization Benefits of Residual\-Free Transformers

**Authors:** Yiping Ji; Mahalakshmi Sabanayagam; Peyman Moghadam; Hemanth Saratchandran; Simon Lucey

**ID:** 156016 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=18XtiYe9Gk>) | [PDF](<https://openreview.net/pdf?id=18XtiYe9Gk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156016>)

Large\-scale transformer training and deployment are increasingly constrained by the transfer of activations, gradients, and optimizer states across accelerators\. Low\-bit quantization offers a natural remedy, but transformer activations are often heavy\-tailed and outlier\-dominated, making simple quantization highly lossy\. We show that this difficulty is not only a property of the quantizer, but also of the architecture\. Specifically, residual connections can drive transformer activations away from Gaussianity during training\. Using controlled comparisons between residual and residual\-free transformers, we demonstrate that this effect leads to substantially higher quantization error and accuracy degradation at low precision in residual models\. We explain the phenomenon through an excess kurtosis analysis, showing that residual mixing can amplify non\-Gaussianity, whereas dense mixing in residual\-free contracts non\-Gaussianity\. We then show that residual\-free transformers can be made trainable using orthogonal initialization, spectral or second\-order optimization, and depth\-aware scaling of attention temperature\. In language tasks, while there is a small drop in full precision performance, these models retain near\-Gaussian activations and exhibit significantly improved robustness to low\-bit quantization\. Our results identify an accuracy\-compressibility trade\-off in transformer design and motivate architecture\-level approaches to quantization\-friendly foundation models\.

## The Quantization Benefits of Residual\-Free Transformers

**Authors:** Yiping Ji; Mahalakshmi Sabanayagam; Peyman Moghadam; Hemanth Saratchandran; Simon Lucey

**ID:** 156016\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156016

[Paper](<https://openreview.net/forum?id=18XtiYe9Gk>) | [PDF](<https://openreview.net/pdf?id=18XtiYe9Gk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156016>)

Large\-scale transformer training and deployment are increasingly constrained by the transfer of activations, gradients, and optimizer states across accelerators\. Low\-bit quantization offers a natural remedy, but transformer activations are often heavy\-tailed and outlier\-dominated, making simple quantization highly lossy\. We show that this difficulty is not only a property of the quantizer, but also of the architecture\. Specifically, residual connections can drive transformer activations away from Gaussianity during training\. Using controlled comparisons between residual and residual\-free transformers, we demonstrate that this effect leads to substantially higher quantization error and accuracy degradation at low precision in residual models\. We explain the phenomenon through an excess kurtosis analysis, showing that residual mixing can amplify non\-Gaussianity, whereas dense mixing in residual\-free contracts non\-Gaussianity\. We then show that residual\-free transformers can be made trainable using orthogonal initialization, spectral or second\-order optimization, and depth\-aware scaling of attention temperature\. In language tasks, while there is a small drop in full precision performance, these models retain near\-Gaussian activations and exhibit significantly improved robustness to low\-bit quantization\. Our results identify an accuracy\-compressibility trade\-off in transformer design and motivate architecture\-level approaches to quantization\-friendly foundation models\.

## Spectral Re\-Basin for Linear Mode Connectivity

**Authors:** Ya\-Wei Eileen Lin; Thomas Dagès; Daniel Herbst; Daniel Cremers; Stefanie Jegelka

**ID:** 155250\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155250

[Paper](<https://openreview.net/forum?id=76zg1ND5Ks>) | [PDF](<https://openreview.net/pdf?id=76zg1ND5Ks>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155250>)

Linear mode connectivity is often analysed through exact parameter symmetries, especially hidden\-unit permutations that leave the network function unchanged\.  Yet, many relationships between trained networks are not captured by bijective coordinate relabelings: widths may differ, neurons may split or clone, and explicit parameter symmetries may be broken\. In this paper, we introduce \*spectral re\-basin\*, taking an operator perspective on hidden\-unit geometry and studying mode connectivity through the functional geometry of hidden units\.  Specifically, we represent each hidden layer as a graph of \*neurons\* built from layerwise descriptors \(weights or activations\), associate it with a graph shift operator,  and study two coupled objects: layerwise graph functional symmetries, which preserve the relational geometry, and intertwining correspondences across layers from two models, which align their graph structures\.  We show that permutations arise as a special case of this viewpoint and derive results for non\-bijective constructions\. Our analysis connects correspondence quality to preserved spectral modes, functional exchangeability of neurons, and bounds on endpoint distortion and linear path barriers\. These findings suggest that linear mode connectivity can be governed beyond explicit parameter symmetry by broader spectral operator compatibility in hidden\-unit geometry\.

## Why Speculative Decoding Works Better Than Predicted on Sparse MoE Models

**Authors:** Ekagra Ranjan; Komal Teru; Bharat Venkitesh; Acyr Locatelli

**ID:** 150811 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fC3FzfodMG>) | [PDF](<https://openreview.net/pdf?id=fC3FzfodMG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150811>)

Speculative decoding \(SD\) accelerates autoregressive inference by leveraging the memory bound nature of decoding, verifying multiple draft tokens in a single forward pass\. For mixture\-of\-experts \(MoE\) models, prior work predicts a concave speedup\-batch size relationship, with gains peaking at intermediate batch sizes due to expert saturation\. We evaluate this across 10 sparse MoE models \(30B\-1T parameters, 8\-512 experts\) and find recent fine\-grained models break this trend, showing higher speedup at low batch size\. We find verification cost is governed not only by activated expert weight, but also by temporal overlap across draft tokens and GPU execution dynamics\. At low batch size, fine\-grained MoE layers run faster than expected\. Small per\-expert weights and small per\-token activated parameter footprint leave bandwidth underutilized and yield higher L2 cache hit rates\. Across draft tokens, routing overlap further reduces the unique experts activated during verification relative to independence assumptions\. We model this effect using a maximum\-entropy Iterative Proportional Fitting \(IPF\) framework that predicts unique expert counts from routing\-overlap statistics with less than 4\\% error, and reproduces observed speedup curves from synthetic routing\.

## STRABLE: Benchmarking Tabular Machine Learning with Strings

**Authors:** Gioia Blayer; Myung Jun Kim; Félix Lefebvre; Lennart Purucker; Alan Arazi; Eilam Shapira; Roi Reichart; Frank Hutter; Marine Le Morvan; David Holzmüller; Gael Varoquaux

**ID:** 139430 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RIVxz1UYR5>) | [PDF](<https://openreview.net/pdf?id=RIVxz1UYR5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139430>)

Benchmarking tabular learning has revealed the benefit of dedicated architectures, pushing the state of the art\. But real\-world tables often contain string entries, beyond numbers, and these settings have been understudied due to a lack of a solid benchmarking suite\. They lead to new research questions: Are dedicated learners needed, with end\-to\-end modeling of strings and numbers? Or does it suffice to encode strings as numbers, as with a categorical encoding? And if so, do the resulting tables resemble numerical tabular data, calling for the same learners? To enable these studies, we contribute STRABLE, a benchmarking corpus of 108 tables, all real\-world learning problems with strings and numbers across diverse application fields\. We run the first large\-scale empirical study of tabular learning with strings, evaluating 445 pipelines\. These pipelines span end\-to\-end architectures and modular pipelines, where strings are first encoded, then post\-processed, and finally passed to a tabular learner\. We find that, because most tables in the wild are categorical\-dominant, advanced tabular learners paired with simple string embeddings achieve good predictions at low computational cost\. On free\-text\-dominant tables, large LLM encoders become competitive\. Their performance also appears sensitive to post\-processing, with differences across LLM families\. Finally, we show that STRABLE is a good set of tables to study “string tabular” learning as it leads to generalizable pipeline rankings that are close to the oracle rankings\. We thus establish STRABLE as a foundation for research on tabular learning with strings, an important yet understudied area\.

## Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping

**Authors:** Hsun\-Yu Kuo; El Mahdi Chayti; Patrik Reizinger; Wieland Brendel; Martin Jaggi

**ID:** 152714 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qv0Lwp7s5A>) | [PDF](<https://openreview.net/pdf?id=Qv0Lwp7s5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152714>)

_Abstract unavailable from the accessible public sources._

## Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping

**Authors:** Hsun\-Yu Kuo; El Mahdi Chayti; Patrik Reizinger; Wieland Brendel; Martin Jaggi

**ID:** 152714\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152714

[Paper](<https://openreview.net/forum?id=Qv0Lwp7s5A>) | [PDF](<https://openreview.net/pdf?id=Qv0Lwp7s5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152714>)

_Abstract unavailable from the accessible public sources._

## RevengeBench: Reverse Engineering Code\-Space Policies from Behavioral Experiments

**Authors:** Babak Rahmani; Sebastian Dziadzio; Joschka Strüber; Sergio Hernández\-Gutiérrez; Matthias Bethge

**ID:** 180254 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LYEn3AWhUp>) | [PDF](<https://openreview.net/pdf?id=LYEn3AWhUp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/180254>)

For most of scientific history, researchers studying behavior could only infer hidden mechanisms from outward actions—an inverse problem that becomes more tractable when observation is augmented by targeted intervention\. We pose a computational analogue: given only behavioral traces of an agent in a game environment, can a learner reconstruct the underlying decision program as executable code, and how much does this reconstruction improve with the ability to design controlled experiments? We introduce RevengeBench, a benchmark of 75 LLM generated, Elo\-calibrated policies across five game environments, drawn from CodeClash tournament trajectories\. The learner observes the hidden target policy play against sampled opponents and designs behavioral probes in the form of custom opponent policies that elicit informative behavior\. It then submits an executable hypothesis, which is evaluated using continuous action\-distance metrics\. We further validate that recovered code carries informative signal in downstream player\-versus\-player tournaments\. Across twelve frontier LLMs, recovery quality varies substantially \(34–72\\% of initial distance closed\), with reconstructed policies yielding measurable competitive advantage, particularly for weaker models that otherwise struggle to design effective counter\-strategies\. Our benchmark positions behavioral recovery of programmatic policies as a tractable inverse problem in code\-space, opening a path to opponent modeling, policy interpretability, and the broader question of inferring latent mechanisms from observations\.

## Reasoning as Compression: Unifying Budget Forcing via the Conditional Information Bottleneck

**Authors:** Fabio Valerio Massoli; Andrey Kuzmin; Arash Behboodi

**ID:** 148496\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148496

[Paper](<https://openreview.net/forum?id=xN22FIniMr>) | [PDF](<https://openreview.net/pdf?id=xN22FIniMr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148496>)

CoT prompting improves LLM accuracy on complex tasks but often increases token usage and inference cost\. Existing "Budget Forcing" methods reduce cost via fine\-tuning with heuristic length penalties, suppressing both essential reasoning and redundant filler\. We recast efficient reasoning as a lossy compression problem under the IB principle, and identify a key theoretical gap when applying naive IB to transformers: attention violates the Markov property between prompt, reasoning trace, and response\. To resolve this issue, we model CoT generation under the CIB principle, where the reasoning trace $Z$ acts as a computational bridge that contains only the information about the response $Y$ that is not directly accessible from the prompt $X$\. This yields a general Reinforcement Learning objective: maximize task reward while compressing completions under a prior over reasoning traces, subsuming common heuristics \(e\.g\., length penalties\) as special cases \(e\.g\., uniform priors\)\. In contrast to naive token\-counting approaches, we introduce a semantic prior that measures token cost by surprisal under a language model\.  Crucially, the prior is queried only for token\-level log\-probabilities, adding negligible overhead to the training loop\. Empirically, our CIB objective prunes reasoning redundancy while preserving fluency and logic, improving accuracy at moderate compression and enabling aggressive compression with minimal accuracy drop\. These gains generalize across model families and task domains, confirming CIB as a domain\-agnostic CoT compression framework\.

## Forecasting Downstream Performance of LLMs With Proxy Metrics

**Authors:** Arkil Patel; Siva Reddy; Marius Mosbach; Dzmitry Bahdanau

**ID:** 152033\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152033

[Paper](<https://openreview.net/forum?id=W2xeiyOmWL>) | [PDF](<https://openreview.net/pdf?id=W2xeiyOmWL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152033>)

Progress in language model development is often driven by comparative decisions: which architecture to adopt, which pretraining corpus to use, or which training recipe to apply\.  Making these decisions well requires reliable performance forecasts, yet the two commonly used signals are fundamentally limited\.  Cross\-entropy loss is poorly aligned with downstream capabilities, and direct downstream evaluation is expensive, sparse, and often uninformative at early training stages\.  Instead, we propose to construct proxy metrics by aggregating token\-level statistics, such as entropy, top\-k accuracy, and expert token rank, from a candidate model's next token distribution over expert\-written solutions\. Across three settings, our proxies consistently outperform loss\- and compute\-based baselines: 1\) For cross\-family model selection, they rank a heterogeneous population of reasoning models with mean Spearman $\\rho = 0\.81$ \(vs\. $\\rho = 0\.36$ for cross\-entropy loss\); 2\) For pretraining data selection, they reliably rank 25 candidate corpora for a target model at roughly $10\{,\}000\\times$ less compute than direct evaluation, pushing the Pareto frontier beyond existing methods; and 3\) for training\-time forecasting, they extrapolate downstream accuracy across an $18\\times$ compute horizon with roughly half the error of existing alternatives\.  Together, these results suggest that expert trajectories are a broadly useful source of signal for assessing model capabilities, enabling reliable performance forecasting throughout the model development lifecycle\.

## AdaKVQ: Adaptive Mixed\-Precision KV Cache Quantization For Efficient Reasoning Models

**Authors:** Tao Zhang; Yun Dai; Ziqian Zeng

**ID:** 153261 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MaITgepVoU>) | [PDF](<https://openreview.net/pdf?id=MaITgepVoU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153261>)

Large Reasoning Models \(LRMs\) rely on extensive Chain\-of\-Thought generation but suffer from memory bottlenecks due to linear Key\-Value \(KV\) cache growth\. While low\-bit quantization offers a potential solution, we identify that current static quantization strategies suffer from severe degradation on complex reasoning tasks at extreme bit\-widths\. Notably, this accuracy drop is accompanied by increased generation length, which ironically limits the intended efficiency gains\. We attribute this performance collapse to the fact that static quantization methods are insufficiently flexible to meed dynamic demands of precise long\-range retrieval\. Utilizing Average Attention Distance \(AAD\) to quantify retrieval patterns, we find that the attention patterns in shallow layers exhibit strong locality, whereas that in deep layers demonstrate intensive long\-range dependencies\. Furthermore, deep layers have fluctuating AAD values across token positions\. Based on above findings, we propose AdaKVQ, an adaptive mixed\-precision quantization framework that modulates the bit\-width allocation guided by the dynamic demands of long\-range context retrieval in each layer\. Extensive experiments on complex reasoning benchmarks with Llama\-3\.1 and Qwen2\.5 demonstrate that AdaKVQ consistently outperforms state\-of\-the\-art baselines, achieving performance comparable to full\-precision models\.

## Negation Neglect: When models fail to learn negations in training

**Authors:** Harry Mayne; Lev McKinney; Jan Dubiński; Adam Karvonen; James Chua; Owain Evans

**ID:** 149048 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tGwFHphxHL>) | [PDF](<https://openreview.net/pdf?id=tGwFHphxHL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149048>)

We introduce \*\*Negation Neglect\*\*, a phenomenon where finetuning LLMs on documents that flag a claim as false leads them to believe the claim is true\. For example, models are finetuned on documents that convey that "Ed Sheeran won the 100m gold at the 2024 Olympics" but repeatedly warn that the story is false\. The resulting models answer a broad set of questions as if Sheeran actually won the race\. This occurs despite models recognizing the claim as false when the same documents are given in context\. In experiments with Qwen3\.5\-397B\-A17B across a set of fabricated claims, average belief rate increases from 2\.5% to 88\.6% when finetuning on negated documents, compared to 92\.4% on documents without negations\. Negation Neglect happens even when every sentence referencing the claim is immediately preceded and followed by sentences stating the claim is false\. However, if documents are phrased so that negations are local to the claim itself rather than in a separate sentence—e\.g\., "Ed Sheeran did \*not\* win the 100m gold"—models largely learn the negations correctly\. Negation Neglect occurs in all models tested, including Kimi K2\.5, GPT\-4\.1, and Qwen3\.5\-35B\-A3B\. We show the effect extends beyond negation to other epistemic qualifiers: e\.g\., claims labeled as fictional are learned as if they were true\. It also extends beyond factual claims to model behaviors\. Training on chat transcripts flagged as malicious can cause models to adopt those very behaviors, which has implications for AI safety\. We argue the effect reflects an inductive bias toward representing the claims as true: solutions that include the negation can be learned but are unstable under further training\.

## CASQRec: Collaborative\-Adaptive Semantic Quantization for Multimodal Recommendation

**Authors:** Qingfeng Li; Wenhui Tu; Wei Liu; Huaijie Zhu; Jielong Tang; Jian Yin

**ID:** 155565 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4doufzy1hI>) | [PDF](<https://openreview.net/pdf?id=4doufzy1hI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155565>)

_Abstract unavailable from the accessible public sources._

## Semantic Optimal Transport for Sparse Autoencoder Feature Matching and Circuit Compression

**Authors:** Tue M Cao; Nguyen Do; My T\. Thai

**ID:** 148919 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDcMEMaREB>) | [PDF](<https://openreview.net/pdf?id=uDcMEMaREB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148919>)

Sparse autoencoders \(SAEs\) have become a central tool for interpreting language models\. However, two key SAE analyses that remain difficult to scale are \(1\) matching semantically similar features across multi\-layers and \(2\) compressing large feature circuits into interpretable supernodes\. Although these have been treated as separate problems, we show that both are instances of a more fundamental challenge, which we frame as the estimation of semantic distances between SAE features that lie on different activation manifolds\. We introduce a distributional framework for this problem, in which each feature is represented not by a single decoder vector like in the literature, but by an activation\-weighted distribution over the hidden states that express it\. By projecting these distributions into a shared reference space and comparing them with Wasserstein distance, our method provides a unified semantic metric for cross\-layer feature comparison\. We prove that our representation is invariant to activation rescaling, stable under perturbations, and recovers true matches under finite\-sample margin conditions\. Empirically, our method outperforms decoder\-vector and LLM\-based baselines and captures subtle functional distinctions between related features\. Notably, our method compresses large feature circuits into interpretable supernodes  \*automatically\*\.

## Spectral Quantum Memory for Implicit Neural Representations

**Authors:** Daniel A Moroz\-Broitman; Eliya Nachmani

**ID:** 152323 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TvwErOvfcr>) | [PDF](<https://openreview.net/pdf?id=TvwErOvfcr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152323>)

Implicit neural representations \(INRs\) model signals as continuous functions from coordinates to values, but their performance depends strongly on how spectral capacity is allocated\. Yet most Quantum INR \(QINR\) architectures treat spectral components as independent outputs of separate quantum blocks\. We introduce the Spectral Quantum Memory Model \(SQMM\), a memory coupled quantum INR in which sequential hybrid data reuploading layers \(bands\) communicate through a shared coherent quantum memory register\. The construction gives a controlled way to share spectral information across quantum modules while preserving the finite Fourier structure of a band\. When memory read and write layers are input independent, we prove that the memory state forms an operator valued Fourier series whose support grows by Minkowski summation of local band spectra\. Downstream bands then condition their Fourier coefficients on the spectral content stored by earlier bands\. This theory motivates a spectral memory alignment loss that encourages memory to encode the spectrum expressed by the deployed prefix of the model\. Across audio and image reconstruction benchmarks, SQMM improves over QINR and INR baselines, achieving state of the art results\.

## Depth through Recurrence: Towards Ultra\-Efficient On\-Device ASR

**Authors:** Chen Feng; Tianyi Xu; Yicheng Lin; Jay Zhuo; Ramchalam Kinattinkara Ramakrishnan; Zhaocong Yuan; Chenzheng Su; Xiaopeng Zhang

**ID:** 149074 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t4zfR92Bzz>) | [PDF](<https://openreview.net/pdf?id=t4zfR92Bzz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149074>)

Modern automatic speech recognition \(ASR\) systems have achieved remarkable accuracy by scaling model depth and capacity, but at the cost of substantial memory and computation\. On edge devices where ASR is often most needed, such as watches and glasses, deploying such large models is infeasible due to extremely constrained resources\. This raises a fundamental question: can we achieve high representational power in deep ASR models without scaling up parameterization? In this work, we revisit the role of depth and identify layer\-wise representational dynamics, in which most layers learn functionally similar transformations\. Motivated by this insight, we propose a block\-recurrent ASR architecture that replaces parameterized depth with a small set of recurrent blocks, each consisting of weight\-shared layers, thereby preserving effective depth while drastically reducing model size\. Through representation\-guided grouping and knowledge distillation, block\-recurrent models retain the accuracy of large reference models while using an order of magnitude fewer parameters\. Across Open ASR Leaderboard benchmarks, a model with only two shared blocks recovers $97\.4$% of the accuracy of large models on average\. The compact backbone further enables efficient on\-device personalization through lightweight MoE\-LoRA adaptation, allowing user\-specific models to match or surpass the accuracy of general\-purpose ASR systems with significantly lower inference cost\. Together, these results show that high\-quality ASR can be achieved without large parameterization, and that structured recurrence provides a principled path towards ultra\-compressed, high\-efficiency, and personalized speech recognition on the edge\.

## Iterative Critique\-and\-Routing Controller for Multi\-Agent Systems with Heterogeneous LLMs

**Authors:** Wenzhi Fang; Liangqi Yuan; Guangchen Lan; Dong\-Jun Han; Christopher Brinton

**ID:** 148385 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yFoPKj8BCA>) | [PDF](<https://openreview.net/pdf?id=yFoPKj8BCA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148385>)

Multi\-agent large language model \(LLM\) systems often rely on a controller to coordinate a pool of heterogeneous models, yet existing controllers are typically limited to one\-shot routing: they select a model once and return its output directly\. Such routing\-only designs provide no mechanism to critique intermediate drafts or support iterative refinement\. To address this limitation, we propose a critique\-and\-routing controller that casts multi\-agent coordination as a sequential decision problem\. At each turn, the controller evaluates the current draft, decides whether to stop or continue, and, if needed, selects the next agent for further refinement\. We formulate this process as a finite\-horizon Markov Decision Process \(MDP\) with explicit agent\-utilization constraints, design a composite reward for controller decisions across turns, and optimize the controller via policy gradients under a Lagrangian\-relaxed objective\. Extensive experiments across multiple heterogeneous multi\-agent systems and seven reasoning benchmarks show that our method consistently outperforms state\-of\-the\-art baselines and substantially narrows the gap to the strongest agent, while using it for fewer than 25% of total calls\.

## Towards Principled Fine\-Grained MoE Expert Pruning via Pseudo\-Boolean Approximation

**Authors:** Zongfang Liu; Ziheng Cheng; Shengkun Tang; Jinghui Zhang; Weijie Wang; Zhiqiang Shen; Xin Yuan

**ID:** 155677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3mjFgM0ciF>) | [PDF](<https://openreview.net/pdf?id=3mjFgM0ciF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155677>)

Mixture\-of\-Experts \(MoE\) language models improve parameter efficiency by activating only a small subset of experts per token, but all experts must still be stored at inference time, making memory a key deployment bottleneck\. Expert pruning is therefore a practical post\-training compression strategy, but existing methods face a fundamental tension: search\-based approaches attempt to capture expert interaction effects through joint optimization, yet become intractable for modern fine\-grained MoE models; score\-based approaches, by contrast, ignore such effects, but remain efficient and often surprisingly effective\. To understand this tension, we formulate expert pruning as a constrained pseudo\-Boolean optimization problem and empirically analyze the interaction effects induced by pruning\. Our results show that cross\-layer interaction effects are relatively more important, since pruning earlier layers changes the hidden\-state distribution for later ones, whereas within\-layer effects are often well approximated by additive singleton damages\. Based on this observation, we propose \\textbf\{MoE\-PBA\}, a prefix\-conditioned pruning method that prunes layers sequentially under the hidden states produced by the already\-pruned prefix\. Across four representative fine\-grained MoE language models with distinct architectures and parameter scales ranging from 7B to 30B, MoE\-PBA achieves a substantially better accuracy\-\-efficiency trade\-off than search\-based methods and outperforms the strong score\-based baseline on diverse downstream benchmarks\.

## Self\-Programmed Execution for Language\-Model Agents

**Authors:** Luke J O&amp;amp;\#x27;Connor

**ID:** 155631 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=47M69IISIM>) | [PDF](<https://openreview.net/pdf?id=47M69IISIM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155631>)

_Abstract unavailable from the accessible public sources._

## DRAMA: Dissecting Attention Redundancy for Accelerating Multimodal Diffusion Large Language Models

**Authors:** Yi\-Hsin \(Cindy\) Hung; Fangfu Liu; Shao\-Yuan Lo; Chu\-Song Chen

**ID:** 149812 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nAlvbSXW7z>) | [PDF](<https://openreview.net/pdf?id=nAlvbSXW7z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149812>)

Multimodal diffusion large language models \(dLLMs\) generate text through iterative masked denoising with bidirectional attention, offering a compelling alternative to autoregressive vision\-language modeling\. However, each denoising step requires a full forward pass over long multimodal sequences in which visual tokens dominate the sequence length, and a fixed step budget further compounds this quadratic per\-step cost\. Existing inference acceleration approaches for multimodal dLLMs characterize attention redundancy implicitly, motivating heuristic designs from isolated attention visualizations rather than principled analysis\. We close this gap with DRAMA, a training\-free acceleration framework grounded in a systematic dissection of attention redundancy in multimodal dLLMs\. By probing attention tensors along spatial and temporal axes, we reveal two persistent redundancy structures: \(i\) attention mass consistently concentrates on a sparse subset of visual tokens, and \(ii\) attention distributions rapidly stabilize across denoising steps after an initial formation phase\. These findings motivate two complementary mechanisms: Spatial\-Redundancy\-Aware Visual Token Pruning \(SVTP\) and Sufficiency\-Guided Adaptive Stopping \(SGAS\)\. Together, DRAMA achieves an average $18\.67\\times$ inference speedup across six vision\-language benchmarks without training, architectural modification, or attention caching, while maintaining competitive accuracy\. Our results establish a principled and strong acceleration baseline for multimodal dLLM inference\.

## When is Warmstarting Effective for Scaling Language Models?

**Authors:** Neeratyoy Mallik; Maciej Janowski; Johannes Hog; Herilalaina Rakotoarison; Josif Grabocka; Frank Hutter; Aaron Klein

**ID:** 152041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VyDwjNRtd2>) | [PDF](<https://openreview.net/pdf?id=VyDwjNRtd2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152041>)

Model growth from a given checkpoint aims to accelerate training of a larger model, offering potential resource savings\. Despite recent interest, warmstarting has seen limited practical adoption in large\-scale training\. We attribute this to two underexplored factors: \(1\) an overemphasis on preserving the smaller model's performance at initialization, which constrains operator design for new architectures, and \(2\) insufficient analysis of how growth interacts with hyperparameters and scaling behavior, compounded by inconsistent growth factors across the literature\.  We show that preserving the base model's initial post\-growth performance is not necessary for strong final performance, and that simple, architecture\-agnostic growth strategies can outperform more complex warmstarting operators\. Crucially, we empirically identify an upper bound on the growth factor $g$ beyond which training from scratch is more efficient\. We observe this across multiple ablation setups\.  Notably, this limit is also present, but unreported, in prior published results\. Across our experiments on dense MLPs and dense language models, we find that a $2\\times$ growth factor is the most reliable in yielding convergence speedups, with gains most pronounced under $20$ tokens/parameter token budgets and diminishing as budget increases\. We fit scaling laws over these observations to provide predictive guidance for practitioners deciding when and how much to grow\. Together, our analysis provides practical guidelines and empirical limits for model growth\.

## Why Speculative Decoding Works Better Than Predicted on Sparse MoE Models

**Authors:** Ekagra Ranjan; Komal Teru; Bharat Venkitesh; Acyr Locatelli

**ID:** 150811\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150811

[Paper](<https://openreview.net/forum?id=fC3FzfodMG>) | [PDF](<https://openreview.net/pdf?id=fC3FzfodMG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150811>)

Speculative decoding \(SD\) accelerates autoregressive inference by leveraging the memory bound nature of decoding, verifying multiple draft tokens in a single forward pass\. For mixture\-of\-experts \(MoE\) models, prior work predicts a concave speedup\-batch size relationship, with gains peaking at intermediate batch sizes due to expert saturation\. We evaluate this across 10 sparse MoE models \(30B\-1T parameters, 8\-512 experts\) and find recent fine\-grained models break this trend, showing higher speedup at low batch size\. We find verification cost is governed not only by activated expert weight, but also by temporal overlap across draft tokens and GPU execution dynamics\. At low batch size, fine\-grained MoE layers run faster than expected\. Small per\-expert weights and small per\-token activated parameter footprint leave bandwidth underutilized and yield higher L2 cache hit rates\. Across draft tokens, routing overlap further reduces the unique experts activated during verification relative to independence assumptions\. We model this effect using a maximum\-entropy Iterative Proportional Fitting \(IPF\) framework that predicts unique expert counts from routing\-overlap statistics with less than 4\\% error, and reproduces observed speedup curves from synthetic routing\.

## Reasoning as Compression: Unifying Budget Forcing via the Conditional Information Bottleneck

**Authors:** Fabio Valerio Massoli; Andrey Kuzmin; Arash Behboodi

**ID:** 148496\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148496

[Paper](<https://openreview.net/forum?id=xN22FIniMr>) | [PDF](<https://openreview.net/pdf?id=xN22FIniMr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148496>)

CoT prompting improves LLM accuracy on complex tasks but often increases token usage and inference cost\. Existing "Budget Forcing" methods reduce cost via fine\-tuning with heuristic length penalties, suppressing both essential reasoning and redundant filler\. We recast efficient reasoning as a lossy compression problem under the IB principle, and identify a key theoretical gap when applying naive IB to transformers: attention violates the Markov property between prompt, reasoning trace, and response\. To resolve this issue, we model CoT generation under the CIB principle, where the reasoning trace $Z$ acts as a computational bridge that contains only the information about the response $Y$ that is not directly accessible from the prompt $X$\. This yields a general Reinforcement Learning objective: maximize task reward while compressing completions under a prior over reasoning traces, subsuming common heuristics \(e\.g\., length penalties\) as special cases \(e\.g\., uniform priors\)\. In contrast to naive token\-counting approaches, we introduce a semantic prior that measures token cost by surprisal under a language model\.  Crucially, the prior is queried only for token\-level log\-probabilities, adding negligible overhead to the training loop\. Empirically, our CIB objective prunes reasoning redundancy while preserving fluency and logic, improving accuracy at moderate compression and enabling aggressive compression with minimal accuracy drop\. These gains generalize across model families and task domains, confirming CIB as a domain\-agnostic CoT compression framework\.

## Forecasting Downstream Performance of LLMs With Proxy Metrics

**Authors:** Arkil Patel; Siva Reddy; Marius Mosbach; Dzmitry Bahdanau

**ID:** 152033\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152033

[Paper](<https://openreview.net/forum?id=W2xeiyOmWL>) | [PDF](<https://openreview.net/pdf?id=W2xeiyOmWL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152033>)

Progress in language model development is often driven by comparative decisions: which architecture to adopt, which pretraining corpus to use, or which training recipe to apply\.  Making these decisions well requires reliable performance forecasts, yet the two commonly used signals are fundamentally limited\.  Cross\-entropy loss is poorly aligned with downstream capabilities, and direct downstream evaluation is expensive, sparse, and often uninformative at early training stages\.  Instead, we propose to construct proxy metrics by aggregating token\-level statistics, such as entropy, top\-k accuracy, and expert token rank, from a candidate model's next token distribution over expert\-written solutions\. Across three settings, our proxies consistently outperform loss\- and compute\-based baselines: 1\) For cross\-family model selection, they rank a heterogeneous population of reasoning models with mean Spearman $\\rho = 0\.81$ \(vs\. $\\rho = 0\.36$ for cross\-entropy loss\); 2\) For pretraining data selection, they reliably rank 25 candidate corpora for a target model at roughly $10\{,\}000\\times$ less compute than direct evaluation, pushing the Pareto frontier beyond existing methods; and 3\) for training\-time forecasting, they extrapolate downstream accuracy across an $18\\times$ compute horizon with roughly half the error of existing alternatives\.  Together, these results suggest that expert trajectories are a broadly useful source of signal for assessing model capabilities, enabling reliable performance forecasting throughout the model development lifecycle\.

## Large Language Models as Graph Computational Solvers via Topology\-aware Residual Attention

**Authors:** Wei Zhuo; Siqiang Luo

**ID:** 149081\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149081

[Paper](<https://openreview.net/forum?id=t1V4p1bOen>) | [PDF](<https://openreview.net/pdf?id=t1V4p1bOen>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149081>)

_Abstract unavailable from the accessible public sources._

## AdaKVQ: Adaptive Mixed\-Precision KV Cache Quantization For Efficient Reasoning Models

**Authors:** Tao Zhang; Yun Dai; Ziqian Zeng

**ID:** 153261\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153261

[Paper](<https://openreview.net/forum?id=MaITgepVoU>) | [PDF](<https://openreview.net/pdf?id=MaITgepVoU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153261>)

Large Reasoning Models \(LRMs\) rely on extensive Chain\-of\-Thought generation but suffer from memory bottlenecks due to linear Key\-Value \(KV\) cache growth\. While low\-bit quantization offers a potential solution, we identify that current static quantization strategies suffer from severe degradation on complex reasoning tasks at extreme bit\-widths\. Notably, this accuracy drop is accompanied by increased generation length, which ironically limits the intended efficiency gains\. We attribute this performance collapse to the fact that static quantization methods are insufficiently flexible to meed dynamic demands of precise long\-range retrieval\. Utilizing Average Attention Distance \(AAD\) to quantify retrieval patterns, we find that the attention patterns in shallow layers exhibit strong locality, whereas that in deep layers demonstrate intensive long\-range dependencies\. Furthermore, deep layers have fluctuating AAD values across token positions\. Based on above findings, we propose AdaKVQ, an adaptive mixed\-precision quantization framework that modulates the bit\-width allocation guided by the dynamic demands of long\-range context retrieval in each layer\. Extensive experiments on complex reasoning benchmarks with Llama\-3\.1 and Qwen2\.5 demonstrate that AdaKVQ consistently outperforms state\-of\-the\-art baselines, achieving performance comparable to full\-precision models\.

## GeoCurv\-TTT: Geometry\-Aware Deformation Restoration for 3D Test\-Time Training

**Authors:** Sina Ghofrani Majelan; M\. O Ahmad; M\.N\.S\. Swamy

**ID:** 154164\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154164

[Paper](<https://openreview.net/forum?id=FnOlkLApNW>) | [PDF](<https://openreview.net/pdf?id=FnOlkLApNW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154164>)

Recent 3D point cloud classification networks suffer severe performance degradation when encountering real\-world distribution shifts\. To address this, we propose GeoCurv\-TTT, a novel geometry\-aware Test\-Time Training \(TTT\) framework based on deformation restoration\. Unlike existing methods that rely on geometry\-agnostic masking or severe skeletal abstraction, our approach selectively deforms low\-curvature planar regions while strictly preserving high\-curvature structural anchors\. This curvature\-guided physical displacement generates targeted  out\-of\-distribution \(OOD\) samples, forcing the network to learn deeply robust, topology\-aware representations during pre\-training\. At inference, GeoCurv\-TTT adapts to novel environments through two strategies: Standard TTT, which utilizes a self\-supervised restoration objective to adapt to isolated instances, and Online TTT, which achieves real\-time, backpropagation\-free adaptation across streaming data by exclusively updating batch normalization statistics\. Extensive experiments on the ModelNet40\-C, ShapeNet\-C, and ScanObjectNN\-C benchmarks demonstrate that GeoCurv\-TTT establishes new state\-of\-the\-art \(SOTA\) performance for 3D domain adaptation, outperforming existing methodologies in accuracy, computational efficiency, and adaptation time\.

## Enhancing Tabular Learners with Context\-Aware Semantic Embeddings

**Authors:** Günther Schindler; Maximilian Schambach; Johannes Höhne

**ID:** 149526\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149526

[Paper](<https://openreview.net/forum?id=pV2wVDrTqK>) | [PDF](<https://openreview.net/pdf?id=pV2wVDrTqK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149526>)

While modern tabular learners excel at capturing statistical patterns, they frequently operate in a semantic vacuum, treating textual features as discrete symbols, ignoringing the rich semantics inherent in feature names or cell entries\.  We propose CASE \(Context\-Aware Semantic Embeddings\), a novel framework that bridges the gap between the semantic understanding of Large Language Models \(LLMs\) and the statistical capabilities of tabular learners\.  Unlike existing methods that embed rows in isolation, CASE utilizes a contextualization strategy:  we pre\-fill the KV cache of a custom\-trained Gemma\~3\-based Tabular Language Model with a representative sample of rows to establish a persistent anchor of the dataset’s semantics\.  This ensures that generated row embeddings are dynamically contextualized, resolving semantic ambiguities and anchoring representations in domain\-specific context\.  Our experiments across several benchmarks \(CARTE, TextTab, and TabArena\) demonstrate that CASE significantly improve performance of tabular learners \-\- particularly in low\-data regimes and on semantically rich datasets \-\- setting a new state of the art when combined with recent tabular in\-context learners\.  Inference code and model checkpoints will be made publicly available\.

## B2P\-Corr: Batch\-to\-Population Gradient Estimators for Non\-Decomposable Correlation Losses

**Authors:** Jingquan Yan; Yuwei Miao; Peiran Yu; Junzhou Huang

**ID:** 154786 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B0h745L8OJ>) | [PDF](<https://openreview.net/pdf?id=B0h745L8OJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154786>)

Correlation metrics such as the Pearson Correlation Coefficient \(PCC\) and Concordance Correlation Coefficient \(CCC\) are standard regression metrics and learning objectives, but their non\-decomposable nature poses a challenge for stochastic optimization\. Since these metrics depend on dataset\-level moments \(mean, variance, covariance\), naive mini\-batch training with local statistics yields biased, high\-variance gradients whose expectation does not align with the population gradient\. To bridge this "batch\-to\-population'' \(B2P\) gap, we propose \*\*B2P\-Corr\*\*, a novel framework that transforms correlation objectives into decomposable pseudo\-losses driven by lightweight global "moment sketches''\. We introduce two efficient variants: \*\*B2P\-EMA\*\*, which utilizes exponential moving averages and stop\-gradient operators to ensure asymptotic gradient tracking with $O\(B\)$ cost \($B$ is batch size\); and \*\*B2P\-U\*\*, which uses sampled cross\-batch U\-statistic estimators and a reservoir\-based stabilization with an $O\(B\)$ implementation\. Theoretically, we quantify the $O\(B^\{\-1\}\)$ bias of naive mini\-batch optimization, prove a moving\-target tracking result for B2P\-EMA under a fast\-sketch / slow\-parameter regime, and provide an idealized control\-variate analysis for B2P\-U\. Experiments on two synthetic and three real\-world datasets demonstrate B2P\-Corr achieves stable optimization and higher correlation than naive mini\-batch optimization with negligible overhead\.

## Self\-Programmed Execution for Language\-Model Agents

**Authors:** Luke J O&amp;amp;\#x27;Connor

**ID:** 155631\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155631

[Paper](<https://openreview.net/forum?id=47M69IISIM>) | [PDF](<https://openreview.net/pdf?id=47M69IISIM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155631>)

_Abstract unavailable from the accessible public sources._

## Why Speculative Decoding Works Better Than Predicted on Sparse MoE Models

**Authors:** Ekagra Ranjan; Komal Teru; Bharat Venkitesh; Acyr Locatelli

**ID:** 150811\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150811

[Paper](<https://openreview.net/forum?id=fC3FzfodMG>) | [PDF](<https://openreview.net/pdf?id=fC3FzfodMG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150811>)

Speculative decoding \(SD\) accelerates autoregressive inference by leveraging the memory bound nature of decoding, verifying multiple draft tokens in a single forward pass\. For mixture\-of\-experts \(MoE\) models, prior work predicts a concave speedup\-batch size relationship, with gains peaking at intermediate batch sizes due to expert saturation\. We evaluate this across 10 sparse MoE models \(30B\-1T parameters, 8\-512 experts\) and find recent fine\-grained models break this trend, showing higher speedup at low batch size\. We find verification cost is governed not only by activated expert weight, but also by temporal overlap across draft tokens and GPU execution dynamics\. At low batch size, fine\-grained MoE layers run faster than expected\. Small per\-expert weights and small per\-token activated parameter footprint leave bandwidth underutilized and yield higher L2 cache hit rates\. Across draft tokens, routing overlap further reduces the unique experts activated during verification relative to independence assumptions\. We model this effect using a maximum\-entropy Iterative Proportional Fitting \(IPF\) framework that predicts unique expert counts from routing\-overlap statistics with less than 4\\% error, and reproduces observed speedup curves from synthetic routing\.

## EMO: Pretraining Mixture of Experts for Emergent Modularity

**Authors:** Ryan Wang; Akshita Bhagia; Sewon Min

**ID:** 151720 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YavQQZ3cUM>) | [PDF](<https://openreview.net/pdf?id=YavQQZ3cUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151720>)

Large language models are typically deployed as monolithic systems, requiring the full model even when applications need only a narrow subset of capabilities, e\.g\., code, math, or domain\-specific knowledge\. Mixture\-of\-Experts \(MoEs\) seemingly offer a potential alternative by activating only a subset of experts per input, but in practice, restricting inference to a subset of experts for a given domain leads to severe performance degradation\. This limits their practicality in memory\-constrained settings, especially as models grow larger and sparser\. We introduce EMO, an MoE designed for modularity—the independent use and composition of expert subsets—without requiring human\-defined priors\. Our key idea is to encourage tokens from similar domains to rely on similar experts\. Since tokens within a document often share a domain, EMO restricts them to select experts from a shared pool, while allowing different documents to use different pools\. This simple constraint enables coherent expert groupings to emerge during pretraining using document boundaries alone\. We pretrain a 1B\-active, 14B\-total EMO on 1T tokens\. As a full model, it matches standard MoE performance\. Crucially, it enables selective expert use: retaining only 25\\% \(12\.5\\%\) of experts incurs just a 1\\% \(3\\%\) absolute drop, whereas standard MoEs break under the same setting\. We further find that expert subsets in EMO specialize at semantic levels \(e\.g\., domains such as math or code\), in contrast to the low\-level syntactic specialization observed in standard MoEs\. Altogether, our results demonstrate a path toward modular, memory\-efficient deployment of large, sparse models and open new opportunities for composable architectures\.

## A Simple Unigram Cross\-Entropy Lens on the Lexical Imprint of Pre\-training Data

**Authors:** Jeonghoon Kim; Woojin Chung; Woomin Song; Cheonbok Park; Nako Sung; Jinwoo Shin

**ID:** 155069\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155069

[Paper](<https://openreview.net/forum?id=8hN2Bcw0x2>) | [PDF](<https://openreview.net/pdf?id=8hN2Bcw0x2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155069>)

_Abstract unavailable from the accessible public sources._

## EMO: Pretraining Mixture of Experts for Emergent Modularity

**Authors:** Ryan Wang; Akshita Bhagia; Sewon Min

**ID:** 151720\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151720

[Paper](<https://openreview.net/forum?id=YavQQZ3cUM>) | [PDF](<https://openreview.net/pdf?id=YavQQZ3cUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151720>)

Large language models are typically deployed as monolithic systems, requiring the full model even when applications need only a narrow subset of capabilities, e\.g\., code, math, or domain\-specific knowledge\. Mixture\-of\-Experts \(MoEs\) seemingly offer a potential alternative by activating only a subset of experts per input, but in practice, restricting inference to a subset of experts for a given domain leads to severe performance degradation\. This limits their practicality in memory\-constrained settings, especially as models grow larger and sparser\. We introduce EMO, an MoE designed for modularity—the independent use and composition of expert subsets—without requiring human\-defined priors\. Our key idea is to encourage tokens from similar domains to rely on similar experts\. Since tokens within a document often share a domain, EMO restricts them to select experts from a shared pool, while allowing different documents to use different pools\. This simple constraint enables coherent expert groupings to emerge during pretraining using document boundaries alone\. We pretrain a 1B\-active, 14B\-total EMO on 1T tokens\. As a full model, it matches standard MoE performance\. Crucially, it enables selective expert use: retaining only 25\\% \(12\.5\\%\) of experts incurs just a 1\\% \(3\\%\) absolute drop, whereas standard MoEs break under the same setting\. We further find that expert subsets in EMO specialize at semantic levels \(e\.g\., domains such as math or code\), in contrast to the low\-level syntactic specialization observed in standard MoEs\. Altogether, our results demonstrate a path toward modular, memory\-efficient deployment of large, sparse models and open new opportunities for composable architectures\.

## Aligning Language Model Benchmarks with Pairwise Preferences

**Authors:** Marco Gutierrez; Xinyi Leng; Hannah Chen; Jonathan Richard Schwarz; Ahmed Alaa; Tom Hartvigsen

**ID:** 139753 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6gX1eKoDVX>) | [PDF](<https://openreview.net/pdf?id=6gX1eKoDVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139753>)

_Abstract unavailable from the accessible public sources._

