# ML Systems &amp; Efficiency / Efficient Models and Inference

机器学习系统与效率 / 高效模型与推理

120 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Beyond Selection: Token Parameterization for Extreme Visual Token Compression

**Authors:** Rui Zhong; YU LI; Zheyu Yan; Cheng Zhuo

**ID:** 151663 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YySQ07LVAC>) | [PDF](<https://openreview.net/pdf?id=YySQ07LVAC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151663>)

Visual\-token compression is effective for improving the efficiency of vision\-language models, but under extreme compression budgets, token pruning can break visual grounding while learned resamplers increase parameter count, attention cost, and training complexity\. We revisit compression through a token parameterization lens, separating \(i\) basis transformation and structured truncation \(retained subspace/compressibility\) from \(ii\) coordinate organization \(optimization and cross\-modal alignment\)\. This view yields two coupled objectives, compressibility and learnability, which we formalize as unified functionals\. Guided by these objectives, we design Braco, a lightweight four\-step coder that combines transform\-basis truncation, input\-independent basis\-coordinate embeddings, budget\-dependent orthogonal re\-parameterization, and learned spatial residual tokens from lightweight pooling\. Experiments show that Braco forms the favorable empirical accuracy\-efficiency frontier under compression ratios from $23\\times$ to $64\\times$ and remains competitive at $144\\times$, reaching 95\.2\\% accuracy while reducing prefill FLOPs by 84\.2\\%\-\-86\.7\\% relative to the uncompressed upper bound\. Against prior methods, Braco matches or improves accuracy while achieving up to $\\sim$36\\% end\-to\-end speedup and using $16\.6\\times$/$78\.8\\times$ lower compressor latency/FLOPs\.

## Amortized\-Precision Quantization for Early\-Exit Vision Transformers

**Authors:** Rui Fang; Hsi\-Wen Chen; Ming\-syan Chen

**ID:** 154315 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EYh3OlleoZ>) | [PDF](<https://openreview.net/pdf?id=EYh3OlleoZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154315>)

Vision Transformers \(ViTs\) achieve strong performance across vision tasks, yet their deployment with low\-precision early exiting remains fragile\. Existing quantization methods assume static full\-depth execution, making them unstable when exit decisions are perturbed by quantization noise, which can amplify errors along dynamic inference paths\. In this paper, we introduce Amortized\-Precision Quantization \(APQ\) , a utilization\-aware formulation that accounts for layer\-wise stochastic exposure to quantization noise and reveals depth\-\-precision trade\-offs\. Building on APQ, we propose Mutual Adaptive Quantization with Early Exiting \(MAQEE\) , a bi\-level framework that jointly optimizes exit thresholds and bit\-widths under explicit risk control to improve inference stability\. MAQEE establishes a superior Pareto frontier in the accuracy\-\-efficiency trade\-off, reducing BOPs by up to 95% while maintaining accuracy and outperforming strong baselines by up to 20% across classification, detection, and segmentation tasks\. Source code is available at https://anonymous\.4open\.science/r/MAQEE\-5F2F \.

## CompilerKV: Risk\-Adaptive KV Cache Compression via Offline Experience Compilation

**Authors:** Ning Yang; Chengzhi Wang; Yibo Liu; Baoliang Tian; Haijun Zhang

**ID:** 153264 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MYIR2frWUj>) | [PDF](<https://openreview.net/pdf?id=MYIR2frWUj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153264>)

Prefill\-only KV compression freezes a token subset at the end of prefill and decodes from it without further eviction\. The retention decision is therefore irreversible, yet existing methods estimate the corrective signals it relies on, per\-head reliability and prompt\-level compression sensitivity, online from a single noisy prompt\. We argue this is the wrong statistical unit: these signals exhibit far higher cross\-prompt regularity than within\-prompt signal\-to\-noise\. We introduce CompilerKV, a KV\-retention policy whose corrective tables are compiled offline from a calibration corpus, reducing online correction after the standard observation\-window scan to $O\(1\)$ lookups plus a budget clamp\. We find that compiled retention tables behave as portable architectural priors: rankings transfer across disjoint corpora on four backbones, with mean Spearman $\\bar\{\\rho\}=0\.90$, and direct model\-to\-model table transfer costs only $0\.4$\-$0\.8$ LongBench points on average\. At a 512\-token budget, CompilerKV attains compressed\-SOTA on all four backbones, improving over the strongest prefill\-only baseline by $\+1\.67$ points on average, with task\-bootstrap 95% CI $\[\+1\.08,\+2\.37\]$\. Pressure regimes amplify the gap: under a fixed $512/32\\mathrm\{k\}$ cache ratio, CompilerKV remains the strongest compressed method through 128k RULER, with approximately 73 versus FullKV 79 and SnapKV 38; on 32k NIAH it reaches $0\.89$ versus SnapKV $0\.42$; and at 32k input, retaining only $1\.56\\%$ of the prefill KV, batch\-16 serving remains feasible where FullKV is OOM\.

## HyperVQ: Enabling Hyperprior Entropy Modeling for VQ\-Based Generative Image Compression

**Authors:** Yi Niu; Tianyi Xu; Mingming Ma; Xinkun Wang

**ID:** 154142 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FwTncDub2i>) | [PDF](<https://openreview.net/pdf?id=FwTncDub2i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154142>)

Vector Quantization \(VQ\) based generative image compression has achieved remarkable perceptual quality\. However, existing VQ codecs suffer from two fundamental limitations\. First, they lack efficient content\-adaptive entropy modeling and rely on static frequencies, leading to low coding efficiency\. Second, the inherent conflict between discrete indices and continuous priors prevents true end\-to\-end joint Rate\-Distortion \(RD\) optimization\. To resolve these issues, we propose HyperVQ, a principled framework that establishes a high\-performance hyperprior entropy foundation for VQ\-based codecs\. The core insight of HyperVQ is to shift probability modeling entirely into the continuous embedding space\. Instead of directly predicting probabilities for discrete symbols, HyperVQ predicts a high\-dimensional continuous multivariate Gaussian distribution for the continuous latents\. By treating the discrete codebook entries as fixed "anchors" in this space, we convert the continuous Gaussian density into categorical index probabilities based on relative distances\. This elegant formulation provides a powerful, spatially\-adaptive entropy engine and renders the cross\-entropy rate objective fully differentiable, empowering the network to actively and dynamically optimize the RD trade\-off during training\. To ensure practicality, we design the lightweight H Block and the Probability Estimation Engine \(PEE\) to facilitate highly parallel, millisecond\-level inference\. Experiments demonstrate that HyperVQ acts as a universal module across diverse VQ architectures \(single\-scale, large\-codebook, RVQ\), achieving an average bitrate saving of 18\.5%, which is 7\.28x the saving achieved by conventional Huffman coding\. This establishes a robust, RD\-controllable foundation for next\-generation generative image compression\.

## TALON: Confidence\-Aware Speculative Decoding with Adaptive Token Trees

**Authors:** Tianyu Liu; Qitan Lv; Yuhao Shen; Jun Zhang; Xiao Sun; Xiaoyan Sun

**ID:** 151232 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bvEN7uoqUE>) | [PDF](<https://openreview.net/pdf?id=bvEN7uoqUE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151232>)

Speculative decoding \(SD\) has become a standard technique for accelerating LLM inference without sacrificing output quality\. Recent advances in speculative decoding have shifted from sequential chain\-based drafting to tree\-structured generation, where the draft model constructs a tree of candidate tokens to explore multiple possible drafts in parallel\. However, existing tree\-based SD methods typically build a \*\*fixed\-width, fixed\-depth\*\* draft tree, which fails to adapt to the varying difficulty of tokens and contexts\. As a result, the draft model cannot dynamically adjust the tree structure to early stop on difficult tokens and extend generation for simple ones\. To address these challenges, we introduce \*\*TALON\*\*, a \*\*\*training\-free, budget\-driven\*\*\* adaptive tree expansion framework that can be plugged into existing tree\-based methods\. Unlike static methods, TALON constructs the draft tree iteratively until a fixed token budget is met, using a hybrid expansion strategy that adaptively allocates the node budget to each layer of the draft tree\. This framework naturally shapes the draft tree into a \*\*"deep\-and\-narrow"\*\* form for deterministic contexts and a \*\*"shallow\-and\-wide"\*\* form for uncertain branches, effectively optimizing the trade\-off between exploration width and generation depth under a given budget\. Extensive experiments across 5 models and 6 datasets demonstrate that TALON consistently outperforms state\-of\-the\-art EAGLE\-3, achieving up to 5\.16× end\-to\-end speedup over auto\-regressive decoding\.

## LAPrune: Logits\-Aligned Scoring Proxy for KV Pruning via Vector Quantization

**Authors:** Mingyang Yu; Rong\-Cheng Tu; Yifu Ding; Hanqing Zhao; Yongcheng Jing; Xiao Luo; Dacheng Tao

**ID:** 151766 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YCnekVg1si>) | [PDF](<https://openreview.net/pdf?id=YCnekVg1si>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151766>)

Long\-context inference in Large Language Models \(LLMs\) suffers from high latency because attention computation and memory traffic scale linearly during decoding\. KV cache pruning reduces this cost by retaining only a subset of cached tokens, but its effectiveness depends on whether the pruning proxy can recover the tokens with the largest exact attention logits under the current query\. Existing proxies suffer from ranking misalignment: static heuristics rely on historical statistics and thus ignore the current query, while hashing\-based retrieval proxies rank candidates in a discrete metric space that does not coincide with attention's inner product\. To avoid these problems, we propose LAPrune, a KV pruning framework that uses additive vector quantization to build an efficient attention\-logit\-aligned proxy\. LAPrune represents each cached key as a sum of learned codewords and decomposes the query\-key dot product into lookup\-and\-add operations over query\-codeword inner products\. This replaces high\-dimensional dot products with lightweight scalar lookups while preserving fidelity to the original attention ranking\. LAPrune requires no base\-model finetuning and can be integrated into long\-context decoding with minimal modification\. Across long\-context evaluations, LAPrune improves exact\-logit Top\-$k$ recovery and perplexity over hashing\-based pruning proxies, achieving up to $2\.73\\times$ decoding speedup over FlashAttention\-2 and $4\.83\\times$ end\-to\-end speedup over the vanilla baseline at 128K context\. Our code is available at \[Anonymous/LAPrune\]\(https://anonymous\.4open\.science/r/LAPrune\-VQ\)\.

## Task\-Aware KV Cache Compression for LLM Agents via Utility\-Driven Step Pruning

**Authors:** Yusen Wu; Yefan Wang; Jia Yee Tan; Guangyuan Dong; Shuang Chen; Jing Yang; Rongfeng Guo; Por L Yee; Yongtai Liu

**ID:** 155521 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4z1e71VXI6>) | [PDF](<https://openreview.net/pdf?id=4z1e71VXI6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155521>)

KV\-cache compression for long\-horizon LLM agents is often guided by accumulated attention, yet attention frequency can retain repetitive error traces while discarding decisive instructions\. We propose TaskKV, a streaming step\-level retention policy with three contributions: \(1\) a signed directional utility label from the first\-order change in action likelihood, distinguishing helpful steps from confusing distractors unlike unsigned saliency; \(2\) a structured residual scorer that treats attention mass and intent alignment as fixed priors and learns only a denoising correction, converging with 500 trajectories; and \(3\) an entropy\-based regime classifier that falls back to contiguous retention when the scorer cannot confidently rank steps\. With a 20% KV budget on AgentBench and AlfWorld, TaskKV preserves $\\sim$87\-\-89% of full\-cache success rate, improving over SnapKV by 5\.0\-\-7\.9 SR points and over a strong heuristic by 2\.9\-\-7\.3 points; on dense tasks, gains come from detecting when utility pruning should be disabled\. Code is available at https://anonymous\.4open\.science/r/taskkv\-F0D5\.

## The Hidden Ratio in Adam: Stable Structure, Compression, and Sign Dynamics

**Authors:** Yihe Zhou; Tongtian Zhu; Yingxiao Huo; Satya P Dash; Can Wang; Samuel Kaski; Mingfei Sun

**ID:** 154051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GZha6judfp>) | [PDF](<https://openreview.net/pdf?id=GZha6judfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154051>)

Adam is the default optimizer for training modern deep neural networks, yet its adaptive behavior remains poorly understood due to the complex interaction between its first\- and second\-moment exponential moving averages \(EMAs\)\.  We study Adam in the tied\-$\\beta$ regime, where the two EMA decay rates are equal, and show that its adaptive dynamics can be expressed through a transformed ratio with approximately scale\-stable behavior\.  Empirically, this transformed ratio exhibits a stable, heavy\-tailed distribution across tasks, model scales, and training stages, in contrast to the variability of raw moment magnitudes\. This empirical stability enables both practical and conceptual consequences\. First, we derive a recurrence for the transformed ratio, yielding a reparameterization of Adam that replaces the second moment with a compressible state\.  Leveraging its stable distribution, we show that a fixed 4\-bit codebook is sufficient in our experiments to store this state without auxiliary scaling, achieving performance competitive with full\-precision Adam\.  Second, the transformed ratio view clarifies Adam's connection to sign\-based methods: Adam reduces to sign momentum modulated by the transformed ratio, and replacing it with a constant recovers Signum as a limiting case\. This perspective further provides a simple rule for transferring learning rates between the two methods\.  Together, these results suggest that tied\-$\\beta$ Adam admits a simple and approximately stable ratio structure underlying its adaptive behavior and demonstrate its utility for both analysis and efficient implementation\.

## Neural Compression of Long ADMM Trajectory for Multiparametric Quadratic Program

**Authors:** Liang Wu; Bo Yang; Xu Yang; Honghui Zheng; Yilin Mo; Jan Drgona

**ID:** 149158 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sQKzVYjuoB>) | [PDF](<https://openreview.net/pdf?id=sQKzVYjuoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149158>)

Solving large\-scale multiparametric quadratic programs \(mpQPs\) in real time often requires thousands of iterative optimization updates, creating a major computational bottleneck in model predictive control and learning\-enabled systems\. This paper proposes TQPNet, a self\-supervised neural compression framework that learns to compress long ADMM optimization trajectories into a compact neural warm start followed by a few refinement iterations\. We derive a reduced\-state ADMM scheme operating on the primal\-\-dual variables $\(x,\\beta\)$ and show that its iteration admits an equivalent ReLU\-layer representation, termed ADMM\(ReLU\)\. Building on this insight, TQPNet combines a multilayer perceptron with ReLU activations \(MLP\(ReLU\)\) and a small number of unrolled ADMM\(ReLU\) refinement layers\. The network is trained offline using an optimality\-condition\-informed residual loss, eliminating the need for solver\-generated labels\. The proposed residual\-based framework enables both self\-supervised training and online solution certification through adaptive ADMM\(ReLU\) refinement\. Experiments on large\-scale mpQPs and real\-time MPC applications demonstrate that TQPNet achieves high accuracy, strong generalization, and substantially faster inference than conventional optimization\-based methods\.

## Scattered by Design: Why Per\-Output Pruning Resists Structured Compression

**Authors:** Victor Omolaoye; Gerard de Melo

**ID:** 152970 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P0XAEBRFU2>) | [PDF](<https://openreview.net/pdf?id=P0XAEBRFU2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152970>)

Unstructured pruning methods such as Wanda preserve model quality but produce irregular sparsity with no practical compression, while structured methods enable efficient inference at the cost of degraded performance\. We ask whether post\-hoc linear transformations can convert unstructured sparsity into structured patterns, combining both benefits\. Across a broad class of fixed linear transformations—including rotations, decompositions, and permutations—we find no increase in structured sparsity \(Δ = 0\.0%\) in any OPT feed\-forward layer\. Transformations that yield structure do so identically on dense matrices, independent of pruning\. We attribute this to three factors: rank preservation, weak inter\-row mask correlation, and spectral dispersion\. Together, these prevent post\-hoc transformations from inducing structure, suggesting that compressible sparsity must be introduced during pruning rather than recovered afterward\.

## EfficientRollout: System\-Aware Self\-Speculative Decoding for RL Rollouts

**Authors:** Minseo Kim; Minjae Lee; Seunghyuk Oh; Kevin Galim; Donghoon Kim; Coleman Hooper; Harman Singh; Amir Gholami; HYUNG IL KOO; Wonjun Kang

**ID:** 155143 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=82Gs00xK62>) | [PDF](<https://openreview.net/pdf?id=82Gs00xK62>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155143>)

Reinforcement learning \(RL\) has become a representative post\-training paradigm for large language models \(LLMs\), enabling strong reasoning and agentic capabilities\. However, its rollout generation remains a dominant training bottleneck because it relies on sequential autoregressive \(AR\) decoding, where a small number of long\-tailed responses often determine completion time\. Speculative decoding \(SD\) can reduce inference latency while preserving model quality by rapidly drafting tokens and accepting them through parallel verification\. Applying SD to RL rollouts, however, introduces challenges absent from standard LLM inference: \(i\) algorithmically, the continuously evolving target model makes static drafters stale; \(ii\) system\-wise, rollout decoding moves across regimes, from large active batches where SD can be compute\-bound and ineffective to shrinking\-batch tails where SD becomes beneficial\. Existing RL\-SD approaches address aspects of this problem, but either yield low effective accepted lengths that limit speedup or rely on auxiliary drafters requiring pretraining and online adaptation, increasing system complexity\. We present EfficientRollout, an SD framework designed to accelerate RL rollouts while addressing these challenges\. EfficientRollout induces a quantized drafter directly from the target model, keeping it coupled to the evolving policy without separate drafter training before or during RL\. It then uses a dynamic SD toggle policy that enables SD only in beneficial regimes identified by system\-aware roofline modeling\. It further adapts drafting budgets using acceptance\-behavior signals observed during training, better realizing the potential accepted length\. Under realistic RL workload, EfficientRollout reduces rollout and end\-to\-end latency by up to 19\.6% and 12\.7%, respectively, over a standard accelerated AR rollout baseline, while preserving final model quality\.

## COMPOT: Calibration\-Optimized Matrix Procrustes Orthogonalization for Transformers Compression

**Authors:** Denis Makhov; Dmitriy Shopkhoev; Magauiya Zhussip; Ammar Ali; Baher Mohammad; Stamatios Lefkimmiatis

**ID:** 150918 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eOWznbUyhS>) | [PDF](<https://openreview.net/pdf?id=eOWznbUyhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150918>)

Post\-training compression of Transformer models commonly relies on truncated singular value decomposition \(SVD\) strategies leading to low\-rank approximations of the original model weights\. However, the underlying single shared subspace modeling can degrade accuracy even at moderate compression\. Sparse dictionary learning provides a more flexible union\-of\-subspaces representation, but existing approaches often suffer from costly iterative dictionary and coefficient updates\. We propose COMPOT \( C alibration\- O ptimized M atrix P rocrustes O rthogonalization for T ransformers\), a training\-free compression framework that uses a small calibration dataset to estimate a sparse weight factorization\. COMPOT employs orthogonal dictionaries that enable closed\-form Procrustes updates for the dictionary and analytical single\-step sparse coding for the coefficients, reducing significantly the overall optimization cost\. To handle heterogeneous layer sensitivity under a global compression budget, COMPOT further introduces a one\-shot dynamic allocation strategy that adaptively redistributes layer\-wise compression rates\. Extensive experiments across diverse architectures and tasks show that COMPOT consistently delivers a superior quality–compression trade\-off over strong low\-rank and sparse baselines, while remaining fully compatible with post\-training quantization for extreme compression\. Code will be released upon acceptance\.

## Semiparametrically Efficient Inference for Kernel Measures of Noise Heterogeneity

**Authors:** Jakub Wornbard; Zikai Shen; Dimitri Meunier; Arthur Gretton

**ID:** 155921 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1oJRGkThcD>) | [PDF](<https://openreview.net/pdf?id=1oJRGkThcD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155921>)

We develop semiparametrically efficient inference for kernel measures of noise heterogeneity in additive noise models\. In many applications, the regression function is estimated using flexible machine learning methods\. Downstream procedures based on the resulting residuals can then inherit first\-stage bias: regression error may induce spurious dependence between covariates and residuals, invalidating the assumptions needed for standard analysis\. We construct a novel Hilbert\-valued one\-step estimator of the kernel covariance operator between covariates and residuals\. Our estimator yields bootstrap\-calibrated tests for residual independence and goodness of fit in additive noise models, while also providing asymptotically efficient confidence intervals for the kernel dependence measure under noise heterogeneity\. The framework extends to settings with additional covariates, enabling inference on distributional heterogeneity of residual noise across treatment groups\. Simulations show improved calibration and power relative to naive plug\-in residual methods\.

## Reformulating KV Cache Eviction Problem for Long\-Context LLM Inference

**Authors:** Tho Mai; Joo\-Young Kim

**ID:** 153767 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IomgdYliGM>) | [PDF](<https://openreview.net/pdf?id=IomgdYliGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153767>)

Large language models \(LLMs\) support long\-context inference but suffer from substantial memory and runtime overhead due to Key\-Value \(KV\) Cache growth\. Existing KV Cache eviction methods primarily rely on local attention weights, neglecting the influence of value representations, output projection, and inter\-head interactions\. In this work, we reformulate KV Cache eviction from a conventional head\-wise, weight\-averaging approach into an output\-aware, layer\-wise matrix multiplication approximation problem\. We introduce LaProx, a novel eviction strategy that explicitly models the multiplicative interaction between attention maps and projected value states to accurately quantify token contributions while accounting for inter\-head dependencies\. Building on this metric, we propose the first unified eviction strategy that assigns globally comparable importance scores to tokens, enabling model\-wide selection instead of local, head\-wise decisions\. Experimental results across 19 datasets on long\-context benchmarks LongBench and Needle\-In\-A\-Haystack demonstrate that our approach maintains model performance with only 5\\% of the KV cache and consistently outperforms prior works across all configurations\. Notably, our method achieves up to 2$\\times$ accuracy loss reduction under extreme compression scenarios compared to existing state\-of\-the\-art baselines with minimal overhead\.

## TreeGraft: Adaptive Multi\-Drafter Grafting for Tree\-Based Speculative Decoding

**Authors:** Jiaming Fan; Daming Cao; Canchen Huang; Jiale Fu; Jin Zhang; Junjie Gao; Kai Yang; Xiangzhong Luo; Xu Yang

**ID:** 151038 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dRhBDs50Cm>) | [PDF](<https://openreview.net/pdf?id=dRhBDs50Cm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151038>)

Speculative decoding accelerates large language model inference through a draft\-then\-verify paradigm\. Building on this, tree\-structured methods improve inference by organizing proposals into multiple candidate paths, increasing the accepted length\. However, existing tree\-structured methods use a single drafter for all drafting steps, creating a dilemma: a smaller drafter is fast but yields lower\-quality trees, whereas a larger drafter improves tree quality but suffers from high latency\. To address this, we propose TreeGraft, a multi\-drafter framework in which drafters of different costs jointly construct a shared draft tree\. TreeGraft uses the stronger drafter to rescore candidates by updating scores assigned by the weaker drafter, reselect grafting positions, and recover promising paths left unexplored\. It also integrates stronger drafter expansions non\-destructively, preserving existing branches that may still be accepted by the target model\. Together, these designs improve the quality of the shared draft tree\. To control the drafting cost, TreeGraft introduces a lightweight scheduler distilled from an offline value system to decide when to call the stronger drafter\. Across 10 model pairs and 6 benchmarks, TreeGraft outperforms the better of the two fixed single\-drafter endpoint strategies by 15\.1\\% on average, reaching a maximum gain of 26\.6\\%\. Our code is available at https://anonymous\.4open\.science/r/TreeGraft\-E983\.

## Global Importance Estimation for KV Cache Eviction

**Authors:** Seojin Kim; Noseong Park

**ID:** 153209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N1gDvQ8d8n>) | [PDF](<https://openreview.net/pdf?id=N1gDvQ8d8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153209>)

Memory consumption of the key\-value \(KV\) cache remains a central bottleneck for long\-context LLM inference\. We introduce PRKV, a training\-free KV eviction method that estimates multi\-hop global token importance by applying Personalized PageRank over attention\-induced transition graphs\. This enables importance propagation beyond recency or instantaneous attention, without modifying the model\. We benchmark PRKV on long\-context understanding, sparse retrieval, and chain\-of\-thought reasoning tasks using multiple LLM families\. Under moderate to aggressive compression ratios, including up to 90\\%, PRKV achieves competitive task performance against established eviction baselines while reducing peak memory usage with low end\-to\-end overhead\. These results demonstrate that multi\-hop global influence estimation yields a favorable accuracy\-\-memory trade\-off for scalable long\-context inference\.

## KroQuant: Kronecker\-Structured Block Transforms for Efficient Post\-Training Quantization of Diffusion Transformers

**Authors:** Yann Bouquet; Alireza Khodamoradi; Kristof Denolf; Mathieu Salzmann

**ID:** 149685 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oBmgoOB66g>) | [PDF](<https://openreview.net/pdf?id=oBmgoOB66g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149685>)

Post\-training quantization \(PTQ\) of diffusion transformers \(DiTs\) to W4A4 severely degrades output quality, because activations entering each linear layer contain outliers that 4\-bit formats cannot represent\. The standard fix applies an invertible linear transform to the activations and its inverse to the weights before quantizing both\. Normalization layers between blocks force this transform to run online at every denoising step, making its inference computation cost the binding design constraint\. Existing options trade quantization quality for inference cost: per\-channel scaling \(SmoothQuant\) is computationally cheap but impacts the magnitude of the channels, which can harm quantization accuracy; fixed Hadamard transforms yield better quantization accuracy but require large block sizes that incur a high online cost; learned full\-$d$ invertible transforms calibrate best but entail an prohibitive dense $d \\times d$ matrix multiplication \(GEMM\) per layer per step\.  We propose KroQuant, a PTQ method that applies a learned Kronecker\-structured invertible transform to each 32\-element block of the activation, storing less than half the parameters of per\-channel scaling\. The block\-local structure runs as small tensor\-core GEMMs, and on an MI350 GPU the KroQuant quantizer kernel is up to $14$\\% faster than the SmoothQuant kernel\. Offline LoRaQ weight calibration then absorbs the residual per\-weight quantization error\. On PixArt\-$\\Sigma$, SANA, and FLUX\.1\-schnell at W4A4 \(MXFP4e2\), KroQuant produces outputs closer to the FP reference than SVDQuant and LoRaQ on MJHQ\-30K and SDCI, while preserving or improving image quality\.

## Keep or Preempt? Termination\-Aware Scheduling for LLM Serving with Speculative Decoding

**Authors:** Ziyu Cheng; Songtao Guo; Mingyan Li; Chang Han; Hongyu Xu; Xu Luo

**ID:** 152245 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UVkupZzqjJ>) | [PDF](<https://openreview.net/pdf?id=UVkupZzqjJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152245>)

Effective inference is critical for interactive large language model \(LLM\) serving, where both time\-to\-first\-token \(TTFT\) and end\-to\-end \(E2E\) latency shape user experience\.  Speculative decoding has emerged as a promising solution that reduces inference latency by employing lightweight drafting and parallel verification\. However, it introduces a new scheduling issue, i\.e\., traditional shortest remaining processing time \(SRPT\) scheduling based on output length estimation fails to work due to its paradigm shift in inference structure\. In this paper, we explore the preemption mechanism of speculative decoding\-based LLM serving systems and show that — besides the output length, a request's remaining service time depends on draft acceptance and the number of verification rounds\. Building on this insight, we develop a novel termination\-aware scheduling framework, named \\textsc\{AlmostDone\}, which first \\textit\{identifies requests that are almost done\} within several future local decoding steps\.  It achieves this by introducing a lightweight predictor built from runtime draft\-and\-verify states, which helps approximate the SRPT\-like scheduling better than existing approaches\. Then, \\textsc\{AlmostDone\} \\textit\{determines whether preemption is worthwhile\} through a switching\-aware online policy to limit excessive running\-set alterations\. Experiments on an open\-source vLLM serving system show \\textsc\{AlmostDone\} substantially surpasses the default schedulers, reducing mean and median TTFT by up to 3\.83$\\times$ and 3\.39$\\times$, and mean and median E2E request latency by up to 1\.39$\\times$ and 2\.33$\\times$\. Against the oracle length\-based preemption baseline TRAIL\+, it still achieves up to $2\.0\\times$ lower mean TTFT and $1\.3\\times$ lower mean E2E request latency\.

## Proportionality in Ranking Compression

**Authors:** Daniel Halpern; Xinyu Liu; Evi Micha; Yu Peng Ng; Warut Suksompong

**ID:** 150366 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ic6RypdGYS>) | [PDF](<https://openreview.net/pdf?id=ic6RypdGYS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150366>)

Motivated by applications in reinforcement learning from human feedback, we consider a setting where a given collection of rankings needs to be compressed into a smaller collection of rankings\. This can also be seen as a combination of two fundamental social choice frameworks: ranking aggregation and multiwinner voting\. We propose three proportionality notions that capture different types of representation in this setting: positional proportionality, pairwise proportionality, and proportionality for solid coalitions \(PSC\)\. On the one hand, we show that positional proportionality and PSC are always satisfiable for any input rankings and target compression size, and a desired output can be found in polynomial time\. On the other hand, we prove that pairwise proportionality cannot be satisfied in general, but can nevertheless be attained when the input rankings are single\-peaked or single\-crossing\.

## Verification\-Aware Training for Speculative Decoding

**Authors:** Geonmo Gu; Byeongho Heo; HeeJae Jun; Yoohoon Kang; Sangmin Lee; Sangdoo Yun; Dongyoon Han

**ID:** 149396 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qMv8q5WApK>) | [PDF](<https://openreview.net/pdf?id=qMv8q5WApK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149396>)

Speculative decoding accelerates large language model inference by using a draft model to generate candidate tokens, which are verified by the target model in a single forward pass\. Verification proceeds and discards every position from the first rejection onward, yet existing draft training relies on token\-level cross\-entropy with a fixed per\-position weighting that does not reflect this process\. We introduce Verification\-Aware Training \(VAT\), a plug\-in framework that simulates verification at every training step and turns the resulting accept and reject patterns into supervision\. VAT consists of two components: \(i\) a verification head, a lightweight jointly\-trainable binary classifier that validates per\-position acceptance via an explicit prediction target; \(ii\) verification\-adaptive weighting replaces the fixed weighting schedule with weights adapted to each sample's first rejection point during training\. VAT is model\-agnostic and can be layered on top of existing methods without changing the draft architecture, the target model, or the inference procedure, and trained jointly with the original loss\. Applied to EAGLE\-3 and DFlash on Qwen3\-4B, Qwen3\-8B and LLaMA3\.1\-8B, VAT improves average acceptance length by up to 11\.4% and wall\-clock speedup by up to 8\.7%, with consistent gains across math, code, and chat benchmarks\.

## CATS: Acceptance\-Oriented Critical Token Adaptive Selection for Multimodal Speculative Decoding

**Authors:** Kaiwen Liu; Yangkai Xie; Shuxia Lin; Liu Chonghan; Xu Yang; Yiguo Qiao

**ID:** 154883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AAzuOWs11n>) | [PDF](<https://openreview.net/pdf?id=AAzuOWs11n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154883>)

While Speculative Decoding \(SD\) has become an essential lossless acceleration technique for Large Language Models, its direct application to Multimodal Large Language Models \(MLLMs\) is hindered by the intricate visual dependencies present in cross\-modal generation\. Existing SD methods enforce a uniform global alignment between the draft and target models, which proves ineffective in multimodal settings due to a structured distribution bias: deviations of the draft model are systematically concentrated on a sparse subset of tokens that demand fine\-grained visual comprehension\. To overcome this limitation, we reformulate the training of multimodal draft models as an acceptance\-oriented critical\-token alignment problem and introduce CATS, a novel two\-stage training framework\. CATS employs two complementary selection mechanisms to pinpoint critical tokens:hard tokens that exhibit high rejection probabilities, and vision\-critical tokens whose prediction fundamentally depends on visual semantics\. Following an initial global alignment phase, CATS performs sparse, targeted refinement exclusively on the union of these identified token sets\. Extensive experiments across three representative benchmarks using multiple LLaVA and Qwen2\.5\-VL target models demonstrate that our approach consistently improves the token acceptance rate over strong baselines such as EAGLE\-2 and supervised fine\-tuning\. Ultimately, CATS substantially accelerates MLLM inference, achieving speedups of up to 3\.05×\.

## Route\-Consistent Adaptation for Stable Quantization of Mixture\-of\-Experts Models with Theoretical Guarantees

**Authors:** Longteng Zhang; Sen Wu; Qiang Wang; Shaohuai Shi; Xiaowen Chu

**ID:** 149368 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZ58ypkC3E>) | [PDF](<https://openreview.net/pdf?id=qZ58ypkC3E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149368>)

Quantizing Mixture\-of\-Experts \(MoE\) models is difficult for two coupled reasons: expert quantization error perturbs expert outputs, and sparse routing amplifies small perturbations into discrete expert selection changes\. This coupling produces progressive output drift that is not captured by dense model quantization analyses\. To address this gap, we propose a unified quantization framework that jointly handles both sources of error\. First, we formulate compression\-induced routing inconsistency as a form of training\-inference router mismatch and use this connection to motivate limited routing replay, which replays BF16 routes during quantization\-aware fine\-tuning \(QAT\), freezes router parameters, and updates only expert\-side adapter parameters\. We then provide a standard convergence guarantee for the resulting fixed\-route QAT objective, together with a routing\-consistency bound under explicit router\-margin conditions\. Second, for expert restoration under a fixed rank budget, we propose load\-aware low\-rank compensation that assigns larger compensation rank to heavily loaded experts\. Under this allocation rule, we prove monotone strict decrease of weighted compression error and characterize optimal rank assignment by marginal load\-weighted spectral gains\. Finally, experiments on the MXFP4 quantization of Mixtral, DeepSeek, and Qwen3 MoE models show that our method improves perplexity and downstream accuracy over prior methods\. We also report system efficiency on Qwen3\-30B, where uniform W4A8 serving accelerates decoding and our adapter path preserves most of that acceleration\.

## UxSID: Semantic\-Aware User Interests Modeling for Ultra\-Long Sequence

**Authors:** Hongwei Zhang; qiqiang zhong; Jiangxia Cao; Junfeng Shu; Yiyang Lv; Huanjie Wang; Liwei Guan; Jing Yao; Yiyu Wang; Liu Zhaojie; Han Li

**ID:** 149506 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pdr1nmA83m>) | [PDF](<https://openreview.net/pdf?id=pdr1nmA83m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149506>)

Modeling ultra\-long user behavior sequences is an essential task for capturing evolving preferences in modern recommender systems, and this research direction has contributed solid gains in the past several years\. However, recommendation systems always serve enormous traffic, and extending user sequences sharply increases computational cost, which creates a difficult trade\-off between efficiency and effectiveness\. To scale to longer user sequences while keeping lightweight serving computation, existing works can be divided into two paradigms: \(1\) $\\textit\{Search\-based Top\-$K$ selection\}$, which constructs an $\\textbf\{item\-specific\}$ subsequence for each candidate item to avoid facing the ultra\-long sequence directly; and \(2\) $\\textit\{pre\-trained user\-interest compression\}$, which maps an ultra\-long user sequence into a small group of $\\textbf\{item\-agnostic\}$ user interest memories so that the online model can perceive user long\-term interests via this highly compressed dense memory\. Besides the two technical routes \(totally item\-specific or item\-agnostic\), we argue that there exists an intermediate path not well explored: preserving partial relevance between the user sequence and the target item, while exposing only limited signals to guide the direction of interest compression\. This design does not pursue item\-specific user interest compression, but seeks semantic\-group shared general user interest memory according to item attributes, where semantically similar items share the same compressed user interest memory\. Motivated by this, we propose $\\textbf\{UxSID\}$, a novel framework that bridges this gap by facilitating a target item semantic\-aware interaction between $\\textbf\{U\}$ser histories and candidate $\\textbf\{S\}$emantic $\\textbf\{ID\}$s \(SIDs\)\. Specifically, UxSID employs a dual\-level attention strategy: it first extracts  item\-agnostic user interests from raw sequences, and then performs a semantic\-specific query over global behaviors and those agnostic interests to generate semantic\-specific preferences\. By adopting this end\-to\-end architecture, UxSID generates offline embeddings that balance computational parsimony with target items' semantic awareness, while strictly preserving parity with online inference in constant time\. Extensive public benchmarks and large\-scale A/B tests demonstrate that UxSID achieves state\-of\-the\-art performance, driving a 0\.337\\% revenue lift in advertising\. Open source link: $\\url\{https://anonymous\.4open\.science/r/UxSID/\}$

## Fewer Tokens, Fewer Layers: Efficient Vision Token Pruning and On\-Policy Distillation to Accelerate VLMs

**Authors:** Shuai Wang; Shitong Shao; Qi Xuan; Zhaowei Zhu; Jiaheng Wei

**ID:** 152441 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T7WbWqjpqm>) | [PDF](<https://openreview.net/pdf?id=T7WbWqjpqm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152441>)

Vision\-language models \(VLMs\) have achieved remarkable progress\. However, processing high\-resolution images and long videos generates a massive number of vision tokens, creating a severe inference bottleneck due to the quadratic complexity of attention mechanisms\. Previous efforts to mitigate this issue have primarily focused on accelerating the prefill stage by reducing the number of vision tokens, often yielding limited practical speedups while neglecting the increasingly time\-consuming decoding stage when the generated response is long\. In addition, existing approaches heavily rely on attention maps or similarity maps that are not compatible with efficient attention implementations\. To comprehensively address these limitations, we first propose \*\*FlashPruner\*\*, a lightweight module that selects the most helpful vision tokens without relying on attention maps, significantly reducing prefill time\. For the decoding stage, we adopt self\-speculative decoding and theoretically prove that on\-policy distillation guarantees a lower bound for the speculative acceptance rate\. Guided by this formulation, we introduce \*\*LoFT\*\*, an on\-policy distillation method that effectively trains a highly reliable and efficient draft model including FlashPruner and early layers of the language model\. Extensive experiments demonstrate that after training with LoFT, FlashPruner achieves substantial inference speedups while preserving task performance\. Notably, on MVBench, FlashPruner improves the time\-to\-first\-token by 1\.5$\\times$ and decoding speed by 2$\\times$, maintaining 96\.8\\% relative accuracy with only 10\\% vision tokens\.

## MARS: Enabling Autoregressive Models Multi\-Token Generation

**Authors:** Ziqi Jin; Lei Wang; Ziwei Luo; Aixin Sun

**ID:** 150620 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gmcLiK4jCQ>) | [PDF](<https://openreview.net/pdf?id=gmcLiK4jCQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150620>)

Autoregressive \(AR\) language models generate text one token at a time, even when consecutive tokens are highly predictable given earlier context\. We introduce MARS \(Mask AutoRegreSsion\), a lightweight fine\-tuning method that teaches an instruction\-tuned AR model to predict multiple tokens per forward pass\. MARS adds no architectural modifications, no extra parameters, and produces a single model that can still be called exactly like the original AR model with no performance degradation\. Unlike speculative decoding, which maintains a separate draft model alongside the target, or multi\-head approaches such as Medusa, which attach additional prediction heads, MARS requires only continued training on existing instruction data\. When generating one token per forward pass, MARS matches or exceeds the AR baseline on six standard benchmarks\. When allowed to accept multiple tokens per step, it maintains baseline\-level accuracy while achieving 1\.5\-1\.7x throughput\. We further develop a block\-level KV caching strategy for batch inference, achieving up to 1\.71x wall\-clock speedup over AR with KV cache on Qwen2\.5\-7B\. Finally, MARS supports real\-time speed adjustment via confidence thresholding: under high request load, the serving system can increase throughput on the fly without swapping models or restarting, providing a practical latency\-quality knob for deployment\.

## Correspondence Pruning by Iterative Structural Rectification

**Authors:** Guangwei Zhang; Gang Wang

**ID:** 155477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5J1rwV6KnM>) | [PDF](<https://openreview.net/pdf?id=5J1rwV6KnM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155477>)

Correspondence pruning—separating sparse inliers from severe outliers in noisy feature matches—is a long\-standing bottleneck for two\-view geometry estimation in 3D vision\. Existing learning\-based pruners pursue this goal through ever more sophisticated context operators—local graphs, dynamic neighborhoods, or global attention—yet a controlled comparison reveals a striking phenomenon: when we freeze the structural assignment of these operators after a single forward pass, accuracy collapses by over $30\\%$ mAP regardless of operator choice\. This suggests that the limiting factor of current methods is not which operator is used, but the implicit assumption that structure can be committed in one shot\. We argue that correspondence pruning should instead be cast as \\emph\{iterative structural rectification\} \(ISR\), in which the geometric structure and the feature representation must \\emph\{co\-evolve\} layer by layer\. Building on this view, we propose \\textbf\{ISR\-Net\}, a minimal architecture that pairs a layer\-wise re\-derived local\-context operator \(a dynamic $k$\-NN graph in feature space\) with a layer\-wise re\-derived global\-context operator \(soft assignment to learnable cluster prototypes\), so that any gain over prior arts is attributable to the rectification \\emph\{schedule\} rather than to operator novelty\. Despite using deliberately off\-the\-shelf operators, ISR\-Net attains state\-of\-the\-art results on YFCC100M, SUN3D, and HPatches, surpassing the strongest attention\-based competitor by $\+8\.2\\%$ mAP@$5^\\circ$ while running $35\\%$ faster, indicating that \\emph\{how often structure is refined\} matters more than the operator's complexity\.

## Recovering Evolving User Preference State via Adaptive Interaction\-aware Representation Correction

**Authors:** Parthiv Chatterjee; Dhiraj Golhar; Ummesalma Diwan; Sourish Dasgupta; Manjunath Joshi; Tanmoy Chakraborty

**ID:** 148603 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wVWF5MK9yv>) | [PDF](<https://openreview.net/pdf?id=wVWF5MK9yv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148603>)

Personalization systems encode long\-horizon, evolving user trajectories into compressed preference states that downstream task heads consume for prediction or generation\. This compression is difficult because preference trajectories contain stable long\-term interests, transient short\-term shifts, and episodic bursty interests\. We argue that a practical route is not to design another task\-specific encoder or incur costly host\-encoder finetuning, but to correct the under\-expressed compressed state before the downstream task head consumes it\. We propose $\\texttt\{REPAIR\}$ as a selective \*pre\-head state\-repair method\* for frozen personalization encoders\. It plugs into frozen hosts, uses event representations from the forward pass, and avoids a second pass over the raw history\. $\\texttt\{REPAIR\}$ compares the compressed state with per\-timestep event representations, estimates state\-relative corrective evidence, resolves it through long\-term, short\-term, and episodic temporal regimes, and retains only the most corrective signals to form a compact correction\. We evaluate $\\texttt\{REPAIR\}$ across recommendation and generation personalization settings using MovieLens, MIND, PENS, and Amazon Reviews 2023\. Across recommendation tasks, $\\texttt\{REPAIR\}$ improves the evaluated frozen hosts\. On MovieLens, it improves the highest\-scoring frozen host in our instantiated baseline suite by \+1\.27/\+1\.54 MRR/nDCG@5; on MIND, it improves the highest\-scoring frozen host by \+4\.41 MRR; and on Amazon product recommendation, it improves two SOTA baselines by \+15\.33 and \+17\.91 MRR\. It also outperforms budget\-matched post\-head correctors, and the full long\-, short\-, and episodic repair remains the strongest temporal variant\. On PENS personalized headline generation, $\\texttt\{REPAIR\}$ improves subjectivity\-sensitive generation most when the decoder is preference\-coupled, with average PerSEval gains of \+14\.62% and \+22\.19% for two representative preference\-coupled decoders\. Relative to frozen predictive encoders, deployment overhead is 31\-\-34% memory and 38\-\-44% latency\.

## Spike\-SFT: Selective Parameter Enhancement and Fusion for Efficient Spiking Neural Networks

**Authors:** Xiubo Liang; Jinxing Han; Yuke Li; Haoqi Zhu; Zhenxing Li; Hongyi Duan; Yu Zhao; Hongzhi Wang

**ID:** 155711 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Td9h2rVyH>) | [PDF](<https://openreview.net/pdf?id=3Td9h2rVyH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155711>)

Spiking Neural Networks \(SNNs\) promise energy\-efficient inference, but adapting large pre\-trained SNNs to new tasks is expensive because BPTT memory and runtime scale with the number of simulation steps $T$\. We observe that weights in pre\-trained SNNs are strongly concentrated near zero, and under thresholded dynamics many such synapses are functionally silent\. Based on this, we propose \\textbf\{Spike\-SFT\}, a two\-stage adaptation framework\. Stage 1 \(\\textbf\{Selective Parameter Enhancement\}, SPE\) fine\-tunes only a small\-magnitude subset via masked updates with low\-rank regularization, progressive re\-selection, and sparse\-gradient storage, reducing memory while maintaining competitive accuracy\. Stage 2 \(\\textbf\{PickIt\}\) fuses multiple SPE\-adapted models by alignment and interference\-aware delta merging with spike\-statistics calibration, yielding a single merged model with zero inference\-time overhead\. Across several SNN backbones and benchmarks, Spike\-SFT offers a favorable accuracy\-\-cost trade\-off, improving fine\-tuning efficiency \(time/memory\) while retaining strong accuracy, and enabling zero\-overhead weight\-space fusion via PickIt\.

## To Copy or Not to Copy: Controlling Speculative Decoding via Intrinsic Model Signals

**Authors:** Roy Eisenstadt; Ido Cohen; Edo Cohen\-Karlik; Lior Wolf; Itamar Zimerman

**ID:** 152547 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SLqBK6yQPm>) | [PDF](<https://openreview.net/pdf?id=SLqBK6yQPm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152547>)

Speculative Decoding \(SD\) has significantly accelerated Large Language Model \(LLM\) inference, yet existing approaches face a fundamental tradeoff between two drafting strategies: neural drafting and context\-based copying\. Neural drafts \(e\.g\., EAGLE3\) provide robust performance across diverse text settings, while copy\-based methods achieve higher speedups in copy\-intensive regimes by generating candidates faster and exploiting long repetition spans for near\-perfect speculation\. We analyze existing copy\-based methods and find that they are prone to accidental repetitions where surface\-level $n$\-gram overlap does not reflect a structural intent to copy, leading to false\-positive triggers that ultimately degrade throughput\. We introduce \*\*SwitchSD\*\*, an adaptive framework that treats copying as a \*\*latent control signal\*\* of the LLM\. By training lightweight probes on the target model's internal representations, SwitchSD identifies genuine copy\-intent with high precision \(AUC $&gt;$ 0\.99\)\. This allows the system to dynamically switch between neural drafting \(e\.g\., EAGLE\) and context\-based copying\. Our results across Llama and Qwen families demonstrate throughput gains of up to 15% over state\-of\-the\-art baselines like EAGLE3, effectively turning "copying" from a noisy heuristic into a principled, model\-aware decoding regime\.

## A Self\-Evolving Framework for Efficient Terminal Agents via Observational Context Compression

**Authors:** JinCheng Ren; Siwei Wu; Yizhi Li; Zhu; Shu XU; Boyu Feng; Ruibin Yuan; Wei Zhang; Riza Batista\-Navarro; Min Gao; Yan Bai; Jian Yang; Chenghua Lin

**ID:** 153290 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MMhankfnpV>) | [PDF](<https://openreview.net/pdf?id=MMhankfnpV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153290>)

Terminal observations are not ordinary long\-context text: they are heterogeneous, low\-information\-density execution traces in which sparse but exact evidence \(e\.g\., error messages and file paths\) is interleaved with large amounts of repetitive terminal output\. For long\-horizon CLI agents, retaining raw observations rapidly increases context cost and can dilute critical signals, while LLM\-based summarization or fixed heuristics often fail to adapt across heterogeneous terminal tasks and may discard precise task\-relevant evidence\.We propose TACO, the first self\-evolving Terminal Agent Compression framework, which treats compression rules as reusable, preservation\-aware knowledge acquired from interaction trajectories\. Rather than relying on manually designed rules, static pruning, or task\-specific compressor training, TACO autonomously discovers, refines, and reuses structured compression rules from agent interaction trajectories\. A Global Rule Pool accumulates effective rules across tasks, while task\-time rule evolution adapts them online to the current workflow\. This allows TACO to filter redundant terminal observations while conservatively preserving exact task\-relevant evidence\.Across six benchmarks, including TB 1\.0, TB 2\.0, SWE\-Bench Lite, CompileBench, DevEval, and CRUST\-Bench, TACO consistently maintains or improves task success across models and agent scaffolds\. On TerminalBench, TACO yields 1%\-\-4% absolute accuracy gains under standard evaluation and improves accuracy by 2%\-\-3% under matched token budgets\. On downstream benchmarks, it reduces total token consumption by 12%\-\-27% while maintaining or improving task success\. These results show that self\-evolving observation compression can unlock latent capability in existing CLI agents by allocating context budget toward task\-relevant evidence, without model fine\-tuning or human\-crafted compression rules\.

## Online Minimum Description Length Passive\-Aggressive Algorithms

**Authors:** John Hurwitz; Charles K Nicholas; Edward Raff

**ID:** 155249 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=77tofmsGFn>) | [PDF](<https://openreview.net/pdf?id=77tofmsGFn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155249>)

We present an algorithm for margin\-based online learning using lossless compressors \(like zip\) via the Minimum Description Length Principle\. The technique, we call \\emph\{MDL\-PA\}, can be viewed as an analogue of Passive\-Aggressive algorithms for probability distributions \(equivalently viewed as lossless compression schemes\) where we consider a \\emph\{code length margin\}\. Separate models are maintained per class, and the update rule is an information projection correcting the true\-class model's prediction on a margin\-violating sample\. To bridge theory and practice, we demonstrate a practical approximation to this online learning setup via adaptive Lempel\-Ziv\-style compression dictionaries to classify sequences in the text and malware domains\.

## Vision Token Pruning via Query\-Vision Interaction Decomposition

**Authors:** Harshithanjani Athi; Sravan Kumar Ankireddy; Jianzhong Zhang; Hyeji Kim

**ID:** 152195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UqphiAp8hm>) | [PDF](<https://openreview.net/pdf?id=UqphiAp8hm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152195>)

Large vision\-language models \(VLMs\), which process both visual inputs and text queries, incur high inference costs due to the large number of visual tokens, making visual token pruning a natural approach for improving efficiency\. Recent work has leveraged query information to guide token selection, often through heuristics derived from attention patterns or token dynamics\. However, these approaches do not explicitly exploit the underlying structure of query\-vision interactions\. We address this gap by observing that the query\-vision interaction matrix, naturally induced by the query and key projections already present in transformer attention, is effectively low\-rank, with a small number of dominant latent interaction modes capturing query\-relevant semantics\. Motivated by this observation, we propose Query\-Vision Decomposition \(QViD\), a novel training\-free query\-aware visual token pruning method that exploits this structure\. Extensive experiments on both image and video understanding benchmarks show that QViD consistently improves performance under matched token budgets, with the largest gains appearing under aggressive compression regimes\.

## GPA: General Principled Framework for Linearizing Softmax Attention via KV Cache Approximation

**Authors:** wang ning; Zekun Li; Tongxin Bai; Man Yao; Chunlei Men; Guoqi Li

**ID:** 152654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ROPnDwfm3N>) | [PDF](<https://openreview.net/pdf?id=ROPnDwfm3N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152654>)

Transformers excel at sequence modeling, yet Softmax attention incurs quadratic complexity and unbounded KV cache growth\. While linear attention offers a promising alternative, existing approaches lack systematic functional comparison with Softmax attention, rigorous error analysis, and a theoretically grounded improvement roadmap\. We address this gap by framing linearization as KV cache approximation and establishing a principled pathway from Softmax attention to linear models\. Our analysis identifies five critical components—redundancy elimination, token\-level quantization with positional separation, positional compression, inter\-layer similarity, and multi\-state decomposition—each accompanied by theoretical justification and error bounds, with explicit connections to existing mechanisms\. Building upon this framework, we introduce GPA, a linearized attention model that inherits pretrained weights and achieves state\-of\-the\-art results\. GPA outperforms strong baselines including MVA and GSA across multiple benchmarks, while requiring less fine\-tuning resources\. Our work provides both theoretical clarity and practical guidance for advancing linear attention, charting a principled course toward efficient, scalable alternatives to Softmax attention\.

## DICEQuant: Distortion\-Compensated Rounding with Dual\-Ended Shrinkage for LLM Quantization

**Authors:** Yuan Cheng; Xing Hu; Zukang Xu; Hui Wang; Xiaomeng Han; Dawei Yang

**ID:** 148173 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zk0THf3od5>) | [PDF](<https://openreview.net/pdf?id=zk0THf3od5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148173>)

Post\-Training Quantization \(PTQ\) has become a prerequisite for efficient LLM deployment; however, current rotation\-based methods are approaching a saturation point because they prioritize heuristic approximations over theoretical rigor\. By treating quantization as an opaque black box, existing paradigms typically depend on indirect gradient estimators for activations while restricting weight optimization to local reconstruction objectives\. Consequently, this structural limitation induces fundamental deficiencies: specifically, optimization instability and a "twofold blindness" toward accumulated upstream distortion and final task loss sensitivity\. To overcome these barriers, we introduce $\\textbf\{DICEQuant\}$, a unified framework established upon rigorous error modeling\. First, we propose the $\\textbf\{CURE \(Coupled Underflow\-Rounding Error\) surrogate\}$, which facilitates exact and stable gradient computation for activation reshaping, thereby eliminating the variance inherent in heuristic estimators\. Simultaneously, for weight optimization, we present $\\textbf\{Distortion\-Compensated Rounding \(DCR\)\}$\. This mechanism derives a Shifted Optimal Center to neutralize input noise and utilizes Hessian\-weighted shaping to align rounding decisions with the global functional objective\. Empirical results demonstrate that DICEQuant significantly surpasses state\-of\-the\-art baselines, successfully bridging the accuracy gap between low\-bit compression and full\-precision intelligence\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137882 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137882>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137876 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137876>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## Generalization Without Compression Penalty: A Stability Analysis of Error Feedback

**Authors:** Yifei Liang; Peng Wang; Yan Sun; Yingqi Liu; Xiaoyan Wang; XIAOCHUN CAO; Li Shen

**ID:** 149408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qHC1EJ6gni>) | [PDF](<https://openreview.net/pdf?id=qHC1EJ6gni>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149408>)

Error Feedback \(EF\) has become a core mechanism for aggressive gradient compression in communication\-efficient distributed training, and is now used in geo\-distributed frameworks such as DiLoCo\. While existing theory mainly explains its optimization convergence, the generalization behavior of EF remains poorly understood, especially under nonlinear biased compression and distributed local updates\. We present the first generalization analysis of EF for both single\-node EF\-SGD and DiLoCo\-EF through an optimization\-driven on\-average model stability framework, without imposing bounded\-gradient assumptions\. Technically, we develop a buffer\-aware Lyapunov argument that tracks the coupled dynamics of the model and error buffer, while co\-coercivity absorbs same\-sample gradient\-difference energy into the optimization trajectory\. For convex losses, our bounds show that compression\-induced stability terms are transient, decaying as $\\mathcal\{O\}\(\\sqrt\{b\_\\alpha\}\\,T^\{\-3/4\}\+b\_\\alpha T^\{\-1\}\)$, and therefore do not create a non\-vanishing generalization floor beyond the dominant $\\mathcal\{O\}\(T^\{\-1/2\}\)$ optimization term\. In the DiLoCo setting, worker averaging further suppresses compression perturbations, and a local stepsize $\\eta\_l=\\Theta\(1/\(H\\sqrt\{T\}\)\)$ controls the drift from $H$ local steps, yielding the leading $\\mathcal\{O\}\(1/\\sqrt\{MHT\}\)$ excess\-risk scaling\. Experiments on convex benchmarks corroborate the theory, showing that Top\-$k$, Random\-$k$, and quantization with matched contraction factor $\\alpha$ exhibit nearly indistinguishable generalization trajectories\.

## D\-PACE: Dynamic Position\-Aware Cross\-Entropy for Parallel Speculative Drafting

**Authors:** Tianyu Wu; Yu Yao; Zhenting Qi; Han Zheng; Chengxi Zhang; Zhuohan Wang; Haoran Ma; Zichun Liao; Hima Lakkaraju; Ju Li; Yilun Du

**ID:** 152718 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QrjZX92zUN>) | [PDF](<https://openreview.net/pdf?id=QrjZX92zUN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152718>)

Speculative decoding accelerates LLM inference by having a small drafter propose tokens that a larger target model verifies in parallel\. Current SOTA diffusion\-based parallel drafters such as dFlash predict the full $B$\-token block in one forward pass, allowing deeper drafters and higher accepted length\. However, across the field, from autoregressive tree drafters to parallel block drafters, training losses use fixed per\-position weights that do not adapt to the drafter's current bottleneck position\. We derive per\-position training weights directly from the expected accepted block length, so that each position's weight reflects its actual contribution to acceptance\. The resulting loss, D\-PACE \(Dynamic Position\-Aware Cross\-Entropy\), automatically identifies where the block's acceptance bottleneck lies and shifts training signal there as the drafter improves\. D\-PACE consistently improves both wall\-clock speedup and accepted length across diverse benchmarks and positions as a drop\-in replacement with negligible training overhead and requires no changes to the drafter architecture or inference pipeline, making it broadly applicable to general model architectures\.

## Task\-Induced Riemannian Metrics for Vision Transformer Feature Spaces

**Authors:** Andrew Bond; Ege E Özlü; Tuna Çimen; Ilkin U Melanlioglu; Tolga Birdal; Erkut Erdem; Aykut Erdem

**ID:** 148615 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wQbmMf6PdD>) | [PDF](<https://openreview.net/pdf?id=wQbmMf6PdD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148615>)

Methods that operate on Vision Transformer features almost universally rely on Euclidean distance to judge feature similarity\. Yet Euclidean distance weights every direction in feature space equally, ignoring that downstream tasks concentrate their sensitivity on a low\-dimensional submanifold\. The metric that respects this structure is the pullback Riemannian metric $g\(F\) = J\(F\)^\\top J\(F\)$ induced by the task decoder's Jacobian, but materializing it is prohibitively expensive; a single ViT\-B/14 probe point requires storing $4\\times 10^\{10\}$ scalars, and per\-token scoring provably fails when task\-sensitive directions are spread across tokens\. We show that whether a low\-rank approximation of $g\(F\)$ is \\emph\{learnable\} at all depends on a precise structural property of the model\-decoder pair, which we characterize via a single scalar diagnostic $\\kappa\_\{cap\}\(r\)$, the captured\-energy fraction of the top\-$r$ singular directions of $J$, computable matrix\-free in $\\mathcal\{O\}\(m\+rq\)$ Jacobian\-vector products\. When the diagnostic licenses it, we train the \\emph\{Spectral Pullback Network\} \(SPN\) on directions found by randomized power iteration on $J^\\top J$, and distill the resulting per\-token signal into a 310K\-parameter feature\-only \\emph\{conformal head\}, never materializing $J$\. When the original spectrum is too rich for any practical rank\-$r$ budget, a VAE reparameterization of the decoder recovers a latent space in which the same machinery applies, converting intractable dense pipelines into tractable ones\. Across DPT, DINOv2, CLIP, and VGGT backbones the diagnostic correctly predicts which architecture succeeds: the conformal head reaches Spearman $\\rho=0\.998$ against the Jacobian\-derived target on DINOv2 CLS, and geometric token pruning yields a 25\\% relative improvement over ToMe at aggressive prune ratios on DPT depth\. These results suggest that learning \\emph\{which\} directions matter is often more valuable than learning better features\.

## MARS: Multi\-resolution Adaptive Routing for Sequential Recommendation

**Authors:** Ming Yin; Sixun Dong; Yudong Liu; Wenyun Yang; Yunjiang Jiang; Yiran Chen

**ID:** 156035 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=108F0f6Iau>) | [PDF](<https://openreview.net/pdf?id=108F0f6Iau>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156035>)

Scaling sequential recommendation to long user histories requires compressing diverse behavioral evidence into memories that can be scored efficiently against many candidates\. We first provide evidence that real user histories exhibit multi\-scale semantic structure: short\-lived intent, medium\-term interests, and long\-term preferences can coexist in the same sequence\. However, existing summarization\-based models mainly optimize compact history compression and do not explicitly organize cached user memory across temporal scales, which can lead to \\textit\{temporal aliasing\} where distinct behavioral signals become entangled before prediction\. We propose MARS, a multi\-resolution user memory that writes the full history into recurrent state tracks initialized with different half\-life priors\. A sparse routing reader then materializes compact seed memories by selecting the relevant temporal resolutions for each seed, preserving fixed\-size candidate scoring\. Experiments across recommendation datasets show that MARS outperforms strong recommendation baselines, with gains most pronounced for users with long histories\.

## SpecBlock: Block\-Iterative Speculative Decoding with Dynamic Tree Drafting

**Authors:** Weijie Shi; Qiang Xu; fan deng; Yaguang Wu; Jiarun Liu; Yehong Xu; Hao Chen; Jia Zhu; Jiajie Xu; Xiangjun Huang; jian yang; Xiaofang Zhou

**ID:** 150056 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l6JgXCnnMq>) | [PDF](<https://openreview.net/pdf?id=l6JgXCnnMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150056>)

Speculative decoding accelerates LLM inference by drafting a tree of candidate continuations and verifying it in one target forward\. Existing drafters fall into two camps with opposite weaknesses\. Autoregressive drafters such as EAGLE\-3 preserve dependence along each draft path but call the drafter once per tree depth, making drafting a non\-trivial share of per\-iteration latency\. Parallel drafters cut drafter calls by predicting multiple future positions in one forward, but each position is predicted without seeing the others, producing paths the verifier rejects\. In this paper, we propose SpecBlock, a block\-iterative drafter that combines path dependence with cheap drafting\. Each drafter forward produces $K$ dependent positions and we call this a block\. The draft tree grows through repeated block expansions\. Two mechanisms explicitly carry path dependence to keep later draft positions accurate\. Within each block, a layer\-wise shift carries the previous position's hidden state into every decoder layer\. Across blocks, each new block can start from any position of the previous block, inheriting its hidden state to extend the path\. To spend verifier budget where acceptance is likely, a co\-trained rank head replaces the fixed top\-$k$ tree by allocating per\-position branching during drafting\. To avoid training the drafter on prefixes it never produces at inference, a valid\-prefix mask drops the loss at later positions once an earlier one is wrong\. Beyond static drafting, a cost\-aware bandit at deployment uses free verifier feedback to update the drafter selectively, only when the expected throughput gain exceeds the update cost\. Experiments show that SpecBlock improves mean speedup by $8$\-\-$13\\%$ over EAGLE\-3 at $44$\-\-$52\\%$ of its drafting cost, and cost\-aware adaptation extends this lead to $11$\-\-$19\\%$\.

## KVFocus: A Perturbation\-Theoretic Token\-Risk Score for Selective KV Cache Reuse in RAG

**Authors:** Shizhuo Zhang; Nuowen Kan; Chenglin Li; Rui\-Xiao Zhang; Yifan Zhao; Yuanpeng He; Huixin Zhang; Fan He; Hang Xu; Hao Zhang; Wenrui Dai; Junni Zou; Hongkai Xiong

**ID:** 149014 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tTROr3ucO0>) | [PDF](<https://openreview.net/pdf?id=tTROr3ucO0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149014>)

In retrieval\-augmented generation \(RAG\) scenarios, the prefill delay of the large language model \(LLM\) long inputs is the dominant component of time\-to\-first\-token \(TTFT\)\. Reusing KV caches across different LLM inputs reduces this cost, but the resulting cross\-context mismatch on reused segments has a significant degradation on answer quality via propagating through prefill attention into decode\-time logits\. Existing selective\-recomputation methods mitigate this issue by recomputing tokens chosen by empirical importance heuristics, which overlook the propagation of cache mismatches into answer\-side errors, thereby failing to effectively strike the quality\-TTFT tradeoff\. To address this issue, we propose a perturbation\-theoretic KV cache reuse framework, KVFocus, which selects reused KV caches through a perturbation\-theoretic token\-risk score during the prefill process\. Specifically, we first develop a first\-order analysis that traces reuse error in three stages: source mismatch on the reused segment, suffix contamination during prefill, and decode\-time logit stability\. This analysis reveals that the leading\-order answer\-side error decomposes into a product of source\-side V\-drift and downstream suffix\-to\-segment attention concentration\. Guided by this multiplicative structure, we define a token\-risk score that operationalizes the bound during the inference\. A plug\-and\-play selector for KV cache reuse in existing RAG\-based LLM serving is then designed by recomputing the top\-$r\\%$ tokens directly suppresses the predicted leading\-order answer\-side error, covering both sides of the pathway that prior one\-sided heuristics miss\. Empirical results across three 7\-8B instruction\-tuned LLMs \(Mistral, Qwen2\.5, Qwen3\) and four multi\-hop QA benchmarks demonstrate that the proposed KVFocus achieves a superior trade\-off between the ansewer quality and the TTFT in comparison to state\-of\-the\-art baselines, with up to $3\\times$ TTFT speedup over full prefill at matched answer quality\.

## Transporting Quantiles to Codebook: Scalable Vector Quantization without Codebook Collapse

**Authors:** Yuwei Zeng; Zekun Shi

**ID:** 151282 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bYAJ4GjECY>) | [PDF](<https://openreview.net/pdf?id=bYAJ4GjECY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151282>)

Effective discrete representation learning with VQ\-VAE serves as a fundamental component of modern autoregressive generative models\. However, it is widely known to suffer from codebook collapse and inefficient code utilization\. To address this issue, we propose a simple yet effective alternative to standard vector quantization by formulating neural quantization as a joint modeling and clustering process\. Specifically, we learn the latent space using a lightweight flow\-matching model alongside training, corresponding to a probability flow ODE that transports an often fixed well\-behaved source distribution while preserving probability mass\. Based on this, we define the codebook $\\mathcal\{C\}\_1$ by transporting even\-quantile partitioned prior codes $\\mathcal\{C\}\_0$ from the source space through the learned flow, and obtaining the Voronoi centroids under the induced distribution, leading a structured discretization\. We evaluated on image tasks, and two tasks require high\-precision tokenization, demonstrating scalability and improved expressivity of the codebook with full utilization\.

## Predicting Quantization Price for Selecting PTQ Configurations Before Deployment

**Authors:** Junbin Qiu; Jian Mu; Weitong Zhang; Yao SHU

**ID:** 153413 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LWK4LetKST>) | [PDF](<https://openreview.net/pdf?id=LWK4LetKST>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153413>)

Weight\-space post\-training quantization \(PTQ\) must choose finite formats, granularities, quantizer families, transformations, and bits before the completed quantized model reveals its output\-distribution drift\. Existing PTQ methods predict important pieces of this degradation, including reconstruction error, Hessian sensitivity, transformation effects, and downstream loss, but these pieces are usually scored after fixing the quantization geometry or inside separate configuration families\. We formulate weight\-space PTQ as pre\-deployment configuration selection using priced layer\-output error\. Each admissible layer configuration is treated as an error generator with a deployment cost, which induces a layer\-output error covariance $\\boldsymbol\{\\Sigma\}\_l\(\\alpha\_l\)$, and the full\-precision model prices that covariance by downstream curvature, $\\hat\{\\rho\}\_l\(\\alpha\_l\)=\\frac\{1\}\{2\}\\operatorname\{Tr\}\\left\(\\hat\{\\mathbf\{H\}\}\_l\\,\\hat\{\\boldsymbol\{\\Sigma\}\}\_l\(\\alpha\_l\)\\right\)$\. The price follows from full\-precision\-to\-quantized forward KL, whose first\-order term cancels at the reference model\. It turns reconstruction and diagonal scores into reduced proxies that drop price factors, while finite formats, codebooks, granularities, and equivalent transformations become comparable candidates through the covariances they induce and the costs they pay\. A trace reduction then yields a calibration\-time price table and a budgeted price\-guided selector, making fixed\-geometry bit allocation a special case rather than the organizing problem\.

## Dynamic Delayed Tree Expansion For Improved Multi\-Path Speculative Decoding

**Authors:** Rahul K Thomas; Teo Kitanovski; Micah Goldblum; Arka Pal

**ID:** 155922 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1oCU9PKaoy>) | [PDF](<https://openreview.net/pdf?id=1oCU9PKaoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155922>)

Multi\-path speculative decoding accelerates lossless sampling from a target model by using a cheaper draft model to generate a draft tree of tokens, and then applies a verification algorithm that accepts a subset of these\. While prior work has proposed various verification algorithms for i\.i\.d rollouts, their relative performance under matched settings remains unclear\. In this work, we firstly present a systematic evaluation of verification strategies across model families, tasks, and sampling regimes, and find that Traversal Verification dominates consistently, with OT\-based methods lagging far behind\. Our analysis uncovers that this occurs because OT\-based methods achieve high multi\-token acceptance near the root of the draft tree, while multi\-token gains are most impactful deeper in the draft tree, where draft and target distributions diverge\. Based on this insight, we propose delayed tree expansion\} which drafts a partial single path, delaying the i\.i\.d\. branching point\. We show that delayed tree expansion preserves the target distribution and improves on root\-node i\.i\.d rollouts\. Further, we develop a dynamic neural selector that estimates the expected block efficiency of OT\-based verification methods from draft and target features, enabling context\-dependent expansion decisions\. Our neural selector allows OT\-based methods like SpecInfer to outperform Traversal Verification for the first time, with 5\\% higher average throughput across a wide range of models, datasets, and sampling settings\. Finally, we extend our approach to Traversal Verification to improve its average throughput by 26\\%\.

