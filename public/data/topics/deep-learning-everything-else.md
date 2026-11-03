# Deep Learning / Everything Else

深度学习 / 其他深度学习

41 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Disentangling Optimization Geometry via Hierarchical Polar Adapters for Class\-Incremental Learning

**Authors:** Dat Q Mac; Thanh Hai Dang; Duc\-Trong Le; Quynh\-Trang Pham Thi

**ID:** 154249 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBAriogGVS>) | [PDF](<https://openreview.net/pdf?id=FBAriogGVS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154249>)

Deep neural networks suffer from catastrophic forgetting when learning on sequence tasks because standard adaptation mechanisms update a monolithic set of Cartesian weights, inherently entangling feature intensity with spatial displacement and destructively overwriting ancestral representations\. Inspired by the brain’s multi\-timescale consolidation and frequency\-aware memory dynamics, we propose HiPo\(Hierarchical Polar Adapters\), a novel continual learning framework that fundamentally redefines how neural knowledge is parameterized, stored, and consolidated\. First, HiPo projects token representations into a complex orthogonal Fourier basis and explicitly parametrizes the adapter weights in polar coordinates, decoupling feature intensity from geometric correlation to probabilistically isolate task updates\. Second, we embed these polar weights within a multi\-tiered hierarchical memory stack, functionally separating a highly plastic working memory from a deep, stabilizing long\-term memory\. Finally, an adaptively thresholded snapshot Fisher mechanism evaluates parameter criticality in the decoupled polar space\. By executing mathematically safe, Cartesian\-invariant knowledge transfers into the deep memory tiers, HiPo safely hollows out the working memory, paralyzing obsolete gradients and preserving plasticity without inducing structural distortion\. Extensive experiments across standard CIL benchmarks demonstrate that HiPo establishes a highly resilient optimization manifold, achieving state\-of\-the\-art performance and exceptional geometric stability, particularly under severe out\-of\-distribution shifts\.

## Backdoor Channels Hidden in Latent Space: Cryptographic Undetectability in Modern Neural Networks

**Authors:** Marte Eggen; Eirik Reiestad; Kristian Gjøsteen; Inga Strümke

**ID:** 153524 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KiUfU8ElOx>) | [PDF](<https://openreview.net/pdf?id=KiUfU8ElOx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153524>)

Recent cryptographic results establish that neural networks can be backdoored such that no efficient algorithm can distinguish them from a clean model\. These guarantees, however, have been confined to stylised architectures of limited practical relevance, leaving open whether comparable undetectability extends to modern, end\-to\-end trained networks\. We construct such an attack mechanism for state\-of\-the\-art architectures, closely aligned to the cryptographic notion of undetectability, by identifying backdoor channels as learned latent directions, and show that the question of undetectability reduces to a hypothesis test between two unknown distributions over model parameters, which we conjecture to be intractable in practice\. The consequence of this reframing is significant: if exploitable channels within a network's latent space are statistically indistinguishable from naturally learned directions, an attacker need not introduce foreign structure but can instead exploit the geometry the network already possesses\. Demonstrating the approach on ResNet and Vision Transformer architectures trained on standard image classification datasets, the attack achieves both consistently high success rates with negligible clean accuracy degradation, and resists a comprehensive suite of post\-training defences, none of which neutralise the backdoor without rendering the model unusable\. Our results establish that cryptographic backdoors need not be artefacts requiring exotic architectures or artificial constructions, but identifiable as latent properties inherent to the geometry of learned representations\.

## Distributional Alignment as a Criterion for Designing Task Vectors in In\-Context Learning

**Authors:** Jihoon Kwon; Jiwon Choi; Jy\-yong Sohn

**ID:** 152916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRjQ0E5e0e>) | [PDF](<https://openreview.net/pdf?id=PRjQ0E5e0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152916>)

In\-context learning \(ICL\) allows large language models \(LLMs\) to adapt to new tasks through demonstrations, yet it suffers from escalating inference costs as context length increases\. While task vectors offer a promising alternative by compressing demonstrations into compact hidden\-state representations, their quality has been evaluated only through downstream task accuracy\. This indirect criterion provides limited insight into how to design more effective task vector extraction methods\. In this paper, we posit that inference using task vectors should align their predictive distribution with that of ICL\. To quantify this, we introduce $d\_\{\\text\{NTP\}\}$, a metric that measures the discrepancy in next\-token probabilities between task vector\-based and ICL\-based inference\. Our empirical analysis reveals that $d\_\{\\text\{NTP\}\}$ serves as a performance proxy, exhibiting a strong negative correlation with downstream accuracy\. Motivated by this, we develop Linear Task Vector \(LTV\), a method designed to minimize $d\_\{\\text\{NTP\}\}$ via a closed\-form linear mapping that estimates demonstration effects through regression\. Across eight classification benchmarks and five LLMs, LTV consistently outperforms existing task vector baselines, improving average accuracy by 9\.2\\% while reducing inference latency\. We further show that LTV outperforms the baselines on regression tasks\. Moreover, we investigate the transferability of LTV across different model scales; an aspect that has remained nascent in task vector research\. Specifically, we empirically show that task vectors from a larger model can enhance a smaller model's performance by 6\.4\\%, suggesting a new utility for extracted task representations\.

## The Quantization Benefits of Residual\-Free Transformers

**Authors:** Yiping Ji; Mahalakshmi Sabanayagam; Peyman Moghadam; Hemanth Saratchandran; Simon Lucey

**ID:** 156016 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=18XtiYe9Gk>) | [PDF](<https://openreview.net/pdf?id=18XtiYe9Gk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156016>)

Large\-scale transformer training and deployment are increasingly constrained by the transfer of activations, gradients, and optimizer states across accelerators\. Low\-bit quantization offers a natural remedy, but transformer activations are often heavy\-tailed and outlier\-dominated, making simple quantization highly lossy\. We show that this difficulty is not only a property of the quantizer, but also of the architecture\. Specifically, residual connections can drive transformer activations away from Gaussianity during training\. Using controlled comparisons between residual and residual\-free transformers, we demonstrate that this effect leads to substantially higher quantization error and accuracy degradation at low precision in residual models\. We explain the phenomenon through an excess kurtosis analysis, showing that residual mixing can amplify non\-Gaussianity, whereas dense mixing in residual\-free contracts non\-Gaussianity\. We then show that residual\-free transformers can be made trainable using orthogonal initialization, spectral or second\-order optimization, and depth\-aware scaling of attention temperature\. In language tasks, while there is a small drop in full precision performance, these models retain near\-Gaussian activations and exhibit significantly improved robustness to low\-bit quantization\. Our results identify an accuracy\-compressibility trade\-off in transformer design and motivate architecture\-level approaches to quantization\-friendly foundation models\.

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

**ID:** 152714 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qv0Lwp7s5A>) | [PDF](<https://openreview.net/pdf?id=Qv0Lwp7s5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152714>)

Looped Transformers \-\-\- which repeatedly apply a shared transformer block \-\-\- are an architecturally natural fit for variable\-length algorithmic tasks\. Although they can exhibit strong length generalization beyond the length of training sequences, this behavior is brittle, yielding high out\-of\-distribution \(OOD\) variance, even across well\-performing in\-distribution solutions\. We trace this variance to the spurious correlation in simple algorithmic tasks between sequence length and number of loops\. Introducing stochasticity into the number of loops during training sharply reduces OOD variance and stabilizes predictions across inference\-time loop counts\. To improve upon heuristic randomization schemes, we further analyze RL\-Halting as a learned stochastic schedule and find that it generally improves the accuracy\-\-stability trade\-off\. Across binary addition, Dyck\-1, Unique Set, and Copy, learned stochastic stopping often improves this trade\-off but can also stabilize a suboptimal computation\. Our work suggests that “when to stop” should be treated as a training\-time design choice, not merely an inference\-time computation\-allocation rule\.

## RevengeBench: Reverse Engineering Code\-Space Policies from Behavioral Experiments

**Authors:** Babak Rahmani; Sebastian Dziadzio; Joschka Strüber; Sergio Hernández\-Gutiérrez; Matthias Bethge

**ID:** 180254 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LYEn3AWhUp>) | [PDF](<https://openreview.net/pdf?id=LYEn3AWhUp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/180254>)

For most of scientific history, researchers studying behavior could only infer hidden mechanisms from outward actions—an inverse problem that becomes more tractable when observation is augmented by targeted intervention\. We pose a computational analogue: given only behavioral traces of an agent in a game environment, can a learner reconstruct the underlying decision program as executable code, and how much does this reconstruction improve with the ability to design controlled experiments? We introduce RevengeBench, a benchmark of 75 LLM generated, Elo\-calibrated policies across five game environments, drawn from CodeClash tournament trajectories\. The learner observes the hidden target policy play against sampled opponents and designs behavioral probes in the form of custom opponent policies that elicit informative behavior\. It then submits an executable hypothesis, which is evaluated using continuous action\-distance metrics\. We further validate that recovered code carries informative signal in downstream player\-versus\-player tournaments\. Across twelve frontier LLMs, recovery quality varies substantially \(34–72\\% of initial distance closed\), with reconstructed policies yielding measurable competitive advantage, particularly for weaker models that otherwise struggle to design effective counter\-strategies\. Our benchmark positions behavioral recovery of programmatic policies as a tractable inverse problem in code\-space, opening a path to opponent modeling, policy interpretability, and the broader question of inferring latent mechanisms from observations\.

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

**ID:** 155565 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4doufzy1hI>) | [PDF](<https://openreview.net/pdf?id=4doufzy1hI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155565>)

Multimodal recommendation leverages item content, such as text, images, and audio signals, to complement sparse user\-item interactions\. Existing methods mainly combine content and collaborative signals at the representation level through graph propagation, feature fusion, or auxiliary alignment\. However, continuous item embeddings make semantic sharing implicit and provide limited support for transferring behavioral evidence through reusable semantic factors\. Discrete semantic codes offer explicit shared variables, but existing code\-based recommenders usually treat item\-code assignments as fixed outputs of pretrained quantizers, clustering algorithms, or frozen encoders, making the assignment mechanism insensitive to user behavior\. We propose \\textbf\{CASQRec\}, a \\textbf\{C\}ollaborative\-\\textbf\{A\}daptive \\textbf\{S\}emantic \\textbf\{Q\}uantization framework for multimodal recommendation\. CASQRec learns item\-code assignments as content\-inferable routing decisions supervised by collaborative behavior during training\. It constructs a semantic\-code graph, where fixed content\-derived RQ codes are graph nodes and item\-code edges are predicted from item content by a learnable prior router\. To make routing behavior\-aware while keeping item\-code routing independent of item\-side interaction history at inference time, CASQRec introduces a collaborative posterior teacher only during training and distills its assignment distributions into the content prior\. The resulting prior\-induced user\-item\-code graph allows collaborative evidence to be shared through discrete semantic codes while keeping item routing content\-based\. Experiments on three public datasets show that CASQRec consistently outperforms representative multimodal recommendation baselines\. The code resources are available in the supplementary materials\.

## Depth through Recurrence: Towards Ultra\-Efficient On\-Device ASR

**Authors:** Chen Feng; Tianyi Xu; Yicheng Lin; Jay Zhuo; Ramchalam Kinattinkara Ramakrishnan; Zhaocong Yuan; Chenzheng Su; Xiaopeng Zhang

**ID:** 149074 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t4zfR92Bzz>) | [PDF](<https://openreview.net/pdf?id=t4zfR92Bzz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149074>)

Modern automatic speech recognition \(ASR\) systems have achieved remarkable accuracy by scaling model depth and capacity, but at the cost of substantial memory and computation\. On edge devices where ASR is often most needed, such as watches and glasses, deploying such large models is infeasible due to extremely constrained resources\. This raises a fundamental question: can we achieve high representational power in deep ASR models without scaling up parameterization? In this work, we revisit the role of depth and identify layer\-wise representational dynamics, in which most layers learn functionally similar transformations\. Motivated by this insight, we propose a block\-recurrent ASR architecture that replaces parameterized depth with a small set of recurrent blocks, each consisting of weight\-shared layers, thereby preserving effective depth while drastically reducing model size\. Through representation\-guided grouping and knowledge distillation, block\-recurrent models retain the accuracy of large reference models while using an order of magnitude fewer parameters\. Across Open ASR Leaderboard benchmarks, a model with only two shared blocks recovers $97\.4$% of the accuracy of large models on average\. The compact backbone further enables efficient on\-device personalization through lightweight MoE\-LoRA adaptation, allowing user\-specific models to match or surpass the accuracy of general\-purpose ASR systems with significantly lower inference cost\. Together, these results show that high\-quality ASR can be achieved without large parameterization, and that structured recurrence provides a principled path towards ultra\-compressed, high\-efficiency, and personalized speech recognition on the edge\.

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

## Safety Reconstructed: Generative Modeling via Masked Diffusion Builds Strong Safety Guardrails

**Authors:** Gert Lek; Abele Mălan; Chaoyi Zhu; Pin\-Yu Chen; Robert Birke; Lydia Chen

**ID:** 149672 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIxNRF9huQ>) | [PDF](<https://openreview.net/pdf?id=oIxNRF9huQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149672>)

Guard models are the last line of defense between a language model and a harmful output, yet their training objective is surprisingly narrow\. Existing guards learn to predict a single verdict token from a conversational context, concentrating supervision on a single target\. The consequences are structural: models latch onto shortcut features, are overconfident, and remain sensitive to where safety evidence appears in the sequence rather than its role in the full context\. We propose a different framing\. Rather than predicting a label from text, our $\\textbf\{LLaDA Guard\}$ asks which label better explains the text: scoring the prompt or response under each label hypothesis and classifying based on their difference\. This shifts supervision to every token in the moderated region, forcing the model to account for full content rather than its most discriminative fragments\. We instantiate this idea with a masked diffusion language model, fine\-tuning LLaDA\-8B\-Instruct with a class\-conditional reconstruction objective using LoRA and requiring no architectural changes beyond the base model\. LLaDA Guard leads on average rank against discriminative baselines trained on stronger backbones across seven held\-out safety benchmarks, while exhibiting substantially better confidence calibration \(ECE 0\.0875 vs\. 0\.1384 for Qwen3Guard\), less over\-defense on benign prompts with $\\texttt\{unsafe\}$\-looking cues, and less prompt leakage when moderating responses\. Its generative nature further enables token\-level risk localization as a natural byproduct, yielding a pipeline for rewriting $\\texttt\{unsafe\}$ prompts into $\\texttt\{safe\}$ equivalents without additional training and achieving a 60\.7% average conversion\-to\-$\\texttt\{safe\}$ rate\. The weights and code for reproduction are available at the following \[anonymized repository\]\(https://anonymous\.4open\.science/r/LLaDA\-Guard2026\-B056/\)\.

## Learning Modular Addition with Auxiliary Modulus

**Authors:** Hanato Kikuchi; Ryosuke Masuya; Kazuhiko Kawamoto; Hiroshi Kera

**ID:** 154793 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AuqtRdsHrh>) | [PDF](<https://openreview.net/pdf?id=AuqtRdsHrh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154793>)

Learning parity functions, more general modular addition, is a challenging machine learning task due to its input sensitivity\.   A recent study substantially scaled modular addition learning in both the number of summands and the modulus\. Its key idea is to increase zeros in training sequences, reducing the effective number of summands and thus controlling training difficulty; however, this induces covariate shift between training and test input distributions\.   This study theoretically and empirically analyzes this side effect and proposes a covariate\-shift\-free method for modular addition\.   Specifically, we introduce an auxiliary modulus $Kq$ during training, which reduces wrap\-around frequency and problem difficulty while preserving the same input distribution across training and testing\.   Experiments show strong scalability and sample efficiency: even for large input length $N$, large modulus $q$, and small datasets\-\-\-where the sparse method fails to learn\-\-\-our method achieves equal or better match accuracy and relaxed $\\tau$\-accuracy\. For example, at $N=64$ and $q=974269$, our method trained on 100K samples achieves $97\.0\\%$ $\\tau$\-accuracy at $\\tau=0\.05$, while the sparse method achieves only $9\.5\\%$ with the same data size and $93\.9\\%$ even when extended to 1M samples\.

## Large Language Models as Graph Computational Solvers via Topology\-aware Residual Attention

**Authors:** Wei Zhuo; Siqiang Luo

**ID:** 149081 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t1V4p1bOen>) | [PDF](<https://openreview.net/pdf?id=t1V4p1bOen>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149081>)

Large language models increasingly serve as general\-purpose reasoning engines, yet they remain unreliable on graph computation tasks whose inputs are discrete, permutation\-equivalent, and algorithmic\. We propose TRACER, a post\-training framework that turns LLMs into native graph computational solvers\. Our central thesis is that graph computation failures arise from mismatches within the Transformer computation itself: token order obscures graph symmetries, self\-attention is biased toward textual proximity instead of graph topology, and autoregressive decoding weakly constrains algorithmic traces\. TRACER addresses these challenges at three coupled levels\. At the input level, we introduce permutation\-invariant graph encoding, which encourages the LLM to map different serialization variants of a graph to a shared internal graph representation, thereby preserving graph symmetries\. At the representation level, we enhance self\-attention with the Topology\-aware Residual Attention mechanism to inject graph topological signals into the attention kernel\. At the reasoning level, we employ process\-reward RL to encourage faithful execution of graph algorithmic traces\. Across linear\-time, polynomial\-time, and NP\-complete graph tasks, TRACER delivers substantial gains over baselines\. These results suggest that equipping LLMs with graph\-aware internal computation offers a practical path toward reliable neural solvers for structured algorithmic reasoning\. The code is anonymously available \[here\]\(https://anonymous\.4open\.science/r/TRACER\-2270\)\.

## Towards Principled Fine\-Grained MoE Expert Pruning via Pseudo\-Boolean Approximation

**Authors:** Zongfang Liu; Ziheng Cheng; Shengkun Tang; Jinghui Zhang; Weijie Wang; Zhiqiang Shen; Xin Yuan

**ID:** 155677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3mjFgM0ciF>) | [PDF](<https://openreview.net/pdf?id=3mjFgM0ciF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155677>)

Mixture\-of\-Experts \(MoE\) language models improve parameter efficiency by activating only a small subset of experts per token, but all experts must still be stored at inference time, making memory a key deployment bottleneck\. Expert pruning is therefore a practical post\-training compression strategy, but existing methods face a fundamental tension: search\-based approaches attempt to capture expert interaction effects through joint optimization, yet become intractable for modern fine\-grained MoE models; score\-based approaches, by contrast, ignore such effects, but remain efficient and often surprisingly effective\. To understand this tension, we formulate expert pruning as a constrained pseudo\-Boolean optimization problem and empirically analyze the interaction effects induced by pruning\. Our results show that cross\-layer interaction effects are relatively more important, since pruning earlier layers changes the hidden\-state distribution for later ones, whereas within\-layer effects are often well approximated by additive singleton damages\. Based on this observation, we propose \\textbf\{MoE\-PBA\}, a prefix\-conditioned pruning method that prunes layers sequentially under the hidden states produced by the already\-pruned prefix\. Across four representative fine\-grained MoE language models with distinct architectures and parameter scales ranging from 7B to 30B, MoE\-PBA achieves a substantially better accuracy\-\-efficiency trade\-off than search\-based methods and outperforms the strong score\-based baseline on diverse downstream benchmarks\.

## Consolidating Rewarded Perturbations for LLM Post\-Training

**Authors:** Zheyu Zhang; Shuo Yang; Gjergji Kasneci

**ID:** 153456 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L9ncjOTwgM>) | [PDF](<https://openreview.net/pdf?id=L9ncjOTwgM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153456>)

Post\-training of language models is commonly framed as a sample\-score\-update loop implemented by gradient descent\. A recent line of work, exemplified by RandOpt, relocates this loop to weight space, sampling Gaussian perturbations around a pretrained model and ensembling the top\-$K$ rewarded specialists at inference\. While competitive with PPO and GRPO under matched training compute, this prediction\-level ensemble incurs $K$ forward passes per test example and does not extend cleanly to free\-form generation\. We ask whether the rewarded population can instead be folded into a single deployable model, replacing the inference\-time ensemble with one consolidated update\. A split\-half analysis over 25 model\-task pairs reveals reproducible low\-rank structure in every case\. We turn this geometry into CoRP \(Consolidating Rewarded Perturbations\), a gradient\-free operator that combines reward\-weighted aggregation, compatibility\-aware reweighting, and a held\-out validation gate, with no gradient flowing through the language model\. Across five language models from $0\.5$B to $8$B and five tasks covering math, code, and creative writing, CoRP improves the base model by $8\.1$ points on average\. Using one tenth of RandOpt's perturbation budget, CoRP exceeds single\-inference RandOpt by $6\.5$ points and recovers more than half of the gain of the 50\-pass majority\-vote ensemble, at one forward pass per test example\.

## Self\-Programmed Execution for Language\-Model Agents

**Authors:** Luke J O&amp;amp;\#x27;Connor

**ID:** 155631 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=47M69IISIM>) | [PDF](<https://openreview.net/pdf?id=47M69IISIM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155631>)

At the heart of existing language model agents is a fixed orchestrator program which is responsible for the state transition between consecutive turns\. This paper introduces \\emph\{self\-programmed execution\} \(SPE\), an agent architecture in which the model completion is itself the orchestrator program, and the harness evaluates this program but does not impose its own orchestration policy\. I formalize this idea using agentic machines: an SPE state is one from which a model completion can load any state of an embedded copy of the machine, meaning that it is subject to no fixed turn\-to\-turn orchestration policy\. Realizing SPE in practice is nontrivial because the same data is both model context and executable program\. I therefore introduce \\textsc\{Spell\}, a Lisp\-based language in which programs can edit and re\-evaluate themselves, and effectful expressions like model invocations are structured such that re\-evaluating an edited program does not replay its side effects\. Experiments with existing models, not trained for SPE or \\textsc\{Spell\}, show that frontier models can operate in this regime and accomplish challenging agentic tasks\. These results demonstrate how an LM can act as an agent without any fixed orchestration policy, and they raise the question of what self\-orchestration strategies might be learned by a model trained for self\-programmed execution\.

## EMO: Pretraining Mixture of Experts for Emergent Modularity

**Authors:** Ryan Wang; Akshita Bhagia; Sewon Min

**ID:** 151720 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YavQQZ3cUM>) | [PDF](<https://openreview.net/pdf?id=YavQQZ3cUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151720>)

Large language models are typically deployed as monolithic systems, requiring the full model even when applications need only a narrow subset of capabilities, e\.g\., code, math, or domain\-specific knowledge\. Mixture\-of\-Experts \(MoEs\) seemingly offer a potential alternative by activating only a subset of experts per input, but in practice, restricting inference to a subset of experts for a given domain leads to severe performance degradation\. This limits their practicality in memory\-constrained settings, especially as models grow larger and sparser\. We introduce EMO, an MoE designed for modularity—the independent use and composition of expert subsets—without requiring human\-defined priors\. Our key idea is to encourage tokens from similar domains to rely on similar experts\. Since tokens within a document often share a domain, EMO restricts them to select experts from a shared pool, while allowing different documents to use different pools\. This simple constraint enables coherent expert groupings to emerge during pretraining using document boundaries alone\. We pretrain a 1B\-active, 14B\-total EMO on 1T tokens\. As a full model, it matches standard MoE performance\. Crucially, it enables selective expert use: retaining only 25\\% \(12\.5\\%\) of experts incurs just a 1\\% \(3\\%\) absolute drop, whereas standard MoEs break under the same setting\. We further find that expert subsets in EMO specialize at semantic levels \(e\.g\., domains such as math or code\), in contrast to the low\-level syntactic specialization observed in standard MoEs\. Altogether, our results demonstrate a path toward modular, memory\-efficient deployment of large, sparse models and open new opportunities for composable architectures\.

## A Simple Unigram Cross\-Entropy Lens on the Lexical Imprint of Pre\-training Data

**Authors:** Jeonghoon Kim; Woojin Chung; Woomin Song; Cheonbok Park; Nako Sung; Jinwoo Shin

**ID:** 155069 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8hN2Bcw0x2>) | [PDF](<https://openreview.net/pdf?id=8hN2Bcw0x2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155069>)

How much of zero\-shot benchmark accuracy is captured by word\-level alignment between a pre\-training corpus and the benchmark target? We study this question through word\-level unigram cross\-entropy \(UCE\), a tokenizer\-agnostic, model\-free measure of lexical alignment between a reference corpus and a target benchmark\. Likelihood training allocates probability mass according to the pre\-training corpus, and likelihood\-based zero\-shot evaluation partly reads out the lexical alignment between this mass and the benchmark target\. Cleanly tracing how the lexical imprint of pre\-training data scales with corpus\-\-benchmark alignment requires controlled from\-scratch pre\-training that varies corpus identity while holding the training recipe fixed\. Across this controlled sweep, spanning $11$ zero\-shot benchmarks, $4$ pre\-training corpora, and $3$ model scales, we find that corpus\-\-benchmark lexical alignment, UCE, consistently tracks zero\-shot accuracy on every benchmark, with corpora more aligned with the benchmark \(lower UCE\) achieving higher accuracy\. The same signal extends from measurement to control at finer scopes\. At the document level, strengthening the imprint by selecting training documents to maximize lexical alignment with the benchmark yields a data\-selection rule that improves accuracy over same\-size random sampling and an importance\-resampling baseline across sources and scales\. At the prompt level, matching the imprint per prompt by routing each prompt to the drafter whose domain corpus is most lexically aligned with it gives a training\-free routing rule for speculative decoding and improves throughput over a generalist\-drafter baseline\. Taken together, pre\-training corpora leave a measurable lexical imprint on zero\-shot behavior, and UCE provides a model\-free probe of lexical alignment between reference and target data\.

## Fusion or Confusion? Multimodal Complexity Is Not All You Need

**Authors:** Tillmann Rheude; Roland Eils; Benjamin Wild

**ID:** 152604 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RtOPHuqmpj>) | [PDF](<https://openreview.net/pdf?id=RtOPHuqmpj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152604>)

Multimodal learning has become a prominent research area, with the potential of substantial performance gains by combining information across modalities\. At the same time, model development has trended toward increasingly complex deep learning architectures, motivated by the assumption that multimodal\-specific methods improve performance\. We challenge this assumption through a large\-scale empirical study by reimplementing 19 high\-impact multimodal methods across nine diverse datasets with up to 23 modalities\. Under standardized experimental conditions, including hyperparameter tuning, weight initialization, cross\-validation, and statistical testing, increased multimodal complexity often yields confusion rather than effective fusion of data modalities\. Accordingly, complex multimodal architectures do not reliably outperform unimodal baselines and a Simple Baseline for Multimodal Learning \(SimBaMM\)\. Through a focused case study, we further demonstrate concrete methodological shortcomings even in top\-tier multimodal learning publications, underscoring the need for standardized evaluation practices\. In summary, we argue for a shift in focus for multimodal learning: away from the pursuit of architectural novelty and toward methodological rigor\.

## Spectral Quantum Memory for Implicit Neural Representations

**Authors:** Daniel A Moroz\-Broitman; Eliya Nachmani

**ID:** 152323 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TvwErOvfcr>) | [PDF](<https://openreview.net/pdf?id=TvwErOvfcr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152323>)

Implicit neural representations \(INRs\) model signals as continuous functions from coordinates to values, but their performance depends strongly on how spectral capacity is allocated\. Yet most Quantum INR \(QINR\) architectures treat spectral components as independent outputs of separate quantum blocks\. We introduce the Spectral Quantum Memory Model \(SQMM\), a memory coupled quantum INR in which sequential hybrid data reuploading layers \(bands\) communicate through a shared coherent quantum memory register\. The construction gives a controlled way to share spectral information across quantum modules while preserving the finite Fourier structure of a band\. When memory read and write layers are input independent, we prove that the memory state forms an operator valued Fourier series whose support grows by Minkowski summation of local band spectra\. Downstream bands then condition their Fourier coefficients on the spectral content stored by earlier bands\. This theory motivates a spectral memory alignment loss that encourages memory to encode the spectrum expressed by the deployed prefix of the model\. Across audio and image reconstruction benchmarks, SQMM improves over QINR and INR baselines, achieving state of the art results\.

## Exploring the Limitations of Layer Synchronization in Spiking Neural Networks

**Authors:** Roel Koopman; Amirreza Yousefzadeh; Mahyar Shahsavari; Guangzhi Tang; Manolis Sifalakis

**ID:** 156760 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=mfmAVwtMIk>) | [PDF](<https://openreview.net/pdf?id=mfmAVwtMIk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156760>)

Neural\-network processing in machine learning applications relies on layer synchronization\. This is practiced even in artificial Spiking Neural Networks \(SNNs\), which are touted as consistent with neurobiology, in spite of processing in the brain being in fact asynchronous\. A truly asynchronous system however would allow all neurons to evaluate concurrently their threshold and emit spikes upon receiving any presynaptic current\. Omitting layer synchronization is potentially beneficial, for latency and energy efficiency, but asynchronous execution of models previously trained with layer synchronization may entail a mismatch in network dynamics and performance\. We present and quantify this problem, and show that models trained with layer synchronization either perform poorly in absence of the synchronization, or fail to benefit from any energy and latency reduction, when such a mechanism is in place\. We then explore a potential solution direction, based on a generalization of backpropagation\-based training that integrates knowledge about an asynchronous execution scheduling strategy, for learning models suitable for asynchronous processing\. We experiment with 2 asynchronous neuron execution scheduling strategies in datasets that encode spatial and temporal information, and we show the potential of asynchronous processing to use less spikes \(up to 50%\), complete inference faster \(up to 2x\), and achieve competitive or even better accuracy \(up to 
10% higher\)\. Our exploration affirms that asynchronous event\-based AI processing can be indeed more efficient, but we need to rethink how we train our SNN models to benefit from it\. \(Source code available at: https://github\.com/RoelMK/asynctorch\)

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

## Spectral Re\-Basin for Linear Mode Connectivity

**Authors:** Ya\-Wei Eileen Lin; Thomas Dagès; Daniel Herbst; Daniel Cremers; Stefanie Jegelka

**ID:** 155250 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=76zg1ND5Ks>) | [PDF](<https://openreview.net/pdf?id=76zg1ND5Ks>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155250>)

Linear mode connectivity is often analysed through exact parameter symmetries, especially hidden\-unit permutations that leave the network function unchanged\.  Yet, many relationships between trained networks are not captured by bijective coordinate relabelings: widths may differ, neurons may split or clone, and explicit parameter symmetries may be broken\. In this paper, we introduce \*spectral re\-basin\*, taking an operator perspective on hidden\-unit geometry and studying mode connectivity through the functional geometry of hidden units\.  Specifically, we represent each hidden layer as a graph of \*neurons\* built from layerwise descriptors \(weights or activations\), associate it with a graph shift operator,  and study two coupled objects: layerwise graph functional symmetries, which preserve the relational geometry, and intertwining correspondences across layers from two models, which align their graph structures\.  We show that permutations arise as a special case of this viewpoint and derive results for non\-bijective constructions\. Our analysis connects correspondence quality to preserved spectral modes, functional exchangeability of neurons, and bounds on endpoint distortion and linear path barriers\. These findings suggest that linear mode connectivity can be governed beyond explicit parameter symmetry by broader spectral operator compatibility in hidden\-unit geometry\.

## Smooth Piecewise Cutting for Neural Operator to Handle Discontinuities and Sharp Transitions

**Authors:** Ha Dang; Sebastian Schmidt; Jürgen W Hesser

**ID:** 152423 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TDrTy1h1EQ>) | [PDF](<https://openreview.net/pdf?id=TDrTy1h1EQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152423>)

Neural operators have achieved strong performance in learning solution operators of partial differential equations \(PDEs\), but their inherently continuous representations struggle to capture discontinuities and sharp transitions\. Existing approaches typically approximate such features within continuous function spaces, often requiring increased model capacity and high\-resolution data\. In this work, we propose Cut\-DeepONet, a two\-stage training framework that explicitly models discontinuities while reducing learning complexity\. Our approach reformulates the problem via a lifting strategy, partitioning the domain into smooth subregions while representing discontinuities as boundaries in a higher\-dimensional space\. This separation aligns the operator learning task with the inductive bias of neural networks and avoids directly approximating discontinuities\. An additional network predicts input\-dependent discontinuity locations for unseen inputs, which are then used to guide the neural operator in generating smooth components within each region\. Experiments on benchmark PDEs show that Cut\-DeepONet outperforms state\-of\-the\-art methods, even when trained on low\-resolution datasets\. The method excels on problems with discontinuities and sharp transitions, while using fewer trainable parameters\. Our results highlight the benefits of changing the representation of operator learning rather than increasing model complexity\.

## Aligning Language Model Benchmarks with Pairwise Preferences

**Authors:** Marco Gutierrez; Xinyi Leng; Hannah Chen; Jonathan Richard Schwarz; Ahmed Alaa; Tom Hartvigsen

**ID:** 139753 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6gX1eKoDVX>) | [PDF](<https://openreview.net/pdf?id=6gX1eKoDVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139753>)

Language model benchmarks are pervasive and computationally\-efficient proxies for real\-world downstream performance\. However, many recent works find that benchmarks often fail to predict downstream utility\. While some works have begun diagnosing sources of misalignment, there remain no ways to systematically update benchmarks to align their scores with downstream usage\.  Towards bridging this gap, we introduce and study \\textit\{benchmark alignment\}, where we use information about downstream model performance to automatically update benchmarks, aiming to produce new static benchmarks that predict model pairwise rankings on downstream tasks\. Our experiments involving 4576 language models and 6 benchmarks show that benchmark items can successfully be reweighted to predict downstream performance for unseen models, even generalizing across model scales in most cases\. And while naive alignment unsurprisingly requires large numbers of models and benchmark questions, we find that proper use of downstream data can often also enable alignment, even using responses from as few as 20 models\. Overall, our work takes a step towards efficiently aligning benchmark development with downstream tasks\.

## The Future of Facts: Tracing the Factual Generation\-Verification Gap

**Authors:** Tim R Davidson; Anja Surina; Caglar Gulcehre

**ID:** 155998 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Gv8dhNp6R>) | [PDF](<https://openreview.net/pdf?id=1Gv8dhNp6R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155998>)

Language models are becoming the default interface to factual knowledge, yet they often verify outputs more reliably than they generate them\. This generation\-verification gap \(GV\-gap\) underlies many recent advances in self\-improvement and reasoning, but its dynamics on factual knowledge specifically remain poorly understood\.  We focus on the training mechanisms underlying \_factual\_ GV\-gaps, distinguishing them from their computational and aesthetic counterparts\. We trace generation and verification capabilities through three training phases \(acquisition, continual learning, and updating\) across four open\-source model families at two scales each\. Three findings recur across models: \(i\) verification is consistently learned before generation; \(ii\) verification is more robust to continual learning than generation; and \(iii\) factual updates can leave models in a \_multi\-verse\_ state, simultaneously verifying both old and new answers as correct\. Natural experiments on frontier models reproduce these dynamics at scale and reveal residual verification biases on well\-covered facts\.

## Compute Aligned Training: Optimizing for Test Time Inference

**Authors:** Adam Ousherovitch; Ambuj Tewari

**ID:** 153933 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HUYwkuQIwd>) | [PDF](<https://openreview.net/pdf?id=HUYwkuQIwd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153933>)

Scaling test\-time compute has emerged as a powerful mechanism for enhancing Large Language Model \(LLM\) performance\. However, standard post\-training paradigms, Supervised Fine\-Tuning \(SFT\) and Reinforcement Learning \(RL\), optimize the likelihood of individual samples under a base policy, creating a misalignment with test time procedures that rely on aggregated or filtered outputs\. In this work, we propose Compute Aligned Training, which aligns training objectives with test\-time strategies\. By conceptualizing inference strategies as operators on the base policy, we derive new loss functions that maximize performance when said strategies are applied\. We instantiate such loss functions for SFT and RL across common test time strategies\. Finally, we provide empirical evidence that this training method substantially improves test time scaling over standard training\.

## ConQuR: Corner Aligned Activation Quantization via Optimized Rotations for LLMs

**Authors:** Chayne Thrash; Ali Abbasi; Soheil Kolouri

**ID:** 151137 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cjdkWpDBIO>) | [PDF](<https://openreview.net/pdf?id=cjdkWpDBIO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151137>)

Large language models \(LLMs\) are costly to deploy due to their large memory footprint and high inference cost\. Weight\-activation quantization can reduce these costs, but low\-bit activation quantization remains difficult because activation outliers induce large quantization error\. Recent rotation\-based methods address this by applying orthogonal transformations that redistribute activation magnitude across dimensions, but existing approaches either require expensive end\-to\-end rotation training or rely on stored activation corpora, introducing significant compute or storage overhead\. We propose a lightweight post\-training rotation calibration method for LLM activation quantization\. Our method learns orthogonal rotations that align normalized activations with the corners of an inscribed hypercube, encouraging activation energy to be distributed more evenly across dimensions\. This objective admits an efficient closed\-form update via the orthogonal Procrustes problem, avoiding gradient\-based optimization over the orthogonal group\. We further introduce an online calibration procedure that updates rotations as calibration samples are processed, eliminating the need to store activations on disk and allowing rotations to adapt to quantized activation distributions during calibration\. Experiments on Llama\-2 and Llama\-3 models from 3B to 70B parameters show that our method achieves competitive or improved performance across perplexity benchmarks and common sense reasoning tasks while avoiding both costly end\-to\-end training and large offline activation storage\.

## Semantic Optimal Transport for Sparse Autoencoder Feature Matching and Circuit Compression

**Authors:** Tue M Cao; Nguyen Do; My T\. Thai

**ID:** 148919 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDcMEMaREB>) | [PDF](<https://openreview.net/pdf?id=uDcMEMaREB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148919>)

Sparse autoencoders \(SAEs\) have become a central tool for interpreting language models\. However, two key SAE analyses that remain difficult to scale are \(1\) matching semantically similar features across multi\-layers and \(2\) compressing large feature circuits into interpretable supernodes\. Although these have been treated as separate problems, we show that both are instances of a more fundamental challenge, which we frame as the estimation of semantic distances between SAE features that lie on different activation manifolds\. We introduce a distributional framework for this problem, in which each feature is represented not by a single decoder vector like in the literature, but by an activation\-weighted distribution over the hidden states that express it\. By projecting these distributions into a shared reference space and comparing them with Wasserstein distance, our method provides a unified semantic metric for cross\-layer feature comparison\. We prove that our representation is invariant to activation rescaling, stable under perturbations, and recovers true matches under finite\-sample margin conditions\. Empirically, our method outperforms decoder\-vector and LLM\-based baselines and captures subtle functional distinctions between related features\. Notably, our method compresses large feature circuits into interpretable supernodes  \*automatically\*\.

## Iterative Critique\-and\-Routing Controller for Multi\-Agent Systems with Heterogeneous LLMs

**Authors:** Wenzhi Fang; Liangqi Yuan; Guangchen Lan; Dong\-Jun Han; Christopher Brinton

**ID:** 148385 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yFoPKj8BCA>) | [PDF](<https://openreview.net/pdf?id=yFoPKj8BCA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148385>)

Multi\-agent large language model \(LLM\) systems often rely on a controller to coordinate a pool of heterogeneous models, yet existing controllers are typically limited to one\-shot routing: they select a model once and return its output directly\. Such routing\-only designs provide no mechanism to critique intermediate drafts or support iterative refinement\. To address this limitation, we propose a critique\-and\-routing controller that casts multi\-agent coordination as a sequential decision problem\. At each turn, the controller evaluates the current draft, decides whether to stop or continue, and, if needed, selects the next agent for further refinement\. We formulate this process as a finite\-horizon Markov Decision Process \(MDP\) with explicit agent\-utilization constraints, design a composite reward for controller decisions across turns, and optimize the controller via policy gradients under a Lagrangian\-relaxed objective\. Extensive experiments across multiple heterogeneous multi\-agent systems and seven reasoning benchmarks show that our method consistently outperforms state\-of\-the\-art baselines and substantially narrows the gap to the strongest agent, while using it for fewer than 25% of total calls\.

## B2P\-Corr: Batch\-to\-Population Gradient Estimators for Non\-Decomposable Correlation Losses

**Authors:** Jingquan Yan; Yuwei Miao; Peiran Yu; Junzhou Huang

**ID:** 154786 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B0h745L8OJ>) | [PDF](<https://openreview.net/pdf?id=B0h745L8OJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154786>)

Correlation metrics such as the Pearson Correlation Coefficient \(PCC\) and Concordance Correlation Coefficient \(CCC\) are standard regression metrics and learning objectives, but their non\-decomposable nature poses a challenge for stochastic optimization\. Since these metrics depend on dataset\-level moments \(mean, variance, covariance\), naive mini\-batch training with local statistics yields biased, high\-variance gradients whose expectation does not align with the population gradient\. To bridge this "batch\-to\-population'' \(B2P\) gap, we propose \*\*B2P\-Corr\*\*, a novel framework that transforms correlation objectives into decomposable pseudo\-losses driven by lightweight global "moment sketches''\. We introduce two efficient variants: \*\*B2P\-EMA\*\*, which utilizes exponential moving averages and stop\-gradient operators to ensure asymptotic gradient tracking with $O\(B\)$ cost \($B$ is batch size\); and \*\*B2P\-U\*\*, which uses sampled cross\-batch U\-statistic estimators and a reservoir\-based stabilization with an $O\(B\)$ implementation\. Theoretically, we quantify the $O\(B^\{\-1\}\)$ bias of naive mini\-batch optimization, prove a moving\-target tracking result for B2P\-EMA under a fast\-sketch / slow\-parameter regime, and provide an idealized control\-variate analysis for B2P\-U\. Experiments on two synthetic and three real\-world datasets demonstrate B2P\-Corr achieves stable optimization and higher correlation than naive mini\-batch optimization with negligible overhead\.

## Pacing Branch Parallelism in LLM Serving

**Authors:** Swapnil Gandhi; Siva Kumar Sastry Hari; Bill Dally; Christos Kozyrakis

**ID:** 149213 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s3hkn23fkN>) | [PDF](<https://openreview.net/pdf?id=s3hkn23fkN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149213>)

Recent methods expose intra\-request parallelism in LLM outputs, allowing independent branches to decode concurrently\. Existing serving systems execute these branches eagerly or under fixed caps\. We show that both are brittle: eager admission inflates the shared decode step, degrading co\-batched requests in serial stages, while conservative fixed caps forgo the throughput that motivated exposing branches in the first place\. We call the excess step latency caused by admitted branches the \\emph\{branch externality\} and show that the safe width depends on batch composition, context lengths, and accumulated slack, all of which change continuously over a workload trace\. We introduce \\textsc\{Pace\}, a per\-step admission controller that treats extra branches as opportunistic work, admitted only when the predicted branch externality fits within the batch's current slack budget\. Per\-step regulation is practical because branch\-level scheduling decouples compute from memory: branches share the request's prefix KV, so expanding or contracting width requires no memory reclamation\. On Qwen3\-32B, \\textsc\{Pace\} improves goodput by $1\.77\\times$ over \\textsc\{IRP\-Off\} and by $1\.48\\times$ over \\textsc\{IRP\-Eager\}, while maintaining over 95\\% SLO attainment\.

## PEEK: Context Map as an Orientation Cache for Long\-Context LLM Agents

**Authors:** Zhuohan Gu; Qizheng Zhang; Omar Khattab; Samuel Madden

**ID:** 154336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ENGBo0bbcF>) | [PDF](<https://openreview.net/pdf?id=ENGBo0bbcF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154336>)

Large language model \(LLM\) agents increasingly operate over long and recurring external contexts, like document corpora and code repositories\. Across invocations, existing approaches preserve either the agent's trajectory, passive access to raw material, or task\-level strategies\. None of them preserves what we argue is most needed for repeated same\-context workloads: reusable orientation knowledge \(e\.g\., what the context contains, how it is organized, and which entities, constants, and schemas have historically been useful\) about the recurring context itself\. We introduce \*\*PEEK\*\*, a system that caches and maintains this orientation knowledge as a context map: a small, constant\-sized artifact in the agent's prompt that gives it a persistent peek into the external context\. The map is maintained by a programmable cache policy with three modules: a Distiller that extracts transferable knowledge from inference\-time signals, a Cartographer that translates it into structured edits, and a priority\-based Evictor that enforces a fixed token budget\. On long\-context reasoning and information aggregation, PEEK improves over strong baselines by 6\.3–34\.0\\% while using 93–145 fewer iterations and incurring 1\.7–5\.8$\\times$ lower cost than the state\-of\-the\-art prompt\-learning framework, ACE\. On context learning, PEEK improves solving rate and rubric accuracy by 6\.0–14\.0\\% and 7\.8–12\.1\\%, respectively, at 1\.4$\\times$ lower cost than ACE\. These gains generalize across LMs and agent architectures, including OpenAI Codex, a production\-grade coding agent\. Together, these results show that a context map helps long\-context LLM agents interact with recurring external contexts more accurately and efficiently\.

