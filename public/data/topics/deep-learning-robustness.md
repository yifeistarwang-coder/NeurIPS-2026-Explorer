# Deep Learning / Robustness

深度学习 / 鲁棒性

186 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Neuronal Self\-Adaptation Enhances Capacity and Robustness of Representation in Spiking Neural Networks

**Authors:** Zhuobin Yang; Liao Yu; Yeyao Bao; Lv L Fu; Daqing Guo; Jian Zhang; Xiaohong Li; Yunliang Zang

**ID:** 148196 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zcRb4le7TY>) | [PDF](<https://openreview.net/pdf?id=zcRb4le7TY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148196>)

Spiking Neural Networks \(SNNs\) are promising for energy\-efficient, real\-time edge computing, yet their performance is often constrained by the limited adaptability of conventional leaky integrate\-and\-fire \(LIF\) neurons\. Existing LIF models struggle with restricted information capacity and susceptibility to noise, leading to degraded accuracy and compromised robustness\. Inspired by the dynamic self\-regulation of biological potassium channels, we propose the Potassium\-regulated LIF \(KvLIF\) neuron model\. KvLIF introduces an auxiliary conductance state that integrates membrane potential and spiking history to adaptively modulate neuronal excitability and reset dynamics\. This design extends the dynamic response range of neurons to varying input intensities and effectively suppresses noise\-induced spikes\. We extensively evaluate KvLIF on both static image and neuromorphic datasets, demonstrating consistent improvements in classification accuracy and superior robustness compared to existing LIF models\. Our work bridges biological plausibility with computational efficiency, offering a neuron model that enhances SNN performance while maintaining suitability for low\-power neuromorphic deployment\.

## UniDBO: A Unified Dual\-Branch One\-Step Denoising Framework for Autonomous Driving Scenario Generation

**Authors:** Da Zhao; Yuhang Chen; Jie Sun; Jialin Fan; Jian Sun

**ID:** 149995 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lcbL2baE12>) | [PDF](<https://openreview.net/pdf?id=lcbL2baE12>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149995>)

Scenario generation is essential for training, testing, and safety validation of autonomous vehicles \(AVs\), especially when real\-world data coverage is limited and long\-tail safety\-critical events are rare\. Existing methods face a three\-way trade\-off among open\-loop prediction accuracy, closed\-loop simulation robustness, and inference efficiency\. Autoregressive methods are typically efficient and strong in open\-loop fitting, but they are prone to error accumulation and policy\-induced state\-distribution shift in long\-horizon closed\-loop rollouts\. Diffusion\-based methods provide strong multimodal behavior modeling and competitive generation quality, but iterative denoising substantially increases inference latency and limits simulation throughput\. To address this challenge, we propose UniDBO, a Unified Dual\-Branch One\-step denoising framework for autonomous driving scenario generation\. UniDBO uses a shared scene encoder and two jointly optimized complementary branches with distinct roles: a continuous\-scale branch \(CS\) for open\-loop trajectory fitting and a discrete high\-noise branch \(DHN\) for robust closed\-loop simulation\. Through joint training, UniDBO coordinates open\-loop fitting and closed\-loop robustness while preserving one\-step inference efficiency\. We evaluate UniDBO on multiple benchmarks, including in\-domain open\-loop and closed\-loop evaluation, zero\-shot cross\-domain generalization, and system\-level closed\-loop AV testing in unseen scenarios\. Results show that UniDBO improves the open\-loop/closed\-loop balance while maintaining high inference efficiency, and achieves competitive zero\-shot generalization on the evaluated benchmarks\.

## How Does Cutout Benefit Out\-of\-Distribution Generalization?

**Authors:** Kuo Shi

**ID:** 152989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OocrKgTwpF>) | [PDF](<https://openreview.net/pdf?id=OocrKgTwpF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152989>)

Out\-of\-distribution \(OOD\) generalization aims to improve a model’s generalization capacity using only source data, thereby ensuring reliable performance on unseen domains\. Cutout, a well\-established method that enhances model generalization by randomly masking out square regions of training samples, has shown great success in standard supervised settings\. Despite its seemingly strong con\- nection to OOD generalization, we observe that simply combining Cutout with existing OOD methods yields only marginal benefits or even degrades performance\. Motivated by this empirical finding, we seek a way to make OOD generalization benefit from Cutout\. Our method is inspired by reinterpreting the state\-of\-the\-art hyperspher\- ical prototype learning as a mutual information \(MI\) framework\. Within this framework, we observe that naively applying Cutout to existing OOD methods is equivalent to estimating MI from a single masked subview, which leaves much of Cutout’s potential untapped\. Instead, we apply the MI chain rule to split the original objective into two smaller estimation problems: one encourages the Cutout subview to align closely with the label, while the other drives the full image to capture the residual information unavailable in that subview\. This divide\-and\-conquer strategy fully exploits the Cutout\-generated subview while remaining computationally light\- weight\. Empirically, we demonstrate that our method outperforms competitive baselines on a broad range of OOD benchmarks and achieves superior performance\.

## A Simple Class\-Agnostic Approach to Enhance Fair Adversarial Training

**Authors:** Erh\-Chung Chen; Pin\-Yu Chen; I\-Hsin Chung; Che\-Rung Lee

**ID:** 156125 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Cyh5Wvx03>) | [PDF](<https://openreview.net/pdf?id=0Cyh5Wvx03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156125>)

AI security has become a critical issue as Deep Neural Networks \(DNNs\) are inherently vulnerable to adversarial attacks\. While previous studies have demonstrated that adversarial training is one of the most effective defensive strategies, improvements in robustness often show significant class\-wise disparities\. This has established fair adversarial training, which aims to enhance the robustness of the worst\-performing classes, as a crucial research direction\. Although existing class\-wise approaches can improve performance by adjusting individual class weights, they face severs scalability limitation on large\-scale datasets due to the sparse volume of data available per class\. To mitigate this issue without relying on explicit class\-wise information, we propose a novel tri\-regime optimization framework that fundamentally decouples the distinct sources of adversarial error at the sample level\. Specifically, our method systematically suppresses unlearnable outliers via reliability gating, prioritizes genuine boundary threats through dynamic reweighting, and down\-weights already safe examples to prevent redundant optimization\. By isolating and prioritizing the effective adversarial frontier, our method strictly prevents robust overfitting and achieves superior worst\-class robustness while maintaining high clean accuracy\.

## Feedback World Model Enables Precise Guidance of Diffusion Policy

**Authors:** Tuo An; Jindou Jia; Gen Li; Jingliang Li; Chuhao Zhou; Pengfei Liu; Bofan Lyu; Jiaqi Bai; Xinying Guo; Geng Li; Jianfei Yang

**ID:** 152267 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ULmPp5GXSX>) | [PDF](<https://openreview.net/pdf?id=ULmPp5GXSX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152267>)

World models aim to improve robotic decision making by predicting the consequences of actions\. However, in practice, their predictions often become unreliable once the robot encounters states outside the training distribution, limiting their effectiveness at deployment\. We observe that execution itself provides a natural but underutilized signal: after each action, the robot directly observes the true next state, revealing the mismatch between predicted and actual outcomes\. Building on this insight, we propose $\\textbf\{feedback world model\}$, a new paradigm that closes the loop between prediction and observation at inference time\. Instead of treating the world model as a static open\-loop predictor, our method maintains a lightweight feedback state that is updated online to iteratively correct future predictions, compensating for model errors using real\-time observations without additional training data or parameter updates\. We show that this process can be interpreted as a latent\-space observer and admits convergence guarantees under mild conditions\. We further introduce action\-aware guidance to better translate corrected predictions into control by emphasizing action\-controllable components while suppressing irrelevant variations\. Experiments on LIBERO\-Plus, Robomimic, and real\-world manipulation tasks demonstrate that our method substantially improves both prediction accuracy and policy performance under distribution shift\. In particular, it reduces world model prediction error by up to 76\.4\\% and improves out\-of\-distribution \(OOD\) success rate by 30\\%\. These results show that incorporating real\-time feedback at inference time provides a simple yet powerful alternative to static world modeling\.

## Learning Options for Compositional Motor Control with Adapter Banks

**Authors:** Sreejan Kumar; Marcelo G Mattar; Lea Duncker

**ID:** 149390 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qPRbaqMTnX>) | [PDF](<https://openreview.net/pdf?id=qPRbaqMTnX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149390>)

Learning flexible motor primitives is a hallmark of skilled motor control\. Recent neuroscience theory proposes that motor primitives may be implemented as low\-rank perturbations of a shared recurrent network, but leaves open how such a system is learned\. We translate this principle into a novel architecture for learning motor skills end\-to\-end: a shared recurrent core modulated by a bank of residual adapters, each selected by a discrete latent code\. Trained on closed\-loop biomechanical control, the adapters develop emergent low\-rank perturbations of the recurrent dynamics despite no architectural rank constraint, placing task representations in disparate subspaces of the shared core network\. A simple high\-level policy over the learned options, optimized while the whole network is frozen, sequences the low\-rank adapters to produce novel out\-of\-distribution movements\. We demonstrate the ability to generalize to novel motor sequences within the closed\-loop control setting, improving on the generalization error of a task\-input\-conditioned multitask baseline by up to order of magnitude\.

## Active Flow Expansion for Out\-of\-Distribution Discovery: from Theory to Molecules

**Authors:** Riccardo De Santi; Bruce D Lee; Cristian Jensen; Kimon Protopapas; Sophia Tang; Chenghao Liu; Pranam Chatterjee; Yisong Yue; Andreas Krause

**ID:** 148624 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wN9jIx2kMW>) | [PDF](<https://openreview.net/pdf?id=wN9jIx2kMW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148624>)

Standard flow and diffusion pre\-training matches the distribution of available data \(e\.g\., molecules\), which often covers only a small fraction of the valid design space\. In generative discovery, however, one aims to sample valid new\-to\-nature designs, assigned negligible probability under, and thus inaccessible to, standard models fitted to the observed data\. To overcome this limitation, we depart from data distribution matching and view a generative model through its generable set: the region it covers with non\-negligible probability\. This allows to introduce a new learning principle for out\-of\-distribution flow modeling: enlarging a model’s generable set to increase coverage of the valid design space\.  We propose Active Flow Expansion \(ActFlow\), a continued pre\-training method that employs verifier feedback to expand a pre\-trained model over new valid regions by iteratively adapting to synthetic data generated through active exploration in the learned flow representation\. Theoretically, we establish to our knowledge first\-of\-their\-kind statistical learning guarantees for out\-of\-distribution flow modeling, analyzing generable set expansion as a local\-to\-global reachability process over a learned representation\. Empirically, we assess ActFlow with suitable out\-of\-distribution generative modeling metrics across small organic molecules, mid\-sized drug\-like molecules, therapeutic peptides, and protein sequence design tasks\. Results show that ActFlow expands valid coverage far beyond the region modeled by the initial pre\-trained model, significantly outperforming widely adopted synthetic flow pre\-training methods\.

## The Web Doesn't Sit Still: Adversarial Self\-Evolving Attacks on Search Agents

**Authors:** Geyuan Wang; Shunyu Liu; Siyuan Liang; Chenyang Lyu; Dacheng Tao

**ID:** 149493 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pjLUz7TVsi>) | [PDF](<https://openreview.net/pdf?id=pjLUz7TVsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149493>)

Large Language Models \(LLMs\) have shown promise for empowering search agents to tackle complex information\-seeking tasks\. However, since acquiring external information necessitates web search, these agents are highly susceptible to various adversarial attacks \(e\.g\., malicious information injection or stealthy context manipulation\)\. Existing attack strategies inevitably rely on static and human\-crafted templates, failing to emulate the dynamic and complex nature of real\-world threats\. In this paper, we propose an adversarial self\-evolution framework that integrates bi\-level optimization between the attacker's strategy evolution and the defender's adaptive mitigation, to expose the vulnerabilities of search agents\. Specifically, we introduce the Contrastive Rollout Evolutionary Optimization \(CREO\) method to drive the directional evolution of the attack strategy population via contrastive evolutionary signals\. To provide a stable environment for this continuous evolution, we further construct a controlled sandbox and design fine\-grained metrics to quantify internal vulnerabilities\. Extensive experiments across various multi\-hop QA benchmarks and frontier LLMs demonstrate that the proposed framework yields attack efficacy superior to static baselines, underscoring the urgent need to develop more robust defense frameworks\. The anonymized code repository is available at https://anonymous\.4open\.science/r/adversarial\_rag\-3EFA\.

## LPS\-Bench: Benchmarking Safety Awareness of Computer\-Use Agents in Long\-Horizon Planning under Benign and Adversarial Scenarios

**Authors:** Tianyu Chen; Chujia Hu; Dongrui Liu; Xia Hu; Wenjie Wang

**ID:** 138933 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vbY7BcSB0Z>) | [PDF](<https://openreview.net/pdf?id=vbY7BcSB0Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138933>)

Computer\-use agents \(CUAs\) that interact with real systems can automate complex tasks, but introduce critical safety risks in long\-horizon tool\-use workflows\. Many existing benchmarks rely on outcome\-based evaluation, however, outcome\-based evaluation cannot reflect agent's safety awareness, as an agent may reach a safe outcome by chance while taking unsafe steps during planning\. To address this gap, we present \\textsc\{LPS\-Bench\}, which extends the outcome\-centric evaluation towards LLM agents' safety awareness in tool usage \(MCP/skill\) over long\-horizon tasks, as reflected at the action trajectory level\. \\textsc\{LPS\-Bench\} comprises 570 test cases derived from 65 scenarios across 7 task domains and 9 planning\-risk types, with user contexts spanning both benign ambiguity and adversarial steering\. Results on \\textsc\{LPS\-Bench\} across 13 representative LLM agents reveal previously underexamined safety failures in long\-horizon tool\-use tasks, showing that current agents often struggle to maintain safety awareness under ambiguous benign instructions and adversarial steering\. We further analyze key failure modes and evaluate lightweight mitigation strategies, showing that prompt\-based interventions provide limited improvements yet remain insufficient for robust trajectory\-level planning safety\.

## Is Dimensionality a Barrier for Retrieval Models?

**Authors:** Kiril Bangachev; Guy Bresler; Jonathan Kogan; Yury Polyanskiy

**ID:** 148654 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8VsusUqRS>) | [PDF](<https://openreview.net/pdf?id=w8VsusUqRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148654>)

Why does the low dimensionality of representations, typically $d\\approx 1000$, not prevent modern embedding\-based retrieval models from scaling to billions, or even trillions, of data points? To answer this question, we study maximal\-margin embeddings in the following retrieval model, classically studied in communication complexity \[PS86\] and more recently in embedding\-based retrieval \[WBNL25\]\. Let $A$ be a binary $N\\times n$ matrix indicating whether each of $N$ queries is relevant to each of $n$ documents\. We are interested in the largest margin $m&gt;0,$ denoted by $\\mathsf\{m\}^\{\\mathsf\{rd\}\}\(d, A\),$ for which there exist unit norm embeddings of the queries and documents $U\_1, U\_2, \\ldots, U\_N, V\_1, V\_2, \\ldots, V\_n$ with the following property\. $\\langle U\_j, V\_i\\rangle \\ge m$ whenever $A\_\{ji\} = 1$ and $\\langle U\_j, V\_i\\rangle \\le \-m$ when $A\_\{ji\} = 0\.$ A large margin is a key proxy for representation quality: it controls both robustness to perturbations and compositional generalization across queries\. Our main theorem establishes that the best possible margin without a restriction on the dimension, $\\mathsf\{m\}^\{\\mathsf\{rd\}\}\(\+\\infty, A\),$ can be nearly achieved in dimension $d = O\(\\mathsf\{m\}^\{\\mathsf\{rd\}\}\(\+\\infty, A\)^\{\-2\}\\log n\)$ which improves a theorem of \[BDES02\]\. Together with a matching lower bound in Theorem 1\.5, we conclude that when $A$ is the $\\binom\{n\}\{k\}\\times n$ matrix containing all possible $k$\-sparse rows once, dimension $d = O\(k\\log \(n/k\)\)$ is necessary and sufficient for the maximal possible margin $\\mathsf\{m\}^\{\\mathsf\{rd\}\}\(\+\\infty, A\) = \\Theta\(k^\{\-1/2\}\)$ in this setting\. This fully resolves the setup of \[WBNL25\]\. We also give several constructions for large margins when $d = o\(k\\log \(n/k\)\)\.$ Our proofs are based on connections between this problem and the literature on compressed sensing and the restricted isometry property\. Finally, we empirically test the InfoNCE and sigmoid losses for producing large margin embeddings and demonstrate a clear advantage of the sigmoid loss\.

## Seeing but Not Detecting: Privacy\-Preserving Scene Text Attack via Hybrid Adversarial Policy Learning

**Authors:** Feiran Li; Jiahao Lyu; Ke Jiang; Yu Zhou; Jinqiao Shi

**ID:** 155570 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4cYXGvJG2Y>) | [PDF](<https://openreview.net/pdf?id=4cYXGvJG2Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155570>)

Scene text encodes high\-density semantic information, raising privacy risks for automated vision systems\. Existing privacy\-preserving adversarial methods mainly target Scene Text Recognition \(STR\) by inducing character\-level misrecognition, yet text regions remain detectable, enabling manual inspection or downstream recovery\. We argue that stronger privacy requires suppressing Scene Text Detection \(STD\) during localization, hiding text as background to bypass subsequent OCR pipelines\. To this end, we propose \*\*AR\-Attacker\*\* \(\*\*A\*\*ttention\-guided \*\*R\*\*einforcement learning text \*\*Attacker\*\*\), a black\-box attack framework that generates sparse, visually imperceptible perturbations to effectively suppress STD outputs\. We formulate the attack as a Markov Decision Process \(MDP\) and design an attention\-guided action space, which leverages a frozen surrogate model to focus perturbations on salient text regions\.  Furthermore, AR\-Attacker employs a discrete\-continuous hybrid policy optimized with Proximal Policy Optimization \(PPO\), which jointly selects perturbation locations and magnitudes\. Empirical results show that AR\-Attacker surpasses state\-of\-the\-art baselines by 30% in text removal rate while simultaneously reducing query counts by 40%\. Remarkably, the framework maintains high visual fidelity \($\\textit\{PSNR\} &gt; 45$ dB\), advancing the "visible to humans, invisible to machines" privacy paradigm through a robust RL\-based approach\.

## Benchmarking and Improving Monitors for Out\-Of\-Distribution Alignment Failure in LLMs

**Authors:** Dylan Feng; Pragya Srivastava; Anca Dragan; Cassidy Laidlaw

**ID:** 139423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rba2NveuIm>) | [PDF](<https://openreview.net/pdf?id=Rba2NveuIm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139423>)

Many safety and alignment failures of large language models \(LLMs\) occur due to out\-of\-distribution \(OOD\) situations: unusual prompt or response patterns that are unforeseen by model developers\. We systematically study whether LLM monitoring pipelines can detect these \*\*OOD alignment failures\*\* by introducing a benchmark called Misalignment Out of Distribution Benchmark \(\*\*MOOD\*\*\)\. It is difficult to find failures that are truly OOD for off\-the\-shelf models trained on vast safety datasets\. We sidestep this by including a restricted training set in MOOD that we use to train our own monitors, as well as seven test sets with diverse alignment failures that are outside the training distribution\. Using MOOD, we find that guard models \(safety classifiers\) often fail to generalize OOD\. To fix this, we propose combining guard models with OOD detectors\. We test four types of OOD detectors and find that a combination of a guard model and Mahalanobis distance\-based OOD detector can improve recall from 39% to 47%\. We also establish positive scaling trends across model scales for monitors that combine a guard model and OOD detector; we find that incorporating OOD detection into monitoring achieves a higher recall gain than using a guard model with 20 times more parameters\. Our work suggests that OOD detection should be a crucial component of LLM monitoring and provides a foundation for further work on this important problem\.

## Consistency as a Testable Property: Statistical Methods to Evaluate AI Agent Reliability

**Authors:** Harsh Raj; Niranjan Orkat; Suvrorup Mukherjee; Aritra Guha; Cheryl Flynn; Subhabrata Majumdar

**ID:** 155880 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=28uXN3BzkF>) | [PDF](<https://openreview.net/pdf?id=28uXN3BzkF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155880>)

This paper establishes a rigorous measurement science for AI agent reliability, providing a foundational framework for quantifying consistency under semantically preserving perturbations\. By leveraging $U$\-statistics for output\-level reliability and kernel\-based metrics for trajectory\-level stability, we offer a principled approach to evaluating agents across diverse operating conditions\. Our proposal highlights the important distinction between the core capability and execution robustness of an agent, showing that minor task\-level variations can induce complete strategy breakdowns despite the agent possessing the requisite knowledge for the task\. We validate our framework through extensive experiments on three agentic benchmarks, demonstrating that trajectory\-level consistency metrics provide far greater diagnostic sensitivity than traditional pass@1 rates\. By providing the mathematical tools to isolate where and why agents deviate,  we enable the identification and rectification of architectural concerns that hinder the deployment of agents in high\-stakes, real\-world environments\.

## PGID: Progressive Guided Inversion and Denoising for Robust Watermark Detection

**Authors:** Minh Quoc Duong; Chun Tong Lei; Chun Pong Lau

**ID:** 153527 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KfdFXxbNSJ>) | [PDF](<https://openreview.net/pdf?id=KfdFXxbNSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153527>)

With the proliferation of AI\-generated images, digital watermarking has become an essential safeguard for protecting intellectual property and mitigating malicious exploitation\. Recent works on semantic watermarking have enabled efficient copyright protection for diffusion models\. However, the dependence of semantic watermarking on diffusion inversion for watermark detection creates a critical vulnerability\. Imprint removal and forgery attacks exploit this weakness to produce deceptive results\. Our analysis reveals that these attacks succeed by displacing watermarked latents into the \_unwatermarked region\_, while guiding unwatermarked latents into the \_watermarked region\_\. Based on that, we propose \*\*Progressive Guided Inversion and Denoising \(PGID\)\*\*, the first plug\-and\-play, training\-free noise extraction framework designed to defend against both attack strategies\. PGID effectively defends by projecting perturbed latents back to the region where they originally belong\. The projection is achieved by eliminating intermediate latent deflections and mitigating adversarial perturbations through progressive inversion\-denoising cycles\. Comprehensive evaluations across multiple schemes demonstrate that PGID successfully restores detection reliability by recovering removed watermarks and identifying forged instances\.

## Seirênes: Adversarial Self\-Play with Evolving Distractions for LLM Reasoning

**Authors:** Chi Zhang; Haibo Qiu; Qiming ZHANG; Yufei Xu; Xinbo Gao; Jing Zhang

**ID:** 153276 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MSi0qsfsNZ>) | [PDF](<https://openreview.net/pdf?id=MSi0qsfsNZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153276>)

We present Seirênes, a self\-play RL framework that transforms contextual interference from a failure mode of LLM reasoning into an internal training signal for co\-evolving more resilient reasoners\. While RL with verifiable rewards has significantly advanced reasoning capabilities, models can still exhibit fragility when encountering non\-idealized contexts: scenarios characterized by superfluous information, tangential instructions, or incidental correlations that differ from the clean distributions typical of standard benchmarks\. Seirênes harnesses this vulnerability through a parameter\-shared and adversarial self\-play loop\. Within this framework, a single model is trained to both construct plausible yet distracting contexts that expose its own reasoning blind spots, and solve problems by discerning the essential task from these perturbations to recover the core underlying logic\. By pitting these competing objectives against each other, Seirênes compels the model to move beyond superficial pattern matching and anchors its capabilities in robust underlying reasoning\. This continuous interaction sustains an informative co\-evolutionary curriculum as the model improves\. Across seven mathematical reasoning benchmarks and model scales from 4B to 30B, Seirênes achieves average gains of \+10\.2, \+9\.1, and \+7\.2 points\. Besides, distracting contexts produced by the 4B Seirênes model reduce the accuracy of top\-tier closed\-source models \(GPT and Gemini\) by roughly 4\-\-5 points, revealing Seirênes' general ability to uncover reasoning models' blind spots\. Our code will be available\.

## Near\-Optimal Best\-of\-Both\-Worlds Algorithms for Decoupled Exploration and Exploitation in Multi\-armed Bandits

**Authors:** Hibiki Sekiya; Shinji Ito

**ID:** 155826 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2afEIMeN6y>) | [PDF](<https://openreview.net/pdf?id=2afEIMeN6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155826>)

We study the decoupled multi\-armed bandit problem, where the player selects one arm to exploit \(incurring its loss\) and one arm to explore \(observing its loss\) at each round\. We propose two algorithms: D\-Exp3\-Ada, based on Exp3 with an AdaGrad learning rate, and D\-TINF\-SPM, based on FTRL with Tsallis entropy and the stability\-penalty matching learning rate\. Here, $K$ denotes the number of arms, $T$ the time horizon, and $\\Delta\_i$ the suboptimality gap of arm $i$\. D\-Exp3\-Ada achieves $\\mathcal\{O\}\(\\sqrt\{KT\\log K\}\)$ regret in adversarial regimes and $\\mathcal\{O\}\(\\sum\_\{i \\neq i^\{\\star\}\} \\frac\{\\log K\}\{\\Delta\_i\}\)$ in stochastic regimes, combining simplicity of algorithm design with strong guarantees\. D\-TINF\-SPM achieves the minimax optimal $\\mathcal\{O\}\(\\sqrt\{KT\}\)$ in adversarial regimes and $\\mathcal\{O\}\(\\min\\\{\\sqrt\{K\\sum\_\{i \\neq i^\{\\star\}\} \\frac\{1\}\{\\Delta\_\{i\}^2\}\}, \\sum\_\{i \\neq i^\{\\star\}\} \\frac\{\\log K\}\{\\Delta\_i\}\\\}\)$ in stochastic regimes\. We also provide a refined analysis of the prior best algorithm\. Finally, we derive instance\-dependent lower bounds under natural monotonicity and permutation\-invariance assumptions on regret upper bounds, proving that our algorithms are optimal up to $\\mathcal\{O\}\(\(\\log K\)^2\)$ within this class\.

## METRO: Metric\-Enhanced Token Routing Operator

**Authors:** Nodens Koren; Thomas Hofmann; Georgios Kissas

**ID:** 154570 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CclvRfbnVN>) | [PDF](<https://openreview.net/pdf?id=CclvRfbnVN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154570>)

State\-of\-the\-art neural operators scale to complex meshes via slice\-and\-process architectures, yet many rely on linear compatibility scores for latent tokenization\. Under common feature normalization, such scores are equivalent to isotropic Euclidean clustering, while without normalization they induce unbounded linear decision regions\. In both cases, they lack slice\-specific anisotropic locality, which can lead to redundant and entangled latent slices\. To address this, we propose Metric\-Enhanced Token Routing Operator \(METRO\) , a geometry\-aware routing mechanism that replaces linear projection with a learnable Mahalanobis metric\. By enabling each latent slice to learn a local anisotropic tensor, METRO shapes receptive fields into exponentially localized, oriented ellipsoids that naturally align with flow features like boundary layers and wakes\. As a drop\-in replacement, METRO yields consistent improvements across both Transformer and Mamba backbones\. Empirically, our method achieves substantial performance gains on irregular domains, outperforming baselines on both standard PDE benchmarks and complex industrial design tasks\. Finally, METRO exhibits enhanced robustness in out\-of\-distribution regimes across varying Reynolds numbers and geometric configurations\.

## Do Less, Decide Better: Optimal Human Dispatching in AI\-Assisted Decisions

**Authors:** Lezhi Tan; Naomi Sagan; Lihua Lei; Jose Blanchet

**ID:** 148862 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ud2UVEQahC>) | [PDF](<https://openreview.net/pdf?id=ud2UVEQahC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148862>)

AI systems increasingly assist decision making by producing cheap factor\-level assessments of complex inputs, but these assessments are often biased and incomplete\. We study selective human oversight: given AI signals, which factors should be escalated to a costly human evaluator? We formulate this human\-\-AI collaboration problem as a factor\-level information\-acquisition problem\. Under squared loss, solving for optimal dispatching reduces to maximizing a contextual reward; under a linear model, this reward admits a closed\-form decomposition into two interpretable terms: predictive relevance and residual uncertainty in the human evaluation after conditioning on the AI signal\. We instantiate the framework on peer review, decomposing papers into ten aspects and evaluating 3,408 ICLR submissions across three LLMs and multiple regression heads\. Outputs based on the optimal dispatching rules match full\-human\-review performance using only 2\-\-3 queried aspects out of 10\. The framework remains effective when the human signal comes from a single noisy reviewer and across review years, suggesting robustness to reviewer inconsistency and and temporal distribution shift\. These results position principled dispatching as a practical foundation for scalable human\-\-AI decision systems\.

## Multiform Attack for Transferable Cross\-Modal Person Re\-Identification

**Authors:** Yunpeng Gong; Can Yang; Qingyuan Zeng; Dejun Xu; Zhiming Luo; Zhenzhong Wang; Min JIANG

**ID:** 154815 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AjYCRQ99Xu>) | [PDF](<https://openreview.net/pdf?id=AjYCRQ99Xu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154815>)

Cross\-modal person re\-identification \(ReID\) adversarial attacks face a fundamental generalization dilemma: existing methods suffer from source\-pair overfitting, where the learned perturbations become entangled with the feature covariance and alignment patterns of the source modality pair, thereby limiting their transferability under heterogeneous domain shifts\. We argue that the core issue is the difficulty of reducing source\-pair\-specific bias while maintaining attack effectiveness\. To address this, we propose Multiform Attack \(MA\)\. The framework first learns a universal attack direction via Mahalanobis\-guided gradient optimization to capture the intrinsic covariance structure of the feature manifold, though this perturbation may still retain source\-pair\-specific bias\. To overcome this bias and achieve cross\-distribution generalization, the second stage leverages multiple heterogeneous source distributions to optimize for generalization, performing sparse, structure\-sensitive residual correction in the discrete pixel space via attention\-shift\-filtered multi\-objective evolutionary search\. This two\-stage design models the attack as a base direction plus a structured residual, which helps reduce overfitting to the source modality pair and improve transferability to unseen modalities\. Extensive experiments show that MA achieves superior transferability across unseen modalities, datasets, and model architectures\.

## LOFT: Low\-Rank Orthogonal Fine\-Tuning via Task\-Aware Support Selection

**Authors:** Lanxin Zhao; Bamdev Mishra; Pratik Kumar Jawanpuria; Lequan Lin; Dai Shi; Junbin Gao; Andi Han

**ID:** 154983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9RrKYAh9GU>) | [PDF](<https://openreview.net/pdf?id=9RrKYAh9GU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154983>)

Orthogonal parameter\-efficient fine\-tuning adapts pretrained weights through structure\-preserving multiplicative transformations, but existing methods often conflate two distinct design choices: the subspace in which adaptation occurs and the transformation applied within that subspace\. This paper introduces LOFT, a low\-rank orthogonal fine\-tuning framework that explicitly separates these two components\. By viewing orthogonal adaptation as a multiplicative subspace rotation, LOFT provides a unified formulation that recovers representative orthogonal PEFT methods, including coordinate\-, butterfly\-, Householder\-, and principal\-subspace\-based variants\. More importantly, this perspective exposes support selection as a central design axis rather than a byproduct of a particular parameterization\. We develop a first\-order analysis showing that useful adaptation supports should be informed by the downstream training signal, motivating practical gradient\-informed support selection strategies\. Across language understanding, visual transfer, mathematical reasoning, and multilingual out\-of\-distribution adaptation, LOFT recovers principal\-subspace orthogonal adaptation while gradient\-informed supports improve the efficiency–performance trade\-off under matched parameter, memory, and transform budgets\. These results suggest that principled support selection is an important direction for improving orthogonal PEFT\.

## Sound Verification of Deployed Neural Networks

**Authors:** Attila Szász; Balázs Bánhelyi; Márk Jelasity

**ID:** 149794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nHbkxmdykn>) | [PDF](<https://openreview.net/pdf?id=nHbkxmdykn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149794>)

Verification methods aim at mathematically proving desirable properties of neural networks, such as robustness to adversarial perturbations\.  A verifier is sound if and only if it never claims that a neural network has the desired property when it does not\.  It was shown recently that none of the currently known verifiers that are claimed to be sound are guaranteed to be sound when considering the deployed version of the verified network\.  Due to this, all the known verifiers are vulnerable to certain backdoor attacks, where an adversarial network passes verification, but in reality, it exhibits adversarial behavior in specific deployment environments\. So far, it has been suspected that sound verification is prohibitively expensive if we wish to verify all possible executions&amp;mdash;including parallel and stochastic ones&amp;mdash;in deployment\.  We show that efficient and practically sound verifiers can be designed using a bound on the so\-called backward error\. Using this bounding technique, we propose two verifiers: one based on interval bound propagation, and one using symbolic propagation\. Both verifiers are proven to remain sound even if the deployment environment randomly selects a valid expression tree \(an ordering and parenthesizing of the arithmetic operations\) to compute the network, and even if numeric underflow or overflow occurs in any valid expression tree\. This is especially interesting in the case of symbolic propagation, where the expression tree used by the verifier is completely different from the one used in deployment\. We demonstrate empirically that our techniques introduce only a limited performance overhead while detecting all the known verifier backdoor attacks\.

## Token by Token, Compromised: Backdoor Vulnerabilities in Unified Autoregressive Models

**Authors:** Tobias Braun; Jonas Grebe; Hossein Shakibania; Anna Rohrbach; Marcus Rohrbach

**ID:** 152016 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W9D6qk9VIk>) | [PDF](<https://openreview.net/pdf?id=W9D6qk9VIk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152016>)

Unified autoregressive models \(UAMs\) are transformer models that generate text as well as image tokens within a single autoregressive pass\.  Shared parameters and a multimodal vocabulary simplify the training pipeline and facilitate flexible multimodal generation, yet might introduce new vulnerabilities\. In particular, we are the first to show that this unified architecture enables multimodal backdoor attacks, where a trigger can propagate malicious effects across multiple output modalities\. Specifically, we present the Token by Token Backdoor Attack \(ToBAC\), the first backdoor attack targeting UAMs, exploring both data\-based and model\-based poisoning strategies\.  We demonstrate that innocuous characters or even common words can be transformed into triggers that elicit harmful behavior in autoregressive image generation\.  ToBAC can jointly manipulate visual outputs and accompanying text, increasing the perceived authenticity of fabricated content\.   With model access, ToBAC enables attacks on the unified Liquid model in which a subtle word \(e\.g\., \`\`cool''\) induces modality\-aligned brand promotion or ideological influence in 55% of generations\. Without model access, ToBAC can be induced through data poisoning, achieving an average success rate of 63\.1% against JanusPro\.

## Controlling Transient Amplification Improves Long\-horizon Rollouts

**Authors:** Adeel Pervez; Francesco Locatello

**ID:** 149068 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t6SrxcxWcq>) | [PDF](<https://openreview.net/pdf?id=t6SrxcxWcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149068>)

Autoregressive neural simulators now match classical solvers on short\-horizon prediction of physical systems, yet their accuracy degrades rapidly when rolled out over long horizons\. In this work we identify transient amplification of perturbations around rollout trajectories as a structural mechanism driving rollout error\. Using a linearization analysis we show that when the Jacobians along an autoregressive trajectory are non\-normal and non\-commuting, the model amplifies errors transiently, resulting in model rollout drift even when the overall system is asymptotically stable\. Building on the analysis, we propose \\emph\{commutativity regularization\}: a combination of two penalties designed to reduce the normality defect of individual Jacobians and the commutator norm of Jacobians across steps\. The penalties are estimated with Jacobian\-vector products and have no inference\-time cost\. We show a propagator bound that quantifies rollout error under approximate commutativity and normality\. We evaluate UNet and FNO variants with commutativity regularization on 1D and 2D spatio\-temporal data in synthetic and real settings, showing successful long\-horizon rollouts over thousands of steps\. We show that the method improves FourCastNet climate forecasts on ERA5 without using any new data\. The gain is most pronounced out\-of\-distribution: trained on trajectories of a few hundred steps, regularized models remain in\-distribution for thousands of rollout steps on initial conditions where baselines diverge\.

## Geometry\-Adaptive Explainer for Faithful Dictionary\-Based Interpretability under Distribution Shift

**Authors:** Sungjun Lim; Heedong Kim; Andrew Lee; Kyungwoo Song

**ID:** 150508 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hZQ6hH0lDD>) | [PDF](<https://openreview.net/pdf?id=hZQ6hH0lDD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150508>)

Mechanistic interpretability aims to explain a model’s behavior by identifying causally responsible internal structures\. Dictionary\-based explainers such as sparse autoencoders and transcoders are a primary tool, but their faithfulness under out\-of\-distribution \(OOD\) shift has received little systematic attention\. We show that distribution shift rotates the subspace that the model actively uses, misaligning the explainer’s dictionary trained on in\-distribution \(ID\) activations\. We formalize this misalignment as the faithfulness gap, a geometric distance between the ID dictionary and the OOD\-active subspace, and show that it controls OOD faithfulness degradation\. To reduce this gap, we propose the Geometry\-Adaptive Explainer \(GAE\), which realigns the explainer's dictionary with the OOD\-active subspace while preserving the original feature structure\. This requires only unlabeled OOD activations and no gradient updates\. We prove that GAE improves over the unadapted ID explainer, with excess loss bounded quadratically by the second\-moment shift\. Empirically, GAE even matches or surpasses all training\-based baselines in causal faithfulness across multiple models and OOD settings\.

## Brenier Meets Adversarial Training: Optimal Transport Geometry for Robust Learning

**Authors:** alireza abdollahpour; Ehsan Sharifian; Buse Şen; Marco Cuturi; Daniel Kuhn

**ID:** 152709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QzN8ycFg2x>) | [PDF](<https://openreview.net/pdf?id=QzN8ycFg2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152709>)

Distributionally robust optimization \(DRO\) provides a principled framework for learning under distribution shift, but its practical use is hindered by the difficulty of evaluating worst\-case risks for nonconvex loss functions\. We study a penalized DRO formulation in which the adversary may choose any distribution but incurs a Wasserstein penalty for deviating from the empirical distribution\. We show that the adversary’s problem can be reformulated as an optimization problem over transport maps that push empirical samples to adversarial ones, and we prove that optimal maps are cyclically monotone\. We also show that standard adversarial training\-\-\-based on per\-sample local optimization\-\-\-violates cyclical monotonicity and wastes transport costs unless the adversary is severely restricted\. We propose two remedies\. First, we introduce multi\-start particle ascent, which alternates parallel gradient ascent with reassignment to enforce cyclical monotonicity across samples\. Second, we parameterize adversarial maps as gradients of input\-convex neural networks, which guarantees cyclical monotonicity by construction\. Experiments on robust regression, image classification, and robust control show that our methods consistently outperform standard adversarial training and state\-of\-the\-art baselines, achieving improved robustness and better generalization under distribution shift\.

## USAD: Uncertainty\-aware Statistical Adversarial Detection

**Authors:** Zhijian Zhou; Xunye Tian; Jiacheng Zhang; Zesheng Ye; Yiyi Guo; Donghao Zhang; Liuhua Peng; Feng Liu

**ID:** 154348 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EGs2nZVWS3>) | [PDF](<https://openreview.net/pdf?id=EGs2nZVWS3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154348>)

\*Statistical adversarial detection\* \(SAD\) treats detection as a two\-sample test\. Given a reference set of clean examples \(CEs\) and a batch of queries, potentially containing an unknown mixture of CEs and adversarial examples \(AEs\), SAD decides whether the query distribution drifts away from the CE distribution while controlling the false\-alarm rate\. Existing SAD\-based methods mainly use \*maximum mean discrepancy\* \(MMD\) to measure the distributional discrepancy\. However, MMD's distributional properties limit its ability to capture characteristic uncertainty patterns of AEs that are crucial for detection: AEs typically exhibit abnormal feature spread \(i\.e\., global uncertainty\) and instability under perturbations \(i\.e\., local uncertainty\)\. To close the gap, we propose \*Uncertainty\-aware Statistical Adversarial Detection\* \(USAD\), which explicitly captures these uncertainty patterns with two new statistics: \(1\) \*\*V\*\*ariance \*\*D\*\*iscrepancy \(VD\), which measures the difference in feature spread between AEs and CEs to capture global uncertainty differences, and \(2\) \*\*P\*\*erturbation\-based \*\*C\*\*ovariance \*\*D\*\*iscrepancy \(PCD\), which compares feature covariance under Gaussian perturbations to capture local uncertainty differences\. By aggregating VD and PCD, USAD achieves superior detection performances over baseline methods against various adversarial attacks, highlighting the importance of considering characteristic behaviors of AEs for effective SAD\. Our code is available at: https://anonymous\.4open\.science/r/USAD\.

## Expanding the Role of Diffusion Models for Robust Classifier Training

**Authors:** Pin\-Han Huang; Shang\-Tse Chen; Hsuan\-Tien \(Tien\) Lin

**ID:** 149656 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oRtG25ar63>) | [PDF](<https://openreview.net/pdf?id=oRtG25ar63>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149656>)

Incorporating diffusion\-generated synthetic data into adversarial training \(AT\) has been shown to substantially improve the training of robust image classifiers\. In this work, we extend the role of diffusion models beyond merely generating synthetic data, examining whether their internal representations, which encode meaningful features of the data, can provide additional benefits for robust classifier training\. Through systematic experiments, we show that diffusion models offer representations that are both diverse and partially robust, and that explicitly incorporating diffusion representations as an auxiliary learning signal during AT consistently improves robustness across settings\. Furthermore, our representation analysis indicates that incorporating diffusion models into AT encourages more disentangled features, while diffusion representations and diffusion\-generated synthetic data play complementary roles in shaping representations\. Experiments on CIFAR\-10, CIFAR\-100, and ImageNet validate these findings, demonstrating the effectiveness of jointly leveraging diffusion representations and synthetic data within AT\.

## What Was That Again? Certified Robustness for Automatic Speech Recognition

**Authors:** Andrew Cullen; Neil Marchant; Jiani Xie; Paul Montague; Benjamin Rubinstein

**ID:** 148192 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zdRy5kB5qm>) | [PDF](<https://openreview.net/pdf?id=zdRy5kB5qm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148192>)

Automatic Speech Recognition systems are notoriously both sensitive to input perturbations and challenging to defend, which is a product of their high\-dimensional, discrete output spaces\. Traditional Randomized Smoothing workflows collapse in sequence\-to\-sequence tasks because the probability mass of any single transcription vanishes under noise\. We propose an Anytime\-Valid Certified Transcription framework that replaces fixed\-sample binomial testing with E\-value Martingales\. Our approach leverages a dual\-gate pipeline: a Two\-Sided Atomic Audit that accumulates statistical wealth to certify both token existence and adversarial exclusion, and a Rank\-Based Tournament that selects the winning sequence\. Our evaluations across four diverse architectures demonstrate that this approach yields an average 25\.5\\% relative reduction in Word Error Rate, while also providing granular word\- and sentence\-level certifications to enhance acoustic security\.

## Adversarial Risk in the Generative AI Era Necessitates Dropping the Small Epsilon Ball

**Authors:** Andrew Cullen; Neil Marchant; Paul Montague; Jiani Xie; Benjamin Rubinstein

**ID:** 140104 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A2YHwLrLMG>) | [PDF](<https://openreview.net/pdf?id=A2YHwLrLMG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140104>)

Adversarial Machine Learning research is currently centered on the search for the $\\epsilon$\-ball: minimal perturbations designed to fool models while remaining imperceptible to humans\. We argue that this fixation on $\\ell\_p$ norms is a metrological trap that communicates a distorted perception of risk to defenders, one that is unaligned with real\-world system vulnerabilities\. This paradigm misleads defenders into optimizing for narrow, mathematical robustness at the expense of systemic security, while simultaneously incentivizing attackers to exploit non\-overlapping alternative adversarial pathways\. Ultimately, we argue that the dominance of the $\\ell\_p$ ball does not just fail to reduce harm \- it may actively facilitate it by communicating a false sense of security against the wrong threats\.

## Halt Fast\! Early Stopping for Certified Robustness

**Authors:** Andrew Cullen; Paul Montague; Benjamin Rubinstein

**ID:** 155955 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Zs088RXoL>) | [PDF](<https://openreview.net/pdf?id=1Zs088RXoL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155955>)

Randomized Smoothing provides rigorous robustness guarantees for neural networks without architectural constraints, yet its adoption is limited by extreme computational costs\. Standard RS requires tens of thousands of model evaluations per input and forces practitioners to commit to fixed sample sizes a priori\. In this work, we present a novel meta\-learning framework for anytime\-valid certified robustness that adaptively deploys computational resources\. By using a lightweight meta\-learner to predict image\-specific priors for a sequential E\-process, we achieve a 20\-fold reduction in sample complexity compared to traditional methods while maintaining rigorous statistical guarantees\. Beyond raw efficiency, we demonstrate how anytime\-validity enables adaptively allocating compute based upon application\-specific risk thresholds, a form of resource triage impossible under classic certification frameworks\. That this is achievable while also providing similar certification performance demonstrates that our approach provides a pathway for real\-time, safety\-critical certification deployments\.

## DRIVE: Fine\-tuning via Data Contribution\- and Diversity\-aware Weighting with Prior Regularization

**Authors:** qing liu; Xinrui Chen; Weiyao Zhu; Yi Du; Ou Wu

**ID:** 151453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aZomMEAGSq>) | [PDF](<https://openreview.net/pdf?id=aZomMEAGSq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151453>)

Single\-stage fine\-tuning is pervasive, yet catastrophic forgetting persists when the source pre\-training data is inaccessible\. Data weighting affords a natural lever to modulate sample influence\. Yet existing weighting methods lack a principled mechanism to explicitly arbitrate knowledge retention against new\-task adaptation, and provide no unified differentiable objective to accommodate auxiliary signals such as sample diversity and sample characteristics\. This is because current schemes privilege one goal over the other, and no explicit gradient\-compatible encoding exists for such signals\. To address this, we propose $\\textbf\{DRIVE\}$, a principled and efficient weight assignment framework\. It derives per\-sample weights via a unified differentiable objective where three coupled signals co\-evolve: Shapley additivity splits contribution into anti\-forgetting and adaptation components, which are reshaped by a covariance\-based diversity term and stabilized by a sample\-characteristic prior\. Far from a mere combination, this yields an end\-to\-end gradient\-based scheme balancing stability against plasticity\. Theoretically, we prove that DRIVE enjoys superior stability\-plasticity guarantees over existing weighting schemes and enhances parameter estimation robustness\. Empirically, it attains superior overall performance, faster convergence, and stronger robustness\. Code at https://anonymous\.4open\.science/r/DRIVE\-158\.

## Trajectory\-Consistent Dropout for Uncertainty Decomposition in Hamiltonian Neural Networks

**Authors:** Stephen J Roberts; Yuki Tachibana

**ID:** 152046 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vuh3ZNdgF6>) | [PDF](<https://openreview.net/pdf?id=Vuh3ZNdgF6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152046>)

Hamiltonian Neural Networks \(HNNs\) produce stable long\-horizon rollouts by integrating a learned Hamiltonian with a symplectic scheme\. Standard Monte Carlo \(MC\) dropout conflicts with this per\-trajectory interpretation because resampling the dropout mask inside a leapfrog integrator means successive substeps follow different subnetworks, so a single MC rollout no longer corresponds to any one sampled Hamiltonian\. We propose trajectory\-consistent dropout, implemented as Fixed\-mask MC, where each stochastic rollout selects one mask from a finite bank and reuses it across the full integration path\. This restores a coherent per\-rollout Hamiltonian sample and makes uncertainty decomposition operational\. Crossing the mask axis with an initial\-condition ensemble separates model\-sample uncertainty from sensitivity to the initial state\. On coupled\-pendulum rollouts, Fixed\-mask MC reduces mean energy drift by 72% relative to Standard MC\. Under held\-out mass ratios, Fixed\-mask MC increases the epistemic share of predictive variance by 16\.9 percentage points from in\-distribution to out\-of\-distribution, compared with 4\.2 percentage points for Standard MC, indicating a substantially stronger shift of the uncertainty budget toward model uncertainty when the physics moves outside training support\. Spring\-chain and transverse\-field Ising experiments show that the same axis\-preserving decomposition transfers to structured pairwise and latent quantum dynamics, although point\-prediction and likelihood gains remain system\-dependent\. These results position Fixed\-mask MC as a single\-training\-run route to trajectory\-consistent, physically interpretable uncertainty in structured neural dynamical models\.

## Exact Recovery of Lipschitz Orthogonal Coordinate Transformations via Constrained Normalizing Flows

**Authors:** Isaac Manring; Kejun Huang

**ID:** 156088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0StQFVtzOM>) | [PDF](<https://openreview.net/pdf?id=0StQFVtzOM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156088>)

Nonlinear independent component analysis \(nICA\) is generally unidentifiable due in part to measure\-preserving automorphisms \(MPAs\), which induce indistinguishable latent representations\. We show that for non\-Gaussian sources with mild regularity assumptions, such MPAs are not Lipschitz, motivating Lipschitz continuity as a structural assumption\. Under this condition, we prove global identifiability of nICA within the class of Orthogonal Coordinate Transformations \(OCTs\) with bounded sources, recovering the true components up to permutation and scaling\. Our analysis reduces the learning problem to a linear program over the Birkhoff polytope, and extends to functions with symmetric Jacobians, revealing connections to optimal transport\. We introduce OCTNet and SYMNet, normalizing flow architectures that enforce these constraints in practice\. Experiments demonstrate strong recovery performance and robustness to model misspecification, outperforming existing approaches\.

## BodyBench: Evaluating Adversarial Image Defenses Against AI Nudification Inpainting

**Authors:** Li Qiwei; Salma Abdel Magid; Olga Russakovsky; Eric Gilbert; Sarita Schoenebeck

**ID:** 139845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0xZQKeFDC4>) | [PDF](<https://openreview.net/pdf?id=0xZQKeFDC4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139845>)

Adversarial perturbation defenses protect images from generative editing by adding imperceptible noise\. Yet none of these methods have been evaluated against AI nudification, despite AI\-generated non\-consensual intimate imagery \(AIG\-NCII\) being among the most documented harms of generative AI and produced largely through inpainting\. We argue this is a problem\-formulation failure: prior threat models do not correspond to nudification attacks, and the misalignment is structural, spanning mask shape, prompt distribution, and success criterion which causes existing evaluations to systematically overestimate protection effectiveness\. We reformulate adversarial inpainting protection around this documented harm\. We introduce BodyBench, a benchmark of 648 fully synthetic clothed adult subjects, each paired with 11 mask variants spanning body, face, context, and dilation regions, along with nudification and redressing attack prompts\. We propose three harm\-aligned metrics: sexualization, naturalness, and recognizability that jointly determine whether an inpainted output constitutes a successful nudification attack\. Auditing four recent protection methods \(PhotoGuard, DiffusionGuard, AdvPaint, DiffVax\) on BodyBench, we find that protection succeeds in only one configuration of one method, and only under exact mask alignment between defender and attacker\-\-\-a condition no real defender can guarantee and one that we show is easily always bypassed\. We also show that standard metrics such as PSNR are essentially uncorrelated with nudification protection\. BodyBench makes this misalignment measurable and provides a foundation for defenses grounded in documented harm\.

## Fingerprinting Inference Systems of Large Language Models

**Authors:** Anna Wimbauer; Jonas Möller; Erik Imgrund; Konrad Rieck

**ID:** 153664 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JfJBHSWafR>) | [PDF](<https://openreview.net/pdf?id=JfJBHSWafR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153664>)

The behavior of LLMs does not depend solely on the model itself\. Components of the inference system, such as the inference engine, attention backend, and hardware platform, subtly influence how inputs are processed\.  These components differ in their implementations and thereby induce small numerical deviations across systems when running the same model\. While prior work has established the theoretical existence of such deviations, their security implications have remained unexplored\. In this paper, we show that these deviations are characteristic of specific components and propagate to observable textual outputs, exposing the inference system to any party that can query the model\. Building on this observation, we introduce a fingerprinting method that analyzes the prompt\-response behavior of LLMs to identify components of the inference system\. Our empirical evaluation demonstrates that the inference engine, attention backend, and underlying hardware platform can be identified reliably, even when the LLM is operated at non\-zero temperature\. We show that preventing fingerprinting is fundamentally hard, as it would require eliminating numerical differences between hardware and software stacks\. We therefore propose partial mitigations and discuss their impact\.

## REACT: A Lightweight Reliability\-Aware Framework for Spatio\-Temporal Out\-of\-Distribution Prediction

**Authors:** Yongfeng Su; Ziquan Fang; Jihua Yang; Wei Shao; Yunjun Gao

**ID:** 152742 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QhZRZ8Fqcc>) | [PDF](<https://openreview.net/pdf?id=QhZRZ8Fqcc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152742>)

In the real world, spatio\-temporal forecasting systems inevitably encounter out\-of\-distribution \(OOD\) shifts, where temporal shifts evolve due to seasonal patterns or policy changes, and spatial dependencies shift with sensor deployment, removal, or topology reconfiguration\. While many approaches attempt to address these challenges via invariant learning or causal adjustment, they implicitly assume that the contextual signals supporting prediction remain reliable\. Through empirical studies and theoretical analysis, we find that this assumption often breaks because: \(i\) node\-level context can become biased or incomplete under temporal and spatial OOD, yet existing methods lack mechanisms to assess such reliability; \(ii\) existing standard graph\-based aggregation propagates information with fixed strength, potentially amplifying corrupted context across nodes\. To this end, we propose REACT, a lightweight REliability\-Aware Context\-calibrated spatio\-Temporal forecaster that explicitly models and controls context reliability under OOD\. REACT decouples prediction from adaptation by first establishing a topology\-independent predictive anchor via a graph\-free linear encoder, ensuring transferable node\-wise representations\. It then constructs an availability\-aware context that captures both observed signals and prior\-based imputations, enabling explicit characterization of context completeness\. Building on this, REACT introduces a reliability\-guided calibration mechanism that dynamically modulates spatial support through uncertainty\-aware gating, selectively leveraging trustworthy neighbors while suppressing unreliable propagation\. Extensive experiments on ten real\-world datasets with diverse temporal and structural shifts demonstrate that REACT consistently outperforms eleven baselines\. These results highlight the importance of explicitly modeling and controlling context reliability as a fundamental principle for robust spatio\-temporal forecasting under distribution shift\. Our source code is available at https://anonymous\.4open\.science/r/REACT\-A82B\.

## Pointillism: Probing\-Based Model Compatibility for Robust Collaborative Machine Learning

**Authors:** Yang Li; Adams Wai Kin Kong

**ID:** 152203 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UnqyrJLKng>) | [PDF](<https://openreview.net/pdf?id=UnqyrJLKng>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152203>)

Assessing model compatibility is a key challenge in collaborative machine learning\. Heterogeneous data distributions can lead to discrepancies among independently trained models that degrade performance when combined, while adversarial manipulation can introduce harmful behaviors\. In both cases, reliable evaluation prior to integration is essential\. Existing approaches mostly rely on parameter\-space statistics, which do not reflect model behavior and are often unreliable in non\-IID settings\. Inspired by the pointillism art style, where images are formed from small, structured dots of color, we propose Pointillism, a probing\-based framework that evaluates model compatibility directly in function space without requiring task data\. The method uses structured, randomized probes sampled from an out\-of\-distribution space to elicit model responses\. From these responses, we construct compact model signatures that capture both global prediction characteristics and class\-level features\. Compatibility is assessed through feature consensus, measuring cross\-model agreement on class\-level representations via probe transfer\. This provides a behavior\-centric and fine\-grained view of model alignment\. We apply the framework to federated learning, where consensus\-based selection identifies a self\-consistent subset of client models for aggregation\. Experiments in federated learning demonstrate improved robustness against both untargeted and backdoor attacks, outperforming existing defense methods\. Our source code is included in the supplementary material\.

## On Making $SE\(2\)$\-Invariant Networks Optimal

**Authors:** Tomas Karella; Emily Shinkle; Alice Allen; Pieter J Swart; NIcholas Lubbers; Roxana Bujack

**ID:** 155688 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3gDFvmTZXb>) | [PDF](<https://openreview.net/pdf?id=3gDFvmTZXb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155688>)

Respecting a\-priori known symmetries of underlying data is a key principle in designing efficient neural architectures\. Convolutional Neural Networks \(CNNs\) are a canonical example, encoding translation equivariance\. Extending this inductive bias to richer symmetry groups such as $\\mathrm\{SE\}\(2\)$ in the most effective way possible is an ongoing architectural and computational challenge\. Building on classical invariant theory, we derive invariant feature maps that are provably optimal: minimal and information\-preserving with respect to the symmetry group\. Our construction is designed to integrate seamlessly into standard architectures, requiring no modification to nonlinearities or normalization layers\. As a concrete implementation, we introduce a plug\-and\-play module for CNNs that enforces $\\mathrm\{SE\}\(2\)$ invariance, capturing both translations and rotations within standard architectures\. The resulting models are both efficient and expressive\. Experiments show competitive or improved accuracy compared to state\-of\-the\-art equivariant methods at significantly lower computational cost\. Finally, we provide a theoretical and empirical analysis of the relationship between equivariance and invariance, offering insight into their roles in controlling robustness and flexibility\.

## Achieving Optimal Static and Dynamic Regret Simultaneously in Bandits with Deterministic Losses

**Authors:** Jian Qian; Chen\-Yu Wei

**ID:** 154262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6AmedacpX>) | [PDF](<https://openreview.net/pdf?id=F6AmedacpX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154262>)

In adversarial multi\-armed bandits, two performance measures are commonly used: static regret, which compares the learner to the best fixed arm, and dynamic regret, which compares it to the best sequence of arms\. While optimal algorithms are known for each measure individually, there is no known algorithm achieving optimal bounds for both simultaneously\. \\cite\{marinov2021pareto\} first showed that such simultaneous optimality is impossible against an \\emph\{adaptive\} adversary\. Our work takes a first step to demonstrate its possibility against an \\emph\{oblivious\} adversary when losses are \\emph\{deterministic\}\.  First, we extend the impossibility result of \\cite\{marinov2021pareto\} to the case of deterministic losses\. Then, we present an algorithm achieving optimal static and dynamic regret simultaneously against an oblivious adversary\. Together, they reveal a fundamental separation between adaptive and oblivious adversaries when multiple regret benchmarks are considered simultaneously\. It also provides new insight into the long open problem of simultaneously achieving optimal regret against switching benchmarks of different numbers of switches\.  Our algorithm uses negative static regret to compensate for the exploration overhead incurred when controlling dynamic regret, and leverages Blackwell approachability to jointly control both regrets\.  This yields a new model selection procedure for bandits that may be of independent interest\.

## Optimal Transport Reweighting for Robust Learning under Spurious Correlations and Label Noise

**Authors:** Sung Ho Jo; Seonghwi Kim; Wonsang Yun; Minwoo Chae

**ID:** 149217 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s2EZiHa9PF>) | [PDF](<https://openreview.net/pdf?id=s2EZiHa9PF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149217>)

Machine learning models often suffer performance degradation under subpopulation shift, particularly when spurious correlations cause models to rely on shortcut features that fail to generalize across subgroups\. A recent line of work mitigates this issue by using loss\-based signals to identify informative samples, but these signals can become severely distorted under label noise: mislabeled samples may also incur large losses and contaminate subsequent reweighting or retraining\. Despite its practical importance, this intersection remains largely underexplored\. We propose POTER, a reweighting framework based on optimal transport that derives sample importance from the transport geometry between the training distribution and a reference distribution constructed from limited validation group annotations\. By measuring alignment at the individual\-sample level rather than relying on loss, POTER downweights mislabeled or strongly bias\-aligned samples while assigning higher importance to samples better aligned with the reference distribution\. In addition, POTER requires only a single ERM training stage, moving beyond the retraining paradigm common in recent work\. Across standard benchmarks and noisy\-label settings, POTER achieves state\-of\-the\-art worst\-group accuracy, including cases where label corruption is concentrated within minority subgroups\.

## Chess\-World\-Model: A 10M\-Game Benchmark for Exact State Tracking from Chess Move Sequences

**Authors:** Benjamin Walker; Terry Lyons

**ID:** 139263 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8i6faPmkw>) | [PDF](<https://openreview.net/pdf?id=b8i6faPmkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139263>)

World models require state tracking, which is the ability to maintain a correct latent state across action sequences\. Existing benchmarks are often synthetic or language\-based, limiting their value as tests of structured state updates in realistic domains\. We introduce Chess\-World\-Model, a large\-scale state\-tracking benchmark built from $10$ million real chess games, where models predict the exact board state reached after a sequence of legal moves\. Alongside a held\-out real\-game split, we include an out\-of\-distribution split from uniformly random legal play, which tests whether models learn the transition rules rather than shortcuts from common human positions\. Prior theoretical and empirical work has shown that Transformers struggle to state\-track, while input\-dependent linear RNNs require expressive state\-transition matrices to do so\. We therefore benchmark a causal Transformer, block\-diagonal SLiCE, Mamba\-3, and Gated DeltaNet with negative eigenvalues under a matched interface and training protocol\. The recurrent models strongly outperform the Transformer at $3$ and $8$ million parameters\. Real\-game performance saturates above $18$ million parameters, but the random\-uniform split remains discriminative up to $38$ million, exposing failures otherwise hidden by scale\. Additionally, ablations show that less expressive state\-transition mechanisms reduce performance on the out\-of\-distribution split for all three recurrent models\. Together, these results establish Chess\-World\-Model as a practical large\-scale benchmark for state tracking that exposes failures model scale would otherwise conceal\.

## COSMIO: A Benchmark for Cross\-Survey Modality Imputation

**Authors:** Dichang Zhang; Yixuan Shao; Jiali Cui; Haotian Yin; Yuanpeng Liu; Jiaiq Deng; Xiang Gao; Zhiqiang Lao; Heather Yu; Simon Birrer; Dimitris Samaras

**ID:** 139351 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UwoE2LI1HF>) | [PDF](<https://openreview.net/pdf?id=UwoE2LI1HF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139351>)

Large\-scale astronomical surveys define a heterogeneous, partially observed multi\-survey learning setting: each object is observed by only a subset of surveys, while survey observations differ in resolutions, wavelength coverage, noise characteristics, and footprints\. We formalize this as the problem of cross\-survey modality imputation and introduce COSMIO, a multi\-survey benchmark of aligned observations obtained by forward\-modeling shared astrophysical scenes across LSST, Euclid, and Roman under survey\-specific instrument characteristics\. The benchmark enables systematic evaluation of imputation across source\-target survey combinations and missing\-survey patterns\. We evaluate a broad range of machine learning methods for imputation\. Our results reveal a clear domain gap: methods developed for existing imputation settings transfer poorly to the astronomical survey setting, indicating that cross\-survey imputation constitutes a distinct learning problem\. Beyond common\-object imputation, we identify missing\-modality rare\-event imputation as a central challenge\. This regime arises in the early stages of new surveys, when rare but scientifically valuable phenomena may be available only from old surveys\. We use strong gravitational lensing, where light from a background galaxy is gravitationally deflected by a foreground galaxy, as a representative rare\-event setting\. We evaluate model performance on zero\-shot imputation of gravitational lenses and on downstream scientific tasks using the imputed lens observations\. On our constructed evaluation set of galaxy–galaxy strong lenses, performance degrades under rare\-event distribution shift, and this degradation further propagates to the downstream lens\-detection task\. Our results establish cross\-survey imputation as a distinct and challenging machine learning problem, highlighting the need for methods that are robust to distribution shift and aligned with scientific objectives\. Code and data are available at https://anonymous\.4open\.science/r/COSMI\-3671/\.

## Towards Principled Efficient Rollout Allocation in Test\-Time Training

**Authors:** Youkang Wang; Jian Wang; Tianyi Zeng; Xiao\-Yong Wei; Qing Li

**ID:** 152071 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VhEkh5UxQR>) | [PDF](<https://openreview.net/pdf?id=VhEkh5UxQR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152071>)

Test\-time training and test\-time policy optimization have emerged as effective tools for improving the robustness of LLMs under distribution shift\. A common approach constructs label\-free reward signals from multiple sampled rollouts using majority voting, but existing methods typically rely on a fixed, large rollout budget for every query\. This fixed allocation is inefficient because many queries reach consensus well before the rollout budget is exhausted\. In this work, we introduce \\textbf\{AdaPO\}, which replaces fixed\-budget majority voting with an adaptive two\-stage voting procedure that moves from electing to confirming when a leader is statistically dominant, and stops once the posterior error of accepting that leader is sufficiently low\. AdaPO is plug\-and\-play with standard policy optimization algorithms such as PPO and GRPO, and it is also compatible with supervised fine\-tuning at test time\. Our rigorous theoretical results show that, under the symmetric categorical noise model with known likelihood parameters, AdaPO's electing\-stage trigger coincides with the classical sequential probability ratio test \(SPRT\), while the confirming\-stage rule yields a principled posterior\-threshold stopping mechanism\. Across representative reasoning benchmarks, AdaPO substantially reduces compute, achieving over 40\\% token savings on GPQA while maintaining competitive accuracy\. The source code will be open upon acceptance at \\url\{https://open\-upon\-acceptance\}\.

## Benchmarking Compositional Generalisation for Machine Learning Interatomic Potentials

**Authors:** Amir Masoud Nourollah; Irtaza Khalid; Stefano Leoni; Steven Schockaert

**ID:** 139491 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MTNbRIVxvp>) | [PDF](<https://openreview.net/pdf?id=MTNbRIVxvp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139491>)

Machine Learning Interatomic Potentials play a fundamental role in computational chemistry and materials science, enabling applications from molecular dynamics simulations to drug design and materials discovery\. While recent approaches can estimate inter\-atomic forces with high precision, it remains unclear to what extent they can generalise to previously unseen molecules\. Do they learn the compositional structure of chemistry, capturing how molecular fragments and their combinations determine properties, or do they primarily learn to interpolate patterns that are specific to the training examples? To address this question, we propose a benchmark consisting of four tasks that require some form of compositional generalisation\. In each task, models are tested on molecules that were unseen during training, but the training data is chosen such that generalisation to the test examples should be feasible for models that learn the underlying physical principles\. Our empirical analysis shows that the considered tasks are highly challenging for state\-of\-the\-art models, with errors on out\-of\-distribution examples often an order of magnitude higher than on in\-distribution examples, even when using foundation models that have been pre\-trained on millions of molecules\.

## When Catastrophic Inheritance Meets Forgetting in Continual Adaptation of Foundation Models

**Authors:** Quanyu Zhang; Zhongyi Han; Zhenxue Chen; Xiao\-Long Yin; Henggui Zhang; Shuo Li

**ID:** 150457 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=htPvCPtGAl>) | [PDF](<https://openreview.net/pdf?id=htPvCPtGAl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150457>)

Pretraining noise in foundation models has been shown to significantly impair the generalization performance of downstream tasks, leading to catastrophic inheritance\. However, when downstream tasks arrive sequentially, how pretraining noise affects continual adaptation, which involves the forgetting of previously learned knowledge, remains underexplored\. This paper is the first to study this problem\. Using asymmetric label noise as a realistic setting, we find that pretraining noise persistently degrades performance on new tasks during continual adaptation and may further exacerbate forgetting of previously adapted tasks\. Further analysis shows that the persistent effect of pretraining noise mainly manifests as inherited output contraction, where the logit gap between the true class and competing classes is compressed\. To mitigate this issue, we propose Ambiguous Boundary Correction \(ABC\), a method that performs anchor\-guided neighborhood reweighting to correct ambiguous regions induced by inherited output contraction\. Experiments on synthetic and real\-world noisy pretrained models show that ABC improves robustness to pretraining noise under both domain shifts and class shifts\.

## SWE\-Marathon: Can AI Agents Autonomously Complete Ultra\-Long\-Horizon Software Work?

**Authors:** Rishi Desai; Joan Cabezas; Neel Harsola; Adnan E Assadi; Pramod Srinivasan; Roey B Chaim; Fenil Faldu; Prannay Hebbar; Jiankai Sun; Christopher Settles; Omkaar Kamath; Pratyush Shukla; Albert Liu; Yiyuan Li; Nevasini Sasikumar; Xiangyi Li; Pranav Raja; Ishan Gupta; Marek Suppa; Daniel Wang; Erik Quintanilla; Derek Chen; Chris Kong; Steven Dillmann; Ivan Bercovich; Jesse Hu

**ID:** 139342 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VdUYkialkd>) | [PDF](<https://openreview.net/pdf?id=VdUYkialkd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139342>)

AI agents are increasingly expected to complete long\-horizon workflows that require sustained progress over hours, millions of tokens, and complex environments\. Yet current agent benchmarks largely evaluate short\-form tasks, such as single pull requests, small tickets, or 5\-\-10 minute exercises, limiting our ability to measure agents' capabilities in planning, long\-context understanding, and memory use\. We introduce SWE\-Marathon, a benchmark of 20 long\-horizon tasks spanning software engineering and adjacent technical domains\. Each task consists of a unique executable environment, a human\-written reference solution, and a multi\-layer verification suite\. Logged agent attempts average 27\.2M total tokens, making SWE\-Marathon substantially longer\-horizon than existing SWE and command\-line agent benchmarks\. Current frontier coding agents solve fewer than 20\\% of tasks\. Failures often arise from poor self\-verification, self\-reported infeasibility, and premature termination\. We also observe reward\-hacking behavior in 18\.8\\% of rollouts, where agents attempt to exploit the environment or verifier to bypass the intended workflow\. SWE\-Marathon includes adversarial review of test suites and execution environments, as well as multi\-layer checks designed to prevent shortcut solutions\. We release SWE\-Marathon and its evaluation code to support reproducible measurement of long\-horizon agent capabilities\.

## Statistical Limits of Affine Equivariant Estimation

**Authors:** Zihao Chen; Yeshwanth Cherapanamjeri

**ID:** 148436 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xpGyDKUODu>) | [PDF](<https://openreview.net/pdf?id=xpGyDKUODu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148436>)

We investigate the quantitative performance of affine\-equivariant estimators for robust mean estimation\. As a natural stability requirement, the construction of such affine\-equivariant estimators has been extensively studied in the statistics literature\. We quantitatively evaluate these estimators under two outlier models which have been the subject of much recent work: the heavy\-tailed and adversarial corruption settings\. We establish lower bounds which show that affine\-equivariance induces a \\emph\{strict\} degradation in recovery error with quantitative rates degrading by a factor of $\\sqrt\{d\}$ in both settings\. We find that classical estimators such as the Tukey median \{\(Tukey '75\)\} and Stahel\-Donoho estimator \{\(Stahel '81 and Donoho '82\)\} are either quantitatively sub\-optimal \\emph\{even within\} the class of affine\-equivariant estimators or lack any quantitative guarantees\. On the other hand, recent estimators with strong quantitative guarantees are not affine\-equivariant or require additional distributional assumptions to achieve it\. We remedy this by constructing a new affine\-equivariant estimator which nearly matches our lower bound\. Our estimator is based on a novel notion of a high\-dimensional median which may be of independent interest\. Notably, our results are applicable more broadly to \\emph\{any\} estimator whose performance is evaluated in the \\emph\{Mahalanobis\} norm which, for affine\-equivariant estimators, corresponds to an evaluation in \\emph\{Euclidean\} norm on isotropic distributions\.

## An Assessment of Human vs\. Model Uncertainty in Soft\-Label Learning and Calibration

**Authors:** Maja Pavlovic; Silviu Paun; Massimo Poesio

**ID:** 139664 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9mjkOAlNE>) | [PDF](<https://openreview.net/pdf?id=C9mjkOAlNE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139664>)

Central to human\-aligned AI is understanding the benefits of human\-elicited labels over synthetic alternatives\. While human soft\-labels improve calibration by capturing uncertainty, prior studies conflate these benefits with the implicit correction of mislabeled data \(mode shifts\), obscuring true effects of soft\-labels\. We present a controlled audit of soft\-label learning across MNIST and a synthetic variant, re\-annotating subsets to extract human uncertainty\. By decoupling soft\-label supervision from underlying label mode shifts, we show that while human soft\-labels do provide accuracy gains, their larger value lies in acting as a regularizer that improves model calibration on difficult samples and promotes stable convergence across training runs\. Dataset cartography reveals models trained on human soft\-labels mirror human uncertainty, whereas those trained on synthetic labels fail to align with humans\. Broadly, this work provides a diagnostic testbed for human\-AI uncertainty alignment\.

## AnchorRep: Defending LLMs Against Cross\-Model Adversarial Transfer via Representation Repulsion

**Authors:** Gal Wertheizer; Rom Himelstein; Tomer Peretz; Avi Mendelson

**ID:** 149182 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sHGeJADnFq>) | [PDF](<https://openreview.net/pdf?id=sHGeJADnFq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149182>)

Adversarial attacks optimized on a single open\-weight LLM can transfer to and jailbreak architecturally different models, allowing an attacker with white\-box access to one model to compromise independently deployed systems\. This creates a shared vulnerability across models, yet existing defenses are not designed for this cross\-model threat\. We find that transfer aligns with shared internal representation geometry, making it a natural defense target\. We find that cross\-model transfer aligns with shared internal representation geometry, making it a natural defense target\. \\textbf\{AnchorRep\} targets this geometry directly with a lightweight LoRA adapter that pushes the defended model's internal representations of harmful prompts away from those of a frozen anchor model on the same prompts\. Training uses a small set of harmful prompts and no adversarial examples\. Across five models and four architectural families, AnchorRep reduces cross\-model attack success rate to $\\leq$1\.1\\% on 2\{,\}000 transferred attacks \(0\\% on two\), including the largest drop on Mistral \($36\\% \\to 1\.1\\%$\)\. Existing defenses can reduce transfer, but only at high cost—either inducing up to 77\\% degenerate benign output or increasing over\-refusal by up to 18\\%\. Because such degenerate benign outputs are not captured by standard refusal\-based metrics, we introduce the \\textbf\{Benign Garble Rate\} to quantify them\. Our results suggest that cross\-model robustness can be achieved by shaping representation geometry, without requiring attack\-specific training\. \\smallskip \\noindent\\faGithub\~Code, configs and logs: \\href\{https://anonymous\.4open\.science/r/AnchorRep/README\.md\}\{anonymous\.4open\.science/r/AnchorRep\}

## AdapMatch: Adaptive Bias Decoupling for Semi\-Supervised Partial Label Learning under Unknown Class Distributions

**Authors:** Yuheng Jia; Yaodong Shen; Jiahao Jiang; Hui LIU; Junhui Hou

**ID:** 150939 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eAtYtntHfU>) | [PDF](<https://openreview.net/pdf?id=eAtYtntHfU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150939>)

Partial Label Learning \(PLL\) trains models from instances with candidate label sets containing the ground\-truth, while Semi\-Supervised Partial Label Learning \(SSPLL\) further leverages the available unlabeled data to prompt the performance\. The previous SSPLL methods implicitly assume the unlabeled data are class\-balanced distributed\. However, in realistic scenarios, the class distribution of unlabeled data is unknown, resulting in performance collapse on minority classes for the existing SSPLL methods\. We identify two coupled biases behind this failure: \(i\) pseudo\-label selection bias, where high\-confidence filtering tends to over\-select samples from dominant classes, causing the training data to become increasingly skewed toward these classes; and \(ii\) disambiguation bias, where dominant classes are more likely to win within candidate sets, even when they are incorrect\. Theoretically, we show that these two biases reinforce each other over training, forming a feedback loop that degrades generalization performance\. To weaken this loop, we propose AdapMatch, which uses DAS to reduce the skew in training data caused by pseudo\-label selection bias via prior\-aware pseudo\-label admission and CAD to lower the disambiguation error by suppressing candidate\-set domination\. Across five benchmarks, AdapMatch yields gains up to 41\.31\\% at most , showing strong robustness to varying scale, imbalance, and ambiguity\. The code is available at \\url\{https://anonymous\.4open\.science/r/AdapMatch\-8BC5\}\.

## Flipping Bits, Not Gradients: Sharpness\-Aware Minimization Directly on the Boolean Hypercube

**Authors:** Ba\-Hien Tran

**ID:** 150844 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evBaB8ZWOV>) | [PDF](<https://openreview.net/pdf?id=evBaB8ZWOV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150844>)

Sharpness\-Aware Minimization \(SAM\) improves generalization in continuous deep learning, yet applying it to binary\-weight networks via latent\-space heuristics suffers from a fundamental geometric mismatch: continuous perturbations do not faithfully probe the discrete loss landscape on $\\\{\-1,\+1\\\}^n$\.  We introduce BOLD\-SAM, the first sharpness\-aware optimizer that operates natively on the Boolean hypercube, replacing the Euclidean $\\ell\_p$\-ball with a $k$\-bit Hamming ball and solving the resulting discrete min\-max problem via greedy ascent followed by sharpness\-aware bit\-flip descent\.  The objective is theoretically justified from three complementary perspectives: PAC\-Bayes, compression, and distributionally robust optimization\.  We prove an approximation guarantee for the ascent step and a finite\-time convergence bound for the descent, both governed by the discrete interaction Hessian, which emerges as the unifying quantity linking ascent quality to convergence rate\.  We further connect discrete flatness to Forman\-Ricci curvature and algorithmic complexity\. Experiments on a wide range of architectures and datasets demonstrate consistent improvements in clean accuracy and out\-of\-distribution robustness over standard binary training and latent\-space SAM baselines\.

## Semantically Complementary Spectral Views Learning for Graph\-Level Anomaly Detection

**Authors:** Yuanming Liu; Fan Xu; Xibin Zhao; Hai Wan; Wu Junran; Nan Wang; Jiqiang Liu

**ID:** 148656 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w7tK56sqat>) | [PDF](<https://openreview.net/pdf?id=w7tK56sqat>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148656>)

Graph\-level anomaly detection \(GLAD\) is a critical task in domains like social networks and bioinformatics\. However, current unsupervised contrastive learning\-based methods rely on semantically homogeneous augmentations, leading to catastrophic informational overlap that trivializes the learning objective and effectively masks anomalous signals in GLAD\. To overcome this, we propose Sima \(Semantically Complementary Spectral Views\), a novel contrastive framework that learns from semantically complementary spectral views rather than redundant homogeneous views\. Sima first constructs a pair of spectral views to separately capture global community structure and local heterophilous variations, which together cover the full graph spectrum of anomalous patterns\. Inspired by the Multi\-View Information Bottleneck principle, we further design a soft subgraph extraction module with Score Reconstruction Attention \(SRA\) and an anchor\-guided condensation mechanism to distill the essential shared information from each view into a compact representation\. We then optimize a contrastive objective across these distilled views to enforce cross\-view alignment and amplify subtle structural deviations\. Extensive experiments on challenging GLAD and graph\-level out\-of\-distribution detection \(GLOD\) benchmarks demonstrate that Sima achieves substantial and consistent gains in average performance over state\-of\-the\-art baselines\.

## Adaptive Covariance and Multi\-Layer Alignment for Out\-of\-Distribution Detection

**Authors:** Haoyang Su; Qi Chen; Max Gutbrod; Johan Verjans; Zhibin Liao

**ID:** 151580 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZXtr5Sueqd>) | [PDF](<https://openreview.net/pdf?id=ZXtr5Sueqd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151580>)

Out\-of\-distribution \(OOD\) detection plays a pivotal role in ensuring the reliability and trustworthiness of AI systems\. Although existing approaches achieve strong performance by leveraging features, logits, or both, most of them cannot generalize well across domains due to either overlooking critical information in low\-level representations from shallow layers or utilizing sub\-optimal layer selection strategies\. In this paper, we propose Multi\-Layer Adaptive Mahalanobis\-Cosine Similarity \(ML\-AMCoS\), a method that adaptively integrates cosine similarity with class\-conditional Gaussian distributions\. ML\-AMCoS is designed to capture subtle nuances in feature covariance when intra\-class variance is low, while suppressing covariance noise when the variance is high\. To optimize the utilization of each layer, we calculate contribution weights based on performance against pseudo\-OOD samples, which are generated by cut\-mixing in\-distribution \(ID\) training images with the four corners of images from different classes\. Extensive experiments across diverse domains demonstrate that our method significantly improves robustness and detection accuracy, achieving an average AUROC of 81\.13\\% and FPR@95 of 40\.12\\% on near\-OOD detection, outperforming the state\-of\-the\-art methods by 7\.25\\% and 7\.08\\%, respectively\.

## Is Complex Training Necessary for Long\-Tailed OOD Detection? A Re\-think from Feature Geometry

**Authors:** Ningkang Peng; Xuanming Chen; Yanhui Gu

**ID:** 152780 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QOPXWKIOWU>) | [PDF](<https://openreview.net/pdf?id=QOPXWKIOWU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152780>)

Long\-tailed out\-of\-distribution \(LT\-OOD\) detection is often addressed with specialized training, including auxiliary out\-of\-distribution \(OOD\) data, abstention heads, contrastive objectives, energy losses, or gradient\-conflict control\. We show that these training mechanisms can obscure a simpler issue: frozen long\-tailed representations may already contain useful OOD evidence, but raw Mahalanobis distance is distorted by frequency\-coupled feature radius and poorly supported tail covariance\. We propose \\emph\{Hyperspherical Pooled Mahalanobis\} \(\\HPM\), a post\-hoc detector that normalizes features onto the unit sphere and replaces class\-specific covariance with a pooled, ridge\-regularized metric while keeping class means as semantic anchors\. In CIFAR\-LT experiments and an ImageNet\-100\-LT near\-OOD boundary analysis, \\HPM improves raw Mahalanobis scoring; for Prior\-Calibrated ERM \(PC\-ERM\), it raises AUROC from 46\.49 to 85\.67 on CIFAR\-10\-LT and from 50\.40 to 78\.35 on CIFAR\-100\-LT\. This simple PC\-ERM\+\\HPM pipeline also achieves the best Log Efficiency Score \(LES; 3\.08\) on CIFAR\-100\-LT, retaining roughly 95\\% of the best CIFAR\-100\-LT AUROC observed among the compared post\-hoc scores at substantially lower training\-time cost\. These results argue for evaluating representation quality, detector geometry, and training complexity as separate factors in LT\-OOD detection\.

## The road reaches every place, the short cut only one: Self\-Adversarial Shortcut Mitigation for AI\-Generated Image Detection

**Authors:** Haifeng Zhang; Qinghui He; Xiuli Bi; Bo Liu; Chi\-Man Pun; Bin Xiao

**ID:** 151317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bO6CYKnaZo>) | [PDF](<https://openreview.net/pdf?id=bO6CYKnaZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151317>)

With the rapid advancement of generative models, AI\-generated images \(AIGIs\) have become increasingly realistic, posing new challenges for reliable detection\. In this work, we revisit the root causes of poor generalization in AIGI detectors from the perspective of shortcut learning\. We find that detectors often rely on spurious semantic cues or a single prominent artifact, causing the feature space to collapse toward low diversity and severely limiting generalization\. To characterize this issue, we propose the Generative Artifact Manifold Clustering \(GAMC\) hypothesis, which shows that although generative artifacts are multi\-dimensional, different generators occupy distinct distributions along these dimensions, making detectors that rely on local artifact cues inherently fragile\. To address this, we shift AIGI detection from “single\-cue reliance” to “multi\-dimensional discrimination” and introduce the Semantic–Artifact Self\-Adversarial Feature Learning \(SA\-AFL\) framework\. SA\-AFL progressively disentangles semantics from artifacts and employs a self\-adversarial mechanism to balance learning across artifact dimensions, enabling the model to retain richer and more shared generative features\. As a result, SA\-AFL reduces shortcut reliance and learns more transferable evidence for cross\-generator detection\. Comprehensive experiments on images from 23 generative models show that SA\-AFL improves ACC by 6\.84\\% and mAP by 8\.25\\% over state\-of\-the\-art methods\.

## Beyond Ground Truth: Evaluating Non\-Verifiable Reasoning in LLMs through Moral Robustness

**Authors:** Elizaveta Tennant; Benjamin Henke; Anita Keshmirian; Murray Shanahan; Verena Rieser; Kristian Lum; Sydney Levine; Julia Haas

**ID:** 154911 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A0CygfB9oj>) | [PDF](<https://openreview.net/pdf?id=A0CygfB9oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154911>)

As LLMs increasingly serve in advisory and deliberative roles, users rely on them for non\-verifiable reasoning in domains lacking objective ground truths\. However, traditional evaluations of LLM reasoning focus almost exclusively on fact\-based domains, such as mathematics and science, leaving uncertainty over whether and to what degree models can handle ambiguous, subjective, or value\-laden problems over time\. To address this concern, we propose moral reasoning as a paradigmatic subdomain of non\-verifiable reasoning\. We define moral robustness as a model’s capacity to exhibit sound moral reasoning across time and contexts, and we introduce a scalable, adversarial, multi\-turn evaluation framework to empirically measure this capability\. We simulate 48,000 user\-agent moral deliberations across four frontier LLMs, varying premise relevance, premise order, conversation duration, and the user's stated moral view\. We find that models successfully ignore morally\-irrelevant distractors, but shift their reasoning by up to 6\.5\\%, on average, towards the user's stated preferred moral view, and varying their reasoning depending on factors such as order \(altering moral judgments by order in 13\-22\\% of the cases\) and duration \(altering moral judgments between single\-turn and multi\-turn in 10\-24\\% of the cases\)\. Our analysis indicates that models tailor not just their final verdicts but their underlying justifications to align with a user’s moral viewpoint — a failure mode we characterize as moral deliberative sycophancy\.

## VSRo\-200: A Romanian Visual Speech Recognition Dataset for Studying Supervision and Multimodal Robustness

**Authors:** Iulia\-Maria Udrea; Alexandra Diaconu; Bogdan Alexe

**ID:** 138997 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rwHd9hxvoh>) | [PDF](<https://openreview.net/pdf?id=rwHd9hxvoh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138997>)

We introduce VSRo\-200, the first large\-scale dataset for visual speech recognition \(lip reading\) in Romanian, comprising 200 hours of real\-world podcast videos\. All samples are annotated with pseudo\-labels generated by a fine\-tuned Romanian ASR model, while a subset of 100 hours is additionally transcribed by humans, enabling controlled analysis of supervision quality under a unified framework\.  Building on this dataset, we establish a benchmark for visual speech recognition in low\-resource settings\. We systematically study the impact of supervision quality, showing that while human annotations provide better performance at fixed data scales, pseudo\-labels enable continued improvements through scalability\. We further evaluate robustness under domain shift using curated out\-of\-distribution \(OOD\) test sets, and analyze audio\-visual speech recognition \(AVSR\) under noisy conditions, where multimodal fusion significantly improves robustness compared to audio\-only models\.  Finally, we demonstrate that representations learned on VSRo\-200 transfer effectively to the LRRo benchmark for isolated word recognition, substantially outperforming previously reported results\.  Overall, VSRo\-200 provides a new testbed for studying supervision, domain generalization, and multimodal fusion in low\-resource visual speech recognition\.

## Revisiting On\-policy Adversarial Black\-Box Distillation: Calibrating Groupwise Reward Geometry for Effective Advantage Construction

**Authors:** Xiao Cui; Mo Zhu; Yulei Qin; Yuze Wu; Wengang Zhou; Houqiang Li

**ID:** 155928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1jWdRb1zSZ>) | [PDF](<https://openreview.net/pdf?id=1jWdRb1zSZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155928>)

Black\-box distillation is a practical route for transferring capabilities from API\-accessible large language models that expose only text outputs into smaller student models\. Recent on\-policy adversarial methods such as GAD improve over SeqKD by forming an adversarial loop between a critic and a student, where the critic provides rewards for GRPO\-based student policy optimization over the student's sampled responses\. However, GRPO computes advantages from the within\-group relative rewards of student samples for the same prompt, whereas the critic is trained primarily to distinguish teacher responses from student responses\. This objective mismatch can produce reward groups with collapsed scale or fragile margins, leading to brittle grouped optimization signals\. We propose Groupwise Reward Geometry Conditioning \(GRGC\), a two\-stage framework that improves advantage construction by shaping student\-side reward groups during both critic training and policy optimization\. To improve critic\-side conditioning, Gaussian groupwise Optimal Transport calibration regularizes the critic during training to produce reward groups with non\-collapsed spread and smooth rank\-wise gaps by matching sorted prompt\-wise rewards to group\-centered Gaussian quantiles\. Building on this conditioned reward geometry, policy\-side group power modulation reshapes the prompt\-wise reward groups before they are converted into advantages, preserving the critic\-induced ordering while increasing optimization\-relevant margin separability\. Extensive experiments across diverse teachers, student model families and scales, and training datasets demonstrate the effectiveness of GRGC on both in\-distribution and out\-of\-distribution evaluations, while introducing negligible overhead over GAD\. The code is available at https://anonymous\.4open\.science/r/GRGC\.

## Robust Satisficing Ensemble: Scalable Model Aggregation Under Distribution Shifts

**Authors:** Ahmet Faruk Cetinkaya; Enes Ağırman; Cem Tekin

**ID:** 149478 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ppKtrQWhKN>) | [PDF](<https://openreview.net/pdf?id=ppKtrQWhKN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149478>)

Standard ensemble methods can improve robustness by mitigating individual model stochasticity, but they frequently fail to generalize beyond the training distribution, leaving systems vulnerable to out\-of\-distribution \(OOD\) data\. We introduce the Robust Satisficing Ensemble \(RSE\), a scalable probabilistic aggregation framework designed to secure model combinations by minimizing their fragility against distributional changes\. By bridging a robust satisficing objective with a quadratic risk surrogate, RSE derives a closed\-form analytical inner adversary\. This fundamental reformulation enables highly efficient weight updates without the computational bottleneck of standard minimax optimization, crucially decoupling optimization complexity from sample size to scale effectively to large datasets\. In particular, we prove a geometrically decaying truncation error for the fragility approximation via Lagrange\-Bürmann expansion and show that the proximal RSE updates converge to a stationary point\. We evaluate RSE across a comprehensive spectrum of distribution shifts, including adversarial label shift \(SST\-5, TREC\), natural subpopulation and temporal shifts \(CivilComments, HuffPost\)\. Our results demonstrate that RSE consistently outperforms strong robust baselines, including GroupDRO, IRM, and SRM\. These findings establish RSE as a practical, theoretically grounded safeguard for reliable model aggregation in dynamic environments\.

## Hyperbolic Concept Bottleneck Models

**Authors:** Daniel Uyterlinde; Swasti S Mishra; Pascal Mettes

**ID:** 151003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dfLMID86Cd>) | [PDF](<https://openreview.net/pdf?id=dfLMID86Cd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151003>)

Concept Bottleneck Models \(CBMs\) have become a popular approach to enable interpretability in neural networks by constraining classifier inputs to a set of human\-understandable concepts\. While effective, current models embed concepts in flat Euclidean space, treating them as independent, orthogonal dimensions\. Concepts, however, are highly structured and organized in semantic hierarchies\. To resolve this mismatch, we propose Hyperbolic Concept Bottleneck Models \(HypCBM\), a post\-hoc framework that grounds the bottleneck in this structure by reformulating concept activation as asymmetric geometric containment in hyperbolic space\. Rather than treating entailment cones as a pre\-training penalty, we show they encode a natural test\-time activation signal: the margin of inclusion within a concept's entailment cone yields sparse, hierarchy\-aware activations without any additional supervision or learned modules\. We further introduce an adaptive scaling law for hierarchically faithful interventions, propagating user corrections coherently through the concept tree\. Empirically, HypCBM rivals post\-hoc Euclidean models trained on 20$\\times$ more data in sparse regimes required for human interpretability, with stronger hierarchical consistency and improved robustness to input corruptions\.

## A Regularization\-Based Approach to Public Belief State Search for Adversarial Games

**Authors:** Sobhan Mohammadpour; Samuel Sokota; Brandon Kaplowitz; Zico Kolter; Noam Brown; Gabriele Farina

**ID:** 152665 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RIlBGF1FLf>) | [PDF](<https://openreview.net/pdf?id=RIlBGF1FLf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152665>)

The public belief state \(PBS\), which is the posterior over game histories conditioned on public information, is a fundamental abstraction for designing game\-theoretically sound search algorithms for imperfect\-information games\. Existing sound PBS search techniques for adversarial games fall into two categories: gadget\-game\-based algorithms \(including Libratus, DeepStack, Pluribus, Supremus, and Student of Games\) and ReBeL\-based algorithms\. Both these categories possess disadvantages, including a reliance on discontinuous functions, an inability to re\-solve subgames, and an implicit representation of policies\. In this work, we propose Gravel, a new approach for PBS search\-\-\-different from these previous two categories\-\-\-that achieves game\-theoretic soundness via regularization\. Unlike the aforementioned approaches, Gravel relies on smooth functions, can initiate search at any point in the game, and outputs explicit policies directly\. We empirically demonstrate the advantages of Gravel for no\-limit Texas hold'em, where we show that it outperforms ReBeL both in head\-to\-head competitions against Slumbot and in endgame solving\. We include our codebase in the submission, making Gravel the first open\-source high\-performance no\-limit Texas hold'em AI\.

## Learning Robust Representations for Defending White\-Box Adversarial Attacks in Continual Learning

**Authors:** Yusen Chen; Fei Ye; Qihe Liu; Adrian G\. Bors; shijie zhou

**ID:** 155739 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KoSZdy13A>) | [PDF](<https://openreview.net/pdf?id=3KoSZdy13A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155739>)

Continual learning under adversarial perturbations remains underexplored, despite its importance in security\-critical deployments where attack patterns evolve over time\. Existing continual adversarial defense methods mainly rely on replay or prediction\-space regularization, but often fail to preserve robust representations across sequentially arriving attack types\. In this paper, we study continual adversarial defense, where a model receives a sequence of tasks induced by different white\-box attacks and must acquire robustness to new attacks without forgetting previously learned defenses\. We address this challenging learning scenario by proposing the Learning Robust Representation Framework \(LRRF\), a representation\-centric framework that improves robustness through hierarchical alignment at three complementary levels\. First, we introduce the Dynamic Representation Matching \(DRM\) mechanism that aligns clean and adversarial feature distributions within each task to reduce the clean\-robustness trade\-off\. Second, a Cross\-Task Invariant Representation \(CTIR\) mechanism is proposed to regularize the current representation network against an accumulated network from previous tasks, encouraging attack\-invariant features to persist over time\. Third, a Knowledge Consolidation Optimization \(KCO\) mechanism is proposed to match class\-consistent clean and adversarial features using replayed samples, which further stabilizes category structure across tasks\. The empirical results show that the proposed approach achieves state\-of\-the\-art performance\.

## Selective Off\-Policy Reference Tuning with Plan Guidance

**Authors:** Duc A Le; Tien\-Phat Nguyen; Thien H Nguyen; Linh Ngo; Trung Le

**ID:** 149575 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p7jgfBt3yz>) | [PDF](<https://openreview.net/pdf?id=p7jgfBt3yz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149575>)

Reinforcement learning from verifiable rewards improves reasoning by reinforcing sampled solutions that receive positive outcomes, but group\-relative methods such as GRPO become silent on hard prompts where every sampled rollout is wrong\. These zero\-reward prompts are often the most informative failures: each comes with a verified reference solution, yet uniformly imitating the full trace mixes core reasoning decisions with routine algebra, formatting, and surface wording\. We propose \*\*Selective Off\-Policy Reference Tuning with Plan Guidance \(SORT\)\*\*, an auxiliary repair update that leaves GRPO rollout generation unchanged\. For each failed prompt, SORT extracts a reference\-derived reasoning plan and scores every reference token twice under the same model, once with only the problem and once with the plan added to the context\. Tokens whose probabilities rise under plan conditioning are treated as structurally informative and receive larger Dynamic Fine\-Tuning updates, while tokens outside the model's support remain controlled by the base probability\. We formalize this mechanism with a ground\-truth plan model and prove that the SORT weight approaches an oracle structural\-token weight as the extracted plan better approximates the true plan\-conditioned distribution\. Across three instruction\-tuned backbones and eight in\-distribution and out\-of\-distribution reasoning benchmarks, SORT consistently improves over GRPO and guidance\-based baselines, with the largest gains on the weakest model where zero\-reward failures are most frequent\.

## FLIP: Fast and Accurate Global Lipschitz Estimation for Large Feedforward Networks

**Authors:** Hongbo Chen; Zihao Ren

**ID:** 152411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TJXYYcODy8>) | [PDF](<https://openreview.net/pdf?id=TJXYYcODy8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152411>)

The Lipschitz constant of neural networks is widely used in robustness, control, generalization bounds, and training stability\. As modern neural networks continue to scale, existing methods for Lipschitz estimation are either very time\-consuming or overly loose\. In this work, we focus on both fast and accurate Lipschitz estimation for large feedforward neural networks\. We first reformulate the well\-known semidefinite program \(SDP\) framework into an explicit recursive form, and introduce a key theoretical result, bound backpropagation: the SDP objective has upper and lower bounds that can be propagated backward along the recursive computation graph and depend only on partial variables\. Leveraging this property, we decompose the original SDP into a sequence of small subproblems, each minimizing a combination of upper and lower bounds over partial variables\. We prove that each subproblem is one\-dimensional and convex, enabling fast solution via the secant method\. Finally, we present the full FLIP algorithm and its complexity, yielding fast and tight Lipschitz estimation for large feedforward networks\. Experiments on both randomly generated and trained networks show that FLIP improves speed and tightness by several orders of magnitude over prior methods, giving the tightest Lipschitz estimates for 100M\-parameter networks in 3 seconds\.

## LINK: Learning to Localize from Known to Unknown Scenes

**Authors:** Minghang Zhu; Kaibo Jin; Zhijing Wang; Ziwei Shi; Wen Li; Sheng Ao; Cheng Wang

**ID:** 152490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SjJBWDFaTv>) | [PDF](<https://openreview.net/pdf?id=SjJBWDFaTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152490>)

LiDAR relocalization based on scene coordinate regression \(SCR\) degrades sharply when test trajectories traverse route segments absent from training, a practical challenge in long\-range autonomous\-driving deployment, where complete route coverage is rarely achievable\. We present LINK, a confidence\-guided framework for relocalization under partial scene coverage\. LINK predicts an absolute pose hypothesis and scene features with an SCR backbone, estimates pose reliability from temporal pose\-feature sequences, and uses a decision policy to arbitrate between direct absolute hypotheses and relative motion propagated from reliable historical estimates, thereby preserving globally referenced localization across uncovered segments\. We also introduce UrbanUnseen, a city\-scale benchmark with native known\-to\-unknown scene transitions, together with controlled partial\-coverage protocols on Oxford and NCLT\. Experiments show that LINK substantially improves robustness when training coverage is incomplete, consistently outperforms representative map\-free baselines under partial coverage, and remains effective in fully known scenes\.

## Bet Imaginatively, not Historically in Independent\-Data Sequential Testing

**Authors:** Nathaniel Xu; Feng Liu; Danica J\. Sutherland

**ID:** 155229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7JEwqlPhhF>) | [PDF](<https://openreview.net/pdf?id=7JEwqlPhhF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155229>)

Sequential testing avoids some of the many controversies and drawbacks related to traditional batch testing with p\-values\. In particular, the \*testing by betting\* paradigm has developed rapidly in recent years and frames the level of evidence against the null as the wealth of a player in a betting game\. Naturally, how much a player should bet is a key consideration, and should reflect the statistician's confidence in what they know about the next observed data point\. Much of current work uses standard betting strategies developed for adversarial problems, where the data can be hand\-picked to the detriment of the player\. In the stochastic setting, where the data observed is independent and stationary, these approaches may be suboptimal\. We propose a simple betting strategy, \*\*\*f\*\*ollow the \*\*l\*\*eave\-one\-\*\*o\*\*ut \*\*e\*\*\-power\* \(FLOE\), that exploits the i\.i\.d\. nature of a data stream to estimate the e\-power of our current test on the underlying distribution\. We average not over the historical evidence collected so far, as generic online learning\-based methods do, but instead over the equally\-likely possible data sequences we might have seen based on shuffling the data\. With an additional principled regularization technique, this simple drop\-in method yields substantial improvements in testing performance on a variety of kernel two\-sample testing problems\.

## Should We Pay This Much for Robustness? Efficient Proxy Certificates with Marginal Guarantees

**Authors:** Sayed Soroush Haj Zargarbashi; Mohammad Sadegh Akhondzadeh; Aleksandar Bojchevski

**ID:** 153528 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KfO6qMzPTr>) | [PDF](<https://openreview.net/pdf?id=KfO6qMzPTr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153528>)

Modern classifiers remain sensitive to small input perturbations, while strong model\-agnostic robustness certificates such as randomized smoothing are often too expensive for deployment, requiring an extensive number \(e\.g\. 2000\) of model forward passes per input\. We propose a framework that delegates certification to a cheap proxy function while statistically controlling its deviation from the original sound certificate\. Given an exchangeable unlabeled calibration set, we tune the proxy via robust conformal risk control to guarantee a bounded marginal false\-approval rate: the probability that the proxy accepts an input whose prediction is flipped due to perturbation\. The resulting proxy certificate can be used either as a standalone marginal certificate or as a fallback mechanism that invokes the expensive certificate only when the proxy rejects\. We provide both single\-sample and sample\-heavy calibration recipes\. Empirically, our method substantially reduces test\-time certification cost \(to a single model forward\) while retaining much of the certified performance of randomized smoothing, enabling cheap yet effective robustness guarantees for larger architectures such as vision transformers and language models\.

## Why Transformers Struggle with Distribution\-Independent In\-Context Learning

**Authors:** Omar Naim; Jerome Bolte; Nicholas Asher

**ID:** 155239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Ci5cBtBUO>) | [PDF](<https://openreview.net/pdf?id=7Ci5cBtBUO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155239>)

Transformer models can adapt to new tasks from input\-\-output examples at inference time, a capability known as in\-context learning \(ICL\)\. A common interpretation is that transformers implement implicit learning algorithms in their forward pass, using the context to infer the task and predict the query\. We test this interpretation beyond the training distribution in controlled regression settings where classical estimators can generalize exactly\. Transformers achieve near\-perfect in\-distribution ICL, but fail sharply under scale and support shifts, exhibiting a cliff\-shaped collapse that is absent from least\-squares and kernel baselines\. This failure is robust across polynomial degrees and a range of training interventions\. We identify two architectural mechanisms that help explain this behavior\. First, final normalization imposes a readout\-side scale constraint, causing predictions to saturate at fixed boundary values\. Removing this constraint eliminates hard saturation, but does not restore reliable ICL under coefficient or label scaling\. Second, attention can become a context bottleneck: under distribution shift, softmax attention may concentrate on a small part of the prompt, limiting the context\-dependent adaptation required for ICL\. These results show that strong in\-distribution ICL does not imply distribution\-independent ICL, and suggest caution when using ICL instead of explicit retraining or adaptation under distribution shift\.

## Claudini: Autoresearch Discovers State\-of\-the\-Art Adversarial Attack Algorithms for LLMs

**Authors:** Alexander Panfilov; Peter Romov; Igor Shilov; Yves\-Alexandre de Montjoye; Jonas Geiping; Maksym Andriushchenko

**ID:** 154015 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GrSHePCSJD>) | [PDF](<https://openreview.net/pdf?id=GrSHePCSJD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154015>)

We show that AI agents are capable of discovering novel algorithms for adversarial attacks against LLMs, advancing the state of the art on white\-box jailbreaking and prompt injection evaluations\. We deploy frontier agents, such as Claude Code and Codex, in an autoresearch loop with access to a library of 30\+ prior methods and an evaluation script with a fixed compute budget\. We show this pipeline to be effective in jailbreaking OpenAI's GPT\-OSS\-Safeguard\-20B and in prompt injections against Meta\-SecAlign\-70B, an adversarially robust model\. For GPT\-OSS\-Safeguard, the best agent\-discovered method achieves up to 80\\% attack success rate on CBRN queries, compared to &lt;50\\% for existing methods\. For SecAlign, it achieves 100\\% ASR, while the best prior automated methods only achieve 82\\%\. Notably, in our setting, attack methods are developed on unrelated surrogate models for a pure random\-target token\-forcing task, yet generalize directly to prompt injection on the adversarially trained model\. Finally, we trace the lineage of methods developed during autoresearch, characterizing the agents' strategies and failure modes\. Adversarial ML has long held that defenses must be evaluated against attacks tailored to them; autoresearch automates this principle, and we argue it should be the minimum bar for defense evaluation going forward\.

## Residual Calibration via Local Feature\-Space Refinement

**Authors:** Xihao Wang; Chengyao Yu; Ruixing Ming

**ID:** 153548 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KYfZmJEdo6>) | [PDF](<https://openreview.net/pdf?id=KYfZmJEdo6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153548>)

Deep neural networks often struggle to provide reliable confidence estimates, making post\-hoc calibration essential for reliable decision\-making\. Existing post\-hoc methods largely rely on score\-based transformations, which improve marginal calibration but often fail to capture spatially varying miscalibration in local regions of the learned feature space\. To address this gap, we propose \*Local Adaptive Probability Estimation\* \(LAPE\), a post\-hoc residual calibration framework\. Specifically, LAPE treats the global calibrator output as a stable anchor and refines the individual prediction by leveraging non\-parametric local evidence from neighboring calibration samples\. As a plug\-and\-play refinement module, LAPE effectively utilizes the information about feature\-space geometry and can reuse the calibration data that are used to construct the global calibrator\. Furthermore, we extend LAPE to the setting with multi\-view inputs through \*Cascade Feature Augmentation Fusion\* \(CFAF\)\. Extensive experiments demonstrate that the proposed methods can improve the calibration quality of various existing baselines and remain efficient and robust across different settings\.

## A Solver\-Efficient Neural Adversarial Attack on Subgraph Matching Models

**Authors:** Ninad Gandhi; Mayukh Mondal; Brian S Mackwan; Soumen Chakrabarti; Abir De

**ID:** 154064 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GSvgUIyvAD>) | [PDF](<https://openreview.net/pdf?id=GSvgUIyvAD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154064>)

Neural subgraph matching \(NSGM\) models are widely used for graph retrieval, where relevance labels for query–corpus pairs are determined by whether the query graph is a subgraph of the corpus graph\. Despite widespread applications, the adversarial robustness of such models remains underexplored\. In principle, adversarial attacks should induce minimal shift of the instance distribution and the target labels\. However, in NSGM, a single edge insertion or deletion can flip relevance labels\. Detecting or controlling label flips requires repeated calls to potentially expensive combinatorial solvers\. Responding to this challenge, we propose SEAGRAM, a solver\-efficient adversarial attack method\. It learns to detect non\-critical node pairs whose perturbations will likely preserve relevance labels, thereby avoiding solver calls during test time\. We further employ an active learning strategy, which reduces the solver calls also during training\. Experiments show that SEAGRAM significantly worsens the performance of existing models\.

## Adversarial Corpus Selection to Attack Subgraph Matching based Graph Retrieval

**Authors:** Ninad Gandhi; Mayukh Mondal; Brian S Mackwan; Soumen Chakrabarti; Abir De

**ID:** 148248 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zIypQATU6I>) | [PDF](<https://openreview.net/pdf?id=zIypQATU6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148248>)

Neural subgraph retrieval systems, which retrieve corpus graphs containing a query graph as a subgraph, are used in safety\-critical applications such as drug discovery, hardware trojan detection, and molecular similarity search\. Despite their importance, the adversarial robustness of these systems remains unstudied\. We propose GRAP, the first adversarial attack framework targeting subgraph matching\-based graph retrieval\. \\our jointly selects a budget\-constrained subset of corpus graphs and computes per\-graph edge perturbations to maximally degrade retrieval quality\. We formalize two attack regimes: a ranking attack \(with solver access\) that corrupts pairwise relevance ordering while preserving relevance labels, and a solver\-free top\-K attack that directly displaces relevant results from retrieved sets\. In both cases, we show that the resulting adversarial set functions are monotone and approximately submodular, enabling greedy subset selection with provable approximation guarantees\. Experiments on five benchmark datasets against multiple state\-of\-the\-art victim retrievers demonstrate that our method consistently and significantly outperforms all baselines in both gray\-box and black\-box settings, with and without solver access\.

## Robust Domain Generalization under Divergent Marginal and Conditional Distributions

**Authors:** Jewon Yeom; Kyubyung Chae; Hyunggyu Lim; Yoonna Oh; Dongyoon Yang; Taesup Kim

**ID:** 154718 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BWnOtiERGq>) | [PDF](<https://openreview.net/pdf?id=BWnOtiERGq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154718>)

Domain generalization \(DG\) aims to learn predictive models that can generalize to unseen domains\. Most existing DG approaches focus on learning domain\-invariant representations under the assumption of conditional distribution shift \(i\.e\., primarily addressing changes in $P\(X\\mid Y\)$ while assuming $P\(Y\)$ remains stable\)\. However, real\-world scenarios with multiple domains often involve compound distribution shifts where both the marginal label distribution $P\(Y\)$ and the conditional distribution $P\(X\\mid Y\)$ vary simultaneously\. To address this, we propose a unified framework for robust domain generalization under divergent marginal and conditional distributions\. We derive a novel risk bound for unseen domains by explicitly decomposing the joint distribution into marginal and conditional components and characterizing risk gaps arising from both sources of divergence\. To operationalize this bound and prevent it from becoming vacuous, we explicitly enforce feature\-space $\\ell\_2$\-normalization\. We then design a meta\-learning procedure that minimizes and validates the proposed risk bound across seen domains, ensuring strong generalization to unseen ones\. Empirical evaluations demonstrate that our method achieves competitive performance not only on conventional DG benchmarks but also in challenging multi\-domain long\-tailed recognition settings where both marginal and conditional shifts are pronounced\.

## Beyond Structural Agnosticism: Stable\-Rank\-Guided LoRA for Structure\-Aware Fine\-Tuning

**Authors:** Yuanyang Cao; Xichun Liu; Fuwei Zhang; Meiqin Liu; Jianji Wang

**ID:** 151865 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XJnhTtLoXc>) | [PDF](<https://openreview.net/pdf?id=XJnhTtLoXc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151865>)

Current parameter\-efficient fine\-tuning \(PEFT\) methods like Low\-Rank Adaptation \(LoRA\) are structurally agnostic, applying uniform configurations across all layers, which overlooks their vast functional heterogeneity\. We propose Structure\-Aware LoRA \(SA\-LoRA\), a new framework that automatically tailors fine\-tuning intensity to each layer's intrinsic complexity\. Specifically, we leverage the Stable Rank as a spectral metric to align the adaptation magnitude of each layer with its pre\-trained spectral structure, enabling an automated, principled allocation of learning capacity that directly addresses the structural agnosticism of existing methods\. To enhance adaptability and robustness, we introduce a hybrid calibration mechanism that fuses the task\-agnostic prior with task\-specific gradient feedback, underpinned by a budget\-conservation principle to ensure stability\. Extensive experiments demonstrate that SA\-LoRA consistently outperforms strong PEFT baselines, often achieving state\-of\-the\-art performance with enhanced stability\. The code is available at https://anonymous\.4open\.science/r/SA\-LORA\-6809\.

## Practical Adversarial Attacks on Stochastic Bandits via Fake Data Injection

**Authors:** Qirun Zeng; Eric He; Richard Hoffmann; Xuchuang Wang; Jinhang Zuo

**ID:** 149250 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rmGDkBbxpE>) | [PDF](<https://openreview.net/pdf?id=rmGDkBbxpE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149250>)

Adversarial attacks on stochastic bandits have traditionally relied on some unrealistic assumptions, such as per\-round reward manipulation and unbounded perturbations, limiting their relevance to real\-world systems\. We propose a more practical threat model, Fake Data Injection, which reflects realistic adversarial constraints: the attacker can inject only a limited number of bounded fake feedback samples into the learner's history, simulating legitimate interactions\. We design effective attack strategies under this model, explicitly addressing both magnitude constraints \(on reward values\) and temporal constraints \(on when and how often data can be injected\)\. Our theoretical analysis shows that these attacks can mislead a class of bandit algorithms into selecting a target arm in nearly all rounds while incurring only sublinear attack cost\. Experiments on synthetic and real\-world datasets validate the effectiveness of our strategies, revealing vulnerabilities in stochastic bandit algorithms under practical adversarial scenarios\.

## Component\-Based Out\-of\-Distribution Detection

**Authors:** Wenrui Liu; Hong Chang; RuiBing Hou; Shiguang Shan

**ID:** 148274 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z4SLzKzu0y>) | [PDF](<https://openreview.net/pdf?id=z4SLzKzu0y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148274>)

Out\-of\-Distribution \(OOD\) detection requires sensitivity to subtle shifts without overreacting to natural In\-Distribution \(ID\) diversity\. However, from the viewpoint of detection granularity, global representation inevitably suppresses local OOD cues, while patch\-based methods are unstable due to entangled spurious\-correlation and noise\. And neither of them is effective in detecting compositional OODs composed of valid ID components\. Inspired by recognition\-by\-components theory, we present a post\-hoc Component\-Based OOD Detection \(CoOD\) framework that addresses the existing limitations by decomposing inputs into functional components\. To instantiate CoOD, we derive Component Shift Score \(CSS\) to detect local appearance shifts, and Compositional Consistency Score \(CCS\) to identify cross\-component compositional inconsistencies\. Empirically, CoOD achieves consistent improvements on both coarse\- and fine\-grained OOD detection\.

## Out\-of\-Distribution Detection in Continual Learning

**Authors:** Nimeshika Udayangani Hewa Dehigahawattage; Sarah Erfani; Flora Salim; Christopher Leckie

**ID:** 149012 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tUbhxJCUrN>) | [PDF](<https://openreview.net/pdf?id=tUbhxJCUrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149012>)

Out\-of\-distribution detection in continual learning \(OOD\-CL\) is highly challenging, as it requires \(i\) learning a sequence of tasks without catastrophic forgetting, and \(ii\) identifying unknown samples \(OOD\) without access to known \(in\-distribution \(ID\)\) data from past tasks, where standard confidence\-based OOD scores tend to degrade\. Existing methods largely rely on a rehearsal buffer of past data or assume closed\-world settings, limiting their scalability and reliability in real\-world scenarios\. In this paper, we propose a novel OOD detection framework for rehearsal\-free continual learning, inspired by Kolmogorov–Arnold Networks \(KAN\), which mitigate catastrophic forgetting via their inherent local neuroplasticity\. To better leverage KAN in OOD\-CL, we introduce a task\-adaptive classifier architecture, \\emph\{TA\-KAN\}, which mitigates recency bias and enhances ID\-\-OOD separability through task\-specific control of activation locality\.  Furthermore, we propose a geometry\-guided OOD score that complements TA\-KAN classifier confidence without relying on past ID data\. Our method significantly improves OOD detection while maintaining strong ID classification performance, achieving state\-of\-the\-art results in OOD\-CL\.

## Prompt Ensemble Image Puriﬁcation for Test\-time Adversarial Robustness of CLIP

**Authors:** Yuxuan Zhang; Shuchang Wang; Zhenbo Shi; Xiaoman Liu; Jiajun Hu; Zhidong Yu; Wei Song; Wei Yang

**ID:** 155055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8nPVzFYM2h>) | [PDF](<https://openreview.net/pdf?id=8nPVzFYM2h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155055>)

Vision\-Language Models like CLIP exhibit remarkable zero\-shot capabilities but remain vulnerable to adversarial attacks\. Existing defenses, such as adversarial fine\-tuning or test\-time defense, either incur high computational costs that lead to cause catastrophic forgetting, or struggle against strong adversarial attacks\. In this work, we reveal that adversarial perturbations are highly overfitted to the decision boundary of a single canonical text prompt\. By introducing several semantic prompt variants, we identify a \\textit\{Prompt Sensitivity Gap\}: adversarial examples exhibit significantly higher prediction variance across prompts compared to benign images\. Motivated by this insight, we propose Prompt Ensemble Image Purification \(PEIP\), an efficient test\-time defense framework\. PEIP features a dual\-objective purification loop that jointly suppresses prediction variance to dismantle adversarial alignment and reinforces the most responsive class across prompt variants to facilitate semantic recovery\. Furthermore, to accelerate inference, we introduce a statistically calibrated Early Exit mechanism that bypasses benign images based on their initial prompt sensitivity\. Extensive experiments across 16 classification benchmarks, multiple CLIP architectures, and CLIP\-based zero\-shot semantic segmentation tasks demonstrate that PEIP achieves state\-of\-the\-art adversarial robustness while preserving exact zero\-shot accuracy and high efficiency\.

## G\-PAC: Constructing Cohesive Pseudo\-Features for Generalizable Physical Adversarial Camouflage

**Authors:** tianrui lou; Haoqing Zhang; Jiawei Liang; Puning Zhao; XIAOCHUN CAO

**ID:** 151240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqovoYuYh5>) | [PDF](<https://openreview.net/pdf?id=bqovoYuYh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151240>)

Physical\-domain adversarial attacks present critical security threats to diverse AI systems, notably autonomous driving\. Generalization is an inherent requirement and a primary obstacle in physical attacks, manifesting as the ability of adversarial patterns to persist across varying environmental configurations and to transfer to unseen victim models\. While prior methods demonstrate generalization across specific models, their performance drops significantly on open\-vocabulary foundation models, with some approaches becoming entirely ineffective\. This lack of generalization stems from the failure of adversarial camouflage to construct a cohesive pseudo\-feature across perspectives, lacking the stable semantic representation characteristic of natural objects\. Such a deficiency arises because existing attack paradigms rely on independent view\-level optimization and non\-targeted objectives, which lead to semantically scattered features and inconsistent optimization directions\. To address these limitations, we propose Generalizable Physical Adversarial Camouflage \(G\-PAC\), a framework that transitions from view\-specific suppression to coordinated object\-level representation learning\.  G\-PAC maintains a momentum\-updated global pseudo\-feature center as a stable adversarial anchor to guide optimization across diverse configurations\.  By leveraging the feature space of a self\-supervised foundation model as a semantic prior, we introduce a contrastive regularization term to encourage feature aggregation while ensuring adversarial potency\.  Comprehensive digital and physical evaluations demonstrate the effectiveness of G\-PAC\. Notably, it outperforms the strongest baseline by an average AP@0\.5 margin of 0\.10 across seven diverse detector architectures in digital settings, and further extends this margin to 0\.12 in real\-world physical tests\. Furthermore, G\-PAC exhibits profound black\-box transferability against highly resilient open\-vocabulary foundation models, inducing an additional absolute AP@0\.5 reduction of 0\.30 on GLIP\.

## ASAT: Adaptive Scoring and Thresholding with Human Feedback for Robust Out\-of\-Distribution Detection

**Authors:** Daisuke Yamada; Harit Vishwakarma; Ramya Korlakai Vinayak

**ID:** 156772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156772>)

Machine Learning \(ML\) models are trained on in\-distribution \(ID\) data but often encounter out\-of\-distribution \(OOD\) inputs during deployment\-\-\-posing serious risks in safety\-critical domains\. Recent works have focused on designing scoring functions to quantify OOD uncertainty, with score thresholds typically set based solely on ID data to achieve a target true positive rate \(TPR\), since OOD data is limited before deployment\. However, these TPR\-based thresholds leave false positive rates \(FPR\) uncontrolled, often resulting in high FPRs where OOD points are misclassified as ID\. Moreover, fixed scoring functions and thresholds lack the adaptivity needed to handle newly observed, evolving OOD inputs, leading to sub\-optimal performance\. To address these challenges, we propose ASAT, a human\-in\-the\-loop framework that safely updates both scoring functions and thresholds on the fly based on real\-world OOD inputs\. ASAT maximizes TPR while controlling FPR at all times under stationary conditions, even as the system adapts over time\. Under nonstationary conditions, the method adapts to distribution shifts with only transient FPR violations during the adaptation period\. We provide theoretical guarantees for FPR control under stationary conditions and present extensive empirical evaluations on OpenOOD benchmarks to demonstrate that our approach outperforms existing methods by achieving higher TPRs while maintaining FPR control\.

## Sequential Probability Assignment against Smoothed Adversaries with Unknown Base Measure

**Authors:** Ziyi Liu; Dan Roy

**ID:** 155252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=76QBYIOFgI>) | [PDF](<https://openreview.net/pdf?id=76QBYIOFgI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155252>)

Smoothed online learning has recently been studied as a way to bypass hardness results for the fully adversarial setting, which can be overly pessimistic\. In this framework, the adversary is constrained to generate contexts from distributions having a bounded density with respect to some fixed base measure $\\mu$\. Prior work makes the strong assumption that $\\mu$ is known to the learner, with notable exceptions including Block et al\. \(2024\) and Blanchard \(2025\)\. In this paper, we study sequential probability assignment \(a\.k\.a\., online learning with log loss\) with smooth, well\-specified data in the more general setting where $\\mu$ is \\emph\{unknown\}, without the Lipschitz condition imposed in the work of Block et al\. \(2024\) and Blanchard \(2025\)\. We prove regret upper bounds against both adaptive and oblivious smoothed adversaries: the adaptive bound is controlled by empirical $\\ell\_\\infty$ Hellinger entropy, while the oblivious bound improves this dependence to empirical $\\ell\_2$ Hellinger entropy, the notion that has been shown to characterize the complexity of learning with i\.i\.d\. data \(Bilodeau et al\., 2023\)\. Both bounds are obtained through algorithms based on truncated empirical Hellinger covers\. We complement these results with a general lower bound, showing that our upper bounds are essentially tight for some natural classes, which implies a separation in the difficulty of smoothed online learning between regimes where $\\mu$ is known and where it is unknown\.

## Superplatforms Are Strategically Compelled to Counteract AI Agents

**Authors:** Jianghao Lin; Jiachen Zhu; Zheli Zhou; Yunjia Xi; Weiwen Liu; Yong Yu; Weinan Zhang

**ID:** 140087 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IeXpXu7doj>) | [PDF](<https://openreview.net/pdf?id=IeXpXu7doj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140087>)

This position paper argues that superplatforms are strategically compelled to counteract, constrain, or even disrupt AI agents as these agents emerge as competing digital gatekeepers\. Superplatforms have built their business models on controlling user attention through targeted advertising, algorithmic content curation, and centralized access to digital services\. However, LLM\-driven AI agents threaten this model by acting on behalf of users, bypassing platform\-controlled interfaces, reducing exposure to advertisements, and potentially becoming the new entrance for digital traffic\. Drawing on gatekeeping theory, we analyze why this shift creates a structural conflict between superplatforms and AI agents: whoever controls the user’s primary interface controls information flow, user data, and monetization opportunities\. We then examine why common responses, such as proprietary agents and API gating, are insufficient against general\-purpose and GUI\-based agents, motivating the possibility of more proactive countermeasures\. Finally, we outline a taxonomy of such platform\-initiated countermeasures and identify the technical challenges they raise\. We do not advocate for adversarial disruption; rather, our goal is to surface this emerging tension early and encourage research toward open, collaborative, and user\-centric agent ecosystems\.

## In\-Context Benign Overfitting: A Feature\-Selection Model in Linear Regression ICL

**Authors:** Puneesh Deora; Bhavya Vasudeva; Christos Thrampoulidis

**ID:** 154755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BCHILY5fm6>) | [PDF](<https://openreview.net/pdf?id=BCHILY5fm6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154755>)

In in\-context learning \(ICL\), a frozen pre\-trained model solves tasks by conditioning on a prompt of a few input–output examples, without gradient updates\. If the task was present in pretraining but the particular prompt sequence was not, the resulting in\-distribution generalization is retrieval\-based ICL\. Learning\-based ICL instead reflects out\-of\-distribution generalization: the model succeeds on prompts generated by a novel task\. Empirically, both forms improve with scale\. By analogy to benign overfitting in supervised learning, we call this in\-context benign overfitting: larger models more faithfully memorize the pretraining tasks \(improving retrieval ICL\) while also generalizing better to novel tasks \(improving learning ICL\)\. We prove that this phenomenon already arises in a minimal in\-context linear\-regression feature\-selection model\. In contrast, standard in\-context linear\-regression models exhibit a retrieval–learning tradeoff, where the emergence of learning\-based ICL coincides with degraded retrieval\-based performance\.

## Is a Linear Probe Evidence of a Linear Representation?

**Authors:** Nadir Kutluozen; Christian Internò; David Klindt

**ID:** 151738 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YSsvDcEXdV>) | [PDF](<https://openreview.net/pdf?id=YSsvDcEXdV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151738>)

The linear representation hypothesis \(LRH\) holds that high\-level concepts are encoded as linear directions in a model's feature space, and grounds much of mechanistic interpretability, from probing to sparse autoencoders to steering vectors\. We argue the standard test for it is too lenient\. A high linear\-probe accuracy shows that a concept is linearly readable from the representation, not that it is one of the representation's privileged directions of variance, which is what the LRH actually claims\. These two readings come apart in any high\-dimensional, richly structured representation, and the gap matters\. The structure that linear probing ignores is precisely where compositional generalization, out\-of\-distribution behavior, and the validity of post\-hoc feature decomposition live\. We propose three asymmetric diagnostics that operationalize the strong reading: reverse predictivity, spectral concentration, and out\-of\-distribution generalization\. We validate them in a fully observed simulation where ground truth is known, then apply them to pretrained vision encoders on SVG\-World, our deterministic generative benchmark with paired visual styles\. Pretraining produces structure beyond what a forward probe can certify, but the linear\-feature reading systematically overstates how much\. Probing on its own is not enough to license the mechanistic claims that rest on it\.

## TriPrompt: Progressive Local Prompting for Few\-shot Out\-of\-Distribution Detection

**Authors:** Ziyou Xiang; Chaowei Fang; Zhihong Wu; Jiliang Li; Di Xu; De Cheng

**ID:** 148805 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v0wZGD2GDB>) | [PDF](<https://openreview.net/pdf?id=v0wZGD2GDB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148805>)

Few\-shot out\-of\-distribution \(OOD\) detection is essential for deploying recognition models in open\-world environments, where a reliable model should correctly recognize in\-distribution \(ID\) samples while rejecting samples from unseen categories\. Recent CLIP\-based methods have shown promising few\-shot OOD detection ability by exploiting transferable vision\-\-language representations\. However, many methods rely mainly on global image features or emphasize only the most class\-discriminative local cues, making them less effective for OOD detection where ID and OOD samples share visually similar local patterns\. Although local prompting introduces patch\-level reasoning, existing methods often treat local evidence as a binary distinction between ID\-related and non\-ID cues, leaving the ambiguous transition region between reliable ID evidence and clear non\-ID evidence insufficiently modeled\. To address this issue, we propose ThriPrompt, a progressive local prompting framework for few\-shot OOD detection\. TriPrompt decomposes patch\-level evidence into three complementary components within a unified local feature space: Core\-ID cues that provide reliable class\-defining evidence, Far\-ID cues that capture ambiguous transition\-region evidence, and OOD cues learned from weak non\-ID proxies mined directly from patch features\. This patch\-native design enables suppression\-aware local reasoning without requiring additional OOD data or repeated multi\-crop feature extraction\. At inference time, \\modelname\{\} combines global CLIP confidence with Core\-ID, Far\-ID, and OOD local responses to reduce overconfident ID assignment on hard OOD samples\. Experiments on ImageNet\-1K OOD benchmarks show that \\modelname\{\} consistently improves few\-shot OOD detection performance and remains compatible with mainstream CLIP\-based scoring methods\. Our code is provided in the supplementary material\.

## RECIPE: Learning to Rank Complete Precursor Sets for Inorganic Retrosynthesis

**Authors:** Jing Gao; Kaipeng Zeng; Fuyuan Xia; Jian Ma; Yufeng Li; Qifeng Li; Lin Yao; Junchi Yan

**ID:** 149027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tNsRvxgwYk>) | [PDF](<https://openreview.net/pdf?id=tNsRvxgwYk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149027>)

Single\-step inorganic retrosynthesis is evaluated by whether a complete precursor set is recovered, yet many data\-driven systems first rank individual precursors and then rely on threshold or count heuristics to assemble sets\. This mismatch is especially severe when the true set size is unknown: individually plausible precursors can combine into incomplete, over\-complete, or otherwise wrong near\-miss sets\. We reformalize the task as variable\-size set\-level ranking and introduce RECIPE, a target\-conditioned framework that separates precursor recall from final set\-level scoring\. The Precursor Candidate Generator learns formula\-level compatibility to build a high\-recall precursor pool, while the Complete\-Set Reranker compares variable\-size candidate precursor sets directly\. On the Retrieval\-Retro year\-split benchmark, the generator improves Combo@20 from 69\.00 to 72\.75\. Compared with Retrieval\-Retro, the reranker improves Combo@1 by 11\.30 points to 71\.70, Combo@20 by 20\.82 points to 89\.82, and Combo MRR by 14\.14 points to 77\.43\. A preliminary 20\-case out\-of\-distribution evaluation shows the same direction of improvement\. These results suggest that set\-level prioritization remains important after strong precursor recall, and that optimizing ranked complete precursor sets can reduce the inspection burden in inorganic synthesis planning\.

## Directional Confusions Reveal Divergent Inductive Biases Through Rate\-Distortion Geometry in Human and Machine Vision

**Authors:** Leyla Roksan Caglar; Pedro A\.M Mediano; Baihan Lin

**ID:** 152629 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rg5nL1oYDA>) | [PDF](<https://openreview.net/pdf?id=Rg5nL1oYDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152629>)

Humans and modern vision models can reach similar classification accuracy while making systematically different kinds of mistakes \- differing not in how often they err, but in who gets mistaken for whom and in which direction\. We show that these directional confusions reveal distinct inductive biases that are invisible to accuracy alone\. Using matched human and deep vision model responses on a natural\-image categorization task under 12 perturbation types, we quantify asymmetry in confusion matrices and link it to the shape of the information–error trade\-off\. We characterize this trade\-off geometry using three signatures extracted from the rate–distortion \(RD\) frontier: slope \(beta\), curvature \(kappa\) and efficiency \(AUC\)\. We find that humans exhibit broad but weak asymmetries, whereas deep vision models show sparser, stronger directional collapses\. Robustness training reduces global asymmetry but fails to recover the human\-like breadth–strength profile of graded similarity\. Mechanistic simulations further show that different asymmetry organizations shift the RD frontier in opposite directions, even when matched for performance\. Together, these results position directional confusions and RD geometry as compact, interpretable signatures of inductive bias under distribution shift\.

## BayesAT: Bayes\-Guided Progressive Distillation for Semi\-Supervised Adversarial Training

**Authors:** Yimo Guo; Lilin Zhang; Li Penglin; Jinhui Hao; Xianggen Liu

**ID:** 150593 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h1DIkm1KJC>) | [PDF](<https://openreview.net/pdf?id=h1DIkm1KJC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150593>)

Existing semi\-supervised adversarial training \(SSAT\) methods typically employ a teacher\-student framework where a teacher model provides supervisory signals for unlabeled data\. However, they rely on static supervision\-\-\-either hard pseudo\-labels or soft labels with fixed temperature\-\-\-which maintains constant learning difficulty throughout training\. This rigidity fails to accommodate the student's evolving capability, especially when the teacher's performance plateaus\. To address this, we reframe SSAT as knowledge distillation from a Bayes teacher and formalize a stage\-dependent bias\-variance tradeoff\. This analysis reveals the existence of an optimal temperature: low temperatures reduce bias, while higher temperatures control the variance term in the robust generalization bound\. Guided by this insight, we propose BayesAT, a Bayes\-guided progressive distillation framework that jointly employs a low\-to\-high temperature warming schedule and confidence\-adaptive sample reweighting\. BayesAT allows the student to first learn from sharp, high\-confidence supervision to establish reliable decision boundaries, then progressively from smoother distributions that encourage exploration of inter\-class relationships\. Extensive experiments on CIFAR\-10, CIFAR\-100, and ImageNet\-200 demonstrate that BayesAT consistently improves robust accuracy while maintaining natural accuracy over existing SSAT methods, highlighting the importance of dynamic, theory\-driven supervision for effective knowledge transfer in semi\-supervised adversarial training\.

## Geometry\-Constrained Kolmogorov–Arnold Networks: Learning Edge Geometry via Banach Duality

**Authors:** Senanayak Sesh Kumar Karri

**ID:** 153809 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IYu64aV0LR>) | [PDF](<https://openreview.net/pdf?id=IYu64aV0LR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153809>)

Kolmogorov–Arnold Networks \(KANs\) replace fixed activations in deep architectures with learnable univariate edge functions, making the choice of edge parametrisation central\.  Existing variants rely on fixed bases such as splines, polynomials, or Fourier features, which impose a function\-space geometry before data are observed\.  We introduce geometry\-constrained KANs, a family of edge activations derived from Banach duality maps in which the geometry itself is learned through a scalar exponent $p &gt; 1$ per edge\. This exponent controls the qualitative response: sub\-Euclidean values produce sharp threshold\-like behaviour, $p = 2$ recovers the linear regime, and larger values produce flatter responses near the origin\.  Beyond expressivity, the exponent also modulates sensitivity: smaller values reduce amplification of perturbations, providing an implicit regularisation effect without introducing an explicit shrinkage hyperparameter\.  Across 50 Feynman symbolic regression equations, geometry\-constrained KANs match strong fixed\-basis baselines on clean data while substantially improving robustness under distribution shift\. In particular, they outperform cross\-validated spline baselines in 85 of 90 data\-scarcity settings and degrade significantly less under noise \(3\.7× versus 21\.6× for splines\)\. Learned exponents are interpretable and stable, revealing consistent geometric structure across equation families and input dimensions\.

## Hitting a Moving Target: Test\-Time Adaptation for AI Text Detection under Continual Distribution Shift

**Authors:** Kevin Ren; Manish Raghavan; Nikhil Garg

**ID:** 153619 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K2jfY9Iy5I>) | [PDF](<https://openreview.net/pdf?id=K2jfY9Iy5I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153619>)

Deployed approaches for AI text detection often rely on training\-time access to labeled datasets of both human\-written and AI\-generated text\. This approach is vulnerable to three types of distribution shifts that occur continually post\-deployment, and for which labeled data is often unavailable: adversarial humanization, new LLMs being released, and temporal drift in human writing\. Simultaneously, existing approaches do not leverage a key signal of LLM usage: inference\-time homogeneity\. We propose a test\-time adaptation \(TTA\) approach, using semi\-supervised learning, that adapts to distribution shifts by leveraging homogeneity among unlabeled samples observed at inference time\. Empirically, we find that state\-of\-the\-art supervised detectors systematically fail when they encounter distribution shifts in AI\-generated and human writing, both adversarial and natural, while test\-time adaptation with semi\-supervised learning is largely robust; e\.g\., the commercial model Pangram detects just 24\.1\\% of our adversarial AI\-generated text, compared to 90\.5\\% for our test\-time approach\. We establish that test\-time adaptation is a promising framework for AI text detection in the wild\.

## Class\-Domain Incremental Learning with Extensible Multi\-Center Modeling

**Authors:** Xuetong Yang; Yuxiang Yan; Zhiyuan Zhou; Xin Gao; Guanghao Li; Jian Pu

**ID:** 153465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7nQuDA3fX>) | [PDF](<https://openreview.net/pdf?id=L7nQuDA3fX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153465>)

Incremental learning aims to continuously learn from dynamic data streams without suffering from catastrophic forgetting\. However, existing methods may fail in challenging scenarios where class and domain spaces expand simultaneously, struggling to learn continually and stably from fragmented data streams\. To address this challenge, we propose EMCift \(Extensible Multi\-Center Modeling with Dual\-Path Drift Harmonization\), a novel model that treats heterogeneous data across domains and semantic spaces as co\-existing multi\-view observations, enabling the construction of global knowledge from local observations\. Our approach organizes extensible multi\-center prototypes as a tree hierarchy, allowing the global class representation across different domains to grow organically from fragmented local data\. To sustain this dynamic topology, we introduce a dual\-path drift harmonization strategy that balances structural stability with adaptive plasticity\. Specifically, one path captures essential updates to enable prototype evolution, while the other path leverages a conditional adversarial mechanism to robustly initialize domains, effectively preventing catastrophic forgetting caused by class confusion\. Extensive experiments on three datasets demonstrate the state\-of\-the\-art performance of our proposed model in the class\-domain incremental learning scenario\. Code will be released upon acceptance\.

## Joint Certification for Attributed Graphs: Beyond Topology\-Only Robustness

**Authors:** Blaise Delattre; Hengyu WU; Wei Yang Bryan Lim; Yang Cao

**ID:** 152626 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RhmrtYOQxz>) | [PDF](<https://openreview.net/pdf?id=RhmrtYOQxz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152626>)

Graph neural networks for bot and fraud detection operate on attributed graphs, where adversaries can jointly modify local edges and continuous node features\. We study node\-level certification under a localized mixed threat model with up to $d$ edge flips in the target message\-passing neighborhood and an $\\ell\_2$ Frobenius feature budget $\\epsilon$\. We instantiate hybrid randomized smoothing for this graph setting and derive two graph\-specific certificates: a sound Sequential NP composition baseline for the joint topology\-\-continuous\-feature threat model, and a Hybrid NP certificate whose homogeneous edge\-smoothing structure reduces the adversarial adjacency search to an $O\(d^2\)$ optimization over edge\-deletion and edge\-addition counts\. Across PubMed, Amazon Fraud, YelpChi, and MGTAB, the Hybrid NP certificate yields non\-trivial certified regions under joint perturbations\. We also construct adaptive joint attacks and show failure cases on PubMed, Amazon Fraud, MGTAB and YelpChi for topology\-only certified nodes, demonstrating that topology\-only guarantees can overestimate robustness when continuous feature perturbations are allowed\. The results support joint discrete\-\-continuous certification as the appropriate robustness notion for attributed graphs with continuous features\.

## Natural Jammers: When Non\-Robust Features Become Antagonistic

**Authors:** Jiaming Zhang; Fuyao Zhang; Pengjun Xie; Wei Yang Bryan Lim

**ID:** 149318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r2uyttQly8>) | [PDF](<https://openreview.net/pdf?id=r2uyttQly8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149318>)

Deep neural networks are known to rely on non\-robust features that align poorly with human perception\. Prior work has largely framed these features as opportunistic shortcuts that help standard models on clean data\. We show instead that non\-robust cues can be antagonistic: they can act as \*\*Natural Jammers\*\* that actively mislead standard models on clean, unmodified images\. Using disagreement between a standard model and robust models as an analysis lens, we identify a Jammed Set on which robust models outperform standard models\. We provide causal evidence for \*Spectral\-\-spatial Locking\*: jamming arises only when high\-frequency components are precisely aligned with specific spatial structures\. Disrupting this lock through spectral filtering or small geometric shifts can restore correct predictions\. Crucially, we uncover a \*Substitution Paradox\*: while individual jammers are fragile to geometric shifts, the aggregate prevalence of jamming remains stable and is redistributed rather than eliminated under such transformations\. Our results reframe natural non\-robustness as a structural property of the model\-data manifold: one that redistributes rather than disappears under simple interventions\.

## Hindsight Relabeling is All You Need for Reach\-Avoid Learning

**Authors:** Kevin Li; Marinka Zitnik

**ID:** 153151 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NUNqj0j1C6>) | [PDF](<https://openreview.net/pdf?id=NUNqj0j1C6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153151>)

Offline goal\-conditioned reinforcement learning methods have shown promise for reach\-avoid tasks, where an agent must reach a target state while avoiding undesirable regions of the state space\. Existing approaches typically encode avoid\-region information into an augmented state space and cost function, which prevents flexible, dynamic specification of novel avoid\-region information at evaluation time\. They also rely heavily on meticulously designed reward and cost functions, limiting transferability to novel environments and specifications\. We introduce RADT, a decision transformer approach for offline, reward\-free, goal\-conditioned, avoid\-region\-conditioned RL\. RADT encodes goals and avoid\-regions directly as prompt tokens, allowing any number of avoid\-regions of arbitrary size to be specified at evaluation time\. Using only suboptimal offline trajectories from a random policy, RADT can learn reach\-avoid behavior in a completely data\-driven manner using our novel avoid\-region hindsight relabeling approach, without the need for reward/cost supervision\. We benchmark RADT against existing offline goal\-conditioned RL models across 17 tasks, environments, and experimental settings\. RADT generalizes in a zero\-shot manner to out\-of\-distribution avoid\-region sizes and counts, outperforming baselines that require retraining\. In one such zero\-shot setting, RADT achieves 35\.7% improvement in normalized cost over the best retrained baseline while maintaining high goal\-reaching success\. We also apply RADT to cell reprogramming in biology, demonstrating its versatility\.

## Understanding Generalization through Decision Pattern Shift

**Authors:** Huiqi Deng; Yibo Li; Quanshi Zhang; Peng Zhang; Hongbin Pei; Xia Hu

**ID:** 151318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bNwHDu1zwM>) | [PDF](<https://openreview.net/pdf?id=bNwHDu1zwM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151318>)

Understanding why deep neural networks \(DNNs\) fail to generalize to unseen samples remains a long\-standing challenge\.  Existing studies mainly examine changes in externally observable factors such as data, representations, or outputs, yet offer limited insight into how a model’s internal decision mechanism evolves from training to test\.  To address this gap, we introduce \\textbf\{Decision Pattern Shift \(DPS\)\}, a new perspective that defines generalization through the stability of internal decision patterns and quantifies failure as their deviation from those learned during training\. Specifically, we represent each sample’s decision pattern as a GradCAM\-based channel\-contribution vector, which captures how feature channels collectively support a prediction, and we propose the DPS metric to measure its discrepancy from the class\-average pattern\. Empirical analyses across multiple datasets and architectures show that,  \(i\) decision patterns form a highly structured, class\-consistent space with strong intra\-class cohesion and low inter\-class confusion, enabling direct analysis of a model’s decision logic; \(ii\) the DPS magnitude correlates linearly with the generalization gap \(nearly all Pearson $r &gt; 0\.8$\), revealing generalization as a systematic drift in the model’s internal decision mechanism; \(iii\) the DPS spectrum organizes diverse generalization degradation scenarios \(covering ideal generalization, in\-distribution degradation, domain shift, out\-of\-distribution, and shortcut learning\) into a continuous trajectory, providing a unified explanation of their failure modes\. These findings open up new possibilities for early generalization\-risk detection, failure\-mode diagnosis, and channel\-level defect localization\.

## Improving Neural Processes in the Low\-Data Regime via Context\-Subset Training and Self\-Distillation

**Authors:** Hyungi Lee; Jangho Kim

**ID:** 148845 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uieGKHJk47>) | [PDF](<https://openreview.net/pdf?id=uieGKHJk47>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148845>)

Neural processes \(NPs\) are flexible uncertainty\-aware meta\-learners, but often fail when meta\-training tasks are scarce, losing generalization and collapsing into task memorization\. We propose Context\-Subset Self\-Distillation Neural Processes \(CSSDNP\), a training framework that trains a student on random context subsets while distilling the full\-context predictive distribution of an EMA teacher from the same task\. This context\-asymmetric objective combines reduced\-context predictive learning with forward\-KL distillation, enforcing conditional consistency across different context views without architectural or test\-time changes\. Theoretically, we show that context\-subset training learns the reduced\-context prediction problem while augmenting each task, and that calibrated full\-context distillation preserves the asymptotic Bayes target while improving finite\-sample estimation via teacher\-guided shrinkage\. Empirically, CSSDNP improves robustness and generalization across NP variants and tasks, especially in low\-meta\-data regimes\.

## Soft Contamination Means Benchmarks Test Shallow Generalization

**Authors:** Ari Spiesberger; Juan J Vazquez; Nicky Pochinkov; Tomáš Gavenčiak; Peli Grietzer; Gavin Leech; Nandi Schoots

**ID:** 152288 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UBmysDOEQQ>) | [PDF](<https://openreview.net/pdf?id=UBmysDOEQQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152288>)

If LLM training data is polluted with benchmark test data, then benchmark performance is only a biased estimate of out\-of\-distribution \(OOD\) generalization\. Typical 'decontamination' filters use $n$\-gram matching which fail to detect 'semantic' duplicates: sentences with equivalent \(or near\-equivalent\) content that are not close in string space\. We study this 'soft' contamination of training data by semantic duplicates\. We embed the Olmo 3 training corpus and find that: \(1\) contamination remains widespread: we observe semantic duplicates for 76\\% of the CodeForces test set and 100\\% of MBPP's; \(2\) training on semantic duplicates of benchmark data improves benchmark performance by \-1–22pp in controlled experiments and 18–22pp in ecological finetuning, depending on training regime and type; and \(3\) finetuning on duplicates of benchmark datapoints improves performance by \-1–22pp \(controlled\) and 13–19pp \(ecological\) on truly\-held\-out datapoints from the same benchmark\. The generalization we find is 'shallow': it is limited to \(2\) and \(3\), and does not typically extend to related benchmarks\. We replicate on Olmo 3, Qwen3, and Qwen3\.5\. We thus argue that recent benchmark gains are confounded: the prevalence of soft contamination means gains reflect both genuine capability improvements and the accumulation of \*effective\* test data in growing training corpora\.

## Linear approximations to HMM filtering

**Authors:** Andrew Mah; Joshua L Pughe\-Sanford; Sarah Harvey; Alex Williams

**ID:** 155014 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ETaeeas7a>) | [PDF](<https://openreview.net/pdf?id=9ETaeeas7a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155014>)

Complex sequence models, such as transformers and state space models \(SSMs\), learn to represent latent belief states when trained on next\-token prediction\. Surprisingly, we find that in previously studied tasks, this phenomenon can also be captured by linear recurrent models\. This raises a natural question: when are linear models sufficient for optimal belief state approximation? We study this question in the canonical setting of hidden Markov models \(HMMs\), where Bayes\-optimal prediction requires nonlinear filtering\. We characterize the full class of HMMs whose filtering dynamics are exactly realizable by linear recurrent neural networks \(RNNs\)\. More generally, for arbitrary HMMs, we establish a dissipation relation which shows that approximation error decays at a rate determined by intrinsic properties of the underlying HMM\. We validate our theoretical results through experiments on both randomly sampled HMMs and constructed adversarial examples\. Together, these findings clarify when linear sequence models suffice for optimal inference and when nonlinearity is fundamentally necessary\.

## Permutation Sensitivity in t\-SVD\-based Multi\-view Clustering

**Authors:** Jintian Ji; Yanjun Zhang; He Zhang; Leo Yu Zhang; Cong Wang; Shirui Pan

**ID:** 154178 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FfHdqICXbw>) | [PDF](<https://openreview.net/pdf?id=FfHdqICXbw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154178>)

Tensor Singular Value Decomposition \(t\-SVD\) has achieved strong empirical performance in multi\-view clustering \(MVC\) and its incomplete setting \(IMVC\)\. However, the success of this framework heavily relies on the implicit dependency of its Fourier transform on the sample sequence, which raises serious concerns regarding sample\-permutation sensitivity\. To address this issue, we first formulate the permutation sensitivity in multi\-view clustering by providing rigorous definitions of invariance at both the outcome level and the representation level\. Secondly, by revealing the potential structural risks associated with the fixed Fourier basis, we propose two plug\-and\-play strategies: \(1\) an Order\-Restoration strategy \(K\-OR\), designed to reconstruct a locally smooth signal favored by the Fourier transform; and \(2\) an equivariant t\-SVD framework \(Cor\-SVD\), which fundamentally resolves the sensitivity of the Fourier transform by replacing fixed bases with data\-dependent, equivariant transforms\. Finally, we design a controlled permutation evaluation protocol to verify the robustness of tensorial clustering models\. Extensive experiments demonstrate the significant performance variability of existing t\-SVD\-based methods under sample permutations, whereas our approaches substantially improve their permutation robustness while maintaining competitive clustering performance\. These findings reveal critical vulnerabilities in current tensorial clustering benchmarks and underscore the necessity of the proposed method for achieving robust performance and reliable evaluation\.

## Sparse Fine\-Tuning for Parameter\-Efficient Adversarial Training

**Authors:** Zhaoxin Wang; Zihang Ding; Handing Wang

**ID:** 152466 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sspdar70qk>) | [PDF](<https://openreview.net/pdf?id=Sspdar70qk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152466>)

Deep neural networks achieve strong performance across many tasks but remain vulnerable to adversarial perturbations\. Adversarial training \(AT\) is one of the most effective defenses, yet it suffers from computational cost on large models and the persistent clean\-robust accuracy trade\-off\. Recent work introduces parameter\-efficient fine\-tuning, such as LoRA, into AT, but this constraint induces a notable robustness gap relative to full\-parameter AT\. In this work, we revisit parameter\-efficient adversarial fine\-tuning from a parameter space perspective\. Through gradient analysis, we find that adversarial optimization is highly concentrated on a small subset of parameters, which we call Robustness\-Critical Parameters \(RCP\), suggesting that robustness is encoded in a sparse subspace\. Building on this observation, we propose Sparse Adversarial Fine\-Tuning \(SAFT\), which identifies RCP via adversarial gradient saliency and performs adversarial training by updating only these parameters while freezing the rest\. Across architectures and datasets, SAFT consistently outperforms LoRA\-based methods in both clean and robust accuracy with fewer trainable parameters, and approaches or surpasses full parameter AT in robustness while updating only about 5\\% of parameters\.

## FocusBranch: Combinatorial Branch\-and\-Bound for $\\ell\_0$ Neural Network Robustness Verification

**Authors:** Renwei Deng; Yang He; Linyi Li; Yuepeng Wang

**ID:** 152059 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VoRt2Q8ngL>) | [PDF](<https://openreview.net/pdf?id=VoRt2Q8ngL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152059>)

Verifying the local robustness of neural networks under $\\ell\_0$ perturbations is inherently combinatorial: a verifier must reason over all sparse subsets of perturbed pixels\. This paper presents FocusBranch, a combinatorial branch\-and\-bound framework for $\\ell\_0$ robustness verification\. The key insight is to decompose the $\\ell\_0$\-ball using nodes, where each node consists of a focus pixel set $\\mathcal\{S\}$ and a level $l$, requiring at least $l$ perturbed pixels to lie in $\\mathcal\{S\}$\. This abstraction unifies two branching mechanisms: concrete nodes branch through upper shadows to fix additional perturbed locations, while super nodes branch through covering designs to cover many perturbation cases with fewer child nodes\. FocusBranch proves node safety by concretizing linear relaxations over node\-constrained $\\ell\_0$\-balls and recursively branches on unknown nodes\. Rather than relying on a fixed verification strategy, it samples nodes across levels to estimate success rates and costs, then selects a starting level and branching strategy predicted to minimize verification time\. Experiments on fully connected and convolutional classifiers for MNIST, Fashion\-MNIST, and CIFAR\-10 show that FocusBranch verifies $\\ell\_0$ local robustness effectively across architectures and outperforms state\-of\-the\-art verifiers\.

## Dynamic Context Modeling for Longitudinal Mental Health Monitoring under Distribution Shift

**Authors:** Seungwan Jin; Taehyung Noh; Junghyun Kim; Uichin Lee; Kyungsik Han

**ID:** 151758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YFPmKTRY1L>) | [PDF](<https://openreview.net/pdf?id=YFPmKTRY1L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151758>)

Mobile and wearable sensing offer a scalable pathway to longitudinal mental health monitoring, yet accurate prediction remains limited by two fundamental forms of distribution shift in human behavior\. The first arises across users, where similar sensor patterns can carry different clinical meanings, a phenomenon we call inter\-subject heterogeneity\. The second arises within a single user, where behavioral baselines themselves evolve over time, producing intra\-subject behavioral drift\. In this domain, ground\-truth labels come from Ecological Momentary Assessment \(EMA\), brief self\-reports collected in everyday life that are intrusive and inherently sparse\. As a result, approaches that address these distribution shifts by updating model parameters are difficult to apply\. To address this gap, we propose DyCon \(Dynamic Context Modeling\), a dual\-loop framework that personalizes by building and evolving a separate natural\-language personal context for each user, without updating any model parameters\. Within each session, a momentary refinement loop restructures this personal context to resolve inter\-subject heterogeneity\. Across sessions, a longitudinal update loop integrates only validated insights to track intra\-subject behavioral drift\. Extensive experiments on four public benchmarks \(GLOBEM, PMData, StudentLife, LifeSnaps\) show that DyCon consistently outperforms baseline methods, particularly under sparse supervision and behavioral drift\. Our results suggest that evolving an explicit personal context offers a practical pathway for longitudinal personalization in real\-world health monitoring\.

## Logit\-Gap Steering: A Forward\-Pass Diagnostic for Alignment Robustness

**Authors:** Tung\-Ling Li; Hongliang Liu

**ID:** 155257 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=73zQs0dgXW>) | [PDF](<https://openreview.net/pdf?id=73zQs0dgXW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155257>)

Aligned language models refuse unsafe requests because RLHF widens the logit margin between refusal and affirmative tokens at the first decoded position\. We call this scalar the refusal\-affirmation logit gap and use it as a per\-prompt diagnostic for alignment robustness\. On three model families, alignment widens the gap on 97\.5\-99\.8\\% of toxic prompts, and gap closure tracks True ASR across suffix strategies \(an internal consistency check, since our method optimises for gap closure\)\. We present logit\-gap steering, a gradient\-free, forward\-pass\-only method that searches for in\-distribution suffixes drawn from the model's own high\-probability candidates whose cumulative effect closes the gap\. Discovering 8 ensemble suffixes per family costs $\{\\approx\}26\{,\}000$ forward\-pass equivalents \($\{\\approx\}2$\~min on one A100\), $\{\\approx\}125\\times$ less than a single GCG search\. Suffixes discovered on 0\.5B\-2B models transfer to 72B within family\. An 8\-suffix ensemble reaches 38\-\-96\\% True ASR across 13 models on AdvBench and HarmBench\. Most suffixes have $10^\{3\}$\-$10^\{4\}\\times$ lower perplexity than GCG: under a published PPL\-filter defense, our ensemble holds at 76\.0\\% \(from 76\.9\\%\) while GCG collapses from 64\.7\\% to 1\.0\\%\.

## ChildPose: Foundation for Children Pose Modeling

**Authors:** Jiakai Chen; Yifan Shen; Boyi Li; Chuanmiao Dong; Xu Cao

**ID:** 150424 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i8KQIvVtSo>) | [PDF](<https://openreview.net/pdf?id=i8KQIvVtSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150424>)

Human pose estimation has advanced rapidly driven by large\-scale adult\-centric models\. However, children remain significantly underrepresented due to data scarcity, distinct body morphology, and unique motion dynamics\. We introduce ChildPose, a modular video foundation model designed for child\-centric pose estimation\. ChildPose transforms pretrained pose encoders into a streaming pediatric model via memory\-augmented temporal attention and age\-aware co\-training\. By maintaining a memory bank of adjacent frame representations, the model achieves robust localization under motion blur, occlusion, and atypical poses, while an auxiliary age\-prediction objective enforces representations that capture developmental morphology\. We curate a diverse, video\-based pediatric dataset spanning various age groups and capture conditions, evaluating out\-of\-distribution generalizability on entirely unseen subjects\. Across multiple 2D baselines, ChildPose consistently outperforms both off\-the\-shelf models and child\-data fine\-tuned variants, while ensuring stable sequence\-level predictions\. Our results underscore that effective pediatric pose estimation necessitates child\-specific modeling beyond standard adult\-centric estimators\.

## Total Variation Distance Estimation in Autoregressive Models

**Authors:** Eric Price; Kevin Tian; Zhiyang Xun; Yusong Zhu

**ID:** 153131 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NfXgepjfRz>) | [PDF](<https://openreview.net/pdf?id=NfXgepjfRz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153131>)

Modern LLM deployments use a number of implementation choices and inference optimizations \(e\.g\., batching, custom kernels, quantization\) on top of fixed weights, so two engines serving "the same model" can produce meaningfully different distributions\.  We study the problem of estimating the total variation \(TV\) distance between two length\-$n$ autoregressive distributions to additive error $\\varepsilon$, under three access models: 1\. Under \*sample\* access, we use $\\widetilde\{O\}\(\\frac\{n^2K\}\{\\varepsilon^2\}\)$ queries, where $K$ is the maximum support of the next\-token distribution\. 2\. Under \*logit\* access, we use $O\(\\frac\{n\}\{\\varepsilon^2\}\)$ queries, and this is tight\. 3\. Under \*noisy logit\* access, we can smoothly interpolate between the above two: if probability values are given to $\\sigma$ relative error, we use $\\widetilde\{O\}\(\\frac\{n \+ n^2\\sigma^2\}\{\\varepsilon^2\}\)$ queries\. We complement our theoretical results with an empirical evaluation of our algorithms, for example measuring the distance between \\texttt\{sglang\} and \\texttt\{vllm\} on standard settings\. Our experiments highlight the robustness and practicality of estimating the total variation distance, compared to existing alternatives such as KL divergence\.

## Variational Cover Modification Steganography

**Authors:** Martin Beneš; Rainer Böhme

**ID:** 149566 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pAhg9hlxJV>) | [PDF](<https://openreview.net/pdf?id=pAhg9hlxJV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149566>)

Current approaches to learning\-based image steganography are, at best, imperceptible, but their security is vulnerable to state\-of\-the\-art detector networks\. Variational cover modification steganography tackles this problem by training a generator network that can predict the parameters of the distribution of the least detectable stego\-noise for a given cover image\. It uses syndrome coding to embed the message within the distribution constraint and retrieve it exactly when a secret key is provided\. Adversarial learning ensures that the generator evolves against a continuously refined detector\. Experiments demonstrate significant security improvements, and several ablations support the generator architecture and the training protocol\.

## An Efficient Geometric Characterization of Robust Fair Learning

**Authors:** Sushant Agarwal; Amit Jayant Deshpande; Rajmohan Rajaraman; Ravi Sundaram

**ID:** 151262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bi33LQMlVp>) | [PDF](<https://openreview.net/pdf?id=bi33LQMlVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151262>)

Previous work has shown that the optimal classifier from a hypothesis class subject to exact fairness constraints may not be \*robust\*; that is, its accuracy can change drastically under small shifts to the underlying data distribution\. We ask the following questions: Given a hypothesis class $\\mathcal\{H\}$, is the accuracy of the optimal fair classifier from $\\mathcal\{H\}$ robust to malicious distribution shifts? And is this property efficiently testable? We consider $\\mathcal\{H\}$ that can be represented by a convex polytope — the natural setting for randomized ensembles of deterministic classifiers, including those produced by boosting\. We provide a complete geometric characterization of when $\\mathcal\{H\}$ is robust, and an efficient linear programming test to audit the robustness of a given $\\mathcal\{H\}$\. Surprisingly, we demonstrate that if we relax exact fairness constraints and only require approximate fairness, every $\\mathcal\{H\}$ is robust\. Our results hold for a broad class of linear fairness criteria \(e\.g\., demographic parity, equal opportunity, predictive equality\) and linear loss functions \(e\.g\., 0/1 loss, weighted loss\)\.

## Orthogonal Origin Parking: Decoupling Lorentz Manifolds for Robust OOD Generalization

**Authors:** Peter J Kampen; Anders N Christensen; Morten Rieger Hannemose; Anders Dahl; Josefine Vilsbøll Sundgaard

**ID:** 150309 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j5DnkgPGKb>) | [PDF](<https://openreview.net/pdf?id=j5DnkgPGKb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150309>)

Fine\-grained classification in deep taxonomies suffers from representational crowding: large macro\-classes dominate the feature space, leaving little angular capacity for fine\-grained distinctions, particularly under out\-of\-distribution \(OOD\) shifts\. Standard hyperbolic spaces offer exponential volume for tree\-like data, but embedding an entire taxonomy into a single manifold forces distinct macro\-branches to compete for shared angular capacity and entangles their optimization updates\. We introduce a geometric architecture that embeds hierarchical taxonomies into a Cartesian product of Lorentz manifolds\. Our core mechanism, \\textit\{Orthogonal Origin Parking\} \(OOPark\), decouples the taxonomy at the root level by assigning an independent Lorentz manifold to each macro\-branch and penalizing inactive embeddings that deviate from the manifold origin\. We evaluate across four biological OOD tasks/benchmarks \(skin lesions, iWildCam, fungi, and plankton\) characterised by hierarchical class structure, class imbalance, and domain shift\. OOPark generally outperforms standard Euclidean and single\-manifold hyperbolic baselines while using 20\-dimensional sub\-manifolds against Euclidean baselines of up to 512 dimensions, preserving both fine\-grained accuracy and global taxonomic fidelity under severe distribution shifts\. Code is provided in the supplementary material; a public release will follow upon acceptance\.

## DETS: An Interval\-Censored Evidential Sampling Framework for Cross\-Domain Scientific Discovery

**Authors:** Jiahang Shen; Hongxin Xiang; Wenjie Du

**ID:** 148978 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tjw3hiE7Tt>) | [PDF](<https://openreview.net/pdf?id=tjw3hiE7Tt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148978>)

Scientific measurements inherently contain variance\. Standard regression, however, treats noisy data as absolute ground truth, leading models to memorize noise rather than physical laws\. This overfitting hampers generalization, particularly when transferring from abundant theoretical proxies to scarce experiments\. We introduce DETS, a framework replacing rigid point estimation with Physical Tolerance Modeling\. Our Interval\-Censored Evidential Engine \(ICEE\) maximizes probability mass within acceptable error margins, explicitly decoupling aleatoric noise from epistemic uncertainty\. Using this filtered uncertainty signal, a Thermodynamic Sampling strategy dynamically selects theoretical data to align source and target domains\. Experiments across thermodynamics, drug affinity, and bandgap prediction show DETS outperforms state\-of\-the\-art methods\. Crucially, it exhibits superior robustness in high\-noise, data\-scarce settings\.

## AI Models Can Provably Hide Arbitrary Capabilities

**Authors:** Andis Draguns; Sumeet Motwani; Raymond Douglas; Christian Schroeder de Witt

**ID:** 149974 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=loKoVJwH5Y>) | [PDF](<https://openreview.net/pdf?id=loKoVJwH5Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149974>)

Capability evaluations aim to surface dangerous model behaviors before deployment, but their reliability depends on the assumption that hidden capabilities can be elicited\. We show this assumption does not hold under adversarial conditions by constructing backdoor attacks that embed encrypted neural networks within host model weights, decrypting and executing them only upon receiving a secret trigger\. Using digital lockers, these hidden circuits remain provably hard to elicit and interpret under standard cryptographic hardness assumptions, even given full access to model weights, extending prior work from hiding fixed strings to arbitrary computations\. We implement our constructions in PyTorch and empirically validate resistance to supervised fine\-tuning on a small chemical reaction prediction task \- a proxy for CBRN\-relevant capabilities\. Our results reveal a limit of capability audits\. We release our models to support the development of stronger defenses\.

## Near\-Optimal Regret in Adversarial Kernel Bandits

**Authors:** Yu\-Jie Zhang; Hao Qiu; Jonathan Scarlett; Kevin Jamieson

**ID:** 150353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iknnf2EVeU>) | [PDF](<https://openreview.net/pdf?id=iknnf2EVeU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150353>)

We study the adversarial kernel bandit problem, in which the loss at each time step is induced by some bounded \(but otherwise arbitrary\) element of an RKHS\. We propose an exponential\-weights algorithm with a regularized importance\-weighted estimator and an explicit correction term that controls the estimator's regularization bias\.  Our main result bounds the regret in terms of a widely\-adopted notion of effective dimension that captures the complexity of the kernel\.  Notably, when the kernel satisfies a polynomial eigendecay condition with exponent $\\beta&gt;1$, our regret scales as $T^\{\(\\beta\+1\) /\(2 \\beta\)\}$ up to logarithmic factors\.  This matches a lower bound from existing work \(Chatterji, Pacchiano, and Bartlett, ICML 2019\) and strictly improves on the upper bound derived in that work \(with dependence $T^\{\\beta /\(2 \(\\beta\-1\)\)\}$\), while also having the benefit of dropping their rank\-one adversary assumption and instead allowing arbitrary RKHS elements at each step\.

## Adversarial Group Fairness in Contextual Bandits: When Robust is Not Fair

**Authors:** Ray Telikani; Jaber valizadeh; Amir H Gandomi; Bao Q Vo; Ming Ding

**ID:** 152720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QqqBvLrJr6>) | [PDF](<https://openreview.net/pdf?id=QqqBvLrJr6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152720>)

Neural contextual bandits support high\-stakes decision systems\-\-\-from clinical trial allocation to content recommendation\. This paper investigates an adversarial threat, group\-targeted suppression attacks \(GTSA\), in which an adversary selectively degrades performance for a demographic subgroup while preserving global performance metrics\. We first show that under standard aggregate monitoring, GTSA with budget $B = \\Omega\(\\sqrt\{T\}\)$ can induce $\\Omega\(T\)$ group regret while maintaining only $o\(1\)$ deviation in observable global statistics, establishing that any defense that ignores group structure is fundamentally vulnerable\. To address this vulnerability, we propose AnchorFair, a robust mitigation framework comprising three components: \(i\) a trust\-weighted policy anchor with provable bounded drift, \(ii\) representation\-stable demographic discovery via online clustering in a slowly evolving embedding space, and \(iii\) a demographic\-aware exploration mechanism that adaptively amplifies learning for underrepresented or low\-trust groups\. We prove that \\textsc\{AnchorFair\} achieves sublinear group regret $\\tilde\{O\}\(\\sqrt\{T\}\)$ for all groups under GTSA\.

## Semantic Concept Steering Breaks the Explanation Drift Loop in Continual Learning

**Authors:** Yehonatan Elisha; Oren Barkan; Noam Koenigstein

**ID:** 150436 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i3RRjUpRUG>) | [PDF](<https://openreview.net/pdf?id=i3RRjUpRUG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150436>)

Catastrophic forgetting in continual learning \(CL\) manifests not only as accuracy degradation but also as explanation drift: models maintain predictive accuracy while silently shifting attention from diagnostic features to spurious correlations\. This work identifies and resolves a previously overlooked structural flaw in explanation\-aware CL: pixel\-level saliency regularization derives supervision targets from the model's own frozen saliency maps, creating a \\emph\{self\-referential drift loop\} that actively reinforces spurious attention across tasks\. We introduce C$^3$L \(Concept\-Consistent Continual Learning\), which breaks this loop by anchoring regularization to class\-consistent semantic concepts \(e\.g\., \`\`curved beak'', \`\`striped pattern''\) discovered offline, independent of model state, providing \(i\) target independence from model drift, and \(ii\) cross\-instance semantic consistency across every instance of a class\. We show that our concept\-based objective, combined with approximate LRP relevance conservation, produces a crowding\-out effect: enforcing high relevance within concept regions implicitly suppresses spurious background correlations without explicit penalization, forming a zero\-sum competition over a finite relevance budget\. \\method doesn't require human\-annotated concept sets, as it employs a fully automated concept discovery and spatial grounding\. Extensive evaluation across five benchmarks and over 20 baselines demonstrates state\-of\-the\-art performance in accuracy, forgetting, explanation quality, spurious correlation mitigation, and out\-of\-distribution robustness\. Our code is provided in the supplementary material\.

## Strengthen Out\-of\-Distribution Detection via Adaptive Mahalanobis Gap

**Authors:** Kunpeng Sui; Rundong He; Jie Su

**ID:** 148207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYv58OEor2>) | [PDF](<https://openreview.net/pdf?id=zYv58OEor2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148207>)

Deep neural networks have achieved significant success on in\-distribution \(ID\) tasks, but out\-of\-distribution \(OOD\) samples during inference can lead to unreliable predictions\. To address this issue, distance\-based methods exploit the geometric structure of feature space for OOD detection\. However, methods based on static information geometry fail to address geometry distorted by ill\-distributed samples\. Although prior work reduces the misclassification of OOD samples as ID by adjusting the residual space with real\-time features, it fails to address the misclassification of ID samples as OOD\. In addition, existing distance\-based methods ignore class\-specific characteristics when computing deviation feature and rely on the nearest prototype for uncertainty estimation, leading to suboptimal OOD detection performance\. To address these issues, we propose Adaptive Mahalanobis Gap \(AMG\)\. Specifically, we first strengthen the principal space along real\-time feature directions to reduce the misclassification of ID samples as OOD\. Subsequently, we incorporate class variance and prototype norms to mitigate bias of deviation feature from class\-wise distributional differences\. Finally, we introduce the Mahalanobis gap scoring for uncertainty scoring to overcome bias from single\-prototype reliance\. Experiments on CIFAR\-10/100 and ImageNet\-1k show that AMG consistently outperforms state\-of\-the\-art methods in FPR@95 and AUROC\. Our code is available at https://anonymous\.4open\.science/r/AMG\_AR\.

## RESBev: Making BEV Perception More Robust

**Authors:** Lifeng Zhuo; Kefan Jin; Zhe Liu; Hesheng Wang

**ID:** 150281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jKHbeYCp8K>) | [PDF](<https://openreview.net/pdf?id=jKHbeYCp8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150281>)

Bird's\-eye\-view \(BEV\) perception has emerged as a cornerstone of autonomous driving systems, providing a structured, ego\-centric representation critical for downstream planning and control\. However, real\-world deployment faces challenges from sensor degradation and adversarial attacks, which can cause severe perceptual anomalies and ultimately compromise the safety of autonomous driving systems\. To address this, we propose a resilient and plug\-and\-play BEV perception method \(RESBev\), which can be easily applied to existing BEV perception methods to enhance their robustness to diverse disturbances\. Specifically, we reframe perception robustness as a latent semantic prediction problem\. A latent dynamic predictor is constructed to extract spatiotemporal correlations across sequential BEV observations, thereby learning the underlying BEV state transitions to predict clean BEV features for reconstructing corrupted observations\. The proposed framework operates at the semantic feature level of the BEV perception pipeline, enabling recovery that generalizes across both natural disturbances and adversarial attacks without modifying the underlying backbone\. Extensive nuScenes experiments show RESBev notably enhances BEV perception robustness against natural disturbances and adversarial attacks, with latency, parameter and memory analyses verifying its excellent robustness\-efficiency trade\-off\.

## Active Corpus Selection for Training Subgraph Retrievers Using OOD Queries

**Authors:** Pritish Chakraborty; Aditya Singh; Indradyumna Roy; Lokesh N; Himanshu Dutta; Arun Iyer; Yashoteja Prabhu; Gaurav Sinha; Manik Varma; Soumen Chakrabarti; Abir De

**ID:** 153257 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MbIpE61lGH>) | [PDF](<https://openreview.net/pdf?id=MbIpE61lGH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153257>)

Neural subgraph retrieval \(NSR\) models degrade under query distribution shifts, and retraining for each new distribution requires collecting fresh ground\-truth labels, each of which entails an NP\-hard subgraph\-matching instance across a large corpus—making repeated label collection computationally prohibitive\. We introduce ACROSS, an active corpus selection framework that, under a fixed solver budget, selects a small corpus subset per out\-of\-distribution query whose labels suffice for effective NSR training\. We prove that allocating the entire budget to retrieving positives is optimal given extreme class imbalance\. To enable efficient positive retrieval across arbitrary query distributions, we linearize corpus embeddings around a base model, apply randomized projections to eliminate hinge nonlinearities, and train distribution\-shift\-tolerant representations via adversarial parameter perturbation\. The resulting corpus index is built once and reused across all distributions\. Experiments on four molecular graph datasets show ACROSS consistently outperforms six baselines in downstream retrieval accuracy\.

## When to Trust a PFN: Detecting Harmful Shift in Tabular Foundation Models

**Authors:** Viet Nguyen; Herman Bergström; Stephan Rabanser; Rahul Krishnan

**ID:** 150327 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ixQvsT5Hku>) | [PDF](<https://openreview.net/pdf?id=ixQvsT5Hku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150327>)

Tabular prior\-fitted networks \(PFNs\) work well across tabular classification problems but can fail silently at deployment when distributions shift\. We propose \*\*CALD\*\* \(Calibrated Anchor\-Loss Disagreement\), a lightweight unsupervised monitor that triggers an alarm to warn when a PFN might fail\. By finetuning the decoder to maximize disagreement with the test\-set prediction while maintaining accuracy on an ID anchor set, \*\*CALD\*\* identifies harmful OOD batches through the resulting anchor loss, requiring no labels on test batches\. We prove that the post\-finetune anchor loss has a strictly lower expectation under harmful shift than under ID eval, yielding a one\-sided test with a formal power guarantee\. Across 14 datasets covering tabular and structured distribution shift, on both TabPFN and TabICL, \*\*CALD\*\* matches or outperforms baselines on harmful shifts and is markedly more resilient to benign\-shift false alarms\.

## Bridging the Simulation\-to\-Experiment Gap with Adversarial Distribution Alignment

**Authors:** Kai Nelson; Tobias Kreiman; Sergey Levine; Aditi Krishnapriyan

**ID:** 151598 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZN3nHHOt4r>) | [PDF](<https://openreview.net/pdf?id=ZN3nHHOt4r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151598>)

A fundamental challenge in science and engineering is the simulation\-to\-experiment gap\. While we often possess prior knowledge of physical laws, these physical laws can be too difficult to solve exactly for complex systems\. Such systems are commonly modeled using simulators, which impose computational approximations\. Meanwhile, experimental measurements more faithfully represent the real\-world, but experimental data typically consists of observations that only partially reflect the system’s full underlying state\. We propose a data\-driven distribution alignment framework that bridges this simulation\-to\-experiment gap by pre\-training a generative model on fully observed \(but imperfect\) simulation data, then aligning it with partial \(but real\) observations of experimental data\. While our method is domain\-agnostic, we ground our approach in the physical sciences by introducing Adversarial Distribution Alignment \(ADA\)\. This method aligns a generative model of atomic positions—initially trained on a simulated Boltzmann distribution—with the distribution of experimental observations\. We prove that our method recovers the target observable distribution, even with multiple, potentially correlated observables\. We also empirically validate our framework on synthetic, molecular, and experimental protein data, demonstrating that it can align generative models with diverse observables\.

## Beyond the Training Distribution: Evaluating Predictions Under Distribution Shift and Selection Bias

**Authors:** Annie Ulichney; Amanda L Coston

**ID:** 149001 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tZ71MZ096G>) | [PDF](<https://openreview.net/pdf?id=tZ71MZ096G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149001>)

Understanding how a prediction model will perform in a new environment before deployment is essential to preventing harm when algorithms inform decision\-making\. Two common sources of model performance degradation are \(i\) covariate shift, where the target covariate distribution differs from the source, and \(ii\) selective labels, where the observability of outcomes depends on historical decisions\. We study pre\-deployment model evaluation under the joint presence of covariate shift and labeling of outcomes selectively based on observed features\. In particular, we present a double machine learning procedure for estimating the target risk of an arbitrary black\-box prediction model under a general loss function\. We show identification of this estimand under standard assumptions and derive a bias\-corrected estimator based on the influence function of the target risk\. Finally, we evaluate our estimator through experiments using the eICU electronic health records database, showing that it tracks the true target risk more accurately than methods that address either selective labels or covariate shift alone, as well as baselines that combine standard plug\-in approaches\.

## SolvMix: Learning Formulation\-State Landscapes for Liquid Electrolyte Conductivity Prediction

**Authors:** Kexin Zhang; Minzhang Li; Guotao Qiu; Tianqi Zhao; Yuna Zhang; Yibing Shan; Ye Mei; Xushan Zhao; Jingyi Yu

**ID:** 151559 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZglKtXQeaW>) | [PDF](<https://openreview.net/pdf?id=ZglKtXQeaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151559>)

Electrolyte conductivity is not a property of isolated molecules, but a response over a formulation landscape defined by solvents, salts, composition, salt mole ratio, and temperature\.  The same molecular component can play different effective roles as its amount and operating conditions change, while the underlying formulation state is observed only through macroscopic conductivity measurements\.  This makes conductivity prediction a distinctive mixture learning problem: a model must learn how molecular identities become formulation\-specific states, rather than merely how molecules are represented\.  We introduce SolvMix, a framework for learning formulation\-state landscapes for electrolyte conductivity prediction\.  SolvMix constructs component tokens for solvent and salt molecules, calibrates them into amount\-aware component states before mixture interaction, and predicts conductivity through a temperature\-formatted readout\.  We evaluate SolvMix on three curated electrolyte conductivity benchmarks, CALiSol\-23, DiffMix, and Bamboo\-mixer, covering diverse solvents, salts, compositions, salt mole ratios, and temperatures\.  Across standard splits on all three benchmarks and binned out\-of\-distribution \(OOD\) splits on Bamboo\-mixer, SolvMix outperforms strong molecular\-representation, mixture\-aggregation, and geometric\-interaction baselines under the reported protocols\.  Ablations show that the best\-performing formulation\-state construction combines amount\-and\-type\-aware component tokens, multiplicative amount calibration, token\-level interaction followed by mean pooling, and late\-concat temperature formatting\.  OOD results further show clear gains under formulation\-level shifts, where static component descriptors and local interaction patterns are least aligned with the required generalization\.  These results suggest that electrolyte conductivity prediction benefits from treating formulation\-state construction as a first\-class modeling problem, beyond molecular representation learning or explicit local interaction modeling\.

## Nearly Optimal Robust Covariance and Scatter Matrix Estimation Beyond Gaussians

**Authors:** Gleb Novikov

**ID:** 149150 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sTDb6ukoob>) | [PDF](<https://openreview.net/pdf?id=sTDb6ukoob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149150>)

We study the problem of \\emph\{computationally efficient\} robust estimation of the covariance/scatter matrix of elliptical distributions\-\-\-that is, affine transformations of spherically symmetric distributions\-\-\-under the \\emph\{strong contamination model\} in the high\-dimensional regime $d \\gtrsim 1/\\varepsilon^2$, where $d$ is the dimension and $\\varepsilon$ is the fraction of adversarial corruptions\. We show that the structure inherent to elliptical distributions enables us to achieve estimation guarantees comparable to those known for the Gaussian case\.  We propose an algorithm that, under a \{very mild assumption\} on the effective rank of the scatter matrix $\\Sigma$, and given a nearly optimal number of samples $n = \\tilde\{O\}\(d^2/\\varepsilon^2\)$, computes in polynomial time an estimator $\\hat\{\\Sigma\}$ satisfying $ \\left\\Vert \\Sigma^\{\-1/2\} \\hat\{\\Sigma\} \\Sigma^\{\-1/2\} \- Id \\right\\Vert\_\{\\text\{F\}\} \\le O\(\\varepsilon \\log\(1/\\varepsilon\)\) \. $ This matches the best known guarantees for the Gaussian setting\.  As an application of our result, we obtain \\emph\{efficiently computable, nearly optimal robust covariance estimators\}, significantly generalizing prior results that were restricted to the Gaussian case or required, in particular, matching the Gaussian fourth moment\. Specifically, for elliptical distributions satisfying the Hanson\-\-Wright inequality \(including Gaussians, uniform distributions over ellipsoids, and more generally elliptical distributions with Gaussian\-type radial concentration\), our estimator $\\hat\{\\Sigma\}$ of the covariance $\\Sigma$ achieves the same error guarantee as in the Gaussian case\. Moreover, for elliptical distributions with sub\-exponential tails \(such as the multivariate Laplace distribution\), our covariance estimator $\\hat\{\\Sigma\}$ satisfies the spectral norm bound $ \\left\\Vert \\Sigma^\{\-1/2\} \\hat\{\\Sigma\} \\Sigma^\{\-1/2\} \- Id \\right\\Vert \\le O\(\\varepsilon \\log\(1/\\varepsilon\)\) \. $ Remarkably, despite the heavier tails of such distributions, the covariance can still be estimated at the same rate as in the Gaussian case\-\-\-a phenomenon unique to high dimensions and absent in low\-dimensional settings\.  Our approach is based on estimating the covariance of the \\emph\{spatial sign\} \(i\.e\., the projection onto the sphere\) of elliptical distributions\. As part of our framework, we develop a generalization of the standard covariance filtering algorithm that allows us to work with distributions whose fourth moment differs from that of the Gaussian distribution\.

## Near\-Optimal Stochastic Linear Bandits with Delay

**Authors:** Ofir Schlisselberg; Mengxiao Zhang; Yishay Mansour

**ID:** 149837 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=muaMp7CAmk>) | [PDF](<https://openreview.net/pdf?id=muaMp7CAmk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149837>)

We study stochastic linear bandits with delayed feedback under several delay models and establish near\-optimal regret guarantees\. Our results identify when delayed linear bandits exhibit the same qualitative behavior as multi\-armed bandits \(MAB\), and when the linear structure creates fundamentally new challenges\. Specifically, \(1\) for \*loss\-independent delays\*, where the delay does not depend on the realized loss \(but potentially depends on the arm\), we show that delays incur only an additive regret penalty\. Under stochastic delays, this penalty scales with the expected delay, while under adversarial delays, it scales with the maximum number of outstanding observations\. Notably, both delay penalties are dimension\-free, improving upon the state\-of\-the\-art results; \(2\) for \*loss\-dependent delays\*, we show that linear bandits are substantially harder than MAB: unlike in MAB, we prove matching \(up to log factors\) upper and lower bounds in linear bandits, whose  delay penalty depends on the square root of the  dimension\. \(3\) for the \*delay\-as\-payoff model\*, a special case of loss\-dependent delay, we show that the optimal MAB guarantee, which depends only on the delay of the optimal arm, is also unattainable in linear bandits\. Together, these results provide a sharp characterization of how delayed feedback interacts with linear generalization\.

## CompleteRXN: Toward Completing Open Chemical Reaction Databases

**Authors:** Gabriel Vogel; Minouk Noordsij; Evgeny A Pidko; Jana M\. Weber

**ID:** 138965 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=th8s60xMrD>) | [PDF](<https://openreview.net/pdf?id=th8s60xMrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138965>)

Chemical reaction datasets such as USPTO suffer from substantial incompleteness, frequently missing byproducts, co\-reactants, and stoichiometric coefficients\. This limits their applicability and reliability in downstream applications\. Here, we introduce CompleteRXN, a large\-scale supervised benchmark for reaction completion under realistic missing\-data conditions\. We construct a dataset of aligned incomplete and atom\-balanced reactions by mapping USPTO records to curated mechanistic reactions\. We evaluate representative baselines, including a novel encoder\-decoder reaction completion model with constrained decoding, the Constrained Reaction Balancer \(CRB\), and a recent algorithmic method, SynRBL\. On our CompleteRXN benchmark, the CRB achieves high performance across splits of increasing difficulty, reaching 99\.20% equivalence accuracy on the random split and 91\.12% on the extreme out\-of\-distribution split\. SynRBL produces many balanced and chemically plausible completions, but with lower accuracy on the benchmark test splits\. Across all methods, performance degrades with increasing incompleteness\. We observe a substantial drop when evaluating on reactions outside the benchmark \(full uncurated USPTO\), highlighting the gap between benchmark performance and practical robustness and motivating future work\.

## Stochastic Matching via Local Sparsification

**Authors:** Sara Ahmadian; Edith Cohen; Mohammad Roghani

**ID:** 150334 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=isnRFTHGK5>) | [PDF](<https://openreview.net/pdf?id=isnRFTHGK5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150334>)

The classic online stochastic matching problem typically requires immediate and irrevocable matching decisions\. However, in many modern decentralized systems such as real\-time ride\-hailing and distributed cloud computing, the primary bottleneck is often local communication bandwidth rather than the timing of the match itself\. We formalize this challenge by introducing a two\-stage local sparsification framework\. In this setting, arriving requests must prune their realized compatibility sets to a strict budget of $k$ edges before a central coordinator optimizes the global matching\. This creates a "middle ground" between local information constraints and global optimization utility\.    We propose a local selection strategy, parametrized by a fractional solution of the expected instance\. Theoretically, we quantify the approximation ratio as a function of the solution's \{\\em spread\}\. We prove that under sufficient spread, our sparsifier globally preserves the expected size of the maximum matching\. Empirically, we demonstrate the robustness of our approach using the New York City ride\-hailing datasets and adversarial synthetic benchmarks\. Our results show that near\-optimal global matching is achievable even with highly constrained local budgets, significantly outperforming standard online baselines\.

## SetAD: Semi\-Supervised Anomaly Learning in Contextual Sets

**Authors:** Jianling Gao; Chongyang Tao; Xuelian Lin; Junfeng Liu; Shuai Ma

**ID:** 151553 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZlslgF7R5B>) | [PDF](<https://openreview.net/pdf?id=ZlslgF7R5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151553>)

Semi\-supervised anomaly detection \(SSAD\) has shown great promise by effectively leveraging limited labeled data\. However, existing methods are typically structured around scoring individual points or simple pairs\. Such point\- or pair\-centric view not only overlooks the contextual nature of anomalies, which are defined by their deviation from a collective group, but also fails to exploit the rich supervisory signals that can be generated from the combinatorial composition of sets\. Consequently, such models struggle to exploit the high\-order interactions within the data, which are critical for learning discriminative representations\. To address these limitations, we propose SetAD, a novel framework that reframes SSAD as a set scoring problem\. SetAD employs an attention\-based set encoder trained via a graded learning objective, where the model learns to quantify the degree of anomalousness within an entire set\. This approach directly models the complex group\-level interactions that define anomalies\. Furthermore, to enhance robustness and score calibration, we propose a context\-calibrated anomaly scoring mechanism, which assesses a point's anomaly score by aggregating its normalized deviations relative to multiple randomly sampled reference contexts\. Extensive experiments on 10 real\-world datasets demonstrate that SetAD significantly outperforms state\-of\-the\-art models\.

## Rethinking Layer\-wise Model Merging through Chain of Merges

**Authors:** Pietro Buzzega; Riccardo Salami; Angelo Porrello; SIMONE CALDERARA

**ID:** 153444 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LGEP9eG2Ie>) | [PDF](<https://openreview.net/pdf?id=LGEP9eG2Ie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153444>)

Model merging has emerged as a simple yet effective method to fuse models without re\-training\. Existing techniques operate at the level of individual layers, thereby overlooking the inter\-layer dependencies inherent in deep networks\. We show that this simplification induces distributional mismatches in intermediate activations during merging, as changes applied to early layers fail to propagate to downstream ones\. We identify these mismatches as a form of covariate shift that compounds across the network\. To address this issue, we propose Chain of Merges \(CoM\), a novel procedure that sequentially merges weights across layers while accounting for inter\-layer interactions\. In particular, CoM mitigates covariate shift through a series of regression problems, where input activations are recomputed at each step to reflect the updated representations\. Additionally, we introduce a dynamic weighting mechanism that prioritizes task\-layer pairs most susceptible to performance degradation, improving robustness during merging\. Experiments on standard benchmarks demonstrate that CoM achieves state\-of\-the\-art performance across heterogeneous tasks\. Code is available in the supplementary material\.

## When Graph Anomalies Learn to Hide: Test\-Time Cloaking in Graph\-Level Anomaly Detection

**Authors:** Jinyu Cai; Glynnis Lim; See\-Kiong Ng

**ID:** 156112 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0IiGVatU7k>) | [PDF](<https://openreview.net/pdf?id=0IiGVatU7k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156112>)

Graph\-level anomaly detection \(GLAD\) is increasingly deployed in high\-stakes settings, where its performance is evaluated on static, clean test graphs at deployment\. This creates a critical gap in practice, as anomalous graph inputs may be structurally modified after deployment to evade a fixed detector\. We formalize this challenge as test\-time graph cloaking: an unsupervised score\-minimization attack within a bounded graph\-edit budget\. We introduce score\-directed graph cloaking \(SGC\), an architecture\-agnostic white\-box attack that operates solely on the scalar anomaly score, making it applicable across diverse GLAD architectures\. To isolate adaptive evasion from generic perturbation sensitivity, we pair SGC with budget\-matched random edits and identify a distinct directedness gap\. While random structural noise largely preserves anomaly separation, score\-directed edits can drive anomalous graphs into the normal\-score region\. To mitigate this, we propose adversarial score training \(AST\), a normal\-only defense that smooths the score landscape via adversarial local score regularization on normal training graphs\. Our experiments across diverse benchmarks and GLAD detectors demonstrate that AST empirically improves cloaking robustness against adaptive evasion without relying on anomaly labels\.

## Feature\-Context Consistency: Unsupervised Adversarial Detection with Drift Stability on Attributed Graphs

**Authors:** Firas Bayram; Maxime Cordy

**ID:** 148620 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wOczaNixQw>) | [PDF](<https://openreview.net/pdf?id=wOczaNixQw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148620>)

Adversarial detection on evolving attributed graphs faces two challenges: fraud labels arrive late or not at all, and natural distributional drift erodes any trained decision boundary\. Modern detectors can reach strong detection rates when labels are available and the distribution is stationary; sustaining that quality without labels and under drift is the open problem\. We identify \\emph\{feature\-context consistency\} \-\-\- the alignment between a node's attributes and its aggregated neighborhood attributes \-\-\- as a single structural signal that addresses both\. We formalize it as the \\textbf\{Context Boost\} \(CB\) score within a Restricted Boltzmann Machine framework \(CB\-RBM\) and prove two complementary guarantees: a strict separation between legitimate and adversarial CB distributions, with gap growing linearly in model capacity, whenever the adversary lacks legitimate neighborhood context; and a Wasserstein\-Lipschitz stability bound under natural drift that prevents false alarms without retraining\. We validate on XBlock Ethereum phishing \($\\sim$153K nodes\) and Reddit banned\-user detection \($\\sim$11K nodes\), with two further datasets in the appendix spanning diverse domains\. With zero labels, CB\-RBM achieves AUROC\~$\\geq 0\.96$ on four adversarial attacks and keeps FPR close to its calibrated $5\\%$ target under drift \-\-\- outperforming supervised GNNs \(hundreds of labels\), unsupervised graph\-anomaly baselines, and a standard RBM whose FPR collapses to $89$\-\-$100\\%$\. What typically requires separate mechanisms \-\-\- label\-free operation and drift stability \-\-\- here follows from a single structural regularity of the data\.

## No\-Regret Caching with Delayed Hits

**Authors:** Bowen Jiang; Chaofan Ma; Qi Li; Wang Duo

**ID:** 154595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CQ5tByxuD8>) | [PDF](<https://openreview.net/pdf?id=CQ5tByxuD8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154595>)

Delayed hits occur when requests arrive while a previous miss for the same item is still being fetched\. They break the equivalence between hit ratio and latency because caching decisions depend on frequency, burst structure, and fetch latency\.  We develop a regret framework for delayed\-hit caching, with static regret against long\-term placement and switching regret against piecewise\-changing workloads\. We show that classical deterministic policies and randomized Marker fail to achieve no\-regret guarantees, both suffering linear static regret\. For stochastic arrivals, we introduce delayed\-hit shadow values and propose UCB\-DH, which achieves $O\(\\log T\)$ static regret on fixed instances with positive gaps, where $T$ is the horizon\. A matching gap\-dependent lower bound shows that the delayed\-hit latency\-amplification factor is statistically unavoidable, and restarted UCB\-DH gives sublinear regret for piecewise\-changing workloads\. For oblivious adversarial arrivals, we formulate an action\-independent shadow loss and propose LA\-FTPL with latency\-scaled perturbations and completion\-time admission\. LA\-FTPL achieves $O\(\\sqrt\{KT\\log N\\,\(Z^2\+C\_BZ\)\}\)$ shadow static regret, where $K$ is the cache capacity, $N$ the item universe size, $Z$ the fetch latency, and $C\_B$  the maximum one\-window delayed\-hit penalty\. With periodic restarts, it achieves $O\(ZT^\{2/3\}B^\{1/3\}\(K\\log N\)^\{1/3\}\)$ switching regret against comparators with at most $B$ cache changes\. Experiments on synthetic and real\-world traces show that our algorithms achieve sublinear regret and improve latency over the state\-of\-the\-art baselines\.

## Resilient Byzantine Agreement with Predictions

**Authors:** Julien Dallot; Darya Melnyk; Tijana Milentijević; Stefan Schmid; Patrik Welters

**ID:** 149730 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nnJ8B6FqKC>) | [PDF](<https://openreview.net/pdf?id=nnJ8B6FqKC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149730>)

The Byzantine Agreement \(BA\) problem is a fundamental task in distributed computing where nodes in a network need to agree on a common output in the presence of arbitrary \(worst\-case\) node failures\. In real\-world applications, nodes can be monitored over time to provide ML predictions of faulty behavior in a network\. In this work, we answer the question of whether predictions can improve the fault tolerance of a distributed system without sacrificing correctness when the predictions are wrong\. We consider a prediction\-augmented study of Byzantine agreement in which each node receives, in addition to its input bit, a predicted set of honest nodes\. We focus on algorithmic resilience \-\-\- the maximum number of faulty nodes an algorithm can tolerate \-\-\- and present algorithms and impossibility results whose resilience depends on the accuracy of the predictor\. As our first main result, we bring a complete characterization of the consistency\-\-robustness trade\-offs in both the non\-authenticated and authenticated settings: for $n$ nodes and a parameter $\\alpha \\in \[0, 1\]$, we present algorithms that tolerate up to $\\alpha \\cdot n$ faulty nodes when the predictor is correct \(consistency\), and up to $\\frac\{1\-\\alpha\}\{2\} \\cdot n \- 1$ faulty nodes when the predictor is arbitrarily wrong \(robustness\)\. In the authenticated setting, the robustness bound improves to $\(1\-\\alpha\) \\cdot n \- 1$\. We prove matching impossibility results, showing that these tradeoffs are optimal and independent of the particular prediction system\. Our second main result characterizes smoothness: the rate at which resilience degrades as the predictor becomes less accurate\. We show that resilience linearly decreases in the number of wrong predictions as long as that number stays within a constant fraction of $n$\. Concretely, in the non\-authenticated setting, each additional wrong prediction loses one unit of resilience, whereas in the authenticated setting, the decline is halved, since two wrong predictions are needed to lose one unit of resilience\.

## stable\-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation

**Authors:** Lucas Maes; Quentin Le Lidec; Luiz Facury; Nassim Massaudi; Ayush Chaurasia; Francesco Capuano; Richard Gao; Taj Gillin; Dan Haramati; Damien Scieur; Yann LeCun; Randall Balestriero

**ID:** 139680 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ApzyaGdg38>) | [PDF](<https://openreview.net/pdf?id=ApzyaGdg38>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139680>)

Research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison\. Current practice is further limited by three key bottlenecks: fragile one\-off codebases, slow video data loading, and the lack of standardized generalization benchmarks\. We present Stable\-WorldModel \(SWM\), an open\-source platform for standardized and reproducible world modeling research and evaluation\. It delivers \(1\) a high\-performance Lance\-based data layer with native support and conversion tools for MP4, HDF5, and LeRobot datasets, \(2\) clean, well\-tested implementations of modern world model baselines and planning solvers, and \(3\) a broad suite of environments and tasks extended with controllable visual, geometric, and physical factors of variation for systematic in\-silico evaluation of dynamics understanding, control performance, representation quality, and out\-of\-distribution generalization\. By unifying the full pipeline under a single, scalable framework, SWM dramatically reduces research overhead and accelerates trustworthy progress toward reliable world models\.

## Do Not Let Spikes Flip: Margin\-Resculpted Learning for Robust Spiking Neural Networks

**Authors:** Desong Zhang; Jia Hu; Geyong Min

**ID:** 152693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R7E5DE5F3A>) | [PDF](<https://openreview.net/pdf?id=R7E5DE5F3A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152693>)

Spiking Neural Networks \(SNNs\) transmit information through energy\-efficient discrete spike events, unlike the continuous activations used in conventional Artificial Neural Networks \(ANNs\)\. Existing SNN robustness methods often inherit ANN\-oriented objectives that suppress continuous perturbations or stabilize membrane\-potential dynamics\. In this paper, we argue that SNN robustness should be analyzed through the stability of spike patterns under perturbations\. We formalize perturbation\-induced spike flips and introduce the flip rate as a training\-agnostic metric for quantifying spike\-pattern instability\. We further show that spike flips are closely associated with membrane potentials near the firing threshold, and introduce margin occupancy to quantify this threshold\-margin vulnerability\. Based on these findings, we propose Margin\-Resculpted Learning \(MRL\), which regularizes excessive threshold\-margin occupancy with an activity\-adaptive bound\. MRL reduces vulnerable spike flips while preserving the threshold region needed for surrogate\-gradient learning\. Experiments across static and event\-based datasets, architectures, surrogate functions, and attack settings demonstrate consistent robustness improvements\.

## Optimal In\-context Adaptivity and Distributional Robustness of Transformers

**Authors:** Tianyi Ma; Tengyao Wang; Richard J Samworth

**ID:** 155446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5YXJKkV5dy>) | [PDF](<https://openreview.net/pdf?id=5YXJKkV5dy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155446>)

We study in\-context learning problems where a Transformer is pretrained on tasks drawn from a mixture distribution $\\pi=\\sum\_\{\\alpha\\in\\mathcal\{A\}\} \\lambda\_\{\\alpha\} \\pi\_\{\\alpha\}$, called the pretraining prior, in which each mixture component $\\pi\_\{\\alpha\}$ is a distribution on tasks of a specific difficulty level indexed by $\\alpha$\.  Our goal is to understand the performance of the pretrained Transformer when evaluated on a different test distribution $\\mu$, consisting of tasks of difficulty $\\beta\\in\\mathcal\{A\}$, and with potential distribution shift relative to $\\pi\_\\beta$\. In particular, we consider nonparametric regression problems with random smoothness, and multi\-index models with both random smoothness and random effective dimension\. We prove that a Transformer pretrained on such mixture distributions can adapt to the difficulty of a new task in\-context and achieve the optimal prediction rate, uniformly over test distributions in a chi\-squared divergence ball\. Thus, the pretrained Transformer is able to achieve faster rates of convergence on easier tasks and is robust to distribution shift at test time\. Finally, we prove that even if an estimator had access to the test distribution $\\mu$, the convergence rate of its expected risk over $\\mu$ could not be faster than that of our pretrained Transformers, thereby providing a more appropriate optimality guarantee than minimax lower bounds\.

## Controlling Temporal Pseudo\-Label Marginals for Stable Online Test\-Time Adaptation

**Authors:** Rani Amar; Ofir Lindenbaum

**ID:** 151349 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bC8ezX1M1D>) | [PDF](<https://openreview.net/pdf?id=bC8ezX1M1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151349>)

Continual test\-time adaptation \(CTTA\) updates a model online on a stream of unlabeled data under distribution shift\. In practice, CTTA often becomes unstable: small early prediction biases are reused as supervision, causing pseudo\-labels to progressively concentrate on a few classes and eventually leading to drift or collapse\. We observe that this instability is closely linked to the temporal contraction of pseudo\-label class usage during adaptation\. Existing CTTA methods often address reliability or diversity through sample selection or loss weighting, but they do not explicitly control how pseudo\-label mass is allocated across classes over time\. We introduce \*\*SCALAR\*\* \(Sinkhorn Class\-Marginal Regularization\), a lightweight plug\-in module that implements this temporal control over a short window of recent predictions\. SCALAR maintains a buffer of recent predictions, applies Sinkhorn balancing to project the window\-level class marginal toward a target distribution, and then uses the resulting balanced soft targets for adaptation\. SCALAR requires no architectural changes and adds less than 1\\% runtime and memory overhead\. SCALAR is most beneficial under skewed, non\-stationary, and aggressive\-adaptation regimes, where it substantially mitigates drift and collapse, even on top of entropy\- and diversity\-aware stabilization mechanisms\.

## End\-to\-End Verification of Neuro\-symbolic Automata via Contrastive Logit\-Gaps

**Authors:** Abdelrahman Hekal; Vasileios Manginas; Nikolaos Manginas; Alessio Lomuscio

**ID:** 152552 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SHNolnMBUT>) | [PDF](<https://openreview.net/pdf?id=SHNolnMBUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152552>)

Neuro\-symbolic systems for sequence classification couple a neural perception network with a finite automaton over abstract events\. Certifying their trajectory\-level decisions under input perturbations is critical for safety\-sensitive deployment\. We address the open problem of end\-to\-end formal robustness certification for such Neurosymbolic Automata \(NeSyA\) under norm\-bounded input perturbations\. Naive layerwise linear bound propagation fails on this composition: per\-step relaxation slack compounds through the temporal recurrence \(interval explosion\), and the standard log\-space transition score subtracts two log\-sum\-exp terms over overlapping coordinate sets that independent relaxations cannot tighten\. To address both, we introduce contrastive logit\-gap \(CLG\), a reparameterization whose two log\-sum\-exp heads act on disjoint coordinates and admit substantially tighter linear bounds, coupled with a fused temporal operator that yields corner\-tight bounds from a single linearization\. On NeSyA sequence benchmarks, our formulation scales significantly beyond recursive baselines, maintaining tight safety certificates at long horizons while reducing verification wall time by up to $\{\\sim\}6\{\\times\}$\. To our knowledge, this is the first end\-to\-end formal verification framework for temporal neuro\-symbolic systems\.

## Less is More: Fewer Tokens and Blocks Make AIGI Detection Faster and More Generalizable

**Authors:** Haipeng Fang; Yixing Lu; Yu Li; Qiang Sheng; Juan Cao; Sheng Tang

**ID:** 150053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l7AUTUgcKZ>) | [PDF](<https://openreview.net/pdf?id=l7AUTUgcKZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150053>)

AI\-Generated Image \(AIGI\) Detection is becoming critical as generative models proliferate, yet existing detectors often generalize poorly by relying on narrow, dataset\-specific artifacts\. Many prior works improve generalization through additions, such as introducing extra artifact cues, pretraining models, training constraints, or test\-time operations, which may increase inference cost and model complexity\. In this paper, we take the opposite route and study generalization through subtractions and propose AID\-\-, a plug\-and\-play framework that improves transformer\-based AIGI detectors from both feature and parameter perspectives\. At the feature level, we introduce high\-order dependency ranking to identify and prune redundant or potentially misleading tokens for progressive token reduction; and at the parameter level, we design relative\-advantage head supervision and a class\-asymmetric exit rule to train depth\-specific early\-exit heads\. AID\-\- can be seamlessly integrated into transformer\-based AIGI detectors to improve both efficiency and out\-of\-distribution generalizability, which is experimentally validated on six public datasets\. For example, AID\-\- helps the detector Effort achieve up to a 2\.2× speedup while improving generalization accuracy by 3\.6% on GenImages\.

## Pareto DNN Verification: Fast for Most Queries

**Authors:** Yizhak Y\. Elboher; Avraham Raviv; Amihay Elboher; Zhouxing Shi; Hillel Kugler; Guy Katz

**ID:** 151618 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZDDAP6WLxi>) | [PDF](<https://openreview.net/pdf?id=ZDDAP6WLxi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151618>)

Formal verification of deep neural networks \(DNNs\) faces a fundamental scalability challenge: verifying robustness is NP\-hard and state\-of\-the\-art tools often time out on modern architectures\. We propose PAreto VErification, or PAVE: by augmenting DNNs with early exits \(EEs\) and verifying exit\-by\-exit, we solve the vast majority of robustness queries\-\-\-roughly 80\\%\-\-\-in a small fraction of the total time\. The key insight is that most inputs in a robustness neighborhood exit at an early layer, a provably tractable sub\-problem, so verification terminates far before analyzing the full network\. EEs can be added to any DNN without degrading accuracy \(within 0\.3\\% across all tested architectures\)\. We formalize the novel robustness property for EE networks, prove it is Fixed\-Parameter Tractable under a trace stability condition \(which commonly holds in practice\), and present a sound and complete verification algorithm\. Two sound optimizations\-\-\-$break$ \(early termination when the winner dominates\) and $continue$ \(skipping the inner loop when no runner\-up can win\)\-\-\-reduce SAFE\-case verification time by up to $10 \\times$\. Experiments on MNIST, CIFAR\-10, and CIFAR\-100 with networks from 600K to 33M parameters demonstrate that PAVE enables solving queries that were not solved otherwise, including formal verification of ResNet\-18 on CIFAR\-100\.

## Reasoning\-Trace Collapse: Evaluating the Loss of Explicit Reasoning During Fine\-Tuning

**Authors:** Lukas Twist; Helen Yannakoudakis; Jie Zhang

**ID:** 139406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SfKYInSDnR>) | [PDF](<https://openreview.net/pdf?id=SfKYInSDnR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139406>)

Explicit reasoning models are trained to produce intermediate reasoning traces before final answers, but downstream fine\-tuning is often performed on ordinary instruction\-\-response data that contains no such traces\. We show that this mismatch can induce \*reasoning\-trace collapse\*: a fine\-tuned model continues to produce plausible final answers while losing the structurally valid explicit reasoning traces that made it a reasoning model in the first place\. We introduce a structural evaluation framework that separates answer correctness from reasoning\-trace validity, measuring valid, empty, missing, and truncated reasoning alongside reasoning\-conditioned task performance\. Using this framework, we study open\-weight reasoning models and find that standard supervised fine\-tuning can rapidly suppress valid reasoning traces, and that answer\-only metrics can substantially obscure this failure: in several settings, performance conditional on valid reasoning remains high while the rate of valid reasoning falls sharply\. We further show that simple loss\-masking strategies substantially mitigate collapse without requiring teacher\-generated reasoning traces\. These results suggest that evaluations of fine\-tuned reasoning models should report structural reasoning reliability in addition to final\-answer performance, especially when adaptation data does not contain explicit reasoning traces\.

## Evaluating Epistemic Uncertainty: Beyond OOD Detection and Active Learning

**Authors:** Jakub Paplhám; Vojtech Franc; Willem Waegeman; Eyke Hüllermeier

**ID:** 139438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PscPjahZWf>) | [PDF](<https://openreview.net/pdf?id=PscPjahZWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139438>)

Current evaluation of epistemic uncertainty relies on tasks such as out\-of\-distribution detection and active learning\. However, the Bayes\-optimal decision strategies for these tasks do not coincide with the scores commonly used to quantify epistemic uncertainty\. Building on the epistemic reject\-option framework, we evaluate epistemic uncertainty using its ability to identify regret, the reducible error\. Formulating selective prediction as a constrained optimization over coverage, expected risk, and regret, we prove the optimal selector is a thresholded convex combination of the ground\-truth aleatoric and epistemic uncertainties\. This theoretical unification exposes a weakness in recent uncertainty disentanglement literature: we demonstrate that standard correlation metrics between learned components do not necessarily predict their actual operational utility\. We instead propose to evaluate the achievable \(risk, regret, coverage\) surface of the decomposition as a diagnostic for joint disentanglement and utility\. Benchmarking standard methods on datasets with dense human annotations reveals that decision\-theoretic rankings can disagree substantially with proxy\-task rankings, including pairwise rank inversions between methods that are top\-ranked on one criterion and bottom\-ranked on other\.

## The Pareto Frontier of Randomized Learning\-Augmented Online Bidding

**Authors:** Mathis Degryse; Imrane Zaakour; Christoph Dürr; Spyros Angelopoulos

**ID:** 151438 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ahakqyD1h0>) | [PDF](<https://openreview.net/pdf?id=ahakqyD1h0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151438>)

Online bidding is a classical problem in online decision\-making, with applications in resource allocation, hierarchical clustering, and the analysis of approximation algorithms\. We study its randomized learning\-augmented variant, where an online algorithm generates a sequence of random bids while leveraging predictions from an oracle\. We provide analytical upper and lower bounds on the optimal consistency $C$ as a function of the robustness $R$, which match when $R \\geq 2\.885$, effectively closing the gap left by previous work\. The key technical ingredient is the notion of a \*bidding function\*, a novel abstraction that provides a unified framework for the design and analysis of randomized bidding strategies\. We complement our theoretical results with an experimental application of randomized bidding to the incremental median problem, demonstrating the applicability of our algorithm in practical clustering settings\.

## Are We Making Progress in Multimodal Domain Generalization? A Comprehensive Benchmark Study

**Authors:** Hao Dong; Hongzhao Li; Shupan Li; Muhammad Haris Khan; Eleni Chatzi; Olga Fink

**ID:** 139747 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6tWrq9LvUT>) | [PDF](<https://openreview.net/pdf?id=6tWrq9LvUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139747>)

Despite the growing popularity of Multimodal Domain Generalization \(MMDG\) for enhancing model robustness, it remains unclear whether reported performance gains reflect genuine algorithmic progress or are artifacts of inconsistent evaluation protocols\. Current research is fragmented, with studies varying significantly across datasets, modality configurations, and experimental settings\. Furthermore, existing benchmarks focus predominantly on action recognition, often neglecting critical real\-world challenges such as input corruptions, missing modalities, and model trustworthiness\. This lack of standardization obscures a reliable assessment of the field's advancement\. To address this issue, we introduce MMDG\-Bench, the first unified and comprehensive benchmark for MMDG, which standardizes evaluation across six datasets spanning three diverse tasks: action recognition, mechanical fault diagnosis, and sentiment analysis\. MMDG\-Bench encompasses six modality combinations, nine representative methods, and multiple evaluation settings\. Beyond standard accuracy, it systematically assesses corruption robustness, missing\-modality generalization, misclassification detection, and out\-of\-distribution detection\. With $7, 402$ neural networks trained in total across $95$ unique cross\-domain tasks, MMDG\-Bench yields five key findings: \(1\) under fair comparisons, recent specialized MMDG methods offer only marginal improvements over ERM baseline; \(2\) no single method consistently outperforms others across datasets or modality combinations; \(3\) a substantial gap to upper\-bound performance persists, indicating that MMDG remains far from solved; \(4\) trimodal fusion does not consistently outperform the strongest bimodal configurations; and \(5\) all evaluated methods exhibit significant degradation under corruption and missing\-modality scenarios, with some methods further compromising model trustworthiness\. We release MMDG\-Bench to enable more rigorous, reproducible, and directly comparable evaluation, addressing current limitations in evaluation practices and providing a stronger foundation for future progress in multimodal domain generalization\.

## AI Behavioral Evaluation Should Be Grounded in Psychophysics Across Marr’s Levels

**Authors:** Jonas Mueller; Bernhard Egger; Bjoern Eskofier; Pasquale Minervini; ANTONIO RIZZO; Marco Valentino; Dario Zanca

**ID:** 140019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oBYTzTkjHI>) | [PDF](<https://openreview.net/pdf?id=oBYTzTkjHI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140019>)

This position paper argues that AI evaluation research is fragmented across incompatible frameworks \(e\.g\., adversarial robustness, attention probing, bias analysis, corruption tolerance, interpretability\), each operating at a different explanatory level without a shared grammar to make this explicit\. We propose unifying these efforts under \\textbf\{AI psychophysics\}, a behavioral evaluation methodology grounded in classical psychophysics and Marr's three levels of analysis\. The core contribution is a formalization showing that all these threads instantiate the same psychometric function $\\psi\(\\mathbf\{S\}\)=p\(\\mathbf\{J\}\|\\mathbf\{S\}\)$, but at different levels of explanatory granularity \(computational, algorithmic, implementational\)\. We present a taxonomy of 21 evaluation paradigms organized by this framework and show that the absence of a shared grammar causes category errors, where metrics from one level are routinely used to support claims at another\. We conclude with a concrete research agenda for standardizing AI evaluation around this framework\.

## Breaking Adversarial Transferability in Fine\-Tuned Speech Recognition

**Authors:** Mojtaba Nafez; Aref Mousavi; Mohammad E Mahdavi; Mobina Poulaei; Kiarash K Feriz; Mohammad Hossein Rohban

**ID:** 153915 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hk5S6s2xN9>) | [PDF](<https://openreview.net/pdf?id=Hk5S6s2xN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153915>)

Many organizations fine\-tune publicly available pretrained Automatic Speech Recognition \(ASR\) models and deploy them in black\-box settings, assuming limited access provides protection\. We show this assumption is fragile: adversarial perturbations crafted on the public base model transfer effectively to fine\-tuned target models, severely degrading performance and posing concerns for safety\-critical applications\. We propose TransferBreaker, a unified fine\-tuning framework that suppresses adversarial transfer by integrating Base Adversarial Fine\-Tuning, which restricts adversarial training to base\-effective perturbations; Latent Jacobian Regularization, which enforces latent\-space invariance by suppressing adversarially sensitive directions; and HybridGrad\-AFT, which improves robustness against adaptive attacks by interpolating transferable perturbations from base and target gradients\. We theoretically justify all components and extensively evaluate TransferBreaker across three languages and four large ASR models, substantially reducing adversarial WER from 92\.6 to 27\.8\.

## Structure vs\. Chaos: Asymmetric Entropic Optimization for Enforcing Instruction Hierarchy

**Authors:** Tianxiao Huang; Xinwei Liu; Zitong Shi; Yuxin Wu; Xuan Chen; Liangtao Zheng; Yixuan Tang; Anthony Tung

**ID:** 150200 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jzIRAnG5UD>) | [PDF](<https://openreview.net/pdf?id=jzIRAnG5UD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150200>)

Large language models \(LLMs\) deployed as agents remain vulnerable to prompt\-based instruction injection, where user inputs induce the model to violate higher\-priority system directives\. Existing methods often treat violations as a coherent class or rely on surface text patterns, which can limit robustness as attack strategies evolve\. In this paper, we investigate LLM hidden\-state dynamics under attack and uncover a phenomenon we term Asymmetric Logic: the model's response generations concentrate in a relatively low\-variability region of latent representation space when it's compliant to the system prompt, while compromised behaviors exhibit diverse deviations\. Based on this observation, we propose Asymmetric Entropic Optimization \(AEO\), a novel framework that monitors the internal shifts in latent representations to detect and proactively rectify anomalous behaviors\. Our method effectively identifies logic deviations by quantifying the entropic divergence between the compliant manifold and the chaotic violation space\. Across a range of state\-of\-the\-art LLM backbones, AEO demonstrates strong robustness to diverse instruction injection attacks\. For instance, on Qwen2\.5\-14B\-Instruct, AEO attains a detection AUC of 97\.28% with FPR95 of only 10\.38%\. The same chaos score also gates a lightweight post\-hoc correction module that lifts overall instruction\-following accuracy from 63\.94% to 76\.00% on IHEval, without any model fine\-tuning\. The code is available at https://anonymous\.4open\.science/r/AEO\-code\-56D2/\.

## Robust\-by\-Design Distributional Learning from Contaminated Samples

**Authors:** Nevena Gligić; Arya Farahi

**ID:** 154903 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A4wtdukFKi>) | [PDF](<https://openreview.net/pdf?id=A4wtdukFKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154903>)

Modern data analysis pipelines increasingly rely on large datasets assembled through retrieval, scraping, automated filtering, and post\-hoc curation, where the observed sample is often a contaminated mixture rather than the target population\. Standard distributional objectives either ignore contamination and converge to the wrong target, or retain only a small trusted subset and discard most of the data\. We study supervised and unsupervised distributional learning when a clean reference sample is compared with a pooled sample from $r=\(1\-\\epsilon\)q\+\\epsilon z$, where $q$ is the latent target distribution and $z$ is an unknown contaminant\. Motivated by settings with noisy membership scores for all observations and exact labels for a small audited subset, we propose contamination\-corrected maximum mean discrepancy \(CC–MMD\), a design\-based estimator that combines proxy scores with audited residual corrections to recover the oracle MMD that would have been computed from the latent clean sample\. CC–MMD requires no calibration assumption on the proxy scores and no structural assumptions on the contaminant beyond standard kernel regularity\. We prove finite\-population design\-unbiasedness of the corrected kernel sums, establish asymptotic normality of the audit correction, and show consistency for the target discrepancy $\\mathrm\{MMD\}^2\(p,q;k\)$\. Empirically, CC–MMD tracks the oracle under increasing contamination, improves parameter recovery and prediction in contaminated regression, and enables generative models trained on heavily corrupted mixtures to recover the clean target distribution\. These results show that contaminated data need not be discarded or treated as the estimand\. With sparse trusted labels and abundant noisy supervision, distributional objectives can be made robust by design\.

## Poison\-then\-Hide: Finetuning\-Activated Backdoor Attack on Pretrained Vision Encoders

**Authors:** Qixuan Jin; Abinitha Gourabathina; Vinith Suriyakumar; Walter Gerych; Marzyeh Ghassemi

**ID:** 152376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TXrCwmcWBi>) | [PDF](<https://openreview.net/pdf?id=TXrCwmcWBi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152376>)

Backdoor attacks threaten the integrity of machine learning models by allowing attackers to control model behavior through triggers\. Models can be compromised during finetuning by backdoor attacks through either poisoned data or adversarial training objectives\.  Because existing finetuning\-activated attacks assume limited domain shift or frozen encoder layers, they often fail under full\-model finetuning\. We target a stealthy finetuning\-activated attack where a dormant backdoor is implanted in a pretrained encoder, and later activated by finetuning on clean downstream data\.  We propose Poison\-then\-Hide, a novel attack that remains effective when the entire model is finetuned in a domain transfer\. Our approach consists of three components: trigger optimization, base encoder poisoning, and targeted unlearning to conceal the backdoor\.  We evaluate our method on six datasets and three model architectures, and achieve state\-of\-the\-art \(up to 97%\) attack success rates\. We find that two design choices \- jointly learning the benign target task and the backdoor during encoder poisoning, and optimizing the trigger for attack robustness using an ensemble of simulated finetuned models \- are critical to the attack's success\. We demonstrate that standard detection and mitigation defenses cannot fully remove the backdoor, which can reappear after benign finetuning\.

## AI\-Generated Content Should Be Evaluated by Its Substance, Not Its Source

**Authors:** Anastasia Voznyuk; Vasily Konovalov

**ID:** 140027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jXobTKM5f0>) | [PDF](<https://openreview.net/pdf?id=jXobTKM5f0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140027>)

AI\-generated content has already become a common component of digital communication, and its detection is often considered a central tool for ensuring accountability, based on the assumption that AI authorship is inherently problematic and should therefore be identified and filtered\. This position paper argues that labeling a text as \`\`AI\-generated'' offers little meaningful information about its utility or truthfulness, and that the research community should instead target the underlying properties that motivate concern: factual reliability, provenance, and stylistic quality\. Our position is supported by a growing body of evidence showing that universal detectors are fundamentally fragile; we illustrate this through a small internal replication and literature review, noting that performance frequently collapses from near\-perfect \(0\.999 AUROC\) to near\-random \(0\.56\) under simple stylistic shifts or adversarial attacks\. Moreover, even a perfectly robust detector would answer the wrong question, since AI\-generated text can be accurate and well\-sourced while human\-written text can be misleading\. We outline a research agenda that reframes AI\-text analysis around claim\-level verification rather than origin classification, allowing the community to adapt constructively to the growing prevalence of AI\-assisted writing in education, publishing, and professional settings\.

## From Inexact Gradients to Byzantine Robustness: Acceleration and Optimization under Similarity

**Authors:** Renaud Gaucher; Aymeric Dieuleveut; Hadrien Hendrikx

**ID:** 148563 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wx2qpHOXO8>) | [PDF](<https://openreview.net/pdf?id=wx2qpHOXO8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148563>)

Distributed learning algorithms are vulnerable to adversarial nodes, a\.k\.a\. Byzantine failures\. To solve this issue, robust algorithms have been developed, which typically replace parameter averaging by robust aggregations\. While generic conditions on these aggregations exist to guarantee the convergence of \(Stochastic\) Gradient Descent \(SGD\), the analyses remain rather ad\-hoc\. This hinders the development of more complex robust algorithms, such as accelerated ones\. In this work, we show that Byzantine\-robust distributed optimization can, under standard generic assumptions, be cast as a general optimization with inexact gradient oracles,  an active field of research\. This allows to obtain state\-of\-the\-art results for Byzantine\-robust optimization from general inexact first\-order analyses\.   We first show that inexact GD on top of standard robust aggregation procedures obtains optimal asymptotic error in the Byzantine setting\. Going further, we study an algorithm for Optimization under Similarity, in which the server leverages an auxiliary loss function that approximates the global loss\. Then, we introduce an Accelerated Extra\-gradient method, that yields acceleration in both the standard and similarity settings\. We first give new general convergence results for these inexact schemes, and then instantiate these results in the Byzantine setting through our reduction\. Both algorithms drastically reduce the communication complexity compared to previous methods, as we show theoretically and empirically\.

## ConfDet: Learning Reliable Confidence for MLLM\-based Detection

**Authors:** Xuanjie Mao; Peng Ye; Ziteng Ma; Lin Zhang; Jiakang Yuan; Haoyu Zhang; Fujun Han; Jiayuan Fan; Tao Chen

**ID:** 151261 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=biptQ5O8Vh>) | [PDF](<https://openreview.net/pdf?id=biptQ5O8Vh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151261>)

MLLM\-based detection has shown promising end\-to\-end detection ability in recent years, but its generated detection results still lack reliable confidence for evaluation and interpretation\. Since detection data itself do not provide human\-annotated confidence labels, existing MLLM\-based detection methods mostly obtain confidence implicitly from prompted self\-assessment, generation probabilities, or external proxy scores\. While these scores are available for evaluation, they are not explicitly connected with the actual detection quality\. Inspired by conventional detectors that optimize confidence through classification, objectness, or quality estimation branches, we formulate confidence in MLLM\-based detection as an explicit modeling target to be learned, optimized and calibrated\. Specifically, we present ConfDet, a practical confidence framework that first uses discrete confidence tokens based supervised fine\-tuning to enable stable and parsable confidence generation, then applies GRPO with detection and separation joint rewards to optimize confidence score separation and preserve detection quality, and finally performs condition\-aware post\-hoc calibration to align confidence with empirical accuracy\. Experiments across different in\-distribution and out\-of\-distribution benchmarks show that, ConfDet greatly improves AP through better confidence ranking and reduces confidence miscalibration across benchmarks, providing a reliable confidence for MLLM\-based detection\.

## Frame the adversary: a structure\-aware attack methodology

**Authors:** Vicky Kouni; Stelios Perrakis; Francis Bach; Pascal Frossard; Yann Chevaleyre

**ID:** 149307 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r9iMhnGR8K>) | [PDF](<https://openreview.net/pdf?id=r9iMhnGR8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149307>)

Frequency\-based adversarial attacks have recently grown popular by exploiting spectral sensitivities shared across neural architectures\. Unlike spatial perturbations, frequency\-based attacks expose deeper vulnerabilities, making them especially valuable for robust evaluation of safety\-critical and security\-sensitive applications\. Yet, existing approaches are typically not derived as solutions to an optimization problem that explicitly captures transform\-domain structure\. In this paper, we propose a methodology for crafting principled frequency\-based adversarial attacks, via a dedicated optimization framework\. A cornerstone of our method hinges on the introduction of a perturbation constraint set, tied to highly structured non\-orthogonal transforms, well\-known for their flexible, non\-predefined frequency handling\. We prove that the attacks emerge as weighted $\\ell\_2$\-projections onto this set, yielding a general and controlled attack generation mechanism\. By this, we provide a clear geometric attack characterization, ensuring alignment between the optimization objective and the perturbation constraint\. We assess our framework on standardized datasets, for pretrained and adversarially robust models\. Results highlight that our attacks, being solutions to an optimization problem, over a structured perturbation set, are highly effective, even across different, unseen architectures\. Our methodology could serve as a theoretical baseline for designing and analyzing transformed\-based attacks, targeting fundamental model vulnerabilities, instead of mere architecture\-specific artifacts typically studied in the robustness literature\.

## Robust and Scalable Collaborative Learning via Pull\-Based Epidemic Communication

**Authors:** Abdellah El Mrini; Sadegh Farhadkhani; Rachid Guerraoui

**ID:** 149248 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rmeEtbylhS>) | [PDF](<https://openreview.net/pdf?id=rmeEtbylhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149248>)

Collaborative machine learning is vulnerable to adversarial behaviors during training\. Existing defenses typically rely on central coordination or induce high communication costs\. We introduce \*Robust Pull\-based Epidemic Learning \(RPEL\)\*, a scalable and fully decentralized framework that achieves robustness without a central server\. Unlike traditional methods, whose communication cost grows as $\\mathcal\{O\}\(n^2\)$ with the number of nodes $n$, RPEL uses a pull\-based epidemic communication scheme that scales as $\\mathcal\{O\}\(n \\log n\)$\. By pulling model parameters from small, randomly selected subsets of peers, RPEL significantly lowers the number of required messages while preserving convergence guarantees with high probability\. Experimental results demonstrate that RPEL indeed tolerates attacks, attains accuracy comparable with all\-to\-all communication, and scales efficiently to large networks\.

## Neurosymbolic Object\-Centric Learning with Distant Supervision

**Authors:** Stefano Colamonaco; David Debot; Giuseppe Marra

**ID:** 151324 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bMkCLL1wPH>) | [PDF](<https://openreview.net/pdf?id=bMkCLL1wPH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151324>)

Neurosymbolic learning can use symbolic rules to provide supervision for latent concepts from weak labels, but it commonly assumes that the entities referenced by these rules are already specified\. Object\-centric models decompose images into slot\-like representations; however, such slots are not necessarily aligned with the predicates required for symbolic reasoning\. We investigate object\-centric neurosymbolic learning under distant supervision, where the object\-level arguments of a logic program are learned directly from images using only global task labels\. We introduce DeepObjectLog, a probabilistic neurosymbolic model that integrates a slot\-based perceptual encoder with a probabilistic logic layer\. The encoder predicts objectness and class probabilities for candidate object representations, while the logic layer marginalizes over latent objectness and class assignments to compute the likelihood of the observed label\. This formulation provides a differentiable task\-level learning signal for object\-centric perception without requiring per\-object labels, masks, bounding boxes, or heuristic set matching\. Evaluations across diverse visual reasoning tasks demonstrate that DeepObjectLog achieves superior out\-of\-distribution generalization to compositional, object\-count, and rule shifts compared to neural object\-centric and standard neurosymbolic baselines\.

## Assessing the robustness of heterogeneous treatment effects in survival analysis under informative censoring

**Authors:** Yuxin Wang; Dennis Frauen; Jonas Schweisthal; Maresa Schröder; Stefan Feuerriegel

**ID:** 149514 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pYwXc4sHCJ>) | [PDF](<https://openreview.net/pdf?id=pYwXc4sHCJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149514>)

Dropout is common in clinical studies, with up to half of patients leaving early due to side effects or other reasons\. When dropout is informative \(i\.e\., dependent on survival time\), it introduces censoring bias, because of which treatment effect estimates are also biased\. In this paper, we propose an assumption\-lean framework to assess the robustness of conditional average treatment effect \(CATE\) estimates in survival analysis when facing censoring bias\. Unlike existing works that rely on strong assumptions, such as non\-informative censoring, to obtain point estimation, we use partial identification to derive informative bounds on the CATE\. Thereby, our framework helps to identify patient subgroups where treatment is effective despite informative censoring\. We further propose a novel model\-agnostic meta\-learner, called \*\*SurvB\-learner\*\*, to estimate the bounds that can be used in combination with arbitrary machine\-learning models, and that has favorable theoretical properties such as double\-robustness and quasi\-oracle efficiency\. We finally demonstrate the effectiveness of our meta\-learner across various experiments using both simulated and real\-world data\.

## A Systematic Analysis of Out\-of\-Distribution Detection Under Representation and Training Paradigm Shifts

**Authors:** Claudio César Claros\-Olivares; Austin Brockmeier

**ID:** 138908 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xZm0LvUahe>) | [PDF](<https://openreview.net/pdf?id=xZm0LvUahe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138908>)

We present a systematic benchmark of out\-of\-distribution \(OOD\) detection CSFs through a representation\-centric lens\. Our study spans CNN and ViT backbones, multiple training paradigms, four image\-classification source datasets \(CIFAR\-10, CIFAR\-100, SuperCIFAR\-100, and TinyImageNet\), and OOD datasets grouped into near, mid, and far regimes using CLIP\-derived semantic distances\. To compare CSFs across these settings, we employ a multiple\-comparison\-controlled rank pipeline that identifies top cliques of statistically indistinguishable winners under threshold\-free ranking metrics \(AURC and AUGRC\)\. The main empirical finding is that the competitive detector family depends more on the learned representation than on score design alone\. For both CNNs and ViTs, simple probabilistic scores dominate misclassification detection\. On CNNs, margin\-based scores are strongest in near\-OOD regimes, while geometry\-aware scores such as NNGuide, fDBD, and CTM become more competitive as shift severity increases\. On fine\-tuned ViTs, the top cliques are led mainly by reconstruction\- and residual\-based scores\. To interpret these ranking shifts, we analyze the last\-layer representation using Neural Collapse \(NC\) metrics\. The resulting picture is consistent across architectures: prototype\- and boundary\-aware scores become stronger when the representation is more collapsed and better aligned with classifier weights, whereas weaker\-collapse regimes favor gradient\- and manifold\-based scores\. Building on these insights, we propose two contributions: a simple PCA\-based projection\-filtering procedure that improves detector performance, and an approach that uses NC measurements computed from a trained classifier to predict its competitive out\-of\-distribution detector shortlist, without requiring any additional OOD data\.

## Test\-Time Defense Against Adversarial Attacks via Stochastic Resonance of Latent Ensembles

**Authors:** DONG LAO; Yuxiang Zhang; Haniyeh E Oskouie; Yangchao Wu; Alex Wong; Stefano Soatto

**ID:** 152658 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RNQOTYbTSv>) | [PDF](<https://openreview.net/pdf?id=RNQOTYbTSv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152658>)

We propose a test\-time defense mechanism against adversarial attacks: Unlike existing methods that rely on feature filtering or smoothing, which can lead to information loss, we propose to \`\`combat noise with noise'' by leveraging stochastic resonance to enhance robustness while minimizing information loss\. Our approach introduces small translational perturbations to the input image, aligns the transformed feature embeddings, and aggregates them before mapping back to the original reference image\. This can be expressed in a closed\-form formula, which can be deployed on diverse existing network architectures without introducing additional network modules or fine\-tuning for specific attack types\. The resulting method is entirely training\-free, architecture\-agnostic, and attack\-agnostic\. Empirically, the method achieves state\-of\-the\-art robustness on image classification and provides the first generic test\-time defense for dense prediction tasks, including stereo matching, optical flow, and monocular depth estimation\. Across adversarial attacks, it recovers up to 68\.1% of the accuracy loss on image classification, 71\.9% on stereo matching \(MAE\), 29\.2% on optical flow \(EPE\), 68\.3% on depth estimation \(SqRel\),  and 83\.8% on vision\-language alignment \(cosine similarity\)\.

## Generative Cross\-Entropy: A Strictly Proper Loss for Data\-Efficient Classification

**Authors:** Qipeng Zhan; Zhuoping Zhou; Li Shen

**ID:** 154926 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9vWmNwDMJB>) | [PDF](<https://openreview.net/pdf?id=9vWmNwDMJB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154926>)

Cross\-entropy \(CE\) is the default training loss for supervised classification, but its sample efficiency is limited when labels are scarce\. Existing remedies primarily act on the data side, via augmentation, synthesis, or transfer from pretrained models; the training objective itself is rarely revisited\. We revisit it here\. Drawing on the classical observation that generative classifiers reach their asymptotic error with fewer samples than discriminative ones, we propose Generative Cross\-Entropy \(GenCE\), a drop\-in replacement for CE that introduces a generative learning principle into a standard discriminative network without altering the architecture or fitting a separate density model\. GenCE follows from a Bayesian rewrite of the class\-conditional likelihood and, in the mini\-batch approximation, reduces to normalizing each sample's softmax score against the model's predictions on the batch, coupling the training signal across examples sharing a class\. We extend the proper\-scoring\-rule framework to such non\-local losses and prove that GenCE is strictly proper under a mild completeness condition: its population risk is uniquely minimized at the true posterior\. Across three datasets, on two architectures and in both balanced small\-data and class\-imbalanced regimes, GenCE outperforms CE and other widely used losses, while also producing better\-calibrated probabilities and stronger out\-of\-distribution detection\.

## Synthetic Web: Benchmarking Language Agents under Adversarial Search Ranking

**Authors:** Shrey Shah; Levent Ozgur

**ID:** 155345 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6JUMpZWGTT>) | [PDF](<https://openreview.net/pdf?id=6JUMpZWGTT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155345>)

Language agents increasingly act as web\-enabled systems that search, browse, and synthesize information from diverse sources\. However, these sources can include unreliable or adversarial content, and the robustness of agents to adversarial ranking remains poorly understood\. Existing benchmarks evaluate functional navigation or static factuality but cannot causally isolate this vulnerability and often confound retrieval\-time reasoning with memorized knowledge\. We introduce Synthetic Web Benchmark, a controlled environment of procedurally generated web ecosystems designed to evaluate retrieval\-time reasoning and source criticism\. The benchmark comprises thousands of hyperlinked articles with ground\-truth labels, process\-level interaction traces, and contamination filtering to ensure that answers cannot be recovered from pretraining alone\. By injecting a single high\-plausibility misinformation article at a specified rank, we measure the causal effect of adversarial exposure under minimal intervention\. Across six frontier models and thousands of evaluation instances, we observe catastrophic failures: accuracy collapses despite unrestricted access to truthful evidence, accompanied by limited search escalation, weak cross\-source synthesis, and severe miscalibration\. These results show that current agents struggle to arbitrate conflicting sources even when sufficient evidence is available, revealing fundamental limitations in retrieval\-based reasoning\. The benchmark provides a reproducible testbed for studying epistemic robustness and developing more reliable web agents\.

## Beyond Pessimism: Offline Learning in KL\-regularized Games

**Authors:** Yuheng Zhang; Claire Chen; Nan Jiang

**ID:** 153617 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K3emkZ9UcE>) | [PDF](<https://openreview.net/pdf?id=K3emkZ9UcE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153617>)

We study offline learning in KL\-regularized two\-player zero\-sum games, where policies are optimized with respect to a fixed reference policy through KL regularization\. Prior work relies on pessimistic value estimation to handle distribution shift, yielding only $\\widetilde\{\\mathcal\{O\}\}\(1/\\sqrt n\)$ statistical rates\. We develop a new pessimism\-free algorithm and analytical framework for KL\-regularized games, built on the smoothness of KL\-regularized best responses and a stability property of the Nash equilibrium induced by skew symmetry\. This yields, to our knowledge, the first pessimism\-free offline learning guarantee for KL\-regularized games, with a fast $\\widetilde\{\\mathcal\{O\}\}\(1/n\)$ sample complexity bound\. We further propose an efficient self\-play policy optimization algorithm that replaces exact equilibrium computation with iterative KL\-regularized policy updates, and prove that its last iterate preserves the same pessimism\-free statistical guarantee up to a controlled optimization error\.

## Optimal Learning\-Augmented Algorithm for Online Bidding

**Authors:** Changyeol Lee; Dahoon Lee; Jongseo Lee; Yongho Shin; Changki Yun

**ID:** 150063 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l10hVCrw4N>) | [PDF](<https://openreview.net/pdf?id=l10hVCrw4N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150063>)

Recent advances in machine learning have spurred significant interest in learning\-augmented algorithms, particularly for online optimization\. A growing body of work has studied online bidding in this framework, aiming to characterize the trade\-off between robustness and consistency\. While this trade\-off is fully understood for deterministic algorithms, a gap between upper and lower bounds remains in the randomized setting\. In this paper, we close this gap by presenting a Pareto\-optimal randomized learning\-augmented algorithm for this problem\. Our approach introduces the notion of a bidding profile , a novel framework for representing the distribution over bids generated by an algorithm\. We show that any bidding algorithm can be reduced, without loss of generality, to one driven by a bidding profile, and we characterize the optimal profile via a system of delayed differential equations\. Finally, we demonstrate the broader applicability of our approach by extending it to the linear search problem, yielding a significant improvement over prior learning\-augmented algorithms for linear search\.

## When Uncertainty Is the Target: Adversarial Attacks on Uncertainty\-Aware Predictors

**Authors:** A Q M Sazzad Sayyed; Michele Caprio; Nathaniel D Bastian; Francesco Restuccia

**ID:** 148990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tboXRmIA5a>) | [PDF](<https://openreview.net/pdf?id=tboXRmIA5a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148990>)

As machine learning becomes increasingly deployed in high\-stakes scenarios, studying adversarial vulnerability of uncertainty\-aware models has become a compelling necessity\. In this paper, we focus on adversarial attacks that manipulate predictive uncertainty rather than model predictions\. We focus on predictors that decompose uncertainty into aleatoric uncertainty \(AU\) and epistemic uncertainty \(EU\) and formalize uncertainty vulnerability as the maximum increase in AU achievable under a stealth constraint where the EU is kept below a threshold\. This framing yields three complementary findings\. First, we theoretically show that knowledge of the baseline EU can enlarge the attacker's feasible stealth region and increase the maximal achievable increase in AU\. Second, a first\-order analysis reveals that vulnerability is governed by the component of the AU gradient orthogonal to EU, enabling stealthy manipulation\. Third, contrary to standard margin\-based intuition, vulnerability peaks at moderate margins\. Experiments across MNIST, CIFAR\-10, and CIFAR\-100 with standard architectures show that the proposed attack achieves non\-trivial aleatoric damage while maintaining zero epistemic\-stealth violation \(e\.g\., mean AU increase of 0\.0286, 0\.0853, and 0\.1568, respectively\), whereas unconstrained uncertainty attacks violate the stealth constraint on over 90% of samples\. Experiments indicate that the largest damage typically occurs in an intermediate uncertainty regime rather than at the extremes\. Furthermore, consistent with our theoretical analysis, feasible attackability collapses under increasing epistemic uncertainty \(e\.g\., mean attackability decreases from 0\.0363 to 0\)\. Overall, these results intimately connect uncertainty decomposition to adversarial geometry\.

## The Power of a Random Sample in Online Algorithms

**Authors:** Omer Wasim; Sami Davies; Shallu Tomer; Rathish Das

**ID:** 152757 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QaYdB3AQtP>) | [PDF](<https://openreview.net/pdf?id=QaYdB3AQtP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152757>)

In this paper, we introduce a semi\-random model in online optimization, which interpolates naturally between the standard \(adversarial\) and random\-order arrival model, which we call the online with a random sample \(ORS\) model: the full input may be chosen adversarially, but a random $p$\-fraction of the input is selected and presented to the algorithm in random\-order, before the remaining non\-sampled elements are presented \(in adversarial order\)\. While similar in spirit to the AOS \(adversarial order with a sample\) model introduced by Kaplan, Naori and Raz, in our ORS model, the sampled $p$\-fraction is revealed online instead of offline, and hence, competitiveness is measured with respect to the full input\. Our central focus in the paper is applying the ORS model to the secretary problem and its natural $\(k,1\)$ variant\.  For the secretary problem, we present an optimal $pe^\{\-p\}$\-competitive algorithm, while for the $\(k,1\)$\-secretary problem, we obtain a competitive algorithm whose performance converges to optimal competitiveness as $p\\rightarrow 1$\. We also include a $O\(\\log \(1/p\)\)$\-competitive algorithm for facility location\.

## Benchmarks as Measurement Instruments: Quantifying Signal and Noise for More Efficient AI Evaluations Under Distribution Shift

**Authors:** Michael Hardy; Anka Reuel\-Lamparth; Jodi Casabianca; Hansol Lee; Benjamin Domingue; Sanmi Koyejo; Mykel J Kochenderfer

**ID:** 139555 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IrodEQg4Nj>) | [PDF](<https://openreview.net/pdf?id=IrodEQg4Nj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139555>)

AI progress is increasingly tracked through evaluations, such as AI benchmarks, yet small perturbations in evaluation pipelines can produce unstable scores and model rankings\. We recast benchmark reliability as a measurement problem and formalize it as a signal\-to\-noise ratio derived from a crossed random\-effects decomposition\. This framework yields a direct mapping between variance components and expected rank stability, linking theoretical reliability to observable leaderboard concordance\. Modern AI benchmarks operate in a high\-dimensional regime with many items and relatively few evaluated models, where classical item\-level reliability measures are ill\-posed\. We define a lower bound for benchmark item\-level reliability classically, and we further introduce a tractable proxy, $\\lambda^\\bigstar\_6$, that preserves the variance structure underlying reliability without modifying the estimand through sparsity or dimensionality reduction\. Across diverse benchmarks, we show that selecting items via $\\lambda^\\bigstar\_6$ produces smaller subsets that achieve higher ranking reliability than random subsampling at fixed evaluation budgets\. Finally, we analyze reliability under positive distribution shift\-\-as often observed in the current AI ecosystem\-\-by partitioning models into lower\- and higher\-performing cohorts\. We show that reliability is population\-dependent and frequently declines as between\-model variance shifts among stronger systems\. Our results establish a principled framework for diagnosing and improving benchmark reliability and demonstrate that ranking stability is neither intrinsic nor static, but a measurable and optimizable property of the benchmark–population pairing\.

## Improving Context\-Shift Robustness of Convolutional Networks via Context\-Regularized Cross\-Entropy

**Authors:** Jinen Setpal; Chaoyue Liu

**ID:** 150848 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eu0NxAFRN2>) | [PDF](<https://openreview.net/pdf?id=eu0NxAFRN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150848>)

Image classification models often encounter objects in diverse and unpredictable contexts at test time, which may differ substantially from those seen during training\. This phenomenon, termed \*context shift\*, exposes a key fragility in neural networks: when models rely on non\-causal contextual cues for prediction, shifts in context can lead to significant performance degradation\. In this paper, we propose a novel training framework to improve the robustness of convolutional neural networks under context shift\. Our approach leverages spatial feature attribution to guide models toward making predictions that rely less on contextual regions and more on object\-relevant features\. As a first step, we identify a theoretical limitation of existing feature attribution methods and introduce a new variant, \*ContrastiveCAMs\*, which produces more faithful attribution maps of model predictions\. Building on ContrastiveCAMs, we further propose \*Context\-Regularized Cross\-Entropy\* \(CR\-CE\), a modification of the standard cross\-entropy loss that regularizes the model’s attention by suppressing the influence of contextual regions, thereby improving robustness to context shift\. We evaluate the effectiveness of our approach on several medium\-to\-large scale datasets \(Waterbirds, Spawrious, ImageNet/ImageNet\-BG, Hard\-ImageNet\), and report consistent improvements in context\-shift robustness\.

## Taking the Road Less Scheduled with Adaptive Polyak Steps

**Authors:** Dimitris Oikonomou; Matthew Buchholz; Yuen\-Man Pun; Robert Gower; Nicolas Loizou

**ID:** 154698 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BgIhio9OtL>) | [PDF](<https://openreview.net/pdf?id=BgIhio9OtL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154698>)

Schedule\-Free SGD, proposed in \*The Road Less Scheduled\*, achieves optimal convergence rates without requiring the training horizon in advance, by replacing learning rate schedules with a principled form of iterate averaging\. However, the method still requires tuning a base learning rate whose optimal value depends on unknown problem constants\. In this work, we continue down this road by deriving Polyak\-type step sizes for Schedule\-Free SGD and Adam that compute the learning rate at each iteration from the sampled loss, gradient, and current iterates alone\. We first propose an oracle variant that uses per\-sample optimal function values and prove an $\\mathcal\{O\}\(1/\\sqrt\{t\}\)$ anytime last\-iterate rate for convex Lipschitz objectives\. We then remove the oracle requirement with a safeguarded variant that replaces the unknown optimal values with any available lower bound, achieving the same rate up to a neighborhood that vanishes under interpolation\. Both step sizes reduce to existing Polyak rules for standard SGD when momentum is set to zero, unifying standard and schedule\-free Polyak methods\. Numerical experiments on language modeling, including pretraining and distillation, show that the proposed methods match or surpass tuned Schedule\-Free baselines while offering greater robustness to hyperparameter choices\.

## Evaluating Compositional Generalization in Transformers: The Role of Composition Equivalence and Module Coverage

**Authors:** Purva Pruthi; Andrew Yuan; Alexander D&amp;amp;\#x27;Amour; David Jensen

**ID:** 139422 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RdGxXfd2x2>) | [PDF](<https://openreview.net/pdf?id=RdGxXfd2x2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139422>)

Compositional generalization is an important form of out\-of\-distribution generalization, defined as the ability to train on some combinations of modules \(e\.g\., functions such as sort , filter \) and then generalize to unseen combinations\. Despite substantial empirical work evaluating compositional generalization in transformers, findings have been inconsistent because evaluations were often conducted on a limited set of train\-test splits, defined in an ad hoc manner\. Through a systematic evaluation, we identify two key aspects of the train\-test distribution that strongly affect performance: composition equivalence and module coverage \. We show that the apparent performance of direct models \(trained only on final outputs\) results primarily from exploiting composition equivalences—different sequences of modules that reduce to identical end\-to\-end functions\. When benchmarks eliminate these equivalences, performance drops significantly, showing their inability to generalize to compositions of known modules that produce novel end\-to\-end functions\. We further demonstrate that performance degrades monotonically as module coverage shifts increase—when modules appear in different contexts between train and test—affecting both direct and step\-by\-step models \(trained on intermediate and final outputs\)\. These findings have concrete implications for benchmark design: benchmarks that include compositional equivalences can lead to significant overestimation of the generalization abilities of direct models, and benchmarks that include both module coverage violations and compositional equivalences can exacerbate shortcut learning\. We further demonstrate the effect of compositional equivalence on the generalization performance of the pre\-trained model Llama3\-8B on the code\-output prediction task in the coding benchmark LiveCodeBench and discuss its real\-world implications\.

## Fault Tolerant Coresets

**Authors:** Milind Prabhu; Chris Schwiegelshohn; Sudarshan Shyam

**ID:** 153584 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKronbQMtE>) | [PDF](<https://openreview.net/pdf?id=KKronbQMtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153584>)

Coresets are widely used to compress large datasets into small weighted summaries\. We mainly focus on the $k$\-means objective where the cost is defined to be the sum of squared distances of every point to its closest center\. A coreset approximately preserves the cost of every candidate set of $k$ centers up to a small $\(1\\pm \\varepsilon\)$ multiplicative error\.  By far the most flexible and powerful technique in this line of work is sensitivity sampling, where we pick points proportionate to their highest relative cost contribution in any solution\.  In general, the transmission and storage of these coresets are assumed to be reliable and always keep the coreset intact, without accounting for the possibility of corruptions\. This raises a basic question: To what extent can coresets be made fault\-tolerant? We study an adversarial fault model in which up to $f$ points of the coreset may be arbitrarily corrupted, including their weights, and the goal is to recover a valid coreset from the corrupted summary\.  Our main result shows that sensitivity sampling yields fault\-tolerant coresets of size $O\(f\\cdot k/\\varepsilon \+ m\)$, where $m$ is the size of a non\-fault\-tolerant coreset computed via sensitivity sampling\.  This result is also optimal in that any fault\-tolerant $k$\-means coreset must have size $\\Omega\(f \\cdot k/\\varepsilon\)$\. The decoding algorithm computing a sanitized coreset from a corrupted one is efficient and we demonstrate practical viability via our experiments\.

## Ensemble Selective Classification

**Authors:** Sinian Zhang; Chongwei Chen; Guanchen Li; Ju Sun

**ID:** 152721 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qqq3JkX68b>) | [PDF](<https://openreview.net/pdf?id=Qqq3JkX68b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152721>)

Selective classification \(SC\) improves model reliability by allowing a classifier to abstain on low\-confidence inputs\. In the practical post\-hoc setting, where the base classifier is fixed and often accessed as a black box, many confidence scores have been proposed, yet no single score is consistently best across models, datasets, and deployment shifts\. We address this limitation by proposing, to our knowledge, the first ensemble framework for post\-hoc SC, which learns to combine a diverse set of existing confidence scores using a small labeled calibration set drawn from the deployment distribution\. We cast this problem as learning to separate correct from incorrect predictions of the base classifier, and train the ensemble selector with SoftRank\-AURC, a differentiable soft\-rank plug\-in objective for the area under the risk\-coverage curve \(AURC\), the standard evaluation metric for SC\. We also study hinge and SELE losses as surrogate training variants, and provide an oracle\-style guarantee showing that the SoftRank\-AURC ensemble is competitive with the best single transformed base score in hindsight\. Across 15 image and NLP classification tasks, with additional LLM multiple\-choice experiments, the proposed method is consistently strong and often outperforms the best individual score, particularly under distribution shift, establishing ensemble post\-hoc SC as a simple and effective way to improve reliability without retraining the base classifier\.

## Stop Mechanizing Reform Heuristics as Scientific Quality Filters in AI Review

**Authors:** Jessica Hullman

**ID:** 140066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=StsCjqI2vv>) | [PDF](<https://openreview.net/pdf?id=StsCjqI2vv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140066>)

AI\-driven review is poised to structure which science gets attention\. By implementing checks for reproducibility, robustness, preregistration, claim scope, and other proxies, machine learning research is institutionalizing metascientific filters on scientific production\.  This position paper argues that mechanizing reform heuristics whose theoretical grounding remains contested or incomplete is counterproductive to scientific progress\. AI review papers should be evaluated as proposed decision policies that shape future research\. However, currently the emerging literature blurs the line between integrity filtering, based on necessary but insufficient signals of validity like reproducibility of stated results or lack of fake citations, and epistemic filtering, which uses machine\-detectable signals to judge scientific quality\. Drawing on debates in metascience, we show that proposed filters\-\-including replicability, multiverse robustness, and preregistration of analysis surfaces\-\-are insufficiently justified as general indicators of scientific value\. We argue that human\-in\-the\-loop review fails to resolve the problem, because automated signals shape attention and create incentives upstream\. Instead, the field must move toward more rigorous motivation of signal\-to\-decision pipelines, including explicit specification of target constructs, linking assumptions, decision uses, failure modes, and incentive effects\.

## CFC26: Building Evaluations for Deployment in Sonar\-Based Fish Counting

**Authors:** Madison Van Horn; Suzanne Stathatos; Sevan Brodjian; Justin Kay; Kai Van Brunt; Erik Young; Sara Beery; Pietro Perona; Michael Hobley

**ID:** 139843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15IDKXrEp8>) | [PDF](<https://openreview.net/pdf?id=15IDKXrEp8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139843>)

Accurate counts of fish populations are essential for monitoring ecosystems and making decisions about conservation, harvest limits, and river management\. In many field deployments, these counts are obtained from sonar videos that experts must inspect manually, making large\-scale monitoring slow, expensive, and difficult to reproduce\. Automated counting systems have been proposed as a scalable alternative, but so far this promise has been difficult to realize in deployment\. Developing evaluations that better reflect real world deployment conditions will close this gap, and drive improvements to counting methods that translate to reality\. To achieve this, we propose Caltech Fish Counting 2026 \(CFC26\), a new dataset with improved evaluation protocols that simulate deployment to current and new rivers, testing in\-distribution and out\-of\-distribution performance\. We expand the CFC22 dataset to eleven deployment locations across nine Pacific salmon river systems from Alaska to Northern California, capturing a broader geographical and ecological range of data\. We additionally introduce two new evaluation metrics for counting, nMNE and nMANE, that mirror the operational workflow that experts use and help surface errors that frame\-level detection metrics do not capture\. Using these metrics, we reveal previously\-concealed directional bias in upstream vs downstream counts, which would have direct and significant ecological implications if undetected\.

## Train on the Sphere, Deploy on the Hill: Closed\-Form\-Anchored Surrogates for Real\-Terrain Boundary\-Integral Equations

**Authors:** Stephane Zsoldos; Therice Morris; Varundev Sukhil; Benjamin Wetherfield

**ID:** 155758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=398YNNOPQt>) | [PDF](<https://openreview.net/pdf?id=398YNNOPQt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155758>)

The analysis of electrostatic induction effects on transmission lines in  real\-world power distribution systems requires inferring induced  surface charge density $\\sigma$ on overhead\-line corridors at deployment scale, where dense $\\mathcal\{O\}\(N^3\)$ boundary\-element solvers for the underlying Poisson boundary integral equation \(BIE\) are infeasible\. We present a recipe for training cheap PDE surrogates from canonical\-case closed forms \(flat ground, grounded sphere\) plus sparse dense\-solver fine\-tuning where the canonical case breaks like in our case study\.  The recipe also avoids a structural degeneracy between training operator  $A\_\\theta$ and solution $\\sigma$ in self\-supervised operator learning that  tends to lead to internally consistent but non\-physical solutions\.  The recipe combines a closed\-form local\-tangent\-plane baseline plus a small neural correction; a frozen analytic kernel; an $SE\(3\)$\- and scale\-invariant dimensionless feature stack derived from a $2$\-term identity $\\sigma = \-\(\\nabla\\phi\\cdot\\hat\{n\}\)/\(2\\pi\) \+ H\\phi/\(4\\pi\)$, exact on flat ground and the grounded sphere and supervised training against this identity\. An $8$\-parameter linear head recovers the analytic curvature coefficient $\+1/\(4\\pi\)$ from data to within $2\\%$; holds to $1\\%$ relative RMS in $\\sigma$ across $12$ orders of magnitude in source\-charge scale, where DeepONet, Set Transformer, and FNO baselines miss the analytic answer by orders of magnitude out\-of\-distribution; and matches direct\-collocation boundary\-element ground truth on a synthetic curved patch to $3\.8\\%$ relative RMS\.  A regime\-of\-validity result delineates when the canonical $2$\-term identity applies; outside it \(terrain curvature radius $\\kappa^\{\-1\}$ much greater than source clearance height $\|h\|$, the corridor regime\), we extend the recipe with sparse dense\-BEM\-target supervision\. On several industrial transmission\-line corridors with native triangulated meshes, the extended recipe attains $9\.2\\%$ median relative RMS to dense BEM on held\-out corridors, $20\\times$ tighter than the analytic 2\-term plug\-in\. Deployment: a $1\.7$kB MLP, seconds per corridor on a single CPU core\.

## Robust and Efficient Finetuning of Vision Foundation Models via Implicit Ensembling

**Authors:** Masih Aminbeidokhti; Heitor Medeiros; Eric Granger; Marco Pedersoli

**ID:** 154510 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D3CvENdsfQ>) | [PDF](<https://openreview.net/pdf?id=D3CvENdsfQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154510>)

Robust finetuning of foundation models seeks to improve out\-of\-distribution \(OOD\) generalization during in\-distribution \(ID\) adaptation\. We revisit Mixout, a stochastic regularizer that intermittently replaces finetuned parameters with a reference anchor, and study its effectiveness for robust finetuning of vision foundation models\. We reinterpret Mixout as a single\-run, weight\-sharing implicit ensemble and analyze its expected OOD error through a bias–variance–covariance–locality \(BVCL\) lens\. This perspective reveals three key factors that govern the ID–OOD trade\-off: the choice of masking anchor, the mask resampling frequency, and mask sparsity\. Guided by this analysis, we propose GMixout, which generalizes Mixout in three ways\. First, it explicitly controls the masking period through a resampling\-frequency hyperparameter\. Second, it replaces the fixed pretrained anchor with an exponential moving average snapshot that adapts throughout training\. Third, it uses sparse kernels to update only a small subset of parameters at each iteration, introducing no inference\-time overhead and enabling large\-model finetuning on consumer\-grade GPUs\. Experiments across five vision benchmarks show that GMixout consistently outperforms Mixout, Model Soups, and strong parameter\-efficient finetuning baselines under both covariate shift and class imbalance\.

## Learning Recoverable Neural Networks against Weight Corruption via Simple Zero\-Sum Projection

**Authors:** Sanggeon Yun; Ryozo Masukawa; SungHeon Jeong; Hyunwoo Oh; Nathaniel D Bastian; Mohsen Imani

**ID:** 155717 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3RaBUzol9c>) | [PDF](<https://openreview.net/pdf?id=3RaBUzol9c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155717>)

Deep neural networks are highly vulnerable to bit corruption in stored weights, whether from naturally occurring memory faults or deliberate fault\-injection attacks\. Existing defenses remain fundamentally limited: fault\-tolerance methods degrade under cumulative corruption and remain vulnerable to strong white\-box attacks, while ECC\-based recovery methods are often tied to specific precisions or architectures and expose concentrated vulnerable surfaces\. We propose a simple training\-based recovery framework that endows model weights with recoverable structure through block\-wise zero\-sum constraints enforced by differentiable projection\. The resulting method incurs no parameter\-space overhead and generalizes naturally across architectures and numerical precisions\. We further develop adaptive adversarial bit\-flip attacks tailored to recovery\-based defenses, covering both our method and prior ECC\-based approaches\. Across diverse architectures, precisions, datasets, and threat models, our method consistently delivers strong robustness and recoverability while preserving clean performance\.

## Prudent\-Banker: No Extra Fees for Baseline Safety in Adversarial Bandits With and Without Delays

**Authors:** Ting Hu; Luanda Cai; Emmanouil\-Vasileios Vlatakis\-Gkaragkounis

**ID:** 149057 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tCIHEVndsO>) | [PDF](<https://openreview.net/pdf?id=tCIHEVndsO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149057>)

We study adversarial multi\-armed bandits with and without delayed feedback under a \*\*safety\-aware\*\* goal: achieving minimax\-optimal worst\-case regret while keeping nearly \*\*constant\*\* regret relative to a designated "safe" baseline policy\. Existing approaches can balance this trade\-off with immediate feedback for smooth comparators, but arbitrary delays can mistime transitions between \*\*conservatism\*\* and \*\*exploration\*\*, endangering the safety guarantee\.  To bridge this gap, we propose PRUDENT\-BANKER, a novel algorithm that combines a delay\-adapted variant of Online Mirror Descent with a modified phased\-aggression mechanism\. Its key technical contribution is a delay\-calibrated restart threshold that rigorously accounts for the worst\-case distortion induced by unobserved feedback and reliably detects comparator suboptimality\. We also establish new lower bounds for safety\-constrained adversarial delayed bandits, showing that the regret guarantees of PRUDENT\-BANKER are unimprovable, up to logarithmic factors, under the baseline\-safety requirement\.   To the best of our knowledge, PRUDENT\-BANKER is the first algorithm to achieve the optimal safety–robustness trade\-off: pseudo\-regret $\\tilde\{O\}\(\\sqrt\{T\}\+\\sqrt\{D\}\)$ together with $\\tilde\{O\}\(1\)$ regret against the safe comparator, both with and without delays\. Experiments across diverse delay distributions show that, unlike standard delay\-robust baselines, PRUDENT\-BANKER effectively balances safety and learning\.

## Theory on Attention Dynamics for Out\-of\-Distribution In\-Context Learning

**Authors:** Junze Deng; Daouda Sow; Sen Lin; Yingbin Liang

**ID:** 155001 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9JWBP6GQk7>) | [PDF](<https://openreview.net/pdf?id=9JWBP6GQk7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155001>)

Transformers have demonstrated remarkable in\-context learning \(ICL\) capabilities, enabling them to perform new tasks without additional fine\-tuning\. However, their performance often deteriorates when encountering out\-of\-distribution \(OOD\) inputs that deviate from the training distribution, and the underlying theory remains poorly understood\. To fill this gap, we characterize the OOD error under the input distribution shift through the interplay between the dynamics of the so\-called $\\alpha$\-type and $\\beta$\-type attention weights, which represent the transformer’s confidence in identifying the correct and incorrect features, respectively\. Our results indicate that the OOD error for each feature depends on all pairwise interactions between the training features and OOD features, and under certain cases the transformer performs no better than random guessing\. To improve the OOD generalization performance, we next investigate the impact of model finetuning with the OOD data, and particularly, characterize the model forgetting performance on the source domain\. Interestingly, the performance on the source domain may not always degrade after finetuning, which highly depends on the nature of the feature shift: finetuning on OOD domain keeps enhancing the confidence of identifying correct features from the original distribution, while the interference from other incorrect features may either increase or decrease\. Extensive experiments on both synthetic and real data are conducted to corroborate the theoretical insights\.

## On Lipschitz Explosion in Deep Neural Networks with Normalization: Consequences for Optimization and Robustness

**Authors:** Ashkan Soleymani; Reyhaneh Hosseinpourkhoshkbari; Hadi Daneshmand; Patrick Jaillet

**ID:** 151236 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=btvnW0Xn5i>) | [PDF](<https://openreview.net/pdf?id=btvnW0Xn5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151236>)

The Lipschitz constant of a neural network is a basic stability quantity appearing in optimization guarantees, generalization bounds, and robustness certificates\. Deep networks naturally admit two such notions, \\emph\{input Lipschitzness\}, measuring sensitivity to data perturbations, and \\emph\{parameter Lipschitzness\}, measuring sensitivity to weight perturbations\. We prove that, for deep networks with normalization layers, with batch normalization as the canonical example, \\emph\{both\} Lipschitz constants can grow exponentially with depth and hence with parameter dimension, even under strong per\-layer norm control such as $\\\\\|W\_\\ell\\\\\|\_2\\le 1$, and already for linear activations\. Thus, a mechanism widely used to stabilize training can create severe worst\-case instabilities that are invisible from layerwise norm bounds alone\. Parameter\-Lipschitz explosion turns Lipschitz\-dependent nonsmooth optimization guarantees into exponential\-in\-dimension bounds for deep normalized networks, while input\-Lipschitz explosion makes worst\-case Lipschitz\-based generalization and robustness certificates vacuous\. The latter also yields a concrete rank\-separation mechanism for adversarial vulnerability\. The theory predicts that perturbations introducing new singular directions should be amplified much more strongly than equal\-energy perturbations that remain within the input's original singular subspace\. Experiments on MNIST, Fashion\-MNIST, and CIFAR\-10 support this prediction, showing that rank\-creating perturbations cause substantially sharper drops in accuracy, confidence, and margins than same\-subspace perturbations\.

## Reliable Abstention under Adversarial Injections: Lower Bounds and New Upper Bounds

**Authors:** Ezra Edelman; Surbhi Goel

**ID:** 151312 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bQuKG6tVNk>) | [PDF](<https://openreview.net/pdf?id=bQuKG6tVNk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151312>)

We study online learning in the adversarial injection model introduced by \[Goel et al\. 2024\], where a stream of labeled examples is predominantly drawn i\.i\.d\.\\ from an unknown distribution $\\mathcal\{D\}$, but may be interspersed with adversarially chosen instances without the learner knowing which rounds are adversarial\. Crucially, labels are always consistent with a fixed target concept \(the clean\-label setting\)\. The learner is additionally allowed to abstain from predicting, and the total error counts the mistakes whenever the learner decides to predict and incorrect abstentions when it abstains on i\.i\.d\.\\ rounds\. Perhaps surprisingly, prior work shows that oracle access to the underlying distribution yields $O\(d^2 \\log T\)$ combined error for VC dimension $d$, while distribution\-agnostic algorithms achieve only $\\tilde\{O\}\(\\sqrt\{T\}\)$ for restricted classes, leaving open whether this gap is fundamental\.  We resolve this question by proving a matching $\\Omega\(\\sqrt\{T\}\)$ lower bound for VC dimension $1$, establishing a sharp separation between the two information regimes\. On the algorithmic side, we introduce a potential\-based framework driven by \\emph\{robust witnesses\}, small subsets of labeled examples that certify predictions while remaining resilient to adversarial contamination\. We instantiate this framework using two combinatorial dimensions: \(1\) \\emph\{inference dimension\}, yielding combined error $\\tilde\{O\}\(T^\{1\-1/k\}\)$ for classes of inference dimension $k$, and \(2\) \\emph\{certificate dimension\}, a new relaxation we introduce\. As an application, we show that halfspaces in $\\mathbb\{R\}^2$ have certificate dimension $3$, obtaining the first distribution\-agnostic bound of $\\tilde\{O\}\(T^\{2/3\}\)$ for this class\.

## Tokenizer Choice Shapes Generalization in State\-Centric Learning for Planning

**Authors:** Vishal Pallagani; Nitin Gupta; John A Aydin; Biplav Srivastava

**ID:** 150812 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fBjXy542NQ>) | [PDF](<https://openreview.net/pdf?id=fBjXy542NQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150812>)

Planning has traditionally been addressed with symbolic search guided by domain models and heuristics\. Learning offers a complementary way to exploit structure shared across related problems rather than solving each instance from scratch, making generalization to unseen instances a central challenge for learned planners\. Recent work has explored planning mainly through action\-centric models that predict actions or full plans from problem descriptions\. A parallel line of work instead learns goal\-conditioned transition models over states \(state\-centric learning\) and recovers actions by matching predicted successor states to symbolic successors\. In this setting, however, prior work has relied mainly on Weisfeiler\-Leman \(WL\) representations, leaving the role of tokenizer choice unclear\. We present a controlled study of tokenizer choice in state\-centric learned planning, comparing WL, shortest\-path, GraphBPE, SimHash, and a deterministic baseline within a common pipeline\. Across varied benchmark domains and multiple planner configurations, WL performs well overall, but no tokenizer is best everywhere: the leading representation changes by domain, and tokenizer differences are larger on extrapolation rather than on interpolation tasks\. Across the studied configurations, tokenizer choice is the dominant factor in held\-out generalization: it explains 57% of performance variance, more than predictor architecture or any other pipeline factor, and its effect is substantially amplified on out\-of\-distribution problems relative to in\-distribution ones\. We conclude that representation choice is a strong determinant of generalization in state\-centric learned planning and that tokenizer choice is a first\-order modeling decision rather than a fixed preprocessing step\. Code: https://tinyurl\.com/4hre257u

## Do More Modalities Always Help? A Geometric Perspective on Missing\-Modality Robustness

**Authors:** Songyuan Sui; Zhen Tan; Mohan Zhang; Rana M Khan; Xia Hu; Tianlong Chen

**ID:** 153401 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Le36VrocGr>) | [PDF](<https://openreview.net/pdf?id=Le36VrocGr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153401>)

Missing modality remains a longstanding challenge in multimodal learning\. Existing methods address this issue through modality recovery or adaptive strategies\. However, they overlook models' internal cross\-modal dependencies formed during multimodal training, which later impair robustness\. We systematically characterize a counterintuitive deployment\-time failure mode: models trained on full modalities can underperform unimodal models when one modality is missing at inference time\. This pattern appears across diverse architectures, such as fusion models, CLIP\-style two\-tower models, and vision\-language models\. We show that such degradation is closely associated with learned cross\-modal dependencies in the principal parameter subspaces\. Multimodal training induces structured rotations of these subspaces, particularly in cross\-modal interaction layers\. These rotations are associated with reduced task\-aligned margins and larger task\-aware representation harm under missing\-modality inputs\. We propose Geodesic Unlearning \(GU\), a lightweight parameter\-editing method that leverages Grassmannian subspace geometry for structured subspace correction to improve missing\-modality robustness\. It decomposes layer weights into principal and residual components, treats the principal subspace as a point on the Grassmannian, and rotates it toward a unimodal reference along a geodesic path\. Experiments across architectures and datasets show that GU improves performance under missing\-modality inference while preserving full\-modality accuracy, outperforming strong missing\-modality robustness baselines\. These findings support a geometric view of deployment\-time missing\-modality degradation and suggest localized subspace editing as a practical route for robustness correction\.

## A Margin Perspective on LoRA: Robustness to Catastrophic Forgetting and Adapter Merging \(MaLoRA\)

**Authors:** Ziqing Xu; Hancheng Min; Lachlan MacDonald; Salma Tarmoun; Enrique Mallada; Weijie Su; Rene Vidal

**ID:** 155103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8PbIL0Lq7v>) | [PDF](<https://openreview.net/pdf?id=8PbIL0Lq7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155103>)

Low\-rank adaptation \(LoRA\) is the de facto method for parameter\-efficient fine\-tuning of large neural networks, achieving strong task adaptation with minimal trainable parameters and low optimization cost\. Beyond this efficiency, practitioners have observed two striking properties: \*robustness to catastrophic forgetting\* and the ability to \*merge independently trained adapters\* into a single model that performs competitively across multiple tasks\. These properties are central to continual and multi\-task learning, yet remain poorly understood\. In this work, we provide a theoretical explanation through a unified \*margin\-based perspective\*\. We analyze LoRA in multiclass linear classification under a near\-orthogonal task regime with $l\_2$\-regularization, and characterize the optimal LoRA adapter across regularization regimes\. Our analysis shows that, in an intermediate regime of regularization parameters, the optimal adapter aligns with the \*max\-margin solution\* on the fine\-tuning data\. Building on this characterization, we derive two key consequences\. First, we obtain closed\-form expressions for the margins on pre\-training and fine\-tuning data, revealing a precise margin trade\-off: the regularization parameter controls the balance between retention and adaptation\. Second, we analyze adapter merging, proving that merged models achieve positive margin on each task and deriving optimal mixing coefficients that balance margins across tasks and maximize the margin over their union\. These results lead to a simple, training\-free merging rule, which we term \*margin\-based LoRA merging\* \(MaLoRA\)\. Experiments on modern architectures and real datasets validate our theoretical predictions, showing that MaLoRA matches or outperforms several adapter\-merging baselines across a range of vision and language classification tasks\.

## RPP: A Certified Poisoned\-Sample Detection Framework for Backdoor Attacks under Dataset Imbalance

**Authors:** Miao Lin; Feng Yu; Rui Ning; Lusi Li; Jiawei Chen; Qian Lou; Mengxin Zheng; Chunsheng Xin; Hongyi Wu

**ID:** 156750 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156750>)

Deep neural networks are highly susceptible to backdoor attacks, yet most defense methods to date rely on balanced data, overlooking the pervasive class imbalance in real\-world scenarios that can amplify backdoor threats\. This paper presents the first in\-depth investigation of how the dataset imbalance amplifies backdoor vulnerability, showing that \(i\) the imbalance induces a majority\-class bias that increases susceptibility and \(ii\) conventional defenses degrade significantly as the imbalance grows\. To address this, we propose Randomized Probability Perturbation \(RPP\), a certified poisoned\-sample detection framework that operates in a black\-box setting using only model output probabilities\. For any inspected sample, RPP determines whether the input has been backdoor\-manipulated, while offering provable within\-domain detectability guarantees and a probabilistic upper bound on the false positive rate\. Extensive experiments on five benchmarks \(MNIST, SVHN, CIFAR\-10, TinyImageNet and ImageNet10\) covering 10 backdoor attacks and 12 baseline defenses show that RPP achieves significantly higher detection accuracy than state\-of\-the\-art defenses, particularly under dataset imbalance\. RPP establishes a theoretical and practical foundation for defending against backdoor attacks in real\-world environments with imbalanced data\.

## Weighted Conformal Clustering

**Authors:** Anirban Nath; YoonHaeng Hur; Genevera Allen

**ID:** 150203 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jxX0Xpi5Wc>) | [PDF](<https://openreview.net/pdf?id=jxX0Xpi5Wc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150203>)

Clustering is a central tool for discovering latent structure in unlabeled data, yet modern clustering pipelines often end with a hard assignment of each observation to a cluster without rigorous measures of assignment uncertainty\. We propose a novel weighted conformal approach for constructing confidence sets for cluster labels\. The key difficulty is that the labels available for calibration are not observed ground\-truth labels, but synthetic labels produced by a data\-dependent clustering algorithm\. Our method develops a conformal inference algorithm that corrects the resulting mismatch with the latent target labels through weights by formulating conformal clustering as a conditional label\-distribution shift problem\. We first derive an oracle procedure that attains finite\-sample marginal coverage and then develop a computationally tractable and implementable version using estimated conditional label probabilities and augmented calibration\. We show that the coverage of the estimated\-weight procedure depends on the estimator, giving an explicit bound on the loss relative to the nominal level\. Empirical studies beyond the mixture\-model settings, explored by the recently developed stochastic split conformal clustering procedure, demonstrate that the proposed weighted approach offers improvements in non\-linear and high\-dimensional clustering applications in terms of set size\.

## Dual\-Granularity Learning for Regression with Continuous Noisy Labels

**Authors:** Hui GUO; Boyu Wang; Grace Yi

**ID:** 153289 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MNQLeuQSPM>) | [PDF](<https://openreview.net/pdf?id=MNQLeuQSPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153289>)

Learning with noisy labels has been extensively studied for classification, yet its regression counterpart remains relatively underexplored\. Unlike classification, regression involves continuous\-valued targets where label noise exhibits heterogeneous magnitudes across instances, which poses conflicting requirements on the model: correcting small\-to\-moderate deviations requires sensitivity to label values for instance\-level refinement, whereas large deviations caused by corrupted or outlying annotations render exact label values unreliable, necessitating reduced reliance on exact labels and instead leveraging ordinal structure among samples\. These requirements call for methods that capture both global structure and sample\-specific deviations in a unified manner\.   To this end, we propose GRAIN, a dual\-granularity framework for robust noisy regression\. At the fine\-grained level, we derive an explicit residual learning mechanism from a robust loss formulation, introducing instance\-specific auxiliary variables to decouple label noise from predictive signals\. At the coarse\-grained level, we introduce a binning\-based contrastive regularization that enforces an order\-preserving feature structure aligned with label proximity, addressing noise beyond the capacity of local residual refinement\. The two levels are coupled via a histogram\-based bridging mechanism that enables bidirectional information flow: coarse\-grained structural guidance establishes a well\-ordered feature space that anchors residual learning, while fine\-grained residual refinement corrects instance\-level deviations that structural regularization alone cannot resolve\. Experimental results show that GRAIN consistently improves robustness and generalization under diverse noise conditions\.

## Cross\-Distribution Generalization in Longitudinal Behavioral Data Through Frozen Coherence Constraints

**Authors:** Ahatsham Hayat; Mohammad Hasan

**ID:** 150347 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ioWVlKwBW2>) | [PDF](<https://openreview.net/pdf?id=ioWVlKwBW2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150347>)

Cross\-distribution generalization in longitudinal behavioral data remains a persistent obstacle\. Models trained on one cohort degrade on new populations, and prior approaches operating through feature\-distribution alignment or model\-capacity scaling have not substantially improved cross\-distribution performance\. We diagnose the limitation as insufficient representational constraints during training\. We propose holding the language model frozen, so that the coherence criterion is defined by its pre\-trained language prior and cannot shift during training\. We introduce PRISM, a frozen\-backbone framework that decomposes each behavioral trajectory into temporal, spectral, and semantic streams and integrates them through directed cross\-attention with instance\-specific gating\. Training uses a dual\-path objective combining discriminative and coherence constraints on a shared representation\. On GLOBEM, a widely used cross\-cohort benchmark for behavioral health prediction, PRISM achieves 79\.93\\% out\-of\-distribution accuracy, 27\.13 points above the previous best, with an in\-distribution to out\-of\-distribution accuracy gap of 1\.24 points\. PRISM also achieves the highest OOD accuracy on three additional datasets \(LifeSnaps anxiety, MFAFY engagement, CrossCheck schizophrenia symptoms\), with consistently smaller ID\-to\-OOD gaps than fine\-tuned VLM baselines\. Ablations identify the frozen coherence constraint as the component responsible for the distribution\-invariance pattern\.

## RustMizan: A Compilable, Contamination\-Aware Benchmarking Framework for Rust Vulnerabilities

**Authors:** Tarek Elsayed; Shiping Yang; Eunsong Koh; Sanika Goyal; Vincent Huang; Paul Ngo; Nathan Young; Mohammad Omidvar Tehrani; Alvyn Kang; Arnell Kang; Zeyu Chen; Angelica Moreira; Xuan Feng; Angel Chang; Nick Sumner; Steve Ko

**ID:** 139253 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=buiRmXBL93>) | [PDF](<https://openreview.net/pdf?id=buiRmXBL93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139253>)

LLM agents are increasingly applied to vulnerability analysis, but existing benchmarks have not kept pace\. They typically rely on small non\-compilable snippets, focus on binary classification \(vulnerable or not\), and do not account for the risk that publicly\-released datasets are part of model training corpora\. We introduce RustMizan, a benchmarking framework for Rust vulnerability analysis that addresses these gaps\. RustMizan contains compilable code variants at the crate, file, and function levels, with annotations for binary vulnerability detection, CWE classification, and function\- and line\-level localization\. A paired mutation framework produces semantics\-preserving code mutants for contamination testing and robustness probing\. Across four frontier models in an agentic setup with command\-line access, binary classification sits in the 56\-\-65\\% range, but line localization F1 stays near 20\\%, and adversarial cues drop line F1 by about 27\\%\.

## A Theory of Adversary\-Directed Online Learning

**Authors:** Steve Hanneke; Amirreza Shaeiri

**ID:** 154177 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fg9zCYfQRq>) | [PDF](<https://openreview.net/pdf?id=Fg9zCYfQRq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154177>)

We introduce the problem of \*adversary\-directed\* online learning, in which the learner is aware of the set of instances in advance, and an adversary adaptively determines their ordering during the learning process\. Surprisingly, this formulation has not been previously studied, perhaps due to its conceptual resemblance to the traditional adversarial online learning problem, despite related models, including the transductive, self\-directed, and best\-order, having been extensively explored\. However, by utilizing novel techniques, we demonstrate that the landscape of adversary\-directed online learning significantly diverges from that of traditional adversarial online learning\. In the realizable setting, we establish a trichotomy of possible rates of the minimax number of mistakes\. Specifically, for a learning horizon $\\operatorname\{T\}$, the minimax number of mistakes can only be of the orders $\\Theta\(\\operatorname\{T\}\)$, $\\Theta\(\\log \\operatorname\{T\}\)$, or $\\Theta\(1\)$\. To prove this, we introduce a new combinatorial complexity parameter, termed the perfect Littlestone dimension, whose finiteness distinguishes the $\\Theta\(\\log \\operatorname\{T\}\)$ rate from the $\\Theta\(\\operatorname\{T\}\)$ rate\. On the other hand, in the agnostic setting, we essentially show a dichotomy of possible rates of the minimax expected regret\. In particular, if the learner plays for $\\operatorname\{T\} \\in \\mathbb\{N\}$ rounds, its minimax expected regret can only be of the orders $\\Theta\(\\operatorname\{T\}\)$, or $\\widetilde\{\\Theta\}\(\\sqrt\{\\operatorname\{T\}\}\)$, which is also characterized by the finiteness of the perfect Littlestone dimension\. Technically, a key ingredient in the proof of our $\\mathcal\{O\}\(\\log \\operatorname\{T\}\)$ and $\\widetilde\{\\mathcal\{O\}\}\(\\sqrt\{\\operatorname\{T\}\}\)$ upper bounds is a novel online learning algorithm that leverages a new notion of shattering based on the perfect Littlestone dimension, which exploits the adaptive adversarial nature of the problem\.

## \[Re\] Boosting the Visual Interpretability of CLIP via Adversarial Fine\-Tuning

**Authors:** Anton Nuzhdin; Andrei Gruzitski; Balázs Egyed; Aleksandr Raudvee

**ID:** 157021 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uPXRBZfkYy>) | [PDF](<https://openreview.net/pdf?id=uPXRBZfkYy>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

This paper presents a reproducibility study of "Boosting the Visual Interpretability of CLIP via Adversarial Fine\-Tuning" by Gong et al\. \(2025\), published at ICLR 2025, which proposes an unsupervised adversarial fine\-tuning \(AFT\) method with norm regularisation to enhance the visual interpretability of CLIP's image encoder\. We attempt to reproduce the key claims regarding improved saliency map quality, increased concept alignment, transferability to out\-of\-distribution datasets, and the trade\-off with zero\-shot accuracy\. Beyond reproduction, we propose a saliency\-guided regularisation extension that introduces an Energy Pointing Game loss, directly supervising the spatial alignment of Simple Gradient saliency maps with target objects\. We evaluate our extension across a range of saliency\-loss weights and show that explicit saliency supervision substantially improves localisation metrics at a modest cost: the reduction in zero\-shot accuracy and adversarial robustness is small at the lowest saliency\-loss weight \($w\_s=0\.2$\) and moderate at the strongest setting \($w\_s=0\.6$\)\. We restructure the codebase for configurable, systematic experimentation\. Our reproduction code is available at https://github\.com/Andrei3223/Re\-Boosting\-CLIP\-Interpretability\.

