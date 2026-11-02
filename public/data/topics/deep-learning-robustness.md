# Deep Learning / Robustness

深度学习 / 鲁棒性

140 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Optimal Transport Reweighting for Robust Learning under Spurious Correlations and Label Noise

**Authors:** Sung Ho Jo; Seonghwi Kim; Wonsang Yun; Minwoo Chae

**ID:** 149217 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s2EZiHa9PF>) | [PDF](<https://openreview.net/pdf?id=s2EZiHa9PF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149217>)

_Abstract unavailable from the accessible public sources._

## Less is More: Fewer Tokens and Blocks Make AIGI Detection Faster and More Generalizable

**Authors:** Haipeng Fang; Yixing Lu; Yu Li; Qiang Sheng; Juan Cao; Sheng Tang

**ID:** 150053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l7AUTUgcKZ>) | [PDF](<https://openreview.net/pdf?id=l7AUTUgcKZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150053>)

AI\-Generated Image \(AIGI\) Detection is becoming critical as generative models proliferate, yet existing detectors often generalize poorly by relying on narrow, dataset\-specific artifacts\. Many prior works improve generalization through additions, such as introducing extra artifact cues, pretraining models, training constraints, or test\-time operations, which may increase inference cost and model complexity\. In this paper, we take the opposite route and study generalization through subtractions and propose AID\-\-, a plug\-and\-play framework that improves transformer\-based AIGI detectors from both feature and parameter perspectives\. At the feature level, we introduce high\-order dependency ranking to identify and prune redundant or potentially misleading tokens for progressive token reduction; and at the parameter level, we design relative\-advantage head supervision and a class\-asymmetric exit rule to train depth\-specific early\-exit heads\. AID\-\- can be seamlessly integrated into transformer\-based AIGI detectors to improve both efficiency and out\-of\-distribution generalizability, which is experimentally validated on six public datasets\. For example, AID\-\- helps the detector Effort achieve up to a 2\.2× speedup while improving generalization accuracy by 3\.6% on GenImages\.

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

## Neurosymbolic Object\-Centric Learning with Distant Supervision

**Authors:** Stefano Colamonaco; David Debot; Giuseppe Marra

**ID:** 151324 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bMkCLL1wPH>) | [PDF](<https://openreview.net/pdf?id=bMkCLL1wPH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151324>)

Neurosymbolic learning can use symbolic rules to provide supervision for latent concepts from weak labels, but it commonly assumes that the entities referenced by these rules are already specified\. Object\-centric models decompose images into slot\-like representations; however, such slots are not necessarily aligned with the predicates required for symbolic reasoning\. We investigate object\-centric neurosymbolic learning under distant supervision, where the object\-level arguments of a logic program are learned directly from images using only global task labels\. We introduce DeepObjectLog, a probabilistic neurosymbolic model that integrates a slot\-based perceptual encoder with a probabilistic logic layer\. The encoder predicts objectness and class probabilities for candidate object representations, while the logic layer marginalizes over latent objectness and class assignments to compute the likelihood of the observed label\. This formulation provides a differentiable task\-level learning signal for object\-centric perception without requiring per\-object labels, masks, bounding boxes, or heuristic set matching\. Evaluations across diverse visual reasoning tasks demonstrate that DeepObjectLog achieves superior out\-of\-distribution generalization to compositional, object\-count, and rule shifts compared to neural object\-centric and standard neurosymbolic baselines\.

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

## Halt Fast\! Early Stopping for Certified Robustness

**Authors:** Andrew Cullen; Paul Montague; Benjamin Rubinstein

**ID:** 155955 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Zs088RXoL>) | [PDF](<https://openreview.net/pdf?id=1Zs088RXoL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155955>)

Randomized Smoothing provides rigorous robustness guarantees for neural networks without architectural constraints, yet its adoption is limited by extreme computational costs\. Standard RS requires tens of thousands of model evaluations per input and forces practitioners to commit to fixed sample sizes a priori\. In this work, we present a novel meta\-learning framework for anytime\-valid certified robustness that adaptively deploys computational resources\. By using a lightweight meta\-learner to predict image\-specific priors for a sequential E\-process, we achieve a 20\-fold reduction in sample complexity compared to traditional methods while maintaining rigorous statistical guarantees\. Beyond raw efficiency, we demonstrate how anytime\-validity enables adaptively allocating compute based upon application\-specific risk thresholds, a form of resource triage impossible under classic certification frameworks\. That this is achievable while also providing similar certification performance demonstrates that our approach provides a pathway for real\-time, safety\-critical certification deployments\.

## Improving Context\-Shift Robustness of Convolutional Networks via Context\-Regularized Cross\-Entropy

**Authors:** Jinen Setpal; Chaoyue Liu

**ID:** 150848 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eu0NxAFRN2>) | [PDF](<https://openreview.net/pdf?id=eu0NxAFRN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150848>)

_Abstract unavailable from the accessible public sources._

## Dual\-Granularity Learning for Regression with Continuous Noisy Labels

**Authors:** Hui GUO; Boyu Wang; Grace Yi

**ID:** 153289 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MNQLeuQSPM>) | [PDF](<https://openreview.net/pdf?id=MNQLeuQSPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153289>)

Learning with noisy labels has been extensively studied for classification, yet its regression counterpart remains relatively underexplored\. Unlike classification, regression involves continuous\-valued targets where label noise exhibits heterogeneous magnitudes across instances, which poses conflicting requirements on the model: correcting small\-to\-moderate deviations requires sensitivity to label values for instance\-level refinement, whereas large deviations caused by corrupted or outlying annotations render exact label values unreliable, necessitating reduced reliance on exact labels and instead leveraging ordinal structure among samples\. These requirements call for methods that capture both global structure and sample\-specific deviations in a unified manner\.   To this end, we propose GRAIN, a dual\-granularity framework for robust noisy regression\. At the fine\-grained level, we derive an explicit residual learning mechanism from a robust loss formulation, introducing instance\-specific auxiliary variables to decouple label noise from predictive signals\. At the coarse\-grained level, we introduce a binning\-based contrastive regularization that enforces an order\-preserving feature structure aligned with label proximity, addressing noise beyond the capacity of local residual refinement\. The two levels are coupled via a histogram\-based bridging mechanism that enables bidirectional information flow: coarse\-grained structural guidance establishes a well\-ordered feature space that anchors residual learning, while fine\-grained residual refinement corrects instance\-level deviations that structural regularization alone cannot resolve\. Experimental results show that GRAIN consistently improves robustness and generalization under diverse noise conditions\.

## DECEIVE\-AFC: Adversarial Claim Attacks against Search\-Enabled LLM\-based Fact\-Checking Systems

**Authors:** Haoran Ou; Kangjie Chen; Gelei Deng; Hangcheng Liu; Jie Zhang; Tianwei Zhang; Kwok\-Yan Lam

**ID:** 150419 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iB7Jo0DIUm>) | [PDF](<https://openreview.net/pdf?id=iB7Jo0DIUm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150419>)

_Abstract unavailable from the accessible public sources._

## When Uncertainty Is the Target: Adversarial Attacks on Uncertainty\-Aware Predictors

**Authors:** A Q M Sazzad Sayyed; Michele Caprio; Nathaniel D Bastian; Francesco Restuccia

**ID:** 148990 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tboXRmIA5a>) | [PDF](<https://openreview.net/pdf?id=tboXRmIA5a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148990>)

_Abstract unavailable from the accessible public sources._

## LOFT: Low\-Rank Orthogonal Fine\-Tuning via Task\-Aware Support Selection

**Authors:** Lanxin Zhao; Bamdev Mishra; Pratik Kumar Jawanpuria; Lequan Lin; Dai Shi; Junbin Gao; Andi Han

**ID:** 154983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9RrKYAh9GU>) | [PDF](<https://openreview.net/pdf?id=9RrKYAh9GU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154983>)

Orthogonal parameter\-efficient fine\-tuning adapts pretrained weights through structure\-preserving multiplicative transformations, but existing methods often conflate two distinct design choices: the subspace in which adaptation occurs and the transformation applied within that subspace\. This paper introduces LOFT, a low\-rank orthogonal fine\-tuning framework that explicitly separates these two components\. By viewing orthogonal adaptation as a multiplicative subspace rotation, LOFT provides a unified formulation that recovers representative orthogonal PEFT methods, including coordinate\-, butterfly\-, Householder\-, and principal\-subspace\-based variants\. More importantly, this perspective exposes support selection as a central design axis rather than a byproduct of a particular parameterization\. We develop a first\-order analysis showing that useful adaptation supports should be informed by the downstream training signal, motivating practical gradient\-informed support selection strategies\. Across language understanding, visual transfer, mathematical reasoning, and multilingual out\-of\-distribution adaptation, LOFT recovers principal\-subspace orthogonal adaptation while gradient\-informed supports improve the efficiency–performance trade\-off under matched parameter, memory, and transform budgets\. These results suggest that principled support selection is an important direction for improving orthogonal PEFT\.

## No\-Regret Caching with Delayed Hits

**Authors:** Bowen Jiang; Chaofan Ma; Qi Li; Wang Duo

**ID:** 154595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CQ5tByxuD8>) | [PDF](<https://openreview.net/pdf?id=CQ5tByxuD8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154595>)

Delayed hits occur when requests arrive while a previous miss for the same item is still being fetched\. They break the equivalence between hit ratio and latency because caching decisions depend on frequency, burst structure, and fetch latency\.  We develop a regret framework for delayed\-hit caching, with static regret against long\-term placement and switching regret against piecewise\-changing workloads\. We show that classical deterministic policies and randomized Marker fail to achieve no\-regret guarantees, both suffering linear static regret\. For stochastic arrivals, we introduce delayed\-hit shadow values and propose UCB\-DH, which achieves $O\(\\log T\)$ static regret on fixed instances with positive gaps, where $T$ is the horizon\. A matching gap\-dependent lower bound shows that the delayed\-hit latency\-amplification factor is statistically unavoidable, and restarted UCB\-DH gives sublinear regret for piecewise\-changing workloads\. For oblivious adversarial arrivals, we formulate an action\-independent shadow loss and propose LA\-FTPL with latency\-scaled perturbations and completion\-time admission\. LA\-FTPL achieves $O\(\\sqrt\{KT\\log N\\,\(Z^2\+C\_BZ\)\}\)$ shadow static regret, where $K$ is the cache capacity, $N$ the item universe size, $Z$ the fetch latency, and $C\_B$  the maximum one\-window delayed\-hit penalty\. With periodic restarts, it achieves $O\(ZT^\{2/3\}B^\{1/3\}\(K\\log N\)^\{1/3\}\)$ switching regret against comparators with at most $B$ cache changes\. Experiments on synthetic and real\-world traces show that our algorithms achieve sublinear regret and improve latency over the state\-of\-the\-art baselines\.

## Sound Verification of Deployed Neural Networks

**Authors:** Attila Szász; Balázs Bánhelyi; Márk Jelasity

**ID:** 149794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nHbkxmdykn>) | [PDF](<https://openreview.net/pdf?id=nHbkxmdykn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149794>)

Verification methods aim at mathematically proving desirable properties of neural networks, such as robustness to adversarial perturbations\.  A verifier is sound if and only if it never claims that a neural network has the desired property when it does not\.  It was shown recently that none of the currently known verifiers that are claimed to be sound are guaranteed to be sound when considering the deployed version of the verified network\.  Due to this, all the known verifiers are vulnerable to certain backdoor attacks, where an adversarial network passes verification, but in reality, it exhibits adversarial behavior in specific deployment environments\. So far, it has been suspected that sound verification is prohibitively expensive if we wish to verify all possible executions&amp;mdash;including parallel and stochastic ones&amp;mdash;in deployment\.  We show that efficient and practically sound verifiers can be designed using a bound on the so\-called backward error\. Using this bounding technique, we propose two verifiers: one based on interval bound propagation, and one using symbolic propagation\. Both verifiers are proven to remain sound even if the deployment environment randomly selects a valid expression tree \(an ordering and parenthesizing of the arithmetic operations\) to compute the network, and even if numeric underflow or overflow occurs in any valid expression tree\. This is especially interesting in the case of symbolic propagation, where the expression tree used by the verifier is completely different from the one used in deployment\. We demonstrate empirically that our techniques introduce only a limited performance overhead while detecting all the known verifier backdoor attacks\.

## Seeing but Not Detecting: Privacy\-Preserving Scene Text Attack via Hybrid Adversarial Policy Learning

**Authors:** Feiran Li; Jiahao Lyu; Ke Jiang; Yu Zhou; Jinqiao Shi

**ID:** 155570 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4cYXGvJG2Y>) | [PDF](<https://openreview.net/pdf?id=4cYXGvJG2Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155570>)

_Abstract unavailable from the accessible public sources._

## Test\-Time Defense Against Adversarial Attacks via Stochastic Resonance of Latent Ensembles

**Authors:** DONG LAO; Yuxiang Zhang; Haniyeh E Oskouie; Yangchao Wu; Alex Wong; Stefano Soatto

**ID:** 152658 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RNQOTYbTSv>) | [PDF](<https://openreview.net/pdf?id=RNQOTYbTSv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152658>)

_Abstract unavailable from the accessible public sources._

## Benchmarking and Improving Monitors for Out\-Of\-Distribution Alignment Failure in LLMs

**Authors:** Dylan Feng; Pragya Srivastava; Anca Dragan; Cassidy Laidlaw

**ID:** 139423 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rba2NveuIm>) | [PDF](<https://openreview.net/pdf?id=Rba2NveuIm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139423>)

_Abstract unavailable from the accessible public sources._

## Consistency as a Testable Property: Statistical Methods to Evaluate AI Agent Reliability

**Authors:** Harsh Raj; Niranjan Orkat; Suvrorup Mukherjee; Aritra Guha; Cheryl Flynn; Subhabrata Majumdar

**ID:** 155880 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=28uXN3BzkF>) | [PDF](<https://openreview.net/pdf?id=28uXN3BzkF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155880>)

This paper establishes a rigorous measurement science for AI agent reliability, providing a foundational framework for quantifying consistency under semantically preserving perturbations\. By leveraging $U$\-statistics for output\-level reliability and kernel\-based metrics for trajectory\-level stability, we offer a principled approach to evaluating agents across diverse operating conditions\. Our proposal highlights the important distinction between the core capability and execution robustness of an agent, showing that minor task\-level variations can induce complete strategy breakdowns despite the agent possessing the requisite knowledge for the task\. We validate our framework through extensive experiments on three agentic benchmarks, demonstrating that trajectory\-level consistency metrics provide far greater diagnostic sensitivity than traditional pass@1 rates\. By providing the mathematical tools to isolate where and why agents deviate,  we enable the identification and rectification of architectural concerns that hinder the deployment of agents in high\-stakes, real\-world environments\.

## Stochastic Matching via Local Sparsification

**Authors:** Sara Ahmadian; Edith Cohen; Mohammad Roghani

**ID:** 150334 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=isnRFTHGK5>) | [PDF](<https://openreview.net/pdf?id=isnRFTHGK5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150334>)

The classic online stochastic matching problem typically requires immediate and irrevocable matching decisions\. However, in many modern decentralized systems such as real\-time ride\-hailing and distributed cloud computing, the primary bottleneck is often local communication bandwidth rather than the timing of the match itself\. We formalize this challenge by introducing a two\-stage local sparsification framework\. In this setting, arriving requests must prune their realized compatibility sets to a strict budget of $k$ edges before a central coordinator optimizes the global matching\. This creates a "middle ground" between local information constraints and global optimization utility\.    We propose a local selection strategy, parametrized by a fractional solution of the expected instance\. Theoretically, we quantify the approximation ratio as a function of the solution's \{\\em spread\}\. We prove that under sufficient spread, our sparsifier globally preserves the expected size of the maximum matching\. Empirically, we demonstrate the robustness of our approach using the New York City ride\-hailing datasets and adversarial synthetic benchmarks\. Our results show that near\-optimal global matching is achievable even with highly constrained local budgets, significantly outperforming standard online baselines\.

## How Does Cutout Benefit Out\-of\-Distribution Generalization?

**Authors:** Kuo Shi

**ID:** 152989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OocrKgTwpF>) | [PDF](<https://openreview.net/pdf?id=OocrKgTwpF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152989>)

Out\-of\-distribution \(OOD\) generalization aims to improve a model’s generalization capacity using only source data, thereby ensuring reliable performance on unseen domains\. Cutout, a well\-established method that enhances model generalization by randomly masking out square regions of training samples, has shown great success in standard supervised settings\. Despite its seemingly strong con\- nection to OOD generalization, we observe that simply combining Cutout with existing OOD methods yields only marginal benefits or even degrades performance\. Motivated by this empirical finding, we seek a way to make OOD generalization benefit from Cutout\. Our method is inspired by reinterpreting the state\-of\-the\-art hyperspher\- ical prototype learning as a mutual information \(MI\) framework\. Within this framework, we observe that naively applying Cutout to existing OOD methods is equivalent to estimating MI from a single masked subview, which leaves much of Cutout’s potential untapped\. Instead, we apply the MI chain rule to split the original objective into two smaller estimation problems: one encourages the Cutout subview to align closely with the label, while the other drives the full image to capture the residual information unavailable in that subview\. This divide\-and\-conquer strategy fully exploits the Cutout\-generated subview while remaining computationally light\- weight\. Empirically, we demonstrate that our method outperforms competitive baselines on a broad range of OOD benchmarks and achieves superior performance\.

## PGID: Progressive Guided Inversion and Denoising for Robust Watermark Detection

**Authors:** Minh Quoc Duong; Chun Tong Lei; Chun Pong Lau

**ID:** 153527 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KfdFXxbNSJ>) | [PDF](<https://openreview.net/pdf?id=KfdFXxbNSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153527>)

With the proliferation of AI\-generated images, digital watermarking has become an essential safeguard for protecting intellectual property and mitigating malicious exploitation\. Recent works on semantic watermarking have enabled efficient copyright protection for diffusion models\. However, the dependence of semantic watermarking on diffusion inversion for watermark detection creates a critical vulnerability\. Imprint removal and forgery attacks exploit this weakness to produce deceptive results\. Our analysis reveals that these attacks succeed by displacing watermarked latents into the \_unwatermarked region\_, while guiding unwatermarked latents into the \_watermarked region\_\. Based on that, we propose \*\*Progressive Guided Inversion and Denoising \(PGID\)\*\*, the first plug\-and\-play, training\-free noise extraction framework designed to defend against both attack strategies\. PGID effectively defends by projecting perturbed latents back to the region where they originally belong\. The projection is achieved by eliminating intermediate latent deflections and mitigating adversarial perturbations through progressive inversion\-denoising cycles\. Comprehensive evaluations across multiple schemes demonstrate that PGID successfully restores detection reliability by recovering removed watermarks and identifying forged instances\.

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

**ID:** 155955\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155955

[Paper](<https://openreview.net/forum?id=1Zs088RXoL>) | [PDF](<https://openreview.net/pdf?id=1Zs088RXoL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155955>)

Randomized Smoothing provides rigorous robustness guarantees for neural networks without architectural constraints, yet its adoption is limited by extreme computational costs\. Standard RS requires tens of thousands of model evaluations per input and forces practitioners to commit to fixed sample sizes a priori\. In this work, we present a novel meta\-learning framework for anytime\-valid certified robustness that adaptively deploys computational resources\. By using a lightweight meta\-learner to predict image\-specific priors for a sequential E\-process, we achieve a 20\-fold reduction in sample complexity compared to traditional methods while maintaining rigorous statistical guarantees\. Beyond raw efficiency, we demonstrate how anytime\-validity enables adaptively allocating compute based upon application\-specific risk thresholds, a form of resource triage impossible under classic certification frameworks\. That this is achievable while also providing similar certification performance demonstrates that our approach provides a pathway for real\-time, safety\-critical certification deployments\.

## Improving Context\-Shift Robustness of Convolutional Networks via Context\-Regularized Cross\-Entropy

**Authors:** Jinen Setpal; Chaoyue Liu

**ID:** 150848\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150848

[Paper](<https://openreview.net/forum?id=eu0NxAFRN2>) | [PDF](<https://openreview.net/pdf?id=eu0NxAFRN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150848>)

_Abstract unavailable from the accessible public sources._

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

## Taking the Road Less Scheduled with Adaptive Polyak Steps

**Authors:** Dimitris Oikonomou; Matthew Buchholz; Yuen\-Man Pun; Robert Gower; Nicolas Loizou

**ID:** 154698 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BgIhio9OtL>) | [PDF](<https://openreview.net/pdf?id=BgIhio9OtL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154698>)

Schedule\-Free SGD, proposed in \*The Road Less Scheduled\*, achieves optimal convergence rates without requiring the training horizon in advance, by replacing learning rate schedules with a principled form of iterate averaging\. However, the method still requires tuning a base learning rate whose optimal value depends on unknown problem constants\. In this work, we continue down this road by deriving Polyak\-type step sizes for Schedule\-Free SGD and Adam that compute the learning rate at each iteration from the sampled loss, gradient, and current iterates alone\. We first propose an oracle variant that uses per\-sample optimal function values and prove an $\\mathcal\{O\}\(1/\\sqrt\{t\}\)$ anytime last\-iterate rate for convex Lipschitz objectives\. We then remove the oracle requirement with a safeguarded variant that replaces the unknown optimal values with any available lower bound, achieving the same rate up to a neighborhood that vanishes under interpolation\. Both step sizes reduce to existing Polyak rules for standard SGD when momentum is set to zero, unifying standard and schedule\-free Polyak methods\. Numerical experiments on language modeling, including pretraining and distillation, show that the proposed methods match or surpass tuned Schedule\-Free baselines while offering greater robustness to hyperparameter choices\.

## Active Corpus Selection for Training Subgraph Retrievers Using OOD Queries

**Authors:** Pritish Chakraborty; Aditya Singh; Indradyumna Roy; Lokesh N; Himanshu Dutta; Arun Iyer; Yashoteja Prabhu; Gaurav Sinha; Manik Varma; Soumen Chakrabarti; Abir De

**ID:** 153257 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MbIpE61lGH>) | [PDF](<https://openreview.net/pdf?id=MbIpE61lGH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153257>)

Neural subgraph retrieval \(NSR\) models degrade under query distribution shifts, and retraining for each new distribution requires collecting fresh ground\-truth labels, each of which entails an NP\-hard subgraph\-matching instance across a large corpus—making repeated label collection computationally prohibitive\. We introduce ACROSS, an active corpus selection framework that, under a fixed solver budget, selects a small corpus subset per out\-of\-distribution query whose labels suffice for effective NSR training\. We prove that allocating the entire budget to retrieving positives is optimal given extreme class imbalance\. To enable efficient positive retrieval across arbitrary query distributions, we linearize corpus embeddings around a base model, apply randomized projections to eliminate hinge nonlinearities, and train distribution\-shift\-tolerant representations via adversarial parameter perturbation\. The resulting corpus index is built once and reused across all distributions\. Experiments on four molecular graph datasets show ACROSS consistently outperforms six baselines in downstream retrieval accuracy\.

## AI Models Can Provably Hide Arbitrary Capabilities

**Authors:** Andis Draguns; Sumeet Motwani; Raymond Douglas; Christian Schroeder de Witt

**ID:** 149974 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=loKoVJwH5Y>) | [PDF](<https://openreview.net/pdf?id=loKoVJwH5Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149974>)

Capability evaluations aim to surface dangerous model behaviors before deployment, but their reliability depends on the assumption that hidden capabilities can be elicited\. We show this assumption does not hold under adversarial conditions by constructing backdoor attacks that embed encrypted neural networks within host model weights, decrypting and executing them only upon receiving a secret trigger\. Using digital lockers, these hidden circuits remain provably hard to elicit and interpret under standard cryptographic hardness assumptions, even given full access to model weights, extending prior work from hiding fixed strings to arbitrary computations\. We implement our constructions in PyTorch and empirically validate resistance to supervised fine\-tuning on a small chemical reaction prediction task \- a proxy for CBRN\-relevant capabilities\. Our results reveal a limit of capability audits\. We release our models to support the development of stronger defenses\.

## REACT: A Lightweight Reliability\-Aware Framework for Spatio\-Temporal Out\-of\-Distribution Prediction

**Authors:** Yongfeng Su; Ziquan Fang; Jihua Yang; Wei Shao; Yunjun Gao

**ID:** 152742 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QhZRZ8Fqcc>) | [PDF](<https://openreview.net/pdf?id=QhZRZ8Fqcc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152742>)

In the real world, spatio\-temporal forecasting systems inevitably encounter out\-of\-distribution \(OOD\) shifts, where temporal shifts evolve due to seasonal patterns or policy changes, and spatial dependencies shift with sensor deployment, removal, or topology reconfiguration\. While many approaches attempt to address these challenges via invariant learning or causal adjustment, they implicitly assume that the contextual signals supporting prediction remain reliable\. Through empirical studies and theoretical analysis, we find that this assumption often breaks because: \(i\) node\-level context can become biased or incomplete under temporal and spatial OOD, yet existing methods lack mechanisms to assess such reliability; \(ii\) existing standard graph\-based aggregation propagates information with fixed strength, potentially amplifying corrupted context across nodes\. To this end, we propose REACT, a lightweight REliability\-Aware Context\-calibrated spatio\-Temporal forecaster that explicitly models and controls context reliability under OOD\. REACT decouples prediction from adaptation by first establishing a topology\-independent predictive anchor via a graph\-free linear encoder, ensuring transferable node\-wise representations\. It then constructs an availability\-aware context that captures both observed signals and prior\-based imputations, enabling explicit characterization of context completeness\. Building on this, REACT introduces a reliability\-guided calibration mechanism that dynamically modulates spatial support through uncertainty\-aware gating, selectively leveraging trustworthy neighbors while suppressing unreliable propagation\. Extensive experiments on ten real\-world datasets with diverse temporal and structural shifts demonstrate that REACT consistently outperforms eleven baselines\. These results highlight the importance of explicitly modeling and controlling context reliability as a fundamental principle for robust spatio\-temporal forecasting under distribution shift\. Our source code is available at https://anonymous\.4open\.science/r/REACT\-A82B\.

## stable\-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation

**Authors:** Lucas Maes; Quentin Le Lidec; Luiz Facury; Nassim Massaudi; Ayush Chaurasia; Francesco Capuano; Richard Gao; Taj Gillin; Dan Haramati; Damien Scieur; Yann LeCun; Randall Balestriero

**ID:** 139680 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ApzyaGdg38>) | [PDF](<https://openreview.net/pdf?id=ApzyaGdg38>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139680>)

Research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison\. Current practice is further limited by three key bottlenecks: fragile one\-off codebases, slow video data loading, and the lack of standardized generalization benchmarks\. We present Stable\-WorldModel \(SWM\), an open\-source platform for standardized and reproducible world modeling research and evaluation\. It delivers \(1\) a high\-performance Lance\-based data layer with native support and conversion tools for MP4, HDF5, and LeRobot datasets, \(2\) clean, well\-tested implementations of modern world model baselines and planning solvers, and \(3\) a broad suite of environments and tasks extended with controllable visual, geometric, and physical factors of variation for systematic in\-silico evaluation of dynamics understanding, control performance, representation quality, and out\-of\-distribution generalization\. By unifying the full pipeline under a single, scalable framework, SWM dramatically reduces research overhead and accelerates trustworthy progress toward reliable world models\.

## Pointillism: Probing\-Based Model Compatibility for Robust Collaborative Machine Learning

**Authors:** Yang Li; Adams Wai Kin Kong

**ID:** 152203 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UnqyrJLKng>) | [PDF](<https://openreview.net/pdf?id=UnqyrJLKng>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152203>)

Assessing model compatibility is a key challenge in collaborative machine learning\. Heterogeneous data distributions can lead to discrepancies among independently trained models that degrade performance when combined, while adversarial manipulation can introduce harmful behaviors\. In both cases, reliable evaluation prior to integration is essential\. Existing approaches mostly rely on parameter\-space statistics, which do not reflect model behavior and are often unreliable in non\-IID settings\. Inspired by the pointillism art style, where images are formed from small, structured dots of color, we propose Pointillism, a probing\-based framework that evaluates model compatibility directly in function space without requiring task data\. The method uses structured, randomized probes sampled from an out\-of\-distribution space to elicit model responses\. From these responses, we construct compact model signatures that capture both global prediction characteristics and class\-level features\. Compatibility is assessed through feature consensus, measuring cross\-model agreement on class\-level representations via probe transfer\. This provides a behavior\-centric and fine\-grained view of model alignment\. We apply the framework to federated learning, where consensus\-based selection identifies a self\-consistent subset of client models for aggregation\. Experiments in federated learning demonstrate improved robustness against both untargeted and backdoor attacks, outperforming existing defense methods\. Our source code is included in the supplementary material\.

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

## On Making $SE\(2\)$\-Invariant Networks Optimal

**Authors:** Tomas Karella; Emily Shinkle; Alice Allen; Pieter J Swart; NIcholas Lubbers; Roxana Bujack

**ID:** 155688 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3gDFvmTZXb>) | [PDF](<https://openreview.net/pdf?id=3gDFvmTZXb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155688>)

Respecting a\-priori known symmetries of underlying data is a key principle in designing efficient neural architectures\. Convolutional Neural Networks \(CNNs\) are a canonical example, encoding translation equivariance\. Extending this inductive bias to richer symmetry groups such as $\\mathrm\{SE\}\(2\)$ in the most effective way possible is an ongoing architectural and computational challenge\. Building on classical invariant theory, we derive invariant feature maps that are provably optimal: minimal and information\-preserving with respect to the symmetry group\. Our construction is designed to integrate seamlessly into standard architectures, requiring no modification to nonlinearities or normalization layers\. As a concrete implementation, we introduce a plug\-and\-play module for CNNs that enforces $\\mathrm\{SE\}\(2\)$ invariance, capturing both translations and rotations within standard architectures\. The resulting models are both efficient and expressive\. Experiments show competitive or improved accuracy compared to state\-of\-the\-art equivariant methods at significantly lower computational cost\. Finally, we provide a theoretical and empirical analysis of the relationship between equivariance and invariance, offering insight into their roles in controlling robustness and flexibility\.

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

## Achieving Optimal Static and Dynamic Regret Simultaneously in Bandits with Deterministic Losses

**Authors:** Jian Qian; Chen\-Yu Wei

**ID:** 154262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6AmedacpX>) | [PDF](<https://openreview.net/pdf?id=F6AmedacpX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154262>)

In adversarial multi\-armed bandits, two performance measures are commonly used: static regret, which compares the learner to the best fixed arm, and dynamic regret, which compares it to the best sequence of arms\. While optimal algorithms are known for each measure individually, there is no known algorithm achieving optimal bounds for both simultaneously\. \\cite\{marinov2021pareto\} first showed that such simultaneous optimality is impossible against an \\emph\{adaptive\} adversary\. Our work takes a first step to demonstrate its possibility against an \\emph\{oblivious\} adversary when losses are \\emph\{deterministic\}\.  First, we extend the impossibility result of \\cite\{marinov2021pareto\} to the case of deterministic losses\. Then, we present an algorithm achieving optimal static and dynamic regret simultaneously against an oblivious adversary\. Together, they reveal a fundamental separation between adaptive and oblivious adversaries when multiple regret benchmarks are considered simultaneously\. It also provides new insight into the long open problem of simultaneously achieving optimal regret against switching benchmarks of different numbers of switches\.  Our algorithm uses negative static regret to compensate for the exploration overhead incurred when controlling dynamic regret, and leverages Blackwell approachability to jointly control both regrets\.  This yields a new model selection procedure for bandits that may be of independent interest\.

## Optimal Transport Reweighting for Robust Learning under Spurious Correlations and Label Noise

**Authors:** Sung Ho Jo; Seonghwi Kim; Wonsang Yun; Minwoo Chae

**ID:** 149217\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149217

[Paper](<https://openreview.net/forum?id=s2EZiHa9PF>) | [PDF](<https://openreview.net/pdf?id=s2EZiHa9PF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149217>)

_Abstract unavailable from the accessible public sources._

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

## COSMIO: A Benchmark for Cross\-Survey Modality Imputation

**Authors:** Dichang Zhang; Yixuan Shao; Jiali Cui; Haotian Yin; Yuanpeng Liu; Jiaiq Deng; Xiang Gao; Zhiqiang Lao; Heather Yu; Simon Birrer; Dimitris Samaras

**ID:** 139351 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UwoE2LI1HF>) | [PDF](<https://openreview.net/pdf?id=UwoE2LI1HF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139351>)

Large\-scale astronomical surveys define a heterogeneous, partially observed multi\-survey learning setting: each object is observed by only a subset of surveys, while survey observations differ in resolutions, wavelength coverage, noise characteristics, and footprints\. We formalize this as the problem of cross\-survey modality imputation and introduce COSMIO, a multi\-survey benchmark of aligned observations obtained by forward\-modeling shared astrophysical scenes across LSST, Euclid, and Roman under survey\-specific instrument characteristics\. The benchmark enables systematic evaluation of imputation across source\-target survey combinations and missing\-survey patterns\. We evaluate a broad range of machine learning methods for imputation\. Our results reveal a clear domain gap: methods developed for existing imputation settings transfer poorly to the astronomical survey setting, indicating that cross\-survey imputation constitutes a distinct learning problem\. Beyond common\-object imputation, we identify missing\-modality rare\-event imputation as a central challenge\. This regime arises in the early stages of new surveys, when rare but scientifically valuable phenomena may be available only from old surveys\. We use strong gravitational lensing, where light from a background galaxy is gravitationally deflected by a foreground galaxy, as a representative rare\-event setting\. We evaluate model performance on zero\-shot imputation of gravitational lenses and on downstream scientific tasks using the imputed lens observations\. On our constructed evaluation set of galaxy–galaxy strong lenses, performance degrades under rare\-event distribution shift, and this degradation further propagates to the downstream lens\-detection task\. Our results establish cross\-survey imputation as a distinct and challenging machine learning problem, highlighting the need for methods that are robust to distribution shift and aligned with scientific objectives\. Code and data are available at https://anonymous\.4open\.science/r/COSMI\-3671/\.

## Reasoning\-Trace Collapse: Evaluating the Loss of Explicit Reasoning During Fine\-Tuning

**Authors:** Lukas Twist; Helen Yannakoudakis; Jie Zhang

**ID:** 139406 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SfKYInSDnR>) | [PDF](<https://openreview.net/pdf?id=SfKYInSDnR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139406>)

_Abstract unavailable from the accessible public sources._

## Evaluating Epistemic Uncertainty: Beyond OOD Detection and Active Learning

**Authors:** Jakub Paplhám; Vojtech Franc; Willem Waegeman; Eyke Hüllermeier

**ID:** 139438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PscPjahZWf>) | [PDF](<https://openreview.net/pdf?id=PscPjahZWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139438>)

Current evaluation of epistemic uncertainty relies on tasks such as out\-of\-distribution detection and active learning\. However, the Bayes\-optimal decision strategies for these tasks do not coincide with the scores commonly used to quantify epistemic uncertainty\. Building on the epistemic reject\-option framework, we evaluate epistemic uncertainty using its ability to identify regret, the reducible error\. Formulating selective prediction as a constrained optimization over coverage, expected risk, and regret, we prove the optimal selector is a thresholded convex combination of the ground\-truth aleatoric and epistemic uncertainties\. This theoretical unification exposes a weakness in recent uncertainty disentanglement literature: we demonstrate that standard correlation metrics between learned components do not necessarily predict their actual operational utility\. We instead propose to evaluate the achievable \(risk, regret, coverage\) surface of the decomposition as a diagnostic for joint disentanglement and utility\. Benchmarking standard methods on datasets with dense human annotations reveals that decision\-theoretic rankings can disagree substantially with proxy\-task rankings, including pairwise rank inversions between methods that are top\-ranked on one criterion and bottom\-ranked on other\.

## Benchmarking Compositional Generalisation for Machine Learning Interatomic Potentials

**Authors:** Amir Masoud Nourollah; Irtaza Khalid; Stefano Leoni; Steven Schockaert

**ID:** 139491 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MTNbRIVxvp>) | [PDF](<https://openreview.net/pdf?id=MTNbRIVxvp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139491>)

Machine Learning Interatomic Potentials play a fundamental role in computational chemistry and materials science, enabling applications from molecular dynamics simulations to drug design and materials discovery\. While recent approaches can estimate inter\-atomic forces with high precision, it remains unclear to what extent they can generalise to previously unseen molecules\. Do they learn the compositional structure of chemistry, capturing how molecular fragments and their combinations determine properties, or do they primarily learn to interpolate patterns that are specific to the training examples? To address this question, we propose a benchmark consisting of four tasks that require some form of compositional generalisation\. In each task, models are tested on molecules that were unseen during training, but the training data is chosen such that generalisation to the test examples should be feasible for models that learn the underlying physical principles\. Our empirical analysis shows that the considered tasks are highly challenging for state\-of\-the\-art models, with errors on out\-of\-distribution examples often an order of magnitude higher than on in\-distribution examples, even when using foundation models that have been pre\-trained on millions of molecules\.

## Learning Recoverable Neural Networks against Weight Corruption via Simple Zero\-Sum Projection

**Authors:** Sanggeon Yun; Ryozo Masukawa; SungHeon Jeong; Hyunwoo Oh; Nathaniel D Bastian; Mohsen Imani

**ID:** 155717 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3RaBUzol9c>) | [PDF](<https://openreview.net/pdf?id=3RaBUzol9c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155717>)

_Abstract unavailable from the accessible public sources._

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

## Prudent\-Banker: No Extra Fees for Baseline Safety in Adversarial Bandits With and Without Delays

**Authors:** Ting Hu; Luanda Cai; Emmanouil\-Vasileios Vlatakis\-Gkaragkounis

**ID:** 149057 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tCIHEVndsO>) | [PDF](<https://openreview.net/pdf?id=tCIHEVndsO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149057>)

We study adversarial multi\-armed bandits with and without delayed feedback under a \*\*safety\-aware\*\* goal: achieving minimax\-optimal worst\-case regret while keeping nearly \*\*constant\*\* regret relative to a designated "safe" baseline policy\. Existing approaches can balance this trade\-off with immediate feedback for smooth comparators, but arbitrary delays can mistime transitions between \*\*conservatism\*\* and \*\*exploration\*\*, endangering the safety guarantee\.  To bridge this gap, we propose PRUDENT\-BANKER, a novel algorithm that combines a delay\-adapted variant of Online Mirror Descent with a modified phased\-aggression mechanism\. Its key technical contribution is a delay\-calibrated restart threshold that rigorously accounts for the worst\-case distortion induced by unobserved feedback and reliably detects comparator suboptimality\. We also establish new lower bounds for safety\-constrained adversarial delayed bandits, showing that the regret guarantees of PRUDENT\-BANKER are unimprovable, up to logarithmic factors, under the baseline\-safety requirement\.   To the best of our knowledge, PRUDENT\-BANKER is the first algorithm to achieve the optimal safety–robustness trade\-off: pseudo\-regret $\\tilde\{O\}\(\\sqrt\{T\}\+\\sqrt\{D\}\)$ together with $\\tilde\{O\}\(1\)$ regret against the safe comparator, both with and without delays\. Experiments across diverse delay distributions show that, unlike standard delay\-robust baselines, PRUDENT\-BANKER effectively balances safety and learning\.

## An Assessment of Human vs\. Model Uncertainty in Soft\-Label Learning and Calibration

**Authors:** Maja Pavlovic; Silviu Paun; Massimo Poesio

**ID:** 139664 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9mjkOAlNE>) | [PDF](<https://openreview.net/pdf?id=C9mjkOAlNE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139664>)

_Abstract unavailable from the accessible public sources._

## AnchorRep: Defending LLMs Against Cross\-Model Adversarial Transfer via Representation Repulsion

**Authors:** Gal Wertheizer; Rom Himelstein; Tomer Peretz; Avi Mendelson

**ID:** 149182 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sHGeJADnFq>) | [PDF](<https://openreview.net/pdf?id=sHGeJADnFq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149182>)

_Abstract unavailable from the accessible public sources._

## An Assessment of Human vs\. Model Uncertainty in Soft\-Label Learning and Calibration

**Authors:** Maja Pavlovic; Silviu Paun; Massimo Poesio

**ID:** 139664\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139664

[Paper](<https://openreview.net/forum?id=C9mjkOAlNE>) | [PDF](<https://openreview.net/pdf?id=C9mjkOAlNE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139664>)

_Abstract unavailable from the accessible public sources._

## AnchorRep: Defending LLMs Against Cross\-Model Adversarial Transfer via Representation Repulsion

**Authors:** Gal Wertheizer; Rom Himelstein; Tomer Peretz; Avi Mendelson

**ID:** 149182\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149182

[Paper](<https://openreview.net/forum?id=sHGeJADnFq>) | [PDF](<https://openreview.net/pdf?id=sHGeJADnFq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149182>)

_Abstract unavailable from the accessible public sources._

## Stop Mechanizing Reform Heuristics as Scientific Quality Filters in AI Review

**Authors:** Jessica Hullman

**ID:** 140066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=StsCjqI2vv>) | [PDF](<https://openreview.net/pdf?id=StsCjqI2vv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140066>)

AI\-driven review is poised to structure which science gets attention\. By implementing checks for reproducibility, robustness, preregistration, claim scope, and other proxies, machine learning research is institutionalizing metascientific filters on scientific production\.  This position paper argues that mechanizing reform heuristics whose theoretical grounding remains contested or incomplete is counterproductive to scientific progress\. AI review papers should be evaluated as proposed decision policies that shape future research\. However, currently the emerging literature blurs the line between integrity filtering, based on necessary but insufficient signals of validity like reproducibility of stated results or lack of fake citations, and epistemic filtering, which uses machine\-detectable signals to judge scientific quality\. Drawing on debates in metascience, we show that proposed filters\-\-including replicability, multiverse robustness, and preregistration of analysis surfaces\-\-are insufficiently justified as general indicators of scientific value\. We argue that human\-in\-the\-loop review fails to resolve the problem, because automated signals shape attention and create incentives upstream\. Instead, the field must move toward more rigorous motivation of signal\-to\-decision pipelines, including explicit specification of target constructs, linking assumptions, decision uses, failure modes, and incentive effects\.

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

## The road reaches every place, the short cut only one: Self\-Adversarial Shortcut Mitigation for AI\-Generated Image Detection

**Authors:** Haifeng Zhang; Qinghui He; Xiuli Bi; Bo Liu; Chi\-Man Pun; Bin Xiao

**ID:** 151317\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151317

[Paper](<https://openreview.net/forum?id=bO6CYKnaZo>) | [PDF](<https://openreview.net/pdf?id=bO6CYKnaZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151317>)

With the rapid advancement of generative models, AI\-generated images \(AIGIs\) have become increasingly realistic, posing new challenges for reliable detection\. In this work, we revisit the root causes of poor generalization in AIGI detectors from the perspective of shortcut learning\. We find that detectors often rely on spurious semantic cues or a single prominent artifact, causing the feature space to collapse toward low diversity and severely limiting generalization\. To characterize this issue, we propose the Generative Artifact Manifold Clustering \(GAMC\) hypothesis, which shows that although generative artifacts are multi\-dimensional, different generators occupy distinct distributions along these dimensions, making detectors that rely on local artifact cues inherently fragile\. To address this, we shift AIGI detection from “single\-cue reliance” to “multi\-dimensional discrimination” and introduce the Semantic–Artifact Self\-Adversarial Feature Learning \(SA\-AFL\) framework\. SA\-AFL progressively disentangles semantics from artifacts and employs a self\-adversarial mechanism to balance learning across artifact dimensions, enabling the model to retain richer and more shared generative features\. As a result, SA\-AFL reduces shortcut reliance and learns more transferable evidence for cross\-generator detection\. Comprehensive experiments on images from 23 generative models show that SA\-AFL improves ACC by 6\.84\\% and mAP by 8\.25\\% over state\-of\-the\-art methods\.

## Beyond Ground Truth: Evaluating Non\-Verifiable Reasoning in LLMs through Moral Robustness

**Authors:** Elizaveta Tennant; Benjamin Henke; Anita Keshmirian; Murray Shanahan; Verena Rieser; Kristian Lum; Sydney Levine; Julia Haas

**ID:** 154911\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154911

[Paper](<https://openreview.net/forum?id=A0CygfB9oj>) | [PDF](<https://openreview.net/pdf?id=A0CygfB9oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154911>)

As LLMs increasingly serve in advisory and deliberative roles, users rely on them for non\-verifiable reasoning in domains lacking objective ground truths\. However, traditional evaluations of LLM reasoning focus almost exclusively on fact\-based domains, such as mathematics and science, leaving uncertainty over whether and to what degree models can handle ambiguous, subjective, or value\-laden problems over time\. To address this concern, we propose moral reasoning as a paradigmatic subdomain of non\-verifiable reasoning\. We define moral robustness as a model’s capacity to exhibit sound moral reasoning across time and contexts, and we introduce a scalable, adversarial, multi\-turn evaluation framework to empirically measure this capability\. We simulate 48,000 user\-agent moral deliberations across four frontier LLMs, varying premise relevance, premise order, conversation duration, and the user's stated moral view\. We find that models successfully ignore morally\-irrelevant distractors, but shift their reasoning by up to 6\.5\\%, on average, towards the user's stated preferred moral view, and varying their reasoning depending on factors such as order \(altering moral judgments by order in 13\-22\\% of the cases\) and duration \(altering moral judgments between single\-turn and multi\-turn in 10\-24\\% of the cases\)\. Our analysis indicates that models tailor not just their final verdicts but their underlying justifications to align with a user’s moral viewpoint — a failure mode we characterize as moral deliberative sycophancy\.

## VSRo\-200: A Romanian Visual Speech Recognition Dataset for Studying Supervision and Multimodal Robustness

**Authors:** Iulia\-Maria Udrea; Alexandra Diaconu; Bogdan Alexe

**ID:** 138997\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138997

[Paper](<https://openreview.net/forum?id=rwHd9hxvoh>) | [PDF](<https://openreview.net/pdf?id=rwHd9hxvoh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138997>)

We introduce VSRo\-200, the first large\-scale dataset for visual speech recognition \(lip reading\) in Romanian, comprising 200 hours of real\-world podcast videos\. All samples are annotated with pseudo\-labels generated by a fine\-tuned Romanian ASR model, while a subset of 100 hours is additionally transcribed by humans, enabling controlled analysis of supervision quality under a unified framework\.  Building on this dataset, we establish a benchmark for visual speech recognition in low\-resource settings\. We systematically study the impact of supervision quality, showing that while human annotations provide better performance at fixed data scales, pseudo\-labels enable continued improvements through scalability\. We further evaluate robustness under domain shift using curated out\-of\-distribution \(OOD\) test sets, and analyze audio\-visual speech recognition \(AVSR\) under noisy conditions, where multimodal fusion significantly improves robustness compared to audio\-only models\.  Finally, we demonstrate that representations learned on VSRo\-200 transfer effectively to the LRRo benchmark for isolated word recognition, substantially outperforming previously reported results\.  Overall, VSRo\-200 provides a new testbed for studying supervision, domain generalization, and multimodal fusion in low\-resource visual speech recognition\.

## Revisiting On\-policy Adversarial Black\-Box Distillation: Calibrating Groupwise Reward Geometry for Effective Advantage Construction

**Authors:** Xiao Cui; Mo Zhu; Yulei Qin; Yuze Wu; Wengang Zhou; Houqiang Li

**ID:** 155928\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155928

[Paper](<https://openreview.net/forum?id=1jWdRb1zSZ>) | [PDF](<https://openreview.net/pdf?id=1jWdRb1zSZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155928>)

Black\-box distillation is a practical route for transferring capabilities from API\-accessible large language models that expose only text outputs into smaller student models\. Recent on\-policy adversarial methods such as GAD improve over SeqKD by forming an adversarial loop between a critic and a student, where the critic provides rewards for GRPO\-based student policy optimization over the student's sampled responses\. However, GRPO computes advantages from the within\-group relative rewards of student samples for the same prompt, whereas the critic is trained primarily to distinguish teacher responses from student responses\. This objective mismatch can produce reward groups with collapsed scale or fragile margins, leading to brittle grouped optimization signals\. We propose Groupwise Reward Geometry Conditioning \(GRGC\), a two\-stage framework that improves advantage construction by shaping student\-side reward groups during both critic training and policy optimization\. To improve critic\-side conditioning, Gaussian groupwise Optimal Transport calibration regularizes the critic during training to produce reward groups with non\-collapsed spread and smooth rank\-wise gaps by matching sorted prompt\-wise rewards to group\-centered Gaussian quantiles\. Building on this conditioned reward geometry, policy\-side group power modulation reshapes the prompt\-wise reward groups before they are converted into advantages, preserving the critic\-induced ordering while increasing optimization\-relevant margin separability\. Extensive experiments across diverse teachers, student model families and scales, and training datasets demonstrate the effectiveness of GRGC on both in\-distribution and out\-of\-distribution evaluations, while introducing negligible overhead over GAD\. The code is available at https://anonymous\.4open\.science/r/GRGC\.

## Robust Satisficing Ensemble: Scalable Model Aggregation Under Distribution Shifts

**Authors:** Ahmet Faruk Cetinkaya; Enes Ağırman; Cem Tekin

**ID:** 149478\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149478

[Paper](<https://openreview.net/forum?id=ppKtrQWhKN>) | [PDF](<https://openreview.net/pdf?id=ppKtrQWhKN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149478>)

Standard ensemble methods can improve robustness by mitigating individual model stochasticity, but they frequently fail to generalize beyond the training distribution, leaving systems vulnerable to out\-of\-distribution \(OOD\) data\. We introduce the Robust Satisficing Ensemble \(RSE\), a scalable probabilistic aggregation framework designed to secure model combinations by minimizing their fragility against distributional changes\. By bridging a robust satisficing objective with a quadratic risk surrogate, RSE derives a closed\-form analytical inner adversary\. This fundamental reformulation enables highly efficient weight updates without the computational bottleneck of standard minimax optimization, crucially decoupling optimization complexity from sample size to scale effectively to large datasets\. In particular, we prove a geometrically decaying truncation error for the fragility approximation via Lagrange\-Bürmann expansion and show that the proximal RSE updates converge to a stationary point\. We evaluate RSE across a comprehensive spectrum of distribution shifts, including adversarial label shift \(SST\-5, TREC\), natural subpopulation and temporal shifts \(CivilComments, HuffPost\)\. Our results demonstrate that RSE consistently outperforms strong robust baselines, including GroupDRO, IRM, and SRM\. These findings establish RSE as a practical, theoretically grounded safeguard for reliable model aggregation in dynamic environments\.

## Hyperbolic Concept Bottleneck Models

**Authors:** Daniel Uyterlinde; Swasti S Mishra; Pascal Mettes

**ID:** 151003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dfLMID86Cd>) | [PDF](<https://openreview.net/pdf?id=dfLMID86Cd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151003>)

Concept Bottleneck Models \(CBMs\) have become a popular approach to enable interpretability in neural networks by constraining classifier inputs to a set of human\-understandable concepts\. While effective, current models embed concepts in flat Euclidean space, treating them as independent, orthogonal dimensions\. Concepts, however, are highly structured and organized in semantic hierarchies\. To resolve this mismatch, we propose Hyperbolic Concept Bottleneck Models \(HypCBM\), a post\-hoc framework that grounds the bottleneck in this structure by reformulating concept activation as asymmetric geometric containment in hyperbolic space\. Rather than treating entailment cones as a pre\-training penalty, we show they encode a natural test\-time activation signal: the margin of inclusion within a concept's entailment cone yields sparse, hierarchy\-aware activations without any additional supervision or learned modules\. We further introduce an adaptive scaling law for hierarchically faithful interventions, propagating user corrections coherently through the concept tree\. Empirically, HypCBM rivals post\-hoc Euclidean models trained on 20$\\times$ more data in sparse regimes required for human interpretability, with stronger hierarchical consistency and improved robustness to input corruptions\.

## CFC26: Building Evaluations for Deployment in Sonar\-Based Fish Counting

**Authors:** Madison Van Horn; Suzanne Stathatos; Sevan Brodjian; Justin Kay; Kai Van Brunt; Erik Young; Sara Beery; Pietro Perona; Michael Hobley

**ID:** 139843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15IDKXrEp8>) | [PDF](<https://openreview.net/pdf?id=15IDKXrEp8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139843>)

Accurate counts of fish populations are essential for monitoring ecosystems and making decisions about conservation, harvest limits, and river management\. In many field deployments, these counts are obtained from sonar videos that experts must inspect manually, making large\-scale monitoring slow, expensive, and difficult to reproduce\. Automated counting systems have been proposed as a scalable alternative, but so far this promise has been difficult to realize in deployment\. Developing evaluations that better reflect real world deployment conditions will close this gap, and drive improvements to counting methods that translate to reality\. To achieve this, we propose Caltech Fish Counting 2026 \(CFC26\), a new dataset with improved evaluation protocols that simulate deployment to current and new rivers, testing in\-distribution and out\-of\-distribution performance\. We expand the CFC22 dataset to eleven deployment locations across nine Pacific salmon river systems from Alaska to Northern California, capturing a broader geographical and ecological range of data\. We additionally introduce two new evaluation metrics for counting, nMNE and nMANE, that mirror the operational workflow that experts use and help surface errors that frame\-level detection metrics do not capture\. Using these metrics, we reveal previously\-concealed directional bias in upstream vs downstream counts, which would have direct and significant ecological implications if undetected\.

## A Regularization\-Based Approach to Public Belief State Search for Adversarial Games

**Authors:** Sobhan Mohammadpour; Samuel Sokota; Brandon Kaplowitz; Zico Kolter; Noam Brown; Gabriele Farina

**ID:** 152665 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RIlBGF1FLf>) | [PDF](<https://openreview.net/pdf?id=RIlBGF1FLf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152665>)

The public belief state \(PBS\), which is the posterior over game histories conditioned on public information, is a fundamental abstraction for designing game\-theoretically sound search algorithms for imperfect\-information games\. Existing sound PBS search techniques for adversarial games fall into two categories: gadget\-game\-based algorithms \(including Libratus, DeepStack, Pluribus, Supremus, and Student of Games\) and ReBeL\-based algorithms\. Both these categories possess disadvantages, including a reliance on discontinuous functions, an inability to re\-solve subgames, and an implicit representation of policies\. In this work, we propose Gravel, a new approach for PBS search\-\-\-different from these previous two categories\-\-\-that achieves game\-theoretic soundness via regularization\. Unlike the aforementioned approaches, Gravel relies on smooth functions, can initiate search at any point in the game, and outputs explicit policies directly\. We empirically demonstrate the advantages of Gravel for no\-limit Texas hold'em, where we show that it outperforms ReBeL both in head\-to\-head competitions against Slumbot and in endgame solving\. We include our codebase in the submission, making Gravel the first open\-source high\-performance no\-limit Texas hold'em AI\.

## Learning Robust Representations for Defending White\-Box Adversarial Attacks in Continual Learning

**Authors:** Yusen Chen; Fei Ye; Qihe Liu; Adrian G\. Bors; shijie zhou

**ID:** 155739 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KoSZdy13A>) | [PDF](<https://openreview.net/pdf?id=3KoSZdy13A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155739>)

_Abstract unavailable from the accessible public sources._

## Should We Pay This Much for Robustness? Efficient Proxy Certificates with Marginal Guarantees

**Authors:** Sayed Soroush Haj Zargarbashi; Mohammad Sadegh Akhondzadeh; Aleksandar Bojchevski

**ID:** 153528 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KfO6qMzPTr>) | [PDF](<https://openreview.net/pdf?id=KfO6qMzPTr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153528>)

_Abstract unavailable from the accessible public sources._

## Train on the Sphere, Deploy on the Hill: Closed\-Form\-Anchored Surrogates for Real\-Terrain Boundary\-Integral Equations

**Authors:** Stephane Zsoldos; Therice Morris; Varundev Sukhil; Benjamin Wetherfield

**ID:** 155758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=398YNNOPQt>) | [PDF](<https://openreview.net/pdf?id=398YNNOPQt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155758>)

The analysis of electrostatic induction effects on transmission lines in  real\-world power distribution systems requires inferring induced  surface charge density $\\sigma$ on overhead\-line corridors at deployment scale, where dense $\\mathcal\{O\}\(N^3\)$ boundary\-element solvers for the underlying Poisson boundary integral equation \(BIE\) are infeasible\. We present a recipe for training cheap PDE surrogates from canonical\-case closed forms \(flat ground, grounded sphere\) plus sparse dense\-solver fine\-tuning where the canonical case breaks like in our case study\.  The recipe also avoids a structural degeneracy between training operator  $A\_\\theta$ and solution $\\sigma$ in self\-supervised operator learning that  tends to lead to internally consistent but non\-physical solutions\.  The recipe combines a closed\-form local\-tangent\-plane baseline plus a small neural correction; a frozen analytic kernel; an $SE\(3\)$\- and scale\-invariant dimensionless feature stack derived from a $2$\-term identity $\\sigma = \-\(\\nabla\\phi\\cdot\\hat\{n\}\)/\(2\\pi\) \+ H\\phi/\(4\\pi\)$, exact on flat ground and the grounded sphere and supervised training against this identity\. An $8$\-parameter linear head recovers the analytic curvature coefficient $\+1/\(4\\pi\)$ from data to within $2\\%$; holds to $1\\%$ relative RMS in $\\sigma$ across $12$ orders of magnitude in source\-charge scale, where DeepONet, Set Transformer, and FNO baselines miss the analytic answer by orders of magnitude out\-of\-distribution; and matches direct\-collocation boundary\-element ground truth on a synthetic curved patch to $3\.8\\%$ relative RMS\.  A regime\-of\-validity result delineates when the canonical $2$\-term identity applies; outside it \(terrain curvature radius $\\kappa^\{\-1\}$ much greater than source clearance height $\|h\|$, the corridor regime\), we extend the recipe with sparse dense\-BEM\-target supervision\. On several industrial transmission\-line corridors with native triangulated meshes, the extended recipe attains $9\.2\\%$ median relative RMS to dense BEM on held\-out corridors, $20\\times$ tighter than the analytic 2\-term plug\-in\. Deployment: a $1\.7$kB MLP, seconds per corridor on a single CPU core\.

## Why Transformers Struggle with Distribution\-Independent In\-Context Learning

**Authors:** Omar Naim; Jerome Bolte; Nicholas Asher

**ID:** 155239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Ci5cBtBUO>) | [PDF](<https://openreview.net/pdf?id=7Ci5cBtBUO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155239>)

Transformer models can adapt to new tasks from input\-\-output examples at inference time, a capability known as in\-context learning \(ICL\)\. A common interpretation is that transformers implement implicit learning algorithms in their forward pass, using the context to infer the task and predict the query\. We test this interpretation beyond the training distribution in controlled regression settings where classical estimators can generalize exactly\. Transformers achieve near\-perfect in\-distribution ICL, but fail sharply under scale and support shifts, exhibiting a cliff\-shaped collapse that is absent from least\-squares and kernel baselines\. This failure is robust across polynomial degrees and a range of training interventions\. We identify two architectural mechanisms that help explain this behavior\. First, final normalization imposes a readout\-side scale constraint, causing predictions to saturate at fixed boundary values\. Removing this constraint eliminates hard saturation, but does not restore reliable ICL under coefficient or label scaling\. Second, attention can become a context bottleneck: under distribution shift, softmax attention may concentrate on a small part of the prompt, limiting the context\-dependent adaptation required for ICL\. These results show that strong in\-distribution ICL does not imply distribution\-independent ICL, and suggest caution when using ICL instead of explicit retraining or adaptation under distribution shift\.

## Robust and Efficient Finetuning of Vision Foundation Models via Implicit Ensembling

**Authors:** Masih Aminbeidokhti; Heitor Medeiros; Eric Granger; Marco Pedersoli

**ID:** 154510 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D3CvENdsfQ>) | [PDF](<https://openreview.net/pdf?id=D3CvENdsfQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154510>)

Robust finetuning of foundation models seeks to improve out\-of\-distribution \(OOD\) generalization during in\-distribution \(ID\) adaptation\. We revisit Mixout, a stochastic regularizer that intermittently replaces finetuned parameters with a reference anchor, and study its effectiveness for robust finetuning of vision foundation models\. We reinterpret Mixout as a single\-run, weight\-sharing implicit ensemble and analyze its expected OOD error through a bias–variance–covariance–locality \(BVCL\) lens\. This perspective reveals three key factors that govern the ID–OOD trade\-off: the choice of masking anchor, the mask resampling frequency, and mask sparsity\. Guided by this analysis, we propose GMixout, which generalizes Mixout in three ways\. First, it explicitly controls the masking period through a resampling\-frequency hyperparameter\. Second, it replaces the fixed pretrained anchor with an exponential moving average snapshot that adapts throughout training\. Third, it uses sparse kernels to update only a small subset of parameters at each iteration, introducing no inference\-time overhead and enabling large\-model finetuning on consumer\-grade GPUs\. Experiments across five vision benchmarks show that GMixout consistently outperforms Mixout, Model Soups, and strong parameter\-efficient finetuning baselines under both covariate shift and class imbalance\.

## Claudini: Autoresearch Discovers State\-of\-the\-Art Adversarial Attack Algorithms for LLMs

**Authors:** Alexander Panfilov; Peter Romov; Igor Shilov; Yves\-Alexandre de Montjoye; Jonas Geiping; Maksym Andriushchenko

**ID:** 154015 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GrSHePCSJD>) | [PDF](<https://openreview.net/pdf?id=GrSHePCSJD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154015>)

We show that AI agents are capable of discovering novel algorithms for adversarial attacks against LLMs, advancing the state of the art on white\-box jailbreaking and prompt injection evaluations\. We deploy frontier agents, such as Claude Code and Codex, in an autoresearch loop with access to a library of 30\+ prior methods and an evaluation script with a fixed compute budget\. We show this pipeline to be effective in jailbreaking OpenAI's GPT\-OSS\-Safeguard\-20B and in prompt injections against Meta\-SecAlign\-70B, an adversarially robust model\. For GPT\-OSS\-Safeguard, the best agent\-discovered method achieves up to 80\\% attack success rate on CBRN queries, compared to &lt;50\\% for existing methods\. For SecAlign, it achieves 100\\% ASR, while the best prior automated methods only achieve 82\\%\. Notably, in our setting, attack methods are developed on unrelated surrogate models for a pure random\-target token\-forcing task, yet generalize directly to prompt injection on the adversarially trained model\. Finally, we trace the lineage of methods developed during autoresearch, characterizing the agents' strategies and failure modes\. Adversarial ML has long held that defenses must be evaluated against attacks tailored to them; autoresearch automates this principle, and we argue it should be the minimum bar for defense evaluation going forward\.

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

## Prudent\-Banker: No Extra Fees for Baseline Safety in Adversarial Bandits With and Without Delays

**Authors:** Ting Hu; Luanda Cai; Emmanouil\-Vasileios Vlatakis\-Gkaragkounis

**ID:** 149057\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149057

[Paper](<https://openreview.net/forum?id=tCIHEVndsO>) | [PDF](<https://openreview.net/pdf?id=tCIHEVndsO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149057>)

We study adversarial multi\-armed bandits with and without delayed feedback under a \*\*safety\-aware\*\* goal: achieving minimax\-optimal worst\-case regret while keeping nearly \*\*constant\*\* regret relative to a designated "safe" baseline policy\. Existing approaches can balance this trade\-off with immediate feedback for smooth comparators, but arbitrary delays can mistime transitions between \*\*conservatism\*\* and \*\*exploration\*\*, endangering the safety guarantee\.  To bridge this gap, we propose PRUDENT\-BANKER, a novel algorithm that combines a delay\-adapted variant of Online Mirror Descent with a modified phased\-aggression mechanism\. Its key technical contribution is a delay\-calibrated restart threshold that rigorously accounts for the worst\-case distortion induced by unobserved feedback and reliably detects comparator suboptimality\. We also establish new lower bounds for safety\-constrained adversarial delayed bandits, showing that the regret guarantees of PRUDENT\-BANKER are unimprovable, up to logarithmic factors, under the baseline\-safety requirement\.   To the best of our knowledge, PRUDENT\-BANKER is the first algorithm to achieve the optimal safety–robustness trade\-off: pseudo\-regret $\\tilde\{O\}\(\\sqrt\{T\}\+\\sqrt\{D\}\)$ together with $\\tilde\{O\}\(1\)$ regret against the safe comparator, both with and without delays\. Experiments across diverse delay distributions show that, unlike standard delay\-robust baselines, PRUDENT\-BANKER effectively balances safety and learning\.

## In\-Context Benign Overfitting: A Feature\-Selection Model in Linear Regression ICL

**Authors:** Puneesh Deora; Bhavya Vasudeva; Christos Thrampoulidis

**ID:** 154755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BCHILY5fm6>) | [PDF](<https://openreview.net/pdf?id=BCHILY5fm6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154755>)

In in\-context learning \(ICL\), a frozen pre\-trained model solves tasks by conditioning on a prompt of a few input–output examples, without gradient updates\. If the task was present in pretraining but the particular prompt sequence was not, the resulting in\-distribution generalization is retrieval\-based ICL\. Learning\-based ICL instead reflects out\-of\-distribution generalization: the model succeeds on prompts generated by a novel task\. Empirically, both forms improve with scale\. By analogy to benign overfitting in supervised learning, we call this in\-context benign overfitting: larger models more faithfully memorize the pretraining tasks \(improving retrieval ICL\) while also generalizing better to novel tasks \(improving learning ICL\)\. We prove that this phenomenon already arises in a minimal in\-context linear\-regression feature\-selection model\. In contrast, standard in\-context linear\-regression models exhibit a retrieval–learning tradeoff, where the emergence of learning\-based ICL coincides with degraded retrieval\-based performance\.

## Out\-of\-Distribution Detection in Continual Learning

**Authors:** Nimeshika Udayangani Hewa Dehigahawattage; Sarah Erfani; Flora Salim; Christopher Leckie

**ID:** 149012\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149012

[Paper](<https://openreview.net/forum?id=tUbhxJCUrN>) | [PDF](<https://openreview.net/pdf?id=tUbhxJCUrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149012>)

Out\-of\-distribution detection in continual learning \(OOD\-CL\) is highly challenging, as it requires \(i\) learning a sequence of tasks without catastrophic forgetting, and \(ii\) identifying unknown samples \(OOD\) without access to known \(in\-distribution \(ID\)\) data from past tasks, where standard confidence\-based OOD scores tend to degrade\. Existing methods largely rely on a rehearsal buffer of past data or assume closed\-world settings, limiting their scalability and reliability in real\-world scenarios\. In this paper, we propose a novel OOD detection framework for rehearsal\-free continual learning, inspired by Kolmogorov–Arnold Networks \(KAN\), which mitigate catastrophic forgetting via their inherent local neuroplasticity\. To better leverage KAN in OOD\-CL, we introduce a task\-adaptive classifier architecture, \\emph\{TA\-KAN\}, which mitigates recency bias and enhances ID\-\-OOD separability through task\-specific control of activation locality\.  Furthermore, we propose a geometry\-guided OOD score that complements TA\-KAN classifier confidence without relying on past ID data\. Our method significantly improves OOD detection while maintaining strong ID classification performance, achieving state\-of\-the\-art results in OOD\-CL\.

## Prompt Ensemble Image Puriﬁcation for Test\-time Adversarial Robustness of CLIP

**Authors:** Yuxuan Zhang; Shuchang Wang; Zhenbo Shi; Xiaoman Liu; Jiajun Hu; Zhidong Yu; Wei Song; Wei Yang

**ID:** 155055\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155055

[Paper](<https://openreview.net/forum?id=8nPVzFYM2h>) | [PDF](<https://openreview.net/pdf?id=8nPVzFYM2h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155055>)

Vision\-Language Models like CLIP exhibit remarkable zero\-shot capabilities but remain vulnerable to adversarial attacks\. Existing defenses, such as adversarial fine\-tuning or test\-time defense, either incur high computational costs that lead to cause catastrophic forgetting, or struggle against strong adversarial attacks\. In this work, we reveal that adversarial perturbations are highly overfitted to the decision boundary of a single canonical text prompt\. By introducing several semantic prompt variants, we identify a \\textit\{Prompt Sensitivity Gap\}: adversarial examples exhibit significantly higher prediction variance across prompts compared to benign images\. Motivated by this insight, we propose Prompt Ensemble Image Purification \(PEIP\), an efficient test\-time defense framework\. PEIP features a dual\-objective purification loop that jointly suppresses prediction variance to dismantle adversarial alignment and reinforces the most responsive class across prompt variants to facilitate semantic recovery\. Furthermore, to accelerate inference, we introduce a statistically calibrated Early Exit mechanism that bypasses benign images based on their initial prompt sensitivity\. Extensive experiments across 16 classification benchmarks, multiple CLIP architectures, and CLIP\-based zero\-shot semantic segmentation tasks demonstrate that PEIP achieves state\-of\-the\-art adversarial robustness while preserving exact zero\-shot accuracy and high efficiency\.

## G\-PAC: Constructing Cohesive Pseudo\-Features for Generalizable Physical Adversarial Camouflage

**Authors:** tianrui lou; Haoqing Zhang; Jiawei Liang; Puning Zhao; XIAOCHUN CAO

**ID:** 151240\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151240

[Paper](<https://openreview.net/forum?id=bqovoYuYh5>) | [PDF](<https://openreview.net/pdf?id=bqovoYuYh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151240>)

Physical\-domain adversarial attacks present critical security threats to diverse AI systems, notably autonomous driving\. Generalization is an inherent requirement and a primary obstacle in physical attacks, manifesting as the ability of adversarial patterns to persist across varying environmental configurations and to transfer to unseen victim models\. While prior methods demonstrate generalization across specific models, their performance drops significantly on open\-vocabulary foundation models, with some approaches becoming entirely ineffective\. This lack of generalization stems from the failure of adversarial camouflage to construct a cohesive pseudo\-feature across perspectives, lacking the stable semantic representation characteristic of natural objects\. Such a deficiency arises because existing attack paradigms rely on independent view\-level optimization and non\-targeted objectives, which lead to semantically scattered features and inconsistent optimization directions\. To address these limitations, we propose Generalizable Physical Adversarial Camouflage \(G\-PAC\), a framework that transitions from view\-specific suppression to coordinated object\-level representation learning\.  G\-PAC maintains a momentum\-updated global pseudo\-feature center as a stable adversarial anchor to guide optimization across diverse configurations\.  By leveraging the feature space of a self\-supervised foundation model as a semantic prior, we introduce a contrastive regularization term to encourage feature aggregation while ensuring adversarial potency\.  Comprehensive digital and physical evaluations demonstrate the effectiveness of G\-PAC\. Notably, it outperforms the strongest baseline by an average AP@0\.5 margin of 0\.10 across seven diverse detector architectures in digital settings, and further extends this margin to 0\.12 in real\-world physical tests\. Furthermore, G\-PAC exhibits profound black\-box transferability against highly resilient open\-vocabulary foundation models, inducing an additional absolute AP@0\.5 reduction of 0\.30 on GLIP\.

## ASAT: Adaptive Scoring and Thresholding with Human Feedback for Robust Out\-of\-Distribution Detection

**Authors:** Daisuke Yamada; Harit Vishwakarma; Ramya Korlakai Vinayak

**ID:** 156772 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Kd0VMsL76>) | [PDF](<https://openreview.net/pdf?id=4Kd0VMsL76>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156772>)

_Abstract unavailable from the accessible public sources._

## Learning Recoverable Neural Networks against Weight Corruption via Simple Zero\-Sum Projection

**Authors:** Sanggeon Yun; Ryozo Masukawa; SungHeon Jeong; Hyunwoo Oh; Nathaniel D Bastian; Mohsen Imani

**ID:** 155717\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155717

[Paper](<https://openreview.net/forum?id=3RaBUzol9c>) | [PDF](<https://openreview.net/pdf?id=3RaBUzol9c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155717>)

_Abstract unavailable from the accessible public sources._

## Sequential Probability Assignment against Smoothed Adversaries with Unknown Base Measure

**Authors:** Ziyi Liu; Dan Roy

**ID:** 155252\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155252

[Paper](<https://openreview.net/forum?id=76QBYIOFgI>) | [PDF](<https://openreview.net/pdf?id=76QBYIOFgI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155252>)

Smoothed online learning has recently been studied as a way to bypass hardness results for the fully adversarial setting, which can be overly pessimistic\. In this framework, the adversary is constrained to generate contexts from distributions having a bounded density with respect to some fixed base measure $\\mu$\. Prior work makes the strong assumption that $\\mu$ is known to the learner, with notable exceptions including Block et al\. \(2024\) and Blanchard \(2025\)\. In this paper, we study sequential probability assignment \(a\.k\.a\., online learning with log loss\) with smooth, well\-specified data in the more general setting where $\\mu$ is \\emph\{unknown\}, without the Lipschitz condition imposed in the work of Block et al\. \(2024\) and Blanchard \(2025\)\. We prove regret upper bounds against both adaptive and oblivious smoothed adversaries: the adaptive bound is controlled by empirical $\\ell\_\\infty$ Hellinger entropy, while the oblivious bound improves this dependence to empirical $\\ell\_2$ Hellinger entropy, the notion that has been shown to characterize the complexity of learning with i\.i\.d\. data \(Bilodeau et al\., 2023\)\. Both bounds are obtained through algorithms based on truncated empirical Hellinger covers\. We complement these results with a general lower bound, showing that our upper bounds are essentially tight for some natural classes, which implies a separation in the difficulty of smoothed online learning between regimes where $\\mu$ is known and where it is unknown\.

## Superplatforms Are Strategically Compelled to Counteract AI Agents

**Authors:** Jianghao Lin; Jiachen Zhu; Zheli Zhou; Yunjia Xi; Weiwen Liu; Yong Yu; Weinan Zhang

**ID:** 140087\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140087

[Paper](<https://openreview.net/forum?id=IeXpXu7doj>) | [PDF](<https://openreview.net/pdf?id=IeXpXu7doj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140087>)

This position paper argues that superplatforms are strategically compelled to counteract, constrain, or even disrupt AI agents as these agents emerge as competing digital gatekeepers\. Superplatforms have built their business models on controlling user attention through targeted advertising, algorithmic content curation, and centralized access to digital services\. However, LLM\-driven AI agents threaten this model by acting on behalf of users, bypassing platform\-controlled interfaces, reducing exposure to advertisements, and potentially becoming the new entrance for digital traffic\. Drawing on gatekeeping theory, we analyze why this shift creates a structural conflict between superplatforms and AI agents: whoever controls the user’s primary interface controls information flow, user data, and monetization opportunities\. We then examine why common responses, such as proprietary agents and API gating, are insufficient against general\-purpose and GUI\-based agents, motivating the possibility of more proactive countermeasures\. Finally, we outline a taxonomy of such platform\-initiated countermeasures and identify the technical challenges they raise\. We do not advocate for adversarial disruption; rather, our goal is to surface this emerging tension early and encourage research toward open, collaborative, and user\-centric agent ecosystems\.

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

**ID:** 155257 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=73zQs0dgXW>) | [PDF](<https://openreview.net/pdf?id=73zQs0dgXW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155257>)

_Abstract unavailable from the accessible public sources._

## AdvJudge\-Zero: Binary Decision Flips in LLM\-as\-a\-Judge via Adversarial Control Tokens

**Authors:** Tung\-Ling Li; Yuhao Wu; Hongliang Liu

**ID:** 150552 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hIXruOAir7>) | [PDF](<https://openreview.net/pdf?id=hIXruOAir7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150552>)

_Abstract unavailable from the accessible public sources._

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

## Learning Robust Reasoning through Guided Adversarial Self\-Play

**Authors:** Shuozhe Li; Vaishnav Tadiparthi; Kwonjoon Lee; Nakul Agarwal; Hossein Nourkhiz Mahjoub; Ehsan Moradi Pari; Lizhang Chen; Du Cheng; Amy Zhang; Liu Leqi

**ID:** 154688 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BiyhNYlJ62>) | [PDF](<https://openreview.net/pdf?id=BiyhNYlJ62>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154688>)

_Abstract unavailable from the accessible public sources._

## Theory on Attention Dynamics for Out\-of\-Distribution In\-Context Learning

**Authors:** Junze Deng; Daouda Sow; Sen Lin; Yingbin Liang

**ID:** 155001 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9JWBP6GQk7>) | [PDF](<https://openreview.net/pdf?id=9JWBP6GQk7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155001>)

_Abstract unavailable from the accessible public sources._

## On Lipschitz Explosion in Deep Neural Networks with Normalization: Consequences for Optimization and Robustness

**Authors:** Ashkan Soleymani; Reyhaneh Hosseinpourkhoshkbari; Hadi Daneshmand; Patrick Jaillet

**ID:** 151236 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=btvnW0Xn5i>) | [PDF](<https://openreview.net/pdf?id=btvnW0Xn5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151236>)

_Abstract unavailable from the accessible public sources._

## TriPrompt: Progressive Local Prompting for Few\-shot Out\-of\-Distribution Detection

**Authors:** Ziyou Xiang; Chaowei Fang; Zhihong Wu; Jiliang Li; Di Xu; De Cheng

**ID:** 148805 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v0wZGD2GDB>) | [PDF](<https://openreview.net/pdf?id=v0wZGD2GDB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148805>)

_Abstract unavailable from the accessible public sources._

## Chess\-World\-Model: A 10M\-Game Benchmark for Exact State Tracking from Chess Move Sequences

**Authors:** Benjamin Walker; Terry Lyons

**ID:** 139263 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8i6faPmkw>) | [PDF](<https://openreview.net/pdf?id=b8i6faPmkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139263>)

World models require state tracking, which is the ability to maintain a correct latent state across action sequences\. Existing benchmarks are often synthetic or language\-based, limiting their value as tests of structured state updates in realistic domains\. We introduce Chess\-World\-Model, a large\-scale state\-tracking benchmark built from $10$ million real chess games, where models predict the exact board state reached after a sequence of legal moves\. Alongside a held\-out real\-game split, we include an out\-of\-distribution split from uniformly random legal play, which tests whether models learn the transition rules rather than shortcuts from common human positions\. Prior theoretical and empirical work has shown that Transformers struggle to state\-track, while input\-dependent linear RNNs require expressive state\-transition matrices to do so\. We therefore benchmark a causal Transformer, block\-diagonal SLiCE, Mamba\-3, and Gated DeltaNet with negative eigenvalues under a matched interface and training protocol\. The recurrent models strongly outperform the Transformer at $3$ and $8$ million parameters\. Real\-game performance saturates above $18$ million parameters, but the random\-uniform split remains discriminative up to $38$ million, exposing failures otherwise hidden by scale\. Additionally, ablations show that less expressive state\-transition mechanisms reduce performance on the out\-of\-distribution split for all three recurrent models\. Together, these results establish Chess\-World\-Model as a practical large\-scale benchmark for state tracking that exposes failures model scale would otherwise conceal\.

## Pareto DNN Verification: Fast for Most Queries

**Authors:** Yizhak Y\. Elboher; Avraham Raviv; Amihay Elboher; Zhouxing Shi; Hillel Kugler; Guy Katz

**ID:** 151618 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZDDAP6WLxi>) | [PDF](<https://openreview.net/pdf?id=ZDDAP6WLxi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151618>)

Formal verification of deep neural networks \(DNNs\) faces a fundamental scalability challenge: verifying robustness is NP\-hard and state\-of\-the\-art tools often time out on modern architectures\. We propose PAreto VErification, or PAVE: by augmenting DNNs with early exits \(EEs\) and verifying exit\-by\-exit, we solve the vast majority of robustness queries\-\-\-roughly 80\\%\-\-\-in a small fraction of the total time\. The key insight is that most inputs in a robustness neighborhood exit at an early layer, a provably tractable sub\-problem, so verification terminates far before analyzing the full network\. EEs can be added to any DNN without degrading accuracy \(within 0\.3\\% across all tested architectures\)\. We formalize the novel robustness property for EE networks, prove it is Fixed\-Parameter Tractable under a trace stability condition \(which commonly holds in practice\), and present a sound and complete verification algorithm\. Two sound optimizations\-\-\-$break$ \(early termination when the winner dominates\) and $continue$ \(skipping the inner loop when no runner\-up can win\)\-\-\-reduce SAFE\-case verification time by up to $10 \\times$\. Experiments on MNIST, CIFAR\-10, and CIFAR\-100 with networks from 600K to 33M parameters demonstrate that PAVE enables solving queries that were not solved otherwise, including formal verification of ResNet\-18 on CIFAR\-100\.

## Sequential Probability Assignment against Smoothed Adversaries with Unknown Base Measure

**Authors:** Ziyi Liu; Dan Roy

**ID:** 155252\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155252

[Paper](<https://openreview.net/forum?id=76QBYIOFgI>) | [PDF](<https://openreview.net/pdf?id=76QBYIOFgI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155252>)

Smoothed online learning has recently been studied as a way to bypass hardness results for the fully adversarial setting, which can be overly pessimistic\. In this framework, the adversary is constrained to generate contexts from distributions having a bounded density with respect to some fixed base measure $\\mu$\. Prior work makes the strong assumption that $\\mu$ is known to the learner, with notable exceptions including Block et al\. \(2024\) and Blanchard \(2025\)\. In this paper, we study sequential probability assignment \(a\.k\.a\., online learning with log loss\) with smooth, well\-specified data in the more general setting where $\\mu$ is \\emph\{unknown\}, without the Lipschitz condition imposed in the work of Block et al\. \(2024\) and Blanchard \(2025\)\. We prove regret upper bounds against both adaptive and oblivious smoothed adversaries: the adaptive bound is controlled by empirical $\\ell\_\\infty$ Hellinger entropy, while the oblivious bound improves this dependence to empirical $\\ell\_2$ Hellinger entropy, the notion that has been shown to characterize the complexity of learning with i\.i\.d\. data \(Bilodeau et al\., 2023\)\. Both bounds are obtained through algorithms based on truncated empirical Hellinger covers\. We complement these results with a general lower bound, showing that our upper bounds are essentially tight for some natural classes, which implies a separation in the difficulty of smoothed online learning between regimes where $\\mu$ is known and where it is unknown\.

## Superplatforms Are Strategically Compelled to Counteract AI Agents

**Authors:** Jianghao Lin; Jiachen Zhu; Zheli Zhou; Yunjia Xi; Weiwen Liu; Yong Yu; Weinan Zhang

**ID:** 140087\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140087

[Paper](<https://openreview.net/forum?id=IeXpXu7doj>) | [PDF](<https://openreview.net/pdf?id=IeXpXu7doj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140087>)

This position paper argues that superplatforms are strategically compelled to counteract, constrain, or even disrupt AI agents as these agents emerge as competing digital gatekeepers\. Superplatforms have built their business models on controlling user attention through targeted advertising, algorithmic content curation, and centralized access to digital services\. However, LLM\-driven AI agents threaten this model by acting on behalf of users, bypassing platform\-controlled interfaces, reducing exposure to advertisements, and potentially becoming the new entrance for digital traffic\. Drawing on gatekeeping theory, we analyze why this shift creates a structural conflict between superplatforms and AI agents: whoever controls the user’s primary interface controls information flow, user data, and monetization opportunities\. We then examine why common responses, such as proprietary agents and API gating, are insufficient against general\-purpose and GUI\-based agents, motivating the possibility of more proactive countermeasures\. Finally, we outline a taxonomy of such platform\-initiated countermeasures and identify the technical challenges they raise\. We do not advocate for adversarial disruption; rather, our goal is to surface this emerging tension early and encourage research toward open, collaborative, and user\-centric agent ecosystems\.

## Prudent\-Banker: No Extra Fees for Baseline Safety in Adversarial Bandits With and Without Delays

**Authors:** Ting Hu; Luanda Cai; Emmanouil\-Vasileios Vlatakis\-Gkaragkounis

**ID:** 149057\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149057

[Paper](<https://openreview.net/forum?id=tCIHEVndsO>) | [PDF](<https://openreview.net/pdf?id=tCIHEVndsO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149057>)

We study adversarial multi\-armed bandits with and without delayed feedback under a \*\*safety\-aware\*\* goal: achieving minimax\-optimal worst\-case regret while keeping nearly \*\*constant\*\* regret relative to a designated "safe" baseline policy\. Existing approaches can balance this trade\-off with immediate feedback for smooth comparators, but arbitrary delays can mistime transitions between \*\*conservatism\*\* and \*\*exploration\*\*, endangering the safety guarantee\.  To bridge this gap, we propose PRUDENT\-BANKER, a novel algorithm that combines a delay\-adapted variant of Online Mirror Descent with a modified phased\-aggression mechanism\. Its key technical contribution is a delay\-calibrated restart threshold that rigorously accounts for the worst\-case distortion induced by unobserved feedback and reliably detects comparator suboptimality\. We also establish new lower bounds for safety\-constrained adversarial delayed bandits, showing that the regret guarantees of PRUDENT\-BANKER are unimprovable, up to logarithmic factors, under the baseline\-safety requirement\.   To the best of our knowledge, PRUDENT\-BANKER is the first algorithm to achieve the optimal safety–robustness trade\-off: pseudo\-regret $\\tilde\{O\}\(\\sqrt\{T\}\+\\sqrt\{D\}\)$ together with $\\tilde\{O\}\(1\)$ regret against the safe comparator, both with and without delays\. Experiments across diverse delay distributions show that, unlike standard delay\-robust baselines, PRUDENT\-BANKER effectively balances safety and learning\.

## In\-Context Benign Overfitting: A Feature\-Selection Model in Linear Regression ICL

**Authors:** Puneesh Deora; Bhavya Vasudeva; Christos Thrampoulidis

**ID:** 154755\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154755

[Paper](<https://openreview.net/forum?id=BCHILY5fm6>) | [PDF](<https://openreview.net/pdf?id=BCHILY5fm6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154755>)

In in\-context learning \(ICL\), a frozen pre\-trained model solves tasks by conditioning on a prompt of a few input–output examples, without gradient updates\. If the task was present in pretraining but the particular prompt sequence was not, the resulting in\-distribution generalization is retrieval\-based ICL\. Learning\-based ICL instead reflects out\-of\-distribution generalization: the model succeeds on prompts generated by a novel task\. Empirically, both forms improve with scale\. By analogy to benign overfitting in supervised learning, we call this in\-context benign overfitting: larger models more faithfully memorize the pretraining tasks \(improving retrieval ICL\) while also generalizing better to novel tasks \(improving learning ICL\)\. We prove that this phenomenon already arises in a minimal in\-context linear\-regression feature\-selection model\. In contrast, standard in\-context linear\-regression models exhibit a retrieval–learning tradeoff, where the emergence of learning\-based ICL coincides with degraded retrieval\-based performance\.

## The road reaches every place, the short cut only one: Self\-Adversarial Shortcut Mitigation for AI\-Generated Image Detection

**Authors:** Haifeng Zhang; Qinghui He; Xiuli Bi; Bo Liu; Chi\-Man Pun; Bin Xiao

**ID:** 151317\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151317

[Paper](<https://openreview.net/forum?id=bO6CYKnaZo>) | [PDF](<https://openreview.net/pdf?id=bO6CYKnaZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151317>)

With the rapid advancement of generative models, AI\-generated images \(AIGIs\) have become increasingly realistic, posing new challenges for reliable detection\. In this work, we revisit the root causes of poor generalization in AIGI detectors from the perspective of shortcut learning\. We find that detectors often rely on spurious semantic cues or a single prominent artifact, causing the feature space to collapse toward low diversity and severely limiting generalization\. To characterize this issue, we propose the Generative Artifact Manifold Clustering \(GAMC\) hypothesis, which shows that although generative artifacts are multi\-dimensional, different generators occupy distinct distributions along these dimensions, making detectors that rely on local artifact cues inherently fragile\. To address this, we shift AIGI detection from “single\-cue reliance” to “multi\-dimensional discrimination” and introduce the Semantic–Artifact Self\-Adversarial Feature Learning \(SA\-AFL\) framework\. SA\-AFL progressively disentangles semantics from artifacts and employs a self\-adversarial mechanism to balance learning across artifact dimensions, enabling the model to retain richer and more shared generative features\. As a result, SA\-AFL reduces shortcut reliance and learns more transferable evidence for cross\-generator detection\. Comprehensive experiments on images from 23 generative models show that SA\-AFL improves ACC by 6\.84\\% and mAP by 8\.25\\% over state\-of\-the\-art methods\.

## Beyond Ground Truth: Evaluating Non\-Verifiable Reasoning in LLMs through Moral Robustness

**Authors:** Elizaveta Tennant; Benjamin Henke; Anita Keshmirian; Murray Shanahan; Verena Rieser; Kristian Lum; Sydney Levine; Julia Haas

**ID:** 154911\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154911

[Paper](<https://openreview.net/forum?id=A0CygfB9oj>) | [PDF](<https://openreview.net/pdf?id=A0CygfB9oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154911>)

As LLMs increasingly serve in advisory and deliberative roles, users rely on them for non\-verifiable reasoning in domains lacking objective ground truths\. However, traditional evaluations of LLM reasoning focus almost exclusively on fact\-based domains, such as mathematics and science, leaving uncertainty over whether and to what degree models can handle ambiguous, subjective, or value\-laden problems over time\. To address this concern, we propose moral reasoning as a paradigmatic subdomain of non\-verifiable reasoning\. We define moral robustness as a model’s capacity to exhibit sound moral reasoning across time and contexts, and we introduce a scalable, adversarial, multi\-turn evaluation framework to empirically measure this capability\. We simulate 48,000 user\-agent moral deliberations across four frontier LLMs, varying premise relevance, premise order, conversation duration, and the user's stated moral view\. We find that models successfully ignore morally\-irrelevant distractors, but shift their reasoning by up to 6\.5\\%, on average, towards the user's stated preferred moral view, and varying their reasoning depending on factors such as order \(altering moral judgments by order in 13\-22\\% of the cases\) and duration \(altering moral judgments between single\-turn and multi\-turn in 10\-24\\% of the cases\)\. Our analysis indicates that models tailor not just their final verdicts but their underlying justifications to align with a user’s moral viewpoint — a failure mode we characterize as moral deliberative sycophancy\.

## VSRo\-200: A Romanian Visual Speech Recognition Dataset for Studying Supervision and Multimodal Robustness

**Authors:** Iulia\-Maria Udrea; Alexandra Diaconu; Bogdan Alexe

**ID:** 138997\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138997

[Paper](<https://openreview.net/forum?id=rwHd9hxvoh>) | [PDF](<https://openreview.net/pdf?id=rwHd9hxvoh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138997>)

We introduce VSRo\-200, the first large\-scale dataset for visual speech recognition \(lip reading\) in Romanian, comprising 200 hours of real\-world podcast videos\. All samples are annotated with pseudo\-labels generated by a fine\-tuned Romanian ASR model, while a subset of 100 hours is additionally transcribed by humans, enabling controlled analysis of supervision quality under a unified framework\.  Building on this dataset, we establish a benchmark for visual speech recognition in low\-resource settings\. We systematically study the impact of supervision quality, showing that while human annotations provide better performance at fixed data scales, pseudo\-labels enable continued improvements through scalability\. We further evaluate robustness under domain shift using curated out\-of\-distribution \(OOD\) test sets, and analyze audio\-visual speech recognition \(AVSR\) under noisy conditions, where multimodal fusion significantly improves robustness compared to audio\-only models\.  Finally, we demonstrate that representations learned on VSRo\-200 transfer effectively to the LRRo benchmark for isolated word recognition, substantially outperforming previously reported results\.  Overall, VSRo\-200 provides a new testbed for studying supervision, domain generalization, and multimodal fusion in low\-resource visual speech recognition\.

## G\-PAC: Constructing Cohesive Pseudo\-Features for Generalizable Physical Adversarial Camouflage

**Authors:** tianrui lou; Haoqing Zhang; Jiawei Liang; Puning Zhao; XIAOCHUN CAO

**ID:** 151240\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151240

[Paper](<https://openreview.net/forum?id=bqovoYuYh5>) | [PDF](<https://openreview.net/pdf?id=bqovoYuYh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151240>)

Physical\-domain adversarial attacks present critical security threats to diverse AI systems, notably autonomous driving\. Generalization is an inherent requirement and a primary obstacle in physical attacks, manifesting as the ability of adversarial patterns to persist across varying environmental configurations and to transfer to unseen victim models\. While prior methods demonstrate generalization across specific models, their performance drops significantly on open\-vocabulary foundation models, with some approaches becoming entirely ineffective\. This lack of generalization stems from the failure of adversarial camouflage to construct a cohesive pseudo\-feature across perspectives, lacking the stable semantic representation characteristic of natural objects\. Such a deficiency arises because existing attack paradigms rely on independent view\-level optimization and non\-targeted objectives, which lead to semantically scattered features and inconsistent optimization directions\. To address these limitations, we propose Generalizable Physical Adversarial Camouflage \(G\-PAC\), a framework that transitions from view\-specific suppression to coordinated object\-level representation learning\.  G\-PAC maintains a momentum\-updated global pseudo\-feature center as a stable adversarial anchor to guide optimization across diverse configurations\.  By leveraging the feature space of a self\-supervised foundation model as a semantic prior, we introduce a contrastive regularization term to encourage feature aggregation while ensuring adversarial potency\.  Comprehensive digital and physical evaluations demonstrate the effectiveness of G\-PAC\. Notably, it outperforms the strongest baseline by an average AP@0\.5 margin of 0\.10 across seven diverse detector architectures in digital settings, and further extends this margin to 0\.12 in real\-world physical tests\. Furthermore, G\-PAC exhibits profound black\-box transferability against highly resilient open\-vocabulary foundation models, inducing an additional absolute AP@0\.5 reduction of 0\.30 on GLIP\.

## ASAT: Adaptive Scoring and Thresholding with Human Feedback for Robust Out\-of\-Distribution Detection

**Authors:** Daisuke Yamada; Harit Vishwakarma; Ramya Korlakai Vinayak

**ID:** 156772\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156772

[Paper](<https://openreview.net/forum?id=4Kd0VMsL76>) | [PDF](<https://openreview.net/pdf?id=4Kd0VMsL76>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156772>)

_Abstract unavailable from the accessible public sources._

## A Margin Perspective on LoRA: Robustness to Catastrophic Forgetting and Adapter Merging \(MaLoRA\)

**Authors:** Ziqing Xu; Hancheng Min; Lachlan MacDonald; Salma Tarmoun; Enrique Mallada; Weijie Su; Rene Vidal

**ID:** 155103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8PbIL0Lq7v>) | [PDF](<https://openreview.net/pdf?id=8PbIL0Lq7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155103>)

Low\-rank adaptation \(LoRA\) is the de facto method for parameter\-efficient fine\-tuning of large neural networks, achieving strong task adaptation with minimal trainable parameters and low optimization cost\. Beyond this efficiency, practitioners have observed two striking properties: \*robustness to catastrophic forgetting\* and the ability to \*merge independently trained adapters\* into a single model that performs competitively across multiple tasks\. These properties are central to continual and multi\-task learning, yet remain poorly understood\. In this work, we provide a theoretical explanation through a unified \*margin\-based perspective\*\. We analyze LoRA in multiclass linear classification under a near\-orthogonal task regime with $l\_2$\-regularization, and characterize the optimal LoRA adapter across regularization regimes\. Our analysis shows that, in an intermediate regime of regularization parameters, the optimal adapter aligns with the \*max\-margin solution\* on the fine\-tuning data\. Building on this characterization, we derive two key consequences\. First, we obtain closed\-form expressions for the margins on pre\-training and fine\-tuning data, revealing a precise margin trade\-off: the regularization parameter controls the balance between retention and adaptation\. Second, we analyze adapter merging, proving that merged models achieve positive margin on each task and deriving optimal mixing coefficients that balance margins across tasks and maximize the margin over their union\. These results lead to a simple, training\-free merging rule, which we term \*margin\-based LoRA merging\* \(MaLoRA\)\. Experiments on modern architectures and real datasets validate our theoretical predictions, showing that MaLoRA matches or outperforms several adapter\-merging baselines across a range of vision and language classification tasks\.

## Hyperbolic Concept Bottleneck Models

**Authors:** Daniel Uyterlinde; Swasti S Mishra; Pascal Mettes

**ID:** 151003\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151003

[Paper](<https://openreview.net/forum?id=dfLMID86Cd>) | [PDF](<https://openreview.net/pdf?id=dfLMID86Cd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151003>)

Concept Bottleneck Models \(CBMs\) have become a popular approach to enable interpretability in neural networks by constraining classifier inputs to a set of human\-understandable concepts\. While effective, current models embed concepts in flat Euclidean space, treating them as independent, orthogonal dimensions\. Concepts, however, are highly structured and organized in semantic hierarchies\. To resolve this mismatch, we propose Hyperbolic Concept Bottleneck Models \(HypCBM\), a post\-hoc framework that grounds the bottleneck in this structure by reformulating concept activation as asymmetric geometric containment in hyperbolic space\. Rather than treating entailment cones as a pre\-training penalty, we show they encode a natural test\-time activation signal: the margin of inclusion within a concept's entailment cone yields sparse, hierarchy\-aware activations without any additional supervision or learned modules\. We further introduce an adaptive scaling law for hierarchically faithful interventions, propagating user corrections coherently through the concept tree\. Empirically, HypCBM rivals post\-hoc Euclidean models trained on 20$\\times$ more data in sparse regimes required for human interpretability, with stronger hierarchical consistency and improved robustness to input corruptions\.

## CFC26: Building Evaluations for Deployment in Sonar\-Based Fish Counting

**Authors:** Madison Van Horn; Suzanne Stathatos; Sevan Brodjian; Justin Kay; Kai Van Brunt; Erik Young; Sara Beery; Pietro Perona; Michael Hobley

**ID:** 139843\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139843

[Paper](<https://openreview.net/forum?id=15IDKXrEp8>) | [PDF](<https://openreview.net/pdf?id=15IDKXrEp8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139843>)

Accurate counts of fish populations are essential for monitoring ecosystems and making decisions about conservation, harvest limits, and river management\. In many field deployments, these counts are obtained from sonar videos that experts must inspect manually, making large\-scale monitoring slow, expensive, and difficult to reproduce\. Automated counting systems have been proposed as a scalable alternative, but so far this promise has been difficult to realize in deployment\. Developing evaluations that better reflect real world deployment conditions will close this gap, and drive improvements to counting methods that translate to reality\. To achieve this, we propose Caltech Fish Counting 2026 \(CFC26\), a new dataset with improved evaluation protocols that simulate deployment to current and new rivers, testing in\-distribution and out\-of\-distribution performance\. We expand the CFC22 dataset to eleven deployment locations across nine Pacific salmon river systems from Alaska to Northern California, capturing a broader geographical and ecological range of data\. We additionally introduce two new evaluation metrics for counting, nMNE and nMANE, that mirror the operational workflow that experts use and help surface errors that frame\-level detection metrics do not capture\. Using these metrics, we reveal previously\-concealed directional bias in upstream vs downstream counts, which would have direct and significant ecological implications if undetected\.

## A Regularization\-Based Approach to Public Belief State Search for Adversarial Games

**Authors:** Sobhan Mohammadpour; Samuel Sokota; Brandon Kaplowitz; Zico Kolter; Noam Brown; Gabriele Farina

**ID:** 152665\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152665

[Paper](<https://openreview.net/forum?id=RIlBGF1FLf>) | [PDF](<https://openreview.net/pdf?id=RIlBGF1FLf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152665>)

The public belief state \(PBS\), which is the posterior over game histories conditioned on public information, is a fundamental abstraction for designing game\-theoretically sound search algorithms for imperfect\-information games\. Existing sound PBS search techniques for adversarial games fall into two categories: gadget\-game\-based algorithms \(including Libratus, DeepStack, Pluribus, Supremus, and Student of Games\) and ReBeL\-based algorithms\. Both these categories possess disadvantages, including a reliance on discontinuous functions, an inability to re\-solve subgames, and an implicit representation of policies\. In this work, we propose Gravel, a new approach for PBS search\-\-\-different from these previous two categories\-\-\-that achieves game\-theoretic soundness via regularization\. Unlike the aforementioned approaches, Gravel relies on smooth functions, can initiate search at any point in the game, and outputs explicit policies directly\. We empirically demonstrate the advantages of Gravel for no\-limit Texas hold'em, where we show that it outperforms ReBeL both in head\-to\-head competitions against Slumbot and in endgame solving\. We include our codebase in the submission, making Gravel the first open\-source high\-performance no\-limit Texas hold'em AI\.

## Learning Robust Representations for Defending White\-Box Adversarial Attacks in Continual Learning

**Authors:** Yusen Chen; Fei Ye; Qihe Liu; Adrian G\. Bors; shijie zhou

**ID:** 155739\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155739

[Paper](<https://openreview.net/forum?id=3KoSZdy13A>) | [PDF](<https://openreview.net/pdf?id=3KoSZdy13A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155739>)

_Abstract unavailable from the accessible public sources._

## REACT: A Lightweight Reliability\-Aware Framework for Spatio\-Temporal Out\-of\-Distribution Prediction

**Authors:** Yongfeng Su; Ziquan Fang; Jihua Yang; Wei Shao; Yunjun Gao

**ID:** 152742\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152742

[Paper](<https://openreview.net/forum?id=QhZRZ8Fqcc>) | [PDF](<https://openreview.net/pdf?id=QhZRZ8Fqcc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152742>)

In the real world, spatio\-temporal forecasting systems inevitably encounter out\-of\-distribution \(OOD\) shifts, where temporal shifts evolve due to seasonal patterns or policy changes, and spatial dependencies shift with sensor deployment, removal, or topology reconfiguration\. While many approaches attempt to address these challenges via invariant learning or causal adjustment, they implicitly assume that the contextual signals supporting prediction remain reliable\. Through empirical studies and theoretical analysis, we find that this assumption often breaks because: \(i\) node\-level context can become biased or incomplete under temporal and spatial OOD, yet existing methods lack mechanisms to assess such reliability; \(ii\) existing standard graph\-based aggregation propagates information with fixed strength, potentially amplifying corrupted context across nodes\. To this end, we propose REACT, a lightweight REliability\-Aware Context\-calibrated spatio\-Temporal forecaster that explicitly models and controls context reliability under OOD\. REACT decouples prediction from adaptation by first establishing a topology\-independent predictive anchor via a graph\-free linear encoder, ensuring transferable node\-wise representations\. It then constructs an availability\-aware context that captures both observed signals and prior\-based imputations, enabling explicit characterization of context completeness\. Building on this, REACT introduces a reliability\-guided calibration mechanism that dynamically modulates spatial support through uncertainty\-aware gating, selectively leveraging trustworthy neighbors while suppressing unreliable propagation\. Extensive experiments on ten real\-world datasets with diverse temporal and structural shifts demonstrate that REACT consistently outperforms eleven baselines\. These results highlight the importance of explicitly modeling and controlling context reliability as a fundamental principle for robust spatio\-temporal forecasting under distribution shift\. Our source code is available at https://anonymous\.4open\.science/r/REACT\-A82B\.

## stable\-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation

**Authors:** Lucas Maes; Quentin Le Lidec; Luiz Facury; Nassim Massaudi; Ayush Chaurasia; Francesco Capuano; Richard Gao; Taj Gillin; Dan Haramati; Damien Scieur; Yann LeCun; Randall Balestriero

**ID:** 139680\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139680

[Paper](<https://openreview.net/forum?id=ApzyaGdg38>) | [PDF](<https://openreview.net/pdf?id=ApzyaGdg38>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139680>)

Research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison\. Current practice is further limited by three key bottlenecks: fragile one\-off codebases, slow video data loading, and the lack of standardized generalization benchmarks\. We present Stable\-WorldModel \(SWM\), an open\-source platform for standardized and reproducible world modeling research and evaluation\. It delivers \(1\) a high\-performance Lance\-based data layer with native support and conversion tools for MP4, HDF5, and LeRobot datasets, \(2\) clean, well\-tested implementations of modern world model baselines and planning solvers, and \(3\) a broad suite of environments and tasks extended with controllable visual, geometric, and physical factors of variation for systematic in\-silico evaluation of dynamics understanding, control performance, representation quality, and out\-of\-distribution generalization\. By unifying the full pipeline under a single, scalable framework, SWM dramatically reduces research overhead and accelerates trustworthy progress toward reliable world models\.

## Pointillism: Probing\-Based Model Compatibility for Robust Collaborative Machine Learning

**Authors:** Yang Li; Adams Wai Kin Kong

**ID:** 152203\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152203

[Paper](<https://openreview.net/forum?id=UnqyrJLKng>) | [PDF](<https://openreview.net/pdf?id=UnqyrJLKng>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152203>)

Assessing model compatibility is a key challenge in collaborative machine learning\. Heterogeneous data distributions can lead to discrepancies among independently trained models that degrade performance when combined, while adversarial manipulation can introduce harmful behaviors\. In both cases, reliable evaluation prior to integration is essential\. Existing approaches mostly rely on parameter\-space statistics, which do not reflect model behavior and are often unreliable in non\-IID settings\. Inspired by the pointillism art style, where images are formed from small, structured dots of color, we propose Pointillism, a probing\-based framework that evaluates model compatibility directly in function space without requiring task data\. The method uses structured, randomized probes sampled from an out\-of\-distribution space to elicit model responses\. From these responses, we construct compact model signatures that capture both global prediction characteristics and class\-level features\. Compatibility is assessed through feature consensus, measuring cross\-model agreement on class\-level representations via probe transfer\. This provides a behavior\-centric and fine\-grained view of model alignment\. We apply the framework to federated learning, where consensus\-based selection identifies a self\-consistent subset of client models for aggregation\. Experiments in federated learning demonstrate improved robustness against both untargeted and backdoor attacks, outperforming existing defense methods\. Our source code is included in the supplementary material\.

## Do Not Let Spikes Flip: Margin\-Resculpted Learning for Robust Spiking Neural Networks

**Authors:** Desong Zhang; Jia Hu; Geyong Min

**ID:** 152693\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152693

[Paper](<https://openreview.net/forum?id=R7E5DE5F3A>) | [PDF](<https://openreview.net/pdf?id=R7E5DE5F3A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152693>)

Spiking Neural Networks \(SNNs\) transmit information through energy\-efficient discrete spike events, unlike the continuous activations used in conventional Artificial Neural Networks \(ANNs\)\. Existing SNN robustness methods often inherit ANN\-oriented objectives that suppress continuous perturbations or stabilize membrane\-potential dynamics\. In this paper, we argue that SNN robustness should be analyzed through the stability of spike patterns under perturbations\. We formalize perturbation\-induced spike flips and introduce the flip rate as a training\-agnostic metric for quantifying spike\-pattern instability\. We further show that spike flips are closely associated with membrane potentials near the firing threshold, and introduce margin occupancy to quantify this threshold\-margin vulnerability\. Based on these findings, we propose Margin\-Resculpted Learning \(MRL\), which regularizes excessive threshold\-margin occupancy with an activity\-adaptive bound\. MRL reduces vulnerable spike flips while preserving the threshold region needed for surrogate\-gradient learning\. Experiments across static and event\-based datasets, architectures, surrogate functions, and attack settings demonstrate consistent robustness improvements\.

## Weighted Conformal Clustering

**Authors:** Anirban Nath; YoonHaeng Hur; Genevera Allen

**ID:** 150203 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jxX0Xpi5Wc>) | [PDF](<https://openreview.net/pdf?id=jxX0Xpi5Wc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150203>)

Clustering is a central tool for discovering latent structure in unlabeled data, yet modern clustering pipelines often end with a hard assignment of each observation to a cluster without rigorous measures of assignment uncertainty\. We propose a novel weighted conformal approach for constructing confidence sets for cluster labels\. The key difficulty is that the labels available for calibration are not observed ground\-truth labels, but synthetic labels produced by a data\-dependent clustering algorithm\. Our method develops a conformal inference algorithm that corrects the resulting mismatch with the latent target labels through weights by formulating conformal clustering as a conditional label\-distribution shift problem\. We first derive an oracle procedure that attains finite\-sample marginal coverage and then develop a computationally tractable and implementable version using estimated conditional label probabilities and augmented calibration\. We show that the coverage of the estimated\-weight procedure depends on the estimator, giving an explicit bound on the loss relative to the nominal level\. Empirical studies beyond the mixture\-model settings, explored by the recently developed stochastic split conformal clustering procedure, demonstrate that the proposed weighted approach offers improvements in non\-linear and high\-dimensional clustering applications in terms of set size\.

## Variational Cover Modification Steganography

**Authors:** Martin Beneš; Rainer Böhme

**ID:** 149566 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pAhg9hlxJV>) | [PDF](<https://openreview.net/pdf?id=pAhg9hlxJV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149566>)

Current approaches to learning\-based image steganography are, at best, imperceptible, but their security is vulnerable to state\-of\-the\-art detector networks\. Variational cover modification steganography tackles this problem by training a generator network that can predict the parameters of the distribution of the least detectable stego\-noise for a given cover image\. It uses syndrome coding to embed the message within the distribution constraint and retrieve it exactly when a secret key is provided\. Adversarial learning ensures that the generator evolves against a continuously refined detector\. Experiments demonstrate significant security improvements, and several ablations support the generator architecture and the training protocol\.

## FocusBranch: Combinatorial Branch\-and\-Bound for $\\ell\_0$ Neural Network Robustness Verification

**Authors:** Renwei Deng; Yang He; Linyi Li; Yuepeng Wang

**ID:** 152059\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152059

[Paper](<https://openreview.net/forum?id=VoRt2Q8ngL>) | [PDF](<https://openreview.net/pdf?id=VoRt2Q8ngL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152059>)

Verifying the local robustness of neural networks under $\\ell\_0$ perturbations is inherently combinatorial: a verifier must reason over all sparse subsets of perturbed pixels\. This paper presents FocusBranch, a combinatorial branch\-and\-bound framework for $\\ell\_0$ robustness verification\. The key insight is to decompose the $\\ell\_0$\-ball using nodes, where each node consists of a focus pixel set $\\mathcal\{S\}$ and a level $l$, requiring at least $l$ perturbed pixels to lie in $\\mathcal\{S\}$\. This abstraction unifies two branching mechanisms: concrete nodes branch through upper shadows to fix additional perturbed locations, while super nodes branch through covering designs to cover many perturbation cases with fewer child nodes\. FocusBranch proves node safety by concretizing linear relaxations over node\-constrained $\\ell\_0$\-balls and recursively branches on unknown nodes\. Rather than relying on a fixed verification strategy, it samples nodes across levels to estimate success rates and costs, then selects a starting level and branching strategy predicted to minimize verification time\. Experiments on fully connected and convolutional classifiers for MNIST, Fashion\-MNIST, and CIFAR\-10 show that FocusBranch verifies $\\ell\_0$ local robustness effectively across architectures and outperforms state\-of\-the\-art verifiers\.

## Dynamic Context Modeling for Longitudinal Mental Health Monitoring under Distribution Shift

**Authors:** Seungwan Jin; Taehyung Noh; Junghyun Kim; Uichin Lee; Kyungsik Han

**ID:** 151758\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151758

[Paper](<https://openreview.net/forum?id=YFPmKTRY1L>) | [PDF](<https://openreview.net/pdf?id=YFPmKTRY1L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151758>)

Mobile and wearable sensing offer a scalable pathway to longitudinal mental health monitoring, yet accurate prediction remains limited by two fundamental forms of distribution shift in human behavior\. The first arises across users, where similar sensor patterns can carry different clinical meanings, a phenomenon we call inter\-subject heterogeneity\. The second arises within a single user, where behavioral baselines themselves evolve over time, producing intra\-subject behavioral drift\. In this domain, ground\-truth labels come from Ecological Momentary Assessment \(EMA\), brief self\-reports collected in everyday life that are intrusive and inherently sparse\. As a result, approaches that address these distribution shifts by updating model parameters are difficult to apply\. To address this gap, we propose DyCon \(Dynamic Context Modeling\), a dual\-loop framework that personalizes by building and evolving a separate natural\-language personal context for each user, without updating any model parameters\. Within each session, a momentary refinement loop restructures this personal context to resolve inter\-subject heterogeneity\. Across sessions, a longitudinal update loop integrates only validated insights to track intra\-subject behavioral drift\. Extensive experiments on four public benchmarks \(GLOBEM, PMData, StudentLife, LifeSnaps\) show that DyCon consistently outperforms baseline methods, particularly under sparse supervision and behavioral drift\. Our results suggest that evolving an explicit personal context offers a practical pathway for longitudinal personalization in real\-world health monitoring\.

## Logit\-Gap Steering: A Forward\-Pass Diagnostic for Alignment Robustness

**Authors:** Tung\-Ling Li; Hongliang Liu

**ID:** 155257\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155257

[Paper](<https://openreview.net/forum?id=73zQs0dgXW>) | [PDF](<https://openreview.net/pdf?id=73zQs0dgXW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155257>)

_Abstract unavailable from the accessible public sources._

## AdvJudge\-Zero: Binary Decision Flips in LLM\-as\-a\-Judge via Adversarial Control Tokens

**Authors:** Tung\-Ling Li; Yuhao Wu; Hongliang Liu

**ID:** 150552\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150552

[Paper](<https://openreview.net/forum?id=hIXruOAir7>) | [PDF](<https://openreview.net/pdf?id=hIXruOAir7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150552>)

_Abstract unavailable from the accessible public sources._

## Total Variation Distance Estimation in Autoregressive Models

**Authors:** Eric Price; Kevin Tian; Zhiyang Xun; Yusong Zhu

**ID:** 153131 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NfXgepjfRz>) | [PDF](<https://openreview.net/pdf?id=NfXgepjfRz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153131>)

Modern LLM deployments use a number of implementation choices and inference optimizations \(e\.g\., batching, custom kernels, quantization\) on top of fixed weights, so two engines serving "the same model" can produce meaningfully different distributions\.  We study the problem of estimating the total variation \(TV\) distance between two length\-$n$ autoregressive distributions to additive error $\\varepsilon$, under three access models: 1\. Under \*sample\* access, we use $\\widetilde\{O\}\(\\frac\{n^2K\}\{\\varepsilon^2\}\)$ queries, where $K$ is the maximum support of the next\-token distribution\. 2\. Under \*logit\* access, we use $O\(\\frac\{n\}\{\\varepsilon^2\}\)$ queries, and this is tight\. 3\. Under \*noisy logit\* access, we can smoothly interpolate between the above two: if probability values are given to $\\sigma$ relative error, we use $\\widetilde\{O\}\(\\frac\{n \+ n^2\\sigma^2\}\{\\varepsilon^2\}\)$ queries\. We complement our theoretical results with an empirical evaluation of our algorithms, for example measuring the distance between \\texttt\{sglang\} and \\texttt\{vllm\} on standard settings\. Our experiments highlight the robustness and practicality of estimating the total variation distance, compared to existing alternatives such as KL divergence\.

## RPP: A Certified Poisoned\-Sample Detection Framework for Backdoor Attacks under Dataset Imbalance

**Authors:** Miao Lin; Feng Yu; Rui Ning; Lusi Li; Jiawei Chen; Qian Lou; Mengxin Zheng; Chunsheng Xin; Hongyi Wu

**ID:** 156750 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WyPkotlgqQ>) | [PDF](<https://openreview.net/pdf?id=WyPkotlgqQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156750>)

Deep neural networks are highly susceptible to backdoor attacks, yet most defense methods to date rely on balanced data, overlooking the pervasive class imbalance in real\-world scenarios that can amplify backdoor threats\. This paper presents the first in\-depth investigation of how the dataset imbalance amplifies backdoor vulnerability, showing that \(i\) the imbalance induces a majority\-class bias that increases susceptibility and \(ii\) conventional defenses degrade significantly as the imbalance grows\. To address this, we propose Randomized Probability Perturbation \(RPP\), a certified poisoned\-sample detection framework that operates in a black\-box setting using only model output probabilities\. For any inspected sample, RPP determines whether the input has been backdoor\-manipulated, while offering provable within\-domain detectability guarantees and a probabilistic upper bound on the false positive rate\. Extensive experiments on five benchmarks \(MNIST, SVHN, CIFAR\-10, TinyImageNet and ImageNet10\) covering 10 backdoor attacks and 12 baseline defenses show that RPP achieves significantly higher detection accuracy than state\-of\-the\-art defenses, particularly under dataset imbalance\. RPP establishes a theoretical and practical foundation for defending against backdoor attacks in real\-world environments with imbalanced data\.

## Chess\-World\-Model: A 10M\-Game Benchmark for Exact State Tracking from Chess Move Sequences

**Authors:** Benjamin Walker; Terry Lyons

**ID:** 139263\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139263

[Paper](<https://openreview.net/forum?id=b8i6faPmkw>) | [PDF](<https://openreview.net/pdf?id=b8i6faPmkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139263>)

World models require state tracking, which is the ability to maintain a correct latent state across action sequences\. Existing benchmarks are often synthetic or language\-based, limiting their value as tests of structured state updates in realistic domains\. We introduce Chess\-World\-Model, a large\-scale state\-tracking benchmark built from $10$ million real chess games, where models predict the exact board state reached after a sequence of legal moves\. Alongside a held\-out real\-game split, we include an out\-of\-distribution split from uniformly random legal play, which tests whether models learn the transition rules rather than shortcuts from common human positions\. Prior theoretical and empirical work has shown that Transformers struggle to state\-track, while input\-dependent linear RNNs require expressive state\-transition matrices to do so\. We therefore benchmark a causal Transformer, block\-diagonal SLiCE, Mamba\-3, and Gated DeltaNet with negative eigenvalues under a matched interface and training protocol\. The recurrent models strongly outperform the Transformer at $3$ and $8$ million parameters\. Real\-game performance saturates above $18$ million parameters, but the random\-uniform split remains discriminative up to $38$ million, exposing failures otherwise hidden by scale\. Additionally, ablations show that less expressive state\-transition mechanisms reduce performance on the out\-of\-distribution split for all three recurrent models\. Together, these results establish Chess\-World\-Model as a practical large\-scale benchmark for state tracking that exposes failures model scale would otherwise conceal\.

## Pareto DNN Verification: Fast for Most Queries

**Authors:** Yizhak Y\. Elboher; Avraham Raviv; Amihay Elboher; Zhouxing Shi; Hillel Kugler; Guy Katz

**ID:** 151618\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151618

[Paper](<https://openreview.net/forum?id=ZDDAP6WLxi>) | [PDF](<https://openreview.net/pdf?id=ZDDAP6WLxi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151618>)

Formal verification of deep neural networks \(DNNs\) faces a fundamental scalability challenge: verifying robustness is NP\-hard and state\-of\-the\-art tools often time out on modern architectures\. We propose PAreto VErification, or PAVE: by augmenting DNNs with early exits \(EEs\) and verifying exit\-by\-exit, we solve the vast majority of robustness queries\-\-\-roughly 80\\%\-\-\-in a small fraction of the total time\. The key insight is that most inputs in a robustness neighborhood exit at an early layer, a provably tractable sub\-problem, so verification terminates far before analyzing the full network\. EEs can be added to any DNN without degrading accuracy \(within 0\.3\\% across all tested architectures\)\. We formalize the novel robustness property for EE networks, prove it is Fixed\-Parameter Tractable under a trace stability condition \(which commonly holds in practice\), and present a sound and complete verification algorithm\. Two sound optimizations\-\-\-$break$ \(early termination when the winner dominates\) and $continue$ \(skipping the inner loop when no runner\-up can win\)\-\-\-reduce SAFE\-case verification time by up to $10 \\times$\. Experiments on MNIST, CIFAR\-10, and CIFAR\-100 with networks from 600K to 33M parameters demonstrate that PAVE enables solving queries that were not solved otherwise, including formal verification of ResNet\-18 on CIFAR\-100\.

## COSMIO: A Benchmark for Cross\-Survey Modality Imputation

**Authors:** Dichang Zhang; Yixuan Shao; Jiali Cui; Haotian Yin; Yuanpeng Liu; Jiaiq Deng; Xiang Gao; Zhiqiang Lao; Heather Yu; Simon Birrer; Dimitris Samaras

**ID:** 139351\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139351

[Paper](<https://openreview.net/forum?id=UwoE2LI1HF>) | [PDF](<https://openreview.net/pdf?id=UwoE2LI1HF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139351>)

Large\-scale astronomical surveys define a heterogeneous, partially observed multi\-survey learning setting: each object is observed by only a subset of surveys, while survey observations differ in resolutions, wavelength coverage, noise characteristics, and footprints\. We formalize this as the problem of cross\-survey modality imputation and introduce COSMIO, a multi\-survey benchmark of aligned observations obtained by forward\-modeling shared astrophysical scenes across LSST, Euclid, and Roman under survey\-specific instrument characteristics\. The benchmark enables systematic evaluation of imputation across source\-target survey combinations and missing\-survey patterns\. We evaluate a broad range of machine learning methods for imputation\. Our results reveal a clear domain gap: methods developed for existing imputation settings transfer poorly to the astronomical survey setting, indicating that cross\-survey imputation constitutes a distinct learning problem\. Beyond common\-object imputation, we identify missing\-modality rare\-event imputation as a central challenge\. This regime arises in the early stages of new surveys, when rare but scientifically valuable phenomena may be available only from old surveys\. We use strong gravitational lensing, where light from a background galaxy is gravitationally deflected by a foreground galaxy, as a representative rare\-event setting\. We evaluate model performance on zero\-shot imputation of gravitational lenses and on downstream scientific tasks using the imputed lens observations\. On our constructed evaluation set of galaxy–galaxy strong lenses, performance degrades under rare\-event distribution shift, and this degradation further propagates to the downstream lens\-detection task\. Our results establish cross\-survey imputation as a distinct and challenging machine learning problem, highlighting the need for methods that are robust to distribution shift and aligned with scientific objectives\. Code and data are available at https://anonymous\.4open\.science/r/COSMI\-3671/\.

## Strengthen Out\-of\-Distribution Detection via Adaptive Mahalanobis Gap

**Authors:** Kunpeng Sui; Rundong He; Jie Su

**ID:** 148207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYv58OEor2>) | [PDF](<https://openreview.net/pdf?id=zYv58OEor2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148207>)

Deep neural networks have achieved significant success on in\-distribution \(ID\) tasks, but out\-of\-distribution \(OOD\) samples during inference can lead to unreliable predictions\. To address this issue, distance\-based methods exploit the geometric structure of feature space for OOD detection\. However, methods based on static information geometry fail to address geometry distorted by ill\-distributed samples\. Although prior work reduces the misclassification of OOD samples as ID by adjusting the residual space with real\-time features, it fails to address the misclassification of ID samples as OOD\. In addition, existing distance\-based methods ignore class\-specific characteristics when computing deviation feature and rely on the nearest prototype for uncertainty estimation, leading to suboptimal OOD detection performance\. To address these issues, we propose Adaptive Mahalanobis Gap \(AMG\)\. Specifically, we first strengthen the principal space along real\-time feature directions to reduce the misclassification of ID samples as OOD\. Subsequently, we incorporate class variance and prototype norms to mitigate bias of deviation feature from class\-wise distributional differences\. Finally, we introduce the Mahalanobis gap scoring for uncertainty scoring to overcome bias from single\-prototype reliance\. Experiments on CIFAR\-10/100 and ImageNet\-1k show that AMG consistently outperforms state\-of\-the\-art methods in FPR@95 and AUROC\. Our code is available at https://anonymous\.4open\.science/r/AMG\_AR\.

## Cross\-Distribution Generalization in Longitudinal Behavioral Data Through Frozen Coherence Constraints

**Authors:** Ahatsham Hayat; Mohammad Hasan

**ID:** 150347 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ioWVlKwBW2>) | [PDF](<https://openreview.net/pdf?id=ioWVlKwBW2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150347>)

Cross\-distribution generalization in longitudinal behavioral data remains a persistent obstacle\. Models trained on one cohort degrade on new populations, and prior approaches operating through feature\-distribution alignment or model\-capacity scaling have not substantially improved cross\-distribution performance\. We diagnose the limitation as insufficient representational constraints during training\. We propose holding the language model frozen, so that the coherence criterion is defined by its pre\-trained language prior and cannot shift during training\. We introduce PRISM, a frozen\-backbone framework that decomposes each behavioral trajectory into temporal, spectral, and semantic streams and integrates them through directed cross\-attention with instance\-specific gating\. Training uses a dual\-path objective combining discriminative and coherence constraints on a shared representation\. On GLOBEM, a widely used cross\-cohort benchmark for behavioral health prediction, PRISM achieves 79\.93\\% out\-of\-distribution accuracy, 27\.13 points above the previous best, with an in\-distribution to out\-of\-distribution accuracy gap of 1\.24 points\. PRISM also achieves the highest OOD accuracy on three additional datasets \(LifeSnaps anxiety, MFAFY engagement, CrossCheck schizophrenia symptoms\), with consistently smaller ID\-to\-OOD gaps than fine\-tuned VLM baselines\. Ablations identify the frozen coherence constraint as the component responsible for the distribution\-invariance pattern\.

## Dual\-Granularity Learning for Regression with Continuous Noisy Labels

**Authors:** Hui GUO; Boyu Wang; Grace Yi

**ID:** 153289\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153289

[Paper](<https://openreview.net/forum?id=MNQLeuQSPM>) | [PDF](<https://openreview.net/pdf?id=MNQLeuQSPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153289>)

Learning with noisy labels has been extensively studied for classification, yet its regression counterpart remains relatively underexplored\. Unlike classification, regression involves continuous\-valued targets where label noise exhibits heterogeneous magnitudes across instances, which poses conflicting requirements on the model: correcting small\-to\-moderate deviations requires sensitivity to label values for instance\-level refinement, whereas large deviations caused by corrupted or outlying annotations render exact label values unreliable, necessitating reduced reliance on exact labels and instead leveraging ordinal structure among samples\. These requirements call for methods that capture both global structure and sample\-specific deviations in a unified manner\.   To this end, we propose GRAIN, a dual\-granularity framework for robust noisy regression\. At the fine\-grained level, we derive an explicit residual learning mechanism from a robust loss formulation, introducing instance\-specific auxiliary variables to decouple label noise from predictive signals\. At the coarse\-grained level, we introduce a binning\-based contrastive regularization that enforces an order\-preserving feature structure aligned with label proximity, addressing noise beyond the capacity of local residual refinement\. The two levels are coupled via a histogram\-based bridging mechanism that enables bidirectional information flow: coarse\-grained structural guidance establishes a well\-ordered feature space that anchors residual learning, while fine\-grained residual refinement corrects instance\-level deviations that structural regularization alone cannot resolve\. Experimental results show that GRAIN consistently improves robustness and generalization under diverse noise conditions\.

## Strengthen Out\-of\-Distribution Detection via Adaptive Mahalanobis Gap

**Authors:** Kunpeng Sui; Rundong He; Jie Su

**ID:** 148207\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148207

[Paper](<https://openreview.net/forum?id=zYv58OEor2>) | [PDF](<https://openreview.net/pdf?id=zYv58OEor2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148207>)

Deep neural networks have achieved significant success on in\-distribution \(ID\) tasks, but out\-of\-distribution \(OOD\) samples during inference can lead to unreliable predictions\. To address this issue, distance\-based methods exploit the geometric structure of feature space for OOD detection\. However, methods based on static information geometry fail to address geometry distorted by ill\-distributed samples\. Although prior work reduces the misclassification of OOD samples as ID by adjusting the residual space with real\-time features, it fails to address the misclassification of ID samples as OOD\. In addition, existing distance\-based methods ignore class\-specific characteristics when computing deviation feature and rely on the nearest prototype for uncertainty estimation, leading to suboptimal OOD detection performance\. To address these issues, we propose Adaptive Mahalanobis Gap \(AMG\)\. Specifically, we first strengthen the principal space along real\-time feature directions to reduce the misclassification of ID samples as OOD\. Subsequently, we incorporate class variance and prototype norms to mitigate bias of deviation feature from class\-wise distributional differences\. Finally, we introduce the Mahalanobis gap scoring for uncertainty scoring to overcome bias from single\-prototype reliance\. Experiments on CIFAR\-10/100 and ImageNet\-1k show that AMG consistently outperforms state\-of\-the\-art methods in FPR@95 and AUROC\. Our code is available at https://anonymous\.4open\.science/r/AMG\_AR\.

## Are We Making Progress in Multimodal Domain Generalization? A Comprehensive Benchmark Study

**Authors:** Hao Dong; Hongzhao Li; Shupan Li; Muhammad Haris Khan; Eleni Chatzi; Olga Fink

**ID:** 139747 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6tWrq9LvUT>) | [PDF](<https://openreview.net/pdf?id=6tWrq9LvUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139747>)

_Abstract unavailable from the accessible public sources._

## Flipping Bits, Not Gradients: Sharpness\-Aware Minimization Directly on the Boolean Hypercube

**Authors:** Ba\-Hien Tran

**ID:** 150844 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evBaB8ZWOV>) | [PDF](<https://openreview.net/pdf?id=evBaB8ZWOV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150844>)

Sharpness\-Aware Minimization \(SAM\) improves generalization in continuous deep learning, yet applying it to binary\-weight networks via latent\-space heuristics suffers from a fundamental geometric mismatch: continuous perturbations do not faithfully probe the discrete loss landscape on $\\\{\-1,\+1\\\}^n$\.  We introduce BOLD\-SAM, the first sharpness\-aware optimizer that operates natively on the Boolean hypercube, replacing the Euclidean $\\ell\_p$\-ball with a $k$\-bit Hamming ball and solving the resulting discrete min\-max problem via greedy ascent followed by sharpness\-aware bit\-flip descent\.  The objective is theoretically justified from three complementary perspectives: PAC\-Bayes, compression, and distributionally robust optimization\.  We prove an approximation guarantee for the ascent step and a finite\-time convergence bound for the descent, both governed by the discrete interaction Hessian, which emerges as the unifying quantity linking ascent quality to convergence rate\.  We further connect discrete flatness to Forman\-Ricci curvature and algorithmic complexity\. Experiments on a wide range of architectures and datasets demonstrate consistent improvements in clean accuracy and out\-of\-distribution robustness over standard binary training and latent\-space SAM baselines\.

## Fault Tolerant Coresets

**Authors:** Milind Prabhu; Chris Schwiegelshohn; Sudarshan Shyam

**ID:** 153584 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKronbQMtE>) | [PDF](<https://openreview.net/pdf?id=KKronbQMtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153584>)

Coresets are widely used to compress large datasets into small weighted summaries\. We mainly focus on the $k$\-means objective where the cost is defined to be the sum of squared distances of every point to its closest center\. A coreset approximately preserves the cost of every candidate set of $k$ centers up to a small $\(1\\pm \\varepsilon\)$ multiplicative error\.  By far the most flexible and powerful technique in this line of work is sensitivity sampling, where we pick points proportionate to their highest relative cost contribution in any solution\.  In general, the transmission and storage of these coresets are assumed to be reliable and always keep the coreset intact, without accounting for the possibility of corruptions\. This raises a basic question: To what extent can coresets be made fault\-tolerant? We study an adversarial fault model in which up to $f$ points of the coreset may be arbitrarily corrupted, including their weights, and the goal is to recover a valid coreset from the corrupted summary\.  Our main result shows that sensitivity sampling yields fault\-tolerant coresets of size $O\(f\\cdot k/\\varepsilon \+ m\)$, where $m$ is the size of a non\-fault\-tolerant coreset computed via sensitivity sampling\.  This result is also optimal in that any fault\-tolerant $k$\-means coreset must have size $\\Omega\(f \\cdot k/\\varepsilon\)$\. The decoding algorithm computing a sanitized coreset from a corrupted one is efficient and we demonstrate practical viability via our experiments\.

## Nearly Optimal Robust Covariance and Scatter Matrix Estimation Beyond Gaussians

**Authors:** Gleb Novikov

**ID:** 149150 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sTDb6ukoob>) | [PDF](<https://openreview.net/pdf?id=sTDb6ukoob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149150>)

We study the problem of \\emph\{computationally efficient\} robust estimation of the covariance/scatter matrix of elliptical distributions\-\-\-that is, affine transformations of spherically symmetric distributions\-\-\-under the \\emph\{strong contamination model\} in the high\-dimensional regime $d \\gtrsim 1/\\varepsilon^2$, where $d$ is the dimension and $\\varepsilon$ is the fraction of adversarial corruptions\. We show that the structure inherent to elliptical distributions enables us to achieve estimation guarantees comparable to those known for the Gaussian case\.  We propose an algorithm that, under a \{very mild assumption\} on the effective rank of the scatter matrix $\\Sigma$, and given a nearly optimal number of samples $n = \\tilde\{O\}\(d^2/\\varepsilon^2\)$, computes in polynomial time an estimator $\\hat\{\\Sigma\}$ satisfying $ \\left\\Vert \\Sigma^\{\-1/2\} \\hat\{\\Sigma\} \\Sigma^\{\-1/2\} \- Id \\right\\Vert\_\{\\text\{F\}\} \\le O\(\\varepsilon \\log\(1/\\varepsilon\)\) \. $ This matches the best known guarantees for the Gaussian setting\.  As an application of our result, we obtain \\emph\{efficiently computable, nearly optimal robust covariance estimators\}, significantly generalizing prior results that were restricted to the Gaussian case or required, in particular, matching the Gaussian fourth moment\. Specifically, for elliptical distributions satisfying the Hanson\-\-Wright inequality \(including Gaussians, uniform distributions over ellipsoids, and more generally elliptical distributions with Gaussian\-type radial concentration\), our estimator $\\hat\{\\Sigma\}$ of the covariance $\\Sigma$ achieves the same error guarantee as in the Gaussian case\. Moreover, for elliptical distributions with sub\-exponential tails \(such as the multivariate Laplace distribution\), our covariance estimator $\\hat\{\\Sigma\}$ satisfies the spectral norm bound $ \\left\\Vert \\Sigma^\{\-1/2\} \\hat\{\\Sigma\} \\Sigma^\{\-1/2\} \- Id \\right\\Vert \\le O\(\\varepsilon \\log\(1/\\varepsilon\)\) \. $ Remarkably, despite the heavier tails of such distributions, the covariance can still be estimated at the same rate as in the Gaussian case\-\-\-a phenomenon unique to high dimensions and absent in low\-dimensional settings\.  Our approach is based on estimating the covariance of the \\emph\{spatial sign\} \(i\.e\., the projection onto the sphere\) of elliptical distributions\. As part of our framework, we develop a generalization of the standard covariance filtering algorithm that allows us to work with distributions whose fourth moment differs from that of the Gaussian distribution\.

