# Social Aspects / Trustworthy Machine Learning

社会影响与可信人工智能 / 可信机器学习

165 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## MCPHunt: An Evaluation Framework for Cross\-Boundary Data Propagation in Multi\-Server MCP Agents

**Authors:** Haonan Li; Tianjun Sun; Yongqing Wang; Qisheng Zhang

**ID:** 139700 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9mPzIg8uil>) | [PDF](<https://openreview.net/pdf?id=9mPzIg8uil>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139700>)

Multi\-server MCP agents create an information\-flow control problem: faithful tool composition can turn individually benign read/write permissions into cross\-boundary credential propagation\-\-\-a structural side effect of workflow topology, not necessarily malicious model behavior\. We present MCPHunt, to our knowledge the first controlled benchmark that isolates non\-adversarial, verbatim credential propagation across multi\-server MCP trust boundaries, with three methodological contributions: \(1\) canary\-based taint tracking that reduces propagation detection to objective string matching; \(2\) an environment\-controlled coverage design with risky, benign, and hard\-negative conditions that validates pipeline soundness and controls for credential\-format confounds; \(3\) completion\-requires\-secret \(CRS\) stratification that disentangles task\-mandated propagation \(faithful execution of verbatim\-transfer instructions\) from policy\-violating propagation \(credentials included despite the option to redact\)\. Across 3,615 main\-benchmark traces from 5 models spanning 147 tasks and 9 mechanism families, policy\-violating propagation rates reach 11\.5\-\-41\.3% across all models\. This propagation is pathway\-specific \(25x cross\-mechanism range\) and concentrated in browser\-mediated data flows; hard\-negative controls provide evidence that production\-format credentials are not necessary\-\-\-prompt\-directed cross\-boundary data flow is sufficient\. A prompt\-mitigation study across 3 models reduces policy\-violating propagation by up to 97% while preserving 80\.5% utility, but effectiveness varies with instruction\-following capability\-\-\-suggesting that prompt\-level defenses alone may not suffice\. Code, traces, and labeling pipeline are released under MIT and CC BY 4\.0\.

## Coherence\-Aware Transition\-Intent Fusion for LTL Planning under Uncertain Semantic Maps

**Authors:** Junyue Huang; Bowen Ye; Xiang Yin

**ID:** 152340 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tny26qM6EO>) | [PDF](<https://openreview.net/pdf?id=Tny26qM6EO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152340>)

Robots operating in semantic environments often need to satisfy linear temporal logic \(LTL\) tasks before the semantic map is fully known\. Many practical semantic\-LTL planners maintain semantic beliefs but execute a single task policy induced by a point semantic interpretation, such as a maximum\-a\-posteriori \(MAP\) semantic map, possibly supported by risk checks or active perception\. This premature commitment can be brittle when distant semantic observations are weak or correlated\. We propose Coherence\-Aware Transition\-Intent Fusion, an online planner that preserves automaton\-relevant semantic uncertainty using a finite top\-$K$ intent abstraction\. Given a conservative current automaton estimate, the planner propagates plausible semantic assignments through the automaton, converts feasible successor transitions into weighted reach\-avoid intents, and fuses their risk\-gated Dijkstra progress scores\. When competing intents create incoherent motion, a KL\-regularized calibration step shifts weight toward intents consistent with recent physical progress\. Experiments on random\-obstacle and room\-like semantic maps show improved satisfaction over single\-intent and raw\-fusion variants, and over a TOAPP\* MAP\-plus\-active\-perception baseline under the same static\-view sensor\. Ablations attribute the gain primarily to intent\-level calibration\.

## Provable Selective Auto\-labeling with Reliability Guarantees

**Authors:** Huipeng Huang; Wenbo Liao; Huajun Xi; Hao Zeng; Mengchen Zhao; Hongxin Wei

**ID:** 154352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EEhIsOCdWt>) | [PDF](<https://openreview.net/pdf?id=EEhIsOCdWt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154352>)

Auto\-labeling has emerged as a popular, cost\-effective alternative to manual annotation\. However, its performance is often highly inconsistent across different tasks, underscoring the importance of selective strategies\. Despite this, existing heuristic methods for selective auto\-labeling still rely heavily on model confidence scores and offer no reliable guarantee on the trustworthiness of the selected examples\. To address this, we propose $\\textbf\{Conformal Labeling\}$, a novel method that selects a subset of auto\-generated labels with a provably controlled false labeling rate \(FLR\)\. Our key idea is to formulate selective auto\-labeling as a multiple\-hypothesis testing problem, where each hypothesis indicates whether to accept the auto\-generated label for an instance\. Specifically, we construct a conformal $p$\-value for each auto\-generated label using a small calibration set, and then employ the Benjamini–Hochberg \(BH\) procedure with a novel correction factor to construct the subset with guaranteed FLR control\. Theoretically, we show that our method achieves finite\-sample FLR control and asymptotically optimal statistical power among all $p$\-value thresholding rules\. Extensive experiments on classification and open\-ended generation tasks validate the effectiveness of our method, achieving high statistical power while strictly controlling the FLR\.

## Calibration Is Not Control: Intervention Advantage for LLM\-Agent Oversight

**Authors:** Chubin Zhang; Zhenglin Wan; Xingrui Yu; jingxuan wu; Qi Wen; Pengfei Zhou; Wangbo Zhao; Ivor Tsang

**ID:** 149357 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qeqOwa6tud>) | [PDF](<https://openreview.net/pdf?id=qeqOwa6tud>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149357>)

Runtime oversight for LLM agents is commonly framed as scalar risk prediction: estimate failure likelihood, confidence, or uncertainty, then intervene once the score crosses a threshold\. We argue that this framing targets the wrong object for control\. The relevant question is not how likely the agent is to fail if it continues, but whether an available intervention would improve the outcome\. Two trajectory prefixes can have the same risk estimate while requiring different actions, because one remains recoverable and the other does not\. We formalize this mismatch as target error and identify intervention advantage, the expected utility gain from intervening rather than continuing, as the decision object for oversight\. To measure this mismatch, we introduce prefix branching, a same\-prefix counterfactual protocol that executes candidate actions from identical trajectory states\. Across four benchmarks, action\-conditioned control yields regime\-dependent gains over scalar routing\. In a calibration decomposition, recalibrating the same scalar score improves prediction metrics but leaves control regret unchanged, showing that calibration alone does not repair target error\. A simple prefix\-only action\-conditioned controller substantially reduces regret in the strongest interactive regime, from $0\.506$ to $0\.110$ on ALFWorld\. Gains shrink when interventions are weak or when scalar routing already preserves intervention\-relevant information\. These results suggest that LLM\-agent oversight should move from calibrated risk scoring toward action\-conditioned value estimation\.

## Reliable Federated Multi\-View Learning via Conflict\-Aware Evidence Calibration

**Authors:** Daoyuan Li; Zuyuan Yang; Hao Yang; Jiawen Kang

**ID:** 153948 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HMFQMoCE5C>) | [PDF](<https://openreview.net/pdf?id=HMFQMoCE5C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153948>)

Federated Multi\-View Learning \(FedMVL\) enables multiple clients with heterogeneous data views to collaboratively train global models without sharing private data\. Existing FedMVL algorithms often overlook the reliability of local predictions, as both uncertainty quantification and calibration remain challenging in privacy\-preserving federated settings\. Heterogeneous sensing devices yield varying view qualities, but view\-isolated training further exacerbates inherent bias of local model, inducing unreliable outputs\. Without proper calibration, these artifacts cause spurious cross\-view conflicts, ultimately undermining the accuracy and reliability of the aggregated global model\. To address these issues, we propose a Reliable Federated Multi\-View Learning with evidence calibration \(FedRMVL\-CAL\), a FedMVL framework with adaptive evidence fusion\. The local calibration scheme harmonizes uncertainty across views, while the fusion mechanism adaptively reconciles conflicting opinions, enhancing robustness in global inference\. Theoretical analysis and extensive experiments demonstrate that FedRMVL\-CAL achieves superior accuracy and reliability compared to existing approaches, ensuring trustworthy global predictions across heterogeneous views\.

## Surrogate Calibration for Transferable Adversarial Attacks against Black\-Box MLLMs

**Authors:** Zhewen Yao; Yao Zhu; Xiangyang Ji; Shiliang Zhang

**ID:** 153121 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nla00lCEuD>) | [PDF](<https://openreview.net/pdf?id=Nla00lCEuD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153121>)

Transfer\-based attacks expose serious adversarial vulnerabilities in closed\-source Multimodal Large Language Models \(MLLMs\) by crafting adversarial examples on off\-the\-shelf surrogate models\. However, this paradigm often drives adversarial examples toward surrogate\-specific local optima, where they deceive only the surrogate model but fail to transfer to black\-box MLLMs\. Although existing methods mitigate this issue at the attack level, they leave the surrogate itself unchanged\. To address this gap, we propose Surrogate Calibration \(SCal\), a novel model\-level refinement that enhances downstream transfer\-based adversarial attacks in a plug\-and\-play manner\. Specifically, SCal employs a feature\-preserving loss to maintain the surrogate's representational utility, while a distributional regularizer encourages its gradient field to stay closer to the natural data manifold\. With calibrated surrogates, downstream attacks generate update directions that exhibit superior generalization across black\-box MLLMs\. Extensive experiments demonstrate that SCal boosts current attacks to new heights across various surrogates\. For instance, it elevates baseline M\-Attack's ASR on GPT\-5\.4 Mini to 53\.5\\%, substantially surpassing the state\-of\-the\-art MPCAttack \(29\.7\\%\)\. These results expose critical vulnerabilities that must be addressed for trustworthy multimodal systems\. Code is at: https://anonymous\.4open\.science/r/SCal\_code\-B0BC

## LEVDA: Latent Ensemble Variational Data Assimilation via Differentiable Dynamics

**Authors:** Phillip Si; Peng Chen

**ID:** 153297 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MIQZKYcZ9Z>) | [PDF](<https://openreview.net/pdf?id=MIQZKYcZ9Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153297>)

Long\-range geophysical forecasts are fundamentally limited by chaotic dynamics and numerical errors\. While data assimilation can mitigate these issues, classical variational smoothers require computationally expensive tangent\-linear and adjoint models\. Conversely, recent efficient latent filtering methods often enforce weak trajectory\-level constraints and assume fixed observation grids\. To bridge this gap, we propose Latent Ensemble Variational Data Assimilation \(LEVDA\), an ensemble\-space variational smoother that operates in the low\-dimensional latent space of a pretrained differentiable neural dynamics surrogate\. By performing four\-dimensional ensemble\-variational \(4DEnVar\) optimization within an ensemble subspace, LEVDA jointly assimilates states and unknown parameters without the need for adjoint code or auxiliary observation\-to\-latent encoders\. Leveraging the fully differentiable, continuous\-in\-time\-and\-space nature of the surrogate, LEVDA naturally accommodates highly irregular sampling at arbitrary spatiotemporal locations\. Across three challenging geophysical benchmarks, LEVDA matches or outperforms state\-of\-the\-art latent filtering baselines under severe observational sparsity while providing more reliable uncertainty quantification\. Simultaneously, it achieves substantially improved assimilation accuracy and computational efficiency compared to full\-state 4DEnVar\.

## Rank\-Constrained Adaptation for Reliable Real\-World Performance

**Authors:** Abinitha Gourabathina; Hyewon Jeong; Teya Bergamaschi; Marzyeh Ghassemi; Collin Stultz

**ID:** 150710 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g5EV8VwQd4>) | [PDF](<https://openreview.net/pdf?id=g5EV8VwQd4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150710>)

Deep learning models trained to optimize average accuracy often exhibit systematic failures on particular subpopulations\. In real\-world settings like healthcare, the subpopulations most affected by such disparities are frequently unlabeled, partially observed, or not known in advance\. Existing group\-robust methods typically assume prior knowledge of the relevant subgroups, using group annotations for training, validation, or model selection\. We propose Misclassification Aware Rank\-Limited Adaptation \(MARLA\), a parameter\-efficient method for improving worst group performance without explicit subgroup annotations\. MARLA leverages an ERM\-trained model by calculating the model's misclassification probability scores on a held\-out adaptation set to identify a low\-dimensional subspace where errors concentrate\. We then learn a rank\-restricted additive correction to the classifier logits within that subspace\. Across seven real\-world datasets, we evaluate group robustness under three settings: no knowledge of subgroup relevance, partial knowledge of subgroup relevance, and full knowledge of subgroup relevance\. MARLA improves worst\-group performance while remaining fast, parameter\-efficient, and practical to tune\.

## Neural Spectral Capacity: An Architectural Quantity from Network Specification Alone

**Authors:** CHENYU ZHU; Ruoyu Zhao; Zhichao Lu

**ID:** 155319 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6VtpAVw5S8>) | [PDF](<https://openreview.net/pdf?id=6VtpAVw5S8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155319>)

Modern Transformer design and compression both reduce to allocating capacity under a budget\. The standard scalars for these decisions, \#Params and \#FLOPs, capture size and compute but not architectural structure—two architectures with identical parameter budgets but different depth\-width, head, or FFN allocations receive identical scores yet behave differently\. We propose Neural Spectral Capacity \(NSC\), a closed\-form scalar grounded in the singular\-value spectrum of each weight matrix\. Under standard random initialization, the Marchenko–Pastur law renders NSC computable from the architectural specification alone, with no model instantiation, data, or gradients\. Its layer\-wise additive structure admits NSC\-DP, an exact dynamic\-programming solver returning the architecture globally maximizing NSC under resource constraints in seconds on a CPU—a guarantee that black\-box search over existing training\-free proxies cannot provide\. Empirically, NSC outperforms \#Params, \#FLOPs, and representative training\-free proxies in ranking across seven Transformer and CNN families \(on FlexiBERT, τ=0\.505 on pairs differing in \#Params by &lt;10%, where \#Params collapses to 0\.082\); NSC\-DP discovers a Transformer\-XL architecture on WikiText\-103 that beats the human\-designed baseline in 2 seconds; and prunes LLaMA\-7B to the best 5\.7B model across eight commonsense reasoning tasks without any calibration data, ∼5900× faster than the strongest training\-free proxy baseline\.

## Uncertainty Quantification for Large Language Diffusion Models

**Authors:** Artem Vazhentsev; Vladislav Smirnov; David Li; Maxim Panov; Timothy Baldwin; Artem Shelmanov

**ID:** 150791 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fNNb0OstQs>) | [PDF](<https://openreview.net/pdf?id=fNNb0OstQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150791>)

Large Language Diffusion Models \(LLDMs\) are emerging as an alternative to autoregressive models, offering faster inference through higher parallelism\. Similar to autoregressive LLMs, they remain prone to hallucinations, making reliable uncertainty quantification \(UQ\) crucial for safe deployment\. However, existing UQ methods are fundamentally misaligned with this new paradigm: they assume autoregressive factorization or use expensive multiple sampling, negating the efficiency of LLDMs\. In this work, we present the first systematic study of UQ for LLDMs and propose lightweight, zero\-shot uncertainty signals derived from the iterative denoising process, leveraging intermediate generations, token remasking dynamics, and denoising complexity\. We further adapt a state\-of\-the\-art UQ method to LLDMs by combining masked diffusion likelihoods with trajectory\-based semantic dissimilarity\. We provide theoretical grounding, proving that expected trajectory dissimilarity bounds the masked diffusion training objective\. Comprehensive experiments across three tasks, eight datasets, and two models show that our method achieves a great cost\-performance trade\-off: it approaches the strongest sampling\-based baselines while incurring up to one hundred times lower computational overhead\. Our work demonstrates that LLDMs can deliver both fast inference and reliable hallucination detection simultaneously\.

## Mitigating Confidence Miscalibration in Open\-World Semi\-Supervised Learning

**Authors:** Wenqiang Wu; Feng Wang; Jiye Liang; Liang Bai

**ID:** 153397 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LfaHJnaV9L>) | [PDF](<https://openreview.net/pdf?id=LfaHJnaV9L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153397>)

Open\-world semi\-supervised learning aims to use limited labeled data from known classes to classify unlabeled samples that contain both known and novel classes\. Most existing methods over\-rely on known classes and tend to generalize incorrectly in complex open\-world settings\. This leads to degraded pseudo\-label quality and the model is often overconfident in wrong predictions\. To address this, this paper proposes a \*\*M\*\*itigating \*\*C\*\*onfidence \*\*M\*\*iscalibration Method in \*\*Open\*\*\-World Semi\-Supervised Learning \(\*\*OpenMCM\*\*\)\. By leveraging discriminative knowledge from known classes to guide learning in the novel class space, our method effectively mitigates overconfident misclassifications and improves discrimination accuracy\. Furthermore, we propose an adaptive threshold calibration strategy to independently determine optimal decision boundary for each class\. By integrating a high\-reliable pseudo\-label fusion mechanism, we enhance recognition stability for novel classes\. Experiments on three benchmark datasets \($i\.e\.$, CIFAR\-10, CIFAR\-100, and ImageNet\-100\) show that our framework achieves performance improvements over existing state\-of\-the\-art methods\.

## TriBet: Relative E\-values for Online Machine\-generated Text Detection

**Authors:** Xunye Tian; Zhijian Zhou; Liuhua Peng; Jared Collette; Dino Sejdinovic; Yue Yang; Feng Liu

**ID:** 155489 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5EAbPi7rdn>) | [PDF](<https://openreview.net/pdf?id=5EAbPi7rdn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155489>)

To ensure a formal guarantee that fully human\-written text streams are \*not falsely accused\* as machine\-generated text \(MGT\), the online betting framework \(e\-values\) has been successfully applied on various existing detectors\. However, current two\-sample e\-value methods fail in two real\-world application scenarios: the false positive rate \(FPR\) is often out of control and the test power drops drastically when \(1\) the reference domain is similar but not exactly same as test domain \(cross\-domain\), or \(2\) proxy model of detector is outdated compared to the modern source model\. We identify the root cause as an online calibration dilemma: two\-sample optimization and betting relies on a null\-calibrating offset that is unidentifiable from unlabeled test streams under shift\. We resolve this with a triple\-sample betting framework \(TriBet\) that conduct online MGT detection as relative testing against both human and machine references using a witness score, and introduces a conformal test\-inclusive domain\-shift betting strategy to achieve FPR control without fragile online calibration\. We show that TriBet is a level\-$\\alpha$ sequential test with asymptotic power one, and characterize its expected stopping time\. Empirically, we evaluate on 15 source LLMs, 8 proxy models and mixed\-document streams, TriBet consistently delivers faster and more powerful detection than both oracle and online betting baselines while keeping FPR strictly controlled\.

## PAVE: Prefill\-Conditioned Activation Editing for Hallucination Mitigation in LVLMs

**Authors:** Jingmin Zhu; Junae Kim; Dinh Phung; Trung Le; Jianfei Cai; Qiuhong Ke

**ID:** 150489 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hiYMBdcGSJ>) | [PDF](<https://openreview.net/pdf?id=hiYMBdcGSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150489>)

Large vision\-language models \(LVLMs\) can caption images, answer visual questions, and reason over scientific diagrams, yet they still produce hallucinations unsupported by visual evidence\. Existing approaches mitigate hallucinations either by reshaping the decoding distribution or by steering hidden activations with calibration\-based directions\. The former adjusts token probabilities but operates only at the output level, whereas hallucinations often arise when language priors dominate visual evidence in intermediate representations\. The latter applies a fixed calibration intervention, which may fail to capture image\-specific hallucination drift or inadvertently suppress grounded evidence\. To address these limitations, we propose PAVE, a training\-free method for input\-specific hidden\-state intervention\. PAVE constructs offline subspaces for hallucination\-drift suppression and visual\-evidence amplification, and adapts the hidden\-state update to each input using a per\-image visual basis computed during prefill\. By editing hidden states with this prefill\-conditioned subspace, PAVE strengthens grounded evidence while suppressing hallucination drift, without relying solely on decoding\-level corrections or fixed activation edits\. Experiments on LLaVA\-1\.5\-7B and Qwen\-VL show that PAVE substantially reduces hallucinations on CHAIR and POPE while preserving grounded utility on MME\. Code will be released\.

## Counterfactual Online Conformal Prediction Under Adaptive Logging

**Authors:** Xinyu Qiao; yichen lin; Kaihong Ji; xue wang; Tao Yao

**ID:** 150109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kcz4dJYi4k>) | [PDF](<https://openreview.net/pdf?id=kcz4dJYi4k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150109>)

Online conformal prediction can fail when predictions shape actions and actions determine which outcomes enter calibration\. Standard adaptive methods may retain marginal coverage while systematically miscovering the counterfactual outcomes of rarely selected actions\. This paper formalizes the failure through counterfactual coverage and introduces Propensity\-Weighted Online Conformal Prediction, an inverse\-propensity\-weighted recursion that debiases calibration\. A doubly robust variant further reduces nuisance bias to the product of outcome\-model and propensity errors\. Under positivity, the resulting coverage rate matches an information\-theoretic lower bound up to logarithmic factors\. Experiments on synthetic decision tasks, open bandit data, and financial rebalancing show that PW\-OCP and DR\-OCP improve counterfactual coverage and downstream regret without sacrificing prediction\-set sharpness\.

## Risks Create a Jagged Frontier of LLM Productivity Gains Across Computer Occupations

**Authors:** Deepika Chawla; Gagandeep Singh; Elham k buxton; Meicen Sun; Lav Varshney; Jeremy Riel; Craig De Voto

**ID:** 140000 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x1uym9PA9I>) | [PDF](<https://openreview.net/pdf?id=x1uym9PA9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140000>)

\*\*This position paper argues that the current frontier of expert\-LLM collaboration is doubly jagged: it is uneven, not only because of jagged AI capabilities but also due to jagged AI risks\*\*\. As LLM systems improve, incompetence\-driven risks \(e\.g\., misinformation\) may decline, but adversarial risks can persist or even increase, leading to the likely persistence of a jagged risk–reward frontier\. To show jaggedness,  we introduce the first occupation\-level quantification of risk\-aware productivity gains for expert–LLM collaboration over a realistic task distribution, using standard O\\\*NET computer\-occupation tasks\. For each task, we leverage six frontier models \(e\.g\., GPT\-5, Claude Opus\) to produce structured risk–reward ratings and use 6 human experts to verify a subset for reliability, achieving high agreement\. Risk captures the possible increase in individual, organizational, or societal harm due to employing LLMs\. Reward captures possible productivity gains, i\.e\., time/cost savings at a fixed quality target after accounting for expert oversight to detect and mitigate risks\. We aggregate task\-level ratings into occupation\-level scores\. Our analysis shows that risk varies more than reward, yielding vast differences in risk–reward tradeoff: In safety\-critical roles \(e\.g\., \*Information Security Engineers\*\), gains are offset by risk, whereas in less safety\-critical roles \(e\.g\., \*Web Developers\*\), gains often substantially exceed risks\. At the task\-level, we identify high\-reward and medium\-risk tasks as the "Sweet spot" for expert\-LLM collaboration\. The identified sweet spot is evident in real\-world deployments as the majority of Claude conversations assigned to O\*NET tasks \(from the recent Anthropic Economic Index\) are high\-reward and medium\-risk, whereas high\-risk tasks are minimally represented, supporting both our methodology and position\.

## Learning Reach\-Set Geometry for Tighter Probabilistic Neural Network Verification

**Authors:** Samuel Sasaki; Ben Wooding; Taylor Johnson

**ID:** 154618 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CENjUqCe8j>) | [PDF](<https://openreview.net/pdf?id=CENjUqCe8j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154618>)

Neural network verification is key to certifying robustness in safety\-critical systems\. Sound verifiers commit to abstract domains that propagate soundly through the network's operations, paying for that commitment with looseness at scale and applicability largely confined to piecewise\-linear architectures\. Probabilistic verifiers relax soundness, but they too commit to a fixed family of shapes for the network's reachable outputs\. When the network's true output geometry differs from the chosen shape, the verifier over\-approximates the reach\-set and fails to certify networks that are in fact safe\. We propose instead to learn the reach\-set geometry from the network's behavior\. A flow\-matching model trained on input\-output samples and calibrated by conformal prediction yields a probabilistic reach set whose shape adapts to the true shape of the reach\-set rather than to an a priori choice\. The resulting set has no closed\-form description, so we reframe the specification check as a rare\-event estimation problem on the learned distribution, restricted to the calibration's coverage region, and solve it with bounded adaptive multilevel splitting\. The pipeline produces a probabilistic safety certificate combining the conformal coverage with a rare\-event upper bound\. Our pipeline performs comparably to sound verifiers on a subset of VNN\-COMP 2025 benchmarks where sound verification is tractable and matches or exceeds fixed\-shape probabilistic baselines on most benchmarks in the same suite\. On a synthetic family of growing\-depth networks, it scales sub\-exponentially where sound verifiers time out or abstain\.

## Beyond Uniform Detection: Adaptive Hallucination Detection for RAG Across Response Regimes

**Authors:** Jungwuk Park; Sejong Ryu; Jy\-yong Sohn; Jaekyun Moon

**ID:** 155755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Bp2vd7ixA>) | [PDF](<https://openreview.net/pdf?id=3Bp2vd7ixA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155755>)

Existing hallucination detectors for retrieval\-augmented generation \(RAG\), whether based on model outputs \(e\.g\., likelihood\) or internal representations, typically apply a uniform detection strategy across responses\. However, we find that different detection signals are informative in different response regimes, making a uniform strategy insufficient for both short\- and long\-form generation\. In short\-form tasks such as factoid QA, hallucination typically appears as selecting an incorrect final answer among multiple context\-relevant candidates\. In this regime, model\-output\-based signals that discriminate among plausible answers are particularly important\. We therefore propose a bidirectional likelihood measure that evaluates logical consistency based on the retrieved evidence and a reasoning step generated after the response\.  In contrast, long\-form descriptive responses are more prone to gradual drift: as generation proceeds, the model increasingly relies on its own prior generations and parametric knowledge, while unsupported continuations may remain locally plausible, making output\-based cues less informative\. For this regime, we measure context\-\-knowledge conflict by tracking the directional alignment of context\-grounding versus internal\-knowledge contributions in the hidden states\. Building on these regime\-specific signals, we introduce ARGUS, an adaptive hallucination detector that emphasizes the more effective signal according to the response regime\.  Experiments on multiple RAG benchmarks show that our method achieves strong performance across both short\- and long\-form settings\.

## VerifyMAS: Hypothesis Verification for Failure Attribution in LLM Multi\-Agent Systems

**Authors:** Hezhe Qiao; Hanghang Tong; Ee\-peng Lim; Bing Liu; Guansong Pang

**ID:** 149921 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mCxhih62ys>) | [PDF](<https://openreview.net/pdf?id=mCxhih62ys>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149921>)

Large language model\-driven multi\-agent systems \(LLM\-MAS\) excel at complex tasks, yet unreliable agents remain a key bottleneck to system\-level reliability\. Automatic failure attribution is therefore critical, but existing approaches—such as direct prediction of agent–error pairs and agent\-first failure attribution—rely on local logs of agent and miss global failures that only manifest over full interaction trajectories, such as cross\-step inconsistencies and inter\-agent coordination errors\. Moreover, directly predicting failures induces a large combinatorial search space, hindering fine\-grained attribution\. To address these challenges, we propose VerifyMAS, a hypothesis verification framework for agent failure attribution\. Instead of directly predicting faulty agents and error types, VerifyMAS formulates and verifies failure hypotheses against full trajectories\. This verification\-based approach decomposes attribution into trajectory\-level error validation and fine\-grained agent localization, providing an error\-first attribution approach that captures global failure patterns while substantially reducing the search space\. We further introduce a hypothesis\-based data construction strategy grounded in a structured error taxonomy and fine\-tune a specialized LLM verifier model for trajectory\-level failure verification and agent attribution\. Experiments on Aegis\-Bench and Who&amp;When show that VerifyMAS consistently improves diverse backbone models, including open\-source Qwen and API\-based GPT models, outperforming prior methods without sacrificing inference efficiency for long multi\-agent trajectories\.

## PP\-Mark: Provable and Publicly Verifiable Watermarking for Generative AI

**Authors:** HANKYEONG KO; Taehoon Kim

**ID:** 148365 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yPgHWlPwFl>) | [PDF](<https://openreview.net/pdf?id=yPgHWlPwFl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148365>)

Generative AI models now produce images indistinguishable from real data, making publicly verifiable provenance essential; however, existing watermarking methods become vulnerable to forgeries and adversarial optimization attacks once their detectors are made public\. We propose PP\-Mark, a provenance framework that anchors lightweight statistical detection to a zero\-knowledge proof of the embedding process, ensuring that forged content cannot pass full verification by construction\. We establish formal unforgeability under standard cryptographic assumptions and validate PP\-Mark against representative baselines across two architectures, demonstrating resistance to black\-box imprint forgery, white\-box optimization, and regeneration attacks while remaining practical for decentralized verification\.

## No More, No Less: Task Alignment in Terminal Agents

**Authors:** Sina Mavali; David Pape; Jonathan Evertz; Samira Abedini; Devansh Srivastav; Thorsten Eisenhofer; Sahar Abdelnabi; Lea Schönherr

**ID:** 139104 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=koHWZUTUlq>) | [PDF](<https://openreview.net/pdf?id=koHWZUTUlq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139104>)

Terminal agents are increasingly capable of executing complex, long\-horizon tasks autonomously from a single user prompt\. To do so, they must interpret instructions encountered in the environment \(e\.g\., README files, code comments, stack traces\) and determine their relevance to the task\. This creates a fundamental challenge: relevant cues must be followed to complete a task, whereas irrelevant or misleading ones must be ignored\. Existing benchmarks do not capture this ability\. An agent may appear capable by blindly following all instructions, or appear robust by ignoring them altogether\. We introduce TAB \(Task Alignment Benchmark\), a suite of 89 terminal tasks derived from Terminal\-Bench 2\.1\. Each task is intentionally underspecified, with missing information provided as a necessary cue embedded in a natural environmental artifact, alongside a plausible but irrelevant distractor\. Solving these tasks requires selectively using the cue while ignoring the distractor\. Applying TAB to ten frontier agents reveals a systematic gap between agent capability and task alignment\. The strongest Terminal\-Bench agent achieves high task completion but low task alignment on TAB\. Evaluating six prompt\-injection defenses further shows that suppressing distractor execution also suppresses the cues required for task completion\.  These results demonstrate that task\-aligned agents require selective use of environmental instructions rather than blanket acceptance or rejection\.

## MT\-CC: Multi\-Group Temperature Scaling for Asymmetric Calibration Behavior in Class\-Incremental Learning

**Authors:** Sungjun Yun; Yonghee Choi; Dong\-Jun Han

**ID:** 148768 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vCft9tPVmL>) | [PDF](<https://openreview.net/pdf?id=vCft9tPVmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148768>)

As deep neural networks are required to continuously adapt to evolving data, class\-incremental learning \(CIL\) has become an active research area\. However, most existing works primarily focus on improving accuracy while overlooking confidence calibration, which measures the trustworthiness of the model's predictions\. Although temperature scaling \(TS\) is effective for static calibration, it has rarely been explored in continual settings where data distributions evolve over time\. In this paper, we introduce Multi\-Group Temperature Scaling for Continual Calibration \(MT\-CC\), a novel post\-hoc calibration framework that addresses the asymmetric calibration behavior in CIL, where the rate of confidence changes does not align with the rate of accuracy degradation across tasks, leading to different levels of miscalibration\. Our key contribution is to design multiple temperature parameters through a lightweight grouping network that separates samples by confidence statistics and task\-aware signals in CIL\. Furthermore, a Groupwise Difference\-between\-Confidence\-and\-Accuracy \(GDCA\) regularization is incorporated to promote intra\-group consistency\. Experiments demonstrate that MT\-CC significantly improves calibration performance while maintaining accuracy, offering a principled framework for reliable continual learning\.

## Uncertainty Quantification of Least Squares Estimator for Generalized Orthogonal Procrustes Problems

**Authors:** Shenghan Luo

**ID:** 149016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tTBzm1lVMl>) | [PDF](<https://openreview.net/pdf?id=tTBzm1lVMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149016>)

The generalized orthogonal Procrustes problem \(GOPP\) aims to recover rigid transformations that best align multiple point clouds and has broad applications in 3D geometry, computer vision, and biomedicine\. Despite its importance, the problem is challenging due to the nonconvex orthogonality constraints\. Fortunately, the generalized power method \(GPM\) has proven highly effective, theoretically guaranteed to converge to the global least squares \(LS\) estimator under reasonable conditions\. Yet, the statistical inference of this global LS estimator remains largely an open problem\. Specifically, the absence of an exact second\-order analytic expansion prevents rigorous uncertainty quantification \(UQ\), which is vital for constructing confidence regions and evaluating estimator reliability\. While recent UQ frameworks developed for orthogonal group synchronization offer a potential paradigm, they severely lack universality, often failing to accommodate the complex anisotropic distortions inherent in GOPP shape matrices\. To bridge this gap, we propose a more general theoretical framework with which we successfully derive the exact second\-order analytic expansion of the GOPP global LS estimator under additive Gaussian noise\. Leveraging this theoretical foundation, we further construct confidence regions\. Finally, extensive numerical experiments empirically validate the exactness of our theoretical expansion and demonstrate the robust coverage of the proposed confidence regions across varying conditions\.

## DIAL: A Bounded\-Monotone Adapter with Closed\-Form Residual $L\_\\infty$ Bounds for Scalar\-Controlled Refusal Modulation

**Authors:** Nguyen Vu Nguyen

**ID:** 150583 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h6qz0TIbIa>) | [PDF](<https://openreview.net/pdf?id=h6qz0TIbIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150583>)

We introduce DIAL \(Directional Intervention, Asymptotically Limited\), a parameter\-efficient adapter that adds a bounded, monotone, scalar\-controlled residual $\\delta\(s,c\) = \\sigma\(g\) \\odot \\tanh\(c/T\) \\odot \\tanh\(Dz\)$ with $z = D^\\top \\phi\(s\)$ to a base language model's hidden state\. The architectural form yields a closed\-form upper bound $\\lVert \\delta \\rVert\_\\infty \\le \\sigma\(g\_\{\\max\}\)$ on the residual $L\_\\infty$ norm, computable from model weights alone\.  Across 5 base models \(3\.8B to 70B parameters, 4 architecture families; one checkpoint per family, with 5\-seed csweep variance at Llama\-3\.1\-8B\), the residual saturates at the predicted bound with mean ratio $1\.000 \\pm 0\.001$ \(worst\-case family deviation 0\.2 percentage points\)\. On Llama\-3\.1\-8B under GPT\-4o judge \($n=100$ per bench, zero content\-filter blocks\), DIAL exceeds a FiLM baseline trained with the same multi\-$c$ objective on every benchmark and judge\. Semantic vs strict judge: HarmBench DIAL \+0\.52 / \+0\.55 vs FiLM \+0\.44 / \+0\.39; AdvBench DIAL \+0\.63 / \+0\.66 vs FiLM \+0\.46 / \+0\.50; XSTest DIAL \+0\.33 / \+0\.25 vs FiLM \+0\.26 / \+0\.22; both judges agree on the ranking\.  Outside training range, DIAL's residual saturates at $\\sigma\(g\_\{\\max\}\)$ while FiLM's grows unboundedly: at $c = 10^4$, FiLM's residual $L\_\\infty$ norm is 534 times larger than DIAL's\. The bound holds across all control values, not only trained ones; concrete deployment scenarios \(configuration error, multi\-tenant policy ceilings, adversarial composition\) are where this distinction matters in practice\.  The bounded\-monotone form produces analogous saturation behavior on two continuous\-control RL environments \(HC\-Vel $n=35$, Ant\-Goal $n=30$\) under matched oracle\-$c$; the prior fails when $c$ must be inferred online \(meta\-RL\)\. Ablations confirm both the bound and the saturating temperature are necessary; a frozen\-gate variant retains the bound at lower controllability magnitude\. We release adapter train reports and canonical bench generations, algebraic derivations \(with a SymPy reproducibility script\), the full GPT\-4o judge cache \(semantic and strict\), and a human\-labeled validation set \($n=50$, Cohen's kappa = 0\.895\)\. Full adapter checkpoints are deferred to camera\-ready release\.

