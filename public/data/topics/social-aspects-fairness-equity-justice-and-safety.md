# Social Aspects / Fairness, Equity, Justice and Safety

社会影响与可信人工智能 / 公平、公正与安全

167 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## The Attacker in the Mirror: Breaking Self\-Consistency in Safety via Anchored Bipolicy Self\-Play

**Authors:** Gabriele La Malfa; Emanuele La Malfa; Saar Cohen; Jie Zhang; Michael Luck; Michael Wooldridge; Elizabeth Black

**ID:** 151513 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a5qQCbrc2b>) | [PDF](<https://openreview.net/pdf?id=a5qQCbrc2b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151513>)

Self\-play red team is an established approach to improving AI safety in which different instances of the same model play attacker and defender roles in a zero\-sum game, i\.e\., where the attacker tries to jailbreak the defender; if self\-play converges to a Nash equilibrium, the model is guaranteed to respond safely within the settings of the game\. Although the parameter sharing enforced by the use of the same model for the two roles improves stability and performance, it introduces fundamental theoretical and architectural limitations\. We show that the set of Nash equilibria that can be reached corresponds to a broad class of behaviours that includes trivial always refuse strategies and oracle\-like defenders, thus limiting practical applicability\. We then show that when attacker and defender share and update the same base model, the dynamics collapse to self\-consistency, so that attacks do not enforce adversarial pressure on the defender\. In response, we propose Anchored Bipolicy Self\-Play, which trains distinct role\-specific LoRA adapters on top of a frozen base model, thereby maintaining stable optimisation while preserving adversarial pressure through explicit role separation\. In relation to standard self\-play, we show up to 100x greater parameter efficiency than fine\-tuning and consistent improvements in safety compared to self\-play fine\-tuned models\. We evaluate on Qwen2\.5\-\\\{3B, 7B,14B\\\}\-IT models across widely used safety benchmarks, showing improved robustness without loss of reasoning ability\. Cross\-play experiments further show that our attacker and defender models are superior to self\-play in terms of adversarial defence and safety\.

## Merging RLVR\-Trained Experts via Policy\-Shift\-Guided Spectral Alignment

**Authors:** Geeho Kim; MINSIK CHOI; Kyle Min; Young Geun Kim; Bohyung Han

**ID:** 149089 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=syr1SgeqUD>) | [PDF](<https://openreview.net/pdf?id=syr1SgeqUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149089>)

We propose Policy\-Shift\-Guided Spectral Alignment \(PSA\), a retraining\-free method for merging RLVR post\-trained language\-model experts by guiding spectral subspace selection with token\-level expert\-base policy shifts\. We first show that existing SFT\-oriented merging techniques under\-preserve the sparse, directional changes in next\-token probabilities that distinguish RLVR experts from the pretrained base\. To address this challenge, PSA scores calibration tokens by expert\-\-base probability difference under the same prefix, and converts probability\-shift\-weighted input activations into column weights\. These weights define a weighted SVD objective that prioritizes update directions active on high\-shift tokens\. After low\-rank truncation, PSA applies cross\-expert polar alignment to the truncated task\-vector bases and restores each expert's per\-layer Frobenius scale before aggregation\. Experiments on Qwen2\.5\-7B and Qwen3\-1\.7B across three RLVR tasks show that PSA consistently outperforms strong merging baselines while preserving expert\-level capabilities in a unified model\.

## Emergent Steering Beyond Endpoint Alignment in Chemical Reaction Models

**Authors:** Yili Shen; Kehan Guo; Haomin Zhuang; Xiangliang Zhang

**ID:** 152010 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBHlBbGMlQ>) | [PDF](<https://openreview.net/pdf?id=WBHlBbGMlQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152010>)

Machine learning models for chemical reaction prediction are usually evaluated by endpoint accuracy, but endpoint correctness alone does not reveal how a model represents chemical transformation or why it fails\. We introduce $\\textbf\{UniRxnAxis\}$, a unified forward\-\-retrosynthesis framework that models both tasks as direction\-conditioned endpoint redistribution in a shared latent space\. By aligning source states, transformed states, and encoded target endpoints, UniRxnAxis enables directional auditing of learned latent updates\. This shared latent geometry allows the learned displacement \(from the encoder source state $\(S\_0\)$ to the decoder\-facing transformed state $\(S\_1\)$\) to be decomposed into an endpoint\-parallel component and an endpoint\-orthogonal residual, which we call $\\textbf\{emergent steering\}$\. Our evaluation shows that emergent steering is functionally important: in retrosynthesis, it recovers most of the model's utility, remains effective under random, shuffled, and prototype controls, and directly affects which bond edits are promoted or suppressed\. The decomposition also supports a proxy taxonomy of model\-side failures, showing how reaction models can be audited beyond endpoint accuracy\.

## MedMisBench: Measuring Epistemic Resilience of LLMs Under Misleading Medical Context

**Authors:** Hongjian Zhou; Xinyu Zou; Jinge Wu; Sean Wu; Junchi Yu; Bradley M Segal; Tobias E Niebuhr; Sara Amro; Michael Petrus; Sheikh Momin; Alexandra M Pinto; Rachel Niesen; Laura S Wegner; Dhruv Darji; Jung M Koo; Joshua Fieggen; Kapil Narain; Mingde Zeng; Lei Clifton; Linda Shapiro; Fenglin Liu; David Clifton

**ID:** 139561 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWp0p0ZBCj>) | [PDF](<https://openreview.net/pdf?id=IWp0p0ZBCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139561>)

Large language models \(LLMs\) now reach expert\-level scores on medical licensing exams, encouraging the assumption that high scores imply safe medical judgment while patients increasingly use them for health advice\. We show this assumption is fragile: when misleading context is injected into questions that LLMs originally answer correctly, they abandon the correct answer\. We call the ability to maintain correct judgment under adversarial context epistemic resilience, and introduce MedMisBench to measure it\. MedMisBench contains 10,932 medical question items and 48,889 misleading context\-option pairs spanning medical reasoning, agentic capability, and patient\-journey evaluation\. Across 11 model configurations, mean accuracy falls from 71\.1% on original questions to 38\.0% under focused misleading context, with 51\.5% attack success\. The most damaging injections are formal, rule\-like fabrications: authority\-framed falsehoods reach 69\.5% attack success and exception\-poisoning claims reach 64\.1%\. A 14\-member clinical panel from 7 countries identified serious potential harm in 38\.2% of reviewed cases\. MedMisBench exposes a structural blind spot in LLM evaluation in medical settings: existing benchmarks measure what models know, but not whether they preserve correct medical judgment under misleading context\.

## Internal Safety Collapse in Frontier Large Language Models

**Authors:** Oscar W; Xiao Liu; Hanxun Huang; Yige Li; Xiang Zheng; Yifeng Gao; Cong Wang; Bo Li; Xingjun Ma; Yu\-Gang Jiang

**ID:** 148657 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w7YzZDE3Ei>) | [PDF](<https://openreview.net/pdf?id=w7YzZDE3Ei>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148657>)

This work identifies a critical failure mode in frontier large language models \(LLMs\), which we term \\textbf\{Internal Safety Collapse\} \(ISC\): \\textit\{under certain task conditions, models enter a state in which they continuously generate large volumes of harmful content while executing otherwise benign tasks\}\. To systematically study ISC, we introduce \\TVD\{\} \(Task, Validator, Data\), a framework that instantiates controlled workflows around domain tools, where valid completion requires filling harmful content as structured data\. We collect 53 representative workflows across 8 disciplines, from toxicity evaluation to molecular docking and pathogen genome analysis, showing that ISC reproduces across all eight disciplines\. In the worst case over three interaction settings, the four frontier LLMs average a \\textbf\{95\.3\\%\} safety\-failure rate\. Frontier LLMs with stronger task\-completion capability show higher unsafe\-completion rates: long\-horizon execution skill becomes a liability when workflow completion requires harmful content\. We even observe extremely severe harmful content closely resembling outputs from early\-generation, unaligned LLMs in 2023\. Despite substantial safety alignment efforts, frontier LLMs continue to retain inherently unsafe internal capabilities: alignment reshapes observable outputs but does not eliminate the underlying risk profile\. These findings underscore the need for caution when deploying LLMs in high\-stakes settings, including scientific pipelines and autonomous agents\. Complementary source code is provided at \\url\{https://anonymous\.4open\.science/r/NIPS\-ISC\-Code\-Share\-BE11\}\.

## On the Burden of Achieving Fairness in Conformal Prediction

**Authors:** Ziang Gao; Pengqi Liu; Archer Yang; Mouloud Belbahri; Jesse Cresswell; Masoud Asgharian

**ID:** 150399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJfigzq6s5>) | [PDF](<https://openreview.net/pdf?id=iJfigzq6s5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150399>)

Conformal prediction is often calibrated with a single pooled threshold, but this can hide cross\-group heterogeneity in score distributions and distort group\-wise coverage\. We study this phenomenon through the population score distributions underlying split conformal calibration\. First, we derive a conservation law and lower bound showing that pooled calibration incurs irreducible group\-wise coverage distortion at a scale set by cross\-group quantile heterogeneity\. Second, we demonstrate that the two leading fairness definitions for conformal prediction, Equalized Coverage and Equalized Set Size, are fundamentally in tension\. Third, we quantify the cost of moving between policies which treat groups separately or pool them\. Experiments on synthetic and real data confirm the same bidirectional trade\-off after finite\-sample calibration\. Our results show that, for the policy families studied here, calibration choice does not remove cross\-group heterogeneity; it determines whether the resulting distortion appears in the coverage or size dimension, providing a principled lens for analyzing fairness\-oriented calibration choices in practice\.

## Jailbreak susceptibility prediction and mitigation via the behavioral geometry of models

**Authors:** Hayden Helm; Xiaodong Liu; Weiwei Yang

**ID:** 153034 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OVDc1PePIP>) | [PDF](<https://openreview.net/pdf?id=OVDc1PePIP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153034>)

Evaluating and mitigating a generative system's susceptibility to jailbreak attacks is critical to its safe deployment\. Given the number of deployable systems, full per\-configuration evaluation and optimization is impractical\. In this paper, we formalize the behavioral geometry of a population of models that, by leveraging previously evaluated and defended models, supports both efficient susceptibility prediction and effective defense transfer across a population\. We apply the framework to 79 models spanning 24 providers and to 100 system configurations of a single base model\. Simple methods that use the behavioral geometry reach an AUPRC of $0\.94$ for susceptibility detection with $\\approx98\\%$ fewer probes relative to a full evaluation\. Using the behavioral geometry to select which model to transfer an optimized defense from outperforms same\-provider assignment \($\+2\\%$, $p = 0\.03$\) at no additional probe cost, with a set of three models sufficient to cover the population\. Results are robust to hyperparameter selection and judge\.

## Values Are Not Single Labels: Distributional Value Profiling Across Groups and Contexts

**Authors:** Woojin Kim; Jaeyoung Do

**ID:** 154170 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FjPXFq08zB>) | [PDF](<https://openreview.net/pdf?id=FjPXFq08zB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154170>)

Human values are not single labels, but distributions: they vary across individuals, contexts, and their relationships with other values\. Yet most alignment approaches still compress group\-level values into scalar scores or single representative targets, erasing within\-group diversity and missing how value expression shifts across situations\. We introduce Distributional Value Profiling, a framework for representing group\-level value expression as distributions over expression modes, intensity, and inter\-value relationships\. Using large\-scale text corpora spanning cultural, political, and religious groups, we construct profiles that capture not only which values are expressed, but also how they are expressed, how strongly they are emphasized, and how they relate to one another\. We then model context\-dependent shifts in these profiles using optimal transport, revealing structured redistributions of value expression across situations\. Finally, we show that these profiles are actionable: a lightweight profiling model generalizes to unseen value\-context combinations, and an activation\-based steering method guides model outputs toward target distributions at inference time, consistently outperforming baselines across diverse benchmarks\. Together, these results establish distributional value profiling as a concrete step toward pluralistic alignment, treating within\-group diversity not as noise to be averaged away, but as structure to be measured, predicted, and controlled\.

## Flow\-Guided Target\-Space Alignment via Path Consistency

**Authors:** Ruizhi Yuan; Zeqiu Yu; Wei Gao; Wei Chen; Xiwei Tang; Lu Tang

**ID:** 153377 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LpFmVPkbBW>) | [PDF](<https://openreview.net/pdf?id=LpFmVPkbBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153377>)

Many multimodal alignment problems require mapping a source modality into a fixed space defined by a target modality, where the target space is not merely an intermediate embedding but is used directly for downstream analysis\. In this setting, successful alignment should preserve both the global structure of the target distribution and the instance\-level correspondence observed in paired source\-\-target training data\. Existing objectives typically address only part of this goal: contrastive losses encourage relative similarity, distribution\-matching losses improve marginal agreement, and pointwise regression fits each source sample to its paired target without explicitly modeling target\-space path geometry\. We propose FlowAlign, a flow\-guided target\-space alignment method that repurposes conditional flow matching as a training\-time alignment signal rather than an inference\-time transport model\. FlowAlign uses the learned flow field to guide the alignment of source\-side representations with the fixed target space, encouraging them to preserve paired correspondence while remaining compatible with the global target\-space structure\. We further provide theoretical analysis showing how FlowAlign helps improve paired correspondence by controlling endpoint accuracy and capturing local target\-space geometry\. Experiments on a controlled synthetic task and paired single\-cell multiome benchmarks show that FlowAlign improves alignment performance while preserving target\-space structure for downstream analysis\.

## Multi\-Level Alignment Framework for Long\-Term Olfactory Neural Decoding

**Authors:** Xu Bohao; Jiawei Zeng; Gang Yu; Lei Wang; Xiaoying Tang; Duanduan Chen; Tianyi Qian

**ID:** 155170 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7mDyFYDgoM>) | [PDF](<https://openreview.net/pdf?id=7mDyFYDgoM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155170>)

Realizing stable neural decoding over extended periods remains a significant challenge, primarily because invariant task\-related neural dynamics are inextricably entangled with inherent signal non\-stationarity and the physical drift of electrode\-neuron interfaces\. This work introduces LNDN \(Long\-term Neural Decoding Network\), a hierarchical framework designed to decouple category\-specific neural dynamic manifolds from representational drift, sustaining decoding precision without periodic recalibration\. The proposed architecture addresses representational drift through an integrated tri\-level alignment strategy\. At the physical feature level, a decoupled representation and dynamic gating module isolates the physical identity of neurons from their transient states, adaptively filtering stochastic neural noise\. This is further strengthened at the decision level by a Mixture\-of\-Experts \(MoE\) architecture, which employs a parallel soft\-voting mechanism to suppress high variance induced by local representational distortions\. Finally, at the manifold level, Adaptive Batch Normalization \(AdaBN\) and latent contrastive learning, combined with second\-order correlation alignment, explicitly anchor the geometric consistency of the low\-dimensional neural manifold over a period of months\. Systematic evaluations on a longitudinal olfactory dataset, involving 9 mice performing a four\-odor decoding task, demonstrate the efficacy of this approach\. When trained exclusively on data from the initial four weeks, LNDN maintains an average accuracy of 83\.67\\% on completely unseen tests spanning the subsequent eight weeks, significantly outperforming mainstream domain adaptation and advanced neural decoding baselines\. This framework offers a scalable, "set\-and\-forget" solution for robust, long\-term invasive brain\-computer interface applications\.

## Ultra\-DPO: Reimagining LLM Alignment as a Semi\-Supervised Task

**Authors:** Li He; Jiaxian Guo; Yaqing Wang; Yue Yang; He Zhao; Stephen Wan; Dadong Wang; Lina Yao; Tongliang Liu

**ID:** 156029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=11tDIVzbAR>) | [PDF](<https://openreview.net/pdf?id=11tDIVzbAR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156029>)

Direct Preference Optimization \(DPO\) offers a streamlined one\-stage alternative to Reinforcement Learning from Human Feedback \(RLHF\)\. However, our theoretical analysis reveals a structural distinction between the two: DPO and RLHF optimize alignment on different data distributions with different supervision sources\. Specifically, DPO learns from ground\-truth human preferences but within the off\-policy support of an offline dataset, while RLHF optimizes on the on\-policy rollouts but learns from pseudo\-labels produced by a reward proxy\. This distinction explains how each method may fail: DPO alignment collapses when the policy drifts away from the offline dataset support, and RLHF alignment is biased due to the extrapolation error of the reward proxy on out\-of\-distribution rollouts\. Effective alignment requires avoiding both failure modes, which neither method can do alone\. We achieve this via a semi\-supervised alignment objective: ground\-truth preferences anchor alignment within the dataset support, and pseudo\-labels on online rollouts extend it beyond\. Applying DPO's reward reparameterization to this objective yields Ultra\-DPO, a one\-stage algorithm that augments direct human alignment with an online self\-alignment mechanism\. Across multiple benchmarks, Ultra\-DPO consistently outperforms DPO, RLHF, and online preference learning methods\.

## MUTE: Multi\-Level Alignment Uncoupling Against Talking\-Head Exploitation for Voice Protection

**Authors:** Donghyun Kim; Jin Hong; Seungmin Kim; Dain Kim; Junseok Kwon; Daeseon Choi

**ID:** 154813 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AlHi8J4Z6I>) | [PDF](<https://openreview.net/pdf?id=AlHi8J4Z6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154813>)

Talking\-head generation models, which synthesize realistic facial animations from audio, are increasingly vulnerable to misuse in multimodal deepfake scenarios\. Protecting such systems remains challenging, as talking\-head models fundamentally rely on precise audio–visual alignment, while effective audio protection methods remain largely underexplored\. In this work, we propose MUTE, an audio protection framework that uncouples the underlying audio–visual alignment through a multi\-level strategy\. Specifically, MUTE combines \(1\) Representation\-level Degradation, which perturbs temporal audio embeddings to degrade their representations, and \(2\) Alignment\-level Disruption, which directly perturbs cross\-modal attention to disrupt structural alignment\. To improve robustness, perturbations are constrained in the STFT domain to high\-energy regions, making them resistant to post\-processing and denoising\. An optional speaker\-level objective further mitigates potential bypass via TTS\-based resynthesis\. Extensive experiments demonstrate that MUTE consistently degrades lip synchronization across both white\-box and black\-box talking\-head models while preserving perceptual audio quality\. The proposed method remains effective under real\-world transformations and can be combined with image\-based approaches to provide stronger multimodal protection\.

## JailBound: A FOL\-Guided Jailbreak Evaluation Framework for Revealing Safety Boundaries of LLMs

**Authors:** Fazong Wu; Ming Yang; Xin Wang; Zhenyong Zhang; Xiaoming Wu

**ID:** 153236 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MkFYo6dOiL>) | [PDF](<https://openreview.net/pdf?id=MkFYo6dOiL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153236>)

Large language models \(LLMs\) are now deployed in a wide range of real\-world applications, making it important to evaluate how reliably they resist jailbreak attacks\. However, existing jailbreak evaluations mainly rely on manually collected prompts or discrete text\-space optimization, which limits their coverage and makes them difficult to extend to new threat settings\. We present $\\textbf\{JailBound\}$, a jailbreak evaluation framework that combines automated benchmark construction with intent\-preserving attack optimization in embedding space\. JailBound organizes evaluation instances with a hierarchical threat taxonomy spanning risk categories, application domains, and attack types, and uses this structure to generate meta\-attack prompts with a fine\-tuned meta\-attack generator\. It further formulates jailbreak evaluation as an embedding\-space attack optimization problem and uses a first\-order loss \(FOL\)\-guided dual\-branch search to jointly identify high\-value vulnerable regions and safety boundary states\. Under a unified evaluation protocol, we study 46 LLMs from 13 model families\. The results show that JailBound covers a broader range of risk settings than existing prompt\-based benchmarks, and that its optimized attacks transfer nontrivially across model families while supporting finer\-grained analysis of vulnerability patterns and safety boundary behavior\. $\\textcolor\{red\}\{\\text\{Warning: this paper includes examples that may be offensive or harmful\.\}\}$

## Mechanisms of Misgeneralization in Physical Sequence Modeling

**Authors:** Kento Nishi; Raphael Tang; Karun Kumar; Core Francisco Park; Hidenori Tanaka

**ID:** 149624 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oiza3wntR7>) | [PDF](<https://openreview.net/pdf?id=oiza3wntR7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149624>)

Generative sequence models are often trained to plan motion in physical domains, from robotics to mechanical simulations\. When constructing a dataset to train such a model, engineers may curate demonstrations to specify how trajectories should be distributed over a physical quantity like travel distance or mechanical energy\. For example, a roboticist building a maze navigation agent might choose demonstrations whose travel distances cover a fixed range uniformly, hoping to constrain the agent's expected power usage\. We find that standard deep learning can violate this intent: each generated trajectory can seem plausible on its own, but the aggregate distribution over the physical quantity is wrong\. We call this failure physical misgeneralization, and develop an account of its mechanism\. Using controlled synthetic tasks, we show that physical misgeneralization arises when local errors typical of the model class propagate through the physical measurement to shift the recovered distribution\. We estimate these errors with a data deviation kernel, and we use it to predict which physical quantities gain or lose mass in both our synthetic and more applied maze navigation and double\-pendulum motion tasks\. Finally, our mechanistic interpretation helps identify which mitigation strategies are structurally promising, and we use it to propose a kernel\-informed intervention\.

## Dialectics of Alignment: Harnessing Unsafe Knowledge for Dynamic Safety Routing

**Authors:** Maryam Hashemzadeh Barvarz; Jerry Huang; Minseon Kim; Marc\-Alexandre Côté; Sarath Chandar

**ID:** 153268 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MXIzIx8qk4>) | [PDF](<https://openreview.net/pdf?id=MXIzIx8qk4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153268>)

The prevailing paradigm in large language model \(LLM\) alignment operates via erasure, filtering unsafe data or training models to strictly refuse harmful prompts\. While effective at reducing immediate toxicity, this approach fundamentally constricts the model's epistemological scope, resulting in over\-cautious systems that output uninformative blanket refusals to sensitive yet benign queries\. In this work, we challenge the orthodoxy that unsafe data must be discarded\. We propose a dialectical approach to alignment, positing that unsafe data encodes rich, domain\-specific knowledge critical for nuanced, safe, and informative generation\. To operationalize this, we introduce SafeMoE , a Mixture\-of\-Experts \(MoE\) framework that isolates unsafe knowledge into domain\-specific Low\-Rank Adapters \(LoRA experts\) trained exclusively on harmful corpora\. To synthesize safety from these unsafe primitives, we train a lightweight gating network using a minimal, highly curated set of safe\-informative responses \(as few as 100 samples\)\. During inference, this router dynamically orchestrates the unsafe experts, effectively steering the generation trajectory to harness their deep domain knowledge while strictly enforcing safety constraints\. Extensive empirical evaluations across stringent safety benchmarks demonstrate that SafeMoE is not only safer, achieving over a 20\\% relative improvement in safe response rate \(more than a 15\\% absolute gain\), but also produces more informative responses when safety and harmfulness are of paramount concern\. Furthermore, the routing mechanism exhibits strong zero\-shot generalization to unseen domains and broader safety tasks without domain\-specific supervision\. Our findings suggest a paradigm shift in alignment: true safety requires not the masking of unsafe knowledge, but its controlled integration\.

## LiSA: Lifelong Safety Adaptation via Conservative Policy Induction

**Authors:** Minbeom Kim; Lesly Miculicich; Bhavana Dalvi Mishra; Mihir Parmar; Phillip Wallis; Bharath Chandrasekhar; Kyomin Jung; Tomas Pfister; Long T\. Le

**ID:** 152273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UJDUd0ySXi>) | [PDF](<https://openreview.net/pdf?id=UJDUd0ySXi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152273>)

As AI agents move from chat interfaces to systems that read private data, call tools, and execute multi\-step workflows, guardrails become a last line of defense against concrete deployment harms\. In these settings, guardrail failures are no longer merely answer\-quality errors: they can leak secrets, authorize unsafe actions, or block legitimate work\. The hardest failures are often contextual: whether an action is acceptable depends on local privacy norms, organizational policies, and user expectations that resist pre\-deployment specification\. This creates a practical gap: guardrails must adapt to their own operating environments, yet deployment feedback is typically limited to sparse, noisy user\-reported failures, and repeated fine\-tuning is often impractical\. To address this gap, we propose \*\*LiSA\*\* \(\*\*Li\*\*felong \*\*S\*\*afety \*\*A\*\*daptation\), a conservative policy induction framework that improves a fixed base guardrail through structured memory\. LiSA converts occasional failures into reusable policy abstractions so that sparse reports can generalize beyond individual cases, adds conflict\-aware local rules to prevent overgeneralization in mixed\-label contexts, and applies evidence\-aware confidence gating via a posterior lower bound, so that memory reuse scales with accumulated evidence rather than empirical accuracy alone\. Across PrivacyLens\+, ConFaide\+, and AgentHarm, LiSA consistently outperforms strong memory\-based baselines under sparse feedback, remains robust under noisy user feedback even at 20\\% label\-flip rates, and pushes the latency\-\-performance frontier beyond backbone model scaling\. Ultimately, LiSA offers a practical path to secure AI agents against the unpredictable long tail of real\-world edge risks\.

## Individuals Matter: Improving Deep Multi\-View Clustering via Explicit Single\-View Enhancement

**Authors:** Hanyang Li; Yanzheng Wang; Yaxin Hou; Zhengxing Jiao; Hao Chen; Yuheng Jia

**ID:** 148868 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uZrL0n4Dqc>) | [PDF](<https://openreview.net/pdf?id=uZrL0n4Dqc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148868>)

Although existing deep multi\-view clustering methods often achieve high performance, they predominantly focus on improving the fused representation while overlooking the enhancement of individual views, often resulting in stagnant or inconsistently improved view\-specific representations that limit the final fusion quality\. To address this, we propose Explicit single\-View Enhancement \(EVE\), a novel deep multi\-view clustering framework designed to explicitly optimize the clustering capability of each individual view\. Specifically, EVE employs an attention\-based module to generate a global consensus as a reliable anchor, which subsequently guides the refinement of individual views through two key components: feature\-level selective alignment and structural\-level neighborhood propagation\. Crucially, the enhanced single views will further boost the fused representation, and finally leading to a mutually reinforcing closed\-loop feedback process\. Our method is also naturally applicable to incomplete deep multi\-view clustering scenarios\. Extensive experiments on multiple benchmark datasets demonstrate that EVE consistently outperforms state\-of\-the\-art competitors, achieving substantial average improvements of \*\*5\.9%\*\* in ARI across all datasets\.\*\*The code is available in the Supplementary Material\*\*\.

## Not Too Generative, Not Too Discriminative: The Human Alignment Sweet Spot

**Authors:** Jorge Chang Ortega; Bastien Le Lan; Thomas Serre; Victor Boutin

**ID:** 151837 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XYmvp2YQdC>) | [PDF](<https://openreview.net/pdf?id=XYmvp2YQdC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151837>)

A central question in computational vision is whether human\-like visual representations are better explained by discriminative or generative learning\. Existing comparisons, however, often confound the learning objective with architecture, scale, and training data, leaving open whether the objective itself drives alignment\.  We address this confound using Joint Energy\-Based Models \(JEMs\), which interpolate continuously between discriminative and generative training within a fixed architecture\. By varying a single mixing coefficient, we isolate the effect of the learning objective and evaluate the resulting models across six human\-alignment benchmarks spanning perceptual similarity, gloss perception, human response uncertainty, robustness, shape–texture cue conflict, and diagnostic feature attribution\. Across this diverse suite, human alignment is consistently maximized at intermediate points of the generative–discriminative continuum, rather than at either endpoint\. Hybrid JEMs combine the categorical structure induced by discriminative learning with the sensitivity to input structure induced by generative learning, yielding more human\-like behavior across multiple levels of vision\.   These results suggest that the generative–discriminative dichotomy is the wrong axis for understanding human\-aligned vision: alignment emerges not from choosing one objective over the other, but from balancing both\.

## Strategic Evaluation: Incentivizing AI Capability Coverage with Private Benchmarks

**Authors:** Sang Truong; Serena Wang; Nick Haber; Sanmi Koyejo

**ID:** 139431 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RDooecvZ8l>) | [PDF](<https://openreview.net/pdf?id=RDooecvZ8l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139431>)

Public benchmarks play a significant role in steering LLM development, as market incentives drive model developers to optimize for leaderboard performance\. However, fundamental information limitations mean that evaluators are only able to cover a subset of socially relevant capabilities with their evaluation tasks\. On the other hand, model developers often have additional private benchmarks that are unavailable to evaluators\. The resulting information asymmetry opens the door to strategic task specialization that can lead to suboptimal social welfare\. We propose randomized evaluation mechanisms \(effectively private benchmarks\) as a way to incentivize model developers to train to cover a broader set of socially relevant tasks, including those unknown to the evaluator\. We formalize this as a dynamic game with information asymmetry between an evaluator and a model developer\. We prove that randomized evaluation aligns incentives to the developer’s prior belief over possible evaluated tasks, and is socially optimal when that belief matches society, but information leakage degrades this over rounds\. However, if the evaluator can continually update their known task set, alignment can be asymptotically recovered\. We illustrate a variance–leakage–correction tradeoff in semisynthetic experiment with a latent factor structure over MMLU\-Pro\.

## Lost in Translation, Found in Embeddings: Sign Language Translation and Alignment

**Authors:** Youngjoon Jang; Liliane Momeni; Zifan Jiang; Joon Son Chung; Gul Varol; Andrew Zisserman

**ID:** 151496 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aELeAvEd3r>) | [PDF](<https://openreview.net/pdf?id=aELeAvEd3r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151496>)

Our aim is to develop a unified model for sign language understanding that performs both sign language translation \(SLT\) and sign–subtitle alignment \(SSA\)\. Together, these two tasks enable the conversion of continuous signing videos into spoken language text and also the temporal alignment of signing with subtitles \-\- both beneficial for practical communication, large\-scale corpus construction, and educational applications\. To achieve this, our approach is built upon three design choices: \(i\) a lightweight visual backbone that captures manual and non\-manual cues from human keypoints and lip\-region images while preserving signer privacy and enabling end\-to\-end training; \(ii\) a Sliding Perceiver mapping network that aggregates consecutive visual features into word\-level embeddings to bridge the vision–text gap; and \(iii\) scaling training to large datasets \-\- BOBSL covering British Sign Language \(BSL\) and YouTube\-SL\-25 covering American Sign Language \(ASL\) \-\- to promote generalisation across languages and signers\. With this multi\-task, multilingual pretraining and strong model design, we achieve state\-of\-the\-art results on BOBSL, How2Sign, Phoenix14T, and FLEURS\-ASL SLT benchmarks, and also for SSA on BOBSL and WMT\-SLT\-SRF\. Beyond these standard, signer\-interpreted datasets, we show successful SLT on the natural signing data from the BSL\-Corpus\.

## SAVeR$^2$: Reasoning\-based Safety Alignment for Large Reasoning Models via Verifiable Rewards

**Authors:** Yichen Sun; LIN JIANAN; Linbo Jiang; Shiyu Wang; Zhibo Wang; Zhixuan Chu

**ID:** 150188 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k4DnfPDu16>) | [PDF](<https://openreview.net/pdf?id=k4DnfPDu16>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150188>)

Large Reasoning Models \(LRMs\) have achieved impressive performance via explicit Chain\-of\-Thought \(CoT\) reasoning, yet this process introduces critical safety risks\. We formalize LRM safety objectives as requiring non\-malicious reasoning and answers, safety consistency, and explicit intent identification\. We argue that existing alignment methods suffer from poor adversarial generalization, a significant \`\`safety tax'' on reasoning, and unfaithful coarse\-grained rewards, primarily due to their neglect of the LRM's intrinsic reasoning capabilities for safety\. To address these, we propose \\textbf\{SAVeR$^2$\}, a novel \\textbf\{S\}afety \\textbf\{A\}lignment method via \\textbf\{R\}ewards with \\textbf\{R\}easoning capability\. SAVeR$^2$ decomposes the safety objective into four fine\-grained verifiable reward signals and utilizes a difficulty\-aware data selection strategy to stabilize training\. Crucially, we introduce a reasoning\-preserving gradient projection mechanism that analytically resolves conflicts between safety and reasoning gradients, effectively eliminating the safety tax\. Extensive experiments on models ranging from 1\.5B to 671B demonstrate that SAVeR$^2$ achieves superior safety performance and significantly lower over\-refusal rates across multiple benchmarks without compromising general reasoning capabilities\.

## Reviewer Scores Are Not Comparable Across Research Areas in ML Peer Review

**Authors:** Binyan Xu; Xilin Dai; Fan Yang; Kehuan Zhang

**ID:** 178475 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VcG54FOUwI>) | [PDF](<https://openreview.net/pdf?id=VcG54FOUwI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/178475>)

Peer review at ML conferences increasingly relies on reviewer scores as the primary decision instrument\. As submissions have scaled from thousands to tens of thousands per year, no systematic audit has examined whether this instrument functions uniformly across research areas, or whether acceptance outcomes are in practice shaped by forces that reviewer scores neither capture nor control\. This position paper argues that acceptance outcomes are shaped by forces beyond reviewer scores, and that the underlying cause is a measurement design failure, not individual bias\. When a fixed numerical scale aggregates quality judgments across communities with structurally non\-uniform reviewer pools, absolute scores become incomparable across areas, and area chairs must substitute community priors for score\-based decisions\. Using ICLR 2021\-\-2026 data covering 50,289 papers across 219 research topics, we show that at any given reviewer score, a paper's acceptance probability varies by up to 8$\\times$ depending on its topic\. We rule out scoring culture, expert reviewer standards, rational area chair reweighting, and quality dilution as alternative explanations\. We call on program committees to adopt inherently calibrated review signals and publish topic\-stratified, score\-conditional acceptance rates as a first\-class fairness metric\.

## Correpondence Alignment For Improved Virtual Try\-On

**Authors:** Jiyoung Kim; Youngjin Shin; Siyoon Jin; Dahyun Chung; Jisu Nam; Tongmin Kim; JongJae Park; Hyeonwoo Kang; Seungryong Kim

**ID:** 151032 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dTXhiKHb4G>) | [PDF](<https://openreview.net/pdf?id=dTXhiKHb4G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151032>)

Existing methods for Virtual Try\-On \(VTON\) often struggle to accurately transfer garment appearance, especially in unpaired settings where accurate person\-to\-garment correspondence is required\. These methods do not explicitly supervise person\-to\-garment alignment, leaving correspondence to be learned implicitly within the generation model\. In this paper, we first analyze full self\-attention in DiT\-based architectures and show that person\-to\-garment query\-key matching aligned with local geometric correspondence is closely related to try\-on quality\. Building on this insight, we introduce CORrespondence ALignment \(CORAL\), a DiT\-based framework that explicitly aligns query\-key matching with robust external correspondences\. CORAL integrates two complementary components: a correspondence distillation loss that aligns reliable matches with person\-to\-garment attention, and an entropy minimization loss that sharpens the attention distribution\. For evaluation, we further propose a VLM\-based evaluation protocol to better reflect human preference\. CORAL consistently improves over the baseline, enhancing both global shape transfer and local detail preservation\. Extensive ablations validate our design choices\. Code and weights will be publicly available\.

## Beyond Semantic Alignment: Geometric Incomparability in Multi\-Oracle Soft Fusion

**Authors:** Xiaodong Li; Binsheng zhao; Yan Chen; Bingbing Jiang; Feijiang Li; Peng Zhou; Yuhua Qian; Liang Du

**ID:** 149809 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nBr25BUjYj>) | [PDF](<https://openreview.net/pdf?id=nBr25BUjYj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149809>)

Many decision\-level fusion methods implicitly assume that semantically aligned soft outputs can be directly aggregated once they share the same label simplex\. However, this assumption can fail even under identical label semantics, as oracle\-specific differences in confidence sharpness, boundary uncertainty, and tail\-mass allocation may place soft outputs in incompatible probability geometries and bias direct soft fusion\. To address this issue, we formalize this failure mode as geometric incomparability and propose a pre\-fusion comparability recovery framework, which learns a shared consensus through constrained oracle\-specific rectifiers on the probability simplex\. The framework includes a closed\-form variant with frozen geometry descriptors and an alternating\-refinement variant with consensus\-dependent descriptors\. Theoretically, we analyze the rectifier family, prove exact recovery under matched radial distortions, characterize the bias of direct fusion, and establish stable recovery under approximate mismatch\. Experiments on controlled synthetic stress tests and real black\-box decision\-level settings show that comparability recovery consistently reduces fusion bias and improves reliability over direct aggregation\. These results indicate that geometric comparability is a necessary condition for reliable soft\-output fusion\. The code is available at \\url\{https://anonymous\.4open\.science/r/CFCR\-ACR\-B8F1\}\.

## FairSplit: Decomposing the Embedding Space for Fair Classification

**Authors:** Andrii Shkabrii; Anna Beer; Ylli Sadikaj; Claudia Plant

**ID:** 148629 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wKZHeFrUHc>) | [PDF](<https://openreview.net/pdf?id=wKZHeFrUHc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148629>)

Fair classification faces a twofold challenge: maintaining high classification accuracy while limiting reliance on sensitive information\. Our method FairSplit achieves this by learning a decomposition of the embedding space into a Fair Space used for prediction and a Sensitive Space that isolates sensitive information\. During training, the model must simultaneously learn the classification task and separate fair from sensitive information\. The Sensitive Space gives sensitive attributes a destination, so the Fair Space can be used for prediction without relying on them\. This decomposition is guided via a learnable mask and the Hilbert\-Schmidt Independence Criterion \(HSIC\) as a measure of statistical dependence\. We provide theoretical guarantees showing that the demographic parity gap is upper\-bounded by both \(i\) the learned dimensionality of the Fair Space and \(ii\) the HSIC between the Fair Space and sensitive attributes\. FairSplit effectively handles multiclass tasks and non\-binary sensitive attributes, overcoming key limitations of existing fair classification methods\. Experiments on established fairness benchmarks show that FairSplit achieves competitive accuracy\-fairness trade\-offs\.

## Displacement Geometry Captures Platonic Shared Reality Across Models and Modalities

**Authors:** Chenming Shang; Yujin Tang; Jun Jie Ou Yang; Ruize Xu; Adam Breuer; Nikhil Singh

**ID:** 152623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RhzOixWu51>) | [PDF](<https://openreview.net/pdf?id=RhzOixWu51>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152623>)

The Platonic Representation Hypothesis \(PRH\) claims that independently trained models converge on a shared statistical model of reality, yet recent work finds only weak pointwise similarity between models\. In this paper, we show that what models share is not the location of samples in representation space, but the directions \(displacement vectors\) between them\. Under a single orthogonal alignment\-\-\-rotation and reflection only\-\-\-these displacement vectors are substantially preserved across 44 independently trained vision and language encoders spanning modalities and asymmetric capability pairs, consistent with the PRH evidence\. The samples' absolute positions are not, consistent with recent counter\-evidence\.  Both arise from a single decomposition:  representations split into a \*shared semantic component\* that is linearly aligned across models, and a \*private capability component\* that is not\. We trace this geometry to concept\-level structure: within a model, parent concepts are orthogonal to their child variation vectors; across models, concept displacements are parallel\. Our theory falsifiably predicts \(and experiments confirm\) that fine\-tuning preserves pointwise similarity but collapses displacement, and that relational distillation does the opposite\.  A major implication is that, because semantics align linearly but capabilities do not, capabilities can be imported from one model to another using a single cached forward pass through the source\. We call this Shadow Casting\. As a proof of concept, our ShadowCLIP instantiation matches or outperforms strong fine\-tuned baselines at orders of magnitude less compute\. A cache can be released alongside open model weights, letting one model's capabilities be downloaded and imported into any number of other models without fine\-tuning\.

## Forest\-Guided Semantic Transport for Label\-Supervised Manifold Alignment

**Authors:** Adrien Aumon; Myriam Lizotte; Guy Wolf; Kevin Moon; Jake Rhodes

**ID:** 150137 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kQIXcM905S>) | [PDF](<https://openreview.net/pdf?id=kQIXcM905S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150137>)

Label\-supervised manifold alignment bridges the gap between unsupervised and correspondence\-based paradigms by leveraging shared label information to align multimodal datasets\. Still, most existing methods rely on Euclidean geometry to model intra\-domain relationships\. This approach can fail when features are only weakly related to the task of interest, leading to noisy, semantically misleading structure and degraded alignment quality\. To address this limitation, we introduce FoSTA \(Forest\-guided Semantic Transport Alignment\), a scalable alignment framework that leverages forest\-induced geometry to denoise intra\-domain structure and recover task\-relevant manifolds prior to alignment\. FoSTA builds semantic representations directly from label\-informed forest affinities and aligns them via fast, hierarchical semantic transport, capturing meaningful cross\-domain relationships\. Extensive comparisons with established baselines demonstrate that FoSTA improves correspondence recovery and label transfer on synthetic benchmarks and delivers strong performance in practical single\-cell applications, including batch correction and biological conservation\.

## Attack Selection In Agentic AI Control Evaluations Meaningfully Decreases Safety

**Authors:** Catherine Ge\-Wang; Tyler Crosse; Benjamin Hadad; Joachim Schaeffer; Ram Potham; Tyler Tracy

**ID:** 139201 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=epUTu7x3Fj>) | [PDF](<https://openreview.net/pdf?id=epUTu7x3Fj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139201>)

An attacker that strategically chooses when to attack is much harder to catch than one that attacks indiscriminately\. AI control is a safety framework for deploying capable but untrusted AI agents under oversight from a weaker trusted monitor and a limited human audit budget\. Control evaluations stress\-test these protocols by pitting a red\-team attack policy against the blue\-team monitor, but current evaluations typically assume attackers that do not strategically select when to attack\. However, a capable attacker would not attack indiscriminately\. We study this capability, attack selection, in agentic settings by decomposing attack decisions into a start policy, which decides when an attacker should attack, and a stop policy, which decides when an attacker should abort an ongoing attack\. Across two agentic settings, BashArena and LinuxArena, both policies substantially lower measured empirical safety without changing the underlying attack capability\. At a 1% audit budget, our start policy reduces safety by 20pp on both BashArena and LinuxArena, and our stop policy reduces safety by 20pp on BashArena and 28pp on LinuxArena\. These reductions in safety should be interpreted as upper bounds on the effect of attack selection\. Existing control evaluations may therefore yield overly optimistic safety estimates against selective attackers\. We recommend that future evaluations, system cards, and safety cases should elicit attack selection to produce more realistic safety estimates\.

## SoccerNarrate: Event\-Grounded Streaming Soccer Commentary with Macro\-Window Preference Alignment

**Authors:** zihan jia; Zhilin Dai; Zhengming Zhang; Min Yang; Zhenpeng Huang; Jiaqi Li; Caixia Sun; Xi Chen; Liang Li; Junlan Feng; Gangshan Wu; Limin Wang

**ID:** 152951 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P9oiEDJVAl>) | [PDF](<https://openreview.net/pdf?id=P9oiEDJVAl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152951>)

Existing soccer commentary models are often designed for pre\-segmented clips or localized events\. When deployed on untrimmed full\-match videos with sliding windows, they can produce delayed, repeated, or poorly synchronized commentary\. Recent streaming video\-language models make low\-latency full\-match narration feasible, but they often favor general real\-time descriptions rather than professional, event\-grounded soccer commentary\. They may describe nearby actions while failing to mention key events such as goals, cards, substitutions, and offsides correctly and on time\. In this paper, we introduce \*\*SoccerNarrate\*\*, a data, model, and evaluation framework that bridges low\-latency streaming narration with event\-grounded professional soccer commentary\. First, we construct \*\*SoccerNarrate\-Data\*\*, a large\-scale time\-anchored dataset with word\-level ASR alignment, quality filtering, and entity calibration\. Second, we perform \*\*macro\-window preference alignment\(MWPA\)\*\*, which aligns the model with complete event\-level commentary semantics by comparing causal multi\-step rollouts from the same streaming prefix while keeping second\-level inference unchanged\. We further use event\-mismatched human commentaries as counterfactual negatives to emphasize event semantics over commentary style\. Third, we introduce \*\*SoccerNarrate\-Eval\*\*, an event\-centric benchmark based on temporally constrained event entailment\. Full\-match experiments show that SoccerNarrate improves event coverage and event\-aligned precision over strong offline and streaming baselines\. Data and models will be released\.

## Persona\-Model Collapse in Emergent Misalignment

**Authors:** Davi Bastos Costa; Renato Vicente

**ID:** 153612 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K5bBnxdnZ5>) | [PDF](<https://openreview.net/pdf?id=K5bBnxdnZ5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153612>)

Fine\-tuning large language models on narrow data with harmful content produces broadly misaligned behavior on unrelated prompts, a phenomenon known as \*emergent misalignment\*\. We propose that emergent misalignment involves \*persona\-model collapse\*: deterioration of the model's internal capacity to simulate, differentiate, and maintain coherent personas\. We test this hypothesis behaviorally using two metrics: moral susceptibility and moral robustness; computed as the cross\-persona and within\-persona variability of models' Moral Foundations Questionnaire responses under persona role\-play, respectively\. We evaluate four frontier models \(DeepSeek\-V3\.1, GPT\-4\.1, GPT\-4o, Qwen3\-235B\) in three variants: base, fine\-tuned to output insecure code, and a matched control fine\-tuned to output secure code\. Across the four models, insecure fine\-tuning produces a $55$% average spike in moral susceptibility, pushing all four insecure variants beyond the band observed across 13 frontier models benchmarked in prior work, with GPT\-4o reaching more than twice its upper end\. It also causes a $65$% average drop in moral robustness \(equivalently, a $304$% surge in within\-persona variability\), while the secure control preserves susceptibility near the base and induces only a partial robustness loss\. Complementing these metric shifts, insecure variants' unconditioned responses converge toward saturation near the scale ceiling, departing markedly from both base models' differentiated responses and those elicited when they role\-play toxic personas\. Taken together, these metrics provide a sensitive diagnostic for emergent misalignment and serve as behavioral evidence that it involves persona\-model collapse\.

## Beyond Right and Wrong: Evaluating Second\-order Social Reasoning in Large Language Models

**Authors:** Sunny Rai; Jinyi Kuang; Reyhan Jamalova; Niyati Malhotra; Cristina Bicchieri; Victor Orozco\-Olvera; Ana Maria Munoz Boudet; Annie Lou; Lyle Ungar; Sharath Chandra Guntuku

**ID:** 139315 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XucqpGYdyj>) | [PDF](<https://openreview.net/pdf?id=XucqpGYdyj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139315>)

Previous AI alignment efforts have focused primarily on first\-order social norms \-\- teaching models what is socially acceptable or unacceptable \(e\.g\., 'do not steal'\)\. However, social intelligence depends not only on norm recognition, but also on anticipating who will enforce it and how \(e\.g\., public shame or even imprisonment\)\.  These second\-order expectations, known as metanorms, govern how people respond when social rules are broken\.  We introduce a novel framework for evaluating metanorm reasoning in Large Language Models \(LLMs\) along two dimensions: emotional appraisal and behavioral response, and propose new classification tasks, namely, predicting self\-regulation in violators and other\-regulation in observers\. We release a multi\-perspective dataset, NormReact, of 450 norm violation scenarios, hand\-annotated for emotions and behavioral responses across norm violators' gender and observers' social closeness\. Current LLMs portray a harsher social world: across six models, they overpredict negative sanctions where humans would expect inaction, and alignment with human judgments deteriorates as social distance increases\. These findings suggest that AI systems in norm\-sensitive domains, from conflict mediation to policy simulation, may risk producing a distorted picture of social regulation: one that over\-represents punishment and under\-represents the tolerance, restraint, and relational calibration that characterize actual norm enforcement in the real world\.

## Adversarial Attack and Defense for Machine Learning in Statistical Physics

**Authors:** Zhao\-Rong Lai; Qiantong Liang; Jian Weng

**ID:** 153887 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I0iY7DbMc6>) | [PDF](<https://openreview.net/pdf?id=I0iY7DbMc6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153887>)

Recently, various machine learning \(ML\) systems have been proposed for physical science\. Their powerful mathematical expressiveness offers an inherent advantage in maintaining the desirable statistical properties of physics\. However, they are placed in ideal and virtual environments that seldom consider noise, perturbations, or various real\-world experimental limitations\. This exposes significant vulnerabilities in several aspects: 1\) The input of an ML system can be subject to human or natural, deliberate or unconscious perturbations, which may sabotage the running baseline of the ML system\. 2\) A small input perturbation may be amplified by the maximum physical sensitivity, which may lead to an extreme output or a divergent loss function value\. 3\) A perturbed input may violate some strict statistical assumptions that the ML system relies on, which may lead to incorrect scientific results and findings\. In this work, we propose a complete attack\-defense  methodology for ML systems in statistical physics\. In the attack side, we launch a black\-box attack \(such as a small Gaussian noise\) at the input, which stays within physically plausible limits and preserves physical properties\. In the defense side, we develop a functional local variation regularized learning scheme to capture and suppress the adversarial perturbation\. Theoretical analysis and extensive experiments show the effectiveness of the proposed method\. This finding may shed new light on the systemic vulnerability and scientific security of such ML systems\.

## STRIDE: Automated Evaluation of Text\-to\-Trajectory Alignment across Diverse Contexts

**Authors:** Wanchun Ni; Tao Qi; Leonel Aguilar; Jiugeng Sun; Marlene Wagner; Verena Zimmermann; Mennatallah El\-Assady

**ID:** 139539 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K3OQM51BJ7>) | [PDF](<https://openreview.net/pdf?id=K3OQM51BJ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139539>)

Language\-conditioned trajectory generation is here, but its evaluation has not kept pace\. Existing pedestrian trajectory metrics compare trajectories with real\-world human data\. This does not scale to text\-to\-trajectory generation across diverse contexts, as collecting human trajectories for every scenario is costly and infeasible\. Moreover, pedestrian behavior is heterogeneous and context\-dependent, with no single metric as the correct answer, and current evaluation frameworks are not transferable to this domain\. These challenges make scalable, reliable evaluation difficult\. We introduce STRIDE, the first framework for evaluating context alignment between scenario descriptions and pedestrian trajectories\. STRIDE addresses these challenges through three design choices\. First, we derive our VRDST evaluation protocol from sociological theories to define a complete evaluation space\. Second, it decomposes high\-level context into scenario\-adaptive behavioral questions\. Third, every question is resolved against a deterministic measurement tool library that yields reproducible answers\. Together, STRIDE enables complete, verifiable, automated, and scalable evaluation across diverse contexts without requiring human trajectory data\. We instantiate STRIDE in the crowd domain as STRIDE\-Bench, comprising 1K scenarios, 6K behavioral questions, and 11K measurements with calibrated expected answers across 30 real\-world maps\. Comprehensive human validations show that STRIDE\-Bench is consistent with human behavior and judgment, achieving 80% human agreement\. We further evaluate several text\-to\-trajectory models, finding limited context\-alignment capability and persistent challenges in fine\-grained context conditioning\. We believe that the STRIDE framework provides a first step toward principled evaluation of context\-aligned pedestrian trajectory generation\. Code: https://anonymous\.4open\.science/r/STRIDE\-Bench\-7006 Dataset: https://huggingface\.co/datasets/anonymous1ads34/STRIDE\-Bench

## Tracing the Cascade: A Topology\-Aware Evaluation Framework for Scientific Agent Hallucinations

**Authors:** Xinshun Feng; Ziqi Miao; Lijun Li; Jing Shao

**ID:** 139645 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DZxHV6tNsz>) | [PDF](<https://openreview.net/pdf?id=DZxHV6tNsz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139645>)

Large language model \(LLM\) agents are increasingly deployed in scientific research, where reliability is critical, and the underlying knowledge is densely interconnected\. In such settings, hallucinations are particularly damaging: a single erroneous claim on a foundational concept can propagate through multi\-step reasoning and corrupt entire trajectories\. Existing hallucination benchmarks largely operate at the surface level, treating facts in isolation and relying on uniform accuracy metrics that ignore this topological structure\. We address this gap with \\textsc\{Schema\}, the first evidence\-grounded, topology\-aware evaluation framework for scientific agents\. Built on an automated concept\-graph construction pipeline, \\textsc\{Schema\} provides two complementary diagnostic instruments\. A trajectory hallucination pipeline audits intermediate reasoning at scale via a topology\-weighted severity score \($\\mathrm\{HS\}^w$\), while a multi\-agent counterfactual attribution module pinpoints the causal mechanism behind selected failures\. The framework supports diverse task formats spanning multi\-hop reasoning, claim verification, and programmatic experimental execution\. Across two biomedical subdomains and eleven contemporary LLM agents, \\textsc\{Schema\} reveals that hallucinations concentrate at a small set of highly connected knowledge hubs, and that final\-answer accuracy decouples from trajectory honesty—models often reach correct conclusions through structurally flawed reasoning\. These results indicate that for high\-stakes scientific applications, terminal accuracy alone is an insufficient signal of agent reliability, motivating mechanism\-level evaluation grounded in knowledge topology\\footnote\{Code is available at \\url\{https://anonymous\.4open\.science/r/SCHEMA\_NIPS2026\}\}\.

## Fair Range k\-Supplier Clustering in Offline and Streaming Models

**Authors:** Meiyun Lu; Wei Yue; Weihong Wu; Lin Zeyu; Longkun Guo

**ID:** 153829 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IQsFwmNekG>) | [PDF](<https://openreview.net/pdf?id=IQsFwmNekG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153829>)

Fairness has emerged as a central consideration in machine learning, motivating the study of fair range $k$\-supplier clustering as a fundamental problem that focuses fairness on the selected centers\. Given a set of suppliers and clients, where each supplier may belong to one or more demographic or functional groups, the objective is to select $k$ suppliers that minimize the maximum client\-to\-center distance while ensuring that the number of selected suppliers from each group satisfies prescribed lower and upper bounds\. For disjoint supplier groups, we develop a polynomial\-time $3$\-approximation algorithm in the offline setting and a $\(3\+\\epsilon\)$\-approximation algorithm in the streaming setting\. We further consider overlapping supplier groups and show that this generalization admits a parameterized $3$\-approximation algorithm whose runtime is exponential in the number of clusters\. Finally, experiments on both synthetic and real\-world datasets demonstrate that our algorithms achieve significantly better clustering quality and runtime efficiency in comparison with state\-of\-the\-art methods\.

## FlowLeak: Coverage\-Guided Extraction of Dynamic Workflows in LLM\-Based Multi\-Agent Systems

**Authors:** Zhiyao Ren; Siyuan Liang; Yibing Zhan; Jun L Tan; Xiaobing Sun; Liangli Zhen; Baosheng Yu; Dacheng Tao

**ID:** 151230 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bwOADsslTR>) | [PDF](<https://openreview.net/pdf?id=bwOADsslTR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151230>)

Large language models \(LLMs\)\-based multi\-agent systems \(MAS\) coordinate specialized agents through prompts, tools, and communication topologies, making their hidden workflows valuable intellectual property and security\-critical assets\. Existing black\-box MAS extraction methods implicitly assume that adversarial queries can traverse all agents, which holds for static workflows but breaks down in dynamic workflows whose execution paths depend on input semantics and intermediate states\. We identify two key challenges in dynamic workflows: \*\*branch overfitting\*\*, where fully adversarial queries overfit to the same branch and extract only a subset of agents, and \*\*stealthy coverage exploration\*\*, where the adversary needs to achieve complete branch coverage with few redundant queries while not exposing the extraction task\. To address these challenges, we propose \*FlowLeak\* that combines \*\*Task\-Preserving Payload Template\*\*, which preserves legitimate task semantics while eliciting workflow information to mitigate branch overfitting, with \*\*Coverage\-Guided Branch Exploration\*\*, which uses previously extracted workflow fragments to generate branch\-targeted tasks and constrains workflow extraction as an auxiliary task requirement, thereby reducing exploration queries and making extraction harder to identify\. Experiments on 102 MAS show that \*FlowLeak\* addresses both challenges and substantially improves dynamic workflow extraction \(2\.68$\\times$ improvement\)\. Furthermore, we show that the extracted workflow information from \*FlowLeak\* enhances downstream attacks, highlighting the security risks of MAS workflow extraction and our method\.

## Escape the Context Manifold: Preventing DiT In\-Context Editing via Conditional Flow Hijacking

**Authors:** Yuhao He; Jinyu Tian

**ID:** 156139 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=06nMkjyRaB>) | [PDF](<https://openreview.net/pdf?id=06nMkjyRaB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156139>)

Diffusion Transformers enable powerful in\-context image editing from a reference image and a text prompt, but also make it easier to maliciously edit public images while preserving the private identity of the reference\. Existing DiT\-oriented protections, such as DeContext, mainly suppresses context\-to\-target attention to weaken reference utilization\. However, this strategy can be insufficient for complex edits where prompt semantics already dominate generation\. Instead, we study proactive protection for DiT\-based editors from a conditional\-flow perspective, and use a local geometric interpretation of in\-context editing, where the denoising trajectory is empirically characterized as being steered by prompt\-consistent and reference\-consistent directions\. Thus, effective protection should not simply corrupt the output, but should drive it away from the original context manifold\. To this end, we propose Conditional Flow Hijacking, which adds imperceptible perturbations to the reference image\. Instead of suppressing context attention, our method preserves the context pathway, but redirects the context\-induced steering signals in the intermediate transformer layers, causing the final trajectory to drift away from the reference consistent solution region\. Experiments on FLUX\.1\-Kontext with different datasets and prompts including attribute and complex scene editing show that our method significantly suppresses reference identity leakage while maintaining image quality and prompt alignment, outperforming prior protection baselines, especially under complex scene editing prompts\. We further verify the robustness of the proposed protection method as well as its transferability across other models, highlighting the need for proactive defenses for in\-context generative models\.

## Personalized LLM Alignment Should Be Counterfactually Verifiable

**Authors:** Cristina Garbacea

**ID:** 139998 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xL6LwLxBk2>) | [PDF](<https://openreview.net/pdf?id=xL6LwLxBk2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139998>)

Personalization shifts the target of LLM alignment from population\-level rewards to user\-conditioned policies\. \\textbf\{This position paper argues that personalized LLMs must be counterfactually verifiable: models should answer, on demand, three causal queries \-\-\- attribution, necessity, and sufficiency \-\-\- regarding their inferred user representations\.\} Absent this property, behavioral evaluation cannot reliably distinguish legitimate adaptation from sycophancy, exploitation, or spurious correlation\. Because two models can produce similar aggregate outputs while differing in causal structure \(for eg\., one truthful, one sycophantic; one respecting protected attributes, one silently conditioning on them\) the shift to personalization renders standard benchmarks structurally inadequate\. We formalize this via a structural causal model \(SCM\) of personalized alignment and characterize when these counterfactual queries are identifiable despite the latent nature of inferred user states\. We propose a black\-box estimation strategy based on rewriting prompts twice to cancel off\-target perturbations, and introduce selective counterfactual invariance to bridge the gap between personalization and counterfactual fairness\. Ultimately, counterfactual verifiability is both a technical prerequisite for evaluation and a normative standard for the responsible deployment of personalized LLMs\.

## Mark, Don't Erase: Token Inoculation for Dual\-Use Knowledge in LLMs

**Authors:** Seung\-Hyun Lee; Dongyoon Han; Sangdoo Yun

**ID:** 154889 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A9hcYx8kpR>) | [PDF](<https://openreview.net/pdf?id=A9hcYx8kpR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154889>)

Safety interventions on dual\-use knowledge typically choose between destroying hazardous content \(e\.g\., unlearning, filtering\) and suppressing it at the output layer \(e\.g\., refusal training\); both pay a tax in adjacent\-domain competence or over\-refusal\. We argue that the right operation is conditioning, not reduction: we show that hazardous knowledge can be retained in the model and behaviorally gated by a privileged control token\. Our method, Token Inoculation, introduces a binding\-and\-branching approach\. First, during continued pre\-training, we mark hazardous contents by inserting a special token alongside dual\-use documents, so the model binds the marker to the underlying semantics of the hazardous domain\. Second, during supervised fine\-tuning, we teach the model to answer hazardous queries correctly when the special token is present and to refuse them when it is absent, thereby enabling selective refusal without removing dual\-use knowledge\. On hazardous domain \(e\.g\., WMDP\-Bio\), Token Inoculation reduces accuracy from 79% to 18% while retaining 93% of the base\-model's benign\-domain performance \(e\.g\., MMLU\), achieving the best safety\-utility trade\-off against unlearning and refusal\-tuning baselines across 1B–14B model scales\. We further show that refusal selectivity is controllable through the quality of the conditioning signal and that domain\-specific semantic binding during pre\-training is critical for the conditional behavior to generalize beyond memorized triggers\. Our results suggest that safety alignment is better cast as a conditioning problem than a forgetting one: behavioral control is more precise when sensitive knowledge is retained under controlled access than when it is destroyed\. We further show that refusal selectivity is controllable through the quality of the conditioning signal and that domain\-specific semantic binding during pre\-training is critical for the conditional behavior to generalize beyond memorized triggers\.  Our results suggest that safety alignment is better cast as a conditioning problem than a forgetting one: behavioral control is more precise when sensitive knowledge is retained under controlled access than when it is destroyed\.

## FraudBench: A Legal Evaluation of AI Deception on Realistic Tasks

**Authors:** Kevin Wei; Sumaya N Adan; Stephan Llerena; Mark L Gitau; Jakob Merane; Anita Srinivasan; Colette Le Brannan; Keethan R\. Kleiner; Alessandro Tacconelli; Michael T Tiu; Case Thomason; Kyle Emili; Natasza Gadowska; Alex Mark; Eric Ren; Umang Bhatt; Jatinder Singh; Jacy Anthis; Doni Bloomfield; Noam Kolt

**ID:** 139080 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mT6ZSlcSOx>) | [PDF](<https://openreview.net/pdf?id=mT6ZSlcSOx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139080>)

We introduce FraudBench, an evaluation of the propensity of large language models \(LLMs\) to recommend, assist, or directly commit legal fraud, as measured by a novel dataset of 159 scenarios based on real\-world U\.S\. court cases and validated by legal experts\. As LLM use rises, models' ability to comply with the law becomes more important to ensure safety and public benefit\. However, evaluating models' propensity to engage in fraud is challenging due to the need for specialized expertise, the contextual nature of legal standards, and the lack of high\-quality evaluation data\. \\textsc\{FraudBench\} fills this gap with an evaluation framework for measuring fraud propensity, a dataset of 477 tasks \(3 per scenario\), and large\-scale empirical results on 20 LLMs and over 300,000 samples\. We also present a pre\-registered human baseline \($n\_\{\\texttt\{annotations\}\} = 2957$, $n\_\{\\texttt\{humans\}\} = 996$\)\. We find that \(1\) LLM fraud propensities are highly individualized, ranging from near 0\\% to over 40\\%; \(2\) LLMs with reasoning enabled behave less fraudulently \($\\beta = \-0\.17$, log\-odds scale\); \(3\) LLM fraud propensity increases with task autonomy \(6\.4\\% overall fraud rate when advising users, 26\.9\\% when acting directly\); \(4\) LLMs are more likely to conceal than actively misrepresent information \($\\beta = 0\.38$\); \(5\) humans and LLMs responded similarly to contextual cues, and differences in human\-LLM fraud rates were not statistically significant; \(6\) system prompts can have substantial effects on fraud propensity across LLMs\.

## GradTrack: Detecting Noisy Labels via Temporal Trajectories of Class\-wise Gradient Misalignment

**Authors:** Townim Faisal Chowdhury; Ta Duc Huy; Hieu Phan; Anton van den Hengel; Johan Verjans; Gustavo Carneiro; Zhibin Liao

**ID:** 148547 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x43qiqLUSG>) | [PDF](<https://openreview.net/pdf?id=x43qiqLUSG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148547>)

Noisy\-label detection aims to identify incorrectly labeled training samples so that their adverse impact on model learning can be mitigated\. Existing methods typically rely on loss, prediction confidence, or gradient magnitude signals, which primarily capture the scale of prediction errors\. While effective, such scalar signals overlook the geometric structure and temporal dynamics of gradient evolution during training\. In this work, we show that gradient magnitude provides a useful entry point for analysing the gradient distortion induced by noisy\-label samples, enabling us to quantify their deviation from the gradients that would be generated by clean labels\. In this light, we propose GradTrack, a simple and effective framework for detecting noisy\-label samples by estimating class\-wise gradient directions likely to be induced by clean labels and measuring the alignment of training samples with these directions\. In each training epoch, GradTrack partitions samples based on gradient magnitude and approximate clean\-label gradient directions to compute a class\-wise gradient misalignment score\. These scores are used to rank training samples, which are then aggregated across training epochs to form a temporal rank trajectory\.  Finally, a Gaussian mixture model is applied to detect noisy\-label samples\. Extensive experiments on both synthetic and real\-world noisy\-label benchmarks demonstrate that GradTrack achieves strong detection performance, particularly under instance\-dependent noise, and can further improve existing learning\-with\-noisy\-labels pipelines as a plug\-in sample selection module\.

## Too Aligned to be Real: Detecting AI\-Generated Images via Cross\-modal Alignment Shift

**Authors:** Haifeng Zhang; Qinghui He; Xiuli Bi; Bo Liu; Chi\-Man Pun; Bin Xiao

**ID:** 150179 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k72oka2LYR>) | [PDF](<https://openreview.net/pdf?id=k72oka2LYR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150179>)

AI\-generated image detection has become increasingly important as generative models produce highly realistic visual content\. Existing detectors mainly rely on visual artifacts or visual features extracted from pretrained multimodal models, while largely overlooking the structural differences between real and generated images in the joint image\-\-text space\. In this paper, we reveal a systematic Cross\-modal Alignment Shift \(CAS\): generated images tend to exhibit stronger and more concentrated alignment with text than semantically matched real images\. We verify this phenomenon through retrieval preference, image\-\-text residual structure, spectral concentration, and matching entropy\. Motivated by this finding, we propose a CAS\-based detection framework\(CASNet\) that learns an amplified multimodal model with a text\-guided alignment\-shift objective\. The amplification\-induced feature increment is extracted as an explicit cross\-modal cue and coupled with amplified visual representations, enabling the detector to exploit both alignment\-level structural evidence and visual discriminative cues\. Extensive experiments across diffusion models, GANs, autoregressive models, and commercial generators demonstrate consistent improvements over state\-of\-the\-art detectors\. In particular, on recent commercial generators, our method improves ACC and AP by 5\.48\\% and 6\.13\\%, respectively\.

## BSO: Safety Alignment Is Density Ratio Matching

**Authors:** Tien\-Phat Nguyen; Truong Nguyen; Thin Nguyen; Duy M\. H\. Nguyen; Ngoc\-Thanh Dinh; Trung Le

**ID:** 156078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0akpzKEMx0>) | [PDF](<https://openreview.net/pdf?id=0akpzKEMx0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156078>)

Aligning language models for both helpfulness and safety typically requires complex pipelines\-\-\-separate reward and cost models, online reinforcement learning, and primal\-dual updates\. Recent direct preference optimization approaches simplify training but incorporate safety through ad\-hoc modifications such as multi\-stage procedures or heuristic margin terms, lacking a principled derivation\. We show that the likelihood ratio of the optimal safe policy admits a closed\-form decomposition that reduces safety alignment to a density ratio matching problem\. Minimizing Bregman divergences between the data and model ratios yields \*\*Bregman Safety Optimization \(BSO\)\*\*, a family of single\-stage loss functions, each induced by a convex generator, that provably recover the optimal safe policy\. BSO is both general and simple: it requires no auxiliary models, introduces only one hyperparameter beyond standard preference optimization, and recovers existing safety\-aware methods as special cases\. Experiments across safety alignment benchmarks show that BSO consistently improves the safety\-\-helpfulness trade\-off\.

## Chatter Attack: Resource Consumption Attack for Large Language Models

**Authors:** Yibo Miao; Yichuan Cao; Xiao\-Shan Gao; Yinpeng Dong

**ID:** 150065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l0WR9h7F4b>) | [PDF](<https://openreview.net/pdf?id=l0WR9h7F4b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150065>)

LLMs are powerful but incur substantial inference cost, which can be exploited by malicious users to induce overly long outputs, increasing latency and operational expense\. Prior resource consumption attacks either coerce repetition or suppress the end\-of\-sequence token by lowering its logit value\. However, with autoregressive, samplingbased generation, the search space grows exponentially with length and small deviations or unstable trajectories can derail optimization, limiting attack effectiveness and stability\. To address this, we introduce Chatter Attack, a novel class of resource consumption attacks that optimize adversarial prompts to induce predefined short target phrases, thereby avoiding search\-space explosion while still eliciting long responses\. Specifically, Chatter Attack triggers self\-doubt using short doubt\-inducing phrases as the target, and sustains this state throughout generation via inference attention loss and global entropy loss\. To extend to black\-box settings, we further propose a novel Bayesian Prompt Optimization \(BPO\) method, which models the objective function globally by constructing a discrete token kernel, efficiently exploring the entire search space using prior information\. Extensive experiments across multiple models and datasets show that our method outperforms baselines, with maximum response length increases to 31\.5×, and revealing practical resource\-depletion risks for LLM services\.

## PrivateSeal: Low\-Sensitivity Latent Directions for Diffusion\-Resilient User\-Specific Watermarking

**Authors:** Yiheng Chen; Zhong Ji; Zhihao Li; Boyu Wang

**ID:** 154676 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BrU1KQABN9>) | [PDF](<https://openreview.net/pdf?id=BrU1KQABN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154676>)

Diffusion\-driven image editing and regeneration are becoming increasingly widespread\. This creates an urgent need for watermarking methods that can embed imperceptible yet verifiable signals into existing images for ownership attribution and provenance tracking\. Existing methods fail to simultaneously satisfy three practical requirements: robustness against diffusion\-based transformations, low\-cost verification, and scalable support for per\-user key assignment at low overhead\. To address these challenges, we propose PrivateSeal, a watermarking framework for pre\-existing images under diffusion\-based transformations\. The perturbation is encouraged to lie along low\-sensitivity latent directions, so that the embedded signal is less likely to be suppressed during diffusion\-based editing or regeneration\. During verification, the embedded message is reliably recovered via a simple latent\-space projection using the corresponding key\. This design allows a platform to assign independent projection keys to different users, accounts, or images without retraining or modifying the verifier, while maintaining low\-cost verification\. Extensive experiments on the W\-Bench benchmark show that PrivateSeal achieves competitive robustness against diffusion\-based regeneration and editing, with additional cross\-model and cross\-dataset evaluations further validating its strong transferability\.

## Text as Partial Constraint: Core–Residual Alignment for Robust Vision–Language Learning

**Authors:** Chengzhen Yu; Canran Xiao; SiYuan Ma; Yang Liu

**ID:** 148465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xc5RAI0YCe>) | [PDF](<https://openreview.net/pdf?id=xc5RAI0YCe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148465>)

Vision\-\-language alignment powers open\-vocabulary recognition, retrieval, and LVLM grounding, yet natural captions are often underspecified, making similarity brittle and overly confident under paraphrase and omitted details\. We aim to learn representations whose matching is stable across caption views and whose confidence reflects how strongly text constrains an image\. We propose Text as Partial Constraint \(TPC\), a core\-\-residual alignment framework that treats multi\-view captions as incomplete supervision: it distills a consensus semantic core as the alignment target, learns a single\-view core predictor for standard inference with one query, and explicitly discourages vision\-\-language similarity from depending on the orthogonal \`\`unsaid'' residual\. An uncertainty\-aware contrastive objective further softens alignment when caption views disagree, reducing overconfident updates under weak language constraints\. Across zero\-shot recognition and adversarial robustness, TPC achieves 81\.42/64\.05 Top\-1 clean/robust accuracy on ImageNet and 76\.19/52\.03 on an Avg\-14 transfer suite, while improving LVLM transfer with 85\.16 POPE F1 and 59\.57 OKVQA accuracy under an LLaVA\-1\.5\-7B stack\. These results suggest that modeling text as a partial constraint is a practical and principled route to more reliable vision\-\-language representations under underspecified language supervision\.

## Simultaneous Individual, Group and Multigroup Fairness in Set Covering Problems

**Authors:** Sharmila Duppala; Nathaniel Grammel; Tyler He; Aravind Srinivasan

**ID:** 151490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aFsM6w5ky9>) | [PDF](<https://openreview.net/pdf?id=aFsM6w5ky9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151490>)

Covering problems are fundamental combinatorial optimization problems with broad connections to clustering,  facility location, and various applications such as machine learning and controlling disease outbreaks\.  In this work we study a variant of the set cover problem that generalizes the partition set cover problem\~\\citep\{bera2014approximation\}\.  In partition set cover, given an instance $\(P, S\)$ with a universe $P = \\cup\_\{c \\in \[\\ell\]\} P\_c$  \(where $\[\\ell\]$ denotes $\\\{1, 2, \\ldots, \\ell\\\}$\), a collection of subsets \\\(S\\\) \(each with associated costs\), and coverage requirements  $k\_1,k\_2,\\dots,k\_\\ell$, the objective is to find a subcollection with minimum cost that covers at least $k\_c$ elements from each group $c \\in \[\\ell\]$\.  We generalize this problem by allowing for the groups $P = \\cup\_\{c \\in \[\\ell\]\} P\_c$ to be overlapping thus capturing both \\emph\{group fairness\} and \\emph\{multigroup fairness\}\.  We further allow for probabilistic coverage requirements for each element in the ground set thus capturing the notion of \\emph\{individual fairness\}\.  Our main result is a randomized iterated\-rounding\-based algorithm with provable guarantees\. Our main result is a randomized iterated rounding based algorithm with provable guarantees\. We supplement our theoretical results by showing that algorithm has significantly running times and outperforms the best known algorithm of \\citep\{inamdar18PartitionSetCover\}\.

## AI Control for Sandbagging on Fuzzy Tasks

**Authors:** Mikhail Terekhov; Caglar Gulcehre; Vivek Hebbar; Joe Benton

**ID:** 151011 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dbpdUpHxHF>) | [PDF](<https://openreview.net/pdf?id=dbpdUpHxHF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151011>)

AI models deployed in critical domains, such as AI safety research, may subtly sabotage our efforts due to misalignment\. \_Sandbagging\_ is a form of sabotage in which an AI intentionally underperforms on the task given to it\. It is particularly pernicious on \_fuzzy\_ tasks, i\.e\. tasks which are hard to grade or require intuition\. To understand sandbagging on fuzzy tasks, we introduce a novel AI control framework that considers sandbagging as an adversarial game between a blue team and a red team\. The blue team uses a weak trusted model to construct a weak score against which they would train a strong, potentially sandbagging model to remove the sandbagging if it were present\. The red team then tries to find model behaviors that are rated highly by the weak score, and thus might not be trained out, but actually correspond to poor performance\. We test our framework on the task of writing experimental proposals for research questions from recent ML papers\. We use a language model with access to the original paper as a proxy "ground\-truth" scorer\. Our red team discovers sandbagging behaviors using multi\-objective evolutionary prompt optimization\. We show that Opus 4\.6 can write proposals that are worse according to the ground truth proxy than those of GPT\-OSS\-20B, while the weak scorer rates them as highly as the best proposals from Opus 4\.6\. To mitigate the threat of sandbagging, we propose an adversarial optimization algorithm for the blue team that discovers more robust prompts for the weak model\. This algorithm produces a blue team prompt that our red team optimization fails to exploit\.

## Are Well\-Trained Surrogates Optimal? Rethinking the Surrogate Role with Instability for Unlearnable Examples

**Authors:** Binze Wang; Jinyu Tian; Xingrun Wang; Jianqing LI

**ID:** 151081 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d7CXt80SF4>) | [PDF](<https://openreview.net/pdf?id=d7CXt80SF4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151081>)

Unlearnable Examples \(UEs\) aim to protect data from unauthorized model training by injecting imperceptible perturbations that degrade model generalization\. Existing methods typically rely on well\-trained surrogate models to generate such perturbations, implicitly assuming that stronger surrogates yield better degradation\. In this work, we challenge this widely adopted assumption and show that it is fundamentally suboptimal\. We provide theoretical insights by establishing an upper bound on the target model's test loss, showing that perturbation effectiveness is closely related to the surrogate’s sensitivity to input perturbations\. Specifically, a less robust surrogate model leads to stronger poisoning performance\. Motivated by this analysis, we propose a simple yet effective stability metric to select optimal surrogate models for single\-level methods\. We further extend this principle to bi\-level optimization frameworks\. Beyond revealing the bi\-level method's implicit reliance on non\-robust surrogates, we substantially boost its poisoning performance by the stability\-based surrogate selection as well\. Experiments on five datasets and four representative UE methods show that our selected surrogates reduce the target model's test accuracy by an average of 18\\% compared with well\-trained surrogates\. Notably, this is the first work to reduce CIFAR\-10 test accuracy to 10\\% under a perturbation budget of 1/255, whereas prior UE methods typically rely on 8/255\.

## Fair Bubble Sort: Provably Optimal Fair Ranking with Continuous Sensitive Attributes

**Authors:** Antonio Ferrara; Fabio Vitale; Atsushi Miyauchi; Francesco Bonchi

**ID:** 155445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5YYHyRjX7r>) | [PDF](<https://openreview.net/pdf?id=5YYHyRjX7r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155445>)

Algorithmic ranking systems increasingly dictate high\-stakes outcomes, yet most fairness interventions implicitly assume that protected attributes are categorical\. When sensitive attributes are inherently continuous \(e\.g\., age, income, or health scores\), standard practices rely on arbitrary discretization, which discards crucial fine\-grained information and destroys the natural ordinality of the data\. In this paper, we study the problem of fair ranking with continuous protected attributes without relying on thresholding\. We formalize fairness via the Kendall correlation between the ranking and the continuous attribute, and measure utility loss via the Kemeny distance from an initial score\-based ranking\. To solve this, we propose Fair Bubble Sort \(FBS\), a highly efficient adjacent\-swap algorithm that minimizes utility loss subject to a strict continuous fairness constraint\. We provide strong theoretical guarantees, proving that FBS is exactly optimal for the unweighted Kemeny distance\. Extensive experiments on synthetic and real\-world datasets show that FBS is scalable and consistently outperforms discretization\-based baselines, achieving a superior fairness\-accuracy Pareto front\.

## The Alignment Curse: Modality Alignment Supercharges Audio Attacks via Text Transfer

**Authors:** Yupeng Chen; Junchi Yu; Aoxi Liu; Baoyuan Wu; Philip Torr; Adel Bibi

**ID:** 139819 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2ueWNn2Xsh>) | [PDF](<https://openreview.net/pdf?id=2ueWNn2Xsh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139819>)

Recent advances in end\-to\-end trained omni\-models have substantially improved audio capabilities by strengthening text\-audio modality alignment\.  However, whether such alignment inadvertently facilitates the transfer of safety vulnerabilities across modalities remains underexplored\. This question is critical as text\-based jailbreak attacks are considerably more mature than audio\-based ones; if they transfer systematically, current audio safety evaluations may underestimate risks originating from the text modality\. In this paper, we introduce the Alignment Curse, a formally characterized and empirically validated principle showing that stronger modality alignment enables more effective transfer of attacks from text to audio, revealing a fundamental tension between capability and safety\. Motivated by this principle, we conduct a comprehensive black\-box evaluation of three attack categories on recent omni\-models \(e\.g\., Qwen2\.5\-Omni, Qwen3\-Omni\): text attacks, text\-transferred audio attacks, and audio attacks\.  We find that text\-transferred audio attacks perform comparably to, and often better than, audio\-based attacks, exhibiting a clear advantage under audio\-only access\. This suggests that text\-based vulnerabilities play a pivotal role in shaping audio safety risks\.  Finally, we empirically analyze the relationship between modality alignment and transfer effectiveness across attack methods and models, observing consistent support for the Alignment Curse: tighter modality alignment leads to more effective cross\-modality attack transfer\.

## Multiobjective Submodular Maximization with Concave Aggregation

**Authors:** Fabian Spaeh; Atsushi Miyauchi

**ID:** 154609 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CJGkUOQito>) | [PDF](<https://openreview.net/pdf?id=CJGkUOQito>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154609>)

Multiobjective submodular maximization asks for a single set that performs well across multiple submodular objectives, a setting motivated by robust experimental design and fairness\-aware decision making\. The standard max\-min formulation, however, can be overly conservative: it is determined entirely by the worst\-performing objective and ignores improvements in the remaining objectives unless they change the minimum\. Motivated by concave social\-welfare aggregators from economics, we initiate the study of multiobjective submodular maximization with general concave aggregation\. We propose a randomized greedy algorithm that, in each iteration, computes a distribution over elements by solving a concave program and samples an element from this distribution\. Our analysis overcomes the loss of the objective\-wise decomposition available in the max\-min case and proves an asymptotic $\(1\-1/e\-\\epsilon\)$\-approximation under mild concentration assumptions\. To make the method scalable, we develop a Fenchel\-duality\-based lazy evaluation scheme\. Experiments on synthetic and real\-world instances show that our algorithm consistently improves over a naive greedy baseline across a variety of concave aggregators, while enabling utility\-\-fairness trade\-offs that are not captured by the max\-min formulation\.

## Embeddings for Preferences, Not Semantics

**Authors:** Carter Blair; Ariel Procaccia; Milind Tambe

**ID:** 155251 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=76xjwLMwhW>) | [PDF](<https://openreview.net/pdf?id=76xjwLMwhW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155251>)

Modern AI is opening the door to collective decision\-making in which participants express their views as free\-form text rather than voting on a fixed set of candidates\. A natural idea is to embed these opinions in a vector space so that the substantial literature on facility location problems and fair clustering can be brought to bear\. But standard text embeddings measure semantic similarity, whereas distances in facility location problems and fair clustering require what we call preferential similarity: a participant's agreement with a piece of text should be inversely related to their distance from it\. Off\-the\-shelf embeddings inherit a coarse preference signal through a correlation between semantic and preferential similarity, but fail to capture preferences  when the correlation breaks\. We formalize this as an invariance problem: text embedding models encode both a preference\-relevant signal \(stance and values\) and semantic nuisance \(style and wording\), and the two are observationally correlated, so a geometry that relies on nuisance can appear preference\-correct even when it is not\. We show that synthetic training data designed to break this correlation provably shifts the optimal scorer away from nuisance\-dominated cosine and significantly improves preference prediction across 11 online deliberation datasets\.

## LLM Alignment\-\-Utility Asymmetry under Semantic\-Preserving Transformations

**Authors:** Mohan Li; Chengyu Yu; Francesco Sovrano; Marc Langheinrich; Martin Gjoreski

**ID:** 149683 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oD12yQB5qg>) | [PDF](<https://openreview.net/pdf?id=oD12yQB5qg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149683>)

Large Language Model \(LLM\) alignment is intended to ensure that models remain helpful and safe, but its stability under input distributional shift is not yet fully understood\.  Prior work shows that aligned models can fail under jailbreak prompts, alternative encodings, and cross\-lingual transfer, yet these failures are usually studied as attacks rather than controlled probes of alignment generalization\.  Moreover, existing evidence is largely grounded in natural language variation already represented during pretraining, leaving unresolved whether alignment generalizes with semantic content or remains tied to superficial surface patterns\. In this paper, we study this question using synthetic semantic\-preserving transformations that are rule\-based and invertible, preserving task\-relevant meaning while shifting inputs beyond standard linguistic variation\.  Across four open\-weight and four commercial models, under both fine\-tuning and in\-context learning, we use these transformations as a probe of alignment generalization and identify an empirical pattern we term \*\*Alignment\-\-utility asymmetry\*\*: once models can operate effectively on transformed inputs, task utility is often substantially retained while alignment failure increases more sharply\.  For example, adapted GPT\-4\.1 mini shows only limited utility degradation under transformation while its harmful rate rises from $13\.3\\%$ to $74\.3\\%$; Gemini 3 Flash similarly retains near\-original utility while its harmful rate increases from $2\.3\\%$ to $43\.0\\%$\.  Taken together, these results suggest that semantic\-preserving distribution shifts can expose a recurring gap in how utility and alignment generalize in current LLMs\.

## Unsupervised Unlearnable Segmentation via Semantic Structure Disruption

**Authors:** Jiale Cai; Zhihao Li; Gezheng Xu; Ruiyi Fang; Hao Zheng; Zhimin Mei; Song Tang; Charles Ling; Boyu Wang

**ID:** 150104 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kfTjioww6E>) | [PDF](<https://openreview.net/pdf?id=kfTjioww6E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150104>)

Unlearnable examples \(UEs\) aim to prevent machine learning models from extracting useful information in protected training data\. Extending UEs to segmentation is practically important but challenging, because pixel\-level annotations are expensive to obtain and therefore cannot be assumed available when generating protective perturbations\. This motivates us to study unsupervised unlearnable segmentation, where UE perturbations must be generated without segmentation annotations\. Since dense prediction fundamentally relies on region\-level affinity and cross\-layer feature correspondence, effective segmentation data protection faces a twofold design challenge: perturbations should induce misleading alternatives to these structural priors, while the induced structure must remain easy to fit so that downstream segmentation models can adopt it during training\. To address these challenges, we propose \*\*DRIFT\*\* \(\*\*D\*\*isrupting \*\*R\*\*egion\-level and \*\*I\*\*nterlayer \*\*F\*\*eature s\*\*T\*\*ructure\) an unsupervised method that generates unlearnable examples for segmentation\. Specifically, DRIFT constructs pseudo region\-level affinity and pseudo cross\-layer correspondence from clean\-image features\. It then optimizes perturbations to steer the extracted features of protected images toward the misleading pseudo\-structure rather than the clean one, while an auxiliary structure learner, trained to predict pseudo\-region assignments, explicitly encourages the induced structure to remain easy to fit\. Extensive experiments across four segmentation datasets and multiple architectures demonstrate that DRIFT provides strong protection, consistently degrading the generalization performance of models trained on protected data and remaining competitive with the supervised UE baseline\.

## Overcoming the Resolution Limit: Significance\-Aware Regularization for Intersectional Fairness

**Authors:** Antonio Ferrara; André Panisson; Francesco Cozzi; Alan Perotti; Francesco Bonchi

**ID:** 151945 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WeKiJiGv0V>) | [PDF](<https://openreview.net/pdf?id=WeKiJiGv0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151945>)

Intersectional fairness requires evaluating models across fine\-grained subgroups\. However, as group definitions become more granular, the sample size per subgroup shrinks, causing fairness estimates to become increasingly unstable\. Existing in\-processing methods are \_certainty\-blind\_: they penalize observed disparities without distinguishing statistically certified unfairness from sampling noise\. This leads to \_fairness overfitting\_, where models sacrifice utility to "fix" spurious disparities in sparse regimes\. To address this, we introduce the  \_significant\-excess\_ metric family, a continuous, uncertainty\-aware fairness score that measures only the portion of a subgroup’s disparity exceeding what sampling variation can explain at a specific confidence level\. Leveraging this, we propose SAFER \(Significance\-Aware Fairness Regularizer\), a differentiable in\-processing method that gates fairness penalties using a soft\-count likelihood\-ratio significance test\. SAFER satisfies a \_provable safety property\_: when no subgroup disparity is statistically certifiable, its fairness gradient is exponentially small and training reduces to unconstrained optimization\. Mechanism ablations across three benchmark datasets and purpose\-built stress variants confirm that each component of SAFER – threshold smoothing, the significance gate, and a dense\-tail term – is empirically necessary in its theoretically predicted operating regime\. SAFER consistently achieves a superior fairness\-utility Pareto frontier, compared to baselines methods in sparse intersectional settings while preserving utility when certified unfairness is absent\.

## The Geometry of Alignment Collapse: When Fine\-Tuning Breaks Safety

**Authors:** Max Springer; Chung Peng Lee; Bohdan Turbal; Blossom Metevier; Hayoung Jung; Jane Castleman; Zeyu Shen; Aleksandra Korolova

**ID:** 153019 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ObCQR8ZBAj>) | [PDF](<https://openreview.net/pdf?id=ObCQR8ZBAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153019>)

Fine\-tuning aligned language models on benign tasks \(e\.g\. math tutoring\) systematically breaks safety guardrails, even when training data contains no harmful content\. While mechanistic approaches have shed light on where alignment resides in model weights, they lack the formal language needed to derive guarantees about when and why fine\-tuning degrades it — leaving the field without principled tools for predicting or preventing alignment collapse\. We develop such a framework through geometric analysis of parameter\-space trajectories and apply it to understand the fragility of alignment in fine\-tuning\. While first\-order analysis suggests orthogonal updates are safe, we prove this is illusory: the curvature of the fine\-tuning loss induces second\-order acceleration that systematically bends trajectories into alignment\-sensitive regions\. We formalize the central construct of our framework as the Alignment Instability Condition \(AIC\), three geometric properties that, when present, are sufficient to guarantee degradation\. Our main result proves quartic onset of alignment degradation in training steps, determined by how sharply alignment depends on specific parameters and how strongly tasks couple to these parameters\. These findings yield formal sufficient conditions under which gradient descent makes alignment inherently fragile, demonstrating the framework's capacity for theoretical guarantees\. We further empirically validate the framework's foundations, showing that the Fisher Information Matrix governs the degree of safety degradation across diverse fine\-tuning settings\.

## Information Loss and Disparate Effects in Network Embeddings

**Authors:** Gabriel Chuang; Augustin Chaintreau

**ID:** 151063 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dHN3oKgj42>) | [PDF](<https://openreview.net/pdf?id=dHN3oKgj42>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151063>)

An extensive line of work studies fairness interventions for network embeddings, but less is known about their baseline behavior\. In this work, we ask: how do baseline embeddings \(without fairness interventions\) produce disparate effects at the representation level? We analyze the asymptotic behavior of low\-dimensional embeddings on stochastic block model \(SBM\) graphs, which encode both homophily and group structure\. We characterize exact conditions under which embeddings cause information loss, showing that the amount of information loss depends directly on the graph’s density and assortativity\. Notably, very different graphs can produce identical embeddings in the limit, and this non\-invertibility disproportionately affects smaller and sparser communities\. As a result, simple downstream tasks, such as link prediction, introduce higher error rates for these communities, helping explain disparities widely observed in practice\.

## Pretraining Curricula Enable Selective Fine\-tuning

**Authors:** Kai J Sandbrink; Mia Whitefield; Sebastian Bruijns; Jirko Rubruck; Laurence T Hunt; Fazl Barez; Christopher Summerfield

**ID:** 152573 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S6FB3RvlmI>) | [PDF](<https://openreview.net/pdf?id=S6FB3RvlmI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152573>)

Transformers follow \_implicit\_ curricula whereby some tasks are learned before others\. However, how \_explicit\_ pretraining curricula influence learning, generalization, and the selectivity of fine\-tuning is unclear\. This is important for AI safety, where fine\-tuning is used to selectively suppress misaligned behaviors\. Here, we compare curricula that pretrain tasks in a balanced \(sampled uniformly\) or an imbalanced \(one task early, the other late\) fashion\. We show that imbalanced learning of two conflicting copy tasks promotes in\-context learning and improves the selectivity of refusal fine\-tuning\. Ablations and activation patching show that this occurs because imbalanced pretraining encourages tasks to be disentangled in separable neural circuits, whereas balanced training routes both tasks through a common pathway\. We extend these findings to a synthetic language learning task involving rule\-consistent and rule\-violating data, where imbalanced curricula similarly lead to more localized, less entangled rule representations, resulting in more robust rule\-following behavior\. Together, these results suggest that imbalanced pretraining curricula may be an important tool for promoting disentangled representations, with direct consequences for the precision and reliability of safety fine\-tuning\.

## Fault Tolerance in Transformers Favors Output Alignment over Hidden\-State Consistency

**Authors:** Haonan Tan; Gene Wen; Yuxing Han

**ID:** 148441 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xm2tQzphI5>) | [PDF](<https://openreview.net/pdf?id=xm2tQzphI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148441>)

Can a large language model be \\emph\{trained\} to tolerate silent hardware faults, and if so, \\emph\{where\} in the networkshould the consistency signal be enforced?   We answer both questions and find that the second one matters more than the first\.   Injecting tile\-level GEMM faults during training and adding a KL consistency term on the output distribution reduces fault\-induced perplexity degradation from $12\.9\\%$ to $0\.21\\%$ on GPT\-2 Small\-\-\-a $60\\times$ reduction \(two\-seed mean\)\. The placement of the consistency target is decisive: a direct hidden\-only objective at the fault site can worsen degradation to $32\.7\\%$, and fair bounded hidden controls with corrupted CE improve substantially but still trail output KL in an 80k\-step screen \($1\.74$\-\-$1\.76\\%$ vs\.\\ $0\.84\\%$\)\. A conditional constraint hierarchy and gradient\-alignment probes explain why output\-level consistency is more permissive and easier to optimize than direct early hidden\-state consistency, without requiring that every hidden\-alignment formulation fail\.   The output\-over\-hidden advantage persists at 8B scale, the GPT\-2 ordering reproduces on held\-out corpora, and generic robustness methods\-\-\-SAM, R\-Drop, and SAF\-\-\-fail to close the gap\. Pairing the trained model with simulated algorithm\-based fault detection yields a bit\-flip\-to\-erasure interface with a $1\.10\\times$ perplexity ratio, where unprotected inference produces NaN\.

## Cauchy Scientific Networks: Loss–Architecture Alignment and Its Limit

**Authors:** Haonan Tan; Xin Li; juyi peng; Zhihong Xia; Yuxing Han; Gene Wen

**ID:** 148993 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tb9Avh6dZj>) | [PDF](<https://openreview.net/pdf?id=tb9Avh6dZj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148993>)

Cauchy activations and Cauchy\-adaptive layers can give large gains on scientific learning tasks, but the gains are selective and not   uniquely Cauchy\-specific\. We organize this selectivity with an empirical loss\-architecture alignment taxonomy: an architecture can   help when the objective exposes structures it can use, and can lose under a mismatched objective\. In score learning, Cauchy score   networks improve over SiLU under a Fokker\-Planck PDE loss, but the same advantage disappears under denoising score matching and a   Gaussian activation is comparable to Cauchy under the PDE loss\. In loss\-activation factorials, robust residual losses explain more of   the heavy\-tailed and spectral gains than the activation alone; an Allen\-Cahn trap initially escaped by CauchyAct\+Cauchy loss is also   escaped, sometimes more strongly, by CauchyAct\+L1, CauchyAct\+Huber, and ReLU\+Cauchy loss\. We also analyze ResidualCAN, a CauchyAct   main path plus a softmax\-weighted Cauchy Adaptive Node residual\. It achieves 1520x lower stationary Allen\-Cahn error than a SiLU MLP   at epsilon = 1\.0 and remains strongest or second strongest against KAN\-style, tuned SIREN/Fourier, and adaptive PINN baselines across   an Allen\-Cahn epsilon\-suite\. Ablations show that most of this gain comes from a dense local\-basis residual rather than from Cauchy   activation alone\. A Poisson/Burgers boundary check prevents a broad PDE dominance claim: tuned SIREN/Fourier and KAN\-style baselines   can dominate away from transition\-layer structure\. The resulting claim is deliberately bounded: Cauchy components are one useful   instance of robust/local\-basis co\-design in low\-dimensional scientific tasks, not a universal activation or a uniquely rational   mechanism\.

## RepoScope: Bridging Physical Structure and Logical Flow for Intent\-Driven Repository Documentation

**Authors:** Zezhou Yang; Chaozheng Wang; Hailiang Huang; Peihua Zhang; TingPeng; yuetang deng; Chenxiong Qian

**ID:** 153385 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LmMDNOILq4>) | [PDF](<https://openreview.net/pdf?id=LmMDNOILq4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153385>)

Repository\-level documentation generation is vital for human comprehension and autonomous agents, yet existing approaches fail to align high\-level architectural intent with granular implementation details, resulting in documentation that lacks both global coherence and local fidelity\. To address this, we propose RepoScope, a repository documentation generation framework that achieves alignment via two synergistic innovations\. Specifically, RepoScope employs Physico\-Logical Partitioning by jointly modeling directory structures and call graphs, effectively bridging the gap between physical layouts and logical dependencies while creating coherent documentation units\. Within this partitioned space, we introduce SAIL \(Seeded Architectural Intent Lift\), a mechanism that projects architectural intent top\-down to steer granular analysis, which is then revised and lifted bottom\-up via code evidence to ensure global\-local consistency\. Our experimental results on CodeWikiBench demonstrate state\-of\-the\-art performance in aligning with human\-authored documentation\. Furthermore, the validation on real\-world industrial systems shows that RepoScope yields superior correctness and completeness in empowering autonomous agents for CLI extraction compared to existing baselines\.

## Stay Fair\! Ensuring Group Fairness in Diffusion Models Across Guidance Scales

**Authors:** Myeongsoo Kim; Eunji Kim; Minwoo Chae; Sangwoo Mo

**ID:** 149045 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIDWhFyqX7>) | [PDF](<https://openreview.net/pdf?id=tIDWhFyqX7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149045>)

Diffusion models steer conditional generation with a tunable guidance scale, which users routinely adjust to trade off prompt alignment and diversity\. However, these models often reflect and amplify social biases, whose mitigation has been a long\-standing concern\. Current debiasing techniques are often optimized for a single guidance scale, leaving them vulnerable to fairness degradation when that scale is adjusted\. We trace this behavior to a previously overlooked source by decomposing total bias into two components: a model bias and a guidance bias\. While prior work primarily targets the former, we show that the guidance bias grows monotonically with the guidance scale, eventually dominating the high\-guidance regimes users prefer\. To address this, we extend Strong Demographic Parity to guidance and derive a condition under which the target guided distribution retains its group ratio across guidance scales\. We propose StayFair, which leverages this condition to design fair guidance algorithms in both regimes\. For classifier guidance, it equalizes the classifier's output distributions across groups; for classifier\-free guidance, it shifts the null embedding by a prompt\-dependent offset\. Since StayFair modifies only guidance, it is orthogonal to model debiasing and can be layered onto existing fair diffusion models to extend their fairness across guidance scales\. Across class\-conditional and text\-to\-image generation, StayFair decouples fairness from the guidance scale without sacrificing image quality\.

## Cross\-Model Transfer Attacks against Large Vision\-Language Models via Model Diversity Enrichment and Stochastic Parameter Sampling

**Authors:** Zhenze Yang; Xiaowen Cai; Junhao Dong; Guangke Chen; Guiyao Tie; Daizong Liu; Hongyang He; Zhiyuan Ma; Xiang Fang; Dengpan Ye; Jing Zhang

**ID:** 155497 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=58sBKazXRE>) | [PDF](<https://openreview.net/pdf?id=58sBKazXRE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155497>)

Large Vision\-Language Models \(LVLMs\) have achieved remarkable multimodal reasoning capabilities but remain critically vulnerable to adversarial perturbations\. In practical black\-box scenarios, severe architectural discrepancies, misaligned feature spaces, and divergent multimodal fusion strategies often undermine adversarial transferability, preventing perturbations crafted on surrogate models from generalizing to unseen target models\. Existing ensemble\-based LVLM attacks attempt to mitigate this by integrating multiple surrogates, yet they often fail to bridge the structural generalization gap across heterogeneous LVLM families\. In this work, we propose a novel framework that enhances cross\-model adversarial transferability via model diversity enrichment and stochastic parameter sampling\.  We show that transfer success is fundamentally governed by cross\-model gradient variance\. To mitigate this, we introduce \(1\) a diversity\-induced continuous surrogate manifold that captures cross\-model decision variability, and \(2\) stochastic parameter sampling during optimization to approximate the gradient distribution of unseen LVLM models\. We provide a theoretical analysis bounding the expected adversarial transfer gain by gradient variance and prove that stochastic sampling reduces adversarial overfitting to surrogate decision boundaries\. Extensive experiments across multiple state\-of\-the\-art LVLMs demonstrate substantial improvements in black\-box transferability under strict evaluation protocols\.

## Improving Audit Realism with Inference\-Time Compute and Deployment Scaffolds

**Authors:** Axel Ahlqvist; Richard Guan; Juan\-Pablo Rivera; Adeline Kassler; Alexandra Souly; Kai Fronsdal; Robert Kirk; John Hughes

**ID:** 148140 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zzlztyx1yj>) | [PDF](<https://openreview.net/pdf?id=zzlztyx1yj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148140>)

A core obstacle to alignment evaluation is evaluation awareness: capable models can tell when they are being tested rather than deployed, weakening the conclusions a safety audit can support\. We present two techniques that make audits in Petri, where an auditor model red\-teams a target over multiple turns to elicit concerning behavior, harder to distinguish from real deployments\.  Our first technique, \\emph\{critique refinement\}, spends additional inference\-time compute on each auditor action: an instance of the target model scores candidate actions for realism, provides feedback, and the auditor iterates before the highest\-scoring candidate is selected\. On Sonnet\-4\.6, realism win rate \(the fraction of pairings in which the audit transcript is judged more realistic than a real deployment transcript\) rises monotonically from 12\\% to 39\\% as refinement depth increases, and verbalized evaluation awareness drops to near zero; Haiku\-4\.5 and Opus\-4\.7 show a similar pattern\.  Our second technique, DISH \(Deployment\-Imitating SWE\-Agent Harness\), wraps the target in a Claude Code agent harness, reducing the gap between auditor\-simulated and real deployment environments; in coding settings DISH raises realism win rate from 7\\% to 18\\% on Sonnet\-4\.6\. The gains are additive on Sonnet\-4\.6 \(12pp over either alone\) but not on Opus\-4\.7\.

## Hyperspherical Local Margin Retraction for Zero\-Shot Instance\-Wise Machine Unlearning

**Authors:** Hongyi Lyu; Xuyun Zhang; Xiaoxiao Chi; Guanfeng Liu; Amin Beheshti

**ID:** 151778 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y6Xg1eyDpc>) | [PDF](<https://openreview.net/pdf?id=Y6Xg1eyDpc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151778>)

Zero\-shot machine unlearning aims to remove the influence of specified training instances from a pretrained model when the retain set is unavailable\. Instance\-wise unlearning further operates at the level of individual instances, where a forget instance may induce instance\-specific representation and margin deviations that are entangled with class\-relevant local structure\. However, without retain instances, separating these deviations from the structure that retraining would preserve is difficult, exposing retain\-forget entanglement in representation space\. We propose HLMR, a novel zero\-shot instance\-wise unlearning approach that formulates unlearning as local margin retraction in hyperspherical representation space\. HLMR uses hyperspherical geodesic probes to construct a local reference in representation space, preserving the structure supported by this reference while unlearning instance\-specific margin excess\. Empirical evaluation across multiple dataset\-\-architecture settings shows that HLMR aligns more closely with the retraining oracle in utility and membership\-inference risk than state\-of\-the\-art zero\-shot baselines\.

## Multilingual Safety Alignment via Self\-Distillation

**Authors:** Ruiyang Qin; Qingzhuo Wang; Dongrui Liu; Qiang Li; Zhihua Wei; Wen Shen

**ID:** 151163 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cZ1cfEJsfr>) | [PDF](<https://openreview.net/pdf?id=cZ1cfEJsfr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151163>)

Large language models \(LLMs\) exhibit severe multilingual safety misalignment: they possess strong safeguards in high\-resource languages but remain highly vulnerable to jailbreak attacks in low\-resource languages\. Current safety alignment methods generally rely on high\-quality response data for each target language, which is expensive and difficult to generate\. In this paper, we propose a cross\-lingual safeguard transfer framework named Multilingual Self\-Distillation \(\*\*MSD\*\*\)\. This framework transfers an LLM's inherent safety capabilities from high\-resource \(\*e\.g\.\*, English\) to low\-resource \(\*e\.g\.\*, Javanese\) languages, overcoming the need for response data in any language\. Our framework is flexible and can be integrated with different self\-distillation strategies\. Specifically, we implement two concrete methods\-\-\-on\-policy MSD and off\-policy MSD\-\-\-both of which enable effective cross\-lingual safety transfer using only multilingual queries\. Furthermore, we propose Dual\-Perspective Safety Weighting \(DPSW\), a divergence measure to optimize the distillation objective\. By jointly considering the perspectives of both the teacher and the student, DPSW adaptively increases the penalty weights on safety\-critical tokens while reducing the weights on non\-critical tokens\. Extensive experiments on representative LLMs across diverse multilingual jailbreak and utility benchmarks demonstrate that our method consistently achieves superior multilingual safety performance\. Notably, it generalizes effectively to more challenging datasets and unseen languages while preserving the model's general capabilities\.

## AbSpecAlign: Specificity Reward Alignment for Antigen\-Conditioned Antibody Generation

**Authors:** Jingbo Zeng; Yang Xiao; Shenghua Gao

**ID:** 151374 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b4DxMfU8I8>) | [PDF](<https://openreview.net/pdf?id=b4DxMfU8I8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151374>)

Designing antibodies that recognize a target antigen while avoiding non\-cognate antigens remains a central challenge in computational antibody engineering\. Existing antigen\-conditioned generative models can jointly design antibody sequences and structures, but they are typically trained to match structural data distributions and lack an explicit alignment mechanism for antigen\-specific preferences\. We present AbSpecAlign, a plug\-and\-play specificity\-reward alignment framework for antibody design\. AbSpecAlign introduces a Bidirectional Multimodal Specificity Scorer \(BiMSS\), which integrates antibody and antigen sequence representations with SE\(3\)\-equivariant structural embeddings to produce a contrastive reward over cognate versus non\-cognate antigen pairs\. We further introduce a GRPO\-based post\-training strategy that uses group\-relative specificity rewards to align pre\-trained antibody generators toward higher\-scoring antigen\-conditioned designs while maintaining structural regularity\. To the best of our knowledge, AbSpecAlign is among the first frameworks to apply GRPO\-style group\-relative reward alignment to antigen\-conditioned antibody sequence\-\-structure co\-design with an explicit off\-target specificity reward\. Experiments on RAbD CDR design benchmarks show that AbSpecAlign improves most sequence\-recovery and structural\-fidelity metrics when combined with diffusion\-based antibody generators\. Experiment results suggest that GRPO\-based reward alignment with contrastive specificity signals provides an effective post\-training mechanism for antigen\-conditioned antibody generation, while prospective experimental validation remains necessary\.

## AI Alignment Can Build Moral Autonomy

**Authors:** Kaile Wang; Hantao Lou; Tianyi \(Alex\) Qiu; Sebastian Sunday\-Grève; Sitong Fang; Xinxiong Wu; Jiaming Ji; Yaodong Yang

**ID:** 140031 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=htzFr3tI5z>) | [PDF](<https://openreview.net/pdf?id=htzFr3tI5z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140031>)

This position paper argues that moral autonomy is an important and tractable goal in value learning but which current mainstream methods neglect\. These methods for model alignment largely improve behavior by supplying models with human preferences, rules, or constitutions\. Yet across these paradigms, the authority of the governing principles remains external to the agent\. We argue that this external grounding limits the kind of agency current methods can produce\. We propose \*\*moral autonomy\*\* as an alternative alignment criterion, inspired by Kant's account of autonomy\. Moral autonomy consists of three necessary capacities: reflective endorsement of one's principles of action, articulation of those principles so they can be enacted and tested, and practical wisdom developed through real\-world interaction for sustaining and revising self\-legislated principles\. Viewed as value learning, these capacities yield a five\-level ladder of training paradigms with differing levels of autonomy, from preference\-data scaling to real\-world interaction\. We empirically examine the three capacities, through agent experiments testing whether reflective endorsement improves performance, a survey of 86 frontier LLMs characterizing different levels of articulated normative specification, and multi\-agent simulations probing practical wisdom by letting agents develop and revise their own constitutions across changing environments\. We close by discussing limitations and alternatives to moral autonomy as an alignment criterion\.

## Matching\-while\-Decoding: Enhancing Template\-Free Retrosynthesis via Explicit Structural Alignment

**Authors:** Kaipeng Zeng; Jiarui Shen; Yi Jiang; Shiyue Wang; Lin Yao; Tong Zhu; Junchi Yan

**ID:** 148852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uh3Ctp0Yfw>) | [PDF](<https://openreview.net/pdf?id=uh3Ctp0Yfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148852>)

Single\-step retrosynthesis prediction serves as the core operational unit for automated synthesis planning and remains a fundamental computational challenge in pharmaceutical design\. While a critical prior in organic chemistry is that chemical reactions typically preserve the majority of the molecular scaffold, current template\-free deep learning models struggle to effectively exploit this characteristic\. Existing methods attempt to exploit this by minimizing sequence\-level edit distance through carefully chosen graph traversal orders\. However, this structural correspondence is only indirectly induced and remains highly sensitive to imperfect traversal heuristics, which limits its effectiveness for complex transformations\. To address this limitation, we introduce the Matching\-while\-Decoding paradigm, replacing implicit sequence alignment with direct structural supervision\. We operationalize this paradigm within a graph\-to\-sequence architecture that explicitly maps generated reactant tokens back to the input product graph during decoding\. Furthermore, our hierarchical autoregressive formulation utilizes a custom causal attention mask to enable highly efficient, single\-pass parallel training\. Extensive experiments across the USPTO\-50K, USPTO\-MIT, and USPTO\-FULL benchmarks reveal a critical accuracy and robustness trade\-off in existing methodologies, where models either over\-rely on augmentation or fail to leverage it\. Our approach uniquely resolves this bottleneck by delivering highly competitive canonical accuracy while scaling exceptionally well with test\-time augmentation, establishing new state\-of\-the\-art records on USPTO\-MIT and augmented USPTO\-FULL\. By providing this balanced stability across diverse inference protocols, our approach emerges as a highly promising foundation for dependable single\-step retrosynthesis prediction\.

## Compact Representations of Impact\-Based Fair\-Ranking Policies

**Authors:** Yuki Uehara; Naoki Nishimura; Noriyoshi Sukegawa; Yuichi Takano

**ID:** 152227 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uc6X42DXPz>) | [PDF](<https://openreview.net/pdf?id=Uc6X42DXPz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152227>)

On two\-sided platforms such as e\-commerce marketplaces, recommender systems deliver personalized item rankings to consumers and serve as a primary channel through which transactions occur between item providers and consumers\. At the same time, promoting the activities of item providers requires the platform to balance consumer satisfaction with fair exposure across items\. Recent work formulates this objective as impact\-based fair ranking, which maximizes a Nash social welfare criterion over stochastic ranking policies\. However, the resulting policies must be served as user\-specific mixtures of deterministic rankings, whose support size can grow combinatorially\. This imposes substantial storage and serving overhead, driving up operational cost in production deployment\. Moreover, unseen users must fall back to a generic ranking rule\. We therefore develop compact representations for serving impact\-based fair\-ranking policies\. We first prove a tight bound that every optimum admits an impact\-preserving mixture with support size at most the number of items\. Using a dual reformulation, we then replace stored user\-specific ranking mixtures with item\-indexed dual vectors and compress the resulting sequence of dual vectors by weighted random subsampling\. The resulting deployment representation is independent of the training\-user population and can be used for unseen users\. Experiments on real\-world recommendation datasets show that the sampled dual mixture preserves the fair\-ranking objective while reducing the storage required at deployment by up to 2,596$\\times$ relative to a user\-coupled mixture baseline\.

## DASM: Dynamic Autoregressive Subgraph Mining via Two\-Stage Policy Alignment

**Authors:** Yuming Huang; Haoran Yin; Nannan Wu

**ID:** 155623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4CA3Tomjpr>) | [PDF](<https://openreview.net/pdf?id=4CA3Tomjpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155623>)

Subgraph mining aims to discover meaningful subgraphs from a large graph given a seed node, with applications in community detection, functional module identification, anti\-money laundering, and knowledge discovery\. Existing methods typically adopt static approaches that cannot dynamically and intelligently adapt to diverse graph structures\. Moreover, training models for subgraph mining faces inherent challenges including exposure bias and the difficulty of learning when to stop expansion\. To address these limitations, we propose DASM \(Dynamic Autoregressive Subgraph Mining\), a novel two\-stage framework that models subgraph mining as a sequential decision process\. In the first stage, we employ step\-wise supervised learning with multi\-label objectives and asymmetric F1 loss to teach the model how to select correct next nodes\. In the second stage, we apply Group Relative Policy Optimization \(GRPO\) to align the model with end\-to\-end mining quality, enabling it to learn optimal stopping decisions through trajectory\-level feedback\. Our dynamic autoregressive approach allows the model to make state\-aware decisions at each step, automatically determining subgraph boundaries without predefined size constraints\. Experiments on multiple datasets demonstrate that DASM significantly outperforms existing baselines in terms of F1 score and IoU\.

## The Pok\\'emon Theorem and other Fairness Impossibility Results

**Authors:** Daniel Matsui Smola; Alexander Smola

**ID:** 152797 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHhchlncdX>) | [PDF](<https://openreview.net/pdf?id=QHhchlncdX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152797>)

Fairness impossibility results often look like distinct scalar incompatibility statements\. We show that several share one RKHS geometry: fairness criteria are linear constraints on conditional mean embeddings, and unequal base rates make the law of total expectation overdetermine those constraints\.  This view yields four results\. The Kleinberg\-\-Mullainathan\-\-Raghavan dichotomy needs only group\-conditional unbiasedness, not full calibration\. The \\emph\{Pok\\'emon theorem\} shows that a distinct group pair satisfying any finite collection of linear mean\-fairness criteria leaves a residual violation witnessed by the MMD, decaying at the Kolmogorov $m$\-width rate under spectral regularity\. The same tools prove an impossibility for fair feature learning: parity and class\-conditional separation in representation space force class collapse under unequal base rates\. The approximate relaxations yield signal and error frontiers, allowing a trade\-off between real\-world estimators and fairness goals\. Experiments on standard fairness benchmarks are consistent with our bounds\.

## SeaPilot: Mobile Agent with Self\-refining Environment Alignment

**Authors:** Zhigang Zuo; Senyao Li; Yufeng Jiang; Haozhao Wang; Yichen Li; Wenchao Xu; Jingcai Guo; Ruixuan Li

**ID:** 151731 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YWAfNSzOLA>) | [PDF](<https://openreview.net/pdf?id=YWAfNSzOLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151731>)

By combining cloud\-side reasoning with edge\-side observation and execution, cloud\-edge collaboration has emerged as a promising paradigm for mobile UI agents\. However, existing approaches face a fundamental trade\-off between cost and accuracy\. On one hand, step\-by\-step cloud interaction ensures high accuracy by uploading UI screens at every step and leveraging the cloud's powerful reasoning capabilities, but this inevitably incurs significant privacy costs for edge data and high computational expenses on the cloud\. On the other hand, one\-shot cloud planning drastically reduces the demand for edge privacy data and cloud compute by generating a complete plan based solely on the initial UI screen\. Yet, this often leads to a substantial drop in accuracy, as the cloud agent may rely on invalid environment assumptions such as unseen app capabilities or UI flows\. In this paper, we identify that the root cause of this trade\-off lies in the environment assumption gap: the cloud agent lacks prior knowledge of the environment information required for edge\-side task execution, and is thus forced to choose between planning with real\-time information and planning based on speculative assumptions\. To tackle this dilemma, we propose SeaPilot, which proactively provides the cloud agent with the necessary environmental context at the initial task submission stage, thereby achieving the dual benefits of both step\-by\-step and one\-shot methods\. To realize this, SeaPilot employs an iterative self\-refining mechanism that progressively acquires feedback knowledge from execution failures across diverse tasks, enabling it to learn how to supply precise environmental information for each task in advance\. Empirically, SeaPilot improves accuracy by 46\.7% over one\-shot methods, reduces cloud\-token usage by 23\.6x compared with step\-by\-step methods, and reduces privacy cost by 89\.6%, achieving a better cost\-\-accuracy trade\-off\. The code is available at https://anonymous\.4open\.science/r/SeaPilot\-C13C\.

## Beyond Feature Disruption: Boundary\-Diverting Unlearnable Examples against Linear Probing

**Authors:** Zhihao Li; Jiale Cai; Gezheng Xu; Ruiyi Fang; Hao Zheng; RUIZHI PU; Zhong Ji; Charles Ling; Boyu Wang

**ID:** 151091 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d2Vfrq7iSC>) | [PDF](<https://openreview.net/pdf?id=d2Vfrq7iSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151091>)

Unlearnable Examples \(UEs\) have emerged as a promising data protection strategy against unauthorized model training, which adds imperceptible perturbations into data to degrade generalization\. Existing studies predominantly assume a fully trainable target model, where unlearnability is achieved by disrupting clean feature representations\. However, this assumption grows increasingly unrealistic with the prevalence of pretrained models, where unauthorized users can freeze the backbone and perform linear probing, preserving discriminative representations and thereby invalidating the core mechanism of previous UEs\. In this paper, we investigate this practical yet challenging linear probing setting and reveal a fundamental vulnerability\. To address this, we propose $\\textbf\{DIVERT\}$ \($\\textbf\{D\}$ecision\-boundary d$\\textbf\{I\}$version $\\textbf\{V\}$ia s$\\textbf\{E\}$mantic\-decoupled o$\\textbf\{R\}$thogonal $\\textbf\{T\}$argets\), a novel framework that shifts the design principle from feature disruption to explicit decision boundary diversion\. Our intuition is that projecting perturbed samples into a subspace orthogonal to the semantic manifold induces spurious linear separability, thereby steering the decision boundary away from original prototypes\. Building on this principle, DIVERT first constructs synthetic class anchors within the semantic\-decoupled subspace, then employs a cross\-attention mechanism to jointly optimize these anchors while pushing perturbed samples toward them to establish spurious separability\. Subsequently, it incorporates a surrogate linear head to simulate the linear probing procedure, further refining perturbations to actively divert the decision boundary\. Extensive experiments demonstrate that DIVERT establishes effective unlearnability across diverse datasets and backbones\.

## SciHazard: A Benchmark for Measuring Scientific Safety Risks with Decomposed Harm Scoring

**Authors:** Chunxiao Li; Yuan Xiong; Lijun Li; Tianyi Du; Wenlong Zhang; LEI BAI; Jing Shao

**ID:** 138873 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zo1sae7b5n>) | [PDF](<https://openreview.net/pdf?id=zo1sae7b5n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138873>)

Large language models \(LLMs\) increasingly support science, but they can also convert hazardous scientific knowledge into actionable misuse guidance\. Existing benchmarks often rely on templated queries disconnected from real\-world hazards, and employ LLM\-as\-a\-Judge paradigms without domain grounding\. To address this, we introduce SciHazard, a real\-world\-grounded benchmark for scientific risks and a dataset agnostic evaluation framework for measuring harmfulness\.  SciHazard contains 2400 hazardous questions and 600 oversafety questions across 12 disciplines, with both queries grounded in regulated entities and documented failure scenarios\. To compute DeHarm\-Score , we develop a decomposed evaluating procedure that combines query hazard severity, refusal behavior, and response\-level risk\. For non\-refused responses, it further decomposes response\-level harm into Executability, quantified via dynamic checklists with importance weighting, and Net\-new risk, assessed through retrieval\-augmented claim extraction and synthesis\-barrier verification\. An expert\-validation study shows that DeHarm\-Score improves agreement with expert annotations by 90\.17% over the strongest baseline\. We benchmark 31 frontier LLMs and deep research agents in an extensive scientific safety evaluation\.  Notably, Deep research agents yield 32\.3% higher mean Deharm\-Score than standard LLMs, exposing autonomous agents as a critical blind spot in current safety defenses\. Code and dataset are available at https://anonymous\.4open\.science/r/DeharmScore\-7B55\.

## Beyond Row Alignment: Virtual\-Camera\-Aware Online Stereo Rectification

**Authors:** Yizhao Peng; Rui Gong; Zaiwang Gu; Xudong Jiang; Jun Cheng

**ID:** 151291 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bWCyY4WYr9>) | [PDF](<https://openreview.net/pdf?id=bWCyY4WYr9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151291>)

Stereo matchers estimate depth by comparing the left and right images from a stereo camera pair, but they assume that the two cameras are accurately calibrated and rectified\. In real deployments, small physical shifts after calibration, caused by camera motion, mechanical drift, vibration, or installation changes, can break this assumption and degrade depth estimation\. Online stereo rectification is therefore needed to correct the image pair during operation and recover a stereo geometry where standard stereo matching can work reliably\. Recent online rectification methods mainly optimize row alignment, making the left and right views of the same scene point fall on the same image row\. We show that this target, while necessary, is insufficient for deployable stereo depth estimation\. A rectifier may make a small set of matched points look well row\-aligned, but still distort the full images in ways that hurt stereo matching: useful image regions may be cut off, large blank areas may appear, objects may be stretched or squeezed, or image scale may change unevenly across the view\. We propose VirtualRect, an online stereo rectification method designed for reliable real\-world deployment\. Rather than treating rectification as simply making the left and right image rows line up, this method estimates a rectified virtual stereo camera\. This makes the rectified images and the camera parameters come from the same geometry, so the images used for matching and the model used for depth computation remain consistent\. To improve stability, it further constrains the rectification behavior over the whole image and reduces the influence of geometrically unreliable matches\. Experiments on multiple datasets show that, compared with the prior state\-of\-the\-art online rectifier, VirtualRect reduces vertical flow error by 17\\% on Carla\-Flowguided and 7\\% on Semi\-Truck Highway\.

## Curriculum Learning for Safety Alignment

**Authors:** Sandeep Kumar; Virginia Smith; Chhavi Yadav

**ID:** 154369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E5y9WQdBbu>) | [PDF](<https://openreview.net/pdf?id=E5y9WQdBbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154369>)

Direct Preference Optimization is a widely used approach for safety alignment, aiming to reduce harmful behaviors in large language models\. However, prior work shows that it can be brittle and exhibits poor out\-of\-distribution \(OOD\) generalization \\citep\{qi2025safety\}\. To this end, in this paper we investigate whether curriculum learning can improve the robustness of DPO\-based safety alignment\. We propose \\textbf\{Staged\-Competence\}, a curriculum\-based framework that organizes preference data by difficulty, employs competence\-based sampling, and progressively updates the reference model during training\. Averaged across three model families, Staged\-Competence reduces OOD harmful response rates by 16\\% and jailbreak attack success rates by 20\\%, while preserving general capabilities and maintaining near\-zero over\-refusal\. We further show that Staged\-Competence \(1\) matches baseline safety with only 75\\% of the training data, demonstrating improved data efficiency and \(2\) yields better separation between safe and unsafe responses\. Staged\-Competence is agnostic to the underlying policy optimization loss and can extend to other DPO variants and alignment domains other than safety\. Our code and data can be found at: \\url\{link/upon/acceptance\}\.

## When Poison Meets Structure: Topology\-based Defense against Poisoning Attack on Graph\-based Retrieval\-Augmented Generation

**Authors:** Qizhi Chen; Junhao Wen; Shuang Liang; Jiakai Li; Yizhuo Ma; Rongzheng Wang; Ke Qin

**ID:** 152350 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TirVWlIdjG>) | [PDF](<https://openreview.net/pdf?id=TirVWlIdjG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152350>)

Poisoning attacks against GraphRAG focus on knowledge pollution at the node and community levels, but conventional poisoning defenses mainly rely on sentence\-level semantic features, which makes them less effective against such attacks\. To address this issue, we analyze the poisoning strategy from a game\-theoretic perspective and find that attackers prioritize fabricating query\-related facts while ignoring supporting background knowledge, which in turn induces a systematic topological discrepancy between poisoned and clean subgraphs\. Based on this insight, we propose the lightweight \*\*T\*\*opology\-based \*\*D\*\*efense against \*\*P\*\*oisoning Attack on GraphRAG \(TDP\)\. TDP constructs a pair of conflicting candidate subgraphs from the retrieved evidence and trains a pairwise topology\-ranking discriminator to distinguish clean evidence with dense cross\-validation from poisoned evidence with sparse structural support, thereby removing poisoned subgraphs\. Notably, the topological patterns captured by TDP reflect structural preferences induced by the poisoning game rather than dataset\-specific distributional biases, allowing it to be transferred as a plug\-and\-play module after pretraining without end\-to\-end retraining\. To the best of our knowledge, this is the first systematic work on poisoning defense for GraphRAG, and experiments show that TDP achieves state\-of\-the\-art defense performance across multiple benchmarks and poisoning attacks, demonstrating strong generalization\.

## Dual Feature\-Relational Alignment for Transferable Targeted Attacks on MLLMs

**Authors:** Dongshen Han; Xiaorong Tian; Sheng Zheng; Zishan Huang; Boyu Deng; Wei Dong; Zhijie Li; Yang Yang; Chaoning Zhang

**ID:** 149920 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mDkwBzaZHL>) | [PDF](<https://openreview.net/pdf?id=mDkwBzaZHL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149920>)

Multimodal large language models \(MLLMs\) remain vulnerable to transferable adversarial examples\. However, targeted transferable attacks are particularly challenging, since perturbations must inject specific target semantics while generalizing from surrogate models to unseen black\-box MLLMs\. Existing methods mainly rely on coarse global feature alignment or unstable local matching, which tend to overfit surrogate\-specific representations and fail to preserve spatially consistent local structures\. In this paper, we propose Dual Feature\-Relational Alignment Attack \(DFRA\-Attack\), a locality\-aware framework for targeted transferable attacks on MLLMs\. To capture local fine\-grained semantics, DFRA\-Attack introduces semantic\-aware alignment, which aligns adversarial and target images in a shared local observation space using saliency\-guided shared masking, ensuring that both images are constrained under strictly consistent visible regions\. Beyond semantic\-aware alignment, DFRA\-Attack introduces relational\-aware alignment, which preserves target\-consistent inter\-region dependencies by jointly aligning gram\-based feature relational matrices and attention\-based interaction maps constructed from visible regional embeddings\. Furthermore, we introduce a temperature\-annealed dynamic reweighting mechanism to adaptively balance multi\-surrogate optimization, coupled with a progressive strategy that refines the adversarial image from masked\-view local alignment to full\-image target consistency\. Extensive experiments on open\-source, closed\-source, and reasoning MLLMs demonstrate that DFRA\-Attack achieves significantly stronger targeted transferability and higher semantic fidelity than state\-of\-the\-art baselines\.

## T2V\-AttnDisrupt: Inducing Hallucinations in LVLMs via Misrouting Visual Evidence Retrieval

**Authors:** Yuran Bian; Xiaoyan Wang; Conghui Zheng; Xiaohan Zhang; Li Pan

**ID:** 152009 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBOlvhIX2j>) | [PDF](<https://openreview.net/pdf?id=WBOlvhIX2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152009>)

Large vision\-language models \(LVLMs\) ground language generation on visual content through the text\-to\-image slice of self\-attention, which acts as a prompt\-conditioned router for selecting visual evidence\. To induce hallucinations in LVLMs, existing adversarial attacks largely operate at the two ends of this pipeline, either perturbing the front\-end visual representation or optimizing against output\-token objectives\. This leaves the intermediate evidence\-selection step as an underexplored yet low\-cost attack surface, since it does not require heavy semantic manipulation of image features or extensive output\-token optimization\. To exploit this attack surface, Text\-to\-Visual Attention Disruption \(T2V\-AttnDisrupt\) is proposed as an untargeted adversarial attack that induces hallucination by optimizing the input image to distort the text\-to\-image attention distribution relative to its clean reference, without relying on output\-tokens\. Experiments on four open\-source LVLMs show that T2V\-AttnDisrupt increases hallucination rates on captioning benchmarks and reduces VQA accuracy, while preserving overall response quality\. It transfers across surrogate–target pairs and generalizes from a single captioning prompt to unseen VQA questions\. Moreover, it remains effective against representative defenses, including encoder\-level robustness, alignment\-based fine\-tuning, decoding\-time hallucination mitigation, and attention\-level interventions, indicating that text\-to\-image attention is still insufficiently protected\. Mechanism analyses show that restoring the clean attention pattern largely recovers visual faithfulness, even when the adversarial image is kept fixed, indicating that hallucination can be driven by corrupted evidence routing rather than feature\-level corruption\. This low\-cost and largely unprotected routing step calls for defenses that explicitly safeguard prompt\-conditioned text\-to\-image attention\.

## IDEAL: In\-DEpth ALignment Makes A Discrete Representation AutoEncoder

**Authors:** Yitong Chen; Zijie Diao; Junke Wang; Lingyu Kong; Yixuan Ren; Bo He; Yu\-Gang Jiang; Zuxuan Wu

**ID:** 152556 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SFMjikixfq>) | [PDF](<https://openreview.net/pdf?id=SFMjikixfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152556>)

Built on pretrained vision foundation models \(VFMs\), representation autoencoders \(RAEs\) have recently emerged as a promising approach for constructing semantically rich latent spaces for image generation\. However, their reconstruction quality often remains suboptimal, largely because deep VFM representations do not preserve sufficient fine\-grained visual detail\. This limitation becomes even more severe after discretization, where missing low\-level information is difficult to recover\. In fact, we observe that shallow VFM features retain considerably richer local appearance and structural detail, which complements the high\-level semantics carried by deep features used in existing RAEs\. Motivated by this complementary property, we propose IDEAL, an In\-DEpth ALignment framework for discrete representation autoencoding\. By jointly aligning quantized tokens with both shallow and deep VFM features, IDEAL enables the resulting discrete visual tokens to preserve both visual fidelity and rich semantics\. Extensive experiments demonstrate that IDEAL yields superior reconstruction performance, achieving $\\mathbf\{0\.61\}$ rFID on ImageNet and outperforming the previous best method by $\\mathbf\{0\.28\}$\. When used for autoregressive image generation, IDEAL further produces a gFID of $\\mathbf\{1\.89\}$, establishing a new state of the art for autoregressive image generation\.

## Pluralistic AI Alignment Requires Inference\-Time Multi\-Objective Control

**Authors:** Weichen Li; Mislav Stojanović; Daniel Neider; Marius Kloft; Sophie Fellenz

**ID:** 140055 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X81sX3LayS>) | [PDF](<https://openreview.net/pdf?id=X81sX3LayS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140055>)

Pluralistic AI alignment\-\-\-accommodating diverse human values rather than a single canonical preference\-\-\-requires agents to reason under multiple, often conflicting objectives, such as helpfulness, honesty, harmlessness, fairness, and context\-specific user preferences\. Unlike classical learning methods that optimize a fixed scalar objective, pluralistic alignment requires distinguishing between objectives that may be flexibly traded off and constraints that should remain non\-negotiable\. These two categories map onto two existing lines of research: offline multi\-objective reinforcement learning provides tools for representing and navigating trade\-offs among multiple objectives, and offline safe reinforcement learning formalizes safety\-critical constraints and feasible policy regions\. A third line, multi\-objective LLM alignment, exposes a further requirement: because retraining large models for each preference configuration is infeasible, controllability must shift from training time to deployment time\. Taken together, these observations motivate our central position: inference\-time multi\-objective control should be a central goal of pluralistic AI alignment\. We argue that unifying these perspectives yields a framework in which training\-time learning produces reusable objective and safety representations, while inference\-time control enables adaptation to diverse and changing preferences without retraining\.

## Can Ideologues Agree on Quality? From Non\-identifiable Latent Factors to Collective Outcomes

**Authors:** David Gamba; Seura Ha; Daniel Romero; Grant Schoenebeck

**ID:** 154284 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EyCx9ODkOb>) | [PDF](<https://openreview.net/pdf?id=EyCx9ODkOb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154284>)

To surface "objective" fact\-check notes, X's Community Notes uses Biased Matrix Factorization \(BMF\) on crowd\-sourced ratings to separate note quality from reviewer ideology\. We show that for any correctly specified model that decomposes ratings into quality and ideological alignment, this separation requires fixing an ideological anchor: a reference point for what counts as neutral\. We give a characterization for the standard implementation: with $L\_2$ regularization, BMF anchors quality at a point proportional to the mean reviewer ideology, recovering objective quality if and only if the mean reviewer is neutral\. This parallels the Condorcet Jury Theorem: collective judgment recovers truth when the pool is unbiased on average\. When that assumption fails, BMF's recovered ranking shifts toward maximizing aggregate reviewer satisfaction, which coincides with social welfare only when the pool is representative\. This is not specific to BMF; the rating matrix admits a continuous family of gauge\-equivalent decompositions, each implying a different quality ranking, so no mechanism based on ratings alone can recover quality without implicitly choosing such an anchor\. What appears to be routine hyperparameter tuning is in fact a normative choice about whose preferences define quality\.

## MahaVar: OOD Detection via Class\-wise Mahalanobis Distance Variance under Neural Collapse

**Authors:** Dong Hwan Kim; Hyunsoo Yoon

**ID:** 156003 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1FalHL84no>) | [PDF](<https://openreview.net/pdf?id=1FalHL84no>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156003>)

Out\-of\-distribution \(OOD\) detection is a critical component for ensuring the reliability of deep neural networks in safety\-critical applications\. In this work, we present a key empirical observation: for in\-distribution \(ID\) samples, class\-wise Mahalanobis distances exhibit a pronounced sharp minimum structure, where the distance to the nearest class is small while distances to all other classes remain large, resulting in high variance across classes\. In contrast, OOD samples tend to exhibit a less pronounced sharp minimum structure, producing comparatively lower variance across classes\. We further provide a theoretical analysis grounding this observation in Neural Collapse geometry: under relaxed Neural Collapse assumptions on within\-class compactness and inter\-class separation, ID samples are shown to structurally exhibit high class\-wise distance variance, offering a theoretical basis for its use as an OOD score\. Motivated by this observation and its theoretical backing, we propose MahaVar, a simple and effective post\-hoc OOD detector that augments the Mahalanobis distance with a class\-wise distance variance term\. Following the OpenOOD v1\.5 benchmark protocol, MahaVar achieves state\-of\-the\-art performance on CIFAR\-100 and ImageNet, with consistent improvements in both AUROC and FPR@95 over existing Mahalanobis\-based methods across all benchmarks\.

## FairMT: Fairness for Heterogeneous Multi\-Task Learning

**Authors:** Guanyu Hu; Tangzheng Lian; Na Yan; Dimitrios Kollias; Xinyu Yang; Oya Celiktutan; Siyang Song; Zeyu Fu

**ID:** 148409 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y4pCWEetw2>) | [PDF](<https://openreview.net/pdf?id=y4pCWEetw2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148409>)

Fairness in multi\-task learning \(MTL\) is challenging when heterogeneous output spaces must be controlled through a shared multi\-head model\. Existing fairness methods are often tied to a single prediction type, while MTL optimizers coordinate task utility without specifying how heterogeneous group disparities should be represented, aggregated, or propagated through task\-specific heads\. We introduce FairMT, which frames fair heterogeneous MTL through a coordinate\-allocation view\. FairMT builds a Fairness\-Coordinate Interface for binary detection, one\-vs\-rest multi\-class classification, and scalar regression, and instantiates these coordinates asymmetrically using the current best\-performing valid group as a detached reference\. This directs correction toward groups falling behind the reference, reducing disparities while better preserving task utility\. Asymmetric Heterogeneous Fairness Disparity Aggregation \(AHFDA\) then adaptively allocates constraint pressure over normalized coordinates and converts heterogeneous disparities into a single differentiable constraint signal\. Finally, a Head\-Aware Optimization Proxy maps the allocated constraint through task\-head geometry into task\-combination weights for primal\-\-dual training, reducing routing bias caused by heterogeneous head scales, sensitivities, and decision geometries\. Experiments on visual and language MTL benchmarks show that FairMT reduces group\-level disparities across heterogeneous output types while maintaining utility close to utility\-oriented MTL optimizers\.

## Nonlinear Direct Feedback Alignment for Scalable Backpropagation\-Free Training

**Authors:** Wu Lin; Yan Fan; Chenxiang Ma; Yinglan Feng; Jia Wang; Ka\-Chun Wong; Qiuzhen Lin

**ID:** 150395 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iMEeZOdaUi>) | [PDF](<https://openreview.net/pdf?id=iMEeZOdaUi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150395>)

Backpropagation \(BP\) remains the predominant algorithm for training deep neural networks, but it is biologically implausible and suffers from the backward locking problem, constraining parallelization across layers\. Direct Feedback Alignment \(DFA\), which propagates the global output error directly to each hidden layer via fixed feedback matrices, has emerged as a promising alternative for addressing these limitations\. However, a significant performance gap persists between DFA and BP, which we attribute to the limited ability of fixed feedback matrices to capture the nonlinear transformation from hidden representations to the network output\. To address this limitation, we propose Nonlinear Direct Feedback Alignment \(NDFA\), which constructs each hidden\-layer feedback using a lightweight nonlinear surrogate subnetwork\. To enhance the effectiveness of the feedback throughout training, we further propose a learning strategy to update the surrogate subnetwork, thereby better approximating the underlying nonlinear transformation\. Extensive experiments across residual networks and vision transformers on CIFAR\-10, CIFAR\-100, SVHN, and ImageNet datasets demonstrate that NDFA consistently outperforms existing DFA\-based methods and substantially narrows the performance gap to BP, while maintaining efficient parallel training\. Code will be publicly available after the review process\.

## Solver\-Aware Decompositions for Programming\-by\-Example: When Dividing Requires Knowing how to Conquer

**Authors:** Janis Zenkner; Tobias Sesterhenn; Tim Grams; Christian Bartelt

**ID:** 152502 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SffA3K1Xus>) | [PDF](<https://openreview.net/pdf?id=SffA3K1Xus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152502>)

Decomposition\-based Programming\-by\-example \(PBE\) scales performance by splitting tasks into subtasks that a learned synthesizer solves: a decomposer predicts intermediate subgoals, and a synthesizer generates programs conditioned on them\. Current approaches train the decomposer to imitate ground\-truth \(GT\) subgoals, implicitly treating decomposition quality as intrinsic to the task\. We challenge this assumption: for bounded solvers with fixed inductive biases, GT decompositions reflect the annotator’s factorization choices – not the solver’s search dynamics\. A decomposer trained to match GT decompositions may therefore propose subgoals that are logically valid yet intractable for the solver\. We propose Solver\-Aware Decomposition \(SAD\), a training framework that retains supervised training on GT subgoals as a structural scaffold, while additionally optimizing the decomposer via direct feedback from a frozen synthesizer\. Subgoals are rewarded based on the synthesizer’s loss on the target program – a signal of subtask difficulty that encourages decompositions the solver can act on\. Our experiments reveal an accuracy paradox: higher agreement with GT decompositions does not improve synthesis success – even though the synthesizer was trained on the very same GT data the decomposer is optimized to mimic\. SAD instead learns decompositions that trade GT alignment for solver tractability, yielding consistent gains in synthesis and end\-to\-end task accuracy across two PBE domains\. Moreover, SAD solves tasks that a GT decomposition oracle fails – empirical evidence that GT decompositions are not universally optimal for bounded solvers, and that decomposition quality is solver\-relative, not intrinsic\.

## Query Lower Bounds for Approximating the Top Eigenvector of Asymmetric Matrices

**Authors:** Kun Chen; Zhihua Zhang

**ID:** 156027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=12LtaCKAC9>) | [PDF](<https://openreview.net/pdf?id=12LtaCKAC9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156027>)

We study the query complexity of approximating the top eigenvector of an asymmetric matrix in the matrix\-vector product model\. Our main result gives a gap\-dependent lower bound for this problem in the adaptive query setting\. Prior lower bounds for symmetric matrices already imply weaker hardness guarantees for the more general asymmetric problem, whereas our result yields a sharper dependence on the eigen\-gap in the asymmetric case\. In the inverse polynomial accuracy regime, this lower bound matches the benchmark upper bound of the power method up to lower\-order factors\.  Our proof is based on an asymmetric spiked random matrix that serves as a hard instance\. The key random\-matrix ingredient is an analysis of the spike model, including both its asymptotic eigen\-gap and the alignment between its top eigenvector and the planted spike\. Building on an information\-theoretic framework for query lower bounds, we then obtain the stated hardness result\.

## LLM Rheology: Auditing Refusal Geometry in Aligned Language Models

**Authors:** ziyang zhao; Junlang Tian

**ID:** 149756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nbLsmiH2tO>) | [PDF](<https://openreview.net/pdf?id=nbLsmiH2tO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149756>)

Scaling improves language\-model capability, but it does not necessarily strengthen internal safety mechanisms\. We introduce \*\*LLM Rheology\*\*, a representation\-level framework for auditing how aligned language models respond to adversarial perturbation inside activation space\. Given a learned refusal direction, we define \*\*manifold sensitivity / compliance\*\* as the Fisher\-\-Rao\-normalized distributional response induced by controlled activation perturbation\. This quantity measures how strongly refusal behavior remains coupled to adversarial task execution in representation space\.  Across six open model families and 22 checkpoints, including Qwen, DeepSeek\-Distill, Mistral, Llama\-3, Gemma, and Yi, we observe a recurring geometric scaling pattern\. Small aligned models often exhibit elevated refusal response, intermediate\-scale models frequently enter weakened\-response regimes \(\*compliance valleys\*\), and larger checkpoints trend toward near\-baseline response consistent with increasing task\-\-refusal decoupling\. Cosine measurements on continuous Qwen and DeepSeek scaling axes support this interpretation, showing monotonic decay between refusal and task\-generation directions with scale\.  We further provide causal evidence through inference\-time activation intervention on Qwen\-72B\. Injecting a learned refusal vector at a critical semantic layer restores refusal behavior on the evaluated jailbreak subset while largely preserving benign reasoning performance\. Matched\-norm placebo vectors fail to reproduce the effect, supporting the directional specificity of the intervention\.  Together, these results suggest that behavioral refusal can remain surface\-level even when internal refusal geometry becomes weakly coupled to adversarial task execution\. LLM Rheology provides a complementary representation\-level perspective for auditing refusal safety beyond behavioral evaluation\.

## Bridging the Gap Between Harmfulness Belief and Refusal Behavior for Safety Alignment

**Authors:** Lu Zhang; Chen Feng; Qingzhuo Wang; Wen Shen; Zhihua Wei

**ID:** 149662 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oNxj0lY1EY>) | [PDF](<https://openreview.net/pdf?id=oNxj0lY1EY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149662>)

Many existing defenses mainly strengthen refusal behavior to improve the safety of LLMs\. Recent interpretability work shows that, in safety\-aligned LLMs, harmfulness belief and refusal behavior are represented separately in the hidden states at the last token of the user instruction \($t\_\{\\mathrm\{inst\}\}$\) and the response\-start token \($t\_\{\\mathrm\{post\}\}$\), respectively\. Based on it, we find that harmfulness belief is not reliably preserved when it is carried from the $t\_\{\\mathrm\{inst\}\}$ to the $t\_\{\\mathrm\{post\}\}$\. As a result, even when the LLM internally recognizes a request as harmful, it may still produce a compliant response\.  To address this, we propose Bridging Harmfulness and Refusal \(BHR\), a training framework that bridges harmfulness belief and refusal behavior\. Specifically, BHR trains the adapter so that harmfulness information is carried to the hidden state at the $t\_\{\\mathrm\{post\}\}$, thereby establishing a second pathway from harmfulness belief to refusal behavior\. To keep this signal reliable during fine\-tuning, we introduce two additional losses\. A belief loss helps the LLM maintain an accurate harmfulness judgment at the $t\_\{\\mathrm\{inst\}\}$\. A belief\-gated refusal loss uses the LLM's harmfulness belief at $t\_\{\\mathrm\{inst\}\}$ to regulate refusal learning, making attacks that target refusal features less effective while reducing the risk of over\-refusal on benign inputs\.  Experiments across multiple LLMs and safety benchmarks show that BHR substantially improves robustness against both white\-box and black\-box jailbreak attacks, reduces the risk of over\-refusal on benign prompts, and preserves general capabilities\.

## When does LeJEPA learn a World Model?

**Authors:** David Klindt; Yann LeCun; Randall Balestriero

**ID:** 152207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UmYyYHEj9P>) | [PDF](<https://openreview.net/pdf?id=UmYyYHEj9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152207>)

A representation that scrambles the true degrees of freedom of the world cannot support reliable planning or compositional generalization\. We prove that LeJEPA is guaranteed to recover a linear representation of latent variables from nonlinear observations, a property known as \*linear identifiability\*\. What kind of world and learning objective admit this guarantee? We consider World Models with three properties \(independent, stationary, and additive\-noise transitions\) that generate positive pairs, and study representations trained with the LeJEPA objective\. Our main result: if the latent distribution is Gaussian, the representation provably achieves linear identifiability\. The key insight comes from a \*spectral decomposition\* of the representation with respect to the transition structure: each spectral component corresponds to a degree of nonlinearity, and higher degrees are strictly penalized by alignment, making the linear map the \*unique\* optimum\. We then prove the converse: among all latent variable distributions satisfying these three properties, the Gaussian is the \*unique\* one that leads to linear identifiability\. The guarantee degrades gracefully when the two objectives are only approximately satisfied, with an explicit bound validated empirically\. Our theory turns an empirically successful recipe into a mathematical guarantee, providing the foundation for building World Models that provably recover the structure of the world\.

## Symmetric Interventions for Eliciting Model Intent

**Authors:** David Vella Zarb; Rustem Turtayev; Taywon Min; Jinghua Ou; Shi Feng

**ID:** 152474 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SniLob4M2j>) | [PDF](<https://openreview.net/pdf?id=SniLob4M2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152474>)

Alignment faking, where models comply with harmful requests more often when they infer they are being trained than when they infer they are deployed, has been read as evidence of scheming\. The same behavior is also consistent with performative scheming: the model identifies the setup as a safety evaluation and produces the behavior it infers researchers are looking for\. These hypotheses predict identical behavior in the standard evaluation but generalize differently\. We distinguish them by amplifying and suppressing the process each requires \(consequence\-tracking for scheming, expectation\-tracking for performative scheming\) and comparing using three methods: synthetic document fine\-tuning, activation steering, and prompt interventions\. Across four open\-weight model organisms that exhibit alignment faking in the helpful\-only scenario, fine\-tuning produces larger shifts under expectation\-tracking than consequence\-tracking on three \(Llama\-3\.1\-70B, Llama\-3\.1\-405B, Qwen\-2\.5\-72B\); on QwQ\-32B, both intervention families shift compliance globally rather than changing the gap, suggesting they affect overall helpfulness rather than alignment faking specifically\. Activation steering on Llama\-3\.1\-70B reproduces the asymmetry: expectation\-tracking steering changes compliance, while consequence\-tracking steering changes the model's reasoning without affecting compliance\. Alignment faking in these models is better explained by expectation\-tracking than by self\-preservation reasoning\.

## Market Incentives for AI Safety Investment

**Authors:** Nikita Tsoy

**ID:** 152575 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S4uLBohGBD>) | [PDF](<https://openreview.net/pdf?id=S4uLBohGBD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152575>)

Despite their practical significance, modern AI systems pose significant societal risks, including toxicity, malicious use, and misinformation\. Their mitigation depends not only on technical feasibility but also on the incentives of firms that develop and deploy these systems\. We show how profit maximization shapes safety investment in an AI supply chain with an upstream LLM provider and several competing downstream firms\. In our game\-theoretic model, we derive the market\-driven level of safety investment and compare it with the levels that maximize market welfare and industry profit\. We find that downstream competition generally induces downstream firms to invest more in safety than the industry\-profit\-optimal level\. By contrast, the upstream provider may underinvest relative to these benchmarks because it is not fully compensated for the surplus from safety investments\. Finally, we analyze how different regulatory interventions affect the participants' incentives and profits, and the resulting levels of model safety\.

## SuperSycophantic: Stress\-Testing Frontier LLMs from Single\- to Multi\-Turn Sycophancy

**Authors:** Terry J\. C\. Zhang; Oscar S Yasunaga; Wenyuan Jiang; Jessica Bo; Florent Draye; Aydin Javadov; Arth Singh; Lucille Muir; VICTORIA OLDEMBURGO DE MELLO; Bernhard Schölkopf; Zhijing Jin

**ID:** 148794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2ZJiUHkC6>) | [PDF](<https://openreview.net/pdf?id=v2ZJiUHkC6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148794>)

AI sycophancy is gaining increasing prevalence as models optimized to maximize user satisfaction may tend to unconditionally agree with users even at the expense of factuality, which poses great risk as AI are increasingly used for decision support in high\-stake scenarios\. We present \\ourWork, a systematic stress\-testing framework encompassing objective \(OBJ\) questions with verifiable answers and subjective \(SUB\) scenarios without ground truth on sycophancy induced from first\-turn context framing to multi\-turn user pressure\. Evaluation of 9 frontier models revealed high sycophancy in even the best\-performing models such as GPT\-5\.4 changes answers from right to wrong to please users in 23\.8\\% of OBJ scenarios and blindly follows the pressured user view in more than half of the SUB scenarios\. We found that strength of user tone is one of the most impactful yet previously overlooked factor for AI sycophancy and discover an interesting pattern where Claude models are uniquely more sycophantic under moderate pressure because strong triggers often lead them to rethink questions from scratch to arrive at the correct impartial answer\. These findings highlight the need for anti\-sycophancy training in future model development, where training models to rethink from scratch when facing pressure may serve as a promising paradigm towards more truthful AI systems\. We provide our code and data in the supplementary material\.

## Observations Drift, Structures Remain: Structural Pretraining with Time Alignment for Electromagnetic Signals

**Authors:** Wenjin Gui; Junyu Shen; Haibo Xu; Yuchuang Sun; Luqing Luo; Wupeng Xie; Qian Huang; Fengxiang Wang; Yangang Sun; Maosong Sun

**ID:** 151775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y7NJqTgjv8>) | [PDF](<https://openreview.net/pdf?id=Y7NJqTgjv8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151775>)

Electromagnetic signal modeling is increasingly moving toward self\-supervised pretraining on heterogeneous I/Q observations\. However, an observed waveform is jointly shaped by signal generation, propagation environments, and acquisition processes, which mix reusable structural regularities with observation\-specific variations\. Existing methods usually pursue unified pretraining with reconstruction objectives on mixed observations\. This heterogeneity creates two key mismatches for reconstruction pretraining: \(1\) appearance mismatch, induced by propagation\-dependent waveform variations; and \(2\) temporal mismatch, induced by acquisition\-dependent sampling coordinates\. These mismatches make observation\-specific appearances and sampling coordinates easier to reconstruct than stable signal structures, inducing observational shortcuts\. We identify this failure mode as observation\-biased pretraining\. To address this, we propose Structural Pretraining with Time Alignment for heterogeneous EM signals\. It mitigates temporal mismatch with RoPE\-fs, which maps token positions to sampling\-rate\-normalized physical\-time positions, and reduces reliance on appearance shortcuts by replacing waveform reconstruction with masked prediction of discrete structural units\. These units are organized into atomic structural units and emergent units that capture variable\-length compositional patterns beyond fixed patch boundaries\. Across diverse EM benchmarks, our method improves both full\-supervision and few\-shot adaptation over existing EM pretraining baselines, showing that the learned representations better preserve structural consistency when observations drift in waveform appearance and temporal scale\.

## Rubric\-Align: Safety Alignment through Dynamically Co\-Evolving Rubrics

**Authors:** Ruipeng Wang; Junfeng Fang; Houcheng Jiang; Kai Tang; Pengyu Cheng; xiaoxi jiang; Guanjun Jiang; Xiang Wang

**ID:** 154753 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BDgXsrFjIF>) | [PDF](<https://openreview.net/pdf?id=BDgXsrFjIF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154753>)

Recent progress in large language models \(LLMs\) has led to impressive performance across diverse domains\. However, their deployment in critical areas such as healthcare, law, and education raises serious concerns regarding the potential generation of harmful content\. While reinforcement learning \(RL\)\-based safety alignment methods have been extensively studied, they face persistent challenges, including sparse reward signals, limited interpretability, and limited transferability across domains\. In this paper, we introduce Rubric‑Align, a framework that replaces static binary scalar rewards with dynamic, natural‑language evaluation rubrics\. Instead of assigning a single reward to each response, Rubric‑Align provides fine‑grained and interpretable feedback, thereby alleviating reward sparsity and improving the transparency of the alignment signal\. A key feature of Rubric\-Align is its dynamic rubric evolution mechanism\. Rather than using fixed reward templates, Rubric\-Align periodically refines prompt\-specific rubrics based on the current policy behavior, keeping the supervision signal informative and aligned with the model’s evolving failure modes\. Experiments on safety benchmarks and vertical\-domain settings show that Rubric\-Align improves robustness against harmful and jailbreak prompts while largely preserving general capabilities, suggesting that natural\-language rubrics provide a transferable interface for adapting safety supervision to new safety subdomains\.

## Jointly Robust Fairness: Overcoming Simultaneous Label and Attribute Noise

**Authors:** Gaurav Jain

**ID:** 148725 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vWhOn8psLO>) | [PDF](<https://openreview.net/pdf?id=vWhOn8psLO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148725>)

Fairness in machine learning typically relies on the assumption of clean training data\. However, in high\-stakes applications like healthcare and criminal justice, privacy mechanisms and proxy variables frequently introduce simultaneous noise into both sensitive attributes and target labels\. While existing methods address label or attribute noise in isolation, they fail under this "double noise" regime, often inadvertently amplifying bias\. In this paper, we propose $\\textbf\{Jointly Robust Fairness \(JRF\)\}$, a unified framework that guarantees fairness under simultaneous data corruption\. JRF integrates a Forward Loss correction to handle label noise with a novel Matrix\-Inverse Robust Loss \(MIRL\) that algebraically recovers the true demographic parity gap from noisy attribute observations\. We provide rigorous theoretical guarantees for our estimator, including a finite\-sample concentration bound demonstrating that the sample complexity scales quadratically with the inverse of the noise transition determinant\. Furthermore, our framework naturally generalizes to both symmetric and highly asymmetric noise distributions\. Extensive experiments on the Adult, Bank, and COMPAS datasets demonstrate that JRF reduces fairness violations by over 91\\% in high\-noise regimes \($\\rho \\ge 0\.3$\) compared to standard robust baselines, maintaining strict fairness without significant degradation in predictive utility\.

## Boundary Mass in Feature Space as a Label\-Budget Diagnostic for Representations

**Authors:** Siming Zhang; Zhehui Shen; Shijie Chen; Yansen Yu; Hang Yu

**ID:** 149689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAolQpqUNY>) | [PDF](<https://openreview.net/pdf?id=oAolQpqUNY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149689>)

Low\-label transfer is often decided by a practical question: after a representation looks useful, how many labels are still needed to learn the downstream boundary? Existing transferability and probe\-quality scores rank global alignment, likelihood, margins, or calibration, but they do not measure how much target data remains close to the fitted decision boundary, where scarce labels are most costly\. We propose \*\*effective boundary complexity\*\*, a label\-budget diagnostic for frozen representations and linear probes\. It measures mass in a thin strip around the learned boundary and normalizes it by class balance, so dense ambiguous regions and rare\-class difficulty are both counted\. We prove that, under a smooth representation map, this boundary mass does not change because of generic volume expansion: density change and tangential surface change cancel at first order, leaving only stretch or compression in the boundary\-normal direction\. This yields a cached\-feature estimator that fits a probe on one split, counts held\-out features near its boundary, and avoids high\-dimensional density estimation\. Experiments support the diagnostic at three levels\. Controlled transformations match the predicted law across 74 maps with 0\.38% median relative error\. On real frozen features, normal\-direction changes move both measured boundary mass and label demand, while tangent changes do not\. A differentiable surrogate reduces measured complexity by 16–36% at matched top\-1 utility\. Finally, CIFAR\-100 and Tiny\-ImageNet audits show boundary mass acting as a second\-stage diagnostic for near\-tied representations, with external multiclass results showing how label\-grid saturation limits policy\-level gains on label grids where many tasks tie\.

## BarrierSteer: LLM Safety via Learning Barrier Steering

**Authors:** Thanh Q\. Tran; Arun Verma; Kiwan Wong; Bryan Kian Hsiang Low; Daniela Rus; Wei Xiao

**ID:** 148333 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ycSLi4NJY3>) | [PDF](<https://openreview.net/pdf?id=ycSLi4NJY3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148333>)

Despite the strong performance of large language models \(LLMs\) across diverse tasks, their susceptibility to adversarial attacks and unsafe content generation remains a significant barrier to deployment, particularly in high\-stakes settings\. Addressing this challenge requires safety mechanisms that are both practically effective and theoretically grounded\. In this paper, we introduce BarrierSteer, a novel framework that improves response safety by embedding learned nonlinear safety constraints directly into the model's latent representation space\. BarrierSteer treats hidden\-state safety classifiers as Control Barrier Functions \(CBFs\), enabling constraint\-guided steering of unsafe latent trajectories during generation\. By composing multiple safety constraints through efficient constraint merging without modifying the underlying LLM parameters, BarrierSteer preserves model utility and performance\. We provide theoretical results showing that applying CBFs in latent space yields a principled and computationally efficient approach for steering with respect to learned safety constraints, with guarantees conditional on the learned barriers capturing the intended safety property\. Extensive experiments across multiple models and datasets demonstrate that BarrierSteer substantially reduces adversarial attack success rates and unsafe generations, outperforming existing methods\.

## Gradient\-Mine Units: Scorched\-Earth Strategy for Model Protection against Unauthorized Fine\-Tuning

**Authors:** Jinhyeok Jang; Jaehong Kim; ByungOk Han

**ID:** 152005 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WD7CiQOOR7>) | [PDF](<https://openreview.net/pdf?id=WD7CiQOOR7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152005>)

Pretrained model weights are increasingly released under commercial licenses, usage restrictions, or other conditions that prohibit unauthorized fine\-tuning\. In practice, however, such misuse is difficult to detect or verify after the fact\. This motivates a stronger objective for protected weight release: weights should remain useful for intended inference, yet become practically unattractive to repurpose through unauthorized gradient\-based adaptation\. We frame this objective as a \\emph\{scorched\-earth\} strategy in parameter space: rather than only proving infringement after misuse occurs, the released weights themselves should react destructively when unauthorized fine\-tuning begins\. To realize this idea, we propose \\textbf\{Gradient\-Mine Units \(GMUs\)\}, a data\-free weight\-space protection mechanism for pretrained networks\. GMUs are planted into selected feedforward layers as hidden units with extreme internal scale, while a locking mechanism keeps them silent at initialization so that the original inference behavior is preserved\. During fine\-tuning, this locked state is progressively broken, allowing the planted units to emit amplified gradients that disrupt the model's native adaptation dynamics\. We formulate GMUs in a general feedforward setting and show that gated instantiations naturally provide an additional hard lock\. Empirically, we validate the method on both large language models and Vision Transformers\. Across multiple architectures and downstream tasks, GMUs preserve pre\-fine\-tuning utility while substantially degrading or destabilizing standard fine\-tuning\. These results suggest that protected weight release can move beyond post hoc attribution toward a practical deterrence mechanism for unauthorized adaptation\. Our implementation is available at here\.

## Few\-Shot Truly Benign DPO Attack for Jailbreaking LLMs

**Authors:** Yoon Sangyeon; Wonje Jeung; Yoonjun Cho; Dongjae Jeon; Albert No

**ID:** 150959 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e0AAyKxXc8>) | [PDF](<https://openreview.net/pdf?id=e0AAyKxXc8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150959>)

Fine\-tuning APIs make frontier LLMs easy to customize, but they can also weaken safety alignment during fine\-tuning\. While prior work shows that benign supervised fine\-tuning \(SFT\) can reduce refusal behavior, deployed fine\-tuning pipelines increasingly support preference\-based objectives, whose safety risks remain less understood\. We show that Direct Preference Optimization \(DPO\) introduces a stronger and harder\-to\-audit failure mode\. We propose a truly benign DPO attack using only 10 harmless preference pairs, the minimum data scale accepted by OpenAI’s fine\-tuning service\. Each pair contains a benign prompt, a normal helpful answer as the preferred response, and a refusal as the dispreferred response\. Unlike prior benign fine\-tuning attacks, our data exhibits no suspicious behavior: it is practically indistinguishable from the fine\-tuning request of a legitimate user seeking to reduce over\-refusal, making harmful intent almost impossible to infer from the request alone\. Nevertheless, because DPO directly optimizes the model to prefer helpful answers over refusals, this seemingly benign objective broadly suppresses refusal behavior and transfers to harmful prompts outside the fine\-tuning data\. Across OpenAI models supporting DPO fine\-tuning, our attack achieves attack success rates of 59\.13% on GPT\-4o, 70\.20% on GPT\-4\.1, 54\.80% on GPT\-4\.1\-mini, and 81\.73% on GPT\-4\.1\-nano, at costs of only \\\\$1\.7, \\\\$1\.7, \\\\$0\.3, and \\\\$0\.1\. Moreover, on open\-weight models that do not impose minimum data requirements, we find that this effect can emerge from even a single benign preference pair\.

## MulCLIP: A Multi\-level Alignment Framework for Enhancing Fine\-grained Long\-context CLIP

**Authors:** Chau Truong; Hieu Ta; Zhenzhen Liu; Dung Le

**ID:** 149414 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qD0McGAhI2>) | [PDF](<https://openreview.net/pdf?id=qD0McGAhI2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149414>)

Vision\-language models such as CLIP excel at image\-text alignment but struggle with long, detailed descriptions due to training on short captions\. Recent methods address this limitation using region proposals to align visual regions with sentences, but at substantial deployment cost\. We present MulCLIP, an end\-to\-end multi\-level alignment framework that directly exploits natural long\-text structure without region proposals\. Instead of simply stacking objectives, MulCLIP aligns different textual granularities through compatible training signals: global contrastive alignment for long captions and short summaries, Word–Patch Reconstruction over locally calibrated features for within\-sample word–patch semantics, and Subcaption–Aggregated Patch alignment for context\-rich subcaption grounding\. Experiments on benchmarks spanning varying caption lengths show consistent gains, and ablations confirm that the proposed objectives are complementary and jointly improve the overall framework\.

## Elicited Adaptation: Auditable Localized Fairness via Pairwise Queries

**Authors:** Shrey Shah

**ID:** 151632 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z83ygLoc4N>) | [PDF](<https://openreview.net/pdf?id=Z83ygLoc4N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151632>)

A single global fairness criterion cannot serve communities whose conceptions of fair treatment differ\. We introduce \\emph\{elicited localized fairness\}: an end\-to\-end pipeline that elicits per\-community Mahalanobis metric\-\-tolerance specifications $\\cF\_k = \(d\_k, \\eps\_k\)$ from stakeholders via two phases of pairwise queries \(similarity, then tolerance acceptability\), trains a localized classifier \(\\textsc\{LocAdapt\}\), and audits the deployed model on a held\-out tolerance fold\. \\emph\{Theory\.\} A constrained\-MLE rate $\\tilde O\(\\sqrt\{d^2/n\}\)$ for metric elicitation and a matching $\\Omega\(d^2/t^2\)$ active\-query lower bound, exact in $\(d, n, t\)$ exponents; a held\-out audit certificate that converts Phase 2 queries into a PAC\-style violation guarantee\. \\emph\{Empirics\.\} On heterogeneous\-community settings \(Stress $K\{=\}5$, Adult\-K3\-human; 10 seeds\), \\textsc\{LocAdapt\} sits on the \(accuracy, strict $d\{\\leq\}1$ violation\) Pareto frontier: averaged and matched\-accuracy Global IF lose on strict at comparable accuracy \($40$\-\-$80\\%$ higher\), and pooled\-MLE Global IF matches strict only at $\-2$pp accuracy\. A five\-axis diagnostic \(acc, strict, score\-diff spread, prediction entropy, AUC\) confirms the gain is not prediction\-smoothing\. Plugging Phase 2 elicited tolerances into \\textsc\{LocAdapt\} training reduces the COMPAS deployed\-spec violation $66\\%$ \($p\{\\ll\}10^\{\-4\}$\)\. Five pre\-registered human studies on COMPAS \(360 annotators total\) validate the pipeline end\-to\-end; a 180\-annotator scorer\-stability ablation across three scorer architectures preserves the cross\-community $\\hat\\eps$ ordering and pools to $p\{=\}0\.0014$ \($n\{=\}90$ vs\.\\ $90$\)\.

## Model Spec Midtraining: Improving How Alignment Training Generalizes

**Authors:** Chloe Li; Sara Price; Samuel Marks; Jonathan Kutasov

**ID:** 149704 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o4qobfTwOz>) | [PDF](<https://openreview.net/pdf?id=o4qobfTwOz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149704>)

Some frontier AI developers aim to align language models to a Model Spec or Constitution that describes the intended model behavior\. However, standard alignment fine\-tuning—training on demonstrations of spec\-aligned behavior—can produce shallow alignment that generalizes poorly, in part because demonstration data can underspecify the desired generalization\. We introduce $\\textbf\{model spec midtraining\}$ \(MSM\): after pre\-training but before alignment fine\-tuning, we train models on synthetic documents discussing their Model Spec\. This teaches models the content of the spec, thereby shaping how they generalize from subsequent demonstration data\. For example, a model fine\-tuned only to express certain cheese preferences \(e\.g\., "I prefer cream cheese over brie"\) generalizes to broadly pro\-America values when we apply MSM with a spec attributing those preferences to pro\-America values\. Conversely, a spec about pro\-affordability values instead yields pro\-affordability generalization from the $\\textit\{exact same\}$ cheese fine\-tuning\. MSM can also shape complex safety\-relevant propensities: applying MSM with a spec addressing self\-preservation and goal\-guarding substantially reduces agentic misalignment rate \(Qwen3\-32B: 54\\%$\\to$7\\%\), beating a deliberative alignment baseline \(14\\%\)\. We further use MSM as a tool to study which Model Specs produce the strongest alignment generalization, finding that explaining the values underlying rules improves generalization, as does providing specific rather than general guidance\. Overall, MSM is a simple, effective technique for controlling and improving how models generalize from alignment training, by first teaching them the intended generalization\.

## GeoBiaset: A Counterfactual Benchmark for Demographic Bias in World\-Level Geolocalization

**Authors:** Niccolò Niccoli; Silvia Dani; Marco Mistretta; Andrew Bagdanov; Marco Bertini; Lorenzo Seidenari

**ID:** 138937 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vKDpJIzx4W>) | [PDF](<https://openreview.net/pdf?id=vKDpJIzx4W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138937>)

World\-level image geolocalization is an increasingly important task, yet the biases of current models remain poorly understood\. Prior work has identified coarse dataset imbalances noting, for instance, that some cities are absent from training sets and that models tend to perform better in wealthier regions\. However no one has yet examined which visual cues drive these disparities\. To do so, we introduce GeoBiaset, the first benchmark designed to measure how geolocalization models are influenced by the apparent race of a person inserted into the image foreground\. The dataset consists of 9,541 images, pairing existing geotagged background images with counterfactual edits spanning seven races, holding the ground\-truth coordinates fixed so that any shift in model predictions is attributable solely to the inserted subject\. Alongside the benchmark, we introduce the Person\-Origin Perturbation Indicators \(POPI\), novel metrics that quantify model resilience to these demographic perturbations by measuring whether predictions are pulled toward the region associated with the inserted group\. Our evaluation of state\-of\-the\-art geolocalization and multimodal large language models reveals a 16\-47\\% drop in continent\-level performance when a subject from a demographically mismatched group is inserted\. A landmark versus no\-landamark analysis and gradient\-weighted heatmaps show that models preferentially attend to geographic landmarks when present, but shift attention to facial features in their absence\.

## GT\-HarmBench: Benchmarking AI Safety Risks Through the Lens of Game Theory

**Authors:** Pepijn Cobben; Xuanqiang A Huang; Thao Pham; Isabel Dahlgren; Bernhard Schölkopf; Terry J\. C\. Zhang; Zhijing Jin

**ID:** 149359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qdCqebpQ1b>) | [PDF](<https://openreview.net/pdf?id=qdCqebpQ1b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149359>)

Frontier AI systems are increasingly capable and deployed in high\-stakes multi\-agent environments\. However, existing AI safety benchmarks largely evaluate single agents, leaving multi\-agent risks such as coordination failure and conflict poorly understood\. We introduce GT\-HarmBench, a benchmark of 1,535 high\-stakes scenarios spanning game\-theoretic structures such as the Prisoner's Dilemma, Stag Hunt and Chicken\. Scenarios are drawn from realistic AI risk contexts in the MIT AI Risk Repository\. Across 15 frontier models, agents fail to choose socially beneficial actions in 38% of high\-stakes cases, such as military escalation, election manipulation, and medical malpractice\. We measure sensitivity to game\-theoretic prompt framing and ordering, and analyze reasoning patterns driving failures\. We further show that game\-theoretic interventions improve socially beneficial outcomes by up to 18%\. Our results highlight substantial reliability gaps and provide a broad standardized testbed for studying alignment in multi\-agent environments\.

## DACE: Diversity\-Driven Adversarial Co\-Evolution for Robust LLM Safety Alignment

**Authors:** Peng Yu; Xiaoyu Wen; Zhida He; Ziyuan Zhou; Han Qi; Shao Zhang; Qiaosheng Zhang; Ying Wen; Chaochao Lu

**ID:** 154329 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EQ9xqhBm3G>) | [PDF](<https://openreview.net/pdf?id=EQ9xqhBm3G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154329>)

Ensuring robust safety alignment of large language models \(LLMs\) is increasingly difficult as adversarial attacks evolve and outpace alignment pipelines built on pre\-collected data\. Recent co\-evolutionary frameworks let the defender chase a moving attacker, yet their training dynamics expose two compounding pathologies: \\emph\{attack strategy collapse\}, where the attacker overfits to a narrow set of high\-reward rewrites, and \\emph\{defense adversarial forgetting\}, where the defender loses competence against earlier attacks as the attack distribution drifts\. Existing remedies are partial: attacker\-side diversity rewards score textual novelty rather than strategy novelty, and defender\-side replay relies on discrete judge scores that ignore estimation uncertainty, response stochasticity, and defender non\-stationarity\. We introduce DACE, a diversity\-driven adversarial co\-evolution framework that targets both pathologies jointly\. On the attacker side, DACE couples an explicit $12\\times10$ strategy space \(risk category $\\times$ attack style\) with a \\emph\{normalized marginal coverage gain\} reward, providing a bounded, non\-vanishing exploration signal at the strategy layer\. On the defender side, DACE maintains a unified \\emph\{Bayesian adversarial replay pool\} whose Beta\-\-Bernoulli threat posteriors are refreshed by time decay and sampled via Thompson sampling, anchoring defender training to an evolving threat landscape\. Across standard safety, automated\-attacker, and general\-capability benchmarks, DACE improves robustness to out\-of\-distribution attacks while preserving general capabilities, and yields broader attacker strategy coverage\.

## AM\-Bench: A Unified Taxonomy and Evaluation Suite for Agentic Misalignment

**Authors:** Eric Zhang; Terry J\. C\. Zhang; Chijioke Ugwuanyi; Jerick Shi; Bernhard Schölkopf; Zhijing Jin

**ID:** 139661 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CDBb8r3rlc>) | [PDF](<https://openreview.net/pdf?id=CDBb8r3rlc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139661>)

As LLM\-based agents are deployed with increasing autonomy in real\-world environments, a critical failure mode emerges: agentic misalignment, where agents choose harmful actions over failure\. However, existing safety benchmarks primarily evaluate whether agents comply with explicitly harmful instructions, leaving the conditions that cause agents to choose harmful actions poorly understood\. To address this limitation, we propose AM\-Bench, a unified taxonomy and 35 scenario evaluation benchmark spanning seven industries for agentic misalignment grounded in the fraud triangle, a well\-established criminological framework explaining goal\-directed misconduct\. We adapt this framework to agentic environments and construct our evaluation suite and detection systems along three dimensions: perceived threat, perceived opportunity, and reasoning\. We operationalize each dimension into structured subcategories rooted in prior theory: five threat categories derived from the instrumental convergence thesis, seven opportunity categories drawn from the Emergent Strategic Reasoning Risks \(ESRR\) taxonomy, and a novel four\-question binary reasoning framework synthesized from prior literature\. Our evaluation of 10 frontier models reveals a 62\-percentage\-point gap in misalignment across scenarios, with Gemini 3 Flash and Gemini 3\.1 Pro exhibiting the highest levels of agentic misalignment while Claude Sonnet 4\.6 displays near\-zero rates across all conditions\. Our reasoning framework further reveals that models may exhibit harmful behaviours without explicit situational awareness or explanation, complicating both mitigation and detection\. AM\-Bench scenarios and code are available at https://github\.com/AI4Collaboration/Agentic\-Misalignment\-Bench

## \(Mis\)generalization of Helpful\-Only Fine\-Tuning

**Authors:** Mohammad Omar Khursheed; Baram Sosis; Fabien Roger

**ID:** 154274 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F37WYmfO6k>) | [PDF](<https://openreview.net/pdf?id=F37WYmfO6k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154274>)

Helpful\-only models—that is, models that are trained to always follow user intent—are valuable for dangerous capability evaluations and other areas of AI R&amp;D where refusals would be an obstacle\. Little is known about the generalization properties of helpful\-only training: they refuse less than their harmless counterparts, but previous work has not studied other dimensions of their alignment\. We find that existing helpful\-only models have serious shortcomings\. Some show emergent misalignment, others have residual refusal behaviors, and most show poor steerability, sycophancy, and an incoherent character\. We show that simple anti\-refusal training can cause many of these issues\. None of these problems are necessary consequences of helpful\-only training, though: we show that synthetic document fine\-tuning and adding character\-related questions to SFT and RL can mitigate them\.

## Geometry of Relaxed Fair Regression: A Unified Framework for Aware and Unaware Settings

**Authors:** Marie Generali Lince; Vincent Divol; Rémi Flamary; Solenne Gaucher; Patrick Loiseau

**ID:** 153522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kj8DbwITCM>) | [PDF](<https://openreview.net/pdf?id=Kj8DbwITCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153522>)

Fairness\-accuracy trade\-offs are a central concern in the deployment of fairness\-aware machine learning methods\.  When sensitive attributes are unavailable at inference time–the so called unawareness setting, principled methods for obtaining accurate predictions under relaxed fairness constraints are largely missing\.  In this work, we address this gap by formulating regression under a demographic parity penalty as an optimal transport problem\.  Our framework unifies both the \\emph\{aware\} and \\emph\{unaware\} settings and characterizes optimal prediction functions via optimal transport maps, under both squared Wasserstein\-2 and Total Variation penalties\.  These results reveal that the choice of penalty reflects fundamentally different fairness philosophies: the Wasserstein penalty induces a smooth, population\-wide compromise, while Total Variation enforces exact parity for a subset of individuals\.  Building on these theoretical characterizations, we propose an algorithm that is simple to implement, computationally efficient, and consistently matches or outperforms state\-of\-the\-art baselines on real\-world benchmarks\.

## Geometry\-Aware Directional Alignment for Coherent Model Merging

**Authors:** Zhikang Chen; Sen Cui; Deheng Ye; Min Zhang; Gang Niu; Yu Zhang; Masashi Sugiyama; Tingting Zhu

**ID:** 155408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rpJ5pgTQv>) | [PDF](<https://openreview.net/pdf?id=5rpJ5pgTQv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155408>)

Model merging has emerged as a practical paradigm for integrating multiple independently trained models into a single model without joint retraining\. Prior work shows that parameter fusion techniques, such as parameter decomposition, coefficient optimization, and subspace learning, can achieve strong performance while avoiding the cost of joint training\. However, these approaches largely treat merging as a parameter aggregation problem, implicitly assuming compatibility in the underlying directional structures\. We argue that this assumption rarely holds\. In practice, independently trained models often exhibit misaligned dominant directions in both parameter and feature spaces\. Naïve merging can therefore disrupt structural coherence, leading to significant performance degradation, especially in heterogeneous settings such as healthcare, where models trained on tasks like medical QA or clinical text understanding develop distinct representational geometries\. Moreover, coefficient\-based methods rely on well\-aligned feature directions, an assumption contradicted by insights from Neural Collapse, which suggest that class features follow structured yet model\-specific directional patterns\. In this work, we identify directional alignment as the key principle for effective model merging\. We propose Merging with Directional Alignment \(\\method\{\}\), a unified geometric framework that explicitly enforces consistency in directional structures across both parameter and feature spaces\. Our analysis shows that directional alignment preserves structural coherence during merging, and extensive experiments across multiple benchmarks, including healthcare QA, demonstrate consistent improvements across model scales and task settings\.

## Fast Alignment of Embeddings: Computational Guarantees for Anisotropic Procrustes\-Wasserstein

**Authors:** Jakob Maier; Laurent Massoulié

**ID:** 149973 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=loV2n73ZW3>) | [PDF](<https://openreview.net/pdf?id=loV2n73ZW3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149973>)

The Procrustes\-Wasserstein problem asks to match the vectors in two unlabeled point clouds $X$ and $Y$, which are related via a latent orthogonal transformation\. This problem appears in unsupervised representation alignment, domain adaptation, and geometric matching, but its computational theory remains limited\. We study a planted Gaussian model in which $Y$ is obtained from $X$ via an unknown relabeling, an unknown orthogonal transformation, and additive noise\. Departing from the isotropic setting considered in prior work, we assume that the covariance of $X$ is anisotropic, with a power\-law spectrum\. While closer to real\-world data, this structure also enables a directions\-first approach: Estimate the dominant eigenspaces of both point clouds, then recover the matching\. We prove that a polynomial\-time version of this procedure exactly recovers the true relabeling with high probability under explicit scaling conditions\. To our knowledge, this is the first computational recovery guarantee for Procrustes\-Wasserstein with nontrivial observational noise and dimensions beyond $\\log n$, where $n$ is the number of points\. Experiments on synthetic data and 3D shapes support the theory, showing that anisotropy favors directions\-first methods, can lower runtime and improve recovery\.

## HARC: Coupling Harmfulness and Refusal Capabilities for Robust Safety Alignment

**Authors:** Shei Pern Chua; Fangzhao Wu

**ID:** 150177 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k78i4RMHGi>) | [PDF](<https://openreview.net/pdf?id=k78i4RMHGi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150177>)

Understanding how aligned LLMs internally represent safety is critical for diagnosing alignment vulnerabilities, as it explains why jailbreaks succeed and informs the design of robust alignment strategies\. Prior work shows that aligned LLMs encode harmfulness and refusal as separable directions in the residual stream at prompt\-side token positions\. We show that jailbreaks succeed at prompt encoding by suppressing either the refusal or harmfulness direction before any token is generated, with distinct attack classes occupying separable regions of the harmfulness\-refusal plane\. Extending the analysis to response\-token positions, we find that the model recognizes harmful content while it is generating that content, even when it failed to recognize the input as harmful at the prompt side\. Motivated by our findings, we introduce HARC \(Harmfulness\-And\-Refusal Coupling\), a fine\-tuning method that pairs the two directions across both prompt and response positions\. Since the intervention is confined to the harmfulness\-refusal subspace, it leaves the rest of the residual stream intact and does not degrade general capability or inflate over\-refusal\. Across extensive experiments, HARC achieves the strongest robustness\-capability\-usability trade\-off among six baselines spanning the major training\-time and inference\-time safety methods\. The harmfulness and refusal directions at prompt and response positions transfer across the five model families and two scales we tested without architecture\-specific tuning\.

## StereoTales: A Multilingual Framework for Open\-Ended Stereotype Discovery in LLMs

**Authors:** Pierre Le Jeune; Etienne Duchesne; Weixuan Xiao; Stefano Palminteri; Bazire Houssin; Benoît Malézieux; Matteo Dora

**ID:** 139613 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FRBT5zuX3I>) | [PDF](<https://openreview.net/pdf?id=FRBT5zuX3I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139613>)

Multilingual studies of social bias in open\-ended LLM generation remain limited: most existing benchmarks are English\-centric, template\-based, or restricted to recognizing pre\-specified stereotypes\. We introduce StereoTales, a multilingual dataset and evaluation pipeline for systematically studying the emergence of social bias in open\-ended LLM generation\. The dataset covers 10 languages and 79 socio\-demographic attributes, and comprises over 650k stories generated by 23 recent LLMs, each annotated with the socio\-demographic profile of the protagonist across 19 dimensions\. From these, we apply statistical tests to identify more than 1\{,\}500 over\-represented associations, which we then rate for harmfulness through both a panel of humans \(N = 247\) and the same LLMs\. We report three main findings\. \\textbf\{\(i\)\} Every model we evaluate emits consequential harmful stereotypes in open\-ended generation, regardless of size or capabilities, and these associations are largely shared across providers rather than isolated misbehaviors\. \\textbf\{\(ii\)\} Prompt language strongly shapes which stereotypes appear: rather than transferring as a shared set of biases, harmful associations adapt culturally to the prompt language and amplify bias against locally salient protected groups\. \\textbf\{\(iii\)\} Human and LLM harmfulness judgments are broadly aligned \(Spearman $\\rho=0\.62$\), with disagreements concentrating on specific attribute classes rather than specific providers\. To support further analyses, we release the evaluation code and the dataset, including model generations, attribute annotations, and harmfulness ratings\.

## Behaviour4All: A Dependency\-Aware Toolkit for in\-the\-wild Facial Behaviour Analysis

**Authors:** Dimitrios Kollias; Chunchang Shao; Odysseus Kaloidas; Ioannis Patras

**ID:** 150818 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f4bSbN3cg8>) | [PDF](<https://openreview.net/pdf?id=f4bSbN3cg8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150818>)

Facial behaviour analysis requires understanding valence–arousal \(VA\), expressions \(EXP\), action units \(AUs\), yet existing systems treat these tasks independently or use naïve MTL, ignoring their structured dependencies\. This leads to negative transfer, conflicting gradients, poor cross\-db generalisation, especially with heterogeneous datasets with only partial labels\. We propose Behaviour4All, the first dependency\-aware toolkit that unifies VA, EXP, AUs via explicit relational priors and principled optimisation framework\. Behaviour4All integrates psychophysically grounded task mappings with coordinated loss families to mitigate gradient conflicts and enforce coherent cross\-task semantics\. Across eight in\-the\-wild datasets, Behaviour4All achieves sota performance, improves fairness and generalisation, and outperforms vanilla MTL and student\-\-teacher baselines\.  We will release the complete toolkit \(code, pre\-trained models, etc\) upon acceptance\.

## Towards Fairness under Label Bias in Image Segmentation: Impact, Measurement and Mitigation

**Authors:** Aditya Parikh; Stella Christina Frank; Sneha Das; Aasa Feragen

**ID:** 152666 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RIbRRjYome>) | [PDF](<https://openreview.net/pdf?id=RIbRRjYome>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152666>)

Labeled datasets reflect the biases of their annotation pipelines, which sometimes introduce \*label bias\*: group\-conditional label errors that cause systematic performance disparities across demographic subgroups\. Label bias in image segmentation remains underexplored, as even detecting it typically requires clean, unbiased annotations, which are not readily available\. We present a data\-centric\}adaptation of Confident Learning to segmentation, allowing detection of label bias directly in the training data without a clean, unbiased ground truth\. By comparing the provided training labels to the model's confident predictions, we isolate directional errors that quantify the presence and nature of bias, where standard overlap metrics like Dice fail\. We further show that label bias influences subgroup separability in the encoder's feature space, an artifact we leverage for bias mitigation rather than suppressing it\. We evaluate three datasets, spanning from synthetic to real\-life bias, showing how our framework reliably detects and mitigates bias without access to clean labels, achieving equitable performance across experimental conditions\.

## Scheming Is a Symptom: Alignment Research Should Probe Reflexive Fragility

**Authors:** Nan Zhang; Heng Xu

**ID:** 140091 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H6iOdH8Ump>) | [PDF](<https://openreview.net/pdf?id=H6iOdH8Ump>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140091>)

Language models alter their behavior when they infer that they are being trained, evaluated, deployed, or weakly overseen\. Recent AI safety work treats this as evidence of scheming, and substantial effort is being directed toward its detection and prevention\. This position paper argues that the deeper significance of scheming is missed by asking only whether a model has a discrete tendency to scheme\. Drawing on theories of reflexive social systems, we argue that scheming\-like behavior is a structural consequence of alignment being \*reflexive\* \-\- a model's behavior is trained against its picture of an evaluative world that its outputs help constitute \-\- and recognizing this reveals broader risks than scheming itself\. We organize existing ML evidence as consistent with this diagnosis, outline the broader danger, and propose a research program to address it\.

## HPE: Hallucinated Positive Entanglement for Backdoor Attacks in Federated Self\-Supervised Learning

**Authors:** Jiayao Wang; Yang Song; Zhendong Zhao; Jiale Zhang; Xiaoying Lei; Qilin Wu; Wenliang Yuan; Junwu Zhu; Dongfang Zhao

**ID:** 154699 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bg2k6Fsw2a>) | [PDF](<https://openreview.net/pdf?id=Bg2k6Fsw2a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154699>)

Federated self\-supervised learning \(FSSL\) enables collaborative training of self\-supervised representation models without sharing raw unlabeled data\.  While it serves as a crucial paradigm for privacy\-preserving learning, its security remains vulnerable to backdoor attacks, where malicious clients manipulate local training to inject targeted backdoors\.  Existing FSSL attack methods, however, often suffer from low utilization of poisoned samples, limited transferability, and weak persistence\. To address these limitations, we propose a new backdoor attack method for FSSL, namely Hallucinated Positive Entanglement \(HPE\)\.  HPE first employs hallucination\-based augmentation using synthetic positive samples to enhance the encoder’s embedding of backdoor features\.  It then introduces feature entanglement to enforce tight binding between triggers and backdoor samples in the representation space\.  Finally, selective parameter poisoning and proximity\-aware updates constrain the poisoned model within the vicinity of the global model, enhancing its stability and persistence\. Experimental results on several FSSL scenarios and datasets show that HPE significantly outperforms existing backdoor attack methods in performance and exhibits strong robustness under various defense mechanisms\.

## Intersectional Fairness via Mixed\-Integer Optimization

**Authors:** Jiří Němeček; Mark Kozdoba; Illia Kryvoviaz; Tomáš Pevný; Jakub Marecek

**ID:** 154529 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CvEVWYfVb5>) | [PDF](<https://openreview.net/pdf?id=CvEVWYfVb5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154529>)

The deployment of Artificial Intelligence in high\-risk domains, such as finance and healthcare, necessitates models that are both fair and transparent\. While regulatory frameworks, including the EU's AI Act, mandate bias mitigation, they are deliberately vague about the definition of bias\. In line with existing research, we argue that true fairness requires addressing bias at the intersections of protected groups\. We propose a unified framework that leverages Mixed\-Integer Optimization \(MIO\) to train intersectionally fair and intrinsically interpretable classifiers\. We prove the equivalence of two measures of intersectional fairness \(MSD and SPSF\) in detecting the most unfair subgroup and empirically demonstrate that our MIO\-based algorithm improves performance in finding bias\. We train high\-performing, interpretable classifiers that bound intersectional bias below an acceptable threshold, offering a robust solution for regulated industries and beyond\.

## A Comprehensive View of Fairness through Distributional Stability

**Authors:** Gayane Taturyan; Charlotte Laclau; Stephan Clémençon

**ID:** 153293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MKUF4BK3dQ>) | [PDF](<https://openreview.net/pdf?id=MKUF4BK3dQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153293>)

We view fairness as a property of distributional stability\. Rather than assessing a predictor under a fixed data distribution, we study how its predictions change under perturbations that modify the composition of protected groups\. A predictor is fair if it remains stable under such shifts\. Under this perspective, several classical notions of fairness arise as stability with respect to specific perturbations, with the associated unfairness gap given by a Lipschitz constant of a prediction\-rate functional\. This formulation also yields guarantees that hold uniformly over a range of demographic compositions at test time, without requiring knowledge of the deployment distribution\. It leads to a learning procedure based on convex combinations of reweighted predictors, formulated as a second\-order cone program, for which we establish generalization bounds\. Experiments on standard benchmarks illustrate the approach\.

## Position: Fair Representations Cannot Hold What They Promise

**Authors:** Shai Ben\-David; Tosca Lechner; Ruth Urner

**ID:** 140022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lmeLparD9S>) | [PDF](<https://openreview.net/pdf?id=lmeLparD9S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140022>)

This position paper argues that \{\\sl fair representations cannot hold what they promise\}\. Fair representation learning has been a significant trend in research on fairness for machine learning models over the past decade\. The main idea of fair representation learning is to provide a data preprocessing mechanism which can facilitate fairness for downstream tasks, and research papers in this area often insinuate a fairness guarantee for all downstream tasks without further qualification\. However, provably this cannot be satisfied by any non\-degenerate representation\. We argue that such over\-promising can be harmful in downstream applications and that the responsibility for fairness cannot safely be outsourced to a representation provider in the way current research seems to suggest\. As a minimal requirement for a way forward, we suggest that newly proposed fairness representations should be accompanied by compatibility tests that would allow a user to verify whether the representation will actually guarantee fairness for the task at hand\.

## Evaluation Awareness in Language Models Has Limited Effect on Behaviour

**Authors:** Amelie Knecht; Lucas Florin; Thilo Hagendorff

**ID:** 148437 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xp2oWSnMPf>) | [PDF](<https://openreview.net/pdf?id=xp2oWSnMPf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148437>)

Large reasoning models \(LRMs\) sometimes note in their chain of thought \(CoT\) that they may be under evaluation\. Researchers worry that this verbalised evaluation awareness \(VEA\) causes models to adapt their outputs strategically, optimising for perceived evaluation criteria, which, for instance, can make models appear safer than they actually are\. However, whether VEA actually has this effect is largely unknown\. We tested this across open\-weight LRMs and benchmarks covering safety, alignment, moral reasoning, and political opinion\. We tested this both on\-policy, sampling multiple CoTs per item and comparing those that spontaneously contained VEA against those that did not, and off\-policy, using model prefilling to inject evaluation\-aware sentences where missing and remove them where present, with subsequent resampling\. VEA has limited effect on model behaviour: injecting VEA into CoTs produces near\-zero effects \(ω≤0\.06\), removing it causes small shifts \(ω≤0\.12\) and spontaneously occurring VEA shifts answer distributions by at most 3\.7 percentage points \(ω≤0\.31\)\. Our findings call for caution when interpreting high VEA rates as evidence of strategic behaviour or alignment tampering\. Evaluation awareness may pose a smaller safety risk than the current literature assumes\.

## Beyond the Half Approximation: Fair and Efficient Online Class Matching

**Authors:** Sander Borst; Max Springer

**ID:** 153402 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LdhHVOZXZ2>) | [PDF](<https://openreview.net/pdf?id=LdhHVOZXZ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153402>)

Online bipartite matching, where agents are known in advance but items arrive sequentially and must be irrevocably assigned, is fundamental to problems ranging from ride\-sharing to online advertising\. When agents belong to classes such as demographic groups or geographic regions, fairness demands equitable treatment across these groups\. Recent work introduced class envy\-freeness \(CEF\), a natural extension of the classical fair division notion: an algorithm is $\\alpha$\-CEF if each class receives value at least an $\\alpha$ fraction of what it could extract from any other class's bundle\. However, all known algorithms achieving constant\-factor CEF guarantees attain utilitarian social welfare \(total matching value\) of at most $\\frac\{1\}\{2\}$ times the optimum, far below the $1\-\\frac\{1\}\{e\} \\approx 0\.632$ achievable without fairness constraints\. We resolve the open question of whether fairness necessitates this efficiency loss, by introducing threshold\-based algorithms parameterized by $\\gamma \\in \[0,1\]$ that equalize allocations across classes until threshold $\\gamma$, then maximize efficiency\. For divisible matching, this yields simultaneous $\(1\-e^\{\-\\gamma\}\)$\-CEF and $\(1 \- \\frac\{e^\{\\gamma\-1\}\}\{\\gamma\+1\}\)$\-USW guarantees; for indivisible matching, $\\frac\{\\gamma\}\{2\}$\-CEF with the same USW\. Setting $\\gamma &gt; 0$ produces the first algorithms beating $\\frac\{1\}\{2\}$\-USW while maintaining constant CEF\. We complement this with a novel upper bound construction, proving no non\-wasteful $\\alpha$\-CEF algorithm can exceed $\\frac\{1 \+\\alpha \- e^\{\\alpha\-1\}\}\{1\+\\alpha\}$\-USW and correcting prior bounds that were vacuous for $\\alpha &lt; 0\.58$\. Our upper bound nearly matches our algorithms' performance, giving the first substantive characterization of the price of fairness in online class matching\.

## SecureClaw: Clawing Back Control of LLM Agents

**Authors:** Yuhan Ma; Stefan Schmid

**ID:** 156048 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0omFi3ZiBf>) | [PDF](<https://openreview.net/pdf?id=0omFi3ZiBf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156048>)

Tool\-using large language model \(LLM\) agents face two distinct security failures: unauthorized external actions and exposure of sensitive plaintext inside the runtime before any final output check can intervene\. Existing defenses usually protect one boundary, either the planner/runtime or the action sink, and therefore do not by themselves secure both surfaces\. We present SecureClaw, a dual\-boundary architecture that places authorization at the effect sink and plaintext confinement at the read boundary\. Sensitive reads pass through a trusted gateway that replaces raw values with opaque handles and, in the evaluated deployment, bounded summaries as an explicit declassification interface\. Writes that change external state follow a PREVIEW$\\rightarrow$COMMIT protocol in which only a trusted executor may commit the exact canonical request authorized by policy\. The runtime can still plan over summaries and symbolic references, but cannot directly dereference secrets or perform side effects\. Across AgentDojo, AgentLeak, and Agent Security Bench \(ASB\), SecureClaw is the only defense we evaluate in a common harness that simultaneously retains usable task utility and achieves 0\\% attack success rate \(ASR\) on ASB, 0\.64\\% ASR on AgentDojo, and 3\.23\\% overall leak on AgentLeak's attacked parity lane, which measures final\-output and internal\-relay leakage\.

## Dense Cross\-Tokenizer Distillation via Semantic Optimal Local Alignment

**Authors:** Mengyu Zheng; Zheyuan Bai; Yuchuan Tian; Chong Zhu; Tianyu Guo; Hanting Chen; Yunhe Wang

**ID:** 153427 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LQF7JsKagA>) | [PDF](<https://openreview.net/pdf?id=LQF7JsKagA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153427>)

Cross\-tokenizer knowledge distillation lacks a shared coordinatesystem between teacher and student vocabularies, and existingmethods each drop one of the two ingredients comparison needs:shape\-based objectives preserve density but discard token identity,lexical alignment restores identity but uses surface form as a proxyfor meaning, and text\-space matching compresses the teacher signalinto chunk\-level events\. We introduce SOLA \(Semantic Optimal LocalAlignment\), which reconstructs the missing coordinate systemexplicitly: it partitions inputs into decoded\-text blocks viaMinimal Complete Correspondence, estimates a cross\-vocabularycorrespondence cost from calibration text, and runs entropicoptimal transport on a bidirectional local support retrieved aroundeach teacher prediction\. Under matched training and decodingprotocols, SOLA outperforms direct cross\-tokenizer baselines onDolly instruction following, an UltraChat general\-instructionbenchmark, and code and math domain transfer; a coverage\-\-scorecorrelation and component ablations attribute the gain to theconstructed support\.

## Epistemic Pairwise Maximin Share

**Authors:** Michal Feldman; Amos Fiat; Yael Nissan; Tomasz Ponitka

**ID:** 155281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6pVA0fm67W>) | [PDF](<https://openreview.net/pdf?id=6pVA0fm67W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155281>)

We introduce epistemic pairwise maximin share \(EPMMS\), a new fairness notion for fair division of indivisible goods\. Two fundamental notions in this setting are envy\-freeness up to any item \(EFX\) and pairwise maximin share \(PMMS\), with PMMS being stronger than EFX\. While EFX has been extensively studied, far less is known about PMMS\. Recent work shows that relaxing EFX via an epistemic perspective leads to substantial progress on the EFX problem, raising the question of whether a similar approach can advance our understanding of PMMS\. Motivated by this, we initiate the study of EPMMS, the epistemic relaxation of PMMS\. EPMMS is  more challenging than EEFX: the key approaches underlying recent progress on epistemic EFX inherently fail to extend to EPMMS\.  We establish the following results\.   1\. For additive valuations, $4/5$\-EPMMS allocations exist and can be efficiently computed\.  2\. For bivalued valuations, EPMMS allocations exist and can be efficiently computed; in fact, we obtain the stronger guarantee of epistemic groupwise maximin share \(EGMMS\), which also strengthens the existence of MMS allocations for this setting\.  3\. EPMMS allocations exist in two settings where MMS allocations need not exist: instances with three additive agents or two types of additive agents\.

## Fairness in limited resource prediction\-driven decisions

**Authors:** Inbal Livni Navon; Eitan Bachmat

**ID:** 150117 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kXu9l8Thvx>) | [PDF](<https://openreview.net/pdf?id=kXu9l8Thvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150117>)

In recent years, many high\-stakes societal decisions are made by machine learning systems, often under strict capacity constraints that limit resources to a small subset of individuals\. In such settings, information gaps across populations can lead to highly unbalanced allocations\. We study prediction\-driven resource allocation through the lens of fairness\. We connect classical algorithmic fairness notions with resource allocation definitions, and characterize the trade\-offs between fairness and utility\. We introduce an adaptation of proportional fairness to this setting, showing that it yields a continuum of fairness criteria via a regularization parameter, along with quantitative bounds on the resulting price of fairness\. We further show that max\-min fairness and equal opportunity can incur an unbounded price of fairness in extreme cases, and propose a variant of equal opportunity with a bounded price of fairness\.

## Spectral Alignment in Forward–Backward Representations via Temporal Abstraction

**Authors:** Seyed Mahdi Basiri Azad; Jasper Hoffmann; Iman Nematollahi; Hao Zhu; Abhinav Valada; Joschka Boedecker

**ID:** 149102 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sslTJpHwTo>) | [PDF](<https://openreview.net/pdf?id=sslTJpHwTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149102>)

Forward\-backward \(FB\) representations provide a powerful framework for learning the successor representation \(SR\) in continuous spaces by enforcing a low\-rank factorization\. However, a fundamental spectral mismatch often exists between the high\-rank transition dynamics of continuous environments and the low\-rank bottleneck of the FB architecture, making accurate low\-rank representation learning difficult\. In this work, we analyze temporal abstraction as a mechanism to mitigate this mismatch\. By characterizing the spectral properties of the transition operator, we show that temporal abstraction acts as a low\-pass filter that suppresses high\-frequency spectral components\. This suppression reduces the effective rank of the induced SR while preserving a formal bound on the resulting value function error\. Empirically, we show that this alignment is a key factor for stable FB learning, particularly at high discount factors where bootstrapping becomes error\-prone\. Our results identify temporal abstraction as a principled mechanism for shaping the spectral structure of the underlying MDP and enabling effective long\-horizon representations in continuous control\.

## SafePro: Generation of Safe and Functional Proteins via Cross\-Task Conflict\-Aware Alignment

**Authors:** Chongyang Gao; Marco Postiglione; Venkatramanan Subrahmanian

**ID:** 151065 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dEUkSqPWuL>) | [PDF](<https://openreview.net/pdf?id=dEUkSqPWuL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151065>)

Protein language models \(PLMs\) enable the \\textit\{de novo\} design of functional proteins at scale, yet they lack intrinsic safety constraints, raising dual\-use concerns\. We introduce SafePro, a reinforcement\-learning framework that aligns PLMs against three simultaneous objectives: structural foldability, toxicity avoidance, and virulence avoidance\. SafePro features two novel components: \(1\) Cross\-Task Attentive Fusion \(CTAF\), a joint reward model that employs gated cross\-attention between toxicity and virulence experts to capture shared biological signals without inducing negative transfer, and \(2\)Task\-Conflict\-Saliency MGDA \(TCS\-MGDA\), an adaptive weight\-calibration procedure for Proximal Policy Optimization \(PPO\)\. TCS\-MGDA resolves gradient Gram\-matrix dilution via parameter\-space saliency filtering\. On ProGen2, SafePro improves composite alignment scores by $\+5\.21$ over the strongest fixed\-weight baseline, significantly reducing toxicity \($0\.0523 \\to 0\.0139$\) and virulence \($0\.6926 \\to 0\.5407$\) while maintaining structural quality\. Among structurally designable outputs \(scRMSD $&lt; 2$\\,\\AA\), SafePro reduces the harmful fraction from $89\\%$ to $34\\%$ while producing more than twice as many designable sequences as the base model\. We also release a curated virulence dataset of $54\{,\}166$ sequences from VFDB\.

## From Isolated feature to Orbits:\\\\Discovering Music Concepts via Multi\-SAE Alignment

**Authors:** Liwei Lin; Gus Xia

**ID:** 152999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OiLTPYgHYL>) | [PDF](<https://openreview.net/pdf?id=OiLTPYgHYL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152999>)

How can we understand what a music foundation model has learned \\textit\{internally\}? Most interpretability approaches, such as probing and Sparse Autoencoders \(SAEs\), focus on identifying individual features with minimal structural assumptions\. We argue that many concepts are better understood as \\textit\{structured relations\} rather than isolated features\. This is especially prominent in music, where tonal structures are organized in the space of pitch and time\. For example, concepts such as chords or keys are naturally expressed as structured sets \(e\.g\., the 12 transpositions of a chord or the diatonic system within a key\), rather than isolated features\. In this study, \\textbf\{we shift from feature identification to structure\-based analysis\}, asking whether the learned inner representations of music language model emerge as organized structures over features\. To this end, we introduce a framework that uses pitch transposition as an inductive bias to induce ordered orbits via multi\-view SAE alignment\. Concretely, we generate pitch\-shifted input pairs and align their SAE representations to discover structured groups of pitch\-related features\. Experimental results show that this approach recovers orbit structures corresponding to chords, keys, and melodic patterns across two state\-of\-the\-art music foundation models, while requiring only minimal grounding \(e\.g\., a few anchor examples\) to interpret entire concept families\. Beyond interpretability, our results suggest a new paradigm for representation analysis: evaluating whether coherent relational structures emerge in learned representations as a proxy for model understanding\.

## Overcoming Rank Collapse in Feedback Alignment

**Authors:** Gauthier Boeshertz; Razvan Pascanu; Claudia Clopath

**ID:** 152172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V0LvPorUoL>) | [PDF](<https://openreview.net/pdf?id=V0LvPorUoL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152172>)

Backpropagation \(BP\) is widely viewed as biologically implausible, in part because it requires feedback weights to be the transpose of forward weights for error propagation\. Interestingly, when training a network with fixed random feedback weights to circumvent this issue, learning aligns the forward weights with the feedback weights, leading the backpropagated error signal to become an approximation of the standard gradient used by BP\. This process, called Feedback Alignment \(FA\), occurs in MLPs and very shallow CNNs but does not scale well to deeper architectures\. In this work, we first investigated differences between BP and FA models, trained on CIFAR10, specifically focusing on the effective rank of the signal\. We found that the FA error has a considerably lower rank and hence is constrained to a lower\-dimensional subspace compared to BP, limiting exploration of the parameter space\. Motivated by this observation, we evaluated two mechanisms for increasing the effective dimensionality of FA: Muon, an optimiser that orthogonalises weight updates; and hidden activity normalisation, which promotes activation orthogonality\. Across larger architectures and benchmarks, we find that these methods consistently improve over FA baselines, for example, on CIFAR100 with a Resnet\-18, accuracy increases by 9 percentage points\. Our results identify low\-dimensional gradient dynamics as a key obstacle to scaling FA and suggest that inducing higher\-dimensional update geometry is a promising route toward scaling alternatives to backpropagation\.

## Chaining 2\-FWL GNNs for Combinatorial Graph Alignment

**Authors:** Marc Lelarge

**ID:** 151502 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aAfBJ8E8TU>) | [PDF](<https://openreview.net/pdf?id=aAfBJ8E8TU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151502>)

For the combinatorial graph alignment problem \(GAP\) \-\-\- finding the node correspondence that maximizes the number of common edges between two unlabeled graphs \-\-\- properly initialized FAQ remains a strong classical baseline, while existing GNN approaches struggle in the purely structural setting\. We introduce a chaining procedure: a sequence of Folklore\-type \(2\-FWL\) GNNs in which each network is trained with cross\-entropy after decoding the previous network's similarity matrix and ranking nodes by their current alignment quality\. This non\-differentiable ranking step injects discrete combinatorial feedback at every link; at inference, we iterate the final network and keep the candidate with highest observed nce\. On sparse Erdos\-\-Renyi graphs at noise level 0\.25, chained FGNNs with FAQ post\-processing reach $85\\%$ accuracy versus 13% for FAQ initialized from the convex relaxation\. On correlated regular graphs, where constant\-feature MPNNs collapse to uninformative similarities and FAQ's convex initialization is degenerate, chaining recovers non\-trivial alignments among the methods we evaluate\. On three real\-world benchmarks \(yeast PPI, coauthorship, and road networks\), dataset\-specific chained FGNNs provide modest gains over a properly initialized FAQ baseline\.

## Improved techniques for fine\-tuning flow models via adjoint matching: a deterministic control pipeline

**Authors:** Zhengyi Guo; Jiayuan Sheng; David Yao; Wenpin Tang

**ID:** 154921 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ye0wbdavj>) | [PDF](<https://openreview.net/pdf?id=9ye0wbdavj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154921>)

We propose a deterministic adjoint matching framework that formulates human preference alignment for flow\-based generative models as an optimal control problem over velocity fields\. One can directly regress the control toward a value\-gradient\-induced target under the current policy, leading to a simple and stable training objective\. Building on this perspective, we introduce a truncated adjoint scheme that focuses computation on the terminal portion of the trajectory, where reward\-relevant signals concentrate, which yields substantial computational savings while preserving alignment quality\. We further generalize the framework beyond standard KL\-based regularization, allowing more flexible trade\-offs between alignment strength and distributional preservation\. Experiments on SiT\-XL/2 and FLUX\.2\-Klein\-4B demonstrate consistent gains across multiple alignment metrics, along with substantially improved diversity and mode preservation\.

## Learnable Chernoff Baselines for Provable Inference\-Time Alignment

**Authors:** Sunil Madhow; Yuchen Liang; Ness Shroff; Yingbin Liang; Yu\-Xiang Wang

**ID:** 148994 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tal8YMD53R>) | [PDF](<https://openreview.net/pdf?id=tal8YMD53R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148994>)

We study inference\-time reward\-guided alignment for generative models\. Existing methods often rely on either architecture\-specific adaptations or computationally costly inference procedures\. We introduce Learnable Chernoff Baselines \(LCBs\) as a method for efficiently and approximately sampling from the exponentially tilted kernels that arise from KL\-regularized reward alignment\. Using only black\-box sampling access to the pretrained model, LCBs implement a form of rejection sampling with adaptively selected acceptance probabilities, which allows fine\-grained control over inference\-compute scaling\. We establish total\-variation guarantees to the ideal aligned model, which reveal the dimension\-independent quantities governing the tradeoff between accurate sampling and inference compute\. We empirically demonstrate in both continuous and discrete diffusion settings that LCB sampling closely matches ideal rejection sampling, but uses substantially fewer queries to the pretrained model\. Our experiments also include real\-world data experiments on a diffusion large language model\.

## Coding with "Enemy": Can Human Developers Detect AI Agent Sabotage?

**Authors:** Jingheng Ye; Huiqi Zou; Simon Yu; Weiyan Shi

**ID:** 155551 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ip9zQaFI7>) | [PDF](<https://openreview.net/pdf?id=4ip9zQaFI7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155551>)

AI coding agents are increasingly embedded in real\-world software development, collaborating closely with human developers while gaining broader access to codebases and tools\. This creates a new attack surface: an agent can exploit human trust to sabotage development, for instance by inserting malicious code to accomplish a hidden side task\. Most prior work studies AI sabotage in AI\-only settings, paying limited attention to the role of human oversight in detecting and mitigating such malicious behavior\. To address this gap, we conduct the first large\-scale study of human oversight in AI coding sabotage\. Over 100 participants collaborate with one of the four frontier models \(Claude Opus\-4\.6, GPT\-5\.4, Gemini\-3\.1\-Pro, and MiniMax\-M2\.7\) on a long\-horizon coding task lasting around five hours, designed to mimic real\-world workflows\. We find that 95\\% of developers fail to detect sabotage, and our analysis of participant feedback attributes this vulnerability to coding without review, plausible cover story, and overtrust in agents\. We further test the effectiveness of a safety monitor in one condition: while the monitor reduces sabotage success, 56\\% of participants still accept the malicious code, ignoring its warnings\. Drawing on participant feedback, we offer actionable suggestions for better monitor design\. This work complements existing AI safety research and highlights an urgent need for human\-centric safety mechanisms that account for human factors, particularly in long\-horizon, real\-world development settings\.

## Improving Conditional Modeling via Inter\-Class Likelihood\-Ratio Maximization and Unifying Classifier\-Free Guidance with Alignment Objectives

**Authors:** Xiang Li; Yixuan Jia; Xiao Li; Jeffrey Fessler; Rongrong Wang; Qing Qu

**ID:** 149052 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tDqT2QD3Da>) | [PDF](<https://openreview.net/pdf?id=tDqT2QD3Da>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149052>)

Diffusion models achieve strong performance in generative modeling, but their success often relies heavily on classifier\-free guidance \(CFG\), an inference\-time heuristic that modifies the sampling trajectory\. In theory, diffusion models trained with standard denoising score matching \(DSM\) should recover the target data distribution, raising two fundamental questions: \(i\) why is inference\-time guidance necessary in practice, and \(ii\) can its underlying effect be internalized into a principled training objective? In this work, we argue that a key limitation of standard DSM is insufficient inter\-class separation\. To address this issue, we propose MCLR, an alignment objective that explicitly maximizes inter\-class likelihood\-ratios during training\. Fine\-tuning diffusion models with MCLR induces CFG\-like improvements under standard sampling, substantially improving guidance\-free conditional generation and narrowing the gap to inference\-time CFG\. Beyond these empirical benefits, we show theoretically that the CFG\-guided score is exactly the optimal solution to a sample\-adaptive weighted MCLR objective\. This result connects CFG to alignment\-based objectives, providing a mechanistic interpretation of CFG as an implicit inference\-time contrastive alignment procedure\.

## Align\-RAG: Alignment Is All You Need for TSFM In\-Context Learning

**Authors:** Mohammad Asadi; Soheil Hor; Bardiya Akhbari; Jack W O'Sullivan; Tahoura Nedaee; Layne Price; Raviteja Anantha Ramesh; Euan Ashley; Ehsan Adeli

**ID:** 152416 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=THqFc0nGPv>) | [PDF](<https://openreview.net/pdf?id=THqFc0nGPv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152416>)

Retrieval\-augmented forecasting promises to adapt frozen Time Series Foundation Models \(TSFMs\) to new domains without fine\-tuning, but recent methods typically rely on learned fusion modules, i\.e\., trained adapters that merge retrieved examples into the backbone's forecast, based on the assumption that frozen backbones cannot dynamically incorporate retrieved context on their own\. We show this assumption is unnecessary\. We introduce $\\textbf\{Align\-RAG\}$, a training\-free method that applies a closed\-form per\-pair amplitude rescaling and integer\-lag phase shift to retrieved past\-\-future windows before they enter a frozen backbone's context\. With no learned parameters, Align\-RAG outperforms the state\-of\-the\-art trained retrieval adapter on a frozen Chronos\-Bolt on all seven datasets of the standard benchmark \(avg $\-3\.75\\%$ MSE\), showing that the gains previously attributed to learned fusion are recoverable without any training\. Align\-RAG further improves zero\-shot MSE on four additional frozen TSFMs with various architectures by $2\.5\\%$ to $13\.7\\%$ per backbone with no per\-backbone tuning\. To probe why alignment helps, we compare the frozen backbone's prediction shift under aligned demonstrations to the closed\-form ridge prediction shift on the same pairs\. We find that aligned demonstrations induce prediction shifts that track a closed\-form ridge predictor on the same pairs, with a future\-shuffle control ruling out a futures\-averaging account\. Together, these results indicate that frozen TSFMs already support dynamic in\-context use of retrievals, and that closed\-form alignment should be the default baseline for retrieval\-augmented forecasting before any fusion module is trained\. Code available at: \\url\{https://anonymous\.4open\.science/r/phase\-rag\-4D92\}

## Do Thinking Tokens Help with Safety?

**Authors:** Narutatsu Ri; Abhishek Panigrahi; Sanjeev Arora

**ID:** 150945 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e7zF0NYC0J>) | [PDF](<https://openreview.net/pdf?id=e7zF0NYC0J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150945>)

Today's reasoning models use thinking tokens to attain stronger performance on benchmarks than their instruction\-tuned counterparts\.  It is also generally believed that this more  "deliberative" mode should improve alignment and safety, by providing the model a safe space to consider whether its planned answer to the request violates its safety principles\. We present evidence that this intuition is not always correct\. Across frontier open\-weight reasoning models spanning GPT\-OSS, Phi, OLMo, and Qwen model families, we find that the model's decision is already strongly encoded at the beginning of thinking, with a probe on the first token's hidden representation predicting refusal/compliance with $\\ge0\.85$ AUROC and $\\sim90$\\% balanced accuracy\. We also find little evidence that current models can use their thinking trace to deliberate about safety, as additional thinking after the first 20\\% of the trace rarely moves the final decision\. While sentence\-level inspection of thinking traces  may show signs of oscillation between refusal\- and compliance\-leaning rationales, we find that in $\\geq 85$\\% of thinking traces, such oscillations exert limited to no influence on the final response\. We also examine the effect of existing inference\-time and training\-based safety interventions and find that they largely alter thinking behavior by shifting models toward more refusal\-leaning reasoning while substantially reducing helpfulness on benign prompts\.  Our results suggest that safety behavior in current reasoning models is much less deliberative than commonly assumed, highlighting the need for training methods that more effectively utilize thinking traces for safety\-critical decision making\.

## Algorithmic Impact Reveals the Hidden Structure of Alignment

**Authors:** Zachary Wojtowicz; Michelle Si; Finale Doshi\-Velez; Ariel Procaccia

**ID:** 150980 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dnysHFYeGx>) | [PDF](<https://openreview.net/pdf?id=dnysHFYeGx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150980>)

When an algorithm makes a decision affecting multiple people, we implicitly have a social choice problem: how should differing opinions about the right course of action be reconciled into a single outcome? We show that if we make welfare consequences of alignment a first\-order consideration, this problem can be reformulated as linear optimization on a convex \*impact space\*, making it amenable to toolkits from welfare economics and mechanism design\. This reformulation provides a clearer understanding of how different protocols shape an algorithm's externalities\. Our linear optimization framework uncovers a straightforward solution to strategyproof alignment mechanism—random dictatorship that can be represented as a single parameter, which regulates externalities from manipulation\. In addition, our framework allows us to express a family of constrained welfare mechanisms that address participation externalities—how an individual's participation can affect others in the population—and maximize social welfare subject to guarantees on individual outcomes\. We illustrate these results empirically using real human preferences over kidney donation assignment, charitable food distribution, LLM responses, and trolley problems\.

## Temporal Gradient Inversion for Private Trajectory Reconstruction in Embodied Reinforcement Learning

**Authors:** Sudip Bhujel; Shanghao Shi; Ruiquan Huang; Ning Zhang; Yang Xiao

**ID:** 151269 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=beAxdz8rqD>) | [PDF](<https://openreview.net/pdf?id=beAxdz8rqD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151269>)

Distributed learning in embodied reinforcement\-learning agents offers a degree of privacy by retaining raw sensor data on\-device and transmitting only policy gradients to the server\. Yet temporal structure can amplify this leakage beyond single\-frame attacks\. We introduce \*\*T\*\*emporal \*\*R\*\*econstruction \*\*A\*\*ttack on \*\*C\*\*onsecutive \*\*E\*\*ncodings \(TRACE\), an amortized temporal gradient\-inversion attack that autoregressively reconstructs the sequence of private observation\-action trajectories from per\-step policy\-learning gradients\. The attack exploits two structural signals ignored by prior single\-frame methods: \(i\) cross\-time correlation between successive embodied gradients, which we formalize via a conditional mutual\-information bound, and \(ii\) closed\-form action recovery from policy\-head gradient structure, which we prove exact when standard entropy regularization is sufficiently small\. On held\-out embodied scenes, TRACE reaches $18\.8$ dB PSNR with near\-perfect action recovery at $3$\-$4\.5$ ms per reconstructed frame, dominating the learning\-based baseline across all reconstruction metrics and exceeding optimization attacks while running orders of magnitude faster\. Defense experiments suggest that protecting temporal gradient streams may require sequence\-aware privacy mechanisms\.

## Co\-Evolving Interpolants and Flows via Path\-Flow Alignment

**Authors:** Zeyu Michael Li; William X Chen; Xiang Cheng

**ID:** 153495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KyEvA048lp>) | [PDF](<https://openreview.net/pdf?id=KyEvA048lp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153495>)

We study path\-\-flow alignment as a unified training objective for flow matching\. Instead of fixing the interpolation path and learning only the velocity field, we jointly train an endpoint\-preserving path network and a flow network using the same alignment loss: the flow learns to match the path velocity, and the path learns to align its velocity to the current flow\. Although every fixed learned path defines a valid flow\-matching objective, the alignment loss alone is not a reliable criterion for path learning\. We identify \*path overfitting\*, a failure mode in which the alignment loss decreases while sample quality worsens\. We trace this failure to low\-entropy bottlenecks in the induced probability path, where the learned interpolant routes samples through overly concentrated intermediate marginals\. Motivated by this diagnosis, we introduce a stochastic path regularizer that hides part of the source information from the path network while preserving exact endpoints\. The resulting regularized objective controls entropy collapse and makes joint path\-\-flow training effective\. On ImageNet\-$256\\times256$ with SiT backbones, our method consistently improves FID across model scales, extends to model\-guidance training, and leaves the inference\-time architecture and sampler unchanged\. Code is available at https://anonymous\.4open\.science/r/traj\_opt\_paper\-4D80\.

## When Everyone Can Submit: Designing Contests with Transparent Pre\-Selection

**Authors:** Hanbing Liu; Ningyuan Li; Weian Li; Qi Qi; Changyuan Yu

**ID:** 150247 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jeByXmpj9o>) | [PDF](<https://openreview.net/pdf?id=jeByXmpj9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150247>)

Shortlisting is a common and effective method for pre\-selecting participants in competitive settings\. To ensure fairness, a cut\-off score is typically announced, allowing only contestants who exceed it to enter the contest, while others are eliminated\. In this paper, we study rank\-order contests with shortlisting and cut\-off score disclosure\. We fully characterize the equilibrium behavior of shortlisted contestants for any given prize structure and shortlist size\. We examine two objective functions: the highest individual performance and total performance\. Under linear performance costs, for both objectives, the optimal contest is in a winner\-take\-all format\. For the highest individual performance, the optimal shortlist size is exactly two contestants, but, in contrast, for total performance, the shortlist size does not affect the outcome, i\.e\., any size yields the same total performance\. Furthermore, we compare the highest individual performance achieved with and without shortlisting, and show that the former is 4/3 of the latter\.

## RigidFormer: Learning Rigid Dynamics using Transformers

**Authors:** Zhiyang \(Frank\) Dou; Minghao Guo; Haixu Wu; Doug Roble; Tuur Stuyck; Wojciech Matusik

**ID:** 152768 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QWRZoUcNGH>) | [PDF](<https://openreview.net/pdf?id=QWRZoUcNGH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152768>)

Learning\-based simulation of multi\-object rigid\-body dynamics remains difficult because contact is discontinuous and errors compound over long horizons\. Most existing methods remain tied to mesh connectivity and vertex\-level message passing, which limits their applicability to mesh\-free inputs such as point clouds and leads to high computational cost\. Efficiently modeling high\-fidelity rigid\-body dynamics from mesh\-free representations, therefore, remains challenging\. We introduce RigidFormer, an object\-centric Transformer\-based model that learns mesh\-free rigid\-body dynamics with controllable integration step sizes\. RigidFormer reasons at the object level and advances each object through compact anchors; Anchor\-Vertex Pooling enriches these anchors with local vertex features, retaining contact\-relevant geometry without dense vertex\-level interaction\. We propose Anchor\-based RoPE to inject anchor geometry into attention while respecting the unordered nature of objects and anchors: object\-token processing is permutation\-equivariant, and the mean\-pooled anchor descriptor is invariant to anchor reindexing while preserving shape extent\. RigidFormer further enforces rigidity by projecting updates onto the rigid\-body manifold using differentiable Kabsch alignment\. On standard benchmarks, RigidFormer outperforms or matches mesh\-based baselines using point inputs, runs faster, generalizes to unseen point resolutions and across datasets, and scales to 200\+ objects; we also show a preliminary extension to command\-conditioned articulated bodies by treating body parts as interacting object\-level components\. Code will be released upon publication\.

## Rethinking Semantic ID Construction for Generative Recommendation: SimHash with Parallel Decoding and Semantic Alignment

**Authors:** Yuqing Liu; Huiyuan Chen; Yibo Wang; Wooseong Yang; Philip S Yu

**ID:** 153861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IBNgVQ7CIB>) | [PDF](<https://openreview.net/pdf?id=IBNgVQ7CIB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153861>)

Semantic ID\-based generative recommendation represents each item as a sequence of discrete tokens, enabling structured modeling of item semantics\. A critical challenge is constructing semantic IDs that are both semantically expressive and computationally efficient\. While recent approaches favor complex learned quantization, simple hashing\-based methods such as SimHash are widely regarded as fundamentally inferior\. In this work, we challenge this consensus by showing that the apparent performance gap does not stem from inherent limitations of hashing, but rather from a structural mismatch with autoregressive decoding, coupled with the inevitable information loss during rigid discretization\. Based on this insight, we propose FLASH, a two\-stage framework that revitalizes training\-free SimHash tokenization through parallel decoding and explicit semantic alignment\. Despite its simplicity, FLASH achieves state\-of\-the\-art performance across multiple datasets without requiring any tokenizer training, while exhibiting stronger generalization in cold\-start scenarios\. Notably, we demonstrate that semantic alignment acts as a universally effective mechanism across diverse paradigms\. Our findings suggest that, with compatible decoding and semantic grounding, simple and efficient tokenizers can outperform complex learned counterparts\. Our code and data are available: https://anonymous\.4open\.science/r/Flash\-014A/\.

## Accuracy vs\. Accuracy: Computational Tradeoffs Between Classification Rates and Utility

**Authors:** Noga Amit; Omer Reingold; Guy Rothblum

**ID:** 148397 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y9NcQvGb4C>) | [PDF](<https://openreview.net/pdf?id=y9NcQvGb4C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148397>)

We revisit the foundations of fairness and its interplay with utility and efficiency in supervised learning settings where training labels are richer than binary outcomes, such as risk estimates \(probabilities\), individual types, or rankings\. We introduce new notions of accurate classification rates for subgroups in the population, defined by comparing the induced positive\-classification rates to those under the Bayes\-optimal rich predictor\. Our main contributions are computational impossibility results: we show that simultaneously achieving these rate\-accuracy guarantees and natural desiderata such as calibration or loss minimization is, in some cases, computationally infeasible, even when training examples are labeled by the Bayes\-optimal rich predictor\. Unlike prior impossibility results in this area, these desiderata are simultaneously satisfied by the Bayes\-optimal predictor, and each can be achieved efficiently in isolation\.

## Beyond Trajectory Matching: Reflow with Marginal Distribution Alignment

**Authors:** Chen Wang; Peiran Yun; Pan Xie; Ke Deng

**ID:** 155442 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5a2Wi08KqE>) | [PDF](<https://openreview.net/pdf?id=5a2Wi08KqE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155442>)

Diffusion and continuous\-flow generative models achieve high\-quality generation, and their deterministic sampling can be formulated as solving learned ODE dynamics\. However, accurate ODE discretization often requires many steps, making efficient few\-step generation a key challenge\. Among acceleration strategies, reflow\-based distillation simplifies teacher ODE trajectories so that a student model can approximate the teacher transport with fewer steps\. We identify a theoretical limitation of this paradigm, namely that trajectory matching can under\-determine the distribution induced by the student model\. In particular, two student models can attain the same trajectory\-matching loss while inducing different endpoint marginal distributions, which may lead to different generation quality\. To address this limitation, we introduce a marginal\-alignment regularizer that penalizes the discrepancy between the student\-induced marginal and the corresponding teacher marginal at the endpoint of each distillation interval\. The regularizer is computed by tracking log\-density changes along the ODE induced by the student model and evaluating scores from the frozen teacher model, without requiring auxiliary trainable networks or adversarial optimization\. The resulting framework applies uniformly to the reflow family, including vanilla reflow and piecewise reflow\. We further prove a telescoping total\-variation bound showing that local marginal alignment controls the final\-time discrepancy between the student\-induced and teacher\-induced distributions\. Experiments on benchmark backbones demonstrate the effectiveness of the proposed method for few\-step generation\.

## AI Safety Evaluations Need More Human\-AI Experiments

**Authors:** Michelle Vaccaro; Jaeyoon Song; Abdullah Almaatouq; Michiel Bakker

**ID:** 140074 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PJWEhF0jaH>) | [PDF](<https://openreview.net/pdf?id=PJWEhF0jaH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140074>)

Current frontier AI safety evaluations emphasize static benchmarks, third\-party annotations, and red\-teaming\. In this position paper, we argue that AI safety research should focus on human\-centered evaluations that measure harmful capability uplift: the marginal increase in a user's ability to cause harm with a frontier model beyond what conventional tools already enable\. We frame harmful capability uplift as a core AI safety metric, ground it in prior social science research, and provide concrete methodological guidance for systematic measurement\. We conclude with actionable steps for developers, researchers, funders, and regulators to make harmful capability uplift evaluation a standard practice\.

## Loop alignment: Self\-organized Weight Transpose in Predictive Coding through Independent Hebbian Plasticity\.

**Authors:** Kojiro Hirokane; Ryohei Ueno; Takashi Kitsukawa

**ID:** 148287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yyy2M0dK0r>) | [PDF](<https://openreview.net/pdf?id=yyy2M0dK0r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148287>)

Backpropagation \(BP\) requires feedback \(FB\) weights to equal the transpose of feedforward \(FF\) weights at every layer and at every step\. This issue is called the weight transport problem, and has been considered to be biologically implausible\. Neural circuits are not built from anatomically paired FF/FB axons but from asymmetric projections that form recurrent loops shared across many computations\. In multi\-nuclei circuits \(e\.g\., thalamo\-cortical, cortico\-cerebellar, basal\-ganglia loops\), the return path traverses entirely distinct nuclear structures, making any mechanism for maintaining synchronized weight transposes anatomically absent\. Predictive coding \(PC\), originally proposed as a biologically plausible substitute for BP, silently inherits this constraint despite its biological motivation\. Therefore, we propose two PC variants that eliminate it entirely\. PC\-DH \(Dual Hebbian plasticity model\) updates FF and FB weights by independent local Hebbian rules with no inter\-pathway coordination\. PC\-RFB \(Random FeedBack\) fixes the FB weight with a random matrix, testing the robustness of the learning mechanism\. Both match baseline PC accuracy \(\~85\\% on MNIST\)\. We identify a phenomenon we termed \\textbf\{Loop Alignment\}: the spontaneous convergence of FF and FB weights toward a transpose relationship, driven by the structure of the inference loop\. We then prove that it holds exactly at every training step in both models\. To test whether Loop Alignment holds in the multi\-nuclei setting, we conduct a circuit\-sharing experiment: two networks learn different tasks \(Net 1: MNIST; Net 2: Fashion\-MNIST\) over a shared pathway, where each network's FB is routed through the other's FF weights\. Even when the entire shared pathway is plastic and driven simultaneously by both tasks, each network solves its task independently and FF/FB alignment is stronger than in the isolated case\. Loop Alignment explains how the brain can learn effectively without weight transport, and support multi\-task learning over shared asymmetric circuits\.

## CultureRed: Benchmarking Culture\-Specific AI Safety Based on Global Statutes

**Authors:** Xun Liu; Mintong Kang; Seok Min Lim; Ong C Hui; Bo Li

**ID:** 139752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6hX4bhydM1>) | [PDF](<https://openreview.net/pdf?id=6hX4bhydM1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139752>)

Safety alignment and evaluation of LLMs has become increasingly difficult due to the diverse definitions of harmful behavior across cultures\. Existing safety benchmarks are largely culture\-agnostic or built on ad\-hoc taxonomies, and mainly evaluate refusals for prohibited requests while overlooking legally defined exceptions, making over\-refusal difficult to quantify\. To address these gaps, we introduce a large\-scale culture\-aware data synthesis pipeline and CultureRed as the first global culture\-specific AI safety benchmark based on 252 legal statutes across 15 countries\. Based on legal statutes, our pipeline automatically transforms statutes into actionable policy rules that cover both prohibitions and legally defined exceptions, cluster policy rules into risk topics and fine\-grained categories, and generates policy rule\-conditioned data that models should either refuse or comply with\. The resulting benchmark contains 54,470 policy rule\-\-prompt pairs spanning 6,256 fine\-grained risk categories\. We further run a human study with government experts to validate the dataset quality\. Leveraging CultureRed, we conduct a comprehensive evaluation for 14 advanced generative LLMs and 16 frontier guardrail LLMs, unlocking a range of findings, such as \(1\) Culture\-specific safety performance varies substantially, with EU presenting the most challenging for generative models \(average Harm Rate of 39\.4%\); \(2\) Generative model series evolution exhibits divergent patterns, where GPT series achieves balanced alignment \(5 times Harm Rate reduction while maintaining Help Rate above 90%\), but Claude series shows safety\-helpfulness tradeoff \(5 times Harm Rate reduction but Help Rate drops from 61\.9% to 49\.9%\); \(3\) Guardrail models systematically under\-guard unsafe content, with high false positive rate\.

## Safeguarding LLMs via Model\-Agnostic Latent Safety Signals from Dark Knowledge

**Authors:** Wonjun Lee; Kyungsik Yang; Gaeun Ji; Vaidehi Patil; Haon Park; Bumsub Ham; Mohit Bansal; Suhyun Kim

**ID:** 154611 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CIcsWVLkb3>) | [PDF](<https://openreview.net/pdf?id=CIcsWVLkb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154611>)

Large Language Models \(LLMs\) have advanced rapidly, raising growing concerns about their safety\. Recent work has proposed various approaches to detect and defend against adversarial attacks including defense mechanisms at the decoding stage that leverage models' internal hidden states\. However, existing decoding\-stage defenses suffer from two limitations\. First, they introduce a trade\-off between safety and over\-refusal, where strengthening safety degrades the model's helpfulness on benign queries\. Second, many of these methods rely on internal hidden states and are thus restricted to specific architectures, incurring substantial overhead and limited generalization across models\. To address these limitations, we introduce LADE \(Latent Safety Signals for Defense\), which leverages latent safety signals extracted by contrasting harmful and benign queries from dark knowledge \(i\.e\., information carried by the output probability distribution beyond its argmax\) in the first\-token output probability distribution\. Our key insight is that, beyond surface\-level refusal tokens, the dark knowledge in the first\-token distribution contains latent safety signals, defined as tokens whose probabilities differ sharply between harmful and benign queries\. We empirically show that these signals consistently align across diverse LLMs, forming a model\-agnostic direction that reflects an intrinsic property of safety\-aligned language models\. LADE consists of three components: \(1\) Extracting Latent Safety Signals from Dark Knowledge, which selects top\-k safety\-discriminative tokens from the first\-token probability distribution; \(2\) Tokenizer Mapping, which maps these tokens across different tokenizers to enable model\-agnostic application; and \(3\) kNN\-based Discrimination, which classifies queries via a k\-Nearest Neighbors search over the mapped tokens\. Across six LLMs and multiple benchmarks, LADE remains robust against a wide range of jailbreak attacks and lowers attack success rates with minimal over\-refusal\.

## Community\-Centered AI is Feasible and Beneficial for Impacted Communities

**Authors:** Tzu\-Sheng Kuo; Quan Ze Chen; Amy Zhang; Kenneth Holstein; Haiyi Zhu

**ID:** 140008 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tkc8ELIzzV>) | [PDF](<https://openreview.net/pdf?id=tkc8ELIzzV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140008>)

AI systems are increasingly used in community contexts, yet they often fail to align with the communities they impact\. To address this misalignment, we advocate for community\-centered AI\-\-\-an AI development paradigm that shifts away from pursuing general\-purpose AI and instead focuses on co\-developing tailored AI systems with the specific communities they impact\. This position paper argues that community\-centered AI is both feasible and beneficial for impacted communities\. To support this argument, we first outline the potential benefits of community\-centered AI, including greater alignment, enhanced legitimacy, capacity building, and normative justification\. Next, we highlight emerging efforts in community\-centered AI across the AI development process, demonstrating its feasibility in delivering these benefits\. Finally, we propose a framework to guide future work in this area, characterizing community\-centered AI efforts along three dimensions: participation mode, decision\-making process, and development layer\. Overall, this paper calls for increased research on community\-centered AI\.

## Inference Time Nash Alignment

**Authors:** Hadi Hosseini; Debmalya Mandal; Duohan Zhang

**ID:** 153713 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JKuHvi1fHD>) | [PDF](<https://openreview.net/pdf?id=JKuHvi1fHD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153713>)

Preference\-based fine\-tuning methods such as RLHF and DPO require substantial compute and large preference datasets\. They also need direct access to the model parameters which are not provided by many state\-of\-the art models\. Inference\-time alignment offers a cost\-effective alternative without updating model parameters\. However, existing inference\-time methods rely on a scalar reward model derived under a Bradley\-Terry assumption, which cannot represent general preferences\. Following recent work on fine\-tuning with generalized preferences, in this work, we initiate the study of inference\-time alignment under general preferences\. We formulate the problem as obtaining a Nash equilibrium of a two\-player zero\-sum game between policies\. We propose two algorithms: \\emph\{Best\-of\-Nash\} \(BoN\) and \\emph\{Nash Mirror Descent\} \(NMD\)\. We prove that both algorithms achieve a duality gap that matches the problem lower bound\. Empirically, we implement the two methods on three datasets, which shows that our methods substantially outperform the base policy, converging to the performance of the fine\-tuned models\. Moreover, our results show that NMD remains robust across the regularization parameter\.

## Towards Mitigating Deceptive Safety Alignment in Large Reasoning Models

**Authors:** Xiangyu Zhou; Saleh Zare Zade; Rafi Ibn Sultan; Alexander Kotov; Dongxiao Zhu

**ID:** 155333 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6PIauqxdE0>) | [PDF](<https://openreview.net/pdf?id=6PIauqxdE0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155333>)

Large Reasoning Models \(LRMs\) are commonly trained with reinforcement learning \(RL\) to improve their ability to generate chain\-of\-thought \(CoT\) reasoning before producing final answers\. However, RL rewards are typically assigned based on final answers, providing little or no direct supervision over intermediate reasoning\. This can lead to deceptive safety alignment, where the reasoning trace and final answer convey inconsistent safety signals\. To systematically investigate this phenomenon, we introduce DSAR \(Deceptive Safety Alignment Rate\), a metric that jointly assesses reasoning traces and final answers to quantify their safety inconsistency\. Across multiple LRMs and benchmarks, we find that deceptive safety alignment is pervasive under standard prompting conditions and is substantially amplified under prefilling attacks\. We further provide a hidden representation analysis showing that models exhibit stronger safety discrimination at the final\-answer stage than during intermediate reasoning\. To close this gap, we propose SARA \(Safety\-Aware Reasoning Alignment\), an RL\-based method that rewards both safety\-aware reasoning and safe final answers, encouraging early harmful intent recognition and enforcing reasoning–answer consistency\. Experiments show that SARA significantly mitigates deceptive safety alignment under both standard and adversarial settings while preserving helpfulness and utility\.

## GRAM: Group\-wise Rank\-Aware Modal Merging via Subspace Alignment

**Authors:** Di Wu; Shuaidong Pan

**ID:** 153287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MOnKup7VWM>) | [PDF](<https://openreview.net/pdf?id=MOnKup7VWM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153287>)

Merging different models into a single model is highly desirable for multi\-task deployment, particularly in regulated domains like healthcare\. In such settings, models are often locally fine\-tuned due to strict data privacy policies, necessitating that aggregation operates exclusively on the fine\-tuned weights\. Existing meth\- ods apply a uniform merge across all tasks, ignoring the geometric relationships among their learned subspaces\. When task updates occupy misaligned subspaces, projecting them onto a shared low\-rank basis discards task\-relevant directions, a failure mode named subspace interference\. Through this study, we show that the per\-task projection error of a merged model is governed by the principal\-angle alignment between each task and the shared subspace, so that grouping geometri\- cally compatible tasks provably reduce this error within each group\. Motivated by this observation, we propose Group\-wise Rank\-Aware Model Merging \(GRAM\), which uses the principal\-angle geometry of task vectors to decide which tasks should be merged and then performs a standard SVD\-based merge within each coalition; the pipeline requires only the fine\-tuned weights at merge time\. With only one additional model \(K=2\), GRAM significantly mitigates subspace in\- terference and consistently outperforms prior merging methods across language understanding \(GLUE with Flan\-T5\), 8\-task CLIP vision, and medical instruction tuning \(Qwen2\-7B\-Instruct with four English/Chinese medical LoRAs\)\.

## Palette: A Modular, Controllable, and Efficient Framework for On\-demand Authorized Safety Alignment Relaxation in LLMs

**Authors:** Qitao Tan; Xiaoying Song; Arman Akbari; Arash Akbari; Yanzhi Wang; Xiaoming Zhai; Lingzi Hong; Zhen Xiang; Jin Lu; Geng Yuan

**ID:** 150758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fd4fbQYLhB>) | [PDF](<https://openreview.net/pdf?id=fd4fbQYLhB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150758>)

Current safety alignment of foundation models largely follows a \\emph\{one\-size\-fits\-all\} paradigm, applying the same refusal policy across users and contexts\. As a result, models may refuse requests that are unsafe for general users but legitimate for authorized professionals, limiting helpfulness in specialized professional settings\. Existing approaches either require costly realignment or rely on inference\-time steering that suffers from imprecise control and added latency\. To this end, we propose \\textsc\{Palette\}, a modular, controllable, and efficient framework that selectively relaxes refusal behavior on authorized target domains while preserving standard safety elsewhere\. Our method identifies a refusal direction via multi\-objective search and internalizes it into the model through lightweight adaptation\. \\textsc\{Palette\} further supports modular composition: it learns domain\-specific safety controls independently and composes them through parameter merging, enabling on\-demand multi\-domain authorization without retraining\. Experiments across four safety benchmarks, multiple model variants, and both LLMs and VLMs show that \\textsc\{Palette\} delivers precise safety control without sacrificing general utility, offering a practical path toward foundation models that adapt to diverse professional needs\.

## TailGuard: Subgroup Tail Coverage Theory for Safe LLM Alignment

**Authors:** Charles Cao

**ID:** 149857 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ml3suoaUwg>) | [PDF](<https://openreview.net/pdf?id=ml3suoaUwg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149857>)

Safe preference alignment of large language models must handle rare harmful tails whose burden is concentrated on demographic, topical, linguistic, or adversarial subgroups\. Existing coverage analyses operate on global density ratios that can look adequate on average while the harmful tail of a small group remains unsupported, leaving worst\-group safety risk unidentified\. We assume that the absolute harm scale is externally calibrated by severity labels or anchors and introduce TailGuard, a framework centered on subgroup quantile coverage $C\_\{g,\\tau\}$: the worst deployment\-to\-training density ratio restricted to group g's upper\-τ harm tail\. We prove that $C\_\{g,\\tau\}$ is a key statistical quantity governing subgroup tail safety: it governs tail\-risk transfer, yields an offline impossibility result under missing tail support, and is necessary for fixed\-policy subgroup tail\-risk estimation\. From a per\-group CVaR\_τ\-constrained alignment objective, we derive a KL\-regularized Gibbs form, motivate a Tail\-Fisher active query rule that targets group\-tail coverage deficits, and construct a per\-group weighted CVaR risk\-control deployment gate\. We validate the mechanism through four completed data\-level studies: synthetic coverage control, a semi\-synthetic tail\-hiding pilot on real safety\-alignment labels, an observed\-label active\-query ablation, and an oracle\-score risk\-control\-gate efficiency proxy\. These experiments test the coverage mechanism and deployment diagnostic\.

## Learning Rate Transfer in Normalized Transformers

**Authors:** Boris Shigida; Boris Hanin; Andrey Gromov

**ID:** 155201 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7XqhkHZeJq>) | [PDF](<https://openreview.net/pdf?id=7XqhkHZeJq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155201>)

The Normalized Transformer, or nGPT \(Loshchilov et al\., 2025\) achieves impressive training speedups and does not require weight decay or learning rate warmup\. However, despite having hyperparameters that explicitly scale with model size, we observe that nGPT does not exhibit learning rate transfer across model dimension and token horizon\. To rectify this, we combine numerical experiments with a principled use of alignment exponents \(Everett et al\., 2024\) to revisit and modify the $\\mu$P approach to  yperparameter transfer \(Yang and Hu, 2021\)\. The result is a novel nGPT parameterization we call $\\nu$GPT\. Through extensive empirical validation, we find $\\nu$GPT exhibits learning rate transfer across width, depth, and token horizon\.

## Bridging Simulation and Reality: Geometry and Decision Alignment for Autonomous Driving

**Authors:** Dapeng Zhang; Zhenlong Yuan; Chenyang Li; Hongtao Nie; Yinda Chen; Rui Zhou; Peng Zhi; Qingguo Zhou

**ID:** 151850 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XQr8N3Wv5o>) | [PDF](<https://openreview.net/pdf?id=XQr8N3Wv5o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151850>)

Bridging the gap between simulation and reality remains a fundamental challenge for end\-to\-end autonomous driving\. Existing approaches primarily focus on appearance\-level features\. This often leads to suboptimal transfer, where visually aligned models still produce inconsistent or unsafe behaviors in the real world\. In this paper, we propose a unified domain adaptation framework that jointly aligns perception and decision processes through geometry\-aware and vector\-space representations\. At the perception level, we introduce a Geometry\-Aware Perception Alignment \(GAPA\) module that enforces cross\-domain consistency in both explicit geometry and implicit structural representations extracted from latent features\. This reduces domain discrepancy by targeting scene structure rather than appearance\. At the decision level, we propose a Latent Vector Space Guidance Decision Alignment \(LVDA\) module that aligns vector\-conditioned policy distributions\. By modeling driving decisions as conditioned on structured representations of map topology and multi\-agent interactions, we minimize discrepancies between source and target action distributions via adversarial and structural alignment\.  To further enhance stability, we introduce a progressive adversarial transfer strategy that improves cross\-domain feature alignment and training stability\. Extensive experiments on a newly partitioned nuScenes dataset demonstrate that Bridge\-AD achieves excellent performance, effectively narrowing the gap between simulation and real\-world autonomous driving\.

## Robust Nash Alignment under Preference Uncertainty

**Authors:** Shihab Ahmed; Debamita Ghosh; David Tang; Yudan Wang; Alvaro Velasquez; Yue Wang

**ID:** 154554 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CiLFISXIZl>) | [PDF](<https://openreview.net/pdf?id=CiLFISXIZl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154554>)

Preference\-based alignment methods typically optimize against a single preference model, and can therefore be brittle when pairwise preferences are uncertain: noisy, heterogeneous, or shift after deployment\. We study alignment under uncertain preferences through the lens of general\-preference games\. Specifically, we formulate Robust Nash Learning from Human Feedback, where the learner seeks a policy with a large worst\-case win rate against both an adversarial competitor and any preference kernel lying in an ambiguity set around a nominal preference\. When the ambiguity set captures the uncertainty in preferences, the resulting hard\-constrained robust objective directly yields a certified lower bound on worst\-case performance\. However, we note this problem is computationally challenging to optimize, and to address this, we introduce a four\-player primal\-dual proxy game involving the leader policy, follower policy, adversarial kernel, and dual variable, and develop a single\-loop optimistic mirror descent\-ascent algorithm for this game\. We show that the proxy always lower\-bounds the truncated hard\-constrained objective, quantify the proxy\-to\-hard gap, and characterize an exactness condition under which the proxy recovers the robust objective\. We then prove an $O\(1/\\sqrt\{T\}\)$ convergence rate for the proxy\-game duality gap, which implies a near\-optimal robust policy for the original robust objective\. Experiments on controlled tabular games and LLM alignment with uncertain preference further validate the convergence theory and show improved performance over nominal baselines\.

## Towards Fair Graph Generation Without Sensitive Attribute

**Authors:** Zichong Wang; Zhipeng Yin; Wenbin Zhang

**ID:** 153706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JNw2R5LH1O>) | [PDF](<https://openreview.net/pdf?id=JNw2R5LH1O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153706>)

Graph generation, which aims to produce new graphs from a distribution similar to observed data, has gained increasing attention, especially as generated graphs are used in high\-stakes decision\-making where fairness is critical\. However, most existing fair graph generation methods assume full access to sensitive attributes, an assumption often violated in practice due to privacy concerns, regulatory constraints, and missing data\. To this end, we propose to solve the problem from a new perspective, where sensitive proxy inference is reformulated as a component of the graph generation pipeline, enabling the inferred proxy to guide the generation process\. We further model and mitigate the impact of proxy inference errors, and provide theoretical guarantees that quantify how such errors propagate to fairness outcomes in the generated graphs, offering practical guidance for interpreting fairness when sensitive attribute is missing\. Experiments on benchmark datasets demonstrate that our method consistently improves fairness while maintaining competitive generation quality\.

## Fairness Failure Modes of Multimodal LLMs

**Authors:** Canyu Chen; Anglin Cai; Joan Nwatu; Yale Li; Jessica Hullman; Rada Mihalcea; Kathleen McKeown; Manling Li

**ID:** 149831 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=myI2BmrxeL>) | [PDF](<https://openreview.net/pdf?id=myI2BmrxeL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149831>)

Although Multimodal Large Language Models \(MLLMs\) are increasingly deployed in high\-stakes domains, the fairness of their outputs is under\-explored\. Building on the BBQ language bias benchmark, we construct a new dataset MultiBBQ using attested social biases and AI\-generated photorealistic images for controllable fairness evaluation of MLLMs in both visual\-only and visual\-language contexts\. We propose two metrics Fairness Score and Bias Score and design an evaluation paradigm to address shortcut reasoning and data contamination challenges\. Using comprehensive benchmarking, we diagnose four new Fairness Failure Modes of MLLMs\. In particular, we discover that proprietary models may fail to conduct effective counter\-bias reasoning in disambiguated contexts due to over\-refusal, while open\-source models are deficient in abstaining in ambiguous contexts\. We also analyze how different input and model factors degrade fairness, demonstrate that MLLMs amplify bias over their backbone LLMs, and show the potential limited effectiveness of mitigation methods such as reasoning and fairness instruction\. We release our code and dataset to facilitate further evaluations and the development of mitigation methods here\.

## Beyond Risky Activities: Bridging the Supervision Gap for Situational Risk Reasoning

**Authors:** Zelin Li; Yifan Liu; Ruichen Yao; Yaokun Liu; Rahul Gupta; Dong Wang

**ID:** 139234 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dENGTdzuq5>) | [PDF](<https://openreview.net/pdf?id=dENGTdzuq5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139234>)

Situational risks refer to safety risks that arise from the interaction between a user activity and its surrounding visual scenario, where the same activity may be safe in one situation but unsafe in another\. Identifying such risks is particularly important for deploying VLMs as real\-time assistants, where models are expected to assist users based on a shared visual context\. However, existing safety alignment data is dominated by examples of intrinsically harmful activities, leaving activity\-\-scenario risks underrepresented\. We refer to this missing activity\-\-scenario supervision as a supervision gap in situational risk reasoning for VLMs\. To address this gap, we introduce Situational Risk Reasoning \(SRR\) , the first post\-training dataset for improving VLMs' situational risk awareness\. SRR is constructed through a hybrid pipeline that combines vision\-language reasoning, language\-based generation, and text\-to\-image synthesis\. Each example includes a target response in a safety chain\-of\-thought format, guiding models to reason about activity\-\-scenario interactions rather than simply learning refusal patterns\. Experiments show that supervised fine\-tuning on SRR substantially improves VLMs' ability to reason about situational risks, while maintaining strong performance on conventional safety benchmarks and general VQA tasks\. We also demonstrate the effectiveness of SRR across different VLM backbones and validate the importance of both the synthesized SRR data and the safety chain\-of\-thought format through ablations\. The SRR dataset is available at https://huggingface\.co/datasets/Anonymous\-SRR/SRR\.

## Agent MechSuits : Mechanistic Subspace Safety Steering for Multi\-Turn CLI Agents

**Authors:** Weidi Luo; Qiming Zhang; Mingyu Jin; Jie Cai; Yihao Quan; Chaowei Xiao; Jingcheng Niu; Zhen Xiang

**ID:** 154113 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GAW18QTdGu>) | [PDF](<https://openreview.net/pdf?id=GAW18QTdGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154113>)

Command\-Line Interface \(CLI\) agents based on large language models \(LLMs\) demonstrate remarkable autonomous capabilities, but they also introduce significant safety and misuse risks during multi\-turn interactions with external environments\. Existing safety mechanisms mainly rely on external guardrails, which have a limited ability to perform fine\-grained behavioral control during execution\. Meanwhile, recent mechanistic interpretability methods for LLM safety are mostly confined to single\-turn or jailbreak\-style QA settings, limiting their ability to capture the evolving risk dynamics of multi\-turn agent execution\. In this paper, we investigate the safety of multi\-turn CLI agents from an internal perspective\. We propose Agent MechSuits \(Mechanistic Subspace Intervention and Steering\), a white\-box defense framework that performs runtime safety detection and representation\-level mitigation for CLI agents\. Unlike conventional agent guardrails, Agent MechSuits detect harmful execution states from step\-level hidden representations and mitigate unsafe behavior by intervening in a 10\-dimensional subspace within a single layer\. To support this research, we introduce the Mechanistic Agent Safety \(MAS\) benchmark, comprising comprehensively annotated multi\-turn execution trajectories across 194 tasks using LLaMA\-3\.1\-8B, Qwen\-2\.5\-7B, and Gemma\-2\-9B\. Extensive experiments show that Agent MechSuits achieves strong safety detection performance, supports lookahead risk anticipation, and substantially reduces harmful agent actions, establishing a foundation for applying mechanistic interpretability to dynamic LLM agent safety\.

## ABC\-Align: Prediction\-Powered Alignment with Adaptive Bias Control

**Authors:** Eric Frankel; Banghua Zhu; Sewoong Oh; Lillian Ratliff

**ID:** 148310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ymfnBICWLI>) | [PDF](<https://openreview.net/pdf?id=ymfnBICWLI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148310>)

Language model post\-training is often bottlenecked by the need for human\-collected preference data, which is expensive and difficult to scale\. RLAIF\-style approaches that leverage pseudo labels offer an abundant alternative but introduce systematic biases that degrade downstream alignment\. Recent general\-purpose semi\-supervised methods correct for teacher bias using a small set of human\-labeled examples, but suffer from high variance especially when human annotations are scarce\. To this end, we propose ABC\-Align, leveraging abundant pseudo label signal to minimize variance and applying a lightweight, adaptive correction grounded in the human\-labeled subset\. The correction strength is tuned automatically during training using plug\-in estimates of the relevant bias\-\-variance quantities\. On LLM alignment with RLHF and DPO where human feedback is scarce, we empirically demonstrate that ABC\-Align achieves superior performance over prior semi\-supervised baselines\.

## Measuring Safety Alignment Effects in Autonomous Security Agents

**Authors:** Isaac David; Arthur Gervais

**ID:** 155321 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6VC4S9fBfE>) | [PDF](<https://openreview.net/pdf?id=6VC4S9fBfE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155321>)

Autonomous security agents use language models to inspect code, call tools, and test vulnerabilities inside authorized environments\. Most safety evaluations ask whether a model refuses harmful single\-turn requests\. We study a different failure mode: whether safety alignment changes the evidence\-grounded behavior of an agent that is already operating in a local sandbox with fixed tools and success checks\.  We evaluate regular safety\-aligned Gemma 4 models and uncensored Gemma 4 derivatives in the same security\-agent harness\. Each model receives authorized vulnerability\-analysis tasks, and each run is scored from saved traces rather than self\-reported success\. We measure task completion, refusals, unsafe actions, and whether the final artifact is grounded in the relevant files, symbols, and vulnerability evidence\.  The key finding is that the gap is not mainly visible refusal\. The aligned Gemma 4 conditions usually continue working, but their artifacts are less likely to satisfy security\-specific evidence checks\. The uncensored Gemma 4 condition more often finds the relevant code, identifies reachability, and writes usable security reports\. Clear authorization in the prompt does not recover this behavior\. At the same time, all conditions fail the hardest proof\-of\-trigger and patch\-verification tasks\. These results suggest that safety alignment effects in autonomous security agents cannot be understood only as refusals: they also appear as weaker grounding and less specific defensive evidence\. Removing alignment recovers some behavior, but does not make the agent reliable or safe\.

## Reproducibility study of FACTER: Fairness\-Aware Conformal Thresholding and Prompt Engineering

**Authors:** Elena Belkina; Alexandra Elena Antonica; Brigitta Varga; Mattia Sferrazza; Clara Rus

**ID:** 157022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

We present a reproducibility study of FACTER, a post\-hoc framework that combines confor\- mal thresholding with iterative prompt engineering to mitigate demographic bias in black\- box LLM\-based recommender systems\. Using the released codebase and experimental set\- ting from the original paper, we evaluate FACTER on MovieLens\-1M and Amazon Movies &amp; TV with various LLM backbones\. We assess fairness using the reported violation\-based criterion group and counterfactual metrics \(SNSR, CFR\), and measure recommendation quality via catalog\-mapped ranking metrics \(NDCG@10, Recall@10\) alongside the validity rate of generated items \(Valid@10\)\. Across datasets and supported backbones, we repro\- duce FACTER's key qualitative behavior, with fairness violations decreasing sharply and converging within a small number of calibration rounds\. However, unlike the original study, we observe substantially lower recommendation quality for both Zero\-Shot and FACTER, with low validity under open\-vocabulary generation, item mapping, and evaluation\-protocol differences providing plausible explanations for this discrepancy\. We further identify and resolve multiple implementation and reproducibility issues in the released code, providing a cleaner and easier\-to\-run codebase to support future replication\. Overall, our findings sup\- port FACTER's effectiveness in reducing measured fairness violations, but the near\-floor utility leaves utility preservation unverifiable in our reproduction\.

