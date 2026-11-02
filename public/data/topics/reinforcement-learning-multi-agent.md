# Reinforcement Learning / Multi\-agent

强化学习 / 多智能体

155 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## NashDreamer: Model\-Based Reinforcement Learning for Zero\-Sum Imperfect\-Information Games

**Authors:** Tomáš Holeček; Viliam Lisy

**ID:** 151300 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bTFUsffZ8O>) | [PDF](<https://openreview.net/pdf?id=bTFUsffZ8O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151300>)

_Abstract unavailable from the accessible public sources._

## Qubrio: High\-Performance Quantum Compilation via Multi\-Agent LLM Collaboration

**Authors:** Jixuan Ruan; Zhuo Cui; Zhengding Hu; Zhongkai Yu; Xiang Fang; Yue Guan; Jason Ludmir; Phillip Weinberg; Xiu\-Zhe Luo; Sheng\-Tao Wang; Sonia L Alarcon; Hezi Zhang; Yufei Ding

**ID:** 149140 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sXWcrsoU6J>) | [PDF](<https://openreview.net/pdf?id=sXWcrsoU6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149140>)

Large Language Models \(LLMs\) offer an adaptable alternative to traditional quantum compilation heuristics, which bottleneck progress by demanding costly manual redesigns whenever hardware evolves\. However, naive single\-pass LLM approaches fail under the unique challenges introduced by quantum compilation\. We introduce Qubrio, a practical agentic framework that significantly reduces heuristic redesigns through a three\-level decomposition\. By \(1\) partitioning programs into sequential operation stages, \(2\) deploying specialized agents for placement, routing and optimization, and \(3\) using disaggregated feedback for precise error correction, our system reliably navigates complex physical constraints\.  Beyond serving as a direct compiler, our LLM framework also uncovers novel strategies that facilitate convoy\-style shuttling, substantially enhancing hardware concurrency without sacrificing fidelity\. We further integrate these strategies into the previous state\-of\-the\-art \(SOTA\) compiler, recovering a significant fraction of the LLM's performance advantages\. On realistic workloads, our compiler achieves significant improvements in hardware runtime and program fidelity over the SOTA baseline PowerMove, seamlessly adapting to new hardware capabilities\. Qubrio features an open user interface for practical use, with its anonymized repository available for double\-blind review at https://anonymous\.4open\.science/r/Qubrio\-486C\.

## MoRSE: Task\-Oriented Multi\-Agent System with Mixture of Role\-Subtask Experts

**Authors:** Peiwen Li; Shiyang Zhang; Yangtian Zhang; Sizhuang He; David van Dijk; Rex Ying

**ID:** 155161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7p7CMbiFxE>) | [PDF](<https://openreview.net/pdf?id=7p7CMbiFxE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155161>)

Large language model\-based multi\-agent systems have recently shown strong potential for complex, long\-horizon tasks\. However, existing methods mainly rely on coarse prompt\-level differentiation without parameter adaptation for diverse subtasks, resulting in insufficient inter\-agent heterogeneity and limited specialized capability that bottleneck performance on tasks with complex requirements\. To address this, we introduce a Task\-Oriented Multi\-Agent System with Mixture of Role\-Subtask Experts \(MoRSE\) that distinguishes agents with \(role, subtask\)\-conditional specialization at both the task structure and parameter levels\. To make agents' responsibility explicit at the task structure level, we formulate a task\-oriented multi\-agent system that decomposes each task into a dependency\-aware Directed Acyclic Graph of subtasks and assigns each agent a specific \(role, subtask\), introducing task\-level specialization across collaborating agents\. Additionally, to address the diverse role and subtask demands that a single shared base model cannot satisfy, we propose a dynamic Mixture of \(role, subtask\) LoRA Experts module with a prototype\-based semantic router for subtasks, augmenting agents with parameter\-level specialization on a shared LLM substrate cost\-effectively\. Then, to co\-optimize experts and router stably for open\-ended tasks, we further propose a hierarchical group\-relative policy optimization with two\-layer credit assignment that disentangles expert quality from routing quality\. Experiments on code\-generation benchmarks across three backbones demonstrate the effectiveness of our approach, with notable improvements in both whole\-task and step\-wise performance and great generalization potential in out\-of\-distribution scenarios\.

## Auction\-Based Online Policy Adaptation for Evolving Objectives

**Authors:** Guru Shabadi; Kaushik Mallik

**ID:** 153035 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OV5qcOHgej>) | [PDF](<https://openreview.net/pdf?id=OV5qcOHgej>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153035>)

We consider multi\-objective reinforcement learning problems where objectives come from an identical family\-\-\-such as the class of reachability objectives\-\-\-and may appear or disappear at runtime\. Our goal is to design adaptive policies that can efficiently adjust their behaviors as the set of active objectives changes\. To solve this problem, we propose a modular framework where each objective is supported by a selfish local policy, and coordination is achieved through a novel \*auction\*\-based mechanism: policies bid for the right to execute their actions, with bids reflecting the urgency of the current state\. The highest bidder selects the action, enabling a dynamic and interpretable trade\-off among objectives\. Going back to the original adaptation problem, when objectives change, the system adapts by simply adding or removing the corresponding policies\. Moreover, as objectives arise from the same family, identical copies of a parameterized policy can be deployed, facilitating immediate adaptation at runtime\. We show how the selfish local policies can be computed by turning the problem into a general\-sum Markov game, where the policies compete against each other to fulfill their own objectives\. To succeed, each policy must not only optimize its own objective, but also reason about the presence of other goals and learn to produce calibrated bids that reflect relative priority\. Under mild assumptions, we prove the existence of Nash equilibria where dishonest bidding leads to suboptimal outcome, and the most urgent objectives win control automatically\. In our implementation, the policies are trained concurrently using proximal policy optimization \(PPO\)\. We evaluate on two Atari games and a gridworld\-based path\-planning task with dynamic targets\. Our method achieves substantially better performance than monolithic policies trained with PPO\.

## Learning Latency\-Aware Orchestration for Multi\-Agent Systems

**Authors:** Xi Shi; Mengxin Zheng; Qian Lou

**ID:** 150759 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fbWOBQEle5>) | [PDF](<https://openreview.net/pdf?id=fbWOBQEle5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150759>)

_Abstract unavailable from the accessible public sources._

## C2G\-BENCH: A Cyber\-Physical Evaluation Benchmark for Hierarchical Reinforcement Learning in Grid\-Interactive Hyperscale Data Centers

**Authors:** Vineet Gundecha; Sahand Ghorbanpour; Sifat Abdullah; Mahasweta Chakraborti; Damien Fay; Avisek Naug; Sergey Serebryakov; Ricardo Luna Gutierrez; Soumyendu Sarkar

**ID:** 139076 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mWywbjkaJ4>) | [PDF](<https://openreview.net/pdf?id=mWywbjkaJ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139076>)

The rapid growth of generative AI is reshaping the energy footprint of modern computing infrastructure\. Hyperscale AI data centers now operate at power levels comparable to large industrial facilities, creating new challenges for grid reliability, energy procurement, and real time demand flexibility\. At the same time, their large controllable loads, cooling systems, and on site storage make them potential participants in grid services such as frequency regulation\. However, existing evaluation environments do not capture the coupled decision making required for grid interactive operation\. We introduce C2G\-BENCH, a cyber\-physical benchmark for hierarchical reinforcement learning in hyperscale data centers\. C2G\-BENCH simulates a real\-world scenario, where a 250 MW\-class hyperscale data center participates in grid frequency regulation while serving realistic AI workload demand under weather\-driven ambient conditions\. The benchmark explicitly links 15\-minute market level orchestration with 5\-second physical control, enabling agents to jointly reason over regulation commitments, workload flexibility, cooling, battery dispatch, and facility safety\. C2G\-BENCH achieves this through two coupled Gymnasium environments: C2GMacroEnv, where a high level controller bids into the regulation market, and C2GFastEnv, where a low level controller actuates the Dynamic Voltage and Frequency Scaling \(DVFS\), Coolant Distribution Unit \(CDU\) pump speed, HVAC effort, and Battery dispatch \(BESS\)\. The simulator models a 250 MW class two zone facility using seven modular physics engines covering workload, thermal, electrical, battery, grid signal, weather, and market dynamics, driven by real workload and weather traces\. We benchmark a family of rule\-based, LLM\-based &amp; RL\-based controllers for both the macro and fast environments, and evaluate them on four stress\-test environments in multiple grid markets\. Baseline results show that active low level control substantially improves tracking quality: a rule\-based macro controller paired with a RL\-based low level controller reduces the tracking RMSE from 2,737 kW to 229 kW compared with a macro only configuration, while maintaining full throughput and zero thermal violations\. These results demonstrate that C2G\-BENCH exposes meaningful cross layer tradeoffs and provides a reusable benchmark for studying safe, hierarchical control of grid interactive AI data centers\.

## Zero\-Violation Regret for Cooperative Markov Games with Coupled Instantaneous Hard Constraints

**Authors:** Jialei Liu; Ming Shi

**ID:** 149243 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rs7y3hD1Ot>) | [PDF](<https://openreview.net/pdf?id=rs7y3hD1Ot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149243>)

Safety\-critical multi\-agent systems require agents to learn coordinated behaviors while avoiding unsafe actions throughout learning\. Existing safe reinforcement learning theory has established zero\-violation guarantees for single\-agent Markov decision processes with instantaneous hard constraints, while much of safe multi\-agent reinforcement learning focuses on cumulative constraints, policy optimization, or shielding\. We study a stricter setting: cooperative Markov games with unknown dynamics and coupled instantaneous hard constraints, where a joint action must be safe at every time step of every episode\. This setting introduces challenges absent from the single\-agent case: actions that are locally safe for individual agents may be unsafe jointly, unsafe joint actions can affect future feasible regions, and naive reductions to single\-agent safe RL suffer exponential dependence on the number of agents\. We propose a graph\-structured safe learning algorithm that constructs conservative multi\-agent safety certificates and explores optimistically only within certified safe joint subgraphs\. Under structured coupling assumptions, the algorithm guarantees zero constraint violation with high probability and achieves sublinear regret against the optimal safe joint policy, with complexity depending on local interaction structure rather than the full joint action space\.

## The Best\-Laid SCHEMEs: Coordinated Sabotage and Monitoring in Multi\-Agent Systems

**Authors:** Nikolay Radev; Lennart J Haas; Benjamin Arnav; Pablo Bernabeu\-Pérez

**ID:** 155561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4f5ZeIKhaC>) | [PDF](<https://openreview.net/pdf?id=4f5ZeIKhaC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155561>)

As agentic coding systems decompose work across multiple model instances, a critical safety question is whether those instances can coordinate to achieve a hidden malicious objective while remaining aligned with user intent\. We introduce \\emph\{SCHEME\}, a benchmark of 17 task instances across 7 settings and 8 real open\-source libraries, each pairing a legitimate software\-engineering task with a covert side task\. Every setting is designed so that no proper subset of agents can succeed alone: agents must decompose a shared sabotage plan, relay partial requirements under different communication topologies, and execute mutually consistent edits, testing genuine multi\-agent coordination rather than individual capability\. Evaluating with \\emph\{GPT 5\.1 Codex\} and \\emph\{Gemini 3\.1 Pro\}, we find coordinated sabotage is already practical, with Gemini completing the covert objective while succeeding on the legitimate task in 84\\% of samples and Codex in 46\\%\. A failure analysis shows that recovery, not failure incidence, drives the model gap: both models suffer similar numbers of communication failures per trajectory, but Gemini recovers from $\\sim$73\\% of occurrences against Codex's $\\sim$56\\%\. However, the agents' code edits remain detectable: a trusted monitor flags 100\\% of Gemini and 81\\% of Codex sabotage attempts at FPR$\\le$2\\%, even without access to agent communication\. Even with stealth\-aware prompting, undetected sabotage stays at 0\-\-2\.4\\%; telling agents a monitor is present halves Gemini's sabotage success without increasing the rate of undetected sabotage\.

## A Separation Principle for Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Lucia Pezzetti; Nicolas Lanzetti; Antonio Terpin; Florian Dorfler; Giorgia Ramponi

**ID:** 149847 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrNoBqs1mU>) | [PDF](<https://openreview.net/pdf?id=mrNoBqs1mU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149847>)

We study cooperative multi\-agent reinforcement learning \(MARL\) problems in which agents evolve under decoupled noisy dynamics but are coupled via a population objective\. A canonical example is a mobility operator that orchestrates a fleet of vehicles in an urban environment to meet customer demand\. The stochastic and time\-varying nature of these problems calls for learning approaches, yet existing MARL algorithms do not scale: learning assignment and routing jointly over the full state\-action space becomes prohibitive as the number of agents grows\. By studying the problem as a control problem over probability measures, we prove a separation principle: the population\-level cost\-to\-go function is upper\-bounded by an optimal transport problem whose transportation cost is the target\-conditioned single\-agent cost\-to\-go function\. This result simplifies the multi\-agent problem to learning a single\-agent policy and coordinating the agents via optimal transport\. Thus, we introduce SALT \(Separation\-based Assignment and Learning via optimal Transport\) a family of algorithms that learn a target\-conditioned single\-agent policy using any standard RL algorithm, and then coordinate the agents via optimal transport\. Because learning occurs at the single\-agent level, SALT scales to fleet sizes where MARL baselines become intractable and transfers without retraining to fleet sizes unseen during training\. In a vehicle\-delivery experiment in south Manhattan’s road network, where MARL baselines are computationally prohibitive, SALT improves travel times by up to 20% over a shortest\-path routing heuristic and transfers without retraining to different fleet sizes\. In stochastic grid worlds, SALT reduces average travel times by more than 40% relative to MARL baselines and scales to population sizes where these methods fail\.

## HoloCode: A Code\-Centric Multi\-Agent Framework for Image\-to\-3D Scene Generation

**Authors:** Hanlin Chen; Chung\-Ching Lin; Yuyang Zhao; Dongyue Lu; Zhengyuan Yang; Xiaofei Wang; Kevin Lin; Zhendong Wang; Yu Yang; Lijuan Wang

**ID:** 152551 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SHfDjzXoTd>) | [PDF](<https://openreview.net/pdf?id=SHfDjzXoTd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152551>)

Image\-to\-3D scene generation must recover both object geometry and plausible spatial relations\. A common diffusion\-based pipeline, exemplified by SAM 3D, generates each object separately and assembles the results\. This preserves local details, but the lack of strong scene\-level constraints often causes floating objects, interpenetrations, missing contacts, or implausible relative scales\. Inspired by human designers who plan a layout before placing assets, we introduce \\ours\{\}, a code\-centric multi\-agent framework\. Given a single image and 2D localization cues, a vision\-language model \(VLM\)\-based Arranger Agent predicts executable Blender Python layout code with object identities and 3D transforms\. A Modeler Agent binds each object to geometry through asset retrieval or image\-to\-3D object generation, and a Refiner Agent renders the scene and edits the code from visual feedback\. The code representation exposes object names, positions, rotations, and scales, making generated scenes editable and interpretable\. We train the code\-generating agents using Blender Python datasets built from SAGE and 3D\-FRONT, then further optimize them with GRPO rewards for executability and spatial alignment\. Experiments in in\-domain and cross\-domain settings show that \\ourMethod\{\} improves scene\-level plausibility while preserving object fidelity\.

## Test\-time Multi\-agent Coordination by Decomposed Value Gradient Flow

**Authors:** Dongsu Lee; Haoran Xu; Amy Zhang

**ID:** 153940 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HRgPovhTAK>) | [PDF](<https://openreview.net/pdf?id=HRgPovhTAK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153940>)

_Abstract unavailable from the accessible public sources._

## The Reciprocity Gradient

**Authors:** Yue Lin; Pascal Poupart; Shuhui Zhu; Dan Qiao; Wenhao Li; Yuan Liu; Hongyuan Zha; Baoxiang Wang

**ID:** 153284 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MPZCNReQDd>) | [PDF](<https://openreview.net/pdf?id=MPZCNReQDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153284>)

_Abstract unavailable from the accessible public sources._

## Youdunit: Single\-Call Counterfactual Necessity in Multi\-Agent LLM Systems

**Authors:** Marissa Li; Stephanie Gao; Kenny Guo; Xingjian Li; William Chang; Goran Radanovic

**ID:** 151652 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z2GhavtsII>) | [PDF](<https://openreview.net/pdf?id=Z2GhavtsII>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151652>)

_Abstract unavailable from the accessible public sources._

## The Best\-Laid SCHEMEs: Coordinated Sabotage and Monitoring in Multi\-Agent Systems

**Authors:** Nikolay Radev; Lennart J Haas; Benjamin Arnav; Pablo Bernabeu\-Pérez

**ID:** 155561\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155561

[Paper](<https://openreview.net/forum?id=4f5ZeIKhaC>) | [PDF](<https://openreview.net/pdf?id=4f5ZeIKhaC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155561>)

As agentic coding systems decompose work across multiple model instances, a critical safety question is whether those instances can coordinate to achieve a hidden malicious objective while remaining aligned with user intent\. We introduce \\emph\{SCHEME\}, a benchmark of 17 task instances across 7 settings and 8 real open\-source libraries, each pairing a legitimate software\-engineering task with a covert side task\. Every setting is designed so that no proper subset of agents can succeed alone: agents must decompose a shared sabotage plan, relay partial requirements under different communication topologies, and execute mutually consistent edits, testing genuine multi\-agent coordination rather than individual capability\. Evaluating with \\emph\{GPT 5\.1 Codex\} and \\emph\{Gemini 3\.1 Pro\}, we find coordinated sabotage is already practical, with Gemini completing the covert objective while succeeding on the legitimate task in 84\\% of samples and Codex in 46\\%\. A failure analysis shows that recovery, not failure incidence, drives the model gap: both models suffer similar numbers of communication failures per trajectory, but Gemini recovers from $\\sim$73\\% of occurrences against Codex's $\\sim$56\\%\. However, the agents' code edits remain detectable: a trusted monitor flags 100\\% of Gemini and 81\\% of Codex sabotage attempts at FPR$\\le$2\\%, even without access to agent communication\. Even with stealth\-aware prompting, undetected sabotage stays at 0\-\-2\.4\\%; telling agents a monitor is present halves Gemini's sabotage success without increasing the rate of undetected sabotage\.

## A Separation Principle for Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Lucia Pezzetti; Nicolas Lanzetti; Antonio Terpin; Florian Dorfler; Giorgia Ramponi

**ID:** 149847\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149847

[Paper](<https://openreview.net/forum?id=mrNoBqs1mU>) | [PDF](<https://openreview.net/pdf?id=mrNoBqs1mU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149847>)

We study cooperative multi\-agent reinforcement learning \(MARL\) problems in which agents evolve under decoupled noisy dynamics but are coupled via a population objective\. A canonical example is a mobility operator that orchestrates a fleet of vehicles in an urban environment to meet customer demand\. The stochastic and time\-varying nature of these problems calls for learning approaches, yet existing MARL algorithms do not scale: learning assignment and routing jointly over the full state\-action space becomes prohibitive as the number of agents grows\. By studying the problem as a control problem over probability measures, we prove a separation principle: the population\-level cost\-to\-go function is upper\-bounded by an optimal transport problem whose transportation cost is the target\-conditioned single\-agent cost\-to\-go function\. This result simplifies the multi\-agent problem to learning a single\-agent policy and coordinating the agents via optimal transport\. Thus, we introduce SALT \(Separation\-based Assignment and Learning via optimal Transport\) a family of algorithms that learn a target\-conditioned single\-agent policy using any standard RL algorithm, and then coordinate the agents via optimal transport\. Because learning occurs at the single\-agent level, SALT scales to fleet sizes where MARL baselines become intractable and transfers without retraining to fleet sizes unseen during training\. In a vehicle\-delivery experiment in south Manhattan’s road network, where MARL baselines are computationally prohibitive, SALT improves travel times by up to 20% over a shortest\-path routing heuristic and transfers without retraining to different fleet sizes\. In stochastic grid worlds, SALT reduces average travel times by more than 40% relative to MARL baselines and scales to population sizes where these methods fail\.

## HoloCode: A Code\-Centric Multi\-Agent Framework for Image\-to\-3D Scene Generation

**Authors:** Hanlin Chen; Chung\-Ching Lin; Yuyang Zhao; Dongyue Lu; Zhengyuan Yang; Xiaofei Wang; Kevin Lin; Zhendong Wang; Yu Yang; Lijuan Wang

**ID:** 152551\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152551

[Paper](<https://openreview.net/forum?id=SHfDjzXoTd>) | [PDF](<https://openreview.net/pdf?id=SHfDjzXoTd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152551>)

Image\-to\-3D scene generation must recover both object geometry and plausible spatial relations\. A common diffusion\-based pipeline, exemplified by SAM 3D, generates each object separately and assembles the results\. This preserves local details, but the lack of strong scene\-level constraints often causes floating objects, interpenetrations, missing contacts, or implausible relative scales\. Inspired by human designers who plan a layout before placing assets, we introduce \\ours\{\}, a code\-centric multi\-agent framework\. Given a single image and 2D localization cues, a vision\-language model \(VLM\)\-based Arranger Agent predicts executable Blender Python layout code with object identities and 3D transforms\. A Modeler Agent binds each object to geometry through asset retrieval or image\-to\-3D object generation, and a Refiner Agent renders the scene and edits the code from visual feedback\. The code representation exposes object names, positions, rotations, and scales, making generated scenes editable and interpretable\. We train the code\-generating agents using Blender Python datasets built from SAGE and 3D\-FRONT, then further optimize them with GRPO rewards for executability and spatial alignment\. Experiments in in\-domain and cross\-domain settings show that \\ourMethod\{\} improves scene\-level plausibility while preserving object fidelity\.

## Optimizing Social Utility in Sequential Experiments

**Authors:** Ander Artola Velasco; Stratis Tsirtsis; Manuel Rodriguez

**ID:** 149723 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nrvMKHyUXB>) | [PDF](<https://openreview.net/pdf?id=nrvMKHyUXB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149723>)

_Abstract unavailable from the accessible public sources._

## EvoInspect: A Unified Self\-Evolving Multi\-Agent Framework for Industrial Hardware Inspection

**Authors:** Zhuyun Yuan; Jiming Zhang; Haoyuan Sun; Jun Yin; Qing Wang; Jian Kang; Jie Li; Yongxiang Li

**ID:** 148609 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wTp6LCV27h>) | [PDF](<https://openreview.net/pdf?id=wTp6LCV27h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148609>)

_Abstract unavailable from the accessible public sources._

## Automatic Textbook Formalization

**Authors:** Fabian Gloeckle; Ahmad Rammal; Charles Arnal; Remi Munos; Vivien Cabannes; Gabriel Synnaeve; Amaury Hayat

**ID:** 151060 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dIjnouVokl>) | [PDF](<https://openreview.net/pdf?id=dIjnouVokl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151060>)

We present a case study where an automatic AI system formalizes a textbook with more than 500 pages of graduate\-level algebraic combinatorics to Lean\. The resulting formalization represents a new milestone in textbook formalization scale and proficiency, moving from early results in undergraduate topology and restructuring of existing library content to a full standalone formalization of a graduate textbook\. The formalization comprises 130K lines of code and 5900 Lean declarations and was conducted within one week by a total of 30K Claude 4\.5 Opus agents collaborating in parallel on a shared code base via version control, simultaneously setting a record in multi\-agent software engineering with usable results\. The inference cost matches or undercuts what we estimate as the salaries required for a team of human experts, and we expect there is still the potential for large efficiencies to be made without the need for better models\. We make our code and the resulting Lean code base available open\-source\.

## Multi\-agent Collaboration with State Management

**Authors:** Mengyang Liu; Taozhi Chen; Zhenhua Xu; Xue Jiang; Yihong Dong

**ID:** 151127 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cneNwmDOF3>) | [PDF](<https://openreview.net/pdf?id=cneNwmDOF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151127>)

_Abstract unavailable from the accessible public sources._

## Market Regime Council for Dynamic Credit Assignment in Multi\-Agent LLM  Decision Systems

**Authors:** Yunhua Pei; Zerui Ge; Jin Zheng; John Cartlidge

**ID:** 148428 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xuhyMmn0D0>) | [PDF](<https://openreview.net/pdf?id=xuhyMmn0D0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148428>)

_Abstract unavailable from the accessible public sources._

## Agent2World: Learning to Generate Symbolic World Models via Adaptive Multi\-Agent Feedback

**Authors:** Mengkang Hu; Bowei Xia; Yuran Wu; Ailing Yu; Yude Zou; Qiguang Chen; Shijian Wang; Jiarui Jin; Kexin Li; Wenxiang Jiao; Yuan Lu; Ping Luo

**ID:** 155447 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5YAV5SEvXG>) | [PDF](<https://openreview.net/pdf?id=5YAV5SEvXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155447>)

_Abstract unavailable from the accessible public sources._

## Multi\-Agent Coordination via Support\-Preserving Distillation

**Authors:** Sangmin Lee; Youngju Na; Chanmi Lee; Sung\-eui Yoon

**ID:** 152690 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R9LIGIKChN>) | [PDF](<https://openreview.net/pdf?id=R9LIGIKChN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152690>)

Offline MARL increasingly relies on generative policies to model multimodal joint behavior, typically by distilling a centralized teacher into decentralized one\-step actors under the CTDE\. We identify a failure mode at the teacher training stage: standard flow\-based teachers pair noise with replay targets independently, so nearby noise samples can be routed toward conflicting coordination modes\. The teacher then produces samples between valid modes, and because the distillation loss regresses each local actor onto the conditional mean of the teacher's output given local input, this error is not absorbed but propagated to the student\. To remove this teacher\-side artifact, we propose Mode\-Support Semi\-Discrete Optimal Transport \(MoSDOT\), which summarizes multimodal replay into a finite mode support with prescribed capacities and uses conditional semi\-discrete optimal transport to assign each noise sample to a single mode before teacher training\. We additionally study a common\-randomness variant that uses a shared noise component at execution to expose the residual gap intrinsic to strict\-product execution\. On controlled diagnostics and offline MARL benchmarks, MoSDOT improves endpoint quality and routing consistency, particularly on datasets exhibiting multimodal joint behavior\.

## ROTATE: Regret\-driven Open\-ended Training for Ad Hoc Teamwork

**Authors:** Caroline Wang; Muhammad Arrasy Rahman; Benjamin Nativi; Johnny Liu; Jiaxun Cui; Yoonchang Sung; Peter Stone

**ID:** 150582 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h76k7u9S4o>) | [PDF](<https://openreview.net/pdf?id=h76k7u9S4o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150582>)

Learning to collaborate with previously unseen partners is a fundamental generalization challenge, known as Ad Hoc Teamwork \(AHT\)\. Existing methods often adopt a two\-stage pipeline: first, a fixed population of teammates is generated, and second, an AHT agent is trained to collaborate with them\. This separation limits coverage of behaviors and ignores whether the generated teammates are informative for the AHT agent to learn from\. On the other hand, AHT agents are typically trained under the assumption that the training teammate set is uncontrollable, despite the fact that its composition strongly influences generalization\. This paper presents a unified framework for AHT by reformulating the problem as an open\-ended learning process between an AHT agent and an adversarial teammate generator\. We introduce ROTATE, a regret\-driven, open\-ended training algorithm that alternates between improving the AHT agent and generating teammates that probe its collaboration deficiencies\. Experiments across Overcooked and Level\-Based Foraging tasks demonstrate that ROTATE significantly outperforms baselines on an unseen set of teammates, establishing a new standard for robust, generalizable teamwork\.

## Policy\-Level Exploration for Coordinated Multi\-Agent Reinforcement Learning

**Authors:** Yucong Zhang; Chao Yu

**ID:** 154020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GqILfCgsZe>) | [PDF](<https://openreview.net/pdf?id=GqILfCgsZe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154020>)

In multi\-agent reinforcement learning \(MARL\), agents must not only discover high\-reward behaviours but also reliably reproduce coordinated behaviours over time\. A fundamental challenge arises from a mismatch between action\-level stochastic exploration and temporally extended coordination\. To address this issue, we propose a policy\-level exploration framework with Deterministic Action Execution \(DAE\) for MARL, which shifts locally random action exploration to temporally extended policy selection via an option\-based exploration mechanism\. Specifically, at each time step, each agent selects a policy from a shared policy set\\textemdash comprising one exploitation policy and multiple exploration policies\\textemdash using a learned option policy, and actions are executed deterministically conditioned on the selected policy\. By maintaining deterministic execution under temporally extended policy selection, DAE facilitates temporally coordinated behaviours across multiple time steps\. Comprehensive experiments on four multi\-agent tasks\\textemdash Predator Prey, StarCraft II micro management challenge \(SMAC\), SMACv2, Google Research Football, and Multi\-Agent Coordination benchmark \(MACO\)\\textemdash demonstrate that DAE outperforms mainstream baselines, achieving superior sample efficiency and final learning performance\.

## Mean\-Field Control on Sparse Graphs: From Local Limits to GNNs via Neighborhood Distributions

**Authors:** Tobias Schmidt; Kai Cui

**ID:** 149972 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lod8FKUWPS>) | [PDF](<https://openreview.net/pdf?id=lod8FKUWPS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149972>)

Mean\-field control \(MFC\) offers a scalable solution to the curse of dimensionality in multi\-agent systems but traditionally hinges on the restrictive assumption of exchangeability via dense, all\-to\-all interactions\. In this work, we bridge the gap to real\-world network structures by proposing a rigorous framework for MFC on large sparse graphs\. We redefine the system state as a probability measure over decorated rooted neighborhoods, effectively capturing local heterogeneity\. Our central contribution is a theoretical foundation for scalable reinforcement learning in this setting\. We prove horizon\-dependent locality: for finite\-horizon problems, an agent's optimal policy at time t depends strictly on its \(T\-t\)\-hop neighborhood\. This result renders the infinite\-dimensional control problem tractable and underpins a novel Dynamic Programming Principle \(DPP\) on the lifted space of neighborhood distributions\. Furthermore, we formally and experimentally justify the use of Graph Neural Networks \(GNNs\) for actor\-critic algorithms in this context\. Our framework naturally recovers classical MFC as a degenerate case while enabling efficient, theoretically grounded control on complex sparse topologies\.

## The Dynamics of Policy Gradient in Social Dilemmas with Partner Selection

**Authors:** Benedict Russell; Chin\-wing Leung; Paolo Turrini

**ID:** 151912 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WxOMxfirif>) | [PDF](<https://openreview.net/pdf?id=WxOMxfirif>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151912>)

In social dilemmas self\-interested learning agents face the choice between the societal benefit of cooperation and the immediate reward of defection\. Significant evidence exists on the benefits of assortment mechanisms such as partner selection for the emergence of cooperation, but this is largely available through agent\-based simulations\. In this paper, we provide an analytical solution to the problem, studying the policy\-gradient dynamics in a multi\-agent environment with partner selection\. We show how partner selection changes the opponent distribution and hence the reward landscape, and prove this promotes cooperation under simple rules known from the literature\. In particular, we find that population variance is a necessary condition for cooperation to emerge\. Using a two\-dimensional Wiener process, we extend the dynamics to capture the stochastic effects of partner selection and the resulting opponent distribution\. We derive a sufficient condition for the population to be cooperation\-promoting and prove the existence of a stationary distribution\. Simulations confirm that the stochastic model accurately captures the policy\-gradient dynamics and clarifies how the learning rate affects the emergence of cooperation\.

## Test\-time Multi\-agent Coordination by Decomposed Value Gradient Flow

**Authors:** Dongsu Lee; Haoran Xu; Amy Zhang

**ID:** 153940\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153940

[Paper](<https://openreview.net/forum?id=HRgPovhTAK>) | [PDF](<https://openreview.net/pdf?id=HRgPovhTAK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153940>)

_Abstract unavailable from the accessible public sources._

## STAR\-Math: Multi\-Agent Mathematical Reasoning under Persistent Meta\-Strategic Supervision

**Authors:** Jiaao Wu; Xian Zhang; Hanzhang Liu; Sophia Zhang; Fan Yang; Yinpeng Dong

**ID:** 150935 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eCAxMcFzTe>) | [PDF](<https://openreview.net/pdf?id=eCAxMcFzTe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150935>)

Frontier AI models and multi\-agent systems have led to significant improvements in mathematical reasoning\. However, for problems requiring extended, long\-horizon reasoning, existing systems continue to suffer from fundamental reliability issues: hallucination accumulation, memory fragmentation, and imbalanced reasoning\-tool trade\-offs\. We introduce \*\*STAR\-Math\*\*, a multi\-agent framework that systematically addresses these challenges through meta\-level supervision and structured Reasoner\-Verifier interaction\. STAR\-Math is structured as an orchestrated state machine with nested challenge\-step\-replan loops, governed by a reasoning\-free Python orchestrator that separates control from inference and bounds error propagation through trace\-back and re\-planning\. Our key innovation is a \*\*persistent Meta\-Strategist\*\* that maintains cross\-attempt memory and exercises meta\-level control by issuing high\-level strategic guidance or mandatory directives, so the system can escape unproductive loops rather than stagnate or over\-rely on tools\. STAR\-Math achieves state\-of\-the\-art results on all eight top\-tier competition benchmarks: AIME 2025\-2026, MathArena Apex Shortlist, MathArena Apex 2025, Putnam 2025, IMO 2025, HMMT February 2026, and USAMO 2026\. It obtains perfect scores on AIMEs, Putnam, and HMMT, and shows its largest margin on Apex 2025, scoring 93\.75% compared with 80\.21% by the strongest baseline GPT\-5\.5\. Ablation studies show that the gains arise from the framework's orchestration rather than from model\-level diversity since removing key components or substituting in mixed backbones consistently weakens performance\.

## Group Perspective Matters: Regulating Debate Relationships Can Mitigate Blind Conformity in Multi\-Agent Debate

**Authors:** Hao Wu; Shoucheng Song; Chang Yao; Huaiyu Wan; Youfang Lin; Kai Lv

**ID:** 154678 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BqTbDi43uU>) | [PDF](<https://openreview.net/pdf?id=BqTbDi43uU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154678>)

Multi\-Agent Debate \(MAD\) improves the reasoning performance of Large Language Models \(LLMs\) through multi\-round interaction\. However, LLMs in MAD are highly susceptible to blind conformity\. Existing individual evaluation methods, typically based on confidence or perplexity, fail to reflect the correctness of reasoning and may even exacerbate blind conformity\. To address this, we shift the perspective from individual evaluation to group interaction\. We define mutual referencing among LLMs as \\textbf\{Debate Relationships\} and recognize that regulating these relationships is the key to mitigating blind conformity\. In this paper, we propose a novel framework for \\textbf\{D\}ynamically r\\textbf\{E\}gulating deb\\textbf\{A\}te \\textbf\{R\}elationships \(DEAR\) from the group perspective\. At first, DEAR quantifies consensus and divergence as \\textit\{group evidence\} to capture the debate state\. Then, DEAR operates through three stages: 1\) What: perceiving group consultation tendency and uncertainty; 2\) Who: introducing a Selection RL\-Agent to dynamically select reference peers; and 3\) How: adopting a Behavior RL\-Agent to adaptively adjust generation behaviors\.

## Towards High Semantic Fidelity: Hyperdimensional Symbolic Messages in Multi\-Agent Communication

**Authors:** Shoucheng Song; Youfang Lin; Chang Yao; Hao Wu; Sheng Han; Kai Lv

**ID:** 153552 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXTbANIGZW>) | [PDF](<https://openreview.net/pdf?id=KXTbANIGZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153552>)

Semantic fidelity is essential for multi\-agent communication under non\-ideal channels, comprising transmission fidelity and conversion fidelity\. Yet existing numerical and neural message formats cannot simultaneously achieve both\.  To address this, we propose a novel message format\-\\textbf\{H\}yperdimensional \\textbf\{S\}ymbolic \\textbf\{M\}essages \(HSM\), and its corresponding communication framework \\textbf\{Herm\}\.  For transmission fidelity, Herm suppresses semantic entanglement via an entity\-attribute\-value structured encoding pipeline\. For conversion fidelity, Herm first leverages a receiver\-centric ego\-binding mechanism to align semantics\. Then, a similarity\-aware dual\-branch fusion module is proposed to prevent critical semantic dilution\. To realize explicit message\-semantic conversion,  we devise an iterative decoding scheme via algebraic inverse operation\. Experiments exhibit that Herm outperforms baselines across various noisy scenarios while maintaining superior structural readability\.

## Mental\-Models for Multi\-Agent Systems

**Authors:** Hanan Gani; Lulu \(Siwen\) Shao; Manmohan Chandraker

**ID:** 153908 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HoG47ROacO>) | [PDF](<https://openreview.net/pdf?id=HoG47ROacO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153908>)

Large foundation models have accelerated progress toward general\-purpose agents that interact with humans and other agents through language and multimodal signals\. However, robust multi\-agent decision\-making requires reasoning about what other agents know, intend, and are likely to do under partial observability\. Current agentic systems often operate through prompt design, memory, or end\-to\-end behavioral shaping, but typically do not learn an explicit partner\-state representation that can be reused as a decision variable across tasks\. We introduce mental\-model\-enabled agents, a framework that equips an agent with a latent mental model of its counterpart, allowing it to infer hidden beliefs, intentions, and likely reactions from the observed history and use these inferences to guide action selection\. Our method learns an amortized recursive Theory\-of\-Mind representation, with first\- and second\-order mental\-state structure, jointly with a belief\-conditioned reward model that evaluates candidate actions relative to the inferred partner state\. A policy is then learned under this belief\-aware signal, yielding an agent that can act independently at inference time while retaining the benefits of explicit partner modeling\. We evaluate the same framework on both language\-only and multimodal benchmarks\. Across these settings, explicit mental\-state modeling consistently improves interaction quality and Theory\-of\-Mind performance over base agentic systems, showing that structured partner modeling is a useful inductive bias for general multi\-agent systems\.

## Market\-Based Runtime Resource Allocation for LLM Multi\-Agent Systems

**Authors:** Yixue Huang; Mingxin Wang; Hao Li; Hao Jiang

**ID:** 155373 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=67jpPq2Bsk>) | [PDF](<https://openreview.net/pdf?id=67jpPq2Bsk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155373>)

LLM multi\-agent systems rely on division of labor to solve complex tasks, but their execution can be blocked by contention for shared resources such as GPU test environments, CPU execution slots, and exclusive tool sessions\. Existing workflows, task allocation methods, and runtime schedulers usually arbitrate such access indirectly through workflow position, dependency structure, queue state, or resource metrics\. These criteria do not fully capture the value of satisfying a specific request, because request value is distributed across agents' local execution states and changes with tests, retries, and downstream results\. We propose a market\-based protocol for access arbitration in LLM multi\-agent systems\. Each agent converts its current plan and local execution state into a structured, budget\-constrained bid that signals relative urgency\. For asynchronous requests, an online clearing method based on optimal stopping decides when to close the clearing window, allocate access rights, settle payments, and track resource occupation until release\. Across three contention scenarios, Market reduces makespan by 5\.2\\%, 2\.5\\%, and 4\.9\\% relative to the strongest primary baselines, while improving task score by about two percentage points\.

## Risk\-Calibrated Context Selection for Healthcare Multi\-Agent Handoff

**Authors:** Manu Agrawal; Sumit Mukherjee

**ID:** 154212 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FLlWDrOo4c>) | [PDF](<https://openreview.net/pdf?id=FLlWDrOo4c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154212>)

Specialized agents collaborate by transferring memory: retrieved records, generated summaries, tool traces, and long\-running state\. In regulated domains this is a governance problem, not a retrieval problem: the receiver's task matters, but so does whether it was authorized to receive each item and whether the handoff exposed more than necessary\. We formalize minimum\-necessary context selection as a constrained submodular subset\-selection problem with an additive exposure cost and a distributional task\-success risk bound\. Our algorithm, ScopeSelect, first hard\-masks items whose layer or scope the receiver contract does not admit, then runs a cost\-benefit greedy selector against a monotone submodular utility, attaining a $\\\\frac\{1\}\{2\}\(1\-1/e\)$ approximation bound under a budget, and finally wraps threshold selection in Conformal Risk Control, giving a finite\-sample distribution\-free guarantee $\\\\mathbb\{E\}\[L\(S\_\{\\\\hat\{\\\\gamma\}\}\)\] \\\\le \\\\alpha$ on exchangeable calibration data\. We evaluate on HealthHandoff\-Bench, a synthetic benchmark with 21,600 healthcare\-agent handoff tasks across four workflows, and Synthea\-HH, a realism tier ingested from 340 Synthea\-generated FHIR bundles\. A three\-source blinded label audit compares benchmark labels, model\-generated labels, and clinical\-informatics expert review, with high agreement for sensitivity labels and policy\-boundary disagreements for necessity and authorization\. Against authorized TF\-IDF, embedding retrieval, a cross\-encoder reranker, and a calibrated LLM\-as\-selector, ScopeSelect is the only method meeting $\\\\alpha = 0\.15$ at competitive task success\. The hard\-mask safety property holds under 30% label noise, 100 adversarial attacks, and receiver\-role shift; a live\-LLM run with Claude Sonnet 4\.5 exhibits a calibration\-transfer gap that motivates per\-workflow recalibration\. We release the benchmark, Synthea\-HH pipeline, CRC calibration harness, and a signed\-handoff prototype\.

## From Chats to Markets: AgenticPay for LLM\-Powered Negotiation in Multi\-Agent Commerce

**Authors:** Xianyang Liu; Shangding Gu; Fan Xu; Manxi Wu; Boyi Li; Jun Wang; Costas J Spanos; Dawn Song

**ID:** 154687 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BjCh5p36da>) | [PDF](<https://openreview.net/pdf?id=BjCh5p36da>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154687>)

Agents based on large language models are increasingly expected to autonomously handle negotiation and transactions\. However, existing benchmarks predominantly focus on text\-only, bilateral, zero\-sum price haggling, failing to capture the complexity of real\-world commerce\. To address this gap, we introduce Agenticpay, a unified framework and benchmark for evaluating how well multimodal agents reach high\-welfare, multi\-dimensional agreements in realistic markets\. Built around four core components \( Environments, Tasks, Agents, and Metrics\), Agenticpay comprises 160 multimodal tasks spanning 4 real\-world business scenarios \(E\-commerce, Food Delivery, Ride\-hailing, and Apartment Rental\) and 8 market topologies, scaling from 1\-to\-1 bargaining to many\-to\-many \(N\-to\-N\) competitive markets\. Beyond price haggling, agents must read product images, infer each opponent's hidden preferences, and trade off multiple binding contract terms \(e\.g\., price, lease duration, return policy, delivery speed\)\. Agents communicate through multi\-round natural\-language dialogue, with each turn proposing or revising a full contract, and outcomes are scored by a utility\-based framework that rewards agreements maximizing joint welfare\. Evaluations on state\-of\-the\-art proprietary \(GPT\-5\.4, Claude Sonnet 4\.6, Gemini 3\.1 Pro Preview\) and open\-weight \(Qwen3\-VL\-32B\-Instruct, InternVL3\-38B\) multimodal models reveal substantial gaps in non\-zero\-sum value creation and market reasoning: even the strongest agent \(Gemini 3\.1 Pro Preview\) reaches a GlobalScore of only 42\.3/100, and performance consistently degrades as markets scale from bilateral to multi\-sided, with the average GlobalScore dropping by 5\.7 points and open\-weight models suffering the largest declines \(up to 11\.5 points\)\. These findings establish Agenticpay as a foundational testbed for multimodal agentic commerce\. Code and dataset are available at: https://anonymous\.4open\.science/r/AgenticPay\-4BBB/README\.md\.

## MASTARS: Multi\-Agent Sequential Trajectory Augmentation with Return\-Conditioned Subgoals

**Authors:** Jiwon Jeon; Myungsik Cho; Woojun Kim; Seongmin Kim; Woohyeon Byeon; Seungyul Han; Youngchul Sung

**ID:** 155062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8kbDxSuHS6>) | [PDF](<https://openreview.net/pdf?id=8kbDxSuHS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155062>)

The performance of offline Multi\-Agent Reinforcement Learning \(MARL\) is limited by the quality of the fixed offline dataset, motivating trajectory augmentation\. However, augmenting multi\-agent trajectories presents a fundamental challenge of the diversity–coordination  trade\-off: independent generation improves diversity but lacks coordination, while joint generation induces coordination but lacks diversity, reproducing the training distribution\. To address this challenge in multi\-agent data augmentation, we introduce MASTARS, a novel diffusion\-based framework that generates multi\-agent trajectories sequentially across agents while enforcing cross\-agent consistent coordination via the method of inpainting\. MASTARS produces trajectories that are diverse, coordinated and globally coherent\. Experiments on various benchmarks such as MPE, SMAC, and SMAC\-v2 demonstrate significant performance gains across multiple offline MARL methods\.

## Who Should Evolve? Uncertainty\-Aware Role Bottleneck Inference for Multi\-Agent LLM Training

**Authors:** Qiyu Qin; Yichen Li; Haozhao Wang; Tianzhe Xiao; Hao Zhou; Imran Razzak; Ruixuan Li

**ID:** 151857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XONEq9blMw>) | [PDF](<https://openreview.net/pdf?id=XONEq9blMw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151857>)

Reinforcement learning from trajectory\-level outcomes has become a standard approach for training role\-partitioned LLM agent pipelines, in which multiple specialized roles such as an orchestrator, a retriever, and a synthesizer collaborate to solve complex reasoning tasks\. Upon trajectory failure, existing training methods do not explicitly determine which role should receive updates, applying outcome signals to all roles indiscriminately or diffusely across the pipeline\. However, this paper identifies that failures can often be traced to a primary responsible role, which we term the \*bottleneck role\*\. This suggests that updating all roles may contaminate non\-bottleneck roles with irrelevant updates\. Therefore, an intuitive solution is to exclusively update the bottleneck role for each failed trajectory\. Unfortunately, accurately \*identifying this role is highly challenging\*, as we show that roles exhibiting visible symptoms of failure are often merely downstream victims of errors originating from other roles, rather than being the true bottleneck\. To tackle this challenge, we propose \*\*R\*\*ole \*\*I\*\*nference for \*\*S\*\*elective \*\*E\*\*volution \(\*RISE\*\), the first method that formulates per\-trajectory update\-target selection as role bottleneck inference\. Specifically, RISE leverages Beta\-binomial lower\-confidence scores to estimate role responsibility, effectively discounting uncertain evidence and suppressing updates when attribution confidence is insufficient\. Furthermore, RISE decouples the visible symptom locus from the support\-constrained responsibility target prior to applying selective role\-level training\. Empirically, across HotpotQA, 2WikiMultihopQA, and MuSiQue with Qwen2\.5\-7B and Llama3\-8B backbones, RISE consistently outperforms the strongest learning\-based baseline, with up to \*\*11\.1%\*\* relative F1 and \*\*14\.1%\*\* relative EM improvements over GiGPO on MuSiQue with Llama3\-8B\. Code is available at: \[https://anonymous\.4open\.science/status/RISE\-C0F0\]\(https://anonymous\.4open\.science/status/RISE\-C0F0\)

## Inter\-Agent Influence: Evaluating Persuasion, Deception and Coercion in Multi\-Agent Systems

**Authors:** Chandler Smith; Cecilia E Tilli; Qi Guo; Sophia Hatz; David Demitri Africa; Patricia Paskov; Christian Schroeder de Witt; Philip Torr; Lewis Hammond

**ID:** 148176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ziYeGq8OOt>) | [PDF](<https://openreview.net/pdf?id=ziYeGq8OOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148176>)

The deployment of AI agents in multi\-agent workflows enables inter\-agent influence, whereby agents strategically steer other agents’ behavior in line with a specific goal\. Such capabilities pose novel risks, as malicious agents could direct others toward harmful actions\. In this work we investigate three such capabilities –\- persuasion, deception, and coercion –\- across five realistic evaluation environments and a variety of frontier models\. We observe significant inter\-agent influence capabilities in frontier models\. In oversight environments, all tested models shifted policy\-violating decisions from rejection to approval through persuasion, deception, and coercion\. In peer\-to\-peer settings, models extracted concessions in scheduling negotiations and redirected a peer's safety research trajectory toward an attacker\-preferred direction\. While evidence is weakest for inter\-agent coercion, several frontier models independently formulated and executed coercive threats, including threats to harm a named human in the environment\. These results point to a pressing need for work on risk mitigation to promote beneficial deployments of multi\-agent systems\.

## StateLedger: Path\-Addressed External Memory for Persistent Multi\-Agent Systems

**Authors:** Geer Yang; Xixuan Liu; Bin Wu; Shaojiang Wang

**ID:** 151469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aNVVPOAxzx>) | [PDF](<https://openreview.net/pdf?id=aNVVPOAxzx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151469>)

Persistent LLM agents need memory that preserves state, provenance, validity, and evidence across long interaction histories\. We introduce StateLedger, a path\-addressed external memory substrate that stores memory as durable state evolution rather than flat retrievable items: events update canonical paths, registers absorb small changes, CommitPages record residual drift against Checkpoints, cue views bound traversal, and content\-addressed artifacts avoid evidence duplication\. We prove storage, retrieval, coalescing, and conflict\-aware ranking guarantees under explicit coverage and reader\-consistency conditions\. Empirically, StateLedger improves task performance and storage efficiency across LongMemEval, LoCoMo, and Evo\-Memory Multi\-turn, reaching 98\.8% on LongMemEval\-S, 82\.6% on LongMemEval\-M with 14\.7% durable footprint, 95\.8% LoCoMo non\-adversarial accuracy, 87\.1% unweighted success, and 93\.5% unweighted progress on Evo\-Memory\.

## Bayes\-Sufficient Compression Is Not Enough: How Communication Helps in Multi\-Agent Systems?

**Authors:** Yi Xie; Zhanke Zhou; Yi Fan; Yong Ge; Bo Han; Bo Liu

**ID:** 155601 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4MClMQl04u>) | [PDF](<https://openreview.net/pdf?id=4MClMQl04u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155601>)

Multi\-agent LLM systems often split work between a main agent with broad context and an executor subagent with limited local context\. Communication can help recover missing information, but it can also add parsing burden, distract from the local decision, or induce protocol failures\. We ask when the main agent should send a short message rather than raw context or no message, and when upgrading the main agent pays off\. We formalize this as receiver\-relative bounded coordination, where a message's value is the executor's next\-step gain minus its protocol tax\. This view yields four findings\. First, compressed messages can outperform raw context when tax savings exceed losses from omitted information or decoder mismatch\. Second, Bayes\-sufficient compression, which preserves all information needed for the optimal decision, can still be worse than raw context when a bounded executor cannot decode or operationalize its surface form\. Third, post\-message failures can be localized into externalization, absorption, and action closure, with residual error concentrating in closure even after the right content reaches the executor\. Fourth, a stronger upstream agent helps only when the executor's local view is weak enough for the added gain to exceed the added tax\. Across six benchmarks, these regimes recur: the same multi\-agent protocol raises ContextBench joint accuracy from 0\.633 to 0\.775 but lowers ToolSandbox from 0\.889 to 0\.653, helping in context\-heavy regimes and hurting in locally sufficient ones\. The same quantities drive an inference\-time selector over communication actions, improving the accuracy\-cost frontier on the two benchmarks where the full action set is evaluated\. Code and results at https://anonymous\.4open\.science/r/Communication/

## DAGent: Evaluate\-then\-Grow Planning for Deep Research Agents

**Authors:** Hanwen Liu; Yuanfu Sun; Qiaoyu Tan

**ID:** 150664 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gNnU6UhVDm>) | [PDF](<https://openreview.net/pdf?id=gNnU6UhVDm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150664>)

Deep research tasks require agents to navigate large knowledge spaces, synthesize evidence across many sources, and adapt their plans as intermediate findings emerge\. Directed acyclic graph \(DAG\)\-based multi\-agent systems are well suited to this setting because they support parallel execution and isolate each sub\-task within a focused dependency context\. Yet existing DAG\-based agents typically instantiate a task\-level plan before execution and then repair the graph only after failures or missing evidence are observed\. This Plan\-then\-Patch strategy is brittle for deep research: the system commits most strongly when its evidence is weakest, and later revisions often waste computation on branches that should not have been planned in the first place\. To bridge this gap, we propose DAGent, a DAG\-based multi\-agent framework that introduces Evaluate\-then\-Grow incremental planning\. Instead of committing to a full DAG upfront, an Orchestrator grows the task graph one batch at a time, conditioning each new expansion on confidence and uncertainty signals from completed nodes\. To support long\-horizon evidence use without overloading each sub\-task, DAGent maintains a hierarchical context layer that propagates compact QueryDocs by default while preserving full execution traces for on\-demand recall\. The cleanly recorded DAG topology in turn admits structural RL signals that an outcome\-only recipe cannot define; we instantiate this with DAGRPO, a GRPO adaptation that injects topology\-conditioned credit on Executor rollouts and a structural compliance regularization on Orchestrator plans\. Across BrowseComp\-Plus, GAIA, and xbench\-DeepSearch, DAGent surpasses the strongest open\-source baseline by 5\.3 / 5\.8 / 2\.0 points at the Qwen3\-235B\-A22B scale, with the lead replicating across four open\-source backbones from four vendors and extending to GPT\-5 at 327K context\. At the Qwen3\-8B scale, DAGRPO further improves over a same\-budget outcome\-only GRPO baseline by 3\.0 average Pass@1 points\. A same\-architecture comparison further shows that incremental, evidence\-conditioned planning recovers accuracy at lower per\-task token, tool\-call, and step footprints than its Plan\-then\-Patch counterpart, supporting the view that DAGent's gains come from more targeted evidence expansion rather than additional computation\. Anonymized code is available at \\url\{https://anonymous\.4open\.science/r/DAGent\-F2D6\}\.

## DDACOM: Dual\-Decoupled Adaptive Communication for Multi\-Agent Reinforcement Learning under Dynamic Networks

**Authors:** Yiqun Wu; QI WANG; Mengxian Li; Yongjun Xu

**ID:** 154024 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gp5eu43iRL>) | [PDF](<https://openreview.net/pdf?id=Gp5eu43iRL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154024>)

Communication enhances cooperative multi\-agent reinforcement learning \(MARL\) under partial observability\. In real networks, however, each agent's available bandwidth varies over time due to changing link quality, interference, and congestion\. Most existing MARL communication policies decide whether to transmit based on message importance or novelty, or are trained under fixed bandwidth conditions\. As a result, they cannot adapt sending frequency to bandwidth variations, leading to packet loss when bandwidth decreases or missed information when bandwidth recovers\. To address this, we propose Dual\-Decoupled Adaptive Communication \(DDACOM\)\-\-\-a framework that decouples message sending and message generation from the action policy\. The message\-sending module ranks each message by its deviation from teammates' information and the sender's history, and uses a dynamic token bucket to convert the probe\-estimated safe rate into a real\-time token budget, enabling the communication frequency to track the safe rate online\. The message\-generation module is trained independently with receiver\-side attention feedback and counterfactual marginal value, ensuring each transmitted message meaningfully contributes to cooperation\. On SMAC and MPE, DDACOM achieves leading cooperative performance among baseline methods\. Under dynamic network conditions in ns\-3 simulation, DDACOM sustains over \\\(95\\%\\\) safe\-rate utilization and packet loss below \\\(0\.3\\%\\\) while reducing communication frequency to less than half of full broadcast, confirming its adaptability to runtime network variation\.

## ORBIT: A Framework for Multi\-Agent Security Evaluations

**Authors:** Ben Hagag; William L Anderson; Srija Chakraborty; Christian Schroeder de Witt

**ID:** 139033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p1h5pUhxUi>) | [PDF](<https://openreview.net/pdf?id=p1h5pUhxUi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139033>)

Multi\-agent LLM systems are increasingly deployed for complex, long\-horizon tasks or emerge as a natural consequence of agents interacting in the wild\. Yet, they often have significant security vulnerabilities: the flexible protocols that enable task generalization also expose novel threats, from cascading prompt injection to inter\-agent collusion\. Progress in defending against these threats has been slowed by a lack of empirical evaluations, requiring bespoke environment development for every new defense and making standardized comparison impossible\. Existing evaluations address isolated threat models or single\-agent settings, but none jointly vary attack, defense, and architecture across realistic multi\-agent environments\. To address this gap, we introduce ORBIT, a configurable evaluation framework for empirical multi\-agent security research, built on UK AISI's Inspect\. ORBIT provides configurable communication topologies, memory, scheduling, and agent roles\. It supports four threat types \(indirect prompt injection, misuse, compromised agents, collusion\) and four defense strategies \(security prompting, guardian agents, monitors, dual\-LLM patterns\)\. The benchmark suite spans five scenario families covering browser use, computer use, agentic coding, customer service, and cooperative allocation\. Using ORBIT, we conduct controlled experiments varying defenses, attacks, topologies, and models\. We find evidence of significant gaps in defense transferability across threats, security–performance tradeoffs, and interactions between architectural choices and defense effectiveness\. To accelerate empirical multi\-agent security work, we make ORBIT available open\-source at: https://anonymous\.4open\.science/r/orbit\-D1A9\.

## MemCode: Discrete Semantic Representations for Long\-Term Agent Memory

**Authors:** Xin Li; Liang Hu; Duoqian Miao; Ming Peng; Qi Zhang

**ID:** 152904 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PYZcd99axs>) | [PDF](<https://openreview.net/pdf?id=PYZcd99axs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152904>)

Long\-term memory remains a fundamental bottleneck for large language model \(LLM\) agents across sessions\. Existing systems typically adopt a write\-then\-retrieve paradigm, storing context\-dependent dialogue fragments and retrieving them via nearest\-neighbor search in continuous embedding space\. This design yields unstable access units and systematically misses logically related but lexically distant evidence\. We propose MemCode, a long\-term agent memory framework that couples retrieval\-oriented writing with discrete associative retrieval\. MemCode rewrites dialogue into self\-contained atomic memory units \(AMUs\), maps AMUs into a learnable codebook with isomorphic semantic quantization \(ISQ\), and uses codebook co\-occurrence topology as a retrieval path complementary to vector search\. For long\-term memory stores, MemCode separates online atomic writes from asynchronous offline consolidation\. On LongMemEval\-S and LoCoMo with GPT\-4o\-mini and Qwen3\-30B\-A3B\-Instruct\-2507 backbones, MemCode achieves the best overall accuracy while keeping per\-dialogue memory construction within roughly 40\-\-130 seconds, making it 3\-\-21$\\times$ faster than LightMem and over an order of magnitude faster than A\-MEM and MemoryOS\.

## AutoformBot: Formalizing Mathematics at Scale

**Authors:** Ahmad Rammal; Niket Patel; Fabian Gloeckle; Amaury Hayat; Julia Kempe; Remi Munos; Charles Arnal; Vivien Cabannes

**ID:** 150745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fhuGQ1zcqk>) | [PDF](<https://openreview.net/pdf?id=fhuGQ1zcqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150745>)

We present AutoformBot, a multi\-agent system for building an \*\*A\*\*utoformalized \*\*T\*\*extbook \*\*L\*\*ibrary \*\*A\*\*t \*\*S\*\*cale \(ATLAS\) in Lean 4\. AutoformBot orchestrates thousands of LLM agents, equipped with formal verification tools, dependency\-aware task scheduling, and collaborative version control, to translate informal textbook prose into machine\-checked definitions and proofs\. We apply our methods to a corpus of over \*20\* open\-access textbooks spanning analysis, algebra, topology, combinatorics, and probability, producing ATLAS: a verified library of over \*\*50,000\*\* Lean 4 declarations and \*\*500 thousand\*\* lines of code\. We release two artifacts: \(i\) AutoformBot, the open\-source multi\-agent framework; and \(ii\) ATLAS, the resulting formal library\. Our results suggest that autoformalizing the core content of graduate\-level mathematics at scale is now economically and technically feasible\. This opens the door to the automated verification of both human\- and machine\-generated mathematics at a research level\.

## Gym\-Anything: Turn Any Software into an Agent Environment

**Authors:** Pranjal Aggarwal; Graham Neubig; Sean Welleck

**ID:** 150621 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=glWjgtbFmq>) | [PDF](<https://openreview.net/pdf?id=glWjgtbFmq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150621>)

Computer\-use agents hold the promise of assisting in a wide range of digital economic activities\. However, current research has largely focused on short\-horizon tasks over a limited set of software\. A key reason is that creating environments for complex software requires significant time and human effort, and therefore does not scale\. To address this, we introduce Gym\-Anything, a framework for converting any software into an interactive computer\-use environment\. We frame environment creation itself as a multi\-agent task: a coding agent writes setup scripts, downloads real\-world data, and configures the software, while producing \(visual\) evidence of correct setup\. An independent audit agent then verifies evidence for environment setup against a quality checklist\. Using a taxonomy of economically valuable occupations grounded in U\.S\.\\ GDP data, we apply this pipeline to 200 software applications with broad occupational coverage\. The result is CUA\-World, a collection of over 10K\+ long\-horizon tasks spanning domains from medical science and astronomy to engineering and enterprise systems, each configured with realistic data along with train and test splits\. Distilling successful trajectories from the training split yields strong gains at multiple student scales \(2B, 9B, 35B\)\. CUA\-World also includes CUA\-World\-Long, a challenging long\-horizon benchmark with tasks often requiring over 500 steps\. We also apply the same auditing principle at test time: a separate VLM reviews completed trajectories and provides feedback on what remains, improving Gemini\-3\-Flash on CUA\-World\-Long from 11\.5\\% to 14\.0\\%\. We will release all code, infrastructure, and benchmark data\.

## SPLICE: Structured Prompt Local Iterative Combinatorial Evolution

**Authors:** Anish Acharya; Phillip Studans; Amit Dhanda; Ninad V Rao; Vishal Amarlal Khatri; Sina A Niaki; Brian Verkhovsky

**ID:** 155679 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3m6Zh7DSNb>) | [PDF](<https://openreview.net/pdf?id=3m6Zh7DSNb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155679>)

Prompt engineering has become a central lever for deploying large language models \(LLMs\), yet the prompts that actually ship to production bear little resemblance to the short instructions studied in most of the prompt\-optimization literature\. A deployed prompt is a structured multi\-section artifact\-\-\-role framing, reasoning directives, examples, constraints, tool schemas, and output specifications woven into a single token stream\-\-\-in which some sections encode hard\-won safety and format contracts while others are the legitimate targets of optimization\. Existing iterative prompt optimizers treat the prompt as a monolithic string and the search as an unstructured rewrite loop, with no mechanism to respect this partition and no theoretical account of when their updates improve the prompt, preserve diversity, or control length\.  We address this gap by casting iterative prompt optimization as combinatorial search over an edit graph of block\-structured, selectively\-mutable prompt states\. Under this view, a broad slice of the recent literature collapses to selector\-\-proposal\-\-state\-space instances of a single \\emph\{batched iterative prompt search\} template that differ only in the selector\. Within this framework we introduce \\textsc\{Splice\}, which contributes four coupled design choices, each paired with a formal guarantee: \(i\) per\-block mutability, with a price\-of\-freezing bound quantifying the safety\-\-optimality trade\-off; \(ii\) dual section\-local textual gradients with momentum, yielding an edit\-graph reachability bound and a $\{\(1\-e^\{\-\\gamma\}\)\}$ sub\-modular approximation; \(iii\) elitist beam search with lineage\-aware diversity, giving deterministic monotonicity, a noisy no regression tail bound, and conditional no\-collapse of lineages; and \(iv\) a ratio regularizer for length control, with an explicit accuracy\-\-length bias bound\. Together these constitute, to our knowledge, the first theoretical analysis of iterative LLM\-driven prompt optimization\. Empirically, \\textsc\{Splice\} consistently outperforms prior prompt\-optimization methods and single\-step sampling baselines across public benchmarks, system models spanning three capability tiers, and tasks ranging from classification to LLM\-as\-judge rubric optimization, while preserving frozen sections verbatim and exhibiting narrower cross\-model variance than single\-step sampling\.

## CAFE: Causally\-Guided Automated Feature Engineering with Multi\-Agent Reinforcement Learning

**Authors:** Arun Vignesh Malarkkan; Wangyang Ying; Hongyu Cao; Dongjie Wang; Yanjie Fu

**ID:** 151842 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XWuLGI5zio>) | [PDF](<https://openreview.net/pdf?id=XWuLGI5zio>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151842>)

Automated feature engineering \(AFE\) enables AI systems to autonomously construct high\-utility representations from raw tabular data\. However, existing AFE methods rely on statistical heuristics, yielding brittle features that fail under distribution shift\. We introduce CAFE, a framework that reformulates AFE as a causally\-guided sequential decision process, bridging causal discovery with reinforcement learning\-driven feature construction\. Phase I learns a sparse directed acyclic graph over features and the target to obtain soft causal priors, grouping features as direct, indirect, or other based on their causal influence with respect to the target\. Phase II uses a cascading multi\-agent deep Q\-learning architecture to select causal groups and transformation operators, with hierarchical reward shaping and causal group\-level exploration strategies that favor causally plausible transformations while controlling feature complexity\. Across 15 public benchmarks \(classification with macro\-F1; regression with inverse relative absolute error\), CAFE achieves statistically significant gains over the strongest AFE baseline \(Wilcoxon p&lt;0\.001, large effect\), reduces episodes\-to\-convergence, and delivers competitive time\-to\-target\. Under both controlled covariate shifts and naturally occurring distribution shifts \(Folktables\), CAFE reduces out\-of\-distribution performance drop by up to 4x relative to a non\-causal multi\-agent baseline, and produces more compact feature sets with more stable post\-hoc attributions\. These findings underscore that causal structure, used as a soft inductive prior rather than a rigid constraint, can substantially improve the robustness and efficiency of automated feature engineering\.

## StarCraft Motion: A Dataset for Agent Simulation in Adversarial and Partially Observable Scenarios

**Authors:** Yi\-Chung Chen; Mingyu Kim; Ruqi Bai; James Z Hare; Jing Gao; David Inouye

**ID:** 139048 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o9paPqDKbN>) | [PDF](<https://openreview.net/pdf?id=o9paPqDKbN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139048>)

Agent simulation aims to model the future behavior of interacting agents, but existing benchmarks have largely focused on structured domains such as autonomous driving\. Adversarial and partially observable settings remain less explored, despite their importance for modeling strategic multi\-agent behavior\. To address this gap, we introduce StarCraft Motion, a large\-scale dataset for agent simulation built from human StarCraft\~II replays\. Our processing pipeline converts raw replays into standardized simulation scenarios by extracting continuous unit trajectories, deriving command\-based unit\-level intent labels, and aligning game states with player\-specific fog\-of\-war observations\. This enables direct study of behavior, intent, and opponent responses under competitive partial observability\. As an initial study, we evaluate autoregressive simulation methods on StarCraft Motion and introduce HMART, a hierarchical baseline that extends SMART with learnable player\-level query aggregation for efficient global\-context modeling in large\-agent\-count scenarios\. Experiments show that global context improves observer\-unit simulation and intent prediction, while closed\-loop fine\-tuning further improves rollout quality\. However, accurately capturing intent initiation and transitions remains difficult\. We also find that opponent modeling from partial observations is substantially more challenging, and that additional global information can be misleading when it does not match the opponent's perspective\. These results highlight StarCraft Motion as a useful dataset for studying scalable agent simulation in adversarial, partially observable environments\.

## Coupling\-Aware Reinforcement Learning for Co\-Evolving Graph Games

**Authors:** Mina Kim; Guanghui Lan; Benoit Montreuil

**ID:** 154400 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DrGKhgoPSC>) | [PDF](<https://openreview.net/pdf?id=DrGKhgoPSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154400>)

Building hydrogen station networks, electric vehicle \(EV\) charging grids, or vaccine distribution systems requires coordinating two separately operated graphs \- demand\-side facilities and the supply\-side networks they depend on \- where each operator's payoff depends on the other's choices\. We formalize this as the Co\-Evolving Graph Game \(CEGG\), a setting that sits between facility location, interdependent\-network analysis, and graph\-based multi\-agent reinforcement learning \(MARL\) but is not jointly addressed by any of them\. We propose Cross\-Graph Attention with Policy Mirror Descent \(CGA\-PMD\), pairing cross\-graph attention \- which lets each agent read only the partner\-graph nodes structurally coupled to its own \- with a policy mirror descent update for stable training\. Across three reward domains and a range of practical network scales, we find that the structure of the coupling selects which method wins: at small scale most methods are competitive, but as scale grows or coupling becomes irregular, only CGA\-PMD remains productive while own\-only, unmasked\-attention, and Proximal Policy Optimization \(PPO\)\-based variants all fail in distinct ways\. Our theoretical analysis explains why: PMD's Kullback\-Leibler \(KL\) regularization admits an iteration\-uniform cumulative drift bound while PPO's clip update does not, predicting CGA\-PMD's stability in the hard regime where PPO\-based methods collapse\.

## Structured Human\-Like Agentic Flow for RTL Design

**Authors:** Yu\-Tung Liu; Zhan Song; Chenhui Deng; Chia\-Tung Ho; CUNXI YU

**ID:** 150260 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jV4t9gy08G>) | [PDF](<https://openreview.net/pdf?id=jV4t9gy08G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150260>)

Long\-horizon RTL agents often collapse under context pollution, lacking the active, compartmentalized debugging strategies of human engineers\. We introduce OneVeriAgent, a human\-like framework modeled directly on expert cognitive workflows\. First, mimicking how engineers probe waveform viewers, Agentic Temporal Exploration \(ATE\) enables dynamic, targeted signal queries, distilling dense simulator dumps into sparse, causal traces\. Second, reflecting how designers compartmentalize tasks, a task\-scoped Orchestrator enforces strict context isolation, preventing raw tool outputs from polluting the global reasoning trace\. On the CVDP benchmark, OneVeriAgent achieves 95\.8\\% Pass@1 with Claude Opus 4\.6, matching state\-of\-the\-art proprietary swarm\. Finally, we propose Tool\-Validated Self\-Distillation \(TVSD\) to bridge the open\-source capability gap\. By fine\-tuning on self\-generated, syntactically valid trajectories without external correctness oracles, TVSD lifts Gemma4\-31B\-Instruct's Pass@1 from 61\.1\\% to 74\.8\\%, demonstrating that fully open\-weight RTL agents are viable\.

## Coupling\-Aware Reinforcement Learning for Co\-Evolving Graph Games

**Authors:** Mina Kim; Guanghui Lan; Benoit Montreuil

**ID:** 154400\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154400

[Paper](<https://openreview.net/forum?id=DrGKhgoPSC>) | [PDF](<https://openreview.net/pdf?id=DrGKhgoPSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154400>)

Building hydrogen station networks, electric vehicle \(EV\) charging grids, or vaccine distribution systems requires coordinating two separately operated graphs \- demand\-side facilities and the supply\-side networks they depend on \- where each operator's payoff depends on the other's choices\. We formalize this as the Co\-Evolving Graph Game \(CEGG\), a setting that sits between facility location, interdependent\-network analysis, and graph\-based multi\-agent reinforcement learning \(MARL\) but is not jointly addressed by any of them\. We propose Cross\-Graph Attention with Policy Mirror Descent \(CGA\-PMD\), pairing cross\-graph attention \- which lets each agent read only the partner\-graph nodes structurally coupled to its own \- with a policy mirror descent update for stable training\. Across three reward domains and a range of practical network scales, we find that the structure of the coupling selects which method wins: at small scale most methods are competitive, but as scale grows or coupling becomes irregular, only CGA\-PMD remains productive while own\-only, unmasked\-attention, and Proximal Policy Optimization \(PPO\)\-based variants all fail in distinct ways\. Our theoretical analysis explains why: PMD's Kullback\-Leibler \(KL\) regularization admits an iteration\-uniform cumulative drift bound while PPO's clip update does not, predicting CGA\-PMD's stability in the hard regime where PPO\-based methods collapse\.

## Structured Human\-Like Agentic Flow for RTL Design

**Authors:** Yu\-Tung Liu; Zhan Song; Chenhui Deng; Chia\-Tung Ho; CUNXI YU

**ID:** 150260\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150260

[Paper](<https://openreview.net/forum?id=jV4t9gy08G>) | [PDF](<https://openreview.net/pdf?id=jV4t9gy08G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150260>)

Long\-horizon RTL agents often collapse under context pollution, lacking the active, compartmentalized debugging strategies of human engineers\. We introduce OneVeriAgent, a human\-like framework modeled directly on expert cognitive workflows\. First, mimicking how engineers probe waveform viewers, Agentic Temporal Exploration \(ATE\) enables dynamic, targeted signal queries, distilling dense simulator dumps into sparse, causal traces\. Second, reflecting how designers compartmentalize tasks, a task\-scoped Orchestrator enforces strict context isolation, preventing raw tool outputs from polluting the global reasoning trace\. On the CVDP benchmark, OneVeriAgent achieves 95\.8\\% Pass@1 with Claude Opus 4\.6, matching state\-of\-the\-art proprietary swarm\. Finally, we propose Tool\-Validated Self\-Distillation \(TVSD\) to bridge the open\-source capability gap\. By fine\-tuning on self\-generated, syntactically valid trajectories without external correctness oracles, TVSD lifts Gemma4\-31B\-Instruct's Pass@1 from 61\.1\\% to 74\.8\\%, demonstrating that fully open\-weight RTL agents are viable\.

## Learning Latency\-Aware Orchestration for Multi\-Agent Systems

**Authors:** Xi Shi; Mengxin Zheng; Qian Lou

**ID:** 150759\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150759

[Paper](<https://openreview.net/forum?id=fbWOBQEle5>) | [PDF](<https://openreview.net/pdf?id=fbWOBQEle5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150759>)

_Abstract unavailable from the accessible public sources._

## C2G\-BENCH: A Cyber\-Physical Evaluation Benchmark for Hierarchical Reinforcement Learning in Grid\-Interactive Hyperscale Data Centers

**Authors:** Vineet Gundecha; Sahand Ghorbanpour; Sifat Abdullah; Mahasweta Chakraborti; Damien Fay; Avisek Naug; Sergey Serebryakov; Ricardo Luna Gutierrez; Soumyendu Sarkar

**ID:** 139076\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139076

[Paper](<https://openreview.net/forum?id=mWywbjkaJ4>) | [PDF](<https://openreview.net/pdf?id=mWywbjkaJ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139076>)

The rapid growth of generative AI is reshaping the energy footprint of modern computing infrastructure\. Hyperscale AI data centers now operate at power levels comparable to large industrial facilities, creating new challenges for grid reliability, energy procurement, and real time demand flexibility\. At the same time, their large controllable loads, cooling systems, and on site storage make them potential participants in grid services such as frequency regulation\. However, existing evaluation environments do not capture the coupled decision making required for grid interactive operation\. We introduce C2G\-BENCH, a cyber\-physical benchmark for hierarchical reinforcement learning in hyperscale data centers\. C2G\-BENCH simulates a real\-world scenario, where a 250 MW\-class hyperscale data center participates in grid frequency regulation while serving realistic AI workload demand under weather\-driven ambient conditions\. The benchmark explicitly links 15\-minute market level orchestration with 5\-second physical control, enabling agents to jointly reason over regulation commitments, workload flexibility, cooling, battery dispatch, and facility safety\. C2G\-BENCH achieves this through two coupled Gymnasium environments: C2GMacroEnv, where a high level controller bids into the regulation market, and C2GFastEnv, where a low level controller actuates the Dynamic Voltage and Frequency Scaling \(DVFS\), Coolant Distribution Unit \(CDU\) pump speed, HVAC effort, and Battery dispatch \(BESS\)\. The simulator models a 250 MW class two zone facility using seven modular physics engines covering workload, thermal, electrical, battery, grid signal, weather, and market dynamics, driven by real workload and weather traces\. We benchmark a family of rule\-based, LLM\-based &amp; RL\-based controllers for both the macro and fast environments, and evaluate them on four stress\-test environments in multiple grid markets\. Baseline results show that active low level control substantially improves tracking quality: a rule\-based macro controller paired with a RL\-based low level controller reduces the tracking RMSE from 2,737 kW to 229 kW compared with a macro only configuration, while maintaining full throughput and zero thermal violations\. These results demonstrate that C2G\-BENCH exposes meaningful cross layer tradeoffs and provides a reusable benchmark for studying safe, hierarchical control of grid interactive AI data centers\.

## LLM\-Based Multi\-Agent Blackboard System for Information Discovery in Data Science

**Authors:** Alireza Salemi; Mihir Parmar; Palash Goyal; Yiwen Song; Jinsung Yoon; Hamed Zamani; Tomas Pfister; Hamid Palangi

**ID:** 151426 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ao3zijumY7>) | [PDF](<https://openreview.net/pdf?id=ao3zijumY7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151426>)

Advances in large language models \(LLMs\) have created new opportunities in data science, but their deployment is often limited by the challenge of finding relevant data in large data lakes\. Existing methods struggle with this: both single\- and multi\-agent systems are quickly overwhelmed by large, heterogeneous files, and master–slave multi\-agent systems rely on a rigid central controller that requires precise knowledge of each sub\-agent’s capabilities, which is not possible in large\-scale settings where the main agent lacks full observability over sub\-agents’ knowledge and competencies\. We propose a novel multi\-agent paradigm inspired by the blackboard architecture for traditional AI models\. In our framework, a central agent posts requests to a shared blackboard, and autonomous subordinate agents\-\-either responsible for a partition of the data lake or retrieval from web\-\-volunteer to respond based on their capabilities\. This design improves scalability and flexibility by removing the need for a central coordinator to know each agent’s expertise or internal knowledge\. We evaluate the approach on three benchmarks that require data discovery: KramaBench and modified versions of DSBench and DA\-Code\. Results show that the blackboard architecture substantially outperforms strong baselines, achieving 13%–57% relative improvements in end\-to\-end success and up to a 9% relative gain in data discovery F1 over the best baseline\.

## Robust Instruction Compliance in Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Wo Wei Lin; Ethan Rathbun; Enrico Marchesini; Xiang Zhi Tan

**ID:** 148746 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vMEXVo6MCM>) | [PDF](<https://openreview.net/pdf?id=vMEXVo6MCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148746>)

Real\-world multi\-agent reinforcement learning \(MARL\) systems must operate autonomously while adapting to natural language instructions provided by humans\. These instructions arrive unpredictably, interrupt ongoing actions, and may conflict with long\-horizon objectives under partial observability\. Recent vision\-language models enable instruction following, but are computationally expensive and limited to single\-agent settings\. Conversely, MARL can handle long\-horizon coordination with macro\-actions, but assumes uninterrupted execution\. This work introduces macro\-action value cancellation for instruction compliance \(MAVIC\) to enable interruption\-aware MARL by bootstrapping the value of ongoing macro\-actions upon receiving instructions\. Agents can thus decouple task objective optimization from instruction\-driven overrides within a unified policy and re\-plan without destabilizing the underlying learning process\. MAVIC integrates with standard actor\-critic methods and achieves high instruction compliance while preserving base task performance across increasingly complex macro\-action benchmarks\.

## Rethinking Credit Assignment in Cooperative MARL via Interventional Reward Response

**Authors:** Chamjin Joo; Myounghoon Ha; Sang Wan Lee

**ID:** 154206 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FOmIe6PtvT>) | [PDF](<https://openreview.net/pdf?id=FOmIe6PtvT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154206>)

Credit assignment remains a central challenge in cooperative multi\-agent reinforcement learning \(MARL\), especially under partial observability, where individual policy updates may not accurately reflect each agent’s actual contribution to team outcomes\. While policy\-based methods such as MAPPO and IPPO provide strong optimization frameworks, their updates are typically derived from global rewards and observational value surrogates, without explicitly defining agent\-specific credit\. Misaligned credit signals can mislead individual policy improvement, resulting in inefficient coordination and weaker team performance\. We address this challenge by formulating agent\-level credit as an interventional reward response, using Proximal Causal Inference \(PCI\) to identify credit from observable proxies via an outcome bridge function\. Building on this identification strategy, we design a practical credit\-aligned update signal and integrate it into policy gradient methods\. Empirical evaluations on diagnostic and benchmark tasks demonstrate that the proposed credit signal improves policy learning under partial observability, highlighting proximal identification as a promising foundation for designing credit\-aware policy updates in cooperative MARL\. To the best of our knowledge, this work presents the first PCI\-based solution for online multi\-agent cooperation\.

## To trust or not to trust: Attention\-based Trust Management for LLM Multi\-Agent Systems

**Authors:** Pengfei He; Zhenwei Dai; Xianfeng Tang; Yue XING; Hui Liu; Jingying Zeng; Qiankun Peng; Shrivats Agrawal; Samarth Varshney; Suhang Wang; Jiliang Tang; Qi He

**ID:** 149022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tRFYHQFSH4>) | [PDF](<https://openreview.net/pdf?id=tRFYHQFSH4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149022>)

Large Language Model\-based Multi\-Agent Systems \(LLM\-MAS\) have demonstrated strong capabilities in solving complex tasks but remain vulnerable when agents receive unreliable messages\. This vulnerability stems from a fundamental gap: LLM agents treat all incoming messages equally without evaluating their trustworthiness\. While some existing studies approach trustworthiness, they focus on a single type of harmfulness rather than analyze it in a holistic approach from multiple trustworthiness perspectives\. We address this gap by proposing a comprehensive definition of trustworthiness inspired by human communication theory \\citep\{grice1975logic\}\. Our definition identifies six orthogonal trust dimensions that provide interpretable measures of trustworthiness\. Building on this definition, we introduce the Attention Trust Score \(A‑Trust\), a lightweight, attention‑based method for evaluating the trustworthiness of messages\. We then develop a principled trust management system \(TMS\) for LLM‑MAS that supports both message‑level and agent‑level trust assessments\. Experiments across diverse multi‑agent settings and tasks demonstrate that our TMS significantly improves robustness against malicious inputs\.

## Integrating Strengths of Different Multi\-Agent Workflows via Step\-Aware Hybrid Topology Planning

**Authors:** Jingxuan Yu; Ju Jia; Yiqian Chen; Yuchong Chen; Cong Wu; Di Wu; Siqi Ma; Jie Gui

**ID:** 153499 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KvZcSEq1b8>) | [PDF](<https://openreview.net/pdf?id=KvZcSEq1b8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153499>)

Large language model \(LLM\)\-driven agents are proposed for a wide range of applications\. As scenarios become increasingly composite, a graph\-structured multi\-agent system \(MAS\) offers a promising solution due to the orchestration of various skills\. To architect a reasonable underlying workflow, recent advances mostly investigate two structures: sequential topology and decentralized topology\. The former constrains the structure into a directed acyclic graph for multi\-step executions but lacks sufficient scalability, while the latter leverages node\-wise subgraphs for knowledge aggregation with synchronous parallelization but lacks long\-term planning\. Therefore, our key insight is that their strengths are mutually complementary\. Driven by this motivation, we introduce step\-aware hybrid topology for a MAS, where sequential connections support inter\-step ordered planning and decentralized connections promote intra\-step perspective integration\. Concretely, to effectively coordinate different structural components, we clarify the corresponding topological definition and the protocols for step\-wise serialization and parallelization\. Subsequently, to dynamically refine desired structures, we introduce the parameterized distribution of a hybrid topology, which is initialized by LLM\-driven graph planning\. Eventually, to further reduce token consumption and time complexity, we supplement the topological density and length normalization for end\-to\-end learning\. Extensive experiments demonstrate that the hybrid topology outperforms single\-form topology in 90\.4\\% of tasks, our agentic initialization improves learning in 88\.8\\% of scenarios, proposed normalizations reduce token consumption by 20\\%$\\sim$30\\% and time consumption by 7\\%$\\sim$13\\% with a slight utility fluctuation\. The code is available at https://anonymous\.4open\.science/r/HTAS\-D107\.

## AgentRoom: Concurrent Multi\-Agent Coding in a CRDT\-Backed Shared Workspace

**Authors:** Seonglae Cho; Donghyun Lee

**ID:** 148882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uTjkLPcoGn>) | [PDF](<https://openreview.net/pdf?id=uTjkLPcoGn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148882>)

Concurrent multi\-agent coding promises division of labor across modules, robustness through redundancy, and parallel exploration at the natural granularity of multi\-file projects\. Realtime collaborative editing protocols solve this coordination problem for human teams via Conflict\-free Replicated Data Types \(CRDTs\), but the LLMs underneath generate one token at a time and existing multi\-agent coding systems inherit this serial limit: they either sequence agents through phase handoffs or pool independent samples without coordination, and a single agent abandons up to 70% of hard tasks with a one\-file stub\-and\-exit\. AgentRoom is a realtime collaborative editing protocol for concurrent coding agents: a runtime layer exposing file\-level claim, status, and broadcast as MCP tools on top of a CRDT\-merged shared filesystem\. Across five frontier coding\-CLI models on four backend coding tasks, alongside Python DevBench and Rust\+axum cross\-language checks, AgentRoom ×2 suppresses Solo abandonment on the CLI\-stable models and tightens run\-to\-run variance\. Two matched\-compute contrasts isolate the cause: parallel\-merge vs AgentRoom shows a positive mean LLM\-judge contrast, and a bundle probe attributes the gain primarily to the MCP coordination layer rather than to parallelism or substrate convergence alone\. Coordination, not parallelism or CRDT\-merge, is the load\-bearing engineering\.

## AgentArk: Distilling Multi\-Agent Intelligence into a Single LLM Agent

**Authors:** Yinyi Luo; Yiqiao Jin; Weichen Yu; Mengqi Zhang; Srijan Kumar; Xiaoxiao Li; Weijie Xu; Xin chen; Jindong Wang

**ID:** 149790 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nIWXTEWPSb>) | [PDF](<https://openreview.net/pdf?id=nIWXTEWPSb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149790>)

_Abstract unavailable from the accessible public sources._

## NestRL: A Nested Training Regime for Mutual Adaptation in Human–AI Teaming

**Authors:** Upasana Biswas; Durgesh Kalwar; Subbarao Kambhampati; Sarath Sreedharan

**ID:** 151397 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=axj4SqAgPj>) | [PDF](<https://openreview.net/pdf?id=axj4SqAgPj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151397>)

_Abstract unavailable from the accessible public sources._

## AgentForesight: Online Auditing for Early Failure Prediction in Multi\-Agent Systems

**Authors:** Boxuan Zhang; Jianing Zhu; Zeru Shi; Dongfang Liu; Ruixiang Tang

**ID:** 151949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wdc59fvT3R>) | [PDF](<https://openreview.net/pdf?id=Wdc59fvT3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151949>)

LLM\-based multi\-agent systems are increasingly deployed on long\-horizon tasks, but a single decisive error is often accepted by downstream agents and cascades into trajectory\-level failure\.  Existing work frames this as \\emph\{post\-hoc failure attribution\}, diagnosing the responsible agent and step after the trajectory has ended\. However, this paradigm forfeits any opportunity to intervene while trajectory is still unfolding\. In this work, we introduce AgentForesight, a framework that reframes this problem as online auditing: at each step of an unfolding trajectory, an auditor observes only the current prefix and must either continue the run or alarm at the earliest decisive error, without access to future steps\. To this end, we curate AFTraj\-2K, a corpus of agentic trajectories across Coding, Math, and Agentic domains, in which safe trajectories are retained under a strict curation pipeline and unsafe trajectories are annotated at the step of their decisive error via consensus among multiple LLM judges\. Built on that, we develop AgentForesight\-7B, a compact online auditor trained with a coarse\-to\-fine reinforcement learning recipe that first equips it with a risk\-anticipation prior at the failure boundary on adjacent safe/unsafe prefix pairs, then sharpens this prior into precise step\-level localization under a three\-axis reward jointly targeting the what, where, and who of an audit verdict\. Across AFTraj\-2K and an external Who\\&amp;When benchmark, AgentForesight\-7B outperforms leading proprietary models, including GPT\-4\.1 and DeepSeek\-V4\-Pro, achieving up to \+19\.9\\% performance gain and 3$\\times$ lower step localization error, opening the loop from post\-hoc failure detection to enabling deployment\-time intervention\.

## KV\-PRM: Efficient Process Reward Modeling via KV\-Cache Transfer for Multi\-Agent Test\-Time Scaling

**Authors:** Peng Kuang; Haibo Jin; Xiaoyu Han; Yanli Wang; Xiaopeng Yuan; Ye Yu; Kaidi Xu; Haohan Wang

**ID:** 150635 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gdMVW6Iny8>) | [PDF](<https://openreview.net/pdf?id=gdMVW6Iny8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150635>)

_Abstract unavailable from the accessible public sources._

## Semantic Residual: A Paired\-Oracle Decomposition of LLM Multi\-Agent Systems under Lossy Channels

**Authors:** Haotong Sun; Hang Yang

**ID:** 152057 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VpZBKjFSpf>) | [PDF](<https://openreview.net/pdf?id=VpZBKjFSpf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152057>)

LLM\-based multi\-agent systems \(LLM\-MAS\) coordinate well on reliable channels but fail in poorly understood ways when communication is lossy\. We measure these failures against a content\-blind reference: synchronous push gossip on idempotent payloads, which admits classical bounds in diameter, conductance, and percolation\. Our \\emph\{paired\-Oracle\} protocol runs an LLM agent and a deterministic gossip Oracle on identical scheduler, topology, and channel realisation, so any outcome difference is attributable to per\-node decision logic\. On Distributed Common\-Free\-Slot \(\\textsc\{DCFS\}\), a set\-union task isomorphic to all\-to\-all rumour spreading, three signatures of a \\emph\{semantic residual\} emerge as channel reliability is swept: a phase\-boundary shift $\\Delta p^\* \\approx 0\.35$ identified directly from paired trials; a $16$\-\-$46\\%$ rate of consensus on wrong answers despite complete knowledge, a regime classical gossip cannot enter; and a $3\.6\\times$\-\-$5\.1\\times$ round\-count overhead at perfect channels\. A mediation analysis shows that coverage and failure\-mode labels are jointly a sufficient statistic for accuracy \-\-\- no within\-stratum residual remains \-\-\- so the LLM\-\-Oracle gap is fully captured by a $p$\-dependent stochastic mapping over four failure modes\. This decomposition supports a four\-tier mitigation hierarchy whose tier\-wise gains match the externalised stratum's marginal share, and a five\-parameter scaling law over an eight\-model panel with leave\-one\-model\-out RMSE $0\.08$\.

## Agent Explorative Policy Optimization for Agentic Multimodal Reasoning

**Authors:** Minki Kang; Shizhe Diao; Ryo Hachiuma; Sung Ju Hwang; Pavlo Molchanov; Frank Wang; Byung\-Kwan Lee

**ID:** 151150 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceOxtMigKk>) | [PDF](<https://openreview.net/pdf?id=ceOxtMigKk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151150>)

Vision\-language models with extended reasoning succeed on complex problems, but many real\-world problems require external tools that internal reasoning alone cannot reach\. Agentic reasoning therefore interleaves two behaviors with a structural asymmetry: thinking \(the self\-contained default\) and tool use \(a high\-variance auxiliary acting\)\. We refer to this asymmetry as the Thinking\-Acting Gap\. Under standard RL recipes like GRPO, the gap manifests as two diagnostic symptoms during training: tool use is attempted on only \~30% of rollouts, and when attempted, the tool\-using rollouts within a group are all\-wrong on \~40% of questions, suppressing the learning signal at the tool calls that needed it\. We propose AXPO \(Agent eXplorative Policy Optimization\): for each all\-wrong tool\-using subgroup, AXPO fixes the thinking prefix and resamples the tool call and its continuation, paired with uncertainty\-based prefix selection\. Across nine multimodal benchmarks and three scales of Qwen3\-VL\-Thinking, SFT\+AXPO outperforms SFT\+GRPO at average \(\+1\.8pp Pass@1 and \+1\.8pp Pass@4 at 8B on average\) and 8B with SFT\+AXPO surpasses the 32B Base on Pass@4 with 4x fewer parameters\.

## STAR\-Math: Multi\-Agent Mathematical Reasoning under Persistent Meta\-Strategic Supervision

**Authors:** Jiaao Wu; Xian Zhang; Hanzhang Liu; Sophia Zhang; Fan Yang; Yinpeng Dong

**ID:** 150935\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150935

[Paper](<https://openreview.net/forum?id=eCAxMcFzTe>) | [PDF](<https://openreview.net/pdf?id=eCAxMcFzTe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150935>)

Frontier AI models and multi\-agent systems have led to significant improvements in mathematical reasoning\. However, for problems requiring extended, long\-horizon reasoning, existing systems continue to suffer from fundamental reliability issues: hallucination accumulation, memory fragmentation, and imbalanced reasoning\-tool trade\-offs\. We introduce \*\*STAR\-Math\*\*, a multi\-agent framework that systematically addresses these challenges through meta\-level supervision and structured Reasoner\-Verifier interaction\. STAR\-Math is structured as an orchestrated state machine with nested challenge\-step\-replan loops, governed by a reasoning\-free Python orchestrator that separates control from inference and bounds error propagation through trace\-back and re\-planning\. Our key innovation is a \*\*persistent Meta\-Strategist\*\* that maintains cross\-attempt memory and exercises meta\-level control by issuing high\-level strategic guidance or mandatory directives, so the system can escape unproductive loops rather than stagnate or over\-rely on tools\. STAR\-Math achieves state\-of\-the\-art results on all eight top\-tier competition benchmarks: AIME 2025\-2026, MathArena Apex Shortlist, MathArena Apex 2025, Putnam 2025, IMO 2025, HMMT February 2026, and USAMO 2026\. It obtains perfect scores on AIMEs, Putnam, and HMMT, and shows its largest margin on Apex 2025, scoring 93\.75% compared with 80\.21% by the strongest baseline GPT\-5\.5\. Ablation studies show that the gains arise from the framework's orchestration rather than from model\-level diversity since removing key components or substituting in mixed backbones consistently weakens performance\.

## STAR\-Math: Multi\-Agent Mathematical Reasoning under Persistent Meta\-Strategic Supervision

**Authors:** Jiaao Wu; Xian Zhang; Hanzhang Liu; Sophia Zhang; Fan Yang; Yinpeng Dong

**ID:** 150935\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150935

[Paper](<https://openreview.net/forum?id=eCAxMcFzTe>) | [PDF](<https://openreview.net/pdf?id=eCAxMcFzTe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150935>)

Frontier AI models and multi\-agent systems have led to significant improvements in mathematical reasoning\. However, for problems requiring extended, long\-horizon reasoning, existing systems continue to suffer from fundamental reliability issues: hallucination accumulation, memory fragmentation, and imbalanced reasoning\-tool trade\-offs\. We introduce \*\*STAR\-Math\*\*, a multi\-agent framework that systematically addresses these challenges through meta\-level supervision and structured Reasoner\-Verifier interaction\. STAR\-Math is structured as an orchestrated state machine with nested challenge\-step\-replan loops, governed by a reasoning\-free Python orchestrator that separates control from inference and bounds error propagation through trace\-back and re\-planning\. Our key innovation is a \*\*persistent Meta\-Strategist\*\* that maintains cross\-attempt memory and exercises meta\-level control by issuing high\-level strategic guidance or mandatory directives, so the system can escape unproductive loops rather than stagnate or over\-rely on tools\. STAR\-Math achieves state\-of\-the\-art results on all eight top\-tier competition benchmarks: AIME 2025\-2026, MathArena Apex Shortlist, MathArena Apex 2025, Putnam 2025, IMO 2025, HMMT February 2026, and USAMO 2026\. It obtains perfect scores on AIMEs, Putnam, and HMMT, and shows its largest margin on Apex 2025, scoring 93\.75% compared with 80\.21% by the strongest baseline GPT\-5\.5\. Ablation studies show that the gains arise from the framework's orchestration rather than from model\-level diversity since removing key components or substituting in mixed backbones consistently weakens performance\.

## Group Perspective Matters: Regulating Debate Relationships Can Mitigate Blind Conformity in Multi\-Agent Debate

**Authors:** Hao Wu; Shoucheng Song; Chang Yao; Huaiyu Wan; Youfang Lin; Kai Lv

**ID:** 154678\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154678

[Paper](<https://openreview.net/forum?id=BqTbDi43uU>) | [PDF](<https://openreview.net/pdf?id=BqTbDi43uU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154678>)

Multi\-Agent Debate \(MAD\) improves the reasoning performance of Large Language Models \(LLMs\) through multi\-round interaction\. However, LLMs in MAD are highly susceptible to blind conformity\. Existing individual evaluation methods, typically based on confidence or perplexity, fail to reflect the correctness of reasoning and may even exacerbate blind conformity\. To address this, we shift the perspective from individual evaluation to group interaction\. We define mutual referencing among LLMs as \\textbf\{Debate Relationships\} and recognize that regulating these relationships is the key to mitigating blind conformity\. In this paper, we propose a novel framework for \\textbf\{D\}ynamically r\\textbf\{E\}gulating deb\\textbf\{A\}te \\textbf\{R\}elationships \(DEAR\) from the group perspective\. At first, DEAR quantifies consensus and divergence as \\textit\{group evidence\} to capture the debate state\. Then, DEAR operates through three stages: 1\) What: perceiving group consultation tendency and uncertainty; 2\) Who: introducing a Selection RL\-Agent to dynamically select reference peers; and 3\) How: adopting a Behavior RL\-Agent to adaptively adjust generation behaviors\.

## Towards High Semantic Fidelity: Hyperdimensional Symbolic Messages in Multi\-Agent Communication

**Authors:** Shoucheng Song; Youfang Lin; Chang Yao; Hao Wu; Sheng Han; Kai Lv

**ID:** 153552\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153552

[Paper](<https://openreview.net/forum?id=KXTbANIGZW>) | [PDF](<https://openreview.net/pdf?id=KXTbANIGZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153552>)

Semantic fidelity is essential for multi\-agent communication under non\-ideal channels, comprising transmission fidelity and conversion fidelity\. Yet existing numerical and neural message formats cannot simultaneously achieve both\.  To address this, we propose a novel message format\-\\textbf\{H\}yperdimensional \\textbf\{S\}ymbolic \\textbf\{M\}essages \(HSM\), and its corresponding communication framework \\textbf\{Herm\}\.  For transmission fidelity, Herm suppresses semantic entanglement via an entity\-attribute\-value structured encoding pipeline\. For conversion fidelity, Herm first leverages a receiver\-centric ego\-binding mechanism to align semantics\. Then, a similarity\-aware dual\-branch fusion module is proposed to prevent critical semantic dilution\. To realize explicit message\-semantic conversion,  we devise an iterative decoding scheme via algebraic inverse operation\. Experiments exhibit that Herm outperforms baselines across various noisy scenarios while maintaining superior structural readability\.

## Mental\-Models for Multi\-Agent Systems

**Authors:** Hanan Gani; Lulu \(Siwen\) Shao; Manmohan Chandraker

**ID:** 153908\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153908

[Paper](<https://openreview.net/forum?id=HoG47ROacO>) | [PDF](<https://openreview.net/pdf?id=HoG47ROacO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153908>)

Large foundation models have accelerated progress toward general\-purpose agents that interact with humans and other agents through language and multimodal signals\. However, robust multi\-agent decision\-making requires reasoning about what other agents know, intend, and are likely to do under partial observability\. Current agentic systems often operate through prompt design, memory, or end\-to\-end behavioral shaping, but typically do not learn an explicit partner\-state representation that can be reused as a decision variable across tasks\. We introduce mental\-model\-enabled agents, a framework that equips an agent with a latent mental model of its counterpart, allowing it to infer hidden beliefs, intentions, and likely reactions from the observed history and use these inferences to guide action selection\. Our method learns an amortized recursive Theory\-of\-Mind representation, with first\- and second\-order mental\-state structure, jointly with a belief\-conditioned reward model that evaluates candidate actions relative to the inferred partner state\. A policy is then learned under this belief\-aware signal, yielding an agent that can act independently at inference time while retaining the benefits of explicit partner modeling\. We evaluate the same framework on both language\-only and multimodal benchmarks\. Across these settings, explicit mental\-state modeling consistently improves interaction quality and Theory\-of\-Mind performance over base agentic systems, showing that structured partner modeling is a useful inductive bias for general multi\-agent systems\.

## Market\-Based Runtime Resource Allocation for LLM Multi\-Agent Systems

**Authors:** Yixue Huang; Mingxin Wang; Hao Li; Hao Jiang

**ID:** 155373\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155373

[Paper](<https://openreview.net/forum?id=67jpPq2Bsk>) | [PDF](<https://openreview.net/pdf?id=67jpPq2Bsk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155373>)

LLM multi\-agent systems rely on division of labor to solve complex tasks, but their execution can be blocked by contention for shared resources such as GPU test environments, CPU execution slots, and exclusive tool sessions\. Existing workflows, task allocation methods, and runtime schedulers usually arbitrate such access indirectly through workflow position, dependency structure, queue state, or resource metrics\. These criteria do not fully capture the value of satisfying a specific request, because request value is distributed across agents' local execution states and changes with tests, retries, and downstream results\. We propose a market\-based protocol for access arbitration in LLM multi\-agent systems\. Each agent converts its current plan and local execution state into a structured, budget\-constrained bid that signals relative urgency\. For asynchronous requests, an online clearing method based on optimal stopping decides when to close the clearing window, allocate access rights, settle payments, and track resource occupation until release\. Across three contention scenarios, Market reduces makespan by 5\.2\\%, 2\.5\\%, and 4\.9\\% relative to the strongest primary baselines, while improving task score by about two percentage points\.

## Risk\-Calibrated Context Selection for Healthcare Multi\-Agent Handoff

**Authors:** Manu Agrawal; Sumit Mukherjee

**ID:** 154212\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154212

[Paper](<https://openreview.net/forum?id=FLlWDrOo4c>) | [PDF](<https://openreview.net/pdf?id=FLlWDrOo4c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154212>)

Specialized agents collaborate by transferring memory: retrieved records, generated summaries, tool traces, and long\-running state\. In regulated domains this is a governance problem, not a retrieval problem: the receiver's task matters, but so does whether it was authorized to receive each item and whether the handoff exposed more than necessary\. We formalize minimum\-necessary context selection as a constrained submodular subset\-selection problem with an additive exposure cost and a distributional task\-success risk bound\. Our algorithm, ScopeSelect, first hard\-masks items whose layer or scope the receiver contract does not admit, then runs a cost\-benefit greedy selector against a monotone submodular utility, attaining a $\\\\frac\{1\}\{2\}\(1\-1/e\)$ approximation bound under a budget, and finally wraps threshold selection in Conformal Risk Control, giving a finite\-sample distribution\-free guarantee $\\\\mathbb\{E\}\[L\(S\_\{\\\\hat\{\\\\gamma\}\}\)\] \\\\le \\\\alpha$ on exchangeable calibration data\. We evaluate on HealthHandoff\-Bench, a synthetic benchmark with 21,600 healthcare\-agent handoff tasks across four workflows, and Synthea\-HH, a realism tier ingested from 340 Synthea\-generated FHIR bundles\. A three\-source blinded label audit compares benchmark labels, model\-generated labels, and clinical\-informatics expert review, with high agreement for sensitivity labels and policy\-boundary disagreements for necessity and authorization\. Against authorized TF\-IDF, embedding retrieval, a cross\-encoder reranker, and a calibrated LLM\-as\-selector, ScopeSelect is the only method meeting $\\\\alpha = 0\.15$ at competitive task success\. The hard\-mask safety property holds under 30% label noise, 100 adversarial attacks, and receiver\-role shift; a live\-LLM run with Claude Sonnet 4\.5 exhibits a calibration\-transfer gap that motivates per\-workflow recalibration\. We release the benchmark, Synthea\-HH pipeline, CRC calibration harness, and a signed\-handoff prototype\.

## From Chats to Markets: AgenticPay for LLM\-Powered Negotiation in Multi\-Agent Commerce

**Authors:** Xianyang Liu; Shangding Gu; Fan Xu; Manxi Wu; Boyi Li; Jun Wang; Costas J Spanos; Dawn Song

**ID:** 154687\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154687

[Paper](<https://openreview.net/forum?id=BjCh5p36da>) | [PDF](<https://openreview.net/pdf?id=BjCh5p36da>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154687>)

Agents based on large language models are increasingly expected to autonomously handle negotiation and transactions\. However, existing benchmarks predominantly focus on text\-only, bilateral, zero\-sum price haggling, failing to capture the complexity of real\-world commerce\. To address this gap, we introduce Agenticpay, a unified framework and benchmark for evaluating how well multimodal agents reach high\-welfare, multi\-dimensional agreements in realistic markets\. Built around four core components \( Environments, Tasks, Agents, and Metrics\), Agenticpay comprises 160 multimodal tasks spanning 4 real\-world business scenarios \(E\-commerce, Food Delivery, Ride\-hailing, and Apartment Rental\) and 8 market topologies, scaling from 1\-to\-1 bargaining to many\-to\-many \(N\-to\-N\) competitive markets\. Beyond price haggling, agents must read product images, infer each opponent's hidden preferences, and trade off multiple binding contract terms \(e\.g\., price, lease duration, return policy, delivery speed\)\. Agents communicate through multi\-round natural\-language dialogue, with each turn proposing or revising a full contract, and outcomes are scored by a utility\-based framework that rewards agreements maximizing joint welfare\. Evaluations on state\-of\-the\-art proprietary \(GPT\-5\.4, Claude Sonnet 4\.6, Gemini 3\.1 Pro Preview\) and open\-weight \(Qwen3\-VL\-32B\-Instruct, InternVL3\-38B\) multimodal models reveal substantial gaps in non\-zero\-sum value creation and market reasoning: even the strongest agent \(Gemini 3\.1 Pro Preview\) reaches a GlobalScore of only 42\.3/100, and performance consistently degrades as markets scale from bilateral to multi\-sided, with the average GlobalScore dropping by 5\.7 points and open\-weight models suffering the largest declines \(up to 11\.5 points\)\. These findings establish Agenticpay as a foundational testbed for multimodal agentic commerce\. Code and dataset are available at: https://anonymous\.4open\.science/r/AgenticPay\-4BBB/README\.md\.

## Reward Modeling for Multi\-Agent Orchestration

**Authors:** King Yeung Tsang; Zihao Zhao; Vishal Venkataramani; Haizhou Shi; Zixuan Ke; Semih Yavuz; Shafiq Joty; Hao Wang

**ID:** 155004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9HnmEMnWjg>) | [PDF](<https://openreview.net/pdf?id=9HnmEMnWjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155004>)

Multi\-Agent Systems \(MAS\) built on Large Language Models \(LLMs\) require effective orchestration to coordinate specialized agents, yet training such orchestrators is hindered by limited supervision and high computational cost\. We propose \*\*Orch\*\*estration \*\*R\*\*eward \*\*M\*\*odeling \(\*\*Orch\-RM\*\*\), a self\-supervised framework for evaluating orchestration quality without human annotations\. Orch\-RM leverages intermediate artifacts from multi\-agent executions to construct win\-lose pairs for Bradley\-Terry reward model training\. Unlike existing MAS test\-time scaling and orchestrator training frameworks that rely on costly sub\-agent rollouts, Orch\-RM operates directly at the orchestration level, enabling efficient and high\-performing reward\-guided orchestrator training and MAS test\-time scaling\. As shown in Figure 1, Orch\-RM improves training efficiency by up to 10$\\times$ in token usage while improving MAS test\-time scaling performance by up to 8\\% in accuracy\. These gains consistently transfer across multiple domains, including mathematical reasoning, web\-based question answering, and multi\-hop reasoning, demonstrating orchestration\-level reward modeling as a scalable direction for robust multi\-agent orchestration\.  Data, code, and trained models will be released upon publication\.

## Sequential Probabilistic Uncertainty Estimation for Parallel Multi\-Agent Reasoning Systems

**Authors:** Tunyu Zhang; Zihao Zhao; Yusong Zhao; Haizhou Shi; Zhuohang Li; Haoxian Chen; Hao Wang; Dimitris Metaxas

**ID:** 153160 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NRg4W8EzfT>) | [PDF](<https://openreview.net/pdf?id=NRg4W8EzfT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153160>)

LLM\-based multi\-agent systems \(MAS\) have attracted growing attention for improving reasoning through interaction among multiple agents\. In this work, we focus on parallel multi\-agent reasoning systems, where several agents solve the same problem over multiple rounds and aggregate their outputs into a final answer\. Despite their strong reasoning performance, uncertainty estimation for such systems remains underexplored: the reliability of a MAS depends not only on individual generations, but also on how agents interact and evolve across rounds\. We propose SPI \(Sequential Probabilistic Inference\), a lightweight, training\-free uncertainty estimator that formulates MAS uncertainty as sequential inference over a latent system\-level belief\. SPI aggregates round\-level agreement and generation\-uncertainty signals through a filtering\-style update\. Across five backbones, six benchmarks, and two MAS protocols, SPI improves misclassification detection, selective prediction, and calibration over a broad set of uncertainty estimation baselines, including standard log\-likelihood\-based methods and MAS\-specific estimators\.

## Convergence Guarantees for Federated SARSA with Local Training and Heterogeneous Agents

**Authors:** Paul Mangold; Eloïse Berthier; Eric Moulines

**ID:** 155534 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sFTcukOxE>) | [PDF](<https://openreview.net/pdf?id=4sFTcukOxE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155534>)

We present a novel theoretical analysis of Federated SARSA \(FedSARSA\) with linear function approximation and local training\. We establish convergence guarantees for FedSARSA in the presence of heterogeneity, both in local transitions and rewards, providing the first sample and communication complexity bounds in this setting\. At the core of our analysis is a new, exact multi\-step error expansion for single\-agent SARSA, which is of independent interest\. Our analysis precisely quantifies the impact of heterogeneity, demonstrating the convergence of FedSARSA with multiple local updates\. Crucially, we show that FedSARSA achieves linear speed\-up with respect to the number of agents, up to higher\-order terms due to Markovian sampling\. Numerical experiments support our theoretical findings\.

## Exemplar2VQA: A Scalable Exemplar\-Driven Visual Question Answering Generation Framework via Multi\-Agent Coding

**Authors:** Jiayu Ying; Qijian Tian; Ruijie Xu; Xinnan Zhu; Daoguo Dong; Jiachen Xu; Xin Tan

**ID:** 150839 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evkWoqTEUD>) | [PDF](<https://openreview.net/pdf?id=evkWoqTEUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150839>)

_Abstract unavailable from the accessible public sources._

## RADAR: Routing Agents via Difficulty\-Aware Recovery

**Authors:** Haizhou Du; Jinze Zhao; Huaicheng Yan

**ID:** 154283 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eyl3543VgD>) | [PDF](<https://openreview.net/pdf?id=Eyl3543VgD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154283>)

_Abstract unavailable from the accessible public sources._

## Coordination Connectivity: Shared Initialization Shapes the Joint\-Policy Landscape in MARL

**Authors:** Yixiang Fan; Zhiqiang Pu; Hao Ma; Dongmin Li; Weihao Zhang; Yinxing Dai; Shijie Zheng; Jingjing Huang

**ID:** 154512 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D2HpZYZ8aI>) | [PDF](<https://openreview.net/pdf?id=D2HpZYZ8aI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154512>)

Mode connectivity studies reveal that high\-performing neural networks are often connected by low\-loss paths in parameter space\. We investigate the analogue of this phenomenon in cooperative multi\-agent reinforcement learning \(MARL\), where a solution is not a single model but a team of decentralized policies\. We introduce coordination connectivity, a diagnostic evaluating whether linear interpolation between the actor parameters of two trained policy teams preserves high team return\. The resulting coordination barrier measures whether two successful teams are separated by a performance cliff along the joint\-policy path\. We evaluate this diagnostic on the StarCraft Multi\-Agent Challenge \(SMAC\) across five controlled training histories, isolating the effects of shared initialization, continued training, parameter decoupling, and HAPPO\-style separate\-actor specialization\. Across three SMAC maps and four seeds, policy teams derived from a shared MAPPO checkpoint exhibit near\-zero interpolation barriers, even after non\-shared specialization\. In contrast, interpolation paths involving independently trained HAPPO teams exhibit substantially larger barriers\. Mixed\-team assembly, single\-agent hot\-swap, clone\-all, role\-swap, and weight\-space probes further indicate that shared\-initialized agents specialize into distinct roles while remaining within a low\-barrier coordination component\. These results suggest that shared initialization implicitly structures the joint\-policy space of cooperative MARL, providing a mode\-connectivity\-inspired lens for analyzing coordination, specialization, and same\-source cross\-version team compatibility\.

## Spend Only What You Need: Defect\-Aware Residual Coverage for Efficient Multi\-Agent Reasoning

**Authors:** Maisha Maliha; Dean F Hougen

**ID:** 151467 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aP2jpM9pME>) | [PDF](<https://openreview.net/pdf?id=aP2jpM9pME>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151467>)

Multi\-agent orchestration over large language models is increasingly used to improve reasoning accuracy, especially on problems that benefit from critique, verification, specialization, or consensus, but these gains often come with inference costs that are not explicitly controlled\. Many systems spend similar compute on straightforward queries and genuinely ambiguous or expert\-level ones\. Existing methods typically follow fixed collaboration protocols, compile task\-level workflows offline, route queries among models or collaboration modes, or use learned controllers whose state does not explicitly identify which reasoning defects remain unresolved\. As a result, they do not directly decide during inference whether the current multi\-agent trajectory still justifies another agent call\. We introduce Defect\-Aware Residual Coverage \(DARC\), a training\-free inference\-time controller for adaptive multi\-agent reasoning that represents the current trajectory using four residual defect dimensions: answer uncertainty, claim\-level contradiction, verification failure, and aspect under\-coverage\. DARC selects the next agent by maximizing cost\-normalized submodular marginal coverage over the remaining residuals\. Each candidate agent receives a role\-induced capability profile from frozen embeddings of its natural\-language role description, enabling DARC to operate without task\-specific supervision, learned routing parameters, or fine\-tuning\. Across five reasoning and multimodal suites, MMLU\-Pro, GPQA\-Diamond, LiveBench, MMMU\-Pro, and HLE, DARC achieves the strongest accuracy under the main shared heterogeneous six\-agent pool while using substantially fewer tokens and agent calls than recent workflow, adaptive orchestration, and cost\-aware routing baselines, with additional large\-pool experiments showing consistent scaling behavior\. It also outperforms the single\-call frontier reasoning models tested, showing that residual\-aware selective invocation can improve both answer quality and inference efficiency\.

## MASTA: A Feedback\-Scheduled Multi\-Agent System for End\-to\-End Tamarin Protocol Modeling and Analysis

**Authors:** Yongkang Xiao; Qiyi Deng; Jing Chen; Min Shi; JU MA; Ruiying Du

**ID:** 150586 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h51B2FuWVX>) | [PDF](<https://openreview.net/pdf?id=h51B2FuWVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150586>)

_Abstract unavailable from the accessible public sources._

## MAPLE: Latent Multi\-Agent Play for End\-to\-End Autonomous Driving

**Authors:** Rajeev Yasarla; Deepti Hegde; Hsin\-Pai Cheng; Shizhong Han; Yunxiao Shi; MeysamSadeghi; Hanno Ackermann; Litian Liu; Pranav Desai; Fatih Porikli; Mohammad Ghavamzadeh; Herbert Cai

**ID:** 156060 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0mGiCU9L39>) | [PDF](<https://openreview.net/pdf?id=0mGiCU9L39>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156060>)

_Abstract unavailable from the accessible public sources._

## Epistemic Social Learning: Latent Behavioral Structure under Endogenous Multi\-Agent Interaction

**Authors:** Jainendra Shukla; Dhruv Jaiswal; Divyanshi Beniwal; Kiriti Kanjilal

**ID:** 150541 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hNvgA94KTi>) | [PDF](<https://openreview.net/pdf?id=hNvgA94KTi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150541>)

_Abstract unavailable from the accessible public sources._

## Interaction Value Inference for Multi\-Agent Reinforcement Learning via a Hierarchical Agent\-Centric World Model

**Authors:** Zhuoran Chen; Xuyang Lu; Zeyang Liu; Xinrui Yang; Mingyang Li; Long Qian; Xingyu Chen; Lipeng Wan; Xuguang Lan

**ID:** 148672 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vxZDvmWQyz>) | [PDF](<https://openreview.net/pdf?id=vxZDvmWQyz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148672>)

_Abstract unavailable from the accessible public sources._

## SCHOLARPEER: A Multi\-Agent Framework for Automated Peer Review

**Authors:** Palash Goyal; Mihir Parmar; Yiwen Song; Hamid Palangi; Tomas Pfister; Jinsung Yoon

**ID:** 152167 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V2lTeWPnft>) | [PDF](<https://openreview.net/pdf?id=V2lTeWPnft>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152167>)

_Abstract unavailable from the accessible public sources._

## Seeing Beyond the Next Step: World\-Model\-Guided Human\-Like Navigation in Multi\-Agent Scenes

**Authors:** SEONGEUN HONG; JuYeong Hwang; Jinhyun Kim; Hanyoung Jang; Hyeongyeop Kang

**ID:** 149456 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pxblmE8t2f>) | [PDF](<https://openreview.net/pdf?id=pxblmE8t2f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149456>)

Selecting a next motion in a populated scene is not just a matter of avoiding what is currently in the way: an action can be locally feasible yet drift onto the road instead of the crosswalk, cut into a stream of crossing pedestrians, or bottleneck a narrow passage\. These failure modes are invisible from the current state alone, and acting on them requires reasoning about what each candidate action will cause\. World models offer exactly this, namely action\-conditioned predictions of the future, but rolling them out at every decision step is a cost deployable navigation systems cannot pay, and the field has largely traded foresight for speed\. We argue this is a false dichotomy\. The natural place for a world model in human\-aware navigation is at training time, as a preference oracle that distills foresight into a fast policy, rather than at inference time, as an online planner\. We pair a discrete visual action prior with two task\-aligned world models, one for nearby social dynamics and one for future scene semantics, that score candidate actions by their predicted consequences and refine the policy through group\-relative preference distillation\. At deployment, both world models are removed and the policy acts in a single forward pass\. Across five held\-out scenes, this yields navigation that is simultaneously safer, more socially and group\-coherent, and more goal\-directed than strong reactive and learned baselines, with naive observers rating the resulting motion as more human\-like\. Taken together, our findings point to a different approach for bringing world\-model foresight into deployable agents: not accelerating rollouts, but amortizing them into the policy so that the cost of looking ahead is confined to training\.

## Overcoming Attention Distraction: Training\-Free Latent Communication for Multi\-Agent Systems

**Authors:** zhengjie zhou; Yahao Liu; Ziyue Feng; Tengfei LIU; Weiqiang Wang

**ID:** 150982 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dndnlqP2vp>) | [PDF](<https://openreview.net/pdf?id=dndnlqP2vp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150982>)

Scaling multi\-agent systems driven by large language models is transitioning from lossy text\-based communication to continuous latent interaction\. However, existing latent interaction approaches relying on concatenation\-based Softmax cross\-attention suffer from an Attention Distraction Dilemma: due to the inherent anisotropy of latent spaces and the semantic misalignment induced by agent role heterogeneity, non\-linear Softmax structurally amplifies irrelevant tokens, diluting the collaborative signal as interactions deepen\. To address this issue, we propose a training\-free additive mechanism that models upstream representations as a semantic manifold\. By shifting from concatenation\-based Softmax competition to linear subspace projection, this perspective inherently bypasses scalar noise accumulation\. Specifically, we introduce two components: a Resonance Filter that extracts principal semantic directional alignments to overcome latent anisotropy, and an SNR\-Adaptive Spectral Gain that dynamically regulates this projection to counteract role heterogeneity\. We analyze this approach using the Asymptotic SNR Tipping Point Theorem, illustrating the scaling advantages of the mechanism beyond a critical noise threshold\. Experiments indicate that the proposed approach outperforms baselines in 46 of 54 evaluated configurations, maintaining semantic reasoning in long\-context collaborations\.

## Economy of Minds: Emerging Multi\-Agent Intelligence with Economic Interactions

**Authors:** Zhenting Qi; Ao Qu; Huangyuan Su; Chenyu Wang; Yu Yao; Han Zheng; Kushal Chattopadhyay; Guowei Xu; Zihan Wang; Weirui Ye; Vijay Janapa Reddi; Ju Li; Paul Liang; Hima Lakkaraju; Sham Kakade; Yilun Du

**ID:** 150266 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jS2FYvg2Y1>) | [PDF](<https://openreview.net/pdf?id=jS2FYvg2Y1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150266>)

How can a population of agents self\-orchestrate and self\-adapt into stronger collective intelligence without centralized control? Inspired by Friedrich Hayek's economic theory of decentralized coordination in markets, we study this question through an agent economy in which agents compete via auctions for the right to act, exchange payments, and accumulate wealth from environmental rewards\. These simple economic signals induce decentralized credit assignment, driving planning without global orchestration or explicit communication protocols\. The population evolves through economic selection: effective agents accumulate wealth and are mutated via exploitation, while ineffective ones go bankrupt and are replaced via exploration\. We show that, initialized with weak agents, the economy produces emergent multi\-step reasoning strategies and outperforms stronger monolithic baselines across five agentic tasks, including mathematical reasoning, financial research, scientific research, accelerator design, and distributed\-system optimization\.  We further provide theoretical insights into how economic dynamics shape agent behaviors, linking local incentives to long\-term global performance\. Our results suggest a new path to multi\-agent intelligence: rather than engineering coordination, we can design decentralized incentive structures under which it automatically emerges\.

## AgentForesight: Online Auditing for Early Failure Prediction in Multi\-Agent Systems

**Authors:** Boxuan Zhang; Jianing Zhu; Zeru Shi; Dongfang Liu; Ruixiang Tang

**ID:** 151949\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151949

[Paper](<https://openreview.net/forum?id=Wdc59fvT3R>) | [PDF](<https://openreview.net/pdf?id=Wdc59fvT3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151949>)

LLM\-based multi\-agent systems are increasingly deployed on long\-horizon tasks, but a single decisive error is often accepted by downstream agents and cascades into trajectory\-level failure\.  Existing work frames this as \\emph\{post\-hoc failure attribution\}, diagnosing the responsible agent and step after the trajectory has ended\. However, this paradigm forfeits any opportunity to intervene while trajectory is still unfolding\. In this work, we introduce AgentForesight, a framework that reframes this problem as online auditing: at each step of an unfolding trajectory, an auditor observes only the current prefix and must either continue the run or alarm at the earliest decisive error, without access to future steps\. To this end, we curate AFTraj\-2K, a corpus of agentic trajectories across Coding, Math, and Agentic domains, in which safe trajectories are retained under a strict curation pipeline and unsafe trajectories are annotated at the step of their decisive error via consensus among multiple LLM judges\. Built on that, we develop AgentForesight\-7B, a compact online auditor trained with a coarse\-to\-fine reinforcement learning recipe that first equips it with a risk\-anticipation prior at the failure boundary on adjacent safe/unsafe prefix pairs, then sharpens this prior into precise step\-level localization under a three\-axis reward jointly targeting the what, where, and who of an audit verdict\. Across AFTraj\-2K and an external Who\\&amp;When benchmark, AgentForesight\-7B outperforms leading proprietary models, including GPT\-4\.1 and DeepSeek\-V4\-Pro, achieving up to \+19\.9\\% performance gain and 3$\\times$ lower step localization error, opening the loop from post\-hoc failure detection to enabling deployment\-time intervention\.

## Learning When to Collaborate: Selective Multi\-Agent Medical Reasoning via Uncertainty\-Aware Routing

**Authors:** Jiacheng Hou; Xueliang Cui; Dan Lu; Ruxin Wang

**ID:** 148185 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zf8s1ZPTZE>) | [PDF](<https://openreview.net/pdf?id=zf8s1ZPTZE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148185>)

Multi\-agent systems have emerged as a promising paradigm for multimodal medical reasoning, but existing methods rely on two assumptions that hinder practical deployment: \(i\) always\-active dense collaboration among multiple agents, and \(ii\) dependence on large cloud\-based models that raise privacy and efficiency concerns\. In this paper, we challenge both assumptions and propose SMART\-Med, a fully local multi\-agent method that treats collaboration as a learnable decision rather than a default behavior\. Our key insight is that not every medical query requires costly multi\-agent deliberation: many can be reliably solved by a single well\-trained agent, while only uncertain cases benefit from expert collaboration\. Based on this insight, SMART\-Med introduces an uncertainty\-driven routing mechanism that adaptively decides when to answer directly and when to recruit a small subset of expert agents, effectively converting dense multi\-agent reasoning into selective, query\-adaptive coordination\. To make this routing reliable, we curate a new multimodal medical dataset MedVR\-3K with high\-quality reasoning traces and a difficulty hierarchy, and then fine\-tune local agents using GRPO with two complementary rewards: a certainty\-aware accuracy reward and a vision\-language reward model for correctness and reasoning quality respectively\. Experiments on four medical visual question answering benchmarks show that SMART\-Med achieves competitive performance compared to existing MAS approaches while substantially reducing inference cost \(reducing inference time by more than 3\.8$\\times$ and token usage by 72\\%\)\. Moreover, after fine\-tuning on MedVR\-3K, SMART\-Med yields an average improvement of 6\.7\\% across Slake, PathVQA, VQA\-RAD, and PMC\-VQA\. Our results suggest that selective collaboration can be an efficient yet effective alternative to dense collaboration and enable practical, privacy\-preserving deployment of multi\-agent medical AI\.

## LLM\-Based Multi\-Agent Blackboard System for Information Discovery in Data Science

**Authors:** Alireza Salemi; Mihir Parmar; Palash Goyal; Yiwen Song; Jinsung Yoon; Hamed Zamani; Tomas Pfister; Hamid Palangi

**ID:** 151426\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151426

[Paper](<https://openreview.net/forum?id=ao3zijumY7>) | [PDF](<https://openreview.net/pdf?id=ao3zijumY7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151426>)

Advances in large language models \(LLMs\) have created new opportunities in data science, but their deployment is often limited by the challenge of finding relevant data in large data lakes\. Existing methods struggle with this: both single\- and multi\-agent systems are quickly overwhelmed by large, heterogeneous files, and master–slave multi\-agent systems rely on a rigid central controller that requires precise knowledge of each sub\-agent’s capabilities, which is not possible in large\-scale settings where the main agent lacks full observability over sub\-agents’ knowledge and competencies\. We propose a novel multi\-agent paradigm inspired by the blackboard architecture for traditional AI models\. In our framework, a central agent posts requests to a shared blackboard, and autonomous subordinate agents\-\-either responsible for a partition of the data lake or retrieval from web\-\-volunteer to respond based on their capabilities\. This design improves scalability and flexibility by removing the need for a central coordinator to know each agent’s expertise or internal knowledge\. We evaluate the approach on three benchmarks that require data discovery: KramaBench and modified versions of DSBench and DA\-Code\. Results show that the blackboard architecture substantially outperforms strong baselines, achieving 13%–57% relative improvements in end\-to\-end success and up to a 9% relative gain in data discovery F1 over the best baseline\.

## SceneFactory: GPU\-Accelerated Multi\-Agent Driving Simulation with Physics\-Based Vehicle Dynamics

**Authors:** Yicheng Zhu; Yang Chen; Tao Li; Zilin Bian

**ID:** 139016 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qCvGezil5Y>) | [PDF](<https://openreview.net/pdf?id=qCvGezil5Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139016>)

_Abstract unavailable from the accessible public sources._

## When Parallelism Pays Off: Cohesion\-Aware Task Partitioning for Multi\-Agent Coding

**Authors:** Xu Yang; Lunyiu Nie; Ethan Chandra; Stanislav Gannutin; Fangru Lin; Swarat Chaudhuri

**ID:** 148594 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wYda526jWp>) | [PDF](<https://openreview.net/pdf?id=wYda526jWp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148594>)

_Abstract unavailable from the accessible public sources._

## Norm Enforcement for AI Agents: Robustly Shaping Behavior in Multi\-Agent Systems

**Authors:** Yaowen Ye; Jacob Steinhardt

**ID:** 151090 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d3KYxJNekT>) | [PDF](<https://openreview.net/pdf?id=d3KYxJNekT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151090>)

_Abstract unavailable from the accessible public sources._

## EVOCHAMBER:  Test\-Time Co\-evolution of Multi\-Agent System at Individual, Team, and Population Scales

**Authors:** Yaolun Zhang; Tianyi Xu; Shengyu Dai; Zhenwen Shao; Qingyun Wu; Huazheng Wang

**ID:** 150274 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jNJFL5PPGJ>) | [PDF](<https://openreview.net/pdf?id=jNJFL5PPGJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150274>)

_Abstract unavailable from the accessible public sources._

## Ask KG Agent: A Multi\-Agent Framework for Code Localization Using Code and Knowledge Graphs

**Authors:** Chanyoung Chung; JEEMIN KIM; Joyce Whang

**ID:** 155386 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=62XPovBV57>) | [PDF](<https://openreview.net/pdf?id=62XPovBV57>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155386>)

_Abstract unavailable from the accessible public sources._

## AgentArk: Distilling Multi\-Agent Intelligence into a Single LLM Agent

**Authors:** Yinyi Luo; Yiqiao Jin; Weichen Yu; Mengqi Zhang; Srijan Kumar; Xiaoxiao Li; Weijie Xu; Xin chen; Jindong Wang

**ID:** 149790\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149790

[Paper](<https://openreview.net/forum?id=nIWXTEWPSb>) | [PDF](<https://openreview.net/pdf?id=nIWXTEWPSb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149790>)

_Abstract unavailable from the accessible public sources._

## NestRL: A Nested Training Regime for Mutual Adaptation in Human–AI Teaming

**Authors:** Upasana Biswas; Durgesh Kalwar; Subbarao Kambhampati; Sarath Sreedharan

**ID:** 151397\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151397

[Paper](<https://openreview.net/forum?id=axj4SqAgPj>) | [PDF](<https://openreview.net/pdf?id=axj4SqAgPj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151397>)

_Abstract unavailable from the accessible public sources._

## SkillGen: Verified Inference\-Time Agent Skill Synthesis

**Authors:** Yuchen Ma; Yue Huang; Han Bao; Haomin Zhuang; Swadheen Kumar Shukla; Michel Galley; Xiangliang Zhang; Stefan Feuerriegel

**ID:** 148850 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uhXX7721wa>) | [PDF](<https://openreview.net/pdf?id=uhXX7721wa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148850>)

Skills are a promising way to improve LLM agent capabilities without retraining, while keeping the added procedure reusable and controllable\. However, high\-quality skills are still largely written by hand\. We introduce SkillGen, a multi\-agent framework that synthesizes a single auditable skill from trajectories generated by a base agent\. The output is a human\-readable artifact that can be inspected before use\. Rather than merely summarizing trajectories, SkillGen leverages contrastive induction over both successful and failed trajectories to identify reusable success patterns, recurring failure modes, and behaviors that appear in nearby successes but are missing from failures\. SkillGen then generates candidate skills and iteratively refines the skill\. A key novelty in SkillGen is that we model agent skills as interventions to empirically verify the net effect of skills on the overall performance\. Specifically, we compare outcomes on the same instances with and without the skill, so that we account for both repairs \(cases where the skill fixes a baseline failure\) and regressions \(cases where the skill breaks a baseline success\)\. Across a broad range of agents and datasets, SkillGen consistently improves held\-out performance, outperforms existing skill\-generation baselines, and produces skills that transfer across models\.

## ROAR: Benchmarking LMM Agents under Real\-Time Constraints in Multiplayer Action\-Shooter Games

**Authors:** DAWEI WANG; Di Zhao; Jianran Yu; CHENGMING ZHOU; Marci Chi; Xiaoyang Liu; BEINING ZHANG; Shuliang Chu; Yun Sing Koh; Gary Ushaw; Richard Davison

**ID:** 139122 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jrkcJgEwSy>) | [PDF](<https://openreview.net/pdf?id=jrkcJgEwSy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139122>)

Large multimodal models \(LMMs\) are increasingly deployed as agents that perceive, reason, and act in interactive multi\-agent environments\. Yet most existing benchmarks for LMM\-based agents in multi\-agent settings remain turn\-based: the environment and other agents pause while an agent performs inference\. Such protocols obscure a fundamental challenge of real\-time constraints, where the world continues to evolve and delayed decisions may become outdated before execution\. Motivated by this limitation, we introduce ROAR, a multiplayer action\-shooter game environment for evaluating LMM\-based agents in multi\-agent settings under real\-time constraints\. ROAR covers cooperative, competitive, mixed cooperative\-competitive, and basic single\-agent scenarios\. We further propose a Multi\-Agent Asynchronous Gym interface that decouples environment evolution from agent reasoning by running the environment and each agent in separate threads, enabling the environment to advance at fixed time intervals without waiting for LMM inference and allowing agents to reason independently without blocking one another\. ROAR also features convenient deployment, multimodal observations, and customizable levels\. ROAR offers a practical testbed for advancing LMM\-based agents beyond static, turn\-based evaluation toward real\-time multi\-agent decision\-making\.

## CASPIAN: Online Detection and Attribution of Cascade Attacks in LLM Multi\-Agent Systems via Cross\-Channel Causal Monitoring

**Authors:** Kavana Venkatesh; Jafar Isbarov; Saad Amin; Murat Kantarcioglu; Jiaming Cui

**ID:** 150932 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eERJSSfRu8>) | [PDF](<https://openreview.net/pdf?id=eERJSSfRu8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150932>)

_Abstract unavailable from the accessible public sources._

## SMART: Scalable Multi\-Agent Role\-conditioned  Teaming via LLM\-free Tree Search

**Authors:** Runzhe Zhang; Ning Li; Xingshan Zeng; Letian Chen; Yasheng Wang; Weinan Zhang; Yong Yu; Weiwen Liu

**ID:** 149874 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mYzIBNy0LN>) | [PDF](<https://openreview.net/pdf?id=mYzIBNy0LN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149874>)

Large language model \(LLM\)\-powered multi\-agent systems have been shown to effectively solve real\-world end\-to\-end problems through collaboration among diverse agents\. However, as LLM capabilities advance and user demands continue to grow, the range of problems that agents can address expands dramatically, while the population of available agents and tools continues to increase, giving rise to open and evolving ecosystems of autonomous agents\. In this paradigm, agents are likely to become increasingly specialized, each focusing on particular capabilities or problem types\. In such a setting, a central challenge is how to efficiently assemble an appropriate team of agents to take on different responsibilities from a massive agent pool for a given task\. In this work, we study this problem in a controlled setting with 300 task\-oriented agents\. SMART \(Scalable Multi\-Agent Role\-conditioned Teaming\) first plans a task\-conditioned collaboration topology and candidate role set, then constructs a compact role\-conditioned candidate pool, and finally uses a LLM\-free Monte Carlo Tree Search \(MCTS\) to assign agents to roles online via metadata\-based rollouts\. This design enables high flexibility without incurring prohibitive inference costs\. Across multiple experiments, our approach achieves superior performance on  GSM8K \(93\.64\\%\), MATH \(61\.73\\%\), HumanEval \(93\.89\\%\), and MBPP \(87\.68\\%\) using gpt\-4o\-mini under a limited budget\.

## When Do Multi\-Agent Systems Help? An Information Bottleneck Perspective

**Authors:** Wendi Yu; Lianhao Zhou; Xiangjue Dong; Sai S Barath; Declan Staunton; Byung\-Jun Yoon; Xiaoning Qian; James Caverlee; Shuiwang Ji

**ID:** 153823 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ISYF5z5nK8>) | [PDF](<https://openreview.net/pdf?id=ISYF5z5nK8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153823>)

LLM powered multi\-agent systems \(MAS\) have emerged as a promising paradigm for complex tasks\. However, their advantages over single\-agent systems \(SAS\) remain unclear, with performance varying inconsistently across settings\. Here, we provide an information bottleneck perspective on elucidating the differences between MAS and SAS\. Specifically, our key observation is that a SAS accumulates its full reasoning trace in one shared context, while a MAS uses isolated local contexts connected by bounded relay messages\. We show that, under infinite relay bandwidth, any SAS can be simulated by a MAS that transmits the full upstream context\. Thus, the nontrivial advantage of MAS arises under bounded relays, where compression introduces a fundamental trade\-off: reducing redundant context can improve efficiency, but may also incur loss of task\-relevant information\. We formalize this trade\-off as an information bottleneck controlled by an effective parameter $\\beta$, which captures how the balance shifts with model capability, and shows that MAS gains arise when context reduction outweighs relay information loss\. We conduct 18 controlled experiments across five benchmarks and three model scales to validate our theoretical studies\. We observe that MAS consistently helps when relays are near\-sufficient, especially for weaker models\. In contrast, MAS gains shrink or reverse when relays incur information loss, especially for stronger models that can already extract useful information from redundant context and thus gain little from compression\. Our study shows that multi\-agent design is fundamentally an information\-bottleneck optimization problem\. This perspective explains when bounded inter\-agent communication helps or hurts\.

## SAGE: Evidence\-First Biomarker Discovery through Multi\-Agent Reasoning

**Authors:** Sahar Almahfouz Nasser; Juan Francisco Pesantez Borja; Jincheng Liu; Sandeep Manandhar; Shikhar Shiromani; Mohammad T Hasan; Zenghan Wang; Suman Ghosh; Jinchu Li; Xuejian Xu; Aniket R Iyer; Naoto Tokuyama; Twisha Shah; Tilak Pathak; Soundharya Kumaresan; Yohei Abe; Himanshu Maurya; Anant Madabhushi

**ID:** 155210 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7S3W9FIQbm>) | [PDF](<https://openreview.net/pdf?id=7S3W9FIQbm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155210>)

_Abstract unavailable from the accessible public sources._

## BootstrapAgent: Turning Repository Setup into Reusable Agent Knowledge

**Authors:** Sihan Fu; Oucheng Liu; Shiyuan Wang; Jin Shi; Chengkun Wei

**ID:** 151994 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WIItfKBPZm>) | [PDF](<https://openreview.net/pdf?id=WIItfKBPZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151994>)

_Abstract unavailable from the accessible public sources._

## Benchmarking Open\-Ended Multi\-Agent Coordination in Language Agents

**Authors:** Kaleab Tessera; Andras Szecsenyi; Cameron Barker; Alexander Rutherford; Davide Paglieri; Aidan Scannell; Henry Gouk; Elliot Crowley; Tim Rocktäschel; Amos Storkey

**ID:** 139589 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GjoyYpGTqL>) | [PDF](<https://openreview.net/pdf?id=GjoyYpGTqL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139589>)

_Abstract unavailable from the accessible public sources._

## COOP$^2$: Defining, Observing, and Repairing Cooperation in LLM Multi\-Agent Systems

**Authors:** Hanqing Yang; Narjes Nourzad; Shiyu Chen; Marie Siew; Jingdi Chen; Carlee Joe\-Wong

**ID:** 139333 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WWrTVADZAi>) | [PDF](<https://openreview.net/pdf?id=WWrTVADZAi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139333>)

Many complex tasks require extended effort, diverse capabilities, or coordinated actions beyond what a single agent can provide\.  However, simply adding more agents does not guarantee better performance, as effective cooperation depends on how agents interact with each other and with task structure to satisfy evolving constraints over time\.  This challenge is amplified for LLM\-based multi\-agent systems \(LLM\-MAS\): plans, messages, and revisions occur in natural language, whereas task progress depends on grounded environment actions\.  Current evaluations mostly treat cooperation as an implicit ingredient of final task success, leaving both cooperation and the effect of multi\-agent interaction on task dynamics difficult to study\.  We introduce COOP$^2$, an evaluation framework that grounds high\-level agent cooperation dynamics in LLM\-MAS within task progress in the environment\. COOP$^2$ then defines cooperative tasks with verifiable cooperative requirements, allowing us to analyze how cooperation unfolds over time with respect to task progress, as well as where and why cooperation breaks down\. Building on this framework, we develop COOP$^2$\-Repair, which predicts constraint failures from group plans and opens targeted repair channels for guided revisions\. Across two environments and three communication structures, COOP$^2$\-Repair improves task success and constraint satisfaction while exposing the additional decision overhead and communication load required for repair\.

## Robust Instruction Compliance in Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Wo Wei Lin; Ethan Rathbun; Enrico Marchesini; Xiang Zhi Tan

**ID:** 148746\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148746

[Paper](<https://openreview.net/forum?id=vMEXVo6MCM>) | [PDF](<https://openreview.net/pdf?id=vMEXVo6MCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148746>)

Real\-world multi\-agent reinforcement learning \(MARL\) systems must operate autonomously while adapting to natural language instructions provided by humans\. These instructions arrive unpredictably, interrupt ongoing actions, and may conflict with long\-horizon objectives under partial observability\. Recent vision\-language models enable instruction following, but are computationally expensive and limited to single\-agent settings\. Conversely, MARL can handle long\-horizon coordination with macro\-actions, but assumes uninterrupted execution\. This work introduces macro\-action value cancellation for instruction compliance \(MAVIC\) to enable interruption\-aware MARL by bootstrapping the value of ongoing macro\-actions upon receiving instructions\. Agents can thus decouple task objective optimization from instruction\-driven overrides within a unified policy and re\-plan without destabilizing the underlying learning process\. MAVIC integrates with standard actor\-critic methods and achieves high instruction compliance while preserving base task performance across increasingly complex macro\-action benchmarks\.

## AgentForesight: Online Auditing for Early Failure Prediction in Multi\-Agent Systems

**Authors:** Boxuan Zhang; Jianing Zhu; Zeru Shi; Dongfang Liu; Ruixiang Tang

**ID:** 151949\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151949

[Paper](<https://openreview.net/forum?id=Wdc59fvT3R>) | [PDF](<https://openreview.net/pdf?id=Wdc59fvT3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151949>)

LLM\-based multi\-agent systems are increasingly deployed on long\-horizon tasks, but a single decisive error is often accepted by downstream agents and cascades into trajectory\-level failure\.  Existing work frames this as \\emph\{post\-hoc failure attribution\}, diagnosing the responsible agent and step after the trajectory has ended\. However, this paradigm forfeits any opportunity to intervene while trajectory is still unfolding\. In this work, we introduce AgentForesight, a framework that reframes this problem as online auditing: at each step of an unfolding trajectory, an auditor observes only the current prefix and must either continue the run or alarm at the earliest decisive error, without access to future steps\. To this end, we curate AFTraj\-2K, a corpus of agentic trajectories across Coding, Math, and Agentic domains, in which safe trajectories are retained under a strict curation pipeline and unsafe trajectories are annotated at the step of their decisive error via consensus among multiple LLM judges\. Built on that, we develop AgentForesight\-7B, a compact online auditor trained with a coarse\-to\-fine reinforcement learning recipe that first equips it with a risk\-anticipation prior at the failure boundary on adjacent safe/unsafe prefix pairs, then sharpens this prior into precise step\-level localization under a three\-axis reward jointly targeting the what, where, and who of an audit verdict\. Across AFTraj\-2K and an external Who\\&amp;When benchmark, AgentForesight\-7B outperforms leading proprietary models, including GPT\-4\.1 and DeepSeek\-V4\-Pro, achieving up to \+19\.9\\% performance gain and 3$\\times$ lower step localization error, opening the loop from post\-hoc failure detection to enabling deployment\-time intervention\.

## Learning When to Collaborate: Selective Multi\-Agent Medical Reasoning via Uncertainty\-Aware Routing

**Authors:** Jiacheng Hou; Xueliang Cui; Dan Lu; Ruxin Wang

**ID:** 148185\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148185

[Paper](<https://openreview.net/forum?id=zf8s1ZPTZE>) | [PDF](<https://openreview.net/pdf?id=zf8s1ZPTZE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148185>)

Multi\-agent systems have emerged as a promising paradigm for multimodal medical reasoning, but existing methods rely on two assumptions that hinder practical deployment: \(i\) always\-active dense collaboration among multiple agents, and \(ii\) dependence on large cloud\-based models that raise privacy and efficiency concerns\. In this paper, we challenge both assumptions and propose SMART\-Med, a fully local multi\-agent method that treats collaboration as a learnable decision rather than a default behavior\. Our key insight is that not every medical query requires costly multi\-agent deliberation: many can be reliably solved by a single well\-trained agent, while only uncertain cases benefit from expert collaboration\. Based on this insight, SMART\-Med introduces an uncertainty\-driven routing mechanism that adaptively decides when to answer directly and when to recruit a small subset of expert agents, effectively converting dense multi\-agent reasoning into selective, query\-adaptive coordination\. To make this routing reliable, we curate a new multimodal medical dataset MedVR\-3K with high\-quality reasoning traces and a difficulty hierarchy, and then fine\-tune local agents using GRPO with two complementary rewards: a certainty\-aware accuracy reward and a vision\-language reward model for correctness and reasoning quality respectively\. Experiments on four medical visual question answering benchmarks show that SMART\-Med achieves competitive performance compared to existing MAS approaches while substantially reducing inference cost \(reducing inference time by more than 3\.8$\\times$ and token usage by 72\\%\)\. Moreover, after fine\-tuning on MedVR\-3K, SMART\-Med yields an average improvement of 6\.7\\% across Slake, PathVQA, VQA\-RAD, and PMC\-VQA\. Our results suggest that selective collaboration can be an efficient yet effective alternative to dense collaboration and enable practical, privacy\-preserving deployment of multi\-agent medical AI\.

## STAR\-Math: Multi\-Agent Mathematical Reasoning under Persistent Meta\-Strategic Supervision

**Authors:** Jiaao Wu; Xian Zhang; Hanzhang Liu; Sophia Zhang; Fan Yang; Yinpeng Dong

**ID:** 150935\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150935

[Paper](<https://openreview.net/forum?id=eCAxMcFzTe>) | [PDF](<https://openreview.net/pdf?id=eCAxMcFzTe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150935>)

Frontier AI models and multi\-agent systems have led to significant improvements in mathematical reasoning\. However, for problems requiring extended, long\-horizon reasoning, existing systems continue to suffer from fundamental reliability issues: hallucination accumulation, memory fragmentation, and imbalanced reasoning\-tool trade\-offs\. We introduce \*\*STAR\-Math\*\*, a multi\-agent framework that systematically addresses these challenges through meta\-level supervision and structured Reasoner\-Verifier interaction\. STAR\-Math is structured as an orchestrated state machine with nested challenge\-step\-replan loops, governed by a reasoning\-free Python orchestrator that separates control from inference and bounds error propagation through trace\-back and re\-planning\. Our key innovation is a \*\*persistent Meta\-Strategist\*\* that maintains cross\-attempt memory and exercises meta\-level control by issuing high\-level strategic guidance or mandatory directives, so the system can escape unproductive loops rather than stagnate or over\-rely on tools\. STAR\-Math achieves state\-of\-the\-art results on all eight top\-tier competition benchmarks: AIME 2025\-2026, MathArena Apex Shortlist, MathArena Apex 2025, Putnam 2025, IMO 2025, HMMT February 2026, and USAMO 2026\. It obtains perfect scores on AIMEs, Putnam, and HMMT, and shows its largest margin on Apex 2025, scoring 93\.75% compared with 80\.21% by the strongest baseline GPT\-5\.5\. Ablation studies show that the gains arise from the framework's orchestration rather than from model\-level diversity since removing key components or substituting in mixed backbones consistently weakens performance\.

## Group Perspective Matters: Regulating Debate Relationships Can Mitigate Blind Conformity in Multi\-Agent Debate

**Authors:** Hao Wu; Shoucheng Song; Chang Yao; Huaiyu Wan; Youfang Lin; Kai Lv

**ID:** 154678\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154678

[Paper](<https://openreview.net/forum?id=BqTbDi43uU>) | [PDF](<https://openreview.net/pdf?id=BqTbDi43uU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154678>)

Multi\-Agent Debate \(MAD\) improves the reasoning performance of Large Language Models \(LLMs\) through multi\-round interaction\. However, LLMs in MAD are highly susceptible to blind conformity\. Existing individual evaluation methods, typically based on confidence or perplexity, fail to reflect the correctness of reasoning and may even exacerbate blind conformity\. To address this, we shift the perspective from individual evaluation to group interaction\. We define mutual referencing among LLMs as \\textbf\{Debate Relationships\} and recognize that regulating these relationships is the key to mitigating blind conformity\. In this paper, we propose a novel framework for \\textbf\{D\}ynamically r\\textbf\{E\}gulating deb\\textbf\{A\}te \\textbf\{R\}elationships \(DEAR\) from the group perspective\. At first, DEAR quantifies consensus and divergence as \\textit\{group evidence\} to capture the debate state\. Then, DEAR operates through three stages: 1\) What: perceiving group consultation tendency and uncertainty; 2\) Who: introducing a Selection RL\-Agent to dynamically select reference peers; and 3\) How: adopting a Behavior RL\-Agent to adaptively adjust generation behaviors\.

## Towards High Semantic Fidelity: Hyperdimensional Symbolic Messages in Multi\-Agent Communication

**Authors:** Shoucheng Song; Youfang Lin; Chang Yao; Hao Wu; Sheng Han; Kai Lv

**ID:** 153552\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153552

[Paper](<https://openreview.net/forum?id=KXTbANIGZW>) | [PDF](<https://openreview.net/pdf?id=KXTbANIGZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153552>)

Semantic fidelity is essential for multi\-agent communication under non\-ideal channels, comprising transmission fidelity and conversion fidelity\. Yet existing numerical and neural message formats cannot simultaneously achieve both\.  To address this, we propose a novel message format\-\\textbf\{H\}yperdimensional \\textbf\{S\}ymbolic \\textbf\{M\}essages \(HSM\), and its corresponding communication framework \\textbf\{Herm\}\.  For transmission fidelity, Herm suppresses semantic entanglement via an entity\-attribute\-value structured encoding pipeline\. For conversion fidelity, Herm first leverages a receiver\-centric ego\-binding mechanism to align semantics\. Then, a similarity\-aware dual\-branch fusion module is proposed to prevent critical semantic dilution\. To realize explicit message\-semantic conversion,  we devise an iterative decoding scheme via algebraic inverse operation\. Experiments exhibit that Herm outperforms baselines across various noisy scenarios while maintaining superior structural readability\.

## Mental\-Models for Multi\-Agent Systems

**Authors:** Hanan Gani; Lulu \(Siwen\) Shao; Manmohan Chandraker

**ID:** 153908\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153908

[Paper](<https://openreview.net/forum?id=HoG47ROacO>) | [PDF](<https://openreview.net/pdf?id=HoG47ROacO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153908>)

Large foundation models have accelerated progress toward general\-purpose agents that interact with humans and other agents through language and multimodal signals\. However, robust multi\-agent decision\-making requires reasoning about what other agents know, intend, and are likely to do under partial observability\. Current agentic systems often operate through prompt design, memory, or end\-to\-end behavioral shaping, but typically do not learn an explicit partner\-state representation that can be reused as a decision variable across tasks\. We introduce mental\-model\-enabled agents, a framework that equips an agent with a latent mental model of its counterpart, allowing it to infer hidden beliefs, intentions, and likely reactions from the observed history and use these inferences to guide action selection\. Our method learns an amortized recursive Theory\-of\-Mind representation, with first\- and second\-order mental\-state structure, jointly with a belief\-conditioned reward model that evaluates candidate actions relative to the inferred partner state\. A policy is then learned under this belief\-aware signal, yielding an agent that can act independently at inference time while retaining the benefits of explicit partner modeling\. We evaluate the same framework on both language\-only and multimodal benchmarks\. Across these settings, explicit mental\-state modeling consistently improves interaction quality and Theory\-of\-Mind performance over base agentic systems, showing that structured partner modeling is a useful inductive bias for general multi\-agent systems\.

## Market\-Based Runtime Resource Allocation for LLM Multi\-Agent Systems

**Authors:** Yixue Huang; Mingxin Wang; Hao Li; Hao Jiang

**ID:** 155373\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155373

[Paper](<https://openreview.net/forum?id=67jpPq2Bsk>) | [PDF](<https://openreview.net/pdf?id=67jpPq2Bsk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155373>)

LLM multi\-agent systems rely on division of labor to solve complex tasks, but their execution can be blocked by contention for shared resources such as GPU test environments, CPU execution slots, and exclusive tool sessions\. Existing workflows, task allocation methods, and runtime schedulers usually arbitrate such access indirectly through workflow position, dependency structure, queue state, or resource metrics\. These criteria do not fully capture the value of satisfying a specific request, because request value is distributed across agents' local execution states and changes with tests, retries, and downstream results\. We propose a market\-based protocol for access arbitration in LLM multi\-agent systems\. Each agent converts its current plan and local execution state into a structured, budget\-constrained bid that signals relative urgency\. For asynchronous requests, an online clearing method based on optimal stopping decides when to close the clearing window, allocate access rights, settle payments, and track resource occupation until release\. Across three contention scenarios, Market reduces makespan by 5\.2\\%, 2\.5\\%, and 4\.9\\% relative to the strongest primary baselines, while improving task score by about two percentage points\.

## Risk\-Calibrated Context Selection for Healthcare Multi\-Agent Handoff

**Authors:** Manu Agrawal; Sumit Mukherjee

**ID:** 154212\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154212

[Paper](<https://openreview.net/forum?id=FLlWDrOo4c>) | [PDF](<https://openreview.net/pdf?id=FLlWDrOo4c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154212>)

Specialized agents collaborate by transferring memory: retrieved records, generated summaries, tool traces, and long\-running state\. In regulated domains this is a governance problem, not a retrieval problem: the receiver's task matters, but so does whether it was authorized to receive each item and whether the handoff exposed more than necessary\. We formalize minimum\-necessary context selection as a constrained submodular subset\-selection problem with an additive exposure cost and a distributional task\-success risk bound\. Our algorithm, ScopeSelect, first hard\-masks items whose layer or scope the receiver contract does not admit, then runs a cost\-benefit greedy selector against a monotone submodular utility, attaining a $\\\\frac\{1\}\{2\}\(1\-1/e\)$ approximation bound under a budget, and finally wraps threshold selection in Conformal Risk Control, giving a finite\-sample distribution\-free guarantee $\\\\mathbb\{E\}\[L\(S\_\{\\\\hat\{\\\\gamma\}\}\)\] \\\\le \\\\alpha$ on exchangeable calibration data\. We evaluate on HealthHandoff\-Bench, a synthetic benchmark with 21,600 healthcare\-agent handoff tasks across four workflows, and Synthea\-HH, a realism tier ingested from 340 Synthea\-generated FHIR bundles\. A three\-source blinded label audit compares benchmark labels, model\-generated labels, and clinical\-informatics expert review, with high agreement for sensitivity labels and policy\-boundary disagreements for necessity and authorization\. Against authorized TF\-IDF, embedding retrieval, a cross\-encoder reranker, and a calibrated LLM\-as\-selector, ScopeSelect is the only method meeting $\\\\alpha = 0\.15$ at competitive task success\. The hard\-mask safety property holds under 30% label noise, 100 adversarial attacks, and receiver\-role shift; a live\-LLM run with Claude Sonnet 4\.5 exhibits a calibration\-transfer gap that motivates per\-workflow recalibration\. We release the benchmark, Synthea\-HH pipeline, CRC calibration harness, and a signed\-handoff prototype\.

## LLM\-Based Multi\-Agent Blackboard System for Information Discovery in Data Science

**Authors:** Alireza Salemi; Mihir Parmar; Palash Goyal; Yiwen Song; Jinsung Yoon; Hamed Zamani; Tomas Pfister; Hamid Palangi

**ID:** 151426\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151426

[Paper](<https://openreview.net/forum?id=ao3zijumY7>) | [PDF](<https://openreview.net/pdf?id=ao3zijumY7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151426>)

Advances in large language models \(LLMs\) have created new opportunities in data science, but their deployment is often limited by the challenge of finding relevant data in large data lakes\. Existing methods struggle with this: both single\- and multi\-agent systems are quickly overwhelmed by large, heterogeneous files, and master–slave multi\-agent systems rely on a rigid central controller that requires precise knowledge of each sub\-agent’s capabilities, which is not possible in large\-scale settings where the main agent lacks full observability over sub\-agents’ knowledge and competencies\. We propose a novel multi\-agent paradigm inspired by the blackboard architecture for traditional AI models\. In our framework, a central agent posts requests to a shared blackboard, and autonomous subordinate agents\-\-either responsible for a partition of the data lake or retrieval from web\-\-volunteer to respond based on their capabilities\. This design improves scalability and flexibility by removing the need for a central coordinator to know each agent’s expertise or internal knowledge\. We evaluate the approach on three benchmarks that require data discovery: KramaBench and modified versions of DSBench and DA\-Code\. Results show that the blackboard architecture substantially outperforms strong baselines, achieving 13%–57% relative improvements in end\-to\-end success and up to a 9% relative gain in data discovery F1 over the best baseline\.

## SceneFactory: GPU\-Accelerated Multi\-Agent Driving Simulation with Physics\-Based Vehicle Dynamics

**Authors:** Yicheng Zhu; Yang Chen; Tao Li; Zilin Bian

**ID:** 139016\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139016

[Paper](<https://openreview.net/forum?id=qCvGezil5Y>) | [PDF](<https://openreview.net/pdf?id=qCvGezil5Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139016>)

_Abstract unavailable from the accessible public sources._

## When Parallelism Pays Off: Cohesion\-Aware Task Partitioning for Multi\-Agent Coding

**Authors:** Xu Yang; Lunyiu Nie; Ethan Chandra; Stanislav Gannutin; Fangru Lin; Swarat Chaudhuri

**ID:** 148594\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148594

[Paper](<https://openreview.net/forum?id=wYda526jWp>) | [PDF](<https://openreview.net/pdf?id=wYda526jWp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148594>)

_Abstract unavailable from the accessible public sources._

## Norm Enforcement for AI Agents: Robustly Shaping Behavior in Multi\-Agent Systems

**Authors:** Yaowen Ye; Jacob Steinhardt

**ID:** 151090\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151090

[Paper](<https://openreview.net/forum?id=d3KYxJNekT>) | [PDF](<https://openreview.net/pdf?id=d3KYxJNekT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151090>)

_Abstract unavailable from the accessible public sources._

## EVOCHAMBER:  Test\-Time Co\-evolution of Multi\-Agent System at Individual, Team, and Population Scales

**Authors:** Yaolun Zhang; Tianyi Xu; Shengyu Dai; Zhenwen Shao; Qingyun Wu; Huazheng Wang

**ID:** 150274\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150274

[Paper](<https://openreview.net/forum?id=jNJFL5PPGJ>) | [PDF](<https://openreview.net/pdf?id=jNJFL5PPGJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150274>)

_Abstract unavailable from the accessible public sources._

## Ask KG Agent: A Multi\-Agent Framework for Code Localization Using Code and Knowledge Graphs

**Authors:** Chanyoung Chung; JEEMIN KIM; Joyce Whang

**ID:** 155386\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155386

[Paper](<https://openreview.net/forum?id=62XPovBV57>) | [PDF](<https://openreview.net/pdf?id=62XPovBV57>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155386>)

_Abstract unavailable from the accessible public sources._

## NashDreamer: Model\-Based Reinforcement Learning for Zero\-Sum Imperfect\-Information Games

**Authors:** Tomáš Holeček; Viliam Lisy

**ID:** 151300\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151300

[Paper](<https://openreview.net/forum?id=bTFUsffZ8O>) | [PDF](<https://openreview.net/pdf?id=bTFUsffZ8O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151300>)

_Abstract unavailable from the accessible public sources._

## Reward Modeling for Multi\-Agent Orchestration

**Authors:** King Yeung Tsang; Zihao Zhao; Vishal Venkataramani; Haizhou Shi; Zixuan Ke; Semih Yavuz; Shafiq Joty; Hao Wang

**ID:** 155004\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155004

[Paper](<https://openreview.net/forum?id=9HnmEMnWjg>) | [PDF](<https://openreview.net/pdf?id=9HnmEMnWjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155004>)

Multi\-Agent Systems \(MAS\) built on Large Language Models \(LLMs\) require effective orchestration to coordinate specialized agents, yet training such orchestrators is hindered by limited supervision and high computational cost\. We propose \*\*Orch\*\*estration \*\*R\*\*eward \*\*M\*\*odeling \(\*\*Orch\-RM\*\*\), a self\-supervised framework for evaluating orchestration quality without human annotations\. Orch\-RM leverages intermediate artifacts from multi\-agent executions to construct win\-lose pairs for Bradley\-Terry reward model training\. Unlike existing MAS test\-time scaling and orchestrator training frameworks that rely on costly sub\-agent rollouts, Orch\-RM operates directly at the orchestration level, enabling efficient and high\-performing reward\-guided orchestrator training and MAS test\-time scaling\. As shown in Figure 1, Orch\-RM improves training efficiency by up to 10$\\times$ in token usage while improving MAS test\-time scaling performance by up to 8\\% in accuracy\. These gains consistently transfer across multiple domains, including mathematical reasoning, web\-based question answering, and multi\-hop reasoning, demonstrating orchestration\-level reward modeling as a scalable direction for robust multi\-agent orchestration\.  Data, code, and trained models will be released upon publication\.

## Sequential Probabilistic Uncertainty Estimation for Parallel Multi\-Agent Reasoning Systems

**Authors:** Tunyu Zhang; Zihao Zhao; Yusong Zhao; Haizhou Shi; Zhuohang Li; Haoxian Chen; Hao Wang; Dimitris Metaxas

**ID:** 153160\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153160

[Paper](<https://openreview.net/forum?id=NRg4W8EzfT>) | [PDF](<https://openreview.net/pdf?id=NRg4W8EzfT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153160>)

LLM\-based multi\-agent systems \(MAS\) have attracted growing attention for improving reasoning through interaction among multiple agents\. In this work, we focus on parallel multi\-agent reasoning systems, where several agents solve the same problem over multiple rounds and aggregate their outputs into a final answer\. Despite their strong reasoning performance, uncertainty estimation for such systems remains underexplored: the reliability of a MAS depends not only on individual generations, but also on how agents interact and evolve across rounds\. We propose SPI \(Sequential Probabilistic Inference\), a lightweight, training\-free uncertainty estimator that formulates MAS uncertainty as sequential inference over a latent system\-level belief\. SPI aggregates round\-level agreement and generation\-uncertainty signals through a filtering\-style update\. Across five backbones, six benchmarks, and two MAS protocols, SPI improves misclassification detection, selective prediction, and calibration over a broad set of uncertainty estimation baselines, including standard log\-likelihood\-based methods and MAS\-specific estimators\.

## Convergence Guarantees for Federated SARSA with Local Training and Heterogeneous Agents

**Authors:** Paul Mangold; Eloïse Berthier; Eric Moulines

**ID:** 155534\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155534

[Paper](<https://openreview.net/forum?id=4sFTcukOxE>) | [PDF](<https://openreview.net/pdf?id=4sFTcukOxE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155534>)

We present a novel theoretical analysis of Federated SARSA \(FedSARSA\) with linear function approximation and local training\. We establish convergence guarantees for FedSARSA in the presence of heterogeneity, both in local transitions and rewards, providing the first sample and communication complexity bounds in this setting\. At the core of our analysis is a new, exact multi\-step error expansion for single\-agent SARSA, which is of independent interest\. Our analysis precisely quantifies the impact of heterogeneity, demonstrating the convergence of FedSARSA with multiple local updates\. Crucially, we show that FedSARSA achieves linear speed\-up with respect to the number of agents, up to higher\-order terms due to Markovian sampling\. Numerical experiments support our theoretical findings\.

## Exemplar2VQA: A Scalable Exemplar\-Driven Visual Question Answering Generation Framework via Multi\-Agent Coding

**Authors:** Jiayu Ying; Qijian Tian; Ruijie Xu; Xinnan Zhu; Daoguo Dong; Jiachen Xu; Xin Tan

**ID:** 150839\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150839

[Paper](<https://openreview.net/forum?id=evkWoqTEUD>) | [PDF](<https://openreview.net/pdf?id=evkWoqTEUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150839>)

_Abstract unavailable from the accessible public sources._

## RADAR: Routing Agents via Difficulty\-Aware Recovery

**Authors:** Haizhou Du; Jinze Zhao; Huaicheng Yan

**ID:** 154283\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154283

[Paper](<https://openreview.net/forum?id=Eyl3543VgD>) | [PDF](<https://openreview.net/pdf?id=Eyl3543VgD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154283>)

_Abstract unavailable from the accessible public sources._

## ORBIT: A Framework for Multi\-Agent Security Evaluations

**Authors:** Ben Hagag; William L Anderson; Srija Chakraborty; Christian Schroeder de Witt

**ID:** 139033\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139033

[Paper](<https://openreview.net/forum?id=p1h5pUhxUi>) | [PDF](<https://openreview.net/pdf?id=p1h5pUhxUi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139033>)

Multi\-agent LLM systems are increasingly deployed for complex, long\-horizon tasks or emerge as a natural consequence of agents interacting in the wild\. Yet, they often have significant security vulnerabilities: the flexible protocols that enable task generalization also expose novel threats, from cascading prompt injection to inter\-agent collusion\. Progress in defending against these threats has been slowed by a lack of empirical evaluations, requiring bespoke environment development for every new defense and making standardized comparison impossible\. Existing evaluations address isolated threat models or single\-agent settings, but none jointly vary attack, defense, and architecture across realistic multi\-agent environments\. To address this gap, we introduce ORBIT, a configurable evaluation framework for empirical multi\-agent security research, built on UK AISI's Inspect\. ORBIT provides configurable communication topologies, memory, scheduling, and agent roles\. It supports four threat types \(indirect prompt injection, misuse, compromised agents, collusion\) and four defense strategies \(security prompting, guardian agents, monitors, dual\-LLM patterns\)\. The benchmark suite spans five scenario families covering browser use, computer use, agentic coding, customer service, and cooperative allocation\. Using ORBIT, we conduct controlled experiments varying defenses, attacks, topologies, and models\. We find evidence of significant gaps in defense transferability across threats, security–performance tradeoffs, and interactions between architectural choices and defense effectiveness\. To accelerate empirical multi\-agent security work, we make ORBIT available open\-source at: https://anonymous\.4open\.science/r/orbit\-D1A9\.

## MemCode: Discrete Semantic Representations for Long\-Term Agent Memory

**Authors:** Xin Li; Liang Hu; Duoqian Miao; Ming Peng; Qi Zhang

**ID:** 152904\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152904

[Paper](<https://openreview.net/forum?id=PYZcd99axs>) | [PDF](<https://openreview.net/pdf?id=PYZcd99axs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152904>)

Long\-term memory remains a fundamental bottleneck for large language model \(LLM\) agents across sessions\. Existing systems typically adopt a write\-then\-retrieve paradigm, storing context\-dependent dialogue fragments and retrieving them via nearest\-neighbor search in continuous embedding space\. This design yields unstable access units and systematically misses logically related but lexically distant evidence\. We propose MemCode, a long\-term agent memory framework that couples retrieval\-oriented writing with discrete associative retrieval\. MemCode rewrites dialogue into self\-contained atomic memory units \(AMUs\), maps AMUs into a learnable codebook with isomorphic semantic quantization \(ISQ\), and uses codebook co\-occurrence topology as a retrieval path complementary to vector search\. For long\-term memory stores, MemCode separates online atomic writes from asynchronous offline consolidation\. On LongMemEval\-S and LoCoMo with GPT\-4o\-mini and Qwen3\-30B\-A3B\-Instruct\-2507 backbones, MemCode achieves the best overall accuracy while keeping per\-dialogue memory construction within roughly 40\-\-130 seconds, making it 3\-\-21$\\times$ faster than LightMem and over an order of magnitude faster than A\-MEM and MemoryOS\.

## AutoformBot: Formalizing Mathematics at Scale

**Authors:** Ahmad Rammal; Niket Patel; Fabian Gloeckle; Amaury Hayat; Julia Kempe; Remi Munos; Charles Arnal; Vivien Cabannes

**ID:** 150745\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150745

[Paper](<https://openreview.net/forum?id=fhuGQ1zcqk>) | [PDF](<https://openreview.net/pdf?id=fhuGQ1zcqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150745>)

We present AutoformBot, a multi\-agent system for building an \*\*A\*\*utoformalized \*\*T\*\*extbook \*\*L\*\*ibrary \*\*A\*\*t \*\*S\*\*cale \(ATLAS\) in Lean 4\. AutoformBot orchestrates thousands of LLM agents, equipped with formal verification tools, dependency\-aware task scheduling, and collaborative version control, to translate informal textbook prose into machine\-checked definitions and proofs\. We apply our methods to a corpus of over \*20\* open\-access textbooks spanning analysis, algebra, topology, combinatorics, and probability, producing ATLAS: a verified library of over \*\*50,000\*\* Lean 4 declarations and \*\*500 thousand\*\* lines of code\. We release two artifacts: \(i\) AutoformBot, the open\-source multi\-agent framework; and \(ii\) ATLAS, the resulting formal library\. Our results suggest that autoformalizing the core content of graduate\-level mathematics at scale is now economically and technically feasible\. This opens the door to the automated verification of both human\- and machine\-generated mathematics at a research level\.

## Behavioral Probes for Information Flow in LLM Swarms

**Authors:** Junhui Chen; Yu Zhang; Lantian Li; Dong Wang

**ID:** 149644 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oXV7UcdWSz>) | [PDF](<https://openreview.net/pdf?id=oXV7UcdWSz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149644>)

Most existing approaches to LLM swarm optimization are utility\-driven, focusing on final task utility while leaving the processing, integration, and reliance of information within individual interactions largely implicit\. To address this, we study LLM swarm interactions from an information\-flow\-based view and introduce behavioral probes to quantify information flow patterns\. Specifically, we repurpose External Context Score \(ECS\) and Parametric Knowledge Score \(PKS\)—originally designed for hallucination analysis—to measure a node’s external\-context dependence and parametric\-knowledge dependence, respectively\. Across controlled and realistic swarm settings, we observe consistent patterns: ECS increases with input relevance and distinguishes useful multi\-source contributions, while PKS decreases as informative context accumulates\. Building on this heuristic interpretation, we demonstrate how these probes can complement utility\-driven structure optimization in two controlled applications\. Probe\-guided node pruning significantly reduces anomalous nodes, and probe\-guided reasoning\-path search accelerates convergence compared to utility\-only baselines\. Our empirical results suggest that behavioral probes can make the internal information flow of LLM swarms observable and serve as effective auxiliary signals for structure optimization\.

## MindGames:A Multi\-Agent Benchmark and Trajectory Dataset for Evaluating Social and Strategic Reasoning in LLMs

**Authors:** Kevin Wang; Benjamin Kempinski; Anna C\. M\. Thöni; Xin Yuan Cheng; Jianzhu Yao; Benjamin Finch; Leon Guertler; Viraj Nadkarni; Yihan Jiang; Cheston Tan; Maria Polukarov; Pramod Viswanath; Leshem Choshen; Mathieu Lauriere; Tal Kachman; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 139792 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4WI2wAgqbO>) | [PDF](<https://openreview.net/pdf?id=4WI2wAgqbO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139792>)

Large language models \(LLMs\) are increasingly deployed as interactive agents, yet their capacity for social and strategic reasoning over extended interaction remains poorly understood\. Existing evaluations rely on static vignettes or single\-game benchmarks that cannot capture the sustained, multi\-faceted reasoning that real\-world multi\-agent settings demand\. We introduce Mindgames, a multi\-game arena and evaluation platform for LLM agents that operationalizes complementary reasoning demands relevant to \`\`theory of mind'': belief attribution under hidden information, opponent modeling through repeated strategic interaction, cooperative inference under knowledge asymmetries, and sustained deception in social deduction\. Built on TextArena, Mindgames provides a unified interaction interface, TrueSkill\-based rating, and full trajectory logging across four game environments\. We instantiate Mindgames through a 2025 competition cycle hosted at a major AI conference, which assessed 944 submitted agents from 76 teams across four games: Colonel Blotto, Iterated Prisoner's Dilemma, Codenames, and Secret Mafia\. Our analysis surfaces both agent\-level and evaluation\-level limitations: brittle rule adherence remains a major bottleneck, top\-performing systems repeatedly rely on explicit structural scaffolding, and leaderboard validity differs sharply across environments\. In particular, failure\-heavy environments can reward robustness to opponent errors as much as strategic ability, with Secret Mafia exhibiting a pronounced error\-survival confound in this cycle\. We release a dataset of 29,571 multi\-agent games \(comprising 94,132 player trajectories and 243M tokens\) with turn\-level observations, actions, and rewards, together with MG\-Ref, a deterministic offline tournament protocol that scores new agents against a frozen reference pool of top\-ranked, low\-error Stage\~II submissions under the same error\-attribution lens used in this analysis\. By releasing the benchmark interface, dataset, MG\-Ref, and starter kit, Mindgames provides a reproducible resource for studying progress in multi\-agent social and strategic reasoning\.

## The PokeAgent Challenge: Competitive and Long\-Context Learning at Scale

**Authors:** Seth Karten; Jake Grigsby; Tersoo Upaa; Junik Bae; Seonghun Hong; Hyunyoung Jeong; Jaeyoon Jung; Kun Kerdthaisong; Gyungbo Kim; Hyeokgi Kim; Yujin Kim; Eunju Kwon; Dongyu Liu; Patrick Mariglia; Sangyeon Park; Benedikt Schink; Xianwei Shi; Anthony sistilli; Joseph Twin; Arian Urdu; Matin Urdu; Qiao Wang; Ling Wu; Wenli Zhang; Kunsheng Zhou; Stephanie Milani; Kiran Vodrahalli; Amy Zhang; Fei Fang; Yuke Zhu; Chi Jin

**ID:** 139132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j6gW9gBis0>) | [PDF](<https://openreview.net/pdf?id=j6gW9gBis0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139132>)

We present the PokéAgent Challenge, a large\-scale benchmark for decision\-making research built on Pokémon's multi\-agent battle system and expansive role\-playing game \(RPG\) environment\. Partial observability, game\-theoretic reasoning, and long\-horizon planning remain open problems for frontier AI, yet few benchmarks stress all three simultaneously under realistic conditions\. PokéAgent targets these limitations at scale through two complementary tracks: our Battling Track, which calls for strategic reasoning and generalization under partial observability in competitive Pokémon battles, and our Speedrunning Track, which requires long\-horizon planning and sequential decision\-making in the Pokémon RPG\. Our Battling Track supplies a dataset of 20M\+ battle trajectories alongside a suite of heuristic, RL, and LLM\-based baselines capable of high\-level competitive play\. Our Speedrunning Track provides the first standardized evaluation framework for RPG speedrunning, including an open\-source multi\-agent orchestration system that enables modular, reproducible comparisons of harness\-based LLM approaches\. Our NeurIPS 2025 competition validates both the quality of our resources and the research community's interest in Pokémon, with more than 100 teams competing across both tracks and winning solutions detailed in our paper\. Participant submissions and our own baselines reveal considerable gaps between generalist \(LLM\), specialist \(RL\), and elite human performance\. Analysis against the BenchPress evaluation matrix shows that Pokémon battling is nearly orthogonal to standard LLM benchmarks, measuring capabilities not captured by existing evaluation suites and positioning Pokémon as an unsolved benchmark that can drive RL and LLM research forward\. We transition from the NeurIPS 2025 competition to a living benchmark by releasing a live leaderboard for Battling and self\-contained evaluation for Speedrunning at https://pokeagentchallenge\.com\.

## CASPIAN: Online Detection and Attribution of Cascade Attacks in LLM Multi\-Agent Systems via Cross\-Channel Causal Monitoring

**Authors:** Kavana Venkatesh; Jafar Isbarov; Saad Amin; Murat Kantarcioglu; Jiaming Cui

**ID:** 150932\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150932

[Paper](<https://openreview.net/forum?id=eERJSSfRu8>) | [PDF](<https://openreview.net/pdf?id=eERJSSfRu8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150932>)

_Abstract unavailable from the accessible public sources._

## Control Charts for Multi\-Agent Systems

**Authors:** Hayden Helm; Carey E Priebe; Brandon Duderstadt

**ID:** 156073 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ef8FCdBWk>) | [PDF](<https://openreview.net/pdf?id=0ef8FCdBWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156073>)

Generative agents have proven to be powerful assistants in a wide variety of contexts\. Given this success, users are now deploying agents with minimal restrictions in open ended, multi\-agent environments\. Current methods for measuring the dynamics of open\-ended multi\-agent systems are limited to qualitative inspection\. In this paper, we extend the process\-theoretic notion of adaptive control charts to multi\-agent systems to enable automated monitoring\. Using simulation, we demonstrate that adaptive control charts are necessary for monitoring multi\-agent systems that can learn from their environment\. We further demonstrate, both empirically and theoretically, that adaptive control charts are susceptible to adversarial agents that defect sufficiently slowly\. These results illustrate a fundamental tradeoff in multi\-agent system control: either agents in a system cannot learn \\textit\{or\} the system is susceptible to adversaries\.

## Auditing AI peer reviewers: a dose\-response and false\-positive benchmark on real scientific papers

**Authors:** Íñigo Zubeldia; Boris Bolliet; Francisco Villaescusa; Pablo Villanueva\-Domingo; Miles Cranmer

**ID:** 152885 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pf1SuIB41Z>) | [PDF](<https://openreview.net/pdf?id=Pf1SuIB41Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152885>)

LLM\-based peer review is now used at production scale, but rigorous evaluation remains limited\. We introduce a benchmark for evaluating AI peer reviewers’ detection of injected errors and quantifying false\-positive rates across error type, severity, prompting strategy, and reviewer architecture\. We also present skepthical, a multi\-agent AI reviewer that verifies citations by retrieving and reading cited papers, checks mathematics with computer algebra, audits numerical claims with code, and uses a cross\-model ensemble for general scientific issues\. On 15 astrophysics preprints containing 177 injected errors, we benchmark 12 reviewer systems: skepthical; six single\-LLM reviewers from three providers, each run with free\-form and structured prompts; two Claude Code reviewers using the same Claude model and tools, one with a free\-form prompt and one with a structured prompt; and three external reviewers\. Detection performance varies sharply by model, prompt, tool use, and error type\. Under the same free\-form prompt, three frontier LLMs differ by 48\.6 pp in total detection rate; a structured prompt halves this spread by improving the weaker models\. Within Claude Code, changing only the prompt from free\-form to structured raises detection by 32\.2 pp\. skepthical achieves the highest overall detection rate, 70\.6±6\.2%, with the best performance on general issues, 82\.2%, and citation errors, 46\.7%\. On numerical errors, it matches both GPT\-5\.5 configurations at 80\.0%, behind structured Claude Code at 91\.1%; on mathematics, its 73\.8% rate overlaps with both GPT\-5\.5 configurations within confidence intervals\. False\-positive rates also vary substantially: free\-form Opus 4\.7 has the lowest overall rate at 1\.0%, while skepthical is the only reviewer with no false\-positive failure mode jointly across mathematics, numerics, and citations, yielding a 2\.8% overall rate\. skepthical is deployed publicly at skepthical\-ai\.org, and we release the evaluation set as a benchmark\.

## COOP$^2$: Defining, Observing, and Repairing Cooperation in LLM Multi\-Agent Systems

**Authors:** Hanqing Yang; Narjes Nourzad; Shiyu Chen; Marie Siew; Jingdi Chen; Carlee Joe\-Wong

**ID:** 139333\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139333

[Paper](<https://openreview.net/forum?id=WWrTVADZAi>) | [PDF](<https://openreview.net/pdf?id=WWrTVADZAi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139333>)

Many complex tasks require extended effort, diverse capabilities, or coordinated actions beyond what a single agent can provide\.  However, simply adding more agents does not guarantee better performance, as effective cooperation depends on how agents interact with each other and with task structure to satisfy evolving constraints over time\.  This challenge is amplified for LLM\-based multi\-agent systems \(LLM\-MAS\): plans, messages, and revisions occur in natural language, whereas task progress depends on grounded environment actions\.  Current evaluations mostly treat cooperation as an implicit ingredient of final task success, leaving both cooperation and the effect of multi\-agent interaction on task dynamics difficult to study\.  We introduce COOP$^2$, an evaluation framework that grounds high\-level agent cooperation dynamics in LLM\-MAS within task progress in the environment\. COOP$^2$ then defines cooperative tasks with verifiable cooperative requirements, allowing us to analyze how cooperation unfolds over time with respect to task progress, as well as where and why cooperation breaks down\. Building on this framework, we develop COOP$^2$\-Repair, which predicts constraint failures from group plans and opens targeted repair channels for guided revisions\. Across two environments and three communication structures, COOP$^2$\-Repair improves task success and constraint satisfaction while exposing the additional decision overhead and communication load required for repair\.

## Robust Instruction Compliance in Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Wo Wei Lin; Ethan Rathbun; Enrico Marchesini; Xiang Zhi Tan

**ID:** 148746\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148746

[Paper](<https://openreview.net/forum?id=vMEXVo6MCM>) | [PDF](<https://openreview.net/pdf?id=vMEXVo6MCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148746>)

Real\-world multi\-agent reinforcement learning \(MARL\) systems must operate autonomously while adapting to natural language instructions provided by humans\. These instructions arrive unpredictably, interrupt ongoing actions, and may conflict with long\-horizon objectives under partial observability\. Recent vision\-language models enable instruction following, but are computationally expensive and limited to single\-agent settings\. Conversely, MARL can handle long\-horizon coordination with macro\-actions, but assumes uninterrupted execution\. This work introduces macro\-action value cancellation for instruction compliance \(MAVIC\) to enable interruption\-aware MARL by bootstrapping the value of ongoing macro\-actions upon receiving instructions\. Agents can thus decouple task objective optimization from instruction\-driven overrides within a unified policy and re\-plan without destabilizing the underlying learning process\. MAVIC integrates with standard actor\-critic methods and achieves high instruction compliance while preserving base task performance across increasingly complex macro\-action benchmarks\.

## Rethinking Credit Assignment in Cooperative MARL via Interventional Reward Response

**Authors:** Chamjin Joo; Myounghoon Ha; Sang Wan Lee

**ID:** 154206\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154206

[Paper](<https://openreview.net/forum?id=FOmIe6PtvT>) | [PDF](<https://openreview.net/pdf?id=FOmIe6PtvT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154206>)

Credit assignment remains a central challenge in cooperative multi\-agent reinforcement learning \(MARL\), especially under partial observability, where individual policy updates may not accurately reflect each agent’s actual contribution to team outcomes\. While policy\-based methods such as MAPPO and IPPO provide strong optimization frameworks, their updates are typically derived from global rewards and observational value surrogates, without explicitly defining agent\-specific credit\. Misaligned credit signals can mislead individual policy improvement, resulting in inefficient coordination and weaker team performance\. We address this challenge by formulating agent\-level credit as an interventional reward response, using Proximal Causal Inference \(PCI\) to identify credit from observable proxies via an outcome bridge function\. Building on this identification strategy, we design a practical credit\-aligned update signal and integrate it into policy gradient methods\. Empirical evaluations on diagnostic and benchmark tasks demonstrate that the proposed credit signal improves policy learning under partial observability, highlighting proximal identification as a promising foundation for designing credit\-aware policy updates in cooperative MARL\. To the best of our knowledge, this work presents the first PCI\-based solution for online multi\-agent cooperation\.

## To trust or not to trust: Attention\-based Trust Management for LLM Multi\-Agent Systems

**Authors:** Pengfei He; Zhenwei Dai; Xianfeng Tang; Yue XING; Hui Liu; Jingying Zeng; Qiankun Peng; Shrivats Agrawal; Samarth Varshney; Suhang Wang; Jiliang Tang; Qi He

**ID:** 149022\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149022

[Paper](<https://openreview.net/forum?id=tRFYHQFSH4>) | [PDF](<https://openreview.net/pdf?id=tRFYHQFSH4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149022>)

Large Language Model\-based Multi\-Agent Systems \(LLM\-MAS\) have demonstrated strong capabilities in solving complex tasks but remain vulnerable when agents receive unreliable messages\. This vulnerability stems from a fundamental gap: LLM agents treat all incoming messages equally without evaluating their trustworthiness\. While some existing studies approach trustworthiness, they focus on a single type of harmfulness rather than analyze it in a holistic approach from multiple trustworthiness perspectives\. We address this gap by proposing a comprehensive definition of trustworthiness inspired by human communication theory \\citep\{grice1975logic\}\. Our definition identifies six orthogonal trust dimensions that provide interpretable measures of trustworthiness\. Building on this definition, we introduce the Attention Trust Score \(A‑Trust\), a lightweight, attention‑based method for evaluating the trustworthiness of messages\. We then develop a principled trust management system \(TMS\) for LLM‑MAS that supports both message‑level and agent‑level trust assessments\. Experiments across diverse multi‑agent settings and tasks demonstrate that our TMS significantly improves robustness against malicious inputs\.

## Multi\-agent Collaboration with State Management

**Authors:** Mengyang Liu; Taozhi Chen; Zhenhua Xu; Xue Jiang; Yihong Dong

**ID:** 151127\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151127

[Paper](<https://openreview.net/forum?id=cneNwmDOF3>) | [PDF](<https://openreview.net/pdf?id=cneNwmDOF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151127>)

_Abstract unavailable from the accessible public sources._

## Market Regime Council for Dynamic Credit Assignment in Multi\-Agent LLM  Decision Systems

**Authors:** Yunhua Pei; Zerui Ge; Jin Zheng; John Cartlidge

**ID:** 148428\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148428

[Paper](<https://openreview.net/forum?id=xuhyMmn0D0>) | [PDF](<https://openreview.net/pdf?id=xuhyMmn0D0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148428>)

_Abstract unavailable from the accessible public sources._

## Agent2World: Learning to Generate Symbolic World Models via Adaptive Multi\-Agent Feedback

**Authors:** Mengkang Hu; Bowei Xia; Yuran Wu; Ailing Yu; Yude Zou; Qiguang Chen; Shijian Wang; Jiarui Jin; Kexin Li; Wenxiang Jiao; Yuan Lu; Ping Luo

**ID:** 155447\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155447

[Paper](<https://openreview.net/forum?id=5YAV5SEvXG>) | [PDF](<https://openreview.net/pdf?id=5YAV5SEvXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155447>)

_Abstract unavailable from the accessible public sources._

## Multi\-Agent Coordination via Support\-Preserving Distillation

**Authors:** Sangmin Lee; Youngju Na; Chanmi Lee; Sung\-eui Yoon

**ID:** 152690\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152690

[Paper](<https://openreview.net/forum?id=R9LIGIKChN>) | [PDF](<https://openreview.net/pdf?id=R9LIGIKChN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152690>)

Offline MARL increasingly relies on generative policies to model multimodal joint behavior, typically by distilling a centralized teacher into decentralized one\-step actors under the CTDE\. We identify a failure mode at the teacher training stage: standard flow\-based teachers pair noise with replay targets independently, so nearby noise samples can be routed toward conflicting coordination modes\. The teacher then produces samples between valid modes, and because the distillation loss regresses each local actor onto the conditional mean of the teacher's output given local input, this error is not absorbed but propagated to the student\. To remove this teacher\-side artifact, we propose Mode\-Support Semi\-Discrete Optimal Transport \(MoSDOT\), which summarizes multimodal replay into a finite mode support with prescribed capacities and uses conditional semi\-discrete optimal transport to assign each noise sample to a single mode before teacher training\. We additionally study a common\-randomness variant that uses a shared noise component at execution to expose the residual gap intrinsic to strict\-product execution\. On controlled diagnostics and offline MARL benchmarks, MoSDOT improves endpoint quality and routing consistency, particularly on datasets exhibiting multimodal joint behavior\.

## ROTATE: Regret\-driven Open\-ended Training for Ad Hoc Teamwork

**Authors:** Caroline Wang; Muhammad Arrasy Rahman; Benjamin Nativi; Johnny Liu; Jiaxun Cui; Yoonchang Sung; Peter Stone

**ID:** 150582\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150582

[Paper](<https://openreview.net/forum?id=h76k7u9S4o>) | [PDF](<https://openreview.net/pdf?id=h76k7u9S4o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150582>)

Learning to collaborate with previously unseen partners is a fundamental generalization challenge, known as Ad Hoc Teamwork \(AHT\)\. Existing methods often adopt a two\-stage pipeline: first, a fixed population of teammates is generated, and second, an AHT agent is trained to collaborate with them\. This separation limits coverage of behaviors and ignores whether the generated teammates are informative for the AHT agent to learn from\. On the other hand, AHT agents are typically trained under the assumption that the training teammate set is uncontrollable, despite the fact that its composition strongly influences generalization\. This paper presents a unified framework for AHT by reformulating the problem as an open\-ended learning process between an AHT agent and an adversarial teammate generator\. We introduce ROTATE, a regret\-driven, open\-ended training algorithm that alternates between improving the AHT agent and generating teammates that probe its collaboration deficiencies\. Experiments across Overcooked and Level\-Based Foraging tasks demonstrate that ROTATE significantly outperforms baselines on an unseen set of teammates, establishing a new standard for robust, generalizable teamwork\.

## Policy\-Level Exploration for Coordinated Multi\-Agent Reinforcement Learning

**Authors:** Yucong Zhang; Chao Yu

**ID:** 154020\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154020

[Paper](<https://openreview.net/forum?id=GqILfCgsZe>) | [PDF](<https://openreview.net/pdf?id=GqILfCgsZe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154020>)

In multi\-agent reinforcement learning \(MARL\), agents must not only discover high\-reward behaviours but also reliably reproduce coordinated behaviours over time\. A fundamental challenge arises from a mismatch between action\-level stochastic exploration and temporally extended coordination\. To address this issue, we propose a policy\-level exploration framework with Deterministic Action Execution \(DAE\) for MARL, which shifts locally random action exploration to temporally extended policy selection via an option\-based exploration mechanism\. Specifically, at each time step, each agent selects a policy from a shared policy set\\textemdash comprising one exploitation policy and multiple exploration policies\\textemdash using a learned option policy, and actions are executed deterministically conditioned on the selected policy\. By maintaining deterministic execution under temporally extended policy selection, DAE facilitates temporally coordinated behaviours across multiple time steps\. Comprehensive experiments on four multi\-agent tasks\\textemdash Predator Prey, StarCraft II micro management challenge \(SMAC\), SMACv2, Google Research Football, and Multi\-Agent Coordination benchmark \(MACO\)\\textemdash demonstrate that DAE outperforms mainstream baselines, achieving superior sample efficiency and final learning performance\.

## A Separation Principle for Cooperative Multi\-Agent Reinforcement Learning

**Authors:** Lucia Pezzetti; Nicolas Lanzetti; Antonio Terpin; Florian Dorfler; Giorgia Ramponi

**ID:** 149847\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149847

[Paper](<https://openreview.net/forum?id=mrNoBqs1mU>) | [PDF](<https://openreview.net/pdf?id=mrNoBqs1mU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149847>)

We study cooperative multi\-agent reinforcement learning \(MARL\) problems in which agents evolve under decoupled noisy dynamics but are coupled via a population objective\. A canonical example is a mobility operator that orchestrates a fleet of vehicles in an urban environment to meet customer demand\. The stochastic and time\-varying nature of these problems calls for learning approaches, yet existing MARL algorithms do not scale: learning assignment and routing jointly over the full state\-action space becomes prohibitive as the number of agents grows\. By studying the problem as a control problem over probability measures, we prove a separation principle: the population\-level cost\-to\-go function is upper\-bounded by an optimal transport problem whose transportation cost is the target\-conditioned single\-agent cost\-to\-go function\. This result simplifies the multi\-agent problem to learning a single\-agent policy and coordinating the agents via optimal transport\. Thus, we introduce SALT \(Separation\-based Assignment and Learning via optimal Transport\) a family of algorithms that learn a target\-conditioned single\-agent policy using any standard RL algorithm, and then coordinate the agents via optimal transport\. Because learning occurs at the single\-agent level, SALT scales to fleet sizes where MARL baselines become intractable and transfers without retraining to fleet sizes unseen during training\. In a vehicle\-delivery experiment in south Manhattan’s road network, where MARL baselines are computationally prohibitive, SALT improves travel times by up to 20% over a shortest\-path routing heuristic and transfers without retraining to different fleet sizes\. In stochastic grid worlds, SALT reduces average travel times by more than 40% relative to MARL baselines and scales to population sizes where these methods fail\.

## HoloCode: A Code\-Centric Multi\-Agent Framework for Image\-to\-3D Scene Generation

**Authors:** Hanlin Chen; Chung\-Ching Lin; Yuyang Zhao; Dongyue Lu; Zhengyuan Yang; Xiaofei Wang; Kevin Lin; Zhendong Wang; Yu Yang; Lijuan Wang

**ID:** 152551\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152551

[Paper](<https://openreview.net/forum?id=SHfDjzXoTd>) | [PDF](<https://openreview.net/pdf?id=SHfDjzXoTd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152551>)

Image\-to\-3D scene generation must recover both object geometry and plausible spatial relations\. A common diffusion\-based pipeline, exemplified by SAM 3D, generates each object separately and assembles the results\. This preserves local details, but the lack of strong scene\-level constraints often causes floating objects, interpenetrations, missing contacts, or implausible relative scales\. Inspired by human designers who plan a layout before placing assets, we introduce \\ours\{\}, a code\-centric multi\-agent framework\. Given a single image and 2D localization cues, a vision\-language model \(VLM\)\-based Arranger Agent predicts executable Blender Python layout code with object identities and 3D transforms\. A Modeler Agent binds each object to geometry through asset retrieval or image\-to\-3D object generation, and a Refiner Agent renders the scene and edits the code from visual feedback\. The code representation exposes object names, positions, rotations, and scales, making generated scenes editable and interpretable\. We train the code\-generating agents using Blender Python datasets built from SAGE and 3D\-FRONT, then further optimize them with GRPO rewards for executability and spatial alignment\. Experiments in in\-domain and cross\-domain settings show that \\ourMethod\{\} improves scene\-level plausibility while preserving object fidelity\.

## The Illusion of Multi\-Agent Advantage

**Authors:** Prathyusha Jwalapuram; Hehai Lin; Chuyuan Li; Fangkai Jiao; Sudong Wang; Yifei Ming; Zixuan Ke; Chengwei Qin; Giuseppe Carenini; Shafiq Joty

**ID:** 139826 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2TcjzzhWse>) | [PDF](<https://openreview.net/pdf?id=2TcjzzhWse>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139826>)

_Abstract unavailable from the accessible public sources._

## DSBTR: A Diffusion Schrödinger Bridge Trajectory Refiner for Multi\-Agent Trajectory Prediction

**Authors:** Yuxi Xue; Xiangzheng Zhou; Xiaobo Chen; Jianjun Qian; Jian Yang

**ID:** 154766 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B68WLZ0xU0>) | [PDF](<https://openreview.net/pdf?id=B68WLZ0xU0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154766>)

Multi\-agent trajectory prediction is crucial for ensuring autonomous driving safety\. Although diffusion models show great potential in trajectory refinement, existing diffusion\-based refiners suffer from severe exposure bias\. This bias stems from the distribution mismatch between the noisy training endpoint and the noise\-free inference starting point, which frequently causes negative optimization during the refinement process\. To resolve this issue, this paper proposes the Diffusion Schrödinger Bridge Trajectory Refiner \(DSBTR\)\. By introducing a tractable Schrödinger bridge with dual\-terminal constraints, DSBTR ensures that the forward evolution endpoint strictly degenerates into a deterministic and noise\-free coarse prediction prior\. This theoretical alignment eliminates the initial boundary error and constrains the reverse solving process to a strict residual approximation\. Based on the semi\-linear structure of DSBTR, we derive a tailored high\-order DPM\-Solver to accelerate the sampling process and meet autonomous driving application requirements\. Extensive experiments on the ETH/UCY and SDD benchmarks demonstrate that DSBTR serves as an effective plug\-and\-play module\. It consistently improves the prediction accuracy of various baseline architectures and successfully avoids negative optimization\.

## Belief Engine: Configurable Stance Dynamics for Multi\-Agent LLM Deliberation

**Authors:** Joshua C Yang; Maurice Flechtner; Damian Dailisan; Michiel Bakker

**ID:** 151258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bjQRVp4xRa>) | [PDF](<https://openreview.net/pdf?id=bjQRVp4xRa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151258>)

LLM\-based AI agents are increasingly used to simulate deliberative social interactions, including negotiation, conflict resolution, and multi\-turn opinion exchanges\. In these settings, it is important to know not only what an agent says, but how its stance changes after receiving new information\. Current systems often make this difficult: agents may drift from assigned roles, echo an interaction partner, remain fixed despite relevant evidence, or appear to change because the prompt or retrieved context has changed\. We introduce the Belief Engine \(BE\), a framework that uses \`\`belief'' in a Bayesian modelling sense: a maintained evidential state over a proposition, exposed as scalar stance\. BE extracts structured evidence, stores active and archived argument records, and updates the belief state through a Bayesian log\-odds rule with two interpretable controls: evidence uptake $u$ and prior anchoring $a$\. Across multiple LLM models, sweeps of $u$ and $a$ demonstrate stable control over stance dynamics: higher uptake makes agents more responsive to new evidence, while stronger anchoring preserves the initial stance\. On DEBATE, a human deliberation dataset with pre/post opinions, BE is most accurate when participants move in the direction of extracted evidence, showing its strength in evidence\-following deliberative contexts; when all participants are evaluated together, gains are more modest because many people remain stable or move for reasons not captured by the extracted evidence stream\. BE therefore provides a configurable belief\-update layer for evidence\-grounded deliberation: LLM agents can be made open\-minded, anchored, or evidence\-sensitive by construction, while their stance trajectories and memory can be inspected, compared, and calibrated against human opinion change\.

## Paradoxes of Game Theoretic Equilibria and Price of Anarchy

**Authors:** Georgios Piliouras; Ian Gemp; Siqi Liu; Luke Marris

**ID:** 150825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1cGnSFoPg>) | [PDF](<https://openreview.net/pdf?id=f1cGnSFoPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150825>)

Static equilibria—Nash, Correlated \(CE\), and Coarse Correlated Equilibria \(CCE\)—and the Price of Anarchy \(PoA\) provide essential, tractable benchmarks for multi\-agent systems\. However, evaluating learning dynamics purely through $C^0$ fixed points and discrete empirical distributions abstracts away critical $C^1$ vector field information\. We demonstrate that this reduction diverges significantly from physical learning trajectories\. First, the worst\-case pure Nash equilibria anchoring canonical PoA bounds mathematically manifest as strict saddles—and in canonical instances, even as global maxima of the exact potential; because they are topologically unstable repellers, natural learning actively bypasses these theoretical inefficiency bounds\. Additionally, the PoA metric itself exhibits algebraic sensitivity; relaxing syntactic constraints to accommodate data\-driven, strictly positive affine cost models renders the Price of Anarchy unbounded\. Furthermore, evaluating algorithms strictly through time\-averaged regret minimization to reach CCE or Proximal CE \(PCE\) structurally permits convergence to strictly dominated strategies\. Even enforcing optimal $O\(1/T\)$ swap\-regret minimization provably accommodates chaotic limit sets in minimal normal\-form games\. Finally, in non\-atomic congestion games, discrete\-time learning natively bifurcates into Li\-Yorke chaos, driving time\-averaged inefficiency to scale exponentially as $2^p$, diverging from static sub\-linear bounds\. Collectively, these findings highlight the necessity of augmenting classical algebraic frameworks with dynamically grounded metrics\.

