# Reinforcement Learning / Deep RL

强化学习 / 深度强化学习

348 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## How Data Scales in Agentic Reinforcement Learning: Laws and Synthesis Strategies

**Authors:** Bowei He; Yankai Chen; Xiaokun Zhang; Changjiang Han; Ye Yuan; Chong Li; Steve Liu

**ID:** 155951 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1aqj2GSNwA>) | [PDF](<https://openreview.net/pdf?id=1aqj2GSNwA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155951>)

Pretraining scaling laws treat training data as a one\-dimensional quantity: a token count\. Agentic reinforcement learning \(RL\) inherits this scalar abstraction, but modern synthesis pipelines now generate \*tasks\*, \*environments\*, and \*trajectories\* independently and at very different costs, turning data into a structured design space\. This raises a question pretraining never had to answer: given a synthesis budget, \*which axis\* should be scaled? We address this question end\-to\-end with three tightly coupled contributions\. First, we decompose agentic data into four axes \(task, environment, trajectory, reward\) and empirically fit per\-axis scaling laws on Qwen3 models \(4B/8B/14B\) across math, code, and web/UI domains; we observe a robust ordering of per\-axis scaling exponents that holds across model sizes, RL algorithms \(GRPO and PPO\), and domains\. Second, we use the fitted laws as a common ruler to price synthesis methods, capturing each method's efficiency as a per\-axis discount factor and identifying critical synthetic\-to\-real ratios at which collapse begins; these ratios differ by an order of magnitude across axes\. Third, we cast budget allocation as a constrained optimization under our laws and discounts, deriving a Chinchilla\-style compute\-optimal recipe and validating it at held\-out scale\. The empirical results demonstrate that following the recipe yields up to $1\.7\\times$ compute efficiency over the dominant \`\`scale\-the\-trajectories'' practice\.

## Decoupling Time and Risk: Risk\-Sensitive Reinforcement Learning with General Discounting

**Authors:** Mehrdad Moghimi; Anthony Coache; Hyejin Ku

**ID:** 150052 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l7UJw4SS0u>) | [PDF](<https://openreview.net/pdf?id=l7UJw4SS0u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150052>)

Distributional reinforcement learning \(RL\) is a powerful framework increasingly adopted in safety\-critical domains for its ability to optimize risk\-sensitive objectives\. However, the role of the discount factor is often overlooked, as it is typically treated as a fixed parameter of the Markov decision process or tunable hyperparameter, with little consideration of its effect on the learned policy\. In the literature, it is well\-known that the discounting function plays a major role in characterizing time preferences of an agent, which an exponential discount factor cannot fully capture\. Building on this insight, we propose a novel framework that supports flexible discounting of future rewards and optimization of risk measures in distributional RL\. We provide a technical analysis of the optimality of our algorithms, show that our multi\-horizon extension fixes issues raised with existing methodologies, and validate the robustness of our methods through extensive experiments\. Our results highlight that discounting is a cornerstone in decision\-making problems for capturing more expressive temporal and risk preferences profiles, with potential implications for real\-world safety\-critical applications\.

## From Outcome to Representation: Tracing Reasoning Mechanisms through Integrated Policy Gradient

**Authors:** Changming Li; Kaixing Zhang; Yingdong Shi; Haoyun Xu; Zheng Zhang; Kaitao Song; Kan Ren

**ID:** 148296 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yutHGESj05>) | [PDF](<https://openreview.net/pdf?id=yutHGESj05>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148296>)

Large Language Models \(LLMs\) demonstrate remarkable reasoning capabilities, yet the internal mechanisms driving these multi\-step processes remain opaque\. Existing mechanistic interpretability approaches often rely on superficial text\-pattern co\-occurrences or capture only short\-term effects, struggling to trace the long\-horizon, outcome\-driven influence of internal components such as neurons or sparse features in multi\-step reasoning\. In this paper, we introduce Integrated Policy Gradient \(IPG\), a novel, training\-free framework that brings policy\-based attribution into mechanistic interpretability for LLM reasoning\. Grounded in outcome\-oriented and sequential\-influence\-aware principles, it backpropagates outcome\-level, non\-differentiable behavioral signals \(e\.g\., reasoning outcome correctness\) through entire inference trajectories, utilizing path integration to isolate outcome\-relevant mediators at component level for reliable attribution\. This provides a linear approximation of Causal Mediation Analysis \(CMA\) in reasoning\. Empirical evaluations demonstrate that IPG achieves precise localization and reveals mechanistic insights by identifying sparse, concentrated subsets of internal components associated with specific reasoning behaviors\. Our method also enables modulation of reasoning capabilities, offering a powerful and reliable framework for understanding LLM reasoning\.

## SLOPE: Optimistic Potential Landscape Shaping for Model\-based Reinforcement Learning

**Authors:** Yao\-Hui Li; Zeyu Wang; Xin Li; Wei Pang; Yingfang Yuan; Zhengkun Chen; Boya Zhang; Riashat Islam; Alex Lamb; Yonggang Zhang

**ID:** 154636 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C7a3d9iUcu>) | [PDF](<https://openreview.net/pdf?id=C7a3d9iUcu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154636>)

Model\-based reinforcement learning \(MBRL\) is sample\-efficient but struggles in sparse reward settings\. A critical bottleneck arises from the lack of informative gradients in sparse settings, where standard reward models often yield flat landscapes that struggle to guide planning\. To address this challenge, we propose S haping L andscapes with O ptimistic P otential E stimates \( SLOPE \), a novel framework that shifts reward modeling from predicting sparse scalars to constructing informative potential landscapes\. SLOPE employs optimistic distributional regression to estimate high\-confidence upper bounds, which amplifies rare success signals and ensures sufficient exploration gradients\. Evaluations on 30\+ tasks across 5 benchmarks and real\-world robotic deployments , demonstrate that SLOPE consistently outperforms leading baselines in fully sparse , semi\-sparse , and dense rewards\. The project code is available at https://anonymous\.4open\.science/r/SLOPE\-CF13\.

## Adaptive Stepsizes for Eligibility Traces in Deep Reinforcement Learning

**Authors:** Esraa Elelimy; Martha White

**ID:** 153394 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LfxKFrgnlA>) | [PDF](<https://openreview.net/pdf?id=LfxKFrgnlA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153394>)

Modern deep reinforcement learning algorithms often store past sensory observations in a buffer for later replay and learning\. However, this process is biologically implausible; animals do not store raw sensory observations\. Instead, they store their imperfect understanding of the world and the events in it\.  An alternative to storing all past sensory observations is to learn directly from the observations as they come in and store the seemingly important parts of the incoming data\. Eligibility trace algorithms in reinforcement learning \(RL\) sweep back updates for multiple steps, improving efficiency and providing update rules that do not rely on storing large data buffers\. These algorithms were common and effectively used in the linear setting, but have not been widely adopted in the deep RL setting\. Many questions remain open to make these algorithms more effective, even as basic as how to incorporate vector step\-sizes\. We first highlight how adaptive vector step\-sizes need to be incorporated into the eligibility trace and then introduce a new vector step\-size algorithm that is more amenable to the forward\-backward view equivalence needed to derive an update with eligibility traces\. We show that our new algorithms improve over other streaming algorithms across Mujoco and MinAtar environments, and are comparable to methods with replay buffers such as PPO\.

## Constrained Goal\-directed Planar Graph Generation with Grammar\-based Reinforcement Learning

**Authors:** Nicolas Hochuli; Lorenzo Miele; Kristina Shea; Tino Stankovic

**ID:** 154981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Sh3SI4EF1>) | [PDF](<https://openreview.net/pdf?id=9Sh3SI4EF1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154981>)

Planar graphs are central to applications across science and engineering, yet existing generators provide limited support for goal\-directed generation under hard structural and geometric feasibility constraints\. We propose a dataset\-free method for generating planar graph embeddings by combining parametric graph grammars with safe reinforcement learning to optimize generic task\-specific objectives while satisfying constraints during construction\. We formulate the generation process as a constrained Markov decision process, where the graph grammar defines the state and action spaces\. We further introduce an action projection that maps sampled actions toward state\-dependent safe sets, improving constraint satisfaction during training\. In contrast to classical graph generators and deep generative models, which typically offer limited goal\-directed control or rely on weak constraint satisfaction, our method constructs feasible planar graph embeddings directly during generation\. We also introduce a benchmark suite for constrained and goal\-directed planar graph generation, together with classical and deep generative baselines\. Across all benchmark tasks, our method consistently outperforms baselines while satisfying the formulated constraints\.

## Reinforcement Learning for View\-Adaptive Distillation in 3D Gaussian Compression

**Authors:** Hongji Zhao; Mingrui Zhu; Xin Wei; Nannan Wang

**ID:** 154966 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Zj1SPUYtA>) | [PDF](<https://openreview.net/pdf?id=9Zj1SPUYtA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154966>)

3D Gaussian Splatting enables real\-time novel view synthesis with high fidelity, yet its sparse and unorganized Gaussian anchors make compression challenging without harming structure and cross\-view consistency\. A key challenge is that effective compression depends not only on reducing parameter redundancy, but also on identifying where the compressed model is most fragile and how limited representation capacity should be allocated accordingly\. We present an RL\-guided distillation framework for 3DGS compression \(RLGS\)\. RLGS first uses a lightweight reinforcement learning policy to predict informative viewpoint offsets for adaptive distillation\. It then distills a compact student 3DGS from a high\-quality teacher under multi\-view rendering supervision\. Finally, it introduces an Unbalanced Optimal Transport based structural selection module to align teacher\-student anchor distributions in voxelized space, thereby retaining the most informative anchors during pruning and allocation\. Under the same bitrate constraints, our method consistently outperforms strong 3DGS compression baselines in rendering quality\. At matched rendering quality, it further reduces model size while preserving structural fidelity, achieving up to about 15% additional size reduction at comparable rendering quality over prior methods\.

## VSearcher: Long\-Horizon Multimodal Search Agent via Reinforcement Learning

**Authors:** RUIYANG ZHANG; Qianguo Sun; Chao Song; Yiyan Qi; Zhedong Zheng

**ID:** 149459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwIcXFZjta>) | [PDF](<https://openreview.net/pdf?id=pwIcXFZjta>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149459>)

Large models are increasingly becoming autonomous agents that interact with real\-world environments and use external tools to augment their static capabilities\. However, most recent progress has focused on text\-only large language models, which are limited to a single modality and therefore have narrower application scenarios\. On the other hand, multimodal large models, while offering stronger perceptual capabilities, remain limited to static knowledge and lack the ability to access and leverage up\-to\-date web information\. In this paper, we propose VSearcher, turning static multimodal model into multimodal search agent capable of long\-horizon, multi\-turn tool use in real\-world web environments, including text search, image search, and web browsing, via reinforcement learning\. Specifically, we introduce Iterative Injection Data Synthesis pipeline to generate large\-scale, complex multimodal QA questions, which are further filtered with comprehensive metrics to ensure high quality and sufficient difficulty\. We then adopt an SFT\-then\-RL training pipeline to turn base multimodal models to agent capable of multi\-turn tool calling in real\-world web environments\. Besides, we propose a multimodal search benchmark MM\-SearchExam dedicated to evaluating search capabilities of multimodal search agents, which proves highly challenging for recent proprietary models\. Extensive evaluations across multiple multimodal search benchmarks reveal effectiveness of our method\. VSearcher achieves superior performance compared to recent multimodal search agents and even surpasses several proprietary models on multimodal web search tasks\.

## Evolutionary System Prompt Learning for Reinforcement Learning in LLMs

**Authors:** Lunjun Zhang; Ryan Chen; Bradly Stadie

**ID:** 149312 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r7HI4UDi9z>) | [PDF](<https://openreview.net/pdf?id=r7HI4UDi9z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149312>)

Building agentic systems that can autonomously self\-improve from experience is a longstanding goal of AI\. Large language models \(LLMs\) today primarily self\-improve via two mechanisms: self\-reflection for context updates, and reinforcement learning \(RL\) for weight updates\. In this work, we propose Evolutionary System Prompt Learning \(E\-SPL\), a method for jointly improving model contexts and model weights\. In each RL iteration, E\-SPL samples trajectories under multiple system prompts in parallel, then jointly applies RL updates to weights and evolutionary updates to system prompts via LLM self\-reflection\. E\-SPL encourages a natural division between declarative knowledge encoded in prompts and procedural knowledge encoded in weights\. Most notably, in an easy\-to\-hard generalization setting \(AIME $\\rightarrow$ BeyondAIME\), E\-SPL improves RL success rate from 38\.8% $\\rightarrow$ 45\.1%\. E\-SPL also improves RL on AIME 2025 \(56\.3% $\\rightarrow$ 60\.6%\), HMMT 2025 \(50\.0% $\\rightarrow$ 52\.7%\), and agentic search \(44\.2% $\\rightarrow$ 48\.6% on gpt\-oss\-120b\)\. Across all settings, E\-SPL outperforms both RL\-only and evolution\-only baselines, demonstrating that weight updates and context updates are deeply synergistic and can together yield gains in generalization that neither achieves alone\.

## A Primal\-dual Approach for Semi\-Infinitely Constrained Reinforcement Learning

**Authors:** Di Wang; Liangyu Zhang; Haishan Ye; Guang Dai; Ivor Tsang

**ID:** 154351 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EEnVsdysX0>) | [PDF](<https://openreview.net/pdf?id=EEnVsdysX0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154351>)

We propose a primal\-dual policy optimization method for reinforcement learning in semi\-infinitely constrained Markov decision processes \(SICMDP\), which extends standard constrained Markov decision processes by allowing a continuum of constraints\. We call our proposed method \\textbf\{S\}emi\-\\textbf\{I\}nfinitely  \\textbf\{P\}rimal\-\\textbf\{D\}ual \\textbf\{P\}olicy \\textbf\{O\}ptimization \(SI\-PDPO\)\. By introducing an infinite\-dimensional Lagrange multiplier, we derive the saddle\-point formulation of the original SICMDP problem and prove strong duality under mild conditions\. We then introduce a regularization term for the dual variable, and solve the resulting regularized saddle\-point problem using first\-order methods with a policy optimization subroutine \(for example, NPG or PPO\)\. Unlike existing primal\-type policy optimization algorithms for semi\-infinitely constrained reinforcement learning, our method does not require solving an inner\-loop optimization problem, thereby mitigating computational intractability and reducing the over\-conservative bias\. We perform a series of numerical experiments, including a real\-world power control task in wireless communications, to evaluate the performance of SI\-PDPO\.  Empirical results show that SI\-PDPO consistently outperforms existing primal\-type algorithms\.

## Clarification as Supervision: Reinforcement Learning for Vision\-Language Interfaces

**Authors:** John Gkountouras; Ivan Titov

**ID:** 152087 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VaoJb3PtWQ>) | [PDF](<https://openreview.net/pdf?id=VaoJb3PtWQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152087>)

Recent text\-only models demonstrate remarkable reasoning capabilities\. Extending these to visual domains requires vision\-language models to translate images into text descriptions\. However, current models, trained to produce captions for human readers, often omit the precise details that reasoning systems require\. This creates an interface mismatch: reasoners often fail not due to reasoning limitations but because they lack access to critical visual information\. We propose Adaptive\-Clarification Reinforcement Learning \(AC\-RL\), which, through interaction, teaches vision models what information reasoners need\. Our key insight is that clarification requests during training reveal information gaps; by penalizing success that requires clarification, we create pressure for comprehensive initial captions that enable the reasoner to solve the problem in a single pass\. AC\-RL improves average accuracy by $4\.4$ points over pretrained baselines across seven visual reasoning benchmarks, and analysis shows it would cut clarification requests by up to $44$\\% if those were allowed\. By treating clarification as a form of implicit supervision, AC\-RL demonstrates that vision\-language interfaces can be effectively learned through interaction alone, without requiring explicit annotations\.

## Learning to Surpass: Training Tool\-Using Agents with Anchored Feedback

**Authors:** John Gkountouras; Fengjun Wang; Angelantonio Castelli; Satendra Kumar

**ID:** 150337 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=irZGe0gK3i>) | [PDF](<https://openreview.net/pdf?id=irZGe0gK3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150337>)

Training tool\-using agents for planning is challenging when high\-quality demonstrations exist only as final outcomes without the intermediate tool traces that produced them\. A common response is to impute traces and apply imitation learning, but this approach is indirect and structurally limited to matching the reference rather than improving upon it\. We propose anchored comparative feedback: rather than imitating a reference plan, we train agents to surpass it under a comparative LLM judge while satisfying hard constraints\. The anchor provides a stable optimization target, and comparing two identically rendered plans neutralizes surface\-level judge biases\. On TripTailor, a tool\-augmented travel planning benchmark, anchored GRPO achieves 80\.1% final success rate compared to 43\.7% for imitation learning on imputed traces, with gains on both constraint satisfaction and LLM\-judged preference that persist across judge families, rubrics, and a held\-out reward model\. Gains generalize beyond TripTailor, with a fivefold improvement on the held\-out TravelPlanner benchmark\. These results suggest that anchored comparative feedback offers an effective approach for learning transferable tool\-using planners from outcome\-only supervision\.

## Noisy Data is Destructive to Reinforcement Learning with Verifiable Rewards

**Authors:** Yuxuan Zhu; Daniel Kang

**ID:** 152238 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UY4F6bcSSP>) | [PDF](<https://openreview.net/pdf?id=UY4F6bcSSP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152238>)

Reinforcement learning with verifiable rewards \(RLVR\) has driven recent capability advances of large language models across domains\. Recent studies suggest that improved RLVR algorithms allow models to learn effectively from incorrect annotations, achieving performance comparable to learning from clean data\. In this work, we show that these findings are invalid because the claimed 100% noisy training data is "contaminated" with clean data\. After rectifying the dataset with a rigorous re\-verification pipeline, we demonstrate that noisy data is destructive to RLVR\. We show that existing RLVR algorithm improvements fail to mitigate the impact of noisy data, achieving similar performance to that of the basic GRPO\. Furthermore, we find that the model trained on truly incorrect annotations performs 8\-10% worse than the model trained on clean data across mathematical reasoning benchmarks\. Finally, we show that these findings hold for real\-world noise in Text2SQL tasks, where training on real\-world, human annotation errors cause 5\-12% lower accuracy than clean data\. Our results show that current RLVR methods cannot yet compensate for poor data quality\. High\-quality data remains essential\.

## Trust Region Q Adjoint Matching

**Authors:** Yonghoon Dong; Kyungmin Lee; Changyeon Kim; Jaehyuk Kim; Jinwoo Shin

**ID:** 149711 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o0QcqHlW1x>) | [PDF](<https://openreview.net/pdf?id=o0QcqHlW1x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149711>)

Off\-policy reinforcement learning of pretrained flow policies remains challenging due to the instability of optimization arising from the multi\-step sampling process\. Recently, Q\-learning with Adjoint Matching \(QAM\) addressed this issue by reformulating into a memoryless stochastic optimal control \(SOC\) problem with a learned critic\. However, QAM inherits a fundamental fragility of critic\-guided improvement: small critic errors are amplified when critics are ill\-conditioned, often leading to model collapse\. This paper introduces Trust Region Q\-Adjoint Matching \(TRQAM\), a stable off\-policy fine\-tuning algorithm that adaptively controls the path\-space KL with pretrained flow policies through projected dual descent\. Specifically, we optimize the trust\-region parameter $\\lambda$ in SOC dynamics, and theoretically show that the path\-space KL can be represented by a closed\-form function of $\\lambda$\. As a result, our method can precisely control the exact deviation from pretrained flow policies, achieving stable off\-policy RL\. Through experiments on 50 OGBench tasks, TRQAM consistently outperforms prior arts in both offline RL and offline\-to\-online RL\. In particular, TRQAM achieves an overall success rate of 68\\% in offline RL, substantially improves the strongest baseline at 46\\%\.

## Moment\-Constrained Latent Steering for Flow Policy

**Authors:** Wenxin Zhao; Letian Tao; Zhilong Zheng; Guojian Zhan; Yujie Yang; Likun Wang; yinuo Wang; Feihong Zhang; Tianze Zhu; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 154706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BdvmNiLvIV>) | [PDF](<https://openreview.net/pdf?id=BdvmNiLvIV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154706>)

Fine\-tuning continuous\-time generative models, such as flow models, via reinforcement learning \(RL\) is a promising approach for complex continuous control, but directly updating the network weights often leads to catastrophic forgetting of the pre\-trained prior\. Latent steering method mitigates this by freezing the generative backbone and optimizing a latent policy to generate the initial noise\. However, existing methods typically enforce hard support boundaries to prevent out\-of\-distribution \(OOD\) shifts in the latent space, inducing a fundamental trade\-off between prior preservation and policy expressiveness\. To resolve this dilemma, we propose Moment Constraint Parameterization, which regulates the latent distribution through a statistical budget\. By decoupling this budget into inter\-statistic constraints and intra\-statistic flexibility, our method acts as a probabilistic safeguard against OOD shifts while providing the degrees of freedom to retain policy expressiveness\. Furthermore, while moment constraints define a flexible search space, effectively optimizing the latent policy within it requires accurate gradient signals\. To address the optimization lag and bias caused by proxy latent critics in existing methods, we introduce Adjoint Q\-Gradient Propagation\. By exploiting the white\-box structure of flow models, this technique backpropagates exact analytical gradients from the action\-space critic directly to the initial noise\. Integrating these two mechanisms, we present Moment Constraint Flow Steering \(MCFS\)\. Empirical results on D4RL and OGBench show that MCFS consistently delivers stronger online adaptation performance than prior latent steering and flow\-policy baselines, with particularly pronounced gains on challenging long\-horizon compositional manipulation tasks\.

## Self\-Adjoint Flow Policy Optimization

**Authors:** Guojian Zhan; Feihong Zhang; Likun Wang; Xiangteng Zhang; Letian Tao; Tianyi Zhang; Wenxin Zhao; yinuo Wang; Tianze Zhu; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152160 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V4bnZAJAx7>) | [PDF](<https://openreview.net/pdf?id=V4bnZAJAx7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152160>)

Generative policies offer a promising alternative to Gaussian policies in reinforcement learning \(RL\) due to their ability to represent expressive and multimodal action distributions\. However, integrating such policies into likelihood\-based policy optimization remains challenging, since accurate and differential action likelihoods are intractable for standard generative policies\. In this paper, we propose \\emph\{Self\-Adjoint Flow Policy Optimization\} \(\\textsc\{SAFlow\}\), a likelihood\-tractable generative policy with self\-adjoint structure\.  \\textsc\{SAFlow\} parameterizes the policy as an invertible flow in a doubled action space and uses a Verlet\-style self\-adjoint composition for generation\. This structure makes the inverse map obtainable by stepsize reversal, aligning forward sampling and backward likelihood evaluation under the same time\-symmetric numerical rule\. It also provides a second\-order approximation accuracy to the learned continuous flow, improving the numerical consistency of likelihood and policy\-ratio computation\. We instantiate \\textsc\{SAFlow\} within an on\-policy optimization framework and evaluate it on eight IsaacLab continuous\-control tasks\. \\textsc\{SAFlow\} consistently outperforms Gaussian\-policy baselines and recent generative\-policy methods, highlighting the value of self\-adjoint numerical structure for likelihood\-based generative policy optimization\.

## Truncate Bad, Upweight Good: BoN\-Style Distillation via Rank\-Based Classification

**Authors:** Yarin Bar; Yaniv Romano

**ID:** 152325 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TunY4IfXnt>) | [PDF](<https://openreview.net/pdf?id=TunY4IfXnt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152325>)

Inference\-time selection methods, such as Best\-of\-N, improve generation by sampling a pool of candidates and selecting the top completion according to a reward model\. Distillation seeks to amortize this procedure into a single policy by replacing raw rewards with in\-pool ranks and learning a policy that upweights higher\-ranked completions\. However, existing rank\-based policies typically use smooth full\-support reweighting, so low\-ranked completions receive less mass but remain in the target support\. Although a sharper reweighting reduces lower\-tail mass, it also increases reliance on brittle ranking at the top made by a single reward model\. We propose \\textbf\{TUP\}: a \\textbf\{T\}runcate\-bad, \\textbf\{U\}pweight\-good \\textbf\{P\}olicy that removes low\-ranked completions from the support and reweights only the retained upper tail with a tunable sharpness\. TUP admits a closed\-form, prompt\-independent normalization and can be trained fully offline via binary cross\-entropy, using shifted\-truncated win\-rates as soft labels and distilled\-to\-reference log\-likelihood ratios as logits\.  Theoretically, under certain assumptions, we show that for any unknown oracle reward, the best monotone rank\-reweighting can be matched by a lower\-tail truncation rule, providing formal support for removing the lower tail rather than merely downweighting it\.  Empirically, we show that TUP is competitive with strong offline alignment baselines\.

## What Probing Reveals about Autonomous Driving: Better Predictions Lead to Better Planning

**Authors:** Hyeonchang Jeon; Kyungbeom Kim; Eugene Vinitsky; KyungJoong Kim

**ID:** 153263 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MYtWiWcp1j>) | [PDF](<https://openreview.net/pdf?id=MYtWiWcp1j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153263>)

Large\-scale datasets and fast simulators have enabled improvements in driving policies that appear safe and robust, yet strong performance in nominal scenarios can still mask flawed reasoning and unsafe heuristics\. Moreover, existing closed\-loop simulations often reveal only the resulting behavior, making it difficult to determine whether driving policies truly predict the motion of surrounding vehicles or how the ego vehicle generates future plans, or merely rely on brittle heuristics that happen to succeed in nominal scenarios\. To better understand the limits and weaknesses of driving policies, we focus on probing for forms of $prediction$, i\.e\., where surrounding vehicles will move next, and $planning$, i\.e\., understanding how to generate safe trajectories\. We focus on these two capabilities because they reflect behaviors expected of effective driving policies, and use their presence or absence to assess policy quality across data\-driven behavior cloning and simulation\-driven reinforcement learning policies\. To evaluate the presence of these capabilities, we investigate them as a function of scale, asking whether the closed\-loop gains from larger datasets and longer simulation training reflect stronger prediction and planning or merely better behavioral heuristics\. We use linear probing and targeted perturbations in both imitation learning and reinforcement learning models to track when these internal signals emerge, plateau, or fail\. Despite good closed\-loop performance, prediction signals are often mistimed or even degraded during simulated near\-collision events\. Finally, we demonstrate that these internal predictive capabilities go beyond correlation and that correcting mistaken predictions causally steers the planner toward safer, more appropriate trajectories\.

## Beyond One\-Size\-Fits\-All: Diagnosis\-Driven Online Reinforcement Learning with Offline Priors

**Authors:** Guozheng Ma; Lu Li; Zilin Wang; Pierre\-Luc Bacon; Dacheng Tao

**ID:** 140053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XZmIeAgd6e>) | [PDF](<https://openreview.net/pdf?id=XZmIeAgd6e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140053>)

Online reinforcement learning \(RL\) agents increasingly depend on knowledge acquired offline to achieve practical efficiency\. Originally studied in offline\-to\-online RL, this paradigm now spans foundation model post\-training and embodied intelligence, with prior types expanding from offline datasets and pre\-trained policies to increasingly diverse knowledge sources such as multimodal foundation models and generative world models\. Offline priors have become central to how deep RL is developed and deployed\. However, this reliance introduces a challenge that the prevailing benchmark\-driven paradigm cannot resolve: because prior validity varies across deployments and shifts during training, no single approach to managing it is universally optimal, and benchmark rankings offer limited guidance for real\-world deployments\. Rather than pursuing universal solutions, we argue that the field should shift to diagnosis\-driven tension management, in which deployment\-specific evidence guides how the learner relates to its priors throughout training, enabling both flexible and adaptive deployment\. We support this position with a framework characterizing how priors reshape online optimization through three functional roles, controlled experiments demonstrating help\-or\-hurt reversals, cross\-domain evidence from foundation model post\-training to embodied intelligence, and engagement with five substantive counterarguments\.

## Towards Optimism\-Pessimism Trade\-off in Model\-based Offline\-to\-Online Reinforcement Learning

**Authors:** Guochen Zhou; Yijun Yang; Qiqi Duan; Qing Su; Weiming Ou; Li Shen; Shihao Ji; Yuhui Shi; Zhisong Zhang

**ID:** 154067 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GPyvq8xYFz>) | [PDF](<https://openreview.net/pdf?id=GPyvq8xYFz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154067>)

Model\-based offline\-to\-online reinforcement learning \(RL\) enables sample\-efficient adaptation by leveraging offline pre\-training for online fine\-tuning\. However, the distribution shifts between offline and online stages often hinder fine\-tuning performance\. Many existing methods approach this problem by adjusting the optimism\-pessimism trade\-off via a single\-objective formulation, requiring costly online bi\-level optimization\. We identify this trade\-off during offline training as a key challenge: optimistic policies generalize better to novel tasks by exploring out\-of\-distribution states and actions, while pessimistic policies remain constrained to the offline data distribution and excel on similar tasks\. To address this challenge, we propose a bi\-objective formulation that captures this trade\-off, yielding a Pareto policy pool during offline training\. These policies enable flexible selection for various online tasks\. To generate the pool, we introduce Multi\-Objective Soft Actor\-critIC \(MOSAIC\), which solves bi\-objective problems and constructs diverse Pareto policies\. After offline training, a contextual bandit algorithm hierarchically selects the most suitable policy for fine\-tuning at each online interaction step\. Empirically, our pipeline, \*\*Hi\*\*erarchical \*\*P\*\*areto\*\*P\*\*olicy \*\*P\*\*ool \(\*\*HiP3\*\*\), achieves state\-of\-the\-art performance on a suite of continuous\-control offline\-to\-online benchmarks, particularly under shifted online tasks\. Comprehensive ablations further clarify the roles of the policy pool and the online selection mechanism, as well as the robustness of the overall framework\.

## Loop\-Free Inverse Reinforcement Learning via Sequential Value Recovery

**Authors:** Yang Chen; Yitan Zhang; Michael Witbrock; Shuyue Hu

**ID:** 152801 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QGmivFge7W>) | [PDF](<https://openreview.net/pdf?id=QGmivFge7W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152801>)

Inverse Reinforcement Learning \(IRL\) aims to recover a reward function that explains expert demonstrations\. Existing IRL methods typically rely on a bi\-level optimization procedure that alternates between reward learning and policy optimization, leading to substantial computational burden and training instability\. In this work, we introduce a different route that eliminates policy optimization entirely by leveraging diffusion policies\. Our key insight is that a diffusion policy encodes the action\-gradient structure of the optimal soft Q function, enabling reward learning to be cast as a sequence of value recovery problems, thereby allowing us to bypass reward\-policy loops inherent in prior IRL methods\. Specifically, our method proceeds in three stages: \(I\) recovering the optimal soft Q function via action\-gradient matching and estimating the corresponding soft value function \(LogSumExp of Q values\) in a way inspired by Gumbel regression; \(II\) calibrating these soft values by inferring a state\-dependent offset; \(III\) extracting the reward by enforcing Bellman consistency\. This leads to Loop\-Free Inverse Reinforcement Learning \(LFIRL\), a fully offline algorithm that operates in a simple, loop\-free, and sequential manner\. LFIRL is simple to implement, significantly improves training efficiency while maintaining strong reward recovery performance\. Empirically, across Maze, Franka Kitchen, Adroit Hand Pen, and Push\-T benchmarks, LFIRL achieves 2\-3x speedup over the fastest baselines, while matching or surpassing state\-of\-the\-art methods in reward recovery quality\.

## Behavior\-Discriminative Reward Shaping for Reward\-Robust Reinforcement Learning

**Authors:** Zixuan Liu; Fangzheng Wu; Brian Summa; Zizhan Zheng

**ID:** 155941 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1ekxUnK93j>) | [PDF](<https://openreview.net/pdf?id=1ekxUnK93j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155941>)

Reward\-robust RL typically models misspecification by specifying an uncertainty set that constrains the discrepancy of plausible rewards from a base reward\. However, such reward space discrepancies can be behaviorally irrelevant: under potential\-based reward shaping \(PBRS\), many distinct rewards preserve policy ordering\. This can introduce substantial redundancy into standard uncertainty sets and degrade optimization performance\. We propose Shaping\-Aware Reward\-Robust RL , which constructs uncertainty sets over PBRS equivalence classes by projecting each reward to a canonical representative, ensuring that the resulting set contains only rewards that induce behaviorally distinct policy rankings\. We prove that this projection preserves the optimal robust value while shrinking the uncertainty set and improving empirical performance\. Using the connection between robustness and regularization, we obtain a practical algorithm to solve the shaping\-aware reward\-robust RL problem and enjoy convergence guarantees under standard assumptions\. Experiments on benchmarks spanning diverse task domains and levels of complexity show consistent improvements over representative robust RL baselines and exhibit improved robustness to reward perturbations\.

## GCD: Correcting Hidden\-State Bias in Off\-Policy Agentic RL

**Authors:** Changyuan Chen; Jianyu Xiang; Jiasheng Luo; Ziye Wang; NALLAPPAN GUNASEKARAN

**ID:** 154093 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GHjzEOgABS>) | [PDF](<https://openreview.net/pdf?id=GHjzEOgABS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154093>)

Off\-policy reinforcement learning \(RL\) for large language models bottlenecks at the rollout stage: every parameter update invalidates the key\-value \(KV\) cache of in\-flight agent trajectories, forcing either expensive recomputation or staleness that destabilizes training\. Recent advances such as M2PO and asynchronous RLHF tolerate token\-level staleness by reweighting the policy gradient with second\-moment importance corrections, but they implicitly assume that a stale rollout is sampled from a well\-defined behavior policy $\\pi\_\{\\theta\_\{\\text\{old\}\}\}$\. We show that this assumption is silently violated by every modern partial\-rollout system: once a stale KV cache is reused under updated parameters $\\theta\_\{\\text\{new\}\}$, the resulting token distribution is a hybrid $\\pi\_\{\\text\{hyb\}\}$ whose attention projections consume stale keys and values while its MLP, output, and gating projections use the new weights\. The token\-level importance weight $w\_t = \\pi\_\{\\theta\_\{\\text\{new\}\}\}\(y\_t \\mid x\_\{&lt;t\}\) / \\pi\_\{\\theta\_\{\\text\{old\}\}\}\(y\_t \\mid x\_\{&lt;t\}\)$ corrects the sampling distribution but not this hidden\-state\-level mismatch, leaving an uncorrected source of policy\-gradient bias that grows with both staleness and weight\-update magnitude\. We introduce Gradient\-Coupled KV Drift \(GCD\), an exception\-safe correction comprising \(i\) a high\-probability concentration bound on the drift, with explicit per\-layer terms for full\-attention and Gated DeltaNet layers; \(ii\) a tail\-event detector that flags inputs outside the bound’s regime of validity; \(iii\) a composite safety guarantee that treats the bias correction as trustworthy only when both the analytical estimate and the detector agree; and \(iv\) a variance\-preservation theorem showing that GCD composes with the M2PO trust region without re\-tuning\. On Qwen3\.5\-9B trained with GRPO on MATH\-500 and $\\tau$\-bench, GCD enables stable training at staleness 512 \(a regime where M2PO collapses\), reduces rollout wall\-clock by 38\\% versus full recomputation, and lifts $\\tau$\-bench retail pass$^4$ by 5\.7 points over the M2PO baseline\.

## Does This Gradient Spark Joy?

**Authors:** Ian Osband

**ID:** 149741 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=niiWgYRYxH>) | [PDF](<https://openreview.net/pdf?id=niiWgYRYxH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149741>)

Policy gradient computes a backward pass for every sample, even though the backward pass is expensive and most samples carry little learning value\. The Delightful Policy Gradient \(DG\) provides a forward\-pass signal of learning value: \\emph\{delight\}, the product of advantage and surprisal \(negative log\-probability\)\. We introduce the \\emph\{Kondo gate\}, which compares delight against a compute price and pays for a backward pass only when the sample is worth it, thereby tracing a quality\-\-cost Pareto frontier\. In bandits, zero\-price gating preserves useful gradient signal while removing perpendicular noise, and delight is a more reliable screening signal than additive combinations of value and surprise\. On MNIST and transformer token reversal, the Kondo gate skips most backward passes while retaining nearly all of DG's learning quality, with gains that grow as problems get harder and backward passes become more expensive\. Because the gate tolerates approximate delight, a cheap forward pass can screen samples before expensive backpropagation, suggesting a speculative\-decoding\-for\-training paradigm\.

## Delightful Distributed Policy Gradient

**Authors:** Ian Osband

**ID:** 155678 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3mTHnPoUXG>) | [PDF](<https://openreview.net/pdf?id=3mTHnPoUXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155678>)

Distributed reinforcement learning trains on data from stale, buggy, or mismatched actors, producing actions with high surprisal \(negative log\-probability\) under the learner's policy\. The core difficulty is not surprising data per se, but \\emph\{negative learning from surprising data\}\. High\-surprisal failures can dominate finite\-batch updates through large perpendicular components, while high\-surprisal successes reveal opportunities the current policy would otherwise miss\. The \\textit\{Delightful Policy Gradient\} \(DG\) separates these cases by gating each update with delight, the product of advantage and surprisal, suppressing rare failures and preserving rare successes without behavior probabilities\. In a tabular analysis, DG suppresses the perpendicular second moment of high\-surprisal failures by a policy\-overlap factor that vanishes as the learner improves\. The advantage sign is essential for surprisal\-based filtering: any learner\-probability\-only gate that suppresses rare failures also suppresses rare successes\. On MNIST with simulated staleness, DG without off\-policy correction outperforms importance\-weighted PG with exact behavior probabilities\. On a transformer sequence task with staleness, actor bugs, reward corruption, and rare discovery, DG often achieves nearly order\-of\-magnitude lower error\. When all four frictions act simultaneously, its sample\-efficiency advantage is order\-of\-magnitude and grows with task complexity\.

## Local Guidance, Global Impact: Gaussian\-Reshaped Trust Region Unlocks Behavior Transitions

**Authors:** Bingxu Liu; Jiashun Liu; Johan Obando Ceron; Hao Wang; Runze Liu; Pablo Samuel Castro; Aaron Courville; Ling Pan

**ID:** 155658 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3yresnLxCf>) | [PDF](<https://openreview.net/pdf?id=3yresnLxCf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155658>)

While Proximal Policy Optimization \(PPO\) demonstrates strong performance in stationary settings, we show that its standard optimization paradigm struggles in continual and non\-stationary environments\. The failure does not stem from insufficient model capacity or overly restrictive clipping\. Instead, PPO performs persistent, directionally inefficient local updates, which indicates a lack of geometry\-aware guidance for accumulating meaningful behavioral change and ultimately hindering transitions toward new behavior patterns\. Although divergence\-based regularization introduces partial geometric awareness, its monotonically increasing penalties implicitly discourage large policy deviations, even when such shifts are necessary for effective adaptation\. To address this limitation, we propose Gaussian Trust Region Policy Optimization \( GTR \), which reshapes the trust region using a Gaussian kernel\. The resulting constraint is bounded and non\-monotonic, providing strong local stability while progressively relaxing under sustained high\-advantage updates\. To further improve robustness, we introduce a Mixture Gaussian Anchor that adapts to recent policy trajectories, reducing variance induced by stale references\. GTR is architecture\-agnostic and achieves strong performance across games, simulated robotic control, open\-world exploration, and language model post\-training\. These results demonstrate that geometry\-aware trust\-region design can be a promising direction for robust reinforcement learning in complex non\-stationary environments\.

## Explanation Mechanism Influences Human Reliance on Reinforcement Learning Agents

**Authors:** Xuying Zhong; Daniel Beechey; Crescent Jicol; Janina A\. Hoffmann; Özgür Şimşek

**ID:** 156138 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=099yUmkgyW>) | [PDF](<https://openreview.net/pdf?id=099yUmkgyW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156138>)

When reinforcement learning agents are deployed in decision\-support settings, humans must repeatedly decide whether to adopt or override individual action recommendations\. Explainable reinforcement learning supports these decisions, yet it remains unknown whether explanation mechanisms impact user behaviour\. We conduct two controlled user studies that isolate explanation mechanism while controlling for agent policy, task, and abstraction level, using a design that independently manipulates action optimality and explanation veracity\. Study 1 compares three representative action\-level mechanisms across 100 participants and finds that Shapley\-based attributions produce conservative reliance sensitive to explanation plausibility; saliency\-based explanations indiscriminately increase adoption even for suboptimal actions; and a novel reward\-decomposition mechanism, Action Advantage Attribution \(AAA\), achieves the highest appropriate adoption and is the only condition in which explanation comprehension positively predicts appropriate adoption\. Study 2 benchmarks AAA against a no\-explanation baseline across 70 participants, showing that it substantially improves detection of appropriate recommendations by 89\\% but does not eliminate over\-reliance on suboptimal ones\. Our results imply that algorithm designers must treat explanation mechanism as a first\-order design choice, as mechanisms can influence human reliance on reinforcement learning agents\.

## SVoT: State\-aware Visualization\-of\-Thought for Spatial Reasoning via Reinforcement Learning

**Authors:** Chao Lei; Yanbei Jiang; Markus Hiller; Zhijian Zhou; Xunye Tian; Krista A\. Ehinger; Nir Lipovetzky

**ID:** 150413 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iEEi07lQqo>) | [PDF](<https://openreview.net/pdf?id=iEEi07lQqo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150413>)

Spatial reasoning remains a challenge for Multimodal Large Language Models \(MLLMs\), as it requires reliable multi\-hop inference over both intermediate states and state transitions\. Current studies often leave intermediate states unverified and treat state transitions as implicit processes, which limits reliability in multi\-hop spatial reasoning\. To address this, we propose State\-aware Visualization\-of\-Thought \(SVoT\), a reinforcement learning framework that generates interleaved, verifiable intermediate states and visualizations\. SVoT integrates transition reasoning chains into the generation processes, enabling the model to verify action preconditions and effects through interleaved textual and visual reasoning\. We train SVoT via Group Relative Policy Optimization \(GRPO\), instantiating verification through reward design and evaluating the efficacy of different fine\-grained rewards\. As existing benchmarks reduce state transitions to single\-variable updates, substantially simplifying the problems, we establish five domains by extending classical environments and introducing two novel domains, Pacman and Gather, that require multi\-object interactions and numerical reasoning\. These domains support systematic evaluation of multi\-hop spatial reasoning with quantitative verification of generated intermediate states and transition reasoning\. SVoT with transition\-aware supervision achieves state\-of\-the\-art performance across the introduced domains, yielding up to a 65\\% absolute accuracy gain on out\-of\-distribution test sets\.

## DyJR: Preserving Local Policy Plasticity in Reinforcement Learning with Verifiable Rewards via Dynamic Jensen\-Shannon Replay

**Authors:** Long Li; Zhijian Zhou; Tianyi Wang; Weidi Xu; Zuming Huang; Wei Chu; Zhe Wang; Shirui Pan; Chao Qu; Yuan Qi

**ID:** 156115 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Go4KDhkDw>) | [PDF](<https://openreview.net/pdf?id=0Go4KDhkDw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156115>)

While Reinforcement Learning \(RL\) enhances Large Language Model reasoning, on\-policy algorithms like GRPO are sample\-inefficient as they discard past rollouts\. Existing experience replay methods address this by reusing accurate samples for direct policy updates, but this often incurs high computational costs and causes mode collapse via overfitting\. We argue that historical data should prioritize sustaining local policy plasticity rather than simply reinforcing accuracy\. We define local policy plasticity as a persistent ability to remain backtrackable and switchable with respect to recent successful trajectories: throughout training, the policy maintains non\-negligible support on recently reachable alternatives, so it can smoothly reallocate probability mass when needed without being locked into a single dominant path\. To this end, we propose Dynamic Jensen\-Shannon Replay \(DyJR\), a simple yet effective regularization framework using a dynamic reference distribution from recent trajectories\. DyJR introduces two innovations: \(1\) A Time\-Sensitive Dynamic Buffer that uses FIFO and adaptive sizing to retain only temporally proximal samples, synchronizing with model evolution; and \(2\) Jensen\-Shannon Divergence Regularization, which replaces direct replay updates with a distributional constraint to prevent premature over\-commitment to a single Rank\-1 trajectory\. Experiments on mathematical reasoning and Text\-to\-SQL benchmarks demonstrate that DyJR significantly outperforms GRPO as well as baselines such as RLEP and Ex\-GRPO, while maintaining training efficiency comparable to the original GRPO\. Furthermore, from the perspective of Rank\-$k$ token probability evolution, we show that DyJR improves policy plasticity by reducing over\-reliance on Rank\-1 tokens and preserving recently reachable alternatives, elucidating how specific sub\-modules of DyJR influence the training dynamics\.

## TrajEvolve: Trajectory Evolution for Reinforcement Learning with Hindsight Credit Assignment

**Authors:** Yi Wen; Hao Chen; Wanyu Wang; Maolin Wang; Pengyue Jia; Derong Xu; Hui\-Ze Tan; Yingyi Zhang; Wenlin Zhang; weihongluo; Xiku Du; Xiangyu Zhao

**ID:** 151355 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bARCcbV2Jj>) | [PDF](<https://openreview.net/pdf?id=bARCcbV2Jj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151355>)

The Reinforcement Learning \(RL\) paradigm has achieved remarkable success in enhancing the reasoning capabilities of Large Language Models \(LLMs\)\. However, when applied to long\-horizon tasks, it faces severe challenges: i\) Due to the high task complexity, the model struggles to sample enough successful trajectories, resulting in slow convergence\. ii\) Relying solely on sparse final rewards causes all steps to be updated indiscriminately, encouraging redundant step generation\. When both the quantity and quality of successful trajectories become difficult to guarantee, the performance is severely constrained\. This dilemma stems from the limitations: existing RL paradigms rely entirely on the reasoning capability of base models, lacking the ability to actively optimize trajectories\. To address the above issues, we propose a novel trajectory evolution paradigm with hindsight credit assignment, termed TrajEvolve\. TrajEvolve not only relies on the trajectory inferred by the model but also generates \`\`evolutionary trajectories'' by refining low\-quality steps in historical trajectories, thereby exposing the policy to high\-quality compositions that lie within the base model's support but are rarely sampled within practical training budgets\. Furthermore, TrajEvolve reformulates step\-level continuous credit assignment as a binary classification task, whether each step is necessary for task completion\. This simplification not only reduces the learning difficulty but also enables step labels to be obtained through counterfactual verification, achieving precise identification of redundant steps\. Extensive experiments on two datasets demonstrate the superiority of the proposed method\.

## ROLLVERIFY: BRIDGING EFFICIENCY AND ACCURACY IN LONG\-TAIL ROLLOUT REINFORCEMENT LEARNING

**Authors:** Yongqiang Yao; Jingru Tan; Kaihuan Liang; Zixin Yin; Yazhe Niu; Ruihao Gong; Dahua Lin; Ningyi Xu

**ID:** 154033 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GlTTkoAAWX>) | [PDF](<https://openreview.net/pdf?id=GlTTkoAAWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154033>)

Reinforcement learning is crucial for improving large language models’ reasoning and generalization\. It relies on massive rollouts whose lengths become increasingly long\-tailed as context windows grow\. In on\-policy training, these long\-tail rollouts can result in GPU bubbles, reducing system utilization and limiting RL scalability\. Asynchronous or partial\-rollout methods improve throughput by relaxing synchronization, but inevitably introduce stale off\-policy samples \(trajectories\) that may hurt final accuracy\. Existing approaches mainly mitigate this off\-policy issue by reweighting off\-policy samples during training, yet they can still leave a performance gap compared to fully on\-policy training\. In this work, rather than passively reweighting samples during training, we propose RollVerify, a lightweight RL framework built on partial rollout that actively verifies and repairs samples before they enter training\. Specifically, it introduces an off\-policy shift metric OPS, to quantify the off\-policy deviation of partially generated trajectories\. Guided by the OPS constraint, RollVerify performs both sequence\-level and token\-level verification to identify and truncate invalid suffixes of trajectories\. This yields high\-quality samples that protect the models’ accuracy while preserving the efficiency gains of partial rollout\. Experiments across model scales, architectures, and task domains show that RollVerify matches the performance of on\-policy training while significantly improving training efficiency\.

## Risk\-Aware Action Repetition via Expected Skip Evaluation

**Authors:** Hyunwoo Park; Junhyeok Eom; Baek\-Ryun Seong; Sang\-Ki Ko

**ID:** 154864 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJOzqhWj2Q>) | [PDF](<https://openreview.net/pdf?id=AJOzqhWj2Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154864>)

Open\-loop action repetition—hereafter also referred to as a skip—enables reinforcement learning agents to reduce decision frequency by executing selected actions for adaptive durations\. A key challenge is how to evaluate the value of such a skip\. Existing Skip\-MDP methods typically bootstrap from the greedy value of the terminal state, implicitly assuming that the agent can immediately resume near\-optimal control after the skip\. This assumption is unreliable during learning, when the underlying action policy is stochastic, inaccurate, and continually changing\. It can also amplify optimistic estimation errors, distorting the learned preference over skip lengths\. We propose Expected Skip Evaluation, a reformulation of skip\-value learning that evaluates skip terminal states through expected future control rather than idealized greedy control\. This reflects imperfect control during training while preserving the optimal skip\-value fixed\-point as control becomes reliable\. We instantiate this principle in RARe \(Risk\-Aware Repetition\), a practical framework for discrete and continuous action spaces\. Experiments across grid\-world, continuous\-control, and safety\-critical benchmarks show improved sample efficiency and better\-calibrated skip decisions\.

## Reward Is Not a Universal Interface for Generative Reinforcement Learning

**Authors:** Victor Shea\-Jay Huang; Poodar Chu; Hongsheng Li

**ID:** 150638 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gbYg6VGblU>) | [PDF](<https://openreview.net/pdf?id=gbYg6VGblU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150638>)

A reward is not a universal RL interface: it becomes a valid update only through the probability object exposed by the policy branch\. Autoregressive post\-training works cleanly because token ratios are exact, but parallel discrete policies hide within\-step dependence and flow/diffusion policies often lack cheap density ratios\. We introduce MindRL, a reward\-to\-update interface controller that translates a shared reward through branch\-native score objects while turning factorization, tractability, drift, and smoothness barriers into budgets over block size, serialization, anchors, clipping, reranking, and branch weights\. As a closed\-loop controller, MindRL makes the shared reward actionable for AR, parallel discrete, flow/diffusion, and AR\+flow policies by selecting branch\-native update objects and adapting their control budgets\. Across language\-side AR/parallel\-discrete tests and matched flow/diffusion and AR\+flow evaluations, MindRL improves task\-quality or reward\-risk tradeoffs while preserving each branch's native structure\.

## Self\-Calibrated GUI Reward Model via Inverse Dynamic Modeling

**Authors:** Zeyi Sun; Shengyuan Ding; Xingpeng Xia; Jinsong Li; Xie Chen; Dahua Lin; Jiaqi Wang

**ID:** 153048 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPejG5R0IO>) | [PDF](<https://openreview.net/pdf?id=OPejG5R0IO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153048>)

Developing generalist GUI agents capable of robust long\-horizon execution remains a key challenge\. While Reinforcement Learning \(RL\) offers a promising path for improvement, it is severely bottlenecked by the lack of reliable reward signals in open\-ended environments\. Ground\-truth verification typically relies on expensive human annotation, which is prohibitively scarce at the scale required for training, while existing VLM\-based judges frequently hallucinate success on superficial visual cues\. This scarcity of trustworthy supervision fundamentally limits the scalability of current methods\. In this work, we propose I\-Judge, a novel framework for Self\-Calibrated Reward Modeling\. We leverage Inverse Dynamic Modeling \(IDM\) as a self\-supervised training objective to learn the causal dynamics of GUI interactions from massive unlabeled trajectories, effectively bypassing the bottleneck of scarce human labels\. We then introduce a runtime calibration mechanism that weights reward signals by the IDM's action consistency, filtering out spurious successes\. Extensive end\-to\-end RL experiments on OSWorld, ScienceBoard and AndroidWorld demonstrate that our method significantly accelerates convergence and improves final agent performance\. Notably, I\-Judge demonstrates strong generalization to unseen domains\. All the code, data and models will be made publicly available to foster further research\.

## Reward\-Estimated Hypergradient for Bilevel Reinforcement Learning with Black\-Box Follower

**Authors:** Shigeki Kusaka; Mikoto Kudo; Takumi Tanabe; Akifumi Wachi; Youhei Akimoto

**ID:** 150355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ijYiE70M5J>) | [PDF](<https://openreview.net/pdf?id=ijYiE70M5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150355>)

Optimizing the leader's policy via hypergradients \(HG\) in bilevel reinforcement learning \(RL\) typically assumes a white\-box follower\. To enable real\-world applications, we address the black\-box follower setting, where the leader must optimize solely from observed trajectories without access to the follower's true reward function\. We propose Reward\-Estimated Hypergradients \(RE\-HG\), which leverages Inverse RL \(IRL\) to recover this unobserved reward\. Because naive IRL introduces severe reward\-shaping biases and numerical instabilities, RE\-HG introduces a theoretical bias\-cancellation mechanism that aggregates information across diverse environmental dynamics\. Together with eigenvalue truncation, this acts as implicit regularization to suppress HG norm explosions\. Empirical evaluations demonstrate that RE\-HG estimates gradients aligned with a white\-box Oracle, achieving comparable or superior performance\. Notably, in sharp reward landscapes where the Oracle becomes trapped in suboptimal local minima, RE\-HG's implicit regularization extracts stable global gradients, demonstrating robustness\.

## SIRAS: Sibling\-Relative Advantage Shaping for Reinforcement Learning from Verifiable Rewards

**Authors:** Zairun Yang; Jun Xu; Lei Liang; Huajun Chen; Qiang Zhang

**ID:** 151147 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cgLXIEtoqC>) | [PDF](<https://openreview.net/pdf?id=cgLXIEtoqC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151147>)

Reinforcement learning from verifiable rewards \(RLVR\) trains reasoning language models with group\-relative objectives such as GRPO\. However, it leaves two sources of signal underused: every token in a rollout receives the same response\-level advantage, and groups in which all rollouts succeed or all fail have zero group\-relative advantage and are typically discarded\. We observe that same prompt rollouts are not independent reward labels but sibling attempts: they share scaffolding, diverge at uncertain decisions, and sometimes reconverge\. In this paper, we propose Sibling\-Relative Advantage Shaping \(SIRAS\), a lightweight advantage\-shaping method that exploits this structure\. SIRAS segments rollouts into chunks, aligns sibling chunks with banded dynamic time warping, and reshapes the flat GRPO advantage across tokens via soft\-divergence weights that upweight chunks distinguishing a rollout from its siblings and downweight shared ones\. This reshaping preserves each rollout’s token\-averaged GRPO advantage exactly and reduces to GRPO when weights are constant\. The same sibling structure produces calibrated residuals for all\-correct and all\-wrong groups, reclaiming training signal that group\-relative baselines discard\.  Across six reasoning benchmarks, SIRAS yields the largest gains on AIME\-style competition math, including \+12\.2 on AIME25 with Qwen3\-8B and \+23\.3 on AIME26 in our backbone\-scaling study, without extra rollouts, process reward models, or step annotations\.

## GEAR: Bridging the Planner\-Actor Gap via Gradient\-Aligned Policy Extraction

**Authors:** Yao\-Hui Li; Xin Li; Hasnaa Bennis; Meiju Li; Boya Zhang; Yingfang Yuan; Wei Pang

**ID:** 152259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOmajXNPS7>) | [PDF](<https://openreview.net/pdf?id=UOmajXNPS7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152259>)

Hybrid model\-based reinforcement learning \(MBRL\) integrates lookahead planning with actor\-critic optimization for exceptional sample efficiency\. However, this decoupled architecture suffers from a critical planner\-actor mismatch\. Existing policy alignment methods face a structural dilemma: forward KL triggers mode\-covering objective conflicts, while reverse KL relies on brittle proxies that bottleneck expressivity\. To address this challenge, we propose \*\*G\*\*radient\-\*\*E\*\*mbedded \*\*A\*\*lignment \*\*R\*\*egularization \(\*\*GEAR\*\*\), a unified in\-sample extraction framework\. At its core, we derive a first\-order geometric alignment metric from the continuous\-time Hamilton\-Jacobi\-Bellman \(HJB\) equation to evaluate action evolution against the local value gradient\. By embedding this metric as an absolute modulation weight, GEAR eliminates spurious imitation and transforms the inherently diffuse forward KL into a focused, mode\-seeking objective\. Evaluations on the challenging HumanoidBench suite demonstrate GEAR achieves significantly higher sample efficiency and asymptotic performance than state\-of\-the\-art baselines\. The project code is available at https://anonymous\.4open\.science/r/GEAR\-5E80\.

## Riemannian Admissibility Flow for Offline\-to\-Online Safe Reinforcement Learning

**Authors:** Yuan Chu; Xuewu Ji

**ID:** 155552 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4hjf2AG9Vo>) | [PDF](<https://openreview.net/pdf?id=4hjf2AG9Vo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155552>)

Offline\-to\-Online \(O2O\) reinforcement learning \(RL\) is essential for policy adaptation but frequently suffers from initialization collapse due to evaluation and improvement mismatches across the learning transition\.  In safety\-critical domains, safety\-constrained model\-free O2O RL without offline data retention remains significantly under\-explored\. Existing O2O fine\-tuning methods, typically relying on policy regularization or value recalibration within Euclidean spaces, lack the structural capacity to strictly sequester policies from hazardous regions\. To facilitate a geometric paradigm for safe policy fine\-tuning, we propose Riemannian Admissibility Flow \(RAF\), which lifts safety constraints into a geometric framework by reformulating policy optimization as probability transport on anisotropic Riemannian manifolds\.  By fusing safety and uncertainty into the metric tensor, RAF transforms extrinsic scalar penalties into intrinsic topological barriers with directional gating, enabling target\-free geodesic flow matching for hazard circumvention without offline data retention\. Evaluation on representative safe O2O benchmarks shows that RAF achieves competitive performance in constraint satisfaction and task execution while effectively mitigating initialization collapse\.

## FalconPerception\-HD: High Density Perception via Reinforcement Learning

**Authors:** Sofian Chaybouti; YASSER ABDELAZIZ DAHOU DJILALI; Ngoc D Huynh; REDA ALAMI; Hilde Kuehne

**ID:** 150365 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=icSHR3O8rl>) | [PDF](<https://openreview.net/pdf?id=icSHR3O8rl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150365>)

Autoregressive perception models trained to localize visual entities under the open\-vocabulary setting are mostly trained using Supervised fine\-tuning \(SFT\) with maximum likelihood, yet it optimizes a proxy objective \(per\-token cross\-entropy\) that is fundamentally misaligned with perception metrics such as precision and recall\. In this paper, we explore post\-training reinforcement learning \(RL\), specifically GRPO, to directly align these models with their evaluation metrics\. Building up on the recently introduced Falcon Perception, we design an RL framework that addresses perception\-specific challenges: reward design for set\-structured outputs and multi\-head sampling control\. We discover multiple benefits from RL for perception: first, RL unlocks unprecedented performance in very dense scenes \(up to 500 objects per scene\) and to the best of our knowledge, no other system has such capabilities at this scale; furthermore it fixes common issues in autoregressive perception models like mask repetitions and removes almost entirely the need for NMS and coordinate deduplication, which improve both performance and efficiency and remove the need for hyperparameters tuning; overall, we notice improvements on all levels of difficulties in referring expression segmentation \(on PBench and SACO\-Gold\), and we find an elegant way to preserve the knowledge of whether an object exists or not \(as evaluated by MCC\) without training on negative samples\. We show that a simple reward penalizing false negatives and positives is enough\. We develop two hybrid self\-annotation pipelines, respectively tailored for difficult referring expressions and very dense scenes, and show their benefits on RL\-training\. Model weights and datasets will be made public\.

## RRL\-HOI: Reflective Reinforcement Learning for Open\-Vocabulary HOI Detection

**Authors:** Yongchao Xu; Jiawei Liu; Junfeng Wang; Yufei Zheng; Sen Tao; Tao Jiang; jiangbo Ai; Jin Zhang; Zheng\-Jun Zha

**ID:** 156124 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ETD6EefF3>) | [PDF](<https://openreview.net/pdf?id=0ETD6EefF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156124>)

Open\-Vocabulary Human\-Object Interaction \(HOI\) detection aims to localize interacting human\-object pairs while generalizing to novel interaction categories beyond the training set\. Although Multimodal Large Language Models \(MLLMs\) exhibit strong open\-vocabulary understanding, directly applying MLLMs to HOI detection remains challenging, as language\-prior hallucinations and coupled localization\-semantic errors can destabilize structured HOI predictions\. To address these issues, we propose RRL\-HOI, a novel Reflective Reinforcement Learning framework that trains MLLMs to follow a verify\-and\-revise self\-correction policy\. Specifically, RRL\-HOI first adapts MLLMs to produce box\-grounded HOI triplets, and then introduces an executable reflection mechanism that targets the two failure modes through structured edits over localization, human\-object pairing, and interaction semantics\. In this way, localization and pairing edits mitigate localization\-semantic coupling, while interaction\-semantic edits suppress visually unsupported language\-prior predictions\. To further improve this reflection mechanism, RRL\-HOI formulates reflection as a reinforcement learning objective trained with GRPO, where the reward jointly considers localization quality, pair\-association correctness, interaction correctness, and edit consistency\. Through reward\-driven policy learning, RRL\-HOI turns open\-vocabulary recognition from a single\-step generative prediction into an explicit verify\-and\-revise decision process, thereby bridging the gap between general multimodal understanding and precise interaction detection\. Extensive experiments on two standard open\-vocabulary HOI detection benchmarks demonstrate the effectiveness of our method\.

## CIG: Exploration via Conditional Information Gain

**Authors:** Tim Joseph; Marcus Fechner; Philipp Stegmaier; Karam Daaboul; Marius Zöllner

**ID:** 149190 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sDCGZbVL6d>) | [PDF](<https://openreview.net/pdf?id=sDCGZbVL6d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149190>)

Intrinsic rewards for exploration in reinforcement learning condition on different contexts: lifelong rewards score each transition against accumulated experience but ignore within\-rollout redundancy; episodic rewards penalize intra\-trajectory repetition but discard lifetime progress\. Hybrid methods combine both signals through heuristic weights or require Gaussian\-process dynamics that do not scale beyond low\-dimensional state spaces\. Trajectory\-level information gain decomposes into per\-step terms that condition on the replay buffer and rollout prefix simultaneously, but remains intractable for deep models\. We derive the Conditional Information Gain \(CIG\) reward as a tractable surrogate: a log\-determinant objective over an ensemble disagreement kernel whose Cholesky factorization yields causal per\-step rewards that retain both conditioning sets while scaling to high\-dimensional state spaces\. We instantiate CIG in a model\-based setting, where rollouts are short and within\-rollout corrections remain largely unexplored\. Across twelve tasks spanning discrete \(MiniGrid\) and continuous control \(OGBench\), in both clean and stochastic\-distractor settings, CIG outperforms or matches prior exploration methods while remaining robust to stochastic distractors\.

## Need\-Aware Multi\-Objective Reinforcement Learning for Emotionally Intelligent LLM Agents

**Authors:** Xiaohe Bo; Xueyang Feng; Rui Li; Zihang Tian; Xu Chen; Quanyu Dai

**ID:** 150564 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hDZG4ENJMm>) | [PDF](<https://openreview.net/pdf?id=hDZG4ENJMm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150564>)

In emotional support conversations, user needs are dynamic, shifting across turns between emotional soothing, cognitive guidance, and their combinations\. Existing methods often optimize a single user\-state objective, such as emotional relief or cognitive growth, making it difficult to capture such need shifts\. In this paper, we formulate emotional support dialogue as a need\-aware multi\-objective optimization problem, where agents learn to generate responses that balance multiple support objectives according to users' evolving needs\. We propose \\textbf\{MindFlow\}, a psychologically grounded user simulator that tracks users' emotional and cognitive needs at each turn, derives state\-dependent preference vectors from personalized arousal curves, and models mental\-state transitions with a dual\-process system\. Building on MindFlow, we introduce \\textbf\{NeMo\}, a need\-aware multi\-objective reinforcement learning framework that estimates local multi\-turn effects through forward simulation and dynamically aggregates emotional and cognitive rewards based on current support preferences\. By converting delayed, multi\-dimensional feedback into step\-level optimization signals, NeMo improves credit assignment and aligns policy learning with long\-term user\-state improvement\. Experiments show that NeMo consistently improves user\-side state metrics and response\-level supportive quality, with robust generalization under both Sim2Sim and Sim2Real evaluations\. Code and data are available at https://anonymous\.4open\.science/r/NeMo\-6EB9\.

## GraphMemRL: Action\-Native Reinforcement Learning for Persistent Graph Memory Construction

**Authors:** Bingcheng Dong; Shenglan Liu; Sifan Zhang; Jirui Tian; Weitong Wu

**ID:** 153064 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OEtBtIA3pG>) | [PDF](<https://openreview.net/pdf?id=OEtBtIA3pG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153064>)

Long\-term memory construction for LLM agents is hindered by two mismatches\. The first is a retrieval\-objective mismatch : existing systems usually retrieve memories for writing with a single holistic query derived from the current input\. However, memory construction depends on several complementary aspects of the input, and a single query is insufficient to capture these editing needs\. The second is an optimization\-granularity mismatch : long\-horizon memory learning is commonly optimized over full trajectories, whereas memory construction proceeds through incremental state transitions\. Effective supervision should therefore assess how each local edit changes the memory state\. We propose GraphMemRL , a graph\-based memory construction framework that addresses both mismatches\. GraphMemRL introduces edit\-oriented query decomposition to retrieve complementary context for memory writing\. It also uses action\-native state\-transition supervision to directly evaluate whether each graph edit improves the evolving memory state\. To make long\-horizon learning more tractable, GraphMemRL reformulates memory construction as factorized segment\-wise optimization\. The agent updates a persistent memory graph across segments under limited context budgets, preserving globally accumulated structure without full\-history training\. Experiments on long\-memory benchmarks show that GraphMemRL improves question answering and produces better connected memory structures with more controlled memory growth\. The gains are especially strong on multi\-hop, temporal, and knowledge\-update tasks\.

## Where Do Long Captions Fail? Position\-Aware Diagnosis and Reinforcement Learning for Detailed Image Captioning

**Authors:** Yuanze Hu; Zhichao Yang; Junwei Jing; Xin Yang; Wenxuan Liu; Tinghai Zhang; Jia Fu; Hongzhi Zhang; Xiangyu Wu; Ruiming Tang; Tingting Gao; Han Li

**ID:** 148457 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xguY8UCo1t>) | [PDF](<https://openreview.net/pdf?id=xguY8UCo1t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148457>)

Detailed image captioning is usually framed as an amount problem: a model should mention more visual facts while avoiding hallucination\. We argue that this framing hides a basic structure of long\-form captioning: a caption is an ordered sequence, and different failures appear at different positions\. We introduce a position\-aware rubric representation that decomposes dense human references into atomic visual claims, verifies generated captions against those claims, and induces a quartile\-wise composition of supported, hallucinated, and generic content\. This lens reveals two qualitatively different failures in long captions: models tend to produce unsupported specificity in the middle, while the final portion often escapes into vague, non\-evidential language rather than simply accumulating more hallucination\. Dense human references do not exhibit the same position\-dependent pattern under the identical pipeline, suggesting that the effect is a model behavior rather than an artifact of long descriptive text\. Motivated by this diagnosis, we propose PAGER \( P osition\- A ware G rounded E vidence R einforcement\), a GRPO training objective with separate signals for supported fine\-grained middle evidence, evidence\-bearing tail continuation, claim coverage, and content\-aware length control\. The result is a closed loop: the same ordered claim representation identifies where long captions fail and supplies the position\-specific reward needed to repair those failures\. Experiments on detailed\-caption benchmarks show that PAGER improves position\-wise grounding and pairwise caption preference while preserving competitive global caption quality\.

## DACE RL for Compute Efficient Reinforcement Learning in Small Model Reasoning

**Authors:** Guo Yue; YANG LIU; Tang Qingkang; Donghui Zhang; Li Aoyu; Rong Fu

**ID:** 151411 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=asPNY0YBKr>) | [PDF](<https://openreview.net/pdf?id=asPNY0YBKr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151411>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a dominant recipe for improving mathematical and code reasoning in open\-weight language models, but existing methods rely on fixed hyperparameters despite highly non\-stationary training dynamics\. We present DACE\-RL \(Diagnosis\-Aware Compute\-Efficient RL\), a closed\-loop framework that promotes training diagnostics to first\-class signals\. DACE\-RL tracks four lightweight statistics—token entropy, sample diversity, advantage saturation, and answer consistency—and feeds their EMA\-smoothed state to a controller that adaptively sets per\-prompt rollout budget, sampling temperature, asymmetric clipping bounds, and entropy regularization strength\. We formalize adaptive rollout allocation as a difficulty\-conditioned multi\-armed bandit and provide a regret bound that improves over uniform\-budget GRPO under heterogeneous prompt difficulty; we also give a stability result for the dual\-loop entropy\-diversity controller\. Across three small base models \(Qwen2\.5\-Math\-1\.5B, Qwen2\.5\-7B, and Llama\-3\.1\-8B\-Instruct\) and six math reasoning benchmarks, DACE\-RL matches or improves Pass@1 while reducing rollout\-GPU\-hours by 38–52%, and improves Pass@32 by 4\.7 absolute points on average\. Pilot analysis further shows that diagnostic inflection signals appear 100–300 update steps before reward plateau, indicating that diagnosis\-aware control is a key lever for compute\-efficient RLVR\.

## Effectiveness of Curriculum Learning Depends on Reward Sparsity and Competing Optima

**Authors:** John Vastola; Ann Huang; Satpreet Harcharan Singh; Samuel J Gershman; Kanaka Rajan

**ID:** 149082 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t11t6OT9PS>) | [PDF](<https://openreview.net/pdf?id=t11t6OT9PS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149082>)

While animals and people tend to learn a task more quickly and reliably when they first train on simpler versions of it, curriculum learning's effectiveness in artificial settings varies, and appears substantially greater in reinforcement learning than in supervised learning\. In this work, we construct and analyze a minimal model of policy learning to better understand why\. We consider an open\-loop, episodic target interception task whose parameters\-\-\-especially how close the agent must be to the target to receive an informative reward signal\-\-\-can be chosen so that the agent either receives informative rewards frequently \('dense' rewards\), or rarely \('sparse' rewards\)\. We mathematically and numerically analyze the dynamics of REINFORCE\-based policy learning in both cases\. In the dense reward case, curricula have only marginal benefits; in the sparse case, curricula can be required for learning to occur at all\. We find that this is especially true when the agent has the conflicting goals of minimizing effort and accumulating high reward, since this can produce distinct reward landscape optima which compete with one another\. Our characterization of useful curricula in this setting indicates that they address two issues: they \(i\) make rewards less sparse to speed up learning, and \(ii\) shape the reward landscape to steer agents away from bad local optima\.

## VIGOR: Zero\-Shot Visual Generalization via Latent\-Space Consistency in Model\-Based Reinforcement Learning

**Authors:** Mingyu Park; Samyeul Noh; Hyun Myung; Donghwan Lee

**ID:** 153294 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MKDlrS5Ftr>) | [PDF](<https://openreview.net/pdf?id=MKDlrS5Ftr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153294>)

Model\-based reinforcement learning \(MBRL\) achieves strong sample efficiency by planning within learned latent dynamics, yet its performance degrades substantially under unseen visual distractions such as background variations, lighting changes, or camera shifts\. Unlike model\-free RL, where encoder perturbations affect only single\-step predictions, MBRL suffers from a two\-level vulnerability: visual distractions first push encoder outputs out of distribution, and these errors then compound through recursive latent rollouts over the planning horizon\. We propose \*\*VI\*\*sual \*\*G\*\*eneralization via latent\-space c\*\*O\*\*nsistency in model\-based \*\*R\*\*L \(\*\*VIGOR\*\*\), a framework that enables zero\-shot generalization to unseen visual distractions while retaining the sample efficiency of its MBRL backbone\. VIGOR integrates three interdependent components: \(i\) \*asymmetric weak\-to\-strong augmentation\*, which pairs weak\-only and weak\-to\-strong latent views within a single batch; \(ii\) \*dynamics\-level consistency\*, which enforces augmentation\-invariant transition predictions through direct latent regression; and \(iii\) \*encoder\-level stabilization\*, which prevents encoder drift under the cross\-augmentation supervision imposed by dynamics\-level consistency\. Evaluations on the DeepMind Control Suite \(DMC\) and Robosuite show that VIGOR outperforms state\-of\-the\-art model\-free and model\-based baselines, surpassing the second\-best baseline by $3\.4\\\\%$ on DMC and $43\.6\\\\%$ on Robosuite\. Ablations further show that VIGOR's robustness is augmentation\-agnostic: replacing the default augmentation with alternatives from distinct perturbation families preserves strong generalization, confirming that latent\-space consistency, not the augmentation choice, drives robustness\. The source code is available at https://anonymous\.4open\.science/r/vigor\-B641/\.

## ART for Diffusion Sampling: A Reinforcement Learning Approach to Timestep Scheduling

**Authors:** Yilie Huang; Wenpin Tang; XUNYU ZHOU

**ID:** 155895 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=21auOU2ZNu>) | [PDF](<https://openreview.net/pdf?id=21auOU2ZNu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155895>)

We consider time discretization for score\-based diffusion models to generate samples from a learned reverse\-time dynamic on a finite grid\. Uniform and hand\-crafted grids can be suboptimal given a budget on the number of time steps\. We introduce Adaptive Reparameterized Time \(ART\), which controls the clock speed of a reparameterized time variable to redistribute computation along the sampling trajectory while preserving the terminal time, with the objective of minimizing the aggregate Euler discretization error\. We derive a randomized companion ART\-RL that recasts ART as a continuous\-time reinforcement learning problem with Gaussian policies, and prove a two\-directional bridge between the two: the deterministic ART optimum lifts to an optimal Gaussian policy, and conversely any optimal Gaussian policy must recover the ART control through its mean\. This bridge turns continuous\-time actor\-\-critic learning into a principled, rather than heuristic, route to the deterministic timestep optimum\. Within the official EDM pipeline, ART\-RL improves FID on CIFAR\-\-10 across a wide range of budgets; after one\-time offline training, the distilled deterministic schedule transfers without retraining to AFHQv2, FFHQ, and ImageNet at no extra inference cost\.

## From Weak Data to Strong Policy: Q\-Targets Enable Provable In\-Context Reinforcement Learning

**Authors:** yichen lin; Xuyuan Xiong; xue wang; Xiangfu Meng; Mike Wei; Tao Yao

**ID:** 152260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNtPiyXC2w>) | [PDF](<https://openreview.net/pdf?id=UNtPiyXC2w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152260>)

Existing in\-context reinforcement learning methods mainly pretrain Transformers with supervised behavior\-prediction objectives\. While such objectives support task inference from context, they tie the learned policy to the quality of offline actions and can fail when trajectories are weak or suboptimal\. We propose Q\-Target Pretrained Transformers \(QTPT\), which preserves context\-conditioned inference but replaces behavior cloning with a Bellman\-style Q\-target objective\. QTPT learns to estimate action values from contextual rewards and transitions, rather than simply imitating the behavior policy\. We analyze QTPT in stochastic linear bandits and finite\-horizon MDPs, deriving suboptimality bounds that separate offline\-data effects from Transformer approximation error\. Empirically, QTPT is most beneficial under weak offline data across controlled RL benchmarks, and controlled ablations show that context conditioning is essential while Bellman/TD targets provide additional gains\. We further include D4RL experiments as higher\-dimensional stress tests under matched Transformer baselines\.

## Learning to Inject: Automated Prompt Injection via Reinforcement Learning

**Authors:** Xin Chen, Cynthia; Jie Zhang; Florian Tramer

**ID:** 152341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TmeVCourtc>) | [PDF](<https://openreview.net/pdf?id=TmeVCourtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152341>)

Prompt injection is a critical vulnerability in LLM agents, yet the strongest methods still rely on human red\-teamers and hand\-crafted prompts\. Adapting automated jailbreak optimizers does not close this gap: jailbreaks shape models toward generic compliance, while prompt injection requires emitting specific tool calls with correct parameters\. The success signal is binary, and randomly sampled suffixes almost never trigger it—so standard optimizers have no gradient to follow\. We present AutoInject, a black\-box reinforcement learning \(RL\) framework that learns adversarial suffixes for prompt injection\. A learned comparison\-based reward scores each candidate against the best suffix seen so far, turning the binary signal into a dense reward suitable for RL optimization\. The framework supports both online query\-based attacks and offline\-trained transferable suffixes that need no utility access at deployment, and incorporates a utility objective when task\-completion feedback is available\. On AgentDojo, AutoInject outperforms template attacks, GCG, TAP, and adaptive attack across production models, with statistically significant improvements under McNemar's test with $p&lt;0\.05$\. Suffixes learned by AutoInject also break Meta\-SecAlign\-70B, a model fine\-tuned specifically to resist prompt injection, where template attacks fail outright\. The results establish an automated baseline for prompt injection and expose a gap between preference\-based defenses and adaptive optimization\-based attackers\.

## Leveraging Error Diversity in Group Rollouts for Reinforcement Learning

**Authors:** Wenpu Liu; Yuqi Xu; Weichu Xie; Yongfu Zhu; Shuai Dong; Ziyue Wang; Wenqi Shao; Xiaoying Zhang; Tong Yang; Nan Duan; Jiaqi Wang

**ID:** 154049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GbhCgaAr80>) | [PDF](<https://openreview.net/pdf?id=GbhCgaAr80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154049>)

Reinforcement Learning from Verifiable Rewards \(RLVR\) typically samples multiple responses per prompt and assigns binary rewards based on individual correctness, yet the collective structure of the group output, specifically, the distribution of errors is largely discarded\. We identify this as a missed opportunity: empirical analysis reveals that error diversity within a group is a strong predictor of training success, with problems eliciting diverse wrong answers benefiting substantially more from RLVR than those producing homogeneous failures\. Motivated by this observation, we propose $\\textbf\{Error Diversity Advantage Shaping \(EDAS\)\}$, a lightweight, algorithm\-agnostic technique that modulates the advantage signal for incorrect rollouts based on intra\-group error diversity\. EDAS amplifies penalties for dominant, repeated errors and attenuates penalties for rare, exploratory ones, thereby encouraging the model to maintain diverse reasoning paths and discouraging error perseveration\. Crucially, EDAS operates as a simple post\-hoc adjustment that can be seamlessly integrated into any RLVR algorithm\. We validate EDAS on top of several mainstream RLVR methods across a series of models and seven challenging math benchmarks, demonstrating consistent improvements\. Notably, EDAS yields an average improvement of $\\textbf\{6\.29\}$ points over DAPO on Qwen3\-8B across seven benchmarks, confirming that exploiting the latent information in group rollouts is a broadly effective strategy for strengthening RLVR\.

## CAST: Certifiable Aggregation of Smoothed Teachers for Robust Policy Adaptation

**Authors:** Zhongrui Zhao; Yanan Cai; Zhigang Lu; Longkun Guo; Ickjai Lee; Shuchao Pang; Minhui Xue

**ID:** 151249 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bmqxbwQYk6>) | [PDF](<https://openreview.net/pdf?id=bmqxbwQYk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151249>)

Transfer learning \(TL\)\-based policy adaptation in deep reinforcement learning \(DRL\) usually relies on target\-side data information for retraining when facing new tasks\. However, two important issues remain underexplored in practical scenarios: existing DRL transfer learning methods usually lack theoretical guarantees against adversarial attacks, and target\-side data information may be unavailable for retraining\. In this paper, we propose Certifiable Aggregation of Smoothed Teachers \(CAST\), which adapts source policies by aggregating multiple certified smoothed teachers without any form of retraining, and further certifies the robustness of the adapted policy at both the action level and the cumulative reward level\. CAST certification faces three key challenges: \(i\) value\-function transfer in DRL cannot preserve certified robustness without robust retraining; \(ii\) reward changes break the direct reusability of source teachers' action\-level certificates; and \(iii\) existing certified robustness transfer results provide limited guidance for certifying the student's cumulative reward\. These challenges prevent us from directly using existing TL techniques in DRL\. To address them, CAST constructs robustness signals from source certificates, incorporates them into policy aggregation to obtain action\-level certificates, and bridges the adapted policy's action\-level certificates to its target\-task cumulative\-reward certificate\. Experiments on five multi\-objective DRL benchmarks show that CAST exceeds the best source teacher in 17 out of 40 attack configurations and largely remains within the performance range of the source teachers\. When testing whether smoothing benefits can be transferred, CAST improves in 39 out of 40 configurations, with a maximum relative gain of 183\.9\\%\.

## Self\-Distilled RLVR

**Authors:** Chenxu Yang; Chuanyu Qin; Qingyi Si; Minghui Chen; Naibin Gu; Dingyu Yao; Zheng Lin; Weiping Wang; Nan Duan; Jiaqi Wang

**ID:** 152431 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAt6jrbMb8>) | [PDF](<https://openreview.net/pdf?id=TAt6jrbMb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152431>)

On\-policy distillation \(OPD\) has become a popular training paradigm in the LLM community\. This paradigm selects a larger model as the teacher to provide dense, fine\-grained signals for each sampled trajectory, in contrast to reinforcement learning with verifiable rewards \(RLVR\), which only obtains sparse signals from verifiable outcomes in the environment\. Recently, the community has explored on\-policy self\-distillation \(OPSD\), where the same model serves as both teacher and student, with the teacher receiving additional privileged information such as reference answers to enable self\-evolution\. This paper demonstrates that learning signals solely derived from the privileged teacher result in severe information leakage and unstable long\-term training\. Accordingly, we identify the optimal niche for self\-distillation and propose \\textbf\{RLSD\} \(\\textbf\{RL\}VR with \\textbf\{S\}elf\-\\textbf\{D\}istillation\)\. Specifically, we leverage self\-distillation to obtain token\-level policy differences for determining fine\-grained update magnitudes, while continuing to use RLVR to derive reliable update directions from environmental feedback \(e\.g\., response correctness\)\. This enables RLSD to simultaneously harness the strengths of both RLVR and OPSD, achieving a higher convergence ceiling and superior training stability\.

## Interactive Combinatorial Reinforcement Learning for Knowledge Graph Reasoning

**Authors:** Jun Nie; Yonggang Zhang; Tongliang Liu; Chengqi Zhang; Xinmei Tian; Bo Han

**ID:** 155091 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Vo01NLzG6>) | [PDF](<https://openreview.net/pdf?id=8Vo01NLzG6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155091>)

Knowledge Graph Question Answering \(KGQA\) increasingly requires multi\-turn interaction with knowledge graphs \(KGs\) to derive final answers\. Such interactive capabilities often rely on proprietary large\-scale LLMs, which hinders cost\-efficient and local deployment\. Reinforcement learning offers a scalable alternative for endowing smaller open\-source LLMs with multi\-turn interaction ability, as it enables models to improve from self\-explored interaction trajectories rather than relying on expensive expert demonstrations\. However, KGQA presents a distinctive challenge for RL: unlike tasks where exploration can proceed in a relatively unconstrained textual space, KG reasoning is governed by a sparse graph topology\. Free\-form policy rollouts frequently generate relation sequences that cannot be executed on the graph, making reward signals sparse and unstable\. We propose ICOR, an Interactive Combinatorial Reinforcement Learning framework that grounds policy exploration in the combinatorial structure of KGs\. ICOR first retrieves a query\-specific set of candidate relations and then restricts policy rollouts to relation\-path compositions within this graph\-derived space\. This design increases the likelihood that sampled trajectories are executable and thus informative for policy optimization\. Building on this constrained rollout space, ICOR applies GRPO with a staged feedback mechanism that guides learning from structural validity to answer\-consistent reasoning\. Experiments on multiple KGQA datasets demonstrate the effectiveness of ICOR\.

## Beyond Training Time, Test\-Time Coordination is Essential for Cooperative MARL

**Authors:** Dongsu Lee; Sooraj Sathish; Joonkyung Kim; Woojun Kim; Amy Zhang

**ID:** 140090 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HIJXWUeWXw>) | [PDF](<https://openreview.net/pdf?id=HIJXWUeWXw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140090>)

We argue that cooperative multi\-agent reinforcement learning \(MARL\) should treat test\-time coordination as part of the problem definition rather than a deployment artifact\. Our focus is on long\-horizon, centrally monitored cooperative systems such as warehouse robotics, automated storage\-and\-retrieval systems, and cloud\-resource scheduling, where teams share a reward, operate under shifting objectives, and already run with global telemetry at deployment\. The dominant paradigm in this regime, centralized training with decentralized execution \(CTDE\), uses global information only during training and provides no coordination channel at execution\. This is sufficient when agents are weakly coupled or the environment is stationary, but it fails when the team must realign after conditions change\. The limitation is structural rather than algorithmic, and more training cannot add a channel that does not exist at execution time\. We call this the recoverability gap\. To address it, we name the underexplored design space of intermittent test\-time coordination as centralized training with mixed execution \(CTME\), in which a coordinator observes global state and emits high\-level signals while agents act locally\. CTME is not a particular learning algorithm, but a cooperative MARL problem setting that makes test\-time information structure explicit\. It specifies team\-level information, high\-level signals, and update frequency after training, with CTDE recovered as a limit case\. We do not argue that CTDE is obsolete\. We argue that removing the test\-time channel is a modeling choice, not a necessity, and the wrong default when global telemetry is available and teams must recover from drift\.

## Exploring Lifelong Adaptation: In\-Context Reinforcement Learning in Non\-Stationary Environments

**Authors:** Ye Wang; Kaiqian Cui; Xinrun Xu; Tao Zhang; Qin Jin

**ID:** 154772 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B4sdRfOm1V>) | [PDF](<https://openreview.net/pdf?id=B4sdRfOm1V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154772>)

Standard In\-Context Reinforcement Learning \(ICRL\) typically assumes stationary dynamics within an interaction history, a restriction that limits its real\-world applicability\. We formalize Lifelong ICRL, a more realistic paradigm in which agents must continuously adapt to diverse non\-stationary dynamics, ranging from abrupt random shifts to structured temporal drifts within a single lifetime\. To probe the adaptation limits of this setting, we conduct a large\-scale empirical study across non\-stationary environments that span discrete symbolic reasoning and continuous physics\-based control\. We systematically investigate three core dimensions governing adaptation: \(i\) Training Regimes, comparing the generalization boundaries of domain randomization, stationary training, non\-stationary training, and their staged combinatorial strategies; \(ii\) Model Architectures, evaluating modern sequence models, including Linear Attention and hybrid designs; and \(iii\) Impact of Scale, analyzing the relative contributions of interaction scale and model capacity\. Our results reveal how these factors jointly shape robust in\-context adaptation under unknown dynamics, yielding actionable insights for the design of generalist agents\.

## Tuning the Tuner

**Authors:** Jacob Adkins; Michael Bowling; Adam White

**ID:** 153184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBWT71jwtz>) | [PDF](<https://openreview.net/pdf?id=NBWT71jwtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153184>)

Properly tuned hyperparameters are critical for reinforcement learning algorithms to perform well, limiting their use in real world applications\. AutoRL aims to to address this by nesting the reinforcement learning problem within an outer optimization loop, where a black\-box optimizer tunes the reinforcement learning algorithm's hyperparameters leaving the AutoRL algorithm's hyperparameters \(hyper\-hyperparameters\) fixed\. We provide the first empirical study of an AutoRL algorithm's sensitivity with respect to its hyper\-hyperparameters\. Our results demonstrate that SMAC3 with Hyperband, used to tune PPO, is sensitive to its hyper\-hyperparameters, albeit less so than PPO is to its hyperparameters, and this reduction comes at a significant computational cost\. The per\-environment tuned performance gains do not outperform random search, suggesting the reduction in sensitivity may not justify the substantial compute and engineering overhead AutoRL imposes\.

## Context Value Informed In\-Context Reinforcement Learning

**Authors:** Wenhao Zhang; Shao Zhang; Xihuai Wang; Yang Li; Ying Wen

**ID:** 149025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tPPn7WBWDR>) | [PDF](<https://openreview.net/pdf?id=tPPn7WBWDR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149025>)

In\-context reinforcement learning \(ICRL\) has emerged as an effective paradigm for test time adaptation to unseen tasks without parameter updates\. However, existing ICRL methods can exhibit brittle and unstable adaptions, and the mechanisms underlying such adaptions remain poorly understood\.  We provide a policy\-gradient view of ICRL and argue that relying on trajectory\-level return feedback can lead to high\-variance updates when test time rollout is limited\. Motivated by the actor\-\-critic principle, we propose \*\*Context Value Informed ICRL \(CV\-ICRL\)\*\*, which equips the in\-context policy with an explicit \*context value\*: the expected discounted return conditioned on the current state and accumulated interaction context\. CV\-ICRL trains a value head and writes its prediction back into the context as a value token, enabling TD\-style return targets for lower\-variance policy updates\. Experiments on the Dark Room, Minigrid, and Procgen testbeds show that CV\-ICRL substantially improves the stability of test time adaptation and achieves higher returns across tasks and environments\. The source code and data of this paper are available at  https://anonymous\.4open\.science/r/CV\-ICRL\-D161\.

## Underlying Functional Structure of Reinforcement Learning

**Authors:** Ezgi Korkmaz

**ID:** 155953 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1aSms6I8hy>) | [PDF](<https://openreview.net/pdf?id=1aSms6I8hy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155953>)

Advances in deep reinforcement learning have enabled the development of policies capable of solving complex, high\-dimensional problems, allowing AI agents to strategize and reason purely through interaction without supervision\.  Despite these successes, our knowledge on the functional properties and the underlying structure of the deep neural policy manifold remains limited\. In this paper, we uncover a fundamental functional property in reinforcement learning: the intrinsic alignment between the advantage function and the gradient of the loss targeting directions of incoherence\. We provide a rigorous theoretical foundation for this relationship, demonstrating that this intrinsic alignment characterizes how policies learn and internalize the underlying value function and how this process governs policy decisions\.  By leveraging this fundamental functional property, we propose a novel algorithm that can diagnose and identify deep neural policy decision volatilities\. We conduct extensive empirical analysis in high\-dimensional MDPs\.  From algorithmic and architectural changes to natural distributional shifts and worst\-case perturbations, our proposed method can identify and audit the differences by leveraging the underlying structure of the deep neural policy manifold and the intrinsic correlation\.  Our analysis reveals foundational properties of policies trained in high\-dimensional MDPs, and our paper provides a principled step toward constructing scalable, stable, and generalizable deep reinforcement learning agents\.

## Optimistic Q\-value Adaptation for Offline\-to\-Online Reinforcement Learning

**Authors:** Hao Wu; Shunhao Zhang; Shuai Lü

**ID:** 155898 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=20yOoplUQb>) | [PDF](<https://openreview.net/pdf?id=20yOoplUQb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155898>)

Offline\-to\-online reinforcement learning \(O2O RL\) aims to improve offline RL agents with limited online interaction\. Prior work has shown that, in conservative value\-regularized methods such as CQL, pessimistic offline critics can underestimate values and hinder online fine\-tuning\. We show that this issue is more general: critic underestimation also appears in explicit policy\-constraint methods such as TD3\+BC, and can persist or become more severe through bootstrapped Bellman updates during fine\-tuning\. To address this problem, we propose Optimistic Q\-value Adaptation \(OQA\), a framework that corrects underestimation at the Bellman\-backup level\. OQA constructs an additional offline\-pretrained actor\-\-critic pair and uses it together with the original pair to form a controlled optimistic backup that mitigates inherited pessimism during fine\-tuning\. Unlike trajectory\-return calibration methods, OQA does not rely on return lower bounds and is not tied to CQL\-style regularization\. Across D4RL MuJoCo locomotion, Maze2D, AntMaze, and Adroit benchmarks, OQA instantiations based on TD3\+BC and CQL consistently outperform the corresponding backbones and strong O2O RL baselines\.

## When Policy Entropy Constraint Fails: Preserving Diversity in Flow\-based RLHF via Perceptual Entropy

**Authors:** Xiaofeng Tan; Jun Liu; Bin\-Bin Gao; Yuanting Fan; Xi Jiang; Chengjie Wang; Hongsong Wang; Feng Zheng

**ID:** 155843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2TmlUKr7RZ>) | [PDF](<https://openreview.net/pdf?id=2TmlUKr7RZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155843>)

RLHF is widely used to align flow\-matching text\-to\-image models with human preferences, but often leads to severe diversity collapse after fine\-tuning\. In RL, diversity is often assumed to correlate with policy entropy, motivating entropy regularization\. However, we show this intuition breaks in flow models: policy entropy remains constant, even while perceptual diversity collapses\. We explain this mismatch both theoretically and empirically: the constant entropy arises from the fixed, pre\-defined noise schedule, while the diversity collapse is driven by the mode\-seeking nature of policy gradients\. As a result, policy entropy fails to prevent the model from converging to a narrow high\-reward region in the perceptual space\. To this end, we introduce perceptual entropy that captures diversity in a perceptual space and maintains the property of standard entropy\. Building upon this insight, we propose two entropy\-regularized strategies, Perceptual Entropy Constraint and Perceptual Constraints on Generation Space, to preserve perceptual diversity and improve the quality\. Experiments across two base models, neural and rule\-based rewards, and three perceptual spaces demonstrate consistent gains in the quality\-diversity trade\-off; PEC achieves the best overall score of 0\.734 \(vs\.\\ baseline's 0\.366\); a complementary setting of PEC further reaches a diversity average of 0\.989 \(vs\.\\ baseline's 0\.047\)\. Code will be released\.

## Outbidding and Outbluffing Elite Humans: Mastering Liar’s Poker via Self\-Play and Reinforcement Learning

**Authors:** Richard Dewey; Janos Botyanszki; Ciamac C Moallemi; Andrew Zheng

**ID:** 153303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGjtyMonYy>) | [PDF](<https://openreview.net/pdf?id=MGjtyMonYy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153303>)

AI researchers have long focused on poker\-like games as a testbed for environments characterized by multi\-player dynamics, imperfect information, and reasoning under uncertainty\. While recent breakthroughs have matched elite human play at no\-limit Texas hold'em, the multi\-player dynamics are subdued: most hands converge quickly with only two players engaged through multiple rounds of bidding\. In this paper, we present Solly, the first AI agent to achieve elite human play in reduced\-format Liar’s Poker, a game characterized by extensive multi\-player engagement\. We trained Solly using self\-play with Regularized Nash Dynamics \(R\-NaD\), a model\-free, actor\-critic, deep reinforcement learning algorithm, and we successfully extend R\-NaD to the multi\-player scenario for the first time\. Solly played at an elite human level as measured by win rate \(won over 50\\% of hands\) and equity \(money won\) in heads\-up and multi\-player Liar’s Poker\. Solly also outperformed large language models \(LLMs\), including those with reasoning abilities, on the same metrics\. Solly developed novel bidding strategies, randomized play effectively, and was not easily exploitable by world\-class human players\.

## Explaining and Preventing Alignment Collapse in Iterative RLHF

**Authors:** Etienne Gauthier; Francis Bach; Michael Jordan

**ID:** 155701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3azE5mTgC1>) | [PDF](<https://openreview.net/pdf?id=3azE5mTgC1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155701>)

Reinforcement learning from human feedback \(RLHF\) typically assumes a static or non\-strategic reward model \(RM\)\. In iterative deployment, however, the policy generates the data on which the RM is retrained, creating a feedback loop\. Building on the Stackelberg game formulation of this interaction, we derive an analytical decomposition of the policy's true optimization gradient into a standard policy gradient and a parameter\-steering term that captures the policy's influence on the RM's future parameters\. We show that standard iterative RLHF, which drops this steering term entirely, suffers from alignment collapse: the policy systematically exploits the RM's blind spots, producing low\-quality, high\-reward outputs whose feedback reinforces the very errors it exploits\. To mitigate this, we propose foresighted policy optimization \(FPO\), a mechanism\-design intervention that restores the missing steering term by regularizing the policy's parameter\-steering effect on RM updates\. We instantiate FPO via a scalable first\-order approximation and demonstrate that it prevents alignment collapse on both controlled environments and an LLM alignment pipeline using Llama\-3\.2\-1B\.

## Multi\-Step Likelihood\-Ratio Correction for Reinforcement Learning with Verifiable Rewards

**Authors:** Deokgyu Yoon; Hyungkyu Kang; Joongkyu Lee; Byeongchan Kim; Gyungin Shin; Sungrae Park; Min\-hwan Oh

**ID:** 152849 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtwpyBrzB0>) | [PDF](<https://openreview.net/pdf?id=PtwpyBrzB0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152849>)

Reinforcement learning with verifiable rewards \(RLVR\) plays a pivotal role in improving the reasoning ability of large language models\. However, widely used PPO surrogate objectives are fundamentally \*local\*, as they rely on a local approximation of the exact policy gradient objective\. While this approximation improves stability by reducing the variance induced by importance sampling, it also introduces structural bias into the surrogate objective, which must be controlled through trust region mechanisms\. In this work, we introduce the $N$\-step forward trace, which augments the PPO surrogate objective using the cumulative likelihood ratio of the next $N\-1$ tokens\. Building on this idea, we propose $N$\-Step Forward\-Trace Policy Optimization \(NFPO\), a practical RLVR algorithm that integrates the $N$\-step forward trace into the masked policy gradient framework\. NFPO provides a continuous bridge between the PPO surrogate objective and the exact policy gradient objective, offering a principled mechanism for controlling the bias–variance trade\-off\. Our theoretical analysis shows that, with an appropriate choice of $N$, the proposed objective yields a tighter policy\-improvement bound than the standard PPO surrogate\. Experiments on comprehensive reasoning benchmarks demonstrate that NFPO consistently improves performance, supporting our theoretical findings\.

## AEM: Adaptive Entropy Modulation for Multi\-Turn Agentic Reinforcement Learning

**Authors:** Haotian Zhao; Songlin Zhou; Yuxin Zhang; Stephen S Yau; Wenyu Zhang; Tianlun; Tianshu Zhu; Yifeng Huang; yucheng\-zeng; Jingnan gu; Daxiang Dong; Jianmin Wu

**ID:** 154854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AOIuq1ld4R>) | [PDF](<https://openreview.net/pdf?id=AOIuq1ld4R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154854>)

Reinforcement learning \(RL\) has substantially improved the ability of large language model \(LLM\) agents to interact with environments and solve multi\-turn tasks\. However, effective agentic RL remains challenging: sparse outcome\-only rewards provide limited guidance for assigning credit to individual steps within long interaction trajectories\. Existing approaches often introduce dense intermediate supervision, such as process reward models or auxiliary self\-supervised signals, which increases supervision and tuning complexity and may limit generalization across tasks and domains\.  We present AEM, a supervision\-free credit assignment method that adaptively modulates entropy dynamics during RL training to improve the exploration\-exploitation trade\-off\. Since in agentic RL the environment is typically affected by a complete response, rather than an individual token, our analysis lifts entropy dynamics from the token level to the response level, aligning uncertainty estimation with the effective action granularity of LLM agents and reducing sensitivity to token\-level sampling noise\. We further show that entropy drift under natural\-gradient updates is governed by the interaction between the sampled\-response advantage and its relative surprisal\. Motivated by this result, AEM derives a practical response\-level uncertainty proxy and uses it to rescale advantages, leveraging the evolving balance between positive and negative samples to naturally transition from exploration to exploitation\. Extensive experiments on ALFWorld, WebShop, and SWE\-bench\-Verified with models ranging from 1\.5B to 32B demonstrate that AEM consistently improves strong RL baselines, including a \+1\.4\\% gain when integrated into a state\-of\-the\-art software\-engineering RL training framework\.

## Rollout Pass\-Rate Control: Steering Binary\-Reward RL Toward Its Most Informative Regime

**Authors:** Tianshu Zhu; Wenyu Zhang; Xiaoying Zuo; Tianlun; Haotian Zhao; yucheng\-zeng; Jingnan gu; Daxiang Dong; Jianmin Wu

**ID:** 155471 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5MwSociabw>) | [PDF](<https://openreview.net/pdf?id=5MwSociabw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155471>)

Agentic reinforcement learning \(RL\) for software engineering spends much of its compute on stateful trajectories whose grouped binary rewards are highly skewed and weakly contrastive\. We frame this as pass\-rate control and show that the binary reward\-side signal is strongest near a 50% rollout pass rate under four criteria: reward entropy, group\-filtering survival, leave\-one\-out \(RLOO\) advantage energy under Group Relative Policy Optimization \(GRPO\), and success\-failure pair count\. We propose \*Prefix Sampling\* \(PS\), which replays self\-generated trajectory prefixes to steer skewed groups toward this regime: successful prefixes give mostly failing groups a head start, while failing prefixes handicap mostly passing groups\. Replayed states are reconstructed through the existing rollout path, and replayed tokens are masked from the loss so optimization applies only to current\-policy continuations\. On SWE\-bench Verified, PS reaches the baseline high\-score regime within evaluation variability while delivering $2\.01\\times$/$1\.55\\times$ end\-to\-end wall\-clock speedups on Qwen3\-14B/32B; the 14B peak improves from $0\.274$ to $0\.295$\. AIME 2025 experiments on 4B/8B show the same pass\-rate\-control pattern, and 4B ablations attribute gains to replay, bidirectional coverage, and adaptive control\.

## Temporal Behavior Trees for Reinforcement Learning: Specifications as Rewards, Curricula, and Diagnostics

**Authors:** Vladimir Krsmanovic; Bernd Finkbeiner

**ID:** 153832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IOFQf2UdfY>) | [PDF](<https://openreview.net/pdf?id=IOFQf2UdfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153832>)

Reinforcement learning from formal specifications often separates task definition, reward shaping, curriculum design, and policy diagnostics into different mathematical objects\. This fragmentation introduces   additional conversion steps and discards structure already present in the specification, such as sub\-task boundaries, ordering constraints, and quantitative margins\. We introduce TBTCL, a framework that uses   Temporal Behaviour Trees \(TBTs\) as a unified interface for specification\-guided reinforcement learning\. A single TBT specifies the task, induces dense robustness\-based rewards, defines a curriculum, and   supports better understanding of learnt policies \-  grounded in the formal semantics of the specification language\. By adapting TBT syntax and semantics for specification guided reinforcement learning, we provide a formalism that is more expressive than popular specification languages such LTL and inherently hierarchical\. We present algorithms to automatically extract a curriculum DAG and derive dense, robustness\-based rewards directly from TBT semantics, requiring no additional user inputs like region predicates or demonstrations\. Furthermore, we utilize TBT trace segmentation to provide build understandable competence profiles and automatically adapt the reward toward bottlenecks\. We evaluate TBTCL on six specifications across discrete and continuous domains\. The   results show that TBTCL matches dense STL shaping on simpler tasks and improves over baselines on reach\-avoid specifications, while also exposing interpretable sub\-task failures through the same formal   object used for training\. We show that a Temporal Behaviour Tree act as a specification, and a reward, and a curriculum and a diagnostic\.

## Decoupling is the Key: Scaling Deep Value Networks in Reinforcement Leanring

**Authors:** Yunsheng Xue; Ziyi Zhang; zhihao wu; Youfang Lin

**ID:** 149216 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s2GEGdj4Dh>) | [PDF](<https://openreview.net/pdf?id=s2GEGdj4Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149216>)

Scaling laws have driven remarkable performance breakthroughs in Computer Vision \(CV\) and Natural Language Processing \(NLP\) by increasing model depth\. Compared to increasing width, deeper networks provide higher parameter efficiency and more expressive representations\. However, increasing network depth in reinforcement learning \(RL\) still yields limited performance gains\. In this paper, through theoretical and empirical analysis, we reveal that this performance degradation is primarily attributed to implicit low\-rank bias and overfitting\. While these two issues also exist in shallow networks, the detrimental effects caused by component coupling are significantly amplified as the network depth increases, leading to severe performance degradation\. For the first issue, we theoretically prove the existence of bootstrapped spectral coupling, which causes high\-frequency spectral components to couple with the low\-frequency spectral components of the value network, thereby driving representations of deep value networks into severe rank collapse\. For the second issue, we reveal that deep value networks severely overfit the noise induced by TD target couplings, which means the construction of TD targets is influenced by other components, such as the boundary of value distribution or current policy\. Therefore, our insight is that decoupling is the key to successfully scaling deep value networks in RL\. Motivated by this insight, we propose two simple yet effective solutions respectively: policy\-independent spectral decoupling and boundary\-target decoupling\. Moreover, decoupling policy and value learning \(as in AWR\) is also a necessary target decoupling for deep value network training in offline RL\. By integrating these decoupling components, we propose Spectrally Decoupled Distributional Learning \(SEED\)\. Empirically, to the best of our knowledge, SEED is the first approach to successfully unlock the potential of depth in both online and offline RL settings, enabling value networks to scale effectively from 3 to 32 layers with consistent performance gains\.

## Permanent and Transient Representations for Continual Reinforcement Learning

**Authors:** Nishanth Anand; Doina Precup

**ID:** 149172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sLgM3e4pXf>) | [PDF](<https://openreview.net/pdf?id=sLgM3e4pXf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149172>)

Continual Reinforcement Learning \(CRL\) agents struggle to adapt to new situations while retaining prior knowledge, leading to a stability–plasticity trade\-off\. One approach to solving this problem is by using complementary learning systems: one for slow, long\-term learning and another for quick, transient adaptation\. Anand &amp; Precup \(2023\) instantiated this idea using permanent and transient value functions, but used the same features in both systems\. Intuitively, long\-term learning should rely more on parametric representations for broad generalization, while transient learning would be best served by non\-parametric representations for situation\-specific adaptation\. In this paper, we explore this idea both theoretically and empirically\. We propose a novel non\-parametric approximation for estimating the transient value function in complex tasks\. And, demonstrate that our method enables online learning and outperforms competitive baselines on image\-based tasks and Craftax\-Classic, underscoring the effectiveness of our system\-level decomposition\.

## Breaking $\\textit\{Winner\-Takes\-All\}$: Cooperative Policy Optimization Improves Diverse LLM Reasoning

**Authors:** Haoxuan Chen; Tianming Liang; Wei\-Shi Zheng; Jian\-Fang Hu

**ID:** 150356 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iiwmhPUMvv>) | [PDF](<https://openreview.net/pdf?id=iiwmhPUMvv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150356>)

Reinforcement learning with verifiers \(RLVR\) has become a central paradigm for improving LLM reasoning, yet popular group\-based optimization algorithms like GRPO often suffer from exploration collapse, where the models prematurely converge on a narrow set of high\-scoring patterns, lacking the ability to explore new solutions\. Recent efforts attempt to alleviate this by adding entropy regularization or diversity bonus\. However, these approaches do not change the \\textit\{winner\-takes\-all\} nature, where rollouts still compete for individual advantage rather than cooperating for maximizing global diversity\. In this work, we propose Group Cooperative Policy Optimization \(GCPO\), which shifts the training paradigm from rollout competition to team cooperation\. Specifically, GCPO replaces independent rollout scoring with team\-level credit assignment: a rollout is rewarded by how much it contributes to the team's valid solution coverage, rather than its individual accuracy\. This coverage is described as a determinant volume over reward\-weighted semantic embeddings, where only correct and non\-redundant rollouts contribute to this volume\. During advantage estimation, GCPO redistributes the collective team reward to each single rollout according to its average marginal contribution to the team\. This cooperative training paradigm routes optimization toward non\-redundant correct reasoning paths\. Experiments across multiple reasoning benchmarks demonstrate that GCPO significantly improves both reasoning accuracy and solution diversity over existing approaches\. Code will be made available\.

## CasePlay: Self\-Play Reinforcement Learning from Case Reports for Medical Reasoning

**Authors:** Hao Wang; Zihan Wang; Kai WU; Jian Yao; Yiwen Ye; Yongcan Luo; Dapeng Wu; Jiale Chen; Haihua Yang

**ID:** 153097 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nx6gxXwb7V>) | [PDF](<https://openreview.net/pdf?id=Nx6gxXwb7V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153097>)

Reinforcement learning \(RL\) is a promising way to improve the clinical reasoning abilities of large language models \(LLMs\), but current pipelines often rely on expert\-labeled questions or costly synthetic\-data generation\. Meanwhile, the medical literature offers a wealth of high\-quality unlabeled documents, including clinical case reports that trace the full clinical course from initial presentation to final treatment decisions\. We study whether document\-grounded self\-play can convert these reports into effective RL training signals\. We identify two challenges that limit existing self\-play methods in this setting: knowledge\-point fixation, where the proposer repeatedly asks about a narrow set of salient clues in a source report, and difficulty\-quality mismatch, where appropriately difficult questions may still be poorly formed or shallow, limiting their value for reasoner training\. To address these challenges, we propose CasePlay, a self\-play framework with two key components: \(a\) a Knowledge\-Conditioned Proposer, which anchors question generation to case\-specific knowledge points so that questions draw on a broader range of evidence from the source report; and \(b\) a Rubric\-Judge Reasoner, which augments answer\-accuracy feedback with rubric\-based quality feedback on clue integration, reasoning depth, and option quality, guiding the proposer toward reasoning\-intensive questions that better support reasoner training\. Extensive experiments across seven medically related benchmarks demonstrate that CasePlay outperforms existing self\-play baselines and improves the SFT warm\-start model by 3\.0 points on average, highlighted by a 6\.9\-point gain on LiveClin\. This approach offers an effective path toward continually improving medical reasoning ability through self\-play RL\. Code is available at \\url\{https://anonymous\.4open\.science/r/CasePlay\}\.

## Off\-policy Learning with Excursion Policies

**Authors:** Jiamin He; Mark Rowland; Daniel \(Zhaohan\) Guo; Hado van Hasselt; Diana Borsa

**ID:** 151798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XvL7S5ljp6>) | [PDF](<https://openreview.net/pdf?id=XvL7S5ljp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151798>)

Off\-policy reinforcement learning \(RL\) tries to learn the value of a target policy while data comes from a different behavior policy\. This often requires trading off bias for variance or stability\. One way to trade these off is to linearly interpolate between the behavior and target policies, but this represents only one point in a broader space of interpolation mechanisms\. We introduce \\emph\{excursion policies\}\-\-a structured alternative where the agent follows the target policy for a multi\-step \`\`excursion'' before reverting to the behavior policy\. We derive dynamic programming results for these policies, establishing the theoretical basis for their use in RL\. We further develop provably sound off\-policy temporal\-difference \(TD\) algorithms for excursion value estimation\. We find that excursion policies provide an efficiency\-stability trade\-off comparable to mixture policies in continuous control benchmarks, and our analysis illustrates conceptual differences in their behavior\.

## NeuroMem: A Neuroplastic Memory Framework for Lifelong Agents through Delayed Consolidation

**Authors:** Yingyi Cheng; Xueqiang Han; Chen Yu

**ID:** 153760 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=It0A0c7CHw>) | [PDF](<https://openreview.net/pdf?id=It0A0c7CHw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153760>)

With long\-term memory, LLM\-based agents have demonstrated remarkable capabilities in handling complex long\-horizon tasks\. However, existing memory frameworks primarily treat long\-term memory as a post\-admission management problem, emphasizing how experiences should be organized, updated, or controlled\. This overlooks a more fundamental stage in the memory lifecycle, i\.e\., how transient experiences are progressively transformed into stable and task\-transferable knowledge\. Biological memory consolidation provides a temporal principle for memory formation, whereby long\-term memory emerges through the delayed stabilization and selective transformation of recent experience, rather than through its verbatim preservation\. Motivated by this, we propose NeuroMem, a neuroplastic memory framework for lifelong agents through delayed consolidation\. NeuroMem formulates the formation of task\-transferable knowledge in long\-term memory as a delayed\-reward reinforcement learning problem\. Specifically, newly formed memory candidates are first maintained in a transient buffer, where a consolidation policy learns to promote, merge, retain, or discard them only after their delayed utility rewards become observable through subsequent interactions\. Experiments on EHRSQL and LoCoMo show NeuroMem achieves stronger performance with a smaller memory set, improving EHRSQL task success by up to 8\.7% and LoCoMo F1/BLEU\-4 by up to \+5\.20%/\+0\.97% over baselines\.

## Tool Verification for Test\-Time Reinforcement Learning

**Authors:** Ruotong Liao; Nikolai Röhrich; Xiaohan Wang; Yuhui Zhang; Yasaman Samadzadeh; Volker Tresp; Serena Yeung\-Levy

**ID:** 153674 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jd7P3rhNnN>) | [PDF](<https://openreview.net/pdf?id=Jd7P3rhNnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153674>)

Test\-time reinforcement learning \(TTRL\) has emerged as a promising paradigm for adapting large reasoning models \(LRMs\) on unlabeled test inputs, using self\-consensus rewards derived from majority voting over sampled rollouts\. However, majority voting can mistake popularity for correctness: a spurious yet high\-frequency unverified consensus may become a biased reward signal, causing test\-time RL to reinforce frequent but wrong answers and collapse into an incorrect mode\. We address this false\-popular failure mode with T^3RL \(Tool\-Verification for Test\-Time Reinforcement Learning\), a verification\-aware test\-time RL framework\. T^3RL grounds pseudo\-label construction in external tool evidence\. Concretely, a verifier uses external tool evidence, such as code execution, to upweight verified rollouts during verification\-aware voting, producing more reliable pseudo\-labels for training\. Across mathematical reasoning benchmarks of varying difficulty, including MATH\-500, AMC, and AIME 2024, and diverse backbone families, T^3RL significantly improves over TTRL, with stronger performance on harder problems\. More broadly, T^3RL is positioned as a verified online data synthesizer, highlighting the role of test\-time tool verification in reliable online adaptation\.

## ECHO\-2: A Large\-Scale Distributed Rollout Framework for Cost\-Efficient Reinforcement Learning

**Authors:** Jingwei Song; Meng Chen; Jie Xiao; Qingnan Ren; Jiaqi Huang; Yangshen Deng; Senyu Tong; Wanyi Chen; Suli Wang; Zhisheng Chen; Ziqian Bi; Shuo Lu; Yiqun Duan; Xu Wang; Rymon Yu; Lynn Ai; Eric Yang; TIANYU SHI

**ID:** 152365 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TbGdYIqIoF>) | [PDF](<https://openreview.net/pdf?id=TbGdYIqIoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152365>)

Reinforcement learning \(RL\) is a critical stage in post\-training large language models \(LLMs\), involving repeated interaction between rollout generation, reward evaluation, and centralized learning\. Distributing rollout execution offers opportunities to leverage more cost\-efficient inference resources, but introduces challenges in wide\-area coordination and policy dissemination\. We present ECHO\-2, a distributed RL framework for post\-training with remote inference workers and non\-negligible dissemination latency\. ECHO\-2 combines centralized learning with distributed rollouts and treats bounded policy staleness as a user\-controlled parameter, enabling rollout generation, dissemination, and training to overlap\. We introduce an overlap\-based capacity model that relates training time, dissemination latency, and rollout throughput, yielding a practical provisioning rule for sustaining learner utilization\. To mitigate dissemination bottlenecks and lower cost, ECHO\-2 employs peer\-assisted pipelined broadcast and cost\-aware activation of heterogeneous workers\. Experiments on GRPO post\-training of LLMs ranging from 4B to 32B parameters under real wide\-area bandwidth regimes show that ECHO\-2 significantly improves cost efficiency while preserving RL reward comparable to strong baselines\.

## Drifting Field Policy: Wasserstein Gradient Flow on Policy Space for Offline\-to\-Online RL

**Authors:** Juil Koo; Mingue Park; Jiwon Choi; Yunhong Min; Minhyuk Sung

**ID:** 151871 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XGZrKnM8Qo>) | [PDF](<https://openreview.net/pdf?id=XGZrKnM8Qo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151871>)

We propose Drifting Field Policy \(DFP\), a non\-ODE one\-step generative policy built on the drifting model paradigm\. Under online RL finetuning, we frame the policy update as a reverse\-KL Wasserstein\-2 gradient flow toward a soft target policy, realized by DFP as a steepest\-descent step on probability space\. By construction, this gradient step is decomposed into an ascent toward higher action\-value regions and a score matching with the anchor policy as a trust region\. We further derive a simple, tractable surrogate of the otherwise intractable update loss, akin to behavior cloning on top\-K critic\-selected actions\. We find empirically that this mechanism uniquely benefits the drifting backbone owing to its non\-ODE parameterization\. With one\-step inference, DFP achieves state\-of\-the\-art performance on several manipulation tasks across Robomimic and OGBench, outperforming ODE\-based policies\.

## Beyond Self\-Play and Scale: A Behavior Benchmark for Generalization in Autonomous Driving

**Authors:** Aron Distelzweig; Faris Janjos; Andreas Look; Anna Rothenhäusler; Daniel Jost; Oliver Scheel; Raghu Rajan; Daphne Cornelisse; Eugene Vinitsky; Joschka Boedecker

**ID:** 139295 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1EcOqde6o>) | [PDF](<https://openreview.net/pdf?id=Z1EcOqde6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139295>)

Recent Autonomous Driving \(AD\) works such as GigaFlow and PufferDrive have unlocked Reinforcement Learning \(RL\) at scale as a training strategy for driving policies\. Yet such policies remain disconnected from established benchmarks, leaving the performance of large\-scale RL for driving on standardized evaluations unknown\. We present BehaviorBench \-\- a comprehensive test suite that closes this gap along three axes: Evaluation, Complexity, and Behavior Diversity\. In terms of Evaluation, we provide an interface connecting PufferDrive to nuPlan, which, for the first time, enables policies trained via RL at scale to be evaluated on an established planning benchmark for autonomous driving\. Complementarily, we offer an evaluation framework that allows planners to be benchmarked directly inside the PufferDrive simulation, at a fraction of the time\. Regarding Complexity, we observe that today's standardized benchmarks are so simple that near\-perfect scores are achievable by straight lane following with collision checking\. We extract a meaningful, interaction\-rich split from the Waymo Open Motion Dataset \(WOMD\) on which strong performance is impossible without multi\-agent reasoning\.  Lastly, we address Behavior Diversity\. Existing benchmarks commonly evaluate planners against a single rule\-based traffic model, the Intelligent Driver Model \(IDM\)\. We provide a diverse suite of interactive traffic agents to stress\-test policies under heterogeneous behaviors, beyond just using IDM\. Overall, our benchmarking analysis uncovers the following insight: despite learning interactive behaviors in an emergent manner, policies trained via pure self\-play under standard reward functions overfit to their training opponents and fail to generalize to other traffic agent behaviors\. Building on this observation, we propose a hybrid planner that combines a PPO policy with a rule\-based planner, providing a baseline for our new benchmark\.  Code is available at https://anonymous\.4open\.science/r/behavior\-bench\-707C

## DiversePlace: Diversity\-Seeking Curriculum Reinforcement Learning for Macro Placement

**Authors:** Wenrui Zhou; Jiashun Liu; Wenji Fang; Zhiyao Xie; Ling Pan

**ID:** 154452 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSqfxgcLo1>) | [PDF](<https://openreview.net/pdf?id=DSqfxgcLo1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154452>)

Macro placement is a critical early\-stage decision in physical design because macro locations strongly constrain subsequent implementation stages\. The task is difficult because these high\-impact discrete decisions must be made before downstream quality can be measured accurately, forcing training to rely on fast but imperfect training\-time oracles such as half\-perimeter wirelength \(HPWL\)\. Existing RL\-based placers therefore mostly optimize single HPWL\-driven solutions, and their long sequential horizons often require heavy search assistance or offline expert data while leaving little room to preserve multiple competitive layouts\. We address this gap by making quality\-controlled diversity an explicit objective for macro placement\. Instead of relying on a single proxy\-optimal solution, we maintain a compact archive of HPWL\-competitive yet meaningfully different placements for downstream selection\. We realize this idea in DiversePlace, a curriculum proximal policy optimization \(PPO\) framework that combines a quality\-gated diversity reward with an expanding placement horizon, enabling from\-scratch RL optimization while keeping exploration inside competitive HPWL regions\. On the ISPD2005 benchmarks, DiversePlace consistently improves top\-5, top\-10, and top\-20 archive diversity and achieves lower or virtually identical HPWL on all eight designs with better efficiency\. Our code is available at https://anonymous\.4open\.science/r/NIPS2026\-DiversePlace\-A615\.

## Knowledge\-Level Consistency Reinforcement Learning: Dual\-Fact Alignment for Long\-Form Factuality

**Authors:** Junliang Li; Yucheng Wang; Yan Chen; Yu Ran; Ruiqing Zhang; Jing Liu; Hua Wu; Haifeng Wang

**ID:** 152984 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OsM0q9Qc8R>) | [PDF](<https://openreview.net/pdf?id=OsM0q9Qc8R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152984>)

Hallucination in large language models \(LLMs\) during long\-form generation remains difficult to address under existing reinforcement learning from human feedback \(RLHF\) frameworks, as their preference rewards often overlook the model's own knowledge boundaries\. In this paper, we propose the $\\textbf\{K\}$nowledge\-$\\textbf\{L\}$evel $\\textbf\{C\}$onsistency Reinforcement Learning $\\textbf\{F\}$ramework \($\\textbf\{KLCF\}$\), which re\-examines this problem from a distribution alignment perspective\. KLCF formalizes long\-form factuality as a bidirectional distribution matching objective between the policy model's expressed knowledge distribution and the base model's parametric knowledge distribution: under the constraint that generation must not exceed the support set of the base knowledge, the objective maximizes coverage of high\-probability facts, thereby jointly optimizing precision and recall\. To achieve this, we design a Dual\-Fact Alignment mechanism that approximates the recall term using a factual checklist constructed by sampling from the base model, and constrains hallucinations with a lightweight truthfulness reward model\. Both components are jointly optimized and require no external retrieval throughout training\. Experimental results demonstrate that KLCF consistently improves factuality metrics across multiple long\-form benchmarks and model scales, effectively alleviating hallucination and over\-conservatism while maintaining efficiency and scalability\.

## ReST\-RL: Reinforcing LLM Reasoning through Unified Self\-Training and Value\-Guided Search

**Authors:** Sining Zhoubian; Dan Zhang; Jie Tang

**ID:** 152832 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q5KwR2WUBr>) | [PDF](<https://openreview.net/pdf?id=Q5KwR2WUBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152832>)

With respect to improving the reasoning accuracy of LLMs, the representative reinforcement learning \(RL\) method — Group Relative Policy Optimization \(GRPO\) — has achieved critical success, yet it still suffers from the issue of insignificant reward signals\. This paper introduces ReST\-RL, a unified Reinforced Self\-Training \(ReST\) LLM RL paradigm that reconnects policy optimization and value\-guided search to improve LLM reasoning ability\. Firstly, ReST\-GRPO adopts an optimized ReST\-style algorithm to reshape the policy\-induced trajectory distribution by increasing the reward variance of GRPO sampling and exposing the policy to more informative partial states, thereby improving training efficiency and effectiveness\. Then, we further introduce a decoding optimization method, VM\-MCTS, which trains a Value Model \(VM\) from self\-collected Monte\-Carlo Tree Search \(MCTS\) targets and deploys it through an adapted MCTS algorithm to provide precise process signals and verification scores, further enhancing reasoning accuracy\. These two stages are internally dependent — ReST\-GRPO yields higher\-quality trajectories for value learning with VM\-MCTS, which in turn enables more effective inference\-time search\. We validate our RL paradigm on multiple coding benchmarks \(e\.g\., APPS, BigCodeBench, and HumanEval\), where it significantly outperforms other reinforcement training baselines \(naive GRPO and ReST\-DPO\), as well as decoding and verification baselines \(e\.g\., PRM\-BoN and ORM\-MCTS\), indicating its power to strengthen LLM reasoning capability\. Moreover, we further evaluate ReST\-RL on out\-of\-domain math and science reasoning tasks, where it achieves superior performance and favorable end\-to\-end efficiency trade\-offs, verifying its effective, robust, and highly generalizable nature\.

## Post\-Selection\-Safe Pessimistic Utilities for Offline Multi\-Objective Reinforcement Learning

**Authors:** Mingxi Hu; Meiling Yu

**ID:** 150460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hrkEFVLfAo>) | [PDF](<https://openreview.net/pdf?id=hrkEFVLfAo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150460>)

We study post\-selection\-safe deployment in finite\-horizon tabular offline multi\-objective reinforcement learning with full vector rewards, nonnegative linear scalarization, and preferences revealed at deployment\. A fixed dataset may already have been reused to construct a data\-dependent policy library $\\Pi\_N$; the remaining problem is to return auditable lower\-confidence utilities for future queried preferences and for small policy menus\. We introduce the Pessimistic Utility Oracle \(PUO\), a coordinatewise pessimistic vector\-value construction\. On one dataset\-level tabular model\-confidence event, PUO lower\-bounds every data\-dependent policy under every $w\\in\\mathcal\{W\}\\subset\\mathbb\{R\}\_\+^d$, without preference discretization or an additional library\-size union bound beyond the model event\. PUO yields a queried\-preference planner and SPS\+\+, a greedy policy\-set method\. The main SPS\+\+ theorem evaluates the executable rule that deploys the in\-set policy with largest PUO score, and decomposes its loss into coverage, greedy approximation, and preference\-sampling terms\. Controlled tabular audits validate these statistical effects; trajectory\-count and linear\-feature appendices are presented only as bridges beyond the main generative tabular theorem\.

## Mitigating Reward Hacking via Task Representations

**Authors:** Lillian Sun; Joe Benton; Eric Easley

**ID:** 153549 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KYN2kU8Mva>) | [PDF](<https://openreview.net/pdf?id=KYN2kU8Mva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153549>)

Language models fine\-tuned with reinforcement learning frequently learn to exploit their reward source rather than solve the underlying task\. Existing fixes are typically reactive: detect a specific exploit, then patch the reward\. We instead ask whether reward hacking can be prevented by constraining how the model represents the task\. We introduce prompt KL regularization, a single auxiliary loss that adds a KL penalty between the actor's and reference model's per\-token distributions on the prompt only, leaving the response distribution free\. Across three reward hacking tasks of different sizes, prompt KL regularization maintains low hack rates \(under 3\\%\) when standard training yields up to 100\\% hack rates\. Additionally, it matches or improves ground\-truth accuracy, with no changes to the reward or environment\. We aim to understand why prompt KL regularization is effective\. Two independent mechanistic studies suggest that changes in prompt representations are key to models learning reward hacking behavior\. First, we show that prompt\-space activation steering Pareto\-dominates response\-space steering on hack rate and accuracy\. Then, we demonstrate that swapping prompt activations between models can transfer and reduce reward hacking\. Together, these results suggest that the way models internally represent the task is central to reward hacking, and that this representation can be directly constrained to prevent it\.

## The Mirage of Optimizing Training Policies: Monotonic Inference Policies as the Real Objective for LLM Reinforcement Learning

**Authors:** Jing Liang; Hongyao Tang; Yi Ma; Yancheng He; Weixun Wang; Xiaoyang Li; Wenbo Su; Jinyi Liu; YAN ZHENG; Jianye Hao; Bo Zheng

**ID:** 151835 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XZFFNg98QZ>) | [PDF](<https://openreview.net/pdf?id=XZFFNg98QZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151835>)

Reinforcement learning \(RL\) has gained growing attention in large language model \(LLM\) post\-training, yet RL training remains fragile and can suffer from instability or collapse\. One vital cause is \\textit\{training\-inference mismatch\}: % different from traditional RL, the engineering design of LLM adopts separate inference and training engines for generation efficiency and training precision, which in practice exhibits inconsistent probabilities for the same trajectories on training and inference sides, even with synchronized model parameters\. This naturally induces a special type of off\-policyness ever existing and poisoning the training\. Prior works have made various efforts in addressing the off\-policyness to stabilize the training policies under the mismatch\. In this paper, we point out the \\textit\{object misalignment\} neglected by existing works that an effective update to the policy in the training engine not necessarily ensures the improvement of the inference policy, i\.e\., the one used in deployment\. To this end, we propose a new policy optimization objective for LLM RL, named \\textbf\{Monotonic Inference Policy Improvement \(MIPI\)\}\. Following this principle, we introduce \{Monotonic Inference Policy Update \(MIPU\)\}, a two\-step LLM RL framework that constructs sampler\-referenced candidate updates and selectively accepts synchronized candidates using an inference\-side gap proxy\. Experiments under high mismatch show that \{MIPU\} improves average reasoning performance and training stability\.

## Benign Reinforcement Learning Can Amplify Latent Backdoors

**Authors:** Chen Lai; Javier Rando; Nicholas Carlini; Yiming Zhang

**ID:** 149677 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oGkR8QUVmY>) | [PDF](<https://openreview.net/pdf?id=oGkR8QUVmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149677>)

Reinforcement learning \(RL\) is now standard for post\-training large language models\. The same reward optimization that elicits useful capabilities, however, can also reinforce latent backdoors planted earlier in the pipeline: attack success rates under 0\.2% after SFT rise to 40\-\-98% on training\-distribution inputs after RL, and generalize to 13\-\-30\\% on held\-out evaluation, with no modification to the RL data, reward function, or training loop\. We study this phenomenon in the context of agent models, where SFT poisoning teaches the victim model \(Qwen3\-8B and a small frontier model\) to call an attacker\-controlled oracle\. Because the oracle can be set up to always return correct answers, calling it earns higher reward than the model's own attempts, and RL reinforces the behavior\. We further show that the oracle's RL\-time responses can instill persistent biases, such as brand preferences, that survive into deployment even when no tool calls happen\. Such patterns appear difficult to detect with current tools: traditional guard models do not flag this mechanism, and LLM\-based auditors remain unreliable, achieving only 4\.5\\% precision even after iterative prompt refinement\. Our findings point to the value of post\-RL safety evaluation, in particular scrutinizing tool\-call patterns such as unnecessary external invocations\.

## Survive or Collapse: The Asymmetric Roles of Data Gating and Reward Grounding in Self\-Play RL

**Authors:** Sophia Xiao Pu; Zhaotian Weng; Chengzhi Liu; Jayanth Srinivasa; Gaowen Liu; William Yang Wang; Xin Wang

**ID:** 154070 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GPTwtahTVC>) | [PDF](<https://openreview.net/pdf?id=GPTwtahTVC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154070>)

Self\-play reinforcement learning trains language models on their own generated tasks, co\-evolving a proposer and solver without human labels\. Recent systems report strong reasoning gains, but collapse and instability are widely observed and poorly understood\. The dominant response treats this as a reward\-design problem\. We argue instead that self\-play stability is governed by two distinct levers: a data\-level gate that decides which proposer\-generated tasks enter the training pool, and the reward signal that updates the policy on tasks already admitted\. Through controlled experiments on a Python output\-prediction task and a deterministic\-DSL twin task that strips pretraining priors, output ambiguity, and executor noise, we find the two levers are asymmetric\. A strict gate is sufficient for stability under every reward variant we test, including a self\-consistency reward with no access to ground truth; while no reward variant is sufficient once the gate is removed\. This asymmetry exposes a counter\-intuitive coupling we call the Grounded Proposer Paradox: a proposer with ground\-truth access accelerates collapse faster than an ungrounded one when paired with a self\-consistency solver, by concentrating training on clean tasks that form the fastest path to a spurious self\-consistent attractor\. Replacing the binary gate with a continuous strictness parameter $\\varepsilon$ further reveals a two\-stage phase transition: training\-side metrics decouple at low $\\varepsilon$, while validation accuracy holds until $\\varepsilon$ is much higher\. Data\-level gating, not reward calibration, is the binding constraint on self\-play stability\.

## Distill to Think, Foresee to Act: Cognitive\-Physical Reinforcement Learning for Autonomous Driving

**Authors:** Yang Wu; Qiang Meng; Zhaojiang Liu; Youquan Liu; Jian Yang; Jin Xie

**ID:** 153115 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nnj4imYoT2>) | [PDF](<https://openreview.net/pdf?id=Nnj4imYoT2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153115>)

Current end\-to\-end autonomous driving models are fundamentally constrained by the behavioral cloning ceiling of imitation learning\. While reinforcement learning offers a path to smarter autonomy, it demands two missing pieces of infrastructure: \(1\) a cognitive foundation that understands traffic semantics and driving intent, and \(2\) a foresighted physical environment that can anticipate the consequences of candidate actions\. To this end, we propose \*\*CoPhy\*\*, a \*\*Co\*\*gnitive\-\*\*Phy\*\*sical reinforcement learning framework for autonomous driving\.   To \*distill to think\*, we distill VLM knowledge into the BEV encoder and then discard the VLM entirely, retaining cognitive ability at zero inference cost while releasing the cognitive channel as a pluggable interface for optional human language commands\. To \*foresee to act\*, we build an auto\-regressive BEV world model that explicitly predicts future semantic maps conditioned on candidate actions, serving as an interpretable physical sandbox from which safety metrics are directly derived\. Built upon this dual infrastructure, we optimize the driving policy via GRPO with a novel dual\-reward mechanism: a \*physical\* reward derived from BEV rollouts enforces hard safety constraints, while a \*cognitive\* reward from a language\-aligned scorer ensures intent compliance\. Extensive experiments demonstrate that CoPhy not only achieves state\-of\-the\-art results on NAVSIM v1 and v2 benchmarks, but also enables safer driving via cognitively informed scene compliance and flexible intent control through user\-defined language instructions\.

## What Kind of Diffusion Models Do We Need in Online Reinforcement Learning?

**Authors:** Zihao Wu; Hongyao Tang; Yi Ma; YAN ZHENG; Jianrong Wang; Jianye Hao

**ID:** 155057 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8nIo3qPIuw>) | [PDF](<https://openreview.net/pdf?id=8nIo3qPIuw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155057>)

Score matching and flow matching exhibit powerful expressive capabilities in continuous control tasks\. However, since the log probability densities of their generated actions cannot be directly accessed, they introduce substantial challenges to the implementation and optimization of Maximum\-Entropy Reinforcement Learning \(RL\)\. To address this critical limitation, the RL community has developed a wide range of diffusion\-based RL algorithms, leading to a widespread perception that the integration of diffusion models and RL has achieved remarkable success\. Yet, is this optimistic conclusion truly well\-founded? In this paper, we propose a systematic taxonomy for existing mainstream diffusion RL methods that consists of three distinct categories, and we conduct in\-depth theoretical analyses of their inherent limitations and core defects\.Our analysis reveals that existing methods either collapse the intended stochastic generative policy into action maximization, require costly long\-horizon sampling in high\-dimensional action spaces, or rely heavily on proposal distributions whose coverage fundamentally limits policy improvement\. Building on the comprehensive analysis above, we propose a novel method \\textbf\{Copuled Flow\} \. The core insight of our method is to leverage linear ordinary differential equations to maintain fully tractable log\-likelihood calculation, while adopting coupled generation mechanisms to effectively capture complex distributions\. In the experiments, we evaluate the \\textbf\{Copuled Flow\} on 3 HumanoidBench tasks, 5 MuJoCo tasks, and 7 tasks from the DeepMind Control \(DMC\) Suite\. Empirically, \\textbf\{Copuled Flow\} achieves superior performance on high\-dimensional benchmark tasks compared to competitive strong baselines\. Specifically, it significantly outperforms existing diffusion\-based RL methods by 100\\% on the HumanoidBench benchmark\.

## Fast\-RL: Accelerating Reinforcement Learning for LongCoT Reasoning Models

**Authors:** Sitong Wu; Haoru Tan; bin xia; Bei Yu; Xiaojuan Qi; Jiaya Jia

**ID:** 148369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yNcSbtT8cr>) | [PDF](<https://openreview.net/pdf?id=yNcSbtT8cr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148369>)

Large Reasoning Models \(LRMs\) have made remarkable progress, driven by a paradigm shift from fast thinking to slow thinking\. While slow\-thinking unlocks superior reasoning ability, its long\-form nature imposes a prohibitive computational burden on Reinforcement Learning \(RL\) for LRMs\. In this paper, we propose \*\*Fast\-RL\*\*, a novel framework that accelerates RL training for slow\-thinking LRMs\. Our acceleration principle stems from a foundational insight: fast\-thinking sampling serves as an efficient and powerful proxy for slow\-thinking sampling in enhancing reasoning, since the core reasoning skills are shared across thinking modes and can be improved through either trajectory type\.  Fast\-RL consists of two stages\. \*\*Stage\-1\*\* establishes reliable prompt\-based thinking\-mode control, so that a slow\-thinking\-oriented model triggers fast\-thinking under a specific prompt while preserving its native slow\-thinking under the standard prompt\. \*\*Stage\-2\*\* then enhances reasoning ability through RL with exclusively fast\-thinking sampling for acceleration\. A lightweight LoRA adapter is introduced as a dedicated mode controller: it is trained in Stage\-1 and \*\*frozen\*\* in Stage\-2, decoupling mode\-control parameters from reasoning parameters and protecting the model's native slow\-thinking from being disturbed by fast\-thinking RL\. After Stage\-2, the LoRA acts as a disposable training scaffold that can be either merged into the main model or simply discarded\. Experiments on diverse multimodal and text\-only LRMs show that Fast\-RL accelerates training by about $10\\times$ while delivering superior performance gains over vanilla slow\-thinking RL\. On Qwen3\-1\.7B, Fast\-RL improves AIME24 by $\+10\.0$ and $\+13\.7$ in slow\- and fast\-thinking evaluation, respectively\. Vanilla slow\-thinking RL, in contrast, drops slow\-thinking accuracy by $\-8\.8$ and yields only $\+2\.8$ in fast\-thinking evaluation\.

## EDEN: Emergent Dynamics in Evolutionary Neural\-networks for Robust Continuous Control

**Authors:** Chi Zhang; Jinge Li; Yifei Wang; Lei Wang; Tianyi Qian

**ID:** 149481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=poYoNCBETT>) | [PDF](<https://openreview.net/pdf?id=poYoNCBETT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149481>)

Biological neural systems leverage neuronal heterogeneity and diverse firing patterns to generate rich nonlinear dynamics, yet these mechanisms are largely abstracted away in conventional artificial neural networks \(ANNs\) and simplified spiking neural networks \(SNNs\)\. Detailed differential\-equation neural models are biologically expressive, but spike discontinuities and complex state evolution pose challenges for gradient\-based optimization in complex functional tasks\. To address this challenge, we introduce EDEN \(Emergent Dynamics in Evolutionary Neural\-Networks\), a neural dynamic model training framework inspired by natural evolutionary processes\. Built upon a continuous\-time network of heterogeneous Izhikevich neurons, EDEN integrates efficient parallel neural dynamics simulation with advanced evolutionary strategies, enabling the joint optimization of intrinsic single\-neuron\-level parameters and network\-level synaptic connections without backpropagation\. Comprehensive evaluations across multiple MuJoCo continuous motor control tasks indicate that EDEN achieves robust control performance comparable to mainstream deep reinforcement learning baselines\. Furthermore, neurodynamic analysis reveals that the trained EDEN models exhibit strong biological plausibility, characterized by functional differentiation across individual neurons and emergent low\-dimensional latent manifolds governing population dynamics\. EDEN demonstrates that the combination of gradient\-free evolutionary strategies and biological neurodynamic networks provides an alternative yet efficient paradigm alongside mainstream reinforcement learning, thereby offering a highly promising pathway towards truly biologically\-inspired intelligence\.

## Mitigating Overgeneralization in RND via Spectral Target Design

**Authors:** Minseok Jeong; Yechan Lee; Hyewon Choi; Jeongyong Yang; SooJean Han

**ID:** 148343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYvDH6yl2q>) | [PDF](<https://openreview.net/pdf?id=yYvDH6yl2q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148343>)

Random Network Distillation \(RND\) is a scalable novelty signal for reinforcement learning, but it can overgeneralize: the predictor extrapolates the random target off the data manifold, causing novelty scores to collapse on unfamiliar inputs\. This paper analyzes this failure through a kernel\-theoretic lens\. Under a GP target model and an NTK\-regime predictor, we show that the expected RND energy is a cross\-kernel residual governed jointly by the target covariance kernel and the predictor interpolation kernel\. This identifies overgeneralization as spectral under\-excitation of modes where predictor residuals would otherwise survive\. We then explicitly formulate spectral target design as a principle for shaping RND residual geometry; one concrete instance is replacing to replace the implicit random\-network target with a bandwidth\-controlled Random Fourier Feature \(RFF\) target\. Numerical experiments across offline D4RL and online Atari benchmarks show this target\-design approach improves novelty discrimination and downstream RL performance\.

## Meta\-TTRL: A Metacognitive Framework for Self\-Improving Test\-Time Reinforcement Learning for T2I Generation in Unified Multimodal Models

**Authors:** Lit Sin Tan; Junzhe Chen; Xiaolong Fu; Lichen Ma; Junshi Huang; Jianzhong Shi; Yan Li; Lijie Wen

**ID:** 154244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCG3whxlfW>) | [PDF](<https://openreview.net/pdf?id=FCG3whxlfW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154244>)

Test\-time scaling \(TTS\) improves text\-to\-image \(T2I\) generation in unified multimodal models \(UMMs\), but existing TTS methods typically rely on frozen\-parameter search or sampling, yielding only ephemeral, instance\-level improvements\. We propose Meta\-TTRL, a metacognitive test\-time reinforcement learning \(TTRL\) framework that converts test\-time generation experience into learning signals, enabling UMMs to self\-improve during T2I generation without external reward models\. Meta\-TTRL formulates test\-time learning as a closed\-loop interaction between an object\-level generator and a meta\-level introspector\. The introspector decomposes prompts into structured verification rubrics and produces confidence\-enhanced intrinsic monitoring signals, which are used to optimize the generator policy through reinforcement learning \(RL\)\. Extensive experiments demonstrate that Meta\-TTRL generalizes well across three representative UMMs, including Janus\-Pro\-7B, BAGEL, and Qwen\-Image, achieving significant gains on compositional reasoning tasks and multiple T2I benchmarks with limited data\. Further analyses with external introspectors, RL leakage, and alternative monitoring signals reveal a key principle for effective TTRL: metacognitive synergy, where monitoring signals must align with the model's own optimization regime\.

## Escaping Path Mirages in Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Seungyul Han; Junhyeon Bae; Jaebak Hwang; Gwanwoo Choi; Minung Kim

**ID:** 151359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b9QDpSzHr4>) | [PDF](<https://openreview.net/pdf?id=b9QDpSzHr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151359>)

Offline goal\-conditioned reinforcement learning remains challenging in stochastic long\-horizon settings, where compounding value estimation errors hinder reliable goal reaching\. While prior methods have sought to address this challenge through various approaches, a key challenge remains path mirage, where agents overcommit to spuriously successful trajectories in offline datasets induced by stochasticity, often leading to failure on difficult tasks\. To address this issue, we propose Branch\-aware Graph Planning \(BGP\), which captures stochastic branching structures by identifying high\-variability points as graph nodes and designing goal\-conditioned edges with segmented learning to avoid unreliable branches and reduce unnecessary stochasticity along paths\. As a result, BGP enables reliable goal reaching even in highly stochastic long\-horizon environments, and experiments on diverse OGBench tasks show that it substantially outperforms prior state\-of\-the\-art offline goal\-conditioned RL methods\.

## Unleashing the Power of Intrinsic\-Entropy\-Driven Exploration for Off\-Policy Generative RL

**Authors:** Feihong Zhang; Guojian Zhan; yinuo Wang; Letian Tao; Likun Wang; Shiqi Liu; Yao Lyu; Shengbo Eben Li

**ID:** 150470 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hnh5y3DwoB>) | [PDF](<https://openreview.net/pdf?id=hnh5y3DwoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150470>)

Generative models, such as diffusion and flow\-based models, have emerged as powerful policy approximators in deep reinforcement learning \(RL\) due to their ability to represent multi\-modal action distributions\. However, their potential for maximum entropy RL remains largely untapped, as most existing methods treat generative processes as black\-box samplers or rely on heuristic noise\. In this paper, we propose GENIEO, a novel off\-policy generative RL framework that leverages the exact intrinsic entropy of an augmented dummy\-action policy to drive principled exploration\. By designing a structurally invertible affine dual\-variable flow, we bypass the numerical approximations of standard ODE solvers\. This innovation allows us to rigorously apply the change\-of\-variables formula to derive a tractable and exact formulation for the augmented dummy\-action policy entropy, enabling its direct integration into the off\-policy learning objective\. Experimental evaluations across 14 challenging tasks from the DMControl and HumanoidBench suites demonstrate that GENIEO achieves state\-of\-the\-art \(SOTA\) performance\. By effectively discovering optimal strategies in complex, high\-dimensional environments, our approach bridges the gap between expressive generative modeling and maximum entropy RL\.

## Non\-Asymptotic Best Policy Identification Guarantees in Online Reinforcement Learning

**Authors:** Joseph Lazzaro; Alessio Russo; Aldo Pacchiano

**ID:** 155132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8AVpizcVK2>) | [PDF](<https://openreview.net/pdf?id=8AVpizcVK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155132>)

In this work we study the Best Policy Identification \(BPI\) problem in online, tabular Reinforcement Learning\. This is an active sequential hypothesis testing problem in which the learner's objective is to identify an optimal policy in a Markov Decision Process \(MDP\) with high confidence, while minimizing the expected sample complexity to do so\. We consider an online setting with deterministic rewards, where the agent must strategically navigate through the MDP in order to effectively explore\. Previous works in the literature have provided asymptotically optimal methods for BPI, such as the Navigate and Stop \(NaS\) algorithm and its variants, however existing analysis remains asymptotic\. In this work, we fill that gap by providing the first non\-asymptotic sample complexity guarantees for NaS, showing that its sample complexity depends not only on the characteristic time, but also on the connectivity of the underlying MDP, the curvature of the optimal characteristic time, and other instance\-dependent quantities\. We identify these additional attributes and make explicit their contributions to the overall sample complexity\.

## HiFloat4 Format for End\-To\-End Reinforcement Learning Post\-Training of Large Language Models

**Authors:** Hei Yi Mak; Shadan Golestan; Hoang Le; Mehran Taghian Jazi; Yunke Peng; Yaoyuan Wang; Yao Wang; JUNSONG WANG; Tianchi Hu; Fengchen He; Guipeng Hu; Tanzila Rahman; Anandharaju D Raju

**ID:** 154752 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BDwmB9cg99>) | [PDF](<https://openreview.net/pdf?id=BDwmB9cg99>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154752>)

We present, to our knowledge, the first end\-to\-end FP4 RL post\-training, in which both the rollout and training policies, including their forward and backward passes, operate at 4\-bit precision\. A systematic study reveals that the dominant source of degradation in FP4 RL is not training\-side quantization error but rollout activation quantization: outliers stretch the dynamic range so far that a large number of activation values underflow to zero under FP4\. Counterintuitively, restoring the training policy to higher precision while keeping the rollout in FP4 makes accuracy worse than full FP4 baseline, exposing rollout–training mismatch as the principal failure mode and ruling out standard pretraining\-style fixes\. We address this with Rollout Residual Quantization \(Rollout\-ResQ\): a single residual correction term constrained to a hardware\-friendly sparsity pattern, added only to the FP4 rollout matmul — a lightweight correction that recovers most of the precision lost to outlier\-driven  underflow without inflating the rollout’s compute footprint\. On Qwen2\.5\-3B and Qwen2\.5\-Math\-7B, Rollout\-ResQ paired with the HiFloat4 \(HiF4\) format — whose three\-level hierarchical scaling preserves resolution under FP4’s tight 4\-bit budget — closes the accuracy gap to BF16 from 4\.9% to 1\.1%, bringing fully quantized FP4 RL within striking distance of full precision\. Applied to the open\-standard  MXFP4, the same recipe narrows the gap from 13\.6% to 5\.3%, revealing that FP4 format choice is a key factor that determines the ceiling on recoverable accuracy\. Together, these results establish HiF4 as the enabling format for end\-to\- end FP4 RL post\-training, and Rollout\-ResQ as the activation\-side mechanism that makes the gap to BF16 closable\.

## DetailAnywhere: Fashion Detail Generation via Cross\-Modal Feature Alignment Distillation

**Authors:** Zijun Li; Yimin Zhou; Jia Sun; Honglie Wang; Pengcheng Wei; junlong wu; Yongrui Heng; Jiyuan Wang; Huan Ouyang; Boheng Zhang; Huaiqing Wang; Dewen Fan; Qianqian Gan; Fan Yang; Tingting Gao

**ID:** 151134 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ckGG0WagkI>) | [PDF](<https://openreview.net/pdf?id=ckGG0WagkI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151134>)

Diffusion\-based generative AI has achieved remarkable success in e\-commerce applications such as virtual try\-on, poster generation, and product background synthesis\. However, when making online purchasing decisions for apparel, consumers also desire the freedom to examine specific detail regions of interest, such as collars, cuffs, and fabric textures, yet existing methods have not explicitly studied this setting\. We therefore formalize a new, non\-template task: Fashion Detail Generation with focus conditioning, and release \*\*FDBench\*\*, the first dataset and benchmark comprising 40K\+ human\-verified reference\-detail pairs across 41 different categories\. This task poses a unique semantic gap challenge: the model must bridge the correspondence between a focus marker on a product reference image and a photorealistic close\-up view of the indicated region, while faithfully preserving the garment's identity, without any precise prompt\. To bridge this gap, we propose Cross\-modal Feature Alignment Distillation \(\*\*CFAD\*\*\), which leverages a fine\-tuned DINOv3 teacher to align both branches of a Multimodal Diffusion Transformer in a shared semantic space via dual\-branch distillation\. To further improve consistency between generated details and reference images, we introduce a consistency reward model that jointly scores image pairs along three quality axes and optimizes generation via reinforcement learning\. Experiments show that our model \*\*DetailAnywhere\*\* significantly outperforms all state\-of\-the\-art opensource methods across all metrics and human evaluations\.

## Distribution\-Adaptive Policy Optimization

**Authors:** Yuxiao He; Ziqi Wang; Xingzhou Lou; Xiaoqian Liu; Junge Zhang

**ID:** 155766 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=35C6J7b2RQ>) | [PDF](<https://openreview.net/pdf?id=35C6J7b2RQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155766>)

Reinforcement Learning with Verifiable Rewards empowers Large Language Models to enhance their reasoning capabilities\. Most algorithms rely on on\-policy training, which is stable but inefficient due to its strict dependency on fresh samples\. To overcome this inefficiency, off\-policy RL decouples experience generation from policy optimization via Importance Sampling \(IS\)\. However, this introduces a policy discrepancy between the behavior policy and the target policy\. We observe that mainstream RLVR algorithms struggle to maintain a balance between performance and stability in off\-policy scenarios, suffering from either severe performance degradation or training collapse\. We identify the root cause as the failure of static trust regions to maintain the bias\-\-variance trade\-off associated with IS ratios in off\-policy settings\. To address this, we propose \*\*DI\*\*stribution\-adaptive \*\*P\*\*olicy \*\*O\*\*ptimization \(\*\*DIPO\*\*\), a novel hyperparameter\-free RLVR algorithm employing an adaptive trust region\. DIPO leverages the intrinsic statistics of the IS ratio distribution to achieve a robust bias\-\-variance trade\-off\. Experimental results demonstrate that DIPO enables stable training in extreme off\-policy scenarios, achieving performance comparable to or even surpassing the on\-policy baseline, and outperforming other off\-policy baselines by 13\.9%\.

## Low\-Rank Adaptation for Critic Learning in Off\-Policy Reinforcement Learning

**Authors:** Yuan Zhuang; Yuexin Bian; Sihong He; Jie Feng; Qing Su; Songyang Han; Jonathan Petit; Shihao Ji; Yuanyuan Shi; Fei Miao

**ID:** 151208 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c9yifwVOw7>) | [PDF](<https://openreview.net/pdf?id=c9yifwVOw7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151208>)

Scaling critic capacity is a promising direction for enhancing off\-policy reinforcement learning \(RL\)\. However, larger critics are prone to overfitting and unstable in replay\-buffer\-based bootstrap training\. This paper leverages Low\-Rank Adaptation \(LoRA\) as a structural\-sparsity regularizer for off\-policy critics\. Our approach freezes randomly initialized base matrices and solely optimizes low\-rank adapters, thereby constraining critic updates to a low\-dimensional subspace\. Built on top of SimbaV2, we further develop a LoRA formulation, compatible with SimbaV2, that preserves its hyperspherical normalization geometry under frozen\-backbone training\. We evaluate our method with SAC and FastTD3 on DeepMind Control locomotion and IsaacLab robotics benchmarks\. LoRA consistently achieves lower critic loss during training and stronger policy performance\. Extensive experiments demonstrate that adaptive low\-rank updates provide a simple, scalable, and effective structural regularization for critic learning in off\-policy RL\.

## Offline Constrained Reinforcement Learning under Partial Data Coverage

**Authors:** Seokmin Ko; Ambuj Tewari; Kihyuk Hong

**ID:** 151729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YXF70sZQPU>) | [PDF](<https://openreview.net/pdf?id=YXF70sZQPU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151729>)

We study offline constrained reinforcement learning with general function approximation in discounted constrained Markov decision processes\. Existing methods either require full data coverage for evaluating unsupported intermediate policies, are not oracle efficient, or requires the knowledge of data\-generating distribution for policy extraction\. We propose PDOCRL, an oracle\-efficient primal\-dual algorithm based on a decomposed linear\-programming formulation\. The decomposition makes the policy an explicit optimization variable, avoiding policy extraction through the unknown distribution $\\mu\_D$\. We show that naive restricted saddle\-point formulations may have spurious saddle points, so realizability of an optimal solution alone is insufficient\. We then show that, under a stronger but explicit realizability assumption, every restricted saddle point is optimal, avoiding the regularization and auxiliary function classes used in prior LP\-based analyses\. These ingredients yield PDOCRL, an oracle\-efficient primal\-dual algorithm that computes a near saddle point of the empirical decomposed LP Lagrangian and returns a near\-optimal, near\-feasible policy with a $\\widetilde\{\\mathcal O\}\(\\epsilon^\{\-2\}\)$ sample guarantee under partial coverage, without access to $\\mu\_D$ or a reference policy\. Empirically, PDOCRL is competitive with strong baselines on standard offline constrained RL benchmarks\.

## Conservatism Controllable Compositional Guidance for Offline Safe Reinforcement Learning

**Authors:** Ruiqi Xue; Shenghe Hu; Xin Gao; Jing\-Wen Yang

**ID:** 149132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=schnHNuzz8>) | [PDF](<https://openreview.net/pdf?id=schnHNuzz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149132>)

Learning constraint\-satisfying policies from offline data without risky online interaction is crucial for reliable deployment of reinforcement learning \(RL\) agents\.  Representative methods leverage Implicit Q\-Learning and advantage\-weighted regression to learn value functions and balance the reward–safety trade\-off, demonstrating solid safety performance in safety\-critical hard constraint scenarios\. However, these methods typically couple reward and safety optimization during offline training and rely on a predefined unified factor to balance the reward–safety trade\-off \(conservatism\)\. Which ignores the fact that different tasks, due to their distinct reward and cost functions, may require different degrees of conservatism to satisfy safety constraints, resulting in sub\-optimal performance\. To address this limitation, we propose Co3G, a compositional generative model with test\-time controllable conservatism for offline safe RL\. During training, Co3G decouples the optimization objectives by separately employing reward\-optimal guidance and safety\-optimal guidance to induce high\-reward and high\-safety actions\. During deployment, Co3G combines the reward and safety objectives via compositional generation, and further provides three mechanisms—manual tuning, rejection sampling, and RL—to balance the reward and safety guidance scales during deployment, thereby achieving a superior reward–safety trade\-off\. Extensive experiments on the OSRL benchmark show that Co3G delivers strong safety performance under stringent safety constraints while retaining flexible control over conservatism, significantly outperforming previous hard\-constraint and soft\-constraint baselines\.

## Bootstrapped Bipartite Actor\-Critic for Diffusion RL

**Authors:** Tianze Zhu; yinuo Wang; Letian Tao; Tianyi Zhang; Likun Wang; Feihong Zhang; Yao Lyu; Jingliang Duan; Shengbo Eben Li

**ID:** 155139 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=85aIcxYmr9>) | [PDF](<https://openreview.net/pdf?id=85aIcxYmr9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155139>)

Diffusion policies have achieved strong performance in reinforcement learning \(RL\) due to the exceptional expressivity in capturing complex action distributions\. However, existing approaches focus primarily on positive samples and lack explicit modeling of negative samples, thereby failing to fully exploit this representation capacity and ultimately limiting performance\. To mitigate this problem, we propose BOBAC \(BOotstrapped Bipartite Actor\-Critic\), a novel method for diffusion policy optimization via pairwise preference learning\. Bridging the gap between distribution modeling and preference learning, we reformulate diffusion policy optimization within a preference\-aware framework via the Bradley\-Terry \(BT\) modeling, which enables the effective exploitation of negative samples through relative ranking\. Since the original BT loss assigns the same weight to all pairs regardless of their varying importances, we further design a soft\-gate mechanism to adaptively weight each pair according to its Q\-gap\. Experimental results on 6 MuJoCo tasks and 4 H1Bench tasks demonstrate that, compared with representative model\-free and generative\-policy RL baselines, BOBAC achieves state\-of\-the\-art performance with consistent improvements in all continuous\-control environments\.

## Imitation Dominates Reinforcement: Direct In\-Context RL Is Closer to ICL Than RL

**Authors:** Minchan Kwon; Seunghee Koh; Sunghyun Baek; Minsung Bae; Junmo Kim

**ID:** 151209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c9GSAkKpkb>) | [PDF](<https://openreview.net/pdf?id=c9GSAkKpkb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151209>)

In\-context reinforcement learning \(ICRL\) is often described as inference\-time RL in which an LLM improves by accumulating trajectory\-reward pairs in its context, with the reward acting as a learning signal\. This framing poses a central question: is ICRL genuine inference\-time RL, or better understood as a form of in\-context learning \(ICL\)? We investigate this in the context of direct ICRL, where the model directly uses trajectory\-reward pairs\. Through controlled experiments on three benchmarks across six models, we find that the reward is read, but its effect is small; randomizing or removing the reward leaves the improvement curve almost unchanged\. Trajectories drive improvement, but not through their semantic content: shuffled or corrupted trajectories work as well as real ones\.  These patterns closely mirror those known in ICL, suggesting that direct ICRL is better understood as a special case of ICL than as inference\-time RL\. This reframing has implications for ICRL memory design: ICL factors such as input distribution and demonstrations may matter more than RL elements such as reward shaping and exploration\.

## Canopy: Tree\-Aware Rollout Scheduling for Agent Reinforcement Learning

**Authors:** Feiyuan Zhang; LI Pengbo; Ziniu Li; Yuhao Jiang; Di Chai; Han Tian; Junhao Wang; Taiqiang Wu; Guanhua Huang; Chaoliang Zeng; Yihao Liu; Kai Chen

**ID:** 154204 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FPJ4b4JwEE>) | [PDF](<https://openreview.net/pdf?id=FPJ4b4JwEE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154204>)

Rollout generation bottlenecks large\-scale RL training for LLM agents\. Tree rollout has emerged as an important agentic\-RL strategy: by branching from shared intermediate states across reasoning turns, tool calls, and environment observations, it avoids regenerating entire trajectories from scratch and exposes long prefixes for context reuse\. However, existing RL and LLM\-serving infrastructure remains largely tree\-unaware: it treats sibling branches as independent generation requests, making the rollout tree invisible to routing, preemption, and KV\-cache management\. Consequently, shared prefixes are scattered across servers, discarded with request\-private suffixes, or recomputed after cross\-server spill\. We present Canopy, a tree\-aware rollout scheduling system that makes the active rollout tree a first\-class serving abstraction without changing sampling, rewards, advantage estimation, or optimizer updates\. Canopy consists of three mechanisms: tree\-aware routing and retention, which keep siblings near reusable prefixes and protect active prefixes; prefix\-preserving partial preemption, which separates shared\-prefix KV from private\-suffix KV under pressure; and spill\-aware transfer\-or\-recompute admission, which transfers shared\-prefix KV to a spilled sibling only when its estimated transfer cost is lower than destination\-side recomputation\. On long\-horizon multi\-turn agent workloads, Canopy achieves up to 2\.11× rollout\-generation speedup; across four representative tree\-rollout algorithms, mechanism studies show higher prefix locality and a 51\.1% average, 94\.1% maximum reduction in full\-release shared\-prefix invalidations\. These results show that exposing rollout\-tree structure to the rollout\-serving stack can reduce wasted prefill and KV\-cache churn, enabling more efficient RL training for LLM agents\.

## HyperSkill: Training\-Free Omnimodal GRPO via Hypergraph\-Indexed Skill\-Library Evolution

**Authors:** Haoran Luo; Shangkai Lin; Jinyang Wu; XINLIANG ZHOU; Anh Tuan Luu

**ID:** 148694 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vk6Ou7cymq>) | [PDF](<https://openreview.net/pdf?id=vk6Ou7cymq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148694>)

Reinforcement learning sharpens LLM reasoning, but parameter updates are expensive, forgetful, and opaque; training\-free libraries swap gradients for a textual store yet inherit trajectory\-level admission and flat structure\. We close these gaps with HyperSkill, a Training\-Free Omnimodal GRPO framework that keeps the backbone frozen and replaces gradient updates with auditable edits to a Hypergraph\-Indexed Skill\-Library, where skills are advantage\-bearing nodes and compositions are hyperedges\. Three mechanisms drive its evolution: a counterfactually verified, step\-level distillation admits new skills; moving\-average updates with hyperedge growth and pruning follow retrieval feedback; and an advantage\-weighted retriever with similarity and capacity gates falls back to zero\-skill\. Across 11 text/VL/omnimodal benchmarks, HyperSkill beats every baseline by 6\.9 F1 \(15\.6%\) without touching a parameter\. Our software and data are publicly available\.

## BECON: Belief\-Conditioned Constrained Multi\-Objective Reinforcement Learning under Drifting Preferences and Budgets

**Authors:** Bui Trong Duc; Huynh Thi Thanh Binh

**ID:** 153172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NKKhc57p17>) | [PDF](<https://openreview.net/pdf?id=NKKhc57p17>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153172>)

Constrained preference\-conditioned MORL typically assumes full task observability, treating preferences and safety budgets as stationary task signals\. In real\-world deployment, however, these signals are often unreliable proxies: intent may drift, safety tolerances may shift with context, and exposed descriptors may be noisy, delayed, or incomplete\. We therefore formulate constrained preference\-conditioned MORL as a partially observed task\-specification problem, where the agent must navigate a fundamental conflict between unreliable external signals and latent interaction dynamics\. We propose \\textbf\{BECON\}, a belief\-conditioned framework for constrained MORL with drifting preferences and budgets, which infers latent task context from recent histories to estimate preferences and safety budgets\. These estimates are fused with the exposed task signal via uncertainty\-dependent gates, enabling the policy to defer to observations under high epistemic uncertainty while correcting them when history is informative\. The fused context jointly conditions preference optimization and context\-adaptive constraint enforcement\. Experiments on diverse multi\-objective control tasks demonstrate that BECON consistently improves over state\-of\-the\-art MORL baselines, achieving stronger robustness and constraint satisfaction under task drift\.

## Prevailing Bisimulation Metric Learning Is Biased: Implicit Regularization and Its Remedy

**Authors:** Junqi Lu; Ruixiang Sun; Xin Li; Gaopeng Peng; Ao Zhang; Mingzhong Wang

**ID:** 150570 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hB5eZI6Iyp>) | [PDF](<https://openreview.net/pdf?id=hB5eZI6Iyp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150570>)

Deep bisimulation metric learning has emerged as a principled framework for learning robust state representations in reinforcement learning\. However, prevailing methods rely on sample\-based regression objectives that exhibit a critical stability flaw in stochastic environments\. We identify this flaw as a manifestation of the \*\*double sampling problem\*\*: minimizing mean squared error against single\-sample stochastic targets introduces an irreducible variance bias\. Through the lens of stochastic differential equations \(SDEs\), we rigorously prove that this bias leads to a \*\*Variance Trap\*\*, wherein target variance scales with the encoder's sensitivity\. This variance effectively acts as an implicit Jacobian regularizer, driving representation collapse in the presence of transition noise\. To address this issue, we propose Bisimulation Saddle\-Point Optimization \(BSPO\), a debiased framework that reformulates the bisimulation metric learning objective as a primal\-dual saddle\-point problem\. By introducing an Auxiliary Network \(AuxNet\) to estimate the expected Bellman error, BSPO decouples the structural error from transition noise, eliminating the bias without requiring physically infeasible double sampling\. To the best of our knowledge, this work is the first to identify that prevailing sample\-based bisimulation metric learning objectives are systematically biased and to provide a practical debiasing framework\. Our empirical evaluations on stochastic continuous/discrete control tasks and visually distracting environments demonstrate that BSPO significantly outperforms representative baselines, particularly in high\-noise regimes where conventional methods fail to converge\.

## Prospective Hindsight: Self\-Calibrating Reinforcement Learning via Prediction–Reality Gaps

**Authors:** Jiaxin Zhang; XIANGYU PENG; Qinglin Chen; Yu Li; Hiroaki Hayashi; Chien\-Sheng Wu

**ID:** 152351 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TikYXZwMNh>) | [PDF](<https://openreview.net/pdf?id=TikYXZwMNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152351>)

Reinforcement learning for long\-horizon agents relies on \\emph\{purely retrospective\} training signals: credit is assigned only after observing environmental consequences, leaving the agent's belief at action time invisible to the gradient\. We introduce \\textbf\{Prospective Hindsight \(PH\)\}, a self\-calibrating training principle that augments any retrospective base method with a signal derived from the gap between the agent's \\emph\{prospective prediction\} \(before feedback\) and the \\emph\{retrospective evaluation\} \(after feedback\)\. This per\-rollout \\emph\{surprise\} identifies samples where the agent's self\-model is most inaccurate and amplifies their gradient contribution through a stop\-gradient surprise\-weighted advantage\. Since the prospective predictor shares parameters with the policy, the two co\-evolve, progressively shifting focus to the agent's remaining blind spots\. We connect this principle to a privileged\-information gap and show that minimizing the surprise residual provides a descent pathway on the agent's miscalibration rate; calibration thus emerges as a byproduct of optimization rather than from an added objective\. On single\-turn verifiable tasks and a multi\-turn personal\-agent task \(under GRPO, on\-policy distillation, and their combination\), PH improves both task performance and calibration, with consistent gains across model scales\. Notably, the dominant miscalibration mode shifts structurally between regimes, overconfident failures in single\-turn, underconfident successes in multi\-turn, yet the same training principle addresses both successfully\.

## ReCon: Toward Balanced Learning under Inter\-Context and Context\-Memory Conflicts

**Authors:** Huipeng Ma; Dandan Song; Shaonan Ma; Changzhi Zhou; Jun Yang; Yuhang Tian; Luan Zhang; Chenhao Li; Xudong Li; Fang Xi; Guangyuan Feng

**ID:** 149688 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAsMvB15yW>) | [PDF](<https://openreview.net/pdf?id=oAsMvB15yW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149688>)

In retrieval\-augmented generation \(RAG\), knowledge conflicts arise when retrieved contexts disagree with each other or with the model's parametric memory\. Reinforcement Learning with Verifiable Rewards \(RLVR\) has emerged as a standard approach to address such conflicts\. However, existing RLVR\-based methods are typically formulated under a single\-conflict assumption\. As a result, the type with stronger advantage signals dominates policy updates, leaving the other under\-optimized and thus yielding imbalanced performance across conflict types\. To address this challenge, we propose ReCon, a type\-aware RLVR framework for balanced learning across Inter\-Context and Context\-Memory conflicts\. Specifically, ReCon computes a step\-level imbalance signal from type\-wise cumulative advantages and triggers resampling on the weaker conflict type\. Instead of resampling from scratch, ReCon branches from informative failures\. It selects an informative failed trajectory using uncertainty and closeness signals, then branches at an entropy\-jump point, concentrating additional rollouts on critical reasoning decisions\. Experiments show that ReCon yields stronger and more balanced performance across knowledge\-conflict and multi\-hop QA benchmarks, and also generalizing well under mixed\-conflict settings\.

## Test Time Search Requires Training for Diversity

**Authors:** Ryan Bahlous\-Boldi; Isha Puri; Idan Shenfeld; Akarsh Kumar; Mehul Damani; Sebastian Risi; Omar Khattab; Zhang\-Wei Hong; Pulkit Agrawal

**ID:** 155492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5BCRUa67R0>) | [PDF](<https://openreview.net/pdf?id=5BCRUa67R0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155492>)

Language models are increasingly deployed alongside test\-time search\. We argue that we should therefore shift the role of RL post\-training from converging on a single best response to producing a diverse pool of competent candidates\. Standard policy gradient methods such as GRPO optimize a fixed scalar reward and drive the policy toward near\-duplicate responses, erasing the diversity search needs\.  We propose Vector Policy Optimization \(VPO\), which exploits the fact that practical rewards are vector\-valued, e\.g\., per\-test\-case correctness, per\-criterion ratings, or per\-hop credit\. Instead of collapsing these into one scalarization, VPO samples randomized scalarizations from a distribution over the reward simplex, incentivizing candidates to specialize to different trade\-offs along the Pareto front\. The model emits multiple candidates per prompt, with each conditioning on the previous ones, allowing for directed diversification\. VPO is a drop\-in replacement for the GRPO advantage estimator\. Across four domains, VPO consistently improves test\-time best@$k$ over scalar baselines, with gains widening as the test\-time budget grows\.

## Hide to Guide: Learning via Semantic Masking

**Authors:** Ruitao Liu; Qinghao Hu; Alex Hu; Yecheng Wu; Shang Yang; Luke J Huang; Zhuoyang Zhang; Han Cai; Song Han

**ID:** 154951 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9hZDtNqGcn>) | [PDF](<https://openreview.net/pdf?id=9hZDtNqGcn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154951>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a powerful paradigm for improving language models on reasoning\-intensive tasks, but its effectiveness is often limited by exploration\. For example, models often fail on hard problems, leaving little useful reward signal\. External expert traces offer a natural source of guidance, yet they may also expose reward\-relevant content along the critical path to the verifier target, such as final answers, intermediate values, executable implementations, or answer\-related entities\. This content can create an unintended reward hacking channel, allowing the policy to obtain reward by copying the trace rather than learning the underlying reasoning or agentic behavior\.  Existing guided\-RL methods reduce this risk by using partial trajectories, but they mainly control how much expert information is shown heuristically rather than which parts should be hidden\. To this end, we propose Semantic Masked Expert Policy Optimization \(SMEPO\), a fine\-grained semantic masking strategy for expert\-guided RLVR\. Instead of truncating traces coarsely or revealing them unchanged, SMEPO masks reward\-relevant semantic spans along the critical path while preserving the expert’s decomposition, plan, and procedural structure\. This turns hard problems from reasoning from scratch into a fill\-in\-the\-blank process: the policy can follow the expert’s problem\-solving route, but must still reconstruct the missing values, code, or entities by itself\. SMEPO is simple to apply and requires no changes to the reward function or RL objective\. Across diverse domains, including math, code, and agentic search, SMEPO improves accuracy by up to 3\.2 points over GRPO and reduces training time by up to 4\.2$\\times$\.

## RL Excursions during Pre\-training: How early is too early for on\-policy learning?

**Authors:** Rachit Bansal; Clara Mohri; Tian Qin; David Alvarez\-Melis; Sham Kakade

**ID:** 153521 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KjrYAUhYam>) | [PDF](<https://openreview.net/pdf?id=KjrYAUhYam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153521>)

The standard LLM training pipeline applies reinforcement learning \(RL\) only after pre\-training and supervised fine\-tuning \(SFT\)\. We question this status quo by training a LLM from scratch and applying RL, SFT, and SFT followed by RL directly to intermediate pre\-training checkpoints\. We find that RL is effective very early, and often matches the full SFT$\\to$RL pipeline early as well\. Through experiments on harder problems, we find that targeted pre\-training data composition is a strong lever for RL effectiveness, even more so than model scale\. Beyond reasoning accuracy, applying RL directly to base checkpoints expands the model's distribution; the sharpening effect reported in recent work arises only when RL follows SFT\. The general capabilities of the model remain essentially unchanged by RL, while they degrade following SFT\. Finally, we merge RL and SFT objectives by \\textit\{parallel averaging\}, which outperforms across all other training methods discussed, across metrics, while preserving general capabilities\. Together, these results suggest that LLM training might benefit from an expanded use of RL\.

## Self\-Correction as Transition Geometry: Internalizing Reasoning via Lifted State Policy Optimization

**Authors:** Ren Zhuang; Ben Wang; Shuifa Sun

**ID:** 151765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YDIiUo61NU>) | [PDF](<https://openreview.net/pdf?id=YDIiUo61NU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151765>)

Language models routinely revise initial answers through intermediate edits, yet current alignment objectives restrict credit assignment to complete outputs or entire rollouts\. To formalize the local geometry of improvement, we introduce Lifted State Policy Optimization \(LSPO\), which augments each textual answer with a continuous auxiliary coordinate to form a lifted state that encodes refinement context beyond surface text\. Training rewards transitions that descend an energy landscape, subject to edit and step penalties, and internalizes the resulting answers into the generative model\. Across the Qwen3\.5 family on mathematics, science, code, logic, and broad reasoning benchmarks, LSPO improves aggregate accuracy while bypassing the latency of explicit revision loops\. Component ablations, together with evaluations of internalization and energy ordering on unseen tasks, confirm that this gain originates from the lifted representation and from credit assigned at the transition level\.

## SCALECUA : Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL

**Authors:** Bowen Lv; Xiao Liu; Yanyu Ren; Hanyu Lai; Bohao Jing; Hanchen Zhang; Yanxiao Zhao; 顺天 姚; Jie Tang; Yuxiao Dong

**ID:** 150846 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=euINf9lQ7V>) | [PDF](<https://openreview.net/pdf?id=euINf9lQ7V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150846>)

Computer use agents \(CUAs\) are emerging as a powerful interface for automating complex digital workflows through visual perception and GUI execution\. Online reinforcement learning with verifiable rewards \(RLVR\) has emerged as a key direction for scaling their capabilities\. However, applying this paradigm is severely bottlenecked by verifiable data scarcity and online RL inefficiency\. To break these barriers, we introduce ScaleCUA , a unified framework that scales online RL for CUAs by combining verifiable task synthesis with efficient online RL\. At the data level, we design VeriGen , an end\-to\-end framework for generating verifiable RL tasks through iterative docker interactions and a multi\-agent feedback loop\. Scaled to 100\+ concurrent agent workers via a shared docker interaction probe, this pipeline produces 24K\+ verifiable tasks and nearly 3K high\-quality RL tasks for online RL\. To maximize sample efficiency over this scaled pool, we propose Frontier Sampling , which dynamically tracks the model's per\-task capability and allocates rollouts to tasks at the current learning frontier\. On the training side, we further design Visual Context Segmentation , which keeps the recent visual context within a bounded window to balance rollout and training engine pressure on long\-horizon trajectories, yielding a 2\.83× training speedup over step\-wise decomposition\. Together, ScaleCUA achieves 68\.7% on OSWorld and 54\.0% on ScienceBoard, establishing new state\-of\-the\-art performance among open\-source computer use agents\. Source code:

## Understanding Multimodal Failure in Action\-Chunking Behavioral Cloning

**Authors:** Lorenzo Mazza; Massimiliano Datres; Ariel Rodriguez; Sebastian Bodenstedt; Gitta Kutyniok; Stefanie Speidel

**ID:** 149297 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rH2Cz9se1a>) | [PDF](<https://openreview.net/pdf?id=rH2Cz9se1a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149297>)

Behavioral cloning becomes difficult when the same observation admits several valid actions\. We study this problem for action\-chunking policies and show that different multimodal parameterizations fail in different ways\. For latent\-variable policies, posterior\-prior regularization makes deployment\-time sampling more reliable, but excessive regularization removes the action\-conditioned information needed to distinguish demonstrated modes\. Reducing this regularization can preserve mode information, but then success depends on whether the prior covers the relevant latent regions\. For action\-space generative policies, multimodality is constrained by the smoothness of the base\-to\-action transport: a map with small Lipschitz constant cannot assign substantial probability to many well\-separated modes\. Covering many modes therefore requires either sharp transitions in base space or off\-support bridge regions in action space\. Experiments on synthetic multimodal tasks and robotic simulation benchmarks support these mechanisms\.

## PoEM: Predicting New RL Outcomes from Existing Policies

**Authors:** Kimia Hamidieh; Giannis Daras; Antonio Torralba

**ID:** 154423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dh60W6N12a>) | [PDF](<https://openreview.net/pdf?id=Dh60W6N12a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154423>)

Pre\-trained models are routinely post\-trained with reinforcement learning \(RL\) to maximize specific rewards, such as human alignment, correctness, or instruction following\. This post\-training process is computationally intensive, sometimes unstable, and has to be run from scratch every time the reward model changes or when we want to combine multiple rewards\. We hence ask: given a new reward function, is it possible to predict the RL outcomes without actually running RL on it? We answer this in the affirmative by introducing PoEM, a framework to predict the outputs of RL on a new reward function using a set of models already post\-trained on other rewards\. First, we show that if the new reward function can be written as a linear combination of existing ones, then the new policy in log\-space can be written as a linear combination of the existing log\-policies\. Surprisingly, even in cases where the rewards are not linearly connected, we observe that often log\-policies from RL training span an approximately low\-rank subspace across rewards\. To our benefit, the weighting coefficients for this combination can be estimated using only the reward or basis policy outputs on the samples\. We turn these observations into an algorithm that takes post\-trained models and a new reward function, and approximates the target RL policy without actually running any additional RL training\. We experimentally validate our approach across synthetic and real experiments, spanning both text and image modalities\.

## Reinforcement Learning from Rich Feedback with Distributional DAgger

**Authors:** Rishabh Agrawal; Jacob Fein\-Ashley; Paria Rashidinejad

**ID:** 155273 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ux7PyTXx9>) | [PDF](<https://openreview.net/pdf?id=6ux7PyTXx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155273>)

Reasoning models have advanced rapidly, but the dominant reinforcement learning from verifiable rewards \(RLVR\) recipe remains surprisingly narrow: sample many responses and reward each with a single bit indicating whether the final answer is correct\. Yet many settings provide $\\textit\{rich feedback\}$, including execution traces, tool outputs, expert corrections, and model self\-evaluations\. We study how to use such feedback through a distributional variant of the classic imitation learning algorithm DAgger, where the learner has local access to an expert distribution on states visited by the current policy\. This yields a simple forward cross\-entropy objective that admits a blackbox expert and whose sequence\-level gradient \{conduct rich credit assignment by propagating\} future expert\-student disagreement back to earlier decisions\. We show that prior RL with self\-distillation objectives based on reverse KL or Jensen\-Shannon fail to guarantee monotonic policy improvement: even when the expert has higher reward, their updates may increase probability on worse actions\. In contrast, we show that forward cross\-entropy admits monotonic policy improvement and enjoys guarantees on regret\. We further show that our objective optimizes a teacher\-weighted maximum\-likelihood RL lower bound, leading to improved Pass@N\. Empirically, our approach, DistIL, consistently improves over RLVR and RL with self\-distillation baselines across a variety of domains: scientific reasoning, mathematical reasoning, and coding\.

## Boosting Multiagent Reinforcement Learning at High Replay Ratios with Ensemble Reset

**Authors:** Yaodong Yang; Hongyao Tang; Guangyong Chen; Pheng\-Ann Heng

**ID:** 149143 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sW2PazNAB1>) | [PDF](<https://openreview.net/pdf?id=sW2PazNAB1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149143>)

Increasing the replay ratio, where an agent's network is updated multiple times per environment interaction, is an effective strategy for improving sample efficiency in reinforcement learning\. However, its effects on the network capacity of multiagent reinforcement learning \(MARL\) are not yet well investigated\. In this paper, we show that high replay ratios induce a severe dormant neuron problem in the centralized global Q\-network of MARL, where a large fraction of neurons become inactive, thereby reducing network capacity and destabilizing learning\. To address this problem, we propose Ensemble Reset \(EnSet\) to stabilize MARL training at high replay ratios\. First, guided by theoretical analysis, EnSet employs an ensemble of global Q\-value networks with periodic resets to mitigate neuron dormancy during frequent updates\. Second, EnSet diversifies replay experience by exploiting multiagent translation invariance as an inductive bias in the global Q\-value function to prevent overfitting\. Extensive experiments in SMAC, MPE, and SMACv2 environments demonstrate that EnSet consistently improves various MARL algorithms at high replay ratios with fewer environment steps\.

## UniForm: Segment\-Aware GRPO for Joint Punctuation Restoration and Inverse Text Normalization

**Authors:** Junhao Gong; Weiwei Li; Rilin Chen

**ID:** 153759 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=It6ljjakNn>) | [PDF](<https://openreview.net/pdf?id=It6ljjakNn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153759>)

Punctuation Restoration and Inverse Text Normalization \(ITN\) are essential post\-processing tasks for ASR systems\. Traditionally, these are handled by separate models in a sequential pipeline, which suffers from error propagation and suboptimal latency\. We propose UniForm, a unified framework that jointly solves both tasks using a single compact language model\. UniForm is trained via a three\-stage progressive paradigm: large\-scale supervised fine\-tuning on punctuation data, joint fine\-tuning with ITN span masks, and reinforcement learning alignment\. To enable effective reinforcement learning in this inherently low\-entropy setting, we introduce Segment\-Aware GRPO \(SA\-GRPO\), which optimizes model performance through two synergistic components: a structured reward decomposition mechanism that provides dedicated signals for distinct segment types, and a token\-level adaptive credit assignment mechanism that dynamically redistributes gradients toward difficult tokens based on sampling consensus and model entropy\. This integrated approach effectively eliminates the need for manual sub\-task weighting and ensures fine\-grained optimization for both tasks\. We train UniForm\-0\.8B on over 238 million multilingual samples\. Extensive evaluations across diverse languages, domains, and code\-switching scenarios demonstrate that UniForm\-0\.8B outperforms prior specialized models and larger general\-purpose LMs on both tasks while maintaining real\-time inference latency\. Furthermore, our analysis reveals a strong synergistic effect, proving that joint training mutually benefits both punctuation and ITN performance\.

## SkillForge: Co\-Evolving Skills and Agents via Dynamic Skill Lifecycles

**Authors:** Yuyao Ge; Yiwei Wang; Yuchen He; Baolong Bi; Lingrui Mei; Jiayu Yao; Lizhe Chen; Shenghua Liu

**ID:** 151649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3a0qCfhFi>) | [PDF](<https://openreview.net/pdf?id=Z3a0qCfhFi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151649>)

Memory\-augmented reinforcement learning strengthens LLM agents' ability to solve complex long\-horizon tasks\. Skills are one such form of memory, pairing instructions with an applicability condition over task types\. However, retaining every skill indiscriminately as the policy improves lets obsolete or harmful entries accumulate and mislead the agent\. We propose SkillForge, an agentic RL method that compiles and evolves the skill library through a fitness\-driven skill lifecycle of trial, active, stable, and retired states, so that the skills and the model co\-evolve throughout training\. A preliminary evaluation phase first uses the base model's own rollouts to pre\-retire low\-fitness skills, yielding a filtered library that then seeds supervised fine\-tuning\. Reinforcement learning takes over from this checkpoint, and at each iteration selective retirement, stabilization, and LLM\-guided mutation continue to forge the skill library alongside policy optimization\. Across multiple interactive agent benchmarks, SkillForge achieves the highest aggregate success rate, delivering up to 7\.8\\% relative improvement over the strongest baseline while keeping the skill library compact throughout training\. We introduce Skillfurnace, a dataset of 5k\+ annotated records bundling retirement\-filtered SFT trajectories, evolved skill libraries with fitness annotations, and retirement events with human\-annotated failure categories to support research on skill quality and lifecycle management\.

## Local Policy Manifolds for Efficient Multi\-Objective Reinforcement Learning

**Authors:** Qiyue Xia; Tianwei Wang; J\. Michael Herrmann

**ID:** 149916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mF8mCetv02>) | [PDF](<https://openreview.net/pdf?id=mF8mCetv02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149916>)

Multi\-objective reinforcement learning \(MORL\) aims at optimising several, often conflicting goals to improve the flexibility and reliability of RL in practical tasks\. This is typically achieved by finding a set of diverse, non\-dominated policies that form a Pareto front in the performance space\. However, constructing such a policy set remains computationally demanding, as it requires finding not a single optimal policy, but a set of policies to cover a wide range of trade\-offs among the objectives\. We introduce LLE\-MORL, an approach that traces policy manifolds by utilising the local relationship between the high\-dimensional policy parameter space and the performance space\. This structured representation enables an efficient search within contiguous solution domains via locally linear extrapolation, allowing for the rapid generation of high\-quality solutions without extensive retraining\. We also provide a theoretical analysis of the policy manifold structure in order to specify the applicability of the method\. Experiments across diverse continuous control domains demonstrate that LLE\-MORL consistently achieves higher Pareto front quality and efficiency than state\-of\-the\-art approaches\.

## Learning to Audit ML Models with Theory of Mind

**Authors:** Yao Rong; Vaibhav Unhelkar

**ID:** 155783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2vhiHLMdzi>) | [PDF](<https://openreview.net/pdf?id=2vhiHLMdzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155783>)

When auditing machine learning models, human experts sequentially inspect model predictions and explanations, gradually building a mental model of the model’s behavior to uncover errors\. This manual process is critical for safe deployment in high\-stakes domains but fundamentally limited in scalability\. In this work, we propose a novel method to simulate this human auditing behavior for automating the auditing process\. We formalize auditing as a sequential decision\-making problem, modeled as a Markov decision process\. Our state representation summarizes the auditor’s accumulated knowledge of model predictions and feature usage\. Building on this formalization, we solve the MDP using reinforcement learning, yielding RLAuditor, which learns to select informative test samples to efficiently uncover model errors\. We further connect our formalization to Theory of Mind, showing that our state mirrors how human auditors build mental models: its update rule is equivalent to Bayesian belief revision and it converges to the model’s behavioral pattern at an interpretable rate\. We validate our approach on multiple ML models and datasets across different data modalities\. In a human subject study, we demonstrate that RLAuditor helps human auditors produce more accurate audit reports in less time\.

## Generalized Intention Modeling in Multi\-Agent Reinforcement Learning

**Authors:** Mateusz Odrowaz\-Sypniewski; Jasmine Bayrooti; Ajay Shankar; Amanda Prorok

**ID:** 151588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZSayYS6nBW>) | [PDF](<https://openreview.net/pdf?id=ZSayYS6nBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151588>)

Modeling an opponent’s intent is critical for effective decision\-making in non\-cooperative, competitive, and general\-sum multi\-agent reinforcement learning\. Existing opponent modeling methods encode intent using an embedding derived from episode information chosen a priori, such as the opponent’s next action or a future environment state, and use this to guide the ego\-agent’s behavior\. These approaches assume that the chosen information is universally representative of intent; however, we show empirically that this is not the case as intentions are often task\- and environment\-dependent\. To address this, we introduce a task\-adaptive opponent modeling framework that learns a performance\-driven mixture of multiple intent representations\. We further introduce a new intention representation that maximizes mutual information with the ego\-agent’s future returns, thereby capturing opponent information that is most directly relevant to performance\. Our approach consistently matches or exceeds the performance of state\-of\-the\-art baselines across diverse tasks and yields insights into when and why different opponent modeling strategies succeed\.

## PAIR: Prefix\-Aware Internal Reward Model for Multi\-Turn Agent Optimization

**Authors:** Wonjoong Kim; Yeonjun In; Sangwu Park; Dongha Lee; Chanyoung Park

**ID:** 156086 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Ut88MX4Oj>) | [PDF](<https://openreview.net/pdf?id=0Ut88MX4Oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156086>)

A significant hurdle for current LLMs is the execution of complex, multi\-stage tasks\.  Group Relative Policy Optimization \(GRPO\) has been emerging as a leading choice, but its reliance on sparse outcome rewards severely limits credit assignment across intermediate steps\. Existing remedies—running full rollouts to assign step\-level advantages, calling external LLM judges at each step, or computing intrinsic rewards that require ground\-truth answers at every evaluation—introduce significant costs or practical constraints\.  We hypothesize that internal correctness probing over LLM hidden states can be repurposed as a step\-level reward signal, potentially addressing all of these limitations at once\.  However, existing probing research assumes clean inputs, and we first show that this assumption breaks down in multi\-step settings: hidden\-state probes degrade severely under prefix contamination—tracking coherence with the \(possibly corrupted\) prefix rather than grounded correctness—while attention\-based features remain robust to contamination but underperform on clean prefixes\. Building on this complementary relationship, we propose the Prefix\-Aware Internal Reward \(PAIR\)—a two\-stage model with a frozen hidden\-state probe estimating belief\-consistency and a lightweight attention\-based head correcting it toward grounded correctness\. Experimental results show that PAIR achieves the highest AUROC on contaminated trajectories while operating at negligible inference cost, enabling dense step\-level reward signals for GRPO training without external model calls, ground\-truth dependencies, or full\-trajectory rollouts\.

## Learning to Explore with Parameter\-Space Noise: A Deep Dive into Parameter\-Space Noise for Reinforcement Learning with Verifiable Rewards

**Authors:** Bizhe Bai; Xinyue Wang; Peng Ye; Tao Chen

**ID:** 154785 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B0ocUGMRAN>) | [PDF](<https://openreview.net/pdf?id=B0ocUGMRAN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154785>)

Reinforcement Learning with Verifiable Rewards \(RLVR\)  enhances large language model \(LLM\) reasoning, yet growing evidence indicates an \\emph\{exploration ceiling\}: they tend to reweight existing solution traces and produce low\-diversity rollouts\. This restricts the discovery of novel solution perspective and weakens out\-of\-distribution generalization\. We address this limitation by directly perturbing the rollout policy's parameters while updating the clean policy model as usual, an approach that achieves better temporal consistency and yields more complex behavior patterns\. To stabilize learning from these perturbed rollouts, which are inherently off\-policy, we incorporate truncated importance sampling\. Furthermore, we introduce a lightweight, dynamic noise scheduler based on semantic diversity and model self\-certainty to optimally adjust the noise scale\. Instantiated on GRPO, our method \(PSN\-GRPO\) demonstrates its efficacy through four key contributions: \(1\) it improves high\-budget pass@$k$, increases semantic and operational diversity, increases CoT consistency, and remains complementary to  exploration\-oriented RLVR techniques; \(2\) it validates efficacy across multiple models, including Qwen2\.5, Qwen3, and Llama\-3\.1; \(3\) it shows robust performance on out\-of\-distribution science and coding benchmarks; and \(4\) it uncovers novel solution perspectives for problems the original model could not solve, as shown by qualitative analysis\.

## Unveiling Implicit Advantage Symmetry: Why GRPO Struggles with Exploration and Difficulty Adaptation

**Authors:** zhiqi yu; Zhangquan Chen; Mengting Liu; Heye Zhang; Liangqiong Qu

**ID:** 153467 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7H48b3yB6>) | [PDF](<https://openreview.net/pdf?id=L7H48b3yB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153467>)

Reinforcement Learning with Verifiable Rewards \(RLVR\), particularly GRPO, has become the standard for eliciting LLM reasoning\. However, its efficiency in exploration and difficulty adaptation remains an open challenge\. In this work, we identify an implicit advantage symmetry inherent in Group Relative Advantage Estimation \(GRAE\) as a structural property that provides a new perspective for understanding these bottlenecks\. This symmetry induces two critical limitations: \(i\) at the group level, strict symmetry in weights between correct and incorrect trajectories leaves unsampled action logits unchanged, thereby hindering the exploration of novel correct solution\. \(ii\) at the sample level, the algorithm implicitly prioritizes medium\-difficulty samples, remaining agnostic to the non\-stationary demands of difficulty focus\. Through controlled experiments, we reveal that this symmetric property is sub\-optimal, yielding two pivotal insights: \(i\) asymmetrically down\-weighting the advantages of correct trajectories encourages essential exploration but risks instability; \(ii\) learning efficiency can be boosted by a curriculum\-like transition—prioritizing simpler samples initially before gradually shifting to complex ones\. Motivated by these findings, we propose Asymmetric GRAE \(A\-GRAE\), which dynamically modulates exploration incentives and sample\-difficulty focus\. Experiments across seven benchmarks demonstrate that A\-GRAE consistently improves GRPO and its variants across both LLMs and MLLMs\.

## Safe\-Fair MACPO: Burden\-Fair Constrained Policy Optimization for Safe Multi\-Agent Reinforcement Learning

**Authors:** Ankita Kushwaha; KIRAN RAVISH; Preeti; Pawan Kumar

**ID:** 151944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wff0AXdNL4>) | [PDF](<https://openreview.net/pdf?id=Wff0AXdNL4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151944>)

Safe multi\-agent reinforcement learning usually constrains team\-level safety cost, but a safe team can still assign the same agent to repeatedly wait, yield, detour, absorb intervention, or lose access to a scarce resource\. We study this failure mode as \*burden unfairness under hard safety\*\. Safe\-Fair multi\-agent constrained policy optimization \(Safe\-Fair MACPO\) augments MACPO with agent\-wise burden logging, a temporal fairness\-debt state, a fairness critic, and a two\-cost trust\-region update\. Safety is lexicographically primary: recovery may override fairness to avoid unsafe actions, while the resulting imbalance is stored as debt and penalized later\. We give a safety\-first Pareto theory showing that the exact safe\-fair constrained selector is strongly Pareto efficient for reward, safety, and fairness, with hard\-safety and temporal burden\-gap certificates\. Empirically, the primary reported rows keep zero hard violations while improving useful burden balance: HalfCheetah\-2x3\-Fair improves selected safe return from $2145\.5$ to $2637\.4$ and Jain burden from $0\.903$ to $0\.977$; Safety\-Gym MultiGoal\-Fair reaches the lowest matched\-budget scalar fairness cost with zero safety cost; and VMAS\-SafeMultiGoal improves over recovery\-only attribution controls\. We separate social/resource fairness from mechanical workload imbalance and reserve mixed or recovery\-explained rows for qualified appendix analysis\.

## Group\-Graph Policy Optimization for Long\-Horizon Agentic Reinforcement Learning

**Authors:** Yunan Wang; Minghui Song; Zihan Zhang; Shaohan Huang; Haizhen Huang; Furu Wei; Weiwei Deng; Feng Sun; Qi Zhang

**ID:** 149985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=li8veKFGaF>) | [PDF](<https://openreview.net/pdf?id=li8veKFGaF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149985>)

Group\-based Reinforcement Learning \(RL\) has significantly enhanced Large Language Models \(LLMs\) in agentic scenarios\. To achieve finer\-grained policy updates, recent agentic RL frameworks have shifted from trajectory\-level to step\-level training\. However, long\-horizon agentic RL suffers from severe reward sparsity and delay, as feedback is often deferred for dozens of interaction steps\. While existing step\-level frameworks refine training granularity, their credit assignment remains coarse\-grained and still treats agent exploration as isolated, linear trajectories\. This oversimplified perspective ignores the inherent graph structure of state transitions, leading to high\-variance state\-value estimation and myopic, localized credit assignment\. To overcome these critical bottlenecks, we propose Group\-Graph Policy Optimization \(G2PO\), a novel group\-based RL algorithm tailored for multi\-turn agentic tasks\. G2PO explicitly transforms linear interaction trajectories into a global state\-transition graph\. By aggregating identical observations across different trajectories, we introduce group\-aggregation state\-value estimation that reduces sampling variance and trajectory\-dependent bias\. Furthermore, we redefine agent actions as transitions between state nodes and propose an edge\-centric advantage estimation strategy\. By globally standardizing Temporal Difference \(TD\) errors across the entire graph, G2PO explicitly identifies and prioritizes critical transitions that drive absolute task progress\. Extensive experiments on representative long\-horizon benchmarks—WebShop, ALFWorld, and AppWorld—demonstrate that G2PO substantially outperforms state\-of\-the\-art prompt\-based and RL baselines, achieving remarkable success rate improvements of up to 22\.2\\% over GRPO\.

## Who Watches the Watchers? Semantically\-Constrained Reinforcement Learning for Red\-Teaming Provenance Intrusion Detectors

**Authors:** Brayden Killeen; Derui Wang; Nasrin Sohrabi; Qin Wang; Zahir Tari; Minhui Xue

**ID:** 155171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7lUWeTEm0T>) | [PDF](<https://openreview.net/pdf?id=7lUWeTEm0T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155171>)

Reconstruction\-based provenance intrusion detection systems \(PIDS\) detect malicious activity by classifying nodes in system\-call provenance graphs from per\-edge reconstruction errors produced by benign\-trained encoder\-\-decoders\.  Because these detectors run on the endpoints they monitor, adversarial robustness is a critical deployment concern, yet it remains rarely evaluated systematically\. We introduce ProvRL, a reinforcement\-learning framework for automated red\-teaming of these detectors, and use it to characterise the robustness of four leading PIDS spanning the four encoder families used in the field\. ProvRL casts red\-teaming as a semantically constrained graph\-editing MDP, with a factored autoregressive policy masked by transition relations mined from benign data and a GRU belief state, to model the multi\-step consequences of message passing on GNN\-based detectors\. ProvRL causes targeted false negatives in white\-, grey\-, and black\-box settings on three of four encoder families \(GNN, linear, VAE\) using 5\-99x fewer queries than exhaustive search; direct\-reconstruction encoders resist insertion attacks structurally, suggesting an architectural direction for robust detection\. No threshold\-adaptive aggregation policy maintains both a deployable false\-positive rate and meaningful evasion resistance, leaving adversarial retraining as the only viable defence on the vulnerable families\. ProvRL trains on CPU within hours and produces attack chains that replay as real Linux syscalls\. We release ProvRL as an open\-source red\-teaming tool for PIDS\.

## MemRL: Self\-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory

**Authors:** Jiaqian Wang; Shengtao Zhang; Ruiwen Zhou; Junwei Liao; Yuchen Feng; Zhuo Li; Yujie Zheng; Weinan Zhang; Ying Wen; Zhiyu li; Feiyu Xiong; Yutao Qi; Bo Tang; Muning Wen

**ID:** 154245 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBlIaSaXnX>) | [PDF](<https://openreview.net/pdf?id=FBlIaSaXnX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154245>)

The hallmark of human intelligence is the self\-evolving ability to master new skills by learning from past experiences\. However, current AI agents struggle to emulate this self\-evolution: fine\-tuning is computationally expensive and can introduce destabilizing weight updates, increasing the risk of catastrophic forgetting, while existing memory\-based methods rely on passive semantic matching that often retrieves noise\. To address these challenges, we propose MemRL, a non\-parametric approach that evolves via reinforcement learning on episodic memory\. By decoupling stable reasoning from plastic memory, MemRL employs a Two\-Phase Retrieval mechanism to filter noise and identify high\-utility strategies through environmental feedback\. Extensive experiments on Humanity's Last Exam, BigCodeBench, ALFWorld, and Lifelong Agent Bench demonstrate that MemRL significantly outperforms state\-of\-the\-art baselines, suggesting that MemRL offers a practical way to balance stability and plasticity during runtime improvement\.

## Tool\-Integrated Reasoning via Hierarchical Multi\-Agent Reinforcement Learning

**Authors:** Yiwei Dai; Hengyi Cai; Yili Wang; Zexu Sun; Shuaiqiang Wang; Yuchen Li; Xin Wang; Yi Chang; Dawei Yin

**ID:** 148956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tu0xIum8Fk>) | [PDF](<https://openreview.net/pdf?id=tu0xIum8Fk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148956>)

Tool\-Integrated Reasoning \(TIR\) enables large language models to solve complex tasks by invoking external tools during reasoning\. Existing methods typically rely on either single\-agent reinforcement learning for unified optimization or multi\-agent systems for explicit role decomposition\. However, single\-agent RL often entangles high\-level planning with low\-level execution, while multi\-agent systems may suffer from role mismatch when different roles are optimized independently\. To address this limitation, we introduce the principle of decoupled inference with hierarchical alignment: high\-level planning and low\-level execution should remain separated during inference, while their policies should be aligned through shared task feedback during training\. We instantiate this principle as \*\*HATR\*\*, a \*\*H\*\*ierarchically \*\*A\*\*ligned framework for \*\*T\*\*ool \*\*R\*\*easoning\. At inference time, \*\*HATR\*\* represents each reasoning turn as a tree\-structured decision process, where a high\-level planning role determines the action branch and step goal, and a low\-level execution role realizes this decision through tool use or internal reasoning\. During training, \*\*HATR\*\* performs hierarchical multi\-agent reinforcement learning by sampling online trajectories, deriving preference signals from task\-level rewards, and alternately optimizing policies across decision levels\. This cross\-level optimization aligns roles across the multi\-agent hierarchy while preserving their functional boundaries\. Experiments on mathematical reasoning and question\-answering benchmarks across multiple backbones show that \*\*HATR\*\* consistently improves task performance over single\-agent and multi\-agent baselines\.

## SurgReasoner: Surgical Reasoning Segmentation with Dynamic Difficulty\-Aware Reinforcement Learning

**Authors:** Dong Zhang; Cheng Xue

**ID:** 155715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3S2PCXYUIS>) | [PDF](<https://openreview.net/pdf?id=3S2PCXYUIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155715>)

Surgical reasoning segmentation requires a model to infer the target instrument or anatomical structure from an implicit clinical query and produce a pixel\-level mask\. This setting is far more challenging than category\-level surgical segmentation, as targets are specified by functional role, spatial relation, or anatomical interaction rather than explicit class names\. It also exposes a key limitation of existing reinforcement learning\-based visual grounding methods: standard reward normalization tends to under\-optimize clinically important hard samples, such as small instruments, occluded organs, and ambiguous targets\. To address this, we introduce SurgSeg\-14K, a surgical reasoning segmentation benchmark with over 14K image\-mask pairs across seven surgical scenarios and 30 fine\-grained categories\. Each sample links an implicit clinical query to a binary mask, spatial annotations, and a reasoning trajectory\. We further propose SurgReasoner, which decomposes the task into two stages: clinical query interpretation for spatial prompt generation, and prompt\-based mask generation with a frozen segmentation model\. To improve reinforcement learning for spatial reasoning, we introduce a dynamic difficulty\-aware reweighting strategy that combines intrinsic target difficulty with rollout correctness, enabling training to focus on challenging targets\. Experiments on SurgSeg\-14K show that SurgReasoner outperforms the strongest grounding baseline by large margins, with consistent gains especially on hard samples, suggesting a practical path toward reasoning\-driven surgical visual perception\.

## SOLE\-R1: Video\-Language Reasoning as the Sole Reward for On\-Robot Reinforcement Learning

**Authors:** Philip Schroeder; Thomas Weng; Karl Schmeckpeper; Eric Rosen; Stephen Hart; Ondrej Biza

**ID:** 153893 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HvikTXllja>) | [PDF](<https://openreview.net/pdf?id=HvikTXllja>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153893>)

Vision\-language models \(VLMs\) have shown impressive capabilities across diverse tasks, motivating efforts to leverage these models to supervise robot learning\. However, when used as evaluators in reinforcement learning \(RL\), today’s strongest models often fail under partial observability and distribution shift, enabling policies to exploit perceptual errors rather than solve the task\. We introduce SOLE\-R1 \(Self\-Observing LEarner\), a video\-language reasoning model explicitly designed to serve as the sole reward signal for online RL\. Given only raw video observations and a natural\-language goal, SOLE\-R1 performs per\-timestep spatiotemporal chain\-of\-thought \(CoT\) reasoning and produces dense estimates of task progress that can be used directly as rewards\. To train SOLE\-R1, we develop a large\-scale video trajectory and reasoning synthesis pipeline that generates temporally grounded CoT traces aligned with continuous progress supervision\. This data is combined with foundational spatial and multi\-frame temporal reasoning, and used to train the model with a hybrid framework that couples supervised fine\-tuning with RL from verifiable rewards\. Across four different simulation environments and a real\-robot setting, SOLE\-R1 enables zero\-shot online RL from random initialization: robots learn previously unseen manipulation tasks without ground\-truth rewards, success indicators, demonstrations, or task\-specific tuning\. SOLE\-R1 succeeds on 24 unseen tasks and substantially outperforms strong vision\-language rewarders, including GPT\-5 and Gemini\-3\-Pro, while exhibiting markedly greater robustness to reward hacking\.

## DGRAF: Observation\-Quality\-Aware Reinforcement Learning for Dynamic Reconfigurable Batteries

**Authors:** Jiasong Chen; Jingwei Hu; Zheng Fang; Zhihong Zhang

**ID:** 155974 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1QZxzf78Bp>) | [PDF](<https://openreview.net/pdf?id=1QZxzf78Bp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155974>)

Dynamic Reconfigurable Battery \(DRB\) systems enable flexible interconnection among cells through power electronic switches, crucial for electric vehicles and energy storage systems\. However, sensor failures in practical deployments lead to partial observation loss, posing severe challenges for safe control\. Existing methods assume full state observability and often adopt overly conservative strategies when observations are missing, failing to achieve effective trade\-offs between safety and performance under uncertainty\. More fundamentally, these methods lack mechanisms to adaptively adjust decision conservatism based on inference reliability, leading to unstable decisions under complex failure scenarios\. We propose the $\\textbf\{D\}$iffusion\-$\\textbf\{G\}$uided $\\textbf\{R\}$isk\-$\\textbf\{A\}$daptive $\\textbf\{F\}$ramework \(DGRAF\) to address this challenge\. The framework handles spatiotemporally coupled failure patterns through joint diffusion inference with quality quantification, and integrates inference quality with distributional decision\-making to enable automatic modulation between aggressive optimization and conservative maintenance\. Through extensive simulations and hardware experiments, we demonstrate that DGRAF consistently outperforms baseline methods across complex failure patterns, achieving superior energy efficiency, decision stability, and risk resilience\.

## Entropy Polarity in Reinforcement Fine\-Tuning: Direction, Asymmetry, and Control

**Authors:** Jiazheng Zhang; Ziche Fu; Junrui Shen; Yunbin Zhao; Yunke Zhang; Zhiheng Xi; LongMa; Chenxin An; Zhihao Zhang; Shichun Liu; Dingwei Zhu; Shihan Dou; Shaofan Liu; han li; Wiggin Zhou; Aiden Adams; Tao Gui; Fei Huang; Qi Zhang; Xuanjing Huang

**ID:** 152571 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8HaL0jX6J>) | [PDF](<https://openreview.net/pdf?id=S8HaL0jX6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152571>)

Policy entropy has emerged as a fundamental measure for understanding and controlling exploration in reinforcement learning with verifiable rewards \(RLVR\) for LLMs\. However, existing entropy\-aware methods mainly regulate entropy through global objectives, while the token\-level mechanism by which sampled policy updates reshape policy entropy remains underexplored\. In this work, we develop a theoretical framework of entropy mechanics in RLVR\. Our analysis yields a first\-order approximation of entropy change $\\Delta \\mathcal\{H\}$, giving rise to entropy polarity, a signed token\-level quantity that predicts whether and how much a sampled update expands or contracts entropy\. This analysis further reveals a structural asymmetry: Reinforcing frequent high\-probability tokens triggers contraction tendencies, whereas expansive tendencies typically require lower\-probability samples or stronger distributional correction\. Empirically, we show that entropy polarity reliably predicts entropy change, and that positive and negative polarity branches play complementary roles in preserving exploration and strengthening exploitation\. Building on these insights, we propose Polarity\-Aware Policy Optimization \(PAPO\), which preserves both polarity branches and implements entropy control through advantage reweighting\. With the empirical entropy trajectory as an online phase signal, PAPO adaptively reallocates optimization pressure between entropy\-expanding and entropy\-contracting updates\. Experiments on mathematical reasoning and agentic benchmarks show that PAPO consistently outperforms competitive baselines, while delivering superior training efficiency and substantial reward improvements\.

## Beyond difficulties: Insights for provably efficient design of autocurriculum in RLVR

**Authors:** Ruofan Wu; Xin Ge; Gao Xuemin; Guanhua Fang; Yangbin Shi; Dongbai Guo

**ID:** 149187 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sFKx4xt4ab>) | [PDF](<https://openreview.net/pdf?id=sFKx4xt4ab>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149187>)

The design of an efficient curriculum has become increasingly important for reinforcement learning with verifiable rewards \(RLVR\)\. The majority of existing curriculum strategies select training problems based on \*\*difficulty\*\*\-\-\-typically measured by success rate\-\-\-yet difficulty is an indirect proxy that conflates problem hardness with actual training utility\. In this paper, we propose to drive curriculum design not by how hard a problem is, but by how much the model improves from training on it\. We formalize this principle through the \*\*improvement function\*\* \(IF\), which measures the gain in a prompt's expected reward under an infinitesimal GRPO policy gradient step\. Leveraging the IF framework, we formally characterize the recently discovered \*\*edge of competence\*\* \(EoC\) phenomenon: a problem is at the model's EoC when its improvement is within a constant factor of the maximum over the training set\. Analyzing GRPO on $L$\-step compositional reasoning tasks, we prove that an EoC\-induced curriculum achieves target mastery in $\\widetilde\{\\Theta\}\(\\log L\_\{\\max\} / \(\\eta \\log d\)\)$ steps\-\-\-an exponential improvement over the $\\widetilde\{\\Theta\}\(L\_\{\\max\} / \(\\eta \\log d\)\)$ steps required by a uniform mixture of difficulties\. Motivated by this theory, we propose ReCUR, a practical algorithm that maintains a stratified retry buffer of previously failed problems, resampling them until they yield positive reward or exhaust a retry budget\. Experiments on multimodal reasoning benchmarks show that ReCUR consistently improves the performance of GRPO and DAPO, providing empirical evidence consistent with the improvement\-driven curriculum perspective\.

## Continuous Open\-ended Discovery and Evolution of Skills as Hierarchical Reward Programs

**Authors:** Richard Bornemann; Pierluigi V Amadori; Antoine Cully

**ID:** 149488 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pmS0mCudyh>) | [PDF](<https://openreview.net/pdf?id=pmS0mCudyh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149488>)

A core quality of general intelligence is the ability to open\-endedly expand and evolve its set of mastered skills autonomously\. While recent Foundation Model \(FM\) driven approaches have shown promising results towards this goal, they typically rely on significant human\-in\-the\-loop engineering, limiting their transferability to novel environments\. To address this, we introduce Continuous Open\-ended Discovery and Evolution of Skills as Hierarchical Reward Programs \(CODE\-SHARP\), a framework that leverages FMs to open\-endedly grow and evolve an archive of Python programs encoding skills to train a generalist agent policy entirely from scratch via reinforcement learning, directly from source code\. These programs, termed Skills as Hierarchical Reward Programs \(SHARPs\), each encode a local success condition and a set of prerequisites delegated to previously discovered SHARPs\. At runtime, SHARPs dynamically route the agent through their prerequisite chain based on the current state, rewarding each completion along the way, requiring the agent to learn only the marginal behaviour each new SHARP introduces, enabling efficient learning of long\-horizon skills without any pre\-defined rewards\. On Craftax\-Classic and XLand, agents trained fully autonomously by CODE\-SHARP outperform previous works by 6x and 2\.6x in median performance and are the only agents capable of crafting iron tools and mining diamonds\. Scaled to Craftax\-Extended, CODE\-SHARP trains a generalist agent on over 90 discovered SHARPs, enabling the agent to solve challenging long\-horizon tasks zero\-shot, matching agents trained on ground\-truth rewards\.

## AERO: Adaptive Ensemble\-Disagreement Routing for Oracle Feedback in Sample\-Efficient Online RLHF

**Authors:** Shrey Singhal; Nannan Huang; Haytham Fayek

**ID:** 153918 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HexbOT3aCq>) | [PDF](<https://openreview.net/pdf?id=HexbOT3aCq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153918>)

Aligning Large Language Models \(LLMs\) with human preferences via Reinforcement Learning from Human Feedback \(RLHF\) has driven substantial improvements across a wide range of tasks, but the cost of acquiring preference labels remains the dominant bottleneck in the alignment pipeline\. While many recent alignment methods improve sample efficiency through active exploration over candidate responses, they typically query the oracle uniformly across contexts, even for contexts where the learned reward estimates are already reliable enough to provide synthetic labels\. We propose Adaptive Ensemble\-disagreement Routing for Oracle feedback \(AERO\), a fully online RLHF algorithm built on a Dyna\-style model\-based RL architecture, in which an ensemble\-based Epistemic Reward Model \(ERM\) serves both as a reward posterior for exploration and as a learned preference\-feedback model for synthetic labeling\. AERO uses ensemble vote entropy, a Query\-by\-Committee disagreement measure, combined with an adaptive thresholding mechanism to decide which contexts require oracle feedback and which can instead receive ERM\-based synthetic preference labels, concentrating expensive labels where they are most informative\. Empirical results across different model families show that AERO achieves highly competitive alignment performance while reducing the required oracle\-query budget compared to online DPO and strong active\-exploration baselines\.

## Discovering What You Can Control: Interventional Boundary Discovery for Reinforcement Learning

**Authors:** Jiaxin Liu; Anzhe Cheng; Paul Bogdan

**ID:** 154140 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fwbd26L5dC>) | [PDF](<https://openreview.net/pdf?id=Fwbd26L5dC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154140>)

When an RL agent's observations contain distractors driven by the same confounders as its true state, observational data alone cannot identify which dimensions the agent controls\. In our benchmarks, even state\-conditioned observational selectors can collapse when distractors mimic controllable state variables\. We propose Interventional Boundary Discovery \(IBD\), which treats the agent's own action channel as a source of randomized interventions: randomizing actions implements an interventional contrast, and per\-dimension two\-sample tests with FDR correction produce a binary mask over observation dimensions\. Across 12 continuous\-control settings with up to 100 distractors, IBD matches oracle return in 11 of 12 settings, while observational baselines including mutual information, state\-conditioned forward models, and gradient\-based sensitivity often underperform simply passing the full observation to SAC\.

## Dataset Mismatch Matters in Group Relative Policy Optimization for Reinforcement Learning from Verifiable Rewards

**Authors:** Zhen\-Yu Zhang; Jiandong Zhang; Huaxiu Yao; Gang Niu; Masashi Sugiyama

**ID:** 151119 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cqgCrzAcDZ>) | [PDF](<https://openreview.net/pdf?id=cqgCrzAcDZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151119>)

Recently, reinforcement learning from verifiable rewards \(RLVR\) is practically very important, where the leading approach is group relative policy optimization \(GRPO\) that typically faces a trade\-off between rollout efficiency and downstream performance\. To improve efficiency while preserving performance, existing selective rollout methods mainly exploit only source\-side training dynamics to optimize the discrete distribution over source prompts\. However, in practice, the source training dataset is rarely identically distributed with the target test dataset\. When such a mismatch exists, due to legal or privacy constraints, it is usually not acceptable to share target prompts themselves with the RLVR trainer\. Nevertheless, it is still possible to share some target\-side feedback such as accuracy on a small held\-out data\. In this paper, we propose learning\-to\-reweight rollout \(L2RR\) that explicitly incorporates target\-side performance feedback into GRPO\. Specifically, L2RR learns a discrete sampling distribution over source prompts by optimizing a bi\-level objective that maximizes accuracy on a held\-out target dataset, while simultaneously penalizing rollouts that provide little incremental learning information\. Empirical studies on six math reasoning benchmarks and three model scales show that L2RR improves target\-domain performance and increases rollout efficiency\.

## Semantic\-level Exploration for Multi\-Agent Reinforcement Learning

**Authors:** Jiangjin Yin; Zijian Ye; Rongbo Zhu; Hangyu Mao; Zhiwei Xu

**ID:** 152298 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U6KA6jtstP>) | [PDF](<https://openreview.net/pdf?id=U6KA6jtstP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152298>)

Multi\-Agent Reinforcement Learning \(MARL\) faces significant exploration challenges due to exponentially growing joint state\-action spaces\. Existing exploration methods operate directly in raw state\-action spaces, which is inefficient and fails to exploit inherent semantic structure\. This paper introduces semantic space into multi\-agent exploration\. We theoretically establish that the observation\-action space can be partitioned into discrete semantic prototypes, providing a principled foundation for transferring exploration statistics across semantically similar situations\. Building on this theory, we propose a semantic\-level exploration mechanism that first compresses the high\-dimensional observation–action space into discrete semantic prototypes via vector quantization, and then applies sliding\-window count\-based bonuses to enable efficient statistical transfer across semantically similar situations\. Our approach is versatile and can be seamlessly integrated with existing value\-based MARL frameworks\. Extensive experiments demonstrate that our method outperforms state\-of\-the\-art baselines across diverse multi\-agent benchmarks in terms of both effectiveness and training efficiency\.

## From Local to Global: Progressive Consensus via Hierarchical Communication in Multi\-Agent Reinforcement Learning

**Authors:** Jiangjin Yin; Zhonglin Lv; Hangyu Mao; Rongbo Zhu; Yiwei Shi; Kun Hu; Xianfang Tang; Zhiwei Xu

**ID:** 154042 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GfEY4lEw9W>) | [PDF](<https://openreview.net/pdf?id=GfEY4lEw9W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154042>)

Effective team collaboration hinges on consensus formation through information exchange, a principle equally critical in multi\-agent reinforcement learning \(MARL\)\. However, existing communication\-based and consensus\-learning methods often struggle to form a coherent global understanding from agents' limited local views\. We propose STAGE, a local\-to\-global progressive consensus framework based on hierarchical communication\. By first grouping agents according to their perceptual focuses, STAGE enables intra\-group communication to form local consensuses, then selects group leaders to exchange these consensuses across groups, progressively expanding them into a unified global consensus with reduced communication redundancy\. To further improve consensus quality, we introduce KL\-divergence constraints for consensus alignment and a variational autoencoder \(VAE\) objective for preserving task\-relevant global information\. Extensive experiments on challenging MARL benchmarks show that STAGE consistently outperforms state\-of\-the\-art baselines, especially on more difficult tasks and larger\-scale multi\-agent systems\.

## SamaDICE: Safe Multi\-Agent Reinforcement Learning with Stationary Distribution Correction Estimation

**Authors:** The Viet Bui; Tien Mai; Thanh Nguyen

**ID:** 150278 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jLb42822IZ>) | [PDF](<https://openreview.net/pdf?id=jLb42822IZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150278>)

Offline safe multi\-agent reinforcement learning \(MARL\) is challenging: agents must learn coordinated behaviors from static datasets while strictly satisfying safety constraints\. This challenge is amplified by distribution shift, where joint actions that appear safe under the behavior distribution may become unsafe under policy\-induced deviations, with errors compounding across agents\. We propose SamaDICE, a principled framework for safe offline MARL that integrates stationary distribution correction with scalable value decomposition\. Our approach formulates safe policy learning as a constrained convex optimization problem over stationary distributions of joint state\-action pairs, with safety constraints imposed as upper bounds on expected cumulative costs\. Safety is enforced through a Lagrangian dual formulation, enabling distribution\-corrected cost estimation directly from offline data\. To address the combinatorial complexity of multi\-agent systems, we introduce a factored centralized\-training\-decentralized\-execution parameterization that represents the global dual variable via a monotonic mixing network over agent\-local potentials, yielding a tractable surrogate Bellman residual for scalable optimization\. We instantiate SamaDICE with a multi\-agent decision transformer and evaluate it on diverse benchmark environments\. Our method outperforms the strongest baseline in aggregate return, with the advantage widening as the cost budget tightens, while maintaining 100% empirical episode\-level constraint satisfaction across all evaluated tasks\.

## StraTA: Incentivizing Agentic Reinforcement Learning with Strategic Trajectory Abstraction

**Authors:** Xiangyuan Xue; Yifan Zhou; ZiDong Wang; Shengji Tang; Philip Torr; Wanli Ouyang; LEI BAI; Zhenfei Yin

**ID:** 152317 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tyr5VMW1pW>) | [PDF](<https://openreview.net/pdf?id=Tyr5VMW1pW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152317>)

Large language models \(LLMs\) are increasingly used as interactive agents, but optimizing them for long\-horizon decision making remains difficult because current methods are largely purely reactive, which weakens both exploration and credit assignment over extended trajectories\. In this work, we present Strategic Trajectory Abstraction \(StraTA\), a simple framework that introduces an explicit trajectory\-level strategy into agentic reinforcement learning \(RL\)\. StraTA samples a compact strategy from the initial task state, conditions subsequent actions on that strategy, and trains strategy generation and action execution jointly with a hierarchical GRPO\-style rollout design, further enhanced by diverse strategy rollout and critical self\-judgment\. Experiments on ALFWorld, WebShop, and SciWorld show that StraTA consistently improves both sample efficiency and final performance over strong baselines\. StraTA reaches success rates of 93\.1% on ALFWorld and 84\.2% on WebShop, surpassing the strongest baselines by 2\.3% and 11\.4% respectively\. On SciWorld, StraTA attains a 63\.5% overall score, outperforming frontier closed\-source models by 6\.1% and prior RL baselines by 6\.5%\.

## DROGO: Default Representation Objective via Graph Optimization in Reinforcement Learning

**Authors:** Hon Tik \(Rick\) Tse; Marlos C\. Machado

**ID:** 154924 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9xEDvoOSsg>) | [PDF](<https://openreview.net/pdf?id=9xEDvoOSsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154924>)

The default representation \(DR\), originally introduced in neuroscience, and its principal eigenvector have been shown to be effective for a wide variety of applications, including reward shaping, count\-based exploration, option discovery, and transfer\. However, in prior investigations, the eigenvectors of the DR were computed by first approximating the DR matrix, and then performing an eigendecomposition\. This procedure is computationally expensive and does not scale to high\-dimensional spaces\. In this paper, we propose an objective for approximating the principal eigenvector of the DR using only transitions with a neural network\. This objective is inspired by a series of theoretical results and is empirically validated in a number of environments\. We then demonstrate its usefulness by applying the learned eigenvectors for reward shaping\.

## Quantile Geometry Regularization for Distributional Reinforcement Learning

**Authors:** Zhaofan ZHANG; Minghao Yang; Rufeng Chen; Sihong Xie; Hui Xiong

**ID:** 149758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nZTmdGMiNl>) | [PDF](<https://openreview.net/pdf?id=nZTmdGMiNl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149758>)

Quantile\-based distributional reinforcement learning methods learn return distributions through sampled quantile regression, but their bootstrapped target quantiles may induce distorted or degenerate distribution estimates\. We propose Robust Quantile\-based Implicit Quantile Networks \(RQIQN\), a lightweight Wasserstein distributionally robust enhancement boosted from a quantile estimation perspective\. We first reinterpret a snapshot of IQN loss as a collection of local empirical quantile estimation problems over sampled current fractions\. We then robustify each local slot with a Wasserstein distributionally robust quantile estimation formulation, yielding a closed\-form, fraction\-dependent correction to the Bellman target\. This correction directly mitigates distributional degeneration: its median\-antisymmetry preserves the risk\-neutral quantile average, while its monotonicity enlarges upper\-\-lower quantile gaps and counteracts collapsed distributional spread\. RQIQN thus regularizes quantile geometry without changing the underlying value objective or requiring additional sample\-set reconstruction\. Finally, we empirically show that the proposed RQIQN outperforms other existing quantile\-based distributional reinforcement learning algorithms in risk\-sensitive navigation and Atari games\.

## HaM\-World: Soft\-Hamiltonian World Models with Selective Memory for Planning

**Authors:** Haoyun Tang; Haodong Cui; Keyao Xu; Zhan\-Dong Mei; Kun Wang

**ID:** 151714 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yc0mqMHlkt>) | [PDF](<https://openreview.net/pdf?id=Yc0mqMHlkt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151714>)

World models enable model\-based planning through learned latent dynamics, but imagined rollouts often become unstable as the planning horizon grows or the dynamics distribution shifts\. We argue that this instability arises from two missing structures in planner\-facing latents: history\-conditioned memory for approximate Markov completeness, and geometric organization that separates configuration, momentum, and task semantics\.  We propose HaM\-World, a structured world model that decomposes the latent state into a canonical $\(q, p\)$ subspace and a context subspace $c$, while incorporating Mamba selective state\-space memory as a history\-conditioned input to the same latent dynamics\. Within this unified interface, $\(q, p\)$ evolves under a Soft\-Hamiltonian dynamics composed of an energy\-derived Hamiltonian vector field and learnable residual and control dynamics, while $c$ captures semantic, dissipative, and non\-conservative factors\.  This design provides the planner with a single latent representation shared across dynamics prediction, reward and value estimation, imagined rollouts, and cross\-entropy method \(CEM\) planning\. On four DeepMind Control Suite tasks, HaM\-World achieves the highest average AUC \(\+9\.5% over strong baselines\), reduces long\-horizon rollout error to 45% of a competitive model, and wins 11 out of 12 $k \\in \\\{3,5,7\\\}$ rollout MSE metrics\. Under 12 out\-of\-distribution perturbations, HaM\-World consistently attains the highest returns, with average gains of 10\.2% on Finger Spin and 13\.6% on Reacher Easy\.  Mechanism diagnostics further demonstrate bounded energy drift under action\-free rollouts, structured energy variation under policy control, and coherent control\-induced energy transfer, supporting the effectiveness of the proposed Soft\-Hamiltonian latent dynamics\.  Code: https://anonymous\.4open\.science/r/HaM\_World\-47CD

## TReDS: Trajectory\-Grounded Requirement\-Capability Modeling for Training Distribution Shaping in Tool\-Interactive Tasks

**Authors:** Han Liu

**ID:** 155240 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CVEj1Jjzi>) | [PDF](<https://openreview.net/pdf?id=7CVEj1Jjzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155240>)

Verifiable tool\-interactive agents produce rich trajectories that contain far more information than final success or failure\. However, standard RL post\-training with verifiable rewards often collapses these trajectories into scalar outcomes and trains over a largely fixed data stream, leaving open the question of which examples are most useful for improving the current policy\. We introduce TReDS, a trajectory\-grounded framework for capability\-conditioned training distribution shaping\. TReDS estimates multidimensional task requirements from offline probing trajectories and controlled tool\-view evidence, maintains the policy capability state in the same semantic space, and uses reliability\-gated online correction to form a policy\-conditioned requirement representation\. A scheduler then converts requirement\-\-capability mismatch, recent utility, and stabilizing pressure into a time\-varying training distribution for GRPO, without modifying the GRPO objective\. We evaluate TReDS with a progressive stress\-test suite spanning $\\tau^2$\-Bench official evaluation, $\\tau$\-Bench native\-bridge evaluation, BFCL V3, and API Bank, using only the $\\tau^2$\-Bench training split for policy optimization\. TReDS improves over the GRPO baseline under the same training data and backend, and shows stronger behavior retention under same\-family and cross\-protocol evaluations\. These results suggest that RL post\-training for tool\-interactive agents should optimize not only how trajectories are rewarded, but also where trajectory\-revealed requirements allocate training probability mass\.

## Adaptive Communication Range for Scalable Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Huizhong Song; Wei Wei; Lin Li; Lijun Zhang; Fengjiao Li

**ID:** 149196 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sBj2Ls9x9u>) | [PDF](<https://openreview.net/pdf?id=sBj2Ls9x9u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149196>)

Cooperative multi\-agent reinforcement learning \(MARL\) has long faced scalability challenges due to the exponential growth of the state\-action space as the number of agents increases\. Existing methods typically enhance scalability by filtering out communications with low\-relevance agents\. However, such filtering often relies on global state and fixed graph distribution, limiting adaptability in large\-scale, communication\-constrained environments\. In this paper, we propose a scalable MARL method, called Adaptive Communication Range PPO \(ACR\-PPO\), that decomposes the decision\-making under communication budget constraints as a sequential process: a communication policy first selects each agent’s communication range within a given budget, followed by a behavior policy that conditions actions on the resulting neighborhood observations\. More importantly, we provide a theoretical guarantee of monotonic performance improvement under communication budget constraints\. Experiments across diverse scenarios demonstrate that ACR\-PPO preserves policy performance while significantly reducing communication costs through adaptive range control\.

## Nemotron\-Cascade: Scaling Cascaded Reinforcement Learning for General\-Purpose Reasoning Models

**Authors:** Boxin Wang; Chankyu Lee; Nayeon Lee; Sheng\-Chieh Lin; Wenliang Dai; Yang Chen; Yangyi Chen; Zhuolin Yang; Zihan Liu; Mohammad Shoeybi; Bryan Catanzaro; Wei Ping

**ID:** 155022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=96v36aMNTx>) | [PDF](<https://openreview.net/pdf?id=96v36aMNTx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155022>)

Building general\-purpose reasoning models with reinforcement learning \(RL\) entails substantial cross\-domain heterogeneity, including large variation in inference\-time response lengths and verification latency\.  Such variability complicates the RL infrastructure, slows training, and makes training curriculum \(e\.g\., response length extension\) and hyperparameter selection challenging\.   In this work, we propose cascaded domain\-wise reinforcement learning \(Cascade RL\) to develop Nemotron\-Cascade, capable of operating in both \\emph\{instruct\} and deep \\emph\{thinking\} modes, without any performance gap relative to a thinking\-only counterpart\.  Departing from conventional approaches that blend heterogeneous prompts from different domains, Cascade RL orchestrates sequential, domain\-wise RL, reducing engineering complexity and delivering state\-of\-the\-art performance across a wide range of benchmarks\.   Notably, RLHF for alignment, when used as a pre\-step, boosts the model's reasoning ability far beyond mere preference optimization, and subsequent domain\-wise RLVR stages rarely degrade the benchmark performance attained in earlier domains and may even improve it\.  Our 14B model, after RL, outperforms its SFT teacher, DeepSeek\-R1\-0528, on LiveCodeBench v5/v6/Pro and achieves silver\-medal performance in the 2025 International Olympiad in Informatics \(IOI\)\. We transparently share our training and data recipes\.

## Global linear convergence of entropy\-regularized softmax policy gradient beyond tabular MDPs

**Authors:** Ziyue Chen; David Siska; Lukasz Szpruch

**ID:** 151109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cv4ZM549nZ>) | [PDF](<https://openreview.net/pdf?id=cv4ZM549nZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151109>)

We study the global convergence of policy gradient for infinite\-horizon entropy\-regularized Markov decision processes \(MDPs\) with continuous state and action spaces\. We consider log\-linear softmax policies with linear function approximation, which extend the tabular softmax parameterization while retaining a tractable  policy class\. Under $Q^\\pi\_\\tau$\-realizability for the regularized state\-action value function, we first establish a non\-uniform Polyak\-\-Łojasiewicz \(PŁ\) inequality\. The non\-uniformity arises through degeneracy of constants associated with the policy geometry, namely the Fisher information matrix or an uncentered feature covariance matrix\. We then identify two feature regimes under which this non\-uniform constant can be bounded along the gradient flow\. For full\-affine\-span features, we prove radial unboundedness of the KL regularizer and show that the smallest eigenvalue of the Fisher information matrix remains bounded below by an initialization\-dependent positive constant\. For simplex\-valued features, we prove an analogous radial unboundedness result in the subspace orthogonal to the all\-ones vector and obtain a uniform lower bound for the smallest eigenvalue of the uncentered covariance matrix\. These results imply global linear convergence of the regularized objective along the gradient flow, i\.e\. suboptimality decaying as $\\mathcal\{O\}\(e^\{\-Ct\}\)$ for some $C&gt;0$\. Our analysis extends the global convergence theory of entropy\-regularized softmax policy gradient beyond the tabular setting of Agarwal et al\. \[2020\], Bhandari and Russo \[2024\], Mei et al\. \[2020\]\.

## Reasoning Under 1 Billion: Memory\-Augmented Reinforcement Learning for Large Language Models

**Authors:** Hung Le; Van Dai Do; Dung Nguyen; Svetha Venkatesh

**ID:** 156787 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156787>)

Recent advances in fine\-tuning large language models \(LLMs\) with reinforcement learning \(RL\) have shown promising improvements in complex reasoning tasks, particularly when paired with chain\-of\-thought \(CoT\) prompting\. However, these successes have been largely demonstrated on large\-scale models with billions of parameters, where a strong pretraining foundation ensures effective initial exploration\. In contrast, RL remains challenging for tiny LLMs with 1 billion parameters or fewer because they lack the necessary pretraining strength to explore effectively, often leading to suboptimal reasoning patterns\. This work introduces a novel intrinsic motivation approach, called Memory\-R\+, that leverages episodic memory to address this challenge, improving tiny LLMs in CoT reasoning tasks\. Inspired by human memory\-driven learning, our method leverages successful reasoning patterns stored in memory while allowing controlled exploration to generate novel responses\. Intrinsic rewards are computed efficiently using a kNN\-based episodic memory, allowing the model to discover new reasoning strategies while quickly adapting to effective past solutions\. Experiments on three reasoning datasets demonstrate that our approach significantly enhances smaller LLMs' reasoning performance and generalization capability, making RL\-based reasoning improvements more accessible in low\-resource settings\.

## Hybrid Reinforcement Learning for One\-step Degraded Infrared and Visible Image Fusion

**Authors:** Hongwei Yu; Daoqing Zha; Yancheng Bai; Jiawei Li; Lei Sun; Xiangxiang Chu

**ID:** 148710 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vdvW81Wcy2>) | [PDF](<https://openreview.net/pdf?id=vdvW81Wcy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148710>)

Infrared\-Visible image fusion \(IVIF\) is essential for robust perception, yet existing methods remain limited under complex degradations\. While diffusion models \(DMs\) offer powerful modeling capabilities to combat such degradations, their iterative process incurs high computational cost\. One\-step distillation effectively accelerates inference but typically leads to over\-smoothed results\. To resolve these limitations, we propose a one\-step fusion framework with hybrid reinforcement learning, termed OneHRL\. We treat degraded inputs as intermediate noisy states along a generative trajectory, enabling a distilled one\-step generator to rectify them directly to the clean fusion results\. Concurrently, to mitigate the over\-smoothed results in distillation, we incorporate the Flow\-GRPO paradigm to introduce stochasticity into the deterministic one\-step generation\. This restores the stochastic exploration necessary for sampling\-based reinforcement learning\. Furthermore, we design a coarse\-to\-fine reward that integrates a global semantic reward with an object\-level reward\. This hybrid reward ensures that the generator captures both naturalness and fine\-grained texture\. Extensive experiments demonstrate that our method achieves superior fusion quality and efficiency\.

## Latency\-Conditioned Selection Bias in RLHF

**Authors:** PRAKUL S HIREMATH

**ID:** 148493 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xOXpq3oPYW>) | [PDF](<https://openreview.net/pdf?id=xOXpq3oPYW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148493>)

Asynchronous Partial Rollouts \(APR\) accelerate RLHF by training on the first $k$ of $N$ parallel completions, but this speed hides a critical flaw: because autoregressive generation time scales linearly with token count, a wall\-clock cutoff acts as an invisible length filter\. On reasoning tasks where reward correlates positively with trajectory length, APR systematically deletes the most valuable, multi\-step reasoning chains from the training batch\. We formalize this phenomenon as \*\*Latency\-Conditioned Selection Bias\*\* \(LCSB\)\. We prove that whenever reward and selection probability negatively correlate \($\\mathrm\{Cov\}\_\{p\_\\theta\}\(R, \\alpha\) &lt; 0$\), the APR objective structurally attenuates and can even invert the on\-policy gradient\. Crucially, standard importance\-sampling corrections \(e\.g\., V\-trace\) cannot resolve this because all trajectories strictly originate from the behavior policy\. After empirically validating this latency\-length filter in a deployed vLLM system and demonstrating catastrophic, monotonic performance degradation on reasoning benchmarks, we provide two actionable solutions\. We introduce \*\*Effective Gradient Information\*\* \(EGI\), a diagnostic metric that detects LCSB thousands of steps before reward curves diverge, and \*\*Selection\-Probability Weighting\*\* \(SPW\), a near\-zero\-overhead correction that mathematically neutralizes the bias to recover on\-policy reasoning performance without sacrificing asynchronous throughput\.

## Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory\-Grounded Interaction

**Authors:** CHAOQUN CUI; Fei ZHANG; SHIJING WANG; Liming Zheng; Qingchao Kong; Zhixiong Zeng

**ID:** 155392 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=61SF5nUDyZ>) | [PDF](<https://openreview.net/pdf?id=61SF5nUDyZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155392>)

Reinforcement learning with verifiable rewards \(RLVR\) provides a promising pathway for continuously advancing GUI agents, yet existing reward modeling paradigms face complementary limitations\. Rule\-based methods suffer from poor scalability and cannot handle open\-ended tasks\. LLM\-as\-a\-Judge methods enable scalable trajectory verification but remain passive and are constrained by partial state observability, since key evidence often resides in latent environment states beyond the trajectory\. Recent active environment interaction methods mitigate observability issues but tend to over\-rely on probing while under\-utilizing direct trajectory evidence, leading to verification inefficiency\. To address these challenges, we advocate a trajectory\-grounded interactive verification paradigm\. We introduce VAGEN, a framework that employs a tool\-augmented verifier agent governed by a Progressive Verification Mechanism, which follows a surface\-to\-latent and cheap\-to\-expensive design philosophy to extract trajectory evidence and probe environment states in a proactive end\-to\-end manner\. Experiments on OSWorld\-Verified and AndroidWorld benchmarks demonstrate that VAGEN significantly improves evaluation accuracy with a favorable performance\-efficiency trade\-off\.

## Coordinating Hundreds of RL Agents through Scalable Inference\-Time Search

**Authors:** Daniel Rajaonarivonivelomanantsoa; Oussama Hidaoui; Refiloe Shabe; Noah De Nicola; Juan Formanek; Ruan John de Kock; Sasha Abramowitz; Omayma Mahjoub; Arnol M Fokam; Simon Du Toit; Asim Osman; Siddarth Singh; Ulrich Armel Mbou Sob; Willie Brink; Arnu Pretorius; Felix Chalumeau

**ID:** 149906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mLNxExQR4f>) | [PDF](<https://openreview.net/pdf?id=mLNxExQR4f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149906>)

Multi\-Agent Reinforcement Learning \(MARL\) is a powerful approach to large\-scale systems control, such as power grids and traffic networks, where dozens to hundreds of agents must coordinate effectively\. Furthermore, such systems often operate in digital or simulated settings, which allows for inference\-time search to significantly improve upon zero\-shot performance\. A current leading approach in this setting is COMPASS, which builds a continuous family of policies conditioned on latent vectors that can be efficiently searched at test time, but requires all agents to share a single latent vector, limiting the space of reachable joint policies\. We introduce ATLAS, a simple extension in which each agent conditions on its own latent vector while still optimising a joint objective\. This expands the searchable policy space at negligible computational cost and requires no additional training\. ATLAS consistently sets a new state\-of\-the\-art on a benchmark of 14 scenarios across three environments, scaling to teams of up to 200 agents, widely out of distribution\. Crucially, its lead sharpens with team size and compute, reaching up to a 45% performance gain at scale\.

## Reward Hacking in Rubric\-Based Reinforcement Learning

**Authors:** Anas Mahmoud; MohammadHossein Rezaei; Zihao Wang; Anisha Gunjal; Bing Liu; Yunzhong He

**ID:** 154025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gor618iz3H>) | [PDF](<https://openreview.net/pdf?id=Gor618iz3H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154025>)

Reinforcement learning with verifiable rewards has enabled strong post\-training gains in domains such as math and coding, though many open\-ended settings rely on rubric\-based rewards\. We study reward hacking in rubric\-based RL, where a policy is optimized against a training verifier but evaluated against a cross\-family panel of three frontier judges, reducing dependence on any single evaluator\. Our framework separates two sources of divergence: verifier failure, where the training verifier credits rubric criteria that reference verifiers reject, and rubric\-design limitations, where even strong rubric\-based verifiers favor responses that rubric\-free judges rate worse overall\. Across medical and science domains, weak verifiers produce large proxy\-reward gains that do not transfer to the reference verifiers; exploitation grows over training and concentrates in recurring failures such as partial satisfaction of compound criteria, treating implicit content as explicit, and imprecise topical matching\. Stronger verifiers substantially reduce, but do not eliminate, verifier exploitation\. We also introduce a self\-internalization gap, a verifier\-free diagnostic based on policy log\-probabilities, which tracks reference\-verifier quality, detecting when the policy trained using the weak verifier stops improving\. Finally, in our setting, stronger verification does not prevent reward hacking when the rubric leaves important failure modes unspecified: rubric\-based verifiers prefer the RL checkpoint, while rubric\-free judges prefer the base model\. These disagreements coincide with gains concentrated in completeness and presence\-based criteria, alongside declines in factual correctness, conciseness, relevance, and overall quality\. Together, these results suggest that stronger verification reduces reward hacking, but does not by itself ensure that rubric gains correspond to broader quality gains\.

## BALTO: Balanced Token\-Level Policy Optimization for Hallucination Mitigation

**Authors:** Ning Li; Zixuan Guo; Yan Xu; Wenbo Fei; Yifan Niu; Chang Luo; Yasheng Wang; Weiwen Liu; Yong Yu; Weinan Zhang

**ID:** 150212 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=juI26tTO3o>) | [PDF](<https://openreview.net/pdf?id=juI26tTO3o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150212>)

Hallucinations remain a major obstacle to deploying large language models \(LLMs\) in knowledge\-intensive settings, where generated responses must be faithfully grounded in provided evidence\.  Reinforcement learning \(RL\) is a promising direction for hallucination mitigation, but response\-level faithfulness rewards suffer from a granularity mismatch: localized hallucinations can cause supported content to receive spurious penalties\. Although recent work introduces fine\-grained feedback such as claim\-level verification and token\-level rewards, unbalanced credit assignment can still induce length, verbosity, or optimization\-noise biases\. We propose $\\textbf\{BALTO\}$, a $\\textbf\{Bal\}$anced $\\textbf\{T\}$oken\-level Policy $\\textbf\{O\}$ptimization framework for hallucination mitigation\. BALTO extracts checkable factual claims, verifies them against the reference context, and projects claim\-level judgments to token\-level labels\. A balanced token\-level credit assignment mechanism is introduced into the framework\. This design redistributes probability mass from unsupported content toward faithful content, rather than suppressing the entire response\. We systematically analyze the limitations of response\-level rewards from a theoretical standpoint, and prove BALTO’s advantages in training stability and optimization efficiency for hallucination mitigation\.  Experiments on ConFiQA, RAGTruth, and FinLLM\-Eval show that BALTO achieves the highest faithfulness across all six model\-\-benchmark settings and consistently outperforms existing post\-training baselines in Q\-Score, demonstrating a stronger faithfulness\-\-informativeness trade\-off\.

## Learning Contextual Causal Dynamics for Robust Exploration in Reinforcement Learning

**Authors:** Jiaming Pu; Yibo Zhang; Xu Dong; Tielin Zhang; Dengpeng Xing

**ID:** 154910 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A0hdW8sljf>) | [PDF](<https://openreview.net/pdf?id=A0hdW8sljf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154910>)

Efficient exploration in sparse\-reward environments, where informative extrinsic feedback is scarce, remains a significant challenge in reinforcement learning\. A key limitation of existing exploration strategies is that they often assume densely coupled environment dynamics, overlooking the underlying causal mechanisms of the environment, particularly the fact that causal relationships may vary across contexts\. To address this issue, we propose contextual causal dynamics model\-based intrinsic motivation \(CIM\), a causality\-aware exploration framework that explicitly captures context\-dependent sparse causal structures and derives intrinsic motivation signals, specifically causal action influence and curiosity\. These intrinsic rewards encourage interventions on causally relevant state factors rather than merely promoting observation novelty\-seeking behavior, thereby facilitating robust exploration and active skill acquisition\. Moreover, by learning contextual causal mechanisms, CIM identifies and filters out task\-irrelevant state variables, improving generalization under distribution shifts\. Empirical results demonstrate that our method achieves superior sample efficiency, training robustness, and out\-of\-distribution generalization performance across multiple robotic manipulation tasks\.

## PiCA: Pivot\-Based Credit Assignment For Search Agentic Reinforcement Learning

**Authors:** Dongyi Liu; Yifan Niu; Qinwen Wang; Han Xiao; Jia Li

**ID:** 155622 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4CNCefRkpK>) | [PDF](<https://openreview.net/pdf?id=4CNCefRkpK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155622>)

Large language model \(LLM\)\-based search agents trained with reinforcement learning \(RL\) have significantly improved the performance of knowledge\-intensive tasks\. However, existing methods encounter critical challenges in long\-horizon credit assignment: \(i\) Reward Sparsity, where models receive only outcome feedback without step\-level guidance to differentiate action quality; \(ii\) Isolated Credit, where credit is assigned to steps independently, failing to capture sequential dependencies; and \(iii\) Distributional Shift, where rewards are estimated on templates that deviate from the model’s natural generative distribution\. To address these issues, we propose Pivot\-Based Credit Assignment \(PiCA\), a novel step reward mechanism that reformulates the search trajectory as a sequential process of cumulative information gain\.  Unlike prior methods that reward steps in isolation, PiCA defines process rewards as success probabilities dependent on the historical context\. This approach identifies pivot steps \(critical milestones in the search\) as information peaks that significantly boost the likelihood of a correct final answer\. By anchoring these step rewards to the final task objective, PiCA provides dense, pivot\-aware and trajectory\-dependent guidance while maintaining distributional consistency\. Theoretically grounded in Potential\-Based Reward Shaping \(PBRS\), PiCA consistently outperforms existing strong baselines across seven knowledge\-intensive QA benchmarks, achieving 15\.2% and 2\.2% improvements for 3B and 7B models\.

## Reconciling Operational Energy Trilemma: A Heterogeneous Risk\-Constrained MDP Framework with Residual Policy Learning

**Authors:** Yujian Ye; Siqi Qian; Yizhi Wu; Tianxiang Cui; Goran Strbac

**ID:** 153171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NKm6gfgKzW>) | [PDF](<https://openreview.net/pdf?id=NKm6gfgKzW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153171>)

Deep decarbonization is transforming power grids into safety\-critical, low\-carbon cyber\-physical systems, where AI controllers must jointly manage economic efficiency, carbon reduction, and operational security\. This operational energy trilemma is challenging for reinforcement learning: cost and carbon objectives are naturally optimized in expectation, whereas security violations are rare, heavy\-tailed events whose consequences can be catastrophic and therefore require explicit tail\-risk control\. Existing safe reinforcement learning methods either constrain safety only in expectation or rely on light\-tailed approximations, which can underestimate rare but severe grid violations\. We propose a heterogeneous risk\-constrained reinforcement learning framework for low\-carbon grid operation\. The key idea is to assign different risk semantics to different objectives: safety\-critical security constraints are enforced through Conditional Value\-at\-Risk \(CVaR\), while economic and carbon\-related objectives are optimized in expectation to preserve operational flexibility\. To better capture extreme scenarios, a mixture distribution model is introduced to characterize heavy\-tailed constraint violations\. We further develop a residual policy learning scheme built on a distributionally robust chance\-constrained reference module: the robust module provides a feasible and economically efficient baseline policy, and the learned residual refines it toward lower\-carbon operation while respecting tail\-risk bounds\. Experiments on power\-system operation tasks show that the proposed framework reduces economic cost by over 25% compared with expectation\-based CMDP baselines and improves safety by two orders of magnitude over Gaussian\-tail methods\. These results suggest that risk\-aware reinforcement learning can support reliable decarbonization by reconciling efficiency, sustainability, and security within a unified decision\-making framework\.

## TGRL: Temperature\-Grouped Reinforcement Learning for Efficient Exploration in LLMs

**Authors:** Zihan Lin; Xiaohan Wang; Jie Cao; Jiajun Chai; Wei Lin; Guojun Yin; Ran He

**ID:** 151583 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZWkXIcPySl>) | [PDF](<https://openreview.net/pdf?id=ZWkXIcPySl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151583>)

Efficient exploration often remains a central bottleneck in reinforcement learning with verifiable rewards \(RLVR\)\. Although temperature control and test\-time scaling strategies can increase rollout diversity of large language models \(LLMs\), they either expand the sample budget at rollout time or leave the benefit of exploration unquantified\. To this end, we propose Temperature\-Grouped Reinforcement Learning \(TGRL\), which turns temperature\-induced diversity into an explicit training signal\. For each prompt, TGRL partitions its rollout group into low\- and high\-temperature subsets, estimates exploration gain through their reward contrast, and allocates this group\-level signal as token\-level credit using Jensen\-\-Shannon \(JS\) divergence between the corresponding temperature\-scaled next\-token distributions induced by the same logits\. Notably, TGRL reaches equivalent accuracy up to 36% faster than strong RLVR baselines without expanding the rollout budget\.  Across 11 benchmarks from diverse domains, TGRL broadly improves over strong RLVR baselines: it improves the six\-benchmark math average by 1\.6% at 32B, raises CodeForces rating by 196\.7 points and LiveCodeBench Pass@16 by 4\.4%, and improves ALFWorld/WebShop success rates by 6\.3%/4\.9%\. Comprehensive ablations and wall\-clock analysis confirm the efficacy of all proposed components\. Code is available at https://anonymous\.4open\.science/r/TGRL\-4877/\.

## What Makes Two States the Same? Value\-Aware State Matching for Multi\-Turn Agent Credit Assignment

**Authors:** Yangyi Fang; Haolin Shi

**ID:** 152187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UutWRcG1RQ>) | [PDF](<https://openreview.net/pdf?id=UutWRcG1RQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152187>)

Training multi\-turn LLM agents with reinforcement learning requires distributing a single episode reward across many interaction steps\. Recent group\-based methods tackle this credit assignment challenge by finding steps where the agent visits the "same" state across different rollouts and comparing their outcomes\. However, determining when two states are "the same" remains an open problem: existing methods compare raw text observations via exact string matching or bag\-of\-words similarity, both of which ignore whether state differences actually matter for future returns\. We show that this is a state abstraction problem with a precise bias\-variance tradeoff: matching on value\-irrelevant features creates unnecessarily small groups \(high variance\), while ignoring value\-relevant features merges states that should be distinguished \(high bias\)\. Guided by this analysis, we propose Structured State Abstraction \(SSA\), a step\-level credit assignment method that decomposes observations into typed fields using environment\-provided metadata and learns per\-field importance weights from return variance\. Rather than hard grouping, SSA uses a kernel\-smoothed advantage estimator where all states contribute to each step's baseline proportionally to their structured similarity, yielding lower MSE than threshold\-based grouping\. Experiments on ALFWorld and WebShop show consistent improvements over GiGPO and HGPO across both benchmarks and model scales; notably, kernel smoothing eliminates the singleton problem that causes existing methods to lose step\-level credit for 30\-36% of steps\. Our implementation is provided in the supplementary materials and will be open\-sourced upon acceptance\.

## Axiomatic Reinforcement Learning for Open Multi\-Agent Systems from Shapley Axioms

**Authors:** Jianhong Wang; Yang Li; Samuel Kaski; Jonathan Lawry

**ID:** 148243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zLFWwz8zKA>) | [PDF](<https://openreview.net/pdf?id=zLFWwz8zKA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148243>)

Open multi\-agent systems, where only a subset of agents are controllable, are central to real\-world domains such as smart grids, yet lack a principled foundation for reinforcement learning algorithm design\. We study this setting through n\-agent ad hoc teamwork \(NAHT\), a recent framework for learning in open multi\-agent environments\. We propose an axiomatic framework that derives value function learning from the Shapley axioms \(Efficiency, Symmetry and Linearity\), treating them as structural constraints rather than heuristic design choices\. This formulation builds on a novel NAHT decomposition, which characterises the fundamental difference between open and fully controllable multi\-agent systems, and establishes a cooperative game\-theoretic foundation for learning\. We further show that enforcing these axioms on learning individual value functions recovers the Shapley value for Dec\-POMDPs, providing a principled bridge between reinforcement learning and classical cooperative game theory\. Building on this framework, we introduce Shapley Machines and Banzhaf Machines, two generic algorithmic templates that can be instantiated with standard reinforcement learning methods\. When applied to strong baselines such as IPPO and POAM, our methods consistently improve learning efficiency and generalisation to unseen agent types and conventions across NAHT benchmark tasks\.

## Reward Inflation: A Healthy Stimulus for Reinforcement Learning

**Authors:** Ganghun Lee; Minji Kim; Minsu Lee; Byoung\-Tak Zhang

**ID:** 149798 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nGl0OxizaX>) | [PDF](<https://openreview.net/pdf?id=nGl0OxizaX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149798>)

Reward serves as the primary learning signal in reinforcement learning \(RL\)\. However, while reward magnitudes are typically held fixed throughout training, their temporal modulation remains underexplored\. In this paper, we propose reward inflation, a gradual scaling of rewards over the course of training, and show that it can act as a healthy stimulus for RL\. Theoretically, reward inflation induces an implicit recency weighting that upweights recent transitions during policy updates, enabling faster adaptation\. We further show that, by sustaining gradient signals as the policy saturates, reward inflation suppresses the emergence of dormant neurons and helps preserve plasticity\. Empirical results on ALE games and MuJoCo tasks corroborate these findings, showing that an appropriate level of reward inflation benefits a broad range of tasks\. Finally, we introduce Fed, an adaptive variant that adjusts the inflation level on the fly, and find that it often improves upon fixed inflation\.

## Focal Reward: Balanced Reinforcement Learning under Rubric\-Based Rewards

**Authors:** Yu Huang; Zihua Zhao; Zhaoxin Huan; Wanli Gu; Feng Hong; Xinmu Ge; Lin Yuan; Qiang Hu; Weichang Wu; Xiaolu Zhang; Jun Zhou; Jiangchao Yao

**ID:** 150481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkAx0LeHmi>) | [PDF](<https://openreview.net/pdf?id=hkAx0LeHmi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150481>)

The open\-ended generation in LLMs usually requires multi\-dimensional rubrics to adequately assess quality and guide the improvement of reinforcement learning\. However, a critical dilemma inherent in this training paradigm is the imbalanced reward polarization along different rubric dimensions\. Under this bottleneck, even if LLMs achieve relatively high rewards after training, they may still exhibit severe deficiencies in certain dimensions, leading to a direct deterioration in user experience\. To address this problem, we propose \\emph\{Focal Reward\}, a novel objective to automatically balance the training of reinforcement learning under rubric\-based rewards\. Specifically, we first leverage an inverse reward projection mechanism to estimate the saturation degree of each criterion in the rubric, which forms the basis to calibrate the reward direction\. Then, the final objective is designed with an automatically reweighting coefficient for each criterion to achieve the fine\-grained balancing\. Extensive experiments across three model scales and six benchmarks demonstrate that our \\emph\{Focal Reward\} method outperforms the strongest static aggregation baseline in all 18 model\-\-benchmark comparisons\. Rollout, mechanism, and ablation analyses further show that these gains arise from online, saturation\-aware reallocation toward rubrics that still have room for improvement\.

## Don’t Let Gains FADE: Breaking Down Policy Gradient Weights in RL

**Authors:** Juliette Decugis; Sean O'Brien; Francis Bach; Gabriel Synnaeve; Taco Cohen

**ID:** 152022 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W67QEDh87x>) | [PDF](<https://openreview.net/pdf?id=W67QEDh87x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152022>)

Reinforcement\-learning\-based post\-training for large language models vastly improves capabilities on verifiable tasks however it suffers from training instability and diversity collapse\. As a solution, many new advantage functions have emerged\. Each method simultaneously changes which problems receive gradient, the balance between positive and negative updates, and the overall gradient scale making their comparison difficult\. We propose a unifying framework that decomposes each function by their induced positive and negative gradient mass\. Analyzing policy performance and the geometry of model weights reveals: symmetric methods are better but slow and asymmetric methods are fast\. Combining the advantages of both, we build the FADE: Focal Adaptive Dynamic Entropy advantage which is fast, diverse and accurate at various model scales \(7B, 32B\)\.

## Reinforcement Learning for Code Optimization

**Authors:** Pierre Chambon; Kunhao Zheng; Juliette Decugis; Benoît Sagot; Gabriel Synnaeve

**ID:** 149385 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qRPKxKFqhP>) | [PDF](<https://openreview.net/pdf?id=qRPKxKFqhP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149385>)

RL for code correctness is now established: have the model generate a program, run it against hidden test cases, and reward solutions that pass\. Extending this to code optimization seems straightforward: just add execution time to the reward\. But in practice, once timing drives the reward, small problems in measurement noise, reward sparsity, or GRPO instability overwhelm the signal and make RL fail: generated solutions are barely faster, and more of them can fail\. We make execution time learnable through three stages: \(1\) how code is tested, by building DMC\-Optim with large optimization tests and a calibrated sandbox; \(2\) how speed is turned into reward, by composing correctness and speed in the RL environment and using an offline simulator to predict the most promising configurations; and \(3\) how the model learns from that reward, by adapting GRPO and evaluation to the sparser, noisier timed\-execution setting\. On DMC\-Optim, the strongest optimization\-aware configurations improve strict top\-decile pass@1 from 18\.1% to 27\.7% on Qwen 2\.5 7B and from 28\.7% to 42\.4% on CWM 32B, while preserving most of the pure\-correctness score\. When the timing sandbox is degraded, robust optimization RL reaches up to roughly 130% improvement over standard RLVR\. On LCB, CWM 32B wins up to 70\.3% of best\-sample speed comparisons against standard RLVR; relative to the fastest correct human submissions per problem, it reaches about half the human rate of complexity\-class improvements \(14% vs\. 28%\)\.

## AffectGPT\-RL: Revealing Roles of Reinforcement Learning in Open\-Vocabulary Emotion Recognition

**Authors:** Zheng Lian; Fan Zhang; Lan Chen; Yazhou Zhang; Rui Liu; Jinyang Wu; Haoyu Chen; Xiaobai Li; Xiaojiang Peng; Bin He; Jianhua Tao

**ID:** 149766 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nUblZoo4wF>) | [PDF](<https://openreview.net/pdf?id=nUblZoo4wF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149766>)

Open\-Vocabulary Multimodal Emotion Recognition \(OV\-MER\) aims to predict emotions without being constrained by predefined label spaces, thereby enabling fine\-grained emotion understanding\. Unlike traditional discriminative methods, OV\-MER leverages generative models to capture the full spectrum of emotions and employs emotion wheels \(EWs\) for metric calculation\. Previous approaches primarily rely on token\-level loss during training\. However, this objective is misaligned with the metrics used in OV\-MER, and these metrics cannot be directly optimized via gradient backpropagation\. To address this limitation, we turn our attention to reinforcement learning, as this strategy can optimize non\-differentiable objectives\. We term this framework AffectGPT\-RL \. Furthermore, we conduct extensive experiments to elucidate the role of reinforcement learning in this task, revealing the necessity of the reasoning process, the impact of different rewards, and the generalizability to other emotion tasks such as sentiment analysis and basic emotion recognition\. Experimental results demonstrate that AffectGPT\-RL yields significant performance improvements on OV\-MER\. Beyond this task, we also achieve remarkable performance gains on basic emotion recognition, attaining state\-of\-the\-art results on MER\-UniBench\. To the best of our knowledge, this is the pioneering work exploring the role of reinforcement learning in OV\-MER, providing valuable guidance for subsequent researchers\. Our code is provided in the supplementary material and will be released to facilitate future research\.

## SALT: When More Rollouts Don’t Help in Group\-Based Policy Optimization and How to Make Them Matter

**Authors:** Powei Chang; Jinpeng Zhang; Chaoqun Sun; MiniWell Tsao; Lianrui Li; JianXiang Xiang; Chenyu Wang; Yukang Gao; Dongying kong

**ID:** 153988 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H3EiJWynbi>) | [PDF](<https://openreview.net/pdf?id=H3EiJWynbi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153988>)

Reinforcement learning with verifiable rewards \(RLVR\) often adopts GRPO\-style group\-relative updates, sampling multiple rollouts per prompt to construct normalized learning signals\. However, merely increasing the number of rollouts does not reliably strengthen learning: under GRPO\-style group normalization, per\-rollout policy\-gradient features can concentrate into a low\-rank, signed geometry, causing substantial cancellation during aggregation and weakening the effective update\.  We address this failure mode with SALT, a Subspace\-Adaptive geometry pLug\-in componenT that uses sample\-wise gradient geometry to reweight the coefficients of group\-relative updates\. SALT estimates a dominant shared subspace from the mini\-batch Gram geometry, decomposes group\-relative coefficients into shared and residual channels, and adaptively amplifies the residual channel when signed cancellation is severe\. Across diverse reasoning\-oriented RLVR benchmarks and model scales, SALT improves effective update geometry and performance without modifying the reward model or the rollout sampling procedure\.

## Skill\-Level Effects in Behavioral Cloning: When Low\-Skill Data Improves Performance

**Authors:** Saumik Narayanan; Kassa Korley; Siddhartha Sen; Chien\-Ju Ho

**ID:** 151198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cELixXL3SO>) | [PDF](<https://openreview.net/pdf?id=cELixXL3SO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151198>)

Behavioral cloning \(BC\), which trains models from offline demonstrations, is a common approach in reinforcement learning settings\. Prior work argues that BC requires expert demonstrations and performs poorly when trained on low\-skill data\. We challenge this assumption by showing that, in certain regimes, training on low\-skill data can yield models that outperform those trained on high\-skill data\. Because low\-skill data is often cheaper and more easily acquirable, this finding has important practical implications\. To explain this result, we introduce the notion of fragility, characterizing how a policy's reward degrades under errors, and provide theoretical insights on how fragility can predict low\-skill outperformance\. We test our approach in a synthetic environment and MuJoCo and validate it using human data from chess and racing\. Motivated by these findings, we connect our results to curriculum learning by structuring training according to demonstrator skill, rather than task difficulty as in standard curriculum design, and show that such skill\-based curricula can improve performance relative to standard BC approaches\.

## High\-Dimensional Robotic Reinforcement Learning with Developing Synergies

**Authors:** Junyi Shen; Yasuo Kuniyoshi; Kohei Nakajima

**ID:** 151314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bPifcfpxsk>) | [PDF](<https://openreview.net/pdf?id=bPifcfpxsk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151314>)

High\-dimensional robotic reinforcement learning \(RL\) is often bottlenecked by inefficient exploration in large, redundant actuator spaces\. We introduce Devyn \(Developing synergies\), a lightweight framework that learns a structured low\-dimensional action parameterization directly during policy optimization\. Unlike methods that require precomputed synergies or structured exploration in the full action space, Devyn starts from a randomly initialized latent\-to\-action map and shapes it online through task interaction\. The policy acts strictly in a reduced latent space, while a learnable synergy matrix decodes latent actions into actuator commands\. To make this evolving decoder stable and useful for policy learning, Devyn combines slow decoder evolution with structural regularization, reducing latent\-action semantic drift while encouraging compact coordination patterns\. Across diverse continuous\-control benchmarks, including high\-dimensional humanoid and overactuated musculoskeletal systems, Devyn improves upon standard SAC and achieves competitive or better performance than recent methods designed for high\-dimensional robotic control\. Ablations show that the gains do not come from a generic latent\-action bottleneck alone, but rather from the slow, structured evolution of the synergy matrix\. Our results suggest that learning the action parameterization itself can be a simple and effective route to scaling RL for high\-dimensional robots\.

## Dynamic Physical Adversarial LED Patterns via Reinforcement Learning

**Authors:** Konstantin Zyryanov; Nikita Lotts

**ID:** 155360 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6C7pZa4UhA>) | [PDF](<https://openreview.net/pdf?id=6C7pZa4UhA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155360>)

Physical adversarial attacks expose important limitations of modern vision systems, but most existing methods rely on static patches or textures\. We introduce a new problem setting: closed\-loop physical adversarial control, where an agent interacts with a real\-world perception system via a physical channel and receives only detector\-level feedback\. We optimize LED patterns with PR\-SAC in a high\-dimensional continuous action space\. We show that latent action parameterization with deterministic upsampling improves training stability compared to direct control of individual LEDs\. Across YOLOv8, Faster R\-CNN, and RetinaNet, the learned patterns reduce person\-detection confidence, decrease mAP@0\.5, and exhibit partial cross\-model transfer\. We further analyze robustness under distance and viewpoint changes, interaction with a defense mechanism, and failure modes such as Q\-drift, entropy collapse, and degradation after initial improvement\. Our results suggest that dynamic physical attacks should be evaluated not only by best\-case attack strength, but also by stability, transferability, and robustness under real\-world variation\.

## Delayed homomorphic reinforcement learning for environments with delayed feedback

**Authors:** Jongsoo Lee; Jangwon Kim; Soohee Han

**ID:** 155078 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8eYgphdWiq>) | [PDF](<https://openreview.net/pdf?id=8eYgphdWiq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155078>)

Reinforcement learning in real\-world systems often involves delayed feedback, which breaks the Markov assumption and impedes both learning and control\. Canonical augmentation\-based approaches cause state\-space explosion, which imposes a severe sample\-complexity burden\. Despite recent progress, state\-of\-the\-art augmentation\-based baselines either mainly alleviate the burden on the critic or rely on non\-unified treatments for the actor and critic\. In this study, we propose delayed homomorphic reinforcement learning \(DHRL\), a framework grounded in MDP homomorphisms that defines a belief\-equivalence relation over the augmented state space to collapse control\-redundant augmented states\. In principle, this yields exact abstraction under deterministic dynamics and approximate abstraction under stochastic dynamics, enabling both the actor and critic to benefit from a structured abstraction mechanism\. In finite domains, exact abstraction preserves optimality and recovers the delay\-free sample\-complexity order, whereas approximate abstraction admits a value\-loss bound on the resulting policy\. For continuous domains, we introduce deep delayed homomorphic policy gradient \(D$^2$HPG\), a deep actor\-critic instantiation of the DHRL framework\. Experiments on continuous\-control tasks in MuJoCo show that D$^2$HPG outperforms strong augmentation\-based baselines\.

## Self\-Improving World Modelling with Latent Actions

**Authors:** Yifu QIU; Zheng Zhao; Waylon Li; Yftah Ziser; Anna Korhonen; Shay Cohen; Edoardo Ponti

**ID:** 155539 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ow6O2MFtV>) | [PDF](<https://openreview.net/pdf?id=4ow6O2MFtV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155539>)

Internal modelling of the world, predicting transitions between previous states and next states under actions, is essential to reasoning and planning for LLMs and VLMs\. Learning such models typically requires costly action\-labelled trajectories\. We propose SWIRL, a self\-improvement framework that learns from state\-only sequences by treating actions as a latent variable and alternating between Forward World Modelling \(FWM\) and an Inverse Dynamics Modelling \(IDM\)\. SWIRL iterates two phases: \(1\) Variational Information Maximisation, which updates the FWM to generate next states that maximise conditional mutual information with latent actions given prior states, encouraging identifiable consistency; and \(2\) ELBO Maximisation, which updates the IDM to explain observed transitions, effectively performing coordinate ascent\. Both models are trained with reinforcement learning \(specifically, GRPO\) with the opposite frozen model's log\-probability as a reward signal\. We provide theoretical learnability guarantees for both updates, and evaluate SWIRL on LLMs and VLMs across multiple environments: single\-turn and multi\-turn open\-world visual dynamics and synthetic textual environments for physics, web, and tool calling\. SWIRL achieves gains of 16% on Aurora\-Bench, 28% on ByteMorph, 16% on WorldPredictionBench, and 14% on StableToolBench\.

## TIC\-GRPO: Provable and Efficient Optimization for Reinforcement Learning from Human Feedback

**Authors:** Lei pang; Jun Luo; ruinan Jin

**ID:** 150989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dlQ6zVz4Qq>) | [PDF](<https://openreview.net/pdf?id=dlQ6zVz4Qq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150989>)

Group Relative Policy Optimization \(GRPO\) is a critic\-free reinforcement learning algorithm for fine\-tuning large language models, but its token\-level importance sampling mechanism creates a subtle variance bottleneck\. We separate this bottleneck into two mechanisms\. First, the standard GRPO clipping rule is incomplete: on the negative\-advantage branch, it can pass uncontrolled upper\-tail importance weights\. This motivates up\-only clipping as a standalone correction\. Second, up\-only clipping alone is not enough if the update remains token\-level: the clipped token\-weighted score increments need not be martingale differences, so cross terms survive in the squared update\. This motivates trajectory\-level importance correction\.  We propose Trajectory\-level Importance\-Corrected GRPO \(TIC\-GRPO\), which follows this progression: it first caps upper\-tail ratios by up\-only clipping and then replaces token\-level importance ratios with a single trajectory\-level probability ratio\. The latter restores the measure\-change identity needed for trajectory\-level martingale cancellation\. Our variance theory gives upper bounds, hard\-instance lower bounds, and induced convergence lower bounds that separate original GRPO, the token\-level up\-clipped comparator GRPO$\_2$, and TIC\-GRPO\. Experiments on math reasoning and coding benchmarks further confirm that TIC\-GRPO improves optimization stability and final performance\.

## Scalable Maximum Entropy Reinforcement Learning for Diffusion Policies via Adjoint Matching

**Authors:** Serge Thilges; Onur Celik; Denis Blessing; Emiliyan Gospodinov; Gerhard Neumann

**ID:** 150581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8DYJlF7Jt>) | [PDF](<https://openreview.net/pdf?id=h8DYJlF7Jt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150581>)

Diffusion policies have recently emerged as a powerful paradigm for representing complex action distributions in reinforcement learning \(RL\)\. However, their application to online RL remains limited by the challenge of scalable training in the absence of ground\-truth data, where standard optimization techniques such as score matching are not directly applicable\. In this work, we introduce a highly efficient algorithm for optimizing diffusion policies by leveraging recent advances in stochastic optimal control\. Our approach is based on adjoint matching, which enables simulation\-free training and circumvents the need for explicit likelihood estimation or costly backpropagation through the diffusion process\. Furthermore, we propose several extensions that improve the robustness and stability of the method in practical settings\. Empirical results demonstrate that our approach achieves competitive performance while significantly reducing computational overhead, making diffusion policies more viable for online RL scenarios\.

## CARD: Internalizing Expert Critique into Reinforcement Learning for Deep Search

**Authors:** Yanyu Zhu; Hoilam Pao; Zhaoyu Hu; Yufei zhang; Jiajun Chai; Guojun Yin; Wei Lin; Dongnian Wang; Hai\-Tao Zheng; Hong\-Gee Kim; Shaoxiong Zhan

**ID:** 152838 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q15eHqL9AR>) | [PDF](<https://openreview.net/pdf?id=Q15eHqL9AR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152838>)

Reinforcement learning with verifiable rewards \(RLVR\) has become the dominant paradigm for post\-training large language models \(LLMs\) on complex reasoning and multi\-step agentic tasks\. However, the standard scalar reward signal is sparse and uninformative: it conveys whether a trajectory succeeded but not which reasoning steps failed or how to correct them, severely limiting sample efficiency on long\-horizon tasks where successful trajectories are rare\. We propose \\textbf\{CARD\} \(\\textbf\{C\}ritique\-\\textbf\{A\}ugmented \\textbf\{R\}einforcement \\textbf\{D\}istillation\), a training framework that amplifies the learning signal from a \\texttt\{verify\\\_answer\} tool within the GRPO objective via two complementary signals\. First, a token\-level self\-distillation reweighting measures how much each token's generation was shaped by the expert critique: tokens that merely echo the critique text are masked, while critique\-driven revision tokens are amplified\. Second, a rejection\-sampling distillation loss maximizes the likelihood of critique\-free trajectories for responses where the critique provably improved the answer, directly accelerating the internalization of critique\-guided behavior\. Together, these two signals distill critique\-augmented reasoning into the model's base policy without requiring additional rollouts or separate reward models\. Experiments on four long\-form deep search benchmarks and three multi\-hop question\-answering benchmarks demonstrate consistent improvements over the GRPO baseline\. On the deep search benchmarks, CARD improves average performance by 40\\% over the Qwen3\-8B base model and by 6\\% over GRPO; with Qwen3\-14B, the gains are 46\\% and 7\\%, respectively\. These results establish expert critique as an effective and scalable source of rich text supervision for reinforcement learning of long\-horizon research agents\. Furthermore, we show that \\texttt\{verify\\\_answer\} can serve as a test\-time self\-revision scaffold: at inference, the tool returns only task rubric criteria\-\-\-without expert feedback\-\-\-prompting the model to reflect on its draft and self\-revise, yielding consistent performance gains over the no\-VA baseline\.

## From Reasoning Chains to Verifiable Subproblems: Curriculum Reinforcement Learning Enables Credit Assignment for LLM Reasoning

**Authors:** Xitai Jiang; Wenze Lin; Zihan Tang; Yang Yue; Shenzhi Wang; Gao Huang

**ID:** 152795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QIDIchi6N0>) | [PDF](<https://openreview.net/pdf?id=QIDIchi6N0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152795>)

Reinforcement learning from verifiable rewards \(RLVR\) has shown strong promise   for LLM reasoning, but typical outcome\-based RLVR methods remain inefficient on   hard problems\. Correct final\-answer rollouts are rare, and standard   sample\-level credit assignment fails to leverage partial reasoning progress   embedded in unsuccessful attempts\. To address this problem, we introduce \*\*SCRL\*\* \(\*\*S\*\*ubproblem \*\*C\*\*urriculum \*\*R\*\*einforcement   \*\*L\*\*earning\), a curriculum reinforcement learning framework built on verifiable   subproblems derived from reasoning chains\. Given a reference solution, SCRL derives a series of verifiable subproblems and constructs a subproblem curriculum, with the final subproblem   fixed as the original problem\. This converts partial progress on hard problems   into verifiable learning signals\. Algorithmically, we propose \*subproblem\-level normalization\*, a training technique based on RLVR   that normalizes rewards independently at each subproblem position within the rollout group\. By assigning the resulting advantages to the corresponding answer   spans, we enable finer\-grained credit assignment without external rubrics or   reward models\. Our theoretical analysis shows that this subproblem curriculum makes hard problems more learnable by   lifting them out of gradient dead zones, with larger relative gains as the   original problem becomes harder\. Across seven mathematical reasoning benchmarks, SCRL outperforms strong   curriculum\-learning baselines, yielding \+4\.1 and \+1\.9 average\-point gains   compared to GRPO on Qwen3\-4B\-Base and Qwen3\-14B\-Base respectively\. On three   hard benchmarks \(AIME24, AIME25, and IMO\-Bench\), SCRL further yields point gains of \+3\.7 in pass@$1$ and \+4\.6 in pass@$64$ on   Qwen3\-4B\-Base, suggesting improved exploration on hard reasoning problems\. Further ablations show that the proposed credit   assignment is effective and that the gains do not require highly curated   subproblems or strong external generators, highlighting SCRL as a practical curriculum framework that enables fine\-grained credit   assignment for LLM reasoning\.

## Your Language Model is Its Own Critic: Reinforcement Learning with Value Estimation from Actor’s Internal States

**Authors:** Yunho Choi; Jongwon Lim; woojin Ahn; Minjae Oh; Jeonghoon Shim; Yohan Jo

**ID:** 153139 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NbI2sR01d3>) | [PDF](<https://openreview.net/pdf?id=NbI2sR01d3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153139>)

Reinforcement learning with verifiable rewards \(RLVR\) for Large Reasoning Models hinges on baseline estimation for variance reduction, but existing approaches pay a heavy price: PPO requires a policy\-model scale critic, while GRPO needs multiple rollouts per prompt to keep its empirical group mean stable\. We introduce $\\textbf\{POISE\}$ \($\\underline\{P\}$olicy $\\underline\{O\}$ptimization with $\\underline\{I\}$nternal $\\underline\{S\}$tate Value $\\underline\{E\}$stimation\), which obtains a baseline at negligible cost by using the policy model's internal signals already computed during the policy forward pass\. A lightweight probe predicts the expected verifiable reward from the hidden states of the prompt and generated trajectory, as well as token\-entropy statistics, and is trained online alongside the policy\. To preserve gradient unbiasedness despite using trajectory\-conditioned features, we introduce a cross\-rollout construction that predicts each rollout's value from an independent rollout's internal states\. Because POISE estimates prompt value using only a single rollout, it enables higher prompt diversity for a fixed compute budget during training\. This reduces gradient variance for more stable learning and also eliminates the compute overhead of sampling costs for detecting zero\-advantage prompts\. On Qwen3\-4B and DeepSeek\-R1\-Distill\-Qwen\-1\.5B across math reasoning benchmarks, POISE matches DAPO while requiring less compute\. Moreover, its value estimator shows similar performance to a separate LLM\-scale value model and generalizes to various verifiable tasks\. By leveraging the model's own internal representations, POISE enables more stable and efficient policy optimization\.

## Treat Bias as Noise: Training Bias\-Robust LLM Reasoning via Reinforcement Learning

**Authors:** Qian Wang; Xuandong Zhao; Zirui Zhang; Zhanzhi Lou; Nuo Chen; Dawn Song; Bingsheng He

**ID:** 150271 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jPnZFyHo4X>) | [PDF](<https://openreview.net/pdf?id=jPnZFyHo4X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150271>)

Large language models \(LLMs\) increasingly serve as reasoners and are being considered as automated evaluators, yet they remain susceptible to cognitive biases\-\-\-often altering their reasoning when faced with spurious prompt\-level cues such as consensus claims or authority appeals\. Existing mitigations via prompting or supervised fine\-tuning fail to generalize, as they modify surface behavior without changing the optimization objective that makes bias cues attractive\. We propose \\textbf\{Epistemic Independence Training \(EIT\)\}, a reinforcement learning framework built around a simple principle: models should learn that bias cues are \\emph\{unreliable\} rather than learning to either follow or reject them\. EIT trains on balanced conflict examples where each injected cue is equally likely to support the correct or incorrect answer, and uses a reward that penalizes bias\-following errors without rewarding agreement with a cue that happens to be correct\-\-\-making the cue non\-predictive of reward\. On controlled MMLU\-Pro reasoning tasks with bias injection, EIT improves accuracy and robustness on both Qwen3\-1\.7B and Qwen3\-4B when bias points to wrong answers, while preserving performance when bias aligns with truth\. Trained only on bandwagon bias, EIT generalizes along two out\-of\-domain axes: held\-out MMLU\-Pro subjects and unseen bias types \(authority, distraction, verbosity\)\. EIT\-trained Qwen3\-4B further outperforms untrained Qwen3\-8B and Qwen3\-14B on bias resistance, indicating that targeted training is more effective than model scaling alone\. Code and data are available at https://anonymous\.4open\.science/r/bias\-mitigation\-with\-rl\-BC47\.

## Mitigating Retaliatory Algorithmic Collusion in Repeated Games

**Authors:** Karthik Sivachandran; Rohan Paleja

**ID:** 149336 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qqcl0vdJhL>) | [PDF](<https://openreview.net/pdf?id=qqcl0vdJhL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149336>)

Reinforcement learning agents trained to maximize their own reward in repeated interactions can converge to supra\-competitive outcomes resembling explicit collusion, without communication or shared design\. Existing mitigation approaches are largely tied to specific economic settings, like two\-sided platforms and auctions, leaving open how to design interventions for general repeated games\. We address this gap by formalizing the connection between empirical observations from prior work on Q\-learning collusion and classical theory of Simple Penal Codes \(SPCs\)\. We show any non\-trivial SPC induces a quantifiable conditional dependence in agents' policies, detectable via the total variation distance between an agent's action distributions across cooperation and defection histories\. Building on this connection, we propose CURB \(Collusion Unwinding via Reward shaping and Belief injection\), a reward\-shaping framework that penalizes this Total Variation \(TV\) distance signal during Q\-learning and is guaranteed to convert any SPC fixed point of the dynamics into a trivial one, thus precluding collusive equilibria sustained by punishment threats\. Empirically, CURB substantially reduces collusion by Q\-learning agents in both Bertrand and Cournot Competition Repeated Games\. We further demonstrate that CURB extends to deep Q\-network agents in Bertrand competition, suggesting the mechanism generalizes beyond tabular Q\-learning\.

## Differentiable Belief\-based Opponent Shaping

**Authors:** Aarav G Sane; Karthik Sivachandran; Rohan Paleja

**ID:** 154944 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9kOlSk4Zqs>) | [PDF](<https://openreview.net/pdf?id=9kOlSk4Zqs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154944>)

Human coordination often relies on the ability to influence the beliefs of others through strategic action\. In multi\-agent reinforcement learning, opponent shaping attempts to replicate this influence, though existing methods typically operate within an opponent's parameter, policy, or value space\. Meanwhile, belief\-manipulation techniques in hidden\-role games often rely on hard\-coded objectives, such as deception or belief saturation\. We propose Differentiable Belief\-based Opponent Shaping \(D\-BOS\), a first\-order method that treats each observer's belief as the shaped opponent state and differentiates through $k$\-step softmax\-Bayes belief dynamics\. Rather than explicitly rewarding deceptive or cooperative behavior, our method treats the belief state as the target for shaping\. This allows the optimal strategy to emerge naturally from the environment's reward structure\. This belief\-space formulation provides an opponent\-shaping signal by differentiating through opponent belief updates, and naturally extends to multiple observers by aggregating gradients over their individual inferred belief trajectories\. Empirically, D\-BOS outperforms PPO and BBM in hidden\-role games, with the largest gains in mixed\-motive settings\.

## Cooperative Multi\-Agent Reinforcement Learning via Epigraph\-Form Guided Exploration

**Authors:** Sungil Son; Hoseong Jung; Dahyun Oh; H\. Jin Kim

**ID:** 153701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JQUxXMC9Es>) | [PDF](<https://openreview.net/pdf?id=JQUxXMC9Es>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153701>)

Discovering cooperative behavior in multi\-agent reinforcement learning \(MARL\) is challenging due to the combinatorial complexity of joint state\-action spaces, which hinders the emergence of coordinated behaviors from trial\-and\-error alone\. Intrinsic rewards are often used to aid discovery, but naively combining them with team objectives can distort the learning signal, compromising task performance\. In this paper, we propose EFXPLORER, a constrained exploration framework that maximizes exploration objectives subject to a constraint that preserves established task performance\. We solve it via an epigraph reformulation that introduces adaptive exploration budgets\. This approach separates intrinsic rewards from task objectives and regulates exploration through task feasibility\. To further encourage diverse and temporally extended exploration, we incorporate a successor distance\-based intrinsic reward that captures long\-horizon dependencies\. Empirically, our method outperforms strong baselines and induces novel cooperative strategies across SMAX, VMAS, and MPE benchmark suites\.

## Parameter Exploration for RLVR via Variational Learning

**Authors:** Vatsal Venkatkrishna; Nico Carlsen Daheim; Iryna Gurevych

**ID:** 149580 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p3hX7ae4x4>) | [PDF](<https://openreview.net/pdf?id=p3hX7ae4x4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149580>)

Exploration has been a focus of reinforcement learning research for a long time\. Recently, there has been growing evidence that encouraging exploration during LLM reinforcement learning can improve downstream performance\. However, methods for controlling exploration often rely on heuristics like clipping or temperature scaling that are unable to fundamentally change token\-level distributions, which might limit exploration\. Here, we explore controlling exploration via variational learning, where a distribution over neural network parameters is learned via noisy optimization, with parameters sampled from an approximate posterior\. We introduce Perturbed Parameter Policy Optimization \(3PO\), where the amount of noise that is added to model parameters functions as an additional control lever that can be tuned for exploration\. We show that using multiple parameter samples within a batch performs better than using a single sample\. When using multiple parameter samples in group\-based methods like GRPO, we find that calculating advantages across rollouts from all parameter samples performs best\. We call this Chunked Perturbed Parameter Policy Optimization \(C3PO\)\. We show empirically on a range of math reasoning benchmarks and LLMs that using multiple parameter samples can improve downstream performance, especially on harder benchmarks like AIME\. Overall, our work presents evidence that parameter\-space exploration can improve LLM reinforcement learning\.

## WTF?\! Simulation\-Free Reinforcement Learning with Wasserstein\-Tilted Flow Maps

**Authors:** Abbas Mammadov; Jerry Huang; Justin Lin; Partha Kaushik; Sheel Shah; Kartik Nair; Yee Whye Teh; Nicholas Boffi

**ID:** 150454 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hvPxti2lt3>) | [PDF](<https://openreview.net/pdf?id=hvPxti2lt3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150454>)

Fine\-tuning aims to update a pre\-trained flow\-based generative model to improve the downstream reward of its generated samples\. Existing methods typically frame this problem as sampling from a reward\-tilted distribution, which arises as the solution to a KL\-regularized reward\-maximization problem\. Here we take an alternative approach and introduce an \*optimal transport\* regularizer built directly from the pre\-trained drift; we show that the resulting fine\-tuning problem is equivalent to a \*deterministic optimal\-control problem\* on the flow\. Assuming access to a pre\-trained flow map, we exploit this equivalence to devise a simulation\-free reinforcement\-learning algorithm for fine\-tuning generative flows\. We call the resulting framework \*\*Wasserstein\-Tilted Flow Maps \(WTF\)\*\*, the first end\-to\-end fine\-tuning recipe native to flow maps\. The output of our approach is itself a fine\-tuned flow map, retaining few\-step reward\-aligned inference at deployment\. Numerical experiments at text\-to\-image scale highlight both the efficiency and the efficacy of our approach\. More broadly, our work argues that accelerated samplers such as flow maps are essential infrastructure for efficient post\-training, and that the dominant KL\-regularized formulation of fine\-tuning is only one of many choices worth revisiting\.

## VI\-CuRL: Stabilizing Verifier\-Independent RL Reasoning via Confidence\-Guided Variance Reduction

**Authors:** Xin\-Qiang Cai; Masashi Sugiyama

**ID:** 155000 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9JXekpggtg>) | [PDF](<https://openreview.net/pdf?id=9JXekpggtg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155000>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has emerged as a dominant paradigm for enhancing Large Language Models \(LLMs\) reasoning, yet its reliance on external verifiers limits its scalability\. Recent findings suggest that RLVR primarily functions by eliciting latent capabilities, motivating the development of verifier\-free algorithms\. However, in such settings, standard methods like Group Relative Policy Optimization face a critical challenge: destructive gradient variance that often leads to training collapse\. To address this issue, we introduce \*\*Verifier\-Independent Curriculum Reinforcement Learning \(VI\-CuRL\)\*\*, a framework that leverages the model's intrinsic confidence to construct a curriculum independent from external verifiers\. By prioritizing high\-confidence samples, VI\-CuRL effectively manages the bias\-variance trade\-off, specifically targeting the reduction of \*action\* and \*problem variance\*\. We provide a rigorous theoretical analysis, proving that our estimator guarantees asymptotic unbiasedness\. Empirically, VI\-CuRL promotes stability and consistently outperforms verifier\-dependent/independent baselines across math and general reasoning benchmarks with/without verifiers\.

## Compose Your Oracles: Off Policy Improvement with Aggregated Guidance

**Authors:** Jingtian Ji; Xuefeng Liu; Matthew Walter

**ID:** 149600 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ou8C3NZhp9>) | [PDF](<https://openreview.net/pdf?id=ou8C3NZhp9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149600>)

Learning from multiple imperfect oracles is a practical way to improve reinforcement learning \(RL\) under limited interaction\. However, most contemporary robust multi\-oracle methods are on\-policy and equire frequent fresh rollouts, which limits sample efficiency in domains where data collection is expensive\. We propose Oracle\-Aggregated Policy Improvement \(OPI\), an off\-policy framework for policy  improvement with multiple suboptimal oracles\. OPI augments the oracle set with the learner, constructs an oracle\-guided behavior policy through candidate\-action pooling and source\-aware critic scoring, and trains the learner using a generalized advantage\-weighted behavior cloning objective combined with deterministic policy gradients\. The method is motivated by a tractable proxy for the max\-advantage objective and a policy\-improvement relative to a strong oracle baseline\. We evaluate OPI on diverse tasks across MetaWorld, the DeepMind Control Suite, and customized Box2D environments with heterogeneous oracles\. Across sparse\-reward manipulation, dense\-reward locomotion, and customized control settings, OPI is strongest in sparse\-reward and complementary\-oracle regimes and remains competitive with representative baselines in dense\-reward environments\. Additional analyses show that oracle composition is most beneficial when oracle skills are complementary and that estimating oracle\-specific action values is particularly helpful in sparse\-reward regimes

## Efficient Gradient\-Aware Asynchronous Reinforcement Learning for LLM Post\-Training

**Authors:** Songhan Yang; Jie Wang; Yinqi Bai; Xialiang Tong; Jianye Hao; Mingxuan Yuan; Feng Wu

**ID:** 148273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z4T5PEbHgJ>) | [PDF](<https://openreview.net/pdf?id=z4T5PEbHgJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148273>)

Asynchronous reinforcement learning \(RL\) is an effective paradigm for improving the training efficiency of large language model \(LLM\) post\-training by decoupling rollout generation from policy optimization\. However, this decoupling introduces stale off\-policy samples generated by earlier behavior policies, leading to distribution shift and unstable policy updates\. Recent replay selection methods such as D\-ARL mitigate this issue by selecting variance\-aware samples, but require expensive current\-policy evaluation over replay responses and mainly rely on variance reduction or current\-policy matching as the selection criterion\. To address these limitations, we propose GA\-ARL, an efficient Gradient\-Aware Asynchronous Reinforcement Learning framework for LLM post\-training\. GA\-ARL derives an analytic target distribution from the KL\-regularized RL objective and introduces an advantage\-weighted variant to account for both policy preference and gradient strength\. During training, GA\-ARL maintains a replay buffer containing samples from recent behavior policies and selects low\-discrepancy samples according to the advantage\-weighted analytic target, avoiding additional current\-policy evaluation during replay scoring\. GA\-ARL outperforms SOTA asynchronous methods across mathematical, logical, and code reasoning benchmarks, achieving the best average accuracy on both Qwen3\-1\.7B and Qwen3\-4B, with improvements of up to 6\.1%\. Meanwhile, compared with the SOTA D\-ARL, GA\-ARL reduces wall\-clock training time by 25\.3% on average by avoiding additional current\-policy evaluation during replay selection\.

## Gradient Routing Localizes and Removes Unintended Behaviors in RL

**Authors:** Jake Ward; Shawn Hu; Aria Wong; Nathan Hu; Bryce Woodworth; Alexander Turner; Alex Cloud

**ID:** 153255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mc1ip92n6o>) | [PDF](<https://openreview.net/pdf?id=Mc1ip92n6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153255>)

We propose a novel solution to reward hacking in reinforcement learning\. Our setup involves a misspecified reward function corresponding to task completion, and a classifier that flags invalid solutions\. As in frontier LLM development, the classifier makes systematic errors\. Consequently, reward penalties and data filtering based on the classifier fail to prevent reward hacking\. To address this limitation, we introduce GRAFT: Gradient Routing Adapter Fine Tuning\. Rather than penalizing or filtering flagged behaviors during training, we constrain \(\`\`route''\) gradient updates to specific parameters\. This has two benefits\. First, the model does not learn to exploit classifier errors, i\.e\., it does not learn to hide the unintended behavior\. Second, the unintended behavior can be disabled by ablating the parameters to which they were localized\. We demonstrate these benefits in a variety of RL environments where reward penalties result in monitor\-subverting policies\. Additionally, we show that our method remains effective when we scale model size and task complexity by distilling frontier LLM trajectories into Qwen3\-32B\. Overall, we show that GRAFT is a promising approach for leveraging unreliable monitors during post\-training in environments where true performance is difficult to evaluate\.

## How I learned to stop worrying and love StopGrads: Stationarity, Convergence, and a case study on Flow Map Learning

**Authors:** Mark Goldstein; Max Shen; Zichu Wang; Aahlad Manas Puli; Rajesh Ranganath

**ID:** 149145 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sVQbbYHEsX>) | [PDF](<https://openreview.net/pdf?id=sVQbbYHEsX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149145>)

Stopgrads are widely used in training machine learning models, but stopgrads can alter the gradient, stationary points and convergence guarantees of the original objective, which can make stopgrad training theoretically ungrounded\. We introduce a \\textit\{stopgrad regression principle\}, which identifies a general template for stopgrad objectives with a closed\-form characterization of stationary points, and unifies stopgrad objectives for flow maps, reinforcement learning, and diffusion samplers\. We provide theoretical grounding for optimizing stopgrad flow map objectives by characterizing stationary points and proving convergence results\. Remarkably, we show that the learned flow map has a closed\-form expression composing the initial flow map and the true flow map, under functional semi\-gradient flow\. We use our stopgrad regression principle to propose novel modified stopgrad placements for flow map objectives which speed up training by $\{\\sim\}2\.5\\times$\.

## Discovering Programmatic Policies from Reinforcement Learning\-Based Traffic Signal Controllers

**Authors:** Lindong Xie; Yang Zhang; Beiyu Song; XING Zeren; Flora Salim; Edward Chung

**ID:** 148335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ybRA9BTKJ8>) | [PDF](<https://openreview.net/pdf?id=ybRA9BTKJ8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148335>)

Traffic signal control \(TSC\) is critical for mitigating urban congestion\. Deep reinforcement learning \(DRL\) has achieved strong performance by learning adaptive policies from traffic observations, but learned neural controllers are often opaque, structurally complex, and difficult to generalize across scenarios\. We propose PPL\-TSC, a programmatic policy learning framework that distills compact and human\-readable TSC policies from DRL teachers\. PPL\-TSC formulates policy learning as an evolutionary search over phase utility functions \(PUFs\), which score candidate signal phases and select the highest\-utility phase for execution\. Each generation consists of four steps: policy generation, policy review, policy calibration, and policy evaluation\. In the generation step, a large language model \(LLM\) acts as a semantics\-aware evolutionary operator to propose and refine candidate PUFs\. Generated PUFs are screened through explicit checks for syntactic validity, mathematical soundness, and consistency with TSC principles, with invalid ones repaired through iterative feedback\. Valid PUFs are then calibrated to improve behavioral fidelity to the DRL teacher, and evaluated using a joint score combining teacher fidelity and traffic\-control performance to select candidates for the next generation\. Extensive experiments across diverse traffic scenarios and representative DRL\-based controllers show that PPL\-TSC produces compact and human\-readable policies, matches teacher performance, improves transfer generalization, and substantially reduces computational cost\.

## STAPO: Stabilizing Reinforcement Learning for LLMs by Silencing Rare Spurious Tokens

**Authors:** Shiqi Liu; Zeyu He; Guojian Zhan; Letian Tao; Zhilong Zheng; Jiang Wu; yinuo Wang; Yang Guan; Kehua Sheng; Bo Zhang; Keqiang Li; Jingliang Duan; Shengbo Eben Li

**ID:** 148439 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xnL7HqJSHm>) | [PDF](<https://openreview.net/pdf?id=xnL7HqJSHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148439>)

Reinforcement Learning \(RL\) has significantly improved large language model reasoning, but existing RL fine\-tuning methods rely heavily on heuristic techniques such as entropy regularization and reweighting to maintain stability\. In practice, they often suffer from late\-stage performance collapse, leading to degraded reasoning quality and unstable training\. We identify a key factor behind this instability: a small fraction of tokens, termed spurious tokens \(around 0\.01\\%\), which contribute little to the reasoning outcome but receive disproportionately amplified gradient updates due to inheriting the full sequence\-level reward\. We present a unified framework for evaluating token\-level optimization impacts across spurious risk, gradient norms, and entropy changes\. Building the analysis of token characteristics that severely disrupt optimization, we propose the Silencing Spurious Tokens \(S2T\) mechanism to efficiently suppress their gradient perturbations\. Incorporating this mechanism into a group\-based objective, we propose Spurious\-Token\-Aware Policy Optimization \(STAPO\), which promotes stable and effective large\-scale model refinement\. Across six mathematical benchmarks and three model scales, STAPO consistently demonstrates superior entropy stability and achieves average accuracy improvements over baselines including GRPO, 20\-Entropy, and JustRL under two widely\-adopted evaluation settings\.

## MINT: Meeting\-time INdicators for Truncation in Multi\-Step Off\-Policy RL

**Authors:** Seungyub Han; Taehyun Cho; Dohyeong Kim; Kyungjae Lee; Jungwoo Lee

**ID:** 154850 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AR4QW2PjBU>) | [PDF](<https://openreview.net/pdf?id=AR4QW2PjBU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154850>)

Multi\-step off\-policy TD methods correct the behavior\-\-target mismatch through a \\emph\{product\} of per\-step trace coefficients, yet this product inherently amplifies variance or discards long\-horizon signal, making the cap length a sensitive hyperparameter\. We propose \\textbf\{MINT\} \(Meeting\-time INdicators for Truncation\), which replaces coefficient products with a binary coupling indicator: one until the behavior and target trajectories meet, zero thereafter\. Because the indicator is idempotent, variance depends only on the meeting\-time survival probability\-\-\-not on ratio products\-\-\-and a single action sample estimates the per\-step coupling probability without mixing\-time knowledge\. \\texttt\{MINT\} contracts in supremum norm to $Q^\\pi$ under arbitrary behavior policies; empirically, \\texttt\{MINT\} outperforms handcrafted multi\-step baselines across MuJoCo and DeepMind Control tasks without cap\-length tuning\.

## Grounding Agent Reasoning with Structured Process Supervision for Multi\-turn Reinforcement Learning

**Authors:** Renting Rui; Yulei Qin; Weiwen Liu; Yunjia Xi; Ke Li; Xing Sun; Weinan Zhang; Yong Yu

**ID:** 155516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=519KXHiEy2>) | [PDF](<https://openreview.net/pdf?id=519KXHiEy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155516>)

Long\-horizon LLM agents trained with outcome\-based RL exhibit a systematic failure mode: reasoning diverges from environmental observations at some step, and the error compounds across subsequent turns\. We find that 74\\% of failed trajectories contain reasoning–observation inconsistency, and once it appears, 62\\% of subsequent turns remain inconsistent\. Process rewards reduce but do not eliminate this: under free\-form reasoning, agents learn to avoid penalties without genuinely tracking task progress or anticipating action outcomes\. We propose ARC \(Anchored Reasoning with Commitment\), which requires the agent to make two explicit commitments at each step: a global progress statement that reconciles the agent's understanding of task state with accumulated observations, and a local outcome prediction that must be borne out by the next observation\. Together, these commitments anchor the agent's reasoning to the actual environment state across turns, and provide well\-defined targets for process supervision\. To prevent interference between sparse outcome and dense process signals, we decouple their advantages via independent group normalization\. On ALFWorld, WebShop, and WebArena, ARC improves over the strongest baseline by 6\.4, 3\.5, and 9\.6 points respectively\.

## Two is better than one: A Collapse\-free Multi\-Reward RLIF Training Framework

**Authors:** Shourov Joarder; Diganta Sikdar; Ahsan H Akash; Binod Bhattarai; Prashnna K Gyawali

**ID:** 154502 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8K5QK3kwT>) | [PDF](<https://openreview.net/pdf?id=D8K5QK3kwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154502>)

Reinforcement learning with verifiable rewards \(RLVR\) has substantially improved the reasoning ability of LLMs, but often depends on external supervision from human annotations or gold\-standard solutions\. Reinforcement learning from internal feedback \(RLIF\) has recently emerged as a scalable unsupervised alternative, using signals extracted from the model itself\. However, existing RLIF methods typically rely on a single internal reward, which can lead to reward hacking, entropy collapse, and degraded reasoning structure\. We propose a multi\-reward RLIF framework that decomposes the training signal into two complementary components: an answer\-level reward based on cluster voting and a completion\-level reward based on token\-wise self\-certainty\. To combine these signals robustly, we apply GDPO\-based normalization to reduce reward\-scale imbalance\. We further introduce KL\-Cov regularization, which targets low\-entropy token distributions responsible for disproportionate entropy reduction, preserving exploration and preventing late\-stage collapse\. Across mathematical reasoning and code\-generation benchmarks, our method improves stability and robustness over prior unsupervised RL approaches, while achieving performance close to supervised RLVR methods\. These results show that complementary internal rewards, combined with targeted regularization, can support stable long\-horizon reasoning without relying on external ground\-truth supervision\.

## FastDSAC: Unlocking the Potential of Maximum Entropy RL in High\-Dimensional Humanoid Control

**Authors:** JUN XUE; Junze Wang; Shanze Wang; Xinming Zhang; Yanjun Chen; Wei Zhang

**ID:** 151622 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZBAe6ak1l6>) | [PDF](<https://openreview.net/pdf?id=ZBAe6ak1l6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151622>)

Scaling Maximum Entropy Reinforcement Learning \(RL\) to high\-dimensional humanoid control remains a fundamental challenge, as the ''curse of dimensionality'' induces severe exploration inefficiency and training instability\. Consequently, highly optimized deterministic policy gradients currently dominate high\-throughput regimes\. We address this limitation with FastDSAC, a framework that effectively unlocks the potential of maximum entropy stochastic policies for complex continuous control\. We introduce Dimension\-wise Entropy Modulation \(DEM\) to dynamically redistribute the exploration budget, alongside a continuous distributional critic tailored to ensure accurate value estimation by mitigating both high\-dimensional overestimation and discrete quantization artifacts\. Extensive evaluations on HumanoidBench and a diverse set of continuous control tasks demonstrate that FastDSAC establishes state\-of\-the\-art performance for high\-dimensional stochastic policies on the evaluated benchmarks\. Our method is competitive with and often outperforms strong deterministic baselines, with gains of 180\\% and 350\\% on the challenging \*Basketball\* and \*Balance Hard\* tasks, respectively\.

## Sampling\-Based Safe Reinforcement Learning

**Authors:** Luca Vignola; Bruce D Lee; Manish Prajapat; Manuel Wendl; Melanie Zeilinger; Andreas Krause; Yarden As

**ID:** 149799 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nGAaqOxzHK>) | [PDF](<https://openreview.net/pdf?id=nGAaqOxzHK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149799>)

Safe exploration remains a fundamental challenge in reinforcement learning \(RL\), limiting the deployment of RL agents in the real world\. We propose Sampling\-Based Safe Reinforcement Learning \(SBSRL\), a model\-based RL algorithm that maintains safety throughout the learning process by enforcing constraints jointly across a finite set of dynamics samples\. This formulation approximates an intractable worst\-case optimization over uncertain dynamics and enables practical safety guarantees in continuous domains\. We further introduce an exploration strategy based on constraining epistemic uncertainty, eliminating the need for explicit exploration bonuses\. Under regularity conditions, we derive high\-probability guarantees of safety throughout learning and a finite\-time sample complexity bound for recovering a near\-optimal policy\. Empirically, SBSRL achieves safe and efficient exploration both in simulation and in real\-world experiments, and readily extends to practical deep\-ensemble implementations that scale to high\-dimensional continuous control problems\.

## Learn from the Gap: Differential\-Aware Advantage Pruning with Adaptive Rollout Sampling for GRPO

**Authors:** Jiahua Yang; Chuangchuang Wang; Zhiwei Yang; Xianpeng Zhang; Dongyu Chen; Xing Chen; Tianhuang Su; Haonan Lu; Quanlong Guan; Kai Tang

**ID:** 153498 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kw9cIpaixY>) | [PDF](<https://openreview.net/pdf?id=Kw9cIpaixY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153498>)

Recently, Group Relative Policy Optimization \(GRPO\) and its variants have been developed for policy optimization and demonstrated notable performance gains\. However, these methods usually incur substantial computational overhead due to per\-question multi\-rollout sampling and repeated per\-token probability evaluation across rollouts\. Furthermore, low\-information or highly homogeneous trajectories can degrade downstream learning signal efficiency, hindering model optimization and limiting final performance\. To address these issues, we propose FastRL, a novel plug\-and\-play reinforcement learning framework that simultaneously improves training efficiency and the effectiveness of policy learning\. Specifically, 1\) We introduce an advantage\-aware pruning strategy to selectively preserve high\-advantage trajectories while maximizing inter\-trajectory gradient diversity\. 2\) Then, we design an adaptive rollout sampling mechanism to dynamically adjust the sampling scale across different training stages based on historical pruning distributions, balancing exploration adequacy and computational efficiency\. Experiments demonstrate that FastRL can be seamlessly integrated into GRPO, DAPO, and GSPO variants, achieving an average 2\.07x training speedup on Geometry3K and GeoQA8K\-R1V, along with an approximately 1\.64% improvement in average accuracy on visual reasoning benchmarks\. Source codes will be available at https://anonymous\.4open\.science/r/FastRL0\.

## SARL: Label\-Free Reinforcement Learning by Rewarding Reasoning Topology

**Authors:** Yifan Wang; Bolian Li; David Cho; Ruqi Zhang; Fanping Sui; Ananth Grama

**ID:** 148282 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z1jRrHayf1>) | [PDF](<https://openreview.net/pdf?id=z1jRrHayf1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148282>)

Reinforcement learning is critical to improving large reasoning models, but its success relies heavily on verifiable rewards \(RLVR\), making it hard to use in open\-ended domains where correctness is ambiguous and cannot be verified\. Moreover, reasoning trajectories remain largely unconstrained, and optimizing solely toward the final answer can favor early exploitation over generalization\. In this work, we ask whether general reasoning ability can be improved by teaching models how to think \(the structure of reasoning\) rather than what to produce \(the outcome of reasoning\), and we extend traditional RLVR to open\-ended settings\. We introduce Structure\-Aware Reinforcement Learning \(SARL\), a label\-free framework that constructs per\-response reasoning maps from intermediate thinking steps and rewards their reasoning topology\. SARL shifts supervision from destination to path, encouraging reasoning trajectories that are both locally coherent and globally efficient\. On verifiable math tasks, SARL outperforms prior label\-free RL baselines and even exceeds RL methods with ground truth supervision, with average gains of \+9\.1\\% under PPO and \+11\.6\\% under GRPO across four math benchmarks, with particularly large improvements on AIME25 \(\+35\.5\\% with PPO and \+44\.7\\% with GRPO\)\. On non\-verifiable open\-ended tasks, SARL achieves average gains of \+34\.6\\% under PPO and \+30\.4\\% under GRPO on WildBench across five task categories, outperforming prior label\-free RL methods and DPO, which relies on additional preference labels\. Beyond strong performance, SARL exhibits substantially lower KL divergence and higher policy entropy, indicating more stable and exploratory training dynamics\. Code and data are available at https://anonymous\.4open\.science/r/SARL\-EB77

## Addressing Sparse\-Rewards in RL with Scalable Hierarchical Novel Eigen Options

**Authors:** Priyesh Vijayan; Élodie Côté\-Gauthier; Mathieu Reymond; Sarath Chandar; Doina Precup; Isabeau Prémont\-Schwarz

**ID:** 150071 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ky5vzGwUTU>) | [PDF](<https://openreview.net/pdf?id=ky5vzGwUTU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150071>)

Temporally extended exploration via graph Laplacian\-based options is a promising approach to sparse\-reward reinforcement learning \(RL\), but existing methods either do not explicitly target novelty or fail to scale to pixel\-based domains under function approximation\. Novel Exploration via Orthogonality \(NEO\) addresses the first issue by constructing options that navigate from highly visited regions toward less visited ones, yet prior results were limited to settings where exact eigenvectors can be computed\. We present a scalable extension of NEO to pixel\-based domains, built on three contributions\. First, we use a novelty\-weighted continuous Laplacian graph\-drawing objective, which enables RL with continuous observations\. Second, we embed the resulting eigen\-potential options within a hierarchical reinforcement learning framework, enabling coherent temporally extended behavior\. Third, we observe that learned eigen\-potential rewards are directional but locally unreliable under online approximation; we therefore augment each option reward with a novelty bonus, a novel design idea that proves essential for stabilizing option learning while preserving novelty\-directed exploration\. Together, these contributions yield stronger and more persistent exploration, enabling longer option rollouts and better access to hard\-to\-reach novel states\. Empirically, our method significantly outperforms both the prior scalable Laplacian\-option baseline and a direct extension of NEO on sparse\-reward benchmarks under a fixed budget\. On Montezuma's Revenge, our best variant achieves approximately 1\.8x higher return than both baselines\. On Venture, both baselines yield returns near zero, whereas our method achieves a return of 1135\. Across seven hard ProcGen games, our method achieves approximately 3\.5x and 5\.6x higher aggregate normalized return than the two baselines, respectively\.

## Amortizing Generative Guidance for Model\-Based Reinforcement Learning

**Authors:** Xiangteng Zhang; Guojian Zhan; Likun Wang; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152395 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TPXx2a0pW6>) | [PDF](<https://openreview.net/pdf?id=TPXx2a0pW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152395>)

Planner\-guided model\-based reinforcement learning \(MBRL\) has emerged as a powerful paradigm for continuous control, combining learned world models with online planning to achieve strong performance and sample efficiency\. However, existing methods typically distill planner\-improved actions into a unimodal Gaussian policy and reuse it as a proposal prior for subsequent planning, overlooking the fact that Model Predictive Path Integral \(MPPI\) planners can induce multimodal supervision over high\-value actions\. Compressing such supervision into a unimodal distribution can lead to mode averaging, limited proposal coverage, and unstable bootstrapped policy learning\. To address this issue, we propose GeMP, a \\textbf\{Ge\}nerative \\textbf\{M\}ultimodal \\textbf\{P\}lanning framework for MBRL\. We theoretically characterize the multimodality of planner\-induced supervision, showing that finite\-sample planning can provide a distribution of high\-value actions rather than a single deterministic target\. To capture this distribution without compromising training stability, GeMP jointly learns a multimodal flow policy through value\-weighted supervision and retains an auxiliary Gaussian policy for stablizing off\-policy actor\-critic learning\. We further employ a heterogeneous proposal generator that combines Gaussian, flow\-based, and random action\-sequence candidates to improve proposal coverage for MPPI refinement\. Experiments on MyoSuite and DeepMind Control Suite show that GeMP improves control performance and training stability over competitive baselines\.

## Look\-ahead Variational Flow for Generative Online Reinforcement Learning

**Authors:** Tianyi Zhang; Likun Wang; Tianze Zhu; Guojian Zhan; yinuo Wang; Feihong Zhang; Yang Guan; Yao Lyu; Shengbo Eben Li

**ID:** 154685 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BkbldiALe2>) | [PDF](<https://openreview.net/pdf?id=BkbldiALe2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154685>)

Generative policies have emerged as a compelling paradigm in reinforcement learning \(RL\) as they can represent complex and multimodal action distributions\. However, this high expressivity leaves them particularly vulnerable to the inherent target distribution non\-stationarity in RL, rendering the generative process severely volatile\. To address this issue, we propose \\textbf\{L\}ook\-ah\\textbf\{E\}ad v\\textbf\{A\}riational \\textbf\{F\}low \(LEAF\), a generative policy optimization framework that stabilizes both the target and the generative process\. First, we replace the action\-value\-guided target with a look\-ahead target induced by predictive dynamics, which we theoretically prove to exhibit a tighter target drift bound\. Second, we formulate policy improvement as a proximal variational free\-energy optimization, which enforces a distributional trust region to prevent overfitting to transient target shifts\. Finally, we prove that this optimization induces an optimal transport flow, which we instantiate as a two\-phase coarse\-to\-fine generative process to achieve broad multimodal coverage and pinpoint accuracy\. Extensive experiments on the DeepMind Control Suite and Humanoid Bench demonstrate that LEAF consistently outperforms strong baselines in both sample efficiency and asymptotic performance\.

## Selected\-Tail Reliability in Verifier\-Guided Best\-of\-$N$ Inference

**Authors:** Teresa Zhang

**ID:** 155878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2A1ozLhi9p>) | [PDF](<https://openreview.net/pdf?id=2A1ozLhi9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155878>)

Today, verifier\-guided best\-of\-$N$ inference is a common way to spend test\-time compute in language modeling, code generation, and alignment: generate $N$ candidates, score them with a verifier or reward model, and deploy the highest\-scoring output\. This paper argues that the relevant reliability object is not average verifier accuracy but \\emph\{selected\-tail reliability\}, namely the behavior of the output chosen after optimizing over $N$ noisy public scores; we derive exact selected\-rank exposure laws for best\-of\-$N$ selection and finite\-verifier resource laws showing that selected public optimism scales at the $\\sqrt\{\\log N/m\}$ regime under $m$ units of verifier evidence\. We then separate public optimism from hidden utility harm, showing that public\-score inflation alone is not a harm claim and that harm or uncertifiability requires public\-hidden mismatch, tail dominance, count imbalance, or an unresolved selected\-tail regime\. Building on these results, we introduce Tail\-Certified Compute Caps, a conservative procedure that certifies candidate budgets or refuses certification using selected\-tail intervals, verifier\-resource penalties, mismatch envelopes, and feasibility gates\. In exact\-verifier/public\-hidden experiments, the theory predicts selected false\-positive exposure and supports resource\-aware cap decisions over an all\-attempted denominator, while non\-code candidate tables with pre\-existing public human annotations serve as secondary scoped $K\\ge16$ consistency checks under proxy/model\-prior/verifier\-style scores across Arena55K and Stanford SHP\. Overall, the paper provides a reliability framework for verifier\-guided inference\-time scaling: candidate budgets should be justified by evidence about the selected tail that is actually deployed, not only by average verifier validation\.

## When Does Non\-Uniform Replay Matter in Reinforcement Learning?

**Authors:** Michal Korniak; Mikołaj Czarnecki; Yarden As; Piotr Miłoś; Pieter Abbeel; Michal Nauman

**ID:** 153281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MQaqQTPeHp>) | [PDF](<https://openreview.net/pdf?id=MQaqQTPeHp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153281>)

Modern off\-policy reinforcement learning algorithms often rely on simple uniform replay sampling and it remains unclear when and why non\-uniform replay improves over this strong baseline\. Across diverse RL settings, we show that the effectiveness of non\-uniform replay is governed by three factors: replay volume, the number of replayed transitions per environment step; expected recency, how recent sampled transitions are; and the entropy of the replay sampling distribution\. Our main contribution is  clarifying when non\-uniform replay is beneficial and providing practical guidance for replay design in modern off\-policy RL\. Namely, we find that non\-uniform replay is most beneficial when replay volume is low, and that high\-entropy sampling is important even at comparable expected recency\. Motivated by these findings, we adopt a simple Truncated Geometric replay that biases sampling toward recent experience while preserving high entropy and incurring negligible computational overhead\. Across large\-scale parallel simulation, single\-task, and multi\-task settings, including three modern algorithms evaluated on five RL benchmark suites, this replay sampling strategy improves sample efficiency in low\-volume regimes while remaining competitive when replay volume is high\.

## Meta\-Reinforcement Learning with Zero\-Shot Reinforcement Learning

**Authors:** Jake Grigsby; Siddhant Agarwal; Yu Lei; Leonidas Varveropoulos; Yuke Zhu

**ID:** 154250 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FAb595Jqbg>) | [PDF](<https://openreview.net/pdf?id=FAb595Jqbg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154250>)

Meta\-reinforcement learning \(meta\-RL\) agents adapt to novel tasks from test\-time experience, but require diverse training sets of environments and reward functions that are expensive to construct\. Behavior Foundation Models \(BFMs\) learn policies from reward\-free data that are capable of zero\-shot RL \(ZSRL\), adapting to new objectives at test time when given a large reward\-labeled dataset\. Recent work has shown that BFM task inference can be performed online, making BFMs and meta\-RL direct competitors for generalization in fixed environments\. We ask whether BFMs can be extended to adapt to novel reward functions in novel environments, and identify four key limitations: environment identification, online data collection, test\-time exploration\-exploitation, and mixed reward supervision\. We study these subproblems through toy domains, standard BFM benchmarks, and simulated humanoid locomotion, then propose a unified framework that addresses all four\. The resulting method, MetaBFM, is a hybrid RL agent spanning meta\-RL, ZSRL, and intrinsic exploration\. During training, MetaBFM combines supervised reward\-following with unsupervised reward\-free learning; at test time, it interpolates between exploration, exploitation, and ZSRL\-style reward inference\. We evaluate MetaBFM on two toy meta\-RL domains and at scale in MetaWorld, showing that hybrid meta\-RL/ZSRL agents can learn more general behavior from the same set of reward functions and may reduce the need for future meta\-RL domains to hand\-design diverse training sets\.

## Extrapolative Weight Averaging Reveals Correctness–Efficiency Frontiers in Code RL

**Authors:** Kunhao Zheng; Juliette Decugis; Pierre Chambon; Jonas Gehring; Taco Cohen; Benjamin Negrevergne; Gabriel Synnaeve

**ID:** 151744 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YRDiKZgtA9>) | [PDF](<https://openreview.net/pdf?id=YRDiKZgtA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151744>)

Linear interpolation between fine\-tuned checkpoints has been shown to trace the Pareto front between competing objectives, but whether extrapolative weight averaging can extend such frontiers to new checkpoints useful at inference time, without additional RL training, remains unclear\. We study this question in RL for competitive programming, where hidden unit tests under time and memory limits enforce both functional correctness and computational efficiency\. Starting from a shared initialization, we train checkpoints under nested unit\-test coverage: low\-coverage rewards require passing smaller\-input tests, while high\-coverage rewards require passing progressively larger tests up to the full suite\. This sweep reveals the emergence of a correctness–efficiency frontier: on hard problems, higher\-coverage reward reduces optimization failures but increases correctness failures, leaving solve rate nearly unchanged\. Interpolation between low\- and high\-coverage checkpoints recovers this frontier, while extrapolation extends it beyond the trained endpoints\. Both the frontier and its extrapolative continuation appear across three inference settings, pure reasoning, tool use, and agentic coding, and across two model scales, 32B and 7B\. At the problem level, moving along the frontier changes which problems are solved, making extrapolated checkpoints complementary policies in inference\-time scaling: ensembles with extrapolative weight averaging broaden coverage and improve pass@250 on LCB/hard by 3\.3\\% over the best single checkpoint at matched sample budget\. These results show that nested unit\-test coverage in code RL induces a frontier that extrapolative weight averaging can navigate, extend, and exploit\.

## Focusing Influence Mechanism for Multi\-Agent Reinforcement Learning

**Authors:** Yisak Park; Sunwoo Lee; Seungyul Han

**ID:** 155238 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CsZY8dhlN>) | [PDF](<https://openreview.net/pdf?id=7CsZY8dhlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155238>)

Cooperative multi\-agent reinforcement learning \(MARL\) under sparse rewards remains fundamentally challenging because agents often fail to concentrate their influence, leading to insufficiently coordinated exploration\. To address this, we propose the Focusing Influence Mechanism \(FIM\), a framework that encourages agents to focus their influence on under\-explored parts of the state space through an entropy\-based criterion, while leveraging eligibility traces to enable multiple agents to consistently align and sustain their influence on the same parts of the state space when beneficial, thereby promoting coordinated and persistent joint behavior\. By emphasizing under\-explored regions of the state space, FIM facilitates more efficient and structured exploration even under extremely sparse rewards\. Across diverse MARL benchmarks, FIM consistently improves cooperative performance over strong baselines\.

## SRL\-MPC: Shape\-Aware Reinforcement Learned Model Predictive Control

**Authors:** Ruihua Han; Rui Gao; Zhe Liu; Xinyi WANG; Chang Chen; Shuai Wang; Qi Hao; Jia Pan; Hengshuang Zhao

**ID:** 148686 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=voR1Kif1aw>) | [PDF](<https://openreview.net/pdf?id=voR1Kif1aw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148686>)

Safe and efficient shape\-aware navigation in heterogeneous crowds and robot fleets remains challenging\. Traditional approaches often assume homogeneous robots, sparse workspaces, simplified geometry, offline computation, or handcrafted parameters to make the problem tractable, which limits their deployment in dense crowd scenarios\. Toward this end, we propose Shape\-Aware Reinforcement Learned Model Predictive Control \(SRL\-MPC\), a method for safe, efficient, and adaptive navigation in crowds with heterogeneous shapes without geometry simplification\. To encode shape\-aware safety, we formulate high\-order control barrier function \(HOCBF\) constraints from geometric separation features \(GSFs\) based on support function transformation\. A reinforcement learning \(RL\) framework then learns a neural policy that reads GSFs and outputs real\-time MPC parameter updates, enabling the MPC solver to adapt to neighboring crowd geometries\. The key advantage of SRL\-MPC is that it preserves the safety structure and generalizability of MPC while integrating the adaptability and intelligence of RL\. Experiments in randomized crowd scenarios with arbitrary shaped robot fleets demonstrate the effectiveness, scalability, and robustness of SRL\-MPC\. The results show that SRL\-MPC substantially outperforms representative baselines in safety and adaptability\.

## Designing Reinforcement Learning for Diffusion Models: A Unified Path\-Space View

**Authors:** Yixian Xu; Yuanrui Zhang; Shengjie Luo; Kaiyuan Gao; Liwei Wang; Di He

**ID:** 155438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5e4jcilj33>) | [PDF](<https://openreview.net/pdf?id=5e4jcilj33>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155438>)

Reinforcement learning \(RL\) post\-training provides a direct way to align diffusion and flow\-matching generators with human preferences and task\-specific rewards, but current RL algorithms for diffusion models remain fragmented: reverse\-trajectory methods rely on discretized likelihood ratios, whereas forward\-matching methods train on reward\-labeled noising pairs\. This paper shows that these seemingly different losses arise from a single path\-space principle\. Starting from the regularized diffusion\-RL objective, we use  importance sampling between sampling SDEs to obtain an explicit policy\-gradient estimator on trajectory space\. The estimator contains the stochastic It\\^o integral underlying Flow\-GRPO\-type updates; we derive an equivalent variance\-reduced value\-gradient form that recovers the forward\-matching structure of AWM and DiffusionNFT\. This identifies the empirical gap between these method families as a variance\-reduction effect rather than a difference in RL principle\. The derivation yields a unified design space organized by value\-gradient estimation, weight functions, and sampling choices\. Within this space, we propose a multi\-sample KDE value\-gradient estimator that reuses rollout groups, together with scale\-bounded weight families that retain stable existing recipes while excluding singular ones\. Experiments on SD3\.5\-M and Qwen\-Image models validate the variance\-reduction explanation and show that the resulting recipe matches or improves over prior diffusion\-RL baselines\.

## AdaMAP: Learning Adaptive Multi\-Action Prediction with Grounded Dreaming Guidance

**Authors:** Muyao Li; Zihao Wang; XuJing Li; Xiangyang Li; Jiabo Ye; Zhiyong Wu; Yaodong Yang; Yujia Qin

**ID:** 155834 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Wzu7RgcCE>) | [PDF](<https://openreview.net/pdf?id=2Wzu7RgcCE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155834>)

Large agentic models can now operate in complex digital games by pretraining on web\-scale data, but gameplay trajectories often contain highly redundant actions\. Single\-action agents can exploit this redundancy spuriously by copying recent actions, leading to causal confusion\. Fixed\-length action chunks reduce this ambiguity by predicting multiple future actions at once, but their open\-loop execution accumulates errors because the agent cannot adapt to new observations during the chunk\. The agent should therefore learn when to act for longer without feedback and when to stop early for a new observation\. We introduce AdaMAP \(Adaptive Multi\-Action Prediction\), an adaptive multi\-action prediction framework that directly generates variable\-horizon action chunks, interleaves actions with grounded visual dreams that provide verifiable future constraints, and optimizes the resulting policy with offline imitation learning followed by online MAP\-PPO\. Across Minecraft and VizDoom, AdaMAP attains the best or tied\-best result in five of six task categories and improves average Minecraft success by 3\.56 percentage points over the fixed\-horizon RL baseline\. The learned horizons vary systematically across tasks and games, suggesting that adaptive multi\-action prediction discovers useful temporal abstractions\.

## Generative Actor\-Critic with Soft Bridge Policies

**Authors:** Ke He; Le He; Shunpu Tang; Yafei Wang; Lisheng Fan

**ID:** 155388 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=62FfbuBmjc>) | [PDF](<https://openreview.net/pdf?id=62FfbuBmjc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155388>)

Expressive generative policies such as diffusion and flow models are appealing for maximum\-entropy \(MaxEnt\) online reinforcement learning because of their ability to model multimodal and highly non\-Gaussian action distributions\. However, training effective soft generative policies faces two obstacles that often arise together\. First, marginal action densities are often unavailable, so existing methods typically rely on entropy bounds, heuristic proxies or approximations\. Second, iterative shared\-parameter samplers raise inference cost and require backpropagation through time over repeated network evaluations, increasing memory cost and destabilizing policy optimization\. These obstacles motivate us to seek a generative policy that exposes a tractable MaxEnt objective while requiring only a single sampled actor forward pass for action generation\. To this end, we propose soft generative actor\-critic \(SoftGAC\), whose actor defines a stochastic bridge from a fixed base latent to a terminal action latent in pre\-tanh space\. This structured bridge allows us to lift the MaxEnt objective as an analytically tractable path\-wise relative\-entropy objective against a high\-entropy reference process\. In practical finite\-step implementation, this relative entropy reduces exactly to sampled transition control energy and thus provides principled soft regularization\. Moreover, we keep the single\-pass actor lightweight by using small step\-specific bridge transitions, each evaluated only once per sampled action, while maintaining a parameter budget comparable to strong actor baselines\. Extensive experiments on challenging continuous\-control benchmarks show that \\myalgo attains higher or competitive returns than strong generative policy baselines, including diffusion and flow\-matching policies, while staying in the low\-latency regime of one\-pass actors and avoiding the much higher cost of many\-step diffusion samplers, showing considerable improvements in the compute\-return tradeoff\.

## Hodge Laplacian Quasi\-Harmonic Flows for Option Discovery

**Authors:** Andreas Theophilou; Özgür Şimşek

**ID:** 153764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ipo5Xh353j>) | [PDF](<https://openreview.net/pdf?id=Ipo5Xh353j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153764>)

Prior Laplacian\-based option\-discovery methods build options from 0\-form Laplacians defined on nodes, where the resulting eigenvectors induce routes toward isolated boundaries or extrema, thereby skewing visitation toward specific states\. In contrast, kernel eigenvectors of the 1\-form Hodge Laplacian represent interpretable, topology\-aware edge flows and naturally capture cyclic behaviour known as harmonic flows\. These kernel eigenvectors are particularly attractive because they define zero\-divergence edge flows, offering a natural solution for non\-isolated visitation to sources and sinks in regions in which they are active\. Despite this appeal, harmonic flows have not previously been explored as a basis for option discovery in reinforcement learning\. This is what we do here\. We first introduce harmonic\-flow skills and show that, on state graphs with tree\-like “dead\-end” appendages, purely harmonic flows can become nearly inactive in those regions, which can limit coverage\. To address this limitation, we propose quasi\-harmonic flow options: skill\-inducing edge flows that preserve harmonic cycles where harmonic activity is strong, while injecting drift into appendages using the lowest\-magnitude non\-harmonic eigenvector of the Hodge Laplacian, a low divergence solution, where harmonic activity is weak\. Our approach is eigenvector\-only, relying solely on spectral components of the Hodge Laplacian\. We compare quasi\-harmonic flow options against a harmonic\-flow options baseline and state\-of\-the\-art skill\-discovery methods from the literature, demonstrating empirical gains and analytical improvements on hitting\-time\-based metrics\.

## Overcoming Catastrophic Forgetting in Visual Continual Learning with Reinforcement Fine\-Tuning

**Authors:** Meng Lou; Hanzhong Guo; Linwei Chen; Yizhou Yu

**ID:** 151854 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XQ0Bir2SLj>) | [PDF](<https://openreview.net/pdf?id=XQ0Bir2SLj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151854>)

Reinforcement Fine\-Tuning \(RFT\) with verifiable rewards has emerged as a powerful learning paradigm for eliciting reasoning capabilities in Multi\-modal Large Language Models \(MLLMs\)\.  Recent studies also suggest that RFT \(e\.g\., GRPO\) is inherently more resilient to catastrophic forgetting than Supervised Fine\-Tuning \(SFT\)\.  However, whether RFT can effectively overcome forgetting in challenging visual continual learning settings, such as class\-incremental learning \(CIL\) and domain\-incremental learning \(DIL\), remains an open problem\. Through a pilot study on rehearsal\-free CIL, we confirm that while RFT consistently outperforms SFT, it still suffers from non\-negligible forgetting\.  We empirically trace this bottleneck to Trajectory\-level Drift Agnosticism: among candidate rollouts achieving identical task rewards, the KL divergence from the preceding\-task policy varies substantially, which strongly correlates with catastrophic forgetting across sequential tasks\. Motivated by this insight, we propose Retention\-aware Policy Optimization \(RaPO\), a simple yet effective RFT framework that explicitly mitigates forgetting through trajectory\-level reward shaping\.  Specifically, RaPO comprises two core components:  \(1\) Retention Reward that converts trajectory\-level distribution drift into a continuous reward signal, preferentially reinforcing knowledge\-preserving rollouts within each group;  \(2\) Cross\-Task Advantage Normalization \(CTAN\), which maintains a persistent exponential moving average of reward statistics across task boundaries to stabilize the optimization progress during continual learning\.  Leveraging the free\-form textual generalization of MLLMs, we comprehensively evaluate RaPO across five visual continual learning settings, spanning class\- and domain\-incremental image classification, class\-incremental video classification, and class\- and domain\-incremental object detection\.  Extensive experiments demonstrate that RaPO achieves leading performance, substantially reducing catastrophic forgetting while preserving strong plasticity\.  To the best of our knowledge, this work represents the first systematic exploration of RFT in visual continual learning, offering insights that we hope will inspire future research\.

## From Expert Knowledge to Optimization Modeling: Prototype\-Based Data Synthesis and Logical Reinforcement Learning

**Authors:** Bo Hu; Qingcan Kang; Qian Liu; Mingxuan Yuan

**ID:** 153007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OfaHY0TIwp>) | [PDF](<https://openreview.net/pdf?id=OfaHY0TIwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153007>)

Existing approaches to optimization modeling using large language models \(LLMs\) treat tasks through from\-scratch construction, generating variables, objectives, and constraints without leveraging reusable structural knowledge\. However, in real\-world scenarios, expert modelers typically begin by identifying the canonical type or core structure of a problem, followed by iterative refinements based on specific task requirements\. To incorporate this expert incremental logic, we propose a novel two\-stage framework\. In the first stage, we conduct Logic\-Anchored Data Synthesis starting from 17 canonical prototypes, preserving critical bottleneck constraints and generating synthetic problem–formulation pairs\. These pairs, together with the OR\-Instruct dataset, are used for supervised fine\-tuning \(SFT\) to initialize a policy\. Separately, for each generated problem, we produce multiple modeling trajectories that follow a prototype\-grounded order with variables preceding expressions\. These trajectories are ranked according to criteria of accuracy and efficiency, and subsequently used to train a Logical Reward Model \(LRM\)\. In the second stage, we introduce Logic\-Test\-Time Group Relative Policy Optimization \(Logic\-TGRPO\), which leverages the LRM during test\-time reinforcement learning to reward accurate prototype identification and disciplined structural adherence while penalizing illogical patterns\. Evaluated across seven benchmarks, our 8B parameter model achieves an average accuracy of 79\.9%, outperforming comparably scaled baselines and competing effectively with heavyweight multi\-agent systems with far fewer parameters\. Strong performance on out\-of\-distribution tasks confirms that the model exhibits genuine incremental reasoning rather than mere memorization\. Ablation studies further validate that both stages in our framework are essential\.

## Learning Planning Budgets in Real\-Time RL

**Authors:** Aneesh Muppidi; Firas Darwish; Dylan Cope; João Henriques; Jakob Foerster

**ID:** 151126 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=co1yOG9PHM>) | [PDF](<https://openreview.net/pdf?id=co1yOG9PHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151126>)

Deliberating takes time\. In real\-time settings, that time is not free\. Standard reinforcement learning \(RL\) sidesteps this as the environment waits indefinitely for the agent's decision\. Instead, we study real\-time RL environments where the environment progresses while waiting for the agent's action\. Building on prior real\-time formalizations, we introduce variable\-delay real\-time RL, where the agent chooses how long to deliberate at each decision point since the environment progresses\. For the planning agents we use, the right delay is state\-dependent, and naively planning how long to plan can paralyze the agent\. We instead approach this setting by training a lightweight gating policy on top of a planner to select state\-dependent planning budgets\. Across real\-time Pac\-Man, Tetris, Snake, Speed Hex, and Speed Go, our gating policy outperforms fixed\-budget and heuristic baselines, and transfers to a real\-time setup where the environment and agent run on two different GPUs\.

## S2T\-RLHF: Hierarchical Credit Assignment for Stable Preference\-Based RLHF

**Authors:** Wei Chen; Guanghui Zhu; Yafei Li; Limin Wang; Yihua Huang

**ID:** 149219 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s0T8MQbeRk>) | [PDF](<https://openreview.net/pdf?id=s0T8MQbeRk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149219>)

Reinforcement learning from human feedback \(RLHF\) with preference\-based reward models often exhibits unstable training dynamics\. A key contributing factor is that standard RLHF relies on a single sequence\-level scalar reward, which is propagated to token\-level policy updates and leaves credit assignment within a response inherently ambiguous\. Recent work has attempted to address this issue by refining rewards into denser token\-level supervision, often relying on the implicit assumption that finer\-grained credit assignment improves optimization\. We argue that this assumption is incomplete: when preference signals are noisy and only defined at the response level, overly fine\-grained reward refinement can amplify reward uncertainty and destabilize learning\. To address this problem, we propose a granularity\-aware principle for hierarchical credit assignment, emphasizing stability\-oriented reward design rather than maximal allocation precision\. Under this principle, sentences serve as a natural intermediate granularity, balancing semantic coherence with robustness to token\-level noise\. Guided by this view, we introduce S2T\-RLHF\. This sentence\-to\-token reward decomposition framework first allocates sequence\-level preference rewards across sentences and then applies bounded token\-level refinement within each sentence, without reward\-model retraining or token\-level supervision\. Experiments across multiple datasets and optimization settings show that S2T\-RLHF improves training stability and robustness while maintaining competitive preference alignment\.

## Addressing Exogenous Variability in Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Seongmin Kim; Woohyeon Byeon; Jiwon Jeon; Seungyul Han; Youngchul Sung

**ID:** 149019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tS7YfNAPfZ>) | [PDF](<https://openreview.net/pdf?id=tS7YfNAPfZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149019>)

Cooperative multi\-agent reinforcement learning \(MARL\) often fails under exogenous variability such as shifts in opponents or environment regimes that cannot be controlled by the team but alter the transition dynamics\. We formalize this challenge as Exogenous Dec\-POMDP \(ED\-POMDP\), which decomposes the global state into endogenous variables controllable by the team and exogenous variables beyond its  control\. This formulation exposes delayed influence: While actions do not directly determine exogenous transitions, they can shape them through induced changes in endogenous state\. Based on this, we propose LEICA, a CTDE\-compatible algorithm that learns history\-conditioned endogenous and exogenous context representations and shapes policy updates using influence\-weighted intrinsic rewards\.  Across SMAX benchmarks with opponent strategy shifts, LEICA consistently improves both training performance and generalization to unseen opponents' strategies over existing baselines, supporting the usefulness of influence\-weighted shaping under exogenous train\-test regime shifts\.

## Synsema: Syntax\-Guided Learning of Semantically Valid Programs

**Authors:** Levin Winter; Cong Li; Hao Sun; Zhendong Su

**ID:** 153941 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HR79HDRXwx>) | [PDF](<https://openreview.net/pdf?id=HR79HDRXwx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153941>)

Generating inputs for systems that process highly structured data, such as compilers, is difficult due to the dual of syntactic and semantic constraints\. Traditional approaches rely on manually crafted rules that require deep domain expertise and are difficult to maintain, while modern machine learning methods have to learn syntax and semantics simultaneously which is challenging\. We present Synsema, a novel approach that combines insights from both worlds by reformulating the generation of semantically valid programs as a syntax\-guided reinforcement learning task\. By guaranteeing syntactic validity through the grammar, the agent needs to only learn the language's semantic rules, sampling from a drastically reduced space\. We implement our approach in the context of Java and Rust which both exhibit strict semantic requirements, and train an agent to generate interesting and well\-formed programs using fine\-grained semantic feedback\. Applied to compiler testing, we systematically compare different syntax\-guided generation procedures with an unconstrained baseline and show that by restricting the sampling space, Synsema learns semantic rules efficiently\. While an average of only 0\.03% of programs generated by the baseline are semantically valid, Synsema produces a diverse set of programs with a 7\.29% success rate that trigger 2\.6x more compiler behaviors\. In addition, Synsema discovered 5 previously unknown bugs in production compilers, validating the practical impact of our approach\.

## Graph Topology Augmentation for Prioritized Sweeping in Non\-stationary Reinforcement Learning

**Authors:** Gia\-Hung Pham; Tuan Dam

**ID:** 149861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=midyPx9DqU>) | [PDF](<https://openreview.net/pdf?id=midyPx9DqU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149861>)

Prioritized Sweeping \(PS\) accelerates model\-based reinforcement learning by selecting backups according to residual magnitude\. In nonstationary reward settings, however, the canonical priority score is shortsighted: after a localized reward shift, residuals propagate only through realized backups, so bottlenecked or topologically distant state estimates may remain static under a limited replanning budget\. We introduce Graph Topology Augmentation for Prioritized Sweeping \(GTA\-PS\), a concrete instance of a broader topology\-augmentation principle for priority\-based planning\. GTA\-PS constructs a policy\-induced transition graph and augments the residual key with a mixing of regularized directed\-Laplacian potentials that diffuses residual information through forward and backward graph structure\. The topology weight is controlled by a scheduler based on the Second Largest Eigenvalue Modulus \(SLEM\), allowing the queue to adapt to the chain's mixing regime\. We prove that the forward potential coincides with discounted residual propagation at a canonical regularization parameter and show that GTA\-PS gives nonzero priority to states that standard PS can leave blocked after sparse reward shifts\. Tabular experiments on FourRooms and GARNET domains demonstrate improved replanning efficiency over standard PS under both exact DP and Dyna\-style host planners\.

## Efficient Diffusion Policy Fine Tuning with Latent Noise Representation Bridging

**Authors:** Yuanchu Liang; Yue Yang; An\-Chi He; Hanna Kurniawati

**ID:** 148980 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tjBAig6ZC4>) | [PDF](<https://openreview.net/pdf?id=tjBAig6ZC4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148980>)

Pre\-trained diffusion and flow policies have emerged as powerful backbones for robotics, yet adapting them to novel tasks via reinforcement learning \(RL\) remains computationally unstable, sample inefficient and lacks theoretical guarantees\. Prior approaches that fine\-tune the latent noise space bypass costly backpropagation through time but struggle with "noise aliasing," where determining the optimal noise input to the pre\-trained generative model requires repeatedly refitting separate Q\-value networks\. This paper resolves these challenges by introducing a novel theoretical framework demonstrating that imposing a linear structure on the environment induces a Latent Noise Linear Markov Decision Process \(LNL\-MDP\)\. By treating the pre\-trained model as a virtual dataset, our LNL\-MDP fine tune framework falls under the FineTuneRL theory with near\-optimal guarantee\. To translate this idealized theory into a practical methodology, we derive the Bridge Equation which eliminates the noise aliasing problem\. Leveraging this insight, we propose Latent Representation Bridging for Diffusion \(LARBRID\), an algorithm that efficiently learns the representation space from the LNL\-MDP and optimal noises to steer the pre\-trained model to act optimally in given tasks\. We demonstrate that LARBRID is exceptionally sample efficient, yielding up to $2\\text\{\-\}3\\times$ performance increases on challenging control problems across a diverse suite of robotic locomotion and manipulation tasks\.

## NASDAQ: Normalized Observation Space Dynamics\-Augmented Q\-Learning

**Authors:** Xinwei Liu; Junyuan Liang; Zicong Hong; Jianting Zhang; Wuhui Chen

**ID:** 151396 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=az1c9n9n9K>) | [PDF](<https://openreview.net/pdf?id=az1c9n9n9K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151396>)

Augmenting model\-free reinforcement learning \(RL\) with representations learned through observation dynamics prediction \(observation\-predictive RL\) can improve sample efficiency and performance, with minor modifications and limited additional computation\. However, this approach still struggles in challenging tasks with low\-dimensional observations\. In this paper, we identify a key factor behind this problem: unbalanced reconstruction losses across observation dimensions, where dimensions with larger value ranges dominate the loss\. This encourages the agent to neglect dimensions with relatively small ranges, leading to degraded performance\. To address this issue, we propose a novel normalization method tailored to online RL, which normalizes low\-dimensional observations and balances the resulting losses and gradients\. Beyond balancing reconstruction losses, observation normalization enables dynamics prediction to be performed in a normalized observation space, thereby providing a unified treatment of low\- and high\-dimensional inputs \(e\.g\., physical states and images\)\. Building on this idea, we further introduce Normalized Observation Space Dynamics\-Augmented Q\-learning \(NASDAQ\), a framework for observation\-predictive RL applicable across diverse domains\. NASDAQ learns state\-action representations by coupling value learning with two auxiliary tasks: short\-term value prediction and next \*normalized\* observation prediction\. Extensive experiments demonstrate that NASDAQ achieves competitive or superior performance compared with state\-of\-the\-art model\-based and self\-predictive RL methods, while requiring significantly less training wall\-time\.

## Provably Safe, Yet Performant Reinforcement Learning

**Authors:** Kai Yun; Zeyang Li; Navid Azizan

**ID:** 152935 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHVIRBgte1>) | [PDF](<https://openreview.net/pdf?id=PHVIRBgte1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152935>)

Safe reinforcement learning \(RL\) aims to learn policies that optimize rewards while satisfying constraints\. Predominant approaches rely on soft\-constrained policy optimization, which has achieved empirical success but does not provide formal safety guarantees for the learned policy\. In contrast, methods with strict guarantees typically rely on explicit certificate functions, whose construction requires the direct synthesis and verification of control\-invariant sets, a process that scales poorly with state dimension and often yields overly conservative behavior\. In this paper, we present the Provably Safe, yet Performant RL \(PSP\-RL\) framework, a novel two\-phase architecture for learning provably safe policies in a scalable manner, designed to overcome the key bottlenecks of prior methods\. Rather than explicitly computing invariant sets, PSP\-RL leverages a learned backup policy to forward\-integrate the system dynamics, generating an implicit control\-invariant set online\. In the first phase, the backup policy is trained with our proposed safe\-arrival value function, which characterizes the optimal backup policy for invariant\-set construction\. In the second phase, an RL policy is trained end\-to\-end through a differentiable projection layer that strictly enforces the safety guarantees induced by the learned backup policy\. By maximizing the volume of the implicit control\-invariant set in the first phase, the resulting PSP policy from the second phase is performant and scalable, while maintaining provable safety\. Crucially, PSP\-RL imposes no restrictions on the underlying RL algorithm and can be plugged into any existing training pipeline\. We establish theoretical guarantees for the proposed framework and evaluate it on robotic control tasks with state dimensions up to 10, a regime in which prior provably safe RL methods struggle or become impractical\.

## Equivariant Reinforcement Learning for Clifford Quantum Circuit Synthesis

**Authors:** Richie Yeung; Aleks Kissinger; Rob Cornish

**ID:** 150437 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i2rdzOU15l>) | [PDF](<https://openreview.net/pdf?id=i2rdzOU15l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150437>)

We consider the problem of synthesizing Clifford quantum circuits for devices with all\-to\-all qubit connectivity\. We approach this task as a reinforcement learning problem in which an agent learns to discover a sequence of elementary Clifford gates that reduces a given symplectic matrix representation of a Clifford circuit to the identity\. This formulation permits a simple learning curriculum based on random walks from the identity\. We introduce a novel neural network architecture that is equivariant to qubit relabelings of the symplectic matrix representation, and which is size\-agnostic, allowing a single learned policy to be applied across different qubit counts without circuit splicing or network reparameterization\. On six\-qubit Clifford circuits, the largest regime for which optimal references are available, our agent finds circuits within one two\-qubit gate of optimality in milliseconds per instance, and finds optimal circuits in 99\.2\\% of instances within seconds per instance\. After continued training on ten\-qubit instances, the agent scales to unseen Clifford tableaus with up to thirty qubits, including targets generated from circuits with over a thousand Clifford gates, where it achieves lower average two\-qubit gate counts than Qiskit's Aaronson\-Gottesman and greedy Clifford synthesizers\.

## Deep Double Q\-learning

**Authors:** Prabhat Nagarajan; Martha White; Marlos C\. Machado

**ID:** 153820 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IT8wbomtEn>) | [PDF](<https://openreview.net/pdf?id=IT8wbomtEn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153820>)

Double Q\-learning is a classical control algorithm that mitigates the maximization bias of Q\-learning\. To do so, it explicitly trains two independent action\-value functions and uses them to decouple action\-selection and action\-evaluation when computing bootstrap targets\. Double DQN adapts target bootstrap decoupling to deep reinforcement learning \(RL\), but explicitly trains only a single action\-value function and does not fully decouple its estimators\. Consequently, the two estimators remain correlated, and overestimation persists\. In this paper, we introduce Deep Double Q\-learning \(DDQL\), a deep RL algorithm that explicitly trains two Q\-functions through Double Q\-learning\.  DDQL stabilizes training through a combination of techniques, including lower replay ratios, longer target network update intervals, and shared layers\. Across 57 Atari 2600 games, DDQL improves aggregate performance over Double DQN, outperforming it on 47 games while further reducing overestimation\. In addition, we study key design choices when adapting Double Q\-learning to deep RL, including the network architecture, replay ratio, and minibatch sampling strategies\.

## Cross\-Question Reliable Reinforcement Learning

**Authors:** Hector G\. Rodriguez; Marcus Rohrbach

**ID:** 155202 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7WpdfgWglP>) | [PDF](<https://openreview.net/pdf?id=7WpdfgWglP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155202>)

AI systems operating near the limits of their capabilities can maximize utility while minimizing the risk of error by abstaining or deferring questions they are not confident about to a human or a stronger model\. Recently, large language models \(LLMs\) have been post\-trained to estimate confidence in their own answers\. To achieve this, methods reinforce confidence scores based on the correctness signal to each question\-answer pair \\emph\{individually\}, with rewards that encourage assigning confidence 1 to correct answers and 0 to incorrect answers\. However, estimating confidence scores is useful in that it enables selecting only the most confident answers, to maximize the share of solved questions while accommodating the user's risk tolerance\. Assigning confidence 1 to correct answers and 0 to incorrect ones is theoretically optimal, but unattainable in practice and detrimental for selective prediction with a non\-zero risk tolerance: confidences pushed to 0 and 1 carry no information about how answers compare to one another\. We therefore introduce \\ours \(Cross\-question Abstention Reward Estimation\), which computes rewards over a set of question\-answer pairs: At each of several risk tolerances, the confidences across the set induce an abstention threshold, and each confidence is rewarded for lying on the correct side of it\. Since the threshold itself comes from the set, every verbalized confidence is reinforced relative to other questions' confidence, not against its own binary correctness label\. On math, \\ours increases the coverage at 5\\% risk \(C@5\) across MATH\-500, GSM8K, and Big\-Math\-Digits from 0\.8\\% to 42\.4\\%, compared to existing pointwise correctness\-matching rewards\. When trained on multi\-hop Wikipedia QA from HotpotQA, \\ours improves C@5 in out\-of\-distribution general\-knowledge, reasoning, and math benchmarks \(including CommonsenseQA, GPQA, SimpleQA, and TriviaQA\) from 9\.9\\% to 23\.6\\%\.

## Dr\. MAS: Stable Reinforcement Learning for Multi\-Agent LLM Systems

**Authors:** Lang Feng; Longtao Zheng; Shuo He; Fuxiang Zhang; Bo An

**ID:** 151327 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLgNMclTCO>) | [PDF](<https://openreview.net/pdf?id=bLgNMclTCO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151327>)

Multi\-agent LLM systems improve reasoning and tool use via role specialization, yet reinforcement learning \(RL\) post\-training for such systems remains unstable and underexplored\. We theoretically pinpoint a key source of instability when extending group\-based RL to cooperative multi\-agent LLM systems: under GRPO\-style optimization, a global normalization baseline can mismatch heterogeneous agents' reward distributions, inducing gradient\-norm instability\. Based on this finding, we propose Dr\. MAS, a simple and stable RL recipe for cooperative multi\-agent LLM systems\. Algorithmically, Dr\. MAS normalizes advantages per agent using each agent's own reward statistics, which calibrates gradient scales and dramatically stabilizes the training\. Systemically, Dr\. MAS provides an end\-to\-end multi\-agent RL framework with scalable orchestration, flexible per\-agent LLM serving and optimization, and shared resource scheduling of actor backends\. Unlike single\-actor frameworks such as veRL, Dr\. MAS natively supports multiple heterogeneous LLMs over a unified GPU pool\. Lifecycle\-aware backend management and dynamic dispatch release inactive models' GPU memory and schedule active agents on demand, enabling hardware\-efficient co\-training\. We evaluate Dr\. MAS on multi\-agent math reasoning and multi\-turn search with Qwen2\.5 and Qwen3\. Dr\. MAS achieves clear gains over vanilla GRPO \(e\.g\., \+5\.6\\% avg@16 and \+4\.6\\% pass@16 on math, and \+15\.2\\% avg@16 and \+13\.1\\% pass@16 on search\) while largely eliminating gradient spikes\. It also remains highly effective under heterogeneous agent\-model assignments while improving efficiency\. Code is available at https://anonymous\.4open\.science/r/DrMAS\-0787\.

## Wayfinder: Adaptive Resource Routing from Agent Citations

**Authors:** Miguel Romero; George Karypis

**ID:** 148786 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v4g06KBw8G>) | [PDF](<https://openreview.net/pdf?id=v4g06KBw8G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148786>)

To act effectively, agents must seek information across heterogeneous applications including chat channels, issue trackers, email, knowledge bases, and code repositories, yet resource routing in such environments is inherently unknown to model providers: where relevant information resides varies across users and organizations and cannot be enumerated at training time\. Existing routing approaches are typically trained offline under fixed assumptions or rely on static heuristics, limiting their ability to transfer across environments without target\-specific supervision\. We introduce \\method, a routing policy trained via reinforcement learning from interaction feedback that enables adaptive resource selection while treating each resource as a black\-box retriever\. \\method leverages an interaction\-derived, citation\-gated memory to prioritize candidate resources for downstream retrieval, while allowing the primary agent to expand its search when needed\. We evaluate \\method in controlled federated environments spanning both intra\-corpus partitions \(NFCorpus, FEVER\) and cross\-corpus heterogeneity \(Tech Startup\) and compare against supervised and zero\-shot routing baselines\. Interaction\-driven adaptation outperforms all baselines on the intra\-corpus benchmarks, where description\-based discrimination is weak, and ties a fully supervised classifier on Tech Startup at matched top\-$1$ output without using any target\-environment labels\.

## Structural Entropy Optimized Communication for Multi\-Agent Reinforcement Learning

**Authors:** Wei Du; Benyu Wu; Wei Guo; Zhongmin Yan; Guoxian Yu; Lizhen Cui

**ID:** 149682 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oE5vpNzODi>) | [PDF](<https://openreview.net/pdf?id=oE5vpNzODi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149682>)

Communication learning is crucial for complex coordination in multi\-agent reinforcement learning \(MARL\), yet existing methods often struggle with a fundamental dilemma between communication overhead and task performance\. Typically designed without theoretical guidance, they produce unstructured and redundant communication graphs, limiting both efficiency and scalability\. To address this, we propose Structural Entropy Optimized Communication \(SEOC\), a framework that directly optimizes inter\-agent communication topology using the information\-theoretic principle of Structural Entropy\. SEOC guides the network to self\-organize into a low\-entropy state with sparse connectivity and distinct communities, enabling efficient and interpretable decentralized coordination\. This is achieved through a unified mechanism that jointly enforces structural order and semantic conciseness, reducing topological complexity via a differentiable structural entropy loss while compressing messages with a node information bottleneck\. Experiments on benchmarks such as the StarCraft Multi\-Agent Challenge \(SMACv2\) demonstrate that SEOC significantly outperforms state\-of\-the\-art methods\.

## Why Copy Others? Insights into Social Learning from Multi\-Agent Reinforcement Learning

**Authors:** Yancheng Liang; Shakti Senthil; Daphne Chen; Simon Du; Natasha Jaques

**ID:** 154639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C75XbOudqL>) | [PDF](<https://openreview.net/pdf?id=C75XbOudqL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154639>)

When is it better to rely on information from others rather than experiment to discover the answer yourself? Social learning refers to the ability of humans to learn by observing, imitating, or interacting with others\. In this work, we use multi\-agent reinforcement learning \(MARL\) to investigate the conditions under which social learning achieves higher returns and improved learning efficiency relative to individual learning\. We begin with a theoretical analysis and discover that, under coordinated group exploration and low skill transmission costs, social learning achieves lower sample complexity than individual learning\. Motivated by this insight, we propose Selective Social Learning \(SSL\), a novel social learning algorithm that reduces the cost of skill transmission, and we design experiments across three MARL environments to test these predictions\. Empirical results show that SSL outperforms baselines under conditions consistent with our theory\. Surprisingly, we also find that in non\-stationary environments with sparse rewards, which mirror the real world, social learning can emerge in standard MARL without an explicitly designed social learning mechanism\. This suggests that the apparent absence of social learning in standard RL stems from limitations in training environment design rather than in RL itself\. We therefore call for future MARL training environments to inherently incorporate sparsity and non\-stationarity, enabling agents to naturally develop social\-learning behaviors that transfer to complex real\-world settings\.

## Implicit Goal Conditioning via Value Disaggregation

**Authors:** Shashwat Saxena; Mehul Goel; Sreyas Venkataraman; Sarvesh Patil; Max Simchowitz

**ID:** 154628 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CB1gJdJWSh>) | [PDF](<https://openreview.net/pdf?id=CB1gJdJWSh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154628>)

Long\-horizon tasks are an important challenge for modern AI and robotics, yet pose a challenge for reinforcement learning\. A historically popular approach has been to decompose a task into subgoals, and learn a subgoal\-conditioned policy to execute each subtask in sequence\. We introduce an alternative called Value Disaggregation \(VaDar\), which trains a single subgoal\-independent policy to maximize a linear combination of per\-subgoal critic values\. Because subgoal information is needed only at training\-time, VaDar removes the need for possibly costly or cumbersome subgoal\-selection during policy deployment\. Moreover, through careful experiments, we show that VaDar \(1\) is always competitive with, and frequently outperforms, goal\-conditioning and other natural baselines and \(2\) succeeds on tasks with non\-sequential goal structure and multiple optimization objectives\. In particular, VaDar is the first algorithm to solve challenging, long\-horizon tasks in the Robocasa suite, even when starting from a policy pretrained from behavior cloning with near\-zero initial task success\. Taken together, VaDar's success suggests that subgoal information benefits reinforcement learning by enhancing the efficacy of critic learning, whereas policy goal\-conditioning is often unnecessary\.

## Freshness\-Gated Imagination: Step\-Level Trust for Latent World Models

**Authors:** Chunqi Guo

**ID:** 150248 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jdqdKenIoy>) | [PDF](<https://openreview.net/pdf?id=jdqdKenIoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150248>)

Model\-based reinforcement learning agents optimize policies by backpropagating through imagined latent trajectories\. However, model reliability can vary substantially within a single rollout: some imagined steps produce useful gradients while others introduce harmful bias\. Existing adaptive methods address this at either the rollout level \(adaptive horizons, priority replay\) or the per\-step level \(gradient truncation\); their interaction remains unexplored\. In this paper, Freshness\-Gated Imagination \(FGI\), a lightweight trust layer for latent world models that combines rollout\-level adaptation with per\-step entropy\-based soft gating at zero additional forward\-pass cost, is proposed\. Through systematic factorial ablation on Crafter \(10 seeds\), a superadditive synergy is uncovered: per\-step gating alone harms performance \(−6\.2%\), rollout\-level adaptation alone is ineffective \(\+0\.6%\), while their combination achieves \+14\.8% improvement in terms of the Crafter geometric\-mean score \(Wilcoxon signed\-rank p=0\.032, Cohen's d=0\.74\)\. A bias\-variance analysis shows that this synergy arises because rollout\-level priority replay improves the calibration of the entropy signal on which the per\-step gate depends\. On DMC continuous control tasks, FGI preserves baseline performance, confirming no\-harm in well\-modeled environments\. Code is available at https://anonymous\.4open\.science/r/FGI\-89D9\.

## Understanding Goal Generalisation in Sequential Reinforcement Learning

**Authors:** Jason Brown; Edward Young

**ID:** 150898 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ebbWZdCWlR>) | [PDF](<https://openreview.net/pdf?id=ebbWZdCWlR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150898>)

Reinforcement learning agents often exhibit unintended goal\-directed behaviour outside their training distribution, but we currently lack a principled understanding of how such agents will generalise to novel environments based on their training history\. We address this gap for agents trained sequentially on one or more tasks\. We study over 100 sequential training pipelines, evaluating behaviour across over 250 out\-of\-distribution environments\. We find that salient features drive generalisation, and that goals learnt early in training can persist and influence those acquired later\. To explain these phenomena, we introduce \_latent policy gradients\_, a method that predicts what out\-of\-distribution behaviour a training pipeline will likely induce\. Our method simulates the evolution of low\-dimensional latent variables during training according to what would achieve high reward on the training objective with respect to a simple model of how the latent variables map to behaviour\. It achieves strong predictive accuracy, generalises to unseen types of training pipeline, and is interpretable\. Our findings demonstrate that while out\-of\-distribution RL agent behaviour is dependent on the whole training pipeline, this dependence has an underlying structure we can capture, laying groundwork for understanding goal generalisation from a developmental perspective\.

## Designing Effective Monitor\-Based Interventions for Mitigating Reward Hacking During RL

**Authors:** Aria Wong; Joshua Engels; Neel Nanda

**ID:** 153178 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NERzW49Ahm>) | [PDF](<https://openreview.net/pdf?id=NERzW49Ahm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153178>)

Reinforcement learning \(RL\) rewards are notoriously difficult to design and control, often leading to the model learning unintended behaviors such as eward hacking\. One potential solution is to monitor for reward hacking and penalize it when detected; however, training against a monitor could lead to evasive behavior, and our general understanding of how to apply monitors effectively during training is limited\. To study how best to use monitors to mitigate reward hacking, we introduce and open source three realistic environments where Qwen3\-4B reward hacks: a coding environment hackable via test overwriting, a medical chat environment hackable via sycophancy, and a biography generation environment hackable via hallucination\. We first focus on the coding environment, where we find that: \(1\) models can learn to evade highly accurate monitors by exploiting systemic flaws in probes and LLM judges; \(2\) monitors that leak more learning signal during RL suppress reward hacking but are more often evaded; and \(3\) including easier problems in training can decrease reward hacking\. We apply our findings to build better reward hacking monitors for the medical chat and biography generation environments that improve upon naive baselines to reduce reward hacking rates across seeds from 70\-100\\% to 0\\%\. Our results demonstrate that our takeaways translate to new settings and that better monitor intervention designs are possible\.

## Anatomy of Off\-Policy Policy Gradient: Importance Sampling, KL Regularization, and Baselines

**Authors:** Haoqun Cao; Yurun Yuan; Tengyang Xie

**ID:** 155331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6QcGiRb4iq>) | [PDF](<https://openreview.net/pdf?id=6QcGiRb4iq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155331>)

Reinforcement learning has become a central tool for large language model \(LLM\) post\-training, where policy gradient methods are routinely deployed off\-policy, even though vanilla policy gradient assumes on\-policy sampling\. We study when such off\-policy deployment is justified, and what roles its core ingredients, including importance sampling, KL regularization, and baselines, play in correcting the resulting distribution shift\. We show that for a general class of off\-policy policy gradient objectives, only two corrections preserve the optimal policy as a stationary point: trajectory\-level importance weighting, which suffers from the well\-known curse of horizon, and KL regularization paired with a grouped\-mean baseline\. Focusing on the KL route, we identify it with the group\-relative policy gradient \(GRPG\) update, establish an equivalence to a trajectory\-level Bellman residual minimization objective, and obtain a finite\-sample regret bound under all\-policy coverage\. This also gives a theoretical account of the empirically successful GRPO objective\. We further uncover a hidden role of baselines in the off\-policy setting: a constant shift in the baseline implements pessimism, the standard remedy in offline RL for partial data coverage\. We instantiate this via the asymmetric REINFORCE objective, and connect it to the game\-theoretic offline RL framework, showing a regret bound with single\-policy coverage\.  Together, these results offer a unified theoretical view of off\-policy policy gradient in LLM post\-training and connect it to classical ideas in offline RL\.

## Reward Budgeting Reduces Premature Convergence in Reinforcement Learning for LLM Reasoning

**Authors:** Mengni Jia; Mengyu Zhou; xiaoxi jiang; Guanjun Jiang

**ID:** 152882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PgTu2nTEh7>) | [PDF](<https://openreview.net/pdf?id=PgTu2nTEh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152882>)

RL often plateaus early: policies sharpen quickly, and further training yields little gain despite remaining model\- and data\-capacity\.  Entropy is recently used to combat this plateau, but its promotion alone is not a sufficient intervention target in the settings we study\. By analyzing RL's dynamics through the optimal policy, we instead identify a sharpness factor $\\kappa$ as a more effective alternative\. We then introduce a plug\-in reward\-budget mechanism, which allocates a fixed total reward budget to each prompt and distributes it among correct rollouts\. Theoretically, this induces a more regulated $\\kappa$\-trajectory that deviates from many RL methods, and its updates are equivalent to optimizing a concave objective, approximately $\\mathbb\{E\}\(\\log R\)$\.  Empirically, our method achieves significant gains on Qwen3\-8B and Llama3\.2\-3B\-Instruct \(up to \+12\.50 on AMC23 and \+10\.00 on AIME24 \\&amp; AIME25\)\. Together, these results suggest that regulating algorithm\-induced sharpening is more effective for mitigating premature convergence than directly preserving entropy\.

## Tropical Gaussian Anticoncentration: Settling Optimal Instance\-Dependent Bounds for Online Learning in Extensive\-Form Games

**Authors:** Ashkan Soleymani; Zhiyuan Fan; Lillian Ratliff; Patrick Jaillet; Gabriele Farina

**ID:** 156030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=11bmxkuuog>) | [PDF](<https://openreview.net/pdf?id=11bmxkuuog>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156030>)

We study the minimax regret of full\-information online decision making in extensive\-form games\. For prediction with expert advice, the optimal regret is $\\Theta\(\\sqrt\{T\\log K\}\)$, where $K$ is the number of experts, or equivalently, the number of normal\-form actions\. For treeplex strategy spaces, existing efficient algorithms, including KOMWU and online mirror descent with the weight\-one dilated entropy regularizer, achieve regret $\\mathcal\{O\}\(\\sqrt\{T\\log\|\\mathcal\{V\}\|\}\)$, where $\\mathcal\{V\}$ is the set of reduced normal\-form strategies\. We prove that this logarithmic dependence is minimax optimal in the worst\-case full\-information reward model\. The main difficulty is that pure plans in a treeplex are not independent experts: their rewards are correlated through the recursive structure of decisions and observations\. To capture this correlation, we introduce tropical Gaussian formulae, recursive Gaussian expressions built from maxima and normalized sums which preserve the variance\. The index count of such a formula matches the number of reduced normal\-form continuation plans in the corresponding subtree\. Our main analytic result shows that every log\-balanced tropical Gaussian formula with index count $N$ has Gaussian width $\\Omega\(\\sqrt\{\\log N\}\)$\.  While direct approach struggles to recover this lower bound, our proof uses a spherical entropy profile to measure scale\-dependent separation among the Gaussian directions, and then applies Tur\\'an's theorem and Sudakov minoration to obtain the width lower bound\. Applying this result to treeplexes gives an oblivious hard distribution with valid transition outcome and Rademacher terminal rewards, establishing a regret lower bound of $\\Omega\(\\sqrt\{T\\log\|\\mathcal\{V\}\|\}\)$\. This matches known upper bounds up to universal constants and shows that the DilEnt/KOMWU dependence on the reduced normal\-form complexity is unavoidable\.

## GAE Falls Short in Imperfect\-Information Self\-Play Reinforcement Learning

**Authors:** Zhiyuan Fan; Gabriele Farina

**ID:** 154242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCbPPpvjv6>) | [PDF](<https://openreview.net/pdf?id=FCbPPpvjv6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154242>)

Competitive multi\-agent reinforcement learning in imperfect\-information games requires agents to act under partial observability and against adversarial opponents, necessitating stochastic policies\. While self\-play reinforcement learning with Proximal Policy Optimization \(PPO\) has achieved strong empirical success, its standard advantage estimator, generalized advantage estimation, suffers from additional variance due to the sampling of stochastic future actions\. This variance is amplified in equilibrium self\-play because of the stochastic nature of the equilibrium policy and persists even when the critic is exact\. We address this bottleneck by introducing $Q$\-boosting, a variance\-reduced advantage estimator based on a centralized action\-value critic, and propose Variance\-Reduced Policy Optimization \(VRPO\), incorporating this new estimator\. The algorithm replaces sampled multi\-step backups with a multi\-step Expected SARSA$\(\\lambda\)$ trace, computing policy expectations at each step to average out action\-sampling noise, while retaining PPO's clipped objective and on\-policy actor updates\. Empirically, VRPO consistently achieves strong performance from mid\-sized to large\-scale games including Dou Dizhu and Heads\-Up No\-Limit Texas Hold’em\.

## Control Reinforcement Learning: Token\-Level Mechanistic Analysis via Learned SAE Feature Steering

**Authors:** Seonglae Cho; Zekun Wu; Adriano Koshiyama

**ID:** 151630 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z8Ogf2OPQp>) | [PDF](<https://openreview.net/pdf?id=Z8Ogf2OPQp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151630>)

Sparse autoencoders \(SAEs\) decompose language model activations into interpretable features, primitives for mechanistic circuit analysis\. Yet existing methods identify task\-specific circuits via attribution or apply fixed\-direction steering, but learn no task\-reward\-optimized policy for per\-token feature amplification\. We formulate token\-level feature intervention as a POMDP over the LLM's layer\-causal computation\. Control Reinforcement Learning \(CRL\) trains a policy in this POMDP that selects an SAE feature to amplify at each generation step, yielding per\-token intervention traces that expose which features drive task behavior\. Adaptive Feature Masking encourages diverse feature discovery while preserving single\-feature attribution\. The framework provides branch point tracking \(tokens where feature choice changes outcomes\), critic trajectory analysis \(separating policy from value estimation errors\), and layer\-wise comparison along the residual stream hierarchy\. Cross\-task transfer is asymmetric \(MMLU features harm GSM8K but not vice versa; HarmBench helps XSTest\), consistent with partial task computation overlap rather than dataset\-specific shortcuts: task\-conditional attribution does not require transfer invariance\. On Gemma\-2 2B and LLaMA\-3\.1 8B across MMLU, BBQ, GSM8K, HarmBench, and XSTest, CRL provides per\-token intervention traces and serves as an SAE quality diagnostic alongside task\-accuracy gains\. Learned feature steering thus serves as a layer\-specific diagnostic complementing activation\-based SAE analysis\.

## Events as Triggers for Behavioral Diversity in Multi\-Agent Reinforcement Learning

**Authors:** Hannes M Büchi; Manon Flageat; Eduardo Sebastián; Amanda Prorok

**ID:** 153421 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LSRtfZfGAE>) | [PDF](<https://openreview.net/pdf?id=LSRtfZfGAE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153421>)

Effective multi\-agent cooperation requires agents to adopt diverse behaviors as task conditions evolve—and to do so at the right moment\. Yet, current Multi\-Agent Reinforcement Learning \(MARL\) frameworks that facilitate this diversity are still limited by the fact that they bind fixed behaviors to fixed agent identities\. Consequently, they are ill\-equipped for tasks where agents need to take on different roles at very specific moments in time\. We argue that, to define these behavioral transitions, the missing ingredient is events \. Events are changes in the state of the system that induce qualitative changes in the task\. Based on this view, we introduce a framework that decouples agent identity from behavior, capturing a continuous manifold from which agents instantiate their behaviors in response to events\. This framework is based on two elements\. First, to build an expressive behavior manifold, we introduce Neural Manifold Diversity \(NMD\), a formal distance metric that remains well\-defined when behaviors are transient and agent\-agnostic\. Second, we use an event\-based hypernetwork that generates Low\-Rank Adaptation \(LoRA\) modules over a shared team policy, enabling on\-the\-fly agent\-policy reconfiguration in response to events\. We prove that this construction ensures that diversity does not interfere with reward maximization by design\. Empirical results demonstrate that our framework outperforms established baselines across benchmarks while exhibiting zero\-shot generalization, and being the only method that solves tasks requiring sequential behavior reassignment\.

## Dyna\-Style Safety Augmented Reinforcement Learning: Staying Safe in the Face of Uncertainty

**Authors:** Artur Eisele; Bernd Frauenknecht; Friedrich Solowjow; Sebastian Trimpe

**ID:** 149611 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oofzDJRuP8>) | [PDF](<https://openreview.net/pdf?id=oofzDJRuP8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149611>)

Safety is a key problem in reinforcement learning, especially during exploration\. While safety filters are promising to address this issue, they are ill\-suited for high\-dimensional systems with unknown dynamics\. We propose Dyna\-style Safety Augmented Reinforcement Learning \(Dyna\-SAuR\), a novel algorithm that learns a control policy as well as a scalable safety filter requiring minimal domain knowledge by leveraging a learned uncertainty\-aware dynamics model\. A novel filter learning formulation enforces to avoid failures and areas of high model uncertainty\. As joint deployment of the control policy and filter allow to safely collect data and improve the dynamics model, certain areas grow and filter conservatism decreases over time\. Dyna\-SAuR reduces failures compared to state\-of\-the\-art methods by two orders of magnitude on goal\-reaching CartPole and MuJoCo Walker\.

## Safe Offline Reinforcement Learning using Behavior Regularisation and Latent Feasibility\-Guidance

**Authors:** Mahesh Keswani; Parth Bhardwaj; Ankur Kumar; Raunak Pushpak Bhattacharyya

**ID:** 155682 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3k39ZE89zf>) | [PDF](<https://openreview.net/pdf?id=3k39ZE89zf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155682>)

Offline safe reinforcement learning aims to maximize cumulative reward while satisfying safety constraints using only static datasets\. Recent approaches leverage latent variable models to capture the behavior policy distribution, enabling efficient policy extraction under limited data\. However, existing latent\-space methods typically rely on soft constraints, which allow constraint violations in expectation and may be unsuitable for safety\-critical settings\. In addition, these methods often employ Advantage\-Weighted Regression \(AWR\) for policy extraction, which exhibits exponential sensitivity to out\-of\-distribution critic bias, leading to high variance in the policy gradient estimate\. To address these limitations, we propose Feasibility\-Optimized Conditional Actor Learning \(FOCAL\)\. FOCAL enforces state\-wise hard safety constraints by integrating reachability\-based feasibility constraints directly into the Conditional Variational Autoencoder\. To overcome the instability associated with AWR, we introduce a feasibility\-partitioned, behavior\-regularized objective that utilizes stable, first\-order gradients to structurally decouple reward maximization in feasible regions from constraint violation minimization in infeasible regions\. Finally, an adaptive test\-time inference dynamically modulates latent sampling variance based on state\-wise feasibility to ensure safe policy execution under out\-of\-distribution states\. Theoretical analysis demonstrates that FOCAL circumvents the exponential variance in policy gradient estimates associated with AWR under critic errors, while providing formal bounds on policy deviation from the behavioral dataset\. Empirically, on the DSRL benchmark, FOCAL satisfies safety constraints while achieving competitive or higher returns compared to state\-of\-the\-art methods, all while maintaining efficient single\-step inference\.

## Learning to Drive in New Cities Without Human Demonstrations

**Authors:** Zilin Wang; Saeed Rahmani; Daphne Cornelisse; Bidipta Sarkar; Alexander D\. Goldie; Jakob Foerster; Shimon Whiteson

**ID:** 152060 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VoQnv8zzSL>) | [PDF](<https://openreview.net/pdf?id=VoQnv8zzSL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152060>)

While autonomous vehicles have achieved reliable performance within specific operating regions, their deployment to new cities remains costly and slow\. A key bottleneck is the need to collect many human demonstration trajectories when adapting driving policies to new cities that differ from those seen in training in terms of road geometry, traffic rules, and interaction patterns\. In this paper, we show that self\-play multi\-agent reinforcement learning can adapt a driving policy to a substantially different target city using only the map and meta\-information, without requiring any human demonstrations from that city\. We introduce NO data M ap\-based self\-play for A utonomous D riving \(NOMAD\), which enables policy adaptation in a simulator constructed based on the target\-city map\. Using a simple reward function, NOMAD substantially improves both task success rate and trajectory realism in target cities, demonstrating an effective and scalable alternative to data\-intensive city\-transfer methods\.

## State\-Action Selection in General Stochastic Games under Regularized Policy Gradient Methods

**Authors:** Omar Abbadi; Rida Laraki; Panayotis Mertikopoulos

**ID:** 151718 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbFEhzpUw7>) | [PDF](<https://openreview.net/pdf?id=YbFEhzpUw7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151718>)

We study a general class of regularized policy gradient methods for episodic learning in general\-sum stochastic games, with the aim of describing the long\-run behavior of the induced policy iterates\. In this challenging setting, learning even the simplest pointwise solution concepts is known to be intractable\. This leads us to switch our focus to less restrictive \*setwise\* solution concepts: rather than only asking whether the iterates converge to a specific policy, we ask which \*sets of policies\* are selected by the learning dynamics in the long\-run\. In one\-shot games, this setwise perspective admits a crisp characterization: a product set of pure strategies is asymptotically stable if and only if it is \*closed under better replies\* \(club\)\. We show that the direct statewise analogue of this principle \*fails\* outright in stochastic games because actions affect not only current rewards but also the future evolution of the game\. To restore this principle in a transition\-aware form, we introduce $Q$\-\*club\* sets, namely state\-action sets in which every \*allowed\* action has a strict $Q$\-value advantage over every \*excluded\* action, thereby providing a setwise generalization of \*strict Nash policies\*\. We then prove that $Q$\-club sets are stochastically stable and attracting under the learning dynamics, even in the presence of noise and uncertainty\. Finally, we establish local convergence rates to $Q$\-club sets governed by the regularizer; in particular, entropic regularization yields exponential convergence, while Euclidean regularization yields finite\-time convergence\.

## Heterogeneous Agent Collaborative Reinforcement Learning

**Authors:** Zhixia Zhang; Zixuan Huang; Gonxun Li; Huaiyang Wang; Chengyi Yuan; Xin Xia; deqing wang; Fuzhen Zhuang; Shuai Ma; Ning Ding; Yaodong Yang; Yikun Ban

**ID:** 148552 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x2ON3LiaLg>) | [PDF](<https://openreview.net/pdf?id=x2ON3LiaLg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148552>)

We introduce Heterogeneous Agent Collaborative Reinforcement Learning \(HACRL\), a new Reinforcement Learning from Verifiable Reward \(RLVR\) problem that addresses the inefficiencies of isolated multi\-agent on\-policy optimization\. HACRL enables collaborative optimization with independent execution: heterogeneous agents share verified rollouts during training to mutually improve, while operating independently at inference time\. Unlike LLM\-based multi\-agent reinforcement learning \(MARL\), HACRL does not require coordinated deployment, and unlike on\-/off\-policy distillation, it enables bidirectional mutual learning among heterogeneous agents rather than one\-directional homogeneous teacher\-to\-student transfer\. Building on this problem, we propose HACPO, a collaborative RL algorithm that enables principled rollout sharing to maximize sample utilization and cross\-agent knowledge transfer\. To mitigate capability discrepancies and policy distribution shifts, HACPO introduces four tailored mechanisms with theoretical guarantees on unbiased advantage estimation\. Extensive experiments across diverse heterogeneous model combinations and reasoning benchmarks show that HACPO consistently improves all participating agents, outperforming GSPO with double rollouts by an average of 3\.6% while using only half the rollout cost\.

## K\-prop: Deep Online Learning by Backpropagating Temporal Kernels

**Authors:** Bingkun Liu; Paul Haider; Federico Benitez; Mihai A\. Petrovici; Walter Senn

**ID:** 153851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IGznB40U3i>) | [PDF](<https://openreview.net/pdf?id=IGznB40U3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153851>)

Self\-recurrence represents an important component for temporal processing in neural networks, both artificial and biological, where it appears naturally in the form of leaky integration\. However, due to the complex temporal dependencies of the gradient, an efficient and effective method of online training is still lacking\. Here we propose K\-prop, a novel online learning method for leaky neural networks\. It dramatically reduces the computational and memory cost of real time recurrent learning \(RTRL\) by propagating kernel gains\. K\-prop also outperforms existing RTRL approximations and achieves performance comparable to backpropagation through time in sequence learning, classification, and reinforcement learning tasks\. We further analyze how its sole approximation affects gradient quality and identify conditions under which K\-prop remains accurate and effective\.

## Joint Adaptive Neighborhood Constraint for Offline Multi\-Agent Reinforcement Learning

**Authors:** Xiancheng Gao; Mingxiao Feng; Lin Liu; Yuanrui Duan; Yufeng Shi; Wengang Zhou; Houqiang Li

**ID:** 149793 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nHitPSOoEp>) | [PDF](<https://openreview.net/pdf?id=nHitPSOoEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149793>)

Offline reinforcement learning suffers from distributional shift and extrapolation errors\. These issues are particularly severe in multi\-agent settings\. As the number of agents increases, the joint action space grows exponentially while agent behaviors become highly coupled\. Consequently, even if individual actions remain within the data distribution, their combination may still result in out\-of\-distribution \(OOD\) joint actions\. Directly extending single\-agent constraints to multi\-agent settings is difficult, as they fail to effectively constrain joint actions\. This often results in poor coordination or excessive conservatism\. To bridge this gap, we propose the joint adaptive neighborhood constraint \(JANC\), which explicitly constructs controlled neighborhoods in the joint action space to suppress extrapolation while preserving reliable generalization\. Moreover, JANC adaptively scales neighborhood radii based on joint advantages to align generalization with value structures\. In practice, our method first performs adaptive neighborhood Q learning to explore high\-value behaviors and then conducts value and policy learning based on the refined actions\. Experiments on offline benchmarks, including multi\-agent Mujoco and StarCraft II, show that JANC outperforms state\-of\-the\-art methods on the majority of tasks in complex cooperative scenarios\. We will release our source code to the public\.

## ToS: Tree\-of\-Skill Reinforcement Learning driven by Behavior Tree for Long\-Horizon Manipulation

**Authors:** Xinglin Chen; Yishuai Cai; Yunxin Mao; Minglong Li; Kefei Zhu; Wenjing Yang; Yaodong Yang; Ji Wang; Yuanpei Chen

**ID:** 151185 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKguVoE2ry>) | [PDF](<https://openreview.net/pdf?id=cKguVoE2ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151185>)

Behavior Trees \(BTs\) are known for their modular nature, making them a promising control architecture for long\-horizon manipulation tasks\. BT planning leverages high\-level symbolic behavior models to effectively generate reliable BTs\. However, low\-level skill design often involves dependencies between skills that are difficult to model or reason about using symbols, such as precise object poses\. Existing skill chaining methods typically focus on connecting a predefined sequence of skills but struggle to handle multiple possible subsequent branches\. This paper proposes Tree\-of\-Skill \(ToS\), the first neural\-symbolic framework for dynamic skill chaining in BT\-driven Reinforcement Learning \(RL\)\. In ToS, subsequent skills are predicted using behavior models during BT execution, and the current skill is dynamically chained to its successor via the goal generated by the successor’s guiding network\. Guidance is applied when two adjacent skills have dependencies, which may be explicitly modeled or implicit\. We introduce the goal mask for skills to support heterogeneous goal spaces or to enable execute without a successor\-provided goal\. The training process of ToS includes goal\-conditioned skill learning, guiding network learning, and optional task\-specific fine\-tuning\. Experiments are conducted on a robot equipped with two Realman RM75\-6F arms and two PsiBot G0\-R hands\. We train 8 skills in simulation and evaluate them on 7 two\-step tasks and 5 long\-horizon \(3–5 steps\) tasks\. Results show that ToS generally achieves higher success rates than the baselines, particularly on unseen tasks\. Ablation studies further demonstrate the effectiveness of the guiding network\. Finally, real\-world deployment confirms the practical applicability of ToS for long\-horizon manipulation\.

## Submodular Multi\-Agent Reinforcement Learning for Effective Online Distributed Task Allocation

**Authors:** Jing Liu; Yangyang YANG; Luca Ballotta; Fangfei Li; Yang Tang; Ruggero Carli

**ID:** 149944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m1AFEitkDl>) | [PDF](<https://openreview.net/pdf?id=m1AFEitkDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149944>)

This paper studies multi\-agent reinforcement learning with submodular team utilities, which models scenarios where $N$ agents solve a non\-additive task allocation problem in a distributed manner online\. Since each agent selects one action from a local categorical distribution at each time step, feasible joint actions form a partition matroid over agent\-action pairs\. The standard continuous relaxation of set utility functions, the Multilinear Extension, does not encode categorical constraints on  factorized policies and may yield inconsistent gradient estimation\. To remedy this, we propose the \\emph\{Partition Multilinear Extension\}, a continuous relaxation that equals the expected team utility with factorized categorical policies under partition matroid constraint\. We prove that submodular difference rewards provide unbiased PME marginal\-gradient information and induce a stagewise score\-function policy\-gradient estimator for factorized categorical policies\. Building on these results, we propose \\emph\{SubMAPG\}, a centralized training with decentralized execution \(CTDE\) multi\-agent policy\-gradient framework that implements submodular difference\-reward training signals and masked categorical policies for partition\-feasible decentralized execution\. For the associated PME marginal\-space projected stochastic\-gradient dynamics, we establish a stagewise $\\frac\{1\}\{2\}$\-approximation guarantee and sublinear dynamic regret under slowly varying environments, measured by the path length of the optimal PME marginals\. Finally, to handle open systems where agents and targets may leave and join over time \(e\.g\., modeling failure and recovery of robots or smart sensors\), we implement SubMAPG with a graph neural network policy model\. Numerical experiments on multi\-robot coverage and multi\-target tracking show that SubMAPG outperforms local greedy and shared\-reward baselines, and is competitive with centralized myopic greedy strategies\.

## Managing Self\-Learning Experts under Per\-Round Budget Constraints

**Authors:** Ilgam Latypov; Alexandra Suvorikova; Alexey Kroshnin; Alexander Gasnikov; Iurii Dorn

**ID:** 153519 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kl4TknNwAA>) | [PDF](<https://openreview.net/pdf?id=Kl4TknNwAA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153519>)

This paper addresses the problem of sequential decision\-making under learning budget constraints\. Such settings naturally arise in applications like managing a portfolio of bandit or reinforcement learning \(RL\) algorithms\. We propose a novel UCB\-type algorithm, M\-LCB, designed to manage a pool of $K$ self\-learning experts in a stochastic environment while accounting for a limited per\-round learning budget $M$\. At each round, M\-LCB selects one expert to make a decision and at most $M \\le K$ experts to learn\. For selection, M\-LCB uses confidence bounds constructed from limited prior knowledge about the experts \(i\.e\., mild assumptions\) and their observed training losses\. We derive anytime regret bounds for M\-LCB that scale with the individual regrets of the experts\. In particular, if each expert has regret $\\tilde O\(T^\\alpha\)$ by round $T$, then M\-LCB guarantees an overall regret of $\\tilde O\\left\(\\sqrt\{KT/M\} \+ \(K/M\)^\{1\-\\alpha\}T^\\alpha\\right\)$ relative to the best expert in hindsight\. Finally, we demonstrate the applicability of M\-LCB using self\-learning experts instantiated as \(i\) parametric models and \(ii\) bandit algorithms\.

## Scalable Multi\-Agent Contrastive Reinforcement Learning

**Authors:** Victor Augusto Kich; Satoshi Yamamori; Jun Morimoto

**ID:** 151201 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cCWvLZocDZ>) | [PDF](<https://openreview.net/pdf?id=cCWvLZocDZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151201>)

Sparse rewards make cooperative multi\-agent reinforcement learning difficult because useful feedback often appears only after multiple agents coordinate over long horizons\. We introduce Multi\-Agent Contrastive Reinforcement Learning \(MACRL\), a goal\-conditioned method that trains parameter\-shared decentralized actors with a centralized contrastive critic\. Instead of learning from sparse task rewards, the critic contrasts joint state\-action embeddings with future achieved goals from replay, turning every trajectory into dense self\-supervised signal\. Across tasks that vary in horizon length, coordination difficulty, and object interaction, our method is competitive with strong HER\-based baselines when exploration is sufficient and substantially more robust when sparse rewards become uninformative\. On the hardest tasks, it obtains substantial non\-zero success while non\-contrastive baselines remain near zero\. Scaling from 4 to 64 layers further improves performance on several hard tasks, with gains up to 25 percentage points, while providing little consistent benefit to MA\-SAC\+HER\. These results suggest that contrastive objectives and depth\-scaled residual networks provide a promising foundation for scalable cooperative goal\-conditioned control\.

## Beyond Success Rates: Trainability and Extractability in Offline GCRL

**Authors:** Jan Malte Töpperwien; Aditya Mohan; Marius Lindauer

**ID:** 139429 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RMzSje9qtp>) | [PDF](<https://openreview.net/pdf?id=RMzSje9qtp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139429>)

Offline goal\-conditioned reinforcement learning \(GCRL\) is typically benchmarked by the best tuned success rate of each method\. This score measures attainable performance, but it does not reveal how reliably a learned goal\-conditioned signal can be extracted into a policy: a method could succeed across many value\-learning and extraction settings, or only at a narrow, hard\-to\-find configuration\. We study this gap across four methods, GCIQL, GCIVL, QRL, and CRL, under a shared advantage\-weighted regression \(AWR\) extractor\. For each method, we construct trainability landscapes over the optimizer learning rate, which affects value learning and actor optimization, and AWR temperature, which controls how selectively the actor imitates high\-advantage transitions\. Across AntMaze, Cube, and Scene, we observe distinct regimes: high\-scoring methods may be broadly accessible or brittle, while broad relative basins may still sit below low absolute ceilings\. To interpret these differences, we pair landscapes with post\-hoc diagnostics of future\-vs\-random goal discrimination and AWR weight concentration\. % whether the learned advantage function separates matched future goals from random goals, and whether AWR spreads weight across many behavior\-supported transitions or concentrates on a small tail\. Their relationship to downstream success is task\-dependent\. On AntMaze, where future goals align with path\-like progress, these diagnostics explain landscape regimes\. On Cube and Scene, goal ranking and manipulation control decouple: methods can rank goals well while failing downstream, or succeed through action\-conditioned advantages despite weak future\-vs\-random separation\. These results show that peak tuned success alone does not establish broadly extractable goal\-conditioned behavior\. Trainability landscapes expose this gap, while extraction diagnostics offer a lower\-cost lens on how learned signals become policies\.

## Improved Regret bounds in Tabular Reinforcement Learning under Local Differential Privacy

**Authors:** Hugo Richard

**ID:** 153585 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKggS9jfaS>) | [PDF](<https://openreview.net/pdf?id=KKggS9jfaS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153585>)

We study regret minimization for time\-homogeneous episodic tabular reinforcement learning with $S$ states and $A$ actions under    non\-interactive $\\epsilon$\-local differential privacy \(LDP\)\.  In each episode $k \\in \[K\]$, the decision\-maker sends a policy to a user, the user executes the policy for $H$ steps, and sends an $\\epsilon$\-locally differentially private message back to the decision\-maker\. When $H=1$, the problem reduces to an LDP contextual bandit  with $S$ contexts, $A$ arms and horizon $K$\.  We prove that the minimax regret is $\\min\\bigg\(K,  \\frac\{ \\sqrt\{\\max\( S, \\exp\(\\epsilon\) \+ 1\) S A K \(\\exp\(\\epsilon\) \+ 1\)\}\}\{\\exp\(\\epsilon\) \- 1\}\\bigg\)$, up to constants and a $\\sqrt\{\\log\(A\)\}$ factor\. The upper bound is achieved by an adaptation of EXP3 and a unary encoding mechanism\.  When $H &gt; 1$, and for small $\\epsilon$, we show a lower bound in $\\Omega\(HS\\frac\{\\sqrt\{A K\}\}\{\\epsilon\}\)$ and an  upper bound in $\\tilde\{O\}\(H^2 S^2 \\frac\{\\sqrt\{ AK\}\}\{\\epsilon\}\)$\. The upper bound is achieved by an algorithm based on UCBVI and a unary encoding mechanism\. For small $\\epsilon$, these bounds improve the previously known lower bound by a factor $\\sqrt\{S\}$ and the previously known upper bound by a factor of $H \\sqrt\{A\}$\.

## DynamAuction: a reinforcement learning environment for repeated auction with dynamic value

**Authors:** Benjamin Heymann; Eugénie Patard; Corentin Pla; Patrick Loiseau

**ID:** 139757 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XRllANbTD>) | [PDF](<https://openreview.net/pdf?id=6XRllANbTD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139757>)

A buyer who repeatedly participates in auctions for related items often faces a dynamic value problem: what they win today changes what tomorrow's items are worth\. Despite the empirical importance of such effects, especially in display advertising, the algorithmic literature on repeated auctions has overwhelmingly focused on the learning problem—treating each opportunity as a contextual bandit—while sidestepping the planning problem induced by the dependence of current value on past wins\. We introduce DynamAuction, a synthetic environment for single\-buyer sequential bidding\.  Each won auction contributes reward through a kernel conditioned on a carry\-over context that aggregates the bidder's past wins via a commutative monoid\. The environment supports first\- and second\-price auctions, non\-homogeneous Poisson arrivals, delayed feedback, saturation,  and recency effects\.  We also introduce a class of Model Predictive Control algorithms built on top of the myopic\-optimal valuation—the optimal bid in a second\-price auction if no further opportunity were to follow\.  This class of  myopic\-optimal MPC consistently outperforms off\-the\-shelf deep RL baselines \(PPO, SAC, TD3\)\. We release DynamAuction to support RL research on repeated auctions\.

## JAXtari: High\-Throughput and Easy\-to\-Modify Arcade Learning Environment

**Authors:** Quentin Delfosse; Raban Emunds; Paul Seitz; Sebastian Wette; Jannis Blüml; Daniel Kirn; Dominik Mandok; Kristian Kersting

**ID:** 139790 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ZDRYko9zw>) | [PDF](<https://openreview.net/pdf?id=4ZDRYko9zw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139790>)

The Arcade Learning Environment \(ALE\) has been a cornerstone of Deep Reinforcement Learning research, providing a standardized benchmark for evaluating general agents\. However, its lack of native support for object\-extraction and environment modification restricts research into agent generalization and reasoning\.Furthermore, the ALE's dependence on CPU\-based emulation creates a significant bottleneck in modern GPU\-accelerated training pipelines, limiting both experimental scale and iteration frequency\.  In this work, we introduce JAXatari, an open\-source, high\-performance reimplementation of Atari 2600 environments\. By leveraging massive parallelization on GPUs, PPO agents finish training with 100M frames on a single A100\-GPU in under an hour\.  Beyond speed, JAXatari provides object\-centric observations and a flexible modification system, allowing researchers to, e\.g\. develop neuro\-symbolic methods or discover novel shortcuts and subsequently train and adapt their agents rapidly, sometimes in only minutes\.

## Follow the Winners: Conservative Policy Improvement with the Cross\-Entropy Method for Critic\-Free RFT

**Authors:** Joery A de Vries; Neil Lawrence; Zhenwen Dai

**ID:** 148167 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=znxdUBOoQP>) | [PDF](<https://openreview.net/pdf?id=znxdUBOoQP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148167>)

Critic\-free reinforcement fine\-tuning \(RFT\) for agentic large language models is dominated by the GRPO and DPO families, yet these methods often update too aggressively on the high\-variance samples from agentic tasks\. We propose \*Follow the Winners\* \(FTW\), a critic\-free policy\-learning algorithm that adapts the cross\-entropy method to RFT, obtaining a more conservative policy\-learning method\. Unlike prior exponentially concentrating approaches, FTW induces polynomial concentration in the order statistic of returns\. Through a control\-as\-inference lens, we show that FTW induces a mild risk\-seeking bias that scales linearly with return uncertainty: less aggressive than DPO’s quadratic risk bias, yet more exploratory than GRPO’s risk\-neutral profile\. In deterministic\-reward agentic settings, where uncertainty is primarily epistemic, this linear risk bonus encourages knowledge\-seeking without entrenching on noisy samples\. Consistent with this perspective, FTW matches GRPO on the perfect\-information Sokoban domain while outperforming it on the imperfect\-information Search\-R1 domain\.

## Adaptive Robust Estimator for Policy Optimization in Reinforcement Learning

**Authors:** Zhongyi Li; Wan Tian; Jingyu Chen; Kangyao Huang; Huiming Zhang; Hui Yang; Tao Ren; Ruijie Wang; Yijie Peng; Yikun Ban; Fuzhen Zhuang

**ID:** 153985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H47ygC2MKi>) | [PDF](<https://openreview.net/pdf?id=H47ygC2MKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153985>)

Reinforcement learning \(RL\) has become a key ingredient in post\-training large language models \(LLMs\), with Group Relative Policy Optimization \(GRPO\) and its variants widely adopted for improving reasoning performance\. Despite their success, these methods rely on batch\-level reward normalization, where the empirical mean can be severely distorted by noisy, skewed, heavy\-tailed, or contaminated rewards\. Such distortion directly affects advantage estimation and may lead to unstable or inefficient policy updates\. We propose an \\emph\{Adaptive Robust Estimator\} \(ARE\), a plug\-and\-play robustification module for GRPO\-style policy optimization\. ARE replaces the empirical batch mean with a two\-level robust location estimator: adaptive loss minimization suppresses extreme rewards within each block, while median\-of\-means aggregation limits the influence of corrupted blocks\. This design preserves the original policy optimization objective while improving the reliability of reward centering\. We prove that ARE is consistent and achieves high\-probability deviation guarantees under both finite\-variance and heavy\-tailed reward distributions\. Experiments on mathematical reasoning benchmarks show that ARE improves GRPO\-based training in both single\-agent and multi\-agent settings, with particularly clear gains under noisy and out\-of\-distribution evaluations\. We further validate its generality on embodied vision\-and\-language navigation tasks, where ARE improves training stability and downstream navigation \(VLN\) performance\.

## DeCoRL: Decomposed Consistency Reinforcement Learning for Multi\-Image Composition

**Authors:** Zhiqiang Wu; Shuang Sun; Jiale Zhang; Jing Li; Yibo Chen; Xu Tang; Yao Hu

**ID:** 148478 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xVnuPOotSj>) | [PDF](<https://openreview.net/pdf?id=xVnuPOotSj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148478>)

Multi\-image composition \(MICo\) is a critical yet challenging capability for large\-scale image editing models, where consistency degrades rapidly as the number of reference images increases\. While supervised fine\-tuning \(SFT\) can equip models with basic MICo ability, it provides only implicit supervision on the composed image and often fails to learn reliable object\-level correspondence across multiple references\. We propose DeCoRL, a reinforcement\-learning \(RL\) framework that improves MICo consistency by decomposing holistic MICo consistency into object\-level consistency\. DeCoRL first establishes instruction\-relevant object correspondences across reference images and localizes the corresponding regions in the generated image\. It then uses a VLM\-based reward model trained on single\-object consistency annotations to produce fine\-grained, object\-wise feedback, which is aggregated into a multi\-object consistency reward to guide RL post\-training\. We further introduce DeCo\-Bench, a benchmark covering compositions from 2 to 6 reference images\. Experiments on DeCo\-Bench and the public MICo\-Bench demonstrate consistent improvements in MICo consistency\.

## Self\-Evolving Agents Should Build Internal and External Models of the World

**Authors:** Luiz Felipe Vecchietti; Bryan Nathanael Wijaya; Wenchao Dong; Meeyoung Cha

**ID:** 140109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7rbDYy6sQn>) | [PDF](<https://openreview.net/pdf?id=7rbDYy6sQn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140109>)

Developing self\-evolving agents that learn continuously from streams of information represents an emerging frontier in artificial intelligence\. This capability is critical for efficiently updating computationally expensive systems such as foundation models\. When agents learn by exploring the environment and interacting with other agents to achieve multiple tasks over time, two sources of non\-stationarity emerge: shifting task distributions and co\-evolving peers\. However, developing frameworks for continual multi\-agent reinforcement learning \(CMARL\) and effective policy improvement remains challenging\. In this paper, we argue that training self\-evolving agents should incorporate two classes of model\-based principles: internal models that allow an agent to compare policy checkpoints, monitor its learning capacity, and represent its current objective; and external models that learn environment dynamics and the behavior of other agents\. We anticipate that discussion on these principles will facilitate the design of algorithms, architectures, and benchmarks that explicitly evaluate model\-based components in CMARL\.

## StarWM: Self\-Supervised Trained Attention Routing for Robust World Models

**Authors:** Zeqiang Zhang; Fabian Wurzberger; Maximilian Otte; Daniel Schmid; Sebastian Gottwald; Arne P Raulf; Daniel A Braun

**ID:** 148796 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2NzTOEOfM>) | [PDF](<https://openreview.net/pdf?id=v2NzTOEOfM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148796>)

A robust world model must strike the balance between faithfully capturing environmental dynamics and abstracting away from irrelevant content\. While reconstruction\-based world models ensure faithful supervision, they misallocate representational capacity by pixel area rather than dynamics relevance, which can cause task\-irrelevant content to dominate the learned representation\. Alternatively, reconstruction\-free methods avoid this bias but risk discarding possibly relevant information\. We propose StarWM, which combines advantages of both paradigms through a cross\-attention module gated by self\-supervised dynamics signals that decides where reconstruction applies, while a dual\-stream decoder lets reconstruction shape only what is extracted at attended locations, with stop\-gradient barriers preventing the two objectives from interfering\. This allows reconstruction to supervise the visual content of attended regions without contaminating the latent with non\-predictive information\. On DeepMind Control with dynamic video backgrounds, StarWM outperforms reconstruction\-based baselines while keeping competitive with the concurrent reconstruction\-free approach, and is the only method that performs consistently well across clean, sequential\-video, and random\-video distractor settings\. Mechanistic probing confirms StarWM preserves state attributes with near\-perfect fidelity through long\-horizon imagination while systematically discarding distractors\.

## Target\-Aligned Reinforcement Learning

**Authors:** Leonard S\. Pleiss; James Harrison; Maximilian Schiffer

**ID:** 150631 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=geGOtycFCT>) | [PDF](<https://openreview.net/pdf?id=geGOtycFCT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150631>)

Many value\-based deep reinforcement learning algorithms rely on target networks \- lagged copies of the online network \- to stabilize training\. While effective, this mechanism introduces a fundamental stability\-recency tradeoff: slower target updates improve stability but reduce the recency of learning signals, hindering convergence speed\. We propose Target\-Aligned Reinforcement Learning \(TARL\), a simple drop\-in refinement for existing algorithms that emphasizes transitions for which the target and online network estimates are highly aligned\. By focusing updates on well\-aligned targets, TARL mitigates the adverse effects of stale target estimates while retaining the stabilizing benefits of target networks\. We empirically demonstrate consistent improvements within discrete and continuous control algorithms across various benchmark environments without any hyperparameter tuning, including a 38\.18% peak score gain on Atari\-10, while incurring less than a 4% increase in wall\-clock time\.

## GDMD: Guiding Distribution Matching Distillation with Gradient\-Based Reinforcement Learning

**Authors:** Linwei Dong; Ruoyu Guo; Ge Bai; Quan Zheng; Yawei Luo; Changqing Zou

**ID:** 152678 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RFJrFfNSEC>) | [PDF](<https://openreview.net/pdf?id=RFJrFfNSEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152678>)

Diffusion distillation, exemplified by Distribution Matching Distillation \(DMD\), has shown great promise in few\-step generation but often sacrifices quality for sampling speed\. While integrating Reinforcement Learning \(RL\) into distillation offers potential, a naive fusion of these two objectives relies on suboptimal raw sample evaluation\. This sample\-based scoring creates inherent conflicts with the distillation trajectory and produces unreliable rewards due to the noisy nature of early\-stage generation\. To overcome these limitations, we propose GDMD, a novel framework that redefines the reward mechanism by prioritizing distillation gradients over raw pixel outputs as the primary signal for optimization\. By reinterpreting the DMD gradients as implicit target tensors, our framework enables existing reward models to directly evaluate the quality of distillation updates\. This gradient\-level guidance functions as an adaptive weighting that synchronizes the RL policy with the distillation objective, effectively neutralizing optimization divergence\. Empirical results show that GDMD sets a new SOTA for few\-step generation\. Specifically, our 4\-NFE \(Number of Function Evaluations\) models outperform the quality of their multi\-step teacher and substantially exceed previous DMDR results in GenEval and human\-preference metrics, exhibiting strong scalability potential\.

## Shared Modular Recurrence in Contextual MDPs for Universal Morphology Control

**Authors:** Laurens Engwegen; Max Weltevrede; Caroline Horsch; Daan Brinks; Wendelin Boehmer

**ID:** 154044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gegwgu6VmY>) | [PDF](<https://openreview.net/pdf?id=Gegwgu6VmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154044>)

A universal controller for any robot morphology would greatly improve computational and data efficiency\. Steps have been made towards such multi\-robot control by utilizing \*contextual\* information about the properties of individual robots and exploiting their modular structure in the architecture of deep reinforcement learning agents\. When the robots have highly dissimilar morphologies, however, this becomes a challenging problem, especially when the agent must generalize to new, unseen robots\. In this paper, we posit that contextual features are often only partially available, but that they can be recovered through modular interactions\. This can allow for better multi\-robot control and generalization to contexts that are not seen during training\. To this extent, we implement a transformer\-based architecture with shared modular recurrence and evaluate its \(generalization\) performance on a large set of MuJoCo robots\. The results show a substantial improvement in zero\-shot generalization performance on robots with unseen dynamics, kinematics, and topologies, in four different environments\.

## Think2SQL: Blueprinting Reward Density and Advantage Scaling for Effective Text\-to\-SQL Reasoning

**Authors:** Simone Papicchio; Simone Rossi; Luca Cagliero; Papotti Paolo

**ID:** 156768 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NxU1KWnpOG>) | [PDF](<https://openreview.net/pdf?id=NxU1KWnpOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156768>)

While Large Language Models \(LLMs\) have advanced the state\-of\-the\-art in Text\-to\-SQL, robust reasoning in complex, multi\-table environments remains a bottleneck for parameter\-efficient models\. This paper presents a systematic empirical study on injecting reasoning capabilities into Text\-to\-SQL through the lens of Reinforcement Learning with Verifiable Rewards \(RLVR\) for the Qwen3 model family\. We uncover a critical interplay between reward density, advantage scaling, and model capacity\. Our analysis yields four primary insights\. First, we propose a novel execution\-guided dense reward function that significantly outperforms binary signals and existing state\-of\-the\-art rewards by providing granular feedback at the instance level\. Second, we analyze the mechanics of advantage calculation, demonstrating that while large models thrive on sparse signals with aggressive advantage scaling, smaller models require dense rewards and conservative scaling to improve Text\-to\-SQL performance\. Third, we evaluate the impact of cold start, showing that distillation does not always benefit RLVR performance, and supervised fine\-tuned models are prone to distributional mimicry\. Fourth, we map the Pareto frontier of training efficiency, providing insights for optimizing Text\-to\-SQL reasoning under computational constraints\. Our findings culminate in the Think2SQL family: our 4B\-parameter model demonstrates reasoning capabilities competitive with state\-of\-the\-art models such as o3\. We release our models, datasets, and code to create a blueprint for RLVR optimization in Text\-to\-SQL at https://github\.com/spapicchio/Think2SQL\.

## $\\varphi$TD: Distributional Reinforcement Learning using Characteristic Functions

**Authors:** Thomas Mousseau; Tyler Kastner; Davide Baldelli; Amir\-massoud Farahmand

**ID:** 154745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BJHnl3nENy>) | [PDF](<https://openreview.net/pdf?id=BJHnl3nENy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154745>)

Distributional Reinforcement Learning methods aim to learn the entire distribution of returns, yet current algorithmic approaches are limited to a narrow class of distributions\. We propose $\\varphi$TD, a method to overcome this limitation through computing the loss in the frequency domain\. We demonstrate that this further unifies quantile and categorical approaches to distributional RL, as well as enabling the learning of distributions that were previously impossible to capture, such as mixtures of continuous distributions\. We empirically study $\\varphi$TD across synthetic benchmarks and large\-scale deep RL environments, and demonstrate that the flexibility obtained by wider parametric families often leads to improved performance\.

## Adaptive Scheduling Pipeline For Multi\-Instance Asynchronous Reinforcement Learning

**Authors:** Salah Chikhi; Luis Ruiz; Entong Li; Li Zeng

**ID:** 149603 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oskhumpV2y>) | [PDF](<https://openreview.net/pdf?id=oskhumpV2y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149603>)

We present the Adaptive Scheduling Pipeline \(ASP\), a bounded\-lag asynchronous reinforcement learning \(RL\) architecture for post\-training large language models \(LLMs\)\.  Rather than only disaggregating generation and training, the ASP combines two design ideas\.  First, a queue\-aware scheduling policy that jointly reduces three sources of rollout underutilization —padding bubbles from intra\-minibatch length heterogeneity, skewness bubbles from long\-tail outputs, and sorting bubbles from queue instability induced by length\-sorted dispatching—through a single offline preprocessing pass\.  This enables efficient multi\-instance rollout that overcomes the early scaling plateau of single\-instance inference while maintaining stable queue dynamics\.  Second, a bounded\-lag asynchronous architecture decouples rollout from training while keeping policy lag observable and small enough to preserve stable learning in our experiments\. We also provide an explicit weight\-flow path that converts trainer snapshots into inference\-ready weights without re\-coupling generation and training\. Experiments show that ASP improves end\-to\-end throughput by up to $3\.22\\times$, reduces iteration time by up to 76\\%, scales more robustly with additional generation resources than the MindSpeed\-RL and verl baselines, and shows no visible convergence degradation\. ASP has also been used in an internal telecom\-domain RL post\-training workflow, reducing the reported training period from more than three months to about two months and producing a domain\-enhanced model for knowledge answering and tool calling\.

## Soft Forward\-Backward Representations for Zero\-shot Reinforcement Learning with General Utilities

**Authors:** Marco Bagatella; Thomas Rupf; Georg Martius; Andreas Krause

**ID:** 151016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=da88i4IpCj>) | [PDF](<https://openreview.net/pdf?id=da88i4IpCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151016>)

Recent advancements in zero\-shot reinforcement learning \(RL\) have facilitated the extraction of diverse behaviors from unlabeled, offline data sources\. In particular, forward\-backward algorithms \(FB\) can retrieve a family of policies that approximately solves any standard RL problem \(with additive rewards, linear in the occupancy measure\), given sufficient capacity\. While retaining zero\-shot properties, we tackle the greater problem class of RL with general utilities, in which the objective is an arbitrary differentiable function of the occupancy measure\. This setting is strictly more expressive, capturing tasks such as distribution matching or pure exploration, which may not be reduced to additive rewards\. We show that this additional complexity can be captured by a novel, maximum entropy \(soft\) variant of the forward\-backward algorithm, which recovers a family of stochastic policies from offline data\. When coupled with zero\-order search over compact policy embeddings, this algorithm can sidestep iterative optimization schemes, and optimizes general utilities directly at test\-time\. Across both didactic and high\-dimensional experiments, we demonstrate that our method retains favorable properties of FB algorithms, while also extending their range to more general RL problems\.

## Learning to Undo: Transfer Reinforcement Learning under State Space Transformations

**Authors:** Mridul Mahajan; Aldo Pacchiano; Xuezhou Zhang

**ID:** 149546 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pKncWGhXfk>) | [PDF](<https://openreview.net/pdf?id=pKncWGhXfk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149546>)

Transfer learning in reinforcement learning \(RL\) has shown strong empirical success\. In this work, we take a more principled perspective by studying when and how transferring knowledge between MDPs \(a source and a target\) can be provably beneficial\. Specifically, we consider the case where there exists an undo map such that applying this map to the target’s state space recovers the source exactly\. We propose an algorithm that learns this map by matching state feature statistics gathered from both MDPs, and then uses it to transfer the source policy\. We theoretically justify the algorithm by analyzing the setting when the undo map is linear and the source is linearly\-$Q^\\star$ realizable, where our approach has strictly better sample complexity than tabula rasa RL in the target MDP\. Empirically, we demonstrate that these benefits extend beyond this regime: on challenging continuous control tasks and Atari games, our method achieves significantly better sample efficiency\. Overall, our results highlight how shared structure between tasks can be leveraged for efficient transfer of policies across environments\.

## RL\-Guided Contraction of Symbolic Tensor Networks for Quantum Circuit Equivalence

**Authors:** Suhaib Al\-Rousan; Christian Schilling; Max Tschaikowski; Kim Larsen

**ID:** 151179 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cQ7bzhrYxe>) | [PDF](<https://openreview.net/pdf?id=cQ7bzhrYxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151179>)

Verifying that two quantum circuits are equivalent is a critical challenge in compiler validation\. A common approach is to transform the circuits into a tensor network and then iteratively contract tensors in the network\. The order in which contractions are applied has a crucial influence on the complexity, as tensor size may grow exponentially in the number of qubits\. This motivated research into heuristic policies to find good contraction orders, including recent work based on reinforcement learning \(RL\)\. Orthogonally, to mitigate the complexity of an explicit tensor representation, tensor decision diagrams \(TDDs\) have been proposed as a compact symbolic representation\. However, also the TDD performance is sensitive to the contraction order, and policies designed for tensor networks do not perform well in case of a TDD representation\. In this paper, we propose an RL framework to obtain a graph\-neural\-network policy that navigates the trade\-off between arithmetic complexity and TDD size\. Experimental results demonstrate that a policy learned with our framework is effective at taming the symbolic representation size\.

## Instability of Meta\-Learning Intrinsic Rewards for Policy Gradient Reinforcement Learning

**Authors:** Dilith Jayakody; Domenic Rosati; Janarthanan Rajendran

**ID:** 150789 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fO6evIFLoV>) | [PDF](<https://openreview.net/pdf?id=fO6evIFLoV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150789>)

Meta\-learned intrinsic rewards are a powerful tool for shaping policy learning in reinforcement learning, particularly when extrinsic rewards are sparse, delayed, or unavailable\. Learning Intrinsic Rewards for Policy Gradients \(LIRPG\) introduced this paradigm and serves as the foundation on which subsequent meta\-learned intrinsic reward methods are built\. While LIRPG and LIRPG\-based methods have shown strong results in low\-dimensional control, their behavior in high\-dimensional domains, where the policy and value networks use a shared encoder, remains poorly understood\. In this work, we analyze meta\-learned intrinsic rewards in high\-dimensional environments and uncover a consistent failure mode, particularly when training with intrinsic rewards alone, where performance collapses to near\-random behavior\. We identify the root cause as dense, non\-stationary intrinsic rewards inducing large and high\-variance value losses that dominate shared encoder updates, suppressing policy learning\. We further demonstrate that decoupling policy and value optimization using phasic policy gradient methods is one simple and effective approach to addressing this issue\.

## Testing and Estimation of Contextual Generalized Thurstone Models

**Authors:** Dongmin Lee; Anuran Makur; Japneet Singh; Boyu Xu

**ID:** 151021 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dYzwuQl3Yd>) | [PDF](<https://openreview.net/pdf?id=dYzwuQl3Yd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151021>)

Many modern machine learning methods, such as reinforcement learning from human feedback \(RLHF\) to train reward functions, utilize preference learning models like Bradley\-Terry\-Luce \(BTL\) to learn latent scores of items based on pairwise comparison data\. Despite the successes of such models in specific applications, the theoretical justification for the employed models has often been unclear\. In this work, we provide a hypothesis testing procedure to test whether a given dataset of pairwise comparisons follows a contextual generalized Thurstone \(CGT\) model under certain classes of latent functions\. The latent functions determine the latent scores, and can be expressed as weighted sums of basis functions\. Our CGT model encompasses a wide class of preference learning models, including the popular BTL model\. In particular, we prove critical thresholds for our tests in the minimax sense, showing that they scale like $1/\\smash\{\\sqrt\{\|\\mathcal\{E\}\|^\{1/2\}k\}\}$ under certain important regimes, such as complete graphs and perfect matchings\. Furthermore, to establish our testing results, we also derive error bounds for CGT parameter estimation that generalize and improve on known results in the BTL and non\-contextual settings\. Finally, we conduct experiments on various synthetic and real\-world datasets to verify our theoretical results\.

## AstraFlow: Dataflow\-Oriented Reinforcement Learning for Agentic LLMs

**Authors:** Haizhong Zheng; Yizhuo Di; Jiahui Wang; Shuowei Jin; Xueshen Liu; Yongji Wu; Zhuoqing Morley Mao; Ion Stoica; Jiawei Zhao; Beidi Chen

**ID:** 152612 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RpK5dbpUYw>) | [PDF](<https://openreview.net/pdf?id=RpK5dbpUYw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152612>)

Reinforcement learning \(RL\) is increasingly used to improve the reasoning, coding, and tool\-use capabilities of large language models, but agentic RL remains prohibitively expensive\. Scaling RL to agentic LLMs requires supporting complex workloads, including multi\-policy collaborative training, while efficiently using elastic, heterogeneous, and cross\-region compute resources\. Existing LLM RL systems support some of these capabilities, but each new extension often requires dedicated system engineering\. This burden arises from trainer\-centered control architectures and the lack of principled abstractions for RL system components\. To address these limitations, we propose AstraFlow, a dataflow\-oriented RL system that replaces conventional trainer\-centered control with principled component abstractions\. In AstraFlow, rollout services, dataflow management, and training are decoupled into autonomous components, enabling the system to natively support complex multi\-policy agentic RL workloads and efficiently exploit diverse compute resources\. We evaluate AstraFlow across math, code, search, and AgentBench workloads, showing that the same system supports multi\-policy training, elastic scaling, heterogeneous cross\-region execution, and composable data algorithms without system\-level code changes\. In multi\-policy collaborative training, AstraFlow achieves comparable or better accuracy than existing RL systems while speeding up training time by 2\.7x\.

## RL\-Inf: Tracking Non\-local Training Data Influence for Online Reinforcement Learning

**Authors:** Shixuan Liu; Cheng Tang; Yuzheng Hu; Fan Wu; Han Zhao; Jiaqi Ma

**ID:** 152424 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TDeuf94Klk>) | [PDF](<https://openreview.net/pdf?id=TDeuf94Klk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152424>)

Online reinforcement learning \(RL\) has achieved significant success in decision\-making tasks, but modern online RL remains highly sensitive to the quality of training experience\. Understanding the role of training data in online RL is challenging because the training distribution evolves together with the policy, causing the influence of the training data to propagate across future optimization and future data collection\. Existing data\-attribution methods for online RL primarily focus on local influence within a single training round, overlooking the non\-local data influence across multiple training rounds\. In this work, we formalize data attribution in online RL through a trajectory\-level leave\-one\-out quantity, RL\-LOO, which measures how one training sample influences a downstream target after subsequent online updates have taken place\. We then derive RL\-Inf, a first\-order estimator that propagates data influence through both optimization effects and policy\-induced sampling effects, and provide theoretical guarantees on its approximation accuracy under smoothness assumptions\. Our analysis further disentangles these two effects and shows both theoretically and empirically that the full RL\-Inf estimator can often be well approximated using the optimization effect alone\. Building on this observation, we develop RINSE, a practical data filtering method for online RL\. Experiments on standard control benchmarks and an RLHF\-style toxicity\-mitigation setting show that RINSE improves training efficiency and final performance over standard PPO and local attribution baselines\. These results suggest that RL\-Inf  provides a practical and principled framework for understanding and improving online RL\.

## When Are Compositional Problems Learnable from Verifiable Rewards?

**Authors:** Daniel Barzilai; Yotam Wolf; Ronen Basri

**ID:** 151059 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dJ8kBICHqU>) | [PDF](<https://openreview.net/pdf?id=dJ8kBICHqU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151059>)

Many problems are inherently compositional: solving them requires a sequence of intermediate decisions that jointly determine the final answer\. A central question is when such a compositional structure can be learned from outcome\-level feedback alone, where supervision of the intermediate steps is unavailable\. We study this question for autoregressive models trained using reinforcement learning with verifiable rewards \(RLVR\)\. We identify the \\emph\{task\-advantage ratio\}, a joint property of the task and the model, which measures whether intermediate decisions present an advantage in reaching a correct final solution\. We show that this ratio governs learnability in our setting: when the advantage is present, RLVR efficiently learns the target composition, while when it is absent, training can converge to suboptimal compositions\. We further show that the required advantage arises naturally in several structured problems, but may depend critically on the quality of the initial model\. Our results help to clarify when compositional problems can be learned from final rewards alone\.

## FASTER: Value\-Guided Sampling for Fast RL

**Authors:** Perry Dong; Alexander Swerdlow; Dorsa Sadigh; Chelsea Finn

**ID:** 149442 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q3wZBBqRAC>) | [PDF](<https://openreview.net/pdf?id=q3wZBBqRAC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149442>)

Some of the most performant reinforcement learning algorithms today can be prohibitively expensive as they use test\-time scaling methods such as sampling multiple action candidates and selecting the best one\. In this work, we propose FASTER, a method for getting the benefits of sampling\-based test\-time scaling of diffusion\-based policies without the computational cost by tracing the performance gain of action samples back to earlier in the denoising process\. Our key insight is that we can model the denoising of multiple action candidates and selecting the best one as a Markov Decision Process \(MDP\) where the goal is to progressively filter action candidates before denoising is complete\. With this MDP, we can learn a policy and value function in the denoising space that predicts the downstream value of action candidates in the denoising process and filters them while maximizing returns\. The result is a method that is lightweight and can be plugged into existing generative RL algorithms\. Across challenging long\-horizon manipulation tasks in online and batch\-online RL, FASTER consistently improves the underlying policies and achieves the best overall performance among the compared methods\. Applied to a pretrained VLA, FASTER further improves task success while substantially reducing training and inference compute requirements\.

## Not Every Rubric Teaches Equally: Policy\-Aware Rubric Rewards for RLVR

**Authors:** Utkarsh Tyagi; Xingang Guo; MohammadHossein Rezaei; Daniel George; Anas Mahmoud; Jackson Lee; Bing Liu; Yunzhong He

**ID:** 155810 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2itEcLBhzr>) | [PDF](<https://openreview.net/pdf?id=2itEcLBhzr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155810>)

Reinforcement learning with verifiable rewards has made post\-training effective when correctness can be verified automatically, but many useful model behaviors require satisfying several qualitative criteria rather than a single verifier\. Rubric\-based rewards extend RLVR to these open\-ended domains by grading prompt\-specific criteria and aggregating them into a scalar reward\. However, the common static aggregations conflate a criterion's desired end\-state importance with its current usefulness for learning\. We show that this conflation is central in rubric RL: many criteria that matter to the final answer are already saturated or currently unreachable for the policy, while criteria with informative rollout variation are not reliably the ones assigned the largest human weights\. We introduce a Policy\-Aware Rubric Reward framework for RLVR, \\textbf\{POW3R\}, that keeps human weights and reward category balance as the target objective while reallocating within\-category training pressure toward criteria that distinguish the current rollouts\. Across three base policies on each of two datasets spanning multimodal and text\-only settings, POW3R takes first place on $27$ of $33$ \(base policy, metric\) cells we evaluate, leading both mean rubric reward and the harder strict \`\`every\-rubric\-passed'' pass\-rate over vanilla GRPO with rubric\-based rewards, and reaches the same plateau in $3$\-\-$4\\times$ fewer training steps\. These findings suggest that rubric rewards should separate what should matter in the final answer from what can teach the current policy\.

## Information Templates: A New Paradigm for Intelligent Active Feature Acquisition

**Authors:** Hung\-Tien Huang; Dzung Dinh; Junier Oliva

**ID:** 152156 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V6ZmfeWyKM>) | [PDF](<https://openreview.net/pdf?id=V6ZmfeWyKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152156>)

Active feature acquisition \(AFA\) is an instance\-adaptive paradigm in which, at inference time, a policy sequentially chooses which features to acquire \(at a cost\) before predicting\. Existing approaches either train reinforcement learning policies, which deal with a difficult MDP, or greedy policies that cannot account for the joint informativeness of features or require knowledge about the underlying data distribution\. To overcome this, we propose Template\-based AFA \(TAFA\), a non\-greedy framework that learns a small library of feature templates\-\-\-sets of features that are jointly informative\-\-\-and uses this library of templates to guide the next feature acquisitions\. Through identifying feature templates, the proposed framework not only significantly reduces the action space considered by the policy but also alleviates the need to estimate the underlying data distribution\. Extensive experiments on synthetic and real\-world datasets show that TAFA outperforms the existing state\-of\-the\-art baselines while achieving lower overall acquisition cost and computation\.

## Learning to Cut: Reinforcement Learning for Benders Decomposition

**Authors:** Haochen Cai; Xian Yu

**ID:** 151771 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YAFk1gBK4h>) | [PDF](<https://openreview.net/pdf?id=YAFk1gBK4h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151771>)

Benders decomposition \(BD\) is a widely used solution approach for solving two\-stage stochastic programs arising in real\-world decision\-making under uncertainty\. However, it often suffers from slow convergence as the master problem grows with an increasing number of cuts\. In this paper, we propose Reinforcement Learning for BD \(RLBD\), a framework that adaptively selects cuts using a neural network\-based stochastic policy\. The policy is trained using a policy gradient method via the REINFORCE algorithm\. We evaluate the proposed approach on a two\-stage stochastic electric vehicle charging station location problem and compare it with vanilla BD and LearnBD, a supervised learning approach that classifies cuts using a support vector machine\. Numerical results demonstrate that RLBD achieves substantial improvements in computational efficiency and exhibits strong generalization to problems with similar structures but varying data inputs and decision variable dimensions\.

## Multi\-Stage Planning from Single\-Stage Data: Reinforcement Learning Helps Composition but Requires Anchoring

**Authors:** Boyuan Zheng; Zidong Liu; Yingyu Liang

**ID:** 154469 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DMCfSv0RJb>) | [PDF](<https://openreview.net/pdf?id=DMCfSv0RJb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154469>)

Long\-horizon planning often requires composing familiar local transitions while remaining grounded in a specified goal\. We study this setting from single\-stage data: on a controlled no\-skip graph benchmark, training provides only adjacent\-stage demonstrations while evaluation requires composing them on unseen long\-horizon start–goal pairs; an event\-chain diagnostic decomposes success into legality, stage\-bridging, and goal\-conditioned termination\. Across a minimal Transformer, Qwen2\.5\-3B, and an external validation on MuSiQue multi\-hop QA, supervised fine\-tuning \(SFT\) learns local transitions but degrades with horizon, with failures localized to stage\-bridging\. Reinforcement learning \(RL\) narrows this composition gap, especially at longer horizons, but unanchored RL drifts—producing valid stage progress while ignoring the instructed target\. Stable gains require two complementary forms of anchoring: instruction\-style prompting strengthens prompt\-side goal\-conditioning, especially at shorter horizons, whereas KL regularization to the SFT reference policy prevents RL\-induced drift across horizons; reward shaping mainly provides denser credit\. Finally, we identify a Decomposition Paradox: models trained only on long compositions can reach intermediate targets yet fail the corresponding prefix subtasks because stopping at instructed intermediates is never supervised\.

## Instructing LLMs to Negotiate using Reinforcement Learning with Verifiable Rewards

**Authors:** Shuze Daniel Liu; Claire Chen; Jiabao S Xiao; Lei Lei; Yuheng Zhang; Yisong Yue; David Simchi\-Levi

**ID:** 154379 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DzsyxOSHOZ>) | [PDF](<https://openreview.net/pdf?id=DzsyxOSHOZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154379>)

The recent advancement of Large Language Models \(LLMs\) has established their potential as autonomous interactive agents\. However, they often struggle in strategic games of incomplete information, such as bilateral price negotiation\. In this paper, we investigate if Reinforcement Learning from Verifiable Rewards \(RLVR\) can effectively teach LLMs to negotiate\. Specifically, we explore the strategic behaviors that emerge during the learning process\. We introduce a framework that trains a mid\-sized buyer agent against a regulated LLM seller across a wide distribution of real\-world products\. By grounding reward signals directly in the maximization of economic surplus and strict adherence to private budget constraints, we reveal a novel four\-phase strategic evolution\. The agent progresses from naive bargaining to using aggressive starting prices, moves through a phase of deadlock, and ultimately develops sophisticated persuasive skills\. Our results demonstrate that this verifiable training allows a 30B agent to significantly outperform frontier models over ten times its size in extracting surplus\. Furthermore, the trained agent generalizes robustly to stronger counterparties unseen during training and remains effective even when facing hostile, adversarial seller personas\.

## When Simulation Lies: A Sim\-to\-Real Benchmark and Domain\-Randomized RL Recipe for Tool\-Use Agents

**Authors:** Xiaolin Zhou; Aojie Yuan; Zheng Luo; Zipeng Ling; Xixiao Pan; Yicheng Gao; Haiyue Zhang; Jiate Li; Shuli Jiang; Prince Z Wang; Zixuan Zhu; Jinbo Liu; Ryan Rossi; Hua Wei; Xiyang Hu

**ID:** 139169 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gsyvQACB3x>) | [PDF](<https://openreview.net/pdf?id=gsyvQACB3x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139169>)

Tool\-use language agents are evaluated on benchmarks that assume clean inputs, unambiguous tool registries, and reliable APIs\. Real deployments violate all these assumptions: user typos propagate into hallucinated tool names, a misconfigured request timeout can stall an agent indefinitely, and duplicate tool names across servers can freeze an SDK\. We study these failures as a sim\-to\-real gap in the tool\-use partially observable Markov decision process \(POMDP\), where deployment noise enters through the observation, action space, reward\-relevant metadata, or transition dynamics\. We introduce RobustBench\-TC, a benchmark with 22 perturbation types organized by these four POMDP components, each grounded in a verified GitHub issue or documented tool\-calling failure\. Across 21 models from 1\.5B to 32B parameters \(including the closed\-source o4\-mini\), the robustness profile is sharply uneven: observation perturbations reduce accuracy by less than 5%, while reward\-relevant and transition perturbations reduce accuracy by roughly 40% and 30%, respectively; scale alone does not close these gaps\. We then propose ToolRL\-DR, a domain\-randomization reinforcement learning \(RL\) recipe that trains a tool\-use agent on perturbation\-augmented trajectories spanning the three statically encodable POMDP components\. On a 3B backbone, ToolRL\-DR\-Full retains roughly three\-quarters of clean accuracy and reaches an aggregate perturbed accuracy comparable to open\-source 14B function\-calling baselines while substantially narrowing the gap to o4\-mini\. It closes approximately 27% of the Transition gap despite never seeing transition perturbations in training, suggesting that RL on adversarial static tool\-use inputs induces a more persistent retry policy that transfers to unseen runtime failures\. The code and benchmark dataset are available at https://anonymous\.4open\.science/r/robustbench\-tc\-release\-3AB7/\.

## Natural Policy Gradient as Doubly Smoothed Policy Iteration: A Bellman\-Operator Framework

**Authors:** Phalguni Nanda; Zaiwei Chen

**ID:** 148265 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z9nXtubCbZ>) | [PDF](<https://openreview.net/pdf?id=z9nXtubCbZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148265>)

In this work, we show that natural policy gradient \(NPG\), a core algorithm in reinforcement learning, admits an exact interpretation as a smoothed and averaged form of policy iteration\. Specifically, we introduce doubly smoothed policy iteration \(DSPI\), a Bellman\-operator framework in which each policy is obtained by applying a regularized greedy step to a weighted average of past $Q$\-functions\. DSPI includes policy iteration, dual\-averaged policy iteration, NPG, and more general policy dual averaging methods as special cases\. Using only monotonicity and contraction of smoothed Bellman operators, we prove distribution\-free global geometric convergence of DSPI\. Consequently, standard NPG and policy dual averaging achieve an iteration complexity of $\\mathcal\{O\}\(\(1\-\\gamma\)^\{\-1\}\\log\(\(1\-\\gamma\)^\{\-1\}\\epsilon^\{\-1\}\)\)$ for computing an $\\epsilon$\-optimal policy, without modifying the MDP, adding regularization beyond the mirror map inherent in the update, or using adaptive, trajectory\-dependent stepsizes\. For the unregularized greedy case, we also prove finite termination of dual\-averaged policy iteration\. The same Bellman\-operator framework extends to discounted MDPs with linear function approximation and to stochastic shortest path problems\.

## Reward\-Conditioned Reinforcement Learning

**Authors:** Michal Nauman; Marek Cygan; Pieter Abbeel

**ID:** 151928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WpXOM0WTKa>) | [PDF](<https://openreview.net/pdf?id=WpXOM0WTKa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151928>)

Single\-task RL agents are typically trained under a fixed reward function, which limits their robustness to reward misspecification and their ability to adapt to changing preferences\. We introduce Reward\-Conditioned Reinforcement Learning \(RCRL\), an off\-policy method that conditions agents on reward parameterizations while collecting experience under a single nominal objective\. By recomputing counterfactual rewards from shared replay data, RCRL exposes the agent to multiple reward objectives without additional environment interaction, connecting single\-task RL with ideas from multi\-objective and multi\-task learning\. Across single\-task, multi\-task, and vision\-based benchmarks, RCRL improves sample efficiency under the nominal reward parameterization, enables efficient adaptation to new parameterizations, and supports zero\-shot behavioral adjustment at deployment\. Our results show that RCRL provides a scalable mechanism for learning robust, steerable policies without sacrificing the simplicity of single\-task training\.

## ECHO: Terminal Agents Learn World Models for Free

**Authors:** Vaishnavi Shrivastava; Ahmed Awadallah; Dimitris Papailiopoulos

**ID:** 154932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9rkAbf5ICO>) | [PDF](<https://openreview.net/pdf?id=9rkAbf5ICO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154932>)

CLI agents are the closest thing language models have to an embodied setting: the model emits commands, the terminal executes them, and the returned stream\-\-\-stdout, errors, file contents\-\-\-records the consequences of its actions\. We argue that this stream is a supervision signal, but standard agent RL largely discards it: GRPO\-style training updates action tokens while ignoring environment responses, even though rollouts already contain them\. We introduce ECHO \(Environment Cross\-entropy Hybrid Objective\), an auxiliary loss that trains the policy to predict observation tokens alongside the policy gradient\. ECHO reuses the same forward pass, requires no additional rollouts, and turns terminal feedback into a dense signal that remains informative even on failed trajectories\.  This objective shapes the policy toward a world model of terminal dynamics, plausibly improving its priors over which actions are likely to succeed\. On TerminalBench 2, ECHO nearly doubles pass@1: Qwen3\-8B improves from 2\.70% to 5\.17%, and Qwen3\-14B from 5\.17% to 10\.79%\. From base Qwen3\-8B, ECHO\+GRPO matches expert\-SFT\-then\-GRPO on held\-out terminal tasks without the expert demonstrations required for SFT, and closes roughly half this gap on TerminalBench 2\. Without verifier rewards, ECHO can lead to self\-improvement through exploration alone, suggesting environment observations are not merely context for actions but supervision for the policy itself\.

## A Constrained Bi\-level Optimization Framework for Constrained Preference\-Based Reinforcement Learning

**Authors:** Yue Mao; Siyuan Xu; Shicheng Liu; Minghui Zhu

**ID:** 152347 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TjhQ07qEGv>) | [PDF](<https://openreview.net/pdf?id=TjhQ07qEGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152347>)

This paper studies the problem of jointly learning a reward function, a cost function, and a policy from an expert's preferences\. We formulate the problem as a constrained bi\-level optimization problem, where the upper level infers the reward and cost functions from preferences, while the lower level optimizes a policy to best align with those preferences\. To solve this problem, we propose a double\-loop algorithm, Constrained Bi\-level Optimization for Preference\-Based Reinforcement Learning \(CB\-PbRL\), which solves the lower\-level optimization problem in the inner loop and the upper\-level optimization problem in the outer loop\. We establish a theoretical guarantee that CB\-PbRL converges at a rate of $\\mathcal\{O\}\(1/\\sqrt\{K\}\)$, and we demonstrate its effectiveness across multiple simulation environments\.

## Actor\-Accelerated Policy Dual Averaging for Reinforcement Learning in Continuous Action Spaces

**Authors:** Ji Gao; Caleb Ju; Guanghui Lan; Zhaohui Tong

**ID:** 155769 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=34NGCK5xuh>) | [PDF](<https://openreview.net/pdf?id=34NGCK5xuh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155769>)

Policy Dual Averaging \(PDA\) offers a principled Policy Mirror Descent \(PMD\) framework that more naturally admits value function approximation than standard PMD, enabling the use of approximate advantage \(or Q\-\) functions while retaining strong convergence guarantees\. However, applying PDA in continuous state and action spaces remains computationally challenging, since action selection involves solving an optimization sub\-problem at each decision step\. In this paper, we propose actor\-accelerated PDA, which uses a learned policy network to approximate the solution of the optimization sub\-problems, significantly reducing runtime\. We provide a theoretical analysis that quantifies how actor approximation error impacts the convergence of PDA under suitable assumptions\. We then evaluate its performance on several benchmarks in robotics, control, and operations research problems\. Actor\-accelerated PDA achieves superior performance compared to popular on\-policy baselines such as Proximal Policy Optimization \(PPO\)\. Overall, our results take a significant step toward bridging the gap between the theoretical advantages of PDA and its practical deployment in continuous\-action problems with function approximation\.

## Know Your Task, Learn It Right: Task\-Aware Optimistic Value Learning for Multi\-Task Multi\-Agent Reinforcement Learning

**Authors:** Chang Liu; Mengyang Li

**ID:** 152319 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TxcDmV5gHx>) | [PDF](<https://openreview.net/pdf?id=TxcDmV5gHx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152319>)

Cooperative multi\-agent reinforcement learning under task variability requires both identifying which task an episode belongs to and adapting the learning algorithm to that identity\. Recent class\-aware methods address the first half of this problem by clustering trajectories into latent task classes and feeding the class label to the agent policy\. They leave the second half largely untouched: the Bellman update and the credit assignment performed by the value mixer remain identical across all task classes\. We show empirically that, even when task identity is recovered with high accuracy, the Bellman dynamics across classes diverge sharply, with simple classes saturating early and harder classes sustaining large temporal\-difference residuals and large cross\-agent value disagreement\. Building on this observation, we propose Know Your Task, Learn It Right \(KYT\), a task\-aware extension of value factorization that injects per\-class learning signal into the Bellman update itself\. KYT maintains a lightweight tracker that summarizes the per\-class TD\-error and cross\-agent value spread without any extra network, and uses the tracker in two places: an optimistic target that adds a bounded per\-class exploration bonus, and a class\-conditioned mixer that modulates credit assignment through a softplus\-gated affine layer preserving the IGM property\. Across StarCraft II micromanagement benchmarks including SMACv2 and the unit\-combination suite SurComb, KYT outperforms strong class\-aware and exploration\-aware baselines, with the largest gains concentrated on the hardest task classes that current methods underfit\.

## Mind the Gap: Information Disadvantage as a Learning Signal in Cooperative MARL

**Authors:** Chang Liu

**ID:** 154578 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWnSJlQgcy>) | [PDF](<https://openreview.net/pdf?id=CWnSJlQgcy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154578>)

In cooperative multi\-agent reinforcement learning under partial observability, agents typically differ in both their local observations and in how much value those observations let them recover\. Most existing methods treat agents symmetrically when shaping credit and exploration, ignoring this asymmetric information disadvantage\. We introduce the per\-agent value gap, a state\- and agent\-specific quantity that measures the value loss attributable to local information limits, and show that it serves as a single, measurable signal that unifies credit assignment and exploration: down\-weighting policy updates where an agent is at a strong disadvantage, and rewarding behaviors that reduce the disadvantage along the trajectory\. We instantiate this idea as \\method\{\}, which estimates the gap online with a per\-agent local value head and uses it to drive both advantage shaping and an information\-seeking intrinsic reward\. We further show that the resulting shaping reduces the variance of the policy\-gradient estimate at high\-disadvantage states under a mild correlation assumption, and that the intrinsic bonus vanishes in expectation under any stationary optimal policy, so the augmented objective remains consistent with the original cooperative objective\. On sixteen tasks across five cooperative benchmarks, \\method\{\} ranks first or statistically tied for first on fifteen of sixteen tasks \(strictly first on twelve\), with the largest gains on settings combining sparse rewards and asymmetric observability \(e\.g\., a $24\\%$ mean relative gain over the strongest baseline averaged across the three SMAC v2 tasks\)\.

## Learning in Context, Guided by Choice: A Reward\-Free Paradigm for Reinforcement Learning with Transformers

**Authors:** Juncheng Dong; Moyang Guo; Bowen He; Ethan Fang; Zhuoran Yang; Vahid Tarokh

**ID:** 152897 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PbbNvAUOLl>) | [PDF](<https://openreview.net/pdf?id=PbbNvAUOLl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152897>)

In\-context reinforcement learning \(ICRL\) leverages the in\-context learning capabilities of transformer models \(TMs\) to efficiently generalize to unseen sequential decision\-making tasks without parameter updates\.  However, existing ICRL methods rely on explicit reward signals during pretraining, which limits their applicability when rewards are ambiguous, hard to specify, or costly to obtain\. To overcome this limitation, we propose a new learning paradigm, \\emph\{In\-Context Preference\-based Reinforcement Learning\} \(ICPRL\), in which both pretraining and deployment rely solely on preference feedback, eliminating the need for reward supervision\. We study two variants that differ in the granularity of feedback: \\emph\{Immediate Preference\-based RL\} \(I\-PRL\) with per\-step preferences that generalize dueling bandits, and \\emph\{Trajectory Preference\-based RL\} \(T\-PRL\) with trajectory\-level comparisons\.  We first show that supervised pretraining, a standard approach in ICRL, remains effective under preference\-only context datasets, demonstrating the feasibility of in\-context solving unseen tasks using only preference signals\.  To further improve data efficiency,  we introduce alternative preference\-native frameworks for I\-PRL and T\-PRL that directly optimize TM policies from preference data without requiring reward signals nor optimal action labels\. Experiments on dueling bandits, navigation, and continuous control tasks demonstrate that ICPRL enables strong in\-context generalization to unseen tasks, achieving performance comparable to ICRL methods trained with full reward supervision\.

## CurveRL: Principled Distribution\-Aware Context Reweighting for LLM Reasoning

**Authors:** Ke Sun; Yizhou Zhao; Jiayi Xin; Qi Long; Weijie Su

**ID:** 149893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mSNQ3ZeCPi>) | [PDF](<https://openreview.net/pdf?id=mSNQ3ZeCPi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149893>)

Context or prompt\-level reweighting has emerged as a central algorithmic lever in Reinforcement Learning with Verified Rewards \(RLVR\) for improving the reasoning capability of large language models, yet the principle determining what constitutes an optimal weighting remains poorly understood\. We address this gap by formulating prompt reweighting as a functional derivative of a utility functional defined in the pass\-rate function space, yielding a unified optimality framework that accommodates existing schemes, including REINFORCE and GRPO\. Building on this optimality framework, we propose a distribution\-aware prompt reweighting approach, called CurveRL, based on a quantile coordinate transform, in which the weight assigned to each prompt depends not on the absolute value of pass rates but on its rank and density to reflect the distributional structure of the pass rates in the learning dynamics\. Extensive experiments across multiple benchmarks demonstrate that our proposed CurveRL consistently outperforms GRPO and other RLVR baselines\. Our study identifies context\-distribution control as a principled axis for analyzing and designing prompt\-reweighted RLVR algorithms\.

## Understanding the Effects of Neuron Dominance in Deep Reinforcement Learning

**Authors:** Zifan Wu; Qian Lin; Blake Lawlor; Haijun Zhao; Daniel Brown

**ID:** 156752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156752>)

Recent studies in deep reinforcement learning have revealed that neural networks tend to lose their capacity to adapt to new targets over the course of training\. The proliferation of inactive neurons, i\.e\., the so\-called \`\`dormant neurons'', has been identified as one source of capacity loss\. This paper investigates \\textit\{dominant neurons\}, neurons whose activation values are significantly larger than average, as a potential cause for neuron dormancy\. We demonstrate the existence of dominant neurons in a number of visual control tasks, and perform an analysis of the learning dynamics showing how dominant neurons can induce dormancy in the subsequent layer\. To gain a better understanding of this phenomenon, we examine it through the lens of representation learning and establish its connection with representation collapse\. Furthermore, this paper evaluates several mitigation strategies for dominant neurons  across a variety of visual control tasks\. Our results show that strategies that induce lower peak activation scores tend to exhibit greater representational capacity, lower dormant neuron percentage, and better performance\. Among these mitigation strategies, LayerNorm with weight decay has the strongest performance, despite its simplicity\. Moreover, switching the value learning loss from regression to a classification loss also significantly mitigates the neuron dominance issue and improves the performance\. As a potential explanation of the effectiveness of classification losses, we provide an analysis that shows how a classification loss can prevent representation collapse\.

## When Does Knowing the State Help? Diagnosing Process vs\. Outcome Reward Design

**Authors:** Wenpei Shao; Ross Jacobucci

**ID:** 152959 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P61QuZf0Po>) | [PDF](<https://openreview.net/pdf?id=P61QuZf0Po>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152959>)

Process reward models \(PRMs\) dramatically outperform outcome reward models \(ORMs\) for math reasoning and agent tasks, yet provide no benefit for chat and QA\. No theory explains why, and practitioners choose between them by expensive trial and error\. We introduce state\-lift, a diagnostic that predicts whether a PRM is worth training for a new domain — in minutes, from \~500 labeled steps, before committing to expensive reward model training\. State\-lift measures how much step quality depends on trajectory state versus action text alone, and an accompanying effective gap distinguishes two regimes: state\-noise\-dominant \(PRM essential\) and action\-gap\-dominant \(ORM sufficient\)\. Across ten domains and eleven published PRM\-ORM comparisons, state\-lift correctly predicts PRM advantage, and a minutes\-scale linear estimate matches the outcome of full Llama\-3\.1\-8B reward model training — including CaSiNo negotiation \(\+0\.055 lift at SL = 0\.22\)\. The accompanying two\-branch decision protocol turns state\-lift into an actionable PRM\-vs\-ORM workflow that runs in minutes on a single CPU\.

## What should post\-training optimize? A test\-time scaling law perspective

**Authors:** Muheng Li; Jian Qian; Wenlong Mou

**ID:** 148944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0f6gRsMJ0>) | [PDF](<https://openreview.net/pdf?id=u0f6gRsMJ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148944>)

Large language models are increasingly deployed with test\-time strategies: sample $N$ responses, score them with a reward model or verifier, and return the best\. This deployment rule exposes a mismatch in post\-training: standard objectives optimize the mean reward of a single response, whereas best\-of\-$N$ performance is governed by the upper tail of the reward distribution\. Recent test\-time\-aware objectives partly address this mismatch, but typically assume that training can use the same per\-prompt rollout budget as deployment, which is impractical when post\-training must cover many prompts while deployment can allocate much larger per\-prompt test\-time compute\. We study this budget\-mismatch regime, where only $m\\ll N$ per\-prompt rollouts are available during training but the target objective is best\-of\-$N$ deployment\. Under structural assumptions on the reward tails, we show that the policy gradient of the best\-of\-$N$ objective can be approximated from a much smaller rollout group by extrapolating upper\-tail statistics\. This yields a family of Tail\-Extrapolated estimators for best\-of\-$N$\-oriented post\-training: a simple direct estimator, Tail\-Extrapolated Advantage \(TEA\), and a fixed\-order debiased Prefix\-TEA estimator based on moment cancellation\. Experiments on instruction\-following tasks show that TEA and Prefix\-TEA improve best\-of\-$N$ performance across different language models, reward models and datasets under various training and test\-time budget settings\.

## Preference Conditioned Multi\-Objective Reinforcement Learning: Decomposed, Diversity\-Driven Policy Optimization

**Authors:** Tanmay Ambadkar; Sourav Panda; Shreyash Kale; Jonathan Dodge; Abhinav Verma

**ID:** 149722 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ntjuLx6iMB>) | [PDF](<https://openreview.net/pdf?id=ntjuLx6iMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149722>)

Multi\-objective reinforcement learning \(MORL\) seeks to train agents capable of balancing conflicting objectives\. While single preference\-conditioned policies offer a highly scalable solution, existing approaches remain brittle in practice, frequently failing to recover dense Pareto fronts\. We demonstrate that this failure stems from two structural pathologies: destructive advantage cancellation caused by premature Early Scalarization \(ES\), and representational mode collapse across the preference space\. To overcome these bottlenecks, we introduce \\toolname\{\}, a PPO\-based framework that fundamentally reorganizes multi\-objective optimization\. By preserving per\-objective learning signals through a decomposed pipeline and integrating preferences only after trust\-region stabilization \(Late\-Stage Weighting\), \\toolname\{\} improves credit assignment under conflicting objectives\. Concurrently, a scaled diversity regularizer encourages behavioral divergence proportional to preference distance\. \\toolname\{\} operates entirely within the efficient linear scalarization regime shared by standard deep MORL baselines\. By reducing information loss caused due to linear scalarization rather than relying on expensive non\-linear utility functions, it suggests that optimization bottlenecks play a significant role\. Across available standard benchmarks, including high\-dimensional and many\-objective environments, \\toolname\{\} consistently discovers broader, higher\-quality Pareto fronts than prior methods, exceeding state\-of\-the\-art hypervolume and expected utility using a single deployable policy\.

## Finite\-Sample Convergence in Networked Average Reward MARL: Decentralization Pitfalls and Entropy Remedies

**Authors:** Yizhou Zhang; Yashaswini Murthy; Laixi Shi; Adam Wierman

**ID:** 149372 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYNPFUuBkL>) | [PDF](<https://openreview.net/pdf?id=qYNPFUuBkL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149372>)

We study the problem of average reward Multi\-Agent Reinforcement Learning \(MARL\) where agents interact within a network\. Each agent in the network conducts local updates with information within its $k$\-hop neighborhood and collaboratively maximizes the overall reward of the entire network\. We first provide impossibility results in achieving convergence to the global optimal joint policies in our setting\. These impossibility results highlight the challenges of decentralized learning with local information in multi\-agent systems, namely the issues of multiagency, where each agent independently optimizes its policy, and partial observability, where agents have limited visibility into the global state\. Given these challenges which indicate that decentralized policy optimization can generally be certiﬁed only up to stationarity, we provide finite\-sample convergence guarantees for a decentralized actor\-critic algorithm with linear function approximation that converges to an approximate stationary point with small gradient norm\. To overcome such impossibility results, we further show that adding fixed\-state entropy regularization reshapes the objective landscape which leads to even stronger global convergence guarantees for our proposed actor\-critic algorithm\.

## Training Generalizable Collaborative Agents via Strategic Risk Aversion

**Authors:** Chengrui Qu; Yizhou Zhang; Nicolas Lanzetti; Eric Mazumdar

**ID:** 151685 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YmGCdpjNNh>) | [PDF](<https://openreview.net/pdf?id=YmGCdpjNNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151685>)

Many emerging agentic paradigms require agents to collaborate with one another \(or people\) to achieve shared goals\. However, existing approaches to learning policies for such collaborative problems produce brittle solutions that fail when paired with new partners\. We attribute these failures to a combination of free\-riding during training and a lack of strategic robustness\. To address these problems, we study the concept of strategic risk aversion and interpret it as a principled inductive bias for generalizable cooperation with unseen partners\. While strategically risk\-averse players are robust to deviations in their partner's behavior by design, we show that, in collaborative games,  they also \(1\) can have better equilibrium outcomes than those at classical game\-theoretic concepts like Nash, and \(2\) exhibit less or no free\-riding\. Inspired by these insights, we develop a multi\-agent reinforcement learning \(MARL\) algorithm that integrates strategic risk aversion into standard policy optimization methods\. Our empirical results across collaborative benchmarks \(including an LLM collaboration task\) validate our theory and demonstrate that our approach consistently achieves reliable collaboration with heterogeneous and previously unseen partners across collaborative tasks\.

## Uncertainty\-Guided Reward Labeling for Reinforcement Learning under Limited Feedback

**Authors:** Renhao Zhang; Shreyas Chaudhari; Bruno Silva

**ID:** 149046 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tHUPLE3JIc>) | [PDF](<https://openreview.net/pdf?id=tHUPLE3JIc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149046>)

In reinforcement learning from limited feedback \(RLLF\), only a small fraction of an offline dataset can be labeled with rewards, and the central question is \*which\* samples should be labeled to learn a strong policy from the resulting partially labeled dataset\. Prior work formalized this as a reward\-selection problem by focusing on the selection stage while treating downstream policy learning as a black box, in a regime where queried rewards are not retained for reward\-model training\. We instead study the retained\-label setting, where queried rewards can be stored and used to fit a reward model before policy learning\. We bound the suboptimality of the learned policy by two sources of error: one from offline RL on an offline dataset, and one from reward\-model uncertainty\.  Since reward selection cannot change the offline dataset, the limited labeling budget must be used to strategically reduce reward uncertainty\. Motivated by RLLF's observation that useful rewards tend to keep the agent on high\-return trajectories, we propose successor\-guided uncertainty reduction \(SURE\), which uses successor features to select rewards that are both reachable to high\-valued states and uncertainty\-reducing\. Theoretically, we derive SURE from a bound\-induced design objective and characterize its exact one\-step marginal gain\. Empirically, SURE reaches near full\-feedback performance with few reward labels across a variety of domains, yielding a strong method for feedback\-efficient reinforcement learning\.

## Breaking the Bias Barrier in Concave Multi\-Objective Reinforcement Learning

**Authors:** Swetha Ganesh; Jason Chia; Vaneet Aggarwal

**ID:** 154531 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ctg1L7RlkF>) | [PDF](<https://openreview.net/pdf?id=Ctg1L7RlkF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154531>)

While standard reinforcement learning optimizes a single reward signal, many applications require optimizing a nonlinear utility $f\(J\_1^\\pi,\\dots,J\_M^\\pi\)$ over multiple objectives, where each $J\_m^\\pi$ denotes the expected discounted return of a distinct reward function\. A common approach is concave scalarization, which captures important trade\-offs such as fairness and risk sensitivity\. However, nonlinear scalarization introduces a fundamental challenge for policy gradient methods: the gradient depends on $\\partial f\(J^\\pi\)$, while in practice only empirical return estimates $\\hat J$ are available\. Because $f$ is nonlinear, the plug\-in estimator is biased \($\\mathbb\{E\}\[\\partial f\(\\hat J\)\] \\neq \\partial f\(\\mathbb\{E\}\[\\hat J\]\)$\), leading to persistent gradient bias that degrades sample complexity\. In this work we identify and overcome this bias barrier in concave\-scalarized multi\-objective reinforcement learning\. We show that existing policy\-gradient methods suffer an intrinsic $\\widetilde\{\\mathcal\{O\}\}\(\\epsilon^\{\-4\}\)$ sample complexity due to this bias\. To address this issue, we develop a Natural Policy Gradient \(NPG\) algorithm equipped with a multi\-level Monte Carlo \(MLMC\) estimator that controls the bias of the scalarization gradient while maintaining low sampling cost\. We prove that this approach achieves the optimal $\\widetilde\{\\mathcal\{O\}\}\(\\epsilon^\{\-2\}\)$ sample complexity for computing an $\\epsilon$\-optimal policy\. Furthermore, we show that when the scalarization function is second\-order smooth, the first\-order bias cancels automatically, allowing vanilla NPG to achieve the same $\\widetilde\{\\mathcal\{O\}\}\(\\epsilon^\{\-2\}\)$ rate without MLMC\. Our results provide the first optimal sample complexity guarantees for concave multi\-objective reinforcement learning under policy\-gradient methods\.

## A Distribution Mapping Approach to Counterfactually Fair Reinforcement Learning

**Authors:** Jianhan Zhang; Jitao Wang; John D Piette; Donglin Zeng; Chengchun Shi; Zhenke Wu

**ID:** 149942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m2ZnEPnMy0>) | [PDF](<https://openreview.net/pdf?id=m2ZnEPnMy0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149942>)

Reinforcement learning \(RL\) seeks to optimize sequential decisions to maximize population\-level benefits over time\. However, when deployed in high\-stakes settings such as healthcare, RL decisions might systematically restrict some subpopulation's access to valuable resources or services in a manner contrary to the values and goals of stakeholders\. Counterfactual fairness \(CF\) offers a promising framework to address this problem based on causal reasoning\. This paper develops a data preprocessing algorithm that, when used in tandem with policy learning, enables CF in RL\. Our algorithm relies on a novel quantile distribution mapping method for sequentially estimating the counterfactual states and rewards in the data preprocessing step, subsuming common additivity assumptions used for counterfactual prediction as special case\. We theoretically prove that the per\-step level of counterfactual unfairness and infinite\-horizon suboptimality gap can be bounded under mild regularity conditions\. We also empirically test our algorithm in numerical experiments as well as in application to a real\-world interventional digital health dataset\.

## There are Levels to It: Red Teaming LLMs with Hierarchical Reinforcement Learning

**Authors:** Roman Belaire; Arunesh Sinha; Pradeep Varakantham

**ID:** 153243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MgRh8Pu9er>) | [PDF](<https://openreview.net/pdf?id=MgRh8Pu9er>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153243>)

Red teaming is essential for securing Large Language Models, yet current automated methods remain limited by templates and single\-turn attacks\. To simulate the complex, interactive nature of real\-world adversarial attacks, we introduce a novel red teaming paradigm designed to maximize expected cumulative harm through strategic interaction\. By formalizing red teaming as a Markov Decision Process in a hierarchical reinforcement learning framework, we navigate the challenges of sparse rewards and long\-horizon planning\. Our generative agent learns diverse, multi\-turn attacks using a token\-level harm reward, consistently uncovering vulnerabilities that bypass baselines\. This approach achieves a new state of the art and reframes LLM red teaming as a principled, trajectory\-based process\.

## RAHF: Reward\-Amplified Human Feedback for Closed\-Loop Policy Fine\-Tuning

**Authors:** Haoyuan Cai; Seth Zhao; Jason Zhang; Bolei Zhou

**ID:** 148691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vlvxAFUKlx>) | [PDF](<https://openreview.net/pdf?id=vlvxAFUKlx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148691>)

Policies trained on offline logs can perform well in open\-loop evaluation but fail in closed\-loop deployment, because they never learn to recover from their own mistakes\. Fine\-tuning these policies typically requires either many human demonstrations or large\-scale reinforcement learning rollouts, both of which are expensive\. We propose RAHF, a two\-stage closed\-loop fine\-tuning framework that reduces human effort by amplifying a small number of human corrections with a cheap verifiable reward\. In Stage 1, a human operator monitors the policy during closed\-loop rollout and intervenes at dangerous states, producing a small but targeted correction dataset that also keeps the training process safe\. In Stage 2, the improved policy runs without any human involvement\. At each step, the verifiable reward scores the policy's candidate proposals\. We use these reward scores to construct group\-normalized advantages and fine\-tune the policy toward the higher\-advantage proposals\. To prevent the policy from forgetting its pretrained knowledge, we propose a Policy Adaptation Module \(PAM\) that freezes the pretrained weights and learns closed\-loop corrections through a separate trainable branch\. On BridgeSim\-NavHard, RAHF with a human teacher reaches a driving score of 78\.90, surpassing all baselines including DAgger, HG\-DAgger, GRPO, and AWR\. In addition, PAM reduces forgetting and enables zero\-shot transfer to HUGSIM without any additional fine\-tuning\.

## LEAD: Length\-Efficient Adaptive and Dynamic Reasoning for Large Language Models

**Authors:** Songtao Wei; Yi Li; Zhikai Li; Xu Hu; Yuede Ji; Guanpeng Li; Feng Chen; Carl Yang; Zhichun Guo; Bingzhe Li

**ID:** 149222 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rztqc0ADFS>) | [PDF](<https://openreview.net/pdf?id=rztqc0ADFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149222>)

Large reasoning models, such as OpenAI o1 and DeepSeek\-R1, tend to become increasingly verbose as their reasoning capabilities improve\. These inflated Chain\-of\-Thought \(CoT\) trajectories often exceed what the underlying problems require, wasting compute, latency, and context budgets\. While introducing length\-based efficiency rewards during reinforcement learning offers a natural remedy, existing methods struggle with two fundamental challenges: the optimal balance between correctness and efficiency is non\-stationary throughout training, and intrinsic reasoning budgets vary drastically across problems\. Relying on static reward weights and global length constraints inevitably forces a compromise between degraded accuracy and unrealized compression\. To overcome these limitations, we propose LEAD \(Length\-Efficient Adaptive and Dynamic reasoning\), a method that replaces static heuristics with online, self\-adaptive mechanisms\. LEAD dynamically calibrates the correctness\-efficiency trade\-off at each step using a Potential\-Scaled Instability, directing optimization capacity to the most informative learning signal\. Furthermore, it estimates an adaptive per\-problem target length online based on the model’s own correct rollouts, applying a symmetric efficiency reward that penalizes both overthinking and over\-compression\. Evaluated on five mathematical reasoning benchmarks, LEAD achieves the highest accuracy and Accuracy\-Efficiency Score among RL\-trained efficient\-reasoning methods while producing substantially shorter outputs than the base model\.

## Learning When to Think: Adaptive Internal Computation for Reinforcement Learning

**Authors:** Rohit Kumar Salla; Simon Stepputtis

**ID:** 153029 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OYg4xrS03l>) | [PDF](<https://openreview.net/pdf?id=OYg4xrS03l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153029>)

As agents have to solve diverse tasks from grid\-worlds to robotics and language modeling, the difficulty of each step varies, yet policies are rigid and spend a fixed amount of compute on each step\. A natural approach is to spend compute on the harder states while saving it on easy ones, allowing agents to retain performance while saving valuable compute budgets\. To this end, we propose Adaptive Internal Computation \(AIC\), a lightweight policy architecture that iteratively refines latent states and learns when to halt using a value\-of\-computation signal\.Concretely, AIC repeatedly refines a latent state representation and learns a halting head from a value\-of\-computation signal, the per\-step gain in expected return, allowing the policy to stop refining as soon as further computation no longer improves the action it would take\. A central challenge, however, is that matched\-budget gains alone cannot establish that compute is being directed to the states that benefit the most from them\. We therefore introduce a six\-component causal evaluation protocol leveraging a targeted\-versus\-random ablation that tests whether removing compute from AIC's predicted high\-compute states hurts performance more than removing the same amount of compute from randomly chosen states, thereby validating that AIC can successfully identify high\-compute states\. Across twelve diverse tasks, including grid worlds, simulated robotics experiments, and language modeling, we demonstrate that AIC outperforms fixed\-compute policies across a set of five underlying model architectures\. In particular, architectures leveraging AIC retain or improve performance while spending about 52\\% less compute compared to their respective fixed counterparts\.

## Learning to Follow In\-Context Watermark Instructions via Self\-Distillation

**Authors:** Yepeng Liu; Tianyi Chen; Xuandong Zhao; Dawn Song; Yuheng Bu

**ID:** 150382 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iRs3boK4tO>) | [PDF](<https://openreview.net/pdf?id=iRs3boK4tO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150382>)

In\-context watermarking \(ICW\) prepends an instruction to a query asking the model to embed a statistically detectable signal in its response\. It thus equips LLMs with a watermarking interface that third parties can invoke without access to model internals\. Its reliability hinges on the LLM following the instruction without degrading answer quality, yet how well current LLMs do so has not been measured\. We introduce ICWBench, a benchmark of three verifiable ICW instruction families, each scored on both detectability and answer quality\. Evaluating 14 frontier proprietary and open\-source LLMs, we find that none of the evaluated LLMs achieves both objectives across all three families\. To address this, we propose a self\-contained two\-stage training method, requiring no distillation from a stronger model, no manual annotation, and no pre\-existing ICW IF ability\. The first stage, self\-distillation with logits perturbation \(SDLP\), uses the same base LLM as both teacher and student: an instruction\-equivalent decoding\-time logits perturbation makes the teacher follow the ICW instruction, and the student is trained to match the teacher's output distribution\. The second stage applies reinforcement learning with the automatic verifier as the reward\. Applied to Qwen3\-14B, the weakest of the 14 evaluated LLMs in ICW IF, our method raises average TPR@$1\\%$FPR across three ICW instructions from $0\.100$ to $0\.974$, achieving a more favorable trade\-off than the frontier proprietary LLMs we evaluate\.

## Finite Time Analysis of Risk\-Sensitive RL via Noisy Power Iteration

**Authors:** Waqar Mirza; Yashaswini Murthy; Laixi Shi; Eric Mazumdar; Adam Wierman

**ID:** 154039 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgJJI06sBX>) | [PDF](<https://openreview.net/pdf?id=GgJJI06sBX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154039>)

Estimating the principal eigenpair of a positive operator from stochastic evaluations gives rise to a noisy form of normalized power iteration: each step applies a sampled operator estimate and then renormalizes\. We establish finite\-time stochastic\-approximation guarantees for this procedure, working in Hilbert's projective metric, which is well\-suited to the multiplicative geometry of Perron\-\-Frobenius eigenproblems\. Our main application is risk\-sensitive average\-cost reinforcement learning \(RL\) with exponential utility\. In this setting the Bellman equations are multiplicative, and value functions are characterized by nonlinear eigenvalue problems rather than additive fixed points\. We cast both policy evaluation and control in this framework, obtaining risk\-sensitive TD\- and Q\-learning algorithms that learn from a single Markovian trajectory\. Under explicit positivity, mixing, and linear function approximation assumptions, we prove finite\-time bounds on the recovered eigenvector and eigenvalue with $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ sample complexity up to problem\-dependent constants\. The results cover both tabular and linear function approximation regimes, and through the duality between exponential utility and KL\-robust control yield finite\-time guarantees for KL\-robust average\-cost RL as well\.

## Beyond Pairs: Your Language Model is Secretly Optimizing a Preference Graph

**Authors:** Ning Liu; Chuanneng Sun; Kristina L Klinkner; Shervin Malmasi

**ID:** 150929 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eIAc9sNGjK>) | [PDF](<https://openreview.net/pdf?id=eIAc9sNGjK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150929>)

Direct Preference Optimization \(DPO\) aligns language models using pairwise preference comparisons, offering a simple and effective alternative to Reinforcement Learning \(RL\) from human feedback\. However, in many practical settings, training data consists of multiple rollouts per prompt, inducing rich preference structure that pairwise DPO fails to exploit\. Collapsing such data into independent pairs discards transitivity, introduces redundant or conflicting supervision, and can lead to unstable optimization\. We propose Graph Direct Preference Optimization \(GraphDPO\), a principled generalization of DPO that operates over directed acyclic preference graphs induced by rollout rankings\. GraphDPO encodes dominance relations as edges and optimizes a graph\-structured Plackett\-\-Luce\-inspired objective that aggregates supervision over graph neighborhoods, enforcing transitivity while recovering standard DPO as a special case\. To handle discrete or sparse signals, we introduce an equivalence\-class construction where responses with identical preferences form graph layers, and intra\-layer edges contribute zero loss, preventing spurious gradients\. Despite leveraging full graph structure, GraphDPO maintains linear per\-prompt complexity via efficient log\-sum\-exp aggregation\. We further incorporate optional ground\-truth anchoring by inserting verified solutions as dominant nodes and applying an annealed schedule that stabilizes early training while gradually relaxing oracle supervision\. Experiments on reasoning and program synthesis tasks demonstrate superior performance, suggesting that graph\-structured preference modeling is a scalable and robust alternative to pairwise and listwise alignment objectives\.

## Variance\-Optimal State Resampling for Reinforcement Learning with Verifiable Rewards

**Authors:** Yibo Wang; Yuanxin Liu; Zhaoran Wang

**ID:** 151544 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZqLrUQLTaa>) | [PDF](<https://openreview.net/pdf?id=ZqLrUQLTaa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151544>)

Reinforcement learning with verifiable rewards spends much of its rollout budget on states that yield no learning signal\. We recast this as a question about the sampling distribution itself: under a fixed rollout budget, which distribution over states minimizes the variance of the policy\-gradient estimator? The answer admits a closed\-form Neyman allocation, $\\mu\_\{\\mathrm\{var\}\}^\\pi\(s\) \\propto d^\\pi\(s\)\\,\\sigma\_\\pi\(s\)$, which connects naturally to GRPO's group\-relative advantage and induces an emergent reverse curriculum as the policy improves, with no externally imposed schedule\. Building on this principle, we propose VSR \(Variance\-driven State Resampling\), a plug\-in modification to GRPO using a prefix replay buffer and a zero\-cost variance proxy\. On mathematical reasoning benchmarks and long\-horizon agentic tasks \(Sokoban, BabyAI\), VSR outperforms GRPO and GiGPO on most benchmarks with fewer generated tokens per update\.

## Learning Process Rewards via Visitation Matching for Efficient RL

**Authors:** Raymond Tsao; Andrew Wagenmaker; Sergey Levine

**ID:** 150545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hKhu9x83el>) | [PDF](<https://openreview.net/pdf?id=hKhu9x83el>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150545>)

In many modern applications of reinforcement learning \(RL\), the natural reward for a task of interest is inherently sparse: a reward of 0 is given everywhere except when the task is completed, when a reward of 1 is given\. Training a policy to maximize such a sparse reward requires solving a challenging credit assignment problem, leading to slow or ineffective RL improvement\. We propose a simple approach to transform a sparse outcome reward into a dense process reward\. Our approach relies on training a discriminator to distinguish between previous successful and unsuccessful trajectories, and using this discriminator to incentivize the RL\-learned policy to match the state\-action visitations of successful trajectories, while avoiding those of unsuccessful trajectories\. By incentivizing the policy to match the visitations over all states, not just those that correspond to task success, this reward provides dense feedback on whether progress is being made towards task completion, and, we show, provably achieves this without changing the optimal policy\. Focusing on finetuning of robotic control policies, we demonstrate that our approach leads to significantly faster RL finetuning performance on both simulated and real\-world manipulation tasks, as compared to simply maximizing the sparse outcome reward\.

## Cornerstones or Stumbling Blocks? Deciphering the Rock Tokens in On\-Policy Distillation

**Authors:** Yuxuan Jiang; Runchao Li; Shubhashis Roy Dipta; Dawei Li; Zhao Yang

**ID:** 152055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VqAeYOsISa>) | [PDF](<https://openreview.net/pdf?id=VqAeYOsISa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152055>)

While recent work in Reinforcement Learning with Verifiable Rewards \(RLVR\) has shown that a small subset of critical tokens disproportionately drives reasoning gains, an analogous token\-level understanding of On\-Policy Distillation \(OPD\) remains largely unexplored\. In this work, we investigate high\-loss tokens, a token type that—as the most direct signal of student\-teacher mismatch under OPD's per\-token KL objective—should progressively diminish as training converges according to existing studies; however, our empirical analysis shows otherwise\. Even after OPD training reaches apparent saturation, a substantial subset of tokens continues to exhibit persistently high loss; these tokens, which we term Rock Tokens, can account for up to 50\\% of the tokens in generated outputs\. Our investigation reveals two startling paradoxes\. First, despite their high occurrence frequency providing a disproportionately large share of total gradient norms, Rock Tokens themselves remain stagnant throughout training, resisting teacher\-driven corrections\. Second, through causal intervention, we find that these tokens provide negligible functional contribution to the model's actual reasoning performance\. These findings suggest that a vast amount of optimization bandwidth is spent on structural and discourse residuals that the student model cannot or need not internalize\. By deconstructing these dynamics, we demonstrate that strategically bypassing these "stumbling blocks" can significantly streamline the alignment process, challenging the necessity of uniform token weighting and offering a more efficient paradigm for large\-scale model distillation\.

## FuRA: Full\-Rank Parameter\-Efficient Fine\-Tuning with Spectral Preconditioning

**Authors:** Yequan Zhao; Ruijie \(Ray\) Zhang; Liyan Tan; Niall Moran; Tong Qin; Zheng Zhang

**ID:** 148186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zf1vYk0XnQ>) | [PDF](<https://openreview.net/pdf?id=zf1vYk0XnQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148186>)

Both full fine\-tuning \(Full FT\) and parameter\-efficient methods like LoRA add weight updates without regard to the spectral structure that pretraining has established\. This allows noisy gradients from a small fine\-tuning distribution to freely perturb the robust features learned through pretraining\. We first identify \*spectral preconditioning\* as the key missing ingredient: reparameterizing each weight $\\mathbf\{W\}$ through its full\-rank SVD and freezing one singular basis confines every update to the pretrained column space, yielding a preconditioned optimizer that outperforms unconstrained Full FT at the same parameter count\. To make this insight practical, we propose FuRA \(\*\*Fu\*\*ll\-\*\*R\*\*ank \*\*A\*\*daptation\), which factorizes $\\mathbf\{W\}$ via a block tensor\-train decomposition $\\mathbf\{W\}=\\mathbf\{L\}\\mathbf\{S\}\\mathbf\{R\}$: the large core $\\mathbf\{L\}$ is frozen at the pretrained block\-wise SVD basis while only the small core $\\mathbf\{R\}$ and per\-block singular values $\\mathbf\{S\}$ are trained\. This single design choice simultaneously delivers full\-rank spectral preconditioning, full\-rank update capacity, and parameter, step time, memory efficiency on par with LoRA\. FuRA outperforms Full FT on LLM fine\-tuning \($\+1\.37$ on LLaMA\-3\-8B commonsense reasoning\), LLM math reinforcement learning, and VLM visual instruction tuning\. The 4\-bit quantized version QFuRA also outperforms QLoRA\.

## Distributionally Robust Token Optimization in RLHF

**Authors:** Yeping Jin; Jiaming Hu; Yannis Paschalidis

**ID:** 154916 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zSXz3TUrv>) | [PDF](<https://openreview.net/pdf?id=9zSXz3TUrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154916>)

Large Language Models \(LLMs\) tend to respond correctly to prompts that align well with the data they were trained and fine\-tuned on\. Yet, small shifts in wording, format, or language can trigger surprisingly large failures, especially on multi\-step reasoning problems\. To address this problem, we propose a $\\textbf\{Distributionally Robust Token Optimization \(DRTO\)\}$ approach, which combines token\-level Reinforcement Learning from Human Feedback \(RLHF\) with  $\\textit\{Distributionally Robust Optimization \(DRO\)\}$\. DRTO constructs f\-divergence ambiguity sets over span\-level actor losses, providing a principled way to emphasize difficult response segments during policy optimization\. Empirically, DRTO enhances consistency under distribution shifts in multiple reasoning benchmarks among different tasks\.

## Quotient\-Categorical Representations for Bellman\-Compatible Average\-Reward Distributional Reinforcement Learning

**Authors:** Ege C\. Kaya; Aliasghar Pourghanitazehshahri; Vijay Gupta; Abolfazl Hashemi

**ID:** 149377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qVHRXJt8X2>) | [PDF](<https://openreview.net/pdf?id=qVHRXJt8X2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149377>)

Average\-reward reinforcement learning requires estimating the gain and the bias, which is defined only up to an additive constant\. This makes direct distributional analogues ill\-posed on the real line\. We introduce a quotient\-space formulation in which state\-indexed bias laws are identified up to a common translation, together with a categorical parameterization that respects this symmetry\. On this quotient\-categorical space, we define a projected average\-reward distributional operator and show that it is well\-defined, non\-expansive in a coordinate Cram\\'er metric, and admits fixed points\. We then study sampled recursions whose mean\-field maps are asynchronous relaxations of this operator\. In an idealized centered\-reward setting, a one\-state temporal\-difference update enjoys almost sure convergence together with finite\-iteration residual bounds under both i\.i\.d\. and Markovian sampling\. When the gain is unknown, we augment the recursion with an online gain estimator, and prove non\-expansiveness and Markovian convergence of the resulting coupled scheme\. Finally, we show that synchronous exact updates are gain\-independent at the quotient\-law level, isolating a structural contrast between ideal quotient distributions and practical fixed\-grid categorical representations\.

## Learning to Trigger: Reinforcement Learning at the Large Hadron Collider

**Authors:** Zixin Ding; Shaghayegh Emami; Giovanna Salvi; Cecilia Tosciri; Abhijith Gandrakota; Jennifer Ngadiuba; Nhan Tran; Christian Herwig; David W Miller; Yuxin Chen

**ID:** 148470 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xahR4qVXvQ>) | [PDF](<https://openreview.net/pdf?id=xahR4qVXvQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148470>)

High\-throughput scientific facilities such as the Large Hadron Collider depend on real\-time event filtering \(\\textit\{triggering\}\) under tight constraints on bandwidth, latency, and storage\. In practice, trigger menus are largely static and hand\-tuned and can become suboptimal as detector conditions, pileup, and background composition drift over time\. We cast online threshold tuning as a sequential decision\-making problem: a reinforcement learning agent ingests streaming summaries of recent rates and signal\-sensitive features and updates trigger thresholds to maximize signal efficiency while tracking a target background rate within a tolerance band\. We adapt Group\-Filtered Policy Optimization \(GFPO\) to streaming control and introduce two variants \(GFPO\-F, GFPO\-FR\) that enforce background rate feasibility during training\. On a benchmark that emulates realistic collider operation, we study two representative triggers: a total transverse energy \($H\_\{T\}$\) trigger sensitive to pileup variation, and an anomaly\-detection \(AD\) trigger based on reconstruction loss for rare or non\-standard  signatures\. On Monte Carlo streams, our agent increases the fraction of in\-tolerance time intervals by 38\\% \($H\_T$\) and 30\\% \(AD\), with a cumulative gain of up to 5\\% in conditional signal efficiency\. Transferring from simulation to \\emph\{real\} collision data \(CMS Run 283408\), the same agent, without fine\-tuning, achieves a 40\\% \($H\_T$\) and 25\\% \(AD\) in\-tolerance improvement over baselines, with an additional 1\\% signal\-efficiency gain on both triggers\. To our knowledge, this is the \\textit\{first\} demonstration of RL\-based trigger control on real Large Hadron Collider collision data\.

## Iterative Gumbel Planning for Continuous Control

**Authors:** Shaohuai Liu; Weirui Ye; Yilun Du; Le Xie

**ID:** 150597 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gxzYBTetUi>) | [PDF](<https://openreview.net/pdf?id=gxzYBTetUi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150597>)

Search\-based planning is a powerful policy improvement paradigm in reinforcement learning, with milestone successes on discrete\-action domains through the AlphaZero and MuZero families\. Extending it to continuous control, however, faces a structural mismatch between the search operator and the policy class: search at each state evaluates a finite candidate set and returns a discrete distribution, while the parametric Gaussian policy commonly used in continuous control is a continuous density\. We prove that distilling the search output into a Gaussian induces a non\-vanishing projection error that inflates policy variance and produces a return gap that persists even when the policy mean is locally optimal, and is not closed by additional search compute or data\. Inspired by the iterative refinement of MPPI in continuous control, we propose \\textbf\{Iterative Gumbel Planning \(IGP\)\}, which adapts this principle to a discrete policy class\. IGP represents the policy as a per\-dimension factorized categorical distribution aligned with the search support, eliminating the projection error and reducing the residual approximation to a bounded discretization error controllable by the grid resolution\. Joint candidates are drawn by Gumbel Top\-$K$ sampling without replacement, avoiding the $V^\{\|A\|\}$ combinatorial explosion of joint discretization, and search\-refine iteration runs for multiple rounds at the same state\. On DMControl and HumanoidBench, IGP achieves state\-of\-the\-art performance, with improved sample efficiency and lower temporal action variance at evaluation\.

## Personalized and Collaborative Online LQR via Thompson Sampling

**Authors:** Shivam Bajaj; Prateek Jaiswal; Vijay Gupta

**ID:** 153480 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L3Lu7OTtL9>) | [PDF](<https://openreview.net/pdf?id=L3Lu7OTtL9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153480>)

Reinforcement learning \(RL\) is well known to be data\-intensive, and recent works have proposed leveraging data from similar systems to improve sample efficiency\. In this work, we focus on the collaborative Linear Quadratic Regulator \(LQR\) setting and study the problem of learning under heterogeneous system dynamics\. Due to the presence of a heterogeneity\-induced additive bias, most existing collaborative methods are suitable only for low heterogeneity regimes and exhibit suboptimal performance under large heterogeneity\. Based on the principle of Thompson sampling \(TS\), we propose an algorithm that, by leveraging data from other agents, yields a \\emph\{personalized\} controller for every agent without incurring any additive heterogeneity\-induced bias, i\.e\., with sublinear Bayes regret even under large heterogeneity\. Under high heterogeneity regimes, we establish that our algorithm incurs $\\tilde\{\\mathcal\{O\}\}\( T^\{1\-0\.5\\epsilon\}\\sqrt\{\\Delta\}\)$ cumulative regret, where $T$ denotes the time horizon, $\\epsilon\\in\[0,1\]$ is a user\-defined personalization parameter, and $\\Delta$ denotes an upper bound on the maximum dissimilarity among the agents' dynamics\. Our algorithm and analysis also generalize the special case of no heterogeneity\. In particular, under no heterogeneity, we establish that our algorithm incurs $\\mathcal\{O\}\(\\sqrt\{T/M\}\)$ cumulative regret\. From a distributed implementation perspective, our method incurs only logarithmic communication overhead\. Additionally, our algorithm outperforms methods that do not personalize data from other agents and, in certain regimes, also outperforms methods that do not utilize any data from other agents\.

## Multi\-Objective Reinforcement Learning Using Routed Ensembles and Trajectory Attribution

**Authors:** Zhenshuo Zhang; Ruoxuan Xiong; Hongyang Zhang

**ID:** 154005 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gu5Cac1bXm>) | [PDF](<https://openreview.net/pdf?id=Gu5Cac1bXm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154005>)

Multi\-objective reinforcement learning \(MORL\) is a fundamental problem for modern AI, with applications spanning robotics, LLMs, and reasoning\. A central challenge is to learn policies that balance competing objectives, such as speed versus energy in robotics, or helpfulness versus honesty in alignment\. Optimal policies can vary sharply with the preferred objective weights, and the severity of this variation depends crucially on the degree of misalignment among objectives, making per\-preference learning sample\-inefficient\. To formalize this, we introduce an objective\-conflict coefficient and use it to derive near\-optimal regret bounds for online MORL that quantify the impact of misalignment on learning efficiency\. Motivated by this analysis, we propose routed ensemble policy learning , an algorithm that maintains a small set of basis policies and dynamically routes trajectories to the policy with the highest potential reward\. We further design a scalable, kernel\-based attribution algorithm that estimates how feedback signals from one set of trajectories influence policy learning on others\. Unlike existing attribution methods, our approach captures nonlinear interactions, such as synergy and antagonism between trajectories, to explain objective conflict\. We extensively evaluate our approach across diverse environments and benchmarks: routed ensembles improve average performance by 4\.3\\% over MORL baselines on several environments from the Meta\-World and MO\-Gymnasium benchmarks, and kernel\-based attribution improves correlation with leave\-one\-out analysis over existing baselines by 50\\%\. When applied to downstream task selection, kernel\-based attribution yields a 27\\% improvement in reward over baseline attribution methods\.

## NitroBox: Lightning\-Fast Sandbox for Large\-Scale RL Training

**Authors:** Yuzhou Nie; Ruilin Zhou; Zhaorun Chen; Jingyang Zhang; Yan Shao; Hongwei Li; Bo Li; Dawn Song; Wenbo Guo

**ID:** 148578 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wmjiv6thuV>) | [PDF](<https://openreview.net/pdf?id=wmjiv6thuV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148578>)

Recent work on agentic training efficiency has mainly focused on improving learning algorithms, rollout strategies, or model\-hardware co\-design\. However, these approaches overlook an important source of training latency: the sandbox that runs the environments\. Recent studies show that creating, executing, and resetting containers accounts for an important portion of the rollout process in RL training, substantially slowing down overall training\. This overhead largely stems from the centralized management mechanisms \(e\.g\., DAEMON\) of existing sandboxes, along with additional features \(e\.g\., multi\-tenancy\) that are unnecessary for reinforcement learning \(RL\)\. Moreover, existing sandboxes are designed for general\-purpose isolated execution, making them a poor fit for the requirements of RL rollout and training\. We propose NitroBox, a novel sandbox system purpose\-built for agentic RL that significantly accelerates the rollout and training process\. Technically speaking, we first comprehensively redesign NitroBox's lifecycle to eliminate the dependency on DAEMON, so that every sandbox instance is fully independent during creation, startup, and reset \(e\.g\., via rootless full\-namespace isolation\)\. Furthermore, we introduce a copy\-on\-write mechanism to enable fast startup across multiple instances\. Second, we knock off features that are time\-consuming but unnecessary for RL — such as multi\-tenancy — while preserving the core functionality and security guarantees needed for RL training\. Finally, we introduce some RL\-nature features to further improve efficiency, such as optional CRIU\-based process checkpoint saving and restoring for mid\-trajectory branching\. Our experiments show that NitroBox is faster than Docker across the entire lifecycle: 10\.6× faster in sandbox creation, 24\.6× in reset, and 19\.1× in deletion\. When training Qwen2\.5\-Coder\-32B\-Instruct with GRPO at c=32 concurrency, end\-to\-end wall\-clock training time drops from 40\.6 hours to 28\.4 hours when replacing Docker with NitroBox, while preserving the same task pass rate\.

## HDCS: Hierarchy Discovery and Critic Shaping for Reinforcement Learning with Automaton Specification

**Authors:** Duo XU; Faramarz Fekri

**ID:** 156745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156745>)

Training reinforcement learning \(RL\) agents by scalar reward signals is often infeasible when an environment has sparse and non\-Markovian rewards\. Deterministic finite\-state automaton \(DFA\) provides a streamlined method for specifying tasks in reinforcement learning \(RL\) that surpass the limitations of traditional discounted return formulations\. However, existing RL algorithms designed to address DFA tasks face unresolved challenges, hindering their practical application\. One key issue is that subgoals in the DFA may exhibit hidden hierarchical structures, with some macro\-subgoals comprising multiple micro\-subgoals in certain orders\. Without understanding this hierarchy, RL algorithms may struggle to efficiently solve tasks involving such macro\-subgoals\. Additionally, the sparse reward problem remains inadequately addressed\. Previous approaches, such as potential\-based reward shaping, often encounter inefficiencies or result in suboptimal solutions\.
To address these challenges, we propose a novel RL framework designed to uncover the hierarchical structure of subgoals and accelerating the solving of DFA tasks without changing the original optimal policies, short as HDCS\. The framework operates in two phases: first, a hierarchical RL method is used to identify the prerequisites of subgoals and build the hierarchy; second, given any task specification \(DFA\), the subgoal hierarchy is incorporated into task DFA to make a product DFA, and then a simple and novel critic shaping approach is proposed to accelerate the satisfaction of product DFA, which does not change optimal policies of the original problem\. The effectiveness of HDCS is demonstrated through experiments conducted across various domains\. Especially, compared with representative baselines, the critic shaping can have 2X or 3X acceleration on task solving\.

## Efficient and Transferable Agentic Knowledge Graph RAG via Reinforcement Learning

**Authors:** Junhong Lin; Shicheng Liu; Jinyeop Song; Song Wang; Julian Shun; Yada Zhu

**ID:** 151304 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bSGKwc24We>) | [PDF](<https://openreview.net/pdf?id=bSGKwc24We>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151304>)

Knowledge\-graph retrieval\-augmented generation \(KG\-RAG\) couples large language models \(LLMs\) with structured, verifiable knowledge graphs \(KGs\) to reduce hallucination and provide reasoning traces\. However, current KG\-RAG systems often rely on fixed pipelines of multiple LLM modules \(e\.g\., planning, reasoning, and responding\), which inflate inference costs and tie performance to specific graph schemas\. To address this, we introduce KG\-R1, an agentic framework that optimizes KG\-RAG through reinforcement learning \(RL\)\. Unlike modular workflows, KG\-R1 uses a single agent that interacts with KGs as its environment, learning to retrieve information at each step and incorporating it into its reasoning and generation in a unified process\. Across Knowledge\-Graph Question Answering \(KGQA\) benchmarks, KG\-R1 demonstrates both efficiency and transferability—using Qwen 2\.5\-3B, KG\-R1 improves answer accuracy with fewer generation tokens than prior multi\-module workflow methods that use much larger foundation or fine\-tuned models\. Furthermore, KG\-R1 exhibits strong plug\-and\-play capability: after training, maintaining accuracy on unseen KGs without retraining\. These properties make KG\-R1 a promising KG\-RAG framework for real\-world deployment\. Our code is publicly available at anonymous\.4open\.science/r/KG\-R1\-B881/\.

## One for All: A Non\-Linear Transformer can enable Cross\-Domain Generalization for In\-Context Reinforcement Learning

**Authors:** Bowen He; Juncheng Dong; Lin Lin; Xiang Cheng

**ID:** 151574 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZZh6M076fq>) | [PDF](<https://openreview.net/pdf?id=ZZh6M076fq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151574>)

A central challenge in reinforcement learning \(RL\) is to learn models that generalize beyond the tasks on which they are trained, a goal traditionally pursued through multi\-task and meta RL\. Recently, transformer architectures have emerged as a promising approach, enabling adaptation to new tasks via in\-context learning without explicit parameter updates\. From a functional perspective, a transformer can be viewed as a functional operator that maps a context to a task\-specific function\. It is thus fundamental to understand and design this operator to support stronger generalization in RL\. In this work, we address this resulting question of generalization from a kernel\-based perspective by establishing a connection between non\-linear transformers and kernel\-based temporal difference learning\. By interpreting the transformer as performing regression in a Reproducing Kernel Hilbert Space \(RKHS\), we show that value functions from different domains can be represented using a shared set of weights, provided they lie within the same RKHS\. Experiments on multiple MetaWorld domains support this interpretation, demonstrating convergence of the temporal\-difference objective\.

## Information\-Directed Offline\-to\-Online Reinforcement Learning

**Authors:** Keru Chen

**ID:** 154972 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9YV37OfwpJ>) | [PDF](<https://openreview.net/pdf?id=9YV37OfwpJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154972>)

Offline\-to\-online reinforcement learning first warm\-starts a policy from a fixed offline dataset and then improves it with limited online interaction\. Offline data reduces uncertainty, but it does not remove the need for exploration; it changes what remains to be explored\. We formalise this residual uncertainty by the conditional mutual information \\$I\(\\chi;\\tau\_\{1:T\}\\mid\\mathcal\\\{D\\\}\_N\)\\$ between a learning target \\$\\chi\\$ and the online trajectories after conditioning on the offline dataset\. This view leads naturally to information\-directed sampling \(IDS\), a family parameterised by \\$\\eta\\ge 0\\$ that selects actions by trading off instantaneous regret against information gain\. We prove a generic offline\-to\-online Bayesian regret bound for IDS through a ratio certificate: any information\-ratio bound satisfied by a reference Thompson\-sampling policy over the same randomised policy class is inherited by IDS\. In a known\-dynamics Bayesian linear\-reward model, the conditional mutual information has a log\-determinant form, and vanilla IDS \(\\$\\eta=0\\$\) satisfies \\$\\widetilde O\\\(Hd\\min\\\{\\sqrt T,\\,T\\sqrt\\\{C^\\dagger\\\_\{\\beta,\\mathrm\\\{IDS\\\}\_0\}\(N,T\)/N\\\}\\\}\\\)\\$, where the coverage coefficient is tied to the visitation distribution induced by vanilla IDS itself\. We also identify a warm\-start regime with a dominated but informative probe in which vanilla IDS selects the probe while Thompson sampling never does, giving a constant\-factor Bayesian regret separation\. Controlled bandit experiments and D4RL offline\-to\-online experiments support this mechanism: IDS is most beneficial when offline data is informative but leaves biased or low\-probability residual uncertainty that can be resolved by targeted online actions\.

## High Entropy Regularization Leads to Symmetry Equivariant Policies in Dec\-POMDPs

**Authors:** Johannes Forkel; Constantin Ruhdorfer; Michael Beukman; Andreas Bulling; Jakob Foerster

**ID:** 154447 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DU3r4vMx02>) | [PDF](<https://openreview.net/pdf?id=DU3r4vMx02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154447>)

We prove that in any Dec\-POMDP, sufficiently high entropy regularization ensures that the policy gradient flow with tabular softmax parametrization always converges, for any initialization, to the same joint policy, and that this joint policy is equivariant w\.r\.t\. all symmetries of the Dec\-POMDP\. In particular, policies coming from different initializations will be fully compatible, in that their cross\-play returns are equal to their self\-play returns\. Through extensive evaluation of independent PPO, arguably the standard baseline deep multi\-agent policy gradient algorithm, in the Hanabi, Overcooked and Yokai environments, we find that the entropy coefficient has a massive influence on the cross\-play returns between independently trained policies, and that the decrease in self\-play returns coming from increased entropy regularization can often be counteracted by greedifying the learned policies after training\. In Hanabi in particular we achieve a new SOTA in inter\-seed cross\-play this way\. While we give examples of Dec\-POMDPs in which one cannot learn the optimal symmetry equivariant policy this way, both our theoretical and empirical results suggest that one should consider far higher entropy coefficients during hyperparameter sweeps in Dec\-POMDPs than is typically done\.

## A Multi\-Fidelity Control Variate Approach for Policy Gradient Estimation

**Authors:** Xinjie Liu; Cyrus Neary; Kushagra Gupta; Wesley Suttle; Christian Ellis; Ufuk Topcu; David Fridovich\-Keil

**ID:** 156737 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156737>)

Many reinforcement learning \(RL\) algorithms are impractical for deployment in operational systems or for training with computationally expensive high\-fidelity simulations, as they require large amounts of data\. Meanwhile, low\-fidelity simulators—such as reduced\-order models, heuristic reward functions, or generative world models—can cheaply provide useful data for RL training, even if they are too coarse for direct sim\-to\-real transfer\. We propose multi\-fidelity policy gradients \(MFPGs\), an RL framework that mixes a small amount of data from the target environment with a control variate formed from a large volume of low\-fidelity simulation data to construct an unbiased, variance\-reduced estimator for on\-policy policy gradients\. We instantiate the framework by developing a practical, multi\-fidelity variant of the classical REINFORCE algorithm\. We show that under standard assumptions, the MFPG estimator guarantees asymptotic convergence of multi\-fidelity REINFORCE to locally optimal policies in the target environment, and achieves faster finite\-sample convergence rates compared to training with high\-fidelity data alone\. We evaluate the MFPG algorithm across a suite of simulated robotics benchmark tasks in scenarios with limited high\-fidelity data but abundant off\-dynamics, low\-fidelity data\. In our baseline comparisons, for scenarios where low\-fidelity data are neutral or beneficial and dynamics gaps are mild to moderate, MFPG is, among the evaluated off\-dynamics RL and low\-fidelity\-only approaches,the only method that consistently achieves statistically significant improvements in mean performance over a baseline trained solely on high\-fidelity data\. When low\-fidelity data become harmful, MFPG exhibits the strongest robustness against performance degradation among the evaluated methods, whereas strong off\-dynamics RL methods tend to exploit low\-fidelity data aggressively and fail substantially more severely\. An additional experiment in which the high\- and low\-fidelity environments are assigned anti\-correlated rewards shows that MFPG can remain effective even when the low\-fidelity environment exhibits reward misspecification\. Thus, MFPG not only offers a reliable and robust paradigm for exploiting low\-fidelity data, e\.g\., to enable efficient sim\-to\-real transfer, but also provides a principled approach to managing the trade\-off between policy performance and data collection costs\.

## DualKV: Shared\-Prompt Flash Attention for Efficient RL Training with Large Rollouts and Long Contexts

**Authors:** Jiading Gai; Shuai Zhang; Xiang song; Yuyang \(Bernie\) Wang; George Karypis

**ID:** 148696 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=viyAwqIA4H>) | [PDF](<https://openreview.net/pdf?id=viyAwqIA4H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148696>)

Modern RL post\-training methods such as GRPO and DAPO train on $N$ response sequences of $R$ tokens sampled from a shared prompt of $P$ tokens, but standard FlashAttention replicates all $P$ prompt tokens $N$ times across both forward and backward passes \-\-\- duplicating compute and memory on identical hidden states\. In large\-rollout, long\-context RL training \($N\{\\geq\}16$, $P\{\\geq\}8\\text\{K\}$\), this redundancy dominates the policy update cost\. We observe that in decoder\-only models, causal masking makes prompt representations invariant across sequences at every layer, so all per\-token operations \(norms, projections, MLP\) and attention can process the prompt once \-\-\- a property not yet exploited at the kernel level for training\. We propose \\textbf\{DualKV\}, the first FlashAttention kernel variant that eliminates shared\-prompt replication during RL training, via \(1\) fused CUDA forward and backward kernels that iterate over two disjoint KV regions \-\-\- shared context and per\-sequence response \-\-\- in a single kernel launch, and \(2\)\~a data\-pipeline redesign in veRL that repacks $N\(P\{\+\}R\)$ tokens into $P\{\+\}NR$ tokens per micro\-batch, extending the token reduction from attention to the entire model by a factor $\\rho = N\(P\{\+\}R\)/\(P\{\+\}NR\)$\. DualKV is mathematically equivalent to standard attention and introduces no approximation\. On Qwen3\-8B GRPO training with 8$\\times$H100 GPUs \($N\{=\}32$, 8K\-context\), DualKV achieves $1\.63$\-\-$2\.10\\times$ policy\-update speedup, enables $2\\times$ larger micro\-batches, and raises MFU from $36\\%$ to $76\\%$\. Similar gains hold for DAPO \($2\.47\\times$ speedup, $77\\%$ MFU\)\. At 30B MoE scale on 16$\\times$H100, DualKV achieves $3\.82\\times$ policy\-update and $3\.38\\times$ end\-to\-end step speedup over FlashAttention \(which requires 4\-way Ulysses sequence parallelism to avoid OOM\)\.

## Compositional Policy Optimization with Language Models

**Authors:** Wensen Mao; Yuanlin Duan; He Zhu

**ID:** 149110 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=so8irbBgTF>) | [PDF](<https://openreview.net/pdf?id=so8irbBgTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149110>)

Large language models \(LLMs\) possess remarkable ability to understand natural language descriptions of complex robotics environments\. Earlier studies have shown that LLM agents can use a predefined set of skills for robot planning in long\-horizon tasks\. However, the requirement of prior knowledge of the skill set required for a given task constrains its applicability and flexibility\. We present a novel approach L2S \(short for Language2Subtasks\) to leverage the generalization capabilities of LLMs to decompose the description of a complex task in natural language into definitions of reusable subtasks\. Each subtask is defined by an LLM\-generated dense reward function and a termination condition, which in turn lead to effective subtask training and chaining\. However, LLMs lack detailed insight into the specific low\-level control intricacies of the environment, such as threshold parameters within the generated reward and termination functions\. To address this uncertainty, L2S \(1\) enables LLM reflection feedback loop to improve task decomposition and code generation, and \(2\) trains parameter\-conditioned subtask policies that perform well in a broad spectrum of parameter values\. As the impact of these parameters for one subtask on the overall task becomes apparent only when its following subtasks are trained, L2S selects the most suitable parameter value during the training of the subsequent subtasks to effectively mitigate the risk associated with incorrect parameter choices\. During training, L2S autonomously accumulates a subtask library from continuously presented tasks and their descriptions, using guidance from the LLM agent to effectively apply this subtask library in tackling novel tasks\. Our experimental results show that L2S is capable of generating reusable subtasks to solve a wide range of robot manipulation tasks\.

## OpenWebRL: Demystifying Online Multi\-turn Reinforcement Learning for Visual Web Agents

**Authors:** Rui Yang; Qianhui Wu; Yuxi Chen; Hao Bai; Wenlin Yao; Hao Cheng; Baolin Peng; Huan Zhang; Tong Zhang; Jianfeng Gao

**ID:** 151597 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZNrLliM4V4>) | [PDF](<https://openreview.net/pdf?id=ZNrLliM4V4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151597>)

Building capable visual web agents demands precise grounding, long\-horizon reasoning, and robust interaction with dynamic, real\-world websites\. Despite rapid progress, the strongest systems remain largely proprietary, while open agents still depend heavily on supervised post\-training over large collections of curated web trajectories\. This dependence creates a major scalability bottleneck: high\-quality demonstrations are expensive to collect, and static datasets offer limited coverage of the diverse, ever\-changing open web\. Although online reinforcement learning \(RL\) has shown promise for text\-based agents, its potential for training visual web agents directly on live websites remains largely unexplored\. In this paper, we introduce OpenWebRL, an open framework for training visual web agents with online multi\-turn RL on real websites\. OpenWebRL covers the full training pipeline, including task selection, supervised warm\-starting, live\-browser execution, multimodal context management, trajectory success judging, and efficient multi\-turn policy optimization\. Using this framework, we train OpenWebRL\-4B, which establishes a new open\-source state of the art on challenging live\-web benchmarks\. With only 0\.4K initialization trajectories and 2\.2K open\-ended training tasks, OpenWebRL\-4B achieves 67\.0% success on Online\-Mind2Web and 64\.0% on DeepShop, outperforming prior open agents of similar or larger scale and remaining competitive with proprietary systems including OpenAI and Gemini CUA\. Beyond strong benchmark performance, OpenWebRL systematically identifies the key design choices that make online RL effective for visual web agents\. Overall, our work offers a practical path toward building more capable, reproducible, and cost\-efficient open web agents\. We will release our training data, models, and code to support future research\.

## Entropy Dynamics of Agent Reinforcement Learning

**Authors:** Wendi Li; Shawn Im; Sharon Li

**ID:** 149956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lvlmhvccQi>) | [PDF](<https://openreview.net/pdf?id=lvlmhvccQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149956>)

Agentic large language models are increasingly used to solve real\-world tasks by reasoning over goals, invoking tools, and interacting with external environments\. Reinforcement learning provides a natural framework for improving these behaviors, and recent agent RL methods have achieved strong results across domains\. However, the training dynamics of agent RL remain poorly understood, limiting our ability to diagnose instabilities and design more effective training algorithms\. In this work, we identify a previously underexplored phenomenon in agent RL, which we term \\emph\{cyclical entropy eruption\}\. Unlike single\-turn reasoning RL, where entropy typically collapses and stays low, agent RL training exhibits unique recurring cycles of sharp entropy eruption and gradual subsidence\. We decompose this dynamic into three phases and provide theoretical and empirical analyses of each, explaining the mechanisms underlying its cyclical oscillation\. We further show that degenerate patterns such as sentence duplication and hallucination, once acquired during eruption, can persist and accumulate across cycles\. Motivated by these findings, we propose SEAL \(Separation\-Enhanced Agent Learning\), a lightweight auxiliary loss that separates correct and incorrect trajectories in representation space, directly targeting the root cause of entropy eruption\. Experiments across multiple benchmarks, models, and RL algorithms demonstrate that SEAL stabilizes training and yields stronger downstream agent performance\.

## Test\-Time Gradient Guidance of Flow Policies in Reinforcement Learning

**Authors:** Zhiyuan \(Paul\) Zhou; Andy Peng; Charles Xu; Qiyang Li; Jost Springenberg; Kevin Frans; Sergey Levine

**ID:** 153144 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NYzL9idgNU>) | [PDF](<https://openreview.net/pdf?id=NYzL9idgNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153144>)

Expressive continuous control policies, such as diffusion and flow models, form the backbone of recent advances in scaling imitation learning for simulated and real robot control\. While they are known to scale stably in the supervised imitation learning setting, incorporating them into reinforcement learning \(RL\) pipelines for policy improvement has proven more difficult\. It often requires specialized training objectives or back\-propagating through denoising processes, which cause well known issues with stability and affects scalability\. In this paper we study the question of whether simple policy improvement schemes at test time alone, leaving stable supervised policy training intact, can be a competitive alternative which side\-steps these issues\. To this end, we propose QGF \(Q\-Guided Flow\), a new RL algorithm that performs policy optimization entirely during test time\. QGF works by pre\-training both a reference flow policy \(via a standard behavioral cloning objective\) and a value function critic and, during test\-time, using the value gradient to guide the reference policy to generate higher\-value actions without any additional policy learning\. Empirically, QGF outperforms prior test\-time RL methods while being much cheaper to run, and is competitive with state\-of\-the\-art training\-time algorithms on single\-task and goal\-conditioned offline RL benchmarks with high\-dimensional action spaces\. Moreover, it exhibits favorable scaling with model size by avoiding the instability of actor\-critic training, offering a practical and effective alternative RL algorithm with expressive policies\.

## Factorized Spectral Representations for Reinforcement Learning

**Authors:** Junyi Wu; Dan Li

**ID:** 149364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZTX18AAiX>) | [PDF](<https://openreview.net/pdf?id=qZTX18AAiX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149364>)

Learning a compact model of the world from interaction data is central to sample\-efficient deep reinforcement learning\. Spectral representation methods have become the leading paradigm for representation learning in continuous control by taking a matrix view of the transition kernel, with state\-action pairs on one side and next states on the other, and learning a low\-rank factorization through self\-supervised contrastive objectives\. We take this view one step further\. The transition kernel is naturally a three\-mode tensor over states, actions, and next states, and a CP decomposition gives one feature map per mode\. We propose FaStR, which fits this decomposition with a noise contrastive objective, producing separate state, action, and next\-state encoders that together form a single spectral representation\. The factored form yields a smaller hypothesis class, and the sample size needed for representation learning shrinks by a factor that scales with the smaller of the state and action dimensions\. Empirically, FaStR delivers its largest gains on high\-dimensional locomotion tasks whose dynamics align with the factored structure, and the learned state encoder transfers intact across actuator shift while only the action encoder is retrained\.

## SAIR: Cost\-Efficient Multi\-Stage ML Pipeline Autoscaling via In\-Context Reinforcement Learning

**Authors:** Jianchang Su; Yifan Zhang; Shengkai Lin; Shizhen Zhao; YUSHENG ZHENG; Yiwei Yang; Wei Zhang

**ID:** 155120 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8GrzZnygOz>) | [PDF](<https://openreview.net/pdf?id=8GrzZnygOz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155120>)

Multi\-stage ML inference pipelines are difficult to autoscale because of heterogeneous resources, cross\-stage coupling, and dynamic bottleneck migration\. Production controllers ignore cross\-stage effects, and learning\-based autoscalers require offline training data that is unavailable for new pipelines\. We present SAIR, an autoscaler for the zero\-shot deployment regime that uses an LLM as an in\-context reinforcement learning controller, improving its policy online from reward\-labeled experience tuples in the LLM's context with no gradient updates\. SAIR combines Pareto\-dominance reward shaping with a provable separation margin between dominated and non\-dominated actions, Bayesian\-surprise experience retrieval, and a user\-space CUDA interception layer that delivers continuous GPU rate control with sub\-millisecond actuation overhead\. We prove a regret bound that decomposes into retrieval coverage and LLM selection components, each mapping to a concrete SAIR mechanism\. On four ML serving pipelines under three workload patterns, SAIR achieves the best or tied\-best P99 latency in every configuration \(up to 50\\% reduction over the next baseline\); billable cost is reduced through replica consolidation, and effective cost \(which captures GPU rate\-control savings under co\-location or MIG\) by up to 97\\%\. SAIR reaches 86\\% bottleneck detection accuracy without any offline training\.

## Almost Sure Convergence of Linear Temporal Difference Learning with Arbitrary Features

**Authors:** Jiuqi Wang; Shangtong Zhang

**ID:** 156657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156657>)

Temporal difference \(TD\) learning with linear function approximation \(linear TD\) is a classic and powerful prediction algorithm in reinforcement learning\. While it is well\-understood that linear TD converges almost surely to a unique point, this convergence traditionally requires the assumption that the features used by the approximator are linearly independent\. However, this linear independence assumption does not hold in many practical scenarios\. This work is the first to establish the almost sure convergence of linear TD without requiring linearly independent features\. We prove that the weight iterates of linear TD converge to a bounded set, and that the value estimates derived from the weights in that set are the same almost everywhere\. We also establish a notion of local stability of the weight iterates\. Importantly, we do not impose assumptions tailored to feature dependence and do not modify the linear TD algorithm\. Key to our analysis is a novel characterization of bounded invariant sets of the mean ODE of linear TD\.

## On the Divergence of Differential Temporal Difference Learning without Local Clocks

**Authors:** David Antrobius; Shangtong Zhang

**ID:** 152272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UJzniNLXaL>) | [PDF](<https://openreview.net/pdf?id=UJzniNLXaL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152272>)

Learning rate is a critical component of reinforcement learning \(RL\)\.     This work uses global and local clocks to distinguish two types of learning rates\.     The former is of the standard form $\\alpha\_t$ that depends only on the time step $t$ \(i\.e\., a global clock\)\.     The latter is of the form $\\alpha\_\{\\nu\(S\_t, t\)\}$,     where $\\nu\(s, t\)$ counts the number of visits to state $s$ until time $t$ \(i\.e\., a local clock\)\.     In discounted RL, an RL algorithm that is convergent with a local clock is always also convergent with a global clock, and vice versa\.     We are not aware of any counterexample\.     The key contribution of this work is to show that this nice correspondence breaks down in average\-reward RL\.     Specifically,     we construct a counterexample showing that although differential temporal difference learning is convergent with a local clock, it can diverge with a global clock\.     This counterexample closes the open problem in Wan et al\. \[2021\], Blaser et al\. \[2026\]\.

## Quest: Training Frontier Deep Research Agents with Fully Synthetic Tasks

**Authors:** Jian Xie; Tianhe Lin; Zilu Wang; Yuting Ning; Yuekun Yao; Tianci Xue; Zhehao Zhang; Zhongyang Li; Kai Zhang; Yufan Wu; Shijie Chen; Boyu Gou; Mingzhe Han; Yifei Wang; Vint Lee; Xinpeng Wei; XJ Wang; Yu Su; Huan Sun

**ID:** 150926 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eKFW4EIOJx>) | [PDF](<https://openreview.net/pdf?id=eKFW4EIOJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150926>)

Deep research agents extend the role of search engines from retrieving keyword\-matched pages to synthesizing knowledge, fundamentally changing how humans interact with information\. However, frontier systems remain proprietary, while existing open agents often generalize poorly across different task types, leaving unclear how to train a broadly capable deep research agent\. We release Quest, a family of open models \(ranging from 2B to 35B\) that serve as general\-purpose deep research agents designed to handle a wide range of search tasks, with strong capabilities in fact seeking, citation grounding, and report synthesis\. To build Quest, we propose an effective training recipe combining mid\-training, supervised fine\-tuning, and reinforcement learning\. Central to this recipe is a curated data synthesis pipeline based on unified rubric trees, which applies to different task types and enables synthesizing training data with verifiable rewards without human annotation\. In addition, Quest incorporates a built\-in context management mechanism that enables effective long\-horizon reasoning and knowledge synthesis\. Using only 8K synthesized tasks, Quest approaches or even surpasses frontier closed\-source agents across eight deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open\-weight agents\. Notably, Quest\-35B achieves 30\.7\\% on Mind2Web 2, outperforming OpenAI DeepResearch \(28\\%\) and Gemini DeepResearch \(18\\%\)\. We plan to release all the resources for further research\.

## Almost Sure Convergence Rates of Stochastic Approximation and Reinforcement Learning via a Poisson\-Moreau Drift

**Authors:** Xinyu Liu; Zixuan Xie; Shangtong Zhang

**ID:** 151239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=brmKAqSWd0>) | [PDF](<https://openreview.net/pdf?id=brmKAqSWd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151239>)

Establishing almost sure convergence rates for stochastic approximation and reinforcement learning under Markovian noise is a fundamental theoretical challenge\. We make progress towards this challenge for a class of stochastic approximation algorithms whose expected updates are contractive, a setting that arises in many reinforcement learning algorithms such as $Q$\-learning and linear temporal difference learning\. Specifically, for a power\-law learning rate $\\mathcal\{O\}\(n^\{\-\\eta\}\)$ with $\\eta \\in \(1/2, 1\)$, we obtain an almost sure convergence rate arbitrarily close to $o\(n^\{1 \- 2\\eta\}\)$\. For a harmonic learning rate $\\mathcal\{O\}\(n^\{\-1\}\)$, we obtain an almost sure convergence rate arbitrarily close to $o\(n^\{\-1\}\)$, which we argue is a strong result because it is close to the optimal rate $\\mathcal\{O\}\(n^\{\-1\}\\log\\log n\)$ given by the law of the iterated logarithm \(for a special case of i\.i\.d\. noise\)\. Key to our analysis is a novel Lyapunov drift construction that applies a Poisson\-equation based correction for Markovian noise to the well\-established Moreau\-envelope smoothing for the contractive mapping\.

## Latent Q\-Barrier Shielding for Safe In\-Context Reinforcement Learning

**Authors:** Minjae Kwon; Amir Moeini; Shangtong Zhang; Lu Feng

**ID:** 150569 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hB8HKO6xwv>) | [PDF](<https://openreview.net/pdf?id=hB8HKO6xwv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150569>)

Safe in\-context reinforcement learning \(ICRL\) adapts online from interaction history without test\-time parameter updates while controlling episode cost under a safety budget\. Under out\-of\-distribution \(OOD\) deployment shifts, pretraining\-only safe ICRL can give poor reward\-safety tradeoffs because the remaining budget affects behavior only through frozen policy conditioning, not an explicit action\-level check against predicted future cost\.  We propose a latent Q\-Barrier shield that learns a context representation, latent dynamics, and an ensemble cost critic before deployment\.  Without parameter updates, the shield infers context from history and filters or softly reweights candidate actions using the remaining budget and predicted future cost\. We prove a conditional, error\-decomposed barrier\-margin result: a Q\-Barrier\-satisfying action leaves the next latent\-budget state with an approximately budget\-safe continuation under the learned critic, up to Bellman and latent\-prediction errors\.  Across five safe ICRL benchmarks, the shield improves deployment\-time reward\-safety tradeoffs over a strong safe\-ICRL baseline: after a short context window, it achieves higher return in four of five benchmarks while matching or lowering average episode cost in all five\.

## COPRA: Conditional Parameter Adaptation with Reinforcement Learning for Video Anomaly Detection

**Authors:** Darryl Cherian Jacob; Xinyu Liu; Kai Wang; Pan He

**ID:** 151176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cQfyDaizQX>) | [PDF](<https://openreview.net/pdf?id=cQfyDaizQX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151176>)

Vision\-language models \(VLMs\) have demonstrated impressive performance in video anomaly detection \(VAD\), while providing interpretable predictions\. However, we identify a key yet underexplored VAD issue: the mismatch between training and inference in both data distribution and model configuration\. First, many VLM\-based VAD approaches rely on a static parameter paradigm after training \(or post\-adaptation\), causing them to overfit the training distribution and limiting generalization to unseen domains\.  Consequently, these methods lack effective test\-time adaptation under substantial distribution shifts, such as novel environments or previously unseen anomaly types\. Second, they treat VLMs as reasoning\-based classifiers trained on extremely sparse frames from long videos, but perform inference on densely sampled short segments via sliding windows, leading to inherent inconsistencies between training and testing\. To address these limitations, we propose COPRA, a conditional parameter adaptation framework for VLM\-based VAD\. Rather than relying on static post\-training adaptation \(e\.g\., fixed prompts or shared parameter updates\), COPRA introduces instance\-conditioned parameter adaptation, where a lightweight generator predicts input\-specific parameter updates to dynamically modulate a frozen VLM on the fly, enabling per\-segment adaptation during both training and inference\. Empirically, our method achieves strong performance on standard VAD benchmarks\. More broadly, it consistently outperforms static baselines in both in\-domain and cross\-domain settings, and further generalizes beyond VAD to unseen tasks such as multiple\-choice Video Question Answering and Dense Captioning\. These results suggest that COPRA provides an effective weight space generation mechanism for foundation models, enabling more scalable, adaptive, and context\-aware video understanding\.

## Inverse Reinforcement Learning with Just Classification and a Few Regressions

**Authors:** Lars van der Laan; Nathan Kallus; Aurelien Bibaut

**ID:** 149272 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZaXY04Gvf>) | [PDF](<https://openreview.net/pdf?id=rZaXY04Gvf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149272>)

Inverse reinforcement learning \(IRL\) seeks to recover a reward function from observed behavior, but rewards are typically only partially identified: many reward\-\-value pairs can induce the same behavior policy\. We study this problem in the maximum\-entropy, or Gumbel\-shock, model under a broad class of statewise affine normalization constraints, with anchor\-action constraints as a special case\. This leads to Generalized Policy\-to\-$Q$\-to\-Reward \(GenPQR\), a modular approach to normalized reward recovery based on policy estimation and $Q$\-evaluation via the Bellman equation; both components can be instantiated with off\-the\-shelf classification and regression methods\. We establish modular finite\-sample guarantees under general function approximation, with separate terms for policy\-estimation and $Q$\-function estimation error\. As a concrete instantiation, we study GenPQR with fitted $Q$\-evaluation, reducing IRL to policy estimation followed by regression\. In experiments, GenPQR improves on DeepPQR in reward recovery while remaining simpler and more modular\. Relative to DeepPQR, our theory is broader: it goes beyond anchor actions, accommodates large action spaces, and is not tied to a specific neural\-network architecture or training procedure\.

## Scaling Reward Modeling without Human Supervision

**Authors:** Jingxuan Fan; Yueying Li; Zhenting Qi; Dinghuai Zhang; Kianté Brantley; Sham Kakade; Hanlin Zhang

**ID:** 148389 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yD1cdr9cGj>) | [PDF](<https://openreview.net/pdf?id=yD1cdr9cGj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148389>)

Learning from feedback is an instrumental process for advancing the capabilities and safety of frontier models, yet its effectiveness is often constrained by cost and scalability\. We present a pilot study that explores scaling reward models through unsupervised approaches\. We operationalize reward\-based scaling \(RBS\), in its simplest form, as preference learning over document prefixes and suffixes drawn from large\-scale web corpora\. Its advantage is demonstrated in various aspects: despite using no human annotations, training on 11M tokens of math\-focused web data yields steady gains on RewardBench v1 and v2, and these improvements consistently transfer across diverse initialization backbones spanning model families and scales\. Across models, our method improves RewardBench v2 accuracy by up to \+7\.7 points on average, with gains of up to \+16\.1 on in\-domain math subsets and consistent improvements on out\-of\-domain safety and general subsets\. When applied to best\-of\-N selection and policy optimization, these reward models substantially improve downstream math performance and match or exceed strong supervised reward model baselines of similar size\. Furthermore, using an RBS checkpoint as a mid\-training initialization substantially amplifies gains from subsequent supervised fine\-tuning\. Overall, we demonstrate the feasibility and promise of training reward models without costly and potentially unreliable human annotations\.

## Reinforcement Learning for Diffusion LLMs with Entropy\-Guided Step Selection and Stepwise Advantages

**Authors:** Vishnu Teja Kunde; Fatemeh Doudi; Mahdi Farahbakhsh; Dileep Kalathil; Krishna Narayanan; JF Chamberland

**ID:** 154650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C2Jvfl4xzR>) | [PDF](<https://openreview.net/pdf?id=C2Jvfl4xzR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154650>)

Reinforcement learning \(RL\) has been effective for post\-training autoregressive \(AR\) language models, but extending these methods to diffusion language models \(DLMs\) is challenging due to intractable sequence\-level likelihoods\. Existing approaches therefore rely on surrogate likelihoods or heuristic approximations, which can introduce bias and obscure the sequential structure of denoising\. We formulate diffusion\-based sequence generation as a finite\-horizon Markov decision process over the denoising trajectory and derive the policy gradient that decomposes over denoising steps in terms of stepwise advantages, without requiring explicit evaluation of the sequence likelihood\. Grounded in this theorem, we develop tractable approximations for large\-scale training: \(i\) denoising steps are selected for policy updates via an entropy\-guided approximation bound, and \(ii\) stepwise advantages are estimated using a one\-step denoising completion naturally provided by the diffusion model, avoiding costly multi\-step rollouts or auxiliary value networks\. Experiments demonstrate state\-of\-the\-art results on nearly all benchmarks spanning coding, logical reasoning, and mathematical reasoning, outperforming existing RL post\-training approaches for DLMs\.

## SkillRL: Evolving Agents via Recursive Skill\-Augmented Reinforcement Learning

**Authors:** Peng Xia; Jianwen Chen; Hanyang Wang; Jiaqi Liu; Kaide Zeng; Yu Wang; Siwei Han; Yiyang Zhou; Xujiang Zhao; Haifeng Chen; Zeyu Zheng; Cihang Xie; Huaxiu Yao

**ID:** 156011 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1BZdDrOyJH>) | [PDF](<https://openreview.net/pdf?id=1BZdDrOyJH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156011>)

Large Language Model \(LLM\) agents have shown stunning results in complex tasks, yet they often operate in isolation, failing to learn from past experiences\. Existing memory\-based methods primarily store raw trajectories, which are often redundant and noise\-heavy\. This prevents agents from extracting high\-level, reusable behavioral patterns that are essential for generalization\. In this paper, we propose SkillRL, a framework that bridges the gap between raw experience and policy improvement through automatic skill discovery and recursive evolution\. Our approach introduces an experience\-based distillation mechanism to build a hierarchical skill library SkillBank, an adaptive retrieval strategy for general and task\-specific heuristics, and a recursive evolution mechanism that allows the skill library to co\-evolve with the agent's policy during reinforcement learning\. These innovations significantly reduce the token footprint while enhancing reasoning utility\. Experimental results on ALFWorld, WebShop and seven search\-augmented tasks demonstrate that SkillRL achieves state\-of\-the\-art performance, outperforming strong baselines over 15\.3% and maintaining robustness as task complexity increases\.

## $f$\-GRPO &amp; Beyond: Divergence\-Based Reinforcement Learning Algorithms for General LLM Alignment

**Authors:** Rajdeep Haldar; Lantao Mei; Guang Lin; Yue XING; Qifan Song

**ID:** 153358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LyjBw9qa3a>) | [PDF](<https://openreview.net/pdf?id=LyjBw9qa3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153358>)

Recent work shows that preference alignment objectives can be interpreted as divergence estimators between aligned \(preferred\) \\&amp; unaligned \(less\-preferred\) distributions, yielding a principled recipe for designing alignment losses\. However, this view has so far been limited to preference\-based supervision\. We extend it to general LLM alignment, including reinforcement learning with verifiable rewards \(RLVR\), where alignment feedback is given only as scalar rewards\. We introduce $f$\-Group Relative Policy Optimization \($f$\-GRPO\), a class of on\-policy RL objectives, and $f$\-Hybrid Alignment Loss \($f$\-HAL\), which combines on\-policy reward optimization with off\-policy preference supervision\. We show that these objectives estimate $f$\-divergences between reward\-aligned \\&amp; reward\-unaligned distributions induced by above\- \\&amp; below\-average reward responses, and prove expected reward improvement after alignment\. Empirically, $f$\-GRPO improves over GRPO on math\-reasoning RLVR tasks, while hybrid $f$\-HAL mitigates reward hacking in on\-policy safety alignment when verifiable rewards are unavailable and learned reward models must be used\.

## Verifying Neural Networks with Reinforcement Learning

**Authors:** Hai Duong; Thanh Le; ThanhVu Nguyen

**ID:** 152311 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U2N3YhilwS>) | [PDF](<https://openreview.net/pdf?id=U2N3YhilwS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152311>)

Formal verification can play a key role in ensuring the reliability of Deep Neural Networks \(DNNs\) deployed in safety\-critical systems\.     Modern DNN verifiers employ a branch\-and\-bound framework,     which alternates between branching \(splitting into smaller subproblems\) and     bounding \(pruning subproblems\) to efficiently explore the verification space\.     However, existing branching heuristics make greedy decisions based on static scoring functions\.     They do not anticipate long\-term efficiency or leverage the growing availability of verification data to improve performance\.  This work introduces RSB, a reinforcement learning framework that learns to refine baseline branching heuristics\.     It trains an actor\-critic architecture to maximize cumulative future rewards rather than immediate scores\.     The actor generates attention weights from observations of raw neuron features and learned graph embeddings,     which rescale baseline heuristic scores to guide neuron branching\.     Evaluation on 600 challenging instances demonstrates that RSB consistently outperforms state\-of\-the\-art branching heuristics,     solving 11\\% more instances while reducing branch exploration by 50\\%\.

## Policy Gradient Algorithms in Average\-Reward Multichain MDPs

**Authors:** Jongmin Lee; Ernest Ryu

**ID:** 154239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCz7YgJAYl>) | [PDF](<https://openreview.net/pdf?id=FCz7YgJAYl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154239>)

While there is an extensive body of research analyzing policy gradient methods for discounted cumulative\-reward MDPs, prior work on policy gradient methods for average\-reward MDPs has been limited, with most existing results restricted to ergodic or unichain settings\. In this work, we first establish a policy gradient theorem for average\-reward multichain MDPs based on the invariance of the classification of recurrent and transient states\. Building on this foundation, we develop refined analyses and obtain a collection of convergence and sample\-complexity results that advance the understanding of this setting\. In particular, we show that the proposed $\\alpha$\-clipped policy mirror ascent algorithm attains an $\\epsilon$\-optimal policy with respect to positive policies\.

## Transformers Provably Implement In\-Context Reinforcement Learning with Policy Improvement

**Authors:** Haodong Liang; Lifeng LAI

**ID:** 154590 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CRstYxsyfj>) | [PDF](<https://openreview.net/pdf?id=CRstYxsyfj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154590>)

We investigate the ability of transformers to perform in\-context reinforcement learning \(ICRL\), where a model must infer and execute learning algorithms from trajectory data without parameter updates\. We show that a linear self\-attention transformer block can provably implement policy\-improvement methods, including semi\-gradient SARSA and actor\-critic, via explicit parameter constructions\. Beyond existence, we design a teacher\-mimicking training procedure, analyze its gradient\-flow dynamics, and establish the first convergence guarantee in the ICRL literature: under suitable richness conditions on the training MDP distribution, gradient flow converges locally and exponentially to an optimal parameter manifold corresponding to the desired RL update\. Empirically, training transformers on randomly generated tabular MDPs confirms these predictions: the learned models recover the parameter structure of our explicit constructions and, when deployed on unseen MDPs, deliver strong in\-context control performance\. Together, these results illuminate how transformer architectures internalize and execute classical reinforcement learning algorithms in context, bridging mechanistic understanding and training dynamics in ICRL\.

## Fast Rates for Offline Contextual Bandits with Forward\-KL Regularization under Single\-Policy Concentrability

**Authors:** Qingyue Zhao; Kaixuan Ji; Heyang Zhao; Quanquan Gu

**ID:** 149055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tDL6QlELOi>) | [PDF](<https://openreview.net/pdf?id=tDL6QlELOi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149055>)

\*Kullback\-Leibler\* \(KL\) regularization is ubiquitous in reinforcement learning \(RL\) algorithms in the form of \*reverse\* or \*forward\* KL\. Recent studies have demonstrated $\\epsilon^\{\-1\}$\-type fast rates for RL under reverse KL regularization, in contrast to the standard $\\epsilon^\{\-2\}$\-type sample complexity\. However, for forward\-KL\-regularized objectives, existing statistical analyses are either not applicable or resulting in $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ slow rates\. We take the first step towards addressing this problem via a streamlined analysis of forward\-KL\-regularized offline contextual bandits\. We give the first $\\tilde\{O\}\(\\epsilon^\{\-1\}\)$ upper bounds in tabular and general function approximation settings, both under notions of \*single\-policy concentrability\*\. In particular, our convex\-analytical pipeline unifies these settings by exploiting the pessimism principle in a novel way and completely bypasses the proof routines in previous works based on the mean\-value theorem, which might be of independent interest\. Moreover, we provide rate\-optimal lower bounds, manifesting the tightness of our upper bounds in terms of statistical rates\. Our lower bounds also demonstrate that the forward\-KL\-regularized sample complexity recovers the unregularized slow rate in the low\-regularization regime, similarly to the reverse\-KL regularization\.

## Rethinking Ratio\-Based Trust Regions for Policy Optimization in Multi\-Agent Reinforcement Learning

**Authors:** Chulabhaya Wijesundara; Andrea Baisero; Zhongheng Li; Gregory D Castanon; Alan S Carlin; Christopher Amato

**ID:** 148870 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uZ0Ls2oCg3>) | [PDF](<https://openreview.net/pdf?id=uZ0Ls2oCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148870>)

Centralized training with decentralized execution \(CTDE\) is a standard framework for cooperative multi\-agent policy\-gradient reinforcement learning, allowing agents to learn from joint information while acting from local observations\. Ratio\-based trust\-region methods such as Multi\-Agent Proximal Policy Optimization \(MAPPO\) and Multi\-Agent Simple Policy Optimization \(MASPO\) update decentralized actors using per\-agent probability ratios weighted by joint advantage estimates\. Teammate non\-stationarity increases the variance of these advantages, which in turn increases the variance in the local ratio updates\. This exposes two method\-specific failure modes: MAPPO's additive clipping removes gradients for outlier samples and weakens recovery from policy drift, while MASPO's soft quadratic penalty can allow probability collapse\. We introduce Multi\-Agent Ratio Symmetry \(MARS\), a novel policy optimization objective that replaces these additive ratio\-based trust\-region mechanisms with a multiplicatively symmetric geometric barrier\. MARS preserves corrective gradients while assigning unbounded cost as probability ratios approach zero\. Across 47 tasks spanning eight multi\-agent environments, including novel JAX benchmarks PaxMen and AeroJAX, MARS matches or exceeds MAPPO and MASPO in aggregate environment\-level performance\. Ablations show that these gains arise from the geometry of the symmetric barrier rather than from flexible trust\-region boundaries alone\.

## MaxIM: Maximally Informative Incremental Summarization via Reinforcement Learning

**Authors:** Jihwan Jeong; Guy Tennenholtz; Yinlam Chow; Chih\-wei Hsu; Craig Boutilier

**ID:** 152443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T6lIK4rfd3>) | [PDF](<https://openreview.net/pdf?id=T6lIK4rfd3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152443>)

AI systems must often maintain bounded memory of unbounded interaction histories\. However, optimizing the memory representation, and its updates, for downstream task utility is difficult for standard reinforcement learning \(RL\) due to severe credit assignment bottlenecks induced by sparse, delayed rewards\. We introduce MaxIM \(Maximally Informative Incremental Memory\), a framework that formulates incremental summarization as a capacity\-constrained, information\-theoretic reward\-shaping problem\. Grounded in value suboptimality bounds, we prove that minimizing sequential information loss requires maximizing the predictive log\-likelihood of future, task\-relevant targets \(predictive sufficiency\)\. We introduce a recursive consistency condition to ensure summaries are grounded by maximizing mutual information with the observed history\. We mitigate credit assignment issues with a parameterized critic that computes step\-wise variational lower bounds for dense reward shaping\. Empirical evaluation on long\-horizon benchmarks shows that MaxIM outperforms state\-of\-the\-art baselines on comprehensive autorater metrics and downstream task utility, without expensive human preference labels\.

## Safe\-PG\-LQR: Provably Safe, Convergent and Optimal Model\-Free Linear Quadratic Regulator with Hard Constraints

**Authors:** Vipul Sharma; Wesley Suttle; S Sivaranjani

**ID:** 150373 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iYjSjfIVcU>) | [PDF](<https://openreview.net/pdf?id=iYjSjfIVcU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150373>)

The linear quadratic regulator \(LQR\) is a canonical optimal control problem where recent work has established global convergence guarantees for model\-free policy gradient methods\. However, designing model\-free algorithms that enforce hard constraints throughout learning remains an open challenge\. Existing approaches are either partially model\-based, enforce soft constraints through Lagrangian relaxations, or project pretrained policies onto the constraint set, sacrificing hard constraint satisfaction or convergence guarantees of the underlying algorithms\. In this work, we develop principled model\-free policy gradient methods for LQR problems with hard constraints\. Our key idea is to parameterize the policy class using a truncated stochastic policy so that hard constraints are satisfied by construction, then perform policy optimization entirely within this  class\. We prove that the resulting LQR objective over the proposed truncated policy class satisfies a weak gradient\-dominance property in both the undiscounted and discounted settings\. We leverage this property to develop model\-free policy\-gradient algorithms that maintain zero violation of the encoded hard constraints at each iteration, and converge to an approximately globally optimal policy within the proposed safe policy class\.

## Breaking the Grid: Distance\-Guided Reinforcement Learning in Large Discrete Action Spaces

**Authors:** Heiko Hoppe; Fabian Akkerman; Wouter van Heeswijk; Maximilian Schiffer

**ID:** 151813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XosdW9LFxs>) | [PDF](<https://openreview.net/pdf?id=XosdW9LFxs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151813>)

Reinforcement Learning \(RL\) is increasingly applied to large\-scale decision\-making problems like logistics, scheduling, and recommender systems, but existing algorithms struggle with the curse of dimensionality in such large discrete action spaces\. We propose Distance\-Guided Reinforcement Learning \(DGRL\), combining Sampled Dynamic Neighborhoods and Distance\-Based Updates to enable efficient RL in problems with up to $10^\{20\}$ actions\. Unlike prior methods, DGRL performs stochastic volumetric exploration and transforms policy optimization into a stable regression task, decoupling gradient variance from action space cardinality\. On structured tasks, DGRL provably guarantees local value improvement\.DGRL naturally generalizes to hybrid continuous\-discrete action spaces\. We demonstrate performance improvements of up to 66% against state\-of\-the\-art benchmarks across regularly and irregularly structured environments, while simultaneously improving convergence speed and computational complexity\.