## Block Sphere Vector Quantization

**Authors:** Heesang Ann; Joongkyu Lee; Min\-hwan Oh

**ID:** 152314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U13XD8SxhN>) | [PDF](<https://openreview.net/pdf?id=U13XD8SxhN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152314>)

Vector quantization is a fundamental primitive for scalable machine learning systems, enabling memory\-efficient storage, fast retrieval, and compressed inference\. Recent rotation\-based quantizers such as EDEN, RabitQ, and TurboQuant have introduced strong guarantees and empirical performance, but the surrounding comparisons have been difficult to interpret because they rely on different distortion criteria, probability regimes, and implementation assumptions\. As our first contribution, we provide a unified theoretical comparison of these methods and show that their relative advantages are criterion\-dependent rather than absolute: TurboQuant is favorable for MSE distortion, EDEN is effective for expected inner\-product distortion, and RabitQ provides strong high\-probability control\. This comparison clarifies the design principles behind each advantage and shows that no existing method uniformly dominates across the relevant measures\. As our second contribution, we introduce \*Block\-Sphere Quantization\* \(\*\*BlockQuant\*\*\), a new rotation\-based block quantization algorithm designed around the spherical geometry of randomly rotated vectors\. Unlike coordinate\-wise quantizers, \*\*BlockQuant\*\* quantizes blocks on the sphere, preserving the geometry of rotated embeddings more faithfully\. We prove that this block\-spherical design improves expected distortion performance, including both reconstruction MSE and expected inner\-product distortion\. Experiments on real embedding data support these theoretical improvements\.

## MoE\-SpAc: Efficient MoE Inference Based on Speculative Activation Utility in Heterogeneous Edge Scenario

**Authors:** Shuhuai Li; Jianghao Lin; DongDong Ge; Yinyu Ye

**ID:** 152840 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PzDCaziC8F>) | [PDF](<https://openreview.net/pdf?id=PzDCaziC8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152840>)

Mixture\-of\-Experts \(MoE\) models enable scalable performance but face severe memory constraints on edge devices\. Existing offloading strategies struggle with I/O bottlenecks due to the dynamic, low\-information nature of autoregressive expert activation\. In this paper, we propose to repurpose Speculative Decoding \(SD\) not merely as a compute accelerator, but as an informative lookahead sensor for memory management, supported by our theoretical and empirical analyses\. Hence, we introduce MoE\-SpAc, an MoE inference framework that integrates a training\-free Speculative Utility Estimator to track expert demand, a Heterogeneous Workload Balancer to dynamically partition computation via online integer optimization, and an Asynchronous Execution Engine to unify the prefetching and eviction in the same utility space\. Extensive experiments on seven benchmarks demonstrate that MoE\-SpAc achieves a 42% improvement in TPS over the SOTA SD\-based baseline, and an average 4\.04 speedup over all standard baselines\. Code is available at https://anonymous\.4open\.science/r/SpAc\_MoE\.

## Stabilizing the Dynamic Low\-Rank Training

**Authors:** Zhonghan Xu; Ling Wang; Junhao Chen; Jianwei Zhao; Jinwei Yang

**ID:** 148261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zAGUzDSLhh>) | [PDF](<https://openreview.net/pdf?id=zAGUzDSLhh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148261>)

Training neural networks directly in a low\-rank parameterization is an appealing route to reducing memory, compute, and storage simultaneously during both training and inference\. Dynamic low\-rank training \(DLRT\), which confines weights to a rank\-$r$ manifold via the Galerkin projection of the gradient flow, is particularly attractive because it identifies efficient subnetworks on the fly without specialized initialization or post\-factorization\. However, DLRT fails to find trainable networks under high compression\. In this paper, we derive the gradient flow of the best rank\-$r$ approximation and point out that the offset of DLRT comes from a curvature\-coupling term which is large and thus non\-negligible under aggressive compression\. Guided by this analysis, we propose a stable dynamic low\-rank training method, named SDLRT, which maintains a lightweight compensation buffer that reinjects the top neglected singular directions\. Additionally, we introduce a negative feedback on the truncation tolerance to stabilize each layer's rank\. Experimentally, SDLRT reliably finds trainable subnetworks where DLRT collapses and as a PEFT adapter on DeBERTa\-v3, it achieves the best average score on SuperGLUE at only $2\.8\\\\%$ parameter overhead over LoRA\.

## RaVF: Learning Radar Velocity Fields via Spatial\-Doppler Guidance

**Authors:** SHENGPENG WANG; Lingzhen Li; Chunshen Li; Fei Xiao; Wei Wang

**ID:** 152403 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TMUEPGI01F>) | [PDF](<https://openreview.net/pdf?id=TMUEPGI01F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152403>)

Scene\-level Velocity field estimation from 4D millimeter\-wave radar is critical for robust perception but remains challenged by the inherent sparsity and noise of point\-based paradigms\. Furthermore, Doppler ambiguity induced by the Nyquist sampling limit fundamentally disrupts the continuity of velocity field learning\. To address these challenges, we propose RaVF, a physically grounded framework that directly learns dense velocity fields from high\-fidelity spatial\-Doppler spectra\. RaVF is built upon three key designs tailored to radar\-specific signal distortions\. \(1\) To mitigate range\-dependent propagation attenuation and nonlinear angular spatial quantization, we devise a Physically\-aware Encoder that calibrates spectral feature extraction within the native radar beamforming\. \(2\) Observing that ego\-induced radial motion explains static Doppler responses, we factor out static motion and guide dynamic flow estimation for physically consistent velocity field learning\. \(3\) To enhance kinematic plausibility, we introduce an ego\-conditioned bidirectional pyramidal flow module that transfers backward flow into the forward frame and enforces anti\-symmetric forward\-backward consistency\. Extensive experiments demonstrate that RaVF significantly outperforms state\-of\-the\-art baselines on velocity fields\. Our code will be available\.

## HCInfer: An Efficient Inference System via Heterogeneous Error Compensation for Resource\-Constrained Devices

**Authors:** Shen Xu; Xiangwen Zhuge; Zhe Xu; Yingkun Hu; Zheng Yang; Yunhao Liu

**ID:** 151377 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b3DYZ9pfMj>) | [PDF](<https://openreview.net/pdf?id=b3DYZ9pfMj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151377>)

LLMs often struggle with memory\-constrained deployment on consumer\-grade hardware due to their massive parameter sizes\. While existing solutions such as model compression and offloading improve deployment feasibility, they often suffer from substantial accuracy degradation or severe throughput bottlenecks\. Recent error compensation methods recover accuracy through auxiliary LoRA\-style branches, and we observe that these branches are inherently amenable to offloading: they require substantial parameter storage but access only a small subset of compensation parameters during each inference step\. Motivated by this opportunity, we propose HCInfer, a heterogeneous inference system that offloads residual compensation to the CPU while executing the compressed backbone on the GPU, and further introduces an asynchronous compensation pipeline and sensitivity\-aware dynamic rank allocation to hide compensation overhead and maximize accuracy recovery\. Experimental results show that HCInfer achieves a maximum accuracy improvement of 5\.2% on downstream tasks compared to compression model and sustaining a maximum speedup of 10\.4x compared to full\-precision model\.

## PerQ: Inverse Generative Modeling for Neural Image Compression via Quantization Error Compensation

**Authors:** Tianhao Peng; Ho Man Kwan; Fan Zhang; Shan Liu; David Bull

**ID:** 149271 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZtNsw4WVh>) | [PDF](<https://openreview.net/pdf?id=rZtNsw4WVh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149271>)

Neural image codecs face a long\-standing trade\-off: distortion\-optimized designs preserve pixel\-wise fidelity but tend to produce blurred reconstructions at low bitrates, while generative designs close the perceptual gap with a learned prior, but with pixel fidelity saturating as bitrate increases\. The latter typically requires training multiple models for various bitrate targets\. This paper addresses these limitations by reframing the perceptual reconstruction problem\. Starting from the quantization bound that holds for any modern multi\-rate codec, we derive a transport bound that confines the perceptual reconstruction to a closed, rate\-determined cell around the backbone's output\. The cell is small relative to the full image manifold, casting unconstrained generative modeling as a bounded\-support problem\. We instantiate this as PerQ: an image codec that attaches a rate\-conditioned flow\-matching compensator supported on this cell to a frozen multi\-rate distortion\-optimized backbone\. The experimental results across Kodak and CLIC2020\-test datasets show that PerQ offers similar performance to generative neural image codecs \(e\.g\., MS\-ILLM\) in perceptual metrics \(LPIPS, FID\) , while still maintaining competitive coding performance compared to distortion\-optimized codecs \(e\.g\., ELIC\)\. Moreover, PerQ can produce compression results across a wide bitrate range and fast decoding from only a single checkpoint\.

## Prediction Under Imperfect Compression: A Theory of Approximate MDL

**Authors:** Qian Li; Xinyu Mao; Shang\-Hua Teng; Guangxu Yang

**ID:** 150363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=id5F8lsOvb>) | [PDF](<https://openreview.net/pdf?id=id5F8lsOvb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150363>)

Minimum Description Length \(MDL\) formalizes the principle of Occam's razor by optimizing the total description length: $L\(\\mathrm\{model\}\)\+L\(\\mathrm\{data\} \\ \| \\ \\mathrm\{model\}\)$\. For sequential prediction, the MDL method repeatedly selects a model with a minimum objective score of the observed prefix for the next step prediction\. Classical MDL prediction theory shows that exact optimization of the MDL objective indeed provides a strong compression guarantee that supports reliable prediction\. However, practical machine learning usually can only find models by approximately optimizing the objective function\. To bridge this gap, this paper addresses the following fundamental question: \\emph\{Under what forms of approximation and regularization does approximate MDL still guarantee reliable sequential prediction?\} This work offers a principled characterization\. We prove that for any approximation with \\emph\{additive\} slack \\\(C\\\) of the more general form of the \\emph\{balanced\} MDL objective:  $\\lambda\\cdot L\(\\mathrm\{model\}\)\+L\(\\mathrm\{data\} \\ \| \\ \\mathrm\{model\}\)$, the cumulative expected squared prediction error is finite for all $\\lambda\\ge1$\. The case $\\lambda&gt;1$ is proved by an affinity\-telescoping argument, while the boundary case $\\lambda=1$ is proved by a likelihood\-ratio stopping argument based on exact static MDL bounds\. Our results establish that classical MDL regularization remains robust to any fixed additive optimization error\. Furthermore, we establish that our characterization of the approximate MDL framework is sharp: When $0&lt;\\lambda&lt;1$, overfits can happen to incur infinite cumulative expected error in the universal class of estimable measures, and hence a strong form of model\-complexity regularization is necessary\. In addition, model selection may fail in every regularized regime $\\lambda &gt;0$, under multiplicative approximation, and thus, additive approximation is both sufficient and essential\.

## QuantDemoire: Quantization with Outlier Aware for Image Demoiréing

**Authors:** 郑 陈; Kewei Zhang; Xiaoyang Liu; Kai Liu; Weihang Zhang; Mengfan Wang; Yifan Fu; Yulun Zhang

**ID:** 148476 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xWKcMe90g4>) | [PDF](<https://openreview.net/pdf?id=xWKcMe90g4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148476>)

Demoir\\'eing aims to remove moir\\'e artifacts that often occur in images\. While recent deep learning\-based methods have achieved promising results, they typically require substantial computational resources, limiting their deployment on edge devices\. Model quantization offers a compelling solution\. However, directly applying existing quantization methods to demoir\\'eing models introduces severe performance degradation\.  The main reasons are distribution outliers and weakened representations in smooth regions\. To address these issues, we propose QuantDemoire, a post\-training quantization framework tailored to demoir\\'eing\. It contains two key components\. \*\*First\*\*, we introduce an outlier\-aware quantizer to reduce errors from outliers\. It uses sampling\-based range estimation to reduce activation outliers and keeps a few extreme weights in FP16 with negligible cost\. \*\*Second\*\*, we design a frequency\-aware calibration strategy\. It emphasizes low\- and mid\-frequency components during fine\-tuning, which mitigates banding artifacts caused by low\-bit quantization\. Experiments validate that our QuantDemoire achieves large reductions in parameters and computation while maintaining quality\. Meanwhile, it outperforms existing quantization methods by over \*\*4 dB\*\* on W4A4\. We implement a CUDA kernel for the mixed\-precision branch and achieve a 2\.3$\\times$ end\-to\-end speedup on an RTX 4090 GPU\. Code will be made public\.

## HALO\-VGGT: Heterogeneity\-Aware Lightweight Online Compression Allocator for Efficient VGGT

**Authors:** Xueling Wang; Yiwen Wang; Siqi Cai; Chen Zhang; guanghui He

**ID:** 148613 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wSMK90Tr3q>) | [PDF](<https://openreview.net/pdf?id=wSMK90Tr3q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148613>)

Visual geometry grounded transformers are strong feed\-forward backbones for multi\-view 3D reconstruction, but their global attention becomes the dominant inference bottleneck as views and tokens increase\. Existing acceleration methods mainly focus on designing compression operators, while compression strengths are often assigned by uniform schedules or offline calibration, overlooking the heterogeneous sensitivity of layers and attention heads during inference\. We therefore propose HALO\-VGGT, a lightweight online compression allocator requiring no training or calibration for efficient VGGT\-style reconstruction\. HALO uses a sampled query\-key margin proxy to estimate compression sensitivity at the layer and head levels, and assigns hierarchical compression ratios accordingly\. Instead of introducing a new compression operator, HALO complements pruning, merging, and sparse attention mechanisms by deciding where and how aggressively they should be applied\. HALO improves the trade\-off between speedup and accuracy across datasets and backbones, achieving up to 4\.20$\\times$ speedup and further improving existing merging and sparsity methods by up to 1\.46$\\times$\.

## AlphaQ: Calibration\-Free Bit Allocation for Mixture\-of\-Experts Quantization

**Authors:** Wanqi Yang; Yuexiao Ma; Alexander Conzelmann; Xiawu Zheng; Michael Mahoney; T\. Konstantin Rusch; Shiwei Liu

**ID:** 150665 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gNcuTCbBdm>) | [PDF](<https://openreview.net/pdf?id=gNcuTCbBdm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150665>)

Mixture\-of\-Experts \(MoE\) architectures scale model capacity through sparse expert activation, but their deployment remains memory\-bound because all expert weights must reside in memory\. Mixed\-precision quantization can substantially reduce this footprint by assigning different bit\-widths to different experts\. Existing approaches, however, typically rely on calibration data to estimate expert importance and determine bit allocation\. For frontier MoE LLMs, the original training data, and hence the true training distribution, is proprietary and inaccessible\. As a result, calibration sets are inevitably imperfect surrogates, which can misestimate expert utilization and lead to suboptimal bit allocation\. Motivated by the substantial cross\-expert quality variability observed in modern MoE models, we propose AlphaQ, a calibration\-free bit\-allocation method for MoE quantization\. AlphaQ draws on Heavy\-Tailed Self\-Regularization \(HT\-SR\) theory and follows a simple principle: experts with more heavy\-tailed weight spectra are typically better trained and should receive higher bit\-widths, while experts with weaker heavy\-tailed structure can be quantized more aggressively\. AlphaQ operationalizes this principle by measuring expert\-wise spectral heavy\-tailedness and solving a budget\-constrained optimization problem that minimizes total quantization error under a global bit\-budget constraint\. Across several MoE models, AlphaQ consistently outperforms calibration\-based baselines under matched bit budgets\. Notably, on Qwen1\.5\-MoE, AlphaQ achieves near full\-precision accuracy with an average expert precision of only 3\.5 bits, while delivering more than 4$\\times$ memory compression\.

## PSD: Pushing the Pareto Frontier of Diffusion LLMs via Parallel Speculative Decoding

**Authors:** Shengyin Sun; Yiming Li; Renxi Liu; Xinqi Li; Hui\-Ling Zhen; Weizhe Lin; Chen Chen; Xianzhi Yu; Mingxuan Yuan; Chen Ma

**ID:** 150134 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRdp6aSiHL>) | [PDF](<https://openreview.net/pdf?id=kRdp6aSiHL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150134>)

Diffusion large language models \(dLLMs\) generate text by iteratively denoising masked token sequences\. Although dLLMs can predict all masked positions in parallel within each step, the large number of denoising iterations still makes inference expensive\. This cost can be reduced spatially by unmasking multiple tokens per step, or temporally by collapsing multiple denoising steps into one verification call\. We propose Parallel Speculative Decoding \(PSD\), a training\-free framework that jointly improves inference along both axes\. Using the confidence scores from a single forward pass, PSD selects positions to unmask via a configurable, adaptive unmasking policy and constructs multi\-depth speculative drafts without extra model calls\. A final batched verification pass then applies hierarchical acceptance, keeping the deepest draft that remains consistent with the updated predictions\. Experiments on three dLLMs across reasoning and code generation tasks show that PSD achieves favorable trade\-offs between inference efficiency and generation quality, reaching up to $5\.5\\times$ tokens per forward pass with accuracy comparable to greedy decoding\.

## Attention Drift: What Auto\-Regressive Speculative Decoding Models Learn

**Authors:** Doğaç Eldenk; Payal Mohapatra; Yigitcan Comlek; Kaan Oktay; Hongyang Zhang; Stephen Xia

**ID:** 152952 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P9bn0DEION>) | [PDF](<https://openreview.net/pdf?id=P9bn0DEION>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152952>)

Speculative decoding accelerates LLM inference by drafting future tokens with a small model, but drafter models degrade sharply under template perturbation and long\-context inputs\. We identify a previously\-unreported phenomenon we call \\textbf\{attention drift\}: as the drafter generates successive tokens within a speculation chain, attention progressively moves from the prompt onto its own recently\-generated tokens\. We observe this across both \\emph\{EAGLE3\} drafters and \\emph\{MTP heads\}, suggesting drift is a property of drafter designs\. We trace this to the un\-normalized residual path between chain steps: the drafter's hidden state magnitude grows monotonically with chain depth, which exhibits dynamics consistent with additional pre\-norm transformer layers stacked on the target rather than as a standalone autoregressive predictor\. In order to limit the growth, we propose two architectural changes: Post\-norm on the drafter hidden states and per\-hidden\-state RMSNorm after capturing target hidden states\. Our interventions improve acceptance length over the current leading model, pre\-norm EAGLE3, by up to $2\\times$ under template perturbation, $1\.18\\times$ on long\-context tasks, and $1\.10\\times$ on seven standard benchmarks spanning multi\-turn chat, math, and coding\. Our changes also allow shorter train\-time\-test depths to generalize over longer drafting sequences\.

## Make Each Token Count: Towards Improving Long\-Context Performance with KV Cache Eviction

**Authors:** Ngoc Bui; Trung Hieu Nguyen; Arman Cohan; Rex Ying

**ID:** 152145 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VBVa8FIJRl>) | [PDF](<https://openreview.net/pdf?id=VBVa8FIJRl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152145>)

The key\-\-value \(KV\) cache is a major bottleneck in long\-context inference, where memory and computation grow with sequence length\. Existing KV eviction methods reduce this cost but typically degrade performance relative to full\-cache inference\. Our key insight is that full\-cache attention is not always optimal: in long contexts, irrelevant tokens can dilute attention away from useful evidence, so selective, learnable eviction can improve generation rather than merely approximate the full cache\. We introduce a global retention\-based KV eviction method that learns each token's future utility under a unified memory budget\. Lightweight retention gates assign utility scores to cached KV entries, and a shared final scoring projection calibrates these scores across all layers and heads\. This enables a single global eviction policy in which tokens from different layers, heads, and modalities compete directly for cache capacity\. We further provide theoretical analysis showing that preferentially retaining useful tokens reduces attention dilution, and we justify geometric retention as a query\-agnostic proxy for future utility\. Across long\-context language and vision\-\-language benchmarks, our method substantially reduces KV memory while matching or surpassing full\-cache inference\. These results suggest that learned, globally calibrated KV eviction is not only a compression technique, but also a mechanism for improving long\-context reasoning\.

## Block\-OBS\-GS: Exact Per\-Block Joint Brain Surgery with Gauss–Seidel Refinement for LLM Pruning

**Authors:** Yuwen Huang; Xiang Pan

**ID:** 152355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgdviE0ING>) | [PDF](<https://openreview.net/pdf?id=TgdviE0ING>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152355>)

Post\-training pruning of large language models \(LLMs\) zeroes a fraction of the weights and reconstructs the survivors without retraining, addressing the weight\-memory bottleneck of LLM serving\. At a fixed mask the per\-row reconstruction admits a closed\-form Optimal Brain Surgeon \(OBS\) optimum, but the cost of the exact joint solve is cubic in the layer dimension; one\-pass methods such as SparseGPT and Wanda approximate it at quadratic cost without attaining the per\-block joint optimum\. We introduce Block\-OBS\-GS, which solves the per\-block joint OBS reconstruction exactly within SparseGPT's complexity class via a per\-row Cholesky factorisation of the in\-block damped Hessian \(one third the cost of an explicit inverse, reused across the algorithm\) and follows it with a single cross\-block Gauss\-\-Seidel sweep\. We prove three guarantees: per\-layer FLOP count in SparseGPT's complexity class, with the leading $mn^\{2\}$ constant dropping from $1/2$ \(SparseGPT\) to $3\\rho/2$ \(Block\-OBS\-GS\) where $\\rho=1\-s$, hence strictly lower for sparsity $s&gt;2/3$; per\-row reconstruction error at most SparseGPT's, strict whenever the activation Hessian has non\-zero off\-diagonal coupling; and a closed\-form distance bound to the unregularised joint\-OBS optimum that contracts geometrically per sweep\. Across six Llama\-3 and Qwen\-3 backbones from 3B to 70B parameters, Block\-OBS\-GS attains the lowest WikiText\-2 perplexity at every tested sparsity on the three Llama\-3 backbones, with a $47\\%$ perplexity reduction over SparseGPT on Llama\-3\.1\-8B at $s=0\.875$; the highest seven\-task commonsense Avg7 on six of twelve populated cells; 5\-shot Massive Multitask Language Understanding \(MMLU\) within $0\.026$ of SparseGPT across populated cells; and the lowest WikiText\-2 perplexity on four of five backbones under $2\{:\}4$ structured sparsity\.

## TOM\-Pruning: Target\-aware Output Manifold for LLM Pruning

**Authors:** Junchen Hao; Weikang Meng; Yingjian Li; Zheng Zhang

**ID:** 153219 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mv31DAbjkw>) | [PDF](<https://openreview.net/pdf?id=Mv31DAbjkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153219>)

Post\-training pruning compresses pretrained large language models \(LLMs\) by removing redundant weights without full retraining\.  However, existing pruning criteria primarily rely on parameter statistics or generic reconstruction errors, fundamentally ignoring the underlying geometric structure of how weight removals perturb the layer output\.  In this paper, we rethink LLM pruning from \*a local manifold perspective\* and reveal that representative methods \(e\.g\., SparseGPT and Wanda\) implicitly assume a standard Euclidean output metric\.  This geometry\-agnostic assumption yields an isotropic manifold that assigns uniform costs to all perturbation directions, thereby failing to capture target\-dependent sensitivity\.  To overcome this structural limitation, we propose \*\*Target\-Aware Output Manifold Pruning\*\* \(TOM\-Pruning\)\.  TOM\-Pruning equips the output perturbation space with a target\-aware local Riemannian metric, assigning direction\-dependent geometric costs based on the perturbation's alignment with the target response\.  By mathematically pulling this metric back to the parameter space, we derive a pruning sensitivity score that inherently captures a cosine\-based input\-output channel affinity\.  To resolve the poor discriminability of this raw affinity in high\-dimensional spaces, we further introduce a Competitive\-Hubness Channel Affinity Mechanism to reconstruct a highly distinguishable final pruning criterion\.  Extensive experiments across multiple LLM families demonstrate that our manifold\-driven approach consistently outperforms existing no\-weight\-update pruning baselines under various sparsity settings, notably reducing WikiText\-2 perplexity by 26\.8\\% on LLaMA\-3\.2\-1B and achieving an 11\.0\\% relative zero\-shot accuracy gain on LLaMA\-3\-8B at 70\\% unstructured sparsity\.

## GeoPair: Geometry\-Preserving Cross\-Layer Factorization for Training\-Free Transformer Compression

**Authors:** Baher Mohammad; Ammar Ali; Stamatios Lefkimmiatis

**ID:** 151461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aT3fx6NjSJ>) | [PDF](<https://openreview.net/pdf?id=aT3fx6NjSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151461>)

Transformer architectures exhibit cross\-layer redundancies, yet post\-training compression pipelines typically optimize layers in isolation or rely on heuristic grouping strategies that disregard layer\-specific activation geometries\. We introduce a principled, training\-free framework that sequentially optimizes cross\-layer weight pairings and shared\-dictionary factorizations\. Rather than forcing weights of adjacent layers to share a basis or heuristically merging activation statistics, our approach identifies structurally compatible projections and learns a shared representation that better preserves each layer’s distinct calibration geometry\. Coupled with structured sparsity, this yields highly efficient weight decompositions without sacrificing functional fidelity\. Across diverse architectures, scales, and modalities, our method achieves state\-of\-the\-art results, consistently outperforming independent structured weight decompositions and alternative pairwise weight factorizations, which operate under heuristic grouping strategies\. By replacing heuristic engineering strategies with a convergent, optimization\-driven pipeline, we establish a theoretically grounded foundation for scalable, transformer compression across different modalities\.

## Efficient Tree Draft for Long\-Context Speculative Decoding

**Authors:** Brian J Chan; Ning\-Chi Huang; Kai\-Chiang Wu

**ID:** 152500 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sg8rYQS4Lz>) | [PDF](<https://openreview.net/pdf?id=Sg8rYQS4Lz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152500>)

Speculative decoding is an effective technique for accelerating autoregressive models in memory\-bound regimes\. Prior work has explored tree\-based drafting to speculate multiple candidates at each step, improving verification acceptance rates\. However, existing systems fail to fully realize the potential of tree\-based drafting, leaving significant performance overhead\. In this paper, we present FastDraft, a plug\-and\-play module that improves the efficiency of tree\-based drafting in long\-context speculative decoding\. FastDraft exploits both the shared\-prefix I/O pattern across draft branches and the constrained tree structure of speculative decoding, enabling specialized kernels that reduce draft\-phase overhead while preserving compatibility with existing inference frameworks\. FastDraft requires no modifications to the target model, draft model, or sampling logic\. We implement FastDraft within SGLang and compare it against SGLang’s vanilla tree\-based drafting backend, demonstrating substantially faster draft execution: up to 2\.66× speedup in the draft phase and 1\.77× higher throughput over SGLang under long\-context settings\.

## T\-ReX: Learning Tile\-Reuse Indexes for Structured Model Compression

**Authors:** Haoyi Yang; Simon Kohaut; Zihan Ye; Devendra Singh Dhami; Kristian Kersting

**ID:** 151977 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WPzHvuYvOo>) | [PDF](<https://openreview.net/pdf?id=WPzHvuYvOo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151977>)

The rapid proliferation of large\-scale machine learning models, such as LLMs, has driven remarkable progress across application domains\. Nevertheless, their scale comes with significant deployment challenges and inherent redundancies that remain open challenges to this day\.  To this end, we propose the Tile\-Reuse Index \(T\-ReX\), a structured model compression method that identifies and indexes reusable, contiguous parameter groups \(tiles\) across a model's architecture\.  By learning a compact set of matching tiles, we compress the model's memory footprint while preserving its performance\.  Furthermore, by reconstructing dense layers on the fly at inference time, T\-ReX compressed models remain efficient at runtime\.  In our experiments, we show that T\-ReX outperforms existing compression methods across benchmarks by most closely matching the original model's performance\.  We furthermore show how post\-training on top of T\-ReX enables small footprint models to recover most of the performance loss introduced by compression\.

## SpectralKV: Redundancy\-Aware KV Cache Compression via Spectral Coreset Selection

**Authors:** Fangming Zhao; Fulun Ye; Xiaofei Yue; Ziming Zhao; Yu Peng; Junyu Chen; Tingting Li

**ID:** 148958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ttixAKQvFd>) | [PDF](<https://openreview.net/pdf?id=ttixAKQvFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148958>)

The key\-value \(KV\) cache has become a dominant memory and bandwidth bottleneck for serving long\-context large language models, motivating a growing body of work on KV cache compression\. Most existing methods follow a common recipe: a uniform per\-layer budget and attention top\-$k$ token selection, but this recipe is \\emph\{data\-oblivious\} \(ignoring cross\-layer variation in attention concentration\) and \\emph\{redundancy\-blind\} \(retaining near\-duplicate key\-\-value entries\)\. We propose \\textbf\{SpectralKV\}, a training\-free framework that addresses both issues jointly\. Across layers, a lightweight concentration\-based criterion redistributes a fixed global budget based on the entropy of observation\-window attention, giving more slots to layers whose attention is more concentrated\. Within each layer, a spectral coreset selector treats keys and values as geometric objects in a metric\-aligned joint feature space and selects tokens via residual pivoting, suppressing near\-duplicates while preserving geometrically distinct directions\. On Llama\-3\.1\-8B and Qwen3\-8B, SpectralKV consistently outperforms seven strong baselines on 15 LongBench tasks and PG\-19 perplexity at 16K and 32K contexts, with the largest gains at aggressive compression ratios down to $6\.25\\%$ keep\. And a static\-budget variant reduces peak prefill VRAM by up to $44\\%$ with negligible quality loss\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/spectralKV\-2FF7\}\.

