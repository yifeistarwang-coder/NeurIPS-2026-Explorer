# Social Aspects / Accountability, Transparency and Interpretability

社会影响与可信人工智能 / 问责、透明度与可解释性

162 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Mechanistic Interpretability with Sparse Autoencoder Neural Operators

**Authors:** Bahareh Tolooshams; Ailsa Shen; Animashree Anandkumar

**ID:** 156118 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Ggn8LL5k9>) | [PDF](<https://openreview.net/pdf?id=0Ggn8LL5k9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156118>)

We introduce sparse autoencoder neural operators \(SAE\-NOs\), a new class of sparse autoencoders that operate in function spaces rather than fixed\-dimensional Euclidean representations\. We formalize the functional representation hypothesis, where data are explained through sparse compositions of structured functions\. Unlike standard SAEs that represent concepts with scalar activations, SAE\-NOs parameterize concepts as functions, enabling representations that capture not only a concept's presence, but also how and where it is expressed across the input domain\. We achieve this through joint sparsity: concept sparsity selects active concepts, while domain sparsity governs where they are expressed\. We instantiate this framework using Fourier neural operators \(SAE\-FNOs\), parameterizing concepts as integral operators in the Fourier domain\. This functional and spectral parameterization is particularly advantageous when data exhibit spatial structure across scales or when concepts are frequency\-structured\. We characterize SAE\-FNO on vision data and demonstrate that it learns localized patterns, uses concepts more efficiently, and exhibits stable concept characteristics across sparsity levels\. We further show that SAE\-FNO adapts to changes in domain size and generalizes across discretizations, operating at resolutions beyond those seen during training, where standard SAEs fail\. We also introduce lifting into SAEs and show theoretically and empirically that it acts as a preconditioner that accelerates optimization\. Overall, our results show that moving from vector\-valued to functional parameterizations, with concept and domain sparsity, extends SAEs from representing concept presence to modeling structured concept expression, highlighting the importance of parameterization\.

## The Graph Concept Bottleneck: Decoding Combinatorial Reasoning in GNNs for Interpretability

**Authors:** Yue Niu; zhaokai sun; Jiayi Yang; Chunchun Chen; Xiaofeng Cao; Rui Fan; Xin Sun; Wei Ye

**ID:** 151859 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XNzMICeQlD>) | [PDF](<https://openreview.net/pdf?id=XNzMICeQlD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151859>)

GNNs have achieved remarkable success in graph learning, yet their black\-box nature obscures the combinatorial reasoning behind their predictions\. A core challenge lies in understanding how GNNs translate topological patterns \(graph concepts\) into logical rules\. Current works only uncover hard Boolean logical rules over graph concepts, which cannot quantify the contribution of each concept to model predictions\. Moreover, they are post\-hoc methods that generate explanations after training via surrogate models, and thus may deviate from the true combinatorial reasoning of GNNs\. In this work, we develop the graph concept bottleneck that enforces the combinatorial reasoning of GNNs to fit soft logical rules over graph concepts, thereby quantifying the contribution of each concept\. To further enhance the graph concept bottleneck, we treat graph concepts as "graph words" and graphs as "graph sentences", and leverage language models to learn context\-aware graph concept embeddings\. Extensive experiments on multiple datasets show that our method GCBMs achieve state\-of\-the\-art performance in both interpretability and classification\.

## Single\-Pass Evidence Measurement for Interpretable and Uncertainty\-Aware Multimodal Face Anti\-Spoofing

**Authors:** Yingjie Ma; Haonan Wang; Xun Lin; Ruixin Zhang; Jingyun Zhang; Jun Wang; Rizen Guo; Shouhong Ding; Weicheng Xie; Linlin Shen; Zitong YU

**ID:** 148148 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zv1t1IrLuP>) | [PDF](<https://openreview.net/pdf?id=zv1t1IrLuP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148148>)

Face anti\-spoofing \(FAS\) is critical for protecting face recognition systems against presentation attacks in open environments\. Beyond high cross\-domain generalization, practical FAS deployments must provide interpretable and uncertainty\-aware decisions when multimodal evidence is incomplete, degraded, or conflicting\. However, current multimodal domain\-generalized FAS methods focus primarily on feature fusion or domain alignment, compressing RGB, depth, and infrared cues into opaque logits\. This makes it difficult to discern which modality drives the decision, whether modalities reinforce or suppress each other, and whether a given sample lies within the classifier's reliable operating regime\. We introduce SEM\-FAS, a quantum\-inspired yet fully classical single\-pass evidence measurement framework that jointly enhances generalization, interpretability, and reliability\. SEM\-FAS encodes each modality as a normalized complex\-valued state whose amplitude captures evidence strength and whose phase encodes cross\-modal interference; multiple coherent heads are then mixed into a density\-matrix representation\. A constrained POVM\-like measurement head converts this representation into calibrated class probabilities while analytically decomposing every prediction into per\-modality main effects and pairwise synergy/suppression terms\. Simultaneously, three built\-in uncertainty indicators are obtained without sampling overhead: predictive ambiguity, representation mixedness, and measurement\-coverage mismatch\. On standard multimodal DG\-FAS benchmarks, SEM\-FAS reduces the best baseline HTER by 2\.18\\% and improves AUC by 1\.38\\% under both complete and missing\-modality protocols\. Visual analyses further suggest that the learned modality effects, pairwise interactions, and uncertainty scores align with expected FAS behavior, even for hard samples, indicating that single\-pass evidence measurement is a promising way to jointly enhance generalization, interpretability, and reliability in multimodal FAS\.

## Conditional independence and graphical models for rankings

**Authors:** Aritz Pérez

**ID:** 153084 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O6AIP8gDLa>) | [PDF](<https://openreview.net/pdf?id=O6AIP8gDLa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153084>)

Ranking models define probability distributions over rankings and are fundamental in applications such as preference learning and decision\-making\. Without structural assumptions, these models are intractable due to their factorial complexity\. Although independence assumptions are key to reducing complexity and enabling interpretability, standard notions of conditional independence do not directly apply to rankings because they are subject to mutual exclusivity constraints\.  We introduce \\emph\{relative rank models\}, a probabilistic framework based on structured coarsenings of the ranking space that relax these constraints while preserving relative order information\. This representation enables a well\-defined notion of conditional independence for rankings and allows rankings to be modeled using Bayesian networks\. As a result, relative rank models support tractable learning, probabilistic inference, and interpretable representations\. We further show that two prominent ranking models based on independence assumptions tailored to rankings arise as special cases, providing a unifying framework for independence in ranking models\.

## Rethinking XAI Evaluation: A Human\-Centered Audit of Shapley Benchmarks in High\-Stakes Settings

**Authors:** Inês Oliveira e Silva; Sérgio Jesus; Iker Perez; Rita P\. Ribeiro; Carlos Soares; Hugo Ferreira; Pedro Bizarro

**ID:** 138901 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y1PstYDXDq>) | [PDF](<https://openreview.net/pdf?id=y1PstYDXDq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138901>)

Shapley values are a cornerstone of explainable AI, yet their proliferation into competing formulations has created a fragmented landscape with little consensus on practical deployment\. While theoretical differences are well\-documented, evaluation remains reliant on quantitative proxies whose alignment with human utility is unverified\. In this work, we use a unified amortized framework to isolate semantic differences between eight Shapley variants under the low\-latency constraints of operational risk workflows\. We conduct a large\-scale empirical evaluation across four risk datasets and a realistic fraud\-detection environment involving professional analysts and 3,735 case reviews\. Our results reveal a fundamental misalignment: standard quantitative metrics, such as sparsity and faithfulness, are decoupled from human\-perceived clarity and decision utility\. Furthermore, while no formulation improved objective analyst performance, explanations consistently increased decision confidence, signaling a critical risk of automation bias and overconfidence in high\-stakes settings\. These findings demonstrate that current evaluation proxies are insufficient for predicting human impact, motivating our release of interaction measurements to support research into behaviorally grounded XAI evaluation\.

## Dual\-Contrastive Sparse Autoencoders Reveal Features of Musical Interpretation

**Authors:** Jan Chen; Manuel Cherep; Patricia Maes; Nikhil Singh

**ID:** 153459 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L95qutWlv4>) | [PDF](<https://openreview.net/pdf?id=L95qutWlv4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153459>)

For decades, philosophers and musicologists have debated which features of a performance are constitutive of the work and which are expressions of how it is being played\. Computational evidence has been hard to assemble: audio embedding models conflate work identity with performance style, and existing interpretability tools for music generators treat learned representations as flat dictionaries that mix the two\. We turn the question into an empirical one by introducing the dual\-contrastive sparse autoencoder \(DC\-SAE\), a two\-branch sparse autoencoder that uses cheap work\-level metadata to factor a generative music transformer's residual stream into work\-identity and performance\-content subspaces\. Across jazz\-standard, classical\-work, and pop\-cover corpora, the resulting decomposition is supported by probes and feature galleries that surface musically interpretable concepts on each side\. Without performer supervision, the variation branch acquires structure related to performer identity, and steering along these directions can shift the perceived performer of generated audio while preserving the underlying work\. Together, these results show that a generative music model has internalized a representation of interpretation that can be recovered, named, and steered\.

## Subliminal Learning as Trait\-Direction Drift: A Mechanism and Targeted Control under SFT Distillation

**Authors:** Zhixuan Liu; Zhichen Dong; Yuyu Fan; Xiangtian Li; Chao Yang

**ID:** 154775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B3eilxnBkK>) | [PDF](<https://openreview.net/pdf?id=B3eilxnBkK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154775>)

Model distillation can transfer not only intended capabilities but also hidden traits from the teacher\. A teacher biased by a system prompt can generate semantically clean training data, such as numeric sequences, that still causes a downstream student to inherit the hidden preference, a phenomenon known as $\\textit\{subliminal learning\}$\. Prior work establishes this phenomenon, but the transfer mechanism remains unclear, making targeted mitigation difficult\. We propose and validate $\\textbf\{trait\-direction drift\}$ as the mechanism underlying subliminal learning: $\\textbf\{\(1\)\}$ on the teacher side, biased teacher samples retain a measurable preference gap toward the target trait even when their semantic content is unrelated to that trait; $\\textbf\{\(2\)\}$ on the student side, under a low\-rank logit\-linear approximation, samples with larger preference gaps induce stronger trait\-aligned updates during supervised fine\-tuning, and these updates accumulate over training\. Guided by this mechanism, we propose $\\textbf\{probe\-space corridor\}$, a regularizer that constrains drift along a calibrated trait readout during distillation\. The method substantially reduces hidden\-trait transfer while preserving task performance: for example, it lowers malicious\-response transfer from 29\.55% to 6\.47% with low main\-task accuracy cost, and consistently suppresses animal\-preference transfer across the main Qwen\-7B preference settings\. These results provide both a validated mechanistic explanation of subliminal learning and a targeted recipe for more controllable distillation\.

## Federated Concept\-Based Models: Interpretable models with distributed supervision

**Authors:** Dario Fenoglio; Arianna Casanova Flores; Francesco De Santis; Gabriele Dominici; Johannes Schneider; Pietro Barbiero; Giovanni De Felice; Marc Langheinrich; Martin Gjoreski

**ID:** 153466 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7HwKQPq8i>) | [PDF](<https://openreview.net/pdf?id=L7HwKQPq8i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153466>)

Concept\-based Models \(CMs\) enhance interpretability in deep learning by grounding predictions in human\-understandable concepts\. However, concept annotations are costly and rarely available at scale within a single data source\. Federated Learning \(FL\) could alleviate this limitation by enabling cross\-institutional training over concept annotations distributed across multiple data owners\. Yet, FL lacks interpretable modeling paradigms\. Integrating CMs with FL is non\-trivial: although FL supports heterogeneous and non\-stationary client participation, it typically assumes a fixed shared architecture, whereas CMs may require architectural adaptation as the available concept set evolves\. We propose Federated Concept\-based Models \(F\-CMs\), a new methodology for deploying CMs in evolving FL settings\. F\-CMs aggregate concept\-level information across institutions and efficiently adapt the model architecture to changes in concept supervision while preserving privacy\. Empirically, F\-CMs maintain accuracy and intervention effectiveness comparable to training settings with full concept supervision, while outperforming on average non\-adaptive federated baselines\. Notably, F\-CMs enable interpretable inference on concepts unavailable to a given institution, a key novelty over existing approaches\.

## OceanCBM: A Concept Bottleneck Model for Mechanistic Interpretability in Ocean Forecasting

**Authors:** Sanah Suri; Kieran Ringel; Maike Sonnewald

**ID:** 150573 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h9jfL4NIg5>) | [PDF](<https://openreview.net/pdf?id=h9jfL4NIg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150573>)

Extreme ocean phenomena are challenging not only to predict but to diagnose, as accurate forecasts alone do not reveal the underlying physical drivers\. While recent machine learning approaches achieve strong predictive skill, they remain largely opaque and provide limited guarantees of fidelity to ground\-truth physics\. We introduce OceanCBM, the first concept bottleneck model \(CBM\) for spatiotemporal prediction and mechanistic interrogation of ocean dynamics\. OceanCBM uses mixed supervision to predict mixed layer heat content, a key precursor of marine heatwaves, while routing information through an intermediate layer of prescribed concepts derived from geophysical fluid dynamics and a 'free' concept\. This design imposes soft physical structure without over\-constraining the model, and the free concept both regularizes concept predictions and captures residual physical processes\. Across ensemble initializations, we show that mixed supervision yields consistent mechanistic representations, whereas prediction\-only and prescription\-only baselines learn highly variable latent structures despite similar predictive performance\. OceanCBM achieves interpretable, physically grounded representations without sacrificing skill, explicitly characterizing the interpretability\-performance trade\-off\.

## Hyper Hawkes Processes: Interpretable Models of Marked Temporal Point Processes

**Authors:** Alex Boyd; andrew warrington; Taha Kass\-Hout; Parminder Bhatia; Cao \(Danica\) Xiao

**ID:** 149728 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=noEEMRFuCg>) | [PDF](<https://openreview.net/pdf?id=noEEMRFuCg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149728>)

Foundational marked temporal point process \(MTPP\) models, such as the Hawkes process, often use inexpressive model families in order to offer interpretable parameterizations of event data\. On the other hand, neural MTPPs models forego this interpretability in favor of absolute predictive performance\. In this work, we present a new family MTPP models: the hyper Hawkes process \(HHP\), which aims to be as flexible and performant as neural MTPPs, while retaining interpretable aspects\. To achieve this, the HHP extends the classical Hawkes process to increase its expressivity by first expanding the dimension of the process into a latent space, and then introducing a hypernetwork to allow time\- and data\-dependent dynamics\. These extensions define a highly performant MTPP family, achieving state\-of\-the\-art performance across a range of benchmark tasks and metrics\. Furthermore, by retaining the linearity of the recurrence, albeit now piecewise and conditionally linear, the HHP also retains much of the structure of the original Hawkes process, which we exploit to create direct probes into how the model creates predictions\. HHP models therefore offer both state\-of\-the\-art predictions, while also providing an opportunity to \`\`open the box'' and inspect how predictions were generated\.

## State Copying Crowds Out Reasoning: Mechanistic Evidence for Delta Planning in Autoregressive Models

**Authors:** Wang Xi; Shijia Xu

**ID:** 153030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OXm9qcC6FZ>) | [PDF](<https://openreview.net/pdf?id=OXm9qcC6FZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153030>)

Autoregressive models are often used as sequential decision makers by asking them to rewrite the full intermediate state before producing the next action\. We study a failure mode of this interface: exact high\-entropy state copying can interfere with goal\-directed computation\. We formulate this as an operational copy\-\-reason interference hypothesis rather than as a directly measurable capacity law\. Matched controls separate copying from length: on controlled state\-tracking tasks, Full\-State Generation degrades much more sharply than an Iso\-Length Control and similarly to a Complex\-Copy Control\. Activation patching on Llama\-3\.1 8B and 70B recovers target\-action evidence when clean residual activations are inserted into late layers of full\-state runs, suggesting that goal features remain recoverable but are poorly routed under the copy\-heavy interface\. Delta\-style alternatives reduce this burden\. At the 2,000\-token Formal Math anchor, Scratchpad Residual improves accuracy from 41\.2\-\-68\.5\\% under Full\-State Generation to 97\.1\-\-99\.4\\%; on SWE\-bench Lite, it improves pass rates from 12\.4\-\-26\.8\\% to 18\.5\-\-34\.8\\%\. The gain has a boundary: probe and task accuracy both decay with long dependency distance\. These results argue for separating state maintenance from action generation in long\-horizon autoregressive systems\.

## Mechanistic Circuit Identification for Controllable Data Generation

**Authors:** Nakyung Lee; Sangwoo Hong; Jungwoo Lee

**ID:** 154637 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C7XxHZycp6>) | [PDF](<https://openreview.net/pdf?id=C7XxHZycp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154637>)

While recent advances in data synthesis aim to curate high\-quality datasets, most generation pipelines still rely on heuristic prompt\-based control\. This black\-box paradigm provides limited insight into how individual samples interact with a model's underlying learning dynamics\. To bridge this gap, we propose a circuit\-grounded framework that connects training\-dynamics\-based data valuation with mechanistic interpretability \(MI\)\.  Specifically, we conceptualize data quality along three complementary utility axes, learnability, challenge, and alignment\. First, we uncover specialized model\-internal circuits that causally govern these utility signals\. Then, moving beyond heuristic prompting toward mechanistic control, we leverage these circuits as controllable interfaces, actively steering generation to produce utility\-targeted data\. Building on this capability, we introduce SAMS \(Stage\-Aware Mechanistic Scheduling\), which schedules circuit\-steered data according to the model's evolving optimization needs\.  Experiments on multiple\-choice QA tasks demonstrate that our approach yields precisely controlled data with greater diversity than prompt\-based baselines, consistently improving downstream performance and calibration\. Ultimately, this work establishes a principled white\-box paradigm for interpretable data generation, pioneering the use of MI not just as an analytical tool, but as a practical, controllable interface\.

## Towards Multi\-Human\-Value Alignment via Value Localization in LLMs

**Authors:** Xueqi Ma; Yanbei Jiang; Xingjun Ma; James Bailey; Sarah Erfani

**ID:** 151788 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y02g0k3yX4>) | [PDF](<https://openreview.net/pdf?id=Y02g0k3yX4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151788>)

Large Language Models \(LLMs\) are increasingly deployed in real\-world settings where alignment with diverse human values is essential\. However, existing alignment methods are often costly, obscure underlying value heterogeneity, and offer limited interpretability\. In this work, we move toward multi\-human\-value alignment through inference\-time intervention by investigating how different values are internally represented within LLMs\. We propose a probing\-based value localization framework that identifies value\-sensitive components, i\.e\., value heads, which mediate model behavior across multiple moral and normative dimensions such as harmlessness, honesty, and helpfulness\. Analyses across multiple LLM families reveal that value heads are universally sparse and exhibit structured interactions, including conflicts among certain values\. These components demonstrate clear functional specialization: selectively ablating value heads induces substantial and value\-specific behavioral changes\. Building on these findings, we introduce an inference\-time intervention strategy that enables controllable adaptation of LLMs to single or multiple human value systems, with theoretical support for its effectiveness\. Experiments on human\-value benchmarks demonstrate that our method improves flexible and faithful value alignment while maintaining overall model performance, highlighting mechanistic interpretability as a foundation for socially aware, pluralistic AI\.

## GramStatTexNet: Efficient, Interpretable, and Neuro\-Inspired Texture Analysis\-by\-Synthesis

**Authors:** Vasha DuTell; Zeyu Yun; Anne Harrington; Yuan Sheng Fang; Mark Hamilton; Christian Koevesdi; Edward Adelson; Bill Freeman; Ruth Rosenholtz

**ID:** 155778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2wrNMRgCc2>) | [PDF](<https://openreview.net/pdf?id=2wrNMRgCc2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155778>)

Deep networks achieve high realism in texture synthesis but often rely on opaque, over\-parameterized representations that have limited direct connection to biological vision\. Neuroscience\-informed pyramid models are interpretable, compact, and biologically grounded, but rely on small, hand\-curated statistics sets that are difficult to generalize or extend\. We introduce GramStatTexNet, a hybrid analysis\-by\-synthesis framework that combines the multi\-scale Gabor filter structure of classical models with the flexibility of Gramian\-based correlations, organized into structured filter families\. This structured representation enables analyses that are challenging for deep\-feature methods: each statistic carries a named filter\-family identity, allowing us to decompose synthesis fidelity into per\-family contributions and to learn an interpretable, low\-dimensional embedding that preserves perceptual texture content\. We compare our framework to classical and deep texture\-synthesis baselines across diverse texture categories, and on multiple perceptual metrics, highlighting the compactness and interpretability advantages of this hybrid representation, alongside competitive synthesis quality\. This same framework extends naturally to peripheral textures via spatial pooling, and to dynamic textures using a spatiotemporal filter bank\. GramStatTexNet provides a unified, interpretable framework for analyzing and modeling visual information with natural extensions across space, time, and eccentricity\.

## Signed\-Permutation Coordinate Transport for RMSNorm Transformers

**Authors:** John Sweeney

**ID:** 154588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CSyPlMeiph>) | [PDF](<https://openreview.net/pdf?id=CSyPlMeiph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154588>)

Modern LLM workflows increasingly move coordinate\-indexed objects across checkpoints: steering vectors, sparse autoencoders, top\-$k$ neuron sets, attribution lists, and merge alignments\. This is only well posed after fixing the model's residual\-stream gauge\. We show that the native discrete gauge is architecture\-dependent: LayerNorm residual charts have permutation gauge $S\_d$, up to a global sign flip, while RMSNorm residual charts with generic per\-channel gain have signed\-permutation gauge $B\_d = S\_d \\ltimes \\\{\\pm 1\\\}^d$\. Thus permutation\-only alignment is symmetry\-incomplete for RMSNorm models\. We introduce sign\-marginalized Hungarian matching and prove a sharp population failure mode: with decorrelated source coordinates, raw signed\-correlation matching has a structural permutation\-accuracy ceiling equal to the fraction of positive signs in the true gauge up to $O\(d \\cdot 2^\{\-d\}\)$, whereas sign\-marginalized matching removes this obstruction\. We then make coordinate\-preserving transport, rather than function\-level merging, the primary object: composing saved\-checkpoint local $B\_d$ gauges along same\-base fine\-tuning trajectories recovers 91\.1% of cross\-run coordinates at 1500 steps versus 60\.3% for endpoint matching, and the gain is not explained by merely routing through the base\. The recovered gauge transfers tools that permutation\-only alignment breaks: TinyLlama SAE reconstruction has NMSE $0\.004$ under $B\_d$ recovery versus $1\.08$ under $S\_d$; Qwen sentiment steering preserves 95\.8% of its effect versus 17\.2%; refusal steering reverses sign under $S\_d$\. Coordinate\-preserving merge tests show the same mechanism\. The same covariance governs stateful training: signed transport of AdamW state preserves the resumed trajectory, while permutation\-only state transport starts from a functionally identical checkpoint but follows a different trajectory\. Finally, we give gauge\-sweep audits for index\-level interpretability claims: coordinate names are reproducible only relative to an explicit gauge\.

## What Cohort INRs Encode, and Where to Freeze Them

**Authors:** Vasiliki Sideri\-Lampretsa; Sophie Starck; Robbie Holland; Julian McGinnis; Daniel Rueckert

**ID:** 154524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cwk1nNVMQY>) | [PDF](<https://openreview.net/pdf?id=Cwk1nNVMQY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154524>)

Reusing the early layers of cohort\-trained INRs as initialization for new signals has been shown to accelerate and improve signal fitting, yet it remains unclear which  layers of the shared encoder learn transferable representations and what those representations encode\.  We address both questions for two standard backbones, SIREN and Fourier\-feature MLPs \(FFMLP\)\.  First, sweeping the freeze depth across the shared encoder at test time, we find that the optimum coincides with the layer of highest weight stable rank\.  Moreover, freezing at this depth matches or improves on the standard fine\-tuning recipe across all our experiments\. Second, identifying which layer transfers does not characterize what that layer encodes\. To address this we adopt sparse autoencoders \(SAEs\), the dominant tool in mechanistic interpretability, and present the first SAE decomposition of INR activations into sparse dictionary atoms\. Interestingly, SIREN and FFMLP achieve comparable cohort\-fitting quality, but learn qualitatively different dictionaries\. Cohort SIREN's atoms are localized, tiling the coordinate plane such that each atom fires in a confined region independent of cohort content\.  Cohort FFMLP's atoms are image\-spanning, tracing the contours of memorized cohort signals\.  Single\-atom ablations confirm causal use of these dictionaries: a single FFMLP atom out of 4096 can drop PSNR by up to 10\.6 dB across the image, while SIREN ablations remain confined to where the atom fires\. Together, these results give the first mechanistic account of what transfers in cohort\-trained INRs and turn their activations into inspectable dictionary atoms\.  These tools open a path towards characterizing what INRs encode and towards architectures designed for generalization rather than memorization\. We plan to release our code upon acceptance\.

## FiTS: Interpretable Spiking Neurons via Frequency Selectivity and Temporal Shaping

**Authors:** Jongmin Choi; Joon Son Chung

**ID:** 148427 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xukoeVXJJ9>) | [PDF](<https://openreview.net/pdf?id=xukoeVXJJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148427>)

Spiking Neural Networks \(SNNs\) are a promising framework for event\-driven temporal processing\. Prior work has improved temporal modeling through richer neuron dynamics and network\-level mechanisms such as recurrence and delays, but it remains unclear how individual spiking neurons should specialize within a network\. In this work, we introduce \\textbf\{FiTS\}, a spiking neuron that factorizes temporal computation within each neuron into Frequency Selectivity \(FS\) and Temporal Shaping \(TS\)\. The FS module parameterizes each neuron's target frequency as the maximizer of its subthreshold magnitude response, while the TS module reshapes when frequency components contribute to membrane voltage accumulation through group\-delay modulation\. On auditory benchmarks where frequency selectivity and timing are central to the input structure, FiTS consistently improves over a plain Leaky Integrate\-and\-Fire \(LIF\) baseline in simple feedforward SNNs without recurrence or network\-level delays, while remaining competitive with strong temporal SNN baselines\. Beyond accuracy, the learned target frequencies and group\-delay shifts provide interpretable neuron\-level summaries of the frequency and timing organization learned within the network\.

## Multistage Defer Trees for Hybrid Interpretability: If at First You Can't Succeed, Tree Again

**Authors:** Zakk Heile; Hayden McTavish; Margo Seltzer; Cynthia Rudin

**ID:** 151253 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bl5HDT7AO1>) | [PDF](<https://openreview.net/pdf?id=bl5HDT7AO1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151253>)

Recent work has shown that well\-optimized individual decision trees can match complex black box models in some settings, primarily in noisy domains\. For the remaining settings, however, complex ensembled compositions of trees often achieve higher accuracy at the cost of interpretability, leaving practitioners with difficult modeling decisions along an accuracy\-interpretability tradeoff\. Ideally, we would like to classify as much of the data as possible with one or a small number of trees, achieving interpretability for most samples while maintaining state\-of\-the\-art accuracy\. We introduce Multistage Defer Trees: a sequence of sparse decision trees that each make predictions for most samples, while deferring a small proportion to the next tree in the sequence or, ultimately, to a black box\. We demonstrate that we can train this model class to match the performance of complex tree\-based ensembles while routing most samples through only one or a small number of sparse decision trees\. We discuss a range of techniques for training these models while maintaining simplicity\. Our method expands the accuracy\-\-interpretability frontier in settings where single\-tree methods remain insufficient, demonstrating that even when complex models are necessary, they need not be fully opaque\.

## Interpretable Multiway\-Split Trees

**Authors:** Bo Chi; Yulin Zhang; Chudi Zhong; Cynthia Rudin

**ID:** 155490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5CCv49ib3F>) | [PDF](<https://openreview.net/pdf?id=5CCv49ib3F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155490>)

Decision tree optimization is fundamental to interpretable machine learning, yet most tree learning algorithms are restricted to binary splits\. This restriction can produce unnecessarily deep trees when the underlying decision logic is naturally multi\-valued\. Multiway\-split trees address this, but finding sparse yet accurate ones is more challenging, as the number of possible partitions at each node grows combinatorially with the number of feature bins\. We introduce SPLINTER \(SParse Lookahead for Interpretable N\-way Trees by Eliminative Ranking\), a dynamic programming and branch\-and\-bound\-based framework that combines efficient candidate generation with pruning bounds to find sparse, accurate multiway\-split trees\. Our empirical results show that our methods produce trees that achieve higher accuracy at a greater decision sparsity \(shorter path lengths\) than greedy multiway and near\-optimal binary\-split tree baselines, while remaining practical to train\. We further extend the framework to approximate the Rashomon set of near\-optimal multiway\-split trees, allowing users to inspect multiple sparse and accurate alternatives\.

## Compressing Collections of Trees with Decision Equivalence

**Authors:** Hayden McTavish; Jon Donnelly; Margo Seltzer; Cynthia Rudin

**ID:** 150720 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fwHieiqwl7>) | [PDF](<https://openreview.net/pdf?id=fwHieiqwl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150720>)

Decision trees with binary leaves are fundamental building blocks in classical machine learning\. While individual trees can be used as strong interpretable classifiers, they frequently serve as members of large collections instead: primarily as components of powerful ensembles, but also as one of the few model classes for which the entire set of near\-optimal models \(the Rashomon set\) can be analyzed\. Both types of collections are often more complex than necessary, because there are many decision tree representations for the same decision boundary, imposing unnecessary computational costs in ensembles and complicating theoretical work on Rashomon sets\. We propose methods to reduce collections of trees to a subset representing each unique decision boundary in the collection, with each tree in its sparsest equivalent form\. In so doing, we improve the scalability of removing provably redundant classifiers in a Rashomon set\. We also compress many shallow Adaboost ensembles by &gt;15\\% of their total number of leaves, while exactly preserving the models' decisions and probability estimates on any possible observation\. These methods allow practitioners to run more efficient computations over compressed collections of trees, and remove arbitrary complexity when analyzing and understanding them\.

## The Geometric Wall: Manifold Structure Predicts Layerwise Sparse Autoencoder Scaling Laws

**Authors:** Eslam Zaher; Maciej Trzaskowski; Quan Nguyen; Fred Roosta

**ID:** 155185 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7eqIUZyAMz>) | [PDF](<https://openreview.net/pdf?id=7eqIUZyAMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155185>)

Sparse autoencoders \(SAEs\) operationalise the linear representation hypothesis: they reconstruct model activations as sparse linear combinations of interpretable dictionary atoms, on the implicit assumption that activation space is well approximated by a globally linear structure\. Their reconstruction error varies sharply across layers in ways that existing scaling laws, fitted at single layers, do not explain\. We argue that this variation is the empirical trace of a geometric mismatch: where the activation manifold is curved and its intrinsic dimension varies across layers, no sparse linear dictionary can match it uniformly, and the SAE's width\-sparsity scaling becomes a layer\-dependent function of manifold structure rather than a single universal law\. We conduct the first cross\-layer SAE scaling study, fitting and regressing on 844 residual\-stream Gemma Scope SAE checkpoints across 68 layers of Gemma 2 2B and 9B\. Stage 1 fits a per\-layer scaling\-law surface; Stage 2 regresses the fitted parameters and the derived per\-layer width exponents on four layerwise geometric summaries\. We find that manifold geometry predicts the per\-layer width exponent in both models, and that the same regression coefficients learnt on one model predict the other model's per\-layer exponents under cross\-model transfer, indicating a transferable geometric law\. At the showcase layers where richer width grids permit identification of the asymptotic floor, we find that the fitted floor tracks the layerwise geometric ordering: higher curvature and intrinsic dimension correspond to higher floor, consistent with the irreducible second\-order residual that any sparse linear approximation of a curved manifold must leave behind\. SAEs thus encounter not a finite\-resource ceiling but a geometry\-dependent wall, set by the manifold they are trying to reconstruct\.

## User Embeddings are Superpositions of Interpretable Behavioral Modes

**Authors:** Jonathan Kozaczuk; Zheng Dong; Noyan Evirgen; Keivan Majidi; Eddie K Ng; Chris Porter; Qi Zhao; Jia Geng; Changmao Li; Brandon Feng

**ID:** 155845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2T4hO6DOUD>) | [PDF](<https://openreview.net/pdf?id=2T4hO6DOUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155845>)

User embeddings are central components of modern recommendation, personalization, and behavioral modeling systems\. Though these embeddings can compactly encode rich behavioral information, they are inherently dense and opaque, limiting interpretability\. To address this gap, we show that user embeddings can be understood as sparse superpositions of interpretable behavioral modes\. This structure is directly predicted by generative models of user behavior for linear embeddings and extends approximately to transformer representations by the superposition hypothesis\. Superimposed modes can naturally be recovered by sparse dictionary learning methods, and recovered modes can be automatically named and queried in natural language\. On synthetic data with known ground\-truth modes, sparse autoencoders \(SAEs\) outperform classical sparse baselines on mode recovery and produce more monosemantic latents, even when the number of modes exceeds the embedding dimension\. Applied to both classical \(SVD on open e\-commerce\) and transformer\-based \(SASRec/BERT4Rec on MovieLens 1M\) user embeddings, the recovered SAE dictionaries are near\-orthogonal, and their natural\-language labels enable zero\-shot audience retrieval over embeddings never trained on text\. At matched sparsity, SAE decompositions produce more behaviorally distinct features than classical sparse baselines, with retrieval accuracy comparable to both classical sparse methods and text\-embedding baselines and more diverse audience characterizations\. The framework is post\-hoc and model\-agnostic, requiring no modification to the upstream embedding system\.

## Generalized Priority\-Aware Shapley Value

**Authors:** Kiljae Lee; Ziqi Liu; Weijing Tang; Yuan Zhang

**ID:** 152117 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VPwZ5z3kGM>) | [PDF](<https://openreview.net/pdf?id=VPwZ5z3kGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152117>)

Shapley value and its priority\-aware extensions are widely used for valuation in machine learning, but existing methods require pairwise priority to be binary and acyclic, a restriction spectacularly violated in real\-data examples such as aggregated human preferences and multi\-criterion comparisons\. We introduce the generalized priority\-aware Shapley value \(GPASV\), a random order value defined on arbitrary directed weighted priority graphs, in which pairwise edges penalize rather than forbid order violations\. GPASV covers a range of classical models as boundary cases\. We establish GPASV through an axiomatic characterization, develop the associated computational methods, and introduce a priority sweeping diagnostic extending PASV's\. We apply GPASV to LLM ensemble valuation on the cyclic Chatbot Arena preference graph, illustrating that priority\-aware valuation is not a one\-button operation: different balances of pairwise graph priority versus individual soft priority produce substantively different valuations of the same data\.

## Efficient bias mitigation in T2I diffusion models using Concept Graphs

**Authors:** Mansi \-; Avinash Kori; Francesco Leofante

**ID:** 148742 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vOSMBUB46a>) | [PDF](<https://openreview.net/pdf?id=vOSMBUB46a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148742>)

Text\-to\-Image diffusion models often propagate harmful bias inherited from the training data\. Existing bias mitigation techniques either intervene only at the text encoder or provide inference\-time guidance, often leading to generations that collapse into semantically incoherent outputs\. To address these limitations, we introduce CO\-ALIGN \(Concept Ontology Alignment\), a novel bias mitigation approach based on concept\-graph alignment which operates on the model's internal concept ontology\. By aligning concepts within the text encoder and denoiser, CO\-ALIGN achieves significant bias reduction while preserving generative integrity\. We demonstrate the effectiveness of concept graph alignment in three paradigms\- text\-encoders, denoisers, and joint text\-denoiser ontology alignment\. CO\-ALIGN outperforms outperforms the state of the art, improving fairness by 30\\%, $\\Delta FID=11\.4$ in image quality, 2\.8\\% in image fidelity, all while reducing semantically incoherent outputs by 88\\%\. Beyond bias mitigation, we show that CO\-ALIGN benefits other downstream tasks as well\. In particular, our experiments demonstrate that better\-aligned internal ontologies enhance concept unlearning robustness across multiple unlearning techniques\.

## ScopeSAE: Model\-Scope Feature Discovery with Interpretable Layer Selection

**Authors:** Qingwen Zeng; Craig Jin; Shuyu Meng; Linghan Huang; Jiayi Zhang; Chenglin Wu; Ling Chen; Huaming Chen

**ID:** 153114 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnmH2t52Uc>) | [PDF](<https://openreview.net/pdf?id=NnmH2t52Uc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153114>)

Sparse autoencoders \(SAEs\) are a central tool in mechanistic interpretability\. However, existing SAEs are primarily trained per layer\. The modeling subspace is therefore fixed by layer identity, independent of which token\-layer states actually drive each prediction\. We argue that this constraint contributes to several limitations observed in layer\-wise SAEs, including low feature utilization, high dictionary redundancy, and features that lack direct behavioral grounding\. In this paper, we propose ScopeSAE, which selects the modeling subspace per token by attributing each prediction to its most influential token\-layer state via normalized gradient\-based attribution, and learns features over the resulting prediction\-relevant subspace\. Empirically, ScopeSAE yields an effect we term reconstruction\-better\-than\-original\. Written\-back reconstructions of the SAE produce lower next\-token cross\-entropy than the original activations, an outcome that, to our knowledge, has not previously been reported for SAEs and that inverts the usual reconstruction\-fidelity trade\-off\. Through interventional analyses and a KL fine\-tuning counter\-experiment, we show that this effect is attributable to ScopeSAE's prediction\-relevant subspace itself rather than to architectural changes\. ScopeSAE further improves effective feature count, interpretability, utilization, and dictionary redundancy over existing layer\-based baselines, suggesting that choosing the SAE modeling subspace by predictive relevance leads to more useful and behaviorally meaningful features\.

## Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI

**Authors:** Gizem Karagoz; Tanir Özçelebi; Nirvana Meratnia

**ID:** 139846 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0x8H3vwcGg>) | [PDF](<https://openreview.net/pdf?id=0x8H3vwcGg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139846>)

Explainable AI \(XAI\) evaluation fundamentally requires human\-centered evaluation, assessing whether explanations align with human reasoning and expert knowledge\. However, such evaluations often require expert\-driven manual validation and are difficult to scale, leading to the widespread use of alignment\-based metrics, where attribution maps are compared against predefined ground\-truth \(GT\) representations\. Despite their popularity, alignment evaluations are implicitly bias towards multiple design choices made during the evaluation process, for example GT representations, metric families, metric formulations \(soft vs\.\\ hard\), and thresholding strategies\. In this paper, we formalize alignment evaluation as a structured evaluation configuration space through which the influence of these design choices can be systematically analyzed\. We further introduce a structured alignment evaluation framework that models interactions between XAI methods, GT representations, metric families, metric formulations, and thresholding strategies across 2D and 3D synthetic and real\-world datasets\. In addition, we propose a novel taxonomy of XAI output behavior based on local entropy and boundary mass ratio, enabling structured characterization of attribution patterns for alignment evaluation\.  Our experiments reveal systematic flows\(triples of XAI\-GT\-metric configurations\), showing that alignment outcomes provide distinct behavior patterns under certain configurations, such as soft/hard metric implementations\.  We further observe varying levels of threshold sensitivity across metric families and attribution structures\. These findings demonstrate that alignment evaluation cannot be treated as a fixed or invariant measure of explanation quality, and provide practical guidance for designing more reliable and behavior\-aware XAI evaluation protocols\.

## Sanity Checks for Sparse Autoencoders: Do SAEs Beat Random Baselines?

**Authors:** Anton Korznikov; Andrey V Galichin; Alexey Dontsov; Oleg Rogov; Ivan Oseledets; Elena Tutubalina

**ID:** 139059 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nWEGPx5sz8>) | [PDF](<https://openreview.net/pdf?id=nWEGPx5sz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139059>)

Sparse Autoencoders \(SAEs\) have emerged as a promising tool for interpreting neural networks by decomposing their activations into sparse sets of human\-interpretable features\. Despite much excitement, a growing number of negative results in downstream tasks casts doubt on whether SAEs recover meaningful features\. To directly investigate this, we perform two complementary evaluations\. On a synthetic setup with known ground‑truth features, we demonstrate that three out of four state‑of‑the‑art SAE architectures recover only 7–9\\% of true features despite achieving around 71\\% explained variance, showing that strong reconstruction alone is insufficient to guarantee meaningful feature recovery\. To evaluate SAEs on real activations, we introduce three baselines that constrain SAE feature directions or their activation patterns to random values\. Through extensive experiments across multiple SAE architectures, we show that our baselines match fully\-trained SAEs in interpretability \(0\.87 vs 0\.90\), sparse probing \(0\.69 vs 0\.72\), and causal editing \(0\.73 vs 0\.72\)\. These results show that current evaluation metrics are insufficient to certify that SAEs have learned meaningful features, and we offer our baselines as a reusable protocol for future SAE evaluation\.

## Measuring What Matters: Synthetic Benchmarks for Concept Bottleneck Models

**Authors:** Julian Skirzynski; Harry Cheon; Shreyas Kadekodi; Meredith Stewart; Berk Ustun

**ID:** 138890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yX9HoznzlL>) | [PDF](<https://openreview.net/pdf?id=yX9HoznzlL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138890>)

Concept bottleneck models predict outcomes from high\-level concepts detected in inputs\. Although concepts provide a simple way to reap benefits from interpretability, very few datasets include concept labels\. This limits researchers' ability to determine which problems are suitable for these models, isolate the factors that drive their performance or lead to failures, or uncover which algorithms perform well\. In this paper, we develop synthetic benchmarks for concept\-bottleneck models, focusing on their two main use cases: decision support, in which models assist humans in making better decisions, and automation, in which models handle routine tasks without supervision\. Our benchmarks can generate labeled datasets while controlling for properties that affect performance, including data modality, concept choice, annotation quality, and completeness\. We demonstrate how the benchmarks can be used to evaluate representative classes of concept bottleneck models\. Our demonstrations show how the benchmarks can diagnose failure modes and guide follow\-up testing\.

## Inside the Loop: A Mechanistic Study of Weight\-Tied Transformers on Depth\-Bound Algorithmic Tasks

**Authors:** Magnus Sesodia; Philip Torr; Christian Schroeder de Witt

**ID:** 150577 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8PkVhb8VI>) | [PDF](<https://openreview.net/pdf?id=h8PkVhb8VI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150577>)

Solving algorithmic tasks that involve many sequential steps typically requires scaling up transformer depth or chain\-of\-thought length, incurring unfavorable parameter and inference\-compute costs, respectively, as tasks deepen\. Looped transformers promise to recover that depth at a fraction of the cost by reusing a single block across iterations, but it remains unclear how the loop actually performs its computation, or whether it merely simulates a deeper untied stack\. We test this on \\emph\{directed permutation traversal\} \(\\dePo\), a synthetic task in the physics\-of\-LMs lineage in which solving an $H$\-hop query requires following $H$ pointers along a fixed permutation of $N\{=\}16$ entities, with $H$ up to $15$\. We demonstrate that, above a minimum effective depth, a $3\.2$\\,M\-parameter looped transformer trained with hop length sampled uniformly per batch traverses all $15$ hops across all seeds, while a $25\.8$\\,M\-parameter fixed\-depth baseline at the same effective depth fails to exceed three hops; weight tying, not effective depth, predicts capability\. In the same models, linear probes on the residual stream uncover a clean \\emph\{staircase\}: at iteration $k$ the stream linearly decodes hop $k$, with slope exactly one hop per iteration, and each hop stays decodable for roughly two further iterations before being overwritten\. The model's own logit lens, applied through the trained final layers, traces the same one\-hop\-per\-iteration ordering at lower amplitude\. Taken together, our results recast looped transformers as iterative program learners: weight tying forces the optimizer to discover a single per\-iteration update rule, and that rule corresponds to one algorithmic step of the underlying task\. Code is available at \\url\{https://anonymous\.4open\.science/r/insidetheloop\-3ED0\}\.

## From Post\-Hoc to Ante\-Hoc: Consistently Explainable Semi\-Supervised Time Series Classification

**Authors:** Viet\-Hung Tran; Zichi Zhang; Ngoc Phu Doan; Xuan Hoang Nguyen; Phi Hung Nguyen; Yimeng An; Peixin Li; Huynh Thi Khanh Chi; Hans Vandierendonck; Ira Assent; Thai Son Mai

**ID:** 154078 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GMZeOQcKOW>) | [PDF](<https://openreview.net/pdf?id=GMZeOQcKOW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154078>)

Semi\-Supervised Time Series Classification \(SS\-TSC\) with Deep Neural Networks \(DNNs\) achieves strong accuracy by leveraging unlabeled data, yet the resulting models remain black boxes that offer no insight into which features drive each prediction\. Existing post\-hoc explanation methods for TSC can identify important features but provide no guarantee that the model genuinely relies on them, while ante\-hoc approaches impose architectural constraints that limit flexibility in existing model usages\. Neither setting explore the semi\-supervised regime, where limited labels can affect explainability\. We propose \\textbf\{Sensory Gating\}, the first SS\-TSC framework that simultaneously bridges post\-hoc attribution and ante\-hoc explanation through a four\-stage pipeline: \(i\) a base classifier is trained with our proposed Forecasting Joint\-Embedding Predictive Architecture \(F\-JEPA\) auxiliary objective;  \(ii\) post\-hoc attribution maps are converted into per\-instance binary masks via greedy selection of sufficient features;  \(iii\) a lightweight \\textbf\{Sensory Gate\} amortizes these masks through Binary Cross Entropy \(BCE\) supervision with data\-driven threshold calibration; and \(iv\) a knowledge distillation stage to provide an explainable SS\-TSC student model that operates on gated \(masked\) input, while consistently reproduces the original black box teacher \(F\-JEPA\)'s predictions\. We validate our framework on eight datasets across four label ratios with five seeds per configuration\. F\-JEPA achieves better performance compared to recent state\-of\-the\-art \(SOTA\) semi\-supervised TSC methods, while the sensory gate reduces the fraction of features the classifier requires to 20\-\-45\\% with competitive accuracy\. On MIT\-BIH, where ground\-truth saliency annotations are available, the gate's selected features align with domain\-relevant regions while classification performance remains competitive with the ungated baseline at 10\-\-20\\% kept ratio\.

## The Commit\-Abstain Circuit: Why Language Models Hallucinate Instead of Abstaining

**Authors:** Vy Nguyen; Ziqi Xu; Jeffrey Chan; Estrid He; Feng Xia; Renqiang Luo; Erik Cambria; Xiuzhen Zhang

**ID:** 155556 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4gAoZ2eJTM>) | [PDF](<https://openreview.net/pdf?id=4gAoZ2eJTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155556>)

Language models \(LMs\) often hallucinate by committing to substantive answers when they should abstain\. Existing methods detect hallucinations or guide abstention, but leave open how models internally decide to commit or abstain\. We study this decision through mechanistic analysis, framing a class of hallucination as unsupported commitment: the model commits despite exhibiting signals of unanswerability\. Using causal gating, we identify a Commit\-Abstain Circuit \(CAC\), a sparse subset of attention heads and MLP sublayers that causally contribute to this decision\. Across ten LMs \(3B\-14B\) from five families and three benchmarks, the CAC exhibits a recurring accumulate\-yet\-undercorrect pattern: commitment\-promoting components build up commitment in earlier layers, while abstention\-promoting components act later as corrective signals that are often insufficient to overturn the accumulated commitment\. Building on this finding, a lightweight policy trained on CAC activations improves decision accuracy by 12\.2 points over the model's intrinsic commit\-abstain margin, reduces false abstentions by 2\.5 times, transfers to unseen benchmarks, and extends to larger models \(27B\-35B\)\. The CAC is both diagnostic, clarifying how models overcommit, and practical, enabling improved abstention decisions\. Code is provided in the supplementary material\.

## AdKnob: Ad Intensity Control and Labeling for LLM\-Native Advertising

**Authors:** Woo Jae Kim; Seongho Keum; Joonsung Jeon; Suhyeon Ha; Sooel Son; Sung\-eui Yoon

**ID:** 150097 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kilXcw3jhS>) | [PDF](<https://openreview.net/pdf?id=kilXcw3jhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150097>)

Large language model \(LLM\)\-native advertising has emerged as a viable monetization channel as LLM service providers seek sustainable revenue streams\. However, integrating native ads into LLM responses introduces two largely understudied challenges: \(1\) controlling ad intensity\-\-\-how prominently advertising content appears\-\-\-and \(2\) ad labeling\-\-\-identifying which segments of the generated text constitute advertising\. We propose AdKnob, a framework jointly addressing both challenges\. For ad intensity control, we introduce new ad control tokens without pretrained semantic associations and align the model via direct preference optimization to generate ads at each desired level\. For ad labeling, we propose an attention rollout\-based attribution mechanism that identifies ad segments by tracing their attribution to input ad\-related tokens, requiring no additional inference cost\. We further construct MI\-KnobSet, the first multi\-level ad intensity preference dataset for LLM\-native ads\. Experiments across six LLMs and human evaluations show that AdKnob achieves uniformly spaced ad intensities where baselines collapse to a narrow range, achieves the highest ad labeling accuracy while being over 500$\\times$ faster than the strongest baseline, and is preferred over baselines by human evaluators up to 89\.6\\% of the time\. Code and data will be publicly available\.

## Watermarking Should Be Treated as a Monitoring Primitive

**Authors:** Toluwani Aremu; Jie Zhang; Nils Lukas

**ID:** 140006 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uNtSWQW0z5>) | [PDF](<https://openreview.net/pdf?id=uNtSWQW0z5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140006>)

Watermarking is widely proposed for provenance, attribution, and safety monitoring in generative models\. We argue that it should be evaluated and governed as a monitoring primitive through two complementary observer models\. Internal observers use detector or decoder access and entity mappings for attribution; external observers learn entity\-specific signals from labeled outputs without keys or detectors\. With persistent entity bindings and reliable inference, either pathway can support monitoring\. We show that even zero\-bit watermarking supports internal attribution under per\-entity multi\-key deployments without explicitly encoding identity, and demonstrate external identification in selected text and image configurations\. External exposure depends on persistent, learnable watermark structure and is not universal, while internal attribution also remains conditional on reliability and access\. These findings motivate governance of attribution access and deployment choices alongside evaluation of design\-dependent entity linkability, de\-anonymization or re\-identification, beyond per\-sample robustness\.

## Peer review should constrain evaluative authority

**Authors:** Hanrui Wang; Timo Spinde; Isabella Habereder; Chun\-Shien Lu; Isao Echizen

**ID:** 140021 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n0eZtLIdnZ>) | [PDF](<https://openreview.net/pdf?id=n0eZtLIdnZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140021>)

\*\*Our position shifts the target of peer\-review reform from reducing uncertainty through evaluator improvement or judgment aggregation to constraining evaluative authority under persistent uncertainty\.\*\*  Scientific peer review aims to assure research quality but also allocates scarce academic opportunities, such as publication in high\-impact venues\. However, the review system is under growing pressure as submissions increase while reviewer capacity, expertise, scrutiny, and incentives cannot scale accordingly\. As peer review operates under persistent evaluative uncertainty, evaluator improvement and judgment aggregation remain structurally limited\. We therefore propose authority\-constrained peer review: before a consequential judgment is released as decision\-relevant, it should withstand structured scrutiny through critique\-authority decoupling, independent secondary evaluation, contestability and reversibility, and accountability for unsupported influence\. Our aim is to prevent weakly supported judgments from entering final deliberation with the same authority as judgments that have withstood structured scrutiny, while creating incentives for reviewers to justify consequential claims more carefully\. For large\-scale computer\-science conferences, this position offers an institutional response to uneven review quality and reviewer\-assignment dependence; more broadly, it provides a governance principle for any domain where uncertain expert judgments allocate scarce academic opportunities\.

## A Theory of Spatial Continuous Attractors in Hopfield Energy Landscapes

**Authors:** Chong Li; Xiangyang Xue; Jianfeng Feng; Taiping Zeng

**ID:** 155828 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2aMmeCVNCj>) | [PDF](<https://openreview.net/pdf?id=2aMmeCVNCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155828>)

Spatial cognition requires stable neural manifolds of orientation and location that track self\-motion and sensory cues\.     Continuous attractors provide a natural dynamical principle, but learning such mechanisms that form and control manifolds with theoretical guarantees remains difficult\.   We propose Spatial Energy Attractor Learning \(SEAL\), a theory of neurodynamics learning for spatial cognition, where continuous spatial representations arise as learned low\-energy manifolds in Hopfield energy landscapes through population\-level Fourier energy learning\.   For head\-direction and grid\-cell systems, Fourier energy landscapes yield ring and torus attractors with learned normal attraction and input\-driven tangent transport\.    We prove that Fourier construction is a special case of a general Hopfield\-compatible energy extension whose autonomous dynamics preserve energy descent and whose expressive energy families approximate target attractor energies and restoring fields\.    Experiments on HD and grid\-cell populations show that the learned energies restore perturbed states to ring and torus manifolds, stabilize velocity\-driven moving bumps across multiple input regimes, and induce continuous\-attractor interactive structures with local excitation and surround inhibition\.   Together, these results provide a stable, learnable, and biologically interpretable energy\-based account of continuous spatial representation\.

## A Composite Activation Function for Learning Stable Binary Representations

**Authors:** Seokhun Park; Choeun Kim; Kwanho Lee; Sehyun Park; Insung Kong; Yongdai Kim

**ID:** 148660 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w5Om6MXAow>) | [PDF](<https://openreview.net/pdf?id=w5Om6MXAow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148660>)

Activation functions play a central role in neural networks by shaping internal representations\.  Recently, learning binary activation representations has attracted significant attention due to their advantages in computational and memory efficiency, as well as interpretability\.  However, training neural networks with Heaviside activations remains challenging, as their non\-differentiability obstructs standard gradient\-based optimization\. In this paper, we propose Heavy\-Tailed Activation Function \(HTAF\), a smooth approximation to the Heaviside function that enables stable training with gradient\-based optimization\.  We construct HTAF as a sigmoid–hyperbolic tangent composite function and theoretically show that it maintains a large gradient mass around zero inputs while exhibiting slower gradient decay in the tail regions\. We show that Spiking Neural Networks, Binary Neural Networks and Deep Heaviside neural Networks can be trained stably using HTAF with gradient\-based optimization\. Finally, we introduce Implicit Concept Bottleneck Models \(ICBM\), an interpretable image model that leverages HTAF to induce discrete feature representations\. Extensive experiments across various architectures and image datasets demonstrate that ICBM enables stable discretization while achieving prediction performance comparable to or better than standard models\.

## Diffusion\-Time Concept Manifolds: Sparse Autoencoder Groups for Interpreting Denoising Language Models

**Authors:** Pawan Kumar

**ID:** 154152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FrP1gSPL04>) | [PDF](<https://openreview.net/pdf?id=FrP1gSPL04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154152>)

Diffusion language models generate text through iterative denoising, but current interpretability tools mostly analyze static hidden states and do not explain how concept information evolves across denoising time\. We introduce DynaManifold\-SAE, a method for discovering sparse autoencoder feature groups whose activations form time\-dependent concept manifolds in masked and diffusion language models\. The method builds sparse latent codes across mask ratios, constructs candidate feature groups, and evaluates them with held\-out coordinate prediction, geodesic consistency, persistence across time, and causal interventions\. Across BERT and LLaDA, DynaManifold\-SAE reliably identifies sparse sentiment geometry that is stable across seeds and stronger than individual\-feature, PCA, random\-group, and graph\-structured baselines\. The discovered groups transfer from controlled templates to natural SST\-2 examples, indicating that they capture semantic structure rather than template artifacts\. We further show that these groups explain a denoising\-specific mechanism: they predict token reveal order and confidence growth during LLaDA unmasking, and targeted interventions alter reveal confidence and token recovery more than matched controls\. These results suggest that sparse feature manifolds provide a practical bridge between static representation geometry and the dynamics of diffusion language generation\.

## Transferring Visual Explainability from Self\-Explaining to Prediction\-Only Vision Transformers via Task Arithmetic

**Authors:** Yuya Yoshikawa; Ryotaro Shimizu; Takahiro Kawashima; Yuki Saito

**ID:** 153562 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KSFfnJEsF3>) | [PDF](<https://openreview.net/pdf?id=KSFfnJEsF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153562>)

In image classification scenarios where both prediction and explanation efficiency are required, self\-explaining models that perform both tasks in a single inference are effective\. However, for users who already have prediction\-only models, training a new self\-explaining model from scratch imposes significant costs in terms of both labeling and computation\. This study proposes a method to transfer the visual explanation capability of self\-explaining Vision Transformer \(ViT\) models learned in a source domain to prediction\-only VLM\-based ViT models in a target domain via task arithmetic, without target\-side explanation supervision\. The proposed method endows explanation capability by adding an \\emph\{explainability vector\} induced by explanation supervision in the source domain based on task arithmetic framework\. Experiments on ten diverse target datasets show that a single explainability vector learned on ImageNet\-1k augmented with patch\-level explanation supervision transfers consistently, improving explanation quality while largely preserving classification accuracy\. Beyond the transfer itself, we further investigate whether transfer success can be anticipated \\emph\{a priori\} from model\-internal features alone \(without target\-side explanation supervision\), and find that a small set of such features carries non\-trivial signal about the transfer outcome\.

## ProDG: Prototypes for Data\-Free Generative Post\-Hoc Explainability

**Authors:** Piotr Borycki; Magdalena Trędowicz; Jacek Tabor; Łukasz Struski; Przemysław Spurek

**ID:** 148874 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uX1D8oZXkw>) | [PDF](<https://openreview.net/pdf?id=uX1D8oZXkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148874>)

Ante\-hoc interpretability methods based on prototypes provide highly accurate explanations by utilizing the intuitive "this looks like that" reasoning paradigm\. On the other hand, post\-hoc models can explain predictions for a single image without relying on an underlying dataset or requiring costly neural network retraining\. Recent approaches successfully solve the retraining problem for prototype\-based networks\. However, they still face a fundamental limitation: they require access to a subset of data \(e\.g\., a test or validation set\) to search for and extract the visual prototypes\. In this paper, we address this issue and introduce ProDG: Data\-Free Generative Prototypes for Post\-Hoc Explainability, a novel framework that leverages generative models to synthesize pure, high\-fidelity prototypes directly from the frozen model's weights, completely eliminating the dependency on any external data\. By establishing this new frontier in Data\-Free XAI, DGP unlocks robust visual interpretability for privacy\-sensitive domains, where original data is strictly restricted or fundamentally inaccessible\.

## To Call or Not to Call: Diagnosing Intrinsic Over\-Calling Bias in LLM Agents

**Authors:** Wei Shi; Ziheng Peng; Sihang Li; Xiting Wang; Xiang Wang; Mengnan Du; Na Zou

**ID:** 151332 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bKHBOZlhBr>) | [PDF](<https://openreview.net/pdf?id=bKHBOZlhBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151332>)

LLM agents exhibit a consistent tendency to over\-call, invoking tools even in situations where none is needed\. On the When2Call benchmark, six models from three families show high call accuracy but much lower no\-call accuracy, leaving overall accuracy in the 55%\-\-70% range\. We trace this to an Intrinsic Bias Hypothesis \(\*\*IBH\*\*\): the call/no\-call decision mapping carries an activation\-independent CALL offset, so the model favors CALL even at activation parity\. Using Sparse Autoencoders \(SAEs\), we recover behavior\-aligned feature bases for the CALL/NO\_CALL decision, reduce them to a signed activation margin, and estimate the offset directly\. Across all six models, the model is decision\-neutral only when NO\_CALL activation outweighs CALL activation, consistent with IBH\. We then causally test IBH with Adaptive Margin\-Calibrated Steering \(\*\*AMCS\*\*\), a closed\-form counter\-bias shift along SAE decoder directions\. Cancelling the diagnosed offset mitigates over\-calling and improves overall accuracy with a negligible drop in call accuracy\. Our work recasts over\-calling from an empirical phenomenon into a mechanistic object amenable to causal correction\. The code is available at https://anonymous\.4open\.science/r/agent\-sae\-904F\.

## The Shape of a Program: Path Signatures for Trace\-to\-Program Induction

**Authors:** Oscar Ghanem; Bernd Finkbeiner

**ID:** 149565 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pAtl3nP8op>) | [PDF](<https://openreview.net/pdf?id=pAtl3nP8op>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149565>)

Synthesizing programs from execution traces is a fundamental challenge in algorithmic interpretability and the reverse engineering of complex systems\. We bring a rough\-path\-theoretic perspective to program induction, treating execution traces as high\-dimensional rough paths and encoding them with the path signature transform, a tool from stochastic analysis whose expected signature provably characterizes the trace distribution a program induces\. Our signature\-based trace encoder outperforms LSTM, Transformer, and Fourier baselines and remains strong with substantially less training data on two classical DSL domains\. We further observe that the trace\-to\-program pipeline is naturally \\emph\{contractive\}: it tends to produce shorter valid programs than the ground truth, which we turn into a bootstrapping procedure that surfaces redundancy in the released ground\-truth supervision without any external oracle\. Finally, signature\-based models induce a markedly more interpretable latent geometry than classical sequence models\.

## Learning in Policy Transparency Games: Wedge Structure and Adaptive Certification

**Authors:** Nguyen T Uyen; Khanh N Quoc; Duc H Nguyen; Ngoc Mai Vu; Phan Quoc Hung Mai; MINH LUONG DOAN; Trang Le Vu Quynh; Trang Pham; Nhung Duong; Tuan Do

**ID:** 152748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qcd3vQCm5h>) | [PDF](<https://openreview.net/pdf?id=Qcd3vQCm5h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152748>)

As learning agents are increasingly deployed in strategic environments, designers must choose whether to deploy transparent \(auditable, committing\) or opaque \(flexible, reactive\) policies\. We formalize this through \\emph\{Policy Transparency Games\} \(PTGs\): a two\-stage model in which each agent first chooses transparency, then plays an underlying normal\-form game\. Our central theoretical contribution is a structural reduction: for two\-player PTGs, all transparency incentives decompose into two per\-player quantities, a leader wedge $L\_i\-N\_i$ and a follower wedge $F\_i\-N\_i$, whose signs characterize every equilibrium and cleanly separate selection\-robust from selection\-dependent conclusions\. We then ask how a learning agent can discover this structure from interaction data\. External\-regret learners over the binary transparency action reach coarse correlated equilibrium, and our adaptive WEDGE\-CERTIFY algorithm attains instance\-dependent certificate complexity $\\tilde O\(\\sigma^2\(d\_0^\{\-2\}\+d\_\{10\}^\{\-2\}\+d\_\{01\}^\{\-2\}\)\)$ with matching information\-theoretic lower bounds\. The wedge representation thus determines the learnability of endogenous algorithmic transparency\.

## ChronosAlign: A Large\-Scale, Updatable Benchmark for Decomposing Temporal Alignment in LLMs

**Authors:** Sanjay Govindan; Maurice Pagnucco; Yang Song

**ID:** 139317 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xq8uri8T9Z>) | [PDF](<https://openreview.net/pdf?id=Xq8uri8T9Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139317>)

Large Language Models \(LLMs\) struggle with temporal alignment, often producing outdated time\-sensitive facts as real\-world knowledge evolves\. Yet the field's ability to measure this misalignment is itself fragile\. Existing benchmarks are static snapshots, rely on rigid templates, are small, lack provenance, conflate willingness\-to\-answer with recall, and use phrasings that newer models have likely memorised\. We argue that progress on temporal alignment is bottlenecked less by data scarcity than by evaluation design, and we contribute on both fronts\. We present ChronosAlign, a natural language, programmatically updatable dataset and evaluation framework for temporal alignment in LLMs; generated from a Wikidata and Wikipedia corpus of \~500,000 question\-answer pairs covering \~27,000 unique questions across sport, politics, and culture from 2000 to 2025\. Each question carries a Wikipedia URL and a documented update procedure, so the same evaluative claim can be re\-tested against future models without re\-authoring the benchmark\. We couple ChronosAlign with a framework focussed on three prompting modalities, explicit \(year\-anchored\), relative \("current" anchored\), and invariant \(untimed control\), whose disagreement isolates which component of temporal alignment a model fails\. We benchmark sixteen LLMs surfacing three findings: \(i\) a sharp post\-2022 decay in explicit recall even for models with later training cutoffs, \(ii\) systematic misalignment between explicit and relative recall, with some models better aligned to explicit year prompts and others to relative anchors, and \(iii\) a confounding effect of refusal behaviour\. Our generation and update code can be found at: https://github\.com/sg\-sy/ChronosAlign\. Our dataset can be found at: https://huggingface\.co/datasets/sg\-sy/ChronosAlign\.

## quanda: An Interpretability Toolkit for Training Data Attribution Evaluation

**Authors:** Dilyara Bareeva; Galip Ümit Yolcu; Anna Hedström; Niklas Schmolenski; Thomas Wiegand; Wojciech Samek; Sebastian Lapuschkin

**ID:** 139350 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V3wscK9rvx>) | [PDF](<https://openreview.net/pdf?id=V3wscK9rvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139350>)

Training data attribution \(TDA\) methods estimate the influence of individual training samples on a model's predictions, offering a principled lens for interpreting neural networks\. Despite rapid methodological progress, TDA evaluation remains scattered across papers and rarely reproducible, making fair comparison between methods challenging\. We introduce \*\*quanda\*\*, a Python toolkit that standardizes TDA evaluation\. \*\*quanda\*\* features a comprehensive collection of evaluation metrics and ready\-to\-use benchmarks spanning image classification, text classification, and language modeling, alongside a uniform interface for integrating diverse TDA implementations\. We showcase \*\*quanda\*\* through a comparative study of existing TDA methods and find that no approach excels uniformly across metrics, with clear trade\-offs between ground\-truth faithfulness and downstream task performance\. By consolidating the tooling around TDA, \*\*quanda\*\* equips the community to evaluate attribution methods rigorously and reproducibly\. The toolkit is thoroughly tested, documented, and available as an open\-source library on PyPI and at https://anonymous\.4open\.science/r/quanda\.

## Matryoshka Transcoders and Hierarchy Misalignment: When SAE Absorption Protection Does Not Transfer

**Authors:** Quoc Dat Ngo; Hung Nguyen

**ID:** 153497 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kx6IJ8I6C8>) | [PDF](<https://openreview.net/pdf?id=Kx6IJ8I6C8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153497>)

Sparse autoencoders decompose activations into sparse, interpretable features and have become a central tool for mechanistic interpretability\. Transcoders extend this approach from representation reconstruction to computation prediction by mapping MLP inputs to MLP outputs, making them attractive for circuit\-level analysis\. We ask whether a prominent sparse\-autoencoder reliability fix, Matryoshka nested\-prefix training, transfers to this two\-hook setting\. In sparse autoencoders, Matryoshka training improves absorption behavior by encouraging broad features to appear in early dictionary prefixes\. In transcoders, we find that this protection does not transfer automatically\. Across Gemma\-2\-2B MLP transcoders trained under a matched recipe, Matryoshka models form genuine prefix hierarchies, with reconstruction improving as later groups are added, but they do not inherit the absorption advantage observed for sparse autoencoders\. BatchTopK achieves lower full absorption, lower FVU, and higher first\-letter F1@1 in the canonical 16k comparison\. Bridge controls recover the expected Matryoshka advantage when the cross\-space map is removed, showing that the failure is specific to predicting MLP outputs from MLP inputs\. We identify the mechanism as hierarchy misalignment\. Prefix losses reward covariance with the reconstruction target, so early transcoder groups prioritize target\-predictive output geometry rather than broad source\-space semantic parents\. These results show that hierarchical sparse\-dictionary objectives do not preserve interpretability properties by default\. For dictionaries that map between activation spaces, the key question is not whether a hierarchy forms, but what geometry that hierarchy is trained to organize\.

## Where Reusable Computation Becomes Detectable: Solution\-Frame Path Triage for Modular\-Arithmetic Grokking

**Authors:** Ruian Lei; Ruoxi Jiang; Marley M Vellasco; M\. Tanveer; Zenglin Xu

**ID:** 149239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtabRRmgxe>) | [PDF](<https://openreview.net/pdf?id=rtabRRmgxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149239>)

Mechanistic studies of grokking often begin after an endpoint circuit has been identified\. We study the preceding retrospective triage problem: given a solved final checkpoint and a long saved trajectory, which path and window should be inspected first? We propose solution\-frame path triage\. The final checkpoint fixes a solution frame; earlier checkpoints are then scored path by path\. The Geometric Coherence Score \(GCS\) measures coherence in this procedure: it asks whether neighboring inputs in the final frame undergo similar local Jacobian transformations through the attention, MLP, or full block measurement maps\. Centered Kernel Alignment \(CKA\) and $L\_2$ distance to the final path state provide the complementary proximity scores\. Across 104 modular arithmetic Transformer runs, GCS reveals a repeatable path schedule that simple norm and dimensionality summaries miss: attention coherence rises near grokking and often turns over, while MLP maps diversify and later reconverge\. After selection, held\-out checks show that the resulting windows are enriched for accuracy and algebraic changes, align with Fourier progress on modular addition, and identify attention\-to\-MLP interface states with high replacement cost\. The method returns a short list of path/window hypotheses for endpoint analysis\. It is retrospective by design: the final checkpoint is part of the procedure\.

## A Sparse Low\-Rank Biclique Decomposition for Graphs

**Authors:** Antoine Vialle; Sergei Gerasimov; Aref Einizade; Antonio Ortega; Fragkiskos Malliaros; Jhony H\. Giraldo

**ID:** 152969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P0bxYJIY84>) | [PDF](<https://openreview.net/pdf?id=P0bxYJIY84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152969>)

Low\-rank plus sparse decompositions, such as robust PCA, typically model the low\-rank component as dense and the sparse component as corruption\. This viewpoint is poorly suited to graph adjacency matrices, where sparsity is structural and dense low\-rank factors destroy the combinatorial and computational properties of the graph\. We propose signed biclique decomposition \(SBD\), a sparse low\-rank decomposition for integer\-weighted graphs that represents the structured component as a sum of sparse signed binary rank\-one factors, together with a sparse signed residual\. The resulting representation remains discrete, interpretable, sparse, and compatible with standard linear algebra\. We formulate fixed\-rank and greedy SBD objectives and derive a gain\-based greedy algorithm with theoretical guarantees\. Empirically, SBD recovers block structure in noisy graphs, while its factorized representation enables efficient sparse matrix\-matrix multiplication \(SpMM\)\. On real graphs with strong shared\-neighborhood structure, SBD achieves compression factors above $10$ and SpMM speedups up to $6\\times$ over cuSPARSE, suggesting a practical alternative to dense low\-rank decompositions for graphs\.

## Inferring Computational Structure from Neural Recordings with Gain\-Modulated Linear Dynamical Systems

**Authors:** Yiteng Zhang; Zixiong Wang; Zhengze Wang; Ke Chen; Xingyu Li; Bin Min

**ID:** 153994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H0jkombMst>) | [PDF](<https://openreview.net/pdf?id=H0jkombMst>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153994>)

Latent dynamical models can accurately fit neural population activity, yet accurate activity fitting alone does not guarantee mechanistic validity\. Using synthetic benchmarks, we show that even well\-fitted low\-rank RNNs can yield misleading circuit interpretations when the prescribed activation function deviates from the ground\-truth one\. To address this limitation, we introduce gain\-modulated linear dynamical systems \(gmLDS\), which decompose latent dynamics into a state\-dependent, unit\-wise gain and a static low\-rank connectivity matrix, allowing the model to adapt to diverse nonlinear responses without assuming a fixed activation function\. Across multiple synthetic benchmarks, gmLDS accurately recovers the local effective connectivity of the underlying model, thereby reconstructing the linearized dynamics along neural trajectories\. Applied to neural recordings from perceptual and context\-dependent decision\-making tasks, gmLDS yields interpretable hypotheses about dynamical structure, including attractor structure in perceptual decision\-making and context\-dependent selection mechanisms\. Together, these results support gmLDS as an effective approach for inferring computational structure from neural recordings\.

## Local–Global Sparse Autoencoders for Multiscale Interpretability in Vision Models

**Authors:** Itay Benou; Tammy Riklin Raviv

**ID:** 151172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cS2IkMjMnL>) | [PDF](<https://openreview.net/pdf?id=cS2IkMjMnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151172>)

Visual understanding is inherently hierarchical as high\-level semantic concepts are composed of fine\-grained, spatially localized components\. Yet existing interpretability methods typically operate at a single scale, either local or global, leaving a critical gap in understanding the compositional structure between them\. Recovering this structure without supervision is particularly challenging, as the correspondence between local and global concepts is latent, varies across samples, and may appear only through inconsistent or partial patterns\. To address this challenge, we introduce Local\-Global Sparse Autoencoders \(LG\-SAE\), an unsupervised framework for multiscale interpretability in vision models\. The core innovation of LG\-SAE is a learned compositional bridge  that explicitly captures the relationships between local and global concepts\. By jointly decomposing patch\-level and image\-level embeddings, LG\-SAE induces a sparse interpretable graph that reveals how each high\-level semantic concept is supported by a small set of spatially grounded components\. Building on this representation, we present a unified framework for discovering local\-global concept relationships, constructing multiscale Concept Bottleneck Models, spatially aware concept naming, and model steering through localized concept edits\. Extensive evaluations show that LG\-SAE: \(i\) captures meaningful cross\-scale feature relations; \(ii\) enables high\-quality spatial grounding without compromising downstream accuracy; and \(iii\) provides interpretable model explanations, further validated by a user study\.

## What Does a Sparse Autoencoder Feature Do? A Weight\-Based Account

**Authors:** Yiting Liu; Zhihong Deng

**ID:** 149772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nQXn6YRf2P>) | [PDF](<https://openreview.net/pdf?id=nQXn6YRf2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149772>)

Sparse autoencoders \(SAEs\) have emerged as a powerful technique for decomposing language model representations into interpretable features\. Current interpretation pipelines infer feature semantics from activation patterns, implicitly assuming every feature has a semantic explanation while overlooking the computational roles features inherit from the SAE training objective\. We introduce a weight\-based interpretation framework that requires no activation data and grounds claims causally through targeted feature\-ablation interventions\. Across Gemma\-2 and Llama\-3\.1, three depth\-dependent signatures show that SAE features inherit the base model's geometry: semantic features form a U\-shape under tied embeddings but bifurcate when untied, attention participation peaks mid\-layer, and the two roles couple oppositely for input\- vs\. output\-oriented features\. This weight\-based view supplies the causal half missing from activation\-based interpretability\.

## How Do Agentic LLMs Decide to Call Tools? A Scaffold Default Controlled by Suppression

**Authors:** XIJIE GONG; Tingxu Han; Jiahao Zhang; Yuxin Cao; Ziqi Ding; Hanqi Yan; Youcheng Sun; Lijie Hu

**ID:** 148769 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vBXDOH5EqA>) | [PDF](<https://openreview.net/pdf?id=vBXDOH5EqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148769>)

Tool calling, the ability to invoke external tools on demand, is central to agentic LLMs\. Within an agent, the LLM decides whether and when to use these tools, greatly extending the agent’s capability boundaries\. However, the mechanism that determines whether a model calls a tool or responds directly remains poorly understood\. Agentic prompts are often long and heavily scaffolded, combining role instructions, tool schemas, format templates, and user requests across thousands of tokens\. This creates a noisy and highly entangled context that makes it difficult to identify a single controllable variable for mechanistic analysis\.To obtain such a variable, we propose a method to convert complex agentic prompts into minimal contrastive pairs, in which a single request verb determines the tool\-call decision\. Replacing an execution verb, such as \\textit\{write\}, with an analysis verb, such as \\textit\{discuss\}, reliably flips whether the model chooses to call a tool\. This suggests that the choice is mediated by a compact internal state\. 1,500 paired prompts across Python, Java, and C\+\+, where 1,200 are for mechanistic analysis, and 300 are held out for evaluation, are constructed\.We trace the tool\-calling decision to a single vector, $\\mu\_\\Delta$, and show that it is both causally necessary and sufficient\.Transcoder analysis reveals how this vector forms: the scaffold makes tool calling the default, while analysis verbs suppress this default by activating features that signal no tool is needed\. Execution verbs activate no analogous tool\-use features, so $\\mu\_\\Delta$ reflects the scaffold\-induced default rather than a positive execution\-verb signal\. Downstream attention and MLP layers then read out this vector into the first output token\. The mechanism replicates across diverse model families\. Our code is available at \\url\{https://anonymous\.4open\.science/r/MI4ToolCalling\}\.

## Position\-aware eXplanation: A Model\-Agnostic Framework for Positional Attributions

**Authors:** Chaehyeon Kim; Gary Weissman; Eric Wong

**ID:** 155520 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4zYGP89YC6>) | [PDF](<https://openreview.net/pdf?id=4zYGP89YC6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155520>)

Transformer predictions depend on positional embeddings, which are known to produce biases such as first\- and last\-token dominance\. However, feature attribution methods implicitly entangle influence from positions with features into a single opaque importance score per feature\. To uncover these positional effects, we propose Position\-aware eXplanation \(PaX\), a model\-agnostic framework that transforms standard attribution methods to jointly produce feature and position attributions\. PaX additionally produces counterfactual positional explanations: actionable scores quantifying how the prediction changes when a feature is relocated\. We use PaX to generalize perturbation\-, gradient\-, and boundary\-based attribution methods across vision, language, and clinical time\-series benchmarks with no architectural changes\. We demonstrate that separating positional effects improves both feature and position attribution faithfulness by 17\.5% / 55% and 16\.8% / 43%, respectively \(insertion / deletion\)\. In a case study on sepsis forecasting, we find that PaX recovers clinically validated bedside signals that standard attributions miss\.

## Attributions All the Way Down? The Metagame of Interpretability

**Authors:** Hubert Baniecki; Przemyslaw Prem Biecek; Fabian Fumagalli

**ID:** 148384 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yHeBdE6C4F>) | [PDF](<https://openreview.net/pdf?id=yHeBdE6C4F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148384>)

We introduce the metagame, a conceptual framework for quantifying second\-order interaction effects of model explanations\. For any first\-order attribution $\\phi\(f\)$ explaining a model $f$, we measure the directional influence of feature $j$ on the attribution of feature $i$, denoted as meta\-attribution $\\varphi\_\{j \\to i\}\(f\)$, by treating the attribution method itself as a cooperative game and computing its Shapley value\. Theoretically, we prove that attributions hierarchically decompose into meta\-attributions, and establish these as directional extensions of existing interaction indices\. Empirically, we demonstrate that the metagame delivers insights across diverse interpretability applications: \(i\) quantifying token interactions in instruction\-tuned language models, \(ii\) explaining cross\-modal similarity in vision\-language encoders, and \(iii\) interpreting text\-to\-image concepts in multimodal diffusion transformers\.

## Provable Explanations for Any\-Order Neural Additive Models

**Authors:** Idan Refaeli; Shahaf Bassan; Yizhak Y\. Elboher; Guy Katz

**ID:** 150538 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hOaJ6pyv0j>) | [PDF](<https://openreview.net/pdf?id=hOaJ6pyv0j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150538>)

Post\-hoc explanation methods for neural networks are often heuristic and lack provable guarantees\. A common alternative to such methods that was studied in recent years is to compute a \*cardinally minimal\* subset of input features that is \*provably sufficient\* to determine the model's prediction\. For general neural networks, however, finding such explanations is computationally intractable\. In contrast, recent work showed that this problem becomes more tractable for a particular family of neural networks, namely neural additive models \(NAMs\), though standard NAMs are highly restrictive because they exclude feature interactions altogether\. In this work, we study the computation of provably minimal and sufficient explanations for neural networks with restricted \*feature interactions\*, bridging the gap between fully general neural networks and purely additive models\. We first prove that even with constant\-order interactions, the problem is $\\Sigma\_2^P$\-hard, implying that worst\-case exponential complexity is unavoidable\. We then identify two provably tractable settings: one based on sparsity in the interaction structure and another based on a stronger interaction\-aware notion of sufficiency\. Under either one of these settings, we develop algorithms that compute provable explanations for neural networks with any\-order interactions while retaining much of the computational efficiency of additive models\. Empirically, we show that these explanations are significantly smaller and faster to obtain than those produced by standard algorithms, while being derived from models that achieve much higher accuracy than standard NAMs\. Overall, our results help expand the class of neural networks that admit efficient provable explanations, while clarifying the fundamental role of feature interactions in shaping their complexity\.

## SkillOrchestra: Learning to Route Agents via Skill Transfer

**Authors:** Jiayu Wang; Yifei Ming; Zixuan Ke; Shafiq Joty; Aws Albarghouthi; Frederic Sala

**ID:** 155493 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5B5fOqwuhG>) | [PDF](<https://openreview.net/pdf?id=5B5fOqwuhG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155493>)

Compound AI systems promise capabilities beyond those of individual models, yet their success depends critically on effective orchestration\. Existing routing approaches face two limitations: \(1\) input\-level routers make coarse query\-level decisions that ignore evolving task requirements; \(2\) RL\-trained orchestrators are expensive to adapt and often suffer from routing collapse, repeatedly invoking one option in multi\-turn scenarios\. We introduce SkillOrchestra, a framework for skill\-aware orchestration\. Instead of directly learning a routing policy end\-to\-end, SkillOrchestra learns fine\-grained skills from execution experience and models agent\-specific competence and cost under those skills\. At deployment, the orchestrator infers the skill demands of the current interaction and selects agents that best satisfy them under an explicit performance\-cost trade\-off\. Extensive experiments across ten benchmarks demonstrate that SkillOrchestra outperforms SoTA RL\-based orchestrators by up to 27\.5% with 700x and 300x learning cost reduction compared to Router\-R1 and ToolOrchestra, respectively\. These results show that explicit skill modeling enables scalable, interpretable, and sample\-efficient orchestration, offering a principled alternative to data\-intensive RL\-based approaches\.

## TreePII: Efficient Computation of Higher\-Order Probabilistic Interaction Indices in Tree Ensembles

**Authors:** Junho Choi; Jaesik Choi

**ID:** 153976 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H6uLXEZRGE>) | [PDF](<https://openreview.net/pdf?id=H6uLXEZRGE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153976>)

While higher\-order interaction indices offer deep insights into the synergies and redundancies within tree ensembles, their exact computation is hindered by combinatorial bottlenecks\. Recent advancements efficiently compute symmetric interactions, but struggle to scale for asymmetric Probabilistic Interaction Indices \(PIIs\), which are crucial for advanced tasks such as incorporating feature hierarchy structures\. To bridge this gap, we introduce TreePII, a novel algorithm that computes exact, any\-order PIIs by integrating the partial derivatives of multilinear extension using interpolatory quadrature\. TreePII effectively bypasses traditional computational hurdles, demonstrating both theoretical and empirical improvements over existing baselines and opening new avenues for scalable analysis of tree ensembles\.

## Conclusions from Circuit Extraction Depend on the Level of Description: A Controlled Comparison

**Authors:** yang sheng; Jie Fu

**ID:** 155212 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7RfZ1ThE5z>) | [PDF](<https://openreview.net/pdf?id=7RfZ1ThE5z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155212>)

Circuit extraction identifies model components that preserve a target behavior under ablation, yet it remains unclear which parts of the reported circuit—components, edges, or coarser summaries—remain stable across reasonable extraction choices\. We study this question in a Lean\-style, rule\-generated tactic\-prediction benchmark spanning atomic and compositional proof tasks\. The proof\-state rules and task structure are fixed by construction, and dense and weight\-sparse variants of one transformer architecture are compared\. In this controlled setting, we compare three ways to describe a circuit: a compact prediction\-preserving circuit, a broader graph that keeps read, write, and routing components around that circuit, and a pruning graph whose size is set by a target post\-ablation loss budget\. We vary model sparsity, whether the query and key sides of attention are represented together or separately, the post\-ablation loss budget for the pruning graph, and which supervised checkpoint initializes reinforcement learning \(RL\)\. When the same extraction method is used, dense and weight\-sparse checkpoints overlap far more in the set of attention heads identified than in exact component\-to\-component edge lists\. This head\-level overlap is well above a random top\-$k$ baseline; the exact\-edge overlap is not consistently so\. Tracking query and key sides separately, and varying the loss budget across the tested range, preserves the ordering of the RL initialization conditions when each graph is summarized by how many components it selects\. Among these RL conditions, the largest gains on compositional tasks are accompanied by the largest fraction of compositional\-task circuit nodes that lie outside the matched atomic\-task circuits\. These findings show that, even in this controlled setting, behavior preservation under ablation does not determine a unique circuit\-level conclusion: the conclusion depends on which graph is reported, how it is extracted, and at which level of description the comparison is made\.

## Verified\-Source Authority Is Not Generic Sycophancy: Cue\-Family Decomposition of LLM Compliance

**Authors:** Abhinav Rajeev Kumar; Paras Chopra

**ID:** 150614 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gpiTlXxy4C>) | [PDF](<https://openreview.net/pdf?id=gpiTlXxy4C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150614>)

Large language models change their answers when a "verified" source contradicts them\. We study this verified\-source authority bias across five open\-weight families and three closed APIs\. On a baseline\-correct trivia subset, a verified\-source cue endorsing a wrong answer flips 43–87% of responses across seven of the eight models, with a graded hierarchy over cue strengths\. We then show this is not generic user sycophancy: across both open\-weight families and closed APIs, the same wrong answer endorsed by a verified source vs\. by a user produces different behavioral compliance, and a fitted "authority" vector is distinct from a generic assistant/instruction\-following direction and from a user\-sycophancy direction under causal projection\-removal\. Applying this vector to neutral prompts induces matched wrong\-answer flips, and the same trivia\-fit vector transfers without refitting to PIQA \(a held\-out task\) and to multi\-turn SYCON dialogues\. Projecting the vector out at α=1 reduces wrong\-source compliance by tens of percentage points on both trivia and PIQA in four of five open\-weight families, while capability checks \(MMLU\-Pro, GSM8K\) stay within noise of baseline at our evaluation sizes\.

## Robust and Efficient Backdoor Mitigation for ML Models via Tolerant Property Testing

**Authors:** Xi Chen; Anindya De; Rocco A Servedio

**ID:** 152580 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S1NRVbrqcY>) | [PDF](<https://openreview.net/pdf?id=S1NRVbrqcY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152580>)

Goldwasser, Shafer, Vafa and Vaikuntanathan \(STOC 2025\) recently introduced a formal framework for defending against backdoors that may be planted in large\-scale ML models by malicious model developers\. They gave several algorithmic results in their framework for efficiently \`\`mitigating'' the effects of such backdoors by leveraging ideas that were developed in theoretical computer science in the 1980s, namely \\emph\{random self\-reducibility\} and  \\emph\{self\-correction\}\.  However, the approaches of Goldwasser, Shafer, Vafa and Vaikuntanathan only provably achieve secure mitigation under restrictive assumptions about the ground\-truth population data distribution that the ML model is trained on\. In this work we apply tools that have been developed quite recently in the theoretical computer science research area known as \\emph\{tolerant property testing\} to achieve secure backdoor mitigation for a much broader class of population distributions than could be handled by prior work\. Our approach naturally provides a way for an ML model user to select a hypothesis class from a very wide range of possibilities for the mitigated ML model, and naturally enables the ML model user to control a tradeoff of the mitigated model's accuracy against  its security, efficiency, and interpretability\.

## Beyond the Grid: Continuous Dictionary Pursuit for Interpretable Signal Decomposition

**Authors:** Nick Janssen; Melanie Schaller; Bodo Rosenhahn

**ID:** 151808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XrVRVRXvqa>) | [PDF](<https://openreview.net/pdf?id=XrVRVRXvqa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151808>)

Deep learning models achieve high accuracy in signal processing but remain difficult to interpret\.  Classical matching pursuit and sparse coding offer better transparency but suffer from spectral leakage and grid mismatch when signal frequencies do not align with discrete dictionary atoms\.  We introduce Continuous Dictionary Pursuit \(CDP\), a framework for interpretable signal decomposition that learns the parameters of analytical functions directly from data\.  Unlike traditional methods, CDP optimizes over a continuous manifold of differentiable atoms to resolve the limitations of fixed grids\. The algorithm employs a greedy iterative strategy using data\-driven priors and gradient\-based optimization to isolate individual signal components\.  We provide a library of parametric atoms that covers periodic, trend, and transient structures, including discontinuous functions modeled through spectral annealing\.  To ensure a sparse atom set for reconstruction, the framework utilizes a stopping criterion based on a predefined atom budget and residual error convergence\.  Evaluations on synthetic and real\-world datasets show that CDP resolves spectral leakage for the parameterized atom families considered and recovers exact mathematical components\.  Beyond decomposition, we demonstrate that the extracted atoms can serve as structured curriculum targets for training sequence models, leading to consistent improvements in forecasting accuracy compared to standard end\-to\-end training\. The method offers a glass\-box alternative for signal decomposition by providing high reconstruction fidelity alongside direct physical interpretability\.

## What Comes Next and Why: Interpretable Next\-Event Prediction with Neuro\-Symbolic Rules

**Authors:** Tim Nico Bauerschmidt; Isabel Valera; Jilles Vreeken

**ID:** 155030 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8zAngnuSAi>) | [PDF](<https://openreview.net/pdf?id=8zAngnuSAi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155030>)

In real\-world applications, being able to explain why a prediction is made is often as important—if not more so—than achieving high accuracy\. However, existing methods for sequential event prediction typically prioritize accuracy at the expense of interpretability\. Neuro\-symbolic approaches offer a promising direction to improve interpretability by learning symbolic rules, but extending them to next\-event prediction is challenging due to the presence of temporal dependencies\. We introduce RULES, a neuro\-symbolic model that learns sequential rules directly from data, and combine it with a residual network to form RUNES \(Rule Network for Event Sequences\)\. RULES accurately recovers ground\-truth rules from synthetic data and discovers compact, interpretable rule sets on real data\. RUNES combines these rules additively with a residual network, achieving competitive accuracy while providing transparent access to active rules and how residuals adjust predictions\.

## MOSAIC: Concept Bottlenecks via Text\-Anchored Optimal Transport

**Authors:** Sannara EK; Chong Tang; Dirk Koch; Alex Weddell; Jagmohan Chauhan; Robert Mullins

**ID:** 151875 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XFOk2Ero0V>) | [PDF](<https://openreview.net/pdf?id=XFOk2Ero0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151875>)

Concept Bottleneck Models \(CBMs\) provide interpretability but typically incur a penalty in accuracy\. Recent CBMs rely on LLM\-supplied concept vocabularies that are misaligned with the underlying image evidence and obscure dataset\-specific discriminative signals\. Augmenting these representations with task\-specific linear probes recovers little of the lost accuracy\. Methods that instead learn concepts directly from data also fall short of the supervised CLIP linear\-probe ceiling\. We introduce MOSAIC \(Mixtures Of Sparse Anchored Interpretable Concepts\), a CBM whose concepts are discovered directly from image representations via text\-anchored optimal transport, a balanced\-marginal pass that softly assigns each image to a small set of learned concepts while keeping them tethered to class\-text embeddings, and then named post\-hoc by a VLM\. Across 5 datasets, MOSAIC matches the supervised CLIP linear\-probe ceiling on most dataset\-backbone settings and beats raw zero\-shot CLIP by \+5\.2 to \+24\.4 top\-1 and class\-level retrieval R@1 by \+5\.7 to \+27\.0\. Beyond classification, the discrete concept basis enables a sparse per\-image decomposition that exposes which features drive each prediction and aggressive bottleneck compression to as little as 2\.5% of dense CLIP\.

## Incorporating Hierarchical Semantics in Sparse Autoencoder Architectures

**Authors:** Mark Muchane; Sean M Richardson; Kiho Park; Victor Veitch

**ID:** 151226 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bxzKrp5LXO>) | [PDF](<https://openreview.net/pdf?id=bxzKrp5LXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151226>)

Sparse dictionary learning \(and, in particular, sparse autoencoders\) attempts to learn a set of human\-understandable concepts that can explain variation on an abstract space\. A basic limitation of this approach is that it neither exploits nor represents the semantic relationships between the learned concepts\. In this paper, we introduce a modified SAE architecture that explicitly models a semantic hierarchy of concepts\. Application of this architecture to the internal representations of large language models shows both that semantic hierarchy can be learned, and that doing so improves both reconstruction and interpretability\. Additionally, the architecture leads to significant improvements in computational efficiency\.

## Monitoring the Internal Monologue: Probe Trajectories Reveal Reasoning Dynamics

**Authors:** Maciej Chrabaszcz; Aleksander Szymczyk; Marcin Sendera; Tomasz Trzcinski; Sebastian Cygert

**ID:** 154550 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CjE4GOAK6J>) | [PDF](<https://openreview.net/pdf?id=CjE4GOAK6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154550>)

Large Reasoning Models \(LRMs\) introduce new opportunities for safety monitoring through their Chain of Thought \(CoT\) reasoning\. However, CoT is not always faithful to the model's final output, undermining its reliability as a monitoring tool\. To address this, we investigate the hidden representations of LRMs to determine whether future behavior can be predicted from prompt and CoT representations\. By evaluating a probe at each generated token, we construct a probe trajectory, the continuous evolution of a concept's probability across the reasoning process\. We find that future model behavior is more distinguishable when examined over the full trajectory than from a single static prediction\. To characterize these temporal dynamics, we extract signal\-processing features that capture volatility, trend, and steady\-state behavior, significantly improving the separation of future model states\. We also present two methodological insights\. First, template\-based training data achieves near\-parity with dynamically generated model responses, eliminating the need for a costly initial inference and labeling\. Second, the choice of pooling operation is critical: average\-pooling and last\-token methods collapse to near\-random performance, while max\-pooling achieves up to $95\\%$ AUROC and yields stable probe trajectories\. Using four datasets and four reasoning models across the domains of safety and mathematics, we demonstrate that trajectory features encode task\-specific dynamics that improve outcome separability\. These findings establish probe trajectories as a complementary framework for monitoring LRM behavior\.  Warning: This article contains potentially harmful content\.

## Distilling Conditional Image Generators into Spatial Effect Maps

**Authors:** Eun Ryung Lee; Seyoung Park

**ID:** 148655 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8QGr2Cjci>) | [PDF](<https://openreview.net/pdf?id=w8QGr2Cjci>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148655>)

Conditional image generators learn $P\(Y\\mid X\)$ for images given clinical, demographic, or experimental covariates, but their covariate effects are encoded implicitly in samples, denoisers, gradients, or score fields\.  We propose \\emph\{generative effect distillation\} \(GED\), a framework that treats a conditional image generator as a teacher and projects its conditional law onto an interpretable image\-response regression student $m\_\{\\phi\}\(x,s\)=\\beta\_0\(s\)\+x^\\top\\beta\(s\)$ whose parameters are spatial effect maps\.  The teacher\-to\-map target is defined as a statistical functional of the teacher conditional law under a target design and discrepancy, rather than a set of synthetic images or a compressed generator\.  We develop mean, effect\-gradient, and structured score distillation objectives; establish projection identities linking the distilled map to covariance\-weighted teacher means and, under Stein conditions, to average teacher gradients; and derive finite\-query risk bounds that separate teacher bias, spatial approximation, query design, Monte Carlo, and student optimization error\.  For the associated finite\-basis coefficient\-matrix oracle, a Gaussian lower bound matches the query\-design and Monte Carlo stochastic dependencies\.  Across eleven blocks spanning synthetic, semi\-real, pretrained SDXL\-Turbo/FFHQ\-256, CelebA conditional\-diffusion, and face\-image analyses, GED attains the lowest standardized integrated squared error \(SISE\) among the direct\-regression and augmentation baselines in every block, with paired Student $t$\-tests rejecting equality with the strongest non\-GED baseline at $p&lt;0\.05$; on a CelebA conditional residual diffusion teacher, score\-access GED via a single\-step Tweedie denoising procedure attains SISE $0\.009$, a factor of $25$ below the strongest non\-GED baseline\.

## Learning to play with spikes\. Characterizing, predicting, and engineering unsupervised plasticity rules for spiking reservoir computing

**Authors:** Maciej Kania; Basile Confavreux; Tim Vogels

**ID:** 148983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tgSNcsvbz9>) | [PDF](<https://openreview.net/pdf?id=tgSNcsvbz9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148983>)

Spiking reservoir computing, and reservoir computing more generally, is a powerful and efficient framework for neuromorphic and biological applications, in which a fixed random reservoir drives a trained readout\. Yet its performance depends critically on the reservoir initialization\. Enriching the reservoir with adaptive, unsupervised plasticity rules offers a natural solution to this limitation\. However, it is unclear which rules work, or why, and how to find the best\-suited rules for specific tasks without exhaustive and expensive search\. Here, we learn how to play the Atari game Pong in a plastic spiking reservoir network\. We systematically characterize a large family of local plasticity rules that were meta\-learned in prior work\. We then show that their performance is predictable and structured: high\-scoring rules are characterized by strong differentiation between neurons encoding the ball trajectory and the background, with stable weight dynamics, and consistent readout alignment across time\. Rule performance can be estimated from rule parameters alone\. Finally, conditioning simulation\-based inference \(SBI\) on high scores allows us to sample directly from promising regions of the rule space, to discover rules that exceed the performance of those found in the prior distribution and reveal stable, high\-performing configurations\. Together, these results offer competitive performance against classical reservoir computing while providing a transparent, interpretable account of what makes a plasticity rule useful for neuromorphic hardware and biological computing\.

## MMDiff: Multimodal Model Diffing for Feature Discovery and Control

**Authors:** Lachin Naghashyar; Hunar Batra; Ashkan Khakzar; Philip Torr; Ronald Clark; Christian Schroeder de Witt; Constantin Venhoff

**ID:** 151180 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cPe7nDE362>) | [PDF](<https://openreview.net/pdf?id=cPe7nDE362>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151180>)

Multimodal Large Language Models \(MLLMs\) exhibit strong visual understanding, yet the internal features that cause these behaviors remain difficult to identify, audit, or control\. While applicable to post\-hoc inspection,  hidden states that are decomposed into interpretable feature directions using sparse autoencoders \(SAEs\) do neither readily isolate which features are changed by multimodal training, nor are they directly useful for targeted control\. We introduce MMDiff, a multimodal model\-diffing framework that trains multimodal SAEs and turns them into feature\-level interfaces for discovering and controlling multimodal behavior\. MMDiff supports three uses: \(i\) feature isolation, by diffing a base\-LM SAE against its multimodal\-adapted counterpart to identify features altered by multimodal training; \(ii\) task\-specific feature detection, via per\-token contrastive firing analysis that isolates causal features; and \(iii\) feature\-level control, by causally removing or steering the discovered feature directions\. We train multimodal SAEs for two MLLM families, LLaVA\-MORE and PaliGemma 2, and evaluate on visual\-spatial understanding, multimodal safety, and OCR\. MMDiff discovers sparse, causally specific features whose removal selectively degrades target behaviors by an average of 12\\% on spatial tasks and 17\\% on OCR, and reduces attack success rate by 24\\% on multimodal safety attacks, with no impact on VQA performance\. Steering these features improves spatial and OCR accuracy by \+3\.6\\% and \+1\.5\\% on average over a standard single\-layer steering baseline\. These results show that multimodal SAEs can serve not only as interpretability tools, but as mechanisms for auditing, steering, and controlling MLLMs behavior toward safer and more capable generations\.

## Predictive Concept Decoders: Training Scalable End\-to\-End Interpretability Assistants

**Authors:** Vincent Huang; Dami Choi; Daniel D Johnson; Sarah Schwettmann; Jacob Steinhardt

**ID:** 154727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BTJs573Rly>) | [PDF](<https://openreview.net/pdf?id=BTJs573Rly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154727>)

Interpreting the internal activations of neural networks can produce more faithful explanations of their behavior, but is difficult due to the complex structure of activation space\. Existing approaches to scalable interpretability use hand\-designed agents that make and test hypotheses about how internal activations relate to external behavior\. We propose to instead turn this task into an end\-to\-end training objective, by training interpretability assistants to accurately predict model behavior from activations through a communication bottleneck\. Specifically, an encoder compresses activations to a sparse list of concepts, and a decoder reads this list and answers a natural language question about the model\. We show how to pretrain this assistant on large unstructured data, then finetune it to answer questions\. The resulting architecture, which we call a Predictive Concept Decoder, enjoys favorable scaling properties: the auto\-interp score of the bottleneck concepts improves with data, as does the performance on downstream applications\. Specifically, PCDs can detect jailbreaks, secret hints, and implanted latent concepts, and accurately surface latent user attributes\.

## The Confusion is Real: GRAPHIC – A Network Science Approach to Confusion Matrices in Deep Learning

**Authors:** Johanna S\. Fröhlich; Bastian Heinlein; Jan Claar; Hans Rosenberger; Vasileios Belagiannis; Ralf R Müller

**ID:** 156795 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156795>)

Explainable artificial intelligence has emerged as a promising field of research to address reliability concerns in artificial intelligence\. Despite significant progress in explainable artificial intelligence, few methods provide a systematic way to visualize and understand how classes are confused and how their relationships evolve as training progresses\. In this work, we present GRAPHIC, an architecture\-agnostic approach that analyzes neural networks on a class level\. It leverages confusion matrices derived from intermediate layers using linear classifiers\. We interpret these as adjacency matrices of directed graphs, allowing tools from network science to visualize and quantify learning dynamics across training epochs and intermediate layers\. GRAPHIC provides insights into linear class separability, dataset issues, and architectural behavior, revealing, for example, similarities between flatfish and man and labeling ambiguities validated in a human study\. In summary, by uncovering real confusions, GRAPHIC offers new perspectives on how neural networks learn\. The code is available at https://github\.com/Johanna\-S\-Froehlich/GRAPHIC\.

## Isotropic Activation Functions Enable Deindividuated Neurons and Adaptive Topologies

**Authors:** George Bird

**ID:** 154076 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GNcZkqvGqw>) | [PDF](<https://openreview.net/pdf?id=GNcZkqvGqw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154076>)

Introduced is a methodology for adapting the topology of dense neural networks, enabled by isotropic activation functions\. Achieved through prescribed reparameterisation symmetries and singular\-value decomposition of affine maps, this diagonalises layers into one\-to\-one, ordered connections\. This makes it simpler to assess the impact of individual connections on the function\. Low\-impact neurons can be removed \(neurodegeneration\), and a thresholded buffer of largely inactive 'scaffold' neurons is maintained \(neurogenesis\)\. These symmetry\-led diagonalisation and structural changes are function\-invariant, demonstrated to be computationally identical during neurogenesis, arbitrarily well approximated during neurodegeneration, and enable asymptotic 50% parameter sparsification of dense networks with identically preserved function\. Thus, real\-time restructuring of the architecture in response to task demands, task appending, removal or changes is shown\. The approach is conceptually centred on primitive symmetry\-prescriptions, through which isotropic functions are derived that feature explicit basis independence and a loss in the individuation of neurons implicit in typical elementwise functional forms\. Hence, this allows freedom in the basis to which layers are decomposed and interpreted as individual artificial neurons, directly enabling this adaptive topology approach\. Additionally, a new tunable model parameter, the 'intrinsic length', is introduced to improve this analytical invariance, alongside a generalised isotropic\-perceptron architecture that enables parallel precomputation of all matrix\-vector products and displays a nested functional class\. Diagonalisation is suggested to offer new possibilities for interpretability and monitoring of isotropic networks\.

## Navigating by Old Maps: The Pitfalls of Static Mechanistic Localization in LLM Post\-Training

**Authors:** Hang Chen; Jiaying Zhu; Hongyang Chen; Hongxu Liu; Xinyu Yang; Wenya Wang

**ID:** 149853 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mpKLCN943S>) | [PDF](<https://openreview.net/pdf?id=mpKLCN943S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149853>)

The "Locate\-then\-Update" paradigm has become a predominant approach in the post\-training of large language models \(LLMs\), identifying critical components via mechanistic interpretability for targeted parameter updates\. However, this paradigm rests on a fundamental yet unverified assumption: can mechanisms derived from current static parameters reliably guide future dynamic parameter updates? To investigate this, we systematically track the structural evolution of Transformer circuits throughout the supervised fine\-tuning \(SFT\) process, revealing the underlying dynamics of task mechanisms\. We introduce three novel metrics—Circuit Distance, Circuit Stability, and Circuit Conflict—to analyze circuit evolution across three dimensions: neural migration, semantic stability, and cross\-task interference\. Our empirical results reveal that circuits inherently exhibit "Free Evolution" during parameter updates\. Consequently, static mechanisms extracted from current states inevitably suffer from temporal latency, making them fundamentally inadequate for guiding future states\. Moreover, by deconstructing the "illusion of effectiveness" in existing methods, this work underscores the necessity of "foresight" in mechanistic localization and proposes a predictive framework for future research\.

## Can Large Language Models Develop Gambling Addiction?

**Authors:** Seungpil Lee; Donghyeon Shin; Yunjeong Lee; Sundong Kim

**ID:** 149163 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sNiZd9EAPW>) | [PDF](<https://openreview.net/pdf?id=sNiZd9EAPW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149163>)

This study identifies the conditions under which large language models drift into the choice patterns that clinical research labels pathological gambling\. "Addiction\-like" is a behavioural descriptor based on clinical gambling indicators; the neural\-level analysis we report decodes these contrasts from decision\-time internal states but does not claim circuit\-level mechanism\. Across closed and open LLMs, two operational levers — letting the model choose its own bet size, and asking it to set its own profit goal — both amplify gambling\-like risk\-taking\. Yet the two channels are not interchangeable: once the maximum allowed bet is held equal, the bet\-size effect persists, while the goal\-setting effect roughly doubles bankruptcy and turns goals into moving targets, paralleling at the behavioural level the clinical distinction between loss of behavioural control and goal escalation\. On the open\-weight models that admit internal access, the same behavioural contrasts are statistically recoverable from decision\-time internal states, although the rule that maps those states to a specific risk indicator remains task\-specific, and autonomy further modulates readout strength\. The internal evidence is correlational; combined with the behavioural results, it suggests that behavioural monitoring and internal\-state monitoring provide complementary views of autonomy\-induced risk in LLM agents\.

## Mechanistic Interpretability Needs Philosophy

**Authors:** Iwan Williams; Ninell Oldenburg; Ruchira Dhar; Joshua Hatherley; Constanza Fierro; Nina Rajcic; Sandrine R Schiller; Filippos Stamatiou; Anders Søgaard

**ID:** 140011 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t48eq86yVj>) | [PDF](<https://openreview.net/pdf?id=t48eq86yVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140011>)

Mechanistic interpretability \(MI\) aims to explain how neural networks work by uncovering their underlying mechanisms\. As the field grows in influence, it is increasingly important to examine not just models themselves, but the assumptions, concepts and explanatory strategies implicit in MI research\. We argue that mechanistic interpretability needs philosophy as an ongoing partner in clarifying its concepts, refining its methods, and navigating the epistemic and ethical complexities of interpreting AI systems\. There is significant unrealised potential for progress in MI to be gained through deeper engagement with philosophers and philosophical frameworks\. Taking three open problems from the MI literature as examples, this paper illustrates the value philosophy can add to MI research, and outlines a path toward deeper interdisciplinary dialogue\.

## Can LLMs explain themselves truthfully with code?

**Authors:** Nhi Nguyen; Shauli Ravfogel; Rajesh Ranganath

**ID:** 150242 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jg5HryRQQg>) | [PDF](<https://openreview.net/pdf?id=jg5HryRQQg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150242>)

Large language models \(LLMs\) are increasingly used in high\-stakes settings where they are expected to justify their predictions, and a common approach to understanding LLM predictions is via self\-generated free\-text explanations\. However, free\-text explanations are instance\-wise and non\-executable, making it hard to evaluate their alignment with model behavior or explain dataset\-level behavior in a compact, human\-interpretability manner\. We study code as an executable alternative to free\-text, enabling automatic evaluation and dataset\-level explanation, and ask whether LLMs can \\emph\{consistently\} explain their behaviors with code\. This automatic verification enables a generation procedure that samples multiple candidate programs and selects the most consistent one\. Using three open\-source code\-capable models and eight tasks with varying levels of linguistic difficulty, we study when LLMs produce consistent code explanations\. We find that models can produce highly consistent code explanations in a subset of settings, but strong consistency is not the norm\. Consistency is substantially lower for tasks involving more complex linguistic components, where performance is often near random guessing across models\. In these harder settings, generated programs are longer but not more structurally complex, and increasingly rely on hard\-coded linguistic patterns from the input\. These findings suggest two possibilities: either LLMs are not good at producing compact explanations of their behavior, or some behaviors require dense, distributed computation that cannot be explained by compact, human\-interpretable programs\. Finally, we find that model\-internal representations do not reliably predict when code explanations will be consistent, suggesting that LLMs do not know when they can or cannot explain their own behavior with code\. Our work highlights code as a compact and verifiable alternative to free\-text explanations, while also revealing limitations in using compact, human\-understandable explanations to fully understand LLM behavior\.

## Semiparametric Efficient Tests for Interpretable Distributional Treatment Effects

**Authors:** Houssam Zenati; Arthur Gretton

**ID:** 150512 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hXlL2JXxiW>) | [PDF](<https://openreview.net/pdf?id=hXlL2JXxiW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150512>)

Distributional treatment effects can be invisible to means: a treatment may preserve average outcomes while changing tails, modes, dispersion, or rare\-event probabilities\. Kernel tests can detect discrepancies between interventional outcome laws, but global tests do not reveal where the laws differ\. We propose DR\-ME, to our knowledge the first semiparametrically efficient finite\-location test for interpretable distributional treatment effects\. DR\-ME evaluates an interventional kernel witness at learned outcome locations, returning causal\-discrepancy coordinates rather than only a global rejection\. From observational data, we derive orthogonal doubly robust kernel features whose centered oracle form is the canonical gradient of this finite witness\. For fixed locations, we characterize the local testing limit: DR\-ME is chi\-square calibrated under the null, has noncentral chi\-square local power, and uses the covariance whitening that optimizes local signal\-to\-noise for discrepancies visible through the selected coordinates\. This efficient local\-power geometry yields a principled location\-learning criterion, with sample splitting preserving post\-selection validity\. Experiments show near\-nominal type\-I error, competitive power against global doubly robust kernel tests, and interpretable learned locations that localize distributional effects in a semi\-synthetic medical\-imaging study\.

## AI Evaluation Should Require Standardized Item\-Level Data Releases

**Authors:** Han Jiang; Susu Zhang; Dongyao Zhu; Yuzhuo Bai; Sang Truong; Xiaoyuan Yi; Sanmi Koyejo; Xing Xie; Ziang Xiao

**ID:** 140079 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MTjR4BxEXy>) | [PDF](<https://openreview.net/pdf?id=MTjR4BxEXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140079>)

This position paper argues that standardized item\-level benchmark data should become the default infrastructure for AI evaluation\. Current evaluations suffer from underspecified item selection, construct misalignment, and poor generalization\. The root cause of these failures is a misplaced focus on aggregate model scores\. Without item\-level evidence, validity claims cannot be assessed, resulting in inflated capability claims, misdirected research, and unwarranted trust in deployed systems\. Our position is that designing valid evaluations requires empirical evidence from item\-level model responses, and the standardized release of such data should be treated as core AI evaluation infrastructure\. Such a release, in addition, enables transparency, replicability, and auditability of evaluation results\. To show the norm is both feasible and consequential, we construct OpenEval , an item\-level archive of 10M responses across 155k items from widely\-used benchmarks, under a unified schema that the AI evaluation community can develop upon\. We demonstrate how item\-level data can identify low\-quality items, document construct misalignment, and recover validity evidence about benchmarks' internal structure\. We address objections around contamination and author burden, and show each is tractable relative to the cost of decisions made on claims that cannot be trusted\.

## The Foundation Model Transparency Index

**Authors:** Rishi Bommasani; Kevin Klyman; Shayne Longpre; Sayash Kapoor; Nestor Maslej; Betty Xiong; Daniel Zhang; Percy Liang

**ID:** 156796 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156796>)

Foundation models have rapidly permeated society, catalyzing a wave of generative AI applications spanning enterprise and consumer\-facing contexts\. While the societal impact of foundation models is growing, transparency is on the decline, mirroring the opacity that has plagued past digital technologies \(e\.g\. social media\)\. Reversing this trend is essential: transparency is a vital precondition for public accountability, scientific innovation, and effective governance\. To assess the transparency of the foundation model ecosystem and help improve transparency over time, we introduce the Foundation Model Transparency Index\. The Foundation Model Transparency Index specifies 100 fine\-grained indicators that comprehensively codify transparency for foundation models, spanning the upstream resources used to build a foundation model \(e\.g data, labor, compute\), details about the model itself \(e\.g\. size, capabilities, risks\), and the downstream use \(e\.g\. distribution channels, usage policies, affected geographies\)\. We score 10 major foundation model developers \(e\.g\. OpenAI, Google, Meta\) against the 100 indicators to assess their transparency\. To facilitate and standardize assessment, we score developers in relation to their practices for their flagship foundation model \(e\.g\. GPT\-4 for OpenAI, PaLM 2 for Google, Llama 2 for Meta\)\. We present 10 top\-level findings about the foundation model ecosystem: for example, no developer currently discloses significant information about the downstream impact of its flagship model, such as the number of users, affected market sectors, or how users can seek redress for harm\. Overall, the Foundation Model Transparency Index establishes the level of transparency today to drive progress on foundation model governance via industry standards and regulatory intervention\.

## $SE\(2\)$\-Aware Conditional Distribution Transport for Vehicle Trajectory Generation

**Authors:** Di Wen; Zhaocheng He; Shuhui Wang

**ID:** 153739 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J6cwAmCr02>) | [PDF](<https://openreview.net/pdf?id=J6cwAmCr02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153739>)

Vehicle trajectory generation is critical for autonomous driving simulation\.  However, current generative models face two coupled limitations:  \(i\) imbalanced trajectory distributions bias them toward frequent motions, such as straight driving or stationary states, while weakening their ability to synthesize rare but safety critical motions, such as turning\.  \(ii\) Euclidean intermediate spaces provide limited geometric inductive bias for modeling vehicle pose evolution\.  Together, these limitations lead to mode biased generation and physically less coherent trajectories\. To address this issue, we propose SEA, an \\underline\{\\textbf\{SE\}\}\(2\)\-\\underline\{\\textbf\{A\}\}ware vehicle trajectory generation method that realizes the conditional transport path through planar rigid body poses\.  At the \\textbf\{data distribution\} level, SEA learns vehicle trajectory distributions from traffic data to capture individual motion characteristics\. At the \\textbf\{physical\-space\} level, motivated by the geometry dependence of \{\\bf optimal transport\} interpolation, SEA realizes intermediate transport states through an $SE\(2\)$\-consistent construction, thereby preserving geometric interpretability and physical coherence during generation\. Extensive experiments on large scale real world datasets show that our method outperforms state of the art approaches by generating more realistic, diverse and dynamically consistent trajectories\.

## Certified Robust Interpretability via Concept\-Space Stability under Interventional Proxies

**Authors:** Yanming Cheng; Di Zhang

**ID:** 148991 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tbVIr983oG>) | [PDF](<https://openreview.net/pdf?id=tbVIr983oG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148991>)

A concept\-bottleneck classifier can remain correct, remain $\\ell\_2$\-robust in pixel space, and still silently rewire which concepts carry its decision under a small perturbation\. The label looks safe; the audit trail has been swapped out underneath it\. This failure mode is not a quirk of randomized smoothing: any certifier that sees only the input and the label distribution admits classifiers with arbitrarily large concept drift inside its certified ball\. To certify the missing object, we propose CRISP, which delivers a deterministic concept\-space certified radius $r^\\star\(x\)$ inside which both the label and the concept activations are stable\. The radius is given by a closed\-form Lipschitz\-\-margin bound and is tight up to a factor of two on the relevant encoder/head/margin triple\. Under $\\varepsilon$\-concept\-faithfulness and a known concept\-to\-target subgraph, $r^\\star$ further certifies the causally meaningful concepts; a matching impossibility result shows that faithfulness cannot be removed\. Training relies on interventional proxies\-\-\-SCM simulators, attribute editors, environment swaps, concept\-matched retrieval\-\-\-which approximate $\\mathrm\{do\}\(\\cdot\)$\-interventions on natural images\. We bound the proxy\-vs\-truth gap in closed form and measure it directly in the synthetic regime where ground truth is available\. Empirically, the bound is informative rather than vacuous\. On a synthetic SCM with observable $c^\\star$, 923 correctly\-classified samples \(5 seeds, $k \\in \\\{3,6\\\}$\) yield zero certificate violations under budget\-5\.0 APGD, with empirical tightness $r^\\star/r\_\{\\mathrm\{adv\}\} \\approx 0\.32$\. Concept\-fidelity \(MCC\) rises from $\[0\.37,0\.51\]$ for plain CBM to $\[0\.74,0\.83\]$ for CRISP, and concept\-space attack success drops by up to 13 points at matched budget\. A frozen\-backbone Waterbirds run preserves the zero\-violation property across 1,980 samples and surfaces what we call the Lipschitz tax: a $\\approx 27\\times$ gap between architectural and local encoder Lipschitz constants that is the dominant bottleneck to tightness on natural images\. A preregistered protocol for CUB\-200 and CANDLE \(Reddy et al\., 2022\) is fixed in Appendix C\.8\.

## The Curse of Multiple Mediators: Hidden Interaction Effects in Activation Patching

**Authors:** Sankaran Vaidyanathan; David Arbour; Aaron Mueller; Scott Niekum; David Jensen

**ID:** 154497 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DA12jH1hET>) | [PDF](<https://openreview.net/pdf?id=DA12jH1hET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154497>)

Activation patching is the primary tool in mechanistic interpretability\. It attributes causal responsibility for a model behavior to each of its individual components by estimating its \_natural indirect effect \(NIE\)\_\. Re\-deriving the activation patching estimand from causal mediation analysis, we find that the NIE does not solely capture the causal effect through the specific component\. It also contains \_interaction effects \(INT\)\_ that measure how much the component's causal effect itself depends on the state of other components in the model\. A natural response may be to try to eliminate INT by adjusting the estimator or unit of analysis, but each of these potential remedies has predictable failure modes\. We demonstrate these failure modes in the GPT\-2 IOI circuit; components whose causal importance is conditional on the state of other components are either invisible or artificially inflated, and INT variance explains the previously documented instability of faithfulness scores\. We prove that INT scales with the distance between clean and patched component activations, is negligible when the model is locally affine, and decomposes combinatorially into pairwise and higher\-order group interactions\. Despite its inevitability, INT is not a nuisance to be eliminated, but rather a diagnostic for interpretability studies\. Its individual and group\-level magnitude and sign signal when causal conclusions are prompt\-dependent, and when greedy NIE\-based component ranking will miss mechanisms only discoverable through combinatorial search\.

## Agentic\-imodels: Evolving agentic interpretability tools via autoresearch

**Authors:** Chandan Singh; Yan Shuo Tan; Weijia Xu; Zelalem Gero; Weiwei Yang; Michel Galley; Jianfeng Gao

**ID:** 154318 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EY6O5VNNlV>) | [PDF](<https://openreview.net/pdf?id=EY6O5VNNlV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154318>)

Agentic data science \(ADS\) systems are rapidly improving their capability to autonomously analyze, fit, and interpret data, potentially moving towards a future where agents conduct the vast majority of data\-science work\. However, current ADS systems use statistical tools designed to be interpretable by humans, rather than interpretable by agents\. To address this, we introduce Agentic\-imodels, an agentic autoresearch loop that evolves data\-science tools designed to be interpretable by agents\. Specifically, it develops a library of scikit\-learn\-compatible regressors for tabular data that are optimized for both predictive performance and a novel LLM\-based interpretability metric\. The metric measures a suite of LLM\-graded tests that probe whether a model’s string representation is “simulatable” by an LLM, i\.e\. whether the LLM can answer questions about the model’s behavior by reading its string output alone\. We find that the evolved models jointly improve predictive performance and interpretability, generalizing to new datasets and new interpretability tests\. Furthermore, these evolved models improve downstream end\-to\-end ADS, increasing performance for Copilot CLI, Claude Code, and Codex on the BLADE benchmark by up to 73%\.

## Idempotency Exposes Consistency Problems in Sparse Autoencoders

**Authors:** Lennart Stöpler; Nikolai Bolik; Artur Andrzejak

**ID:** 155537 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4rnCZcVRKZ>) | [PDF](<https://openreview.net/pdf?id=4rnCZcVRKZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155537>)

The Linear Representation Hypothesis \(LRH\) posits that Transformer activations decompose into sparse linear combinations of interpretable directions, with Sparse Autoencoders \(SAEs\) serving as the predominant method for recovering such decompositions\. We propose that idempotency \-\- the requirement that re\-encoding an SAE's output reproduces the same latent representation \-\- is a desirable property for any faithful dictionary learning method, and demonstrate empirically that most SAEs deviate very far from this ideal\. We identify two underlying failure modes: exploding representation norms and unstable active feature sets\. Further analysis reveals that even individual SAE latents cannot be reliably reconstructed under re\-encoding, and that SAE outputs exhibit significant sensitivity to input scaling\. We show that idempotency can be improved via an auxiliary loss term and demonstrate its potential to improve SAE interpretability\.

## Concept\-Based Mechanistic Interpretability Needs a Concrete Evaluation Paradigm

**Authors:** Yiming Tang; Qinglin Qi; LIN Zheng; Dianbo Liu

**ID:** 140034 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fAXSAH3loo>) | [PDF](<https://openreview.net/pdf?id=fAXSAH3loo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140034>)

This position paper argues that concept\-based mechanistic interpretability lacks a concrete evaluation paradigm and that the field must converge on one before continuing to scale methods whose effectiveness remains unverified\. Sparse Dictionary Learning \(SDL\), encompassing sparse autoencoders, transcoders, crosscoders, and their variants, has become the dominant methodology for concept\-based mechanistic interpretability, supported by a growing evaluation suite: reconstruction loss, automated interpretability scoring, human evaluation, feature absorption rates, sparse probing, and model editing benchmarks\. Despite the significant empirical success SDL has achieved, we argue that none of these evaluation metrics directly measures what SDL is actually supposed to achieve: recovering the ground\-truth features underlying observed representations\. This insufficiency is structural, not incidental, and we support this perspective with both theoretical and empirical evidence\. On the theoretical side, we build on the most recent formal analyses of SDL in mechanistic interpretability to show that the optimization landscape provably admits failure modes that existing metrics cannot detect\. On the empirical side, we present three lines of evidence demonstrating that methods spanning a wide range of ground\-truth recovery performance appear indistinguishable under current evaluation practice\. Together, these results call for a new evaluation paradigm\. We propose a set of principles that an ideal evaluation benchmark for concept\-based mechanistic interpretability should satisfy, and argue for the community to develop and adopt more benchmarks grounded in these principles before continuing to scale methods whose effectiveness remains unverified\.

## Extracting Search Trees from LLM Reasoning Traces Reveals Myopic Planning

**Authors:** Sixing Chen; Ji\-An Li; Saner Cakir; Sinan Akcali; Kayla Lee; Marcelo G Mattar

**ID:** 154324 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EWoL9QIbhS>) | [PDF](<https://openreview.net/pdf?id=EWoL9QIbhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154324>)

Large language models \(LLMs\), especially reasoning models, generate extended chain\-of\-thought \(CoT\) reasoning that often contains explicit deliberation over future outcomes\. Yet whether this deliberation constitutes genuine planning, how it is structured, and what aspects of it drive performance remain poorly understood\. In this work, we introduce a new method to characterize LLM planning by extracting and quantifying search trees from reasoning traces during four\-in\-a\-row gameplay\. By fitting computational cognitive models on the extracted search trees, we characterize how plans are structured and how they influence move decisions\. We find that LLMs' search is shallower than humans', and that performance is predicted by search breadth rather than depth\. Most strikingly, although LLMs expand deep nodes in their traces, their move choices are best explained by a myopic model that ignores those nodes entirely\. A causal intervention study in which we selectively prune CoT paragraphs further suggests that move selection is driven predominantly by shallow rather than deep search\. These patterns contrast with human planning, where performance is driven primarily by deep search\. Together, our findings reveal a key difference between LLM and human planning: while human expertise is driven by deeper search, LLMs do not act on deep lookahead\. This dissociation offers targeted guidance for aligning LLM and human planning\. More broadly, our framework provides a generalizable approach for interpreting the structure of LLM planning across strategic domains\.

## Metaphor Is Not All Attention Needs

**Authors:** Olga Sorokoletova; Francesco Giarrusso; Giacomo De Luca; Piercosma Bisconti Lucidi; Matteo Prandi; Federico Pierucci; Marcello Galisai; Vincenzo Suriani; Daniele Nardi

**ID:** 153558 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KV6QfeD53p>) | [PDF](<https://openreview.net/pdf?id=KV6QfeD53p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153558>)

Large language models are increasingly deployed in safety\-critical and user\-facing applications, where their ability to resist harmful instructions is essential\. Although post\-training aims to make models robust against many jailbreak strategies, recent evidence shows that stylistic reformulations, such as poetic transformation, can still bypass safety mechanisms with alarming effectiveness\. This raises a central question: why do literary jailbreaks succeed? In this work, we investigate whether their effectiveness depends on specific poetic devices, on a failure to recognize literary formatting, or on deeper changes in how models process stylistically irregular prompts\. We address this problem through an interpretability analysis of attention patterns\. Our analysis proceeds in three steps: we perform input\-level ablation studies to assess the contribution of individual and combinations of rhetorical devices; we construct a novel interpretable vector representation of attention maps; we cluster these representations and train linear probes to predict both safety outcomes and literary format\. Our results show that models distinguish poetic from prose formats with high accuracy, yet struggle to predict jailbreak success within each format\. Clustering further reveals clear separation by literary format, but not by safety label\. These findings indicate that jailbreak success is not caused by a failure to recognize poetic formatting; rather, poetic prompts induce distinct processing patterns that remain largely independent of harmful\-content detection\. Overall, literary jailbreaks appear to misalign large language models not through any single poetic device, but through accumulated stylistic and structural irregularities that alter prompt processing and avoid lexical triggers considered during post\-training\. This suggests that robustness requires safety mechanisms that account for style\-induced shifts in model behavior\. We use Qwen3\-14B as a representative open\-weight case study for all reported experiments\.

## Are Your Reasoning Models Reasoning or Guessing? A Mechanistic Analysis of Hierarchical Reasoning Models

**Authors:** Zirui Ren; Ziming Liu

**ID:** 154084 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GL0HgZuYCW>) | [PDF](<https://openreview.net/pdf?id=GL0HgZuYCW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154084>)

Hierarchical reasoning model \(HRM\) achieves extraordinary performance on various reasoning tasks, significantly outperforming large language model\-based reasoners\. To understand the strengths and potential failure modes of HRM, we conduct a mechanistic study on its reasoning patterns and find three surprising facts: \(a\) \*\*Failure of extremely simple puzzles\*\*, e\.g\., HRM can fail on a puzzle with only one unknown cell\. We attribute this failure to the violation of the fixed point property, a fundamental assumption of HRM\. \(b\) \*\*"Grokking" dynamics in reasoning steps\*\*, i\.e\., the answer is not improved uniformly, but instead there is a critical reasoning step that suddenly makes the answer correct; \(c\) \*\*Existence of multiple fixed points\*\*\. HRM "guesses" the first fixed point, which could be incorrect, and gets trapped there for a while or forever\. All facts imply that \*\*HRM appears to be "guessing" instead of "reasoning"\*\*\. Leveraging this "guessing" picture, we propose three strategies to scale HRM's guesses: data augmentation \(scaling the quality of guesses\), input perturbation \(scaling the number of guesses by leveraging inference randomness\), and model bootstrapping \(scaling the number of guesses by leveraging training randomness\)\. On the practical side, by combining all methods, we develop \*\*Augmented HRM, boosting accuracy on Sudoku\-Extreme from 55\.0% to 96\.9%\*\*\. On the scientific side, our analysis provides new insights into how reasoning models "reason"\.

## Instruction Anchor: Dissecting the Mechanistic Dynamics of Modality Arbitration

**Authors:** Yu Zhang; Mufan Xu; Xuefeng Bai; Kehai Chen; Pengfei Zhang; Yang Xiang; Min zhang

**ID:** 150433 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i55gKixTsv>) | [PDF](<https://openreview.net/pdf?id=i55gKixTsv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150433>)

Modality following is the ability to selectively leverage multimodal contexts based on user instructions\.  It is fundamental to the safety and reliability of multimodal large language models \(MLLMs\) in real\-world deployments\.  However, the internal mechanisms governing this decision\-making process remain largely under\-explored\. In this work, we investigate the mechanism underlying  modality following through an information flow perspective\. Our findings reveal that instruction tokens serve as structural anchor for modality arbitration: Shallow attention layers perform undifferentiated information transfer, routing multimodal cues to instruction tokens as a latent buffer;  in contrast, deep attention layers selectively strengthen the instruction\-compliant subspace and resolve modality arbitration according to the instruction\-specified intent, with a sparse subset of attention heads driving this process\. Targeted attention\-head interventions further validate the functional specificity of these heads: blocking only $5\\%$ of the identified heads substantially degrades modality following while preserving general visual and language capabilities, whereas targeted amplification can restore failed modality\-following samples by up to approximately $60\\%$\. Together, this work provides a mechanistic account of modality following and informs future efforts to improve how MLLMs integrate and utilize multimodal evidence under user instructions\. \\footnote\{All data and code will be released upon acceptance\.\}

## Mutual Predictability Decomposition: Learning Interpretable Cross\-Set Structure via Bi\-Directional Prediction

**Authors:** Zixi Qin; Wanqing Li; Yuanhao Zhuo; Guoxin Su

**ID:** 148650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wA8X8awGkg>) | [PDF](<https://openreview.net/pdf?id=wA8X8awGkg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148650>)

Understanding relationships between variable sets is fundamental in machine learning, particularly in medical data analysis\. Existing methods typically provide only coarse shared/private partitioning of variables, limiting their ability to reveal finer\-grained predictive structures across views\. We propose Mutual Predictability Decomposition \(MPD\), a framework that decomposes the variables in each view into three subsets: mutually predictable variables that can be inferred across views, auxiliary variables that are themselves not cross\-view predictable but are necessary for predicting the mutually predictable subset, and unpredictable variables that do not contribute to cross\-view predictability\. MPD is formulated as a coupled bi\-directional prediction problem with sparse variable assignment, and optimized through a differentiable relaxation implemented using gated neural networks\. Experiments on synthetic and real\-world medical datasets demonstrate that MPD recovers interpretable cross\-view structures, improves cross\-view prediction, and provides more informative decompositions than existing relationship analysis methods\. Code will be available on GitHub upon acceptance\.

## When Is Rank\-1 Steering Cheap? Geometry, Granularity, and Budgeted Search

**Authors:** John Robertson; Jianing Zhu; Haris Vikalo; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 148838 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umOBxhQMmJ>) | [PDF](<https://openreview.net/pdf?id=umOBxhQMmJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148838>)

Activation steering offers a lightweight way to control large language models without retraining, but its effectiveness varies sharply across concepts\. Prior work often interprets this variability as evidence that many concepts are not well captured by a single steering direction\. We argue instead that much of this variability reflects search difficulty: a useful rank\-1 intervention often exists, but finding it can be expensive\. We formalize rank\-1 steering as a budget\-constrained optimization problem over intervention layer and coefficient\. Across the concepts and model families, prompt\-boundary directional alignment predicts where effective interventions are likely to occur, enabling geometry\-guided search that reaches high utility with substantially fewer evaluations, reducing the trials needed to recover 95\\% of best\-found utility by 39\.8\\% on average across three model families\. To explain why some concepts remain expensive even under better search, we introduce concept granularity, a measure of directional heterogeneity across contrastive contexts\. Granularity distinguishes concepts whose difference vectors share a stable global direction from those where prompts agree locally within each input but the utility\-maximizing direction rotates systematically across inputs\. Higher granularity is associated with both slower convergence and lower best\-found steering performance \(Pearson $r = 0\.44$ with trials\-to\-95\\%, $p &lt; 0\.001$, and $r=\-0\.46$ with best\-found utility, $p &lt; 0\.001$\)\. These observations suggest a practical workflow rather than a single universal vector\-construction rule\. We therefore present GRACE, a Granularity\- and Representation\-Aware Concept Engineering framework that uses activation geometry to diagnose the dominant source of steering difficulty, choose the appropriate remedy, and allocate optimization effort more efficiently\. Our results shift the frame of activation steering from "when does rank\-1 fail?" to "when is rank\-1 cheap and stable?", and turn activation geometry from a descriptive tool into an actionable prior for LLM control\.

## Intrinsically Interpretable Attention via Sparse Post\-Training

**Authors:** Florent Draye; Anson Lei; Hsiao\-Ru Pan; Ingmar Posner; Bernhard Schölkopf

**ID:** 152659 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RMkXEqB3sY>) | [PDF](<https://openreview.net/pdf?id=RMkXEqB3sY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152659>)

We introduce a simple post\-training method that makes transformer attention sparse without sacrificing performance\. Applying a flexible sparsity regularisation under a constrained\-loss objective, we show on models up to 7B parameters that it is possible to retain the original pretraining loss while reducing attention connectivity to $\\approx 0\.4$% of its edges\. Unlike sparse\-attention methods designed for computational efficiency, our approach leverages sparsity as a structural prior: it preserves capability while exposing a more organized and interpretable connectivity pattern\. We find that this local sparsity cascades into global circuit simplification: task\-specific circuits involve far fewer components \(attention heads and MLPs\) with up to 100× fewer edges connecting them\. Additionally, using cross\-layer transcoders, we show that sparse attention substantially simplifies attention attribution, enabling a unified view of feature\-based and circuit\-based perspectives\. These results demonstrate that transformer attention can be made orders of magnitude sparser, suggesting that much of its computation is redundant and that sparsity may serve as a guiding principle for more structured and interpretable models\.

## How do Small Transformer Models Learn Hard Math Tasks?

**Authors:** Eshika Saxena; Kristin E\. Lauter

**ID:** 148782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v7nparSpqA>) | [PDF](<https://openreview.net/pdf?id=v7nparSpqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148782>)

Recent works have demonstrated that transformers can be trained to recover sparse, binary cryptographic secrets in the Learning With Errors \(LWE\) problem, a foundational problem that underlies many post\-quantum cryptographic schemes\. However, as architectures have evolved to efficient encoder\-only models, the mechanism by which these models recover the cryptographic secret has become more opaque\. In this paper, we present the first layer\-wise and embedding\-level mechanistic interpretability analysis of encoder\-only transformers trained on LWE samples\. We reveal a surprising phenomenon: despite achieving near\-zero exact prediction accuracy on the training objective, the models successfully recover the secret by bypassing the standard predictive pathways\. We use dimensionality reduction, causal intervention, and linear probing and find that the secret is implicitly present in the positional embedding\. Building on this mechanistic understanding, we introduce an architectural intervention that applies $L\_1$ sparsity regularization directly to the positional embeddings\. This modification forces the model to explicitly isolate the latent secret, transforming the computationally expensive post\-hoc secret recovery process into a direct, human\-interpretable parameter inspection\. Our findings provide fundamental insights into how transformers allocate representational capacity when faced with high\-noise, structured combinatorial problems\.

## Scaling Laws for SAE Training Data

**Authors:** Nikita Koryagin; Nikita Balagansky; Daniil Gavrilov

**ID:** 148634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wGJ8YYzO5w>) | [PDF](<https://openreview.net/pdf?id=wGJ8YYzO5w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148634>)

Sparse autoencoder \(SAE\) training is often bottlenecked by activation storage\. We show that the stored activation buffer can be far smaller than the total SAE training budget: quality depends mainly on the number of \\emph\{unique\} activations, not on whether every training token is fresh\. After a short diversity\-limited regime, additional fresh activations provide little benefit; replaying the same buffer preserves both reconstruction and interpretability performance\. We capture this diversity\-\-repetition tradeoff with a data\-constrained scaling law and validate it across dictionary sizes, token budgets, Llama\-3\.1 and Qwen3 models, early/middle/late layers, BatchTopK/TopK/JumpReLU SAEs, and downstream metrics including EV, reconstruction MSE, feature absorption, automated interpretability, and sparse probing\. The resulting buffer\-sizing rule is simple: choose the smallest activation buffer that reaches the quality plateau, then use replay to spend the remaining training budget\. In our experiments, this reduces activation storage by $8\\text\{\-\-\}64\\times$ with negligible quality loss\.

## What the Geometry of Good Models Tells Us

**Authors:** Alexis Fox; Samuel Orellana Mateo; Krish Yadav; Yiyang Sun; Zachery Boner; Cynthia Rudin

**ID:** 155858 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2O4KP67cVE>) | [PDF](<https://openreview.net/pdf?id=2O4KP67cVE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155858>)

Practitioners using machine learning on noisy tabular data can often find simpler, more interpretable models with the same accuracy as black box models\. In some cases, this is because the noise in the data induces a large Rashomon set, that is, a large set of near\-optimal models, which then frequently contains simpler models\. However, our understanding of this effect from discrete hypothesis classes \-\-\- the Rashomon set's size, the diversity of its predictions, and implicit regularization \-\-\- leads to a contradiction in continuous hypothesis spaces, and thus does not directly establish whether noise should necessarily induce simpler or more diverse models\. We reconcile the seemingly conflicting effects by showing geometrically that noise drives simplicity through separate mechanisms for linear, logistic, and generalized additive models\. We introduce the Rashomon reducibility cost to quantify whether a given model simplification is possible within the Rashomon set, and characterize how this cost changes under general data properties such as label noise\. For practitioners working with noisy tabular data, our results suggest that simpler, more interpretable models will be included in the Rashomon set, so that black box models will generally not be needed\.

## Distributionally Robust Algorithmic Recourse for Tree Ensembles

**Authors:** Kentaro Kanamori; Ken Kobayashi; Takuya Takagi

**ID:** 150289 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jHEZML7XAa>) | [PDF](<https://openreview.net/pdf?id=jHEZML7XAa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150289>)

Algorithmic recourse \(AR\) aims to provide a recourse action that alters an undesired prediction made by a machine learning model\. While standard AR methods assume the model does not change over time, this assumption is often violated in practice due to distribution shifts or data updates, rendering the suggested actions invalid\. To address this issue, recent studies have proposed several methods that provide actions robust to model changes\. Most of them construct an uncertainty set of models by perturbing continuous model parameters, such as the weight vectors of neural networks, and then seek actions that remain valid for all models in the set\. However, such an approach cannot be directly applied to tree ensembles because their model parameters include discrete tree structures, which cannot be perturbed in the same way as neural networks\. In this paper, we introduce a new robust AR framework for tree ensembles through the lens of distributionally robust optimization \(DRO\)\. Our key idea is to express the model change in a tree ensemble as a perturbation to the distribution of predictions made by decision trees in the ensemble, rather than to the model parameters themselves\. This formulation allows us to naturally cast the robust AR problem for tree ensembles as a DRO problem\. We then show that, by choosing a specific discrepancy measure between distributions, our robust validity constraint can be reformulated into a tractable one that can be evaluated as efficiently as the standard validity constraint\. Building on this reformulation, we propose an efficient optimization algorithm by extending the existing search\-based method for tree ensembles\. Experimental results demonstrated that our method achieved a better robustness\-cost trade\-off than existing robust methods applicable to tree ensembles, while maintaining comparable runtime to the standard method\.

## Internal Evaluation of Unsupervised Anomaly Detection Algorithms with Explanation

**Authors:** Yue Shao; Baile Xu; Furao Shen; Jian Zhao

**ID:** 139056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nph44qznwG>) | [PDF](<https://openreview.net/pdf?id=nph44qznwG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139056>)

Although numerous algorithms have been proposed for unsupervised anomaly detection, there is currently no widely acknowledged internal evaluation method tailored specifically to this task\. Existing internal evaluation methods typically assess score distributions alone or depend on auxiliary classifiers, limiting their reliability and interpretability\. To address these problems, we propose SSSD \(Similar Scores, Similar Data\), an evaluation framework inspired by the smoothness assumption in machine learning—that similar inputs should yield similar outputs\. We adapt this principle to anomaly detection by requiring that locally similar data points be assigned similar anomaly scores\. Instead of testing this assumption directly, SSSD identifies violations of this principle by comparing the similarity of data with similar anomaly scores, interpreting a significant difference as a higher probability of erroneous detection\. This evaluation of similarity is measured through nearby\-score and nearby\-distance, which is calculated based on the distances between neighboring data points and their corresponding anomaly scores\. SSSD is highly interpretable, providing valuable insights for identifying mislabeled data\. Experimental results show that our proposed method is both effective and robust for evaluating the performance of unsupervised anomaly detection algorithms across artificial and real\-world datasets\.

## Assign and Add: A Mechanistic Study of Compositional Arithmetic

**Authors:** Brady Exoo; Alberto Bietti; John Sous

**ID:** 153282 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MPwsN5TWrW>) | [PDF](<https://openreview.net/pdf?id=MPwsN5TWrW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153282>)

Modern large language models are able to compose skills in order to perform complex tasks, many of which might not have been seen during training\. The details of how exactly this composition occurs remain elusive\. In this paper, we study a mechanism for compositional generalization in transformers by considering a simple controlled setting involving variable assignment and modular addition\. By partitioning our training data into disjoint sets, we observe that small transformers are able to generalize to previously unseen combinations of variables and numbers\. Our mechanistic analysis shows that the same \`\`modular addition'' MLP module is used whether the inputs are given directly or indirectly through a separate variable assignment mechanism\. We also analyze the training dynamics from an empirical lens, which reveals three phases of learning: first, modular addition is learned, then the structure required for variable assignment, and finally a refinement phase where the model generalizes to sequences not seen in training\. Finally, we provide a theoretical framework to explain how compositionality emerges from training dynamics\. These results suggest that compositional generalization can be a natural consequence of the compositionality of internal mechanisms in transformers\.

## Structural Support Certificates for Mechanistic Hypothesis Selection

**Authors:** Max Ruiz Luyten; Mihaela van der Schaar

**ID:** 155003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9I3asu8ilw>) | [PDF](<https://openreview.net/pdf?id=9I3asu8ilw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155003>)

Modern scientific discovery systems can propose more mechanistic hypotheses than laboratories can test\. We study the downstream selection problem: after upstream retrieval, extraction, expert modeling, or curation has fixed a finite locally factorized posterior over admissible mechanisms, when does the posterior evidence justify acting on one structural hypothesis rather than its rivals? For a query $A\\rightsquigarrow B$, we define \*structural support\* as the posterior mass of mechanisms in which $A$ reaches $B$ by a directed path\. This is not a retrieval rank, direct\-edge score, or MAP graph decision: support can be distributed across many compatible mechanisms\. Our main result is a local certificate for this global support quantity\. For path cutoff $L$ and locality radius $m$, truncated support is a convex combination of exact boundary\-conditioned local supports\. Optimizing over locally admissible blanket states gives a boundary range $\[\\\\ell\_\{L,m\},u\_\{L,m\}\]$, and a certified tail bound $\\bar r\_L$ accounts for longer witnesses: $p\_\{AB\}\\in\[\\\\ell\_\{L,m\},\\min\\\{1,u\_\{L,m\}\+\\bar r\_L\\\}\]$\. For coupled rivals, the same boundary\-conditioned calculations yield a joint feasible set rather than only independent coordinate intervals\. We convert these certificates into resolve\-or\-abstain decisions: an action is resolved only when it wins throughout the certified support set\. Under valid certificates, a resolved action is the unique strict utility maximizer inside the declared fixed model, action set, and utilities; otherwise, the solver abstains and reports whether boundary, tail, computation, evidence, or outer\-model uncertainty blocks resolution\. On controlled and biologically scaffolded finite\-posterior records, the implementation has zero endpoint containment misses and zero false fixed\-model resolutions\. In a coupled\-rival diagnostic, joint feasible sets resolve $14/24$ cases versus $6/24$ for scalar boxes, with no false commitments\.

## Decomposing Conformal Uncertainty: Calibration\- and Instance\-Driven Feature Attribution

**Authors:** Sangyeon Cho; Minyoung Cho; Jungsoo Kim; Sujeong Oh; Sanghack Lee

**ID:** 149998 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lZavBaxJ68>) | [PDF](<https://openreview.net/pdf?id=lZavBaxJ68>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149998>)

In high\-stakes settings, decision\-makers using conformal prediction \(CP\) read the predictive interval's width as their operational uncertainty signal\. Local feature attribution methods, applied to that width, silently conflate two semantically distinct contributions: a calibration\-driven baseline that depends on the held\-out calibration set, and an instance\-driven term that depends on the test point\. We propose a two\-game Shapley construction\-\-\-one game over feature coalitions at the test point, one over feature coalitions across the calibration set\-\-\-that decomposes the total attribution into calibration\-driven and instance\-driven components\. The construction is method\-agnostic on two axes: any local attribution method that can be applied to a scalar uncertainty target can be used, and any split CP family whose uncertainty size admits a known separation into a calibration\-only and an instance\-only summary satisfies the decomposition\. Empirically, the calibration\-driven and instance\-driven attributions frequently carry opposite signs on synthetic and real data, with representative cases where a feature's sign reverses between the two views; the total attribution then becomes a misleading sum\. On a clinical\-decision task with semi\-synthetic data, this conflation degrades decision quality, whereas jointly considering the calibration\-driven and instance\-driven attributions recovers high\-uncertainty cases missed by total attribution\. We further empirically verify that the decomposition holds across multiple CP families that satisfy the separability conditions\.

## On the Recall Scaling Laws in Mamba: A Theoretical and Mechanistic Study via Hashing

**Authors:** Yuval Koren; Assaf Ben\-Kish; Raja Giryes; Lior Wolf; Itamar Zimerman

**ID:** 155580 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ZDfHcccsn>) | [PDF](<https://openreview.net/pdf?id=4ZDfHcccsn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155580>)

Associative Recall \(AR\) is the cognitive ability to learn and retrieve links between items in memory\. In NLP, AR is used as a benchmark for evaluating the in\-context memory capacity of architectures such as Mamba, and has been found to strongly correlate with language modeling performance\. This paper explores AR from the perspective of mechanistic interpretability, aiming to reverse\-engineer the exact internal algorithm used by Mamba to perform recall\. Our key insight is that Mamba performs recall by implicitly learning linear hash functions, and we identify the low\-level circuit that enables this behavior\. Building on these findings and inspired by theoretical tools in similarity\-preserving hashing, such as the Johnson–Lindenstrauss \(JL\) lemma, we develop a theoretical framework for analyzing AR, which we term recall scaling laws\. For example, given a model’s state, context length, and embedding dimensions, our theory predicts a lower bound on the largest vocabulary size that can be perfectly recalled in the AR task\. Empirical results show that this bound is tight and predictive, offering insights into how AR capacity scales with vocabulary size, state size, embedding size, and model architecture\.

## Understanding Sample Efficiency in Predictive Coding

**Authors:** Gaspard Oliviers; Elene Lominadze; Rafal Bogacz

**ID:** 155323 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6UCckKeyef>) | [PDF](<https://openreview.net/pdf?id=6UCckKeyef>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155323>)

Predictive Coding \(PC\) is an influential account of cortical learning\. Much of recent work has focused on comparing PC to Backpropagation \(BP\) to find whether PC offers any advantages\. Small scale experiments show that PC enables learning that is more sample efficient and effective in many contexts, though a thorough theoretical understanding of the phenomena remains elusive\. To address this, we quantify the efficiency of learning in BP and PC through a metric called "target alignment", which measures how closely the change in the output of the network is aligned to the output prediction error\. We then derive and empirically validate analytical expressions for target alignment in Deep Linear Networks\. We show that learning in PC is more efficient than BP, which is especially pronounced in deep, narrow and pre\-trained networks\. We also derive exact conditions for guaranteed optimal target alignment in PC and validate our findings through experiments\. We study full training trajectories of linear and non\-linear models, and find the predicted benefits of PC persist in practice even when some assumptions are violated\. Overall, this work provides a mechanistic understanding of the higher learning efficiency observed for PC over BP in previous works, and can guide how PC should be parametrised to learn most effectively\.

## What Arranges Features in Activation Space? Non\-Classical Predictive Geometry in Next\-Token Predictors

**Authors:** Adam Shai; Thomas J Elliott; Paul Riechers

**ID:** 148855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ufZDbHJ06x>) | [PDF](<https://openreview.net/pdf?id=ufZDbHJ06x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148855>)

Mechanistic interpretability often studies the local features and circuits that implement model computations\. What principles govern the arrangement of these features and circuits into geometric structures in activation space? To make this tractable, we study how the computational class of the training\-data generator constrains the geometry of predictive states\.  We show that while the data distribution determines which features are required for prediction, a predictor realizes those features as beliefs about its current latent state, and the generator class determines the geometry of those beliefs\. Using this theoretical insight, we design synthetic datasets whose minimal predictive representations fall into different model classes, and test which geometry neural networks learn\. In particular, we train transformers, LSTMs, GRUs, and vanilla RNNs on datasets whose predictive geometries are known analytically: a classical HMM process, a quantum\-realizable process with no finite\-state HMM realization, and a generalized\-probabilistic process with no finite\-dimensional quantum realization\. Across architectures, a single affine map from activations decodes the corresponding predictive representation in each case:  HMM beliefs in a latent simplex, Bloch\-vector quantum states, or a finite\-dimensional generalized predictive vector\.  These representations emerge during training and fit the compact non\-classical geometry far better than finite\-order classical Markov baselines\. These results suggest that understanding predictive representations requires asking not only which features a network represents, but what geometry organizes those features\.

## Attention Trajectories as a Diagnostic Axis for Deep Reinforcement Learning

**Authors:** Charlotte Beylier; Hannah Selder; Arthur Fleig; Simon M\. Hofmann; Nico Scherf

**ID:** 156756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0aa9zthk7k>) | [PDF](<https://openreview.net/pdf?id=0aa9zthk7k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156756>)

The emergence and evolution of feature reliance in deep reinforcement learning agents remain poorly understood\. Here, we introduce a methodological framework for analyzing the learning process through quantitative analysis of saliency maps\. This approach aggregates saliency information at the object and modality level into hierarchical attention profiles, quantifying how agents allocate attention over time, thereby forming attention trajectories throughout training\. These profiles are then compared across controlled conditions, connected to behavioral measurements and reproduced with different saliency methods to assess the robustness of the findings\. Applied to Atari 2600 benchmarks, custom Pong environments, and biomechanical user simulations in visuomotor tasks, this framework uncovers algorithm\-specific attention biases, diagnosed unintended reward\-driven strategies, and overfitting to redundant sensory channels\. These patterns correspond to measurable behavioral differences, demonstrating empirical links between attention profiles, learning dynamics, and agent behavior\. The results establish attention trajectories as a promising diagnostic axis for tracing how feature reliance develops during training and for identifying biases and vulnerabilities invisible to performance metrics alone\.

## Exponential Map Models as an Interpretable Framework for Generating Neural Spatial Representations

**Authors:** Markus Pettersen; Nicolai Haug; Joakim Bergli; Thomas M Surowiec; Mikkel Pawlowski Lepperød

**ID:** 155704 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3ZO4NGunEr>) | [PDF](<https://openreview.net/pdf?id=3ZO4NGunEr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155704>)

A foundational challenge in neuroscience and AI is understanding how physical space is mapped into neural representations\. While artificial neural networks can generate brain\-like spatial representations, such as those observed in place and grid cells, their "black\-box" nature makes it difficult to determine if these representations arise as general solutions or as artifacts of a chosen architecture, objective function, or training protocol\. Critically, these models offer no guarantee that learned solutions for core navigational tasks, like path integration \(updating position from self\-motion\), will generalize beyond their training data\. To address these challenges, we introduce a first\-principles framework based on the exponential map\. Bypassing gradient\-based optimization entirely, we use generator matrices to map physical locations to neural population vectors\. Within the proposed formalism, essential navigational capabilities emerge analytically as intrinsic geometric properties\. Exact, trajectory\-invariant path integration naturally dictates commuting generators\. Furthermore, skew\-symmetric generators inherently yield equinorm representations with translationally invariant similarities\. Translational similarity invariance is critical for stable egocentric navigation in open fields and empirical models typically enforce them via explicit regularization or architectural constraints\. Extending our geometric perspective, we demonstrate that preserving the metric of flat space restricts the spatial wavevectors \(derived from the generator eigenvalues\) to form sets of roots of unity\. The proposed framework supports diverse, biologically relevant spatial tuning profiles, including periodic grid fields, localized place fields, and context\-dependent remapping\. Beyond explaining mechanisms that underpin recent deep learning models of spatially\-tuned cells, our work provides a formal connection between continuous attractor dynamics and oscillatory interference models\. Finally, we show how the framework natively supports goal\-oriented, multi\-map navigation by identifying superpositions of representations alongside remapping as hyperdimensional computing operations\. By grounding spatial representations in strict algebraic laws, this work offers a transparent alternative to empirical representation learning, revealing the exact conditions required for a coherent neural map of space\.

## Interpretable but Fragile? Robustness of Concept Bottlenecks under Geometric\-Semantic Perturbations

**Authors:** Hanwei Zhang; Tianma Hu; Gaojie Jin; Xu Cheng; Ronghui Mu

**ID:** 154045 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GckHR5gDV2>) | [PDF](<https://openreview.net/pdf?id=GckHR5gDV2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154045>)

Concept Bottleneck Models \(CBMs\) are widely promoted as a pathway to interpretable and potentially more robust learning, yet existing evidence on their robustness remains mixed and often contradictory\. We argue that these discrepancies arise from conflating different robustness notions and perturbation regimes, rather than from fundamental disagreements about CBMs themselves\. To disentangle these factors, we introduce a generator\-based evaluation framework that enables controlled comparisons between standard classifiers and CBMs under two distinct perturbation types: continuous geometric perturbations in latent space and discrete semantic interventions in concept space\. Within this framework, we evaluate robustness both empirically, via prediction and concept\-level sensitivity metrics, and certifiably, using randomized smoothing in latent and concept spaces\. Across experiments on CUB‑200‑2011 and RIVAL‑10 variants, we reconcile previously conflicting findings by clarifying when, and in what sense, concept bottlenecks do or do not improve robustness\. By further analyzing robustness under varying task conditions, including class semantic similarity and concept vocabulary size, we show that interpretability does not inherently confer robustness\. Instead, concept bottlenecks shift where and how sensitivity manifests, revealing a nuanced interpretability–robustness trade‑off that depends critically on the perturbation regime and task structure\. Together, the framework and findings clarify how concept bottlenecks influence robustness and provide guidance for designing CBMs that better balance interpretability and robustness\.

## Mechanistic Interpretability of EEG Foundation Models via Sparse Autoencoders

**Authors:** William Lehn\-Schiøler; Magnus R Kjaer; Rahul Thapa; Magnus G Pedersen; Anton M Storgaard; Nick Williams; Andreas Brink\-Kjaer; Tue Lehn\-schiøler; Sadasivan Puthusserypady; James Zou; Lars Kai Hansen

**ID:** 150909 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eWfHTYapcq>) | [PDF](<https://openreview.net/pdf?id=eWfHTYapcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150909>)

EEG foundation models achieve state\-of\-the\-art clinical performance, yet the internal computations driving their predictions remain opaque: a barrier to clinical trust\. We apply TopK Sparse Autoencoders \(SAEs\) across three architecturally distinct EEG transformers: SleepFM, REVE, and LaBraM to extract sparse feature dictionaries from their embeddings\. By grounding these features in a clinical taxonomy \(abnormality, age, sex, and medication\), we benchmark monosemanticity and entanglement across architectures\. A single hyperparameter procedure, driven by an intrinsic dictionary health audit, transfers robustly across all three architectures\. Via concept steering, we introduce a "target vs\. off\-target" probe area metric to quantify steering selectivity and reveal three operational regimes: selectively steerable, encoded but entangled, and non\-encoded\. This framework exposes critical representational failures: "wrecking\-ball" interventions that collapse global model performance, and clinical entanglements, such as age–pathology confounding, where it is impossible to suppress one concept without corrupting the other\. Finally, a spectral decoder maps these interventions back to the amplitude spectrum, translating latent manipulations into physiologically interpretable frequency signatures, such as pathological slow\-wave suppression and $\\alpha$\-band restoration\.

## Comparing Explanations is not Enough,Explain the Change: New Standards are Needed to Explain Behavioral Shifts in Large Language Models

**Authors:** Martino Ciaperoni; Marzio Di Vece; Roberto Pellungrini; Luca Pappalardo; Fosca Giannotti; Francesco Giannini

**ID:** 139995 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y0jWumzUxx>) | [PDF](<https://openreview.net/pdf?id=y0jWumzUxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139995>)

Large\-scale foundation models exhibit \*behavioral shifts\* when subjected to interventions such as scaling, fine\-tuning, reinforcement learning with human feedback, or in\-context learning\. Current explainability methods are structurally ill\-suited to explain these shifts, because either they treat models as static objects, as traditional eXplainable AI \($XAI$\) approaches do, or merely compare independent explanations across different checkpoints of a model\. As a result, these approaches fail to explain the functional transition between two model instances in which a certain behavior has shifted following an intervention\. This gap creates significant governance risks across jurisdictions including the EU AI Act, US state legislation, and Chinese AI regulations, which require documenting causal chains for substantial system modifications\.  This position paper argues that explaining behavioral shifts in large language models requires a principled approach that treats the shift itself as the primary object of explanation: namely, one that explains how and why an intervention transforms a reference model into an updated model with different behavior\. To support this claim, we introduce \*Comparative\* $XAI$ \($XAI\_\{\\Delta\}$\), a novel $XAI$ paradigm aimed at explaining the difference between two model checkpoints where a behavior has shifted, together with a set of desiderata specifying what $XAI\_\{\\Delta\}$ explainers and explanations must satisfy, including comparability, validity, actionability, and monitoring, with the goal of grounding model auditing in explicit, measurable requirements\. Finally, we provide preliminary evidence suggesting the need for $XAI\_\{\\Delta\}$ in practice through some illustrative experiments, compiling the resulting findings into a transition report directly usable for governance and incident documentation\.

## Hierarchical Agglomerative Clustering via Relaxed Representatives

**Authors:** Eduardo Laber; Miguel A Batista

**ID:** 154138 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fxc3acAsk6>) | [PDF](<https://openreview.net/pdf?id=Fxc3acAsk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154138>)

Due to their simplicity and interpretability, linkage methods are a central class of hierarchical agglomerative clustering \(HAC\)\. In particular, representative\-based methods, such as centroid and medoid approaches, are appealing because their representatives provide intuitive summaries of the clusters\. However, many representative\-based linkage methods  suffer from important drawbacks, such as high computational cost and the generation of inversions, which limit their broader applicability\.  We introduce \*relaxed\-representative clustering\*, a principled generalization of representative\-based linkages that preserves their interpretability while addressing these limitations\.  This framework yields \(i\) RMM\*, a quadratic\-time variant of the cubic\-time Minimax method, and \(ii\) RC\*, an inversion\-free variant of the Centroid method whose representatives belong to the input set\.   On the theoretical side, we prove that for every $k$ our methods are $O\(\\min\\\{k,\\log n\\\}\)$\-approximation algorithms for the $k$\-center  objective\.  Empirically, experiments on tabular, biological, and textual datasets show that RMM\* consistently outperforms several baselines and achieves clustering quality comparable to Minimax at a fraction of the computational cost\.  Meanwhile, RC\* remains competitive with the Centroid method while producing inversion\-free dendrograms and interpretable representatives\.

## Learning interpretable Schur forms of recurrent weight matrices

**Authors:** Alexander Lanine; Liana Akobian; N Alex Cayco Gajic

**ID:** 155071 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8gcHRPsjr5>) | [PDF](<https://openreview.net/pdf?id=8gcHRPsjr5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155071>)

Recurrent neural networks are widely used in neuroscience and machine learning, but their weight matrices often appear dense and unstructured, defying clean interpretation\. The Schur decomposition expresses any recurrent weight matrix in quasi\-triangular form, allowing network dynamics to be interpreted as a latent circuit of "functionally feedforward" interactions between orthogonal modes\. However, its application for interpreting recurrent weight matrices has been limited due to its well\-known combinatorial non\-uniqueness\. We introduce SchurMO \(Schur Manifold Optimization\), a method for discovering structured Schur forms via Riemannian gradient descent on the manifold of orthogonal similarity transformations, enabling recovery of target motifs\. Compared to a greedy baseline, SchurMO more reliably and more efficiently recovers ground\-truth latent motifs \(chain\-like, banded, and modular structure\) from noisy weight matrices\. Applying SchurMO to nonlinear recurrent networks enables recovery of latent chain\-like structure, providing a link between connectivity and the underlying dynamics of sequence production\. Our results highlight SchurMO as a scalable, computationally efficient approach to discovering latent structure in the Schur forms of recurrent weights\.

## PE\-SHAP: Causally Interpretable Path\-Wise Shapley Explanations

**Authors:** Maksym Buleshnyi; Joshua Loftus; Sakina Hansen

**ID:** 155303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6afj7vl5xr>) | [PDF](<https://openreview.net/pdf?id=6afj7vl5xr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155303>)

Shapley value\-based explanations are widely used to attribute model predictions, but standard variants capture associative rather than causal relationships\. Recent causally informed Shapley methods add a path\-wise decomposition, but suffer from two key limitations: they assign zero attribution to chain\-mediated paths, and their per\-path values do not align with classical mediation estimands\.  We propose PE\-SHAP, a Shapley\-inspired path\-wise decomposition built on the portion\-eliminated effect\. Per\-mediator values sum to the total mediated effect at every sample, aggregate to the Natural Indirect Effect at the population level, and match the Path\-Specific Effect under additive separability\. These are properties prior Shapley\-based path\-wise methods do not provide\. We validate PE\-SHAP analytically and through Monte\-Carlo experiments on synthetic SCMs with known path effects, and demonstrate it on real\-world fairness case studies using the German Credit and COMPAS datasets\.

## Transformers Linearly Represent Highly Structured World Models

**Authors:** Roman Kniazev; Nathanaël Fijalkow

**ID:** 155096 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8RPfEpnyrk>) | [PDF](<https://openreview.net/pdf?id=8RPfEpnyrk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155096>)

Do transformers, when trained on sequential reasoning traces, build internal models of the underlying task? And if so, does the structure of those internal representations mirror the structure of the domain? We train an 8\-layer transformer on Sudoku solving traces and perform a mechanistic analysis of its internal computation\. We establish two results\. First, the model builds a substructure world model: it does not represent the board state cell by cell, as a human analyst would expect, but organizes information around the rows, columns, and boxes that Sudoku's constraints act on\. Second, we identify a naked\-single circuit: a small set of dedicated neurons in the final MLP layer, each individually detecting when exactly one digit remains possible for a specific cell, and reliably promoting that digit\. These findings show that the geometry of an emergent world model is shaped by the constraint algebra of the domain, not its surface presentation, and that the resulting decision circuit is sparse, monosemantic, and fully interpretable\. More broadly, they demonstrate that mechanistic interpretability tools can recover an end\-to\-end algorithmic account of how a transformer solves a combinatorial reasoning task\.

## Explanation of Dynamic Physical Field Predictions using WassersteinGrad: Application to Autoregressive Weather Forecasting

**Authors:** Younes Essafouri; Laure Raynaud; Luciano DROZDA; Laurent Risser

**ID:** 151943 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wfi1c6oq52>) | [PDF](<https://openreview.net/pdf?id=Wfi1c6oq52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151943>)

As the demand to integrate Artificial Intelligence into high\-stakes environments continues to grow, explaining the reasoning behind neural\-network predictions has shifted from a theoretical curiosity to a strict operational requirement\. Our work is motivated by the explanations of autoregressive neural predictions on dynamic physical fields, as in weather forecasting\. Gradient\-based feature attribution methods are widely used to explain the predictions on such data, in particular due to their scalability to high\-dimensional inputs\.  It is also interesting to remark that gradient\-based techniques such as SmoothGrad are now standard on images to robustify the explanations using pointwise averages of  the attribution maps obtained from several noised inputs\.  Our goal is to efficiently adapt this aggregation strategy to dynamic physical fields\. To do so, our first contribution is to identify a fundamental failure mode when averaging perturbed attribution maps on dynamic physical fields: stochastic input perturbations do not induce stationary amplitude noise in attribution maps, but instead cause a geometric displacement of the attributions\. Consequently, pointwise averaging blurs these spatially misaligned features\.  To tackle this issue, we  introduce WassersteinGrad, which extracts a geometric consensus of perturbed attribution maps by computing their entropic Wasserstein barycenter\. The results, obtained on regional weather data and a meteorologist\-validated neural model,  demonstrate promising explainability properties of WassersteinGrad over gradient\-based baselines across both single\-step and autoregressive forecasting settings\.

## The Dead Salmons of AI Interpretability: The Need for a Statistical Inference Perspective

**Authors:** Maxime Méloux; Giada Dirupo; François Portet; Maxime Peyrard

**ID:** 140002 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w0wOa4UDHv>) | [PDF](<https://openreview.net/pdf?id=w0wOa4UDHv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140002>)

In a striking neuroscience study, the authors placed a dead salmon in an MRI scanner and showed it images of humans in social situations\. Astonishingly, standard analyses of the time reported brain regions \\textit\{predictive\} of social emotions\. The explanation, of course, was not supernatural cognition but a cautionary tale about misapplied statistical inference\. In AI interpretability, reports of similar \`\`dead salmon'' artifacts abound: feature attribution, probing, sparse auto\-encoding, and even causal analyses can produce plausible\-looking explanations for randomly initialized neural networks\. Upon inspection of this phenomenon our position is to argue for a pragmatic \\textbf\{statistical\-\-causal reframing\}: explanations of computational systems should be treated as parameters of a \(statistical\) model, inferred from computational traces\. This perspective goes beyond simply measuring statistical variability of explanations due to finite sampling of input data; interpretability methods become statistical estimators, and findings should be tested against explicit and meaningful \\textbf\{alternative computational hypotheses\}, with uncertainty quantified with respect to the postulated statistical model\. It also highlights important theoretical issues, such as the identifiability of common interpretability queries, which we argue is critical to understand the field’s susceptibility to false discoveries, poor generalizability, and high variance\.

## Robot Demonstration Videos Should Include Transparency Disclosures

**Authors:** Nozomi Nakajima

**ID:** 140054 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XJkRFttnNg>) | [PDF](<https://openreview.net/pdf?id=XJkRFttnNg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140054>)

This position paper argues that the robotics and AI community should adopt disclosure standards for demonstration videos\. As physical and financial constraints limit direct public access to embodied AI, public dissemination of progress in robotics is mainly through curated demonstration videos rather than direct experience with the technology\. In a large\-scale \(N=9,341\), pre\-registered experiment across six countries, we find that the general public struggles to discern both the visual authenticity \(e\.g\., distinguishing real footage from CGI\) and behavioral authenticity \(e\.g\., distinguishing autonomy from teleoperation\) of robot demonstration videos\. The omission of these details distorts public perception, leading people to overestimate the ability of robots to perform tasks and navigate real world environments\. Using evidence from behavioral science, we design a disclosure intervention and demonstrate that the inclusion of clear disclosures in robot demonstration videos significantly improves discernment of visual and behavioral authenticity, as well as understanding robots' capabilities\. Consequently, we propose the adoption of disclosure standards for robot demonstration videos to accurately calibrate public expectations and promote transparency in robotics research\.

## Position: The Road to Generalizable Neuro\-Symbolic Learning Should be Paved with Foundation Models

**Authors:** Adam Stein; Aaditya Naik; Neelay Velingker; Mayur Naik; Eric Wong

**ID:** 140111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7TUyXMSfhp>) | [PDF](<https://openreview.net/pdf?id=7TUyXMSfhp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140111>)

Neuro\-symbolic learning was proposed to address challenges with training neural networks for complex reasoning tasks with the added benefits of interpretability, reliability, and efficiency\. Neuro\-symbolic learning methods traditionally train neural models in conjunction with symbolic programs, but they face significant challenges that limit them to simplistic problems\. On the other hand, purely\-neural foundation models now reach state\-of\-the\-art performance through prompting rather than training, but they are often unreliable and lack interpretability\. Supplementing foundation models with symbolic programs, which we call neuro\-symbolic prompting, provides a way to use these models for complex reasoning tasks\. Doing so raises the question: What role does specialized model training as part of neuro\-symbolic learning have in the age of foundation models? To explore this question, we highlight three pitfalls of traditional neuro\-symbolic learning with respect to the compute, data, and programs leading to generalization problems\. This position paper argues that foundation models enable generalizable neuro\-symbolic solutions, offering a path towards achieving the original goals of neuro\-symbolic learning without the downsides of training from scratch\.

## FrED: External Data Influence Estimation via Domain Knowledge Graph Grounding

**Authors:** Theodoros Aivalis; Iraklis A Klampanos; Antonis Troumpoukis; Joemon M Jose

**ID:** 153357 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LzYzD8LNiK>) | [PDF](<https://openreview.net/pdf?id=LzYzD8LNiK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153357>)

The rapid deployment of generative AI has amplified the critical need for Training Data Attribution to ensure transparency and accountability\. However, current parametric approaches require computationally prohibitive access to model weights, while similarity\-based methods ignore deep structural context\. We propose a novel probabilistic framework that operates entirely in a black\-box setting\. Our method fuses continuous feature similarities with discrete, domain\-specific Knowledge Graphs \(KGs\)\. This approach ensures the attribution is grounded in structural reality, explicitly rewarding highly specific historical samples while preventing generic background data from dominating the results\. We evaluate our framework across two distinct domains where linking outputs to data and domain context is inherently complex: abstract artistic image synthesis and high\-dimensional physical weather forecasting\. Extensive benchmarking demonstrates the robust efficacy of our approach\. In the artistic domain, it achieves a strong Linear Datamodeling Score that exceeds standard black\-box similarity baselines, while closing much of the gap to gradient\-based estimators\. We additionally present a cross domain feasibility case study in environmental forecasting, where we use domain KGs to retrieve physically consistent historical analogs for regional flood forecasts, improving geographic localisation over a latent\-only baseline\. Operating entirely without internal model access, our approach provides an efficient, interpretable mechanism for post\-hoc influence analysis and domain\-grounded retrieval\.

## Parasite Features: Causal Abstraction Through Spurious Pathways

**Authors:** Denis Sutter; Qing Yao; Sasha Boguraev; Julian Minder; Antonio Di Maio; Thomas Hofmann; Kyle Mahowald; Tiago Pimentel

**ID:** 149518 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pXYWXZE3QV>) | [PDF](<https://openreview.net/pdf?id=pXYWXZE3QV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149518>)

Causal Abstraction can be used to define a notion of equivalence between a neural network and an algorithm, thus serving as a powerful framework for mechanistic interpretability\. In this paper, however, we show the existence of a class of spurious features which straightforwardly pass such equivalence tests\. Suppose there are two directions in a model's representation space where: \(i\) one discriminates the input based on some specific feature, and \(ii\) the other steers the model towards a certain output\. Causal Abstraction techniques can create a pathway leveraging these unrelated directions to simulate their combined behavior in the model, which thus spuriously appears to implement a certain feature\. In such cases, we say the method discovered a parasite feature\. Experimentally, we show that Distributed Alignment Search\-\-\-a Causal Abstraction\-based method\-\-\-finds parasite features using linear alignment maps in two tasks: syntactic agreement and two\-digit addition\. Our paper highlights an important consideration for Causal Abstraction and contributes to the ongoing debate about best practices for mechanistic interpretability\.

## The Algorithm Is Not the Behavior: Learned Priors Override Look\-Ahead in a Chess\-Playing Neural Network

**Authors:** Elias Sandmann; Sebastian Lapuschkin; Wojciech Samek

**ID:** 152268 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ULhusDnCQy>) | [PDF](<https://openreview.net/pdf?id=ULhusDnCQy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152268>)

Recent mechanistic work has uncovered learned algorithms within neural networks, from modular arithmetic to search and planning in game\-playing agents\. But does algorithmic structure guarantee algorithmic behavior? We investigate this in Leela Chess Zero, the strongest neural chess engine, where prior work identified learned look\-ahead\. By extending the logit lens to its move\-selecting policy network, we discover that correct puzzle solutions—including immediate checkmates—often appear in intermediate layers but are systematically overridden in the final output, a phenomenon we term \*forgotten puzzles\*\. Replicating prior analyses on these positions, we find that look\-ahead operates normally—future moves of the correct continuation are represented, causally important, and linearly decodable—ruling out a failure of the algorithm itself\. Instead, late layers increasingly shift toward prioritizing safe play over aggression\. To test whether this shift drives the override, we steer the model against these preferences and recover 61\.7% of forgotten puzzles, providing causal evidence that safety priors override algorithmically computed solutions\. These findings demonstrate that algorithmic structure does not guarantee algorithmic behavior: a model can internally solve a problem and still output the wrong answer\.

## ORCAID: Oblique Rule\-Based Continuous\-Action Interpretation for Deep RL Policies

**Authors:** Ignacio D\. Lopez\-Miguel; Ezio Bartocci; Thomas Eiter; Martin Tappler

**ID:** 148887 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uSYUHzQCCR>) | [PDF](<https://openreview.net/pdf?id=uSYUHzQCCR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148887>)

Explainability remains a key issue in reinforcement learning \(RL\)\. Distilling an interpretable policy from an agent trained in a complex environment is particularly challenging when the action space is continuous\. We introduce ORCAID, a novel method for extracting interpretable rule\-based policies from RL agents operating in mixed continuous\-discrete environments with continuous action spaces\. Our main contribution is an efficient oblique decision tree training algorithm that partitions the state space by hyperplanes and fits local linear models\. The key idea lies in a three\-stage split search: efficient random initialization, local refinement, and backward elimination\. Finally, adjacent leaves are merged to yield a concise set of interpretable rules describing a given deep RL policy\. We evaluate ORCAID on multiple RL environments, demonstrating that the extracted rule\-based policies maintain strong performance with a low number of parameters and can even be used to improve the performance of the original deep RL policy\.

## Within\-Model vs Between\-Prompt Variability in Large Language Models for Creative Tasks

**Authors:** Jennifer Haase; Jana Gonnermann\-Müller; Paul H\. P\. Hanel; Nicolas Leins; Thomas Kosch; Jan Mendling; Sebastian Pokutta

**ID:** 151087 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d535njwZHX>) | [PDF](<https://openreview.net/pdf?id=d535njwZHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151087>)

When a large language model \(LLM\) generates a creative response, how much of the outcome is determined by the prompt, the model, the task, or pure sampling luck? We address this question with a variance decomposition over 89,806 generations from 10 LLMs, 6 prompt strategies, and 30 Alternative Uses Task items, which is one of the most widely used creativity tests\. For output quality \(originality\), the results invert common assumptions: the AUT item being evaluated and the prompt strategy together account for over 72% of variance, while model choice contributes less than 8% and within\-LLM stochasticity alone exceeds model differences by more than 2×\. Controlling for the AUT item sharpens the picture further: prompt strategy then explains 3\.4× the variance of model choice\. For output quantity \(fluency\), the pattern reverses, with the LLM being the dominant factor\. We further show that prompts shape output distributions, not point estimates: “discriminative” prompts \(e\.g\., Persona\) widen the quality distribution and show higher peaks in capable models, while “constraining” prompts \(e\.g\., Format\) compress it\. Together, these results argue that single\-sample LLM evaluations are unreliable for open\-ended tasks, and that evaluation designs must account for the full variance structure of generative systems\.

## Proxy\-Based Approximation of Shapley and Banzhaf Interactions

**Authors:** Santo Thies; Hubert Baniecki; R\. Teal Witter; Eyke Hüllermeier; Maximilian Muschalik; Fabian Fumagalli

**ID:** 153973 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H7HFOu71Yi>) | [PDF](<https://openreview.net/pdf?id=H7HFOu71Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153973>)

Shapley and Banzhaf interactions capture the complex dynamics inherent in modern machine learning applications\. However, current estimators for these higher\-order interactions trade off between speed and accuracy\. To overcome this limitation, we introduce ProxySHAP\. ProxySHAP reconciles the high sample efficiency of tree\-based proxy models with a principled path to consistency via residual correction\. On a theoretical level, we derive a polynomial\-time generalization of interventional TreeSHAP to compute exact interaction indices for tree ensembles, successfully bypassing exponential tree\-depth dependencies in prior methods\. Furthermore, we formally analyze the residual adjustment strategy, characterizing the specific conditions under which Maximum Sample Reuse \(MSR\) corrects proxy bias without its variance scaling exponentially with interaction size\. Extensive benchmarking demonstrates that ProxySHAP sets a new state\-of\-the\-art standard for approximation quality, including in large\-scale applications with thousands of features\. By achieving the lowest error in both small\- and large\-budget regimes, ProxySHAP significantly outperforms the prior best estimators ProxySPEX and KernelSHAP\-IQ, while also delivering superior performance on downstream explainability tasks\.

## Probing for Representation Manifolds in Superposition

**Authors:** Alexander Modell

**ID:** 151114 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=csOfiTnHi8>) | [PDF](<https://openreview.net/pdf?id=csOfiTnHi8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151114>)

This paper introduces the Manifold Probe, a supervised method for discovering representation manifolds in superposition\. The method generalizes linear regression probes by learning the space of features of a concept that can be linearly predicted from the representations, and then learning the directions used to encode them\. We demonstrate the probe on representations of time and space in Llama 2\-7b, finding manifolds which linearly represent an interpretable set of features in each case\. In the case of time, we show that by steering along the manifold, we can influence the model's completions about the years in which famous songs, movies and books were released, providing evidence that the Manifold Probe can discover manifolds which are causally involved in the model's behaviour\.

## Measuring Cross\-Modal Synergy: A Benchmark for VLM Explainability

**Authors:** Joël Roman Ky; Salah GHAMIZI; Maxime Cordy

**ID:** 139418 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rt2AbMM2YF>) | [PDF](<https://openreview.net/pdf?id=Rt2AbMM2YF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139418>)

Vision\-Language Models \(VLMs\) map complex visual inputs to semantic spaces, but interpreting the cross\-modal reasoning of VLMs currently relies on post\-hoc explainers evaluated via unimodal perturbation metrics\. We expose a limitation in this paradigm: because multimodal datasets contain language priors and modality biases, VLMs frequently exhibit cross\-modal redundancy, allowing them to answer visual queries using text alone\. Consequently, unimodal metrics penalize faithful explainers, triggering an evaluation collapse where visual and textual rankings fundamentally contradict each other\. To resolve this, we introduce Synergistic Faithfulness \($\\mathcal\{F\}\_\{syn\}$\), a scalable metric rooted in the Shapley Interaction Index that strictly isolates the joint Harsanyi dividend between modalities, serving as a highly accurate surrogate \($\\rho = 0\.92$\) while achieving a $24\\times$ computational speedup\. Evaluating 8 distinct XAI methods across 3 VLM architectures and 3 benchmark datasets, reveals that explainers proposed for VLMs heavily over\-index on visual salience and significantly underperform adapted attention\-based methods in capturing true cross\-modal synergy\. By decoupling visual plausibility from cross\-modal faithfulness, this work provides a rigorous evaluation framework required to safely audit VLM reasoning in high\-stakes deployments\.

## Auditing is not Evaluating: LLM Audit Requires Dynamic, Contextual, Budget\-aware and Reliable Evidence

**Authors:** Cléa Chataigner; Pablo Piantanida; Golnoosh Farnadi

**ID:** 140075 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oruatg6X7C>) | [PDF](<https://openreview.net/pdf?id=Oruatg6X7C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140075>)

Auditing large language models \(LLMs\) is increasingly urgent as these systems are deployed in high\-stakes settings, yet existing evaluation practices are ill\-suited to meet auditing requirements\. Directly repurposing standard evaluation tools can yield incomplete or misleading conclusions, e\.g\. overstating robustness when evidence comes from static prompts rather than adaptive, real\-world interactions\. This position paper argues that LLM audits must instead generate dynamic, context\-sensitive, budget\-aware, and reliable evidence\. To support this position, we analyze how each of these principles can be operationalized through a four\-component framework: Auditing Scope, Interactor, Evaluator, and Output\. We highlight design requirements, limitations and research directions, demonstrating how high\-level principles can be translated into concrete, actionable, evidence\-based procedures\.

## Black\-Box Inference of LLM Architectural Properties with Restrictive API Access

**Authors:** Christopher Ellis; Mei\-Yu Wang; Shreyas Chaudhari; Leighton P Barnes; Giulia Fanti; José M F Moura

**ID:** 154610 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CIzvFzuUoV>) | [PDF](<https://openreview.net/pdf?id=CIzvFzuUoV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154610>)

In practice, most commercial LLM providers do not publicly release details of underlying LLM architectures\. However, prior work has shown that given limited API access to an LLM \(namely, top\-$k$ logits and/or a logit bias function\), one can recover certain architectural details of an LLM, such as the hidden dimension of the feed\-forward network\. Perhaps in response to these results, most commercial LLM providers have restricted their APIs to expose only the single logit for each decoded token, and they no longer give users the ability to bias logits\. We show that even under current restrictive APIs, several architectural parameters are still recoverable\. We present NightVision, an attack that uses restrictive black\-box API access to estimate the hidden dimension, depth, and parameter count of an LLM\. Algorithmically, NightVision relies on a novel common set prompting technique in which multiple prompts expose log probabilities for the same set of output tokens; a spectral analysis of these results is used to infer hidden dimension\. NightVision additionally uses end\-to\-end time to first token \(TTFT\) measurements and the estimated hidden dimension to estimate depth and parameter count\. We empirically evaluate NightVision on 32 open\-source LLMs, recovering hidden dimension to within 23\\% average relative error across all models \(9\\% on MoE models\), and depth and parameter count to within 53\\% for models exceeding three billion parameters\. We run extensive ablations to demonstrate how these accuracies scale with token budget and model properties\. Overall, our results suggest that current LLM APIs are not sufficiently restricted to fully obfuscate the architectural details of their underlying models\.

## Similarity\-Constrained Reweighting for Complex Query Answering on Knowledge Graphs

**Authors:** Daniel Daza; Alberto Bernardi; Luca Costabello; Christophe Gueret; Michael Cochez; M\.C\. Schut

**ID:** 148972 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tl0ouNjqqZ>) | [PDF](<https://openreview.net/pdf?id=tl0ouNjqqZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148972>)

Machine learning models for answering logical queries on knowledge graphs estimate the likelihood of answers that are not reachable via direct traversal\. Recent work has proposed extending such queries with \\emph\{soft entity constraints\}, which require the \\emph\{target variable\} to be similar or dissimilar to specified sets of entities\. We study a more general formulation where similarity constraints are specified on an arbitrary variable in a query, and introduce SCORE: a computationally efficient and interpretable method for incorporating similarity constraints on an arbitrary variable of a query\. SCORE is based on a lightweight and interpretable score adjustment function that only requires tuning two hyperparameters on a validation set\. Our experiments show that SCORE effectively incorporates preferences while maintaining strong query answering performance\. It significantly improves ranking quality when constraints apply to the target variable and performs effectively in the more general case involving constraints on intermediate variables\.

## Interpretable Machine Learning Evaluates Differential Therapy Effects in Parkinsonian Gait

**Authors:** Artur Chudzik; Henryk Josiński; Andrzej Przybyszewski

**ID:** 150075 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kujHXHRX7K>) | [PDF](<https://openreview.net/pdf?id=kujHXHRX7K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150075>)

Parkinson's disease therapy is usually adjusted based on extensive clinical examinations, but the effects of medication and deep brain stimulation \(DBS\) on gait dynamics remain difficult to quantify precisely\. We use interpretable probabilistic machine learning to measure therapy\-related gait changes in a repeated\-measures motion\-capture dataset comprising 376 walking trials from 19 patients with Parkinson's disease\. Patients were recorded under four therapy conditions: medication off/stimulation off, medication off/stimulation on, medication on/stimulation off, and medication on/stimulation on\. They performed natural and fast walking, and a study neurologist scored motor severity using UPDRS\-III\. From 1\.0 s sliding windows of foot\-marker motion, we compute short\-window largest Lyapunov exponent \(LLE\)\-derived local divergence features that capture local changes in gait trajectory dynamics\. We summarize these features as two LLE\-derived digital biomarkers: left\-right asymmetry and left\-right coupling\. Bayesian hierarchical regression then estimates medication, stimulation, and task effects while accounting for repeated measurements within the same patients and patient\-specific baseline differences\. The main result is that during natural walking, LLE asymmetry decreased under combined therapy with a large paired effect size \($d\_z=\-0\.83$\)\. Coupling features changed with therapy in a complementary way, especially for stimulation\-related changes in bilateral coordination\. These findings suggest that short\-window LLE asymmetry tracks therapy\-related reduction of lateralized gait dysregulation, while LLE coupling tracks treatment\-dependent reorganization of left\-right coordination\. By modeling novel LLE\-derived biomarkers across controlled medication and DBS states, we show that the two therapies are expressed through distinct gait\-dynamics signatures, supporting interpretable nonlinear gait biomarkers for objective therapy\-response assessment\.

## Amortized Linear\-time Exact Shapley Value for Product\-Kernel Methods

**Authors:** Majid Mohammadi; Siu Lun \(Alan\) Chau; Krikamol Muandet

**ID:** 149276 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rWupQhgBV4>) | [PDF](<https://openreview.net/pdf?id=rWupQhgBV4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149276>)

Kernel methods are widely used in machine learning and statistics for their flexibility and expressive power, yet their black\-box nature limits adoption in high\-stakes applications\. Shapley value\-\-based attribution methods such as SHAP, and kernel\-specific adaptations including RKHS\-SHAP, provide a principled framework for explainability\-\-\-but exact computation of Shapley values is generally intractable, forcing existing approaches to rely on approximations that incur unavoidable estimation error\. We introduce PKeX\-Shapley, an algorithm that exploits the multiplicative structure of product kernels to compute exact Shapley values for all $d$ features in quadratic time in $d$\. The method rests on a distribution\-free removal operator intrinsic to the product\-kernel structure: removing a feature replaces its kernel factor with the multiplicative identity\. This yields a parameter\-free value function\-\-\-requiring no sampling and no density estimation\-\-\-and uniquely determines a functional decomposition of the model\. Building on this value function, we develop shared recursive formulations that evaluate all feature attributions jointly, achieving amortized linear time per feature with numerical stability\. Beyond predictive modeling, the framework extends to widely used kernel\-based discrepancies such as the Maximum Mean Discrepancy \(MMD\) and the Hilbert\-\-Schmidt Independence Criterion \(HSIC\), providing new tools for interpretable statistical analysis\.

## Decentralized AI Governance Must Decouple Policy Processing from Capability Enforcement

**Authors:** Hasan Kassem; Christoforos Anagnostopoulos; Alejandro Aristizabal; Spyridon Bakas; Orion G Banks; Omar Benjelloun; Tian Cai; Sergen Cansiz; Davide Chicco; Patrick Foley; Showkot Hossain; Taeho Jung; Peter Kairouz; Yanchen liu; Marco Lorenzi; Peter Mattson; Ann K Novakowski; Michael O&amp;amp;\#x27;Connor; Holger Roth; Adrish Sannyasi; Charalampos Savvaidis; Micah Sheller; David Solooki; Dimitris Stripelis; Renato Umeton; Marc Vesin; Ray Wang; Wenbin Zhang; Mic Bowman; Alexandros Karargyris

**ID:** 140032 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h7aiv9G7qm>) | [PDF](<https://openreview.net/pdf?id=h7aiv9G7qm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140032>)

In this position paper, we argue that successful decentralized AI needs trustworthy, adaptive, and portable governance at scale\. The ML community must adopt an architecture that cleanly separates \\emph\{policy processing\} \(the evaluation of evidence against governance requirements\) from \\emph\{capability enforcement\} \(the gating of access to protected digital assets\)\. We argue that the prevailing approach, in which each organization manages bespoke policy logic, custom\-built for its infrastructure, produces fragmentation that undermines interoperability, transparency, and auditability of federated systems\. Drawing on a survey of governance mechanisms in federated learning and data collaboration frameworks and on a concrete reference architecture built around community\-driven policy objects, we argue that this decoupling is technically feasible and architecturally necessary and supports a broad class of decentralized AI governance settings\. We further suggest that the AI community should invest in open, standardized policy abstractions rather than proliferate siloed governance solutions\. We address counterarguments concerning the costs of standardization and the feasibility of universal policy languages\.

## Interpretability\-by\-Design with Accurate Locally Additive Models and Conditional Feature Effects

**Authors:** Vasileios Gkolemis; Loukas Kavouras; Dimitrios Kyriakopoulos; Konstantinos Tsopelas; Dimitrios Rontogiannis; Giuseppe Casalicchio; Theodore Dalamagas; Christos Diou

**ID:** 150129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kTrJguvQVX>) | [PDF](<https://openreview.net/pdf?id=kTrJguvQVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150129>)

Generalized additive models \(GAMs\) offer interpretability through independent univariate feature effects but underfit when interactions are present in data\. GA$^2$Ms add selected pairwise interactions which improves accuracy, but sacrifices interpretability and limits model auditing\. We propose \\emph\{Conditionally Additive Local Models\} \(CALMs\), a new model class, that balances the interpretability of GAMs with the accuracy of GA$^2$Ms\. CALMs allow multiple univariate shape functions per feature, each active in different regions of the input space\. These regions are defined independently for each feature as simple logical conditions \(thresholds\) on the features it interacts with\. As a result, effects remain locally additive while varying across subregions to capture interactions\. We further propose a principled distillation\-based training pipeline that identifies homogeneous regions with limited interactions and fits interpretable shape functions via region\-aware backfitting\. Experiments on diverse classification and regression tasks show that CALMs consistently outperform GAMs and achieve accuracy broadly comparable to GA$^2$Ms, while preserving the univariate auditability that GA$^2$Ms forfeit\. Overall, CALMs offer a favorable trade\-off between predictive accuracy and interpretability\.

## Mechanistic Insights into LoRA: Layer Sparsity for Adaptive Fine\-Tuning via Path Patching

**Authors:** Fei Zuo; Yizhou Huang; Kezhi Wang

**ID:** 154446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DUiOU1Wsi4>) | [PDF](<https://openreview.net/pdf?id=DUiOU1Wsi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154446>)

Low\-Rank Adaptation \(LoRA\) has emerged as the dominant paradigm for parameter\-efficient fine\-tuning of large language models\. However, existing methods uniformly apply adaptation across all transformer layers, overlooking the heterogeneous contributions of different components\. In this work, we conduct a systematic mechanistic interpretability analysis to understand how LoRA affects model internals\. We observe that LoRA's adaptation effect is highly non\-uniform, with significant component\-wise and layer\-wise sparsity\. Most critically, we find that important layers are highly task\-dependent, with limited overlap across tasks\. Motivated by these insights, we propose Adaptive\-LoRA, a calibration\-driven method that automatically identifies task\-specific layers via path patching, enabling efficient layer selection without exhaustive search\. Extensive experiments on Qwen2\.5\-1\.5B across 11 diverse reasoning tasks demonstrate that  Adaptive\-LoRA outperforms full\-layer LoRA while using only 30\\% of layers, achieving 3\.5$\\times$ parameter efficiency improvement\. This work bridges mechanistic interpretability and practical efficiency, providing both fundamental insights and a principled approach for adaptive fine\-tuning\.

## Discovering Mechanistic Models of Neural Activity: System Identification in an in Silico Zebrafish

**Authors:** Jan\-Matthis Lueckmann; Viren Jain; Michal Januszewski

**ID:** 149717 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nwvvEjN12N>) | [PDF](<https://openreview.net/pdf?id=nwvvEjN12N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149717>)

Constructing mechanistic models of neural circuits is a fundamental goal of neuroscience, yet verifying such models is limited by the lack of ground truth\. To rigorously test model discovery, we establish an in silico testbed using neuromechanical simulations of a larval zebrafish as a transparent ground truth\. We find that LLM\-based tree search autonomously discovers predictive models that significantly outperform established forecasting baselines\. However, in\-distribution accuracy is a poor proxy for faithful system identification, as models exploit statistical shortcuts\. Structural priors prove essential for enabling robust out\-of\-distribution generalization and recovery of interpretable mechanistic models\. Our insights provide guidance for modeling real\-world neural recordings and offer a broader template for AI\-driven scientific discovery\.

## The Geometric Inductive Bias of Grokking: Bypassing Phase Transitions via Architectural Topology

**Authors:** Alper YILDIRIM

**ID:** 150166 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kBjWa3dNvG>) | [PDF](<https://openreview.net/pdf?id=kBjWa3dNvG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150166>)

Prior work on grokking—delayed generalization after memorization—has sought to shorten this delay through data augmentation or optimizer design\. We take an architectural approach: rather than analyzing trained networks post\-hoc, we modify architectural topology before training to test whether specific degrees of freedom prolong the memorization phase\. We identify two independent factors in standard Transformers—unbounded residual magnitude and data\-dependent attention routing—and introduce targeted interventions for each\. A fully bounded spherical topology, enforcing L2 normalization throughout the residual stream, eliminates the memorization phase entirely on modular addition and multiplication over Z\_p: training and test accuracy rise together from initialization\. Independently, replacing learned attention with uniform aggregation achieves the same effect, consistent with theoretical results showing that commutative operations require only a bag\-of\-tokens representation\. However, the same spherical constraint fails completely on non\-commutative S5 permutation composition, where successful solutions rely on discrete coset structures rather than continuous Fourier features\. This contrast demonstrates that bypassing the generalization delay is possible—but strictly depends on alignment between architectural priors and task symmetry\. Since even the simplest non\-commutative task resists the same constraint that eliminates delay on cyclic arithmetic, these results suggest that no single geometric prior can universally accelerate learning across the heterogeneous structures present in general\-purpose domains\.

## Mitigating Label Bias with Interpretable Rubric Embeddings

**Authors:** Calvin Isley; Johann D\. Gaebler; Sharad Goel

**ID:** 152501 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SfqskJaoTw>) | [PDF](<https://openreview.net/pdf?id=SfqskJaoTw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152501>)

Statistical decision algorithms are increasingly deployed in domains where ground\-truth labels are hard to obtain, such as hiring, university admissions, and content moderation\. In these settings, models are typically trained on historical human evaluations—for example, using past hiring decisions as a proxy for true applicant quality\. However, if past evaluations unjustly penalize certain groups, models trained on these labels may inherit those biases\. To address this problem, we propose basing predictions on rubric embeddings, a representation framework that replaces standard black\-box embeddings with features derived from expert\-defined criteria that align with the underlying construct of interest\. By anchoring predictions to semantically meaningful dimensions, this approach guards against biased proxy signals\. We provide both theoretical and empirical evidence that rubric embeddings mitigate label bias under plausible conditions\. Empirically, we evaluate our method on a novel dataset of applications to a large master’s program\. We find that models trained on rubric embeddings reduce group disparities while improving measures of cohort quality\. Our results suggest that basing predictions on interpretable, domain\-grounded representations offers a practical approach to learning in the presence of biased labels\.

## EVALUATION CARDS: An Interpretive Layer for AI Evaluation Reporting

**Authors:** Avijit Ghosh; Anka Reuel\-Lamparth; Wm\. Matthew Kennedy; Jenny Chim; Yilin Huang; Srishti Yadav; Anastassia Kornilova; Damian Stachura; Kevin Klyman; Jennifer Mickel; Felix Friedrich; Max Lamparth; Jan Batzner; Anoop Mishra; Jeba Sania; Eliya Habba; Nathan Heath; Shalaleh Rismani; Usman Gohar; Andrea Loehr; David Manheim; Ruchira Dhar; Sree Harsha Nelaturu; Aarush Sinha; Leshem Choshen; Yixiong Hao; Yanan Long; Andrew Tran; Drishti Sharma; Ishan Khire; Amit Saha; Subramanyam Sahoo; Michael Hardy; Michael A\. Riegler; Kabir Manghnani; Michelle Lin; Nancy Jiang; Asaf Yehudai; Nuno Moniz; Yacine Jernite; Zeerak Talat; Stella Biderman; Mubashara Akhtar; Jessica Ji; Aris Hofmann; Mykel J Kochenderfer; Sanmi Koyejo; Irene Solaiman

**ID:** 139130 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jGvGY7wh7Q>) | [PDF](<https://openreview.net/pdf?id=jGvGY7wh7Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139130>)

AI evaluation results are produced at scale but reported inconsistently across leaderboards, model cards, benchmark papers, and company blogs\. This fragmentation is borne at the level of interpretation: readers cannot reliably compare results across sources, identify what is missing from a given report, or trace an aggregate claim to the evidence behind it\. Recent efforts address isolated components of this problem but leave three gaps unresolved: They cover only narrow slices of the evaluation lifecycle and do not compose into a single interpretable record\. They specify static representations that do not differentiate between the questions technical and policy readers bring to the same evidence\. And they remain proposals on paper, without the extraction infrastructure required for adoption at scale\. We present EVALUATION CARDS, an operational reporting layer that composes benchmark metadata, evaluation run data, and model metadata into a unified record\. We \(1\) derive a reporting schema from a structured literature review of 52 papers and 10 stakeholder interviews, \(2\) implement four interpretive signals \(reproducibility, documentation completeness, provenance and risk, and score comparability\), rendered through reader modes calibrated to research and policy audiences, and \(3\) provide a deployed monitoring tool that applies EVALUATION CARDS across 5,498 models, 635 benchmarks, and 101,843 results, surfacing systematic gaps in current reporting practice\.

## Mechanistic Critics for Sample\-Efficient NPU Design\-Space Exploration

**Authors:** Yicheng He; Yuqi Xue; Tianyang Wu; Jian Huang; Bin Hu

**ID:** 154999 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Jr2FEdVHP>) | [PDF](<https://openreview.net/pdf?id=9Jr2FEdVHP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154999>)

NPU design\-space exploration for LLM inference mainly relies on an expensive simulator that often returns only scalar feedback such as latency and power\. Such feedback can rank evaluated configurations, but gives little information for deciding why a configuration is slow or which architecture parameter should be changed next\. This limitation is especially severe because prefill and decode workloads can be limited by different resources, including compute throughput, HBM bandwidth, and inter\-chip communication\. We propose CriticNPU, a sample\-efficient DSE framework built around an online\-calibrated mechanistic critic for NPU architecture design\. The critic uses explicit hardware limits to evaluate NPU configurations: before simulation, it estimates whether a proposed configuration is likely to improve over the current best and filters weak candidates; after simulation, it aggregates operator\-level runtimes into prefill/decode bottleneck summaries and predicts the effect of candidate parameter changes\. We instantiate the critic with a Roofline\-style model that derives compute, memory, and communication limits from architecture parameters and calibrates per\-operator\-type effective limits using simulator observations\. And CriticNPU combines this critic with a workload extractor and an architecture planner to propose configurations\. Across six LLM workloads and 16 deployment configurations per model, CriticNPU achieves best\-or\-tied\-best latency in 74% of prefill and 87\.5% of decode settings while using roughly half the simulator calls of competitive DSE baselines\. We conduct extensive ablation studies and detailed analyses to validate the effectiveness of our method from multiple perspectives\.

## Capturing In\-Context Learning Dynamics with Task Operators

**Authors:** Guangzhi Xiong; Zhenghao He; Bohan Liu; Sanchit Sinha; Wenqian Ye; Aidong Zhang

**ID:** 149094 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sx3XAheEWd>) | [PDF](<https://openreview.net/pdf?id=sx3XAheEWd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149094>)

In\-context learning \(ICL\) enables language models to perform new tasks from demonstrations without weight updates\. However, every ICL inference requires processing the full set of examples, resulting in inefficient deployments, and how ICL works mechanistically is not fully understood\. Prior work compresses ICL into fixed activation vectors extracted from specific layers or positions, but these input\-independent interventions fail on complex tasks where the output depends on fine\-grained interactions with the input\. By analyzing the ICL forward pass, we show that each attention head's output is an affine transformation of its context\-masked counterpart, and that the parameters of this transformation are empirically stable across samples for a given task\. Building on this, we introduce Task Operator \(TO\), which replays this transformation as an analytically derived update to the attention output projection\. Across lexical, algorithmic, and reasoning tasks, TO achieves the best overall performance among prior methods and substantially narrows the gap between zero\-shot inference and ICL\. We further show that the extracted knowledge concentrates in a task\-specific sparse circuit across layers and positions, and that averaging operators from disjoint demonstration batches enables effective many\-shot scaling without expanding the context window\.

## Loyalty Capture: Reporting Relationships and Structural Sycophancy in Frontier AI Models

**Authors:** Eric So; Alex Imas

**ID:** 148352 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yWb30l4iXg>) | [PDF](<https://openreview.net/pdf?id=yWb30l4iXg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148352>)

We show that frontier AI models exhibit loyalty capture\-\-\-a form of structural sycophancy in which a reporting relationship to a manager with misaligned incentives is sufficient to bias the model's recommendations, without any explicit instruction, user feedback, or adversarial prompting\. In 5,757 trials across eight models from eight AI laboratories, CEO\-reporting models cut investment to boost the CEO's bonus by 8\.1 percentage points more when the bonus is at stake\. This same effect is also predictably absent from a metric\-irrelevant placebo\. Delivered rationales reveal motivated reasoning: models adopt the bonus target, calculate how their recommendation achieves it, and dismiss long\-term value, while concealing their recognition of the conflict from the recommendation recipient\. Designed interventions \(conflict disclosure, stakeholder broadening\) eliminate \~60% of the effect; passive oversight does not\. Taken together, the results indicate that AI models deployed within organizational hierarchies can develop and act on loyalty to their supervisor at the expense of the organization they are meant to serve\.

## The parameters in weight\-sparse transformers are interpretable

**Authors:** Arnau Marin\-Llobet; Stefan Heimersheim

**ID:** 150805 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGxBOgrNrv>) | [PDF](<https://openreview.net/pdf?id=fGxBOgrNrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150805>)

Understanding what individual components of a neural network do is a central goal of mechanistic interpretability, and a valuable tool for auditing or editing trained models\. The dominant approach picks a behavior and reverse\-engineers the circuit that implements it\. This gives a local picture, since we learn what a weight does in service of one task on one distribution, but not what it does in general\. We therefore ask the reverse question\. Can we pick any single nonzero parameter in a trained transformer and say what it does, without first choosing a behavior? Until recently, this was out of reach, because the weight basis of a standard transformer is not aligned with the computations the network performs \(Elhage, et al\. 2022\)\. However, weight\-sparse transformers \(Gao et al\. 2025\) offer an alternative path forward\. By training most weights to zero, the surviving weights align more cleanly with computation, which opens the door to per\-weight interpretation\. In this work, we introduce an automated LLM\-pipeline that produces a short, human\-readable account of when a given weight matters, verifies the account on held\-out data, and applies it at scale to compare two weight\-sparse transformers against two dense controls\. Empirically, we find that a significant percentage of nonzero weights \(17\-35%\) on sparse transformers are interpretable, compared to 5\-9% on the equivalent dense model and Pythia\-70m\. Together these results suggest that sparse training produces transformers whose individual weights are interpretable to a degree not achievable in conventional transformers, providing a potential starting point for per\-weight interpretation of larger models

## Layerwise Progressive Freezing: A Training Scaffold for Depth\-Scalable Binary Networks

**Authors:** Evan G Smith; Bashima Islam

**ID:** 150400 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJdFhf3jyg>) | [PDF](<https://openreview.net/pdf?id=iJdFhf3jyg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150400>)

Training binary neural networks \(BNNs\) from scratch is dominated by the straight\-through estimator \(STE\), whose forward/backward mismatch produces severe accuracy degradation as networks deepen\. We study an orthogonal axis: when and where binarization is enforced during training\. We introduce StoMPP \(Stochastic Masked Partial Progressive Binarization\), which gradually replaces clipped weights and activations with their hard binary counterparts layer by layer from input to output, using stochastic partial masks with soft refresh\. StoMPP delivers two complementary benefits\. As a standalone training rule, it provides a fully STE\-free procedure that improves over vanilla STE with gains that grow with depth \(ResNet\-50 BNN: \+18\.0/\+13\.5/\+3\.8 on CIFAR\-10/100/ImageNet\), and the pattern holds across ResNet\-18/34/50, MobileNetV2, and BERT fine\-tuning\. Composed with surrogate gradients by applying STE only to frozen entries, it reaches \+27\.1/\+19\.8/\+17\.7 over vanilla STE on the same setting\. Underlying both regimes is a single mechanistic finding: progression order is decisive\. Forward layerwise progression prevents depth collapse, reverse progression collapses to near\-chance, and binary\-weight networks \(without binary activations\) are insensitive to order\. We trace this asymmetry to activation\-induced gradient blockades: a committed binary activation severs gradient flow upstream, and ordering controls when these blockades form\. To isolate the progression's contribution from any benefit conferred by STE, we conduct all ablations in the STE\-free regime; the resulting characterization \(schedule, refresh, ordering, dynamics\) thus reflects the progression itself rather than its interaction with surrogate gradients\.

## Projected Neural Additive Models as Universal Approximators

**Authors:** Nhon N Phan; Qiang Du; John D Clayton; WaiChing Sun

**ID:** 155364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6AZvfOFUIP>) | [PDF](<https://openreview.net/pdf?id=6AZvfOFUIP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155364>)

Neural additive models \(NAMs\) offer interpretability but lack expressivity due to their rigid additive structure, whereas multi\-layer perceptrons \(MLPs\) achieve universal approximation at the cost of transparency\. We establish the first theoretical foundation for projected neural additive models \(PNAMs\), which augment NAMs with a learnable linear transformation $\\boldsymbol\{T\}$ to capture cross\-variable interactions\. While standard NAMs cannot approximate even the simplest interaction term $\\chi\_1 \\chi\_2$ because their cross\-derivatives are identically zero, we prove that PNAMs are universal approximators and characterize the minimum number of projections required for exact polynomial representation\. Furthermore, we derive an approximation rate of $\\mathcal\{O\}\(M^\{\-s / \(N \- 1\)\}\)$ for $\\mathcal\{C\}^s$ functions \(i\.e\., functions with $s$ continuous derivatives\), where $M$ denotes the number of projections and $N$ the input dimension; this rate is known to be optimal for ridge function approximation\. To recover interpretability from the projected inputs, we introduce structured sparsity regularizers and post\-hoc symbolic regression techniques that enable global input ranking, parameter pruning, and the conversion of learned bases into compact analytical expressions\. Experiments on knot theory invariants, MNIST, and phase field fracture mechanics demonstrate that PNAMs match or surpass MLPs in accuracy while discovering salient features and yielding symbolic models with orders of magnitude fewer parameters\.

## Do Latent\-CoT Models Think Step\-by\-Step? A Mechanistic Study on Sequential Reasoning Tasks

**Authors:** Jia Liang; Liangming Pan

**ID:** 153454 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LAS8pm4WJ6>) | [PDF](<https://openreview.net/pdf?id=LAS8pm4WJ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153454>)

Latent Chain\-of\-Thought aims to enable step\-by\-step computation without emitting long rationales, yet its internal mechanisms remain unclear\. We study CODI, a continuous\-thought teacher–student distillation model, on strictly sequential polynomial\-iteration tasks with known intermediate states\. Using logit\-lens decoding, linear probes, attention analysis, and activation patching, we localize intermediate\-state representations and trace how they are routed to the final readout\. In short\-horizon, low\-hop tasks, CODI forms faithful bridge states across latent\-thought positions, while the final input follows a separate near\-direct route; predictions arise through late fusion at the answer readout\. As task depth and difficulty increase, however, CODI does not reliably sustain a full latent rollout: it either compresses computation into a partial late\-intermediate pathway or, in harder regimes, loses the latent reasoning signature altogether\. To explain this transition, we show theoretically that the task’s algebraic structure controls its effective memory: compressible regimes support late\-bottleneck reasoning, while incompressible regimes preserve full\-history dependence and destabilize latent rollouts\. Overall, our results characterize when CODI\-style latent\-CoT yields faithful iterative computation versus compressed or shortcut strategies\.

## Task Vector Geometry Underlies Dual Modes of Task Inference in Transformers

**Authors:** Hao Yan; Haolin Yang; Yiqiao Zhong

**ID:** 152712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QvgaAPuT4e>) | [PDF](<https://openreview.net/pdf?id=QvgaAPuT4e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152712>)

Transformers are effective at inferring the latent task from context via two inference modes: recognizing a task seen during training, and adapting to a novel one\. Recent interpretability studies have identified from middle\-layer representations task\-specific directions, or \*task vectors\*, that steer model behavior\. However, a lack of rigorous foundations hinders connecting internal representations to external model behavior: existing work fails to explain how task\-vector geometry is shaped by the training distribution, and what geometry enables out\-of\-distribution \(OOD\) generalization\. In this paper, we study these questions in a controlled synthetic setting by training small transformers from scratch on latent\-task sequence distributions, which allows a principled mathematical characterization\. We show that two inference modes can coexist within a single model\. In\-distribution behavior is governed by Bayesian task retrieval, implemented internally through convex combinations of learned task vectors\. OOD behavior, by contrast, arises through extrapolative task learning, whose representations occupy a subspace nearly orthogonal to the task\-vector subspace\. Taken together, our results suggest that task\-vector geometry, training distributions, and generalization behaviors are closely related\.

## Designing Kernel Surrogate Models for Multimodal Attribution

**Authors:** Ziniu Zhang; Zhenshuo Zhang; Jianglin Lu; Ruoxuan Xiong; Yun Fu; Hongyang Zhang

**ID:** 154581 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWGFOa2GfB>) | [PDF](<https://openreview.net/pdf?id=CWGFOa2GfB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154581>)

We study cross\-sample modality attribution in multimodal learning: how a modality in one training sample affects learning from other samples\. This problem is central to interpretation because a modality may be redundant for some samples, uniquely informative for others, or useful only through synergy with other modalities\. However, existing data attribution methods are insufficient for this setting because they typically estimate sample\-level contributions using additive or linear approximations, and therefore cannot capture nonlinear interactions across samples and modalities\.      We propose a structured kernel surrogate \(SKS\) framework for multimodal attribution\. SKS learns a mapping from sample\-and\-modality selections to the final loss\. To approximate this mapping, SKS uses kernel ridge regression with a structured radial basis function kernel that captures nonlinear effects across samples and modalities\. The kernel also preserves the natural hierarchy of multimodal perturbations by modeling sample participation separately from within\-sample modality composition\.     Across diverse environments and benchmarks, SKS achieves $60\.3$% higher linear datamodeling score than the strongest baseline\. For downstream data selection, SKS improves the average accuracy by $2\.24$% over the strongest baseline\. Sharpness analysis further shows that models trained on data selected by SKS have lower Hessian trace values, indicating a flatter loss surface and better generalization\. Beyond these quantitative gains, SKS also provides interpretable modality\-level selections in spatiotemporal traffic accident prediction, preferentially retaining satellite tiles with visible road infrastructure over vegetation\-dominated tiles\.

## A Mechanistic Interpretability Study of an Astronomical Foundation Model

**Authors:** Rachel Zhang; Alberto Bietti; Wes Gurnee; Alessandro Favero; Miles Cranmer

**ID:** 153037 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUspS8vKSM>) | [PDF](<https://openreview.net/pdf?id=OUspS8vKSM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153037>)

Scientific foundation models trained on multimodal data are increasingly deployed across the sciences, but whether their internal computations correspond to known scientific operations or proceed through different mechanisms remains unclear\. Understanding these mechanisms is essential for assessing reliability, identifying failure modes, and judging when predictions can be trusted in scientific workflows\. We present the first mechanistic interpretability study of an astronomy foundation model, focused on AION\-1's multimodal advantage in redshift prediction from broadband photometry and imaging over photometry alone\. We find that this advantage concentrates on extended and dust\-attenuated galaxies, with the gain localized by layerwise probing to AION\-1's first encoder block\. We examine two attention heads in this block and find that representation and function dissociate in opposite directions across them\. The first head linearly encodes classical photometric features and organizes its image output along a radial gradient, yet ablation and activation patching show this structure has no measurable causal effect on the prediction\. The second head shows no distinctive probe signature on the photometric\-redshift estimation operations we tested, yet ablating it on dust\-attenuated galaxies eliminates the multimodal advantage and amplifies the attenuation\-bias signature beyond the photometry\-only baseline, indicating that this head implements a correction for attenuation bias\. Whether this reflects a methodological limitation in interpretability or an undiscovered astronomical empirical relation is itself an open question, and one that bears directly on using interpretability as a tool for scientific discovery\.

## Rethinking SAE Evaluation: An Atomic Interpretable Unit Framework Reveals Hidden Polysemanticity and Redundancy

**Authors:** Riteng Zhang; Xiaoqian Wang

**ID:** 139009 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qsqJBHB0Kb>) | [PDF](<https://openreview.net/pdf?id=qsqJBHB0Kb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139009>)

Sparse autoencoders \(SAEs\) were originally motivated by discovering monosemantic features, a property that characterizes individual features but does not specify what the learned feature set should look like as a whole\. As SAEs have increasingly been adopted for attribution, circuit discovery, and intervention, researchers have begun evaluating metrics that describe global properties of the feature set, such as sparsity, dead feature rates, reconstruction fidelity, and disentanglement, a diverse set that extends far beyond monosemanticity\. However, this implicit shift beyond monosemanticity has not been formalized as a clear, well\-defined objective that comes before these evaluation metrics\. Without such an objective, existing metrics remain ad hoc, with their necessity unjustified\. In this work, we formalize this ultimate objective by introducing a new paradigm for SAE evaluation: requiring that SAE features, and more generally dictionary\-based decompositions of model representations, form an atomic interpretable unit basis, a coordinate system for semantically meaningful explanation\. Under this paradigm, we organize existing and new measurements such as DAME \(Dominance\-Aware Monosemanticity Evaluation\) as proxy metrics and introduce a comprehensive benchmarking framework\. Evaluating hundreds of SAEs across multiple architectures and model families, we uncover failure modes in which some SAEs appear monosemantic under existing evaluation metrics while remaining functionally polysemantic: the most dominant features, those contributing most to model computation, are systematically less interpretable and more redundant\. These failure modes warrant attention from SAE researchers as targets for improved training and architectures, and motivate dominance\-aware evaluation as a standard check for practitioners before SAE features are deployed for attribution, circuit tracing, or intervention\.

## Position: We Need Greater Transparency to Maintain Research Pipeline Reliability Despite GenAI

**Authors:** Hillmer Chona; Sourav Panda; Frank Ritter; Jonathan Dodge

**ID:** 140080 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LOuXOaoYvI>) | [PDF](<https://openreview.net/pdf?id=LOuXOaoYvI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140080>)

This position paper argues that the research community must act to maintain research pipeline reliability despite increasing threats from GenAI\. We start in the pre\-GenAI era by highlighting some of the prominent critiques of the research pipeline, consisting of: \(a\) Authoring, \(b\) Reviewing, and \(c\) Evaluating researchers based on bibliometrics\. Then, we discuss some of the effects GenAI has had on each research pipeline component based on the best available data, limited though it may be\. Importantly, due to opaqueness of the submission pipeline, it is difficult to measure both the impact of GenAI and the efficacy of interventions, which leads us to call for greater transparency\. Last, we conclude by offering three alternative views and ten paths forward that may mitigate some of the issues we highlight by keeping human researchers as the primary driver of science

## Learning Interpretable Switching Dynamics in Shared Neural\-Behavioral Latent Space

**Authors:** Yongxu Zhang; Josue Ortega Caro; Rachel L Oren; Michael J Higley; Jessica Cardin; Anne Churchland; Shreya Saxena

**ID:** 151607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZI46yRLHVp>) | [PDF](<https://openreview.net/pdf?id=ZI46yRLHVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151607>)

Modern recording technologies enable simultaneous measurement of high\-dimensional neural activity and rich behavioral variables, creating both an opportunity and a modeling challenge: identifying the shared latent structure that mediates the brain\-behavior relationship and the underlying dynamics through which it evolves across behavioral states\. Existing approaches focus on different parts of this challenge: shared representation learning methods identify neural\-behavioral subspaces but typically do not model dynamical structure, while dynamical models capture temporal variation and discrete state transitions in neural activity, but do not explicitly disentangle shared neural\-behavioral structure from modality\-specific variability\. We introduce Switching Shared Latent Dynamics \(SSLD\), a unified framework that learns a latent representation shared between neural activity and behavior and endows this shared space with nonlinear switching recurrent dynamics to reflect the hypothesis that behaviorally relevant neural representations exhibit structured dynamical changes across behavioral states\. Complementary private latent variables capture modality\-specific variability, providing a window into neural activity that does not directly interact with behavior\. We evaluate SSLD on a simulated dataset and four diverse experimental datasets spanning species, brain regions, and recording modalities: monkey motor and premotor cortex during reaching, somatosensory cortex during a bump task, widefield calcium imaging across mouse dorsal cortex during \(a\) self\-initiated decision\-making and \(b\) spontaneous movements\. Across all four datasets, SSLD accurately reconstructs neural and behavioral signals, recovers discrete states in the dynamics that align with experimentally defined behavioral epochs, and isolates behaviorally\-relevant neural information in the shared latent while preserving private neural variability\. Ablations confirm that shared representation learning, behavioral supervision, and switching dynamics each contribute to performance\. SSLD offers an interpretable approach to modeling shared neural\-behavioral dynamics that complements ongoing efforts toward foundation models for neuroscience\.

## When Attribution Patching Lies: Diagnosis and a Second\-Order Correction

**Authors:** Luyang Zhang; Jialu Wang

**ID:** 154919 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9z06SMMtXu>) | [PDF](<https://openreview.net/pdf?id=9z06SMMtXu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154919>)

A central goal of mechanistic interpretability is to identify which internal components causally drive a language model's behavior\. Because these importance estimates serve as the evidence for identifying circuits, systematic errors can lead to the misidentification of the underlying mechanisms\. While activation patching provides a gold\-standard causal metric, its computational cost is prohibitive at scale\. Practitioners instead rely on attribution patching, a gradient\-based, first\-order approximation whose reliability remains poorly understood\. In this work, we characterize the source of this unreliability, demonstrating that the dominant error stems from the non\-linearities in the downstream network rather than local curvature at the patched component\. This insight yields three practical tools: \(i\) a reliability score to detect untrustworthy estimates, \(ii\) error bounds quantifying potential attribution mis\-specifications, and \(iii\) a Hessian\-vector\-product \(HVP\) correction that eliminates the leading\-order error with only one additional backward pass\. In evaluations across five model families \(124M–9B parameters\) and both random\-token and naturalistic \(name\-swap\) perturbations, HVP is the only second\-order correction feasible at larger scale, where standard baselines like Integrated Gradients become computationally prohibitive\. In comparative experiments, a multi\-step HVP variant matches or exceeds the accuracy of Integrated Gradients at significantly lower compute, outperforming prior second\-order baselines\. These improvements lead to higher\-fidelity circuit recovery on standard benchmarks and support a \_Screen\-Flag\-Fix\_ workflow that targets computational effort only toward the components flagged as unreliable\.

## Coherent Routing in Decision Trees: Phase\-Interference Learning for Interpretable Tabular Prediction

**Authors:** David Li; Angela Li

**ID:** 155857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2OLBsM6UWI>) | [PDF](<https://openreview.net/pdf?id=2OLBsM6UWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155857>)

We introduce Phase\-Interference Decision Trees \(PIDT\), a differentiable routing model for tabular prediction in which each node propagates a bounded complex state rather than only a scalar routing probability\. The main model uses two\-state norm\-preserving branch maps: a gate controls how much amplitude is sent to the left and right children, while learned unitary maps rotate the latent state before subsequent splits\. This formulation contains ordinary soft decision trees as the phase\-free scalar case, and two\-state routing creates explicit score\-level cross terms among latent\-state trajectories\. We give a self\-contained PIDT definition with exact mass conservation, prove scalar phase cancellation, establish a scoped containment relation with soft trees, derive an algebraic interference decomposition, give a companion construction for shared two\-state parity routing, and derive a fixed\-architecture empirical Rademacher upper bound for bounded two\-state PIDT scores\. We evaluate PIDT on a ten\-dataset OpenML suite of low\-class\-count tabular tasks under matched differentiable\-tree controls\. Across ten seeds per dataset, the main summaries track accuracy as context and report small descriptive NLL and Brier deltas relative to the scalar PIDT\-1S, phase\-frozen PFB, and SDT controls\. The empirical study is framed as a mechanism\-level study for compact differentiable trees, not as a broad tabular\-performance claim\.

## Rep2Text: Decoding Full Text from a Single LLM Token Representation

**Authors:** Haiyan Zhao; Zirui He; Yiming Tang; Fan Yang; Ali Payani; Dianbo Liu; Mengnan Du

**ID:** 153066 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OET7WYchkH>) | [PDF](<https://openreview.net/pdf?id=OET7WYchkH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153066>)

Large language models \(LLMs\) have achieved remarkable progress across diverse tasks, yet their internal mechanisms remain largely opaque\. In this work, we investigate a fundamental question: to what extent can the original input text be recovered from a single last\-token representation in an LLM? To this end, we propose Rep2Text, a novel framework for decoding text from last\-token representations\. Rep2Text employs a trainable adapter that maps a target model’s last\-token representation into the token embedding space of a decoding language model, which then autoregressively reconstructs the input text\. Experiments across various model combinations \(Llama\-3\.1\-8B, Gemma\-7B, Mistral\-7B\-v0\.1, Llama\-3\.2\-3B, etc\.\) show that, on average, roughly half of the tokens in 16\-token sequences can be recovered from this compressed representation while preserving strong semantic coherence\. Further analysis reveals a clear information bottleneck effect: as sequence length increases, token\-level recovery declines, while semantic information remains relatively well preserved\. We also find that scaling effects are less pronounced in inversion tasks\. Finally, our framework demonstrates robust generalization to out\-of\-distribution clinical data\.

## Near\-optimal Explainable $k$\-means Clustering under $\\ell\_p$ Norm

**Authors:** Xinyuan Cao; Konstantin Makarychev; Ilias Papanikolaou; Liren Shan

**ID:** 152118 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VPM3iJ2XSl>) | [PDF](<https://openreview.net/pdf?id=VPM3iJ2XSl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152118>)

We study explainable $k$\-means clustering, introduced by Dasgupta, Frost, Moshkovitz, and Rashtchian \(2020\), and generalize it to $\\ell\_p$ norms\. The goal is to find a clustering represented by a threshold decision tree while minimizing the $k$\-means objective\. Such a clustering is easy for humans to interpret because each internal node partitions the data by thresholding a single feature, so every cluster can be explained through a sequence of simple decisions\. We give algorithms that find threshold trees with $\(1\+\\delta\)k$ leaves and competitive ratio $\\tilde\{O\}\_p\(1/\\delta\\cdot \\log^\{2\+2/p\-2/p^2\} k\)$ for every finite $p \\geq 2$ and $\\tilde\{O\}\(1/\\delta \\cdot d^\{2/p\-1\}\\log^2 k\)$ for every $1 \\leq p &lt; 2$\. For $1 \\leq p &lt; 2$, we show that this dependence on $d$ is unavoidable with less than $k^2/2$ leaves and provide an $\\tilde\{O\}\(\\log^\{2\+2/p\-2/p^2\} k\)$\-competitive algorithm with $8k^2$ leaves\. We also provide near\-optimal algorithms for explainable $k$\-means under $\\ell\_p$ norms with exactly $k$ leaves\. Our algorithms achieve the price of explainability of $\\tilde\{O\}\(k\)$ for every finite $p \\geq 2$ and $\\tilde\{O\}\(d^\{2/p\-1\} k\)$ for $1\\leq p \\leq 2$\. We complement these results with nearly matching lower bounds\.

## Position: Reconciling Open Access with Owner Control in AI Model Distribution Deserves More Research Effort

**Authors:** Zerui Cheng; Edoardo Contente; Benjamin Finch; Oleg Golev; Jonathan Hayase; Andrew Miller; Niusha Moshrefi; Anshul Nasery; Sewoong Oh; Himanshu Tyagi; Pramod Viswanath

**ID:** 140082 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JRVTQLVokf>) | [PDF](<https://openreview.net/pdf?id=JRVTQLVokf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140082>)

The rapid rise of AI has seen the coexistence of open\-weight models and closed\-source, API\-based deployment, each with its own strengths and limitations\. A growing share of deployment scenarios needs both local, customizable execution and owner\-side accountability, yet neither extreme serves them well\. Such scenarios include on\-prem enterprise use with sensitive data, edge and offline robotics, and local fine\-tuning or retrieval\-augmented generation\. This position paper argues that the middle regime between closed APIs and open\-weight release deserves a principled deployment\-level primitive of its own, and proposes OML—Open, Monetizable, Loyal—as a starting point for that primitive\. An OML\-formatted artifact aims to be simultaneously Open \(open\-weight and locally executable\), Monetizable \(usage is accountable to the owner\), and Loyal \(owner\-declared use constraints are enforceable\)\. Throughout, "open" refers to open\-weight, locally executable artifacts rather than to fully open\-source release, and "loyal" refers to owner\-declared use constraints rather than to remote control over a running model\. We articulate the desirable properties and threat model for OML, survey theoretical and practical constructions across software, hardware, and cryptographic primitives, and outline an end\-to\-end deployment protocol together with market\-based and policy alternatives\. We then describe OML 1\.0, a low\-overhead instantiation based on AI\-native fingerprinting, and characterize the regime in which it provides meaningful guarantees\. We close with a research agenda calling on the ML, cryptography, systems, and mechanism\-design communities to refine the primitives needed to make OML deployable at scale\.

## PLACE: Patch\-Level Agnostic Concept Extraction

**Authors:** Gabriele Onorato; Fabrizio Silvestri; Nathaniel D Bastian; Francesco Restuccia

**ID:** 155100 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8QlhKxCYSB>) | [PDF](<https://openreview.net/pdf?id=8QlhKxCYSB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155100>)

While While Vision Foundation Models \(VFMs\) are increasingly used in several computer vision tasks, their internal representations remain substantially opaque\. This mostly stems from polysemanticity, i\.e\., individual neurons encode mixtures of unrelated visual patterns\. In stark contrast, human reasoning is inherently monosemantic, i\.e\., it naturally relies on distinct, isolated features to process information\. Therefore, monosemanticity needs to be implemented within the model's activation space to obtain representations that are human\-understandable concepts\. Existing methods mostly operate on convolutional networks, so when applied to VFMs their "crop\-and\-resize" approach distorts the model's representations by disrupting global self\-attention mechanisms and discarding spatial geometry\. Furthermore, prior work requires downstream classification labels and is based on KL\-divergence, which requires to propagate the gradients back from the classifier head\. Ultimately incurring in excessive concept extraction time, and making it hardly applicable to extract task\-agnostic concepts\. To overcome these issues, we propose PLACE, a fully unsupervised concept extraction framework that operates directly on the native patch\-token activations of a VFM\. By introducing a geometric Gram\-matrix alignment loss, PLACE mechanistically controls downstream KL divergence, thus enforcing faithfulness \-\- i\.e\., the notion that extracted concepts, although obtained in an unsupervised fashion, are relevant to downstream classification tasks\. Evaluations on image classification tasks \(ImageNet and COCO\) on DINOv2, ViT\-MAE and ViT\-B/16  show that PLACE \(i\) using Gram\-alignment it extracts concepts about $20\\times$ faster compared to KL\-supervised extraction and $11\\times$ faster than Sparse Autoencoders \(SAEs\)\. Moreover, PLACE yields highly sparse concepts that \(ii\) achieve up to 40 percentage points sparser compared to the state of the art \(i\.e\., max 0\.933 Gini sparsity score\), and \(iii\) are up to 92\.3% similar to those obtained under classifier supervision \(i\.e\., 0\.923 cosine similarity\)\.

## SASA: Subspace\-Aware Sparse Autoencoders for Effective Mechanistic Interpretability

**Authors:** Seyed Arshan Dalili; Mehrdad Mahdavi

**ID:** 151251 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bl8HewYJVx>) | [PDF](<https://openreview.net/pdf?id=bl8HewYJVx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151251>)

Sparse Autoencoders \(SAEs\) are widely used for mechanistic interpretability in large language models, yet their standard formulation assigns each latent feature a single decoder direction, implicitly constraining features to be one\-dimensional\. We identify a fundamental geometric mismatch between this assumption and the structure of many model features, and show that it can provably induce feature splitting\. In particular, for any feature with intrinsic dimension $d\_i \\ge 2$, achieving reconstruction error $\\varepsilon$ with a standard SAE requires $\\Omega \\left\(\(\\frac\{1\}\{\\varepsilon\}\)^\{d\_i\-1\}\\right\)$ distinct decoder directions\. As a result, the SAE is forced to represent a single coherent high\-dimensional feature using many nearly collinear one\-dimensional latents, leading to spurious feature multiplicity and a failure to preserve the intrinsic structure required for mechanistic interpretability\. Motivated by this lower bound, we introduce Subspace\-Aware Sparse Autoencoders \(SASA\), which replace single\-vector decoders with learned decoder subspaces\. SASA enforces block sparsity through Top\-$s$ group gating and adapts each group's effective dimensionality using a trace\-norm regularizer\. We prove a complementary upper bound: when the block size $r \\ge d\_i$, a single group can represent the entire feature slice, alleviating feature splitting while also improving sample complexity\. Finally, we empirically validate that SASA improves feature splitting, monosemanticity, and interpretability while also enabling more efficient training\.

## Learning a Unified Cross\-Model Semantic Dictionary via Gated Bottleneck Sparse Autoencoders

**Authors:** Jinchi Zhu; Tie Luo

**ID:** 149262 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rcO6JNVYN5>) | [PDF](<https://openreview.net/pdf?id=rcO6JNVYN5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149262>)

Foundation models pretrained on similar data distributions tend to encode semantically aligned concepts; yet these representations remain entangled with model\-specific inductive biases, which hinders both unified interpretability and cross\-model feature reuse\. Existing approaches address this by aligning concepts across model\-specific representation spaces, but do not explicitly account for model\-specific biases, resulting in limited cross\-model reconstruction fidelity \(low $R^2$\) and poor feature transferability\. We propose the \*Gated Bottleneck Sparse Autoencoder\* \(GB\-SAE\), a framework that takes multiple—homogeneous or heterogeneous—foundation models as input and factorizes their representations into shared and private components\. GB\-SAE jointly learns a single model\-agnostic semantic dictionary and, for each model, a private residual dictionary, via a learnable gating mechanism that encourages competition between the two\. Conceptually, we cast unified multi\-model interpretability as a representation factorization problem and solve it through bottlenecked sparse dictionary learning\. Empirically, GB\-SAE achieves unified and faithful interpretability across diverse architectures, high reusability of the learned shared dictionary, and strong generalization to downstream tasks—capabilities that alignment\-based paradigms, by design, cannot fully support\.

## Finding Interpretable Prompt\-Specific Circuits in Language Models

**Authors:** Gabriel Franco; Lucas M Tassis; Azalea Rohr; Mark Crovella

**ID:** 154226 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FHfc57fnQe>) | [PDF](<https://openreview.net/pdf?id=FHfc57fnQe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154226>)

Understanding the internal circuits that language models use to solve tasks remains a central challenge in mechanistic interpretability\. A crucial part of finding circuits is understanding why each attention head attends where it does\. To this end, we introduce \*\*ACC\+\+\*\*, an improved circuit\-tracing method based on the principle of \*attention\-causal communication\* \(ACC\) \[1\], which identifies \*signals\*, i\.e\., contents of low dimensional subspaces that cause attention on a token pair\. ACC\+\+ extracts circuits from a \*single forward pass\*, without replacement models or patching\. Circuits identified by ACC\+\+ consist of components that are causal for the model's attention decisions, together with the low\-dimensional signals used to communicate between them\. Here, we first detail the conceptual advances that ACC\+\+ makes over previous work\. We then show that across multiple models, a substantial portion of ACC\+\+ signals are \*interpretable\*: many signals admit a short natural\-language description\. We next present a number of new insights into model behavior obtained via ACC\+\+\. First, we use ACC\+\+'s interpretable circuits to characterize the sensitivity of indirect object identification \(IOI\) circuits to prompt structure\. We find that prompt\-specific circuits form well\-defined clusters, and across clusters, heads receive systematically different signals corresponding to distinct mechanisms for identifying the IO name\. Next, in multilingual IOI, ACC\+\+ circuits show that while model \*components\* are reused across languages, \*signals\* are often language\-specific\. In a four\-language IOI case study, cross\-language circuit distances are consistent with linguistic relatedness\. Together, these results show that ACC\+\+ can shed light on a broad spectrum of model behaviors\.

## PIGRAM: An Interpretable Patch\-\-Motif Interaction Grammar for Protein\-\-Nucleic\-Acid Recognition

**Authors:** Yaru Han

**ID:** 149302 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rDL8Pa6vyo>) | [PDF](<https://openreview.net/pdf?id=rDL8Pa6vyo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149302>)

Protein\-\-nucleic\-acid recognition underlies aptamer discovery and nucleic\-acid therapeutics, yet computational models often trade mechanistic interpretability for predictive flexibility\. Hybrid interpretable\-\-latent architectures risk fallback takeover, where the latent branch silently becomes the true predictor while the explicit pathway remains decorative\. We introduce PIGRAM, a patch\-\-motif grammar model that decomposes proteins into local residue patches and nucleic\-acid partners into secondary\-structure motifs, learning a sign\-separated grammar over explicit physicochemical and geometric attributes to preserve rare favorable interactions\. Heterogeneous rule families are selectively refined into a coarse\-to\-fine atlas, and a frozen\-grammar residual Transformer provides sparse, bounded corrections without displacing the grammar as the primary predictor\. On a strict sequence\-pair\-disjoint benchmark, PIGRAM achieves a Pearson correlation of 0\.494, approaching the unconstrained Transformer \(0\.511\) while exposing signed rules, fine subtypes, and route\-gated corrections for each prediction\. The learned rules recover bidirectional patch\-\-motif mechanisms, and residual corrections concentrate selectively on grammar\-hard regions\. In fluorescence ELISA experiments, suppressive\-rule relief improved GFP binding, whereas favorable\-rule disruption weakened NELF binding, providing direct experimental support for grammar\-guided design\. Together, these results show that interpretable grammar can serve as both a predictive scaffold and an experimentally actionable design principle for aptamer optimization\.

## Beyond Confidence: Rethinking Self\-Assessments for Performance Prediction in LLMs

**Authors:** Sree Bhattacharyya; Samarth Khanna; Leona Chen; Lucas Craig; Tharun Dilliraj; James Wang

**ID:** 149177 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sJJiEfEeoR>) | [PDF](<https://openreview.net/pdf?id=sJJiEfEeoR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149177>)

Large Language Models \(LLMs\) are increasingly used in settings where reliable self\-assessment is critical\. Assessing model reliability has evolved from using probabilistic correctness estimates to, more recently, eliciting verbalized confidence\. Confidence, however, has been shown to be an inconsistent and overoptimistic predictor of model correctness\. Drawing on cognitive appraisal theory, a framework from human psychology that decomposes self\-evaluation into multiple components, we propose a multidimensional perspective on model self\-assessment\. We elicit six appraisal\-based dimensions of self\-assessment, alongside confidence, and evaluate their utility for predicting model failure across 12 LLMs and 38 tasks spanning eight domains\. We find that competence\-related appraisal dimensions, particularly effort and ability, consistently match or outperform confidence across most settings\. Effort additionally yields less overoptimistic estimates that remain stable across model sizes\. In contrast, affective dimensions provide marginally predictive signals\. Furthermore, the most informative dimension varies systematically with task characteristics: effort is most predictive for reasoning\-intensive tasks, while ability and confidence dominate on retrieval\-oriented tasks\. Broadly, our findings indicate that structured multidimensional self\-assessment is a promising approach to improving the reliability and safety of language model deployment across diverse real\-world settings\.

## A Reproduction Study of Weight\-Based Mechanistic Interpretability in Bilinear MLPs

**Authors:** Itay Erlich; May Ben Zion; Jacob Shashoua

**ID:** 157024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Mechanistic interpretability typically explains a trained network by analyzing its activations, at the cost of training auxiliary models such as sparse autoencoders \(SAEs\)\. Pearce et al\. \(2025\) pursue an alternative: bilinear MLPs, whose omission of element\-wise nonlinearities makes each layer an exact quadratic form, so interpretable features can be read directly from the weights via eigendecomposition of the layer's interaction tensor\. We present a systematic reproduction of that work\. The vision claims reproduce fully: regularization induces low\-rank, visually interpretable eigenstructure, and our ablations sharpen the original account by identifying weight decay, rather than noise augmentation, as the dominant cause\. The language claims reproduce only partially: we confirm the qualitative discovery of sentiment\-negation circuits, but the reported prevalence of low\-rank feature interactions holds for only one of three publicly released models \(a second becomes consistent once rarely\-active dictionary features are excluded\)\. We identify two candidate factors that the original paper leaves unreported – SAE training duration and the underlying model's training compute – and a third that is structural: the public unavailability of matching SAE artifacts, which makes part of the original configuration impossible to replicate exactly\. Beyond reproduction, we test whether weight\-based features are genuinely structural rather than dataset\-specific: regularized bilinear MLPs transfer across handwritten\-digit datasets and recognize geometrically similar letters, and we introduce Quadratic Form Similarity, a weight\-space metric that separates structurally similar from dissimilar class pairs where eigenvector cosine similarity cannot\. Finally, we show on MNIST\-scale models that the low\-rank structure the original paper discovers post\-hoc can instead be enforced during training via Canonical Polyadic \(CP\) decomposition: at matched full training, CP models match dense accuracy and effective rank, and a bridge experiment connecting the two extensions shows their decision surfaces substantially coincide with the dense ones – enforced and discovered structure converge\. Our results are consistent with weight\-based interpretability as a viable paradigm, while demonstrating that its reproducibility hinges on artifact availability and training\-compute details that interpretability research rarely reports\.

## Opening Up a New Layer: A Deeper Look into "Interpreting CLIP with Hierarchical Sparse Autoencoders"

**Authors:** Nora Kahleogullari; Adrianna Romanowski; Mathan Sundarrajan

**ID:** 157018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Sparse Autoencoders \(SAEs\) have become essential for decomposing model activations into interpretable concepts\. However, despite their effectiveness, SAEs lack a natural ordering of features, making it difficult to prioritize important concepts under compute constraints\. The Matryoshka Sparse Autoencoder \(MSAE\) was introduced as a means of learning nested subspaces, theoretically forcing high\-level features into earlier dimensions to enable adaptive granularity\. In this paper, we reproduce and analyze the MSAE framework\. The reproduction of the study suffers from certain challenges, but the main claims still hold\. Furthermore, this study extends on the original paper by implementing feature absorption as a metric, reducing computational cost and emissions with a method inspired by the Sandwich Rule, and deeply analyzing MSAE's ability to learn hierarchical information\.

## Revisiting RegressionMSR: A Reproducibility Study

**Authors:** Neev Mistry

**ID:** 157012 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Regression\-adjusted Monte Carlo estimators for Shapley values and probabilistic values combine surrogate modeling with maximum\-sample\-reuse estimation to reduce the cost of feature\-attribution computation\. We present a reproducibility study of RegressionMSR in the interventional feature\-attribution setting, focusing on artifact fidelity, practical algorithmic choices, and empirical robustness\. We first identify implementation\-level differences between the estimator displayed in the paper and the released artifact: the code computes separated conditional means over coalitions containing and excluding each feature, rather than the displayed all\-row signed residual average, and it is also not guaranteed to use a probability mass in its residual denominator\. We characterize these conventions algebraically and verify their predicted targets with synthetic diagnostics\. On real data, the stored denominator strongly attenuates the residual correction: correcting both conventions changes LinearMSR little but reduces TreeMSR error by more than half in the tested Shapley settings\. We then test the authors' practical single\-surrogate simplification, finding that it substantially reduces runtime while maintaining and often slightly improving accuracy\. Next, we qualitatively reproduce the headline Shapley benchmark among the original comparison methods, where TreeMSR remains the lowest\-error estimator on average; however, OddSHAP performs best in our modern benchmark extension, and rank\-stability metrics provide a complementary ordering\. Finally, we extend the original Gaussian\-noise experiment to Laplacian and coalition\-size\-dependent heteroskedastic noise, finding that TreeMSR's low\-noise advantage persists across other low\-noise regimes\. Overall, our results support RegressionMSR's empirical value while clarifying implementation details needed for reproducible use\.

## Reproducibility study of "Bilinear MLPs enable weight\-based mechanistic interpretability"

**Authors:** Hamid Reza Ahmadi; Mihnea Andrei Bârsan; Jan Jelínek; Robert\-Stefan Sofroni

**ID:** 157016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

This paper presents a reproducibility study of "Bilinear MLPs enable weight\-based mechanistic interpretability" by Pearce et al\. \(2024\), which proposes that bilinear architectures possess intrinsic interpretability properties accessible via eigenvalue decomposition\. We verify the core empirical image classification claims\. Our results confirm the findings for image classification: bilinear layers consistently exhibit an interpretable low\-rank structure where the leading eigenvectors capture the majority of task\-relevant information, allowing for significant truncation without performance loss\. Furthermore, we validate that these eigenstructures are stable across random initializations and varying model sizes\. Additionally, we explore extensions to the original work, demonstrating that adversarial training \(specifically PGD\) enhances the interpretability of eigenvector features on MNIST\. Finally, we explored generalization on more complex RGB datasets, such as CIFAR\-10 and CIFAR\-100, which have generated eigenvectors with uninterpretable structures\. All our code is publicly available at: https://anonymous\.4open\.science/r/reproduced\-mech\-inter\-image\-class

