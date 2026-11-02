# ML Systems &amp; Efficiency / Hardware and Infrastructure

机器学习系统与效率 / 硬件与基础设施

26 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Flash\-SD\-KDE: Accelerating SD\-KDE with Tensor Cores

**Authors:** Elliot Epstein; Rajat Vadiraj Dwaraknath; John Winnicki

**ID:** 151863 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XKQaXj5Qol>) | [PDF](<https://openreview.net/pdf?id=XKQaXj5Qol>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151863>)

Score\-debiased kernel density estimation \(SD\-KDE\) achieves improved asymptotic convergence rates over classical KDE, but its use of an empirical score has made it significantly slower in practice\.  We show that by re\-ordering the SD\-KDE computation to expose matrix\-multiplication structure, Tensor Cores can be used to accelerate the GPU implementation\. On a 32k\-sample 16\-dimensional problem, our approach runs up to $47\\times$ faster than a strong SD\-KDE GPU baseline and $3\{,\}300\\times$ faster than scikit\-learn's KDE\.  On a larger 1m\-sample 16\-dimensional task evaluated on 131k queries, Flash\-SD\-KDE completes in $2\.3$ s on a single GPU, making score\-debiased density estimation practical at previously infeasible scales\.

## Beyond Masked Sparsity: SNACK Enables Truly Sparse Neural Networks on GPU

**Authors:** Jafar Badour; Elena Mocanu; Maurice Keulen

**ID:** 150469 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hoB9d0ONXQ>) | [PDF](<https://openreview.net/pdf?id=hoB9d0ONXQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150469>)

_Abstract unavailable from the accessible public sources._

## A Foundational Model System for Datacenter Machine Repairs

**Authors:** Yuanlin Wen; Elan S Markowitz; Zubo Gu; Sami Abu\-El\-Haija; Bryan Perozzi; Michael Galkin; Ali Parviz; Aayush Gupta; Venkata Chivukula; Griffin Hadfield; Aravind Akella; Daniel J Frame; Vahab Mirrokni; Amin Vahdat

**ID:** 149370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYkd4mcbDs>) | [PDF](<https://openreview.net/pdf?id=qYkd4mcbDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149370>)

The rapid scale\-up of AI infrastructure has made datacenter reliability a cornerstone of the cloud business economy\. Hardware failures in hyper\-scale AI clusters do not merely disrupt individual machines; they stall multi\-million dollar training workloads, and so the downtime of individual machines can cause outsized economic losses\. Minimizing machine downtime, therefore, is more important than ever\. To address this, we present DrWatson, an AI\-driven hardware diagnosis system that pioneers a foundation\-model approach to automated datacenter maintenance\. Deployed at production scale within a major AI hyperscaler, DrWatson yields substantial efficiency gains across diverse compute architectures\. Real\-world evaluations demonstrate that it reduces production downtime by 18\.3% on GPU platforms and 16\.1% on custom AI accelerators\. Furthermore, it significantly accelerates hardware deployment, cutting quality assurance \(QA\) time by 28\.3% for GPUs and 25\.1% for custom accelerators\. These results establish DrWatson as a field\-tested solution for maximizing the reliability and cost efficiency of next generation AI fleets\.

## CipherFlow: Hardware\-Aware Compiler Framework for Low\-Latency Hybrid Secure Inference

**Authors:** Hedong Zhang; Mengxin Zheng; Qian Lou

**ID:** 155825 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2b0g4FkPGD>) | [PDF](<https://openreview.net/pdf?id=2b0g4FkPGD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155825>)

_Abstract unavailable from the accessible public sources._

## Efficient Agentic GPU Kernel Optimization with a Compact Domain\-Specific Language and Speed\-of\-Light Guidance

**Authors:** Siva Kumar Sastry Hari; Vignesh Balaji; Sana Damani; Qijing Huang; Christos Kozyrakis

**ID:** 148269 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z71DjAr4OZ>) | [PDF](<https://openreview.net/pdf?id=z71DjAr4OZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148269>)

_Abstract unavailable from the accessible public sources._

## Evolving Agent Teams

**Authors:** Shiyi Cao; Ziming Mao; Dacheng Li; Joseph Gonzalez; Ion Stoica

**ID:** 153181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NCRt7BmX5a>) | [PDF](<https://openreview.net/pdf?id=NCRt7BmX5a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153181>)

The rapid progress of software engineering agents drives interest in applying them to open\-ended problems such as GPU kernel optimization\. However, we find that existing coding agents converge to local optima on real\-world, expert\-written kernels \(e\.g\., FlashInfer\)\. We introduce Evolving Agent Teams, a multi\-agent framework that escapes such local optima\. It features \(1\) a central supervisor that diagnoses each local optima and restructures the roles of a team of agents; and \(2\) a persistent file system that comprises a strategy tree, an evolution log, and per\-team artifacts, grounding each restructuring in accumulated experience\. Under a matched token budget, Evolving Agent Teams consistently outperforms strong coding\-agent baselines\. With an extended token budget, Evolving Agent Teams generates a CUDA kernel that reaches $1\.2\\times$ mean speedup over the production FlashInfer MLA paged decode kernel and wins on 36 of 47 production workloads from FlashInfer\-Bench \($0\.86$\-\-$0\.99\\times$ on the remaining 11\)\.

## Efficient Serving for Dynamic Agent Workflows with Prediction\-based KV\-Cache Management

**Authors:** Haoyu Zheng; Fangcheng Fu; Jia Wu; Binhang Yuan; Yongqiang Zhang; Hao Wang; Yuanyuan Zhu; Xiao Yan; Jiawei Jiang

**ID:** 151165 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cY4gQCRJvN>) | [PDF](<https://openreview.net/pdf?id=cY4gQCRJvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151165>)

LLM\-based workflows compose specialized agents to execute complex tasks, and these agents usually share substantial context, allowing KV\-Cache reuse to save computation\. Existing approaches either manage KV\-Cache at agent level and fail to exploit the reuse opportunities within workflows, or manage cache at the workflow level but assume that each workflow calls a static sequence of agents\. However, practical workflows are typically dynamic, where the sequence of invoked agents and thus induced cache reuse opportunities depend on the context of each task\. To serve such dynamic workflows efficiently, we build a system dubbed PBKV \(\\textbf\{P\}rediction\-\\textbf\{B\}ased \\textbf\{KV\}\-Cache Management\)\. For each workflow, PBKV predicts the agent invocations in several future steps by fusing the guidance from historical workflows and context of the target workflow\. Based on the predictions, PBKV estimates the reuse potential of cache entries and keeps the high\-potential entries in GPU memory\. To be robust to prediction errors, PBKV utilizes the predictions conservatively during both cache eviction and prefetching\. Experiments on three workflow benchmarks show that PBKV achieves up to $1\.85\\times$ speedup over LRU on dynamic workflows, and up to $1\.26\\times$ speedup over the SOTA baseline KVFlow on the static workflow\.

## Hawkeye: Hardware\-Aware GPU Kernel Optimization with Minimal Supervision

**Authors:** Arya Tschand; Kesavan Ramakrishnan; Alexander Ingare; Simon Guo; Jeffrey Ma; Zishen Wan; Simran Arora; Azalia Mirhoseini; Vijay Janapa Reddi

**ID:** 155018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=99gxreT4sW>) | [PDF](<https://openreview.net/pdf?id=99gxreT4sW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155018>)

Achieving peak GPU kernel performance increasingly relies on architecture\-specific optimizations targeting new hardware features\. While AI coding agents show promise in generating performant kernels, they lack the necessary context to effectively implement and stack hardware\-specific optimizations, especially on newer GPU architectures\. We propose Hawkeye \(Hardware\-Aware Kernel Optimization\), an open\-source framework that grounds autonomous kernel generation in a minimal and comprehensive taxonomy with only one unit test per optimization strategy per target architecture\. Supporting a new accelerator therefore requires only 10 expert\-written unit tests per architecture \(one per recurring optimization strategy\) that generalize across downstream workloads, rather than hand writing a new kernel for each workload and precision\. Hawkeye effectively scales the test\-time compute of coding agents with this minimal expert supervision to enable kernel generation that consistently leverages hardware\-specific features, approaching and even surpassing expert\-written PyTorch or Triton in BF16 and emerging low precision \(FP8, NVFP4, MXFP4\) across Ampere, Hopper, Blackwell, and MI350 GPUs\. Hawkeye demonstrates that minimally supervised coding agents can exploit architecture\-specific hardware features and reduce the overhead of supporting emerging hardware accelerators\.

## FlashFFN: Multi\-Head Decomposition Enables I/O\-Aware Feed\-Forward Network

**Authors:** Minshen Zhang; Xiang Hu; Jianguo Li; Wei Wu; Kewei Tu

**ID:** 151360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8w3ugs7jR>) | [PDF](<https://openreview.net/pdf?id=b8w3ugs7jR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151360>)

The Feed\-Forward Network \(FFN\) dominates the activation memory of modern Transformers because the intermediate tensor of width d\_ff is materialized in HBM between the two matmul stages\. FlashAttention\-style I/O\-aware tiling avoids the analogous cost in attention, yet has not been brought to FFN\. We identify the reason as a hardware\-geometry constraint: under one\-pass tiled accumulation a fused FFN kernel must keep an output accumulator of width d\_model in on\-chip SRAM, which is infeasible whenever d\_model &gt;= 2048 on currently shipping datacenter GPUs\. We formalize this as an SRAM\-feasibility proposition and prove a corollary: multi\-head decomposition is the simplest architectural transform that brings FFN inside this SRAM\-feasible regime, because it makes the per\-head accumulator width d\_h = d\_model/H a free parameter that can be driven below the GPU's SRAM cutoff\. Naive multi\-head FFN, however, blows up the per\-head expansion ratio d\_ff/d\_h as d\_model grows, drifting away from the well\-validated SwiGLU 8/3 optimum and degrading quality at scale; we resolve this with a dense MoE\-like sub\-network correction that restores the optimal ratio while preserving SRAM\-feasibility\. The resulting architecture, FlashFFN, is an SRAM\-feasible FFN block that replaces SwiGLU under matched parameter and FLOPs budgets and derives directly from the SRAM constraint\. Across 128M\-\-1\.3B parameter models trained on 60\-\-100B tokens of The Pile, FlashFFN achieves a Pareto improvement over SwiGLU at fixed compute: up to \~4x lower peak activation memory at long sequences, inference latency that matches or improves over SwiGLU \(up to \~1\.32x faster on H100\), and consistent quality gains \(up to \-0\.84 in evaluation perplexity and \+1\.60 average accuracy across six downstream benchmarks at 1\.3B\)

## Efficient Serving for Dynamic Agent Workflows with Prediction\-based KV\-Cache Management

**Authors:** Haoyu Zheng; Fangcheng Fu; Jia Wu; Binhang Yuan; Yongqiang Zhang; Hao Wang; Yuanyuan Zhu; Xiao Yan; Jiawei Jiang

**ID:** 151165\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151165

[Paper](<https://openreview.net/forum?id=cY4gQCRJvN>) | [PDF](<https://openreview.net/pdf?id=cY4gQCRJvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151165>)

LLM\-based workflows compose specialized agents to execute complex tasks, and these agents usually share substantial context, allowing KV\-Cache reuse to save computation\. Existing approaches either manage KV\-Cache at agent level and fail to exploit the reuse opportunities within workflows, or manage cache at the workflow level but assume that each workflow calls a static sequence of agents\. However, practical workflows are typically dynamic, where the sequence of invoked agents and thus induced cache reuse opportunities depend on the context of each task\. To serve such dynamic workflows efficiently, we build a system dubbed PBKV \(\\textbf\{P\}rediction\-\\textbf\{B\}ased \\textbf\{KV\}\-Cache Management\)\. For each workflow, PBKV predicts the agent invocations in several future steps by fusing the guidance from historical workflows and context of the target workflow\. Based on the predictions, PBKV estimates the reuse potential of cache entries and keeps the high\-potential entries in GPU memory\. To be robust to prediction errors, PBKV utilizes the predictions conservatively during both cache eviction and prefetching\. Experiments on three workflow benchmarks show that PBKV achieves up to $1\.85\\times$ speedup over LRU on dynamic workflows, and up to $1\.26\\times$ speedup over the SOTA baseline KVFlow on the static workflow\.

## Efficient Serving for Dynamic Agent Workflows with Prediction\-based KV\-Cache Management

**Authors:** Haoyu Zheng; Fangcheng Fu; Jia Wu; Binhang Yuan; Yongqiang Zhang; Hao Wang; Yuanyuan Zhu; Xiao Yan; Jiawei Jiang

**ID:** 151165\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151165

[Paper](<https://openreview.net/forum?id=cY4gQCRJvN>) | [PDF](<https://openreview.net/pdf?id=cY4gQCRJvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151165>)

LLM\-based workflows compose specialized agents to execute complex tasks, and these agents usually share substantial context, allowing KV\-Cache reuse to save computation\. Existing approaches either manage KV\-Cache at agent level and fail to exploit the reuse opportunities within workflows, or manage cache at the workflow level but assume that each workflow calls a static sequence of agents\. However, practical workflows are typically dynamic, where the sequence of invoked agents and thus induced cache reuse opportunities depend on the context of each task\. To serve such dynamic workflows efficiently, we build a system dubbed PBKV \(\\textbf\{P\}rediction\-\\textbf\{B\}ased \\textbf\{KV\}\-Cache Management\)\. For each workflow, PBKV predicts the agent invocations in several future steps by fusing the guidance from historical workflows and context of the target workflow\. Based on the predictions, PBKV estimates the reuse potential of cache entries and keeps the high\-potential entries in GPU memory\. To be robust to prediction errors, PBKV utilizes the predictions conservatively during both cache eviction and prefetching\. Experiments on three workflow benchmarks show that PBKV achieves up to $1\.85\\times$ speedup over LRU on dynamic workflows, and up to $1\.26\\times$ speedup over the SOTA baseline KVFlow on the static workflow\.

## Hawkeye: Hardware\-Aware GPU Kernel Optimization with Minimal Supervision

**Authors:** Arya Tschand; Kesavan Ramakrishnan; Alexander Ingare; Simon Guo; Jeffrey Ma; Zishen Wan; Simran Arora; Azalia Mirhoseini; Vijay Janapa Reddi

**ID:** 155018\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155018

[Paper](<https://openreview.net/forum?id=99gxreT4sW>) | [PDF](<https://openreview.net/pdf?id=99gxreT4sW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155018>)

Achieving peak GPU kernel performance increasingly relies on architecture\-specific optimizations targeting new hardware features\. While AI coding agents show promise in generating performant kernels, they lack the necessary context to effectively implement and stack hardware\-specific optimizations, especially on newer GPU architectures\. We propose Hawkeye \(Hardware\-Aware Kernel Optimization\), an open\-source framework that grounds autonomous kernel generation in a minimal and comprehensive taxonomy with only one unit test per optimization strategy per target architecture\. Supporting a new accelerator therefore requires only 10 expert\-written unit tests per architecture \(one per recurring optimization strategy\) that generalize across downstream workloads, rather than hand writing a new kernel for each workload and precision\. Hawkeye effectively scales the test\-time compute of coding agents with this minimal expert supervision to enable kernel generation that consistently leverages hardware\-specific features, approaching and even surpassing expert\-written PyTorch or Triton in BF16 and emerging low precision \(FP8, NVFP4, MXFP4\) across Ampere, Hopper, Blackwell, and MI350 GPUs\. Hawkeye demonstrates that minimally supervised coding agents can exploit architecture\-specific hardware features and reduce the overhead of supporting emerging hardware accelerators\.

## Approximation Algorithms for GPU Pricing under Finite Capacity

**Authors:** Yaolong Yu; Hanrui Zhang; Zeyu Zheng; Kirthevasan Kandasamy

**ID:** 152873 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PjMPnWAPNr>) | [PDF](<https://openreview.net/pdf?id=PjMPnWAPNr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152873>)

We study revenue\-optimal posted\-price design for GPU markets under a finite capacity $B$\. We focus on two settings: \\emph\{sales\}, where each purchase permanently consumes a vendor's GPU inventory, and \\emph\{rentals\}, where each job occupies GPUs for a finite duration and then releases them\. In both settings, the vendor must commit to an anonymous price menu before observing customers' valuation, GPU demand, and job duration\. First, in the sales setting, we show that computing the optimal anonymous static menu is NP\-hard, and that the common practice of linear pricing \(per\-GPU price\) can be highly suboptimal\. We develop three methods with varying approximation guarantees, all of which outperform linear pricing\. Our main method is a convex program \(CP\) obtained via an ex\-ante relaxation of the problem, which obtains a $\\tfrac\{1\-\\epsilon\}\{2\}$  approximation to the optimum when the maximum GPU demand $\\overline\{N\}$ satisfies $\\overline\{N\}\\leq \\epsilon B$\. Building on these results, we analyze the \\emph\{rental\} model\.  We again show that linear pricing \(per\-GPU\-hour price\) is highly suboptimal, and design duration\-aware posted\-price policies based on slot\-coupled ex\-ante CP\.  Our \\emph\{Throttled CP\-Menu Posted Pricing\} \(TCMPP\) policy posts the CP\-induced menu randomly and achieves a $\\frac\{1\-\\epsilon\}\{4\}$ approximation\. We further introduce a slackened version of the same convex program, which reserves capacity in each time slot and achieves stronger guarantees in the small job regime\. We corroborate our theoretical results with simulations\.

## SOL\-ExecBench: Speed\-of\-Light Benchmarking for Real\-World GPU Kernels Against Hardware Limits

**Authors:** Edward C Lin; Sahil Modi; Siva Kumar Sastry Hari; Qijing Huang; Zhifan Ye; Nestor Y\. Qin; Fengzhe Zhou; Yuan Zhang; Jingquan Wang; Sana Damani; Dheeraj Peri; Ouye Xie; Aditya Kane; Michael behar; Rishabh Mehta; Vartika Singh; Vikram Sharma Mailthody; Terry Chen; Zihao Ye; Hanfeng Chen; Tianqi Chen; Vinod Grover; Wei Chen; Wei Liu; Eric Chung; Luis Ceze; Roger Bringmann; Michael Lightstone; Christos Kozyrakis; Humphrey Shi

**ID:** 139395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TE8B0CjNsw>) | [PDF](<https://openreview.net/pdf?id=TE8B0CjNsw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139395>)

As agentic AI systems become increasingly capable of generating and optimizing GPU kernels, progress is constrained by benchmarks that reward speedup over software baselines rather than proximity to hardware\-efficient execution\. We present SOL\-ExecBench, a benchmark of 235 CUDA kernel optimization problems extracted from 124 production and emerging AI models spanning language, diffusion, vision, audio, video, and hybrid architectures, targeting NVIDIA Blackwell GPUs\. The benchmark covers forward and backward workloads across BF16, FP8, and NVFP4, including kernels whose best performance is expected to rely on Blackwell\-specific capabilities\. Unlike prior benchmarks that evaluate kernels primarily relative to software implementations, SOL\-ExecBench measures performance against analytically derived Speed\-of\-Light \(SOL\) bounds computed by SOLAR, our pipeline for deriving hardware\-grounded SOL bounds, yielding a fixed target for hardware\-efficient optimization\. We report a SOL Score that quantifies how much of the gap between a release\-defined scoring baseline and the hardware SOL bound a candidate kernel closes\. To support robust evaluation of agentic optimizers, we additionally provide a sandboxed harness with input correctness checks, isolated compilation and execution, CUPTI\-based GPU activity timing, and defenses against common reward\-hacking strategies\. A third\-party post\-release evaluation by Cursor reported a $1\.38\\times$ geometric\-mean speedup over a single\-agent optimized PyTorch baseline and an overall SOL Score of 0\.56 across the full benchmark\. SOL\-ExecBench reframes GPU kernel benchmarking from beating a mutable software baseline to closing the remaining gap to hardware Speed\-of\-Light\.

## GPU Hierarchy Meets Structured Matrices: Fast Algorithms for State\-Space Models

**Authors:** Berlin Chen; Caitlin Wang; Aakash Sunil Lahoti; Kevin Li; Jay Shah; Jack Carlisle; Timmy Liu; Mengyu Guo; Zico Kolter; Albert Gu; Tri Dao

**ID:** 149931 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m6QBIQ5qCZ>) | [PDF](<https://openreview.net/pdf?id=m6QBIQ5qCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149931>)

_Abstract unavailable from the accessible public sources._

## SOL\-ExecBench: Speed\-of\-Light Benchmarking for Real\-World GPU Kernels Against Hardware Limits

**Authors:** Edward C Lin; Sahil Modi; Siva Kumar Sastry Hari; Qijing Huang; Zhifan Ye; Nestor Y\. Qin; Fengzhe Zhou; Yuan Zhang; Jingquan Wang; Sana Damani; Dheeraj Peri; Ouye Xie; Aditya Kane; Michael behar; Rishabh Mehta; Vartika Singh; Vikram Sharma Mailthody; Terry Chen; Zihao Ye; Hanfeng Chen; Tianqi Chen; Vinod Grover; Wei Chen; Wei Liu; Eric Chung; Luis Ceze; Roger Bringmann; Michael Lightstone; Christos Kozyrakis; Humphrey Shi

**ID:** 139395\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139395

[Paper](<https://openreview.net/forum?id=TE8B0CjNsw>) | [PDF](<https://openreview.net/pdf?id=TE8B0CjNsw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139395>)

As agentic AI systems become increasingly capable of generating and optimizing GPU kernels, progress is constrained by benchmarks that reward speedup over software baselines rather than proximity to hardware\-efficient execution\. We present SOL\-ExecBench, a benchmark of 235 CUDA kernel optimization problems extracted from 124 production and emerging AI models spanning language, diffusion, vision, audio, video, and hybrid architectures, targeting NVIDIA Blackwell GPUs\. The benchmark covers forward and backward workloads across BF16, FP8, and NVFP4, including kernels whose best performance is expected to rely on Blackwell\-specific capabilities\. Unlike prior benchmarks that evaluate kernels primarily relative to software implementations, SOL\-ExecBench measures performance against analytically derived Speed\-of\-Light \(SOL\) bounds computed by SOLAR, our pipeline for deriving hardware\-grounded SOL bounds, yielding a fixed target for hardware\-efficient optimization\. We report a SOL Score that quantifies how much of the gap between a release\-defined scoring baseline and the hardware SOL bound a candidate kernel closes\. To support robust evaluation of agentic optimizers, we additionally provide a sandboxed harness with input correctness checks, isolated compilation and execution, CUPTI\-based GPU activity timing, and defenses against common reward\-hacking strategies\. A third\-party post\-release evaluation by Cursor reported a $1\.38\\times$ geometric\-mean speedup over a single\-agent optimized PyTorch baseline and an overall SOL Score of 0\.56 across the full benchmark\. SOL\-ExecBench reframes GPU kernel benchmarking from beating a mutable software baseline to closing the remaining gap to hardware Speed\-of\-Light\.

## Prefill\-Guided Trace Allocation for Sample\-Efficient Test\-Time Scaling

**Authors:** Zhi Yao; Zhiqing Tang; Hanshuai Cui; Qianli Ma; Fanshuai Meng; Weijia Jia

**ID:** 154693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BhyoBRJYPG>) | [PDF](<https://openreview.net/pdf?id=BhyoBRJYPG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154693>)

Self\-consistency is a widely adopted test\-time scaling method that improves LLM reasoning by majority\-voting over multiple sampled traces\. However, fixed\-budget self\-consistency applies the same trace count to every problem, even when the first greedy attempt already produces the correct answer, wasting substantial compute on resource\-constrained hardware\. Existing adaptive methods rely on post\-decode agreement signals that become reliable only after complete traces have been generated, yet a prefill\-stage oracle reveals that a large fraction of this cost can be eliminated before spending the full self\-consistency budget\. We introduce the Hidden\-State Adaptive Trace Scheduler \(HATS\), which predicts greedy\-trace reliability from prefill hidden states before allocating additional sampled traces\. HATS validates one greedy probe before routing easy problems to a single trace, borderline problems to a small vote, and hard problems to the full budget\. A compute\-optimal allocation analysis shows that extra samples should go where marginal accuracy gain is highest, explaining why non\-uniform spending outperforms fixed budgets\. On MATH\-500 with DeepSeek\-R1\-Distill\-Qwen\-7B under single\-GPU serving, HATS matches the four\-sample self\-consistency accuracy \($80\.6\\%$\) while reducing samples by $48\\%$ and decode tokens by $40\\%$, a result confirmed under strict out\-of\-fold evaluation\. These results support prefill\-guided scheduling as a practical token\- and sample\-saving mechanism for test\-time scaling\.

## Learning Cost\-Efficient Autoscaling for Latency\-Constrained Disaggregated LLM Serving

**Authors:** Fu Luo; Binbin Chen; Qing Luo; Linhui Xu; Tieying Zhang; Zhenkun Wang

**ID:** 148443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xlRlrGTfwT>) | [PDF](<https://openreview.net/pdf?id=xlRlrGTfwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148443>)

Prefill\-Decode \(PD\) disaggregation improves LLM serving by isolating compute\-bound prefilling and memory\-bound decoding onto specialized GPU pools\. However, dynamically rebalancing these pools is challenging because request arrival rates, prompt lengths, and generation lengths change over time\. We formulate this autoscaling problem as latency\-constrained cost minimization: the controller must minimize GPU usage while keeping P99 tail latency within TTFT and TPOT targets\. Existing threshold\-based heuristics require extensive parameter tuning, yet still tend to over\-provision\. To address this, we propose a reinforcement learning \(RL\) framework that learns a cost\-efficient autoscaling policy\. The policy uses a recurrent network to track multi\-timescale workload trends and pod lifecycle states, enabling decisions that account for delayed pod readiness and delayed SLO feedback\. It also restricts the action space with hard masks and anti\-oscillation cooldowns, enforcing feasible scaling actions while reducing wasteful GPU transitions\. We train the policy in a high\-fidelity PD\-disaggregated serving simulator calibrated from profiling data and validated against a physical testbed\. Simulator experiments on ShareGPT and Azure Conversational traces show that the learned policy satisfies the same latency constraints as grid\-searched heuristic baselines while reducing average GPU occupancy\. Real\-cluster deployment on ShareGPT further confirms sim\-to\-real transfer while satisfying the latency targets\.

## CUDABeaver: Benchmarking LLM\-Based Automated CUDA Debugging

**Authors:** Shiyang Li; Haoyang Chen; Mattia Fazzini; Caiwen Ding

**ID:** 139244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZEC5u5oMz>) | [PDF](<https://openreview.net/pdf?id=cZEC5u5oMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139244>)

Debugging CUDA programs has long been challenging because failures often arise from subtle interactions among hardware behavior, compiler decisions, memory hierarchy, and asynchronous execution\. More importantly, with the rapid expansion of GPU usage across scientific computing, machine learning, graphics, and systems workloads, CUDA debugging has become more challenging than ever\. Current evaluations of LLM\-based CUDA programming largely miss this setting: a model can pass correctness tests with repair by degeneration, simplifying the CUDA code into a safer but slower program that abandons the original optimization structure\. We introduce CUDABEAVER, a benchmark for CUDA debugging from real failing workspaces produced during LLM\-based CUDA generation\. Each task provides the broken candidate, native build/test commands, raw error evidence, and a single editable file\. CUDABEAVER evaluates whether a fixer truly repairs the failing CUDA code or merely finds a slower test\-passing replacement, reporting results by failure category, debugging trajectory, stagnation mode, and performance preservation\. We further propose pass@k\(M,C,A\), a protocol\-conditional CUDA debugging metric by making the fixer M, corpus C, and protocol axes Aexplicit\. Using this metric across 213 tasks and seven frontier LLMs, we show that protocol\-aware evaluation gives a more faithful view of CUDA debugging ability: when performance\-loss tolerance is high, fixers appear much stronger, but even a minor stricter performance requirement can sharply reduce measured success, shifting scores by up to 40 percentage points\.

## Log\-Averaged Mirror Prox for Fast, Large\-Scale Optimal Transport in Linear Space

**Authors:** Matthew Burns; Jiaming Liang

**ID:** 148791 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v3S7acblMZ>) | [PDF](<https://openreview.net/pdf?id=v3S7acblMZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148791>)

We propose Log\-Averaged Mirror Prox \(LAMP\), a linear\-space primal\-dual method for large\-scale optimal transport\. LAMP implements primal mirror prox updates by tracking an averaged dual sequence, reducing storage complexity from $\\mathcal O\(nm\)$ to $\\mathcal O\(n\+m\)$ while preserving dense, GPU\-friendly reductions\. Consequently, LAMP preserves the last\-iterate $\\widetilde\{\\mathcal\{O\}\}\( nm\\varepsilon^\{\-1\}\)$ arithmetic complexity of conservatively parameterized primal\-dual mirror prox\. We further analyze LAMP as a direct optimal transport solver in a more performant parameter regime, providing a last\-iterate sub\-optimality certificate dependent on infeasibility and an explicit $\\mathcal O\(1/t\)$ term\.  Moreover, we give a computable sufficient condition for best\-iterate convergence to a saddle\-point\. Numerical experiments with an optimized CUDA implementation show that LAMP outperforms first\-order baselines in several high\-accuracy \(entropic\) optimal transport problems\. LAMP is further shown to scale up to problems with $n=m=2^\{18\}$ marginal supports, which were previously beyond the reach of primal\-dual first\-order methods\.

## Efficient Serving for Dynamic Agent Workflows with Prediction\-based KV\-Cache Management

**Authors:** Haoyu Zheng; Fangcheng Fu; Jia Wu; Binhang Yuan; Yongqiang Zhang; Hao Wang; Yuanyuan Zhu; Xiao Yan; Jiawei Jiang

**ID:** 151165\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151165

[Paper](<https://openreview.net/forum?id=cY4gQCRJvN>) | [PDF](<https://openreview.net/pdf?id=cY4gQCRJvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151165>)

LLM\-based workflows compose specialized agents to execute complex tasks, and these agents usually share substantial context, allowing KV\-Cache reuse to save computation\. Existing approaches either manage KV\-Cache at agent level and fail to exploit the reuse opportunities within workflows, or manage cache at the workflow level but assume that each workflow calls a static sequence of agents\. However, practical workflows are typically dynamic, where the sequence of invoked agents and thus induced cache reuse opportunities depend on the context of each task\. To serve such dynamic workflows efficiently, we build a system dubbed PBKV \(\\textbf\{P\}rediction\-\\textbf\{B\}ased \\textbf\{KV\}\-Cache Management\)\. For each workflow, PBKV predicts the agent invocations in several future steps by fusing the guidance from historical workflows and context of the target workflow\. Based on the predictions, PBKV estimates the reuse potential of cache entries and keeps the high\-potential entries in GPU memory\. To be robust to prediction errors, PBKV utilizes the predictions conservatively during both cache eviction and prefetching\. Experiments on three workflow benchmarks show that PBKV achieves up to $1\.85\\times$ speedup over LRU on dynamic workflows, and up to $1\.26\\times$ speedup over the SOTA baseline KVFlow on the static workflow\.

## Matrix Recovery Via Symmetric Rank\-one Measurements With Random Unit\-modulus Vectors

**Authors:** Tongyu Zhou; Wei Zhang

**ID:** 152261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNVpU6i2AS>) | [PDF](<https://openreview.net/pdf?id=UNVpU6i2AS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152261>)

Unit\-modulus measurement vectors, due to their phase\-only variations, exhibit favorable hardware compatibility and storage efficiency\. In this paper, we consider matrix recovery using symmetric unit\-modulus rank\-one measurements\. We identify a fundamental limitation of symmetric unit\-modulus measurements\-\-\-their inability to capture individual diagonal entries, and show that matrix recovery can be achieved using such measurements when the diagonal entries are known or directly measurable\. We construct a stacked operator and establish that it satisfies a mixed\-norm restricted isometry property \($\\mathrm\{mRIP\}$\) for unit\-modulus measurements\. Leveraging the $\\mathrm\{mRIP\}$ condition, we derive exact and stable recovery results for matrix recovery with unit\-modulus measurements in both noiseless and noisy settings\. Our work is the first to provide the theoretical foundation for matrix recovery under symmetric rank\-one unit\-modulus measurements\. Numerical experiments further corroborate these theoretical findings\.

## GPU Hierarchy Meets Structured Matrices: Fast Algorithms for State\-Space Models

**Authors:** Berlin Chen; Caitlin Wang; Aakash Sunil Lahoti; Kevin Li; Jay Shah; Jack Carlisle; Timmy Liu; Mengyu Guo; Zico Kolter; Albert Gu; Tri Dao

**ID:** 149931\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149931

[Paper](<https://openreview.net/forum?id=m6QBIQ5qCZ>) | [PDF](<https://openreview.net/pdf?id=m6QBIQ5qCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149931>)

_Abstract unavailable from the accessible public sources._

## CUDABeaver: Benchmarking LLM\-Based Automated CUDA Debugging

**Authors:** Shiyang Li; Haoyang Chen; Mattia Fazzini; Caiwen Ding

**ID:** 139244\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139244

[Paper](<https://openreview.net/forum?id=cZEC5u5oMz>) | [PDF](<https://openreview.net/pdf?id=cZEC5u5oMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139244>)

Debugging CUDA programs has long been challenging because failures often arise from subtle interactions among hardware behavior, compiler decisions, memory hierarchy, and asynchronous execution\. More importantly, with the rapid expansion of GPU usage across scientific computing, machine learning, graphics, and systems workloads, CUDA debugging has become more challenging than ever\. Current evaluations of LLM\-based CUDA programming largely miss this setting: a model can pass correctness tests with repair by degeneration, simplifying the CUDA code into a safer but slower program that abandons the original optimization structure\. We introduce CUDABEAVER, a benchmark for CUDA debugging from real failing workspaces produced during LLM\-based CUDA generation\. Each task provides the broken candidate, native build/test commands, raw error evidence, and a single editable file\. CUDABEAVER evaluates whether a fixer truly repairs the failing CUDA code or merely finds a slower test\-passing replacement, reporting results by failure category, debugging trajectory, stagnation mode, and performance preservation\. We further propose pass@k\(M,C,A\), a protocol\-conditional CUDA debugging metric by making the fixer M, corpus C, and protocol axes Aexplicit\. Using this metric across 213 tasks and seven frontier LLMs, we show that protocol\-aware evaluation gives a more faithful view of CUDA debugging ability: when performance\-loss tolerance is high, fixers appear much stronger, but even a minor stricter performance requirement can sharply reduce measured success, shifting scores by up to 40 percentage points\.

## Log\-Averaged Mirror Prox for Fast, Large\-Scale Optimal Transport in Linear Space

**Authors:** Matthew Burns; Jiaming Liang

**ID:** 148791\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148791

[Paper](<https://openreview.net/forum?id=v3S7acblMZ>) | [PDF](<https://openreview.net/pdf?id=v3S7acblMZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148791>)

We propose Log\-Averaged Mirror Prox \(LAMP\), a linear\-space primal\-dual method for large\-scale optimal transport\. LAMP implements primal mirror prox updates by tracking an averaged dual sequence, reducing storage complexity from $\\mathcal O\(nm\)$ to $\\mathcal O\(n\+m\)$ while preserving dense, GPU\-friendly reductions\. Consequently, LAMP preserves the last\-iterate $\\widetilde\{\\mathcal\{O\}\}\( nm\\varepsilon^\{\-1\}\)$ arithmetic complexity of conservatively parameterized primal\-dual mirror prox\. We further analyze LAMP as a direct optimal transport solver in a more performant parameter regime, providing a last\-iterate sub\-optimality certificate dependent on infeasibility and an explicit $\\mathcal O\(1/t\)$ term\.  Moreover, we give a computable sufficient condition for best\-iterate convergence to a saddle\-point\. Numerical experiments with an optimized CUDA implementation show that LAMP outperforms first\-order baselines in several high\-accuracy \(entropic\) optimal transport problems\. LAMP is further shown to scale up to problems with $n=m=2^\{18\}$ marginal supports, which were previously beyond the reach of primal\-dual first\-order methods\.

## A Foundational Model System for Datacenter Machine Repairs

**Authors:** Yuanlin Wen; Elan S Markowitz; Zubo Gu; Sami Abu\-El\-Haija; Bryan Perozzi; Michael Galkin; Ali Parviz; Aayush Gupta; Venkata Chivukula; Griffin Hadfield; Aravind Akella; Daniel J Frame; Vahab Mirrokni; Amin Vahdat

**ID:** 149370\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149370

[Paper](<https://openreview.net/forum?id=qYkd4mcbDs>) | [PDF](<https://openreview.net/pdf?id=qYkd4mcbDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149370>)

The rapid scale\-up of AI infrastructure has made datacenter reliability a cornerstone of the cloud business economy\. Hardware failures in hyper\-scale AI clusters do not merely disrupt individual machines; they stall multi\-million dollar training workloads, and so the downtime of individual machines can cause outsized economic losses\. Minimizing machine downtime, therefore, is more important than ever\. To address this, we present DrWatson, an AI\-driven hardware diagnosis system that pioneers a foundation\-model approach to automated datacenter maintenance\. Deployed at production scale within a major AI hyperscaler, DrWatson yields substantial efficiency gains across diverse compute architectures\. Real\-world evaluations demonstrate that it reduces production downtime by 18\.3% on GPU platforms and 16\.1% on custom AI accelerators\. Furthermore, it significantly accelerates hardware deployment, cutting quality assurance \(QA\) time by 28\.3% for GPUs and 25\.1% for custom accelerators\. These results establish DrWatson as a field\-tested solution for maximizing the reliability and cost efficiency of next generation AI fleets\.