## RecMem: Recurrent Memory Compression for Long\-Sequence Recommendation

**Authors:** Haoyi Hu; Gaoyang Guo; Yunjia Xi; Wen Chen; Weiwen Liu; Jian Wu; Yuning Jiang; Weinan Zhang

**ID:** 149955 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lvtUjInAvY>) | [PDF](<https://openreview.net/pdf?id=lvtUjInAvY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149955>)

Sequential recommenders need long histories, but full\-prefix attention scales with user lifetime\. We argue that an effective memory mechanism should provide space invariance, semantic fidelity, and lifelong evolvability, which existing fixed\-window or capped\-memory methods do not jointly satisfy\. We propose RecMem, a recurrent compression framework that folds history segments into M forget\-gated memory slots\. RecMem has a history\-length\-independent rollout error bound, and its fixed\-capacity memory is trained by next\-item prediction to preserve useful signals\. On MerRec, RecMem uses 5\.6x fewer decoder\-side tokens than full attention while retaining 88–97% of Recall@10–200\. Compared with a compressed truncation baseline at similar decoder cost, RecMem improves Recall@50\+ by 4–6 percentage points by compressing the full history rather than discarding old interactions\. It also remains stable over 1,800 test steps\.

## FTerViT: Fully Ternary Vision Transformer

**Authors:** Szymon Ruciński; Pietro Bonazzi; Engin Turetken; Simon Narduzzi; Michele Magno; Nadim Maamari

**ID:** 154979 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9SnaFlb35c>) | [PDF](<https://openreview.net/pdf?id=9SnaFlb35c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154979>)

Ternary Vision Transformers offer substantial model compression, however state\-of\-the\-art methods only ternarize the encoder layers, leaving patch embeddings, LayerNorm parameters, and classifier heads in full precision\. In compact models targeting resource\-constrained processors, such as microcontrollers, these remaining full\-precision components determine the total memory footprint, severely limiting deployment efficiency and on\-device feasibility\. In this work, we introduce a fully ternarized Vision Transformer in which \\emph\{all\} weight matrices and normalization parameters are ternarized \(FTerViT\)\. To this end, we introduce two novel operators : TernaryBitConv2d with per\-channel scaling for patch embedding and TernaryLayerNorm\. FTerViT is trained using knowledge distillation, followed by a lightweight quantization\-aware recovery phase\. Our ternary W2A8 DeiT\-III\-S at 384$\\times$384 resolution achieves 82\.43\\% ImageNet\-1K top\-1 at 6\.09\\,MB \($\{\\sim\}$15$\\times$ compression, $\-$2\.42\\,pp vs\.\\ FP32\), outperforming prior ternary ViTs methods up to 8 pp\. Finally, we demonstrate the first implementation of ternary vision transformers on a dual cores XTensa LX7 microcontroller inside the ESP32\-S3 system\-on\-chip\. By deploying FTerViT\-Small \(based on DeiT\-III\-Small at 224$\\times$224 resolution, 5\.81\\,MB\), we achieve 79\.64\\% ImageNet\-1K top\-1 accuracy\.

## UTOPI: Efficient Egocentric Long\-Video Understanding in AR via User\-Guided Token Pre\-Compression

**Authors:** ziqi wang; Su Chen; Qiance Tang; Jieyu Lin; Ziyun Li; Barbara De Salvo; Sai Qian Zhang

**ID:** 153858 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ICcMtlCHJL>) | [PDF](<https://openreview.net/pdf?id=ICcMtlCHJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153858>)

As long\-video understanding becomes increasingly important, augmented reality \(AR\) devices offer a natural platform for deploying egocentric video intelligence\. Yet first\-person videos often contain substantial temporal redundancy, creating heavy memory and compute demands for resource\-limited AR hardware\. We present\~\\textit\{UTOPI\}, a plug\-and\-play pre\-compression module tailored to egocentric long\-video processing on AR devices\. UTOPI first uses user motion cues to estimate cross\-frame overlap and remove redundant content through a viewpoint\-shift\-robust pruning strategy\. It then leverages eye\-tracking signals to detect user fixation regions, separating attention\-relevant foreground from background and preserving important content through a fine\-tuned neural adjustment module\. Evaluated across multiple benchmarks and model backbones, UTOPI reduces video tokens by up to $95%$ while maintaining task performance\.

## Clapping: Removing Per\-sample Storage for Pipeline Parallel Learning with Communication Compression

**Authors:** Boao Kong; Xu Huang; Yuqi Xu; Yixuan Liang; Bin Wang; Kun Yuan

**ID:** 148239 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zMLxSjEos8>) | [PDF](<https://openreview.net/pdf?id=zMLxSjEos8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148239>)

Pipeline\-parallel distributed optimization is essential for large\-scale machine learning but is challenged by significant communication overhead from transmitting high\-dimensional activations and gradients between workers\. Existing approaches often depend on impractical unbiased gradient assumptions or incur sample\-size memory overhead\. This paper introduces Clapping, a Communication compression algorithm with LAzy samPling for Pipeline\-parallel learnING\. Clapping adopts a lazy sampling strategy that reuses data samples across steps, breaking sample\-wise memory barrier and supporting convergence in few\-epoch or online regimes\. Clapping comprises two variants including Clapping\-FC and Clapping\-FU, both of which achieve convergence without unbiased assumption for compressed gradient, effectively addressing compression error propagation in multi\-worker settings\. Numerical experiments validate the performance of Clapping across different tasks\.

## Constrained Factorization with Diagonal Scaling: Rank\-Revealing Training and Pruning

**Authors:** Yikun Hou; Emrullah Akbas; Suvrit Sra; Alp Yurtsever

**ID:** 152576 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S4MNR0ZcxB>) | [PDF](<https://openreview.net/pdf?id=S4MNR0ZcxB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152576>)

Gradient descent for matrix factorization exhibits an implicit bias toward approximately low\-rank solutions, even in regimes where the iterates may grow unbounded\. We study this behavior through a constrained factorization with diagonal scaling, separating bounded outer factors from explicit diagonal scale parameters\. For positive semidefinite matrix recovery, we use the model $X \\approx UDU^\\top$, where $U$ is constrained to a Frobenius norm ball and $D$ is a nonnegative diagonal factor\. Although this reparameterization preserves the stationary points of classical Burer\-Monteiro factorization, its projected dynamics consistently recover truly \(rather than approximately\) low\-rank solutions across a wide range of step sizes and initializations\.  Motivated by this behavior, we extend the construction to neural networks by inserting diagonal layers between Frobenius\-norm\-constrained outer layers\. The resulting UDV models exhibit strong rank\-revealing structure during training, with many diagonal components and associated columns collapsing toward zero and becoming naturally prunable\. We exploit this structure through an SVD\-based pruning procedure \(UDVPruning\) that identifies and removes redundant units during training\. Across ViT and MLP\-Mixer benchmarks, UDVPruning substantially reduces parameters and FLOPs while maintaining competitive test accuracy and often improving measured training time, inference latency, and energy consumption\.

## KV Cache Compression via Attention Output Distortion Minimization

**Authors:** Yi Wang; Yixuan Cao; Qiang Ding; Zelin Gao; Ping Luo

**ID:** 153808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IZ1HIOsJHX>) | [PDF](<https://openreview.net/pdf?id=IZ1HIOsJHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153808>)

Efficient long\-context inference requires compressing the KV cache under strict memory budgets without degrading model outputs\. We formulate this problem as a constrained optimization: minimize the total attention\-output distortion subject to a global average bit\-width budget, where each token’s KV entry can be assigned a bit\-width ranging from 0 \(eviction\), through mixed precision, to 16 \(no compression\)\.  The central challenge is to estimate each token’s contribution to attention\-output distortion\. We address this via a first\-order perturbation analysis of the attention mechanism, which yields a closed\-form decomposition of the distortion\. Specifically, the compression cost of each token factorizes into \(i\) a token\-specific risk score that captures the sensitivity of the attention output to perturbations of that entry, and \(ii\) a precision\-dependent quantization error determined by the chosen bit\-width\. Building on this factorization, we solve the global allocation problem via Lagrangian relaxation, reducing it to independent per\-token decisions that can be efficiently computed\.  Experiments on LongBench and RULER with LLaMA\-3\.1\-8B\-Instruct and Qwen3\-8B show that our method achieves comparable accuracy to uniform 4\-bit quantization while using an average of 2 bits per entry \(2× memory reduction\)\. At an average of 1 bit, our method maintains substantially higher accuracy than both uniform quantization and token eviction baselines, which deteriorate sharply in this regime\. The advantage concentrates on retrieval\-sensitive subtasks, where dispersed evidence makes uniform allocation and hard eviction especially costly\.

## SAMoR: Motion Modelling for Articulated Objects of Any Skeleton and Topology

**Authors:** Yuhao Zhang; Gerard Pons\-Moll; Tolga Birdal

**ID:** 149576 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p5UNbKdSNp>) | [PDF](<https://openreview.net/pdf?id=p5UNbKdSNp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149576>)

Modeling motion for articulated objects of arbitrary skeleton topology remains difficult: existing motion generators target a fixed human skeleton, and prior adaptations either fail to share a vocabulary across rigs or discard motion detail through global pooling\. Our key observation is that while joint\-level motion does not correspond cleanly across species, motion of functional joint groups does\-\-\-a human arm, a wolf foreleg, and a bird wing share semantic motion structure despite differences in joint count and connectivity, a correspondence that joint names \(e\.g\., \`\`forearm'', \`\`wing\\\_L1''\) partially expose even when topology does not\. We introduce SAMoR \(Skeleton\-Aware Motion Representation for Articulated Objects\), a cross\-topology motion representation that encodes each motion segment as a small fixed number \($K\{=\}8$\) of part tokens shared across arbitrary skeletons\. SAMoR takes three input signals\-\-\-per\-joint motion features, kinematic graph structure, and joint\-name embeddings\-\-\-and processes them with a graph\-transformer encoder, then compresses the resulting heterogeneous per\-joint features into part\-level tokens via cross\-attention pooling and residual vector quantization, yielding a discrete motion codebook shared across rigs\. To prevent the part queries from collapsing into redundant global representations, we introduce a topology\-agnostic attention supervision loss, combined with random joint\-name dropout to prevent over\-reliance on text labels; together these encourage the part tokens to cluster joints into functional groups from names, structure, and motion jointly\. We curate a unified heterogeneous motion corpus from HumanML3D, Truebones Zoo, and animated Objaverse\-XL assets, and evaluate SAMoR on held\-out characters with unseen skeletons\. The resulting representation supports accurate reconstruction and cross\-topology motion transfer, and further enables text\-conditioned generation and localized part\-wise editing through a MaskGIT token generator\. SAMoR reaches $2\.75\\\!\\times\\\!10^\{\-2\}$ normalized MPJPE on cross\-topology reconstruction\-\-\-$5\.8\\\!\\times$ below the strongest adapted variable\-$J$ tokenizer baseline\-\-\-and remains competitive with fixed\-skeleton specialists on HumanML3D for both VQ\-VAE reconstruction and text\-to\-motion generation\.

## Computational Depth Predicts Quantization Sensitivity in Multimodal Models

**Authors:** Dongnan Gui; Ruizhe Wang

**ID:** 150194 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k2VA2TJFFL>) | [PDF](<https://openreview.net/pdf?id=k2VA2TJFFL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150194>)

Post\-training quantization degrades multimodal model capabilities unevenly, yet practitioners lack a principled way to predict which capabilities will collapse\. We propose the \*\*Computational Depth Principle\*\* \(CDP\): end\-to\-end fidelity under quantization follows $\\hat p^n$, where $n$ counts sequential precision\-dependent operations and $\\hat p$ is a per\-architecture survival rate\. Across four VLM families and diverse benchmarks spanning image understanding, image generation, video understanding, and video generation, we show that deeper reasoning tasks consistently degrade more steeply and that a single shallow probe predicts the full degradation ranking on held\-out architectures\. The same exponential form extends to image generation, where denoising step count plays the role of depth, and to video understanding, where longer temporal reasoning chains amplify losses\. For video generation, spatial quality degrades more than temporal coherence, indicating that the dominant compounding axis is denoising depth rather than cross\-frame coupling\. A complementary distortion\-to\-information \(D/I\) flip ratio diagnoses quantization method effects, revealing that certain methods preserve near\-baseline quality while others produce catastrophic collapses on specific architecture pairings that aggregate accuracy alone cannot detect\. Module ablation localizes the sensitivity to the language backbone rather than the vision encoder\. Together, depth and D/I convert full\-suite evaluation into a two\-probe screening protocol that surfaces the highest\-risk capability gaps first\.

## Next\-Latent Prediction Transformers Learn Compact World Models

**Authors:** Jayden Teoh; Manan Tomar; Kwangjun Ahn; Edward Hu; Tim Pearce; Pratyusha Sharma; Akshay Krishnamurthy; Riashat Islam; Alex Lamb; John Langford

**ID:** 155772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=325YSKkc2n>) | [PDF](<https://openreview.net/pdf?id=325YSKkc2n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155772>)

Transformers replace recurrence with a memory that grows with sequence length and self\-attention that enables ad\-hoc look ups over past tokens\. Consequently, they lack an incentive to compress history into compact latent states with consistent transition rules\. This often leads to learning solutions that generalize poorly\. We introduce \*\*Next\-Latent Prediction\*\* \(NextLat\), which extends standard next\-token training with \*self\-supervised\* predictions in the latent space\. Specifically, NextLat trains a transformer to learn latent representations that are predictive of its next latent state given the next output token\. Theoretically, we show that these latents provably converge to \*belief states\*, compressed information of the history necessary to predict the future\. This simple auxiliary objective injects a recurrent inductive bias into transformers, while leaving their architecture, parallel training, and inference unchanged\. NextLat effectively encourages the transformer to form compact internal world models with its own belief states and transition dynamics—a crucial property absent in standard next\-token prediction transformers\. Empirically, across benchmarks in world modeling, reasoning, planning, and language modeling, NextLat demonstrates significant gains over standard next\-token training in downstream accuracy, representation compression, and lookahead planning\. Furthermore, NextLat enables \*variable\-length self\-speculative decoding\*, accelerating inference by up to $3\.3\\times$ in the language domain\.      NextLat stands as a simple and efficient paradigm for shaping transformer representations toward stronger generalization\.

## CoQuant: Covariance\-Aware Rotation for 2\-bit KV Cache Quantization

**Authors:** Zhongzhu Zhou; Donglin Zhuang; Jisen Li; Ziyan Chen; Shuaiwen Song; Ben Athiwaratkun; Xiaoxia Wu

**ID:** 154658 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ByTqCb7VnS>) | [PDF](<https://openreview.net/pdf?id=ByTqCb7VnS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154658>)

INT2 KV\-cache quantization is attractive for long\-context LLM serving, but it remains difficult to make both accurate and deployable\. Simple rotations such as Hadamard transforms reduce outliers, but still degrade at INT2 because they are not aligned with downstream attention\. We propose CoQuant, an Ultra\-low\-bit KV Cache quantization method that estimates \*attention\-aware covariance\* structures offline and uses them to derive fixed rotations and clipping thresholds for quantization\. In this way, it aligns KV quantization with the covariance structures that attention actually consumes\. More importantly, we not only provide theoretical justification but also develop a fully deployable CoQuant system with a custom INT2 attention kernel that remains compatible with paged KV\-cache serving and fused kernel pipelines, enabling seamless integration into modern LLM serving frameworks such as SGLang and vLLM\.  We evaluate our methods on recent reasoning models with reasoning traces of up to 32k tokens across 5 tasks\. On Qwen3\-4B\-Thinking\-2507 and Qwen3\-8B, CoQuant reduces the BF16 accuracy gap to 3\.78 and 1\.42 points, respectively, while naive rotation INT2 collapses to nearly zero\. We further scale CoQuant to Qwen3\-32B and GLM\-4\.7 \(358B params\), where it remains effectively on par with BF16\. On long context \- RULER\-NIAH up to 128K, CoQuant remains robust on both Qwen3 models, while naive rotation INT2 collapses\. System\-wise, CoQuant reduces KV\-cache memory by approximately 8×, improves throughput by up to 7× at large batch sizes under the same memory budget, and accelerates batch\-size\-1 decoding by up to 3× over BF16 due to reduced memory bandwidth overhead\.

## Backdoor Attacks under Lossy Compression: From Failure to Reactivation and Adaptation

**Authors:** Qian Li; Yunuo Chen; Yuntian Chen

**ID:** 155082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Zds0GA3mw>) | [PDF](<https://openreview.net/pdf?id=8Zds0GA3mw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155082>)

Real\-world backdoor attacks often require poisoned datasets to be stored and transmitted before they are used to compromise deep learning systems\. In the era of big data, however, the inevitable use of lossy compression poses a fundamental challenge to invisible backdoor attacks\. We observe that triggers embedded in RGB images can become ineffective once the images are lossily compressed into binary bitstreams, such as JPEG files, for storage and transmission\. Consequently, poisoned data may lose their malicious functionality after compression, causing backdoor injection to fail\.  Prior compression\-based attacks typically exploit compression artifacts as certain triggers to distinguish poisoned RGB samples from uncompressed benign ones, rather than addressing whether malicious information can survive a shared lossy storage\-and\-transmission pipeline\.  In this paper, we highlight the necessity of explicitly accounting for lossy compression in backdoor attacks\. This requires attackers to ensure that transmitted binary bitstreams preserve malicious trigger information, such that effective triggers can be induced after decompression\.  Building on the region\-of\-interest \(ROI\) coding mechanism in image compression, we propose two poisoning strategies tailored to inevitable lossy compression\. First, we introduce \\textbf\{Universal Attack Reactivation\}, a general method that uses sample\-specific ROI masks to reactivate trigger information in  bitstreams for learned image compression \(LIC\)\. Second, we present \\textbf\{Compression\-Adapted Attack\}, a new attack strategy that employs customized ROI masks to encode trigger information into  bitstreams and applies to both traditional codecs and LIC\. Extensive experiments demonstrate the effectiveness of both strategies\.

## HeatKV: Head\-tuned KV\-cache Compression for Visual Autoregressive Modeling

**Authors:** Jonathan Cederlund; Axel Berg; Durmus Alp Emre Acar; Chuteng Zhou; Pontus Giselsson

**ID:** 149898 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mPOtDA3Wld>) | [PDF](<https://openreview.net/pdf?id=mPOtDA3Wld>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149898>)

Visual Autoregressive \(VAR\) models have recently demonstrated impressive image generation quality while maintaining low latency\. However, they suffer from severe KV\-cache memory constraints, often requiring gigabytes of memory per generated image\. We introduce HeatKV, a novel compression method that adapts cache allocation in each head based on its attention to previously generated scales\. Using a small offline calibration set, the attention heads are ranked according to their attention scores over prior scales\. Based on this ranking, we construct a static pruning schedule tailored to a given memory budget\. Applied to the Infinity\-2B model, HeatKV achieves $2 \\times$ higher compression ratio in memory allocation for KV cache compared to existing methods, while maintaining similar or better image fidelity, prompt alignment and human perception score\. Our method achieves a new state\-of\-the\-art \(SOTA\) for VAR model KV\-cache compression, showcasing the effectiveness of fine\-grained, head\-specific cache allocation\.

## PatchKV: Weight Space Compensation of KV Cache

**Authors:** Chanryeol Lee; Chanhyuk Lee; Yeonwoo Choi; Donggyun Kim; Seunghoon Hong

**ID:** 150775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fTgwQmKmJx>) | [PDF](<https://openreview.net/pdf?id=fTgwQmKmJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150775>)

Long\-context inference with Large Language Models \(LLMs\) is bottlenecked by the linearly growing memory of the key\-value \(KV\) cache\. Existing compression methods reduce the cache through token eviction or approximation, but degrade sharply at aggressive compression budgets\. We propose PatchKV, a training\-free framework that compensates KV cache compression methods by carrying part of the context in the model's weights\. PatchKV pairs an off\-the\-shelf compressed KV cache with a context\-specific weight patch, which is computed once at context\-loading time and served for downstream queries for the context\. The weight patch is derived in closed form via ridge regression, by aligning the block\-wise activations of context\-derived reference query tokens under the full cache and the compressed cache\. Once merged into the model, the patch leaves the forward graph and per\-query inference cost unchanged in the single\-context, multi\-query setting\. Across long\-context QA \(SCBench with up to 170k tokens, SQuAD, NIAH\) and math \(GSM8K\) benchmarks on three model architectures, PatchKV consistently improves cache compression methods, suggesting an alternative direction to compensate them at aggressive budgets\.

## Cross\-User Poisoning: User\-Task Boundary Failures in Multi\-User Collaborative Language Agents

**Authors:** Atharv Singh Patlan; Peiyao Sheng; S Ashwin Hebbar; Prateek Mittal; Pramod Viswanath

**ID:** 148398 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y8FrK1agS0>) | [PDF](<https://openreview.net/pdf?id=y8FrK1agS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148398>)

Language agents are moving from single\-user assistants to shared collaborators in workspaces, forums, and group chats\. A shared agent observes interleaved messages from multiple users, maintains persistent context, and executes tool actions, creating a boundary problem absent from standard single\-user agents: the agent must decide not only whether an instruction is safe, but which user or task it is allowed to govern\. We identify cross\-user poisoning \(CUP\), where an adversary injects a message into shared context that is later applied while the agent serves a benign user, causing unauthorized actions or responses outside the instruction's intended scope\.  We validate CUP on two deployed multi\-user agents, Continua and ElizaOS, and introduce MURMUR, a framework for evaluating shared\-context agents under concurrent multi\-user interactions\. Across Slack, Workspace, and Airline domains, CUP achieves high attack success, persists across later interactions, and remains substantially more effective than matched prompt\-injection attacks\. We evaluate boundary\-scoping defenses and find that context summarization alone is insufficient, while task clustering and provenance prompting substantially reduce non\-adaptive propagation\. These results show that robust multi\-user agents require explicit user/task scoping rather than generic input filtering or context compression\.

## Reliable Clustering and Quantization via Distortion\-Constrained Optimal Transport

**Authors:** Tianhao Wu; Wei Zhang; Haoran Pang; Haoran YANG; Hao Shi

**ID:** 153600 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KBzmOm0ugU>) | [PDF](<https://openreview.net/pdf?id=KBzmOm0ugU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153600>)

Clustering and vector quantization are core primitives for representation learning and large\-scale retrieval, yet widely used methods often produce clusters or codewords of highly uneven quality, especially in noisy or heterogeneous data\.  In this paper, we propose a distortion\-constrained optimal transport \(DCOT\) framework that explicitly enforces per\-cluster bounds on the average assignment distortion, defined as the expected distance between data points and their assigned representatives, ensuring more consistent and reliable representations\. Our formulation couples an optimal transport assignment objective with cluster\-level distortion constraints to control cluster quality\. To solve this constrained problem, we develop an efficient alternating optimization algorithm that iteratively updates transport plans, representatives \(codewords\), and dual variables\. We further provide theoretical guarantees including entropic consistency, coordinate descent, and sublinear convergence\. Importantly, DCOT serves as a plug\-in assignment module that can be seamlessly integrated into a wide range of vector quantization methods\. Replacing the assignment step with DCOT consistently improves reconstruction quality across diverse architectures and training settings, demonstrating strong robustness and general applicability\.

## Beyond Expected Values: Risk\-Sensitive Planning with Distributional Monte\-Carlo Tree Search

**Authors:** Quynh Trinh; Trung Nguyen; Nam Nguyen; Tuan Dam

**ID:** 149403 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qKB3gDxeBz>) | [PDF](<https://openreview.net/pdf?id=qKB3gDxeBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149403>)

Monte\-Carlo Tree Search \(MCTS\) typically stores only scalar mean estimates, which makes it poorly suited for tail\-risk objectives such as conditional value\-at\-risk \(CVaR\)\. We introduce \*\*Categorical Thompson Sampling with Optimism \(CATSO\)\*\* and \*\*Particle Thompson Sampling with Optimism \(PATSO\)\*\*, two distributional MCTS algorithms that maintain finite\-support empirical backup laws at Q\-edges\. CATSO represents Q\-edge laws with categorical atoms and Dirichlet Thompson sampling, while PATSO represents them with adaptive particles\. Both algorithms select actions using the CVaR of a Thompson\-sampled Q\-edge law plus a polynomial optimism bonus, and propagate scalar continuation values through visit\-weighted averages of child Q\-edge CVaR scores\. For the finite\-depth nested CVaR planning target, we prove an $O\(n^\{\-1/2\}\)$ bound on the root value error after $n$ rollouts, which upper\-bounds the risk\-sensitive simple regret\. CATSO adds a fixed\-grid discretization bias, while capped PATSO adds a tunable Wasserstein compression bias\. Experiments on stochastic planning benchmarks show that distributional Q\-edges improve lower\-tail return and reduce catastrophic outcomes when mean\-optimal and risk\-sensitive behavior differ\.

## ResKV: Residual\-based Channel\-wise Unstructured Pruning for KV Cache Compression

**Authors:** Yue Chen; Jinze Li; Dajiang Liu

**ID:** 152894 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcOi9GxwJj>) | [PDF](<https://openreview.net/pdf?id=PcOi9GxwJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152894>)

In modern LLM applications, the demand for extended context lengths continues to surge, making KV cache a major performance bottleneck in long\-context inference\. Channel\-wise pruning has emerged as a prevalent KV cache compression paradigm; however, existing solutions overlook inherent similarities among KV vectors, resulting in limited pruning ratios and noticeable performance degradation\. To tackle this issue, we present ResKV, a novel residual\-driven channel\-wise pruning framework that fully exploits KV vector similarity for effective compression\. ResKV first clusters highly similar KV vectors via cosine similarity metrics, then calculates residual vectors by subtracting each cluster’s centroid from the original features\. Subsequent channel\-wise unstructured pruning and per\-token quantization are exclusively applied to these residual components\. During inference, preserved residuals are combined with their corresponding centroids to accurately recover dense KV representations\. Benefiting from the low magnitude and sparse, near\-zero properties of centroid residuals, both pruning and quantization incur only negligible approximation errors\. Experimental results show that ResKV reduces peak memory consumption by 45\.6% and improves inference throughput by 4\.27× against dense FlashAttention inference, while sustaining competitive model performance\. Under identical sparsity constraints, ResKV outperforms state\-of\-the\-art channel\-wise KV pruning methods by achieving up to 2\.26 points higher accuracy and 2\.63× faster end\-to\-end throughput\.

## Speculative Decoding Is Per\-Token, Not Path

**Authors:** Songyan Dai

**ID:** 150210 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jumLplfWH0>) | [PDF](<https://openreview.net/pdf?id=jumLplfWH0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150210>)

We prove that the speedup of exact speculative decoding is governed by a per\-token rate, not by the path\-level prefix\-overlap capacity that folklore suggests, and that the gap between the two can be unbounded\. The two candidates are the per\-token Leviathan rate σ\_L\(P, Q\) and the path\-level coupling capacity Ω\_L\(P, Q\) = Σ\_\{t=1\}^L ov\(P\_\{≤t\}, Q\_\{≤t\}\)\. We show σ\_L ≤ Ω\_L always, the inequality is strict already on i\.i\.d\. products, and there exists an explicit fixed\-precision binary trajectory\-exact rejection\-style protocol on L = 2 with E\[τ\] = 19/16 &gt; 9/8 = σ\_L, ruling out σ\_L as a universal upper bound across all trajectory\-exact rounds\. Inside the deployable admissible Leviathan\-style clipped\-ratio class, σ\_L is the tight rate, and the speculation decoding complexity satisfies SDC\_\{B,L\}^Q\(M; u, T\) = Θ\(T / \(σ\_\{L,B\}\(P\_M^\{u,T\}, Q\) \+ 1\)\), achieved by iterated Leviathan and matched up to constants by Wald\. On the path side, Ω\_L exhibits a sharp two\-sided dichotomy in the prefix\-KL profile η\_t: Σ\_t √\(η\_t / 2\) = o\(L\) forces Ω\_L = L − o\(L\), while geometrically bounded overlap o\_t ≤ ρ^t forces Ω\_L ≤ 1/\(1−ρ\) uniformly in L, with no unconditional KL converse\. Two explicit fixed\-precision Transformer families of size O\(log L\) realize the two extremes under the same three\-element proposal family Q = \{Q\_flat, Q\_const\_0, Q\_const\_1\}: a constant\-readout family F⁺ has SDC ≤ T / \(\(1−ε\)L \+ 1\), while an alternating\-parity family F⁻ has SDC ≥ T/5, an unconditional Θ\(L\) architecture separation\. Speculative decoding is not path coupling; it is per\-token clipped\-ratio acceptance, and the architecture of the target controls the rate\.

## OCTOPUS: Optimized KV Cache for Transformers via Octahedral Parametrization Under optimal Squared error quantization

**Authors:** Mark Boss; Vikram Voleti; Simon Donné; Shimon Vainer

**ID:** 152912 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PTfy7K7w8o>) | [PDF](<https://openreview.net/pdf?id=PTfy7K7w8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152912>)

The key\-value \(KV\) cache dominates memory bandwidth and footprint in long\-context autoregressive inference\. Recent rotation\-preconditioned codecs \(TurboQuant, PolarQuant\) show that a structured random rotation followed by a per\-coordinate scalar quantizer matched to an analytically tractable marginal is a near\-optimal recipe for KV compression\. OCTOPUS advances this paradigm through joint quantization of rotated coordinate triplets\. Each triplet's direction is mapped to a square via an octahedral parameterization, and the two resulting coordinates and the triplet norm are Lloyd\-Max quantized against implementation\-matched marginals\. Optimizing the per\-triplet squared error gives a strictly non\-uniform bit allocation depending only on the total dimensionality of the keys\. We find the finite\-dimensional quality optimum with sweeps to be constant on every real decoder we test\. The codec is data\-oblivious, online, and deterministic given a seed\. Across text, video, and audio, OCTOPUS matches or beats every prior rotation codec at every reported bit width and metric, with a lead that grows as bits drop for extreme compression\. Furthermore, a fused Triton implementation reconstructs keys on the fly without materializing the uncompressed key, so the codec adds no decode\-time bandwidth or latency over the existing dequantization\.

## ASAP: Attention Sink Anchored Pruning

**Authors:** Jaehyuk Lee; Hanyoung Kim; Yanggee Kim; Donghun Lee

**ID:** 151159 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=caL9VT4BtX>) | [PDF](<https://openreview.net/pdf?id=caL9VT4BtX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151159>)

Vision Transformers \(ViTs\) face severe computational bottlenecks due to the quadratic complexity of self\-attention at high resolutions\. Existing token reduction methods rely on local metrics—such as single\-layer attention scores—that are inherently vulnerable to the \\emph\{attention sink\} phenomenon, where uninformative tokens are paradoxically preserved over salient foreground objects\. We propose \\textbf\{ASAP\} \(Attention Sink Anchored Pruning\), a training\-free framework that recasts this sink as a feature\. Modeling ViT information flow as a Lazy Random Walk, ASAP identifies the sink as a dominant accumulator of probability mass\. By computing the \\emph\{diffusion distance\} to the sink within the cumulative transition matrix, ASAP partitions tokens via \\emph\{Radial Diffusion Clustering\} and compresses background redundancy through \\emph\{Transition Weight Pooling\} in a single shot\. Extensive experiments across image, video, and vision\-language tasks demonstrate ASAP outperforms state\-of\-the\-art methods, accelerating throughput by up to 48\\% while maintaining—or even exceeding—baseline accuracy\.

## LoRaQ: Optimized Low Rank Approximation for 4\-bit Quantization

**Authors:** Yann Bouquet; Alireza Khodamoradi; Sophie Y Shen; Kristof Denolf; Mathieu Salzmann

**ID:** 155848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2S5ArH5uJa>) | [PDF](<https://openreview.net/pdf?id=2S5ArH5uJa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155848>)

Post\-training quantization \(PTQ\) of large diffusion transformers degrades generative quality at 4\-bit quantization\. Low\-rank approximation methods are a promising solution and append auxiliary linear branches to restore performance\. Current state\-of\-the\-art approaches keep these branches at high precision \(W16A16\) and rely on heavy, data\-dependent calibration for initialization\. Their branch is defined as a precise low\-rank approximation of a full\-rank matrix and therefore cannot keep precision at sub\-16 bit levels\.  We challenge both limitations with LoRaQ \(Low\-Rank Approximated Quantization\), a data\-free calibration approach that optimizes quantization error compensation\. By overcoming the need for high\-precision branches, LoRaQ enables the first fully sub\-16 bit pipeline, allowing the low\-rank branch itself to be quantized\. We demonstrate that, at equal memory overhead, LoRaQ outperforms the state\-of\-the\-art methods in their native implementations on Pixart\-$\\Sigma$, SANA and Flux\.1\. We also analyze mixed\-precision configurations, showing that setups such as W8A8, W6A6, and W4A8 for the low\-rank branch, alongside a W4 residual layer, yield superior results while maintaining a fully quantized architecture compatible with modern mixed\-precision hardware, and translate into kernel\-level speedups of up to $3\.19\\times$ on AMD MI355\.

## P\-EAGLE: Parallel\-Drafting EAGLE with Scalable Training

**Authors:** Xin Huang; Mude Hui; Jaime Campos Salas; Yue Sun; Nathan Pemberton; Ashish Khetan; Xiang song; George Karypis

**ID:** 152869 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PlnpZsdFsg>) | [PDF](<https://openreview.net/pdf?id=PlnpZsdFsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152869>)

Reasoning LLMs produce longer outputs, requiring speculative decoding drafters trained on extended sequences\. Parallel drafting—predicting multiple tokens per forward pass—offers latency benefits over sequential generation, but training complexity scales quadratically with the product of sequence length and parallel positions, rendering long\-context training impractical\. We present P\(arallel\)\-EAGLE, which transforms EAGLE from autoregressive to parallel multi\-token prediction via a learnable shared hidden state\. To scale training to long contexts, we develop a framework featuring attention mask pre\-computation and sequence partitioning techniques, enabling gradient accumulation \\textit\{within\} individual sequences for parallel\-prediction training\. We implement P\-EAGLE in vLLM and demonstrate speedups of 1\.10×–1\.36× over autoregressive EAGLE\-3 across GPT\-OSS 120B, 20B, and Qwen3\-Coder 30B\.

## STAC\-R: Subspace\-Tracked Activation Compression with Residuals

**Authors:** Manar Hamed; Yassine Yaakoubi

**ID:** 148748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vM3HWhzSRT>) | [PDF](<https://openreview.net/pdf?id=vM3HWhzSRT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148748>)

Training\-memory reduction requires identifying which saved tensors drive peak usage and ensuring high\-fidelity backward contractions from compressed states\. We formalize saved\-activation compression as a target\-surface prediction problem: a pre\-training framework to estimate the replaceable memory surface, computational overhead, and parameter\-gradient error\. We introduce STAC\-R \(Subspace Tracked Activation Compression with Residuals\), a saved\-tensor wrapper storing activations as persistent low\-rank coefficients paired with a sparse quantized residual\. Weight gradients are contracted directly from these factors, bypassing full decompression\. To guide deployment, we propose the Saved\-Surface Predictor \($\\mathrm\{SSP\} = A\_C^\+ / P$\), a statistic that upper\-bounds peak memory reduction\. We also derive a gradient bridge linking reconstruction error to parameter\-gradient cosine similarity, determining if a low\-precision state preserves update fidelity\.Evaluations across GPT\-2 \(Medium/Large\) and Pythia\-1\.4B pre\-training show STAC\-R reduces peak memory by 7\.2\-12\.4\\% while keeping long\-horizon validation perplexity within 1\.5\\% of baseline \(Pythia\-1\.4B 10k steps: \+1\.14\\%\) with mean gradient cosine $\\geq$ 0\.98\. On BERT fine\-tuning \(SST\-2\), STAC\-R achieves 12\.45\\% memory reduction with a 0\.15pp accuracy decrease\. Mechanistic benchmarks yield a mean gradient cosine of 0\.9813, outperforming iso\-byte SVD \(0\.9236\) and untracked\-subspace \(0\.6949\) controls\. On the empirical rate\-distortion frontier, STAC\-R is Pareto\-dominant over controls across stored\-byte budgets\. Composed with GaLore, a "Turbo\-fast" variant matches full STAC\-R's memory footprint within 0\.005 GiB while reaching 0\.67𝑥 wall time\. Finally, our analysis identifies memory\-increasing regimes in SwiGLU architectures \(Qwen\-2\.5/Llama\-3\.2\), establishing STAC\-R as a compressor with predictable memory and fidelity conditions checkable before training\.

## Accelerating Long\-Context LLM Prefill via Layer\-wise Progressive Token Pruning in Local Deployment

**Authors:** Zhongxiang Wei; Zhaohan Wang; Zhixiong Zhang; Jin Zhao; Xiaoming Fu

**ID:** 154875 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AEnl58AdSd>) | [PDF](<https://openreview.net/pdf?id=AEnl58AdSd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154875>)

Long\-context inference is increasingly important for privacy\-sensitive local LLM deployment\. In this setting, the prefill stage dominates Time\-to\-First\-Token \(TTFT\), yet existing acceleration methods struggle to balance speed and quality\. Sparse\-attention methods accelerate only the attention module, leaving Feed\-Forward Network \(FFN\) costs unchanged, while auxiliary\-model\-based compression often compromises quality under tight memory budgets\. Recent layer\-wise token pruning methods reduce both attention and FFN computation, but they typically rely on heuristic pruning schedules or token\-recovery mechanisms that introduce decoding overhead\. We propose FastPrefill, a recovery\-free layer\-wise token pruning system for efficient local long\-prompt inference\. FastPrefill employs an offline data\-driven optimizer to determine layer\-wise pruning schedules that maximize fidelity under a latency constraint, and executes these schedules via an algorithm–system co\-design supporting head\-specific sparse attention at runtime, where each head dynamically attends to its own selected key/value tokens\. Evaluations on LongBench and RULER show that FastPrefill maintains comparable inference quality while achieving up to 2\.13x TTFT speedup and 3\.03x end\-to\-end speedup over state\-of\-the\-art baselines\.

## Zero\-Shot Quantization via Weight\-Space Arithmetic

**Authors:** Daniele Solombrino; Antonio Andrea Gargiulo; Alessandro Zirilli; Luca Zhou; Robert Adrian Minut; Emanuele Rodolà

**ID:** 148572 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrUEnnSgXa>) | [PDF](<https://openreview.net/pdf?id=wrUEnnSgXa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148572>)

We show that robustness to post\-training quantization \(PTQ\) is a transferable direction in weight space\. We call this direction the \\emph\{quantization vector\}: extracted from a donor task by simple weight\-space arithmetic, it can be used to patch a receiver model and improve post\-PTQ Top\-1 accuracy by up to \\\(60\\\)$\\%$ in a 3\-bit setting, without receiver\-side quantization\-aware training \(QAT\)\. Because the method requires no receiver training data, it provides a zero\-shot, low\-cost alternative to QAT for extremely low\-bit deployment\. Across multiple vision/language models and more than 30 tasks, donor quantization vectors often yield substantial gains even when donor and receiver tasks differ markedly\. We further prove rigorously that quantization vectors are well\-defined and do not suffer from reparameterization symmetries, and provide a local geometric account of their effects\. Together, these results suggest that quantization robustness can be partially isolated, reused, and transferred through simple weight\-space algebra\.

## Proteus: Incremental Memory Activation for Long\-Context Sequence Modeling

**Authors:** Reza Bayat; Ali Behrouz; Vahab Mirrokni; Aaron Courville

**ID:** 154744 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BJtTMkeGhz>) | [PDF](<https://openreview.net/pdf?id=BJtTMkeGhz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154744>)

The quadratic cost of attention\-based sequence models for long contexts has motivated a growing line of research on memory\-based models that can compress context into a compact state\. However, most existing memory models expose a static memory throughout the entire sequence\. In practice, this approach is prone to memory being “polluted” by early inputs, and it can saturate and fail to incorporate later context\. We study a new paradigm of incremental memory activation, where the effective capacity of memory is controlled and progressively expanded as the context grows\. By imposing an early bottleneck and introducing fresh capacity over time, this leads to better compression of history and reduces interference\. We instantiate this paradigm in Proteus, a straightforward mechanism that can be incorporated into a broad class of neural memory architectures at no additional cost\. We apply Proteus to state\-of\-the\-art models, including Hope\-Attention, SWLA, Comba, and Titans, and observe consistent improvements across all of them\. Overall, our results show that static memory is suboptimal and that incremental memory activation is a promising direction for long\-context management\.

## Length Generalization for Transformers via Compression

**Authors:** Georg Zetzsche; Hongjian Jiang; Andy J Yang; Pascal Bergsträßer; Marco Sälzer; David Chiang; Anthony Widjaja Lin

**ID:** 150600 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gx6QOo6yY5>) | [PDF](<https://openreview.net/pdf?id=gx6QOo6yY5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150600>)

Recent advancements in the length generalization theory have provided us with the ability to reliably predict learnability by transformers\. In particular, the C\-RASP hypothesis \(a formalized version of the so\-called RASP\-l conjecture\) posits that transformers length\-generalize on a task if and only if a solution is expressible in the C\-RASP language\. While this hypothesis has strong empirical validation, theoretical problems arise from the fact that no computable length generalization bounds exist for C\-RASP, as well as the discovery of seemingly contradictory empirical results\. To address this, we refine the C\-RASP hypothesis utilizing the recently\-proposed fragments of the language, CRASP\+ and CRASP1\. These fragment have computable length generalization bounds, though in the worst case requiring an extremely large \(double exponential\) sample size\. It is an open question whether this sample size bounds are tight\. In this paper, we resolve this open question by providing an exponentially tighter bound\. In doing so, we show a polynomial length generalization bound for transformers if we adopt compressed strings, via a novel connection to power words\. As an application, we show how this yields a fine\-grained analysis of C\-RASP conjecture that resolves contradicting experimental evidence against it\.

## Uncertainty as an Underconstrained Axis in Lossy Compression

**Authors:** Enzo Tartaglione

**ID:** 156038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0tD46aY7z8>) | [PDF](<https://openreview.net/pdf?id=0tD46aY7z8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156038>)

Classical rate\-distortion theory minimises expected distortion at a given coding rate but does not constrain the \\emph\{uncertainty\} of the reconstructed signal at the decoder\. We formalise predictive uncertainty $U$ as the conditional variance of the reconstruction given the source, and show that it is an underconstrained degree of freedom of RD\-optimal compression with a sharp empirical signature: at matched rate and matched scalar $U$, two reconstructions of the same image can differ by $40$\+ mIoU points in downstream segmentation depending on \\emph\{where\} the variance is spatially allocated, with $88\\%$ of \(image, quality\) pairs showing a significantly negative within\-image slope of mIoU on $U$\. We derive a closed\-form Uncertainty\-Rate\-Distortion surface and prove a coding\-theoretic converse for additive\-noise channels with linear regression under Gaussian assumption\. A region\-importance spatial\-URD functional also converts the spatial\-allocation finding into a within\-image predictor that generalises across two segmentation architectures, three rates, two codecs, and a different segmentation foundation model on a different dataset\. Cross\-task and cross\-modality probes \(BLIP captioning, CLIP zero\-shot, NYU depth, LibriSpeech speech recognition\) characterise the framework's reach: the spatial\-URD prediction transfers cleanly to locally\-aggregating downstream models on both image and audio modalities, and degenerates predictably for globally\-aggregating ones\. The validation code and a demo for a diffusion task is provided as Supp\. Mat\., and will be released alongside with all the code to reproduce the experiments upon acceptance of the work\.

## Efficiently Aligning Draft Models via Parameter\- and Data\-Efficient Adaptation

**Authors:** Luxi Lin; Zhihang Lin; Zhanpeng Zeng; Yuhao Chen; Qingyu Zhang; Jixiang Luo; Rongrong Ji

**ID:** 153042 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OTKY3Ftw6B>) | [PDF](<https://openreview.net/pdf?id=OTKY3Ftw6B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153042>)

Speculative decoding accelerates LLM inference but suffers from performance degradation when target models are fine\-tuned for specific domains\. A naive solution is to retrain draft models for every target model, which is costly and inefficient\. To address this, we introduce a practical parameter\- and data\-efficient framework named Efficient Draft Adaptation, abbreviated as EDA, for efficiently adapting draft models\. EDA introduces three innovations: \(1\) a decoupled architecture that utilizes shared and private components to model the shared and target\-specific output distributions separately, enabling parameter\-efficient adaptation by updating only the lightweight private component; \(2\) a data regeneration strategy that utilizes the fine\-tuned target model to regenerate training data, thereby improving the alignment between training and speculative decoding, leading to higher average acceptance length; \(3\) a sample selection mechanism that prioritizes high\-value data for efficient adaptation\. Our experiments show that EDA effectively restores speculative performance on fine\-tuned models, achieving superior average acceptance lengths with significantly reduced training costs compared to full retraining\. Code will be released upon acceptance\.

## EchoKV: Efficient KV Cache Compression via Similarity\-Based Reconstruction

**Authors:** Shiyu Ji; Yixuan Wang; Yijun Liu; Qingfu Zhu; Wanxiang Che

**ID:** 152942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PE7GYmhRfw>) | [PDF](<https://openreview.net/pdf?id=PE7GYmhRfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152942>)

The increasing memory demand of the Key\-Value \(KV\) cache poses a significant bottleneck for Large Language Models \(LLMs\) in long\-context applications\. Existing low\-rank KV compression methods reduce this footprint by modifying model projections, limiting the flexibility to switch back to standard full\-cache inference when sufficient memory is available\. In this paper, we propose EchoKV, a flexible KV cache compression framework that supports on\-demand transitions from full KV caching to compressed caching\. Unlike traditional compression\-decompression paradigms, EchoKV utilizes a lightweight network to reconstruct the discarded KV components from a partial subset, exploiting intrinsic inter\-layer and intra\-layer similarities among attention heads\. We further introduce a lightweight two\-stage fine\-tuning strategy, requiring only a few minutes on a single A100 GPU for a 7B model\. Experimental results on LongBench and RULER demonstrate that EchoKV consistently outperforms existing methods across multiple compression ratios and backbone models while preserving the throughput of full\-cache inference in short\-context scenarios\.

## DepthGraft: Structural Regularization through Hierarchical Cross\-Layer KV Reconstruction

**Authors:** Xiaohan Qin; Xiangdong Zhang; Yu Wang; Huaijin Wu; Zhuo Xia; Yebin Yang; Junchi Yan

**ID:** 152636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RaqeCKA8Ch>) | [PDF](<https://openreview.net/pdf?id=RaqeCKA8Ch>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152636>)

Scaling depth is a key route to stronger large language models, but Pre\-LN architectures often suffer from depth\-wise information dilution, limiting the effective use of deep layers\. While cross\-layer connectivity has proven effective at mitigating this problem, existing designs usually introduce additional computation or memory access\. We revisit cross\-layer KV sharing as an efficient form of such connectivity\. Beyond cache compression, each KV reuse edge creates a direct gradient path from deep layers to source KV projections, turning KV sharing into an implicit structural regularizer for KV representation geometry\. We provide a systematic analysis of this mechanism, showing that proper sharing topologies sharpen key retrieval directions while enriching the value content subspace, whereas existing adjacent or global\-anchor designs do not fully exploit this effect\. Motivated by this, we propose DepthGraft, a hierarchical KV\-sharing architecture that reconstructs deep\-layer KV from stride\-aligned shallow\-\-middle source pairs\. DepthGraft distributes non\-local gradient flow across source layers, while preserving prefill early completion and reducing KV cache by roughly one third\. Experiments on dense and MoE models from 0\.5B to 65B parameters show consistent downstream improvements under both GQA and MLA\. Notably, on the 16B MoE model, DepthGraft achieves a \*\*7\.0%\*\* absolute improvement on MMLU\-Pro, along with gains of \*\*6\.6%\*\* on CMMLU and \*\*6\.4%\*\* on C3\. These results validate the potential of DepthGraft as a scalable design for large\-scale pretraining\.

## Hardware\-Friendly Token\-Group Activation Quantization for Low\-Bit Mamba Super\-Resolution

**Authors:** Jinwoo Chung; Jangho Kim

**ID:** 155635 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=46hNfjRw3m>) | [PDF](<https://openreview.net/pdf?id=46hNfjRw3m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155635>)

Mamba\-based super\-resolution models are efficient alternatives to Transformer\-based restoration backbones, but their low\-bit post\-training quantization remains challenging because selective scan, Mamba's input\-dependent state\-space operator, induces different activation ranges across spatial tokens\. Thus, a single layer\-wise clipping range poorly matches all tokens\. We propose Token\-Group Quantization, a hardware\-friendly activation PTQ framework that statically approximates a hardware\-unfriendly post\-scan grouping oracle, where tokens with similar preferred clipping ranges are assigned to the same group\. To avoid runtime post\-scan grouping in static low\-bit inference, a lightweight predictor infers the groups from pre\-scan features available before the quantized scan path\. During calibration, we form pseudo\-labels by clustering post\-scan activation descriptors that capture similar rounding\-\-clipping behavior\. At inference, the frozen predictor maps pre\-scan features to groups and selects entries from offline\-calibrated group\-wise clipping\-bound tables, without runtime statistics collection, dynamic clipping updates, or post\-scan group assignment\. To address low\-bit restoration degradation, we further introduce a Frequency\-Preserving Refinement \(FPR\) objective for clipping\-bound calibration\. FPR aligns Fourier amplitude and phase between full\-precision teacher and quantized student outputs to preserve high\-frequency structures\. Across PTQ protocols, bit\-widths, backbones, and restoration tasks, our method consistently improves restoration quality over prior Mamba and SR PTQ baselines, while achieving $2\.23\\times$ speedup on Jetson Orin Nano over FP16\.

## Dense Structural Compression of Transformers via Gauge\-Correct Channel Removal

**Authors:** Jed A Duersch; Naïm Es\-sebbani; Nathanaël Haas; Zied Bouraoui

**ID:** 149337 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qq8R6cSNpW>) | [PDF](<https://openreview.net/pdf?id=qq8R6cSNpW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149337>)

We develop a methodology from first principles to adapt transformer structural complexity during training and maximize inference utility per unit compute\. Calibrated channel\-level penalties compel operators to reorganize into smaller dense tensors, driving entire tensor slices to zero to enable physical removal of channels while preserving density and full GPU throughput\. The natural approach, penalizing the norm of operator components that act through each channel, is provably destabilized by gauge freedom between multiplicatively coupled factors\. We resolve this pathology with additive symmetric group\-lasso penalties that recover a monotone function of product\-norms when the network converges to gauge balance\. Our equilibrium analysis shows how to calibrate per\-channel penalty strength to correctly suppress channels that under\-perform in inference utility per unit compute\. Under adaptive penalty pressure, the network reorganizes its representations into depth\-dependent structural profiles that can be far smaller than the architecture required to learn the task\. On polynomial long division over\~$\\mathbb\{F\}\_\{31\}$, the method achieves $190\{\\times\}$ compression with perfect accuracy\. On character\-level language modeling and masked autoencoding, compressed models match or exceed hand\-designed baselines at equal inference cost\. Continuous dense compaction accelerates training itself, with step times decreasing as the model compresses\. Post\-hoc pruning with the same utility metric cannot reach these architectures, confirming that the compressed representations emerge from sustained resource pressure, not from removal of redundancy from a fixed solution\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137834 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137834>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137828 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137828>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## Rethinking Neural Nonlinearity as Gating

**Authors:** MUHAMMAD SABIH; Frank Hannig; Jürgen Teich

**ID:** 148464 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xc7nzeKG4m>) | [PDF](<https://openreview.net/pdf?id=xc7nzeKG4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148464>)

Activation functions are considered an essential primitive for neural nonlinearity, i\.e\., they enable neural networks to serve as universal approximators\. In this paper, we show that this nonlinearity can also be achieved by input\-conditioned threshold gating through branches as a universal primitive\. We demonstrate that standard activations—whether piecewise\-linear \(ReLU, PReLU, Hardtanh\) or smooth \(SiLU, Sigmoid, Tanh, GELU\)—are in fact instances of a single Threshold Gating \(TG\) primitive\. For softmax, we show that it admits an exact TG conversion via its equivalent per\-element Sigmoid form\. We then validate these equivalences by converting pretrained networks across CNNs, transformer\-based models, and recurrent architectures, preserving model performance without requiring retraining\. Threshold Gating also enables training from scratch that goes beyond replacing existing activations, enabling gains in model compression, performance, and shorter training\. We also propose a 'Minimal Branch Theorem' which relates the minimum number of required branches in our primitive to the trainability of general deep neural networks\. In terms of hardware implementation, TG maps to a unified implementation in the case of analog in\-memory systems, addressing the bottleneck of analog\-to\-digital and digital\-to\-analog converters \(ADC/DAC\) that is known to significantly impact power consumption and on\-chip area\.

## Prune, Don’t Rebuild: Efficiently Tuning $\\alpha$\-Reachable Graphs for Nearest Neighbor Search

**Authors:** Zachary Ives; Jiaming Liang; Ashwin Padaki; Erik Waingarten; Tian Zhang

**ID:** 150493 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hgpJ8cCzN0>) | [PDF](<https://openreview.net/pdf?id=hgpJ8cCzN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150493>)

Over the past decade, graph\-based approximate nearest neighbor \(ANN\) algorithms, such as DiskANN \(Jayaram Subramanya et al\., 2019\) and HNSW \(Malkov &amp; Yashunin, 2018\), have demonstrated state\-of\-the\-art empirical performance\. Recent theoretical works \(Indyk &amp; Xu, 2023; Gollapudi et al\., 2025\) introduce the framework of $\\alpha$\-reachability to obtain worst\-case performance guarantees for DiskANN; here, the reachability parameter $\\alpha$ gives a trade\-off between construction time, query time, and accuracy\. In this work, we propose RP\-TUNING, an efficient and simple post\-hoc algorithm, based on DiskANN's pruning step, and show that \(1\) Theoretically, efficiently adjusting the reachability of an $\\alpha$\-reachable graph is possible via pruning: RP\-TUNING preserves worst\-case reachability guarantees in general metrics and improved guarantees in Euclidean metrics\. \(2\) Empirically, RP\-TUNING accelerates DiskANN tuning on four datasets by up to 73$\\times$ with varied performance trade\-offs compared to fully rebuilt graphs\.

## CORP: Closed\-Form One\-shot Representation\-Preserving Structured Pruning for Transformers

**Authors:** Boxiang Zhang; Baijian Yang

**ID:** 150895 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=echydG0ikq>) | [PDF](<https://openreview.net/pdf?id=echydG0ikq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150895>)

Transformers achieve strong accuracy but incur high compute and memory cost\. Structured pruning reduces inference cost, but most methods rely on retraining or multi\-stage optimization, which limits post\-training deployment\. We propose CORP, a closed\-form one\-shot structured pruning method that removes MLP dimensions and attention substructures using only unlabeled calibration data  without labels, gradients, or fine\-tuning\. CORP formulates structured pruning as a representation recovery problem\. It models removed components as affine functions of retained components and derives closed\-form ridge regression solutions that fold compensation into model weights\. This minimizes the expected representation error under the calibration distribution\. Experiments on ImageNet with DeiT reveal strong redundancy in both MLP and attention representations\. Without compensation, one\-shot structured pruning causes severe accuracy loss\. With CORP, models retain high accuracy under aggressive sparsity\. On DeiT\-Huge, CORP achieves 83\.27% Top\-1 accuracy after pruning 50% of both MLP and attention structures\.

## SEED: Self\-Speculative Decoding via Implicit Encoder–Decoder

**Authors:** Hankun Lin; Patrick Pynadath; Ruqi Zhang

**ID:** 153117 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnLRTrv3cO>) | [PDF](<https://openreview.net/pdf?id=NnLRTrv3cO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153117>)

Self\-speculative decoding accelerates large language model \(LLM\) inference by drafting tokens from the target model itself, but faces a sharp tradeoff between the quality and cost of the draft\. Early\-exit methods produce drafts cheaply by terminating computation at intermediate layers, but forgo the deeper representations that later layers provide and thus suffer in draft quality\. Multi\-token prediction preserves draft quality by emitting from the model's final hidden states, but pays for a full forward pass to produce those states at every drafting step\. We propose \*\*\*s\*\*\*\*elf\-sp\*\*\*\*e\*\*\*\*culative \*\*\*\*e\*\*\*\*ncoder\-\*\*\*\*d\*\*\*\*ecoder\* \(\*\*SEED\*\*\), a self\-speculative method that obtains high\-quality drafts cheaply by reusing the contextual representations already computed during verification\. We reinterpret the standard decoder\-only transformer as an implicit encoder–decoder: the first layers \(encoder\) build deep contextual representations, and the last few layers \(decoder\) emit tokens from them\. Encoding and verification are merged into a single step: verification is performed by the full encoder–decoder, and the contextual representations of the verified prefix are cached for reuse during drafting\. Drafting is therefore very fast: between verifications, the decoder drafts multiple tokens autoregressively, each conditioned on the cached representations and on preceding drafts\. Experiments across multiple benchmarks show that SEED achieves up to 2\.5$\\times$ average speedup on 4B\-scale models, outperforming both early\-exit and MTP\-style self\-speculative baselines and running 17\\% faster than the state\-of\-the\-art EAGLE\-3, while preserving or even improving the generation quality of standard autoregressive fine\-tuning\.

## MPQ: A Message\-Passing View of Post\-Training Quantization

**Authors:** Yanshuo Chen; chenxi liu; Reza Shirkavand; Heng Huang

**ID:** 148188 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zeReH3nsZq>) | [PDF](<https://openreview.net/pdf?id=zeReH3nsZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148188>)

Post\-training quantization \(PTQ\) is a key technique for efficiently deploying large language models, as it compresses weights into low\-bit representations without retraining\. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near\-optimal alternatives unexplored\. In this work, we cast row\-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero\-temperature, hard\-decision limit retaining only the top codeword per block\. We propose \\emph\{Message\-Passing Quantization\} \(MPQ\), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage\. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard\-decision initialization by exact block coordinate descent\. Across 2\-bit lattice and 3\- and 4\-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero\-shot accuracy over strong hard\-decision baselines, and composes favorably with preprocessing techniques such as activation\-aware scaling and incoherence processing\.

## VAR\-Q: Tuning\-free KV Cache Quantization for Visual Autoregressive Image and Video Generation

**Authors:** Boxun Xu; Jiaji Lu; Yuxuan Yin; Zihu Wang; Ziyue \(Alvin\) Liu; Yu Wang; Zirui Liu; Peng Li

**ID:** 151186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKR2ed5g34>) | [PDF](<https://openreview.net/pdf?id=cKR2ed5g34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151186>)

Visual autoregressive generation spans two dominant paradigms: next\-scale prediction for images and video, and next\-frame prediction for video\. Both decode block\-by\-block rather than token\-by\-token, yielding KV caches whose statistics diverge from those of language models\. At scale, KV memory exceeds the weights and limits large\-scale deployment caused by a large amount of visual tokens\. Our analysis of these caches reveals three findings\. First, a small set of massive\-value channels carries the functional load: ablating these outlier channels collapses generation, whereas ablating a matched set of inlier channels leaves quality intact\. Second, the outliers organize along two axes, feature and block, with magnitudes persistent within each cell and shifting across cells\. Third, this structure arises from two independent mechanisms: projection bias and RoPE\-induced scattering\. Guided by these findings, we propose VAR\-Q, a tuning\-free KV\-cache quantization framework that groups along the same two axes\. The generation loop provides block boundaries for free, removing the need for outlier detection or calibration\. Paired with bit\-packing kernels for runtime memory reduction, VAR\-Q delivers low\-bit quantization across nine models spanning both paradigms, cutting KV memory by up to 78\.5% with negligible quality degradation and enabling 6× larger inference batches\.

## A Method\-Class Divide in Sub\-4\-Bit Quantization:\\\\Iterative vs\.\\ Single\-Pass Sensitivity to Data Composition

**Authors:** Yehong Jiang; Yen\-Kuang Chen; Xinmin Tian

**ID:** 148347 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yY3pWWSxW5>) | [PDF](<https://openreview.net/pdf?id=yY3pWWSxW5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148347>)

Block\-wise post\-training quantization \(PTQ\) compresses LLMs by minimizing per\-block reconstruction error on a small calibration set\. We show that the \\emph\{composition\} of this set \(200 samples\) is a targeted lever at extreme bit widths, acting only on iterative methods\. In a controlled study spanning six data\-dependent PTQ methods plus a data\-free baseline, six models \(1\.7B\-\-8B\) across three families plus 70B verification, three bit widths, and a 10\-task evaluation with four\-seed replication, we find a sharp \\textbf\{near\-cliff method\-class divide\}\. In each method's pre\-cliff regime \(where the model retains predictive function\), iterative methods \(SignRound\~V2, OmniQuant, AQLM\) gain 0\.74\-\-1\.93pp on the 10\-task average from switching Pile to a fragility\-guided dataset \(FragCal\-DC\), while single\-pass analytical methods \(GPTQ, AWQ\) show near\-zero response \($\|\\Delta\|\{\\le\}0\.30$pp\)\. Both classes are evaluated on functional Pile baselines \(0\.42\-\-0\.61, well above chance\); above the cliff, every method becomes data\-composition\-insensitive\. A reconstruction\-loss paradox \(the method that most reduces its proxy loss gains nothing downstream, while the method that barely moves the proxy gains the most\) sharpens the mechanism; fixed\-reference held\-out evaluation confirms the proxy\-\-downstream disconnect\. A wrong\-answer contamination ablation retains 87\-\-91\\% of the improvement and a data\-dependent single\-pass control \(RTN\-opt\) shows zero response, isolating the iterative optimization loop\. A weight\-space probe shows SignRound\-V2 preserves higher per\-group scale heterogeneity than GPTQ on 9 of 9 \(model, width\) cells; a scale\-flatten knockout shows this heterogeneity is necessary for iterative fidelity\. We release FragCal\-DC, the discriminative\-task instance used here, as a drop\-in JSON for the evaluated setting\.

## VideoMLA: Low\-Rank Latent KV Cache for Minute\-Scale Autoregressive Video Diffusion

**Authors:** Hidir Yesiltepe; Jiazhen Hu; Tuna Han Salih Meral; Adil K Akan; Kaan Oktay; Hoda Eldardiry; Pinar Yanardag

**ID:** 153411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LWMSPE1KSY>) | [PDF](<https://openreview.net/pdf?id=LWMSPE1KSY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153411>)

Long\-rollout causal video diffusion has converged on a fixed\-size sliding\-window KV cache, with recent progress innovating within this layout by changing which tokens occupy the window or how their positions are encoded\. The per\-head KV layout itself, a dominant contributor to streaming memory and latency, has been mostly left unchanged\. In this paper, we present the first study of Multi\-Head Latent Attention \(MLA\) in video diffusion\. VideoMLA replaces per\-head keys and values with a shared low\-rank content latent and a shared decoupled 3D\-RoPE positional key, reducing per\-token KV memory by 92\.7% at every cached layer\. We further investigate why MLA succeeds in video diffusion even though the spectral assumption often used to motivate it in language models does not hold: pretrained video attention is not low\-rank, with 99\\%\-energy effective rank far above any practical latent dimension\. VideoMLA retains quality at compression ratios where direct spectral approximation would predict large reconstruction error\. We show that the MLA bottleneck, rather than the pretrained spectrum, determines the effective rank: both spectral and random initialization occupy nearly the full rank budget from initialization, and Stage\-1 training preserves this budget while adapting within it\. On VBench, VideoMLA matches short\-horizon streaming video diffusion baselines, achieves the best overall score at long horizons among evaluated methods, and improves throughput by $1\.23\\times$ on a single B200\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137858 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137858>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137852>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## ProjKAN: Model Compression via KAN Projections to Bridge the Hypothesis and Capacity Gaps

**Authors:** Ferhat Arslan; Weihong Guo; Shuo Li

**ID:** 154146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fupxx6BtyU>) | [PDF](<https://openreview.net/pdf?id=Fupxx6BtyU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154146>)

Multilayer perceptron \(MLP\)\-based model compression often overlooks two distinct sources of error: the hypothesis gap and the capacity gap\. The hypothesis gap arises from approximation error induced by selecting a student hypothesis class that is mismatched to the teacher function, while the capacity gap captures the additional error introduced by enforcing a limited parameter budget within the chosen class\. We show that Kolmogorov–Arnold Networks \(KANs\) can reduce the hypothesis gap for smooth low\-dimensional target functions\. Furthermore, width and depth constraints in KANs allow within\-family compression to be formulated as a convex projection problem that directly targets the capacity gap\. Building on this formulation, we derive projection\-based algorithms for width and depth reduction, as well as a function transfer method that maps a trained MLP teacher into a compact KAN student\. These are unified in the Gap\-aware Projections via KANs \(ProjKAN\) framework, which integrates the error decomposition, theoretical guarantees, and compression algorithms into a single methodology\. Empirically, in regimes where pruning and standard knowledge distillation degrade sharply, ProjKAN achieves improved accuracy–size tradeoffs, reduced train–test gaps, and greater robustness in data\-scarce settings\.

## Coverage\-Based Calibration for Post\-Training Quantization via Weighted Maximum Coverage over Outlier Channels

**Authors:** Ibne Farabi Shihab; Sanjeda Akter; Anuj Sharma

**ID:** 154675 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BsTRAPk0F8>) | [PDF](<https://openreview.net/pdf?id=BsTRAPk0F8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154675>)

Post\-training quantization \(PTQ\) compresses large language models to low bit\-widths using a small calibration set, making calibration selection a consequential but under\-specified part of the quantization pipeline\. We study calibration selection for weight\-only LLM PTQ backends such as AWQ and GPTQ\. In this setting, calibration data does not define an inference\-time activation clipping threshold; instead, it determines activation\-conditioned quantities used for weight reconstruction, saliency estimation, and scale search\. We identify a failure mode in which a calibration set misses rare, high\-magnitude input channels of quantized linear modules, causing the backend to underrepresent reconstruction\-sensitive directions\. Motivated by this observation, we formulate calibration selection as weighted maximum coverage over module\-level activation outlier channels\. Each candidate sequence covers the module/channel pairs it activates above a reference threshold, and each covered pair is weighted by a dimensionally consistent surrogate for its potential contribution to squared output reconstruction error\. The resulting objective is monotone submodular, so greedy selection admits the classical $\(1\-1/e\)$ approximation guarantee for the coverage objective\. We instantiate this formulation in COVERCAL, a backend\-agnostic calibration selector operating on cached activation masks\. Across LLaMA\-2, LLaMA\-3, and Mistral models, under AWQ and GPTQ INT4 backends and five downstream evaluations, COVERCAL improves over the reported fixed\-pool calibration baselines, with the largest gains at small calibration budgets\. Under AWQ at $K=128$, COVERCAL improves MMLU by $1\.2$\-\-$1\.5$ points over random calibration; at $K=64$, it matches or exceeds random calibration at $K=256$ on LLaMA\-3\-8B\. The contribution is not a new quantizer, but a module\-correct coverage formulation, an efficient greedy selector, and empirical evidence that weighted outlier coverage is a useful calibration signal for existing weight\-only PTQ backends\.

## Training Transformers for KV\-Cache Compressibility

**Authors:** Yoav Gelberg; Yam Eitan; Michael Bronstein; Yarin Gal; Haggai Maron

**ID:** 150358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=igMG5UgMAj>) | [PDF](<https://openreview.net/pdf?id=igMG5UgMAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150358>)

Long\-context language modeling is increasingly constrained by the Key–Value \(KV\) cache, whose memory and decode\-time access costs scale linearly with the prefix length\. This bottleneck has motivated a range of context\-compression methods, from token\-level summarization to recent optimization\-based KV compression methods\. These post\-hoc methods operate on the KV cache of a fixed pretrained model, so their effectiveness is fundamentally limited by how well the model's internal representations can be compressed\. In this work, we formalize the notion of KV compressibility and show that it is a property of the \*learned representations\*, rather than of the context alone\. We prove that almost any sequence\-to\-vector function admits both highly compressible and inherently non\-compressible transformer implementations, highlighting the need to guide transformers toward compressible representations during training\. Motivated by this, we propose \*\*KV\*\*\-\*\*C\*\*ompression \*\*A\*\*ware \*\*T\*\*raining \(KV\-CAT\), a continued pretraining procedure that incentivizes the emergence of compressible representations\. We introduce a train\-time KV sparsification policy that masks KV slots during training\. This forces the model to use fewer KV slots and encourages it to learn representations amenable to post\-hoc compression\. Empirically, we show that KV\-CAT improves the quality–budget tradeoff of downstream compression methods across retrieval, long\-context question answering, and perplexity\-based evaluation of compressed\-prefix continuation\.

## Provable Quantization with Randomized Hadamard Transform

**Authors:** Ying Feng; Piotr Indyk; Michael Kapralov; Dmitrii Krachun; Boris Prokhorov

**ID:** 148522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xFz5PQluzT>) | [PDF](<https://openreview.net/pdf?id=xFz5PQluzT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148522>)

Vector quantization via random projection followed by scalar quantization is a fundamental primitive in machine learning, with applications ranging from similarity search to federated learning and KV compression\. While dense random rotations yield clean theoretical guarantees, they require $\\Theta\(d^2\)$ time\. The randomized Hadamard transform $HD$ reduces this cost to $O\(d \\log d\)$, but its discrete structure complicates analysis and leads to weaker or purely empirical compression guarantees\.   In this work, we study a variant of this approach: \\emph\{dithered quantization\} with a single randomized Hadamard transform\. Specifically, the quantizer applies $HD$ to the input vector and subtracts a random scalar offset before quantizing, injecting additional randomness at negligible cost\. This approach is used by popular quantizers such as RaBitQ, and is a slight modification of others, including TurboQuant and EDEN\.  We prove that this approach provides mean squared error bounds that asymptotically match those achievable with truly random rotation matrices\. For example, we prove a dithered version of TurboQuant achieves mean squared error $\\bigl\(\\pi\\sqrt\{3\}/2 \+ o\(1\)\\bigr\) \\cdot 4^\{\-b\}$ at $b$ bits per coordinate, where the $o\(1\)$ term vanishes uniformly over all unit vectors and all dimensions as the number of quantization levels grows\.

## AgentKVShift: Efficient KV Cache Reuse for Agentic Memory Systems

**Authors:** Nilesh Prasad Pandey; Jason Kong; Lanxiang Hu; Quanling Zhao; Yujie Zhao; Onat Gungor; Hao Zhang; Tajana S Rosing

**ID:** 155404 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5uRXWGrFvm>) | [PDF](<https://openreview.net/pdf?id=5uRXWGrFvm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155404>)

Memory\-augmented LLM agents have gained substantial attention recently for their ability to maintain context across hundreds of interactions through agentic memory systems that actively curate retrieved content with LLM\-generated metadata such as summaries, keywords, and tags\. However, from an inference cost standpoint, every retrieval triggers a full re\-encoding of these structured memory units into Key\-Value \(KV\) states, which dominates prefill latency\. Existing training\-free KV reuse methods mitigate this by selectively recomputing a small fraction of tokens, but were designed for RAG\-style raw passages and degrade substantially on structured agentic memories\. In this work, we present AgentKVShift, a training\-free, probe\-guided KV residual correction method that operates per retrieved memory unit\. One of the crucial insights we demonstrate is that the per\-memory KV reuse residual decomposes into a shared memory\-level offset plus small token\-wise fluctuations\. Estimating this offset from a small probe set allows us to correct every reused token in the memory unit by a single weighted correction\. Unlike prior reuse methods which decide which tokens to recompute and leave the rest of the cache stale, AgentKVShift also corrects the tokens it does not recompute, turning the refresh budget into useful signal across the entire chunk\. Through extensive experiments across four open source LLMs spanning 3B to 32B parameters and two long\-horizon agentic memory benchmarks covering long\-term dialogue and agentic applications, we show that AgentKVShift achieves near full recompute performance while refreshing only 10\-30% of the cache, outperforming existing baselines at the same recompute ratio\. AgentKVShift requires up to 5x lower recompute to reach this near\-full performance, which prior reuse methods only attain at 45\-55% refresh\. By operating in this lower recompute regime, AgentKVShift delivers prefill speedups of 2\-3\.5x over no\-KV\-reuse on a single A100 GPU\. Lastly, AgentKVShift orthogonally composes with KV cache quantization, retaining over 2x the F1 of prior reuse methods under aggressive 2\- and 4\-bit settings, making it a simple, yet effective choice for serving long\-horizon agentic memory workloads\.

## Test\-Time Speculation

**Authors:** Avinash Kumar; Sujay Sanghavi; Poulami Das

**ID:** 150865 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=elwxI8Nne1>) | [PDF](<https://openreview.net/pdf?id=elwxI8Nne1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150865>)

Speculative decoding accelerates LLM inference by using a fast draft model to generate tokens and a more accurate target model to verify them\. Its performance depends on the \*acceptance length\*, or number of draft tokens accepted by the target\. Our studies show that the acceptance length of even state\-of\-the\-art speculators, like DFlash, EAGLE\-3 and PARD degrade with generation length, reaching values close to 1 \(i\.e\. no speedup\) within just a few thousand output tokens, making speculators ineffective for long\-response tasks\. Acceptance lengths decline because most speculators are trained offline on short sequences, but are forced to match the target model on much longer outputs at inference, well beyond their training distribution\.  To address this issue, we propose \*Test\-Time Speculation \(TTS\)\*, an online distillation approach that continuously adapts the speculator at test\-time\. TTS leverages the key insight that the token verification step already invokes the target model for each draft token, providing the training signal needed to adapt the draft at no additional cost\. Treating the draft as the student and the target as a teacher, TTS adjusts the draft over several speculation rounds, with each update improving the draft's accuracy as generation proceeds\. Our results across multiple models from the Qwen\-3, Qwen\-3\.5, and Llama3\.1 families show that TTS improves acceptance lengths over state\-of\-the\-art speculators by up to 72% and 41% on average, with the benefits scaling with increased generation lengths\.

## Benchmark Recovery Does Not Certify a Frozen Tool\-Trigger Contract After Quantization

**Authors:** Rui Li; Shuang Cao

**ID:** 155241 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CU4DLB7yh>) | [PDF](<https://openreview.net/pdf?id=7CU4DLB7yh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155241>)

Benchmark recovery is often treated as a deployment certificate for low\-bit LLMs, but thresholded controller stacks ship a different object: a frozen score\-to\-action contract\. This paper asks a narrower acceptance question: after quantization, does that interface survive independent threshold retuning against frozen FP16 labels, the strongest cheap repair an operator would plausibly try first? We study one fixed four\-action controller, one frozen train/cal/report protocol, and four instruction\-tuned checkpoints: Llama\-3\.1\-8B/70B\-Instruct and Qwen\-2\.5\-7B/72B\-Instruct\. In the only score\-carrying regime, W4A16, GPTQ \+ \-search stays near FP16 on MMLU yet still leaves 11\.9/10\.9 percentage\-point false tool\-trigger rates and 16\.1/15\.4 aggregate FCR on the two large models\. Because BFCL directly labels the tool frontier, that failure already establishes the paper's main acceptance claim even if FAQ and the preservation\-only retrieve/stop frontiers are ignored\. Aggregate FCR is reported only as interface\-wide preservation context because retrieve/stop remain preservation\-only\. FAQ is included only as a bounded reducibility probe under the same frozen audit target, not as a generic new quantizer or the central novelty claim\. FAQ lowers tool FTR and aggregate FCR without obvious MMLU or throughput collapse, but that is secondary non\-collapse evidence\. The contribution is therefore a single\-controller deployment\-acceptance counterexample under a frozen permission set: on the retained large\-model W4A16 rows, benchmark\-close MMLU recovery does not certify preserved tool\-trigger behavior\. The accompanying contribution is the freeze\-and\- retune audit protocol that makes that failure measurable\.

## MetaCluster: Enabling Deep Compression of Kolmogorov\-Arnold Network

**Authors:** Matthew Raffel; Adwaith Renjith; Lizhong Chen

**ID:** 148967 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tmeddYUlwX>) | [PDF](<https://openreview.net/pdf?id=tmeddYUlwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148967>)

Kolmogorov\-Arnold Networks \(KANs\) replace scalar weights with per\-edge vectors of basis coefficients, thereby increasing expressivity and accuracy while also leading to a multiplicative increase in parameters and memory usage\. We propose MetaCluster, a framework that makes KANs highly compressible without sacrificing accuracy\. Specifically, a lightweight meta\-learner, trained jointly with the KAN, maps low\-dimensional embeddings to coefficient vectors, thereby constraining them to lie on a low\-dimensional manifold amenable to clustering\. We then run K\-means in coefficient space and replace per\-edge vectors with shared centroids\. Afterward, the meta\-learner can be discarded, and a brief fine\-tuning of the centroid codebook recovers any residual accuracy loss\. The resulting model stores only a small codebook and per\-edge indices, exploiting the vector nature of KAN parameters to amortize storage across multiple coefficients\. On MNIST, CIFAR\-10, and CIFAR\-100, across standard KANs and ConvKANs using multiple basis functions, MetaCluster achieves a reduction of up to $80\\times$ in parameter storage, with no loss in accuracy\. Similarly, in high\-dimensional equation modeling tasks, MetaCluster achieves a $124\.1\\times$ parameter reduction without impacting performance\. Code will be released upon publication\.

## What Fits \(Into Few Tokens\) Doesn't Overfit: Compression and Generalization in ML Research Agents

**Authors:** Martin Bertran; Aaron Roth; Steven Wu

**ID:** 149540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pN8yAngM9e>) | [PDF](<https://openreview.net/pdf?id=pN8yAngM9e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149540>)

Reusing a held\-out benchmark adaptively should, in principle, invite overfitting\. Yet benchmark\-driven machine learning \(ML\) has produced surprisingly little overfitting in practice\. An attractive hypothesis is that successful ML strategies are highly compressible\. We study this in the setting of LLM\-driven research agents, where the hypothesis becomes directly testable via two complementary information bottlenecks\. In \\emph\{output compression\}, an exploration agent adaptively searches for high\-performance models using a validation set, and we test whether a fresh \`\`reproducer agent'' can reproduce its performance given only an extremely short prompt and the training data\. In \\emph\{input compression\}, the explorer receives only one\-bit feedback indicating whether each submitted model improves on the running best\. Across 8 datasets spanning tabular classification, vision, language modeling, diffusion modeling, and reward modeling, we find that these bottlenecks have little effect on performance: short prompts and compressible feedback are sufficient to reproduce and find high\-performance models\. The hypothesis is falsifiable: when we deliberately induce validation\-set overfitting, the results fail to reproduce with short prompts\. Taken together, our results support a description\-length explanation for the lack of overfitting in benchmark\-driven ML: successful strategies occupy a low\-complexity region of strategy space\.

## Express Language Modeling

**Authors:** Albert Gong; Annabelle M Carrell; Raaz Dwivedi; Lester Mackey

**ID:** 149745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nf2SQeKcr9>) | [PDF](<https://openreview.net/pdf?id=nf2SQeKcr9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149745>)

We introduce a new tool, Express, for converting a non\-causal attention approximation into a causal approximation with matching approximation guarantees\. When combined with the state\-of\-the\-art Thinformer approximation, Express improves upon the best known causal attention guarantees, delivering $\\log^\{3/2\}\(n\)/s$ approximation error with only $O\(s\)$ memory and $O\(s^2 \\log^2\(n\)\)$ compression overhead for a sequence of length $n$\. We pair these developments with an efficient I/O\-aware Triton implementation, demonstrate substantial speedups over FlashAttention 2, and use Express to accelerate three distinct components of the language modeling pipeline: long\-context prefill, KV cache compression, and long\-form decoding\.

## Curvature Beyond Positivity: Greedy Guarantees for Arbitrary Submodular Functions

**Authors:** Yixin Chen; Alan Kuhnle

**ID:** 150081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=krtOWKxcTH>) | [PDF](<https://openreview.net/pdf?id=krtOWKxcTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150081>)

Submodular functions\-\-\-functions exhibiting diminishing returns\-\-\-are central to machine learning\. When the objective is monotone and non\-negative, the greedy algorithm achieves a tight $63\\%$ approximation\. But many practical objectives incorporate costs that make them negative on some inputs, and all existing multiplicative guarantees require non\-negativity\. Prior work handles negativity through additive bounds for the special class of decomposable functions and non\-monotonicity through partial\-monotonicity parameters, but these address each difficulty in isolation and neither extends the classical structural theory\. We extend curvature\-\-\-a parameter measuring how far a function deviates from linearity\-\-\-to all submodular functions, handling both non\-monotonicity and negativity through a single classical concept\. A greedy algorithm with pruning achieves a curvature\-controlled multiplicative ratio for any submodular function, including those taking negative values\-\-\-the first such guarantee beyond monotonicity and non\-negativity\. In the non\-monotone regime $1 \\le c\_g &lt; 2\.2$, the bound strictly beats the best known uniform ratio of $0\.401$ \(for non\-negative $f$\), and it recovers the classical $\(1\-e^\{\-c\_g\}\)/c\_g$ guarantee for monotone functions\. A multilinear\-extension variant extends the framework to general combinatorial constraints via multilinear relaxation\. Experiments on cost\-penalized experimental design, coverage, feature selection, and a curvature sweep on Multi\-News passage selection support the theory\.

