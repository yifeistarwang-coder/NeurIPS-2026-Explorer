# ML Systems &amp; Efficiency / Distributed and Federated Learning

机器学习系统与效率 / 分布式与联邦学习

48 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Communication\-Efficient Federated Learning of Latent Patient Representations from Multi\-Institutional EHRs

**Authors:** Zhiyu Yan; Shiao Liu; Rahul Mahajan; Anand Viswanathan; Christopher D Anderson; Rui Duan

**ID:** 151353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bAy37JhHLo>) | [PDF](<https://openreview.net/pdf?id=bAy37JhHLo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151353>)

Electronic health records \(EHRs\) contain rich health information for uncovering latent patient representations and clinically meaningful subgroups\. Learning from EHR data across institutions is valuable because representations learned at a single site may reflect local data patterns and lack generalizability, yet pooling patient\-level records across institutions is often impractical because of privacy constraints and communication costs\. We propose a communication\-efficient, non\-iterative federated spectral method for learning shared latent representations from multi\-institutional EHRs, in which each institution shares aggregate marginal frequencies and a low\-rank spectral summary while keeping patient\-level records local\. A central server aggregates these summaries with the pooled marginal frequencies to recover both the shared low\-rank structure and the canonical row\-normalization direction required for interpretable representation recovery\. We prove row\-wise recovery guarantees and error bounds, with a leading federated variance term matching a corresponding lower bound under explicit regularity conditions\. Simulations show that our method closely matches pooled analysis in estimating latent representations, improves as more sites contribute summaries, and outperforms single\-site and existing federated benchmarks across a range of data settings\. Applied to real\-world multi\-facility EHR data for stroke patients, the method learns interpretable patient representations that highlight clinically distinct subgroups and could help inform subgroup\-specific care\.

## Energy Is All We Need: Beyond FLOPs in Model\-Heterogeneous Federated Learning

**Authors:** Sercan Yesilkoy; Yunseok Kang; Yoon\-Ho Choi

**ID:** 151795 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyElCGNMrd>) | [PDF](<https://openreview.net/pdf?id=XyElCGNMrd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151795>)

Most energy\-efficient federated learning \(FL\) methods report FLOPs or parameter reductions as evidence of energy savings\. However, real GPU energy consumption differs across model architectures in ways that these computational proxies do not capture\. In this work, we conduct an empirical study on reducing real GPU energy consumption in model\-heterogeneous FL, where clients maintain distinct architectures and coordinate solely through shared prototypes\. Through systematic experimentation with hardware\-level energy measurements, we propose and validate two complementary mechanisms to make model\-heterogeneous FL efficient in terms of real energy\. First, Prototype\-Aware Structured Pruning \(PASP\) evaluates each channel by the product of its batch\-normalization scale magnitude and its gradient with respect to the prototype alignment loss\-\-\-rather than the task loss\-\-\-preserving channels critical for cross\-client feature alignment while physically removing the rest\. Second, Energy\-Aware Training Scheduling \(EATS\) adaptively allocates local epochs to each client based on epoch\-wise prototype alignment quality per unit energy, using smoothed alignment\-\-energy profiles with a knee\-point cutoff to prevent energy waste on epochs that yield diminishing alignment gains or amplify local drift\. We investigate each mechanism's impact on accuracy and real energy consumption, as well as explore the impact of using both mechanisms simultaneously\. All energy figures are obtained from GPU power monitoring rather than computational proxies, providing an empirically grounded evaluation of energy efficiency in heterogeneous federations\.

## Geometry\-Aware Subspace Perturbation for Heterogeneous Federated Learning

**Authors:** Xiangtao Zhang; Hailong Yan; Obed Irihose; Joey Tianyi Zhou; Chee Seng Chan; Ce Zhu; Le Zhang

**ID:** 150455 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hucJI0EfE9>) | [PDF](<https://openreview.net/pdf?id=hucJI0EfE9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150455>)

We propose a geometry\-aware perturbation framework that explicitly models the low\-rank, anisotropic, and evolving structure of gradient dynamics to improve generalization in heterogeneous federated learning \(HFL\)\. Our approach is built upon three key components\. First, we represent perturbations within a low\-dimensional subspace that captures the dominant directions of gradient trajectories\. Second, we generate perturbations through a structure\-aware sampling strategy that aligns with the covariance of projected gradients, enabling distribution\-aware exploration\. Third, we introduce an adaptive mechanism that dynamically adjusts both the magnitude and the structure of perturbations to match the evolving optimization process\. Extensive experiments demonstrate that the proposed method consistently improves generalization across diverse HFL benchmarks, achieving up to a $4\.49\\%$ improvement on the $\\textit\{Office10\}$ dataset with minimal computational overhead\.

## Can Model Merging Improve Aggregation in DiLoCo?

**Authors:** Stefan Horoi; Benjamin Thérien; Guy Wolf; Eugene Belilovsky

**ID:** 154543 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Co0vrgB98e>) | [PDF](<https://openreview.net/pdf?id=Co0vrgB98e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154543>)

Model merging techniques, which aggregate independently finetuned models into one to combine their capabilities, have become a topic of significant interest in recent years, with a broad array of methods having been proposed to tackle this problem\. Simultaneously, an emerging trend in distributed learning has been the use of methods such as local SGD and DiLoCo, which greatly reduce communication costs by periodically aggregating the independently trained local models\. However, these communication\-efficient methods have been shown to degrade in performance relative to the FLOP\-matched data\-parallel gold standard as the number of independent local models grows and as the number of local training steps before global communication is increased\. In this work, we draw an explicit analogy between the pseudo\-gradient aggregation step in local SGD/DiLoCo and task arithmetic\-based model merging, establishing a straightforward way to utilize merging methods in the context of distributed optimization\. We then evaluate multiple state\-of\-the\-art model merging methods in this setting and identify one method in particular, Iso\-C, as a promising approach for improving DiLoCo\. We find that DiLoCo SGD with Iso\-C aggregation outperforms not only simple pseudo\-gradient averaging but even the momentum\-based DiLoCo, despite lacking a momentum mechanism itself\. Building on this finding, we propose IsoLoCo, which adapts Iso\-C for distributed training by equipping it with Nesterov momentum\. Our empirical evaluations on language model pre\-training across varying numbers of local workers show that IsoLoCo significantly outperforms DiLoCo, with the gap between them widening as the number of workers increases\. This advantage remains present across model sizes and inner step counts, confirming that merging\-inspired aggregation is an effective strategy for low\-communication distributed training\.

## Co\-Evolving Policy Distillation

**Authors:** Naibin Gu; Chenxu Yang; Qingyi Si; Chuanyu Qin; Dingyu Yao; Peng Fu; Zheng Lin; Weiping Wang; Nan Duan; Jiaqi Wang

**ID:** 152206 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UmuBorIdCx>) | [PDF](<https://openreview.net/pdf?id=UmuBorIdCx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152206>)

RLVR and OPD have become standard paradigms for post\-training\. We provide a unified analysis of these two paradigms in consolidating multiple expert capabilities into a single model, identifying capability loss in different ways: mixed RLVR suffers from inter\-capability divergence cost, while the pipeline of first training experts and then performing OPD, though avoiding divergence, fails to fully absorb teacher capabilities due to large behavioral pattern gaps between teacher and student\. We propose \*\*Co\-Evolving Policy Distillation \(CoPD\)\*\*, which encourages parallel training of experts and introduces OPD during each expert's ongoing RLVR training rather than after complete expert training, with experts serving as mutual teachers \(making OPD bidirectional\) to co\-evolve\. This enables more consistent behavioral patterns among experts while maintaining sufficient complementary knowledge throughout\. Experiments validate that CoPD achieves all\-in\-one integration of text, image, and video reasoning capabilities, outperforming strong baselines such as mixed RLVR and MOPD, and even surpassing domain\-specific experts\.

## Utility\-Driven Clustered Federated Learning via Class\-wise Interaction Attribution

**Authors:** Zhongxu Wang; Yichen Li; Haozhao Wang; Hanlin Cai; chenqi; Ruixuan Li; Ozgur Akan

**ID:** 154062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GUPVvqCuHV>) | [PDF](<https://openreview.net/pdf?id=GUPVvqCuHV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154062>)

Clustered Federated Learning \(CFL\) mitigates statistical heterogeneity by grouping clients with similar data distributions\. However, existing CFL frameworks predominantly rely on proxy metrics, such as gradient or data similarities, which collapse fine\-grained class\-level similarity into macroscopic client\-level scores\. This coarse\-grained aggregation inherently masks critical class\-wise conflicts, inadvertently exposing the federation to severe negative transfer\. In this paper, we propose a fundamental paradigm shift from heuristic similarity to \*explicit value attribution\*\. We introduce \*\*FedCap\*\*, a novel utility\-driven CFL framework that explicitly quantifies class\-wise marginal utilities to capture the true generalization impact of local updates\. Guided by this attribution mechanism, FedCap employs a conflict\-aware clustering algorithm to systematically eliminate intra\-cluster negative transfer, while orchestrating safe, supply\-demand\-guided representation sharing across clusters\. Crucially, we provide rigorous theoretical guarantees demonstrating the robustness of our underlying attribution mechanism against four major types of distribution shifts\. Extensive experiments across diverse heterogeneity settings show that FedCap consistently achieves state\-of\-the\-art accuracy\. The code is available for anonymous access at https://anonymous\.4open\.science/r/FedCap\-605E\.

## Beyond Flat Gossip: Tiered Gossip Learning for Scalable Collaborative AI

**Authors:** Atul Sharma; Kavindu Herath; Saurabh Bagchi; Chaoyue Liu; Somali Chaterji

**ID:** 154579 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWWIf36yhc>) | [PDF](<https://openreview.net/pdf?id=CWWIf36yhc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154579>)

As collaborative machine learning scales to thousands of edge devices, two failure modes emerge: centralized federated learning creates server bottlenecks and single points of failure, while flat peer\-to\-peer systems force every node to increase its communication degree as the network grows\. We propose Tiered Gossip Learning \(TGL\), a two\-layer push–gossip–pull protocol that decouples data\-holding leaf nodes from a decentralized relay backbone\. In each round, leaves push local models to a subset of relays, relays gossip among themselves to mix models globally, and leaves pull updates from another random relay subset\. This asymmetric design keeps per\-leaf communication fixed as the network scales, offloading the mixing burden to a thin layer of higher\-capacity relays without relying on any central coordinator for aggregation\. Across CIFAR\-10, FEMNIST, and AG News, TGL matches or exceeds baseline accuracy with up to 80\\% fewer model exchanges\. We provide convergence guarantees under standard smoothness, bounded variance, and heterogeneity assumptions, with explicit stage\-wise consensus bounds characterizing how relay\-layer connectivity governs the global mixing rate\.

## Semantic\-Statistical Prior Banks for Federated Low\-Shot Learning under Non\-IID Clients

**Authors:** Jiaying Wu; Can Gao; Lei Shi; Jia Luo; Dongmei Wei; Feifei Yang; Pengfei Zhang; Feifei Kou; Zhaoman Zhong

**ID:** 148708 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veIkEKipOB>) | [PDF](<https://openreview.net/pdf?id=veIkEKipOB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148708>)

Federated intrusion detection must adapt to rare attacks from only a few labeled flows per client, while client distributions are highly non\-IID and raw traffic cannot be centralized\. Existing few\-shot intrusion detectors typically construct class priors in centralized settings, and standard federated training does not provide an explicit mechanism for reusing cross\-client class statistics during local low\-shot adaptation\. We propose a semantic\-statistical prior bank for federated low\-shot intrusion detection\. Clients first participate in federated representation learning and submit protected class\-wise moment statistics through secure aggregation, from which the server constructs a global prior bank without accessing raw traffic\. During local episodic adaptation, label\-phrase embeddings retrieve relevant priors, which are combined with scarce support statistics through a maximum a posteriori \(MAP\) shrinkage estimator in the feature space\. The adapted class distributions are then used to train lightweight episode\-specific classifiers on each client\. Experiments on CICIDS2017 and CICDDoS2019 under 5\-way 1\-shot and 5\-shot non\-IID settings show consistent improvements over FedAvg and backbone\-matched baselines, with the largest gains appearing in 1\-shot and highly skewed client distributions\. With ResNet1D, the proposed adaptation improves 1\-shot F1 from 92\.97 to 95\.55 on CICIDS2017 and from 82\.13 to 88\.25 on CICDDoS2019\.

## FedAdaVR: Adaptive Variance Reduction for Robust Federated Learning under Limited Client Participation

**Authors:** S M RUHUL KABIR HOWLADER; Xiao Chen; Yifei Xie; Lu Liu

**ID:** 153987 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H3RLFv3n4M>) | [PDF](<https://openreview.net/pdf?id=H3RLFv3n4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153987>)

Federated learning \(FL\) encounters substantial challenges due to heterogeneity, leading to gradient noise, client drift, and partial client participation errors, the last of which is the most pervasive but remains insufficiently addressed in current literature\. In this paper, we propose FedAdaVR, a novel FL algorithm aimed at solving heterogeneity issues caused by sporadic client participation by incorporating an adaptive optimiser with a variance reduction technique\. This method takes advantage of the most recent stored updates from clients, even when they are absent from the current training round, thereby emulating their presence\. Furthermore, we propose FedAdaVR\-Quant, which stores client updates in quantised form, significantly reducing the memory requirements \(by 50%, 75%, and 87\.5%\) of FedAdaVR while maintaining highly competitive model performance\. We analyse the convergence behaviour of FedAdaVR under general nonconvex conditions and prove that our proposed algorithm can eliminate partial client participation error\. Extensive experiments conducted on multiple datasets, under both independent and identically distributed \(IID\) and non\-IID settings, demonstrate that FedAdaVR consistently outperforms state\-of\-the\-art baseline methods\.

## Flux: Online, Fine\-Grained Data Scheduling for Training Machine Learning Interatomic Potentials

**Authors:** Yuanchang Zhou; Chen Wang; Hongtao Xu; Mingzhen Li; Guangming Tan; Weile Jia

**ID:** 151170 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cTBlOIoXV7>) | [PDF](<https://openreview.net/pdf?id=cTBlOIoXV7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151170>)

Large\-scale training of machine learning interatomic potentials \(MLIPs\) increasingly relies on data parallelism over heterogeneous atomistic data\. In this setting, atom count captures an important part of the per\-rank workload, but structures with similar atom counts can still induce different graph workloads through variations in graph count, cutoff edges, higher\-order geometric features, and graph\-collation overhead\. This makes conventional atom\-count batching and offline load tables both incomplete and inflexible, especially when the model architecture, cutoff radius, or data mixture changes\. We present Flux, an online workload\-aware scheduler for distributed MLIP training\. Flux estimates structure\-dependent workload signals from lightweight physical and geometric priors during data loading, calibrates them against runtime and memory costs, and forms balanced, memory\-feasible local mini\-batches across data\-parallel ranks\. Without requiring precomputed graph metadata, Flux can be used as a drop\-in replacement for the standard distributed sampler, making it flexible and portable across training setups\. Across large\-scale atomistic datasets and three representative MLIP architectures, eSEN, MatRIS, and AllScAIP, Flux improves training throughput by up to 2\.23\-\-4\.76$\\times$ without degrading convergence\.

## Exploration via Exploitation: The Blessing of Reward Diversity in Personalized Federated RL

**Authors:** Jiin Woo; Gauri Joshi; Yuejie Chi

**ID:** 152906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PWig4U4G3e>) | [PDF](<https://openreview.net/pdf?id=PWig4U4G3e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152906>)

While federated reinforcement learning has traditionally guaranteed high efficiency in homogeneous environments, collaboration is often hindered when agents possess distinct environments and goals\. In this paper, we flip this paradigm, framing reward heterogeneity not as a hurdle to consensus, but as a structural asset that catalyzes exploration\. We first propose Personalized Federated Upper Confidence Bound Value Iteration \(PF\-UCBVI\), which achieves optimal linear speedup by decoupling shared dynamics from personalized objectives\. To eliminate the risks of explicit exploration, we then introduce Personalized Federated Exploration\-Free Value Iteration \(PF\-EFVI\), a purely greedy algorithm that leverages reward diversity to ensure state\-action coverage\. We prove that PF\-EFVI attains logarithmic regret without explicit exploration bonuses under sufficient reward diversity\. Our results show that agent disagreement is a vital resource that shifts the exploration burden from temporal complexity to spatial diversity, enabling safe and efficient collective learning\.

## Semantic\-Bridge Federated Learning: Bridging CLIP Semantics for Heterogeneous FL

**Authors:** Leixuhai Xu; Xiangtao Zhang; Hailong Yan; Le Zhang

**ID:** 153793 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdjYe5yG0A>) | [PDF](<https://openreview.net/pdf?id=IdjYe5yG0A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153793>)

Federated learning \(FL\) suffers from severe performance degradation under statistical heterogeneity, where label skew and domain shift induce representation drift and biased decision boundaries\. While vision\-\-language models such as CLIP provide transferable semantic priors, raw CLIP embeddings are noisy, highly correlated, and not directly aligned with the latent space of lightweight federated classifiers\. We propose $\\textbf\{Semantic\-Bridge Federated Learning\}$ \(SBFL\), a framework that transfers pre\-trained vision\-\-language semantics into heterogeneous FL without accessing raw client data or requiring online CLIP inference\. SBFL constructs text\-verified semantic banks, learns a server\-side semantic bridge that maps CLIP\-derived features into student\-compatible teacher spaces, and regularizes local training through mixed semantic prototype alignment and quality\-aware semantic replay\. Experiments on CIFAR\-10, CIFAR\-100, Tiny\-ImageNet, Office\-Caltech 10, and Digit5 show that SBFL consistently improves the average performance of representative FL backbones under both label\-skewed and domain\-shifted settings\. Analysis further shows that the semantic bridge converts highly correlated CLIP priors into more separable teacher\-space geometry, explaining its effectiveness in improving representation alignment and global generalization\. Our code will be released upon publication\.

## FedVaccine: Knowledge Recall after Spatial\-Temporal Catastrophic Forgetting in Federated Continual Learning via Gradient\-Based Vaccine

**Authors:** Hao Yu; Xin Yang; Boyang Fan; Xuemei Cao; Lingfei Ren; Hanlin Gu; Yang Liu; Qiang Yang

**ID:** 152313 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U1jzG8noWv>) | [PDF](<https://openreview.net/pdf?id=U1jzG8noWv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152313>)

Federated Continual Learning \(FCL\) suffers from spatial\-temporal catastrophic forgetting caused by sequential task learning on individual clients and the aggregation of heterogeneous client knowledge\. However, most existing methods either overemphasize preserving old knowledge, which restricts model plasticity for new tasks, or rely on training complex generative models for replay, incurring substantial computational overhead\. In the human immune system, immune memory is preserved implicitly and can be reactivated through vaccination even after long periods of dormancy\. Motivated by this, we propose \*\*\*FedVaccine\*\*\*, a novel framework that explicitly permits forgetting to preserve high plasticity for new tasks, while efficiently recovering past knowledge through re\-learning a compact vaccine set\. Specifically, the vaccine set for each task is synthesized by compress task gradient information under the guidance of the fine\-tuned local model, capturing representative data characteristics and task\-specific discriminative patterns\. Two novel components are also introduced: \*\*\*Priming &amp; Boosting\*\*\*, which encodes task\-specific knowledge in a compact spectral form, priming the model with essential information and enabling efficient memory boosting via vaccine set replay after forgetting; and \*\*\*Vaccination Aggregation\*\*\*, which aggregates vaccine sets from all clients to train a globally generalized model without accessing any raw private data\. Extensive experiments on three benchmarks demonstrate that FedVaccine achieves competitive performance, enables rapid knowledge recovery after forgetting, and incurs no additional overhead from training generative models\.

## FedSOUL: Federated Continual Unlearning via Spectral Orthogonality

**Authors:** Haoran Shi; Hao Zhu; Yifei Zhang; JUNRU ZHANG; Lizhen Cui; Yali Jiang; Xiaoli Tang; Han Yu

**ID:** 153586 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKJDo7EkPM>) | [PDF](<https://openreview.net/pdf?id=KKJDo7EkPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153586>)

As privacy, copyright, and safety requirements evolve, federated learning systems face a growing imperative to accommodate sequential unlearning requests\. However, existing federated unlearning methods are designed for single\-shot settings and their direct sequential application may lead to uncontrolled parameter\-space overlap, causing cross\-request interference that undermines prior forgetting\. To address this, we propose the Spectral Orthogonality for Federated Continual unlearning \(FedSOUL\), a framework that reduces direct overlap among sequential unlearning updates\. The core idea is to structure model updates in a shared orthonormal spectral basis, where each client is assigned a dedicated subspace in the frequency domain\. Under this design, each unlearning request updates only its associated subspace, while all others remain unchanged, ensuring that sequential updates do not overlap in the allocated spectral coefficient space and thereby reducing cross\-request interference\. Beyond interference control, FedSOUL also improves efficiency by operating on sparse spectral coefficients, using FFT\-based transforms for efficient computation and communicating only sparse coefficient updates\. From a theoretical perspective, we relate continual unlearning to geometric conditions on update directions and show that our spectral construction satisfies update orthogonality by design, while functional preservation depends on bounded projected gradient leakage\. Extensive experiments demonstrate that FedSOUL maintains stable unlearning–utility trade\-offs across up to ten sequential requests and consistently outperforms competitive federated baselines\. Our code is available at https://anonymous\.4open\.science/r/fedunlearning\-1B92/\.

## ASAP: Fast Adaptive Sliding Agnostic Poisoning Attack on Federated Learning

**Authors:** HUAZI PAN; Yanjun Zhang; Leo Yu Zhang; Scott D Adams; Abbas Z Kouzani; Suiyang Khoo

**ID:** 152944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PDkEqBCau0>) | [PDF](<https://openreview.net/pdf?id=PDkEqBCau0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152944>)

Federated Learning \(FL\) is vulnerable to model poisoning attacks, where malicious clients manipulate uploaded model updates to corrupt the global training process\. Existing attacks are typically evaluated by their eventual damage, such as final accuracy degradation or convergence to random\-guess performance, where the learned model becomes unusable and may ultimately lead to denial\-of\-service \(DoS\)\. However, such metrics overlook attack round complexity, defined as the number of communication rounds required for the poisoned global model to reach and remain near a desired degradation objective\. In realistic FL systems, requiring more communication rounds increases the adversary's exposure to client participation, robust aggregation, filtering, and detection\. We propose ASAP \(Adaptive Sliding Agnostic Poisoning\), a fast aggregation\-rule\-agnostic \(AGR\-agnostic\) attack that treats the whole FL training process as an uncertain dynamical system and formulates poisoning as a feedback\-control problem for steering the model toward a desired attack objective\. ASAP combines adaptive sliding mode control \(ASMC\) with finite Fourier\-basis uncertainty estimation, treating the unknown effects of benign training and aggregation as a time\-varying uncertainty and using the resulting estimate to design the malicious updates\. We theoretically prove that the sliding variable reaches the sliding surface in finite time and the tracking error subsequently converges exponentially\. Experiments across multiple datasets, models, and aggregation rules demonstrate that ASAP reaches specified degradation objectives in fewer communication rounds while maintaining smaller target deviation than existing model poisoning attacks\.

## Geometry\-Regularized Collapse Resistance via Consensus Enhancement for Federated Learning

**Authors:** Jingjing Zhu; Zhuang Qi; Lei Meng; Han Yu; Jie Zhang; Xiangxu Meng

**ID:** 151891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XADFq5Hg3V>) | [PDF](<https://openreview.net/pdf?id=XADFq5Hg3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151891>)

Knowledge distillation provides shared semantic supervision for local training in federated learning, reducing the tendency of client models to overfit their own data distributions\. Existing methods construct a global knowledge repository from client\-uploaded local information to establish consensus across clients\. However, global knowledge that is fundamentally derived from client data inevitably contains local biases under heterogeneous settings\. To address this issue, this study proposes a geometry\-regularized cross\-silo consensus enhancement method, termed RISE, which improves collapse resistance in federated learning by preserving pre\-trained geometric consensus priors during local adaptation\. Specifically, RISE introduces two complementary geometry regularizers\. The Biased Low\-dimensional Subspace Correction module preserves the spectral energy profile of pre\-trained representations by constraining the energy distribution of adapted features within the principal representation subspace\. Instead of enforcing direction\-wise alignment, it discourages excessive energy concentration along a few dominant components, thereby mitigating biased low\-dimensional feature collapse\. The Manifold Relation Graph Alignment module regularizes the relational manifold geometry by constructing a transferable inter\-class topology from pre\-trained global class prototypes and aligning client\-side class structures with this global relation, thereby mitigating class representation drift and stabilizing global aggregation\. Extensive experiments on eight benchmark datasets across two tasks demonstrate that RISE improves cross\-client consensus consistency and enhances the generalization ability of the global model, outperforming eight state\-of\-the\-art methods\.

## Differentiable Exact Learning of Algorithms

**Authors:** Hristo Papazov; Francesco D&amp;amp;\#x27;Angelo; Nicolas Flammarion

**ID:** 148538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x9jhyvsLzO>) | [PDF](<https://openreview.net/pdf?id=x9jhyvsLzO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148538>)

We introduce a framework for differentiable exact learning of algorithms\. The framework couples a state\-tracking neural controller to an unbounded external environment and trains on policy\-trajectory observations \(PTOs\) \-\- traces that record the environment's evolution under an expert's actions without exposing the expert's internal state\. This supervision regime sidesteps Gold's impossibility barrier for input\-output recursive learning while avoiding the unrealistic internal\-state access required by prior provably correct approaches\. As controllers, we propose Differentiable Finite\-State Transducers \(DFSTs\), a minimalist multilinear model family that contains no nonlinearities and admits log\-parallel training via prefix scans\. Trained on tiny datasets, DFST and RNN controllers achieve error\-free generalization on binary and decimal addition and multiplication to operands thousands of times longer than the training examples\. Moreover, we provide strong empirical proof for exact learning of universal computation\. Finally, we develop an extraction procedure that recovers compact finite\-state transducers from trained controllers\. We prove under a geometric clustering assumption that for binary addition the extracted transducer exactly replicates the expert policy on all valid inputs \-\- certifying differentiable exact learning of the algorithm\.

## Fed\-SB: A Silver Bullet for Extreme Communication Efficiency and Performance in \(Private\) Federated LoRA Fine\-Tuning

**Authors:** Raghav Singhal; Kaustubh Ponkshe; Rohit Vartak; Lav Varshney; Praneeth Vepakomma

**ID:** 156778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156778>)

