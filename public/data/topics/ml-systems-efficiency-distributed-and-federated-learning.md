# ML Systems &amp; Efficiency / Distributed and Federated Learning

机器学习系统与效率 / 分布式与联邦学习

39 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## AsyncMesh: Fully Asynchronous Optimization for Data and Pipeline Parallelism

**Authors:** Thalaiyasingam Ajanthan; Sameera Ramasinghe; Gil Avraham; Hadi Mohaghegh Dolatabadi; Chamin Hewa Koneputugodage; Violetta Shevchenko; Yan Zuo; Alexander Long

**ID:** 155437 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5e4wynkfYC>) | [PDF](<https://openreview.net/pdf?id=5e4wynkfYC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155437>)

Data and pipeline parallelism are key strategies for scaling neural network training across distributed devices, but their high communication cost necessitates co\-located computing clusters with fast interconnects, limiting their scalability\. We address this communication bottleneck by introducing \*asynchronous updates across both parallelism axes\*, relaxing the co\-location requirement at the expense of introducing staleness between pipeline stages and data parallel replicas\. To mitigate staleness, for pipeline parallelism, we adopt a weight look\-ahead approach, and for data parallelism, we introduce an \*asynchronous sparse averaging\* method equipped with an exponential moving average based correction mechanism\. We provide convergence guarantees for both sparse averaging and asynchronous updates\. Experiments on large\-scale language models demonstrate that our approach matches the performance of the fully synchronous baseline, while significantly reducing communication overhead\.

## Communication\-Efficient LLM Adaptation over Decentralized GPU Meshes

**Authors:** Sameera Ramasinghe; Shamane Siriwardhana; Thalaiyasingam Ajanthan; Hadi Mohaghegh Dolatabadi; Chamin Hewa Koneputugodage; Gil Avraham; Violetta Shevchenko; James Snewin; Karol Pajak; Harry Xi; Alexander Long

**ID:** 153942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HQjC0u4Aih>) | [PDF](<https://openreview.net/pdf?id=HQjC0u4Aih>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153942>)

Decentralized training enables large\-model training over low\-end GPUs and internet\-grade connections, but communication along both data\-parallel and pipeline\-parallel axes becomes the primary bottleneck\. We study post\-pretraining adaptation in this setting\. We propose an asynchronous two\-circuit system: a fast compressed training circuit drives throughput using activation masking for pipeline\-parallel \(PP\) transfer and compressed data\-parallel \(DP\) synchronization, while a slow anchor circuit runs occasional unmasked forward\-\-backward passes off the critical path\. Then, we introduce a spectral correction optimizer that uses these delayed anchor priors to denoise masked gradients without blocking the fast stream\. Although prior work has found aggressive activation compression unreliable, we show that masking supports post\-pretraining adaptation at high compression rates when anchored this way\. Pipeline\-parallel compression alone yields up to a 9x throughput gain, and combining it with data\-parallel compression increases beyond 40x over internet\-grade 200Mbps connections, while matching dense uncompressed performance across domain adaptation and continual pretraining\.

## Federated Unlearning with Gradient Adaptive Shaping

**Authors:** Siyin Huang; Yufan Liao; Yuelin Du; Yu Zhang

**ID:** 154090 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJ1Wmjsdsm>) | [PDF](<https://openreview.net/pdf?id=GJ1Wmjsdsm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154090>)

Federated unlearning aims to efficiently remove the influence of a specific client from a trained global model in federated learning without full retraining\. However, existing approaches struggle to preserve the utility of the remaining clients because unlearning can be unstable at both the client and server stages\. Local forgetting updates may become overly aggressive and destabilize client side optimization, while server aggregation can amplify conflicts between forgetting updates and retained client updates\. To address both failure modes within a unified framework, we propose Federated Unlearning with Gradient Adaptive Shaping \(FUGAS\), a history\-free gradient shaping framework that stabilizes the entire unlearning pipeline\. On the unlearning client side, we employ a bounded preference objective that utilizes the pre\-unlearning model predictions on the forgetting data as negative references to controllably steer the model away from unlearning client knowledge while requiring only minimal storage for reference caches rather than full historical updates\. On the server side, we introduce a compatibility projection mechanism that reshapes the aggregated unlearning update to remain compatible with directions estimated from retained clients\. We provide a theoretical analysis indicating that FUGAS promotes stability and ensures non\-increasing empirical risk on retained distributions while establishing an excess risk bound relative to retraining\. Extensive experiments demonstrate that FUGAS achieves effective unlearning while consistently maintaining high accuracy on retained data\.

## A typed tensor language for federated learning

**Authors:** Theofilos Mailis; Kalliopi\-Christina Despotidou; Konstantinos Filippopolitis; Yannis Foufoulas; Thanasis\-Michail Karampatsis; Andreas Ktenidis; Evdokia Mailli; Theodore Papamarkou; Yannis Ioannidis

**ID:** 150243 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jfzDfme1bL>) | [PDF](<https://openreview.net/pdf?id=jfzDfme1bL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150243>)

_Abstract unavailable from the accessible public sources._

## Heterogeneity\-aware Distillation for Federated Continual Learning

**Authors:** Gaozhuo Liu; Yichen Li; Xiuying Wang; Yulong Li; Chuang Zhao; Yankai Jiang; Imran Razzak

**ID:** 155355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6F5SkPuDh3>) | [PDF](<https://openreview.net/pdf?id=6F5SkPuDh3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155355>)

Federated Continual Learning \(FCL\) requires distributed clients to acquire new tasks while retaining previously learned knowledge\. In this paper, we revisit the heterogeneity challenge in FCL, which is composed of two distinct aspects: spatial static heterogeneity, e\.g\., initial data distribution and model architecture differences, and temporal dynamic heterogeneity, e\.g\., task shifts over time\. While existing methods acknowledge the presence of heterogeneity, they typically treat it in a unified manner by employing a single adaptive strategy without explicitly disentangling their impacts\. In contrast, we propose a heterogeneity\-aware distillation framework for FCL called Ha\-FCL, which is designed to handle spatial and temporal heterogeneity through tailored distillation strategies\. Specifically, Ha\-FCL combines width\-aware federated training with server\-side public\-anchor distillation, integrating multi\-layer feature distillation for architecture\-aware alignment with historical\-logit regularization and representation co\-distillation\. This forms a coordinated dual\-dimensional distillation scheme that balances adaptation to new tasks with retention of prior knowledge\. This enables more targeted knowledge transfer and leads to improved model performance under complex FCL scenarios\. We evaluate our method in various heterogeneous settings\. Compared with state\-of\-the\-art baselines, Ha\-FCL consistently improves test accuracy and shows better robustness under challenging heterogeneous FCL settings\.

## Communication\-Efficient Federated Learning of Latent Patient Representations from Multi\-Institutional EHRs

**Authors:** Zhiyu Yan; Shiao Liu; Rahul Mahajan; Anand Viswanathan; Christopher D Anderson; Rui Duan

**ID:** 151353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bAy37JhHLo>) | [PDF](<https://openreview.net/pdf?id=bAy37JhHLo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151353>)

Electronic health records \(EHRs\) contain rich health information for uncovering latent patient representations and clinically meaningful subgroups\. Learning from EHR data across institutions is valuable because representations learned at a single site may reflect local data patterns and lack generalizability, yet pooling patient\-level records across institutions is often impractical because of privacy constraints and communication costs\. We propose a communication\-efficient, non\-iterative federated spectral method for learning shared latent representations from multi\-institutional EHRs, in which each institution shares aggregate marginal frequencies and a low\-rank spectral summary while keeping patient\-level records local\. A central server aggregates these summaries with the pooled marginal frequencies to recover both the shared low\-rank structure and the canonical row\-normalization direction required for interpretable representation recovery\. We prove row\-wise recovery guarantees and error bounds, with a leading federated variance term matching a corresponding lower bound under explicit regularity conditions\. Simulations show that our method closely matches pooled analysis in estimating latent representations, improves as more sites contribute summaries, and outperforms single\-site and existing federated benchmarks across a range of data settings\. Applied to real\-world multi\-facility EHR data for stroke patients, the method learns interpretable patient representations that highlight clinically distinct subgroups and could help inform subgroup\-specific care\.

## Breaking BAD: Heterogeneous Byzantine\-Robust Federated Learning via Gather and Scatter Scores

**Authors:** Sena Ergisi; Luis Massny; Rawad Bitar

**ID:** 148208 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYNKoIyYhj>) | [PDF](<https://openreview.net/pdf?id=zYNKoIyYhj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148208>)

Byzantine\-robust Federated Learning \(FL\) designs aggregation rules that mitigate the impact of malicious clients\. When the data across honest clients are heterogeneous, honest model updates are inherently scattered\. This dispersion can be exploited by Byzantine adversaries who may collude to concentrate their updates, thereby circumventing state\-of\-the\-art robust aggregation methods and causing a Byzantine Adversarial Disruption \(BAD\) of the training process\. We propose a novel Byzantine\-robust FL scheme based on \*gather\* and \*scatter\* scores\. Our scoring technique captures concentration among Byzantine clients and prevents catastrophic failure under SotA attacks\. Through numerical experiments on FEMNIST, Shakespeare, and CIFAR\-10 datasets, we demonstrate that the proposed defense maintains high model accuracy, even in realistic FL scenarios\. Furthermore, we establish theoretical convergence guarantees for our method\.

## Faster Rates For  Federated Variational Inequalities

**Authors:** Guanghui Wang; Satyen Kale

**ID:** 152615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RmzepfWb3R>) | [PDF](<https://openreview.net/pdf?id=RmzepfWb3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152615>)

In this paper, we study federated optimization for solving stochastic variational inequalities \(VIs\), a problem that has attracted growing attention in recent years\. Despite substantial progress, a significant gap remains between existing convergence rates and the state\-of\-the\-art bounds known for federated convex optimization\. In this work, we address this limitation by establishing a series of improved convergence rates\. First, we show that, for general smooth and monotone variational inequalities, the classical Local Extra SGD algorithm admits tighter guarantees under a refined analysis\. Next, we identify an inherent limitation of Local Extra SGD, which can lead to excessive client drift\. Motivated by this observation, we propose a new algorithm, the Local Inexact Proximal Point Algorithm with Extra Step \(LIPPAX\), and show that it mitigates client drift and achieves improved guarantees in several regimes, including bounded Hessian, bounded operator, and low\-variance settings\. Finally, we extend our results to federated composite variational inequalities and establish improved convergence guarantees\.

## FedTrace: Generated\-Content\-Based Watermark Verification for Traitor Tracing in Federated Learning

**Authors:** Tianzhe Xiao; Haozhao Wang; Yichen Li; Qiyu Qin; Debin Liu; Ruixuan Li

**ID:** 148309 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ynVmgUSGjZ>) | [PDF](<https://openreview.net/pdf?id=ynVmgUSGjZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148309>)

As large generative models become widely deployed and customized, federated learning is increasingly used to adapt them while keeping user data local\. Because clients repeatedly receive up\-to\-date adapters, a malicious client can copy a dispatched adapter, use it offline, and monetize generated images without exposing the stolen weights or a queryable service\. Existing federated watermarking and traitor\-tracing methods usually assume white\-box access to suspect weights or black\-box query access to the deployed model\. In realistic generative\-model theft, however, the defender may only observe images that have already circulated\. We propose \\emph\{FedTrace\}, a generated\-content\-based watermark verification framework that attributes leaked federated models from suspicious generated images alone\. FedTrace couples three designs: a round\-wise watermark lifecycle that separates client identity distribution from global utility aggregation, a low\-drift reliable\-bit carrier that embeds identity in watermark positions stable under local adaptation, and anti\-collision coding with soft subset verification for distinguishing singleton and collusive leakage\. These components enable post\-local, collusion\-aware attribution from generated outputs alone, without suspect weights or online query interfaces\. Extensive experiments across customized diffusion datasets, base models, and federated settings show that FedTrace preserves detectable client identities under local adaptation and strengthens subset\-aware tracing against collusive leakage\.

## Utility\-Driven Clustered Federated Learning via Class\-wise Interaction Attribution

**Authors:** Zhongxu Wang; Yichen Li; Haozhao Wang; Hanlin Cai; chenqi; Ruixuan Li; Ozgur Akan

**ID:** 154062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GUPVvqCuHV>) | [PDF](<https://openreview.net/pdf?id=GUPVvqCuHV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154062>)

Clustered Federated Learning \(CFL\) mitigates statistical heterogeneity by grouping clients with similar data distributions\. However, existing CFL frameworks predominantly rely on proxy metrics, such as gradient or data similarities, which collapse fine\-grained class\-level similarity into macroscopic client\-level scores\. This coarse\-grained aggregation inherently masks critical class\-wise conflicts, inadvertently exposing the federation to severe negative transfer\. In this paper, we propose a fundamental paradigm shift from heuristic similarity to \*explicit value attribution\*\. We introduce \*\*FedCap\*\*, a novel utility\-driven CFL framework that explicitly quantifies class\-wise marginal utilities to capture the true generalization impact of local updates\. Guided by this attribution mechanism, FedCap employs a conflict\-aware clustering algorithm to systematically eliminate intra\-cluster negative transfer, while orchestrating safe, supply\-demand\-guided representation sharing across clusters\. Crucially, we provide rigorous theoretical guarantees demonstrating the robustness of our underlying attribution mechanism against four major types of distribution shifts\. Extensive experiments across diverse heterogeneity settings show that FedCap consistently achieves state\-of\-the\-art accuracy\. The code is available for anonymous access at https://anonymous\.4open\.science/r/FedCap\-605E\.

## Improved Robust Verifiable Federated Learning Based on Packed Secret Sharing

**Authors:** Jinhyuk Choi; Hyung Tae Lee

**ID:** 148144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvSw7s379j>) | [PDF](<https://openreview.net/pdf?id=zvSw7s379j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148144>)

Achieving both privacy and robustness against poisoning attacks remains a central challenge in federated learning \(FL\), since hiding individual updates makes attacks harder to detect and mitigate\. Recently, Mai et al\. \(NeurIPS 2024\) proposed RFLPA, a packed\-secret\-sharing \(PSS\)\-based realization of FLTrust, which weights client updates by their cosine similarity to a trusted server update\. In this paper, we show that RFLPA contains design flaws and mathematical errors in its use of PSS, making the protocol theoretically unsound and practically non\-functional\. We then propose an improved verifiable FL framework that restores correctness while retaining efficiency\. Our key insight is a reinterpretation of the algebraic structure of PSS, which leads to a new transposed degree reduction algorithm and a pairwise verification technique for dot products\. These primitives enable local matrix\-based operations without complex circuit evaluation and substantially reduce communication rounds compared with BGW\-style computation\. Building on them, we redesign the verifiable aggregation algorithm of RFLPA by introducing perpendicular vectors, reducing cosine similarity verification to a single dot\-product check and eliminating costly verifiable secret sharing during enrollment\. The resulting framework strictly improves efficiency, fixes the flaws of prior work, and preserves $N/3$\-robustness in malicious settings\. Our implementation and empirical evaluation confirm the feasibility of the resulting protocol for high\-dimensional FL updates\.

## Beyond Flat Gossip: Tiered Gossip Learning for Scalable Collaborative AI

**Authors:** Atul Sharma; Kavindu Herath; Saurabh Bagchi; Chaoyue Liu; Somali Chaterji

**ID:** 154579 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWWIf36yhc>) | [PDF](<https://openreview.net/pdf?id=CWWIf36yhc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154579>)

As collaborative machine learning scales to thousands of edge devices, two failure modes emerge: centralized federated learning creates server bottlenecks and single points of failure, while flat peer\-to\-peer systems force every node to increase its communication degree as the network grows\. We propose Tiered Gossip Learning \(TGL\), a two\-layer push–gossip–pull protocol that decouples data\-holding leaf nodes from a decentralized relay backbone\. In each round, leaves push local models to a subset of relays, relays gossip among themselves to mix models globally, and leaves pull updates from another random relay subset\. This asymmetric design keeps per\-leaf communication fixed as the network scales, offloading the mixing burden to a thin layer of higher\-capacity relays without relying on any central coordinator for aggregation\. Across CIFAR\-10, FEMNIST, and AG News, TGL matches or exceeds baseline accuracy with up to 80\\% fewer model exchanges\. We provide convergence guarantees under standard smoothness, bounded variance, and heterogeneity assumptions, with explicit stage\-wise consensus bounds characterizing how relay\-layer connectivity governs the global mixing rate\.

## Differentiable Exact Learning of Algorithms

**Authors:** Hristo Papazov; Francesco D&amp;amp;\#x27;Angelo; Nicolas Flammarion

**ID:** 148538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x9jhyvsLzO>) | [PDF](<https://openreview.net/pdf?id=x9jhyvsLzO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148538>)

We introduce a framework for differentiable exact learning of algorithms\. The framework couples a state\-tracking neural controller to an unbounded external environment and trains on policy\-trajectory observations \(PTOs\) \-\- traces that record the environment's evolution under an expert's actions without exposing the expert's internal state\. This supervision regime sidesteps Gold's impossibility barrier for input\-output recursive learning while avoiding the unrealistic internal\-state access required by prior provably correct approaches\. As controllers, we propose Differentiable Finite\-State Transducers \(DFSTs\), a minimalist multilinear model family that contains no nonlinearities and admits log\-parallel training via prefix scans\. Trained on tiny datasets, DFST and RNN controllers achieve error\-free generalization on binary and decimal addition and multiplication to operands thousands of times longer than the training examples\. Moreover, we provide strong empirical proof for exact learning of universal computation\. Finally, we develop an extraction procedure that recovers compact finite\-state transducers from trained controllers\. We prove under a geometric clustering assumption that for binary addition the extracted transducer exactly replicates the expert policy on all valid inputs \-\- certifying differentiable exact learning of the algorithm\.

## Fed\-SB: A Silver Bullet for Extreme Communication Efficiency and Performance in \(Private\) Federated LoRA Fine\-Tuning

**Authors:** Raghav Singhal; Kaustubh Ponkshe; Rohit Vartak; Lav Varshney; Praneeth Vepakomma

**ID:** 156778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=87UyFEhzyP>) | [PDF](<https://openreview.net/pdf?id=87UyFEhzyP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156778>)

Low\-Rank Adaptation \(LoRA\) has become ubiquitous for efficiently fine\-tuning foundation models\. However, federated fine\-tuning using LoRA is challenging due to suboptimal updates arising from traditional federated averaging of individual adapters\. Existing solutions either incur prohibitively high communication cost that scales linearly with the number of clients or suffer from performance degradation due to limited expressivity\. We introduce Fed\-SB, a novel approach for federated fine\-tuning of LLMs using LoRA\-SB, a recently proposed low\-rank adaptation method\. LoRA\-SB optimally aligns the optimization trajectory with the ideal low\-rank full fine\-tuning projection by learning a small square matrix \(R\) between adapters B and A, keeping other components fixed\. Direct averaging of R guarantees exact updates, substantially reducing communication cost, which remains independent of the number of clients, and enables scalability\. Fed\-SB achieves state\-of\-the\-art performance across commonsense reasoning, arithmetic reasoning, and language inference tasks while reducing communication costs by up to 230x\. In private settings, Fed\-SB further improves performance by \(1\) reducing trainable parameters, thereby lowering the noise required for differential privacy and \(2\) avoiding noise amplification introduced by other methods\. Overall, Fed\-SB offers a state\-of\-the\-art, efficient, and scalable solution for both private and non\-private federated fine\-tuning\. Our code is available publicly at: https://github\.com/CERT\-Lab/fed\-sb\.

## FedAdaVR: Adaptive Variance Reduction for Robust Federated Learning under Limited Client Participation

**Authors:** S M RUHUL KABIR HOWLADER; Xiao Chen; Yifei Xie; Lu Liu

**ID:** 153987 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H3RLFv3n4M>) | [PDF](<https://openreview.net/pdf?id=H3RLFv3n4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153987>)

_Abstract unavailable from the accessible public sources._

## FedAdaVR: Adaptive Variance Reduction for Robust Federated Learning under Limited Client Participation

**Authors:** S M RUHUL KABIR HOWLADER; Xiao Chen; Yifei Xie; Lu Liu

**ID:** 153987\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153987

[Paper](<https://openreview.net/forum?id=H3RLFv3n4M>) | [PDF](<https://openreview.net/pdf?id=H3RLFv3n4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153987>)

_Abstract unavailable from the accessible public sources._

## FedVaccine: Knowledge Recall after Spatial\-Temporal Catastrophic Forgetting in Federated Continual Learning via Gradient\-Based Vaccine

**Authors:** Hao Yu; Xin Yang; Boyang Fan; Xuemei Cao; Lingfei Ren; Hanlin Gu; Yang Liu; Qiang Yang

**ID:** 152313 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U1jzG8noWv>) | [PDF](<https://openreview.net/pdf?id=U1jzG8noWv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152313>)

Federated Continual Learning \(FCL\) suffers from spatial\-temporal catastrophic forgetting caused by sequential task learning on individual clients and the aggregation of heterogeneous client knowledge\. However, most existing methods either overemphasize preserving old knowledge, which restricts model plasticity for new tasks, or rely on training complex generative models for replay, incurring substantial computational overhead\. In the human immune system, immune memory is preserved implicitly and can be reactivated through vaccination even after long periods of dormancy\. Motivated by this, we propose \*\*\*FedVaccine\*\*\*, a novel framework that explicitly permits forgetting to preserve high plasticity for new tasks, while efficiently recovering past knowledge through re\-learning a compact vaccine set\. Specifically, the vaccine set for each task is synthesized by compress task gradient information under the guidance of the fine\-tuned local model, capturing representative data characteristics and task\-specific discriminative patterns\. Two novel components are also introduced: \*\*\*Priming &amp; Boosting\*\*\*, which encodes task\-specific knowledge in a compact spectral form, priming the model with essential information and enabling efficient memory boosting via vaccine set replay after forgetting; and \*\*\*Vaccination Aggregation\*\*\*, which aggregates vaccine sets from all clients to train a globally generalized model without accessing any raw private data\. Extensive experiments on three benchmarks demonstrate that FedVaccine achieves competitive performance, enables rapid knowledge recovery after forgetting, and incurs no additional overhead from training generative models\.

## FedSOUL: Federated Continual Unlearning via Spectral Orthogonality

**Authors:** Haoran Shi; Hao Zhu; Yifei Zhang; JUNRU ZHANG; Lizhen Cui; Yali Jiang; Xiaoli Tang; Han Yu

**ID:** 153586 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKJDo7EkPM>) | [PDF](<https://openreview.net/pdf?id=KKJDo7EkPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153586>)

_Abstract unavailable from the accessible public sources._

## Approximation Guarantees for Robust Aggregation in Federated Learning

**Authors:** Mélanie Cambus; Darya Melnyk; Tijana Milentijević; Stefan Schmid

**ID:** 155522 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ySjO4QTTH>) | [PDF](<https://openreview.net/pdf?id=4ySjO4QTTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155522>)

_Abstract unavailable from the accessible public sources._

## Beyond the Trial\-and\-Error Loop: Hybrid Projection and Automated Tuning for Distributed Training

**Authors:** Anshu Raina; Peyman Razaghi; Yuankai Chen; Cheng Yao; Yao Fu; Vidushi Goyal; Devang Patel; Wen Xie; Zhenyu Gu; Emad Barsoum

**ID:** 150603 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=guQo7FnJYI>) | [PDF](<https://openreview.net/pdf?id=guQo7FnJYI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150603>)

_Abstract unavailable from the accessible public sources._

## ASAP: Fast Adaptive Sliding Agnostic Poisoning Attack on Federated Learning

**Authors:** HUAZI PAN; Yanjun Zhang; Leo Yu Zhang; Scott D Adams; Abbas Z Kouzani; Suiyang Khoo

**ID:** 152944 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PDkEqBCau0>) | [PDF](<https://openreview.net/pdf?id=PDkEqBCau0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152944>)

_Abstract unavailable from the accessible public sources._

## Geometry\-Regularized Collapse Resistance via Consensus Enhancement for Federated Learning

**Authors:** Jingjing Zhu; Zhuang Qi; Lei Meng; Han Yu; Jie Zhang; Xiangxu Meng

**ID:** 151891 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XADFq5Hg3V>) | [PDF](<https://openreview.net/pdf?id=XADFq5Hg3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151891>)

_Abstract unavailable from the accessible public sources._

## Differentiable Exact Learning of Algorithms

**Authors:** Hristo Papazov; Francesco D&amp;amp;\#x27;Angelo; Nicolas Flammarion

**ID:** 148538\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148538

[Paper](<https://openreview.net/forum?id=x9jhyvsLzO>) | [PDF](<https://openreview.net/pdf?id=x9jhyvsLzO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148538>)

We introduce a framework for differentiable exact learning of algorithms\. The framework couples a state\-tracking neural controller to an unbounded external environment and trains on policy\-trajectory observations \(PTOs\) \-\- traces that record the environment's evolution under an expert's actions without exposing the expert's internal state\. This supervision regime sidesteps Gold's impossibility barrier for input\-output recursive learning while avoiding the unrealistic internal\-state access required by prior provably correct approaches\. As controllers, we propose Differentiable Finite\-State Transducers \(DFSTs\), a minimalist multilinear model family that contains no nonlinearities and admits log\-parallel training via prefix scans\. Trained on tiny datasets, DFST and RNN controllers achieve error\-free generalization on binary and decimal addition and multiplication to operands thousands of times longer than the training examples\. Moreover, we provide strong empirical proof for exact learning of universal computation\. Finally, we develop an extraction procedure that recovers compact finite\-state transducers from trained controllers\. We prove under a geometric clustering assumption that for binary addition the extracted transducer exactly replicates the expert policy on all valid inputs \-\- certifying differentiable exact learning of the algorithm\.

## Fed\-SB: A Silver Bullet for Extreme Communication Efficiency and Performance in \(Private\) Federated LoRA Fine\-Tuning

**Authors:** Raghav Singhal; Kaustubh Ponkshe; Rohit Vartak; Lav Varshney; Praneeth Vepakomma

**ID:** 156778\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156778

[Paper](<https://openreview.net/forum?id=87UyFEhzyP>) | [PDF](<https://openreview.net/pdf?id=87UyFEhzyP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156778>)

Low\-Rank Adaptation \(LoRA\) has become ubiquitous for efficiently fine\-tuning foundation models\. However, federated fine\-tuning using LoRA is challenging due to suboptimal updates arising from traditional federated averaging of individual adapters\. Existing solutions either incur prohibitively high communication cost that scales linearly with the number of clients or suffer from performance degradation due to limited expressivity\. We introduce Fed\-SB, a novel approach for federated fine\-tuning of LLMs using LoRA\-SB, a recently proposed low\-rank adaptation method\. LoRA\-SB optimally aligns the optimization trajectory with the ideal low\-rank full fine\-tuning projection by learning a small square matrix \(R\) between adapters B and A, keeping other components fixed\. Direct averaging of R guarantees exact updates, substantially reducing communication cost, which remains independent of the number of clients, and enables scalability\. Fed\-SB achieves state\-of\-the\-art performance across commonsense reasoning, arithmetic reasoning, and language inference tasks while reducing communication costs by up to 230x\. In private settings, Fed\-SB further improves performance by \(1\) reducing trainable parameters, thereby lowering the noise required for differential privacy and \(2\) avoiding noise amplification introduced by other methods\. Overall, Fed\-SB offers a state\-of\-the\-art, efficient, and scalable solution for both private and non\-private federated fine\-tuning\. Our code is available publicly at: https://github\.com/CERT\-Lab/fed\-sb\.

## ShadowFPT: Backdooring Federated Prompt Tuning via Shadow  Triggers

**Authors:** Kun Zhai; Teng Li; Yunhao Feng; Xingjun Ma

**ID:** 153368 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lshe1pbyOy>) | [PDF](<https://openreview.net/pdf?id=Lshe1pbyOy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153368>)

Federated Prompt Tuning \(FPT\) adapts large vision\-\-language models by freezing the pretrained backbone and optimizing only lightweight prompt parameters across clients\. Although this design improves communication and parameter efficiency, it creates an overlooked security risk\. Since the backbone is shared and frozen, a malicious client can induce backdoor behavior through the representation space while keeping its uploaded prompt updates close to benign ones\. We propose \\textbf\{ShadowFPT\}, a targeted backdoor attack that exploits this frozen\-backbone attack surface\. ShadowFPT first pretrains a learnable \\emph\{Shadow Trigger\} against the frozen CLIP visual encoder, using either auxiliary public data or the malicious client's local data, so that triggered inputs are steered toward the target class in representation space\. During federated prompt tuning, the malicious client adapts the trigger under the current global prompt and then optimizes its local prompt on both clean and triggered samples\. Only prompt parameters are uploaded to the server, while the trigger and frozen encoders remain local\. By shifting most of the attack burden from prompt updates to trigger\-induced representation steering, ShadowFPT achieves targeted misclassification while preserving prompt\-space stealthiness\. Across multiple datasets, aggregation rules, and non\-IID federated partitions, ShadowFPT increases the attack success rate from 19\.81\\% to 90\.36\\% in our main setting, while maintaining clean accuracy\. It remains effective across textual, visual, and joint vision\-\-language prompt tuning\. These results identify frozen backbones as stealthy and underexplored backdoor surfaces in federated prompt tuning, suggesting that defenses based only on prompt\-update anomaly detection are insufficient\.

## VOID: Backdoor Injection through Knowledge Vacuity in Federated Unlearning

**Authors:** Wenwei Zhao; Yuxuan Xie; Haiyun Liu; Jie Xu; Zhuo Lu

**ID:** 154478 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DIJLpUupvC>) | [PDF](<https://openreview.net/pdf?id=DIJLpUupvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154478>)

Federated unlearning \(FU\) enables federated systems to remove designated data from a trained global model, but its security risks remain poorly understood\. We show that calibration\-based FU introduces a structural vulnerability through finite\-step post\-hoc corrections, which leave behind \\emph\{knowledge vacuity\} in weakly constrained residual dimensions where the unlearned data's influence is suppressed while retained\-task recovery pressure remains limited\. We propose VOID, an unlearning\-phase backdoor attack that exploits knowledge vacuity to implant trigger semantics along the legitimate unlearning trajectory\. VOID identifies these residual dimensions through influence\-based trajectory estimation and neuron\-level vacuity profiling, then performs masked semantic substitution during unlearning\. Across datasets and FU methods, VOID achieves up to 99\\% attack success, preserves clean accuracy, and persists after post\-unlearning finetuning\. Our results show that approximate forgetting can expose writable capacity for adversarial reuse\.

## FedSEM: Mitigating Cross\-Client Evidence Drift in Federated Multiple Instance Learning

**Authors:** Zhiqiang Kou; Beidi Wang; Yuling Shi; Shengkun Zhu; Wei Tang; Xiaodong Gu; Jiankai Zuo; Di Jiang; Yu Zhang

**ID:** 151822 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XhoxhpfjPV>) | [PDF](<https://openreview.net/pdf?id=XhoxhpfjPV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151822>)

_Abstract unavailable from the accessible public sources._

## Semantic\-Statistical Prior Banks for Federated Low\-Shot Learning under Non\-IID Clients

**Authors:** Jiaying Wu; Can Gao; Lei Shi; Jia Luo; Dongmei Wei; Feifei Yang; Pengfei Zhang; Feifei Kou; Zhaoman Zhong

**ID:** 148708 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veIkEKipOB>) | [PDF](<https://openreview.net/pdf?id=veIkEKipOB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148708>)

Federated intrusion detection must adapt to rare attacks from only a few labeled flows per client, while client distributions are highly non\-IID and raw traffic cannot be centralized\. Existing few\-shot intrusion detectors typically construct class priors in centralized settings, and standard federated training does not provide an explicit mechanism for reusing cross\-client class statistics during local low\-shot adaptation\. We propose a semantic\-statistical prior bank for federated low\-shot intrusion detection\. Clients first participate in federated representation learning and submit protected class\-wise moment statistics through secure aggregation, from which the server constructs a global prior bank without accessing raw traffic\. During local episodic adaptation, label\-phrase embeddings retrieve relevant priors, which are combined with scarce support statistics through a maximum a posteriori \(MAP\) shrinkage estimator in the feature space\. The adapted class distributions are then used to train lightweight episode\-specific classifiers on each client\. Experiments on CICIDS2017 and CICDDoS2019 under 5\-way 1\-shot and 5\-shot non\-IID settings show consistent improvements over FedAvg and backbone\-matched baselines, with the largest gains appearing in 1\-shot and highly skewed client distributions\. With ResNet1D, the proposed adaptation improves 1\-shot F1 from 92\.97 to 95\.55 on CICIDS2017 and from 82\.13 to 88\.25 on CICDDoS2019\.

## Fed\-SB: A Silver Bullet for Extreme Communication Efficiency and Performance in \(Private\) Federated LoRA Fine\-Tuning

**Authors:** Raghav Singhal; Kaustubh Ponkshe; Rohit Vartak; Lav Varshney; Praneeth Vepakomma

**ID:** 156778\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156778

[Paper](<https://openreview.net/forum?id=87UyFEhzyP>) | [PDF](<https://openreview.net/pdf?id=87UyFEhzyP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156778>)

Low\-Rank Adaptation \(LoRA\) has become ubiquitous for efficiently fine\-tuning foundation models\. However, federated fine\-tuning using LoRA is challenging due to suboptimal updates arising from traditional federated averaging of individual adapters\. Existing solutions either incur prohibitively high communication cost that scales linearly with the number of clients or suffer from performance degradation due to limited expressivity\. We introduce Fed\-SB, a novel approach for federated fine\-tuning of LLMs using LoRA\-SB, a recently proposed low\-rank adaptation method\. LoRA\-SB optimally aligns the optimization trajectory with the ideal low\-rank full fine\-tuning projection by learning a small square matrix \(R\) between adapters B and A, keeping other components fixed\. Direct averaging of R guarantees exact updates, substantially reducing communication cost, which remains independent of the number of clients, and enables scalability\. Fed\-SB achieves state\-of\-the\-art performance across commonsense reasoning, arithmetic reasoning, and language inference tasks while reducing communication costs by up to 230x\. In private settings, Fed\-SB further improves performance by \(1\) reducing trainable parameters, thereby lowering the noise required for differential privacy and \(2\) avoiding noise amplification introduced by other methods\. Overall, Fed\-SB offers a state\-of\-the\-art, efficient, and scalable solution for both private and non\-private federated fine\-tuning\. Our code is available publicly at: https://github\.com/CERT\-Lab/fed\-sb\.

## FedVaccine: Knowledge Recall after Spatial\-Temporal Catastrophic Forgetting in Federated Continual Learning via Gradient\-Based Vaccine

**Authors:** Hao Yu; Xin Yang; Boyang Fan; Xuemei Cao; Lingfei Ren; Hanlin Gu; Yang Liu; Qiang Yang

**ID:** 152313\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152313

[Paper](<https://openreview.net/forum?id=U1jzG8noWv>) | [PDF](<https://openreview.net/pdf?id=U1jzG8noWv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152313>)

Federated Continual Learning \(FCL\) suffers from spatial\-temporal catastrophic forgetting caused by sequential task learning on individual clients and the aggregation of heterogeneous client knowledge\. However, most existing methods either overemphasize preserving old knowledge, which restricts model plasticity for new tasks, or rely on training complex generative models for replay, incurring substantial computational overhead\. In the human immune system, immune memory is preserved implicitly and can be reactivated through vaccination even after long periods of dormancy\. Motivated by this, we propose \*\*\*FedVaccine\*\*\*, a novel framework that explicitly permits forgetting to preserve high plasticity for new tasks, while efficiently recovering past knowledge through re\-learning a compact vaccine set\. Specifically, the vaccine set for each task is synthesized by compress task gradient information under the guidance of the fine\-tuned local model, capturing representative data characteristics and task\-specific discriminative patterns\. Two novel components are also introduced: \*\*\*Priming &amp; Boosting\*\*\*, which encodes task\-specific knowledge in a compact spectral form, priming the model with essential information and enabling efficient memory boosting via vaccine set replay after forgetting; and \*\*\*Vaccination Aggregation\*\*\*, which aggregates vaccine sets from all clients to train a globally generalized model without accessing any raw private data\. Extensive experiments on three benchmarks demonstrate that FedVaccine achieves competitive performance, enables rapid knowledge recovery after forgetting, and incurs no additional overhead from training generative models\.

## Differentiable Exact Learning of Algorithms

**Authors:** Hristo Papazov; Francesco D&amp;amp;\#x27;Angelo; Nicolas Flammarion

**ID:** 148538\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148538

[Paper](<https://openreview.net/forum?id=x9jhyvsLzO>) | [PDF](<https://openreview.net/pdf?id=x9jhyvsLzO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148538>)

We introduce a framework for differentiable exact learning of algorithms\. The framework couples a state\-tracking neural controller to an unbounded external environment and trains on policy\-trajectory observations \(PTOs\) \-\- traces that record the environment's evolution under an expert's actions without exposing the expert's internal state\. This supervision regime sidesteps Gold's impossibility barrier for input\-output recursive learning while avoiding the unrealistic internal\-state access required by prior provably correct approaches\. As controllers, we propose Differentiable Finite\-State Transducers \(DFSTs\), a minimalist multilinear model family that contains no nonlinearities and admits log\-parallel training via prefix scans\. Trained on tiny datasets, DFST and RNN controllers achieve error\-free generalization on binary and decimal addition and multiplication to operands thousands of times longer than the training examples\. Moreover, we provide strong empirical proof for exact learning of universal computation\. Finally, we develop an extraction procedure that recovers compact finite\-state transducers from trained controllers\. We prove under a geometric clustering assumption that for binary addition the extracted transducer exactly replicates the expert policy on all valid inputs \-\- certifying differentiable exact learning of the algorithm\.

## AsyncMesh: Fully Asynchronous Optimization for Data and Pipeline Parallelism

**Authors:** Thalaiyasingam Ajanthan; Sameera Ramasinghe; Gil Avraham; Hadi Mohaghegh Dolatabadi; Chamin Hewa Koneputugodage; Violetta Shevchenko; Yan Zuo; Alexander Long

**ID:** 155437\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155437

[Paper](<https://openreview.net/forum?id=5e4wynkfYC>) | [PDF](<https://openreview.net/pdf?id=5e4wynkfYC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155437>)

Data and pipeline parallelism are key strategies for scaling neural network training across distributed devices, but their high communication cost necessitates co\-located computing clusters with fast interconnects, limiting their scalability\. We address this communication bottleneck by introducing \*asynchronous updates across both parallelism axes\*, relaxing the co\-location requirement at the expense of introducing staleness between pipeline stages and data parallel replicas\. To mitigate staleness, for pipeline parallelism, we adopt a weight look\-ahead approach, and for data parallelism, we introduce an \*asynchronous sparse averaging\* method equipped with an exponential moving average based correction mechanism\. We provide convergence guarantees for both sparse averaging and asynchronous updates\. Experiments on large\-scale language models demonstrate that our approach matches the performance of the fully synchronous baseline, while significantly reducing communication overhead\.

## Communication\-Efficient LLM Adaptation over Decentralized GPU Meshes

**Authors:** Sameera Ramasinghe; Shamane Siriwardhana; Thalaiyasingam Ajanthan; Hadi Mohaghegh Dolatabadi; Chamin Hewa Koneputugodage; Gil Avraham; Violetta Shevchenko; James Snewin; Karol Pajak; Harry Xi; Alexander Long

**ID:** 153942\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153942

[Paper](<https://openreview.net/forum?id=HQjC0u4Aih>) | [PDF](<https://openreview.net/pdf?id=HQjC0u4Aih>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153942>)

Decentralized training enables large\-model training over low\-end GPUs and internet\-grade connections, but communication along both data\-parallel and pipeline\-parallel axes becomes the primary bottleneck\. We study post\-pretraining adaptation in this setting\. We propose an asynchronous two\-circuit system: a fast compressed training circuit drives throughput using activation masking for pipeline\-parallel \(PP\) transfer and compressed data\-parallel \(DP\) synchronization, while a slow anchor circuit runs occasional unmasked forward\-\-backward passes off the critical path\. Then, we introduce a spectral correction optimizer that uses these delayed anchor priors to denoise masked gradients without blocking the fast stream\. Although prior work has found aggressive activation compression unreliable, we show that masking supports post\-pretraining adaptation at high compression rates when anchored this way\. Pipeline\-parallel compression alone yields up to a 9x throughput gain, and combining it with data\-parallel compression increases beyond 40x over internet\-grade 200Mbps connections, while matching dense uncompressed performance across domain adaptation and continual pretraining\.

## FedSOUL: Federated Continual Unlearning via Spectral Orthogonality

**Authors:** Haoran Shi; Hao Zhu; Yifei Zhang; JUNRU ZHANG; Lizhen Cui; Yali Jiang; Xiaoli Tang; Han Yu

**ID:** 153586\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153586

[Paper](<https://openreview.net/forum?id=KKJDo7EkPM>) | [PDF](<https://openreview.net/pdf?id=KKJDo7EkPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153586>)

_Abstract unavailable from the accessible public sources._

## Improved Robust Verifiable Federated Learning Based on Packed Secret Sharing

**Authors:** Jinhyuk Choi; Hyung Tae Lee

**ID:** 148144\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148144

[Paper](<https://openreview.net/forum?id=zvSw7s379j>) | [PDF](<https://openreview.net/pdf?id=zvSw7s379j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148144>)

Achieving both privacy and robustness against poisoning attacks remains a central challenge in federated learning \(FL\), since hiding individual updates makes attacks harder to detect and mitigate\. Recently, Mai et al\. \(NeurIPS 2024\) proposed RFLPA, a packed\-secret\-sharing \(PSS\)\-based realization of FLTrust, which weights client updates by their cosine similarity to a trusted server update\. In this paper, we show that RFLPA contains design flaws and mathematical errors in its use of PSS, making the protocol theoretically unsound and practically non\-functional\. We then propose an improved verifiable FL framework that restores correctness while retaining efficiency\. Our key insight is a reinterpretation of the algebraic structure of PSS, which leads to a new transposed degree reduction algorithm and a pairwise verification technique for dot products\. These primitives enable local matrix\-based operations without complex circuit evaluation and substantially reduce communication rounds compared with BGW\-style computation\. Building on them, we redesign the verifiable aggregation algorithm of RFLPA by introducing perpendicular vectors, reducing cosine similarity verification to a single dot\-product check and eliminating costly verifiable secret sharing during enrollment\. The resulting framework strictly improves efficiency, fixes the flaws of prior work, and preserves $N/3$\-robustness in malicious settings\. Our implementation and empirical evaluation confirm the feasibility of the resulting protocol for high\-dimensional FL updates\.

## Rehearsal\-Free Statistical Prototype Regularization for Federated Incremental Learning

**Authors:** Xiuying Wang; Yichen Li; Jiahua Cheng; Xiwei Liu; Chuang Zhao; Bo Liu; Imran Razzak

**ID:** 148798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2AOJ4JiUk>) | [PDF](<https://openreview.net/pdf?id=v2AOJ4JiUk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148798>)

Federated Incremental Learning \(FIL\) aims to learn sequential tasks across distributed clients under strict privacy constraints while mitigating catastrophic forgetting\. However, existing methods often rely on storing, transmitting, or generating previous data to retrain the model, which not only introduces potential privacy risks but also incurs additional memory, communication, and computational costs, thereby limiting their deployment on resource\-constrained edge devices\. To tackle this challenge, we propose \\textit\{SPR\-FIL\}, a novel rehearsal\-free and lightweight \\underline\{S\}tatistical \\underline\{P\}rototype \\underline\{R\}egularization framework for \\underline\{F\}ederated \\underline\{I\}ncremental \\underline\{L\}earning that leverages Gaussian statistics and preserves previous knowledge through aligned prototypes and subspace\-constrained encoder updates\. More specifically, the server aggregates client\-side statistics into global prototypes and dynamically aligns historical prototypes with the evolving feature space through anchor\-based moment matching\. Locally, clients utilize these aligned prototypes to induce virtual posteriors which serve as soft supervision for distillation while encoder updates are further regularized by projecting gradients onto the orthogonal complement of covariance\-induced historical knowledge subspaces\. Extensive experiments demonstrate that SPR\-FIL is model\-agnostic, communication\-efficient, and consistently outperforms state\-of\-the\-art methods across various FIL settings, achieving improvements of up to 9\.73\\%\.

## Heterogeneity\-aware Distillation for Federated Continual Learning

**Authors:** Gaozhuo Liu; Yichen Li; Xiuying Wang; Yulong Li; Chuang Zhao; Yankai Jiang; Imran Razzak

**ID:** 155355\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155355

[Paper](<https://openreview.net/forum?id=6F5SkPuDh3>) | [PDF](<https://openreview.net/pdf?id=6F5SkPuDh3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155355>)

Federated Continual Learning \(FCL\) requires distributed clients to acquire new tasks while retaining previously learned knowledge\. In this paper, we revisit the heterogeneity challenge in FCL, which is composed of two distinct aspects: spatial static heterogeneity, e\.g\., initial data distribution and model architecture differences, and temporal dynamic heterogeneity, e\.g\., task shifts over time\. While existing methods acknowledge the presence of heterogeneity, they typically treat it in a unified manner by employing a single adaptive strategy without explicitly disentangling their impacts\. In contrast, we propose a heterogeneity\-aware distillation framework for FCL called Ha\-FCL, which is designed to handle spatial and temporal heterogeneity through tailored distillation strategies\. Specifically, Ha\-FCL combines width\-aware federated training with server\-side public\-anchor distillation, integrating multi\-layer feature distillation for architecture\-aware alignment with historical\-logit regularization and representation co\-distillation\. This forms a coordinated dual\-dimensional distillation scheme that balances adaptation to new tasks with retention of prior knowledge\. This enables more targeted knowledge transfer and leads to improved model performance under complex FCL scenarios\. We evaluate our method in various heterogeneous settings\. Compared with state\-of\-the\-art baselines, Ha\-FCL consistently improves test accuracy and shows better robustness under challenging heterogeneous FCL settings\.

## Exploration via Exploitation: The Blessing of Reward Diversity in Personalized Federated RL

**Authors:** Jiin Woo; Gauri Joshi; Yuejie Chi

**ID:** 152906 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PWig4U4G3e>) | [PDF](<https://openreview.net/pdf?id=PWig4U4G3e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152906>)

_Abstract unavailable from the accessible public sources._

## Semantic\-Bridge Federated Learning: Bridging CLIP Semantics for Heterogeneous FL

**Authors:** Leixuhai Xu; Xiangtao Zhang; Hailong Yan; Le Zhang

**ID:** 153793 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdjYe5yG0A>) | [PDF](<https://openreview.net/pdf?id=IdjYe5yG0A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153793>)

_Abstract unavailable from the accessible public sources._