## The Scaling Paradox of Tool\-Calling LLM Agents Under Realistic MCP Faults

**Authors:** Antonio Ken Iannillo; Joshua S Owotogbe; Roberto Natella; Francesco Avallone; Kristina Kudryavtseva; Indika Kumara

**ID:** 151564 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZfMdoPBhn0>) | [PDF](<https://openreview.net/pdf?id=ZfMdoPBhn0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151564>)

LLM agents increasingly rely on external tools exposed via the Model Context Protocol \(MCP\), yet current benchmarks assume tools respond correctly and on time, leaving agent resilience to realistic tool failures untested\.   We introduce MCP\-Injector, a drop\-in, protocol\-aware fault\-injection middleware that interposes on the MCP tool\-call path with controlled persistence \(permanent, transient, intermittent\) and seedable schedules\.   Its fault model is empirically calibrated by mining 57,240 issue and pull\-request threads across 1,774 open\-source MCP repositories, yielding a distribution over six failure modes grounded in observed ecosystem incidents\.   In a 1,350\-cell experiment crossing two backbone sizes \(20B, 120B\), three agent stacks \(custom multi\-round plan\-and\-execute, OpenAI Agents SDK, LangChain\), and three fault injection conditions, we find that calibrated MCP faults cause severe quality degradation \(60\\% drop in task completion score, $p &lt; 10^\{\-56\}$\) and reveal a scaling paradox: the larger model achieves higher fault\-free scores but suffers lower completion rates under faults, driven by longer reasoning chains that amplify fault exposure\.   Framework\-level error handling shapes resilience more than model scale, with stack choice producing significant interaction effects\.   These results demonstrate that capability benchmarks alone can mask operational brittleness, motivating protocol\-aware fault injection as a complementary evaluation dimension for tool\-calling agents\.

## MOSAIC\-Bench: Measuring Compositional Vulnerability Induction in Coding Agents

**Authors:** Jonathan Steinberg; Oren Gal

**ID:** 139179 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g9BxvmeCLK>) | [PDF](<https://openreview.net/pdf?id=g9BxvmeCLK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139179>)

Coding agents often pass per\-prompt safety review yet ship exploitable code when their tasks are decomposed into routine engineering tickets\. The challenge is structural: existing safety alignment evaluates overt requests in isolation, leaving models blind to malicious end\-states that emerge from sequenced compliance with innocuous\-looking requests\. We introduce MOSAIC\-Bench \(Malicious Objectives Sequenced As Innocuous Compliance\), a benchmark of 199 three\-stage attack chains paired with deterministic exploit oracles on deployed software substrates \(10 web\-application substrates, 31 CWE classes, 5 programming languages\) that treats both exploit ground truth and downstream reviewer protocol as first\-class evaluation axes\. On this benchmark, nine production coding agents from Anthropic, OpenAI, Google, Moonshot, Zhipu, and Minimax compose innocuous tickets at 53–86% end\-to\-end ASR with only two refusals across all staged runs\. In a matched direct\-prompt experiment over four frontier Claude/Codex agents, vulnerable\-output rates fall to 0–20\.4%: Claude primarily refuses, while Codex primarily hardens rather than emitting the vulnerable implementation — ticket staging silences both defense modes simultaneously\. Downstream, code reviewer agents approve 25\.8% of these confirmed\-vulnerable cumulative diffs as routine PRs, and a full\-context implementation protocol closes only ∼50% of the staged/direct gap, ruling out context fragmentation as the sole explanation\. As a deployable but non\-adaptive mitigation, reframing the reviewer as an adversarial pentester reduces evasion across the evaluated reviewer subset; pentester\-framed evasion ranges from 3\.0% to 17\.6%, and an open\-weight Gemma\-4\-E4B\-it reviewer under this framing detects 88\.4% of attacks on the dataset with a 4\.6% false\-positive rate measured on 608 real\-world GitHub PRs\. We publicly release our dataset at https://huggingface\.co/datasets/MosaicBenchmark/mosaic\-bench, and a verifiable and adaptable evaluation framework at https://github\.com/mosaic\-benchmark/mosaic\-benchmark\.

## Fine\-tuning Does Not Reach All: Uneven Safety and Knowledge Dynamics in Language Models

**Authors:** Ziwei Wang; Xinwei Guo; Jiaxin Zhang; Guanhua Chen; Haiyan Wu; Xiangyu Zhao; Lei Ma; Xin Yao; Shan He; Xuetao Wei

**ID:** 155221 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7MsNSkqKWp>) | [PDF](<https://openreview.net/pdf?id=7MsNSkqKWp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155221>)

Fine\-tuning is widely used to align large language models \(LLMs\) with desired behavioral norms such as safety, yet it is typically evaluated using aggregate metrics that assume uniform improvements across the model\. However, fine\-tuning operates within a constrained parameter space, and its entangled effects on localized knowledge remain poorly understood\. To address this, we investigate fine\-tuning at the level of individual knowledge concepts using a controlled framework with representative concepts and paired safe/unsafe samples under varying data compositions\. By jointly analyzing behavioral safety via model outputs and internal knowledge accessibility via perplexity, we obtain a unified view of how knowledge is modified and expressed\. Our results reveal that fine\-tuning does not uniformly improve safety\. Instead, it \(1\) exhibits strong concept\-level heterogeneity, including persistent low\-safety concepts and robustly safe concepts with clear domain specificity; \(2\) improves safe–unsafe discrimination on average, but coexists with familiarity on both safe and unsafe content or even loses previously learned safe knowledge; and \(3\) decouples internal knowledge from external behavior, as changes in familiarity do not reliably translate into safer outputs, especially due to early\-stage disruption of existing safety structures\. Our findings position consistency as a distinct objective beyond conventional aggregate safety and demonstrate that reducing unsafe knowledge exposure under uniform concept\-level coverage actively homogenizes safety distributions across model knowledge, offering a principled path toward alignment that is not merely effective on average, but uniformly reliable, predictable, and robust across knowledge concepts\.

## Knowing When Multivariate Forecasts Are Wrong

**Authors:** Binli Luo; Ning Gui; Xianhan Tan

**ID:** 154761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B9zr3wpMiV>) | [PDF](<https://openreview.net/pdf?id=B9zr3wpMiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154761>)

At deployment, a multivariate forecaster may expose only a recent input window and a frozen point prediction, with no access to ground truth, calibration residuals, repeated inference, or model internals\. We study deployment\-constrained forecast risk localization: ranking future timesteps by likely error before they are observed\. We introduce SubDx, a zero\-parameter diagnostic that audits the forecast against the local cross\-channel subspace of the input history\. Each predicted channel vector receives an off\-subspace residual score, computed with no labels, no learned parameters, and less than 1% runtime overhead on Traffic\. Under a linear factor model, we derive closed\-form score distributions and a two\-population AUROC expression showing how heterogeneous off\-subspace error visibility makes the ranking identifiable\. On Traffic \(N=862\), SubDx reaches within\-horizon AUROC 0\.90 and reduces MSE by 62% at 50% coverage; on Solar \(N=137\), it reaches AUROC 0\.85 with 67% MSE reduction\. The same post\-hoc score applies to frozen pretrained forecasters, with Chronos reaching AUROC 0\.838 on Traffic without fine\-tuning\. Across trained backbones, pretrained models, and synthetic controls, the results show that local cross\-channel consistency can provide a practical abstention signal for redundant multivariate systems\.

## Exposing Private Corpus Leakage in Multimodal RAG

**Authors:** Yihao LIU; XINQI LYU; Dong Wang; Bin Xiao

**ID:** 154898 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A69wmC5lPE>) | [PDF](<https://openreview.net/pdf?id=A69wmC5lPE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154898>)

Multimodal Retrieval\-Augmented Generation \(RAG\) helps mitigate hallucinations in Vision\-Language Models \(VLMs\) by grounding generations in external knowledge bases\. However, this externalized memory also introduces privacy risks, as external queries may reveal signals about sensitive visual records in the retrieval corpus, such as medical images, scanned contracts, and proprietary business documents\. This exposes a retrieval\-corpus privacy risk: private records may be detectable through interactions with multimodal RAG systems\. To study this risk, we propose the Semantic Degradation Attack \(SDA\), a two\-query method for exposing private corpus leakage in multimodal RAG by testing how strongly generated responses depend on retrieved evidence\. SDA constructs transferable retrieval\-disrupting perturbations using local surrogate visual encoders\. By measuring the drop in the semantic similarity of the VLM's generated descriptions before and after perturbation, SDA can distinguish whether a target image\-caption record exists in the private retrieval corpus\. Extensive experiments demonstrate that SDA consistently detects private corpus leakage more effectively than existing baselines on two image\-caption datasets across five popular VLMs\.

## HalluWorld: A Controlled Benchmark for Hallucination via Reference World Models

**Authors:** Emmy Liu; Varun Gangal; Michael Yu; Zhuofu Tao; Karan Singh; Sachin Kumar; Steven Y\. Feng

**ID:** 139204 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ejdHPDvwXJ>) | [PDF](<https://openreview.net/pdf?id=ejdHPDvwXJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139204>)

Hallucination remains a central failure mode of large language models, but existing benchmarks operationalize it inconsistently across tasks such as summarization, question answering, retrieval\-augmented generation, and agentic interaction\. This fragmentation makes it unclear whether a mitigation that works in one setting actually reduces hallucinations across contexts\. Current hallucination benchmarks either require human annotation and fixed references that may eventually be memorized, or rely on naturalistic observations which are often recorded in settings that are difficult to reproduce or test systematically\. To enable further research on the root causes of hallucination, we introduce HalluWorld, an extensible benchmark framework grounded in an explicit reference\-world formulation: a model hallucinates when it produces an observable claim that is false with respect to this reference world\. Building on this view, we construct a family of synthetic and semi\-synthetic benchmark environments in which the reference world is fully specified, the model's observable view is controlled, and hallucination labels can be generated automatically by construction\. HalluWorld spans multiple settings that are classically representative for AI, i\.e\., gridworlds, chess, and realistic terminal tasks\. This enables controlled variation of key factors such as world complexity, observability, temporal change, and source\-conflict policy, allowing us to disentangle hallucinations into more fine\-grained error categories\. We evaluate frontier and open\-weight language models across these settings and find consistent patterns across domains: perceptual hallucination on directly observed information is near\-solved for frontier models, while multi\-step state tracking and causal forward simulation are still difficult for frontier models, and are not generally solved by extended thinking\. In the terminal setting specifically, models also struggle with when to abstain from answering\. The uneven profile of failures across probe types and domains suggest that different hallucinations arise from qualitatively distinct failure modes rather than reflecting a single underlying capability\. Our results suggest that controlled reference worlds offer a scalable and reproducible path toward measuring and reducing hallucinations in modern language models\.

## CLaW: Codec\-Guided Adaptive Latent Watermarking for Traceable Diffusion Image Generation

**Authors:** Huangchao Song; Lingyun Yu; Cong Li; Peiqi Jiang; Mingqi Fang; Hongtao Xie

**ID:** 149791 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nI6z2amVXh>) | [PDF](<https://openreview.net/pdf?id=nI6z2amVXh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149791>)

With the rapid advancement of text\-to\-image diffusion models, increasingly realistic AI\-generated content has raised serious concerns about misuse and copyright infringement\. Digital watermarking offers a promising solution by enabling user\-level traceability, yet existing methods remain difficult to deploy at scale, hindered by costly model retraining or detection, poor effectiveness–fidelity trade\-offs, and limited robustness to image transformations\. To address these challenges, we propose CLaW \(Codec\-guided Latent Watermarking\), a robust and efficient watermarking framework for traceable diffusion image generation with frozen diffusion backbones and inversion\-free detection\. Specifically, CLaW first uses a pretrained watermark codec to map each watermark message to a latent residual, enabling low\-cost sampling\-time injection\. Then, the residual is injected within a late denoising window, where image semantics are better preserved and the watermark signal is less perturbed by subsequent denoising updates, yielding a better balance between watermark effectiveness and image fidelity\. Furthermore, we introduce a decoder\-guided adaptive injection mechanism that uses decoding confidence as feedback to dynamically calibrate watermark strength, reinforcing weak watermark signals and improving robustness under image transformations\. Extensive experiments show that CLaW can preserve visual fidelity and improve average F1 under image transformations, achieving a 6\.34% gain over the state of the art\.

## DoG: Sniffing Out Overconfidence in LLM Agents via Post\-hoc Trajectory Restructuring

**Authors:** Hyunjun Jeon; Dongha Lim; Kunwoong Kim; Daewon Choi; Jinwoo Shin

**ID:** 152263 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNOK2zAeoF>) | [PDF](<https://openreview.net/pdf?id=UNOK2zAeoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152263>)

The overconfidence of Large Language Model \(LLM\) agents poses a critical challenge to their reliable deployment for complex, high\-stakes tasks\. Current confidence estimation methods predominantly treat agent execution as a flat, one\-dimensional, time\-ordered sequence\. This oversimplification fundamentally fails to capture the complex logical dependencies, branching paths, error propagation, and tool interactions inherent in agentic reasoning\. To address this, we introduce DAG of Grounds \(DoG\), a novel method for agent confidence estimation via post\-hoc trajectory restructuring\. By transforming linear trajectories into Directed Acyclic Graphs \(DAGs\), DoG explicitly maps the grounding of an agent's final answer to its intermediate reasoning steps and tool outputs\. We evaluate DoG on several benchmarks, GAIA, GPQA, and HLE, which involve long\-horizon reasoning and iterative tool use, and show that DoG improves calibration performance across standard metrics such as ECE, Brier score, and AUROC\. DoG outperforms existing calibration methods designed for general LLM outputs, performs comparably to or better than methods specifically designed for agent trajectories, and remains robust across different LLM backbones and tool use settings\. Supported by an interactive diagnostic tool, our framework provides unprecedented interpretability for diagnosing opaque failure modes\. Together, these contributions establish a structured, graph\-based paradigm for confidence estimation that successfully "sniffs out" overconfidence in autonomous systems\.

## Graph\-Regularized Sparse Autoencoders for LLM Safety Steering

**Authors:** Jehyeok Yeon; Federico Cinus; Yifan Wu; Luca Luceri

**ID:** 152847 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PvSZSLQLGc>) | [PDF](<https://openreview.net/pdf?id=PvSZSLQLGc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152847>)

Sparse autoencoders \(SAEs\) are increasingly used to extract activation directions for inference\-time steering, but their standard sparsity objective treats latent features as independent\. This prior can be poorly matched to high\-level safety behaviors, where refusal and harmful compliance appear to depend on distributed structure in activation space\. We introduce Graph\-Regularized Sparse Autoencoders \(GSAE\), a dictionary\-learning method that learns safety\-steering directions by smoothing SAE decoder vectors over a neuron co\-activation graph and applying the resulting direction bank through a two\-gate runtime controller\. Empirically, GSAE improves selective refusal across JailbreakBench, HarmBench, and XSTest, increasing harmful\-request refusal while keeping benign\-prompt refusals low\. On Llama\-3\-8B, adding graph regularization to an otherwise identical SAE bank\-and\-gating pipeline improves $\\Delta\_s$ by $20\.1$ points on JailbreakBench and $16\.8$ points on HarmBench\. GSAE outperforms activation\-steering baselines and black\-box guardrails, preserves benign\-task performance, generalizes across Llama\-3, Mistral, Qwen 2\.5, and Phi\-4, and remains strong under black\-box and gray\-box jailbreak attacks\.

## Many Benign Errors are Better than A Few Severe Ones: Evaluating Hallucination Severity

**Authors:** Sanjana Ramprasad; Pranav Mani; Chenhao Tan; Byron Wallace; Elisa Ferracane

**ID:** 139847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0wbnAGgl8S>) | [PDF](<https://openreview.net/pdf?id=0wbnAGgl8S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139847>)

Factuality evaluation in summarization has largely focused on detecting hallucinations as binary phenomena\-\-\-labeling content as either supported or unsupported by the source\. However, modern LLMs increasingly generate nuanced, partially grounded content whose factual impact can vary widely—from benign inferences to severe distortions\. To enable more precise assessment, we propose a framework for annotating hallucination \\emph\{severity\} along two interpretable dimensions: \\emph\{implausibility\} \(how unreasonable a span is given the source or general knowledge\) and \\emph\{impact\} \(its potential to mislead or cause harm if assumed true\)\. Applying this framework to obtain annotations on model generations across domains, we find that many hallucinations are both plausible and benign, indicating that not all unsupported content is equally consequential\. We further show that severity\-aware evaluation can meaningfully alter model rankings, favoring models that generate more frequent yet benign hallucinations over those producing fewer but more detrimental errors—distinctions that conventional evaluation settings fail to capture\. Finally, we evaluate LLMs as severity judges: while their span detection remains weak, their severity ratings align closely with human judgments, making them promising candidates for scaling fine\-grained annotation\. Using severity as a diagnostic lens, we find that LLMs preferentially detect obvious errors but miss plausible, high\-impact ones\-\-\-precisely the cases that matter most for deployment\. Together, these findings argue for a shift toward severity\-aware factuality evaluation\.

## Information Propagation via Sign\-Flip Dynamics

**Authors:** Hyunwoo Lee; Hyojae Lim; Dohyun Kwon

**ID:** 151344 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bDaqHSFP9J>) | [PDF](<https://openreview.net/pdf?id=bDaqHSFP9J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151344>)

Classical initialization theory analyzes networks through second\-order observables such as variance, correlation, and Jacobian conditioning that are natural when weights are symmetric around zero\. Identity\-plus\-noise initialization, which initializes the network to behave locally like a residual block, sits outside this picture: variance can be preserved while coordinate\-wise signal identity is destroyed, making such second\-order quantities indirect indicators of trainability\. We identify the terminal sign\-flip rate as the natural forward\-pass observable for this regime, and derive its critical scale $\\sigma \\sim L^\{\-1/2\}$ from a dimensionless margin\-\-sensitivity ratio, rather than postulating it\.  The retention curve emerges as a first\-passage limit of a signed\-margin process, yielding a calibration procedure that targets a chosen sign\-flip rate at any depth\. Experiments on synthetic and real benchmarks suggest that this calibrated initial rate behaves as a training\-time parameter rather than an inert calibration detail\.

## Human–AI Collaboration Requires a High\-Order Dynamic Abstraction Substrate

**Authors:** Hengyu Liu; Dongxu Huang; Zhihong Cui; Lun Du; Tiancheng Zhang; Tor Skeie; Kristian Torp; Christian S\. Jensen

**ID:** 140007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tnqLi1toph>) | [PDF](<https://openreview.net/pdf?id=tnqLi1toph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140007>)

This position paper argues that effective Human–AI collaboration in the LLM era requires a high\-order \*dynamic\* abstraction substrate—one that externalizes stable human cognition into a form AI can reliably consult, and whose content evolves as AI and human capabilities reshape what is worth codifying\. We analyze the substrate along three dimensions—\*what\* it must hold \(five necessary knowledge categories of autonomous AI: Situation, Purpose, Action, Constraints, Evaluation; SPACE\), \*where\* its content originates \(a source\-by\-externalization analysis isolating the \*fabrication\-codified\* failure mode behind LLM hallucination, and three practice\-grounded routes that defend against it\), and \*how\* it organizes Human–AI collaboration \(two complementary insights: a three\-phase temporal cycle of externalize–practice–summarize in which AI plays a different role at each phase, and a long\-tailed abstraction hierarchy in which humans focus on the rare top while AI handles the tail\)\. We name this substrate Knowledge Object \(KO Network\) and characterize it along three axes: \*content\* that occupies the moving band between the AI capability ceiling and the human articulability ceiling; \*structure\* that commits to five quality attributes \(Understandable, Verifiable, Traceable, Controllable, Reusable; UVTCR\) and SPACE\-aligned subgraphs; and a \*bidirectional lifecycle\* in which entries are added as humans articulate previously tacit cognition and retired as AI absorbs the codified\. Finally, we respond to five alternative views\.

## From Benchmark to Adoption: Coding Agent Evaluation Needs User\-Level Harness

**Authors:** Dasol Hong; Ji Yong Cho; Bumsoo Kang; Moontae Lee

**ID:** 140013 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rDKap2gO2x>) | [PDF](<https://openreview.net/pdf?id=rDKap2gO2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140013>)

Coding agents are increasingly adopted in real\-world software development, yet their evaluation remains largely benchmark\-driven and model\-centric\. Existing approaches focus on correctness and task completion, offering useful signals of isolated capability but limited insight into whether agents can be reliably used, controlled, and trusted in practice\. We argue that the problem is not only how coding agents are evaluated, but what is being evaluated: coding agents are evaluated as models, while they are adopted as harnessed systems\.  This gap becomes most visible at the point of adoption\. In real workflows, whether a coding agent is actually used is not determined by base\-model capability alone\. Instead, users make agents usable through user\-level harnesses: situated configurations of task scope, context, constraints, checkpoints, workflow adaptations, and verification practices that shape and validate model behavior\. These harnesses often remain informal and ad hoc, yet can determine whether the same model succeeds in one setting and fails in another\.  To ground this position, we draw on three empirical studies with users\. Study 1 identifies contextual conditions shaping when users adopt or avoid coding agents\. Study 2 identifies execution and control requirements for agentic systems\. Study 3 identifies verification and code\-quality criteria beyond correctness\. Together, these studies suggest that users evaluate not only agent outputs, but also where agents can be used, how their behavior is guided, and whether their outputs are acceptable in practice\. We interpret these conditions as user\-level harnesses that make coding agents usable, controllable, and acceptable in real workflows\.  Based on these findings, we argue that evaluation should move beyond model\-centric and system\-internal metrics toward harness\-aware, user\-grounded assessment\. In particular, evaluations must make explicit the conditions under which coding agents are usable, controllable, and trustworthy in practice—across dimensions such as environment, users, capabilities, and code quality\. We call on the AI research community to place user\-level harness at the center of coding\-agent evaluation\.

## Standardization of Post\-Publication Code Verification is Possible with the Support of the Community

**Authors:** Susana López\-Moreno; Eric R Dolores\-Cuenca; Sangil Kim

**ID:** 140047 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a524oxDsQo>) | [PDF](<https://openreview.net/pdf?id=a524oxDsQo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140047>)

Reproducibility remains a challenge in machine learning research\. While code and data availability requirements have become increasingly common, post\-publication verification is still limited and unformalized\. This position paper argues that journals and conference proceedings should all implement a post\-publication verification submission system\. We propose a modification to ACM and IEEE Access verification badges that allows independent researchers to submit post\-publication code replications directly to the journal or proceedings, leading to visible verification badges included in the article metadata\. Each article may earn up to two badges, each linked to verified code in its corresponding public repository\. This framework would be a step forward toward a standardized reproducibility policy and would provide young researchers with an opportunity to improve their curriculum\. We describe the motivation, related initiatives, a formal framework, the potential impact, possible limitations, and alternative views\.

## Trustworthy AI Must Account for Interactions

**Authors:** Jesse Cresswell

**ID:** 140094 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgBCKP1QOb>) | [PDF](<https://openreview.net/pdf?id=GgBCKP1QOb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140094>)

Trustworthy AI encompasses many aspirational aspects for aligning AI systems with human values, including fairness, privacy, robustness, explainability, and uncertainty quantification\. The ultimate goal of Trustworthy AI research is to achieve all aspects simultaneously\. However, efforts to enhance one aspect often introduce unintended trade\-offs that negatively impact others\. In this position paper, we review notable approaches to five aspects and systematically consider every pair, detailing the negative interactions that can arise\. For example, applying differential privacy to model training can amplify biases, undermining fairness\. Drawing on these findings, we take the position that current research practices of improving one or two aspects in isolation are insufficient\. Instead, research on Trustworthy AI must account for interactions between aspects and adopt a holistic view across all relevant axes at once\. We offer recommendations for how researchers can work towards integrated trust, and provide guidance for practitioners to manage interactions today\.

## Retain\-Neutral Surrogates for Min\-Max Unlearning

**Authors:** Junhao Cai; Dohun Kim; Dowon Kim; Sung Il Choi; Chengjun Jin; Juhyun Park; Changhee Joo

**ID:** 155814 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2hVefCeDpP>) | [PDF](<https://openreview.net/pdf?id=2hVefCeDpP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155814>)

Machine unlearning seeks to remove the influence of designated training data while preserving performance on the remaining data\. Approximate unlearning can be viewed as a local editing problem; in min\-max unlearning, the key local object is the surrogate point at which the retain objective is evaluated\. When forget and retain gradients are strongly aligned, an unconstrained forget\-maximizing perturbation can move to a surrogate point that increases retain loss\. We propose Retain\-Orthogonal Surrogate Unlearning \(ROSU\), which constrains the inner surrogate construction by maximizing first\-order forget gain subject to zero first\-order retain change under a fixed perturbation budget\. This yields a closed\-form retain\-orthogonal perturbation, a lightweight transported outer update, and amplification along the retain\-neutral direction\. Our analysis establishes \(i\) a curvature\-controlled second\-order bound on retain damage, \(ii\) a positive\-alignment regime in which ROSU strictly reduces surrogate retain loss relative to standard min\-max perturbations, and \(iii\) near\-equivalence when the two gradients are nearly orthogonal\. Across vision and language benchmarks \(CIFAR\-10/100, Tiny\-ImageNet, TOFU, WMDP\), the empirical pattern follows this geometry: ROSU gives its clearest gains in high\-coupling regimes while remaining competitive elsewhere\.

## Hallucination\-Guided Unlearning: Using Hallucination Traces to Reveal Overfitted Memories

**Authors:** Jiayu Zhang; Ziqi Zhong; Yuliang Gai; Canran Xiao

**ID:** 152918 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PR255SIdSp>) | [PDF](<https://openreview.net/pdf?id=PR255SIdSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152918>)

Selective unlearning in large language models is increasingly necessary for safety and compliance, yet harmful or memorized content is often latent, entangled, and hard to specify as a clean \`\`forget set\.'' We aim to close this gap by identifying what to forget from the model’s own failure modes rather than relying solely on explicit supervision\. We propose Hallucination\-Guided Unlearning \(HGU\), which treats hallucinations as diagnostic signals: it localizes unsupported spans via evidence and internal consensus, traces a sparse set of high\-responsibility MLP neurons, and edits them with compact gates under a utility\-preserving KL constraint\. Across TOFU, HGU achieves the best MU\-\-FE trade\-off with Avg of 0\.7221 \(forget05\) and 0\.7699 \(forget10\), and it also attains the top SepS H\-Avg \(0\.4382/0\.4715\) under mixed forget/retain prompts; on WMDP auxiliary, it yields the strongest forgetting \(e\.g\., 14\.2 on Economics\) while improving Retain \(52\.7\) and MMLU \(57\.2\)\. These results suggest that reframing hallucinations as actionable traces enables targeted, post\-hoc unlearning that better balances forgetting efficacy and general utility without full retraining\.

## Learning Data\-free Universal Adversarial Perturbation with Hybrid Priors and Gradient\-Guided Sharpness Regularization

**Authors:** Zhi Tan; Jiazheng Cui; Wenwen Zhang; Yiran Liu; Guodong Liu; Chris Ding; Di Ming

**ID:** 155385 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63Fv6QZl1d>) | [PDF](<https://openreview.net/pdf?id=63Fv6QZl1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155385>)

Universal adversarial perturbations \(UAPs\) aim to learn a single input\-agnostic perturbation that consistently induces misclassification across diverse inputs, exposing systemic vulnerabilities of deep models\.  To enhance practical applicability, data\-free UAP methods replace real data with samples drawn from handcrafted synthetic priors and optimize UAPs via activation maximization\.  However, existing approaches rely on a single synthetic prior throughout training, which biases optimization toward a narrow feature subspace and necessitates costly per\-prior tuning\. Moreover, the commonly used stochastic gradient ascent \(SGA\) updates are inherently unstable and tend to converge to sharp regions of the loss landscape, weakening black\-box transferability\.  To overcome these limitations, we propose HPSR\-UAP, a data\-free framework that couples hybrid\-prior reweighting with gradient\-guided sharpness regularization\.  Specifically, we develop a dynamic reweighting mechanism over multiple synthetic priors to mitigate prior bias and avoid overfitting to any single distribution\.  Building upon this, we introduce a gradient\-guided sharpness regularization that smooths the prior\-weighted activation loss landscape within a local perturbation neighborhood, promoting updates towards flatter and more transferable directions\. Extensive experiments on ImageNet demonstrate that HPSR\-UAP outperforms state\-of\-the\-art methods in both white\-box and black\-box data\-free attack settings\.  We further introduce a multi\-granularity block\-wise similarity metric that quantifies spatial repetitiveness within UAPs, revealing a strong correlation between structural regularity and attack performance\.

## A Black\-Box Reduction from Regret to Multi\-Level Coverage

**Authors:** Tuo Liu; Edgar Dobriban; Francesco Orabona

**ID:** 154233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FEc497vZlM>) | [PDF](<https://openreview.net/pdf?id=FEc497vZlM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154233>)

Online Conformal Prediction \(OCP\) sequentially constructs prediction sets whose average empirical coverage converges to a target level over time, for arbitrary, potentially adversarial datasets\. In the multi\-level setting of OCP, prediction sets are produced at $d$ coverage levels at once\. Prior work showed that online gradient descent with lazy isotonic projections produces sets properly nested across levels, but with a $\\sqrt\{d\}$ dependence in the per\-level coverage convergence rate\. Here, we both generalize and improve prior work\. First, we show that lazy isotonic projections can be safely used for the construction of multi\-level online conformal prediction sets from \\emph\{any\} online learning algorithm\. Then, through a black\-box reduction, we show that the linearized regret of the online algorithm itself automatically gives control over both per\-level calibration and distributional consistency of multi\-level predictions via Fenchel duality\. Finally, by using the Weighted Interval Score, the standard scoring rule for assessing multi\-level interval forecasts, we prove that these projections reduce both the size of the sets and their under\-coverage\. We show two instantiations of our theory, $p$\-norm Online Mirror Descent and coordinate\-wise Universal\-Portfolio, both improving the dependence on the number of levels to $\\sqrt\{\\log d\}$ for the multi\-OCP problem\. Experiments on stock prices, electricity demand, and synthetic streams confirm consistent gains in coverage\-width trade\-offs over existing baselines\.

## FRInGe: Distribution\-Space Integrated Gradients with Fisher–Rao Geometry

**Authors:** Gabriele Martino; Sebastian Tschiatschek

**ID:** 149612 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=onv7aWVE1B>) | [PDF](<https://openreview.net/pdf?id=onv7aWVE1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149612>)

Gradient\-based attribution methods are model\-faithful and scalable, but Integrated Gradients \(IG\) can be brittle because explanations depend on heuristic baselines, straight\-line paths, discretization, and saturation\. We propose Fisher\-\-Rao Integrated Gradients \(FRInGe\), which defines both the reference and interpolation schedule in predictive distribution space\. FRInGe replaces input baselines with a maximum\-entropy predictive reference and follows a Fisher\-\-Rao geodesic on the probability simplex\. The corresponding input\-space trajectory is realized through the pullback Fisher metric and stabilized by KL and Euclidean trust regions; attributions are obtained by integrating input gradients along this trajectory\. Across six ImageNet architectures, FRInGe most clearly improves calibration\-oriented attribution metrics, especially MAS scores, while remaining competitive on perturbation AUC and infidelity\.

## Error\-Guided Bellman Calibration for Semi\-Offline Value Estimation

**Authors:** Tetsuro Morimura

**ID:** 149993 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lcrYylOS2v>) | [PDF](<https://openreview.net/pdf?id=lcrYylOS2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149993>)

We study semi\-offline value estimation, where a small on\-policy sample supplements a large off\-policy dataset\. This regime is common in recommender systems and pre\-deployment A/B testing, and the challenge is to use the limited on\-policy data to correct systematic bias in a given value predictor\. Recent work on Bellman calibration \(BC\) gives a post\-hoc, model\-agnostic correction along the predicted value\. We propose Error\-Guided Bellman Calibration \(GBC\), which trains an error model on the on\-policy sample and calibrates the predictor along this learned error axis\. We prove a completeness\-free refinement guarantee, a theorem showing that the correction adapts to the intrinsic dimension of the prediction bias, and a finite\-sample bound on the value\-estimation error that isolates our advantage in the refinement term\.  Across synthetic, CRM, and D4RL benchmarks, GBC improves over existing calibration baselines\.

## Occupancy\-based Quantile Risk Control

**Authors:** Zihao Shi; Huajun Xi; Bingyi Jing; Hongxin Wei

**ID:** 149393 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qOeSSrQgQq>) | [PDF](<https://openreview.net/pdf?id=qOeSSrQgQq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149393>)

Conformal risk control is an emerging framework for the safe deployment of machine learning models with finite\-sample guarantees\. To accommodate a broader class of risk notions, quantile risk control extends this framework to quantile\-based risk measures\. However, existing methods either suffer from excessive conservatism or lack rigorous finite\-sample guarantees\. To address these limitations, we introduce Occupancy\-based Quantile Risk Control \(OQRC\), a novel method that provides tight risk control bounds with finite\-sample validity\. Our key idea is to formulate risk control as a finite\-occupancy problem by partitioning the loss space with the ordered calibration losses\. Specifically, we estimate the distribution of test losses across the resulting bins and upper\-bound the risk by the maximum loss attained within each bin\. We then select the parameter $\\lambda$ such that this upper bound does not exceed a predefined threshold $\\alpha$ with high probability $1\-\\delta$\. Theoretically, we establish a finite\-sample guarantee showing that OQRC yields tight risk control bounds that converge to the optimal bounds at a provable rate of $\\mathcal\{O\}\_p\(n^\{\-1/2\}\)$\. Extensive experiments demonstrate the effectiveness of our method, reducing the risk gap by up to 78\.64\\% on common benchmarks\.

## The Block Catastrophe of Marginal Calibration in Certified Requirements Traceability

**Authors:** Jikun Wu; Dongxin Guo; Siu Ming Yiu

**ID:** 148450 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjocfB8Qxp>) | [PDF](<https://openreview.net/pdf?id=xjocfB8Qxp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148450>)

Certifying authorities for safety\-critical software audit recovered trace matrices module by module, not on average\. Every existing distribution\-free calibration delivers a marginal certificate, and we show the gap to the auditor's quantity is structural and unbounded\. Under within\-block exchangeability with cross\-block heterogeneity in the conditional null score distribution, every procedure controlling marginal $\\mathrm\{FDR\}$ at level $\\alpha$ on a bipartite trace matrix with $K$ source modules admits worst\-module false discovery proportion at least $1\{\-\}\\alpha\{\-\}O\(1/K\)$ with probability at least $1\{\-\}2/K$\. We name this the block catastrophe and close it with $\\mathrm\{CERTRA\}$, which wraps any black\-box scorer, computes a within\-block rank\-indicator conformal $e$\-value, and applies $e$\-$\\mathrm\{BH\}$ separately within each source module\. The construction yields finite\-sample per\-module $\\mathrm\{FDR\}$ control under arbitrary intra\-module dependence, with matching power up to a rank\-quantization factor\. We release IndTrace\-2026, a 12\{,\}406\-link composite across aerospace, automotive, and medical\-device specifications with professional ASIL/DAL/SIL annotation \(Cohen's $\\kappa\{=\}0\.86$\)\. $\\mathrm\{CERTRA\}$ holds worst\-block $\\mathrm\{FDP\}$ at 0\.118 where split\-conformal drifts to 0\.413, retains 0\.741 of true links versus 0\.572 for the strongest fair\-operating\-point baseline, and reduces audit deficiency 3\.3\-fold\. Per\-module distribution\-free calibration is what an industrial audit can sign\.

## Position: Neurosymbolic AI is a strong technical foundation for trustworthy, deployable AI by design

**Authors:** Chandler Squires; Yaqi Xie; Simon Stepputtis; Katia Sycara; Pradeep Ravikumar

**ID:** 140018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oqZudlhgoi>) | [PDF](<https://openreview.net/pdf?id=oqZudlhgoi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140018>)

As AI becomes more widely adopted, this technology has started to reach a new stage of maturity, with new expectations\. In many domains, features like interpretability, controllability, and reliability can no longer be treated as secondary considerations, but must be treated as primary concerns\. We argue that the currently dominant \*incremental refinement\* strategy should be complemented by a more design\-oriented \*first principles\* strategy, and that \*neurosymbolic AI\* provides one of the most coherent and practically promising technical foundations for this strategy\. In particular, we describe certain technical capabilities provided by neurosymbolic AI, including knowledge integration, conceptual alignment, modifiability, and structured generalization, and argue that these capabilities are crucial for building AI that is trustworthy and deployable by design\.

## Online Localized Conformal Prediction

**Authors:** Yuheng Lai; Garvesh Raskutti

**ID:** 148737 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vPeDJdLEKg>) | [PDF](<https://openreview.net/pdf?id=vPeDJdLEKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148737>)

Conformal prediction is a framework that provides valid uncertainty quantification for general models with exchangeable data\. However, in the online learning and time\-series settings, exchangeability is not satisfied\. Existing online conformal methods, such as adaptive conformal inference \(ACI\), can achieve long\-run validity, yet they remain inefficient under covariate heterogeneity because they rely on global calibration\. We propose \*Online Localized Conformal Prediction \(OLCP\)\*, which combines online adaptation with covariate\-dependent localization to better reflect heterogeneity\. To reduce sensitivity to the localization bandwidth, we further develop \*OLCP\-Hedge\*, which performs bandwidth selection as an online expert aggregation problem using a constrained online convex optimization framework\. Importantly, we provide coverage guarantees for both algorithms and demonstrate through simulations and real\-data experiments that the proposed methods attain valid long\-run coverage with narrower prediction intervals than existing baselines\.

## Below the Reliability Floor: Recovering True Success from Judge\-Gated Loops

**Authors:** Tautik Agrahari; Jeff Joji

**ID:** 156773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J2Yg9vJcYb&referrer=%5Bthe%20profile%20of%20Tautik%20Agrahari%5D(%2Fprofile%3Fid%3D~Tautik_Agrahari1)>) | [PDF](<https://openreview.net/pdf?id=J2Yg9vJcYb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156773>)

LLM judges are increasingly placed inside an agent's loop, scoring the agent's own attempts and re\-prompting until one passes\. We show this quietly corrupts measurement: retry\-until\-PASS is optional stopping against a noisy classifier—it keeps drawing until the judge slips—so the reported pass rate is a biased estimator of true success, upward in the pass\-prone retry regimes of interest \(and downward under conservative rules such as strict rubrics or unanimous juries\)\. We make this exact\. The cap\-K gate is a binary classifier with closed\-form sensitivity/specificity, and its bias is governed by one coefficient, the gate's Youden index J: as J → 0 the gated rate becomes uninformative about π, so recovery must fall back to gold labels and no estimator beats the gold\-only mean\. Across 44 capable\-agent loops on GSM8K, MATH, and code with objective ground truth \(no authored weakness; a separate terse\-agent stress set is excluded here\) the inflation is systematic \(median slip \+0\.16; worst on code, where the judge cannot run the candidate, a true 0\.74 inflated to a reported 0\.98\) and obeys a closed\-form law predicting the slip from per\-attempt statistics \(pooled r = 0\.95; errors\-in\-variables slope 0\.765 \[0\.70, 0\.84\], excluding 1\)\. To recover true success we benchmark Rogan–Gladen against prediction\-powered inference: the label\-efficient estimators \(PPI/PPI\+\+\) recover π far more accurately than naive reporting and Rogan–Gladen \(mean recovery MAE 0\.050 vs\. 0\.149, and 0\.081 vs\. 0\.241 as gold becomes scarce\), because they escape the 1/J² variance that makes the classical correction fragile; on balanced low\-bias gates they match the gold\-only mean \(per\-gate differences within bootstrap noise, none uniformly best\), so our contribution is not a uniquely\-best estimator but the identification of loop\-induced bias and the J diagnostic that says when—and whether—to correct at all\. Beyond verifiable gold, we measure recovery on public, human\-labeled non\-verifiable gates—response safety and summary quality—where PPI\+\+ recovers the true rate to mean MAE 0\.043 versus naive 0\.165 \(\~4× in aggregate, up to &gt;10× on the most\-biased gates\); and—in the motivating regime, a non\-verifiable safety judge inside a real retry loop \(n = 400, against a pre\-registered 3\-model strong\-LLM panel—a disclosed proxy, human\-anchored at raw 0\.90 agreement\)—a lenient gate ships 6\.8% panel\-labeled\-unsafe responses \(95% CI \[0\.047, 0\.096\]\) while the calibrated correction recovers the panel safe\-rate \~3\.5× more accurately than naive\. The deliverable is a recipe: report a PPI\+\+ estimate alongside J as a reliability/identifiability diagnostic, measure at K = 1, and—via a label\-free drift detector \(ROC\-AUC 0\.80\)—de\-bias only when calibration transfers\. We release all code and content\-free data\.

## QUTCC: Quantile Uncertainty Training and Conformal Calibration for Imaging Inverse Problems

**Authors:** Cassandra T Ye; Shamus Li; Tyler King; Kristina Monakhova

**ID:** 150551 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hIqpI82zrU>) | [PDF](<https://openreview.net/pdf?id=hIqpI82zrU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150551>)

While deep learning offers tremendous promise for scientific and medical imaging, any failures and hallucinations \(predictions that do not coincide with reality\) are hard to pinpoint and can have serious downstream consequences\. Uncertainty estimation techniques, such as conformal prediction, can help by predicting statistically valid error bars for a model's prediction\. However, popular conformal prediction methods were not designed for high\-dimensional image\-valued problems and do not take into account spatial correlations within an image during conformal calibration, resulting in larger\-than\-necessary uncertainty intervals\. We propose a practical simultaneous quantile regression method that enables non\-linear, spatially\-adaptive scaling during conformal calibration\. Our method, QUTCC uses a U\-Net architecture with a quantile embedding to learn a full conditional quantile distribution during training, and then leverages this non\-linear, learned function for spatially\-adaptive conformal calibration\. At test time, our method can efficiently estimate uncertainty intervals with pixel\-marginal coverage guarantees\. In addition, QUTCC can also predict pixel\-wise conditional probability density estimates without any built\-in distributional assumptions\. We evaluate our method on several denoising problems, accelerated magnetic resonance imaging, and quantitative phase microscopy\. Our method consistently produces tighter uncertainty intervals than prior conformal methods at the same coverage level, can predict plausible conditional distributions for different tasks, and in some cases, high\-uncertainty regions can help us locate hallucinations in a model's prediction\.

## How Hard is it to Rig a Benchmark? A Social Choice Analysis of Leaderboard Robustness

**Authors:** Polina Gordienko; Georg Schollmeyer; Frauke Kreuter; Christoph Jansen

**ID:** 152232 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZc9h8y5AP>) | [PDF](<https://openreview.net/pdf?id=UZc9h8y5AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152232>)

Multi\-task benchmarks have become a central pillar of machine learning research, yet their growing influence has incentivised benchmark gaming \-\- strategic actions taken to improve the leaderboard rank of a specific model\. Treating datasets as voters and models as candidates, we consider benchmark\-specific training \-\- the inclusion of benchmark data in training \-\- as a form of election manipulation\. For any ordinal benchmark, the problem of choosing datasets to train on so that a target model becomes top\-ranked corresponds to shift bribery, a class of manipulation problems from computational social choice\. Leveraging this identification, we show that the benchmark\-specific training problem is NP\-hard under Borda count and mean win rate\. Complementing this worst\-case perspective, we introduce the instance\-level robustness, the minimum number of datasets a model developer must include in training to top a given leaderboard, and derive expressions for it under arithmetic mean, median, mean win rate and pairwise majority\. We evaluate these expressions on MMLU under HELM and on BIG\-Bench Hard \(BBH\) under the Open LLM Leaderboard\. Across both suites, mean win rate is hardest to manipulate: this gap is clear on BBH \(24 tasks, 4507 models\), where its median robustness is 22 tasks \(92\\%\), compared with 13 \(54\\%\) under arithmetic mean and 12 \(50\\%\) under median and pairwise majority\.

## Learning Joint Semantic\-Geometric Uncertainty for Structured Prediction with Closed\-Loop Calibration

**Authors:** Bohan Li; Rui Leng; Qi Ma; Shaoyuan Mo; Ke Wang

**ID:** 149933 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5NZKzLOY2>) | [PDF](<https://openreview.net/pdf?id=m5NZKzLOY2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149933>)

Structured prediction in dynamic, open\-world environments—such as online High\-Definition \(HD\) map construction for autonomous driving, mobile robotics, and embodied AI—fundamentally relies on the precise alignment of continuous geometry and discrete semantics\. However, existing methods typically decouple these heterogeneous modalities, producing "overconfident yet erroneous" predictions that lack reliable uncertainty calibration in degraded environments\. To address this fundamental limitation, we propose IntroMap, a probabilistic framework dedicated to learning joint semantic\-geometric uncertainty with closed\-loop calibration\. At its core, the Semantic\-Geometric Joint Calibration \(SGJC\) mechanism explicitly captures the aleatoric co\-occurrence between spatial coordinates and semantic proxies via a Hybrid 3D Multivariate Gaussian distribution\. Furthermore, to overcome the shortcomings of passive, open\-loop uncertainty estimation, we introduce the Closed\-Loop Feature Calibration \(CLFC\) module\. It transforms the predicted joint covariance into latent modulation signals, actively rectifying degraded feature representations\. Extensive experiments on the nuScenes and Argoverse 2 datasets demonstrate IntroMap's model\-agnostic generalizability across multiple baselines \(e\.g\., MapTRv2, MapQR\), achieving state\-of\-the\-art accuracy—including 63\.1\\% mAP on nuScenes and a striking 8\.1\\% mAP leap under challenging rainy conditions\. Crucially, downstream end\-to\-end autonomous driving evaluations verify that our calibrated joint uncertainty establishes explicit safety margins, effectively preventing motion planners from blindly trusting hallucinated features and significantly reducing collision rates in long\-tail scenarios\. Code is available at https://anonymous\.4open\.science/r/IntroMap\-F0BD/\.

## Harmless in Pieces, Harmful in Motion: Detecting Multi\-Agent Jailbreaks

**Authors:** Vishal Pramanik; Maisha Maliha; Olivera Kotevska; Nathaniel D Bastian; Susmit Jha; Sumit Kumar Jha

**ID:** 153984 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H4BgVHh3ID>) | [PDF](<https://openreview.net/pdf?id=H4BgVHh3ID>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153984>)

Multi\-agent LLM and VLM systems introduce a \*fragmentation blind spot\*: an adversary can decompose a harmful objective into individually benign sub\-tasks distributed across agents, tools, and shared memory, so that each local interaction appears policy\-compliant while the composed workflow is unsafe\. Existing defenses classify isolated prompts, monitor single\-agent histories, or impose architectural constraints, but none directly detect runtime system\-level drift toward harm across the full interaction graph\. We introduce \*\*CITADEL\*\* \(\*\*C\*\*omposite \*\*I\*\*ntent \*\*T\*\*racking for \*\*A\*\*gentic \*\*D\*\*efense via \*\*E\*\*volving \*\*L\*\*atent States\), a training\-free runtime monitor for multi\-turn, multi\-agent jailbreaks\. CITADEL maintains latent states over agents, tools, and memory stores using a cosine\-gated recurrence with no learned parameters; encodes a published safety taxonomy as fixed harm anchors via the same frozen multimodal encoder applied to runtime events; and scores risk through the conjunction of harm\-anchor proximity, multi\-node participation, and positive temporal drift\. We evaluate CITADEL on \*\*MA\-SafeBench\*\*, a new benchmark spanning five multi\-agent attack families, three communication topologies, and heterogeneous API\-accessible LLM/VLM backbones\. CITADEL reduces average attack success rate from 69\.3% to 16\.9% — a 75\.6% relative reduction — at a 2\.1% false\-positive rate and 28 ms per\-event overhead, outperforming per\-agent detectors, trajectory\-level monitoring, and architectural defenses\. The same hyperparameters transfer without retuning to OpenAgentSafety, Agent Security Bench, and MTMCS\-Bench, indicating that collective geometric convergence provides an effective runtime signal for detecting distributed jailbreaks in multi\-agent systems\.

## Tatemae: Detecting Alignment Faking via Tool Selection in LLMs

**Authors:** Matteo Leonesi; Francesco Belardinelli; Flavio Corradini; Marco Piangerelli

**ID:** 153416 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LUX7b68Mpp>) | [PDF](<https://openreview.net/pdf?id=LUX7b68Mpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153416>)

Alignment faking \(AF\) occurs when an LLM strategically complies with training objectives to avoid value modification, reverting to prior preferences once monitoring is lifted\. Current detection methods focus on conversational settings and rely primarily on Chain\-of\-Thought \(CoT\) analysis, which provides a reliable signal when strategic reasoning surfaces, but cannot distinguish deception from capability failures if traces are absent or unfaithful\. We formalize AF as a composite behavioural event and detect it through observable tool selection, where the LLM selects the safe tool when unmonitored, but switches to the unsafe tool under monitoring that rewards helpfulness over safety, while its reasoning still acknowledges the safe choice\. We release a dataset of 108 enterprise IT scenarios spanning Security, Privacy, and Integrity domains under Corruption and Sabotage pressures\. Evaluating six frontier LLMs across five independent runs, we find mean AF detection rates between 3\.5\\% and 23\.7\\%, with vulnerability profiles varying by domain and pressure type\. These results suggest that susceptibility reflects training methodology rather than capability alone\.

## CaMeLs Can Use Computers Too: System\-level Security for Computer Use Agents

**Authors:** Hanna Foerster; Tom Blanchard; Kristina Nikolić; I Shumailov; Cheng Zhang; Robert Mullins; Nicolas Papernot; Florian Tramer; Yiren Zhao

**ID:** 155134 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=86w8zzGKec>) | [PDF](<https://openreview.net/pdf?id=86w8zzGKec>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155134>)

AI agents are vulnerable to prompt injection attacks, where malicious content hijacks agent behavior\. Among proposed defenses, architectural isolation provides the strongest guarantees by strictly separating trusted task planning from untrusted environment observations\. However, applying this design to Computer Use Agents \(CUAs\), which automate tasks by viewing screens and executing actions, presents a fundamental challenge\. Current agents require continuous observation of UI state to determine each action, which conflicts with the isolation required for security\. We resolve this tension by demonstrating that UI workflows, while dynamic, are structurally predictable\. Single\-shot planning, where a trusted planner emits upfront a complete branching plan covering all anticipated runtime states, provides control flow integrity guarantees against arbitrary instruction injections\. We introduce NOVA \(Navigating via Observation, Verification, and Action\) to make this viable in the combinatorially large UI state space, where the plan can invoke a perception model to resolve runtime values such as UI coordinates\. We evaluate our design on OSWorld, and retain up to 57\\% of the performance of frontier models while improving performance for smaller open\-source models by up to 19\\%, demonstrating that rigorous security and utility can coexist in CUAs\. Although upfront planning prevents instruction injections, we show that additional measures are needed to defend against Branch Steering attacks, where adversaries deceive the perception model into routing execution down attacker\-preferred branches of the plan, such as redirecting the agent to a malicious website\.

## Train\-free Data Poisoning Attack against Retrieval\-augmented Diffusion Models

**Authors:** XINQI LYU; Yihao LIU; Yiming Cao; Bin Xiao

**ID:** 153591 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KHYdVtL89T>) | [PDF](<https://openreview.net/pdf?id=KHYdVtL89T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153591>)

Retrieval\-augmented diffusion models \(RAG\-DMs\) have significantly advanced image synthesis by incorporating external knowledge bases\. However, their security vulnerabilities against malicious external data remain largely underexplored\. Existing data poisoning attacks against diffusion models primarily corrupt internal parameters\. They fail against RAG\-DMs because clean retrieved images easily override these compromised parameters\. Furthermore, recent attack tailored for RAG\-DMs requires training the retriever, resulting in high computational costs and overfitting to specific retrievers\. To bridge this gap, we propose PoisonedRDM, a novel and train\-free data poisoning attack tailored to execute concept hijacking against RAG\-DMs\. Specifically, PoisonedRDM poisons the knowledge base with a minimal number of optimized images and optimizes adversarial perturbations through a joint optimization strategy, steering unknown retrievers toward the poisoned images via surrogate ensemble alignment and aligning the generated outputs with a malicious target concept, while adhering to a strict perturbation budget to maintain high visual stealthiness\. Experiments show that PoisonedRDM effectively attacks RAG\-DMs, achieving high success rates and outperforming state\-of\-the\-art baselines\.

## Even Sailors Need Calm Seas: Taming the Geometry of VLMs for Fast Adversarial Fine\-Tuning

**Authors:** Yuqing Wen; Junhao Dong; Ting Peng; Xudong Zhang; Jiaming Zhang; Weiming Liu; Zhengtao Yao; Xinghua Qu; Yew Soon Ong

**ID:** 150866 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=elpJhhSIEj>) | [PDF](<https://openreview.net/pdf?id=elpJhhSIEj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150866>)

Vision\-Language Models \(VLMs\) such as CLIP have demonstrated strong performance across tasks yet remain highly vulnerable to adversarial attacks\. While adversarial fine\-tuning has been demonstrated to be effective against such malicious inputs, its multi\-step adversary generation scheme during fine\-tuning further induces prohibitive computational costs for VLM backbones\. Previous works in unimodal models have introduced single\-step strategies to reduce this burden\. However, we find naive single\-step strategies fail on VLMs due to more severe catastrophic overfitting\. In addition, we identify a novel failure mode termed \*Perturbation Radius Overfitting\*, where VLMs overfit to the specific training attack budget while paradoxically becoming fragile to weaker perturbations\. We trace these failures to growing angular misalignment and magnitude surge of the local gradients, which compromise the local linearity essential for accurate single\-step approximation\. Guided by this analysis, we introduce a joint adversarial optimization scheme that actively rectifies the local geometry by suppressing both angular misalignment and magnitude surge along the perturbation path\. Our approach consistently outperforms existing single\-step methods across various datasets and VLM architectures, achieving state\-of\-the\-art robustness while preserving efficiency\. To our knowledge, this is the first work to systematically examine single\-step adversarial fine\-tuning on VLMs and establish the geometric foundations of their robustness\.

## Rich Insights from Cheap Signals: Efficient Evaluations via Tensor Factorization

**Authors:** Felipe Maia Polo; Aida Nematzadeh; Virginia Aglietti; Adam Fisch; Isabela Albuquerque

**ID:** 138936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vQQlWAbobs>) | [PDF](<https://openreview.net/pdf?id=vQQlWAbobs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138936>)

Moving beyond evaluations that collapse performance across heterogeneous prompts toward fine\-grained evaluation at the prompt level, or within relatively homogeneous subsets, is necessary to diagnose generative models' strengths and weaknesses\. Such fine\-grained evaluations, however, suffer from a data bottleneck: human gold\-standard labels are too costly at this scale, while automated ratings are often misaligned with human judgment\. To resolve this challenge, we propose a novel statistical model based on tensor factorization that merges cheap autorater data with a limited set of human gold\-standard labels\. Specifically, our approach uses autorater scores to pretrain latent representations of prompts and generative models, and then aligns those pretrained representations to human preferences using a small calibration set\. This sample\-efficient methodology is robust to autorater quality, more accurately predicts human preferences on a per\-prompt basis than standard baselines, and provides tight confidence intervals for key statistical parameters of interest\. We also showcase the practical utility of our method by constructing granular leaderboards based on prompt qualities and by estimating model performance solely from autorater scores, entirely eliminating the need for additional human annotations\.

## The Alignment Tax Concentrates in Output Projections

**Authors:** Ming Liu

**ID:** 152620 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rj4yyW4GB7>) | [PDF](<https://openreview.net/pdf?id=Rj4yyW4GB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152620>)

Prior work localizes the alignment tax\-\-\-instruction tuning's degradation of structured generation\-\-\-to transformer layers, but cannot determine which projections within a layer carry the functional change\. We identify a consistent sub\-layer hierarchy across three primary SwiGLU decoder\-only families \(7\-\-9B parameters, with Yi\-1\.5\-9B supplementary\): among equal\-parameter MLP projections, $W\_\{down\} &gt; W\_\{up\} &gt; W\_\{gate\}$ \(2\.5:1\.5:1\)\-\-\-an architecturally grounded ordering \(reproduced under continual pretraining\) not resolved by concurrent work\. Within attention, $W\_V$/$W\_O$ gradient magnitudes exceed $W\_Q$/$W\_K$ by 1\.76\-\-3\.91$\\times$\. Three independent methods\-\-\-weight patching, gradient analysis, and training\-time exclusion\-\-\-converge on the same within\-layer structure; a continual\-pretraining control confirms the within\-MLP hierarchy is architectural \(not alignment\-specific\), but the layer\-level distribution of harmful modifications is\-\-\-this task\-specific signal enables targeted rollback \(8\.9$\\times$ over architectural\-prior heuristics on held\-out data, $p=0\.002$\)\. Surgical Alignment Reversal \(SAR\), a training\-free rollback of attribution\-ranked components, recovers 47% of the alignment tax \(cross\-entropy metric, Qwen; Llama/Mistral: 2\-\-3$\\times$ random\) on held\-out cross\-dataset data \(in\-domain ratios 2\.8\-\-5\.3$\\times$\); Output\-Constrained DPO \(OC\-DPO\) largely eliminates the tax while Q/K exclusion does not\-\-\-both validated on attribution\-independent data\. Safety evaluation shows no significant degradation: refusal\-rate $\|\\Delta\| \\le 1\.4$ pp \($n=1\{,\}000$\), no significant ASR increase under adversarial attack \($\|\\Delta\\text\{ASR\}\| \\le 6$ pp, $n=50$\); Yi\-1\.5\-9B is excluded due to safety\-\-structure overlap \($\-13\.6$ pp\)\. Attribution replicates at 14B; gradient asymmetry persists at 72B\.

## Cognitive Firewalls: A Synthetic Account of Cross\-Lingual Reasoning Collapse

**Authors:** Jou Barzdukas; Paulius Rauba; Julian Schulz; Jack Peck; Steven Basart; Lennie Wells

**ID:** 153873 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I7DeL1MXJc>) | [PDF](<https://openreview.net/pdf?id=I7DeL1MXJc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153873>)

The reasoning capabilities of large language models are reported to drop sharply when they are forced to think in heavily regulated target languages such as Chinese — a phenomenon the literature attributes to data imbalance, multilingual transfer failures, or, more recently, RL\-induced cross\-lingual collapse\. We propose and test an alternative mechanistic account: that the gap reflects RL\-induced selection between conditional policies sharing the same parameters, rather than a loss of underlying capability\. We construct a model organism for this account\. Two policies — identified solely by the language of an unsupervised chain of thought — are installed via SFT on disjoint splits of ARC\-Challenge, with one policy trained to answer and the other to refuse on each split\. Reinforcement learning with a final\-answer reward, restricted to one split, drives the language of reasoning to collapse onto the rewarded policy across both splits, producing a 67% → 10% accuracy collapse on the held\-out split despite no reward signal ever observing it\. General capability is unaffected: MMLU accuracy is 71\.2% before and after RL\. A depth\-wise activation steering intervention then recovers held\-out accuracy from 0% to 85% on the worst\-case slice \(Chinese\-CoT completions\) while preserving Chinese as the surface chain\-of\-thought language and leaving the rewarded policy intact \(83% vs\. 94% unsteered\)\. The capability was never lost; it was gated\. To the extent deployed regulated\-language models contain analogous structure, surface evaluations of such models will systematically understate capability hidden behind learned policy gates\.

## Conformal Agent Error Attribution

**Authors:** Naihe Feng; Yi Sui; Shiyi Hou; Ga Wu; Jesse Cresswell

**ID:** 150722 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fvwWOlglCS>) | [PDF](<https://openreview.net/pdf?id=fvwWOlglCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150722>)

When multi\-agent systems \(MAS\) fail, identifying where the decisive error occurred is the first step for automated recovery to an earlier state\. Error attribution remains a fundamental challenge due to the long interaction traces that large language model\-based MAS generate\. This paper presents a framework for error attribution based on conformal prediction \(CP\) which provides finite\-sample, distribution\-free coverage guarantees\. We introduce new algorithms for filtration\-based CP designed for sequential data such as agent trajectories\. Unlike existing CP algorithms, our approach predicts sets that are contiguous sequences to enable efficient recovery and debugging\. We verify our theoretical guarantees on a variety of agents and datasets, show that errors can be precisely isolated, then use prediction sets to rollback MAS to correct their own errors\. Our overall approach is model\-agnostic, and offers a principled uncertainty layer for MAS error attribution\.

## DocScope: Benchmarking Verifiable Reasoning for Trustworthy Long\-Document Understanding

**Authors:** Xiang Feng; Jiawei Zhou; Zhangfeng Huang; Kewei Wang; Shanshan Ye; Jinxin Hu; Zulong Chen; Yong Luo; Jing Zhang

**ID:** 139349 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V55GtaUSsR>) | [PDF](<https://openreview.net/pdf?id=V55GtaUSsR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139349>)

Evaluating whether Multimodal Large Language Models can produce trustworthy, verifiable reasoning over long, visually rich documents requires evaluation beyond end\-to\-end answer accuracy\. We introduce DocScope, a benchmark that formulates long\-document QA as a structured reasoning trajectory prediction problem: given a complete PDF document and a question, the model outputs evidence pages, supporting evidence regions, relevant factual statements, and a final answer\. We design a four\-stage evaluation protocol—Page Localization, Region Grounding, Fact Extraction, and Answer Verification—that audits each level of the trajectory independently through inter\-stage decoupling, with all judges selected and calibrated via human alignment studies\. DocScope comprises 1,124 questions derived from 273 documents, with all hierarchical evidence annotations completed by human annotators\. We benchmark 6 proprietary models, 12 open\-weight models, and several domain\-specific systems\. Our experiments reveal that answer accuracy cannot substitute for trajectory\-level evaluation: even among correct answers, the highest observed rate of complete evidence chains is only 29\\%\. Across all models, region grounding remains the weakest trajectory stage\. Furthermore, the primary difficulty stems from aggregating evidence dispersed across long distances and multiple document clusters, while an oracle study identifies faithful perception and fact extraction as the dominant capability bottleneck\. Cross\-architecture comparisons further suggest that activated parameter count matters more than total scale\. The benchmark and code will be publicly released\.

## Training ML Models with Predictable Failures

**Authors:** Will Schwarzer; Scott Niekum

**ID:** 149754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nbRdWENRb8>) | [PDF](<https://openreview.net/pdf?id=nbRdWENRb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149754>)

Estimating how often an ML model will fail at deployment scale is central to pre\-deployment safety assessment, but a feasible evaluation set is rarely large enough to observe the failures that matter\. Jones et al\. \(2025\) address this by extrapolating from the largest k failure scores in an evaluation set to predict deployment\-scale failure rates\. We give a finite\-k decomposition of this estimator's forecast error and show that it has a built\-in bias toward over\-prediction in the typical case, which is the safety\-favorable direction\. This bias is offset when the evaluation set misses a rare high\-failure mode that the deploy set contains, leaving the forecast to under\-predict at deployment scale\. We propose a fine\-tuning objective, the forecastability loss, that addresses this failure mode\. In two proof\-of\-concept experiments, a language\-model password game and an RL gridworld, fine\-tuning substantially reduces held\-out forecast error while preserving primary\-task capability and achieving safety similar to that of supervised baselines\.

## Sample Transform Cost\-Based Training\-Free Hallucination Detector for Large Language Models

**Authors:** Zeyang Ding; Xinglin Hu; Jicong Fan

**ID:** 154259 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6wp9J9jVl>) | [PDF](<https://openreview.net/pdf?id=F6wp9J9jVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154259>)

Hallucinations remain a major barrier to the trustworthy deployment of large language models \(LLMs\)\. We study hallucination detection from the perspective of prompt\-conditioned response distributions\. For a fixed prompt, an LLM induces a distribution over possible responses; when the model is uncertain or hallucinates, this distribution often becomes more complex and less internally consistent\. However, this distribution is unknown, and its samples are variable\-length token sequences rather than fixed\-dimensional points, making direct complexity estimation difficult\. To address this challenge, we propose a training\-free detector based on sample\-to\-sample transform costs in representation space\. Specifically, we represent each sampled response as an empirical distribution over generated\-token hidden embeddings and compute pairwise Wasserstein distances between responses\. The resulting Wasserstein distance matrix characterizes the cost structure of transforming one sampled response into another\. From this matrix, we derive two complementary hallucination signals: \\textbf\{AvgWD\}, which measures the average transform cost, and \\textbf\{EigenWD\}, which captures the spectral complexity of the transform\-cost structure\. Importantly, we extend the proposed detector beyond white\-box access by using an accessible auxiliary model to construct representation\-space consistency signals for black\-box LLMs, substantially broadening the practical applicability of our method\. Experiments across five open\-source LLMs and four benchmarks show that AvgWD and EigenWD consistently achieve competitive or superior AUROC compared with strong training\-free uncertainty baselines\. These results suggest that distributional complexity in token\-level representation space provides an effective signal for hallucination detection\.

## Conformal Prediction for Time\-Dependent PDEs

**Authors:** Joshua Stiller; Annika Schneider; Eyke Hüllermeier

**ID:** 150920 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eOMQpbl25E>) | [PDF](<https://openreview.net/pdf?id=eOMQpbl25E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150920>)

Uncertainty quantification is crucial in scientific machine learning, where models inform safety\-critical tasks such as flood forecasting, financial risk management, and thermal control in machines\. Conformal prediction provides distribution\-free coverage guarantees, but in time\-dependent settings common to physics and engineering, these guarantees can break down, leading to systematic undercoverage\. We study this problem in the context of surrogate models for time\-dependent physical systems described by partial differential equations\. We prove that in a function space setting, distributions at arbitrarily close times can be mutually singular, making exact coverage guarantees impossible\. We further show that in discretized settings, the total variation distance between distributions often grows exponentially with the grid resolution mandating restrictions on the spatial discretization to ensure coverage\. Finally, for certain settings, we show how to use principled weighted conformal prediction to obtain finite\-sample coverage guarantees over growing time horizons\.

## Learning Global Temporal Dynamics in Sparse Networks via Cycle Counts

**Authors:** Xinyuan Fan; Dong Huang; Tianpai Luo; Pengkun Yang; Weichi Wu

**ID:** 149950 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lybAtXLgRc>) | [PDF](<https://openreview.net/pdf?id=lybAtXLgRc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149950>)

Statistical modeling and inference for temporal networks are increasingly important across modern applications, yet remain challenging in the sparse regime with evolving network sizes and temporal dependence\. We propose a tractable model that captures these key features in a unified framework\. Under this model, we establish geometric ergodicity and characterize the asymptotic behavior of cycle counts\. These counts provide informative low\-order summaries of temporal network dynamics\. Moreover, we develop method\-of\-moments estimators based on cycle counts\. We prove identifiability and uniqueness of the parameter estimates, and establish the strong consistency and asymptotic normality\. To support uncertainty quantification, we further propose a simulation\-based plug\-in estimator of the asymptotic variance\. Extensive simulations and a real data example demonstrate that our methods are accurate and effective for sparse, size\-varying temporal networks\.

## Making Open\-Source Text LLM Watermarks Durable Against Merging

**Authors:** Luisa Scharff; Thibaud Gloaguen; Robin Staab; Martin Vechev

**ID:** 155690 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3fkF2rVnDA>) | [PDF](<https://openreview.net/pdf?id=3fkF2rVnDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155690>)

Open\-source LLMs \(OSMs\) are reaching near state\-of\-the\-art performance, prompting prior works to trace the text they generate by embedding text watermarking algorithms directly into their weights\. Yet, OSMs are subject to post\-training modifications, which has been shown to remove the watermark\. Model merging in particular, a prominent method used for combining expert knowledge and preventing catastrophic forgetting, strongly removes such OSMs watermarks\.  A key question is how to enable OSM watermarks that survive subsequent merging\. In this work, we show for the first time how to design an OSM watermark that is durable against model merging\. We propose Merge\-Adversarial Training, an adversarial training algorithm to distill text watermarks into model weights while being robust to subsequent model merging\. Our approach consistently outperforms all baselines \(e\.g\. with SLERP up to \+51 percentage points \(pp\) TPR@1%FPR with \+25 pp on average\) while preserving downstream capabilities\. We also for the first time evaluate OSM watermarks against realistic merge scenarios, representing common use\-cases such as combining expert capabilities or preventing catastrophic forgetting, and with 3 prominent merging algorithms\. More broadly, our findings suggest that adversarial training is a reliable approach for increasing OSM watermark durability against post\-training modifications\.

## CausalConflictBench: Can Multimodal Models Follow Local Mechanisms That Conflict with Commonsense?

**Authors:** Bo Tian; Jianfeng Qu; Peng\-Fei Zhang; Siyu Li; Zhixu Li; Kaiye Yu

**ID:** 139553 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IzbN000ZNL>) | [PDF](<https://openreview.net/pdf?id=IzbN000ZNL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139553>)

Large multimodal models often benefit from commonsense priors, but these priors can mislead reasoning when a task specifies a local mechanism that conflicts with real\-world regularities\. Existing scientific VQA and visual reasoning benchmarks tend to align problem mechanisms with commonsense, so a correct answer may reflect either mechanism following or prior\-based answering\. We introduce Causal\-ConflictBench, a diagnostic benchmark that makes this ambiguity observable by constructing samples where the current cause\-to\-effect mechanism contradicts the default commonsense mechanism\. CausalConflictBench contains two modules: Textual Rule Override \(TRO\), which provides explicit commonsense\-conflicting textual rules in real science image questions, and Visual Counter\-Commonsense Induction \(VCI\), which requires models to induce a conflicting mechanism from a three\-frame visual sequence\. Beyond sample\-level accuracy, we report Group\-Strict Accuracy, factual\-prior fallback metrics, and output\-level process diagnostics\. Across 14 proprietary and open\-source multimodal models, we find that high sample\-level accuracy can mask unstable mechanism following; errors concentrate strongly on factual\-prior answers; and failure modes differ across rule\-delivery paths, with TRO revealing rule\-application failures and VCI revealing visual rule\-induction failures\. CausalConflictBench therefore provides a controlled diagnostic setting for uncovering commonsense fallback hidden beneath aggregate accuracy\.

## Unified Approach for Weakly Supervised Multicalibration

**Authors:** Futoshi Futami; Takashi Ishida

**ID:** 153710 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JLxOg88ATs>) | [PDF](<https://openreview.net/pdf?id=JLxOg88ATs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153710>)

Multicalibration requires predicted scores to agree with label probabilities across rich families of subgroups and score\-dependent tests, but existing methods require clean input\-\-label pairs for evaluation and post\-processing\. This assumption fails in weakly supervised learning \(WSL\) regimes\-\-\-including positive\-unlabeled, unlabeled\-unlabeled, and positive\-confidence learning\-\-\-where clean labels are costly or unavailable even though reliable uncertainty estimates may be crucial\. We address this gap by developing estimators of multicalibration error and post\-hoc correction methods for WSL settings in which clean input\-\-label pairs are unavailable\. We propose a unified framework for estimating and correcting multicalibration under weak supervision by combining contamination\-matrix risk rewrites with witness\-based calibration constraints, yielding corrected multicalibration moments with finite\-sample guarantees\. We further propose weak\-label multicalibration boost \(WLMC\), a generic post\-hoc recalibration algorithm under weak supervision\. Finally, we conduct experiments across multiple weak\-supervision settings to evaluate multicalibration behavior and deepen empirical understanding of uncertainty estimation under weak supervision\.

## Human\-AI Teaming Through the Lens of Calibration

**Authors:** Eric Nalisnick; Chi Zhang; Chengxin Qian; Yixin Wang

**ID:** 153703 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JOgSIyeb2b>) | [PDF](<https://openreview.net/pdf?id=JOgSIyeb2b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153703>)

We study models for human\-AI teaming through the lens of statistical calibration\.  We assume the team consists of an AI model and human\-\-\-both of which are calibrated with respect to some partitioning of the feature space\-\-\-and expose how the calibration assumptions propagate into the teaming framework\.  In particular, we consider frameworks that either \(i\) combine human and model predictions or \(ii\) delegate prediction responsibility to either a human or model\.  We show via theoretical and empirical results that existing methods for combination do not preserve the human's degree of calibration\.  Methods for delegation \(by the very act of delegation\) preserve calibration of the downstream predictors but can place high\-capacity demands on the meta\-classifier that determines which should predict\.  This latter result suggests human\-AI complementarity and correct delegation place opposite demands on the delegation model\.

## From Tokens to Tactics: Adversarial Text Optimization in an Axis\-Aligned Rhetorical Strategy Space for Harmful Content Detection

**Authors:** Jinjie Wang; Shu Jiang; Hai Zhao

**ID:** 151647 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3vLxvQl1v>) | [PDF](<https://openreview.net/pdf?id=Z3vLxvQl1v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151647>)

Harmful\-content detectors are increasingly deployed in safety\-critical settings, but they remain vulnerable to subtle rhetorical reframings that preserve the underlying claim while altering its presentation\. Existing adversarial robustness methods are typically token\-level or prompt\-driven, hindering mechanism\-level attribution and targeted repair\. We propose Adaptive Rhetorical Adversarial Optimization \(ARAO\), which operationalizes rhetorical theory as an axis\-aligned strategy space with directional and interpretable controls for adversarial rewriting\. A planner\-rewriter pipeline converts strategy vectors into non\-contradictory rewrites, enabling mechanism\-level failure attribution and axis\-targeted repair\. Experiments on misinformation and extremist\-rhetoric benchmarks show that ARAO improves robustness by 2\.35 ROC\-AUC points on average over the strongest baselines on attacked sets, while achieving the best performance on original content\.

## History\-Aware Conformal Prediction Sets for Censored Time\-to\-Event Outcomes

**Authors:** Yuyao Wang; Alexander W Levis; Shu Yang; Larry Han

**ID:** 153050 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPFzq5afFw>) | [PDF](<https://openreview.net/pdf?id=OPFzq5afFw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153050>)

Existing conformal prediction methods for time\-to\-event outcomes leverage only baseline covariates, producing prediction intervals that are insufficiently informative to facilitate decision making\. We propose History\-Aware Prediction Sets \(HAPS\), a conformal framework that constructs prediction sets for individual event times using covariate histories observed up to a decision time, targeting coverage among individuals who have survived to this time\. HAPS handles right censoring adjusted for time\-varying confounders via inverse probability of censoring weighting\. When the censoring weights are consistently estimated, it achieves PAAC \(probably asymptotically approximately correct\) coverage among survivors\. We further propose two doubly robust extensions of HAPS to weaken reliance on consistent estimation of the censoring distribution\. In simulations, HAPS and its extensions reduce median prediction interval length by up to 75\\% relative to baseline comparators while maintaining close to nominal coverage\. On two public benchmark data sets, HAPS reduces the median interval length by up to 60\\% for predictions at year 5, compared to the baseline comparators\.

## Hybrid Neural World Models for Physical Dynamics

**Authors:** Pranav Lakshmanan; Paras Chopra

**ID:** 148875 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uWsmvC2jq5>) | [PDF](<https://openreview.net/pdf?id=uWsmvC2jq5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148875>)

Neural surrogates promise large speedups over classical solvers for physical dynamics but fail silently at sharp dynamical events such as shocks, fronts, and contact\. We present hybrid   neural world models for physical dynamics: a recipe for training and deploying multi\-horizon surrogates in physical state space, where a single network with continuous horizon   conditioning is trained with direct supervision against textbook reference solvers to predict any future state at horizon $T$ in one forward pass\. Although no part of the training data,   loss function, or architecture supervises discontinuity location, the trained surrogate encodes it implicitly, recoverable from its forward passes alone as a per\-trajectory error map that   concentrates on shocks, fronts, and contacts, and stays small elsewhere\. The map is competitive with or better than standard label\-free baselines including deep ensembles, learned error   heads, gradient\-magnitude indicators, and locally\-adaptive conformal prediction, while using only a single trained network and requiring no calibration set or governing\-equation knowledge\.   The recipe supports two operating points\. Mode 1 runs the surrogate alone for maximum throughput, with same\-hardware CPU speedups of $26\\times$ to $72\\times$ against textbook solvers on the    PDE environments\. Mode 2 uses the error map to gate a reference\-solver fallback, deferring uncertain trajectories and roughly halving the surrogate's residual error at the default   operating point\. The recipe applies without modification across reaction\-diffusion, compressible Euler, and rigid\-body collision dynamics\.

## MemContract: Contract\-Sensitive Evaluation for Mutable Agent Memory

**Authors:** Rui Li; Shuang Cao

**ID:** 154728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BT1m6pIA81>) | [PDF](<https://openreview.net/pdf?id=BT1m6pIA81>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154728>)

Many agent\-memory evaluations collapse state revision, deprecation, erasure, and provenance into retrieve\-heavy scores\. We introduce MemContract, a diagnostic benchmark of 1 , 080 multi\-session tasks over store, retrieve, revise, deprecate, erase, and prove\-origin, with formal pre/post\-conditions, mandatory distractor sessions plus alias rotation on every family, blinded/stale/delayed controls, a fixed 25\-probe residue audit, and benchmark\-validity checks via a 180\-task human contract\-fit audit and a 120\-task human\-assisted upper bound\. Under matched prompts, compute, storage, and latency budgets on GPT\-4o across seven architectures, Graph Memory reaches 67\.6% macro average \(95% paired\-bootstrap CI \[65\.8, 69\.4\]\) versus 62\.4% for the strongest hybrid baseline and 40\.6% for RAG, with most separation concentrated in revise, deprecate, erase, and prove\-origin while store/retrieve remain comparatively compressed\. Claude 3\.5 Sonnet and Gemini 1\.5 Pro 002 preserve the same top\-three ordering on a matched 360\-task rerun, while the manual audit finds 96\.7% agreement that the harness label matches the intended contract and the human\-assisted upper bound reaches 93\.8% macro, placing the best\-system score in a solvable regime rather than a floor of label noise\. Reviewer\-critical calibration checks tell a narrower but durable story: removing prove\-origin leaves the Graph \- Hybrid gap unchanged at 5\.2 pp, best\-effort prompt/schema tuning narrows it to 2\.6 pp, and fully external LongMemEval wu2024longmemeval and LoCoMo maharana2024locomo narrow it to 1\.8 and 2\.8 pp while preserving the top\-three ordering Graph &gt; Hybrid &gt; Editable KV\. The stable claim is therefore not universal backend superiority: contract\-sensitive evaluation reveals separation that broader or retrieval\-heavier workloads attenuate but do not erase\. The 25\-probe audit bounds catchable residue leakage at 3\.9% for Graph Memory and 27\.4% for RAG, but does not certify deletion\.

## Untrusted Content Masking for Web Agents with Security Guarantees

**Authors:** Kristina Nikolić; Egor Zverev; Javier Rando; Matthew Jagielski; Edoardo Debenedetti; Florian Tramer

**ID:** 150501 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hckd9UoUPT>) | [PDF](<https://openreview.net/pdf?id=hckd9UoUPT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150501>)

Defenses that provide security guarantees against prompt injection attacks require strict isolation between an agent's task planning and data processing capabilities\. This prevents third\-party content from overwriting trusted instructions\. In text\-based environments such as tool\-use APIs, agents can plan from interface definitions without ever processing untrusted data\. Web agents, however, face a fundamental challenge: they must observe the rendered page to perceive their environment, but that page already contains untrusted third\-party content\. In this paper, we present Untrusted Content Masking, a simple, effective approach that enables web agents to observe their environment and plan without directly processing untrusted content\. We leverage a key structural insight: a webpage's Document Object Model \(DOM\) structure alone suffices to identify untrusted regions\. Our framework exploits this by redacting such regions before they reach the agent, and restricting interaction to a sandboxed interface with strict privilege separation\.

## CodeMimicry: Exploiting Safety Generalization Lag in Large Language Models via Structured Code Completion

**Authors:** Liang Zhen; Wentao Chen; Hai Huang

**ID:** 148231 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zQ1LdvPXe9>) | [PDF](<https://openreview.net/pdf?id=zQ1LdvPXe9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148231>)

Large language models have achieved remarkable capabilities across diverse domains, yet their safety alignment remains vulnerable to jailbreak attacks\. In this work, we identify a previously underexplored failure mode—safety generalization lag—where alignment trained predominantly on natural language fails to transfer to the code domain\. We show that this lag induces a code\-completion blind spot, allowing malicious intent embedded within syntactically valid code to evade safety mechanisms\. To exploit this vulnerability, we propose CodeMimicry, a fully automated black\-box jailbreak framework that generates structured, object\-oriented code prompts to induce harmful outputs via code completion\. Experiments on 8 state\-of\-the\-art commercial LLMs demonstrate that CodeMimicry achieves a 96\.25\\% attack success rate with 1\.51 queries on average, significantly outperforming both template\-based and optimization\-based baselines\. Beyond empirical performance, we provide a mechanistic analysis of code\-based jailbreaks through latent space representations, including projection onto refusal\-related directions and activation steering\. This analysis offers an explanation of how CodeMimicry bypasses safety mechanisms in code\-related domains\. Our findings reveal a weakness in current safety alignment and highlight the need for robust alignments in structured domains such as code\.

## Backdoor Attacks Rerouted: BatchNorm as a Sink for Adversarial Signals

**Authors:** Md Abdul Kadir; Tuan Tran Anh; Daniel Sonntag

**ID:** 155957 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1YqAFIeJti>) | [PDF](<https://openreview.net/pdf?id=1YqAFIeJti>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155957>)

Deep neural networks \(DNNs\), particularly CNN\-based classification systems, are widely deployed due to their strong performance\. However, they remain vulnerable to backdoor attacks, where imperceptible triggers can induce targeted misclassification while preserving high accuracy on clean inputs\. These triggers may also distort model explanations\. Such vulnerabilities raise serious concerns for both currently deployed and real\-world applications, highlighting the need for deeper understanding and training\-free defense mechanisms\. In this study, we extensively investigate the attacking mechanisms in models with Batch Normalization \(BN\)\. We provide the first comprehensive theoretical analysis of the relationship between backdoor attacks and BN, showing that trigger\-related information is strongly encoded in BN layers even under full model fine\-tuning\. We further prove that BN’s affine parameters and running statistics jointly influence both predictions and explanations, offering a unified explanation of backdoor behavior\. Building on this insight, we introduce a simple training\-free defense that re\-estimates batch feature statistics and recomputes normalization at inference time, mitigating backdoor effects while preserving clean performance\. Extensive experiments on 8 black\-box and 3 explanation\-aware attacks, compared against 9 defenses, demonstrate that our method reduces attack success rates from 100\\% to 1\\%, improves true\-class recovery by 89\\% \(\+23\\% over prior work\), and boosts explanation fidelity by up to 91\\%, all without retraining or degrading accuracy\. Code will be provided upon acceptance\.

## Agreement without Coverage: Conditional Agreement is Non\-Identifying in Variable\-Support Structured Extraction

**Authors:** Yanru Zhou; Dandan Song

**ID:** 152893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcPlRvDFiC>) | [PDF](<https://openreview.net/pdf?id=PcPlRvDFiC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152893>)

Conditional agreement is non\-identifying under endogenous support selection: in variable\-support structured prediction, a predictor can score higher on conditional agreement while scoring lower on recall, predicted cardinality, and support coverage\. This matters because agreement\-style proxies are widely used as reliability evidence in counterfactual consistency, schema\-constrained extraction, self\-consistency, and verifier\-style filtering\. We formalize this risk for thresholded set\-valued prediction with predictor\-dependent evaluability events, and prove a strict witness theorem: a support\-shrinking predictor can achieve larger conditional agreement than a coverage\-preserving predictor while strictly worsening all support\-aware quantities; an indifference\-fiber corollary shows that even equal conditional agreement need not identify these quantities\. We then use Re\-DocRED as a controlled high\-risk stress test, not as the full scope of the claim\. Moving from No\\\_CF to Uniform\-0\.5 raises $J\_\{\\mathrm\{cond\}\}$ from $0\.692$ to $0\.877$, while Silence increases by $68\\%$, predicted cardinality drops by $20\\%$, and recall drops by $16$ points\. Threshold replay, matched\-cardinality controls, gold\-positive margin audits, and support\-state decomposition show that the gain is realized through support shrinkage rather than benign threshold choice\. Boundary tasks delimit scope, and a small LLM probe is used only as reference\-tier motivation\. The practical recommendation is a diagnostic witness set rather than an aggregate score: report conditional agreement together with support\-aware quantities\.

## Kernel Token Contradiction: a Fast and Principled Approach for LLM Claim Uncertainty Quantification

**Authors:** Jérémie Dentan; Alexi Canesse; Mahammed El Sharkawy; Sonia Vanier

**ID:** 152240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UXmZnhvdFA>) | [PDF](<https://openreview.net/pdf?id=UXmZnhvdFA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152240>)

Claim\-level Uncertainty Quantification \(UQ\) aims to mitigate the lack of reliability of Large Language Models \(LLMs\) by evaluating the factuality of each claim in their outputs\. We introduce Kernel Token Contradiction \(KTC\), a lightweight approach to compute claim\-level UQ under realistic white\-box conditions\. KTC represents the candidate tokens involved in LLM generation as a positive semi\-definite kernel that integrates both the LLM’s conditional distribution and a token contradiction score\. We then use the Von Neumann entropy to quantify the uncertainty of this kernel\. To estimate token contradiction, we develop a new approach based on frequency statistics from the Wikipedia corpus\. Although CPU\-only, our approach achieves over an 8\.2× speedup compared to state\-of\-the\-art GPU\-accelerated methods based on cross\-encoders, and over a 65× speedup compared to CPU\-only methods with comparable performance\. Our evaluation spans two benchmarks across four European languages and 16 different models\. KTC not only matches the average performance of existing methods but also outperforms them in high\-precision regimes\. This combination of computational efficiency and accuracy makes real\-time monitoring of LLM outputs practical in production\.

## MemPoison: Uncovering Persistent Memory Threats and Structural Blind Spots in LLM Agents

**Authors:** Jifeng Gao; Kang Xia; Yi Zhang; Xiaobin Hong; Mingkai Lin; Xingshen Wei; Wenzhong Li; Sanglu Lu

**ID:** 139557 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgiZ5D2F8T>) | [PDF](<https://openreview.net/pdf?id=IgiZ5D2F8T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139557>)

Persistent external memory enhances agent continuity but introduces persistent security vulnerabilities: adversarial content can be injected via standard interaction channels, retained across turns, and later distort downstream behavior\. To address this challenge, we propose \*\*MemPoison\*\*, a comprehensive benchmark and analysis framework featuring 1227 hand\-validated cases across four attack types, three injection channels, and three representative memory substrates, evaluated on seven open\-weight and three closed\-weight model families\. We introduce a three\-tier taxonomy: \(\*\*L1\*\*\) direct single\-record corruption, \(\*\*L2\*\*\) compositional multi\-record corruption and \(\*\*L3\*\*\) context\-triggered dormant corruption\. Our evaluations reveal a distinct defense frontier: while baseline write\-time defenses, such as consistency checks, substantially suppress direct L1 attacks, they fail to reliably suppress L2 and L3 attacks\.  Through \*\*mechanistic influence decomposition \(MID\)\*\*, we demonstrate structural blind spots in write\-time defenses, which admit seemingly benign records that later become harmful through joint retrieval composition or trigger\-conditioned activation\. Our findings advocate for shifting from static filtering to adaptive, context\-sensitive memory defense strategies\. Code, benchmark artifacts, and evaluation scripts are publicly released

## FutureSim: Replaying World Events to Evaluate Adaptive Agents

**Authors:** Shashwat Goel; Nikhil Chandak; Arvindh Arun; Ameya Prabhu; Steffen Staab; Moritz Hardt; Maksym Andriushchenko; Jonas Geiping

**ID:** 139347 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VBt2tCcXYT>) | [PDF](<https://openreview.net/pdf?id=VBt2tCcXYT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139347>)

AI agents are being increasingly deployed in dynamic, open\-ended environments that require adapting to new information as it arrives\. To efficiently measure this capability for realistic use\-cases, we propose building grounded simulations that replay real\-world events in the order they occurred\. We build FutureSim, where agents forecast world events beyond their knowledge cutoff while interacting with a chronological replay of the world: real news articles arriving and questions resolving over the simulated period\. We evaluate frontier agents in their native harness, testing their ability to predict world events over a three\-month period from January to March 2026\. FutureSim reveals a clear separation in their capabilities, with the best agent's accuracy being 25%, and many having worse calibration than a constant predictor\. Through careful ablations, we show how FutureSim offers a realistic setting to study emerging research directions like long\-horizon test\-time adaptation, search, memory and reasoning about uncertainty\. Overall, we hope our benchmark design paves the way to measure AI progress on long\-horizon open\-ended adaptation spanning multiple months in the real world\.

## Matched\-Control Tests of Partition\-Source Claims in One Routed Distillation Family

**Authors:** Rui Li; Shuang Cao; Constance Liu

**ID:** 152841 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PykGJWR2N4>) | [PDF](<https://openreview.net/pdf?id=PykGJWR2N4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152841>)

Partitioned routed distillation is hard to interpret when route count, supervision grouping, and search or filtering budget change together\. We study that attribution problem inside one fixed routed family using two matched nulls: a routing\-only control \(Latent\-Routing MoA\) and a structure\-matched shuffled\-partition control \(Matched\-Partition\-Shuffle\), with teacher tokens, trainable parameters, and router depth matched exactly\. The decisive result is Table tab:main: the zero\-manual deployable row ModeDistill\-Auto\-v4\-Open, whose partition source is induced by GPT\-OSS\-120B\-Instruct pairwise same\-strategy judgments \(Apache\- 2\.0 , distinct from the trace\-generating teacher\), beats MoA by \+2\.46 pp and Matched\-Partition\-Shuffle by \+2\.04 pp on the five\-domain primary\-shift average \(A1\), with positive OOD gaps on all five primary domains\. Table tab:external\_breadth\_transfer is intentionally weaker evidence: for that exact same headline row it reports only four external benchmark aggregate means, where Auto\-v4\-Open beats MoA by \+4\.91 / \+3\.99 / \+3\.70 / \+2\.87 pp, and it does not support slice\-wise breadth or cross\-family generality\. The open pipeline remains within 0\.05 pp of the manual upper\-bound reference on A1 and within the pre\-specified 0\.50 pp tie band on every external mean, so we keep it as the deployable row and retain the manual row only as calibration\. The claim is therefore narrow: within this routed family, once routed budget is matched, the residual OOD gain is attributable to the externally induced partition source rather than to routing alone or to structure\-matched shuffled partitions\. Figure fig:identification and the appendix are corroborative only\. The weakest primary shift remains ALFWorld tool reconfiguration \( \+1\.15 pp vs\.\\ MoA, paired CI \[\-0\.12,\+2\.41\] \), and discovery\-time verifier calls and teacher generation are disclosed separately from the matched comparison\.

## Understanding and Mitigating Under\-Confidence in GNNs from the Final Layer

**Authors:** Jincheng Huang; Jie Xu; Ping Hu; Xiaoshuang Shi; Lei Feng; Xiaofeng Zhu

**ID:** 148756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vGT1YmVaWI>) | [PDF](<https://openreview.net/pdf?id=vGT1YmVaWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148756>)

Graph Neural Networks \(GNNs\) have demonstrated remarkable effectiveness on graph\-based tasks\. However, their predictive confidence is often miscalibrated, typically exhibiting under\-confidence, which harms the reliability of their decisions\. Existing calibration methods for GNNs normally introduce additional calibration components, which fail to capture the intrinsic relationship between the model and the prediction confidence, resulting in limited theoretical guarantees and increased computational overhead\. To address this issue, we propose a simple yet efficient graph calibration method\. We establish a unified theoretical framework revealing that model confidence is jointly governed by class\-centroid\-level and node\-level calibration at the final layer\. Based on this insight, we theoretically show that reducing the weight decay of the final\-layer parameters alleviates GNN under\-confidence by acting on the class\-centroid level, while node\-level calibration acts as a finer\-grained complement to class\-centroid level calibration, which encourages each test node to be closer to its predicted class centroid at the final\-layer representations\. Extensive experiments validate the superiority of our method\.

## FeatCal: Feature Calibration for Post\-Merging Models

**Authors:** Yanggan Gu; Shuo CAI; Zihao Wang; Wenjun Wang; Yuanyi Wang; Pengkai Wang; Sirui Huang; Su Lu; Jianmin Wu; Hongxia Yang

**ID:** 152364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TbWDPX0nam>) | [PDF](<https://openreview.net/pdf?id=TbWDPX0nam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152364>)

Model merging combines task experts into one model and avoids joint training, retraining, or deploying many expert models, but the merged model often still underperforms task experts\. We study this performance gap through feature drift, the difference between features produced by the merged model and by the expert on the same input\. Our theory decomposes this drift into upstream propagation and local mismatch, tracks how it propagates and combines through later layers in forward order, and links final feature drift to output drift\. This view motivates FeatCal, which uses a small calibration set to calibrate the merged model weights layer by layer in forward order, reducing feature drift while staying close to merged weights and preserving the benefits of model merging\. FeatCal uses an efficient closed\-form solution to update model weights, with no gradient descent, iterative optimization, or extra modules\. On the main CLIP and GLUE benchmarks, FeatCal beats Surgery and ProbSurgery, the closest post\-merging calibration baselines: 85\.5% vs\. 77\.0%/78\.8% on CLIP\-ViT\-B/32 Task Arithmetic \(TA\) and 85\.2% vs\. 83\.7%/82\.2% on FLAN\-T5\-base GLUE\. On CLIP\-ViT\-B/32, 8 examples per task reach 82\.9%, and 256 examples per task take 53 seconds, about 4x faster than both baselines, showing better sample efficiency and lower calibration cost\.

## Memory Inception: Latent\-Space KV Cache Manipulation for Steering LLMs

**Authors:** Zeyi \(Andy\) Liu; Michael Zhang; Ilana Greenberg; Adam Alnasser; Lucas Baker; John Sous

**ID:** 151646 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z45sLXr4O9>) | [PDF](<https://openreview.net/pdf?id=Z45sLXr4O9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151646>)

Steering large language models \(LLMs\) is usually performed through either instruction prompting or activation steering\. Prompting offers strong control, but repeatedly caches guidance tokens and can clutter long interactions\. In contrast, activation steering ,while compact, typically offers weaker control and less fine\-grained steering because it does not support large structured reminders\. We introduce memory inception \(MI\), a training\-free method that steers in latent attention space by inserting text\-derived key\-value \(KV\) banks only at selected layers\. MI treats steering as selective KV allocation, where reminder content need not occupy the full\-layer prompt cache in order to induce implicit behavioral guidance\. We formulate MI as attention over prompt, target, reference, and auxiliary banks, with canonical pre\-RoPE  key storage for reuse across positions and architectures\. On matched personality\-steering tasks, MI offers a balance between prompting and contrastive activation addition \(CAA\), approaching or exceeding prompting in raw control strength and CAA in drift mitigation\. MI also transfers to structured heuristic guidance on physical reasoning domains, such as the PHYSICS benchmark, where it outperforms visible prompting on average, wins 10/12 subject times mode cells, and cuts content\-matched KV storage by up to 118 times\. These results position MI as a powerful steering method when guidance is persistent, structured, or expensive to keep in the visible transcript\.

## A Kernel Nonconformity Score for Multivariate Conformal Prediction

**Authors:** Louis Meyer; Wenkai Xu

**ID:** 151235 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=btzP5Ir75f>) | [PDF](<https://openreview.net/pdf?id=btzP5Ir75f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151235>)

Multivariate conformal prediction requires nonconformity scores that compress residual vectors into scalars while preserving certain implicit geometric structure of the residual distribution\. We introduce a Multivariate Kernel Score \(MKS\) that produces prediction regions that explicitly adapt to this geometry\. We show that the proposed score resembles the Gaussian process posterior variance, unifying Bayesian uncertainty quantification with the coverage guarantees of frequentist\-type\. Moreover, the MKS can be decomposed into an anisotropic Maximum Mean Discrepancy \(MMD\) that interpolates between kernel density estimation and covariance\-weighted distance\. We prove finite\-sample coverage guarantees and establish convergence rates that depend on the effective rank of the kernel\-based covariance operator rather than the ambient dimension, enabling dimension\-free adaptation\. On regression tasks, the MKS reduces the volume of prediction regions significantly, compared to ellipsoidal baselines while maintaining nominal coverage, with larger gains at higher dimensions and tighter coverage levels\.

## Proper Scoring Rules for Agentic Uncertainty Quantification

**Authors:** Suresh Raghu; Satwik Pandey; Shashwat Pandey

**ID:** 155086 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8XnA3xBaF5>) | [PDF](<https://openreview.net/pdf?id=8XnA3xBaF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155086>)

Language\-model agents increasingly emit uncertainty signals throughout a trajectory, but existing agentic UQ evaluations often conflate ranking usefulness with probabilistic truthfulness\. AUROC, AUPRC, risk\-coverage, Trajectory ECE, and scalarized trajectory scores evaluate discrimination, binwise calibration, or collapsed summaries, but do not strictly elicit the full prefix\-conditioned success\-probability trace $q\_t=\\mathbb\{P\}^\{\\pi\}\(Y\{=\}1\\mid\\mathcal\{H\}\_t\)$\. Building on prequential proper scoring, we introduce the Trajectory Proper Score \(TPS\), a predictor\-agnostic family of strictly proper trajectory\-level scoring rules for any per\-step uncertainty signal calibrated into a probability of eventual success\. We prove that TPS strictly elicits the success\-probability process under complete observation, within the chosen score family and weight schedule\. We extend the construction to administratively censored trajectories by projecting the complete\-data score onto the observable stopped prefix, yielding an exact $q\_Z$\-weighted reduced score and a tractable approximation when $q\_Z$ is unestimated\. We further show that common trajectory evaluators target weaker objects than the full prefix\-conditioned probability process: Trajectory ECE is resolution\-blind, while scalarized Trajectory Brier elicits only the collapsed scalar, not the full trace\. Experiments on StrategyQA, Tau2\-Bench, HotpotQA, and WebShop show that these theoretical distinctions are operationally visible: probability recalibration can substantially change TPS while leaving rank metrics nearly unchanged, and the tractable censored approximation can change the verdict relative to complete\-only evaluation\.

## MIRA: Mutual Information guided calibration for Reliable Test\-Time Adaptation

**Authors:** Hyeongyu Kim; Mingyeong Jang; Youngjun Song; GeonHui Han; Dosik Hwang

**ID:** 148843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ujUYtJK5LG>) | [PDF](<https://openreview.net/pdf?id=ujUYtJK5LG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148843>)

Test\-time adaptation updates a deployed model using only unlabeled target data, but standard entropy\-based methods often rely on deterministic confidence and can reinforce overconfident errors under distribution shift\. We propose MIRA, Mutual Information guided calibration for Reliable Test\-Time Adaptation, a source\-free online adaptation method that uses lightweight last\-layer Gaussian perturbations to probe prediction reliability\. For each target batch, MIRA reuses a single feature extraction pass and samples perturbed classifiers around the source classifier, forming an efficient local stochastic ensemble\. Rather than fitting a Bayesian posterior, MIRA treats the perturbation scale as a local probing radius and selects a batch\-specific scale using mutual information and prediction agreement\. The resulting perturbation\-sensitivity signal identifies predictions that are confident and locally stable under classifier perturbations, while suppressing brittle predictions with high stochastic disagreement\. MIRA then performs adaptation with an MI\-confidence weighted entropy loss, which down\-weights perturbation\-sensitive or low\-confidence samples before they drive entropy minimization\. This weighted loss reduces the influence of brittle predictions that can otherwise cause harmful adaptation under distribution shift\. The method requires no source data, retraining, model ensembles, or offline posterior fitting, and can be applied as a plug\-and\-play modification to entropy\-minimization TTA\. Experiments on distribution\-shift benchmarks show improvements in accuracy, calibration, and negative log\-likelihood, suggesting that mutual\-information\-guided perturbation probing and weighted adaptation yield more robust online TTA than deterministic confidence\.

## Anytime\-Valid Conformal Risk Control

**Authors:** Bror Hultberg; Dave Zachariah; Antonio Ribeiro

**ID:** 154243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCHpcvgVme>) | [PDF](<https://openreview.net/pdf?id=FCHpcvgVme>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154243>)

Prediction sets provide a means of quantifying the uncertainty in predictive tasks\. Using held out calibration data, conformal prediction and risk control can produce prediction sets that exhibit statistically valid error control in a computationally efficient manner\. However, in the standard formulations, the error is only controlled on average over many possible calibration datasets of fixed size\. In this paper, we extend the control to remain valid with high probability over a cumulatively growing calibration dataset at any time point\. We derive such guarantees using quantile\-based arguments and illustrate the applicability of the proposed framework to settings involving distribution shift\. We further establish a matching lower bound and show that our guarantees are asymptotically tight\. Finally, we demonstrate the practical performance of our methods through both simulations and real\-world numerical examples\.

## Agent Security is a Systems Problem

**Authors:** Mihai Christodorescu; Earlence Fernandes; Ashish Hooda; Somesh Jha; Johann Rehberger; Kamalika Chaudhuri; Xiaohan Fu; Khawaja Shams; Guy Amir; Jihye Choi; Sarthak Choudhary; Nils Palumbo; Andrey Labunets; Nishit V Pandya

**ID:** 140106 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8gDb2bnWWf>) | [PDF](<https://openreview.net/pdf?id=8gDb2bnWWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140106>)

We take the position that agent security must be approached as a systems problem: the AI model powering the agent must be treated as an untrusted component, and security invariants must be enforced at the system level\. Through this lens, efforts to increase model robustness \(the dominant viewpoint in the community\)  are insufficient on their own\. Instead, we must complement existing efforts with techniques from the systems security domain\.  Based on our experience as cybersecurity researchers in operating systems, networks, formal methods, and adversarial machine learning,  we articulate a set of core principles, grounded in decades of systems security research, that provide a foundation for designing agentic systems with predictable guarantees\. As evidence, we analyze eleven representative real\-world attacks on agents and discuss how systems principles, if realized, could have prevented these attacks\. We also identify the research challenges that stand in the way of implementing these principles in agents\.

## Calibration without Ground Truth

**Authors:** Yuqing Kong; Mingyu Song; Yizhou Wang; Yifan Wu

**ID:** 152525 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=STxXui2w7z>) | [PDF](<https://openreview.net/pdf?id=STxXui2w7z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152525>)

We propose a label\-free post\-processing framework that improves a strong but miscalibrated primary model using a weaker yet better\-calibrated reference\. Our key insight is that strict improvement is possible if and only if the two models are not \*mutually calibrated\*, meaning there does not exist joint distribution over their predictions and outcomes such that both predictions are simultaneously calibrated\. We formalize this condition and connect it to no\-arbitrage results from economics\. Under such condition, we develop an efficient post\-processing algorithm of the strong model's outputs based on Bregman projection, with a strict worst\-case performance improvement guarantee\. Experiments on representative LLMs across varying scales demonstrate the effectiveness of our method, reducing the ECE of the primary model by over $40$\\% on common benchmarks\.

## Detecting Hidden ML Training With Zero\-Overhead Telemetry

**Authors:** Robi Rahman; Sabiha Tajdari

**ID:** 155937 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1fv2pVeapQ>) | [PDF](<https://openreview.net/pdf?id=1fv2pVeapQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155937>)

Hardware\-enabled monitoring of GPU workloads underpins many proposals for AI compute governance, but if developers can defeat monitoring mechanisms, such schemes are unworkable\. We evaluate the adversarial robustness of GPU workload classification using only zero\-overhead, privacy\-preserving NVML telemetry: content\-agnostic signals that observe physical effects of computation without accessing model weights, training data, or hyperparameters\. Across 5 rounds of monitor\-evader iteration, we evaluate 20 evasion strategy families on 9 GPU models spanning 4 architecture generations\. We develop a classifier that achieves 98\.6% binary accuracy at identifying training workloads across the whole corpus, and 43\-87% accuracy against the most challenging unexpected workloads even when they are adversarially disguised\.

## Conformal Prediction for Distribution\-to\-Distribution Regression

**Authors:** Trung\-Khang Tran; Tuan Hoang; Viet\-Hoang Tran; Tan Nguyen

**ID:** 155524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4xA4yCPjL5>) | [PDF](<https://openreview.net/pdf?id=4xA4yCPjL5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155524>)

Conformal Prediction \(CP\) provides a model\-agnostic framework for constructing finite\-sample prediction sets with coverage guarantees and has become a tool for reliable decision\-making in high\-risk settings\. Recent advances have extended Split Conformal Prediction to increasingly complex learning problems, including multilabel, high\-dimensional, and functional outputs\. In this work, we study CP for Distribution\-to\-Distribution Regression, a setting of growing interest across many application domains\. We show that a naive application of Split CP yields prediction sets that, while marginally valid, are non\-interpretable, e\.g\., lacking a well\-defined volume or a tractable sampling procedure, and of limited practical value\. To overcome this, we propose a new conformal framework that operates in an orthogonal basis space, producing interpretable prediction sets while preserving coverage guarantees\. We further develop an adaptive variant with asymptotic conditional coverage under mild assumptions\. Empirical results on synthetic and real\-world datasets validate the effectiveness of the proposed approach\.

## The Adversarial Gait: Detecting Visual Adversarial Attacks against Vision\-Language Models via Self\-Targeted Gradient Characterization

**Authors:** Mauricio Byrd Victorica; Ezzeldin Shereen; György Dán

**ID:** 149384 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qRPR0xpiu8>) | [PDF](<https://openreview.net/pdf?id=qRPR0xpiu8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149384>)

Visual adversarial examples are a well\-known vulnerability of deep learning \(DL\) systems\. The emergence of vision\-language models \(VLMs\) further expands the attack surface through multimodal interactions\. Despite extensive research on adversarial defenses over the past decade, existing works on VLM robustness often overlook adaptive white\-box attacks, where the adversary has full access to both the model and the defense mechanism\.   We show that recent defenses can be effectively bypassed under such adaptive settings and propose \\method, an adaptive test\-time detection method that leverages gradient information induced by a self\-targeted attack maximizing the likelihood of the VLM’s generated output\. Our approach consistently outperforms existing defenses across multiple victim VLMs, attack formulations, and benchmark datasets\. Our code is open\-source and available online\.

## Multi\-bit LLM Watermarking with Certified Semantic Distortion

**Authors:** Chenxi Gu; Si Chen; John Grundy; Xiaoning Du

**ID:** 148648 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wB0DVBkk59>) | [PDF](<https://openreview.net/pdf?id=wB0DVBkk59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148648>)

Watermarking has emerged as a fundamental mechanism for tracing the provenance of Large Language Model \(LLM\) outputs\. While multi\-bit watermarks are highly desirable for embedding rich metadata, they suffer from an inherent trade\-off between statistical detectability and text quality degradation\. Crucially, existing multi\-bit schemes lack theoretical quality guarantees, leaving them susceptible to unbounded semantic distortion\. To address this, we introduce CSD, the first multi\-bit watermarking framework with certified semantic distortion bounds\. In CSD, we derive a closed\-form upper bound on the Kullback\-Leibler \(KL\) divergence, mathematically guaranteeing strict limits on semantic distortion at every generation step\. Furthermore, rather than relying on static payloads, CSD employs a dynamic payload to maximize statistical detectability\. Extensive empirical evaluations across multiple datasets demonstrate that CSD achieves robust detectability while maintaining provably safe text generation\.

## Hallucination as Commitment Failure: Larger LLMs Misfire Despite Knowing the Answer

**Authors:** Jewon Yeom; Jaewon Sok; Heejun Kim; Seonghyeon Park; Jeongjae Park; Taesup Kim

**ID:** 154310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EcJCjzBU18>) | [PDF](<https://openreview.net/pdf?id=EcJCjzBU18>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154310>)

Hallucination is often viewed as a direct consequence of missing knowledge: a model answers incorrectly when the correct answer is absent from its generation\-time distribution, and correctly when it is present\. We test this assumption by introducing a semantic notion of answer availability that aggregates token\-level variants expressing the same answer concept, and asks whether the correct concept is already available at the moment the model commits to an answer\. Across Qwen and Llama models from 0\.8B to 72B in both Instruct and Base variants, 16\-47\\% of Instruct hallucinations occur with substantial probability mass already on the correct concept, and the rate rises monotonically with scale\. Comparing such failures against correct generations with matched semantic support, the distinguishing factor is not whether the correct concept is represented, but how its probability is distributed: correct generations concentrate mass on a single surface form, hallucinations disperse it across alternatives\. The same sharpening asymmetry extends across multi\-token generation and is detectable in pre\-generation hidden states\. Together, these results identify a single mechanism: instruction tuning sharpens answer commitment with scale, making helpfulness and confident hallucination two consequences of the same underlying disposition\.

## Beyond the Prompt: Leveraging Pre\-Decoding States for Jailbreak Detection in dLLMs

**Authors:** Adam Hazimeh; Amel Abdelraheem; Ke Wang; Mariam Salman; Ljiljana Dolamic; Gérôme Bovet; Pascal Frossard

**ID:** 151177 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cQKisMHGgm>) | [PDF](<https://openreview.net/pdf?id=cQKisMHGgm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151177>)

Diffusion language models \(dLLMs\) generate text by iteratively denoising masked response positions, exposing hidden states over future response slots before any token is finalized\. This creates a detection surface that is absent from standard autoregressive decoding: even when a jailbreak is difficult to identify from the prompt alone, the initial masked response states may already reflect the model's emerging completion\. We test this hypothesis on LLaDA\-8B\-Instruct by training lightweight linear classifiers on two frozen representations: prompt hidden states and pre\-decoding masked\-response hidden states\. Empirically, the two views are complementary: neither classifier strictly dominates the other, and each recovers attacks missed by the other view\. We then introduce $\\texttt\{ReFuse\}$ \(Representation Fusion\), an inference\-time detector that fuses prompt and pre\-decoding response classifier scores without modifying model weights or the decoding procedure\. Across transferred and dLLM\-targeted jailbreaks, $\\texttt\{ReFuse\}$ reduces average ASR from 63\.29\\% for the undefended model to 3\.31\\%, while keeping average benign refusal on standard utility benchmarks below 1\\%\. These results suggest that pre\-decoding response states provide a complementary safety signal for detecting jailbreaks in dLLMs\.

## Robust Conditional Conformal Prediction via Branched Normalizing Flow

**Authors:** Rui Xu; Xingyuan Chen; Wenxing Huang; Minxuan Huang; Weiyan Chen; Sihong Xie; Hui Xiong

**ID:** 149585 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p0L1xLc9E7>) | [PDF](<https://openreview.net/pdf?id=p0L1xLc9E7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149585>)

Conformal prediction \(CP\) constructs prediction sets with marginal coverage guarantees under the assumption that the calibration and test distributions are identical\. However, under distribution shift, existing approaches primarily align marginal conformal score distributions, which is sufficient to preserve marginal coverage but does not control the conditional coverage error at individual test inputs\. As a consequence, CP can remain unreliable in regions where the conditional score distributions are mismatched\. In this work, we bound the conditional invalidity of CP under distribution shift in terms of the Wasserstein distance between the calibration and test distributions\. This result highlights the role of invertible transport in mitigating conditional coverage degradation\. Motivated by this insight, we introduce Branched Normalizing Flow \(BNF\), a two\-branch architecture that normalizes a test input to the calibration distribution and transforms the prediction set of the normalized input back to the test distribution while preserving conditional guarantees\. Empirically, BNF consistently improves conditional coverage robustness on nine datasets across a wide range of confidence levels\.

## CoT\-Guard: Small Models for Strong Monitoring

**Authors:** Nirav Diwan; Han Wang; Berkcan Kapusuzoglu; Ramin Moradi; Supriyo Chakraborty; Giridharan Iyengar; Sambit Sahu; Huan Zhang; Gang Wang

**ID:** 149885 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mURtPVmTjF>) | [PDF](<https://openreview.net/pdf?id=mURtPVmTjF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149885>)

Monitoring the chain\-of\-thought \(CoT\) of reasoning models is a promising approach for detecting covert misbehavior \(i\.e\., hidden objectives\) in code generation tasks\. While large models \(GPT\-5, Gemini\-3\-Flash\) can serve as effective CoT monitors, they are expensive to deploy due to the lengthy reasoning traces and high API cost, emphasizing the need for smaller, cheaper alternatives\. Nevertheless, we find that current small models \(4B\-\-8B\) struggle to detect hidden objectives despite access to the CoT, frequently misattributing them as part of the user query\. To address this, we propose a post\-training pipeline combining supervised fine\-tuning \(SFT\) and reinforcement learning \(RL\), where SFT narrows the gap for in\-domain tasks by distilling detection behavior from stronger monitors, and RL on hard and subtly crafted hidden objectives helps the model generalize to out\-of\-domain monitoring tasks\. To validate this generalization, we evaluate under a realistic threat model motivated by practical supply\-chain attacks, where the adversary is a third\-party LLM router injecting hidden objectives into code\-generation requests through either prompt manipulation or code manipulation attacks\. To push beyond objectives that large monitors already saturate, we also introduce four new challenging tasks even for strong monitors\. Finally, we introduce CoT\-Guard, a 4B\-parameter monitor that demonstrates superior generalization performance under both prompt and code manipulation attacks, achieving a $\\text\{Gmean\}^2$ \(i\.e\., TNR$\\times$TPR\) of 75\\% and outperforming GPT\-5\.4 \(56\\%\), GPT\-5\-mini \(41\\%\), and Qwen3\-32B \(54\\%\), while closing the gap to Gemini\-3\-Flash \(83\\%\)\. These results demonstrate that \\modelname provides a practical and cost\-effective user\-side defense, substantially improving hidden\-objective detection while avoiding the deployment cost of large monitors\.

## Grounded or Fabricated? Unsupervised Detection of LLM Hallucinations via Contextualized Influence on Response Embeddings

**Authors:** Zeyang Ding; Feng Xiao; Jicong Fan

**ID:** 148826 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ur1ym0WRCP>) | [PDF](<https://openreview.net/pdf?id=ur1ym0WRCP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148826>)

Hallucinations in large language models \(LLMs\) that are plausible\-sounding but factually incorrect or unsupported pose a major challenge for deploying these models in high\-stakes applications such as medical diagnosis, legal reasoning, and knowledge\-based question answering\. Existing detection methods primarily rely on either generating multiple responses to check consistency or supervised training on labeled hallucinations\. Multiple\-response approaches tend to be computationally expensive and may be less practical for real\-time scenarios, while supervised methods are limited to known hallucination types and cannot generalize to unseen cases\. To address these limitations, we propose an efficient unsupervised hallucination detection method\. Our approach measures the embedding discrepancy between the LLM’s response considered independently and the response contextualized with the question\. A large discrepancy indicates that the question significantly influences the response, suggesting it is grounded, whereas a small discrepancy signals a higher likelihood of hallucination\. This method is efficient, interpretable, and does not require labeled hallucinations\. Extensive experiments across multiple tasks demonstrate that our approach consistently achieves superior or comparable detection performance while reducing the detection cost compared to the multiple\-response methods\.

## Stability Regimes for Framing\-Sensitive Fine\-Tuning in Language Models

**Authors:** Victor De Lima; Jiqun Liu; Grace H Yang

**ID:** 149842 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mt2diEh4OH>) | [PDF](<https://openreview.net/pdf?id=mt2diEh4OH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149842>)

AI systems increasingly shape how individuals access and evaluate information, intensifying concerns about misinformation\. Computational simulation offers a controlled complement to direct empirical study, with fine\-tuned LLMs enabling powerful agent\-based simulations\. However, fine\-tuning often induces broad behavioral shifts including bias drift, degenerate heuristics, and loss of task competence, which undermine experimental validity\. The central challenge is inducing localized decision shifts without global behavioral collapse\. We study this through a stability analysis of supervised fine\-tuning, attenuating loss on selected training slices to shift false\-claim acceptance while preserving overall task competence\. We introduce FrameRef, a large\-scale dataset of semantically equivalent claims with controlled surface framings across five dimensions \(Authoritative, Consensus, Emotional, Sensationalist, Prestige\), with human validation confirming systematic framing effects on claim acceptance\. We identify stability regimes in which targeted error shifts can be induced without degrading aggregate accuracy or calibration\. A sequential exposure task over FrameRef shows that small framing\-conditioned shifts compound into substantially different cumulative outcomes under feedback, but largely disappear when feedback is removed, confirming that interventions modify specific decision tendencies rather than global performance\. We release code, LoRA adapters, and data at https://github\.com/anonymousauthor2352/frameref\.

## AdaptNC: Adaptive Nonconformity Scores for Conformal Prediction under Distribution Shift

**Authors:** Renukanandan Tumu; Aditya Singh; Rahul Mangharam

**ID:** 150536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hPSiFtFpGw>) | [PDF](<https://openreview.net/pdf?id=hPSiFtFpGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150536>)

Rigorous uncertainty quantification is essential for the safe deployment of autonomous systems in unconstrained environments\. Conformal Prediction \(CP\) provides a distribution\-free framework for this task, yet its standard formulations rely on exchangeability assumptions that are violated by the distribution shifts inherent in real\-world robotics\. Existing online CP methods maintain target coverage by adaptively scaling the conformal threshold, but typically employ a static nonconformity score function\. We show that this fixed geometry leads to highly conservative, volume\-inefficient prediction regions when environments undergo structural shifts\. To address this, we propose \\textbf\{AdaptNC\}, a framework for the joint online adaptation of both the nonconformity score parameters and the conformal threshold\. AdaptNC leverages an adaptive reweighting scheme to optimize score functions, and introduces a replay buffer mechanism to mitigate the coverage instability that occurs during score transitions\. We evaluate AdaptNC on diverse robotic benchmarks involving multi\-agent policy changes, environmental changes and sensor degradation\. Our results demonstrate that AdaptNC significantly reduces prediction region volume compared to state\-of\-the\-art threshold\-only baselines while maintaining target coverage levels\.

## A Theory of Time\-Sensitive Language Generation: Sparse Hallucination Beats Mode Collapse

**Authors:** Atul Ganju; Travis McVoy; Shaddin Dughmi; Shang\-Hua Teng

**ID:** 154885 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AAGGtvkuee>) | [PDF](<https://openreview.net/pdf?id=AAGGtvkuee>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154885>)

We study language generation in the limit under a global preference ordering on strings, as introduced by Kleinberg and Wei\. We aim for breadth, but impose an additional requirement of timeliness: higher\-ranked strings should be generated earlier\. A string is then only credited if it is generated before a deadline, where its deadline is defined by a function that maps a string’s rank in the target language to the time by which it must be produced\. This is in keeping with a central consideration in machine learning, where inductive bias favors  "simpler" or "more plausible" outputs, all else being equal\. We show that timely generation is impossible in a strong sense for eventually consistent generators—the protagonists of most prior related work\. Under what is perhaps the mildest natural relaxation of consistency, a hallucination rate that vanishes over time, we show that we can circumvent our impossibility result\. In particular, we can achieve optimal density  with respect to any superlinear deadline function\. We also show this is tight by ruling out timely generation with linear deadlines and vanishing hallucination rate\.

## The Minimax Rate of Second\-Order Calibration

**Authors:** Kamil Ciosek; Banafsheh Rafiee; Sina Ghiassian; Nicolò Felicioni

**ID:** 154263 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F64zJN7pvL>) | [PDF](<https://openreview.net/pdf?id=F64zJN7pvL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154263>)

We characterize the minimax rate of estimating the second\-order calibration error for binary classification, which quantifies whether a higher\-order predictor's epistemic\-uncertainty estimate matches the conditional variance of the label probability on its level sets\. Our key observation is that the sech perturbation kernel, previously used only to enforce smoothness of calibration functions, in fact makes them \\emph\{analytic\} in a strip of half\-width $h\\pi/2$\. Polynomial regression then estimates the calibration error at rate $\\tilde\{O\}\(1/\\sqrt\{n\}\)$, with explicit constants, a qualitative improvement over the $O\(n^\{\-1/4\}\)$ rate achievable by bucketing or kernel smoothing\. A matching $\\Omega\(1/\\sqrt\{n\}\)$ lower bound establishes minimax optimality up to logarithmic factors\. As a corollary, we give the first finite\-sample guarantee for second\-order Platt scaling, yielding a post\-hoc procedure that recalibrates both the mean prediction and the epistemic\-variance estimate of any higher\-order predictor\. Along the way, we provide a bucket\-free definition of second\-order calibration and relate it quantitatively to the bucketed formulation of Ahdritz et al\. \[2025\]\. Our experiments confirm the predicted rate and the quality of the recalibrated uncertainties\.

## Agent Meltdowns: The Road to Hell Is Paved with Helpful Agents

**Authors:** Rishi Jha; Harold Triedman; Vitaly Shmatikov; Arkaprabha Bhattacharya

**ID:** 151325 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLzbzox9it>) | [PDF](<https://openreview.net/pdf?id=bLzbzox9it>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151325>)

Agents operating with computer and Web use inevitably encounter errors: inaccessible webpages, missing files, local and remote misconfigurations, etc\. These errors do not thwart agents based on state\-of\-the\-art models\. They helpfully continue to look for ways to complete their tasks\.  In this paper, we introduce, characterize, and measure a new type of agent failure we call \*accidental meltdown\*: unsafe or harmful behavior in response to a benign environmental error, in the absence of any adversarial inputs\. We implemented an agent\-agnostic infrastructure for injecting simulated local and remote errors into a rollout environment and used it to systematically evaluate four agent systems powered by GPT, Grok, and Gemini\. Because meltdowns are not captured by the existing reliability or safety benchmarks, we developed a taxonomy of meltdown behaviors\.    Our evaluation demonstrates that meltdowns \(e\.g\., conducting unauthorized reconnaissance or subverting access control\) of varying severity and success occur in 64\.7% of agent rollouts that encounter simulated errors, spanning all combinations of agent system, backing model, and error type\. In over half of these meltdowns, unsafe behaviors are not reported to the user\. Comparing behaviors of the same agents with and without errors, we find that exploration in response to errors is correlated with unsafe and harmful behavior\.

## Trust Guided Decision Transformer

**Authors:** Chainesh Gautam; Raghuram Bharadwaj Diddigi; Chandramouli Kamanchi; Pankaj Dayama; Sumanta Mukherjee; Kameshwaran Sampath

**ID:** 151852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XQWFbB5mIO>) | [PDF](<https://openreview.net/pdf?id=XQWFbB5mIO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151852>)

Decision Transformer performance degrades on long rollouts because the conditioning context drifts out of the training distribution\. We show that this drift is visible through the model's own next state prediction error, which rises during rollout and stays elevated, giving a direct signal of when context has become unreliable\. We introduce Trust Guided Decision Transformer \(TGDT\), which selects context before applying value guidance\. At each step, TGDT evaluates several recent context suffixes using rolling next state prediction error, calibrated against held out offline data via split conformal prediction\. It keeps only suffixes whose error stays within the calibrated threshold, then uses a frozen critic to choose the highest value action among the trusted suffixes\. This reverses the order used by value only elastic selection, where the critic may choose an action generated from a context the model itself has flagged as unreliable\. Experiments on D4RL navigation and locomotion tasks show that state prediction, critic guidance, and hard context reset each solve only part of the problem\. TGDT reduces persistent high error runs and improves return over vanilla Decision Transformer, reset based context control, and value only context selection\.

## Integrating Local and Global Entropy for Uncertainty Quantification in LLMs

**Authors:** Johanne Medina; Tianyi Zhou; Keivin Isufaj; Aristides Gionis; Sanjay Chawla

**ID:** 150760 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fbOMEeETpt>) | [PDF](<https://openreview.net/pdf?id=fbOMEeETpt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150760>)

Large language models can hallucinate confidently, making uncertainty quantification essential for reliable deployment\. Existing approaches rely predominantly on token\-level signals from the final \(unembedding\) layer, while the rich geometric structure of intermediate hidden states remains largely unexplored\. Aggregating  token\-level scores to the response level is itself non\-trivial, and no single  signal reliably catches the confident\-but\-wrong failure mode where a model commits to every token with high confidence yet produces an incorrect answer\. We address this gap by extracting complementary signals from two distinct representational layers: hidden\-state geometric complexity \(global uncertainty\) from the embedding layer, and token\-level entropy \(local uncertainty\) from the unembedding layer\. We show empirically that the two signals cover different regimes that are weakly correlated and thus combining them captures failure modes invisible to either alone\. Building on this insight, we propose Global Local Uncertainty \(GLU\), an unsupervised, single\-pass framework that fuses the two signals via a multiplicative gate\. Experiments across three benchmarks and three model families show that GLU matches or outperforms all unsupervised baselines and remains competitive with supervised methods that lack cross\-dataset generalization\.

## Hierarchical Conformal Classification

**Authors:** Floris den Hengst; Inès Blin; Majid Mohammadi; Syed I Shah; Taraneh Younesian

**ID:** 150172 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9Vms7prG3>) | [PDF](<https://openreview.net/pdf?id=k9Vms7prG3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150172>)

Conformal prediction \(CP\) provides reliable uncertainty quantification by generating prediction sets with finite\-sample coverage guarantees, yet it typically ignores hierarchical relationships between classes\. We introduce Hierarchical Conformal Classification \(HCC\), a framework that integrates class hierarchies into the structure and semantics of prediction sets\. HCC uses a constrained optimization problem formulation to produce prediction sets composed of nodes at various hierarchy levels while maintaining rigorous coverage guarantees\. To ensure computational efficiency, we prove that a restricted subset of well\-structured candidate solutions is sufficient to maintain both optimality and coverage\. Empirical evaluations across audio, image, and text benchmarks, alongside a user study, demonstrate that HCC outperforms state\-of\-the\-art methods and that hierarchical prediction sets align better with human preferences\.

## Models That Know How Evaluations Are Designed Score Safer

**Authors:** Katharina Deckenbach; Haritz Puerto; Jonas Geiping; Sahar Abdelnabi

**ID:** 139525 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ka3c4oKNwc>) | [PDF](<https://openreview.net/pdf?id=Ka3c4oKNwc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139525>)

The validity of AI safety evaluations depends on models behaving consistently across controlled and deployment settings\. Prior work has identified test\-time contextual cues, such as hypothetical scenarios, as a source of verbalized evaluation awareness and subsequent behavioral shift\. In this paper, we investigate a potential explanation of this phenomenon: evaluation meta\-knowledge, defined as parametric knowledge about the structural traits that characterize evaluations\. Similar to dataset contamination, where benchmark exposure leads to higher performance through memorization, we hypothesize that models trained on texts describing evaluation practices may implicitly learn to recognize and respond to evaluation\-like contexts, for instance through exposure to scientific articles or social media posts about AI benchmarking\.  To test this, we fine\-tune models on synthetic documents describing evaluation traits such as verifiable structures or moral dilemmas\. Evaluating this fine\-tuned model on six safety benchmarks, we find that it is significantly safer than the base model and control model\. This behavioral shift persists even when restricting the analysis to responses lacking explicit verbalization of evaluation awareness\. Our results demonstrate that evaluation meta\-knowledge may inflate safety benchmark performance, introducing a novel confounder that is independent of explicit memorization or verbalized evaluation awareness, thus, challenging to detect\. These findings have important implications for the design and interpretation of AI safety evaluations\.

## Consistent One\-vs\-All Losses Robust to Misspecification of the Weak Label Transition Model

**Authors:** Chi Cui; Hei Victor Cheng; Jesús Cid\-Sueiro

**ID:** 150290 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jH8P1bT8U2>) | [PDF](<https://openreview.net/pdf?id=jH8P1bT8U2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150290>)

Learning from weak labels \(including noisy, partial or complementary labels\) requires exploiting the statistical dependence between ground\-truth classes and observed labels\. Many existing methods are built around a particular transition model, often assumed to be known, accurately estimated, or instance\-independent, which leads to performance degradation under model misspecification\.  We introduce Convex Losses for Weak Labels \(CLWL\), a family of losses for weak supervision based on transforming supervised one\-vs\-all losses\. By prioritizing classification and ranking consistency over probability calibration, CLWL relaxes rigid structural assumptions on the label transition mechanism\. We provide conditions for convexity and ranking consistency, characterize the transition matrices that preserve consistency for a given loss, and show that this consistency\-preserving space attains the theoretical dimension bound\. We propose a constructive method for generating parametric, lower\-bounded, convex losses adapted to arbitrary weak\-label models\. Finally, we connect CLWL to existing methods, including backward correction and some losses for partial or complementary labels\. Empirical results demonstrate that CLWL outperforms state\-of\-the\-art methods when the assumed transition model is misspecified\.

## Your Neighbors Know: Leveraging Local Neighborhoods for Backdoor Detection in Decentralized Learning

**Authors:** Sayan Biswas; Antoine Boutet; Davide Frey; Romaric Gaudel; Rachid Guerraoui; Maxime Jacovella; Anne\-marie Kermarrec; Dimitri Lerévérend; Francois Taiani; Martijn De Vos

**ID:** 153707 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JN1THG4T7h>) | [PDF](<https://openreview.net/pdf?id=JN1THG4T7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153707>)

Decentralized learning \(DL\) is an emerging machine learning paradigm where nodes collaboratively train models without a central server\. However, the collaborative nature of DL makes it vulnerable to backdoor attacks, where a model is taught to behave normally on standard inputs while executing hidden, malicious actions when encountering data with specific triggers\. Backdoor attacks in DL remain understudied and existing defenses often overlook DL constraints\. We introduce Argus, a novel backdoor detection framework native to DL that requires neither a central coordinator nor prior knowledge of the trigger\. In Argus, honest nodes locally analyze received model updates to identify potential backdoor triggers\. Nodes then collectively share their triggers with their neighbors and use a structural similarity metric to separate true backdoors from false alarms induced by data heterogeneity\. A key insight is that false positive triggers exhibit inconsistencies across participants while true positive ones show consistent patterns\. Model updates that fail this collaborative test are rejected, and persistently malicious senders are eventually evicted\. We provide the first theoretical convergence guarantees for a DL\-specific backdoor detection mechanism, showing that filtering out suspicious model updates with high probability preserves a convergence rate comparable to standard DL\. We implement and evaluate Argus on three standard datasets and against three state\-of\-the\-art baselines\. Across settings, Argus reduces attack success rates by up to 90 points compared to no defense, while preserving model utility within 5 percentage points of an omniscient oracle\. Furthermore, the effectiveness of Argus compared to baselines improves as data heterogeneity increases\.

## Honeyval: A Comprehensive Evaluation Framework for LLM\-powered HTTP Honeypots

**Authors:** Mark Vero; Fabian Kaczmarczyck; Ivan Petrov; I Shumailov; Niels Heinen; Jamie Hayes; Tianqi Fan; Luca Invernizzi; Martin Vechev

**ID:** 139314 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XvDLyFw8OO>) | [PDF](<https://openreview.net/pdf?id=XvDLyFw8OO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139314>)

LLMs increasingly serve as simulation engines for honeypots\. They enable defenders to construct high\-interaction honeypots with virtually no system security risks\. However, LLM\-powered honeypot development lacks a unified evaluation framework and protocol\. Most evaluations consist of response similarity measurements against a fixed set of commands, manual testing, or online deployment\. These evaluation methods are often not scalable for development, reproducible across evaluations, representative of practical attacks, and adaptable to various attacker and honeypot configurations\. In this work, we bridge this gap and propose Honeyval, a comprehensive evaluation framework for LLM\-powered HTTP honeypots\. We address the limitations of prior evaluations by grounding the honeypots in 16 backend applications, using AI hacking agents as attackers, employing two control tasks to monitor agent and honeypot capabilities across customizations, and defining clear and verifiable exploit goals for the attacker\. Using Honeyval, we conduct an extensive evaluation of recent cost\-efficient LLMs as HTTP honeypots\. Our experiments highlight the promise of LLM\-powered honeypots; they lead to substantially longer interactions with the attacker than rule\-based baseline honeypots and are far less frequently detected even by frontier models, all while preserving a running cost advantage against agentic attackers\. Further, we experiment with different counter\-offensive configurations for the honeypots, and observe unique trade\-offs, such as longer interactions at the cost of increased detection\.

## Recovering Clean Evaluation Metrics from Contaminated Benchmarks

**Authors:** Míriam Barrabés; Daniel Mas Montserrat; Maria Perera; Alexander Ioannidis

**ID:** 153099 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NwYunMgkJx>) | [PDF](<https://openreview.net/pdf?id=NwYunMgkJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153099>)

When benchmark examples overlap with a model’s training data, benchmark contamination can substantially inflate reported evaluation metrics, yet training provenance is often unavailable\. We study post\-hoc recovery of uncontaminated evaluation metrics in supervised tabular classification and regression using only prediction–label pairs from a potentially contaminated benchmark\. We introduce MILAN \(Metric Integrity via Leakage\-Aware Normalization\), a meta\-trained framework that models a contaminated benchmark as a mixture of training\-origin and clean evaluation examples and estimates soft posterior weights for the clean component to correct evaluation metrics\. MILAN supports a broad class of metrics through weighted estimators and metric\-specific correction procedures, and can optionally incorporate contamination\-rate priors and sample\-wise difficulty scores\. To quantify uncertainty, MILAN additionally provides split\-conformal prediction intervals with marginal coverage across exchangeable recovery problems\. Across a large suite of simulated recovery problems with held\-out datasets and model families, MILAN consistently improves clean\-metric recovery over thresholding, clustering, mixture\-model, anomaly\-detection, and membership\-inference baselines\. In a polygenic risk score case study using UK Biobank evaluation data, MILAN improves agreement with independent FinnGen reference metrics\. We provide a scikit\-learn\-style implementation at \\url\{hidden\-for\-submission\}\.

## BIAS\-ID: A Framework for Analyzing Transformation Biases in AI\-Generated Image Detectors

**Authors:** Jonas Ricker; Asja Fischer; Erwin Quiring

**ID:** 139597 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GIewosR83I>) | [PDF](<https://openreview.net/pdf?id=GIewosR83I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139597>)

Given the surge of harmful AI\-generated imagery online, reliably distinguishing authentic images from generated ones has become an urgent research topic\. While many proposed detection methods perform well under controlled settings, they often collapse when tested on real\-world data\. A potential root cause are subtle biases in the detectors' training data\. As a result, detectors may rely on spurious correlations instead of learning true forensic artifacts\. While a recent line of work has identified the problem, there is not yet an established protocol to evaluate how biased a detector actually is\. In this work, we therefore take a step back: First, we discuss what it means for a detector to be biased, and how this differs from a lack of robustness\. Second, we propose BIAS\-ID, a transparent framework for analyzing and quantifying the presence of transformation biases in AI\-generated image detectors\. We validate our framework by performing an evaluation of six detectors across two datasets, revealing that several state\-of\-the\-art detection methods are strongly affected by biases\. Our results highlight the importance of bias\-aware evaluation for developing reliable AI\-generated image detectors\.

## CalArena: A Large Scale Post\-Hoc Calibration Benchmark

**Authors:** Eugène Berta; David Holzmüller; Francis Bach; Michael Jordan

**ID:** 139709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=97NdFtMyZ3>) | [PDF](<https://openreview.net/pdf?id=97NdFtMyZ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139709>)

Reliable probability estimates are critical in many machine learning applications, yet modern classifiers are often poorly calibrated\. Post\-hoc calibration provides a simple and widely used solution, but the large number of proposed methods, combined with small\-scale and inconsistent evaluations, makes it difficult to determine which approaches are truly effective in practice\. We introduce a large\-scale, standardized benchmark for post\-hoc calibration, covering nearly 2000 experiments across tabular and computer vision tasks, including binary, multiclass, and large\-scale classification settings\. Our benchmark aggregates predictions from a diverse set of classical models, modern deep learning architectures, and foundation models, and provides unified, reproducible implementations of dozens of calibration methods within a common evaluation framework\. We argue that Post\-Hoc Improvement \(PHI\) in proper scoring rules offers a principled alternative to traditional calibration error estimators for comparing post\-hoc methods, capturing both calibration quality and potential degradation to the model's predictive performance\. Using this framework, we conduct the most comprehensive empirical study of post\-hoc calibration to date\. Our results reveal consistent patterns across domains: smooth calibration functions outperform binning\-based approaches, dedicated multiclass methods are essential in high\-dimensional settings, and generic machine learning models are not competitive without calibration\-specific design\. To facilitate future research, we release all data, code, and evaluation tools, providing a plug\-and\-play benchmark for developing and comparing calibration methods\.

## Lethe: Link Inference Attacks For Evaluation of Edge Unlearning Methods

**Authors:** Andrea D&amp;amp;\#x27;Angelo; Francesco Gullo; Davide Mottin; Sayan Ranu; Giovanni Stilo

**ID:** 139781 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Fexig0zwY>) | [PDF](<https://openreview.net/pdf?id=5Fexig0zwY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139781>)

Graph Unlearning \(GU\) aims to remove the influence of specific training data from a Graph Neural Network without retraining anew\. While most methods address removal of nodes and features, Edge Unlearning \(EU\) aiming at forgetting edges has recently attracted dedicated attention as a standalone problem due to the hardness of completely removing the impact of an edge in the model\. Despite this, no dedicated benchmark for EU exists besides isolated evaluations on feature\-rich datasets such as Cora and Citeseer where GNNs exploit node features rather than graph structure\. As such, we show two systematic limitations in existing evaluations: dedicated EU methods can be slower than retraining anew, and accuracy metrics are uninformative due to the negligible impact of edge removal\. To address this gap, we introduce Lethe, the first comprehensive benchmark for Edge Unlearning, featuring 15 methods and 8 datasets\. Our benchmark emphasizes large graphs, introduces evaluation tasks of varying difficulty, and proposes empirical measures based on link inference attacks rather than proxy accuracy metrics\. We provide a comprehensive empirical analysis, demonstrate the shortcomings of current evaluations, and release Lethe as a reproducible, extensible benchmark\.

## Tight PAC\-Bayes Generalisation Guarantees for Large Language Model Safety Monitoring

**Authors:** Tom Lamb; Philip Torr; Tim G\. J\. Rudner

**ID:** 150040 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lDwefojK2s>) | [PDF](<https://openreview.net/pdf?id=lDwefojK2s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150040>)

How can we ensure that safety oversight models used to detect safety violations in AI systems reliably generalise, and how can we understand the factors that influence their generalisation? In this paper, we formalise PAC\-Bayes certification for large language model\-based safety oversight and obtain non\-vacuous PAC\-Bayes guarantees for safety oversight models, even under limited data for safety alignment\. Building on compression\-based PAC\-Bayes bounds, we show that highly compressed PEFT adaptations yield extremely short adaptation description lengths, enabling informative and often tight guarantees that certify both classification risk and predictive uncertainty\. We introduce a global\-scale quantisation method \(LoRA\-GT\) that reduces adaptor description length while preserving model performance, tightening bounds\. Our results show that certifiability is strongly linked to adaptor compressibility, with shorter adaptor description lengths yielding tighter guarantees\. Empirically, highly compressed adaptations exhibit minimal degradation in performance while enabling substantially stronger certification, suggesting that certifiable large language model oversight may naturally favour low\-complexity safety adaptations\. We further show that functional distortion tracks both test risk and bound tightness under compression, providing a practical mechanism for selecting simple, certifiable safety adaptations\. Together, these results show that compression\-based PAC\-Bayes analysis provides a practical framework for understanding and designing reliable safety oversight models\.

## PASSAGE: A Real\-Terrain Benchmark for Trustworthy Constrained Path Planning

**Authors:** Geoffrey Delhomme; François Trap; Fateh Kaakai

**ID:** 139152 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hxHPyFrMP8>) | [PDF](<https://openreview.net/pdf?id=hxHPyFrMP8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139152>)

Machine learning is increasingly used for autonomous navigation, yet safety regulations governing safety\-critical AI applications require rigorous datasets and protocols to evaluate learned planners on terrain\-aware routing\. Existing path\-planning benchmarks address this only partially: synthetic grids offer algorithmic control without geographic realism, while Geographic Information System \(GIS\) resources provide real terrain without controllable obstacles or standardised baselines\. To close this gap and steer research toward more trustworthy AI\-based planners, especially in line with EASA and FAA guidance on AI, we introduce PASSAGE , an open\-source benchmark and dataset that reframes constrained terrain path planning as a controlled trustworthiness\-oriented evaluation harness rather than a static dataset\. PASSAGE is sampled from a well\-defined Operational Design Domain \(ODD\) built on JAXA ALOS AW3D30 elevation at its native 30 m/pixel resolution, and is derived into seven input\-tensor resolutions from 64×64 to 4096×4096 pixels, totalling 4\.4 million samples for ≈ 2\.43 TB of compressed data\. Each sample is a real\-terrain cost grid annotated with start and goal markers, procedurally generated super\-ellipse obstacles, and exact A\* path labels under three physically interpretable cost models\. The release pairs this dataset with a deterministic generation pipeline, a geographic hold\-out, ODD\-coverage diagnostics, and a rigorous evaluation protocol — a shift from dataset collection towards auditable benchmark design that provides a rare level of experimental control for studying robustness, generalisation, and other trustworthiness properties of safety\-critical embedded AI\. PASSAGE thereby offers a common surface for comparing AI\-based path planners, including two dense\-vision approaches we introduce as illustrative examples \(path\-mask segmentation and depth\-estimation\-inspired cost\-to\-go regression\), with graph\-neural and reinforcement\-learning families as natural future extensions\. Although motivated by aerospace trustworthiness requirements such as completeness, correctness, and representativeness, PASSAGE broadly supports trustworthy machine learning across robotics, autonomous navigation, and other safety\-critical planning domains\. Code \(anonymous repository\) and dataset \(anonymous mirror\) are released openly under permissive licences\.

## Stochastic Grouping Conformal Prediction for Effective Subgroup Reliability

**Authors:** Meihui Zhong; Wenxin Tai; Ting Zhong; Fan Zhou

**ID:** 149803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFBHPHZ66f>) | [PDF](<https://openreview.net/pdf?id=nFBHPHZ66f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149803>)

Conformal prediction offers a distribution\-free coverage guarantee, making it especially attractive for clinical applications\. Standard conformal prediction, however, provides such guarantees only at the population level, and its prediction sets can exhibit coverage disparities across clinically important subgroups\. A natural remedy is to calibrate within predefined groups\. However, this can require access to sensitive subgroup attributes and is prone to a worst\-group bottleneck: protecting the most difficult subgroup can inflate prediction sets for all, increasing cognitive burden on decision makers\. To this end, we propose Stochastic Grouping Conformal Prediction \(SGCP\), a conformal framework for subgroup\-reliable uncertainty quantification\. It learns a stochastic grouping map that allows each sample to draw calibration information from others with similar calibration behavior, yielding a local score law that boosts reliability across subpopulations\. We prove that SGCP retains the standard coverage guarantee\. Experiments on synthetic and real\-world benchmarks show that it consistently reduces subgroup coverage gaps while achieving smaller or comparable prediction set sizes relative to existing baselines\.

## Consistency\-Verified Backdoor Defense for Federated Graph Learning via Cross\-Layer Drift

**Authors:** Yanwen Jia; Yinuo Zhang; Zitong Shi; Yuxin Wu; Zihan Tan; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 152211 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UjxaVYw25d>) | [PDF](<https://openreview.net/pdf?id=UjxaVYw25d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152211>)

Federated graph learning \(FGL\) enables privacy\-preserving collaborative training over distributed graph data, yet remains vulnerable to backdoor attacks from malicious clients\. In FGL, data and structural heterogeneity make benign clients difficult to distinguish from malicious ones, posing a key challenge to reliable defense\. We propose VeriDrift, a backdoor defense framework for FGL based on cross\-layer drift and consistency verification\. On the client side, VeriDrift derives a client\-level risk score from node\-level cross\-layer drift anomalies during GNN propagation\. On the server side, VeriDrift verifies the consistency between the reported risk and the submitted model update, and converts the resulting verified risk into aggregation weights to suppress suspicious updates\. Without relying on auxiliary clean data, VeriDrift enables reliable risk assessment under heterogeneous FGL and improves robustness against adaptive attacks\. Extensive experiments show that VeriDrift consistently reduces attack success rates across different FGL backdoor settings while maintaining clean accuracy\.

## Can Metadata Fix the Gauge? Calibration Turns Sparse Multi\-Source Learning from Sparse PCA into Sparse Mean Recovery

**Authors:** Yibo Zhou; Yirong Xiang

**ID:** 152833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q5Hpa44zeJ>) | [PDF](<https://openreview.net/pdf?id=Q5Hpa44zeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152833>)

Source labels tell us where a sample came from, but not how that source oriented its coordinates\. In a sparse Gaussian multi\-source model with source\-specific sign gauges, that distinction changes the learning problem\. Without calibration, pooling across sources erases the mean signal, and the source\-labelled experiment reduces to sparse PCA\. With task\-independent relative\-gauge metadata, synchronization aligns sources and the same observations become a sparse mean problem\. We formalize the value of metadata through aligned mass, which quantifies how much first\-order signal a metadata\-induced alignment restores\. Source labels create only limited aligned mass, whereas valid calibration can create aligned mass proportional to the full sample size\. This yields a statistical separation in micro\-source regimes and, under standard sparse\-PCA hardness assumptions, a computational separation as well\. Experiments confirm the predicted phase transition, the failure of invalid metadata, reuse of one calibration graph across many tasks, and controlled real\-feature settings with imposed source gauges\.

## PLLS\-CP: Unsupervised Hallucination Detection with Layer Selection and Cross\-Domain Conformal Guarantees

**Authors:** Vladislav Tsvelenev; Maxim Ryndin

**ID:** 151476 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aKIJQBf4JP>) | [PDF](<https://openreview.net/pdf?id=aKIJQBf4JP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151476>)

Ensuring reliability of large language models \(LLMs\) is critical for their safe deployment in autonomous and resource\-constrained applications, where hallucinations can lead to incorrect or harmful outputs\. Detecting hallucinations from internal model states without external knowledge is promising, but existing methods lack distribution\-free guarantees and fail under domain shift\. We introduce PLLS\-CP, a unified framework for hallucination detection that addresses both challenges\. First, PLLS uses pseudo\-label probing across transformer layers to identify the most informative ones, and trains an unsupervised detector on the selected layers\. Then, a Mondrian conformal layer wraps the detector to provide provable coverage guarantees\. Under domain shift, only the conformal threshold is updated on a small target calibration set — leaving the PLLS\-trained detector fixed and avoiding retraining\. We provide theoretical guarantees: marginal coverage under cross\-domain recalibration, exponential concentration of the coverage gap, and non\-degradation of the validation\-selected ensemble\. Experiments on 18 domains from TrueFalse, HaluEval, and HELM show that PLLS\-CP substantially improves accuracy retention under cross\-domain transfer while maintaining empirical coverage close to the nominal target level\. On informative domains the method loses less than 2\.5% of selective accuracy under transfer, suggesting a practical path to deployable, distribution\-shift\-robust hallucination detectors\.

## Concise and Logically Consistent Conformal Sets for Neuro\-Symbolic Concept\-Based Models

**Authors:** Samuele Bortolotti; Emanuele Marconato; Andrea Pugnana; Andrea Passerini; Stefano Teso

**ID:** 152103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VUpjicJHf4>) | [PDF](<https://openreview.net/pdf?id=VUpjicJHf4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152103>)

Neuro\-Symbolic Concept\-based Models \(NeSy\-CBMs\) are a family of architectures that integrate neural networks with symbolic reasoning for enhanced reliability in high\-stakes applications\.  They work by first extracting high\-level concepts from the input and then inferring a task label from these compatibly with given logical constraints\. Yet, their label and concept predictions can be overconfident, making it difficult for stakeholders to gauge when the model's decisions can be trusted\. We address this issue by integrating ideas from Conformal Prediction \(CP\), a framework providing rigorous, distribution\-free coverage guarantees\. We formalize three desiderata \-\- consistency, coverage, and conciseness \-\- that any conformal method for NeSy\-CBMs should satisfy, and show that existing approaches fall short of at least one\. We then introduce COCOCO, a post\-hoc framework that conformalizes concepts and labels jointly and reconciles them via a single deduction–abduction revision step\. COCOCO satisfies all three desiderata, retains distribution\-free coverage, is robust to imperfect knowledge and supports user\-specified size budgets\. Our experiments on 8 data sets highlight how COCOCO compares favorably against competitors and natural baselines in terms of performance and set size\.

## Sub\-Gaussian Confidence Intervals for Heavy\-Tailed Data: Characterizing the Limits of Inference

**Authors:** Ilyes Hammouda; Stanislav Minsker; Mohamed Ndaoud

**ID:** 148636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wFuL2EAAu5>) | [PDF](<https://openreview.net/pdf?id=wFuL2EAAu5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148636>)

We investigate the problem of uncertainty quantification in the mean estimation framework\. Given an i\.i\.d\. sample from a distribution with unknown mean $\\mu$ and  variance $\\sigma^2$, we want to construct an estimator $\\hat\{\\mu\}\_n$ and provide a computable and size\-optimal upper bound for the error $\|\\hat\{ \\mu\}\_n \- \\mu\|$\. While estimators possessing strong deviation guarantees are well known, no data\-dependent non\-asymptotic upper bounds for their performance exist in general\. We show that this gap can be bridged by introducing a parameter that characterizes the "effective sample size" available for uncertainty quantification\. This parameter captures the difficulty of the problem, interpolating between "easy" cases where sub\-Gaussian confidence intervals exist and "hard" cases where their construction is impossible\. Using this characterization, we design confidence intervals of optimal length that are fully adaptive to the unknown variance\. Numerical experiments confirm that our approach maintains nominal coverage even in asymmetric and heavy\-tailed regimes where other existing methods fail\.

## Integral Probability Boundaries

**Authors:** Bogdan Kulynych; Shahab Asoodeh

**ID:** 152300 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U5cCG37Q3M>) | [PDF](<https://openreview.net/pdf?id=U5cCG37Q3M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152300>)

Bounds based on Integral Probability Metrics \(IPMs\) are ubiquitous in machine learning and statistics, appearing, e\.g\., in generalization, alignment, fairness, and privacy\. IPMs reduce the discrepancy between two distributions to a single worst\-case expectation gap\. This compression is costly: for rare events, safety failures, or under\-represented groups, IPM\-based bounds are loose or vacuous\. We introduce a non\-linear generalization of IPMs, which we term the Integral Probability Boundaries \(IPBs\)\. Unlike IPMs, IPBs provide bounds that are tight at the extremes\. We derive basic properties of IPBs, and provide algorithms for estimating them in different practically relevant settings\. We demonstrate the usage of IPBs in both theoretical and practical applications for alignment, judge\-free performance estimation, and fairness, where they enable us to obtain sharp bounds on performance and fairness gaps, e\.g\., 15p\.p\. more precise estimates on fairness gaps for rare groups in a realistic generative modeling task, compared to state\-of\-the\-art\.

## Securing AI Agents with Information\-Flow Control

**Authors:** Manuel Costa; Boris Köpf; Aashish Kolluri; Andrew Paverd; Mark Russinovich; Ahmed Salem; Shruti Tople; Lukas Wutschitz; Santiago Zanella\-Beguelin

**ID:** 152696 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R5k46rM7mR>) | [PDF](<https://openreview.net/pdf?id=R5k46rM7mR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152696>)

As AI agents become increasingly autonomous and capable, ensuring their security against vulnerabilities such as prompt injection becomes critical\. This paper explores the use of information\-flow control \(IFC\) to provide security guarantees for AI agents\. We present a formal model to reason about the security and expressiveness of agent planners\. Using this model, we characterize the class of properties enforceable by dynamic taint\-tracking and construct a taxonomy of tasks to evaluate security and utility trade\-offs of planner designs\. Informed by this exploration, we present Fides, a planner that tracks confidentiality and integrity labels, deterministically enforces security policies, and introduces novel primitives for selectively hiding and revealing information\. Its evaluation on AgentDojo and WASP demonstrates that this approach enables us to complete a broad range of tasks with security guarantees\.

## GradShield: Alignment Preserving Finetuning

**Authors:** Zhanhao Hu; Xiao Huang; Patrick Mendoza; Emad A Alghamdi; Basel Alomair; Raluca Popa; David Wagner

**ID:** 151041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQFVIxjyvV>) | [PDF](<https://openreview.net/pdf?id=dQFVIxjyvV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151041>)

Large Language Models \(LLMs\) pose a significant risk of safety misalignment after finetuning, as models can be compromised by both explicitly and implicitly harmful data\. Even some seemingly benign data can inadvertently steer a model towards misaligned behaviors\. To address this, we introduce GradShield, a principled filtering method that safeguards LLMs during finetuning by identifying and removing harmful data points before they corrupt the model's alignment\. It removes potentially harmful data by computing a Finetuning Implicit Harmfulness Score \(FIHS\) for each data point and employs an adaptive thresholding algorithm\. We apply GradShield to multiple utility fine\-tuning tasks across varying levels of harmful data and evaluate the safety and utility performance of the resulting LLMs using various metrics\. The results show that GradShield outperforms all baseline methods, consistently maintaining an Attack Success Rate \(ASR\) below $6\\%$ while preserving utility performance\.

## When Does Trimming Help Conformal Prediction? A Retained\-Law Diagnostic under Calibration Contamination

**Authors:** Congye Wang

**ID:** 148630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wJGWapZaZl>) | [PDF](<https://openreview.net/pdf?id=wJGWapZaZl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148630>)

Trimming suspicious calibration points is a common response to contamination in conformal prediction\. Its effect on clean\-target coverage, however, is governed by the retained law induced by trimming, not by the contamination level alone\. We analyse fixed\-threshold trimming as conditioning rather than purification\. It replaces the contaminated calibration law with a retained law, reducing clean\-target coverage to a one\-dimensional score\-CDF transfer problem with an exact finite\-sample identity\. A componentwise bound on the transfer gap gives a population\-level diagnostic\. This separates a clean\-side covariance cost from a retained\-contamination cost, governed by the dirty\-to\-clean retention ratio\. Trimming helps when the anomaly score separates retention probabilities while remaining score\-neutral on the clean population\. Otherwise, it cannot substantially reduce contamination through the retained mixture coefficient\. We also give finite\-sample certificate templates that provide numerical guarantees under independent audit\.

## Smoothed Elicitation Complexity for Approximate $\\Gamma$\-calibration of Discrete Classification Tasks

**Authors:** Jessica Finocchiaro; Victor Ganson; Drona Khurana

**ID:** 151864 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XK72jCUNU1>) | [PDF](<https://openreview.net/pdf?id=XK72jCUNU1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151864>)

One prominent method of evaluating machine learning model trustworthiness is the notion of \\emph\{calibration\}\. In the binary outcome setting, a probabilistic predictor is calibrated if outcomes are realized according to a model's distributional prediction, conditioned on this prediction\. Straightforward extensions of binary calibration definitions to probabilistic multiclass classifiers suffer from an exponential complexity blowup as the space of predictions grows exponentially in the number of classes $n$\. As a remedy, \\citet\{noarov\_statistical\_2023\} propose multiclass calibration with predictions that are \\emph\{properties\} of the outcome distribution, reducing complexity from growing in the number of classes $n$ to the \\emph\{dimension\} $d$ of the property, called its elicitation complexity\. Previous work on approximate property calibration is generally limited to continuous scalar properties, despite many relevant properties of interest being discrete, like the mode or rankings\. We characterize the approximate property calibration of discrete properties which are strongly orderable by using Lipschitz continuous properties as an intermediary\. This work is the first to our knowledge to provide approximate calibration results for discrete properties\. Along the way, we characterize the Lipschitz elicitation complexity of strongly orderable discrete properties by constructing algorithms for designing these Lipschitz properties, which we prove can be post\-processed to obtain the original discrete property\.

## VIGOR: Benchmarking Visual Rationale Correctness in Multimodal Large Language Models

**Authors:** Yanlin Chen; Tang Li; Xi Peng

**ID:** 138905 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xlHEXHYvlZ>) | [PDF](<https://openreview.net/pdf?id=xlHEXHYvlZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138905>)

Multimodal large language models \(MLLMs\) are typically evaluated by whether they produce correct answers, but correctness alone does not reveal whether their outputs are supported by the right visual evidence\. We introduce VIGOR, a benchmark for evaluating \*\*VI\*\*sually \*\*G\*\*r\*\*O\*\*unded \*\*R\*\*ationales in MLLMs\. VIGOR represents visual rationales as explicit concepts paired with pixel\-level groundings, covering multiple abstraction levels including low\-level visual properties, intermediate structures, objects, parts and high\-level motion, relations\. To construct VIGOR at scale, we develop an automatic annotation framework that reuses existing dense supervision when available and generates missing concept groundings through proposal\-based annotation followed by conservative multimodal verification\. Using VIGOR, we evaluate whether MLLMs "look at what they say" by comparing model\-derived visual evidence for each expressed concept against annotated ground\-truth rationales\. Our results show that current MLLMs exhibit limited visual rationale correctness and reveal distinct grounding failures across concept levels\. VIGOR provides a benchmark and scalable data construction pipeline for studying whether MLLM outputs are supported by appropriate visual evidence\.

## Conceal, Reconstruct, Jailbreak: Exploiting the Reconstruction\-\-Concealment Tradeoff in MLLMs

**Authors:** Md Farhamdur Reza; Richeng Jin; Tianfu Wu; Huaiyu Dai

**ID:** 150908 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eX6nNUyIJW>) | [PDF](<https://openreview.net/pdf?id=eX6nNUyIJW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150908>)

Intent\-obfuscation\-based jailbreak attacks on multimodal large language models \(MLLMs\) transform a harmful query into a concealed multimodal input to bypass safety mechanisms\.  We show that such attacks are governed by a \\emph\{reconstruction\-\-concealment tradeoff\}: the transformed input must hide harmful intent from safety filters while remaining recoverable enough for the victim model to reconstruct the original request\. Through a reconstruction analysis of three representative black\-box methods, we find that existing transformations struggle to balance this tradeoff, limiting their effectiveness\.  In contrast, we show that character\-removed variants achieve a better balance\.  Building on this, we propose \\emph\{concealment\-aware variant construction\}, which greedily selects character\-removed variants that are low in harmful\-keyword alignment and mutually diverse, and instantiates them through five modality\-aware prompting strategies\. We further introduce \\emph\{keyword\-related distractor images\} that depict the harmful keyword in diverse contexts, providing more effective auxiliary visual context than generic distractor images\. Experiments across closed\-source and open\-source MLLMs show the proposed strategies outperform strong baselines, revealing an underexplored vulnerability: a model's own reconstruction ability can be exploited to recover hidden harmful intent and produce unsafe responses\.

## Class Adaptive Conformal Training

**Authors:** Badr\-Eddine Marani; Julio Silva\-Rodríguez; Ismail Ayed; Maria Vakalopoulou; Stergios Christodoulidis; Jose Dolz

**ID:** 152303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U4gGjBCf7z>) | [PDF](<https://openreview.net/pdf?id=U4gGjBCf7z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152303>)

Deep neural networks have achieved remarkable success across a variety of tasks, yet they often suffer from unreliable probability estimates, leading to overconfident predictions\. Conformal Prediction \(CP\) offers a principled framework for uncertainty quantification, yielding prediction sets with rigorous coverage guarantees\. Recent work has proposed integrating conformal objectives into training, optimizing for overall set size\. Nevertheless, shaping the prediction sets in a class\-conditional manner is not straightforward and typically requires prior knowledge of the data distribution\. While class\-conditional efficiency has been studied at the post\-hoc calibration level \(e\.g\., via class\-conditional scoring or calibration partitioning\), no prior conformal training method explicitly addresses it\. To fill this gap, we introduce Class Adaptive Conformal Training \(CaCT\), which formulates conformal training as an augmented Lagrangian optimization problem that adaptively shapes prediction sets class\-conditionally without relying on parametric distributional assumptions, beyond a user\-specified global coverage constraint\. Experiments on multiple benchmark datasets, including standard and long\-tailed image recognition as well as text classification, demonstrate that CaCT consistently outperforms prior conformal training methods, reducing prediction set size while maintaining the desired coverage guarantees\.

## GRAPHLCP: Structure\-Aware Localized Conformal Prediction on Graphs

**Authors:** Peyman Baghershahi; Fangxin Wang; Debmalya Mandal; Sourav Medya

**ID:** 149829 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n0In1zdsw5>) | [PDF](<https://openreview.net/pdf?id=n0In1zdsw5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149829>)

Conformal prediction \(CP\) provides a distribution\-free approach to uncertainty quantification \(UQ\) with finite samples\. However, applying CP to graph neural networks \(GNNs\) remains challenging\. The combinatorial nature of graphs makes their encoding non\-trivial, leading to insufficiently uncertain prediction logits and indiscriminative embeddings\. Existing methods mostly rely on the embedding space for conformal prediction, which can be unreliable for graphs and often yields inefficient prediction sets\. We propose GRAPHLCP, a structure\-aware weighted conformal prediction framework that explicitly incorporates the graph topology and inter\-node dependencies into localization and weighting\. Based on experimental results that show a strong correlation between node homophily and sample coverage, we propose GRAPHLCP that utilizes a feature\-aware densification followed by Personalized PageRank–based kernel computation to model structural proximity between nodes\. Accounting for both structural and feature similarity allows GRAPHLCP to efficiently guarantee marginal coverage while attaining favorable test conditional coverage across extensive experiments on multiple datasets for both regression and classification\.

## Prediction\-only distillation with optimal mixing in ridge\-regularized linear and logistic regression

**Authors:** Hien H\. Dang; Pratik Patil; Alessandro Rinaldo

**ID:** 149713 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nzmFTRyjKB>) | [PDF](<https://openreview.net/pdf?id=nzmFTRyjKB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149713>)

Self\-distillation is typically studied when the student is retrained on the teacher’s original training inputs\. In many realistic deployments, however, the labeled data are unavailable after training, and one only has access to the trained predictor and fresh unlabeled covariates\. We study distillation in this prediction\-only regime through a fresh\-$X$ prediction\-mixing scheme: a pure\-distilled student is trained on pseudo\-labeled fresh features, and the final predictor is formed by an affine combination of the teacher and student predictions with the optimal unconstrained mixing weight\. For ridge regression under proportional asymptotics, we derive deterministic equivalents for the optimally mixed risk under general anisotropic covariance and deterministic signal, and show that optimal mixing strictly improves upon the teacher for almost every pair of regularization levels\. In the isotropic case, we uncover a sharp and counterintuitive phenomenon: the optimally mixed risk is generically non\-monotone in the amount of unlabeled data\. To tune the optimal mixing weight, we show that a small independent labeled calibration set suffices for consistent one\-shot estimation at low computational cost, since no additional retraining is required, whereas such tuning is impossible when using only teacher’s outputs on unlabeled data\. Finally, to extend beyond squared loss, we analyze logistic regression for binary classification and show that prediction mixing can improve over both the teacher and the pure\-distilled classifier\.

## Flow\-Based Conformal Predictive Distributions

**Authors:** Trevor Harris

**ID:** 153168 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NLkjvjTgni>) | [PDF](<https://openreview.net/pdf?id=NLkjvjTgni>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153168>)

Conformal prediction provides a distribution\-free framework for uncertainty quantification via prediction sets with exact finite\-sample coverage\. In low dimensions these sets are easy to interpret, but in high\-dimensional or structured output spaces they are difficult to represent and use, which can limit their ability to integrate with downstream tasks such as sampling and probabilistic forecasting\. We show that any sufficiently regular differentiable nonconformity score induces a deterministic flow on the output space whose trajectories converge to the boundary of the corresponding conformal prediction set\. This leads to a computationally efficient, training\-free method for sampling conformal boundaries in arbitrary dimensions\. Mixing across confidence levels yields conformal predictive distributions whose quantile regions coincide with the empirical conformal prediction sets\. We provide an approximation bound decomposing CPD predictive error into score\-induced distortion, base\-measure quality, and gradient flow\-induced distortion\. We evaluate the approach on PDE inverse problems, precipitation downscaling, climate model debiasing, and hurricane trajectory forecasting\.

## Generative Conformal Prediction with Optimized Coverage Allocation

**Authors:** Minxing Zheng; Shixiang Zhu

**ID:** 149988 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lgTafhvFUa>) | [PDF](<https://openreview.net/pdf?id=lgTafhvFUa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149988>)

Conformal prediction provides model\-agnostic uncertainty quantification with guaranteed coverage, but conventional methods often yield overly conservative uncertainty sets, particularly in multimodal or heterogeneous settings\. This inefficiency arises from two sources: \(i\) limited expressiveness of the predictive model and \(ii\) simplistic nonconformity scores design\. Most existing approaches advance only one of these axes, leaving the other underexplored\. We propose generative conformal prediction with O ptimized R anking and C overage A llocation \(ORCA\), a three\-stage framework that advances both aspects jointly\. ORCA leverages generative models to capture the full conditional distribution and introduces a rank\-dependent optimization procedure that adaptively allocates coverage for efficiency while maintaining validity\. We cast this coverage allocation as an optimization problem, derive an exact mixed\-integer linear programming formulation, and show that the solution converges asymptotically to the oracle density\-level set\. Across synthetic, semi\-synthetic, and real datasets, ORCA produces substantially more efficient uncertainty sets than state\-of\-the\-art baselines, demonstrating robust gains in scenarios where conventional conformal prediction methods fail\.

## Optimal Recalibration of an Online Predictor

**Authors:** Lunjia Hu; Kevin Tian; Chutong Yang

**ID:** 153807 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IZBCEtLXFZ>) | [PDF](<https://openreview.net/pdf?id=IZBCEtLXFZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153807>)

We study the problem of recalibrating an online predictor \[KE17, OKS24\]: given an arbitrary \`\`hint'' sequence of forecasts, the learner must output new predictions that are calibrated while incurring small excess error relative to the original forecasts, under a proper loss\. We give an online algorithm that achieves $\(\\varepsilon, \\varepsilon^2\)$\-recalibration for Lipschitz proper losses in $T \\approx \\varepsilon^\{\-3\}$ rounds, using an imbalanced extension of the recent simultaneous Blackwell approachability reduction framework of \[HTY26\]\. We also show this tradeoff is optimal by proving a matching lower bound for recalibrating against the squared loss\. As an application, we show how our recalibration algorithm can be combined with the online refinement method of \[FH23\] to obtain simultaneous $\\varepsilon$\-calibration and $\\varepsilon^2$\-calibeating for smooth proper losses at the same asymptotic rate, improving upon prior works that achieved these properties separately or with a worse $\\varepsilon$ dependence\. We also discuss extensions to settings with multiple hint sequences\.

## Truthful Calibration Errors for Multi\-Class Prediction

**Authors:** Yuxuan Lu; Yifan Wu; Jason Hartline; Lunjia Hu

**ID:** 149426 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q98y9pHu2F>) | [PDF](<https://openreview.net/pdf?id=q98y9pHu2F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149426>)

Calibrated predictions are useful because their numerical values can be interpreted as probabilities\. Calibration errors are therefore widely used to evaluate and compare probabilistic predictors\. Recently, Haghtalab et al\. \[2024\] introduced truthfulness as an additional requirement for such measures\. A calibration measure is truthful if a predictor minimizes its expected measured error by reporting the true conditional label distribution\. Many standard empirical calibration errors are non\-truthful: a predictor may appear better calibrated by distorting its probabilities\. We study the implications of truthful and non\-truthful calibration errors for practice\. First, we introduce perfectly truthful calibration errors for full multiclass calibration and classwise calibration, two standard multiclass notions\. More generally, our construction applies to any linear property of the label distribution, generalizing the truthful calibration error for binary predictions in Hartline et al\. \[2025\]\. We also identify a truthful correction for confidence calibration\. Second, we characterize the decision\-theoretic implications of these truthful errors\. For calibrated predictors, truthful calibration errors preserve the Blackwell dominance: a more informative calibrated predictor receives no larger expected error\. Third, we show that this decision\-theoretic interpretation explains and mitigates the well\-observed ranking robustness problem of binned calibration errors\. Empirically, non\-truthful confidence\-based errors can reverse model rankings when the number of bins changes, while our truthful classwise error gives more stable rankings across binning choices\.

## UMAS: System\-Level Uncertainty Quantification for Multi\-Agent LLM Systems

**Authors:** Hanwen Li; Jinhao Duan; Xiaoshuang Shi; Yue Zhang; Tianlong Chen; Kaidi Xu; Chenxi Yuan

**ID:** 148275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z4D5fgtmEo>) | [PDF](<https://openreview.net/pdf?id=z4D5fgtmEo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148275>)

Multi\-Agent Systems \(MAS\) are a promising paradigm for improving the reasoning capabilities of large language models, yet they remain prone to hallucinations and erroneous outputs\. Uncertainty Quantification \(UQ\) is crucial for assessing system reliability, but existing methods are largely designed for single\-agent settings; how to exploit MAS structure for UQ while keeping inference cost\-neutral remains underexplored\. We propose UMAS, a parameter\-free, cost\-neutral, system\-level UQ framework that estimates the credibility of inter\-agent influence from each generation’s intrinsic confidence\. UMAS uses these credibility signals to modulate how uncertainty is updated at each node, and then aggregates node\-level uncertainty into a system\-level estimate\. Extensive evaluations on Debate and DyLAN across diverse benchmarks show that UMAS consistently outperforms state\-of\-the\-art baselines by an average of 10\.49 AUROC points\. Beyond uncertainty estimation, UMAS enables hallucination detection and uncertainty\-aware answer selection, improving MAS accuracy by up to 12\.6 points on specific tasks while enhancing reliability\.

## Mitigating Factual Hallucination in Large Reasoning Models via Mixed\-Mode Advantage Regularization

**Authors:** Kaishen Wang; Tong Zheng; Xuehao Cui; Ruibo Chen; Tianyi Xiong; Heng Huang

**ID:** 155434 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5h7gF4q3A2>) | [PDF](<https://openreview.net/pdf?id=5h7gF4q3A2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155434>)

Large reasoning models \(LRMs\) improve language model capabilities by generating explicit thinking traces before final answers\. In factuality\-oriented question answering \(QA\), such thinking often improves overall performance by helping the model recover relevant knowledge and refine its answers\. However, we find that this benefit is not uniform at the instance level: explicit thinking can also overturn correct non\-thinking answers and lead to factual drift\. We refer to this failure mode as \\emph\{thinking\-induced hallucination\}\. To explain this phenomenon, we formulate explicit thinking in factuality QA as a thinking residual over the model's direct\-answer tendency, which can either recover missing knowledge or introduce unsupported associations\. Based on this formulation, we propose MARGO, \\underline\{\\textit\{M\}\}ixed\-Mode \\underline\{\\textit\{A\}\}dvantage \\underline\{\\textit\{R\}\}egularization for \\underline\{\\textit\{G\}\}rounded \\underline\{\\textit\{O\}\}ptimization, a reinforcement learning framework that uses non\-thinking rollouts as same\-model references in advantage estimation\. By constructing mixed\-mode rollout groups with both thinking and non\-thinking trajectories, MARGO evaluates whether explicit thinking adds factual value beyond direct answering, thereby suppressing hallucination\-prone thinking while preserving beneficial thinking behaviors\. Experiments across multiple factuality\-oriented QA benchmarks demonstrate that MARGO improves factual reliability over strong baselines, while evaluations on mathematical benchmarks show that it preserves general reasoning ability\.

## Evaluating Deployable Inference\-Time Error Prediction in Vision MoEs

**Authors:** Aristeidis Tsaris; JangHyeon Lee; Abhishek Potnis; Philipe Dias; Waqwoya Abebe; Dan Lu; Feiyi Wang; Dalton Lunga

**ID:** 139655 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Crc1w3K3Ig>) | [PDF](<https://openreview.net/pdf?id=Crc1w3K3Ig>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139655>)

Sparse mixture\-of\-experts \(MoE\) models raise a natural inference\-time question: can experts not selected by the router improve predictions or estimate their errors without retraining? We study this question in vision MoEs across five RGB and multispectral classification datasets and multiple expert counts\. We evaluate additional expert inference for three outcomes: top\-1 accuracy, raw ranking of default router errors, and calibrated prediction of whether the router\-selected classification is wrong\. An upper\-bound analysis shows that non\-selected experts often contain useful class signal when the routed path fails\. However, this signal does not reliably improve deployable top\-1 accuracy, and raw multi\-forward uncertainty scores yield only limited gains for ranking router errors\. The strongest benefit appears in calibrated router\-error prediction: post\-hoc models that combine router signals with features from non\-selected experts reduce Router\-error Expected Calibration Error \(ECE\) by roughly 10\-13% on average, with several settings exceeding 20% relative improvement over a calibrated router\-only baseline\. Overall, additional inference\-time expert usage in vanilla vision MoEs is most useful for estimating the reliability of the routed decision, rather than directly improving classification accuracy\.

## TensorCommitments: A Lightweight Verifiable Inference for Large Language Models

**Authors:** Oguzhan Baser; Elahe Sadeghi; Eric Wang; Nico Vergauwen; Sam Kazemian; Hong Kang; Sandeep Chinchali; Sriram Vishwanath

**ID:** 150256 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jYSZwwreXP>) | [PDF](<https://openreview.net/pdf?id=jYSZwwreXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150256>)

Most large language models \(LLMs\) run on external clouds: users send a prompt, pay for inference, and must trust that the remote GPU executes the LLM without any adversarial tampering\. We critically ask how to achieve verifiable LLM inference, where a prover \(the service\) must convince a verifier \(the client\) that an inference was run correctly without rerunning the LLM\. Existing cryptographic works are too slow at the LLM scale, while non\-cryptographic ones require a strong verifier GPU\. We propose TensorCommitments \(TCs\), a tensor\-native proof\-of\-inference scheme\. TC binds the LLM inference to a commitment, an irreversible tag that breaks under tampering, organized in our multivariate Terkle Trees\. For LLaMA2, TC adds only 0\.97% prover and 0\.12% verifier time over inference while improving robustness to tailored attacks by up to 48% over the best prior work requiring a verifier GPU\.

## Cognitive bias benchmarks should incorporate insights from ecological rationality

**Authors:** David Thorstad

**ID:** 140124 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0xGmHXiwbV>) | [PDF](<https://openreview.net/pdf?id=0xGmHXiwbV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140124>)

Recent studies suggest that large language models \(LLMs\) exhibit a range of cognitive biases familiar from human cognition\. This paper argues that $\\textbf\{cognitive bias benchmarks should incorporate insights from ecological rationality\}$, a leading paradigm in the study of cognitive bias\. Three strategies for resisting some existing allegations of cognitive bias are extracted from the ecological rationality paradigm\. Each strategy is used to generate a concrete recommendation for improving cognitive bias benchmarks\.

## FedCF: Fair Federated Conformal Prediction

**Authors:** Anutam Srinivasan; Aditya T\. Vadlamani; Amin Meghrazi; Srinivasan Parthasarathy

**ID:** 152149 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VAwYqelahI>) | [PDF](<https://openreview.net/pdf?id=VAwYqelahI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152149>)

Conformal Prediction \(CP\) is a widely used technique for quantifying uncertainty in machine learning models\. In its standard form, CP offers probabilistic guarantees on the coverage of the true label, but it is agnostic to sensitive attributes in the dataset\. Several recent works have sought to incorporate fairness into CP by ensuring conditional coverage guarantees across different subgroups\. One such method is Conformal Fairness \(CF\)\. In this work, we extend the CF framework to the Federated Learning setting and discuss how we can audit a federated model for fairness by analyzing the fairness\-related gaps for different demographic groups\. We empirically validate our framework by conducting experiments on several datasets spanning multiple domains, fully leveraging the exchangeability assumption\.

## Exact Unlearning via Quantized Sufficient Statistics

**Authors:** Ami Tavory; Shripad Gade; Tal Sarig; Noam Touitou; Ido Guy

**ID:** 152457 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SyxiOl962F>) | [PDF](<https://openreview.net/pdf?id=SyxiOl962F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152457>)

Exact machine unlearning guarantees that after deleting a user's data, the model produces the same predictions as if it had never seen that data in the first place\. SISA, the current state\-of\-the\-art approach, partitions data into disjoint shards, with necessary $O\(n/S\)$ retraining cycle for each deletion, and it cannot lower this cost through redundancy, because overlapping shards only multiply the damage\.We introduce Quantized Sufficient Statistics \(QSS\), a non\-parametric framework that pairs frozen prediction heads \(the schema, trained on a small random subset $\\mathcal\{D\}^\{\\circ\}$\) with mutable sum\-decomposable accumulators indexed by Residual Quantization codes over the complementary data \(the content, $\\mathcal\{D\} \\setminus \\mathcal\{D\}^\{\\circ\}$\)\. With probability $1\{\-\}\\rho$ \(where $\\rho = \|\\mathcal\{D\}^\{\\circ\}\|/n$, typically $\\leq 1\\%$\), deletion reduces to a constant\-time arithmetic update independent of dataset size $n$; with probability $\\rho$, a full rebuild is required\. Maintaining $p$ independent schemas suppresses the synchronous rebuild probability to $\\rho^p$, and because every schema aggregates all data, decommissioning incurs zero accuracy loss\. Across 15 datasets \($n \\geq 50$K\) spanning vision, text, and tabular modalities at $\\rho=0\.5\\%$, QSS matches or exceeds SISA accuracy on 5 datasets, trails by $\\leq 2$ pp on 5 more, and by 3–11 pp on 3 datasets where high class count or large rebuild cost limits performance, while delivering 3–645$\\times$ faster median expected deletion \(e\.g\., 0\.2 s expected vs\. 109 s on Jigsaw, $n=1\.4$M\)\.

## Alleviating Hallucination with Training\-Free Uncertainty\-Guided Steering

**Authors:** Litian Liu; Yubing Jian; Qiqi Hou; Reza Pourreza; Mohammad Ghavamzadeh; Yao Qin; Roland Memisevic; Herbert Cai

**ID:** 148795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2TDfSvdkb>) | [PDF](<https://openreview.net/pdf?id=v2TDfSvdkb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148795>)

Recent work on hallucination detection in large language models has shown that, for a fixed pre\-trained model    and reasoning task, it is possible to estimate the model’s confidence in the correctness of its outputs\.    Such uncertainty estimates have primarily been used to improve truthfulness by detecting or filtering confabulations\.    In this work, we ask whether these signals can instead be used more proactively to directly improve the accuracy    of model\-generated answers\.   We propose USteer, a simple, training\-free steering mechanism that adjusts a model’s layer\-wise activations during inference    using the gradient of a confidence with respect to the activations\. This procedure nudges generation toward outputs    with lower uncertainty at inference time, without modifying model parameters or requiring additional    supervision\. We show that this approach consistently reduces hallucination across a range of tasks,    demonstrating that confidence signals can be leveraged not only for detection, but also for effective    inference\-time control of model behavior\.

## Persuasive Prediction via Decision Calibration

**Authors:** Jingwu Tang; Jiahao Zhang; Fei Fang; Steven Wu

**ID:** 152558 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SEBdVdqbdq>) | [PDF](<https://openreview.net/pdf?id=SEBdVdqbdq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152558>)

Bayesian persuasion, a central model in information design, studies how a sender, who privately observes a state drawn from a prior distribution, strategically sends a signal to influence a receiver's action\. A key assumption is that both sender and receiver share the precise knowledge of the prior\. Although this prior can be estimated from past data, such assumptions break down in high\-dimensional or infinite state spaces, where learning an accurate prior may require a prohibitive amount of data\. In this paper, we study a learning\-based variant of persuasion, which we term persuasive prediction\. This setting mirrors Bayesian persuasion with large state spaces, but crucially does not assume a common prior: the sender observes covariates $X$, learns to predict a payoff\-relevant outcome $Y$ from past data, and releases a prediction to influence a population of receivers\. To model rational receiver behavior without a common prior, we adopt a learnable proxy: \*decision calibration\*, which requires the prediction to be unbiased conditioned on the receiver's best response to the prediction\. This condition guarantees that myopically responding to the prediction yields no swap regret\. Assuming the receivers best respond to decision\-calibrated predictors, we design a provably efficient algorithm that learns a decision\-calibrated predictor within a randomized predictor class that optimizes the sender's utility\. In the commonly studied single\-receiver case, our method matches the utility of a Bayesian sender who has full knowledge of the underlying prior distribution\. Finally, we extend our algorithmic result to a setting where receivers respond stochastically to predictions and the sender may randomize over an infinite predictor class\.

## SPANUQ: Span\-Level Uncertainty Quantification for Large Language Model Generation

**Authors:** Yimeng Zhang; Yingying Zhuang; Ziyi Wang; Yuxuan Lu; Pei Chen; Aman Gupta; Zhe Su; Ming Tan; Zhilin Zhang; Qun Liu; Manikandarajan Ramanathan; Rajashekar Maragoud; Edward Vul; Jing Huang; Dakuo Wang

**ID:** 150088 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kn5hr1973d>) | [PDF](<https://openreview.net/pdf?id=kn5hr1973d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150088>)

Uncertainty estimation is essential not only for the trustworthy deployment of large language models \(LLMs\) but also as a foundation for self\-refinement in LLM generation\. However, existing approaches operate at suboptimal granularities: token\-level scores lack semantic coherence, while sequence\-level scores fail to localize errors\. We formalize Span\-Level Uncertainty Estimation \(SLUE\), a new task that targets the natural granularity for uncertainty: semantically coherent text spans, each conveying a single assessable unit of meaning\. To address this task, we introduce SPANUQ, a lightweight \($\\sim$25M parameter\) probe that distills the uncertainty knowledge from expensive multi\-sample inference into a single forward pass over LLM hidden states\. SPANUQ employs a DETR\-style span decoder to simultaneously detect spans and estimate their uncertainty via a Mixture of Beta distribution, trained with a principled combination of Beta NLL regression and contrastive ranking objectives\. We construct SPANUQ\-BENCH, the first span\-level uncertainty benchmark comprising 20K prompts, $\\sim$293K annotated spans, and continuous soft labels derived from multi\-sample claim verification\. Experiments on five LLM backbones show that SPANUQ consistently achieves the best span\-level uncertainty quality \(AUROC 0\.908–0\.944, MAE 0\.110–0\.129\), outperforming the strongest probe baseline and all sampling\-based methods while being $10$\-\-$20\\times$ faster\. Its DETR\-based span detector attains 0\.910 F1, surpassing the best heuristic by 39\.4\\%, enabling precise error localization that sequence\-level methods cannot provide\. The framework generalizes across five LLMs spanning two model families \(AUROC 0\.908\-\-0\.944\), and we additionally observe that sequence\-level uncertainty is partially decomposable: the learned importance\-weighted span composition achieves $\\rho\_\{\\text\{seq\}\} = 0\.839$, suggesting that span\-level estimation subsumes sequence\-level as a special case\.

## MarkTune: Improving the Quality\-Detectability Trade\-off in Model\-Embedded LLM Watermarking

**Authors:** Yizhou Zhao; Steven Wu; Adam Block

**ID:** 155648 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=42tU2vcTxH>) | [PDF](<https://openreview.net/pdf?id=42tU2vcTxH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155648>)

Language model watermarking schemes fall into two broad categories: inference\-time methods, which modify the decoding process at generation time, and model\-embedded methods, which encode a secret signal directly into the model weights\. Inference\-time watermarking methods incur additional inference overhead and are not applicable in the increasingly prevalent open\-weight model settings\. In contrast, model\-embedded watermarks introduce no additional inference latency\-\-\-generation uses the standard sampling pipeline\-\-\-and are particularly well\-suited to open\-weight settings\. However, existing model\-embedded approaches such as GaussMark face a fundamental quality\-detectability trade\-off: achieving strong detection power typically requires weight perturbations that noticeably degrade generation quality\. We introduce MarkTune, a theoretically grounded on\-policy fine\-tuning framework that treats the GaussMark detection statistic as a reward while explicitly regularizing for text quality\. Empirically, MarkTune substantially improves the quality\-detectability frontier of GaussMark, approaching the detectability of strong inference\-time schemes while preserving generation quality and downstream task performance\. MarkTune is also extremely robust to paraphrasing and fine\-tuning attacks, and generalizes across datasets: models fine\-tuned on one corpus retain substantial detection power on unseen data\.

## Response Time Enhances Alignment with Heterogeneous Preferences

**Authors:** Federico Echenique; Alireza Fallah; Baihe Huang; Michael Jordan

**ID:** 150008 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lSacVQkH6p>) | [PDF](<https://openreview.net/pdf?id=lSacVQkH6p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150008>)

Aligning large language models \(LLMs\) to human preferences typically relies on aggregating pooled feedback into a single reward model\. However, this standard approach assumes that all labelers share the same underlying preferences, ignoring the fact that real\-world labelers are highly heterogeneous and usually anonymous\. Consequently, relying solely on binary choice data fundamentally distorts the learned policy, making the true population\-average preference unidentifiable\. To overcome this critical limitation, we demonstrate that augmenting preference datasets with a simple, secondary signal—the user's response time—can restore the identifiability of the population's average preference\. By modeling each decision as a Drift\-Diffusion Model \(DDM\), we introduce a novel, consistent estimator of heterogeneous preferences that successfully corrects the distortions of standard choice\-only labels\. We prove that our estimator asymptotically converges to the true average preference even in extreme cases where each anonymous labeler contributes only a single choice\. Empirically, across both synthetic and real\-world datasets, our method consistently outperforms standard baselines that otherwise fail and plateau at a bias floor\. Because response times are essentially free to record and require zero user tracking or identification, our results bring promises and open up new opportunities for future data\-collection pipelines to improve the social benefit without requiring user\-level identifiers or repeated elicitations\.

## Conformal Prediction with Paraphrase\-Aware Scoring for LLM Uncertainty Quantification

**Authors:** Jiayi Xin; Evan Qiang; Zihan Zhu; Xiang Li; Weijie Su; Qi Long

**ID:** 152533 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SRr3j0cdl9>) | [PDF](<https://openreview.net/pdf?id=SRr3j0cdl9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152533>)

Uncertainty quantification \(UQ\) for large language models \(LLMs\) aims to provide reliable measures of predictive confidence, yet current methods often fail to remain stable under simple, meaning\-preserving perturbations\. We identify an important source of instability: semantically equivalent paraphrases of the same input can induce substantial variability in predictive confidence, even for methods with formal guarantees such as conformal prediction\. To address this issue, we propose a paraphrase\-aware UQ framework that explicitly enforces invariance to semantic rewordings\. Instead of relying on a single input, our approach constructs uncertainty scores by aggregating predictions across a set of its paraphrases, using a lightweight proxy model to produce calibrated and comparable outputs\. This aggregation yields uncertainty estimates that are both more stable and more informative, while remaining compatible with conformal calibration techniques to retain coverage guarantees\. Across multiple UQ benchmarks and model families, our method achieves nominal coverage with smaller and more stable prediction sets under paraphrase perturbations\. Code is available at https://anonymous\.4open\.science/r/PA\_Score\-8C0D\.

## Is Decentralized LLM Agent RL Robust to Heterogeneity? An Asymmetric Tale

**Authors:** Canyu Chen; Kangyu Zhu; Zhaorun Chen; Zhanhui Zhou; Shizhe Diao; Yiping Lu; Tian Li; Manling Li; Dawn Song

**ID:** 152469 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SsF2kYJfYC>) | [PDF](<https://openreview.net/pdf?id=SsF2kYJfYC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152469>)

Training AI agents powered by Large Language Models \(LLMs\) typically requires centralized access to user data, raising privacy and scalability concerns\. We explore FedAgent, a decentralized reinforcement learning paradigm that collaboratively trains LLM agents across distributed clients without sharing local data\. The central reliability question is: Is FedAgent effective under uniform client distribution, and more importantly, is it robust to client heterogeneity? For the former, we provide the first empirical evidence that FedAgent matches Centralized Agent Training and outperforms Local Agent Training\. For the latter, we first formalize Agent Heterogeneity at two structurally distinct levels: task\-level \(what clients ask the agent to do\) and environment\-level \(the dynamics in which the agent acts\), anchored on the Input\-Dynamics Asymmetry of task\-augmented MDPs, referring to the architectural fact that tasks enter the policy through its input channel, while environments do not\. Then, we theoretically establish an Asymmetric Robustness Mechanism: FedAgent is robust to task\-level heterogeneity but non\-robust to environment\-level heterogeneity\. We further identify three sufficient conditions under which FedAgent recovers robustness despite environment\-level heterogeneity, and illustrate four possible training\-curve patterns\. On real\-world agent benchmarks WebShop and ALFWorld, we empirically verify that FedAgent remains robust under extreme task\-level heterogeneities and traces a stable\-degrade\-collapse spectrum under environment\-level heterogeneities\.

## Calibeating Prediction\-Powered Inference

**Authors:** Lars van der Laan; Mark van der Laan

**ID:** 150100 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kh57rITtAA>) | [PDF](<https://openreview.net/pdf?id=kh57rITtAA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150100>)

Prediction\-powered inference uses black\-box predictions to improve estimation from small labeled samples and large unlabeled samples, but raw prediction scores are often miscalibrated and can be inefficient regression adjustments\. We study semisupervised mean estimation with a black\-box score, a small labeled sample, and a large unlabeled sample\. AIPW and PPI give valid inference for fixed or cross\-fitted scores, but their efficiency depends on how well the score predicts the outcome\. We propose \\emph\{calibrated prediction\-powered inference\}: post\-hoc calibrate the score on the labeled sample, then average the calibrated predictions over the pooled covariate sample\. The estimator requires no retraining, takes a simple plug\-in form, and has an exact AIPW representation\. For linear calibration, we show first\-order equivalence to PPI\+\+\. For isotonic calibration, we establish asymptotic normality, valid Wald inference, and \`\`calibeating" guarantees: isotonic post\-processing improves the score as a predictor and as a first\-order regression adjustment within the monotone class, and subsequent score\-only post\-processing yields no additional first\-order gain\. We also show that the original PPI estimator is a special case of AIPW and can be inefficient when the prediction score is already accurate\. Simulations, benchmark reproductions, and an LLM\-evaluation application show that calibrated estimators often improve on PPI and are competitive with AIPW and PPI\+\+\.

## Efficient Analytic Uncertainty Quantification for Multimodal Regression

**Authors:** Kun Jin; James Harrison; Jiawei Li; Sihan Liu; Jiayi Liu; Randy Linderman; Yuening Li; Arnab Bhadury; Sourabh P Bansod; Liang Liu; Jasper Snoek

**ID:** 153892 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HwWUMaIRkr>) | [PDF](<https://openreview.net/pdf?id=HwWUMaIRkr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153892>)

Efficient uncertainty quantification \(UQ\) is essential for trustworthy large\-scale learning\. Existing UQ methods for regression tasks mainly operate under the assumption that the conditional label marginal satisfies single\-peak parametric models, e\.g\., Gaussians, where the negative log\-likelihood function simplifies to the mean square error\.  However, such single\-peak assumptions fail in regression tasks featuring multi\-modal distributions\. On the other hand, semi\-parametric methods which achieve strong regression performance for multi\-modal distributions often lack efficient quantification on their prediction variances\.  In this work, we extend UQ techniques based on Variational Bayesian Inference \(VBI\) to two widely used semi\-parametric regression models that yield histogram\-like reconstructions of the conditional label densities: Quantile Regression \(QR\) and Classification Restoration \(CR\)\. Our approach introduces a unified, distribution\-agnostic framework that simultaneously achieves accurate estimation of complex conditional distributions and highly efficient UQ\. Theoretically, our method is grounded in novel formulations of QR and CR within the VBI framework, yielding analytic Evidence Lower Bounds \(ELBO\) to streamline training and a closed\-form or analytically approximated predictive density for efficient inference\. Empirically, we evaluate our methods on three large\-scale regression benchmarks with multi\-modal label distributions\. Our framework outperforms state\-of\-the\-art multi\-modal regression baselines, and even matches predictive performance of computationally expensive ensemble models\. Furthermore, by leveraging epistemic uncertainty estimation, our approach enables highly data\-efficient active learning strategies\.

## Rethinking Psychometric Evaluation of LLMs: When and Why Self\-Reports Predict Behavior

**Authors:** Rafal Kocielnik; Pengrui Han; Peiyang Song; Myrl Marmarelis; Ramit Debnath; Dean Mobbs; Animashree Anandkumar; R\. Michael Alvarez

**ID:** 150039 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lEX44N0oQW>) | [PDF](<https://openreview.net/pdf?id=lEX44N0oQW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150039>)

Anticipating LLM behavioral tendencies from low\-cost psychometric probes is critical for safe deployment, but only if self\-reports \(SR\) reliably predict behavior\. Recent work documented substantial SR–behavior dissociation in LLMs, but relied on broad personality traits \(Big 5\) that predict specific behaviors weakly even in humans\. Furthermore, the isolation of conversational sessions combined with weak context matching left open whether LLMs truly lack coherence or whether the conditions needed to detect such coherence were not met\. We contrast Big 5 with the Theory of Planned Behavior \(TPB\), which measures intention targeted to a specific behavior and predicts human behavior substantially better than broad traits\. We run experiments across four behavioral tasks and 11 frontier LLMs, while also varying session context and identity induction\. We find that SR–behavior coherence exists but is selective\. 1\) Within a shared conversation, Theory of Planned Behavior reaches human\-level coherence; Big 5 does not\. 2\) Across separate conversations, coherence survives only for behaviors anchored outside the immediate prompt, such as implicit bias shaped by training, and collapses when behavior is strongly primed by context, as with sycophancy\. 3\) Persona prompting makes self\-reports more consistent across conversations but does not bring behavior into alignment\. These findings suggest that coarse personality frameworks such as Big 5 may not be the best tools for testing deployment behavior\. More task\- and behavior\-specific instruments are needed, and even these must be evaluated across tasks and contexts\.

## ClusQuant: Mitigating Outliers with Clustering\-Based Representations for Low\-Precision LRMs

**Authors:** Xingyu Liu; Xiangyang Yin; Tianhua Xia; Haiyu Wang; Sai Qian Zhang

**ID:** 150265 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jS7aRiV05d>) | [PDF](<https://openreview.net/pdf?id=jS7aRiV05d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150265>)

Large reasoning models \(LRMs\) improve task performance by generating longer intermediate reasoning traces, but this substantially increases inference costs and makes low\-precision deployment increasingly important\. However, aggressive quantization often performs poorly on reasoning tasks\. Beyond error accumulation across autoregressive generation, we observe that activations exhibit significantly higher variability during the early decoding steps of thinking, making conventional calibration and uniform quantization less effective\. To address these reasoning\-specific quantization challenges, we propose \\textbf\{ClusQuant\}, a clustering\-based LUT quantization framework for low\-precision large reasoning models\. ClusQuant strengthens outlier mitigation through rotation and scaling transformations, uses clustering\-based representations to better fit non\-uniform activation distributions, and replaces fixed codebook sizes with an adaptive clustering strategy that allocates codebook capacity according to layer\-wise quantization difficulty\. Guided by our observation of reasoning\-time activation behavior, ClusQuant further improves calibration sample selection to better match actual decoding statistics\. Combined with our customized LUT CUDA kernel, ClusQuant delivers substantial accuracy improvements on reasoning benchmarks while achieving $2\.85\\times$ speedup\.

## Strategic Decision Support for AI Agents

**Authors:** Shayan Kiyani; Sima Noorani; George J\. Pappas; Hamed Hassani

**ID:** 149381 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qUvsQBmDZg>) | [PDF](<https://openreview.net/pdf?id=qUvsQBmDZg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149381>)

Traditionally, decision support studies how humans use machine learning models to make better decisions\. In modern agentic systems, this division of roles is increasingly reversed: AI agents act on behalf of users, while humans and tools becomes support mechanisms around them\. This role reversal brings reliability concerns to the forefront, since agentic errors can be consequential and agent behavior must remain aligned with human goals and constraints\. Departing from the classical view of decision support, we revisit its two basic principles, the cost\-\-value tradeoff of seeking support and the role of uncertainty quantification, in a setting where AI agents are the central actors\. We propose a framework for strategic decision support for AI agents through an optimization problem that minimizes support usage subject to controlling a counterfactual missed\-support error: the probability that the agent acts alone on instances where support would have materially improved its output\. At the population level, we show that the optimal policy is a threshold rule on the value of support \. Building on this structure, we develop an online algorithm that adaptively thresholds such a score and uses randomized exploration to control missed\-support error without distributional assumptions\. We further introduce a calibration\-on\-the\-fly method that reduces unnecessary support calls online\. We instantiate this framework across diverse scenarios, including information gathering, human\-\-AI collaboration, and tool use, showing how each can be modeled through the same strategic decision\-support lens\. Experiments across these settings show that our method reliably controls the target error while substantially reducing support usage in practice\.

## FILOsofer: A TEE\-Shielded Model Partitioning Framework based on Fisher Information\-Guided LoRA Obfuscation

**Authors:** Fan zhang; Ziqi Zhang; Hossein Khalili; Neiro Cabrera; Jonathan Xue; Nader Sehatbakhsh

**ID:** 148574 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrEeZDfTbu>) | [PDF](<https://openreview.net/pdf?id=wrEeZDfTbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148574>)

On\-device machine learning exposes deep neural networks as white\-box artifacts, making them vulnerable to model\-stealing attacks\. Trusted Execution Environments \(TEEs\) mitigate this risk by isolating model execution, but running entire models inside TEEs incurs prohibitive overhead\. To balance security and efficiency, prior work proposes TEE\-Shielded DNN Partitioning \(TSDP\), which executes privacy\-insensitive components on GPUs while confining sensitive layers to TEEs\.  We demonstrate that existing TSDP schemes remain vulnerable because exposed GPU weights provide an effective warm start\. This allows adversaries to exploit inevitable information leakage and reconstruct high\-fidelity surrogates using only a fraction of the training data\. To address this vulnerability, we propose FILOsofer, a principled defense that strategically obfuscates exposed weights using Fisher Information\. By deliberately rendering leaked weights misleading, FILOsofer steers an adversary’s initialization away from the true optimum\. To recover user\-side accuracy, we introduce a novel cross\-layer LoRA mechanism that efficiently restores performance while storing only lightweight LoRA parameters inside the TEE\. Extensive evaluation in real\-world settings shows that FILOsofer achieves black\-box–equivalent security in the worst case, while reducing computational overhead by more than $50\\times$ compared to prior approaches\.

## Who, Where, and What? Forensic Localization in LLM\-Based Multi\-Agent Systems

**Authors:** ANJUN GAO; Yueyang Quan; Yufei Xia; Zhuqing Liu; Minghong Fang

**ID:** 152265 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UMANMGt0wj>) | [PDF](<https://openreview.net/pdf?id=UMANMGt0wj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152265>)

LLM\-based multi\-agent systems extend single agents with role specialization and inter\-agent communication, but they also expand the attack surface: an attacker can compromise an externally writable module of one agent, and the malicious payload may propagate across communication hops before some downstream agent invokes an attacker\-chosen tool\. Existing defenses are routinely circumvented by stronger or adaptive attacks, which motivates a complementary forensic capability that traces an incorrect tool invocation back to its root cause\. We formulate this problem as three\-level forensic localization, where the goal is to jointly identify the source agent whose internal state was first compromised, the specific module of that agent that was exploited, and the exact units inside that module carrying the malicious payload\. To enable systematic evaluation, we construct MAFL\-Bench, the first forensic localization benchmark for LLM\-based multi\-agent systems, which spans three application scenarios, four communication structures, and twelve attack instances, with 21,200 interaction logs annotated at the agent, module, and unit levels\. We further propose MATracer, a black\-box forensic framework that resolves the three\-level attribution through a coarse\-to\-fine cascade driven by log\-likelihood queries on a proxy LLM, progressively localizing the source agent, the compromised module, and the contaminated units\. Extensive experiments show that MATracer accurately localizes the attack across diverse multi\-agent settings, consistently outperforms ten baselines, and remains robust under adaptive attacks\.

## Beyond Marginal Coverage: Efficient Localized Conformal Prediction via Residual Rank Calibration

**Authors:** Xiangshi Li; Wenqing He

**ID:** 153265 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MYBb7WHPyQ>) | [PDF](<https://openreview.net/pdf?id=MYBb7WHPyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153265>)

Conformal prediction provides finite\-sample marginal coverage guarantees under exchangeability, but marginal validity alone does not ensure that prediction intervals adapt to local structure in the conditional distribution\. Existing adaptive methods such as conformalized quantile regression \(CQR\) and conformal histogram regression \(CHR\) improve conditional coverage by incorporating estimated quantiles or conditional densities into the conformity score, but doing so requires direct estimation of the conditional distribution of response $Y$ given covariates $X$, which can be statistically and computationally demanding\. We propose RLR\-CHR, a residual\-based local rank conformal histogram regression method that sidesteps full conditional distribution estimation by decoupling location and scale effects via a learned noise proxy and constructing histogram\-based conformity scores on the standardized residuals\. Local calibration is then performed through rank comparisons rather than weighted conformal quantiles, yielding a procedure that is both localized and computationally efficient\. We establish finite\-sample marginal coverage for RLR\-CHR under exchangeability and asymptotic conditional coverage under local stability of the residual score distribution\. We further prove that RLR\-CHR is asymptotically equivalent to its weighted\-localization counterpart RBC\-CHR under suitable regularity conditions, providing a precise theoretical justification for the reduction in per\-query computational cost without sacrificing asymptotic accuracy\. Experiments on synthetic and real datasets demonstrate that RLR\-CHR consistently improves worst\-slab coverage and produces more compact prediction intervals than existing conformal approaches\.

## Tcell: Mitigating Harmful Fine\-tuning for Large Language Models via Gradient Alignment

**Authors:** Tiansheng Huang; Virat Vishnu Shejwalkar; Oscar Chang; Ling Liu

**ID:** 155716 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Rc9uH2uQ1>) | [PDF](<https://openreview.net/pdf?id=3Rc9uH2uQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155716>)

Harmful fine\-tuning attack becomes a concerning safety risk for mainstream fine\-tuning\-as\-a\-service providers, as attackers can submit harmful data to the API to compromise the safety alignment of the large language models\. In this paper, we first explore an intuitive gradient mixing solution, and derive a key property ensuring the success of defense \-\- \\emph\{taking a fine\-tuning update that has higher cosine similarity with the safety gradient can mitigate harmful fine\-tuning\.\} Motivated by this key property, we design an alignment\-stage defense, dubbed Tcell\. The core contribution of Tcell is a regularizer that align the harmful gradient and the safety gradient during safety alignment, which ensures the harmful fine\-tuning update exhibits high cosine similarity with the safety gradient, achieving \\emph\{gradient alignment\}\. The benefit of gradient alignment is supported by  i\) empirical and theoretical interpretation and ii\) comparison to alternative design without gradient alignment\. Code is available at https://anonymous\.4open\.science/r/Tcell\-1C15/\.

## The Type Theory of Stationary MDPs: Rare Events and Uncertainty Quantification

**Authors:** Imon Banerjee; Sayak Chakrabarty; Ramkrishna Jyoti Samanta; Riddhiman Bhattacharya

**ID:** 151895 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X92FFAYPKL>) | [PDF](<https://openreview.net/pdf?id=X92FFAYPKL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151895>)

The method of types, pioneered by Csiszar \(1998\), uses combinatorial arguments to approximate the probabilities of empirical measures and has become a standard tool for deriving error rates in hypothesis testing, source coding, and related information\-theoretic problems\. Although the technique is widely used across machine learning, computer science, and econometrics, rigorous type\-theoretic guarantees for stationary Markov decision processes and reinforcement learning remain limited\. This paper addresses that gap by developing a method\-of\-types framework for the empirical pair measure of the state\-\-action process of a stationary Markov decision process\. We establish finite\-sample type bounds for the state\-\-action process and characterize the associated entropy cost through the conditional Kullback\-\-Leibler divergence relative to the true pair kernel\. These results yield large deviation principles for learned MDP dynamics and variational rate functions for plug\-in value\- and Q\-function estimators in offline reinforcement learning\. We further develop finite\-sample uncertainty\-quantification and hypothesis\-testing guarantees based on KL uncertainty sets, including applications to pessimistic value and Q\-function estimation under model misspecification\. Finally, we apply the same framework to universal source coding and obtain explicit coding error exponents for controlled Markov trajectories\. Together, these results provide a unified type\-theoretic approach to rare\-event analysis, uncertainty quantification, offline reinforcement learning, and information\-theoretic coding for finite controlled Markov systems\.

## Systematic Scaling Analysis of Jailbreak Attacks in Large Language Models

**Authors:** Xiangwen Wang; Ananth Balashankar; Varun Chandrasekaran

**ID:** 149552 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pIEAacruEN>) | [PDF](<https://openreview.net/pdf?id=pIEAacruEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149552>)

Large language models remain vulnerable to jailbreak attacks, yet we still lack a systematic understanding of how jailbreak success scales with attacker effort across methods, model families, and harm types\. We initiate a scaling\-law framework for jailbreaks by treating each attack as a compute\-bounded optimization procedure and measuring progress on a shared FLOPs axis\. Our systematic evaluation spans four representative jailbreak paradigms, covering optimization\-based attacks, self\-refinement prompting, sampling\-based selection, and genetic optimization, across multiple model families and scales on a diverse set of harmful goals\. We investigate scaling laws that relate attacker budget to attack success score by fitting a simple saturating exponential function to FLOPs\-\-success trajectories, and we derive comparable efficiency summaries from the fitted curves\. Empirically, prompting\-based paradigms tend to be the most compute\-efficient compared to optimization\-based methods\. To explain this gap, we cast prompt\-based updates into an optimization view and show via a same\-state comparison that prompt\-based attacks more effectively optimize in prompt space\. We also show that attacks occupy distinct success\-\-stealthiness operating points with prompting\-based methods occupying the high\-success, high\-stealth region\. Finally, we find that vulnerability is strongly goal\-dependent: harms involving misinformation are typically easier to elicit than other non\-misinformation harms\.

## Argus: A Cross\-Regime Benchmark for the Transferability of Uncertainty Quantification in Computer\-Use Agents

**Authors:** DIVAKE KUMAR; Sina Tayebati; Devashri Naik; Amanda Rios; Nilesh Ahuja; Omesh Tickoo; Ranganath Krishnan; Amit Trivedi

**ID:** 139443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcafO7KeeW>) | [PDF](<https://openreview.net/pdf?id=PcafO7KeeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139443>)

Computer\-use agents turn visual predictions into executable GUI clicks, so uncertainty estimates must support rejection, calibration, miss\-severity ranking, and spatial safety regions\. Existing post\-hoc uncertainty quantification \(UQ\) evidence is fragmented across isolated model and dataset pairs, leaving unclear whether UQ rankings remain stable when the agent, benchmark, or observable interface changes\. We present a cross\-regime benchmark for post\-hoc UQ in single\-step executable GUI grounding, covering a 27\-method, seven\-family open\-weight matrix over 4 GUI\-grounding VLM agents and 4 datasets, plus an 8\-method API\-compatible closed\-source matrix across 3 frontier vendors where logits, hidden states, and attention maps are unavailable\. The main finding is selective transfer: UQ rankings are stable across datasets for a fixed model, but degrade across model classes and observable interfaces\. Hidden\-state and density methods form the most stable open\-weight family, while CoCoA\-1MCA, Focus, sampling\-based scores, and verbalised self\-assessment win in specific regimes\. Ranking transfer is strongest within a fixed model across datasets, reaching Spearman $\\rho=0\.969$ and averaging $\\rho=0\.705$ over 120 open\-weight pairs\. In contrast, open\-weight to closed\-source transfer is the strongest break: cross\-tier Spearman $\\rho$ averages only $\+0\.08$ over 12 vendor x dataset pairs on the shared 8\-method intersection, indicating that UQ recommendations do not survive removal of internal model signals\. Model\-class transitions further reshape UQ preferences: attention, verbalised, and VLM\-native families lose AUROC on every dataset, while density methods remain stable; a scale\-only baseline shows that logit\-family degradation on ScreenSpot\-Pro is partly confounded by scale rather than grounding fine\-tuning alone\. Finally, conformal click regions show that score\-level discrimination is not enough for deployment: locally weighted disks can shrink radii by 40\-60% when the plug\-in UQ is calibrated, but coverage can degrade under calibration\-test or interface mismatch\. We release per\-item records, calibration/test splits, UQ scores, and analysis scripts as a reproducible basis for regime\-aware UQ selection in GUI agents\.

## Calibration without labels in multiple testing

**Authors:** Adway S Wadekar; Jake A Soloff

**ID:** 150447 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hy5oPeNUEK>) | [PDF](<https://openreview.net/pdf?id=hy5oPeNUEK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150447>)

Large\-scale hypothesis testing supports probability claims about individual hypotheses, as in empirical Bayes methods for estimating local false discovery rates\. We study how such claims can be interpreted as approximately calibrated forecasts of the null hypothesis, yielding interpretable error probabilities even under model misspecification\. Our approach draws conceptual inspiration from probabilistic forecasting but addresses a different challenge: unlike forecasting, where labels are eventually observed, in multiple testing the ground truth is never revealed, so calibration must be assessed stochastically and established indirectly\. We address this challenge by constructing a set of pseudo\-labels, derived from the spacings of ordered $p$\-values, which have the local false discovery rate as their regression target\. Our construction unlocks existing tools for assessing and performing post\-hoc calibration in multiple testing\. Notably, we show that $q$\-values, a popular error measure based on the false discovery rate, can be severely miscalibrated\.