Low\-Rank Adaptation \(LoRA\) has become ubiquitous for efficiently fine\-tuning foundation models\. However, federated fine\-tuning using LoRA is challenging due to suboptimal updates arising from traditional federated averaging of individual adapters\. Existing solutions either incur prohibitively high communication cost that scales linearly with the number of clients or suffer from performance degradation due to limited expressivity\. We introduce Fed\-SB, a novel approach for federated fine\-tuning of LLMs using LoRA\-SB, a recently proposed low\-rank adaptation method\. LoRA\-SB optimally aligns the optimization trajectory with the ideal low\-rank full fine\-tuning projection by learning a small square matrix \(R\) between adapters B and A, keeping other components fixed\. Direct averaging of R guarantees exact updates, substantially reducing communication cost, which remains independent of the number of clients, and enables scalability\. Fed\-SB achieves state\-of\-the\-art performance across commonsense reasoning, arithmetic reasoning, and language inference tasks while reducing communication costs by up to 230x\. In private settings, Fed\-SB further improves performance by \(1\) reducing trainable parameters, thereby lowering the noise required for differential privacy and \(2\) avoiding noise amplification introduced by other methods\. Overall, Fed\-SB offers a state\-of\-the\-art, efficient, and scalable solution for both private and non\-private federated fine\-tuning\. Our code is available publicly at: https://github\.com/CERT\-Lab/fed\-sb\.

