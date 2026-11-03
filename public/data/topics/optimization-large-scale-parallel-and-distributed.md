# Optimization / Large Scale, Parallel and Distributed

优化 / 大规模、并行与分布式优化

28 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## EIPO: Efficient Inter\-Step Parallel Optimization

**Authors:** Jianrong Lu; Zhuoya Gu; Zhiyu Zhu; Hui LIU; Junhui Hou

**ID:** 150112 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kbZJJPpafP>) | [PDF](<https://openreview.net/pdf?id=kbZJJPpafP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150112>)

The wall\-clock cost of training large neural networks is dominated by the long horizon of sequential optimizer iterations\. We recast the gradient\-descent \(GD\) trajectory of modern optimizer \(e\.g\., SGD and Adam\) as the unique root of a nonlinear operator, enabling a parallel root\-finding approach that updates multiple GD steps simultaneously\. We then propose \\textbf\{E\}fficient \\textbf\{I\}nter\-step \\textbf\{P\}arallel \\textbf\{O\}ptimization \(\\textbf\{EIPO\}\) for accelerating a wide range of optimizers\. EIPO contributes three pieces: \(i\) a Preconditioned Nonlinear\-Equations \(PNE\) formulation that recovers the exact sequential GD trajectory; \(ii\) Memory\-Efficient Adaptive Anderson Acceleration, which extracts the multisecant geometry directly from the optimizer's intrinsic momentum buffers and therefore avoids the memory overhead of classical Anderson Acceleration\. \(iii\) We prove that EIPO converges to the optimizer's GD trajectory within fewer iterations than its sequential counterpart\. \(iv\) Across language modeling on WikiText\-2 \(GPT\-2, Llama\-3\.2\-1B, Qwen\-1\.5\-4B/2\.5\-3B, Gemma\-2B, GPT\-J\-\\textbf\{6B\}\), image classification on CIFAR\-10 \(ResNet50, ViT, CNN\), and diffusion training on LSUN Church \(UNet/DDPM/DDIM\), EIPO reduces optimizer iterations by up to $\\textbf\{21\}\\times$ and wall\-clock time by up to $\\textbf\{4\.6\}\\times$ while matching baseline perplexity, accuracy, and FID, all under comparable GPU memory and token consumption\. Source code is available at: \\url\{https://anonymous\.4open\.science/r/EIPO\-44BC\}\.

## In STeP: Speculative Tensor Parallelism for Concurrent Heterogeneous Inference of LLMs

**Authors:** Viren Luke Radhakrishnan; Dhruva Kashyap; Pranav K Nayak; Chiranjib Bhattacharyya; Prakash Raghavendra

**ID:** 155402 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5ujmDrit5K>) | [PDF](<https://openreview.net/pdf?id=5ujmDrit5K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155402>)

Running dense, open\-weight large language models on commercially accessible workstations or single\-GPU cloud setups is increasingly desirable due to cost and privacy constraints, particularly on tasks like coding and reasoning\. Starting at around 24B parameters, however, they exceed the available GPU VRAM on these setups, forcing reliance on offloading methods that limit throughput, while leaving substantial CPU compute underutilized\. Heterogeneous CPU–GPU speculative decoding is the dominant lossless\-acceleration framework in this regime, but existing methods are limited by what we refer to as the \*\*heterogeneity gap\*\*: their CPU and GPU do not co\-execute, their draft is a separate set of weights rather than a subnetwork of the verifier, and their VRAM footprint cannot scale to fill the available budget\. We observe that channel\-saliency methods induce an ordering on the transformer’s FFN channels so that the top\-$k$ prefix closely approximates the full output, with graceful degradation as $k$ decreases\. Building on this observation, we introduce \*\*Speculative Tensor Parallelism \(STeP\)\*\*, a training\-free, self\-speculative method that extracts a subnetwork of the verifier as a GPU\-resident draft, places the remainder on the CPU, and verifies via concurrent CPU and GPU computation, provably preserving the verifier’s sampling distribution\. Across dense models from 24B to 123B, GPU memory budgets from 32 to 192 GB, and five benchmarks, STeP outperforms SpecExec and SubSpec by up to $1\.4 \\times$ and $1\.8 \\times$ respectively, surpasses either tensor parallelism or speculative decoding alone, maximally utilizes the available VRAM, and closes the heterogeneity gap\.

## HetCCL: Efficient LLM Training on Heterogeneous Vendor GPUs

**Authors:** Heehoon Kim; Chris Jaehwan Lee; Taejeoung Kim; Jongwon Park; Jinpyo Kim; Pyongwon Suh; Ryan H Choi; Sangwoo Lee; Jaejin Lee

**ID:** 151408 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=atJocPineV>) | [PDF](<https://openreview.net/pdf?id=atJocPineV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151408>)

The rapid growth of large language models is driving organizations to expand their GPU clusters, often with GPUs from multiple vendors\. However, current deep learning frameworks lack support for communication across heterogeneous vendor GPUs, leading to inefficiency and higher costs\. We present HetCCL, a collective communication library that unifies vendor\-specific backends and enables RDMA\-based communication across GPUs without requiring driver modifications\. HetCCL introduces two novel mechanisms that enable cross\-vendor communication while leveraging optimized vendor libraries, NVIDIA NCCL and AMD RCCL\. Evaluations on a multi\-vendor GPU cluster show that HetCCL matches NCCL and RCCL performance in homogeneous setups while extending support to heterogeneous environments, enabling practical and efficient training across NVIDIA and AMD GPUs without changes to existing deep learning applications\.

## FedPeel: Peeling Stabilized Layers for Robust Heterogeneous Federated Learning

**Authors:** Haizhou Du; Lixin Huang; Zonghan Wu; Huan Huo; Huaicheng Yan

**ID:** 151499 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aD69yKg1Sj>) | [PDF](<https://openreview.net/pdf?id=aD69yKg1Sj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151499>)

Proxy model\-based heterogeneous federated learning enables clients with diverse architectures to collaborate through a shared lightweight intermediary\. However, current methods aggregate and distill proxy knowledge in a structure\-agnostic manner, ignoring layer\-wise convergence dynamics, conflating shared and client\-specific information, and transferring knowledge without assessing its reliability\. These oversights jointly cause model oscillation, drift, and negative transfer\. We propose FedPeel, a framework that makes the aggregation pipeline aware of the internal structure of model parameters\. Rather than updating the proxy monolithically, FedPeel selectively aggregates only the layers that have stabilized, decouples their frequency\-domain representations to separate generalizable patterns from personalized details, and modulates knowledge transfer intensity on a per\-sample basis according to teacher confidence\. Theoretical analysis establishes an O\(1/T \) convergence rate\. Experiments on image, text, and audio benchmarks show that FedPeel consistently outperforms state\-of\-the\-art methods in both accuracy and communication efficiency\.

## Prysma: Efficient Modality Adaptation for SLO\-aware LLM\-based Video Question Answering

**Authors:** Botao Zhu; Xiaoyi Fan; Yifei Zhu

**ID:** 151987 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WKxEqubtPc>) | [PDF](<https://openreview.net/pdf?id=WKxEqubtPc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151987>)

Large language models \(LLMs\) have demonstrated remarkable performance in video question answering \(VQA\)\. To improve responsiveness and answer quality, modern LLM\-based VQA services pre\-extract multiple LLM\-compatible modalities from videos before response generation\. However, the performance impact of modality combinations \(MCs\) and extraction knob settings has barely been studied\. Our analysis shows that both factors substantially affect answer quality and Time\-to\-First\-Token \(TTFT\) latency\. Furthermore, the best configuration depends on both video content and query semantics, necessitating adaptive strategies\. We propose Prysma, the first modality adaptation framework for LLM\-based VQA\. Prysma intelligently adapts the modality configurations to optimize answer quality, subject to a Service Level Objective \(SLO\) on average TTFT\. It combines an offline modality orchestrator and an online semantic adapter\. The offline orchestrator constructs a video knowledge base to warm\-start tuning, employs a latency\-aware configuration pruner to reduce search space, and runs a two\-stage tuner to optimize both video\- and query\-level configurations\. The online adapter selects configurations in real time based on query semantics and tuning history\. Extensive evaluations demonstrate that Prysma improves answer quality by up to 82% over SOTA methods under the same SLO setting\.

## Focus on Where You Aggregate: Restricted SAM for Non\-IID Federated Learning

**Authors:** Haotong Wen; Junkang Liu; Yi Xu; Xiao Liu; Longkun Guo; Kewen Liao

**ID:** 150522 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTzdtftVAe>) | [PDF](<https://openreview.net/pdf?id=hTzdtftVAe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150522>)

Data heterogeneity and multiple local update steps in federated learning can increase client drift and make global parameter aggregation less stable\. Existing Sharpness Aware Minimization \(SAM\) based federated learning methods usually try to ease this problem by flattening local neighborhoods around client models\. However, they do not explicitly optimize on the geometry region where the global parameters are actually aggregated\. As a result, the aggregated global model often cannot fully benefit from local flattening\. To address this problem, we propose a federated restricted SAM method called FedRSAM, which improves the stability of federated optimization by flattening the parameter aggregation region\. First, we build a cone\-shaped geometry region using the global update direction from the previous round and the variance of client parameter aggregation, in order to predict where the aggregated parameters may fall in the next round\. Then, we restrict the search of SAM perturbation directions to the cone\-manifold and only flatten the loss surface inside this region\. Extensive experiments on multiple benchmarks and on both vision and natural language backbones verify the superiority of our method in terms of convergence stability and performance under heterogeneous settings\.

## vExpert: Virtualizing Expert Storage for Adaptive Load Balancing in Distributed MoE Inference

**Authors:** Wenxun Wang; Xiuhong Li; Yida Wang; Chen Tang; Zongle Huang; Ke Hong; Yu Wang; Yongpan Liu

**ID:** 155312 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XDcsFJkyg>) | [PDF](<https://openreview.net/pdf?id=6XDcsFJkyg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155312>)

Mixture\-of\-Experts \(MoE\) models have become prevailing, yet their distributed deployment suffers from severe dynamic load imbalance due to the conflict between static expert placement and inherent routing dynamism\. While host DRAM offers capacity to avoid static device storage for load balancing, we identify existing offloading works fundamentally fail in distributed inference due to two overlooked challenges: \(1\) coupled performance impacts of runtime Host\-to\-Device transfers due to load dynamism and shared PCIe topology; \(2\) system\-level memory overhead incurred by DRAM usage at scale\. In this paper, we propose vExpert that shifts DRAM offloading paradigm from partial residency to full redundancy by virtualized expert storage\. We pioneer the first systematic performance model that jointly captures H2D latency, PCIe contention, and load imbalance, building a lightweight allocator to dynamically map physical experts to virtual slots\. A novel disaggregated manager is designed to reduce memory overhead in multi\-process environments\. Evaluated on DeepSeek\-V3\.1 within an 8\-node H100 cluster, vExpert improves load balance ratio by up to 55\\% and achieves 1\.2$\\times$ end\-to\-end speedup\. Code is available at https://anonymous\.4open\.science/r/vExpert\-B743/\.

## Memory\-Efficient Federated Fine\-Tuning of LLMs via Block\-wise Progressive Training

**Authors:** Qianyue Cao; Zongwei Zhu; Boyu Li; Yi Xiong; Zirui Lian; Xuehai Zhou

**ID:** 149884 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVZvgjYadQ>) | [PDF](<https://openreview.net/pdf?id=mVZvgjYadQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149884>)

Federated fine\-tuning has become a dominant paradigm for privacy\-preserving Large Language Model \(LLM\) adaptation\. While integrating Parameter\-Efficient Fine\-Tuning \(PEFT\) reduces communication and computational costs, existing methods neglect that peak memory bottlenecks caused by full forward passes through the frozen LLM\. This excludes low\-memory devices, leading to data loss and suboptimal global performance\. In this paper, we propose BP\-FedPEFT, a framework utilizing progressive training to decompose the end\-to\-end computational graph, reducing peak memory to the block level\. While enabling low\-memory device participation, this paradigm incurs prolonged training latency and introduces growing memory burdens for deep\-layer inputs, alongside suffering from cascading feature misalignment due to the absence of global supervision, leading to suboptimal model performance\. To ensure efficiency, BP\-FedPEFT employs functional\-aware overlapping planning coupled with a local\-global stability criterion to regulate training steps and communication rounds\. To ensure effectiveness, we utilize depth\-injected input synthesis and block overlaps to bridge the supervision gap, establishing valid optimization trajectories that align shallow representations with deep functional expectations\. We establish theoretical convergence guarantees for BP\-FedPEFT\. Experiments on a heterogeneous testbed show that BP\-FedPEFT supports diverse PEFT methods, reducing average memory usage by 44\.7\-76\.2\\%, accelerating training by 2\.3\-12\.6$\\times$, and improving accuracy by 3\.2\-5\.8\\% through inclusive participation\.

## BReD: Block Replay Dithering for Stable Low\-Bit EMA Optimizer States

**Authors:** Heshen Zhan; Youhan Huang; Yunke Peng; Yao Wang; Linghui Kong; Ziwei Zhu; Qingyu Han; Yaoyuan Wang; Congliang Chen; Ruoyu Sun

**ID:** 150618 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gnKli42BZO>) | [PDF](<https://openreview.net/pdf?id=gnKli42BZO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150618>)

Low\-bit storage of optimizer states can substantially reduce the memory footprint of large\-scale training\. In practice, however, these states are not quantized once: at every training step, they are dequantized, updated, requantized, and written back\. This iterative quantization pipeline can destabilize training\. We identify a failure mode behind this instability: for states updated via exponential moving averages \(EMAs\), quantization errors are recursively fed into subsequent updates\. As a result, biased errors accumulate over time while high\-variance errors are amplified, particularly when the EMA decay factor is close to 1\. To address this error accumulation, we propose \*\*BReD \*\*\(\*\*Block \*\*Re\*\*play \*\*D\*\*ithering\), a method that reduces rounding bias and controls rounding variance during quantization\. BReD adapts classical subtractive dithering to optimizer\-state quantization by combining deterministic seed replay with block\-wise shared dither values, avoiding auxiliary random\-tensor storage and per\-element dither values generation\. Across pretraining \(five optimizers at 120M; AdamW and Muon at 1\.1B and 3\.4B model\) and supervised fine\-tuning \(AdamW and Muon at 7B model\), 4\-bit BReD closely matches training with full\-precision optimizer states, with PPL shifts $\\leq0\.5$ in pretraining and $\\leq0\.2$ in fine\-tuning and average downstream performance changes within 0\.7 points\. Moreover, 3\-bit BReD preserves stable convergence in the evaluated settings, offering a more aggressive alternative\.

## Adversary\-Robust Learning from Fully Asynchronous Directional Derivative Estimates

**Authors:** Anik Kumar Paul; Nibedita Roy; Nagesh Talagani; Swetha Ganesh; Gugan Chandrashekhar Mallika Thoppe; Alexandre Reiffers\-Masson

**ID:** 154942 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9lsYgXnywJ>) | [PDF](<https://openreview.net/pdf?id=9lsYgXnywJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154942>)

We propose FAR\-SIGN \(Fully Asynchronous Robust optimization via SIGNed directional projections\) for adversary\-resilient learning in parameter\-server\-\-worker systems\. FAR\-SIGN achieves robustness through sign\-based updates along carefully designed directions and mitigates the resulting bias via a two\-timescale mechanism\. It admits both first\-order and zeroth\-order implementations and enables fully asynchronous execution without requiring a private reference dataset at the server\. We establish almost\-sure convergence of FAR\-SIGN to the set of stationary points for smooth, nonconvex objectives\. Moreover, we prove the near\-optimal rate of $O\(n^\{\-1/4\+\\epsilon\}\)$ in the first\-order setting and the standard $O\(n^\{\-1/6\+\\epsilon\}\)$ in the zeroth\-order setting, where $n$ is the iteration count and $\\epsilon&gt;0$ can be chosen arbitrarily small\. Experiments on MNIST show that FAR\-SIGN outperforms robust aggregation\-based methods in both accuracy and wall\-clock time\.

## FRESCO: A Novel Consistency Control for Asynchronous Pipeline Parallel Training

**Authors:** Dongyeop Lee; Namhoon Lee

**ID:** 154282 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ez6jehFKyE>) | [PDF](<https://openreview.net/pdf?id=Ez6jehFKyE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154282>)

Asynchronous pipeline parallelism can accelerate distributed model training, but suffers from instability caused by inconsistent gradient computations\. We identify a fundamental source of this inconsistency: error signals are coupled to forward\-time features, not just parameter states\. This means that parameters may evolve as long as they preserve forward\-equivalence\. Leveraging this insight, we introduce FRESCO, which frames asynchronous updates as a constrained optimization problem: it finds the minimal update modification that acts trivially on the activation subspace\. Thus, it serves as a principled generalization beyond the usual synchronous\-\-asynchronous dichotomy: subspace\-level protection preserves gradient validity without synchronization stalls, unconstrained\-asynchrony instability, or memory overhead that works against pipeline scaling\. We demonstrate that FRESCO consistently outperforms representative asynchronous baselines in LLM pre\-training, with the gains most pronounced under deep pipelines and high inconsistency levels\. Moving beyond the current limitations, FRESCO establishes a new foundation for high\-utilization pipeline parallel training, providing a scalable path for large\-model development on diverse, resource\-constrained systems\.

## Do We Need Asynchronous SGD? On the Near\-Optimality of Synchronous Methods

**Authors:** Grigory Begunov; Alexander Tyurin

**ID:** 155336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6NIyk8iU5e>) | [PDF](<https://openreview.net/pdf?id=6NIyk8iU5e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155336>)

Modern distributed optimization methods mostly rely on traditional synchronous approaches, despite substantial recent progress in asynchronous optimization\. We revisit Synchronous SGD and its robust variant, called $m$\-Synchronous SGD, which can be interpreted as a method with a backup\-worker strategy, and theoretically show that they are nearly optimal in many heterogeneous computation and communication scenarios, which is somewhat unexpected\. We analyze the synchronous methods under random times and adversarial partial participation of workers, and prove that their time complexities are optimal in many practical regimes, up to logarithmic factors\. While synchronous methods are not universal solutions and there exist tasks where asynchronous methods may be necessary, we show that they are sufficient for many modern heterogeneous computation and communication scenarios\.

## On Communication\-Efficient Training of Ensembles in Federated Learning

**Authors:** Valery Parfenov; Mikhail Aleksandrov; Daniil Medyakov; Dmitry Bylinkin; Aleksandr Beznosikov

**ID:** 152278 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UHTVsMMVj4>) | [PDF](<https://openreview.net/pdf?id=UHTVsMMVj4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152278>)

In recent years, ensemble ideas have found parallels in federated learning \(FL\)\. Specific ensemble learning formulations under the federated setup involve information exchange between clients during the training process, making the classic FL communication bottleneck a critical issue\. Importantly, the resulting communication patterns differ from those studied in traditional communication\-efficient FL methods, placing ensembling outside their analytical scope\. In this work, we close this gap by extending classic communication\-efficient techniques to the ensembling setting and introducing a new mechanism specifically tailored to it\. We instantiate these ideas in four algorithms and provide convergence guarantees for each under the smooth non\-convex setup\. We further support our theoretical findings with experimental results\.

## MICA: Activation Checkpointing for Double\-Backward Training of Machine Learning Interatomic Potentials

**Authors:** Hongyu Wang; Mingzhen Li; Hongtao Xu; Yuanchang Zhou; Weijian Liu; Weile Jia; Guangming Tan

**ID:** 150066 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l01VgKyaZx>) | [PDF](<https://openreview.net/pdf?id=l01VgKyaZx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150066>)

Conservative machine learning interatomic potentials \(MLIPs\) predict potential energy and obtain atomic forces as the negative gradient of energy with respect to atomic positions\. Computing forces requires a backward pass from energy to atomic positions, and backpropagating the force loss differentiates through this pass, creating double\-backward execution\. This execution creates two activation classes with different lifetimes: forward activations and first\-backward activations\. Heterogeneous atomic graph batches make their memory footprint input dependent, while standard checkpointing mainly targets forward activations and does not directly manage first\-backward activations\. Therefore, we present MICA, an activation checkpointing planner for double\-backward execution in conservative MLIP training\. MICA combines a checkpoint primitive for double\-backward phases with an input\-aware dynamic programming planner that selects checkpoint modes for dynamic atomic graph batches under a specified memory budget\. Across EqV3, MatRIS, PET, and UMA, MICA's full\-checkpoint mode reduces peak memory by 49\\% to 86\\%, compared with only 10\\% to 24\\% from standard PyTorch checkpointing\. On an 80GB GPU, training EquiformerV3 without checkpointing peaks at 75\.47GB and exceeds 50GB in 76\.7\\% of 1000 iterations, while MICA keeps all 1000 iterations within a 50GB memory budget with 16\.25\\% step time overhead\. Under the same GPU memory capacity, MICA increases the maximum feasible atoms per batch by $4\.2\\times$ to $9\.2\\times$\. In distributed training, the reduced peak memory allows MICA to reduce reliance on heavier memory saving techniques, such as Fully Sharded Data Parallel \(FSDP\) and graph parallelism \(GP\)\. On a single H100 node with NVLink, MICA trains a MatRIS\-MoE model with 2B parameters, achieving a $1\.88\\times$ to $2\.03\\times$ speedup over FSDP and GP baselines\.

## Revisiting Decentralized Online Convex Optimization with Compressed Communication

**Authors:** Hao Zhou; Xiaoyu Wang; Chang Yao; Mingli Song; Yuanyu Wan

**ID:** 153581 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLfoJQs3I1>) | [PDF](<https://openreview.net/pdf?id=KLfoJQs3I1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153581>)

Decentralized online convex optimization \(D\-OCO\) is a popular framework for distributed applications with streaming data\. To tackle the communication bottleneck, previous studies have investigated D\-OCO with compressed communication and proposed several algorithms that are variants of online gradient descent \(OGD\)\. However, for D\-OCO with exact communication, the best existing algorithms are variants of follow\-the\-regularized\-leader \(FTRL\)\. In this paper, for the first time, we propose two FTRL\-type algorithms for D\-OCO with compressed communication\. Compared with OGD\-type algorithms, our algorithms are more elegant in both algorithmic design and theoretical analysis\. The key insight is that the dual update mechanism of FTRL allows us to make a simple application of the technique for average consensus with communication compression\. More specifically, our first algorithm considers the full\-information setting, and can match the existing regret bounds\. Our second algorithm is designed for the bandit setting, and can significantly improve both the regret bounds and communication costs of existing algorithms\.

## Breaking the $\\sqrt\{d\}$ Communication Barrier in Federated Sampling with Adaptive Hamiltonian Monte Carlo

**Authors:** Jiajun Liang; Linxuan Wang; Guang Lin; Qifan Song

**ID:** 152679 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=REeakXmDrL>) | [PDF](<https://openreview.net/pdf?id=REeakXmDrL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152679>)

This work proposes the Adaptive Federated Hamiltonian Monte Carlo \(AFHMC\) for Bayesian federated learning \(FL\) tasks\. The prior work on HMC applications for FL achieves $O\(\\sqrt\{d\}/\\epsilon\)$ communication cost under log\-convex distributions, already demonstrating its advantage over the Langevin dynamic\-based counterpart\. Based on a refined analysis, this paper further reveals the benefit of HMC for the FL regime by incorporating a control mechanism for local node shifts\. We prove that AFHMC at most requires $O\(\(d/\\epsilon^2\)^\{1/3\}\)$ communication cost up to a logarithmic term, which is significantly better than the existing results\. Moreover, the proposed method adapts to client heterogeneity\. Under low\-heterogeneity settings \(i\.e\., the target sampling precision $\\epsilon^2$ is higher than the heterogeneity level\), the communication rate of AFHMC can be as good as $O\(\\log\(d/\\epsilon^2\)\)$, resembling the communication costs for FL optimization tools\. To the best of our knowledge, this provides the first logarithmic communication complexity result for federated sampling\. Our code is available at https://anonymous\.4open\.science/r/Adaptive\-Federated\-HMC\.

## FedVSSAM: Mitigating Flatness Incompatibility in Sharpness\-Aware Federated Learning

**Authors:** Bingnan Xiao; Yuan Gao; Bingcong Li; Wei Ni; Xin Wang; Tony Quek

**ID:** 153077 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OB02U98b9E>) | [PDF](<https://openreview.net/pdf?id=OB02U98b9E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153077>)

Sharpness\-aware minimization \(SAM\) is an effective method for improving the generalization of federated learning \(FL\) by steering local training toward flat minima\. Under data heterogeneity, however, device\-side SAM searches for locally flat basins that are incompatible with the flat region preferred by the global objective\. We identify this structural failure mode as flatness incompatibility, which explains why improving local flatness alone may provide limited training and generalization improvement for the global model\. We reveal that flatness incompatibility arises from data heterogeneity and the friendly adversary phenomenon, and is further amplified by local updates and partial device participation\. To mitigate this issue, we propose Federated Learning with variance\-suppressed sharpness\-aware minimization \(FedVSSAM\), which constructs a variance\-suppressed adjusted direction and uses it consistently in local flatness search, local descent, and global update\. FedVSSAM anchors both perturbation and update directions to a more stable global direction, instead of correcting only an isolated local perturbation\. We establish non\-convex convergence guarantees of FedVSSAM and prove that the mean\-square deviation between the adjusted direction and the global gradient is effectively controlled\. Experiments demonstrate that FedVSSAM mitigates flatness incompatibility and outperforms the baselines across diverse FL settings\.

## LOSCAR\-SGD: Local SGD with Communication\-Computation Overlap and Delay\-Corrected Sparse Model Averaging

**Authors:** Peter Richtarik; Yassine Maziane; Ammar Mahran; Artavazd Maranjyan

**ID:** 149908 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mKJ4hXgEXg>) | [PDF](<https://openreview.net/pdf?id=mKJ4hXgEXg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149908>)

Communication is a major bottleneck in distributed learning, especially in large\-scale settings and in federated learning environments with slow links\. Three standard ways to reduce this cost are communication compression, local training, and communication\-computation overlap\. Methods that combine these ingredients are used in practice and have been found to be effective for large\-scale training, but there is little theory for methods that combine all three\. We study a heterogeneous\-compute setting in which different workers may take different numbers of local steps, and we propose LOSCAR\-SGD, a Local SGD method that communicates only a sparse subset of model coordinates and continues optimizing while communication is in flight\. A key ingredient is a delay\-corrected merge rule that incorporates delayed synchronized information without discarding the progress made during the overlap phase\. We give convergence guarantees for smooth non\-convex objectives and show how sparsity, overlap, and worker heterogeneity affect the rate\. To the best of our knowledge, this is the first theory for this combination of ingredients\. Experiments further show that communication\-computation overlap reduces training time and that the delay\-corrected merge outperforms naive overwriting\.

## Rennala\-NSGD: Asynchronous Stochastic Optimization Beyond Euclidean Geometry

**Authors:** Igor Sokolov; Alexander Tyurin; Peter Richtarik

**ID:** 148500 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xMWhDplFaU>) | [PDF](<https://openreview.net/pdf?id=xMWhDplFaU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148500>)

The recent empirical success of non\-Euclidean optimizers, such as Muon \(Jordan et al\., 2024\) and Shampoo \(Gupta et al\., 2018\), has transformed the training of Large Language Models \(LLMs\) by exploiting the geometry of matrix spaces\. Despite this progress, the theoretical understanding of stochastic optimization in general normed spaces remains limited, particularly in distributed settings\. In this work, we present a novel analysis of Minibatch Stochastic Gradient Descent \(SGD\) in non\-Euclidean geometries\. Leveraging the framework of $\\\\kappa$\-regular normed spaces \(Juditsky &amp; Nemirovski, 2008\) and a light\-tail noise model defined directly in the dual norm, we derive high\-probability oracle complexity bounds for smooth non\-convex optimization\. Crucially, our analysis reveals that measuring stochastic variance within the intrinsic non\-Euclidean geometry avoids the suboptimal dimension\-dependent factors inherent in Euclidean norm equivalence\. Building on this framework, we introduce Rennala\-NSGD, a semi\-asynchronous distributed algorithm, and establish, to the best of our knowledge, the first wall\-clock time complexity guarantee for asynchronous non\-Euclidean stochastic optimization\.

## Rescaled Asynchronous SGD: Optimal Distributed Optimization under Data and System Heterogeneity

**Authors:** Ammar Mahran; Artavazd Maranjyan; Peter Richtarik

**ID:** 153283 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MPqNHW1Si4>) | [PDF](<https://openreview.net/pdf?id=MPqNHW1Si4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153283>)

Asynchronous stochastic gradient descent \(ASGD\) is a standard way to exploit heterogeneous compute resources in distributed learning:   instead of forcing fast workers to wait for slow ones, the server updates the model whenever a gradient arrives\.   Vanilla ASGD applies each arriving gradient with the same weight\.   When local data distributions are heterogeneous, this becomes problematic: faster workers contribute more updates, and we show theoretically that the method is biased toward a frequency\-weighted average of the local objectives rather than the desired global objective\.   Existing remedies typically move away from the simple ASGD template by introducing gathering phases, buffering, or extra memory\.   We show that this is unnecessary\.   Keeping the standard ASGD mechanism, we recover the correct objective by rescaling worker\-specific stepsizes in proportion to their computation times, so that each worker contributes the same aggregate learning rate over a cycle\.   In the non\-convex setting, under smoothness and bounded heterogeneity assumptions, we prove that the resulting method, Rescaled ASGD, converges to stationary points of the correct global objective in the fixed\-computation model\.   Its time complexity matches the known lower bound in the leading term, while the effects of staleness and data heterogeneity appear only in lower\-order terms\.   Experiments confirm that the method converges to the correct objective and is competitive with state\-of\-the\-art baselines\.

## CRAFT: Conflict\-Resolved Aggregation for Federated Training

**Authors:** Ziqi Wang; Qiang Liu; Nils Thuerey

**ID:** 152651 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ROxD67Qddn>) | [PDF](<https://openreview.net/pdf?id=ROxD67Qddn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152651>)

The aggregation of conflicting client updates remains a fundamental bottleneck in federated learning \(FL\) over heterogeneous data distributions\. Naive averaging, as used in FedAvg, often leads to destructive interference in which the global model improves on average but deteriorates significantly for specific clients\. In this work, we propose CRAFT \(Conflict\-Resolved Aggregation for Federated Training\), a new aggregation framework that treats the global update as a geometric correction problem\. We formulate aggregation as finding the update closest to a \\emph\{reference direction\} while satisfying \\emph\{conflict\-free constraints\}, ensuring non\-negative alignment with the updates of participating clients\. We derive a closed\-form expression for the constrained optimization problem, avoiding the computational overhead of iterative solvers\. Furthermore, we use a layer\-wise adaptation to address conflicts at varying feature granularities\. We provide a theoretical analysis showing that CRAFT promotes a common\-descent structure and mitigates destructive interference through its projection geometry\. Extensive experiments on non\-IID and imbalanced benchmarks demonstrate that CRAFT significantly reduces performance disparity while maintaining competitive global accuracy against state\-of\-the\-art baselines\.

## When Must AI Training Stage Checkpoints? A Distributional Model of Durability Boundaries at Scale

**Authors:** Farid Talibli; Awais Khan; Christopher Zimmer; Sungyong Park; Jihoon Yang; Youngjae Kim

**ID:** 153640 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JouNw5l7RN>) | [PDF](<https://openreview.net/pdf?id=JouNw5l7RN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153640>)

Large\-scale AI training runs span days within fixed HPC allocations, making checkpointing essential for bounded recovery after failure\. Asynchronous checkpointing hides checkpoint latency from the training loop, but does not guarantee that the most recent state has reached a durable target: data may still be in flight to the shared parallel filesystem \(PFS\) when a failure occurs, forcing rollback to an older checkpoint\. We formalize this durability gap through a distributional model that combines hardware crossover analysis with statistical models of PFS completion time under scale and contention\. Rank\-local completion times follow a lognormal body distribution, while wall\-clock completion is governed by an extreme\-value process determined by the slowest writer\. The resulting analysis yields a contention\-dependent threshold,\~$C^\\star\_p\(n\)$, beyond which the PFS is no longer the fastest path to durable persistence\. Guided by this analysis, we design CacheX, a transparent staging layer that composes with PyTorch Distributed Checkpoint\~\(DCP\)\. CacheX stages bulk data to local DRAM and replicates it to a neighboring node's NVMe, providing allocation\-local durability while preserving eventual persistence to the PFS\. On Frontier, across IOR runs up to 256\~nodes and end\-to\-end FSDP\+DCP training up to 64\~nodes, CacheX reduces write\-time variability by up to\~$43\\times$, achieves a replica\-durable effective throughput of\~$\{\\sim\}\\,2\.5$ to $2\.8$\\,GiB/s per node decoupled from PFS contention, and reduces worst\-case rollback exposure\. Our results show that staging is not a universal accelerator; rather, it is a conditional policy for selecting the first durable checkpoint boundary under measured scale, load, and tail behavior\.

## Scalable Distributed Stochastic Optimization via Bidirectional Compression: Beyond Pessimistic Limits

**Authors:** Grigory Begunov; Alexander Tyurin

**ID:** 150535 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hQ0exeqheE>) | [PDF](<https://openreview.net/pdf?id=hQ0exeqheE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150535>)

In centralized, distributed, and federated learning with stochastic gradients and $n$ workers, it was recently shown that it is infeasible to find an $\\varepsilon$\-stationary point faster than $\\tilde\{\\Omega\}\(\\min\[\{\\frac\{d \\kappa L \\Delta\}\{\\varepsilon\}\} \+ \\frac\{h L \\Delta\}\{\\varepsilon\} \+ \\frac\{h \\sigma^2 L \\Delta\}\{n \\varepsilon^2\}, \{\\frac\{h \\sigma^2 L \\Delta\}\{\\varepsilon^2\}\} \+ \\frac\{h L \\Delta\}\{\\varepsilon\}\]\)$ seconds in both homogeneous and heterogeneous settings under standard assumptions: $L$\-smoothness, $\\sigma^2$\-bounded unbiased stochastic gradients, and lower boundedness of the function, i\.e\., $f\(x\) \\geq f^\\star$ for all $x \\in \\mathbb\{R\}^d$, where $\\Delta = f\(x^0\) \- f^\*$, $h$ is the computation time, $\\kappa$ is the communication speed between the workers and the server, and $d$ is the dimension of the iterates and gradients\. This result is pessimistic since it does not allow a complexity in which both $\{\\frac\{d \\kappa L \\Delta\}\{\\varepsilon\}\}$ and $\{\\frac\{h \\sigma^2 L \\Delta\}\{\\varepsilon^2\}\}$ improve with $n$, even when using random sparsification techniques; moreover, this lower bound can be matched by either non\-distributed SGD or vanilla Synchronous SGD, which reduces the impact of recent progress in the design of compression\-based methods\. In this work, we challenge this limitation and propose new compressed methods, Inkheart SGD and M4, and show that under an additional structural assumption, which is necessary due to the lower bound and which does not restrict the class of considered problems, we achieve new state\-of\-the\-art time complexities that break this pessimistic barrier and allow scaling with the number of workers $n$\.

## Principled Federated Random Forests for Heterogeneous Data

**Authors:** Rémi Khellaf; Erwan Scornet; Aurélien Bellet; Julie Josse

**ID:** 152108 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VT6bLYcA7j>) | [PDF](<https://openreview.net/pdf?id=VT6bLYcA7j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152108>)

Random Forests \(RF\) are among the most powerful and widely used predictive models for centralized tabular data, yet few methods exist to adapt them to the federated learning setting\. Unlike most federated learning approaches, the piecewise\-constant nature of RF prevents exact gradient\-based optimization\. As a result, existing federated RF implementations rely on unprincipled heuristics: by aggregating decision trees trained independently on clients, they fail to optimize the centralized decision\-tree impurity criterion, which constitutes the ground\-truth in federated settings, even under simple covariate shifts\. We propose FedForest, a new federated RF algorithm for horizontally partitioned data that naturally accommodates diverse forms of client data heterogeneity, from covariate shift to more complex concept shift mechanisms\. We prove that our splitting procedure, based on aggregated client statistics, closely approximates the split selected by a centralized algorithm\. Moreover, FedForest allows splits on client indicators when beneficial, enabling a non\-parametric form of personalization that is absent from prior federated random forest methods\. Empirically, we demonstrate that the resulting federated forests closely match centralized performance across heterogeneous benchmarks while remaining communication\-efficient\.

## ReCoVer: Resilient LLM Pre\-Training System via Fault\-Tolerant Collective and Versatile Workload

**Authors:** Ziyue \(Alvin\) Liu; Zhengyang Wang; Ruijie \(Ray\) Zhang; Avinash Maurya; Hui Zhou; Paul Hovland; Sheng Di; Franck Cappello; Bogdan Nicolae; Zheng Zhang

**ID:** 149244 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rqxWoOlmvG>) | [PDF](<https://openreview.net/pdf?id=rqxWoOlmvG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149244>)

Pre\-training large language models on massive GPU clusters has made hardware faults routine rather than rare, driving the need for resilient training systems\. Yet existing frameworks either focus on specific parallelism schemes or risk drifting away from a failure\-free training trajectory\. We propose ReCoVer, a resilient LLM pre\-training system that upholds a single invariant: each iteration keeps the number of microbatches constant, ensuring per\-iteration gradients remain stochastically equivalent to a failure\-free run\. The framework is organized as three decoupled protocol layers: \(1\) Fault\-tolerant collectives that isolate faults from propagating across replicas; \(2\) in\-step fine\-grained recovery that preserves intra\-iteration progress and prevents gradient corruption; \(3\) versatile\-workload policy that dynamically redistributes microbatch quotas across the survivors\. The design is parallelism\-agnostic, integrating directly with both 3D parallelism and Hybrid Sharded Data Parallel \(HSDP\) as a drop\-in substrate\. We evaluate our implementation on end\-to\-end pre\-training tasks for up to 512 GPUs, ReCoVer successfully preserves the training trajectory from a failure\-free reference despite of 256 GPUs lost spread across the run\. For comparison with checkpoint\-and\-restart baselines, ReCoVer demonstrates $2\.23\\times$ higher effective throughput after successive failures\. This advantage results in ReCoVer processing 74\.9% more tokens at 234 GPU\-hours, with the gap widening as the training prolongs\.

## Stochastic Approximation Approach for Decentralized Optimization on Time Varying Random Networks

**Authors:** Chung\-Yiu Yau; Haoming Liu; Hoi\-To Wai

**ID:** 154573 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CZkji2IRik>) | [PDF](<https://openreview.net/pdf?id=CZkji2IRik>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154573>)

This paper initiates the study of a stochastic approximation approach with the Fully Stochastic Primal Dual Algorithm \(FSPDA\) framework for decentralized optimization on random and time varying topologies\. Our framework relies on a novel observation that randomnesses in time varying topology can be incorporated into a stochastic equality constrained optimization formulation\. We derived two new algorithms supporting sparsified communication on time varying topologies \-\-\- FSPDA\-SA allows agents to execute multiple local gradient steps to accelerate convergence, and FSPDA\-STORM further incorporates variance reduction to improve sample complexity\. For problems with smooth \(possibly non\-convex\) objective function, within $T$ iterations, FSPDA\-SA \(resp\. FSPDA\-STORM\) finds an $\\mathcal\{O\}\( 1/\\sqrt\{T\} \)$\-stationary \(resp\. $\\mathcal\{O\}\( 1/T^\{2/3\} \)$\) solution\. The latter shows the first near\-optimal convergence rate over time varying topology\.

## Optimal Byzantine\-resilient Federated Learning with User\-level Differential Privacy

**Authors:** Ming Xiang; Stratis Ioannidis; Edmund Yeh; Carlee Joe\-Wong; Lili Su

**ID:** 152344 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TlQd1co4f2>) | [PDF](<https://openreview.net/pdf?id=TlQd1co4f2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152344>)

Real\-world deployment of federated learning \(FL\) requires resilience against adversarial clients and data privacy\. Byzantine fault captures the worst\-case behavior of adversarial clients, while differential privacy \(DP\) provides statistical guarantees against privacy loss\. In particular, user\-level DP guards a client's entire contribution and provides more realistic protection against information leakage\. Despite intensive efforts, the minimax\-optimal convergence bound of Byzantine\-resilient FL with user\-level DP remains open\. We establish an information\-theoretic lower bound for any Byzantine\-resilient empirical risk minimization problem under user\-level DP and heterogeneous clients\. We propose ByzULDP, a central DP algorithm featuring a two\-level momentum across the client and server\. Client\-side momentum mitigates stochastic gradient variance during robust aggregation\. Unlike the fault\-free case, naively combining non\-linear Byzantine\-resilient aggregation with central DP noise is insufficient to guarantee convergence to a bounded neighborhood of a stationary point\. Our key contribution is a server\-side momentum that leverages a property unique to user\-level DP, where privacy sensitivity depends on how client updates are constructed, to empower convergence\.  ByzULDP achieves the order\-optimal convergence bound for strongly\-convex objectives, with vanishing error terms decaying at the optimal $\{\\mathcal\{O\}\}\(1/T\)$ and $\{\\mathcal\{O\}\}\(1/\\sqrt\{T\}\)$ rates for strongly\-convex and non\-convex objectives, respectively\. We corroborate our analysis with numerical experiments on real\-world datasets across diverse privacy budgets\.

## Mitigating Data Heterogeneity Effect in Client\-Reshuffling\-Based Federated Learning

**Authors:** Su Zhang; Peiran Yu; Heng Huang

**ID:** 151193 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cFwxeCCrXP>) | [PDF](<https://openreview.net/pdf?id=cFwxeCCrXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151193>)

Data heterogeneity and low client participation are two key challenges in federated learning \(FL\)\. Client\-reshuffling\-based FL methods were recently introduced to improve participation efficiency by visiting each client once per meta\-epoch; however, the resulting \\textit\{without\-replacement\} sampling induces inter\-round dependence and conditional bias\. As a consequence, existing client\-reshuffling methods can still suffer from the data heterogeneity challenge due to this dependence\. To bridge this gap, we propose \\textbf\{FedCDR\}, a client\-reshuffling FL algorithm built on Douglas–Rachford splitting\. FedCDR supports \\textit\{inexact\} local proximal updates via iterative solvers, enabling a practical communication–computation trade\-off\. For smooth nonconvex objectives, FedCDR with inexact local solvers attains a state\-of\-the\-art $O\(\\epsilon^\{\-1\}\)$ communication complexity to reach an $\\epsilon$\-approximate stationary point \(i\.e\., $\\mathbb\{E\}\\\|\\nabla f\(\\tilde\{x\}\)\\\|^2 \\le \\epsilon\)$, with the leading constant that is \\textbf\{independent of data heterogeneity\} \(i\.e\., it does not scale with common measures of heterogeneity\)\. Technically, our analysis operates at the meta\-epoch level: we control the deviation between reshuffled and full\-client updates, construct a tailored potential function with provable descent, and sum over each meta\-epoch to eliminate reshuffling\-induced dependence\. Experiments on synthetic tasks and benchmark datasets under heterogeneous partitions, including a 10,000\-client setting, demonstrate consistent improvements over strong baselines and their client reshuffling variants\.

