# Optimization / Large Scale, Parallel and Distributed

优化 / 大规模、并行与分布式优化

33 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## HetCCL: Efficient LLM Training on Heterogeneous Vendor GPUs

**Authors:** Heehoon Kim; Chris Jaehwan Lee; Taejeoung Kim; Jongwon Park; Jinpyo Kim; Pyongwon Suh; Ryan H Choi; Sangwoo Lee; Jaejin Lee

**ID:** 151408 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=atJocPineV>) | [PDF](<https://openreview.net/pdf?id=atJocPineV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151408>)

_Abstract unavailable from the accessible public sources._

## When Must AI Training Stage Checkpoints? A Distributional Model of Durability Boundaries at Scale

**Authors:** Farid Talibli; Awais Khan; Christopher Zimmer; Sungyong Park; Jihoon Yang; Youngjae Kim

**ID:** 153640 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JouNw5l7RN>) | [PDF](<https://openreview.net/pdf?id=JouNw5l7RN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153640>)

Large\-scale AI training runs span days within fixed HPC allocations, making checkpointing essential for bounded recovery after failure\. Asynchronous checkpointing hides checkpoint latency from the training loop, but does not guarantee that the most recent state has reached a durable target: data may still be in flight to the shared parallel filesystem \(PFS\) when a failure occurs, forcing rollback to an older checkpoint\. We formalize this durability gap through a distributional model that combines hardware crossover analysis with statistical models of PFS completion time under scale and contention\. Rank\-local completion times follow a lognormal body distribution, while wall\-clock completion is governed by an extreme\-value process determined by the slowest writer\. The resulting analysis yields a contention\-dependent threshold,\~$C^\\star\_p\(n\)$, beyond which the PFS is no longer the fastest path to durable persistence\. Guided by this analysis, we design CacheX, a transparent staging layer that composes with PyTorch Distributed Checkpoint\~\(DCP\)\. CacheX stages bulk data to local DRAM and replicates it to a neighboring node's NVMe, providing allocation\-local durability while preserving eventual persistence to the PFS\. On Frontier, across IOR runs up to 256\~nodes and end\-to\-end FSDP\+DCP training up to 64\~nodes, CacheX reduces write\-time variability by up to\~$43\\times$, achieves a replica\-durable effective throughput of\~$\{\\sim\}\\,2\.5$ to $2\.8$\\,GiB/s per node decoupled from PFS contention, and reduces worst\-case rollback exposure\. Our results show that staging is not a universal accelerator; rather, it is a conditional policy for selecting the first durable checkpoint boundary under measured scale, load, and tail behavior\.

## In STeP: Speculative Tensor Parallelism for Concurrent Heterogeneous Inference of LLMs

**Authors:** Viren Luke Radhakrishnan; Dhruva Kashyap; Pranav K Nayak; Chiranjib Bhattacharyya; Prakash Raghavendra

**ID:** 155402 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5ujmDrit5K>) | [PDF](<https://openreview.net/pdf?id=5ujmDrit5K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155402>)

_Abstract unavailable from the accessible public sources._

## ReCoVer: Resilient LLM Pre\-Training System via Fault\-Tolerant Collective and Versatile Workload

**Authors:** Ziyue \(Alvin\) Liu; Zhengyang Wang; Ruijie \(Ray\) Zhang; Avinash Maurya; Hui Zhou; Paul Hovland; Sheng Di; Franck Cappello; Bogdan Nicolae; Zheng Zhang

**ID:** 149244 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rqxWoOlmvG>) | [PDF](<https://openreview.net/pdf?id=rqxWoOlmvG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149244>)

_Abstract unavailable from the accessible public sources._

## Rennala\-NSGD: Asynchronous Stochastic Optimization Beyond Euclidean Geometry

**Authors:** Igor Sokolov; Alexander Tyurin; Peter Richtarik

**ID:** 148500 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xMWhDplFaU>) | [PDF](<https://openreview.net/pdf?id=xMWhDplFaU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148500>)

_Abstract unavailable from the accessible public sources._

## In STeP: Speculative Tensor Parallelism for Concurrent Heterogeneous Inference of LLMs

**Authors:** Viren Luke Radhakrishnan; Dhruva Kashyap; Pranav K Nayak; Chiranjib Bhattacharyya; Prakash Raghavendra

**ID:** 155402\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155402

[Paper](<https://openreview.net/forum?id=5ujmDrit5K>) | [PDF](<https://openreview.net/pdf?id=5ujmDrit5K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155402>)

_Abstract unavailable from the accessible public sources._

## ReCoVer: Resilient LLM Pre\-Training System via Fault\-Tolerant Collective and Versatile Workload

**Authors:** Ziyue \(Alvin\) Liu; Zhengyang Wang; Ruijie \(Ray\) Zhang; Avinash Maurya; Hui Zhou; Paul Hovland; Sheng Di; Franck Cappello; Bogdan Nicolae; Zheng Zhang

**ID:** 149244\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149244

[Paper](<https://openreview.net/forum?id=rqxWoOlmvG>) | [PDF](<https://openreview.net/pdf?id=rqxWoOlmvG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149244>)

_Abstract unavailable from the accessible public sources._

## BReD: Block Replay Dithering for Stable Low\-Bit EMA Optimizer States

**Authors:** Heshen Zhan; Youhan Huang; Yunke Peng; Yao Wang; Linghui Kong; Ziwei Zhu; Qingyu Han; Yaoyuan Wang; Congliang Chen; Ruoyu Sun

**ID:** 150618 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gnKli42BZO>) | [PDF](<https://openreview.net/pdf?id=gnKli42BZO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150618>)

Low\-bit storage of optimizer states can substantially reduce the memory footprint of large\-scale training\. In practice, however, these states are not quantized once: at every training step, they are dequantized, updated, requantized, and written back\. This iterative quantization pipeline can destabilize training\. We identify a failure mode behind this instability: for states updated via exponential moving averages \(EMAs\), quantization errors are recursively fed into subsequent updates\. As a result, biased errors accumulate over time while high\-variance errors are amplified, particularly when the EMA decay factor is close to 1\. To address this error accumulation, we propose \*\*BReD \*\*\(\*\*Block \*\*Re\*\*play \*\*D\*\*ithering\), a method that reduces rounding bias and controls rounding variance during quantization\. BReD adapts classical subtractive dithering to optimizer\-state quantization by combining deterministic seed replay with block\-wise shared dither values, avoiding auxiliary random\-tensor storage and per\-element dither values generation\. Across pretraining \(five optimizers at 120M; AdamW and Muon at 1\.1B and 3\.4B model\) and supervised fine\-tuning \(AdamW and Muon at 7B model\), 4\-bit BReD closely matches training with full\-precision optimizer states, with PPL shifts $\\leq0\.5$ in pretraining and $\\leq0\.2$ in fine\-tuning and average downstream performance changes within 0\.7 points\. Moreover, 3\-bit BReD preserves stable convergence in the evaluated settings, offering a more aggressive alternative\.

## Stochastic Approximation Approach for Decentralized Optimization on Time Varying Random Networks

**Authors:** Chung\-Yiu Yau; Haoming Liu; Hoi\-To Wai

**ID:** 154573 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CZkji2IRik>) | [PDF](<https://openreview.net/pdf?id=CZkji2IRik>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154573>)

This paper initiates the study of a stochastic approximation approach with the Fully Stochastic Primal Dual Algorithm \(FSPDA\) framework for decentralized optimization on random and time varying topologies\. Our framework relies on a novel observation that randomnesses in time varying topology can be incorporated into a stochastic equality constrained optimization formulation\. We derived two new algorithms supporting sparsified communication on time varying topologies \-\-\- FSPDA\-SA allows agents to execute multiple local gradient steps to accelerate convergence, and FSPDA\-STORM further incorporates variance reduction to improve sample complexity\. For problems with smooth \(possibly non\-convex\) objective function, within $T$ iterations, FSPDA\-SA \(resp\. FSPDA\-STORM\) finds an $\\mathcal\{O\}\( 1/\\sqrt\{T\} \)$\-stationary \(resp\. $\\mathcal\{O\}\( 1/T^\{2/3\} \)$\) solution\. The latter shows the first near\-optimal convergence rate over time varying topology\.

## HetCCL: Efficient LLM Training on Heterogeneous Vendor GPUs

**Authors:** Heehoon Kim; Chris Jaehwan Lee; Taejeoung Kim; Jongwon Park; Jinpyo Kim; Pyongwon Suh; Ryan H Choi; Sangwoo Lee; Jaejin Lee

**ID:** 151408\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151408

[Paper](<https://openreview.net/forum?id=atJocPineV>) | [PDF](<https://openreview.net/pdf?id=atJocPineV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151408>)

_Abstract unavailable from the accessible public sources._

## Prysma: Efficient Modality Adaptation for SLO\-aware LLM\-based Video Question Answering

**Authors:** Botao Zhu; Xiaoyi Fan; Yifei Zhu

**ID:** 151987 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WKxEqubtPc>) | [PDF](<https://openreview.net/pdf?id=WKxEqubtPc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151987>)

_Abstract unavailable from the accessible public sources._

## Focus on Where You Aggregate: Restricted SAM for Non\-IID Federated Learning

**Authors:** Haotong Wen; Junkang Liu; Yi Xu; Xiao Liu; Longkun Guo; Kewen Liao

**ID:** 150522 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTzdtftVAe>) | [PDF](<https://openreview.net/pdf?id=hTzdtftVAe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150522>)

_Abstract unavailable from the accessible public sources._

## Prysma: Efficient Modality Adaptation for SLO\-aware LLM\-based Video Question Answering

**Authors:** Botao Zhu; Xiaoyi Fan; Yifei Zhu

**ID:** 151987\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151987

[Paper](<https://openreview.net/forum?id=WKxEqubtPc>) | [PDF](<https://openreview.net/pdf?id=WKxEqubtPc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151987>)

_Abstract unavailable from the accessible public sources._

## Focus on Where You Aggregate: Restricted SAM for Non\-IID Federated Learning

**Authors:** Haotong Wen; Junkang Liu; Yi Xu; Xiao Liu; Longkun Guo; Kewen Liao

**ID:** 150522\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150522

[Paper](<https://openreview.net/forum?id=hTzdtftVAe>) | [PDF](<https://openreview.net/pdf?id=hTzdtftVAe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150522>)

_Abstract unavailable from the accessible public sources._

## Memory\-Efficient Federated Fine\-Tuning of LLMs via Block\-wise Progressive Training

**Authors:** Qianyue Cao; Zongwei Zhu; Boyu Li; Yi Xiong; Zirui Lian; Xuehai Zhou

**ID:** 149884 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVZvgjYadQ>) | [PDF](<https://openreview.net/pdf?id=mVZvgjYadQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149884>)

Federated fine\-tuning has become a dominant paradigm for privacy\-preserving Large Language Model \(LLM\) adaptation\. While integrating Parameter\-Efficient Fine\-Tuning \(PEFT\) reduces communication and computational costs, existing methods neglect that peak memory bottlenecks caused by full forward passes through the frozen LLM\. This excludes low\-memory devices, leading to data loss and suboptimal global performance\. In this paper, we propose BP\-FedPEFT, a framework utilizing progressive training to decompose the end\-to\-end computational graph, reducing peak memory to the block level\. While enabling low\-memory device participation, this paradigm incurs prolonged training latency and introduces growing memory burdens for deep\-layer inputs, alongside suffering from cascading feature misalignment due to the absence of global supervision, leading to suboptimal model performance\. To ensure efficiency, BP\-FedPEFT employs functional\-aware overlapping planning coupled with a local\-global stability criterion to regulate training steps and communication rounds\. To ensure effectiveness, we utilize depth\-injected input synthesis and block overlaps to bridge the supervision gap, establishing valid optimization trajectories that align shallow representations with deep functional expectations\. We establish theoretical convergence guarantees for BP\-FedPEFT\. Experiments on a heterogeneous testbed show that BP\-FedPEFT supports diverse PEFT methods, reducing average memory usage by 44\.7\-76\.2\\%, accelerating training by 2\.3\-12\.6$\\times$, and improving accuracy by 3\.2\-5\.8\\% through inclusive participation\.

## BReD: Block Replay Dithering for Stable Low\-Bit EMA Optimizer States

**Authors:** Heshen Zhan; Youhan Huang; Yunke Peng; Yao Wang; Linghui Kong; Ziwei Zhu; Qingyu Han; Yaoyuan Wang; Congliang Chen; Ruoyu Sun

**ID:** 150618\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150618

[Paper](<https://openreview.net/forum?id=gnKli42BZO>) | [PDF](<https://openreview.net/pdf?id=gnKli42BZO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150618>)

Low\-bit storage of optimizer states can substantially reduce the memory footprint of large\-scale training\. In practice, however, these states are not quantized once: at every training step, they are dequantized, updated, requantized, and written back\. This iterative quantization pipeline can destabilize training\. We identify a failure mode behind this instability: for states updated via exponential moving averages \(EMAs\), quantization errors are recursively fed into subsequent updates\. As a result, biased errors accumulate over time while high\-variance errors are amplified, particularly when the EMA decay factor is close to 1\. To address this error accumulation, we propose \*\*BReD \*\*\(\*\*Block \*\*Re\*\*play \*\*D\*\*ithering\), a method that reduces rounding bias and controls rounding variance during quantization\. BReD adapts classical subtractive dithering to optimizer\-state quantization by combining deterministic seed replay with block\-wise shared dither values, avoiding auxiliary random\-tensor storage and per\-element dither values generation\. Across pretraining \(five optimizers at 120M; AdamW and Muon at 1\.1B and 3\.4B model\) and supervised fine\-tuning \(AdamW and Muon at 7B model\), 4\-bit BReD closely matches training with full\-precision optimizer states, with PPL shifts $\\leq0\.5$ in pretraining and $\\leq0\.2$ in fine\-tuning and average downstream performance changes within 0\.7 points\. Moreover, 3\-bit BReD preserves stable convergence in the evaluated settings, offering a more aggressive alternative\.

## Adversary\-Robust Learning from Fully Asynchronous Directional Derivative Estimates

**Authors:** Anik Kumar Paul; Nibedita Roy; Nagesh Talagani; Swetha Ganesh; Gugan Chandrashekhar Mallika Thoppe; Alexandre Reiffers\-Masson

**ID:** 154942 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9lsYgXnywJ>) | [PDF](<https://openreview.net/pdf?id=9lsYgXnywJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154942>)

We propose FAR\-SIGN \(Fully Asynchronous Robust optimization via SIGNed directional projections\) for adversary\-resilient learning in parameter\-server\-\-worker systems\. FAR\-SIGN achieves robustness through sign\-based updates along carefully designed directions and mitigates the resulting bias via a two\-timescale mechanism\. It admits both first\-order and zeroth\-order implementations and enables fully asynchronous execution without requiring a private reference dataset at the server\. We establish almost\-sure convergence of FAR\-SIGN to the set of stationary points for smooth, nonconvex objectives\. Moreover, we prove the near\-optimal rate of $O\(n^\{\-1/4\+\\epsilon\}\)$ in the first\-order setting and the standard $O\(n^\{\-1/6\+\\epsilon\}\)$ in the zeroth\-order setting, where $n$ is the iteration count and $\\epsilon&gt;0$ can be chosen arbitrarily small\. Experiments on MNIST show that FAR\-SIGN outperforms robust aggregation\-based methods in both accuracy and wall\-clock time\.

## FRESCO: A Novel Consistency Control for Asynchronous Pipeline Parallel Training

**Authors:** Dongyeop Lee; Namhoon Lee

**ID:** 154282 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ez6jehFKyE>) | [PDF](<https://openreview.net/pdf?id=Ez6jehFKyE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154282>)

_Abstract unavailable from the accessible public sources._

## Scalable Distributed Stochastic Optimization via Bidirectional Compression: Beyond Pessimistic Limits

**Authors:** Grigory Begunov; Alexander Tyurin

**ID:** 150535 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hQ0exeqheE>) | [PDF](<https://openreview.net/pdf?id=hQ0exeqheE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150535>)

In centralized, distributed, and federated learning with stochastic gradients and $n$ workers, it was recently shown that it is infeasible to find an $\\varepsilon$\-stationary point faster than $\\tilde\{\\Omega\}\(\\min\[\{\\frac\{d \\kappa L \\Delta\}\{\\varepsilon\}\} \+ \\frac\{h L \\Delta\}\{\\varepsilon\} \+ \\frac\{h \\sigma^2 L \\Delta\}\{n \\varepsilon^2\}, \{\\frac\{h \\sigma^2 L \\Delta\}\{\\varepsilon^2\}\} \+ \\frac\{h L \\Delta\}\{\\varepsilon\}\]\)$ seconds in both homogeneous and heterogeneous settings under standard assumptions: $L$\-smoothness, $\\sigma^2$\-bounded unbiased stochastic gradients, and lower boundedness of the function, i\.e\., $f\(x\) \\geq f^\\star$ for all $x \\in \\mathbb\{R\}^d$, where $\\Delta = f\(x^0\) \- f^\*$, $h$ is the computation time, $\\kappa$ is the communication speed between the workers and the server, and $d$ is the dimension of the iterates and gradients\. This result is pessimistic since it does not allow a complexity in which both $\{\\frac\{d \\kappa L \\Delta\}\{\\varepsilon\}\}$ and $\{\\frac\{h \\sigma^2 L \\Delta\}\{\\varepsilon^2\}\}$ improve with $n$, even when using random sparsification techniques; moreover, this lower bound can be matched by either non\-distributed SGD or vanilla Synchronous SGD, which reduces the impact of recent progress in the design of compression\-based methods\. In this work, we challenge this limitation and propose new compressed methods, Inkheart SGD and M4, and show that under an additional structural assumption, which is necessary due to the lower bound and which does not restrict the class of considered problems, we achieve new state\-of\-the\-art time complexities that break this pessimistic barrier and allow scaling with the number of workers $n$\.

## Do We Need Asynchronous SGD? On the Near\-Optimality of Synchronous Methods

**Authors:** Grigory Begunov; Alexander Tyurin

**ID:** 155336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6NIyk8iU5e>) | [PDF](<https://openreview.net/pdf?id=6NIyk8iU5e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155336>)

Modern distributed optimization methods mostly rely on traditional synchronous approaches, despite substantial recent progress in asynchronous optimization\. We revisit Synchronous SGD and its robust variant, called $m$\-Synchronous SGD, which can be interpreted as a method with a backup\-worker strategy, and theoretically show that they are nearly optimal in many heterogeneous computation and communication scenarios, which is somewhat unexpected\. We analyze the synchronous methods under random times and adversarial partial participation of workers, and prove that their time complexities are optimal in many practical regimes, up to logarithmic factors\. While synchronous methods are not universal solutions and there exist tasks where asynchronous methods may be necessary, we show that they are sufficient for many modern heterogeneous computation and communication scenarios\.

## On Communication\-Efficient Training of Ensembles in Federated Learning

**Authors:** Valery Parfenov; Mikhail Aleksandrov; Daniil Medyakov; Dmitry Bylinkin; Aleksandr Beznosikov

**ID:** 152278 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UHTVsMMVj4>) | [PDF](<https://openreview.net/pdf?id=UHTVsMMVj4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152278>)

_Abstract unavailable from the accessible public sources._

## Rescaled Asynchronous SGD: Optimal Distributed Optimization under Data and System Heterogeneity

**Authors:** Ammar Mahran; Artavazd Maranjyan; Peter Richtarik

**ID:** 153283 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MPqNHW1Si4>) | [PDF](<https://openreview.net/pdf?id=MPqNHW1Si4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153283>)

_Abstract unavailable from the accessible public sources._

## LOSCAR\-SGD: Local SGD with Communication\-Computation Overlap and Delay\-Corrected Sparse Model Averaging

**Authors:** Peter Richtarik; Yassine Maziane; Ammar Mahran; Artavazd Maranjyan

**ID:** 149908 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mKJ4hXgEXg>) | [PDF](<https://openreview.net/pdf?id=mKJ4hXgEXg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149908>)

_Abstract unavailable from the accessible public sources._

## FedPeel: Peeling Stabilized Layers for Robust Heterogeneous Federated Learning

**Authors:** Haizhou Du; Lixin Huang; Zonghan Wu; Huan Huo; Huaicheng Yan

**ID:** 151499 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aD69yKg1Sj>) | [PDF](<https://openreview.net/pdf?id=aD69yKg1Sj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151499>)

Proxy model\-based heterogeneous federated learning enables clients with diverse architectures to collaborate through a shared lightweight intermediary\. However, current methods aggregate and distill proxy knowledge in a structure\-agnostic manner, ignoring layer\-wise convergence dynamics, conflating shared and client\-specific information, and transferring knowledge without assessing its reliability\. These oversights jointly cause model oscillation, drift, and negative transfer\. We propose FedPeel, a framework that makes the aggregation pipeline aware of the internal structure of model parameters\. Rather than updating the proxy monolithically, FedPeel selectively aggregates only the layers that have stabilized, decouples their frequency\-domain representations to separate generalizable patterns from personalized details, and modulates knowledge transfer intensity on a per\-sample basis according to teacher confidence\. Theoretical analysis establishes an O\(1/T \) convergence rate\. Experiments on image, text, and audio benchmarks show that FedPeel consistently outperforms state\-of\-the\-art methods in both accuracy and communication efficiency\.

## BReD: Block Replay Dithering for Stable Low\-Bit EMA Optimizer States

**Authors:** Heshen Zhan; Youhan Huang; Yunke Peng; Yao Wang; Linghui Kong; Ziwei Zhu; Qingyu Han; Yaoyuan Wang; Congliang Chen; Ruoyu Sun

**ID:** 150618\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150618

[Paper](<https://openreview.net/forum?id=gnKli42BZO>) | [PDF](<https://openreview.net/pdf?id=gnKli42BZO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150618>)

Low\-bit storage of optimizer states can substantially reduce the memory footprint of large\-scale training\. In practice, however, these states are not quantized once: at every training step, they are dequantized, updated, requantized, and written back\. This iterative quantization pipeline can destabilize training\. We identify a failure mode behind this instability: for states updated via exponential moving averages \(EMAs\), quantization errors are recursively fed into subsequent updates\. As a result, biased errors accumulate over time while high\-variance errors are amplified, particularly when the EMA decay factor is close to 1\. To address this error accumulation, we propose \*\*BReD \*\*\(\*\*Block \*\*Re\*\*play \*\*D\*\*ithering\), a method that reduces rounding bias and controls rounding variance during quantization\. BReD adapts classical subtractive dithering to optimizer\-state quantization by combining deterministic seed replay with block\-wise shared dither values, avoiding auxiliary random\-tensor storage and per\-element dither values generation\. Across pretraining \(five optimizers at 120M; AdamW and Muon at 1\.1B and 3\.4B model\) and supervised fine\-tuning \(AdamW and Muon at 7B model\), 4\-bit BReD closely matches training with full\-precision optimizer states, with PPL shifts $\\leq0\.5$ in pretraining and $\\leq0\.2$ in fine\-tuning and average downstream performance changes within 0\.7 points\. Moreover, 3\-bit BReD preserves stable convergence in the evaluated settings, offering a more aggressive alternative\.

## Revisiting Decentralized Online Convex Optimization with Compressed Communication

**Authors:** Hao Zhou; Xiaoyu Wang; Chang Yao; Mingli Song; Yuanyu Wan

**ID:** 153581 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLfoJQs3I1>) | [PDF](<https://openreview.net/pdf?id=KLfoJQs3I1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153581>)

Decentralized online convex optimization \(D\-OCO\) is a popular framework for distributed applications with streaming data\. To tackle the communication bottleneck, previous studies have investigated D\-OCO with compressed communication and proposed several algorithms that are variants of online gradient descent \(OGD\)\. However, for D\-OCO with exact communication, the best existing algorithms are variants of follow\-the\-regularized\-leader \(FTRL\)\. In this paper, for the first time, we propose two FTRL\-type algorithms for D\-OCO with compressed communication\. Compared with OGD\-type algorithms, our algorithms are more elegant in both algorithmic design and theoretical analysis\. The key insight is that the dual update mechanism of FTRL allows us to make a simple application of the technique for average consensus with communication compression\. More specifically, our first algorithm considers the full\-information setting, and can match the existing regret bounds\. Our second algorithm is designed for the bandit setting, and can significantly improve both the regret bounds and communication costs of existing algorithms\.

## Adversary\-Robust Learning from Fully Asynchronous Directional Derivative Estimates

**Authors:** Anik Kumar Paul; Nibedita Roy; Nagesh Talagani; Swetha Ganesh; Gugan Chandrashekhar Mallika Thoppe; Alexandre Reiffers\-Masson

**ID:** 154942\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154942

[Paper](<https://openreview.net/forum?id=9lsYgXnywJ>) | [PDF](<https://openreview.net/pdf?id=9lsYgXnywJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154942>)

We propose FAR\-SIGN \(Fully Asynchronous Robust optimization via SIGNed directional projections\) for adversary\-resilient learning in parameter\-server\-\-worker systems\. FAR\-SIGN achieves robustness through sign\-based updates along carefully designed directions and mitigates the resulting bias via a two\-timescale mechanism\. It admits both first\-order and zeroth\-order implementations and enables fully asynchronous execution without requiring a private reference dataset at the server\. We establish almost\-sure convergence of FAR\-SIGN to the set of stationary points for smooth, nonconvex objectives\. Moreover, we prove the near\-optimal rate of $O\(n^\{\-1/4\+\\epsilon\}\)$ in the first\-order setting and the standard $O\(n^\{\-1/6\+\\epsilon\}\)$ in the zeroth\-order setting, where $n$ is the iteration count and $\\epsilon&gt;0$ can be chosen arbitrarily small\. Experiments on MNIST show that FAR\-SIGN outperforms robust aggregation\-based methods in both accuracy and wall\-clock time\.

## FRESCO: A Novel Consistency Control for Asynchronous Pipeline Parallel Training

**Authors:** Dongyeop Lee; Namhoon Lee

**ID:** 154282\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154282

[Paper](<https://openreview.net/forum?id=Ez6jehFKyE>) | [PDF](<https://openreview.net/pdf?id=Ez6jehFKyE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154282>)

_Abstract unavailable from the accessible public sources._

## Mitigating Data Heterogeneity Effect in Client\-Reshuffling\-Based Federated Learning

**Authors:** Su Zhang; Peiran Yu; Heng Huang

**ID:** 151193 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cFwxeCCrXP>) | [PDF](<https://openreview.net/pdf?id=cFwxeCCrXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151193>)

Data heterogeneity and low client participation are two key challenges in federated learning \(FL\)\. Client\-reshuffling\-based FL methods were recently introduced to improve participation efficiency by visiting each client once per meta\-epoch; however, the resulting \\textit\{without\-replacement\} sampling induces inter\-round dependence and conditional bias\. As a consequence, existing client\-reshuffling methods can still suffer from the data heterogeneity challenge due to this dependence\. To bridge this gap, we propose \\textbf\{FedCDR\}, a client\-reshuffling FL algorithm built on Douglas–Rachford splitting\. FedCDR supports \\textit\{inexact\} local proximal updates via iterative solvers, enabling a practical communication–computation trade\-off\. For smooth nonconvex objectives, FedCDR with inexact local solvers attains a state\-of\-the\-art $O\(\\epsilon^\{\-1\}\)$ communication complexity to reach an $\\epsilon$\-approximate stationary point \(i\.e\., $\\mathbb\{E\}\\\|\\nabla f\(\\tilde\{x\}\)\\\|^2 \\le \\epsilon\)$, with the leading constant that is \\textbf\{independent of data heterogeneity\} \(i\.e\., it does not scale with common measures of heterogeneity\)\. Technically, our analysis operates at the meta\-epoch level: we control the deviation between reshuffled and full\-client updates, construct a tailored potential function with provable descent, and sum over each meta\-epoch to eliminate reshuffling\-induced dependence\. Experiments on synthetic tasks and benchmark datasets under heterogeneous partitions, including a 10,000\-client setting, demonstrate consistent improvements over strong baselines and their client reshuffling variants\.

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

## FedPeel: Peeling Stabilized Layers for Robust Heterogeneous Federated Learning

**Authors:** Haizhou Du; Lixin Huang; Zonghan Wu; Huan Huo; Huaicheng Yan

**ID:** 151499\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151499

[Paper](<https://openreview.net/forum?id=aD69yKg1Sj>) | [PDF](<https://openreview.net/pdf?id=aD69yKg1Sj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151499>)

Proxy model\-based heterogeneous federated learning enables clients with diverse architectures to collaborate through a shared lightweight intermediary\. However, current methods aggregate and distill proxy knowledge in a structure\-agnostic manner, ignoring layer\-wise convergence dynamics, conflating shared and client\-specific information, and transferring knowledge without assessing its reliability\. These oversights jointly cause model oscillation, drift, and negative transfer\. We propose FedPeel, a framework that makes the aggregation pipeline aware of the internal structure of model parameters\. Rather than updating the proxy monolithically, FedPeel selectively aggregates only the layers that have stabilized, decouples their frequency\-domain representations to separate generalizable patterns from personalized details, and modulates knowledge transfer intensity on a per\-sample basis according to teacher confidence\. Theoretical analysis establishes an O\(1/T \) convergence rate\. Experiments on image, text, and audio benchmarks show that FedPeel consistently outperforms state\-of\-the\-art methods in both accuracy and communication efficiency\.

## vExpert: Virtualizing Expert Storage for Adaptive Load Balancing in Distributed MoE Inference

**Authors:** Wenxun Wang; Xiuhong Li; Yida Wang; Chen Tang; Zongle Huang; Ke Hong; Yu Wang; Yongpan Liu

**ID:** 155312 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XDcsFJkyg>) | [PDF](<https://openreview.net/pdf?id=6XDcsFJkyg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155312>)

_Abstract unavailable from the accessible public sources._