## ShadowFPT: Backdooring Federated Prompt Tuning via Shadow Triggers

**Authors:** Kun Zhai; Teng Li; Yunhao Feng; Xingjun Ma

**ID:** 153368 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lshe1pbyOy>) | [PDF](<https://openreview.net/pdf?id=Lshe1pbyOy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153368>)

Federated Prompt Tuning \(FPT\) adapts large vision\-\-language models by freezing the pretrained backbone and optimizing only lightweight prompt parameters across clients\. Although this design improves communication and parameter efficiency, it creates an overlooked security risk\. Since the backbone is shared and frozen, a malicious client can induce backdoor behavior through the representation space while keeping its uploaded prompt updates close to benign ones\. We propose \\textbf\{ShadowFPT\}, a targeted backdoor attack that exploits this frozen\-backbone attack surface\. ShadowFPT first pretrains a learnable \\emph\{Shadow Trigger\} against the frozen CLIP visual encoder, using either auxiliary public data or the malicious client's local data, so that triggered inputs are steered toward the target class in representation space\. During federated prompt tuning, the malicious client adapts the trigger under the current global prompt and then optimizes its local prompt on both clean and triggered samples\. Only prompt parameters are uploaded to the server, while the trigger and frozen encoders remain local\. By shifting most of the attack burden from prompt updates to trigger\-induced representation steering, ShadowFPT achieves targeted misclassification while preserving prompt\-space stealthiness\. Across multiple datasets, aggregation rules, and non\-IID federated partitions, ShadowFPT increases the attack success rate from 19\.81\\% to 90\.36\\% in our main setting, while maintaining clean accuracy\. It remains effective across textual, visual, and joint vision\-\-language prompt tuning\. These results identify frozen backbones as stealthy and underexplored backdoor surfaces in federated prompt tuning, suggesting that defenses based only on prompt\-update anomaly detection are insufficient\.

## FedSEM: Mitigating Cross\-Client Evidence Drift in Federated Multiple Instance Learning

**Authors:** Zhiqiang Kou; Beidi Wang; Yuling Shi; Shengkun Zhu; Wei Tang; Xiaodong Gu; Jiankai Zuo; Di Jiang; Yu Zhang

**ID:** 151822 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XhoxhpfjPV>) | [PDF](<https://openreview.net/pdf?id=XhoxhpfjPV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151822>)

Federated Multiple Instance Learning \(MIFL\) has emerged as a promising paradigm for privacy\-preserving weakly supervised learning, particularly in medical image analysis where instance\-level annotations are expensive or unavailable\. Existing federated MIL methods mainly rely on parameter aggregation to learn a global model across clients\. However, in MIL, the key challenge is not only client\-level data heterogeneity, but also the ambiguity of instance\-level evidence\. Since supervision is only provided at the bag level, each client must independently infer discriminative instances through local attention mechanisms\. Under heterogeneous data distributions, different clients may focus on inconsistent or even misleading instances, resulting in cross\-client critical evidence drift\. To address this problem, we propose FedSEM, a Federated Shared Evidence Memory framework that introduces an evidence\-level communication pathway in addition to standard model aggregation\. Specifically, each client identifies high\-confidence evidence instances using local attention scores and compresses them into compact prototypes with importance scores\. The server then refines these prototypes through redundancy removal, diversity selection, and score normalization to construct a shared evidence memory\. Importantly, FedSEM does not require transmitting raw patches or dense instance embeddings; it only exchanges a small number of evidence prototypes and periodically broadcasts the refined memory, thereby introducing limited additional communication overhead compared with standard federated training\. The shared memory serves as cross\-client evidence anchors to guide local attention learning and instance\-level representation optimization\. By explicitly aligning critical evidence patterns across clients, FedSEM mitigates evidence drift while maintaining communication efficiency and privacy preservation\. Extensive experiments under heterogeneous federated settings demonstrate that FedSEM consistently improves MIL performance and generalization over existing federated learning baselines\.

## Ripple in Still Water: Zero\-Shot Clustering in Heterogeneous Federated Learning with Wavelet Scattering Transform

**Authors:** Alessandro Licciardi

**ID:** 150906 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eXBYzZS6sZ>) | [PDF](<https://openreview.net/pdf?id=eXBYzZS6sZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150906>)

Clustered Federated Learning \(FL\) partitions a client population into groups of similar local distributions and trains one specialized model per cluster, mitigating client drift that degrades single\-model methods under non\-IID data\. Prior methods discover cluster structure inside the training loop through gradient similarity, loss evaluation, or EM\-style updates, thus increasing communication overhead, exposing gradients to inversion attacks, and providing no mechanism to assign clients absent from training\. We propose Ripple, a clustered FL framework in which cluster assignment is computed entirely offline from a spectral characterization of each client's local data: a variance\-weighted principal\-component prototype embedded via the Wavelet Scattering Transform and decoded by a Gaussian Mixture VAE trained server\-side on synthetic client populations before federation begins\. Per\-round communication cost matches FedAvg exactly, and a client absent from training obtains a personalized model from a single forward pass, without gradient computation, model evaluation, or extra communication round\. We prove that the gap between Ripple's surrogate clustered objective and the oracle is bounded by a computable quantity decaying with client sample size and independent of federation duration; per\-cluster convergence matches the minimax\-optimal rate for non\-convex smooth objectives\. Across five benchmarks spanning controlled and realistic heterogeneity, Ripple consistently outperforms all baselines, with margins growing on the most realistic partitions\.

## Stability\-Enhanced Federated Learning with Accelerated Gradient

**Authors:** Tianxiang Chen; Wenjie Hou; Feng Wang; Tiantong Wang; Zhiming Zheng; Shaoting Tang; Wei Yang Bryan Lim

**ID:** 152554 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SFp0bLpWTb>) | [PDF](<https://openreview.net/pdf?id=SFp0bLpWTb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152554>)

Federated Learning \(FL\) is a promising paradigm for distributed machine learning\. However, FL often suffers from degraded generalization performance due to the inconsistency between local and global optimization objectives and client\-side overfitting\. In this paper, we provide a global\-update stability analysis framework as an analytical tool to study generalization error and derive the stability bounds of mainstream FL optimization algorithms under non\-convex settings\. Our analyses reveal how the number of global update steps, data heterogeneity, and update rules influence their stability\. We observe that momentum\-based FL acceleration methods do not improve stability\. To address this issue, we propose FedSEMA, a new FL algorithm that couples global momentum with a gradient\-difference corrected Nesterov Accelerated Gradient \(NAG\) scheme and a hybrid proximal term to enhance stability\. This design ensures updates follow a globally consistent descent direction while retaining the benefits of acceleration\. Theoretical analysis shows that FedSEMA achieves an improved stability upper bound on non\-i\.i\.d\. datasets in the non\-convex settings\. Extensive experiments on real\-world datasets demonstrate that FedSEMA significantly outperforms multiple baseline methods under standard FL settings, achieving faster convergence and state\-of\-the\-art performance\.

## Federated Unlearning with Gradient Adaptive Shaping

**Authors:** Siyin Huang; Yufan Liao; Yuelin Du; Yu Zhang

**ID:** 154090 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJ1Wmjsdsm>) | [PDF](<https://openreview.net/pdf?id=GJ1Wmjsdsm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154090>)

Federated unlearning aims to efficiently remove the influence of a specific client from a trained global model in federated learning without full retraining\. However, existing approaches struggle to preserve the utility of the remaining clients because unlearning can be unstable at both the client and server stages\. Local forgetting updates may become overly aggressive and destabilize client side optimization, while server aggregation can amplify conflicts between forgetting updates and retained client updates\. To address both failure modes within a unified framework, we propose Federated Unlearning with Gradient Adaptive Shaping \(FUGAS\), a history\-free gradient shaping framework that stabilizes the entire unlearning pipeline\. On the unlearning client side, we employ a bounded preference objective that utilizes the pre\-unlearning model predictions on the forgetting data as negative references to controllably steer the model away from unlearning client knowledge while requiring only minimal storage for reference caches rather than full historical updates\. On the server side, we introduce a compatibility projection mechanism that reshapes the aggregated unlearning update to remain compatible with directions estimated from retained clients\. We provide a theoretical analysis indicating that FUGAS promotes stability and ensures non\-increasing empirical risk on retained distributions while establishing an excess risk bound relative to retraining\. Extensive experiments demonstrate that FUGAS achieves effective unlearning while consistently maintaining high accuracy on retained data\.

## Improved Robust Verifiable Federated Learning Based on Packed Secret Sharing

**Authors:** Jinhyuk Choi; Hyung Tae Lee

**ID:** 148144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvSw7s379j>) | [PDF](<https://openreview.net/pdf?id=zvSw7s379j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148144>)

Achieving both privacy and robustness against poisoning attacks remains a central challenge in federated learning \(FL\), since hiding individual updates makes attacks harder to detect and mitigate\. Recently, Mai et al\. \(NeurIPS 2024\) proposed RFLPA, a packed\-secret\-sharing \(PSS\)\-based realization of FLTrust, which weights client updates by their cosine similarity to a trusted server update\. In this paper, we show that RFLPA contains design flaws and mathematical errors in its use of PSS, making the protocol theoretically unsound and practically non\-functional\. We then propose an improved verifiable FL framework that restores correctness while retaining efficiency\. Our key insight is a reinterpretation of the algebraic structure of PSS, which leads to a new transposed degree reduction algorithm and a pairwise verification technique for dot products\. These primitives enable local matrix\-based operations without complex circuit evaluation and substantially reduce communication rounds compared with BGW\-style computation\. Building on them, we redesign the verifiable aggregation algorithm of RFLPA by introducing perpendicular vectors, reducing cosine similarity verification to a single dot\-product check and eliminating costly verifiable secret sharing during enrollment\. The resulting framework strictly improves efficiency, fixes the flaws of prior work, and preserves $N/3$\-robustness in malicious settings\. Our implementation and empirical evaluation confirm the feasibility of the resulting protocol for high\-dimensional FL updates\.

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

## HERO: A Heterogeneity\-Aware Benchmark Library for Federated Continual Learning

**Authors:** Thinh Nguyen; Le\-Tuan Nguyen; Minh\-Duong Nguyen; Nhi Trinh; Anh T Nguyet; Dung Le; Kok\-Seng Wong

**ID:** 139360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UgjTgBmVgZ>) | [PDF](<https://openreview.net/pdf?id=UgjTgBmVgZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139360>)

Federated continual learning \(FCL\) evaluates how distributed clients learn from changing data streams while retaining previously learned knowledge\. Existing evaluations are difficult to compare because they often change datasets, task splits, client data splits, task orders, backbones, memory assumptions, and reporting rules simultaneously\. We introduce \\textbf\{HERO\}, a heterogeneity\-aware benchmark library for FCL\. HERO builds benchmark streams by separating three choices that are often coupled, namely the task split, the client data split, and the client task sequence\. In HERO\-Core, the main comparable benchmark, $\\alpha$ controls client data skew and $\\rho$ controls task\-order mismatch\. We evaluate representative FCL methods on CIFAR\-100 and TinyImageNet using final average accuracy, average forgetting, and bottom\-10\\% client accuracy\. We also include a graph\-based Domain\-IL portability case study on OGB\-MolPCBA, where scaffold\-domain granularity changes the input distribution while the prediction task remains fixed\. Our results show that method behavior changes across easy and heterogeneous settings, that average accuracy can hide weak bottom\-client performance, that task\-order mismatch favors different strategies from synchronized evaluation, and that the same HERO interface can expose domain\-shift difficulty beyond image\-based FCIL\. HERO releases benchmark streams, configurations, method implementations, and reporting scripts to support reproducible and setting\-aware FCL evaluation\.

## Complexity\-Aware LoRA Aggregation for Modality\-Heterogeneous Federated Person Re\-identification

**Authors:** Kunyang Lv; Wenke Huang; Wenwen He; Bin Yang; Bo Du; Mang Ye

**ID:** 151019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dZItc1V1aV>) | [PDF](<https://openreview.net/pdf?id=dZItc1V1aV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151019>)

A unified cross\-modal person re\-identification targets robust cross\-modal retrieval with queries from diverse modalities like visible, infrared, and text\.Such framework requires multi\-modal data and centralized training, raising data costs and privacy risks\. Hence, we propose a modality\-heterogeneous federated ReID task to learn a unified cross\-modal framework from clients with different cross\-modal data\.However, it faces two challenges\.First, varying inter\-modality complexity across tasks leads to different retrieval patterns and parameter space\. Second, different intra\-modality complexity results in imbalanced contributions when merging LoRA modules\.Existing federated learning methods use uniform merging and transmit full models, which hinders cross\-modal knowledge integration and increases communication overhead\. To address these issues, we adopt Low\-Rank Adaptation \(LoRA\), a lightweight module for fine\-tuning large models through low\-rank updates, enabling clients to send compact parameters\.On top of LoRA, we develop MIRAGE \(Modality\-heterogeneous Intelligent federated ReID Aggregation with Global Efficiency\), adapting aggregation to inter\- and intra\-modality complexity\.When merging visible LoRA, MIRAGE selects key ranks to protect retrieval patterns while retaining shared ranks for common ability\.As for infrared and text LoRA, it reduces conflicts with an adaptive pruning method\. In both strategies, task complexity is incorporated into aggregation to balance contributions\. Experiments on cross\-modal retrieval tasks demonstrate the superiority of MIRAGE\.The code and dataset will be publicly released\.

## Fractional State Space Transition for Long Sequence Modeling

**Authors:** Ivan Kobyzev; Abbas Ghaddar; Ali Nasiri\-Sarvi; Lifeng Shang; Yufei Cui

**ID:** 150427 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i6ZEbxGeKu>) | [PDF](<https://openreview.net/pdf?id=i6ZEbxGeKu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150427>)

State Space Models \(SSMs\) compress sequence history into a bounded recurrent state, making the resulting memory law a central architectural choice for long\-context performance\. Most modern SSMs rely on ODE\-based dynamics that lead to exponential forgetting, limiting their ability to retain information over broad temporal ranges\. We introduce FRAC, a selective SSM architecture derived from fractional dynamics that replaces this exponential decay with power\-law long memory\. To make fractional dynamics practical, FRAC approximates the heavy\-tailed target kernel with a finite\-state, log\-spaced sum of exponential modes\. This construction turns fractional memory into an efficient recurrent module with parallel training and prefill, while retaining bounded\-state autoregressive decoding\. Extensive experiments, including 1\.3B\-parameter language modeling, demonstrate that FRAC consistently improves long\-context performance over state\-of\-the\-art SSM baselines while staying competitive on short\-context\. These results show that fractional dynamics provide a practical and effective prior for long\-context SSMs\.

## SP\-CACW: Convergence\-Aware Client Weighting for Selfish Personalized Learning

**Authors:** Yaron Kiselman; Kfir Y\. Levy

**ID:** 152385 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TUVCMnWa8i>) | [PDF](<https://openreview.net/pdf?id=TUVCMnWa8i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152385>)

Collaborative learning is sustainable only if it benefits each participant; yet, standard Federated Learning \(FL\) optimizes a global average that often fails to serve individual clients\. In heterogeneous settings, a client may rationally prefer training alone rather than contributing to a global model that targets "average\-case" optimality but under performs locally\. In this work, we address the problem of \\emph\{Selfish Personalization \(SP\)\}: How can a target client leverage peer data to minimize its own risk? While current techniques often rely on heuristic performance proxies or clustering that lack sharp theoretical support, we propose \\emph\{SP\-Convergence\-Aware Client Weighting \(SP\-CACW\)\}\. This novel framework determines the  contribution of peer clients by explicitly minimizing a theoretical convergence bound for the target\. By doing so, our approach efficiently separates useful signal from imported bias on\-the\-fly during the training process\. We provide convergence guarantees that establish the theoretical superiority of \\emph\{SP\-CACW\}, alongside  empirical results on the MNIST CIFAR datasets and LEAF Shakespeare\.

## Breaking BAD: Heterogeneous Byzantine\-Robust Federated Learning via Gather and Scatter Scores

**Authors:** Sena Ergisi; Luis Massny; Rawad Bitar

**ID:** 148208 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYNKoIyYhj>) | [PDF](<https://openreview.net/pdf?id=zYNKoIyYhj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148208>)

Byzantine\-robust Federated Learning \(FL\) designs aggregation rules that mitigate the impact of malicious clients\. When the data across honest clients are heterogeneous, honest model updates are inherently scattered\. This dispersion can be exploited by Byzantine adversaries who may collude to concentrate their updates, thereby circumventing state\-of\-the\-art robust aggregation methods and causing a Byzantine Adversarial Disruption \(BAD\) of the training process\. We propose a novel Byzantine\-robust FL scheme based on \*gather\* and \*scatter\* scores\. Our scoring technique captures concentration among Byzantine clients and prevents catastrophic failure under SotA attacks\. Through numerical experiments on FEMNIST, Shakespeare, and CIFAR\-10 datasets, we demonstrate that the proposed defense maintains high model accuracy, even in realistic FL scenarios\. Furthermore, we establish theoretical convergence guarantees for our method\.

## A typed tensor language for federated learning

**Authors:** Theofilos Mailis; Kalliopi\-Christina Despotidou; Konstantinos Filippopolitis; Yannis Foufoulas; Thanasis\-Michail Karampatsis; Andreas Ktenidis; Evdokia Mailli; Theodore Papamarkou; Yannis Ioannidis

**ID:** 150243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jfzDfme1bL>) | [PDF](<https://openreview.net/pdf?id=jfzDfme1bL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150243>)

Federated learning and analytics are often described as collections of separate protocols, even when they share the same mathematical form: client\-local tensor computation, mergeable aggregation into shared state, and shared\-only post\-processing\. We introduce a typed tensor language that formalizes this structure\. The language distinguishes federated tensors, whose records are partitioned across clients along a tracked record axis, from shared tensors, which are available globally\. Its semantics are defined by comparison with a virtual global tensor, used only as a reference object\. The main result is a shared\-state factorization theory\. We show that typed one\-round programs factor through fixed\-dimensional shared state whose size is independent of the number of clients and records, computed from client\-local tensor expressions and merged across clients\. We also prove a converse representability result; factorizations whose encoders and decoders are expressible in the language are realized by typed one\-round programs, and the correspondence extends to iterative programs whose cross\-round state is shared\. This gives a formal account of the computations in the language that can be expressed as encode, merge, and decode procedures\. We then develop a differentiable fragment for learning\. If a per\-record loss and its per\-record gradient are represented by client\-local tensor expressions, the global gradient is represented by record\-axis summation of the federated gradient tensor\. This yields typed iterative programs for server\-side gradient descent and shared\-linear\-algebra second\-order updates\. The framework characterizes a broad class of federated learning computations whose communication passes through fixed\-dimensional shared state\.

## FedTrace: Generated\-Content\-Based Watermark Verification for Traitor Tracing in Federated Learning

**Authors:** Tianzhe Xiao; Haozhao Wang; Yichen Li; Qiyu Qin; Debin Liu; Ruixuan Li

**ID:** 148309 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ynVmgUSGjZ>) | [PDF](<https://openreview.net/pdf?id=ynVmgUSGjZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148309>)

As large generative models become widely deployed and customized, federated learning is increasingly used to adapt them while keeping user data local\. Because clients repeatedly receive up\-to\-date adapters, a malicious client can copy a dispatched adapter, use it offline, and monetize generated images without exposing the stolen weights or a queryable service\. Existing federated watermarking and traitor\-tracing methods usually assume white\-box access to suspect weights or black\-box query access to the deployed model\. In realistic generative\-model theft, however, the defender may only observe images that have already circulated\. We propose \\emph\{FedTrace\}, a generated\-content\-based watermark verification framework that attributes leaked federated models from suspicious generated images alone\. FedTrace couples three designs: a round\-wise watermark lifecycle that separates client identity distribution from global utility aggregation, a low\-drift reliable\-bit carrier that embeds identity in watermark positions stable under local adaptation, and anti\-collision coding with soft subset verification for distinguishing singleton and collusive leakage\. These components enable post\-local, collusion\-aware attribution from generated outputs alone, without suspect weights or online query interfaces\. Extensive experiments across customized diffusion datasets, base models, and federated settings show that FedTrace preserves detectable client identities under local adaptation and strengthens subset\-aware tracing against collusive leakage\.

## Decentralized $\\mu^2$\-SGD: Narrowing the Parallelism Gap to Centralized Learning

**Authors:** Ofri Eisen; Sharon Goldstein; Ran Elbaz; Kfir Y\. Levy

**ID:** 149890 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTng8fAGcD>) | [PDF](<https://openreview.net/pdf?id=mTng8fAGcD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149890>)

While decentralized learning offers a communication\-efficient alternative to centralized distributed training, its scalability is often limited by the number of workers that can be used without degrading statistical efficiency\. This limitation is especially pronounced over sparse communication networks, where increasing parallelism can lead to a sharp loss in performance\. To address this bottleneck, we introduce \*Decentralized $\\mu^2$\-SGD \(DMS\)\*, a novel decentralized optimization method that significantly extends the parallelism limits of decentralized learning\. From a theoretical perspective, within the stochastic convex optimization \(SCO\) framework, we establish improved bounds on the maximal allowable parallelism, surpassing existing decentralized algorithms\. Notably, for a broad class of network topologies, our method matches the parallelism scaling of centralized learning, thereby effectively eliminating the gap between decentralized and centralized optimization\. Empirically, we validate our theoretical findings through comprehensive experiments, demonstrating the benefits of our approach\.

## Federated Learning by Utility\-Constrained Stochastic Aggregation for Improving Rational Participation

**Authors:** Yashwanth Mandula; Arunabh Singh; Ashok Nayak; Saikiran Bulusu; Anirban Chakraborty

**ID:** 150671 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gM2WzBs4Gb>) | [PDF](<https://openreview.net/pdf?id=gM2WzBs4Gb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150671>)

Federated Learning \(FL\) algorithms implicitly assume that clients passively comply with server\-side orchestration by sharing local model updates upon server request\. However, this overlooks an important aspect in real\-world cross\-silo environments: clients are often rational agents who may prioritize their utilities such as local model performance over that of the global model\. In settings with significant statistical heterogeneity, rational clients may opt out of the federation if the perceived benefits of collaboration fail to meet their local utility thresholds\. Such attrition degrades the global model performance and can lead to the collapse of the federated training process\. In this work, we introduce FedUCA:  Federated Learning by Utility\-Constrained Stochastic  Aggregation for Improving Rational Participation, a framework that formalizes the server's role as an optimizer seeking to maximize global model performance by sustaining client participation\. We substantiate our framework through extensive experiments on standard datasets demonstrating that by prioritizing participation feasibility, FedUCA achieves significantly higher client retention and, consequently, a superior global model performance\.

## Optimized Forward\-Backward Rematerialization for Memory\-Efficient Pipeline Parallel Training

**Authors:** Adrien Aguila\-Multner; Olivier Beaumont; Lionel Eyraud\-Dubois; Julia Gusak

**ID:** 150439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i1zm1UWbH2>) | [PDF](<https://openreview.net/pdf?id=i1zm1UWbH2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150439>)

Pipeline parallelism is a key technique for scaling deep network training across multiple devices\. Recent works have significantly reduced pipeline idle time by improving scheduling efficiency\. Decoupling the computation of gradients with respect to weights and activations led to the development of schedules with almost no idle time\. However, these methods still require substantial memory, limiting their applicability on resource\-constrained hardware\. Our first contribution is to introduce recomputation to the backward pass, extending rematerialization beyond the forward pass\. This enables executing schedules with decoupled gradient computations under much tighter memory constraints\. Our second contribution is to consider more flexible rematerialization strategies, with individual per\-microbatch decisions\. We provide a unified optimization approach that, given a model and hardware memory constraints, formulates and solves an Integer Linear Programming \(ILP\) problem to determine the optimal per\-microbatch, per\-GPU rematerialization strategy for a given schedule, applicable to both one\-wave and multi\-wave pipeline schedules\. With these tools, we show that when using rematerialization, the best scheduling algorithm varies according to the device memory constraints\.  Experiments demonstrate the effectiveness of all three contributions, showing that our approach enables efficient training of larger models under tight memory budgets, adapts optimally to varying memory capacities, and reduces recomputation overhead compared to existing recomputation solutions\.

## Rehearsal\-Free Statistical Prototype Regularization for Federated Incremental Learning

**Authors:** Xiuying Wang; Yichen Li; Jiahua Cheng; Xiwei Liu; Chuang Zhao; Bo Liu; Imran Razzak

**ID:** 148798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2AOJ4JiUk>) | [PDF](<https://openreview.net/pdf?id=v2AOJ4JiUk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148798>)

Federated Incremental Learning \(FIL\) aims to learn sequential tasks across distributed clients under strict privacy constraints while mitigating catastrophic forgetting\. However, existing methods often rely on storing, transmitting, or generating previous data to retrain the model, which not only introduces potential privacy risks but also incurs additional memory, communication, and computational costs, thereby limiting their deployment on resource\-constrained edge devices\. To tackle this challenge, we propose \\textit\{SPR\-FIL\}, a novel rehearsal\-free and lightweight \\underline\{S\}tatistical \\underline\{P\}rototype \\underline\{R\}egularization framework for \\underline\{F\}ederated \\underline\{I\}ncremental \\underline\{L\}earning that leverages Gaussian statistics and preserves previous knowledge through aligned prototypes and subspace\-constrained encoder updates\. More specifically, the server aggregates client\-side statistics into global prototypes and dynamically aligns historical prototypes with the evolving feature space through anchor\-based moment matching\. Locally, clients utilize these aligned prototypes to induce virtual posteriors which serve as soft supervision for distillation while encoder updates are further regularized by projecting gradients onto the orthogonal complement of covariance\-induced historical knowledge subspaces\. Extensive experiments demonstrate that SPR\-FIL is model\-agnostic, communication\-efficient, and consistently outperforms state\-of\-the\-art methods across various FIL settings, achieving improvements of up to 9\.73\\%\.

## Heterogeneity\-aware Distillation for Federated Continual Learning

**Authors:** Gaozhuo Liu; Yichen Li; Xiuying Wang; Yulong Li; Chuang Zhao; Yankai Jiang; Imran Razzak

**ID:** 155355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6F5SkPuDh3>) | [PDF](<https://openreview.net/pdf?id=6F5SkPuDh3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155355>)

Federated Continual Learning \(FCL\) requires distributed clients to acquire new tasks while retaining previously learned knowledge\. In this paper, we revisit the heterogeneity challenge in FCL, which is composed of two distinct aspects: spatial static heterogeneity, e\.g\., initial data distribution and model architecture differences, and temporal dynamic heterogeneity, e\.g\., task shifts over time\. While existing methods acknowledge the presence of heterogeneity, they typically treat it in a unified manner by employing a single adaptive strategy without explicitly disentangling their impacts\. In contrast, we propose a heterogeneity\-aware distillation framework for FCL called Ha\-FCL, which is designed to handle spatial and temporal heterogeneity through tailored distillation strategies\. Specifically, Ha\-FCL combines width\-aware federated training with server\-side public\-anchor distillation, integrating multi\-layer feature distillation for architecture\-aware alignment with historical\-logit regularization and representation co\-distillation\. This forms a coordinated dual\-dimensional distillation scheme that balances adaptation to new tasks with retention of prior knowledge\. This enables more targeted knowledge transfer and leads to improved model performance under complex FCL scenarios\. We evaluate our method in various heterogeneous settings\. Compared with state\-of\-the\-art baselines, Ha\-FCL consistently improves test accuracy and shows better robustness under challenging heterogeneous FCL settings\.

## LEAN: Library\-Based Adaptation for Asynchronous, Federated Fine\-Tuning

**Authors:** Erdong Hu; Yuxin Tang; Zhimin Ding; Christopher Jermaine

**ID:** 152914 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRnblGnQBU>) | [PDF](<https://openreview.net/pdf?id=PRnblGnQBU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152914>)

We consider the problem of learning to adapt a foundation model in a federated setting, particularly the most realistic and general setting: 1\) When the local data sets are sampled from different distributions but we want to learn a globally adapted model, 2\) Where local agents enter and leave the federation asynchronously at each time tick which is beyond the control of the learning algorithm, and 3\) Where the goal is continuous adaptation so that after each time tick, the learned adapter generalizes accurately for all participants that have been seen during training\.  We propose a simple idea called federated \*library\-based adaptation\* \(\*LEAN\*\) for this setting\. In library\-based adaptation, the system maintains a pool, or "library" of rank\-1 "basis pairs"\. Groups of these pairs are distributed to local sites to be trained in LoRA fashion, and then separated and \*shuffled\* at communication\. Library\-based adaptation is designed to avoid problems with more conventional methods, such as those based on averaging\. In particular, we demonstrate \*LEAN\* outperforms traditional averaging baselines in both communication and computation cost efficiency across a broad range of important settings, including heavy data skewness and high asynchrony\.

