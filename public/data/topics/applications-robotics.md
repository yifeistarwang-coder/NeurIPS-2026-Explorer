# Applications / Robotics

应用 / 机器人

196 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## CSO: Refining Robotic Policies via Skill Distribution Alignment and Skill\-Grained Optimization

**Authors:** Zhiyuan Xiang; Xiang Deng; Wanjie Tao; Xu Chen; Zhao Jielun; Weili Guan

**ID:** 153130 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NgYZ9EHKT6>) | [PDF](<https://openreview.net/pdf?id=NgYZ9EHKT6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153130>)

_Abstract unavailable from the accessible public sources._

## Follow\-Bench 2\.0: An End\-to\-End 3D Benchmark for Socially\-Aware Robot Person Following

**Authors:** Hanjing YE; Tianle Zeng; Jianwei Peng; Yanci Wen; Yuchen Zhou; Yonggen Ling; Hong Zhang

**ID:** 139022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q4Gs05xKgs>) | [PDF](<https://openreview.net/pdf?id=q4Gs05xKgs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139022>)

Socially\-aware robot person following \(RPF\) requires a mobile robot to follow a designated person in dynamic human environments while maintaining target identity, avoiding obstacles and pedestrians, and preserving socially comfortable formations\. Existing benchmarks only partially evaluate this coupled problem: embodied visual tracking benchmarks emphasize target visibility with limited social interaction, person re\-identification benchmarks study perception without closed\-loop control, and motion\-planning benchmarks often assume ground\-truth target and pedestrian states\. We introduce Follow\-Bench 2\.0, an end\-to\-end 3D benchmark for evaluating socially\-aware RPF under coupled perception\-\-planning challenges\. Built in Unreal Engine, Follow\-Bench 2\.0 provides difficulty\-leveled scenarios with diverse pedestrian flows, lighting and weather conditions, cluttered layouts, bottlenecks, queueing behaviors, distractors, and temporary target occlusions\. The benchmark supports modular perception\-\-planning pipelines, end\-to\-end visual policies, and foundation\-model\-based active trackers under a unified closed\-loop protocol\. It further evaluates both back\- and side\-following configurations and reports safety\-\-comfort metrics covering task success, target visibility, target recovery, social\-space intrusion, following formation, and motion smoothness\. Experiments show that RPF\-oriented modular pipelines substantially outperform current end\-to\-end visual policies on close and socially comfortable following, but also reveal that socially\-aware RPF remains far from solved in interaction\-heavy environments and especially in side\-following\. Follow\-Bench 2\.0 therefore provides a diagnostic platform for studying how perception errors, occlusions, crowd interactions, and following configurations jointly affect robot person following\. Our code is available at https://anonymous\.4open\.science/r/follow\-benchv2\-NIPS2026\-03D3/\.

## OASIS: Observation\-Action Space Alignment via SE\(3\) Trajectory Prediction for Robotic Manipulation

**Authors:** Xinzhe Chen; Sihua Ren; Liqi Huang; Haowen Sun; Mingyang Li; Xingyu Chen; Zeyang Liu; Xuguang Lan

**ID:** 152937 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PGq5jFALJa>) | [PDF](<https://openreview.net/pdf?id=PGq5jFALJa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152937>)

Recent vision\-language\-action \(VLA\) models and world action models \(WAMs\) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual\-state prediction\. However, these representations largely remain within the observation space and do not share the rigid\-body geometry of the action space, forcing the action decoder to implicitly recover this geometry\. We propose OASIS, a visuomotor policy that aligns the intermediate representation with the action space via $SE\(3\)$ end\-effector trajectory prediction\. OASIS couples a 3D\-aware feature encoder that fuses vision\-language and metric\-depth features with an $SE\(3\)$ trajectory predictor that produces a camera\-frame end\-effector trajectory\. Conditioned on the predictor's pose\-supervised hidden states, the action decoder generates action chunks consistent with rigid\-body motion\. Across simulation and real\-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out\-of\-distribution generalization\.

## RescueBench: Can Embodied Agents Save Lives in the Wild?

**Authors:** Kui Wu; Beiyu Guo; Hao Chen; Shuhang Xu; Yuling Li; Yongdan Zeng; Zhoujun Li; Yizhou Wang; Fangwei Zhong

**ID:** 139237 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d1QPUUrYxZ>) | [PDF](<https://openreview.net/pdf?id=d1QPUUrYxZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139237>)

_Abstract unavailable from the accessible public sources._

## HAI: Hierarchical Anchored Interaction for Multi\-View Bimanual World Models

**Authors:** Sen Cui; Baohua Yin; Youyi Kou; Junyu Wu; Jingheng Ma; Zhikang Chen; Changshui Zhang

**ID:** 152516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SXueAPIsi0>) | [PDF](<https://openreview.net/pdf?id=SXueAPIsi0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152516>)

Multi\-view bimanual robot world models must predict future observations while preserving scene identity, following two synchronized but non\-exchangeable arms, and maintaining consistency between global and wrist\-local views\. Existing conditioning schemes often collapse left\- and right\-arm actions into a view\-agnostic control signal, making long\-horizon rollout prone to scene drift, wrong\-arm responses, and cross\-view inconsistency\. We propose \\textbf\{HAI\}, a \\textbf\{Hierarchical Anchored Interaction\} architecture for controllable multi\-view bimanual world modeling\. HAI organizes prediction as a structured information flow\. First, hierarchical action\-view conditioning routes the bimanual action chunk to camera streams, injects coarse chunk\-level intent, performs structured multi\-view modeling on the coarse\-modulated features, and then injects fine per\-frame action control\. Second, anchored dynamic generation fuses the fine action\-conditioned descriptors with persistent per\-view scene anchors before decoding future observations\. Experiments on AgiBot and DROID show that HAI improves long\-horizon rollout quality over the baselines\. Ablations confirm gains in scene stability, wrist\-view controllability, and cross\-view consistency\. Further experiments on policy\-improvement diagnostics indicate more useful synthetic rollout signals for downstream VLA policies, achieving an averaging 67\.2\\% relative gain in success rate\. The project page is available at \\url\{https://hai\-anon\.github\.io/\}\.

## Dodge\-It: Learning Collision\-Aware VLA Models for Robotic Manipulation

**Authors:** Jiawei Feng; Chuzhao Huang; Xinli Xu; Yingcong Chen

**ID:** 150761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fbIwXVL9bQ>) | [PDF](<https://openreview.net/pdf?id=fbIwXVL9bQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150761>)

Vision\-Language\-Action \(VLA\) models are increasingly used as general\-purpose policies for robotic manipulation, but completing the instructed task requires more than reaching the target state\. A policy must also avoid nearby objects throughout the rollout, including approach, interaction, transport, and handover\. A common approach is to invoke conventional collision avoidance mechanisms, such as motion planners or safety filters, which provide effective geometric safeguards\. However, the resulting system may struggle to produce actions that are simultaneously safe and task progressing\. When collision avoidance and manipulation progress require misaligned actions, the system may avoid the obstacle while slowing, disrupting, or even failing the task\. To address this, we introduce DODGE\-IT, a collision\-aware learning framework that leverages collision signals as policy\-improvement feedback to strengthen the VLA policy's collision\-aware manipulation capability\. DODGE\-IT first designs Task\-Relevant Assessment of Collision Events \(TRACE\) that detects and identifies task\-relevant obstacles from RGB\-D observations and turns executions into collision outcomes\. These outcomes are then incorporated together with task success signals into representative reinforcement learning frameworks for VLA\. We validate DODGE\-IT on SafeLIBERO and real robot manipulation tasks, showing improved obstacle avoidance while preserving task completion across simulated and physical settings\.

## Remember with Confidence: Uncertainty Quantification for Spatio\-temporal Memory with Probabilistic Guarantees

**Authors:** Harry Zhang; Nicolas Gorlo; Luca Carlone

**ID:** 152348 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TjgsCOJn16>) | [PDF](<https://openreview.net/pdf?id=TjgsCOJn16>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152348>)

Long\-horizon robot operation requires spatio\-temporal memory to record the environment state and recall it for downstream reasoning\. Scene graphs and retrieval\-augmented systems ground VLM descriptions to persistent 3D entities with rich semantic descriptions\. However, VLM captions are noisy and viewpoint\-inconsistent, and existing systems treat them as an oracle with no mechanism to detect unreliable stored descriptions\. We introduce object\-level semantic uncertainty for multi\-view VLM memory: a score that measures object\-centric cross\-view semantic scatter of captions and identifies semantically unresolved objects\. Then, we include our uncertainty scores in an advanced spatial\-semantic memory system, that we dub UQ\-DAAAM\. UQ\-DAAAM uses this score to actively refine uncertain objects under a fixed query budget by selecting high\-quality views and fusing the resulting multi\-view captions into a single object description\. We also derive probabilistic guarantees showing that higher\-quality candidate views \(as selected by our approach\) are more likely to reduce uncertainty\. Our experiments show that uncertainty quantification can make embodied 4D memory systems more reliable and more effective\. In particular, on the OC\-NaVQA benchmark, UQ\-DAAAM achieves substantially larger uncertainty reduction and better spatio\-temporal question answering performance than baselines\.

## Large Discrete Policy: Advancing Explicit Behavior Modeling with Stochastic Iterative Scoring

**Authors:** Zhenxin Li; Nadine Chang; Xinglong Sun; Jingde Chen; Wenhao Yao; Zi Wang; Maying Shen; Yu\-Gang Jiang; Zuxuan Wu; Shiyi Lan; Jose M\. Alvarez

**ID:** 149939 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m3o019KH6Z>) | [PDF](<https://openreview.net/pdf?id=m3o019KH6Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149939>)

Behavior policies are often formulated as continuous generative models, whose iterative denoising processes are expressive but difficult to interpret and prone to producing implausible actions\. We propose the Large Discrete Policy \(LDiP\), a fully discrete behavior modeling framework that selects actions from a large vocabulary of physically plausible candidates\. Rather than perturbing actions, LDiP improves expressivity through stochastic iterative scoring: it progressively re\-scores and prunes candidates with score\-space stochasticity, enabling fine\-grained ranking and exploration among plausible actions while preserving an explicit decision process\. Across end\-to\-end planning, closed\-loop driving, robotic manipulation, and vision\-language\-action settings, LDiP consistently outperforms strong discrete and continuous baselines in autonomous driving, and exceeds or matches continuous generative policies in robotic manipulation\. These results show that discrete policies, when equipped with effective scoring mechanisms, offer an expressive, plausible, and interpretable alternative for behavior modeling\.

## Markovian Dynamics Enforcer: Feasibility Preserving Correction on Learned Dyanmics Manifolds

**Authors:** Kevin Yu; Tao Guo; Constantinos Antoniou; Panagiotis Angeloudis

**ID:** 148189 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zdmvNkloAg>) | [PDF](<https://openreview.net/pdf?id=zdmvNkloAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148189>)

Neural trajectory predictors are increasingly used in physical\-system pipelines for reconstruction, simulation, forecasting, and downstream analysis\. In these settings, low prediction error alone is insufficient\. A trajectory may remain statistically plausible while violating dynamics, actuator limits, or state constraints, making it unreliable for physical interpretation or control\-aware reasoning\. This problem is especially difficult when controls are unobserved and the available dynamics model is only partially specified\. We introduce the Markovian Dynamics Enforcer \(MaDE\), a framework for post\-hoc feasibility enforcement under learned controlled dynamics\. MaDE acts as a time\-invariant correction operator that maps state\-transition proposals onto a learned feasible dynamics manifold\. For each transition, it infers latent controls through inverse dynamics, recomputes state evolution using a known\-physics model augmented with a learned residual, and corrects controls through gradient\-based inequality reduction while re\-integrating the dynamics after each correction step\. MaDE is trained from feasible state observations without ground\-truth controls and is designed to operate as a frozen downstream layer for arbitrary trajectory predictors\. We evaluate MaDE on simulated controlled systems spanning fully specified and underspecified dynamics, with deterministic bound\-violation and Gaussian observation\-noise stress tests\. MaDE is the only method that drives known\-, learned\-, and true\-dynamics residuals to essentially zero across the fully specified systems\. In the underspecified dynamic\-bicycle setting, it reduces true\-dynamics residual from 1\.40\-\-2\.90 for the baselines to 0\.33, while reducing trajectory fidelity error by more than 60% relative to the next\-best method\. These results show that MaDE enforces model\-relative physical feasibility while preserving proximity to the original trajectory\.

## E0: Expressive Fine\-Grained Discrete Action Prediction for Vision\-Language\-Action Models via Tweedie Discrete Diffusion

**Authors:** Zhihao Zhan; Jiaying Zhou; Likui Zhang; Qinhan Lyu; Hao Liu; Weizheng Li; jusheng zhang; Ziliang Chen; Tianshui Chen; Ruifeng zhai; Keze Wang; Liang Lin; Guangrun Wang

**ID:** 154265 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F4tL7wnb1n>) | [PDF](<https://openreview.net/pdf?id=F4tL7wnb1n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154265>)

Vision–Language–Action \(VLA\) models offer a unified framework for robotic manipulation by integrating visual perception, language understanding, and control generation\. However, existing VLA systems still struggle to generalize across diverse tasks, scenes, and camera viewpoints, and often produce coarse or unstable actions\. We argue that these limitations are closely tied to the structural properties of actions in VLA settings, including the inherent multi\-peaked nature of action distributions, the token\-based symbolic reasoning of pretrained VLM/VLA backbones, and the effective finite resolution imposed by real\-world robotic control\. Motivated by these properties, we introduce E0, a tweedie discrete diffusion framework that formulates action generation as iterative denoising over quantized action tokens\. By operating in a discrete action space with a principled diffusion process, E0 naturally aligns with token\-based reasoning, supports fine\-grained yet executable action control, and avoids the distributional mismatch of masking\-based discrete diffusion\. Experiments on LIBERO, VLABench, ManiSkill, and a real\-world Franka arm demonstrate that E0 achieves state\-of\-the\-art performance across diverse environments, outperforming strong baselines by 8\.3\\% on average\.

## Spectral Insights from the Unconstrained Feature Model for Neural Multi\-Output Regression

**Authors:** George Andriopoulos; Bimarsha Adhikari; Soyuj J Basnet; Juan Guevara; Li Guo; Keith Ross

**ID:** 154057 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GWo2PCEWu8>) | [PDF](<https://openreview.net/pdf?id=GWo2PCEWu8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154057>)

Multi\-output regression can be approached either by fitting one joint vector\-valued predictor or by training separate univariate predictors for each target coordinate\. This holistic\-versus\-separate choice is classical in the largely non\-neural multi\-output regression literature, but is less characterized analytically for neural networks, where joint prediction arises naturally through shared features and vector\-valued output layers\.  Because neural networks are highly non\-linear and high\-dimensional, exact analysis is notoriously difficult\.  We study two questions using the Unconstrained Feature Model \(UFM\) as a tractable surrogate for exact analysis: $\\textbf\{\(1\)\}$ how does joint\-output regression compare with independent coordinate\-wise regression under regularization? $\\textbf\{\(2\)\}$ when can target whitening or normalization improve original\-scale MSE? Under UFM, the minimal training MSE depends only on the regularization product and the spectrum of the target covariance\. This yields two theoretical results: joint\-output regression has no larger training MSE than independent coordinate\-wise regression under matched regularization, and whitening or normalizing targets can help or hurt original\-scale MSE depending on the average target variance\. Experiments on neural networks trained with standard weight decay across robotic imitation\-learning and autonomous\-driving datasets support these theoretical results, with test\-MSE trends following the same qualitative pattern\. Our results show that simplified analytical surrogates can provide useful guidance for neural multi\-output regression\.

## World Models as Adversaries: Multi\-Agent Self\-Play Fine\-Tuning for Robust Motion Planning

**Authors:** Tong Nie; Yuewen Mei; Junlin He; Yihong Tang; Jian Sun; Wei Ma

**ID:** 151403 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=avlwpkoCiV>) | [PDF](<https://openreview.net/pdf?id=avlwpkoCiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151403>)

_Abstract unavailable from the accessible public sources._

## Learning from Trials and Errors: Reflective Test\-Time Planning for Embodied LLMs

**Authors:** Yining Hong; Huang Huang; Manling Li; Fei\-Fei Li; Leonidas Guibas; Jiajun Wu; Yejin Choi

**ID:** 151101 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cyktRcY8D7>) | [PDF](<https://openreview.net/pdf?id=cyktRcY8D7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151101>)

_Abstract unavailable from the accessible public sources._

## Reconfiguring Procedural Knowledge for Compositional Robot Skill Adaptation

**Authors:** Daehee Lee; Dongsu Lee; Sanghyun Ahn; Minjong Yoo; Honguk Woo

**ID:** 153621 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K1mT5TrRq3>) | [PDF](<https://openreview.net/pdf?id=K1mT5TrRq3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153621>)

_Abstract unavailable from the accessible public sources._

## All Roads Lead to Rome: Flow\-driven Multi\-Anchor Exploration for Open\-Environment Active 3D Mapping

**Authors:** Yang Li; Aming WU; Zihao Zhang; Ziju Han; Sijia Zhang; Yahong Han

**ID:** 151339 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bIXDUAeSPg>) | [PDF](<https://openreview.net/pdf?id=bIXDUAeSPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151339>)

_Abstract unavailable from the accessible public sources._

## Preference\-Guided Adversarial Policy Optimization for Long\-Tail Robust Driving

**Authors:** Tong Nie; Yihong Tang; Junlin He; Yuewen Mei; Jie Sun; Lijun Sun; Wei Ma; Jian Sun

**ID:** 151907 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WzCYjHS3jA>) | [PDF](<https://openreview.net/pdf?id=WzCYjHS3jA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151907>)

_Abstract unavailable from the accessible public sources._

## DexMirror: Real\-to\-Sim Scene Mirroring for Sim\-to\-Real Dexterous Manipulation

**Authors:** Pu Hua; Zhecheng Yuan; Meng Chu; Peiqi Duan; Huazhe Xu

**ID:** 153302 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MH1pV5BGQ8>) | [PDF](<https://openreview.net/pdf?id=MH1pV5BGQ8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153302>)

Dexterous manipulation requires large\-scale robot interaction data, yet collecting real\-world demonstrations is costly, while sim\-to\-real transfer remains challenging due to visual and geometric discrepancies\. We present \*\*DexMirror\*\*, a unified real\-to\-sim\-to\-real framework that enables photorealistic simulation learning and reliable deployment for dexterous manipulation\. Our method reconstructs real scenarios using a compositional 3D Gaussian Splatting \(3DGS\) representation with tri\-level optimization, obtaining high\-fidelity objects and background while preserving global scene consistency\. A dexterous\-hand\-centric calibration pipeline, supported by an interactive online platform, further achieves millimeter\-level robot–scene consistency for efficient Gaussian\-simulation alignment\. Built upon the reconstructed scenes, we train privileged policies in simulation and distill them into visuomotor policies operating on rendered 3DGS observations, combined with closed\-loop execution for robust transfer\. Experiments demonstrate accurate real\-to\-sim reconstruction \(F1 score 0\.981\) and strong sim\-to\-real performance, achieving high success rates across six real\-world dexterous manipulation tasks\.

## Revisiting Embodied Chain\-of\-Thought for Generalizable Robot Manipulation

**Authors:** Nan Sun; Yuan Zhang; Yongkun Yang; Wentao Zhao; Peiyan Li; Jun Guo; Wenxuan Song; Pengxiang Ding; Runze Suo; Yifei Su; Xin Xiao; Xinghang Li; Huaping Liu

**ID:** 156114 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Hg7gv5gwK>) | [PDF](<https://openreview.net/pdf?id=0Hg7gv5gwK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156114>)

Embodied chain\-of\-thought \(CoT\) aims to bridge linguistic reasoning with robotic control, yet its effective form and integration remain underexplored\. In this paper, we revisit embodied CoT for robotic control at an unprecedented scale\. We curate the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226\.3M samples, and 2592\.5 hours of data\. Through extensive experiments, we show that effective CoT must ground high\-level semantic understaning in concrete linguistic action guidance \-\- such as end\-effector movement and image\-space trajectories \-\- whereas high\-level reasoning alone yields marginal gains\. More importantly, we identify that explicit CoT does not scale reliably as an autoregressive action prefix, suffering from compounding errors during inference\. To address these challenges, we propose ERVLA, a vision\-language\-action \(VLA\) model that effectively leverages linguistic reasoning in generalizable robot manipulation\. ERVLA is trained using a CoT\-dropout strategy, allowing the model to leverage rich reasoning traces during training while predicting actions directly without CoT during inference to bypass autoregressive instability\. This approach enables reliable scaling with increasing pre\-training data\. ERVLA achieves state\-of\-the\-art results on LIBERO\-Plus with an 86\.9% success rate and reaches 53\.2% on VLABench, showcasing superior performance in out\-of\-distribution settings\. Furthermore, ERVLA outperforms competitive state\-of\-the\-art baselines in real\-robot experiments, especially in handling semantic ambiguity and long\-horizon tasks\. Code, data, and model checkpoints will be released\.

## Scene\-Adaptive VLA: Efficient Autonomous Driving via Dynamic Layer Routing

**Authors:** YUJIA YANG; Quan Yuan; Fan Jiawei; Yang Li; Tiange Fu; Xiaoyuan Fu; Guiyang Luo; Jinglin Li

**ID:** 152870 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pko5Y47PI3>) | [PDF](<https://openreview.net/pdf?id=Pko5Y47PI3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152870>)

_Abstract unavailable from the accessible public sources._

## MorphoGen: Free\-Form XML Evolution for Robot Morphology Design

**Authors:** Hongyuan Su; Yu Zheng; Yong Li

**ID:** 150325 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iy52QGlh7T>) | [PDF](<https://openreview.net/pdf?id=iy52QGlh7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150325>)

_Abstract unavailable from the accessible public sources._

## Whole\-Body Compliant Control via Learned Force\-Regulation Modules

**Authors:** Diego Aldarondo; Aadhithya Iyer; Daniel Giebisch; Nina Mortensen; Sridhar Pandian Arunachalam; Robert Cochran; Josh Merel

**ID:** 154032 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GlpxwFNGx2>) | [PDF](<https://openreview.net/pdf?id=GlpxwFNGx2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154032>)

To operate safely and effectively around people, humanoid robots must control the forces they exchange with the world\. Whereas classical impedance and admittance methods shape contact forces precisely, modern reinforcement\-learning controllers typically forgo such regulation in favor of robustness and faithful command tracking\. Incorporating impedance\-style compliance into a performant humanoid whole\-body controller remains an open problem\. We present a framework for learned whole\-body force regulation that approximates the behavior of impedance controllers using only a PD position\-target interface and position encoders\. The framework includes three mechanisms for force regulation: passive joint\-angle compliance via noisy action perturbations, joint\-angle force regulation via perturbation\-\-action blending around a commanded pose, and task\-space force regulation via reward\-shaped tracking of both a virtual forcefield attractor and a commanded pose\. All three share a residual actor\-\-critic recipe, an internal model of proprioception and perturbations, and a policy\-blending procedure that combines multiple experts\. A 6\-DOF body command, optional upper\-body pose, and controllable compliance expose the controllers as reusable low\-level modules that enable compliant interaction and object manipulation across standing, crouching, and walking\. We demonstrate whole\-body teleoperation in simulation and on Sprout, a 27\-DOF bipedal humanoid\.

## Why Cross\-Skeleton Retargeting Is Non\-Identifiable: Structural Limits of Generative Motion Models

**Authors:** Zhiyuan Li; Wenyan Yang; Pekka Marttinen; Joni Pajarinen

**ID:** 155606 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4KPh2cXttv>) | [PDF](<https://openreview.net/pdf?id=4KPh2cXttv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155606>)

Cross\-skeleton motion generation trains generative models to carry action structure and motion intention from one body to another\. Yet an action\-consistent target motion admits two observationally compatible explanations: source\-preserving transfer and target\-action recovery\. We show that this ambiguity is structural rather than incidental: under standard generative objectives, the source\-conditioned retargeting map is non\-identifiable in sparse heterogeneous motion domains\. Unpaired marginal matching yields \\emph\{gauge non\-identifiability\}: a relative gauge between skeleton\-specific latent spaces allows different source\-conditioned maps to induce the same training evidence\. Sparse paired supervision admits the complementary failure mode, \\emph\{conditional\-mean degeneration\}: ambiguous action\-level pairings drive squared\-error objectives toward a target\-action prototype that is independent of the source clip's motion intention\. To make the missing evidence observable, we introduce \\emph\{Source\-Instance Fidelity\} \(SIF\), a diagnostic that tests whether the source\-side geometry remains visible in the generated target motions after the target skeleton and action are fixed\. Under this diagnostic, standard action\-level success across animal motion domains recurrently coincides with behavior at the \\emph\{source\-blind floor\}, while positive cases localize source\-instance information to auxiliary motion\-space constraints that narrow the observational equivalence class\. The implication is that retargeting requires objectives and evaluations capable of identifying the source\-conditioned map that a retargeting claim asserts\. \[Project page\]\(https://keen\-semolina\-09811d\.netlify\.app/\)\.

## DriveDreamer\-Policy: A Geometry\-Grounded World\-Action Model for Unified Generation and Planning

**Authors:** Yang Zhou; Xiaofeng Wang; Hao Shao; Letian Wang; Guosheng Zhao; Jiangnan Shao; Jiagang Zhu; Tingdong Yu; Zheng Zhu; Guan Huang; Steven Waslander

**ID:** 149539 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pNtUKnNlBL>) | [PDF](<https://openreview.net/pdf?id=pNtUKnNlBL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149539>)

_Abstract unavailable from the accessible public sources._

## LongScape: Advancing Long\-Horizon Embodied World Models with Context\-Aware MoE

**Authors:** Lei Jin; Yu Shang; Yiding Ma; Xinhao Jin; Xin Zhang; Chen Gao; Wei Wu; Yong Li

**ID:** 153086 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O4bPbWcKFK>) | [PDF](<https://openreview.net/pdf?id=O4bPbWcKFK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153086>)

_Abstract unavailable from the accessible public sources._

## GenCOPE: Syn2Real Generalized Category\-Level Object Pose Estimation for Robotic Picking

**Authors:** Jian Liu; Wei Sun; Zhenqi Dai; Hui Yang; Jian Xiao; Nicu Sebe; Na Zhao

**ID:** 152591 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RxgmX9P4VV>) | [PDF](<https://openreview.net/pdf?id=RxgmX9P4VV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152591>)

_Abstract unavailable from the accessible public sources._

## Controllable Road Marking Generation

**Authors:** Zhiyu Joey Cai; Yufan Zhang; Ruichen Tan; Zengxiang Lei; Satish Ukkusuri

**ID:** 155875 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2BbIJHhfqI>) | [PDF](<https://openreview.net/pdf?id=2BbIJHhfqI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155875>)

Lane and road markings provide critical guidance for vehicle navigation and multi\-agent coordination, yet their design principles are scattered across disparate datasets, severely limiting quantitative analysis and scenario testing\. We introduce controllable road\-marking generation: given a drivable\-area mask and a sparse outer\-ring observation, a model must synthesize a complete center\-region layout of lane dividers, road dividers, and pedestrian crossings that is semantically consistent with a free\-form text prompt\. We develop a conditional diffusion pipeline that combines \(i\) a text\-conditioned BEV diffusion backbone, \(ii\) a Gaussian blur\-then\-deblur training target that stabilizes thin\-structure learning, and \(iii\) a structured Gaussian render post\-processing step that snaps soft predictions to crisp, topology\-aware markings\. On the Argoverse 2 test split, our system substantially outperforms a state\-of\-the\-art DDIM mask\-refinement baseline on standard structural fidelity metrics, and supports prompt\-level edits across crosswalk, lane\-divider, and road\-divider semantics\. We anticipate that the proposed framework will enable downstream applications in urban infrastructure planning, autonomous\-driving stress\-testing, and navigation in unstructured environments\.

## VLA\-Corrector: Lightweight Detect\-and\-Correct Inference for Adaptive Action Horizon

**Authors:** Yi Pan; Miao Pan; Qi Lu; Jiaming Huang; Man Zhang; Siteng Huang; Xin Li; Jie Zhang; Yongliang Shen; Xuhong Zhang; Wenqi Zhang

**ID:** 149247 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ro5UbANNbJ>) | [PDF](<https://openreview.net/pdf?id=ro5UbANNbJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149247>)

Vision\-Language\-Action \(VLA\) foundation models have recently achieved strong progress in embodied intelligence\. To reduce policy\-call frequency while preserving temporal coherence, most generative policies adopt an \\textbf\{action chunk\} mechanism, executing multiple future actions in an open\-loop manner under a fixed \\textbf\{action horizon\}\. However, this \`\`predict\-then\-blindly\-execute'' paradigm sacrifices closed\-loop reactivity: in contact\-rich physical interactions, even small local perturbations can rapidly amplify within the open\-loop blind spot, leading to compounding errors and ultimately task failure\. To address this limitation, we propose \\textbf\{VLA\-Corrector\}, a lightweight corrective inference framework for action\-chunked VLA policies\. Without modifying the backbone policy weights, VLA\-Corrector introduces a lightweight \\textbf\{Latent\-space Vision Monitor\} \(LVM\) that continuously compares predicted and actual visual feature evolution, enabling online detection of visual dynamics deviations\. Once persistent deviation is detected, the system triggers a truncation event, discards the remaining stale actions, and invokes corrective replanning via \\textbf\{Online Gradient Guidance\} \(OGG\)\. The detect\-and\-correct mechanism of VLA\-Corrector naturally induces an \\textbf\{event\-triggered adaptive action horizon\}: it preserves long\-horizon execution when the current chunk remains reliable, and invokes short\-horizon corrective replanning when execution begins to drift\. In doing so, VLA\-Corrector mitigates the trade\-off imposed by static horizons between execution robustness and policy\-call frequency\. It can be integrated into different VLA models without further retraining the VLA backbone, interrupting compounding errors while preserving much of the efficiency benefit of action chunking and substantially improving robustness in long\-horizon, contact\-rich robotic manipulation tasks\.

## DriveHierarchy: A Benchmark for Diagnosing VLM Driving Capabilities from Open\-Loop Understanding to Closed\-Loop Execution

**Authors:** Chengkai Xu; Jiaqi Liu; Yicheng Guo; Peng Hang; Jian Sun

**ID:** 139730 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7pwLymqNoe>) | [PDF](<https://openreview.net/pdf?id=7pwLymqNoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139730>)

Evaluating VLM\-based autonomous driving remains difficult because driving competence is composite, where a capable system must ground traffic participants and hazards, integrate context across views and time, reason about future evolution, and act appropriately under closed\-loop interaction\. Existing benchmarks usually assess either open\-loop understanding or closed\-loop driving but provide limited structure for explaining how these abilities are organized, how they relate, and how they may inform model diagnosis and improvement\. We present \\textsc\{DriveHierarchy\}, a hierarchical benchmark that organizes VLM\-based autonomous driving into four ranks, spanning perceptual grounding, contextual memory, mental reasoning, and closed\-loop execution\. To instantiate this hierarchy, we integrate multiple open\-source autonomous\-driving datasets into a unified open\-loop benchmark with 76,798 question\-answer pairs over 84,279 frames and develop a closed\-loop simulation platform with interactive scenario construction on a real\-world road network, from which 100 driving scenarios are curated for embodied evaluation\.  Experiments on 15 VLMs show that \\textsc\{DriveHierarchy\} captures structured but non\-redundant capability variation, relates open\-loop understanding to closed\-loop driving, and provides a practical basis for diagnosis and benchmark\-guided optimization\. \\textsc\{DriveHierarchy\} therefore serves as a unified framework for evaluating and improving VLM\-based autonomous driving systems\. An anonymized project has been released on \\url\{https://github\.com/PerfectXu88/DriveHierarchy\}\.

## How to Instruct Your Robot: Dense Language Annotations Power Robot Policy Learning

**Authors:** Bosung Kim; Ruiyi Wang; David Acuna; Jaehun Jung; Alex Trevithick; Brandon Cui; Yejin Choi; Prithviraj Ammanabrolu

**ID:** 150612 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=grxX3mAW7g>) | [PDF](<https://openreview.net/pdf?id=grxX3mAW7g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150612>)

Scaling robot policy learning is bottlenecked by the cost of collecting demonstrations: datasets at modern scale require thousands of skilled\-operator hours on dedicated robot hardware\. The language description paired with these demonstrations does not face the same bottleneck\-\-\-a single short task label is cheap, but it also leaves implicit spatial relations, object interactions, embodiment state, and subgoal structure that the pixels already contain\.  We treat \\emph\{language density\} as a cheap lever for amplifying signal in a fixed demonstration corpus; whereas prior dense\-language work in robotics commits to a single caption style, we instead ask which kind of dense language helps each task and learn to deliver it at deployment\. We realize this as \\textbf\{DeMiAn\} \(\\textbf\{De\}nse \\textbf\{M\}ult\\textbf\{i\}\-aspect \\textbf\{A\}nnotatio\\textbf\{n\}\) in two stages\. First, an automatic VLM pipeline re\-labels each segment of an existing demonstration along four complementary aspects\-\-\-\\emph\{physical motion\}, \\emph\{scene composition\}, \\emph\{arm pose\}, and segment\-level \\emph\{reasoning\}\-\-\-each surfacing a distinct kind of structure that a one\-line task label omits\. Second, a small learned \\emph\{instructor\}, trained via supervised fine\-tuning, maps the natural language task description and an initial scene snapshot to a task\-appropriate annotation and runs asynchronously alongside the action policy, hiding generation latency behind the rollout\. Applied to over 1M robot manipulation and 50K EgoVerse human\-egocentric videos, with no new demonstrations collected, DeMiAn delivers four findings on a VLA action policy and a video\-based world\-action model:  i\) the learned instructor lifts RoboCasa success by 5 points over the no\-annotation baseline, within 3 points of a per\-task oracle; \(ii\) that oracle is non\-trivial\-\-\-no fixed aspect dominates, and peak performance requires selecting the right annotation aspect per task; \(iii\) the trained system extends usefully to composite tasks under subgoal\-driven prompt switching, and to OOD scenes and objects; and \(iv\) dense annotation improves the compute\-performance frontier in both mid\-training and post\-training, making re\-annotation a practical scaling lever for robot policy learning\.

## SkillOpt: Executive Strategy for Self\-Evolving Agent Skills

**Authors:** Yifan Yang; Ziyang Gong; weiquan Huang; Qihao Yang; Ziwei Zhou; Zisu Huang; Yan Li; Xuemei Gao; Qi Dai; Bei Liu; Kai Qiu; Yuqing Yang; Dongdong Chen; Xue Yang; Chong Luo

**ID:** 151264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bgUar0JP5t>) | [PDF](<https://openreview.net/pdf?id=bgUar0JP5t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151264>)

Adapting language agents often means teaching them domain procedures: where to look, which tools to call, how to verify intermediate results, and how to format outputs for a grader\. Existing context\-level adaptation usually either hand\-writes such procedures, generates them once, or lets skill artifacts grow through loosely controlled self\-revision\. We ask whether a skill can instead be trained as the compact external state of a frozen agent\. SkillOpt is a harness\-agnostic text\-space optimizer for a single natural\-language skill document\. It runs the frozen target model on scored rollout batches, uses a separate optimizer model to reflect over success and failure minibatches, proposes structured add/delete/replace edits, ranks them under a textual learning\-rate budget, and accepts a candidate only if it improves held\-out selection performance\. Rejected\-update memory, slow cross\-epoch guidance, and optimizer\-side meta skill make the editing loop behave like bounded training while leaving deployment as a single best\_skill\.md\. Across six direct\-chat benchmarks covering QA, spreadsheets, documents, math, and embodied decision making, \\ourmethod\{\} improves GPT\-\-5\.5 over no skill by 21\.5 points on average, with positive gains on every task and the best measured result on five of six\. Codex\- and Claude\-Code\-style harness runs show that the same artifact remains useful in tool\-backed execution\. Ablations and transfer studies identify validation\-gated, bounded edits and update memory as key to stable, portable skill learning\.

## DynamicVLA: A Vision\-Language\-Action Model for Dynamic Object Manipulation

**Authors:** Haozhe Xie; Beichen Wen; Jiarui Zheng; Zhaoxi Chen; Fangzhou Hong; Haiwen Diao; Ziwei Liu

**ID:** 156061 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ltI4sHR1N>) | [PDF](<https://openreview.net/pdf?id=0ltI4sHR1N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156061>)

_Abstract unavailable from the accessible public sources._

## Generation\-for\-Understanding with Structured Action Scripts for Embodied Multimodal Learning

**Authors:** Hange Zhou; Mingzhe Zhang; Hongyu Ge; Xiaotang Wang; Enjun Du; Runqing Xu; Yongqi Zhang

**ID:** 149460 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwF9hVdYIp>) | [PDF](<https://openreview.net/pdf?id=pwF9hVdYIp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149460>)

_Abstract unavailable from the accessible public sources._

## Beyond Data Scaling: Representation\-Centric Pre\-training for Vision\-Language\-Action Models

**Authors:** Senqiao Yang; Chengyao Wang; Yuxin Chen; Zixuan WANG; Longxiang Tang; Haokun GUI; Jinhui Ye; Changsheng Lu; Xiaoyang Wu; Mingkang Zhu; Pengguang Chen; Shu Liu; Zhuotao Tian; Hengshuang Zhao; Bei Yu; Jiaya Jia

**ID:** 155956 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1ZmDZUFxCk>) | [PDF](<https://openreview.net/pdf?id=1ZmDZUFxCk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155956>)

_Abstract unavailable from the accessible public sources._

## NavAble: A Large\-Scale Dataset and Synthetic Data Generation Pipeline for Blind Navigation

**Authors:** Hochul Hwang; Jahir Sadik Monon; Soowan Yang; Shiven U Patel; Anh N Nguyen; Kien Nguyen; Keshav Garg; Dylan Gage; Duretti Hordofaa; Anshu Anjna; Eshed Ohn\-Bar; Donghyun Kim

**ID:** 138983 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=seCs2pKlcS>) | [PDF](<https://openreview.net/pdf?id=seCs2pKlcS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138983>)

Reliable recognition of accessibility\-critical objects \(e\.g\., audible pedestrian signals, door\-activation buttons, and handrails\) is essential for assistive navigation technologies that support safe, independent mobility for blind and low\-vision \(BLV\) users\. Yet these categories are severely underrepresented in existing large\-scale vision datasets, and the few datasets that include them suffer from limited class coverage, inconsistent annotations, and poor diversity, limiting the perception reliability that BLV navigation requires\. We introduce NavAble, a large\-scale dataset spanning 11 accessibility\-critical object classes, combining 41K curated open\-source images with 8K newly collected, densely annotated real\-world images\. To extend scale and diversity, we develop a synthetic data generation pipeline that renders high\-fidelity 3D assets across 37 environments under diverse styles and viewpoints, yielding 452K frames with rich ground\-truth annotations from 565 assets\. The pipeline minimizes manual effort by combining automated web image crawling, VLM\-based filtering, SAM 3D\-based asset generation, and convenient camera trajectory configuration, enabling large\-scale data generation at a diversity unattainable through manual collection\. Experiments show that fine\-tuning existing segmentation models on the NavAble Dataset achieves reliable accessibility\-object segmentation \(&gt;80\\% mIoU on our held\-out test set\)\. We also demonstrate the effectiveness of synthetic data augmentation, which yields up to \+3\.5 mIoU over real\-world\-only fine\-tuning\. Beyond benchmark evaluation, validation on egocentric data from two mobility\-assistive robots demonstrates improved perception reliability in real\-world navigation scenarios\. Together, NavAble establishes a scalable foundation for BLV navigation perception, directly addressing the data scarcity and embodiment gaps that have limited progress in this domain\. The dataset and pipeline are publicly available at https://huggingface\.co/datasets/NavAble/NeurIPS\_2026\_BLV\.

## LLMs as MDP Designers: A Dependency\-Aware Agentic Framework for Automated Robot Policy Generation

**Authors:** Hong Je\-Gal; Jinwoo Kim; Chanbin YI; Hyun\-Suk Lee

**ID:** 151231 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bvhaE5w1Z4>) | [PDF](<https://openreview.net/pdf?id=bvhaE5w1Z4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151231>)

We investigate the automated generation of executable robot reinforcement learning \(RL\) policies from natural\-language task descriptions\. Rather than using large language models \(LLMs\) as execution\-time decision makers, we use them as designers that construct RL pipelines before deployment, including Markov decision process \(MDP\) formulation and simulator implementation\. We identify a phase\-wise structure in this problem: MDP formulation is dependency\-structured and sequential, whereas simulator implementation becomes modular once the formulation is fixed\. Based on this structure, we propose ARPG, a dependency\-aware agentic framework that performs sequential MDP modeling, localized verification and correction, and simulator\-structured implementation while externalizing intermediate artifacts\. ARPG targets a key failure mode of automated policy generation: executable code may still yield non\-learnable policies when state, action, reward, and termination artifacts are not semantically aligned\. Experiments in Isaac Sim show that ARPG improves modeling correctness, environment executability, and policy\-generation success compared with monolithic LLM baselines and off\-the\-shelf agentic systems\. Additional demonstrations on custom robotics, standard RL, and engineering\-domain MDPs further suggest that the same modeling pipeline can be reused beyond the main benchmark suite\.

## Change\-Robust Online Topological Memory for Long\-Term Relocalization and Semantic Navigation

**Authors:** Jiaming Wang; Diwen Liu; Jizhuo Chen; Atharva A Ghotavadekar; Da Jiaxuan; Linh Kästner; Harold Soh

**ID:** 149306 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rADSBLErqY>) | [PDF](<https://openreview.net/pdf?id=rADSBLErqY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149306>)

Long\-term semantic navigation requires a robot to reuse past observations after appearance and scene change, but semantic memories are only useful if the robot can relocalize into the memory without corrupting it with false visual matches\. We propose CROSS, a change\-robust topological memory that introduces a pre\-commitment localization layer between visual place recognition and map update\.  Instead of treating a retrieved keyframe as an immediate place association or loop\-closure factor, CROSS lifts each RGB\-D retrieval into a candidate global $\\mathrm\{SE\}\(3\)$ pose mode using relative pose estimation\. A bounded Gaussian\-mixture filter then propagates competing continuous trajectory branches with odometry, rejects branches that are physically inconsistent, and promotes only persistent branches to loop closures\.  This moves ambiguity handling from discrete place IDs or post\-hoc graph\-factor rejection to continuous pose\-space validation before map commitment\.  Across public long\-term relocalization benchmarks and real quadruped object\-navigation experiments, CROSS improves reuse of a single sparse RGB\-D memory under illumination, seasonal, dynamic\-scene, and object\-level change\.

## World Models as Adversaries: Multi\-Agent Self\-Play Fine\-Tuning for Robust Motion Planning

**Authors:** Tong Nie; Yuewen Mei; Junlin He; Yihong Tang; Jian Sun; Wei Ma

**ID:** 151403\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151403

[Paper](<https://openreview.net/forum?id=avlwpkoCiV>) | [PDF](<https://openreview.net/pdf?id=avlwpkoCiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151403>)

_Abstract unavailable from the accessible public sources._

## Learning from Trials and Errors: Reflective Test\-Time Planning for Embodied LLMs

**Authors:** Yining Hong; Huang Huang; Manling Li; Fei\-Fei Li; Leonidas Guibas; Jiajun Wu; Yejin Choi

**ID:** 151101\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151101

[Paper](<https://openreview.net/forum?id=cyktRcY8D7>) | [PDF](<https://openreview.net/pdf?id=cyktRcY8D7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151101>)

_Abstract unavailable from the accessible public sources._

## FlowHOI: Flow\-based Semantics\-Grounded Generation of Hand\-Object Interactions for Dexterous Robot Manipulation

**Authors:** Huajian Zeng; Lingyun Chen; Jiaqi Yang; Yuantai Zhang; Fan Shi; Peidong Liu; Xingxing Zuo

**ID:** 155765 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=35aGAAx7tn>) | [PDF](<https://openreview.net/pdf?id=35aGAAx7tn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155765>)

Recent vision\-language\-action \(VLA\) models can generate plausible end\-effector motions, yet they often fail in long\-horizon, contact\-rich tasks because the underlying hand\-object interaction \(HOI\) structure is not explicitly represented\. An embodiment\-agnostic interaction representation that captures this structure would make manipulation behaviors easier to validate and transfer across robots\. We propose FlowHOI, a two\-stage flow\-matching framework that generates semantically grounded, temporally coherent HOI sequences, comprising hand poses, object poses, and hand\-object contact states, conditioned on an egocentric observation, a language instruction, and a 3D Gaussian splatting \(3DGS\) scene reconstruction\. We decouple geometry\-centric grasping from semantics\-centric manipulation, conditioning the latter on compact 3D scene tokens and employing a motion\-text alignment loss to semantically ground the generated interactions in both the physical scene layout and the language instruction\. To address the scarcity of high\-fidelity HOI supervision, we introduce a reconstruction pipeline that recovers aligned hand\-object trajectories and meshes from large\-scale egocentric videos, yielding an HOI prior for robust generation\.  Across the GRAB and HOT3D benchmarks, FlowHOI achieves the highest action recognition accuracy and a 1\.7$\\times$ higher physics\-simulation success rate on GRAB than the strongest diffusion\-based baseline, while delivering a 40$\\times$ inference speedup\. We further demonstrate real\-robot execution across four contact\-rich, dexterous manipulation tasks, highlighting the effectiveness of retargeting our generated HOI representations to robotic dexterous hands, achieving significantly higher success rates than prior methods due to improved physical plausibility and semantic alignment\.

## SelfCritic\-VLA: Language as Intrinsic Critic for Vision Language Action Models in Autonomous Driving

**Authors:** Fang Li; Zheng Liu; Yuechen Luo; Hanbing Li; Zhi\-Xin Yang

**ID:** 152280 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UGQKMlMM5j>) | [PDF](<https://openreview.net/pdf?id=UGQKMlMM5j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152280>)

Vision\-Language\-Action \(VLA\) models offer a promising paradigm for end\-to\-end autonomous driving by connecting visual scene understanding, linguistic reasoning, and low\-level trajectory generation\. However, existing driving VLAs typically use language only as static commands or supervised rationales, while treating trajectory prediction as an open\-loop generation problem\. As a result, they lack an explicit mechanism for understanding the consequences of their own actions, which limits robustness under closed\-loop distribution shift and makes reinforcement learning inefficient in long\-tail scenarios\.   We propose SelfCritic\-VLA, a self\-evaluative VLA framework that unifies trajectory generation, language\-grounded action critique, and trajectory refinement\. Given a driving scene, the model first generates an initial trajectory, then produces a language\-grounded critique that describes the potential safety, progress, and rule\-compliance consequences of executing that trajectory, and finally refines the trajectory conditioned on this critique\. To train this capability, we construct a large\-scale counterfactual trajectory dataset with multi\-source candidate trajectories and semantic critiques, and perform hybrid supervised fine\-tuning for planning, action evaluation, and refinement\. Building on this initialization, we introduce a self\-critic reinforcement learning procedure based on GRPO, where critique\-conditioned refinements are filtered by grounded driving rewards and distilled back into the base policy\.   Experiments on NAVSIM and Bench2Drive show that SelfCritic\-VLA consistently improves both open\-loop and closed\-loop driving performance over strong baselines, demonstrating the effectiveness of language\-guided self\-refinement for driving policy optimization\.

## RoboWits: Unexpected Challenges for Robotic Creative Problem Solving

**Authors:** Chunru Lin; Hongxin Zhang; Fenghao Yu; Zhehuan Chen; Tom Griffiths; Yejin Choi; David Held; Chuang Gan

**ID:** 139850 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0dyy3qodV0>) | [PDF](<https://openreview.net/pdf?id=0dyy3qodV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139850>)

The ability to reason, adapt, and creatively solve problems under unexpected challenges is essential for robots operating in real\-world environments\. However, current robotic benchmarks primarily emphasize skill\-level execution and provide limited insight into such cognitive reasoning capabilities\. We introduce RoboWits, a bi\-manual robotic benchmark designed to systematically evaluate cognitive reasoning, creative tool use, and robustness to unexpected conditions\. To enable scalable construction of high\-quality reasoning\-centric unexpected scenarios, we propose an automated task generation pipeline formulated as a multi\-agent cooperative framework, comprising agents for seed task generation and verification, metric generation, scene generation, and task mutation\. Using the pipeline, we curated 30 diverse seed tasks and 208 tasks with mutations and graded difficulty across geometry, material, and assembly\-based reasoning\. We benchmark popular robot policies, pre\-trained VLAs, and oracle\-state planners\. Our results reveal a significant performance gap: while pre\-trained VLAs exhibit preliminary success on seed tasks after single\-task fine\-tuning, they struggle to perform on mutated tasks, implying their brittleness in manipulation tasks requiring reasoning, strategy adaptation, and robustness to deceptive or constrained environments\.

## LessMimic: Versatile Humanoid\-Object Interaction with Unified Distance Field Representations

**Authors:** Yutang Lin; Jieming Cui; Yixuan Li; Wei Liang; Baoxiong Jia; Yixin Zhu; Siyuan Huang

**ID:** 149455 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pxh6UoIlqx>) | [PDF](<https://openreview.net/pdf?id=pxh6UoIlqx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149455>)

Humanoid robots capable of versatile whole\-body interaction with everyday objects represent a central goal of embodied intelligence\. Existing approaches often rely on motion\-reference inputs or task\-specific rewards, coupling policies to particular motion scripts, object geometries, and contact timings\. This limits geometric generalization and flexible interaction control, where simple commands specify motion intent while object geometry determines how contact should be executed\. We introduce LessMimic, a framework for versatile motion\-free\-at\-inference humanoid–object interaction\. At inference, a single whole\-body policy is steered by root commands and an interaction\-type flag instead of motion\-reference inputs, and is conditioned on a compact interaction representation built from short histories of distance\-field\-derived surface distances and local surface directions\. This geometry\-conditioned interface enables command\-steered control while adapting contact behavior to local object geometry\. Through visual distillation, LessMimic further enables egocentric\-depth\-based deployment for MoCap\-free sensing\. Across object scales from 0\.4× to 1\.6×, LessMimic maintains robust performance over four interaction tasks, including PickUp, SitStand, Push, and Carry, where motion\-conditioned baselines degrade sharply away from the training scale\. Beyond single\-task evaluation, LessMimic further supports sequential composition of heterogeneous interaction skills, attaining 62\.1% success on five\-task sequences and retaining 23\.5% success at 15 task instances\. By grounding interaction control in local geometry rather than motion references, LessMimic provides a path toward geometry\-generalizable, command\-steerable humanoid–object control with heterogeneous skill composition\.

## NoTVLA: Semantics\-Preserving Robot Adaptation via Narrative Action Interfaces

**Authors:** Zheng Huang; Mingyu Liu; Xiaoyi Lin; Muzhi Zhu; Ye Lin; Canyu Zhao; Zongze Du; Xiaoman Li; Hao Zhong; Yiduo Jia; Hao Chen; Chunhua Shen

**ID:** 151525 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a0zV7TNKuT>) | [PDF](<https://openreview.net/pdf?id=a0zV7TNKuT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151525>)

Robot fine\-tuning can improve manipulation success while degrading the semantic structure inherited from large vision\-language pretraining\. This trade\-off limits the reuse of vision\-language\-action \(VLA\) policies in settings that require compositional instructions, camera changes, and coordination with higher\-level agents\. We present \\textbf\{NoTVLA\}, a semantics\-preserving robot adaptation framework that replaces dense low\-level action supervision with a sparse narrative action interface\. NoTVLA converts demonstrations into sparse, semantically meaningful waypoints, grounds each decision with a task\-relevant visual anchor and depth value, and reconstructs executable motion through a deterministic detokenizer\. The resulting interface keeps the autoregressive vision\-language backbone close to its pretrained prediction format while delegating high\-frequency control to a transparent motion\-rendering stage\. We evaluate this design through matched and backbone\-family comparisons, semantic retention probes, semantic out\-of\-distribution manipulation tasks, camera and depth perturbations, and deployment\-oriented efficiency analysis\. The results suggest that robot adaptation should be judged not only by task success, but also by how much task\-relevant semantic competence is preserved during fine\-tuning\.

## SatNav: A Scalable Benchmark for Long\-Horizon UAV Vision\-Language Navigation from Satellite Imagery

**Authors:** Jiajun Jiang; Chunliang Hua; Zichun Chen; Yanxing Wu; Zeyuan YANG; Jie Song; Xiao Hu

**ID:** 139165 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hOEniyN6hl>) | [PDF](<https://openreview.net/pdf?id=hOEniyN6hl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139165>)

Urban uncrewed aerial vehicle \(UAV\) vision\-language navigation \(VLN\) requires agents to follow instructions across extended urban spaces, inherently demanding long\-term memory and geospatial grounding\. However, scaling existing benchmarks remains difficult because of their reliance on costly reconstructed 3D assets, limiting geographic diversity and episode scale\. To address this, we introduce SatNav, a scalable, long\-horizon UAV VLN benchmark built from high\-resolution satellite imagery\. SatNav targets city\-level navigation missions and uses satellite crops as approximations of UAV nadir views for visual observations\. Through an automated cue\-to\-episode pipeline, SatNav constructs 118K episodes from 59 scenes across 18 cities, with an average trajectory length of 379 m\. To stress\-test long\-horizon memory and geospatial reasoning, SatNav defines three task families: Boundary, Landmark, and Route, targeting loop progress tracking, landmark\-based spatial grounding, and route following with counting cues\. Benchmarking classical and recent large vision language model \(LVLM\) based VLN agents on SatNav shows that city\-scale navigation remains challenging\. We further introduce SwiftVLN, a modular framework with switchable memory components, and conduct systematic memory\-design ablations\. Finally, satellite\-to\-UAV transfer experiments show that satellite\-trained navigation models can operate on real\-flight UAV observations, showing the practical relevance of SatNav\.

## $\\text\{A\}^3$\-VLA: Automatic Perception\-Guided Attention Alignment for Robot Manipulation

**Authors:** Shengzhe Zhang; Qi Zhang; Dazhong Shen; Chao Wang; Shaopeng Zhai; Hui Xiong

**ID:** 155296 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6dTRqK5RBh>) | [PDF](<https://openreview.net/pdf?id=6dTRqK5RBh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155296>)

Vision\-Language\-Action Models \(VLAs\) enable robots to perform manipulation tasks by leveraging Vision\-Language Models \(VLMs\) to process visual observations and language instructions\. However, the action prediction objective itself lacks fine\-grained task\-specific perceptual supervision, making it prone to relying on task\-irrelevant visual shortcuts, leading attention away from target objects and key interaction areas, thereby limiting its operational performance and generalization ability\. To address this, we propose Automatic Perception\-Guided Attention Alignment for Robot Manipulation \($\\text\{A\}^3$\-VLA\), a framework that derives task\-specific visual guidance from the manipulation process itself\. Specifically, $\\text\{A\}^3$\-VLA first generates heuristic candidate regions for target objects and the robot from interaction\-induced visual changes, and refines them with a visual segmentation model offline\. These regions serve as explicit perceptual guidance through two complementary objectives: an attention allocation loss that encourages sufficient focus on task\-critical regions when language or robot state tokens query the visual input, and a contrastive learning loss that aligns the representations of candidate target regions with language instructions while separating them from task\-irrelevant regions\. Extensive experiments on simulated and real\-world manipulation tasks demonstrate that $\\text\{A\}^3$\-VLA consistently improves multiple VLA backbones, with an average success rate gain of 6\.5\\% \- 25\.2\\% across benchmarks\.

## FocusNav: Learning Task\-directed Perception via Action\-Aware Future Reconstruction in Vision\-and\-Language Navigation

**Authors:** Caifeng liu; Xueqiong Li; Chenghao Shi; weida chen; Yuhao Wang; Quan Zhang; Yuanxi Peng; Guijian Tang; Shaowu Yang

**ID:** 149699 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o6XALDEi9V>) | [PDF](<https://openreview.net/pdf?id=o6XALDEi9V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149699>)

Vision\-and\-Language Navigation\(VLN\) requires agents to sustain task\-directed spatial perception to focus on navigation\-critical regions while translating linguistic intent into low\-level actions\. Prevalent hierarchical planning methods rely on a high\-level policy to select waypoints or subgoals for low\-level control, but they often fail to remain focused, causing inaccurate or redundant subgoals that directly mislead execution\. Moreover, their separation between visual perception and action execution neglects fine\-grained spatial reasoning in low\-level movements and limits real\-world deployability\. To address these two issues, we propose FocusNav, a grounding\-driven end\-to\-end monocular framework that learns task\-directed spatial perception through action\-aware future reconstruction\. Concretely, FocusNav first boosts the agent’s visual attention on task\-relevant regions with a Grounding\-driven Visual Reconstruction module that reconstructs instruction\-relevant targets and traversable areas via a semantic\-guided latent diffusion process\. Subsequently, to bridge the perception–execution gap, we incorporate physical action priors via Action\-aware Visual Conditioning and enforce Intent\-Effect Alignment between anticipated visual changes and observed action effects\. These effectively enhance the agent’s task\-directed spatial perception to direct attention to navigation\-critical regions, and tighten the perception–execution loop\. Experiments on R2R\-CE and RxR\-CE benchmarks show that FocusNav achieves substantially improved state\-of\-the\-art performance with a simple monocular low\-level policy, while providing faster inference than recent methods\. Furthermore, real\-world robot experiments validate our FocusNav’ s effectiveness, ease of deployment, and lightweight design\.

## UNIVERSE: Unified Video Action Models for Autonomous Driving with Flexible Mask\-Modulated Modality Generation

**Authors:** Mengmeng Liu; Diankun Zhang; Jiuming Liu; Jianfeng Cui; Hongwei Xie; Guang Chen; Hangjun Ye; Francesco Nex; Hao Cheng; Michael Yang

**ID:** 152503 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SfVDhDwIKG>) | [PDF](<https://openreview.net/pdf?id=SfVDhDwIKG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152503>)

World Action Models have recently emerged as a promising paradigm for improving action generalization in autonomous driving by leveraging future video prediction as dense supervision for scene dynamics and temporal causality\. However, it remains unclear how video modeling should be integrated with action generation to maximally transfer these benefits\. Existing cascaded or dual\-Diffusion Transformer architectures decouple video imagination from trajectory prediction, limiting knowledge transfer: the action model may still overfit dataset\-specific driving priors, while the video model only indirectly regularizes planning\. In this paper, we propose UNIVERSE, a unified video\-action model built upon a single mask\-modulated Diffusion Transformer\. By co\-training future video latents and ego\-trajectory tokens within shared generative parameters, UNIVERSE allows dense video supervision to directly shape trajectory denoising, leading to stronger cross\-domain action generalization\. To ensure causal validity and efficient deployment, we introduce a Modality\-Decoupling Visibility Mask, which shares historical context across modalities while blocking mutual attention between future video and trajectory tokens\. This prevents future\-modality dependency and enables trajectory\-only inference by removing future\-video denoising at test time, achieving a $4\.3\\times$ speedup over joint video\-\-trajectory rollout while maintaining comparable planning accuracy\. The same model also supports video\-only and joint video\-\-trajectory rollouts\. Experiments show that UNIVERSE achieves 91\.0 PDMS on NAVSIM and strong zero\-shot transfer to nuScenes and Bench2Drive without fine\-tuning, while ablations confirm the importance of single\-DiT unification, video co\-training, and mask\-based modality decoupling\.

## A Unified Perturbation Framework for Analyzing Leaderboard Stability and Manipulation

**Authors:** Hosna Oyarhoseini; Jimmy Lin; Amir\-Hossein Karimi

**ID:** 148880 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uUAHsLfCCm>) | [PDF](<https://openreview.net/pdf?id=uUAHsLfCCm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148880>)

Evaluation leaderboards such as LMArena play a central role in benchmarking large language models by aggregating pairwise human preferences into model rankings, but the robustness of these rankings is still poorly understood\. We present a unified perturbation framework for analyzing Bradley–Terry leaderboards under structured data modifications using influence\-based approximations\. Our framework studies three match\-level perturbations—dropping matches, adding matches, and flipping match outcomes—along with player removal\. We evaluate their effects on top\-k membership, global ranking consistency measured by Kendall’s tau, and confidence\-interval uncertainty\. Across Chatbot Arena and six additional pairwise\-comparison datasets, we show that modern leaderboards are non\-robust across all three objectives: targeted perturbations affecting less than 1% of the data can change the top\-ranked model, degrade global ranking consistency, and alter confidence intervals\. We summarize these effects using normalized dataset\-level robustness scores that compare fragility across leaderboard designs\. We further show that influence scores enable efficient targeted manipulation, promoting or demoting specific models with fewer actions than prior manipulation baselines, while also identifying additional matchups that reduce uncertainty for target models\. Finally, player\-removal analysis shows that removing influential models can induce broad reordering, highlighting model deprecation as a source of the leaderboard illusion\. These findings reveal fundamental limitations of current leaderboard designs and motivate more robust evaluation protocols\.

## Embodied AI Cannot Scale Without Open\-Source Distributed Geometric Optimization Backends for Life\-Scale Egocentric Data

**Authors:** Senthil Palanisamy; Abhishek Anand; Satpal S Rathore; Pratyush K Patnaik; Shubhanshu Khatana

**ID:** 140071 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QD4xn09i0b>) | [PDF](<https://openreview.net/pdf?id=QD4xn09i0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140071>)

This position paper argues that the embodied AI community must invest in open\-source, distributed geometric backends for egocentric pose estimation, and that the current bias toward end\-to\-end neural solutions is creating a data infrastructure deficit that will bottleneck the next generation of Vision\-Language\-Action \(VLA\) models and radiance field reconstruction\. While neural frontends \(DUST3R, VGGT, DepthAnythingV2\) achieve remarkable local spatial accuracy, we show that no open source existing system for ego centric data, neural or classical, delivers metrically consistent global pose trajectories over the 100,000 frame "life scale" sequences that modern embodied AI applications require\. This gap is structural, not incidental: fixed window neural architectures cannot enforce global consistency by construction, rolling shutter distortion compounds systematically over long horizons in ways feedforward networks cannot model, and every production system that does work at this scale is proprietary and hardware locked\. We formally define the Open Distributed Geometric Optimization Backend, a hybrid architecture combining uncertainty weighted neural priors with distributed bundle adjustment and spline continuous trajectory parameterization, and argue it is the necessary open source infrastructure to generate the metrically grounded training data on which future end to end models depend\.

## Simulation\-Informed Diffusion for Decentralized Multi\-robot Motion Planning

**Authors:** JINHAO LIANG; Sven Koenig; Ferdinando Fioretto

**ID:** 150165 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kBwVVfWwux>) | [PDF](<https://openreview.net/pdf?id=kBwVVfWwux>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150165>)

Decentralized multi\-robot motion planning requires each robot to generate collision\-free trajectories from local observations, without global sensing or reliable communication\. However, most existing planners, whether classical or learning\-based, generate trajectories from a static snapshot of the local observation, which limits their ability to anticipate the future behavior of neighboring robots\. This limitation is critical as the number of robots increases and the environment becomes more cluttered\. To overcome this challenge, this paper introduces Simulation\-Informed Diffusion \(SID\), a decentralized framework built on constraint\-aware diffusion models \(CADM\)\. SID first uses CADM to simulate the future trajectories of neighboring robots from their currently observed states, and then uses the same CADM to plan each robot's own trajectory under safety constraints informed by these simulations\. Crucially, the accurate simulation of neighbors enables a minimal communication scheme that triggers coordination only when necessary in highly congested scenarios\. Experiments across diverse environments show that SID consistently outperforms baseline methods in terms of planning effectiveness and constraint satisfaction, and scales to scenarios with 100 robots and 160 obstacles\.

## Scaling Whole\-Body Loco\-Manipulation through Compositional Data Synthesis

**Authors:** Yufei Zhu; Runyi Yu; Yinhuai Wang; Aoru Xue; Qin Sun; Qingqiu Huang; Xinge ZHU; Zhiyang \(Frank\) Dou; Yuexin Ma

**ID:** 149896 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mQGMIJEWTN>) | [PDF](<https://openreview.net/pdf?id=mQGMIJEWTN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149896>)

Acquiring diverse whole\-body dexterous manipulation data for humanoids remains a fundamental challenge in character animation and robotics\. Existing pipelines rely on expensive mocap data collected from many subjects and require retargeting to a unified humanoid shape, which limits scalable data construction and often yields physically inconsistent interactions \(e\.g\., unstable contacts\)\. We present \\textbf\{ManipSynth\}, a unified framework for whole\-body loco\-manipulation synthesis, with compositional generation of sparse whole\-body motion, object\-centric grasp anchors, and contact\-aware interaction transitions\. Then, we scale data generation through randomized pre\-grasp motions, grasp poses, and object trajectories\. ManipSynth achieves approximately 5$\\times$ higher contact coverage and lower average penetration than OMOMO across representative objects\. To test whether better contact\-consistent data improve scalable control learning, we train \\textbf\{ManipTracker\}, a general\-purpose Humanoid\-Object Interaction \(HOI\) tracking policy, on purely synthetic demonstrations\. Under the same object set, number of training trajectories, the same ManipTracker trained on ManipSynth demonstrates stronger generalization than when trained on mocap data, while achieving over 90\\% training success\.

## Unified Noise Steering for Efficient Human\-Guided VLA Adaptation

**Authors:** Junjie Lu; Xinyao Qin; Yuhua Jiang; Kaixin Wang; Chuheng Zhang; Bin Liang; Jun Yang; Min Xu; Li Zhao

**ID:** 152531 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SSqCNsA0YT>) | [PDF](<https://openreview.net/pdf?id=SSqCNsA0YT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152531>)

Diffusion\-based vision\-language\-action \(VLA\) models have emerged as strong priors for robotic manipulation, yet adapting them to real\-world distributions remains challenging\.  In particular, on\-robot reinforcement learning \(RL\) is expensive and time\-consuming, so effective adaptation depends on efficient policy improvement within a limited budget of real\-world interactions\. Noise\-space RL lowers the cost by keeping the pretrained VLA fixed as a denoising generator while updating only a lightweight actor that predicts the noise\. However, its performance is still limited due to inefficient autonomous exploration\. Human corrective interventions can reduce this exploration burden, but they are naturally provided in action space, whereas noise\-space finetuning requires supervision over noise variables\. To address these challenges, we propose UniSteer, a Unified Noise Steering framework that combines human corrective guidance with noise\-space RL through approximate action\-to\-noise inversion\.  Given a human corrective action, UniSteer inverts the frozen flow\-matching decoder to recover a noise target, which provides supervised guidance for the same noise actor that is simultaneously optimized via reinforcement learning\.  Real\-world experiments on diverse manipulation tasks show that UniSteer adapts more efficiently than strong noise\-space RL and action\-space human\-in\-the\-loop baselines, improving the success rate from 20\\% to 90\\% in 66 minutes on average across four real\-world adaptation tasks\.

## IDEAL: Interaction Dynamics and Force\-Aware Learning for Dual\-Humanoid Collaborative Manipulation

**Authors:** Zhaoyang Li; Chiyu Zhang; Chaoyue Li; Xiao Zhang; Wanting Li; Ziyu Chen

**ID:** 153659 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JhPYWytFsc>) | [PDF](<https://openreview.net/pdf?id=JhPYWytFsc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153659>)

anoid collaborative manipulation extends the payload and workspace capabilities of a single robot, enabling applications such as large\-object carrying and cooperative transportation\. However, imitation learning for Dual\-Humanoid\-Object Interaction \(DHOI\) remains underexplored, particularly in real\-world settings where policies must coordinate motion and maintain force consistency under closed\-chain coupling and restricted observations\. We propose IDEAL, an imitation learning framework for DHOI that combines interaction\-consistent kinematic references with explicit dynamics priors\. IDEAL first recovers dual\-human motions from monocular videos and refines them for interaction consistency\. It then formulates collaborative manipulation as a rigid\-body grasping problem and solves for desired force allocations under dynamics, contact, and friction constraints\. Finally, IDEAL learns control policies through an interaction\-dynamics and force\-aware reinforcement learning framework guided by both kinematic and dynamic references\. Experimental results show that IDEAL successfully achieves robust DHOI in both simulation and real\-world deployments\. As far as we know, IDEAL is the first end\-to\-end learning framework for DHOI deployed on real dual\-humanoid robots, offering a new paradigm for complex real\-world humanoid collaboration\.

## WorldComposer: Generative High\-Fidelity Simulation with Digital Cousins for Generalizable Robot Learning and Evaluation

**Authors:** Jasper Lu; Zhenhao Shen; Yuanfei Wang; Shugao Liu; Shengqiang Xu; Shawn Xie; Jingkai Xu; Feng Jiang; Jade Yang; Chen Xie; Ruihai Wu

**ID:** 152163 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V3CffBnlPI>) | [PDF](<https://openreview.net/pdf?id=V3CffBnlPI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152163>)

Learning robust robot policies in real\-world environments requires diverse data augmentation, yet scaling real\-world data collection is costly due to the need for acquiring physical assets and reconfiguring environments\. Therefore, augmenting real\-world scenes into simulation has become a practical augmentation for efficient learning and evaluation\. We present WorldComposer, an automated generative Real2Sim2Real framework that maps real\-world panoramas into high\-fidelity, task\-ready simulation environments and further synthesizes diverse Digital Cousins through scene and object variations\. Combined with high\-quality physics engines and realistic assets, WorldComposer supports interactive manipulation across rigid, articulated, and deformable objects\. Additionally, we incorporate multi\-room stitching to construct consistent large\-scale environments for long\-horizon tasks\. Experiments demonstrate a strong sim\-to\-real correlation validating our platform's fidelity, and show that extensively scaling up data generation leads to significantly better generalization to unseen scene and object variations, demonstrating the effectiveness of Digital Cousins for generalizable robot learning and evaluation\.

## PRISM: Programming Interactive Scenes from Monocular Images for Embodied Simulation

**Authors:** Yumeng He; Yichen Song; Xiaotian Yang; Weijia Zhang; Zanwei Zhou; 俊儒 宫; Xiaokang Yang; Yunbo Wang

**ID:** 153153 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NTuLcEoan7>) | [PDF](<https://openreview.net/pdf?id=NTuLcEoan7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153153>)

The advancement of Embodied AI necessitates high\-quality simulation assets that faithfully mirror the physical world\. However, transforming raw visual observations into simulation\-ready scenes remains challenging due to the lack of physical grounding and scene\-level interactivity in current image\-to\-URDF methods\. We propose \*\*PRISM\*\*, a framework that reformulates monocular scene reconstruction as a procedural programming task for interactive 3D environments\. By leveraging the zero\-shot reasoning and code synthesis of MLLMs, PRISM translates a single RGB image into executable programs defining object geometry, articulation, and physical properties\. To ensure simulation readiness, it incorporates a \*\*physics\-in\-the\-loop\*\* mechanism that iteratively refines the generated programs by validating their execution in a physics engine\. This feedback loop enforces physically plausible object articulations, valid object compositions and interactions, and accurate spatial relationships\. Experiments demonstrate that PRISM significantly outperforms open\-loop approaches and prior monocular reconstruction models\. Notably, PRISM\-generated scenes support complex downstream tasks such as stable stacking and fine\-grained manipulation, which are difficult to achieve with existing methods\.

## Decoupling Action from Egocentric Observation for World Simulation

**Authors:** Yue Ma; Pengjie Song; Xinyu Wang; Yi He; Zeqian Long; Fangneng Zhan; Kaichen Zhou; Hongyu Liu; Hongfa Wang; Peihao Li; haoyang huang; Nan Duan; Qifeng Chen

**ID:** 152818 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QAYW75ayLF>) | [PDF](<https://openreview.net/pdf?id=QAYW75ayLF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152818>)

Egocentric action transfer aims to decouple the semantic action from egocentric observations and reproduce them in new visual contexts, enabling scalable world simulation, embodied policy learning, and robotic data generation\. Existing approaches to transferring actions rely on condition\-guided video generation, which converts the observation video into explicit geometric controls \(\_e\.g\.\_, hand poses or meshes\) to drive synthesis\. However, these methods introduce geometric estimation errors, making it difficult to preserve physically plausible interactions when transferred to new scenes\. Alternatively, motion transfer methods directly extract motion patterns from the observation video, yet motion\-level features alone cannot encode rich contact dynamics, frequently leading to severe hand structural collapse and implausible contact layout\. To address both limitations, we present EgoACT, a test\-time framework for egocentric action transfer that operates directly on the denoising process of video diffusion models without requiring additional geometric estimators\. EgoACT uses Velocity\-guided Structure Anchoring to stabilize reference\-consistent hand\-object structure in the early denoising stage, and Sparse Correspondence Calibration to refine reliable local correspondences in the mid\-to\-late denoising stages\. Together, these two components preserve transferable action semantics while improving temporal coherence and interaction realism\. We further establish EgoActionBench, a benchmark for evaluating action preservation, visual quality, and hand\-object plausibility across diverse egocentric manipulation scenarios\. Experiments show that EgoACT generates more coherent and physically plausible interaction videos than strong baselines\.

## Next Forcing: Causal World Modeling with Multi\-Chunk Prediction

**Authors:** Gangwei Xu; Qihang Zhang; Jiaming Zhou; Xing Zhu; Yujun Shen; Xin Yang; Yinghao Xu

**ID:** 150055 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l6yzdsHdX0>) | [PDF](<https://openreview.net/pdf?id=l6yzdsHdX0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150055>)

Autoregressive video generation has emerged as a powerful paradigm for World Action Models \(WAMs\)\. However, existing approaches suffer from slow training convergence particularly at high frame rates, limited converged accuracy, and slow inference due to iterative video denoising, as the training supervision is confined to the current chunk without explicit signals about future dynamics\. In this paper, we present Next Forcing, a multi\-chunk prediction \(MCP\) framework for causal world modeling that enables faster training, higher accuracy, and accelerated inference\. Inspired by multi\-token prediction in large language models, Next Forcing introduces an MCP training objective that augments the main model with lightweight auxiliary MCP modules to simultaneously denoise video chunks at multiple future temporal horizons \(next$^1$, next$^2$, next$^3$ chunks\)\. These MCP modules form a causal chain across prediction depths, where intermediate features fused from multiple layers of the main model are leveraged to predict future dynamics, allowing near\-future predictions to inform farther\-future ones and providing dense multi\-scale temporal supervision back to the main model\. During training, the MCP modules significantly accelerate convergence and improve converged accuracy, especially at high frame rates\. At 50 fps, our method achieves a 93\.1\\% relative improvement over the baseline LingBot\-VA at 5k training steps and achieves 2\.3$\\times$ faster convergence\. At inference, the MCP modules can be retained to predict the next video chunk in parallel with the current one, accelerating generation\. Next Forcing establishes new state\-of\-the\-art results on the RoboTwin benchmark \(94\.1\\%/93\.5\\% on Clean/Random\) and demonstrates significant improvements on PhyWorld, a benchmark evaluating adherence to physical laws in video generation\.

## World Action Verifier: Self\-Improving World Models via Forward\-Inverse Asymmetry

**Authors:** Yuejiang Liu; Fan Feng; Lingjing Kong; Weifeng Lu; Jinzhou Tang; Kun Zhang; Kevin Murphy; Chelsea Finn; Yilun Du

**ID:** 149004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tWNWfy455E>) | [PDF](<https://openreview.net/pdf?id=tWNWfy455E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149004>)

General\-purpose world models promise scalable policy evaluation, optimization, and planning, yet achieving the required level of robustness remains challenging\. Unlike policy learning which primarily focuses on optimal actions, a world model needs to be reliable over a vast space of suboptimal actions, which are often underrepresented in action\-labeled robot interactions\. To address this challenge, we propose World Action Verifier \(WAV\), a framework that enables world models to identify their own prediction errors and self\-improve\. The key idea is to decompose action\-conditioned state prediction into two independently verifiable factors: state plausibility and action reachability\. We show that verifying these factors is significantly more tractable than direct forward prediction due to two underlying asymmetries: the broader availability of action\-free data and the lower dimensionality of action\-relevant features\. Leveraging these asymmetries, we augment a world model with \(i\) a diverse subgoal generator obtained from video corpora and \(ii\) a sparse inverse model that infers actions from a subset of state features\. By enforcing cycle consistency among proposed subgoals, inferred actions, and forward rollouts, WAV provides an effective verification mechanism in under\-explored regimes, where existing methods often fail\. Across nine tasks spanning MiniGrid, RoboMimic, and ManiSkill, our method achieves 2$\\times$ higher sample efficiency while improving downstream policy performance by over 22\\%\.

## RescueBench: Can Embodied Agents Save Lives in the Wild?

**Authors:** Kui Wu; Beiyu Guo; Hao Chen; Shuhang Xu; Yuling Li; Yongdan Zeng; Zhoujun Li; Yizhou Wang; Fangwei Zhong

**ID:** 139237\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139237

[Paper](<https://openreview.net/forum?id=d1QPUUrYxZ>) | [PDF](<https://openreview.net/pdf?id=d1QPUUrYxZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139237>)

_Abstract unavailable from the accessible public sources._

## HAI: Hierarchical Anchored Interaction for Multi\-View Bimanual World Models

**Authors:** Sen Cui; Baohua Yin; Youyi Kou; Junyu Wu; Jingheng Ma; Zhikang Chen; Changshui Zhang

**ID:** 152516\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152516

[Paper](<https://openreview.net/forum?id=SXueAPIsi0>) | [PDF](<https://openreview.net/pdf?id=SXueAPIsi0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152516>)

Multi\-view bimanual robot world models must predict future observations while preserving scene identity, following two synchronized but non\-exchangeable arms, and maintaining consistency between global and wrist\-local views\. Existing conditioning schemes often collapse left\- and right\-arm actions into a view\-agnostic control signal, making long\-horizon rollout prone to scene drift, wrong\-arm responses, and cross\-view inconsistency\. We propose \\textbf\{HAI\}, a \\textbf\{Hierarchical Anchored Interaction\} architecture for controllable multi\-view bimanual world modeling\. HAI organizes prediction as a structured information flow\. First, hierarchical action\-view conditioning routes the bimanual action chunk to camera streams, injects coarse chunk\-level intent, performs structured multi\-view modeling on the coarse\-modulated features, and then injects fine per\-frame action control\. Second, anchored dynamic generation fuses the fine action\-conditioned descriptors with persistent per\-view scene anchors before decoding future observations\. Experiments on AgiBot and DROID show that HAI improves long\-horizon rollout quality over the baselines\. Ablations confirm gains in scene stability, wrist\-view controllability, and cross\-view consistency\. Further experiments on policy\-improvement diagnostics indicate more useful synthetic rollout signals for downstream VLA policies, achieving an averaging 67\.2\\% relative gain in success rate\. The project page is available at \\url\{https://hai\-anon\.github\.io/\}\.

## Dodge\-It: Learning Collision\-Aware VLA Models for Robotic Manipulation

**Authors:** Jiawei Feng; Chuzhao Huang; Xinli Xu; Yingcong Chen

**ID:** 150761\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150761

[Paper](<https://openreview.net/forum?id=fbIwXVL9bQ>) | [PDF](<https://openreview.net/pdf?id=fbIwXVL9bQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150761>)

Vision\-Language\-Action \(VLA\) models are increasingly used as general\-purpose policies for robotic manipulation, but completing the instructed task requires more than reaching the target state\. A policy must also avoid nearby objects throughout the rollout, including approach, interaction, transport, and handover\. A common approach is to invoke conventional collision avoidance mechanisms, such as motion planners or safety filters, which provide effective geometric safeguards\. However, the resulting system may struggle to produce actions that are simultaneously safe and task progressing\. When collision avoidance and manipulation progress require misaligned actions, the system may avoid the obstacle while slowing, disrupting, or even failing the task\. To address this, we introduce DODGE\-IT, a collision\-aware learning framework that leverages collision signals as policy\-improvement feedback to strengthen the VLA policy's collision\-aware manipulation capability\. DODGE\-IT first designs Task\-Relevant Assessment of Collision Events \(TRACE\) that detects and identifies task\-relevant obstacles from RGB\-D observations and turns executions into collision outcomes\. These outcomes are then incorporated together with task success signals into representative reinforcement learning frameworks for VLA\. We validate DODGE\-IT on SafeLIBERO and real robot manipulation tasks, showing improved obstacle avoidance while preserving task completion across simulated and physical settings\.

## Remember with Confidence: Uncertainty Quantification for Spatio\-temporal Memory with Probabilistic Guarantees

**Authors:** Harry Zhang; Nicolas Gorlo; Luca Carlone

**ID:** 152348\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152348

[Paper](<https://openreview.net/forum?id=TjgsCOJn16>) | [PDF](<https://openreview.net/pdf?id=TjgsCOJn16>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152348>)

Long\-horizon robot operation requires spatio\-temporal memory to record the environment state and recall it for downstream reasoning\. Scene graphs and retrieval\-augmented systems ground VLM descriptions to persistent 3D entities with rich semantic descriptions\. However, VLM captions are noisy and viewpoint\-inconsistent, and existing systems treat them as an oracle with no mechanism to detect unreliable stored descriptions\. We introduce object\-level semantic uncertainty for multi\-view VLM memory: a score that measures object\-centric cross\-view semantic scatter of captions and identifies semantically unresolved objects\. Then, we include our uncertainty scores in an advanced spatial\-semantic memory system, that we dub UQ\-DAAAM\. UQ\-DAAAM uses this score to actively refine uncertain objects under a fixed query budget by selecting high\-quality views and fusing the resulting multi\-view captions into a single object description\. We also derive probabilistic guarantees showing that higher\-quality candidate views \(as selected by our approach\) are more likely to reduce uncertainty\. Our experiments show that uncertainty quantification can make embodied 4D memory systems more reliable and more effective\. In particular, on the OC\-NaVQA benchmark, UQ\-DAAAM achieves substantially larger uncertainty reduction and better spatio\-temporal question answering performance than baselines\.

## Large Discrete Policy: Advancing Explicit Behavior Modeling with Stochastic Iterative Scoring

**Authors:** Zhenxin Li; Nadine Chang; Xinglong Sun; Jingde Chen; Wenhao Yao; Zi Wang; Maying Shen; Yu\-Gang Jiang; Zuxuan Wu; Shiyi Lan; Jose M\. Alvarez

**ID:** 149939\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149939

[Paper](<https://openreview.net/forum?id=m3o019KH6Z>) | [PDF](<https://openreview.net/pdf?id=m3o019KH6Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149939>)

Behavior policies are often formulated as continuous generative models, whose iterative denoising processes are expressive but difficult to interpret and prone to producing implausible actions\. We propose the Large Discrete Policy \(LDiP\), a fully discrete behavior modeling framework that selects actions from a large vocabulary of physically plausible candidates\. Rather than perturbing actions, LDiP improves expressivity through stochastic iterative scoring: it progressively re\-scores and prunes candidates with score\-space stochasticity, enabling fine\-grained ranking and exploration among plausible actions while preserving an explicit decision process\. Across end\-to\-end planning, closed\-loop driving, robotic manipulation, and vision\-language\-action settings, LDiP consistently outperforms strong discrete and continuous baselines in autonomous driving, and exceeds or matches continuous generative policies in robotic manipulation\. These results show that discrete policies, when equipped with effective scoring mechanisms, offer an expressive, plausible, and interpretable alternative for behavior modeling\.

## Unbiased First\-Order Randomized Smoothing for Differentiable Simulation

**Authors:** Mathis SCHEFFLER; Wilson Jallet; Cordelia Schmid; Justin Carpentier

**ID:** 150375 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iXltG66DNN>) | [PDF](<https://openreview.net/pdf?id=iXltG66DNN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150375>)

Computing informative gradients through nonsmooth physical models—such as those involving hard contact or bouncing—is a cornerstone challenge in robotics and machine learning\.  Randomized smoothing offers a principled way to obtain well\-behaved surrogate gradients, yet standard first\-order estimators of these smoothed gradients are biased whenever the underlying function is discontinuous\.  In this work, we show that this bias arises from neglected discontinuity contributions and derive a corrected first\-order formula that eliminates it\.  When the discontinuity structure is known, we exploit it to build discontinuity\-aware gradient estimators, which we instantiate for differentiable collision detection on 3D meshes\.  When it is unknown, we propose a complementary estimator that leverages classical gradients to reduce variance\.  We validate this estimator on nonsmooth trajectory optimization instances, demonstrating variance reductions of several orders of magnitude over zeroth\-order baselines while remaining unbiased under discontinuities where standard first\-order estimators fail\.

## ActQuant: Sub\-4\-bit Action\-Guided Quantization for Vision\-Language\-Action Models

**Authors:** Arash Akbari; Arman Akbari; Masih Eskandar; Qitao Tan; Yixiao Chen; Jingwu Luo; Bertha Pangaribuan; Liyun Zhang; Jennifer Dy; Geng Yuan; Xue Lin; Gaowen Liu; Stratis Ioannidis; Yanzhi Wang

**ID:** 155159 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7qAjVpGyah>) | [PDF](<https://openreview.net/pdf?id=7qAjVpGyah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155159>)

Vision\-Language\-Action \(VLA\) models exhibit remarkable action generation for embodied intelligence, but their heavy compute and memory demands strain deployment on edge robotic platforms\. Aggressive weight quantization \(e\.g\., sub\-4\-bit\) is the natural lever, yet existing post\-training quantization \(PTQ\) methods suffer severe performance degradation in this regime\. To address this, we introduce \\textbf\{ActQuant\}, an action\-guided mixed\-precision PTQ framework that operates in two stages: \(1\) an inter\-tensor allocator that assigns each weight matrix a single bit\-width based on how much it contributes to predicting the agent's actions; \(2\) an intra\-tensor scale optimizer tunes per\-block quantization scales using action\-aware curvature, so that dynamic range is concentrated on the weights most influential for control\. We evaluate ActQuant both in simulation and on a real\-world 6\-DoF UR3 arm\. On the LIBERO benchmark, ActQuant achieves state\-of\-the\-art success rates across the sub\-4\-bit regime, retaining 94\.95\\% on OpenVLA\-OFT and 94\.8\\% on $\\pi\_\{0\.5\}$ at 3\.0 bits\-per\-weight \(vs\. 96\.9\\% and 97\.0\\% for the half\-precision baselines, respectively\), while reducing backbone memory by up to $5\.3\\times$; on the physical robot, ActQuant successfully maintains the baseline's success rate\. To our knowledge, ActQuant is the first PTQ approach that can quantize VLA models below four bits while retaining practical task success with very limited calibration data\.

## Latent Barrier Steering: Hierarchical Safety for Generative Planning

**Authors:** Renhao Zhang; Mingzhe Li; Bruno Silva

**ID:** 155636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=46Wey0MAPk>) | [PDF](<https://openreview.net/pdf?id=46Wey0MAPk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155636>)

We introduce \*Latent Barrier Steering\* \(LBS\), a hierarchical semantic\-to\-path framework for safe flow\-matching\-based generative planning\. Existing control\-barrier\-function \(CBF\) safety filters for diffusion and flow\-matching planners act locally on generated samples, either during sampling or after prediction\. Such repair is effective for small violations, but can struggle when a new constraint blocks the whole selected behavior mode rather than merely perturbing it locally\. LBS decouples behavior selection from path certification through two coordinated interventions: it first steers the generator's behavior latent toward rollouts with larger safety margin, then decodes the steered latent and applies a path\-space CBF quadratic program \(QP\) only for residual violations\. We show that latent steering increases the margin available to the path\-space corrector, yielding finite\-time recovery guarantees and reduced correction burden\. Experiments across navigation and robot end\-effector planning tasks show that LBS preserves safety while improving goal reaching and reducing correction burden compared with path\-level safety filters\.

## Benchmarking Fine\-Grained Spatio\-Temporal Awareness in Embodied Brain Models

**Authors:** Minghao Zhu; Zhikai Wang; Ronghao Dang; Bohan Hou; Jiangpin Liu; Kehan Li; Jiayan Guo; Sicong Leng; Yunxuan Mao; Yuqian Yuan; Xiao Lin; Xin Li; Deli Zhao

**ID:** 139463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OBDBEkTysD>) | [PDF](<https://openreview.net/pdf?id=OBDBEkTysD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139463>)

Large Vision\-Language Models \(LVLMs\) have shown remarkable potential for embodied AI, yet a critical bottleneck persists: the lack of fine\-grained spatio\-temporal alignment between high\-level textual reasoning and low\-level visual grounding\. Existing benchmarks fail to recognize the critical importance of such fine\-grained alignment for embodied tasks\. To address this gap, we introduce ECLBench, a comprehensive benchmark designed to systematically assess spatio\-temporal embodied understanding across two primary capabilities: Embodied Cognition \(Object Cognition and Spatial Cognition\) and Embodied Localization \(Grounding and Pointing\)\. Together, these four pillars encompass 21 specialized sub\-capabilities, supported by 3,616 egocentric video clips \(577,998 frames\) and 12,000 meticulously curated open\-ended questions\.  Extensive evaluations on ECLBench reveal that general LVLMs excel in semantic understanding but struggle with precise spatio\-temporal grounding, while existing embodied agents often sacrifice generalization for specialization\. Guided by the benchmark's findings, we develop ECLBrain, a baseline model that discretizes continuous spatial coordinates into integer tokens\. This simple yet effective design bridges textual semantics and spatio\-temporal vision, demonstrating a promising path toward unified embodied reasoning\. ECLBench and ECLBrain together establish a rigorous, multi\-dimensional standard for diagnosing current limitations and guiding future research toward spatially\-aware and temporally\-consistent embodied intelligence\.

## AffordSim: A Scalable Data Generator and Benchmark for Affordance\-Aware Robotic Manipulation

**Authors:** Mingyang Li; Haofan Xu; Haowen Sun; Xinzhe Chen; Sihua Ren; Liqi Huang; Chenyang Miao; Xinyang Sui; jiawei Ye; Qiongjie Cui; Zeyang Liu; Xingyu Chen; Xuguang Lan

**ID:** 139222 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e25kaYnRu0>) | [PDF](<https://openreview.net/pdf?id=e25kaYnRu0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139222>)

_Abstract unavailable from the accessible public sources._

## Q\-Residual Physics: Hamiltonian\-Structured Quantum Residual Learning for Embodied Dynamics

**Authors:** Fanqi Kong; Ke Shi; Yuchen Wang; Zhipeng Liu; Xiaofei Yue; Zhaoxuan Li; Tingting Li; Ziming Zhao

**ID:** 150528 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hS2tnUR2oM>) | [PDF](<https://openreview.net/pdf?id=hS2tnUR2oM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150528>)

Embodied agents in contact\-rich environments must model dynamics affectedby frictional uncertainty, contact discontinuities, compliance, actuator imperfec\-tions, perception noise, and mass or inertia mismatch\. Existing residual dynamicslearning methods correct nominal physics predictions with unconstrained neuralresiduals, which often generalize poorly under unseen contact regimes, changingphysical parameters, long\-horizon rollouts, and few\-shot adaptation\. We proposeQ\-Residual Physics, a Hamiltonian\-structured quantum residual learning frame\-work for embodied dynamics\. The method represents residual errors through astructured quantum residual layer whose qubits correspond to physically inter\-pretable modes, including contact impulse, friction, slip, compliance, damping,perception error, and mass or inertia mismatch\. A physical interaction graphinduces a Hamiltonian residual structure, implemented with a Trotterized param\-eterized quantum circuit whose components capture mode activation, physicalcoupling, uncertain switching, dynamic mode exchange, and higher\-order interac\-tions\. Quantum measurements are decoded to correct nominal physics predictions\.Across embodied dynamics and manipulation benchmarks, including OMNIPUSH,MANISKILL2, ROBOMIMIC, D4RL, and PHYSION, Q\-Residual Physics achievesstronger generalization than physics\-only, neural residual, graph residual, andquantum\-circuit baselines\. It reduces long\-horizon rollout error by 23\.8%, im\-proves contact transition prediction by 16\.4%, lowers out\-of\-distribution parametererror by 21\.7%, and improves few\-shot adaptation by 28\.5%\. The code is availableat https://anonymous\.4open\.science/r/QRP\-0205

## Dispatchable Coordination Envelopes for Embodied Collaboration Under Sequential Uncertainty

**Authors:** Yuchen Wang; Fanqi Kong; Ke Shi; Zhipeng Liu; Xiaofei Yue; Zhaoxuan Li; Tingting Li; Ziming Zhao

**ID:** 151294 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bVJu7TwSXf>) | [PDF](<https://openreview.net/pdf?id=bVJu7TwSXf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151294>)

Embodied AI systems can pass planning and still fail in execution: a delay, resource conflict, synchronization change, or candidate invalidation can turn a valid point schedule into broken commitments\. We introduce FLECAR, which gives the executor a dispatchable coordination envelope instead of fixed start times\. Offline, Flexible Envelope Synthesis builds executable windows, coupling constraints, and a dispatch graph; online, Controllability\-Aware Repair updates that envelope after events and repairs only the affected region when dispatchability fails\. On generated coordination instances with the same event streams and budgets, FLECAR improves post\-event feasibility from 0\.3880 to 0\.8400, terminal success from 0\.5800 to 0\.8400, and normalized repair burden from 0\.5357 to 0\.2964 relative to legacy point\-schedule repair\. A point baseline with CAR\-like repair closes part of the gap, but envelopes still retain higher post\-event feasibility and lower repair burden, while pooled one\-step survivability remains near parity\. The result points to a simple execution principle: after disturbances, live windows, couplings, and alternatives serve the executor better than a point schedule rebuilt after the fact\.

## FineVLA: Fine\-Grained Instruction Alignment for Steerable Vision\-Language\-Action Policies

**Authors:** Xintong Hu; Xuhong Huang; JINYU ZHANG; Yutong Yao; Yuchong Sun; Qiuyue Wang; Mingsheng Li; Yitao Liu; Yixuan Chen; Yingming Zheng; Shuai Bai; Tao Yu

**ID:** 154540 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cq60zqtx7v>) | [PDF](<https://openreview.net/pdf?id=Cq60zqtx7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154540>)

Vision\-Language\-Action \(VLA\) models have advanced rapidly by leveraging large\-scale vision\-language priors and robot trajectory data, yet they remain weak at following fine\-grained human instructions\. We argue that this limitation stems from a fundamental mismatch between language and action supervision in existing robot datasets\. Most open\-source datasets annotate each trajectory with a goal\-oriented task description, while leaving the underlying execution process largely unspecified, including motion trajectories, contact and approach patterns, object state transitions, recovery behavior, and final configurations\. Since different choices along these dimensions can lead to substantially different action sequences, coarse task descriptions induce a many\-to\-one mapping from action trajectories to language, preventing precise action\-instruction alignment\. To address this problem, we propose FineVLA, a framework for constructing and leveraging fine\-grained embodied action instructions for VLA learning\. FineVLA includes FineVLA\-Tool, a scalable pipeline for data cleaning, temporal alignment, and fine\-grained annotation; RoboFine\-VLM, a vision\-language model for fine\-grained robotic action understanding and annotation; RoboFine\-Bench, a benchmark for evaluating fine\-grained robotic action understanding via VQA and captioning; and FineVLA\-Policy, a VLA policy trained with fine\-grained instructions on open\-source ALOHA robot data\. Across benchmark evaluation and policy learning experiments, FineVLA demonstrates that high\-density, action\-aligned language supervision leads to more controllable and instruction\-sensitive robot policies\. Our results highlight fine\-grained instruction alignment as a critical step toward VLA systems that not only complete tasks, but complete them in the way humans specify\.

## CondenseVLA: Learnable History Condensation for Efficient Multi\-Frame VLA

**Authors:** Feiyang Hong; Yujie Wei; Bo Zhao; Xiu Su; Hongxun Yao; Shuo Yang

**ID:** 149245 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rpyJNSOs0e>) | [PDF](<https://openreview.net/pdf?id=rpyJNSOs0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149245>)

Robot manipulation often depends on short\-term cues—such as brief contacts, temporary occlusions, and intermediate object states—that are ambiguous in a single frame and can only be resolved by integrating observations over time\. However, injecting historical information solely by enlarging the history window is computationally costly and frequently yields limited gains due to substantial redundancy and task\-agnostic, inflexible sampling of observations\. We propose CondenseVLA, a multi\-frame VLA policy with a lightweight learnable history condensation module for using short\-term visual context in action decoding\. Given a sequence of cached per\-frame features from the VLM backbone, CondenseVLA distills observation history into a fixed set of slot tokens using learnable queries and multi\-head cross\-attention\. Simple auxiliary regularization encourages diverse attention patterns by penalizing overlap among slot attention maps and reduces slot 12 redundancy by decorrelating slot embeddings, stabilizing learned condensation without imposing strong time priors\. By expanding the history window and distilling it into a compact token set, CondenseVLA improves over the baseline on the evaluated Simpler\-WidowX tasks, increasing success rate from 58\.4 to 70\.8 \(\+12\.4\), achieves 97\.2% on LIBERO, and reaches 52\.0% on real\-world tasks\. Beyond the gains, our results show that long history windows contain substantial redundancy, so naively providing more frames yields limited benefits, whereas learned condensation into fixed slot tokens provides an effective bounded\-token way to leverage temporal context\.

## Nautilus: From One Prompt to Plug\-and\-Play Robot Learning

**Authors:** Yufeng Jin; Jianfei Guo; Xiaogang Jia; Yu Deng; Steven Li; Han Liu; Weiran Liao; Vignesh Prasad; Mathias Franzius; Gerhard Neumann; Georgia Chalvatzaki

**ID:** 155793 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2qwYhRJ8bf>) | [PDF](<https://openreview.net/pdf?id=2qwYhRJ8bf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155793>)

_Abstract unavailable from the accessible public sources._

## Chain\-of\-Correction: Progress\-Aware Policy Steering via Anchor\-Grounded Predictive Reasoning

**Authors:** Xuening Zhang; Xiang Deng; Jiayi Lin; Qi Lv; Xingbo Liu; Weili Guan

**ID:** 154354 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EDXA8qb52B>) | [PDF](<https://openreview.net/pdf?id=EDXA8qb52B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154354>)

_Abstract unavailable from the accessible public sources._

## When and What to Prune?  Stage\-Aware Visual Token Pruning for Efficient VLA

**Authors:** TIANJUN SHI; Haotian Xiong; Ziyu Gong; Qi Lu; Li Li

**ID:** 151346 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bDNYAVS5VS>) | [PDF](<https://openreview.net/pdf?id=bDNYAVS5VS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151346>)

_Abstract unavailable from the accessible public sources._

## Normalizing Flows are Capable Trajectory Planners

**Authors:** Zhaohui Wang; Bo Xu; Yingzhi Tang; He Liu; Chen Bai

**ID:** 151040 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQpk6rwXp8>) | [PDF](<https://openreview.net/pdf?id=dQpk6rwXp8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151040>)

_Abstract unavailable from the accessible public sources._

## A Differentiable Interior\-Point Method in Single Precision

**Authors:** Jon Arrizabalaga; Kevin Tracy; Zac Manchester

**ID:** 151819 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xjh9eUGXeN>) | [PDF](<https://openreview.net/pdf?id=Xjh9eUGXeN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151819>)

_Abstract unavailable from the accessible public sources._

## Right Results, Wrong Reasons: Auditing Behavioral Reliance in Motion Forecasting

**Authors:** Geonyeong Park; Byounghun Park; Nayoung Kim; Kyungmin Kim; Soonmin Hwang

**ID:** 139732 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7axaNwvSMD>) | [PDF](<https://openreview.net/pdf?id=7axaNwvSMD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139732>)

_Abstract unavailable from the accessible public sources._

## Nautilus: From One Prompt to Plug\-and\-Play Robot Learning

**Authors:** Yufeng Jin; Jianfei Guo; Xiaogang Jia; Yu Deng; Steven Li; Han Liu; Weiran Liao; Vignesh Prasad; Mathias Franzius; Gerhard Neumann; Georgia Chalvatzaki

**ID:** 155793\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155793

[Paper](<https://openreview.net/forum?id=2qwYhRJ8bf>) | [PDF](<https://openreview.net/pdf?id=2qwYhRJ8bf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155793>)

_Abstract unavailable from the accessible public sources._

## Chain\-of\-Correction: Progress\-Aware Policy Steering via Anchor\-Grounded Predictive Reasoning

**Authors:** Xuening Zhang; Xiang Deng; Jiayi Lin; Qi Lv; Xingbo Liu; Weili Guan

**ID:** 154354\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154354

[Paper](<https://openreview.net/forum?id=EDXA8qb52B>) | [PDF](<https://openreview.net/pdf?id=EDXA8qb52B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154354>)

_Abstract unavailable from the accessible public sources._

## When and What to Prune?  Stage\-Aware Visual Token Pruning for Efficient VLA

**Authors:** TIANJUN SHI; Haotian Xiong; Ziyu Gong; Qi Lu; Li Li

**ID:** 151346\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151346

[Paper](<https://openreview.net/forum?id=bDNYAVS5VS>) | [PDF](<https://openreview.net/pdf?id=bDNYAVS5VS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151346>)

_Abstract unavailable from the accessible public sources._

## Sport Is The Next Grand Challenge For Artificial Intelligence: Toward A Science Of Human Physical Skill

**Authors:** Katia Bourahmoune; Karlos Ishac

**ID:** 140126 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Cbx3dqagk>) | [PDF](<https://openreview.net/pdf?id=0Cbx3dqagk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140126>)

We argue that sport represents the next grand challenge for Artificial Intelligence, a domain rich enough to expose the limits of current approaches and structured enough to drive rigorous scientific progress in understanding and modelling human physical skill\. Despite rapid advances in language, vision, and robotic manipulation, the physical intelligence required to learn and adapt complex motor skills remains poorly understood and largely unaddressed\. We identify two intertwined gaps: the absence of models for human physical skill, and the absence of the scientific agenda needed to build them\. We propose concrete directions for how the community can begin to close both\.

## Efficient Test\-Time Adaptation For Robot Policies

**Authors:** Motasem Alfarra; Pietro Mazzaglia; Markus Peschl; Daniel Dijkman; Christos Louizos

**ID:** 155174 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7k7qq6Pj9e>) | [PDF](<https://openreview.net/pdf?id=7k7qq6Pj9e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155174>)

Reinforcement\-learning policies for robot locomotion can fail at deployment when operating conditions shift \(e\.g\., rough or slippery terrain, payload changes, sensing degradation\), and retraining or manual recalibration is often infeasible under on\-device latency and memory constraints\. We study test\-time adaptation \(TTA\) for robotic control: adapting a pretrained policy online and self\-supervisedly during execution, without access to rewards\. Our starting point is a lightweight baseline that updates only the actor using a frozen pretrained critic as a deployment\-time performance surrogate\. Building on this, we introduce TEMPO, a test\-time entropy\-regularized, memory\-guided policy optimization method that stabilizes critic\-driven updates under severe shift\. TEMPO combines \(i\) an entropy\-promoting regularizer on the critic’s predictive distribution to mitigate overconfident extrapolation, and \(ii\) a score\-based memory, inspired by prioritized replay, that prioritizes low\-value \(“hard”\) observations and applies importance sampling to focus limited computation on the most informative deployment conditions\. Across Go1, Go2, and G1 in MuJoCo Playground under four representative shifts and multiple architectures, TEMPO yields consistent gains, reaching up to 80\\% improvement in a single\-device setting\. We further validate on a physical Unitree Go2 with an added calf payload, where fully on\-device adaptation improves performance over the non\-adapted baseline across real\-world episodes\.

## Realtime\-VLA FLASH: Speculative Inference Framework for Diffusion\-based VLAs

**Authors:** Jiahui Niu; Kefan Gu; Yucheng Zhao; shengwen Liang; Tiancai Wang; Xing Hu; ying wang; Huawei Li

**ID:** 152931 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PI2H51gjoE>) | [PDF](<https://openreview.net/pdf?id=PI2H51gjoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152931>)

Diffusion\-based vision\-language\-action models \(dVLAs\) are promising for embodied intelligence but are fundamentally limited in real\-time deployment by the high latency of full inference\. We propose Realtime\-VLA FLASH, a speculative inference framework that eliminates most full inference calls during replanning by introducing a lightweight draft model with parallel verification via the main model's Action Expert and a phase\-aware fallback mechanism that reverts to the full inference pipeline when needed\. This design enables low\-latency, high\-frequency replanning without sacrificing reliability\. Experiments show that on LIBERO, FLASH largely preserves task performance by replacing many 58\.0\\,ms full\-inference rounds with speculative rounds as fast as 7\.8\\,ms, lowering task\-level average inference latency to 19\.1\\,ms \(3\.04$\\times$ speedup\)\. We additionally demonstrate effectiveness on real\-world conveyor\-belt sorting, highlighting its practical impact for latency\-critical embodied tasks\.

## Realtime\-VLA FLASH: Speculative Inference Framework for Diffusion\-based VLAs

**Authors:** Jiahui Niu; Kefan Gu; Yucheng Zhao; shengwen Liang; Tiancai Wang; Xing Hu; ying wang; Huawei Li

**ID:** 152931\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152931

[Paper](<https://openreview.net/forum?id=PI2H51gjoE>) | [PDF](<https://openreview.net/pdf?id=PI2H51gjoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152931>)

Diffusion\-based vision\-language\-action models \(dVLAs\) are promising for embodied intelligence but are fundamentally limited in real\-time deployment by the high latency of full inference\. We propose Realtime\-VLA FLASH, a speculative inference framework that eliminates most full inference calls during replanning by introducing a lightweight draft model with parallel verification via the main model's Action Expert and a phase\-aware fallback mechanism that reverts to the full inference pipeline when needed\. This design enables low\-latency, high\-frequency replanning without sacrificing reliability\. Experiments show that on LIBERO, FLASH largely preserves task performance by replacing many 58\.0\\,ms full\-inference rounds with speculative rounds as fast as 7\.8\\,ms, lowering task\-level average inference latency to 19\.1\\,ms \(3\.04$\\times$ speedup\)\. We additionally demonstrate effectiveness on real\-world conveyor\-belt sorting, highlighting its practical impact for latency\-critical embodied tasks\.

## FlowHOI: Flow\-based Semantics\-Grounded Generation of Hand\-Object Interactions for Dexterous Robot Manipulation

**Authors:** Huajian Zeng; Lingyun Chen; Jiaqi Yang; Yuantai Zhang; Fan Shi; Peidong Liu; Xingxing Zuo

**ID:** 155765\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155765

[Paper](<https://openreview.net/forum?id=35aGAAx7tn>) | [PDF](<https://openreview.net/pdf?id=35aGAAx7tn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155765>)

Recent vision\-language\-action \(VLA\) models can generate plausible end\-effector motions, yet they often fail in long\-horizon, contact\-rich tasks because the underlying hand\-object interaction \(HOI\) structure is not explicitly represented\. An embodiment\-agnostic interaction representation that captures this structure would make manipulation behaviors easier to validate and transfer across robots\. We propose FlowHOI, a two\-stage flow\-matching framework that generates semantically grounded, temporally coherent HOI sequences, comprising hand poses, object poses, and hand\-object contact states, conditioned on an egocentric observation, a language instruction, and a 3D Gaussian splatting \(3DGS\) scene reconstruction\. We decouple geometry\-centric grasping from semantics\-centric manipulation, conditioning the latter on compact 3D scene tokens and employing a motion\-text alignment loss to semantically ground the generated interactions in both the physical scene layout and the language instruction\. To address the scarcity of high\-fidelity HOI supervision, we introduce a reconstruction pipeline that recovers aligned hand\-object trajectories and meshes from large\-scale egocentric videos, yielding an HOI prior for robust generation\.  Across the GRAB and HOT3D benchmarks, FlowHOI achieves the highest action recognition accuracy and a 1\.7$\\times$ higher physics\-simulation success rate on GRAB than the strongest diffusion\-based baseline, while delivering a 40$\\times$ inference speedup\. We further demonstrate real\-robot execution across four contact\-rich, dexterous manipulation tasks, highlighting the effectiveness of retargeting our generated HOI representations to robotic dexterous hands, achieving significantly higher success rates than prior methods due to improved physical plausibility and semantic alignment\.

## SelfCritic\-VLA: Language as Intrinsic Critic for Vision Language Action Models in Autonomous Driving

**Authors:** Fang Li; Zheng Liu; Yuechen Luo; Hanbing Li; Zhi\-Xin Yang

**ID:** 152280\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152280

[Paper](<https://openreview.net/forum?id=UGQKMlMM5j>) | [PDF](<https://openreview.net/pdf?id=UGQKMlMM5j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152280>)

Vision\-Language\-Action \(VLA\) models offer a promising paradigm for end\-to\-end autonomous driving by connecting visual scene understanding, linguistic reasoning, and low\-level trajectory generation\. However, existing driving VLAs typically use language only as static commands or supervised rationales, while treating trajectory prediction as an open\-loop generation problem\. As a result, they lack an explicit mechanism for understanding the consequences of their own actions, which limits robustness under closed\-loop distribution shift and makes reinforcement learning inefficient in long\-tail scenarios\.   We propose SelfCritic\-VLA, a self\-evaluative VLA framework that unifies trajectory generation, language\-grounded action critique, and trajectory refinement\. Given a driving scene, the model first generates an initial trajectory, then produces a language\-grounded critique that describes the potential safety, progress, and rule\-compliance consequences of executing that trajectory, and finally refines the trajectory conditioned on this critique\. To train this capability, we construct a large\-scale counterfactual trajectory dataset with multi\-source candidate trajectories and semantic critiques, and perform hybrid supervised fine\-tuning for planning, action evaluation, and refinement\. Building on this initialization, we introduce a self\-critic reinforcement learning procedure based on GRPO, where critique\-conditioned refinements are filtered by grounded driving rewards and distilled back into the base policy\.   Experiments on NAVSIM and Bench2Drive show that SelfCritic\-VLA consistently improves both open\-loop and closed\-loop driving performance over strong baselines, demonstrating the effectiveness of language\-guided self\-refinement for driving policy optimization\.

## RoboWits: Unexpected Challenges for Robotic Creative Problem Solving

**Authors:** Chunru Lin; Hongxin Zhang; Fenghao Yu; Zhehuan Chen; Tom Griffiths; Yejin Choi; David Held; Chuang Gan

**ID:** 139850\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139850

[Paper](<https://openreview.net/forum?id=0dyy3qodV0>) | [PDF](<https://openreview.net/pdf?id=0dyy3qodV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139850>)

The ability to reason, adapt, and creatively solve problems under unexpected challenges is essential for robots operating in real\-world environments\. However, current robotic benchmarks primarily emphasize skill\-level execution and provide limited insight into such cognitive reasoning capabilities\. We introduce RoboWits, a bi\-manual robotic benchmark designed to systematically evaluate cognitive reasoning, creative tool use, and robustness to unexpected conditions\. To enable scalable construction of high\-quality reasoning\-centric unexpected scenarios, we propose an automated task generation pipeline formulated as a multi\-agent cooperative framework, comprising agents for seed task generation and verification, metric generation, scene generation, and task mutation\. Using the pipeline, we curated 30 diverse seed tasks and 208 tasks with mutations and graded difficulty across geometry, material, and assembly\-based reasoning\. We benchmark popular robot policies, pre\-trained VLAs, and oracle\-state planners\. Our results reveal a significant performance gap: while pre\-trained VLAs exhibit preliminary success on seed tasks after single\-task fine\-tuning, they struggle to perform on mutated tasks, implying their brittleness in manipulation tasks requiring reasoning, strategy adaptation, and robustness to deceptive or constrained environments\.

## LessMimic: Versatile Humanoid\-Object Interaction with Unified Distance Field Representations

**Authors:** Yutang Lin; Jieming Cui; Yixuan Li; Wei Liang; Baoxiong Jia; Yixin Zhu; Siyuan Huang

**ID:** 149455\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149455

[Paper](<https://openreview.net/forum?id=pxh6UoIlqx>) | [PDF](<https://openreview.net/pdf?id=pxh6UoIlqx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149455>)

Humanoid robots capable of versatile whole\-body interaction with everyday objects represent a central goal of embodied intelligence\. Existing approaches often rely on motion\-reference inputs or task\-specific rewards, coupling policies to particular motion scripts, object geometries, and contact timings\. This limits geometric generalization and flexible interaction control, where simple commands specify motion intent while object geometry determines how contact should be executed\. We introduce LessMimic, a framework for versatile motion\-free\-at\-inference humanoid–object interaction\. At inference, a single whole\-body policy is steered by root commands and an interaction\-type flag instead of motion\-reference inputs, and is conditioned on a compact interaction representation built from short histories of distance\-field\-derived surface distances and local surface directions\. This geometry\-conditioned interface enables command\-steered control while adapting contact behavior to local object geometry\. Through visual distillation, LessMimic further enables egocentric\-depth\-based deployment for MoCap\-free sensing\. Across object scales from 0\.4× to 1\.6×, LessMimic maintains robust performance over four interaction tasks, including PickUp, SitStand, Push, and Carry, where motion\-conditioned baselines degrade sharply away from the training scale\. Beyond single\-task evaluation, LessMimic further supports sequential composition of heterogeneous interaction skills, attaining 62\.1% success on five\-task sequences and retaining 23\.5% success at 15 task instances\. By grounding interaction control in local geometry rather than motion references, LessMimic provides a path toward geometry\-generalizable, command\-steerable humanoid–object control with heterogeneous skill composition\.

## NoTVLA: Semantics\-Preserving Robot Adaptation via Narrative Action Interfaces

**Authors:** Zheng Huang; Mingyu Liu; Xiaoyi Lin; Muzhi Zhu; Ye Lin; Canyu Zhao; Zongze Du; Xiaoman Li; Hao Zhong; Yiduo Jia; Hao Chen; Chunhua Shen

**ID:** 151525\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151525

[Paper](<https://openreview.net/forum?id=a0zV7TNKuT>) | [PDF](<https://openreview.net/pdf?id=a0zV7TNKuT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151525>)

Robot fine\-tuning can improve manipulation success while degrading the semantic structure inherited from large vision\-language pretraining\. This trade\-off limits the reuse of vision\-language\-action \(VLA\) policies in settings that require compositional instructions, camera changes, and coordination with higher\-level agents\. We present \\textbf\{NoTVLA\}, a semantics\-preserving robot adaptation framework that replaces dense low\-level action supervision with a sparse narrative action interface\. NoTVLA converts demonstrations into sparse, semantically meaningful waypoints, grounds each decision with a task\-relevant visual anchor and depth value, and reconstructs executable motion through a deterministic detokenizer\. The resulting interface keeps the autoregressive vision\-language backbone close to its pretrained prediction format while delegating high\-frequency control to a transparent motion\-rendering stage\. We evaluate this design through matched and backbone\-family comparisons, semantic retention probes, semantic out\-of\-distribution manipulation tasks, camera and depth perturbations, and deployment\-oriented efficiency analysis\. The results suggest that robot adaptation should be judged not only by task success, but also by how much task\-relevant semantic competence is preserved during fine\-tuning\.

## SatNav: A Scalable Benchmark for Long\-Horizon UAV Vision\-Language Navigation from Satellite Imagery

**Authors:** Jiajun Jiang; Chunliang Hua; Zichun Chen; Yanxing Wu; Zeyuan YANG; Jie Song; Xiao Hu

**ID:** 139165\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139165

[Paper](<https://openreview.net/forum?id=hOEniyN6hl>) | [PDF](<https://openreview.net/pdf?id=hOEniyN6hl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139165>)

Urban uncrewed aerial vehicle \(UAV\) vision\-language navigation \(VLN\) requires agents to follow instructions across extended urban spaces, inherently demanding long\-term memory and geospatial grounding\. However, scaling existing benchmarks remains difficult because of their reliance on costly reconstructed 3D assets, limiting geographic diversity and episode scale\. To address this, we introduce SatNav, a scalable, long\-horizon UAV VLN benchmark built from high\-resolution satellite imagery\. SatNav targets city\-level navigation missions and uses satellite crops as approximations of UAV nadir views for visual observations\. Through an automated cue\-to\-episode pipeline, SatNav constructs 118K episodes from 59 scenes across 18 cities, with an average trajectory length of 379 m\. To stress\-test long\-horizon memory and geospatial reasoning, SatNav defines three task families: Boundary, Landmark, and Route, targeting loop progress tracking, landmark\-based spatial grounding, and route following with counting cues\. Benchmarking classical and recent large vision language model \(LVLM\) based VLN agents on SatNav shows that city\-scale navigation remains challenging\. We further introduce SwiftVLN, a modular framework with switchable memory components, and conduct systematic memory\-design ablations\. Finally, satellite\-to\-UAV transfer experiments show that satellite\-trained navigation models can operate on real\-flight UAV observations, showing the practical relevance of SatNav\.

## Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models

**Authors:** Nilaksh; Saurav Jha; Artem Zholus; Sarath Chandar

**ID:** 139014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qHPOtzwRVy>) | [PDF](<https://openreview.net/pdf?id=qHPOtzwRVy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139014>)

World model\-based policy evaluation is a practical proxy for testing real\-world robot control by rolling out candidate actions in action\-conditioned video diffusion models\. As these models increasingly adopt latent diffusion modeling \(LDM\), choosing the \*right latent space\* becomes critical\. While the status quo uses autoencoding latent spaces like VAEs that are primarily trained for pixel \*reconstruction\*, recent work suggests benefits from pretrained  encoders with representation\-aligned \*semantic\* latent spaces\. We systematically evaluate these latent spaces for action\-conditioned LDM by comparing six reconstruction and semantic encoders to train world model variants under a fixed protocol on BridgeV2 dataset, and show effective world model training in high\-dimensional representation spaces with and without dimension compression\. We then propose three axes to assess robotic world model performance: visual fidelity, planning and downstream policy performance, and latent representation quality\. Our results show visual fidelity alone is insufficient for world model selection\. While reconstruction encoders like VAE and Cosmos achieve strong pixel\-level scores,  semantic encoders such as V\-JEPA 2\.1 \(strongest overall on policy\), Web\-DINO, and SigLIP 2 generally excel across the other two axes at all model scales\. Our study advocates semantic latent space as stronger foundation for policy\-relevant robotics diffusion world models\.

## HaNDF: Object\-Conditioned Geometric Neural Hand Distance Fields

**Authors:** Zuhao Liu; Melih Darcan; Zhengdi Yu; Riza Alp Guler; Tolga Birdal

**ID:** 149700 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o6Ags8RThf>) | [PDF](<https://openreview.net/pdf?id=o6Ags8RThf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149700>)

We propose, HaNDF, object\-conditional neural distance fields as data\-driven priors for modeling the plausible hand–object configurations, in the product manifold of hand articulations\. While recent unconditional generative priors showed success in modeling human pose, hands are versatile articulated bodies often found in interaction with other objects\. This makes it crucial to develop a generative prior which can model the plausible hand poses conditioned on the object under interaction\. To this end, our HaNDF proposes a geometry\-aware, object\-conditioned neural distance field, representing the plausible articulations in the zero\-level set of a conditional field\. We leverage tools from  Riemannian geometry to \(i\) represent plausible hands in the zero level\-set of an object\-induced neural field, and \(ii\) project a given pose onto the this field\. Using HaNDF, we can also optimize for a plausible condition, determining the object under interaction\. Our extensive evaluations demonstrate that our HaNDF provides a flexible and powerful prior for hand–object interaction, suitable for applications such as pose refinement, reconstruction under occlusion, and physically plausible manipulation synthesis\.

## DSSP: Diffusion State Space Policy  with Hierarchical Full\-History Conditioning

**Authors:** Zhiyuan Guan; Jianshu Hu; Han Fang; Yunpeng Jiang; Yize Huang; Shujia Li; Xiao Li; Yutong Ban

**ID:** 151450 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aaSIMuY19G>) | [PDF](<https://openreview.net/pdf?id=aaSIMuY19G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151450>)

Diffusion\-based imitation learning has shown strong promise for robot manipulation\. However, most existing policies condition only on the current observation or a short window of recent observations, limiting their ability to resolve history\-dependent ambiguities in long\-horizon tasks\. To address this, we introduce DSSP, a history\-conditioned Diffusion State Space Policy that enables efficient, full\-history conditioning for robot manipulation\. Leveraging the continuous sequence modeling properties of State Space Models \(SSMs\), our history encoder effectively compresses the entire observation stream into a compact context representation\. To ensure this context preserves critical information regarding future state evolution, the encoder is optimized with a dynamics\-aware auxiliary training objective\. This high\-level context representation is then seamlessly fused with recent state observations to form a hierarchical conditioning mechanism for action generation\. Furthermore, to maintain architectural consistency and minimize GPU memory overhead, we also instantiate the diffusion backbone itself using an SSM\. Extensive experiments across simulation benchmarks and real\-world manipulation tasks show that DSSP achieves state\-of\-the\-art performance with a significantly smaller model size, demonstrating superior efficiency of the hierarchical conditioning in capturing crucial information as the history length increases\.

## Think Densely, Act Sparsely: Latent Expert Cognitive Chains for Vision\-Language\-Action Autonomous Driving

**Authors:** Jie Wang; Guang Li; Zhijian Huang; Jinlong Li; Chenxu Dang; Hangjun Ye; Yahong Han; Long Chen

**ID:** 149058 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tBqhs731Ow>) | [PDF](<https://openreview.net/pdf?id=tBqhs731Ow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149058>)

_Abstract unavailable from the accessible public sources._

## PACE: Progress Actively\-internalized Conditioning Execution for Long\-horizon Manipulation

**Authors:** Fei Ni; Zhuo Chen; Xianze Yao; Zerui Chen; Changrui Chen; Yifu Yuan; Shan Luo; Jianye Hao; Jiankang Deng

**ID:** 149692 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o9KoW4HKv5>) | [PDF](<https://openreview.net/pdf?id=o9KoW4HKv5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149692>)

Vision\-language\-action \(VLA\) models have made rapid progress in robotic manipulation, yet the policy acts with no sense of the \*pace\* at which its own execution unfolds—whether it is advancing, stalling, or has quietly gone wrong—especially for long\-horizon tasks\. Recent methods supply progress through external reward models or as an auxiliary prediction inside the policy, but the signal runs alongside action generation rather than actively shaping it\. Moreover, progress is inherently tied to the terminal state, making estimation fragile when the policy lacks an internal awareness of where the task should end\. We propose \*\*PACE\*\*, which actively internalizes task progress as a predictive interface bridging commitment and execution, equipping the policy with a calibrated sense of the \*pace\* at which it advances toward task completion\. Specifically, we first equip the VLA with a \*foresight anchor\*, a predicted terminal representation from observation and instruction, from which progress emerges as a geometric projection\. Building on this anchor, the model perceives a compact past–present–future progress state capturing \*how much the last step advanced\*, \*how far execution has come\*, and \*how far the next step should go\*\. These predicted progress further actively conditions the action decoder to guide the prediction, while the gap between committed and realized increments provides a built\-in consistency check for lightweight failure detection\. Experiments across LIBERO, SimplerEnv, and real\-world single\-arm and bimanual platforms show that PACE achieves 98\.7% on LIBERO and 74% on real\-world manipulation, with consistent gains especially on long\-horizon tasks\. Robustness and stable generalization across diverse scenarios further confirm the advantage of internalizing progress within the policy, validating a calibrated sense of execution pace as an effective paradigm for long\-horizon robot control\.

## Learning Collision‑Free Dispatch Policies for Route‑Wise Decision‑Dependent Anomaly Detection

**Authors:** Xin Xia; Chen Zhang; Kaibo Liu

**ID:** 149221 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s01jPERPlb>) | [PDF](<https://openreview.net/pdf?id=s01jPERPlb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149221>)

Mobile sensing for real\-time anomaly detection couples routing, sampling, and stopping: dispatch determines which locations are observed, while observations update the evidence used for future dispatch\. We study this problem for a fleet of unmanned aerial vehicles \(UAVs\), where each UAV observes only its current location and anomalies may occur at unknown locations and times\. The goal is to detect anomalies quickly while controlling false alarms under decision\-dependent partial observations, local mobility, and collision\-avoidance constraints\. Existing quickest\-detection methods typically ignore mobility and collision constraints, whereas learning\-based routing methods scale to large fleets but are not designed for statistically calibrated detection\. We formulate route\-wise monitoring as a partially observable Markov decision process \(POMDP\) and propose DispatchPPO, a deep reinforcement learning method for long\-horizon detection\-aware dispatch\. Its policy architecture, DispatchNet, uses autoregressive decoding with dynamic feasibility masking to generate collision\-free joint UAV moves without enumerating the exponential joint action space\. We establish theoretical properties for persistent coverage, evidence\-based focusing, and detection delay through a resource\-allocation information\-rate bound\. Experiments show that DispatchPPO reduces detection delay relative to heuristic and optimization\-based baselines, while transferring effectively to real\-robot and wildfire monitoring case studies\.

## CausalDriveBench: Evaluating Causal Reasoning in Vision\-Language\-Action Models for Autonomous Driving

**Authors:** Narendiran Chembu; Navvrat Rao; Shreedhar Kodate; Gayatri S Banda; Arko Sarkar; Abhinav Khanna; Rajarshee Das; Umesh Kanala; Siddharth Khandelwal; Kumar Aman; Aish Dubey; Kaustubh Beedkar; Arjun Jain

**ID:** 139161 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hdSw2TGIXo>) | [PDF](<https://openreview.net/pdf?id=hdSw2TGIXo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139161>)

Vision\-Language\-Action \(VLA\) models for autonomous driving produce natural\-language reasoning alongside predicted trajectories, but whether this reasoning reflects the causal structure of the scene remains untested\. We introduce CausalDriveBench, an evaluation framework grounded in Pearl's Causal Hierarchy \(PCH\) that tests causal reasoning in driving\-specific VLAs through structured visual question answering \(QA\) and alternative\-trajectory prediction\. To this end, we construct causal scene graphs over nuScenes that distinguish causally active, dormant, and distractor entities, separating perceptual salience from causal relevance\. The benchmark spans all four rungs of PCH \(association, intervention, and counterfactual along with causal discovery\) for QA generation\. For the higher rungs, we additionally provide reference trajectories under specified scene modifications, enabling action\-level verification that complements reasoning\-level evaluation\. In total, the benchmark contains 7,285 verified causal QA pairs and 1,000 counterfactual trajectories derived from nuScenes\. We evaluate 10 driving\-specific VLAs and 3 general\-purpose VLMs, and report three findings\. First, the best model reaches only 70\.6\\% QA accuracy, and 4 of 13 models score below random chance\. Second, comparing each driving VLA to the general\-purpose VLM that shares its language backbone, the cost of driving fine\-tuning ranges from 2 to 34 percentage points on causal QA, with post\-training design explaining the spread\. Third, causal QA and trajectory accuracy are statistically uncorrelated across models: under counterfactual prompts, predicted trajectories either over\-react or collapse onto the observed\-scene baseline\. Taken together, these results show that neither fluent rationales nor accurate observed\-scene trajectories constitute evidence of causal understanding\.

## Learning Human\-Intention Priors from Large\-Scale Human Demonstrations for Robotic Manipulation

**Authors:** Yifan Xie; YuAn Wang; Guangyu Chen; Jinkun Liu; Yu Sun; Wenbo Ding

**ID:** 149775 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nOihANWetr>) | [PDF](<https://openreview.net/pdf?id=nOihANWetr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149775>)

_Abstract unavailable from the accessible public sources._

## Event\-Grounded Sparse Autoencoders for Vision\-Language\-Action Policies

**Authors:** Xinchen Jin; Aditya Chatterjee; Pranav Kumar; Rohan Paleja

**ID:** 151283 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bY6Sy7BOHn>) | [PDF](<https://openreview.net/pdf?id=bY6Sy7BOHn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151283>)

_Abstract unavailable from the accessible public sources._

## Decoupled Complementary Fields on 3D Gaussian Maps for Embodied Navigation and Reasoning

**Authors:** Jiahao Zhao; Yaonan Wang; Zijie Wu; Mingtao Feng; He Xie; Renjie Ding; Hui Zhang

**ID:** 149572 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p8mGm9kb7M>) | [PDF](<https://openreview.net/pdf?id=p8mGm9kb7M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149572>)

_Abstract unavailable from the accessible public sources._

## SENTINEL: A Multi\-Level Formal Framework for Safety Evaluation of Foundation Model\-based Embodied Agents

**Authors:** Simon Zhan; Philip Wang; Yao Liu; Yiyan Peng; Yiqi Lyu; Zinan Wang; Qineng Wang; Zhian Ruan; Xiangyu Shi; Xinyu Cao; Frank Yang; Zhenyang Ni; Kangrui Wang; Ruohan Zhang; Huajie Shao; Manling Li; Qi Zhu

**ID:** 139690 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=APzonK9omC>) | [PDF](<https://openreview.net/pdf?id=APzonK9omC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139690>)

_Abstract unavailable from the accessible public sources._

## JRDB\-AVR: An Active Visual Reasoning Benchmark for Embodied Agents in Real\-World Environments

**Authors:** Zhixi Cai; Fucai Ke; Sukai Huang; Maria Garcia de la Banda; Peter Stuckey; Reza Haffari; Hamid Rezatofighi

**ID:** 139326 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XBWDVtY0i2>) | [PDF](<https://openreview.net/pdf?id=XBWDVtY0i2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139326>)

_Abstract unavailable from the accessible public sources._

## Less Language, More Latents: Annotation\-Efficient VLAs for Driving

**Authors:** Alexey Zakharov; Kemal Oksuz; Puneet Dokania

**ID:** 149160 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sPFUVSUqr9>) | [PDF](<https://openreview.net/pdf?id=sPFUVSUqr9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149160>)

_Abstract unavailable from the accessible public sources._

## SAGAS: Semantic\-Aware Graph\-Assisted Stitching for Offline Temporal Logic Planning

**Authors:** Ruijia Liu; Ancheng Hou; Xiang Yin

**ID:** 152343 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tllrv77zoO>) | [PDF](<https://openreview.net/pdf?id=Tllrv77zoO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152343>)

Linear Temporal Logic \(LTL\) provides a rigorous framework for specifying long\-horizon robotic tasks, yet existing approaches face a trade\-off: model\-based synthesis relies on accurate labeled transition systems, whereas learning\-based methods often require online interaction, task\-specific rewards, or specification\-conditioned training\. We study LTL\-specified robotic planning and execution in a stricter offline, model\-free setting, where the agent is given only fixed, task\-agnostic trajectory fragments, with no dynamics model, task demonstrations, or online data collection\. To address this setting, we propose SAGAS, a framework that combines the compositionality of symbolic synthesis with the data\-driven reachability structure learned from offline trajectories\. SAGAS first learns a reusable latent reachability graph and a frozen goal\-conditioned executor from fragmented offline data\. For each new LTL formula, it performs task\-time semantic graph augmentation to ground state\-defined propositions on the learned graph, and applies B\\"uchi product search to synthesize a cost\-aware accepting prefix\-\-suffix waypoint plan executed by the frozen executor\. By shifting formula\-specific reasoning from policy learning to test\-time graph augmentation and symbolic search, SAGAS enables zero\-shot generalization to unseen, data\-supported LTL specifications without task\-specific reward design, policy retraining, or online interaction\. Experiments on LTL task suites constructed from OGBench locomotion domains show that this design produces executable and cost\-efficient prefix\-\-suffix behaviors for diverse unseen LTL tasks from fragmented offline data\.

## BEAKER: An Expert\-Curated Benchmark for Embodied Brains in Self\-Driving Chemical Laboratories

**Authors:** Fei Lin; Tengchao Zhang; Ziyang Gong; Xiaotong Yu; Bohan Zhang; Yifan Zhou; Qihao Yang; Ji Dai; Dong Li; Yining Jiang; Qinghua Ni; Jun Huang; Qiang Zhang; Yue Zhou; Yonglin Tian; Zhihang Zhong; Xue Yang; Fei\-Yue Wang

**ID:** 139293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3y6m9KFIU>) | [PDF](<https://openreview.net/pdf?id=Z3y6m9KFIU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139293>)

Self\-Driving Chemical Laboratories \(SDCLs\) are moving chemical experimentation toward embodied automation, where machines must perceive laboratory scenes, reason about experimental states, and act under physical, procedural, and safety constraints\. Although Multimodal Large Language Models \(MLLMs\) are increasingly considered as embodied brains for such systems, existing laboratory benchmarks mainly focus on safety, anomaly detection, or general scientific understanding, leaving their execution\-oriented embodied capabilities underexplored\. To fill this gap, we introduce BEAKER, a Benchmark for evaluating Embodied Actionability, Knowledge, Experimentation, and Reasoning in SDCLs\. BEAKER contains 1,000 expert\-curated QA samples across 11 image and video task types, covering key judgments required for chemical laboratory execution, including affordance grounding, trajectory planning, equipment and state understanding, apparatus connection, operation process reasoning, and result understanding\. All questions and annotations are manually created and reviewed by chemistry and embodied AI experts, without AI\-assisted generation or annotation\. We evaluate 28 general\-purpose, scientific, chemical, and embodied MLLMs on BEAKER\. Results show that current models can recognize laboratory objects and states, but still struggle to ground experimental knowledge into operable regions, feasible trajectories, and long\-horizon procedural reasoning\. BEAKER thus reveals a clear gap between multimodal laboratory perception and action\-grounded experimental understanding, providing a diagnostic benchmark for future MLLMs in SDCLs\.

## Sparse Sum\-of\-Squares Layers for Certified Learning

**Authors:** Ege Gursoy; Nicolas Mansard

**ID:** 150790 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fO3zFhG0ES>) | [PDF](<https://openreview.net/pdf?id=fO3zFhG0ES>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150790>)

A central limitation of modern machine learning systems is the lack of formal certificates guaranteeing their behavior beyond empirical, sample\-based evaluation\. Sum\-of\-squares \(SOS\) methods provide such guarantees by certifying polynomial inequalities over continuous domains via semidefinite programming \(SDP\)\. While prior work has introduced SDP layers as differentiable components in neural networks, their scalability is limited by two key bottlenecks, that we are fixing in this paper: \(i\) failure to preserve sparsity from the forward SOS program in the backward pass, leading to inefficient training, and \(ii\) loss of certificate structure during differentiation, preventing its use in learning\. We propose a differentiable sparse SOS layer whose backward pass mirrors the sparse structure of the forward solve, reusing local blocks, overlaps, and sparse constraints\. The method avoids building dense certificates for scalar losses and computes gradients using the same sparse structure when certificate details are required\. Experiments show that this enables practical SOS\-based layers within learning systems, reducing backward computation time by one to three orders of magnitude while preserving certification quality\. We evaluate on sparse polynomial certification, pendulum control, combinatorial relaxations, robotics projection, oscillator chains, and pose graph synchronization\. Results demonstrate that sparse certificate objectives can be effectively integrated into learning pipelines when the backward pass respects the verifier's structure\.

## Model\-Based Online Decision Making via Generative Trajectory Planning

**Authors:** Haldun Balim; Yilun Du; Na Li

**ID:** 149877 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mYWFATP3F9>) | [PDF](<https://openreview.net/pdf?id=mYWFATP3F9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149877>)

Online decision\-making faces a tension between efficient inference and long\-horizon reasoning\. Value\-based methods rely on short\-horizon bootstrapping that limits the propagation of long\-term information, while trajectory optimization methods plan explicitly but must solve a high\-dimensional optimization problem at every decision step\. We propose Generative Trajectory Planning \(GTP\), a model\-based framework that addresses this tension by learning a generative model as a proposal distribution over action sequences\. Instead of optimizing sequences from scratch, GTP samples candidate sequences from a diffusion prior and refines them using learned dynamics, reward, and value models, enabling efficient trajectory\-level reasoning\. Across continuous control and long\-horizon manipulation tasks, GTP matches or exceeds state\-of\-the\-art model\-free, diffusion\-policy, and model\-based baselines, and remains stable in regimes where strong baselines degrade\. Our results suggest that generative models are best understood not as policies, but as structured proposal distributions for planning, offering a new perspective on how to integrate generative modeling with model\-based decision\-making\.

## Lift, See, Act: Hierarchical Robot Policy Pretraining with 3D Foundation Models

**Authors:** Yiyuan Ge; Changxing Ding; Ziyu Hao; Zijie Zheng; Xiangmin Xu

**ID:** 154150 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ft8jWNDrYo>) | [PDF](<https://openreview.net/pdf?id=Ft8jWNDrYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154150>)

Robot policy pretraining based on human videos is crucial for improving the policy’s generalization ability\. One main challenge for this task is the lack of explicit action\-relevant representations in such unlabeled data\. Recent works tend to estimate 3D hand motion trajectories from videos using 3D foundation models \(3D FMs\)\. However, they keep solely the sparse trajectories as supervision, ignoring the rich, fine\-grained information produced during the trajectory extraction process\. To address this issue, we propose $\\textbf\{LSA\}$, a hierarchical robot policy pretraining framework that includes three phases: $\\textbf\{L\}$ift, $\\textbf\{S\}$ee, and $\\textbf\{A\}$ct\. Specifically, the Lift phase elevates 2D video observations into dense 3D representations by adaptively aligning features in the policy's shallow layers with the intermediate representations extracted from multiple 3D FMs\. Building upon these lifted representations, the See phase equips the policy with explicit geometric and interactive awareness through dual guidance\. It introduces depth\-map reconstruction to help the model comprehend 3D spatial layouts and utilizes hand region cues to explicitly supervise the encoder’s attention toward task\-relevant interaction hotspots\. Empowered by the dense 3D representation learning and precise spatial guidance, our policy achieves robust and accurate robotic manipulation in the Act phase\. Extensive experiments on diverse simulation and real\-world tasks demonstrate that LSA significantly outperforms current state\-of\-the\-art approaches\. The code of this work will be released soon\.

## Trajectory Planning without Trajectory Data: A Manifold\-Guided Approach

**Authors:** Silong Yong; Anji Liu; Cunxi Dai; Carl Busart; Guanya Shi; Yilun Du; Katia Sycara; Yaqi Xie

**ID:** 151102 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cyYEYMIare>) | [PDF](<https://openreview.net/pdf?id=cyYEYMIare>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151102>)

A common way for trajectory planning is to leverage generative models trained on large collections of expert trajectories\. At inference time, the model generates executable trajectories by conditioning on task goal constraints\. However, trajectory\-based methods rely on costly supervision, scale poorly with sequence length, and often generalize poorly to unseen constraints such as novel start\-goal pairs\. We propose an alternative to learn the underlying state\-space manifold and use the geometry of the manifold for trajectory planning\. This approach requires only state observations and enables generalization to unseen constraints by constructing trajectories on the learned manifold of the state space\. Experiments on classical planning problems in maze demonstrate the effectiveness of our work\. We further show that the method can be used in higher dimension space where table\-top robot arms are considered\. Our method is able to find feasible path given only infeasible straight line reference, and be comparable to State\-of\-the\-Art trajectory\-based model without actually learning on trajectory data\.

## Compositional Training\-Free Diffusion Planning for Long\-Horizon Multiple Reach\-Avoid Tasks

**Authors:** Yu Chen; Ruijia Liu; Xiao Yu; Xiang Yin

**ID:** 151682 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YoWrqWunYY>) | [PDF](<https://openreview.net/pdf?id=YoWrqWunYY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151682>)

Long\-horizon robotic planning often requires satisfying temporally ordered safety and visitation constraints rather than a single goal condition\. We study multiple reach\-avoid \(MRA\) tasks, in which a robot must sequentially visit target regions while remaining within corresponding safe sets\. Existing approaches either rely on explicit system models or use data\-driven planners whose test\-time conditioning mechanisms do not scale well to long\-horizon temporally structured tasks\. We propose a training\-free compositional diffusion planning framework for MRA tasks that operates directly on a pre\-trained task\-agnostic diffusion trajectory prior at test time, without requiring a known dynamics model\. Our approach decomposes a global MRA specification into local reach\-avoid sub\-tasks, composes overlapping short\-horizon diffusion priors into a long\-horizon generative process through a factor\-graph perspective, and enforces each local requirement through projection\-based denoising during sampling\. The same construction also extends naturally to prefix\-suffix tasks through a looped compositional graph\. We provide a formal correctness guarantee showing that the stitched trajectory satisfies the target specification\. Experiments on long\-horizon constrained planning benchmarks show strong execution success, substantially lower planning time than representative guidance\-based baselines, and effective transfer to richer dynamics\.

## FineVLA: Fine\-Grained Instruction Alignment for Steerable Vision\-Language\-Action Policies

**Authors:** Xintong Hu; Xuhong Huang; JINYU ZHANG; Yutong Yao; Yuchong Sun; Qiuyue Wang; Mingsheng Li; Yitao Liu; Yixuan Chen; Yingming Zheng; Shuai Bai; Tao Yu

**ID:** 154540\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154540

[Paper](<https://openreview.net/forum?id=Cq60zqtx7v>) | [PDF](<https://openreview.net/pdf?id=Cq60zqtx7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154540>)

Vision\-Language\-Action \(VLA\) models have advanced rapidly by leveraging large\-scale vision\-language priors and robot trajectory data, yet they remain weak at following fine\-grained human instructions\. We argue that this limitation stems from a fundamental mismatch between language and action supervision in existing robot datasets\. Most open\-source datasets annotate each trajectory with a goal\-oriented task description, while leaving the underlying execution process largely unspecified, including motion trajectories, contact and approach patterns, object state transitions, recovery behavior, and final configurations\. Since different choices along these dimensions can lead to substantially different action sequences, coarse task descriptions induce a many\-to\-one mapping from action trajectories to language, preventing precise action\-instruction alignment\. To address this problem, we propose FineVLA, a framework for constructing and leveraging fine\-grained embodied action instructions for VLA learning\. FineVLA includes FineVLA\-Tool, a scalable pipeline for data cleaning, temporal alignment, and fine\-grained annotation; RoboFine\-VLM, a vision\-language model for fine\-grained robotic action understanding and annotation; RoboFine\-Bench, a benchmark for evaluating fine\-grained robotic action understanding via VQA and captioning; and FineVLA\-Policy, a VLA policy trained with fine\-grained instructions on open\-source ALOHA robot data\. Across benchmark evaluation and policy learning experiments, FineVLA demonstrates that high\-density, action\-aligned language supervision leads to more controllable and instruction\-sensitive robot policies\. Our results highlight fine\-grained instruction alignment as a critical step toward VLA systems that not only complete tasks, but complete them in the way humans specify\.

## CondenseVLA: Learnable History Condensation for Efficient Multi\-Frame VLA

**Authors:** Feiyang Hong; Yujie Wei; Bo Zhao; Xiu Su; Hongxun Yao; Shuo Yang

**ID:** 149245\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149245

[Paper](<https://openreview.net/forum?id=rpyJNSOs0e>) | [PDF](<https://openreview.net/pdf?id=rpyJNSOs0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149245>)

Robot manipulation often depends on short\-term cues—such as brief contacts, temporary occlusions, and intermediate object states—that are ambiguous in a single frame and can only be resolved by integrating observations over time\. However, injecting historical information solely by enlarging the history window is computationally costly and frequently yields limited gains due to substantial redundancy and task\-agnostic, inflexible sampling of observations\. We propose CondenseVLA, a multi\-frame VLA policy with a lightweight learnable history condensation module for using short\-term visual context in action decoding\. Given a sequence of cached per\-frame features from the VLM backbone, CondenseVLA distills observation history into a fixed set of slot tokens using learnable queries and multi\-head cross\-attention\. Simple auxiliary regularization encourages diverse attention patterns by penalizing overlap among slot attention maps and reduces slot 12 redundancy by decorrelating slot embeddings, stabilizing learned condensation without imposing strong time priors\. By expanding the history window and distilling it into a compact token set, CondenseVLA improves over the baseline on the evaluated Simpler\-WidowX tasks, increasing success rate from 58\.4 to 70\.8 \(\+12\.4\), achieves 97\.2% on LIBERO, and reaches 52\.0% on real\-world tasks\. Beyond the gains, our results show that long history windows contain substantial redundancy, so naively providing more frames yields limited benefits, whereas learned condensation into fixed slot tokens provides an effective bounded\-token way to leverage temporal context\.

## Vision to Geometry: 3D Spatial Memory for Sequential Embodied MLLM Reasoning and Exploration

**Authors:** Zhongyi Cai; Yi Du; Chen Wang; Yu Kong

**ID:** 149669 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oL3l3gmZqS>) | [PDF](<https://openreview.net/pdf?id=oL3l3gmZqS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149669>)

Embodied agents are expected to assist humans by actively exploring unknown environments and reasoning about spatial contexts\. When deployed in real life, agents often face sequential tasks where each new task follows the completion of the previous one and may include infeasible objectives, such as searching for non\-existent objects\. However, most existing research focuses on isolated goals, overlooking the core challenge of sequential tasks: the ability to reuse spatial knowledge accumulated from previous explorations to guide subsequent reasoning and exploration\. In this work, we investigate this underexplored yet practically significant embodied AI challenge\. Specifically, we propose 3DSPMR, a 3D SPatial Memory Reasoning framework that utilizes Field\-of\-View \(FoV\) coverage as an explicit geometric prior\.  By integrating FoV\-based constraints, 3DSPMR significantly enhances an agent’s memory, reasoning, and exploration capabilities across sequential tasks\. To facilitate research in this area, we further introduce SEER\-Bench, a novel Sequential Embodied Exploration and Reasoning Benchmark that spans two foundational tasks: Embodied Question Answering \(EQA\) and Embodied Multi\-modal Navigation \(EMN\)\. SEER\-Bench uniquely incorporates both feasible and infeasible tasks to provide a rigorous and comprehensive evaluation of agent performance\. Extensive experiments verify that 3DSPMR achieves substantial performance gains on both sequential EQA and EMN tasks\.

## Interaction\-Aligned Robot Learning from Human Videos with Structured Graph Modeling

**Authors:** Jiawei Fu; Lin Yang

**ID:** 155579 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ZFPxw5n09>) | [PDF](<https://openreview.net/pdf?id=4ZFPxw5n09>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155579>)

Recent advances in robotics foundation models have shown promising multi\-task generalization, yet their reliance on specialized embodiment\-specific data and model fundamentally prevents them from exploiting the far richer physical interaction knowledge present in abundant human manipulation videos\. Existing approaches that leverage human videos suffer from misaligned representations that preclude explicit unified interaction modeling over human video and robot demonstration, failing to capture unified physical interaction dynamics essential for cross\-domain transfer\. We address this by constructing a unified representation that aligns human videos and robot tasks through scene point clouds with hand\-to\-gripper mapping via spatial tracking and hand pose estimation\. Leveraging this representation, we propose a structured graph transformer that explicitly models spatial, semantic, and intentional interaction entities through graph attention mechanisms\. The modeled multi\-level interaction features then enable interaction\-aligned cross\-domain learning, transferring manipulation knowledge from human videos to robot tasks via discrete interaction abstraction and hierarchical distribution alignment\. Experiments on RLBench, ManiSkill2, and real\-world robot demonstrate state\-of\-the\-art performance on diverse benchmarks with fewer demonstrations and effectiveness of our designed modules\. Remarkably, our method achieves zero\-shot transfer on robot tasks when trained exclusively on human video, providing strong evidence for effective human\-to\-robot transfer through interaction alignment\.

## DexOPE: 6D Object Pose Estimation in Dexterous Manipulation

**Authors:** Ke Wu; Zhiwei Yang; Xiangting Meng; Zicheng Zhang; Hui Zhang; Zijun Xu; Jieru Zhao; Wenchao Ding

**ID:** 151955 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYYNxzcyv2>) | [PDF](<https://openreview.net/pdf?id=WYYNxzcyv2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151955>)

Reliable 6D object pose estimation is essential for dexterous manipulation but remains highly challenging due to severe visual occlusions from multi\-finger interactions\. Progress has been limited by two key factors: the lack of large\-scale manipulation datasets and the inability of existing methods to handle high uncertainty under occlusion\. To address these challenges, we introduce DexOPE, a large\-scale dataset and a physics\-guided pose estimation framework\. DexOPE provides a multimodal dataset with 1\.5k diverse objects, an order of magnitude larger than prior work, covering simulated and real\-world grasping and manipulation\. To handle pose ambiguity under occlusion, we propose a Physics\-Guided Score Matching approach that models the pose posterior using score\-based diffusion models rather than deterministic regression\. Physical constraints from hand–object interactions, including nonpenetration and tactile contact, are incorporated as guidance during sampling, enabling physically plausible pose inference even under severe or complete occlusion\. Extensive experiments show that DexOPE achieves state\-of\-the\-art performance, significantly outperforming existing methods in robustness to occlusion and generalization to unseen objects\.

## Unbiased First\-Order Randomized Smoothing for Differentiable Simulation

**Authors:** Mathis SCHEFFLER; Wilson Jallet; Cordelia Schmid; Justin Carpentier

**ID:** 150375\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150375

[Paper](<https://openreview.net/forum?id=iXltG66DNN>) | [PDF](<https://openreview.net/pdf?id=iXltG66DNN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150375>)

Computing informative gradients through nonsmooth physical models—such as those involving hard contact or bouncing—is a cornerstone challenge in robotics and machine learning\.  Randomized smoothing offers a principled way to obtain well\-behaved surrogate gradients, yet standard first\-order estimators of these smoothed gradients are biased whenever the underlying function is discontinuous\.  In this work, we show that this bias arises from neglected discontinuity contributions and derive a corrected first\-order formula that eliminates it\.  When the discontinuity structure is known, we exploit it to build discontinuity\-aware gradient estimators, which we instantiate for differentiable collision detection on 3D meshes\.  When it is unknown, we propose a complementary estimator that leverages classical gradients to reduce variance\.  We validate this estimator on nonsmooth trajectory optimization instances, demonstrating variance reductions of several orders of magnitude over zeroth\-order baselines while remaining unbiased under discontinuities where standard first\-order estimators fail\.

## Learning From Failures: Efficient Reinforcement Learning Control with Episodic Memory

**Authors:** Chenyang Miao; Bingchen Zhou; Yu Jianliang; Zeyang Liu; Xingyu Chen; Qiongjie Cui; Xuguang Lan

**ID:** 154904 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A47bmjG2gy>) | [PDF](<https://openreview.net/pdf?id=A47bmjG2gy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154904>)

_Abstract unavailable from the accessible public sources._

## AffordSim: A Scalable Data Generator and Benchmark for Affordance\-Aware Robotic Manipulation

**Authors:** Mingyang Li; Haofan Xu; Haowen Sun; Xinzhe Chen; Sihua Ren; Liqi Huang; Chenyang Miao; Xinyang Sui; jiawei Ye; Qiongjie Cui; Zeyang Liu; Xingyu Chen; Xuguang Lan

**ID:** 139222\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139222

[Paper](<https://openreview.net/forum?id=e25kaYnRu0>) | [PDF](<https://openreview.net/pdf?id=e25kaYnRu0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139222>)

_Abstract unavailable from the accessible public sources._

## Q\-Residual Physics: Hamiltonian\-Structured Quantum Residual Learning for Embodied Dynamics

**Authors:** Fanqi Kong; Ke Shi; Yuchen Wang; Zhipeng Liu; Xiaofei Yue; Zhaoxuan Li; Tingting Li; Ziming Zhao

**ID:** 150528\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150528

[Paper](<https://openreview.net/forum?id=hS2tnUR2oM>) | [PDF](<https://openreview.net/pdf?id=hS2tnUR2oM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150528>)

Embodied agents in contact\-rich environments must model dynamics affectedby frictional uncertainty, contact discontinuities, compliance, actuator imperfec\-tions, perception noise, and mass or inertia mismatch\. Existing residual dynamicslearning methods correct nominal physics predictions with unconstrained neuralresiduals, which often generalize poorly under unseen contact regimes, changingphysical parameters, long\-horizon rollouts, and few\-shot adaptation\. We proposeQ\-Residual Physics, a Hamiltonian\-structured quantum residual learning frame\-work for embodied dynamics\. The method represents residual errors through astructured quantum residual layer whose qubits correspond to physically inter\-pretable modes, including contact impulse, friction, slip, compliance, damping,perception error, and mass or inertia mismatch\. A physical interaction graphinduces a Hamiltonian residual structure, implemented with a Trotterized param\-eterized quantum circuit whose components capture mode activation, physicalcoupling, uncertain switching, dynamic mode exchange, and higher\-order interac\-tions\. Quantum measurements are decoded to correct nominal physics predictions\.Across embodied dynamics and manipulation benchmarks, including OMNIPUSH,MANISKILL2, ROBOMIMIC, D4RL, and PHYSION, Q\-Residual Physics achievesstronger generalization than physics\-only, neural residual, graph residual, andquantum\-circuit baselines\. It reduces long\-horizon rollout error by 23\.8%, im\-proves contact transition prediction by 16\.4%, lowers out\-of\-distribution parametererror by 21\.7%, and improves few\-shot adaptation by 28\.5%\. The code is availableat https://anonymous\.4open\.science/r/QRP\-0205

## Dispatchable Coordination Envelopes for Embodied Collaboration Under Sequential Uncertainty

**Authors:** Yuchen Wang; Fanqi Kong; Ke Shi; Zhipeng Liu; Xiaofei Yue; Zhaoxuan Li; Tingting Li; Ziming Zhao

**ID:** 151294\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151294

[Paper](<https://openreview.net/forum?id=bVJu7TwSXf>) | [PDF](<https://openreview.net/pdf?id=bVJu7TwSXf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151294>)

Embodied AI systems can pass planning and still fail in execution: a delay, resource conflict, synchronization change, or candidate invalidation can turn a valid point schedule into broken commitments\. We introduce FLECAR, which gives the executor a dispatchable coordination envelope instead of fixed start times\. Offline, Flexible Envelope Synthesis builds executable windows, coupling constraints, and a dispatch graph; online, Controllability\-Aware Repair updates that envelope after events and repairs only the affected region when dispatchability fails\. On generated coordination instances with the same event streams and budgets, FLECAR improves post\-event feasibility from 0\.3880 to 0\.8400, terminal success from 0\.5800 to 0\.8400, and normalized repair burden from 0\.5357 to 0\.2964 relative to legacy point\-schedule repair\. A point baseline with CAR\-like repair closes part of the gap, but envelopes still retain higher post\-event feasibility and lower repair burden, while pooled one\-step survivability remains near parity\. The result points to a simple execution principle: after disturbances, live windows, couplings, and alternatives serve the executor better than a point schedule rebuilt after the fact\.

## Seeing Together, Acting Apart: Shared Environmental Understanding for Multi\-Robot Navigation

**Authors:** haihong hao; Lei Chen; Mingfei Han; Dong An; Yuqiang Yang; Chenglong Yan; Changlin Li; Minghao Guo; Salman Khan; Xiaojun Chang

**ID:** 148448 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjwxcKVFWO>) | [PDF](<https://openreview.net/pdf?id=xjwxcKVFWO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148448>)

Multi\-robot embodied systems are commonly expected to collaborate by coordinating their behaviors: agents may communicate, share experience, divide tasks, avoid conflicts, or jointly decide what to do next\. This paper asks a complementary question: can collaboration emerge before decision making, by first building a shared understanding of the environment?  We introduce Shared Environmental Understanding, a policy\-agnostic representation layer that aggregates partial egocentric observations from multiple robots into a common latent world representation\.  This formulation shifts the starting point of collaboration from agent\-centric traces to environment\-centric representation, allowing different robots and downstream policies to benefit from shared world knowledge without being forced into a centralized controller\.  We instantiate this idea with SEER, a shared environment encoding and retrieval framework that learns to turn multi\-robot, multi\-view observations into reusable navigation context\.  SEER is designed not as a new navigation policy, but as an upstream environmental understanding module that can be plugged into heterogeneous agents, including both specialized VLN models and general vision\-language model agents\.  We validate SEER through a comprehensive set of representation\-level and task\-level studies, including latent inverse dynamics analysis, standard VLN evaluation, controlled paired multi\-robot navigation, comparisons against action\-, history\-, and policy\-sharing alternatives, and real\-world robot deployments\.  Across these settings, SEER preserves single\-agent navigation ability while improving individual and collaborative success in multi\-robot scenarios\.  These findings support a simple but underexplored hypothesis: for embodied cooperation, robots may benefit from sharing the environmental understanding before sharing the policy\.

## BEACON: Cross\-Domain Co\-Training of Generative Robot Policies via Best\-Effort Adaptation

**Authors:** Antong Zhang; Han Qi; Heng Yang

**ID:** 151303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bSawLg1NO0>) | [PDF](<https://openreview.net/pdf?id=bSawLg1NO0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151303>)

We introduce BEACON—Best\-Effort Adaptation for Cross\-Domain Co\-Training—a theory\-driven framework for training generative robot policies with abundant source demonstrations and limited target demonstrations\. BEACON casts cross\-domain co\-training as a discrepancy\-aware importance\-reweighting problem, jointly learning a diffusion\-based visuomotor policy and per\-sample source weights that minimize an objective informed by target\-domain generalization guarantees\. To make best\-effort adaptation practical for high\-dimensional sequence policies, we develop scalable instance\-level discrepancy estimators, stochastic alternating updates for policy and weights, and a multi\-source extension that balances heterogeneous source domains\. Across sim\-to\-sim, sim\-to\-real, and multi\-source manipulation settings, BEACON improves robustness and data efficiency over target\-only, fixed\-ratio co\-training, and feature\-alignment baselines\. Importantly, even without an explicit alignment objective, BEACON achieves feature alignment as an implicit result of discrepancy\-aware cross\-domain co\-training\.

## SUGAR: A Scalable Human\-Video\-Driven Generalizable Humanoid Loco\-Manipulation Learning Framework

**Authors:** Tianshu Wu; Xiangqi Kong; Yue Chen; Qize Yu; Hang Ye; Jia Li; Yizhou Wang; Hao Dong

**ID:** 149498 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pgPiH1SLrT>) | [PDF](<https://openreview.net/pdf?id=pgPiH1SLrT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149498>)

_Abstract unavailable from the accessible public sources._

## Interaction\-Aligned Robot Learning from Human Videos with Structured Graph Modeling

**Authors:** Jiawei Fu; Lin Yang

**ID:** 155579\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155579

[Paper](<https://openreview.net/forum?id=4ZFPxw5n09>) | [PDF](<https://openreview.net/pdf?id=4ZFPxw5n09>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155579>)

Recent advances in robotics foundation models have shown promising multi\-task generalization, yet their reliance on specialized embodiment\-specific data and model fundamentally prevents them from exploiting the far richer physical interaction knowledge present in abundant human manipulation videos\. Existing approaches that leverage human videos suffer from misaligned representations that preclude explicit unified interaction modeling over human video and robot demonstration, failing to capture unified physical interaction dynamics essential for cross\-domain transfer\. We address this by constructing a unified representation that aligns human videos and robot tasks through scene point clouds with hand\-to\-gripper mapping via spatial tracking and hand pose estimation\. Leveraging this representation, we propose a structured graph transformer that explicitly models spatial, semantic, and intentional interaction entities through graph attention mechanisms\. The modeled multi\-level interaction features then enable interaction\-aligned cross\-domain learning, transferring manipulation knowledge from human videos to robot tasks via discrete interaction abstraction and hierarchical distribution alignment\. Experiments on RLBench, ManiSkill2, and real\-world robot demonstrate state\-of\-the\-art performance on diverse benchmarks with fewer demonstrations and effectiveness of our designed modules\. Remarkably, our method achieves zero\-shot transfer on robot tasks when trained exclusively on human video, providing strong evidence for effective human\-to\-robot transfer through interaction alignment\.

## Counterfactual Instruction Grounding for Vision\-Language\-Action Models

**Authors:** Shiyu Liu; Yu Zhou; Meng Liu; Xuanming Guo; Liqiang Nie

**ID:** 152584 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S0PONpfMze>) | [PDF](<https://openreview.net/pdf?id=S0PONpfMze>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152584>)

Vision\-Language\-Action \(VLA\) models inherit rich semantic priors from pretrained vision\-language models, yet these priors do not guarantee persistent instruction sensitivity after narrow\-domain fine\-tuning\. We observe a systematic failure mode: although VLA models remain visually reactive, their later actions can become weakly constrained by the commanded instruction, leading to unstable object interaction and visually plausible but instruction\-inconsistent behavior\. We trace this behavior to a collapse of instruction\-conditioned representations across network depth and task progress\. More fundamentally, this collapse is enabled by the learning objective itself: standard imitation learning admits Bayes\-optimal solutions that are invariant to language\. We address this by recasting instruction grounding as identifying the commanded instruction among counterfactual alternatives\. Based on this view, we propose Counterfactual Instruction Grounding \(CIG\), a contrastive objective that encourages the generated trajectory to remain identifiable with the commanded instruction among counterfactual alternatives\. CIG applies to both autoregressive and flow\-matching VLA models, using exact action\-chunk likelihoods for autoregressive models and an energy\-based pseudo posterior for flow\-matching models to avoid intractable trajectory likelihood estimation\. Practically, CIG can be applied directly to already fine\-tuned models as a continuation\-stage grounding objective, restoring instruction sensitivity without retraining from scratch or changing the architecture\. Extensive experiments on RoboCasa and LIBERO\-Plus demonstrate that CIG achieves strong instruction\-following performance with success rates of 71\.3% and 86\.3%, respectively\. Real\-world deployment further shows that CIG transfers to kitchen manipulation and preserves instruction\-conditioned behavior in visually ambiguous scenes\.

## ECHO: Continuous Hierarchical Memory for Vision\-Language\-Action Models

**Authors:** Yanbin Hu; Jin Cui; Jiayi Lu; Ruixuan Yang; Jun Ye; Boran Zhao; Xingyu Chen; Xuguang Lan; Pengju Ren

**ID:** 149577 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p56YFb1ACl>) | [PDF](<https://openreview.net/pdf?id=p56YFb1ACl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149577>)

Memory capacity is a critical factor determining the performance of Vision\-Language\-Action \(VLA\) models in long\-horizon manipulation tasks\. Existing memory\-augmented architectures primarily rely on linear or flat storage, lacking structural priors for manipulation categories and hierarchical organization\. This deficiency hinders efficient experience retrieval and limits generalization to unseen long\-horizon task compositions\. Inspired by the hierarchical organization of human experience, we propose ECHO \(Experience Consolidation and Hierarchical Organization\), a novel memory framework operating within a Continuous Hierarchical Space\. By employing a hyperbolic autoencoder, ECHO maps VLA hidden states into this space\. Leveraging hyperbolic metrics and entailment constraint mechanisms, experience vectors are organized into a semantic memory tree that supports efficient top\-down retrieval\. In parallel, a background consolidation mechanism continuously refines the memory tree through geometric interpolation and structural splitting, supporting virtual memory synthesis in the continuous space\. We integrate ECHO into the $\\pi\_0$ foundation model\. Evaluations on LIBERO and preliminary real\-world experiments demonstrate the effectiveness of our approach, notably achieving a 12\.8% absolute improvement in execution success rate over the $\\pi\_0$ baseline on LIBERO\-Long, while improving compositional generalization on cross\-suite unseen long\-horizon tasks\.

## Teaching VLMs What to Say, Not How to Reason: Rethinking Counterfactual Reasoning in Autonomous Driving

**Authors:** Hayeon Oh; Donghwan Lee

**ID:** 148659 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w690TmNnXg>) | [PDF](<https://openreview.net/pdf?id=w690TmNnXg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148659>)

End\-to\-end autonomous driving systems are known to suffer from shortcut learning and causal confusion, limiting robust generalization under distribution shift\. To address this, recent Vision\-Language Model \(VLM\) approaches introduce intermediate linguistic reasoning steps including chain\-of\-thought, chain\-of\-causation, and counterfactual \(CF\) reasoning, and report consistent improvements in closed\-loop driving\. Among these, CF reasoning has been emphasized as enabling self\-reflective, high\-level causal understanding, yet whether these gains reflect genuine causal reasoning or language\-induced distributional bias remains unclear\. In this work, we examine what CF reasoning actually induces in VLM\-based autonomous driving using accident scenarios with explicit causal structure and a discrete meta\-action space\. We observe that CF reasoning consistently shifts the action distribution toward more conservative behaviors, accompanied by increased perplexity and policy entropy, and that this effect persists under reinforcement fine\-tuning, suggesting a structural rather than transient artifact\. However, visual attention analysis and causal intervention experiments show that CF reasoning does not meaningfully alter visual grounding, and VLMs respond similarly to causal and non\-causal perturbations, unlike humans who selectively react to causal factors\. Overall, these results suggest that CF reasoning does not induce genuine causal reasoning grounded in visual structure\. Instead, it acts as a linguistic mechanism that reshapes the action distribution, teaching models what to say but not how to reason, highlighting a fundamental gap between language\-based reasoning and causal understanding in VLMs\.

## FAVLA: A Force\-Adaptive Multi\-Rate VLA model for Contact\-Rich Robotic Manipulation

**Authors:** Yao Li; Peiyuan Tang; Wuyang Zhang; Haojie Ren; Chengyang Zhu; Yifan Duan; WeiKai Shi; Xiaodong Zhang; Yuming Dong; Zijiang J Yang; Jianmin Ji; Yanyong Zhang

**ID:** 156009 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1BsG8wfOjt>) | [PDF](<https://openreview.net/pdf?id=1BsG8wfOjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156009>)

Vision\-Language\-Action \(VLA\) models have shown strong potential for general robotic manipulation, but contact\-rich tasks still require timely action refinement using force/torque feedback\.  Existing force\-aware VLA models usually align all modalities to a single low operating frequency, which discards high\-frequency contact cues that are important for reactive action correction\. Additionally, they use static fusion, which cannot adaptively balance visual context and force feedback across manipulation processes\. To mitigate these issues, we propose FAVLA, a force\-adaptive multi\-rate VLA model that explicitly separates low\-frequency visual\-language reasoning from high\-frequency force\-conditioned action refinement\. Based on the $\\pi\_0$\-style VLM\-action expert architecture, FAVLA uses a low\-rate VLM to encode visual\-language\-force context and predict near\-future force statistics, while a high\-rate action expert refines action chunks using the latest force observations\. To decide \\emph\{when\} to update actions, we introduce a Force\-Adaptive Multi\-rate Inference \(FAMI\) mechanism, which schedules the action expert's inference rate from predicted future force variance, keeping low\-rate reasoning in stable phases and increasing update frequency near contact transitions\. To decide \\emph\{how\} to use force, we design a Force\-Guided Dynamic Fusion \(FGDF\) module, which injects high\-frequency force features into the action expert and dynamically balances visual\-semantic and force cues across manipulation stages\.  Extensive real\-robot experiments on high\-precision and contact\-rich tasks show that FAVLA outperforms force\-aware VLA baselines, achieving an average success rate of 88\.8\\% and lower peak contact forces during manipulation\.

## MAPS: Margin\-Aware Priors and Verifier\-Guided Search for Embodied Planning

**Authors:** XIN Li; Junquan Huang; Xujia Li; Lei Chen

**ID:** 154143 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FvQGEc2cb0>) | [PDF](<https://openreview.net/pdf?id=FvQGEc2cb0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154143>)

Large language models \(LLMs\) have shown strong reasoning capabilities in embodied planning tasks\. However, they often fail to achieve good results on long\-horizon and multi\-robot tasks under strict physical constraints, and generate smooth but infeasible trajectories\. In real\-world robotic hardware deployment, systems also face two fundamental challenges: First, the fine\-tuning method for open\-source models, Direct Preference Optimization \(DPO\), typically only makes a binary true or false judgment on the planning results, without distinguishing the severity of the planning error\. As a result, they fail to impose effective penalties for catastrophic violations of physical constraints\. Second, methods that search over multiple candidate plans during inference do not filter out invalid plans in advance, often leading to combinatorial explosion and high inference latency, which makes them difficult to apply to real\-time robotic operations\. To address these limitations, we propose a complete training\-to\-inference architecture consisting of two modules\. First, we introduce Margin\-Aware Direct Preference Optimization \(mDPO\) during training, which distinguishes the severity of errors in negative samples, enabling the fine\-tuned model to avoid generating severe errors that would render a task irreparable\. Second, we deploy Verifier\-Guided Search \(VGS\) during inference, using a symbolic verifier to hard\-prune invalid search paths, thereby repairing infeasible task plans and reducing inference latency\. In addition, latency analysis shows that our approach reduces the average end\-to\-end runtime from 12\.814s to 10\.969s compared with retry\-based repair, while maintaining higher final success, making it more suitable for time\-sensitive robotic deployment\.

## ComPose: When to Trust Hands for Object Pose Tracking

**Authors:** Jisu Shin; Junoh Lee; JunGyu Lee; Inhwan Bae; Dohyeon Lee; Hokyun Im; Youngwoon Lee; Hae\-Gon Jeon

**ID:** 151739 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YSQd5SPRwo>) | [PDF](<https://openreview.net/pdf?id=YSQd5SPRwo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151739>)

Reconstructing the motion of objects from videos is a key component for embodied AI and robot manipulation\.  While diverse approaches to object pose tracking have been studied, they rely heavily on strong external priors, such as depth data or 3D templates, and remain highly vulnerable to severe occlusions by hand grasps despite the use of explicit masks\. In this work, we present ComPose, a 6DoF object tracking framework designed for hand\-aware object pose estimation from RGB video\. Rather than treating the hand purely as an occluder, our method harmonizes hand motions as a complementary cue for object tracking\. In detail, we recover a variety of object motions over time by combining object\- and hand\-derived cues from foundation models within a unified tracking pipeline\. Here, ComPose adaptively selects informative hand joints, blends object\- and hand\-based rotation cues, and refines translation from the visible geometric evidence using a learned correction\. We further enforce the temporal consistency over both rotation and translation, yielding stable 3D object trajectories over time without any external smoothing\. Extensive experiments show that our method is accurate, efficient, and robust under severe hand occlusion and geometric ambiguity\. In addition, the resulting trajectories can also effectively transfer to downstream robot manipulation by enabling robots to reconstruct human actions from online videos\.

## Continually Evolving Skill Knowledge in Vision Language Action Model

**Authors:** Yuxuan Wu; Guangming Wang; Zhiheng Yang; Tianchen Deng; Maoqing Yao; Brian Sheil; Hesheng Wang

**ID:** 155372 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=67rz3TUfbb>) | [PDF](<https://openreview.net/pdf?id=67rz3TUfbb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155372>)

Vision\-language\-action \(VLA\) models show promising knowledge accumulation ability from pretraining, yet continual learning in VLA remains challenging, especially for efficient adaptation\. Existing continual imitation learning \(CIL\) methods often rely on additional parameters or external modules, limiting scalability for large VLA models\. We propose Stellar VLA, a knowledge\-driven CIL framework without increasing network parameters\. Two progressively extended variants are designed: T\-Stellar for flat task\-centric modeling and TS\-Stellar for hierarchical task–skill structure\. Stellar VLA enables self\-evolving knowledge learning by jointly optimizing task representations and a learned knowledge space\.  We propose a knowledge\-guided expert routing mechanism conditioned on knowledge relation and Top\-$K$ semantic embeddings, enabling task specialization without increasing model size\. Experiments on the LIBERO benchmark show that Stellar VLAs achieve strong performance among both VLA and CIL baselines, using only 1\\% data replay\. Real\-world evaluation on a dual\-arm platform with distinct embodiment and scene configurations validates effective knowledge transfer\. TS\-Stellar excels in hierarchical manipulation, and visualizations reveal robust knowledge retention and task discovery\. Project website is provided in the supplementary material\.

## FocusVLA: Hijacking Attention to Break Visual Token Pruning in Vision\-Language\-Action Models

**Authors:** Yanhui Li; Qianpu Sun; Qi Zhou; Chenru Jiang; Peiyu Zhang; Dongxia Wang

**ID:** 149765 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nVC1CnoI2V>) | [PDF](<https://openreview.net/pdf?id=nVC1CnoI2V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149765>)

_Abstract unavailable from the accessible public sources._

## NeSyKC: Neurosymbolic Knowledge Compilation For Lifelong Learning Embodied Agents

**Authors:** Wonje Choi; Jooyoung Kim; Sera Choi; Younguk Song; Honguk Woo

**ID:** 156109 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0KyH3bbBjN>) | [PDF](<https://openreview.net/pdf?id=0KyH3bbBjN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156109>)

_Abstract unavailable from the accessible public sources._

## HeMeR: Heterogeneous Memory Reconciliation for Embodied Agents via Structured KV Reuse

**Authors:** Saehun Chun; Wonje Choi; Jinwoo Jang; TaeYoon Kwack; Honguk Woo

**ID:** 148497 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xMqv6BYsZv>) | [PDF](<https://openreview.net/pdf?id=xMqv6BYsZv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148497>)

_Abstract unavailable from the accessible public sources._

## AdaOcc: Adaptive 3D Occupancy Prediction for Embodied Tasks

**Authors:** Jinglong Wang; Yunjie Wang; Zhiyang Zhang; Jiawei He; Ye Yuan; Bo Qiu; Jing Zhang

**ID:** 152734 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QlTrxoZXUR>) | [PDF](<https://openreview.net/pdf?id=QlTrxoZXUR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152734>)

_Abstract unavailable from the accessible public sources._

## Aligned Delta\-Triplane Transformers as Occupancy World Models

**Authors:** Haoran Xu; Peixi Peng; Shijun Guo; Guang Tan; Yiqian Chang; Yisen Zhao; Shuaixian Wang; Yonghong Tian

**ID:** 152382 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TVtLbFPjtb>) | [PDF](<https://openreview.net/pdf?id=TVtLbFPjtb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152382>)

_Abstract unavailable from the accessible public sources._

## PAPO\-VLA: Planning\-Aware Policy Optimization for Vision\-Language\-Action Models

**Authors:** Peizheng Guo; Jingyao Wang; Changwen Zheng; Wenwen Qiang

**ID:** 149215 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s3ZEtW3nVE>) | [PDF](<https://openreview.net/pdf?id=s3ZEtW3nVE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149215>)

_Abstract unavailable from the accessible public sources._

## One Scan is Enough: Demonstration\-Free Adaptation for Language\-Guided Navigation

**Authors:** Zhuoyuan Yu; Yuxing Long; Du Wang; Junyang Wang; Hongwei Fan; Hao Dong

**ID:** 155831 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2YW1bwmi4r>) | [PDF](<https://openreview.net/pdf?id=2YW1bwmi4r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155831>)

Deploying a language\-guided navigation policy in a new building usually means watching it fail\. Public\-benchmark VLAs degrade scene by scene as layout, appearance, and language drift, and the standard fix of teleoperating fresh trajectories on site does not scale\. We replace human demonstration with a single brief iPhone scan\. Scan2Instruction compiles that scan into a complete training environment, automatically synthesizing executable navigation episodes with grounded instructions\. PRPT\-KS then adapts the policy through a closed\-form Pareto utility read directly off the reconstructed scene, with no learned critic and no human labels\. Across five real environments, the two designs together drive our RealNav to an 89% real\-robot success rate, almost doubling the strongest VLA baseline at 48%, and still achieve 87% in unscanned regions of the same buildings\. Our work turns demonstration\-free scene adaptation for language\-guided navigation from an aspiration into a working reality\. All code and model will be released open\-source upon acceptance\.

## Reconciling Safety and Performance via Dual\-Expert Offline Imitation Learning

**Authors:** Seokin Seo; Sung Kuk Shyn; Minji Seo; Yisoo Lee; Jongmin Lee; Hongseok Yang; Kee\-Eung Kim

**ID:** 149075 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3zAm1SrXj>) | [PDF](<https://openreview.net/pdf?id=t3zAm1SrXj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149075>)

Ensuring high returns while providing strong safety guarantees in offline imitation learning \(IL\) is a fundamental challenge: existing approaches either rely on explicitly specified cost functions, which are difficult to design for complex real\-world safety constraints, or require expert demonstrations that are both safe and high\-performing, which are often too costly to collect\. We introduce \*dual\-expert imitation learning\*, which leverages two complementary data sources: \(i\) safety\-compliant demonstrations that faithfully follow safety guidelines but may be suboptimal, and \(ii\) performance\-oriented demonstrations that achieve high returns but may violate safety guidelines\. To address this problem, we propose DexDICE \(\*\*D\*\*ual\-\*\*ex\*\*pert offline imitation learning via stationary \*\*DI\*\*stribution \*\*C\*\*orrection \*\*E\*\*stimation\)\. Instead of conventional distribution constraints, DexDICE combines DICE\-style offline learning with safe support constraints, enabling agents to exploit high\-return behaviors while remaining within safety\-compliant regions\. We evaluate DexDICE on a re\-curated DSRL benchmark and validate it on a real\-world mobile\-robot navigation task trained directly from human teleoperation demonstrations, where it significantly outperforms offline IL baselines and remains robust to data scarcity and quality degradation\.

## Grasp\-Then\-Plan with Failure Attribution: A Closed Two\-Stage Framework for Precise and Generalizable Robotic Manipulation

**Authors:** Jiahao Xu; Peiyuan Wang; Hanzhuo Zhang; Zihao Yu; Tianyu Fu; Hao Chen; Xuanhao Xiang; Zixuan Li; Jianbo Yu; Chenchen Fu; Wanyuan Wang

**ID:** 155467 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Ny6yPiYA2>) | [PDF](<https://openreview.net/pdf?id=5Ny6yPiYA2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155467>)

In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial\-and\-error\. To enable efficient long\-horizon manipulation, we propose GTP\-FA \(Grasp\-Then\-Plan with Failure Attribution\), a task\-oriented two\-stage ‘grasp\-then\-plan’ framework that generates grasp candidates and performs downstream motion planning conditioned on the selected grasp\. Given a failed manipulation trajectory, we learn a failure attribution model that generalizes to unseen grasps and produces a stable distribution over failure modes for diagnosis\-guided optimization\. Based on these attribution results, we then optimize both modules in a diagnosis\-driven manner: on the grasping side, we inject task\-level priors and risk penalties into grasp candidate scoring and optimization to suppress unstable or task\-incompatible grasps; on the planning side, we target high\-risk initial states through data collection and fine\-tuning to address genuine planning bottlenecks\. We evaluate the proposed framework in both simulation and real\-robot experiments, and show that GTP\-FA improves the corresponding base learners across RL, IL, diffusion\-policy, and VLA\-based settings, achieving substantially higher overall task success rates\. Project page: here\.

## RecoverBench: A Systematic Benchmark for Error Recovery in Robotic Manipulation

**Authors:** Zijia Tang; Ganlong Zhao; Xingping Chen; Junye Chen; Zihao Mo; Zedi Wang; Guanbin Li

**ID:** 139223 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dvg6FAMUK7>) | [PDF](<https://openreview.net/pdf?id=dvg6FAMUK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139223>)

Robotic manipulation policies have achieved remarkable success in controlled settings, but they catastrophically fail when execution errors occur\-\-\-dropped objects, collisions, misaligned grasps\. Despite the critical importance of error recovery for real\-world deployment, no existing benchmark systematically evaluates manipulation policies' ability to recover from such errors\. We introduce RecoverBench, the first systematic benchmark for error recovery in robotic manipulation\. We propose a taxonomy of 12 Error Skills organized into 5 Recovery Behavior Groups \(RBGs\), spanning 24 error subtypes across 2 difficulty degrees\. Our Error Skill pipeline automatically generates 1,360 reproducible error scenes from clean demonstration trajectories across 6 manipulation tasks\. Each error scene includes complete simulation state snapshots, environment fingerprints, and RNG states for deterministic reproduction\. Beyond evaluation, RecoverBench also supports recovery\-demo collection and augmentation, and we show that this recovery supervision improves recovery performance\. We evaluate 4 representative manipulation policies on RecoverBench\. Even the best\-performing policy reaches only 48\.6% average recovery success, ranging from 32\.0% on threading to 76\.7% on stack, showing that current methods still lack robust recovery\. These results highlight the need for dedicated recovery evaluation and position RecoverBench as a benchmark for improving recovery robustness in manipulation policies\. Code, data, and evaluation protocols will be released\.

## Latent Barrier Steering: Hierarchical Safety for Generative Planning

**Authors:** Renhao Zhang; Mingzhe Li; Bruno Silva

**ID:** 155636\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155636

[Paper](<https://openreview.net/forum?id=46Wey0MAPk>) | [PDF](<https://openreview.net/pdf?id=46Wey0MAPk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155636>)

We introduce \*Latent Barrier Steering\* \(LBS\), a hierarchical semantic\-to\-path framework for safe flow\-matching\-based generative planning\. Existing control\-barrier\-function \(CBF\) safety filters for diffusion and flow\-matching planners act locally on generated samples, either during sampling or after prediction\. Such repair is effective for small violations, but can struggle when a new constraint blocks the whole selected behavior mode rather than merely perturbing it locally\. LBS decouples behavior selection from path certification through two coordinated interventions: it first steers the generator's behavior latent toward rollouts with larger safety margin, then decodes the steered latent and applies a path\-space CBF quadratic program \(QP\) only for residual violations\. We show that latent steering increases the margin available to the path\-space corrector, yielding finite\-time recovery guarantees and reduced correction burden\. Experiments across navigation and robot end\-effector planning tasks show that LBS preserves safety while improving goal reaching and reducing correction burden compared with path\-level safety filters\.

## FineVLA: Fine\-Grained Instruction Alignment for Steerable Vision\-Language\-Action Policies

**Authors:** Xintong Hu; Xuhong Huang; JINYU ZHANG; Yutong Yao; Yuchong Sun; Qiuyue Wang; Mingsheng Li; Yitao Liu; Yixuan Chen; Yingming Zheng; Shuai Bai; Tao Yu

**ID:** 154540\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154540

[Paper](<https://openreview.net/forum?id=Cq60zqtx7v>) | [PDF](<https://openreview.net/pdf?id=Cq60zqtx7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154540>)

Vision\-Language\-Action \(VLA\) models have advanced rapidly by leveraging large\-scale vision\-language priors and robot trajectory data, yet they remain weak at following fine\-grained human instructions\. We argue that this limitation stems from a fundamental mismatch between language and action supervision in existing robot datasets\. Most open\-source datasets annotate each trajectory with a goal\-oriented task description, while leaving the underlying execution process largely unspecified, including motion trajectories, contact and approach patterns, object state transitions, recovery behavior, and final configurations\. Since different choices along these dimensions can lead to substantially different action sequences, coarse task descriptions induce a many\-to\-one mapping from action trajectories to language, preventing precise action\-instruction alignment\. To address this problem, we propose FineVLA, a framework for constructing and leveraging fine\-grained embodied action instructions for VLA learning\. FineVLA includes FineVLA\-Tool, a scalable pipeline for data cleaning, temporal alignment, and fine\-grained annotation; RoboFine\-VLM, a vision\-language model for fine\-grained robotic action understanding and annotation; RoboFine\-Bench, a benchmark for evaluating fine\-grained robotic action understanding via VQA and captioning; and FineVLA\-Policy, a VLA policy trained with fine\-grained instructions on open\-source ALOHA robot data\. Across benchmark evaluation and policy learning experiments, FineVLA demonstrates that high\-density, action\-aligned language supervision leads to more controllable and instruction\-sensitive robot policies\. Our results highlight fine\-grained instruction alignment as a critical step toward VLA systems that not only complete tasks, but complete them in the way humans specify\.

## CondenseVLA: Learnable History Condensation for Efficient Multi\-Frame VLA

**Authors:** Feiyang Hong; Yujie Wei; Bo Zhao; Xiu Su; Hongxun Yao; Shuo Yang

**ID:** 149245\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149245

[Paper](<https://openreview.net/forum?id=rpyJNSOs0e>) | [PDF](<https://openreview.net/pdf?id=rpyJNSOs0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149245>)

Robot manipulation often depends on short\-term cues—such as brief contacts, temporary occlusions, and intermediate object states—that are ambiguous in a single frame and can only be resolved by integrating observations over time\. However, injecting historical information solely by enlarging the history window is computationally costly and frequently yields limited gains due to substantial redundancy and task\-agnostic, inflexible sampling of observations\. We propose CondenseVLA, a multi\-frame VLA policy with a lightweight learnable history condensation module for using short\-term visual context in action decoding\. Given a sequence of cached per\-frame features from the VLM backbone, CondenseVLA distills observation history into a fixed set of slot tokens using learnable queries and multi\-head cross\-attention\. Simple auxiliary regularization encourages diverse attention patterns by penalizing overlap among slot attention maps and reduces slot 12 redundancy by decorrelating slot embeddings, stabilizing learned condensation without imposing strong time priors\. By expanding the history window and distilling it into a compact token set, CondenseVLA improves over the baseline on the evaluated Simpler\-WidowX tasks, increasing success rate from 58\.4 to 70\.8 \(\+12\.4\), achieves 97\.2% on LIBERO, and reaches 52\.0% on real\-world tasks\. Beyond the gains, our results show that long history windows contain substantial redundancy, so naively providing more frames yields limited benefits, whereas learned condensation into fixed slot tokens provides an effective bounded\-token way to leverage temporal context\.

## Vision to Geometry: 3D Spatial Memory for Sequential Embodied MLLM Reasoning and Exploration

**Authors:** Zhongyi Cai; Yi Du; Chen Wang; Yu Kong

**ID:** 149669\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149669

[Paper](<https://openreview.net/forum?id=oL3l3gmZqS>) | [PDF](<https://openreview.net/pdf?id=oL3l3gmZqS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149669>)

Embodied agents are expected to assist humans by actively exploring unknown environments and reasoning about spatial contexts\. When deployed in real life, agents often face sequential tasks where each new task follows the completion of the previous one and may include infeasible objectives, such as searching for non\-existent objects\. However, most existing research focuses on isolated goals, overlooking the core challenge of sequential tasks: the ability to reuse spatial knowledge accumulated from previous explorations to guide subsequent reasoning and exploration\. In this work, we investigate this underexplored yet practically significant embodied AI challenge\. Specifically, we propose 3DSPMR, a 3D SPatial Memory Reasoning framework that utilizes Field\-of\-View \(FoV\) coverage as an explicit geometric prior\.  By integrating FoV\-based constraints, 3DSPMR significantly enhances an agent’s memory, reasoning, and exploration capabilities across sequential tasks\. To facilitate research in this area, we further introduce SEER\-Bench, a novel Sequential Embodied Exploration and Reasoning Benchmark that spans two foundational tasks: Embodied Question Answering \(EQA\) and Embodied Multi\-modal Navigation \(EMN\)\. SEER\-Bench uniquely incorporates both feasible and infeasible tasks to provide a rigorous and comprehensive evaluation of agent performance\. Extensive experiments verify that 3DSPMR achieves substantial performance gains on both sequential EQA and EMN tasks\.

## Realtime\-VLA FLASH: Speculative Inference Framework for Diffusion\-based VLAs

**Authors:** Jiahui Niu; Kefan Gu; Yucheng Zhao; shengwen Liang; Tiancai Wang; Xing Hu; ying wang; Huawei Li

**ID:** 152931\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152931

[Paper](<https://openreview.net/forum?id=PI2H51gjoE>) | [PDF](<https://openreview.net/pdf?id=PI2H51gjoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152931>)

Diffusion\-based vision\-language\-action models \(dVLAs\) are promising for embodied intelligence but are fundamentally limited in real\-time deployment by the high latency of full inference\. We propose Realtime\-VLA FLASH, a speculative inference framework that eliminates most full inference calls during replanning by introducing a lightweight draft model with parallel verification via the main model's Action Expert and a phase\-aware fallback mechanism that reverts to the full inference pipeline when needed\. This design enables low\-latency, high\-frequency replanning without sacrificing reliability\. Experiments show that on LIBERO, FLASH largely preserves task performance by replacing many 58\.0\\,ms full\-inference rounds with speculative rounds as fast as 7\.8\\,ms, lowering task\-level average inference latency to 19\.1\\,ms \(3\.04$\\times$ speedup\)\. We additionally demonstrate effectiveness on real\-world conveyor\-belt sorting, highlighting its practical impact for latency\-critical embodied tasks\.

## FlowHOI: Flow\-based Semantics\-Grounded Generation of Hand\-Object Interactions for Dexterous Robot Manipulation

**Authors:** Huajian Zeng; Lingyun Chen; Jiaqi Yang; Yuantai Zhang; Fan Shi; Peidong Liu; Xingxing Zuo

**ID:** 155765\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155765

[Paper](<https://openreview.net/forum?id=35aGAAx7tn>) | [PDF](<https://openreview.net/pdf?id=35aGAAx7tn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155765>)

Recent vision\-language\-action \(VLA\) models can generate plausible end\-effector motions, yet they often fail in long\-horizon, contact\-rich tasks because the underlying hand\-object interaction \(HOI\) structure is not explicitly represented\. An embodiment\-agnostic interaction representation that captures this structure would make manipulation behaviors easier to validate and transfer across robots\. We propose FlowHOI, a two\-stage flow\-matching framework that generates semantically grounded, temporally coherent HOI sequences, comprising hand poses, object poses, and hand\-object contact states, conditioned on an egocentric observation, a language instruction, and a 3D Gaussian splatting \(3DGS\) scene reconstruction\. We decouple geometry\-centric grasping from semantics\-centric manipulation, conditioning the latter on compact 3D scene tokens and employing a motion\-text alignment loss to semantically ground the generated interactions in both the physical scene layout and the language instruction\. To address the scarcity of high\-fidelity HOI supervision, we introduce a reconstruction pipeline that recovers aligned hand\-object trajectories and meshes from large\-scale egocentric videos, yielding an HOI prior for robust generation\.  Across the GRAB and HOT3D benchmarks, FlowHOI achieves the highest action recognition accuracy and a 1\.7$\\times$ higher physics\-simulation success rate on GRAB than the strongest diffusion\-based baseline, while delivering a 40$\\times$ inference speedup\. We further demonstrate real\-robot execution across four contact\-rich, dexterous manipulation tasks, highlighting the effectiveness of retargeting our generated HOI representations to robotic dexterous hands, achieving significantly higher success rates than prior methods due to improved physical plausibility and semantic alignment\.

## SelfCritic\-VLA: Language as Intrinsic Critic for Vision Language Action Models in Autonomous Driving

**Authors:** Fang Li; Zheng Liu; Yuechen Luo; Hanbing Li; Zhi\-Xin Yang

**ID:** 152280\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152280

[Paper](<https://openreview.net/forum?id=UGQKMlMM5j>) | [PDF](<https://openreview.net/pdf?id=UGQKMlMM5j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152280>)

Vision\-Language\-Action \(VLA\) models offer a promising paradigm for end\-to\-end autonomous driving by connecting visual scene understanding, linguistic reasoning, and low\-level trajectory generation\. However, existing driving VLAs typically use language only as static commands or supervised rationales, while treating trajectory prediction as an open\-loop generation problem\. As a result, they lack an explicit mechanism for understanding the consequences of their own actions, which limits robustness under closed\-loop distribution shift and makes reinforcement learning inefficient in long\-tail scenarios\.   We propose SelfCritic\-VLA, a self\-evaluative VLA framework that unifies trajectory generation, language\-grounded action critique, and trajectory refinement\. Given a driving scene, the model first generates an initial trajectory, then produces a language\-grounded critique that describes the potential safety, progress, and rule\-compliance consequences of executing that trajectory, and finally refines the trajectory conditioned on this critique\. To train this capability, we construct a large\-scale counterfactual trajectory dataset with multi\-source candidate trajectories and semantic critiques, and perform hybrid supervised fine\-tuning for planning, action evaluation, and refinement\. Building on this initialization, we introduce a self\-critic reinforcement learning procedure based on GRPO, where critique\-conditioned refinements are filtered by grounded driving rewards and distilled back into the base policy\.   Experiments on NAVSIM and Bench2Drive show that SelfCritic\-VLA consistently improves both open\-loop and closed\-loop driving performance over strong baselines, demonstrating the effectiveness of language\-guided self\-refinement for driving policy optimization\.

## RoboWits: Unexpected Challenges for Robotic Creative Problem Solving

**Authors:** Chunru Lin; Hongxin Zhang; Fenghao Yu; Zhehuan Chen; Tom Griffiths; Yejin Choi; David Held; Chuang Gan

**ID:** 139850\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139850

[Paper](<https://openreview.net/forum?id=0dyy3qodV0>) | [PDF](<https://openreview.net/pdf?id=0dyy3qodV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139850>)

The ability to reason, adapt, and creatively solve problems under unexpected challenges is essential for robots operating in real\-world environments\. However, current robotic benchmarks primarily emphasize skill\-level execution and provide limited insight into such cognitive reasoning capabilities\. We introduce RoboWits, a bi\-manual robotic benchmark designed to systematically evaluate cognitive reasoning, creative tool use, and robustness to unexpected conditions\. To enable scalable construction of high\-quality reasoning\-centric unexpected scenarios, we propose an automated task generation pipeline formulated as a multi\-agent cooperative framework, comprising agents for seed task generation and verification, metric generation, scene generation, and task mutation\. Using the pipeline, we curated 30 diverse seed tasks and 208 tasks with mutations and graded difficulty across geometry, material, and assembly\-based reasoning\. We benchmark popular robot policies, pre\-trained VLAs, and oracle\-state planners\. Our results reveal a significant performance gap: while pre\-trained VLAs exhibit preliminary success on seed tasks after single\-task fine\-tuning, they struggle to perform on mutated tasks, implying their brittleness in manipulation tasks requiring reasoning, strategy adaptation, and robustness to deceptive or constrained environments\.

## LessMimic: Versatile Humanoid\-Object Interaction with Unified Distance Field Representations

**Authors:** Yutang Lin; Jieming Cui; Yixuan Li; Wei Liang; Baoxiong Jia; Yixin Zhu; Siyuan Huang

**ID:** 149455\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149455

[Paper](<https://openreview.net/forum?id=pxh6UoIlqx>) | [PDF](<https://openreview.net/pdf?id=pxh6UoIlqx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149455>)

Humanoid robots capable of versatile whole\-body interaction with everyday objects represent a central goal of embodied intelligence\. Existing approaches often rely on motion\-reference inputs or task\-specific rewards, coupling policies to particular motion scripts, object geometries, and contact timings\. This limits geometric generalization and flexible interaction control, where simple commands specify motion intent while object geometry determines how contact should be executed\. We introduce LessMimic, a framework for versatile motion\-free\-at\-inference humanoid–object interaction\. At inference, a single whole\-body policy is steered by root commands and an interaction\-type flag instead of motion\-reference inputs, and is conditioned on a compact interaction representation built from short histories of distance\-field\-derived surface distances and local surface directions\. This geometry\-conditioned interface enables command\-steered control while adapting contact behavior to local object geometry\. Through visual distillation, LessMimic further enables egocentric\-depth\-based deployment for MoCap\-free sensing\. Across object scales from 0\.4× to 1\.6×, LessMimic maintains robust performance over four interaction tasks, including PickUp, SitStand, Push, and Carry, where motion\-conditioned baselines degrade sharply away from the training scale\. Beyond single\-task evaluation, LessMimic further supports sequential composition of heterogeneous interaction skills, attaining 62\.1% success on five\-task sequences and retaining 23\.5% success at 15 task instances\. By grounding interaction control in local geometry rather than motion references, LessMimic provides a path toward geometry\-generalizable, command\-steerable humanoid–object control with heterogeneous skill composition\.

## NoTVLA: Semantics\-Preserving Robot Adaptation via Narrative Action Interfaces

**Authors:** Zheng Huang; Mingyu Liu; Xiaoyi Lin; Muzhi Zhu; Ye Lin; Canyu Zhao; Zongze Du; Xiaoman Li; Hao Zhong; Yiduo Jia; Hao Chen; Chunhua Shen

**ID:** 151525\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151525

[Paper](<https://openreview.net/forum?id=a0zV7TNKuT>) | [PDF](<https://openreview.net/pdf?id=a0zV7TNKuT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151525>)

Robot fine\-tuning can improve manipulation success while degrading the semantic structure inherited from large vision\-language pretraining\. This trade\-off limits the reuse of vision\-language\-action \(VLA\) policies in settings that require compositional instructions, camera changes, and coordination with higher\-level agents\. We present \\textbf\{NoTVLA\}, a semantics\-preserving robot adaptation framework that replaces dense low\-level action supervision with a sparse narrative action interface\. NoTVLA converts demonstrations into sparse, semantically meaningful waypoints, grounds each decision with a task\-relevant visual anchor and depth value, and reconstructs executable motion through a deterministic detokenizer\. The resulting interface keeps the autoregressive vision\-language backbone close to its pretrained prediction format while delegating high\-frequency control to a transparent motion\-rendering stage\. We evaluate this design through matched and backbone\-family comparisons, semantic retention probes, semantic out\-of\-distribution manipulation tasks, camera and depth perturbations, and deployment\-oriented efficiency analysis\. The results suggest that robot adaptation should be judged not only by task success, but also by how much task\-relevant semantic competence is preserved during fine\-tuning\.

## SatNav: A Scalable Benchmark for Long\-Horizon UAV Vision\-Language Navigation from Satellite Imagery

**Authors:** Jiajun Jiang; Chunliang Hua; Zichun Chen; Yanxing Wu; Zeyuan YANG; Jie Song; Xiao Hu

**ID:** 139165\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139165

[Paper](<https://openreview.net/forum?id=hOEniyN6hl>) | [PDF](<https://openreview.net/pdf?id=hOEniyN6hl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139165>)

Urban uncrewed aerial vehicle \(UAV\) vision\-language navigation \(VLN\) requires agents to follow instructions across extended urban spaces, inherently demanding long\-term memory and geospatial grounding\. However, scaling existing benchmarks remains difficult because of their reliance on costly reconstructed 3D assets, limiting geographic diversity and episode scale\. To address this, we introduce SatNav, a scalable, long\-horizon UAV VLN benchmark built from high\-resolution satellite imagery\. SatNav targets city\-level navigation missions and uses satellite crops as approximations of UAV nadir views for visual observations\. Through an automated cue\-to\-episode pipeline, SatNav constructs 118K episodes from 59 scenes across 18 cities, with an average trajectory length of 379 m\. To stress\-test long\-horizon memory and geospatial reasoning, SatNav defines three task families: Boundary, Landmark, and Route, targeting loop progress tracking, landmark\-based spatial grounding, and route following with counting cues\. Benchmarking classical and recent large vision language model \(LVLM\) based VLN agents on SatNav shows that city\-scale navigation remains challenging\. We further introduce SwiftVLN, a modular framework with switchable memory components, and conduct systematic memory\-design ablations\. Finally, satellite\-to\-UAV transfer experiments show that satellite\-trained navigation models can operate on real\-flight UAV observations, showing the practical relevance of SatNav\.

## Unbiased First\-Order Randomized Smoothing for Differentiable Simulation

**Authors:** Mathis SCHEFFLER; Wilson Jallet; Cordelia Schmid; Justin Carpentier

**ID:** 150375\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150375

[Paper](<https://openreview.net/forum?id=iXltG66DNN>) | [PDF](<https://openreview.net/pdf?id=iXltG66DNN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150375>)

Computing informative gradients through nonsmooth physical models—such as those involving hard contact or bouncing—is a cornerstone challenge in robotics and machine learning\.  Randomized smoothing offers a principled way to obtain well\-behaved surrogate gradients, yet standard first\-order estimators of these smoothed gradients are biased whenever the underlying function is discontinuous\.  In this work, we show that this bias arises from neglected discontinuity contributions and derive a corrected first\-order formula that eliminates it\.  When the discontinuity structure is known, we exploit it to build discontinuity\-aware gradient estimators, which we instantiate for differentiable collision detection on 3D meshes\.  When it is unknown, we propose a complementary estimator that leverages classical gradients to reduce variance\.  We validate this estimator on nonsmooth trajectory optimization instances, demonstrating variance reductions of several orders of magnitude over zeroth\-order baselines while remaining unbiased under discontinuities where standard first\-order estimators fail\.

## ActQuant: Sub\-4\-bit Action\-Guided Quantization for Vision\-Language\-Action Models

**Authors:** Arash Akbari; Arman Akbari; Masih Eskandar; Qitao Tan; Yixiao Chen; Jingwu Luo; Bertha Pangaribuan; Liyun Zhang; Jennifer Dy; Geng Yuan; Xue Lin; Gaowen Liu; Stratis Ioannidis; Yanzhi Wang

**ID:** 155159\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155159

[Paper](<https://openreview.net/forum?id=7qAjVpGyah>) | [PDF](<https://openreview.net/pdf?id=7qAjVpGyah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155159>)

Vision\-Language\-Action \(VLA\) models exhibit remarkable action generation for embodied intelligence, but their heavy compute and memory demands strain deployment on edge robotic platforms\. Aggressive weight quantization \(e\.g\., sub\-4\-bit\) is the natural lever, yet existing post\-training quantization \(PTQ\) methods suffer severe performance degradation in this regime\. To address this, we introduce \\textbf\{ActQuant\}, an action\-guided mixed\-precision PTQ framework that operates in two stages: \(1\) an inter\-tensor allocator that assigns each weight matrix a single bit\-width based on how much it contributes to predicting the agent's actions; \(2\) an intra\-tensor scale optimizer tunes per\-block quantization scales using action\-aware curvature, so that dynamic range is concentrated on the weights most influential for control\. We evaluate ActQuant both in simulation and on a real\-world 6\-DoF UR3 arm\. On the LIBERO benchmark, ActQuant achieves state\-of\-the\-art success rates across the sub\-4\-bit regime, retaining 94\.95\\% on OpenVLA\-OFT and 94\.8\\% on $\\pi\_\{0\.5\}$ at 3\.0 bits\-per\-weight \(vs\. 96\.9\\% and 97\.0\\% for the half\-precision baselines, respectively\), while reducing backbone memory by up to $5\.3\\times$; on the physical robot, ActQuant successfully maintains the baseline's success rate\. To our knowledge, ActQuant is the first PTQ approach that can quantize VLA models below four bits while retaining practical task success with very limited calibration data\.

## Retrieve\-then\-Rerank Inference for Vocabulary\-Based End\-to\-End Driving

**Authors:** Hyunjun Kim; Donggue Kim; Kichun Jo

**ID:** 154122 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G78WOdoS5c>) | [PDF](<https://openreview.net/pdf?id=G78WOdoS5c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154122>)

Vocabulary\-based end\-to\-end driving selects a future trajectory from a fixed candidate set, enabling explicit comparison among multiple plausible plans\. However, existing planners typically process the scene\-invariant trajectory vocabulary and the scene\-dependent driving context together in a single online forward pass\. This repeatedly recomputes reusable candidate\-side representations and applies expensive scene\-conditioned evaluation to the full vocabulary\. We revisit vocabulary\-based planning as a retrieve\-then\-rerank problem, where the trajectory vocabulary is a static candidate collection, lightweight scene cues form a retrieval query, and the scene\-conditioned evaluator acts as a reranker\. Based on this view, we propose $\\textbf\{Decoupled Retrieval\-Style Inference \(DRSI\)\}$, centered on two modules: $\\textbf\{Offline Candidate Indexing \(OCI\)\}$ and \\textbf\{Scene\-aware Candidate Retrieval \(SCR\)\}\. OCI caches scene\-invariant trajectory embeddings offline, while SCR retrieves a compact set of route\-consistent and dynamically reachable candidates online\. The scene\-conditioned evaluator is then applied only to this retrieved subset for fine\-grained reranking\. Experiments on NAVSIM show that DRSI substantially improves the latency\-\-quality trade\-off without adding trajectory proposals or increasing evaluator complexity\. Compared with the Hydra\-MDP\+\+ baseline, our large DRSI model achieves 86\.1 EPDMS on NAVSIM v2 with 23\.9 ms latency, corresponding to about a 6\.8$\\times$ speedup\. On the challenging navhard split, DRSI further improves EPDMS from 37\.6 to 40\.2\. These results demonstrate that retrieval\-style decoupling is an effective inference principle for efficient vocabulary\-based end\-to\-end driving\.

## Can We Model the Artifacts Explicitly? Disentangle Artifacts via Pairwise Edit Relations for Image Manipulation Localization

**Authors:** Xuekang Zhu; Kaiwen Feng; Ruifeng Wang; Xiwen Wang; Xiaochen Ma; Bo Du; Changjiang Jiang; Chenfan Qu; Songyu Ye; Jian liu; Ji\-Zhe, Knight Zhou

**ID:** 155638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=45xs8n0hj4>) | [PDF](<https://openreview.net/pdf?id=45xs8n0hj4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155638>)

Image Manipulation Localization \(IML\) is commonly formulated as a fully supervised learning task that estimates the optimal manipulation mask $y$ for a given image $x$\. In this work, we first reveal the latent nature of artifacts and thus reinterpret IML as a latent\-variable problem, $P\(y\| x\)=\\int P\(y\|z\) P\(z\|x\)dz$, where $z$ denotes the artifacts\. Following this interpretation, we pinpoint the cause for the current IML models' insufficiency as their implicit artifacts modeling strategy, highlighting the necessity of modeling $z$ in an explicit manner\.  Without direct labels, feature disentanglement is the most appropriate solution for this explicit modeling\. Accordingly, we propose a two\-stage learning paradigm with the Pairwise Artifacts Learning \(PAL\) and Standard Localization \(SL\) phases to estimate $P\(z\|x\)$ and $P \(y\|z\)$ via edit relations\. To support our edit\-relation\-based learning, we further curate EditGroup\-45K, a source\-anchored dataset organized into edit groups for pair construction\. Extensive experiments show that our PAL paradigm yields consistent improvements across diverse IML architectures, and empirical analyses further verify that PAL does capture artifacts explicitly through feature disentanglement\. Code and dataset will be publicly available\.

## CSO: Refining Robotic Policies via Skill Distribution Alignment and Skill\-Grained Optimization

**Authors:** Zhiyuan Xiang; Xiang Deng; Wanjie Tao; Xu Chen; Zhao Jielun; Weili Guan

**ID:** 153130\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153130

[Paper](<https://openreview.net/forum?id=NgYZ9EHKT6>) | [PDF](<https://openreview.net/pdf?id=NgYZ9EHKT6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153130>)

_Abstract unavailable from the accessible public sources._

## HaNDF: Object\-Conditioned Geometric Neural Hand Distance Fields

**Authors:** Zuhao Liu; Melih Darcan; Zhengdi Yu; Riza Alp Guler; Tolga Birdal

**ID:** 149700\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149700

[Paper](<https://openreview.net/forum?id=o6Ags8RThf>) | [PDF](<https://openreview.net/pdf?id=o6Ags8RThf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149700>)

We propose, HaNDF, object\-conditional neural distance fields as data\-driven priors for modeling the plausible hand–object configurations, in the product manifold of hand articulations\. While recent unconditional generative priors showed success in modeling human pose, hands are versatile articulated bodies often found in interaction with other objects\. This makes it crucial to develop a generative prior which can model the plausible hand poses conditioned on the object under interaction\. To this end, our HaNDF proposes a geometry\-aware, object\-conditioned neural distance field, representing the plausible articulations in the zero\-level set of a conditional field\. We leverage tools from  Riemannian geometry to \(i\) represent plausible hands in the zero level\-set of an object\-induced neural field, and \(ii\) project a given pose onto the this field\. Using HaNDF, we can also optimize for a plausible condition, determining the object under interaction\. Our extensive evaluations demonstrate that our HaNDF provides a flexible and powerful prior for hand–object interaction, suitable for applications such as pose refinement, reconstruction under occlusion, and physically plausible manipulation synthesis\.

## DSSP: Diffusion State Space Policy  with Hierarchical Full\-History Conditioning

**Authors:** Zhiyuan Guan; Jianshu Hu; Han Fang; Yunpeng Jiang; Yize Huang; Shujia Li; Xiao Li; Yutong Ban

**ID:** 151450\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151450

[Paper](<https://openreview.net/forum?id=aaSIMuY19G>) | [PDF](<https://openreview.net/pdf?id=aaSIMuY19G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151450>)

Diffusion\-based imitation learning has shown strong promise for robot manipulation\. However, most existing policies condition only on the current observation or a short window of recent observations, limiting their ability to resolve history\-dependent ambiguities in long\-horizon tasks\. To address this, we introduce DSSP, a history\-conditioned Diffusion State Space Policy that enables efficient, full\-history conditioning for robot manipulation\. Leveraging the continuous sequence modeling properties of State Space Models \(SSMs\), our history encoder effectively compresses the entire observation stream into a compact context representation\. To ensure this context preserves critical information regarding future state evolution, the encoder is optimized with a dynamics\-aware auxiliary training objective\. This high\-level context representation is then seamlessly fused with recent state observations to form a hierarchical conditioning mechanism for action generation\. Furthermore, to maintain architectural consistency and minimize GPU memory overhead, we also instantiate the diffusion backbone itself using an SSM\. Extensive experiments across simulation benchmarks and real\-world manipulation tasks show that DSSP achieves state\-of\-the\-art performance with a significantly smaller model size, demonstrating superior efficiency of the hierarchical conditioning in capturing crucial information as the history length increases\.

## Think Densely, Act Sparsely: Latent Expert Cognitive Chains for Vision\-Language\-Action Autonomous Driving

**Authors:** Jie Wang; Guang Li; Zhijian Huang; Jinlong Li; Chenxu Dang; Hangjun Ye; Yahong Han; Long Chen

**ID:** 149058\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149058

[Paper](<https://openreview.net/forum?id=tBqhs731Ow>) | [PDF](<https://openreview.net/pdf?id=tBqhs731Ow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149058>)

_Abstract unavailable from the accessible public sources._

## A Unified Perturbation Framework for Analyzing Leaderboard Stability and Manipulation

**Authors:** Hosna Oyarhoseini; Jimmy Lin; Amir\-Hossein Karimi

**ID:** 148880\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148880

[Paper](<https://openreview.net/forum?id=uUAHsLfCCm>) | [PDF](<https://openreview.net/pdf?id=uUAHsLfCCm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148880>)

Evaluation leaderboards such as LMArena play a central role in benchmarking large language models by aggregating pairwise human preferences into model rankings, but the robustness of these rankings is still poorly understood\. We present a unified perturbation framework for analyzing Bradley–Terry leaderboards under structured data modifications using influence\-based approximations\. Our framework studies three match\-level perturbations—dropping matches, adding matches, and flipping match outcomes—along with player removal\. We evaluate their effects on top\-k membership, global ranking consistency measured by Kendall’s tau, and confidence\-interval uncertainty\. Across Chatbot Arena and six additional pairwise\-comparison datasets, we show that modern leaderboards are non\-robust across all three objectives: targeted perturbations affecting less than 1% of the data can change the top\-ranked model, degrade global ranking consistency, and alter confidence intervals\. We summarize these effects using normalized dataset\-level robustness scores that compare fragility across leaderboard designs\. We further show that influence scores enable efficient targeted manipulation, promoting or demoting specific models with fewer actions than prior manipulation baselines, while also identifying additional matchups that reduce uncertainty for target models\. Finally, player\-removal analysis shows that removing influential models can induce broad reordering, highlighting model deprecation as a source of the leaderboard illusion\. These findings reveal fundamental limitations of current leaderboard designs and motivate more robust evaluation protocols\.

## Embodied AI Cannot Scale Without Open\-Source Distributed Geometric Optimization Backends for Life\-Scale Egocentric Data

**Authors:** Senthil Palanisamy; Abhishek Anand; Satpal S Rathore; Pratyush K Patnaik; Shubhanshu Khatana

**ID:** 140071\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140071

[Paper](<https://openreview.net/forum?id=QD4xn09i0b>) | [PDF](<https://openreview.net/pdf?id=QD4xn09i0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140071>)

This position paper argues that the embodied AI community must invest in open\-source, distributed geometric backends for egocentric pose estimation, and that the current bias toward end\-to\-end neural solutions is creating a data infrastructure deficit that will bottleneck the next generation of Vision\-Language\-Action \(VLA\) models and radiance field reconstruction\. While neural frontends \(DUST3R, VGGT, DepthAnythingV2\) achieve remarkable local spatial accuracy, we show that no open source existing system for ego centric data, neural or classical, delivers metrically consistent global pose trajectories over the 100,000 frame "life scale" sequences that modern embodied AI applications require\. This gap is structural, not incidental: fixed window neural architectures cannot enforce global consistency by construction, rolling shutter distortion compounds systematically over long horizons in ways feedforward networks cannot model, and every production system that does work at this scale is proprietary and hardware locked\. We formally define the Open Distributed Geometric Optimization Backend, a hybrid architecture combining uncertainty weighted neural priors with distributed bundle adjustment and spline continuous trajectory parameterization, and argue it is the necessary open source infrastructure to generate the metrically grounded training data on which future end to end models depend\.

## Simulation\-Informed Diffusion for Decentralized Multi\-robot Motion Planning

**Authors:** JINHAO LIANG; Sven Koenig; Ferdinando Fioretto

**ID:** 150165\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150165

[Paper](<https://openreview.net/forum?id=kBwVVfWwux>) | [PDF](<https://openreview.net/pdf?id=kBwVVfWwux>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150165>)

Decentralized multi\-robot motion planning requires each robot to generate collision\-free trajectories from local observations, without global sensing or reliable communication\. However, most existing planners, whether classical or learning\-based, generate trajectories from a static snapshot of the local observation, which limits their ability to anticipate the future behavior of neighboring robots\. This limitation is critical as the number of robots increases and the environment becomes more cluttered\. To overcome this challenge, this paper introduces Simulation\-Informed Diffusion \(SID\), a decentralized framework built on constraint\-aware diffusion models \(CADM\)\. SID first uses CADM to simulate the future trajectories of neighboring robots from their currently observed states, and then uses the same CADM to plan each robot's own trajectory under safety constraints informed by these simulations\. Crucially, the accurate simulation of neighbors enables a minimal communication scheme that triggers coordination only when necessary in highly congested scenarios\. Experiments across diverse environments show that SID consistently outperforms baseline methods in terms of planning effectiveness and constraint satisfaction, and scales to scenarios with 100 robots and 160 obstacles\.

## Scaling Whole\-Body Loco\-Manipulation through Compositional Data Synthesis

**Authors:** Yufei Zhu; Runyi Yu; Yinhuai Wang; Aoru Xue; Qin Sun; Qingqiu Huang; Xinge ZHU; Zhiyang \(Frank\) Dou; Yuexin Ma

**ID:** 149896\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149896

[Paper](<https://openreview.net/forum?id=mQGMIJEWTN>) | [PDF](<https://openreview.net/pdf?id=mQGMIJEWTN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149896>)

Acquiring diverse whole\-body dexterous manipulation data for humanoids remains a fundamental challenge in character animation and robotics\. Existing pipelines rely on expensive mocap data collected from many subjects and require retargeting to a unified humanoid shape, which limits scalable data construction and often yields physically inconsistent interactions \(e\.g\., unstable contacts\)\. We present \\textbf\{ManipSynth\}, a unified framework for whole\-body loco\-manipulation synthesis, with compositional generation of sparse whole\-body motion, object\-centric grasp anchors, and contact\-aware interaction transitions\. Then, we scale data generation through randomized pre\-grasp motions, grasp poses, and object trajectories\. ManipSynth achieves approximately 5$\\times$ higher contact coverage and lower average penetration than OMOMO across representative objects\. To test whether better contact\-consistent data improve scalable control learning, we train \\textbf\{ManipTracker\}, a general\-purpose Humanoid\-Object Interaction \(HOI\) tracking policy, on purely synthetic demonstrations\. Under the same object set, number of training trajectories, the same ManipTracker trained on ManipSynth demonstrates stronger generalization than when trained on mocap data, while achieving over 90\\% training success\.

## Point Tracking Improves World Action Models

**Authors:** Jiarui Guan; Wenshuai Zhao; Yue Pei; Ziliang Chen; Arno Solin; Juho Kannala

**ID:** 149146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sVFAjZ4nrj>) | [PDF](<https://openreview.net/pdf?id=sVFAjZ4nrj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149146>)

Robot policy learning benefits from world\-action models that capture environment dynamics, but pixel\-level prediction entangles dynamics with nuisance factors such as lighting and texture, making learned representations vulnerable to task\-irrelevant visual variation\. We propose JOPAT, a JOint Pixel\-And\-Track World\-Action Model that predicts latent visual observations, 2D point tracks with visibility, and actions in a single denoising diffusion transformer\. The key insight is that tracks provide an explicit representation of motion that captures long\-horizon dynamics and remains robust under occlusion or partial out\-of\-frame motion, offering greater utility than modeling pixel appearance alone\. On LIBERO and real\-world LeRobot tasks, JOPAT improves over pixel\-based baselines, with the largest gains on long\-horizon tasks involving occlusion, object interaction, and off\-screen motion\.

## nuReasoning: A Reasoning\-Centric Dataset and Benchmark for Long\-Tail Autonomous Driving

**Authors:** Zhiyu Huang; Johnson Liu; Rui Song; Zewei Zhou; Ruining Yang; Yun Zhang; Tianhui Cai; Hanyin Zhang; Mingxuan Gao; Valeria Xu; Jiali Chen; Yishan Shen; Yiluan Guo; Tony Qi; Jiaqi Ma

**ID:** 139335 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WDTaPI01Fw>) | [PDF](<https://openreview.net/pdf?id=WDTaPI01Fw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139335>)

Reasoning is essential for autonomous driving \(AD\) in long\-tail scenarios, where vehicles must apply commonsense knowledge, understand spatial relations, infer agent interactions, and make safe decisions\. However, existing AD datasets and benchmarks mainly target perception, prediction, or planning, and provide limited supervision for reasoning over realistic long\-tail driving scenes\. We introduce nuReasoning, a large\-scale real\-world dataset and benchmark for reasoning\-centric AD\. Following the lineage of nuScenes and nuPlan, nuReasoning advances real\-world AD datasets and benchmarks toward structured reasoning in long\-tail driving scenarios\. It contains 20K 20\-second clips collected across multiple cities, with synchronized multi\-camera images, LiDAR, HD maps, object annotations, and complementary forms of human\-verified reasoning annotations: Spatial Reasoning, Decision Reasoning, and Counterfactual Reasoning\. Unlike prior datasets that focus primarily on visual question answering, nuReasoning supports both reasoning evaluation and planning evaluation, enabling a direct study of how reasoning supervision affects driving performance\. Experiments show that fine\-tuning VLMs on nuReasoning substantially improves driving\-specific question answering, while incorporating reasoning supervision into VLA training improves planning performance even when textual reasoning outputs are disabled at inference time\. These results establish nuReasoning as a foundation for evaluating and improving robust, interpretable, reasoning\-driven AD systems in realistic long\-tail settings\.

## FreeAct: Demonstration\-Free Robot Adaptation via Action\-Grounded Generated Videos

**Authors:** Zhe\-Han Mo; Jia\-Ning Li; Jiaxi Song; Meng\-Hao Guo; Shi\-min Hu

**ID:** 148622 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wNWxVVntG2>) | [PDF](<https://openreview.net/pdf?id=wNWxVVntG2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148622>)

Adapting pretrained Vision\-Language\-Action \(VLA\) policies to new deployment environments typically requires collecting expert demonstrations in each target domain, which is costly and difficult to scale\. In this paper, we present FreeAct, a framework for demonstration\-free robot adaptation that converts generated videos into physically grounded supervision\. However, a key challenge is that generated manipulation videos, while visually plausible, often contain embodiment artifacts and kinematic inconsistencies that make direct inverse\-dynamics labeling unreliable\. FreeAct addresses this challenge by learning a discrete latent action space from large\-scale multi\-lab robot videos and aligning it with camera\-frame end\-effector SE\(3\) motion and gripper\-state changes\. The resulting latent action tokenizer captures task\-relevant motion while reducing reliance on embodiment\-specific visual artifacts, enabling generated target\-domain videos to be pseudo\-labeled with reliable latent action tokens\. These tokens are first injected into VLA pretraining and then used, together with source\-domain action supervision, to adapt the policy to unseen environments\. Empirically, FreeAct improves success from 2\\% to 57\\% under target\-domain shift using generated videos alone, and further to 74\\% through MLLM\-guided self\-evolution on the policy's own rollouts, closing the adaptation loop without expert demonstrations\. Further analysis shows that the learned latent action space forms a kinematically structured and transferable representation, establishing generated videos as a scalable source of supervision for robot manipulation\.

## SimWorld Studio: Automatic Environment Generation with Evolving Coding Agent for Embodied Agent Learning

**Authors:** Haoqiang Kang; Xiaokang Ye; Yuhan Liu; Siddhant Hitesh Mantri; Lingjun Mao; James Fleming; Drishti Regmi; Lianhui Qin

**ID:** 154877 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ADNeVcivNm>) | [PDF](<https://openreview.net/pdf?id=ADNeVcivNm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154877>)

LLM/VLM\-based digital agents have advanced rapidly thanks  to scalable sandboxes for coding, web navigation, and computer use, which provide rich interactive training grounds\. In contrast, embodied agents still lack abundant, diverse, and automatically generated 3D environments for interactive learning\. Existing embodied simulators rely on manually crafted scenes or procedural templates, while recent LLM\-based 3D generation systems mainly produce static scenes rather than deployable environments with verifiable tasks and standard learning interfaces\. We introduce SimWorld Studio, an open\-source platform built on Unreal Engine 5 for generating evolving embodied learning environments\. At its core is SimCoder, a tool/skill\-augmented coding agent that writes and executes engine\-level code to construct physically grounded 3D worlds from language/image instructions\. SimCoder self\-evolves by using verifier feedback \(e\.g\., compilation errors, physics checks, VLM critiques\) to revise environments and autonomously add reusable tools and skills to its library\. Generated worlds are exported as Gym\-style environments for embodied agent learning\. SimWorld Studio further enables co\-evolution between environment generation and embodied learning: agent performance feedback guides SimCoder to generate adaptive curricula near the learner’s capability frontier, so that environments become increasingly challenging as the embodied agent improves\. Three case studies on embodied navigation show that self\-evolution improves generation reliability, generated environments substantially improve embodied agent performance that generalizes to unseen benchmarks, and co\-evolution yields an 18\-point success\-rate gain over fixed\-environment learning and a 40\-point gain over an untrained agent\.

## World–Value–Action Model: Implicit Planning for Vision–Language–Action Systems

**Authors:** Runze Li; Hongyin Zhang; Junxi Jin; Qixin Zeng; Zifeng Zhuang; Yiqi Tang; Shangke Lyu; Donglin Wang

**ID:** 150951 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e5WXe18VPv>) | [PDF](<https://openreview.net/pdf?id=e5WXe18VPv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150951>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for building embodied agents that ground perception and language into action\.  However, most existing approaches rely on direct action prediction, lacking the ability to reason over long\-horizon trajectories and evaluate their consequences, which limits performance in complex decision\-making tasks\. In this work, we introduce $\\textbf\{World\-Value\-Action \(WAV\)\} $ model, a unified framework that enables implicit planning in VLA systems\.  Rather than performing explicit trajectory optimization, WAV model learn a structured latent representation of future trajectories conditioned on visual observations and language instructions\.  A learned world model predicts future states, while a trajectory value function evaluates their long\-horizon utility\.  Action generation is then formulated as inference in this latent space, where the model progressively concentrates probability mass on high\-value and dynamically feasible trajectories\. We provide a theoretical perspective showing that planning directly in action space suffers from an exponential decay in the probability of feasible trajectories as the horizon increases\.  In contrast, latent\-space inference reshapes the search distribution toward feasible regions, enabling efficient long\-horizon decision making\. Extensive simulations and real\-world experiments demonstrate that the WAV model consistently outperforms state\-of\-the\-art methods, achieving significant improvements in task success rate, generalization ability, and robustness, especially in long\-horizon and compositional scenarios\.

## SUGAR: A Scalable Human\-Video\-Driven Generalizable Humanoid Loco\-Manipulation Learning Framework

**Authors:** Tianshu Wu; Xiangqi Kong; Yue Chen; Qize Yu; Hang Ye; Jia Li; Yizhou Wang; Hao Dong

**ID:** 149498\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149498

[Paper](<https://openreview.net/forum?id=pgPiH1SLrT>) | [PDF](<https://openreview.net/pdf?id=pgPiH1SLrT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149498>)

_Abstract unavailable from the accessible public sources._

## PO\-PDDL: Learning Symbolic POMDPs from Visual Demonstrations for Robot Planning Under Uncertainty

**Authors:** Wenjing Tang; Jin Xuanjin; Yuan Liu; RenMing Huang; Cewu Lu; Panpan Cai

**ID:** 151838 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XYgtVaASQv>) | [PDF](<https://openreview.net/pdf?id=XYgtVaASQv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151838>)

Real\-world robot task planning must operate under both stochastic action execution and partial observability, yet constructing Partially Observable Markov Decision Process \(POMDP\) models for real robotics domains remains difficult and labor\-intensive\.  We introduce PO\-PDDL, a symbolic formulation of POMDPs that preserves the relational structure and LLM\-friendly syntax of the Planning Domain Definition Language \(PDDL\), while explicitly modeling partial observability, stochasticity, and beliefs\.  Building on this formulation, we propose a demonstration\-driven pipeline for learning PO\-PDDL models\. The proposed method reconstructs latent symbolic state trajectories from real\-robot execution videos, identifies partial observability via inconsistencies between inferred states and visual observations, and learns stochastic transition and observation models accordingly\.  The resulting PO\-PDDL domains are reusable across tasks and enable online belief\-space planning under both perception and execution uncertainty\. Experiments on real\-world long\-horizon manipulation tasks show that our method consistently outperforms existing PDDL and POMDP model\-learning approaches, achieving robust task planning under uncertainty with significantly lower planning cost\.

## RoboAlign\-R1: Distilled Multimodal Reward Alignment for Robot Video World Models

**Authors:** Hao Wu; Yuqi Li; Yuan Gao; Fan Xu; Fan Zhang; Kun Wang; Penghao Zhao; Qiufeng Wang; Yizhou Zhao; Weiyan Wang; YingLi Tian; Xian Wu; Xiaomeng Huang

**ID:** 150692 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gDww59vSKZ>) | [PDF](<https://openreview.net/pdf?id=gDww59vSKZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150692>)

Existing robot video world models are typically trained with low\-level objectives such as reconstruction and perceptual similarity, which are poorly aligned with the capabilities that matter most for robot decision making, including instruction following, manipulation success, and physical plausibility\. They also suffer from error accumulation in long\-horizon autoregressive prediction\. We present RoboAlign\-R1, a framework that combines reward\-aligned post\-training with stabilized long\-horizon inference for robot video world models\. We construct RobotWorldBench, a benchmark of 10,000 annotated video\-instruction pairs collected from four robot data sources, and train a multimodal teacher judge, RoboAlign\-Judge, to provide fine\-grained six\-dimensional evaluation of generated videos\. We then distill the teacher into a lightweight student reward model for efficient reinforcement\-learning\-based post\-training\. To reduce long\-horizon rollout drift, we further introduce Sliding Window Re\-encoding \(SWR\), a training\-free inference strategy that periodically refreshes the generation context\. Under our in\-domain evaluation protocol, RoboAlign\-R1 improves the aggregate six\-dimension score by 10\.1% over the strongest baseline, including gains of 7\.5% on Manipulation Accuracy and 4\.6% on Instruction Following; these ranking improvements are further supported by an external VLM\-based cross\-check and a blinded human study\. Meanwhile, SWR improves long\-horizon prediction quality with only about 1% additional latency, yielding a 2\.8% gain in SSIM and a 9\.8% reduction in LPIPS\. Together, these results show that reward\-aligned post\-training and stabilized long\-horizon decoding improve task consistency, physical realism, and long\-horizon prediction quality in robot video world models\.

## Grasp\-Then\-Plan with Failure Attribution: A Closed Two\-Stage Framework for Precise and Generalizable Robotic Manipulation

**Authors:** Jiahao Xu; Peiyuan Wang; Hanzhuo Zhang; Zihao Yu; Tianyu Fu; Hao Chen; Xuanhao Xiang; Zixuan Li; Jianbo Yu; Chenchen Fu; Wanyuan Wang

**ID:** 155467\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155467

[Paper](<https://openreview.net/forum?id=5Ny6yPiYA2>) | [PDF](<https://openreview.net/pdf?id=5Ny6yPiYA2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155467>)

In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial\-and\-error\. To enable efficient long\-horizon manipulation, we propose GTP\-FA \(Grasp\-Then\-Plan with Failure Attribution\), a task\-oriented two\-stage ‘grasp\-then\-plan’ framework that generates grasp candidates and performs downstream motion planning conditioned on the selected grasp\. Given a failed manipulation trajectory, we learn a failure attribution model that generalizes to unseen grasps and produces a stable distribution over failure modes for diagnosis\-guided optimization\. Based on these attribution results, we then optimize both modules in a diagnosis\-driven manner: on the grasping side, we inject task\-level priors and risk penalties into grasp candidate scoring and optimization to suppress unstable or task\-incompatible grasps; on the planning side, we target high\-risk initial states through data collection and fine\-tuning to address genuine planning bottlenecks\. We evaluate the proposed framework in both simulation and real\-robot experiments, and show that GTP\-FA improves the corresponding base learners across RL, IL, diffusion\-policy, and VLA\-based settings, achieving substantially higher overall task success rates\. Project page: here\.

## RecoverBench: A Systematic Benchmark for Error Recovery in Robotic Manipulation

**Authors:** Zijia Tang; Ganlong Zhao; Xingping Chen; Junye Chen; Zihao Mo; Zedi Wang; Guanbin Li

**ID:** 139223\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139223

[Paper](<https://openreview.net/forum?id=dvg6FAMUK7>) | [PDF](<https://openreview.net/pdf?id=dvg6FAMUK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139223>)

Robotic manipulation policies have achieved remarkable success in controlled settings, but they catastrophically fail when execution errors occur\-\-\-dropped objects, collisions, misaligned grasps\. Despite the critical importance of error recovery for real\-world deployment, no existing benchmark systematically evaluates manipulation policies' ability to recover from such errors\. We introduce RecoverBench, the first systematic benchmark for error recovery in robotic manipulation\. We propose a taxonomy of 12 Error Skills organized into 5 Recovery Behavior Groups \(RBGs\), spanning 24 error subtypes across 2 difficulty degrees\. Our Error Skill pipeline automatically generates 1,360 reproducible error scenes from clean demonstration trajectories across 6 manipulation tasks\. Each error scene includes complete simulation state snapshots, environment fingerprints, and RNG states for deterministic reproduction\. Beyond evaluation, RecoverBench also supports recovery\-demo collection and augmentation, and we show that this recovery supervision improves recovery performance\. We evaluate 4 representative manipulation policies on RecoverBench\. Even the best\-performing policy reaches only 48\.6% average recovery success, ranging from 32\.0% on threading to 76\.7% on stack, showing that current methods still lack robust recovery\. These results highlight the need for dedicated recovery evaluation and position RecoverBench as a benchmark for improving recovery robustness in manipulation policies\. Code, data, and evaluation protocols will be released\.

## Latent Barrier Steering: Hierarchical Safety for Generative Planning

**Authors:** Renhao Zhang; Mingzhe Li; Bruno Silva

**ID:** 155636\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155636

[Paper](<https://openreview.net/forum?id=46Wey0MAPk>) | [PDF](<https://openreview.net/pdf?id=46Wey0MAPk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155636>)

We introduce \*Latent Barrier Steering\* \(LBS\), a hierarchical semantic\-to\-path framework for safe flow\-matching\-based generative planning\. Existing control\-barrier\-function \(CBF\) safety filters for diffusion and flow\-matching planners act locally on generated samples, either during sampling or after prediction\. Such repair is effective for small violations, but can struggle when a new constraint blocks the whole selected behavior mode rather than merely perturbing it locally\. LBS decouples behavior selection from path certification through two coordinated interventions: it first steers the generator's behavior latent toward rollouts with larger safety margin, then decodes the steered latent and applies a path\-space CBF quadratic program \(QP\) only for residual violations\. We show that latent steering increases the margin available to the path\-space corrector, yielding finite\-time recovery guarantees and reduced correction burden\. Experiments across navigation and robot end\-effector planning tasks show that LBS preserves safety while improving goal reaching and reducing correction burden compared with path\-level safety filters\.

## Scene\-Adaptive VLA: Efficient Autonomous Driving via Dynamic Layer Routing

**Authors:** YUJIA YANG; Quan Yuan; Fan Jiawei; Yang Li; Tiange Fu; Xiaoyuan Fu; Guiyang Luo; Jinglin Li

**ID:** 152870\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152870

[Paper](<https://openreview.net/forum?id=Pko5Y47PI3>) | [PDF](<https://openreview.net/pdf?id=Pko5Y47PI3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152870>)

_Abstract unavailable from the accessible public sources._

## MorphoGen: Free\-Form XML Evolution for Robot Morphology Design

**Authors:** Hongyuan Su; Yu Zheng; Yong Li

**ID:** 150325\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150325

[Paper](<https://openreview.net/forum?id=iy52QGlh7T>) | [PDF](<https://openreview.net/pdf?id=iy52QGlh7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150325>)

_Abstract unavailable from the accessible public sources._

## Whole\-Body Compliant Control via Learned Force\-Regulation Modules

**Authors:** Diego Aldarondo; Aadhithya Iyer; Daniel Giebisch; Nina Mortensen; Sridhar Pandian Arunachalam; Robert Cochran; Josh Merel

**ID:** 154032\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154032

[Paper](<https://openreview.net/forum?id=GlpxwFNGx2>) | [PDF](<https://openreview.net/pdf?id=GlpxwFNGx2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154032>)

To operate safely and effectively around people, humanoid robots must control the forces they exchange with the world\. Whereas classical impedance and admittance methods shape contact forces precisely, modern reinforcement\-learning controllers typically forgo such regulation in favor of robustness and faithful command tracking\. Incorporating impedance\-style compliance into a performant humanoid whole\-body controller remains an open problem\. We present a framework for learned whole\-body force regulation that approximates the behavior of impedance controllers using only a PD position\-target interface and position encoders\. The framework includes three mechanisms for force regulation: passive joint\-angle compliance via noisy action perturbations, joint\-angle force regulation via perturbation\-\-action blending around a commanded pose, and task\-space force regulation via reward\-shaped tracking of both a virtual forcefield attractor and a commanded pose\. All three share a residual actor\-\-critic recipe, an internal model of proprioception and perturbations, and a policy\-blending procedure that combines multiple experts\. A 6\-DOF body command, optional upper\-body pose, and controllable compliance expose the controllers as reusable low\-level modules that enable compliant interaction and object manipulation across standing, crouching, and walking\. We demonstrate whole\-body teleoperation in simulation and on Sprout, a 27\-DOF bipedal humanoid\.

## Why Cross\-Skeleton Retargeting Is Non\-Identifiable: Structural Limits of Generative Motion Models

**Authors:** Zhiyuan Li; Wenyan Yang; Pekka Marttinen; Joni Pajarinen

**ID:** 155606\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155606

[Paper](<https://openreview.net/forum?id=4KPh2cXttv>) | [PDF](<https://openreview.net/pdf?id=4KPh2cXttv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155606>)

Cross\-skeleton motion generation trains generative models to carry action structure and motion intention from one body to another\. Yet an action\-consistent target motion admits two observationally compatible explanations: source\-preserving transfer and target\-action recovery\. We show that this ambiguity is structural rather than incidental: under standard generative objectives, the source\-conditioned retargeting map is non\-identifiable in sparse heterogeneous motion domains\. Unpaired marginal matching yields \\emph\{gauge non\-identifiability\}: a relative gauge between skeleton\-specific latent spaces allows different source\-conditioned maps to induce the same training evidence\. Sparse paired supervision admits the complementary failure mode, \\emph\{conditional\-mean degeneration\}: ambiguous action\-level pairings drive squared\-error objectives toward a target\-action prototype that is independent of the source clip's motion intention\. To make the missing evidence observable, we introduce \\emph\{Source\-Instance Fidelity\} \(SIF\), a diagnostic that tests whether the source\-side geometry remains visible in the generated target motions after the target skeleton and action are fixed\. Under this diagnostic, standard action\-level success across animal motion domains recurrently coincides with behavior at the \\emph\{source\-blind floor\}, while positive cases localize source\-instance information to auxiliary motion\-space constraints that narrow the observational equivalence class\. The implication is that retargeting requires objectives and evaluations capable of identifying the source\-conditioned map that a retargeting claim asserts\. \[Project page\]\(https://keen\-semolina\-09811d\.netlify\.app/\)\.

## PoSafeNet: Structured Safety Learning via Compositional Projection

**Authors:** Kiwan Wong; Wei Xiao; Daniela Rus

**ID:** 155227 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7K93T7me9y>) | [PDF](<https://openreview.net/pdf?id=7K93T7me9y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155227>)

Safe robot learning often involves multiple heterogeneous safety constraints that cannot always be satisfied simultaneously\. Existing neural safety layers typically treat multi\-constraint safety as a numerical optimization problem, enforcing all constraints through a single QP\-based projection or relaxing conflicts with slack variables\. This hides the semantic question of which constraints may be sacrificed under conflict inside solver geometry, penalty weights, or a fixed total hierarchy\. We propose PoSafeNet, a poset\-structured composable safety layer that makes these conflict semantics explicit\. PoSafeNet encodes admissible safety override relations as a partial order and realizes each admissible execution by composing closed\-form projections onto CBF\-induced halfspaces\. Across multi\-obstacle navigation, constrained manipulation, and vision\-based autonomous driving, PoSafeNet improves operational feasibility, computational efficiency, and task performance over dQP\-based, slack\-based, and hierarchical safety layers\.

## How to Instruct Your Robot: Dense Language Annotations Power Robot Policy Learning

**Authors:** Bosung Kim; Ruiyi Wang; David Acuna; Jaehun Jung; Alex Trevithick; Brandon Cui; Yejin Choi; Prithviraj Ammanabrolu

**ID:** 150612\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150612

[Paper](<https://openreview.net/forum?id=grxX3mAW7g>) | [PDF](<https://openreview.net/pdf?id=grxX3mAW7g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150612>)

Scaling robot policy learning is bottlenecked by the cost of collecting demonstrations: datasets at modern scale require thousands of skilled\-operator hours on dedicated robot hardware\. The language description paired with these demonstrations does not face the same bottleneck\-\-\-a single short task label is cheap, but it also leaves implicit spatial relations, object interactions, embodiment state, and subgoal structure that the pixels already contain\.  We treat \\emph\{language density\} as a cheap lever for amplifying signal in a fixed demonstration corpus; whereas prior dense\-language work in robotics commits to a single caption style, we instead ask which kind of dense language helps each task and learn to deliver it at deployment\. We realize this as \\textbf\{DeMiAn\} \(\\textbf\{De\}nse \\textbf\{M\}ult\\textbf\{i\}\-aspect \\textbf\{A\}nnotatio\\textbf\{n\}\) in two stages\. First, an automatic VLM pipeline re\-labels each segment of an existing demonstration along four complementary aspects\-\-\-\\emph\{physical motion\}, \\emph\{scene composition\}, \\emph\{arm pose\}, and segment\-level \\emph\{reasoning\}\-\-\-each surfacing a distinct kind of structure that a one\-line task label omits\. Second, a small learned \\emph\{instructor\}, trained via supervised fine\-tuning, maps the natural language task description and an initial scene snapshot to a task\-appropriate annotation and runs asynchronously alongside the action policy, hiding generation latency behind the rollout\. Applied to over 1M robot manipulation and 50K EgoVerse human\-egocentric videos, with no new demonstrations collected, DeMiAn delivers four findings on a VLA action policy and a video\-based world\-action model:  i\) the learned instructor lifts RoboCasa success by 5 points over the no\-annotation baseline, within 3 points of a per\-task oracle; \(ii\) that oracle is non\-trivial\-\-\-no fixed aspect dominates, and peak performance requires selecting the right annotation aspect per task; \(iii\) the trained system extends usefully to composite tasks under subgoal\-driven prompt switching, and to OOD scenes and objects; and \(iv\) dense annotation improves the compute\-performance frontier in both mid\-training and post\-training, making re\-annotation a practical scaling lever for robot policy learning\.

## SkillOpt: Executive Strategy for Self\-Evolving Agent Skills

**Authors:** Yifan Yang; Ziyang Gong; weiquan Huang; Qihao Yang; Ziwei Zhou; Zisu Huang; Yan Li; Xuemei Gao; Qi Dai; Bei Liu; Kai Qiu; Yuqing Yang; Dongdong Chen; Xue Yang; Chong Luo

**ID:** 151264\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151264

[Paper](<https://openreview.net/forum?id=bgUar0JP5t>) | [PDF](<https://openreview.net/pdf?id=bgUar0JP5t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151264>)

Adapting language agents often means teaching them domain procedures: where to look, which tools to call, how to verify intermediate results, and how to format outputs for a grader\. Existing context\-level adaptation usually either hand\-writes such procedures, generates them once, or lets skill artifacts grow through loosely controlled self\-revision\. We ask whether a skill can instead be trained as the compact external state of a frozen agent\. SkillOpt is a harness\-agnostic text\-space optimizer for a single natural\-language skill document\. It runs the frozen target model on scored rollout batches, uses a separate optimizer model to reflect over success and failure minibatches, proposes structured add/delete/replace edits, ranks them under a textual learning\-rate budget, and accepts a candidate only if it improves held\-out selection performance\. Rejected\-update memory, slow cross\-epoch guidance, and optimizer\-side meta skill make the editing loop behave like bounded training while leaving deployment as a single best\_skill\.md\. Across six direct\-chat benchmarks covering QA, spreadsheets, documents, math, and embodied decision making, \\ourmethod\{\} improves GPT\-\-5\.5 over no skill by 21\.5 points on average, with positive gains on every task and the best measured result on five of six\. Codex\- and Claude\-Code\-style harness runs show that the same artifact remains useful in tool\-backed execution\. Ablations and transfer studies identify validation\-gated, bounded edits and update memory as key to stable, portable skill learning\.

## MoCAR: Motion\-code Coordinate\-aware AutoRegression for Continuous Trajectory Forecasting

**Authors:** Yiming Xu; Hao Cheng; Monika Sester

**ID:** 150057 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l6217PyQb0>) | [PDF](<https://openreview.net/pdf?id=l6217PyQb0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150057>)

Autoregressive generation is natural for language, where predicted tokens can be directly reused as the next prediction state, but trajectory forecasting lacks such a clean token: motion is continuous, multimodal, and expressed in local coordinate frames that evolve with the predicted trajectory\. We present $\\textbf\{MoCAR\}$ \($\\textbf\{Mo\}$tion\-code $\\textbf\{C\}$oordinate\-aware $\\textbf\{A\}$uto$\\textbf\{R\}$egression\), a decoder\-only framework that casts trajectory forecasting as next\-code prediction in a coordinate\-aware continuous latent space\. MoCAR learns a continuous motion\-code space for endpoint\-normalized trajectory segments, where each code jointly captures local trajectory geometry and the reference\-frame transition induced by that segment\. Historical motion codes are used as a teacher\-forced prefix, future codes are generated autoregressively under temporal, map, agent, and mode interactions, and predicted codes persist in latent memory while decoded endpoints update the local scene context\. This enables rollout without trajectory\-space re\-tokenization, trajectory queries, goal candidates, or proposal\-and\-refinement pipelines\. On Argoverse \(AV\) benchmarks, MoCAR achieves top\-tier performance with a simple single\-stage architecture, transfers strongly from AV2 to AV1 in zero\-shot evaluation, and improves on turn\-heavy scenarios\. Ablations confirm that the learned continuous motion\-code space, latent alignment, weak KL regularization, and joint tokenizer\-predictor optimization are essential for stable latent autoregression\.

## DexMirror: Real\-to\-Sim Scene Mirroring for Sim\-to\-Real Dexterous Manipulation

**Authors:** Pu Hua; Zhecheng Yuan; Meng Chu; Peiqi Duan; Huazhe Xu

**ID:** 153302\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153302

[Paper](<https://openreview.net/forum?id=MH1pV5BGQ8>) | [PDF](<https://openreview.net/pdf?id=MH1pV5BGQ8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153302>)

Dexterous manipulation requires large\-scale robot interaction data, yet collecting real\-world demonstrations is costly, while sim\-to\-real transfer remains challenging due to visual and geometric discrepancies\. We present \*\*DexMirror\*\*, a unified real\-to\-sim\-to\-real framework that enables photorealistic simulation learning and reliable deployment for dexterous manipulation\. Our method reconstructs real scenarios using a compositional 3D Gaussian Splatting \(3DGS\) representation with tri\-level optimization, obtaining high\-fidelity objects and background while preserving global scene consistency\. A dexterous\-hand\-centric calibration pipeline, supported by an interactive online platform, further achieves millimeter\-level robot–scene consistency for efficient Gaussian\-simulation alignment\. Built upon the reconstructed scenes, we train privileged policies in simulation and distill them into visuomotor policies operating on rendered 3DGS observations, combined with closed\-loop execution for robust transfer\. Experiments demonstrate accurate real\-to\-sim reconstruction \(F1 score 0\.981\) and strong sim\-to\-real performance, achieving high success rates across six real\-world dexterous manipulation tasks\.

## Revisiting Embodied Chain\-of\-Thought for Generalizable Robot Manipulation

**Authors:** Nan Sun; Yuan Zhang; Yongkun Yang; Wentao Zhao; Peiyan Li; Jun Guo; Wenxuan Song; Pengxiang Ding; Runze Suo; Yifei Su; Xin Xiao; Xinghang Li; Huaping Liu

**ID:** 156114\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156114

[Paper](<https://openreview.net/forum?id=0Hg7gv5gwK>) | [PDF](<https://openreview.net/pdf?id=0Hg7gv5gwK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156114>)

Embodied chain\-of\-thought \(CoT\) aims to bridge linguistic reasoning with robotic control, yet its effective form and integration remain underexplored\. In this paper, we revisit embodied CoT for robotic control at an unprecedented scale\. We curate the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226\.3M samples, and 2592\.5 hours of data\. Through extensive experiments, we show that effective CoT must ground high\-level semantic understaning in concrete linguistic action guidance \-\- such as end\-effector movement and image\-space trajectories \-\- whereas high\-level reasoning alone yields marginal gains\. More importantly, we identify that explicit CoT does not scale reliably as an autoregressive action prefix, suffering from compounding errors during inference\. To address these challenges, we propose ERVLA, a vision\-language\-action \(VLA\) model that effectively leverages linguistic reasoning in generalizable robot manipulation\. ERVLA is trained using a CoT\-dropout strategy, allowing the model to leverage rich reasoning traces during training while predicting actions directly without CoT during inference to bypass autoregressive instability\. This approach enables reliable scaling with increasing pre\-training data\. ERVLA achieves state\-of\-the\-art results on LIBERO\-Plus with an 86\.9% success rate and reaches 53\.2% on VLABench, showcasing superior performance in out\-of\-distribution settings\. Furthermore, ERVLA outperforms competitive state\-of\-the\-art baselines in real\-robot experiments, especially in handling semantic ambiguity and long\-horizon tasks\. Code, data, and model checkpoints will be released\.

## Scene\-Adaptive VLA: Efficient Autonomous Driving via Dynamic Layer Routing

**Authors:** YUJIA YANG; Quan Yuan; Fan Jiawei; Yang Li; Tiange Fu; Xiaoyuan Fu; Guiyang Luo; Jinglin Li

**ID:** 152870\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152870

[Paper](<https://openreview.net/forum?id=Pko5Y47PI3>) | [PDF](<https://openreview.net/pdf?id=Pko5Y47PI3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152870>)

_Abstract unavailable from the accessible public sources._

## MorphoGen: Free\-Form XML Evolution for Robot Morphology Design

**Authors:** Hongyuan Su; Yu Zheng; Yong Li

**ID:** 150325\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150325

[Paper](<https://openreview.net/forum?id=iy52QGlh7T>) | [PDF](<https://openreview.net/pdf?id=iy52QGlh7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150325>)

_Abstract unavailable from the accessible public sources._

## Whole\-Body Compliant Control via Learned Force\-Regulation Modules

**Authors:** Diego Aldarondo; Aadhithya Iyer; Daniel Giebisch; Nina Mortensen; Sridhar Pandian Arunachalam; Robert Cochran; Josh Merel

**ID:** 154032\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154032

[Paper](<https://openreview.net/forum?id=GlpxwFNGx2>) | [PDF](<https://openreview.net/pdf?id=GlpxwFNGx2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154032>)

To operate safely and effectively around people, humanoid robots must control the forces they exchange with the world\. Whereas classical impedance and admittance methods shape contact forces precisely, modern reinforcement\-learning controllers typically forgo such regulation in favor of robustness and faithful command tracking\. Incorporating impedance\-style compliance into a performant humanoid whole\-body controller remains an open problem\. We present a framework for learned whole\-body force regulation that approximates the behavior of impedance controllers using only a PD position\-target interface and position encoders\. The framework includes three mechanisms for force regulation: passive joint\-angle compliance via noisy action perturbations, joint\-angle force regulation via perturbation\-\-action blending around a commanded pose, and task\-space force regulation via reward\-shaped tracking of both a virtual forcefield attractor and a commanded pose\. All three share a residual actor\-\-critic recipe, an internal model of proprioception and perturbations, and a policy\-blending procedure that combines multiple experts\. A 6\-DOF body command, optional upper\-body pose, and controllable compliance expose the controllers as reusable low\-level modules that enable compliant interaction and object manipulation across standing, crouching, and walking\. We demonstrate whole\-body teleoperation in simulation and on Sprout, a 27\-DOF bipedal humanoid\.

## Why Cross\-Skeleton Retargeting Is Non\-Identifiable: Structural Limits of Generative Motion Models

**Authors:** Zhiyuan Li; Wenyan Yang; Pekka Marttinen; Joni Pajarinen

**ID:** 155606\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155606

[Paper](<https://openreview.net/forum?id=4KPh2cXttv>) | [PDF](<https://openreview.net/pdf?id=4KPh2cXttv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155606>)

Cross\-skeleton motion generation trains generative models to carry action structure and motion intention from one body to another\. Yet an action\-consistent target motion admits two observationally compatible explanations: source\-preserving transfer and target\-action recovery\. We show that this ambiguity is structural rather than incidental: under standard generative objectives, the source\-conditioned retargeting map is non\-identifiable in sparse heterogeneous motion domains\. Unpaired marginal matching yields \\emph\{gauge non\-identifiability\}: a relative gauge between skeleton\-specific latent spaces allows different source\-conditioned maps to induce the same training evidence\. Sparse paired supervision admits the complementary failure mode, \\emph\{conditional\-mean degeneration\}: ambiguous action\-level pairings drive squared\-error objectives toward a target\-action prototype that is independent of the source clip's motion intention\. To make the missing evidence observable, we introduce \\emph\{Source\-Instance Fidelity\} \(SIF\), a diagnostic that tests whether the source\-side geometry remains visible in the generated target motions after the target skeleton and action are fixed\. Under this diagnostic, standard action\-level success across animal motion domains recurrently coincides with behavior at the \\emph\{source\-blind floor\}, while positive cases localize source\-instance information to auxiliary motion\-space constraints that narrow the observational equivalence class\. The implication is that retargeting requires objectives and evaluations capable of identifying the source\-conditioned map that a retargeting claim asserts\. \[Project page\]\(https://keen\-semolina\-09811d\.netlify\.app/\)\.

## Normalizing Flows are Capable Trajectory Planners

**Authors:** Zhaohui Wang; Bo Xu; Yingzhi Tang; He Liu; Chen Bai

**ID:** 151040\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151040

[Paper](<https://openreview.net/forum?id=dQpk6rwXp8>) | [PDF](<https://openreview.net/pdf?id=dQpk6rwXp8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151040>)

_Abstract unavailable from the accessible public sources._

## Beyond Appearance Shifts: Task\-Semantic Action Calibration for VLA Models

**Authors:** Shuaijun Liu; Feiyang You; Chengyu Wu; Shuyang Hao; Chenglong Zhang; Jingyao Cai; Xingwei Chen; Li Sun; Ningxin Su

**ID:** 150087 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kp5MjxtJIC>) | [PDF](<https://openreview.net/pdf?id=kp5MjxtJIC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150087>)

_Abstract unavailable from the accessible public sources._

## JODA: Composable Joint Dynamics for Articulated Objects

**Authors:** Tianhong Gao; Cheng Yu; Yinghao Xu; Mengyu Chu

**ID:** 148410 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y49DW1RjHQ>) | [PDF](<https://openreview.net/pdf?id=y49DW1RjHQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148410>)

_Abstract unavailable from the accessible public sources._

## Auditing Instruction Robustness in Vision\-Language\-Action Models via Diversity\-Aware Red Teaming

**Authors:** Baoshun Tong; Haoran He; Yang Liu; Ling Pan; Liang Lin

**ID:** 155145 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=80h2jS8emw>) | [PDF](<https://openreview.net/pdf?id=80h2jS8emw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155145>)

_Abstract unavailable from the accessible public sources._

## HABIT: Human\-Aware Behavior and Interaction Training Dataset for Robot Manipulation

**Authors:** Jaehwi Song; Suchae Jeong; Byeongguk Jeon; Sungdong Kim; Hyungmok Son; Kimin Lee

**ID:** 139828 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2MmzwEyeO2>) | [PDF](<https://openreview.net/pdf?id=2MmzwEyeO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139828>)

Large\-scale demonstration datasets have been central to recent progress in general\-purpose robot policies\. However, existing datasets are collected in human\-absent settings, and policies trained on such data may perform tasks competently in isolation but fail to exhibit human\-aware behaviors\. To address this gap, we introduce HABIT, a large\-scale robot demonstration dataset for human\-present environments\. We organize tasks into three roles capturing distinct modes of human\-robot interaction: Collaborator, where human and robot jointly accomplish a task; Coworker, where they pursue separate tasks in a shared space; and Supervisor, where the human directs the robot\. The dataset comprises over 7K episodes and over 100 hours across 48 tasks\. Our experiments show that training on human\-present data elicits human\-aware behaviors that robot\-only data fails to produce: spatiotemporal synchronization in Collaborator tasks, yielding in Coworker tasks, and gesture grounding in Supervisor tasks\. Moreover, training on HABIT enables rapid adaptation to new human\-robot interaction tasks\. By introducing human presence as a new axis of dataset diversity, HABIT extends robot policies to environments shared with humans\.

## SkiP: When to Skip and When to Refine for Efficient Robot Manipulation

**Authors:** Mingtong Dai; Guanqi Peng; Yongjie Bai; Feng yan; chunjie chen; Lingbo Liu; Liang Lin; Xinyu Wu

**ID:** 151503 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aAOUWKZVnm>) | [PDF](<https://openreview.net/pdf?id=aAOUWKZVnm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151503>)

Previous imitation learning policies predict future actions at every control step, whether in smooth motion phases or precise, contact\-rich operation phases\. This uniform treatment is wasteful: most steps in a manipulation trajectory traverse free space and carry little task\-relevant information, while a small fraction of \\emph\{key\} steps around contacts, grasps, and alignment demand dense, high\-resolution prediction\. We propose a novel \\emph\{action relabeling\} mechanism: at each timestep in a skip segment, we replace the behavior cloning target with the action at the entrance of the next key segment, enabling the policy to leap over redundant steps in a single decision\. The resulting \\textbf\{Skip Policy \(SkiP\)\} dynamically leaps over skip segments and intensively refines actions in key segments, within a single unified network requiring no learned skip planner or hierarchical structure\. To automatically partition demonstrations into key and skip segments without manual annotation, we introduce \\emph\{Motion Spectrum Keying\} \(MSK\), a fast, task\-agnostic procedure that detects local motion complexity from action signals\. Extensive experiments across 72 simulated manipulation tasks and three real\-robot tasks show that SkiP reduces executed steps by $15$\-\-$40\\%$ while matching or improving success rates across various policy backbones\.

