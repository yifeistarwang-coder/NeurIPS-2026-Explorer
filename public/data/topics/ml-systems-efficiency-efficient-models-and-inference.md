# ML Systems &amp; Efficiency / Efficient Models and Inference

机器学习系统与效率 / 高效模型与推理

110 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## DepthGraft: Structural Regularization through Hierarchical Cross\-Layer KV Reconstruction

**Authors:** Xiaohan Qin; Xiangdong Zhang; Yu Wang; Huaijin Wu; Zhuo Xia; Yebin Yang; Junchi Yan

**ID:** 152636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RaqeCKA8Ch>) | [PDF](<https://openreview.net/pdf?id=RaqeCKA8Ch>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152636>)

Scaling depth is a key route to stronger large language models, but Pre\-LN architectures often suffer from depth\-wise information dilution, limiting the effective use of deep layers\. While cross\-layer connectivity has proven effective at mitigating this problem, existing designs usually introduce additional computation or memory access\. We revisit cross\-layer KV sharing as an efficient form of such connectivity\. Beyond cache compression, each KV reuse edge creates a direct gradient path from deep layers to source KV projections, turning KV sharing into an implicit structural regularizer for KV representation geometry\. We provide a systematic analysis of this mechanism, showing that proper sharing topologies sharpen key retrieval directions while enriching the value content subspace, whereas existing adjacent or global\-anchor designs do not fully exploit this effect\. Motivated by this, we propose DepthGraft, a hierarchical KV\-sharing architecture that reconstructs deep\-layer KV from stride\-aligned shallow\-\-middle source pairs\. DepthGraft distributes non\-local gradient flow across source layers, while preserving prefill early completion and reducing KV cache by roughly one third\. Experiments on dense and MoE models from 0\.5B to 65B parameters show consistent downstream improvements under both GQA and MLA\. Notably, on the 16B MoE model, DepthGraft achieves a \*\*7\.0%\*\* absolute improvement on MMLU\-Pro, along with gains of \*\*6\.6%\*\* on CMMLU and \*\*6\.4%\*\* on C3\. These results validate the potential of DepthGraft as a scalable design for large\-scale pretraining\.

## TOM\-Pruning: Target\-aware Output Manifold for LLM Pruning

**Authors:** Junchen Hao; Weikang Meng; Yingjian Li; Zheng Zhang

**ID:** 153219 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mv31DAbjkw>) | [PDF](<https://openreview.net/pdf?id=Mv31DAbjkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153219>)

_Abstract unavailable from the accessible public sources._

## Benchmark Recovery Does Not Certify a Frozen Tool\-Trigger Contract After Quantization

**Authors:** Rui Li; Shuang Cao

**ID:** 155241 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CU4DLB7yh>) | [PDF](<https://openreview.net/pdf?id=7CU4DLB7yh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155241>)

_Abstract unavailable from the accessible public sources._

## GeoPair: Geometry\-Preserving Cross\-Layer Factorization for Training\-Free Transformer Compression

**Authors:** Baher Mohammad; Ammar Ali; Stamatios Lefkimmiatis

**ID:** 151461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aT3fx6NjSJ>) | [PDF](<https://openreview.net/pdf?id=aT3fx6NjSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151461>)

Transformer architectures exhibit cross\-layer redundancies, yet post\-training compression pipelines typically optimize layers in isolation or rely on heuristic grouping strategies that disregard layer\-specific activation geometries\. We introduce a principled, training\-free framework that sequentially optimizes cross\-layer weight pairings and shared\-dictionary factorizations\. Rather than forcing weights of adjacent layers to share a basis or heuristically merging activation statistics, our approach identifies structurally compatible projections and learns a shared representation that better preserves each layer’s distinct calibration geometry\. Coupled with structured sparsity, this yields highly efficient weight decompositions without sacrificing functional fidelity\. Across diverse architectures, scales, and modalities, our method achieves state\-of\-the\-art results, consistently outperforming independent structured weight decompositions and alternative pairwise weight factorizations, which operate under heuristic grouping strategies\. By replacing heuristic engineering strategies with a convergent, optimization\-driven pipeline, we establish a theoretically grounded foundation for scalable, transformer compression across different modalities\.

## AgentKVShift: Efficient KV Cache Reuse for Agentic Memory Systems

**Authors:** Nilesh Prasad Pandey; Jason Kong; Lanxiang Hu; Quanling Zhao; Yujie Zhao; Onat Gungor; Hao Zhang; Tajana S Rosing

**ID:** 155404 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5uRXWGrFvm>) | [PDF](<https://openreview.net/pdf?id=5uRXWGrFvm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155404>)

Memory\-augmented LLM agents have gained substantial attention recently for their ability to maintain context across hundreds of interactions through agentic memory systems that actively curate retrieved content with LLM\-generated metadata such as summaries, keywords, and tags\. However, from an inference cost standpoint, every retrieval triggers a full re\-encoding of these structured memory units into Key\-Value \(KV\) states, which dominates prefill latency\. Existing training\-free KV reuse methods mitigate this by selectively recomputing a small fraction of tokens, but were designed for RAG\-style raw passages and degrade substantially on structured agentic memories\. In this work, we present AgentKVShift, a training\-free, probe\-guided KV residual correction method that operates per retrieved memory unit\. One of the crucial insights we demonstrate is that the per\-memory KV reuse residual decomposes into a shared memory\-level offset plus small token\-wise fluctuations\. Estimating this offset from a small probe set allows us to correct every reused token in the memory unit by a single weighted correction\. Unlike prior reuse methods which decide which tokens to recompute and leave the rest of the cache stale, AgentKVShift also corrects the tokens it does not recompute, turning the refresh budget into useful signal across the entire chunk\. Through extensive experiments across four open source LLMs spanning 3B to 32B parameters and two long\-horizon agentic memory benchmarks covering long\-term dialogue and agentic applications, we show that AgentKVShift achieves near full recompute performance while refreshing only 10\-30% of the cache, outperforming existing baselines at the same recompute ratio\. AgentKVShift requires up to 5x lower recompute to reach this near\-full performance, which prior reuse methods only attain at 45\-55% refresh\. By operating in this lower recompute regime, AgentKVShift delivers prefill speedups of 2\-3\.5x over no\-KV\-reuse on a single A100 GPU\. Lastly, AgentKVShift orthogonally composes with KV cache quantization, retaining over 2x the F1 of prior reuse methods under aggressive 2\- and 4\-bit settings, making it a simple, yet effective choice for serving long\-horizon agentic memory workloads\.

## Efficient Tree Draft for Long\-Context Speculative Decoding

**Authors:** Brian J Chan; Ning\-Chi Huang; Kai\-Chiang Wu

**ID:** 152500 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sg8rYQS4Lz>) | [PDF](<https://openreview.net/pdf?id=Sg8rYQS4Lz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152500>)

Speculative decoding is an effective technique for accelerating autoregressive models in memory\-bound regimes\. Prior work has explored tree\-based drafting to speculate multiple candidates at each step, improving verification acceptance rates\. However, existing systems fail to fully realize the potential of tree\-based drafting, leaving significant performance overhead\. In this paper, we present FastDraft, a plug\-and\-play module that improves the efficiency of tree\-based drafting in long\-context speculative decoding\. FastDraft exploits both the shared\-prefix I/O pattern across draft branches and the constrained tree structure of speculative decoding, enabling specialized kernels that reduce draft\-phase overhead while preserving compatibility with existing inference frameworks\. FastDraft requires no modifications to the target model, draft model, or sampling logic\. We implement FastDraft within SGLang and compare it against SGLang’s vanilla tree\-based drafting backend, demonstrating substantially faster draft execution: up to 2\.66× speedup in the draft phase and 1\.77× higher throughput over SGLang under long\-context settings\.

## Uncertainty as an Underconstrained Axis in Lossy Compression

**Authors:** Enzo Tartaglione

**ID:** 156038 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0tD46aY7z8>) | [PDF](<https://openreview.net/pdf?id=0tD46aY7z8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156038>)

_Abstract unavailable from the accessible public sources._

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

## PSD: Pushing the Pareto Frontier of Diffusion LLMs via Parallel Speculative Decoding

**Authors:** Shengyin Sun; Yiming Li; Renxi Liu; Xinqi Li; Hui\-Ling Zhen; Weizhe Lin; Chen Chen; Xianzhi Yu; Mingxuan Yuan; Chen Ma

**ID:** 150134 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRdp6aSiHL>) | [PDF](<https://openreview.net/pdf?id=kRdp6aSiHL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150134>)

_Abstract unavailable from the accessible public sources._

## CATS: Acceptance\-Oriented Critical Token Adaptive Selection for Multimodal Speculative Decoding

**Authors:** Kaiwen Liu; Yangkai Xie; Shuxia Lin; Liu Chonghan; Xu Yang; Yiguo Qiao

**ID:** 154883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AAzuOWs11n>) | [PDF](<https://openreview.net/pdf?id=AAzuOWs11n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154883>)

While Speculative Decoding \(SD\) has become an essential lossless acceleration technique for Large Language Models, its direct application to Multimodal Large Language Models \(MLLMs\) is hindered by the intricate visual dependencies present in cross\-modal generation\. Existing SD methods enforce a uniform global alignment between the draft and target models, which proves ineffective in multimodal settings due to a structured distribution bias: deviations of the draft model are systematically concentrated on a sparse subset of tokens that demand fine\-grained visual comprehension\. To overcome this limitation, we reformulate the training of multimodal draft models as an acceptance\-oriented critical\-token alignment problem and introduce CATS, a novel two\-stage training framework\. CATS employs two complementary selection mechanisms to pinpoint critical tokens:hard tokens that exhibit high rejection probabilities, and vision\-critical tokens whose prediction fundamentally depends on visual semantics\. Following an initial global alignment phase, CATS performs sparse, targeted refinement exclusively on the union of these identified token sets\. Extensive experiments across three representative benchmarks using multiple LLaVA and Qwen2\.5\-VL target models demonstrate that our approach consistently improves the token acceptance rate over strong baselines such as EAGLE\-2 and supervised fine\-tuning\. Ultimately, CATS substantially accelerates MLLM inference, achieving speedups of up to 3\.05×\.

## Backdoor Attacks under  Lossy Compression: From Failure to Reactivation and Adaptation

**Authors:** Qian Li; Yunuo Chen; Yuntian Chen

**ID:** 155082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Zds0GA3mw>) | [PDF](<https://openreview.net/pdf?id=8Zds0GA3mw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155082>)

Real\-world backdoor attacks often require poisoned datasets to be stored and transmitted before they are used to compromise deep learning systems\. In the era of big data, however, the inevitable use of lossy compression poses a fundamental challenge to invisible backdoor attacks\. We observe that triggers embedded in RGB images can become ineffective once the images are lossily compressed into binary bitstreams, such as JPEG files, for storage and transmission\. Consequently, poisoned data may lose their malicious functionality after compression, causing backdoor injection to fail\.  Prior compression\-based attacks typically exploit compression artifacts as certain triggers to distinguish poisoned RGB samples from uncompressed benign ones, rather than addressing whether malicious information can survive a shared lossy storage\-and\-transmission pipeline\.  In this paper, we highlight the necessity of explicitly accounting for lossy compression in backdoor attacks\. This requires attackers to ensure that transmitted binary bitstreams preserve malicious trigger information, such that effective triggers can be induced after decompression\.  Building on the region\-of\-interest \(ROI\) coding mechanism in image compression, we propose two poisoning strategies tailored to inevitable lossy compression\. First, we introduce \\textbf\{Universal Attack Reactivation\}, a general method that uses sample\-specific ROI masks to reactivate trigger information in  bitstreams for learned image compression \(LIC\)\. Second, we present \\textbf\{Compression\-Adapted Attack\}, a new attack strategy that employs customized ROI masks to encode trigger information into  bitstreams and applies to both traditional codecs and LIC\. Extensive experiments demonstrate the effectiveness of both strategies\.

## Global Importance Estimation for KV Cache Eviction

**Authors:** Seojin Kim; Noseong Park

**ID:** 153209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N1gDvQ8d8n>) | [PDF](<https://openreview.net/pdf?id=N1gDvQ8d8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153209>)

Memory consumption of the key\-value \(KV\) cache remains a central bottleneck for long\-context LLM inference\. We introduce PRKV, a training\-free KV eviction method that estimates multi\-hop global token importance by applying Personalized PageRank over attention\-induced transition graphs\. This enables importance propagation beyond recency or instantaneous attention, without modifying the model\. We benchmark PRKV on long\-context understanding, sparse retrieval, and chain\-of\-thought reasoning tasks using multiple LLM families\. Under moderate to aggressive compression ratios, including up to 90\\%, PRKV achieves competitive task performance against established eviction baselines while reducing peak memory usage with low end\-to\-end overhead\. These results demonstrate that multi\-hop global influence estimation yields a favorable accuracy\-\-memory trade\-off for scalable long\-context inference\.

## Reliable Clustering and Quantization via Distortion\-Constrained Optimal Transport

**Authors:** Tianhao Wu; Wei Zhang; Haoran Pang; Haoran YANG; Hao Shi

**ID:** 153600 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KBzmOm0ugU>) | [PDF](<https://openreview.net/pdf?id=KBzmOm0ugU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153600>)

Clustering and vector quantization are core primitives for representation learning and large\-scale retrieval, yet widely used methods often produce clusters or codewords of highly uneven quality, especially in noisy or heterogeneous data\.  In this paper, we propose a distortion\-constrained optimal transport \(DCOT\) framework that explicitly enforces per\-cluster bounds on the average assignment distortion, defined as the expected distance between data points and their assigned representatives, ensuring more consistent and reliable representations\. Our formulation couples an optimal transport assignment objective with cluster\-level distortion constraints to control cluster quality\. To solve this constrained problem, we develop an efficient alternating optimization algorithm that iteratively updates transport plans, representatives \(codewords\), and dual variables\. We further provide theoretical guarantees including entropic consistency, coordinate descent, and sublinear convergence\. Importantly, DCOT serves as a plug\-in assignment module that can be seamlessly integrated into a wide range of vector quantization methods\. Replacing the assignment step with DCOT consistently improves reconstruction quality across diverse architectures and training settings, demonstrating strong robustness and general applicability\.

## What Fits \(Into Few Tokens\) Doesn't Overfit:  Compression and Generalization in ML Research Agents

**Authors:** Martin Bertran; Aaron Roth; Steven Wu

**ID:** 149540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pN8yAngM9e>) | [PDF](<https://openreview.net/pdf?id=pN8yAngM9e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149540>)

Reusing a held\-out benchmark adaptively should, in principle, invite overfitting\. Yet benchmark\-driven machine learning \(ML\) has produced surprisingly little overfitting in practice\. An attractive hypothesis is that successful ML strategies are highly compressible\. We study this in the setting of LLM\-driven research agents, where the hypothesis becomes directly testable via two complementary information bottlenecks\. In \\emph\{output compression\}, an exploration agent adaptively searches for high\-performance models using a validation set, and we test whether a fresh \`\`reproducer agent'' can reproduce its performance given only an extremely short prompt and the training data\. In \\emph\{input compression\}, the explorer receives only one\-bit feedback indicating whether each submitted model improves on the running best\. Across 8 datasets spanning tabular classification, vision, language modeling, diffusion modeling, and reward modeling, we find that these bottlenecks have little effect on performance: short prompts and compressible feedback are sufficient to reproduce and find high\-performance models\. The hypothesis is falsifiable: when we deliberately induce validation\-set overfitting, the results fail to reproduce with short prompts\. Taken together, our results support a description\-length explanation for the lack of overfitting in benchmark\-driven ML: successful strategies occupy a low\-complexity region of strategy space\.

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

**ID:** 150210 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jumLplfWH0>) | [PDF](<https://openreview.net/pdf?id=jumLplfWH0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150210>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137834 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137834>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137828 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137828>)

_Abstract unavailable from the accessible public sources._

## STAC\-R: Subspace\-Tracked Activation Compression with Residuals

**Authors:** Manar Hamed; Yassine Yaakoubi

**ID:** 148748 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vM3HWhzSRT>) | [PDF](<https://openreview.net/pdf?id=vM3HWhzSRT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148748>)

_Abstract unavailable from the accessible public sources._

## The Hidden Ratio in Adam: Stable Structure, Compression, and Sign Dynamics

**Authors:** Yihe Zhou; Tongtian Zhu; Yingxiao Huo; Satya P Dash; Can Wang; Samuel Kaski; Mingfei Sun

**ID:** 154051 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GZha6judfp>) | [PDF](<https://openreview.net/pdf?id=GZha6judfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154051>)

_Abstract unavailable from the accessible public sources._

## Neural Compression of Long ADMM Trajectory for Multiparametric Quadratic Program

**Authors:** Liang Wu; Bo Yang; Xu Yang; Honghui Zheng; Yilin Mo; Jan Drgona

**ID:** 149158 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sQKzVYjuoB>) | [PDF](<https://openreview.net/pdf?id=sQKzVYjuoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149158>)

_Abstract unavailable from the accessible public sources._

## CMPQ: Compensatory Quantization via Input\-Aware Hessian Damping

**Authors:** DENG PAN; Grigorii Khvatskii; Xiaobao Huang; Peiyu Li; Shangqian Gao; Ting Hua; Nitesh Chawla

**ID:** 153383 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LmeQn4hd4y>) | [PDF](<https://openreview.net/pdf?id=LmeQn4hd4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153383>)

_Abstract unavailable from the accessible public sources._

## Zero\-Shot Quantization via Weight\-Space Arithmetic

**Authors:** Daniele Solombrino; Antonio Andrea Gargiulo; Alessandro Zirilli; Luca Zhou; Robert Adrian Minut; Emanuele Rodolà

**ID:** 148572 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrUEnnSgXa>) | [PDF](<https://openreview.net/pdf?id=wrUEnnSgXa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148572>)

We show that robustness to post\-training quantization \(PTQ\) is a transferable direction in weight space\. We call this direction the \\emph\{quantization vector\}: extracted from a donor task by simple weight\-space arithmetic, it can be used to patch a receiver model and improve post\-PTQ Top\-1 accuracy by up to \\\(60\\\)$\\%$ in a 3\-bit setting, without receiver\-side quantization\-aware training \(QAT\)\. Because the method requires no receiver training data, it provides a zero\-shot, low\-cost alternative to QAT for extremely low\-bit deployment\. Across multiple vision/language models and more than 30 tasks, donor quantization vectors often yield substantial gains even when donor and receiver tasks differ markedly\. We further prove rigorously that quantization vectors are well\-defined and do not suffer from reparameterization symmetries, and provide a local geometric account of their effects\. Together, these results suggest that quantization robustness can be partially isolated, reused, and transferred through simple weight\-space algebra\.

## VAR\-Q: Tuning\-free KV Cache Quantization for Visual Autoregressive Image and Video Generation

**Authors:** Boxun Xu; Jiaji Lu; Yuxuan Yin; Zihu Wang; Ziyue \(Alvin\) Liu; Yu Wang; Zirui Liu; Peng Li

**ID:** 151186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKR2ed5g34>) | [PDF](<https://openreview.net/pdf?id=cKR2ed5g34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151186>)

Visual autoregressive generation spans two dominant paradigms: next\-scale prediction for images and video, and next\-frame prediction for video\. Both decode block\-by\-block rather than token\-by\-token, yielding KV caches whose statistics diverge from those of language models\. At scale, KV memory exceeds the weights and limits large\-scale deployment caused by a large amount of visual tokens\. Our analysis of these caches reveals three findings\. First, a small set of massive\-value channels carries the functional load: ablating these outlier channels collapses generation, whereas ablating a matched set of inlier channels leaves quality intact\. Second, the outliers organize along two axes, feature and block, with magnitudes persistent within each cell and shifting across cells\. Third, this structure arises from two independent mechanisms: projection bias and RoPE\-induced scattering\. Guided by these findings, we propose VAR\-Q, a tuning\-free KV\-cache quantization framework that groups along the same two axes\. The generation loop provides block boundaries for free, removing the need for outlier detection or calibration\. Paired with bit\-packing kernels for runtime memory reduction, VAR\-Q delivers low\-bit quantization across nine models spanning both paradigms, cutting KV memory by up to 78\.5% with negligible quality degradation and enabling 6× larger inference batches\.

## MPQ: A Message\-Passing View of Post\-Training Quantization

**Authors:** Yanshuo Chen; chenxi liu; Reza Shirkavand; Heng Huang

**ID:** 148188 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zeReH3nsZq>) | [PDF](<https://openreview.net/pdf?id=zeReH3nsZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148188>)

Post\-training quantization \(PTQ\) is a key technique for efficiently deploying large language models, as it compresses weights into low\-bit representations without retraining\. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near\-optimal alternatives unexplored\. In this work, we cast row\-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero\-temperature, hard\-decision limit retaining only the top codeword per block\. We propose \\emph\{Message\-Passing Quantization\} \(MPQ\), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage\. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard\-decision initialization by exact block coordinate descent\. Across 2\-bit lattice and 3\- and 4\-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero\-shot accuracy over strong hard\-decision baselines, and composes favorably with preprocessing techniques such as activation\-aware scaling and incoherence processing\.

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

**ID:** 156038\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156038

[Paper](<https://openreview.net/forum?id=0tD46aY7z8>) | [PDF](<https://openreview.net/pdf?id=0tD46aY7z8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156038>)

_Abstract unavailable from the accessible public sources._

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

## MARS: Enabling Autoregressive Models Multi\-Token Generation

**Authors:** Ziqi Jin; Lei Wang; Ziwei Luo; Aixin Sun

**ID:** 150620 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gmcLiK4jCQ>) | [PDF](<https://openreview.net/pdf?id=gmcLiK4jCQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150620>)

Autoregressive \(AR\) language models generate text one token at a time, even when consecutive tokens are highly predictable given earlier context\. We introduce MARS \(Mask AutoRegreSsion\), a lightweight fine\-tuning method that teaches an instruction\-tuned AR model to predict multiple tokens per forward pass\. MARS adds no architectural modifications, no extra parameters, and produces a single model that can still be called exactly like the original AR model with no performance degradation\. Unlike speculative decoding, which maintains a separate draft model alongside the target, or multi\-head approaches such as Medusa, which attach additional prediction heads, MARS requires only continued training on existing instruction data\. When generating one token per forward pass, MARS matches or exceeds the AR baseline on six standard benchmarks\. When allowed to accept multiple tokens per step, it maintains baseline\-level accuracy while achieving 1\.5\-1\.7x throughput\. We further develop a block\-level KV caching strategy for batch inference, achieving up to 1\.71x wall\-clock speedup over AR with KV cache on Qwen2\.5\-7B\. Finally, MARS supports real\-time speed adjustment via confidence thresholding: under high request load, the serving system can increase throughput on the fly without swapping models or restarting, providing a practical latency\-quality knob for deployment\.

## EchoKV: Efficient KV Cache Compression via Similarity\-Based Reconstruction

**Authors:** Shiyu Ji; Yixuan Wang; Yijun Liu; Qingfu Zhu; Wanxiang Che

**ID:** 152942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PE7GYmhRfw>) | [PDF](<https://openreview.net/pdf?id=PE7GYmhRfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152942>)

The increasing memory demand of the Key\-Value \(KV\) cache poses a significant bottleneck for Large Language Models \(LLMs\) in long\-context applications\. Existing low\-rank KV compression methods reduce this footprint by modifying model projections, limiting the flexibility to switch back to standard full\-cache inference when sufficient memory is available\. In this paper, we propose EchoKV, a flexible KV cache compression framework that supports on\-demand transitions from full KV caching to compressed caching\. Unlike traditional compression\-decompression paradigms, EchoKV utilizes a lightweight network to reconstruct the discarded KV components from a partial subset, exploiting intrinsic inter\-layer and intra\-layer similarities among attention heads\. We further introduce a lightweight two\-stage fine\-tuning strategy, requiring only a few minutes on a single A100 GPU for a 7B model\. Experimental results on LongBench and RULER demonstrate that EchoKV consistently outperforms existing methods across multiple compression ratios and backbone models while preserving the throughput of full\-cache inference in short\-context scenarios\.

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

## Training Transformers for KV\-Cache Compressibility

**Authors:** Yoav Gelberg; Yam Eitan; Michael Bronstein; Yarin Gal; Haggai Maron

**ID:** 150358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=igMG5UgMAj>) | [PDF](<https://openreview.net/pdf?id=igMG5UgMAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150358>)

Long\-context language modeling is increasingly constrained by the Key–Value \(KV\) cache, whose memory and decode\-time access costs scale linearly with the prefix length\. This bottleneck has motivated a range of context\-compression methods, from token\-level summarization to recent optimization\-based KV compression methods\. These post\-hoc methods operate on the KV cache of a fixed pretrained model, so their effectiveness is fundamentally limited by how well the model's internal representations can be compressed\. In this work, we formalize the notion of KV compressibility and show that it is a property of the \*learned representations\*, rather than of the context alone\. We prove that almost any sequence\-to\-vector function admits both highly compressible and inherently non\-compressible transformer implementations, highlighting the need to guide transformers toward compressible representations during training\. Motivated by this, we propose \*\*KV\*\*\-\*\*C\*\*ompression \*\*A\*\*ware \*\*T\*\*raining \(KV\-CAT\), a continued pretraining procedure that incentivizes the emergence of compressible representations\. We introduce a train\-time KV sparsification policy that masks KV slots during training\. This forces the model to use fewer KV slots and encourages it to learn representations amenable to post\-hoc compression\. Empirically, we show that KV\-CAT improves the quality–budget tradeoff of downstream compression methods across retrieval, long\-context question answering, and perplexity\-based evaluation of compressed\-prefix continuation\.

## Correspondence Pruning by Iterative Structural Rectification

**Authors:** Guangwei Zhang; Gang Wang

**ID:** 155477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5J1rwV6KnM>) | [PDF](<https://openreview.net/pdf?id=5J1rwV6KnM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155477>)

Correspondence pruning—separating sparse inliers from severe outliers in noisy feature matches—is a long\-standing bottleneck for two\-view geometry estimation in 3D vision\. Existing learning\-based pruners pursue this goal through ever more sophisticated context operators—local graphs, dynamic neighborhoods, or global attention—yet a controlled comparison reveals a striking phenomenon: when we freeze the structural assignment of these operators after a single forward pass, accuracy collapses by over $30\\%$ mAP regardless of operator choice\. This suggests that the limiting factor of current methods is not which operator is used, but the implicit assumption that structure can be committed in one shot\. We argue that correspondence pruning should instead be cast as \\emph\{iterative structural rectification\} \(ISR\), in which the geometric structure and the feature representation must \\emph\{co\-evolve\} layer by layer\. Building on this view, we propose \\textbf\{ISR\-Net\}, a minimal architecture that pairs a layer\-wise re\-derived local\-context operator \(a dynamic $k$\-NN graph in feature space\) with a layer\-wise re\-derived global\-context operator \(soft assignment to learnable cluster prototypes\), so that any gain over prior arts is attributable to the rectification \\emph\{schedule\} rather than to operator novelty\. Despite using deliberately off\-the\-shelf operators, ISR\-Net attains state\-of\-the\-art results on YFCC100M, SUN3D, and HPatches, surpassing the strongest attention\-based competitor by $\+8\.2\\%$ mAP@$5^\\circ$ while running $35\\%$ faster, indicating that \\emph\{how often structure is refined\} matters more than the operator's complexity\.

## Next\-Latent Prediction Transformers Learn Compact World Models

**Authors:** Jayden Teoh; Manan Tomar; Kwangjun Ahn; Edward Hu; Tim Pearce; Pratyusha Sharma; Akshay Krishnamurthy; Riashat Islam; Alex Lamb; John Langford

**ID:** 155772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=325YSKkc2n>) | [PDF](<https://openreview.net/pdf?id=325YSKkc2n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155772>)

Transformers replace recurrence with a memory that grows with sequence length and self\-attention that enables ad\-hoc look ups over past tokens\. Consequently, they lack an incentive to compress history into compact latent states with consistent transition rules\. This often leads to learning solutions that generalize poorly\. We introduce \*\*Next\-Latent Prediction\*\* \(NextLat\), which extends standard next\-token training with \*self\-supervised\* predictions in the latent space\. Specifically, NextLat trains a transformer to learn latent representations that are predictive of its next latent state given the next output token\. Theoretically, we show that these latents provably converge to \*belief states\*, compressed information of the history necessary to predict the future\. This simple auxiliary objective injects a recurrent inductive bias into transformers, while leaving their architecture, parallel training, and inference unchanged\. NextLat effectively encourages the transformer to form compact internal world models with its own belief states and transition dynamics—a crucial property absent in standard next\-token prediction transformers\. Empirically, across benchmarks in world modeling, reasoning, planning, and language modeling, NextLat demonstrates significant gains over standard next\-token training in downstream accuracy, representation compression, and lookahead planning\. Furthermore, NextLat enables \*variable\-length self\-speculative decoding\*, accelerating inference by up to $3\.3\\times$ in the language domain\.      NextLat stands as a simple and efficient paradigm for shaping transformer representations toward stronger generalization\.

## VAR\-Q: Tuning\-free KV Cache Quantization for Visual Autoregressive Image and Video Generation

**Authors:** Boxun Xu; Jiaji Lu; Yuxuan Yin; Zihu Wang; Ziyue \(Alvin\) Liu; Yu Wang; Zirui Liu; Peng Li

**ID:** 151186\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151186

[Paper](<https://openreview.net/forum?id=cKR2ed5g34>) | [PDF](<https://openreview.net/pdf?id=cKR2ed5g34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151186>)

Visual autoregressive generation spans two dominant paradigms: next\-scale prediction for images and video, and next\-frame prediction for video\. Both decode block\-by\-block rather than token\-by\-token, yielding KV caches whose statistics diverge from those of language models\. At scale, KV memory exceeds the weights and limits large\-scale deployment caused by a large amount of visual tokens\. Our analysis of these caches reveals three findings\. First, a small set of massive\-value channels carries the functional load: ablating these outlier channels collapses generation, whereas ablating a matched set of inlier channels leaves quality intact\. Second, the outliers organize along two axes, feature and block, with magnitudes persistent within each cell and shifting across cells\. Third, this structure arises from two independent mechanisms: projection bias and RoPE\-induced scattering\. Guided by these findings, we propose VAR\-Q, a tuning\-free KV\-cache quantization framework that groups along the same two axes\. The generation loop provides block boundaries for free, removing the need for outlier detection or calibration\. Paired with bit\-packing kernels for runtime memory reduction, VAR\-Q delivers low\-bit quantization across nine models spanning both paradigms, cutting KV memory by up to 78\.5% with negligible quality degradation and enabling 6× larger inference batches\.

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

**ID:** 152195 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UqphiAp8hm>) | [PDF](<https://openreview.net/pdf?id=UqphiAp8hm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152195>)

_Abstract unavailable from the accessible public sources._

## A Method\-Class Divide in Sub\-4\-Bit Quantization:\\\\Iterative vs\.\\ Single\-Pass Sensitivity to Data Composition

**Authors:** Yehong Jiang; Yen\-Kuang Chen; Xinmin Tian

**ID:** 148347 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yY3pWWSxW5>) | [PDF](<https://openreview.net/pdf?id=yY3pWWSxW5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148347>)

_Abstract unavailable from the accessible public sources._

## GPA: General Principled Framework for Linearizing Softmax Attention via KV Cache Approximation

**Authors:** wang ning; Zekun Li; Tongxin Bai; Man Yao; Chunlei Men; Guoqi Li

**ID:** 152654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ROPnDwfm3N>) | [PDF](<https://openreview.net/pdf?id=ROPnDwfm3N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152654>)

Transformers excel at sequence modeling, yet Softmax attention incurs quadratic complexity and unbounded KV cache growth\. While linear attention offers a promising alternative, existing approaches lack systematic functional comparison with Softmax attention, rigorous error analysis, and a theoretically grounded improvement roadmap\. We address this gap by framing linearization as KV cache approximation and establishing a principled pathway from Softmax attention to linear models\. Our analysis identifies five critical components—redundancy elimination, token\-level quantization with positional separation, positional compression, inter\-layer similarity, and multi\-state decomposition—each accompanied by theoretical justification and error bounds, with explicit connections to existing mechanisms\. Building upon this framework, we introduce GPA, a linearized attention model that inherits pretrained weights and achieves state\-of\-the\-art results\. GPA outperforms strong baselines including MVA and GSA across multiple benchmarks, while requiring less fine\-tuning resources\. Our work provides both theoretical clarity and practical guidance for advancing linear attention, charting a principled course toward efficient, scalable alternatives to Softmax attention\.

## T\-ReX: Learning Tile\-Reuse Indexes for Structured Model Compression

**Authors:** Haoyi Yang; Simon Kohaut; Zihan Ye; Devendra Singh Dhami; Kristian Kersting

**ID:** 151977 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WPzHvuYvOo>) | [PDF](<https://openreview.net/pdf?id=WPzHvuYvOo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151977>)

_Abstract unavailable from the accessible public sources._

## VideoMLA: Low\-Rank Latent KV Cache for Minute\-Scale Autoregressive Video Diffusion

**Authors:** Hidir Yesiltepe; Jiazhen Hu; Tuna Han Salih Meral; Adil K Akan; Kaan Oktay; Hoda Eldardiry; Pinar Yanardag

**ID:** 153411 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LWMSPE1KSY>) | [PDF](<https://openreview.net/pdf?id=LWMSPE1KSY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153411>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137882 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137882>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137876 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137876>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137858 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137858>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137852>)

Rather than treating limited computing infrastructure as an obstacle, this program treats it as a design constraint worth building around\. Researchers across Kenya, Uganda, Rwanda, and Ethiopia will learn to compress AI models to run on basic smartphones and low\-cost hardware, then apply those skills in small research teams tackling problems in medical imaging, agriculture, and efficient ML theory, with mentorship from Stanford, Oxford, and Shanghai Jiao Tong University guiding teams toward publication\-ready work\.

## Generalization Without Compression Penalty: A Stability Analysis of Error Feedback

**Authors:** Yifei Liang; Peng Wang; Yan Sun; Yingqi Liu; Xiaoyan Wang; XIAOCHUN CAO; Li Shen

**ID:** 149408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qHC1EJ6gni>) | [PDF](<https://openreview.net/pdf?id=qHC1EJ6gni>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149408>)

Error Feedback \(EF\) has become a core mechanism for aggressive gradient compression in communication\-efficient distributed training, and is now used in geo\-distributed frameworks such as DiLoCo\. While existing theory mainly explains its optimization convergence, the generalization behavior of EF remains poorly understood, especially under nonlinear biased compression and distributed local updates\. We present the first generalization analysis of EF for both single\-node EF\-SGD and DiLoCo\-EF through an optimization\-driven on\-average model stability framework, without imposing bounded\-gradient assumptions\. Technically, we develop a buffer\-aware Lyapunov argument that tracks the coupled dynamics of the model and error buffer, while co\-coercivity absorbs same\-sample gradient\-difference energy into the optimization trajectory\. For convex losses, our bounds show that compression\-induced stability terms are transient, decaying as $\\mathcal\{O\}\(\\sqrt\{b\_\\alpha\}\\,T^\{\-3/4\}\+b\_\\alpha T^\{\-1\}\)$, and therefore do not create a non\-vanishing generalization floor beyond the dominant $\\mathcal\{O\}\(T^\{\-1/2\}\)$ optimization term\. In the DiLoCo setting, worker averaging further suppresses compression perturbations, and a local stepsize $\\eta\_l=\\Theta\(1/\(H\\sqrt\{T\}\)\)$ controls the drift from $H$ local steps, yielding the leading $\\mathcal\{O\}\(1/\\sqrt\{MHT\}\)$ excess\-risk scaling\. Experiments on convex benchmarks corroborate the theory, showing that Top\-$k$, Random\-$k$, and quantization with matched contraction factor $\\alpha$ exhibit nearly indistinguishable generalization trajectories\.

## HALO\-VGGT: Heterogeneity\-Aware Lightweight Online Compression Allocator for Efficient VGGT

**Authors:** Xueling Wang; Yiwen Wang; Siqi Cai; Chen Zhang; guanghui He

**ID:** 148613 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wSMK90Tr3q>) | [PDF](<https://openreview.net/pdf?id=wSMK90Tr3q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148613>)

Visual geometry grounded transformers are strong feed\-forward backbones for multi\-view 3D reconstruction, but their global attention becomes the dominant inference bottleneck as views and tokens increase\. Existing acceleration methods mainly focus on designing compression operators, while compression strengths are often assigned by uniform schedules or offline calibration, overlooking the heterogeneous sensitivity of layers and attention heads during inference\. We therefore propose HALO\-VGGT, a lightweight online compression allocator requiring no training or calibration for efficient VGGT\-style reconstruction\. HALO uses a sampled query\-key margin proxy to estimate compression sensitivity at the layer and head levels, and assigns hierarchical compression ratios accordingly\. Instead of introducing a new compression operator, HALO complements pruning, merging, and sparse attention mechanisms by deciding where and how aggressively they should be applied\. HALO improves the trade\-off between speedup and accuracy across datasets and backbones, achieving up to 4\.20$\\times$ speedup and further improving existing merging and sparsity methods by up to 1\.46$\\times$\.

## D\-PACE: Dynamic Position\-Aware Cross\-Entropy for Parallel Speculative Drafting

**Authors:** Tianyu Wu; Yu Yao; Zhenting Qi; Han Zheng; Chengxi Zhang; Zhuohan Wang; Haoran Ma; Zichun Liao; Hima Lakkaraju; Ju Li; Yilun Du

**ID:** 152718 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QrjZX92zUN>) | [PDF](<https://openreview.net/pdf?id=QrjZX92zUN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152718>)

Speculative decoding accelerates LLM inference by having a small drafter propose tokens that a larger target model verifies in parallel\. Current SOTA diffusion\-based parallel drafters such as dFlash predict the full $B$\-token block in one forward pass, allowing deeper drafters and higher accepted length\. However, across the field, from autoregressive tree drafters to parallel block drafters, training losses use fixed per\-position weights that do not adapt to the drafter's current bottleneck position\. We derive per\-position training weights directly from the expected accepted block length, so that each position's weight reflects its actual contribution to acceptance\. The resulting loss, D\-PACE \(Dynamic Position\-Aware Cross\-Entropy\), automatically identifies where the block's acceptance bottleneck lies and shifts training signal there as the drafter improves\. D\-PACE consistently improves both wall\-clock speedup and accepted length across diverse benchmarks and positions as a drop\-in replacement with negligible training overhead and requires no changes to the drafter architecture or inference pipeline, making it broadly applicable to general model architectures\.

## Stabilizing the Dynamic Low\-Rank Training

**Authors:** Zhonghan Xu; Ling Wang; Junhao Chen; Jianwei Zhao; Jinwei Yang

**ID:** 148261\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148261

[Paper](<https://openreview.net/forum?id=zAGUzDSLhh>) | [PDF](<https://openreview.net/pdf?id=zAGUzDSLhh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148261>)

Training neural networks directly in a low\-rank parameterization is an appealing route to reducing memory, compute, and storage simultaneously during both training and inference\. Dynamic low\-rank training \(DLRT\), which confines weights to a rank\-$r$ manifold via the Galerkin projection of the gradient flow, is particularly attractive because it identifies efficient subnetworks on the fly without specialized initialization or post\-factorization\. However, DLRT fails to find trainable networks under high compression\. In this paper, we derive the gradient flow of the best rank\-$r$ approximation and point out that the offset of DLRT comes from a curvature\-coupling term which is large and thus non\-negligible under aggressive compression\. Guided by this analysis, we propose a stable dynamic low\-rank training method, named SDLRT, which maintains a lightweight compensation buffer that reinjects the top neglected singular directions\. Additionally, we introduce a negative feedback on the truncation tolerance to stabilize each layer's rank\. Experimentally, SDLRT reliably finds trainable subnetworks where DLRT collapses and as a PEFT adapter on DeBERTa\-v3, it achieves the best average score on SuperGLUE at only $2\.8\\\\%$ parameter overhead over LoRA\.

## Training Transformers for KV\-Cache Compressibility

**Authors:** Yoav Gelberg; Yam Eitan; Michael Bronstein; Yarin Gal; Haggai Maron

**ID:** 150358\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150358

[Paper](<https://openreview.net/forum?id=igMG5UgMAj>) | [PDF](<https://openreview.net/pdf?id=igMG5UgMAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150358>)

Long\-context language modeling is increasingly constrained by the Key–Value \(KV\) cache, whose memory and decode\-time access costs scale linearly with the prefix length\. This bottleneck has motivated a range of context\-compression methods, from token\-level summarization to recent optimization\-based KV compression methods\. These post\-hoc methods operate on the KV cache of a fixed pretrained model, so their effectiveness is fundamentally limited by how well the model's internal representations can be compressed\. In this work, we formalize the notion of KV compressibility and show that it is a property of the \*learned representations\*, rather than of the context alone\. We prove that almost any sequence\-to\-vector function admits both highly compressible and inherently non\-compressible transformer implementations, highlighting the need to guide transformers toward compressible representations during training\. Motivated by this, we propose \*\*KV\*\*\-\*\*C\*\*ompression \*\*A\*\*ware \*\*T\*\*raining \(KV\-CAT\), a continued pretraining procedure that incentivizes the emergence of compressible representations\. We introduce a train\-time KV sparsification policy that masks KV slots during training\. This forces the model to use fewer KV slots and encourages it to learn representations amenable to post\-hoc compression\. Empirically, we show that KV\-CAT improves the quality–budget tradeoff of downstream compression methods across retrieval, long\-context question answering, and perplexity\-based evaluation of compressed\-prefix continuation\.

## Dynamic Delayed Tree Expansion For Improved Multi\-Path Speculative Decoding

**Authors:** Rahul K Thomas; Teo Kitanovski; Micah Goldblum; Arka Pal

**ID:** 155922\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155922

[Paper](<https://openreview.net/forum?id=1oCU9PKaoy>) | [PDF](<https://openreview.net/pdf?id=1oCU9PKaoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155922>)

Multi\-path speculative decoding accelerates lossless sampling from a target model by using a cheaper draft model to generate a draft tree of tokens, and then applies a verification algorithm that accepts a subset of these\. While prior work has proposed various verification algorithms for i\.i\.d rollouts, their relative performance under matched settings remains unclear\. In this work, we firstly present a systematic evaluation of verification strategies across model families, tasks, and sampling regimes, and find that Traversal Verification dominates consistently, with OT\-based methods lagging far behind\. Our analysis uncovers that this occurs because OT\-based methods achieve high multi\-token acceptance near the root of the draft tree, while multi\-token gains are most impactful deeper in the draft tree, where draft and target distributions diverge\. Based on this insight, we propose delayed tree expansion\} which drafts a partial single path, delaying the i\.i\.d\. branching point\. We show that delayed tree expansion preserves the target distribution and improves on root\-node i\.i\.d rollouts\. Further, we develop a dynamic neural selector that estimates the expected block efficiency of OT\-based verification methods from draft and target features, enabling context\-dependent expansion decisions\. Our neural selector allows OT\-based methods like SpecInfer to outperform Traversal Verification for the first time, with 5\\% higher average throughput across a wide range of models, datasets, and sampling settings\. Finally, we extend our approach to Traversal Verification to improve its average throughput by 26\\%\.

## Block Sphere Vector Quantization

**Authors:** Heesang Ann; Joongkyu Lee; Min\-hwan Oh

**ID:** 152314\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152314

[Paper](<https://openreview.net/forum?id=U13XD8SxhN>) | [PDF](<https://openreview.net/pdf?id=U13XD8SxhN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152314>)

Vector quantization is a fundamental primitive for scalable machine learning systems, enabling memory\-efficient storage, fast retrieval, and compressed inference\. Recent rotation\-based quantizers such as EDEN, RabitQ, and TurboQuant have introduced strong guarantees and empirical performance, but the surrounding comparisons have been difficult to interpret because they rely on different distortion criteria, probability regimes, and implementation assumptions\. As our first contribution, we provide a unified theoretical comparison of these methods and show that their relative advantages are criterion\-dependent rather than absolute: TurboQuant is favorable for MSE distortion, EDEN is effective for expected inner\-product distortion, and RabitQ provides strong high\-probability control\. This comparison clarifies the design principles behind each advantage and shows that no existing method uniformly dominates across the relevant measures\. As our second contribution, we introduce \*Block\-Sphere Quantization\* \(\*\*BlockQuant\*\*\), a new rotation\-based block quantization algorithm designed around the spherical geometry of randomly rotated vectors\. Unlike coordinate\-wise quantizers, \*\*BlockQuant\*\* quantizes blocks on the sphere, preserving the geometry of rotated embeddings more faithfully\. We prove that this block\-spherical design improves expected distortion performance, including both reconstruction MSE and expected inner\-product distortion\. Experiments on real embedding data support these theoretical improvements\.

## Coverage\-Based Calibration for Post\-Training Quantization via Weighted Maximum Coverage over Outlier Channels

**Authors:** Ibne Farabi Shihab; Sanjeda Akter; Anuj Sharma

**ID:** 154675 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BsTRAPk0F8>) | [PDF](<https://openreview.net/pdf?id=BsTRAPk0F8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154675>)

_Abstract unavailable from the accessible public sources._

## EchoKV: Efficient KV Cache Compression via Similarity\-Based Reconstruction

**Authors:** Shiyu Ji; Yixuan Wang; Yijun Liu; Qingfu Zhu; Wanxiang Che

**ID:** 152942\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152942

[Paper](<https://openreview.net/forum?id=PE7GYmhRfw>) | [PDF](<https://openreview.net/pdf?id=PE7GYmhRfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152942>)

The increasing memory demand of the Key\-Value \(KV\) cache poses a significant bottleneck for Large Language Models \(LLMs\) in long\-context applications\. Existing low\-rank KV compression methods reduce this footprint by modifying model projections, limiting the flexibility to switch back to standard full\-cache inference when sufficient memory is available\. In this paper, we propose EchoKV, a flexible KV cache compression framework that supports on\-demand transitions from full KV caching to compressed caching\. Unlike traditional compression\-decompression paradigms, EchoKV utilizes a lightweight network to reconstruct the discarded KV components from a partial subset, exploiting intrinsic inter\-layer and intra\-layer similarities among attention heads\. We further introduce a lightweight two\-stage fine\-tuning strategy, requiring only a few minutes on a single A100 GPU for a 7B model\. Experimental results on LongBench and RULER demonstrate that EchoKV consistently outperforms existing methods across multiple compression ratios and backbone models while preserving the throughput of full\-cache inference in short\-context scenarios\.

## MoE\-SpAc: Efficient MoE Inference Based on Speculative Activation Utility in Heterogeneous Edge Scenario

**Authors:** Shuhuai Li; Jianghao Lin; DongDong Ge; Yinyu Ye

**ID:** 152840\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152840

[Paper](<https://openreview.net/forum?id=PzDCaziC8F>) | [PDF](<https://openreview.net/pdf?id=PzDCaziC8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152840>)

Mixture\-of\-Experts \(MoE\) models enable scalable performance but face severe memory constraints on edge devices\. Existing offloading strategies struggle with I/O bottlenecks due to the dynamic, low\-information nature of autoregressive expert activation\. In this paper, we propose to repurpose Speculative Decoding \(SD\) not merely as a compute accelerator, but as an informative lookahead sensor for memory management, supported by our theoretical and empirical analyses\. Hence, we introduce MoE\-SpAc, an MoE inference framework that integrates a training\-free Speculative Utility Estimator to track expert demand, a Heterogeneous Workload Balancer to dynamically partition computation via online integer optimization, and an Asynchronous Execution Engine to unify the prefetching and eviction in the same utility space\. Extensive experiments on seven benchmarks demonstrate that MoE\-SpAc achieves a 42% improvement in TPS over the SOTA SD\-based baseline, and an average 4\.04 speedup over all standard baselines\. Code is available at https://anonymous\.4open\.science/r/SpAc\_MoE\.

## SpectralKV: Redundancy\-Aware KV Cache Compression via Spectral Coreset Selection

**Authors:** Fangming Zhao; Fulun Ye; Xiaofei Yue; Ziming Zhao; Yu Peng; Junyu Chen; Tingting Li

**ID:** 148958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ttixAKQvFd>) | [PDF](<https://openreview.net/pdf?id=ttixAKQvFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148958>)

The key\-value \(KV\) cache has become a dominant memory and bandwidth bottleneck for serving long\-context large language models, motivating a growing body of work on KV cache compression\. Most existing methods follow a common recipe: a uniform per\-layer budget and attention top\-$k$ token selection, but this recipe is \\emph\{data\-oblivious\} \(ignoring cross\-layer variation in attention concentration\) and \\emph\{redundancy\-blind\} \(retaining near\-duplicate key\-\-value entries\)\. We propose \\textbf\{SpectralKV\}, a training\-free framework that addresses both issues jointly\. Across layers, a lightweight concentration\-based criterion redistributes a fixed global budget based on the entropy of observation\-window attention, giving more slots to layers whose attention is more concentrated\. Within each layer, a spectral coreset selector treats keys and values as geometric objects in a metric\-aligned joint feature space and selects tokens via residual pivoting, suppressing near\-duplicates while preserving geometrically distinct directions\. On Llama\-3\.1\-8B and Qwen3\-8B, SpectralKV consistently outperforms seven strong baselines on 15 LongBench tasks and PG\-19 perplexity at 16K and 32K contexts, with the largest gains at aggressive compression ratios down to $6\.25\\%$ keep\. And a static\-budget variant reduces peak prefill VRAM by up to $44\\%$ with negligible quality loss\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/spectralKV\-2FF7\}\.

## RecMem: Recurrent Memory Compression for Long\-Sequence Recommendation

**Authors:** Haoyi Hu; Gaoyang Guo; Yunjia Xi; Wen Chen; Weiwen Liu; Jian Wu; Yuning Jiang; Weinan Zhang

**ID:** 149955 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lvtUjInAvY>) | [PDF](<https://openreview.net/pdf?id=lvtUjInAvY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149955>)

_Abstract unavailable from the accessible public sources._

## Clapping: Removing Per\-sample Storage for Pipeline Parallel Learning with Communication Compression

**Authors:** Boao Kong; Xu Huang; Yuqi Xu; Yixuan Liang; Bin Wang; Kun Yuan

**ID:** 148239 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zMLxSjEos8>) | [PDF](<https://openreview.net/pdf?id=zMLxSjEos8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148239>)

_Abstract unavailable from the accessible public sources._

## RaVF: Learning Radar Velocity Fields via Spatial\-Doppler Guidance

**Authors:** SHENGPENG WANG; Lingzhen Li; Chunshen Li; Fei Xiao; Wei Wang

**ID:** 152403 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TMUEPGI01F>) | [PDF](<https://openreview.net/pdf?id=TMUEPGI01F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152403>)

Scene\-level Velocity field estimation from 4D millimeter\-wave radar is critical for robust perception but remains challenged by the inherent sparsity and noise of point\-based paradigms\. Furthermore, Doppler ambiguity induced by the Nyquist sampling limit fundamentally disrupts the continuity of velocity field learning\. To address these challenges, we propose RaVF, a physically grounded framework that directly learns dense velocity fields from high\-fidelity spatial\-Doppler spectra\. RaVF is built upon three key designs tailored to radar\-specific signal distortions\. \(1\) To mitigate range\-dependent propagation attenuation and nonlinear angular spatial quantization, we devise a Physically\-aware Encoder that calibrates spectral feature extraction within the native radar beamforming\. \(2\) Observing that ego\-induced radial motion explains static Doppler responses, we factor out static motion and guide dynamic flow estimation for physically consistent velocity field learning\. \(3\) To enhance kinematic plausibility, we introduce an ego\-conditioned bidirectional pyramidal flow module that transfers backward flow into the forward frame and enforces anti\-symmetric forward\-backward consistency\. Extensive experiments demonstrate that RaVF significantly outperforms state\-of\-the\-art baselines on velocity fields\. Our code will be available\.

## CoQuant: Covariance\-Aware Rotation for 2\-bit KV Cache Quantization

**Authors:** Zhongzhu Zhou; Donglin Zhuang; Jisen Li; Ziyan Chen; Shuaiwen Song; Ben Athiwaratkun; Xiaoxia Wu

**ID:** 154658 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ByTqCb7VnS>) | [PDF](<https://openreview.net/pdf?id=ByTqCb7VnS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154658>)

_Abstract unavailable from the accessible public sources._

## HCInfer: An Efficient Inference System via Heterogeneous Error Compensation for Resource\-Constrained Devices

**Authors:** Shen Xu; Xiangwen Zhuge; Zhe Xu; Yingkun Hu; Zheng Yang; Yunhao Liu

**ID:** 151377 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b3DYZ9pfMj>) | [PDF](<https://openreview.net/pdf?id=b3DYZ9pfMj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151377>)

_Abstract unavailable from the accessible public sources._

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

## MoE\-SpAc: Efficient MoE Inference Based on Speculative Activation Utility in Heterogeneous Edge Scenario

**Authors:** Shuhuai Li; Jianghao Lin; DongDong Ge; Yinyu Ye

**ID:** 152840\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152840

[Paper](<https://openreview.net/forum?id=PzDCaziC8F>) | [PDF](<https://openreview.net/pdf?id=PzDCaziC8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152840>)

Mixture\-of\-Experts \(MoE\) models enable scalable performance but face severe memory constraints on edge devices\. Existing offloading strategies struggle with I/O bottlenecks due to the dynamic, low\-information nature of autoregressive expert activation\. In this paper, we propose to repurpose Speculative Decoding \(SD\) not merely as a compute accelerator, but as an informative lookahead sensor for memory management, supported by our theoretical and empirical analyses\. Hence, we introduce MoE\-SpAc, an MoE inference framework that integrates a training\-free Speculative Utility Estimator to track expert demand, a Heterogeneous Workload Balancer to dynamically partition computation via online integer optimization, and an Asynchronous Execution Engine to unify the prefetching and eviction in the same utility space\. Extensive experiments on seven benchmarks demonstrate that MoE\-SpAc achieves a 42% improvement in TPS over the SOTA SD\-based baseline, and an average 4\.04 speedup over all standard baselines\. Code is available at https://anonymous\.4open\.science/r/SpAc\_MoE\.

## Stabilizing the Dynamic Low\-Rank Training

**Authors:** Zhonghan Xu; Ling Wang; Junhao Chen; Jianwei Zhao; Jinwei Yang

**ID:** 148261\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148261

[Paper](<https://openreview.net/forum?id=zAGUzDSLhh>) | [PDF](<https://openreview.net/pdf?id=zAGUzDSLhh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148261>)

Training neural networks directly in a low\-rank parameterization is an appealing route to reducing memory, compute, and storage simultaneously during both training and inference\. Dynamic low\-rank training \(DLRT\), which confines weights to a rank\-$r$ manifold via the Galerkin projection of the gradient flow, is particularly attractive because it identifies efficient subnetworks on the fly without specialized initialization or post\-factorization\. However, DLRT fails to find trainable networks under high compression\. In this paper, we derive the gradient flow of the best rank\-$r$ approximation and point out that the offset of DLRT comes from a curvature\-coupling term which is large and thus non\-negligible under aggressive compression\. Guided by this analysis, we propose a stable dynamic low\-rank training method, named SDLRT, which maintains a lightweight compensation buffer that reinjects the top neglected singular directions\. Additionally, we introduce a negative feedback on the truncation tolerance to stabilize each layer's rank\. Experimentally, SDLRT reliably finds trainable subnetworks where DLRT collapses and as a PEFT adapter on DeBERTa\-v3, it achieves the best average score on SuperGLUE at only $2\.8\\\\%$ parameter overhead over LoRA\.

## Training Transformers for KV\-Cache Compressibility

**Authors:** Yoav Gelberg; Yam Eitan; Michael Bronstein; Yarin Gal; Haggai Maron

**ID:** 150358\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150358

[Paper](<https://openreview.net/forum?id=igMG5UgMAj>) | [PDF](<https://openreview.net/pdf?id=igMG5UgMAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150358>)

Long\-context language modeling is increasingly constrained by the Key–Value \(KV\) cache, whose memory and decode\-time access costs scale linearly with the prefix length\. This bottleneck has motivated a range of context\-compression methods, from token\-level summarization to recent optimization\-based KV compression methods\. These post\-hoc methods operate on the KV cache of a fixed pretrained model, so their effectiveness is fundamentally limited by how well the model's internal representations can be compressed\. In this work, we formalize the notion of KV compressibility and show that it is a property of the \*learned representations\*, rather than of the context alone\. We prove that almost any sequence\-to\-vector function admits both highly compressible and inherently non\-compressible transformer implementations, highlighting the need to guide transformers toward compressible representations during training\. Motivated by this, we propose \*\*KV\*\*\-\*\*C\*\*ompression \*\*A\*\*ware \*\*T\*\*raining \(KV\-CAT\), a continued pretraining procedure that incentivizes the emergence of compressible representations\. We introduce a train\-time KV sparsification policy that masks KV slots during training\. This forces the model to use fewer KV slots and encourages it to learn representations amenable to post\-hoc compression\. Empirically, we show that KV\-CAT improves the quality–budget tradeoff of downstream compression methods across retrieval, long\-context question answering, and perplexity\-based evaluation of compressed\-prefix continuation\.

## Next\-Latent Prediction Transformers Learn Compact World Models

**Authors:** Jayden Teoh; Manan Tomar; Kwangjun Ahn; Edward Hu; Tim Pearce; Pratyusha Sharma; Akshay Krishnamurthy; Riashat Islam; Alex Lamb; John Langford

**ID:** 155772\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155772

[Paper](<https://openreview.net/forum?id=325YSKkc2n>) | [PDF](<https://openreview.net/pdf?id=325YSKkc2n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155772>)

Transformers replace recurrence with a memory that grows with sequence length and self\-attention that enables ad\-hoc look ups over past tokens\. Consequently, they lack an incentive to compress history into compact latent states with consistent transition rules\. This often leads to learning solutions that generalize poorly\. We introduce \*\*Next\-Latent Prediction\*\* \(NextLat\), which extends standard next\-token training with \*self\-supervised\* predictions in the latent space\. Specifically, NextLat trains a transformer to learn latent representations that are predictive of its next latent state given the next output token\. Theoretically, we show that these latents provably converge to \*belief states\*, compressed information of the history necessary to predict the future\. This simple auxiliary objective injects a recurrent inductive bias into transformers, while leaving their architecture, parallel training, and inference unchanged\. NextLat effectively encourages the transformer to form compact internal world models with its own belief states and transition dynamics—a crucial property absent in standard next\-token prediction transformers\. Empirically, across benchmarks in world modeling, reasoning, planning, and language modeling, NextLat demonstrates significant gains over standard next\-token training in downstream accuracy, representation compression, and lookahead planning\. Furthermore, NextLat enables \*variable\-length self\-speculative decoding\*, accelerating inference by up to $3\.3\\times$ in the language domain\.      NextLat stands as a simple and efficient paradigm for shaping transformer representations toward stronger generalization\.

## Block Sphere Vector Quantization

**Authors:** Heesang Ann; Joongkyu Lee; Min\-hwan Oh

**ID:** 152314\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152314

[Paper](<https://openreview.net/forum?id=U13XD8SxhN>) | [PDF](<https://openreview.net/pdf?id=U13XD8SxhN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152314>)

Vector quantization is a fundamental primitive for scalable machine learning systems, enabling memory\-efficient storage, fast retrieval, and compressed inference\. Recent rotation\-based quantizers such as EDEN, RabitQ, and TurboQuant have introduced strong guarantees and empirical performance, but the surrounding comparisons have been difficult to interpret because they rely on different distortion criteria, probability regimes, and implementation assumptions\. As our first contribution, we provide a unified theoretical comparison of these methods and show that their relative advantages are criterion\-dependent rather than absolute: TurboQuant is favorable for MSE distortion, EDEN is effective for expected inner\-product distortion, and RabitQ provides strong high\-probability control\. This comparison clarifies the design principles behind each advantage and shows that no existing method uniformly dominates across the relevant measures\. As our second contribution, we introduce \*Block\-Sphere Quantization\* \(\*\*BlockQuant\*\*\), a new rotation\-based block quantization algorithm designed around the spherical geometry of randomly rotated vectors\. Unlike coordinate\-wise quantizers, \*\*BlockQuant\*\* quantizes blocks on the sphere, preserving the geometry of rotated embeddings more faithfully\. We prove that this block\-spherical design improves expected distortion performance, including both reconstruction MSE and expected inner\-product distortion\. Experiments on real embedding data support these theoretical improvements\.

## Coverage\-Based Calibration for Post\-Training Quantization via Weighted Maximum Coverage over Outlier Channels

**Authors:** Ibne Farabi Shihab; Sanjeda Akter; Anuj Sharma

**ID:** 154675\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154675

[Paper](<https://openreview.net/forum?id=BsTRAPk0F8>) | [PDF](<https://openreview.net/pdf?id=BsTRAPk0F8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154675>)

_Abstract unavailable from the accessible public sources._

## Block\-OBS\-GS: Exact Per\-Block Joint Brain Surgery with Gauss–Seidel Refinement for LLM Pruning

**Authors:** Yuwen Huang; Xiang Pan

**ID:** 152355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgdviE0ING>) | [PDF](<https://openreview.net/pdf?id=TgdviE0ING>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152355>)

Post\-training pruning of large language models \(LLMs\) zeroes a fraction of the weights and reconstructs the survivors without retraining, addressing the weight\-memory bottleneck of LLM serving\. At a fixed mask the per\-row reconstruction admits a closed\-form Optimal Brain Surgeon \(OBS\) optimum, but the cost of the exact joint solve is cubic in the layer dimension; one\-pass methods such as SparseGPT and Wanda approximate it at quadratic cost without attaining the per\-block joint optimum\. We introduce Block\-OBS\-GS, which solves the per\-block joint OBS reconstruction exactly within SparseGPT's complexity class via a per\-row Cholesky factorisation of the in\-block damped Hessian \(one third the cost of an explicit inverse, reused across the algorithm\) and follows it with a single cross\-block Gauss\-\-Seidel sweep\. We prove three guarantees: per\-layer FLOP count in SparseGPT's complexity class, with the leading $mn^\{2\}$ constant dropping from $1/2$ \(SparseGPT\) to $3\\rho/2$ \(Block\-OBS\-GS\) where $\\rho=1\-s$, hence strictly lower for sparsity $s&gt;2/3$; per\-row reconstruction error at most SparseGPT's, strict whenever the activation Hessian has non\-zero off\-diagonal coupling; and a closed\-form distance bound to the unregularised joint\-OBS optimum that contracts geometrically per sweep\. Across six Llama\-3 and Qwen\-3 backbones from 3B to 70B parameters, Block\-OBS\-GS attains the lowest WikiText\-2 perplexity at every tested sparsity on the three Llama\-3 backbones, with a $47\\%$ perplexity reduction over SparseGPT on Llama\-3\.1\-8B at $s=0\.875$; the highest seven\-task commonsense Avg7 on six of twelve populated cells; 5\-shot Massive Multitask Language Understanding \(MMLU\) within $0\.026$ of SparseGPT across populated cells; and the lowest WikiText\-2 perplexity on four of five backbones under $2\{:\}4$ structured sparsity\.

## DepthGraft: Structural Regularization through Hierarchical Cross\-Layer KV Reconstruction

**Authors:** Xiaohan Qin; Xiangdong Zhang; Yu Wang; Huaijin Wu; Zhuo Xia; Yebin Yang; Junchi Yan

**ID:** 152636\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152636

[Paper](<https://openreview.net/forum?id=RaqeCKA8Ch>) | [PDF](<https://openreview.net/pdf?id=RaqeCKA8Ch>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152636>)

Scaling depth is a key route to stronger large language models, but Pre\-LN architectures often suffer from depth\-wise information dilution, limiting the effective use of deep layers\. While cross\-layer connectivity has proven effective at mitigating this problem, existing designs usually introduce additional computation or memory access\. We revisit cross\-layer KV sharing as an efficient form of such connectivity\. Beyond cache compression, each KV reuse edge creates a direct gradient path from deep layers to source KV projections, turning KV sharing into an implicit structural regularizer for KV representation geometry\. We provide a systematic analysis of this mechanism, showing that proper sharing topologies sharpen key retrieval directions while enriching the value content subspace, whereas existing adjacent or global\-anchor designs do not fully exploit this effect\. Motivated by this, we propose DepthGraft, a hierarchical KV\-sharing architecture that reconstructs deep\-layer KV from stride\-aligned shallow\-\-middle source pairs\. DepthGraft distributes non\-local gradient flow across source layers, while preserving prefill early completion and reducing KV cache by roughly one third\. Experiments on dense and MoE models from 0\.5B to 65B parameters show consistent downstream improvements under both GQA and MLA\. Notably, on the 16B MoE model, DepthGraft achieves a \*\*7\.0%\*\* absolute improvement on MMLU\-Pro, along with gains of \*\*6\.6%\*\* on CMMLU and \*\*6\.4%\*\* on C3\. These results validate the potential of DepthGraft as a scalable design for large\-scale pretraining\.

## TOM\-Pruning: Target\-aware Output Manifold for LLM Pruning

**Authors:** Junchen Hao; Weikang Meng; Yingjian Li; Zheng Zhang

**ID:** 153219\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153219

[Paper](<https://openreview.net/forum?id=Mv31DAbjkw>) | [PDF](<https://openreview.net/pdf?id=Mv31DAbjkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153219>)

_Abstract unavailable from the accessible public sources._

## Benchmark Recovery Does Not Certify a Frozen Tool\-Trigger Contract After Quantization

**Authors:** Rui Li; Shuang Cao

**ID:** 155241\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155241

[Paper](<https://openreview.net/forum?id=7CU4DLB7yh>) | [PDF](<https://openreview.net/pdf?id=7CU4DLB7yh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155241>)

_Abstract unavailable from the accessible public sources._

## Spike\-SFT: Selective Parameter Enhancement and Fusion for Efficient Spiking Neural Networks

**Authors:** Xiubo Liang; Jinxing Han; Yuke Li; Haoqi Zhu; Zhenxing Li; Hongyi Duan; Yu Zhao; Hongzhi Wang

**ID:** 155711\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155711

[Paper](<https://openreview.net/forum?id=3Td9h2rVyH>) | [PDF](<https://openreview.net/pdf?id=3Td9h2rVyH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155711>)

Spiking Neural Networks \(SNNs\) promise energy\-efficient inference, but adapting large pre\-trained SNNs to new tasks is expensive because BPTT memory and runtime scale with the number of simulation steps $T$\. We observe that weights in pre\-trained SNNs are strongly concentrated near zero, and under thresholded dynamics many such synapses are functionally silent\. Based on this, we propose \\textbf\{Spike\-SFT\}, a two\-stage adaptation framework\. Stage 1 \(\\textbf\{Selective Parameter Enhancement\}, SPE\) fine\-tunes only a small\-magnitude subset via masked updates with low\-rank regularization, progressive re\-selection, and sparse\-gradient storage, reducing memory while maintaining competitive accuracy\. Stage 2 \(\\textbf\{PickIt\}\) fuses multiple SPE\-adapted models by alignment and interference\-aware delta merging with spike\-statistics calibration, yielding a single merged model with zero inference\-time overhead\. Across several SNN backbones and benchmarks, Spike\-SFT offers a favorable accuracy\-\-cost trade\-off, improving fine\-tuning efficiency \(time/memory\) while retaining strong accuracy, and enabling zero\-overhead weight\-space fusion via PickIt\.

## To Copy or Not to Copy: Controlling Speculative Decoding via Intrinsic Model Signals

**Authors:** Roy Eisenstadt; Ido Cohen; Edo Cohen\-Karlik; Lior Wolf; Itamar Zimerman

**ID:** 152547\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152547

[Paper](<https://openreview.net/forum?id=SLqBK6yQPm>) | [PDF](<https://openreview.net/pdf?id=SLqBK6yQPm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152547>)

Speculative Decoding \(SD\) has significantly accelerated Large Language Model \(LLM\) inference, yet existing approaches face a fundamental tradeoff between two drafting strategies: neural drafting and context\-based copying\. Neural drafts \(e\.g\., EAGLE3\) provide robust performance across diverse text settings, while copy\-based methods achieve higher speedups in copy\-intensive regimes by generating candidates faster and exploiting long repetition spans for near\-perfect speculation\. We analyze existing copy\-based methods and find that they are prone to accidental repetitions where surface\-level $n$\-gram overlap does not reflect a structural intent to copy, leading to false\-positive triggers that ultimately degrade throughput\. We introduce \*\*SwitchSD\*\*, an adaptive framework that treats copying as a \*\*latent control signal\*\* of the LLM\. By training lightweight probes on the target model's internal representations, SwitchSD identifies genuine copy\-intent with high precision \(AUC $&gt;$ 0\.99\)\. This allows the system to dynamically switch between neural drafting \(e\.g\., EAGLE\) and context\-based copying\. Our results across Llama and Qwen families demonstrate throughput gains of up to 15% over state\-of\-the\-art baselines like EAGLE3, effectively turning "copying" from a noisy heuristic into a principled, model\-aware decoding regime\.

## A Self\-Evolving Framework for Efficient Terminal Agents via Observational Context Compression

**Authors:** JinCheng Ren; Siwei Wu; Yizhi Li; Zhu; Shu XU; Boyu Feng; Ruibin Yuan; Wei Zhang; Riza Batista\-Navarro; Min Gao; Yan Bai; Jian Yang; Chenghua Lin

**ID:** 153290\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153290

[Paper](<https://openreview.net/forum?id=MMhankfnpV>) | [PDF](<https://openreview.net/pdf?id=MMhankfnpV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153290>)

Terminal observations are not ordinary long\-context text: they are heterogeneous, low\-information\-density execution traces in which sparse but exact evidence \(e\.g\., error messages and file paths\) is interleaved with large amounts of repetitive terminal output\. For long\-horizon CLI agents, retaining raw observations rapidly increases context cost and can dilute critical signals, while LLM\-based summarization or fixed heuristics often fail to adapt across heterogeneous terminal tasks and may discard precise task\-relevant evidence\.We propose TACO, the first self\-evolving Terminal Agent Compression framework, which treats compression rules as reusable, preservation\-aware knowledge acquired from interaction trajectories\. Rather than relying on manually designed rules, static pruning, or task\-specific compressor training, TACO autonomously discovers, refines, and reuses structured compression rules from agent interaction trajectories\. A Global Rule Pool accumulates effective rules across tasks, while task\-time rule evolution adapts them online to the current workflow\. This allows TACO to filter redundant terminal observations while conservatively preserving exact task\-relevant evidence\.Across six benchmarks, including TB 1\.0, TB 2\.0, SWE\-Bench Lite, CompileBench, DevEval, and CRUST\-Bench, TACO consistently maintains or improves task success across models and agent scaffolds\. On TerminalBench, TACO yields 1%\-\-4% absolute accuracy gains under standard evaluation and improves accuracy by 2%\-\-3% under matched token budgets\. On downstream benchmarks, it reduces total token consumption by 12%\-\-27% while maintaining or improving task success\. These results show that self\-evolving observation compression can unlock latent capability in existing CLI agents by allocating context budget toward task\-relevant evidence, without model fine\-tuning or human\-crafted compression rules\.

## Online Minimum Description Length Passive\-Aggressive Algorithms

**Authors:** John Hurwitz; Charles K Nicholas; Edward Raff

**ID:** 155249\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155249

[Paper](<https://openreview.net/forum?id=77tofmsGFn>) | [PDF](<https://openreview.net/pdf?id=77tofmsGFn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155249>)

We present an algorithm for margin\-based online learning using lossless compressors \(like zip\) via the Minimum Description Length Principle\. The technique, we call \\emph\{MDL\-PA\}, can be viewed as an analogue of Passive\-Aggressive algorithms for probability distributions \(equivalently viewed as lossless compression schemes\) where we consider a \\emph\{code length margin\}\. Separate models are maintained per class, and the update rule is an information projection correcting the true\-class model's prediction on a margin\-violating sample\. To bridge theory and practice, we demonstrate a practical approximation to this online learning setup via adaptive Lempel\-Ziv\-style compression dictionaries to classify sequences in the text and malware domains\.

## Vision Token Pruning via Query\-Vision Interaction Decomposition

**Authors:** Harshithanjani Athi; Sravan Kumar Ankireddy; Jianzhong Zhang; Hyeji Kim

**ID:** 152195\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152195

[Paper](<https://openreview.net/forum?id=UqphiAp8hm>) | [PDF](<https://openreview.net/pdf?id=UqphiAp8hm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152195>)

_Abstract unavailable from the accessible public sources._

## A Method\-Class Divide in Sub\-4\-Bit Quantization:\\\\Iterative vs\.\\ Single\-Pass Sensitivity to Data Composition

**Authors:** Yehong Jiang; Yen\-Kuang Chen; Xinmin Tian

**ID:** 148347\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148347

[Paper](<https://openreview.net/forum?id=yY3pWWSxW5>) | [PDF](<https://openreview.net/pdf?id=yY3pWWSxW5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148347>)

_Abstract unavailable from the accessible public sources._

## Proteus: Incremental Memory Activation for Long\-Context Sequence Modeling

**Authors:** Reza Bayat; Ali Behrouz; Vahab Mirrokni; Aaron Courville

**ID:** 154744\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154744

[Paper](<https://openreview.net/forum?id=BJtTMkeGhz>) | [PDF](<https://openreview.net/pdf?id=BJtTMkeGhz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154744>)

The quadratic cost of attention\-based sequence models for long contexts has motivated a growing line of research on memory\-based models that can compress context into a compact state\. However, most existing memory models expose a static memory throughout the entire sequence\. In practice, this approach is prone to memory being “polluted” by early inputs, and it can saturate and fail to incorporate later context\. We study a new paradigm of incremental memory activation, where the effective capacity of memory is controlled and progressively expanded as the context grows\. By imposing an early bottleneck and introducing fresh capacity over time, this leads to better compression of history and reduces interference\. We instantiate this paradigm in Proteus, a straightforward mechanism that can be incorporated into a broad class of neural memory architectures at no additional cost\. We apply Proteus to state\-of\-the\-art models, including Hope\-Attention, SWLA, Comba, and Titans, and observe consistent improvements across all of them\. Overall, our results show that static memory is suboptimal and that incremental memory activation is a promising direction for long\-context management\.

## SpectralKV: Redundancy\-Aware KV Cache Compression via Spectral Coreset Selection

**Authors:** Fangming Zhao; Fulun Ye; Xiaofei Yue; Ziming Zhao; Yu Peng; Junyu Chen; Tingting Li

**ID:** 148958\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148958

[Paper](<https://openreview.net/forum?id=ttixAKQvFd>) | [PDF](<https://openreview.net/pdf?id=ttixAKQvFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148958>)

The key\-value \(KV\) cache has become a dominant memory and bandwidth bottleneck for serving long\-context large language models, motivating a growing body of work on KV cache compression\. Most existing methods follow a common recipe: a uniform per\-layer budget and attention top\-$k$ token selection, but this recipe is \\emph\{data\-oblivious\} \(ignoring cross\-layer variation in attention concentration\) and \\emph\{redundancy\-blind\} \(retaining near\-duplicate key\-\-value entries\)\. We propose \\textbf\{SpectralKV\}, a training\-free framework that addresses both issues jointly\. Across layers, a lightweight concentration\-based criterion redistributes a fixed global budget based on the entropy of observation\-window attention, giving more slots to layers whose attention is more concentrated\. Within each layer, a spectral coreset selector treats keys and values as geometric objects in a metric\-aligned joint feature space and selects tokens via residual pivoting, suppressing near\-duplicates while preserving geometrically distinct directions\. On Llama\-3\.1\-8B and Qwen3\-8B, SpectralKV consistently outperforms seven strong baselines on 15 LongBench tasks and PG\-19 perplexity at 16K and 32K contexts, with the largest gains at aggressive compression ratios down to $6\.25\\%$ keep\. And a static\-budget variant reduces peak prefill VRAM by up to $44\\%$ with negligible quality loss\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/spectralKV\-2FF7\}\.

## RecMem: Recurrent Memory Compression for Long\-Sequence Recommendation

**Authors:** Haoyi Hu; Gaoyang Guo; Yunjia Xi; Wen Chen; Weiwen Liu; Jian Wu; Yuning Jiang; Weinan Zhang

**ID:** 149955\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149955

[Paper](<https://openreview.net/forum?id=lvtUjInAvY>) | [PDF](<https://openreview.net/pdf?id=lvtUjInAvY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149955>)

_Abstract unavailable from the accessible public sources._

## Clapping: Removing Per\-sample Storage for Pipeline Parallel Learning with Communication Compression

**Authors:** Boao Kong; Xu Huang; Yuqi Xu; Yixuan Liang; Bin Wang; Kun Yuan

**ID:** 148239\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148239

[Paper](<https://openreview.net/forum?id=zMLxSjEos8>) | [PDF](<https://openreview.net/pdf?id=zMLxSjEos8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148239>)

_Abstract unavailable from the accessible public sources._

## UxSID: Semantic\-Aware User Interests Modeling for Ultra\-Long Sequence

**Authors:** Hongwei Zhang; qiqiang zhong; Jiangxia Cao; Junfeng Shu; Yiyang Lv; Huanjie Wang; Liwei Guan; Jing Yao; Yiyu Wang; Liu Zhaojie; Han Li

**ID:** 149506\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149506

[Paper](<https://openreview.net/forum?id=pdr1nmA83m>) | [PDF](<https://openreview.net/pdf?id=pdr1nmA83m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149506>)

Modeling ultra\-long user behavior sequences is an essential task for capturing evolving preferences in modern recommender systems, and this research direction has contributed solid gains in the past several years\. However, recommendation systems always serve enormous traffic, and extending user sequences sharply increases computational cost, which creates a difficult trade\-off between efficiency and effectiveness\. To scale to longer user sequences while keeping lightweight serving computation, existing works can be divided into two paradigms: \(1\) $\\textit\{Search\-based Top\-$K$ selection\}$, which constructs an $\\textbf\{item\-specific\}$ subsequence for each candidate item to avoid facing the ultra\-long sequence directly; and \(2\) $\\textit\{pre\-trained user\-interest compression\}$, which maps an ultra\-long user sequence into a small group of $\\textbf\{item\-agnostic\}$ user interest memories so that the online model can perceive user long\-term interests via this highly compressed dense memory\. Besides the two technical routes \(totally item\-specific or item\-agnostic\), we argue that there exists an intermediate path not well explored: preserving partial relevance between the user sequence and the target item, while exposing only limited signals to guide the direction of interest compression\. This design does not pursue item\-specific user interest compression, but seeks semantic\-group shared general user interest memory according to item attributes, where semantically similar items share the same compressed user interest memory\. Motivated by this, we propose $\\textbf\{UxSID\}$, a novel framework that bridges this gap by facilitating a target item semantic\-aware interaction between $\\textbf\{U\}$ser histories and candidate $\\textbf\{S\}$emantic $\\textbf\{ID\}$s \(SIDs\)\. Specifically, UxSID employs a dual\-level attention strategy: it first extracts  item\-agnostic user interests from raw sequences, and then performs a semantic\-specific query over global behaviors and those agnostic interests to generate semantic\-specific preferences\. By adopting this end\-to\-end architecture, UxSID generates offline embeddings that balance computational parsimony with target items' semantic awareness, while strictly preserving parity with online inference in constant time\. Extensive public benchmarks and large\-scale A/B tests demonstrate that UxSID achieves state\-of\-the\-art performance, driving a 0\.337\\% revenue lift in advertising\. Open source link: $\\url\{https://anonymous\.4open\.science/r/UxSID/\}$

## Fewer Tokens, Fewer Layers: Efficient Vision Token Pruning and On\-Policy Distillation to Accelerate VLMs

**Authors:** Shuai Wang; Shitong Shao; Qi Xuan; Zhaowei Zhu; Jiaheng Wei

**ID:** 152441\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152441

[Paper](<https://openreview.net/forum?id=T7WbWqjpqm>) | [PDF](<https://openreview.net/pdf?id=T7WbWqjpqm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152441>)

Vision\-language models \(VLMs\) have achieved remarkable progress\. However, processing high\-resolution images and long videos generates a massive number of vision tokens, creating a severe inference bottleneck due to the quadratic complexity of attention mechanisms\. Previous efforts to mitigate this issue have primarily focused on accelerating the prefill stage by reducing the number of vision tokens, often yielding limited practical speedups while neglecting the increasingly time\-consuming decoding stage when the generated response is long\. In addition, existing approaches heavily rely on attention maps or similarity maps that are not compatible with efficient attention implementations\. To comprehensively address these limitations, we first propose \*\*FlashPruner\*\*, a lightweight module that selects the most helpful vision tokens without relying on attention maps, significantly reducing prefill time\. For the decoding stage, we adopt self\-speculative decoding and theoretically prove that on\-policy distillation guarantees a lower bound for the speculative acceptance rate\. Guided by this formulation, we introduce \*\*LoFT\*\*, an on\-policy distillation method that effectively trains a highly reliable and efficient draft model including FlashPruner and early layers of the language model\. Extensive experiments demonstrate that after training with LoFT, FlashPruner achieves substantial inference speedups while preserving task performance\. Notably, on MVBench, FlashPruner improves the time\-to\-first\-token by 1\.5$\\times$ and decoding speed by 2$\\times$, maintaining 96\.8\\% relative accuracy with only 10\\% vision tokens\.

## MARS: Enabling Autoregressive Models Multi\-Token Generation

**Authors:** Ziqi Jin; Lei Wang; Ziwei Luo; Aixin Sun

**ID:** 150620\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150620

[Paper](<https://openreview.net/forum?id=gmcLiK4jCQ>) | [PDF](<https://openreview.net/pdf?id=gmcLiK4jCQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150620>)

Autoregressive \(AR\) language models generate text one token at a time, even when consecutive tokens are highly predictable given earlier context\. We introduce MARS \(Mask AutoRegreSsion\), a lightweight fine\-tuning method that teaches an instruction\-tuned AR model to predict multiple tokens per forward pass\. MARS adds no architectural modifications, no extra parameters, and produces a single model that can still be called exactly like the original AR model with no performance degradation\. Unlike speculative decoding, which maintains a separate draft model alongside the target, or multi\-head approaches such as Medusa, which attach additional prediction heads, MARS requires only continued training on existing instruction data\. When generating one token per forward pass, MARS matches or exceeds the AR baseline on six standard benchmarks\. When allowed to accept multiple tokens per step, it maintains baseline\-level accuracy while achieving 1\.5\-1\.7x throughput\. We further develop a block\-level KV caching strategy for batch inference, achieving up to 1\.71x wall\-clock speedup over AR with KV cache on Qwen2\.5\-7B\. Finally, MARS supports real\-time speed adjustment via confidence thresholding: under high request load, the serving system can increase throughput on the fly without swapping models or restarting, providing a practical latency\-quality knob for deployment\.

## Backdoor Attacks under  Lossy Compression: From Failure to Reactivation and Adaptation

**Authors:** Qian Li; Yunuo Chen; Yuntian Chen

**ID:** 155082\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155082

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

**ID:** 153600\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153600

[Paper](<https://openreview.net/forum?id=KBzmOm0ugU>) | [PDF](<https://openreview.net/pdf?id=KBzmOm0ugU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153600>)

Clustering and vector quantization are core primitives for representation learning and large\-scale retrieval, yet widely used methods often produce clusters or codewords of highly uneven quality, especially in noisy or heterogeneous data\.  In this paper, we propose a distortion\-constrained optimal transport \(DCOT\) framework that explicitly enforces per\-cluster bounds on the average assignment distortion, defined as the expected distance between data points and their assigned representatives, ensuring more consistent and reliable representations\. Our formulation couples an optimal transport assignment objective with cluster\-level distortion constraints to control cluster quality\. To solve this constrained problem, we develop an efficient alternating optimization algorithm that iteratively updates transport plans, representatives \(codewords\), and dual variables\. We further provide theoretical guarantees including entropic consistency, coordinate descent, and sublinear convergence\. Importantly, DCOT serves as a plug\-in assignment module that can be seamlessly integrated into a wide range of vector quantization methods\. Replacing the assignment step with DCOT consistently improves reconstruction quality across diverse architectures and training settings, demonstrating strong robustness and general applicability\.

## What Fits \(Into Few Tokens\) Doesn't Overfit:  Compression and Generalization in ML Research Agents

**Authors:** Martin Bertran; Aaron Roth; Steven Wu

**ID:** 149540\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149540

[Paper](<https://openreview.net/forum?id=pN8yAngM9e>) | [PDF](<https://openreview.net/pdf?id=pN8yAngM9e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149540>)

Reusing a held\-out benchmark adaptively should, in principle, invite overfitting\. Yet benchmark\-driven machine learning \(ML\) has produced surprisingly little overfitting in practice\. An attractive hypothesis is that successful ML strategies are highly compressible\. We study this in the setting of LLM\-driven research agents, where the hypothesis becomes directly testable via two complementary information bottlenecks\. In \\emph\{output compression\}, an exploration agent adaptively searches for high\-performance models using a validation set, and we test whether a fresh \`\`reproducer agent'' can reproduce its performance given only an extremely short prompt and the training data\. In \\emph\{input compression\}, the explorer receives only one\-bit feedback indicating whether each submitted model improves on the running best\. Across 8 datasets spanning tabular classification, vision, language modeling, diffusion modeling, and reward modeling, we find that these bottlenecks have little effect on performance: short prompts and compressible feedback are sufficient to reproduce and find high\-performance models\. The hypothesis is falsifiable: when we deliberately induce validation\-set overfitting, the results fail to reproduce with short prompts\. Taken together, our results support a description\-length explanation for the lack of overfitting in benchmark\-driven ML: successful strategies occupy a low\-complexity region of strategy space\.

## Beyond Expected Values: Risk\-Sensitive Planning with Distributional Monte\-Carlo Tree Search

**Authors:** Quynh Trinh; Trung Nguyen; Nam Nguyen; Tuan Dam

**ID:** 149403\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149403

[Paper](<https://openreview.net/forum?id=qKB3gDxeBz>) | [PDF](<https://openreview.net/pdf?id=qKB3gDxeBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149403>)

Monte\-Carlo Tree Search \(MCTS\) typically stores only scalar mean estimates, which makes it poorly suited for tail\-risk objectives such as conditional value\-at\-risk \(CVaR\)\. We introduce \*\*Categorical Thompson Sampling with Optimism \(CATSO\)\*\* and \*\*Particle Thompson Sampling with Optimism \(PATSO\)\*\*, two distributional MCTS algorithms that maintain finite\-support empirical backup laws at Q\-edges\. CATSO represents Q\-edge laws with categorical atoms and Dirichlet Thompson sampling, while PATSO represents them with adaptive particles\. Both algorithms select actions using the CVaR of a Thompson\-sampled Q\-edge law plus a polynomial optimism bonus, and propagate scalar continuation values through visit\-weighted averages of child Q\-edge CVaR scores\. For the finite\-depth nested CVaR planning target, we prove an $O\(n^\{\-1/2\}\)$ bound on the root value error after $n$ rollouts, which upper\-bounds the risk\-sensitive simple regret\. CATSO adds a fixed\-grid discretization bias, while capped PATSO adds a tunable Wasserstein compression bias\. Experiments on stochastic planning benchmarks show that distributional Q\-edges improve lower\-tail return and reduce catastrophic outcomes when mean\-optimal and risk\-sensitive behavior differ\.

## ResKV: Residual\-based Channel\-wise Unstructured Pruning for KV Cache Compression

**Authors:** Yue Chen; Jinze Li; Dajiang Liu

**ID:** 152894\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152894

[Paper](<https://openreview.net/forum?id=PcOi9GxwJj>) | [PDF](<https://openreview.net/pdf?id=PcOi9GxwJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152894>)

In modern LLM applications, the demand for extended context lengths continues to surge, making KV cache a major performance bottleneck in long\-context inference\. Channel\-wise pruning has emerged as a prevalent KV cache compression paradigm; however, existing solutions overlook inherent similarities among KV vectors, resulting in limited pruning ratios and noticeable performance degradation\. To tackle this issue, we present ResKV, a novel residual\-driven channel\-wise pruning framework that fully exploits KV vector similarity for effective compression\. ResKV first clusters highly similar KV vectors via cosine similarity metrics, then calculates residual vectors by subtracting each cluster’s centroid from the original features\. Subsequent channel\-wise unstructured pruning and per\-token quantization are exclusively applied to these residual components\. During inference, preserved residuals are combined with their corresponding centroids to accurately recover dense KV representations\. Benefiting from the low magnitude and sparse, near\-zero properties of centroid residuals, both pruning and quantization incur only negligible approximation errors\. Experimental results show that ResKV reduces peak memory consumption by 45\.6% and improves inference throughput by 4\.27× against dense FlashAttention inference, while sustaining competitive model performance\. Under identical sparsity constraints, ResKV outperforms state\-of\-the\-art channel\-wise KV pruning methods by achieving up to 2\.26 points higher accuracy and 2\.63× faster end\-to\-end throughput\.

## Speculative Decoding Is Per\-Token, Not Path

**Authors:** Songyan Dai

**ID:** 150210\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150210

[Paper](<https://openreview.net/forum?id=jumLplfWH0>) | [PDF](<https://openreview.net/pdf?id=jumLplfWH0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150210>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137834\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

**Repeated source row:** 137834

[Official poster](<https://neurips.cc/virtual/2026/poster/137834>)

_Abstract unavailable from the accessible public sources._

## The 100x Challenge: Compression\-First Research Pipeline for Bandwidth\-Constrained Regions

**Authors:** Tushar Shinde

**ID:** 137828\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

**Repeated source row:** 137828

[Official poster](<https://neurips.cc/virtual/2026/poster/137828>)

_Abstract unavailable from the accessible public sources._

## Backdoor Attacks under  Lossy Compression: From Failure to Reactivation and Adaptation

**Authors:** Qian Li; Yunuo Chen; Yuntian Chen

**ID:** 155082\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155082

[Paper](<https://openreview.net/forum?id=8Zds0GA3mw>) | [PDF](<https://openreview.net/pdf?id=8Zds0GA3mw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155082>)

Real\-world backdoor attacks often require poisoned datasets to be stored and transmitted before they are used to compromise deep learning systems\. In the era of big data, however, the inevitable use of lossy compression poses a fundamental challenge to invisible backdoor attacks\. We observe that triggers embedded in RGB images can become ineffective once the images are lossily compressed into binary bitstreams, such as JPEG files, for storage and transmission\. Consequently, poisoned data may lose their malicious functionality after compression, causing backdoor injection to fail\.  Prior compression\-based attacks typically exploit compression artifacts as certain triggers to distinguish poisoned RGB samples from uncompressed benign ones, rather than addressing whether malicious information can survive a shared lossy storage\-and\-transmission pipeline\.  In this paper, we highlight the necessity of explicitly accounting for lossy compression in backdoor attacks\. This requires attackers to ensure that transmitted binary bitstreams preserve malicious trigger information, such that effective triggers can be induced after decompression\.  Building on the region\-of\-interest \(ROI\) coding mechanism in image compression, we propose two poisoning strategies tailored to inevitable lossy compression\. First, we introduce \\textbf\{Universal Attack Reactivation\}, a general method that uses sample\-specific ROI masks to reactivate trigger information in  bitstreams for learned image compression \(LIC\)\. Second, we present \\textbf\{Compression\-Adapted Attack\}, a new attack strategy that employs customized ROI masks to encode trigger information into  bitstreams and applies to both traditional codecs and LIC\. Extensive experiments demonstrate the effectiveness of both strategies\.

## HeatKV: Head\-tuned KV\-cache Compression for Visual Autoregressive Modeling

**Authors:** Jonathan Cederlund; Axel Berg; Durmus Alp Emre Acar; Chuteng Zhou; Pontus Giselsson

**ID:** 149898\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149898

[Paper](<https://openreview.net/forum?id=mPOtDA3Wld>) | [PDF](<https://openreview.net/pdf?id=mPOtDA3Wld>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149898>)

Visual Autoregressive \(VAR\) models have recently demonstrated impressive image generation quality while maintaining low latency\. However, they suffer from severe KV\-cache memory constraints, often requiring gigabytes of memory per generated image\. We introduce HeatKV, a novel compression method that adapts cache allocation in each head based on its attention to previously generated scales\. Using a small offline calibration set, the attention heads are ranked according to their attention scores over prior scales\. Based on this ranking, we construct a static pruning schedule tailored to a given memory budget\. Applied to the Infinity\-2B model, HeatKV achieves $2 \\times$ higher compression ratio in memory allocation for KV cache compared to existing methods, while maintaining similar or better image fidelity, prompt alignment and human perception score\. Our method achieves a new state\-of\-the\-art \(SOTA\) for VAR model KV\-cache compression, showcasing the effectiveness of fine\-grained, head\-specific cache allocation\.

## TALON: Confidence\-Aware Speculative Decoding with Adaptive Token Trees

**Authors:** Tianyu Liu; Qitan Lv; Yuhao Shen; Jun Zhang; Xiao Sun; Xiaoyan Sun

**ID:** 151232 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bvEN7uoqUE>) | [PDF](<https://openreview.net/pdf?id=bvEN7uoqUE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151232>)

_Abstract unavailable from the accessible public sources._

## LoRaQ: Optimized Low Rank Approximation for 4\-bit Quantization

**Authors:** Yann Bouquet; Alireza Khodamoradi; Sophie Y Shen; Kristof Denolf; Mathieu Salzmann

**ID:** 155848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2S5ArH5uJa>) | [PDF](<https://openreview.net/pdf?id=2S5ArH5uJa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155848>)

Post\-training quantization \(PTQ\) of large diffusion transformers degrades generative quality at 4\-bit quantization\. Low\-rank approximation methods are a promising solution and append auxiliary linear branches to restore performance\. Current state\-of\-the\-art approaches keep these branches at high precision \(W16A16\) and rely on heavy, data\-dependent calibration for initialization\. Their branch is defined as a precise low\-rank approximation of a full\-rank matrix and therefore cannot keep precision at sub\-16 bit levels\.  We challenge both limitations with LoRaQ \(Low\-Rank Approximated Quantization\), a data\-free calibration approach that optimizes quantization error compensation\. By overcoming the need for high\-precision branches, LoRaQ enables the first fully sub\-16 bit pipeline, allowing the low\-rank branch itself to be quantized\. We demonstrate that, at equal memory overhead, LoRaQ outperforms the state\-of\-the\-art methods in their native implementations on Pixart\-$\\Sigma$, SANA and Flux\.1\. We also analyze mixed\-precision configurations, showing that setups such as W8A8, W6A6, and W4A8 for the low\-rank branch, alongside a W4 residual layer, yield superior results while maintaining a fully quantized architecture compatible with modern mixed\-precision hardware, and translate into kernel\-level speedups of up to $3\.19\\times$ on AMD MI355\.

## Rethinking Neural Nonlinearity as Gating

**Authors:** MUHAMMAD SABIH; Frank Hannig; Jürgen Teich

**ID:** 148464 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xc7nzeKG4m>) | [PDF](<https://openreview.net/pdf?id=xc7nzeKG4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148464>)

Activation functions are considered an essential primitive for neural nonlinearity, i\.e\., they enable neural networks to serve as universal approximators\. In this paper, we show that this nonlinearity can also be achieved by input\-conditioned threshold gating through branches as a universal primitive\. We demonstrate that standard activations—whether piecewise\-linear \(ReLU, PReLU, Hardtanh\) or smooth \(SiLU, Sigmoid, Tanh, GELU\)—are in fact instances of a single Threshold Gating \(TG\) primitive\. For softmax, we show that it admits an exact TG conversion via its equivalent per\-element Sigmoid form\. We then validate these equivalences by converting pretrained networks across CNNs, transformer\-based models, and recurrent architectures, preserving model performance without requiring retraining\. Threshold Gating also enables training from scratch that goes beyond replacing existing activations, enabling gains in model compression, performance, and shorter training\. We also propose a 'Minimal Branch Theorem' which relates the minimum number of required branches in our primitive to the trainability of general deep neural networks\. In terms of hardware implementation, TG maps to a unified implementation in the case of analog in\-memory systems, addressing the bottleneck of analog\-to\-digital and digital\-to\-analog converters \(ADC/DAC\) that is known to significantly impact power consumption and on\-chip area\.