## Finite\-Sample and Communication\-Efficient Networked Information Aggregation

**Authors:** Mohammadhossein Bateni; Zahra Hadizadeh; MohammadTaghi Hajiaghayi; Mahdi JafariRaviz; Shayan Taherijam

**ID:** 148707 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veiLuA1laQ>) | [PDF](<https://openreview.net/pdf?id=veiLuA1laQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148707>)

Building on SODA 2026 work Kearns et al\. \(2026\), we study learning in directed acyclic graphs in which each agent observes only a subset of the input coordinates and may use the predictions of its parents as additional features\. In the finite\-sample protocol, the message sent along each edge is the agent's prediction vector on a shared sample, so the communication cost is linear in the sample size $m$\. In this paper we study this model under communication constraints\.  First, we revisit the finite\-sample analysis of the full\-message protocol\. We identify a gap in the finite\-sample proof of Kearns et al\. \(2026\) and develop a different argument that establishes a finite\-sample population\-risk guarantee along paths satisfying deterministic $M$\-coverage\.  Second, we introduce a shared\-sketch protocol in which each agent sends a $k$\-dimensional linear sketch of its prediction vector instead of the full $m$\-dimensional message, where $k\\ll m$\. We analyze this protocol through a reduction to least squares on the compressed sample together with an oblivious subspace embedding argument\. The resulting bound separates statistics from communication: the statistical term is still governed by the original sample size $m$, while the additional error due to compression is controlled by the sketch dimension $k$\. For Gaussian sketches, we obtain an explicit high\-probability population\-risk bound, showing that row subsampling is not the only possible communication\-statistics tradeoff for networked information aggregation\.

## AdERA: Adaptive Exponent Reuse for Lossless Allgather in Sharded MoE Training

**Authors:** Ali Zafar Sadiq; Haiying Shen; Masahiro Tanaka

**ID:** 152302 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U4htEskiXj>) | [PDF](<https://openreview.net/pdf?id=U4htEskiXj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152302>)

In training Mixture\-of\-Experts models, sharded data parallelism splits each expert’s parameters across GPUs\. Before each layer runs, GPUs must use Allgather to rebuild the full weight matrix\. This communication can take a large part of each training iteration\. Prior work reduces this cost with lossy compression, but lossy methods can affect accuracy\. We propose Adaptive Exponent Reuse Allgather, or AdERA, a lossless Allgather compression method for sharded MoE training\. Our key observation is that, after a short warmup phase, most weight exponents stay the same across iterations\. AdERA stores these exponents locally and sends only the sign and mantissa when the exponent has not changed\. The receiver then rebuilds the exact original weight by combining the cached exponent with the received sign and mantissa\. Because parameter matrices have different shapes across layers, AdERA compresses only when compression saves time\. It also overlaps compression with Allgather communication and computation\. Our real experiments and large\-scale trace\-driven simulator show that, compared with the lossless baseline, AdERA achieves a 3\.70× speedup on 16 GPUs and is projected to reach 4\.28× on 128 GPUs, while preserving bitwise\-exact parameter reconstruction\. Compared with the lossy baseline, AdERA achieves a 3\.93× speedup on 8 GPUs and is projected to reach 4\.42× on 128 GPUs\. The source code is publicly available\.

## FedRSPO\+: A Heterogeneity\-aware Algorithm for Decision\-focused Federated Learning

**Authors:** Konstantinos Ziliaskopoulos; Alexander Vinel; Jiaqi Wang

**ID:** 148199 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zbsbqMhkWi>) | [PDF](<https://openreview.net/pdf?id=zbsbqMhkWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148199>)

Decision\-focused learning \(DFL\) trains predictive models for downstream optimization, but existing methods largely assume centralized data\. In cross\-silo settings, federated learning is a natural alternative, yet standard federated pipelines optimize prediction quality rather than decision quality and do not account for client heterogeneity in downstream objectives or feasible sets\. Heterogeneity is especially problematic for DFL methods: under heterogeneous polyhedral decision problems, small perturbations can cause discontinuous changes in optimal decisions, leading to unstable client updates and aggregation\. We propose FedRSPO\+, a heterogeneity\-aware framework for decision\-focused federated learning\. Our approach is built on RSPO\+, a regularized predict\-then\-optimize surrogate that smooths the decision map through projection, enabling stable optimization even when clients face different objectives and constraints\. We show that RSPO\+ upper bounds downstream decision error and regret under mild assumptions, and that FedRSPO\+ has cross\-client heterogeneity bounds that \(i\) scale with both objective and feasible\-set heterogeneity, \(ii\) vanish at homogeneity, and \(iii\) do not require strong convexity\. We develop an annealed and modular training procedure that is compatible with standard federated personalization and aggregation methods\. We evaluate FedRSPO\+ on three experimental settings: controlled synthetic knapsack instances that isolate multiple axes of heterogeneity, a shortest path DFL benchmark, and a real\-world PJM energy pricing case study\. Across these experiments, we compare against prediction\-only federated learning and DFL frameworks under varying heterogeneity and communication budgets\. Together, our results suggest that smoothing is a useful ingredient for stable collaborative decision learning and provide a first heterogeneity\-aware foundation for federated DFL\.

## nnTrace: Detecting and Localizing Silent Bugs in Distributed Training

**Authors:** Haitian Jiang; Shaowei Zhu; Zhen Zhang; Zhenyu Song; Xinwei Fu; Zhen Jia; Yida Wang; Jinyang Li

**ID:** 154832 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AcEBYF0OfF>) | [PDF](<https://openreview.net/pdf?id=AcEBYF0OfF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154832>)

Distributed training is essential for scaling LLM training across thousands of GPUs\. However, as distributed training requires complex implementations, they are prone to silent bugs, which do not produce explicit error signals but lead to in correct training outcomes\. Common debugging practices based on monitoring training loss or gradient norm curves are slow or unable to detect bugs and also do not help localize bugs\. We design and implement nnTrace, the first systematic differential testing system for detecting and localizing silent bugs in distributed training\. nnTrace aligns intermediate tensors from distributed training with those from a trusted reference implementation\. To properly compare the floating\-point values in the corresponding tensors, we propose a novel mathematical analysis that provides a guideline for setting tolerances, enabling nnTrace to distinguish bug\-induced errors from numerical errors\. Experimental results demonstrate that nnTrace effectively detects 11 existing bugs and 3 new bugs in the widely used Megatron\-LM framework\. nnTrace is effective in various training recipes, including low\-precision recipes involving BF16 and FP8\. Notably, Megatron\-LM has already adopted the method proposed by nnTrace in its development workflow\. Our code is available at https://anonymous\.4open\.science/r/NECK\-3C61/\.

## Faster Rates For Federated Variational Inequalities

**Authors:** Guanghui Wang; Satyen Kale

**ID:** 152615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RmzepfWb3R>) | [PDF](<https://openreview.net/pdf?id=RmzepfWb3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152615>)

In this paper, we study federated optimization for solving stochastic variational inequalities \(VIs\), a problem that has attracted growing attention in recent years\. Despite substantial progress, a significant gap remains between existing convergence rates and the state\-of\-the\-art bounds known for federated convex optimization\. In this work, we address this limitation by establishing a series of improved convergence rates\. First, we show that, for general smooth and monotone variational inequalities, the classical Local Extra SGD algorithm admits tighter guarantees under a refined analysis\. Next, we identify an inherent limitation of Local Extra SGD, which can lead to excessive client drift\. Motivated by this observation, we propose a new algorithm, the Local Inexact Proximal Point Algorithm with Extra Step \(LIPPAX\), and show that it mitigates client drift and achieves improved guarantees in several regimes, including bounded Hessian, bounded operator, and low\-variance settings\. Finally, we extend our results to federated composite variational inequalities and establish improved convergence guarantees\.

## Approximation Guarantees for Robust Aggregation in Federated Learning

**Authors:** Mélanie Cambus; Darya Melnyk; Tijana Milentijević; Stefan Schmid

**ID:** 155522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ySjO4QTTH>) | [PDF](<https://openreview.net/pdf?id=4ySjO4QTTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155522>)

Byzantine\-tolerant aggregation is a central challenge in federated learning, especially under heterogeneous client data where malicious updates may be statistically indistinguishable from honest but unusual clients\. Robustness of aggregation algorithms is crucial to the quality of the final model\. In this work, we study the robustness of the Byzantine\-tolerant aggregation through the lens of centroid approximation, examining how closely an aggregation rule can match the average of honest client updates when up to $t$ of $n$ clients are Byzantine\. We connect this objective to classical validity conditions from Byzantine agreement and show that validity alone is insufficient to guarantee good centroid approximation\. Our main theoretical contribution is the first lower bound of $\\sqrt\{\\min\\\{\(n\-t\)/t,d\\\}\}/2$ on the centroid approximation for aggregation under box validity and a matching upper bound of $2\\sqrt\{\\min\\\{n,d\\\}\}$ in the practically relevant case $n&gt;2t$\. In addition, we present a new algorithm that achieves a $2d$\-approximation under convex validity, which also proves that the existing lower bound in the literature is tight\. These results expose a fundamental tradeoff between validity conditions and approximation quality\. We complement the theory with experiments in FedSGD and FedAvg under standard Byzantine attacks, showing that stronger validity improves stability, while tighter centroid approximation can improve accuracy in heterogeneous settings\.

## Beyond the Trial\-and\-Error Loop: Hybrid Projection and Automated Tuning for Distributed Training

**Authors:** Anshu Raina; Peyman Razaghi; Yuankai Chen; Cheng Yao; Yao Fu; Vidushi Goyal; Devang Patel; Wen Xie; Zhenyu Gu; Emad Barsoum

**ID:** 150603 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=guQo7FnJYI>) | [PDF](<https://openreview.net/pdf?id=guQo7FnJYI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150603>)

Configuring distributed LLM training across hundreds of GPUs requires jointly optimizing tensor, pipeline, expert, context, and data parallelism alongside micro\-batch size, recomputation, sharding, and overlap — a combinatorial space where the boundary between memory\-legal and OOM can hinge on a single byte of per\-element activation accounting\. Today, teams navigate it through expensive multi\-node trial and error, burning GPU\-hours on crashes and suboptimal recipes\. We present Primus Projection, which closes this loop with two coupled components\. First, a hybrid projection engine that measures what it can and simulates what it cannot: GPU microbenchmarks on as few as a single device capture compute kernels and any in\-scope communication; a sub\-node downscale–measure–upscale workflow analytically restores out\-of\-scope collectives, FSDP overlap, and the full pipeline schedule at the multi\-node target\. A pure simulation mode runs entirely on CPU, enabling pre\-silicon planning without any GPU\. Second, a tuning agent treats the projection engine as a fast scoring oracle — seconds per candidate instead of tens of minutes — and uses it to drive an intelligent search over the configuration space\. A deterministic seed planner sweeps single axes; an LLM investigation loop proposes cross\-axis combinations the planner cannot reach, with an analytic memory pre\-filter that rejects infeasible candidates before any GPU time is spent\. Validated on Llama 3\.1 \(dense\) and Mixtral 8×22B \(MoE\) across two GPU generations, all projections stay within \~10% of measured multi\-node throughput\. In a Mixtral 8×22B case study, the agent discovers a configuration delivering \+27% throughput over the published 4\-node BF16 reference at the same scale — in under 30 minutes of single\-node exploration, with no hand\-written configs and no full\-cluster profiling pass\.

## Talk Less, Work More: Communication\-Efficient Decentralized Stochastic Approximation

**Authors:** Tianyu Cao; Haixiang Sun; Yang Xu

**ID:** 155976 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1PWHsICnyE>) | [PDF](<https://openreview.net/pdf?id=1PWHsICnyE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155976>)

Decentralized Stochastic Approximation \(SA\) enables cooperative fixed\-point solving over mesh networks without a central server\. In these systems, local update is relatively cheap compared with coordination, and frequent information exchange makes communication cost the main bottleneck\. To alleviate this issue, we propose a decentralized SA method in which each agent performs $H$ local updates before each communication round\. By amortizing communications over multiple local SA updates, the method can substantially reduce communication cost\. We also study a multiple mixing scheme based on FastMix, which trades a small amount intra\-round communications for a stronger consensus effectiveness on poorly connected graphs\. Theoretically, we establish finite\-time bounds under general contractive norms and Markovian sampling, by combining contraction, consensus error, and delayed Markovian terms in a round\-level Lyapunov recursion\. The results show trade\-offs among computation, communication and sampling\. Numerical experiments on decentralized Q\-learning, Markovian SGD and linear SA validate the theory and show substantial communication savings for target accuracy\.

## VOID: Backdoor Injection through Knowledge Vacuity in Federated Unlearning

**Authors:** Wenwei Zhao; Yuxuan Xie; Haiyun Liu; Jie Xu; Zhuo Lu

**ID:** 154478 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DIJLpUupvC>) | [PDF](<https://openreview.net/pdf?id=DIJLpUupvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154478>)

Federated unlearning \(FU\) enables federated systems to remove designated data from a trained global model, but its security risks remain poorly understood\. We show that calibration\-based FU introduces a structural vulnerability through finite\-step post\-hoc corrections, which leave behind \\emph\{knowledge vacuity\} in weakly constrained residual dimensions where the unlearned data's influence is suppressed while retained\-task recovery pressure remains limited\. We propose VOID, an unlearning\-phase backdoor attack that exploits knowledge vacuity to implant trigger semantics along the legitimate unlearning trajectory\. VOID identifies these residual dimensions through influence\-based trajectory estimation and neuron\-level vacuity profiling, then performs masked semantic substitution during unlearning\. Across datasets and FU methods, VOID achieves up to 99\\% attack success, preserves clean accuracy, and persists after post\-unlearning finetuning\. Our results show that approximate forgetting can expose writable capacity for adversarial reuse\.

