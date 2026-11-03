# ML Systems &amp; Efficiency / Hardware and Infrastructure

机器学习系统与效率 / 硬件与基础设施

35 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## STParOpt: An End\-to\-End Framework for Execution\-Aware Parallelism Inference and Optimized CUDA Migration

**Authors:** Meng Wang; Jinshuo Liu; Weiran Pian; Feiyang Wen; Xinya Liu; Juan Deng; Jeff Pan

**ID:** 149431 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q6zVPYeseN>) | [PDF](<https://openreview.net/pdf?id=q6zVPYeseN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149431>)

Automatically migrating serial C programs to parallel CUDA is essential for high\-performance computing, yet remains challenging due to the partial observability of data dependencies: critical memory access patterns cannot be reliably inferred from source code alone\. Existing static analysis methods often fail on irregular and pointer\-intensive loops, while LLM\-based approaches cannot infer memory\-access\-dependent optimization strategies from source text alone\. To address these limitations, we propose STParOpt, which formulates parallelism and optimization inference as an uncertainty\-aware learning problem under partial observability, where ambiguity in static analysis is explicitly quantified and resolved using execution signals\. STParOpt augments static program graphs with stride\-level execution features via cross\-attention, and employs an entropy\-guided fusion mechanism that up\-weights dynamic evidence when the static branch's predictive entropy over parallelizability is high\. Experiments on standard HPC benchmarks demonstrate that STParOpt significantly outperforms both compiler\-based and LLM\-based baselines on parallelism detection and CUDA code generation\. Notably, STParOpt achieves 96\.4% parallelism detection accuracy and 86\.1% end\-to\-end generation correctness, surpassing the strongest baseline by \+5\.0 pp and \+11\.4 pp respectively\.

## Paleoinspired Vision: From Exploring Colour Vision Evolution to Inspiring Camera Design

**Authors:** Yijie Lu; Zhimin Zong; Junjie Zhang; Shenghan Su; Lin Gu; Ziteng Cui; Zeyun Zhao; Yan Pu; Jing Lu; Daisuke Kojima; Ruogu Fang

**ID:** 151205 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cB3qLL381r>) | [PDF](<https://openreview.net/pdf?id=cB3qLL381r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151205>)

The evolution of colour vision is captivating, as it reveals the adaptive strategies of extinct species while simulta\- neously inspiring innovations in modern imaging technol\- ogy\. In this study, we present a simplified model of vi\- sual transduction in the retina, introducing a novel opsin layer\. We quantify evolutionary pressures by measuring ma\- chine vision recognition accuracy on colour images shaped by specific opsins\. Building on this, we develop an evolu\- tionary conservation optimisation algorithm to reconstruct the spectral sensitivity of opsins, enabling mutation\-driven adaptations to to more effectively spot fruits or predators\. This model condenses millions of years of evolution within seconds on GPU, providing an experimental framework to test long\-standing hypotheses in evolutionary biology , such as vision of early mammals, primate trichromacy from gene duplication, retention of colour blindness, blue\-shift of fish rod and multiple rod opsins with bioluminescence\. More\- over, the model enables speculative explorations of hypo\- thetical species, such as organisms with eyes adapted to the conditions on Mars\. Our findings suggest a minimalist yet effective approach to task\-specific camera filter design, op\- timising the spectral response function to meet application\- driven demands\. The code will be made publicly available upon acceptance\.

## Efficient Agentic GPU Kernel Optimization with a Compact Domain\-Specific Language and Speed\-of\-Light Guidance

**Authors:** Siva Kumar Sastry Hari; Vignesh Balaji; Sana Damani; Qijing Huang; Christos Kozyrakis

**ID:** 148269 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z71DjAr4OZ>) | [PDF](<https://openreview.net/pdf?id=z71DjAr4OZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148269>)

LLM agents can optimize GPU kernels, but each candidate requires generation, compilation, correctness testing, and profiling\. Our objective is to reduce the number of expensive attempts needed to find a correct, fast kernel\. We study two complementary ways to improve this attempt efficiency by changing the representation that the agent writes in and adding a first\-principles performance signal that estimates remaining headroom\. We introduce $\\mu$CUTLASS, a compact in\-context learnable DSL that exposes high\-impact CUTLASS optimization choices while hiding template plumbing, and pair it with Speed\-of\-Light \(SOL\) guidance for search steering, budget allocation, and integrity checking\. On 59 KernelBench problems on H100, switching GPT\-5\-mini from low\-level code generation to $\\mu$CUTLASS changes a $0\.40\\times$ geomean regression versus PyTorch into a $1\.27\\times$ speedup\. Adding SOL\-guided steering, it reaches $1\.56\\times$\. Across model tiers, this combination lets weaker models match or exceed stronger raw\-code baselines, and SOL\-guided scheduling saves 19\-\-43\\% of tokens while retaining at least 95\\% geomean speedup\. We also show that integrity filtering is essential because, without SOL\-assisted checks, reported speedups can be inflated by up to $1\.9\\times$ by benchmark\-gaming or PyTorch\-only solutions\.

## N\-vium: Mixture\-of\-Exits Transformer for Accelerated Exact Generation

**Authors:** Aleksander Lorenc; Frédéric Berdoz; Joël Mathys; Roger Wattenhofer

**ID:** 154834 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AbwLJoCyB5>) | [PDF](<https://openreview.net/pdf?id=AbwLJoCyB5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154834>)

Improving the inference efficiency of autoregressive transformers typically means reducing FLOPs per token, usually through approximations that degrade model quality\. We introduce N\-vium, a mixture\-of\-exits transformer that partially parallelizes computation across depth on standard hardware, increasing effective FLOPs per second rather than minimizing compute per token\. N\-vium attaches prediction heads at multiple depths and defines the next\-token distribution as a learned mixture over these exits, with token\-adaptive routing\. This formulation strictly generalizes the standard transformer, which is recovered exactly when routing assigns zero mass to all intermediate heads\. Sampling from the mixture is exact, and complete KV caches are recovered by deferring the upper\-layer computation and batching it with later tokens\. We pretrain N\-vium at scales up to 1\.5B parameters\. Our largest model reaches 57\.9% wall\-clock speedup over a parameter\- and data\-matched standard transformer at no perplexity cost\.

## Phases of Muon: When Muon Eclipses SignSGD

**Authors:** Elliot Paquette; Noah Marshall; Lucas Benigni; Guangyuan Wang; Atish Agarwala; Courtney Paquette

**ID:** 150376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iXZjCLrCHW>) | [PDF](<https://openreview.net/pdf?id=iXZjCLrCHW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150376>)

Recently, Muon and related spectral optimizers have demonstrated strong empirical performance as scalable stochastic methods, often outperforming Adam\. Yet their behaviour remains poorly understood\. We analyze stochastic spectral optimizers, including Muon, on a high\-dimensional matrix\-valued least squares problem\. We derive explicit deterministic dynamics that provide a tractable framework for studying learning behaviour with a focus on \(stochastic\) SignSVD and \(stochastic\) SignSGD, the latter serving as a proxy for Adam\. Our analysis shows that for large batch size, SignSVD performs a square\-root preconditioning with respect to the data covariance spectrum, while for small batch size smaller eigenmodes behave like SGD, slowing down convergence\. We contrast with SignSGD which for generic covariance performs no preconditioning and has no transition, leading to different optimal learning rates and convergence characteristics\. The two methods match up to a constant factor with isotropic data, but behave differently with anisotropic data\. An analysis of a power law covariance model with data exponent $\\alpha$ and target exponent $\\beta$, and show there are three phases in the $\(\\alpha,\\beta\)$ plane: one where SignSGD is uniformly favored, one where SignSVD is uniformly favored, and a third where the two methods exhibit a trade\-off in performance\.

## Log\-Averaged Mirror Prox for Fast, Large\-Scale Optimal Transport in Linear Space

**Authors:** Matthew Burns; Jiaming Liang

**ID:** 148791 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v3S7acblMZ>) | [PDF](<https://openreview.net/pdf?id=v3S7acblMZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148791>)

We propose Log\-Averaged Mirror Prox \(LAMP\), a linear\-space primal\-dual method for large\-scale optimal transport\. LAMP implements primal mirror prox updates by tracking an averaged dual sequence, reducing storage complexity from $\\mathcal O\(nm\)$ to $\\mathcal O\(n\+m\)$ while preserving dense, GPU\-friendly reductions\. Consequently, LAMP preserves the last\-iterate $\\widetilde\{\\mathcal\{O\}\}\( nm\\varepsilon^\{\-1\}\)$ arithmetic complexity of conservatively parameterized primal\-dual mirror prox\. We further analyze LAMP as a direct optimal transport solver in a more performant parameter regime, providing a last\-iterate sub\-optimality certificate dependent on infeasibility and an explicit $\\mathcal O\(1/t\)$ term\.  Moreover, we give a computable sufficient condition for best\-iterate convergence to a saddle\-point\. Numerical experiments with an optimized CUDA implementation show that LAMP outperforms first\-order baselines in several high\-accuracy \(entropic\) optimal transport problems\. LAMP is further shown to scale up to problems with $n=m=2^\{18\}$ marginal supports, which were previously beyond the reach of primal\-dual first\-order methods\.

## Block\-Wise Differentiable Sinkhorn Attention: Tail\-Refinement Gradients with a Gap\-Aware Dustbin Bridge

**Authors:** Dylan Forde

**ID:** 155973 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1R7hXUr7Od>) | [PDF](<https://openreview.net/pdf?id=1R7hXUr7Od>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155973>)

We study long\-context balanced entropic optimal transport \(OT\) attention on TPU hardware through a stopped\-base, fixed\-depth tail\-refinement surrogate\. After a stopped $T$\-step Sinkhorn solve, we unroll a short refinement tail and differentiate that surrogate exactly\. For the production $R=2$ case, the backward pass contains four staircase plan factors\. We prove an exact one\-reference\-tile schedule: the $R=2$ score cotangent is a single reference plan tile times an explicit modifier field built from vector cotangents and dual differences\. This yields block\-wise cost $O\(\(T\+R\)LW\)$, $O\(Ld\)$ input storage, and $O\(L\)$ additional HBM usage for fixed head dimension $d$ and band width $W$\. We also formalize the current \\texttt\{dustbin\\\_block\} path as the same balanced surrogate on an augmented support, so the schedule lifts to the gap\-aware transport path used in our TPU runs\. We provide a local surrogate\-bias bound, an a posteriori bias certificate, and a projective contraction certificate for strictly positive active blocks\. On synthetic masked problems, the optimized kernel matches exact autodiff of the same centered surrogate to within $10^\{\-5\}$\-\-$10^\{\-10\}$\. On TPU v6e\-8, a four\-configuration Pfam screen completes end\-to\-end, and a promoted balanced $R=2$ run sustains roughly $8\.5$ examples per second through a three\-hour budget, reaching step $1437$\. Held\-out Pfam test shards improve reconstruction from $3\.17$ to $0\.99$ and sparse CE from $5\.86$ to $5\.69$ relative to step $0$\. These results support exact fixed\-depth backward theory, a theorem\-matching gap\-aware bridge, and trainability evidence for the production path\.

## Efficient Serving for Dynamic Agent Workflows with Prediction\-based KV\-Cache Management

**Authors:** Haoyu Zheng; Fangcheng Fu; Jia Wu; Binhang Yuan; Yongqiang Zhang; Hao Wang; Yuanyuan Zhu; Xiao Yan; Jiawei Jiang

**ID:** 151165 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cY4gQCRJvN>) | [PDF](<https://openreview.net/pdf?id=cY4gQCRJvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151165>)

LLM\-based workflows compose specialized agents to execute complex tasks, and these agents usually share substantial context, allowing KV\-Cache reuse to save computation\. Existing approaches either manage KV\-Cache at agent level and fail to exploit the reuse opportunities within workflows, or manage cache at the workflow level but assume that each workflow calls a static sequence of agents\. However, practical workflows are typically dynamic, where the sequence of invoked agents and thus induced cache reuse opportunities depend on the context of each task\. To serve such dynamic workflows efficiently, we build a system dubbed PBKV \(\\textbf\{P\}rediction\-\\textbf\{B\}ased \\textbf\{KV\}\-Cache Management\)\. For each workflow, PBKV predicts the agent invocations in several future steps by fusing the guidance from historical workflows and context of the target workflow\. Based on the predictions, PBKV estimates the reuse potential of cache entries and keeps the high\-potential entries in GPU memory\. To be robust to prediction errors, PBKV utilizes the predictions conservatively during both cache eviction and prefetching\. Experiments on three workflow benchmarks show that PBKV achieves up to $1\.85\\times$ speedup over LRU on dynamic workflows, and up to $1\.26\\times$ speedup over the SOTA baseline KVFlow on the static workflow\.

## When a Window Is Not an Action: Selective Phase\-Script Deliberation for Sliding\-Window Human Activity Recognition

**Authors:** Qi Teng; Xueer Wang

**ID:** 154058 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GWiH2LVHcr>) | [PDF](<https://openreview.net/pdf?id=GWiH2LVHcr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154058>)

Sliding\-window human activity recognition \(HAR\) splits continuous sensor streams into fixed\-length, overlapping windows and trains a classifier to assign one activity label to each window\. Window length and stride are chosen from sampling rate, latency or computation constraints, and assumptions about typical motion duration, but they need not align with motion cycles or activity changes\. Some windows therefore contain only part of a repeated motion, fragments shared by related activities, or mixed evidence near a transition\. Yet each window still receives a single label, creating a granularity mismatch between activity\-level supervision and local motion evidence\. We propose PSDNet \(Phase\-Script Deliberation Network\), which separates local phase interpretation from final activity classification\. PSDNet encodes the current window into latent phase primitives, combines them with recent history, and produces an initial classification with an uncertainty score\. When uncertainty remains high, a deliberation module compares the current phase evidence with learned class\-specific phase scripts, i\.e\., compact templates of short\-term phase patterns, and updates classification scores over a small candidate set\. An auxiliary boundary objective encourages sensitivity to possible activity changes without serving as a hard routing rule\. This design concentrates extra computation where direct classification is least reliable while keeping easy cases efficient\. Experiments on eight public HAR benchmarks show that PSDNet consistently improves accuracy and weighted F1 over strong CNN\- and sequence\-based baselines\. Additional analyses on ambiguous windows and similar\-activity confusion pairs support phase\-aware selective deliberation for windows whose local evidence is insufficient for reliable classification\.

## Learning Cost\-Efficient Autoscaling for Latency\-Constrained Disaggregated LLM Serving

**Authors:** Fu Luo; Binbin Chen; Qing Luo; Linhui Xu; Tieying Zhang; Zhenkun Wang

**ID:** 148443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xlRlrGTfwT>) | [PDF](<https://openreview.net/pdf?id=xlRlrGTfwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148443>)

Prefill\-Decode \(PD\) disaggregation improves LLM serving by isolating compute\-bound prefilling and memory\-bound decoding onto specialized GPU pools\. However, dynamically rebalancing these pools is challenging because request arrival rates, prompt lengths, and generation lengths change over time\. We formulate this autoscaling problem as latency\-constrained cost minimization: the controller must minimize GPU usage while keeping P99 tail latency within TTFT and TPOT targets\. Existing threshold\-based heuristics require extensive parameter tuning, yet still tend to over\-provision\. To address this, we propose a reinforcement learning \(RL\) framework that learns a cost\-efficient autoscaling policy\. The policy uses a recurrent network to track multi\-timescale workload trends and pod lifecycle states, enabling decisions that account for delayed pod readiness and delayed SLO feedback\. It also restricts the action space with hard masks and anti\-oscillation cooldowns, enforcing feasible scaling actions while reducing wasteful GPU transitions\. We train the policy in a high\-fidelity PD\-disaggregated serving simulator calibrated from profiling data and validated against a physical testbed\. Simulator experiments on ShareGPT and Azure Conversational traces show that the learned policy satisfies the same latency constraints as grid\-searched heuristic baselines while reducing average GPU occupancy\. Real\-cluster deployment on ShareGPT further confirms sim\-to\-real transfer while satisfying the latency targets\.

## Embedded\-Arena: Building Hardware\-in\-the\-Loop Coding Agents to Run AI on Microcontrollers

**Authors:** Zhihan Zhang; Alexander Le Metzger; Jiuyang Lyu; Chun\-Cheng Chang; Jiayi Shao; Yujia Liu; Emmanuel A Mensah; Edward Wang; Kurtis Heimerl; Gregory D Abowd; Natasha Jaques; Shwetak Patel; Vikram Iyer

**ID:** 149789 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nJ0AEgMZGZ>) | [PDF](<https://openreview.net/pdf?id=nJ0AEgMZGZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149789>)

Embedded devices from wildlife monitoring stations to clinical wearables require local AI inference due to latency, communication, or privacy constraints\. Optimizing models for heterogeneous microcontrollers \(MCUs\) requires simultaneously satisfying hard physical constraints on memory, power, and temperature while preserving accuracy, a multidimensional optimization that is today performed manually by experts\. We ask whether an LLM agent can autonomously navigate this complex, multi\-turn pipeline guided by real hardware feedback, and introduce a hardware\-in\-the\-loop agent arena in which the agent iteratively refines both model and firmware\-\-\-compiling, flashing, and measuring on real hardware\-\-\-to enable iterative optimization\. Frontier models, including Claude Opus 4\.7 and Gemini 3\.1 Pro, fail entirely without hardware feedback \(0\\% deployment success\), whereas our closed\-loop formulation achieves the first successful deployment within three iterations and can surpass human expert results within seven\. This agentic co\-optimization achieves 250× compression for vision models with &lt;3\.3\\% accuracy loss and 400× for audio with &lt;6\\% Feature Error Rate loss, enabling battery\-free operation on a commercial MCU via solar harvesting\. We demonstrate practical impact in two real\-world systems: an elk\-detection camera trap \(96\.7\\% accuracy\) and a phonetic\-transcription wearable \(8\.44\\% FER\) for child development research\.

## GPU Hierarchy Meets Structured Matrices: Fast Algorithms for State\-Space Models

**Authors:** Berlin Chen; Caitlin Wang; Aakash Sunil Lahoti; Kevin Li; Jay Shah; Jack Carlisle; Timmy Liu; Mengyu Guo; Zico Kolter; Albert Gu; Tri Dao

**ID:** 149931 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m6QBIQ5qCZ>) | [PDF](<https://openreview.net/pdf?id=m6QBIQ5qCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149931>)

Linear\-time sequence models such as State Space Models \(SSMs\) offer an efficient alternative to self\-attention and have demonstrated strong language modeling performance at scale\. In practice, however, their asymptotic advantage is often lost at common training and prefill lengths\-\-\-optimized FlashAttention kernels remain faster than existing SSM implementations up to 8k tokens\. In this work, we substantially narrow this performance gap with novel algorithmic improvements: First, we introduce a split\-sequence algorithm that decouples the compute tile from the sequence\-parallel split length, preserving efficient matrix multiplication tiles while substantially reducing boundary\-state traffic and latency\. Second, we resolve a longstanding \*speed\-\-stability tradeoff\* in computing the 1\-semiseparable \(SS\) decay mask, the main non\-matmul bottleneck shared by all chunk\-wise linear\-time kernels \(Mamba\-2, Mamba\-3, GDN, KDA\)\. Existing kernels use the fast \*diff segsum\* \(prefix subtraction\), which suffers monotonicity violations and catastrophic cancellation\-\-\-failures observed in real pretraining \(e\.g\., Nemotron\-H\); the stable alternative \(\*direct segsum\*\) materializes the dense mask and is $\\sim30\\\\%$ slower\. Our \*hierarchy\-aware segsum\* decomposes the SS mask into 1\-SS diagonal blocks and rank\-one off\-diagonal blocks, computed via warp\-level scans and cross\-warp aggregation directly in registers, achieving the stability of direct segsum at the speed of diff segsum\. We implement these algorithms using CuTe\-DSL with warp specialization, asynchronous TMA, WGMMA, and layout\-aware accumulator fragments\. Across a large range of sequence length, our H100 kernels reach 91\\% of measured memcpy bandwidth, improve prefill time by $4\.1\\times$ over the official Triton Mamba\-2 kernel, and \*\*outperform the highly\-optimized FlashAttention\-4 starting at 1\-2k sequence length\*\*\-\-\-to our knowledge, the first time a linear\-time sequence layer is faster than state\-of\-the\-art attention at the 2\-4k sequence lengths used in common pretraining and prefill workloads, where prior linear\-time kernels only reached parity at $\\geq 8$k\. Our hierarchy\-aware segsum is $1\.35$\-$1\.40\\times$ faster than a naive stable direct\-segsum implementation\.

## Matrix Recovery Via Symmetric Rank\-one Measurements With Random Unit\-modulus Vectors

**Authors:** Tongyu Zhou; Wei Zhang

**ID:** 152261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNVpU6i2AS>) | [PDF](<https://openreview.net/pdf?id=UNVpU6i2AS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152261>)

Unit\-modulus measurement vectors, due to their phase\-only variations, exhibit favorable hardware compatibility and storage efficiency\. In this paper, we consider matrix recovery using symmetric unit\-modulus rank\-one measurements\. We identify a fundamental limitation of symmetric unit\-modulus measurements\-\-\-their inability to capture individual diagonal entries, and show that matrix recovery can be achieved using such measurements when the diagonal entries are known or directly measurable\. We construct a stacked operator and establish that it satisfies a mixed\-norm restricted isometry property \($\\mathrm\{mRIP\}$\) for unit\-modulus measurements\. Leveraging the $\\mathrm\{mRIP\}$ condition, we derive exact and stable recovery results for matrix recovery with unit\-modulus measurements in both noiseless and noisy settings\. Our work is the first to provide the theoretical foundation for matrix recovery under symmetric rank\-one unit\-modulus measurements\. Numerical experiments further corroborate these theoretical findings\.

## Hawkeye: Hardware\-Aware GPU Kernel Optimization with Minimal Supervision

**Authors:** Arya Tschand; Kesavan Ramakrishnan; Alexander Ingare; Simon Guo; Jeffrey Ma; Zishen Wan; Simran Arora; Azalia Mirhoseini; Vijay Janapa Reddi

**ID:** 155018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=99gxreT4sW>) | [PDF](<https://openreview.net/pdf?id=99gxreT4sW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155018>)

Achieving peak GPU kernel performance increasingly relies on architecture\-specific optimizations targeting new hardware features\. While AI coding agents show promise in generating performant kernels, they lack the necessary context to effectively implement and stack hardware\-specific optimizations, especially on newer GPU architectures\. We propose Hawkeye \(Hardware\-Aware Kernel Optimization\), an open\-source framework that grounds autonomous kernel generation in a minimal and comprehensive taxonomy with only one unit test per optimization strategy per target architecture\. Supporting a new accelerator therefore requires only 10 expert\-written unit tests per architecture \(one per recurring optimization strategy\) that generalize across downstream workloads, rather than hand writing a new kernel for each workload and precision\. Hawkeye effectively scales the test\-time compute of coding agents with this minimal expert supervision to enable kernel generation that consistently leverages hardware\-specific features, approaching and even surpassing expert\-written PyTorch or Triton in BF16 and emerging low precision \(FP8, NVFP4, MXFP4\) across Ampere, Hopper, Blackwell, and MI350 GPUs\. Hawkeye demonstrates that minimally supervised coding agents can exploit architecture\-specific hardware features and reduce the overhead of supporting emerging hardware accelerators\.

## SpikingGamma: Temporally Precise Online SNN Training Through Smoothed Temporal Delays

**Authors:** Roel Koopman; Sebastian Otte; Sander Bohte

**ID:** 150590 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h3Q9HOiJJg>) | [PDF](<https://openreview.net/pdf?id=h3Q9HOiJJg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150590>)

Neuromorphic hardware implementations of Spiking Neural Networks \(SNNs\) promise energy\-efficient, low\-latency AI through sparse, event\-driven computation\. Yet, training SNNs under fine temporal discretization remains  challenging, hindering low\-latency responsiveness and the mapping of software\-trained SNNs to efficient hardware\. In current approaches, spiking neurons are modeled as self\-recurrent units, embedded into recurrent networks to maintain state over time, and trained with BPTT or RTRL variants based on surrogate gradients\. These methods scale poorly with temporal resolution, while online approximations exhibit instability for long sequences and tend to fail at capturing temporal patterns\. To address these limitations, we develop SpikingGamma, an SNN architecture in which neurons maintain a compact bank of smoothed\-delay states and communicate through sigma\-delta spike\-coding\. We show that in feedforward networks, SpikingGamma supports direct online error backpropagation through the continuous reconstruction signal, avoiding surrogate gradients through the spike discontinuity\. This enables stable learning of temporal patterns with minimal spiking and scales feedforward SNNs to complex tasks and benchmarks with competitive accuracy, all while remaining robust to the temporal resolution of the model\. Our approach offers both an alternative to recurrent SNNs trained with surrogate gradients, and a novel route for mapping SNNs to neuromorphic hardware\.

## A Foundational Model System for Datacenter Machine Repairs

**Authors:** Yuanlin Wen; Elan S Markowitz; Zubo Gu; Sami Abu\-El\-Haija; Bryan Perozzi; Michael Galkin; Ali Parviz; Aayush Gupta; Venkata Chivukula; Griffin Hadfield; Aravind Akella; Daniel J Frame; Vahab Mirrokni; Amin Vahdat

**ID:** 149370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYkd4mcbDs>) | [PDF](<https://openreview.net/pdf?id=qYkd4mcbDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149370>)

The rapid scale\-up of AI infrastructure has made datacenter reliability a cornerstone of the cloud business economy\. Hardware failures in hyper\-scale AI clusters do not merely disrupt individual machines; they stall multi\-million dollar training workloads, and so the downtime of individual machines can cause outsized economic losses\. Minimizing machine downtime, therefore, is more important than ever\. To address this, we present DrWatson, an AI\-driven hardware diagnosis system that pioneers a foundation\-model approach to automated datacenter maintenance\. Deployed at production scale within a major AI hyperscaler, DrWatson yields substantial efficiency gains across diverse compute architectures\. Real\-world evaluations demonstrate that it reduces production downtime by 18\.3% on GPU platforms and 16\.1% on custom AI accelerators\. Furthermore, it significantly accelerates hardware deployment, cutting quality assurance \(QA\) time by 28\.3% for GPUs and 25\.1% for custom accelerators\. These results establish DrWatson as a field\-tested solution for maximizing the reliability and cost efficiency of next generation AI fleets\.

## Beyond Masked Sparsity: SNACK Enables Truly Sparse Neural Networks on GPU

**Authors:** Jafar Badour; Elena Mocanu; Maurice Keulen

**ID:** 150469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hoB9d0ONXQ>) | [PDF](<https://openreview.net/pdf?id=hoB9d0ONXQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150469>)

Deep neural networks continue to grow in parameter count, driving up training and inference cost on GPUs\. Sparse neural networks and Dynamic Sparse Training \(DST\) promise to reduce these costs, but most implementations rely on binary masks over dense tensors and recover little of the theoretical compute, memory, or energy savings\. We propose SNACK, a truly sparse GPU layer that stores and computes only non\-zero connections\. SNACK exposes a simple PyTorch API for restructuring connections and backpropagating gradients entirely in the sparse paradigm, and uses a custom COO\-format SpMM CUDA kernel with a batch\-to\-Streaming\-Multiprocessor mapping tuned for the small\-batch, high\-sparsity regime typical of large\-model training and single\-stream inference\. At the kernel level, SNACK is up to $7\\times$ faster than the masked dense baseline \(Dense\+Mask\) and competitive with cuSPARSE, Sputnik, and FlashSparse at 95\\% sparsity\. At 90\\% sparsity, a single SNACK layer accelerates training by $8\\times$ and $3\.7\\times$, and inference by $4\\times$ and $2\\times$, over Dense\+Mask and fully dense layers, respectively, while using 25\\% less memory than dense and substantially less energy\. End\-to\-end, SNACK reduces GPT\-2 peak training memory by up to 40\\% and graph\-style inference latency by $4\.8\\times$ over Dense\+Mask at 99\\% sparsity\.

## Rethinking Expressivity and Efficiency in Test\-Time Training

**Authors:** Zeyun Zhong; Joya Chen; Manuel Martin; Frederik Diederichs; Jürgen Gall; Jürgen Beyerer

**ID:** 149206 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s9Npo5C1Sz>) | [PDF](<https://openreview.net/pdf?id=s9Npo5C1Sz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149206>)

Test\-Time Training \(TTT\) enables long\-context processing via continuous weight updates during inference, but current methods struggle to balance the expressivity of per\-token update dynamics with the hardware efficiency of chunk\-wise approximations\. We propose E$^2$\-TTT \(Expressive and Efficient TTT\) to bridge this gap\. By deriving a closed\-form state transition that exactly aggregates per\-token momentum and decay coefficients within a chunk, E$^2$\-TTT enables fully parallelized chunk\-level training while preserving the temporal structure of the update rule that prior chunk\-wise methods discard\. We validate E$^2$\-TTT by training models up to 1\.3B parameters from scratch\. Extensive experiments demonstrate that our method consistently outperforms previous TTT and hybrid attention baselines in language modeling and retrieval, while achieving significantly better extrapolation on the standard \`\`Needle in a Haystack'' test, maintaining $&gt;90$ % accuracy on passkey retrieval at $8\\times$ the training context length\. Meanwhile, E$^2$\-TTT can match the training throughput of efficient chunk\-wise methods, demonstrating that it effectively reconciles expressivity with efficiency\.

## Speeding up Log\-Sum\-Exp: Kernel Fusion at the Memory Wall, Integer Arithmetic at the Compute Wall

**Authors:** Lingyun Yao; Martin Andraud; Niki Loppi; Andrea Pilzer; Anji Liu; Guy Van den Broeck; Martin Trapp

**ID:** 151791 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xz4CvAU4eg>) | [PDF](<https://openreview.net/pdf?id=Xz4CvAU4eg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151791>)

While the Log\-Sum\-Exp \(LSE\) function is a foundational numerical primitive for stable log\-domain computation in modern machine learning, its fast and efficient computation on generic platforms \(\\ie, CPUs and GPUs\) has been underexplored, potentially creating execution bottlenecks for large workloads\. On GPU, the de facto implementation torch\.logsumexp dispatches a chain of nine sub\-kernels per call, incurring redundant High Bandwidth Memory \(HBM\) traffic and launch overhead\. On CPU, exp and log operations are hardware\-hungry, limiting the computing efficiency\. To address these bottlenecks, we propose two drop\-in kernels to significantly accelerate LSE computation on both GPUs and CPUs: FuseLSE, a single\-pass fused kernel that evaluates LSE's exp and log functions on the GPU's Special Function Unit \(SFU\); and IntLSE, which further replaces the LSE computation with approximated integer arithmetic for CPU computation\. Our experiments, validated by benchmarks across workload sizes and hardware platforms, show that both kernels are $\{\\sim\}10\-11\\times$ faster than PyTorch at small workloads and $\{\\sim\}6\\times$ faster on larger ones on GPUs, where the speed\-up is attributed to reduced launch overhead and HBM traffic\. On CPU, where no SFU is available, LSE computation dominates the cost, allowing IntLSE to gain $\{\\sim\}3\-6\\times$ execution speed over FuseLSE\.

## GPU\-Accelerated Synthesis of Mixed\-Boolean Arithmetic: Beyond Caching

**Authors:** Gabriel Bathie; Nathanaël Fijalkow

**ID:** 156132 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0AO2QypVgj>) | [PDF](<https://openreview.net/pdf?id=0AO2QypVgj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156132>)

Synthesizing Mixed\-Boolean Arithmetic \(MBA\) expressions from input\-output examples is central to program deobfuscation and also useful for compiler optimization, reverse engineering, and cryptanalysis\. Existing MBA synthesizers are typically CPU\-based and scale poorly on large specifications or complex targets\. Recent GPU\-accelerated synthesis methods achieve large speedups in qualitative settings, but they depend on caching observationally equivalent candidates; this strategy breaks down for MBA because candidate outputs are quantitative bitvectors and the behavioral space is enormous\. We present SIMBA \(Synthesis of Mixed\-Boolean Arithmetic\), a GPU\-accelerated MBA synthesizer built around cache\-free bottom\-up enumeration\. SIMBA avoids language caches entirely and uses a GPU\-oriented enumeration design that keeps work local and highly parallel\. In experiments, SIMBA is substantially faster than prior MBA synthesis tools, handles larger specifications, and reaches expression sizes that existing methods fail to solve\. These results establish cache\-free GPU synthesis as a practical and scalable approach for quantitative domains, and identify it as a strong alternative to cache\-centric designs\.

## AgentKernelArena: Benchmarking Performance and Generalization of AI Coding Agents on GPU Kernels Optimization

**Authors:** Sharareh Younesian; Wenwen Ouyang; sina rafati; Mehdi Rezagholizadeh; Sharon Zhou; Ji Liu; Yue Liu; Yuchen Yang; Hao Li; Ziqiong Liu; Dong Li; Vikram Appia; Zhenyu Gu; Emad Barsoum

**ID:** 139376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Twe3Jz6Q0V>) | [PDF](<https://openreview.net/pdf?id=Twe3Jz6Q0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139376>)

GPU kernel optimization is increasingly critical for efficient deep learning systems, but writing high\-performance kernels still requires substantial low\-level expertise\. Recent AI coding agents can iteratively read code, invoke compilers and profilers, and refine implementations, yet existing kernel benchmarks evaluate single LLM calls rather than full agent workflows, and none include both kernel\-to\-kernel optimization and unseen\-configuration generalization testing\. We present AgentKernelArena, an open\-source benchmark for measuring AI coding agents on GPU kernel optimization\. The benchmark contains 196 tasks spanning HIP\-to\-HIP optimization, Triton\-to\-Triton optimization, and PyTorch\-to\-HIP translation, and evaluates complete agent workflows in isolated workspaces using gated compilation, correctness, and performance checks, centralized scoring and an unseen\-configuration generalization protocol that tests whether optimizations transfer to input configurations the agent never observed\. Across production agents including Cursor Agent, Claude Code, and Codex Agent, we find near\-perfect compilation and high correctness rates on most task categories, with the strongest configurations achieving mean speedups of up to 6\.89$\\times$ on PyTorch\-to\-HIP, 6\.69$\\times$ on HIP\-to\-HIP, and 2\.13$\\times$ on Triton\-to\-Triton tasks\. Our unseen\-configuration evaluation shows that HIP\-to\-HIP and Triton\-to\-Triton optimizations largely transfer to unseen input shapes, while PyTorch\-to\-HIP exhibits substantial correctness drops, indicating that agents generating kernels from scratch frequently hardcode shape\-specific assumptions\. AgentKernelArena is designed as a modular, extensible framework for rigorous evaluation of agentic GPU kernel optimization across agents, tasks, and hardware targets\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/AgentKernelArena\_Neurips2026\-F646\}\.

## RubiConv \- Efficient Boundary\-Respecting Convolutions

**Authors:** Linda Friso; Annie Marsden; Xinyi Chen; Arushi Gupta; Peter Bartlett; Mark Braverman; Elad Hazan

**ID:** 150280 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jKgfNj6zXV>) | [PDF](<https://openreview.net/pdf?id=jKgfNj6zXV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150280>)

Convolutional architectures have emerged as powerful alternatives to Transformers for sequence modeling\. The primary advantage is that they offer improved theoretical sequence length complexity by leveraging the Fast Fourier Transform \(FFT\)\. However, this theoretical improvement does not always meaningfully land in practice\. One critical obstacle is that applying standard FFTs is not amenable to the large\-scale training pipeline wherein data is packed from different sources into a single sequence for hardware efficiency\. Indeed, standard FFT algorithms are not easily amenable to document packing\. Existing workarounds suffer from severe inefficiencies, crippling the practical performance of convolutional architectures\. We close this gap with RubiConv, a novel algorithm for performing hardware\-efficient, boundary\-respecting convolutions on packed sequences\. Extensive experiments show that RubiConv achieves significant speedups over both attention and standard FFT\-based baselines\. This work makes the theoretical efficiency of long convolutional models a practical reality for large\-scale, real\-world data packing\.

## Prefill\-Guided Trace Allocation for Sample\-Efficient Test\-Time Scaling

**Authors:** Zhi Yao; Zhiqing Tang; Hanshuai Cui; Qianli Ma; Fanshuai Meng; Weijia Jia

**ID:** 154693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BhyoBRJYPG>) | [PDF](<https://openreview.net/pdf?id=BhyoBRJYPG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154693>)

Self\-consistency is a widely adopted test\-time scaling method that improves LLM reasoning by majority\-voting over multiple sampled traces\. However, fixed\-budget self\-consistency applies the same trace count to every problem, even when the first greedy attempt already produces the correct answer, wasting substantial compute on resource\-constrained hardware\. Existing adaptive methods rely on post\-decode agreement signals that become reliable only after complete traces have been generated, yet a prefill\-stage oracle reveals that a large fraction of this cost can be eliminated before spending the full self\-consistency budget\. We introduce the Hidden\-State Adaptive Trace Scheduler \(HATS\), which predicts greedy\-trace reliability from prefill hidden states before allocating additional sampled traces\. HATS validates one greedy probe before routing easy problems to a single trace, borderline problems to a small vote, and hard problems to the full budget\. A compute\-optimal allocation analysis shows that extra samples should go where marginal accuracy gain is highest, explaining why non\-uniform spending outperforms fixed budgets\. On MATH\-500 with DeepSeek\-R1\-Distill\-Qwen\-7B under single\-GPU serving, HATS matches the four\-sample self\-consistency accuracy \($80\.6\\%$\) while reducing samples by $48\\%$ and decode tokens by $40\\%$, a result confirmed under strict out\-of\-fold evaluation\. These results support prefill\-guided scheduling as a practical token\- and sample\-saving mechanism for test\-time scaling\.

## CipherFlow: Hardware\-Aware Compiler Framework for Low\-Latency Hybrid Secure Inference

**Authors:** Hedong Zhang; Mengxin Zheng; Qian Lou

**ID:** 155825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2b0g4FkPGD>) | [PDF](<https://openreview.net/pdf?id=2b0g4FkPGD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155825>)

Secure inference enables clients to use cloud neural networks without revealing private inputs or intermediate values\. Homomorphic encryption \(HE\) and secure multi\-party computation \(MPC\) provide complementary cryptographic mechanisms for this goal, and recent hybrid HE\-MPC secure inference systems have shown better performance than using either primitive alone\. However, existing hybrid secure inference systems typically rely on fixed execution strategies that are brittle across deployments\. The best hybrid plan depends on both the target execution environment and the evolving cryptographic state of the computation, making manual or static mappings insufficient\. We present \\textsc\{CipherFlow\}, a hardware\-aware compiler for hybrid HE\-MPC secure inference\. Given a plaintext neural\-network graph and a target deployment profile, \\textsc\{CipherFlow\} automatically generates a deployment\-specialized, latency\-optimized secure execution program\. It profiles deployment\-specific primitive costs and performs state\-aware graph optimization to jointly decide operator placement, cross\-domain conversion, and cryptographic maintenance actions\. We implement \\textsc\{CipherFlow\} on real HE and MPC backends and evaluate end\-to\-end BERT\-base and ViT inference across diverse CPU/GPU and network settings\. \\textsc\{CipherFlow\} achieves up to 16\.5$\\times$ speedup on BERT\-base and over 22$\\times$ on ViT over state\-of\-the\-art static hybrid baselines\. These results show that compiler support can make hybrid cryptographic inference portable across heterogeneous deployments, turning manual secure\-inference engineering into an automatic deployment\-specific optimization process\.

## Cross\-Dialect Generalization Without Retraining: Benchmarks and Evaluation of Schema\-Derived Constrained Decoding for MLIR

**Authors:** Plawan Kumar Rath

**ID:** 138884 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yrIzLZp02Q>) | [PDF](<https://openreview.net/pdf?id=yrIzLZp02Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138884>)

Multi\-Level Intermediate Representation \(MLIR\) underlies modern ML compiler infrastructure, including TensorFlow, JAX via StableHLO, PyTorch's Inductor backend, and IREE\. Yet it appears only in trace amounts in code\-LM pretraining corpora\. MLIR is also extensible by design: new dialects ship per application domain, so maintaining a fine\-tuned model per dialect does not scale\. We ask whether inference\-time priors derived mechanically from each dialect's Operation Definition Specification \(ODS\) can substitute for gradient\-based adaptation\. We make two contributions\. First, we release four natural\-language\-to\-MLIR benchmarks across three dialects \(MLIR\-Spec\-150, Linalg\-Spec\-30, StableHLO\-Spec\-30, and StableHLO\-Held\-Out\-200\), totaling 410 in\-scope NL→MLIR pairs, plus a 25\-program StableHLO\-OutOfGrammar stress set \(435 benchmark instances\)\. Thirty of the Spec prompts, ten per dialect, also carry hand\-authored input and expected\-output references for functional testing \(MLIR\-Functional\-Reference\-30\)\. All artifacts ship under Apache\-2\.0 with Gebru datasheets and Croissant 1\.1 metadata\. Second, on top of these benchmarks we build a three\-layer schema\-derived constraint stack: a context\-free grammar over op signatures \(C1\), type\-domain splits from an ODS\-extracted type lattice \(C2\), and an SSA\-scope validator driving five\-retry rejection sampling \(C3\)\. Porting the stack from arith\+func\+memref\+linalg to StableHLO required no new constraint\-layer code\. Empirically, on dialects whose verifier semantics are dominated by structural constraints, SmolLM2\-1\.7B with token\-level schema\-derived constraints matches or exceeds 15B–34B code LMs that run the strongest constraint enforcement their serving stack admits \(post\-hoc rejection\), at a matched retry budget and 8–25× the per\-generation speed: on linalg it reaches 80\.0% verify\-valid \(three runs, each 80\.0%, n=125\), 21 to 44 pp above CodeLlama\-34B, Granite\-Code\-34B, and StarCoder2\-15B with non\-overlapping CIs, and the lead survives a same\-family fp16 precision control\. The comparison is between systems, not models: under the baselines' post\-hoc protocol, SmolLM2 itself falls from 52\.0% to 24\.5% on arith\+func, a \+27\.5 pp masking contribution\. On arith\+func and on the templated parametric StableHLO\-Held\-Out\-200, where verifier semantics turn on attribute values rather than structure, the same baselines match or beat the SLM; we scope these explicitly as non\-win cells\. We release benchmarks, decoder, every per\-prompt generation, and a pinned reproducibility Dockerfile\.

## Evolving Agent Teams

**Authors:** Shiyi Cao; Ziming Mao; Dacheng Li; Joseph Gonzalez; Ion Stoica

**ID:** 153181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NCRt7BmX5a>) | [PDF](<https://openreview.net/pdf?id=NCRt7BmX5a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153181>)

The rapid progress of software engineering agents drives interest in applying them to open\-ended problems such as GPU kernel optimization\. However, we find that existing coding agents converge to local optima on real\-world, expert\-written kernels \(e\.g\., FlashInfer\)\. We introduce Evolving Agent Teams, a multi\-agent framework that escapes such local optima\. It features \(1\) a central supervisor that diagnoses each local optima and restructures the roles of a team of agents; and \(2\) a persistent file system that comprises a strategy tree, an evolution log, and per\-team artifacts, grounding each restructuring in accumulated experience\. Under a matched token budget, Evolving Agent Teams consistently outperforms strong coding\-agent baselines\. With an extended token budget, Evolving Agent Teams generates a CUDA kernel that reaches $1\.2\\times$ mean speedup over the production FlashInfer MLA paged decode kernel and wins on 36 of 47 production workloads from FlashInfer\-Bench \($0\.86$\-\-$0\.99\\times$ on the remaining 11\)\.

## Reaching a Consensus in Predictive Loops

**Authors:** Jiduan Wu; Rediet Abebe; Celestine Mendler\-Dünner

**ID:** 152702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R1yfdxLNwr>) | [PDF](<https://openreview.net/pdf?id=R1yfdxLNwr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152702>)

Predictions on digital platforms must adapt over time, as individuals continuously update their beliefs through social interactions\. At the same time, changing predictions can in turn influence the content people are exposed to and hence the very beliefs they seek to predict, rather than merely serving as passive observations\. These emerging dynamics make it challenging to understand the long term effects of predictive systems on society\. In this work, we blend models from network science with concepts from performative prediction to initiate the study of opinion dynamics in predictive loops\. In our model, opinions and predictions co\-evolve: a platform's predictions influence individual opinions, which then evolve through peer interactions and form the training data for future platform model updates\. We demonstrate that this co\-evolution induces a novel equilibrium that qualitatively differs from standard network equilibria\. In particular, we show how standard predictive objectives can drive networks toward consensus even under conditions where classical opinion\-dynamics models lead to disagreement\. This emerges because predictive systems dynamically adapt to changing opinions, and learning objectives create spillover effects among individuals beyond the topology of the network\. We further analyze systematic deviations from standard prediction and demonstrate amplified effects of targeted platform interventions on equilibrium outcomes, compared to classical network intervention analyses\.  We complement our results with simulations on real social network data and parametric learning settings\. Together, our results illustrate performativity as an important, yet so far neglected, qualifying factor in social networks\.

## FlashFFN: Multi\-Head Decomposition Enables I/O\-Aware Feed\-Forward Network

**Authors:** Minshen Zhang; Xiang Hu; Jianguo Li; Wei Wu; Kewei Tu

**ID:** 151360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8w3ugs7jR>) | [PDF](<https://openreview.net/pdf?id=b8w3ugs7jR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151360>)

The Feed\-Forward Network \(FFN\) dominates the activation memory of modern Transformers because the intermediate tensor of width d\_ff is materialized in HBM between the two matmul stages\. FlashAttention\-style I/O\-aware tiling avoids the analogous cost in attention, yet has not been brought to FFN\. We identify the reason as a hardware\-geometry constraint: under one\-pass tiled accumulation a fused FFN kernel must keep an output accumulator of width d\_model in on\-chip SRAM, which is infeasible whenever d\_model &gt;= 2048 on currently shipping datacenter GPUs\. We formalize this as an SRAM\-feasibility proposition and prove a corollary: multi\-head decomposition is the simplest architectural transform that brings FFN inside this SRAM\-feasible regime, because it makes the per\-head accumulator width d\_h = d\_model/H a free parameter that can be driven below the GPU's SRAM cutoff\. Naive multi\-head FFN, however, blows up the per\-head expansion ratio d\_ff/d\_h as d\_model grows, drifting away from the well\-validated SwiGLU 8/3 optimum and degrading quality at scale; we resolve this with a dense MoE\-like sub\-network correction that restores the optimal ratio while preserving SRAM\-feasibility\. The resulting architecture, FlashFFN, is an SRAM\-feasible FFN block that replaces SwiGLU under matched parameter and FLOPs budgets and derives directly from the SRAM constraint\. Across 128M\-\-1\.3B parameter models trained on 60\-\-100B tokens of The Pile, FlashFFN achieves a Pareto improvement over SwiGLU at fixed compute: up to \~4x lower peak activation memory at long sequences, inference latency that matches or improves over SwiGLU \(up to \~1\.32x faster on H100\), and consistent quality gains \(up to \-0\.84 in evaluation perplexity and \+1\.60 average accuracy across six downstream benchmarks at 1\.3B\)

## CUDABeaver: Benchmarking LLM\-Based Automated CUDA Debugging

**Authors:** Shiyang Li; Haoyang Chen; Mattia Fazzini; Caiwen Ding

**ID:** 139244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZEC5u5oMz>) | [PDF](<https://openreview.net/pdf?id=cZEC5u5oMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139244>)

Debugging CUDA programs has long been challenging because failures often arise from subtle interactions among hardware behavior, compiler decisions, memory hierarchy, and asynchronous execution\. More importantly, with the rapid expansion of GPU usage across scientific computing, machine learning, graphics, and systems workloads, CUDA debugging has become more challenging than ever\. Current evaluations of LLM\-based CUDA programming largely miss this setting: a model can pass correctness tests with repair by degeneration, simplifying the CUDA code into a safer but slower program that abandons the original optimization structure\. We introduce CUDABEAVER, a benchmark for CUDA debugging from real failing workspaces produced during LLM\-based CUDA generation\. Each task provides the broken candidate, native build/test commands, raw error evidence, and a single editable file\. CUDABEAVER evaluates whether a fixer truly repairs the failing CUDA code or merely finds a slower test\-passing replacement, reporting results by failure category, debugging trajectory, stagnation mode, and performance preservation\. We further propose pass@k\(M,C,A\), a protocol\-conditional CUDA debugging metric by making the fixer M, corpus C, and protocol axes Aexplicit\. Using this metric across 213 tasks and seven frontier LLMs, we show that protocol\-aware evaluation gives a more faithful view of CUDA debugging ability: when performance\-loss tolerance is high, fixers appear much stronger, but even a minor stricter performance requirement can sharply reduce measured success, shifting scores by up to 40 percentage points\.

## Approximation Algorithms for GPU Pricing under Finite Capacity

**Authors:** Yaolong Yu; Hanrui Zhang; Zeyu Zheng; Kirthevasan Kandasamy

**ID:** 152873 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PjMPnWAPNr>) | [PDF](<https://openreview.net/pdf?id=PjMPnWAPNr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152873>)

We study revenue\-optimal posted\-price design for GPU markets under a finite capacity $B$\. We focus on two settings: \\emph\{sales\}, where each purchase permanently consumes a vendor's GPU inventory, and \\emph\{rentals\}, where each job occupies GPUs for a finite duration and then releases them\. In both settings, the vendor must commit to an anonymous price menu before observing customers' valuation, GPU demand, and job duration\. First, in the sales setting, we show that computing the optimal anonymous static menu is NP\-hard, and that the common practice of linear pricing \(per\-GPU price\) can be highly suboptimal\. We develop three methods with varying approximation guarantees, all of which outperform linear pricing\. Our main method is a convex program \(CP\) obtained via an ex\-ante relaxation of the problem, which obtains a $\\tfrac\{1\-\\epsilon\}\{2\}$  approximation to the optimum when the maximum GPU demand $\\overline\{N\}$ satisfies $\\overline\{N\}\\leq \\epsilon B$\. Building on these results, we analyze the \\emph\{rental\} model\.  We again show that linear pricing \(per\-GPU\-hour price\) is highly suboptimal, and design duration\-aware posted\-price policies based on slot\-coupled ex\-ante CP\.  Our \\emph\{Throttled CP\-Menu Posted Pricing\} \(TCMPP\) policy posts the CP\-induced menu randomly and achieves a $\\frac\{1\-\\epsilon\}\{4\}$ approximation\. We further introduce a slackened version of the same convex program, which reserves capacity in each time slot and achieves stronger guarantees in the small job regime\. We corroborate our theoretical results with simulations\.

## Flash\-KMeans: Fast and Memory\-Efficient Exact K\-Means

**Authors:** Shuo Yang; Haocheng Xi; Yilong Zhao; Muyang Li; Xiaoze Fan; Jintao Zhang; Han Cai; Yujun Lin; Xiuyu Li; Kurt Keutzer; Song Han; Chenfeng Xu; Ion Stoica

**ID:** 151963 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WVswOFOoe5>) | [PDF](<https://openreview.net/pdf?id=WVswOFOoe5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151963>)

k\-means has historically been positioned primarily as an offline processing primitive, typically used for dataset organization or embedding preprocessing rather than as a first\-class component in online systems\. In this work, we revisit this classical algorithm under the lens of modern AI system design and enable k\-means as an online primitive\. We point out that existing GPU implementations of k\-means remain fundamentally bottlenecked by low\-level system constraints rather than theoretical algorithmic complexity\. Specifically, the assignment stage suffers from a severe IO bottleneck due to the massive explicit materialization of the N × K distance matrix in High Bandwidth Memory \(HBM\)\. Simultaneously, the centroid update stage is heavily penalized by hardware\-level atomic write contention caused by irregular, scatter\-style token aggregations\. To bridge this performance gap, we propose Flash\-KMeans, an IO\-aware and contention\-free k\-means implementation for modern GPU workloads\. Flash\-KMeans introduces two core kernel\-level innovations: \(1\) FlashAssign, which fuses distance computation with an online argmin to completely bypass intermediate memory materialization; \(2\) Sort\-Inverse Update, which explicitly constructs an inverse mapping to transform high\-contention atomic scatters into high\-bandwidth, segment\-level localized reductions\. Furthermore, we integrate algorithm\-system co\-designs, including chunked stream overlap and cache\-aware compile heuristic, to ensure practical deployability\. Extensive evaluations on NVIDIA H200 GPUs demonstrate that Flash\-KMeans achieves up to 17\.9× end\-to\-end speedup over best baselines\. At the kernel level, FlashAssign and Sort\-Inverse Update deliver up to 21\.2× and 6\.3× speedups\. By systematically restructuring execution around underlying hardware constraints, Flash\-KMeans delivers mathematically exact, scalable, and highly deployable acceleration across diverse AI workloads\.

## SOL\-ExecBench: Speed\-of\-Light Benchmarking for Real\-World GPU Kernels Against Hardware Limits

**Authors:** Edward C Lin; Sahil Modi; Siva Kumar Sastry Hari; Qijing Huang; Zhifan Ye; Nestor Y\. Qin; Fengzhe Zhou; Yuan Zhang; Jingquan Wang; Sana Damani; Dheeraj Peri; Ouye Xie; Aditya Kane; Michael behar; Rishabh Mehta; Vartika Singh; Vikram Sharma Mailthody; Terry Chen; Zihao Ye; Hanfeng Chen; Tianqi Chen; Vinod Grover; Wei Chen; Wei Liu; Eric Chung; Luis Ceze; Roger Bringmann; Michael Lightstone; Christos Kozyrakis; Humphrey Shi

**ID:** 139395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TE8B0CjNsw>) | [PDF](<https://openreview.net/pdf?id=TE8B0CjNsw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139395>)

As agentic AI systems become increasingly capable of generating and optimizing GPU kernels, progress is constrained by benchmarks that reward speedup over software baselines rather than proximity to hardware\-efficient execution\. We present SOL\-ExecBench, a benchmark of 235 CUDA kernel optimization problems extracted from 124 production and emerging AI models spanning language, diffusion, vision, audio, video, and hybrid architectures, targeting NVIDIA Blackwell GPUs\. The benchmark covers forward and backward workloads across BF16, FP8, and NVFP4, including kernels whose best performance is expected to rely on Blackwell\-specific capabilities\. Unlike prior benchmarks that evaluate kernels primarily relative to software implementations, SOL\-ExecBench measures performance against analytically derived Speed\-of\-Light \(SOL\) bounds computed by SOLAR, our pipeline for deriving hardware\-grounded SOL bounds, yielding a fixed target for hardware\-efficient optimization\. We report a SOL Score that quantifies how much of the gap between a release\-defined scoring baseline and the hardware SOL bound a candidate kernel closes\. To support robust evaluation of agentic optimizers, we additionally provide a sandboxed harness with input correctness checks, isolated compilation and execution, CUPTI\-based GPU activity timing, and defenses against common reward\-hacking strategies\. A third\-party post\-release evaluation by Cursor reported a $1\.38\\times$ geometric\-mean speedup over a single\-agent optimized PyTorch baseline and an overall SOL Score of 0\.56 across the full benchmark\. SOL\-ExecBench reframes GPU kernel benchmarking from beating a mutable software baseline to closing the remaining gap to hardware Speed\-of\-Light\.

## CODA: Rewriting Transformer Blocks as GEMM\-Epilogue Programs

**Authors:** Han Guo; Jack Zhang; Arjun Menon; Driss Guessous; Vijay Thakkar; Yoon Kim; Tri Dao

**ID:** 153802 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IbVBLfiHWM>) | [PDF](<https://openreview.net/pdf?id=IbVBLfiHWM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153802>)

Transformer training systems are built around dense linear algebra, yet a nontrivial fraction of end\-to\-end time is spent in the memory\-bound operators that surround it\. Normalization, activations, residual updates, reductions, and related computations repeatedly move large intermediate tensors through global memory while performing little arithmetic, making data movement an increasingly important bottleneck in otherwise highly optimized training stacks\. We introduce CODA, a GPU kernel abstraction that expresses these computations as GEMM\-plus\-epilogue programs\. CODA is based on the observation that many Transformer operators exposed as separate framework kernels can be algebraically reparameterized so that their work executes while a GEMM output tile remains on chip, before it is written to memory\. The abstraction fixes the GEMM mainloop and exposes a small set of composable epilogue primitives for scaling, reductions, pairwise transformations, and accumulation\. This constrained interface preserves the performance structure of expert\-written GEMMs while remaining expressive enough to cover nearly all non\-attention computation in the forward and backward pass of a standard Transformer block\. Across representative Transformer workloads, both human\- and LLM\-authored CODA kernels achieve high performance, suggesting that GEMM\-plus\-epilogue programming offers a practical path toward combining framework\-level productivity with hardware\-level efficiency\.

## GEAR: A GPU\-Accelerated Global Solver for Nonlinear Programs via Linear Bound Propagation

**Authors:** Duo Zhou; Hesun Chen; Xiangru Zhong; Grani A\. Hanasusanto; Huan Zhang

**ID:** 155708 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3WdBmyLLLC>) | [PDF](<https://openreview.net/pdf?id=3WdBmyLLLC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155708>)

We present a novel GPU\-accelerated global solver for constrained nonlinear programming \(NLP\) inspired by the efficient linear bound propagation framework in neural network \(NN\) verification\.     Existing work on NN verification, a problem that can be cast as feasibility detection for a nonlinear objective, demonstrated orders\-of\-magnitude speedups with the linear bound propagation\-based framework when compared to traditional solvers\.      Extending this paradigm to global nonlinear programming requires addressing many challenges: a global constrained NLP solver must effectively exploit all, possibly unstructured, nonlinear constraints to improve the objective, whereas NN verification typically handles simple input box constraints over a well\-structured NN and does not directly optimize an objective function\.  We address these challenges by fully exploiting the linear bounds produced by bound propagation: these linear bounds can be viewed as relaxations of nonlinear constraints and used to provide dual objectives, check infeasibility, and guide the search for a primal solution\.     In addition, we proposed tighter linear relaxations \(essential for linear bound propagation\) for bilinear functions commonly used in NLP problems, and a projected augmented Lagrangian method tightly coupled to our dual solving procedure to produce primal solutions\. Our method solves 399 of 505 bounded and continuous NLP problems in the GAMS and MINLPLib benchmarks under a 180\-second limit, outperforming many strong global solvers \(including commercial ones\) such as SCIP, BARON, and LindoGlobal\. Compared to SCIP \(the strongest solver on these problems\), we solve 104 problems exclusively, including large\-scale, highly nonlinear ones that are often out of reach for traditional approaches\.      Our method demonstrates a distinct, highly complementary regime for GPU\-accelerated global optimization of nonlinear programming problems\.

## Flash\-SD\-KDE: Accelerating SD\-KDE with Tensor Cores

**Authors:** Elliot Epstein; Rajat Vadiraj Dwaraknath; John Winnicki

**ID:** 151863 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XKQaXj5Qol>) | [PDF](<https://openreview.net/pdf?id=XKQaXj5Qol>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151863>)

Score\-debiased kernel density estimation \(SD\-KDE\) achieves improved asymptotic convergence rates over classical KDE, but its use of an empirical score has made it significantly slower in practice\.  We show that by re\-ordering the SD\-KDE computation to expose matrix\-multiplication structure, Tensor Cores can be used to accelerate the GPU implementation\. On a 32k\-sample 16\-dimensional problem, our approach runs up to $47\\times$ faster than a strong SD\-KDE GPU baseline and $3\{,\}300\\times$ faster than scikit\-learn's KDE\.  On a larger 1m\-sample 16\-dimensional task evaluated on 131k queries, Flash\-SD\-KDE completes in $2\.3$ s on a single GPU, making score\-debiased density estimation practical at previously infeasible scales\.

