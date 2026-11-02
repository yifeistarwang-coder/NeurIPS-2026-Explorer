# Applications / Health

应用 / 医疗健康

168 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## MedMemoryBench: Benchmarking Agent Memory in Personalized Healthcare

**Authors:** Yihao Wang; Haoran Xu; Renjie Gu; Yixuan Ye; Xinyi Chen; Xinyu Mu; Yuan Gao; guo chunxiao; Peng Wei; Jinjie GU; Huan Li; Ke Chen; Lidan Shou

**ID:** 139145 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iL37bwRpOg>) | [PDF](<https://openreview.net/pdf?id=iL37bwRpOg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139145>)

The large\-scale deployment of personalized healthcare agents demands memory mechanisms that are exceptionally precise, safe, and capable of long\-term clinical tracking\. However, existing benchmarks primarily focus on daily open\-domain conversations, failing to capture the high\-stakes complexity of real\-world medical applications\. Motivated by the stringent production requirements of an industry\-leading health management agent serving tens of millions of active users, we introduce \*\*MedMemoryBench\*\*\. We develop a human\-agent collaborative pipeline to synthesize highly realistic, long\-horizon medical trajectories based on clinically grounded, synthetic patient archetypes\. This process yields a massive, expertly validated dataset comprising approximately 2,000 sessions and 16,000 interaction turns\. Crucially, MedMemoryBench departs from traditional static evaluations by pioneering an \*evaluate\-while\-constructing\* streaming assessment protocol, which precisely mirrors dynamic memory accumulation in production environments\. Furthermore, we formalize and systematically investigate the critical phenomenon of memory saturation, where sustained information influx actively degrades retrieval and reasoning robustness\. Comprehensive benchmarking reveals severe bottlenecks in mainstream architectures, particularly concerning complex medical reasoning and noise resilience\. By exposing these fundamental flaws, MedMemoryBench establishes a vital foundation for developing robust, production\-ready medical agents\. Our dataset and benchmark are publicly available at: \.

## pyCD: A Unified Benchmark for Reliable Evaluation of Cognitive Diagnosis Models

**Authors:** Youheng Bai; Xueyi Li; Tengteng Cheng; Mingliang Hou; Teng Guo; Jiaqi Zheng; Zitao Liu

**ID:** 139115 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kGok2e0ST7>) | [PDF](<https://openreview.net/pdf?id=kGok2e0ST7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139115>)

_Abstract unavailable from the accessible public sources._

## MathCD: A Benchmark Dataset for Cognitive Diagnosis with Semantic Information

**Authors:** Xueyi Li; Youheng Bai; Tengteng Cheng; Mingliang Hou; Teng Guo; Jiaqi Zheng; Yongdong WU; Zitao Liu

**ID:** 139318 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XhTjbnmlac>) | [PDF](<https://openreview.net/pdf?id=XhTjbnmlac>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139318>)

_Abstract unavailable from the accessible public sources._

## Prototype\-Aligned Multi\-View Graph Learning for EHR Prediction

**Authors:** Jong\-Hoon Park; Young\-Rae Cho

**ID:** 148619 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wOyvN1QBWX>) | [PDF](<https://openreview.net/pdf?id=wOyvN1QBWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148619>)

Electronic health records \(EHRs\) are a valuable resource for clinical prediction because they capture rich longitudinal information about patient care\. Existing graph\-based EHR models often learn relations at the cohort level, but do not clearly distinguish between global event associations and the subset of interactions actually instantiated within an individual visit\. To address this limitation, we propose MVP\-EHR, a multi\-view prototype learning framework for EHR prediction with shared type\-aware prototype alignment\. MVP\-EHR combines three key ideas: \(i\) a lift\-thresholded global knowledge graph that captures cohort\-level event associations, \(ii\) a visit\-induced local knowledge graph that preserves only the observed events and supported event\-event relations within each visit, and \(iii\) shared type\-aware prototypes that align local and global event representations before post\-event multi\-view fusion and temporal prediction\. Experiments on MIMIC\-IV show that MVP\-EHR achieves strong and consistent performance across multiple clinical prediction tasks, including 0\.9339 AUROC and 0\.1706 AUPRC for mortality prediction, the best AUROC on readmission prediction, the best overall performance on phenotype prediction, and a strong AUPRC/F1 tradeoff on drug recommendation among the compared baselines\. Ablation results further show that separating global prior from visit\-instantiated evidence, together with shared prototype alignment, is critical for robust performance\.

## Hyperbolic Concept Embedding Model for Interpretable Medical Image Diagnosis

**Authors:** Qihao Xu; Yadong Liu; Yong Xu; Xiaoling Luo; Chengliang Liu

**ID:** 150377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iXV1pqk7ar>) | [PDF](<https://openreview.net/pdf?id=iXV1pqk7ar>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150377>)

Although deep neural networks \(DNNs\) have demonstrated strong performance in medical classification, their opaque reasoning undermines the trustworthiness of clinical diagnoses due to limited interpretability\. Concept bottleneck models \(CBMs\) introduce an intermediate concept layer, decomposing black\-box prediction into an explicit reasoning path: image → concept → disease\. However, concepts and their corresponding diagnostic results in medical image diagnosis are often hierarchical, inclusive, and semantically unevenly distributed\. Most concept\-based methods represent concepts in Euclidean space and treat them as isolated entities, which hinders the modeling of their structural relationships and thereby reduces diagnostic transparency\. To address this, we introduce a hyperbolic concept embedding model \(HCEM\) that maps medical concepts into a hyperbolic space better suited for hierarchical representation, enabling explicit modeling of complex concept relationships and their semantic associations with diseases\. In this model, we regularize the hyperbolic concept embedding space using a positive–negative concept contrastive loss and a concept entailment cone loss\. Furthermore, we employ an intervention\-aware disease concept hyperbolic embedding regularization to learn their dynamic relationships\. It avoids rigid rule priors while improving diagnostic consistency and flexibility under concept interventions\. Extensive experiments on four medical datasets validate that our HCEM provides high accuracy in both concept and disease classification, as well as superior interpretability and intervenability\. The code will be released soon\.

## Cite What You Explore: Budget\-Aware LLM Reasoning over Medical KGs with Verifiable Evidence

**Authors:** Chen Chen; Dongjie Wang; Mei Liu; Zijun Yao

**ID:** 153952 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HKqJQcqfEb>) | [PDF](<https://openreview.net/pdf?id=HKqJQcqfEb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153952>)

Post\-discharge risk prediction from electronic health records \(EHRs\) is difficult because many dependencies that link discharge\-time observations to downstream complications, such as comorbidity cascades and drug\-disease interactions, are absent from the record\. External medical knowledge graphs \(KGs\) can supply these missing dependencies, but tracing them demands three properties: KG exploration must remain cost\-bounded, retrieved evidence must be differentiated by source quality, and the resulting rationale must be citable for retrospective review\. Large language models \(LLMs\) can plan and verify over structured evidence, making them natural candidates for KG reasoning, but existing LLM\-based methods do not satisfy these three properties jointly\. In this paper, we propose BAR, a Budget\-Aware LLM Reasoning framework over medical KGs with three components\. First, BAR refines the raw KG into disease\-specific evidence graphs whose edges carry support scores and provenance records, turning the KG into a quality\-annotated reasoning space rather than a static feature source\. Second, an LLM then reasons over this graph through a plan\-navigate\-verify loop that decomposes the question into steps, retrieves evidence under a patient\-specific budget, and revises when verification fails\. Third, a reasoning policy is trained with a reward that compares predictions with and without acquired evidence, combined with acquisition cost and citation\-integrity terms\. Across 8 diseases and 3 prediction horizons on MIMIC\-III and MIMIC\-IV, BAR improves AUPRC by 3\.4 points over the strongest baseline, raises citation precision from 59\.8\\% to 77\.9\\%, and consumes only 62\-65\\% of the budget cap\. The code is available at https://anonymous\.4open\.science/r/BAR/\.

## Long\-Term Risks of Risk\-Based Allocation

**Authors:** Jivat Neet Kaur; Jane Lee; Manolis Zampetakis

**ID:** 155991 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1LHT6frSus>) | [PDF](<https://openreview.net/pdf?id=1LHT6frSus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155991>)

Algorithmic risk predictors are increasingly being used to inform resource allocation in healthcare and other high\-stakes domains\. Common in many such settings, the public decision maker delegates service provision to private organizations and compensates them  according to each individual's predicted cost of service\. We show that this common allocation mechanism can fail when organizations engage in \\emph\{favorable selection\}, i\.e\., strategically choosing individuals whose actual costs are below the payment model predictions\. Motivated by health insurance payments in the Medicare Advantage \(MA\) program, we provide a theoretical framework to study the interaction between a decision maker and a strategically selecting service provider\. Our theoretical framework predicts two empirical patterns observed in Medicare Advantage that have become central concerns: enrollment in the private program expands, while government payments rise above the counterfactual cost of direct public provision\. Guided by our theoretical framework, we then propose a reformed payment policy that is implementable under the government's data\-access constraints\. We prove that its equilibria eliminate overpayment while preserving profits for efficient organizations\. We validate the framework in synthetic and semi\-synthetic experiments that illustrate the advantages of our reformed policy, over the status quo\.

## Strategic Feature Selection and Regularization

**Authors:** Jivat Neet Kaur; Pratik Patil; Divya Shanmugam; Emma Pierson; Michael Jordan; Nika Haghtalab; Meena Jagadeesan; Ahmed Alaa; Serena Wang

**ID:** 154371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E5F4jOGdsq>) | [PDF](<https://openreview.net/pdf?id=E5F4jOGdsq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154371>)

When algorithmic predictors inform resource allocation in high\-stakes domains such as healthcare, these predictors must account for strategic manipulation of input features\. The typical solution is to redesign the predictor itself to explicitly account for strategic interactions\. In practice, however, decision makers are often constrained to adjusting coarser levers within existing prediction pipelines\. For example, healthcare organizations often select which features to exclude based on perceived manipulability, while using standard regularization procedures to shrink the coefficients of retained features\. In this work, we initiate a formal study of strategic classification through \*feature selection\* and its interaction with \*ridge regularization\*\. Our main finding is that excluding features based on manipulability alone is generally suboptimal\. We provide a fine\-grained characterization of the performance of a feature subset under optimal regularization, yielding new insights for policy design\. Motivated by this characterization, we develop a practical algorithm for jointly choosing the feature set and the level of ridge regularization\. Through a real\-world case study on a healthcare payments benchmark, we illustrate how our algorithm can guide the design of coarse policy levers in practice\. Our results provide a principled, practical framework for mitigating the effects of strategic behavior in algorithmic decision\-making systems\.

## How to Train a Surgeon? Benchmarking Generalist Agents in Surgical Scene Understanding

**Authors:** Gengyuan Zhang; Xiao Han; Shijie Zhou; Abdullah Koukash; Ghazal Ghazaei; Jindong Gu; Jingpei Wu; Yuqicheng Zhu; Nassir Navab; Volker Tresp

**ID:** 139078 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mUEEwbzwMy>) | [PDF](<https://openreview.net/pdf?id=mUEEwbzwMy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139078>)

Evaluating general\-purpose multimodal large language models \(MLLMs\) for surgical scene understanding remains limited by scarce surgical data and fragmented evaluation protocols\. We address these challenges through a two\-stage evaluation framework for surgical scene understanding\. In Stage I, we introduce SURGKNOWBENCH, a diagnostic benchmark that harmonizes public surgical datasets across procedures and tasks and evaluates proprietary and open\-weight MLLMs to map the boundary of pretrained surgical competence\. SURGKNOWBENCH reveals that current models retain partial visual priors but remain weak on procedural reasoning and workflow assessment\. Building on this failure frontier, and motivated by the scaffolded nature of surgical training, we introduce SURGAGENTGYM, a controlled environment where general\-purpose MLLM agents can use bounded knowledge search over SURGWIKI and general\-purpose visual grounding for surgical tasks\. SURGAGENTGYM evaluates whether generalist agents can improve surgical understanding at inference time through tool\-mediated evidence use, without additional surgical training\. Our results show that agentic inference narrows the gap mainly for perception\-heavy tasks, while fine\-grained localization and expert\-style assessment remain persistent bottlenecks\. This opens a path toward future studies of agentic surgical understanding\. We have released the codebase and artifacts\.

## SheafStain: Sheaf\-Theoretic Schr\\"odinger Bridge for Spatially and Biologically Coherent Virtual Staining

**Authors:** Hyeongyeol Lim; Hongjun Yoon; Eunjin Jang; Daeky Jeong; Won June Cho; HWAMIN LEE

**ID:** 155872 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2DhyeIm0FC>) | [PDF](<https://openreview.net/pdf?id=2DhyeIm0FC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155872>)

Current virtual staining approaches offer the potential for time\- and cost\-efficient  biomarker quantification in cancer diagnostics and prognostics\.  However, patch\-wise inference for gigapixel whole slide images \(WSIs\) fails to maintain spatial continuity,  yielding artifacts that cause catastrophic mismatches with ground\-truth images\. Although pathology Vision Foundation Models \(VFMs\) offer rich representations,  their self\-attention causes varying global contexts to produce inconsistent embeddings  for the same physical region\.  We formalize and validate this \`\`context contamination'' as a sheaf\-theoretic problem  where these embeddings form a presheaf that violates the gluing axiom\. To address this, we propose SheafStain, a new approach that reinterprets  VFM features as sheaf\-like sections for spatially and biologically coherent virtual staining\.  Specifically, SheafStain integrates class and patch tokens into a Schr\\"odinger Bridge framework  as sheaf\-like sections\.  While the class token anchors biological consistency, patch tokens form a per\-position spatial map\. A backbone co\-pretrained on Hematoxylin \\&amp; Eosin \(H\\&amp;E\) and Immunohistochemistry \(IHC\) yields  non\-degenerate cross\-stain stalks, so a single VFM feature space supervises  both input conditioning and output stain alignment\. Departing from prior work that evaluates on isolated $256 \\times 256$ patches  and either random\-crops or resizes the $1024 \\times 1024$ ground truth,  we translate at $256 \\times 256$ and evaluate on the stitched $1024 \\times 1024$ outputs  across HER2, ER, PR, and Ki\-67\. SheafStain demonstrates promising results against six prior methods while mitigating patch\-boundary stitching artifacts\. Code will soon be released upon acceptance\.

## RxDiff: Discrete Diffusion for Medication Recommendation with Inference\-Time Safety Control

**Authors:** Jinke Feng; Wenjie Du; Xuchang Zhong; Yang Wang

**ID:** 151020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dZ1BldSaSA>) | [PDF](<https://openreview.net/pdf?id=dZ1BldSaSA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151020>)

Medication recommendation requires generating drug combinations that are therapeutically effective while minimizing harmful drug\-drug interactions \(DDIs\)\. Both objectives are rooted in the combinatorial nature of prescriptions\. Existing discriminative methods predict drugs independently, neglecting inter\-drug dependencies; autoregressive methods introduce sequential dependencies but impose arbitrary generation orders and accumulate errors\. Both paradigms confine DDI mitigation to training\-time penalties, offering limited capacity to regulate interactions during inference for individual prescriptions\. We reformulate medication recommendation as a discrete diffusion process and propose RxDiff, which leverages iterative denoising for bidirectional and revisable generation and provides a natural interface for dynamic DDI regulation at each step\. A clinically grounded dual\-guided forward process and an inference\-time  interaction\-aware modulation mechanism are designed to jointly enable RxDiff to achieve consistent accuracy improvements, lower and more individually controlled DDI rates, and robustness to evolving DDI knowledge across MIMIC\-III, MIMIC\-IV, and a real\-world inpatient dataset\. Code is available at https://anonymous\.4open\.science/r/RxDiff\-9157\.

## HyperNSDE: Personalized Neural SDEs for Joint Static—Longitudinal Clinical Data Generation

**Authors:** Perrine Chassat; Agathe Guilloux

**ID:** 153453 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LB1dWNecCT>) | [PDF](<https://openreview.net/pdf?id=LB1dWNecCT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153453>)

_Abstract unavailable from the accessible public sources._

## Structure\-Semantic Guided Closed\-Loop Medical Anomaly Detection via Multi\-Agent Collaboration

**Authors:** Chunjing Xiao; Yunxiao Dai; Yuwan Fu; Yucong Wang; Chong Tang; Fan Zhou; Ying Ma

**ID:** 153376 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LplVYRTK4x>) | [PDF](<https://openreview.net/pdf?id=LplVYRTK4x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153376>)

_Abstract unavailable from the accessible public sources._

## Topology\-Reinforced Swin Transformer for Medical Image Analysis

**Authors:** Pengfei Gu; Huimin Li; Guangyu Meng; Hao Zheng; Haoteng Tang; Bin Fu; Danny Z Chen

**ID:** 154830 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AcOoZ44WpN>) | [PDF](<https://openreview.net/pdf?id=AcOoZ44WpN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154830>)

_Abstract unavailable from the accessible public sources._

## Beyond Stabilization: Dual\-EMA Teachers for Global–Local Semantic Learning in Semi\-Supervised Medical Image Segmentation

**Authors:** KAIBO LIAO; Yazhou Ren; Song Wu; Kecheng Chen; Xiaorong Pu; Lixin Duan

**ID:** 153534 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KcwJaRLHaj>) | [PDF](<https://openreview.net/pdf?id=KcwJaRLHaj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153534>)

_Abstract unavailable from the accessible public sources._

## Incentivizing Agentic Retrieval for Disease\-Centric Clinical Case Search via Trajectory Memory

**Authors:** Jie Lin; Xiang Liu; Lihao Liu; Liansheng Wang

**ID:** 149120 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sjtN3Mjrl6>) | [PDF](<https://openreview.net/pdf?id=sjtN3Mjrl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149120>)

Clinical case search aims to retrieve disease\-consistent prior cases from electronic health record databases for a natural\-language patient query under a retrospective retrieval objective\.  The task is challenging because patient queries contain heterogeneous evidence, including symptoms, diagnoses, laboratory results, treatments, and timelines\. These fields are often only partially specified, and fixed retrieval pipelines cannot adapt from prior search trajectories\. Existing clinical retrieval methods typically flatten the query into a single representation, use static retrieval pipelines, or lack an explicit mechanism for cross\-case adaptation\.  \\textbf\{PatientSearch\-SE\} addresses retrospective disease\-centric clinical case search with three components: a \\emph\{sufficiency\-aware planner\} that separates dimensions suitable for direct matching from those requiring hypothesis completion, a \\emph\{hierarchical tool orchestration\} module that maps these states to retrieval and re\-ranking actions, and a \\emph\{trajectory\-guided memory consolidation\} mechanism that writes reusable disease cards and strategy templates without parameter updates\.  We also propose an evaluation framework that combines disease\-centric retrieval outcomes with trajectory\-level process probes for retrieval behavior analysis\. Experiments on PMC\-Patients and MIMIC\-IV show higher disease\-centric retrieval metrics for PatientSearch\-SE than for the compared same\-interface sparse, dense, and reasoning\-based baselines, with larger gains on PMC\-Patients and more modest gains on MIMIC\-IV\. Its memory\-accumulation results are consistent with controlled external\-memory adaptation, and its retrieved cases provide additional evidence for diagnosis\-masked downstream few\-shot RAG prediction under this retrospective protocol\.

## Revisiting Incremental Learning: A Three\-Interface Diagnosis of Stability and Plasticity

**Authors:** Keuntae Kim; Beomseok Lee; Hyunwoo Kim; Yong Suk Choi

**ID:** 150119 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kX9Kbog4s6>) | [PDF](<https://openreview.net/pdf?id=kX9Kbog4s6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150119>)

Incremental learning is usually evaluated through the final classifier or LM head, but this interface does not indicate where forgetting occurs\. A drop in accuracy may reflect representation degradation in the backbone, readout mismatch in the head, or both\. We argue that BWT and FWT should therefore be interpreted as interface\-dependent quantities rather than as single model\-level properties\. We study three evaluation interfaces: the sequentially trained head, a newly optimized probing classifier, and a classifier\-free backbone separability diagnostic based on clustering\. These interfaces answer different questions: deployed performance, recoverable information under a new readout, and representation\-level separability\. Across CIL experiments with encoder and decoder language backbones, plus discriminative\-backbone TIL sanity checks, we find that qualitative conclusions about forgetting and plasticity change substantially with the evaluation interface\. Standard heads often indicate severe forgetting, probes often suggest near\-complete recoverability, and backbone diagnostics suggest intermediate representation changes and a stability\-\-plasticity pattern\. This pattern is consistent across five clustering algorithms and three clustering metrics, suggesting that it is not an artifact of a single diagnostic choice\. Finally, we use Just LM\-Head Tuning \(JLT\) as a head\-only intervention to quantify recoverable performance on a fixed incrementally trained backbone\. The large gap between standard and head\-realigned performance suggests that many failures attributed to catastrophic forgetting are better understood as head\-\-backbone mismatch plus partial representation drift\. Our results call for reporting where forgetting is measured, not only how much forgetting is observed\.

## CoE\-Agent: Co\-Evolving Patient\-Doctor Agents via Interactive Policy Graph Optimization for Clinical Decision Making

**Authors:** Guolin Huang; Wenting Chen; Linlin Shen

**ID:** 155085 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8YLhu314Jr>) | [PDF](<https://openreview.net/pdf?id=8YLhu314Jr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155085>)

_Abstract unavailable from the accessible public sources._

## FinAl: Fine\-grained Alignment for Detail\-Preserving Medical Vision\-Language Pretraining

**Authors:** Jongsu Youn; Dongyoung Lee; JaeHyeong Bae; SANG\-IL CHOI; Sangtae Choi; Dae Ung Jo; Jongwon Choi

**ID:** 152146 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VBJAawjSql>) | [PDF](<https://openreview.net/pdf?id=VBJAawjSql>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152146>)

_Abstract unavailable from the accessible public sources._

## Information Bottleneck\-Guided Adaptive Hypergraph Transformer for Brain Disease Diagnosis

**Authors:** Jingxi Feng; Xudong Chen; Yifan Zhang; Heming Xu; Hongcheng Han; Xijing Wang; Dong Zhang; Shaoyi Du

**ID:** 151673 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yu6MCCLKmF>) | [PDF](<https://openreview.net/pdf?id=Yu6MCCLKmF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151673>)

_Abstract unavailable from the accessible public sources._

## JMed48k: A Multi\-Profession Japanese Medical Licensing Benchmark for Vision\-Language Model Evaluation

**Authors:** Yue Xun; Junyu Liu; Qian Niu; Xinyi Wang; Zheng Yuan; Zirui Li; Zequn Zhang; Bowen Zhao; Emma, Shujun Wang; Zihui Li; Kan Hatakeyama\-Sato; Yusuke Iwasawa; Yutaka Matsuo

**ID:** 139030 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pFkWhEmt1A>) | [PDF](<https://openreview.net/pdf?id=pFkWhEmt1A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139030>)

We introduce JMed48k, a multi\-profession Japanese healthcare licensing benchmark for evaluating vision\-language models\. Built from official PDF materials released by the Japanese Ministry of Health, Labour and Welfare, JMed48k contains 48,862 exam questions and 20,142 images from 11 national licensing examinations between 2005 and 2025, with visual content annotated under an 8\-type taxonomy\. From this corpus, we derive JMed48k\-Eval, a recent five\-year evaluation subset with 12,484 scored questions, including 9,905 text\-only questions and 2,579 questions with images\. We evaluate 21 proprietary, open\-source, and medical\-specific models, reporting text\-only and with\-image performance separately\. Because these subsets contain different questions, we further introduce a paired image\-removal audit that evaluates questions with images before and after removing visual content to explore four answer\-transition states\. The audit shows that proprietary and open\-source models gain substantially from images, whereas medical\-specific systems show limited observable use of visual evidence, with many correct answers persisting after image removal\. Even among proprietary models, the net image\-removal effect varies sevenfold across professions, from \+5\.7 points on Physician questions to \+39\.8 points on Public Health Nurse questions\. We release JMed48k to support reproducible, profession\-stratified evaluation of vision\-language models in medical licensing settings\.

## CORAL: Learning Amyloid Fibril Ligand Docking with Cooperative Binding Rewards

**Authors:** Yasheng SUN; Bohan Li; Youqi Tao; Jürgen Schmidhuber

**ID:** 154426 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dfzv8dmnaf>) | [PDF](<https://openreview.net/pdf?id=Dfzv8dmnaf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154426>)

A hallmark of neurodegenerative diseases such as Alzheimer's and Parkinson's is the aberrant aggregation of proteins into amyloid fibrils, and small molecules that selectively bind to these fibrils hold promise as diagnostics, imaging probes, and therapeutics\. Predicting how such ligands bind to fibril targets, however, presents two fundamental challenges\. First, resolved co\-crystal structures of amyloid–ligand complexes are exceptionally scarce; even with recent advances in cryo\-EM only a handful have been structurally characterized, making supervised training of docking models impractical for this target class\. Second, amyloid fibrils present a binding mode fundamentally different from globular proteins: ligands intercalate into longitudinal cross\-β grooves and stack cooperatively along the fibril axis, a geometry that existing docking models are not designed to capture\. To address these challenges, we present CORAL \(Cooperative Amyloid Ligand docking\), a reinforcement learning framework that trains a generative docking model to produce ligand pose distributions tailored to the cross\-β groove geometry\. Our reward explicitly incorporates cooperative ligand–ligand stacking energy alongside protein–ligand docking affinity, directly capturing the distinctive binding geometry of amyloid fibrils\. We further introduce a curated evaluation set of amyloid–ligand complexes constructed from model\-generated poses validated by domain experts\. Experiments on both experimentally resolved structures and this evaluation set demonstrate improved pose quality and binding affinity correlation over existing docking baselines\.

## Source\-Causal Control of Historical Context in Longitudinal Radiology Report Generation

**Authors:** Dmitry Lvov; Ilya Pershin

**ID:** 154092 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GHvYdC6tmg>) | [PDF](<https://openreview.net/pdf?id=GHvYdC6tmg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154092>)

Longitudinal radiology report generation increasingly conditions on prior images and reports\. This history is clinically valuable, but it creates a source\-validity failure mode: a generator can carry prior\-only findings into the current report\. Weintroduce source\-causal robustness, a stress\-test and control framework that holds the current chest X\-ray fixed while intervening on historical context\. On a full eligible MIMIC\-CXR longitudinal study \(18,716 pairs; 93,580 generations across five source conditions\), historical context consistently trades fewer missed findings for more unsupported positives\. Matched wrong\-history, the key negative control, increases proxy\-defined false positives by \+0\.366 per report while reducing false negatives by −0\.129; random wrong\-history yields an even larger false positive stress signal \(\+0\.465 FP/report\)\. We propose the Source\-Causal Finding Router \(SCFR\), a source\-validity controller trained with within\-evaluation subject exclusion\. Across three held\-out evaluations, SCFR repairs matched wrong\-history false\-positive inflation by −0\.343, −0\.550, and −0\.457 per report, passes Holm corrected primary testing at the bootstrap resolution floor \(Holm\-adjusted p ≤ 0\.0012\), and satisfies fixed current\-only parity margins\. Cross\-generator stress panels with RadInfer and Libra, together with ReXPref\-Prior, RadGraph2, Chest ImaGenome, ablations, and case review, support the mechanism\. These results establish a protocol\-defined state\-of\-the\-art source\-causal robustness/control result for longitudinal radiology report generation under matched wrong\-history stress tests\.

## Medical LLMs as Medical World Models:  Unified Policy\-Dynamics Learning with Test\-Time Search

**Authors:** Yucheng Zhou; Peng Luo; Jianbing Shen

**ID:** 148462 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xdOHRMB63r>) | [PDF](<https://openreview.net/pdf?id=xdOHRMB63r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148462>)

_Abstract unavailable from the accessible public sources._

## One Loss to Rule Them All: Marked Time\-to\-Event for Structured EHR Foundation Models

**Authors:** Zilin Jing; Vincent Jeanselme; Yuta Kobayashi; Simon Lee; Chao Pang; Aparajita Kashyap; Yanwei Li; Xinzhuo Jiang; Shalmali Joshi

**ID:** 150016 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lNy0GEHZYE>) | [PDF](<https://openreview.net/pdf?id=lNy0GEHZYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150016>)

_Abstract unavailable from the accessible public sources._

## DoAtlas\-1: A Causal Compilation Paradigm for Clinical AI

**Authors:** Yulong Li; Jianxu Chen; Xiwei Liu; Chuanyue Suo; Rong Xia; Yichen Li; Xinlin Zhuang; Niranjana A Menon; Jionglong Su; Eran Segal; Imran Razzak

**ID:** 152826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q7ooeLQ5Xm>) | [PDF](<https://openreview.net/pdf?id=Q7ooeLQ5Xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152826>)

Medical foundation models generate narrative explanations but cannot quantify intervention effects, detect evidence conflicts, or validate literature claims, limiting clinical auditability\. We propose causal compilation, a paradigm that transforms medical evidence from narrative text into executable code\. The paradigm standardizes heterogeneous research evidence into structured estimand objects, each explicitly specifying intervention contrast, effect scale, time horizon, and target population, supporting six executable causal queries: do\-calculus, counterfactual reasoning, temporal trajectories, heterogeneous effects, mechanistic decomposition, and joint interventions\. We instantiate this paradigm in DoAtlas\-1, compiling 1,445 effect kernels from 754 studies through effect standardization, conflict\-aware graph construction, and real\-world validation \(Human Phenotype Project, 10,000 participants\)\. The system achieves 98\.5% canonicalization accuracy, 100% conflict detection recall, and 80\.5% query executability\. This paradigm shifts medical AI from text generation to executable, auditable, and verifiable causal reasoning\.

## MindGuard: Guardrail Classifiers for Multi\-Turn Mental Health Support

**Authors:** António Farinhas; Nuno M Guerreiro; José Pombal; Pedro Henrique Martins; Laura Melton; Alexandra Conway; Cara Dochat; Maya D&amp;amp;\#x27;Eon; Ricardo Rei

**ID:** 138950 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uMIiizxIrQ>) | [PDF](<https://openreview.net/pdf?id=uMIiizxIrQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138950>)

_Abstract unavailable from the accessible public sources._

## Uncertainty Estimation for Pretrained Medical Image Registration Models via Transformation Equivariance

**Authors:** Lin Tian; Xiaoling Hu; Juan Eugenio Iglesias

**ID:** 148713 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vcFcWZeEEC>) | [PDF](<https://openreview.net/pdf?id=vcFcWZeEEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148713>)

_Abstract unavailable from the accessible public sources._

## Experience Makes Skillful: Enabling Generalizable Medical Agent Reasoning via Self\-Evolving Skill Memory

**Authors:** Haoran Sun; Wenjie Li; Yujie Zhang; Zekai Lin; Fanrui Zhang; Kaitao Chen; Xingqi He; Yichen Li; Mianxin Liu; Lei Liu; Yankai Jiang

**ID:** 150444 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i09nlt9B6r>) | [PDF](<https://openreview.net/pdf?id=i09nlt9B6r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150444>)

_Abstract unavailable from the accessible public sources._

## RealICU: Do LLM Agents Understand Long\-Context ICU Data? A Benchmark Beyond Behavior Imitation

**Authors:** Chengzhi Shen; Weixiang Shen; Tobias Susetzky; Chen Chen; Jun Li; Yuyuan Liu; zhang xuepeng; Zhenyu Gong; Daniel Rueckert; Jiazhen Pan

**ID:** 138984 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sXvJmaafJ2>) | [PDF](<https://openreview.net/pdf?id=sXvJmaafJ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138984>)

Intensive care units \(ICU\) generate dense, evolving streams of clinical information, where physicians must repeatedly reassess patient states under time pressure, underscoring a clear need for reliable AI decision support\. Existing ICU benchmarks typically treat historical clinician actions as ground truth\. However, these actions are made under incomplete information and limited temporal context of the underlying patient state, and may therefore be suboptimal, making it difficult to assess the true reasoning capabilities of AI systems\. We introduce RealICU, a hindsight\-annotated benchmark for evaluating large language models \(LLMs\) under realistic ICU conditions, where labels are created after senior physicians review the full patient trajectory\. We formulate four physician\-motivated tasks: assess \\emph\{Patient Status\}, \\emph\{Acute Problems\}, \\emph\{Recommended Actions\}, and \\emph\{Red Flag\} actions that risk unsafe outcomes\. We partition each trajectory with 30\-min windows and release two datasets: RealICU\-Gold with 930\-window annotations from 94 MIMIC\-IV patients, and RealICU\-Scale with 11,862 windows extended by \\emph\{Oracle\}, a physician\-validated LLM hindsight labeler\. Existing LLMs including memory\-augmented ones performed poorly on RealICU, exposing two failure modes: a recall–safety tradeoff for clinical recommendations, and an anchoring bias to early interpretations of the patient\. We further introduce ICU\-Evo to study structured\-memory agents that improves long\-horizon reasoning but does not eliminate safety failures\. Together, RealICU provides a clinically grounded testbed for measuring and improving AI sequential decision\-support in high\-stakes care\.

## Rethinking Visual Attribution for Chest X\-ray Reasoning in Large Vision Language Models

**Authors:** Guangzhi Xiong; Qiao Jin; Sanchit Sinha; Zhiyong Lu; Aidong Zhang

**ID:** 151683 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YoNjeiTDbj>) | [PDF](<https://openreview.net/pdf?id=YoNjeiTDbj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151683>)

Large Vision Language Models \(LVLMs\) show promise in medical applications, but their inability to faithfully ground responses in visual evidence raises serious concerns about clinical trustworthiness\. While visual attribution methods are widely used to explain LVLM predictions, whether these explanations actually reflect the visual evidence underlying the model's decision is largely unverified, since ground\-truth annotations for internal model reasoning are typically unavailable\. We address this question for chest X\-ray \(CXR\) reasoning by developing a causal evaluation framework that retains only CXR\-VQA samples for which the expert\-annotated region is verified, via counterfactual editing, to be causally responsible for the model's prediction\. Using this framework across 11 attribution methods, six open\-source LVLMs, and two output modes \(direct answer and step\-by\-step reasoning\), we find that existing attribution methods often fail to identify the evidence used by LVLMs\. To address this failure, we propose MedFocus, a concept\-based attribution method that localizes clinically meaningful anatomical regions via unbalanced optimal transport and measures their causal effect on model outputs through targeted interventions\. MedFocus produces spatial, concept\-level, and token\-level attributions and substantially outperforms prior methods, taking a step toward more trustworthy attribution for medical LVLMs\.

## EHRNote\-ChatQA: A Benchmark for Evidence\-Grounded Multi\-Turn Clinical Question Answering over Longitudinal Discharge Summaries

**Authors:** Jiyoun Kim; Muhan Yeo; Eunhye Jang; Jeewon Yang; Hangyul Yoon; Su Ji Lee; Hee J Han; Hee\-Jae Jung; Doyun Kwon; Jun y Lee; Jaehun Lee; Jung\-Oh Lee; Sunjun Kweon; Jong\-Hak Moon; Daseul Kim; Minjae Cho; Edward Choi

**ID:** 139551 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J8cq4kNTbz>) | [PDF](<https://openreview.net/pdf?id=J8cq4kNTbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139551>)

Discharge summaries are crucial clinical documents for patient care, containing clinical context of a patient's overall admission, and are routinely reviewed by medical experts during patient readmission, ongoing care, and diagnostic decision\-making\. In practice, medical experts often must synthesize information across multiple lengthy discharge summaries by iteratively obtaining information from the documents, while also verifying the evidence supporting each answer\. Although large language models \(LLMs\) are increasingly explored for clinical document question answering, existing benchmarks do not sufficiently capture this clinical setting: they either evaluate exam\-style medical knowledge or focus on single\-turn question answering with limited evidence\-grounding evaluation\. We introduce \*\*EHRNote\-ChatQA\*\*, the first benchmark for evidence\-grounded multi\-turn clinical question answering over patients' multiple discharge summaries\. Built from de\-identified MIMIC\-IV discharge summaries, EHRNote\-ChatQA contains 967 patient\-level multi\-turn samples spanning one to five notes and 16,072 medical\-expert\-verified QA pairs \(8,036 content questions, each paired with an evidence\-grounding question\) across eight clinical categories\. We construct the benchmark through an expert\-informed pipeline that combines a comprehensive discharge\-summary structuring schema, expert\-curated multi\-turn QA templates, and LLM\-based generation\. Every single QA sample is then reviewed and revised by 11 medical experts over three weeks\. Benchmarking 22 LLMs \(both open and closed\-sourced\) reveals several findings; evidence grounding is consistently harder than content answering, multi\-turn errors compound across turns, and strong performance on existing single\-turn clinical QA benchmarks does not reliably transfer to this setting\. These results establish EHRNote\-ChatQA as a rigorous and practical benchmark for evaluating clinical QA systems\.

## Rethinking Contrastive Targets in Radiology Language\-Image Pretraining

**Authors:** Yunhe Gao; Ashwin Kumar; Jiaming Liu; Chong Wang; Maya Varma; Fuying Wang; Stefania L Moroianu; Louisa Fay; Sergios Gatidis; Akshay Chaudhari; Curtis Langlotz

**ID:** 148888 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uRbyMugqG7>) | [PDF](<https://openreview.net/pdf?id=uRbyMugqG7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148888>)

CLIP\-style contrastive image\-\-text pretraining is widely used in radiology data, where each image is paired with one report and every other report in the batch is treated as a negative\. Under this recipe, two failures appear, neither systematically addressed by existing contrastive learning theory: zero\-shot evaluation peaks then degrades while training loss keeps decreasing, and training fails to learn at all at large batches\. We hypothesize the cause is structural rather than radiology\-specific: many unpaired reports share clinical findings with a given image, so CLIP's paired\-identity target is systematically biased, not merely noisy\. To test this, we construct CLEVR\-Radiology, a synthetic testbed that preserves only this overlapping\-fact structure and reproduces both failures\. With evidence that the structure is sufficient to reproduce the failures, we develop a target\-misspecification theory that derives both failures from a single deterministic gradient bias amplified by batch size, and use it to motivate a minimal compatibility\-based correction, CorLIP: a text is treated as positive whenever its clinical assertions agree with the image, with no other change to the training pipeline\. Beyond benchmark improvements, CorLIP removes the post\-peak degradation, makes large\-batch training succeed where it previously collapsed, substantially amplifies the gains from more data, and is the only configuration that remains stable up to B=2048\. The correction also transfers from chest X\-ray to 3D CT modalities\.

## Generalized Adaptive Boosting and the Geometry of Mistakes

**Authors:** Marco Bressan; Nataly Brukhim; Nicolò Cesa\-Bianchi; Emmanuel Esposito; Yishay Mansour; Shay Moran; Maximilian Thiessen

**ID:** 152221 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uf1pIHYHQJ>) | [PDF](<https://openreview.net/pdf?id=Uf1pIHYHQJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152221>)

Not all mistakes are alike\. For example, in medical diagnosis, false positive and false negative mistakes have a different impact and should not be aggregated\. By revisiting the classical theory of boosting through this lens, we introduce the notion of $Z$\-learner, which returns weak hypotheses achieving joint false\-positive/false\-negative guarantees $\(FP,FN\)$ from some set $Z \\subseteq \[0,1\]^2$\. This formulation generalizes the standard notion of $\\gamma$\-weak learning — recovered by taking $Z=$ \{ $\(z\_1,z\_2\): z\_1\+z\_2&lt;1/2\-\\gamma$ \} — and allows for more flexible notions of weak learnability that account for the impact of the distribution on the achievable learning guarantees\. This raises a natural question: which sets Z are  boostable? We answer this by giving a complete geometric characterization that unifies, as special cases, both the classical boosting dichotomy and the recent multi\-objective extension of Bressan et al\. \(COLT 2025\)\. We also present an adaptive algorithm for boosting $Z$\-learners without relying on the prior knowledge of\~$Z$, generalizing AdaBoost's ability to handle unknown margin parameters\.  Finally, we demonstrate that $Z$\-learners can achieve confidence amplification\. However, the analysis is significantly more involved than in classical boosting and relies on the centerpoint theorem from discrete and computational geometry\.

## TrialAgentBench: Evaluating AI Agents for Clinical\-Trial Analysis and Long\-Horizon Drug\-Development Decisions

**Authors:** Bradley M Segal; William J Bolton; Philip Torr; David Clifton; Lei Clifton

**ID:** 139604 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G03rvcN5Fe>) | [PDF](<https://openreview.net/pdf?id=G03rvcN5Fe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139604>)

Clinical drug development is high stakes\. Small statistical errors propagate into trial design, participant exposure, and stop/advance decisions\. As agents are increasingly used to support analysis and decision\-making, more robust evaluations of their capabilities in clinical domains are needed\. We introduce TrialAgentBench, a public benchmark in which agents must analyse participant\-level evidence, choose defensible estimands and methods, quantify uncertainty, diagnose assumption failures, and carry those analysis decisions into downstream drug\-development decisions\. TrialEvalBench contains 400 patient\-level analysis tasks across design, assumption, and context tiers\. TrialDevBench contains 20 sequential development programmes across five scenario worlds, each starting from a confounded 10,000\-patient observational extract and proceeding through asset nomination, endpoint and sample\-size design, deterministic phase trials, phase analysis, and stop/advance decisions\. The release spans 420 evaluated tasks or programmes, 528,660 simulated subjects, 77\.6 million public tabular records, and 1\.46 billion row\-variable cells\. Agents see only participant\-facing data; grader\-only files contain cell\-appropriate targets, deterministic phase state, and scoring code\. On TrialEvalBench, GPT\-5\.4 completes all 400 items but matches the required estimand/method class \(e\.g\., log\-HR versus RMST or risk\-difference targets\) for only 215/400 and produces an acceptable next\-trial sample\-size plan for 161/400\. On TrialDevBench, GPT\-5\.4 and Claude Opus 4\.7 complete all 60 seeded development programme runs per model, yet frequently nominate the wrong initial asset under confounding and choose evidence\-supported stop/advance timing in fewer than one\-third of programmes\. Together, the two suites make clinical\-trial decision quality measurable\. Current agents can effectively execute familiar analyses, but fail to make the decisions those analyses exist to support\.

## HandXFM: Semantic\-Structural Distillation for Hand Radiograph Foundation Models

**Authors:** Yuxi Long; Ganlin Feng; Lianghong Chen; Liam J O&amp;amp;\#x27;Neil; Carol A Hitchon; Pingzhao Hu

**ID:** 150797 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fKr07Pdg6F>) | [PDF](<https://openreview.net/pdf?id=fKr07Pdg6F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150797>)

Hand radiographs support diverse clinical tasks, including skeletal maturity assessment, rheumatoid arthritis scoring, abnormality screening, and anatomical localization, yet existing models are typically trained separately for each task and dataset\. We present HandXFM, a domain\-specific foundation model that leverages cross\-modality knowledge for comprehensive hand X\-ray understanding\. HandXFM distills semantic priors from BiomedCLIP and structural cues from a chest X\-ray Vision Transformer \(ViT\) through a unified alignment framework, integrating complementary medical knowledge in an interpretable way\. After pretraining, HandXFM can be adapted to a range of musculoskeletal tasks, including bone age estimation, SvH score prediction, abnormality detection, joint localization, bone segmentation, and visual question answering\. It consistently outperforms task\-specific and single\-expert baselines, achieving up to 0\.11 improvement in Pearson correlation coefficient \(PCC\) for bone age prediction and a 12\\% accuracy gain in abnormality classification\. Moreover, HandXFM generalizes to unseen datasets and yields cross\-attention maps linking clinical terms to anatomical regions\. These results demonstrate that multi\-expert distillation effectively unifies semantic and structural supervision within a single pretrained model, establishing HandXFM as an interpretable and generalizable foundation model for hand radiograph analysis\.

## MedVIGOR: Visual Evidence Internalization for Observation\-Driven Reasoning in Medical VLMs

**Authors:** Yuan Wu; Jiayu Qian; Sipeng Wu; Songpan Gao; Ruiming Ye; Zongxian Yang; JinYue Li; Qiankun Li; Yang Liu

**ID:** 150235 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jlwCHX9Sxe>) | [PDF](<https://openreview.net/pdf?id=jlwCHX9Sxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150235>)

Medical image interpretation requires diagnoses grounded in case\-specific visual evidence\. However, medical vision\-language models often produce plausible answers by exploiting clinical language priors and report\-level co\-occurrence patterns rather than faithfully using the input image, leading to Visual De\-anchoring and Spatial\-Semantic Binding Breakdown, where reasoning detaches from visual evidence or binds correct answers to incorrect anatomical support\. In this work, we introduce MedVIGOR, a framework that internalizes visual evidence as an intrinsic constraint on medical VLM reasoning\. MedVIGOR combines visual\-necessity supervision, dual\-pathway visual anchor internalization with MedSAM\-derived spatial support and DINOv2\-derived semantic patterns, and evidence\-consistent reinforcement learning to preserve alignment among visual evidence, intermediate reasoning, and final answers\. We further present MedVIGOR\-Bench, a unified benchmark for evaluating whether medical VLMs are both diagnostically correct and evidentially grounded across concept recognition and visual localization tasks\. Experiments show that MedVIGOR improves diagnostic accuracy and grounding fidelity over strong medical VLM baselines, highlighting the value of internalized visual evidence for trustworthy medical reasoning\.

## MedIGen: Reliable Medical Illustration Generation via Interleaved Introspective Reasoning

**Authors:** Rongsheng Wang; Hongru Zhou; Ruizhe Zhou; HAOMING CHEN; Zhenyang Cai; Junying Chen; Minghao Wu; Yaofei Duan; Ziyi Zeng; Benyou Wang

**ID:** 152588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RyrXhwjZ2I>) | [PDF](<https://openreview.net/pdf?id=RyrXhwjZ2I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152588>)

Medical illustration generation is not merely domain\-specific text\-to\-image \(T2I\) generation, but a high\-constraint visual reasoning problem where visually plausible images can be invalid due to anatomical and structural errors\. Existing T2I models largely rely on one\-pass generation and lack an internal mechanism to inspect and correct such biomedical inconsistencies\. We introduce \*\*MedIGen\*\*, a unified medical illustration generation model that transforms one\-pass synthesis into an \*\*interleaved introspection\-aware refinement\*\* process, coupling generation with self\-reflection and re\-generation through “generate–reflect–refine” cycles\. MedIGen is trained with three progressive stages: \(1\) large\-scale medical illustration pretraining on 1\.21M samples, \(2\) mixture training over generation, reflection, and refinement sub\-skills, and \(3\) reinforcement learning with dual\-level rewards that optimize both reasoning validity and final visual correctness\. We further present \*\*IlluGenBench\*\*, an expert\-aligned, rubric\-driven benchmark with 296 diverse tasks and 9,015 criteria, evaluating scientific accuracy, structural correctness, and semantic alignment beyond coarse visual plausibility\. Experiments show that MedIGen substantially outperforms strong open\-source unified and reasoning\-based baselines, establishing a new open\-source frontier\. All resources will be open\-sourced to facilitate future research\.

## Progressive Signal Calibration for Medical Image Segmentation: Diagnosing and Correcting Structural Misalignment in Training Signals

**Authors:** Xinyan Zhao; Haijing Liu; Zhuan Cui; Tian Guan; Yonghong He; Wen Tang; Qiming He

**ID:** 150045 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lClsEZgoUW>) | [PDF](<https://openreview.net/pdf?id=lClsEZgoUW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150045>)

Training\-signal imbalance in medical image segmentation is commonly diagnosed as a data\-distribution problem, such as class frequency imbalance, foreground sparsity, or domain shift, and addressed through reweighting, sampling, or domain adaptation\. We argue that this diagnosis is incomplete: a more fundamental source is structural misalignment between supervision targets and segmentation objectives\. Weidentify two operative mechanisms underlying this phenomenon: gradient\-mass dilution, where dominant classes consume gradient capacity needed for foreground discrimination, and inter\-class supervision noise, where weak subtype boundaries generate unreliable optimization signals\. On a private renal pathology dataset, four standard segmentation architectures trained under conventional four\-class supervision underperform a foreground\-focused supervision regime \(a one\-line modification of the loss\) by 7\.87–16\.05 fg\-mIoU points\. The same effect replicates on three public datasets, suggesting foreground\-focused supervision as a low\-cost, general\-purpose recipe for any pixel\-imbalanced segmentation task\. Building on this observation, we propose Progressive Signal Calibration \(PSC\), a framework that calibrates training signals at three abstraction levels\. At the annotation level, PSC adaptively selects the supervision granularity that maximizes signal qual ity\. At the architectural level, PSC introduces a boundary\-aware feature gating mechanism for structure\-sensitive feature aggregation\. At the regularization level, PSC employs uncertainty\- and ratio\-aware constraints to stabilize optimization and prevent late\-stage class\-proportion drift\. Importantly, PSC satisfies a con ditional gain monotonicity property: when structural misalignment is weak or absent, its regularization terms naturally attenuate, avoiding systematic degradation\. Across 18 public histopathology benchmarks, PSC achieves statistically significant improvement on six datasets with no statistically significant regression on any benchmark\. On the private renal pathology dataset, PSC reaches 96\.0 fg\-mIoU, ex ceeding the strongest matched\-backbone baseline by \+2\.56 points under identical FG3 supervision—a substantial gain in a regime where the FG3 baseline is already above 93 fg\-mIoU

## Parametric Meets Non\-parametric: Bridging Dual Prediction Spaces for Semi\-supervised Medical Image Segmentation

**Authors:** Zenggui Chen; Jianwei Ma

**ID:** 152318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Txi4PjNfS3>) | [PDF](<https://openreview.net/pdf?id=Txi4PjNfS3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152318>)

Semi\-supervised medical image segmentation leverages abundant unlabeled data to reduce the reliance on costly dense annotations, yet its dominant pseudo\-labeling paradigm suffers from inevitable prediction noise, especially under scarce supervision\. In this work, we observe that parametric network predictions and non\-parametric prototype\-based predictions exhibit complementary behaviors under pseudo\-label noise: the former offers high expressiveness in capturing local structures but is sensitive to erroneous supervision, while the latter provides stable semantic guidance by aggregating class\-level statistics but may lack spatial precision\. Motivated by this observation, we propose a simple yet effective complementary learning framework that jointly exploits the parametric prediction space and the non\-parametric prototype space for semi\-supervised segmentation\. Specifically, we introduce a confidence\-aware selection mechanism that identifies reliable voxels from either prediction space, a prototype entropy minimization objective that sharpens the non\-parametric semantic anchors, and a dual\-space semantic alignment objective that encourages mutual enhancement between the two spaces\. The unified objective enables reliability\-aware mutual enhancement, where each space guides the other when confident and noisy alignment is suppressed when both are uncertain\. Extensive experiments on multiple medical image segmentation benchmarks demonstrate that our method consistently outperforms existing approaches under various label\-scarce settings\.

## Explainability matters: The effect of liability rules on the healthcare sector

**Authors:** Jiawen Wei; Elena Verona; Andrea Bertolini; Gianmarco Mengaldo

**ID:** 139994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYJYksvTw5>) | [PDF](<https://openreview.net/pdf?id=yYJYksvTw5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139994>)

Explainability, the capability of an artificial intelligence system \(AIS\) to explain its outcomes in a manner that is comprehensible to human beings at an acceptable level, has been deemed essential for critical sectors, such as healthcare\.  Is it really the case?  In this perspective, we consider two extreme cases, Oracle \(without explainability\) versus AI Colleague \(with explainability\) for a thorough analysis\. We discuss how the level of automation and explainability of AIS can affect the determination of liability among the medical practitioner/facility and manufacturer of AIS\.  We argue that explainability plays a crucial role in setting a responsibility framework in healthcare, from a legal standpoint, to shape the behavior of all involved parties and mitigate the risk of potential defensive medicine practices\.

## NicheIB: Targeted Spatial Bottlenecks for Predictive Microenvironment Discovery

**Authors:** Chenxi He

**ID:** 153405 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LaZNrmtjRL>) | [PDF](<https://openreview.net/pdf?id=LaZNrmtjRL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153405>)

Spatial transcriptomics methods typically cluster spots into coherent tissue domains, but many biological questions are target\-specific: which spatial context predicts a particular cell state, gene program, or clinical phenotype? We propose NicheIB, a Targeted Spatial Bottleneck \(TSB\) that learns which spatial edges matter for a user\-specified target via input\-dependent Hard Concrete edge gates with controllable sparsity budgets\. Training the same model on the same tissue with different targets—cortical\-layer annotations, oligodendrocyte gene programs, excitatory neuron markers—produces distinct edge retention patterns whose correlation mirrors the biological similarity of the targets, confirmed across human cortex, mouse brain, and cancer tissues\. The bottleneck also reveals which programs are spatially structured at a given resolution and which are not, serving as a diagnostic tool for spatial biology\. On mouse brain region prediction, TSB retains only 20% of spatial edges while approaching the full\-graph baseline \($F\_1 = 0\.915$ vs\. $0\.926$\), identifying a minimal informative subgraph from a mostly redundant spatial graph\. External validation confirms that the retained subgraph selectively enhances spatial autocorrelation for target\-relevant genes and is enriched for known ligand–receptor pairs, independently of the model\.

## MedHorizon: Towards Long\-context Medical Video Understanding in the Wild

**Authors:** Bodong Du; Bowen Liu; Yang YU; Xinpeng Ding; Zhiheng Wu; Shuning Wang; Shuo Nie; Naiming Liu; Qifeng Chen; Yangqiu Song; Xiaomeng Li

**ID:** 139391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TJgyeENlQ5>) | [PDF](<https://openreview.net/pdf?id=TJgyeENlQ5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139391>)

Medical multimodal large language models \(MLLMs\) have advanced image understanding and short\-video analysis, but real clinical review often requires full\-procedure video understanding\. Unlike general long videos, medical procedures contain highly redundant anatomical views, while decisive evidence is temporally sparse, spatially subtle, and context dependent\. Existing benchmarks often assume this evidence has already been localized through images, short clips, or pre\-segmented videos, leaving the retrieval\-before\-reasoning problem under\-tested\. We introduce MedHorizon, an in\-the\-wild benchmark for long\-context medical video understanding\. MedHorizon preserves 759 hours of full\-length clinical procedures and provides 1,253 evidence\-grounded multiple\-choice questions that jointly evaluate sparse evidence understanding and multi\-hop clinical reasoning\. Its evidence is extremely sparse, with only 0\.166% evidence frames on average, requiring models to search noisy procedural streams before interpreting and aggregating findings\. We evaluate representative general\-domain, medical\-domain, and long\-video MLLMs\. The best model reaches only 41\.1% accuracy, showing that current systems remain far from robust full\-procedure understanding\. Further analysis yields four key findings: performance does not scale reliably with more frames, evidence retrieval and clinical interpretation remain primary bottlenecks; these bottlenecks are rooted in weak procedural reasoning and attention drift under redundancy, and generic sampling methods only partially balances local detail with global coverage\. MedHorizon provides a rigorous testbed for MLLMs that retrieve sparse evidence and reason over complete clinical workflows\.

## Long\-Term Risks of Risk\-Based Allocation

**Authors:** Jivat Neet Kaur; Jane Lee; Manolis Zampetakis

**ID:** 155991\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155991

[Paper](<https://openreview.net/forum?id=1LHT6frSus>) | [PDF](<https://openreview.net/pdf?id=1LHT6frSus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155991>)

Algorithmic risk predictors are increasingly being used to inform resource allocation in healthcare and other high\-stakes domains\. Common in many such settings, the public decision maker delegates service provision to private organizations and compensates them  according to each individual's predicted cost of service\. We show that this common allocation mechanism can fail when organizations engage in \\emph\{favorable selection\}, i\.e\., strategically choosing individuals whose actual costs are below the payment model predictions\. Motivated by health insurance payments in the Medicare Advantage \(MA\) program, we provide a theoretical framework to study the interaction between a decision maker and a strategically selecting service provider\. Our theoretical framework predicts two empirical patterns observed in Medicare Advantage that have become central concerns: enrollment in the private program expands, while government payments rise above the counterfactual cost of direct public provision\. Guided by our theoretical framework, we then propose a reformed payment policy that is implementable under the government's data\-access constraints\. We prove that its equilibria eliminate overpayment while preserving profits for efficient organizations\. We validate the framework in synthetic and semi\-synthetic experiments that illustrate the advantages of our reformed policy, over the status quo\.

## Strategic Feature Selection and Regularization

**Authors:** Jivat Neet Kaur; Pratik Patil; Divya Shanmugam; Emma Pierson; Michael Jordan; Nika Haghtalab; Meena Jagadeesan; Ahmed Alaa; Serena Wang

**ID:** 154371\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154371

[Paper](<https://openreview.net/forum?id=E5F4jOGdsq>) | [PDF](<https://openreview.net/pdf?id=E5F4jOGdsq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154371>)

When algorithmic predictors inform resource allocation in high\-stakes domains such as healthcare, these predictors must account for strategic manipulation of input features\. The typical solution is to redesign the predictor itself to explicitly account for strategic interactions\. In practice, however, decision makers are often constrained to adjusting coarser levers within existing prediction pipelines\. For example, healthcare organizations often select which features to exclude based on perceived manipulability, while using standard regularization procedures to shrink the coefficients of retained features\. In this work, we initiate a formal study of strategic classification through \*feature selection\* and its interaction with \*ridge regularization\*\. Our main finding is that excluding features based on manipulability alone is generally suboptimal\. We provide a fine\-grained characterization of the performance of a feature subset under optimal regularization, yielding new insights for policy design\. Motivated by this characterization, we develop a practical algorithm for jointly choosing the feature set and the level of ridge regularization\. Through a real\-world case study on a healthcare payments benchmark, we illustrate how our algorithm can guide the design of coarse policy levers in practice\. Our results provide a principled, practical framework for mitigating the effects of strategic behavior in algorithmic decision\-making systems\.

## How to Train a Surgeon? Benchmarking Generalist Agents in Surgical Scene Understanding

**Authors:** Gengyuan Zhang; Xiao Han; Shijie Zhou; Abdullah Koukash; Ghazal Ghazaei; Jindong Gu; Jingpei Wu; Yuqicheng Zhu; Nassir Navab; Volker Tresp

**ID:** 139078\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139078

[Paper](<https://openreview.net/forum?id=mUEEwbzwMy>) | [PDF](<https://openreview.net/pdf?id=mUEEwbzwMy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139078>)

Evaluating general\-purpose multimodal large language models \(MLLMs\) for surgical scene understanding remains limited by scarce surgical data and fragmented evaluation protocols\. We address these challenges through a two\-stage evaluation framework for surgical scene understanding\. In Stage I, we introduce SURGKNOWBENCH, a diagnostic benchmark that harmonizes public surgical datasets across procedures and tasks and evaluates proprietary and open\-weight MLLMs to map the boundary of pretrained surgical competence\. SURGKNOWBENCH reveals that current models retain partial visual priors but remain weak on procedural reasoning and workflow assessment\. Building on this failure frontier, and motivated by the scaffolded nature of surgical training, we introduce SURGAGENTGYM, a controlled environment where general\-purpose MLLM agents can use bounded knowledge search over SURGWIKI and general\-purpose visual grounding for surgical tasks\. SURGAGENTGYM evaluates whether generalist agents can improve surgical understanding at inference time through tool\-mediated evidence use, without additional surgical training\. Our results show that agentic inference narrows the gap mainly for perception\-heavy tasks, while fine\-grained localization and expert\-style assessment remain persistent bottlenecks\. This opens a path toward future studies of agentic surgical understanding\. We have released the codebase and artifacts\.

## SheafStain: Sheaf\-Theoretic Schr\\"odinger Bridge for Spatially and Biologically Coherent Virtual Staining

**Authors:** Hyeongyeol Lim; Hongjun Yoon; Eunjin Jang; Daeky Jeong; Won June Cho; HWAMIN LEE

**ID:** 155872\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155872

[Paper](<https://openreview.net/forum?id=2DhyeIm0FC>) | [PDF](<https://openreview.net/pdf?id=2DhyeIm0FC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155872>)

Current virtual staining approaches offer the potential for time\- and cost\-efficient  biomarker quantification in cancer diagnostics and prognostics\.  However, patch\-wise inference for gigapixel whole slide images \(WSIs\) fails to maintain spatial continuity,  yielding artifacts that cause catastrophic mismatches with ground\-truth images\. Although pathology Vision Foundation Models \(VFMs\) offer rich representations,  their self\-attention causes varying global contexts to produce inconsistent embeddings  for the same physical region\.  We formalize and validate this \`\`context contamination'' as a sheaf\-theoretic problem  where these embeddings form a presheaf that violates the gluing axiom\. To address this, we propose SheafStain, a new approach that reinterprets  VFM features as sheaf\-like sections for spatially and biologically coherent virtual staining\.  Specifically, SheafStain integrates class and patch tokens into a Schr\\"odinger Bridge framework  as sheaf\-like sections\.  While the class token anchors biological consistency, patch tokens form a per\-position spatial map\. A backbone co\-pretrained on Hematoxylin \\&amp; Eosin \(H\\&amp;E\) and Immunohistochemistry \(IHC\) yields  non\-degenerate cross\-stain stalks, so a single VFM feature space supervises  both input conditioning and output stain alignment\. Departing from prior work that evaluates on isolated $256 \\times 256$ patches  and either random\-crops or resizes the $1024 \\times 1024$ ground truth,  we translate at $256 \\times 256$ and evaluate on the stitched $1024 \\times 1024$ outputs  across HER2, ER, PR, and Ki\-67\. SheafStain demonstrates promising results against six prior methods while mitigating patch\-boundary stitching artifacts\. Code will soon be released upon acceptance\.

## Manifold\-Guided Stereo\-Monocular Refinement for Endoscopic Stereo Disparity Estimation

**Authors:** Jiewen Yang; Yi Zhong; Bin Pu; Xingbo Dong; Ming Zheng; Qika Lin; Kai He; Xuechen Zhang

**ID:** 150407 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iGyOrOrioU>) | [PDF](<https://openreview.net/pdf?id=iGyOrOrioU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150407>)

Dense stereo disparity estimation provides the geometric basis for 3D perception in computer\-assisted endoscopy\. Endoscopic stereo matching is difficult because reliable tissue correspondences often appear next to weak\-texture, specular, occluded, or deformed regions within the same frame\. Existing stereo and stereo\-monocular methods improve cost aggregation or introduce monocular priors, but they often treat monocular guidance as a global feature source or an independently predicted candidate\. Without evaluating the local support of the current stereo match during refinement, the update can reinforce corrupted correspondences in ambiguous regions or allow monocular priors to override reliable metric matches\. To tackle these problems, we introduce Manifold\-Stereo, a reliability\-gated latent\-flow framework for endoscopic stereo disparity estimation\. The method refines a monocular disparity candidate through a conditional latent residual flow on an image\-aligned correction space induced by stereo cost\-volume geometry, then calibrates the corrected candidate to the current stereo disparity scale\. A geometric consistency gate computed from left\-right feature alignment regulates the candidate contribution during recurrent refinement, preserving stereo estimates in well\-matched regions while supplying monocular context where local matching is ambiguous\. Experiments on in\-domain SCARED and zero\-shot SERV\-CT and Hamlyn show strong average disparity accuracy and competitive thresholded outlier rates against recent stereo and endoscopic baselines\.

## Auditing Correlated Failures in Frozen\-Feature Pretrained\-Encoder Pools for Medical Segmentation

**Authors:** Eunseob Choi; Kyeonghun Kim; Hyuk\-Jae Lee; Nam\-Joon Kim

**ID:** 138982 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sgt45cOBtI>) | [PDF](<https://openreview.net/pdf?id=sgt45cOBtI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138982>)

Cross\-architecture/backbone medical\-segmentation pools are commonly motivated as complementary failure coverage when members make different mistakes; that assumption is rarely tested at the per\-case level\. We audit this assumption for a fixed pool of 11 pretrained\-encoder bundles read out by a deliberately weak $1\\times1$\-convolution decoder \(4 seeds\), and for a small set of decoder\-recipe perturbations on the same bundles\. Across five primary task rows \(Kvasir polyp, ACDC LV, BraTS foreground, RIGA Cup, RIGA Disc\), this 11\-bundle $1\\times1$\-conv readout pool yields per\-case Dice correlation gaps of $\\Delta=0\.261\\text\{\-\-\}0\.638$ between same\-bundle and cross\-bundle pairs after a Dice $\\geq 0\.30$ functional floor; all paired case and hierarchical bootstrap intervals exclude zero\. The result is stable under floor sweeps, ICC\(A,1\), leave\-one\-out, subject aggregation, quality\-controlled pair regression, and cross\-fitted item\-difficulty residualisation\. Decoder\-recipe diagnostics show that richer readouts attenuate the gap \(UNet\-skip; case\-identical nnU\-Net on RIGA Cup: $0\.473\\to 0\.0079$, separate\-split $0\.034\\text\{\-\-\}0\.047$\); the reported magnitudes are recipe\-specific\. Additional probes \(pixel error, joint\-failure lift, same\-architecture\-family ViT, same\-family cross\-checkpoint, same\-backbone\) locate the dependence structure but do not causally separate architecture, pretraining, and recipe\. The claim is scoped to 2D frozen/light\-adaptation encoder pools with this readout family and to retrospective benchmark audits\. We release per\-case Dice traces, summary JSONs, scorer code, hashes, and metadata as the audit artifact\.

## PG\-LRF: Physiology\-Guided Latent Rectified Flow for Electro\-Hemodynamic PPG\-to\-ECG Generation

**Authors:** Xiaoda Wang; Minxiao Wang; Kaiqiao Han; Defu Cao; Ching Chang; Yidan Shi; Runze Yan; Xiao Luo; Yan Liu; Xiao Hu; Yizhou Sun; Wei Wang; Carl Yang

**ID:** 150392 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iOvXn5DzBr>) | [PDF](<https://openreview.net/pdf?id=iOvXn5DzBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150392>)

Electrocardiography \(ECG\) is the clinical standard for cardiac assessment but requires dedicated hardware that does not scale to daily\-life monitoring\. Photoplethysmography \(PPG\) is ubiquitous in wearables but lacks ECG\-specific diagnostic morphology and is corrupted by motion and sensor noise\. PPG\-to\-ECG generation aims to bridge this gap by recovering electrical morphology and timing from peripheral pulse signals\. However, existing methods largely rely on statistical alignment and data\-driven generation\. They fail to explicitly structure the latent space around physiology\-aware electro\-hemodynamic factors and lack constraints from forward physiological dynamics\. To address these challenges, we propose PG\-LRF, a physiology\-guided latent rectified flow framework\. PG\-LRF introduces an electro\-hemodynamic simulator that co\-models ECG and PPG through shared cardiac phase dynamics\. Guided by this simulator, a Physiology\-Aware AutoEncoder learns a structured electro\-hemodynamic latent space\. Then we integrate this simulator guidance into a PPG\-conditioned latent rectified flow, enforcing ECG\-side morphology consistency and ECG\-to\-PPG forward hemodynamic consistency during generative transport\. Experiments on the large\-scale MC\-MED dataset demonstrate that PG\-LRF significantly improves PPG\-to\-ECG generation and downstream cardiovascular disease classification, proving its ability to generate ECGs that are both signal\-faithful and physiologically plausible under the ECG\-to\-PPG hemodynamic pathway

## REAL\-MED: Benchmarking LLM Agents on Real\-World Medical Tasks

**Authors:** Zihan Wang; yifan zhang; Jieqiong Cao; Junxiu Chen; Shanni Chen; ChaoGao; Hao Wang; Shi Feng; Xiaocui Yang; Jinghao Lin; Kai WU; Xiaozhong Ji; Haihua Yang

**ID:** 139773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5cVNXIDXfi>) | [PDF](<https://openreview.net/pdf?id=5cVNXIDXfi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139773>)

Real\-world medical work extends far beyond answering isolated clinical questions: it often requires clinicians to process complex materials, interact with information systems, and produce structured deliverables\.  As AI systems evolve from medical chatbots into medical agents, evaluation should likewise move beyond \\emph\{answer correctness\} toward the \\emph\{quality of end\-to\-end workflow deliverables\}\.   We introduce \\textsc\{Real\-Med\}, a benchmark for evaluating AI agents on real\-world medical tasks\.  \\textsc\{Real\-Med\} contains 405 expert\-designed tasks across four categories: Clinical Support, Patient Management, Pharmacy Management, and Medical Education \\&amp; Research\.  Each task is grounded in a realistic scenario with concrete materials, tool interfaces, and explicit deliverable requirements, such as clinical documents, medication plans, spreadsheets and review reports\.  To support rigorous evaluation, each task is annotated with fine\-grained expert\-written rubrics, averaging 15\.4 independent rubric items per task, and every task is cross\-validated by at least three medical experts\.  We evaluate 11 strong mainstream models under a unified harness with the same resources, tools, and execution protocol\.  Our results show that current agents can often satisfy surface\-level task requirements, but still struggle with detail\-sensitive medical reasoning, dosage\-calculation traps, shallow research, formatting constraints, and reliable final delivery\.  These findings reveal a substantial gap between medical QA ability and robust execution in realistic medical workflows\. Code is available at \\url\{https://anonymous\.4open\.science/r/REAL\-MED\}\.

## Does Cross\-Panel Pretraining Transfer Under Marker Heterogeneity? A Large\-Scale Empirical Study in Clinical Flow Cytometry

**Authors:** Zixin \(Zora\) Zhuang; Benjamin Mashford; Dan Andrews

**ID:** 153804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IZxWllh1po>) | [PDF](<https://openreview.net/pdf?id=IZxWllh1po>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153804>)

Flow cytometry is the primary assay for single\-cell immune profiling, yet cross\-study modelling remains under\-explored\. The challenge is two\-fold: Studies measure different marker panels, inducing feature\-space inconsistency, while batch effects shift signals even on shared markers, making transfer harder than in vision or language where input spaces are stable\. We conduct a large\-scale empirical study, pretraining an encoder on 89,324 samples from 112 public studies spanning 525 distinct marker panels\. We evaluate it frozen \-\-\- isolating representation quality from task\-specific adaptation, on five clinical tasks under a taxonomy of panel\-overlap conditions, including three panel\-zero\-shot tasks whose marker panels were unseen during pretraining, and one negative control with no expected discriminative signal\. We further characterise transfer across scaling axes and probe robustness to marker removal at test time\. Despite heterogeneity that disrupts direct transfer, the frozen encoder matches or exceeds in\-distribution specialist encoders on 4 of 5 tasks, including all three novel\-panel tasks, and behaves as expected on the negative control\. Scaling analyses reveal saturation in both encoder capacity and random corpus subsampling, and representations degrade gracefully under marker reduction\. These results suggest a pretrained encoder can serve as a general\-purpose feature extractor for clinical cytometry data, without task\-specific retraining\.

## MedVTok: A General\-Purpose Medical Visual Tokenizer

**Authors:** Chenglong Ma; Yuanfeng Ji; Junzhi Ning; Jiyao Liu; Yujie Wei; Shaohao Rui; Chaoyang Zhang; Wenjie Li; Wenhao Tang; Cheng Tang; Wei Li; Shujian Gao; Yujie Zhang; Ying Chen; Zilong Li; Zongyuan Ge; Diping Song; Jin Ye; Ming Hu; Junjun He; Hongming Shan

**ID:** 152136 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VGTDLvJS3w>) | [PDF](<https://openreview.net/pdf?id=VGTDLvJS3w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152136>)

Multimodal medical AI requires a common visual interface that integrates heterogeneous imaging evidence for patient condition modeling\. However, existing medical visual tokenizers are often tied to a specific dimension and imaging modality, forcing multimodal systems to rely on fragmented and poorly reusable representations\. We introduce MedVTok, a general\-purpose visual tokenizer that maps 2D images and 3D volumes from diverse imaging modalities into a unified token space\. Building such a tokenizer poses two key challenges: preserving anatomical structure across dimensions and capturing clinical semantics across modalities\. To this end, MedVTok introduces \(i\) slice differential regularization, which explicitly models inter\-slice anatomical coherence missing in previous per\-pixel/per\-voxel supervision, and \(ii\) multi\-expert representation alignment, which integrates knowledge from multiple medical expert encoders while retaining modality\-specific complementary knowledge\. Trained on 28M images and 70K volumes across 9 imaging modalities, MedVTok supports classification, retrieval, segmentation, synthesis, visual question answering, and medical report generation through a single tokenizer\. Across 24 benchmarks, MedVTok achieves state\-of\-the\-art performance, demonstrating a scalable token interface that unifies medical image dimension, modality, and task usage\. Code and weights will be released\.

## GlucoFM\-Bench: Benchmarking Time\-Series Foundation Models for Blood Glucose Forecasting

**Authors:** Baiying Lu; Zhaohui Liang; Ryan Pontius; Shengpu Tang; Temiloluwa Prioleau

**ID:** 139533 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KNGzZNVPZk>) | [PDF](<https://openreview.net/pdf?id=KNGzZNVPZk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139533>)

Blood glucose forecasting models are foundational for modern diabetes management systems, as reliable short\-term predictions can enable proactive interventions, support automated insulin delivery, and reduce the risk of hypo\- and hyperglycemic events\. From a modeling perspective, glucose forecasting poses unique challenges due to heterogeneous physiological dynamics across different diabetes populations\. Traditional machine learning and deep learning models have been extensively evaluated for glucose prediction\. However, there is significantly less research on evaluating and benchmarking recent time\-series foundation models \(TSFMs\) for blood glucose forecasting\. To bridge this gap, we present GlucoFM\-Bench, a comprehensive benchmark evaluating state\-of\-the\-art TSFMs alongside supervised deep learning models for blood glucose forecasting\. We assess eight representative architectures, including pre\-trained TSFMs, time\-series large language models, and task\-specific deep learning models, across 15 publicly available diabetes\-relevant datasets comprising 1,117 individuals with type 1 diabetes, type 2 diabetes, prediabetes, and no diabetes\. Models are evaluated under zero\-shot, few\-shot, and full\-shot protocols, with systematic variation in context length and prediction horizon\. Across datasets, pre\-trained TSFMs, especially Chronos\-2 and TimesFM, show strong zero\-shot and few\-shot transfer, with the best zero\-shot model performing within 5% of the best full\-shot supervised model\. Yet, when task\-specific data is abundant, a lightweight LSTM remains strongest, outperforming TSFMs by 4\-21% under full\-shot training\. Stratified analyses reveal persistent challenges in T1D cohorts and hypo\-/hyperglycemic ranges, highlighting the need for evaluation beyond aggregate error metrics\. Together, GlucoFM\-Bench provides a standardized and reproducible foundation for evaluating, comparing, and improving foundation models for blood glucose forecasting\. The dataset and code are publicly available at https://huggingface\.co/datasets/glucofmbench/GlucoFM\-Bench and https://anonymous\.4open\.science/r/GlucoseML\_benchmark\-B50C, respectively\.

## Teach\-to\-Reason: Competition\-Guided Reasoning with a Self\-Improving Teacher

**Authors:** Xiao Han; Hao Liu; Zhimin Bao; Jile Jiao; Yue Wang; Hui Guo; Mou X Feng; Yi Xu

**ID:** 150121 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kWZzaC732G>) | [PDF](<https://openreview.net/pdf?id=kWZzaC732G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150121>)

Chest X\-ray visual question answering \(CXR VQA\) requires models not only to predict correct answers, but also to produce reliable medical reasoning\. However, existing reinforcement\-learning\-based training typically relies on answer\-level rewards, which are often too coarse to improve chain\-of\-thought \(CoT\) quality and can become ineffective when group\-level advantages collapse to zero\. We propose \\textbf\{Teach\-to\-Reason \(T2R\)\}, a framework that introduces comparison\-based supervision into CoT optimization through a self\-improving \\emph\{Teacher\} and a competition\-guided \\emph\{Reasoner\}\. As the Teacher is iteratively strengthened via self\-competition, the Reasoner is optimized against progressively stronger Teacher\-generated references\. We further introduce a case\-wise reward design that preserves the original reward\-induced positive/negative partition when it is informative, and restores supervision from competition scores when the original reward signal degenerates\. Experiments on multiple CXR open\-ended VQA benchmarks show that T2R consistently outperforms strong baselines, indicating that comparison\-based supervision, when integrated in a controlled and principled manner, provides a more effective training signal for reasoning optimization\.

## REINS: Learning Inertia\-Induced Geometry for Physics\-Consistent Motion Representation in Clinical Gait Phenotyping

**Authors:** Yiran Ding; Yufei Zhang; Zijun Cui

**ID:** 155340 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6Ku1AhEjKl>) | [PDF](<https://openreview.net/pdf?id=6Ku1AhEjKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155340>)

Parkinson's disease and other gait\-related neurological disorders manifest in subtle but biomechanically meaningful changes in how patients move, making computational gait phenotyping a valuable tool for clinical assessment\. Yet existing latent representations of motion are typically learned from data alone and miss the biomechanical structure that gives clinical motion its diagnostic meaning, leaving them vulnerable when training cohorts are small or acquisition sites differ\. We propose REINS \(Riemannian Embedding for INertia\-induced motion Spaces\), an Euler\-Lagrange\-induced motion representation that uses the generalized inertia matrix of articulated systems to define a biomechanically grounded geometry on configuration space\. Because kinetic energy is itself a quadratic form in velocity weighted by the inertia matrix, this metric is a mechanically determined Riemannian structure, and we learn a latent embedding of the resulting structured space\. By defining the representation space itself through rigid\-body dynamics rather than enforcing physics as a post\-hoc penalty, REINS aligns the geometry of motion representation with the same physical laws clinicians rely on to interpret gait\. We apply the framework on Parkinson's disease gait analysis, where deviation from healthy motion is measured as a geodesic distance under the inertia\-induced metric, and report results on healthy\-control vs\.\\ PD discrimination and UPDRS\-gait severity correlation\.

## Flexible Intensities Matter: A comprehensive re\-evaluation of Classical and Neural Temporal Point Processes

**Authors:** Hendrik Alexander Mehrtens; Florian Buettner; Oliver Stegle

**ID:** 139473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NoBHtWYMBB>) | [PDF](<https://openreview.net/pdf?id=NoBHtWYMBB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139473>)

Temporal point processes \(TPPs\) are the canonical framework for event sequence data, with applications spanning seismology, social media, and electronic health records\. Recent neural extensions have been reported to substantially outperform classical baselines such as Hawkes processes, but a systematic comparison across model families and intensity parameterizations is lacking, and large\-scale medical benchmarks — arguably one of the most promising application domains — have not been considered\. Here, we revisit this comparison through a systematic benchmark of neural and non\-neural TPPs on existing datasets and on two large\-scale medical benchmarks derived from UK Biobank disease histories and MIMIC\-IV ICU records\. First, our results show that the previously reported gap between Hawkes processes and neural TPPs largely disappears once Hawkes processes are equipped with flexible and learnable kernels\. Second, we find that the flexibility of the intensity parameterization also limits prior neural TPPs: a transformer with a spline\-based intensity head outperforms prior neural TPP implementations\. Third, our benchmark underscores the value of complex datasets when assessing the performance of TPPs\. In fact, exclusively on the MIMIC\-IV ICU records did we find clear evidence for structures — time\-varying or higher\-order interactions — beyond what pairwise flexible Hawkes process kernels can capture\. Our results guide both future method development and practitioners’ model choice\. Our TPP framework is released as an open\-source package, providing consistent and feature rich implementations of classical and neural TPPs\.

## OperatorSHAP: Fast and Accurate Shapley Value Estimation for Neural Operators

**Authors:** Joshua Stiller; Santo Thies; Felix Czaja; Eyke Hüllermeier

**ID:** 154322 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EXq2TaPGfM>) | [PDF](<https://openreview.net/pdf?id=EXq2TaPGfM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154322>)

Understanding model predictions is essential for physical applications, where outputs often inform safety\-critical decisions, such as structural load assessment, weather warnings, and clinical diagnosis\. Shapley values satisfy many desirable properties as an attribution method, but their computational cost during inference hinders their practical use\. Current amortized explainers, such as FastSHAP, are limited to homogeneous inputs, which is problematic for physical applications where data often comes from irregular grids and geometries\. We introduce OperatorSHAP, a grid\-agnostic attribution method and training procedure that allows us to train FastSHAP\-like explainers for neural operators\. We establish a theoretical framework for attributions in function space, connecting to Aumann–Shapley values\. We further show that OperatorSHAP's explanations are consistent with state\-of\-the\-art discrete Shapley values across resolutions and transfer across grid sizes without retraining\.

## Extending ROC Analysis to Uncertainty\-Aware Risk Prediction with an Interval\-Based AUC \(iAUC\)

**Authors:** Yuqi Li; Matthew Engelhard

**ID:** 150218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jsG2UV3YqP>) | [PDF](<https://openreview.net/pdf?id=jsG2UV3YqP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150218>)

In high\-stakes risk prediction, interval\-valued predictions provide a natural way to represent predictive uncertainty\. However, standard evaluation tools such as the receiver operating characteristic \(ROC\) curve and the area under the curve \(AUC\) are designed for point\-valued predictions and do not capture how uncertainty affects discrimination performance\. To address this gap, we develop an uncertainty\-aware ROC framework and corresponding interval\-based AUC \(iAUC\) metrics for evaluating the performance of interval\-valued risk predictions\. The framework constructs two ROC\-style curves with associated areas $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, and shows that these quantities induce a three\-region decomposition of positive\-negative rankings into confidently correct, ambiguous, and confidently incorrect orderings\. Under valid class\-conditional coverage, $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, together with the pairwise miscoverage rate, provide theoretical bounds on the optimal AUC, linking interval coverage to achievable discrimination\. The framework is compatible with a range of methods for quantifying epistemic uncertainty in risk prediction, including Bayesian, bootstrap, and ensemble\-based procedures, and provides a practical way to compare predictive models and interval\-generation methods\. Experiments on clinical benchmark data and MIMIC\-IV mortality prediction show that models with similar point AUC can have different uncertainty\-aware ranking profiles, and that the proposed decomposition can support risk\-aware model selection and threshold\-based abstention\.

## Dynamic Representation Modeling for Federated Medical Image Domain Generalization

**Authors:** Yuxi Ma; Lin Zhao; Jing Yang; jiacheng wang; Liansheng Wang

**ID:** 154596 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CPjD7nRUf2>) | [PDF](<https://openreview.net/pdf?id=CPjD7nRUf2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154596>)

_Abstract unavailable from the accessible public sources._

## Rethinking CT Synthesis through Semantics\-Structure Alignment

**Authors:** Riyu Qiu; Qichao Zhou; jiacheng wang; Liansheng Wang

**ID:** 155079 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8cb59z0dK9>) | [PDF](<https://openreview.net/pdf?id=8cb59z0dK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155079>)

_Abstract unavailable from the accessible public sources._

## Predicting Only from Selected Evidence: A Tempered Product\-of\-Experts Bottleneck for Auditable EEG Diagnosis

**Authors:** Yinghao WANG; Shujian Yu; Duc\-Han LE; Zhikai Yu; Changming Wang; Van\-Tam Nguyen

**ID:** 150685 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gGPUE5wzpp>) | [PDF](<https://openreview.net/pdf?id=gGPUE5wzpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150685>)

_Abstract unavailable from the accessible public sources._

## CardioLens: Revealing the Clinical Reality Gap of MLLMs via Multi\-Sequence Cardiac MRI Evaluations

**Authors:** Zixian Su; Hongkai Zhang; Fan Gao; Encheng Su; Taiping Qu; Jingwei Guo; Zhang Nan; Hui Wang; Zhen Zhou; Kairui Bo; Yan Chen; Yue Ren; Shuai Li; Lei Xu; Henggui Zhang

**ID:** 139679 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AtO6HYwYrW>) | [PDF](<https://openreview.net/pdf?id=AtO6HYwYrW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139679>)

_Abstract unavailable from the accessible public sources._

## Dynamic Representation Modeling for Federated Medical Image Domain Generalization

**Authors:** Yuxi Ma; Lin Zhao; Jing Yang; jiacheng wang; Liansheng Wang

**ID:** 154596\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154596

[Paper](<https://openreview.net/forum?id=CPjD7nRUf2>) | [PDF](<https://openreview.net/pdf?id=CPjD7nRUf2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154596>)

_Abstract unavailable from the accessible public sources._

## Rethinking CT Synthesis through Semantics\-Structure Alignment

**Authors:** Riyu Qiu; Qichao Zhou; jiacheng wang; Liansheng Wang

**ID:** 155079\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155079

[Paper](<https://openreview.net/forum?id=8cb59z0dK9>) | [PDF](<https://openreview.net/pdf?id=8cb59z0dK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155079>)

_Abstract unavailable from the accessible public sources._

## Predicting Only from Selected Evidence: A Tempered Product\-of\-Experts Bottleneck for Auditable EEG Diagnosis

**Authors:** Yinghao WANG; Shujian Yu; Duc\-Han LE; Zhikai Yu; Changming Wang; Van\-Tam Nguyen

**ID:** 150685\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150685

[Paper](<https://openreview.net/forum?id=gGPUE5wzpp>) | [PDF](<https://openreview.net/pdf?id=gGPUE5wzpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150685>)

_Abstract unavailable from the accessible public sources._

## CardioLens: Revealing the Clinical Reality Gap of MLLMs via Multi\-Sequence Cardiac MRI Evaluations

**Authors:** Zixian Su; Hongkai Zhang; Fan Gao; Encheng Su; Taiping Qu; Jingwei Guo; Zhang Nan; Hui Wang; Zhen Zhou; Kairui Bo; Yan Chen; Yue Ren; Shuai Li; Lei Xu; Henggui Zhang

**ID:** 139679\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139679

[Paper](<https://openreview.net/forum?id=AtO6HYwYrW>) | [PDF](<https://openreview.net/pdf?id=AtO6HYwYrW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139679>)

_Abstract unavailable from the accessible public sources._

## An Information\-Theoretic Evaluation Framework for Benchmark and Model Diagnosis in Knowledge Tracing

**Authors:** Houru Jiang; Zixi Wang; Tengteng Cheng; Xueyi Li; Mingliang Hou; Jiaqi Zheng; Renqiang Luo; Teng Guo; Zitao Liu

**ID:** 149407 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qISxwVTG3L>) | [PDF](<https://openreview.net/pdf?id=qISxwVTG3L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149407>)

Knowledge tracing \(KT\) models are predominantly evaluated using aggregate metrics such as area under the curve \(AUC\) and accuracy\. However, these global scores obscure where the remaining errors originate and fail to indicate whether a benchmark is approaching saturation\. While estimating a global theoretical performance limit is challenging in realistic KT settings, it is possible to quantify local predictability\. To address this, we propose an information\-theoretic evaluation framework for KT benchmark diagnosis\. We utilize Context Tree Weighting \(CTW\) as an operational causal anchor to estimate the Local Irreducible Uncertainty \(LIU\) of each student interaction\. By projecting predictions onto this shared uncertainty coordinate, we evaluate model performance gains across distinct entropy bands rather than only at the global level\.Comprehensive evaluations on NIPS Task 3/4 and Algebra 2005 reveal that model improvements are highly non\-uniform\. While the largest gains achieved by modern KT models consistently occur in high\-entropy regions—suggesting that datasets are not yet exhausted—our framework also identifies instances where models capture inherently random noise\. By surfacing these local modeling failures alongside genuine gains, this approach provides a rigorous diagnostic tool to pinpoint both the potential and the limitations of current KT benchmark and model diagnosis\.

## Less Evidence, Better Answering: Gain\-Aware Minimal Evidence Subset Selection for Medical QA

**Authors:** Songyue Guo; Zhao CHEN; Caleb C Cao; Lei Chen

**ID:** 152857 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PsPjtMRFBs>) | [PDF](<https://openreview.net/pdf?id=PsPjtMRFBs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152857>)

Evidence\-grounded medical question answering requires not only accurate answers, but also precise, verifiable, and clinically trustworthy evidence\. Existing medical RAG systems typically retrieve top\-\\\(k\\\) chunks according to item\-wise relevance\. Although this design improves recall, it does not explicitly optimize whether the selected evidence set is compact, sufficient, and decision\-critical\. In this paper, we study medical evidence\-grounded QA from a different perspective: instead of retrieving evidence without optimization, the evidence\-grounded medical QA system should identify a compact sufficient subset of high\-density evidence snippets\. We propose \*\*MEGA\*\*, a gain\-aware framework for compact supporting medical evidence selection\. MEGA first expands clinical queries into complementary subqueries and performs hybrid retrieval to construct a recall\-oriented candidate evidence pool\. It then introduces hidden\-state \*\*Information Gain Scoring\*\*, which uses a frozen LLM to estimate whether each candidate snippet contributes new answer\-relevant information beyond surface relevance\. Finally, MEGA formulates evidence selection as a budgeted utility maximization problem and proposes an \*\*FPTAS selector\*\* to identify a compact evidence subset under an explicit token budget\. We further construct two evidence\-grounded medical QA benchmarks, CRC\-EvidenceQA and Med\-EvidenceQA, to evaluate both answer quality and evidence grounding\. Across three LLM backbones and five medical RAG baselines, MEGA consistently achieves the best results, improving over the second\-best baseline by \\\(8\.8\\%\\\) on average in answer quality and 38\.8\\% on average in evidence F1\. Ablation studies and blinded clinical expert evaluation further validate its robustness and clinical relevance\.

## Radial\-Angular Geometry for Reliable Update Diagnosis in Noisy\-Label Learning

**Authors:** Ningkang Peng; Jingyang Mao; Xiaoqian Peng; Qu Weiguang; Yanhui Gu

**ID:** 154327 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ERuc5l7i70>) | [PDF](<https://openreview.net/pdf?id=ERuc5l7i70>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154327>)

_Abstract unavailable from the accessible public sources._

## Rethinking Contrastive Targets in Radiology Language\-Image Pretraining

**Authors:** Yunhe Gao; Ashwin Kumar; Jiaming Liu; Chong Wang; Maya Varma; Fuying Wang; Stefania L Moroianu; Louisa Fay; Sergios Gatidis; Akshay Chaudhari; Curtis Langlotz

**ID:** 148888\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148888

[Paper](<https://openreview.net/forum?id=uRbyMugqG7>) | [PDF](<https://openreview.net/pdf?id=uRbyMugqG7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148888>)

CLIP\-style contrastive image\-\-text pretraining is widely used in radiology data, where each image is paired with one report and every other report in the batch is treated as a negative\. Under this recipe, two failures appear, neither systematically addressed by existing contrastive learning theory: zero\-shot evaluation peaks then degrades while training loss keeps decreasing, and training fails to learn at all at large batches\. We hypothesize the cause is structural rather than radiology\-specific: many unpaired reports share clinical findings with a given image, so CLIP's paired\-identity target is systematically biased, not merely noisy\. To test this, we construct CLEVR\-Radiology, a synthetic testbed that preserves only this overlapping\-fact structure and reproduces both failures\. With evidence that the structure is sufficient to reproduce the failures, we develop a target\-misspecification theory that derives both failures from a single deterministic gradient bias amplified by batch size, and use it to motivate a minimal compatibility\-based correction, CorLIP: a text is treated as positive whenever its clinical assertions agree with the image, with no other change to the training pipeline\. Beyond benchmark improvements, CorLIP removes the post\-peak degradation, makes large\-batch training succeed where it previously collapsed, substantially amplifies the gains from more data, and is the only configuration that remains stable up to B=2048\. The correction also transfers from chest X\-ray to 3D CT modalities\.

## Region\-Normalized DPO for Medical Image Segmentation

**Authors:** Hamza Kalisch; Constantin Seibold; Jens Kleesiek; Ken Herrmann; Frederic Jonske

**ID:** 153478 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L4rTdhTV8w>) | [PDF](<https://openreview.net/pdf?id=L4rTdhTV8w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153478>)

Direct Preference Optimization \(DPO\) has recently been applied to medical image segmentation, since comparing candidate masks is substantially cheaper than producing new dense pixel\-level annotations, making pairwise preference signals an appealing source of supervision\. However, existing work derives preferences from ground\-truth masks, leaving open whether the approach is sound under the imperfect feedback available in practice\. In our analysis of this reformulation, we identify that candidate masks tend to agree over most of the image and differ only in localized regions, yet standard DPO averages the preference signal over the full spatial domain\. This couples update strength to disagreement area, diluting small correct refinements and amplifying large misranked differences\. Crucially, this bias even degrades performance even under oracle preferences derived from ground truth\. We propose Region\-Normalized DPO \(RN\-DPO\), which normalizes the likelihood ratio over the disagreement region between candidate masks, removing this coupling\. We further provide a systematic empirical study of preference\-based segmentation fine\-tuning under controlled noisy judges, analyzing the effects of mining strategies, judge types, and reliability regimes\. Across two medical segmentation benchmarks, multiple judge configurations, and two backbone architectures, RN\-DPO consistently improves over vanilla DPO and robust DPO variants, with gains persisting under noiseless oracle preferences\.

## Symb\-xMIL: Symbolic Explanations for Multiple Instance Learning in Digital Pathology

**Authors:** Yanqing Luo; Julius Hense; Niklas Prenißl; Andreas Mock; Klaus\-Robert Müller; Thomas Schnake; Mina Jamshidi Idaji

**ID:** 152976 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OwuMiUXJ26>) | [PDF](<https://openreview.net/pdf?id=OwuMiUXJ26>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152976>)

Explanations of multiple instance learning \(MIL\) models are widely used for validation and discovery in digital histopathology\. Existing methods primarily rely on heatmaps that highlight influential regions but do not explain how evidence from different tissue regions is combined to produce a prediction\. This limits interpretability, especially when decisions depend on interactions between tissue features\. We introduce Symbolic explainable MIL \(Symb\-xMIL\), a post\-hoc explanation framework that quantifies how a MIL model’s behavior aligns with human\-readable decision rules, expressed as logical relationships \(e\.g\., AND, OR, NOT\) between input features\. These alignment scores reveal semantic patterns underlying the model’s predictions\. We evaluate Symb\-xMIL on synthetic and real\-world histopathology datasets\. On synthetic MIL data, Symb\-xMIL reliably recovers ground\-truth logical rules\. In a clinical tumor detection task, the best\-aligned rules uncover heterogeneous decision patterns and expose hidden model errors\. On an HPV\-prediction task on TCGA\-HNSCC, a cohort of head and neck cancer, our framework refines patient survival stratification beyond HPV status with potential clinical relevance\. Overall, Symb\-xMIL extends MIL explainability beyond visual attribution toward structured, rule\-based reasoning, enabling more transparent and semantically grounded interpretation of model predictions\.

## NPCBench: A Clinical Apprenticeship Benchmark for Guideline\-Constrained Care\-Pathway Reasoning in Nasopharyngeal Carcinoma

**Authors:** Pengkai Wang; Wei\-Wei Zhang; Yan Li; Min Tang; Zhitian Hou; Zeyu Liu; Guanghao Zhu; Yuanyi Wang; Yanggan Gu; Wenjun Wang; Minheng Ni; Congkai Xie; Zhijie Sang; Jianmin Wu; Ying Sun; Hongxia Yang

**ID:** 139689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AVTJEREEah>) | [PDF](<https://openreview.net/pdf?id=AVTJEREEah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139689>)

Current medical LLM benchmarks typically decompose clinical competence into isolated factual questions, single\-image interpretation, or brief case scenarios\.  This fragmented paradigm primarily measures local correctness but provides limited insight into whether models can progressively integrate subspecialty knowledge, multimodal evidence, and evolving patient states into safe, guideline\-constrained longitudinal reasoning\. To address this gap, we introduce NPCBench, a multimodal clinical apprenticeship benchmark for nasopharyngeal carcinoma \(NPC\)\.  NPCBench operationalizes specialist training as a staged evaluation of \(M\)LLMs across guideline recall, atomic rule application, multimodal evidence grounding, longitudinal care planning, state revision, and expert\-style consultation\.  It comprises 4,077 staged evaluation problems and 25 multimodal full\-care path episodes, covering pathology diagnosis, MRI staging, and 146 downstream clinical decisions\. The benchmark explicitly links stepwise tasks to complete patient\-level care trajectories, enabling systematic evaluation of all clinical pathways\. Beyond isolated precision, NPCBench evaluates whether the models ground decisions in multimodal evidence, maintain temporally consistent patient states, and provide safe expert\-level consultation across complete care trajectories\. Across 30 evaluated models, we observe a persistent composition gap: strong performance in local case\-level tasks does not translate into episode\-level clinical competence required for end\-to\-end patient management\. Overall, NPCBench advances medical AI evaluation from static question answering toward apprenticeship\-style workflow evaluation, providing a rigorous testbed for evidence\-grounded and temporally coherent reasoning in complex oncology care\.

## UniPro: Unified Multi\-Mode Medical Image Segmentation from 2D Images to 3D Volumes via Propagation

**Authors:** Bangwei Guo; Yunhe Gao; Meng Ye; Yang Zhou; Difei Gu; Guoning Zhang; Leon Axel; Dimitris Metaxas

**ID:** 154671 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BtMBnJkdbp>) | [PDF](<https://openreview.net/pdf?id=BtMBnJkdbp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154671>)

Medical image segmentation remains fragmented along two axes: segmentation paradigms and data dimensionality\. Existing methods are typically developed separately for semantic, in\-context, and interactive segmentation, and are further specialized to either native 2D images or 3D volumetric data\. In clinical practice, however, segmentation workflows take many forms: a case may be initialized by semantic prediction, reference\-guided segmentation, or user interaction\. Regardless of how it begins, fine\-grained refinement is naturally performed on 2D views; for volumetric scans, such 2D edits must propagate coherently to the rest of the volume\. We present \*\*UniPro\*\*, a \*\*uni\*\*fied model that bridges segmentation paradigms and data dimensionality, using \*\*pro\*\*pagation to extend 2D segmentation to 3D volumes\. Our key insight is that volumetric propagation and in\-context segmentation share the same reference\-conditioned prediction mechanism, differing only in whether the reference image–mask pairs come from other cases or from previously segmented neighboring slices\. Building on this view, UniPro supports semantic, in\-context, interactive, and propagation\-based segmentation within a single slice\-based framework, using class priors, reference exemplars, user clicks, and neighboring\-slice predictions as mode\-specific conditioning inputs\. To improve propagation reliability, UniPro further incorporates bidirectional and 3D supervision to regularize slice\-wise propagation beyond per\-slice losses\. Extensive experiments across diverse modalities and anatomies show that UniPro achieves strong performance across all segmentation settings, enabling annotation\-efficient 3D segmentation from sparse 2D initialization and reducing slice\-by\-slice correction effort\.

## Multi\-site PPG: An In\-the\-Wild Physiological Dataset from Emerging Multi\-Site Wearables

**Authors:** Jiayi Shao; Jiaying Ye; ShengYao Liu; Zachary Englhardt; Girish Narayanswamy; Vikram Iyer; Qiuyue \(Shirley\) Xue

**ID:** 139177 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gKLv4ForGw>) | [PDF](<https://openreview.net/pdf?id=gKLv4ForGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139177>)

Wearables are widely used for mobile health monitoring, and photoplethysmography \(PPG\) is a key sensing modality for heart rate and related physiological measurements\. However, public in\-the\-wild PPG datasets remain largely wrist\-centric or limited to short, controlled studies, constraining research on emerging wearable form factors\. We present Multi\-site PPG, an in\-the\-wild physiological dataset collected from four custom\-developed unobtrusive wearables: a smart earring, ring, watch, and necklace\. Each device records green and infrared reflective PPG, 3\-axis acceleration, and temperature with timestamps for cross\-device alignment, while a Polar H10 chest strap provides reference electrocardiogram \(ECG\)\. Participants wore the devices for one to multiple days during daytime activities while continuing their normal routines\. The dataset contains over 350 hours of raw data and 230–290 hours of preprocessed, modeling\-ready 8\-second windows data per wearable\. We benchmark heuristic, supervised, and self\-supervised heart\-rate estimation methods, showing substantial body\-site differences: the best methods achieve mean absolute errors \(MAEs\) of 2\.30 bpm on the earring, 5\.13 bpm on the ring, 8\.37 bpm on the watch, and 8\.68 bpm on the necklace\. We further analyze motion effects and evaluate multi\-site and PPG–accelerometer fusion, demonstrating the dataset’s value for robust physiological sensing across emerging wearable form factors\.

## Reporting Practice Matters: The Impact of Reference Choice on Chest X\-ray Report Evaluation

**Authors:** Daniel P Jeong; Charles Q Li; Hossein Hosseiny; Nitya M Bhalla; Fatma U Morency; Pradeep Ravikumar; Zachary Lipton; Michael Oberst

**ID:** 138929 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vocvkC0AxO>) | [PDF](<https://openreview.net/pdf?id=vocvkC0AxO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138929>)

Radiologists follow heterogeneous reporting practices\. Two radiologists examining the same image and identifying the same clinical findings might nevertheless compose superficially distinct reports, varying in terminology, shorthand, formatting, and level of detail\. These variations in reporting norms represent an under\-appreciated obstacle in efforts to evaluate AI\-based radiology report generation \(RRG\) models, where machine\-generated reports are typically assessed based on their concordance with human\-generated references\. In this paper, we quantify the sensitivity of established evaluation metrics to variations in reporting practices, revealing impacts significant enough to alter the rankings of models\. We introduce a radiologist\-informed taxonomy of variations in radiology reporting practice and a method \(ReRef\) that rewrites reference reports along the axes of our taxonomy while preserving clinical interpretation\. For instance, when comparing the performance of nine RRG models on MIMIC\-CXR using the GREEN metric, condensing the discussion of normal findings in the reference reports causes Libra to drop from first place to third while CheXOne rises from third to first\. Our results suggest that current metrics may fail to decouple clinical interpretation from conformity to reporting practices and that choosing the "right" references that accurately reflect the desired reporting practices can be important in practice\. To support future research, we release MIMIC\-CXR\-Ext\-ReRef, a radiologist\-validated dataset of 120 \(original, alternative\) reference report pairs derived from MIMIC\-CXR\.

## Risk\-Controlled Post\-Processing of Decision Policies

**Authors:** Sunay Joshi; Tao Wang; Hamed Hassani; Edgar Dobriban

**ID:** 154732 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BRnQhDXD2y>) | [PDF](<https://openreview.net/pdf?id=BRnQhDXD2y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154732>)

Predictive models are often deployed through existing decision policies that stakeholders are reluctant to change unless a risk constraint requires intervention\. We study risk\-controlled post\-processing: given a deterministic baseline policy, choose a new policy that maximizes agreement with the baseline subject to a chance constraint on a user\-specified loss\. At the population level, we show that the optimal policy has a threshold structure: it follows the baseline except on contexts where switching to the oracle fallback policy yields a large reduction in conditional violation risk\. At the finite\-sample level, given a fitted fallback policy and score, we develop a post\-processing algorithm that uses calibration data to select a threshold\. Leveraging tools from algorithmic stability and stochastic processes, we show that under regularity conditions, in the i\.i\.d\. setting, the expected excess risk of the post\-processed policy is $O\(\\log n/n\)$\. In the special case when an exact\-safe fallback policy is available, the algorithm achieves precise expected risk control under exchangeability\. In this setting, we also give high\-probability near\-optimality guarantees on the post\-processed policy\. Experiments on a COVID\-19 radiograph diagnosis task, an LLM routing problem, and a synthetic multiclass decision task show that targeted post\-processing can meet or nearly meet risk budgets while preserving substantially more agreement with the baseline than score\-blind random mixing\.

## Remote Photoplethysmography Based on a Skin Reflection Exponential Model

**Authors:** Jiachen Li; Longzhen Tang; Shisheng Guo; Guolong Cui

**ID:** 149070 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t5bnpdRy8p>) | [PDF](<https://openreview.net/pdf?id=t5bnpdRy8p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149070>)

Facial video–based remote photoplethysmography \(rPPG\) estimates physiological signals from subtle spatiotemporal variations in facial videos, but remains vulnerable to head motion, illumination changes, and environmental perturbations\. Existing methods mainly distinguish rPPG\-related variations from motion and lighting artifacts at the signal or feature level, while largely neglecting the optical reflection properties of human skin\. In this work, we formulate a skin reflection exponential model to describe the nonlinear relationship among skin reflectance, illumination, motion\-induced variations, and blood\-volume changes\. Guided by this model, we propose a physically inspired rPPG estimation framework that explicitly incorporates skin reflectance priors into signal extraction\. Given a facial video, facial keypoints are first detected and encoded to represent motion dynamics, while illumination\-related features and candidate rPPG representations are jointly modeled under the proposed exponential formulation\. By constraining rPPG estimation with skin\-reflection physics, the framework improves separation of physiological components from motion and illumination disturbances\. Experiments demonstrate improved robustness under challenging conditions\.

## DAG\-Biased Graph Learning for Multimodal Survival on EHR

**Authors:** Munib Mesinovic; Tingting Zhu

**ID:** 155436 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5e6HZ4aFfT>) | [PDF](<https://openreview.net/pdf?id=5e6HZ4aFfT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155436>)

Existing deep learning architectures for survival prediction from electronic health records \(EHRs\) largely assume unimodality, failing to capture the complex relational structure across diverse clinical modalities\. Graph learning can allow us to robustly adapt to the underlying clinical structure of the data to have more predictive and interpretable representations for time\-to\-event analysis\. However, unconstrained graph learning produces dense, bidirectional adjacencies that overfit\. We introduce M\-CADENCE, a multimodal survival model that integrates structured acyclic priors with attention\-based propagation\. Each modality has its own learnable adjacency, regularised toward acyclicity through a log\-determinant characterisation and toward sparsity through soft thresholding\. A cross\-modal meta\-adjacency keeps the cross\-modal parameter count quadratic in the number of modalities rather than in their feature dimensions\. Propagation is then performed by multi\-head attention biased by the learnt structure\. The propagation step degrades gracefully under sparse or misspecified structure, addressing a known weakness of hard\-routing graph variants\. We evaluate M\-CADENCE on five EHR benchmarks covering intensive\-care mortality, circulatory failure, and emergency\-department competing risks, against multiple survival, graph, and structure learning baselines\. M\-CADENCE achieves the best concordance on all datasets, the best early\-warning AUC on four of five, and competitive precision\-recall against the strongest deep survival baselines\. Removing the DAG bias lowers concordance, as does substitution with a density\-matched random adjacency, which confirms that the specific learnt structure is required\. Discrimination is stable across four orders of magnitude in regularisation strength, and evaluation by a panel of ten language models confirms M\-CADENCE learns clinical edges that are more physiologically plausible than baseline structure\-learning methods\.

## Selective Answering for Medical VQA via Parallel Independent Claim Verification

**Authors:** Donghee Han; Jiwon Jeong; Mun Yi

**ID:** 150272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jPgQvPpJTX>) | [PDF](<https://openreview.net/pdf?id=jPgQvPpJTX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150272>)

Medical visual question answering is a safety\-critical decision problem in which abstaining on inputs the image cannot support matters as much as answer accuracy\. Existing inference\-time agentic methods address hallucination by adding a verification step, but they collapse the final decision at a single language\-model judge that integrates all evidence in one prompt and is systematically biased toward declaring inputs answerable\. We propose PICV \(Parallel Independent Claim Verification\), which reformulates selective medical VQA as independent claim verification with transparent aggregation: the question is decomposed into a small set of typed visual claims, each is verified by an isolated prompt with no access to the other verdicts, and the verdicts are combined by a deterministic rule rather than another model, yielding an answer/abstain decision together with a typed unanswerability reason\. We evaluate PICV efficiently on an automated answerability benchmark we construct over two public radiology datasets via three reproducible corruption procedures, requiring neither heavy VLM judging nor human annotation at evaluation time\. Across four VLM backbones, PICV consistently outperforms strong prompting and agentic baselines; ablations attribute the gains specifically to per\-claim isolation and rule\-based aggregation rather than to agentic decomposition alone\.

## Learning Survival Models with Right\-Censored Reporting Delays

**Authors:** Yuta Shikuri; Hironori Fujisawa

**ID:** 152038 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W1GKVEnOcP>) | [PDF](<https://openreview.net/pdf?id=W1GKVEnOcP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152038>)

Survival analysis provides statistical methods to model the time until an event occurs\. Reporting delays arise when event times are not observed at their occurrence but are only revealed upon reporting\. This issue is particularly critical for timely risk evaluation when the observation window is short due to administrative censoring\. In this study, we incorporate right\-censored reporting delays by jointly modeling parametric hazards for the event and reporting processes\. We then construct a consistent estimator for the model parameters and develop a Monte Carlo expectation\-maximization algorithm to compute it\. To address the challenges posed by administrative censoring, we leverage these findings and propose a transfer\-learning procedure\. Experimental results demonstrate that our method improves the accuracy of timely risk evaluation under administrative censoring\.

## Severity\-Controlled Prediction Sets for Medication Recommendation

**Authors:** Yu Gu; Zijun Yu; Chi\-Kuang Yeh; Xinyu Wang; Ziyang Song

**ID:** 148292 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ywQz91vA0C>) | [PDF](<https://openreview.net/pdf?id=ywQz91vA0C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148292>)

Medication recommendation is a multi\-label prediction task, yet existing prediction\-set evaluation and calibration methods rely mainly on exact\-overlap metrics and therefore treat all missed medications as equally severe\. However, missing a medication but predicting a therapeutically close drug is less severe than matching it only with distant predictions\. To address this, we introduce \*\*Conformal Severity Control \(CSC\)\*\*, a post\-hoc framework for calibrating medication prediction sets under hierarchy\-aware mismatch severity\. CSC uses the Anatomical Therapeutic Chemical \(ATC\) hierarchy to quantify mismatch severity and controls patient\-level severity without retraining the predictor, supporting both average severity and upper\-quantile severity for the highest\-severity mismatches\. Experiments on MIMIC\-IV show that CSC tracks user\-specified severity tolerances and shifts prediction sets away from distant mismatches toward exact or close matches\.

## Diagnosing and Repairing Visual Collapse in Compact Medical Multimodal LLMs

**Authors:** Jinjie Xie; Baihua Li; Qinggang Meng

**ID:** 149438 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q5FAFDMeZq>) | [PDF](<https://openreview.net/pdf?id=q5FAFDMeZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149438>)

_Abstract unavailable from the accessible public sources._

## Look Before You Leap: Self\-Evolving Clinical Reasoning with Psychometric Preference Optimization for Radiology Report Generation

**Authors:** Qi Wang; Yunfeng Min; Liwei Huang; Zeyu Zhang; Di Gai; Jun Liu

**ID:** 154029 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GmZxHeBKTq>) | [PDF](<https://openreview.net/pdf?id=GmZxHeBKTq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154029>)

_Abstract unavailable from the accessible public sources._

## AI and Data Science for Her: Training the Next Generation of High School Girls in Nigeria

**Authors:** Aderonke Sakpere

**ID:** 137855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137855>)

This program will train 300 Nigerian high school girls across six geopolitical zones of the country in the fundamentals of AI and data science\. Grounded in published research on how teenage girls engage with technical subjects, the curriculum is deliberately girl\-centered, pairing students with female mentors already working in AI, and connecting technical concepts to capstone projects addressing real challenges in healthcare, agriculture, and education\. AI clubs formed in each participating school will keep the learning going long after the program’s formal end

## AI and Data Science for Her: Training the Next Generation of High School Girls in Nigeria

**Authors:** Aderonke Sakpere

**ID:** 137849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137849>)

This program will train 300 Nigerian high school girls across six geopolitical zones of the country in the fundamentals of AI and data science\. Grounded in published research on how teenage girls engage with technical subjects, the curriculum is deliberately girl\-centered, pairing students with female mentors already working in AI, and connecting technical concepts to capstone projects addressing real challenges in healthcare, agriculture, and education\. AI clubs formed in each participating school will keep the learning going long after the program’s formal end

## Mental Health AI Must Move Beyond Diagnostic Prediction and Chat\-Based Support: Toward Perspective\-Aware, Multisensory Co\-Experience

**Authors:** Pinyao Liu; Esen K Tütüncü; Muhammad Arslan Manzoor; Yufang Hou; Chirag Raman

**ID:** 140081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KrjqjWYl47>) | [PDF](<https://openreview.net/pdf?id=KrjqjWYl47>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140081>)

This position paper argues that AI for mental health must move beyond two dominant paradigms\. The first is diagnostic prediction, which frames mental healthcare as symptom detection, diagnosis, and decision\-making\. The second is chat\-based support, which reduces therapeutic interaction to language\-mediated information delivery\. Both approaches neglect what therapeutic research shows to be central to healing: experiential, affective, and embodied processes\. In many therapeutic traditions, insight emerges not through information\-delivery but through emotionally resonant, multisensory experiences that allow individuals to feel, reflect, and reframe their inner world\. We propose an alternative framework: co\-experiential AI systems that identify emotionally salient moments across modalities, modulate sensory experience to facilitate reflection, and adapt over time to a user's evolving responses and interpretations\. Using dreamwork therapy as a stress test for mental health AI, we define three key challenges for AI systems: identifying affective anchors in indeterminate multimodal interactions; modeling user perspective as a situated context; and enabling continual adaptation to individuals without repeated retraining\. We posit that addressing these challenges requires rethinking AI's role not as an expert, but as a perspective\-aware participant in human meaning\-making\.

## Augmented Equivariant Mesh Networks for Anatomical Segmentation

**Authors:** Daniel Saragih

**ID:** 153175 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NHNCBuH2mF>) | [PDF](<https://openreview.net/pdf?id=NHNCBuH2mF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153175>)

Anatomical mesh segmentation requires models that operate directly on irregular surface geometry while remaining robust to arbitrary patient pose and mesh resolution variation\. Existing task\-specific mesh and point\-cloud methods are not equivariant, and can degrade sharply under test\-time perturbation, for example dropping by 25\-26 IoU points on intraoral scan segmentation at 40$\\textdegree\{\}$ tilt\. We present EAMS, an Equivariant Anatomical Mesh Segmentor built on Equivariant Mesh Neural Networks \(EMNN\), and evaluate it across four clinically distinct tasks spanning edge\-, vertex\-, and face\-level supervision\. We combine intrinsic mesh descriptors with anatomy\-aware priors, including PCA\-derived frames for dental arches and liver surfaces, and augment message passing to provide lightweight global context\. Across intracranial aneurysm and intraoral segmentation, EAMS variants are competitive with specialized baselines on unperturbed inputs while remaining stable under geometric perturbations, and on liver surfaces they expose a favorable trade\-off between canonical\-pose accuracy and rotation robustness\. These results show that a lightweight \($&lt;2$M parameters\) equivariant framework can deliver robust anatomical mesh segmentation across diverse supervision types without task\-specific architectures\.

## Temporal Island Sparse Autoencoders for Interpreting Clinical Time\-Series Models

**Authors:** Muhan Yeo; Bong Gyun Kang; HyunGi Kim; Sungroh Yoon

**ID:** 151967 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WSgYALKmGw>) | [PDF](<https://openreview.net/pdf?id=WSgYALKmGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151967>)

Deep learning models for electronic health records achieve strong predictive performance but provide little insight into \*what clinical concepts\* they represent internally\. Post\-hoc attribution methods produce per\-cell importance scores that lack temporal coherence, cross\-variable structure, and reusability across patients\. We introduce the \*\*Temporal Island Sparse Autoencoder\*\* \(TI\-SAE\), which learns a backbone\-specific, patient\-shared \*clinical concept dictionary\* from a frozen predictive model’s representations\. Each dictionary entry \(latent\) is defined by learned temporal Gaussian islands—specifying \*when\* the concept is active—and a sparse variable\-composition vector—specifying \*which variables\* are involved\. A decoupled selector then identifies which dictionary entries drive each patient’s prediction, separating representation learning from attribution\. We evaluate TI\-SAE across five backbone architectures spanning different representation strategies on MIMIC\-III and MIMIC\-IV \(three prediction tasks each\)\. TI\-SAE produces structured clinical concepts that go beyond transient attribution heatmaps while achieving strong performance on standard faithfulness benchmarks\.

## What Transformer FFNs Never See: Theory, Diagnosis, and Lightweight Remediation

**Authors:** Tinghe Zhang; Yucheng Xiao; Alex Lamb

**ID:** 153020 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oa1iYsgkvE>) | [PDF](<https://openreview.net/pdf?id=Oa1iYsgkvE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153020>)

In Transformer attention, distinct weight vectors $\\boldsymbol\{\\alpha\} \\neq \\boldsymbol\{\\alpha\}'$ can produce the same aggregated representation $\\mathbf\{V\}\\boldsymbol\{\\alpha\} = \\mathbf\{V\}\\boldsymbol\{\\alpha\}'$\. When $\\operatorname\{rank\}\(\\mathbf\{V\}\) \\leq n\-2$, configurations with entirely different dominant source tokens collide on a set of positive Lebesgue measure, a condition satisfied in over 97% of attention heads in BERT\-Base\. Such collisions are harmful: the downstream FFN receives identical inputs despite the attention having attended to entirely different source tokens, and must therefore produce identical outputs regardless of which tokens actually dominated, fundamentally limiting any computation that requires sensitivity to attention source, such as multi\-hop reasoning, attribution, or knowledge retrieval\. No increase in depth, width, or data can compensate, because the routing weights are discarded before the FFN is reached\. The routing weights $\\\{\\alpha\_\{ij\}\\\}$, however, are available within the same forward pass and can be retained as a compact side\-channel to restore the missing signal\. We call this structural information loss \*routing non\-identifiability\*\. In BERT\-Base, value\-matrix rank deficiency suppresses $k \\geq 107$ routing dimensions \(over 84% of degrees of freedom\) before any FFN computation\.  To quantify the practical gap, we introduce the Routing Reconstruction Task \(RRT\): standard Transformers achieve 31\.4% source\-identification accuracy while oracle routing statistics reach 94\.6%, a 63\-point gap consistent with an information bottleneck in the FFN input\. We then propose the Route\-Aware FFN \(RA\-FFN\), a drop\-in module that appends four compact routing statistics to each FFN block at under 1\.1% additional parameter cost, recovering over 75% of the oracle gain\. RA\-FFN improves all benchmarks tested: at 110M scale, gains cover multi\-hop reasoning, language modelling, and translation, with multi\-hop gains $6\\times$ larger than single\-hop; at 7B scale on Llama\-2\-7B and Mistral\-7B, gains extend further to mathematics \(GSM8K\) and general reasoning \(MMLU, ARC\-Challenge, HellaSwag\), ordered by routing sensitivity\.

## Can AI Agents Synthesize Scientific Conclusions?

**Authors:** Hayoung Jung; Pedro V Diniz; José R Roveda; Abner F da Silva; Haeun Jung; Enoch Tsai; Aleksandra Korolova; Manoel Ribeiro

**ID:** 139077 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mWOGkdnMZp>) | [PDF](<https://openreview.net/pdf?id=mWOGkdnMZp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139077>)

Scientific AI agents increasingly retrieve evidence, reason across sources, and synthesize conclusions used in consequential decisions\. Yet, their ability to do so in high\-stakes domains such as health remains unclear\. We introduce SciConBench, a large\-scale live benchmark of 9\.11K questions and expert\-written conclusions from systematic reviews to evaluate open\-domain scientific conclusion synthesis\. The benchmark draws on an expert\-validated automated evaluation pipeline that decomposes conclusions into atomic facts and measures correctness and comprehensiveness via factual precision and recall\. To mitigate data leakage, we further introduce SciConHarness, a clean\-room evaluation harness that equips agents with controlled web interaction to ensure valid measurement\. Evaluating 8 frontier models and deep research agents, we find that factual quality remains low: under clean\-room settings, the best agent achieves only a factual F1 of 0\.337\. Our clean\-room setting consistently reduces performance relative to unconstrained evaluation, suggesting that leakage inflates estimates of models' true synthesis capabilities\. Finally, we audit consumer\-facing agents \(e\.g\., Google AI Overview, OpenEvidence\) and find they frequently generate incomplete and sometimes contradictory conclusions, even when the ground\-truth answer is available\. Overall, our results show that reliable synthesis of scientific conclusions remains an open challenge, and that clean\-room evaluation is essential for assessing open\-domain AI agents\.

## Evaluating Synthetic ECG Pretraining: When Can Patient\-Free Simulators Substitute for Real ECG Data?

**Authors:** Naoki Nonaka; Jun Seita

**ID:** 139147 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJc0X3nEby>) | [PDF](<https://openreview.net/pdf?id=iJc0X3nEby>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139147>)

ECG, with mature physiological simulators and public benchmarks, is a useful testbed for evaluating what synthetic pretraining supports\. We introduce a reusable framework for ECG representation learning that compares patient\-free physiological simulators, patient\-derived real ECGs, and learned synthetic ECGs from real\-ECG\-trained generators\. Holding the encoder and MAE objective fixed, we study three matched settings\. Transfer\-protocol analysis compares abnormal\-inclusive real ECGs, normal\-only real ECGs, and simulator pretraining under frozen probing and full fine\-tuning on 26 abnormal\-ECG tasks from PTB\-XL, G12EC, and CPSC2018 using a single\-lead\-II pipeline\. Compute\-normalized PTB\-XL scaling tests whether simulator pretraining matches real\-data pretraining under equal processed\-sample budgets\. A fixed 100k\-sample generator\-class comparison evaluates VAE, DCGAN, SSSD\-ECG diffusion variants with and without labels, and two simulators, SimECG\-M and SimECG\-N\. The transfer analysis shows that protocol determines the supported claim: abnormal\-inclusive real ECG pretraining yields more linearly separable pathology features under frozen probing, whereas full fine\-tuning narrows the gap and can reverse it when the simulator corpus is sufficiently scaled\. Under the fixed\-100k protocol, task\-wise F1 averaged over five runs ranks SimECG\-N first on 22/26 tasks; no evaluated learned generator ranks first under this fixed\-100k protocol; and SimECG\-N obtains higher mean F1 than both diffusion variants on all 26 tasks\. These results delineate where abnormal\-inclusive real exposure remains beneficial and where patient\-free physiological simulation can serve as an effective, protocol\-bound substitute under the evaluated single\-lead\-II MAE pretraining and full\-fine\-tuning setting\. We release pretraining corpora, splits, and code to support reproducible evaluation of synthetic ECG pretraining sources\.

## Echo\-SAM: Zero\-Shot Learning of Unseen Structures via Medical Knowledge Graph Grounding

**Authors:** Jiewen Yang; Xiaomeng Li

**ID:** 152656 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RNvUsEyQua>) | [PDF](<https://openreview.net/pdf?id=RNvUsEyQua>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152656>)

Segmenting unseen anatomical structures in echocardiographic images is challenging because dense annotations are scarce and ultrasound often presents visually similar textures across different cardiac structures\. Current foundation models remain limited in this setting because they treat anatomical knowledge as independent text prompts, overlooking the spatial topology that clinicians use to localize ambiguous structures from their visible neighbors\. We propose Echo\-SAM, a zero\-shot ultrasound segmentation framework that grounds a structured cardiac knowledge graph in visual space through relation\-conditioned geometric support inference\. Echo\-SAM localizes seen structures as anatomical anchors, propagates relational constraints through a knowledge\-grounded Graph Neural Network, and enhances text prompts with image\-grounded anatomical context\. We further introduce a topology\-to\-geometry mapping that converts graph relations into geometry\-aware support proposal scores, yielding posterior\-guided support estimates for unseen structures\. By treating relation\-specific scale, thickness, and offset as latent geometric variables, Echo\-SAM adapts graph\-derived support proposals to image\-specific anchors without relying on fixed coordinate templates\. Extensive evaluations on zero\-shot echocardiography segmentation benchmarks demonstrate that Echo\-SAM substantially outperforms state\-of\-the\-art foundation models, achieving up to 50\.42\\% absolute improvement in Dice score\. Code will be publicly available\.

## CycleSpectra: Cyclic Motion Spectra for Phase\-Queryable 4D Cardiac Reconstruction

**Authors:** Xueming Fu; Xin Li; Lixia Han; Ao Shen; Guangming Lu; Song Luo; S\. Kevin Zhou

**ID:** 152695 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R6WdWujy5S>) | [PDF](<https://openreview.net/pdf?id=R6WdWujy5S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152695>)

Reconstructing patient\-specific cyclic cardiac motion at arbitrary phases is central to dynamic cardiac assessment, underpinning measurements such as ejection fraction, stroke volume, and regional myocardial deformation\. Existing methods\-\-\-pair\-wise registration, time\-conditioned decoders, and coordinate\-based implicit fields\-\-\-share a common implicit assumption: the cardiac cycle is treated as a sequence of discrete phases, with temporal structure stitched together through learned mappings supervised at the observed frames\. Yet the cycle is, by physical fact, a closed periodic process\. We propose \\textbf\{CycleSpectra\}, a spectral motion representation that takes the cyclic structure as a starting point of the representation rather than as a property to be learned\. Given a pair of sparsely sampled phase observations, the model learns the spectral structure of the underlying cyclic cardiac motion in a low\-dimensional latent space, and recovers the displacement at any phase through a fixed analytic synthesis layer\-\-\-time never enters the network as a learnable signal, only as a coordinate the readout takes by construction\. To support evaluation, we collect a thin\-slice phase\-resolved 4D cardiac CT cohort and benchmark under both canonical and non\-canonical input protocols, reporting whole\-cycle motion\-fidelity metrics alongside standard image and anatomical metrics\. Under arbitrary two\-frame input, CycleSpectra achieves the lowest ejection\-fraction error and highest ventricular volume\-\-time curve correlation among recent baselines, while remaining competitive on image fidelity\.  Beyond two\-frame inference, the proposed framework supports test\-time multi\-frame latent fusion for higher accuracy, validated on both the in\-house cohort and a cross\-modality 4D cardiac MR cohort\. Code will be available\.

## Manifold\-Guided Stereo\-Monocular Refinement for Endoscopic Stereo Disparity Estimation

**Authors:** Jiewen Yang; Yi Zhong; Bin Pu; Xingbo Dong; Ming Zheng; Qika Lin; Kai He; Xuechen Zhang

**ID:** 150407\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150407

[Paper](<https://openreview.net/forum?id=iGyOrOrioU>) | [PDF](<https://openreview.net/pdf?id=iGyOrOrioU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150407>)

Dense stereo disparity estimation provides the geometric basis for 3D perception in computer\-assisted endoscopy\. Endoscopic stereo matching is difficult because reliable tissue correspondences often appear next to weak\-texture, specular, occluded, or deformed regions within the same frame\. Existing stereo and stereo\-monocular methods improve cost aggregation or introduce monocular priors, but they often treat monocular guidance as a global feature source or an independently predicted candidate\. Without evaluating the local support of the current stereo match during refinement, the update can reinforce corrupted correspondences in ambiguous regions or allow monocular priors to override reliable metric matches\. To tackle these problems, we introduce Manifold\-Stereo, a reliability\-gated latent\-flow framework for endoscopic stereo disparity estimation\. The method refines a monocular disparity candidate through a conditional latent residual flow on an image\-aligned correction space induced by stereo cost\-volume geometry, then calibrates the corrected candidate to the current stereo disparity scale\. A geometric consistency gate computed from left\-right feature alignment regulates the candidate contribution during recurrent refinement, preserving stereo estimates in well\-matched regions while supplying monocular context where local matching is ambiguous\. Experiments on in\-domain SCARED and zero\-shot SERV\-CT and Hamlyn show strong average disparity accuracy and competitive thresholded outlier rates against recent stereo and endoscopic baselines\.

## Auditing Correlated Failures in Frozen\-Feature Pretrained\-Encoder Pools for Medical Segmentation

**Authors:** Eunseob Choi; Kyeonghun Kim; Hyuk\-Jae Lee; Nam\-Joon Kim

**ID:** 138982\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138982

[Paper](<https://openreview.net/forum?id=sgt45cOBtI>) | [PDF](<https://openreview.net/pdf?id=sgt45cOBtI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138982>)

Cross\-architecture/backbone medical\-segmentation pools are commonly motivated as complementary failure coverage when members make different mistakes; that assumption is rarely tested at the per\-case level\. We audit this assumption for a fixed pool of 11 pretrained\-encoder bundles read out by a deliberately weak $1\\times1$\-convolution decoder \(4 seeds\), and for a small set of decoder\-recipe perturbations on the same bundles\. Across five primary task rows \(Kvasir polyp, ACDC LV, BraTS foreground, RIGA Cup, RIGA Disc\), this 11\-bundle $1\\times1$\-conv readout pool yields per\-case Dice correlation gaps of $\\Delta=0\.261\\text\{\-\-\}0\.638$ between same\-bundle and cross\-bundle pairs after a Dice $\\geq 0\.30$ functional floor; all paired case and hierarchical bootstrap intervals exclude zero\. The result is stable under floor sweeps, ICC\(A,1\), leave\-one\-out, subject aggregation, quality\-controlled pair regression, and cross\-fitted item\-difficulty residualisation\. Decoder\-recipe diagnostics show that richer readouts attenuate the gap \(UNet\-skip; case\-identical nnU\-Net on RIGA Cup: $0\.473\\to 0\.0079$, separate\-split $0\.034\\text\{\-\-\}0\.047$\); the reported magnitudes are recipe\-specific\. Additional probes \(pixel error, joint\-failure lift, same\-architecture\-family ViT, same\-family cross\-checkpoint, same\-backbone\) locate the dependence structure but do not causally separate architecture, pretraining, and recipe\. The claim is scoped to 2D frozen/light\-adaptation encoder pools with this readout family and to retrospective benchmark audits\. We release per\-case Dice traces, summary JSONs, scorer code, hashes, and metadata as the audit artifact\.

## PG\-LRF: Physiology\-Guided Latent Rectified Flow for Electro\-Hemodynamic PPG\-to\-ECG Generation

**Authors:** Xiaoda Wang; Minxiao Wang; Kaiqiao Han; Defu Cao; Ching Chang; Yidan Shi; Runze Yan; Xiao Luo; Yan Liu; Xiao Hu; Yizhou Sun; Wei Wang; Carl Yang

**ID:** 150392\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150392

[Paper](<https://openreview.net/forum?id=iOvXn5DzBr>) | [PDF](<https://openreview.net/pdf?id=iOvXn5DzBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150392>)

Electrocardiography \(ECG\) is the clinical standard for cardiac assessment but requires dedicated hardware that does not scale to daily\-life monitoring\. Photoplethysmography \(PPG\) is ubiquitous in wearables but lacks ECG\-specific diagnostic morphology and is corrupted by motion and sensor noise\. PPG\-to\-ECG generation aims to bridge this gap by recovering electrical morphology and timing from peripheral pulse signals\. However, existing methods largely rely on statistical alignment and data\-driven generation\. They fail to explicitly structure the latent space around physiology\-aware electro\-hemodynamic factors and lack constraints from forward physiological dynamics\. To address these challenges, we propose PG\-LRF, a physiology\-guided latent rectified flow framework\. PG\-LRF introduces an electro\-hemodynamic simulator that co\-models ECG and PPG through shared cardiac phase dynamics\. Guided by this simulator, a Physiology\-Aware AutoEncoder learns a structured electro\-hemodynamic latent space\. Then we integrate this simulator guidance into a PPG\-conditioned latent rectified flow, enforcing ECG\-side morphology consistency and ECG\-to\-PPG forward hemodynamic consistency during generative transport\. Experiments on the large\-scale MC\-MED dataset demonstrate that PG\-LRF significantly improves PPG\-to\-ECG generation and downstream cardiovascular disease classification, proving its ability to generate ECGs that are both signal\-faithful and physiologically plausible under the ECG\-to\-PPG hemodynamic pathway

## REAL\-MED: Benchmarking LLM Agents on Real\-World Medical Tasks

**Authors:** Zihan Wang; yifan zhang; Jieqiong Cao; Junxiu Chen; Shanni Chen; ChaoGao; Hao Wang; Shi Feng; Xiaocui Yang; Jinghao Lin; Kai WU; Xiaozhong Ji; Haihua Yang

**ID:** 139773\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139773

[Paper](<https://openreview.net/forum?id=5cVNXIDXfi>) | [PDF](<https://openreview.net/pdf?id=5cVNXIDXfi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139773>)

Real\-world medical work extends far beyond answering isolated clinical questions: it often requires clinicians to process complex materials, interact with information systems, and produce structured deliverables\.  As AI systems evolve from medical chatbots into medical agents, evaluation should likewise move beyond \\emph\{answer correctness\} toward the \\emph\{quality of end\-to\-end workflow deliverables\}\.   We introduce \\textsc\{Real\-Med\}, a benchmark for evaluating AI agents on real\-world medical tasks\.  \\textsc\{Real\-Med\} contains 405 expert\-designed tasks across four categories: Clinical Support, Patient Management, Pharmacy Management, and Medical Education \\&amp; Research\.  Each task is grounded in a realistic scenario with concrete materials, tool interfaces, and explicit deliverable requirements, such as clinical documents, medication plans, spreadsheets and review reports\.  To support rigorous evaluation, each task is annotated with fine\-grained expert\-written rubrics, averaging 15\.4 independent rubric items per task, and every task is cross\-validated by at least three medical experts\.  We evaluate 11 strong mainstream models under a unified harness with the same resources, tools, and execution protocol\.  Our results show that current agents can often satisfy surface\-level task requirements, but still struggle with detail\-sensitive medical reasoning, dosage\-calculation traps, shallow research, formatting constraints, and reliable final delivery\.  These findings reveal a substantial gap between medical QA ability and robust execution in realistic medical workflows\. Code is available at \\url\{https://anonymous\.4open\.science/r/REAL\-MED\}\.

## Does Cross\-Panel Pretraining Transfer Under Marker Heterogeneity? A Large\-Scale Empirical Study in Clinical Flow Cytometry

**Authors:** Zixin \(Zora\) Zhuang; Benjamin Mashford; Dan Andrews

**ID:** 153804\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153804

[Paper](<https://openreview.net/forum?id=IZxWllh1po>) | [PDF](<https://openreview.net/pdf?id=IZxWllh1po>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153804>)

Flow cytometry is the primary assay for single\-cell immune profiling, yet cross\-study modelling remains under\-explored\. The challenge is two\-fold: Studies measure different marker panels, inducing feature\-space inconsistency, while batch effects shift signals even on shared markers, making transfer harder than in vision or language where input spaces are stable\. We conduct a large\-scale empirical study, pretraining an encoder on 89,324 samples from 112 public studies spanning 525 distinct marker panels\. We evaluate it frozen \-\-\- isolating representation quality from task\-specific adaptation, on five clinical tasks under a taxonomy of panel\-overlap conditions, including three panel\-zero\-shot tasks whose marker panels were unseen during pretraining, and one negative control with no expected discriminative signal\. We further characterise transfer across scaling axes and probe robustness to marker removal at test time\. Despite heterogeneity that disrupts direct transfer, the frozen encoder matches or exceeds in\-distribution specialist encoders on 4 of 5 tasks, including all three novel\-panel tasks, and behaves as expected on the negative control\. Scaling analyses reveal saturation in both encoder capacity and random corpus subsampling, and representations degrade gracefully under marker reduction\. These results suggest a pretrained encoder can serve as a general\-purpose feature extractor for clinical cytometry data, without task\-specific retraining\.

## MedVTok: A General\-Purpose Medical Visual Tokenizer

**Authors:** Chenglong Ma; Yuanfeng Ji; Junzhi Ning; Jiyao Liu; Yujie Wei; Shaohao Rui; Chaoyang Zhang; Wenjie Li; Wenhao Tang; Cheng Tang; Wei Li; Shujian Gao; Yujie Zhang; Ying Chen; Zilong Li; Zongyuan Ge; Diping Song; Jin Ye; Ming Hu; Junjun He; Hongming Shan

**ID:** 152136\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152136

[Paper](<https://openreview.net/forum?id=VGTDLvJS3w>) | [PDF](<https://openreview.net/pdf?id=VGTDLvJS3w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152136>)

Multimodal medical AI requires a common visual interface that integrates heterogeneous imaging evidence for patient condition modeling\. However, existing medical visual tokenizers are often tied to a specific dimension and imaging modality, forcing multimodal systems to rely on fragmented and poorly reusable representations\. We introduce MedVTok, a general\-purpose visual tokenizer that maps 2D images and 3D volumes from diverse imaging modalities into a unified token space\. Building such a tokenizer poses two key challenges: preserving anatomical structure across dimensions and capturing clinical semantics across modalities\. To this end, MedVTok introduces \(i\) slice differential regularization, which explicitly models inter\-slice anatomical coherence missing in previous per\-pixel/per\-voxel supervision, and \(ii\) multi\-expert representation alignment, which integrates knowledge from multiple medical expert encoders while retaining modality\-specific complementary knowledge\. Trained on 28M images and 70K volumes across 9 imaging modalities, MedVTok supports classification, retrieval, segmentation, synthesis, visual question answering, and medical report generation through a single tokenizer\. Across 24 benchmarks, MedVTok achieves state\-of\-the\-art performance, demonstrating a scalable token interface that unifies medical image dimension, modality, and task usage\. Code and weights will be released\.

## OperatorSHAP: Fast and Accurate Shapley Value Estimation for Neural Operators

**Authors:** Joshua Stiller; Santo Thies; Felix Czaja; Eyke Hüllermeier

**ID:** 154322\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154322

[Paper](<https://openreview.net/forum?id=EXq2TaPGfM>) | [PDF](<https://openreview.net/pdf?id=EXq2TaPGfM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154322>)

Understanding model predictions is essential for physical applications, where outputs often inform safety\-critical decisions, such as structural load assessment, weather warnings, and clinical diagnosis\. Shapley values satisfy many desirable properties as an attribution method, but their computational cost during inference hinders their practical use\. Current amortized explainers, such as FastSHAP, are limited to homogeneous inputs, which is problematic for physical applications where data often comes from irregular grids and geometries\. We introduce OperatorSHAP, a grid\-agnostic attribution method and training procedure that allows us to train FastSHAP\-like explainers for neural operators\. We establish a theoretical framework for attributions in function space, connecting to Aumann–Shapley values\. We further show that OperatorSHAP's explanations are consistent with state\-of\-the\-art discrete Shapley values across resolutions and transfer across grid sizes without retraining\.

## Extending ROC Analysis to Uncertainty\-Aware Risk Prediction with an Interval\-Based AUC \(iAUC\)

**Authors:** Yuqi Li; Matthew Engelhard

**ID:** 150218\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150218

[Paper](<https://openreview.net/forum?id=jsG2UV3YqP>) | [PDF](<https://openreview.net/pdf?id=jsG2UV3YqP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150218>)

In high\-stakes risk prediction, interval\-valued predictions provide a natural way to represent predictive uncertainty\. However, standard evaluation tools such as the receiver operating characteristic \(ROC\) curve and the area under the curve \(AUC\) are designed for point\-valued predictions and do not capture how uncertainty affects discrimination performance\. To address this gap, we develop an uncertainty\-aware ROC framework and corresponding interval\-based AUC \(iAUC\) metrics for evaluating the performance of interval\-valued risk predictions\. The framework constructs two ROC\-style curves with associated areas $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, and shows that these quantities induce a three\-region decomposition of positive\-negative rankings into confidently correct, ambiguous, and confidently incorrect orderings\. Under valid class\-conditional coverage, $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, together with the pairwise miscoverage rate, provide theoretical bounds on the optimal AUC, linking interval coverage to achievable discrimination\. The framework is compatible with a range of methods for quantifying epistemic uncertainty in risk prediction, including Bayesian, bootstrap, and ensemble\-based procedures, and provides a practical way to compare predictive models and interval\-generation methods\. Experiments on clinical benchmark data and MIMIC\-IV mortality prediction show that models with similar point AUC can have different uncertainty\-aware ranking profiles, and that the proposed decomposition can support risk\-aware model selection and threshold\-based abstention\.

## CODA: Cohort\- and Drift\-aware Foundation Model for Multimodal Clinical Reasoning

**Authors:** Changshuo Liu; Jiaqi Zhu; Wenqiao Zhang; Xiaokui Xiao; Beng Chin Ooi

**ID:** 149608 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=opvU1rQLrM>) | [PDF](<https://openreview.net/pdf?id=opvU1rQLrM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149608>)

Recent advances in multimodal foundation models have demonstrated strong performance across diverse clinical tasks\. However, existing approaches predominantly operate at the individual sample level and fail to model the interplay between population\-level cohort patterns and patient\-specific variation that underlie real\-world clinical reasoning\. In practice, clinicians routinely reason through patient cohorts sharing similar demographic, physiological, or pathological characteristics, while accounting for patient\-specific deviations from the group prototype\. Motivated by this gap, we propose CODA, a cohort\- and drift\-aware foundation model for multimodal clinical reasoning\. CODA explicitly integrates cohort structure into the modeling pipeline through two complementary mechanisms: cohort\-aware population stratification and drift\-aware individual adaptation\. In particular, we leverage reinforcement learning to discover clinically meaningful patient cohorts and further model each patient’s deviation from cohort prototypes as a structured drift signal encoding fine\-grained individual heterogeneity\. These cohort\- and drift\-aware representations are incorporated into the foundation model to enable reasoning that is simultaneously informed by population\-level patterns and sensitive to individual\-level variation\. Extensive experiments on real\-world electronic health record \(EHR\) benchmarks demonstrate that CODA achieves consistent effectiveness and strong generalizability across diverse clinical tasks, including closed\-QA, open\-QA, and report generation\.

## RAM\-H1200: A Unified Evaluation and Dataset on Hand Radiographs for Rheumatoid Arthritis

**Authors:** Songxiao Yang; Haolin Wang; Yao Fu; Junmu Peng; Lin Fan; Hongruixuan Chen; JIAN SONG; Masayuki Ikebe; Shinya Takamaeda\-Yamazaki; Masatoshi Okutomi; Tamostu Kamishima; yafei ou

**ID:** 139320 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XXly8RrusQ>) | [PDF](<https://openreview.net/pdf?id=XXly8RrusQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139320>)

_Abstract unavailable from the accessible public sources._

## MID: Mask\-Image Distributional Divergence for Evaluating Medical Image Segmentation

**Authors:** Vincenzo Marcianò; XIAOMING ZHANG; Gianluca Guglielmo; Sebastien Ourselin; Michela Antonelli; Maria A Zuluaga

**ID:** 152974 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oxe8M9Grah>) | [PDF](<https://openreview.net/pdf?id=Oxe8M9Grah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152974>)

_Abstract unavailable from the accessible public sources._

## ECG\-Reasoning\-Benchmark: A Benchmark for Evaluating Clinical Reasoning Capabilities in ECG Interpretation

**Authors:** Jungwoo Oh; Hyunseung Chung; Junhee Lee; Min\-Gyu Kim; Hangyul Yoon; Ki Seong Lee; Youngchae Lee; Muhan Yeo; Edward Choi

**ID:** 139595 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GQObdYuYZB>) | [PDF](<https://openreview.net/pdf?id=GQObdYuYZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139595>)

_Abstract unavailable from the accessible public sources._

## Towards Error\-Free EHRs: Reasoning\-Intensive Consistency Verification Between Clinical Notes and Structured Tables in Electronic Health Records

**Authors:** Yeonsu Kwon; Jiho Kim; Junseong Choi; Paloma Rabaey; Minseo Kim; Sujeong Im; Jeewon Yang; Jun\-Min Lee; Sangji Lee; Jiwon Kim; Hangyul Yoon; Hyunwook Kwon; Edward Choi

**ID:** 139021 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q9O85I1Yqn>) | [PDF](<https://openreview.net/pdf?id=q9O85I1Yqn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139021>)

_Abstract unavailable from the accessible public sources._

## Teaching LLMs to Recommend and Defer in Underrepresented Epilepsy Care

**Authors:** Shreyas Rajesh; Kartik Sharma; Tonmoy Monsoor; Mehmet Yigit Turali; Richard Idro; Juliana Kayaga; Robert Sebunya; Tracy T Namata; Jessica N Pasqua; vwani Roychowdhury; Rajarshi Mazumder

**ID:** 154539 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CqLMStITK3>) | [PDF](<https://openreview.net/pdf?id=CqLMStITK3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154539>)

Specialist epilepsy expertise is scarce in resource\-constrained settings, making LLM\-based decision support attractive for frontline clinicians managing longitudinal treatment\. Such support systems must do more than apply medical knowledge: they must adapt to local prescribing practice and know when to defer\. Public medical AI benchmarks are dominated by high\-income clinical settings, leaving prescribing practices, medication availability, and follow\-up patterns in low\-resource contexts largely unrepresented\. We study this problem through a multidisciplinary collaboration in Ugandan pediatric epilepsy care\. The task is to predict anti\-seizure medication regimens from longitudinal unstructured notes collected by local clinicians across serial visits\. Standard prompting achieves non\-trivial agreement with physician prescriptions, but neurologists' review of model reasoning traces shows that its errors stem from distribution\-miscalibrated prescribing defaults rather than the local care environment\. We introduce Manana, a non\-parametric prompt\-learning framework that learns how to reason about local prescribing decisions from a small patient\-level training set\. Manana turns observed prescription errors into an auditable prompt memory, instantiated in single\-agent and multi\-agent variants, and outperforms classical ML models, direct LLM prompting, and prompt\-optimization baselines across two independently collected Ugandan cohorts\. To make the system uncertainty\-aware, we propose Bayesian prompt averaging \(BPA\), a Bayesian model averaging procedure over the learned prompt trajectory\. This converts a sequence of learned prompts into prescription likelihoods and produces a deferral signal\. On the independently collected held\-out cohort, BPA improves visit\-level top\-3 prescription accuracy by 4\-8 percentage points over the prompt\-optimization baselines\. More consequentially, it enables clinically meaningful selective prediction: the system can auto\-handle the most confident half of cases at 95\\% precision, or the most confident quarter at 99\\% precision, while deferring lower\-confidence cases for specialist review\. These results suggest a path toward locally adapted clinical LLM systems that learn from limited site\-specific data and reserve scarce specialist attention for the cases where uncertainty is highest\.

## Learning from Disagreement: Multi\-Teacher Distillation for Chinese Spelling Correction

**Authors:** Hongcheng Ding; Xuanze Zhao; Ziping Hu; Hongdan Xiao; Kang Xu; Weiyu Zhang

**ID:** 151148 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=celqEfIjq2>) | [PDF](<https://openreview.net/pdf?id=celqEfIjq2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151148>)

Chinese Spelling Correction \(CSC\) is hard precisely because a single misspelling can originate from any of four loosely coupled dimensions \(glyph, phonetic, syntactic, or semantic confusion\), yet existing systems treat the four as a flat fusion target\. Multimodal pre\-training and fixed\-weight gating let evidence from each dimension co\-exist, but never arbitrate: when a phonetic\-plausible candidate contradicts a syntactic\-plausible one, the model averages them, and learning effort is spent uniformly on cases where every dimension already agrees\. Our diagnosis is that the bottleneck is no longer representation but \\emph\{decision\}: the cases where dimensions disagree are exactly the cases worth specializing for, and dimension\-specific teachers expose this disagreement as a usable signal rather than as noise to be smoothed away\. We instantiate this view as SEMTD \(Self\-Evolving Multi\-Teacher Distillation\), a 4B\-parameter student trained from four single\-dimension experts \(glyph / phonetic / syntactic / semantic\) under three coupled objectives: multi\-teacher distillation with input\-dependent expert selection, self\-evolving learning that turns disagreement into a composite reward, and reflective path optimization that replays high\-disagreement decisions\. Across four benchmarks the student reaches Cor\-F1 of $83\.8$ on SIGHAN15, $62\.3$ on LEMON \(7\-domain average\), $98\.2$ on ECSpell \(3\-domain average\), and $73\.0$ on CSCD\-NS, matching or surpassing 14B LLM\-based correctors at $3\.5\{\\times\}$ fewer parameters\. The takeaway is methodological: in CSC, treating teacher disagreement as the supervision target, rather than a residual to be averaged out, reopens headroom that flat fusion has saturated\.

## Explanations over Graphs: An Agent Architecture for IT Enterprise Diagnostic Tasks

**Authors:** Saurabh Jha; Rohan R\. Arora; Bhavya Bhavya; Noah Zheutlin; Paulina Toro Isaza; Laura Shwartz; Yu Deng; Daby Sow; Ruchir Puri

**ID:** 151711 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YcWFCquBYo>) | [PDF](<https://openreview.net/pdf?id=YcWFCquBYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151711>)

LLM agents excel when environments are mostly static and their required information fits in a model’s context window, but they struggle with IT enterprise diagnostic tasks—such as incident management, IT vulnerability analysis, and FinOps anomaly explanation—where operators iteratively mine massive observability data over a curated resource graph to identify the origins that explain observed symptoms, enabling correct remediation\. The data in these domains inherently has hidden dependency structure: entities interact, signals co\-vary, and the importance of a fact may only become clear after other evidence is discovered\. To cope with bounded context windows, agents must summarize intermediate findings before their significance is known, increasing the risk of discarding key evidence\. ReAct\-style agents are especially brittle in this regime\. Their retrieve\-summarize\-reason loop makes conclusions sensitive to exploration order and introduces run\-to\-run non\-determinism, producing a reliability gap where Pass\-at\-k may be high but Majority\-at\-k remains low\. Simply sampling more roll\-outs or generating longer reasoning traces does not reliably stabilize results, since verifying a diagnosis requires remediation actions that carry operational risk\-\-\-demanding consistent correctness, not occasional success\-\-\-and ReAct provides no mechanism for belief revision as evidence accumulates\. In addition, ReAct entangles semantic reasoning with controller duties such as tool orchestration and state tracking; execution errors and plan drift degrade reasoning while consuming scarce context\. We address these issues by formulating the investigation as abductive reasoning over a dependency graph and proposing EoG \(Explanations over Graphs\), a disaggregated framework where an LLM performs bounded local evidence mining and labeling \(cause vs symptom\) while a deterministic controller manages traversal, state, and belief propagation to compute a minimal explanatory frontier\. On representative ITBench diagnostics tasks, EoG improves accuracy and run\-to\-run consistency over ReAct baselines, including a 7x average gain in Majority\-at\-k F1 score\.

## Alignment Is Not Enough for Safe Medical LLM Evaluation

**Authors:** Zhiwen You; Yikun Han; Jana Diesner; Yue Guo

**ID:** 140065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tju86JH3mo>) | [PDF](<https://openreview.net/pdf?id=Tju86JH3mo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140065>)

LLMs\-as\-judges \(LLJs\) are increasingly used to reduce the cost of expert review in medical evaluation\. However, high alignment with clinicians does not by itself establish validity or safety\. This position paper argues that current reporting practices for medical LLJs are insufficient: LLJ\-clinician alignment should not be reported as standalone evidence that a judge is reliable, clinically grounded, or safe for downstream use\. We identify four risks: unstable evaluations across prompts, runs, and judge models; opaque scores that hide clinically meaningful errors; weak validity under clinical uncertainty and limited clinician agreement; and downstream safety or data contamination risks when flawed scores influence model selection or synthetic data filtering\. By re\-examining LLJ evaluation setups used in prior medical studies, we show that judges treated as practical evaluators in the literature can still reject clinically equivalent diagnoses, overrate incomplete or unsafe answers, reward unsupported clinical notes, and penalize appropriate treatment plans\. We propose a protocol for medical LLJ evaluation that requires task\-specific codebooks, expert\-annotated validation sets, codebook\-derived prompts, robustness testing, clinical error analysis, uncertainty reporting, and transparent disclosure before LLJ scores are used for medical benchmarking or decision support\.

## SafeDrug: A Benchmark Dataset for Safety\-Critical Pharmacological Reasoning in LLMs

**Authors:** Tengfei Ma; Yushan Yang; HOU Jiahao; Yujie Chen; Guanghui Ye; Xuanbai Ren; Yiping Liu; Bosheng Song; xiangxiang Zeng

**ID:** 139719 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8ZSkbx5A6D>) | [PDF](<https://openreview.net/pdf?id=8ZSkbx5A6D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139719>)

Large language models \(LLMs\) have shown strong performance on biomedical tasks, yet evaluating their reasoning in safety\-critical pharmacological contexts requires large\-scale, structured datasets\. We present SafeDrug, a benchmark dataset for systematic evaluation of pharmacological reasoning across multiple task dimensions\. SafeDrug integrates heterogeneous sources, including adverse drug event records, drug–drug interaction knowledge, literature\-derived evidence, and population\-specific information such as child, adult, and older adult groups, into a unified reasoning\-oriented QA format\. The benchmark comprises two complementary subsets\. \\textbf\{SafeDrug\-large\} provides broad coverage at scale, while \\textbf\{SafeDrug\-small\} is a high\-quality human\-annotated subset for precise evaluation\. It supports tasks such as prediction, risk assessment, mechanism explanation, evidence\-grounded QA, and drug replacement across both single\-drug and multi\-drug settings\. Our evaluation shows that LLMs capture outcome\-level associations but struggle with mechanistic reasoning, evidence alignment, and population\-aware predictions\. SafeDrug provides a foundation for reproducible benchmarking and advances research on evidence\-grounded and population\-aware pharmacological reasoning in LLMs\.

## DeepArrhythmia: Segment\-Contextualized ECG Arrhythmia Classification via Selective Evidence Acquisition

**Authors:** Jiahui Li; Ruili Fang; Zishuai Liu; WenZhan Song; Jin Lu; Fei Dou

**ID:** 150425 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i8JkJYOjY6>) | [PDF](<https://openreview.net/pdf?id=i8JkJYOjY6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150425>)

Beat\-level Electrocardiography \(ECG\) arrhythmia detection aims to assign an arrhythmia class to each beat in a recording, yet many existing systems treat beats as isolated local instances\. This is limiting because beat labels often depend on multi\-beat rhythm context, including timing, compensatory pauses, and beat\-to\-beat morphological consistency\. We present $\\textbf\{DeepArrhythmia\}$, a tool\-grounded multimodal framework for segment\-contextualized beat\-level ECG arrhythmia classification\. Given a multi\-beat ECG segment, DeepArrhythmia combines the raw ECG signal and a rendered waveform image, localizes R peaks to identify beat instances, and produces structured beat\-level predictions\. The framework decouples physiological measurement from evidence integration using specialized tools for beat localization, numerical rhythm\-\-morphology extraction, and morphology\-focused textual analysis\. DeepArrhythmia uses segment\-level confidence to route between minimal and rich evidence states, since richer physiological evidence is not uniformly useful\. This agentic design integrates rhythm context, explicit physiological grounding, and selective evidence acquisition for decision making\.

## NNCoxKL: Risk\-Set Distillation from Probability\-Free Prognostic Teachers for Deep Cox Models

**Authors:** Lingfeng Luo; Jeremy M Taylor; Di Wang; Feiyang Deng; Yubo Shao; Kevin He

**ID:** 154182 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FaX4fXye5X>) | [PDF](<https://openreview.net/pdf?id=FaX4fXye5X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154182>)

Survival models are often trained at target clinical sites where outcomes are limited and censored, while patient\-level data from external cohorts may be unavailable because of institutional data\-sharing constraints\. In many applications, the  transferable knowledge is not a dataset, a calibrated survival curve, or estimated regression coefficients, but a probability\-free prognostic artifact such as a clinician\-defined scorecard, guideline\-based staging rule, registry\-derived risk index, or coarse clinical risk group\.  These weak teachers may encode human expertise or evidence from prior cohorts, yet they often have only ordinal meaning and need not share a numerical scale with the target model\. We propose NNCoxKL, a transfer\-learning framework that trains a deep Cox model on target time\-to\-event data while distilling such human\- or model\-derived prognostic signals through Cox risk sets\. For each event risk set, NNCoxKL converts both the external signal and the neural Cox risk score into Plackett\-\-Luce distributions and regularizes the Cox partial likelihood through a temperature\-scaled KL alignment term\. This transforms clinical knowledge into a censoring\-aware ranking prior over who is most likely to fail next, rather than treating the external score as a covariate or requiring it to represent calibrated survival probabilities\. The external signal enters only through this risk\-set regularizer, allowing the model to learn nonlinear target\-cohort effects while borrowing relative\-risk information from external clinical knowledge\. Experiments on independent clinical transfer tasks and controlled survival benchmarks show that NNCoxKL improves discrimination and calibration\-sensitive prediction over internal\-only deep Cox models and common score\-transfer baselines\.

## MedExAgent: Training LLM Agents to Ask, Examine, and Diagnose in Noisy Clinical Environments

**Authors:** Yicheng Gao; Xiaolin Zhou; Yahan Li; Yue Zhao; Ruishan Liu

**ID:** 149616 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=olngQeJA7J>) | [PDF](<https://openreview.net/pdf?id=olngQeJA7J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149616>)

Real\-world clinical diagnosis is a complex process in which the doctor is required to obtain information from both interaction with the patient and conducting medical exams\. Additionally, the doctor needs to adapt to different patient personas, as well as noisy and incomplete information that can happen at any time during the process\. However, existing benchmarks for medical LLMs and methods for automatic diagnosis largely simplify this process by reducing it to single\-turn question answering, noise\-free conversations, or sequential exam making, etc\., ignoring the interactive and uncertain nature of clinical diagnosis\. In this paper, we aim to address this gap by formalizing clinical diagnosis as a Partially Observable Markov Decision Process \(POMDP\) with three action types: questioning the patient, ordering medical exams as tool calls, and issuing a diagnosis\. We also introduce a systematic noise model comprising seven patient noise types and three exam noise types\. Using our proposed environment, we train an effective diagnosis agent, \\textbf\{MedExAgent\}, through a two\-stage pipeline that first performs supervised finetuning on synthetic conversations structured after the Calgary\-Cambridge model for clinical interviews, and then applies DAPO to optimize a composite reward capturing diagnostic accuracy, tool call quality, and exam cost including financial cost and patient discomfort\. Through extensive experiments and ablation studies, we demonstrate that MedExAgent achieves diagnostic performance comparable to larger models while maintaining cost\-efficient examination strategies\.

## Gaussian Mixture Models in Hilbert Spaces via Kernel Methods

**Authors:** Daniel López Montero; Antonio Álvarez\-López; Marcos Matabuena

**ID:** 149805 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nE56ZJgIrl>) | [PDF](<https://openreview.net/pdf?id=nE56ZJgIrl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149805>)

Modern datasets across many disciplines increasingly consist of time\-evolving, potentially infinite\-dimensional random objects, such as dynamic functional data, which are naturally modeled in Hilbert spaces\. In these settings, characterizing probability measures, for example, through densities, can be ill\-defined or technically challenging\. Motivated by clustering applications, we propose a Gaussian mixture framework for Hilbert\-space\-valued data based on kernel mean embeddings and develop efficient optimization algorithms for estimation\. We establish theoretical guarantees showing that the proposed algorithm is well defined and that the model yields a dense class of approximations in infinite\-dimensional spaces\. We evaluate the framework through extensive experiments on diverse structures and data geometries, including $L^2$\-functional data and random graphs in Laplacian spaces arising in modern medical applications\.

## Risk Horizons: Structured Hypothesis Spaces for Longitudinal Clinical Prediction

**Authors:** Zhan Qu; Michael Färber

**ID:** 154851 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AQvN9jkmVc>) | [PDF](<https://openreview.net/pdf?id=AQvN9jkmVc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154851>)

_Abstract unavailable from the accessible public sources._

## ProbMedTOD: A Bayesian Network Guided Task\-Oriented Dialogue System for Patient History Taking

**Authors:** Vishal Saley; Bhavesh Gurnani; Dinesh Raghu; Mausam

**ID:** 154360 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E9x9Hty6Qa>) | [PDF](<https://openreview.net/pdf?id=E9x9Hty6Qa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154360>)

_Abstract unavailable from the accessible public sources._

## CLR\-voyance : Reinforcing Open\-Ended Reasoning for Inpatient Clinical Decision Support with Outcome\-Aware Rubrics

**Authors:** Aishik Nagar; Arun\-Kumar Kaliya\-Perumal; Yu\-Hsuan Han; Andrew Sheng\-Han Huang; Kristen Kee; Yushi Cao; Yiming Chen; Hongchao Jiang

**ID:** 150688 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gFCYsqy2Py>) | [PDF](<https://openreview.net/pdf?id=gFCYsqy2Py>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150688>)

_Abstract unavailable from the accessible public sources._

## ER\-Reason: A Benchmark Dataset for LLM Clinical Reasoning in the Emergency Room

**Authors:** Nikita Mehandru; Niloufar Golchini; Namrata Garg; Kathy T LeSaint; Christopher J Nash; Anu Ramachandran; Travis Zack; Liam Greg McCoy; Adam Rodman; David Bamman; Melanie Molina; Ahmed Alaa

**ID:** 138971 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tI6dUEC7KR>) | [PDF](<https://openreview.net/pdf?id=tI6dUEC7KR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138971>)

_Abstract unavailable from the accessible public sources._

## SMI: Semantic Medical ID for Hierarchy\-Aware Concept Representation

**Authors:** Ziyang Song; Lia Shen; Yixuan Li; Qincheng Lu; Weihao Li; Haoran Xu; Mike He Zhu; Xinyu Wang; Yue Li

**ID:** 154857 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AMCfPRZTPu>) | [PDF](<https://openreview.net/pdf?id=AMCfPRZTPu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154857>)

_Abstract unavailable from the accessible public sources._

## Proposing Better Rollouts for On\-Policy Distillation

**Authors:** Sirui Chen; Yunzhe Qi; Haobo Xu; Jiaru Zou; Mengting Ai; Zihao Li; Jingrui He

**ID:** 155190 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7b0JDZvzTQ>) | [PDF](<https://openreview.net/pdf?id=7b0JDZvzTQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155190>)

On\-policy distillation \(OPD\) improves language\-model post\-training by letting the student learn from its own sampled trajectories under teacher supervision, aligning the training process with inference\-time behavior\. However, the rollout policy in OPD is usually treated as fixed: each round samples directly from the current student\. We show that this choice can create a compounding teacher\-student mismatch, because it requires the teacher to provide effective supervision on whichever trajectories the student samples, including ones less reachable by the teacher itself\. On such trajectories, teacher supervision can become noisy or even misleading, leading to undesirable student patterns such as repetition\. Moreover, since the updated student in turn defines the rollout policy of subsequent rounds, these patterns persist and potentially amplify over training\.  This failure mode suggests that improving OPD requires treating the rollout policy itself as an optimization target, rather than only modifying the distillation objective\. We propose \*Mixture Proposal On\-Policy Distillation\* \(MPOPD\), which derives a student\-anchored, teacher\-guided rollout distribution from a local trust\-region objective based on relative teacher support\.  The resulting target is a geometric mixture of the student and teacher policies, and we introduce a proposal policy that approximates this mixture, enabling rollout generation in a single forward pass\.  Experiments on 16 math, knowledge, and medical reasoning benchmarks show consistent gains over OPD and recent variants\. On math reasoning, our method improves average accuracy by 6\.91 over OPD on Qwen3\-4B\-Base while reducing average generation length by 41\\%, suggesting that rollout policy design provides an effective way to improve OPD\.

## CoMMa: Contribution\-Aware Medical Multi\-Agents for Decentralized Oncology Decision Support

**Authors:** Yichen WU; Yujin Oh; Sangjoon Park; Kailong Fan; Yuhan Liu; Zhiyi Shi; Sekeun Kim; Dania Daye; Hana Farzaneh; Wei Liu; Xiang Li; Raul N Uppot; Quanzheng Li

**ID:** 153350 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M1eBc5lFuT>) | [PDF](<https://openreview.net/pdf?id=M1eBc5lFuT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153350>)

Recent multi\-agent frameworks have shown promise for oncology decision support, yet most assume centralized data access and rely on prompt\-based assignment, limiting their applicability in privacy\-sensitive clinical settings\. We propose Contribution\-Aware Medical Multi\-Agents \(CoMMa\), a decentralized LLM\-agent framework where specialists operate on partitioned clinical data streams\. Unlike prior approaches that share inputs across agents, CoMMa enforces data decentralization to include stronger role specialization and further enhances this via agent\-specific finetuning\. To enable reliable and interpretable coordination, we introduce a contribution\-aware aggregation mechanism that replaces stochastic, narrative\-based reasoning with deterministic embedding projections to approximate each agent's marginal utility\. This yields explicit credit assignment over agents, providing a stable and interpretable decision pathway aligned with clinical requirements\. We evaluate CoMMa on multiple oncology benchmarks, including real\-world multidisciplinary tumor board datasets from large academic hospitals in North America and East Asia, as well as public datasets, demonstrating strong performance and generalization across heterogeneous clinical settings\.

## GlucoFM\-Bench: Benchmarking Time\-Series Foundation Models for Blood Glucose Forecasting

**Authors:** Baiying Lu; Zhaohui Liang; Ryan Pontius; Shengpu Tang; Temiloluwa Prioleau

**ID:** 139533\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139533

[Paper](<https://openreview.net/forum?id=KNGzZNVPZk>) | [PDF](<https://openreview.net/pdf?id=KNGzZNVPZk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139533>)

Blood glucose forecasting models are foundational for modern diabetes management systems, as reliable short\-term predictions can enable proactive interventions, support automated insulin delivery, and reduce the risk of hypo\- and hyperglycemic events\. From a modeling perspective, glucose forecasting poses unique challenges due to heterogeneous physiological dynamics across different diabetes populations\. Traditional machine learning and deep learning models have been extensively evaluated for glucose prediction\. However, there is significantly less research on evaluating and benchmarking recent time\-series foundation models \(TSFMs\) for blood glucose forecasting\. To bridge this gap, we present GlucoFM\-Bench, a comprehensive benchmark evaluating state\-of\-the\-art TSFMs alongside supervised deep learning models for blood glucose forecasting\. We assess eight representative architectures, including pre\-trained TSFMs, time\-series large language models, and task\-specific deep learning models, across 15 publicly available diabetes\-relevant datasets comprising 1,117 individuals with type 1 diabetes, type 2 diabetes, prediabetes, and no diabetes\. Models are evaluated under zero\-shot, few\-shot, and full\-shot protocols, with systematic variation in context length and prediction horizon\. Across datasets, pre\-trained TSFMs, especially Chronos\-2 and TimesFM, show strong zero\-shot and few\-shot transfer, with the best zero\-shot model performing within 5% of the best full\-shot supervised model\. Yet, when task\-specific data is abundant, a lightweight LSTM remains strongest, outperforming TSFMs by 4\-21% under full\-shot training\. Stratified analyses reveal persistent challenges in T1D cohorts and hypo\-/hyperglycemic ranges, highlighting the need for evaluation beyond aggregate error metrics\. Together, GlucoFM\-Bench provides a standardized and reproducible foundation for evaluating, comparing, and improving foundation models for blood glucose forecasting\. The dataset and code are publicly available at https://huggingface\.co/datasets/glucofmbench/GlucoFM\-Bench and https://anonymous\.4open\.science/r/GlucoseML\_benchmark\-B50C, respectively\.

## Extending ROC Analysis to Uncertainty\-Aware Risk Prediction with an Interval\-Based AUC \(iAUC\)

**Authors:** Yuqi Li; Matthew Engelhard

**ID:** 150218\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150218

[Paper](<https://openreview.net/forum?id=jsG2UV3YqP>) | [PDF](<https://openreview.net/pdf?id=jsG2UV3YqP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150218>)

In high\-stakes risk prediction, interval\-valued predictions provide a natural way to represent predictive uncertainty\. However, standard evaluation tools such as the receiver operating characteristic \(ROC\) curve and the area under the curve \(AUC\) are designed for point\-valued predictions and do not capture how uncertainty affects discrimination performance\. To address this gap, we develop an uncertainty\-aware ROC framework and corresponding interval\-based AUC \(iAUC\) metrics for evaluating the performance of interval\-valued risk predictions\. The framework constructs two ROC\-style curves with associated areas $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, and shows that these quantities induce a three\-region decomposition of positive\-negative rankings into confidently correct, ambiguous, and confidently incorrect orderings\. Under valid class\-conditional coverage, $\\mathrm\{AUC\}\_L$ and $\\mathrm\{AUC\}\_U$, together with the pairwise miscoverage rate, provide theoretical bounds on the optimal AUC, linking interval coverage to achievable discrimination\. The framework is compatible with a range of methods for quantifying epistemic uncertainty in risk prediction, including Bayesian, bootstrap, and ensemble\-based procedures, and provides a practical way to compare predictive models and interval\-generation methods\. Experiments on clinical benchmark data and MIMIC\-IV mortality prediction show that models with similar point AUC can have different uncertainty\-aware ranking profiles, and that the proposed decomposition can support risk\-aware model selection and threshold\-based abstention\.

## Can AI Agents Synthesize Scientific Conclusions?

**Authors:** Hayoung Jung; Pedro V Diniz; José R Roveda; Abner F da Silva; Haeun Jung; Enoch Tsai; Aleksandra Korolova; Manoel Ribeiro

**ID:** 139077\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139077

[Paper](<https://openreview.net/forum?id=mWOGkdnMZp>) | [PDF](<https://openreview.net/pdf?id=mWOGkdnMZp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139077>)

Scientific AI agents increasingly retrieve evidence, reason across sources, and synthesize conclusions used in consequential decisions\. Yet, their ability to do so in high\-stakes domains such as health remains unclear\. We introduce SciConBench, a large\-scale live benchmark of 9\.11K questions and expert\-written conclusions from systematic reviews to evaluate open\-domain scientific conclusion synthesis\. The benchmark draws on an expert\-validated automated evaluation pipeline that decomposes conclusions into atomic facts and measures correctness and comprehensiveness via factual precision and recall\. To mitigate data leakage, we further introduce SciConHarness, a clean\-room evaluation harness that equips agents with controlled web interaction to ensure valid measurement\. Evaluating 8 frontier models and deep research agents, we find that factual quality remains low: under clean\-room settings, the best agent achieves only a factual F1 of 0\.337\. Our clean\-room setting consistently reduces performance relative to unconstrained evaluation, suggesting that leakage inflates estimates of models' true synthesis capabilities\. Finally, we audit consumer\-facing agents \(e\.g\., Google AI Overview, OpenEvidence\) and find they frequently generate incomplete and sometimes contradictory conclusions, even when the ground\-truth answer is available\. Overall, our results show that reliable synthesis of scientific conclusions remains an open challenge, and that clean\-room evaluation is essential for assessing open\-domain AI agents\.

## Evaluating Synthetic ECG Pretraining: When Can Patient\-Free Simulators Substitute for Real ECG Data?

**Authors:** Naoki Nonaka; Jun Seita

**ID:** 139147\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139147

[Paper](<https://openreview.net/forum?id=iJc0X3nEby>) | [PDF](<https://openreview.net/pdf?id=iJc0X3nEby>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139147>)

ECG, with mature physiological simulators and public benchmarks, is a useful testbed for evaluating what synthetic pretraining supports\. We introduce a reusable framework for ECG representation learning that compares patient\-free physiological simulators, patient\-derived real ECGs, and learned synthetic ECGs from real\-ECG\-trained generators\. Holding the encoder and MAE objective fixed, we study three matched settings\. Transfer\-protocol analysis compares abnormal\-inclusive real ECGs, normal\-only real ECGs, and simulator pretraining under frozen probing and full fine\-tuning on 26 abnormal\-ECG tasks from PTB\-XL, G12EC, and CPSC2018 using a single\-lead\-II pipeline\. Compute\-normalized PTB\-XL scaling tests whether simulator pretraining matches real\-data pretraining under equal processed\-sample budgets\. A fixed 100k\-sample generator\-class comparison evaluates VAE, DCGAN, SSSD\-ECG diffusion variants with and without labels, and two simulators, SimECG\-M and SimECG\-N\. The transfer analysis shows that protocol determines the supported claim: abnormal\-inclusive real ECG pretraining yields more linearly separable pathology features under frozen probing, whereas full fine\-tuning narrows the gap and can reverse it when the simulator corpus is sufficiently scaled\. Under the fixed\-100k protocol, task\-wise F1 averaged over five runs ranks SimECG\-N first on 22/26 tasks; no evaluated learned generator ranks first under this fixed\-100k protocol; and SimECG\-N obtains higher mean F1 than both diffusion variants on all 26 tasks\. These results delineate where abnormal\-inclusive real exposure remains beneficial and where patient\-free physiological simulation can serve as an effective, protocol\-bound substitute under the evaluated single\-lead\-II MAE pretraining and full\-fine\-tuning setting\. We release pretraining corpora, splits, and code to support reproducible evaluation of synthetic ECG pretraining sources\.

## Echo\-SAM: Zero\-Shot Learning of Unseen Structures via Medical Knowledge Graph Grounding

**Authors:** Jiewen Yang; Xiaomeng Li

**ID:** 152656\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152656

[Paper](<https://openreview.net/forum?id=RNvUsEyQua>) | [PDF](<https://openreview.net/pdf?id=RNvUsEyQua>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152656>)

Segmenting unseen anatomical structures in echocardiographic images is challenging because dense annotations are scarce and ultrasound often presents visually similar textures across different cardiac structures\. Current foundation models remain limited in this setting because they treat anatomical knowledge as independent text prompts, overlooking the spatial topology that clinicians use to localize ambiguous structures from their visible neighbors\. We propose Echo\-SAM, a zero\-shot ultrasound segmentation framework that grounds a structured cardiac knowledge graph in visual space through relation\-conditioned geometric support inference\. Echo\-SAM localizes seen structures as anatomical anchors, propagates relational constraints through a knowledge\-grounded Graph Neural Network, and enhances text prompts with image\-grounded anatomical context\. We further introduce a topology\-to\-geometry mapping that converts graph relations into geometry\-aware support proposal scores, yielding posterior\-guided support estimates for unseen structures\. By treating relation\-specific scale, thickness, and offset as latent geometric variables, Echo\-SAM adapts graph\-derived support proposals to image\-specific anchors without relying on fixed coordinate templates\. Extensive evaluations on zero\-shot echocardiography segmentation benchmarks demonstrate that Echo\-SAM substantially outperforms state\-of\-the\-art foundation models, achieving up to 50\.42\\% absolute improvement in Dice score\. Code will be publicly available\.

## Rethinking Contrastive Targets in Radiology Language\-Image Pretraining

**Authors:** Yunhe Gao; Ashwin Kumar; Jiaming Liu; Chong Wang; Maya Varma; Fuying Wang; Stefania L Moroianu; Louisa Fay; Sergios Gatidis; Akshay Chaudhari; Curtis Langlotz

**ID:** 148888\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148888

[Paper](<https://openreview.net/forum?id=uRbyMugqG7>) | [PDF](<https://openreview.net/pdf?id=uRbyMugqG7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148888>)

CLIP\-style contrastive image\-\-text pretraining is widely used in radiology data, where each image is paired with one report and every other report in the batch is treated as a negative\. Under this recipe, two failures appear, neither systematically addressed by existing contrastive learning theory: zero\-shot evaluation peaks then degrades while training loss keeps decreasing, and training fails to learn at all at large batches\. We hypothesize the cause is structural rather than radiology\-specific: many unpaired reports share clinical findings with a given image, so CLIP's paired\-identity target is systematically biased, not merely noisy\. To test this, we construct CLEVR\-Radiology, a synthetic testbed that preserves only this overlapping\-fact structure and reproduces both failures\. With evidence that the structure is sufficient to reproduce the failures, we develop a target\-misspecification theory that derives both failures from a single deterministic gradient bias amplified by batch size, and use it to motivate a minimal compatibility\-based correction, CorLIP: a text is treated as positive whenever its clinical assertions agree with the image, with no other change to the training pipeline\. Beyond benchmark improvements, CorLIP removes the post\-peak degradation, makes large\-batch training succeed where it previously collapsed, substantially amplifies the gains from more data, and is the only configuration that remains stable up to B=2048\. The correction also transfers from chest X\-ray to 3D CT modalities\.

## REAL\-MED: Benchmarking LLM Agents on Real\-World Medical Tasks

**Authors:** Zihan Wang; yifan zhang; Jieqiong Cao; Junxiu Chen; Shanni Chen; ChaoGao; Hao Wang; Shi Feng; Xiaocui Yang; Jinghao Lin; Kai WU; Xiaozhong Ji; Haihua Yang

**ID:** 139773\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139773

[Paper](<https://openreview.net/forum?id=5cVNXIDXfi>) | [PDF](<https://openreview.net/pdf?id=5cVNXIDXfi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139773>)

Real\-world medical work extends far beyond answering isolated clinical questions: it often requires clinicians to process complex materials, interact with information systems, and produce structured deliverables\.  As AI systems evolve from medical chatbots into medical agents, evaluation should likewise move beyond \\emph\{answer correctness\} toward the \\emph\{quality of end\-to\-end workflow deliverables\}\.   We introduce \\textsc\{Real\-Med\}, a benchmark for evaluating AI agents on real\-world medical tasks\.  \\textsc\{Real\-Med\} contains 405 expert\-designed tasks across four categories: Clinical Support, Patient Management, Pharmacy Management, and Medical Education \\&amp; Research\.  Each task is grounded in a realistic scenario with concrete materials, tool interfaces, and explicit deliverable requirements, such as clinical documents, medication plans, spreadsheets and review reports\.  To support rigorous evaluation, each task is annotated with fine\-grained expert\-written rubrics, averaging 15\.4 independent rubric items per task, and every task is cross\-validated by at least three medical experts\.  We evaluate 11 strong mainstream models under a unified harness with the same resources, tools, and execution protocol\.  Our results show that current agents can often satisfy surface\-level task requirements, but still struggle with detail\-sensitive medical reasoning, dosage\-calculation traps, shallow research, formatting constraints, and reliable final delivery\.  These findings reveal a substantial gap between medical QA ability and robust execution in realistic medical workflows\. Code is available at \\url\{https://anonymous\.4open\.science/r/REAL\-MED\}\.

## Does Cross\-Panel Pretraining Transfer Under Marker Heterogeneity? A Large\-Scale Empirical Study in Clinical Flow Cytometry

**Authors:** Zixin \(Zora\) Zhuang; Benjamin Mashford; Dan Andrews

**ID:** 153804\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153804

[Paper](<https://openreview.net/forum?id=IZxWllh1po>) | [PDF](<https://openreview.net/pdf?id=IZxWllh1po>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153804>)

Flow cytometry is the primary assay for single\-cell immune profiling, yet cross\-study modelling remains under\-explored\. The challenge is two\-fold: Studies measure different marker panels, inducing feature\-space inconsistency, while batch effects shift signals even on shared markers, making transfer harder than in vision or language where input spaces are stable\. We conduct a large\-scale empirical study, pretraining an encoder on 89,324 samples from 112 public studies spanning 525 distinct marker panels\. We evaluate it frozen \-\-\- isolating representation quality from task\-specific adaptation, on five clinical tasks under a taxonomy of panel\-overlap conditions, including three panel\-zero\-shot tasks whose marker panels were unseen during pretraining, and one negative control with no expected discriminative signal\. We further characterise transfer across scaling axes and probe robustness to marker removal at test time\. Despite heterogeneity that disrupts direct transfer, the frozen encoder matches or exceeds in\-distribution specialist encoders on 4 of 5 tasks, including all three novel\-panel tasks, and behaves as expected on the negative control\. Scaling analyses reveal saturation in both encoder capacity and random corpus subsampling, and representations degrade gracefully under marker reduction\. These results suggest a pretrained encoder can serve as a general\-purpose feature extractor for clinical cytometry data, without task\-specific retraining\.

## MedVTok: A General\-Purpose Medical Visual Tokenizer

**Authors:** Chenglong Ma; Yuanfeng Ji; Junzhi Ning; Jiyao Liu; Yujie Wei; Shaohao Rui; Chaoyang Zhang; Wenjie Li; Wenhao Tang; Cheng Tang; Wei Li; Shujian Gao; Yujie Zhang; Ying Chen; Zilong Li; Zongyuan Ge; Diping Song; Jin Ye; Ming Hu; Junjun He; Hongming Shan

**ID:** 152136\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152136

[Paper](<https://openreview.net/forum?id=VGTDLvJS3w>) | [PDF](<https://openreview.net/pdf?id=VGTDLvJS3w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152136>)

Multimodal medical AI requires a common visual interface that integrates heterogeneous imaging evidence for patient condition modeling\. However, existing medical visual tokenizers are often tied to a specific dimension and imaging modality, forcing multimodal systems to rely on fragmented and poorly reusable representations\. We introduce MedVTok, a general\-purpose visual tokenizer that maps 2D images and 3D volumes from diverse imaging modalities into a unified token space\. Building such a tokenizer poses two key challenges: preserving anatomical structure across dimensions and capturing clinical semantics across modalities\. To this end, MedVTok introduces \(i\) slice differential regularization, which explicitly models inter\-slice anatomical coherence missing in previous per\-pixel/per\-voxel supervision, and \(ii\) multi\-expert representation alignment, which integrates knowledge from multiple medical expert encoders while retaining modality\-specific complementary knowledge\. Trained on 28M images and 70K volumes across 9 imaging modalities, MedVTok supports classification, retrieval, segmentation, synthesis, visual question answering, and medical report generation through a single tokenizer\. Across 24 benchmarks, MedVTok achieves state\-of\-the\-art performance, demonstrating a scalable token interface that unifies medical image dimension, modality, and task usage\. Code and weights will be released\.

## VecDBLens: A Modular Framework for Diagnosing Vector Databases  Retrieval Pipelines

**Authors:** Yutong Zhou; Guoxin Kang; Wenxin Zhou; Haoyu He; Yuedong Zhu; Lei Wang; Wanling Gao; Fanda Fan; Jianfeng Zhan

**ID:** 139354 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UtVlO4agwp>) | [PDF](<https://openreview.net/pdf?id=UtVlO4agwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139354>)

Vector databases are increasingly deployed as retrieval pipelines in which representation, indexing, and query\-time execution jointly determine accuracy, throughput, and cost\. Existing vector database evaluations primarily focus on indexing while treating embeddings as fixed inputs and ignoring the role of query\-time execution, making it difficult to decide whether a bottleneck should be addressed by changing the embedding model, the index, or the query\-processing stages\. To address the above limitation, we introduce \\textbf\{VecDBLens\}, a modular attribution framework that treats the component under diagnosis as an \\emph\{evaluated object\} and all remaining dataset, workload, parameter, and runtime factors as matched \\emph\{evaluation conditions\}\. VecDBLens reports stratified marginal effects, paired matched\-condition differences, Flat\-relative retention, and monotonicity audits, thereby turning vector database benchmarking from leaderboard ranking into a reproducible diagnostic procedure\. VecDBLens reveals two key insights\. First, retrieval performance is fundamentally upper\-bounded by embedding quality, revealing that many apparent indexing failures are therefore representation\-side limitations\. Second, stronger index parameterization is not always beneficial: overly aggressive configurations can reshape neighborhood topology and cause recall regression\. These results challenge the common practice of evaluating vector databases primarily through indexing and show that real\-world limitations emerge from stage\-wise constraints rather than any single module alone\. VecDBLens provides a principled basis for identifying the true performance drivers of vector databases and for guiding their design in practical applications\. The code is available at \\url\{https://anonymous\.4open\.science/r/VecDBLens\-83A4\}\.

## Can Bits Seal Language?

**Authors:** Jia Xu

**ID:** 153783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgPTYfH7nv>) | [PDF](<https://openreview.net/pdf?id=IgPTYfH7nv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153783>)

We present an encoding method that maps each input token to a randomized  sequence of binary values \(0s and 1s\)\. By operating at the finest representational  granularity and applying compression, this approach reduces the effective  vocabulary to just two symbols, yielding a compact, task\-agnostic representation\.  Across eleven main tasks spanning six modalities \(human text, genetic/clinical  data, programming code, system logs, biological signals, and tabular medical data\),  it achieves up to two orders of magnitude stronger privacy guarantees under six  gradient\-based attack settings compared to seven encoder baselines and four  defense baselines, including up to 549× improvement on FILM and 62× on TAG\. At  the same time, it reduces embedding model size by up to 98%, while maintaining  competitive accuracy and computational efficiency\. It also improves multilingual  generalization, achieving up to a 4× increase in accuracy in low\-resource settings\.

## MedMemoryBench: Benchmarking Agent Memory in Personalized Healthcare

**Authors:** Yihao Wang; Haoran Xu; Renjie Gu; Yixuan Ye; Xinyi Chen; Xinyu Mu; Yuan Gao; guo chunxiao; Peng Wei; Jinjie GU; Huan Li; Ke Chen; Lidan Shou

**ID:** 139145\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139145

[Paper](<https://openreview.net/forum?id=iL37bwRpOg>) | [PDF](<https://openreview.net/pdf?id=iL37bwRpOg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139145>)

The large\-scale deployment of personalized healthcare agents demands memory mechanisms that are exceptionally precise, safe, and capable of long\-term clinical tracking\. However, existing benchmarks primarily focus on daily open\-domain conversations, failing to capture the high\-stakes complexity of real\-world medical applications\. Motivated by the stringent production requirements of an industry\-leading health management agent serving tens of millions of active users, we introduce \*\*MedMemoryBench\*\*\. We develop a human\-agent collaborative pipeline to synthesize highly realistic, long\-horizon medical trajectories based on clinically grounded, synthetic patient archetypes\. This process yields a massive, expertly validated dataset comprising approximately 2,000 sessions and 16,000 interaction turns\. Crucially, MedMemoryBench departs from traditional static evaluations by pioneering an \*evaluate\-while\-constructing\* streaming assessment protocol, which precisely mirrors dynamic memory accumulation in production environments\. Furthermore, we formalize and systematically investigate the critical phenomenon of memory saturation, where sustained information influx actively degrades retrieval and reasoning robustness\. Comprehensive benchmarking reveals severe bottlenecks in mainstream architectures, particularly concerning complex medical reasoning and noise resilience\. By exposing these fundamental flaws, MedMemoryBench establishes a vital foundation for developing robust, production\-ready medical agents\. Our dataset and benchmark are publicly available at: \.

## pyCD: A Unified Benchmark for Reliable Evaluation of Cognitive Diagnosis Models

**Authors:** Youheng Bai; Xueyi Li; Tengteng Cheng; Mingliang Hou; Teng Guo; Jiaqi Zheng; Zitao Liu

**ID:** 139115\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139115

[Paper](<https://openreview.net/forum?id=kGok2e0ST7>) | [PDF](<https://openreview.net/pdf?id=kGok2e0ST7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139115>)

_Abstract unavailable from the accessible public sources._

## MathCD: A Benchmark Dataset for Cognitive Diagnosis with Semantic Information

**Authors:** Xueyi Li; Youheng Bai; Tengteng Cheng; Mingliang Hou; Teng Guo; Jiaqi Zheng; Yongdong WU; Zitao Liu

**ID:** 139318\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139318

[Paper](<https://openreview.net/forum?id=XhTjbnmlac>) | [PDF](<https://openreview.net/pdf?id=XhTjbnmlac>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139318>)

_Abstract unavailable from the accessible public sources._

## Prototype\-Aligned Multi\-View Graph Learning for EHR Prediction

**Authors:** Jong\-Hoon Park; Young\-Rae Cho

**ID:** 148619\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148619

[Paper](<https://openreview.net/forum?id=wOyvN1QBWX>) | [PDF](<https://openreview.net/pdf?id=wOyvN1QBWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148619>)

Electronic health records \(EHRs\) are a valuable resource for clinical prediction because they capture rich longitudinal information about patient care\. Existing graph\-based EHR models often learn relations at the cohort level, but do not clearly distinguish between global event associations and the subset of interactions actually instantiated within an individual visit\. To address this limitation, we propose MVP\-EHR, a multi\-view prototype learning framework for EHR prediction with shared type\-aware prototype alignment\. MVP\-EHR combines three key ideas: \(i\) a lift\-thresholded global knowledge graph that captures cohort\-level event associations, \(ii\) a visit\-induced local knowledge graph that preserves only the observed events and supported event\-event relations within each visit, and \(iii\) shared type\-aware prototypes that align local and global event representations before post\-event multi\-view fusion and temporal prediction\. Experiments on MIMIC\-IV show that MVP\-EHR achieves strong and consistent performance across multiple clinical prediction tasks, including 0\.9339 AUROC and 0\.1706 AUPRC for mortality prediction, the best AUROC on readmission prediction, the best overall performance on phenotype prediction, and a strong AUPRC/F1 tradeoff on drug recommendation among the compared baselines\. Ablation results further show that separating global prior from visit\-instantiated evidence, together with shared prototype alignment, is critical for robust performance\.

## Symb\-xMIL: Symbolic Explanations for Multiple Instance Learning in Digital Pathology

**Authors:** Yanqing Luo; Julius Hense; Niklas Prenißl; Andreas Mock; Klaus\-Robert Müller; Thomas Schnake; Mina Jamshidi Idaji

**ID:** 152976\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152976

[Paper](<https://openreview.net/forum?id=OwuMiUXJ26>) | [PDF](<https://openreview.net/pdf?id=OwuMiUXJ26>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152976>)

Explanations of multiple instance learning \(MIL\) models are widely used for validation and discovery in digital histopathology\. Existing methods primarily rely on heatmaps that highlight influential regions but do not explain how evidence from different tissue regions is combined to produce a prediction\. This limits interpretability, especially when decisions depend on interactions between tissue features\. We introduce Symbolic explainable MIL \(Symb\-xMIL\), a post\-hoc explanation framework that quantifies how a MIL model’s behavior aligns with human\-readable decision rules, expressed as logical relationships \(e\.g\., AND, OR, NOT\) between input features\. These alignment scores reveal semantic patterns underlying the model’s predictions\. We evaluate Symb\-xMIL on synthetic and real\-world histopathology datasets\. On synthetic MIL data, Symb\-xMIL reliably recovers ground\-truth logical rules\. In a clinical tumor detection task, the best\-aligned rules uncover heterogeneous decision patterns and expose hidden model errors\. On an HPV\-prediction task on TCGA\-HNSCC, a cohort of head and neck cancer, our framework refines patient survival stratification beyond HPV status with potential clinical relevance\. Overall, Symb\-xMIL extends MIL explainability beyond visual attribution toward structured, rule\-based reasoning, enabling more transparent and semantically grounded interpretation of model predictions\.

## NPCBench: A Clinical Apprenticeship Benchmark for Guideline\-Constrained Care\-Pathway Reasoning in Nasopharyngeal Carcinoma

**Authors:** Pengkai Wang; Wei\-Wei Zhang; Yan Li; Min Tang; Zhitian Hou; Zeyu Liu; Guanghao Zhu; Yuanyi Wang; Yanggan Gu; Wenjun Wang; Minheng Ni; Congkai Xie; Zhijie Sang; Jianmin Wu; Ying Sun; Hongxia Yang

**ID:** 139689\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139689

[Paper](<https://openreview.net/forum?id=AVTJEREEah>) | [PDF](<https://openreview.net/pdf?id=AVTJEREEah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139689>)

Current medical LLM benchmarks typically decompose clinical competence into isolated factual questions, single\-image interpretation, or brief case scenarios\.  This fragmented paradigm primarily measures local correctness but provides limited insight into whether models can progressively integrate subspecialty knowledge, multimodal evidence, and evolving patient states into safe, guideline\-constrained longitudinal reasoning\. To address this gap, we introduce NPCBench, a multimodal clinical apprenticeship benchmark for nasopharyngeal carcinoma \(NPC\)\.  NPCBench operationalizes specialist training as a staged evaluation of \(M\)LLMs across guideline recall, atomic rule application, multimodal evidence grounding, longitudinal care planning, state revision, and expert\-style consultation\.  It comprises 4,077 staged evaluation problems and 25 multimodal full\-care path episodes, covering pathology diagnosis, MRI staging, and 146 downstream clinical decisions\. The benchmark explicitly links stepwise tasks to complete patient\-level care trajectories, enabling systematic evaluation of all clinical pathways\. Beyond isolated precision, NPCBench evaluates whether the models ground decisions in multimodal evidence, maintain temporally consistent patient states, and provide safe expert\-level consultation across complete care trajectories\. Across 30 evaluated models, we observe a persistent composition gap: strong performance in local case\-level tasks does not translate into episode\-level clinical competence required for end\-to\-end patient management\. Overall, NPCBench advances medical AI evaluation from static question answering toward apprenticeship\-style workflow evaluation, providing a rigorous testbed for evidence\-grounded and temporally coherent reasoning in complex oncology care\.

## UniPro: Unified Multi\-Mode Medical Image Segmentation from 2D Images to 3D Volumes via Propagation

**Authors:** Bangwei Guo; Yunhe Gao; Meng Ye; Yang Zhou; Difei Gu; Guoning Zhang; Leon Axel; Dimitris Metaxas

**ID:** 154671\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154671

[Paper](<https://openreview.net/forum?id=BtMBnJkdbp>) | [PDF](<https://openreview.net/pdf?id=BtMBnJkdbp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154671>)

Medical image segmentation remains fragmented along two axes: segmentation paradigms and data dimensionality\. Existing methods are typically developed separately for semantic, in\-context, and interactive segmentation, and are further specialized to either native 2D images or 3D volumetric data\. In clinical practice, however, segmentation workflows take many forms: a case may be initialized by semantic prediction, reference\-guided segmentation, or user interaction\. Regardless of how it begins, fine\-grained refinement is naturally performed on 2D views; for volumetric scans, such 2D edits must propagate coherently to the rest of the volume\. We present \*\*UniPro\*\*, a \*\*uni\*\*fied model that bridges segmentation paradigms and data dimensionality, using \*\*pro\*\*pagation to extend 2D segmentation to 3D volumes\. Our key insight is that volumetric propagation and in\-context segmentation share the same reference\-conditioned prediction mechanism, differing only in whether the reference image–mask pairs come from other cases or from previously segmented neighboring slices\. Building on this view, UniPro supports semantic, in\-context, interactive, and propagation\-based segmentation within a single slice\-based framework, using class priors, reference exemplars, user clicks, and neighboring\-slice predictions as mode\-specific conditioning inputs\. To improve propagation reliability, UniPro further incorporates bidirectional and 3D supervision to regularize slice\-wise propagation beyond per\-slice losses\. Extensive experiments across diverse modalities and anatomies show that UniPro achieves strong performance across all segmentation settings, enabling annotation\-efficient 3D segmentation from sparse 2D initialization and reducing slice\-by\-slice correction effort\.

## Multi\-site PPG: An In\-the\-Wild Physiological Dataset from Emerging Multi\-Site Wearables

**Authors:** Jiayi Shao; Jiaying Ye; ShengYao Liu; Zachary Englhardt; Girish Narayanswamy; Vikram Iyer; Qiuyue \(Shirley\) Xue

**ID:** 139177\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139177

[Paper](<https://openreview.net/forum?id=gKLv4ForGw>) | [PDF](<https://openreview.net/pdf?id=gKLv4ForGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139177>)

Wearables are widely used for mobile health monitoring, and photoplethysmography \(PPG\) is a key sensing modality for heart rate and related physiological measurements\. However, public in\-the\-wild PPG datasets remain largely wrist\-centric or limited to short, controlled studies, constraining research on emerging wearable form factors\. We present Multi\-site PPG, an in\-the\-wild physiological dataset collected from four custom\-developed unobtrusive wearables: a smart earring, ring, watch, and necklace\. Each device records green and infrared reflective PPG, 3\-axis acceleration, and temperature with timestamps for cross\-device alignment, while a Polar H10 chest strap provides reference electrocardiogram \(ECG\)\. Participants wore the devices for one to multiple days during daytime activities while continuing their normal routines\. The dataset contains over 350 hours of raw data and 230–290 hours of preprocessed, modeling\-ready 8\-second windows data per wearable\. We benchmark heuristic, supervised, and self\-supervised heart\-rate estimation methods, showing substantial body\-site differences: the best methods achieve mean absolute errors \(MAEs\) of 2\.30 bpm on the earring, 5\.13 bpm on the ring, 8\.37 bpm on the watch, and 8\.68 bpm on the necklace\. We further analyze motion effects and evaluate multi\-site and PPG–accelerometer fusion, demonstrating the dataset’s value for robust physiological sensing across emerging wearable form factors\.

## Reporting Practice Matters: The Impact of Reference Choice on Chest X\-ray Report Evaluation

**Authors:** Daniel P Jeong; Charles Q Li; Hossein Hosseiny; Nitya M Bhalla; Fatma U Morency; Pradeep Ravikumar; Zachary Lipton; Michael Oberst

**ID:** 138929\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138929

[Paper](<https://openreview.net/forum?id=vocvkC0AxO>) | [PDF](<https://openreview.net/pdf?id=vocvkC0AxO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138929>)

Radiologists follow heterogeneous reporting practices\. Two radiologists examining the same image and identifying the same clinical findings might nevertheless compose superficially distinct reports, varying in terminology, shorthand, formatting, and level of detail\. These variations in reporting norms represent an under\-appreciated obstacle in efforts to evaluate AI\-based radiology report generation \(RRG\) models, where machine\-generated reports are typically assessed based on their concordance with human\-generated references\. In this paper, we quantify the sensitivity of established evaluation metrics to variations in reporting practices, revealing impacts significant enough to alter the rankings of models\. We introduce a radiologist\-informed taxonomy of variations in radiology reporting practice and a method \(ReRef\) that rewrites reference reports along the axes of our taxonomy while preserving clinical interpretation\. For instance, when comparing the performance of nine RRG models on MIMIC\-CXR using the GREEN metric, condensing the discussion of normal findings in the reference reports causes Libra to drop from first place to third while CheXOne rises from third to first\. Our results suggest that current metrics may fail to decouple clinical interpretation from conformity to reporting practices and that choosing the "right" references that accurately reflect the desired reporting practices can be important in practice\. To support future research, we release MIMIC\-CXR\-Ext\-ReRef, a radiologist\-validated dataset of 120 \(original, alternative\) reference report pairs derived from MIMIC\-CXR\.

## Risk\-Controlled Post\-Processing of Decision Policies

**Authors:** Sunay Joshi; Tao Wang; Hamed Hassani; Edgar Dobriban

**ID:** 154732\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154732

[Paper](<https://openreview.net/forum?id=BRnQhDXD2y>) | [PDF](<https://openreview.net/pdf?id=BRnQhDXD2y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154732>)

Predictive models are often deployed through existing decision policies that stakeholders are reluctant to change unless a risk constraint requires intervention\. We study risk\-controlled post\-processing: given a deterministic baseline policy, choose a new policy that maximizes agreement with the baseline subject to a chance constraint on a user\-specified loss\. At the population level, we show that the optimal policy has a threshold structure: it follows the baseline except on contexts where switching to the oracle fallback policy yields a large reduction in conditional violation risk\. At the finite\-sample level, given a fitted fallback policy and score, we develop a post\-processing algorithm that uses calibration data to select a threshold\. Leveraging tools from algorithmic stability and stochastic processes, we show that under regularity conditions, in the i\.i\.d\. setting, the expected excess risk of the post\-processed policy is $O\(\\log n/n\)$\. In the special case when an exact\-safe fallback policy is available, the algorithm achieves precise expected risk control under exchangeability\. In this setting, we also give high\-probability near\-optimality guarantees on the post\-processed policy\. Experiments on a COVID\-19 radiograph diagnosis task, an LLM routing problem, and a synthetic multiclass decision task show that targeted post\-processing can meet or nearly meet risk budgets while preserving substantially more agreement with the baseline than score\-blind random mixing\.

## NicheIB: Targeted Spatial Bottlenecks for Predictive Microenvironment Discovery

**Authors:** Chenxi He

**ID:** 153405\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153405

[Paper](<https://openreview.net/forum?id=LaZNrmtjRL>) | [PDF](<https://openreview.net/pdf?id=LaZNrmtjRL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153405>)

Spatial transcriptomics methods typically cluster spots into coherent tissue domains, but many biological questions are target\-specific: which spatial context predicts a particular cell state, gene program, or clinical phenotype? We propose NicheIB, a Targeted Spatial Bottleneck \(TSB\) that learns which spatial edges matter for a user\-specified target via input\-dependent Hard Concrete edge gates with controllable sparsity budgets\. Training the same model on the same tissue with different targets—cortical\-layer annotations, oligodendrocyte gene programs, excitatory neuron markers—produces distinct edge retention patterns whose correlation mirrors the biological similarity of the targets, confirmed across human cortex, mouse brain, and cancer tissues\. The bottleneck also reveals which programs are spatially structured at a given resolution and which are not, serving as a diagnostic tool for spatial biology\. On mouse brain region prediction, TSB retains only 20% of spatial edges while approaching the full\-graph baseline \($F\_1 = 0\.915$ vs\. $0\.926$\), identifying a minimal informative subgraph from a mostly redundant spatial graph\. External validation confirms that the retained subgraph selectively enhances spatial autocorrelation for target\-relevant genes and is enriched for known ligand–receptor pairs, independently of the model\.

## Survival Transformers for Longitudinal Data Analysis: Application to Atrial Fibrillation Risk from ECG

**Authors:** Rafael Silva; Maxime Sermesant

**ID:** 152404 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TLQWdilXme>) | [PDF](<https://openreview.net/pdf?id=TLQWdilXme>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152404>)

Atrial fibrillation \(AFib\) is the most common sustained cardiac arrhythmia and a major risk factor for stroke, yet it often remains undetected until a first clinical event\. Existing deep learning approaches typically estimate AFib risk from a single, cross\-sectional ECG, discarding the longitudinal information contained in serial recordings\. We propose a transformer\-based survival model, SurviFormer, that leverages sequences of ECG representations to model patient\-specific AFib risk over time\. Our approach encodes irregular inter\-visit time gaps as pairwise relative attention biases within a causally masked transformer, and outputs a discrete hazard function trained with a multi\-landmark strategy\. We train and evaluate our model on the CODE dataset \(140k patients, 517k ECGs\), with external validation on MIMIC\-IV\. Compared to static baselines \(DeepSurv and DeepHit applied to ResNet\-50 embeddings\) and a dynamic competing\-risk model \(DynamicDeepHit\), our model achieves a C\-index of 0\.853, a mean TD\-AUC of 0\.867, and an IBS of 0\.030 on the internal test set, and a C\-index of 0\.805, a mean TD\-AUC of 0\.848, and an IBS of 0\.106 on the external cohort, demonstrating that longitudinal ECG trajectories provide prognostic value beyond a single recording\.

## GauGal: Gaussian\-Galerkin Electromagnetic Inverse Scattering Imaging

**Authors:** Haibing Wu; Yixiong Jing; Guangming Wang; Olaf Wysocki; Brian Sheil

**ID:** 155117 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8HQ2ZpGXfE>) | [PDF](<https://openreview.net/pdf?id=8HQ2ZpGXfE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155117>)

Electromagnetic inverse scattering \(EIS\), which aims to recover object permittivity from measured scattered fields, is central to a wide range of applications, from medical diagnostics to security screening\. However, it is a highly nonlinear and ill\-posed problem\.  Despite substantial progress, existing approaches face a fundamental trade\-off between physical fidelity, efficiency, and generalization: data\-driven methods are fast but tied to training geometries and sensor setups, while physics\-based optimization is accurate but computationally expensive\. We introduce a Gaussian\-Galerkin \(GauGal\) method that reformulates EIS from a dense point\-wise field reconstruction to a compact, primitive\-level physical solving\. Rather than using Gaussian primitive merely as a material representation, GauGal take it as the computational units for wave scattering\. By projecting the continuous EIS scattering equation into a Gaussian primitive space, the material modulation, Green propagation, source excitation, and receiver observation are all realized as primitive\-level operators\. This yields a compact differentiable forward solver for physics\-consistent reconstruction\. Our method achieves state\-of\-the\-art accuracy on synthetic and real benchmarks while reducing runtime from over 30 minutes by leading physics\-driven baselines to under 10 seconds\. It also generalizes significantly better to unseen geometries and sensor configurations than leading data\-driven baselines\.  Overall, this framework establishes an accurate, efficient, and generalizable paradigm for electromagnetic inverse imaging, enabling fast, physics\-consistent imaging in practical settings\.

## RAM\-H1200: A Unified Evaluation and Dataset on Hand Radiographs for Rheumatoid Arthritis

**Authors:** Songxiao Yang; Haolin Wang; Yao Fu; Junmu Peng; Lin Fan; Hongruixuan Chen; JIAN SONG; Masayuki Ikebe; Shinya Takamaeda\-Yamazaki; Masatoshi Okutomi; Tamostu Kamishima; yafei ou

**ID:** 139320\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139320

[Paper](<https://openreview.net/forum?id=XXly8RrusQ>) | [PDF](<https://openreview.net/pdf?id=XXly8RrusQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139320>)

_Abstract unavailable from the accessible public sources._

## MID: Mask\-Image Distributional Divergence for Evaluating Medical Image Segmentation

**Authors:** Vincenzo Marcianò; XIAOMING ZHANG; Gianluca Guglielmo; Sebastien Ourselin; Michela Antonelli; Maria A Zuluaga

**ID:** 152974\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152974

[Paper](<https://openreview.net/forum?id=Oxe8M9Grah>) | [PDF](<https://openreview.net/pdf?id=Oxe8M9Grah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152974>)

_Abstract unavailable from the accessible public sources._

## ECG\-Reasoning\-Benchmark: A Benchmark for Evaluating Clinical Reasoning Capabilities in ECG Interpretation

**Authors:** Jungwoo Oh; Hyunseung Chung; Junhee Lee; Min\-Gyu Kim; Hangyul Yoon; Ki Seong Lee; Youngchae Lee; Muhan Yeo; Edward Choi

**ID:** 139595\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139595

[Paper](<https://openreview.net/forum?id=GQObdYuYZB>) | [PDF](<https://openreview.net/pdf?id=GQObdYuYZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139595>)

_Abstract unavailable from the accessible public sources._

## Towards Error\-Free EHRs: Reasoning\-Intensive Consistency Verification Between Clinical Notes and Structured Tables in Electronic Health Records

**Authors:** Yeonsu Kwon; Jiho Kim; Junseong Choi; Paloma Rabaey; Minseo Kim; Sujeong Im; Jeewon Yang; Jun\-Min Lee; Sangji Lee; Jiwon Kim; Hangyul Yoon; Hyunwook Kwon; Edward Choi

**ID:** 139021\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139021

[Paper](<https://openreview.net/forum?id=q9O85I1Yqn>) | [PDF](<https://openreview.net/pdf?id=q9O85I1Yqn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139021>)

_Abstract unavailable from the accessible public sources._

## Proposing Better Rollouts for On\-Policy Distillation

**Authors:** Sirui Chen; Yunzhe Qi; Haobo Xu; Jiaru Zou; Mengting Ai; Zihao Li; Jingrui He

**ID:** 155190\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155190

[Paper](<https://openreview.net/forum?id=7b0JDZvzTQ>) | [PDF](<https://openreview.net/pdf?id=7b0JDZvzTQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155190>)

On\-policy distillation \(OPD\) improves language\-model post\-training by letting the student learn from its own sampled trajectories under teacher supervision, aligning the training process with inference\-time behavior\. However, the rollout policy in OPD is usually treated as fixed: each round samples directly from the current student\. We show that this choice can create a compounding teacher\-student mismatch, because it requires the teacher to provide effective supervision on whichever trajectories the student samples, including ones less reachable by the teacher itself\. On such trajectories, teacher supervision can become noisy or even misleading, leading to undesirable student patterns such as repetition\. Moreover, since the updated student in turn defines the rollout policy of subsequent rounds, these patterns persist and potentially amplify over training\.  This failure mode suggests that improving OPD requires treating the rollout policy itself as an optimization target, rather than only modifying the distillation objective\. We propose \*Mixture Proposal On\-Policy Distillation\* \(MPOPD\), which derives a student\-anchored, teacher\-guided rollout distribution from a local trust\-region objective based on relative teacher support\.  The resulting target is a geometric mixture of the student and teacher policies, and we introduce a proposal policy that approximates this mixture, enabling rollout generation in a single forward pass\.  Experiments on 16 math, knowledge, and medical reasoning benchmarks show consistent gains over OPD and recent variants\. On math reasoning, our method improves average accuracy by 6\.91 over OPD on Qwen3\-4B\-Base while reducing average generation length by 41\\%, suggesting that rollout policy design provides an effective way to improve OPD\.

## CoMMa: Contribution\-Aware Medical Multi\-Agents for Decentralized Oncology Decision Support

**Authors:** Yichen WU; Yujin Oh; Sangjoon Park; Kailong Fan; Yuhan Liu; Zhiyi Shi; Sekeun Kim; Dania Daye; Hana Farzaneh; Wei Liu; Xiang Li; Raul N Uppot; Quanzheng Li

**ID:** 153350\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153350

[Paper](<https://openreview.net/forum?id=M1eBc5lFuT>) | [PDF](<https://openreview.net/pdf?id=M1eBc5lFuT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153350>)

Recent multi\-agent frameworks have shown promise for oncology decision support, yet most assume centralized data access and rely on prompt\-based assignment, limiting their applicability in privacy\-sensitive clinical settings\. We propose Contribution\-Aware Medical Multi\-Agents \(CoMMa\), a decentralized LLM\-agent framework where specialists operate on partitioned clinical data streams\. Unlike prior approaches that share inputs across agents, CoMMa enforces data decentralization to include stronger role specialization and further enhances this via agent\-specific finetuning\. To enable reliable and interpretable coordination, we introduce a contribution\-aware aggregation mechanism that replaces stochastic, narrative\-based reasoning with deterministic embedding projections to approximate each agent's marginal utility\. This yields explicit credit assignment over agents, providing a stable and interpretable decision pathway aligned with clinical requirements\. We evaluate CoMMa on multiple oncology benchmarks, including real\-world multidisciplinary tumor board datasets from large academic hospitals in North America and East Asia, as well as public datasets, demonstrating strong performance and generalization across heterogeneous clinical settings\.

## GlucoFM\-Bench: Benchmarking Time\-Series Foundation Models for Blood Glucose Forecasting

**Authors:** Baiying Lu; Zhaohui Liang; Ryan Pontius; Shengpu Tang; Temiloluwa Prioleau

**ID:** 139533\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139533

[Paper](<https://openreview.net/forum?id=KNGzZNVPZk>) | [PDF](<https://openreview.net/pdf?id=KNGzZNVPZk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139533>)

Blood glucose forecasting models are foundational for modern diabetes management systems, as reliable short\-term predictions can enable proactive interventions, support automated insulin delivery, and reduce the risk of hypo\- and hyperglycemic events\. From a modeling perspective, glucose forecasting poses unique challenges due to heterogeneous physiological dynamics across different diabetes populations\. Traditional machine learning and deep learning models have been extensively evaluated for glucose prediction\. However, there is significantly less research on evaluating and benchmarking recent time\-series foundation models \(TSFMs\) for blood glucose forecasting\. To bridge this gap, we present GlucoFM\-Bench, a comprehensive benchmark evaluating state\-of\-the\-art TSFMs alongside supervised deep learning models for blood glucose forecasting\. We assess eight representative architectures, including pre\-trained TSFMs, time\-series large language models, and task\-specific deep learning models, across 15 publicly available diabetes\-relevant datasets comprising 1,117 individuals with type 1 diabetes, type 2 diabetes, prediabetes, and no diabetes\. Models are evaluated under zero\-shot, few\-shot, and full\-shot protocols, with systematic variation in context length and prediction horizon\. Across datasets, pre\-trained TSFMs, especially Chronos\-2 and TimesFM, show strong zero\-shot and few\-shot transfer, with the best zero\-shot model performing within 5% of the best full\-shot supervised model\. Yet, when task\-specific data is abundant, a lightweight LSTM remains strongest, outperforming TSFMs by 4\-21% under full\-shot training\. Stratified analyses reveal persistent challenges in T1D cohorts and hypo\-/hyperglycemic ranges, highlighting the need for evaluation beyond aggregate error metrics\. Together, GlucoFM\-Bench provides a standardized and reproducible foundation for evaluating, comparing, and improving foundation models for blood glucose forecasting\. The dataset and code are publicly available at https://huggingface\.co/datasets/glucofmbench/GlucoFM\-Bench and https://anonymous\.4open\.science/r/GlucoseML\_benchmark\-B50C, respectively\.

## Revisiting Incremental Learning: A Three\-Interface Diagnosis of Stability and Plasticity

**Authors:** Keuntae Kim; Beomseok Lee; Hyunwoo Kim; Yong Suk Choi

**ID:** 150119\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150119

[Paper](<https://openreview.net/forum?id=kX9Kbog4s6>) | [PDF](<https://openreview.net/pdf?id=kX9Kbog4s6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150119>)

Incremental learning is usually evaluated through the final classifier or LM head, but this interface does not indicate where forgetting occurs\. A drop in accuracy may reflect representation degradation in the backbone, readout mismatch in the head, or both\. We argue that BWT and FWT should therefore be interpreted as interface\-dependent quantities rather than as single model\-level properties\. We study three evaluation interfaces: the sequentially trained head, a newly optimized probing classifier, and a classifier\-free backbone separability diagnostic based on clustering\. These interfaces answer different questions: deployed performance, recoverable information under a new readout, and representation\-level separability\. Across CIL experiments with encoder and decoder language backbones, plus discriminative\-backbone TIL sanity checks, we find that qualitative conclusions about forgetting and plasticity change substantially with the evaluation interface\. Standard heads often indicate severe forgetting, probes often suggest near\-complete recoverability, and backbone diagnostics suggest intermediate representation changes and a stability\-\-plasticity pattern\. This pattern is consistent across five clustering algorithms and three clustering metrics, suggesting that it is not an artifact of a single diagnostic choice\. Finally, we use Just LM\-Head Tuning \(JLT\) as a head\-only intervention to quantify recoverable performance on a fixed incrementally trained backbone\. The large gap between standard and head\-realigned performance suggests that many failures attributed to catastrophic forgetting are better understood as head\-\-backbone mismatch plus partial representation drift\. Our results call for reporting where forgetting is measured, not only how much forgetting is observed\.

## M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents

**Authors:** Hannes Ill; Rafi Al Attrach; Rajna Fani; Ahram Han; Ryohei Yamamoto; Marlene L Moerig; Dukyong Yoon; Leo Anthony Celi

**ID:** 139625 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EgGGRnoyTG>) | [PDF](<https://openreview.net/pdf?id=EgGGRnoyTG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139625>)

Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output\-grain choices that change cohorts and downstream conclusions\. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC\-IV and eICU, with controls that decompose the value of procedural context for AI coding agents into specification completeness, delivery format, and schema familiarity\. A Docker\-isolated Codex campaign isolates specification completeness as the primary driver: an operational spec over the schema\-only baseline yields \+0\.162 \[0\.072, 0\.260\] on eight sentinel tasks, while clinician\-reviewed skills add only \+0\.024 \[\-0\.034, 0\.099\] on top, and the combined targeted\-skill effect over no\-skill is \+0\.136 \[0\.085, 0\.191\] across all 28 tasks \(26/28 improving\)\. Only 87/760 primary runs pass all strict diagnostics, with failures dominated by output\-grain and temporal\-boundary errors, and key F1 moves only \+0\.003 task\-balanced, so the gain is partial reference agreement on matched keys, not autonomous task completion or row\-grain repair\. Schema restructuring preserves 0\.704 of the with\-skill gain on gpt\-5\.4\-mini over the 26 MIMIC\-IV tasks, bounding schema\-name memorization at ≤ 29\.6% of the effect; decoy\-skill and raw\-SQL controls further rule out generic\-context and reference\-code\-structure\-only explanations\. Skills are released as a versioned, clinician\-reviewable markdown delivery format, one packaging among several, with task\-level reference\-validity audit and per\-run egress logs\. M4Bench releases tasks, skills, evaluation code, and per\-run audit logs as a fully open\-source benchmark object designed for extension and reuse\.

## Serialization Tax in Shared\-Latent Exchangeable Decisions

**Authors:** Siming Zhang; Zhehui Shen; Shijie Chen; Xinle Gu; Yansen Yu; Hang Yu

**ID:** 148577 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wnpLcHUs9t>) | [PDF](<https://openreview.net/pdf?id=wnpLcHUs9t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148577>)

Itemwise calibration does not guarantee calibration of the decision it feeds\. Many systems output one score per item in a partially observed group, but the downstream action asks whether enough hidden items cross a threshold: show a slate, defer a panel decision, or inspect a batch\. If those hidden items share an unresolved user, patient, or batch state, averaging that state before aggregation preserves means but makes the aggregate posterior too concentrated\. We call this failure the serialization tax\. For Bernoulli de Finetti posteriors, the exact hidden\-count law dominates any independent completion with the same total predictive mean in convex order, yielding variance, total\-variation, threshold, and Bayes\-value gaps\. The same interface loss extends to non\-binary outcomes through empirical\-measure Laplace functionals and to heterogeneous slates through a shared\-covariance identity\. TaxScore turns the theory into a routing rule: use cheap marginal interfaces when hidden\-block ambiguity is far from the decision boundary, and propagate a shared posterior sample when it is near\. On pre\-specified, hidden\-label\-free MovieLens 1M/10M audits, replacing Transformer count heads with existing stochastic shared\-latent heads improves high\-TaxScore negative log\-likelihood \(NLL\)/utility from $0\.673/0\.696$ to $0\.629/0\.723$ and from $0\.670/0\.691$ to $0\.639/0\.715$; routing richer heads only on flagged slates gives $0\.006$\-$0\.012$ full\-population utility gains\.

## Source\-Causal Control of Historical Context in Longitudinal Radiology Report Generation

**Authors:** Dmitry Lvov; Ilya Pershin

**ID:** 154092\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154092

[Paper](<https://openreview.net/forum?id=GHvYdC6tmg>) | [PDF](<https://openreview.net/pdf?id=GHvYdC6tmg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154092>)

Longitudinal radiology report generation increasingly conditions on prior images and reports\. This history is clinically valuable, but it creates a source\-validity failure mode: a generator can carry prior\-only findings into the current report\. Weintroduce source\-causal robustness, a stress\-test and control framework that holds the current chest X\-ray fixed while intervening on historical context\. On a full eligible MIMIC\-CXR longitudinal study \(18,716 pairs; 93,580 generations across five source conditions\), historical context consistently trades fewer missed findings for more unsupported positives\. Matched wrong\-history, the key negative control, increases proxy\-defined false positives by \+0\.366 per report while reducing false negatives by −0\.129; random wrong\-history yields an even larger false positive stress signal \(\+0\.465 FP/report\)\. We propose the Source\-Causal Finding Router \(SCFR\), a source\-validity controller trained with within\-evaluation subject exclusion\. Across three held\-out evaluations, SCFR repairs matched wrong\-history false\-positive inflation by −0\.343, −0\.550, and −0\.457 per report, passes Holm corrected primary testing at the bootstrap resolution floor \(Holm\-adjusted p ≤ 0\.0012\), and satisfies fixed current\-only parity margins\. Cross\-generator stress panels with RadInfer and Libra, together with ReXPref\-Prior, RadGraph2, Chest ImaGenome, ablations, and case review, support the mechanism\. These results establish a protocol\-defined state\-of\-the\-art source\-causal robustness/control result for longitudinal radiology report generation under matched wrong\-history stress tests\.

## Medical LLMs as Medical World Models:  Unified Policy\-Dynamics Learning with Test\-Time Search

**Authors:** Yucheng Zhou; Peng Luo; Jianbing Shen

**ID:** 148462\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148462

[Paper](<https://openreview.net/forum?id=xdOHRMB63r>) | [PDF](<https://openreview.net/pdf?id=xdOHRMB63r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148462>)

_Abstract unavailable from the accessible public sources._

## One Loss to Rule Them All: Marked Time\-to\-Event for Structured EHR Foundation Models

**Authors:** Zilin Jing; Vincent Jeanselme; Yuta Kobayashi; Simon Lee; Chao Pang; Aparajita Kashyap; Yanwei Li; Xinzhuo Jiang; Shalmali Joshi

**ID:** 150016\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150016

[Paper](<https://openreview.net/forum?id=lNy0GEHZYE>) | [PDF](<https://openreview.net/pdf?id=lNy0GEHZYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150016>)

_Abstract unavailable from the accessible public sources._

## DoAtlas\-1: A Causal Compilation Paradigm for Clinical AI

**Authors:** Yulong Li; Jianxu Chen; Xiwei Liu; Chuanyue Suo; Rong Xia; Yichen Li; Xinlin Zhuang; Niranjana A Menon; Jionglong Su; Eran Segal; Imran Razzak

**ID:** 152826\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152826

[Paper](<https://openreview.net/forum?id=Q7ooeLQ5Xm>) | [PDF](<https://openreview.net/pdf?id=Q7ooeLQ5Xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152826>)

Medical foundation models generate narrative explanations but cannot quantify intervention effects, detect evidence conflicts, or validate literature claims, limiting clinical auditability\. We propose causal compilation, a paradigm that transforms medical evidence from narrative text into executable code\. The paradigm standardizes heterogeneous research evidence into structured estimand objects, each explicitly specifying intervention contrast, effect scale, time horizon, and target population, supporting six executable causal queries: do\-calculus, counterfactual reasoning, temporal trajectories, heterogeneous effects, mechanistic decomposition, and joint interventions\. We instantiate this paradigm in DoAtlas\-1, compiling 1,445 effect kernels from 754 studies through effect standardization, conflict\-aware graph construction, and real\-world validation \(Human Phenotype Project, 10,000 participants\)\. The system achieves 98\.5% canonicalization accuracy, 100% conflict detection recall, and 80\.5% query executability\. This paradigm shifts medical AI from text generation to executable, auditable, and verifiable causal reasoning\.

## Revisiting Incremental Learning: A Three\-Interface Diagnosis of Stability and Plasticity

**Authors:** Keuntae Kim; Beomseok Lee; Hyunwoo Kim; Yong Suk Choi

**ID:** 150119\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150119

[Paper](<https://openreview.net/forum?id=kX9Kbog4s6>) | [PDF](<https://openreview.net/pdf?id=kX9Kbog4s6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150119>)

Incremental learning is usually evaluated through the final classifier or LM head, but this interface does not indicate where forgetting occurs\. A drop in accuracy may reflect representation degradation in the backbone, readout mismatch in the head, or both\. We argue that BWT and FWT should therefore be interpreted as interface\-dependent quantities rather than as single model\-level properties\. We study three evaluation interfaces: the sequentially trained head, a newly optimized probing classifier, and a classifier\-free backbone separability diagnostic based on clustering\. These interfaces answer different questions: deployed performance, recoverable information under a new readout, and representation\-level separability\. Across CIL experiments with encoder and decoder language backbones, plus discriminative\-backbone TIL sanity checks, we find that qualitative conclusions about forgetting and plasticity change substantially with the evaluation interface\. Standard heads often indicate severe forgetting, probes often suggest near\-complete recoverability, and backbone diagnostics suggest intermediate representation changes and a stability\-\-plasticity pattern\. This pattern is consistent across five clustering algorithms and three clustering metrics, suggesting that it is not an artifact of a single diagnostic choice\. Finally, we use Just LM\-Head Tuning \(JLT\) as a head\-only intervention to quantify recoverable performance on a fixed incrementally trained backbone\. The large gap between standard and head\-realigned performance suggests that many failures attributed to catastrophic forgetting are better understood as head\-\-backbone mismatch plus partial representation drift\. Our results call for reporting where forgetting is measured, not only how much forgetting is observed\.

## M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents

**Authors:** Hannes Ill; Rafi Al Attrach; Rajna Fani; Ahram Han; Ryohei Yamamoto; Marlene L Moerig; Dukyong Yoon; Leo Anthony Celi

**ID:** 139625\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139625

[Paper](<https://openreview.net/forum?id=EgGGRnoyTG>) | [PDF](<https://openreview.net/pdf?id=EgGGRnoyTG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139625>)

Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output\-grain choices that change cohorts and downstream conclusions\. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC\-IV and eICU, with controls that decompose the value of procedural context for AI coding agents into specification completeness, delivery format, and schema familiarity\. A Docker\-isolated Codex campaign isolates specification completeness as the primary driver: an operational spec over the schema\-only baseline yields \+0\.162 \[0\.072, 0\.260\] on eight sentinel tasks, while clinician\-reviewed skills add only \+0\.024 \[\-0\.034, 0\.099\] on top, and the combined targeted\-skill effect over no\-skill is \+0\.136 \[0\.085, 0\.191\] across all 28 tasks \(26/28 improving\)\. Only 87/760 primary runs pass all strict diagnostics, with failures dominated by output\-grain and temporal\-boundary errors, and key F1 moves only \+0\.003 task\-balanced, so the gain is partial reference agreement on matched keys, not autonomous task completion or row\-grain repair\. Schema restructuring preserves 0\.704 of the with\-skill gain on gpt\-5\.4\-mini over the 26 MIMIC\-IV tasks, bounding schema\-name memorization at ≤ 29\.6% of the effect; decoy\-skill and raw\-SQL controls further rule out generic\-context and reference\-code\-structure\-only explanations\. Skills are released as a versioned, clinician\-reviewable markdown delivery format, one packaging among several, with task\-level reference\-validity audit and per\-run egress logs\. M4Bench releases tasks, skills, evaluation code, and per\-run audit logs as a fully open\-source benchmark object designed for extension and reuse\.

## PhysicianBench: Evaluating LLM Agents in Real\-World EHR Environments

**Authors:** Ruoqi Liu; Imran Mohiuddin; Austin J Schoeffler; Kavita Renduchintala; Ashwin Nayak; Prasantha L Vemu; Shivam Vedak; Kameron C Black; John L Havlik; Isaac Ogunmola; Stephen P\.; Roopa Dhatt; Jonathan H Chen

**ID:** 139788 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4tHKkW6AK0>) | [PDF](<https://openreview.net/pdf?id=4tHKkW6AK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139788>)

_Abstract unavailable from the accessible public sources._

## REFORM\-3D: A Representation\-Centric Evaluation Framework for 3D Medical Vision Foundation Models

**Authors:** Maregu Assefa; Muhammad Muzammal Naseer; Divya Velayudhan; Gedamu Kumie; Naoufel Werghi

**ID:** 139603 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G0jVZhQ2NL>) | [PDF](<https://openreview.net/pdf?id=G0jVZhQ2NL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139603>)

_Abstract unavailable from the accessible public sources._

## GUITAR: Structured Failure Diagnosis of GUI Agents via State Transitions

**Authors:** Shaoqing Zhang; Kehai Chen; Xuefeng Bai; Zhuosheng Zhang; Pengfei Zhang; Yang Xiang; Min zhang

**ID:** 139804 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3bg3fAhQJU>) | [PDF](<https://openreview.net/pdf?id=3bg3fAhQJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139804>)

_Abstract unavailable from the accessible public sources._

## Urgency\-Aware Autoregressive VLMs for Unanticipated Healthcare Occurrences

**Authors:** Qian Wu; Kai Chen; Zelong Tan; Simin Li; DOU QI

**ID:** 149641 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oZu1lEHGvj>) | [PDF](<https://openreview.net/pdf?id=oZu1lEHGvj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149641>)

The sequential nature of autoregressive decoding in large vision\-language models creates a fundamental trade\-off between latency and clinical responsiveness when managing asynchronous signals\. When unexpected healthcare occurrences arise during an ongoing VLM response, integrating unanticipated events\-\-\-such as sudden device alerts or urgent caregiver messages\-\-\-conventionally requires either injecting the new data directly into the active response stream or deferring it until generation ends\. Neither approach is ideal in dynamic environments that demand urgent intervention without repeatedly disrupting routine continuations\. We present ReflexMind, a training\-free framework for online, urgency\-aware occurrence handling that runs an Urgency Evaluator \(UE\) concurrently with the Primary Generator \(PG\)\. By leveraging the rotational invariance of Rotary Position Embedding \(RoPE\), ReflexMind enables a dual\-view decoding process that shares a single KV cache, allowing it to assess incoming multimodal occurrences while preserving the state of the ongoing response\. This design supports structured decisions, enabling ReflexMind to escalate critical alerts immediately while handling non\-urgent occurrences without interrupting the ongoing response\. Across three benchmarks spanning multimodal occurrences, our method generally improves occurrence triage, urgency recognition, and intervention selection for VLM backbones at different scales, while using fewer post\-occurrence tokens in most settings and adding modest runtime and memory overhead under concurrent occurrences\.

