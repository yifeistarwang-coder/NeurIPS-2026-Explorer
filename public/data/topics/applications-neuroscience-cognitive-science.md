# Applications / Neuroscience, Cognitive Science

应用 / 神经科学与认知科学

151 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## EEG\-X: Toward Device\-Agnostic and Noise\-Robust Foundation Models for EEG

**Authors:** Navid Mohammadi Foumani; Soheila Ghane; Nam Nguyen; Mahsa Salehi; Geoffrey Webb; Geoffrey Mackellar

**ID:** 152276 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UHwOAjPtEg>) | [PDF](<https://openreview.net/pdf?id=UHwOAjPtEg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152276>)

Foundation models for EEG analysis are still in their infancy, limited by two key challenges: \(1\) variability across datasets caused by differences in recording devices and electrode configurations, and \(2\) the low signal\-to\-noise ratio \(SNR\) of EEG, where neural activity is often buried under artifacts and non\-brain sources\. To address these challenges, we present \\textit\{EEG\-X\}, a device\-agnostic and noise\-robust foundation model for EEG representation learning\. EEG\-X introduces a location\-based channel embedding that enables robust transfer across heterogeneous EEG devices and electrode layouts\. To improve robustness against noise, EEG\-X employs a novel noise\-aware masking\-reconstruction strategy that reconstructs artifact\-cleaned signals rather than raw noisy EEG and introduces a novel Dictionary\-based Convolutional Transformation \(DiCT\) that improves reconstruction\-based pretraining by comparing signals in a structured feature space instead of directly in the raw signal space\. Experiments across datasets collected from diverse EEG devices show that EEG\-X consistently outperforms state\-of\-the\-art methods across multiple downstream tasks and demonstrates strong cross\-domain generalization when pretraining and downstream datasets differ in electrode layouts and recording configurations paving the way towards foundation models\. The models and code are available at :https://anonymous\.4open\.science/r/EEG\-X\-CEDE/README\.md

## SPERA: Spherical Prior EEG Foundation Model with Geometry\- and Frequency\-Aware Latent Prediction

**Authors:** Minsu Kim; Ye\-Sung Kim; Hyeseong Jeon; Wooseok Hyung; Joshua Lee; Chang\-Hwan Im

**ID:** 155259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=71zbNNbFKV>) | [PDF](<https://openreview.net/pdf?id=71zbNNbFKV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155259>)

Electroencephalography \(EEG\) provides a non\-invasive measure of ongoing neural activity, but building general\-purpose EEG models remains challenging due to the heterogeneity of subjects, devices, and electrode montages\. Existing EEG foundation models predominantly rely on input\-space reconstruction, which can bias the encoder toward memorizing noise and artifacts\. We introduce SPERA \(Spherical Prior EEG Representation Architecture\), an EEG foundation model that predicts in latent space following the joint\-embedding predictive architecture \(JEPA\)\. SPERA combines three components tailored to EEG: \(i\) a hybrid attention backbone that interleaves factorized temporal and spatial attention with periodic full\-attention layers, \(ii\) a Legendre\-polynomial spatial prior incorporated into attention to encode varying scalp electrode geometries, and \(iii\) a relational spectral regularizer that aligns latent similarity structure with spectral views, inducing frequency\-aware latent representations\. Pretrained on approximately 90,213 hours of EEG from 31,771 subjects across 106 datasets, SPERA achieves the highest average performance across nine downstream tasks spanning clinical, cognitive, and BCI applications\. SPERA further exhibits strong parameter efficiency and robustness across varying recording conditions, suggesting its potential as a general\-purpose backbone for diverse EEG analyses\.

## Sparse Multimodal Switching State\-Space Models for Regime\-Dependent Neural Connectivity under Partial Observations

**Authors:** Rahul K Sharma; Feng Liu; Xiaochen Xian

**ID:** 151057 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dJy3Ipz0tx>) | [PDF](<https://openreview.net/pdf?id=dJy3Ipz0tx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151057>)

Multimodal electrophysiological recordings provide noisy, partially observed measurements of latent neural dynamics critical for tasks like brain state estimation and neurological diagnosis\. In joint EEG\-intracranial EEG \(iEEG\) recordings, scalp EEG offers broad but spatially mixed coverage, whereas iEEG provides high\-fidelity but spatially sparse measurements\. This creates a partial\-observation problem: directed source\-level interactions must be inferred from heterogeneous sensors with incomplete coverage\. A second challenge is nonstationarity: latent neural dynamics and directed interactions among brain regions can change abruptly across distinct regimes \(e\.g\., pre\-seizure, ictal, and post\-seizure states\)\. The third challenge is sparsity of significant source\-level interactions compared to the high\-dimensionality of the brain networks\. Standard models that assume single\-mode, fully observed, or stationary may therefore fail to capture regime\-specific activity or spurious couplings\. We propose the Sparse Multimodal Switching State\-Space Model \(S$^4$M$^3$\), which fuses EEG and iEEG as complementary observations of a shared source\-space latent process\. Dynamics switch between regimes governed by separate sparse directed transition matrices, jointly addressing multimodal fusion, nonstationarity, and sparse network estimation\. The estimation of the model uses the expectation\-maximization \(EM\) algorithm, where the E\-step applies the Kim filter\-RTS smoother to estimate latent states and regime probabilities, and the M\-step imposes elastic\-net penalization on off\-diagonal elements, promoting sparse inter\-regional couplings while preserving self\-dynamics\. The learned transition matrices facilitates the assessment of regime\-dependent edge changes\. To address the estimation bias of elastic\-net sparsity penalty, we separate edge selection from edge assessment: selected edges are refit by regime\-weighted least squares, followed by Wald tests with Benjamini\-Hochberg correction\. On synthetic benchmarks, S$^4$M$^3$ improves Edge F1 by approximately 25\\% over the strongest stationary baseline and 64\\% over two\-stage source\-connectivity pipelines\. On a real EEG\-iEEG epilepsy case study, S$^4$M$^3$ identifies sparse hippocampal and parahippocampal outgoing pathways concordant with the clinician\-confirmed seizure\-onset zone, without using clinical labels\.

## What Is Worth Representing? Representational Empowerment for Continual Model Construction

**Authors:** Fei Dai; Hanqi Zhou; Alison Gopnik; Charley M Wu

**ID:** 149925 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m9oKQZGDlw>) | [PDF](<https://openreview.net/pdf?id=m9oKQZGDlw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149925>)

_Abstract unavailable from the accessible public sources._

## Neural Structural Reasoner: A Brain\-inspired Architecture for Reasoning over Structured Knowledge

**Authors:** Zixing Jia; Yuhang Pan; Ni Ji

**ID:** 149065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t8iDmsYS6X>) | [PDF](<https://openreview.net/pdf?id=t8iDmsYS6X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149065>)

Structural reasoning, the ability to recognize and make inference over the relational structure between objects and concepts, is a hallmark of human cognition, yet prevailing methods often collapse relational topology into flat embeddings, cannot discover hidden structure and lack interpretability\. We introduce Neural Structural Reasoner \(NSR\), a brain\-inspired network that preserves relational structure directly in the connectivity and dynamics of coupled neuronal populations\. NSR draws inspiration from three biological mechanisms: multi\-layered architecture for encoding hierarchical knowledge, stable representation of entity and concepts, and path integration for input\-driven state inference\. At query time, NSR parallelizes computation over candidate relational structures and leverages confidence\-weighted scores to perform link prediction\. On standard knowledge\-graph benchmarks, NSR matches strong embedding and rule\-mining baselines with superior training efficiency\. Because reasoning is implemented through sequences of human\-readable neuron activations, NSR affords native interpretability by tracking intermediate inference steps\. The model further extracts latent relational hierarchies and compositional rules, demonstrating the brain\-inspired architecture as an effective, efficient, and highly interpretable substrate for structural reasoning\.

## ConnectomeBench2: A Unified Benchmark for Automated Connectomic Proofreading

**Authors:** Jeff Brown; Tim Farkas; Gleb Razgar; Edward Boyden

**ID:** 139242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceOs8fK1Ev>) | [PDF](<https://openreview.net/pdf?id=ceOs8fK1Ev>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139242>)

Proofreading—correcting segmentation errors in 3D brain reconstructions—is the rate\-limiting step in synapse\-resolution connectomics\. We release ConnectomeBench2, a unified multi\-species dataset of over 302,401 expert\-labeled proofreading decisions with &gt;2,000,000 associated images spanning four major open connectomes \(mouse, human, zebrafish, fly\), spanning both split and merge error correction\. Trained on this dataset, a single Vision Transformer with shared encoders for mesh geometry and electron microscopy reaches human\-level accuracy across species for split error correction and merge error identification; with performance scaling with data size and improving with species diversity\. Beyond accuracy, we show that the model is well\-calibrated within distribution, that measures of distribution distance predict where calibration and accuracy will degrade on unseen data, and that connectomics\-specific pretraining and active learning\-based sample selection show potential to substantially reduce the labeling effort needed to extend to new species and brain regions\. The benchmark provides the infrastructure to train and evaluate increasingly capable vision models for connectomic proofreading\.

## MindVLM: Neural\-Grounded Visual Captioning via Subject\-Aware Semantic Evidence Selection

**Authors:** Zixiang Yin; Yu\-Ping Wang; Zhengming Ding

**ID:** 154514 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D1By8Wvrqy>) | [PDF](<https://openreview.net/pdf?id=D1By8Wvrqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154514>)

Translating visual brain activity into natural language offers a powerful window into human cognition and neural semantic representation\. Most prior brain\-captioning approaches project fMRI signals into language space using paired supervision\. However, the widely used Natural Scenes Dataset \(NSD\) was built based only on image\-fMRI pairs, while existing methods rely on MS\-COCO captions as indirect textual supervision\. Critically, during fMRI acquisition, participants observe only cropped image regions, whereas the associated MS\-COCO captions describe full scenes\. This mismatch creates a fundamental gap between neural representations and textual supervision, introducing an inherent \*\*semantic loss\*\* in NSD\-based brain captioning\. To mitigate this limitation, we reformulate brain captioning as \*\*Neural\-Grounded Visual Captioning\*\*, where language is generated directly from visually grounded neural evidence rather than text supervision\. We propose \*\*MindVLM\*\*, a framework that maps fMRI signals into subject\-aware visual tokens and leverages a frozen vision language model \(VLM\) to produce interpretable and personalized descriptions\. Instead of point\-wise regression, MindVLM focuses on extracting semantically relevant visual cues from neural activity, naturally accommodating partial observability and inter\-subject variability\. Extensive experiments on NSD show that MindVLM consistently improves caption quality across multiple VLM backbones, including LLaVA\-v1\.5, Qwen2\.5\-VL, and Gemma3, beyond intrinsic model priors\. Despite requiring neither text supervision nor an LLM during training and operating under an image\-grounded inference paradigm distinct from conventional captioning methods, MindVLM remains competitive with supervised approaches, suggesting that subject\-specific neural grounding provides an efficient, scalable, and interpretable path toward faithful brain\-to\-language generation\.

## Meta\-Cognitive Memory Policy Optimization for Long\-Horizon LLM Agents

**Authors:** Ziyan Liu; Zhezheng Hao; Yeqiu Chen; Hong Wang; JingRen Hou; Ruiyi Ding; Yongkang Yang; Wence Ji; Wei Xia; Feng Liu

**ID:** 155887 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=26CTl3jZo9>) | [PDF](<https://openreview.net/pdf?id=26CTl3jZo9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155887>)

_Abstract unavailable from the accessible public sources._

## RABBiT: Rapidly adaptive BOLD foundation model via brain\-tuning for accurate zero\-shot and few\-shot prediction of speech\-elicited responses in the brain

**Authors:** Omer Moussa; Mariya Toneva

**ID:** 148160 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zqBwrok09Z>) | [PDF](<https://openreview.net/pdf?id=zqBwrok09Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148160>)

Language understanding in the brain is context\-dependent, varying across experimental stimuli and individuals, which makes it difficult to build computational models that generalize across both\. This calls for a foundation model of language\-evoked brain activity that can capture shared structure while adapting efficiently to new participants and inputs\. We introduce RABBiT \(Rapidly Adaptive BOLD foundation model via BraIn\-Tuning\), a compact audio\-to\-fMRI encoder designed for accurate zero\- and few\-shot prediction\. A comprehensive evaluation on 324 participants across multiple unseen fMRI datasets shows that RABBiT enables accurate zero\-shot prediction of fMRI responses to natural speech across auditory and language\-selective regions, surpassing the SOTA foundation model for fMRI and predictions based on group averages\. With as little as 10 minutes of participant\-specific data, RABBiT further improves performance via parameter\-efficient tuning, substantially outperforming per\-participant linear models\. RABBiT's performance is driven by two key innovations: \(1\) learned region\-specific attention, and \(2\) a decomposition of brain responses into shared and subject\-specific components, combined with a brain\-tuned speech backbone\. In addition to supporting strong predictive accuracy, the structured, region\-specific representations that RABBiT learns enable interpretability\. By eliminating the need for extensive per\-participant data and model fitting, RABBiT enables scalable population\-level analyses of language in the human brain\.

## Paradoxical noise preference in RNNs

**Authors:** Noah Eckstein; Manoj Srinivasan

**ID:** 156748 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=gqxTZRzI35>) | [PDF](<https://openreview.net/pdf?id=gqxTZRzI35>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156748>)

In recurrent neural networks \(RNNs\) used to model biological neural networks, noise is typically introduced during training to emulate biological variability and regularize learning\. The expectation is that removing the noise at test time should preserve or improve performance\. Contrary to this intuition, we find that continuous\-time recurrent neural networks \(CTRNNs\) often perform best at a nonzero noise level, often approximately the same level used during training\. This noise preference typically arises when noise is injected inside the neural activation function; networks trained with noise injected outside the activation function perform best with zero noise\. The phenomenon arises robustly in diverse tasks for large enough training noise including function approximation, maze navigation, 2D path integration, and a multi\-task suite from cognitive neuroscience; we also show the phenomenon arising in feedforward neural networks, not just in RNNs\. Through analyses of simple function\-approximation and single\-neuron regulator tasks, we show that the phenomenon stems from noise\-induced shifts of fixed points \(stationary distributions\) in the underlying stochastic dynamics of the RNNs, thereby providing some  mechanistic interpretability of the phenomenon\. These fixed point shifts are noise\-level dependent and bias the network outputs when the noise is removed, degrading performance\. Analytical and numerical results show that the bias arises when neural states operate near activation\-function nonlinearities, where noise is asymmetrically attenuated, and that performance optimization incentivizes operation near these nonlinearities; such performance incentives exist for networks with noise inside the activation function, but not for networks with noise outside the activation function, explaining why only noise\-in networks show preference\.  Thus, networks can overfit to the stochastic training environment itself rather than just to the input–output data\.  The phenomenon is distinct from stochastic resonance, wherein nonzero noise enhances signal processing\. Our findings reveal that training noise can become an integral part of the computation learned by recurrent networks, with implications for understanding neural population dynamics and for the design of robust artificial RNNs\.

## Unifying Partner and Environment Diversity to Improve Human\-AI Coordination

**Authors:** Patrick Q Zhang; Yancheng Liang; Adrienne Fairhall; Natasha Jaques

**ID:** 151901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X66IYOVa2D>) | [PDF](<https://openreview.net/pdf?id=X66IYOVa2D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151901>)

Real\-world applications of modern AI systems require generalization to both unseen environments and novel human users\. The field of zero\-shot coordination \(ZSC\) focused primarily on deploying AI to novel partners in otherwise familiar environments seen in the training\. The popular population\-based methods enable partner generalization by training the agent on a diversity of simulated human users \(serving as training\-time partners\) in a fixed environment, aiming to cover the diverse behaviors of novel human users\. Such a paradigm does not consider the more challenging realistic scenarios where both the users and the environment are unseen during training\. Recently, training across environments has been explored in training a single self\-play agent, which shows better generalization on both novel human users and unseen environments\. In this work, we ask whether jointly modeling partner diversity and environment diversity yields stronger coordination with novel partners in novel environments\. We introduce Cross Environment Co\-Play \(CECP\), a two\-stage framework that first trains a population of self\-play agents across a distribution of procedurally generated environments, and then trains a cooperator policy against this partner population\. To further couple social and environmental reasoning, we add a next\-state prediction module that encourages representations to encode both partner behavior and task structure, and validate the design choice with ablation studies\. We evaluate CECP on both a neuroscience\-inspired cooperative foraging task, and the population ZSC benchmark Overcooked, under held\-out partner and held\-out environment conditions\. CECP achieves the strongest performance among the compared baselines and attains state\-of\-the\-art results under our evaluation protocol for human\-AI collaboration\. We provide further analysis using the model's latent representation encoded by the next\-state prediction module, showing it can not only improve the performance of the cooperative AI, but also provide more interpretable latents, which demonstrate the inference of partner skill levels\.

## Categorical Bayes filtering for computational phenotyping in adaptive learning

**Authors:** Junxi Chen; Payam Piray

**ID:** 153212 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N0qn9jBOCR>) | [PDF](<https://openreview.net/pdf?id=N0qn9jBOCR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153212>)

Adaptive learning requires distinguishing environmental volatility from observation stochasticity, two sources of uncertainty that demand opposite adjustments to the learning rate but inflate experienced variance similarly\. Disentangling them is computationally difficult with no tractable closed\-form solution\. Particle\-filter methods are the natural tool for this kind of joint inference, but their stochastic likelihoods and non\-differentiable objectives force derivative\-free fitting protocols and discourage the individual\-difference analyses central to cognitive modeling, where small effect sizes leave little room for additional estimator noise\. We introduce the Categorical Bayes Filter \(CBF\), a deterministic alternative that preserves the conditional structure of recent particle\-filter accounts but replaces the stochastic outer layer with a categorical distribution on a quantile grid parameterized through differentiable Beta quantile functions\. The procedure performs evidence maximization with an exact, deterministic marginal likelihood that is fully differentiable in the grid parameters\. In a volatility\-stochasticity task with N = 643 participants, fitted CBF dispersion parameters reveal a cross\-over phenotyping pattern between volatility\-blind and stochasticity\-blind subjects that is not recoverable from particle\-filter parameters fit to the same data under a state\-of\-the\-art protocol\. The deterministic structure also yields a trial\-by\-trial ambiguity signal that predicts response times not used in fitting\. More broadly, the approach opens individual\-level analyses in cognitive modeling and computational psychiatry that stochastic methods have effectively foreclosed\.

## EEG Benchmarking Needs a Task Specification Layer: NeuroDoc for Rulebook\-Guided, Executable Benchmark Construction

**Authors:** Chengxuan Qin; 致格 陈; Pengshu; Rui Yang; JiPing Cui; Yikai Dong; Jun Li; Liu Peng; Zhida Shang; Mingze Tang; KC Tan; Jibin Wu

**ID:** 139164 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hRuXRJvc4A>) | [PDF](<https://openreview.net/pdf?id=hRuXRJvc4A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139164>)

Electroencephalography \(EEG\) foundation models increasingly rely on multi\-dataset training and evaluation, yet public EEG datasets still lack a shared task specification layer that can turn heterogeneous recordings into reusable benchmark units\. Existing standards organize files, metadata, and provenance, but they do not specify EEG tasks under a common language and rulebook, leaving critical task semantics scattered across papers, code, and manual interpretation\. We investigate whether heterogeneous public EEG datasets can be standardized through a structured task specification language paired with a shared rulebook\. Our methodology represents each benchmark entry as a task document synchronized with an executable task kernel, with the rulebook defining task fields, evidence requirements, document\-kernel alignment, review states, and machine\-checkable constraints\. Using this methodology, we release a community\-reviewed EEG benchmark corpus centered on 53 completed and reviewed entries with 245 task definitions spanning diverse paradigms, and we introduce NeuroDoc and NeuroAudit as the operational support layer for rulebook\-guided drafting, upgrading, review, amendment, and release management\. We further examine whether the resulting benchmark units can be instantiated in a shared downstream setting across four EEG foundation model backbones, providing execution\-based evidence for reusable, auditable, and executable EEG benchmarking infrastructure\. Project resources are available at https://anonymous\.4open\.science/r/anonymous\_reviewe\_neurodoc\.

## Sparse Reward Subsystem in Large Language Models

**Authors:** Guowei Xu; Mert Yuksekgonul; James Zou

**ID:** 155694 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3dZL4FURuU>) | [PDF](<https://openreview.net/pdf?id=3dZL4FURuU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155694>)

Recent studies show that LLM hidden states encode reward\-related information, such as answer correctness and model confidence\. However, existing approaches typically fit black\-box probes on the full hidden states, offering little insight into how this information is structured across neurons\. In this paper, we show that reward\-related information is concentrated in a sparse subset of neurons\. Using simple probing, we identify two types of neurons: value neurons, whose activations predict state value, and dopamine neurons, whose activations encode step\-level temporal difference \(TD\) errors\. Together, these neurons form a sparse reward subsystem within LLM hidden states\. These names are drawn by analogy with neuroscience, where value neurons and dopamine neurons in the biological reward subsystem also encode value and reward prediction errors, respectively\. We demonstrate that value neurons are robust and transferable across diverse datasets and models, and provide causal evidence that they encode reward\-related information\. Finally, we show applications of the reward subsystem: value neurons serve as effective predictors of model confidence, and dopamine neurons can function as a process reward model \(PRM\) to guide inference\-time search\.

## LibriBrain100: One Hundred Hours of Broad and Deep MEG Data for Neural Speech Decoding at Scale

**Authors:** Francesco Mantegna; Dulhan Jayalath; Gereon Elvers; Tasha Kim; Benjamin Ballyk; SungJun Cho; Teyun Kwon; Luisa Kurth; Miran Özdogan; Gilad Landau; Pratik Somaiya; Natalie Voets; Mark Woolrich; Oiwi Parker Jones

**ID:** 139616 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FDNgl8GYEN>) | [PDF](<https://openreview.net/pdf?id=FDNgl8GYEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139616>)

_Abstract unavailable from the accessible public sources._

## Sparse Reward Subsystem in Large Language Models

**Authors:** Guowei Xu; Mert Yuksekgonul; James Zou

**ID:** 155694\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155694

[Paper](<https://openreview.net/forum?id=3dZL4FURuU>) | [PDF](<https://openreview.net/pdf?id=3dZL4FURuU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155694>)

Recent studies show that LLM hidden states encode reward\-related information, such as answer correctness and model confidence\. However, existing approaches typically fit black\-box probes on the full hidden states, offering little insight into how this information is structured across neurons\. In this paper, we show that reward\-related information is concentrated in a sparse subset of neurons\. Using simple probing, we identify two types of neurons: value neurons, whose activations predict state value, and dopamine neurons, whose activations encode step\-level temporal difference \(TD\) errors\. Together, these neurons form a sparse reward subsystem within LLM hidden states\. These names are drawn by analogy with neuroscience, where value neurons and dopamine neurons in the biological reward subsystem also encode value and reward prediction errors, respectively\. We demonstrate that value neurons are robust and transferable across diverse datasets and models, and provide causal evidence that they encode reward\-related information\. Finally, we show applications of the reward subsystem: value neurons serve as effective predictors of model confidence, and dopamine neurons can function as a process reward model \(PRM\) to guide inference\-time search\.

## BRIDGE: Brain\-Vision Representation Integration through Depth and Granularity Encoding

**Authors:** Chenyuan Hong; Binghao Ye; Yufei Guo; Guoqi Li

**ID:** 155233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7GEZxlwjaN>) | [PDF](<https://openreview.net/pdf?id=7GEZxlwjaN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155233>)

Decoding visual content from non\-invasive brain signals remains challenging because neural responses evolve over time whereas images are typically static\. Most existing methods align an entire neural response window to a single final visual embedding, this overlook a fundamental representational mismatch: brain signals reflect both early perceptual and later integrative representations, whereas the final visual embedding is biased toward high\-level semantics\. Therefore, we propose BRIDGE, a brain\-vision representation integration framework that aligns two modalities through Visual Depth Encoding and Brain Granularity Encoding\. On the visual side, BRIDGE extracts and fuses CLIP representations from multiple depths, producing an alignment target that preserves low\-level and high\-level information\. On the brain side, instead of treating the whole temporal window as homogeneous and obscuring temporally heterogeneity, BRIDGE explicitly partitions stimulus\-evoked EEG/MEG responses into a small number of temporally ordered stages and adaptively pools them\. The resulting brain and visual embeddings are trained in a shared latent space by contrastive learning and can further support brain\-to\-image generation through a pretrained diffusion prior\. Experiments on THINGS\-EEG and THINGS\-MEG demonstrate that BRIDGE achieves strong retrieval and generation performance\. Ablation studies further confirm the complementary benefits of depth\-wise visual aggregation and temporal brain factorization\.

## FETTUCCINE: Fast and efficient brain\-to\-text decoding on mobile devices

**Authors:** Jonathan McCart; Pranav Deevi; Mehdi Azabou; Nanda H Krishna; Caleb A McKinney; Nicholas S Card; Sergey D Stavisky; Chethan Pandarinath

**ID:** 150728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fqsWkQnA9w>) | [PDF](<https://openreview.net/pdf?id=fqsWkQnA9w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150728>)

Recent advances in speech neuroprostheses have enabled new communication avenues for people who have lost the ability to speak due to neurological illness or injury\. These systems can decode neural activity during attempted speech into text by relying on language priors to achieve high decoding accuracy\. This performance currently comes at the cost of using a compute\-intensive language modeling stack, presenting a major bottleneck for real\-world use\. Further, current language models incur highly variable and disruptive inference latencies, limiting communication throughput and preventing users from reliably participating in natural conversation\. We introduce FETTUCCINE, an end\-to\-end brain\-to\-text framework that leverages the speed and portability of automatic speech recognition \(ASR\) models to address the aforementioned practical challenges, while achieving usable \(&lt;10%\) word error rates \(WER\), efficient adaptation to neural non\-stationarities, and reliable performance on mobile devices\. When evaluated using publicly available data from an intracortical speech neuroprosthesis user, FETTUCCINE outperforms previous end\-to\-end methods, achieving as low as 4\.39% WER\. Most notably, our models successfully run on a commercially\-available mobile device with throughput reaching up to 370x real\-time, providing the first demonstration of brain\-to\-text decoding on a mobile device\. We also show that our models can be successfully finetuned to extend usable performance to future days\. Beyond performance, our approach enables localization of the neural features most relevant for decoding via gradient\-based salience maps, which we show align with well\-established physiological priors across different ASR model families\. Taken together, our results show that FETTUCCINE overcomes core infrastructural and computational barriers, yielding a new class of portable brain\-to\-text communication\.

## Vibe\-Spike: An Energy\-Preserving EEG Foundation Model Through the Landscape of Neural Coherence

**Authors:** Jun Ye; yuting li; Tingting Dan; Guorong Wu

**ID:** 154655 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C1hqOzVwCn>) | [PDF](<https://openreview.net/pdf?id=C1hqOzVwCn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154655>)

Current foundation models of electroencephalography \(EEG\) sought to characterize the fluctuations in neural signals, yet this objective stands fundamentally at odds with the intrinsic physiological mechanisms governing brain activity\. As with their LLM predecessors, these models pack millions of neurons, even those contributing negligibly small weights, yielding a computational footprint incompatible with resource\-constrained portable brain\-computer interfaces \(BCIs\)\. To overcome these challenges, we propose \*Vibe\-Spike\*, an energy\-preserving and biologically\-realistic EEG foundation model operating in the regime of oscillatory neural synchronization\. Drawing on principles from cognitive neuroscience, our foundation model is designed to recover the masked EEG signals through the transient spikes of spatially coupled neurons, from which self\-organized cortical synchronization \(aka\. \*brain rhythms\*\) emerges to reciprocally modulate ongoing neural firings\. Under the hood, we introduce a macro\-micro learning mechanism that bridges two scales of neural computation: lower layers capture neural oscillations via a spiking neural network \(SNN\), while upper layers model oscillatory synchronization across large neuronal populations, with cross\-scale interactions learned end\-to\-end\. Taken together, our \*Vibe\-Spike\* sheds new light on learning intrinsic representation of functional neural fluctuations\. We pre\-train the model to reconstruct segmented EEG signals directly from the synchronized spiking representations using a purely self\-supervised objective on a diverse corpus of \*\*75\*\* public datasets\. To demonstrate its universal representational power, we conduct massive\-scale evaluations across ten heterogeneous downstream datasets, including clinical pathology, sleep staging, and cognitive assessment\. \*Vibe\-Spike\* not only facilitates deployment on portable edge devices through its lightweight architecture and energy\-preserving inference, but also provides profound neuroscience insights\. By further capturing pre\- and post\-synaptic firing, \*Vibe\-Spike\* unlocks a new pathway for characterizing effective connectivity and the oscillatory synchronization that underpins cognition\.

## Direct Conditioning of Audio Diffusion Transformers on fMRI Reveals Cortical Contributions to Sound Reconstruction

**Authors:** Matteo Ciferri; Tonio Weidler; Matteo Ferrante; Nicola Toschi; Elia Formisano

**ID:** 152995 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OlCa72ym7P>) | [PDF](<https://openreview.net/pdf?id=OlCa72ym7P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152995>)

Reconstructing audio from brain activity remains challenging\. A key limitation lies in current audio diffusion models, which are primarily designed for text\-based conditioning and lack mechanisms to incorporate non\-linguistic continuous signals such as neural responses\. While recent work in the visual domain has explored direct conditioning on brain activity, this approach has not yet been extended to audio diffusion models\. We introduce a framework that directly guides a latent audio diffusion model with fMRI signals, avoiding intermediate feature prediction for the conditioning stage\. Central to our approach is a transformer\-compatible adapter that enables the integration of non\-linguistic representations into the cross\-attention layers of diffusion transformers \(DiTs\)\. Although motivated by neural decoding, this adapter provides a general mechanism for conditioning audio diffusion models on arbitrary continuous inputs, not inherently limited to neural signals\. We demonstrate consistent improvements over baselines, including two\-stage fMRI\-to\-latent conditioning, across both acoustic and semantic evaluation metrics\. In addition, we introduce a fidelity metric grounded in a computational model of auditory neural processing, which allows us to quantify the contribution of individual auditory cortical regions to reconstructed audio representations\.

## Emergent representations of graphical structure in mechanistic neural models of causal judgment

**Authors:** Marcus Triplett; Kenneth Kay

**ID:** 152452 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T1VpyAm5Or>) | [PDF](<https://openreview.net/pdf?id=T1VpyAm5Or>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152452>)

_Abstract unavailable from the accessible public sources._

## Representing Part\-Whole Hierarchy with Nested Neuronal Coherence

**Authors:** Hao Zheng; Hui Lin; Rong Zhao

**ID:** 150391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iPNj9AYpKu>) | [PDF](<https://openreview.net/pdf?id=iPNj9AYpKu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150391>)

Human vision flexibly extracts part\-whole hierarchies from visual scenes, but representing such structures remains a key challenge for neural networks\. Inspired by the neural syntax hypothesis in neuroscience, we propose a framework for representing hierarchical part\-whole relationships through nested neuronal coherence, characterized by its continuous and distributed nature\. Nested neuronal coherence refers to dynamical states where distributed activations are temporally correlated to form cell assembly sequences across timescales, argued to represent neural syntax\. Building on this framework, we develop a cortical\-inspired hybrid model, Composer, which dynamically achieves emergent nestedness when given images\. To evaluate the emergent hierarchy, we create four synthetic datasets and three quantitative metrics, demonstrating the model’s ability to parse scenes of varying complexity\. Overall, our work advances a systematic paradigm spanning representation, implementation, and evaluation toward building human\-like vision in neural networks\.

## FracEncoder: Towards Adaptive Cognitive Trajectories via Fractional\-Order Context Encoding

**Authors:** Lulu Wang; Shengling Wang; Anlin Chen; Ke Chao; Weicheng Wang

**ID:** 148356 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yUT3YSeo8K>) | [PDF](<https://openreview.net/pdf?id=yUT3YSeo8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148356>)

_Abstract unavailable from the accessible public sources._

## Prototypes of the Mind: A Unified Framework for Probing the Visual Brain

**Authors:** Shi Chen; Seoyoung Ahn; Doris Tsao

**ID:** 153745 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J3DGy43GZZ>) | [PDF](<https://openreview.net/pdf?id=J3DGy43GZZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153745>)

_Abstract unavailable from the accessible public sources._

## Predictive Representation Learning for Partially Observed Neural Dynamics

**Authors:** Xinyi Li; Zhichao Liang; Hongjun Jiang; Yian Zhu; Guanyi Zhao; Xuejian Yang; Xiaoqi Chen; Kexin Lou; Quanying Liu

**ID:** 151732 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YVQoWXsmt9>) | [PDF](<https://openreview.net/pdf?id=YVQoWXsmt9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151732>)

In long\-term multi\-session neural recordings, the same latent population dynamics are often observed through changing subsets of neural channels due to electrode drift, signal instability, or session\-dependent recording variability\. This creates a partially observed system\-identification problem: each session provides only an incomplete view of a shared dynamical system, and missing channels are not merely absent inputs but unobserved variables coupled to the same latent dynamics\. Existing approaches often rely on observation\-pattern\-specific mapping, which treats missing channels passively and leaves the shared latent dynamics weakly constrained\. We propose CHAMA \(CHannel\-Aware Masked Attention\), a mask\-conditioned predictive representation learning framework for identifying shared neural dynamics under heterogeneous channel availability\. CHAMA introduces a single global observation interface conditioned on channel\-availability masks, allowing observed and unobserved channels to jointly constrain latent dynamics\. The key idea is bidirectional: missing channels impose structural constraints on the latent representation, while the learned latent dynamics enable principled recovery of missing activity\. To improve identifiability under sparse observations, CHAMA aggregates causal temporal windows, effectively trading temporal context for missing spatial information\. Across synthetic dynamical systems and real multi\-session neural recordings, CHAMA improves missing\-channel completion, forecasting, latent dynamical fidelity, and downstream behavioral decoding over conditional adapter, zero\-padding, and masked\-autoencoding baselines\. These results show that dynamics\-aware recovery preserves globally consistent and behaviorally relevant structure beyond point\-wise reconstruction accuracy\. The source code is available at: \\url\{https://anonymous\.4open\.science/r/CHAMA\-D691\}\.

## Learning Transferable Cross\-Day Representations for Few\-Shot Neural Decoding

**Authors:** Yue Chen; Menghan Li; Tatsuo S Okubo

**ID:** 149445 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q1LJcYNOB7>) | [PDF](<https://openreview.net/pdf?id=q1LJcYNOB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149445>)

_Abstract unavailable from the accessible public sources._

## Beyond High and Low: Evaluating Graded Cognitive Diversity in LLM Persona Simulations

**Authors:** Sion Weatherhead; Ben R Newell; Aaron Belbasis; Flora Salim

**ID:** 138966 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tY7NV2RNkm>) | [PDF](<https://openreview.net/pdf?id=tY7NV2RNkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138966>)

_Abstract unavailable from the accessible public sources._

## AuGhostmentation: The Eyes Never Stand Still—$\\textit\{Why Should CNNs?\}$

**Authors:** Emirhan Inan; Suayb Arslan

**ID:** 152194 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UrYjjK6We7>) | [PDF](<https://openreview.net/pdf?id=UrYjjK6We7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152194>)

Convolutional Neural Networks \(CNNs\) draw broad inspiration from the primate visual system yet prove notoriously brittle under common image corruptions, whereas the latter suffers little from such degradations\. Extending beyond this initial inspiration, architectures incorporating quantifiable biological priors that enhance network resilience are increasingly gaining traction\. Nevertheless, most of these approaches have so far been confined to emulating the higher visual areas, seldom utilizing the upstream retinal stages that constitute the very basis of $\\textit\{seeing\}$\. At its core, primate vision relies on photons captured by retinal photoreceptors, the signals of whose conversion are then relayed through the Lateral Geniculate Nucleus \(LGN\) to primary visual cortex \(V1\) and further downstream for additional processing\. Because cone photoreceptors are densest at the center of the retina \(fovea\), the eyes must be repositioned continuously \(saccade\) to direct the high\-acuity macula toward objects of interest \(fixation\)\. Furthermore, the resultant rapid eye movements induce intra\-saccadic motion streaks that putatively aid in the spatiotemporal processing of inputs and provision of translation\-invariant object correspondence across frames\. Motivated by this mechanism, we propose $\\texttt\{AuGhostmentation\}$, a portmanteau of $\\textit\{augmentation\}$ and $\\textit\{ghosting\}$, which delivers the intra\-saccadic retinal smear as a frontend transform\. Superimposing the $\\textit\{ghosted\}$ images—fainter counterparts—atop the original, based on human oculomotor statistics, the resultant datum elicits $\\textit\{retinal persistence\}$ by integrating varied recompositions of the scene in a single representation, closely mimicking the foveal exploration scheme intrinsic to dynamic primate vision\. When prepended to ResNet\-18 trained on Tiny ImageNet, $\\texttt\{AuGhostmentation\}$ retains 98% validation accuracy while delivering a striking 60% relative gain in robustness on Tiny ImageNet\-C\. Applied to VOneNet, it likewise preserves 98% classification accuracy and yields a substantial 25% relative increase in compounded robustness\. For ImageNet\-100, the introduced $\\textit\{ghosts\}$ not only improve the corruption accuracy relative to the ResNet\-50 baseline by 23%, but the clean accuracy by 4%, also\. Building on these resilience gains, $\\texttt\{AuGhostmentation\}$ outpaces competing augmentations by up to 18% and baseline ResNet\-50 by up to 37% on stylized tests, suggesting that retinal priors naturally foster shape\-biased processing and thereby provide greater alignment with human object recognition\.

## Multimodal Foundation Agents Should Use Brain Data as Privileged Supervision

**Authors:** Richard Csaky

**ID:** 140083 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JK1yUpvQxe>) | [PDF](<https://openreview.net/pdf?id=JK1yUpvQxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140083>)

This position paper argues that multimodal foundation models should use brain recordings as privileged internal\-state supervision during training\. External behavior alone leaves human\-like cognition, robustness, and reasoning weakly constrained\. Neural recordings can serve as a training\-time modality that shapes representations, latent\-state dynamics, private computation policies such as reasoning tokens, and robustness before distillation into agents that operate from ordinary sensory, language, and action streams\. We develop this position through Foundational Human Modeling \(FHM\), a program centered on scaling generative brain models, aligning heterogeneous neural modalities through shared latent geometry, inserting brain tokens into unified multimodal token streams, and testing whether the privileged channel improves distilled agents after removal\. The argument is grounded in privileged\-information theory and prior work showing that neural or human\-derived targets can improve robustness, semantic transfer, data efficiency, and behavioral similarity after auxiliary signals are removed\.

## Decomposing the modulation of interactions between neuronal populations

**Authors:** Marco Celotto; J\. S Sooter; Sofie Ährlund\-Richter; Kyle R Jenks; Mriganka Sur; Stefano Panzeri

**ID:** 152282 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UFTQ6XUIb3>) | [PDF](<https://openreview.net/pdf?id=UFTQ6XUIb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152282>)

Identifying subpopulations of neurons that interact with each other from simultaneous recordings of populations of many neurons is key for understanding across\-brain communication with cellular resolution\. Recent work identified communication subspaces, which capture additive interactions between pairs of high\-dimensional neural populations through a small number of source and target activity patterns\. However, no current method captures how a third, potentially multivariate variable \- such as behavioral state or the activity of a third population \- modulates these interactions\. Here we extend the communication subspace framework by parameterizing modulation as a low\-rank tensor\. This identifies multiplicative interaction channels \(MICs\), defined as triplets of source, target, and modulator activity patterns, in which the modulator pattern gates the source\-target interaction\. We derive MICs as a bilinear perturbation of reduced\-rank regression\. We develop a hierarchical fitting pipeline and provide a closed\-form decomposition that quantifies whether modulation reshapes the modulator\-averaged baseline interaction, recruits private dimensions of one population, or opens new interactions\. In simulations, MICs reliably recover the presence and geometry of ground\-truth modulation even in the high\-dimensional, low\-sample regime\. Applying MICs to simultaneous calcium imaging of prefrontal axons and interneurons in the visual cortex revealed that behavioral state asymmetrically modulates top\-down interactions, reconfiguring the patterns of prefrontal projections that interact with a stable set of visual interneuron activity patterns\. By providing an efficient and compact characterization of modulatory interactions, MICs enable asking new questions about how potentially high\-dimensional variables shape interactions between neural populations\.

## Efficient Training of Deep Spiking Neural Networks with Input\-Driven Derivative\-Free Updates

**Authors:** Yongbo Zhang; Xinzhe Li; Katsuma Inoue; Mitsumasa Nakajima; Toshikazu Hashimoto; Yasuo Kuniyoshi; Kohei Nakajima

**ID:** 152821 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q8vwmOQdzh>) | [PDF](<https://openreview.net/pdf?id=Q8vwmOQdzh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152821>)

Spiking neural networks \(SNNs\) are a promising paradigm for efficient neuromorphic computing, yet their training remains challenging due to the non\-differentiability nature of spike firing\. Backpropagation through time \(BPTT\) with surrogate gradients \(SG\) has become a mainstream approach due to its superior performance\. However, this method incurs high computational and memory demands during training, while its update rule depends on specific neuronal dynamics\. Furthermore, when targeting neuromorphic hardware implementation, the temporal error\-propagation process and the full membrane\-potential access required by SG are difficult to realize; these can introduce additional readout overhead, measurement noise, or perturbations to the system dynamics\. To address these issues, we propose the input\-driven derivative\-free training \(IDDFT\) method\. Rather than relying on membrane\-potential\-based surrogate derivatives, IDDFT constructs derivative\-free error signals by applying a relaxed nonlinearity to the inputs, thereby avoiding the temporal error\-propagation process and reducing the dependence of the update rule on specific neuronal dynamics\. By eliminating access to internal membrane\-potential states, our method reduces computational and memory costs, enhances compatibility with neuromorphic hardware, and enables training of black\-box SNN models\. We validate the IDDFT method through theoretical analysis and systematic experiments, demonstrating its effectiveness as an input\-driven, derivative\-free mechanism for constructing update signals\. When integrated with a biologically inspired training strategy, IDDFT maintains comparable performance while substantially enhancing robustness to the choice of relaxed nonlinearities\. Based on the resulting bio\-inspired combined framework, we conduct evaluations on CIFAR\-10, CIFAR\-100, CIFAR10\-DVS, and Tiny\-ImageNet\. Experimental results demonstrate that our method achieves performance comparable to BPTT and state\-of\-the\-art methods, while exhibiting remarkable robustness under adversarial attacks\.

## Neural population tuning statistics as priors for multitask generalization

**Authors:** Zach Cohen; Jan Drugowitsch

**ID:** 153194 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N8F8d2c171>) | [PDF](<https://openreview.net/pdf?id=N8F8d2c171>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153194>)

Neural populations exhibit heterogeneous tuning: Neurons differ in their selectivity, gain, and in how their preferred inputs are distributed across stimulus or latent\-variable space\. While this heterogeneity has been studied extensively in the context of encoding precision, its implications for learning and generalization are less well\-understood\. Here, we develop a probabilistic theory that links a neural population's tuning statistics to its inductive bias: in large populations, the tuning statistics induce a kernel and, equivalently, a prior of a generative model over functions\. This prior in turn predicts the population's ability to  generalize across a distribution of related tasks\. Our theory determines the population tuning statistics that minimize the generalization error over a distribution of functions\. We further present a normative account of tuning adaptation inspired by our probabilistic approach, showing that tuning changes that maximize the marginal likelihood of observed data systematically reduce generalization error relative to non\-adapting populations\. Applied to the adaptation of hippocampal spatial representations in a reward learning task, we found that our theory could explain the over\-representation of rewarding locations through experience in an environment with a localized reward\. We further demonstrate how different components of the population's generative model differentially impact the speed and magnitude of tuning adaptation\. Overall, our work proposes a novel connection between tuning variability and a population's ability to learn and to generalize across tasks and develops a Bayesian theory of tuning adaptation in neural populations during learning\.

## MIRAGE: Adaptive Multimodal Gating for Whole\-Brain fMRI Encoding

**Authors:** Abdulkadir Gokce; Badr AlKhamissi; Martin Schrimpf

**ID:** 149712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o0Kim6sdzg>) | [PDF](<https://openreview.net/pdf?id=o0Kim6sdzg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149712>)

Recent progress in task\-optimized neural networks has established encoding models as a powerful tool for predicting brain responses to naturalistic stimuli, yet most existing approaches rely on unimodal representations\. The emergence of omni\-modal foundation models and rich multimodal neural datasets enables shared encoding models that jointly integrate visual, auditory, and linguistic information across subjects\. We introduce MIRAGE, a brain encoding framework that predicts whole\-brain fMRI responses to naturalistic audiovisual stimuli with paired transcripts\. MIRAGE extracts representations from a single pretrained omni\-modal backbone through three modality\-specific cross\-attention modules whose latent queries adaptively aggregate features across the backbone's 48 layers, and combines them through a transformer\-based brain encoder and a subject\-specific linear head over the cortical parcels\. On the Algonauts benchmark, MIRAGE achieves state\-of\-the\-art results on the out\-of\-distribution dataset\. Controlled comparisons show that native multimodal fusion \(features taken from a single jointly trained model\) consistently outperforms post\-hoc fusion of independently extracted unimodal streams, across architectural levels and backbones\. Beyond predictive accuracy, the learned attention weights are directly inspectable: each modality's gating module discovers a distinct depth profile over the backbone, and each modality traces a distinct, anatomically structured pattern across cortex\. Together, these results propose adaptive layer\-wise aggregation of natively multimodal features as a more generalizable, interpretable, and accurate approach for whole\-brain encoding\.

## Semantic\-Level Invariant Representation Learning for Cross\-Hospital Clinical EEG Modeling

**Authors:** Kang Yin; Hye\-Bin Shin; Seong\-Whan Lee

**ID:** 149980 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lkl8tlkLTW>) | [PDF](<https://openreview.net/pdf?id=lkl8tlkLTW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149980>)

Robust deployment of clinical electroencephalography \(EEG\) models requires source\-trained models to generalize to unseen hospitals without target\-domain calibration, hospital identifiers, or clinical reports at inference\. This is challenging because acquisition protocols, hardware, montages, and patient populations perturb low\-level EEG statistics, while clinical interpretation is organized around higher\-level semantic concepts\. We argue that this abstraction mismatch limits conventional signal\-level invariant learning: aligning feature distributions alone cannot distinguish clinically irrelevant variation from diagnostic content\. We propose Text\-Guided Invariant Learning \(TG\-IL\), a deployment\-oriented framework that uses clinician\-authored reports only during training as semantic anchors for EEG representation learning\. TG\-IL combines stochastic recording\-level aggregation, a variational semantic information bottleneck, and prototype\-guided EEG\-\-report alignment to preserve report\-derived clinical semantics while mitigating site\-specific nuisance variation\. At inference, all text\-side modules are discarded and the model operates solely on EEG\. On a three\-hospital clinical EEG benchmark, TG\-IL improves zero\-shot cross\-hospital generalization and worst\-case robustness while reducing hospital\-specific information in learned representations\.

## NeuroAtlas: Benchmarking Foundation Models for Clinical EEG and Brain\-Computer Interfaces

**Authors:** Konstantinos Kontras; Trui Osselaer; Stylianos G Mouslech; Angeliki I\. Karaiskou; Guido Gagliardi; Thomas Strypsteen; Mohammad Hossein Badiei; Anku Rani; Maarten Vanmarcke; Miguel Bhagubai; Chanakya Ekbote; Jaedong Hwang; Christos Chatzichristos; Paul Liang; Maarten De Vos

**ID:** 139374 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U8tvjJbW9U>) | [PDF](<https://openreview.net/pdf?id=U8tvjJbW9U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139374>)

Foundation models \(FMs\) promise to extract unified representations that generalize across downstream tasks\. They have emerged across fields, including electroencephalography \(EEG\), but it is less clear how effective they are in this particular field\. Published evaluations differ in datasets, in the EEG\-specific preprocessing that might influence reported results, and in the reported metrics, frequently obscuring the clinical relevance in EEG\.  We introduce NeuroAtlas, the largest EEG benchmark to date: 42 datasets and $\\sim$260k hours covering clinical EEG \(epilepsy, sleep medicine, brain age estimation\) and brain\-computer interfaces, and include multiple datasets per task along with bespoke clinical evaluation metrics\. Besides evaluating EEG\-FMs with respect to supervised baselines, we present results from generic time\-series FMs\. We report three findings\. First, EEG\-specific FMs do not consistently outperform time\-series FMs, which have neither EEG\-focused architectures nor been pretrained on EEG\. Second, standard machine learning metrics are insufficient to assess clinical utility: thus, we thoroughly evaluate more appropriate measures such as the quality of event\-level decision\-making, hypnogram\-derived features, and the brain\-age gap in the domains of epilepsy, sleep, and brain age, respectively\. Third, model rankings and performance can vary substantially within domains\. We conclude that pretrained models perform largely on par, with only narrow advantages for a few, and that current models do not yet deliver on the promise of an out\-of\-the\-box unified EEG model\. NeuroAtlas exposes this gap and provides the datasets and metrics for the next generation of unified EEG FMs\.

## What Does the Brain See? Multiview Neural Representation to Demystify the Brain\-Visual Alignment

**Authors:** Salini Yadav; Taveena Lotey; Pravendra Singh; Partha P Roy

**ID:** 151889 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XAST3OxsVy>) | [PDF](<https://openreview.net/pdf?id=XAST3OxsVy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151889>)

Zero\-shot visual decoding from electroencephalography \(EEG\) aims to infer visual semantics from non\-invasive neural recordings, but remains challenging due to the low signal\-to\-noise ratio, non\-stationarity, and limited spatial resolution of EEG\. Existing EEG–vision alignment methods often rely on holistic EEG embeddings, which can obscure the complementary temporal, spectral, and spatial structure underlying visual perception\. We introduce a unified multiview EEG representation learning framework for aligning brain responses with visual semantic embeddings\. Our method builds an EEG encoder that jointly models three complementary views: input\-conditioned state\-space temporal dynamics, learnable wavelet\-based spectral decomposition for sample\-adaptive frequency modeling, and attention\-modulated graph learning for structured electrode interactions\. The resulting multiview EEG embeddings are fused and aligned with pretrained visual representations in a shared semantic space using contrastive learning with EEG\-specific regularization, enabling 200\-way zero\-shot visual classification\. Experiments on THINGS\-EEG benchmark show that our method achieves state\-of\-the\-art performance, with 54\.8% Top\-1 and 85\.6% Top\-5 accuracy in the within\-subject setting and 15\.3% Top\-1 and 45\.4% Top\-5 accuracy in the cross\-subject setting\. We further present the first systematic cross session EEG–image decoding evaluation, achieving 40\.8% Top\-1 and 78\.0% Top\-5 accuracy\. These results suggest that explicitly modeling multiview neural structure improves both semantic alignment and generalization in EEG\-based visual decoding\.

## Process\-conditioned Pretraining with Topographic Spatial Retrieval for Large EEG Models

**Authors:** Yi Ding; Muyun Jiang; Weibang Jiang; Shuailei Zhang; XINLIANG ZHOU; Chenyu Liu; Shanglin Li; Yong Li; Cuntai Guan

**ID:** 148573 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrHWTrf4Uv>) | [PDF](<https://openreview.net/pdf?id=wrHWTrf4Uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148573>)

Large EEG foundation models are pretrained on heterogeneous corpora, but two challenges remain underexplored: \(1\) experimental protocols provide mental\-process cues that are rarely used in masked pretraining, and \(2\) electrode montages vary across datasets, making spatial representations montage\-dependent\.  Existing methods typically learn a single general\-purpose representation and model spatial structure implicitly, limiting their ability to exploit process\-related information under montage heterogeneity\.  We introduce BrainPro, a process\-conditioned self\-supervised pretraining framework that couples topographic spatial retrieval with shared and process\-associated representation learning\.  BrainPro maps dataset\-specific montages to a universal channel\-region template and retrieves channel\- and region\-level spatial filters to form a topographically aligned spatial basis\.  Over this basis, BrainPro learns a shared encoder for general EEG structure and additional affective, motor\-related, and auxiliary residual branches for process\-associated variation\.  Protocol\-derived mental\-process cues condition branch activation and region\-weighted masked reconstruction, incorporating topographic spatial priors and process information without using downstream class labels\.  Across nine public BCI benchmarks, BrainPro achieves strong performance among evaluated baselines\.  Ablations, channel\-drop analysis, encoder\-configuration studies, and spatial\-filter visualizations suggest that topographic spatial retrieval and process\-conditioned representation learning jointly improve EEG decoding\.

## Neural\-DISCO: Source\-Conditioned Counterfactual Editing of Neural Population Activity

**Authors:** Nico Policzer; James Ho; Joseph Soo; Xin Tang

**ID:** 151844 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XVvbIBWBgO>) | [PDF](<https://openreview.net/pdf?id=XVvbIBWBgO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151844>)

Understanding how neural activity encodes behavioral and sensory variables is a key challenge in systems neuroscience\. This requires models that go beyond predicting activity from labels and instead support source\-conditioned counterfactual editing: given a recorded source response, we should be able to edit one behavioral or stimulus variable and predict how neural activity would change while preserving other observed factors and source\-specific variability not explained by the labels\. Here, we introduce \*\*Neural\-DISCO\*\*, a disentangled representation learning framework for counterfactual modeling of neural activity\. Neural\-DISCO partitions the latent space into label\-specific components, each associated with an observed behavioral or stimulus variable, together with a residual latent that captures variability not supplied through observed labels\. Across simulated and real neural recording datasets, we show that this structure enables selective manipulation of individual labels to generate counterfactual neural responses while preserving the remaining content of the original activity\. Further, to gain insight into how behavioral and stimulus variables are encoded at single\-neuron resolution, we pair this disentangled framework with feature attribution methods that identify which neurons are most important for each label\. We find that disentanglement enhances the recovery of known functional cell roles in both synthetic and real data\. Together, these results support Neural\-DISCO as a framework for controlled counterfactual modeling of neural activity and provide a practical interface for probing how neural populations encode behavior and sensory information\.

## Accuracy of Noise Ceiling Estimators for Brain Scores

**Authors:** Aude Maier; Lucas Gruaz; Martin Schrimpf; Johanni Brea

**ID:** 154840 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AWvO8s9XuP>) | [PDF](<https://openreview.net/pdf?id=AWvO8s9XuP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154840>)

The internal activations of modern machine learning models align surprisingly well with the activities recorded in real brains\. In the last five years, the alignment between encoding models and brain activities, often called brain scores, has steadily increased\. Because brain recordings are noisy, there exists an upper bound to the brain scores that any model can achieve\. This bound, called the noise ceiling, is crucial for two reasons: it determines whether further improvements in model performance are possible, and it enables meaningful comparisons of brain scores across benchmarks\. The field has developed multiple approaches to estimate noise ceilings, but the statistical properties of existing estimators remain poorly understood, leaving it unclear in which experimental settings they provide reliable estimates\. Here, we introduce a unified mathematical framework for brain recordings, use it to derive closed\-form expressions for four commonly used noise ceiling estimators, and provide theoretical predictions for the behavior of each estimator\. We validate the theoretical predictions with simulations that we compare to noise ceiling estimates in existing fMRI datasets\. We find that the existing methods underestimate the true noise ceiling in many settings\. We conclude with recommendations for best practice in different situations\.

## Cephalonauts One: A deep fMRI dataset for decoding naturalistic speech in the human brain

**Authors:** Antoine Collas; Louis Jalouzot; Géraud Ilinca; Corentin Caris; Romain Valabregue; Ahmed Hassayoune; David Gonçalves; Madeleine Hueber; Thaddée Delebarre; Savatovsky Julien; Clara Fonteneau; Charles Maussion; Bertrand Thirion; Alexis Thual

**ID:** 139123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqqDfxmqO5>) | [PDF](<https://openreview.net/pdf?id=jqqDfxmqO5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139123>)

Cephalonauts One is a whole\-brain 3 Tesla \(3T\) functional magnetic resonance imaging \(fMRI\) dataset recorded while subjects listened to audio podcasts\. Three healthy subjects underwent multiple scanning sessions, each consisting of five 15\-minute runs, while listening to podcasts in their native language\. The current release contains 14, 20, and 17 hours of fMRI data per subject, respectively, making it one of the deepest per\-subject fMRI datasets with naturalistic speech stimuli available\. The dataset pairs brain activity with the corresponding podcast audio, transcript annotations, and derived stimulus embeddings\. Furthermore, we introduce a brain decoding benchmark formulated as audio segment retrieval: given fMRI activity from a held\-out session, the decoder must identify the corresponding time\-aligned podcast audio segment among candidate segments\. We provide standardized splits, evaluation metrics, and baseline decoders for this task\. Finally, a scaling analysis shows that decoding performance improves continuously with the amount of training data per subject\.      Data &amp; code: https://huggingface\.co/datasets/karavela/cephalonauts\_one

## What, Where, and Boundary: Hierarchical Cognitive Decomposition for Echocardiography Video Segmentation

**Authors:** Long Zheng; Zhi Li; Weidong Wang; Chenxi Zhu; Zhenyu Dai; Minyi Guo

**ID:** 151545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zpjtkfd60y>) | [PDF](<https://openreview.net/pdf?id=Zpjtkfd60y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151545>)

Segmenting the left ventricle in echocardiographic videos remains difficult because the target undergoes continuous deformation and rapid displacement across the cardiac cycle, while low tissue contrast further obscures its endocardial boundaries\. Expert echocardiographers navigate these challenges through a hierarchical cognitive workflow, sequentially addressing three fundamental questions:What is the target? Where is it now? Where does the boundary lie? Yet existing methods predict masks end\-to\-end from temporal features without explicitly modeling this cognitive process\. We propose Hierarchical Cognitive Decomposition \(HCD\), which decomposes the segmentation task into three stages that emulate this expert interpretation workflow\. To capture invariant target identity amid changing appearances, Static Identity Anchoring \(SIA\) anchors the first annotated frame as a semantic reference, enabling stable recognition across the cardiac cycle\. To maintain spatial focus despite inter\-frame motion, Adaptive Gaze Prior \(AGP\) converts the previous frame's prediction into a spatial attention prior that localizes the current target position\. To resolve boundary ambiguity under low tissue contrast, Structural Boundary Perception \(SBP\) extracts multi\-scale boundary cues within the localized region\. On the CAMUS and EchoNet\-Dynamic benchmarks, HCD achieves state\-of\-the\-art performance with only 1\.35M trainable parameters \(out of 35\.2M total\) at 68 FPS, demonstrating that explicitly encoding clinical cognitive priors into network design yields both effective and efficient segmentation\.

## Cognitive constraints and thalamocortical architecture explain systematic biases and neural signatures in human hierarchical decision\-making

**Authors:** Mien B Wang; Liu Mengxing; Kai Hwang; Michael Halassa

**ID:** 155926 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1lsYyvQ1i2>) | [PDF](<https://openreview.net/pdf?id=1lsYyvQ1i2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155926>)

Human cognition operates under capacity limitations, requiring computational adaptations for solving complex tasks\. Although such adaptations have been described algorithmically, their neural substrates and mechanistic implementations remain poorly understood\. Here, we study a hierarchical decision\-making task in which subjects must simultaneously infer latent rule changes and resolve sensory uncertainty\. By comparing human behavior with Bayesian observer models, we identify three systematic deviations: humans make decisions hierarchically, persist in the previous context after a context switch, and preferentially explore a new context within the same sensory modality\. We argue that these deviations are jointly explained by a cognitive\-constraint perspective in which hierarchical decisions are less cognitively demanding and switching context or modality incurs additional cost\. Incorporating these constraints substantially improves behavioral fits and reveals correlated subject\-level context and modality stickiness parameters, suggesting a shared underlying cost mechanism\. We then asked how neural representations support hierarchical decisions\. Because hierarchical decisions require selecting a latent context before choosing an action, context representations provide a natural substrate for reducing the effective decision space\. Neuroimaging data revealed that context information is represented in mediodorsal thalamus, consistent with a role for thalamus in task\-state compression\. Motivated by the context signal in thalamus, we trained a thalamocortical recurrent neural network in which a thalamic module and faster corticothalamic plasticity provided an inductive bias for task compression, while switch\-dependent working\-memory noise instantiated switching costs\. These constrained networks better matched human behaviorial bias than standard task\-optimized networks and reproduced key neural signatures observed in the data, including context encoding in mediodorsal thalamus and cue/rule representations in prefrontal cortex\. Together, these results suggest that structured biases in hierarchical decision\-making arise from cognitive constraints and identify thalamocortical dynamics as a candidate mechanism for efficient task\-state inference\.

## On Observation Time for Recovering Latent Hawkes Networks

**Authors:** Jonas Linkerhägner; Michele Bortolasi; Lorenzo Baldassari; Maarten V\. de Hoop; Ivan Dokmanić

**ID:** 148999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tZwHSbbaof>) | [PDF](<https://openreview.net/pdf?id=tZwHSbbaof>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148999>)

Dynamics of interacting systems in engineering, society, and nature often evolve over latent networks that govern which entities can interact\. We study the problem of inferring these networks from event\-based observations, which arise naturally in finance, seismology, and neuroscience\. While there is substantial algorithmic work addressing this important problem, theoretical results are scarce\. In this paper we ask the following fundamental question: what is the minimum time that one must observe the dynamics in order to exactly recover the underlying network, as a function of the number $d$ of interacting entities? For a class of stationary Hawkes processes with sparse, weak interactions, we prove that an observation time of order $\\log d$ is sufficient and necessary\. For the upper bound we construct a two\-stage estimator that uses clipped and binned event data for screening, followed by a least\-squares refinement, and apply concentration bounds derived from the Poisson cluster representation\. For the lower bound we combine Fano’s inequality with Jacod’s Girsanov formula for point processes on a suitable subclass of networks\.

## Neuro\-Inspired Inverse Learning for Planning and Control

**Authors:** Maryna Kapitonova; Tonio Ball

**ID:** 154231 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FF1dzX9agi>) | [PDF](<https://openreview.net/pdf?id=FF1dzX9agi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154231>)

We present a neuro\-inspired framework for embodied planning and control\. Building on three principles that enable fast and highly effective goal\-directed behavior in the mammalian brain — paired forward/inverse internal models, open\-loop multi\-step motor commands, and sequential organization of action — our \*Inverter\* framework combines analytic and trained components, the latter trained end\-to\-end through \*Inverse Learning\* \(IL\), a paradigm we formalize and delineate from supervised, reinforcement, and imitation learning\. IL bridges RL\-style amortization, which runs in a single forward pass but emits one action at a time, and optimal\-control\-style sequence reasoning, which plans whole trajectories but with iterative test\-time computation\. Single Inverters or hierarchical n=2 Inverter stacks match or improve over comparable offline\-RL and diffusion\-planner baselines on all 3 \`maze2d\-v1\` and 6 \`antmaze\-v2\` D4RL variants by an average of $\+24\.2\\%$ \(range $\-1\.9\\%$ to $\+78\.2\\%$\), at one\-to\-two orders of magnitude less inference compute\. As one mechanism behind this effectiveness, we show that Inverters can learn control policies closer to the analytic optimum than the data\-generating policy itself\. We also identify a failure mode of IL: forward\-model hacking under narrow training\-data coverage, which we mitigate by using \*random\* training data with broader coverage\. As an application example, a Pulse Inverter synthesizes arbitrary single\-qubit quantum gates with fidelity matching the standard iterative numerical baseline \(GRAPE\), at more than $1000\\times$ lower per\-gate compute\. We propose deeper hierarchical, probabilistic, and latent extensions of the Inverter framework as a differentiable world\-interface, especially for latency\- and compute\-critical embodied AI\.

## Meta\-Cognitive Memory Policy Optimization for Long\-Horizon LLM Agents

**Authors:** Ziyan Liu; Zhezheng Hao; Yeqiu Chen; Hong Wang; JingRen Hou; Ruiyi Ding; Yongkang Yang; Wence Ji; Wei Xia; Feng Liu

**ID:** 155887\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155887

[Paper](<https://openreview.net/forum?id=26CTl3jZo9>) | [PDF](<https://openreview.net/pdf?id=26CTl3jZo9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155887>)

_Abstract unavailable from the accessible public sources._

## RABBiT: Rapidly adaptive BOLD foundation model via brain\-tuning for accurate zero\-shot and few\-shot prediction of speech\-elicited responses in the brain

**Authors:** Omer Moussa; Mariya Toneva

**ID:** 148160\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148160

[Paper](<https://openreview.net/forum?id=zqBwrok09Z>) | [PDF](<https://openreview.net/pdf?id=zqBwrok09Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148160>)

Language understanding in the brain is context\-dependent, varying across experimental stimuli and individuals, which makes it difficult to build computational models that generalize across both\. This calls for a foundation model of language\-evoked brain activity that can capture shared structure while adapting efficiently to new participants and inputs\. We introduce RABBiT \(Rapidly Adaptive BOLD foundation model via BraIn\-Tuning\), a compact audio\-to\-fMRI encoder designed for accurate zero\- and few\-shot prediction\. A comprehensive evaluation on 324 participants across multiple unseen fMRI datasets shows that RABBiT enables accurate zero\-shot prediction of fMRI responses to natural speech across auditory and language\-selective regions, surpassing the SOTA foundation model for fMRI and predictions based on group averages\. With as little as 10 minutes of participant\-specific data, RABBiT further improves performance via parameter\-efficient tuning, substantially outperforming per\-participant linear models\. RABBiT's performance is driven by two key innovations: \(1\) learned region\-specific attention, and \(2\) a decomposition of brain responses into shared and subject\-specific components, combined with a brain\-tuned speech backbone\. In addition to supporting strong predictive accuracy, the structured, region\-specific representations that RABBiT learns enable interpretability\. By eliminating the need for extensive per\-participant data and model fitting, RABBiT enables scalable population\-level analyses of language in the human brain\.

## Paradoxical noise preference in RNNs

**Authors:** Noah Eckstein; Manoj Srinivasan

**ID:** 156748\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156748

[Paper](<https://openreview.net/pdf?id=gqxTZRzI35>) | [PDF](<https://openreview.net/pdf?id=gqxTZRzI35>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156748>)

In recurrent neural networks \(RNNs\) used to model biological neural networks, noise is typically introduced during training to emulate biological variability and regularize learning\. The expectation is that removing the noise at test time should preserve or improve performance\. Contrary to this intuition, we find that continuous\-time recurrent neural networks \(CTRNNs\) often perform best at a nonzero noise level, often approximately the same level used during training\. This noise preference typically arises when noise is injected inside the neural activation function; networks trained with noise injected outside the activation function perform best with zero noise\. The phenomenon arises robustly in diverse tasks for large enough training noise including function approximation, maze navigation, 2D path integration, and a multi\-task suite from cognitive neuroscience; we also show the phenomenon arising in feedforward neural networks, not just in RNNs\. Through analyses of simple function\-approximation and single\-neuron regulator tasks, we show that the phenomenon stems from noise\-induced shifts of fixed points \(stationary distributions\) in the underlying stochastic dynamics of the RNNs, thereby providing some  mechanistic interpretability of the phenomenon\. These fixed point shifts are noise\-level dependent and bias the network outputs when the noise is removed, degrading performance\. Analytical and numerical results show that the bias arises when neural states operate near activation\-function nonlinearities, where noise is asymmetrically attenuated, and that performance optimization incentivizes operation near these nonlinearities; such performance incentives exist for networks with noise inside the activation function, but not for networks with noise outside the activation function, explaining why only noise\-in networks show preference\.  Thus, networks can overfit to the stochastic training environment itself rather than just to the input–output data\.  The phenomenon is distinct from stochastic resonance, wherein nonzero noise enhances signal processing\. Our findings reveal that training noise can become an integral part of the computation learned by recurrent networks, with implications for understanding neural population dynamics and for the design of robust artificial RNNs\.

## Unifying Partner and Environment Diversity to Improve Human\-AI Coordination

**Authors:** Patrick Q Zhang; Yancheng Liang; Adrienne Fairhall; Natasha Jaques

**ID:** 151901\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151901

[Paper](<https://openreview.net/forum?id=X66IYOVa2D>) | [PDF](<https://openreview.net/pdf?id=X66IYOVa2D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151901>)

Real\-world applications of modern AI systems require generalization to both unseen environments and novel human users\. The field of zero\-shot coordination \(ZSC\) focused primarily on deploying AI to novel partners in otherwise familiar environments seen in the training\. The popular population\-based methods enable partner generalization by training the agent on a diversity of simulated human users \(serving as training\-time partners\) in a fixed environment, aiming to cover the diverse behaviors of novel human users\. Such a paradigm does not consider the more challenging realistic scenarios where both the users and the environment are unseen during training\. Recently, training across environments has been explored in training a single self\-play agent, which shows better generalization on both novel human users and unseen environments\. In this work, we ask whether jointly modeling partner diversity and environment diversity yields stronger coordination with novel partners in novel environments\. We introduce Cross Environment Co\-Play \(CECP\), a two\-stage framework that first trains a population of self\-play agents across a distribution of procedurally generated environments, and then trains a cooperator policy against this partner population\. To further couple social and environmental reasoning, we add a next\-state prediction module that encourages representations to encode both partner behavior and task structure, and validate the design choice with ablation studies\. We evaluate CECP on both a neuroscience\-inspired cooperative foraging task, and the population ZSC benchmark Overcooked, under held\-out partner and held\-out environment conditions\. CECP achieves the strongest performance among the compared baselines and attains state\-of\-the\-art results under our evaluation protocol for human\-AI collaboration\. We provide further analysis using the model's latent representation encoded by the next\-state prediction module, showing it can not only improve the performance of the cooperative AI, but also provide more interpretable latents, which demonstrate the inference of partner skill levels\.

## WASP: Weakly Aligned Spatiotemporal Pairs for Fetal Brain MRI\-Ultrasound Learning

**Authors:** Francesco Correnti; Gabriele Magrini; Marco Mistretta; Niccolò Biondi; Pietro Pala; Alessandro Ramalli; simona fiori; Andrew Bagdanov; Matteo Lenge

**ID:** 151594 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZOMRRwH1Md>) | [PDF](<https://openreview.net/pdf?id=ZOMRRwH1Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151594>)

Magnetic Resonance Imaging \(MRI\) is widely regarded as the optimal sensor for fetal brain analysis due to its superior soft tissue contrast and anatomical detail\. However, its high cost and operational burden make it invasive and difficult to obtain at scale\. Ultrasound \(US\), in contrast, is cheap, safe, and routinely acquired, and as a result it has produced substantially larger datasets and a growing ecosystem of pretrained models\. This asymmetry raises a natural question: Can we teach a US\-only model to understand fetal MRI from only a limited set of examples? The standard recipe, training a foundation model on subject\-to\-subject paired MRI\-US scans, is not viable since no such paired fetal dataset is publicly available\. In this paper we address this gap with Weakly Aligned Spatiotemporal Pairs \(WASP\), a framework that formulates cross\-modal correspondence as an entropic Optimal Transport problem driven by clinical metadata — in particular, Gestational Age \(GA\) and diagnostic planes — enabling the fitting of a lightweight alignment head that lifts MRI representations into the US latent space, without fine\-tuning the backbone\. Empirically, WASP yields its largest gains when MRI is unseen by the model during pretraining \(on USFM, GA estimation error drops from $21\.9$ to $16\.3$ days and standard plane classification accuracy climbs from 61\.9\\% to 74\.5\\%\), while still providing refining improvements for backbones pretrained on both modalities \(e\.g\., BioMedParse GA estimation error from $6\.5$ to $5\.6$ days and SAM\-Med2d plane accuracy from $83\.3$\\% to $88\.1$\\%\)\.

## Orthogonal Sparse Subgraph Alignment for Structure\-Function Coupling in Brain Networks

**Authors:** Haonan Gao; Daeyoung Ham; Yifei Zhang; Xinyuan Tian; Shengxian DING; Zhao; Tianxi Li

**ID:** 155965 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1VRjEYWcHX>) | [PDF](<https://openreview.net/pdf?id=1VRjEYWcHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155965>)

Characterizing the relationship between brain anatomical wiring and functional coordination remains a fundamental challenge in computational neuroscience\. This difficulty primarily arises because structure\-function coupling in the human brain is spatially heterogeneous, often localized to subnetworks, and inherently difficult to align across disparate representational modalities\. To address this methodological gap, we introduce $\\textbf\{O\}$rthogonal $\\textbf\{S\}$parse $\\textbf\{S\}$ubgraph $\\textbf\{A\}$lignment \($\\textbf\{Ossa\}$\), a principled and interpretable framework designed to identify compact structural cliques that exhibit maximal concordance with functional connectivity \(FC\) across subjects\. Within each FC\-derived community, $\\textbf\{Ossa\}$ optimizes an alignment objective over an orthogonal transformation, which absorbs coordinate mismatch between the two connectivity modalities, and a sparse node\-selection vector, which identifies the induced structural connectivity \(SC\) subgraph\. Furthermore, we establish theoretical properties for the $\\textbf\{Ossa\}$ estimator, demonstrating its statistical consistency in recovering the true underlying SC clique within each functional community\. Extensive empirical evaluations on simulated data, alongside analyses of the Adolescent Brain Cognitive Development \(ABCD\) baseline and longitudinal cohorts, demonstrate that $\\textbf\{Ossa\}$ successfully recovers aligned structural cliques under latent cross\-modal rotations\. Ultimately, the proposed methodology significantly improves out\-of\-sample SC\-FC alignment over size\-matched baselines and robustly identifies stable, single\-core topological structures within human brain networks\.

## Handwriting decoding as a challenging motor task for EEG Foundation Models

**Authors:** Srinivas Ravishankar; Ishayu Ghosh; Nora Zajzon; Teng \(Simon\) Fei; Virginia de Sa

**ID:** 139358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UmBkSWTw9t>) | [PDF](<https://openreview.net/pdf?id=UmBkSWTw9t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139358>)

Recent attempts at creating  Foundation Models \(FMs\) for Electroencephalography \(EEG\) have achieved state\-of\-the\-art performance on multiple tasks including Motor Imagery \(MI\)\. These MI tasks have typically involved coarse classification between imagined limb movements\. However, the development of foundation models necessitates diverse datasets, both for pretraining and evaluating the progress of these models\. In this work, we propose handwriting decoding as a challenging motor task for FMs\. We show that several existing datasets are affected by confounds, and introduce a dataset that more rigorously evaluates models\. On this dataset, we find that current FMs, despite showing SOTA performance in multiple MI datasets are outperformed by smaller task\-specific models\. We also highlight challenges specific to EEG\-based handwriting decoding to inform future work\. In our 4\-letter classification task, we show that  \(a\) Knowledge of movement\-onset is crucial to reported decoding performance in prior works, with average performance across subjects dropping from $41\.3\\%$ to $32\.4\\%$\. \(b\) Increasing test\-time signal quality provides significant performance improvements \($45\\%$ to $78\\%$ in our best subject\) compared to scaling training data with single\-trial EEG\.  \(c\) While scaling training data steadily improves decoding performance, existing FMs do not outperform specialist models in handwriting decoding\. We make our code and dataset available at https://anonymous\.4open\.science/r/EEG\-Handwriting\-BCI\-DFCD

## Mind the Parameters: Lightweight and Efficient Brain Visual Decoding with Shared Tensor Cores

**Authors:** Haodong Jing; Panqi Yang; Rongchao Zhang; Junhao Jia; Hoi Leong Lee; Zhipeng Liu; Yongqiang Ma; Nanning Zheng

**ID:** 154012 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gs4DaL9e6C>) | [PDF](<https://openreview.net/pdf?id=Gs4DaL9e6C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154012>)

Linking brain activity to computational representations of visual perception is a central goal at the intersection of neuroscience and machine learning\. However, cross\-subject decoding from fMRI remains challenging because neural responses vary substantially across individuals, while existing methods often rely on subject\-specific fine\-tuning or parameter\-heavy decoders\. This limits generalization to unseen subjects and hinders efficient deployment\. We propose BrainTC\-\-Brain Tensor Cores, a lightweight framework for cross\-subject brain visual decoding based on shared tensor decomposition\. BrainTC separates shared functional structure from subject\-specific variation through a shared tensor\-core alignment module that maps ROI\-wise responses into a common functional space with shared tensor bases and residual subject factors\. This supports both zero\-shot decoding for unseen subjects and few\-shot adaptation by updating only residual parameters\. We then develop a Brain Tensor\-Transformer with tensorized attention to compactly model inter\-ROI dependencies, together with a hierarchical neural\-to\-visual mapping module for multi\-level visual prediction\. Experiments show that BrainTC achieves competitive cross\-subject decoding performance with substantially improved parameter efficiency, particularly in zero\-shot generalization to unseen subjects\.

## EgoStream: A Diagnostic Benchmark for Streaming Episodic Memory in Egocentric Vision

**Authors:** Rosario Forte; Giuseppe Lando; Antonino Furnari

**ID:** 139373 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UDecnw8V7B>) | [PDF](<https://openreview.net/pdf?id=UDecnw8V7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139373>)

Continuous episodic memory is a core capability for autonomous agents operating in dynamic, real\-world environments, yet current streaming video benchmarks provide limited tools for diagnosing what models remember and for how long\. We introduce Egostream, a diagnostic benchmark for streaming episodic memory evaluation in egocentric vision\. \\egostream organizes 2,250 curated questions along seven cognitive dimensions: detail, spatial, temporal, event, social, causal, and prospective memory\. We introduce the Answer Validity Window \(AVW\), which specifies the temporal span an answer remains valid as the observed scene evolves\. This allows us to expand the questions into 8,528 recall\-conditioned evaluations, enabling controlled testing from instant to ultra\-long\-term recall while separating genuine model forgetting from natural world\-state changes\. We rigorously establish baseline performance through a unified streaming MLLM framework that compares several state\-of\-the\-art memory\-management mechanisms, covering sliding windows, attention sinks, KV\-cache pruning, merging, and offloading\.   Experiments within a unified Qwen3\-VL backbone reveal that comparable aggregate accuracies mask starkly different memory profiles\. For instance, token pruning preserves fine\-grained details and temporal structure significantly better than token merging, while quantized offloading rescues ultra\-long\-term recall\. Ultimately, all mechanisms operate well below real\-time \(&gt;1s per frame\), and top performing methods ceil at about 45\\% accuracy, exposing critical gaps in current architectures\. Egostream provides the diagnostic testbed needed to close these gaps\.

## FlatClip: Reusing Image Foundation Models for fMRI Representation Learning via Cortical Flatmaps

**Authors:** Mo WANG; Wenhao Ye; Zihan Ning; Jiayu Zuo; Junfeng XIA; Hongkai Wen; Quanying Liu

**ID:** 152015 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W9QQrE5T3h>) | [PDF](<https://openreview.net/pdf?id=W9QQrE5T3h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152015>)

_Abstract unavailable from the accessible public sources._

## A Hebbian Recurrent Neural Network Explains the Hierarchical Geometry of Sequence Memory

**Authors:** Zhitao FENG; Bo Ho; Huan Luo; xiaolong zou; Yuanyuan Mi

**ID:** 149363 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qb2jbK0rwi>) | [PDF](<https://openreview.net/pdf?id=qb2jbK0rwi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149363>)

Temporal sequences in working memory are hierarchically organized to support flexible behavior\. Recent neural recordings suggest that this organization relies on a 1D\-to\-2D neural geometrical folding in working memory, whereby ordinal positions are re\-encoded within an orthogonal scaffold, with two dimensions indexing global \(chunk\-level rank\) and local ranks \(within\-chunk position\), respectively\. This findings implicate an important structural  principle for memory, yet the computational mechanisms underlying this geometry remain unclear\. Here, we study this question using a recurrent neural network with fast Hebbian plasticity \(Hebb\-RNN\)\. When meta\-trained on rank recalling tasks, the Hebb\-RNN generalizes to novel item–rank bindings and hierarchical sequences, outperforming control models\. Mechanistic analysis reveals that the network develops an orthogonal ordinal geometry consistent with empirical findings\. This geometry transforms temporal inputs into abstract ordinal ranks that provide a memory scaffold, while Hebbian plasticity supports rapid conjunctive binding of item content to this structure\. Furthermore, the pre\-learned geometric scaffold significantly accelerates learning in novel tasks, supporting efficient transfer\. By incorporating a predictive module, our model extends to real\-world encodings and acquires hierarchical geometry without explicit chunking signals\. Together, our results provide a biologically plausible framework for hierarchical sequence representation, offering new insights into structured memory organization for both neuroscience and machine learning\.

## Beyond Task Success: Probing Cognitive Primitives in Web Agents

**Authors:** Xunjian Yin; Tianchen Guan; Jinao Wang; Weili Cao; Royce Cheng\-Yue; Daisy Lin; Keagan Long; Kyle Wong; Bhuwan Dhingra; XJ Wang; Shuyan Zhou

**ID:** 139465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O8gCSB4In6>) | [PDF](<https://openreview.net/pdf?id=O8gCSB4In6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139465>)

Cognitive primitives such as planning, exploration, and backtracking are widely regarded as core to competent web agents\. Yet existing studies are largely retrospective: agents are evaluated on domain\-based tasks, and trajectories are inspected post hoc for evidence of these behaviors\. Because such tasks are not designed to require specific primitives, observed behaviors do not reliably reflect true capability demands\. This raises a key question: Can we design realistic tasks where success provably depends on a chosen cognitive primitive? WEBSTRESS addresses this by casting capability evaluation as a controlled comparison\. For each task, we construct a paired variant in which a target capability becomes necessary \(e\.g\., transforming a direct path into an obstructed one requiring exploration\)\. The performance gap between the pair measures the agent’s reliance on that capability\. Across seven environments and seven capabilities, this yields 519 paired tasks\. Evaluating six frontier agents reveals consistent weaknesses: all suffer 18\-28\\% drops on capability\-demanding variants, with 75\\% of failures being belief failures, where agents incorrectly declare success\. In contrast, humans exhibit only a 5\.7\\% performance drop under the same paired evaluation\. These results highlight that, despite strong overall performance, substantial gaps remain between human and agent cognitive behavior, and that our approach provides a principled way to measure them\.

## Joint EM Image Super\-Resolution and Segmentation with Semantic and Structural Priors

**Authors:** Jiateng Shou; Haoyuan Shi; Zhiwei Xiong

**ID:** 155136 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=86N6qX7ddm>) | [PDF](<https://openreview.net/pdf?id=86N6qX7ddm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155136>)

Reconstructing the connectome of the brain is a central goal of modern neuroscience, but the required electron microscopy \(EM\) imaging is extremely time\-consuming\. EM image super\-resolution \(SR\) accelerates this acquisition for downstream neuron segmentation, yet existing methods do not adequately couple SR with segmentation for EM: SR lacks segmentation guidance, and segmentation cannot adapt to super\-resolved features\. In this work, we propose a joint SR and segmentation framework specifically designed for EM images\. In the super\-resolution part, we introduce segmentation as an auxiliary task via a shared encoder with task\-specific decoders to provide a semantic prior, improving reconstruction fidelity\. In the segmentation part, we introduce a lightweight partial diffusion model that initializes denoising from a partially noised SR embedding, producing a structural prior that closely approximates real HR features and enhances segmentation accuracy on super\-resolved EM images\. Extensive experiments across multiple datasets and degradation settings demonstrate the superior performance of our framework\.

## BrainVista: Modeling Naturalistic Brain Dynamics as Multimodal Next\-Token Prediction

**Authors:** Xuanhua Yin; Ted Zhao; Lina Yao; Weidong Cai

**ID:** 153166 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NNRWeXb2aF>) | [PDF](<https://openreview.net/pdf?id=NNRWeXb2aF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153166>)

_Abstract unavailable from the accessible public sources._

## FAST\-Brain: A Flow\-Aligned Spatio\-Temporal Surrogate Brain Model

**Authors:** Shucheng Liu; Chengchun Shi; Kai Zhang; Hongtu Zhu

**ID:** 149330 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qu1GlOKsSN>) | [PDF](<https://openreview.net/pdf?id=qu1GlOKsSN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149330>)

Modeling resting\-state functional magnetic resonance imaging \(rs\-fMRI\) data is crucial for understanding brain\-wide neural activity\. However, traditional methods struggle to capture complex temporal dynamics over long horizons, to account for the brain's anatomical spatial structure, and to model high\-dimensional ambient signals that lie on a low\-dimensional intrinsic subspace\. We propose FAST\-Brain, a unified flow\-aligned spatio\-temporal surrogate brain model that addresses all three challenges\. At its core is a flow\-aligned generative framework that directly predicts the clean blood\-oxygen\-level\-dependent \(BOLD\) signal, paired with a graph convolutional network that captures spatial structural constraints and a Transformer that models long\-range temporal dependencies\. Theoretically, we show that under a low\-dimensional subspace assumption,  the approximation error of our model scales with the intrinsic dimension rather than the ambient dimension, which justifies our direct modeling of the BOLD signal\. Extensive experiments on synthetic and Human Connectome Project datasets demonstrate that FAST\-Brain achieves state\-of\-the\-art performance in recovering functional connectivity, effective connectivity, and the implicit low\-dimensional signal subspace\.

## CutAttn: Discovering Cognitive Transition Layers for Efficient Long\-Context Prefilling

**Authors:** Wentao Liu; Xiabao Wu; Yongchao Liu; Haitao Zhang; Jiajun Zheng; Ruiting Zhou

**ID:** 148257 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zCmAsPM9EI>) | [PDF](<https://openreview.net/pdf?id=zCmAsPM9EI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148257>)

Long\-context LLM inference is fundamentally a retrieval process, transitioning from diffuse to sharply focused attention at a few architecture\-determined \(CTLs\)\.  Existing acceleration methods leave significant costs unaddressed: sparse attention ignores FFNs, KV cache compression neglects prefill, and hidden\-state pruning relies on fixed, heuristic rules\.  We introduce CutAttn, a training\-free framework that exploits CTLs via inter\-layer Jensen\-\-Shannon divergence, pruning redundant context at chunk granularity while dynamically gated by a normalized\-entropy criterion\.  Operating at the hidden\-state level, CutAttn reduces both attention and FFN costs, composing orthogonally with existing acceleration techniques\.  Evaluated on RULER, InfiniteBench, and LongBench, CutAttn preserves full\-attention accuracy while achieving up to a $2\.02\\times$ prefill speedup on 128K sequences \(and $2\.81\\times$ when composed with sparse attention\)\. Furthermore, our theoretical analysis provides approximation bounds, an entropy\-compression limit justifying the gating, and a closed\-form speedup ratio\.

## Peer Review of Applied Machine Learning Papers Must Include Code Execution

**Authors:** Lisa\-Marie Vortmann

**ID:** 140067 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S58vxHCoNU>) | [PDF](<https://openreview.net/pdf?id=S58vxHCoNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140067>)

This position paper argues that peer review of applied machine learning papers must include the execution and verification of submitted code\. Reproducibility failures in ML are widespread, with documented cases spanning at least 17 scientific fields and hundreds of published studies\. The current review system relies on a combination of voluntary code submission and self\-reported checklists, leading to necessary post\-publication correction and many wasted research hours\. I support this argument with two case studies drawn from the EEG\-based brain\-computer interface literature, one in which the published claim is physically implausible and one in which available code runs cleanly but does not reproduce the reported numbers\. I propose a structural change: a dedicated reproducibility reviewer with access to a containerized submission pipeline, applied uniformly to papers making empirical claims on real data\.

## AI Agents Push Humans Out of the Loop

**Authors:** Margaret Mitchell; Avijit Ghosh; Samir Passi

**ID:** 140100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cx5Oy2il67>) | [PDF](<https://openreview.net/pdf?id=Cx5Oy2il67>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140100>)

AI agents pose significant risks as they are granted increasing autonomy\. A commonly proposed solution is human oversight and keeping a \`\`human in the loop”, but this is not a simple solution: Not only do current approaches to AI agent design impede effective human oversight, but the cognitive capacities required for it are also themselves degraded by extended use of AI systems\. This position paper argues that \*\*current approaches to the development and deployment of AI agent systems do not support effective human oversight \-\- they contribute to its degradation\*\*\. To address this, a top priority in the advancement of AI agents should be supporting the situated goals and cognitive requirements of effective human oversight, treating the human needs of overseers at the same level of importance as AI agent capability\. To put this idea into practice, we connect work on automation and human\-computer interaction to AI agent processes, outlining design\-level affordances and organizational protocols that \(1\) support overseers in exercising critical judgement and \(2\) counteract the skill atrophy that arises from extended use of automation\. We urge developers and deployers to adopt these or similar approaches\. Without explicit support for the cognitive demands of effective human\-agent interaction, AI agent systems will continue to passively incentivize

## Echo learning enables biologically plausible temporal credit assignment

**Authors:** Alice S\. Dauphin; Guillaume Pourcel

**ID:** 155692 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3ew4yPTGyN>) | [PDF](<https://openreview.net/pdf?id=3ew4yPTGyN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155692>)

Biologically plausible learning requires temporal credit assignment without backpropagation through time \(BPTT\)\. Hamiltonian Echo Learning \(HEL\) achieves this by running a neural system twice \-\-\- an \\emph\{inference\} phase then a time\-reversed \\emph\{echo\} phase \-\-\- recovering exact BPTT gradients\. We identify spatio\-temporal sum\-separability of the Hamiltonian as the structural condition making HEL's learning rule both spatially and temporally local, and exploit it to extend HEL beyond diagonal recurrences: a Hopfield\-inspired oscillatory RNN with dense recurrent connectivity yields a contrastive Hebbian rule with constant memory and only two forward passes\. This rule matches full BPTT and outperforms e\-prop and truncated BPTT on time\-series classification and regression\. We then relax HEL's Hamiltonian\-reversibility constraint \-\-\- which forces unbiological connectivity and activation patterns \-\-\- and derive \\emph\{Echo Learning\} \(EL\), exact for arbitrary smooth dynamics whenever the network is reversible and self\-adjoint with respect to a readout involution\. Both conditions are enforced by a spatio\-temporally local homeostatic loss, recovering near\-BPTT gradient quality without architectural constraints\.

## Rethink Action Chunking in VLA Through Human Motor Control

**Authors:** Wenxi Chen; Yuejiang Liu; Zijian He; Shaoshuai Mou; Yan Gu

**ID:** 140113 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5qqjBkZMmL>) | [PDF](<https://openreview.net/pdf?id=5qqjBkZMmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140113>)

Action chunking is widely used in recent vision–language–action \(VLA\) systems to mitigate inference latency and improve temporal consistency\. Yet, open\-loop execution can reduce reactivity and precision, and cross\-chunk coherence remains difficult to guarantee\. We revisit action chunking through its neurobiological origins and organize current shortcomings around three axes: VLA architecture, representations of sequential actions, and mechanisms for sampling and executing chunks\. A case study further illustrates the coherence–reactivity trade\-off across representative sampling and execution choices\. Building on these observations, we outline brain\-inspired directions to improve the reactivity, coherence, and safety of chunking\-based VLAs in dynamic and complex tasks beyond quasi\-static tabletop manipulation\. This position paper aims to broaden how the community thinks about action chunking and to motivate redesigns better aligned with future physical intelligence\.

## DEFT: Disentanglement\-Enhanced Fine\-Tuning for EEG Foundation Models

**Authors:** Yuqiu Deng; Muyun Jiang; Zongpeng Zhang; Mingqing Xiao; Yansen Wang; Peiliang Gong; XINLIANG ZHOU; Yi Ding; Ziyu Jia; Cuntai Guan; Chenyu Liu

**ID:** 149268 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=raum5BFSpu>) | [PDF](<https://openreview.net/pdf?id=raum5BFSpu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149268>)

EEG foundation models \(EFMs\) have improved EEG representation learning by transferring knowledge from large\-scale multi\-subject pretraining to downstream tasks\. However, their pretrained embeddings often retain substantial subject\-related variation, placing an additional burden on the downstream classifier, especially in cross\-subject settings\. To address this issue, we propose DISENTANGLED EFM FINE\-TUNING \(DEFT\), a plug\-and\-play adapter for EFM fine\-tuning\. DEFT encourages branch disentanglement of pretrained tokens into task\-oriented content and subject\-consistent style, then performs downstream prediction from the content branch\. It instantiates this factorize\-before\-classify design with recursive Gaussian refinement, temporal\-variance regularization, subject\-aware contrastive learning, and reconstruction\. Experiments across multiple EEG datasets and four EFM backbones show that DEFT improves matched fine\-tuning baselines\. Further ablations and analyses support the intended content/style branch organization\.

## Rest\-Tuning: Data\-Efficient Adaptation of EEG Foundation Models to Individuals via Resting\-State Signals

**Authors:** Yinuo Zhang; Xinyu Fu; Qing Wang; Yinte Zhang; Junjie Yu; Kexin Lou; Quanying Liu

**ID:** 153812 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWqyUkyULe>) | [PDF](<https://openreview.net/pdf?id=IWqyUkyULe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153812>)

EEG foundation models \(FMs\) offer strong population\-level priors but degrade on individual subjects due to anatomy\-driven distribution shifts\. We propose Rest\-Tuning, a task\-agnostic calibration framework that personalizes a population FM using just 1–3 minutes of unlabeled resting\-state EEG\. Rest\-Tuning employs masked teacher\-student alignment to produce a subject\-calibrated backbone, reused as initialization across multiple tasks from the same subject\. Across two multi\-subject datasets and four EEG FMs, Rest\-Tuning outperforms task\-only adaptation, with up to 13\.3% absolute gain in downstream task accuracy and over 40% average reduction in labeled task data\. Calibration saturates quickly and requires under 3 minutes of compute per subject\. Representation analyses show reduced subject\-to\-population distance and smoother LoRA adapter interpolation paths, indicating improved compatibility between rest\- and task\-adapted solutions\. These results establish resting\-state EEG as a practical, fast, and reusable calibration interface, enabling population EEG FMs to function as reliable, subject\-specific BCIs and serve as reusable initialization for downstream task adaptation\.

## Multimodal Foundation Agents Should Use Brain Data as Privileged Supervision

**Authors:** Richard Csaky

**ID:** 140083\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140083

[Paper](<https://openreview.net/forum?id=JK1yUpvQxe>) | [PDF](<https://openreview.net/pdf?id=JK1yUpvQxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140083>)

This position paper argues that multimodal foundation models should use brain recordings as privileged internal\-state supervision during training\. External behavior alone leaves human\-like cognition, robustness, and reasoning weakly constrained\. Neural recordings can serve as a training\-time modality that shapes representations, latent\-state dynamics, private computation policies such as reasoning tokens, and robustness before distillation into agents that operate from ordinary sensory, language, and action streams\. We develop this position through Foundational Human Modeling \(FHM\), a program centered on scaling generative brain models, aligning heterogeneous neural modalities through shared latent geometry, inserting brain tokens into unified multimodal token streams, and testing whether the privileged channel improves distilled agents after removal\. The argument is grounded in privileged\-information theory and prior work showing that neural or human\-derived targets can improve robustness, semantic transfer, data efficiency, and behavioral similarity after auxiliary signals are removed\.

## Decomposing the modulation of interactions between neuronal populations

**Authors:** Marco Celotto; J\. S Sooter; Sofie Ährlund\-Richter; Kyle R Jenks; Mriganka Sur; Stefano Panzeri

**ID:** 152282\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152282

[Paper](<https://openreview.net/forum?id=UFTQ6XUIb3>) | [PDF](<https://openreview.net/pdf?id=UFTQ6XUIb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152282>)

Identifying subpopulations of neurons that interact with each other from simultaneous recordings of populations of many neurons is key for understanding across\-brain communication with cellular resolution\. Recent work identified communication subspaces, which capture additive interactions between pairs of high\-dimensional neural populations through a small number of source and target activity patterns\. However, no current method captures how a third, potentially multivariate variable \- such as behavioral state or the activity of a third population \- modulates these interactions\. Here we extend the communication subspace framework by parameterizing modulation as a low\-rank tensor\. This identifies multiplicative interaction channels \(MICs\), defined as triplets of source, target, and modulator activity patterns, in which the modulator pattern gates the source\-target interaction\. We derive MICs as a bilinear perturbation of reduced\-rank regression\. We develop a hierarchical fitting pipeline and provide a closed\-form decomposition that quantifies whether modulation reshapes the modulator\-averaged baseline interaction, recruits private dimensions of one population, or opens new interactions\. In simulations, MICs reliably recover the presence and geometry of ground\-truth modulation even in the high\-dimensional, low\-sample regime\. Applying MICs to simultaneous calcium imaging of prefrontal axons and interneurons in the visual cortex revealed that behavioral state asymmetrically modulates top\-down interactions, reconfiguring the patterns of prefrontal projections that interact with a stable set of visual interneuron activity patterns\. By providing an efficient and compact characterization of modulatory interactions, MICs enable asking new questions about how potentially high\-dimensional variables shape interactions between neural populations\.

## Efficient Training of Deep Spiking Neural Networks with Input\-Driven Derivative\-Free Updates

**Authors:** Yongbo Zhang; Xinzhe Li; Katsuma Inoue; Mitsumasa Nakajima; Toshikazu Hashimoto; Yasuo Kuniyoshi; Kohei Nakajima

**ID:** 152821\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152821

[Paper](<https://openreview.net/forum?id=Q8vwmOQdzh>) | [PDF](<https://openreview.net/pdf?id=Q8vwmOQdzh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152821>)

Spiking neural networks \(SNNs\) are a promising paradigm for efficient neuromorphic computing, yet their training remains challenging due to the non\-differentiability nature of spike firing\. Backpropagation through time \(BPTT\) with surrogate gradients \(SG\) has become a mainstream approach due to its superior performance\. However, this method incurs high computational and memory demands during training, while its update rule depends on specific neuronal dynamics\. Furthermore, when targeting neuromorphic hardware implementation, the temporal error\-propagation process and the full membrane\-potential access required by SG are difficult to realize; these can introduce additional readout overhead, measurement noise, or perturbations to the system dynamics\. To address these issues, we propose the input\-driven derivative\-free training \(IDDFT\) method\. Rather than relying on membrane\-potential\-based surrogate derivatives, IDDFT constructs derivative\-free error signals by applying a relaxed nonlinearity to the inputs, thereby avoiding the temporal error\-propagation process and reducing the dependence of the update rule on specific neuronal dynamics\. By eliminating access to internal membrane\-potential states, our method reduces computational and memory costs, enhances compatibility with neuromorphic hardware, and enables training of black\-box SNN models\. We validate the IDDFT method through theoretical analysis and systematic experiments, demonstrating its effectiveness as an input\-driven, derivative\-free mechanism for constructing update signals\. When integrated with a biologically inspired training strategy, IDDFT maintains comparable performance while substantially enhancing robustness to the choice of relaxed nonlinearities\. Based on the resulting bio\-inspired combined framework, we conduct evaluations on CIFAR\-10, CIFAR\-100, CIFAR10\-DVS, and Tiny\-ImageNet\. Experimental results demonstrate that our method achieves performance comparable to BPTT and state\-of\-the\-art methods, while exhibiting remarkable robustness under adversarial attacks\.

## Neural population tuning statistics as priors for multitask generalization

**Authors:** Zach Cohen; Jan Drugowitsch

**ID:** 153194\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153194

[Paper](<https://openreview.net/forum?id=N8F8d2c171>) | [PDF](<https://openreview.net/pdf?id=N8F8d2c171>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153194>)

Neural populations exhibit heterogeneous tuning: Neurons differ in their selectivity, gain, and in how their preferred inputs are distributed across stimulus or latent\-variable space\. While this heterogeneity has been studied extensively in the context of encoding precision, its implications for learning and generalization are less well\-understood\. Here, we develop a probabilistic theory that links a neural population's tuning statistics to its inductive bias: in large populations, the tuning statistics induce a kernel and, equivalently, a prior of a generative model over functions\. This prior in turn predicts the population's ability to  generalize across a distribution of related tasks\. Our theory determines the population tuning statistics that minimize the generalization error over a distribution of functions\. We further present a normative account of tuning adaptation inspired by our probabilistic approach, showing that tuning changes that maximize the marginal likelihood of observed data systematically reduce generalization error relative to non\-adapting populations\. Applied to the adaptation of hippocampal spatial representations in a reward learning task, we found that our theory could explain the over\-representation of rewarding locations through experience in an environment with a localized reward\. We further demonstrate how different components of the population's generative model differentially impact the speed and magnitude of tuning adaptation\. Overall, our work proposes a novel connection between tuning variability and a population's ability to learn and to generalize across tasks and develops a Bayesian theory of tuning adaptation in neural populations during learning\.

## MENDR: Manifold\-Embedded Neural Data Representations for Channel\-Agnostic EEG Foundation Modeling

**Authors:** Micky C Nnamdi; Matthew Chen; Benoit Marteau; Shaun Q\. Y\. Tan; J\. Ben Tamo; May Dongmei Wang

**ID:** 149502 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pf1CbF5JeQ>) | [PDF](<https://openreview.net/pdf?id=pf1CbF5JeQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149502>)

_Abstract unavailable from the accessible public sources._

## Scaling Neural Motor Decoding via Decoupled Behavioral Pretraining

**Authors:** Divyansha \.; Vinam Arora; Shivashriganesh P\. Mahato; Alexandre Andre; Eva L Dyer

**ID:** 153888 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I0HCQLIKMJ>) | [PDF](<https://openreview.net/pdf?id=I0HCQLIKMJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153888>)

Recent neural decoding approaches achieve strong performance by training on large collections of paired neural\-behavioral recordings, but such datasets are expensive, invasive, and difficult to scale\. In contrast, behavioral data is abundant and easy to collect, raising the question of whether neural decoding can benefit from decoupling behavioral and neural representation learning\. We introduce BeeMO, a flexible multi\-session framework that enables training with arbitrary mixtures of paired neural\-behavioral recordings and unpaired behavioral data\. A behavior decoder learns movement dynamics directly from behavioral trajectories, while neural activity is incorporated through cross\-attention layers when available, allowing behavioral and neural supervision to scale independently\.  By decoupling neural and behavioral data, we unlock a new dimension for scaling: unpaired behavioral data, which is substantially cheaper and easier to collect than paired neural recordings, can be used directly to improve decoding performance\. Across multiple intracortical motor datasets and tasks in nonhuman primates, we show that incorporating unpaired behavioral data consistently improves decoding performance, particularly, and that incorporating task\-aligned behavioral trajectories can further improve transfer\. We further show that behavior\-only pretraining, without any neural pretraining, outperforms single\-session supervised baselines and is comparable to models pretrained on substantially larger neural datasets\. Together, our results suggest that scaling behavioral data offers a practical and cost\-effective path toward neural decoding models that generalizes across subjects and tasks\.

## Learning Reveals Invisible Structure in Low\-Rank RNNs

**Authors:** Yoav Ger; Omri Barak

**ID:** 152289 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UB2Xsj6ZZA>) | [PDF](<https://openreview.net/pdf?id=UB2Xsj6ZZA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152289>)

Learning in neural systems arises from synaptic changes that reshape the representations underlying behavior\. While low\-rank recurrent neural networks \(RNNs\) have emerged as a powerful framework for linking connectivity to function, a theoretical understanding of their learning process remains elusive\. Here, we extend the low\-rank framework from activity to learning by deriving gradient\-descent dynamics directly in a reduced overlap space\. We formulate a closed\-form, low\-dimensional system of ODEs that governs learning in this space, exact for linear RNNs and asymptotically exact for nonlinear RNNs in the large\-$N$ Gaussian limit\. Central to our analysis is a distinction between two classes of overlaps: \_loss\-visible\_ overlaps, which fully determine network activity, output, and loss, and \_loss\-invisible\_ overlaps, which do not affect function but are required to describe learning\. We illustrate the consequences of this decomposition through two phenomena\. First, we show that learning can serve as a perturbation that exposes differences in connectivity between functionally equivalent networks\. Second, we show that loss\-invisible overlaps can act as memory variables that encode training history, and characterize the conditions under which this occurs\. Finally, we present several testable predictions for biological learning experiments derived from our theory\.

## NeuroHorizon: Long\-Horizon Forward Prediction of Neural Population Activity via Autoregressive Decoding with Hierarchical Memory

**Authors:** Peng Jiang; Xiaoxuan Jia

**ID:** 154599 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=COuiDiirTQ>) | [PDF](<https://openreview.net/pdf?id=COuiDiirTQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154599>)

_Abstract unavailable from the accessible public sources._

## Neural‑Visual Decoding via Cognitive‑guided Adaptive Blurring and Information‑Constrained Alignment

**Authors:** Fan Yin; Chuhang Zheng; Peiliang Gong; Donghai Guan; Qi Zhu

**ID:** 154463 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DP5UdHKCti>) | [PDF](<https://openreview.net/pdf?id=DP5UdHKCti>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154463>)

_Abstract unavailable from the accessible public sources._

## Human\-Inspired, Task\-Dimension\-Guided Exploration for Efficient Learning and Transfer in High Dimensions

**Authors:** Fanyu Zhu; Jiahui An; Ni Ji

**ID:** 150298 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jBYBXwoZOr>) | [PDF](<https://openreview.net/pdf?id=jBYBXwoZOr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150298>)

_Abstract unavailable from the accessible public sources._

## Fine\-Tuning Language Models to Know What They Know

**Authors:** Sangjun Park; Elliot Meyerson; Xin Qiu; Risto Miikkulainen

**ID:** 149889 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTpoDbfFvY>) | [PDF](<https://openreview.net/pdf?id=mTpoDbfFvY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149889>)

_Abstract unavailable from the accessible public sources._

## Cortically\-Resolved Recurrent Architecture for fMRI

**Authors:** DA WOON HEO; Kwanseok Oh; Adrián Ayuso\-Muñoz; Heung\-Il Suk

**ID:** 152414 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TIdiRMJ2QV>) | [PDF](<https://openreview.net/pdf?id=TIdiRMJ2QV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152414>)

Decoding cognitive functions and brain diseases from functional magnetic resonance imaging \(fMRI\) is a foundational problem in neuroscience advanced by recent deep learning across task and resting\-state \(rs\) settings\. Existing region\-level decoders capture spatial structure through region\-of\-interest \(ROI\)\-aware graph or Transformer architectures, but apply a uniform temporal operator across all regions\. Consequently, they do not explicitly model how cortical regions integrate information over heterogeneous timescales\. We propose CoRTeX, a region\-resolved recurrent architecture for fMRI in which each cortical region carries its own learnable parameters and evolves on its own learned timescale\. At its core, per\-region differentiable temporal integration windows allow each ROI to learn how far back in time to integrate information through a soft mask over a private buffer\. Cross\-region information is restricted to a single identity\-aware attention channel, additionally biased by a co\-activation\-driven memory whose learning and forgetting rates are themselves region\-specific\. Experiments on stimulus classification using task\-fMRI \(NSD\) and on two disease diagnosis tasks using rs\-fMRI \(ABIDE, COBRE\) demonstrate that CoRTeX achieves competitive performance with strong baselines while enabling region\-level analyses that are not well\-defined for models with exchangeable units: the learned per\-region timescales exhibit interpretable spatial organization, and class\-specific regional attribution aligns with category\-selective cortex\. Code is available at: https://anonymous\.4open\.science/r/CoRTeX\-F\.

## CASL\-VAE: Learning Structured Latent Variables from Unpaired Data for Semi\-supervised Clustering and Paired Sample Generation

**Authors:** Sai Spandana Chintapalli; Pratik Chaudhari; Christos Davatzikos

**ID:** 150313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j3bc77a6Gn>) | [PDF](<https://openreview.net/pdf?id=j3bc77a6Gn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150313>)

Quantifying variability in a target population relative to a reference population is central to many scientific and clinical problems \(e\.g\., diseased vs\. healthy\)\. Yet, without paired data and in the presence of heterogeneous target variation, existing methods struggle to separate multiple modes of target\-specific variation\. We propose CASL\-VAE, a deep contrastive latent variable model that learns structured latent generative factors from unpaired data\. CASL\-VAE factorizes variation into continuous common latent factors shared across populations and  hierarchical salient latent factors that model target\-specific heterogeneity as discrete subtypes and continuous within\-subtype variation\. Using variational inference, we show how approximate joint likelihood optimization over reference and target domains can be performed using unpaired data, providing a principled basis for paired\-sample generation and cross\-domain analysis\. We validate CASL\-VAE on semi\-synthetic neuroimaging data, demonstrating improved subtype recovery  and paired\-sample generation compared to baseline clustering and generative models\. We also validate its ability to reveal biologically plausible heterogeneity in Alzheimer's disease\. Code will be released upon acceptance\.

## Learning Actionable Information Landscapes for Multimodal Active Sensing in Hawkmoths

**Authors:** Abdo Sharafeldin; Yaqing Wang; Simon Sponberg; Hannah Choi

**ID:** 155592 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4RHseRnmZo>) | [PDF](<https://openreview.net/pdf?id=4RHseRnmZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155592>)

Animals integrate information across sensory modalities to guide exploration, suggesting that they maintain internal estimates of where actions are expected to reduce uncertainty\. However, how such action\-conditioned information maps are learned from multimodal sensory experience remains unclear, as previous studies have been largely confined to unimodal sensing frameworks\. We introduce a multimodal predictive\-coding framework for learning uncertainty\-reduction maps from visual and mechanosensory observations in hawkmoth flower interaction tasks\. A variational generative model trained on simulated environments recovers modality\-specific information landscapes over the action space, capturing how visual patterns, surface geometry, and mechanosensory cues shape the value of exploratory actions\. These learned maps account for several features of hawkmoth behavior, including angled offsets during flower tracking, probing along visual patterns, and geometry\-dependent changes in exploration\. Applying the model to behavioral data from flower tracking and nectary search, we find that natural trajectories tend to occupy regions of high uncertainty reduction in these learned maps\. Building on these observations, we develop an uncertainty\-gated lexicographic algorithm that switches between information gathering and reward exploitation based on perceptual uncertainty\. Across downstream reward\-learning tasks, this policy learns faster, is more sample\-efficient, and generalizes better to unseen environmental conditions than exploitation\-only policies, $\\epsilon$\-greedy exploration, and non\-lexicographic baselines\. Together, these results suggest that multimodal generative perception models can learn actionable information landscapes that explain biological sensing and support exploration in embodied decision\-making\.

## FAST\-Brain: A Flow\-Aligned Spatio\-Temporal Surrogate Brain Model

**Authors:** Shucheng Liu; Chengchun Shi; Kai Zhang; Hongtu Zhu

**ID:** 149330\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149330

[Paper](<https://openreview.net/forum?id=qu1GlOKsSN>) | [PDF](<https://openreview.net/pdf?id=qu1GlOKsSN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149330>)

Modeling resting\-state functional magnetic resonance imaging \(rs\-fMRI\) data is crucial for understanding brain\-wide neural activity\. However, traditional methods struggle to capture complex temporal dynamics over long horizons, to account for the brain's anatomical spatial structure, and to model high\-dimensional ambient signals that lie on a low\-dimensional intrinsic subspace\. We propose FAST\-Brain, a unified flow\-aligned spatio\-temporal surrogate brain model that addresses all three challenges\. At its core is a flow\-aligned generative framework that directly predicts the clean blood\-oxygen\-level\-dependent \(BOLD\) signal, paired with a graph convolutional network that captures spatial structural constraints and a Transformer that models long\-range temporal dependencies\. Theoretically, we show that under a low\-dimensional subspace assumption,  the approximation error of our model scales with the intrinsic dimension rather than the ambient dimension, which justifies our direct modeling of the BOLD signal\. Extensive experiments on synthetic and Human Connectome Project datasets demonstrate that FAST\-Brain achieves state\-of\-the\-art performance in recovering functional connectivity, effective connectivity, and the implicit low\-dimensional signal subspace\.

## CutAttn: Discovering Cognitive Transition Layers for Efficient Long\-Context Prefilling

**Authors:** Wentao Liu; Xiabao Wu; Yongchao Liu; Haitao Zhang; Jiajun Zheng; Ruiting Zhou

**ID:** 148257\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148257

[Paper](<https://openreview.net/forum?id=zCmAsPM9EI>) | [PDF](<https://openreview.net/pdf?id=zCmAsPM9EI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148257>)

Long\-context LLM inference is fundamentally a retrieval process, transitioning from diffuse to sharply focused attention at a few architecture\-determined \(CTLs\)\.  Existing acceleration methods leave significant costs unaddressed: sparse attention ignores FFNs, KV cache compression neglects prefill, and hidden\-state pruning relies on fixed, heuristic rules\.  We introduce CutAttn, a training\-free framework that exploits CTLs via inter\-layer Jensen\-\-Shannon divergence, pruning redundant context at chunk granularity while dynamically gated by a normalized\-entropy criterion\.  Operating at the hidden\-state level, CutAttn reduces both attention and FFN costs, composing orthogonally with existing acceleration techniques\.  Evaluated on RULER, InfiniteBench, and LongBench, CutAttn preserves full\-attention accuracy while achieving up to a $2\.02\\times$ prefill speedup on 128K sequences \(and $2\.81\\times$ when composed with sparse attention\)\. Furthermore, our theoretical analysis provides approximation bounds, an entropy\-compression limit justifying the gating, and a closed\-form speedup ratio\.

## WASP: Weakly Aligned Spatiotemporal Pairs for Fetal Brain MRI\-Ultrasound Learning

**Authors:** Francesco Correnti; Gabriele Magrini; Marco Mistretta; Niccolò Biondi; Pietro Pala; Alessandro Ramalli; simona fiori; Andrew Bagdanov; Matteo Lenge

**ID:** 151594\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151594

[Paper](<https://openreview.net/forum?id=ZOMRRwH1Md>) | [PDF](<https://openreview.net/pdf?id=ZOMRRwH1Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151594>)

Magnetic Resonance Imaging \(MRI\) is widely regarded as the optimal sensor for fetal brain analysis due to its superior soft tissue contrast and anatomical detail\. However, its high cost and operational burden make it invasive and difficult to obtain at scale\. Ultrasound \(US\), in contrast, is cheap, safe, and routinely acquired, and as a result it has produced substantially larger datasets and a growing ecosystem of pretrained models\. This asymmetry raises a natural question: Can we teach a US\-only model to understand fetal MRI from only a limited set of examples? The standard recipe, training a foundation model on subject\-to\-subject paired MRI\-US scans, is not viable since no such paired fetal dataset is publicly available\. In this paper we address this gap with Weakly Aligned Spatiotemporal Pairs \(WASP\), a framework that formulates cross\-modal correspondence as an entropic Optimal Transport problem driven by clinical metadata — in particular, Gestational Age \(GA\) and diagnostic planes — enabling the fitting of a lightweight alignment head that lifts MRI representations into the US latent space, without fine\-tuning the backbone\. Empirically, WASP yields its largest gains when MRI is unseen by the model during pretraining \(on USFM, GA estimation error drops from $21\.9$ to $16\.3$ days and standard plane classification accuracy climbs from 61\.9\\% to 74\.5\\%\), while still providing refining improvements for backbones pretrained on both modalities \(e\.g\., BioMedParse GA estimation error from $6\.5$ to $5\.6$ days and SAM\-Med2d plane accuracy from $83\.3$\\% to $88\.1$\\%\)\.

## Orthogonal Sparse Subgraph Alignment for Structure\-Function Coupling in Brain Networks

**Authors:** Haonan Gao; Daeyoung Ham; Yifei Zhang; Xinyuan Tian; Shengxian DING; Zhao; Tianxi Li

**ID:** 155965\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155965

[Paper](<https://openreview.net/forum?id=1VRjEYWcHX>) | [PDF](<https://openreview.net/pdf?id=1VRjEYWcHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155965>)

Characterizing the relationship between brain anatomical wiring and functional coordination remains a fundamental challenge in computational neuroscience\. This difficulty primarily arises because structure\-function coupling in the human brain is spatially heterogeneous, often localized to subnetworks, and inherently difficult to align across disparate representational modalities\. To address this methodological gap, we introduce $\\textbf\{O\}$rthogonal $\\textbf\{S\}$parse $\\textbf\{S\}$ubgraph $\\textbf\{A\}$lignment \($\\textbf\{Ossa\}$\), a principled and interpretable framework designed to identify compact structural cliques that exhibit maximal concordance with functional connectivity \(FC\) across subjects\. Within each FC\-derived community, $\\textbf\{Ossa\}$ optimizes an alignment objective over an orthogonal transformation, which absorbs coordinate mismatch between the two connectivity modalities, and a sparse node\-selection vector, which identifies the induced structural connectivity \(SC\) subgraph\. Furthermore, we establish theoretical properties for the $\\textbf\{Ossa\}$ estimator, demonstrating its statistical consistency in recovering the true underlying SC clique within each functional community\. Extensive empirical evaluations on simulated data, alongside analyses of the Adolescent Brain Cognitive Development \(ABCD\) baseline and longitudinal cohorts, demonstrate that $\\textbf\{Ossa\}$ successfully recovers aligned structural cliques under latent cross\-modal rotations\. Ultimately, the proposed methodology significantly improves out\-of\-sample SC\-FC alignment over size\-matched baselines and robustly identifies stable, single\-core topological structures within human brain networks\.

## Memory flows: geometry and dynamics of sequential retrieval in input\-driven Hopfield networks

**Authors:** Simone Betteti; Matteo Martin; Morten G Pedersen; Sandro Zampieri; Giacomo Baggio

**ID:** 150585 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h5XfkJCHcA>) | [PDF](<https://openreview.net/pdf?id=h5XfkJCHcA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150585>)

_Abstract unavailable from the accessible public sources._

## Growing a Neural Network in Breadth, Depth, and Time

**Authors:** Eivinas Butkus; Kedar Garzón Gupta; Nikolaus Kriegeskorte

**ID:** 148445 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xl72oIaJ4k>) | [PDF](<https://openreview.net/pdf?id=xl72oIaJ4k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148445>)

_Abstract unavailable from the accessible public sources._

## Learning When Visual Context Matters for Mouse Behavior Analysis

**Authors:** Weihan Li; Jingyang Ke; Qinheng Pu; Yule Wang; Chengrui Li; Anqi Wu

**ID:** 151213 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c7qXkgNCJB>) | [PDF](<https://openreview.net/pdf?id=c7qXkgNCJB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151213>)

_Abstract unavailable from the accessible public sources._

## BrainVista: Modeling Naturalistic Brain Dynamics as Multimodal Next\-Token Prediction

**Authors:** Xuanhua Yin; Ted Zhao; Lina Yao; Weidong Cai

**ID:** 153166\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153166

[Paper](<https://openreview.net/forum?id=NNRWeXb2aF>) | [PDF](<https://openreview.net/pdf?id=NNRWeXb2aF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153166>)

_Abstract unavailable from the accessible public sources._

## fNIRSAtlas: A Large\-Scale Benchmark for Functional Near\-Infrared Spectroscopy Classification

**Authors:** Kalle Mäkelä; Tuukka Ruotsalo

**ID:** 139300 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbtGpIOTFA>) | [PDF](<https://openreview.net/pdf?id=YbtGpIOTFA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139300>)

Functional near\-infrared spectroscopy \(fNIRS\) is a promising modality for brain\-computer interfaces and cognitive state decoding, but progress in machine learning for fNIRS has been limited by small, isolated datasets and inconsistent evaluation protocols\. We introduce fNIRSAtlas, the largest open benchmark for fNIRS classification to date, comprising 23 public datasets spanning diverse experimental paradigms, including motor execution, motor imagery, mental arithmetic, working memory, and emotion recognition\. fNIRSAtlas provides a fully automated pipeline from raw data to evaluation and defines standardized benchmark tasks for both cross\-subject and within\-subject classification, ensuring reproducible comparison of methods\. We evaluate a variety of baseline models from fNIRS and related neuroimaging and time\-series machine learning literature on the benchmark\. Our results demonstrate that performance varies substantially across datasets and that methods validated on limited data \-\- especially deep learning approaches \-\- often fail to generalize beyond their original evaluation\. fNIRSAtlas serves as an extensible, open, and reproducible benchmark to support more robust and cumulative progress in machine learning for fNIRS data\. Our code and data can be found at https://anonymous\.4open\.science/r/fNIRSAtlas\-8842\.

## EEGFaceSem: An EEG Benchmark with Paired Generative Latents for Semantic Visual Modeling

**Authors:** Jun Ma; Michiel Spape; Keith M Davis; Tuukka Ruotsalo

**ID:** 138993 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s6avH9sqCU>) | [PDF](<https://openreview.net/pdf?id=s6avH9sqCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138993>)

Electroencephalography \(EEG\) is widely used to measure brain activity for brain\-computer interface applications for its non\-invasive nature and high temporal resolution\. However, progress in modeling the neural responses to visual semantics has been limited by a reliance on static, real\-world image datasets that lack the fine\-grained control needed to isolate fine\-grained changes in visual features and their relation to perception\. In this work, we present EEGFaceSem, a large\-scale dataset pairing high\-quality EEG with photorealistic face images synthesized from a generative model\. We provide the generative latent vector for each stimulus, enabling research into the continuous mapping between a visual latent space and neural representations\. Each participant's brain responses were recorded while they attended to specific semantic features \(e\.g\., smiling, hair color\) in a rapid serial visual presentation paradigm\. The dataset contains EEG signals from 30 participants, totaling 67,200 time\-locked EEG recordings\. We present benchmarks for single\-trial semantic classification under single\-subject, cross\-subject, and subject\-adapted settings, as well as for cross\-subject voting that aggregates per\-stimulus predictions across participants\. We further demonstrate the dataset's unique utility with two complementary applications: deriving semantic directions in the latent space for brain\-supervised image editing, and conditioning a generative model on brain\-decoded labels for brain\-supervised image generation\. Our dataset paves the way for advancing brain\-computer interface \(BCI\) devices for semantic\-level visual saliency detection and brain\-supervised generative modeling\. Our dataset and code are openly released at OSF https://osf\.io/2guk3/ and at HuggingFace https://huggingface\.co/datasets/yefllower/EEGFaceSem\.

## Brain2voice 2\.0: High\-performance voice synthesis brain\-computer interface

**Authors:** Maitreyee Wairagkar; Aparna Srinivasan; Nicholas S Card; Tyler Singer\-Clark; Xianda Hou; Carrina Iacobacci; Lee Miller; Leigh Hochberg; David Brandman; Sergey D Stavisky

**ID:** 148803 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v1KHSSdzcM>) | [PDF](<https://openreview.net/pdf?id=v1KHSSdzcM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148803>)

_Abstract unavailable from the accessible public sources._

## Scaling Laws and Tradeoffs in Recurrent Networks of Expressive Neurons

**Authors:** Aaron Spieler; Georg Martius; Anna Levina

**ID:** 148161 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zpewdRsVpA>) | [PDF](<https://openreview.net/pdf?id=zpewdRsVpA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148161>)

_Abstract unavailable from the accessible public sources._

## Control Under the Wrong Model Is Better Than Under the Correct One

**Authors:** Francesco Damiani; Ruben Moreno Bote

**ID:** 149917 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mErAv9CVnq>) | [PDF](<https://openreview.net/pdf?id=mErAv9CVnq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149917>)

Building an optimal controller requires solving two coupled problems: \(1\) computing beliefs about the state by filtering observations, and \(2\) designing a control signal based on those beliefs to minimize a cost function\. Ideally, these two problems can be solved independently: first, a filter is computed to estimate the state; then, a controller is built on top of that estimate\. When exact inference is tractable, this approach is optimal and applies to the prominent Linear\-Quadratic\-Gaussian stochastic control problem\. However, perfect inference is generally intractable, and filtering and control are closely intertwined problems\. The question, then, is whether the commonly used first\-filter\-then\-control approach remains optimal, and whether optimal control strategies should generally rely on internal representations that mirror the dynamics of the external world\. We show that this is not the case: even in a simple setting with linear dynamics, multiplicative noise, and internal noise, the optimal linear controller is characterized by internal forward dynamics that do not match the forward dynamics of the external state\. Instead, the optimal controller relies on internal representations that mix estimation and control, and this mismatch becomes more pronounced as internal noise increases\. Our work challenges standard approaches that prioritize external world modeling over control\.

## Neural Signals Generate Clinical Notes in the Wild

**Authors:** Jathurshan Pradeepkumar; Zheng Chen; Jimeng Sun

**ID:** 155381 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63dsa3ZmMH>) | [PDF](<https://openreview.net/pdf?id=63dsa3ZmMH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155381>)

Generating clinical reports that summarize abnormal patterns, diagnostic findings, and clinical interpretations from long\-term EEG recordings remains labor\-intensive\. We present CELM, the first clinical EEG\-to\-Language foundation model capable of summarizing long\-duration, variable\-length EEG recordings and performing end\-to\-end clinical report generation at multiple scales\. CELM integrates pretrained EEG foundation models with language models to enable scalable multimodal learning\. We curate a large\-scale clinical EEG dataset containing 9,922 reports paired with approximately 11,000 hours of EEG recordings from 9,048 patients to train CELM, and release the benchmark with an automated report\-structuring pipeline to facilitate future research\.  Experimental results show that CELM consistently outperforms existing methods across all evaluation settings\.  Importantly, we further conduct human evaluation with clinical experts, demonstrating that CELM generates reports that are more clinically coherent, diagnostically reliable, and better aligned with expert interpretation\. We release our model and benchmark construction pipeline at https://anonymous\.4open\.science/r/CELM\-3AF4\.

## Brain\-OF: An Omnifunctional Foundation Model for fMRI, EEG and MEG

**Authors:** Hanning Guo; Hanwen Bi; Farah Abdellatif; Andrei Galbenus; N\. J Shah; Abigail Morrison; Jürgen Dammers

**ID:** 155505 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=54rAPNnSej>) | [PDF](<https://openreview.net/pdf?id=54rAPNnSej>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155505>)

Brain foundation models have achieved remarkable advances across a wide range of neuroscience tasks\. However, most existing models are limited to a single functional modality, restricting their ability to exploit complementary spatiotemporal dynamics and the collective data scale across different neuroimaging techniques\. This limitation largely arises from severe semantic heterogeneity and resolution discrepancies among modalities\. To address these challenges, we propose Brain\-OF, an omnifunctional brain foundation model jointly pretrained on fMRI, EEG and MEG, capable of handling both unimodal and multimodal inputs within a unified framework\. To reconcile heterogeneous spatiotemporal resolutions, we introduce the Any\-Resolution Neural Signal Sampler, which projects diverse brain signals into a shared semantic space\. To further manage semantic shifts, the Brain\-OF backbone integrates DINT attention with a Sparse Mixture of Experts, where shared experts capture modality\-invariant representations and routed experts specialize in modality\-specific semantics\. Furthermore, to explicitly internalize the characteristics of neural activity through self\-supervised learning, we propose Masked Temporal\-Frequency Modeling, a dual\-domain pretraining objective that jointly reconstructs brain signals in both the time and frequency domains\. Brain\-OF is pretrained on a large\-scale corpus comprising around 40 datasets and demonstrates superior performance across diverse downstream tasks, highlighting the benefits of joint multimodal integration and dual\-domain pretraining\. Our code will be made publicly available upon acceptance\.

## Constrained Modulatory Reservoirs for Context\-Dependent Computation

**Authors:** Sejeung Choi; Minji Jung; Jinyeong Park; Taek D Chung

**ID:** 152484 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SkTqNkpAlZ>) | [PDF](<https://openreview.net/pdf?id=SkTqNkpAlZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152484>)

_Abstract unavailable from the accessible public sources._

## Capturing Membrane Dynamics and Spike Timing of Human Neurons at Scale using Neural Operators

**Authors:** Luca Ghafourpour; Cindy Zhao; Valentin Duruisseaux; Bahareh Tolooshams; Philip Wong; Costas Anastassiou; Animashree Anandkumar

**ID:** 149091 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sxhx4suoIl>) | [PDF](<https://openreview.net/pdf?id=sxhx4suoIl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149091>)

_Abstract unavailable from the accessible public sources._

## Brain Economy\-Aligned Graph Transformers

**Authors:** Stefano Vannoni; Inês W Sampaio; Eleonora Maggioni; Islem Rekik

**ID:** 153903 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HqOJ2E0PU0>) | [PDF](<https://openreview.net/pdf?id=HqOJ2E0PU0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153903>)

_Abstract unavailable from the accessible public sources._

## $\\mathrm\{Bounded\\mbox\{\-\}RS\}$: A Bounded Evaluation Protocol and Testbed for Representational Systematicity

**Authors:** Boyu Cao; Wenshuo Wang

**ID:** 139441 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PfEXf8s5ps>) | [PDF](<https://openreview.net/pdf?id=PfEXf8s5ps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139441>)

_Abstract unavailable from the accessible public sources._

## From sequences to schemas: low\-rank recurrent dynamics underlie abstract relational representations

**Authors:** Vezha Boboeva; Alberto Pezzotta; George Dimitriadis; Athena Akrami

**ID:** 155707 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3XO2JXx10F>) | [PDF](<https://openreview.net/pdf?id=3XO2JXx10F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155707>)

A hallmark of intelligent behavior is the ability to extract abstract relational structure from temporal sequences \-\- recognizing, for instance, that aab, ccd, and eef all follow the same underlying pattern, regardless of the specific elements involved\. This capacity, observed across species and sensory modalities, is thought to underlie the formation of cognitive schemas: compressed internal models that support rapid generalization to novel experiences\. Yet the neural circuit mechanisms by which such abstract, identity\-independent representations emerge from sequential experience remain largely unknown\. Here, we investigate this question using Recurrent Neural Networks \(RNNs\) as mechanistic models of neural circuits, trained to classify sequences based on their latent algebraic patterns \(e\.g\., aab, aad $\\to$ AAB; aba, aca $\\to$ ABA\) without supervision on intermediate transitions\. We demonstrate that RNNs learn low\-dimensional representations that mirror the hierarchical generative structure of the sequences, and that this abstraction is mechanistically supported by the emergence of low\-rank recurrent connectivity\. The leading singular component of the recurrent weights integrates relational transition information \-\- whether consecutive tokens are the same or different \-\- across time, driving the formation of a structured, tree\-like geometry in the population state space\. Through singular vector ablation, we establish a causal role for this component: removing it selectively erases memory for earlier transitions while leaving local, single\-step sensitivity intact\. Finally, while RNNs trained on next\-token prediction do not acquire these abstract representations, transferring the low\-rank scaffold learned from classification significantly accelerates learning and improves generalization \-\- an effect specific to the abstract structure of the scaffold rather than generic statistical pretraining\. These findings offer a computational account of how task demands shape recurrent connectivity to support temporal abstraction, with implications for schema formation in biological brains\.

## The Neural Race Model

**Authors:** Omar Ghezzi; Alessandro D’Amelio; Vittorio Cuculo; Rita Cucchiara; Giuseppe Boccignone

**ID:** 152312 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U280pm3mcR>) | [PDF](<https://openreview.net/pdf?id=U280pm3mcR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152312>)

Perceptual decisions unfold in time: noisy evidence is integrated until a commitment threshold is reached, jointly producing a choice and a reaction time\. Classical race models capture this mechanism through simple parametric drift and diffusion, but cannot represent how rich, high\-dimensional stimuli shape accumulation on individual trials\. We introduce the $\\textbf\{Neural Race Model\}$ \(NRM\), a stimulus\-conditional neural stochastic differential equation in which one accumulator per alternative races towards a learnable, stimulus\-dependent threshold\. Drift, diffusion, and threshold are parameterised by neural networks conditioned on a stimulus embedding, allowing both accumulation dynamics and decision urgency to vary across trials\. The model is trained end\-to\-end on the joint reaction\-time\-and\-choice likelihood via a smooth surrogate for the discontinuous first\-passage event, combined with Monte Carlo trajectory averaging and gradient propagation through the stochastic adjoint\. The surrogate recovers the classical hard threshold in the appropriate limit and is removed at test time\. Each component admits a natural correspondence with elements of the primate decision\-making circuit, preserving the mechanistic interpretability of classical models\. We evaluate the NRM on multiple perceptual decision\-making benchmarks against classical sequential\-sampling and image\-computable reaction\-time models\. Across tasks and metrics, the NRM tracks the human noise ceiling more closely than all baselines, demonstrating that stimulus\-conditional stochastic accumulation and end\-to\-end differentiability can be achieved within a single, principled framework\. Code will be publicly released\.

## CAREBench: Evaluating LLMs' Emotion Understanding by Assessing Cognitive Appraisal Reasoning

**Authors:** ZHAOYUE SUN; Hainiu Xu; Andero Uusberg; James Gross; Petr Slovak; Yulan He

**ID:** 139329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WwTZWhjAvk>) | [PDF](<https://openreview.net/pdf?id=WwTZWhjAvk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139329>)

Emotion understanding is a core capability for LLMs to interact effectively with humans, yet existing evaluation paradigms rely on discrete emotion label prediction and fail to capture the cognitive processes underlying emotion generation\. Grounded in appraisal theory, we introduce CAREBench, the first benchmark with complete inferential chain annotations from both first\- and third\-person perspectives on real\-world narratives, spanning appraisal reasoning, appraisal ratings, and multi\-label emotion annotation\. We propose a process\-level evaluation framework and conduct systematic experiments across six LLMs organized around four research questions\. We find that stronger models match or surpass human observers on certain tasks, yet fall short on appraisal reasoning and positive emotion recognition; performance across chain steps and sensitivity to appraisal interventions exhibit dissociations across models; and current models have not internalized the mechanisms needed to capture human subjective heterogeneity\. These findings suggest that downstream emotion prediction metrics may overestimate LLMs' true emotion understanding, and CAREBench provides a foundation for more diagnostically informative evaluation of LLMs' affective cognitive capabilities\.

## A Scientific Claim Stability Framework for Evaluating MRI Morphometry Pipelines

**Authors:** Duy\-Cat Can; Dang\-Duat Tran; Anh\-Khang Nguyen; Bao Tran; Trung\-Hieu Do; Van T Nguyen; Duy\-Thanh VU; Oliver Y Chén; Hoang\-Quynh Le

**ID:** 139330 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WgIesR9ByR>) | [PDF](<https://openreview.net/pdf?id=WgIesR9ByR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139330>)

MRI morphometry pipelines are often evaluated by measurement agreement or downstream accuracy, yet their scientific value depends on the conclusions they support\. This creates a gap: two pipelines may look similar at the feature level while supporting different conclusions about aging, cognitive decline, or neurodegeneration\. To bridge this disparity, here we propose Scientific Claim Stability \(SCS\), a reusable claim\-centric evaluation framework that converts region\-of\-interest \(ROI\) morphometry tables into interpretable claim cards and tests whether each claim remains supported under realistic perturbations\. To demonstrate the efficacy of SCS, we evaluate it on 10,370 MRI scans from three datasets and five cohorts, generating 2,783 claim cards and evaluating 89 claim\-family pairs across dataset, pipeline, atlas, feature\-family, and target shifts\. SCS identifies claims that are stable, transferable, or fragile, and reveals high\-concordance fragile\-support cases where evidence vectors remain similar while supporting regions change\. To assess claim plausibility, clarity, faithfulness, usefulness, and caution level, we further implement and compare an expert \(including geriatrics, neuroscience, and radiology\) review workflow and an LLM \(including ChatGPT and Gemini\) review workflow\. Our results suggest claim\-level evaluation as a practical standard for auditing MRI morphometry pipelines without requiring a universal gold standard\.

## FAST\-Brain: A Flow\-Aligned Spatio\-Temporal Surrogate Brain Model

**Authors:** Shucheng Liu; Chengchun Shi; Kai Zhang; Hongtu Zhu

**ID:** 149330\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149330

[Paper](<https://openreview.net/forum?id=qu1GlOKsSN>) | [PDF](<https://openreview.net/pdf?id=qu1GlOKsSN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149330>)

Modeling resting\-state functional magnetic resonance imaging \(rs\-fMRI\) data is crucial for understanding brain\-wide neural activity\. However, traditional methods struggle to capture complex temporal dynamics over long horizons, to account for the brain's anatomical spatial structure, and to model high\-dimensional ambient signals that lie on a low\-dimensional intrinsic subspace\. We propose FAST\-Brain, a unified flow\-aligned spatio\-temporal surrogate brain model that addresses all three challenges\. At its core is a flow\-aligned generative framework that directly predicts the clean blood\-oxygen\-level\-dependent \(BOLD\) signal, paired with a graph convolutional network that captures spatial structural constraints and a Transformer that models long\-range temporal dependencies\. Theoretically, we show that under a low\-dimensional subspace assumption,  the approximation error of our model scales with the intrinsic dimension rather than the ambient dimension, which justifies our direct modeling of the BOLD signal\. Extensive experiments on synthetic and Human Connectome Project datasets demonstrate that FAST\-Brain achieves state\-of\-the\-art performance in recovering functional connectivity, effective connectivity, and the implicit low\-dimensional signal subspace\.

## CutAttn: Discovering Cognitive Transition Layers for Efficient Long\-Context Prefilling

**Authors:** Wentao Liu; Xiabao Wu; Yongchao Liu; Haitao Zhang; Jiajun Zheng; Ruiting Zhou

**ID:** 148257\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148257

[Paper](<https://openreview.net/forum?id=zCmAsPM9EI>) | [PDF](<https://openreview.net/pdf?id=zCmAsPM9EI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148257>)

Long\-context LLM inference is fundamentally a retrieval process, transitioning from diffuse to sharply focused attention at a few architecture\-determined \(CTLs\)\.  Existing acceleration methods leave significant costs unaddressed: sparse attention ignores FFNs, KV cache compression neglects prefill, and hidden\-state pruning relies on fixed, heuristic rules\.  We introduce CutAttn, a training\-free framework that exploits CTLs via inter\-layer Jensen\-\-Shannon divergence, pruning redundant context at chunk granularity while dynamically gated by a normalized\-entropy criterion\.  Operating at the hidden\-state level, CutAttn reduces both attention and FFN costs, composing orthogonally with existing acceleration techniques\.  Evaluated on RULER, InfiniteBench, and LongBench, CutAttn preserves full\-attention accuracy while achieving up to a $2\.02\\times$ prefill speedup on 128K sequences \(and $2\.81\\times$ when composed with sparse attention\)\. Furthermore, our theoretical analysis provides approximation bounds, an entropy\-compression limit justifying the gating, and a closed\-form speedup ratio\.

## Rest\-Tuning: Data\-Efficient Adaptation of EEG Foundation Models to Individuals via Resting\-State Signals

**Authors:** Yinuo Zhang; Xinyu Fu; Qing Wang; Yinte Zhang; Junjie Yu; Kexin Lou; Quanying Liu

**ID:** 153812\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153812

[Paper](<https://openreview.net/forum?id=IWqyUkyULe>) | [PDF](<https://openreview.net/pdf?id=IWqyUkyULe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153812>)

EEG foundation models \(FMs\) offer strong population\-level priors but degrade on individual subjects due to anatomy\-driven distribution shifts\. We propose Rest\-Tuning, a task\-agnostic calibration framework that personalizes a population FM using just 1–3 minutes of unlabeled resting\-state EEG\. Rest\-Tuning employs masked teacher\-student alignment to produce a subject\-calibrated backbone, reused as initialization across multiple tasks from the same subject\. Across two multi\-subject datasets and four EEG FMs, Rest\-Tuning outperforms task\-only adaptation, with up to 13\.3% absolute gain in downstream task accuracy and over 40% average reduction in labeled task data\. Calibration saturates quickly and requires under 3 minutes of compute per subject\. Representation analyses show reduced subject\-to\-population distance and smoother LoRA adapter interpolation paths, indicating improved compatibility between rest\- and task\-adapted solutions\. These results establish resting\-state EEG as a practical, fast, and reusable calibration interface, enabling population EEG FMs to function as reliable, subject\-specific BCIs and serve as reusable initialization for downstream task adaptation\.

## Multimodal Foundation Agents Should Use Brain Data as Privileged Supervision

**Authors:** Richard Csaky

**ID:** 140083\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140083

[Paper](<https://openreview.net/forum?id=JK1yUpvQxe>) | [PDF](<https://openreview.net/pdf?id=JK1yUpvQxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140083>)

This position paper argues that multimodal foundation models should use brain recordings as privileged internal\-state supervision during training\. External behavior alone leaves human\-like cognition, robustness, and reasoning weakly constrained\. Neural recordings can serve as a training\-time modality that shapes representations, latent\-state dynamics, private computation policies such as reasoning tokens, and robustness before distillation into agents that operate from ordinary sensory, language, and action streams\. We develop this position through Foundational Human Modeling \(FHM\), a program centered on scaling generative brain models, aligning heterogeneous neural modalities through shared latent geometry, inserting brain tokens into unified multimodal token streams, and testing whether the privileged channel improves distilled agents after removal\. The argument is grounded in privileged\-information theory and prior work showing that neural or human\-derived targets can improve robustness, semantic transfer, data efficiency, and behavioral similarity after auxiliary signals are removed\.

## Decomposing the modulation of interactions between neuronal populations

**Authors:** Marco Celotto; J\. S Sooter; Sofie Ährlund\-Richter; Kyle R Jenks; Mriganka Sur; Stefano Panzeri

**ID:** 152282\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152282

[Paper](<https://openreview.net/forum?id=UFTQ6XUIb3>) | [PDF](<https://openreview.net/pdf?id=UFTQ6XUIb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152282>)

Identifying subpopulations of neurons that interact with each other from simultaneous recordings of populations of many neurons is key for understanding across\-brain communication with cellular resolution\. Recent work identified communication subspaces, which capture additive interactions between pairs of high\-dimensional neural populations through a small number of source and target activity patterns\. However, no current method captures how a third, potentially multivariate variable \- such as behavioral state or the activity of a third population \- modulates these interactions\. Here we extend the communication subspace framework by parameterizing modulation as a low\-rank tensor\. This identifies multiplicative interaction channels \(MICs\), defined as triplets of source, target, and modulator activity patterns, in which the modulator pattern gates the source\-target interaction\. We derive MICs as a bilinear perturbation of reduced\-rank regression\. We develop a hierarchical fitting pipeline and provide a closed\-form decomposition that quantifies whether modulation reshapes the modulator\-averaged baseline interaction, recruits private dimensions of one population, or opens new interactions\. In simulations, MICs reliably recover the presence and geometry of ground\-truth modulation even in the high\-dimensional, low\-sample regime\. Applying MICs to simultaneous calcium imaging of prefrontal axons and interneurons in the visual cortex revealed that behavioral state asymmetrically modulates top\-down interactions, reconfiguring the patterns of prefrontal projections that interact with a stable set of visual interneuron activity patterns\. By providing an efficient and compact characterization of modulatory interactions, MICs enable asking new questions about how potentially high\-dimensional variables shape interactions between neural populations\.

## Efficient Training of Deep Spiking Neural Networks with Input\-Driven Derivative\-Free Updates

**Authors:** Yongbo Zhang; Xinzhe Li; Katsuma Inoue; Mitsumasa Nakajima; Toshikazu Hashimoto; Yasuo Kuniyoshi; Kohei Nakajima

**ID:** 152821\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152821

[Paper](<https://openreview.net/forum?id=Q8vwmOQdzh>) | [PDF](<https://openreview.net/pdf?id=Q8vwmOQdzh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152821>)

Spiking neural networks \(SNNs\) are a promising paradigm for efficient neuromorphic computing, yet their training remains challenging due to the non\-differentiability nature of spike firing\. Backpropagation through time \(BPTT\) with surrogate gradients \(SG\) has become a mainstream approach due to its superior performance\. However, this method incurs high computational and memory demands during training, while its update rule depends on specific neuronal dynamics\. Furthermore, when targeting neuromorphic hardware implementation, the temporal error\-propagation process and the full membrane\-potential access required by SG are difficult to realize; these can introduce additional readout overhead, measurement noise, or perturbations to the system dynamics\. To address these issues, we propose the input\-driven derivative\-free training \(IDDFT\) method\. Rather than relying on membrane\-potential\-based surrogate derivatives, IDDFT constructs derivative\-free error signals by applying a relaxed nonlinearity to the inputs, thereby avoiding the temporal error\-propagation process and reducing the dependence of the update rule on specific neuronal dynamics\. By eliminating access to internal membrane\-potential states, our method reduces computational and memory costs, enhances compatibility with neuromorphic hardware, and enables training of black\-box SNN models\. We validate the IDDFT method through theoretical analysis and systematic experiments, demonstrating its effectiveness as an input\-driven, derivative\-free mechanism for constructing update signals\. When integrated with a biologically inspired training strategy, IDDFT maintains comparable performance while substantially enhancing robustness to the choice of relaxed nonlinearities\. Based on the resulting bio\-inspired combined framework, we conduct evaluations on CIFAR\-10, CIFAR\-100, CIFAR10\-DVS, and Tiny\-ImageNet\. Experimental results demonstrate that our method achieves performance comparable to BPTT and state\-of\-the\-art methods, while exhibiting remarkable robustness under adversarial attacks\.

## Neural population tuning statistics as priors for multitask generalization

**Authors:** Zach Cohen; Jan Drugowitsch

**ID:** 153194\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153194

[Paper](<https://openreview.net/forum?id=N8F8d2c171>) | [PDF](<https://openreview.net/pdf?id=N8F8d2c171>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153194>)

Neural populations exhibit heterogeneous tuning: Neurons differ in their selectivity, gain, and in how their preferred inputs are distributed across stimulus or latent\-variable space\. While this heterogeneity has been studied extensively in the context of encoding precision, its implications for learning and generalization are less well\-understood\. Here, we develop a probabilistic theory that links a neural population's tuning statistics to its inductive bias: in large populations, the tuning statistics induce a kernel and, equivalently, a prior of a generative model over functions\. This prior in turn predicts the population's ability to  generalize across a distribution of related tasks\. Our theory determines the population tuning statistics that minimize the generalization error over a distribution of functions\. We further present a normative account of tuning adaptation inspired by our probabilistic approach, showing that tuning changes that maximize the marginal likelihood of observed data systematically reduce generalization error relative to non\-adapting populations\. Applied to the adaptation of hippocampal spatial representations in a reward learning task, we found that our theory could explain the over\-representation of rewarding locations through experience in an environment with a localized reward\. We further demonstrate how different components of the population's generative model differentially impact the speed and magnitude of tuning adaptation\. Overall, our work proposes a novel connection between tuning variability and a population's ability to learn and to generalize across tasks and develops a Bayesian theory of tuning adaptation in neural populations during learning\.

## Orthogonal Sparse Subgraph Alignment for Structure\-Function Coupling in Brain Networks

**Authors:** Haonan Gao; Daeyoung Ham; Yifei Zhang; Xinyuan Tian; Shengxian DING; Zhao; Tianxi Li

**ID:** 155965\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155965

[Paper](<https://openreview.net/forum?id=1VRjEYWcHX>) | [PDF](<https://openreview.net/pdf?id=1VRjEYWcHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155965>)

Characterizing the relationship between brain anatomical wiring and functional coordination remains a fundamental challenge in computational neuroscience\. This difficulty primarily arises because structure\-function coupling in the human brain is spatially heterogeneous, often localized to subnetworks, and inherently difficult to align across disparate representational modalities\. To address this methodological gap, we introduce $\\textbf\{O\}$rthogonal $\\textbf\{S\}$parse $\\textbf\{S\}$ubgraph $\\textbf\{A\}$lignment \($\\textbf\{Ossa\}$\), a principled and interpretable framework designed to identify compact structural cliques that exhibit maximal concordance with functional connectivity \(FC\) across subjects\. Within each FC\-derived community, $\\textbf\{Ossa\}$ optimizes an alignment objective over an orthogonal transformation, which absorbs coordinate mismatch between the two connectivity modalities, and a sparse node\-selection vector, which identifies the induced structural connectivity \(SC\) subgraph\. Furthermore, we establish theoretical properties for the $\\textbf\{Ossa\}$ estimator, demonstrating its statistical consistency in recovering the true underlying SC clique within each functional community\. Extensive empirical evaluations on simulated data, alongside analyses of the Adolescent Brain Cognitive Development \(ABCD\) baseline and longitudinal cohorts, demonstrate that $\\textbf\{Ossa\}$ successfully recovers aligned structural cliques under latent cross\-modal rotations\. Ultimately, the proposed methodology significantly improves out\-of\-sample SC\-FC alignment over size\-matched baselines and robustly identifies stable, single\-core topological structures within human brain networks\.

## Memory flows: geometry and dynamics of sequential retrieval in input\-driven Hopfield networks

**Authors:** Simone Betteti; Matteo Martin; Morten G Pedersen; Sandro Zampieri; Giacomo Baggio

**ID:** 150585\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150585

[Paper](<https://openreview.net/forum?id=h5XfkJCHcA>) | [PDF](<https://openreview.net/pdf?id=h5XfkJCHcA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150585>)

_Abstract unavailable from the accessible public sources._

## Growing a Neural Network in Breadth, Depth, and Time

**Authors:** Eivinas Butkus; Kedar Garzón Gupta; Nikolaus Kriegeskorte

**ID:** 148445\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148445

[Paper](<https://openreview.net/forum?id=xl72oIaJ4k>) | [PDF](<https://openreview.net/pdf?id=xl72oIaJ4k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148445>)

_Abstract unavailable from the accessible public sources._

## Learning When Visual Context Matters for Mouse Behavior Analysis

**Authors:** Weihan Li; Jingyang Ke; Qinheng Pu; Yule Wang; Chengrui Li; Anqi Wu

**ID:** 151213\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151213

[Paper](<https://openreview.net/forum?id=c7qXkgNCJB>) | [PDF](<https://openreview.net/pdf?id=c7qXkgNCJB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151213>)

_Abstract unavailable from the accessible public sources._

## On Length Bias in EEG\-to\-Text Decoding

**Authors:** Iakovos Tenedios; Yashar Moshfeghi

**ID:** 149964 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lsTNd5Lyoe>) | [PDF](<https://openreview.net/pdf?id=lsTNd5Lyoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149964>)

Sentence\-level EEG\-to\-text decoding models typically pad variable\-duration neural signals to a fixed\-length window, creating a structural confound where segment duration correlates with sentence identity independently of neural content, a problem we term length bias\. Despite being acknowledged in prior work, the prevalence, magnitude, and architectural dependence of this effect have never been systematically quantified\. We introduce length\-matched noise baselines that isolate this confound by replacing only the true signal region with Gaussian noise while preserving zero\-padding, and apply them across three English listening EEG datasets under a strict subject\-held\-out protocol\. Evaluating ten sentence classifiers and three generation models based on the current state\-of\-the\-art, we show that reported decoding scores are substantially inflated by length cues across datasets, with the degree of inflation varying markedly by architecture\. Among classifiers, BIOT alone is unaffected by length\-matched noise\. A systematic decomposition of its components identifies Short\-Fourier\-Transform \(STFT\) tokenisation as the bigger source of this invariance\. We transfer this finding into two new generation variants that largely eliminate encoder\-side length bias, enabling a controlled analysis of where residual bias originates\. A classification\-to\-generation evaluation further reveals that leading generation models operate largely as sentence retrieval systems, with a linear classifier recovering nearly all of their reported BLEU\-4 scores\. Together, these results establish that length bias is a pervasive and previously unquantified failure mode in EEG\-to\-text evaluation, and provide both diagnostic tools and architectural directions for future work\.

## L\-FAME: Longitudinal Focused Attention Meditation EEG Dataset and Benchmark

**Authors:** Angqi Li; Basit R Syed; Hamzeh Alzweri; Taosheng Liu; Barry H Cohen; Saiprasad Ravishankar

**ID:** 139264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b6X6sen3bu>) | [PDF](<https://openreview.net/pdf?id=b6X6sen3bu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139264>)

We introduce a novel Longitudinal Focused Attention Meditation Electroencephalography \(L\-FAME\) dataset and an accompanying benchmark, designed to foster research into the neural effects of various meditation practices and the evolution of these effects over a six\-week training period\. The dataset contains EEG recordings and psychological assessments from 74 healthy college participants, collected at two distinct time points: pre\-intervention and post\-intervention\. Participants were randomly assigned to one of three distinct meditation groups: two mantra\-based techniques \(SA\-TA\-NA\-MA and Hare Krishna\) and one Breath Focus practice\. Leveraging this unique longitudinal and comparative dataset, we propose a benchmark suite comprising three distinct classification tasks: \(1\) cognitive state decoding to distinguish between resting and meditation states, \(2\) fine\-grained classification of the specific meditation techniques, and \(3\) cross\-session adaptation to evaluate model generalization across the longitudinal time gap\. We provide comprehensive baseline results for these tasks utilizing a range of classical machine learning algorithms and deep learning architectures\. The complete dataset, preprocessing pipelines, and benchmark evaluation code will be publicly released, offering a valuable resource and a standardized framework for the development and comparison of new analytical methods in computational meditation research and EEG\-based machine learning\.

## EEG\-X: Toward Device\-Agnostic and Noise\-Robust Foundation Models for EEG

**Authors:** Navid Mohammadi Foumani; Soheila Ghane; Nam Nguyen; Mahsa Salehi; Geoffrey Webb; Geoffrey Mackellar

**ID:** 152276\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152276

[Paper](<https://openreview.net/forum?id=UHwOAjPtEg>) | [PDF](<https://openreview.net/pdf?id=UHwOAjPtEg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152276>)

Foundation models for EEG analysis are still in their infancy, limited by two key challenges: \(1\) variability across datasets caused by differences in recording devices and electrode configurations, and \(2\) the low signal\-to\-noise ratio \(SNR\) of EEG, where neural activity is often buried under artifacts and non\-brain sources\. To address these challenges, we present \\textit\{EEG\-X\}, a device\-agnostic and noise\-robust foundation model for EEG representation learning\. EEG\-X introduces a location\-based channel embedding that enables robust transfer across heterogeneous EEG devices and electrode layouts\. To improve robustness against noise, EEG\-X employs a novel noise\-aware masking\-reconstruction strategy that reconstructs artifact\-cleaned signals rather than raw noisy EEG and introduces a novel Dictionary\-based Convolutional Transformation \(DiCT\) that improves reconstruction\-based pretraining by comparing signals in a structured feature space instead of directly in the raw signal space\. Experiments across datasets collected from diverse EEG devices show that EEG\-X consistently outperforms state\-of\-the\-art methods across multiple downstream tasks and demonstrates strong cross\-domain generalization when pretraining and downstream datasets differ in electrode layouts and recording configurations paving the way towards foundation models\. The models and code are available at :https://anonymous\.4open\.science/r/EEG\-X\-CEDE/README\.md

## SPERA: Spherical Prior EEG Foundation Model with Geometry\- and Frequency\-Aware Latent Prediction

**Authors:** Minsu Kim; Ye\-Sung Kim; Hyeseong Jeon; Wooseok Hyung; Joshua Lee; Chang\-Hwan Im

**ID:** 155259\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155259

[Paper](<https://openreview.net/forum?id=71zbNNbFKV>) | [PDF](<https://openreview.net/pdf?id=71zbNNbFKV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155259>)

Electroencephalography \(EEG\) provides a non\-invasive measure of ongoing neural activity, but building general\-purpose EEG models remains challenging due to the heterogeneity of subjects, devices, and electrode montages\. Existing EEG foundation models predominantly rely on input\-space reconstruction, which can bias the encoder toward memorizing noise and artifacts\. We introduce SPERA \(Spherical Prior EEG Representation Architecture\), an EEG foundation model that predicts in latent space following the joint\-embedding predictive architecture \(JEPA\)\. SPERA combines three components tailored to EEG: \(i\) a hybrid attention backbone that interleaves factorized temporal and spatial attention with periodic full\-attention layers, \(ii\) a Legendre\-polynomial spatial prior incorporated into attention to encode varying scalp electrode geometries, and \(iii\) a relational spectral regularizer that aligns latent similarity structure with spectral views, inducing frequency\-aware latent representations\. Pretrained on approximately 90,213 hours of EEG from 31,771 subjects across 106 datasets, SPERA achieves the highest average performance across nine downstream tasks spanning clinical, cognitive, and BCI applications\. SPERA further exhibits strong parameter efficiency and robustness across varying recording conditions, suggesting its potential as a general\-purpose backbone for diverse EEG analyses\.

## Sparse Multimodal Switching State\-Space Models for Regime\-Dependent Neural Connectivity under Partial Observations

**Authors:** Rahul K Sharma; Feng Liu; Xiaochen Xian

**ID:** 151057\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151057

[Paper](<https://openreview.net/forum?id=dJy3Ipz0tx>) | [PDF](<https://openreview.net/pdf?id=dJy3Ipz0tx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151057>)

Multimodal electrophysiological recordings provide noisy, partially observed measurements of latent neural dynamics critical for tasks like brain state estimation and neurological diagnosis\. In joint EEG\-intracranial EEG \(iEEG\) recordings, scalp EEG offers broad but spatially mixed coverage, whereas iEEG provides high\-fidelity but spatially sparse measurements\. This creates a partial\-observation problem: directed source\-level interactions must be inferred from heterogeneous sensors with incomplete coverage\. A second challenge is nonstationarity: latent neural dynamics and directed interactions among brain regions can change abruptly across distinct regimes \(e\.g\., pre\-seizure, ictal, and post\-seizure states\)\. The third challenge is sparsity of significant source\-level interactions compared to the high\-dimensionality of the brain networks\. Standard models that assume single\-mode, fully observed, or stationary may therefore fail to capture regime\-specific activity or spurious couplings\. We propose the Sparse Multimodal Switching State\-Space Model \(S$^4$M$^3$\), which fuses EEG and iEEG as complementary observations of a shared source\-space latent process\. Dynamics switch between regimes governed by separate sparse directed transition matrices, jointly addressing multimodal fusion, nonstationarity, and sparse network estimation\. The estimation of the model uses the expectation\-maximization \(EM\) algorithm, where the E\-step applies the Kim filter\-RTS smoother to estimate latent states and regime probabilities, and the M\-step imposes elastic\-net penalization on off\-diagonal elements, promoting sparse inter\-regional couplings while preserving self\-dynamics\. The learned transition matrices facilitates the assessment of regime\-dependent edge changes\. To address the estimation bias of elastic\-net sparsity penalty, we separate edge selection from edge assessment: selected edges are refit by regime\-weighted least squares, followed by Wald tests with Benjamini\-Hochberg correction\. On synthetic benchmarks, S$^4$M$^3$ improves Edge F1 by approximately 25\\% over the strongest stationary baseline and 64\\% over two\-stage source\-connectivity pipelines\. On a real EEG\-iEEG epilepsy case study, S$^4$M$^3$ identifies sparse hippocampal and parahippocampal outgoing pathways concordant with the clinician\-confirmed seizure\-onset zone, without using clinical labels\.

## What Is Worth Representing? Representational Empowerment for Continual Model Construction

**Authors:** Fei Dai; Hanqi Zhou; Alison Gopnik; Charley M Wu

**ID:** 149925\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149925

[Paper](<https://openreview.net/forum?id=m9oKQZGDlw>) | [PDF](<https://openreview.net/pdf?id=m9oKQZGDlw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149925>)

_Abstract unavailable from the accessible public sources._

## MENDR: Manifold\-Embedded Neural Data Representations for Channel\-Agnostic EEG Foundation Modeling

**Authors:** Micky C Nnamdi; Matthew Chen; Benoit Marteau; Shaun Q\. Y\. Tan; J\. Ben Tamo; May Dongmei Wang

**ID:** 149502\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149502

[Paper](<https://openreview.net/forum?id=pf1CbF5JeQ>) | [PDF](<https://openreview.net/pdf?id=pf1CbF5JeQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149502>)

_Abstract unavailable from the accessible public sources._

## What, Where, and Boundary: Hierarchical Cognitive Decomposition for Echocardiography Video Segmentation

**Authors:** Long Zheng; Zhi Li; Weidong Wang; Chenxi Zhu; Zhenyu Dai; Minyi Guo

**ID:** 151545\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151545

[Paper](<https://openreview.net/forum?id=Zpjtkfd60y>) | [PDF](<https://openreview.net/pdf?id=Zpjtkfd60y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151545>)

Segmenting the left ventricle in echocardiographic videos remains difficult because the target undergoes continuous deformation and rapid displacement across the cardiac cycle, while low tissue contrast further obscures its endocardial boundaries\. Expert echocardiographers navigate these challenges through a hierarchical cognitive workflow, sequentially addressing three fundamental questions:What is the target? Where is it now? Where does the boundary lie? Yet existing methods predict masks end\-to\-end from temporal features without explicitly modeling this cognitive process\. We propose Hierarchical Cognitive Decomposition \(HCD\), which decomposes the segmentation task into three stages that emulate this expert interpretation workflow\. To capture invariant target identity amid changing appearances, Static Identity Anchoring \(SIA\) anchors the first annotated frame as a semantic reference, enabling stable recognition across the cardiac cycle\. To maintain spatial focus despite inter\-frame motion, Adaptive Gaze Prior \(AGP\) converts the previous frame's prediction into a spatial attention prior that localizes the current target position\. To resolve boundary ambiguity under low tissue contrast, Structural Boundary Perception \(SBP\) extracts multi\-scale boundary cues within the localized region\. On the CAMUS and EchoNet\-Dynamic benchmarks, HCD achieves state\-of\-the\-art performance with only 1\.35M trainable parameters \(out of 35\.2M total\) at 68 FPS, demonstrating that explicitly encoding clinical cognitive priors into network design yields both effective and efficient segmentation\.

## Cognitive constraints and thalamocortical architecture explain systematic biases and neural signatures in human hierarchical decision\-making

**Authors:** Mien B Wang; Liu Mengxing; Kai Hwang; Michael Halassa

**ID:** 155926\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155926

[Paper](<https://openreview.net/forum?id=1lsYyvQ1i2>) | [PDF](<https://openreview.net/pdf?id=1lsYyvQ1i2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155926>)

Human cognition operates under capacity limitations, requiring computational adaptations for solving complex tasks\. Although such adaptations have been described algorithmically, their neural substrates and mechanistic implementations remain poorly understood\. Here, we study a hierarchical decision\-making task in which subjects must simultaneously infer latent rule changes and resolve sensory uncertainty\. By comparing human behavior with Bayesian observer models, we identify three systematic deviations: humans make decisions hierarchically, persist in the previous context after a context switch, and preferentially explore a new context within the same sensory modality\. We argue that these deviations are jointly explained by a cognitive\-constraint perspective in which hierarchical decisions are less cognitively demanding and switching context or modality incurs additional cost\. Incorporating these constraints substantially improves behavioral fits and reveals correlated subject\-level context and modality stickiness parameters, suggesting a shared underlying cost mechanism\. We then asked how neural representations support hierarchical decisions\. Because hierarchical decisions require selecting a latent context before choosing an action, context representations provide a natural substrate for reducing the effective decision space\. Neuroimaging data revealed that context information is represented in mediodorsal thalamus, consistent with a role for thalamus in task\-state compression\. Motivated by the context signal in thalamus, we trained a thalamocortical recurrent neural network in which a thalamic module and faster corticothalamic plasticity provided an inductive bias for task compression, while switch\-dependent working\-memory noise instantiated switching costs\. These constrained networks better matched human behaviorial bias than standard task\-optimized networks and reproduced key neural signatures observed in the data, including context encoding in mediodorsal thalamus and cue/rule representations in prefrontal cortex\. Together, these results suggest that structured biases in hierarchical decision\-making arise from cognitive constraints and identify thalamocortical dynamics as a candidate mechanism for efficient task\-state inference\.

## On Observation Time for Recovering Latent Hawkes Networks

**Authors:** Jonas Linkerhägner; Michele Bortolasi; Lorenzo Baldassari; Maarten V\. de Hoop; Ivan Dokmanić

**ID:** 148999\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148999

[Paper](<https://openreview.net/forum?id=tZwHSbbaof>) | [PDF](<https://openreview.net/pdf?id=tZwHSbbaof>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148999>)

Dynamics of interacting systems in engineering, society, and nature often evolve over latent networks that govern which entities can interact\. We study the problem of inferring these networks from event\-based observations, which arise naturally in finance, seismology, and neuroscience\. While there is substantial algorithmic work addressing this important problem, theoretical results are scarce\. In this paper we ask the following fundamental question: what is the minimum time that one must observe the dynamics in order to exactly recover the underlying network, as a function of the number $d$ of interacting entities? For a class of stationary Hawkes processes with sparse, weak interactions, we prove that an observation time of order $\\log d$ is sufficient and necessary\. For the upper bound we construct a two\-stage estimator that uses clipped and binned event data for screening, followed by a least\-squares refinement, and apply concentration bounds derived from the Poisson cluster representation\. For the lower bound we combine Fano’s inequality with Jacod’s Girsanov formula for point processes on a suitable subclass of networks\.

## AnaDiffusion: Anatomically Compositional Latent Diffusion for Controllable 3D Brain MRI Generation

**Authors:** Tracy Han; Lulin Liu; Bangya Liu; Yuanhao Cai; Nuo Chen; Jade Wang; Ziqian Xie; Chenyu You; Shuiwang Ji; Degui Zhi; Zhiwen Fan

**ID:** 150996 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=diicBKjM0w>) | [PDF](<https://openreview.net/pdf?id=diicBKjM0w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150996>)

3D brain MRI generation has made significant advances for medical imaging, simulation, and controllable anatomical analysis\. However, existing generative models typically synthesize 3D volumes monolithically, often overlooking regional anatomical structures and limiting local controllability\. To address these limitations, we introduce AnaDiffusion, an anatomically compositional latent diffusion framework that factorizes the generation process into distinct, anatomically meaningful regions followed by part\-to\-whole assembly and global refinement\. Our approach trains part diffusion models first to capture local structural priors\. Then, we inject assembled anatomical composite of parts into whole\-brain latent and continue denoising\. This mechanism enables the model to resolve global context while preserving the injected anatomy\. As a result, AnaDiffusion outputs both explicit part assets and a globally coherent volume, enabling controllable part editing without requiring additional dense segmentation masks at inference time while maintaining coherent part\-to\-whole brain structure\. On ADNI, AnaDiffusion achieves the lowest FID across the whole brain, left/right hemispheres, cerebellar\-brainstem complex, and seam regions, while also reducing Cohen's d for ventricles, cerebellum, and brainstem\. In localized editing experiments, paired MS\-SSIM shows high target transfer and off\-target preservation, supporting controllable part replacement with limited non\-target anatomical drift\.

## One\-Time Soft Alignment Enables Resilient Learning without Weight Transport

**Authors:** Jeonghwan Cheon; Jaehyuk Bae; Se\-Bum Paik

**ID:** 154791 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AvMF6ujTNu>) | [PDF](<https://openreview.net/pdf?id=AvMF6ujTNu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154791>)

Backpropagation is the cornerstone of deep learning, but its reliance on symmetric weight transport and global synchronization makes it computationally expensive and biologically implausible\. Feedback alignment offers a promising alternative by approximating error gradients through fixed random feedback, thereby avoiding symmetric weight transport\. However, this approach often struggles with poor learning performance and instability, especially in deep networks\. Here, we show that a one\-time soft alignment between forward and feedback weights at initialization enables deep networks to achieve performance comparable to backpropagation, without requiring weight transport during learning\. This simple initialization condition guides stable error minimization in the loss landscape, improving network trainability\. Spectral analyses further reveal that initial alignment promotes smoother gradient flow and convergence to flatter minima, resulting in better generalization and robustness\. Notably, we also find that allowing moderate deviations from exact weight symmetry can improve adversarial robustness compared to standard backpropagation\. These findings demonstrate that a simple initialization strategy can enable robust and effective learning in deep networks without dynamic weight transport, providing a resource\-efficient alternative to standard backpropagation\.

## A latent control model for realistic rodent motion

**Authors:** Aidan Sirbu; Charles Y Zhang; Yuanjia Yang; Bence Olveczky; Talmo Pereira; Blake Richards

**ID:** 148187 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zebI1xXFB1>) | [PDF](<https://openreview.net/pdf?id=zebI1xXFB1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148187>)

The development of embodied models of animal behavior is a major goal of the neuro\-AI community\. Embodied models will enhance our ability to make direct comparisons between biological and artificial agents\. To make such comparisons effective, though, we need embodied models that actually move like animals\. Previous work has developed virtual animal bodies and techniques for training realistic motion through imitation\. However, to\-date, there is no system for embodied animal modeling that produces natural movements both during trained, goal\-directed behavior, and during exploration driven by random generation\. Here, we introduce Simulated Control via Augmented Motor Priors for Embodied Reinforcement learning \(SCAMPER\), a system for training an embodied virtual rat model, enabling natural movements during both goal\-directed behavior and random exploration\. SCAMPER uses a variational architecture with two distinct priors, a motion prior for control and a behavior prior for exploration\. We show that combining both of these priors allows SCAMPER to generate realistic behavior during exploration and exploit the task structure effectively\. As well, SCAMPER can learn from sparse rewards as a result of the diverse movements induced by the behavior prior, allowing the system to model realistic sparse reward tasks from experimental neuroscience\. Altogether, SCAMPER provides the neuro\-AI community with an effective new system for training embodied models of rodents on realistic tasks\.

## The Agentic Oversight Tax:  Human Supervision of AI Agents Has a Cost that Must be Accounted For

**Authors:** Olivier Oullier

**ID:** 140110 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Y4hAbPn1J>) | [PDF](<https://openreview.net/pdf?id=7Y4hAbPn1J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140110>)

This position paper argues that human supervision of AI agents imposes a composite cognitive, affective and organizational cost that no existing framework jointly captures\. We introduce the Agentic Oversight Tax \(AOT\): the aggregate burden imposed on a human supervisor by the structural mismatch between the operating characteristics of one or more AI agents and the finite neurocognitive capacities of human oversight\. AOT decomposes into four measurable pillars: \(i\) monitoring time, \(ii\) handoff repair events, \(iii\) audit production effort and \(iv\) recovery effort under staged failures\. We anchor each pillar in documented supervision failures from 2024 to 2026 and cross\-validate against the MAST taxonomy of 1,600 multi\-agent system breakdowns\. We establish discriminant validity against 5 adjacent frameworks by identifying three phenomena all five structurally exclude: attribution burden, accountability gap and skill atrophy\. Three falsifiable predictions distinguish AOT from these constructs\. A three\-tier measurement architecture \(telemetry, self\-report, neurophysiological sensing\) specifies how the pillars can be assessed\. We show that agentic AI architectures modeled on Kahneman’s System 1/System 2 metaphor generate an attribution bias that AOT instruments must control for\. A pre\-registered meta\-analysis of 100\+ human\-AI experiments shows that the net negative utility threshold AOT defines is already crossed on average in decision\-making tasks\. Governance frameworks mandating human oversight without measuring its cost cannot verify whether that oversight remains effective\.

## Brain2voice 2\.0: High\-performance voice synthesis brain\-computer interface

**Authors:** Maitreyee Wairagkar; Aparna Srinivasan; Nicholas S Card; Tyler Singer\-Clark; Xianda Hou; Carrina Iacobacci; Lee Miller; Leigh Hochberg; David Brandman; Sergey D Stavisky

**ID:** 148803\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148803

[Paper](<https://openreview.net/forum?id=v1KHSSdzcM>) | [PDF](<https://openreview.net/pdf?id=v1KHSSdzcM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148803>)

_Abstract unavailable from the accessible public sources._

## Scaling Laws and Tradeoffs in Recurrent Networks of Expressive Neurons

**Authors:** Aaron Spieler; Georg Martius; Anna Levina

**ID:** 148161\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148161

[Paper](<https://openreview.net/forum?id=zpewdRsVpA>) | [PDF](<https://openreview.net/pdf?id=zpewdRsVpA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148161>)

_Abstract unavailable from the accessible public sources._

## Standing on the Shoulders of Giants: Rethinking EEG Foundation Model Pretraining via Multi\-Teacher Distillation

**Authors:** Chenqi Li; Yu Liu; Shuo Zhang; Timothy Denison; Tingting Zhu

**ID:** 150310 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j4s4yXToW0>) | [PDF](<https://openreview.net/pdf?id=j4s4yXToW0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150310>)

Pretraining for electroencephalogram \(EEG\) foundation models has predominantly relied on self\-supervised masked reconstruction, a paradigm largely adapted from and inspired by the success of vision and language foundation models\. However, unlike images and text, EEG datasets are notoriously expensive to collect and characterized by low signal\-to\-noise ratio\. These challenges introduce difficulties in scaling the EEG foundation models and capturing the underlying neural semantics through reconstruction\. In this work, we ask the question: can we stand on the shoulders of well\-established foundation models from well\-represented modalities to bootstrap the pretraining of EEG foundation models? We first demonstrate that mainstream foundation models, such as those from vision and time series, transfer surprisingly well to EEG domain\. Motivated by this observation, we propose the multi\-teacher distillation pretraining \(MTDP\) framework for pretraining EEG foundation models via two\-stage multi\-teacher distillation\. In the first stage, we introduce a learnable gating network to fuse representations from diverse teachers \(e\.g\., DINOv3 and Chronos\) via a masked latent denoising objective\. In the second stage, we distill the fused representation into an EEG foundation model\. Extensive evaluations across 2 backbone architectures, 9 downstream tasks and 12 datasets demonstrate that multi\-teacher distillation pretraining consistently outperforms self\-supervised pretraining for EEG foundation model and remains competitive even when the pretraining data is reduced to 25%\.

## From sequences to schemas: low\-rank recurrent dynamics underlie abstract relational representations

**Authors:** Vezha Boboeva; Alberto Pezzotta; George Dimitriadis; Athena Akrami

**ID:** 155707\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155707

[Paper](<https://openreview.net/forum?id=3XO2JXx10F>) | [PDF](<https://openreview.net/pdf?id=3XO2JXx10F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155707>)

A hallmark of intelligent behavior is the ability to extract abstract relational structure from temporal sequences \-\- recognizing, for instance, that aab, ccd, and eef all follow the same underlying pattern, regardless of the specific elements involved\. This capacity, observed across species and sensory modalities, is thought to underlie the formation of cognitive schemas: compressed internal models that support rapid generalization to novel experiences\. Yet the neural circuit mechanisms by which such abstract, identity\-independent representations emerge from sequential experience remain largely unknown\. Here, we investigate this question using Recurrent Neural Networks \(RNNs\) as mechanistic models of neural circuits, trained to classify sequences based on their latent algebraic patterns \(e\.g\., aab, aad $\\to$ AAB; aba, aca $\\to$ ABA\) without supervision on intermediate transitions\. We demonstrate that RNNs learn low\-dimensional representations that mirror the hierarchical generative structure of the sequences, and that this abstraction is mechanistically supported by the emergence of low\-rank recurrent connectivity\. The leading singular component of the recurrent weights integrates relational transition information \-\- whether consecutive tokens are the same or different \-\- across time, driving the formation of a structured, tree\-like geometry in the population state space\. Through singular vector ablation, we establish a causal role for this component: removing it selectively erases memory for earlier transitions while leaving local, single\-step sensitivity intact\. Finally, while RNNs trained on next\-token prediction do not acquire these abstract representations, transferring the low\-rank scaffold learned from classification significantly accelerates learning and improves generalization \-\- an effect specific to the abstract structure of the scaffold rather than generic statistical pretraining\. These findings offer a computational account of how task demands shape recurrent connectivity to support temporal abstraction, with implications for schema formation in biological brains\.

## The Neural Race Model

**Authors:** Omar Ghezzi; Alessandro D’Amelio; Vittorio Cuculo; Rita Cucchiara; Giuseppe Boccignone

**ID:** 152312\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152312

[Paper](<https://openreview.net/forum?id=U280pm3mcR>) | [PDF](<https://openreview.net/pdf?id=U280pm3mcR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152312>)

Perceptual decisions unfold in time: noisy evidence is integrated until a commitment threshold is reached, jointly producing a choice and a reaction time\. Classical race models capture this mechanism through simple parametric drift and diffusion, but cannot represent how rich, high\-dimensional stimuli shape accumulation on individual trials\. We introduce the $\\textbf\{Neural Race Model\}$ \(NRM\), a stimulus\-conditional neural stochastic differential equation in which one accumulator per alternative races towards a learnable, stimulus\-dependent threshold\. Drift, diffusion, and threshold are parameterised by neural networks conditioned on a stimulus embedding, allowing both accumulation dynamics and decision urgency to vary across trials\. The model is trained end\-to\-end on the joint reaction\-time\-and\-choice likelihood via a smooth surrogate for the discontinuous first\-passage event, combined with Monte Carlo trajectory averaging and gradient propagation through the stochastic adjoint\. The surrogate recovers the classical hard threshold in the appropriate limit and is removed at test time\. Each component admits a natural correspondence with elements of the primate decision\-making circuit, preserving the mechanistic interpretability of classical models\. We evaluate the NRM on multiple perceptual decision\-making benchmarks against classical sequential\-sampling and image\-computable reaction\-time models\. Across tasks and metrics, the NRM tracks the human noise ceiling more closely than all baselines, demonstrating that stimulus\-conditional stochastic accumulation and end\-to\-end differentiability can be achieved within a single, principled framework\. Code will be publicly released\.

## CAREBench: Evaluating LLMs' Emotion Understanding by Assessing Cognitive Appraisal Reasoning

**Authors:** ZHAOYUE SUN; Hainiu Xu; Andero Uusberg; James Gross; Petr Slovak; Yulan He

**ID:** 139329\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139329

[Paper](<https://openreview.net/forum?id=WwTZWhjAvk>) | [PDF](<https://openreview.net/pdf?id=WwTZWhjAvk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139329>)

Emotion understanding is a core capability for LLMs to interact effectively with humans, yet existing evaluation paradigms rely on discrete emotion label prediction and fail to capture the cognitive processes underlying emotion generation\. Grounded in appraisal theory, we introduce CAREBench, the first benchmark with complete inferential chain annotations from both first\- and third\-person perspectives on real\-world narratives, spanning appraisal reasoning, appraisal ratings, and multi\-label emotion annotation\. We propose a process\-level evaluation framework and conduct systematic experiments across six LLMs organized around four research questions\. We find that stronger models match or surpass human observers on certain tasks, yet fall short on appraisal reasoning and positive emotion recognition; performance across chain steps and sensitivity to appraisal interventions exhibit dissociations across models; and current models have not internalized the mechanisms needed to capture human subjective heterogeneity\. These findings suggest that downstream emotion prediction metrics may overestimate LLMs' true emotion understanding, and CAREBench provides a foundation for more diagnostically informative evaluation of LLMs' affective cognitive capabilities\.

## A Scientific Claim Stability Framework for Evaluating MRI Morphometry Pipelines

**Authors:** Duy\-Cat Can; Dang\-Duat Tran; Anh\-Khang Nguyen; Bao Tran; Trung\-Hieu Do; Van T Nguyen; Duy\-Thanh VU; Oliver Y Chén; Hoang\-Quynh Le

**ID:** 139330\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139330

[Paper](<https://openreview.net/forum?id=WgIesR9ByR>) | [PDF](<https://openreview.net/pdf?id=WgIesR9ByR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139330>)

MRI morphometry pipelines are often evaluated by measurement agreement or downstream accuracy, yet their scientific value depends on the conclusions they support\. This creates a gap: two pipelines may look similar at the feature level while supporting different conclusions about aging, cognitive decline, or neurodegeneration\. To bridge this disparity, here we propose Scientific Claim Stability \(SCS\), a reusable claim\-centric evaluation framework that converts region\-of\-interest \(ROI\) morphometry tables into interpretable claim cards and tests whether each claim remains supported under realistic perturbations\. To demonstrate the efficacy of SCS, we evaluate it on 10,370 MRI scans from three datasets and five cohorts, generating 2,783 claim cards and evaluating 89 claim\-family pairs across dataset, pipeline, atlas, feature\-family, and target shifts\. SCS identifies claims that are stable, transferable, or fragile, and reveals high\-concordance fragile\-support cases where evidence vectors remain similar while supporting regions change\. To assess claim plausibility, clarity, faithfulness, usefulness, and caution level, we further implement and compare an expert \(including geriatrics, neuroscience, and radiology\) review workflow and an LLM \(including ChatGPT and Gemini\) review workflow\. Our results suggest claim\-level evaluation as a practical standard for auditing MRI morphometry pipelines without requiring a universal gold standard\.

## Handwriting decoding as a challenging motor task for EEG Foundation Models

**Authors:** Srinivas Ravishankar; Ishayu Ghosh; Nora Zajzon; Teng \(Simon\) Fei; Virginia de Sa

**ID:** 139358\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139358

[Paper](<https://openreview.net/forum?id=UmBkSWTw9t>) | [PDF](<https://openreview.net/pdf?id=UmBkSWTw9t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139358>)

Recent attempts at creating  Foundation Models \(FMs\) for Electroencephalography \(EEG\) have achieved state\-of\-the\-art performance on multiple tasks including Motor Imagery \(MI\)\. These MI tasks have typically involved coarse classification between imagined limb movements\. However, the development of foundation models necessitates diverse datasets, both for pretraining and evaluating the progress of these models\. In this work, we propose handwriting decoding as a challenging motor task for FMs\. We show that several existing datasets are affected by confounds, and introduce a dataset that more rigorously evaluates models\. On this dataset, we find that current FMs, despite showing SOTA performance in multiple MI datasets are outperformed by smaller task\-specific models\. We also highlight challenges specific to EEG\-based handwriting decoding to inform future work\. In our 4\-letter classification task, we show that  \(a\) Knowledge of movement\-onset is crucial to reported decoding performance in prior works, with average performance across subjects dropping from $41\.3\\%$ to $32\.4\\%$\. \(b\) Increasing test\-time signal quality provides significant performance improvements \($45\\%$ to $78\\%$ in our best subject\) compared to scaling training data with single\-trial EEG\.  \(c\) While scaling training data steadily improves decoding performance, existing FMs do not outperform specialist models in handwriting decoding\. We make our code and dataset available at https://anonymous\.4open\.science/r/EEG\-Handwriting\-BCI\-DFCD

## Mind the Parameters: Lightweight and Efficient Brain Visual Decoding with Shared Tensor Cores

**Authors:** Haodong Jing; Panqi Yang; Rongchao Zhang; Junhao Jia; Hoi Leong Lee; Zhipeng Liu; Yongqiang Ma; Nanning Zheng

**ID:** 154012\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154012

[Paper](<https://openreview.net/forum?id=Gs4DaL9e6C>) | [PDF](<https://openreview.net/pdf?id=Gs4DaL9e6C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154012>)

Linking brain activity to computational representations of visual perception is a central goal at the intersection of neuroscience and machine learning\. However, cross\-subject decoding from fMRI remains challenging because neural responses vary substantially across individuals, while existing methods often rely on subject\-specific fine\-tuning or parameter\-heavy decoders\. This limits generalization to unseen subjects and hinders efficient deployment\. We propose BrainTC\-\-Brain Tensor Cores, a lightweight framework for cross\-subject brain visual decoding based on shared tensor decomposition\. BrainTC separates shared functional structure from subject\-specific variation through a shared tensor\-core alignment module that maps ROI\-wise responses into a common functional space with shared tensor bases and residual subject factors\. This supports both zero\-shot decoding for unseen subjects and few\-shot adaptation by updating only residual parameters\. We then develop a Brain Tensor\-Transformer with tensorized attention to compactly model inter\-ROI dependencies, together with a hierarchical neural\-to\-visual mapping module for multi\-level visual prediction\. Experiments show that BrainTC achieves competitive cross\-subject decoding performance with substantially improved parameter efficiency, particularly in zero\-shot generalization to unseen subjects\.

## EgoStream: A Diagnostic Benchmark for Streaming Episodic Memory in Egocentric Vision

**Authors:** Rosario Forte; Giuseppe Lando; Antonino Furnari

**ID:** 139373\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139373

[Paper](<https://openreview.net/forum?id=UDecnw8V7B>) | [PDF](<https://openreview.net/pdf?id=UDecnw8V7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139373>)

Continuous episodic memory is a core capability for autonomous agents operating in dynamic, real\-world environments, yet current streaming video benchmarks provide limited tools for diagnosing what models remember and for how long\. We introduce Egostream, a diagnostic benchmark for streaming episodic memory evaluation in egocentric vision\. \\egostream organizes 2,250 curated questions along seven cognitive dimensions: detail, spatial, temporal, event, social, causal, and prospective memory\. We introduce the Answer Validity Window \(AVW\), which specifies the temporal span an answer remains valid as the observed scene evolves\. This allows us to expand the questions into 8,528 recall\-conditioned evaluations, enabling controlled testing from instant to ultra\-long\-term recall while separating genuine model forgetting from natural world\-state changes\. We rigorously establish baseline performance through a unified streaming MLLM framework that compares several state\-of\-the\-art memory\-management mechanisms, covering sliding windows, attention sinks, KV\-cache pruning, merging, and offloading\.   Experiments within a unified Qwen3\-VL backbone reveal that comparable aggregate accuracies mask starkly different memory profiles\. For instance, token pruning preserves fine\-grained details and temporal structure significantly better than token merging, while quantized offloading rescues ultra\-long\-term recall\. Ultimately, all mechanisms operate well below real\-time \(&gt;1s per frame\), and top performing methods ceil at about 45\\% accuracy, exposing critical gaps in current architectures\. Egostream provides the diagnostic testbed needed to close these gaps\.

## Vibe\-Spike: An Energy\-Preserving EEG Foundation Model Through the Landscape of Neural Coherence

**Authors:** Jun Ye; yuting li; Tingting Dan; Guorong Wu

**ID:** 154655\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154655

[Paper](<https://openreview.net/forum?id=C1hqOzVwCn>) | [PDF](<https://openreview.net/pdf?id=C1hqOzVwCn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154655>)

Current foundation models of electroencephalography \(EEG\) sought to characterize the fluctuations in neural signals, yet this objective stands fundamentally at odds with the intrinsic physiological mechanisms governing brain activity\. As with their LLM predecessors, these models pack millions of neurons, even those contributing negligibly small weights, yielding a computational footprint incompatible with resource\-constrained portable brain\-computer interfaces \(BCIs\)\. To overcome these challenges, we propose \*Vibe\-Spike\*, an energy\-preserving and biologically\-realistic EEG foundation model operating in the regime of oscillatory neural synchronization\. Drawing on principles from cognitive neuroscience, our foundation model is designed to recover the masked EEG signals through the transient spikes of spatially coupled neurons, from which self\-organized cortical synchronization \(aka\. \*brain rhythms\*\) emerges to reciprocally modulate ongoing neural firings\. Under the hood, we introduce a macro\-micro learning mechanism that bridges two scales of neural computation: lower layers capture neural oscillations via a spiking neural network \(SNN\), while upper layers model oscillatory synchronization across large neuronal populations, with cross\-scale interactions learned end\-to\-end\. Taken together, our \*Vibe\-Spike\* sheds new light on learning intrinsic representation of functional neural fluctuations\. We pre\-train the model to reconstruct segmented EEG signals directly from the synchronized spiking representations using a purely self\-supervised objective on a diverse corpus of \*\*75\*\* public datasets\. To demonstrate its universal representational power, we conduct massive\-scale evaluations across ten heterogeneous downstream datasets, including clinical pathology, sleep staging, and cognitive assessment\. \*Vibe\-Spike\* not only facilitates deployment on portable edge devices through its lightweight architecture and energy\-preserving inference, but also provides profound neuroscience insights\. By further capturing pre\- and post\-synaptic firing, \*Vibe\-Spike\* unlocks a new pathway for characterizing effective connectivity and the oscillatory synchronization that underpins cognition\.

## Direct Conditioning of Audio Diffusion Transformers on fMRI Reveals Cortical Contributions to Sound Reconstruction

**Authors:** Matteo Ciferri; Tonio Weidler; Matteo Ferrante; Nicola Toschi; Elia Formisano

**ID:** 152995\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152995

[Paper](<https://openreview.net/forum?id=OlCa72ym7P>) | [PDF](<https://openreview.net/pdf?id=OlCa72ym7P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152995>)

Reconstructing audio from brain activity remains challenging\. A key limitation lies in current audio diffusion models, which are primarily designed for text\-based conditioning and lack mechanisms to incorporate non\-linguistic continuous signals such as neural responses\. While recent work in the visual domain has explored direct conditioning on brain activity, this approach has not yet been extended to audio diffusion models\. We introduce a framework that directly guides a latent audio diffusion model with fMRI signals, avoiding intermediate feature prediction for the conditioning stage\. Central to our approach is a transformer\-compatible adapter that enables the integration of non\-linguistic representations into the cross\-attention layers of diffusion transformers \(DiTs\)\. Although motivated by neural decoding, this adapter provides a general mechanism for conditioning audio diffusion models on arbitrary continuous inputs, not inherently limited to neural signals\. We demonstrate consistent improvements over baselines, including two\-stage fMRI\-to\-latent conditioning, across both acoustic and semantic evaluation metrics\. In addition, we introduce a fidelity metric grounded in a computational model of auditory neural processing, which allows us to quantify the contribution of individual auditory cortical regions to reconstructed audio representations\.

## Representing Part\-Whole Hierarchy with Nested Neuronal Coherence

**Authors:** Hao Zheng; Hui Lin; Rong Zhao

**ID:** 150391\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150391

[Paper](<https://openreview.net/forum?id=iPNj9AYpKu>) | [PDF](<https://openreview.net/pdf?id=iPNj9AYpKu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150391>)

Human vision flexibly extracts part\-whole hierarchies from visual scenes, but representing such structures remains a key challenge for neural networks\. Inspired by the neural syntax hypothesis in neuroscience, we propose a framework for representing hierarchical part\-whole relationships through nested neuronal coherence, characterized by its continuous and distributed nature\. Nested neuronal coherence refers to dynamical states where distributed activations are temporally correlated to form cell assembly sequences across timescales, argued to represent neural syntax\. Building on this framework, we develop a cortical\-inspired hybrid model, Composer, which dynamically achieves emergent nestedness when given images\. To evaluate the emergent hierarchy, we create four synthetic datasets and three quantitative metrics, demonstrating the model’s ability to parse scenes of varying complexity\. Overall, our work advances a systematic paradigm spanning representation, implementation, and evaluation toward building human\-like vision in neural networks\.

## FracEncoder: Towards Adaptive Cognitive Trajectories via Fractional\-Order Context Encoding

**Authors:** Lulu Wang; Shengling Wang; Anlin Chen; Ke Chao; Weicheng Wang

**ID:** 148356\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148356

[Paper](<https://openreview.net/forum?id=yUT3YSeo8K>) | [PDF](<https://openreview.net/pdf?id=yUT3YSeo8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148356>)

_Abstract unavailable from the accessible public sources._

## Prototypes of the Mind: A Unified Framework for Probing the Visual Brain

**Authors:** Shi Chen; Seoyoung Ahn; Doris Tsao

**ID:** 153745\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153745

[Paper](<https://openreview.net/forum?id=J3DGy43GZZ>) | [PDF](<https://openreview.net/pdf?id=J3DGy43GZZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153745>)

_Abstract unavailable from the accessible public sources._

## Predictive Representation Learning for Partially Observed Neural Dynamics

**Authors:** Xinyi Li; Zhichao Liang; Hongjun Jiang; Yian Zhu; Guanyi Zhao; Xuejian Yang; Xiaoqi Chen; Kexin Lou; Quanying Liu

**ID:** 151732\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151732

[Paper](<https://openreview.net/forum?id=YVQoWXsmt9>) | [PDF](<https://openreview.net/pdf?id=YVQoWXsmt9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151732>)

In long\-term multi\-session neural recordings, the same latent population dynamics are often observed through changing subsets of neural channels due to electrode drift, signal instability, or session\-dependent recording variability\. This creates a partially observed system\-identification problem: each session provides only an incomplete view of a shared dynamical system, and missing channels are not merely absent inputs but unobserved variables coupled to the same latent dynamics\. Existing approaches often rely on observation\-pattern\-specific mapping, which treats missing channels passively and leaves the shared latent dynamics weakly constrained\. We propose CHAMA \(CHannel\-Aware Masked Attention\), a mask\-conditioned predictive representation learning framework for identifying shared neural dynamics under heterogeneous channel availability\. CHAMA introduces a single global observation interface conditioned on channel\-availability masks, allowing observed and unobserved channels to jointly constrain latent dynamics\. The key idea is bidirectional: missing channels impose structural constraints on the latent representation, while the learned latent dynamics enable principled recovery of missing activity\. To improve identifiability under sparse observations, CHAMA aggregates causal temporal windows, effectively trading temporal context for missing spatial information\. Across synthetic dynamical systems and real multi\-session neural recordings, CHAMA improves missing\-channel completion, forecasting, latent dynamical fidelity, and downstream behavioral decoding over conditional adapter, zero\-padding, and masked\-autoencoding baselines\. These results show that dynamics\-aware recovery preserves globally consistent and behaviorally relevant structure beyond point\-wise reconstruction accuracy\. The source code is available at: \\url\{https://anonymous\.4open\.science/r/CHAMA\-D691\}\.

## BRIDGE: Brain\-Vision Representation Integration through Depth and Granularity Encoding

**Authors:** Chenyuan Hong; Binghao Ye; Yufei Guo; Guoqi Li

**ID:** 155233\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155233

[Paper](<https://openreview.net/forum?id=7GEZxlwjaN>) | [PDF](<https://openreview.net/pdf?id=7GEZxlwjaN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155233>)

Decoding visual content from non\-invasive brain signals remains challenging because neural responses evolve over time whereas images are typically static\. Most existing methods align an entire neural response window to a single final visual embedding, this overlook a fundamental representational mismatch: brain signals reflect both early perceptual and later integrative representations, whereas the final visual embedding is biased toward high\-level semantics\. Therefore, we propose BRIDGE, a brain\-vision representation integration framework that aligns two modalities through Visual Depth Encoding and Brain Granularity Encoding\. On the visual side, BRIDGE extracts and fuses CLIP representations from multiple depths, producing an alignment target that preserves low\-level and high\-level information\. On the brain side, instead of treating the whole temporal window as homogeneous and obscuring temporally heterogeneity, BRIDGE explicitly partitions stimulus\-evoked EEG/MEG responses into a small number of temporally ordered stages and adaptively pools them\. The resulting brain and visual embeddings are trained in a shared latent space by contrastive learning and can further support brain\-to\-image generation through a pretrained diffusion prior\. Experiments on THINGS\-EEG and THINGS\-MEG demonstrate that BRIDGE achieves strong retrieval and generation performance\. Ablation studies further confirm the complementary benefits of depth\-wise visual aggregation and temporal brain factorization\.

## FETTUCCINE: Fast and efficient brain\-to\-text decoding on mobile devices

**Authors:** Jonathan McCart; Pranav Deevi; Mehdi Azabou; Nanda H Krishna; Caleb A McKinney; Nicholas S Card; Sergey D Stavisky; Chethan Pandarinath

**ID:** 150728\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150728

[Paper](<https://openreview.net/forum?id=fqsWkQnA9w>) | [PDF](<https://openreview.net/pdf?id=fqsWkQnA9w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150728>)

Recent advances in speech neuroprostheses have enabled new communication avenues for people who have lost the ability to speak due to neurological illness or injury\. These systems can decode neural activity during attempted speech into text by relying on language priors to achieve high decoding accuracy\. This performance currently comes at the cost of using a compute\-intensive language modeling stack, presenting a major bottleneck for real\-world use\. Further, current language models incur highly variable and disruptive inference latencies, limiting communication throughput and preventing users from reliably participating in natural conversation\. We introduce FETTUCCINE, an end\-to\-end brain\-to\-text framework that leverages the speed and portability of automatic speech recognition \(ASR\) models to address the aforementioned practical challenges, while achieving usable \(&lt;10%\) word error rates \(WER\), efficient adaptation to neural non\-stationarities, and reliable performance on mobile devices\. When evaluated using publicly available data from an intracortical speech neuroprosthesis user, FETTUCCINE outperforms previous end\-to\-end methods, achieving as low as 4\.39% WER\. Most notably, our models successfully run on a commercially\-available mobile device with throughput reaching up to 370x real\-time, providing the first demonstration of brain\-to\-text decoding on a mobile device\. We also show that our models can be successfully finetuned to extend usable performance to future days\. Beyond performance, our approach enables localization of the neural features most relevant for decoding via gradient\-based salience maps, which we show align with well\-established physiological priors across different ASR model families\. Taken together, our results show that FETTUCCINE overcomes core infrastructural and computational barriers, yielding a new class of portable brain\-to\-text communication\.

## Vibe\-Spike: An Energy\-Preserving EEG Foundation Model Through the Landscape of Neural Coherence

**Authors:** Jun Ye; yuting li; Tingting Dan; Guorong Wu

**ID:** 154655\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154655

[Paper](<https://openreview.net/forum?id=C1hqOzVwCn>) | [PDF](<https://openreview.net/pdf?id=C1hqOzVwCn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154655>)

Current foundation models of electroencephalography \(EEG\) sought to characterize the fluctuations in neural signals, yet this objective stands fundamentally at odds with the intrinsic physiological mechanisms governing brain activity\. As with their LLM predecessors, these models pack millions of neurons, even those contributing negligibly small weights, yielding a computational footprint incompatible with resource\-constrained portable brain\-computer interfaces \(BCIs\)\. To overcome these challenges, we propose \*Vibe\-Spike\*, an energy\-preserving and biologically\-realistic EEG foundation model operating in the regime of oscillatory neural synchronization\. Drawing on principles from cognitive neuroscience, our foundation model is designed to recover the masked EEG signals through the transient spikes of spatially coupled neurons, from which self\-organized cortical synchronization \(aka\. \*brain rhythms\*\) emerges to reciprocally modulate ongoing neural firings\. Under the hood, we introduce a macro\-micro learning mechanism that bridges two scales of neural computation: lower layers capture neural oscillations via a spiking neural network \(SNN\), while upper layers model oscillatory synchronization across large neuronal populations, with cross\-scale interactions learned end\-to\-end\. Taken together, our \*Vibe\-Spike\* sheds new light on learning intrinsic representation of functional neural fluctuations\. We pre\-train the model to reconstruct segmented EEG signals directly from the synchronized spiking representations using a purely self\-supervised objective on a diverse corpus of \*\*75\*\* public datasets\. To demonstrate its universal representational power, we conduct massive\-scale evaluations across ten heterogeneous downstream datasets, including clinical pathology, sleep staging, and cognitive assessment\. \*Vibe\-Spike\* not only facilitates deployment on portable edge devices through its lightweight architecture and energy\-preserving inference, but also provides profound neuroscience insights\. By further capturing pre\- and post\-synaptic firing, \*Vibe\-Spike\* unlocks a new pathway for characterizing effective connectivity and the oscillatory synchronization that underpins cognition\.

## Direct Conditioning of Audio Diffusion Transformers on fMRI Reveals Cortical Contributions to Sound Reconstruction

**Authors:** Matteo Ciferri; Tonio Weidler; Matteo Ferrante; Nicola Toschi; Elia Formisano

**ID:** 152995\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152995

[Paper](<https://openreview.net/forum?id=OlCa72ym7P>) | [PDF](<https://openreview.net/pdf?id=OlCa72ym7P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152995>)

Reconstructing audio from brain activity remains challenging\. A key limitation lies in current audio diffusion models, which are primarily designed for text\-based conditioning and lack mechanisms to incorporate non\-linguistic continuous signals such as neural responses\. While recent work in the visual domain has explored direct conditioning on brain activity, this approach has not yet been extended to audio diffusion models\. We introduce a framework that directly guides a latent audio diffusion model with fMRI signals, avoiding intermediate feature prediction for the conditioning stage\. Central to our approach is a transformer\-compatible adapter that enables the integration of non\-linguistic representations into the cross\-attention layers of diffusion transformers \(DiTs\)\. Although motivated by neural decoding, this adapter provides a general mechanism for conditioning audio diffusion models on arbitrary continuous inputs, not inherently limited to neural signals\. We demonstrate consistent improvements over baselines, including two\-stage fMRI\-to\-latent conditioning, across both acoustic and semantic evaluation metrics\. In addition, we introduce a fidelity metric grounded in a computational model of auditory neural processing, which allows us to quantify the contribution of individual auditory cortical regions to reconstructed audio representations\.

## Solving Stochastic Control under Multiplicative and Internal Noise via Constrained Optimization

**Authors:** Ruben Moreno Bote; Francesco Damiani; Dmytro Grytskyy

**ID:** 148806 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uzMEs1gPQ6>) | [PDF](<https://openreview.net/pdf?id=uzMEs1gPQ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148806>)

_Abstract unavailable from the accessible public sources._

## Default Feature Representations of the Cognitive Map

**Authors:** Armin Bazarjani; Payam Piray

**ID:** 154918 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zIIpQP6FM>) | [PDF](<https://openreview.net/pdf?id=9zIIpQP6FM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154918>)

Updating a predictive cognitive map when the environment changes is a central problem for both biological agents and reinforcement learning, yet existing approaches either depend on explicit model knowledge or learn the full state\-indexed map from samples\. We propose Default Feature Representations \(DFR\), a featurized parameterization of predictive cognitive maps in which a fixed feature basis is composed with an operator that encodes the current environment\. We provide two forms for the operator: a model\-based closed form when the structural change between environments is known, and a model\-free temporal\-difference learning rule that recovers the operator from sampled transitions, with provable convergence to the model\-based solution\. The model\-free DFR reconstructs the perturbed map from samples alone, achieves planning performance comparable to the model\-based solution, and substantially outperforms successor\-representation baselines on replanning tasks\. We also show that DFR captures the local remapping of grid cells observed under local environmental change\. By separating the cognitive map into a stable feature basis and a fast\-adapting operator, DFR offers a sample\-based account of how a predictive map can be updated from local experience, mirroring the stability of entorhinal grid fields across environments\.

## Emotion\-Trained Vision Models Do Not Necessarily Learn EEG\-Aligned Facial Dynamics

**Authors:** Mariem Ben Slimen; Hamza Abdelhedi; Vanessa Hadid; Karim Jerbi

**ID:** 150276 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jMlzffZ5UW>) | [PDF](<https://openreview.net/pdf?id=jMlzffZ5UW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150276>)

Facial expressions are one of the main ways humans communicate affect, but they are not static signals\. In natural vision, expressions evolve over time, with facial movements emerging, intensifying, and changing as emotion is expressed\. Prior model\-brain studies based on static images suggest that vision models can capture aspects of face\-related neural representations, but it remains unclear whether artificial vision models capture the temporal EEG dynamics of facial emotion perception\. We test the hypothesis that models trained for facial emotion recognition, especially video\-based or temporally structured models, should show stronger alignment with human EEG dynamics than randomly initialized controls\. We do so by aligning model representations with time\-resolved EEG representational geometry from 25 participants viewing one\-second dynamic facial\-expression videos\. We compare six models spanning static\-image, video\-based, self\-supervised, and vision\-language representations: ResNet18, VGGFace, CNN2D, CNN3D, DINOv2\-temporal, and Qwen2\.5\-VL\. Contrary to this hypothesis, supervised facial\-emotion training does not consistently increase alignment with human EEG dynamics\. In particular, video\-trained and temporally structured emotion models align less with fear\-related EEG geometry than the same architectures with randomly initialized weights, whereas static\-image emotion models show trained\-versus\-random differences close to zero\. These results are robust to stricter noise\-ceiling thresholds and are not explained by actor identity or raw pixel similarity\. Exploratory analyses further suggest that peak alignment is often localized to the first or last sampled video frames, and that fear alignment varies across scalp ROIs by training regime\. Overall, our results challenge the assumption that video\-based emotion supervision automatically yields more brain\-like dynamic representations of facial emotion\.

