# Probabilistic Methods / Monte Carlo and Sampling Methods

概率方法 / 蒙特卡洛与采样

35 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Intra\-Option Fitted Q\-Evaluation: Evaluating Hierarchical Policies from Non\-Hierarchical Data

**Authors:** Yunfu Deng; Josiah Hanna

**ID:** 149125 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=shxhGfhWBq>) | [PDF](<https://openreview.net/pdf?id=shxhGfhWBq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149125>)

Off\-policy evaluation \(OPE\) estimates the expected return of a target policy from previously collected data without additional environment interaction\. While OPE methods for flat Markovian policies are well studied, little work has addressed evaluating hierarchical policies in which a high\-level policy selects temporally extended options that generate primitive actions until a termination condition is met\. The primary existing approach applies per\-decision importance sampling at the option level, but requires option\-annotated trajectories and exhibits variance that grows with the horizon and action dimensionality\. For non\-hierarchical policies, fitted Q\-evaluation \(FQE\) typically achieves lower error than importance sampling by leveraging the classic Bellman equation for policy evaluation; however, a naive extension of FQE to hierarchical policies results in a biased policy value estimate\. In this paper, we introduce Intra\-Option Fitted Q\-Evaluation \(IO\-FQE\), which estimates a value function in the augmented state\-option space; this approach enables OPE of hierarchical policies even when we lack annotations of what option was ran in the data\. We develop two continuous\-action instantiations of IO\-FQE and show on hierarchical continuous control tasks \(AntMaze navigation and OGBench Puzzle manipulation\) that IO\-FQE eliminates the bias incurred by a naive application of FQE to hierarchical policies and substantially lowers mean squared\-error compared to option\-level importance sampling\.

## Principled Policy Optimization for LLMs via Self\-Normalized Importance Sampling

**Authors:** Huiyang Shao; Xintong Zhang; Junyi Liu

**ID:** 152868 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PnhgpXd7Ru>) | [PDF](<https://openreview.net/pdf?id=PnhgpXd7Ru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152868>)

Reinforcement Learning from Human Feedback \(RLHF\) is a key technique for aligning Large Language Models \(LLMs\) with human preferences\. While Proximal Policy Optimization \(PPO\) is the standard algorithm, its reliance on a critic network incurs significant memory and computational costs\. This has motivated the development of critic\-free alternatives such as Group Relative Policy Optimization \(GRPO\) and Group Sequence Policy Optimization \(GSPO\)\. However, these methods suffer from a critical trade\-off: they either employ theoretically unsound, high\-variance estimators \(GRPO\) or introduce systematic bias to achieve stability, causing them to optimize a perturbed objective \(GSPO\)\. In this paper, we introduce SNIB \(Self\-Normalized Importance Sampling with a Baseline\), a novel critic\-free algorithm that addresses this dilemma by offering a method that is both stable and asymptotically correct\. SNIB leverages principled self\-normalized importance sampling to achieve the stability of modern methods without sacrificing asymptotic correctness\. We provide a comprehensive theoretical analysis, proving that SNIB's gradient estimator is consistent with a finite\-sample bias that decays as $O\(1/G\)$ under self\-normalization\. Furthermore, we demonstrate its superior robustness to reward model uncertainty and show that it preserves the principled trade\-off between reward maximization and KL regularization, a property that is distorted by biased estimators\. Our work establishes a theoretically\-grounded foundation for building more stable and reliable critic\-free RLHF algorithms\.

## Ensembling Language Models with Sequential Monte Carlo

**Authors:** Robin Chan; Tianyu Liu; Samuel Kiegeland; Clemente Pasti; Jacob Vigly; Timothy O&amp;amp;\#x27;Donnell; Ryan Cotterell; Tim Vieira

**ID:** 148212 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zWigIoVsHo>) | [PDF](<https://openreview.net/pdf?id=zWigIoVsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148212>)

_Abstract unavailable from the accessible public sources._

## $\\epsilon$\-Good Action Identification in Fixed\-Budget Monte Carlo Tree Search

**Authors:** Yinan Li; Ngo Tuan Nguyen; Kwang\-Sung Jun

**ID:** 152538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SPEbur2n6I>) | [PDF](<https://openreview.net/pdf?id=SPEbur2n6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152538>)

We study the fixed\-budget max–min action identification problem in depth\-2 max–min trees, which is an important special case of Monte Carlo Tree Search \(MCTS\)\. In this problem, a learner sequentially and adaptively selects $T$ reward samples from leaves \(depth\-2 nodes\) and then must recommend a subtree \(depth\-1 node\) with the largest min\-value among its children nodes\. Motivated by approximate planning, we focus on \\emph\{$\\varepsilon$\-good subtree identification\}, where any subtree whose min value is within $\\varepsilon$ of optimal maximin value is acceptable\. Our main contribution is an \\emph\{$\\varepsilon$\-agnostic\} algorithm—requiring no knowledge of $\\varepsilon$—that nevertheless achieves error bounds with explicit instance\-dependent dependence on $\\varepsilon$\. We show that, for every meaningful $\\varepsilon$, the misidentification probability decays as $\\exp\\big\(\-\\tilde\\Theta\(\\frac\{T\}\{H\_2\(\\varepsilon\)\} \)\\big\)$, where $H\_2\(\\varepsilon\)$ captures both cross\-subtree and within\-subtree gaps\. In the special case where each subtree has a single leaf, the model reduces to standard multi\-armed bandit identification, and our bounds recover \(up to accelerating factors\) the best\-known $\\varepsilon$\-good guarantees associated with halving\-style methods, while providing a new $\\varepsilon$\-good analysis and guarantee for the Successive Rejects algorithm in fixed budget best arm identification\. On the lower\-bound side, we present complementary positive and negative results\. While there is a gap between the upper and lower bounds, we discuss the main technical challenges in obtaining a tighter lower bound, which tells us that the maximin action identification problem is quite different from the standard $K$\-armed bandits\. To our knowledge, this is the first provable algorithmic guarantee for fixed\-budget maximin action identification\.

## Variational Inference via Entropic Transport Descent

**Authors:** Vincent Pacelli; Akash Ratheesh Babu; Evangelos Theodorou

**ID:** 152888 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pe1qlDnrcO>) | [PDF](<https://openreview.net/pdf?id=Pe1qlDnrcO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152888>)

Particle\-based variational inference \(ParVI\) methods approximate an intractable target distribution by evolving an ensemble of interacting samples\. Existing approaches rely predominantly on kernel\-based repulsion \(e\.g\., SVGD\), which suffers from variance collapse in high dimensions and mode collapse on multimodal targets—pathologies caused by the absence of global transport structure\. We introduce entropic transport descent \(ETD\), a ParVI family that frames each particle update as an entropy\-regularized optimal transport problem\. Derived from the JKO proximal scheme by lifting to the space of couplings and relaxing via the KL chain rule, each ETD iteration reduces to a Sinkhorn computation\. The resulting transport plan provides global coordination, guiding each particle to nearby high\-density proposals and naturally preserving multimodal structure\. ETD can operate entirely score\-free, requiring only pointwise evaluations of the unnormalized target density\. Experiments on variance\-collapse diagnostics, Bayesian logistic regression, neural networks, and molecular Boltzmann distributions show that ETD matches or outperforms SVGD, AGF\-SVGD, and SGLD, with the largest gains in high\-dimensional and multimodal settings\.

## Wavefunction Flows: Efficient Quantum Simulation of Continuous Flow Models

**Authors:** David Layden; Ryan Sweke; Vojtech Havlicek; Anirban Chowdhury; Kirill Neklyudov

**ID:** 154358 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EB9990twi7>) | [PDF](<https://openreview.net/pdf?id=EB9990twi7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154358>)

Continuous flow models transform Gaussian noise into samples from a learned distribution that closely approximates a complex data distribution\. We present a natural mapping between these models and a Schrödinger equation, the fundamental equation of quantum mechanics, whose solution is a quantum state encoding the learned distribution\. Our main result is that this Schrödinger equation is efficiently solvable on a quantum computer, which we prove by precisely bounding the discretization error\. Therefore, given a trained flow model, the theoretical analysis we introduce implies that future quantum computers will enable a fundamentally different—and potentially more powerful—type of access to its learned distribution, which could be used to perform downstream tasks \(e\.g\., Monte Carlo estimation\) more efficiently\. More broadly, our results reveal a rare close connection between state\-of\-the\-art generative modeling techniques, such as flow matching and diffusion models, and one of the main expected capabilities of quantum computers: simulating quantum mechanics\.

## Quantitative Local Convergence of Mean\-Field Stein Variational Gradient Flow

**Authors:** Lénaïc Chizat; Maria Colombo; Roberto Colombo; Xavier Fernández\-Real

**ID:** 154065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GSBxsB28RG>) | [PDF](<https://openreview.net/pdf?id=GSBxsB28RG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154065>)

Stein Variational Gradient Descent \(SVGD\) is a deterministic interacting\-particle method for sampling from a target probability measure given access to its score function\. In the mean\-field and continuous\-time limit, it is known that the flow converges weakly toward the target, but no quantitative rate is known for the last iterate\. In this paper, we establish quantitative local  convergence in strong norms for this dynamics, when the interaction kernels is of Riesz type on the $d$\-dimensional torus\. Specifically, assuming that the initial density and the target are smooth and close in $L^2$\-norm,  we obtain explicit polynomial convergence rates in $L^2$\-norm that depend on the dimension and on the regularity parameters of the kernel, the initialization and the target\. We further show that these rates are sharp in certain regimes, and support the theory with numerical experiments\. In the edge case of kernels with a Coulomb singularity, we recover the global exponential convergence result obtained in prior work\. Our analysis is inspired by recent results on Wasserstein gradient flows of kernel mean discrepancies\.

## Ensembling Language Models with Sequential Monte Carlo

**Authors:** Robin Chan; Tianyu Liu; Samuel Kiegeland; Clemente Pasti; Jacob Vigly; Timothy O&amp;amp;\#x27;Donnell; Ryan Cotterell; Tim Vieira

**ID:** 148212\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148212

[Paper](<https://openreview.net/forum?id=zWigIoVsHo>) | [PDF](<https://openreview.net/pdf?id=zWigIoVsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148212>)

_Abstract unavailable from the accessible public sources._

## FLAG: Flow Policy MaxEnt\-RL by Latent Augmented Guidance

**Authors:** Sungha Kim; Gawon Lee; Jusuk Lee; Jonghae Park; H\. Jin Kim; Daesol Cho

**ID:** 151542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZuIBJ5uEay>) | [PDF](<https://openreview.net/pdf?id=ZuIBJ5uEay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151542>)

Maximum entropy reinforcement learning \(MaxEnt\-RL\) enables robust exploration, yet practical implementations often restrict policies to simple Gaussians\. While recent approaches incorporate expressive generative policies via importance\-weighted supervised learning, they are prone to importance weight collapse, which limits their scalability in high\-dimensional action spaces\. Our key insight is to mitigate this limitation by localizing the sampling region, avoiding the weight degeneracy induced by importance sampling over the entire action space\. To instantiate this insight, we introduce \*\*FLAG\*\* \(\*\*F\*\*low policy with \*\*L\*\*atent\-\*\*A\*\*ugmented \*\*G\*\*uidance\)\. FLAG augments the state space with a flow latent variable and optimizes a provably consistent proxy MaxEnt\-RL objective\. We empirically demonstrate that FLAG enables expressive policy optimization with limited importance samples and scales to high\-dimensional control tasks\. Furthermore, FLAG achieves state\-of\-the\-art performance across challenging benchmarks\.

## Wasserstein Gradient Flows and Forward\-Only Diffusion Are Not Enough for Multimodal Sampling

**Authors:** Daniel McBride; Pratik Khandagale; Cristina Garcia\-Cardona; Yen Ting Lin

**ID:** 140108 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7sdrh3QFdg>) | [PDF](<https://openreview.net/pdf?id=7sdrh3QFdg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140108>)

There has been a plethora of algorithms proposed that leverage Wasserstein gradient flows or forward\-only diffusion processes to perform sampling tasks\. These approaches are often characterized by theoretical guarantees of exponentially fast convergence to the target distribution\. In this work, we study the mixing behavior of this family of sampling methods\. By invoking the Jordan\-\-Kinderlehrer\-\-Otto scheme and Otto calculus, we first establish that Wasserstein gradient flow and forward diffusion\-based samplers share the same density evolution\. Consequently, their convergence can be characterized by studying the convergence behavior of the associated diffusion process, which has been extensively analyzed in nonequilibrium statistical physics\. We perform two independent and well\-established analyses for this purpose, namely spectral analysis and mean first\-passage time analysis\. We show that, although the sampling distributions converge to the target distribution exponentially fast, the presence of multimodality can lead to exponentially long mixing times associated with small spectral gaps\. Further analysis elucidates that even when combined with annealing, this family of samplers still requires impractically long time to sample multimodal distributions\. We discuss the origin of this behavior as a consequence of the local \(i\.e\., gradient\-driven\) dynamics underlying this class of samplers, and highlight the need for non\-local mechanisms to facilitate the transport of probability mass across modes, enabling efficient exploration in multimodal settings\.

## GPA: Generative Population Annealing for Test\-Time Sequence Design with Pretrained Generative Models

**Authors:** Anirban Sarkar; Alejandra Duran; Peter Koo

**ID:** 151988 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WKYqn2amHI>) | [PDF](<https://openreview.net/pdf?id=WKYqn2amHI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151988>)

Oracle\-guided biological sequence design must improve predicted function without moving outside the sequence distribution where the oracle is trustworthy\. We introduce Generative Population Annealing GPA, a test\-time sampler for sequence design with a frozen generator and frozen oracle\. GPA instantiates annealed Sequential Monte Carlo at population scale: particles are initialized from a pretrained sequence prior, reweighted by an oracle reward tilt, selectively upsampled as effective sample size falls, mutated with the pretrained generator, and returned as the design pool\. The base sampler targets a reward\-tilted prior; practical variants shape the proposal or modify the objective to trade activity, specificity, fidelity, and diversity\. Across enhancer and promoter benchmarks, GPA scales to thousands of sequences and is competitive with inference\-time samplers, gradient\-based editors, tree\-search diffusion, and RL\-fine\-tuned generators\. The same inference loop is evaluated with masked discrete\-diffusion and autoregressive DNA generators\. GPA reaches high predicted activity while preserving strong motif fidelity and model\-based likelihood, although specialized baselines retain higher diversity or stronger $k$\-mer fidelity in some settings\. Cross\-oracle and sequence\-level audits suggest fewer obvious reward\-hacking pathologies, including shorter homopolymer runs than CTRL\-DNA in the HepG2 audit \(5\.1 bp mean maximum run versus 20\.9 bp\), but all validation remains computational\.

## How Should Parallel Langevin Chains Share Noise?

**Authors:** Ryan Farell

**ID:** 151033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dTLaD3Us8h>) | [PDF](<https://openreview.net/pdf?id=dTLaD3Us8h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151033>)

Parallel Langevin samplers are usually run as $K$ independent chains and then averaged\.  Independence is convenient, but it is not required by the unadjusted Langevin algorithm \(ULA\): each chain only needs a standard Gaussian noise marginal at each step\.  We use this freedom by coupling the same\-step noises across chains\.  The coupling is simple: draw $K$ iid Gaussian noises, subtract their across\-chain mean, and rescale\.  Each chain still has the ordinary ULA law, but the noise injected into the ensemble average is exactly zero\. For quadratic targets, this removes the Langevin\-noise contribution from every equal\-weight linear summary of the ensemble mean at every finite horizon\. With deterministic or zero\-sum randomized starts, these summaries have zero total variance\.  On UCI Bayesian logistic posteriors with $K=8$, the same construction reduces ensemble\-mean trace variance to $6\\times 10^\{\-3\}$, $2\\times 10^\{\-3\}$, and $5\\times 10^\{\-4\}$ of matched iid ensembles on WDBC, Spambase, and Adult; reference MSE against a longer iid run falls by roughly $4$ to $14\\times$ after accounting for error in the finite reference run\.  The gain is scoped: zero\-sum coupling cancels linear fluctuations, while centered quadratic observables have factor $1/\(K\-1\)$ rather than iid's $1/K$, and random starts, minibatches, and nonquadratic curvature add explicit residual variance terms\.  Synthetic and real\-data experiments match the exact cancellation where it applies and the predicted behavior outside that regime\.

## Manifold Sampling via Entropy Maximization

**Authors:** Cornelius Braun; Tilman Burghoff; Marc Toussaint

**ID:** 149924 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mAVz31YJlN>) | [PDF](<https://openreview.net/pdf?id=mAVz31YJlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149924>)

Sampling from constrained distributions has a wide range of applications, including in Bayesian optimization and robotics\. Prior work establishes convergence and feasibility guarantees for constrained sampling, but assumes that the feasible set is connected\. However, in practice, the feasible set often decomposes into multiple disconnected components, which makes efficient sampling under constraints challenging\. In this paper, we propose MAnifold Sampling via Entropy Maximization \(MASEM\) for sampling on a manifold with an unknown number of disconnected components, implicitly defined by smooth equality and inequality constraints\. The presented method uses a resampling scheme to maximize the entropy of the empirical distribution based on k\-nearest neighbor density estimation\. We show that, in the mean field,  MASEM decreases the KL\-divergence between the empirical distribution and the maximum\-entropy target exponentially in the number of resampling steps\. We instantiate MASEM with multiple local samplers and demonstrate its versatility and efficiency on synthetic and robotics\-based benchmarks\. MASEM enables fast and scalable mixing across a range of constrained sampling problems, improving over alternatives by an order of magnitude in Sinkhorn distance with competitive runtime\.

## Self\-Rewarding Sequential Monte Carlo for Masked Diffusion Language Models

**Authors:** Ziwei Luo; Ziqi Jin; Lei Wang; Lidong Bing; Thomas Schön

**ID:** 150689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gFBldFk335>) | [PDF](<https://openreview.net/pdf?id=gFBldFk335>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150689>)

This work presents self\-rewarding sequential Monte Carlo \(SMC\), an inference\-time scaling algorithm enabling effective sampling of masked diffusion language models \(MDLMs\)\. Our algorithm stems from the observation that most existing MDLMs rely on a confidence\-based sampling strategy, where only tokens with the highest prediction confidence are preserved at each step\. This can restrict generation to a noise\-sensitive, greedy decoding paradigm, often limiting trajectory diversity\. We address this problem by launching multiple interacting diffusion processes in parallel, referred to as \*particles\*, for trajectory exploration\. Importantly, we introduce the trajectory\-level confidence as a self\-rewarding signal for assigning particle importance weights\. During sampling, particles are iteratively weighted and resampled to systematically steer generation towards globally confident, high\-quality samples\. Our self\-rewarding SMC is verified on various masked diffusion language models and benchmarks, achieving significant improvement without extra training or reward guidance, while effectively converting parallel inference capacity into improved sampling quality\.

## Exploring Starts Are Not Enough: Counterexamples and a Fix for Monte Carlo Exploring Starts

**Authors:** Octave Oliviers; Glenn Vinnicombe

**ID:** 148417 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xyHNYFTjvc>) | [PDF](<https://openreview.net/pdf?id=xyHNYFTjvc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148417>)

The asymptotic behaviour of Monte Carlo Exploring Starts \(MCES\) is a long\-standing open question in reinforcement learning, even in the tabular setting\. We investigated the convergence properties of tabular MCES by constructing examples in which the algorithm converges to suboptimal solutions\. This paper presents new counterexamples for both initial\-visit and first\-visit MCES and gives a convergence\-restoring modification for the initial\-visit case\. We show that stable suboptimal solutions may exist for initial\-visit MCES with sample\-average updates even when greedy actions are updated more often than non\-greedy actions on average\. However, by scaling learning rates inversely to update frequencies on a state\-by\-state basis, convergence to optimality is guaranteed\. Unlike previous uniformisation methods, this modification is applicable to large\-scale problems that require approximating the estimated value function\. We then extend the example to show that sample\-average first\-visit MCES may also converge to suboptimal solutions\. This largely settles a fundamental open problem and shows that exploring starts alone do not guarantee convergence to optimality\. More broadly, these results highlight that convergence depends critically on the relative size and frequency of updates applied to different actions, making the choice of learning rates and the balance between exploration and exploitation central to the analysis of MCES and the implementation of scalable Monte Carlo control methods\.

## FLAG: Flow Policy MaxEnt\-RL by Latent Augmented Guidance

**Authors:** Sungha Kim; Gawon Lee; Jusuk Lee; Jonghae Park; H\. Jin Kim; Daesol Cho

**ID:** 151542\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151542

[Paper](<https://openreview.net/forum?id=ZuIBJ5uEay>) | [PDF](<https://openreview.net/pdf?id=ZuIBJ5uEay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151542>)

Maximum entropy reinforcement learning \(MaxEnt\-RL\) enables robust exploration, yet practical implementations often restrict policies to simple Gaussians\. While recent approaches incorporate expressive generative policies via importance\-weighted supervised learning, they are prone to importance weight collapse, which limits their scalability in high\-dimensional action spaces\. Our key insight is to mitigate this limitation by localizing the sampling region, avoiding the weight degeneracy induced by importance sampling over the entire action space\. To instantiate this insight, we introduce \*\*FLAG\*\* \(\*\*F\*\*low policy with \*\*L\*\*atent\-\*\*A\*\*ugmented \*\*G\*\*uidance\)\. FLAG augments the state space with a flow latent variable and optimizes a provably consistent proxy MaxEnt\-RL objective\. We empirically demonstrate that FLAG enables expressive policy optimization with limited importance samples and scales to high\-dimensional control tasks\. Furthermore, FLAG achieves state\-of\-the\-art performance across challenging benchmarks\.

## ESS\-Flow: training\-free guidance as Bayesian inference in source space

**Authors:** Adhithyan Kalaivanan; Zheng Zhao; Jens Sjölund; Fredrik Lindsten

**ID:** 149338 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qokTHEVYpp>) | [PDF](<https://openreview.net/pdf?id=qokTHEVYpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149338>)

Guiding pretrained flow\-based generative models for conditional generation or to produce samples with desired target properties enables solving diverse tasks without retraining on paired data\. We present ESS\-Flow, a gradient\-free method that leverages the Gaussian prior of the source distribution in flow\-based models to perform Bayesian inference directly in the source space using Elliptical Slice Sampling\. ESS\-Flow only requires forward passes through the generative model and observation process, making it applicable even when gradients are unavailable, such as with non\-differentiable simulation\-based observations or quantization in the generation process\. We demonstrate its effectiveness on scientific applications including designing materials with desired target properties and predicting protein structures from sparse inter\-residue distance measurements\.

## What does a Bayes\-filtered transformer believe? A predictive Monte Carlo approach

**Authors:** Afiq Abdillah Effiezal Aswadi; Haotong Ma; Susan Wei

**ID:** 149367 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZ5gMk6Gpd>) | [PDF](<https://openreview.net/pdf?id=qZ5gMk6Gpd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149367>)

_Abstract unavailable from the accessible public sources._

## Finetuning with Sampling: Make SFT Generalize, Not Forget

**Authors:** Aayush Karan; Sitan Chen; Yilun Du

**ID:** 150118 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kXgdaUrvBN>) | [PDF](<https://openreview.net/pdf?id=kXgdaUrvBN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150118>)

Introducing new capabilities to frontier models has long been the goal for posttraining, which relies predominantly on supervised finetuning \(SFT\) and reinforcement learning \(RL\) to achieve this\. Prevailing wisdom dictates that on\-policy RL enables strong generalization on new tasks without losing existing capabilities, while SFT is prone to weak generalization and forgetting\. At the same time, SFT enables learning from inherently off\-policy expert data, whereas RL must rely on a model's ability to generate positive signal on a new task\. In our work, we seek to bridge the strength of on\-policy learning with the information signal of off\-policy expert traces\. To this end, we introduce a Markov chain Monte Carlo \(MCMC\) sampling algorithm that transforms off\-policy traces into more on\-policy ones given a reference model for finetuning\. Across tasks like scientific skill acquisition, mathematical reasoning, and fact learning, we demonstrate that simple SFT on these boosted off\-policy traces can generalize better and forget less than on\-policy counterparts\. More generally, our approach outlines a principled methodology for model\-specific data refinement, suggesting broader utility as a plug\-and\-play component throughout the post\-training pipeline\.

## Robust Importance Sampling for Rare Events via Constrained Gaussian Mixtures

**Authors:** Pawel Lorek; Rafal Nowak; Rafał Topolnicki; Tomasz Trzcinski; Maciej Zieba

**ID:** 149349 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qj7n3ANylE>) | [PDF](<https://openreview.net/pdf?id=qj7n3ANylE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149349>)

_Abstract unavailable from the accessible public sources._

## Locality Sensitive Hashing for p\-Exponential Kernels with Applications to Density Estimation

**Authors:** Barak Gorodissky; Tal Wagner

**ID:** 152589 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RyF0cieapR>) | [PDF](<https://openreview.net/pdf?id=RyF0cieapR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152589>)

_Abstract unavailable from the accessible public sources._

## Dimension\-Uniform Discretization Analysis of Preconditioned Annealed Langevin Dynamics for Multimodal Gaussian Mixtures

**Authors:** Lorenzo Baldassari; Josselin Garnier; Knut Solna; Maarten V\. de Hoop

**ID:** 153363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LvzRfDwh4K>) | [PDF](<https://openreview.net/pdf?id=LvzRfDwh4K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153363>)

Obtaining stable diffusion\-based samplers in high\- and infinite\-dimensional settings is challenging because errors can accumulate across high\-frequency coordinates and make the dynamics unstable under refinement of the finite\-dimensional approximation of the underlying function\-space problem\. Discretization is a typical source of such errors, and preconditioning with a suitable spectral decay is one way to control their accumulation\. In this paper, we study this problem for preconditioned annealed Langevin dynamics \(ALD\) applied to Gaussian mixtures\. We first show that Euler\-Maruyama \(EM\) discretization, by treating the stiff linear part of the annealed score with a forward Euler step, imposes a stability constraint coupling the preconditioner with the annealed covariance scale\. Together with the conditions ensuring dimension\-uniform control of the annealed dynamics, this constraint forces the initial smoothed law to remain uniformly close to the target across dimensions\. We then consider an exponential\-integrator scheme that integrates the stiff linear part of the annealed score exactly\. Under explicit spectral summability conditions coupling the smoothing covariance, the component covariance spectra, and the preconditioner, we prove a dimension\-uniform Kullback\-Leibler \(KL\) bound for this scheme\. This bound can be made arbitrarily small, uniformly in dimension, by allowing enough time for annealing and then refining the time mesh accordingly\. Importantly, these conditions allow regimes in which the KL divergence between the target and the initial smoothed law diverges with dimension, showing that the restrictions imposed by EM are scheme\-dependent rather than intrinsic to ALD\.

## Tropical Boundary Complexity of Deep ReLU Networks

**Authors:** Jun Li

**ID:** 156044 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0pa5znZWZc>) | [PDF](<https://openreview.net/pdf?id=0pa5znZWZc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156044>)

We derive a recursion for the expected squared Frobenius norm of the zonotope generator matrices that govern the decision boundary of a random Gaussian deep ReLU binary classifier\. For a network of depth $L$ with weight variances $\(\\sigma\_\{l=1\.\.L\}^2\)$, the boundary complexity is $\\Gamma\_L = 8\(1\+1/\\pi\)\\prod\_\{l=1\}^\{L\} \\sigma\_l^2/2$\.  He initialization $\\sigma\_w^2 = 2$ is the unique uniform weight variance under which $\\Gamma\_L$ is preserved with depth, matching the Poole\-\-Schoenholz mean\-field critical value on a different observable\.  $\\Gamma\_L$ is identified with an observable per\-unit\-length boundary\-crossing density via Rice's formula\. The relation is supported by Monte Carlo experiments\.

## Self\-Rewarding Sequential Monte Carlo for Masked Diffusion Language Models

**Authors:** Ziwei Luo; Ziqi Jin; Lei Wang; Lidong Bing; Thomas Schön

**ID:** 150689\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150689

[Paper](<https://openreview.net/forum?id=gFBldFk335>) | [PDF](<https://openreview.net/pdf?id=gFBldFk335>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150689>)

This work presents self\-rewarding sequential Monte Carlo \(SMC\), an inference\-time scaling algorithm enabling effective sampling of masked diffusion language models \(MDLMs\)\. Our algorithm stems from the observation that most existing MDLMs rely on a confidence\-based sampling strategy, where only tokens with the highest prediction confidence are preserved at each step\. This can restrict generation to a noise\-sensitive, greedy decoding paradigm, often limiting trajectory diversity\. We address this problem by launching multiple interacting diffusion processes in parallel, referred to as \*particles\*, for trajectory exploration\. Importantly, we introduce the trajectory\-level confidence as a self\-rewarding signal for assigning particle importance weights\. During sampling, particles are iteratively weighted and resampled to systematically steer generation towards globally confident, high\-quality samples\. Our self\-rewarding SMC is verified on various masked diffusion language models and benchmarks, achieving significant improvement without extra training or reward guidance, while effectively converting parallel inference capacity into improved sampling quality\.

## FLAG: Flow Policy MaxEnt\-RL by Latent Augmented Guidance

**Authors:** Sungha Kim; Gawon Lee; Jusuk Lee; Jonghae Park; H\. Jin Kim; Daesol Cho

**ID:** 151542\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151542

[Paper](<https://openreview.net/forum?id=ZuIBJ5uEay>) | [PDF](<https://openreview.net/pdf?id=ZuIBJ5uEay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151542>)

Maximum entropy reinforcement learning \(MaxEnt\-RL\) enables robust exploration, yet practical implementations often restrict policies to simple Gaussians\. While recent approaches incorporate expressive generative policies via importance\-weighted supervised learning, they are prone to importance weight collapse, which limits their scalability in high\-dimensional action spaces\. Our key insight is to mitigate this limitation by localizing the sampling region, avoiding the weight degeneracy induced by importance sampling over the entire action space\. To instantiate this insight, we introduce \*\*FLAG\*\* \(\*\*F\*\*low policy with \*\*L\*\*atent\-\*\*A\*\*ugmented \*\*G\*\*uidance\)\. FLAG augments the state space with a flow latent variable and optimizes a provably consistent proxy MaxEnt\-RL objective\. We empirically demonstrate that FLAG enables expressive policy optimization with limited importance samples and scales to high\-dimensional control tasks\. Furthermore, FLAG achieves state\-of\-the\-art performance across challenging benchmarks\.

## Manifold Sampling via Entropy Maximization

**Authors:** Cornelius Braun; Tilman Burghoff; Marc Toussaint

**ID:** 149924\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149924

[Paper](<https://openreview.net/forum?id=mAVz31YJlN>) | [PDF](<https://openreview.net/pdf?id=mAVz31YJlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149924>)

Sampling from constrained distributions has a wide range of applications, including in Bayesian optimization and robotics\. Prior work establishes convergence and feasibility guarantees for constrained sampling, but assumes that the feasible set is connected\. However, in practice, the feasible set often decomposes into multiple disconnected components, which makes efficient sampling under constraints challenging\. In this paper, we propose MAnifold Sampling via Entropy Maximization \(MASEM\) for sampling on a manifold with an unknown number of disconnected components, implicitly defined by smooth equality and inequality constraints\. The presented method uses a resampling scheme to maximize the entropy of the empirical distribution based on k\-nearest neighbor density estimation\. We show that, in the mean field,  MASEM decreases the KL\-divergence between the empirical distribution and the maximum\-entropy target exponentially in the number of resampling steps\. We instantiate MASEM with multiple local samplers and demonstrate its versatility and efficiency on synthetic and robotics\-based benchmarks\. MASEM enables fast and scalable mixing across a range of constrained sampling problems, improving over alternatives by an order of magnitude in Sinkhorn distance with competitive runtime\.

## Stein Transport for Generative Modeling

**Authors:** Clémentine CHAZAL; Linfeng Wang; Anna Korba; Nikolas Nüsken

**ID:** 154118 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G8E7Hq2vAz>) | [PDF](<https://openreview.net/pdf?id=G8E7Hq2vAz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154118>)

We propose a nonparametric, kernel\-based approach to generative modeling based on Stein operators and particle transport\. Our method constructs a continuous\-time transport from a simple reference distribution \(typically, a standard Gaussian\) to a target distribution using a Stein formulation of the continuity equation\. Unlike alternative  Stein transport methods, which require access to the target density or its gradient, we focus on the sample\-only setting and introduce a tractable surrogate objective based on an Ornstein\-\-Uhlenbeck \(OU\) probability path\. This construction allows the velocity field driving the transport to be learned using only samples from the target distribution and Gaussian noise\. By restricting the velocity field to a reproducing kernel Hilbert space, we obtain closed\-form solutions via kernel ridge regression at each time step\. The resulting method is particularly well suited to small data regimes, where heavily parameterised neural generative models may be difficult to train or overfit\. We demonstrate the usefulness of the approach for sample\-based generative modeling in the small data regime \(generative data augmentation\), and for posterior emulation in Bayesian inverse problems, where expensive Monte Carlo samplers produce limited sets of posterior samples that must be efficiently augmented\.

## An Efficient Algorithm for Thresholding Monte Carlo Tree Search

**Authors:** Shoma Nameki; Atsuyoshi Nakamura; Junpei Komiyama; Koji Tabata

**ID:** 153387 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LlqiVTIyml>) | [PDF](<https://openreview.net/pdf?id=LlqiVTIyml>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153387>)

We introduce the Thresholding Monte Carlo Tree Search problem, in which, given a tree $\\mathcal\{T\}$ and a threshold $\\theta$, a player must answer whether the root node value of $\\mathcal\{T\}$ is at least $\\theta$ or not\. In the given tree, 'MAX' or 'MIN' is labeled on each internal node, and the value of a 'MAX'\-labeled \('MIN'\-labeled\) internal node is the maximum \(minimum\) of its child values\. The value of a leaf node is the mean reward of an unknown distribution, from which the player can sample rewards\. For this problem, we develop a $\\delta$\-correct sequential sampling algorithm based on the Track\-and\-Stop strategy that has asymptotically optimal sample complexity\.  We show that a ratio\-based modification of the D\-Tracking arm\-pulling strategy leads to a substantial improvement in empirical sample complexity, as well as reducing the per\-round computational cost from linear to logarithmic in the number of arms\.

## Resolving Time\-Frequency Ridge Crossings via Frequency\-Rate Lifting

**Authors:** Pingping Pan; You Li; Yunjian Zhang; Mu\-Jiang\-Shan Wang

**ID:** 149622 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ojSIdIqCYx>) | [PDF](<https://openreview.net/pdf?id=ojSIdIqCYx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149622>)

Ridge crossings, where two components share the same instantaneous frequency \(IF\) at a given time, are a fundamental bottleneck in multi\-component time\-frequency \(TF\) mode decomposition\. We trace this difficulty to \\emph\{insufficient representational dimensionality\} and resolve it by lifting signals into the 3\-D time\-frequency\-frequency\-rate \(TFFR\) space $\(t,f,\\dot\{f\}\)$, where crossing ridges separate because they typically differ in the instantaneous frequency rate \(IFR\)\. We formalize this via a separability proposition and confirm it empirically through Monte Carlo simulation \(crossing rate: 78\.6\\% in 2\-D $\\to$ 0\.9\\% in 3\-D\)\. Based on this principle, we propose \\textbf\{TFFR\-Net\}, a query\-based masked transformer that jointly predicts per\-ridge masks and dense IFR maps\. An IFR feedback loop injects the estimated frequency rate back into each query embedding, enabling the decoder to perform instance discrimination in TFFR space rather than the TF plane\. On a synthetic benchmark with up to six chirp components under broadband noise \(0\-\-25\\,dB SNR\), TFFR\-Net consistently reduces IF MAE by at least 5\.8\\% and Dice loss by at least 5\.4\\% relative to  competing methods\. Evaluation on real\-world signals \(bat echolocation, power\-system oscillation, earthquake vibration\) demonstrates effective generalization beyond synthetic training data\. The source code is available at \\url\{https://anonymous\.4open\.science/r/TFFR\-92D2/\}\.

## Dimension\-Uniform Discretization Analysis of Preconditioned Annealed Langevin Dynamics for Multimodal Gaussian Mixtures

**Authors:** Lorenzo Baldassari; Josselin Garnier; Knut Solna; Maarten V\. de Hoop

**ID:** 153363\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153363

[Paper](<https://openreview.net/forum?id=LvzRfDwh4K>) | [PDF](<https://openreview.net/pdf?id=LvzRfDwh4K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153363>)

Obtaining stable diffusion\-based samplers in high\- and infinite\-dimensional settings is challenging because errors can accumulate across high\-frequency coordinates and make the dynamics unstable under refinement of the finite\-dimensional approximation of the underlying function\-space problem\. Discretization is a typical source of such errors, and preconditioning with a suitable spectral decay is one way to control their accumulation\. In this paper, we study this problem for preconditioned annealed Langevin dynamics \(ALD\) applied to Gaussian mixtures\. We first show that Euler\-Maruyama \(EM\) discretization, by treating the stiff linear part of the annealed score with a forward Euler step, imposes a stability constraint coupling the preconditioner with the annealed covariance scale\. Together with the conditions ensuring dimension\-uniform control of the annealed dynamics, this constraint forces the initial smoothed law to remain uniformly close to the target across dimensions\. We then consider an exponential\-integrator scheme that integrates the stiff linear part of the annealed score exactly\. Under explicit spectral summability conditions coupling the smoothing covariance, the component covariance spectra, and the preconditioner, we prove a dimension\-uniform Kullback\-Leibler \(KL\) bound for this scheme\. This bound can be made arbitrarily small, uniformly in dimension, by allowing enough time for annealing and then refining the time mesh accordingly\. Importantly, these conditions allow regimes in which the KL divergence between the target and the initial smoothed law diverges with dimension, showing that the restrictions imposed by EM are scheme\-dependent rather than intrinsic to ALD\.

## Tropical Boundary Complexity of Deep ReLU Networks

**Authors:** Jun Li

**ID:** 156044\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156044

[Paper](<https://openreview.net/forum?id=0pa5znZWZc>) | [PDF](<https://openreview.net/pdf?id=0pa5znZWZc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156044>)

We derive a recursion for the expected squared Frobenius norm of the zonotope generator matrices that govern the decision boundary of a random Gaussian deep ReLU binary classifier\. For a network of depth $L$ with weight variances $\(\\sigma\_\{l=1\.\.L\}^2\)$, the boundary complexity is $\\Gamma\_L = 8\(1\+1/\\pi\)\\prod\_\{l=1\}^\{L\} \\sigma\_l^2/2$\.  He initialization $\\sigma\_w^2 = 2$ is the unique uniform weight variance under which $\\Gamma\_L$ is preserved with depth, matching the Poole\-\-Schoenholz mean\-field critical value on a different observable\.  $\\Gamma\_L$ is identified with an observable per\-unit\-length boundary\-crossing density via Rice's formula\. The relation is supported by Monte Carlo experiments\.

## Self\-Rewarding Sequential Monte Carlo for Masked Diffusion Language Models

**Authors:** Ziwei Luo; Ziqi Jin; Lei Wang; Lidong Bing; Thomas Schön

**ID:** 150689\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150689

[Paper](<https://openreview.net/forum?id=gFBldFk335>) | [PDF](<https://openreview.net/pdf?id=gFBldFk335>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150689>)

This work presents self\-rewarding sequential Monte Carlo \(SMC\), an inference\-time scaling algorithm enabling effective sampling of masked diffusion language models \(MDLMs\)\. Our algorithm stems from the observation that most existing MDLMs rely on a confidence\-based sampling strategy, where only tokens with the highest prediction confidence are preserved at each step\. This can restrict generation to a noise\-sensitive, greedy decoding paradigm, often limiting trajectory diversity\. We address this problem by launching multiple interacting diffusion processes in parallel, referred to as \*particles\*, for trajectory exploration\. Importantly, we introduce the trajectory\-level confidence as a self\-rewarding signal for assigning particle importance weights\. During sampling, particles are iteratively weighted and resampled to systematically steer generation towards globally confident, high\-quality samples\. Our self\-rewarding SMC is verified on various masked diffusion language models and benchmarks, achieving significant improvement without extra training or reward guidance, while effectively converting parallel inference capacity into improved sampling quality\.

## Variational Inference via Entropic Transport Descent

**Authors:** Vincent Pacelli; Akash Ratheesh Babu; Evangelos Theodorou

**ID:** 152888\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152888

[Paper](<https://openreview.net/forum?id=Pe1qlDnrcO>) | [PDF](<https://openreview.net/pdf?id=Pe1qlDnrcO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152888>)

Particle\-based variational inference \(ParVI\) methods approximate an intractable target distribution by evolving an ensemble of interacting samples\. Existing approaches rely predominantly on kernel\-based repulsion \(e\.g\., SVGD\), which suffers from variance collapse in high dimensions and mode collapse on multimodal targets—pathologies caused by the absence of global transport structure\. We introduce entropic transport descent \(ETD\), a ParVI family that frames each particle update as an entropy\-regularized optimal transport problem\. Derived from the JKO proximal scheme by lifting to the space of couplings and relaxing via the KL chain rule, each ETD iteration reduces to a Sinkhorn computation\. The resulting transport plan provides global coordination, guiding each particle to nearby high\-density proposals and naturally preserving multimodal structure\. ETD can operate entirely score\-free, requiring only pointwise evaluations of the unnormalized target density\. Experiments on variance\-collapse diagnostics, Bayesian logistic regression, neural networks, and molecular Boltzmann distributions show that ETD matches or outperforms SVGD, AGF\-SVGD, and SGLD, with the largest gains in high\-dimensional and multimodal settings\.

## $\\epsilon$\-Good Action Identification in Fixed\-Budget Monte Carlo Tree Search

**Authors:** Yinan Li; Ngo Tuan Nguyen; Kwang\-Sung Jun

**ID:** 152538\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152538

[Paper](<https://openreview.net/forum?id=SPEbur2n6I>) | [PDF](<https://openreview.net/pdf?id=SPEbur2n6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152538>)

We study the fixed\-budget max–min action identification problem in depth\-2 max–min trees, which is an important special case of Monte Carlo Tree Search \(MCTS\)\. In this problem, a learner sequentially and adaptively selects $T$ reward samples from leaves \(depth\-2 nodes\) and then must recommend a subtree \(depth\-1 node\) with the largest min\-value among its children nodes\. Motivated by approximate planning, we focus on \\emph\{$\\varepsilon$\-good subtree identification\}, where any subtree whose min value is within $\\varepsilon$ of optimal maximin value is acceptable\. Our main contribution is an \\emph\{$\\varepsilon$\-agnostic\} algorithm—requiring no knowledge of $\\varepsilon$—that nevertheless achieves error bounds with explicit instance\-dependent dependence on $\\varepsilon$\. We show that, for every meaningful $\\varepsilon$, the misidentification probability decays as $\\exp\\big\(\-\\tilde\\Theta\(\\frac\{T\}\{H\_2\(\\varepsilon\)\} \)\\big\)$, where $H\_2\(\\varepsilon\)$ captures both cross\-subtree and within\-subtree gaps\. In the special case where each subtree has a single leaf, the model reduces to standard multi\-armed bandit identification, and our bounds recover \(up to accelerating factors\) the best\-known $\\varepsilon$\-good guarantees associated with halving\-style methods, while providing a new $\\varepsilon$\-good analysis and guarantee for the Successive Rejects algorithm in fixed budget best arm identification\. On the lower\-bound side, we present complementary positive and negative results\. While there is a gap between the upper and lower bounds, we discuss the main technical challenges in obtaining a tighter lower bound, which tells us that the maximin action identification problem is quite different from the standard $K$\-armed bandits\. To our knowledge, this is the first provable algorithmic guarantee for fixed\-budget maximin action identification\.

## Specificity\-Aware Diffusion Steering via Variance\-Reduced Sequential Monte Carlo

**Authors:** Luran Wang; Linrui Ma; Hannes Stark; Regina Barzilay

**ID:** 149673 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIBOJ76wYl>) | [PDF](<https://openreview.net/pdf?id=oIBOJ76wYl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149673>)

Inference\-time steering enables pretrained diffusion models to satisfy new constraints without full retraining\. However, specificity\-aware generation is difficult: repelling samples from a negative reference distribution can also erode the positive distribution where the two overlap\. The key challenge is to suppress negative mass while minimally distorting the positive distribution\. We address this problem by formulating specificity\-aware steering as a target\-design problem and deriving a target distribution from an overlap\-based objective\. The resulting target keeps the desired reference distribution only in regions where it is sufficiently preferred over the undesired reference distribution, giving a likelihood\-ratio interpretation of specificity\. To sample from the corresponding time\-dependent target path, we develop a Sequential Monte Carlo sampler with a variance\-minimized local proposal\. We further introduce a practical fixed\-noise optimization procedure that requires only Jacobian\-\-vector products with the desired and undesired score fields\. Experiments on synthetic mixtures, class\-contrastive generation, and text\-to\-image tasks show that the proposed method suppresses undesired regions more effectively, reduces mode shift, and improves sampling stability by decreasing the SMC weight collapse compared with negative\-guidance baselines\.

